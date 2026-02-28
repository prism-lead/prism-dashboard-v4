import { useState, useRef } from "react";

// ─── ESI SEGMENT DATA ───
const ESI_SEGMENTS = [
  { id:1, code:"TSP", name:"Trust the Science Pragmatists", party:"GOP", pop:2, roi:0.81, highRoi:25, supporters:73, activation:23, influence:5, persuadability:[14,12,12,8,56], prePost:{pol:[67.3,67.3], att:[66.8,66.6]} },
  { id:2, code:"CEC", name:"Consumer Empowerment Champions", party:"GOP", pop:7, roi:1.01, highRoi:36, supporters:86, activation:36, influence:3, persuadability:[17,19,15,13,35], prePost:{pol:[76.0,80.0], att:[69.8,71.4]} },
  { id:3, code:"TC",  name:"Traditional Conservatives", party:"GOP", pop:6, roi:1.11, highRoi:38, supporters:91, activation:43, influence:3, persuadability:[17,22,14,16,31], prePost:{pol:[80.4,87.1], att:[71.7,73.7]} },
  { id:4, code:"HF",  name:"Health Futurists", party:"GOP", pop:2, roi:1.22, highRoi:36, supporters:82, activation:27, influence:23, persuadability:[22,14,20,6,38], prePost:{pol:[48.0,68.0], att:[64.0,66.3]} },
  { id:5, code:"PP",  name:"Price Populists", party:"GOP", pop:3, roi:1.02, highRoi:36, supporters:79, activation:33, influence:5, persuadability:[23,13,11,15,38], prePost:{pol:[59.6,65.9], att:[64.9,67.3]} },
  { id:6, code:"WE",  name:"Wellness Evangelists", party:"GOP", pop:9, roi:1.10, highRoi:38, supporters:87, activation:34, influence:3, persuadability:[15,23,19,15,28], prePost:{pol:[73.3,78.0], att:[67.8,69.3]} },
  { id:7, code:"PFF", name:"Paleo Freedom Fighters", party:"GOP", pop:4, roi:1.04, highRoi:34, supporters:84, activation:27, influence:12, persuadability:[16,18,20,18,28], prePost:{pol:[70.0,70.0], att:[67.9,70.3]} },
  { id:8, code:"HHN", name:"Holistic Health Naturalists", party:"GOP", pop:3, roi:1.04, highRoi:37, supporters:75, activation:25, influence:20, persuadability:[23,14,12,9,43], prePost:{pol:[56.6,57.3], att:[67.9,68.5]} },
  { id:9, code:"MFL", name:"Medical Freedom Libertarians", party:"GOP", pop:5, roi:0.81, highRoi:31, supporters:82, activation:28, influence:5, persuadability:[7,24,13,24,33], prePost:{pol:[76.4,78.2], att:[71.8,69.4]} },
  { id:10,code:"VS",  name:"Vaccine Skeptics", party:"GOP", pop:5, roi:0.84, highRoi:26, supporters:74, activation:23, influence:4, persuadability:[11,15,15,21,38], prePost:{pol:[62.2,60.4], att:[64.1,65.4]} },
  { id:11,code:"UCP", name:"Universal Care Progressives", party:"DEM", pop:11, roi:0.89, highRoi:37, supporters:68, activation:32, influence:5, persuadability:[21,16,8,17,37], prePost:{pol:[61.3,60.0], att:[48.0,47.8]} },
  { id:12,code:"FJP", name:"Faith & Justice Progressives", party:"DEM", pop:10, roi:1.01, highRoi:42, supporters:75, activation:33, influence:5, persuadability:[24,18,5,11,42], prePost:{pol:[54.7,60.0], att:[63.7,65.3]} },
  { id:13,code:"HCP", name:"Health Care Protectionists", party:"DEM", pop:8, roi:0.85, highRoi:33, supporters:77, activation:22, influence:4, persuadability:[17,16,9,19,39], prePost:{pol:[57.9,60.8], att:[61.1,61.2]} },
  { id:14,code:"HAD", name:"Health Abundance Democrats", party:"DEM", pop:10, roi:1.10, highRoi:40, supporters:81, activation:33, influence:10, persuadability:[24,16,11,12,37], prePost:{pol:[62.7,65.3], att:[65.8,67.5]} },
  { id:15,code:"HCI", name:"Health Care Incrementalists", party:"DEM", pop:8, roi:1.17, highRoi:45, supporters:87, activation:29, influence:4, persuadability:[21,24,12,11,32], prePost:{pol:[65.0,75.0], att:[68.5,69.8]} },
  { id:16,code:"GHI", name:"Global Health Institutionalists", party:"DEM", pop:6, roi:0.98, highRoi:36, supporters:85, activation:35, influence:7, persuadability:[12,24,13,17,33], prePost:{pol:[76.0,80.0], att:[61.7,63.0]} },
];

