import { useState, useRef } from "react";
import DATA from "../data/studyData";

// ─── STUDY DATA (from auto-generated file) ───
const STUDY_DATA = {
  ESI: { segments: DATA.ESI.segments, prePostMetrics: DATA.ESI.prePostMetrics },
  MA:  { segments: DATA.MA.segments,  prePostMetrics: DATA.MA.prePostMetrics },
};

// ─── FIXED ROW HEIGHTS (ensures label column and data columns align) ───
const H = {
  header: 105,
  roi: 54,
  persuasion: 205,
  prePostRow: 22,
  prePostPad: 30,
  toggle: 28,
  coalition: 74,
  activation: 74,
  influence: 60,
};

// ─── PALETTE ───
const C = {
  bg: "#0b0e13",
  card: "#111620",
  border: "#1c2433",
  text1: "#dce4ed",
  text2: "#7b8da3",
  text3: "#3e4f63",
  accent: "#5b93c7",
  accentLight: "#7eb3e0",
  accentMuted: "#3a6a94",
  accentDim: "#2a4a6a",
  gop: "#e57373",
  dem: "#64b5f6",
  tier1: "#34d399", tier1Bg: "#064e3b",
  tier2: "#eab308", tier2Bg: "#854d0e",
  tier3: "#ef4444", tier3Bg: "#991b1b",
  activation: "#a78bfa",
  influence: "#818cf8",
  coalition: "#3b82f6",
  persuasion: "#5b93c7",
};

const ASSIGNED_TIERS = {
  TSP:3, CEC:1, TC:1, HF:1, PP:2, WE:1, PFF:2, HHN:1, MFL:3, VS:3,
  UCP:3, FJP:1, HCP:3, HAD:1, HCI:1, GHI:2,
};
function getTier(r, code) { return ASSIGNED_TIERS[code] || 2; }
function tierColor(t) { return t === 1 ? C.tier1 : t === 2 ? C.tier2 : C.tier3; }
function tierBg(t) { return t === 1 ? C.tier1Bg : t === 2 ? C.tier2Bg : C.tier3Bg; }
function tierLabel(t) { return t === 1 ? "TIER 1" : t === 2 ? "TIER 2" : "TIER 3"; }

// ─── MINI DONUT ───
function MiniDonut({ value, size = 40, color = C.accent, strokeW = 4 }) {
  const r = (size - strokeW) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - value / 100);
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.border} strokeWidth={strokeW} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={strokeW}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" />
      <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="central" fill={C.text1}
        fontSize={size * 0.26} fontWeight={700} fontFamily="'JetBrains Mono',monospace"
        style={{ transform: "rotate(90deg)", transformOrigin: "center" }}>{value}%</text>
    </svg>
  );
}

// ─── PERSUADABILITY BAR ───
function PBar({ data, h = 120 }) {
  const colors = [C.persuasion, C.accentLight, "#4a5568", "#2d3748", "#1a202c"];
  return (
    <div style={{ width: 38, height: h, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column", border: `1px solid ${C.border}` }}>
      {data.map((v, i) => (
        <div key={i} style={{
          height: `${v}%`, background: colors[i],
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: v > 6 ? 12 : 0
        }}>
          {v >= 8 && <span style={{ fontSize: 7, fontWeight: 700, color: "#fff", fontFamily: "'JetBrains Mono',monospace" }}>{v}%</span>}
        </div>
      ))}
    </div>
  );
}

// ─── PRE/POST DELTA DISPLAY ───
function DeltaBar({ pre, post }) {
  const delta = +(post - pre).toFixed(1);
  const isPos = delta > 0;
  const isNeg = delta < 0;
  const deltaColor = isPos ? "#34d399" : isNeg ? "#ef4444" : C.text3;

  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: 2, height: H.prePostRow
    }}>
      <span style={{
        fontSize: 7, color: C.text3, fontFamily: "'JetBrains Mono',monospace"
      }}>{pre}</span>
      <span style={{ fontSize: 6, color: C.text3 }}>→</span>
      <span style={{
        fontSize: 7, color: C.text2, fontFamily: "'JetBrains Mono',monospace", fontWeight: 600
      }}>{post}</span>
      <span style={{
        fontSize: 8, fontWeight: 800, fontFamily: "'JetBrains Mono',monospace",
        color: deltaColor, marginLeft: 1
      }}>
        {isPos ? "+" : ""}{delta}
      </span>
    </div>
  );
}

