
// ─── SEGMENTS ──────────────────────────────────────────────────────────────
export const SEGMENTS = [
  {
    id: 1,
    code: "TSP",
    name: "TRUST THE SCIENCE PRAGMATISTS",
    party: "GOP",
    pop: 2,
    tier: 3,
    roi: 0.9,
    highRoi: 20,
    supporters: 62,
    activation: 23,
    influence: 23,
    persuadability: [20, 0, 27, 17, 37],
    demo: {
      male: "53%",
      medAge: 54,
      nonwhite: "12%",
      hhi: "$99K",
      college: "39%",
      rural: "31%",
      cenDiv: "West South Central",
      cenPct: "29%",
      pharmaTrust: 3.71,
      corpTrust: 3.98,
      govtTrust: 4.26,
      m4a: "24%",
      vaxAvoid: "18%",
    },
    persona: {
      quote:
        "Free markets work best, but I defer to FDA and CDC experts on safety and innovation. I want solutions to improving access for rural America.",
      believe:
        "They believe America must remain a leader in science and medicine, and that patients --especially those in rural areas --deserve earlier access to innovation. They see rural healthcare infrastructure unraveling in front of them and view government support as essential to keeping hospitals alive.",
      want: "They want rural subsidies to stabilize hospitals and prevent service loss in their communities. They want faster FDA approvals, expanded “right-to-try” access, and strong NIH funding to drive research. They oppose sweeping federal takeovers but accept government’s role as a funder, enabler, and guarantor of access in fragile rural systems.",
      doWhat:
        "They vaccinate more than most GOP peers, trust hospitals and providers, and consistently elevate rural hospital access as a priority. They participate in policy debates by advocating for reforms that balance competition with public investment in infrastructure and science.",
      whoAre:
        "Median age ~54, predominantly white, male-leaning, with household incomes near $100k. They are the most rural cluster, anchored in communities facing healthcare decline. They are less religious than Traditional Conservatives, pragmatic in tone, and loyal Republicans --but not ideologically anti-government.",
    },
  },
  {
    id: 2,
    code: "CEC",
    name: "CONSUMER EMPOWERMENT CHAMPIONS",
    party: "GOP",
    pop: 7,
    tier: 1,
    roi: 1.07,
    highRoi: 28,
    supporters: 60,
    activation: 12,
    influence: 7,
    persuadability: [14, 13, 43, 2, 28],
    demo: {
      male: "61%",
      medAge: 58,
      nonwhite: "8%",
      hhi: "$105K",
      college: "44%",
      rural: "14%",
      cenDiv: "South Atlantic",
      cenPct: "25%",
      pharmaTrust: 3.57,
      corpTrust: 3.79,
      govtTrust: 4.07,
      m4a: "22%",
      vaxAvoid: "18%",
    },
    persona: {
      quote:
        "Prices are too high and we need reform. We don't need more government programs—we need to empower consumers with transparency and choice.",
      believe:
        "They believe America’s health care system is broken, riddled with middlemen, hidden costs, and corporate profiteering,  but that government expansion would only make it worse. They are convinced that competition, transparency, and consumer empowerment are the real answers. They think patients should be able to shop for care the way they shop for anything else.",
      want: "They want health care reform not by handing control to Washington, but by forcing insurers and providers to compete, publish prices, and give consumers real choices. They support employer-based coverage, portability of medical records, and “right to try” policies that give patients leverage. Their demand is for a system that works for consumers rather than for corporations or bureaucracies.",
      doWhat:
        "They are less likely than other Republicans to avoid vaccines and more likely to trust hospitals and providers. They lean toward mainstream care, but insist on transparency and accountability. They gravitate toward Fox and the Wall Street Journal, and their civic participation tends to come through voting and voicing reform-minded skepticism, not through lifestyle movements like wellness evangelism or anti-vax activism.",
      whoAre:
        "Older (median age ~58), affluent (household income ~$105k), white, married, and more male-skewed. They are suburban and stable-rural, but not economically precarious. They are long-standing Republicans who see themselves as fixers rather than burn-it-down populists. Angry at the system, but constructive in how they want to change it.",
    },
  },
  {
    id: 3,
    code: "TC",
    name: "TRADITIONAL CONSERVATIVES",
    party: "GOP",
    pop: 6,
    tier: 1,
    roi: 1.13,
    highRoi: 35,
    supporters: 70,
    activation: 26,
    influence: 18,
    persuadability: [27, 9, 23, 11, 31],
    demo: {
      male: "68%",
      medAge: 58,
      nonwhite: "12%",
      hhi: "$113K",
      college: "64%",
      rural: "11%",
      cenDiv: "East North Central",
      cenPct: "20%",
      pharmaTrust: 3.94,
      corpTrust: 4.01,
      govtTrust: 4.04,
      m4a: "17%",
      vaxAvoid: "29%",
    },
    persona: {
      quote:
        "A strong America means limited government that defends the family, while ensuring healthcare is driven by the free market—not ideology.",
      believe:
        "They believe America works best when government is limited, families are strong, and individuals take responsibility for themselves and their communities. They see cultural change on the left --particularly around gender, family, and social norms --as having spilled into healthcare and distorted its priorities.",
      want: "They want healthcare policy to reinforce responsibility and stability, not what they perceive as “woke” experiments. They favor employer-based coverage, competition, and private solutions, while backing conscience protections for providers and opposing mandates they see as government overreach.",
      doWhat:
        "They reliably back Republican leaders and advocacy groups that fight cultural progressivism in healthcare. They elevate issues such as restrictions on gender-transition care for minors, limits on abortion services, and opposition to ESG/DEI frameworks in health companies. They also support incremental reforms that strengthen transparency and accountability without dismantling existing insurance structures.",
      whoAre:
        "Median age ~58, predominantly white, married, and religiously observant (high evangelical and Catholic presence). Financially stable but not affluent, clustered in rural and exurban areas. They are consistent Republican identifiers who see themselves as cultural guardians as much as policy advocates.",
    },
  },
  {
    id: 4,
    code: "WE",
    name: "WELLNESS EVANGELISTS",
    party: "GOP",
    pop: 9,
    tier: 1,
    roi: 1.08,
    highRoi: 24,
    supporters: 51,
    activation: 13,
    influence: 11,
    persuadability: [14, 10, 47, 11, 19],
    demo: {
      male: "54%",
      medAge: 59,
      nonwhite: "11%",
      hhi: "$98K",
      college: "52%",
      rural: "17%",
      cenDiv: "South Atlantic",
      cenPct: "23%",
      pharmaTrust: 3.11,
      corpTrust: 3.52,
      govtTrust: 3.57,
      m4a: "14%",
      vaxAvoid: "29%",
    },
    persona: {
      quote:
        "I believe in small government that defends traditional values and makes America healthy again through clean food and natural living.",
      believe:
        "They believe America has been weakened by corrupt elites—corporate and government elites— who profit from dependency and sickness. They see health as something earned through discipline and responsibility, not pills or handouts. Their philosophy is wellness as patriotism: if Americans reclaim their health, families, and responsibilities, the nation itself will be strong again.",
      want: "They want to break the power of corporations and government institutions that they see as profiting from decline. They demand accountability for Big Pharma, recognition of natural medicine, and policies that reward responsibility over dependency. They strongly support Medicaid work requirements and oppose expansions they see as enabling dependency. They want policy that reinforces their core values: health, self-reliance, family, and freedom.",
      doWhat:
        "Many are self-employed, homeschool their children, and live their wellness values daily: organic food, supplements, home remedies, and fitness. Politically, they are deeply engaged in MAGA networks, participating in rallies, Facebook groups, and alternative media. They consume a mix of populist politics (Bannon, Daily Wire) and wellness/medical freedom podcasts.",
      whoAre:
        "Largest segment in the MAHA cluster (~20%), porous into neighboring MAGA identities. Middle-aged, modest to middle income, suburban or exurban, often mothers who homeschool their children. They distrust schools, hospitals, and mainstream culture. Politically, they see Trump and MAGA as a movement to defend families from elites who profit by keeping Americans weak and dependent.",
    },
  },
  {
    id: 5,
    code: "PP",
    name: "PRICE POPULISTS",
    party: "GOP",
    pop: 3,
    tier: 2,
    roi: 1.02,
    highRoi: 27,
    supporters: 45,
    activation: 7,
    influence: 5,
    persuadability: [12, 15, 43, 10, 21],
    demo: {
      male: "39%",
      medAge: 54,
      nonwhite: "12%",
      hhi: "$86K",
      college: "52%",
      rural: "10%",
      cenDiv: "Mountain",
      cenPct: "13%",
      pharmaTrust: 3.07,
      corpTrust: 3.39,
      govtTrust: 4.07,
      m4a: "29%",
      vaxAvoid: "28%",
    },
    persona: {
      quote:
        "Drug and hospital prices are crushing people. I don't care who fixes it, or how—just bring costs down.",
      believe:
        "They believe the healthcare system is broken because of unchecked corporate greed. High drug and hospital prices are crushing ordinary families, and corporations are profiting at the expense of workers. Unlike free-market conservatives, they don’t care who fixes it—government or private actors—so long as someone brings costs down and defends working people.",
      want: "They want aggressive action to rein in costs. That means cracking down on drug pricing, protecting union health plans, supporting rural hospitals, and resisting privatization schemes that threaten benefits. They are suspicious of both Big Pharma and hospital corporations, but they see government intervention as legitimate if it delivers relief to their families and communities.",
      doWhat:
        "They are politically active: leading union locals, attending rallies, calling into radio shows, and mobilizing coworkers. Many were lifelong Democrats—loyal to union traditions—and proudly voted for Obama. But after 2008, disillusionment set in as jobs vanished, costs rose, and Democrats looked “too close to Wall Street.” They gravitated toward Trump and MAGA, drawn by his populist attacks on elites.",
      whoAre:
        "Median age mid-50s, often union households, white but with a notable Hispanic presence. Economically less secure than other GOP groups, concentrated in rural and small-town America. Many work in trades or service industries. Religiosity is present but not central. Politically, they are hardline populists: strong Trump supporters because he speaks their anger, but their loyalty is issue-based—they will turn on leaders if they fail to deliver against corporate interests.",
    },
  },
  {
    id: 6,
    code: "HF",
    name: "HEALTH FUTURISTS",
    party: "GOP",
    pop: 2,
    tier: 1,
    roi: 0.88,
    highRoi: 17,
    supporters: 56,
    activation: 19,
    influence: 29,
    persuadability: [14, 3, 19, 17, 47],
    demo: {
      male: "61%",
      medAge: 46,
      nonwhite: "28%",
      hhi: "$81K",
      college: "52%",
      rural: "4%",
      cenDiv: "Pacific",
      cenPct: "17%",
      pharmaTrust: 3.67,
      corpTrust: 4.05,
      govtTrust: 4.16,
      m4a: "47%",
      vaxAvoid: "30%",
    },
    persona: {
      quote:
        "Gene therapies, AI, and big data can revolutionize health. Let's embrace innovation boldly—so everyone benefits.",
      believe:
        "They believe America’s survival depends on leading the next wave of science and technology. For them, innovation is national security: whoever controls AI, gene editing, and biomedical breakthroughs will control the world. They see regulation, bureaucracy, and global treaties as obstacles designed to slow America down while rivals like China race ahead. They are deeply distrustful of “legacy institutions” (NIH, FDA, WHO) but not hostile to science itself—they see science as the battlefield of the 21st century.",
      want: "They want government to unleash innovation—to fuel bold R&D, cut red tape, and give patients and entrepreneurs more freedom to experiment. They want right-to-try expanded, FDA approvals accelerated, and NIH money steered into frontier technologies. They want America to win the innovation race against China and globalists, even if that means breaking old rules.",
      doWhat:
        "They are highly active online—podcast listeners, Substack subscribers, Twitter/X junkies. They follow biohackers, futurist thinkers, MAGA-friendly technologists, and contrarian doctors. They invest in crypto, wear continuous glucose monitors, take nootropics, and talk about healthspan as much as lifespan. Politically, they are MAGA-adjacent but not traditional conservatives: they’re impatient with “culture war nostalgia” and more animated by a sense of destiny—America as the world’s techno-frontier.",
      whoAre:
        "Median age late 30s to early 40s, male-skewed, higher income, urban/suburban professionals and entrepreneurs. Some are former libertarians drawn into MAGA because Trump’s anti-bureaucratic, anti-China rhetoric aligned with their worldview. They are multi-layered because they are both fiercely individualistic (personal optimization, biohacking) and intensely nationalistic (America must dominate the future of science).",
    },
  },
  {
    id: 7,
    code: "PFF",
    name: "PALEO FREEDOM FIGHTERS",
    party: "GOP",
    pop: 4,
    tier: 2,
    roi: 0.95,
    highRoi: 20,
    supporters: 33,
    activation: 14,
    influence: 17,
    persuadability: [15, 4, 38, 10, 33],
    demo: {
      male: "48%",
      medAge: 55,
      nonwhite: "16%",
      hhi: "$90K",
      college: "39%",
      rural: "16%",
      cenDiv: "Pacific",
      cenPct: "16%",
      pharmaTrust: 2.75,
      corpTrust: 3.24,
      govtTrust: 3.32,
      m4a: "27%",
      vaxAvoid: "41%",
    },
    persona: {
      quote:
        "Don't trust the system. Don't submit to mandates. Don't believe mainstream science. Do your own research.",
      believe:
        "They believe the American people are being intentionally misled about health — poisoned by bad science, processed food, and corrupted institutions. Strength and truth come from rejecting elites, doing your own research and living by ancestral wisdom: meat, discipline, resilience. They are not shy about it: they see themselves as truth-tellers in a world of followers.",
      want: "They want freedom to live outside the system — to eat clean, train hard, reject mandates — without interference. They want leaders who will expose lies, call out bigc orporations, and affirm their conviction that elites profit by keeping Americans weak. They are suspicious of most public health and international institutions—advocating for withdrawal from the WHO. They also support pro-natal policy.",
      doWhat:
        "They consume and amplify populist wellness and political media. They are voracious content sharers on Facebook, Telegram, X. They listen to Joe Rogan, Shawn Baker, Paul Saladino, and Jordan Peterson, then repeat those arguments at local gyms, in homeschooling groups, or online. They watch Tucker clips, Daily Wire podcasts, Bongino— and mix them with fluoride warnings or carnivore diet tips. They aren’t passive voters; they’re media multipliers.",
      whoAre:
        "More female than male, less white than many GOP segments, with a notable Hispanic presence. They atr in midlife, suburban/exurban, and middle-income. Politically MAGA, but in a sharper, more conspiratorial register than Wellness Evangelists. They are the biggest consumers and producers of new media and are top influencers among the MAHA groups — not just listeners, but evangelists spreading content through their networks.",
    },
  },
  {
    id: 8,
    code: "HHN",
    name: "HOLISTIC HEALTH NATURALISTS",
    party: "GOP",
    pop: 3,
    tier: 1,
    roi: 1.05,
    highRoi: 25,
    supporters: 63,
    activation: 29,
    influence: 24,
    persuadability: [22, 3, 34, 11, 31],
    demo: {
      male: "46%",
      medAge: 44,
      nonwhite: "17%",
      hhi: "$73K",
      college: "32%",
      rural: "17%",
      cenDiv: "South Atlantic",
      cenPct: "29%",
      pharmaTrust: 3.28,
      corpTrust: 3.48,
      govtTrust: 3.77,
      m4a: "41%",
      vaxAvoid: "42%",
    },
    persona: {
      quote:
        "Modern medicine ignores the whole person and natural order. Natural and alternative therapies deserve equal respect and coverage.",
      believe:
        "They believe modern medicine ignores the whole person. True health comes from nature—clean food, herbs, supplements, and spiritual balance. They see the pharmaceutical industry as corrupt and oriented toward profit, not healing. They are skeptical of vaccines and mainstream dietary guidelines, convinced these systems don’t respect natural remedies or wellness traditions.",
      want: "They want healthcare and society to recognize and respect natural and alternative therapies. They want more transparency about chemicals, GMOs, and processed foods. They want freedom to choose natural approaches without being shamed or coerced into mainstream treatments.",
      doWhat:
        "They grow their own food, shop organic, practice yoga and meditation, trade herbal remedies, and build online wellness communities. Politically, they are newcomers to the GOP coalition—some voting Republican for the first time in 2016 or even 2020. They were drawn in by RFK Jr.’s crusades against vaccines and corporate medicine, and then pulled deeper into MAGA networks where anti-establishment energy aligns with their lifestyle ethos.",
      whoAre:
        "More female than male, younger than Wellness Evangelists, and more racially diverse. Median age early-to-mid 40s. Urban and suburban as much as exurban. Many are ex-Democrats or independents who once marched for climate justice or food purity, but now see Democrats as captured by corporate and “woke” elites. They are porous: some still vote left on environmental issues, but many are drifting right, pulled in through vaccine skepticism, medical freedom, and MAGA populism.",
    },
  },
  {
    id: 9,
    code: "MFL",
    name: "MEDICAL FREEDOM LIBERTARIANS",
    party: "GOP",
    pop: 5,
    tier: 3,
    roi: 1.07,
    highRoi: 26,
    supporters: 53,
    activation: 8,
    influence: 11,
    persuadability: [19, 7, 38, 11, 25],
    demo: {
      male: "46%",
      medAge: 55,
      nonwhite: "12%",
      hhi: "$96K",
      college: "36%",
      rural: "9%",
      cenDiv: "South Atlantic",
      cenPct: "27%",
      pharmaTrust: 2.88,
      corpTrust: 3.32,
      govtTrust: 3.65,
      m4a: "26%",
      vaxAvoid: "35%",
    },
    persona: {
      quote:
        "My body, my choice—whether mandates, supplements, or experimental drugs, I want minimal government involvement.",
      believe:
        "They believe health is about liberty and personal responsibility. COVID and vaccine mandates radicalized them, but they are reverting to a long-standing libertarian instinct: government should butt out of private health choices. Their philosophy is civil libertarian, not economic libertarian. They aren’t free-market crusaders like the Reformers, nor conspiracy-driven like the Absolutists. Instead, they believe patients—not corporations or bureaucrats—should decide what goes into their bodies.",
      want: "They want to preserve personal autonomy in healthcare. That means: the right to refuse vaccines and mandates, the right to access supplements and alternative therapies, and the right to try experimental drugs. They are strong supporters of Medicaid work requirements but not wholesale safety-net cutters—their emphasis is responsibility, not elimination. They want transparency about pharma and medical data, not handouts.",
      doWhat:
        "They use supplements heavily, and lean into organic/clean food practices (but less than Naturalists). They consume libertarian-leaning media: Rogan, Megyn Kelly, Jordan Peterson, Daily Wire, with less reliance on Bannon or hard MAGA pods. They are less extreme and distrustful than Paleo Freedom Fighters, framing themselves as “live and let live” liberty activists.",
      whoAre:
        "Median age 55, more female than male, disproportionately married with kids. White but with some Hispanic representation. Mostly suburban and rural. Demographically stable, incomes around $95k (above Price Populists, below Free Market Reformers). Many were politically disengaged or even “normies” before COVID, but mandates radicalized them into activism. They are porous: able to align with mainstream libertarians, with wellness influencers, or with MAGA populists depending on context.",
    },
  },
  {
    id: 10,
    code: "VS",
    name: "VACCINE SKEPTICS",
    party: "GOP",
    pop: 5,
    tier: 3,
    roi: 0.89,
    highRoi: 16,
    supporters: 24,
    activation: 12,
    influence: 6,
    persuadability: [10, 6, 36, 16, 32],
    demo: {
      male: "48%",
      medAge: 52,
      nonwhite: "8%",
      hhi: "$84K",
      college: "29%",
      rural: "16%",
      cenDiv: "East South Central",
      cenPct: "10%",
      pharmaTrust: 2.3,
      corpTrust: 2.78,
      govtTrust: 3.07,
      m4a: "24%",
      vaxAvoid: "45%",
    },
    persona: {
      quote:
        "I am opposed to vaccines and mandates and don't trust government or pharmaceutical companies.",
      believe:
        "They believe vaccines are unsafe, ineffective, and part of a broader system of coercion and corruption. They view mandates as tyranny and believe the medical establishment hides the truth about harms. They are deeply suspicious of public health authorities, Big Pharma, and government, often tying vaccine skepticism to wider conspiracies about global control.",
      want: "They want total freedom from mandates, transparency about vaccine risks (as they perceive them), and accountability for what they see as lies and cover-ups. They want space to raise children without immunization requirements, to refuse vaccines without penalty, and to dismantle the power of organizations like the CDC, FDA, and WHO.",
      doWhat:
        "They organize rallies, attend alternative health summits, and flood social media with anti-vaccine content. They follow high-profile contrarian doctors and activists (Del Bigtree, Sherri Tenpenny, RFK Jr., Simone Gold). They homeschool or place children in communities that allow exemptions. Politically, they align with MAGA because Trump and his allies validated their distrust of institutions—even though Trump himself occasionally touts vaccines, which remains a tension point.",
      whoAre:
        "Predominantly middle-aged, rural or exurban, white, with both male and female representation. Many are working-class or homemakers with a high share of homeschooling families. They are less economically defined than Price Populists—their identity is almost entirely ideological and cultural. They represent the most extreme, least porous group in the GOP model: once inside, they rarely move, but they also have little overlap with moderates or institutional conservatives.",
    },
  },
  {
    id: 11,
    code: "UCP",
    name: "UNIVERSAL CARE PROGRESSIVES",
    party: "DEM",
    pop: 11,
    tier: 3,
    roi: 1.05,
    highRoi: 27,
    supporters: 53,
    activation: 13,
    influence: 8,
    persuadability: [17, 9, 36, 11, 27],
    demo: {
      male: "35%",
      medAge: 46,
      nonwhite: "35%",
      hhi: "$96K",
      college: "54%",
      rural: "13%",
      cenDiv: "Mountain",
      cenPct: "15%",
      pharmaTrust: 2.06,
      corpTrust: 2.51,
      govtTrust: 4.52,
      m4a: "82%",
      vaxAvoid: "4%",
    },
    persona: {
      quote:
        "Health care is a human right. It's time for universal health care. We need Medicare-for-All.",
      believe:
        "They believe healthcare is a fundamental human right, not a benefit tied to employment, age, or income. In their view, the American healthcare system is not merely inefficient or unfair — it is structurally unfair. They see corporate power — insurers, pharmaceutical companies, hospital chains — as the central driver of high costs, inequity, and denial of care. Incremental reforms, in their view, do not fix the problem; they normalize a broken moral framework. For them, universality is not a policy preference but a legitimacy test: either everyone is covered, or the system has failed.",
      want: "They want Medicare-for-All or something functionally equivalent: a single, universal system that guarantees comprehensive coverage, eliminates private insurance middlemen, and uses public bargaining power to control prices. They support aggressive drug-price negotiation, global budgets for hospitals, and strict limits on corporate profiteering. They strongly support reproductive freedom, gender-affirming care, and equity mandates, and they believe healthcare policy must explicitly confront inequality, not merely reduce costs. They are willing to accept disruption, higher taxes, and political conflict if those are the price of achieving universal coverage. For them, the risk of not acting is greater than the risk of change.",
      doWhat:
        "They mobilize. They organize rallies, canvass for progressive candidates, pressure Democratic leadership, and elevate healthcare as a moral litmus test in elections. They share patient stories, policy explainers, and critiques of corporate healthcare power online, and they are vocal critics of politicians who hedge, compromise, or delay. They are skeptical of experts who defend the status quo and dismiss warnings about “implementation risk” as excuses for inaction. Their politics are confrontational not because they enjoy conflict, but because they believe moral clarity requires it.",
      whoAre:
        "Median age late 40s to early 50s, racially diverse, urban and inner-suburban. Highly educated but economically mixed — many work in nonprofit, education, healthcare, advocacy, or creative fields. Politically progressive and reliably Democratic, but often frustrated with party leadership, which they see as too cautious and too close to corporate interests. They are secular in tone, justice-driven rather than institution-protective, and impatient with gradualism.",
    },
  },
  {
    id: 12,
    code: "FJP",
    name: "FAITH & JUSTICE PROGRESSIVES",
    party: "DEM",
    pop: 10,
    tier: 1,
    roi: 1.05,
    highRoi: 24,
    supporters: 59,
    activation: 8,
    influence: 6,
    persuadability: [16, 8, 28, 12, 35],
    demo: {
      male: "29%",
      medAge: 44,
      nonwhite: "57%",
      hhi: "$74K",
      college: "44%",
      rural: "11%",
      cenDiv: "South Atlantic",
      cenPct: "21%",
      pharmaTrust: 4.02,
      corpTrust: 4.11,
      govtTrust: 5.12,
      m4a: "59%",
      vaxAvoid: "13%",
    },
    persona: {
      quote:
        "My faith calls me to fight for justice. Racism and inequality drive poor health. Health equity must be a top priority.",
      believe:
        "They see health as a moral ecosystem—families, congregations, clinics, and public institutions each bearing obligations to the vulnerable. Science is a public good that merits funding and careful guardrails: invest in discovery, demand transparency, and regulate powerful tools (AI, biologics) without choking off cures. Corporate power in health care is viewed skeptically (particularly pharma’s profits and patent games), but they are not anti-medicine; they want institutions to serve patients first. Conscience and family matter: clinicians shouldn’t be compelled to violate core beliefs, adults should have access to gender-affirming care while irreversible interventions for minors face age safeguards, and government can legitimately support marriage and child-rearing. Justice requires tackling social drivers of health and remedying historic inequities in communities of color, all while keeping hospitals—especially rural ones—open and viable.",
      want: "They want bigger bets on science (higher NIH/CDC budgets), tighter oversight where it counts (drug-price negotiation, strong AI-in-medicine rules, data portability, and curbs on patent abuse), and faster compassionate access (right-to-try/early access after Phase I with robust real-world evidence). They prioritize community mental-health funding—and support carefully structured mandated treatment for severely ill unhoused individuals—plus GMO warning labels and employer coverage requirements. They favor a public option alongside Medicare Advantage protection, Medicaid safeguards, and rural-hospital subsidies, and they back immigration and trade policies that protect U.S. health-care workers. Pandemic policy should be evidence-led, not reflexively “natural immunity only.”",
      doWhat:
        "They blend everyday wellness with faith practice. Many take supplements, read labels, use fitness trackers, go to the gym, and pray or meditate regularly. A notable minority try alternative therapies and share health content online. They are civically present through churches, schools, and local nonprofits, and they’re the folks who show up when a parishioner needs meals, a ride to chemo, or help navigating an insurance denial.",
      whoAre:
        "Predominantly female (~71%), mean age mid-50s (~54), and the most racially diverse cohort in the left-of-center universe (~59% White, ~29% Black, meaningful Hispanic representation). Largely suburban (~57%) with a strong urban (~34%) presence. Education tilts college-plus (~34% BA, ~20% grad), incomes cluster in the broad middle to upper-middle ranges, and coverage is led by employer insurance (~43%) with visible shares in Medicare Advantage (~18%), Medicaid (~15%), and individual plans (~12%). Religiously engaged—especially Protestant (~34%) and Catholic (~25%)—with observance spread from sporadic to regular; they’re proud of the country yet want institutions to better reflect faith, family, and fairness.",
    },
  },
  {
    id: 13,
    code: "HCP",
    name: "HEALTH CARE PROTECTIONISTS",
    party: "DEM",
    pop: 8,
    tier: 3,
    roi: 1.0,
    highRoi: 27,
    supporters: 53,
    activation: 8,
    influence: 6,
    persuadability: [5, 22, 28, 12, 32],
    demo: {
      male: "31%",
      medAge: 47,
      nonwhite: "40%",
      hhi: "$81K",
      college: "53%",
      rural: "14%",
      cenDiv: "Pacific",
      cenPct: "24%",
      pharmaTrust: 2.3,
      corpTrust: 2.83,
      govtTrust: 3.78,
      m4a: "40%",
      vaxAvoid: "13%",
    },
    persona: {
      quote:
        "Unions fought for good coverage, and we should protect those benefits, while restraining corporate excess.",
      believe:
        "They believe healthcare legitimacy is rooted in work, contribution, and earned benefits. Coverage is not an abstract right or a technocratic system — it is something working people fought for, bargained for, and built over decades. They are deeply skeptical of both corporate power and distant bureaucracy. To them, Big Pharma, hospital chains, insurers, and Washington regulators all sit too far from the people who actually pay the price when systems fail. They believe reform efforts too often protect elites — executives, consultants, or policymakers — while asking workers to absorb the disruption.",
      want: "They want affordable care that protects existing coverage and American jobs. Their first instinct is defensive: don’t take away what workers already have. They support cracking down on price-gouging, surprise billing, junk fees, and corporate profiteering — especially when it raises costs for families with employer-sponsored insurance. They want policy that strengthens collective bargaining, protects union health plans, keeps hospitals open in working communities, and reins in corporate consolidation. They are open to government intervention when it clearly lowers costs or stabilizes access, but they strongly oppose reforms that threaten employer-based coverage, weaken negotiated benefits, or hand more power to unaccountable bureaucracies.",
      doWhat:
        "They organize, vote, and mobilize through labor networks, community groups, and workplace politics. They show up at town halls, pressure employers and lawmakers, and talk about healthcare in concrete terms: premiums, deductibles, prescription prices, and whether the local hospital stays open. They are not especially deferential to experts. They trust common sense over white papers and are quick to challenge reforms that sound elegant but feel disconnected from working-class reality. Their politics are confrontational when necessary, but grounded in protection rather than revolution.",
      whoAre:
        "Median age mid-to-late 50s, economically mixed but often financially stretched. Disproportionately union households or workers in trades, manufacturing, transportation, utilities, and service sectors. More rural and small-town than urban. Racially diverse within the working class. They are not ideologues. They are guardians of hard-won benefits..",
    },
  },
  {
    id: 14,
    code: "HAD",
    name: "HEALTH ABUNDANCE DEMOCRATS",
    party: "DEM",
    pop: 8,
    tier: 1,
    roi: 1.01,
    highRoi: 24,
    supporters: 60,
    activation: 18,
    influence: 9,
    persuadability: [19, 5, 31, 14, 31],
    demo: {
      male: "54%",
      medAge: 48,
      nonwhite: "48%",
      hhi: "$85K",
      college: "52%",
      rural: "9%",
      cenDiv: "South Atlantic",
      cenPct: "31%",
      pharmaTrust: 4.16,
      corpTrust: 4.12,
      govtTrust: 4.85,
      m4a: "51%",
      vaxAvoid: "10%",
    },
    persona: {
      quote:
        "Digital tools, AI, and start-ups can universalize care faster than big bureaucracies—let's remove red tape.",
      believe:
        "They see America’s health crisis as a supply-and-access problem that demands more of everything that works—more clinicians, more primary care, more mental-health capacity, more affordable coverage, and faster pathways from lab to patient. Government is a partner, not a savior: regulate where it matters, fund discovery, require employer responsibility, and give consumers real power over data and choice. They are pro-science with guardrails—comfortable with early access and post-market evidence, but insistent that AI diagnostics be regulated like medical devices and that clinical research be transparent. Culturally they are center-left populists: proud of the country, more traditional on family questions than other Democrats, skeptical of corporate “woke” branding, and keen on protecting American workers in trade and immigration policy. They distrust corporate power in health care—especially pharma’s profits and patent games—yet they’re not anti-business; they want markets that serve patients.",
      want: "They want capacity and affordability built at once: protect Medicaid and Medicare Advantage, require large employers to offer coverage, and add a public option to discipline prices. Let Medicare negotiate drug prices, curb patent abuse, and give patients data portability and data ownership rights. Fund NIH/CDC while accelerating access—early/compassionate use after Phase I, with real-world evidence to confirm benefit. Put real money into community mental-health and addiction care, allow mandated treatment for the severely ill unhoused when necessary and humane, and keep rural hospitals open with targeted subsidies. Label GMOs, regulate AI in medicine strictly, and offer wellness discounts in insurance. On hot-button issues they split the difference: cover gender-affirming care for adults, but restrict irreversible procedures for minors; respect patient autonomy and clinician conscience while avoiding blanket “natural-immunity-only” rules in future pandemics.",
      doWhat:
        "Day to day they practice mainstream wellness without the fads. Majorities take supplements and read labels; many use fitness trackers and go to the gym; a smaller share tries complementary therapies. They’re not heavy influencers online, but they do share health tips occasionally. At work they navigate employer benefits, price-shop for care, and expect seamless digital access to their records. Politically they show up for practical fixes—bond issues for hospital expansions, school-based counseling, workforce initiatives that train nurses and community health workers.",
      whoAre:
        "Female-leaning (≈64%), median age mid-50s, highly college-educated (≈64% BA+), and suburban-urban (≈57% suburban, ≈30% urban). Racially they are mostly White (~78%) with meaningful Asian (~6%) and Hispanic (~8%) presence. Insurance skews employer coverage (~54%) with additional Medicaid (~11%), Medicare Advantage (~9%), and individual-market (~12%) enrollment. A quarter report union ties (~26%). Religiously they are the least churched of the Democratic clusters (large atheist/agnostic/“nothing in particular” share), yet they score proud to be American and lean worker-protection on trade and immigration. Nearly half think the U.S. is less healthy than peer nations, which fuels their urgency for capacity-building and reform.",
    },
  },
  {
    id: 15,
    code: "HCI",
    name: "HEALTH CARE INCREMENTALISTS",
    party: "DEM",
    pop: 7,
    tier: 1,
    roi: 0.95,
    highRoi: 23,
    supporters: 60,
    activation: 7,
    influence: 15,
    persuadability: [18, 5, 34, 11, 32],
    demo: {
      male: "44%",
      medAge: 55,
      nonwhite: "44%",
      hhi: "$104K",
      college: "62%",
      rural: "8%",
      cenDiv: "Pacific",
      cenPct: "33%",
      pharmaTrust: 4.09,
      corpTrust: 4.17,
      govtTrust: 5.02,
      m4a: "36%",
      vaxAvoid: "7%",
    },
    persona: {
      quote:
        "I prefer step-by-step reforms. That means strengthening the ACA, not abandoning it.",
      believe:
        "They believe healthcare should be dependable, fair, and earned through participation in society over a lifetime. The system does not need to be torn down — it needs to work consistently for people who have planned, paid in, and now depend on it. They believe experts matter, institutions matter, and evidence matters — but only insofar as those institutions deliver predictability and protection. They are deeply skeptical of sweeping reforms that put coverage, benefits, or access at risk, especially for older Americans who cannot “wait it out” if something goes wrong. Their defining belief is not ideology, but risk intolerance: healthcare policy should never gamble with people’s security.",
      want: "They want to protect and improve what people already rely on — Medicare, Medicare Advantage, prescription drug coverage, and ACA protections for older and near-retirement Americans. They support closing gaps, lowering out-of-pocket costs, and negotiating drug prices, but strongly oppose reforms that threaten continuity of care or destabilize coverage. They favor incremental expansion, careful pilots, and reforms that can be reversed if they fail. They want technology used to simplify care and reduce cost, but only when privacy, fairness, and oversight are guaranteed. Their instinct is always: prove it works before you scale it.",
      doWhat:
        "They vote at extremely high rates, contact lawmakers, respond to policy alerts, and engage through trusted membership organizations rather than protests. They follow healthcare debates closely, read explainers, and ask pointed questions about implementation, transition risk, and unintended consequences.",
      whoAre:
        "Median age late 60s, but spanning late-50s pre-retirees through older seniors. Predominantly suburban, mixed income but risk-averse, with fixed or semi-fixed incomes. United by a strong sense of entitlement to stability after a lifetime of work. They are not activists. They are stakeholders.",
    },
  },
  {
    id: 16,
    code: "GHI",
    name: "GLOBAL HEALTH INSTITUTIONALISTS",
    party: "DEM",
    pop: 10,
    tier: 2,
    roi: 1.09,
    highRoi: 31,
    supporters: 59,
    activation: 6,
    influence: 10,
    persuadability: [17, 14, 23, 9, 36],
    demo: {
      male: "41%",
      medAge: 57,
      nonwhite: "24%",
      hhi: "$95K",
      college: "63%",
      rural: "10%",
      cenDiv: "Mid Atlantic",
      cenPct: "15%",
      pharmaTrust: 4.54,
      corpTrust: 4.31,
      govtTrust: 5.66,
      m4a: "67%",
      vaxAvoid: "6%",
    },
    persona: {
      quote:
        "America is better off as a leader in the global economy. To lead, we need to innovate to solve our biggest health threats.",
      believe:
        "They believe climate change is the single most important health challenge of the 21st century — the force multiplier that worsens nearly every other health risk. Because climate-driven health threats do not respect borders, they believe modern health challenges are fundamentally global and institutional. Pandemics, supply-chain disruptions, antimicrobial resistance, and emerging technologies cannot be managed by markets or nations acting alone. Only coordinated expert institutions — domestic and international — have the scale, continuity, and authority required to respond effectively.",
      want: "They want the United States to support a robust global health system. That means sustained funding for NIH, CDC, FDA, and strong engagement with international bodies like the WHO and global research consortia. They support drug-price oversight and guardrails, but oppose blunt policies that would undermine biomedical innovation or private-sector participation. They want expert-driven regulation, predictable rules for industry, global standards for safety and data, and coordinated pandemic preparedness. They favor expanding access and affordability through institutional reform — not through dismantling private insurance or replacing the system wholesale.",
      doWhat:
        "They vaccinate, follow public-health guidance, and rely on mainstream medical care. They defend expert agencies during crises, push back on populist attacks against science, and advocate for policy solutions that preserve institutional continuity. They participate in policy debates through professional networks, advisory roles, NGOs, and industry-government partnerships rather than street-level activism. They are more likely to argue for “fixing governance” than for moral confrontation, and more likely to warn about unintended consequences than to celebrate disruption.",
      whoAre:
        "Slightly younger and highly educated, urban or close-in suburban. Many work in policy, academia, or international development. Politically center-left, institutionally loyal, and culturally liberal on issues like reproductive freedom and climate change, but cautious about sweeping structural overhauls. They are comfortable with complexity and allergic to ideological absolutism.",
    },
  },
];

