import{k as c,l as a}from"./index-BAbgmWtG.js";import{u as F,W as T,l as I,ai as y,al as x,aC as B,g as o}from"./PrivyRoot-Boe0bMfE.js";import{h as O}from"./CopyToClipboard-i_OQSBJr-CYIGfjOp.js";import{n as q}from"./OpenLink-CUpJ1mOr-BJeYxJt5.js";import{x as E}from"./QrCode-DxVwYjF5-llnWGcP5.js";import{n as M}from"./ScreenLayout-Cgw3TtUo-CMhDtxQn.js";import{l as h}from"./farcaster-DPlSjvF5-CTqf44VB.js";import"./TopUp-Fk_Prl_o.js";import"./index-Dx7MbbLG.js";import"./ModalFooter-Z_ey7Y1m-BQJx8e95.js";import"./Screen-Vc5UlMFL-HW1wVQ2K.js";import"./index-CWARkn2w-Cws67HLA.js";let k="#8a63d2";const _=({appName:u,loading:m,success:d,errorMessage:e,connectUri:t,onBack:r,onClose:l,onOpenFarcaster:s})=>a.jsx(M,x.isMobile||m?x.isIOS?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:d,fail:!!e},primaryCta:t&&s?{label:"Open Farcaster app",onClick:s}:void 0,onBack:r,onClose:l,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:d,fail:!!e},onBack:r,onClose:l,watermark:!0,children:t&&x.isMobile&&a.jsx(A,{children:a.jsx(q,{text:"Take me to Farcaster",url:t,color:k})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,onBack:r,onClose:l,watermark:!0,children:a.jsxs(R,{children:[a.jsx(L,{children:t?a.jsx(E,{url:t,size:275,squareLogoElement:h}):a.jsx(V,{children:a.jsx(B,{})})}),a.jsxs(N,{children:[a.jsx(P,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),t&&a.jsx(O,{text:t,itemName:"link",color:k})]})]})});let A=o.div`
  margin-top: 24px;
`,R=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,L=o.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,N=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,P=o.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,V=o.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const $={component:()=>{let{lastScreen:u,navigateBack:m,data:d}=F(),e=T(),{requestFarcasterSignerStatus:t,closePrivyModal:r}=I(),[l,s]=c.useState(void 0),[S,v]=c.useState(!1),[b,w]=c.useState(!1),g=c.useRef([]),n=d?.farcasterSigner;c.useEffect((()=>{let j=Date.now(),i=setInterval((async()=>{if(!n?.public_key)return clearInterval(i),void s({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});n.status==="approved"&&(clearInterval(i),v(!1),w(!0),g.current.push(setTimeout((()=>r({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y)));let p=await t(n?.public_key),C=Date.now()-j;p.status==="approved"?(clearInterval(i),v(!1),w(!0),g.current.push(setTimeout((()=>r({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y))):C>3e5?(clearInterval(i),s({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):p.status==="revoked"&&(clearInterval(i),s({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))}),2e3);return()=>{clearInterval(i),g.current.forEach((p=>clearTimeout(p)))}}),[]);let f=n?.status==="pending_approval"?n.signer_approval_url:void 0;return a.jsx(_,{appName:e.name,loading:S,success:b,errorMessage:l,connectUri:f,onBack:u?m:void 0,onClose:r,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{$ as FarcasterSignerStatusScreen,_ as FarcasterSignerStatusView,$ as default};
