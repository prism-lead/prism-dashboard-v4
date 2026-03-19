// ═══════════════════════════════════════════════════════════════
// PRISM DATA LOADER — Reads studies from CSV + JSON; pages use getStudyData()
// ═══════════════════════════════════════════════════════════════

import Papa from "papaparse";
import { SEGMENT_DEFINITIONS, SEGMENT_CODES } from "./static/segments.js";

// Raw CSV and JSON imports (Vite)
import roiRawEsi from "./studies/esi/roiData.csv?raw";
import roiRawMa from "./studies/ma/roiData.csv?raw";
import msgRawEsi from "./studies/esi/messageMap.csv?raw";
import msgRawMa from "./studies/ma/messageMap.csv?raw";
import messageCopyEsi from "./studies/esi/messageCopy.json";
import messageCopyMa from "./studies/ma/messageCopy.json";
import configEsi from "./studies/esi/config.json";
import configMa from "./studies/ma/config.json";
import prePostEsi from "./studies/esi/prePost.json";
import prePostMa from "./studies/ma/prePost.json";

const ROI_RAW = { esi: roiRawEsi, ma: roiRawMa };
const MSG_RAW = { esi: msgRawEsi, ma: msgRawMa };
const MESSAGE_COPY = { esi: messageCopyEsi, ma: messageCopyMa };
const CONFIG = { esi: configEsi, ma: configMa };
const PREPOST = { esi: prePostEsi, ma: prePostMa };

function parseRoi(csvRaw) {
  const { data } = Papa.parse(csvRaw, { header: true, skipEmptyLines: true });
  const byCode = {};
  data.forEach((row) => {
    byCode[row.segmentId] = {
      roi: parseFloat(row.roiScore) || 0,
      highRoi: parseFloat(row.persuasionPct) || 0,
      persuadability: [
        parseInt(row.persuasionHighLeverage, 10) || 0,
        parseInt(row.persuasionLowLeverage, 10) || 0,
        parseInt(row.persuasionNotConvertible, 10) || 0,
        parseInt(row.persuasionNotPersuadable, 10) || 0,
        parseInt(row.persuasionNegMovement, 10) || 0,
      ],
      supporters: parseInt(row.coalitionPct, 10) || 0,
      activation: parseInt(row.activationPct, 10) || 0,
      influence: parseInt(row.influencePct, 10) || 0,
      tier: parseInt(row.tier, 10) || 2,
    };
  });
  return byCode;
}

function parseMessageMap(csvRaw, messageCopy) {
  const { data } = Papa.parse(csvRaw, { header: true, skipEmptyLines: true });
  return data.map((row) => {
    const sop = [
      parseFloat(row.Total) || 0,
      ...SEGMENT_CODES.map((code) => parseFloat(row[code]) || 0),
      parseFloat(row.PolicyElites) || 0,
    ];
    const shortName = (row.messageLabel || "").replace(/^"|"$/g, "").trim();
    const idKey = String(row.messageId || "");
    const fullText = messageCopy && messageCopy[idKey];
    return {
      id: parseInt(row.messageId, 10) || 0,
      shortName,
      text: fullText || shortName,
      theme: row.theme || "Other",
      sop,
    };
  });
}

function buildSegments(studyId) {
  const roiByCode = parseRoi(ROI_RAW[studyId]);
  const prePost = PREPOST[studyId];
  const metrics = prePost?.metrics || [];
  const bySeg = prePost?.bySeg || {};

  return SEGMENT_DEFINITIONS.map((def) => {
    const roi = roiByCode[def.code] || {};
    return {
      id: def.id,
      code: def.code,
      name: def.name,
      party: def.party,
      pop: def.pop,
      roi: roi.roi ?? 0,
      highRoi: roi.highRoi ?? 0,
      persuadability: roi.persuadability ?? [0, 0, 0, 0, 0],
      supporters: roi.supporters ?? 0,
      activation: roi.activation ?? 0,
      influence: roi.influence ?? 0,
      prePost: bySeg[def.code] || {},
    };
  });
}

const cache = {};

/**
 * Returns study data for the given studyId ('esi' | 'ma').
 * Pages should use this instead of importing studyData.js.
 * @returns {{ roi: Array, messageMap: Array, config: Object, prePostMetrics: Array }}
 */
export function getStudyData(studyId) {
  const id = (studyId || "esi").toLowerCase();
  if (id !== "esi" && id !== "ma") return getStudyData("esi");

  if (!cache[id]) {
    const config = CONFIG[id] || {};
    const segments = buildSegments(id);
    const messages = parseMessageMap(MSG_RAW[id], MESSAGE_COPY[id]);
    const prePostMetrics = (PREPOST[id] && PREPOST[id].metrics) || [];
    cache[id] = {
      roi: segments,
      messageMap: messages,
      config,
      segments,
      messages,
      prePostMetrics,
    };
  }
  return cache[id];
}
