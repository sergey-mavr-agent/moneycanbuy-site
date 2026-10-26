import{reactExports as s,jsxRuntimeExports as e}from"./usePrivyUi-B8zhJp7s.js";import{ForwardRef as T}from"./ShieldCheckIcon-CNUsCbUo.js";import{Be as _,l as E,u as I,C$2 as U,ya as W,u$7 as F,gt as p,ft as N}from"./PrivyRoot-CBKNd_qX.js";import{b as O}from"./ModalFooter-Z_ey7Y1m-D0Yi5_k0.js";import{l as V}from"./Layouts-BMRfo5hw-BKT7lHY4.js";import{g as H,h as z,y as B,w as K,k as M}from"./shared-CZj36XbG-BKK4tNmL.js";import{w as o}from"./Screen-Vc5UlMFL-BxeJ7W-l.js";import"./call-CzGHd1Tp.js";import"./utils-BC2Fii6b.js";import"./index-FIB-sc4Q.js";import"./secp256k1-BbqJKDBx.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./localBatchGatewayRequest-BE0Diz0P.js";import"./walletPick-Ddo8nB3D.js";import"./TopUp-3bxyztww.js";import"./index-Dx7MbbLG.js";import"./index-CWARkn2w-Df-0LafF.js";const pe={component:()=>{let[a,u]=s.useState(!0),{authenticated:h,user:g}=_(),{walletProxy:m,closePrivyModal:y,createAnalyticsEvent:v,client:j}=E(),{navigate:b,data:C,onUserCloseViaDialogOrKeybindRef:k}=I(),[l,$]=s.useState(void 0),[x,n]=s.useState(""),[d,f]=s.useState(!1),{entropyId:c,entropyIdVerifier:A,onCompleteNavigateTo:w,onSuccess:S,onFailure:P}=C.recoverWallet,i=(r="User exited before their wallet could be recovered")=>{y({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new F(r):r)};return k.current=i,s.useEffect((()=>{if(!h)return i("User must be authenticated and have a Privy wallet before it can be recovered")}),[h]),e.jsxs(o,{children:[e.jsx(o.Header,{icon:T,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:i}),e.jsx(o.Body,{children:e.jsx(D,{children:e.jsxs("div",{children:[e.jsxs(H,{children:[e.jsx(z,{type:a?"password":"text",onChange:r=>(t=>{t&&$(t)})(r.target.value),disabled:d,style:{paddingRight:"2.3rem"}}),e.jsx(B,{style:{right:"0.75rem"},children:a?e.jsx(K,{onClick:()=>u(!1)}):e.jsx(M,{onClick:()=>u(!0)})})]}),!!x&&e.jsx(Y,{children:x})]})})}),e.jsxs(o.Footer,{children:[e.jsx(o.HelpText,{children:e.jsxs(V,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(o.Actions,{children:e.jsx(q,{loading:d||!m,disabled:!l,onClick:async()=>{f(!0);let r=await j.getAccessToken(),t=U(g,c);if(!r||!t||l===null)return i("User must be authenticated and have a Privy wallet before it can be recovered");try{v({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await m?.recover({accessToken:r,entropyId:c,entropyIdVerifier:A,recoveryPassword:l}),n(""),w?b(w):y({shouldCallAuthOnSuccess:!1}),S?.(t),v({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch(R){W(R)?n("Invalid recovery password, please try again."):n("An error has occurred, please try again.")}finally{f(!1)}},$hideAnimations:!c&&d,children:"Recover your account"})}),e.jsx(o.Watermark,{})]})]})}};let D=p.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Y=p.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,q=p(O)`
  ${({$hideAnimations:a})=>a&&N`
      && {
        /* Remove animations because the recoverWallet task on the iframe partially
           blocks the renderer, so the animation stutters and doesn't look good */
        transition: none;
      }
    `}
`;export{pe as PasswordRecoveryScreen,pe as default};
