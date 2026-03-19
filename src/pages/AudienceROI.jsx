import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getStudyData } from "../data/loader";
import { useTheme } from "../context/ThemeContext";
import { BsFilterCircle } from "react-icons/bs";

// ─── STUDY DATA (from loader + CSV) ───
const STUDY_DATA = {
  ESI: {
    segments: getStudyData("esi").segments,
    prePostMetrics: getStudyData("esi").prePostMetrics,
  },
  MA: {
    segments: getStudyData("ma").segments,
    prePostMetrics: getStudyData("ma").prePostMetrics,
  },
};

// ─── FIXED ROW HEIGHTS (ensures label column and data columns align) ───
const H = {
  header: 120,
  roi: 54,
  persuasion: 205,
  prePostRow: 22,
  prePostPad: 30,
  toggle: 28,
  coalition: 74,
  activation: 74,
  influence: 60,
};

// Tier/UI colors (non-partisan: teal/amber/slate — not red/blue)
const TIER_COLORS = {
  tier1: "#2A9D8F",
  tier1Bg: "#064e3b",
  tier2: "#d4a84b",
  tier2Bg: "#854d0e",
  tier3: "#8A9BAE",
  tier3Bg: "#475569",
  activation: "#6b7fd7",
  influence: "#5a6fa5",
  coalition: "#4A6FA5",
  persuasion: "#2A9D8F",
};

const FILTER_COLORS = {
  tier1: TIER_COLORS.tier1,
  tier2: TIER_COLORS.tier2,
  tier3: TIER_COLORS.tier3,
};

const ASSIGNED_TIERS = {
  ESI: {
    TSP: 3,
    CEC: 1,
    TC: 1,
    HF: 1,
    PP: 2,
    WE: 1,
    PFF: 2,
    HHN: 1,
    MFL: 3,
    VS: 3,
    UCP: 3,
    FJP: 1,
    HCP: 3,
    HAD: 1,
    HCI: 1,
    GHI: 2,
  },
  MA: {
    TSP: 3,
    CEC: 1,
    TC: 1,
    HF: 3,
    PP: 2,
    WE: 2,
    PFF: 3,
    HHN: 2,
    MFL: 3,
    VS: 3,
    UCP: 1,
    FJP: 1,
    HCP: 1,
    HAD: 3,
    HCI: 1,
    GHI: 1,
  },
};
function getTier(code, study) {
  return (ASSIGNED_TIERS[study] || ASSIGNED_TIERS.ESI)[code] || 2;
}
function tierColor(t) {
  return t === 1
    ? TIER_COLORS.tier1
    : t === 2
      ? TIER_COLORS.tier2
      : TIER_COLORS.tier3;
}
function tierBg(t, theme) {
  return t === 1 ? theme.tier1 : t === 2 ? theme.tier2 : theme.tier3;
}

function tierPercentage(t, theme) {
  return t === 1
    ? theme.tier1Percent
    : t === 2
      ? theme.tier2Percent
      : theme.tier3Percent;
}

function tierTextColor(t, theme) {
  return t === 1
    ? theme.tier1Color
    : t === 2
      ? theme.tier2Color
      : theme.tier3Color;
}
function tierLabel(t) {
  return t === 1 ? "TIER 1" : t === 2 ? "TIER 2" : "TIER 3";
}

// ─── MINI DONUT ───
function MiniDonut({
  value,
  size = 40,
  strokeW = 4,
  borderColor,
  textColor,
  color,
}) {
  const r = (size - strokeW) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - value / 100);
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={borderColor}
        strokeWidth={strokeW}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={strokeW}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize={size * 0.26}
        fontWeight={700}
        fontFamily="'JetBrains Mono',monospace"
        style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
      >
        {value}%
      </text>
    </svg>
  );
}

