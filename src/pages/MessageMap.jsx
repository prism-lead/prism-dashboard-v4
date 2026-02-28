import { useState, useMemo } from "react";

// ─── ESI MESSAGES ─────────────────────────────────────────────────
const ESI_MESSAGES = [
  { id:1, shortName:"Financial Security", theme:"Financial", text:"Employer health coverage shields families from rising medical costs—covering about 80–90 percent of all claims and preventing unexpected bills from becoming financial crises." },
  { id:2, shortName:"Comprehensive Coverage", theme:"Coverage", text:"Employer plans provide complete protection, covering medical, drug, maternity, and mental-health care together in one plan so nothing important is left out." },
  { id:3, shortName:"Continuity-Life Changes", theme:"Coverage", text:"Workers stay protected through life changes, with COBRA and retiree options that help them maintain coverage and keep their doctors when jobs or family circumstances change." },
  { id:4, shortName:"Access & Innovation", theme:"Innovation", text:"Employer coverage connects employees and families to leading doctors, hospitals, and new treatments—the cornerstone of America's private health-care system that drives innovation and access to advanced care." },
  { id:5, shortName:"Freedom & Competition", theme:"Freedom", text:"Employer coverage helps keep the health system competitive—by letting businesses and employees select the plans and providers that best fit their needs." },
  { id:6, shortName:"Digital Tools", theme:"Innovation", text:"Digital tools put employees in control of their coverage—to see costs in advance, track approvals, follow treatment plan and make confident, informed decisions." },
  { id:7, shortName:"Modern Convenience", theme:"Coverage", text:"Employer plans expand convenience through telehealth, 24-hour nurse lines, and virtual mental-health services that meet people where they are." },
  { id:8, shortName:"Customized Benefits", theme:"Coverage", text:"Employers tailor benefits to their own workforce, offering coverage options like obesity-treatment, fertility, and mental-health programs that reflect employee priorities and the company's values." },
  { id:9, shortName:"Earned Benefit", theme:"Social Contract", text:"Employer-sponsored insurance rewards work through a true partnership between employers and employees—turning shared payroll contributions and tax-free benefits into dependable coverage that employees earned." },
  { id:10, shortName:"Social Contract", theme:"Social Contract", text:"Employer health coverage has been a basic promise between employers and employees—hard work earns security and peace of mind. Taxing or weakening those benefits breaks that promise and erodes workplace trust between employers and employees." },
  { id:11, shortName:"Tax Fairness", theme:"Financial", text:"Employer insurance channels tax-free private dollars into America's health-care system, keeping coverage affordable for families while reducing the burden on taxpayer-funded programs." },
  { id:12, shortName:"Competitive Purchasing", theme:"Financial", text:"Employers use their collective purchasing power to drive competition among hospitals, doctors, and drug companies—helping improve the quality of care while controlling costs." },
  { id:13, shortName:"Innovation & Partnership", theme:"Innovation", text:"Employer plans drive medical progress—partnering with top health systems and innovators to expand access to advanced therapies while keeping care affordable for working families." },
  { id:14, shortName:"Accountability", theme:"Innovation", text:"Employers hold plans accountable for quality and spending, tracking data and outcomes to ensure every premium dollar strengthens employee health, not administrative overhead." },
  { id:15, shortName:"Health Productivity", theme:"Coverage", text:"Employers invest directly in workers' health through wellness programs, preventive-care incentives, and disease-management support that keep people healthy and productive." },
];

