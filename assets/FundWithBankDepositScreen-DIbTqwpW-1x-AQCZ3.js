import{l as e,k as u}from"./index-BAbgmWtG.js";import{c3 as L,g as c,B as I,u as R,c4 as M,b1 as z,c5 as P,al as K}from"./PrivyRoot-Boe0bMfE.js";import{h as V}from"./CopyableText-CQapvaMr-BZmXq4pB.js";import{n as k}from"./ScreenLayout-Cgw3TtUo-CMhDtxQn.js";import{t as H}from"./InfoBanner-Cb3p1z12-AFq_O0Bx.js";import{C as Y,H as q}from"./hourglass-u9hr4Un2.js";import{c as N}from"./createLucideIcon-BR9J-oqt.js";import{C as O}from"./check-BEXUVwYi.js";import{C as _}from"./circle-x-CpgeG37m.js";import"./TopUp-Fk_Prl_o.js";import"./index-Dx7MbbLG.js";import"./copy-C83zbEYc.js";import"./ModalFooter-Z_ey7Y1m-BQJx8e95.js";import"./Screen-Vc5UlMFL-HW1wVQ2K.js";import"./index-CWARkn2w-Cws67HLA.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],G=N("user-check",X),J=({currency:t="usd",value:a,onChange:s,inputMode:d="decimal",autoFocus:v})=>{let[y,m]=u.useState("0"),[l,w]=u.useState(null),n=u.useRef(null),j=u.useRef(null),g=a??y,o=L[t]?.symbol??"$",x=g.length>9?"small":g.length>6?"compact":"default";u.useLayoutEffect((()=>{let r=j.current?.offsetWidth;w(r?Math.ceil(r)+2:null)}),[x,g]);let p=u.useCallback((r=>{let f=r.target.value,A=(f=f.replace(/[^\d.]/g,"")).split(".");A.length>2&&(f=A[0]+"."+A.slice(1).join(""));let[$="",S]=f.split("."),B=$.replace(/^0+(?=\d)/,"");((f=S!==void 0?`${B||"0"}.${S}`:B||"0")===""||f===".")&&(f="0"),s?s(f):m(f)}),[s]),E=u.useCallback((r=>{!(["Delete","Backspace","Tab","Escape","Enter",".","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(r.key)||(r.ctrlKey||r.metaKey)&&["a","c","v","x"].includes(r.key.toLowerCase()))&&(r.key>="0"&&r.key<="9"||r.preventDefault())}),[]);return e.jsxs(Z,{$size:x,onClick:()=>n.current?.focus(),children:[e.jsx(T,{$size:x,children:o}),e.jsx(ee,{ref:n,type:"text",inputMode:d,value:g,onChange:p,onKeyDown:E,autoFocus:v,placeholder:"0","aria-label":"Amount",style:l?{width:`${l}px`}:void 0}),e.jsx(te,{ref:j,"aria-hidden":"true",children:g}),e.jsx(T,{$size:x,style:{opacity:0},children:o})]})},Q=({selectedAsset:t,onEditSourceAsset:a})=>{let{icon:s}=L[t];return e.jsxs(re,{onClick:a,children:[e.jsx(oe,{children:s}),e.jsx(se,{children:t.toLocaleUpperCase()}),e.jsx(ae,{children:e.jsx(Y,{})})]})};let Z=c.span`
  position: relative;
  background-color: var(--privy-color-background);
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  && {
    color: var(--privy-color-foreground);
    font-size: ${({$size:t})=>t==="small"?"2.25rem":t==="compact"?"3rem":"3.75rem"};
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`,ee=c.input`
  appearance: none;
  align-self: flex-start;
  min-width: 1ch;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: left;
  caret-color: currentcolor;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`,te=c.span`
  position: absolute;
  visibility: hidden;
  white-space: pre;
  pointer-events: none;
`,T=c.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: ${({$size:t})=>t==="small"?"0.75rem":t==="compact"?"0.875rem":"1rem"};
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`,re=c.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`,oe=c.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,se=c.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,ae=c.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;const ne=({opts:t,isLoading:a,onSelectSource:s})=>e.jsx(k,{showClose:!1,showBack:!0,onBack:()=>s(t.source.selectedAsset),title:"Select currency",children:e.jsx(ie,{children:t.source.assets.map((d=>{let{icon:v,name:y}=L[d];return e.jsx(le,{onClick:()=>s(d),disabled:a,children:e.jsxs(ce,{children:[e.jsx(ue,{children:v}),e.jsxs(de,{children:[e.jsx(pe,{children:y}),e.jsx(fe,{children:d.toLocaleUpperCase()})]})]})},d)}))})});let ie=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-height: 20.875rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,le=c.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`,ce=c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,ue=c.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,de=c.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`,pe=c.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`,fe=c.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`;const me=t=>{try{return t.location.origin}catch{return}},he=({data:t,onClose:a})=>e.jsx(k,{showClose:!0,onClose:a,title:"Initiate bank transfer",subtitle:"Use the details below to complete a bank transfer from your bank.",primaryCta:{label:"Done",onClick:a},watermark:!1,footerText:"Exchange rates and fees are set when you authorize and determine the amount you receive. You'll see the applicable rates and fees for your transaction separately",children:e.jsx(ye,{children:(P[t.deposit_instructions.asset]||[]).map((([s,d],v)=>{let y=t.deposit_instructions[s];if(!y||Array.isArray(y))return null;let m=s==="asset"?y.toUpperCase():y,l=m.length>100?`${m.slice(0,9)}...${m.slice(-9)}`:m;return e.jsxs(ge,{children:[e.jsx(ve,{children:d}),e.jsx(V,{value:m,includeChildren:K.isMobile,children:e.jsx(be,{children:l})})]},v)}))})});let ye=c.ol`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;
  flex-direction: column;

  && {
    padding: 0 1rem;
  }
`,ge=c.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid var(--privy-color-border-default);
  }

  & > {
    :nth-child(1) {
      flex-basis: 30%;
    }

    :nth-child(2) {
      flex-basis: 60%;
    }
  }
