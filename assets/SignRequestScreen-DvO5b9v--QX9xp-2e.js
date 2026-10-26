import{r as n,a2 as t}from"./usePrivyUi-DjMEkv-o.js";import{B as A,l as N,u as M,cK as k,b5 as E,cH as b,cI as w,ai as O,g as u,cL as z}from"./PrivyRoot-BZqwOYr-.js";import{h as I}from"./CopyToClipboard-i_OQSBJr-DFF2EDvB.js";import{d as q}from"./Layouts-BMRfo5hw-D4Hw_N_-.js";import{a as P,i as F}from"./JsonTree-BHzNC-ic-DT0U3G-I.js";import{n as B}from"./ScreenLayout-Cgw3TtUo-CUyDo1YW.js";import{c as H}from"./createLucideIcon-u5N9M-Sm.js";import{x as V,t as $}from"./call-CzGHd1Tp.js";import"./index-FIB-sc4Q.js";import"./secp256k1-BbqJKDBx.js";import"./utils-BC2Fii6b.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./localBatchGatewayRequest-BE0Diz0P.js";import"./TopUp-CoxNFfs_.js";import"./index-Dx7MbbLG.js";import"./ModalFooter-Z_ey7Y1m-Df6E4EC4.js";import"./Screen-Vc5UlMFL-poVUm6-x.js";import"./index-CWARkn2w-DNK9rMPy.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],K=H("square-pen",J),Q=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let W=e=>{if(!V(e))return e;try{let a=$(e);return a.includes("�")?e:a}catch{return e}},G=e=>{try{let a=z.decode(e),i=new TextDecoder().decode(a);return i.includes("�")?e:i}catch{return e}},X=e=>{let{types:a,primaryType:i,...l}=e.typedData;return t.jsxs(t.Fragment,{children:[t.jsx(te,{data:l}),t.jsx(I,{text:(r=e.typedData,JSON.stringify(r,null,2)),itemName:"full payload to clipboard"})," "]});var r};const Y=({method:e,messageData:a,copy:i,iconUrl:l,isLoading:r,success:m,walletProxyIsLoading:g,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>t.jsx(B,{title:i.title,subtitle:i.description,showClose:!0,onClose:p,icon:K,iconVariant:"subtle",helpText:x?t.jsx(ee,{children:x}):void 0,primaryCta:{label:i.buttonText,onClick:c,disabled:r||m||g,loading:r},secondaryCta:d?{label:"Not now",onClick:y,disabled:r||m||g}:void 0,watermark:!0,children:t.jsxs(q,{children:[l?t.jsx(Q,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,t.jsxs(Z,{children:[e==="personal_sign"&&t.jsx(R,{children:W(a)}),e==="eth_signTypedData_v4"&&t.jsx(X,{typedData:a}),e==="solana_signMessage"&&t.jsx(R,{children:G(a)})]})]})}),Ee={component:()=>{let{authenticated:e}=A(),{initializeWalletProxy:a,closePrivyModal:i}=N(),{navigate:l,data:r,onUserCloseViaDialogOrKeybindRef:m}=M(),[g,x]=n.useState(!0),[d,c]=n.useState(""),[y,p]=n.useState(),[f,C]=n.useState(null),[T,S]=n.useState(!1);n.useEffect((()=>{e||l("LandingScreen")}),[e]),n.useEffect((()=>{a(k).then((s=>{x(!1),s||(c("An error has occurred, please try again."),p(new E(new b(d,w.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))}))}),[]);let{method:_,data:j,confirmAndSign:v,onSuccess:L,onFailure:D,uiOptions:o}=r.signMessage,U={title:o?.title||"Sign message",description:o?.description||"Signing this message will not cost you any fees.",buttonText:o?.buttonText||"Sign and continue"},h=s=>{s?L(s):D(y||new E(new b("The user rejected the request.",w.E4001_USER_REJECTED_REQUEST.eipCode))),i({shouldCallAuthOnSuccess:!1}),setTimeout((()=>{C(null),c(""),p(void 0)}),200)};return m.current=()=>{h(f)},t.jsx(Y,{method:_,messageData:j,copy:U,iconUrl:o?.iconUrl&&typeof o.iconUrl=="string"?o.iconUrl:void 0,isLoading:T,success:f!==null,walletProxyIsLoading:g,errorMessage:d,isCancellable:o?.isCancellable,onSign:async()=>{S(!0),c("");try{let s=await v();C(s),S(!1),setTimeout((()=>{h(s)}),O)}catch(s){console.error(s),c("An error has occurred, please try again."),p(new E(new b(d,w.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let Z=u.div`
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
`,te=u(P)`
  margin-top: 0;
`,R=u(F)`
  margin-top: 0;
`;export{Ee as SignRequestScreen,Y as SignRequestView,Ee as default};