// ─── ADDITIONAL DEMOGRAPHIC DATA ─── (indexed by segment order)
// Order: TSP, CEC, TC, WE, PP, HF, PFF, HHN, MFL, VS, UCP, FJP, HCP, HAD, HCI, GHI
export const MILITARY = [
  12.3, 12.6, 10.2, 18.0, 9.8, 7.5, 9.7, 9.0, 9.2, 4.0, 4.8, 3.4, 5.1, 4.6, 8.8,
  5.7,
];
export const UNION_HH = [
  6.2, 16.6, 19.5, 17.8, 9.3, 20.6, 17.6, 15.3, 16.1, 14.0, 25.8, 19.0, 22.6,
  16.3, 15.1, 21.9,
];

export const RELIGION_CATS = [
  { label: "White Evangelical", key: "wEvan" },
  { label: "Black Protestant", key: "bProt" },
  { label: "White Mainline", key: "wMain" },
  { label: "Catholic", key: "cath" },
  { label: "Jewish", key: "jew" },
  { label: "Other", key: "other" },
  { label: "None", key: "none" },
];

// data[segIdx] for each religion
export const RELIGION_DATA = {
  wEvan: [
    26.0, 7.3, 22.2, 35.8, 15.7, 20.6, 28.5, 16.8, 12.4, 15.3, 1.4, 5.2, 3.2,
    7.4, 3.7, 3.8,
  ],
  bProt: [
    0.0, 0.0, 0.5, 0.3, 0.0, 2.2, 2.7, 2.9, 1.5, 0.5, 3.6, 13.2, 3.5, 7.1, 5.1,
    3.3,
  ],
  wMain: [
    15.2, 22.8, 18.0, 13.2, 21.4, 8.7, 9.9, 18.6, 17.3, 15.5, 5.9, 8.5, 10.4,
    6.0, 10.8, 15.7,
  ],
  cath: [
    21.4, 28.2, 31.1, 23.0, 28.4, 31.7, 23.4, 26.4, 24.9, 26.5, 10.8, 24.3,
    24.6, 23.6, 23.2, 16.3,
  ],
  jew: [
    3.9, 4.9, 3.0, 1.1, 0.2, 0.0, 2.7, 1.7, 4.8, 2.9, 4.1, 1.0, 2.6, 4.4, 2.9,
    8.4,
  ],
  other: [
    27.2, 13.5, 14.5, 21.5, 13.3, 24.6, 22.5, 16.5, 13.5, 16.6, 13.1, 28.0,
    19.3, 28.3, 15.7, 10.3,
  ],
  none: [
    6.3, 23.2, 10.6, 5.2, 21.0, 12.2, 10.4, 17.0, 25.6, 22.7, 61.2, 19.9, 36.3,
    23.1, 38.6, 42.1,
  ],
};

