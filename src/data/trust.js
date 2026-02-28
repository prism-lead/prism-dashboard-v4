// ═══════════════════════════════════════════════════════════════
// PRISM TEMPLATE — TRUST & BELIEFS DATA (STATIC)
// ═══════════════════════════════════════════════════════════════

export const TRUST_DATA = {
  GOVT:[4.26,4.07,4.04,3.57,4.07,4.16,3.32,3.77,3.65,3.07,4.52,5.12,3.78,4.85,5.02,5.66],
  CORP:[3.96,3.79,4.01,3.52,3.39,4.05,3.24,3.48,3.32,2.78,2.51,4.11,2.71,4.12,4.17,4.31],
  GAP:[0.30,0.28,0.03,0.05,0.68,0.11,0.08,0.29,0.33,0.29,2.01,1.01,1.07,0.73,0.85,1.35],
};
export const GAP_AVG = 0.5912;

export const ENTITIES = {
  PHARMA:{l:"Pharma",g:"corp",v:[3.71,3.57,3.94,3.11,3.07,3.67,2.75,3.28,2.88,2.30,2.06,4.02,2.30,4.16,4.09,4.54],a:3.34},
  INSURER:{l:"Insurers",g:"corp",v:[4.04,3.63,4.11,3.58,3.19,4.09,3.46,3.66,3.23,2.81,2.10,4.23,2.74,4.01,4.27,4.33],a:3.59},
  HOSPITAL:{l:"Hospitals",g:"corp",v:[5.20,4.74,5.02,4.58,4.31,4.64,4.00,4.39,4.42,3.76,4.30,5.22,3.96,5.14,5.11,5.76],a:4.66},
  PROVIDER:{l:"Providers",g:"corp",v:[5.07,4.99,5.10,4.70,4.46,4.38,4.18,4.25,4.41,3.58,4.43,5.27,4.00,5.19,5.33,5.94],a:4.71},
  FED:{l:"FDA / CDC",g:"govt",v:[4.21,3.94,3.92,3.24,3.91,4.02,2.92,3.60,3.24,2.63,4.29,4.92,3.64,4.75,4.94,5.35],a:3.97},
  NIH:{l:"NIH",g:"govt",v:[4.02,3.92,3.89,3.29,4.01,4.13,3.10,3.52,3.47,2.84,4.64,5.09,3.90,4.88,5.13,5.71],a:4.10},
  MEDICARE:{l:"Medicare",g:"govt",v:[4.80,4.61,4.63,4.27,4.36,4.42,3.96,4.16,4.23,3.66,4.58,5.36,3.86,5.10,5.13,6.01],a:4.57},
  ACADEMIA:{l:"Academia",g:"govt",v:[4.22,4.27,4.16,3.63,4.42,4.40,3.45,4.02,3.98,3.31,5.30,5.42,4.36,5.05,5.34,6.01],a:4.46},
  BIGAG:{l:"Big Ag",g:"o",v:[4.19,3.97,4.10,3.84,3.69,4.12,3.39,3.61,3.47,3.10,2.66,4.09,2.91,4.10,4.21,4.16],a:3.73},
  FARMER:{l:"Farmers",g:"o",v:[5.70,5.54,5.44,5.63,5.30,5.11,5.33,5.55,5.42,5.25,4.89,5.47,4.76,5.40,5.24,5.64],a:5.35},
  CONSUMERS:{l:"Consumers",g:"o",v:[4.42,4.15,4.17,4.12,4.05,4.32,4.03,4.16,4.16,3.82,3.84,4.64,3.68,4.42,4.48,4.56],a:4.19},
  PBM:{l:"PBMs",g:"o",v:[3.50,3.28,3.58,3.14,3.12,3.78,2.95,3.39,2.98,2.58,2.33,3.94,2.56,3.70,3.87,3.93],a:3.29},
  EPA:{l:"EPA",g:"o",v:[3.96,3.80,3.69,3.28,3.97,4.05,3.03,3.61,3.47,2.81,4.64,5.12,3.79,4.76,5.05,5.58],a:4.04},
  BIGTECH:{l:"Big Tech",g:"o",v:[3.43,3.51,3.66,3.04,3.16,3.95,3.00,2.93,3.04,2.36,2.01,3.63,2.28,3.92,3.83,3.69],a:3.22},
  BIOTECH:{l:"Biotech",g:"o",v:[3.92,3.85,3.99,3.61,3.44,4.24,3.41,3.47,3.54,3.08,3.17,4.27,2.98,4.16,4.20,4.44],a:3.74},
  BIGFOOD:{l:"Big Food",g:"o",v:[4.46,4.20,4.29,3.95,3.78,4.25,3.46,3.92,3.73,3.07,3.04,4.42,3.03,4.38,4.45,4.69],a:3.95},
};

