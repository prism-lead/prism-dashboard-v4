import { useTheme } from "../../context/ThemeContext";
import { DEM_PODS, GOP_PODS, NEWS, SEGMENTS } from "../../data/profile";
import { HBar, popAvg, useProfileC } from "../../pages/SegmentProfile";

// ─── TAB: MEDIA ──────────────────────────────────────────────────────────────
function MediaPanel({ segIdx }) {
  const { theme } = useTheme();
  const C = useProfileC();
  const seg = SEGMENTS[segIdx];
  const pods = seg.party === "GOP" ? GOP_PODS : DEM_PODS;
  const podLabel = seg.party === "GOP" ? "GOP Podcasts" : "DEM Podcasts";
//   const podColor = seg.party === "GOP" ? C.partyGOP : C.partyDEM;
  // Sort by this segment's value
  const sortedPods = [...pods]
    .sort((a, b) => b.v[segIdx] - a.v[segIdx])
    .filter((p) => p.v[segIdx] > 0);
  const sortedNews = [...NEWS].sort((a, b) => b.v[segIdx] - a.v[segIdx]);
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <div
        style={{
          flex: 1,
          padding: "16px 20px",
          background: C.card,
          borderRadius: 10,
          border: `1px solid ${C.cardBorder}`,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: C.white,
            marginBottom: 14,
          }}
        >
          {podLabel}
        </div>
        {sortedPods.length === 0 ? (
          <div style={{ fontSize: 11, color: C.textDim, fontStyle: "italic" }}>
            No podcast data for {seg.party === "GOP" ? "DEM" : "GOP"} segments
          </div>
        ) : (
          sortedPods.map((d, i) => (
            <HBar
              key={i}
              label={d.l}
              value={d.v[segIdx]}
              avg={popAvg(d.v)}
              color={theme.podcastsFirstActiveLineBg}
              maxVal={0.3}
            />
          ))
        )}
      </div>
      <div
        style={{
          flex: 1,
          padding: "16px 20px",
          background: C.card,
          borderRadius: 10,
          border: `1px solid ${C.cardBorder}`,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: C.steel,
            marginBottom: 14,
          }}
        >
          News Sources
        </div>
        {sortedNews.map((d, i) => (
          <HBar
            key={i}
            label={d.l}
            value={d.v[segIdx]}
            avg={popAvg(d.v)}
            color={theme.podcastsSecondActiveLineBg}
            maxVal={0.7}
          />
        ))}
      </div>
    </div>
  );
}

export default MediaPanel