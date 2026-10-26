import{r as p,a2 as e}from"./usePrivyUi-DGY8Toly.js";import{g as s}from"./PrivyRoot-C2K-WIRV.js";import{C as f}from"./check-BCgMNoa6.js";import{C as g}from"./copy-CRQvbBnG.js";let a=s.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  && {
    color: var(--privy-color-foreground);
    font-weight: 500;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,h=s.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,m=s(f)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,u=s(g)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;function k({children:r,iconOnly:l,value:i,hideCopyIcon:t,onCopy:c,iconSize:o=14,...n}){let[x,d]=p.useState(!1);return e.jsxs(a,{...n,onClick:()=>{navigator.clipboard.writeText(i||(typeof r=="string"?r:"")).then((()=>c?.())).catch(console.error),d(!0),setTimeout((()=>d(!1)),1500)},children:[r," ",x?e.jsxs(h,{children:[e.jsx(m,{size:o})," ",!l&&"Copied"]}):!t&&e.jsx(u,{size:o})]})}const w=({value:r,includeChildren:l,children:i,...t})=>{let[c,o]=p.useState(!1),n=()=>{navigator.clipboard.writeText(r).catch(console.error),o(!0),setTimeout((()=>o(!1)),1500)};return e.jsxs(e.Fragment,{children:[l?e.jsx(a,{...t,onClick:n,children:i}):e.jsx(e.Fragment,{children:i}),e.jsx(a,{...t,onClick:n,children:c?e.jsx(h,{children:e.jsx(m,{})}):e.jsx(u,{})})]})};export{w as h,k as p};