// Overindex markers (X) — segment indices where overindexed
export const RELIGION_OVERINDEX = {
  wEvan: [3, 6], // WE, PFF
  bProt: [11], // FJP
  wMain: [1], // CEC
  cath: [2, 4, 5, 7, 8, 9], // TC, PP, HF, HHN, MFL, VS
  jew: [],
  other: [0, 13], // TSP, HAD
  none: [10, 12, 14, 15], // UCP, HCP, HCI, GHI
};

// ─── PRE/POST DATA ───
export const PREPOST = {
  TSP: {
    rank: [43.0, 40.0],
    att1: [67.0, 63.0],
    att2: [55.0, 53.0],
    fav: [49.0, 60.0],
  },
  CEC: {
    rank: [32.0, 55.0],
    att1: [77.0, 69.0],
    att2: [57.0, 62.0],
    fav: [28.0, 58.0],
  },
  TC: {
    rank: [37.0, 52.0],
    att1: [74.0, 71.0],
    att2: [68.0, 70.0],
    fav: [58.0, 77.0],
  },
  WE: {
    rank: [23.0, 49.0],
    att1: [71.0, 68.0],
    att2: [54.0, 62.0],
    fav: [31.0, 46.0],
  },
  PP: {
    rank: [36.0, 53.0],
    att1: [55.0, 62.0],
    att2: [48.0, 55.0],
    fav: [21.0, 51.0],
  },
  HF: {
    rank: [28.0, 25.0],
    att1: [58.0, 58.0],
    att2: [50.0, 53.0],
    fav: [56.0, 56.0],
  },
  PFF: {
    rank: [24.0, 32.0],
    att1: [49.0, 60.0],
    att2: [42.0, 44.0],
    fav: [29.0, 32.0],
  },
  HHN: {
    rank: [35.0, 48.0],
    att1: [74.0, 62.0],
    att2: [68.0, 66.0],
    fav: [60.0, 83.0],
  },
  MFL: {
    rank: [25.0, 51.0],
    att1: [74.0, 72.0],
    att2: [57.0, 63.0],
    fav: [43.0, 61.0],
  },
  VS: {
    rank: [24.0, 36.0],
    att1: [56.0, 54.0],
    att2: [44.0, 46.0],
    fav: [4.0, 13.0],
  },
  UCP: {
    rank: [43.0, 60.0],
    att1: [57.0, 55.0],
    att2: [56.0, 57.0],
    fav: [30.0, 48.0],
  },
  FJP: {
    rank: [54.0, 74.0],
    att1: [62.0, 62.0],
    att2: [53.0, 51.0],
    fav: [31.0, 52.0],
  },
  HCP: {
    rank: [46.0, 66.0],
    att1: [57.0, 53.0],
    att2: [38.0, 54.0],
    fav: [39.0, 45.0],
  },
  HAD: {
    rank: [49.0, 54.0],
    att1: [54.0, 59.0],
    att2: [52.0, 53.0],
    fav: [51.0, 60.0],
  },
  HCI: {
    rank: [48.0, 50.0],
    att1: [50.0, 63.0],
    att2: [53.0, 57.0],
    fav: [54.0, 67.0],
  },
  GHI: {
    rank: [53.0, 66.0],
    att1: [53.0, 55.0],
    att2: [47.0, 52.0],
    fav: [31.0, 48.0],
  },
};

