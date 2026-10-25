import{k as y,l as e}from"./index-BAbgmWtG.js";import{F}from"./ExclamationTriangleIcon-BfJ2lbIJ.js";import{F as R}from"./LockClosedIcon-7oEIKzeN.js";import{B as U,l as $,u as I,by as g,cw as w,ai as P,g as W}from"./PrivyRoot-Boe0bMfE.js";import{L as x,u as v,h as j}from"./ModalFooter-Z_ey7Y1m-BQJx8e95.js";import{r as A}from"./Subtitle-CV-2yKE4-Bpfy6Eii.js";import{e as S}from"./Title-BnzYV3Is-CMPrsG04.js";import"./TopUp-Fk_Prl_o.js";import"./index-Dx7MbbLG.js";const M=W.div`
  && {
    border-width: 4px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${t=>t.$color??"var(--privy-color-accent)"};
  border-radius: 50%;
`,z={component:()=>{let{user:t}=U(),{client:b,walletProxy:u,refreshSessionAndUser:C,closePrivyModal:s}=$(),r=I(),{entropyId:m,entropyIdVerifier:T}=r.data?.recoverWallet??{},[a,f]=y.useState(!1),[i,k]=y.useState(null),[l,h]=y.useState(null);function n(){if(!a){if(l)return r.data?.setWalletPassword?.onFailure(l),void s();if(!i)return r.data?.setWalletPassword?.onFailure(Error("User exited set recovery flow")),void s()}}r.onUserCloseViaDialogOrKeybindRef.current=n;let E=!(!a&&!i);return e.jsxs(e.Fragment,l?{children:[e.jsx(x,{onClose:n},"header"),e.jsx(M,{$color:"var(--privy-color-error)",style:{alignSelf:"center"},children:e.jsx(F,{height:38,width:38,stroke:"var(--privy-color-error)"})}),e.jsx(S,{style:{marginTop:"0.5rem"},children:"Something went wrong"}),e.jsx(g,{style:{minHeight:"2rem"}}),e.jsx(v,{onClick:()=>h(null),children:"Try again"}),e.jsx(j,{})]}:{children:[e.jsx(x,{onClose:n},"header"),e.jsx(R,{style:{width:"3rem",height:"3rem",alignSelf:"center"}}),e.jsx(S,{style:{marginTop:"0.5rem"},children:"Automatically secure your account"}),e.jsx(A,{style:{marginTop:"1rem"},children:"When you log into a new device, you’ll only need to authenticate to access your account. Never get logged out if you forget your password."}),e.jsx(g,{style:{minHeight:"2rem"}}),e.jsx(v,{loading:a,disabled:E,onClick:()=>(async function(){f(!0);try{let o=await b.getAccessToken(),c=w(t,m);if(!o||!u||!c)return;if(!(await u.setRecovery({accessToken:o,entropyId:m,entropyIdVerifier:T,existingRecoveryMethod:c.recoveryMethod,recoveryMethod:"privy"})).entropyId)throw Error("Unable to set recovery on wallet");let d=await C();if(!d)throw Error("Unable to set recovery on wallet");let p=w(d,c.address);if(!p)throw Error("Unabled to set recovery on wallet");k(!!d),setTimeout((()=>{r.data?.setWalletPassword?.onSuccess(p),s()}),P)}catch(o){h(o)}finally{f(!1)}})(),children:i?"Success":"Confirm"}),e.jsx(j,{})]})}};export{z as SetAutomaticRecoveryScreen,z as default};
