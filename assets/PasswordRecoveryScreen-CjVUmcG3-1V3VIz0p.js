import{r as a,a2 as e}from"./usePrivyUi-DGY8Toly.js";import{F as T}from"./ShieldCheckIcon-DirYbnz8.js";import{B as _,l as E,u as I,cw as F,cx as U,bV as V,g as p,aG as W}from"./PrivyRoot-C2K-WIRV.js";import{b as N}from"./ModalFooter-Z_ey7Y1m-ERKuEFrf.js";import{l as O}from"./Layouts-BMRfo5hw-DaSiF_ug.js";import{g as B,h as H,y as z,w as K,k as M}from"./shared-CZj36XbG-BRFTu34B.js";import{w as s}from"./Screen-Vc5UlMFL-CYlSZ8Mf.js";import"./call-CzGHd1Tp.js";import"./utils-BC2Fii6b.js";import"./index-FIB-sc4Q.js";import"./secp256k1-BbqJKDBx.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./localBatchGatewayRequest-BE0Diz0P.js";import"./TopUp-GMh4bNgF.js";import"./index-Dx7MbbLG.js";import"./index-CWARkn2w--kZ9tO91.js";const ce={component:()=>{let[o,u]=a.useState(!0),{authenticated:h,user:g}=_(),{walletProxy:m,closePrivyModal:y,createAnalyticsEvent:v,client:b}=E(),{navigate:j,data:k,onUserCloseViaDialogOrKeybindRef:C}=I(),[l,A]=a.useState(void 0),[x,n]=a.useState(""),[d,f]=a.useState(!1),{entropyId:c,entropyIdVerifier:$,onCompleteNavigateTo:w,onSuccess:S,onFailure:P}=k.recoverWallet,i=(r="User exited before their wallet could be recovered")=>{y({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new V(r):r)};return C.current=i,a.useEffect((()=>{if(!h)return i("User must be authenticated and have a Privy wallet before it can be recovered")}),[h]),e.jsxs(s,{children:[e.jsx(s.Header,{icon:T,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:i}),e.jsx(s.Body,{children:e.jsx(D,{children:e.jsxs("div",{children:[e.jsxs(B,{children:[e.jsx(H,{type:o?"password":"text",onChange:r=>(t=>{t&&A(t)})(r.target.value),disabled:d,style:{paddingRight:"2.3rem"}}),e.jsx(z,{style:{right:"0.75rem"},children:o?e.jsx(K,{onClick:()=>u(!1)}):e.jsx(M,{onClick:()=>u(!0)})})]}),!!x&&e.jsx(G,{children:x})]})})}),e.jsxs(s.Footer,{children:[e.jsx(s.HelpText,{children:e.jsxs(O,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(s.Actions,{children:e.jsx(Y,{loading:d||!m,disabled:!l,onClick:async()=>{f(!0);let r=await b.getAccessToken(),t=F(g,c);if(!r||!t||l===null)return i("User must be authenticated and have a Privy wallet before it can be recovered");try{v({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await m?.recover({accessToken:r,entropyId:c,entropyIdVerifier:$,recoveryPassword:l}),n(""),w?j(w):y({shouldCallAuthOnSuccess:!1}),S?.(t),v({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch(R){U(R)?n("Invalid recovery password, please try again."):n("An error has occurred, please try again.")}finally{f(!1)}},$hideAnimations:!c&&d,children:"Recover your account"})}),e.jsx(s.Watermark,{})]})]})}};let D=p.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,G=p.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,Y=p(N)`
  ${({$hideAnimations:o})=>o&&W`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{ce as PasswordRecoveryScreen,ce as default};