// ─── PERSUADABILITY BAR ───
function PBar({ data, h = 120, borderColor, colors, theme }) {
  const palette = colors || [
    theme.pBar1,
    theme.pBar2,
    theme.pBar3,
    theme.pBar4,
    theme.pBar5,
  ];
  return (
    <div
      style={{
        width: 38,
        height: h,
        borderRadius: 4,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${borderColor}`,
      }}
    >
      {data.map((v, i) => (
        <div
          key={i}
          style={{
            height: `${v}%`,
            background: palette[i],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: v > 6 ? 12 : 0,
          }}
        >
          {v >= 8 && (
            <span
              style={{
                fontSize: 7,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "'JetBrains Mono',monospace",
              }}
            >
              {v}%
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── PRE/POST DELTA DISPLAY ───
function DeltaBar({ pre, post, textColor }) {
  const delta = +(post - pre).toFixed(1);
  const isPos = delta > 0;
  const isNeg = delta < 0;
  const deltaColor = isPos ? "#1A7A4A" : isNeg ? "#B22222" : textColor;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <span
        style={{
          fontSize: 7,
          color: textColor,
          fontFamily: "'JetBrains Mono',monospace",
        }}
      >
        {pre}
      </span>
      <span style={{ fontSize: 6, color: textColor }}>→</span>
      <span
        style={{
          fontSize: 7,
          color: textColor,
          fontFamily: "'JetBrains Mono',monospace",
          fontWeight: 600,
        }}
      >
        {post}
      </span>
      <span
        style={{
          fontSize: 8,
          fontWeight: 800,
          fontFamily: "'JetBrains Mono',monospace",
          color: deltaColor,
          marginLeft: 1,
        }}
      >
        {isPos ? "+" : ""}
        {delta}
      </span>
    </div>
  );
}

// ─── HOVER TOOLTIP for pre/post labels ───
function MetricLabel({ metric, theme: t }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        borderTop: `1px solid ${t.border}`,
        padding: "10px 12px",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        style={{
          fontSize: 7,
          color: t.textMuted,
          fontFamily: "'JetBrains Mono',monospace",
          cursor: "help",
          paddingBottom: 1,
        }}
      >
        {metric.label}
      </span>

      {hover && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "100%",
            zIndex: 50,
            width: 220,
            padding: "8px 10px",
            background: t.surface,
            border: `1px solid ${t.accent}`,
            borderRadius: 6,
            boxShadow: t.shadow,
          }}
        >
          <div
            style={{
              fontSize: 8,
              fontWeight: 700,
              color: t.accent,
              fontFamily: "'JetBrains Mono',monospace",
              marginBottom: 4,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {metric.label}
          </div>
          <div
            style={{
              fontSize: 7,
              color: t.text,
              fontFamily: "'JetBrains Mono',monospace",
              lineHeight: 1.5,
              marginBottom: 6,
            }}
          >
            {metric.question}
          </div>
          <div
            style={{
              fontSize: 7,
              color: t.accent,
              fontFamily: "'JetBrains Mono',monospace",
              lineHeight: 1.4,
              paddingTop: 4,
              borderTop: `1px solid ${t.border}`,
            }}
          >
            <span style={{ fontWeight: 700 }}>Showing:</span> {metric.scale}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SEGMENT COLUMN ───
function SegmentColumn({
  seg,
  expanded,
  PRE_POST_METRICS,
  onNav,
  study,
  theme: t,
}) {
  const tier = getTier(seg.code, study);
  const tc = tierColor(tier);
  const partyColor = seg.party === "GOP" ? t.repRed : t.demBlue;
  const prePostH = H.prePostPad + PRE_POST_METRICS.length * H.prePostRow;
  const partyBackground = seg.party === "GOP" ? t.repRed : t.demBlue;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        flexShrink: 0,
      }}
    >
      {/* ── HEADER ── */}
      <div
        onClick={onNav}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "8px 4px",
          borderBottom: `1px solid ${t.border}`,
          width: "100%",
          height: H.header,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: `2px solid ${partyColor}`,
            background: partyBackground,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 8,
            fontWeight: 800,
            color: "#fff",
            fontFamily: "'JetBrains Mono',monospace",
            flexShrink: 0,
          }}
        >
          {seg.code}
        </div>
        <div
          style={{
            fontSize: 6,
            fontWeight: 700,
            color: partyColor,
            fontFamily: "'JetBrains Mono',monospace",
            textAlign: "center",
            lineHeight: 1.2,
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0",
          }}
        >
          {seg.name.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 8,
            color: t.text,
            fontFamily: "'JetBrains Mono',monospace",
            flexShrink: 0,
            marginBottom: 2,
          }}
        >
          {seg.pop}%
        </div>
        <span
          style={{
            fontSize: 7,
            fontWeight: 700,
            padding: "2px 6px",
            borderRadius: 100,
            marginTop: 8,
            background: tierBg(tier, t),
            color: tierTextColor(tier, t),
            fontFamily: "'JetBrains Mono',monospace",
            flexShrink: 0,
          }}
        >
          {tierLabel(tier)}
        </span>
      </div>

      {/* ── ROI SCORE ── */}
      <div
        style={{
          padding: "10px 4px",
          borderBottom: `1px solid ${t.border}`,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: H.roi,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: tierPercentage(tier, t),
            fontFamily: "'JetBrains Mono',monospace",
            lineHeight: 1,
          }}
        >
          {seg.roi.toFixed(2)}
        </div>
        {/* <div
          style={{
            fontSize: 6,
            color: t.textDim,
            fontFamily: "'JetBrains Mono',monospace",
            marginTop: 2,
          }}
        >
          ROI
        </div> */}
      </div>

      {/* ── PERSUASION ── */}
      <div
        style={{
          padding: "8px 4px",
          borderBottom: `1px solid ${t.border}`,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          height: H.persuasion,
          justifyContent: "center",
        }}
      >
        <MiniDonut
          value={seg.highRoi}
          size={38}
          borderColor={t.border}
          textColor={t.text}
          color={t.pBar1}
        />
        <div
          style={{
            fontSize: 6,
            color: t.textDim,
            fontFamily: "'JetBrains Mono',monospace",
          }}
        >
          % HIGH ROI
        </div>
        <PBar
          data={seg.persuadability}
          h={120}
          borderColor={t.border}
          theme={t}
        />
      </div>
      {/* ── TOGGLE SPACER ── */}
      <div
        style={{
          height: "35px",
          borderBottom: `1px solid ${t.border}`,
          width: "100%",
        }}
      />
      {/* ── PRE/POST EXPANDED ── */}
      {expanded && (
        <>
          <div
            style={{
              borderBottom: `1px solid ${t.border}`,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              background: t.surfaceInner,
              padding: "5px 4px",
              justifyContent: "center",
            }}
          >
            {PRE_POST_METRICS.map((m) => {
              const pp = seg.prePost[m.key];
              if (!pp) return null;
              return <DeltaBar key={m.key} pre={pp[0]} textColor={t.textDim} />;
            })}
          </div>

          <div
            style={{
              borderBottom: `1px solid ${t.border}`,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              background: t.surfaceInner,
              padding: "8px 4px",
              justifyContent: "center",
            }}
          >
            {PRE_POST_METRICS.map((m) => {
              const pp = seg.prePost[m.key];
              if (!pp) return null;
              return (
                <DeltaBar key={m.key} post={pp[1]} textColor={t.textDim} />
              );
            })}
          </div>
        </>
      )}

      {/* ── COALITION ── */}
      <div
        style={{
          borderBottom: `1px solid ${t.border}`,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 10px",
          justifyContent: "center",
        }}
      >
        <MiniDonut
          value={seg.supporters}
          size={40}
          borderColor={t.border}
          textColor={t.text}
          color={t.pBar1}
        />
        <div
          style={{
            fontSize: 6,
            color: t.textDim,
            fontFamily: "'JetBrains Mono',monospace",
            marginTop: 2,
          }}
        >
          SUPPORTERS
        </div>
      </div>

      {/* ── ACTIVATION ── */}
      <div
        style={{
          borderBottom: `1px solid ${t.border}`,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 10px",
          justifyContent: "center",
        }}
      >
        <MiniDonut
          value={seg.activation}
          size={40}
          borderColor={t.border}
          textColor={t.text}
          color={t.pBar1}
        />
        <div
          style={{
            fontSize: 6,
            color: t.textDim,
            fontFamily: "'JetBrains Mono',monospace",
            marginTop: 2,
          }}
        >
          ACTIVATION
        </div>
      </div>

      {/* ── INFLUENCE ── */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "25px 10px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: seg.influence >= 15 ? TIER_COLORS.influence : t.textMuted,
            fontFamily: "'JetBrains Mono',monospace",
          }}
        >
          {seg.influence}%
        </div>
        <div
          style={{
            fontSize: 6,
            color: t.textDim,
            fontFamily: "'JetBrains Mono',monospace",
            marginTop: 2,
          }}
        >
          INFLUENCE
        </div>
      </div>
    </div>
  );
}

// ─── MAIN GRID ───
export default function AudienceROI() {
  const navigate = useNavigate();
  const { theme: t } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [study, setStudy] = useState("ESI");
  const [tierFilter, setTierFilter] = useState("all");
  const [sortDesc, setSortDesc] = useState(false);
  const { segments: SEGMENTS, prePostMetrics: PRE_POST_METRICS } =
    STUDY_DATA[study];
  const filteredSegments = SEGMENTS.filter((s) => {
    if (tierFilter === "all") return true;

    const tier = getTier(s.code, study);

    if (tierFilter === "tier1") return tier === 1;
    if (tierFilter === "tier2") return tier === 2;
    if (tierFilter === "tier3") return tier === 3;

    return true;
  }).sort((a, b) => {
    if (!sortDesc) return 0;
    return b.roi - a.roi;
  });

  const gopSegs = filteredSegments.filter((s) => s.party === "GOP");
  const demSegs = filteredSegments.filter((s) => s.party === "DEM");
  const prePostH = H.prePostPad + PRE_POST_METRICS.length * H.prePostRow;

  const persuadLabels = [
    { label: "High leverage", color: t.highleverage },
    { label: "Low leverage", color: t.lowleverage },
    { label: "Not convertible", color: t.notconvertible },
    { label: "Not persuadable", color: t.notpersuadable },
    { label: "Neg. movement", color: t.negmovement },
  ];

  return (
    <div style={{ maxWidth: 1300, margin: "0 auto" }}>
      {/* Title */}
      <div style={{ marginBottom: 16 }}>
        <h1
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 14,
            fontWeight: 700,
            color: t.text,
            margin: 0,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Audience ROI
        </h1>
        <div
          style={{
            fontSize: 9,
            color: t.textDim,
            marginTop: 3,
            fontFamily: "'JetBrains Mono',monospace",
          }}
        >
          ROI = Population × (Persuasion + Coalition Value + Activation +
          Influence)
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 8,
            marginTop: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
            }}
          >
            {[
              { k: "ESI", l: "ESI STUDY" },
              { k: "MA", l: "MA STUDY" },
            ].map((s) => (
              <button
                key={s.k}
                onClick={() => setStudy(s.k)}
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 9,
                  letterSpacing: 0.5,
                  padding: "8px 16px",
                  border: "1px solid",
                  borderRadius: 6,
                  cursor: "pointer",
                  borderColor: study === s.k ? t.accentBackground : t.border,
                  background:
                    study === s.k ? t.accentBackground : t.surfaceInner,
                  color: study === s.k ? t.accent : t.textMuted,
                  transition: "all 0.15s",
                }}
              >
                {s.l}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems:'center',
              gap: 8,
            }}
          >
            {[
              { k: "all", l: "All" },
              { k: "tier1", l: "TIER 1" },
              { k: "tier2", l: "TIER 2" },
              { k: "tier3", l: "TIER 3" },
            ].map((s) => {
              const isActive = tierFilter === s.k;

              const activeBg =
                s.k === "tier1"
                  ? TIER_COLORS.tier1
                  : s.k === "tier2"
                    ? TIER_COLORS.tier2
                    : s.k === "tier3"
                      ? "#ef4444" // 🔴 red for tier3 (as you asked)
                      : "#1A52B3";

              return (
                <button
                  key={s.k}
                  onClick={() => setTierFilter(s.k)}
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 8,
                    letterSpacing: 0.5,
                    padding: "2px 10px",
                    border: "1px solid",
                    borderRadius: 100,
                    cursor: "pointer",
                    width: "70px",

                    borderColor: isActive ? activeBg : t.border,
                    background: isActive ? activeBg : t.tierFilterBg,
                    color: "#fff",

                    transition: "all 0.15s",
                  }}
                >
                  {s.l}
                </button>
              );
            })}

            <BsFilterCircle
              style={{ cursor: "pointer" ,color:'#9AA0AD' }}
              onClick={() => setSortDesc((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      {/* Grid — horizontal scroll at narrow widths */}
      <div style={{ overflowX: "auto" }} className="audience-roi-scroll">
        <div
          style={{
            display: "flex",
            background: t.surface,
            borderRadius: 8,
            border: `1px solid ${t.border}`,
            overflow: "hidden",
            boxShadow: t.shadow,
            minWidth: 1100,
          }}
        >
          {/* ═══ LEFT LABELS COLUMN ═══ */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              borderRight: `1px solid ${t.border}`,
              width: 140,
              background: t.roiLeftBar,
            }}
          >
            {/* Header */}
            <div
              style={{
                height: H.header,
              }}
            />

            {/* ROI label */}
            <div
              style={{
                height: H.roi,
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: t.roiScore,
                  fontFamily: "'JetBrains Mono',monospace",
                  letterSpacing: 2,
                }}
              >
                ROI SCORE
              </div>
            </div>

            {/* Persuasion label + legend */}
            <div
              style={{
                height: H.persuasion,
                borderBottom: `1px solid ${t.border}`,
                padding: "8px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: t.persuasionText,
                  fontFamily: "'JetBrains Mono',monospace",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 6,
                }}
              >
                Persuasion
              </div>
              <div
                style={{
                  fontSize: 7,
                  color: t.textMuted,
                  fontFamily: "'JetBrains Mono',monospace",
                  lineHeight: 1.4,
                  background: t.persuasionPara,
                  borderRadius: 4,
                  padding: "6px 8px",
                  borderLeft: `2px solid ${t.accent}`,
                  marginBottom: 8,
                }}
              >
                Did exposure move the audience toward our position?
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {persuadLabels.map((p, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        background: p.color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 7,
                        color: t.textMuted,
                        fontFamily: "'JetBrains Mono',monospace",
                      }}
                    >
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Toggle */}
            <div
              style={{
                height: H.toggle,
                // borderBottom: `1px solid ${t.border}`,
                display: "flex",
                alignItems: "center",
                padding: "0 5px",
              }}
            >
              <button
                onClick={() => setExpanded(!expanded)}
                style={{
                  background: "none",
                  border: `none`,
                  borderRadius: 6,
                  color: t.textMuted,
                  fontSize: 7,
                  fontFamily: "'JetBrains Mono',monospace",
                  cursor: "pointer",
                  padding: "6px 5px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "all 0.15s",
                  width: "100%",
                }}
              >
                + {expanded ? "Hide" : "Show"} Pre/Post
                <div
                  style={{
                    background: t.persuasionPara,
                    padding: "2px 10px",
                    borderRadius: "3px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      transition: "transform 0.2s",
                      transform: "rotate(90deg)",
                      fontSize: 9,
                      marginRight: "2px",
                    }}
                  >
                    ▸
                  </span>
                  Hide
                </div>
              </button>
            </div>

            {/* Pre/Post expanded labels */}
            {expanded && (
              <div
                style={{
                  height: prePostH,
                  borderBottom: `1px solid ${t.border}`,
                  padding: "8px 0px",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {PRE_POST_METRICS.map((m) => (
                  <MetricLabel key={m.key} metric={m} theme={t} />
                ))}
              </div>
            )}

            {/* Coalition */}
            <div
              style={{
                borderBottom: `1px solid ${t.border}`,
                padding: "16.5px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: t.persuasionText,
                  fontFamily: "'JetBrains Mono',monospace",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                Coalition
              </div>
              <div
                style={{
                  fontSize: 7,
                  color: t.textMuted,
                  fontFamily: "'JetBrains Mono',monospace",
                  lineHeight: 1.4,
                  background: t.persuasionPara,
                  borderRadius: 4,
                  padding: "6px 8px",
                  borderLeft: `2px solid ${TIER_COLORS.coalition}`,
                }}
              >
                How many supporters can we predict will join our coalition?
              </div>
            </div>

            {/* Activation */}
            <div
              style={{
                borderBottom: `1px solid ${t.border}`,
                padding: "16px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: t.persuasionText,
                  fontFamily: "'JetBrains Mono',monospace",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                Activation
              </div>
              <div
                style={{
                  fontSize: 7,
                  color: t.textMuted,
                  fontFamily: "'JetBrains Mono',monospace",
                  lineHeight: 1.4,
                  background: t.persuasionPara,
                  borderRadius: 4,
                  padding: "6px 8px",
                  borderLeft: `2px solid ${TIER_COLORS.activation}`,
                }}
              >
                What is the probability of responding to a CTA and being
                mobilized?
              </div>
            </div>

            {/* Influence */}
            <div
              style={{
                padding: "15px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: t.persuasionText,
                  fontFamily: "'JetBrains Mono',monospace",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                Influence
              </div>
              <div
                style={{
                  fontSize: 7,
                  color: t.textMuted,
                  fontFamily: "'JetBrains Mono',monospace",
                  lineHeight: 1.4,
                  background: t.persuasionPara,
                  borderRadius: 4,
                  padding: "6px 8px",
                  borderLeft: `2px solid ${TIER_COLORS.influence}`,
                }}
              >
                How likely is this audience to affect outcomes or influence
                others?
              </div>
            </div>
          </div>

          {/* ═══ SCROLLABLE SEGMENT COLUMNS ═══ */}
          <div style={{ width: "100%" }}>
            {/* GOP */}
            <div style={{ display: "flex" }}>
              {gopSegs.map((s) => (
                <div
                  key={s.code}
                  style={{
                    borderRight: `1px solid ${t.border}`,
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <SegmentColumn
                    seg={s}
                    expanded={expanded}
                    PRE_POST_METRICS={PRE_POST_METRICS}
                    onNav={() => navigate("/profile?seg=" + s.code)}
                    study={study}
                    theme={t}
                  />
                </div>
              ))}
              {/* DEM */}
              {demSegs.map((s) => (
                <div
                  key={s.code}
                  style={{
                    borderRight: `1px solid ${t.border}`,
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <SegmentColumn
                    seg={s}
                    expanded={expanded}
                    PRE_POST_METRICS={PRE_POST_METRICS}
                    onNav={() => navigate("/profile?seg=" + s.code)}
                    study={study}
                    theme={t}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