// ─── VECTOR DATA ───
// ─── STUDY-SPECIFIC ROI DATA ───
// NOTE: tier is per-study. ESI tiers from Excel Row 3. MA tiers TBD (using ESI as placeholder).
export const STUDY_ROI = {
  TSP: {
    ESI: {
      tier: 3,
      roi: 0.81,
      highRoi: 25,
      supporters: 73,
      activation: 23,
      influence: 5,
    },
    MA: {
      tier: 3,
      roi: 0.91,
      highRoi: 34,
      supporters: 51,
      activation: 27,
      influence: 5,
    },
  },
  CEC: {
    ESI: {
      tier: 1,
      roi: 1.01,
      highRoi: 36,
      supporters: 86,
      activation: 36,
      influence: 3,
    },
    MA: {
      tier: 1,
      roi: 1.24,
      highRoi: 46,
      supporters: 80,
      activation: 27,
      influence: 3,
    },
  },
  TC: {
    ESI: {
      tier: 1,
      roi: 1.11,
      highRoi: 38,
      supporters: 91,
      activation: 43,
      influence: 3,
    },
    MA: {
      tier: 1,
      roi: 0.81,
      highRoi: 27,
      supporters: 61,
      activation: 15,
      influence: 3,
    },
  },
  WE: {
    ESI: {
      tier: 1,
      roi: 1.1,
      highRoi: 38,
      supporters: 87,
      activation: 34,
      influence: 3,
    },
    MA: {
      tier: 2,
      roi: 0.94,
      highRoi: 32,
      supporters: 48,
      activation: 17,
      influence: 3,
    },
  },
  PP: {
    ESI: {
      tier: 2,
      roi: 1.02,
      highRoi: 36,
      supporters: 79,
      activation: 33,
      influence: 5,
    },
    MA: {
      tier: 2,
      roi: 1.03,
      highRoi: 42,
      supporters: 64,
      activation: 27,
      influence: 5,
    },
  },
  HF: {
    ESI: {
      tier: 1,
      roi: 1.22,
      highRoi: 36,
      supporters: 82,
      activation: 27,
      influence: 23,
    },
    MA: {
      tier: 3,
      roi: 0.88,
      highRoi: 31,
      supporters: 73,
      activation: 30,
      influence: 23,
    },
  },
  PFF: {
    ESI: {
      tier: 2,
      roi: 1.04,
      highRoi: 34,
      supporters: 84,
      activation: 27,
      influence: 12,
    },
    MA: {
      tier: 3,
      roi: 0.98,
      highRoi: 34,
      supporters: 51,
      activation: 22,
      influence: 12,
    },
  },
  HHN: {
    ESI: {
      tier: 1,
      roi: 1.04,
      highRoi: 37,
      supporters: 75,
      activation: 25,
      influence: 20,
    },
    MA: {
      tier: 2,
      roi: 1.05,
      highRoi: 43,
      supporters: 69,
      activation: 35,
      influence: 20,
    },
  },
  MFL: {
    ESI: {
      tier: 3,
      roi: 0.81,
      highRoi: 31,
      supporters: 82,
      activation: 28,
      influence: 5,
    },
    MA: {
      tier: 3,
      roi: 0.99,
      highRoi: 38,
      supporters: 74,
      activation: 34,
      influence: 5,
    },
  },
  VS: {
    ESI: {
      tier: 3,
      roi: 0.84,
      highRoi: 26,
      supporters: 74,
      activation: 23,
      influence: 4,
    },
    MA: {
      tier: 3,
      roi: 0.84,
      highRoi: 29,
      supporters: 52,
      activation: 22,
      influence: 4,
    },
  },
  UCP: {
    ESI: {
      tier: 3,
      roi: 0.89,
      highRoi: 37,
      supporters: 68,
      activation: 32,
      influence: 5,
    },
    MA: {
      tier: 1,
      roi: 1.19,
      highRoi: 49,
      supporters: 79,
      activation: 35,
      influence: 5,
    },
  },
  FJP: {
    ESI: {
      tier: 1,
      roi: 1.01,
      highRoi: 42,
      supporters: 75,
      activation: 33,
      influence: 5,
    },
    MA: {
      tier: 1,
      roi: 1.04,
      highRoi: 43,
      supporters: 69,
      activation: 35,
      influence: 5,
    },
  },
  HCP: {
    ESI: {
      tier: 3,
      roi: 0.85,
      highRoi: 33,
      supporters: 77,
      activation: 22,
      influence: 4,
    },
    MA: {
      tier: 1,
      roi: 1.25,
      highRoi: 50,
      supporters: 73,
      activation: 45,
      influence: 4,
    },
  },
  HAD: {
    ESI: {
      tier: 1,
      roi: 1.1,
      highRoi: 40,
      supporters: 81,
      activation: 33,
      influence: 10,
    },
    MA: {
      tier: 3,
      roi: 0.86,
      highRoi: 37,
      supporters: 61,
      activation: 27,
      influence: 10,
    },
  },
  HCI: {
    ESI: {
      tier: 1,
      roi: 1.17,
      highRoi: 45,
      supporters: 87,
      activation: 29,
      influence: 4,
    },
    MA: {
      tier: 1,
      roi: 0.91,
      highRoi: 30,
      supporters: 61,
      activation: 25,
      influence: 4,
    },
  },
  GHI: {
    ESI: {
      tier: 2,
      roi: 0.98,
      highRoi: 36,
      supporters: 85,
      activation: 35,
      influence: 7,
    },
    MA: {
      tier: 1,
      roi: 1.06,
      highRoi: 43,
      supporters: 72,
      activation: 32,
      influence: 7,
    },
  },
};

export const GOP_VECTORS = {
  TSP: { trust: 0.37, science: 0.23, autonomy: -0.2, markets: -0.11 },
  CEC: { trust: 0.24, science: 0.26, autonomy: -0.3, markets: -0.01 },
  TC: { trust: 0.42, science: 0.21, autonomy: -0.21, markets: 0.29 },
  WE: { trust: -0.02, science: -0.22, autonomy: 0.16, markets: 0.24 },
  PP: { trust: -0.19, science: 0.23, autonomy: -0.17, markets: -0.36 },
  HF: { trust: 0.04, science: 0.29, autonomy: -0.29, markets: -0.34 },
  PFF: { trust: -0.43, science: -0.43, autonomy: 0.41, markets: 0.09 },
  HHN: { trust: -0.07, science: 0.03, autonomy: -0.03, markets: -0.09 },
  MFL: { trust: -0.2, science: -0.06, autonomy: 0.09, markets: -0.12 },
  VS: { trust: -0.64, science: -0.46, autonomy: 0.36, markets: -0.19 },
};
export const DEM_VECTORS = {
  UCP: { reform: 0.7, equity: 0.46, domestic: -0.19, private: -0.53 },
  FJP: { reform: 0.06, equity: 0.31, domestic: 0.16, private: -0.02 },
  HCP: { reform: -0.37, equity: -0.29, domestic: 0.33, private: -0.12 },
  GHI: { reform: 0.32, equity: 0.22, domestic: -0.46, private: 0.14 },
  HAD: { reform: -0.24, equity: -0.43, domestic: 0.31, private: 0.33 },
  HCI: { reform: -0.77, equity: -0.52, domestic: -0.01, private: 0.4 },
};
export const GOP_AXES = [
  { key: "trust", pos: "Trust", neg: "Cynicism" },
  { key: "science", pos: "Science", neg: "Purity" },
  { key: "autonomy", pos: "Autonomy", neg: "Public Health" },
  { key: "markets", pos: "Markets", neg: "Econ. Populism" },
];
// ─── VECTOR AXIS DEFINITIONS (hover tooltips) ───
export const VECTOR_DEFS = {
  trust: {
    title: "TRUST: Cynicism ↔ Trust",
    text: "Measures baseline institutional confidence in the healthcare establishment — federal agencies, medical associations, and credentialed expertise. Higher Trust segments accept guidance from public health authorities as generally reliable, while Cynicism leaning segments perceive these institutions as captured by political or financial interests and filter recommendations accordingly.",
  },
  science: {
    title: "SCIENCE: Purity ↔ Science",
    text: "Captures whether a segment embraces evidence-based biomedical interventions or gravitates toward natural remedies, holistic wellness, and bodily purity. Science-oriented segments trust clinical trial evidence and pharmaceutical solutions at face value, while Purity segments view synthetic interventions with skepticism and prioritize organic, minimally processed alternatives.",
  },
  autonomy: {
    title: "AUTONOMY: Public Health ↔ Body Autonomy",
    text: "Reveals the tension between collective health mandates and individual sovereignty over medical decisions. Public Health oriented segments accept vaccination requirements, masking protocols, and regulatory oversight as legitimate community protections, while Body Autonomy segments view any compulsory health measure as an unacceptable infringement on personal liberty.",
  },
  markets: {
    title: "MARKETS: Economic Populism ↔ Free Markets",
    text: "Distinguishes between segments that trust market competition to optimize healthcare pricing and access versus those demanding government intervention to control costs. Free Market segments favor deregulation, consumer choice, and innovation incentives, while Economic Populist segments want aggressive price controls, trade policy enforcement, and protecting access to care.",
  },
  reform: {
    title: "REFORM: Status Quo ↔ System Reform",
    text: "Measures how aggressively a segment wants to restructure the U.S. healthcare system, from single-payer transformation to working within existing frameworks. Segments scoring toward Reform see the current architecture as fundamentally broken, while those toward Status Quo believe targeted policy fixes can deliver meaningful progress without systemic disruption.",
  },
  equity: {
    title: "JUSTICE: Individualism ↔ Justice",
    text: "Measures whether a segment frames healthcare outcomes primarily as a product of structural inequities or personal choices and accountability. Justice-focused segments prioritize closing disparate access gaps across race, income, and geography, while Individual Responsibility segments emphasize personal health behaviors and merit-based resource allocation.",
  },
  domestic: {
    title: "LEADERSHIP: Global Focus ↔ American Leadership",
    text: "Reveals whether a segment sees U.S. healthcare policy through an internationalist lens or a nationalist one. Global Health segments see the top threats to health coming from global pandemics and climate change, and support multilateral cooperation. American healthcare leadership looks to the U.S. to set the global standard through domestic innovation and competitive excellence.",
  },
  private: {
    title: "INDUSTRY: Public Sector ↔ Private Industry",
    text: "Gauges posture toward pharmaceutical companies, insurers, and other corporate actors in the healthcare ecosystem. Segments on the Public Sector end view industry profit motives as incompatible with patient welfare, while those at the Industry end see private-sector innovation and capital as essential engines of progress.",
  },
};

export const DEM_AXES = [
  { key: "reform", pos: "Reform", neg: "Status Quo" },
  { key: "equity", pos: "Justice", neg: "Individualism" },
  { key: "domestic", pos: "Leader", neg: "Global Focus" },
  { key: "private", pos: "Industry", neg: "Public Sector" },
];

