import { useState, useMemo } from "react";
import DATA from "../data/studyData";

// ─── SEGMENTS & SoP from data file ───
const SEGMENTS = DATA.segments;

// ─── Theme colors ───
const THEME_COLORS = {
  Financial:"#34d399", Coverage:"#60a5fa", Innovation:"#a78bfa",
  Freedom:"#fbbf24", "Social Contract":"#f87171", Trust:"#5eead4", Other:"#94a3b8"
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

  // Pull messages from data file — sop array: [Total, seg1..seg16, PE]
  const MESSAGES = DATA[study].messages;

  const sorted=useMemo(()=>{
    const ix=MESSAGES.map((m,i)=>({...m,idx:i}));
    if(sortCol===null)return ix;
    return[...ix].sort((a,b)=>MESSAGES[b.idx].sop[sortCol]-MESSAGES[a.idx].sop[sortCol]);
  },[sortCol,study,MESSAGES]);

  // SoP column indices: 0=Total, 1-16=segments, 17=PE
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
        {Object.entries(THEME_COLORS).filter(([t])=>t!=="Other").map(([t,c])=>(<div key={t} style={{display:"flex",alignItems:"center",gap:2}}><div style={{width:6,height:6,borderRadius:"50%",background:c}}/><span style={{fontSize:7,color:"#94a3b8"}}>{t}</span></div>))}
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
                  <div style={{marginBottom:2,minHeight:30}}>{seg.name.toUpperCase()}</div>
                </th>
              ))}
              {/* PE sub-header */}
              <th onClick={()=>setSortCol(sortCol===peIdx?null:peIdx)} style={{background:sortCol===peIdx?"#1a2332":"#0d0520",minWidth:60,padding:"4px 2px",cursor:"pointer",fontFamily:"'Poppins',sans-serif",fontSize:7,fontWeight:700,color:sortCol===peIdx?"#f1f5f9":"#a78bfa",letterSpacing:0.2,lineHeight:1.2,verticalAlign:"bottom",borderBottom:sortCol===peIdx?"2px solid #60a5fa":"none",transition:"all 0.15s",textTransform:"uppercase"}}>
                <div style={{marginBottom:2,minHeight:30}}>POLICY ELITES</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(msg=>{
              const sop = MESSAGES[msg.idx].sop;
              return(
              <tr key={msg.id} onMouseEnter={e=>e.currentTarget.style.filter="brightness(1.12)"} onMouseLeave={e=>e.currentTarget.style.filter="brightness(1)"}>
                <td style={{background:"#111827",textAlign:"center",fontFamily:"'JetBrains Mono',monospace",fontSize:7,color:"#64748b",fontWeight:700,padding:2}}>{msg.id}</td>
                <td style={{background:"#111827",fontFamily:"'Poppins',sans-serif",fontSize:11,color:"#cbd5e1",fontWeight:600,padding:"3px 4px",whiteSpace:"nowrap"}}>{msg.shortName}</td>
                <td style={{background:"#111827",textAlign:"center",padding:2}}><span style={{fontSize:6,fontFamily:"'JetBrains Mono',monospace",padding:"1px 4px",borderRadius:3,background:"rgba(0,0,0,0.3)",color:THEME_COLORS[msg.theme]||"#94a3b8",fontWeight:600}}>{(msg.theme||"").toUpperCase()}</span></td>
                {/* Total cell */}
                {(()=>{const val=sop[totalIdx],{bg,t:tx}=getSopC(val),isSel=sortCol===totalIdx;return(
                  <td
                    onMouseEnter={e=>setTooltip({msg,x:e.clientX,y:e.clientY})}
                    onMouseMove={e=>setTooltip(t2=>t2?{...t2,x:e.clientX,y:e.clientY}:null)}
                    onMouseLeave={()=>setTooltip(null)}
                    style={{textAlign:"center",borderRadius:2,background:isSel?`${bg}ee`:bg,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:12,color:tx,padding:"6px 2px",minWidth:60,cursor:"pointer",opacity:isSel?1:0.9,transition:"all 0.15s",borderLeft:"2px solid #34d399",borderRight:"2px solid #1e293b"}}>{val.toFixed(1)}</td>
                )})()}
                {/* Segment cells */}
                {SEGMENTS.map((seg,si)=>{const colIdx=si+segStartIdx;const val=sop[colIdx],{bg,t:tx}=getSopC(val),isSel=sortCol===colIdx;return(
                  <td key={seg.id}
                    onMouseEnter={e=>setTooltip({msg,x:e.clientX,y:e.clientY})}
                    onMouseMove={e=>setTooltip(t2=>t2?{...t2,x:e.clientX,y:e.clientY}:null)}
                    onMouseLeave={()=>setTooltip(null)}
                    style={{textAlign:"center",borderRadius:2,background:isSel?`${bg}ee`:bg,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:12,color:tx,padding:"6px 2px",minWidth:80,cursor:"pointer",opacity:isSel?1:0.9,transition:"all 0.15s"}}>{val.toFixed(1)}</td>
                )})}
                {/* PE cell */}
                {(()=>{const val=sop[peIdx],{bg,t:tx}=getSopC(val),isSel=sortCol===peIdx;return(
                  <td
                    onMouseEnter={e=>setTooltip({msg,x:e.clientX,y:e.clientY})}
                    onMouseMove={e=>setTooltip(t2=>t2?{...t2,x:e.clientX,y:e.clientY}:null)}
                    onMouseLeave={()=>setTooltip(null)}
                    style={{textAlign:"center",borderRadius:2,background:isSel?`${bg}ee`:bg,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,fontSize:12,color:tx,padding:"6px 2px",minWidth:60,cursor:"pointer",opacity:isSel?1:0.9,transition:"all 0.15s",borderLeft:"2px solid #a78bfa"}}>{val.toFixed(1)}</td>
                )})()}
              </tr>
            )})}
          </tbody>
        </table>
      </div>
      {tooltip&&<Tooltip msg={tooltip.msg} x={tooltip.x} y={tooltip.y}/>}
    </div>
  );
}