// ─── BELIEFS BATTERY (top-3-box) ───
export const BELIEFS = [
  {v:"CHOICE",ty:"ATT",t:"Individuals should have more autonomy in making personal health decisions without government interference.",t3b:[0.8550,0.9170,0.9040,0.9080,0.8910,0.7460,0.9330,0.8130,0.9130,0.8970,0.8250,0.8810,0.7910,0.8190,0.7810,0.8010],a:0.8543},
  {v:"PROFIT",ty:"ATT",t:"Big pharma put profits over patients.",t3b:[0.8820,0.9190,0.7420,0.9070,0.9680,0.8760,0.9480,0.8150,0.9710,0.9220,0.9720,0.9300,0.9270,0.8450,0.7870,0.8710],a:0.8967},
  {v:"INDIVID_RESP",ty:"ATT",t:"People's health is mostly determined by their own choices, not their environment or circumstances.",t3b:[0.6270,0.6020,0.6690,0.7160,0.4760,0.7100,0.7700,0.6710,0.6120,0.6690,0.1740,0.3490,0.2230,0.4930,0.4050,0.2580],a:0.4688},
  {v:"IMMUNITY",ty:"ATT",t:"Natural immunity should count for more than vaccine mandates when setting public health policy.",t3b:[0.5620,0.5490,0.5520,0.7340,0.5090,0.5860,0.8620,0.7210,0.6490,0.8140,0.1180,0.3450,0.2350,0.3150,0.2040,0.1540],a:0.4285},
  {v:"ELITES",ty:"ATT",t:"Medical experts and scientists often ignore what ordinary people know from experience and should not dictate public policy health rules in future pandemics.",t3b:[0.6550,0.5390,0.5510,0.7240,0.5920,0.6870,0.8430,0.6370,0.6140,0.7730,0.1740,0.3710,0.2930,0.3900,0.3220,0.2110],a:0.4586},
  {v:"EQUITY_FUNDING",ty:"ATT",t:"The federal government should invest extra funds in communities of color that have suffered historic health injustices, even if it means higher taxes.",t3b:[0.3250,0.1580,0.1200,0.1230,0.1970,0.3460,0.2430,0.2900,0.1900,0.1960,0.9040,0.7280,0.4990,0.4220,0.5000,0.8080],a:0.4476},
  {v:"REFUSAL",ty:"ATT",t:"Patients have the right to refuse any medical intervention, even when experts say their decision could endanger public health.",t3b:[0.5270,0.6480,0.5890,0.7460,0.6420,0.6420,0.8450,0.7060,0.6490,0.7840,0.1680,0.5470,0.4210,0.4800,0.3560,0.2730],a:0.5162},
  {v:"RWE",ty:"ATT",t:"The FDA should allow conditional approvals that rely on real world evidence collected after a drug reaches the market, rather than insisting on full randomized trials first.",t3b:[0.6130,0.4870,0.5230,0.5590,0.4760,0.4950,0.6580,0.5510,0.5520,0.5620,0.3540,0.5530,0.3220,0.4850,0.4460,0.4040],a:0.4815},
  {v:"INFLUENCE",ty:"ATT",t:"Big corporations have too much influence over public health policies.",t3b:[0.8040,0.8440,0.7030,0.8600,0.9480,0.8460,0.9140,0.7530,0.8770,0.8720,0.9680,0.8920,0.8920,0.8080,0.7680,0.8830],a:0.8614},
  {v:"CLINICIAN_AUTONOMY",ty:"ATT",t:"Clinicians should never be forced by law to provide treatments that violate their religious or moral beliefs.",t3b:[0.8470,0.7630,0.7840,0.8790,0.6260,0.7400,0.8950,0.7650,0.7300,0.7670,0.1600,0.4830,0.4130,0.5170,0.4430,0.2190],a:0.558},
  {v:"DATA_PORT",ty:"ATT",t:"Health care companies should be required to let patients move their medical records and insurance information easily to any doctor, app, or service they want.",t3b:[0.9640,0.9690,0.9710,0.9600,0.9670,0.8130,0.9520,0.9580,0.9570,0.9420,0.9790,0.9780,0.9370,0.9280,0.9370,0.9820],a:0.9575},
  {v:"PRO_MARRIAGE",ty:"ATT",t:"Government should offer financial incentives for married couples to have and raise children in stable families.",t3b:[0.4720,0.3070,0.3780,0.4550,0.3280,0.4400,0.5750,0.4840,0.3360,0.5200,0.2140,0.4410,0.2740,0.3830,0.2430,0.2410],a:0.356},
  {v:"MED_LIBERTY",ty:"ATT",t:"Mandating any medical treatment violates personal liberty.",t3b:[0.6290,0.6900,0.7070,0.8330,0.7640,0.6060,0.9210,0.6960,0.8420,0.8390,0.2640,0.5520,0.5010,0.4360,0.3710,0.2950],a:0.5718},
  {v:"PHARMA_IP",ty:"ATT",t:"Pharma companies abuse the patent system to prevent competition and delay generic drugs.",t3b:[0.7420,0.7600,0.6510,0.7870,0.9170,0.7570,0.8070,0.6630,0.8890,0.8230,0.9080,0.7540,0.8370,0.6970,0.7160,0.7680],a:0.7839},
  {v:"GENDER",ty:"ATT",t:"Medical treatments that permanently alter a minor's sex characteristics should be restricted until the patient reaches adulthood.",t3b:[0.9300,0.9510,0.9290,0.9650,0.9050,0.9030,0.9530,0.8700,0.9650,0.9620,0.4140,0.7130,0.7660,0.7950,0.7570,0.4110],a:0.7695},
  {v:"FLUORIDE",ty:"ATT",t:"Fluoride should be removed from tap water.",t3b:[0.3440,0.2830,0.2610,0.5110,0.3100,0.4470,0.6670,0.5190,0.4550,0.6330,0.0840,0.2480,0.1970,0.2210,0.1770,0.0900],a:0.2933},
  {v:"BUILD_THAT",ty:"ATT",t:"Most breakthroughs in medicines are not made by pharmaceutical companies but are by scientists at NIH and universities.",t3b:[0.4200,0.3810,0.3350,0.3440,0.5370,0.4610,0.4560,0.4650,0.5180,0.5390,0.9000,0.7900,0.6830,0.6440,0.5730,0.8140],a:0.6025},
  {v:"WOKE",ty:"ATT",t:"Health care companies focus too much on woke capitalism issues like \"ESG\" and \"DEI\".",t3b:[0.7660,0.7290,0.7690,0.8230,0.6940,0.5400,0.8050,0.6430,0.8020,0.8120,0.0650,0.2630,0.2420,0.3970,0.2950,0.1220],a:0.4695},
  {v:"RED_MEAT",ty:"ATT",t:"Red meat is healthier than plant-based protein for most people.",t3b:[0.5380,0.5020,0.5310,0.6820,0.4620,0.5030,0.7260,0.6210,0.6150,0.7290,0.1300,0.3030,0.2470,0.3180,0.3120,0.1750],a:0.408},
  {v:"BODY_SANCTITY",ty:"ATT",t:"I would feel deeply uncomfortable if medical research used human body parts in ways I consider disrespectful.",t3b:[0.7370,0.6370,0.6400,0.7870,0.6950,0.6840,0.8490,0.7270,0.7400,0.7460,0.3140,0.7110,0.5680,0.5830,0.4790,0.4720],a:0.6129},
  {v:"AI_REG",ty:"ATT",t:"Artificial intelligence systems that diagnose disease ought to be regulated with the same strict standards as traditional medical devices.",t3b:[0.8650,0.8370,0.8710,0.9300,0.9350,0.8210,0.9180,0.7300,0.9170,0.8950,0.9300,0.9330,0.8490,0.8650,0.8660,0.9370],a:0.8928},
  {v:"MRNA",ty:"ATT",t:"The science behind new therapies, like mRNA used in the Covid vaccines, has not been fully tested or proven safe.",t3b:[0.5760,0.5510,0.5400,0.7600,0.5620,0.5590,0.8890,0.6880,0.7470,0.8030,0.1060,0.3000,0.3060,0.3090,0.2040,0.1170],a:0.4317},
  {v:"NATURAL_ORDER",ty:"ATT",t:"Even if no one is harmed, practices that go against the natural order of the human body are morally wrong.",t3b:[0.6830,0.5510,0.6420,0.7670,0.5140,0.6490,0.8250,0.6920,0.6320,0.7210,0.1290,0.4050,0.3730,0.4270,0.2860,0.1830],a:0.4684},
  {v:"VAX_SAFETY",ty:"ATT",t:"Vaccines may do more harm than good, potentially causing other health problems.",t3b:[0.2930,0.1890,0.2620,0.4540,0.2440,0.4080,0.6630,0.4940,0.4690,0.6780,0.0740,0.2150,0.1320,0.2330,0.1380,0.0800],a:0.2676},
  {v:"OPIOIDS",ty:"ATT",t:"Big pharma is primarily responsible for the opioid epidemic.",t3b:[0.4670,0.5440,0.4200,0.5840,0.7320,0.5650,0.7190,0.5470,0.7830,0.7630,0.9190,0.7200,0.7590,0.5780,0.5510,0.7050],a:0.6712},
  {v:"EXPERIMENTAL_RX",ty:"ATT",t:"Terminally ill patients should have automatic access to experimental drugs once Phase I testing shows they are safe.",t3b:[0.9080,0.8990,0.9150,0.9190,0.9460,0.7890,0.8910,0.8600,0.8900,0.8650,0.9580,0.9150,0.8360,0.8850,0.7710,0.9470],a:0.8965},
  {v:"CLINICAL_TRIALS",ty:"ATT",t:"Clinical trial research gets hidden and misrepresented regularly.",t3b:[0.5670,0.5420,0.5250,0.6670,0.6560,0.7140,0.8100,0.6310,0.6790,0.7740,0.3930,0.4880,0.5160,0.3770,0.3460,0.2940],a:0.5176},
  {v:"NATUROPATHIC",ty:"ATT",t:"Herbal and naturopathic remedies can be just as effective as pharmaceuticals for many long-term illnesses.",t3b:[0.4450,0.4110,0.3660,0.5490,0.4840,0.5260,0.7610,0.6760,0.6050,0.7530,0.2580,0.4320,0.4100,0.4460,0.2900,0.2220],a:0.4367},
  {v:"SDOH",ty:"ATT",t:"Addressing housing, food and other social drivers of health should receive higher priority than paying hospitals for new high-tech procedures.",t3b:[0.4430,0.4190,0.3530,0.4490,0.5960,0.6200,0.7170,0.6110,0.6590,0.5940,0.8330,0.7920,0.7140,0.6040,0.4980,0.6900],a:0.6211},
  // Policy items
  {v:"UNION_PLAN",ty:"POL",t:"Union health plans that workers fought for should be protected.",t3b:[0.7110,0.6140,0.5840,0.5920,0.7600,0.7120,0.6620,0.6590,0.6630,0.6330,0.9560,0.9510,0.8610,0.7810,0.7570,0.9600],a:0.7744},
  {v:"MED_NEGOT",ty:"POL",t:"Medicare should negotiate prescription drug prices.",t3b:[0.7280,0.6780,0.6070,0.6590,0.7100,0.6750,0.7280,0.5920,0.7160,0.6380,0.8510,0.7790,0.6850,0.7760,0.6630,0.8140],a:0.7239},
  {v:"WORK_REQ",ty:"POL",t:"Medicaid should require able-bodied recipients to work.",t3b:[0.9050,0.8750,0.8600,0.9040,0.8140,0.6750,0.8840,0.7220,0.8490,0.7880,0.3580,0.5760,0.5640,0.6650,0.6210,0.4090],a:0.6693},
  {v:"MANDATE_POLICY",ty:"POL",t:"Public health rules for future pandemics should rely on natural immunity status rather than vaccine mandates.",t3b:[0.5030,0.4670,0.4690,0.6440,0.3930,0.4760,0.7850,0.5830,0.5650,0.6860,0.1210,0.2620,0.1870,0.2890,0.1920,0.1320],a:0.3676},
  {v:"NIH_FUND",ty:"POL",t:"Budgets for NIH and CDC should be increased, not cut.",t3b:[0.3750,0.2980,0.2750,0.1800,0.3850,0.4470,0.2370,0.3670,0.2860,0.1680,0.9370,0.8230,0.6600,0.7060,0.7710,0.9550],a:0.5668},
  {v:"MA",ty:"POL",t:"Medicare Advantage should be protected from funding cuts.",t3b:[0.7150,0.6860,0.6810,0.6360,0.7210,0.6430,0.7430,0.7570,0.7330,0.7080,0.9380,0.9130,0.8260,0.7970,0.8240,0.9360],a:0.7947},
  {v:"EARLY_ACCESS",ty:"POL",t:"Terminally ill patients should get automatic access to experimental drugs once Phase I safety is shown.",t3b:[0.8840,0.8600,0.8840,0.8880,0.9030,0.7940,0.8670,0.8860,0.8640,0.8280,0.9710,0.8950,0.7730,0.8570,0.7400,0.9230],a:0.8718},
  {v:"DATA_OWNERSHIP",ty:"POL",t:"Patients should own and be able to profit from their own personal health data.",t3b:[0.6570,0.6590,0.6530,0.6350,0.6550,0.5850,0.7360,0.6640,0.6400,0.6580,0.8300,0.7600,0.6660,0.6890,0.6500,0.7850],a:0.7014},
  {v:"LONGEVITY_POLICY",ty:"POL",t:"Public policy should support research aimed at extending the human lifespan beyond 120 years.",t3b:[0.2750,0.2010,0.2230,0.2110,0.1950,0.4450,0.3390,0.3950,0.2140,0.2030,0.2990,0.4610,0.2340,0.3780,0.2230,0.3810],a:0.2953},
  {v:"GMO_LABEL",ty:"POL",t:"Foods containing genetically modified ingredients should carry warning labels.",t3b:[0.8120,0.7760,0.7500,0.8890,0.7830,0.8060,0.9330,0.8260,0.9030,0.8730,0.8530,0.9090,0.8470,0.8170,0.7910,0.8370],a:0.8435},
  {v:"WHO_POLICY",ty:"POL",t:"The United States should leave the World Health Organization if it threatens national sovereignty over health policy.",t3b:[0.6490,0.6090,0.6650,0.7940,0.5200,0.4760,0.8380,0.6540,0.6280,0.7440,0.0760,0.2560,0.1640,0.2700,0.2110,0.1280],a:0.4121},
  {v:"HEALTH_DISC",ty:"POL",t:"Health insurance should cost less for people who take steps to stay healthy.",t3b:[0.8080,0.8720,0.8010,0.7970,0.7350,0.7050,0.8210,0.7900,0.8660,0.7800,0.8150,0.8180,0.7170,0.7860,0.7810,0.7590],a:0.7944},
  {v:"MEDICAID",ty:"POL",t:"Medicaid should be protected from budget cuts.",t3b:[0.6180,0.5200,0.5180,0.4960,0.7170,0.6540,0.5300,0.7220,0.6340,0.6580,0.9890,0.9780,0.8540,0.8730,0.8240,0.9770],a:0.7661},
  {v:"RURAL_SUBSIDY",ty:"POL",t:"The federal government should subsidize rural hospitals, even if that increases overall spending.",t3b:[0.5830,0.4290,0.4800,0.3600,0.5510,0.4250,0.3860,0.4470,0.4670,0.3430,0.9310,0.8260,0.6650,0.7070,0.7000,0.8970],a:0.63},
  {v:"GENDER_CARE",ty:"POL",t:"Insurance should be required to cover gender-affirming care.",t3b:[0.1850,0.1720,0.0930,0.0690,0.0940,0.3190,0.1750,0.2430,0.0870,0.0950,0.8440,0.5820,0.1920,0.3170,0.2660,0.7660],a:0.3479},
  {v:"NATAL_POLICY",ty:"POL",t:"Government should offer tax bonuses or cash allowances to married couples who have children.",t3b:[0.4870,0.3810,0.3590,0.4570,0.3910,0.4540,0.5530,0.5080,0.3890,0.4990,0.3690,0.5430,0.3120,0.4010,0.2840,0.3480],a:0.4095},
  {v:"IMMIG",ty:"POL",t:"Immigration policy should protect American health care jobs and workers.",t3b:[0.7260,0.7150,0.8060,0.7800,0.7650,0.5470,0.8060,0.6590,0.8230,0.7880,0.7960,0.8260,0.6540,0.7900,0.7090,0.8290],a:0.7684},
  {v:"MENTAL1",ty:"POL",t:"The government should expand funding for community mental health programs.",t3b:[0.4580,0.3080,0.3060,0.3100,0.4140,0.4360,0.3310,0.3760,0.3970,0.2900,0.9490,0.8900,0.6650,0.6730,0.6150,0.9300],a:0.5933},
  {v:"MENTAL2",ty:"POL",t:"Local governments should be allowed to mandate treatment for homeless individuals with severe mental illness or addiction.",t3b:[0.6110,0.5110,0.4960,0.5070,0.5890,0.5260,0.6400,0.5590,0.5550,0.4890,0.7670,0.7710,0.5670,0.7010,0.5940,0.7740],a:0.6284},
  {v:"M4A",ty:"POL",t:"Health insurance should be provided through a single national health insurance system run by the government.",t3b:[0.2390,0.2230,0.1730,0.1440,0.2860,0.4700,0.2680,0.4060,0.2680,0.2440,0.8150,0.5920,0.4020,0.5070,0.3580,0.6670],a:0.4242},
];

