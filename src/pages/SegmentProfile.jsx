/* eslint-disable react-refresh/only-export-components */
import { useState, useMemo, createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import IdeologyHeatmap from "./IdeologyHeatmap";
import { USCensusMap } from "../components/USCensusMap";
import {
  BELIEFS,
  ENTITIES,
  SEGMENT_BELIEFS,
  segments,
  SEGMENTS,
  STUDY_ROI,
  TIER_ACCENT,
  TIER_LABELS,
  TRUST_DATA,
} from "../data/profile";
import DemographicsPanel from "../components/tabs/DemographicsPanel";
import BeliefsPanel from "../components/tabs/BeliefsPanel";
import TrustPanel from "../components/tabs/TrustPanel";
import ExpPanel from "../components/tabs/ExpPanel";
import WellnessPanel from "../components/tabs/WellnessPanel";
import MediaPanel from "../components/tabs/MediaPanel";
import ProfileVectorRadar from "../components/tabs/ProfileVectorRadar";
import VectorBars from "../components/tabs/VectorBars";
import SchemaBlock from "../components/tabs/SchemaBlock";
import MiniDonut from "../components/tabs/MiniDonut";

// Profile palette from app theme (so Audience Profile respects Light/Dark)
const DEFAULT_C = {
  bg: "#080c16",
  card: "#111620",
  border: "#1c2433",
  text1: "#dce4ed",
  text2: "#7b8da3",
  text3: "#475569",
  accent: "#5b93c7",
  accentLight: "#7eb3e0",
  ring1: "#5b93c7",
  ring2: "#1c2433",
  mapActive: "#5b93c7",
  mapActiveBorder: "#7eb3e0",
  mapIdle: "#151c28",
  mapIdleBorder: "#222d3d",
};
function buildC(theme) {
  return {
    bg: theme.background,
    card: theme.surface,
    border: theme.border,
    text1: theme.text,
    text2: theme.textMuted,
    text3: theme.textDim,
    accent: theme.accent,
    accentLight: theme.accentHover || theme.accent,
    ring1: theme.accent,
    ring2: theme.border,
    mapActive: theme.accent,
    mapActiveBorder: theme.accentHover || theme.accent,
    mapIdle: theme.surfaceInner,
    mapIdleBorder: theme.border,
    // Profile panels (BELIEFS, TRUST, EXPERIENCE, CULTURE, MEDIA) — theme-aware
    cardBorder: theme.cardBorder ?? theme.border,
    text: theme.text,
    textMuted: theme.textMuted,
    textDim: theme.textDim,
    white: theme.text,
    steel: theme.steel,
    amber: theme.amber,
    green: theme.green,
    red: theme.red,
    cyan: theme.cyan,
    violet: theme.violet,
    rose: theme.rose,
    teal: theme.teal,
    govtBlue: theme.blue,
    corpAmber: theme.amber,
    dotStrip: theme.dotStrip ?? theme.surfaceInner,
    partyGOP: theme.repRed,
    partyDEM: theme.demBlue,
  };
}
const ProfileCContext = createContext(DEFAULT_C);
export function useProfileC() {
  return useContext(ProfileCContext) || DEFAULT_C;
}

// function PrePostBar({ pre, post, mw = 75 }) {
//   const C = useProfileC();
//   const d = post - pre;
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
//       {[
//         { l: "PRE", v: pre, bc: "#475569", tc: "#94a3b8" },
//         { l: "POST", v: post, bc: "#3b82f6", tc: "#e2e8f0" },
//       ].map((r, i) => (
//         <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
//           <span
//             style={{
//               width: 24,
//               fontSize: 8,
//               color: i === 0 ? "#64748b" : "#60a5fa",
//               textAlign: "right",
//               fontFamily: "'Nunito',sans-serif",
//             }}
//           >
//             {r.l}
//           </span>
//           <div
//             style={{
//               flex: 1,
//               height: 11,
//               background: "#1e293b",
//               borderRadius: 2,
//             }}
//           >
//             <div
//               style={{
//                 width: `${(r.v / mw) * 100}%`,
//                 height: "100%",
//                 background: r.bc,
//                 borderRadius: 2,
//                 transition: "width 0.5s",
//               }}
//             />
//           </div>
//           <span
//             style={{
//               width: 34,
//               fontSize: 9,
//               color: r.tc,
//               fontFamily: "'Nunito',sans-serif",
//               fontWeight: i === 1 ? 700 : 500,
//             }}
//           >
//             {r.v.toFixed(1)}
//           </span>
//         </div>
//       ))}
//       <div style={{ textAlign: "right" }}>
//         <span
//           style={{
//             fontSize: 9,
//             fontWeight: 700,
//             fontFamily: "'Nunito',sans-serif",
//             color: d > 0 ? "#34d399" : d < 0 ? "#f87171" : "#64748b",
//             padding: "1px 5px",
//             borderRadius: 6,
//             background:
//               d > 0
//                 ? "rgba(52,211,153,0.12)"
//                 : d < 0
//                   ? "rgba(248,113,113,0.12)"
//                   : "rgba(100,116,139,0.12)",
//           }}
//         >
//           {d > 0 ? "+" : ""}
//           {d.toFixed(1)}
//         </span>
//       </div>
//     </div>
//   );
// }
// const PP_LABELS = [
//   { key: "rank", label: "Industry Rank", sub: "Top-2 (1st/2nd)" },
//   { key: "att1", label: "Domestic Mfg", sub: "Top-2 (6-7)" },
//   { key: "att2", label: "Congress Support", sub: "Top-2 (6-7)" },
//   { key: "fav", label: "Industry Fav", sub: "Top-4 (7-10)" },
// ];

// function TrustChart({ pharma, corp, govt }) {
//   const C = useProfileC();
//   const max = 7;
//   const items = [
//     { l: "Govt", v: govt, c: "#a78bfa" },
//     { l: "Corp", v: corp, c: "#60a5fa" },
//     { l: "Pharma", v: pharma, c: "#2dd4bf" },
//   ];
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
//       {items.map((it, i) => (
//         <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
//           <span
//             style={{
//               width: 34,
//               fontSize: 7,
//               color: C.text2,
//               textAlign: "right",
//               fontFamily: "'Nunito',sans-serif",
//             }}
//           >
//             {it.l}
//           </span>
//           <div
//             style={{
//               flex: 1,
//               height: 12,
//               background: C.bg,
//               borderRadius: 3,
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             <div
//               style={{
//                 width: `${(it.v / max) * 100}%`,
//                 height: "100%",
//                 background: it.c,
//                 borderRadius: 3,
//                 opacity: 0.85,
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 right: 3,
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 fontSize: 8,
//                 fontWeight: 700,
//                 color: C.text1,
//                 fontFamily: "'Nunito',sans-serif",
//               }}
//             >
//               {it.v.toFixed(1)}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// ════════════════════════════════════════════════════════════════
// IDEOLOGY TAB (heatmap filtered for single segment, with all-seg context)
// ════════════════════════════════════════════════════════════════
// function IdeologyPanel({ seg }) {
//   const C = useProfileC();
//   const segIdx = seg.id - 1;
//   const allDims = IDEOLOGY_GROUPS.flatMap((g) => g.dims);
//   const means = {};
//   allDims.forEach((d) => {
//     const vals = IDEOLOGY_DATA[d.key];
//     means[d.key] = vals.reduce((a, b) => a + b, 0) / vals.length;
//   });

//   function getColor(val) {
//     const t = Math.max(0, Math.min(1, (val - 1.5) / 5.0));
//     if (t < 0.35) {
//       const s = t / 0.35;
//       return `rgba(59,130,246,${0.5 - s * 0.18})`;
//     } else if (t < 0.55) {
//       const s = (t - 0.35) / 0.2;
//       return `rgba(100,116,139,${0.08 + s * 0.04})`;
//     } else {
//       const s = (t - 0.55) / 0.45;
//       return `rgba(239,68,68,${0.12 + s * 0.42})`;
//     }
//   }
//   function getTC(val) {
//     if (val >= 5.3) return "#fecaca";
//     if (val >= 4.8) return "#d1d5db";
//     if (val <= 2.5) return "#bfdbfe";
//     if (val <= 3.2) return "#c7d2db";
//     return "#8a95a5";
//   }

//   // Show a single-column heatmap for this segment plus deviation from mean
//   return (
//     <div style={{ animation: "fadeIn 0.25s ease" }}>
//       <div
//         style={{
//           fontSize: 11,
//           color: "#94a3b8",
//           marginBottom: 12,
//           lineHeight: 1.5,
//         }}
//       >
//         Segment means on 1–7 bipolar ideological scales. Deviation from the
//         16-segment mean shown alongside.
//       </div>

//       {/* Legend */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: 10,
//           marginBottom: 14,
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: 0,
//             borderRadius: 4,
//             overflow: "hidden",
//           }}
//         >
//           {[2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0].map((v) => (
//             <div
//               key={v}
//               style={{
//                 width: 22,
//                 height: 14,
//                 background: getColor(v),
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <span style={{ fontSize: 6, color: getTC(v), fontWeight: 600 }}>
//                 {v.toFixed(1)}
//               </span>
//             </div>
//           ))}
//         </div>
//         <span
//           style={{
//             fontSize: 7,
//             color: "#64748b",
//             fontFamily: "'Nunito',sans-serif",
//           }}
//         >
//           ← Liberal pole · Conservative pole →
//         </span>
//       </div>

//       <div
//         style={{
//           background: C.card,
//           borderRadius: 8,
//           border: `1px solid ${C.border}`,
//           overflow: "hidden",
//         }}
//       >
//         {IDEOLOGY_GROUPS.map((group, gi) => (
//           <div key={group.label}>
//             {group.dims.map((dim, di) => {
//               const val = IDEOLOGY_DATA[dim.key][segIdx];
//               const mean = means[dim.key];
//               const dev = val - mean;
//               return (
//                 <div
//                   key={dim.key}
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "36px 110px 80px 80px 1fr",
//                     alignItems: "center",
//                     padding: "6px 8px",
//                     borderBottom: `1px solid ${C.border}`,
//                     background: di === 0 ? `${group.color}08` : "transparent",
//                   }}
//                 >
//                   {di === 0 ? (
//                     <div
//                       style={{
//                         fontSize: 7,
//                         fontWeight: 700,
//                         color: group.color,
//                         fontFamily: "'Roboto Slab',serif",
//                         letterSpacing: 1,
//                       }}
//                     >
//                       {group.label}
//                     </div>
//                   ) : (
//                     <div />
//                   )}
//                   <div
//                     style={{
//                       fontSize: 10,
//                       fontWeight: 700,
//                       color: "#bfc8d4",
//                       letterSpacing: 0.2,
//                     }}
//                   >
//                     {dim.label}
//                   </div>
//                   <div>
//                     <div
//                       style={{ fontSize: 7, color: "#6b93c0", fontWeight: 600 }}
//                     >
//                       {dim.lo}
//                     </div>
//                     <div
//                       style={{
//                         fontSize: 7,
//                         color: "#c07b7b",
//                         fontWeight: 600,
//                         marginTop: 1,
//                       }}
//                     >
//                       {dim.hi}
//                     </div>
//                   </div>
//                   {/* Heatmap cell */}
//                   <div style={{ display: "flex", justifyContent: "center" }}>
//                     <div
//                       style={{
//                         width: 64,
//                         height: 36,
//                         borderRadius: 4,
//                         background: getColor(val),
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <div
//                         style={{
//                           fontSize: 14,
//                           fontWeight: 700,
//                           color: getTC(val),
//                           lineHeight: 1,
//                         }}
//                       >
//                         {val.toFixed(1)}
//                       </div>
//                       <div
//                         style={{
//                           fontSize: 7,
//                           fontWeight: 600,
//                           marginTop: 1,
//                           color:
//                             Math.abs(dev) >= 0.7
//                               ? dev > 0
//                                 ? "rgba(252,165,165,0.9)"
//                                 : "rgba(147,197,253,0.9)"
//                               : Math.abs(dev) >= 0.4
//                                 ? dev > 0
//                                   ? "rgba(252,165,165,0.6)"
//                                   : "rgba(147,197,253,0.6)"
//                                 : "rgba(148,163,184,0.3)",
//                         }}
//                       >
//                         {dev > 0 ? "+" : ""}
//                         {dev.toFixed(1)}
//                       </div>
//                     </div>
//                   </div>
//                   {/* Deviation bar */}
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 6,
//                       paddingLeft: 8,
//                     }}
//                   >
//                     <div
//                       style={{
//                         flex: 1,
//                         height: 12,
//                         display: "flex",
//                         alignItems: "center",
//                       }}
//                     >
//                       <div
//                         style={{
//                           flex: 1,
//                           height: 8,
//                           background: "#0f172a",
//                           borderRadius: 3,
//                           position: "relative",
//                         }}
//                       >
//                         {/* Center line */}
//                         <div
//                           style={{
//                             position: "absolute",
//                             left: "50%",
//                             top: -2,
//                             height: 12,
//                             width: 1,
//                             background: "#475569",
//                           }}
//                         />
//                         {/* Dev bar */}
//                         {dev !== 0 && (
//                           <div
//                             style={{
//                               position: "absolute",
//                               left:
//                                 dev < 0 ? `${50 + (dev / 2) * 100}%` : "50%",
//                               width: `${Math.abs(dev / 2) * 100}%`,
//                               top: 0,
//                               height: "100%",
//                               background:
//                                 dev > 0
//                                   ? "rgba(239,68,68,0.5)"
//                                   : "rgba(59,130,246,0.5)",
//                               borderRadius: 2,
//                             }}
//                           />
//                         )}
//                       </div>
//                     </div>
//                     <span
//                       style={{
//                         fontSize: 8,
//                         fontWeight: 700,
//                         color:
//                           dev > 0 ? "#fca5a5" : dev < 0 ? "#93c5fd" : "#64748b",
//                         fontFamily: "'Nunito',sans-serif",
//                         width: 32,
//                         textAlign: "right",
//                       }}
//                     >
//                       {dev > 0 ? "+" : ""}
//                       {dev.toFixed(2)}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//             {gi < IDEOLOGY_GROUPS.length - 1 && (
//               <div style={{ height: 4, background: C.bg }} />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ════════════════════════════════════════════════════════════════
// MAIN PROFILE PAGE
// ════════════════════════════════════════════════════════════════

// ═══ PROFILER DATA & PANELS (from prism-profiler) — palette now from buildC(theme) via useProfileC() ═══════════════════════════

export const GAP_AVG = 0.5912;
export const POP_T = SEGMENTS.reduce((s, g) => s + g.pop, 0);
export const AVG_G =
  SEGMENTS.reduce((s, g, i) => s + g.pop * TRUST_DATA.GOVT[i], 0) / POP_T;
export const AVG_C =
  SEGMENTS.reduce((s, g, i) => s + g.pop * TRUST_DATA.CORP[i], 0) / POP_T;

// ─── HELPERS ─────────────────────────────────────────────────────────────────
export function popAvg(arr) {
  return SEGMENTS.reduce((s, g, i) => s + g.pop * arr[i], 0) / POP_T;
}

// ─── BLENDED DISTINCTIVENESS SCORING ─────────────────────────────────────────
// Precompute party-level stats for each belief item
const GOP_IDX = SEGMENTS.map((s, i) => [s, i])
  .filter(([s]) => s.party === "GOP")
  .map(([, i]) => i);
const DEM_IDX = SEGMENTS.map((s, i) => [s, i])
  .filter(([s]) => s.party === "DEM")
  .map(([, i]) => i);
const GOP_POP = GOP_IDX.reduce((s, i) => s + SEGMENTS[i].pop, 0);
const DEM_POP = DEM_IDX.reduce((s, i) => s + SEGMENTS[i].pop, 0);

function weightedMean(arr, idxs, pops) {
  const tot = idxs.reduce((s, i) => s + pops[i], 0);
  return idxs.reduce((s, i) => s + pops[i] * arr[i], 0) / tot;
}
function weightedSD(arr, idxs, pops, mean) {
  const tot = idxs.reduce((s, i) => s + pops[i], 0);
  const variance =
    idxs.reduce((s, i) => s + pops[i] * (arr[i] - mean) ** 2, 0) / tot;
  return Math.sqrt(variance) || 0.001; // floor to avoid div/0
}
const SD_FLOOR = 0.05; // prevent tiny-SD items from inflating z-scores

const BELIEF_STATS = BELIEFS.map((b) => {
  const popW = SEGMENTS.map((s) => s.pop);
  // All-population stats
  const allMean = b.a;
  const allSD = weightedSD(
    b.t3b,
    SEGMENTS.map((_, i) => i),
    popW,
    allMean,
  );
  // Party stats
  const gopMean = weightedMean(b.t3b, GOP_IDX, popW);
  const gopSD = Math.max(weightedSD(b.t3b, GOP_IDX, popW, gopMean), SD_FLOOR);
  const demMean = weightedMean(b.t3b, DEM_IDX, popW);
  const demSD = Math.max(weightedSD(b.t3b, DEM_IDX, popW, demMean), SD_FLOOR);
  return { allMean, allSD, gopMean, gopSD, demMean, demSD };
});

const BELIEFS_BY_VAR = {};
BELIEFS.forEach((b) => {
  BELIEFS_BY_VAR[b.v] = b;
});

export function getTopBeliefs(segIdx) {
  const seg = SEGMENTS[segIdx];
  const party = seg.party;
  const varCodes = SEGMENT_BELIEFS[seg.code] || [];
  return varCodes
    .map((vc) => {
      const b = BELIEFS_BY_VAR[vc];
      if (!b) return null;
      const bi = BELIEFS.indexOf(b);
      const st = BELIEF_STATS[bi];
      const val = b.t3b[segIdx];
      const deltaAll = val - st.allMean;
      const partyMean = party === "GOP" ? st.gopMean : st.demMean;
      const deltaParty = val - partyMean;
      return { ...b, delta: deltaAll, deltaParty };
    })
    .filter(Boolean);
}

export function getDistinctive(segIdx) {
  return Object.entries(ENTITIES)
    .map(([k, e]) => ({
      k,
      l: e.l,
      val: e.v[segIdx],
      avg: e.a,
      delta: +(e.v[segIdx] - e.a).toFixed(2),
    }))
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))
    .slice(0, 3);
}

