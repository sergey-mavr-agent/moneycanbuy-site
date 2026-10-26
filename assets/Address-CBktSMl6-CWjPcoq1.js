import{reactExports as p,jsxRuntimeExports as e}from"./usePrivyUi-B8zhJp7s.js";import{o as m,gt as s}from"./PrivyRoot-CBKNd_qX.js";import{f as d}from"./ModalFooter-Z_ey7Y1m-D0Yi5_k0.js";import{Check as x}from"./check-CND49Fq3.js";import{Copy as f}from"./copy-Df2Jh3Mv.js";const k=({address:r,showCopyIcon:i,url:n,className:l})=>{let[o,c]=p.useState(!1);function a(t){t.stopPropagation(),navigator.clipboard.writeText(r).then((()=>c(!0))).catch(console.error)}return p.useEffect((()=>{if(o){let t=setTimeout((()=>c(!1)),3e3);return()=>clearTimeout(t)}}),[o]),e.jsxs(h,n?{children:[e.jsx(g,{title:r,className:l,href:`${n}/address/${r}`,target:"_blank",children:m(r)}),i&&e.jsx(d,{onClick:a,size:"sm",style:{gap:"0.375rem"},children:e.jsxs(e.Fragment,o?{children:["Copied",e.jsx(x,{size:16})]}:{children:["Copy",e.jsx(f,{size:16})]})})]}:{children:[e.jsx(u,{title:r,className:l,children:m(r)}),i&&e.jsx(d,{onClick:a,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:e.jsxs(e.Fragment,o?{children:["Copied",e.jsx(x,{size:14})]}:{children:["Copy",e.jsx(f,{size:14})]})})]})};let h=s.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,u=s.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,g=s.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{k as d};