// ─── CURATED DISCRIMINATING ITEMS PER SEGMENT ───
export const SEGMENT_BELIEFS = {
  TSP: ["RURAL_SUBSIDY","OPIOIDS","WORK_REQ","CLINICIAN_AUTONOMY"],
  CEC: ["EQUITY_FUNDING","MEDICAID","VAX_SAFETY","HEALTH_DISC"],
  TC:  ["WOKE","GENDER","PROFIT","OPIOIDS"],
  WE:  ["WHO_POLICY","MANDATE_POLICY","CLINICIAN_AUTONOMY","IMMIG"],
  PP:  ["PROFIT","PHARMA_IP","INFLUENCE","OPIOIDS"],
  HF:  ["AI_REG","DATA_PORT","GENDER_CARE","LONGEVITY_POLICY"],
  PFF: ["RED_MEAT","MANDATE_POLICY","FLUORIDE","ELITES"],
  HHN: ["IMMUNITY","NATUROPATHIC","REFUSAL","MRNA"],
  MFL: ["MED_LIBERTY","GENDER_CARE","EQUITY_FUNDING","NIH_FUND"],
  VS:  ["VAX_SAFETY","MANDATE_POLICY","ELITES","MRNA"],
  UCP: ["GENDER_CARE","MEDICAID","MENTAL1","INFLUENCE"],
  FJP: ["EQUITY_FUNDING","NATAL_POLICY","VAX_SAFETY","SDOH"],
  HCP: ["PROFIT","UNION_PLAN","BUILD_THAT","OPIOIDS"],
  HAD: ["LONGEVITY_POLICY","INDIVID_RESP","PROFIT","AI_REG"],
  HCI: ["NIH_FUND","MRNA","EXPERIMENTAL_RX","M4A"],
  GHI: ["WOKE","WHO_POLICY","ELITES","GENDER_CARE"],
};