// ─── MA SEGMENT DATA ───
const MA_SEGMENTS = [
  { id:1, code:"TSP", name:"Trust the Science Pragmatists", party:"GOP", pop:2, roi:0.91, highRoi:34, supporters:51, activation:27, influence:5, persuadability:[15,19,18,7,41], prePost:{pol2:[46.6,52.1], pol1:[32.9,24.6]} },
  { id:2, code:"CEC", name:"Consumer Empowerment Champions", party:"GOP", pop:7, roi:1.24, highRoi:46, supporters:80, activation:27, influence:3, persuadability:[27,19,8,12,33], prePost:{pol2:[71.1,75.2], pol1:[43.0,59.5]} },
  { id:3, code:"TC",  name:"Traditional Conservatives", party:"GOP", pop:6, roi:0.81, highRoi:27, supporters:61, activation:15, influence:3, persuadability:[11,16,13,13,47], prePost:{pol2:[49.3,54.7], pol1:[37.3,44.0]} },
  { id:4, code:"HF",  name:"Health Futurists", party:"GOP", pop:2, roi:0.88, highRoi:31, supporters:73, activation:30, influence:23, persuadability:[18,12,16,6,47], prePost:{pol2:[40.9,36.7], pol1:[22.4,24.5]} },
  { id:5, code:"PP",  name:"Price Populists", party:"GOP", pop:3, roi:1.03, highRoi:42, supporters:64, activation:27, influence:5, persuadability:[24,18,10,4,44], prePost:{pol2:[52.0,50.0], pol1:[24.0,24.0]} },
  { id:6, code:"WE",  name:"Wellness Evangelists", party:"GOP", pop:9, roi:0.94, highRoi:32, supporters:48, activation:17, influence:3, persuadability:[16,16,19,3,45], prePost:{pol2:[44.4,45.3], pol1:[33.4,33.3]} },
  { id:7, code:"PFF", name:"Paleo Freedom Fighters", party:"GOP", pop:4, roi:0.98, highRoi:34, supporters:51, activation:22, influence:12, persuadability:[11,23,26,8,32], prePost:{pol2:[36.1,42.6], pol1:[21.3,25.6]} },
  { id:8, code:"HHN", name:"Holistic Health Naturalists", party:"GOP", pop:3, roi:1.05, highRoi:43, supporters:69, activation:35, influence:20, persuadability:[26,17,7,7,42], prePost:{pol2:[44.9,44.3], pol1:[28.5,25.0]} },
  { id:9, code:"MFL", name:"Medical Freedom Libertarians", party:"GOP", pop:5, roi:0.99, highRoi:38, supporters:74, activation:34, influence:5, persuadability:[16,22,12,14,36], prePost:{pol2:[67.2,64.5], pol1:[42.1,42.1]} },
  { id:10,code:"VS",  name:"Vaccine Skeptics", party:"GOP", pop:5, roi:0.84, highRoi:29, supporters:52, activation:22, influence:4, persuadability:[13,16,20,12,39], prePost:{pol2:[46.7,49.3], pol1:[21.4,32.0]} },
  { id:11,code:"UCP", name:"Universal Care Progressives", party:"DEM", pop:11, roi:1.19, highRoi:49, supporters:79, activation:35, influence:5, persuadability:[32,17,8,15,28], prePost:{pol2:[77.3,80.0], pol1:[60.0,62.6]} },
  { id:12,code:"FJP", name:"Faith & Justice Progressives", party:"DEM", pop:10, roi:1.04, highRoi:43, supporters:69, activation:35, influence:5, persuadability:[17,26,10,10,37], prePost:{pol2:[60.6,63.4], pol1:[34.2,41.7]} },
  { id:13,code:"HCP", name:"Health Care Protectionists", party:"DEM", pop:8, roi:1.25, highRoi:50, supporters:73, activation:45, influence:4, persuadability:[22,28,11,8,30], prePost:{pol2:[73.6,69.8], pol1:[40.3,45.1]} },
  { id:14,code:"HAD", name:"Health Abundance Democrats", party:"DEM", pop:10, roi:0.86, highRoi:37, supporters:61, activation:27, influence:10, persuadability:[16,21,8,4,51], prePost:{pol2:[53.3,57.3], pol1:[37.3,34.7]} },
  { id:15,code:"HCI", name:"Health Care Incrementalists", party:"DEM", pop:8, roi:0.91, highRoi:30, supporters:61, activation:25, influence:4, persuadability:[15,15,19,10,40], prePost:{pol2:[47.9,51.4], pol1:[38.9,43.8]} },
  { id:16,code:"GHI", name:"Global Health Institutionalists", party:"DEM", pop:6, roi:1.06, highRoi:43, supporters:72, activation:32, influence:7, persuadability:[20,23,8,13,36], prePost:{pol2:[62.7,64.0], pol1:[46.6,56.0]} },
];

