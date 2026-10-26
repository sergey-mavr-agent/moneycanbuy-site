import{reactExports as s,jsxRuntimeExports as r}from"./usePrivyUi-B8zhJp7s.js";import{Be as I,u as U,We as M,l as D,i as d,A$1 as B,B as k,libExports as F,a$5 as W,gt as n}from"./PrivyRoot-CBKNd_qX.js";import{n as z}from"./OpenLink-CUpJ1mOr-k7z7K1HF.js";import{x as q}from"./QrCode-DxVwYjF5-CR5aJ7VP.js";import{f as V}from"./ModalFooter-Z_ey7Y1m-D0Yi5_k0.js";import{r as P}from"./LabelXs-oqZNqbm_-DEYFTYPm.js";import{a as H}from"./shouldProceedtoEmbeddedWalletCreationFlow-DJJc76nd-DaXqyUuC.js";import{n as Q}from"./ScreenLayout-Cgw3TtUo-EoJvtbS2.js";import{l as _}from"./farcaster-DPlSjvF5-ChvH3y9k.js";import{Check as J}from"./check-CND49Fq3.js";import{Copy as K}from"./copy-Df2Jh3Mv.js";import"./call-CzGHd1Tp.js";import"./utils-BC2Fii6b.js";import"./index-FIB-sc4Q.js";import"./secp256k1-BbqJKDBx.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./localBatchGatewayRequest-BE0Diz0P.js";import"./walletPick-Ddo8nB3D.js";import"./TopUp-3bxyztww.js";import"./index-Dx7MbbLG.js";import"./Screen-Vc5UlMFL-BxeJ7W-l.js";import"./index-CWARkn2w-Df-0LafF.js";import"./createLucideIcon-BDyYyA0s.js";let X=n.div`
  width: 100%;
`,Y=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem;
  height: 56px;
  background: ${e=>e.$disabled?"var(--privy-color-background-2)":"var(--privy-color-background)"};
  border: 1px solid var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);

  &:hover {
    border-color: ${e=>e.$disabled?"var(--privy-color-foreground-4)":"var(--privy-color-foreground-3)"};
  }
