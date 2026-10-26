import{r as p,a2 as e}from"./usePrivyUi-DjMEkv-o.js";import{g as n,B as P,a_ as I,l as L,u as N,t as j,i as x,aG as b,aF as A}from"./PrivyRoot-BZqwOYr-.js";import{a as S,c as k}from"./TodoList-DnyULl18-D1tAqUjJ.js";import{n as v}from"./ScreenLayout-Cgw3TtUo-CUyDo1YW.js";import{C as B}from"./circle-check-big-C9qwA-Mi.js";import{F as w}from"./fingerprint-pattern-NrQW2oor.js";import{c as M}from"./createLucideIcon-u5N9M-Sm.js";import"./call-CzGHd1Tp.js";import"./utils-BC2Fii6b.js";import"./index-FIB-sc4Q.js";import"./secp256k1-BbqJKDBx.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./localBatchGatewayRequest-BE0Diz0P.js";import"./TopUp-CoxNFfs_.js";import"./index-Dx7MbbLG.js";import"./check-CAMnjpJG.js";import"./ModalFooter-Z_ey7Y1m-Df6E4EC4.js";import"./Screen-Vc5UlMFL-poVUm6-x.js";import"./index-CWARkn2w-DNK9rMPy.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],U=M("trash-2",z),W=({passkeys:s,name:l,isLoading:h,errorReason:m,success:c,expanded:o,onLinkPasskey:u,onUnlinkPasskey:t,onExpand:r,onBack:i,onClose:a})=>c?e.jsx(v,{title:"Passkeys updated",icon:B,iconVariant:"success",primaryCta:{label:"Done",onClick:a},onClose:a,watermark:!0}):o?e.jsx(v,{icon:w,title:"Your passkeys",onBack:i,onClose:a,watermark:!0,children:e.jsx(C,{passkeys:s,expanded:o,onUnlink:t,onExpand:r})}):e.jsxs(v,{icon:w,title:"Set up passkey verification",subtitle:"Verify with passkey",primaryCta:{label:"Add new passkey",onClick:u,loading:h},onClose:a,watermark:!0,helpText:m||void 0,children:[s.length===0?e.jsx(D,{}):e.jsx(_,{children:e.jsx(C,{passkeys:s,expanded:o,onUnlink:t,onExpand:r})}),l?e.jsxs(T,{children:[e.jsx($,{children:"New Passkey Name"}),e.jsx(V,{children:l})]}):null]});let _=n.div`
  margin-bottom: 0.75rem;
`,T=n.div`
  margin-top: 0.25rem;
`,$=n.div`
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,V=n.div`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  line-height: 1.25rem;
`,C=({passkeys:s,expanded:l,onUnlink:h,onExpand:m})=>{let[c,o]=p.useState([]),u=l?s.length:2;return e.jsxs("div",{children:[e.jsx(Y,{children:"Your passkeys"}),e.jsxs(R,{children:[s.slice(0,u).map((t=>{return e.jsxs(q,{children:[e.jsxs("div",{children:[e.jsx(G,{children:(r=t,r.authenticatorName?r.createdWithBrowser?`${r.authenticatorName} on ${r.createdWithBrowser}`:r.authenticatorName:r.createdWithBrowser?r.createdWithOs?`${r.createdWithBrowser} on ${r.createdWithOs}`:`${r.createdWithBrowser}`:"Unknown device")}),e.jsxs(K,{children:["Last used:"," ",(t.latestVerifiedAt??t.firstVerifiedAt)?.toLocaleString()??"N/A"]})]}),e.jsx(J,{disabled:c.includes(t.credentialId),onClick:()=>(async i=>{o((a=>a.concat([i]))),await h(i),o((a=>a.filter((y=>y!==i))))})(t.credentialId),children:c.includes(t.credentialId)?e.jsx(A,{}):e.jsx(U,{size:16})})]},t.credentialId);var r})),s.length>2&&!l&&e.jsx(O,{onClick:m,children:"View all"})]})]})},D=()=>e.jsxs(S,{style:{color:"var(--privy-color-foreground)"},children:[e.jsx(k,{children:"Verify with Touch ID, Face ID, PIN, or hardware key"}),e.jsx(k,{children:"Takes seconds to set up and use"}),e.jsx(k,{children:"Use your passkey to verify transactions and login to your account"})]});const fe={component:()=>{let{user:s}=P(),{unlink:l}=I(),{linkWithPasskey:h,closePrivyModal:m}=L(),{data:c}=N(),o=s?.linkedAccounts.filter((d=>d.type==="passkey")),[u,t]=p.useState(!1),[r,i]=p.useState(""),[a,y]=p.useState(!1),[E,f]=p.useState(!1);return p.useEffect((()=>{o.length===0&&f(!1)}),[o.length]),e.jsx(W,{passkeys:o,name:c?.passkeyAuthModalData?.name,isLoading:u,errorReason:r,success:a,expanded:E,onLinkPasskey:()=>{t(!0),h({name:c?.passkeyAuthModalData?.name}).then((()=>y(!0))).catch((d=>{if(d instanceof j){if(d.privyErrorCode===x.CANNOT_LINK_MORE_OF_TYPE)return void i("Cannot link more passkeys to account.");if(d.privyErrorCode===x.PASSKEY_NOT_ALLOWED)return void i("Passkey request timed out or rejected by user.")}i("Unknown error occurred.")})).finally((()=>{t(!1)}))},onUnlinkPasskey:async d=>(t(!0),await l({credentialId:d}).then((()=>y(!0))).catch((g=>{g instanceof j&&g.privyErrorCode===x.MISSING_MFA_CREDENTIALS?i("Cannot unlink a passkey enrolled in MFA"):i("Unknown error occurred.")})).finally((()=>{t(!1)}))),onExpand:()=>f(!0),onBack:()=>f(!1),onClose:()=>m()})}},xe=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`;let F=b`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`;const O=n.button`
  ${F}
`;let R=n.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0 0;
  flex-grow: 1;
  width: 100%;
`,Y=n.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`,G=n.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,K=n.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,q=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid var(--privy-color-border-default) !important;
  width: 100%;
  height: 5em;
`,H=b`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,J=n.button`
  ${H}
`;export{xe as DoubleIconWrapper,O as LinkButton,fe as LinkPasskeyScreen,W as LinkPasskeyView,fe as default};