// ─── HOVER TOOLTIP for pre/post labels ───
function MetricLabel({ metric }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{ height: H.prePostRow, display: "flex", alignItems: "center", position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span style={{
        fontSize: 7, color: C.text2, fontFamily: "'JetBrains Mono',monospace",
        cursor: "help", borderBottom: `1px dotted ${C.text3}`, paddingBottom: 1
      }}>
        {metric.label}
      </span>

      {hover && (
        <div style={{
          position: "absolute", left: 0, top: "100%", zIndex: 50,
          width: 220, padding: "8px 10px",
          background: "#1a2030", border: `1px solid ${C.accent}`,
          borderRadius: 6, boxShadow: "0 4px 16px rgba(0,0,0,0.5)"
        }}>
          <div style={{
            fontSize: 8, fontWeight: 700, color: C.accentLight,
            fontFamily: "'JetBrains Mono',monospace", marginBottom: 4,
            textTransform: "uppercase", letterSpacing: 0.5
          }}>{metric.label}</div>
          <div style={{
            fontSize: 7, color: C.text1, fontFamily: "'JetBrains Mono',monospace",
            lineHeight: 1.5, marginBottom: 6
          }}>{metric.question}</div>
          <div style={{
            fontSize: 7, color: C.accent, fontFamily: "'JetBrains Mono',monospace",
            lineHeight: 1.4, paddingTop: 4, borderTop: `1px solid ${C.border}`
          }}>
            <span style={{ fontWeight: 700 }}>Showing:</span> {metric.scale}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SEGMENT COLUMN ───
function SegmentColumn({ seg, expanded, PRE_POST_METRICS }) {
  const t = getTier(seg.roi, seg.code);
  const tc = tierColor(t);
  const partyColor = seg.party === "GOP" ? C.gop : C.dem;
  const prePostH = H.prePostPad + PRE_POST_METRICS.length * H.prePostRow;

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      width: 62, flexShrink: 0
    }}>
      {/* ── HEADER ── */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        padding: "8px 2px 6px", borderBottom: `1px solid ${C.border}`,
        width: "100%", height: H.header, justifyContent: "center"
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%", border: `2px solid ${partyColor}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 9, fontWeight: 800, color: partyColor,
          fontFamily: "'JetBrains Mono',monospace", marginBottom: 3
        }}>{seg.code.slice(0, 2)}</div>
        <div style={{
          fontSize: 7, fontWeight: 700, color: partyColor,
          fontFamily: "'JetBrains Mono',monospace", textAlign: "center",
          lineHeight: 1.2, marginBottom: 3
        }}>{seg.code}</div>
        <div style={{
          fontSize: 8, color: C.text2, fontFamily: "'JetBrains Mono',monospace", marginBottom: 2
        }}>{seg.pop}%</div>
        <span style={{
          fontSize: 7, fontWeight: 700, padding: "1px 5px", borderRadius: 3,
          background: tierBg(t), color: tc, fontFamily: "'JetBrains Mono',monospace"
        }}>{tierLabel(t)}</span>
      </div>

      {/* ── ROI SCORE ── */}
      <div style={{
        padding: "10px 2px", borderBottom: `1px solid ${C.border}`,
        width: "100%", display: "flex", flexDirection: "column", alignItems: "center",
        height: H.roi, justifyContent: "center"
      }}>
        <div style={{
          fontSize: 18, fontWeight: 800, color: tc,
          fontFamily: "'JetBrains Mono',monospace", lineHeight: 1
        }}>{seg.roi.toFixed(2)}</div>
        <div style={{ fontSize: 6, color: C.text3, fontFamily: "'JetBrains Mono',monospace", marginTop: 2 }}>ROI</div>
      </div>

      {/* ── PERSUASION ── */}
      <div style={{
        padding: "8px 2px", borderBottom: `1px solid ${C.border}`,
        width: "100%", display: "flex", flexDirection: "column", alignItems: "center",
        gap: 6, height: H.persuasion, justifyContent: "center"
      }}>
        <MiniDonut value={seg.highRoi} size={38} color={C.persuasion} />
        <div style={{ fontSize: 6, color: C.text3, fontFamily: "'JetBrains Mono',monospace" }}>% HIGH ROI</div>
        <PBar data={seg.persuadability} h={120} />
      </div>

      {/* ── PRE/POST EXPANDED ── */}
      {expanded && (
        <div style={{
          borderBottom: `1px solid ${C.border}`,
          width: "100%", display: "flex", flexDirection: "column",
          background: "#0d1118", height: prePostH,
          padding: "4px 3px", justifyContent: "center"
        }}>
          <div style={{ height: H.prePostPad - 8 }} />
          {PRE_POST_METRICS.map((m) => {
            const pp = seg.prePost[m.key];
            if (!pp) return null;
            return <DeltaBar key={m.key} pre={pp[0]} post={pp[1]} />;
          })}
        </div>
      )}

      {/* ── TOGGLE SPACER ── */}
      <div style={{
        height: H.toggle, borderBottom: `1px solid ${C.border}`, width: "100%"
      }} />

      {/* ── COALITION ── */}
      <div style={{
        borderBottom: `1px solid ${C.border}`,
        width: "100%", display: "flex", flexDirection: "column", alignItems: "center",
        height: H.coalition, justifyContent: "center"
      }}>
        <MiniDonut value={seg.supporters} size={40} color={C.coalition} />
        <div style={{ fontSize: 6, color: C.text3, fontFamily: "'JetBrains Mono',monospace", marginTop: 2 }}>SUPPORTERS</div>
      </div>

      {/* ── ACTIVATION ── */}
      <div style={{
        borderBottom: `1px solid ${C.border}`,
        width: "100%", display: "flex", flexDirection: "column", alignItems: "center",
        height: H.activation, justifyContent: "center"
      }}>
        <MiniDonut value={seg.activation} size={40} color={C.activation} />
        <div style={{ fontSize: 6, color: C.text3, fontFamily: "'JetBrains Mono',monospace", marginTop: 2 }}>ACTIVATION</div>
      </div>

      {/* ── INFLUENCE ── */}
      <div style={{
        width: "100%", display: "flex", flexDirection: "column", alignItems: "center",
        height: H.influence, justifyContent: "center"
      }}>
        <div style={{
          fontSize: 16, fontWeight: 800,
          color: seg.influence >= 15 ? C.influence : C.text2,
          fontFamily: "'JetBrains Mono',monospace"
        }}>{seg.influence}%</div>
        <div style={{ fontSize: 6, color: C.text3, fontFamily: "'JetBrains Mono',monospace", marginTop: 2 }}>INFLUENCE</div>
      </div>
    </div>
  );
}

