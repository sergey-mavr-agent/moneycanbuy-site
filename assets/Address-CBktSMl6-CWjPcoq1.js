import{r as p,a2 as e}from"./usePrivyUi-B8zhJp7s.js";import{c as m,g as t}from"./PrivyRoot-CBKNd_qX.js";import{f as d}from"./ModalFooter-Z_ey7Y1m-D0Yi5_k0.js";import{C as x}from"./check-CND49Fq3.js";import{C as f}from"./copy-Df2Jh3Mv.js";const k=({address:r,showCopyIcon:i,url:n,className:a})=>{let[s,l]=p.useState(!1);function c(o){o.stopPropagation(),navigator.clipboard.writeText(r).then((()=>l(!0))).catch(console.error)}return p.useEffect((()=>{if(s){let o=setTimeout((()=>l(!1)),3e3);return()=>clearTimeout(o)}}),[s]),e.jsxs(h,n?{children:[e.jsx(g,{title:r,className:a,href:`${n}/address/${r}`,target:"_blank",children:m(r)}),i&&e.jsx(d,{onClick:c,size:"sm",style:{gap:"0.375rem"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:16})]}:{children:["Copy",e.jsx(f,{size:16})]})})]}:{children:[e.jsx(u,{title:r,className:a,children:m(r)}),i&&e.jsx(d,{onClick:c,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:e.jsxs(e.Fragment,s?{children:["Copied",e.jsx(x,{size:14})]}:{children:["Copy",e.jsx(f,{size:14})]})})]})};let h=t.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,u=t.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,g=t.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;export{k as d};