// ─── MA MESSAGES ─────────────────────────────────────────────────
const MA_MESSAGES = [
  { id:1, shortName:"Predictable Coverage", theme:"Coverage", text:"Medicare Advantage offers one simple plan with stable premiums and coverage seniors can rely on—unlike traditional Medicare's patchwork of providers and fees." },
  { id:2, shortName:"Capping Costs", theme:"Financial", text:"Medicare Advantage shields retirees from crushing medical debt by capping annual out-of-pocket costs—financial protection traditional Medicare doesn't provide." },
  { id:3, shortName:"Trust & Accountability", theme:"Trust", text:"Medicare Advantage earns the trust of its members through strict federal audits and quality-based payments that hold every plan accountable for results." },
  { id:4, shortName:"Coordinated Care", theme:"Coverage", text:"Medicare Advantage brings doctors, prescriptions, and benefits together in one coordinated plan so care is seamless, not fragmented like traditional Medicare." },
  { id:5, shortName:"Freedom to Choose", theme:"Freedom", text:"Medicare Advantage empowers seniors to choose doctors and benefits that fit their lives instead of a one-size-fits-all government design." },
  { id:6, shortName:"Personalized Benefits", theme:"Coverage", text:"Medicare Advantage covers the whole person—with dental, vision, hearing, and fitness benefits that traditional Medicare leaves out." },
  { id:7, shortName:"Digital Access", theme:"Innovation", text:"Medicare Advantage modernizes care through telehealth and digital tools that keep members connected anywhere, unlike Medicare's paper-driven system." },
  { id:8, shortName:"Earned Better Benefits", theme:"Social Contract", text:"Medicare Advantage rewards a lifetime of work by turning savings into lower premiums and better benefits for the people who earned them." },
  { id:9, shortName:"Specialized Needs", theme:"Coverage", text:"Medicare Advantage stands beside patients with complex or chronic conditions, coordinating specialists and care managers that traditional Medicare doesn't provide." },
  { id:10, shortName:"Social Contract", theme:"Social Contract", text:"Seniors chose Medicare Advantage on a promise of dependable care. Cutting benefits breaks that promise and betrays the trust people placed in the program." },
  { id:11, shortName:"Rebates Deliver Value", theme:"Financial", text:"Medicare Advantage reinvests plan savings directly into seniors' benefits—proof that efficiency can serve people, not profit." },
  { id:12, shortName:"Better Outcomes", theme:"Innovation", text:"Medicare Advantage delivers better outcomes at lower cost by paying for coordinated, effective care instead of rewarding volume like traditional Medicare." },
  { id:13, shortName:"Preventing Costly Care", theme:"Coverage", text:"Medicare Advantage protects seniors' independence and saves money through preventive care and early detection that prevent costly illness and hospitalization." },
  { id:14, shortName:"Accountability & Outcomes", theme:"Trust", text:"Medicare Advantage ensures every dollar goes to patient care by tying payments to performance and quality outcomes." },
  { id:15, shortName:"Strengthening Medicare", theme:"Trust", text:"Medicare Advantage strengthens—not replaces—Medicare by combining public oversight with private innovation to meet today's medical realities." },
];

// ─── SEGMENTS (column order: TSP CEC TC HF PP WE PFF HHN MFL VS | UCP FJP HCP HAD HCI GHI) ───
const SEGMENTS = [
  { id:1,  code:"TSP", name:"TRUST THE SCIENCE PRAGMATISTS", party:"GOP", pop:2 },
  { id:2,  code:"CEC", name:"CONSUMER EMPOWERMENT CHAMPIONS", party:"GOP", pop:7 },
  { id:3,  code:"TC",  name:"TRADITIONAL CONSERVATIVES", party:"GOP", pop:6 },
  { id:4,  code:"HF",  name:"HEALTH FUTURISTS", party:"GOP", pop:2 },
  { id:5,  code:"PP",  name:"PRICE POPULISTS", party:"GOP", pop:3 },
  { id:6,  code:"WE",  name:"WELLNESS EVANGELISTS", party:"GOP", pop:9 },
  { id:7,  code:"PFF", name:"PALEO FREEDOM FIGHTERS", party:"GOP", pop:4 },
  { id:8,  code:"HHN", name:"HOLISTIC HEALTH NATURALISTS", party:"GOP", pop:3 },
  { id:9,  code:"MFL", name:"MEDICAL FREEDOM LIBERTARIANS", party:"GOP", pop:5 },
  { id:10, code:"VS",  name:"VACCINE SKEPTICS", party:"GOP", pop:5 },
  { id:11, code:"UCP", name:"UNIVERSAL CARE PROGRESSIVES", party:"DEM", pop:11 },
  { id:12, code:"FJP", name:"FAITH & JUSTICE PROGRESSIVES", party:"DEM", pop:10 },
  { id:13, code:"HCP", name:"HEALTH CARE PROTECTIONISTS", party:"DEM", pop:8 },
  { id:14, code:"HAD", name:"HEALTH ABUNDANCE DEMOCRATS", party:"DEM", pop:10 },
  { id:15, code:"HCI", name:"HEALTH CARE INCREMENTALISTS", party:"DEM", pop:8 },
  { id:16, code:"GHI", name:"GLOBAL HEALTH INSTITUTIONALISTS", party:"DEM", pop:6 },
];