// ─── MAIN GRID ───
export default function AudienceROI() {
  const [expanded, setExpanded] = useState(false);
  const [study, setStudy] = useState("ESI");
  const { segments: SEGMENTS, prePostMetrics: PRE_POST_METRICS } = STUDY_DATA[study];
  const gopSegs = SEGMENTS.filter(s => s.party === "GOP");
  const demSegs = SEGMENTS.filter(s => s.party === "DEM");
  const prePostH = H.prePostPad + PRE_POST_METRICS.length * H.prePostRow;

  const persuadLabels = [
    { label: "High leverage", color: C.persuasion },
    { label: "Low leverage", color: C.accentLight },
    { label: "Not convertible", color: "#4a5568" },
    { label: "Not persuadable", color: "#2d3748" },
    { label: "Neg. movement", color: "#1a202c" },
  ];

  return (
    <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        {/* Title */}
        <div style={{ marginBottom: 16 }}>
          <h1 style={{
            fontFamily: "'JetBrains Mono',monospace", fontSize: 14, fontWeight: 700,
            color: C.text1, margin: 0, letterSpacing: 2, textTransform: "uppercase"
          }}>Audience ROI</h1>
          <div style={{ fontSize: 9, color: C.text3, marginTop: 3, fontFamily: "'JetBrains Mono',monospace" }}>
            ROI = Population × (Persuasion + Coalition Value + Activation + Influence)
          </div>
          <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
            {[{k:"ESI",l:"ESI STUDY"},{k:"MA",l:"MA STUDY"}].map(s=>(
              <button key={s.k} onClick={()=>setStudy(s.k)} style={{
                fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:0.5,padding:"5px 14px",
                border:"1px solid",borderRadius:4,cursor:"pointer",
                borderColor:study===s.k?"#60a5fa":"#1c2433",
                background:study===s.k?"#1e3a5f":"#111620",
                color:study===s.k?"#93c5fd":"#7b8da3",transition:"all 0.15s"
              }}>{s.l}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "flex", background: C.card, borderRadius: 8, border: `1px solid ${C.border}`, overflow: "hidden" }}>

          {/* ═══ LEFT LABELS COLUMN ═══ */}
          <div style={{
            display: "flex", flexDirection: "column", flexShrink: 0,
            borderRight: `1px solid ${C.border}`, width: 140
          }}>
            {/* Header */}
            <div style={{ height: H.header, borderBottom: `1px solid ${C.border}` }} />

            {/* ROI label */}
            <div style={{
              height: H.roi, borderBottom: `1px solid ${C.border}`,
              display: "flex", alignItems: "center", padding: "0 10px"
            }}>
              <div style={{
                fontSize: 10, fontWeight: 800, color: C.accentLight,
                fontFamily: "'JetBrains Mono',monospace", letterSpacing: 2
              }}>ROI SCORE</div>
            </div>

            {/* Persuasion label + legend */}
            <div style={{
              height: H.persuasion, borderBottom: `1px solid ${C.border}`,
              padding: "8px 10px", display: "flex", flexDirection: "column", justifyContent: "center"
            }}>
              <div style={{
                fontSize: 9, fontWeight: 700, color: C.accentLight,
                fontFamily: "'JetBrains Mono',monospace", textTransform: "uppercase",
                letterSpacing: 1, marginBottom: 6
              }}>Persuasion</div>
              <div style={{
                fontSize: 7, color: C.text2, fontFamily: "'JetBrains Mono',monospace",
                lineHeight: 1.4, background: C.accentDim, borderRadius: 4, padding: "5px 7px",
                borderLeft: `2px solid ${C.accentMuted}`, marginBottom: 8
              }}>Did exposure move the audience toward our position?</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {persuadLabels.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: p.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 7, color: C.text2, fontFamily: "'JetBrains Mono',monospace" }}>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pre/Post expanded labels */}
            {expanded && (
              <div style={{
                height: prePostH, borderBottom: `1px solid ${C.border}`,
                padding: "4px 10px", background: "#0d1118",
                display: "flex", flexDirection: "column", justifyContent: "center"
              }}>
                <div style={{
                  fontSize: 8, fontWeight: 700, color: C.accentLight,
                  fontFamily: "'JetBrains Mono',monospace", textTransform: "uppercase",
                  letterSpacing: 1, marginBottom: 4, height: H.prePostPad - 8,
                  display: "flex", alignItems: "flex-end"
                }}>Pre → Post Δ</div>
                {PRE_POST_METRICS.map((m) => (
                  <MetricLabel key={m.key} metric={m} />
                ))}
              </div>
            )}

            {/* Toggle */}
            <div style={{
              height: H.toggle, borderBottom: `1px solid ${C.border}`,
              display: "flex", alignItems: "center", padding: "0 10px"
            }}>
              <button
                onClick={() => setExpanded(!expanded)}
                style={{
                  background: "none", border: `1px solid ${C.border}`, borderRadius: 4,
                  color: C.text2, fontSize: 7, fontFamily: "'JetBrains Mono',monospace",
                  cursor: "pointer", padding: "3px 8px", display: "flex", alignItems: "center", gap: 4,
                  transition: "all 0.15s"
                }}
              >
                <span style={{
                  display: "inline-block", transition: "transform 0.2s",
                  transform: expanded ? "rotate(90deg)" : "rotate(0deg)", fontSize: 9
                }}>▸</span>
                {expanded ? "Hide" : "Show"} Pre/Post
              </button>
            </div>

            {/* Coalition */}
            <div style={{ height: H.coalition, borderBottom: `1px solid ${C.border}`, padding: "8px 10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{
                fontSize: 9, fontWeight: 700, color: C.accentLight,
                fontFamily: "'JetBrains Mono',monospace", textTransform: "uppercase",
                letterSpacing: 1, marginBottom: 4
              }}>Coalition</div>
              <div style={{
                fontSize: 7, color: C.text2, fontFamily: "'JetBrains Mono',monospace",
                lineHeight: 1.4, background: C.accentDim, borderRadius: 4, padding: "5px 7px",
                borderLeft: `2px solid ${C.coalition}`
              }}>How many supporters can we predict will join our coalition?</div>
            </div>

            {/* Activation */}
            <div style={{ height: H.activation, borderBottom: `1px solid ${C.border}`, padding: "8px 10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{
                fontSize: 9, fontWeight: 700, color: C.accentLight,
                fontFamily: "'JetBrains Mono',monospace", textTransform: "uppercase",
                letterSpacing: 1, marginBottom: 4
              }}>Activation</div>
              <div style={{
                fontSize: 7, color: C.text2, fontFamily: "'JetBrains Mono',monospace",
                lineHeight: 1.4, background: C.accentDim, borderRadius: 4, padding: "5px 7px",
                borderLeft: `2px solid ${C.activation}`
              }}>What is the probability of responding to a CTA and being mobilized?</div>
            </div>

            {/* Influence */}
            <div style={{ height: H.influence, padding: "8px 10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{
                fontSize: 9, fontWeight: 700, color: C.accentLight,
                fontFamily: "'JetBrains Mono',monospace", textTransform: "uppercase",
                letterSpacing: 1, marginBottom: 4
              }}>Influence</div>
              <div style={{
                fontSize: 7, color: C.text2, fontFamily: "'JetBrains Mono',monospace",
                lineHeight: 1.4, background: C.accentDim, borderRadius: 4, padding: "5px 7px",
                borderLeft: `2px solid ${C.influence}`
              }}>How likely is this audience to affect outcomes or influence others?</div>
            </div>
          </div>

          {/* ═══ SCROLLABLE SEGMENT COLUMNS ═══ */}
          <div style={{ display: "flex", overflowX: "auto", flex: 1 }}>
            {/* GOP */}
            <div style={{ display: "flex", borderRight: `2px solid ${C.border}` }}>
              {gopSegs.map(s => (
                <div key={s.code} style={{ borderRight: `1px solid ${C.border}` }}>
                  <SegmentColumn seg={s} expanded={expanded} PRE_POST_METRICS={PRE_POST_METRICS} />
                </div>
              ))}
            </div>
            {/* DEM */}
            <div style={{ display: "flex" }}>
              {demSegs.map(s => (
                <div key={s.code} style={{ borderRight: `1px solid ${C.border}` }}>
                  <SegmentColumn seg={s} expanded={expanded} PRE_POST_METRICS={PRE_POST_METRICS} />
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
