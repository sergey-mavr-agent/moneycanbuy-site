import{a2 as l,eG as m}from"./usePrivyUi-B8zhJp7s.js";import{Q as d}from"./TopUp-3bxyztww.js";import{W as u,g as p,aV as C,aW as f}from"./PrivyRoot-CBKNd_qX.js";const $=e=>l.jsx("svg",{viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:l.jsx("rect",{width:"50",height:"50",fill:"black",rx:10,ry:10})});let c=(e,r,t,o,g)=>{for(let i=r;i<r+o;i++)for(let a=t;a<t+g;a++){let s=e?.[a];s&&s[i]&&(s[i]=0)}return e},z=(e,r)=>{let t=d.create(e,{errorCorrectionLevel:r}).modules,o=C(Array.from(t.data),t.size);return o=c(o,0,0,7,7),o=c(o,o.length-7,0,7,7),c(o,0,o.length-7,7,7)},j=({x:e,y:r,cellSize:t,bgColor:o,fgColor:g})=>l.jsx(l.Fragment,{children:[0,1,2].map((i=>l.jsx("circle",{r:t*(7-2*i)/2,cx:e+7*t/2,cy:r+7*t/2,fill:i%2!=0?o:g},`finder-${e}-${r}-${i}`)))}),b=({cellSize:e,matrixSize:r,bgColor:t,fgColor:o})=>l.jsx(l.Fragment,{children:[[0,0],[(r-7)*e,0],[0,(r-7)*e]].map((([g,i])=>l.jsx(j,{x:g,y:i,cellSize:e,bgColor:t,fgColor:o},`finder-${g}-${i}`)))}),S=({matrix:e,cellSize:r,color:t})=>l.jsx(l.Fragment,{children:e.map(((o,g)=>o.map(((i,a)=>i?l.jsx("rect",{height:r-.4,width:r-.4,x:g*r+.1*r,y:a*r+.1*r,rx:.5*r,ry:.5*r,fill:t},`cell-${g}-${a}`):l.jsx(m.Fragment,{},`circle-${g}-${a}`)))))}),v=({cellSize:e,matrixSize:r,element:t,sizePercentage:o,bgColor:g})=>{if(!t)return l.jsx(l.Fragment,{});let i=r*(o||.14),a=Math.floor(r/2-i/2),s=Math.floor(r/2+i/2);(s-a)%2!=r%2&&(s+=1);let n=(s-a)*e,x=n-.2*n,h=a*e;return l.jsxs(l.Fragment,{children:[l.jsx("rect",{x:a*e,y:a*e,width:n,height:n,fill:g}),l.jsx(t,{x:h+.1*n,y:h+.1*n,height:x,width:x})]})},w=e=>{let r=e.outputSize,t=z(e.url,e.errorCorrectionLevel),o=r/t.length,g=f(2*o,{min:.025*r,max:.036*r});return l.jsxs("svg",{height:e.outputSize,width:e.outputSize,viewBox:`0 0 ${e.outputSize} ${e.outputSize}`,style:{height:"100%",width:"100%",padding:`${g}px`},children:[l.jsx(S,{matrix:t,cellSize:o,color:e.fgColor}),l.jsx(b,{cellSize:o,matrixSize:t.length,fgColor:e.fgColor,bgColor:e.bgColor}),l.jsx(v,{cellSize:o,element:e.logo?.element,bgColor:e.bgColor,matrixSize:t.length})]})},y=p.div.attrs({className:"ph-no-capture"})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${e=>`${e.$size}px`};
  width: ${e=>`${e.$size}px`};
  margin: auto;
  background-color: ${e=>e.$bgColor};

  && {
    border-width: 2px;
    border-color: ${e=>e.$borderColor};
    border-radius: var(--privy-border-radius-md);
  }
`;const Q=e=>{let{appearance:r}=u(),t=e.bgColor||"#FFFFFF",o=e.fgColor||"#000000",g=e.size||160,i=r.palette.colorScheme==="dark"?t:o;return l.jsx(y,{$size:g,$bgColor:t,$fgColor:o,$borderColor:i,children:l.jsx(w,{url:e.url,logo:e.hideLogo?void 0:{element:e.squareLogoElement??$},outputSize:g,bgColor:t,fgColor:o,errorCorrectionLevel:e.errorCorrectionLevel||"Q"})})};export{Q as x};
