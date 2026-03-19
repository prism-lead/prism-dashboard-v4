/* eslint-disable no-unsafe-optional-chaining */
// ════════════════════════════════════════════════════════════════
// DEMOGRAPHICS TAB
// ════════════════════════════════════════════════════════════════

import { useTheme } from "../../context/ThemeContext";
import {
  MILITARY,
  PREPOST,
  RELIGION_CATS,
  RELIGION_DATA,
  RELIGION_OVERINDEX,
  segments,
  UNION_HH,
} from "../../data/profile";
import { useProfileC } from "../../pages/SegmentProfile";
import { USCensusMap } from "../USCensusMap";
import CensusDivisionMap from "./CensusDivisionMap";
import Donut from "./Donut";

function DemographicsPanel({ seg, tabId }) {
  const C = useProfileC();
  const { theme } = useTheme();
  const segIdx = seg.id - 1;
  const male = parseInt(seg.demo.male) || 50;
  const nw = parseInt(seg.demo.nonwhite) || 0;
  const white = 100 - nw;
  //   const pp = PREPOST[seg.code];

  const selectedSegmentData = segments.find((s) => s.id === tabId);
  const regionPercentMap = {};
  for (const r of selectedSegmentData?.dominantRegions) {
    regionPercentMap[r.id] = r.percent;
  }

  // Religion data for this segment — find the max
  const relData = RELIGION_CATS.map((cat) => ({
    label: cat.label,
    value: RELIGION_DATA[cat.key][segIdx],
    overindex: (RELIGION_OVERINDEX[cat.key] || []).includes(segIdx),
  }));
  const maxRel = Math.max(...relData.map((r) => r.value));

  return (
    <div style={{ animation: "fadeIn 0.25s ease" }}>
      {/* Row 1: Core Demo + Geography */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 12,
        }}
      >
        {/* Core Demographics */}
        <div
          style={{
            background: C.card,
            borderRadius: 8,
            padding: 18,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: C.textDim,
              fontFamily: "'Roboto Slab',serif",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 16,
            }}
          >
            CORE DEMOGRAPHICS
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: 32,
              marginBottom: 18,
              paddingBottom: 16,
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <Donut
              value={male}
              label="Male"
              subLabel={`${100 - male}% Female`}
            />
            <Donut value={white} label="White" subLabel={`${nw}% Nonwhite`} />
          </div>
          <div style={{ display: "flex", gap: 0 ,paddingBottom:20, borderBottom: `1px solid ${C.border}`,
 }}>
            {[
              { label: "MEDIAN AGE", value: seg.demo.medAge },
              { label: "MEAN HHI", value: seg.demo.hhi },
              { label: "COLLEGE +", value: seg.demo.college },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  textAlign: "center",
                  borderRight: i < 2 ? `1px solid ${C.border}` : "none",
                  padding: "4px 0",
                }}
              >
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 800,
                    color: C.text1,
                    fontFamily: "'Nunito',sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: theme.text3,
                    fontFamily: "'Nunito',sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginTop: 5,
                    fontWeight:700
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          {/* M4A / Vax Avoid */}
          {/* <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 12,
              paddingTop: 12,
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <div style={{ textAlign: "center", flex: 1 }}>
              <div
                style={{
                  fontSize: 8,
                  color: "#475569",
                  fontFamily: "'Nunito',sans-serif",
                  marginBottom: 2,
                }}
              >
                SUPPORT M4A
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: C.text1,
                  fontFamily: "'Nunito',sans-serif",
                }}
              >
                {seg.demo.m4a}
              </div>
            </div>
            <div style={{ textAlign: "center", flex: 1 }}>
              <div
                style={{
                  fontSize: 8,
                  color: "#475569",
                  fontFamily: "'Nunito',sans-serif",
                  marginBottom: 2,
                }}
              >
                VAX AVOIDANT
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: C.text1,
                  fontFamily: "'Nunito',sans-serif",
                }}
              >
                {seg.demo.vaxAvoid}
              </div>
            </div>
          </div> */}
        </div>

        {/* Geography */}
        <div
          style={{
            background: C.card,
            borderRadius: 8,
            padding: 18,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: C.text2,
              fontFamily: "'Roboto Slab',serif",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 16,
            }}
          >
            GEOGRAPHY
          </div>
          <USCensusMap regionPercentMap={regionPercentMap} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: 6,
              gap: 10,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: theme.genderChartActive,
                fontFamily: "'Nunito',sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  background: theme.genderChartActive,
                  borderRadius: "100px",
                }}
              />
              {seg.demo.cenDiv}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                <span
                  style={{
                    fontSize: 7,
                    color: theme.genderChartActive,
                    fontFamily: "'Nunito',sans-serif",
                    padding: "5px 12px",
                    borderRadius: "5px",
                    background: "#D3F8FF",
                  }}
                >
                  Dominant
                </span>
              </div>
            </div>
          </div>
          {/* <CensusDivisionMap division={seg.demo.cenDiv} pct={seg.demo.cenPct} /> */}
          <div
            style={{
              marginTop: 14,
              paddingTop: 12,
              borderTop: `1px solid ${C.border}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: C.text1,
                fontFamily: "'Nunito',sans-serif",
                minWidth: 52,
                textAlign: "center",
              }}
            >
              {seg.demo.rural}
            </div>
            <div>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  color: C.text1,
                  fontFamily: "'Nunito',sans-serif",
                }}
              >
                Rural
              </div>
              <div
                style={{
                  fontSize: 8,
                  color: C.text3,
                  fontFamily: "'Nunito',sans-serif",
                }}
              >
                Share residing in rural areas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Military / Union / Religion */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 200px 1fr",
          gap: 12,
          marginBottom: 12,
        }}
      >
        {/* Military */}
        <div
          style={{
            background: C.card,
            borderRadius: 8,
            padding: 16,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: C.text2,
              fontFamily: "'Roboto Slab',serif",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            MILITARY
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: C.text1,
                fontFamily: "'Nunito',sans-serif",
              }}
            >
              {Math.round(MILITARY[segIdx])}%
            </div>
            <div
              style={{
                fontSize: 8,
                color: C.text3,
                fontFamily: "'Nunito',sans-serif",
                marginTop: 4,
              }}
            >
              Active duty or veteran
            </div>
          </div>
          <div
            style={{
              marginTop: 10,
              paddingTop: 8,
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <div
              style={{
                height: 6,
                background: theme.militaryLineChart,
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(MILITARY[segIdx] / 20) * 100}%`,
                  height: "100%",
                  background: "#0097B2",
                  borderRadius: 3,
                  transition: "width 0.5s",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 6,
                color: C.text3,
                marginTop: 3,
                fontFamily: "'Nunito',sans-serif",
              }}
            >
              <span>0%</span>
              <span>Pop avg ~9%</span>
              <span>20%</span>
            </div>
          </div>
        </div>

        {/* Union */}
        <div
          style={{
            background: C.card,
            borderRadius: 8,
            padding: 16,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: C.text2,
              fontFamily: "'Roboto Slab',serif",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            UNION HOUSEHOLD
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: UNION_HH[segIdx] >= 20 ? "#0097B2" : C.text1,
                fontFamily: "'Nunito',sans-serif",
              }}
            >
              {Math.round(UNION_HH[segIdx])}%
            </div>
            <div
              style={{
                fontSize: 8,
                color: C.text3,
                fontFamily: "'Nunito',sans-serif",
                marginTop: 4,
              }}
            >
              Union household member
            </div>
          </div>
          <div
            style={{
              marginTop: 10,
              paddingTop: 8,
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <div
              style={{
                height: 6,
                background: theme.militaryLineChart,
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(UNION_HH[segIdx] / 30) * 100}%`,
                  height: "100%",
                  background: UNION_HH[segIdx] >= 20 ? "#0097B2" : "#5b93c7",
                  borderRadius: 3,
                  transition: "width 0.5s",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 6,
                color: C.text3,
                marginTop: 3,
                fontFamily: "'Nunito',sans-serif",
              }}
            >
              <span>0%</span>
              <span>Pop avg ~16%</span>
              <span>30%</span>
            </div>
          </div>
        </div>

        {/* Religion */}
        <div
          style={{
            background: C.card,
            borderRadius: 8,
            padding: 16,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: C.text2,
              fontFamily: "'Roboto Slab',serif",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            RELIGION
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {relData.map((r, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                <span
                  style={{
                    width: 90,
                    fontSize: 8,
                    color: r.overindex ? C.accentLight : C.text2,
                    fontWeight: r.overindex ? 700 : 400,
                    fontFamily: "'Nunito',sans-serif",
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {r.label}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 14,
                    background: theme.militaryLineChart,
                    borderRadius: 3,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${(r.value / Math.max(maxRel, 65)) * 100}%`,
                      height: "100%",
                      background: r.overindex
                        ? theme.religionChartLine
                        : theme.religionChartActiveLine,
                      borderRadius: 3,
                      transition: "width 0.5s",
                      border: r.overindex
                        ? `1px solid ${theme.religionChartLine}`
                        : "none",
                    }}
                  />
                </div>
                <span
                  style={{
                    width: 36,
                    fontSize: 9,
                    fontWeight: r.overindex ? 800 : 500,
                    color: r.overindex ? theme.text : C.text2,
                    fontFamily: "'Nunito',sans-serif",
                    textAlign: "right",
                  }}
                >
                  {r.value.toFixed(1)}%
                </span>
                {r.overindex && (
                  <span
                    style={{
                      fontSize: 7,
                      fontWeight: 800,
                      color: "#fbbf24",
                      fontFamily: "'Nunito',sans-serif",
                    }}
                  >
                    ↑
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemographicsPanel;