export const BELIEFS_BY_VAR = {};
BELIEFS.forEach(b => { BELIEFS_BY_VAR[b.v] = b; });

export const NICE_NAMES = {
  CHOICE:"Health Autonomy", PROFIT:"Pharma Profits Over Patients", INDIVID_RESP:"Individual Responsibility",
  IMMUNITY:"Natural Immunity", ELITES:"Anti-Expert Sentiment", EQUITY_FUNDING:"Health Equity Funding",
  REFUSAL:"Right to Refuse Treatment", INFLUENCE:"Corporate Influence", CLINICIAN_AUTONOMY:"Clinician Conscience",
  DATA_PORT:"Data Portability", MED_LIBERTY:"Medical Liberty", GENDER:"Minor Gender Restrictions",
  WOKE:"Anti-Woke / ESG", MRNA:"mRNA Safety Doubts", FLUORIDE:"Fluoride Removal",
  VAX_SAFETY:"Vaccine Safety Doubts", OPIOIDS:"Pharma Opioid Blame", RWE:"Real-World Evidence",
  BODY_SANCTITY:"Body Sanctity", AI_REG:"AI Regulation", NATURAL_ORDER:"Natural Order",
  BUILD_THAT:"NIH Built Breakthroughs", PRO_MARRIAGE:"Pro-Marriage Incentives", PHARMA_IP:"Patent Abuse",
  RED_MEAT:"Red Meat Healthier", CLINICAL_TRIALS:"Clinical Trial Distrust", NATUROPATHIC:"Naturopathic Remedies",
  SDOH:"Social Determinants", EXPERIMENTAL_RX:"Right to Try",
  M4A:"Medicare for All", WORK_REQ:"Work Requirements", NIH_FUND:"NIH / CDC Funding",
  ESI_REQ:"Employer Insurance Mandate", PUBLIC_OPTION:"Public Option", WHO_POLICY:"Leave the WHO",
  MEDICAID:"Protect Medicaid", GENDER_CARE:"Gender-Affirming Coverage", GMO_LABEL:"GMO Labeling",
  MENTAL1:"Community Mental Health Funding", MANDATE_POLICY:"Pandemic Immunity Policy",
  UNION_PLAN:"Protect Union Plans", MED_NEGOT:"Medicare Drug Negotiation",
  ANTI_ESI:"End Employer Insurance", MA:"Protect Medicare Advantage", EARLY_ACCESS:"Terminally Ill Access",
  DATA_OWNERSHIP:"Health Data Ownership", LONGEVITY_POLICY:"Longevity Research", HEALTH_DISC:"Healthy Behavior Discount",
  RURAL_SUBSIDY:"Rural Hospital Subsidies", NATAL_POLICY:"Pro-Natalist Policy", IMMIG:"Immigration Health Jobs",
  MENTAL2:"Mandated Mental Health Treatment",
};

// ─── INSURANCE REFORM PREFERENCES ───
export const INS_REFORM = [
  {l:"Single Payer",   v:[0.151,0.195,0.133,0.126,0.255,0.424,0.209,0.360,0.205,0.195,0.592,0.443,0.346,0.402,0.299,0.520], score:1, color:"#a78bfa"},
  {l:"Public Option",  v:[0.254,0.161,0.104,0.112,0.180,0.137,0.182,0.151,0.229,0.153,0.355,0.357,0.305,0.301,0.230,0.341], score:2, color:"#22d3ee"},
  {l:"ESI Mandatory",  v:[0.338,0.385,0.441,0.488,0.376,0.149,0.399,0.233,0.373,0.353,0.049,0.135,0.195,0.138,0.349,0.108], score:3, color:"#d4915e"},
  {l:"Status Quo",     v:[0.257,0.258,0.322,0.275,0.189,0.289,0.210,0.256,0.194,0.299,0.004,0.065,0.155,0.160,0.122,0.031], score:4, color:"#8194a8"},
];
