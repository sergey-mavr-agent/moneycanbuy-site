import{reactExports as s,jsxRuntimeExports as t}from"./usePrivyUi-B8zhJp7s.js";import{Be as A,l as N,u as k,ae$1 as M,w$2 as E,h$2 as w,k$5 as C,B as O,gt as u,base64 as $}from"./PrivyRoot-CBKNd_qX.js";import{h as z}from"./CopyToClipboard-i_OQSBJr-D1Yr0RQU.js";import{d as q}from"./Layouts-BMRfo5hw-BKT7lHY4.js";import{a as I,i as P}from"./JsonTree-BHzNC-ic-Cv4tIqWT.js";import{n as F}from"./ScreenLayout-Cgw3TtUo-EoJvtbS2.js";import{createLucideIcon as V}from"./createLucideIcon-BDyYyA0s.js";import{isHex as B,hexToString as H}from"./call-CzGHd1Tp.js";import"./index-FIB-sc4Q.js";import"./secp256k1-BbqJKDBx.js";import"./utils-BC2Fii6b.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./localBatchGatewayRequest-BE0Diz0P.js";import"./walletPick-Ddo8nB3D.js";import"./TopUp-3bxyztww.js";import"./index-Dx7MbbLG.js";import"./ModalFooter-Z_ey7Y1m-D0Yi5_k0.js";import"./Screen-Vc5UlMFL-BxeJ7W-l.js";import"./index-CWARkn2w-Df-0LafF.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],K=V("square-pen",J),Q=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let W=e=>{if(!B(e))return e;try{let i=H(e);return i.includes("�")?e:i}catch{return e}},G=e=>{try{let i=$.decode(e),a=new TextDecoder().decode(i);return a.includes("�")?e:a}catch{return e}},X=e=>{let{types:i,primaryType:a,...l}=e.typedData;return t.jsxs(t.Fragment,{children:[t.jsx(te,{data:l}),t.jsx(z,{text:(o=e.typedData,JSON.stringify(o,null,2)),itemName:"full payload to clipboard"})," "]});var o};const Y=({method:e,messageData:i,copy:a,iconUrl:l,isLoading:o,success:m,walletProxyIsLoading:g,errorMessage:h,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>t.jsx(F,{title:a.title,subtitle:a.description,showClose:!0,onClose:p,icon:K,iconVariant:"subtle",helpText:h?t.jsx(ee,{children:h}):void 0,primaryCta:{label:a.buttonText,onClick:c,disabled:o||m||g,loading:o},secondaryCta:d?{label:"Not now",onClick:y,disabled:o||m||g}:void 0,watermark:!0,children:t.jsxs(q,{children:[l?t.jsx(Q,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,t.jsxs(Z,{children:[e==="personal_sign"&&t.jsx(R,{children:W(i)}),e==="eth_signTypedData_v4"&&t.jsx(X,{typedData:i}),e==="solana_signMessage"&&t.jsx(R,{children:G(i)})]})]})}),we={component:()=>{let{authenticated:e}=A(),{initializeWalletProxy:i,closePrivyModal:a}=N(),{navigate:l,data:o,onUserCloseViaDialogOrKeybindRef:m}=k(),[g,h]=s.useState(!0),[d,c]=s.useState(""),[y,p]=s.useState(),[f,b]=s.useState(null),[T,S]=s.useState(!1);s.useEffect((()=>{e||l("LandingScreen")}),[e]),s.useEffect((()=>{i(M).then((r=>{h(!1),r||(c("An error has occurred, please try again."),p(new E(new w(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))}))}),[]);let{method:_,data:j,confirmAndSign:v,onSuccess:D,onFailure:L,uiOptions:n}=o.signMessage,U={title:n?.title||"Sign message",description:n?.description||"Signing this message will not cost you any fees.",buttonText:n?.buttonText||"Sign and continue"},x=r=>{r?D(r):L(y||new E(new w("The user rejected the request.",C.E4001_USER_REJECTED_REQUEST.eipCode))),a({shouldCallAuthOnSuccess:!1}),setTimeout((()=>{b(null),c(""),p(void 0)}),200)};return m.current=()=>{x(f)},t.jsx(Y,{method:_,messageData:j,copy:U,iconUrl:n?.iconUrl&&typeof n.iconUrl=="string"?n.iconUrl:void 0,isLoading:T,success:f!==null,walletProxyIsLoading:g,errorMessage:d,isCancellable:n?.isCancellable,onSign:async()=>{S(!0),c("");try{let r=await v();b(r),S(!1),setTimeout((()=>{x(r)}),O)}catch(r){console.error(r),c("An error has occurred, please try again."),p(new E(new w(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>x(null),onClose:()=>x(f)})}};let Z=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=u.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,te=u(I)`
  margin-top: 0;
`,R=u(P)`
  margin-top: 0;
`;export{we as SignRequestScreen,Y as SignRequestView,we as default};
