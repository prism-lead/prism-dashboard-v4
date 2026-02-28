// ═══════════════════════════════════════════════════════════════
// PRISM TEMPLATE — VECTOR FINGERPRINTS (STATIC)
// Discriminant function loadings per segment
// ═══════════════════════════════════════════════════════════════

export const GOP_VECTORS = {
  TSP: { name:"TRUST THE SCIENCE PRAGMATISTS", pop:2, trust:0.37, science:0.23, autonomy:-0.20, markets:-0.11 },
  CEC: { name:"CONSUMER EMPOWERMENT CHAMPIONS", pop:7, trust:0.24, science:0.26, autonomy:-0.30, markets:-0.01 },
  TC:  { name:"TRADITIONAL CONSERVATIVES", pop:6, trust:0.42, science:0.21, autonomy:-0.21, markets:0.29 },
  HF:  { name:"HEALTH FUTURISTS", pop:2, trust:0.04, science:0.29, autonomy:-0.29, markets:-0.34 },
  PP:  { name:"PRICE POPULISTS", pop:3, trust:-0.19, science:0.23, autonomy:-0.17, markets:-0.36 },
  WE:  { name:"WELLNESS EVANGELISTS", pop:9, trust:-0.02, science:-0.22, autonomy:0.16, markets:0.24 },
  PFF: { name:"PALEO FREEDOM FIGHTERS", pop:4, trust:-0.43, science:-0.43, autonomy:0.41, markets:0.09 },
  HHN: { name:"HOLISTIC HEALTH NATURALISTS", pop:3, trust:-0.07, science:0.03, autonomy:-0.03, markets:-0.09 },
  MFL: { name:"MEDICAL FREEDOM LIBERTARIANS", pop:5, trust:-0.20, science:-0.06, autonomy:0.09, markets:-0.12 },
  VS:  { name:"VACCINE SKEPTICS", pop:5, trust:-0.64, science:-0.46, autonomy:0.36, markets:-0.19 },
};

export const DEM_VECTORS = {
  UCP: { name:"UNIVERSAL CARE PROGRESSIVES", pop:11, reform:0.70, equity:0.46, domestic:-0.19, private:-0.53 },
  FJP: { name:"FAITH & JUSTICE PROGRESSIVES", pop:10, reform:0.06, equity:0.31, domestic:0.16, private:-0.02 },
  HCP: { name:"HEALTH CARE PROTECTIONISTS", pop:8, reform:-0.37, equity:-0.29, domestic:0.33, private:-0.12 },
  GHI: { name:"GLOBAL HEALTH INSTITUTIONALISTS", pop:10, reform:0.32, equity:0.22, domestic:-0.46, private:0.14 },
  HAD: { name:"HEALTH ABUNDANCE DEMOCRATS", pop:8, reform:-0.24, equity:-0.43, domestic:0.31, private:0.33 },
  HCI: { name:"HEALTH CARE INCREMENTALISTS", pop:7, reform:-0.77, equity:-0.52, domestic:-0.01, private:0.40 },
};

export const GOP_AXES = [
  { key:"trust",    pos:"Trust",         neg:"Cynicism" },
  { key:"science",  pos:"Science",       neg:"Purity" },
  { key:"autonomy", pos:"Autonomy",      neg:"Public Health" },
  { key:"markets",  pos:"Markets",       neg:"Econ. Populism" },
];

export const DEM_AXES = [
  { key:"reform",   pos:"Reform",   neg:"Status Quo" },
  { key:"equity",   pos:"Justice",  neg:"Individualism" },
  { key:"domestic", pos:"Leader",   neg:"Global Focus" },
  { key:"private",  pos:"Industry", neg:"Public Sector" },
];
