import { NavLink, Outlet } from "react-router-dom";
import { FONT } from "../data/theme";
import { useTheme } from "../context/ThemeContext";

import { IoIosArrowDown } from "react-icons/io";

const NAV_ITEMS = [
  { to: "/", label: "AUDIENCE MAP" },
  { to: "/roi", label: "AUDIENCE ROI" },
  { to: "/messages", label: "MESSAGE MAP" },
  { to: "/profile", label: "AUDIENCE PROFILES" },
];

const THEME_OPTIONS = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
];

export default function Shell() {
  const { theme, themeId, setThemeId } = useTheme();
  const t = theme;

  return (
    <div
      style={{
        background: t.background,
        minHeight: "100vh",
        fontFamily: FONT,
        color: t.text,
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700;800&family=Roboto:wght@400;500;700;800&family=Roboto+Slab:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ─── TOP BAR ─── */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          padding: "12px 24px",
          borderBottom: `1px solid ${t.border}`,
          background: t.surface,
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: t.shadow,
        }}
      >
        {/* Logo / Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <img src="/prismlogo.png" alt="PRISM logo" style={{ height: 28 }} />
          <span
            style={{
              fontSize: 9,
              fontWeight: 600,
              color: t.textMuted,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            AUDIENCE INTELLIGENCE PLATFORM
          </span>
        </div>

        {/* Nav Links */}
        <nav style={{ display: "flex", gap: 2, flex: 1 }}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              style={({ isActive }) => ({
                padding: "8px 10px",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: isActive ? 500 : 300,
                fontFamily: "'Nunito',sans-serif",
                color: isActive ? t.text : t.textMuted,
                background: isActive ? `${t.accent}20` : "transparent",
                textDecoration: "none",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Theme toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            flexShrink: 0,
            padding: "6px 12px",
            borderRadius: 6,
            border: `1px solid ${t.border}`,
            background: t.surfaceInner,
            position:'relative'
          }}
        >
          <span style={{ fontSize: 9, color: t.textMuted, letterSpacing: 1 }}>
            Theme:
          </span>
          <select
            value={themeId}
            onChange={(e) => setThemeId(e.target.value)}
            style={{
              fontSize: 10,
              border: `none`,
              background: "transparent",
              color: t.text,
              fontFamily: "'JetBrains Mono', monospace",
              cursor: "pointer",
              outline: "none",
              appearance: "none",
              WebkitAppearance: "none",
              paddingRight: 15,
            }}
          >
            {THEME_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id} color="black">
                {opt.label}
              </option>
            ))}
          </select>
          <IoIosArrowDown size={15} />
        </div>

        {/* Study badge */}
        <div
          style={{
            fontSize: 9,
            fontWeight: 600,
            color: t.textDim,
            letterSpacing: 1,
            textTransform: "uppercase",
            padding: "6px 12px",
            borderRadius: 4,
            border: `1px solid ${t.border}`,
            flexShrink: 0,
          }}
        >
          MA ESI STUDY
        </div>
      </header>

      {/* ─── CONTENT AREA ─── */}
      <main style={{ padding: "24px 28px" }}>
        <Outlet />
      </main>
    </div>
  );
}
