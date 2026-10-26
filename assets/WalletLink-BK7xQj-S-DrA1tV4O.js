import{a2 as r}from"./usePrivyUi-DjMEkv-o.js";import{c as g,g as l}from"./PrivyRoot-BZqwOYr-.js";import{l as j,i as c,o as d,c as p}from"./ethers-zTjbodk5-BE7CuMVj.js";import{r as $}from"./getFormattedUsdFromLamports-CQLJQZzJ-C446pzMl.js";import{t as k}from"./transaction-CLaic3AD-Be282jrd.js";import{f as y}from"./index-FIB-sc4Q.js";const D=({weiQuantities:e,tokenPrice:n,tokenSymbol:o})=>{let i=c(e),t=n?d(i,n):void 0,s=p(i,o);return r.jsx(a,{children:t||s})},F=({weiQuantities:e,tokenPrice:n,tokenSymbol:o})=>{let i=c(e),t=n?d(i,n):void 0,s=p(i,o);return r.jsx(a,{children:t?r.jsxs(r.Fragment,{children:[r.jsx(S,{children:"USD"}),t==="<$0.01"?r.jsxs(h,{children:[r.jsx(m,{children:"<"}),"$0.01"]}):t]}):s})},I=({quantities:e,tokenPrice:n,tokenSymbol:o="SOL",tokenDecimals:i=9})=>{let t=e.reduce(((f,u)=>f+u),0n),s=n&&o==="SOL"&&i===9?$(t,n):void 0,x=o==="SOL"&&i===9?k(t):`${y(t,i)} ${o}`;return r.jsx(a,{children:s?r.jsx(r.Fragment,{children:s==="<$0.01"?r.jsxs(h,{children:[r.jsx(m,{children:"<"}),"$0.01"]}):s}):x})};let a=l.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,S=l.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,m=l.span`
  font-size: 10px;
`,h=l.span`
  display: flex;
  align-items: center;
`;function v(e,n){return`https://explorer.solana.com/account/${e}?chain=${n}`}const Q=e=>r.jsx(w,{href:e.chainType==="ethereum"?j(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:"_blank",children:g(e.walletAddress)});let w=l.a`
  &:hover {
    text-decoration: underline;
  }
`;export{Q as S,I as f,F as h,D as p};
