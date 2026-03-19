import { useTheme } from "../../context/ThemeContext";
import { useProfileC } from "../../pages/SegmentProfile";

function SchemaBlock({ label, text, color }) {
  const C = useProfileC();
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        marginBottom: 5,
        background: theme.card,
        padding: '15px 10px',
        borderRadius: 10,
      }}
    >
      {/* <div
        style={{ width: 3, background: color, borderRadius: 2, flexShrink: 0 }}
      /> */}
      <div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: theme.text,
            fontFamily: "'Roboto Slab',serif",
            textTransform: "uppercase",
            letterSpacing: 0.8,
            marginBottom: 1,
            display: "flex",
            gap: 5,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: color,
              borderRadius: 100,
            }}
          />
          {label}
        </div>
        <div style={{ fontSize: 14, color: C.text2, lineHeight: 1.5 }}>
          {text}
        </div>
      </div>
    </div>
  );
}

export default SchemaBlock;