// ─── SoP MATRICES [msg × 18] — columns: Total, TSP, CEC, TC, HF, PP, WE, PFF, HHN, MFL, VS, UCP, FJP, HCP, HAD, HCI, GHI, PE ───
const ESI_SOP = [
  [15,10,15,16, 9,13,16,17,11,15,15,17,15,17,14,15,15,20],
  [ 9, 7, 9, 8, 8,10, 8, 7, 8, 8, 9,10,10,10, 8, 9, 9, 9],
  [ 7, 6, 7, 6, 8, 8, 6, 4, 7, 7, 8, 7, 9, 8, 7, 6, 6, 5],
  [ 7, 7, 7, 8, 7, 8, 7, 8, 6, 6, 7, 7, 7, 6, 7, 6, 8, 8],
  [ 6, 6, 6, 6, 6, 5, 7, 7, 6, 6, 7, 5, 5, 6, 6, 6, 4, 6],
  [ 4, 5, 4, 3, 6, 5, 4, 3, 5, 4, 4, 4, 3, 3, 4, 4, 3, 4],
  [ 6, 7, 6, 4, 6, 6, 6, 5, 7, 6, 5, 6, 7, 4, 6, 6, 6, 6],
  [ 4, 5, 4, 3, 6, 5, 4, 4, 5, 4, 4, 5, 4, 4, 5, 4, 3, 4],
  [ 6, 6, 5, 6, 6, 5, 6, 6, 6, 6, 5, 5, 5, 5, 6, 6, 5, 4],
  [10,12,10,11, 9,10,10, 9, 9,12, 9, 8, 8,11,10,10,16,11],
  [ 7, 7, 7, 7, 7, 6, 7, 7, 7, 7, 7, 7, 6, 6, 6, 7, 6, 7],
  [ 5, 5, 5, 6, 6, 4, 6, 7, 6, 5, 5, 5, 5, 5, 6, 6, 5, 5],
  [ 5, 5, 5, 5, 6, 5, 5, 5, 5, 4, 5, 4, 5, 5, 6, 5, 4, 5],
  [ 4, 4, 3, 3, 5, 4, 4, 5, 5, 3, 4, 4, 4, 4, 4, 5, 3, 3],
  [ 6, 6, 6, 6, 7, 6, 6, 5, 8, 7, 6, 6, 7, 5, 6, 6, 6, 5],
];

