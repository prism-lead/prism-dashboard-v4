// ═══════════════════════════════════════════════════════════════
// PRISM TEMPLATE — IDEOLOGY DIMENSIONS (STATIC)
// 15 bipolar scales × 16 segments, 1-7 scales
// ═══════════════════════════════════════════════════════════════

export const IDEOLOGY_GROUPS = [
  {
    label: "MARKETS", color: "#34d399",
    dims: [
      { key:"regulation", label:"Regulation",   lo:"Necessary",       hi:"Harmful" },
      { key:"sizeofgovt", label:"Size of Govt", lo:"Do more",         hi:"Spends too much" },
      { key:"profit",     label:"Profit",       lo:"Too much profit", hi:"Fair profit" },
    ],
  },
  {
    label: "MFA", color: "#f59e0b",
    dims: [
      { key:"mfa", label:"Health Care", lo:"Right / public system", hi:"Private market" },
    ],
  },
  {
    label: "PLANET", color: "#60a5fa",
    dims: [
      { key:"enviro",  label:"Environment",    lo:"Protect",        hi:"Gone too far" },
      { key:"climate", label:"Climate Change", lo:"Serious threat", hi:"Overblown" },
    ],
  },
  {
    label: "MORALITY", color: "#c084fc",
    dims: [
      { key:"homosexuals", label:"Homosexuality",   lo:"Acceptance",  hi:"Discouragement" },
      { key:"familystruc", label:"Family Structure", lo:"Diversity",   hi:"Traditional" },
      { key:"abortion",    label:"Abortion",         lo:"Pro-choice",  hi:"Pro-life" },
      { key:"religion",    label:"Religion",         lo:"Without God", hi:"Requires God" },
    ],
  },
  {
    label: "POPULISM", color: "#fb7185",
    dims: [
      { key:"immigration", label:"Immigration", lo:"Strengthens",     hi:"Threatens" },
      { key:"trade",       label:"Trade",       lo:"Free trade",      hi:"Protectionism" },
      { key:"globalism",   label:"Globalism",   lo:"Global leader",   hi:"America First" },
      { key:"patriotism",  label:"Patriotism",  lo:"Not proud",       hi:"Proud" },
      { key:"authority",   label:"Authority",   lo:"Strong measures", hi:"Trust system" },
    ],
  },
];

export const IDEOLOGY_DATA = {
  regulation:  [4.76,4.78,5.28,5.34,4.49,4.08,4.91,4.73,5.26,4.67, 3.49,3.77,4.02,3.93,4.02,3.30],
  sizeofgovt:  [4.17,4.42,5.00,5.01,3.66,3.88,4.53,4.16,4.20,4.09, 2.39,3.17,3.15,3.31,4.02,2.66],
  profit:      [4.31,4.40,4.38,4.15,3.74,4.25,3.65,3.96,4.12,3.80, 3.29,3.62,3.53,3.94,3.84,3.53],
  mfa:         [3.98,4.26,4.42,4.54,3.81,3.40,4.56,4.01,4.06,4.47, 2.26,3.21,3.04,3.29,3.09,2.48],
  enviro:      [4.60,4.71,4.76,5.16,4.24,3.81,4.65,4.52,4.38,4.76, 2.48,3.29,2.85,3.19,2.86,2.28],
  climate:     [5.00,5.29,5.31,5.58,4.69,4.07,4.89,4.56,4.99,4.76, 3.01,3.73,3.97,4.17,3.99,3.49],
  homosexuals: [4.77,4.69,5.33,5.48,4.22,4.27,4.96,4.16,4.23,4.56, 3.00,3.70,3.59,4.35,3.77,2.84],
  familystruc: [4.87,3.43,5.01,5.59,3.75,4.04,4.85,4.54,4.04,4.19, 2.41,3.31,3.12,3.73,3.03,2.23],
  abortion:    [4.42,4.59,4.84,5.05,4.84,4.23,5.14,4.38,4.89,4.69, 2.60,3.07,3.66,3.73,3.39,2.51],
  religion:    [4.59,4.54,4.77,4.31,4.19,3.66,4.26,4.41,4.35,3.73, 3.07,4.17,3.39,3.65,3.14,2.80],
  immigration: [4.95,4.95,5.05,5.30,4.55,4.37,4.88,4.39,5.06,5.22, 2.48,3.14,3.39,3.61,3.43,2.68],
  trade:       [4.71,5.07,4.74,4.94,4.52,4.56,5.05,4.77,4.87,4.97, 3.15,3.86,4.21,4.17,3.53,2.60],
  globalism:   [5.29,5.30,5.45,5.34,4.65,4.35,4.90,5.04,4.92,5.21, 3.24,3.73,4.31,4.17,4.94,3.75],
  patriotism:  [4.48,4.31,4.83,4.62,4.30,3.82,4.45,4.21,4.26,4.35, 3.64,4.10,4.34,4.11,4.31,3.90],
  authority:   [4.75,3.40,4.58,4.95,3.88,3.78,4.82,4.41,3.70,3.83, 2.72,4.11,3.17,3.97,2.93,2.61],
};

export const ALL_IDEOLOGY_DIMS = IDEOLOGY_GROUPS.flatMap(g => g.dims);