// ─── IDEOLOGY DATA ───
export const IDEOLOGY_GROUPS = [
  {
    label: "MARKETS",
    color: "#34d399",
    dims: [
      {
        key: "regulation",
        label: "Regulation",
        lo: "Necessary",
        hi: "Harmful",
      },
      {
        key: "sizeofgovt",
        label: "Size of Govt",
        lo: "Do more",
        hi: "Spends too much",
      },
      {
        key: "profit",
        label: "Profit",
        lo: "Too much profit",
        hi: "Fair profit",
      },
    ],
  },
  {
    label: "MFA",
    color: "#f59e0b",
    dims: [
      {
        key: "mfa",
        label: "Health Care",
        lo: "Right / public system",
        hi: "Private market",
      },
    ],
  },
  {
    label: "PLANET",
    color: "#60a5fa",
    dims: [
      {
        key: "enviro",
        label: "Environment",
        lo: "Protect",
        hi: "Gone too far",
      },
      {
        key: "climate",
        label: "Climate Change",
        lo: "Serious threat",
        hi: "Overblown",
      },
    ],
  },
  {
    label: "MORALITY",
    color: "#c084fc",
    dims: [
      {
        key: "homosexuals",
        label: "Homosexuality",
        lo: "Acceptance",
        hi: "Discouragement",
      },
      {
        key: "familystruc",
        label: "Family Structure",
        lo: "Diversity",
        hi: "Traditional",
      },
      { key: "abortion", label: "Abortion", lo: "Pro-choice", hi: "Pro-life" },
      {
        key: "religion",
        label: "Religion",
        lo: "Without God",
        hi: "Requires God",
      },
    ],
  },
  {
    label: "POPULISM",
    color: "#fb7185",
    dims: [
      {
        key: "immigration",
        label: "Immigration",
        lo: "Strengthens",
        hi: "Threatens",
      },
      { key: "trade", label: "Trade", lo: "Free trade", hi: "Protectionism" },
      {
        key: "globalism",
        label: "Globalism",
        lo: "Global leader",
        hi: "America First",
      },
      { key: "patriotism", label: "Patriotism", lo: "Not proud", hi: "Proud" },
      {
        key: "authority",
        label: "Authority",
        lo: "Strong measures",
        hi: "Trust system",
      },
    ],
  },
];
export const IDEOLOGY_DATA = {
  regulation: [
    4.76, 4.78, 5.28, 5.34, 4.49, 4.08, 4.91, 4.73, 5.26, 4.67, 3.49, 3.77,
    4.02, 3.93, 4.02, 3.3,
  ],
  sizeofgovt: [
    4.17, 4.42, 5.0, 5.01, 3.66, 3.88, 4.53, 4.16, 4.2, 4.09, 2.39, 3.17, 3.15,
    3.31, 4.02, 2.66,
  ],
  profit: [
    4.31, 4.4, 4.38, 4.15, 3.74, 4.25, 3.65, 3.96, 4.12, 3.8, 3.29, 3.62, 3.53,
    3.94, 3.84, 3.53,
  ],
  mfa: [
    3.98, 4.26, 4.42, 4.54, 3.81, 3.4, 4.56, 4.01, 4.06, 4.47, 2.26, 3.21, 3.04,
    3.29, 3.09, 2.48,
  ],
  enviro: [
    4.6, 4.71, 4.76, 5.16, 4.24, 3.81, 4.65, 4.52, 4.38, 4.76, 2.48, 3.29, 2.85,
    3.19, 2.86, 2.28,
  ],
  climate: [
    5.0, 5.29, 5.31, 5.58, 4.69, 4.07, 4.89, 4.56, 4.99, 4.76, 3.01, 3.73, 3.97,
    4.17, 3.99, 3.49,
  ],
  homosexuals: [
    4.77, 4.69, 5.33, 5.48, 4.22, 4.27, 4.96, 4.16, 4.23, 4.56, 3.0, 3.7, 3.59,
    4.35, 3.77, 2.84,
  ],
  familystruc: [
    4.87, 3.43, 5.01, 5.59, 3.75, 4.04, 4.85, 4.54, 4.04, 4.19, 2.41, 3.31,
    3.12, 3.73, 3.03, 2.23,
  ],
  abortion: [
    4.42, 4.59, 4.84, 5.05, 4.84, 4.23, 5.14, 4.38, 4.89, 4.69, 2.6, 3.07, 3.66,
    3.73, 3.39, 2.51,
  ],
  religion: [
    4.59, 4.54, 4.77, 4.31, 4.19, 3.66, 4.26, 4.41, 4.35, 3.73, 3.07, 4.17,
    3.39, 3.65, 3.14, 2.8,
  ],
  immigration: [
    4.95, 4.95, 5.05, 5.3, 4.55, 4.37, 4.88, 4.39, 5.06, 5.22, 2.48, 3.14, 3.39,
    3.61, 3.43, 2.68,
  ],
  trade: [
    4.71, 5.07, 4.74, 4.94, 4.52, 4.56, 5.05, 4.77, 4.87, 4.97, 3.15, 3.86,
    4.21, 4.17, 3.53, 2.6,
  ],
  globalism: [
    5.29, 5.3, 5.45, 5.34, 4.65, 4.35, 4.9, 5.04, 4.92, 5.21, 3.24, 3.73, 4.31,
    4.17, 4.94, 3.75,
  ],
  patriotism: [
    4.48, 4.31, 4.83, 4.62, 4.3, 3.82, 4.45, 4.21, 4.26, 4.35, 3.64, 4.1, 4.34,
    4.11, 4.31, 3.9,
  ],
  authority: [
    4.75, 3.4, 4.58, 4.95, 3.88, 3.78, 4.82, 4.41, 3.7, 3.83, 2.72, 4.11, 3.17,
    3.97, 2.93, 2.61,
  ],
};

// ─── TIER & COLOR CONSTANTS ───
export const TIER_BG = { 1: "#064e3b", 2: "#854d0e", 3: "#991b1b" };
export const TIER_TEXT = { 1: "#6ee7b7", 2: "#fde047", 3: "#fca5a5" };
export const TIER_ACCENT = { 1: "#34d399", 2: "#eab308", 3: "#ef4444" };
export const TIER_LABELS = { 1: "TIER 1", 2: "TIER 2", 3: "TIER 3" };

// C is now provided by ProfileCContext (see useProfileC) so profile respects Light/Dark theme

// ─── US STATE PATHS for geography ───
export const STATE_PATHS = {
  Pacific: [
    "M 78,11 L 78,8 82,7 90,8 96,8 100,11 100,27 93,27 91,22 85,19 80,18 78,15 Z",
    "M 78,18 L 85,19 91,22 93,27 100,27 100,42 82,42 78,35 Z",
    "M 78,35 L 82,42 100,42 100,50 98,58 93,65 88,72 83,75 80,70 78,60 76,50 Z",
    "M 20,75 L 30,72 42,74 48,78 42,82 30,82 22,80 Z",
    "M 55,80 L 58,78 62,79 64,82 60,83 56,82 Z",
  ],
  Mountain: [
    "M 100,8 L 130,8 148,10 148,25 100,25 Z",
    "M 100,25 L 100,11 96,8 100,25 108,42 100,42 Z",
    "M 108,25 L 148,25 148,40 108,40 Z",
    "M 100,42 L 108,42 108,60 100,65 98,58 100,50 Z",
    "M 108,42 L 128,42 128,60 108,60 Z",
    "M 128,42 L 160,42 160,58 128,58 Z",
    "M 108,60 L 128,60 128,78 108,78 105,72 Z",
    "M 128,60 L 155,60 155,78 128,78 Z",
  ],
  "West North Central": [
    "M 148,10 L 182,10 182,22 148,22 Z",
    "M 148,22 L 182,22 182,35 148,35 Z",
    "M 148,35 L 182,35 185,42 160,42 148,40 Z",
    "M 160,42 L 185,42 185,58 160,58 Z",
    "M 182,8 L 200,8 200,28 182,28 182,10 Z",
    "M 182,28 L 200,28 205,35 200,42 185,42 182,35 Z",
    "M 185,42 L 200,42 210,42 215,48 210,58 200,60 185,58 Z",
  ],
  "East North Central": [
    "M 200,8 L 218,10 222,22 215,28 200,28 Z",
    "M 218,8 L 235,10 240,18 238,28 228,22 222,22 218,10 Z",
    "M 200,28 L 215,28 215,48 210,50 200,42 Z",
    "M 215,28 L 228,28 228,48 215,48 Z",
    "M 228,28 L 245,25 248,38 240,48 228,48 Z",
  ],
  "West South Central": [
    "M 185,58 L 200,60 200,70 185,70 Z",
    "M 185,70 L 200,70 202,78 195,82 185,80 Z",
    "M 155,58 L 185,58 185,68 165,68 155,65 Z",
    "M 128,78 L 155,78 155,65 165,68 185,68 185,80 180,90 170,95 155,95 140,90 130,85 Z",
  ],
  "East South Central": [
    "M 210,42 L 215,48 228,48 240,48 248,42 252,45 245,50 225,52 210,52 Z",
    "M 210,52 L 225,52 245,50 255,52 255,58 210,58 Z",
    "M 200,60 L 210,58 210,75 202,78 200,70 Z",
    "M 210,58 L 225,58 228,75 220,78 210,75 Z",
  ],
  "South Atlantic": [
    "M 262,38 L 265,36 266,40 263,42 Z",
    "M 252,36 L 262,34 265,36 262,38 258,40 252,40 Z",
    "M 240,42 L 255,40 265,42 268,45 258,48 240,48 Z",
    "M 240,38 L 248,38 252,42 248,48 240,48 240,42 Z",
    "M 240,48 L 258,48 270,50 275,52 265,55 240,55 Z",
    "M 240,55 L 258,55 262,60 250,65 240,62 Z",
    "M 225,58 L 240,58 240,62 250,65 245,75 228,75 Z",
    "M 228,75 L 245,75 252,78 258,85 255,95 248,98 240,95 235,85 228,80 Z",
    "M 258,39 L 260,38 260,40 258,41 Z",
  ],
  "Mid Atlantic": [
    "M 245,15 L 265,12 275,15 272,22 265,28 255,28 248,25 Z",
    "M 265,28 L 270,26 272,32 268,36 265,34 Z",
    "M 240,25 L 255,25 265,28 265,34 252,36 240,35 Z",
  ],
  "New England": [
    "M 275,2 L 282,5 285,12 280,15 275,12 272,8 Z",
    "M 268,10 L 272,8 275,12 275,18 270,18 Z",
    "M 275,12 L 278,12 278,20 275,22 272,18 275,18 Z",
    "M 272,22 L 282,20 285,22 280,24 272,24 Z",
    "M 280,24 L 283,23 284,26 281,26 Z",
    "M 272,24 L 280,24 280,28 272,28 Z",
  ],
};
export const ALL_STATES = Object.entries(STATE_PATHS).flatMap(([division, paths]) =>
  paths.map((d) => ({ d, division })),
);

export const TRUST_DATA = {
  GOVT: [
    4.26, 4.07, 4.04, 3.57, 4.07, 4.16, 3.32, 3.77, 3.65, 3.07, 4.52, 5.12,
    3.78, 4.85, 5.02, 5.66,
  ],
  CORP: [
    3.96, 3.79, 4.01, 3.52, 3.39, 4.05, 3.24, 3.48, 3.32, 2.78, 2.51, 4.11,
    2.71, 4.12, 4.17, 4.31,
  ],
  GAP: [
    0.3, 0.28, 0.03, 0.05, 0.68, 0.11, 0.08, 0.29, 0.33, 0.29, 2.01, 1.01, 1.07,
    0.73, 0.85, 1.35,
  ],
};


export const ENTITIES = {
  PHARMA: {
    l: "Pharma",
    g: "corp",
    v: [
      3.71, 3.57, 3.94, 3.11, 3.07, 3.67, 2.75, 3.28, 2.88, 2.3, 2.06, 4.02,
      2.3, 4.16, 4.09, 4.54,
    ],
    a: 3.34,
  },
  INSURER: {
    l: "Insurers",
    g: "corp",
    v: [
      4.04, 3.63, 4.11, 3.58, 3.19, 4.09, 3.46, 3.66, 3.23, 2.81, 2.1, 4.23,
      2.74, 4.01, 4.27, 4.33,
    ],
    a: 3.59,
  },
  HOSPITAL: {
    l: "Hospitals",
    g: "corp",
    v: [
      5.2, 4.74, 5.02, 4.58, 4.31, 4.64, 4.0, 4.39, 4.42, 3.76, 4.3, 5.22, 3.96,
      5.14, 5.11, 5.76,
    ],
    a: 4.66,
  },
  PROVIDER: {
    l: "Providers",
    g: "corp",
    v: [
      5.07, 4.99, 5.1, 4.7, 4.46, 4.38, 4.18, 4.25, 4.41, 3.58, 4.43, 5.27, 4.0,
      5.19, 5.33, 5.94,
    ],
    a: 4.71,
  },
  FED: {
    l: "FDA / CDC",
    g: "govt",
    v: [
      4.21, 3.94, 3.92, 3.24, 3.91, 4.02, 2.92, 3.6, 3.24, 2.63, 4.29, 4.92,
      3.64, 4.75, 4.94, 5.35,
    ],
    a: 3.97,
  },
  NIH: {
    l: "NIH",
    g: "govt",
    v: [
      4.02, 3.92, 3.89, 3.29, 4.01, 4.13, 3.1, 3.52, 3.47, 2.84, 4.64, 5.09,
      3.9, 4.88, 5.13, 5.71,
    ],
    a: 4.1,
  },
  MEDICARE: {
    l: "Medicare",
    g: "govt",
    v: [
      4.8, 4.61, 4.63, 4.27, 4.36, 4.42, 3.96, 4.16, 4.23, 3.66, 4.58, 5.36,
      3.86, 5.1, 5.13, 6.01,
    ],
    a: 4.57,
  },
  ACADEMIA: {
    l: "Academia",
    g: "govt",
    v: [
      4.22, 4.27, 4.16, 3.63, 4.42, 4.4, 3.45, 4.02, 3.98, 3.31, 5.3, 5.42,
      4.36, 5.05, 5.34, 6.01,
    ],
    a: 4.46,
  },
  BIGAG: {
    l: "Big Ag",
    g: "o",
    v: [
      4.19, 3.97, 4.1, 3.84, 3.69, 4.12, 3.39, 3.61, 3.47, 3.1, 2.66, 4.09,
      2.91, 4.1, 4.21, 4.16,
    ],
    a: 3.73,
  },
  FARMER: {
    l: "Farmers",
    g: "o",
    v: [
      5.7, 5.54, 5.44, 5.63, 5.3, 5.11, 5.33, 5.55, 5.42, 5.25, 4.89, 5.47,
      4.76, 5.4, 5.24, 5.64,
    ],
    a: 5.35,
  },
  CONSUMERS: {
    l: "Consumers",
    g: "o",
    v: [
      4.42, 4.15, 4.17, 4.12, 4.05, 4.32, 4.03, 4.16, 4.16, 3.82, 3.84, 4.64,
      3.68, 4.42, 4.48, 4.56,
    ],
    a: 4.19,
  },
  PBM: {
    l: "PBMs",
    g: "o",
    v: [
      3.5, 3.28, 3.58, 3.14, 3.12, 3.78, 2.95, 3.39, 2.98, 2.58, 2.33, 3.94,
      2.56, 3.7, 3.87, 3.93,
    ],
    a: 3.29,
  },
  EPA: {
    l: "EPA",
    g: "o",
    v: [
      3.96, 3.8, 3.69, 3.28, 3.97, 4.05, 3.03, 3.61, 3.47, 2.81, 4.64, 5.12,
      3.79, 4.76, 5.05, 5.58,
    ],
    a: 4.04,
  },
  BIGTECH: {
    l: "Big Tech",
    g: "o",
    v: [
      3.43, 3.51, 3.66, 3.04, 3.16, 3.95, 3.0, 2.93, 3.04, 2.36, 2.01, 3.63,
      2.28, 3.92, 3.83, 3.69,
    ],
    a: 3.22,
  },
  BIOTECH: {
    l: "Biotech",
    g: "o",
    v: [
      3.92, 3.85, 3.99, 3.61, 3.44, 4.24, 3.41, 3.47, 3.54, 3.08, 3.17, 4.27,
      2.98, 4.16, 4.2, 4.44,
    ],
    a: 3.74,
  },
  BIGFOOD: {
    l: "Big Food",
    g: "o",
    v: [
      4.46, 4.2, 4.29, 3.95, 3.78, 4.25, 3.46, 3.92, 3.73, 3.07, 3.04, 4.42,
      3.03, 4.38, 4.45, 4.69,
    ],
    a: 3.95,
  },
};



