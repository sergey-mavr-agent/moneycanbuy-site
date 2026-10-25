import{k as a,l as e}from"./index-BAbgmWtG.js";import{F as T}from"./ShieldCheckIcon-CAsC4vkh.js";import{B as _,l as E,u as I,cw as F,cx as U,bV as V,g as u,b5 as W}from"./PrivyRoot-Boe0bMfE.js";import{b as N}from"./ModalFooter-Z_ey7Y1m-BQJx8e95.js";import{l as O}from"./Layouts-BMRfo5hw-9-Jv53Rz.js";import{g as B,h as H,y as z,w as K,k as M}from"./shared-CZj36XbG-DgDubrpR.js";import{w as s}from"./Screen-Vc5UlMFL-HW1wVQ2K.js";import"./TopUp-Fk_Prl_o.js";import"./index-Dx7MbbLG.js";import"./index-CWARkn2w-Cws67HLA.js";const ae={component:()=>{let[o,h]=a.useState(!0),{authenticated:p,user:b}=_(),{walletProxy:y,closePrivyModal:m,createAnalyticsEvent:v,client:g}=E(),{navigate:j,data:k,onUserCloseViaDialogOrKeybindRef:C}=I(),[l,A]=a.useState(void 0),[x,n]=a.useState(""),[d,f]=a.useState(!1),{entropyId:c,entropyIdVerifier:$,onCompleteNavigateTo:w,onSuccess:S,onFailure:P}=k.recoverWallet,i=(r="User exited before their wallet could be recovered")=>{m({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new V(r):r)};return C.current=i,a.useEffect((()=>{if(!p)return i("User must be authenticated and have a Privy wallet before it can be recovered")}),[p]),e.jsxs(s,{children:[e.jsx(s.Header,{icon:T,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:i}),e.jsx(s.Body,{children:e.jsx(D,{children:e.jsxs("div",{children:[e.jsxs(B,{children:[e.jsx(H,{type:o?"password":"text",onChange:r=>(t=>{t&&A(t)})(r.target.value),disabled:d,style:{paddingRight:"2.3rem"}}),e.jsx(z,{style:{right:"0.75rem"},children:o?e.jsx(K,{onClick:()=>h(!1)}):e.jsx(M,{onClick:()=>h(!0)})})]}),!!x&&e.jsx(Y,{children:x})]})})}),e.jsxs(s.Footer,{children:[e.jsx(s.HelpText,{children:e.jsxs(O,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(s.Actions,{children:e.jsx(q,{loading:d||!y,disabled:!l,onClick:async()=>{f(!0);let r=await g.getAccessToken(),t=F(b,c);if(!r||!t||l===null)return i("User must be authenticated and have a Privy wallet before it can be recovered");try{v({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await y?.recover({accessToken:r,entropyId:c,entropyIdVerifier:$,recoveryPassword:l}),n(""),w?j(w):m({shouldCallAuthOnSuccess:!1}),S?.(t),v({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch(R){U(R)?n("Invalid recovery password, please try again."):n("An error has occurred, please try again.")}finally{f(!1)}},$hideAnimations:!c&&d,children:"Recover your account"})}),e.jsx(s.Watermark,{})]})]})}};let D=u.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Y=u.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,q=u(N)`
  ${({$hideAnimations:o})=>o&&W`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{ae as PasswordRecoveryScreen,ae as default};
