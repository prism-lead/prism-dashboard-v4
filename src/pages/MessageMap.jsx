import { useState, useMemo } from "react";

// ─── MESSAGES ─────────────────────────────────────────────────
const MESSAGES = [
  { id:1, code:"AL_1", shortName:"American Can Lead", theme:"Leadership",
    control:"Investing in U.S. medicine manufacturing is part of America doing big things again, leading the world in the industries that matter most.",
    variants:{1:"It's time for America to do big things again—leading the world in medicine manufacturing, an industry that matters to every family paying healthcare bills.",2:"America doing big things again includes building medicine manufacturing here—where we can set our own standards and aren't dependent on foreign countries with different values.",3:"America doing big things again means leading in medicine manufacturing—an industry that matters for our families, our security, and our national strength.",5:"America used to do big things. Leading the world in medicine manufacturing is the kind of industry that matters—one that can deliver for working families, not just Wall Street.",6:"America doing big things again means taking the lead in medicine manufacturing—an industry that matters for families who want real control over their health choices.",7:"America must do big things again. Leading the world in medicine manufacturing is exactly the kind of high-stakes industry where American ambition should dominate.",9:"America doing big things again means building medicine manufacturing here—where patients have more choices and aren't dependent on foreign countries for their health options.",10:"America should do big things again—leading the world in medicine manufacturing, where scientific breakthroughs can reach patients in every community.",11:"America doing big things again must include tackling the biggest challenges in health care which can't happen if we lose our leadership in developing and making medicines here at home.",12:"America doing big things again must include leading in medicine manufacturing—an industry that matters for health, jobs, and strong communities.",13:"America doing big things again means leading in medicine manufacturing—an industry that matters to working families who built this country and deserve these jobs.",14:"America can and must do big things again—leading the world in medicine manufacturing can help us remain a global leader.",15:"America can do big things again by leading in medicine manufacturing—an industry that matters for stable jobs and the treatments Americans depend on.",16:"Investing in U.S. medicine manufacturing is part of America doing big things again and working to solve our most urgent global challenges."}},
  { id:2, code:"AL_2", shortName:"National Security", theme:"Security",
    control:"America must invent and make critical medicines at home; depending too much on foreign countries leaves us vulnerable in crises, conflicts, or trade disputes.",
    variants:{1:"When we depend on foreign countries for critical medicines, American patients are vulnerable in every crisis. We need domestic supply chains we can count on.",2:"Depending on foreign countries for critical medicines leaves American families vulnerable when crises hit. We need domestic production we can count on.",3:"Depending on foreign nations for critical medicines is a security risk. American families shouldn't be vulnerable to foreign supply disruptions during crises or conflicts.",5:"When crises hit, foreign medicine dependence means shortages and price spikes that crush working families. We can't be this vulnerable to overseas suppliers.",9:"Depending on foreign countries for critical medicines puts patients at risk. When supply chains fail, individuals lose the ability to make their own treatment decisions.",10:"Foreign dependence for critical medicines leaves us exposed during crises. Domestic manufacturing ensures reliable supply when communities need treatments most.",11:"Foreign dependence on critical medicines creates vulnerability that hits hardest when crises come. Domestic manufacturing protects all American patients—especially those with the least margin for error.",12:"Foreign dependence on medicines hits hardest in crises—and vulnerable communities suffer most from shortages. Domestic manufacturing protects all American families.",13:"Working families can't afford medicine shortages when crises hit. Foreign dependence is a vulnerability that puts the people who built this country at risk.",14:"America must invent and make critical medicines at home; depending too much on foreign countries leaves us vulnerable in crises, conflicts, or trade disputes.",16:"Foreign dependence on medicines creates cascading vulnerabilities for global health systems and patients here at home."}},
  { id:3, code:"AL_3", shortName:"China Competition", theme:"Security",
    control:"China is rapidly expanding its ability to develop and manufacture new medicines, and the U.S. risks falling behind a strategic competitor in a vital industry.",
    variants:{1:"China is racing to dominate medicine manufacturing while America falls behind. We can't let a strategic competitor control an industry that affects every patient.",3:"China is rapidly expanding its medicine industry while America risks falling behind. We cannot cede this vital sector to a communist regime that threatens our values.",5:"China is building medicine factories while American plants close. Corporate offshoring helped China gain ground—now working families pay the price.",9:"China is rapidly expanding medicine manufacturing while America falls behind. Dependence on an authoritarian regime is the opposite of medical freedom for American patients.",10:"China is investing heavily in medicine manufacturing and the U.S. is at risk of falling behind. We need to match their commitment to stay competitive in this vital science.",13:"China expands medicine manufacturing while American workers lose ground. A strategic competitor is winning because corporate decisions shipped our jobs overseas.",14:"China is building medicine manufacturing capacity while America falls behind. We can't build the future of healthcare here if a strategic competitor controls critical supply chains."}},
  { id:4, code:"AL_4", shortName:"US Global Leadership", theme:"Leadership",
    control:"America leads the world in developing and manufacturing new medicines, but leadership can shift quickly. Europe once led this industry and lost ground, and China is now racing to take the lead. The U.S. must treat this as a national priority to stay ahead.",
    variants:{1:"America leads in medicine today, but Europe once led too—and lost it. Staying ahead requires treating this industry as a national priority, not assuming leadership is permanent.",3:"America leads in medicine manufacturing, but leadership isn't guaranteed. Europe once dominated this industry and lost ground. We must make staying ahead a national priority.",5:"America leads in medicine now, but Europe lost its lead—jobs went elsewhere. If we don't make this a national priority, working families will watch another industry disappear.",9:"America leads in medicine, but Europe once led and lost ground. Maintaining leadership here means more options for patients—not fewer choices dictated by foreign suppliers.",10:"America leads in medicine, but Europe once led and lost ground. China is racing to catch up. Sustained investment in science and manufacturing is a national priority.",14:"America leads in medicine, but leadership shifts—Europe lost ground, China is racing. National priority means sustained capacity building, not complacency."}},
  { id:5, code:"AL_5", shortName:"Economic Growth", theme:"Economy",
    control:"Inventing and making new medicines here adds hundreds of billions to the U.S. economy—not just through corporate jobs, but through construction, housing, and the businesses that support it.",
    variants:{2:"Medicine manufacturing adds hundreds of billions to the economy—construction, housing, local businesses. Real economic benefits rooted in communities.",5:"Medicine manufacturing adds hundreds of billions to the economy—construction jobs, housing, local businesses. That's real money for working families, not just corporate balance sheets.",7:"Medicine manufacturing adds hundreds of billions to GDP—construction, housing, supporting businesses. This is the economic engine of a biotech-driven future.",13:"Medicine manufacturing adds hundreds of billions to the economy—construction, housing, local businesses. Real economic gains for working communities, not corporate shell games."}},
  { id:6, code:"AL_6", shortName:"Local Opportunity", theme:"Economy",
    control:"Making medicines in America creates good-paying jobs, supports small businesses, and helps transform local communities into vibrant places to live and work—the next generation of American opportunity.",
    variants:{2:"Making medicines in America creates good-paying jobs, supports small businesses, and transforms local communities—the kind of rooted prosperity that strengthens families.",5:"Medicine manufacturing means good-paying jobs, thriving small businesses, and transformed communities—local opportunity for working families.",10:"Medicine manufacturing creates good-paying jobs and supports small businesses, transforming communities—especially rural areas that need paths to the innovation economy.",12:"Medicine manufacturing creates good-paying jobs, supports small businesses, and transforms communities—opportunity that can reach neighborhoods historically left behind.",13:"Medicine manufacturing means good-paying jobs, small businesses, and transformed communities—the kind of local opportunity working families fought for and deserve."}},
  { id:7, code:"AL_7", shortName:"Pillar of US Mfg", theme:"Economy",
    control:"The U.S. biopharmaceutical industry is as important to American manufacturing as autos and aerospace—a high-tech sector that produces just as many high-paying, high-skill jobs across the country.",
    variants:{5:"Medicine manufacturing is as important as autos and aerospace—creating just as many high-paying, high-skill jobs that can help rebuild the American middle class.",7:"Biopharmaceutical manufacturing is as strategic as autos and aerospace—high-tech jobs in the sector that will define economic competition for the next century.",10:"Biopharmaceutical manufacturing rivals autos and aerospace—high-paying, high-skill jobs that bring scientific innovation to communities across the country.",13:"Medicine manufacturing is as important as autos and aerospace—high-paying, high-skill jobs that working people built and deserve to keep in America."}},
  { id:8, code:"AL_8", shortName:"Universities & Innovation", theme:"Innovation",
    control:"Research in American universities—in every state—drives new discoveries, creates thousands of biotech start-ups, and trains the next generation of scientists.",
    variants:{2:"Research at American universities in every state drives new discoveries, creates biotech startups, and trains scientists—homegrown innovation serving American communities.",7:"Universities in every state drive discoveries, launch thousands of startups, and train scientists—the innovation engine powering America's biotech dominance.",10:"Research at universities in every state drives discoveries, creates thousands of startups, and trains scientists—the pipeline that brings innovation to communities nationwide.",11:"Research at American universities in every state drives discoveries, creates startups, and trains scientists—public institutions generating innovation that benefits the whole country."}},
  { id:9, code:"AL_9", shortName:"STEM & High-Tech Mfg", theme:"Innovation",
    control:"Medicines are a form of advanced, high-tech manufacturing that America must prioritize if it wants to remain a competitive, innovation-driven economy.",
    variants:{1:"Medicines are advanced, high-tech manufacturing America must prioritize—a competitive industry that works best when innovation and consumer choice drive the market.",7:"Medicines are advanced, high-tech manufacturing America must absolutely prioritize—the innovation frontier that will define economic competition for the rest of the century.",9:"Medicines are advanced, high-tech manufacturing America must prioritize. A strong domestic industry gives patients more options—not dependence on distant suppliers.",10:"Medicines are advanced, high-tech manufacturing America must prioritize—the kind of innovation-driven industry that keeps us competitive and brings science to patients."}},
  { id:10, code:"AL_10", shortName:"Patients First", theme:"Patient",
    control:"When medicines are made in America, U.S. patients are more likely to get early and reliable access to the newest treatments and cures.",
    variants:{1:"When medicines are made in America, U.S. patients get early, reliable access to the newest treatments—putting consumers first, not foreign supply chains.",5:"When medicines are made here, American patients get early, reliable access—working families first, not wealthy foreigners or corporate-connected elites.",9:"When medicines are made in America, patients get earlier, more reliable access to new treatments—real choices available when you need them, not controlled by foreign supply chains.",10:"Domestic medicine manufacturing means U.S. patients get early, reliable access to the newest treatments—scientific breakthroughs reaching patients when they need them.",12:"American-made medicines should mean early, reliable access for all U.S. patients—especially underserved communities that have waited too long for equal access."}},
  { id:11, code:"AL_11", shortName:"Benefit for Americans", theme:"Patient",
    control:"Medicines will always be a major global industry, and policymakers should ensure that the jobs, investment, and economic benefits stay in the United States.",
    variants:{1:"Medicines are a global industry—policymakers must ensure jobs, investment, and benefits stay in America, where competitive markets can serve consumers.",5:"Medicine is a huge global industry—policymakers must fight to keep jobs, investment, and benefits here for working families, not let them flow to foreign shareholders.",9:"Medicines are a major global industry. Keeping jobs and investment in America means a domestic industry that gives patients options—not dependence on countries that don't respect individual freedom.",13:"Medicine is a global industry. Policymakers must ensure jobs, investment, and benefits stay here—protecting what American workers built.",14:"Medicine is a major global industry. Policymakers must keep jobs, investment, and benefits in America—building the capacity for healthcare abundance."}},
];