// ─── BELIEFS DATA (top-3-box) ────────────────────────────────────────────────
export const BELIEFS = [
  {
    v: "CHOICE",
    ty: "ATT",
    t: "Individuals should have more autonomy in making personal health decisions without government interference.",
    t3b: [
      0.855, 0.917, 0.904, 0.908, 0.891, 0.746, 0.933, 0.813, 0.913, 0.897,
      0.825, 0.881, 0.791, 0.819, 0.781, 0.801,
    ],
    a: 0.8543,
  },
  {
    v: "PROFIT",
    ty: "ATT",
    t: "Big pharma put profits over patients.",
    t3b: [
      0.882, 0.919, 0.742, 0.907, 0.968, 0.876, 0.948, 0.815, 0.971, 0.922,
      0.972, 0.93, 0.927, 0.845, 0.787, 0.871,
    ],
    a: 0.8967,
  },
  {
    v: "INDIVID_RESP",
    ty: "ATT",
    t: "People's health is mostly determined by their own choices, not their environment or circumstances.",
    t3b: [
      0.627, 0.602, 0.669, 0.716, 0.476, 0.71, 0.77, 0.671, 0.612, 0.669, 0.174,
      0.349, 0.223, 0.493, 0.405, 0.258,
    ],
    a: 0.4688,
  },
  {
    v: "IMMUNITY",
    ty: "ATT",
    t: "Natural immunity should count for more than vaccine mandates when setting public",
    t3b: [
      0.562, 0.549, 0.552, 0.734, 0.509, 0.586, 0.862, 0.721, 0.649, 0.814,
      0.118, 0.345, 0.235, 0.315, 0.204, 0.154,
    ],
    a: 0.4285,
  },
  {
    v: "ELITES",
    ty: "ATT",
    t: "Medical experts and scientists often ignore what ordinary people know from experience and should not dictate public policy health rules in future pandemics.",
    t3b: [
      0.655, 0.539, 0.551, 0.724, 0.592, 0.687, 0.843, 0.637, 0.614, 0.773,
      0.174, 0.371, 0.293, 0.39, 0.322, 0.211,
    ],
    a: 0.4586,
  },
  {
    v: "EQUITY_FUNDING",
    ty: "ATT",
    t: "The federal government should invest extra funds in communities of color that have suffered historic health injustices, even if it means higher taxes.",
    t3b: [
      0.325, 0.158, 0.12, 0.123, 0.197, 0.346, 0.243, 0.29, 0.19, 0.196, 0.904,
      0.728, 0.499, 0.422, 0.5, 0.808,
    ],
    a: 0.4476,
  },
  {
    v: "REFUSAL",
    ty: "ATT",
    t: "Patients have the right to refuse any medical intervention, even when experts say their decision could endanger public health.",
    t3b: [
      0.527, 0.648, 0.589, 0.746, 0.642, 0.642, 0.845, 0.706, 0.649, 0.784,
      0.168, 0.547, 0.421, 0.48, 0.356, 0.273,
    ],
    a: 0.5162,
  },
  {
    v: "RWE",
    ty: "ATT",
    t: "The FDA should allow conditional approvals that rely on real world evidence collected after a drug reaches the market, rather than insisting on full randomized trials first",
    t3b: [
      0.613, 0.487, 0.523, 0.559, 0.476, 0.495, 0.658, 0.551, 0.552, 0.562,
      0.354, 0.553, 0.322, 0.485, 0.446, 0.404,
    ],
    a: 0.4815,
  },
  {
    v: "INFLUENCE",
    ty: "ATT",
    t: "Big corporations have too much influence over public health policies.",
    t3b: [
      0.804, 0.844, 0.703, 0.86, 0.948, 0.846, 0.914, 0.753, 0.877, 0.872,
      0.968, 0.892, 0.892, 0.808, 0.768, 0.883,
    ],
    a: 0.8614,
  },
  {
    v: "CLINICIAN_AUTONOMY",
    ty: "ATT",
    t: "Clinicians should never be forced by law to provide treatments that violate their religious or moral beliefs.",
    t3b: [
      0.847, 0.763, 0.784, 0.879, 0.626, 0.74, 0.895, 0.765, 0.73, 0.767, 0.16,
      0.483, 0.413, 0.517, 0.443, 0.219,
    ],
    a: 0.558,
  },
  {
    v: "DATA_PORT",
    ty: "ATT",
    t: "Health care companies should be required to let patients move their medical records and insurance information easily to any doctor, app, or service they want.",
    t3b: [
      0.964, 0.969, 0.971, 0.96, 0.967, 0.813, 0.952, 0.958, 0.957, 0.942,
      0.979, 0.978, 0.937, 0.928, 0.937, 0.982,
    ],
    a: 0.9575,
  },
  {
    v: "PRO_MARRIAGE",
    ty: "ATT",
    t: "Government should offer financial incentives for married couples to have and raise children in stable families.",
    t3b: [
      0.472, 0.307, 0.378, 0.455, 0.328, 0.44, 0.575, 0.484, 0.336, 0.52, 0.214,
      0.441, 0.274, 0.383, 0.243, 0.241,
    ],
    a: 0.356,
  },
  {
    v: "MED_LIBERTY",
    ty: "ATT",
    t: "Mandating any medical treatment violates personal liberty.",
    t3b: [
      0.629, 0.69, 0.707, 0.833, 0.764, 0.606, 0.921, 0.696, 0.842, 0.839,
      0.264, 0.552, 0.501, 0.436, 0.371, 0.295,
    ],
    a: 0.5718,
  },
  {
    v: "PHARMA_IP",
    ty: "ATT",
    t: "Pharma companies abuse the patent system to prevent competition and delay generic drugs.",
    t3b: [
      0.742, 0.76, 0.651, 0.787, 0.917, 0.757, 0.807, 0.663, 0.889, 0.823,
      0.908, 0.754, 0.837, 0.697, 0.716, 0.768,
    ],
    a: 0.7839,
  },
  {
    v: "GENDER",
    ty: "ATT",
    t: "Medical treatments that permanently alter a minor's sex characteristics should be restricted until the patient reaches adulthood.",
    t3b: [
      0.93, 0.951, 0.929, 0.965, 0.905, 0.903, 0.953, 0.87, 0.965, 0.962, 0.414,
      0.713, 0.766, 0.795, 0.757, 0.411,
    ],
    a: 0.7695,
  },
  {
    v: "FLUORIDE",
    ty: "ATT",
    t: "Fluoride should be removed from tap water.",
    t3b: [
      0.344, 0.283, 0.261, 0.511, 0.31, 0.447, 0.667, 0.519, 0.455, 0.633,
      0.084, 0.248, 0.197, 0.221, 0.177, 0.09,
    ],
    a: 0.2933,
  },
  {
    v: "BUILD_THAT",
    ty: "ATT",
    t: "Most breakthroughs in medicines are not made by pharmaceutical companies but are by scientists at NIH and universities.",
    t3b: [
      0.42, 0.381, 0.335, 0.344, 0.537, 0.461, 0.456, 0.465, 0.518, 0.539, 0.9,
      0.79, 0.683, 0.644, 0.573, 0.814,
    ],
    a: 0.6025,
  },
  {
    v: "WOKE",
    ty: "ATT",
    t: 'Health care companies focus too much on woke capitalism issues like "ESG" (environmental, social and governance) and "DEI" (diversity, equity and inclusion).',
    t3b: [
      0.766, 0.729, 0.769, 0.823, 0.694, 0.54, 0.805, 0.643, 0.802, 0.812,
      0.065, 0.263, 0.242, 0.397, 0.295, 0.122,
    ],
    a: 0.4695,
  },
  {
    v: "RED_MEAT",
    ty: "ATT",
    t: "Red meat is healthier than plant-based protein for most people.",
    t3b: [
      0.538, 0.502, 0.531, 0.682, 0.462, 0.503, 0.726, 0.621, 0.615, 0.729,
      0.13, 0.303, 0.247, 0.318, 0.312, 0.175,
    ],
    a: 0.408,
  },
  {
    v: "BODY_SANCTITY",
    ty: "ATT",
    t: "I would feel deeply uncomfortable if medical research used human body parts in ways I consider disrespectful.",
    t3b: [
      0.737, 0.637, 0.64, 0.787, 0.695, 0.684, 0.849, 0.727, 0.74, 0.746, 0.314,
      0.711, 0.568, 0.583, 0.479, 0.472,
    ],
    a: 0.6129,
  },
  {
    v: "AI_REG",
    ty: "ATT",
    t: "Artificial intelligence systems that diagnose disease ought to be regulated with the same strict standards as traditional medical devices.",
    t3b: [
      0.865, 0.837, 0.871, 0.93, 0.935, 0.821, 0.918, 0.73, 0.917, 0.895, 0.93,
      0.933, 0.849, 0.865, 0.866, 0.937,
    ],
    a: 0.8928,
  },
  {
    v: "MRNA",
    ty: "ATT",
    t: "The science behind new therapies, like mRNA used in the Covid vaccines, has not been fully tested or proven safe.",
    t3b: [
      0.576, 0.551, 0.54, 0.76, 0.562, 0.559, 0.889, 0.688, 0.747, 0.803, 0.106,
      0.3, 0.306, 0.309, 0.204, 0.117,
    ],
    a: 0.4317,
  },
  {
    v: "NATURAL_ORDER",
    ty: "ATT",
    t: "Even if no one is harmed, practices that go against the natural order of the human body are morally wrong.",
    t3b: [
      0.683, 0.551, 0.642, 0.767, 0.514, 0.649, 0.825, 0.692, 0.632, 0.721,
      0.129, 0.405, 0.373, 0.427, 0.286, 0.183,
    ],
    a: 0.4684,
  },
  {
    v: "VAX_SAFETY",
    ty: "ATT",
    t: "Vaccines may do more harm than good, potentially causing other health problems.",
    t3b: [
      0.293, 0.189, 0.262, 0.454, 0.244, 0.408, 0.663, 0.494, 0.469, 0.678,
      0.074, 0.215, 0.132, 0.233, 0.138, 0.08,
    ],
    a: 0.2676,
  },
  {
    v: "OPIOIDS",
    ty: "ATT",
    t: "Big pharma is primarily responsible for the opioid epidemic.",
    t3b: [
      0.467, 0.544, 0.42, 0.584, 0.732, 0.565, 0.719, 0.547, 0.783, 0.763,
      0.919, 0.72, 0.759, 0.578, 0.551, 0.705,
    ],
    a: 0.6712,
  },
  {
    v: "EXPERIMENTAL_RX",
    ty: "ATT",
    t: "Terminally ill patients should have automatic access to experimental drugs once Phase I testing shows they are safe.",
    t3b: [
      0.908, 0.899, 0.915, 0.919, 0.946, 0.789, 0.891, 0.86, 0.89, 0.865, 0.958,
      0.915, 0.836, 0.885, 0.771, 0.947,
    ],
    a: 0.8965,
  },
  {
    v: "CLINICAL_TRIALS",
    ty: "ATT",
    t: "Clinical trial research gets hidden and misrepresented regularly.",
    t3b: [
      0.567, 0.542, 0.525, 0.667, 0.656, 0.714, 0.81, 0.631, 0.679, 0.774,
      0.393, 0.488, 0.516, 0.377, 0.346, 0.294,
    ],
    a: 0.5176,
  },
  {
    v: "NATUROPATHIC",
    ty: "ATT",
    t: "Herbal and naturopathic remedies can be just as effective as pharmaceuticals for many long-term illnesses",
    t3b: [
      0.445, 0.411, 0.366, 0.549, 0.484, 0.526, 0.761, 0.676, 0.605, 0.753,
      0.258, 0.432, 0.41, 0.446, 0.29, 0.222,
    ],
    a: 0.4367,
  },
  {
    v: "SDOH",
    ty: "ATT",
    t: "Addressing housing, food and other social drivers of health should receive higher priority than paying hospitals for new high-tech procedures",
    t3b: [
      0.443, 0.419, 0.353, 0.449, 0.596, 0.62, 0.717, 0.611, 0.659, 0.594,
      0.833, 0.792, 0.714, 0.604, 0.498, 0.69,
    ],
    a: 0.6211,
  },
  {
    v: "UNION_PLAN",
    ty: "POL",
    t: "Union health plans that workers fought for should be protected.",
    t3b: [
      0.711, 0.614, 0.584, 0.592, 0.76, 0.712, 0.662, 0.659, 0.663, 0.633,
      0.956, 0.951, 0.861, 0.781, 0.757, 0.96,
    ],
    a: 0.7744,
  },
  {
    v: "MED_NEGOT",
    ty: "POL",
    t: "Medicare should negotiate prescription",
    t3b: [
      0.728, 0.678, 0.607, 0.659, 0.71, 0.675, 0.728, 0.592, 0.716, 0.638,
      0.851, 0.779, 0.685, 0.776, 0.663, 0.814,
    ],
    a: 0.7239,
  },
  {
    v: "WORK_REQ",
    ty: "POL",
    t: "Medicaid should require able",
    t3b: [
      0.905, 0.875, 0.86, 0.904, 0.814, 0.675, 0.884, 0.722, 0.849, 0.788,
      0.358, 0.576, 0.564, 0.665, 0.621, 0.409,
    ],
    a: 0.6693,
  },
  {
    v: "MANDATE_POLICY",
    ty: "POL",
    t: "Public health rules for future pandemics should rely on natural immunity status rather than vaccine mandates.",
    t3b: [
      0.503, 0.467, 0.469, 0.644, 0.393, 0.476, 0.785, 0.583, 0.565, 0.686,
      0.121, 0.262, 0.187, 0.289, 0.192, 0.132,
    ],
    a: 0.3676,
  },
  {
    v: "NIH_FUND",
    ty: "POL",
    t: "Budgets for NIH and CDC should be increased, not cut.",
    t3b: [
      0.375, 0.298, 0.275, 0.18, 0.385, 0.447, 0.237, 0.367, 0.286, 0.168,
      0.937, 0.823, 0.66, 0.706, 0.771, 0.955,
    ],
    a: 0.5668,
  },
  {
    v: "MA",
    ty: "POL",
    t: "Medicare Advantage should be protected from funding cuts.",
    t3b: [
      0.715, 0.686, 0.681, 0.636, 0.721, 0.643, 0.743, 0.757, 0.733, 0.708,
      0.938, 0.913, 0.826, 0.797, 0.824, 0.936,
    ],
    a: 0.7947,
  },
  {
    v: "EARLY_ACCESS",
    ty: "POL",
    t: "Terminally ill patients should get automatic access to experimental drugs once Phase I safety is shown.",
    t3b: [
      0.884, 0.86, 0.884, 0.888, 0.903, 0.794, 0.867, 0.886, 0.864, 0.828,
      0.971, 0.895, 0.773, 0.857, 0.74, 0.923,
    ],
    a: 0.8718,
  },
  {
    v: "DATA_OWNERSHIP",
    ty: "POL",
    t: "Patients should own and be able to profit from their own personal health",
    t3b: [
      0.657, 0.659, 0.653, 0.635, 0.655, 0.585, 0.736, 0.664, 0.64, 0.658, 0.83,
      0.76, 0.666, 0.689, 0.65, 0.785,
    ],
    a: 0.7014,
  },
  {
    v: "LONGEVITY_POLICY",
    ty: "POL",
    t: "Public policy should support research aimed at extending the human lifespan beyond 120 years.",
    t3b: [
      0.275, 0.201, 0.223, 0.211, 0.195, 0.445, 0.339, 0.395, 0.214, 0.203,
      0.299, 0.461, 0.234, 0.378, 0.223, 0.381,
    ],
    a: 0.2953,
  },
  {
    v: "GMO_LABEL",
    ty: "POL",
    t: "Foods containing genetically modified ingredients should carry warning labels.",
    t3b: [
      0.812, 0.776, 0.75, 0.889, 0.783, 0.806, 0.933, 0.826, 0.903, 0.873,
      0.853, 0.909, 0.847, 0.817, 0.791, 0.837,
    ],
    a: 0.8435,
  },
  {
    v: "WHO_POLICY",
    ty: "POL",
    t: "The United States should leave the World Health Organization if it threatens national sovereignty over health policy.",
    t3b: [
      0.649, 0.609, 0.665, 0.794, 0.52, 0.476, 0.838, 0.654, 0.628, 0.744,
      0.076, 0.256, 0.164, 0.27, 0.211, 0.128,
    ],
    a: 0.4121,
  },
  {
    v: "HEALTH_DISC",
    ty: "POL",
    t: "Health insurance should cost less for people who take steps to stay healthy.",
    t3b: [
      0.808, 0.872, 0.801, 0.797, 0.735, 0.705, 0.821, 0.79, 0.866, 0.78, 0.815,
      0.818, 0.717, 0.786, 0.781, 0.759,
    ],
    a: 0.7944,
  },
  {
    v: "MEDICAID",
    ty: "POL",
    t: "Medicaid should be protected from budget cuts.",
    t3b: [
      0.618, 0.52, 0.518, 0.496, 0.717, 0.654, 0.53, 0.722, 0.634, 0.658, 0.989,
      0.978, 0.854, 0.873, 0.824, 0.977,
    ],
    a: 0.7661,
  },
  {
    v: "RURAL_SUBSIDY",
    ty: "POL",
    t: "The federal government should subsidize rural hospitals, even if that increases overall spending.",
    t3b: [
      0.583, 0.429, 0.48, 0.36, 0.551, 0.425, 0.386, 0.447, 0.467, 0.343, 0.931,
      0.826, 0.665, 0.707, 0.7, 0.897,
    ],
    a: 0.63,
  },
  {
    v: "GENDER_CARE",
    ty: "POL",
    t: "Insurance should be required to cover gender",
    t3b: [
      0.185, 0.172, 0.093, 0.069, 0.094, 0.319, 0.175, 0.243, 0.087, 0.095,
      0.844, 0.582, 0.192, 0.317, 0.266, 0.766,
    ],
    a: 0.3479,
  },
  {
    v: "NATAL_POLICY",
    ty: "POL",
    t: "Government should offer tax bonuses or cash allowances to married couples who have children.",
    t3b: [
      0.487, 0.381, 0.359, 0.457, 0.391, 0.454, 0.553, 0.508, 0.389, 0.499,
      0.369, 0.543, 0.312, 0.401, 0.284, 0.348,
    ],
    a: 0.4095,
  },
  {
    v: "IMMIG",
    ty: "POL",
    t: "Immigration policy should protect American health care jobs and workers.",
    t3b: [
      0.726, 0.715, 0.806, 0.78, 0.765, 0.547, 0.806, 0.659, 0.823, 0.788,
      0.796, 0.826, 0.654, 0.79, 0.709, 0.829,
    ],
    a: 0.7684,
  },
  {
    v: "MENTAL1",
    ty: "POL",
    t: "The government should expand funding for community",
    t3b: [
      0.458, 0.308, 0.306, 0.31, 0.414, 0.436, 0.331, 0.376, 0.397, 0.29, 0.949,
      0.89, 0.665, 0.673, 0.615, 0.93,
    ],
    a: 0.5933,
  },
  {
    v: "MENTAL2",
    ty: "POL",
    t: "Local governments should be allowed to mandate treatment for homeless individuals with severe mental illness or addiction.",
    t3b: [
      0.611, 0.511, 0.496, 0.507, 0.589, 0.526, 0.64, 0.559, 0.555, 0.489,
      0.767, 0.771, 0.567, 0.701, 0.594, 0.774,
    ],
    a: 0.6284,
  },
  {
    v: "M4A",
    ty: "POL",
    t: "Health insurance should be provided through a single national health insurance system run by the government.",
    t3b: [
      0.239, 0.223, 0.173, 0.144, 0.286, 0.47, 0.268, 0.406, 0.268, 0.244,
      0.815, 0.592, 0.402, 0.507, 0.358, 0.667,
    ],
    a: 0.4242,
  },
];