// ─── SEGMENT SELECTOR ────────────────────────────────────────────────────────
function SegSel({ sel, onChange }) {
  const C = useProfileC();
  const gop = SEGMENTS.map((s, i) => [s, i])
    .filter(([s]) => s.party === "GOP")
    .map(([, i]) => i);
  const dem = SEGMENTS.map((s, i) => [s, i])
    .filter(([s]) => s.party === "DEM")
    .map(([, i]) => i);
  const btn = (i) => {
    const s = SEGMENTS[i],
      act = i === sel,
      pc = s.party === "GOP" ? C.partyGOP : C.partyDEM;
    return (
      <button
        key={s.code}
        onClick={() => onChange(i)}
        style={{
          padding: "5px 10px",
          borderRadius: 6,
          border: "none",
          cursor: "pointer",
          fontSize: 11,
          fontWeight: act ? 700 : 500,
          fontFamily: "'DM Sans',sans-serif",
          background: act ? `${pc}22` : "transparent",
          color: act ? pc : C.textMuted,
          outline: act ? `1.5px solid ${pc}55` : "1px solid transparent",
          transition: "all .15s",
        }}
      >
        {s.code}
      </button>
    );
  };
  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 4 }}
      >
        <span
          style={{
            fontSize: 9,
            color: C.partyGOP,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            lineHeight: "28px",
            marginRight: 4,
          }}
        >
          GOP
        </span>
        {gop.map(btn)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        <span
          style={{
            fontSize: 9,
            color: C.partyDEM,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            lineHeight: "28px",
            marginRight: 4,
          }}
        >
          DEM
        </span>
        {dem.map(btn)}
      </div>
    </div>
  );
}