// ─── SEGMENTS (ordered: TSP CEC TC HF PP WE PFF HHN MFL VS | UCP FJP HCP GHI HAD HCI) ───
const SEGMENTS = [
  { id:1, code:"TSP", name:"TRUST THE SCIENCE PRAGMATISTS", party:"GOP", pop:2, tier:2,
    roi:0.88, highRoi:35, supporters:62, activation:49, influence:5,
    persuadability:[19,16,11,24,30],
    phrma:{p01:66.7,p02i:45,p02g:55,p03h:52,p03u:48,p04:78.8},
    prePost:{rank:[38.2,52.1],att1:[64.0,62.5],att2:[54.8,58.1],fav:[41.2,54.8]},
    demo:{male:"53%",medAge:54,nonwhite:"12%",hhi:"$99K",college:"39%",union:"6%",rural:"31%",cenDiv:"West South Central",cenPct:"29%",religion:"Other",relPct:"27%",pharmaTrust:3.71,corpTrust:3.98,govtTrust:4.26,m4a:"24%",vaxAvoid:"18%"},
    persona:{quote:"Free markets work best, but I defer to FDA and CDC experts on safety and innovation. I want solutions to improving access for rural America.",
      believe:"America must remain a leader in science and medicine. Rural patients deserve earlier access to innovation. Rural healthcare infrastructure is unraveling and government support is essential.",
      want:"Rural subsidies to stabilize hospitals. Faster FDA approvals, expanded right-to-try, strong NIH funding. Balance: accountability and transparency without undercutting research.",
      doWhat:"Vaccinate more than most GOP peers, trust hospitals and providers. Consistently elevate rural hospital access as a priority. Advocate for reforms balancing competition with public investment.",
      whoAre:"Predominantly white, male-leaning. Most rural GOP cluster—anchored in communities facing healthcare decline. Less religious than Traditional Conservatives, pragmatic in tone."}},
  { id:2, code:"CEC", name:"CONSUMER EMPOWERMENT CHAMPIONS", party:"GOP", pop:7, tier:1,
    roi:1.33, highRoi:64, supporters:80, activation:40, influence:0,
    persuadability:[26,36,21,14,3],
    phrma:{p01:42.1,p02i:62,p02g:38,p03h:38,p03u:62,p04:91.2},
    prePost:{rank:[44.1,62.3],att1:[68.2,67.0],att2:[58.4,64.9],fav:[39.5,58.1]},
    demo:{male:"61%",medAge:58,nonwhite:"8%",hhi:"$105K",college:"44%",union:"17%",rural:"14%",cenDiv:"South Atlantic",cenPct:"25%",religion:"Mainline Protestant",relPct:"23%",pharmaTrust:3.57,corpTrust:3.79,govtTrust:4.07,m4a:"22%",vaxAvoid:"18%"},
    persona:{quote:"Prices are too high and we need reform. We don't need more government programs—we need to empower consumers with transparency and choice.",
      believe:"America's health care system is broken by middlemen, hidden costs, and corporate profiteering—but government expansion would make it worse. Competition, transparency, and consumer empowerment are the real answers.",
      want:"Health care reform through market forces: price transparency mandates, medical record portability, right-to-try policies. Employer-based coverage that works, not Washington takeover.",
      doWhat:"Less likely than other Republicans to avoid vaccines. Trust hospitals and providers but insist on accountability. Gravitate toward Fox and WSJ. Civic participation through professional networks and policy advocacy.",
      whoAre:"Older, affluent, white, married, suburban. Long-standing Republicans who see themselves as fixers—angry at the system but constructive about solutions."}},
  { id:3, code:"TC", name:"TRADITIONAL CONSERVATIVES", party:"GOP", pop:6, tier:2,
    roi:1.10, highRoi:44, supporters:58, activation:29, influence:8,
    persuadability:[8,8,9,50,25],
    phrma:{p01:63.9,p02i:58,p02g:42,p03h:32,p03u:68,p04:86.1},
    prePost:{rank:[42.5,56.0],att1:[65.3,64.8],att2:[55.0,59.2],fav:[35.8,49.3]},
    demo:{male:"68%",medAge:58,nonwhite:"12%",hhi:"$113K",college:"64%",union:"20%",rural:"11%",cenDiv:"East North Central",cenPct:"20%",religion:"Catholic",relPct:"31%",pharmaTrust:3.94,corpTrust:4.01,govtTrust:4.04,m4a:"17%",vaxAvoid:"29%"},
    persona:{quote:"A strong America means limited government that defends the family, while ensuring healthcare is driven by the free market—not ideology.",
      believe:"America works best when government is limited, families are strong, and individuals take responsibility. Cultural change on the left has distorted healthcare priorities.",
      want:"Healthcare policy that reinforces responsibility and stability. Employer-based coverage, competition, conscience protections for providers, and opposition to mandates.",
      doWhat:"Reliably back Republican leaders fighting cultural progressivism in healthcare. Elevate restrictions on gender-transition care for minors, limits on abortion services, opposition to ESG/DEI.",
      whoAre:"Predominantly white, married, religiously observant (evangelical/Catholic). Financially stable, clustered in rural and exurban areas. Cultural guardians as much as policy advocates."}},
  { id:4, code:"HF", name:"HEALTH FUTURISTS", party:"GOP", pop:2, tier:3,
    roi:0.46, highRoi:33, supporters:33, activation:25, influence:25,
    persuadability:[8,8,9,50,25],
    phrma:{p01:55.6,p02i:72,p02g:28,p03h:28,p03u:72,p04:77.8},
    prePost:{rank:[35.0,42.1],att1:[55.2,54.0],att2:[44.8,47.2],fav:[32.4,40.8]},
    demo:{male:"61%",medAge:46,nonwhite:"28%",hhi:"$81K",college:"52%",union:"20%",rural:"4%",cenDiv:"Pacific",cenPct:"17%",religion:"Catholic",relPct:"32%",pharmaTrust:3.67,corpTrust:4.05,govtTrust:4.16,m4a:"47%",vaxAvoid:"30%"},
    persona:{quote:"Gene therapies, AI, and big data can revolutionize health. Let's embrace innovation boldly—so everyone benefits.",
      believe:"America's survival depends on leading the next wave of science and technology. Innovation is national security: whoever controls AI, gene editing, and biomedical breakthroughs controls the world.",
      want:"Government to unleash innovation—fuel bold R&D, cut red tape, give patients and entrepreneurs freedom to experiment. Right-to-try expanded, FDA accelerated, NIH steered into frontier tech.",
      doWhat:"Highly active online—podcast listeners, Substack subscribers. Follow biohackers, futurist thinkers, MAGA-friendly technologists. Invest in crypto, wear continuous glucose monitors, take nootropics.",
      whoAre:"Youngest GOP segment, male-skewed, higher income, urban/suburban professionals and entrepreneurs. Former libertarians drawn into MAGA by anti-bureaucratic, anti-China rhetoric."}},
  { id:5, code:"PP", name:"PRICE POPULISTS", party:"GOP", pop:3, tier:2,
    roi:1.02, highRoi:40, supporters:56, activation:42, influence:2,
    persuadability:[13,25,23,15,25],
    phrma:{p01:24.7,p02i:38,p02g:62,p03h:44,p03u:56,p04:86.3},
    prePost:{rank:[39.8,54.5],att1:[60.1,59.5],att2:[50.2,55.8],fav:[33.6,50.4]},
    demo:{male:"39%",medAge:54,nonwhite:"12%",hhi:"$86K",college:"52%",union:"9%",rural:"10%",cenDiv:"Mountain",cenPct:"13%",religion:"None",relPct:"21%",pharmaTrust:3.07,corpTrust:3.39,govtTrust:4.07,m4a:"29%",vaxAvoid:"28%"},
    persona:{quote:"Drug and hospital prices are crushing people. I don't care who fixes it, or how—just bring costs down.",
      believe:"The healthcare system is broken by unchecked corporate greed. High prices crush ordinary families while corporations profit at workers' expense.",
      want:"Aggressive action to rein in costs: crack down on drug pricing, protect union health plans, support rural hospitals, resist privatization.",
      doWhat:"Politically active: leading union locals, attending rallies, mobilizing coworkers. Many were lifelong Democrats—Obama voters—who shifted to Trump after economic betrayal.",
      whoAre:"Often union households, white with notable Hispanic presence. Economically less secure, rural and small-town. Trades and service industries. Hardline populists on economics."}},
  { id:6, code:"WE", name:"WELLNESS EVANGELISTS", party:"GOP", pop:9, tier:3,
    roi:1.00, highRoi:37, supporters:54, activation:28, influence:4,
    persuadability:[12,25,23,15,25],
    phrma:{p01:46.6,p02i:44,p02g:56,p03h:40,p03u:60,p04:89.0},
    prePost:{rank:[36.0,48.2],att1:[57.4,56.8],att2:[47.6,52.0],fav:[28.8,42.6]},
    demo:{male:"54%",medAge:59,nonwhite:"11%",hhi:"$98K",college:"52%",union:"18%",rural:"17%",cenDiv:"South Atlantic",cenPct:"23%",religion:"Evangelical",relPct:"36%",pharmaTrust:3.11,corpTrust:3.52,govtTrust:3.57,m4a:"14%",vaxAvoid:"29%"},
    persona:{quote:"I believe in small government that defends traditional values and makes America healthy again through clean food and natural living.",
      believe:"America has been weakened by corrupt elites who profit from dependency and sickness. Health is earned through discipline and responsibility, not pills or handouts. Wellness is patriotism.",
      want:"Break the power of corporations and government institutions profiting from decline. Accountability for Big Pharma, recognition of natural medicine, Medicaid work requirements.",
      doWhat:"Many self-employed, homeschool children, live wellness values daily. Deeply engaged in MAGA networks—rallies, Facebook groups, alternative media.",
      whoAre:"Largest GOP segment (~20% of GOP). Middle-aged, modest to middle income, suburban/exurban, often homeschooling mothers. See Trump and MAGA as a wellness movement."}},
  { id:7, code:"PFF", name:"PALEO FREEDOM FIGHTERS", party:"GOP", pop:4, tier:3,
    roi:0.69, highRoi:17, supporters:31, activation:36, influence:10,
    persuadability:[17,24,14,14,45],
    phrma:{p01:34.4,p02i:32,p02g:68,p03h:24,p03u:76,p04:80.3},
    prePost:{rank:[30.2,38.5],att1:[48.6,47.0],att2:[40.8,43.5],fav:[22.4,32.0]},
    demo:{male:"48%",medAge:55,nonwhite:"16%",hhi:"$90K",college:"39%",union:"18%",rural:"16%",cenDiv:"Pacific",cenPct:"16%",religion:"Evangelical",relPct:"29%",pharmaTrust:2.75,corpTrust:3.24,govtTrust:3.32,m4a:"27%",vaxAvoid:"41%"},
    persona:{quote:"Don't trust the system. Don't submit to mandates. Don't believe mainstream science. Do your own research. Live by meat, fitness, and freedom.",
      believe:"The American people are being intentionally misled about health—poisoned by bad science, processed food, and corrupted institutions. Strength comes from rejecting elites and living by ancestral wisdom.",
      want:"Freedom to live outside the system—eat clean, train hard, reject mandates. Leaders who expose lies and call out corporations.",
      doWhat:"Voracious content consumers and producers: Facebook, Telegram, X. Listen to Rogan, Saladino, Peterson, Tucker. Biggest content amplifiers in MAGA.",
      whoAre:"More female than male, less white than many GOP segments. Midlife, suburban/exurban, middle-income. MAGA in a sharper, more conspiratorial register."}},
  { id:8, code:"HHN", name:"HOLISTIC HEALTH NATURALISTS", party:"GOP", pop:3, tier:3,
    roi:0.87, highRoi:23, supporters:29, activation:29, influence:6,
    persuadability:[20,34,14,14,29],
    phrma:{p01:65.9,p02i:49,p02g:51,p03h:36,p03u:64,p04:82.9},
    prePost:{rank:[32.4,41.8],att1:[50.0,48.5],att2:[42.0,45.2],fav:[24.0,35.2]},
    demo:{male:"46%",medAge:44,nonwhite:"17%",hhi:"$73K",college:"32%",union:"15%",rural:"17%",cenDiv:"South Atlantic",cenPct:"29%",religion:"Catholic",relPct:"26%",pharmaTrust:3.28,corpTrust:3.48,govtTrust:3.77,m4a:"41%",vaxAvoid:"42%"},
    persona:{quote:"Modern medicine ignores the whole person and natural order. Natural and alternative therapies deserve equal respect and coverage.",
      believe:"True health comes from nature—clean food, herbs, supplements, spiritual balance. The pharmaceutical industry is corrupt and oriented toward profit, not healing.",
      want:"Healthcare to recognize natural and alternative therapies. Transparency about chemicals, GMOs, processed foods. Freedom to choose natural approaches.",
      doWhat:"Grow their own food, shop organic, practice yoga and meditation. Many newcomers to the GOP—drawn in by RFK Jr. and anti-pharma movement.",
      whoAre:"More female, younger than Wellness Evangelists, more racially diverse. Urban and suburban. Ex-Democrats or independents who once marched for climate justice or food purity."}},
  { id:9, code:"MFL", name:"MEDICAL FREEDOM LIBERTARIANS", party:"GOP", pop:5, tier:1,
    roi:1.16, highRoi:53, supporters:66, activation:34, influence:6,
    persuadability:[17,35,15,16,17],
    phrma:{p01:54.5,p02i:56,p02g:44,p03h:30,p03u:70,p04:87.3},
    prePost:{rank:[43.8,60.2],att1:[62.0,61.5],att2:[52.6,58.4],fav:[36.0,52.8]},
    demo:{male:"46%",medAge:55,nonwhite:"12%",hhi:"$96K",college:"36%",union:"16%",rural:"9%",cenDiv:"South Atlantic",cenPct:"27%",religion:"None",relPct:"26%",pharmaTrust:2.88,corpTrust:3.32,govtTrust:3.65,m4a:"26%",vaxAvoid:"35%"},
    persona:{quote:"My body, my choice—whether mandates, supplements, or experimental drugs, I want minimal government involvement.",
      believe:"Health is about liberty and personal responsibility. COVID and vaccine mandates radicalized them, but they are reverting to long-standing libertarian instinct.",
      want:"Preserve personal autonomy: right to refuse vaccines, access supplements and alternative therapies, try experimental drugs. Medicaid work requirements.",
      doWhat:"Use supplements heavily, lean into organic/clean food. Consume libertarian media: Rogan, Megyn Kelly, Peterson, Daily Wire. Calmer, more principled than Paleo Freedom Fighters.",
      whoAre:"More female than male, married with kids. Mostly suburban and rural. Many were politically disengaged before COVID activated their libertarian instincts."}},
  { id:10, code:"VS", name:"VACCINE SKEPTICS", party:"GOP", pop:5, tier:3,
    roi:0.90, highRoi:33, supporters:56, activation:32, influence:9,
    persuadability:[9,25,18,19,31],
    phrma:{p01:24.0,p02i:36,p02g:64,p03h:28,p03u:72,p04:80.0},
    prePost:{rank:[34.6,46.0],att1:[54.8,53.2],att2:[46.2,50.0],fav:[26.4,38.8]},
    demo:{male:"48%",medAge:52,nonwhite:"8%",hhi:"$84K",college:"29%",union:"14%",rural:"16%",cenDiv:"East South Central",cenPct:"10%",religion:"None",relPct:"23%",pharmaTrust:2.3,corpTrust:2.78,govtTrust:3.07,m4a:"24%",vaxAvoid:"45%"},
    persona:{quote:"I am opposed to vaccines and mandates and don't trust government or pharmaceutical companies.",
      believe:"Vaccines are unsafe, ineffective, and part of a broader system of coercion and corruption. Mandates are tyranny. The medical establishment hides the truth.",
      want:"Total freedom from mandates, transparency about vaccine risks, accountability for perceived cover-ups. Dismantle institutional power over health choices.",
      doWhat:"Organize rallies, attend alternative health summits, flood social media with anti-vaccine content. Follow Del Bigtree, Sherri Tenpenny, RFK Jr.",
      whoAre:"Predominantly middle-aged, rural/exurban, white, working-class. Highest vaccine avoidance (45%). The purest anti-establishment health segment."}},
  { id:11, code:"UCP", name:"UNIVERSAL CARE PROGRESSIVES", party:"DEM", pop:11, tier:2,
    roi:1.18, highRoi:43, supporters:62, activation:36, influence:11,
    persuadability:[9,24,19,22,19,16],
    phrma:{p01:23.2,p02i:34,p02g:66,p03h:42,p03u:58,p04:60.7},
    prePost:{rank:[42.0,57.4],att1:[63.8,63.2],att2:[53.4,58.6],fav:[38.4,53.2]},
    demo:{male:"35%",medAge:46,nonwhite:"35%",hhi:"$96K",college:"54%",union:"26%",rural:"13%",cenDiv:"Mountain",cenPct:"15%",religion:"None",relPct:"61%",pharmaTrust:2.06,corpTrust:2.51,govtTrust:4.52,m4a:"82%",vaxAvoid:"4%"},
    persona:{quote:"Health care is a human right. It's time for universal health care. We need Medicare-for-All.",
      believe:"Healthcare is a fundamental human right, not a benefit tied to employment or income. Corporate power—insurers, pharma, hospital chains—is the central driver of inequity.",
      want:"Medicare-for-All: universal coverage, eliminate private insurance middlemen, public bargaining to control prices. Reproductive freedom, gender-affirming care, equity mandates.",
      doWhat:"Mobilize: organize rallies, canvass for progressive candidates, pressure Democratic leadership. Vocal critics of politicians who settle for incrementalism.",
      whoAre:"Largest DEM segment. Racially diverse, urban, highly educated but economically mixed. Progressive, reliably Democratic, often frustrated with party leadership."}},
  { id:12, code:"FJP", name:"FAITH & JUSTICE PROGRESSIVES", party:"DEM", pop:10, tier:2,
    roi:1.02, highRoi:40, supporters:67, activation:48, influence:7,
    persuadability:[24,24,16,11,21,17],
    phrma:{p01:17.6,p02i:28,p02g:72,p03h:38,p03u:62,p04:74.3},
    prePost:{rank:[40.5,55.2],att1:[62.4,61.8],att2:[51.8,56.4],fav:[35.6,50.0]},
    demo:{male:"29%",medAge:44,nonwhite:"57%",hhi:"$74K",college:"44%",union:"19%",rural:"11%",cenDiv:"South Atlantic",cenPct:"21%",religion:"Evangelical",relPct:"38%",pharmaTrust:4.02,corpTrust:4.11,govtTrust:5.12,m4a:"59%",vaxAvoid:"13%"},
    persona:{quote:"My faith calls me to fight for justice. Racism and inequality drive poor health. Health equity must be a top priority.",
      believe:"Health is a moral ecosystem—families, congregations, clinics, and public institutions each bear obligations to the vulnerable. Science is a public good meriting funding and guardrails.",
      want:"Bigger bets on science (higher NIH/CDC budgets), tighter oversight (drug-price negotiation, AI rules, patent-abuse curbs), faster compassionate access. Equity as a design requirement.",
      doWhat:"Blend everyday wellness with faith practice. Civically present through churches, schools, and nonprofits. High activation (48%) through faith and civic networks.",
      whoAre:"Predominantly female (~71%). Most racially diverse DEM cohort (~59% White, ~29% Black). Suburban with strong urban presence. Income tilts modest."}},
  { id:13, code:"HCP", name:"HEALTH CARE PROTECTIONISTS", party:"DEM", pop:8, tier:2,
    roi:1.15, highRoi:42, supporters:59, activation:47, influence:7,
    persuadability:[24,17,17,19,23],
    phrma:{p01:37.8,p02i:70,p02g:30,p03h:34,p03u:66,p04:79.7},
    prePost:{rank:[41.2,56.8],att1:[63.0,62.4],att2:[52.0,57.6],fav:[36.8,52.0]},
    demo:{male:"31%",medAge:47,nonwhite:"40%",hhi:"$81K",college:"53%",union:"23%",rural:"14%",cenDiv:"Pacific",cenPct:"24%",religion:"None",relPct:"36%",pharmaTrust:2.3,corpTrust:2.83,govtTrust:3.78,m4a:"40%",vaxAvoid:"13%"},
    persona:{quote:"Unions fought for good coverage, and we should protect those benefits, while restraining corporate excess—from high drug costs to junk food that keeps America sick.",
      believe:"Healthcare legitimacy is rooted in work, contribution, and earned benefits. Deeply skeptical of both corporate power and distant bureaucracy.",
      want:"Affordable care protecting existing coverage and American jobs. Crack down on price-gouging, strengthen collective bargaining, keep hospitals open in working communities.",
      doWhat:"Organize, vote, and mobilize through labor networks and community groups. Talk healthcare in concrete terms: premiums, deductibles, prescriptions.",
      whoAre:"Union households—trades, manufacturing, transport, service. Economically stretched. More rural and small-town. Racially diverse within the working class."}},
  { id:14, code:"GHI", name:"GLOBAL HEALTH INSTITUTIONALISTS", party:"DEM", pop:10, tier:1,
    roi:1.16, highRoi:53, supporters:72, activation:38, influence:3,
    persuadability:[16,24,37,13,10],
    phrma:{p01:39.1,p02i:64,p02g:36,p03h:44,p03u:56,p04:76.5},
    prePost:{rank:[45.0,61.2],att1:[66.5,65.8],att2:[56.2,62.0],fav:[40.4,56.8]},
    demo:{male:"41%",medAge:57,nonwhite:"24%",hhi:"$95K",college:"63%",union:"21%",rural:"10%",cenDiv:"Mid Atlantic",cenPct:"15%",religion:"None",relPct:"42%",pharmaTrust:4.54,corpTrust:4.31,govtTrust:5.66,m4a:"67%",vaxAvoid:"6%"},
    persona:{quote:"America is better off as a leader in the global economy. To lead, we need to innovate to solve our biggest health threats, including climate change.",
      believe:"Climate change is the most important health challenge of the 21st century. Science matters because it is embedded in institutions that translate evidence into coordinated action.",
      want:"Sustained funding for NIH, CDC, FDA. Drug-price oversight without undermining R&D. Expert-driven regulation, global standards, pandemic preparedness.",
      doWhat:"Vaccinate, follow public-health guidance, defend expert agencies. Advocate through professional networks, think tanks, and policy publications.",
      whoAre:"Highly educated, urban or close-in suburban. Many in policy, academia, or international development. Center-left, institutionally loyal, cautious about structural overhaul."}},
  { id:15, code:"HAD", name:"HEALTH ABUNDANCE DEMOCRATS", party:"DEM", pop:8, tier:3,
    roi:1.01, highRoi:38, supporters:54, activation:37, influence:3,
    persuadability:[15,24,31,14,16],
    phrma:{p01:39.1,p02i:64,p02g:36,p03h:44,p03u:56,p04:76.5},
    prePost:{rank:[38.0,50.4],att1:[60.2,59.5],att2:[49.8,54.0],fav:[34.0,47.6]},
    demo:{male:"54%",medAge:48,nonwhite:"48%",hhi:"$85K",college:"52%",union:"16%",rural:"9%",cenDiv:"South Atlantic",cenPct:"31%",religion:"Other",relPct:"28%",pharmaTrust:4.16,corpTrust:4.12,govtTrust:4.85,m4a:"51%",vaxAvoid:"10%"},
    persona:{quote:"Digital tools, AI, and start-ups can universalize care faster than big bureaucracies—let's remove red tape.",
      believe:"America's health crisis is a supply-and-access problem demanding more of everything that works. Government is a partner, not a savior.",
      want:"Capacity and affordability built at once: protect Medicaid and Medicare Advantage, public option, Medicare drug-price negotiation. Fund community health centers, residency slots, mental health parity.",
      doWhat:"Practice mainstream wellness without fads. Judge politics by what gets delivered. Not heavy influencers but share health tips occasionally.",
      whoAre:"Female-leaning, highly college-educated, suburban-urban. Most racially diverse among centrist DEM segments. Believe in American capacity to build."}},
  { id:16, code:"HCI", name:"HEALTH CARE INCREMENTALISTS", party:"DEM", pop:7, tier:2,
    roi:1.07, highRoi:44, supporters:61, activation:44, influence:5,
    persuadability:[13,31,14,13,29],
    phrma:{p01:56.2,p02i:52,p02g:48,p03h:50,p03u:50,p04:68.7},
    prePost:{rank:[40.0,54.0],att1:[61.5,60.8],att2:[50.4,55.8],fav:[36.2,50.8]},
    demo:{male:"44%",medAge:55,nonwhite:"44%",hhi:"$104K",college:"62%",union:"15%",rural:"8%",cenDiv:"Pacific",cenPct:"33%",religion:"None",relPct:"39%",pharmaTrust:4.09,corpTrust:4.17,govtTrust:5.02,m4a:"36%",vaxAvoid:"7%"},
    persona:{quote:"I prefer step-by-step reforms. That means strengthening the ACA, not abandoning it. New technology and innovation is important if it helps enhance access.",
      believe:"Healthcare should be dependable, fair, and earned through participation. The system doesn't need to be torn down—it needs to work consistently. Risk intolerance is the defining belief.",
      want:"Protect and improve Medicare, Medicare Advantage, ACA protections. Close gaps, lower out-of-pocket costs, negotiate drug prices. Oppose reforms that destabilize existing programs.",
      doWhat:"Vote at extremely high rates, contact lawmakers, engage through AARP. Follow healthcare debates closely, ask pointed questions about implementation risk.",
      whoAre:"Oldest DEM segment. Suburban, mixed income but risk-averse. Not activists—stakeholders. United by entitlement to stability after a lifetime of work."}},
];