// ─── EXPERIENTIAL DATA ───────────────────────────────────────────────────────
export const EXP_DATA = [
  {
    l: "Any UM Experience",
    v: [
      0.211, 0.129, 0.147, 0.117, 0.182, 0.24, 0.204, 0.201, 0.184, 0.184,
      0.204, 0.242, 0.239, 0.196, 0.221, 0.153,
    ],
  },
  {
    l: "Claim Denied",
    v: [
      0.075, 0.074, 0.118, 0.095, 0.109, 0.14, 0.104, 0.119, 0.148, 0.156,
      0.152, 0.19, 0.154, 0.13, 0.149, 0.12,
    ],
  },
  {
    l: "Prior Auth Delay",
    v: [
      0.152, 0.1, 0.066, 0.09, 0.158, 0.184, 0.147, 0.18, 0.088, 0.113, 0.123,
      0.162, 0.192, 0.131, 0.156, 0.097,
    ],
  },
  {
    l: "Surprise Bill",
    v: [
      0.248, 0.261, 0.249, 0.23, 0.287, 0.283, 0.275, 0.326, 0.302, 0.329,
      0.316, 0.31, 0.276, 0.226, 0.268, 0.202,
    ],
  },
  {
    l: "Hospital Closure",
    v: [
      0.077, 0.051, 0.041, 0.042, 0.016, 0.118, 0.027, 0.115, 0.06, 0.097, 0.07,
      0.05, 0.026, 0.065, 0.079, 0.04,
    ],
  },
  {
    l: "Telehealth Used",
    v: [
      0.278, 0.292, 0.346, 0.233, 0.332, 0.313, 0.308, 0.272, 0.261, 0.272,
      0.426, 0.36, 0.289, 0.328, 0.295, 0.348,
    ],
  },
  {
    l: "Recent Diagnosis",
    v: [
      0.117, 0.128, 0.141, 0.127, 0.123, 0.152, 0.127, 0.172, 0.128, 0.144,
      0.164, 0.155, 0.132, 0.136, 0.235, 0.144,
    ],
  },
];

// ─── INSURANCE COVERAGE DATA ────────────────────────────────────────────────
export const INSURANCE_TYPE = [
  {
    l: "Employer",
    v: [
      0.398, 0.522, 0.512, 0.434, 0.511, 0.404, 0.473, 0.438, 0.415, 0.479,
      0.55, 0.426, 0.465, 0.467, 0.416, 0.403,
    ],
  },
  {
    l: "Individual/Exchange",
    v: [
      0.165, 0.109, 0.125, 0.137, 0.114, 0.22, 0.153, 0.15, 0.167, 0.145, 0.11,
      0.141, 0.151, 0.142, 0.168, 0.148,
    ],
  },
  {
    l: "Medicaid",
    v: [
      0.096, 0.051, 0.032, 0.068, 0.083, 0.149, 0.122, 0.188, 0.088, 0.137,
      0.133, 0.179, 0.18, 0.166, 0.075, 0.113,
    ],
  },
  {
    l: "Medicare (traditional)",
    v: [
      0.156, 0.089, 0.075, 0.106, 0.082, 0.083, 0.068, 0.042, 0.081, 0.072,
      0.054, 0.05, 0.045, 0.078, 0.137, 0.105,
    ],
  },
  {
    l: "Medicare Advantage",
    v: [
      0.1, 0.118, 0.194, 0.155, 0.129, 0.123, 0.12, 0.118, 0.151, 0.081, 0.078,
      0.138, 0.063, 0.107, 0.146, 0.161,
    ],
  },
  {
    l: "Other",
    v: [
      0.085, 0.112, 0.061, 0.1, 0.08, 0.021, 0.064, 0.064, 0.098, 0.086, 0.075,
      0.067, 0.097, 0.04, 0.057, 0.069,
    ],
  },
];
export const GOP_PODS = [
  {
    l: "Joe Rogan",
    v: [
      0.165, 0.194, 0.173, 0.198, 0.146, 0.22, 0.152, 0.145, 0.156, 0.148,
      0.039, 0.079, 0.084, 0.095, 0.083, 0.024,
    ],
  },
  {
    l: "Dan Bongino",
    v: [
      0.169, 0.048, 0.077, 0.107, 0.029, 0.077, 0.073, 0.053, 0.064, 0.103, 0,
      0, 0, 0, 0, 0,
    ],
  },
  {
    l: "Charlie Kirk",
    v: [
      0.188, 0.088, 0.075, 0.177, 0.044, 0.135, 0.11, 0.074, 0.102, 0.163, 0, 0,
      0, 0, 0, 0,
    ],
  },
  {
    l: "Megyn Kelly",
    v: [
      0.186, 0.08, 0.069, 0.109, 0.032, 0.088, 0.107, 0.081, 0.043, 0.098, 0, 0,
      0, 0, 0, 0,
    ],
  },
  {
    l: "Daily Wire",
    v: [
      0.09, 0.094, 0.069, 0.088, 0.035, 0.08, 0.078, 0.085, 0.063, 0.065, 0, 0,
      0, 0, 0, 0,
    ],
  },
  {
    l: "Mark Levin",
    v: [
      0.102, 0.048, 0.113, 0.122, 0.021, 0.045, 0.074, 0.06, 0.063, 0.055, 0, 0,
      0, 0, 0, 0,
    ],
  },
  {
    l: "Matt Walsh",
    v: [
      0.093, 0.072, 0.05, 0.073, 0.005, 0.027, 0.04, 0.078, 0.072, 0.059, 0, 0,
      0, 0, 0, 0,
    ],
  },
  {
    l: "Jordan Peterson",
    v: [
      0.047, 0.025, 0.061, 0.047, 0.027, 0.097, 0.059, 0.031, 0.054, 0.033, 0,
      0, 0, 0, 0, 0,
    ],
  },
  {
    l: "Del Bigtree",
    v: [
      0.009, 0.013, 0.006, 0.005, 0.009, 0.011, 0.087, 0.044, 0.009, 0.086, 0,
      0, 0, 0, 0, 0,
    ],
  },
];
export const DEM_PODS = [
  {
    l: "Rachel Maddow",
    v: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.127, 0.07, 0.048, 0.06, 0.028, 0.114],
  },
  {
    l: "NPR Up First",
    v: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.097, 0.048, 0.042, 0.063, 0.055, 0.067],
  },
  {
    l: "Joe Rogan",
    v: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.039, 0.079, 0.084, 0.095, 0.083, 0.024],
  },
  {
    l: "David Pakman",
    v: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.07, 0.029, 0.018, 0.041, 0.023, 0.043],
  },
  {
    l: "Pod Save America",
    v: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.067, 0.065, 0.01, 0.057, 0.069, 0.1],
  },
  {
    l: "The Daily (NYT)",
    v: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063, 0.045, 0.04, 0.073, 0.064, 0.053],
  },
  {
    l: "Majority Report",
    v: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.042, 0.045, 0.005, 0.008, 0.024, 0.029],
  },
  {
    l: "Ezra Klein",
    v: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.036, 0.019, 0.003, 0.029, 0.018, 0.032],
  },
];
export const NEWS = [
  {
    l: "Fox News",
    v: [
      0.53, 0.605, 0.602, 0.564, 0.448, 0.495, 0.538, 0.293, 0.511, 0.454,
      0.026, 0.148, 0.126, 0.202, 0.136, 0.075,
    ],
  },
  {
    l: "CNN",
    v: [
      0.172, 0.172, 0.167, 0.113, 0.194, 0.286, 0.171, 0.223, 0.142, 0.13,
      0.379, 0.506, 0.359, 0.488, 0.453, 0.537,
    ],
  },
  {
    l: "MSNBC",
    v: [
      0.071, 0.08, 0.071, 0.074, 0.17, 0.223, 0.089, 0.099, 0.11, 0.09, 0.326,
      0.32, 0.216, 0.258, 0.222, 0.432,
    ],
  },
  {
    l: "NYT",
    v: [
      0.11, 0.114, 0.072, 0.058, 0.09, 0.187, 0.131, 0.146, 0.11, 0.155, 0.305,
      0.235, 0.2, 0.217, 0.245, 0.322,
    ],
  },
  {
    l: "WSJ",
    v: [
      0.203, 0.137, 0.143, 0.126, 0.156, 0.125, 0.116, 0.137, 0.132, 0.111,
      0.131, 0.125, 0.127, 0.133, 0.208, 0.163,
    ],
  },
  {
    l: "Newsmax",
    v: [
      0.149, 0.171, 0.139, 0.237, 0.084, 0.215, 0.208, 0.1, 0.204, 0.224, 0.0,
      0.015, 0.013, 0.031, 0.019, 0.043,
    ],
  },
  {
    l: "Politico",
    v: [
      0.083, 0.045, 0.031, 0.047, 0.05, 0.121, 0.037, 0.059, 0.047, 0.046,
      0.176, 0.105, 0.075, 0.092, 0.123, 0.16,
    ],
  },
  {
    l: "Breitbart",
    v: [
      0.076, 0.029, 0.037, 0.069, 0.032, 0.096, 0.053, 0.021, 0.069, 0.122,
      0.001, 0.006, 0.003, 0.0, 0.01, 0.005,
    ],
  },
  {
    l: "The Atlantic",
    v: [
      0.025, 0.012, 0.023, 0.031, 0.015, 0.135, 0.027, 0.092, 0.028, 0.036,
      0.148, 0.096, 0.045, 0.058, 0.088, 0.153,
    ],
  },
];