`,G=n.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
`,O=n.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${e=>e.$disabled?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Single-line truncation: as a flex item this would otherwise be floored at its
     min-content width, so min-width: 0 lets it shrink and the ellipsis land at the
     container edge. */
  min-width: 0;

  @media (min-width: 441px) {
    font-size: 14px;
    line-height: 20px;
  }
`,Z=n(O)`
  color: var(--privy-color-foreground-3);
  font-style: italic;
`,ee=n(P)`
  margin-bottom: 0.5rem;
`,re=n(V)`
  && {
    gap: 0.375rem;
    font-size: 14px;
    flex-shrink: 0;
  }
`;const te=({value:e,title:u,placeholder:l,className:t,showCopyButton:c=!0,truncate:i,maxLength:p=40,disabled:m=!1})=>{let[h,x]=s.useState(!1),w=i&&e?((a,S,f)=>{if((a=a.startsWith("https://")?a.slice(8):a).length<=f)return a;if(S==="middle"){let y=Math.ceil(f/2)-2,E=Math.floor(f/2)-1;return`${a.slice(0,y)}...${a.slice(-E)}`}return`${a.slice(0,f-3)}...`})(e,i,p):e;return s.useEffect((()=>{if(h){let a=setTimeout((()=>x(!1)),3e3);return()=>clearTimeout(a)}}),[h]),r.jsxs(X,{className:t,children:[u&&r.jsx(ee,{children:u}),r.jsxs(Y,{$disabled:m,children:[r.jsx(G,{children:e?r.jsx(O,{$disabled:m,title:e,children:w}):r.jsx(Z,{$disabled:m,children:l||"No value"})}),c&&e&&r.jsx(re,{onClick:function(a){a.stopPropagation(),navigator.clipboard.writeText(e).then((()=>x(!0))).catch(console.error)},size:"sm",children:r.jsxs(r.Fragment,h?{children:["Copied",r.jsx(J,{size:14})]}:{children:["Copy",r.jsx(K,{size:14})]})})]})]})},ae=({connectUri:e,loading:u,success:l,errorMessage:t,onBack:c,onClose:i,onOpenFarcaster:p})=>r.jsx(Q,F.isMobile||u?F.isIOS?{title:t?t.message:"Sign in with Farcaster",subtitle:t?t.detail:"To sign in with Farcaster, please open the Farcaster app.",icon:_,iconVariant:"loading",iconLoadingStatus:{success:l,fail:!!t},primaryCta:e&&p?{label:"Open Farcaster app",onClick:p}:void 0,onBack:c,onClose:i,watermark:!0}:{title:t?t.message:"Signing in with Farcaster",subtitle:t?t.detail:"This should only take a moment",icon:_,iconVariant:"loading",iconLoadingStatus:{success:l,fail:!!t},onBack:c,onClose:i,watermark:!0,children:e&&F.isMobile&&r.jsx(oe,{children:r.jsx(z,{text:"Take me to Farcaster",url:e,color:"#8a63d2"})})}:{title:"Sign in with Farcaster",subtitle:"Scan with your phone's camera to continue.",onBack:c,onClose:i,watermark:!0,children:r.jsxs(ie,{children:[r.jsx(ne,{children:e?r.jsx(q,{url:e,size:275,squareLogoElement:_}):r.jsx(ce,{children:r.jsx(W,{})})}),r.jsxs(se,{children:[r.jsx(le,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),e&&r.jsx(te,{value:e,truncate:"end",maxLength:30,showCopyButton:!0,disabled:!0})]})]})}),Re={component:()=>{let{authenticated:e,logout:u,ready:l,user:t}=I(),{lastScreen:c,navigate:i,navigateBack:p,setModalData:m}=U(),h=M(),{getAuthFlow:x,loginWithFarcaster:w,closePrivyModal:a,createAnalyticsEvent:S}=D(),[f,y]=s.useState(void 0),[E,R]=s.useState(!1),[b,L]=s.useState(!1),C=s.useRef([]),$=x(),T=$?.meta.connectUri;return s.useEffect((()=>{let g=Date.now(),j=setInterval((async()=>{let A=await $.pollForReady.execute(),N=Date.now()-g;if(A){clearInterval(j),R(!0);try{await w(),L(!0)}catch(o){let v={retryable:!1,message:"Authentication failed"};if(o?.privyErrorCode===d.ALLOWLIST_REJECTED)return void i("AllowlistRejectionScreen");if(o?.privyErrorCode===d.USER_LIMIT_REACHED)return console.error(new B(o).toString()),void i("UserLimitReachedScreen");if(o?.privyErrorCode===d.USER_DOES_NOT_EXIST)return void i("AccountNotFoundScreen");if(o?.privyErrorCode===d.LINKED_TO_ANOTHER_USER)v.detail=o.message??"This account has already been linked to another user.";else{if(o?.privyErrorCode===d.ACCOUNT_TRANSFER_REQUIRED&&o.data?.data?.nonce)return m({accountTransfer:{nonce:o.data?.data?.nonce,account:o.data?.data?.subject,displayName:o.data?.data?.account?.displayName,linkMethod:"farcaster",embeddedWalletAddress:o.data?.data?.otherUser?.embeddedWalletAddress,farcasterEmbeddedAddress:o.data?.data?.otherUser?.farcasterEmbeddedAddress}}),void i("LinkConflictScreen");o?.privyErrorCode===d.INVALID_CREDENTIALS?(v.retryable=!0,v.detail="Something went wrong. Try again."):o?.privyErrorCode===d.TOO_MANY_REQUESTS&&(v.detail="Too many requests. Please wait before trying again.")}y(v)}}else N>12e4&&(clearInterval(j),y({retryable:!0,message:"Authentication failed",detail:"The request timed out. Try again."}))}),2e3);return()=>{clearInterval(j),C.current.forEach((A=>clearTimeout(A)))}}),[]),s.useEffect((()=>{if(l&&e&&b&&t){if(h?.legal.requireUsersAcceptTerms&&!t.hasAcceptedTerms){let g=setTimeout((()=>{i("AffirmativeConsentScreen")}),k);return()=>clearTimeout(g)}b&&(H(t,h.embeddedWallets)?C.current.push(setTimeout((()=>{m({createWallet:{onSuccess:()=>{},onFailure:g=>{console.error(g),S({eventName:"embedded_wallet_creation_failure_logout",payload:{error:g,screen:"FarcasterConnectStatusScreen"}}),u()},callAuthOnSuccessOnClose:!0}}),i("EmbeddedWalletOnAccountCreateScreen")}),k)):C.current.push(setTimeout((()=>a({shouldCallAuthOnSuccess:!0,isSuccess:!0})),k)))}}),[b,l,e,t]),r.jsx(ae,{connectUri:T,loading:E,success:b,errorMessage:f,onBack:c?p:void 0,onClose:a,onOpenFarcaster:()=>{T&&(window.location.href=T)}})}};let oe=n.div`
  margin-top: 24px;
`,ie=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,ne=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,se=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,le=n.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,ce=n.div`
  position: relative;
  width: 82px;
  height: 82px;
`;export{Re as FarcasterConnectStatusScreen,ae as FarcasterConnectStatusView,Re as default};
