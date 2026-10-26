import{r as m,a2 as e}from"./usePrivyUi-B8zhJp7s.js";import{g as r}from"./PrivyRoot-CBKNd_qX.js";import{f as p}from"./ModalFooter-Z_ey7Y1m-D0Yi5_k0.js";import{e as f}from"./ErrorMessage-D8VaAP5m-B4CUyk44.js";import{r as x}from"./LabelXs-oqZNqbm_-DEYFTYPm.js";import{d as h}from"./Address-CBktSMl6-CWjPcoq1.js";import{d as g}from"./shared-FM0rljBt-Czy9nW7M.js";import{C as j}from"./check-CND49Fq3.js";import{C as u}from"./copy-Df2Jh3Mv.js";let v=r(g)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,y=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,C=r.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,w=r.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,b=r(x)`
  text-align: left;
  margin-bottom: 0.5rem;
`,z=r(f)`
  margin-top: 0.25rem;
`,E=r(p)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const R=({errMsg:t,balance:i,address:a,className:c,title:n,showCopyButton:d=!1})=>{let[o,l]=m.useState(!1);return m.useEffect((()=>{if(o){let s=setTimeout((()=>l(!1)),3e3);return()=>clearTimeout(s)}}),[o]),e.jsxs("div",{children:[n&&e.jsx(b,{children:n}),e.jsx(v,{className:c,$state:t?"error":void 0,children:e.jsxs(y,{children:[e.jsxs(C,{children:[e.jsx(h,{address:a,showCopyIcon:!1}),i!==void 0&&e.jsx(w,{children:i})]}),d&&e.jsx(E,{onClick:function(s){s.stopPropagation(),navigator.clipboard.writeText(a).then((()=>l(!0))).catch(console.error)},size:"sm",children:e.jsxs(e.Fragment,o?{children:["Copied",e.jsx(j,{size:14})]}:{children:["Copy",e.jsx(u,{size:14})]})})]})}),t&&e.jsx(z,{children:t})]})};export{R as j};