const MOCK_SOP = [
  [10.2,12.4,9.8,8.1,8.5,10.0,7.2,6.8,11.5,8.0,10.8,10.2,9.5,11.8,9.4,10.0],
  [9.8,8.2,9.5,7.4,10.2,8.8,11.5,10.4,12.2,11.0,8.4,8.0,10.8,8.2,10.0,9.2],
  [11.5,10.8,12.2,10.5,9.0,8.2,10.8,9.6,13.8,12.4,7.5,6.8,11.2,7.0,8.5,8.0],
  [12.0,11.2,10.8,11.8,8.0,9.4,6.5,7.0,10.0,8.5,10.2,9.8,8.8,13.5,10.8,10.5],
  [8.5,9.0,8.2,8.8,11.5,10.2,9.8,9.0,7.5,8.8,10.5,10.8,11.0,8.0,9.5,9.8],
  [7.8,8.5,8.0,7.2,12.4,10.8,10.5,9.8,6.8,8.0,11.2,13.5,12.8,9.0,9.2,10.2],
  [8.0,7.5,9.5,10.2,9.8,8.5,8.2,7.5,7.0,8.2,8.8,8.0,9.0,8.5,8.0,8.5],
  [10.5,8.8,7.5,12.5,6.8,7.0,5.2,6.5,6.5,6.0,10.0,8.5,6.5,11.5,10.5,9.0],
  [10.8,10.0,9.2,12.0,7.5,8.0,7.0,6.8,7.2,7.5,9.5,8.2,7.0,10.5,10.8,9.5],
  [6.2,8.0,8.5,6.0,10.0,11.2,12.0,14.5,9.8,12.5,7.5,8.8,8.0,6.5,7.8,8.2],
  [4.7,5.6,6.8,5.5,6.3,7.9,11.3,12.1,7.7,9.1,5.6,7.4,5.4,5.5,5.5,7.1],
];

