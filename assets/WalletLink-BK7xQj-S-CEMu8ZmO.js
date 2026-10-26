import{jsxRuntimeExports as r}from"./usePrivyUi-B8zhJp7s.js";import{o as j,gt as s}from"./PrivyRoot-CBKNd_qX.js";import{l as $,i as a,o as d,c as p}from"./ethers-zTjbodk5-DCAfW3tV.js";import{r as g}from"./getFormattedUsdFromLamports-CQLJQZzJ-C446pzMl.js";import{t as k}from"./transaction-CLaic3AD-Be282jrd.js";import{formatUnits as y}from"./index-FIB-sc4Q.js";const D=({weiQuantities:e,tokenPrice:n,tokenSymbol:o})=>{let i=a(e),t=n?d(i,n):void 0,l=p(i,o);return r.jsx(c,{children:t||l})},F=({weiQuantities:e,tokenPrice:n,tokenSymbol:o})=>{let i=a(e),t=n?d(i,n):void 0,l=p(i,o);return r.jsx(c,{children:t?r.jsxs(r.Fragment,{children:[r.jsx(S,{children:"USD"}),t==="<$0.01"?r.jsxs(h,{children:[r.jsx(m,{children:"<"}),"$0.01"]}):t]}):l})},I=({quantities:e,tokenPrice:n,tokenSymbol:o="SOL",tokenDecimals:i=9})=>{let t=e.reduce(((f,u)=>f+u),0n),l=n&&o==="SOL"&&i===9?g(t,n):void 0,x=o==="SOL"&&i===9?k(t):`${y(t,i)} ${o}`;return r.jsx(c,{children:l?r.jsx(r.Fragment,{children:l==="<$0.01"?r.jsxs(h,{children:[r.jsx(m,{children:"<"}),"$0.01"]}):l}):x})};let c=s.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,S=s.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,m=s.span`
  font-size: 10px;
`,h=s.span`
  display: flex;
  align-items: center;
`;function v(e,n){return`https://explorer.solana.com/account/${e}?chain=${n}`}const Q=e=>r.jsx(w,{href:e.chainType==="ethereum"?$(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:"_blank",children:j(e.walletAddress)});let w=s.a`
  &:hover {
    text-decoration: underline;
  }
`;export{Q as S,I as f,F as h,D as p};
