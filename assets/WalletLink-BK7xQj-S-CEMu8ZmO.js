import{jsxRuntimeExports as r}from"./usePrivyUi-B8zhJp7s.js";import{o$4 as $,gt as s}from"./PrivyRoot-CBKNd_qX.js";import{l as g,i as a,o as d,c as m}from"./ethers-zTjbodk5-DCAfW3tV.js";import{s as j,t as y}from"./transaction-CLaic3AD-Be282jrd.js";import{formatUnits as S}from"./index-FIB-sc4Q.js";function k(e,n){let i=parseFloat(e.toString())/j,t=v.format(n*i);return t==="$0.00"?"<$0.01":t}let v=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2});const O=({weiQuantities:e,tokenPrice:n,tokenSymbol:i})=>{let t=a(e),o=n?d(t,n):void 0,l=m(t,i);return r.jsx(c,{children:o||l})},P=({weiQuantities:e,tokenPrice:n,tokenSymbol:i})=>{let t=a(e),o=n?d(t,n):void 0,l=m(t,i);return r.jsx(c,{children:o?r.jsxs(r.Fragment,{children:[r.jsx(w,{children:"USD"}),o==="<$0.01"?r.jsxs(x,{children:[r.jsx(p,{children:"<"}),"$0.01"]}):o]}):l})},U=({quantities:e,tokenPrice:n,tokenSymbol:i="SOL",tokenDecimals:t=9})=>{let o=e.reduce(((u,f)=>u+f),0n),l=n&&i==="SOL"&&t===9?k(o,n):void 0,h=i==="SOL"&&t===9?y(o):`${S(o,t)} ${i}`;return r.jsx(c,{children:l?r.jsx(r.Fragment,{children:l==="<$0.01"?r.jsxs(x,{children:[r.jsx(p,{children:"<"}),"$0.01"]}):l}):h})};let c=s.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,w=s.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,p=s.span`
  font-size: 10px;
`,x=s.span`
  display: flex;
  align-items: center;
`;function b(e,n){return`https://explorer.solana.com/account/${e}?chain=${n}`}const Q=e=>r.jsx(F,{href:e.chainType==="ethereum"?g(e.chainId,e.walletAddress):b(e.walletAddress,e.chainId),target:"_blank",children:$(e.walletAddress)});let F=s.a`
  &:hover {
    text-decoration: underline;
  }
`;export{Q as S,U as f,P as h,O as p,k as r};