const THEME_COLORS = {Leadership:"#a78bfa",Security:"#f87171",Economy:"#34d399",Innovation:"#60a5fa",Patient:"#fbbf24"};
// TIER: 1=green, 2=yellow, 3=red
const TIER_BG = {1:"#064e3b",2:"#854d0e",3:"#991b1b"};
const TIER_TEXT = {1:"#6ee7b7",2:"#fde047",3:"#fca5a5"};
const TIER_ACCENT = {1:"#34d399",2:"#eab308",3:"#ef4444"};
const TIER_LABELS = {1:"TIER 1",2:"TIER 2",3:"TIER 3"};
function getTierNum(r){return r>=1.15?1:r>=1.00?2:3}
// Gap categories: reversed naming convention
function getGapCat(g){return g>40?{l:"MISALIGNED",c:"#f87171",bg:"#2d1215",desc:"Large Gap"}:g>15?{l:"OPPORTUNITY",c:"#fbbf24",bg:"#2d2006",desc:"Moderate Gap"}:{l:"CHAMPION",c:"#34d399",bg:"#0d2818",desc:"Narrow Gap"}}
function getSopC(v){if(v>=13)return{bg:"#065f46",t:"#6ee7b7"};if(v>=11)return{bg:"#064e3b",t:"#6ee7b7"};if(v>=10)return{bg:"#1a3a2a",t:"#a7f3d0"};if(v>=9)return{bg:"#1e293b",t:"#cbd5e1"};if(v>=8)return{bg:"#1a1f2e",t:"#94a3b8"};if(v>=7)return{bg:"#1a1520",t:"#94a3b8"};if(v>=6)return{bg:"#1f1318",t:"#f9a8a8"};return{bg:"#2d1215",t:"#fca5a5"}}

