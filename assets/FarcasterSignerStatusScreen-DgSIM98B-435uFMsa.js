import{reactExports as c,jsxRuntimeExports as t}from"./usePrivyUi-B8zhJp7s.js";import{u as F,We as T,l as I,B as y,libExports as x,a$5 as B,gt as o}from"./PrivyRoot-CBKNd_qX.js";import{h as O}from"./CopyToClipboard-i_OQSBJr-D1Yr0RQU.js";import{n as q}from"./OpenLink-CUpJ1mOr-k7z7K1HF.js";import{x as E}from"./QrCode-DxVwYjF5-CR5aJ7VP.js";import{n as M}from"./ScreenLayout-Cgw3TtUo-EoJvtbS2.js";import{l as h}from"./farcaster-DPlSjvF5-ChvH3y9k.js";import"./call-CzGHd1Tp.js";import"./utils-BC2Fii6b.js";import"./index-FIB-sc4Q.js";import"./secp256k1-BbqJKDBx.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./localBatchGatewayRequest-BE0Diz0P.js";import"./walletPick-Ddo8nB3D.js";import"./TopUp-3bxyztww.js";import"./index-Dx7MbbLG.js";import"./ModalFooter-Z_ey7Y1m-D0Yi5_k0.js";import"./Screen-Vc5UlMFL-BxeJ7W-l.js";import"./index-CWARkn2w-Df-0LafF.js";let S="#8a63d2";const _=({appName:u,loading:m,success:d,errorMessage:e,connectUri:a,onBack:r,onClose:l,onOpenFarcaster:s})=>t.jsx(M,x.isMobile||m?x.isIOS?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:d,fail:!!e},primaryCta:a&&s?{label:"Open Farcaster app",onClick:s}:void 0,onBack:r,onClose:l,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:d,fail:!!e},onBack:r,onClose:l,watermark:!0,children:a&&x.isMobile&&t.jsx(A,{children:t.jsx(q,{text:"Take me to Farcaster",url:a,color:S})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,onBack:r,onClose:l,watermark:!0,children:t.jsxs(R,{children:[t.jsx(L,{children:a?t.jsx(E,{url:a,size:275,squareLogoElement:h}):t.jsx(V,{children:t.jsx(B,{})})}),t.jsxs(N,{children:[t.jsx(P,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),a&&t.jsx(O,{text:a,itemName:"link",color:S})]})]})});let A=o.div`
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
`;const oe={component:()=>{let{lastScreen:u,navigateBack:m,data:d}=F(),e=T(),{requestFarcasterSignerStatus:a,closePrivyModal:r}=I(),[l,s]=c.useState(void 0),[k,v]=c.useState(!1),[b,w]=c.useState(!1),g=c.useRef([]),n=d?.farcasterSigner;c.useEffect((()=>{let j=Date.now(),i=setInterval((async()=>{if(!n?.public_key)return clearInterval(i),void s({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});n.status==="approved"&&(clearInterval(i),v(!1),w(!0),g.current.push(setTimeout((()=>r({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y)));let p=await a(n?.public_key),C=Date.now()-j;p.status==="approved"?(clearInterval(i),v(!1),w(!0),g.current.push(setTimeout((()=>r({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y))):C>3e5?(clearInterval(i),s({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):p.status==="revoked"&&(clearInterval(i),s({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))}),2e3);return()=>{clearInterval(i),g.current.forEach((p=>clearTimeout(p)))}}),[]);let f=n?.status==="pending_approval"?n.signer_approval_url:void 0;return t.jsx(_,{appName:e.name,loading:k,success:b,errorMessage:l,connectUri:f,onBack:u?m:void 0,onClose:r,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{oe as FarcasterSignerStatusScreen,_ as FarcasterSignerStatusView,oe as default};