// ─── WELLNESS ORIENTATION DATA ───────────────────────────────────────────────
export const WELL_ORIENT = [
  {
    l: "US much less healthy than others",
    v: [
      0.121, 0.096, 0.081, 0.229, 0.166, 0.098, 0.261, 0.134, 0.204, 0.349,
      0.481, 0.312, 0.321, 0.148, 0.19, 0.234,
    ],
  },
  {
    l: "Nutrition access barrier",
    v: [
      0.25, 0.204, 0.177, 0.178, 0.4, 0.286, 0.146, 0.394, 0.287, 0.188, 0.269,
      0.407, 0.298, 0.264, 0.291, 0.361,
    ],
  },
  {
    l: "Culture doesn't encourage health",
    v: [
      0.452, 0.378, 0.651, 0.43, 0.269, 0.314, 0.238, 0.25, 0.292, 0.207, 0.402,
      0.237, 0.312, 0.481, 0.573, 0.474,
    ],
  },
  {
    l: "Big Pharma causing chronic disease",
    v: [
      0.183, 0.127, 0.093, 0.274, 0.094, 0.173, 0.238, 0.122, 0.263, 0.305,
      0.191, 0.125, 0.168, 0.123, 0.057, 0.102,
    ],
  },
  {
    l: "Big Food selling unhealthy products",
    v: [
      0.25, 0.356, 0.167, 0.236, 0.279, 0.237, 0.296, 0.302, 0.251, 0.297,
      0.399, 0.249, 0.359, 0.283, 0.364, 0.263,
    ],
  },
  {
    l: "Food additives harming health",
    v: [
      0.544, 0.563, 0.495, 0.557, 0.576, 0.429, 0.57, 0.529, 0.521, 0.574,
      0.369, 0.557, 0.499, 0.408, 0.428, 0.335,
    ],
  },
  {
    l: "GMOs harming long-term health",
    v: [
      0.173, 0.151, 0.07, 0.072, 0.202, 0.144, 0.264, 0.168, 0.153, 0.187,
      0.055, 0.115, 0.086, 0.083, 0.047, 0.04,
    ],
  },
];
export const WELL_LIFE = [
  {
    l: "Buy organic food regularly",
    v: [
      0.322, 0.225, 0.276, 0.339, 0.253, 0.305, 0.427, 0.482, 0.343, 0.51, 0.48,
      0.395, 0.416, 0.343, 0.439, 0.493,
    ],
  },
  {
    l: "Take dietary supplements",
    v: [
      0.751, 0.771, 0.767, 0.787, 0.714, 0.703, 0.718, 0.528, 0.763, 0.735,
      0.731, 0.727, 0.7, 0.619, 0.691, 0.793,
    ],
  },
  {
    l: "Follow a named diet plan",
    v: [
      0.158, 0.107, 0.099, 0.125, 0.11, 0.174, 0.225, 0.234, 0.08, 0.177, 0.128,
      0.148, 0.136, 0.09, 0.142, 0.149,
    ],
  },
  {
    l: "Go to a gym regularly",
    v: [
      0.293, 0.297, 0.32, 0.269, 0.24, 0.422, 0.259, 0.268, 0.291, 0.321, 0.253,
      0.249, 0.302, 0.255, 0.377, 0.277,
    ],
  },
  {
    l: "Wear a fitness tracker",
    v: [
      0.408, 0.389, 0.42, 0.393, 0.417, 0.362, 0.339, 0.405, 0.314, 0.34, 0.396,
      0.423, 0.435, 0.385, 0.397, 0.4,
    ],
  },
  {
    l: "Meditate or pray for health",
    v: [
      0.492, 0.334, 0.463, 0.639, 0.321, 0.34, 0.594, 0.457, 0.431, 0.454,
      0.328, 0.588, 0.422, 0.337, 0.399, 0.292,
    ],
  },
  {
    l: "Read ingredient labels",
    v: [
      0.587, 0.588, 0.607, 0.697, 0.577, 0.584, 0.717, 0.66, 0.662, 0.75, 0.72,
      0.66, 0.651, 0.557, 0.672, 0.717,
    ],
  },
  {
    l: "Use alternative medicine",
    v: [
      0.046, 0.071, 0.061, 0.096, 0.025, 0.179, 0.13, 0.179, 0.047, 0.148,
      0.049, 0.068, 0.098, 0.055, 0.149, 0.078,
    ],
  },
  {
    l: "Follow nutrition social media",
    v: [
      0.139, 0.116, 0.117, 0.15, 0.159, 0.346, 0.236, 0.23, 0.147, 0.233, 0.125,
      0.205, 0.127, 0.155, 0.229, 0.131,
    ],
  },
  {
    l: "Spend money on alternative therapies",
    v: [
      0.126, 0.105, 0.158, 0.211, 0.157, 0.252, 0.205, 0.235, 0.208, 0.218,
      0.174, 0.209, 0.191, 0.097, 0.153, 0.134,
    ],
  },
];

// ─── HBIS INDEX (avg count of health behavior activities) ───────────────────
export const HBIS_SUM = [
  3.32, 3.0, 3.29, 3.71, 2.97, 3.67, 3.85, 3.68, 3.29, 3.88, 3.38, 3.67, 3.48,
  2.89, 3.65, 3.46,
];


// ─── CURATED DISCRIMINATING ITEMS PER SEGMENT ───────────────────────────────
export const SEGMENT_BELIEFS = {
  TSP: ["RURAL_SUBSIDY", "OPIOIDS", "WORK_REQ", "CLINICIAN_AUTONOMY"],
  CEC: ["EQUITY_FUNDING", "MEDICAID", "VAX_SAFETY", "HEALTH_DISC"],
  TC: ["WOKE", "GENDER", "PROFIT", "OPIOIDS"],
  WE: ["WHO_POLICY", "MANDATE_POLICY", "CLINICIAN_AUTONOMY", "IMMIG"],
  PP: ["PROFIT", "PHARMA_IP", "INFLUENCE", "OPIOIDS"],
  HF: ["AI_REG", "DATA_PORT", "GENDER_CARE", "LONGEVITY_POLICY"],
  PFF: ["RED_MEAT", "MANDATE_POLICY", "FLUORIDE", "ELITES"],
  HHN: ["IMMUNITY", "NATUROPATHIC", "REFUSAL", "MRNA"],
  MFL: ["MED_LIBERTY", "GENDER_CARE", "EQUITY_FUNDING", "NIH_FUND"],
  VS: ["VAX_SAFETY", "MANDATE_POLICY", "ELITES", "MRNA"],
  UCP: ["GENDER_CARE", "MEDICAID", "MENTAL1", "INFLUENCE"],
  FJP: ["EQUITY_FUNDING", "NATAL_POLICY", "VAX_SAFETY", "SDOH"],
  HCP: ["PROFIT", "UNION_PLAN", "BUILD_THAT", "OPIOIDS"],
  HAD: ["LONGEVITY_POLICY", "INDIVID_RESP", "PROFIT", "AI_REG"],
  HCI: ["NIH_FUND", "MRNA", "EXPERIMENTAL_RX", "M4A"],
  GHI: ["WOKE", "WHO_POLICY", "ELITES", "GENDER_CARE"],
};

export const NICE_NAMES = {
  CHOICE: "Health Autonomy",
  PROFIT: "Pharma Profits Over Patients",
  INDIVID_RESP: "Individual Responsibility",
  IMMUNITY: "Natural Immunity",
  ELITES: "Anti-Expert Sentiment",
  EQUITY_FUNDING: "Health Equity Funding",
  REFUSAL: "Right to Refuse Treatment",
  INFLUENCE: "Corporate Influence",
  CLINICIAN_AUTONOMY: "Clinician Conscience",
  DATA_PORT: "Data Portability",
  MED_LIBERTY: "Medical Liberty",
  GENDER: "Minor Gender Restrictions",
  WOKE: "Anti-Woke / ESG",
  MRNA: "mRNA Safety Doubts",
  FLUORIDE: "Fluoride Removal",
  VAX_SAFETY: "Vaccine Safety Doubts",
  OPIOIDS: "Pharma Opioid Blame",
  RWE: "Real-World Evidence",
  BODY_SANCTITY: "Body Sanctity",
  AI_REG: "AI Regulation",
  NATURAL_ORDER: "Natural Order",
  BUILD_THAT: "NIH Built Breakthroughs",
  PRO_MARRIAGE: "Pro-Marriage Incentives",
  PHARMA_IP: "Patent Abuse",
  RED_MEAT: "Red Meat Healthier",
  CLINICAL_TRIALS: "Clinical Trial Distrust",
  NATUROPATHIC: "Naturopathic Remedies",
  SDOH: "Social Determinants",
  EXPERIMENTAL_RX: "Right to Try",
  M4A: "Medicare for All",
  WORK_REQ: "Work Requirements",
  NIH_FUND: "NIH / CDC Funding",
  ESI_REQ: "Employer Insurance Mandate",
  PUBLIC_OPTION: "Public Option",
  WHO_POLICY: "Leave the WHO",
  MEDICAID: "Protect Medicaid",
  GENDER_CARE: "Gender-Affirming Coverage",
  GMO_LABEL: "GMO Labeling",
  MENTAL1: "Community Mental Health Funding",
  MANDATE_POLICY: "Pandemic Immunity Policy",
  UNION_PLAN: "Protect Union Plans",
  MED_NEGOT: "Medicare Drug Negotiation",
  ANTI_ESI: "End Employer Insurance",
  MA: "Protect Medicare Advantage",
  EARLY_ACCESS: "Terminally Ill Access",
  DATA_OWNERSHIP: "Health Data Ownership",
  LONGEVITY_POLICY: "Longevity Research",
  HEALTH_DISC: "Healthy Behavior Discount",
  RURAL_SUBSIDY: "Rural Hospital Subsidies",
  NATAL_POLICY: "Pro-Natalist Policy",
  IMMIG: "Immigration Health Jobs",
  MENTAL2: "Mandated Mental Health Treatment",
};


export const segments = [
    {
      id: "trust-science",
      abbr: "TSP",
      name: "Trust the Science Pragmatists",
      dominantRegions: [
        { id: "east-south-central", name: "E. South Central", percent: 12.1 },
        { id: "west-south-central", name: "W. South Central", percent: 29.4 },
      ],
    },
    {
      id: "consumer-empowerment",
      abbr: "CEC",
      name: "Consumer Empowerment Champions",
      dominantRegions: [{ id: "pacific", name: "Pacific", percent: 17.3 }],
    },
    {
      id: "traditional-conservatives",
      abbr: "TC",
      name: "Traditional Conservatives",
      dominantRegions: [
        { id: "east-north-central", name: "E. North Central", percent: 19.7 },
      ],
    },
    {
      id: "wellness-evangelists",
      abbr: "WE",
      name: "Wellness Evangelists",
      dominantRegions: [
        { id: "east-south-central", name: "E. South Central", percent: 8.3 },
        { id: "west-south-central", name: "W. South Central", percent: 16.7 },
      ],
    },
    {
      id: "price-populists",
      abbr: "PP",
      name: "Price Populists",
      dominantRegions: [
        { id: "middle-atlantic", name: "Middle Atlantic", percent: 15.1 },
        { id: "mountain", name: "Mountain", percent: 12.6 },
      ],
    },
    {
      id: "health-futurists",
      abbr: "HF",
      name: "Health Futurists",
      dominantRegions: [
        { id: "west-north-central", name: "W. North Central", percent: 7.6 },
        { id: "pacific", name: "Pacific", percent: 16.4 },
      ],
    },
    {
      id: "paleo-freedom",
      abbr: "PFF",
      name: "Paleo Freedom Fighters",
      dominantRegions: [
        { id: "east-north-central", name: "E. North Central", percent: 17.0 },
        { id: "mountain", name: "Mountain", percent: 12.0 },
      ],
    },
    {
      id: "holistic-naturalists",
      abbr: "HHN",
      name: "Holistic Health Naturalists",
      dominantRegions: [
        { id: "east-north-central", name: "E. North Central", percent: 17.6 },
        { id: "south-atlantic", name: "South Atlantic", percent: 28.8 },
      ],
    },
    {
      id: "libertarians",
      abbr: "MFL",
      name: "Libertarians",
      dominantRegions: [
        { id: "south-atlantic", name: "South Atlantic", percent: 27.1 },
      ],
    },
    {
      id: "anti-vax",
      abbr: "VS",
      name: "Anti-Vax",
      dominantRegions: [
        { id: "new-england", name: "New England", percent: 5.4 },
        { id: "east-south-central", name: "E. South Central", percent: 8.4 },
      ],
    },
    {
      id: "universal-care",
      abbr: "UCP",
      name: "Universal Care Progressives",
      dominantRegions: [
        { id: "mountain", name: "Mountain", percent: 14.6 },
        { id: "pacific", name: "Pacific", percent: 26.6 },
      ],
    },
    {
      id: "faith-justice",
      abbr: "FJP",
      name: "Faith & Justice Progressives",
      dominantRegions: [
        { id: "west-south-central", name: "W. South Central", percent: 12.4 },
        { id: "pacific", name: "Pacific", percent: 15.4 },
      ],
    },
    {
      id: "health-care-protectionists",
      abbr: "HCP",
      name: "Health Care Protectionists",
      dominantRegions: [{ id: "pacific", name: "Pacific", percent: 24.3 }],
    },
    {
      id: "health-abundance",
      abbr: "HAD",
      name: "Health Abundance Dems",
      dominantRegions: [
        { id: "middle-atlantic", name: "Middle Atlantic", percent: 14.6 },
        { id: "south-atlantic", name: "South Atlantic", percent: 31.2 },
      ],
    },
    {
      id: "incrementalists",
      abbr: "HCI",
      name: "Incrementalists",
      dominantRegions: [{ id: "pacific", name: "Pacific", percent: 32.8 }],
    },
    {
      id: "gh-institutionalists",
      abbr: "GHI",
      name: "GH Institutionalists",
      dominantRegions: [
        { id: "new-england", name: "New England", percent: 5.8 },
        { id: "east-north-central", name: "E. North Central", percent: 15.7 },
      ],
    },
  ];