// ─── TEAL PALETTE for PHRMA/Gateway metrics ───
const TEAL = {bg:"#0d3b3b",border:"#115e59",text:"#5eead4",muted:"#2dd4bf",dim:"#134e4a"};

function Tooltip({msg,segId,showVariant,x,y}){const text=showVariant&&msg.variants[segId]?msg.variants[segId]:msg.control;const isV=showVariant&&msg.variants[segId];return(<div style={{position:"fixed",left:Math.min(x+12,window.innerWidth-420),top:Math.max(y-80,8),width:400,background:"#111827",border:"1px solid #334155",borderRadius:6,padding:12,zIndex:9999,pointerEvents:"none",boxShadow:"0 8px 32px rgba(0,0,0,0.6)"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}><span style={{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:700,color:"#e2e8f0",textTransform:"uppercase"}}>{msg.shortName}</span><span style={{fontSize:8,fontFamily:"'JetBrains Mono',monospace",padding:"2px 6px",borderRadius:3,background:isV?"#1e3a5f":"#1e293b",color:isV?"#93c5fd":"#64748b"}}>{isV?"PERSONA VARIANT":"CONTROL"}</span></div><div style={{fontSize:11,color:"#cbd5e1",lineHeight:1.6,fontStyle:"italic"}}>"{text}"</div></div>)}

function PrePostBar({pre,post,mw=75}){const d=post-pre;return(<div style={{display:"flex",flexDirection:"column",gap:2}}>{[{l:"PRE",v:pre,bc:"#475569",tc:"#94a3b8"},{l:"POST",v:post,bc:"#3b82f6",tc:"#e2e8f0"}].map((r,i)=>(<div key={i} style={{display:"flex",alignItems:"center",gap:5}}><span style={{width:24,fontSize:8,color:i===0?"#64748b":"#60a5fa",textAlign:"right",fontFamily:"'JetBrains Mono',monospace"}}>{r.l}</span><div style={{flex:1,height:11,background:"#1e293b",borderRadius:2}}><div style={{width:`${(r.v/mw)*100}%`,height:"100%",background:r.bc,borderRadius:2,transition:"width 0.5s"}}/></div><span style={{width:34,fontSize:9,color:r.tc,fontFamily:"'JetBrains Mono',monospace",fontWeight:i===1?700:500}}>{r.v.toFixed(1)}</span></div>))}<div style={{textAlign:"right"}}><span style={{fontSize:9,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:d>0?"#34d399":d<0?"#f87171":"#64748b",padding:"1px 5px",borderRadius:6,background:d>0?"rgba(52,211,153,0.12)":d<0?"rgba(248,113,113,0.12)":"rgba(100,116,139,0.12)"}}>{d>0?"+":""}{d.toFixed(1)}</span></div></div>)}

// ─── Gateway bar uses teal ───
function GapBar({p04,p01}){const gap=p04-p01,cat=getGapCat(gap);return(<div style={{background:TEAL.dim,borderRadius:6,padding:10,border:`1px solid ${TEAL.border}`}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}><div style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:8,fontFamily:"'JetBrains Mono',monospace",color:TEAL.text,letterSpacing:1}}>INNOVATION GATEWAY</span><span style={{fontSize:8,fontWeight:700,padding:"2px 6px",borderRadius:3,background:cat.bg,color:cat.c,fontFamily:"'JetBrains Mono',monospace"}}>{cat.l}</span></div><span style={{fontSize:18,fontWeight:700,color:cat.c,fontFamily:"'JetBrains Mono',monospace"}}>{gap.toFixed(1)}</span></div><div style={{position:"relative",height:24,background:"#0a2929",borderRadius:4,overflow:"hidden",marginBottom:6}}><div style={{position:"absolute",left:0,top:0,height:"100%",width:`${p01}%`,background:"#0d9488",borderRadius:"4px 0 0 4px",zIndex:2}}/><div style={{position:"absolute",left:`${p01}%`,top:0,height:"100%",width:`${gap}%`,background:`repeating-linear-gradient(45deg,${cat.bg},${cat.bg} 3px,transparent 3px,transparent 6px)`,borderLeft:`2px solid ${cat.c}`,zIndex:1}}/><div style={{position:"absolute",left:`${p04}%`,top:0,height:"100%",width:2,background:cat.c,zIndex:3}}/><div style={{position:"absolute",left:4,top:"50%",transform:"translateY(-50%)",fontSize:9,fontWeight:700,color:TEAL.text,fontFamily:"'JetBrains Mono',monospace",zIndex:4}}>{p01.toFixed(0)}%</div></div><div style={{display:"flex",justifyContent:"space-between",fontSize:7,color:TEAL.text,fontFamily:"'JetBrains Mono',monospace",opacity:0.7}}><span>← PRO-INNOVATION (PHRMA01)</span><span>LEADERSHIP VITAL (PHRMA04) →</span></div></div>)}