// Per-study pre/post metrics
const ESI_PRE_POST_METRICS = [
  { key: "pol", label: "ESI Tax Policy", question: "Under current law, health insurance provided by employers is excluded from income taxes. Should the tax break for employer-sponsored health insurance stay in place, or be changed so those benefits are taxed like income?", scale: "% saying tax break should stay in place" },
  { key: "att", label: "ESI Role", question: "How strongly you believe employer-sponsored insurance deserves to play a central role in the U.S. health care system (0–100 scale)", scale: "Mean score (0 = no legitimate role, 100 = essential role)" },
];

const MA_PRE_POST_METRICS = [
  { key: "pol2", label: "Prioritize MA", question: "Congress should prioritize keeping Medicare Advantage strong and affordable, protecting the benefits seniors rely on", scale: "% Agree" },
  { key: "pol1", label: "Oppose MA Cuts", question: "Do you support or oppose reducing federal payments to Medicare Advantage plans in order to lower overall Medicare spending?", scale: "% Oppose" },
];

const STUDY_DATA = {
  ESI: { segments: ESI_SEGMENTS, prePostMetrics: ESI_PRE_POST_METRICS },
  MA:  { segments: MA_SEGMENTS,  prePostMetrics: MA_PRE_POST_METRICS },
};

// ─── FIXED ROW HEIGHTS (ensures label column and data columns align) ───
const H = {
  header: 105,
  roi: 54,
  persuasion: 205,
  prePostRow: 22,  // per metric row
  prePostPad: 30,  // header + padding in pre/post section
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
  influence: "#818cf8",   // indigo — distinct from teal/green tiers
  coalition: "#3b82f6",
  persuasion: "#5b93c7",
};

function getTier(r) { return r >= 1.07 ? 1 : r >= 1.00 ? 2 : 3; }
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
  const delta = post - pre;
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
function SegmentColumn({ seg, expanded }) {
  const t = getTier(seg.roi);
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
          <div style={{ height: H.prePostPad - 8 }} /> {/* spacer matching label header */}
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
                  <SegmentColumn seg={s} expanded={expanded} />
                </div>
              ))}
            </div>
            {/* DEM */}
            <div style={{ display: "flex" }}>
              {demSegs.map(s => (
                <div key={s.code} style={{ borderRight: `1px solid ${C.border}` }}>
                  <SegmentColumn seg={s} expanded={expanded} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