`,ve=c.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'calt' off;

  /* text-xs/font-regular */
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  text-align: left;
  flex-shrink: 0;
`,be=c.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;

  /* text-sm/font-medium */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  text-align: right;
  word-break: break-all;
`;const xe=({onClose:t})=>e.jsx(k,{showClose:!0,onClose:t,icon:_,iconVariant:"error",title:"Something went wrong",subtitle:"We couldn't complete account setup. This isn't caused by anything you did.",primaryCta:{label:"Close",onClick:t},watermark:!0}),ke=({onClose:t,reason:a})=>{let s=a?a.charAt(0).toLowerCase()+a.slice(1):void 0;return e.jsx(k,{showClose:!0,onClose:t,icon:_,iconVariant:"error",title:"Identity verification failed",subtitle:s?`We can't complete identity verification because ${s}. Please try again or contact support for assistance.`:"We couldn't verify your identity. Please try again or contact support for assistance.",primaryCta:{label:"Close",onClick:t},watermark:!0})},we=({onClose:t,email:a})=>e.jsx(k,{showClose:!0,onClose:t,icon:q,title:"Identity verification in progress",subtitle:"We're waiting for Persona to approve your identity verification. This usually takes a few minutes, but may take up to 24 hours.",primaryCta:{label:"Done",onClick:t},watermark:!0,children:e.jsxs(H,{theme:"light",children:["You'll receive an email at ",a," once approved with instructions for completing your deposit."]})}),Ce=({onClose:t,onAcceptTerms:a,isLoading:s})=>e.jsx(k,{showClose:!0,onClose:t,icon:G,title:"Verify your identity to continue",subtitle:"Finish verification with Persona — it takes just a few minutes and requires a government ID.",helpText:e.jsxs(e.Fragment,{children:[`This app uses Bridge to securely connect accounts and move funds. By clicking "Accept," you agree to Bridge's`," ",e.jsx("a",{href:"https://www.bridge.xyz/legal",target:"_blank",rel:"noopener noreferrer",children:"Terms of Service"})," ","and"," ",e.jsx("a",{href:"https://www.bridge.xyz/legal/row-privacy-policy/bridge-building-limited",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"}),"."]}),primaryCta:{label:"Accept and continue",onClick:a,loading:s},watermark:!0}),je=({onClose:t})=>e.jsx(k,{showClose:!0,onClose:t,icon:O,iconVariant:"success",title:"Identity verified successfully",subtitle:"We've successfully verified your identity. Now initiate a bank transfer to view instructions.",primaryCta:{label:"Initiate bank transfer",onClick:()=>{},loading:!0},watermark:!0}),Ae=({opts:t,onClose:a,onBack:s,onEditSourceAsset:d,onSelectAmount:v,isLoading:y})=>e.jsxs(k,{showClose:!0,onClose:a,showBack:!!s,onBack:s,headerTitle:`Buy ${t.destination.asset.toLocaleUpperCase()}`,primaryCta:{label:"Continue",onClick:v,loading:y},watermark:!0,children:[e.jsx(J,{currency:t.source.selectedAsset,inputMode:"decimal",autoFocus:!0}),e.jsx(Q,{selectedAsset:t.source.selectedAsset,onEditSourceAsset:d})]}),Se=({onClose:t,onBack:a,onAcceptTerms:s,onSelectAmount:d,onSelectSource:v,onEditSourceAsset:y,opts:m,state:l,email:w,isLoading:n})=>l.status==="select-amount"?e.jsx(Ae,{onClose:t,onBack:a,onSelectAmount:d,onEditSourceAsset:y,opts:m,isLoading:n}):l.status==="select-source-asset"?e.jsx(ne,{onSelectSource:v,opts:m,isLoading:n}):l.status==="kyc-prompt"?e.jsx(Ce,{onClose:t,onAcceptTerms:s,opts:m,isLoading:n}):l.status==="kyc-incomplete"?e.jsx(we,{onClose:t,email:w}):l.status==="kyc-success"?e.jsx(je,{onClose:t}):l.status==="kyc-error"?e.jsx(ke,{onClose:t,reason:l.reason}):l.status==="account-details"?e.jsx(he,{onClose:t,data:l.data}):l.status==="create-customer-error"||l.status==="get-customer-error"?e.jsx(xe,{onClose:t}):null,Ke={component:()=>{let{user:t}=I(),a=R().data;if(!a?.FundWithBankDepositScreen)throw Error("Missing data");let{onSuccess:s,onFailure:d,onBack:v,opts:y,createOrUpdateCustomer:m,getCustomer:l,getOrCreateVirtualAccount:w}=a.FundWithBankDepositScreen,[n,j]=u.useState(y),[g,o]=u.useState({status:"select-amount"}),[x,p]=u.useState(null),[E,r]=u.useState(!1),f=u.useRef(null),A=u.useCallback((async()=>{let i;r(!0),p(null);try{i=await l({kycRedirectUrl:window.location.origin})}catch(h){if(!h||typeof h!="object"||!("status"in h)||h.status!==404)return o({status:"get-customer-error"}),p(h),void r(!1)}if(!i)try{i=await m({hasAcceptedTerms:!1,kycRedirectUrl:window.location.origin})}catch(h){return o({status:"create-customer-error"}),p(h),void r(!1)}if(!i)return o({status:"create-customer-error"}),p(Error("Unable to create customer")),void r(!1);if(i.status==="not_started"&&i.kyc_url)return o({status:"kyc-prompt",kycUrl:i.kyc_url}),void r(!1);if(i.status==="not_started")return o({status:"get-customer-error"}),p(Error("Unexpected user state")),void r(!1);if(i.status==="rejected")return o({status:"kyc-error",reason:i.rejection_reasons?.[0]?.reason}),p(Error("User KYC rejected.")),void r(!1);if(i.status==="incomplete")return o({status:"kyc-incomplete"}),void r(!1);if(i.status!=="active")return o({status:"get-customer-error"}),p(Error("Unexpected user state")),void r(!1);i.status;try{let h=await w({destination:n.destination,provider:n.provider,source:{asset:n.source.selectedAsset}});o({status:"account-details",data:h})}catch(h){return o({status:"create-customer-error"}),p(h),void r(!1)}}),[n]),$=u.useCallback((async()=>{if(p(null),r(!0),g.status!=="kyc-prompt")return p(Error("Unexpected state")),void r(!1);let i=M({location:g.kycUrl});if(await m({hasAcceptedTerms:!0}),!i)return p(Error("Unable to begin kyc flow.")),r(!1),void o({status:"create-customer-error"});f.current=new AbortController;let h=await(async(b,D)=>{let U=await z({operation:async()=>({done:me(b)===window.location.origin,closed:b.closed}),until:({done:W,closed:F})=>W||F,delay:0,interval:500,attempts:360,signal:D});return U.status==="aborted"?(b.close(),{status:"aborted"}):U.status==="max_attempts"?{status:"timeout"}:U.result.done?(b.close(),{status:"redirected"}):{status:"closed"}})(i,f.current.signal);if(h.status==="aborted")return;if(h.status==="closed")return void r(!1);h.status;let C=await z({operation:()=>l({}),until:b=>b.status==="active"||b.status==="rejected",delay:0,interval:2e3,attempts:60,signal:f.current.signal});if(C.status!=="aborted"){if(C.status==="max_attempts")return o({status:"kyc-incomplete"}),void r(!1);if(C.status,C.result.status==="rejected")return o({status:"kyc-error",reason:C.result.rejection_reasons?.[0]?.reason}),p(Error("User KYC rejected.")),void r(!1);if(C.result.status!=="active")return o({status:"kyc-incomplete"}),void r(!1);i.closed||i.close(),C.result.status;try{o({status:"kyc-success"});let b=await w({destination:n.destination,provider:n.provider,source:{asset:n.source.selectedAsset}});o({status:"account-details",data:b})}catch(b){o({status:"create-customer-error"}),p(b)}finally{r(!1)}}}),[o,p,r,m,w,g,n,f]),S=u.useCallback((i=>{o({status:"select-amount"}),j({...n,source:{...n.source,selectedAsset:i}})}),[o,j]),B=u.useCallback((()=>{o({status:"select-source-asset"})}),[o]);return e.jsx(Se,{onClose:u.useCallback((async()=>{f.current?.abort(),!n.showBackButton||g.status!=="select-amount"&&g.status!=="select-source-asset"?x?d(x):await s():d(Error("User cancelled funding"))}),[x,f,d,s,n.showBackButton,g.status]),onBack:v,opts:n,state:g,isLoading:E,email:t.email.address,onAcceptTerms:$,onSelectAmount:A,onSelectSource:S,onEditSourceAsset:B})}};export{Ke as FundWithBankDepositScreen,Ke as default};