// ─── Policy quad uses teal ───
function PolicyQuad({seg}){const{phrma:p}=seg;const items=[{q:"PHRMA01",pro:p.p01,pl:"Pro-Innovation",cl:"Price Controls"},{q:"PHRMA02",pro:p.p02i,pl:"Credit Industry",cl:"Credit Govt"},{q:"PHRMA03",pro:p.p03h,pl:"Policy Helping",cl:"Policy Hurting"},{q:"PHRMA04",pro:p.p04,pl:"Leadership Vital",cl:"Doesn't Matter"}];return(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>{items.map((it,i)=>{const ip=it.pro>=50;return(<div key={i} style={{background:TEAL.dim,borderRadius:4,padding:"6px 8px",border:`1px solid ${TEAL.border}`}}><div style={{fontSize:7,fontFamily:"'JetBrains Mono',monospace",color:TEAL.text,letterSpacing:0.5,marginBottom:3,opacity:0.7}}>{it.q}</div><div style={{display:"flex",alignItems:"center",gap:5}}><div style={{flex:1,height:7,background:"#0a2929",borderRadius:4,overflow:"hidden"}}><div style={{width:`${it.pro}%`,height:"100%",background:ip?"#0d9488":"#475569",transition:"width 0.5s"}}/></div><span style={{fontSize:10,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:ip?TEAL.text:"#94a3b8",minWidth:28,textAlign:"right"}}>{it.pro.toFixed(0)}%</span></div><div style={{fontSize:7,color:ip?TEAL.muted:"#94a3b8",marginTop:1,fontFamily:"'JetBrains Mono',monospace"}}>{ip?it.pl:it.cl}</div></div>)})}</div>)}

