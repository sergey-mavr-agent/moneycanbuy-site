import{reactExports as p,jsxRuntimeExports as e}from"./usePrivyUi-B8zhJp7s.js";import{gt as l}from"./PrivyRoot-CBKNd_qX.js";import{Check as f}from"./check-CND49Fq3.js";import{Copy as g}from"./copy-Df2Jh3Mv.js";let a=l.button`
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
`,h=l.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,m=l(f)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,u=l(g)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;function k({children:r,iconOnly:s,value:i,hideCopyIcon:t,onCopy:c,iconSize:o=14,...n}){let[x,d]=p.useState(!1);return e.jsxs(a,{...n,onClick:()=>{navigator.clipboard.writeText(i||(typeof r=="string"?r:"")).then((()=>c?.())).catch(console.error),d(!0),setTimeout((()=>d(!1)),1500)},children:[r," ",x?e.jsxs(h,{children:[e.jsx(m,{size:o})," ",!s&&"Copied"]}):!t&&e.jsx(u,{size:o})]})}const w=({value:r,includeChildren:s,children:i,...t})=>{let[c,o]=p.useState(!1),n=()=>{navigator.clipboard.writeText(r).catch(console.error),o(!0),setTimeout((()=>o(!1)),1500)};return e.jsxs(e.Fragment,{children:[s?e.jsx(a,{...t,onClick:n,children:i}):e.jsx(e.Fragment,{children:i}),e.jsx(a,{...t,onClick:n,children:c?e.jsx(h,{children:e.jsx(m,{})}):e.jsx(u,{})})]})};export{w as h,k as p};