const MA_SOP = [
  [ 7, 7, 7, 8, 8, 6, 7, 7, 7, 7, 7, 6, 6, 7, 7, 7, 7, 8],
  [ 9, 8,11, 8, 7,10,10,10, 7,10, 9,12,10,10, 8,10,10, 9],
  [ 3, 5, 3, 4, 5, 3, 3, 4, 5, 3, 3, 2, 3, 3, 4, 3, 2, 2],
  [10, 9,10,10,10,10,10, 8, 8,10, 9,12,10,12,10,11,11,13],
  [ 7, 8, 7, 8, 6, 8, 6, 7, 7, 6, 7, 7, 7, 7, 8, 6, 6, 7],
  [18,15,18,18,10,16,18,16,12,22,17,21,19,18,14,23,20,19],
  [ 4, 4, 4, 3, 5, 4, 4, 4, 6, 4, 3, 2, 3, 3, 4, 3, 3, 2],
  [ 4, 5, 4, 5, 5, 4, 4, 5, 5, 4, 6, 3, 4, 4, 5, 4, 4, 4],
  [ 7, 7, 7, 6, 6, 8, 6, 6, 8, 7, 8, 7, 8, 7, 6, 7, 7, 8],
  [ 6, 6, 6, 6, 7, 7, 5, 6, 6, 5, 6, 7, 6, 7, 7, 5, 6, 8],
  [ 3, 3, 3, 3, 5, 3, 3, 4, 5, 3, 3, 2, 3, 2, 4, 3, 2, 2],
  [ 5, 6, 5, 5, 6, 5, 5, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [ 8, 8, 9, 8, 8, 8, 9, 8, 8, 8, 7, 8, 9, 8, 9, 8,10, 7],
  [ 3, 4, 2, 3, 4, 4, 3, 4, 5, 3, 3, 2, 3, 3, 4, 3, 2, 2],
  [ 5, 5, 4, 5, 6, 4, 4, 6, 5, 4, 5, 4, 4, 5, 5, 4, 5, 5],
];

// ─── Theme colors ───
const THEME_COLORS = {
  Financial:"#34d399", Coverage:"#60a5fa", Innovation:"#a78bfa",
  Freedom:"#fbbf24", "Social Contract":"#f87171", Trust:"#5eead4"
};

function getSopC(v){
  if(v>=13)return{bg:"#065f46",t:"#6ee7b7"};
  if(v>=11)return{bg:"#064e3b",t:"#6ee7b7"};
  if(v>=10)return{bg:"#1a3a2a",t:"#a7f3d0"};
  if(v>=9)return{bg:"#1e293b",t:"#cbd5e1"};
  if(v>=8)return{bg:"#1a1f2e",t:"#94a3b8"};
  if(v>=7)return{bg:"#1a1520",t:"#94a3b8"};
  if(v>=6)return{bg:"#1f1318",t:"#f9a8a8"};
  return{bg:"#2d1215",t:"#fca5a5"};
}

function Tooltip({msg,x,y}){
  return(
    <div style={{position:"fixed",left:Math.min(x+12,window.innerWidth-420),top:Math.max(y-80,8),width:400,background:"#111827",border:"1px solid #334155",borderRadius:6,padding:12,zIndex:9999,pointerEvents:"none",boxShadow:"0 8px 32px rgba(0,0,0,0.6)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
        <span style={{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:700,color:"#e2e8f0",textTransform:"uppercase"}}>{msg.shortName}</span>
      </div>
      <div style={{fontSize:11,color:"#cbd5e1",lineHeight:1.6,fontStyle:"italic"}}>"{msg.text}"</div>
    </div>
  );
}

export default function MessageMap(){
  const [sortCol,setSortCol]=useState(null);
  const [tooltip,setTooltip]=useState(null);
  const [study,setStudy]=useState("ESI");

  const MESSAGES = study === "ESI" ? ESI_MESSAGES : MA_MESSAGES;
  const SOP = study === "ESI" ? ESI_SOP : MA_SOP;

  const sorted=useMemo(()=>{
    const ix=MESSAGES.map((m,i)=>({...m,idx:i}));
    if(sortCol===null)return ix;
    return[...ix].sort((a,b)=>SOP[b.idx][sortCol]-SOP[a.idx][sortCol]);
  },[sortCol,study]);

  // SOP column indices: 0=Total, 1-16=segments, 17=PE
  const totalIdx = 0;
  const segStartIdx = 1;
  const peIdx = 17;

  return(
    <div style={{maxWidth:1650,margin:"0 auto",color:"#e2e8f0"}}>
      {/* Description */}
      <div style={{marginBottom:12}}>
        <div style={{fontSize:11,color:"#94a3b8",maxWidth:1100,lineHeight:1.5}}>
          <strong style={{color:"#cbd5e1"}}>Share of Preference</strong> heatmap <span style={{color:"#64748b"}}>(a measure from a discrete choice model depicting how likely a message is chosen as the most compelling relative to other messages)</span> · 15-item MaxDiff · 16 PRISM segments + Policy Elites.
        </div>
      </div>
      {/* Study toggle */}
      <div style={{display:"flex",gap:4,marginBottom:10,alignItems:"center"}}>
        {[{k:"ESI",l:"ESI STUDY"},{k:"MA",l:"MA STUDY"}].map(s=>(
          <button key={s.k} onClick={()=>{setStudy(s.k);setSortCol(null);}} style={{fontFamily:"'JetBrains Mono',monospace",fontSize:9,letterSpacing:0.5,padding:"5px 14px",border:"1px solid",borderRadius:4,cursor:"pointer",borderColor:study===s.k?"#60a5fa":"#1e293b",background:study===s.k?"#1e3a5f":"#111827",color:study===s.k?"#93c5fd":"#64748b",transition:"all 0.15s"}}>{s.l}</button>
        ))}
      </div>

      {/* Legend */}
      <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
        <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#475569",letterSpacing:1}}>SoP:</span>
        {[{l:"≤6",bg:"#2d1215"},{l:"7-8",bg:"#1a1520"},{l:"9-10",bg:"#1e293b"},{l:"11-12",bg:"#064e3b"},{l:"≥13",bg:"#065f46"}].map((h,i)=>(<div key={i} style={{display:"flex",alignItems:"center",gap:2}}><div style={{width:10,height:10,borderRadius:2,background:h.bg,border:"1px solid #1e293b"}}/><span style={{fontSize:7,color:"#94a3b8"}}>{h.l}</span></div>))}
        <span style={{marginLeft:10,fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#475569",letterSpacing:1}}>THEME:</span>
        {Object.entries(THEME_COLORS).map(([t,c])=>(<div key={t} style={{display:"flex",alignItems:"center",gap:2}}><div style={{width:6,height:6,borderRadius:"50%",background:c}}/><span style={{fontSize:7,color:"#94a3b8"}}>{t}</span></div>))}
      </div>

      {/* Heatmap table */}
      <div style={{overflowX:"auto",marginBottom:2}}>
        <table style={{width:"100%",borderCollapse:"separate",borderSpacing:1,fontSize:11}}>
          <thead>
            <tr>
              <th colSpan={3} style={{background:"#111827",padding:2}}/>
              {/* Total */}
              <th style={{background:"#0a1a0a",color:"#34d399",fontFamily:"'JetBrains Mono',monospace",fontSize:8,letterSpacing:2,padding:"3px 0",textAlign:"center",borderBottom:"2px solid #34d399"}}>TOTAL</th>
              {/* GOP */}
              <th colSpan={10} style={{background:"#1a0a0a",color:"#f87171",fontFamily:"'JetBrains Mono',monospace",fontSize:8,letterSpacing:2,padding:"3px 0",textAlign:"center",borderBottom:"2px solid #f87171"}}>REPUBLICAN</th>
              {/* DEM */}
              <th colSpan={6} style={{background:"#0a0a1a",color:"#60a5fa",fontFamily:"'JetBrains Mono',monospace",fontSize:8,letterSpacing:2,padding:"3px 0",textAlign:"center",borderBottom:"2px solid #60a5fa"}}>DEMOCRAT</th>
              {/* PE */}
              <th style={{background:"#1a0a2a",color:"#a78bfa",fontFamily:"'JetBrains Mono',monospace",fontSize:8,letterSpacing:2,padding:"3px 0",textAlign:"center",borderBottom:"2px solid #a78bfa"}}>ELITE</th>
            </tr>
            <tr>
              <th style={{background:"#111827",width:24,padding:2}}/>
              <th style={{background:"#111827",textAlign:"left",width:140,fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#64748b",padding:"2px 4px"}}>MESSAGE</th>
              <th style={{background:"#111827",width:40,fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#64748b",padding:2}}>THEME</th>
              {/* Total sub-header */}
              <th onClick={()=>setSortCol(sortCol===totalIdx?null:totalIdx)} style={{background:sortCol===totalIdx?"#1a2332":"#000",minWidth:60,padding:"4px 2px",cursor:"pointer",fontFamily:"'Poppins',sans-serif",fontSize:7,fontWeight:700,color:sortCol===totalIdx?"#f1f5f9":"#34d399",letterSpacing:0.2,lineHeight:1.2,verticalAlign:"bottom",borderBottom:sortCol===totalIdx?"2px solid #60a5fa":"none",transition:"all 0.15s",textTransform:"uppercase"}}>
                <div style={{marginBottom:2,minHeight:30}}>TOTAL</div>
              </th>
              {/* Segment sub-headers */}
              {SEGMENTS.map((seg,si)=>(
                <th key={seg.id} onClick={()=>setSortCol(sortCol===(si+segStartIdx)?null:(si+segStartIdx))} style={{background:sortCol===(si+segStartIdx)?"#1a2332":"#000",minWidth:80,padding:"4px 2px",cursor:"pointer",fontFamily:"'Poppins',sans-serif",fontSize:7,fontWeight:700,color:sortCol===(si+segStartIdx)?"#f1f5f9":"#cbd5e1",letterSpacing:0.2,lineHeight:1.2,verticalAlign:"bottom",borderBottom:sortCol===(si+segStartIdx)?"2px solid #60a5fa":"none",transition:"all 0.15s",textTransform:"uppercase"}}>
                  <div style={{fontSize:7,color:"#64748b",fontFamily:"'JetBrains Mono',monospace",marginBottom:1}}>{seg.pop}%</div>
                  <div style={{marginBottom:2,minHeight:30}}>{seg.name}</div>
                </th>
              ))}
              {/* PE sub-header */}
              <th onClick={()=>setSortCol(sortCol===peIdx?null:peIdx)} style={{background:sortCol===peIdx?"#1a2332":"#0d0520",minWidth:60,padding:"4px 2px",cursor:"pointer",fontFamily:"'Poppins',sans-serif",fontSize:7,fontWeight:700,color:sortCol===peIdx?"#f1f5f9":"#a78bfa",letterSpacing:0.2,lineHeight:1.2,verticalAlign:"bottom",borderBottom:sortCol===peIdx?"2px solid #60a5fa":"none",transition:"all 0.15s",textTransform:"uppercase"}}>
                <div style={{marginBottom:2,minHeight:30}}>POLICY ELITES</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(msg=>(
              <tr key={msg.id} onMouseEnter={e=>e.currentTarget.style.filter="brightness(1.12)"} onMouseLeave={e=>e.currentTarget.style.filter="brightness(1)"}>
                <td style={{background:"#111827",textAlign:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#64748b",fontWeight:700,padding:2}}>{msg.id}</td>
                <td style={{background:"#111827",fontFamily:"'Poppins',sans-serif",fontSize:11,color:"#cbd5e1",fontWeight:600,padding:"3px 4px",whiteSpace:"nowrap"}}>{msg.shortName}</td>
                <td style={{background:"#111827",textAlign:"center",padding:2}}><span style={{fontSize:6,fontFamily:"'JetBrains Mono',monospace",padding:"1px 4px",borderRadius:3,background:"rgba(0,0,0,0.3)",color:THEME_COLORS[msg.theme],fontWeight:600}}>{msg.theme.toUpperCase()}</span></td>
                {/* Total cell */}
                {(()=>{const val=SOP[msg.idx][totalIdx],{bg,t:tx}=getSopC(val),isSel=sortCol===totalIdx;return(
                  <td
                    onMouseEnter={e=>setTooltip({msg,x:e.clientX,y:e.clientY})}
                    onMouseMove={e=>setTooltip(t2=>t2?{...t2,x:e.clientX,y:e.clientY}:null)}
                    onMouseLeave={()=>setTooltip(null)}
                    style={{textAlign:"center",borderRadius:2,background:isSel?`${bg}ee`:bg,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:12,color:tx,padding:"6px 2px",minWidth:60,cursor:"pointer",opacity:isSel?1:0.9,transition:"all 0.15s",borderLeft:"2px solid #34d399",borderRight:"2px solid #1e293b"}}>{val}</td>
                )})()}
                {/* Segment cells */}
                {SEGMENTS.map((seg,si)=>{const colIdx=si+segStartIdx;const val=SOP[msg.idx][colIdx],{bg,t:tx}=getSopC(val),isSel=sortCol===colIdx;return(
                  <td key={seg.id}
                    onMouseEnter={e=>setTooltip({msg,x:e.clientX,y:e.clientY})}
                    onMouseMove={e=>setTooltip(t2=>t2?{...t2,x:e.clientX,y:e.clientY}:null)}
                    onMouseLeave={()=>setTooltip(null)}
                    style={{textAlign:"center",borderRadius:2,background:isSel?`${bg}ee`:bg,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:12,color:tx,padding:"6px 2px",minWidth:80,cursor:"pointer",opacity:isSel?1:0.9,transition:"all 0.15s"}}>{val}</td>
                )})}
                {/* PE cell */}
                {(()=>{const val=SOP[msg.idx][peIdx],{bg,t:tx}=getSopC(val),isSel=sortCol===peIdx;return(
                  <td
                    onMouseEnter={e=>setTooltip({msg,x:e.clientX,y:e.clientY})}
                    onMouseMove={e=>setTooltip(t2=>t2?{...t2,x:e.clientX,y:e.clientY}:null)}
                    onMouseLeave={()=>setTooltip(null)}
                    style={{textAlign:"center",borderRadius:2,background:isSel?`${bg}ee`:bg,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:12,color:tx,padding:"6px 2px",minWidth:60,cursor:"pointer",opacity:isSel?1:0.9,transition:"all 0.15s",borderLeft:"2px solid #a78bfa"}}>{val}</td>
                )})()}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tooltip&&<Tooltip msg={tooltip.msg} x={tooltip.x} y={tooltip.y}/>}
    </div>
  );
}