const PP_LABELS=[{key:"rank",label:"Industry Rank",sub:"Top-2 (1st/2nd)",qText:"\"Which of the following industries do you think is most important for America to be viewed as a global leader overall? Rank these industries in order of importance.\" (out of 6 industries) — % ranked 1st or 2nd"},{key:"att1",label:"Domestic Mfg",sub:"Top-2 (6-7)",qText:"\"How important is it that new medicines used by American patients are invented and manufactured in the United States?\" (1–7 scale) — % Top-2 box (6–7)"},{key:"att2",label:"Congress Support",sub:"Top-2 (6-7)",qText:"\"How important is it for Congress to support policies that protect America's leadership in biopharmaceutical innovation and manufacturing?\" (1–7 scale) — % Top-2 box (6–7)"},{key:"fav",label:"Industry Fav",sub:"Top-4 (7-10)",qText:"\"Rate your overall impressions of each of the following from 0 to 10: Biopharmaceutical companies\" — % Top-4 box (7–10)"}];
function GapMapView({segments,onSelect,selectedId}){
  // Sort narrow→large (ascending by gap)
  const sorted=[...segments].sort((a,b)=>(a.phrma.p04-a.phrma.p01)-(b.phrma.p04-b.phrma.p01));
  return(
    <div style={{background:"#0f1729",border:`1px solid ${TEAL.border}`,borderRadius:8,padding:14,marginTop:10}}>
      <div style={{marginBottom:10}}>
        <div style={{fontSize:10,color:TEAL.text,fontFamily:"'Poppins',sans-serif",fontWeight:700,marginBottom:3}}>Innovation Gateway Map</div>
        <div style={{fontSize:9,color:"#94a3b8",lineHeight:1.5,maxWidth:900}}>
          <strong style={{color:TEAL.muted}}>NET:</strong> PHRMA04 Gateway <span style={{color:"#64748b"}}>(% say "It's vital for the U.S. that we are the global leader in pharmaceutical innovation...")</span> − PHRMA01 Policy Outcome <span style={{color:"#64748b"}}>(% say more important "Lowering drug prices through price controls...")</span>
        </div>
      </div>
      {sorted.map(seg=>{const gap=seg.phrma.p04-seg.phrma.p01,cat=getGapCat(gap),isSel=selectedId===seg.id;return(
        <div key={seg.id} onClick={()=>onSelect(seg)} style={{display:"grid",gridTemplateColumns:"200px 44px 1fr 80px",alignItems:"center",gap:6,padding:"5px 8px",borderRadius:4,background:isSel?"#0d2d2d":"transparent",cursor:"pointer",border:isSel?`1px solid ${cat.c}33`:"1px solid transparent",marginBottom:1}} onMouseEnter={e=>{if(!isSel)e.currentTarget.style.background="#0a1f1f"}} onMouseLeave={e=>{if(!isSel)e.currentTarget.style.background="transparent"}}>
          <div style={{display:"flex",alignItems:"center",gap:5,overflow:"hidden"}}><span style={{fontSize:7,fontWeight:700,padding:"1px 4px",borderRadius:2,background:seg.party==="GOP"?"#7f1d1d":"#1e3a5f",color:seg.party==="GOP"?"#fca5a5":"#93c5fd",fontFamily:"'JetBrains Mono',monospace",flexShrink:0}}>{seg.code}</span><span style={{fontSize:9,color:"#cbd5e1",fontWeight:500,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{seg.name}</span></div>
          <span style={{fontSize:10,fontWeight:700,color:cat.c,fontFamily:"'JetBrains Mono',monospace",textAlign:"right"}}>{gap.toFixed(1)}</span>
          <div style={{position:"relative",height:14,background:"#0a2929",borderRadius:3,overflow:"hidden"}}><div style={{position:"absolute",left:0,top:0,height:"100%",width:`${seg.phrma.p01}%`,background:"#0d9488",borderRadius:"3px 0 0 3px"}}/><div style={{position:"absolute",left:`${seg.phrma.p01}%`,top:0,height:"100%",width:`${gap}%`,background:`repeating-linear-gradient(45deg,${cat.bg},${cat.bg} 3px,transparent 3px,transparent 6px)`,borderLeft:`1.5px solid ${cat.c}`}}/><div style={{position:"absolute",left:`${seg.phrma.p04}%`,top:0,height:"100%",width:1.5,background:cat.c}}/></div>
          <span style={{fontSize:7,fontWeight:600,color:cat.c,fontFamily:"'JetBrains Mono',monospace",textAlign:"right"}}>{cat.l}</span>
        </div>
      )})}
      <div style={{display:"flex",gap:14,marginTop:8,paddingTop:6,borderTop:`1px solid ${TEAL.border}`,justifyContent:"center"}}>
        {[{l:"CHAMPION (narrow)",c:"#34d399"},{l:"OPPORTUNITY (moderate)",c:"#fbbf24"},{l:"MISALIGNED (large)",c:"#f87171"}].map((c,i)=>(<div key={i} style={{display:"flex",alignItems:"center",gap:3}}><div style={{width:8,height:8,borderRadius:2,border:`2px solid ${c.c}`,background:`${c.c}22`}}/><span style={{fontSize:7,color:"#94a3b8",fontFamily:"'JetBrains Mono',monospace"}}>{c.l}</span></div>))}
        <div style={{display:"flex",alignItems:"center",gap:3}}><div style={{width:14,height:8,borderRadius:2,background:"#0d9488"}}/><span style={{fontSize:7,color:"#94a3b8",fontFamily:"'JetBrains Mono',monospace"}}>PHRMA01</span></div>
      </div>
    </div>
  );
}

export default function MessageMap(){
  const [sel,setSel]=useState(null);
  const [sortCol,setSortCol]=useState(null);
  const [tooltip,setTooltip]=useState(null);
  const [showVariant,setShowVariant]=useState(false);
  const [view,setView]=useState("heatmap");
  const sorted=useMemo(()=>{const ix=MESSAGES.map((m,i)=>({...m,idx:i}));if(sortCol===null)return ix;return[...ix].sort((a,b)=>MOCK_SOP[b.idx][sortCol]-MOCK_SOP[a.idx][sortCol])},[sortCol]);

  return(
    <div style={{maxWidth:1650,margin:"0 auto",color:"#e2e8f0"}}>
      {/* Description */}
      <div style={{marginBottom:12}}>
        <div style={{fontSize:11,color:"#94a3b8",maxWidth:1100,lineHeight:1.5}}>
          <strong style={{color:"#cbd5e1"}}>Share of Preference</strong> heatmap <span style={{color:"#64748b"}}>(a measure from a discrete choice model depicting how likely a message is chosen as the most compelling relative to other messages)</span> · 11-item MaxDiff · 16 PRISM segments.
        </div>
      </div>
      {/* Controls */}
      <div style={{display:"flex",gap:4,marginBottom:10,alignItems:"center"}}>
        {[{k:"heatmap",l:"SoP HEATMAP"},{k:"gapmap",l:"INNOVATION GATEWAY MAP"}].map(v=>(
          <button key={v.k} onClick={()=>setView(v.k)} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:0.5,padding:"5px 14px",border:"1px solid",borderRadius:4,cursor:"pointer",borderColor:view===v.k?"#60a5fa":"#1e293b",background:view===v.k?"#1e3a5f":"#111827",color:view===v.k?"#93c5fd":"#64748b",transition:"all 0.15s"}}>{v.l}</button>
        ))}
        {view==="heatmap"&&(
          <label style={{display:"flex",alignItems:"center",gap:6,marginLeft:16,cursor:"pointer"}}>
            <div onClick={()=>setShowVariant(!showVariant)} style={{width:32,height:16,borderRadius:8,background:showVariant?"#3b82f6":"#334155",position:"relative",transition:"background 0.2s",cursor:"pointer"}}>
              <div style={{width:12,height:12,borderRadius:"50%",background:"#e2e8f0",position:"absolute",top:2,left:showVariant?18:2,transition:"left 0.2s"}}/>
            </div>
            <span style={{fontSize:9,fontFamily:"'JetBrains Mono',monospace",color:showVariant?"#93c5fd":"#64748b"}}>PERSONA VARIANTS</span>
          </label>
        )}
      </div>

      {view==="heatmap"&&(<>
        <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
          <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#475569",letterSpacing:1}}>SoP:</span>
          {[{l:"≤6",bg:"#2d1215"},{l:"7-8",bg:"#1a1520"},{l:"9-10",bg:"#1e293b"},{l:"11-12",bg:"#064e3b"},{l:"≥13",bg:"#065f46"}].map((h,i)=>(<div key={i} style={{display:"flex",alignItems:"center",gap:2}}><div style={{width:10,height:10,borderRadius:2,background:h.bg,border:"1px solid #1e293b"}}/><span style={{fontSize:7,color:"#94a3b8"}}>{h.l}</span></div>))}
          <span style={{marginLeft:10,fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#475569",letterSpacing:1}}>THEME:</span>
          {Object.entries(THEME_COLORS).map(([t,c])=>(<div key={t} style={{display:"flex",alignItems:"center",gap:2}}><div style={{width:6,height:6,borderRadius:"50%",background:c}}/><span style={{fontSize:7,color:"#94a3b8"}}>{t}</span></div>))}
        </div>
        <div style={{overflowX:"auto",marginBottom:2}}>
          <table style={{width:"100%",borderCollapse:"separate",borderSpacing:1,fontSize:11}}>
            <thead>
              <tr>
                <th colSpan={3} style={{background:"#111827",padding:2}}/>
                <th colSpan={10} style={{background:"#1a0a0a",color:"#f87171",fontFamily:"'JetBrains Mono',monospace",fontSize:8,letterSpacing:2,padding:"3px 0",textAlign:"center",borderBottom:"2px solid #f87171"}}>REPUBLICAN</th>
                <th colSpan={6} style={{background:"#0a0a1a",color:"#60a5fa",fontFamily:"'JetBrains Mono',monospace",fontSize:8,letterSpacing:2,padding:"3px 0",textAlign:"center",borderBottom:"2px solid #60a5fa"}}>DEMOCRAT</th>
              </tr>
              <tr>
                <th style={{background:"#111827",width:24,padding:2}}/>
                <th style={{background:"#111827",textAlign:"left",width:140,fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#64748b",padding:"2px 4px"}}>MESSAGE</th>
                <th style={{background:"#111827",width:40,fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#64748b",padding:2}}>THEME</th>
                {SEGMENTS.map((seg,si)=>{const t2=getTierNum(seg.roi);return(
                  <th key={seg.id} onClick={()=>setSortCol(sortCol===si?null:si)} style={{background:sortCol===si?"#1a2332":"#000",minWidth:80,padding:"4px 2px",cursor:"pointer",fontFamily:"'Poppins',sans-serif",fontSize:7,fontWeight:700,color:sortCol===si?"#f1f5f9":"#cbd5e1",letterSpacing:0.2,lineHeight:1.2,verticalAlign:"bottom",borderBottom:sortCol===si?"2px solid #60a5fa":"none",transition:"all 0.15s",textTransform:"uppercase"}}>
                    <div style={{fontSize:7,color:"#64748b",fontFamily:"'JetBrains Mono',monospace",marginBottom:1}}>{seg.pop}%</div>
                    <div style={{marginBottom:2,minHeight:30}}>{seg.name}</div>
                    <div style={{display:"flex",gap:2,justifyContent:"center"}}>
                      <span style={{fontSize:6,padding:"1px 3px",borderRadius:2,background:TIER_BG[t2],color:TIER_TEXT[t2],fontFamily:"'JetBrains Mono',monospace"}}>{TIER_LABELS[t2]}</span>
                    </div>
                  </th>
                )})}
              </tr>
            </thead>
            <tbody>
              {sorted.map(msg=>(
                <tr key={msg.id} onMouseEnter={e=>e.currentTarget.style.filter="brightness(1.12)"} onMouseLeave={e=>e.currentTarget.style.filter="brightness(1)"}>
                  <td style={{background:"#111827",textAlign:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#64748b",fontWeight:700,padding:2}}>{msg.id}</td>
                  <td style={{background:"#111827",fontFamily:"'Poppins',sans-serif",fontSize:11,color:"#cbd5e1",fontWeight:600,padding:"3px 4px",whiteSpace:"nowrap"}}>{msg.shortName}</td>
                  <td style={{background:"#111827",textAlign:"center",padding:2}}><span style={{fontSize:6,fontFamily:"'JetBrains Mono',monospace",padding:"1px 4px",borderRadius:3,background:"rgba(0,0,0,0.3)",color:THEME_COLORS[msg.theme],fontWeight:600}}>{msg.theme.toUpperCase()}</span></td>
                  {SEGMENTS.map((seg,si)=>{const val=MOCK_SOP[msg.idx][si],{bg,t:tx}=getSopC(val),isSel=sortCol===si;return(
                    <td key={seg.id}
                      onMouseEnter={e=>setTooltip({msg,segId:seg.id,x:e.clientX,y:e.clientY})}
                      onMouseMove={e=>setTooltip(t2=>t2?{...t2,x:e.clientX,y:e.clientY}:null)}
                      onMouseLeave={()=>setTooltip(null)}
                      style={{textAlign:"center",borderRadius:2,background:isSel?`${bg}ee`:bg,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:12,color:tx,padding:"6px 2px",minWidth:80,cursor:"pointer",opacity:isSel?1:0.9,transition:"all 0.15s"}}>{val.toFixed(1)}</td>
                  )})}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {tooltip&&<Tooltip msg={tooltip.msg} segId={tooltip.segId} showVariant={showVariant} x={tooltip.x} y={tooltip.y}/>}
      </>)}

      {view==="gapmap"&&<GapMapView segments={SEGMENTS} onSelect={()=>{}} selectedId={null}/>}
    </div>
  );
}