// ─── HORIZONTAL BAR ──────────────────────────────────────────────────────────
export function HBar({ label, value, avg, color, maxVal = 1 }) {
  const { theme } = useTheme();
  const C = useProfileC();
  const pct = (v) => Math.max(0, Math.min(100, (v / maxVal) * 100));
  const delta = value - avg;
  return (
    <div style={{ marginBottom: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 3,
          alignItems: "baseline",
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 600, color: C.text }}>
          {label}
        </span>
        <span style={{ fontSize: 11 }}>
          <span style={{ color: C.white, fontWeight: 700 }}>
            {(value * 100).toFixed(0)}%
          </span>{" "}
          <span style={{ fontSize: 9, color: delta >= 0 ? C.green : C.red }}>
            {delta >= 0 ? "+" : ""}
            {(delta * 100).toFixed(0)} vs avg
          </span>
        </span>
      </div>
      <div
        style={{
          position: "relative",
          height: 18,
          background: theme.militaryLineChart,
          borderRadius: 3,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 18,
            width: `${pct(value)}%`,
            background: `${color}`,
            borderRadius: 3,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${pct(avg)}%`,
            width: 2,
            height: 18,
            background: theme.pBar3,
            opacity: 0.5,
            transform: "translateX(-1px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 18,
            left: `${pct(avg)}%`,
            transform: "translateX(-50%)",
            fontSize: 7,
            color: C.textDim,
            whiteSpace: "nowrap",
          }}
        >
          avg {(avg * 100).toFixed(0)}%
        </div>
      </div>
    </div>
  );
}

// ─── NICE VARIABLE NAMES ─────────────────────────────────────────────────────

// ─── INSURANCE REFORM PREFERENCE DATA ────────────────────────────────────────
export const INS_REFORM = (theme) => [
  {
    l: "Single Payer",
    v: [
      0.151, 0.195, 0.133, 0.126, 0.255, 0.424, 0.209, 0.36, 0.205, 0.195,
      0.592, 0.443, 0.346, 0.402, 0.299, 0.52,
    ],
    score: 1,
    color: theme.singlePayerBg || "#a78bfa",
    tooltipContent:
      "The government should create a public insurance option to compete with private plans.",
  },
  {
    l: "Public Option",
    v: [
      0.254, 0.161, 0.104, 0.112, 0.18, 0.137, 0.182, 0.151, 0.229, 0.153,
      0.355, 0.357, 0.305, 0.301, 0.23, 0.341,
    ],
    score: 2,
    color: theme.publicOption || "#22d3ee",
    tooltipContent:
      "The government should create a public insurance option to compete with private plans.",
  },
  {
    l: "ESI Mandatory",
    v: [
      0.338, 0.385, 0.441, 0.488, 0.376, 0.149, 0.399, 0.233, 0.373, 0.353,
      0.049, 0.135, 0.195, 0.138, 0.349, 0.108,
    ],
    score: 3,
    color: theme.esiMandatory || "#d4915e",
    tooltipContent:
      "The government should create a public insurance option to compete with private plans.",
  },
  {
    l: "Status Quo",
    v: [
      0.257, 0.258, 0.322, 0.275, 0.189, 0.289, 0.21, 0.256, 0.194, 0.299,
      0.004, 0.065, 0.155, 0.16, 0.122, 0.031,
    ],
    score: 4,
    color: theme.statusQuo || "#8194a8",
    tooltipContent:
      "The government should create a public insurance option to compete with private plans.",
  },
];

const PROFILE_TABS = [
  { id: "demo", label: "DEMOGRAPHICS" },
  { id: "beliefs", label: "BELIEFS" },
  { id: "ideology", label: "VALUES" },
  { id: "trust", label: "TRUST" },
  { id: "exp", label: "EXPERIENCE" },
  { id: "wellness", label: "CULTURE" },
  { id: "media", label: "MEDIA" },
];

export default function SegmentProfile() {
  const { theme } = useTheme();
  const C = useMemo(() => buildC(theme), [theme]);
  const [searchParams] = useSearchParams();
  const initSeg = searchParams.get("seg");
  const initIdx = initSeg
    ? Math.max(
        0,
        SEGMENTS.findIndex((s) => s.code === initSeg),
      )
    : 0;

  const segmentsId = segments[0].id;
  const [segIdx, setSegIdx] = useState(initIdx);
  const [segTabId, setSegTabId] = useState(segmentsId);
  const [profileTab, setProfileTab] = useState("demo");
  const seg = SEGMENTS[segIdx];
  // const t = seg.tier;
  const tc = seg.party === "GOP" ? "#FF0F1D" : "#1A52B3";

  return (
    <ProfileCContext.Provider value={C}>
      <div
        style={{
          fontFamily: "'Nunito',-apple-system,sans-serif",
          color: C.text1,
        }}
      >
        <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:translateY(0) } }
        * { font-variant-numeric: tabular-nums; }
      `}</style>

        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: 14 }}>
            <div
              style={{
                fontFamily: "'Nunito',sans-serif",
                fontSize: 9,
                letterSpacing: 3,
                color: C.text3,
                marginBottom: 3,
              }}
            >
              RESERVOIR HEALTH PRISM
            </div>
            <h1
              style={{
                fontFamily: "'Roboto',sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: C.text1,
                margin: 0,
              }}
            >
              PERSONA PROFILE
            </h1>
            <div
              style={{
                fontFamily: "'Roboto',sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: theme.personaPara,
                marginTop: 2,
              }}
            >
              PRISM AUDIENCE INTELLIGENCE
            </div>
          </div>
          <span
            style={{
              fontSize: 8,
              color: theme.textDim,
              fontWeight: 700,
              fontFamily: "'Nunito',sans-serif",
              marginRight: 4,
              width: "100%",
            }}
          >
            SEGMENT:
          </span>
          {/* Segment selector */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 20,
              // flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {SEGMENTS.map((s, i) => {
              const isSel = segIdx === i;
              const partyColor = s.party === "GOP" ? "#FF0F1D" : "#1A52B3";
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <button
                    key={s.id}
                    onClick={() => {
                      setSegIdx(i);
                      setSegTabId(segments[i].id);
                      setProfileTab("demo");
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: `2px solid ${partyColor}`,
                      background: partyColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 800,

                      color: "#fff",

                      fontFamily: "'JetBrains Mono',monospace",
                      flexShrink: 0,
                      padding: "3px 8px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {s.code}
                  </button>
                  <div
                    style={{
                      fontSize: 7,
                      fontWeight: isSel ? 700 : 300,
                      color: isSel ? partyColor : theme.textDim,
                      fontFamily: "'JetBrains Mono',monospace",
                      textAlign: "center",
                      lineHeight: 1.2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "65px",
                      marginTop: "10px",
                    }}
                  >
                    {s.name.toUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ═══ PROFILE HEADER ═══ */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
              background: theme.segmentBar,
              padding: "10px 10px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: tc,
                border: `3px solid ${tc}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "'Nunito',sans-serif",
                letterSpacing: 1,
              }}
            >
              {seg.code}
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Roboto',sans-serif",
                    fontSize: 18,
                    color: C.text1,
                    fontWeight: 700,
                    margin: 0,
                    textTransform: "uppercase",
                  }}
                >
                  {seg.name}
                </h3>
                <span
                  style={{
                    fontSize: 8,
                    padding: "2px 6px",
                    borderRadius: 3,
                    background: seg.party === "GOP" ? "#FF0F1D" : "#1A52B3",
                    color: "#FFFFFF",
                    fontFamily: "'Nunito',sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {seg.party}
                </span>
                <span
                  style={{
                    fontSize: 8,
                    padding: "2px 6px",
                    borderRadius: 3,
                    background: theme.segmentBarPercent,
                    color: C.text2,
                    fontFamily: "'Nunito',sans-serif",
                  }}
                >
                  {seg.pop}% of electorate
                </span>
              </div>
            </div>
          </div>

          {/* ═══ MAIN LAYOUT: Vector Radar + Persona + ROI ═══ */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "420px 1fr",
              gap: 14,
              marginBottom: 20,
            }}
          >
            {/* Vector Radar Column */}
            <div
              style={{
                background: C.card,
                borderRadius: 10,
                border: `1px solid ${C.border}`,
                padding: "14px 10px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: theme.vectorfingerprintText,
                  fontFamily: "'Roboto Slab',serif",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  marginBottom: 8,
                }}
              >
                VECTOR FINGERPRINT
              </div>
              <ProfileVectorRadar seg={seg} />
              <div
                style={{
                  width: "100%",
                  marginTop: 30,
                  paddingTop: 8,
                  borderTop: `1px solid ${C.border}`,
                }}
              >
                <VectorBars seg={seg} />
              </div>
            </div>

            {/* Persona Narrative */}
            <div>
              {/* Quote */}
              <div
                style={{
                  background: theme.segmentQuotesBar,
                  borderRadius: 6,
                  padding: "10px 14px",
                  marginBottom: 14,
                  // border: `1px solid ${C.border}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Nunito',sans-serif",
                    fontSize: 24,
                    color: theme.segmentQuotesBarColor,
                    fontStyle: "italic",
                    lineHeight: 1,
                  }}
                >
                  "{seg.persona.quote}"
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "4px 16px",
                }}
              >
                <SchemaBlock
                  label="What They Believe"
                  text={seg.persona.believe}
                  color="#C0392B"
                />
                <SchemaBlock
                  label="What They Want"
                  text={seg.persona.want}
                  color="#5B8DEF"
                />
                <SchemaBlock
                  label="What They Do"
                  text={seg.persona.doWhat}
                  color="#1A7A3C"
                />
                <SchemaBlock
                  label="Who They Are"
                  text={seg.persona.whoAre}
                  color="#FF9100"
                />
              </div>
            </div>

            {/* ROI Cards — one per study, stacked */}
            {/* <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {STUDY_ROI[seg.code] &&
                ["ESI", "MA"].map((study) => {
                  const d = STUDY_ROI[seg.code][study];
                  if (!d) return null;
                  const studyTier = d.tier || seg.tier;
                  const studyTc = TIER_ACCENT[studyTier];
                  return (
                    <div
                      key={study}
                      style={{
                        background: C.card,
                        borderRadius: 8,
                        padding: "8px 10px",
                        border: `1px solid ${C.border}`,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 4,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 7,
                            fontWeight: 700,
                            color: C.text2,
                            fontFamily: "'Roboto Slab',serif",
                            textTransform: "uppercase",
                            letterSpacing: 1.5,
                          }}
                        >
                          {study === "ESI" ? "ESI STUDY" : "MA STUDY"} ROI
                        </div>
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            padding: "3px 6px",
                            borderRadius: 300,
                            background: "#FF1744",
                            color: "#FFFFFF",
                            fontFamily: "'Nunito',sans-serif",
                            letterSpacing: 1,
                          }}
                        >
                          {TIER_LABELS[studyTier]}
                        </span>
                      </div>
                      <div
                        style={{
                          textAlign: "start",
                          padding: "4px 0",
                          marginBottom: 15,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 24,
                            fontWeight: 800,
                            color: studyTc,
                            fontFamily: "'Nunito',sans-serif",
                          }}
                        >
                          {d.roi.toFixed(2)}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          gap: 4,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: 6,
                            width: "40%",
                            marginBottom: 15,
                          }}
                        >
                          <MiniDonut
                            value={d.highRoi}
                            size={42}
                            color="#9B6BD4"
                          />
                          <div>
                            <div
                              style={{
                                fontSize: 8,
                                color: theme.textDim,
                                fontWeight: 400,
                              }}
                            >
                              % High ROI
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: 6,
                            width: "40%",
                            marginBottom: 15,
                          }}
                        >
                          <MiniDonut
                            value={d.supporters}
                            size={42}
                            color="#9B6BD4"
                          />
                          <div>
                            <div
                              style={{
                                fontSize: 8,
                                color: theme.textDim,
                                fontWeight: 400,
                              }}
                            >
                              % Supporters
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: 6,
                            width: "40%",
                            marginBottom: 15,
                          }}
                        >
                          <MiniDonut
                            value={d.activation}
                            size={42}
                            color="#9B6BD4"
                          />
                          <div>
                            <div
                              style={{
                                fontSize: 8,
                                color: theme.textDim,
                                fontWeight: 400,
                              }}
                            >
                              Activation
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: 6,
                            width: "40%",
                            marginBottom: 15,
                          }}
                        >
                          <MiniDonut
                            value={d.influence}
                            size={42}
                            color="#9B6BD4"
                          />

                          <div>
                            <div
                              style={{
                                fontSize: 8,
                                color: theme.textDim,
                                fontWeight: 400,
                              }}
                            >
                              Influence360
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div> */}
          </div>

          {/* ═══ TABBED SECTION ═══ */}
          <div
            style={{
              display: "flex",
              gap: 2,
              marginBottom: 14,
              borderBottom: `1px solid ${C.border}`,
              paddingBottom: 0,
            }}
          >
            {PROFILE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProfileTab(tab.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "6px 6px 0 0",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: profileTab === tab.id ? 700 : 300,
                  fontFamily: "'Nunito',sans-serif",
                  background:
                    profileTab === tab.id
                      ? theme.tabsDarkActive
                      : "transparent",
                  color: profileTab === tab.id ? C.text1 : C.text2,
                  borderBottom:
                    profileTab === tab.id
                      ? `2px solid ${theme.tabsBorderDarkActive}`
                      : "2px solid transparent",
                  transition: "all .15s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {profileTab === "demo" && (
            <DemographicsPanel seg={seg} tabId={segTabId} />
          )}
          {profileTab === "beliefs" && <BeliefsPanel segIdx={segIdx} />}
          {profileTab === "ideology" && <IdeologyHeatmap />}
          {profileTab === "trust" && <TrustPanel segIdx={segIdx} />}
          {profileTab === "exp" && <ExpPanel segIdx={segIdx} />}
          {profileTab === "wellness" && <WellnessPanel segIdx={segIdx} />}
          {profileTab === "media" && <MediaPanel segIdx={segIdx} />}

          {/* Footer */}
          <div
            style={{
              marginTop: 16,
              padding: "8px 10px",
              borderTop: `1px solid ${C.border}`,
              fontSize: 12,
              color: theme.text3,
              fontFamily: "'Nunito',sans-serif",
              display: "flex",
              justifyContent: "space-between",
              background: theme.footerBg,
            }}
          >
            <span>
              PRISM V3.1 · RESERVOIR COMMUNICATIONS GROUP · CONFIDENTIAL &
              PROPRIETARY
            </span>
            <span>PRISM AUDIENCE INTELLIGENCE</span>
          </div>
        </div>
      </div>
    </ProfileCContext.Provider>
  );
}
