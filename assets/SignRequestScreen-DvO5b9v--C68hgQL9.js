import{k as o,l as t,i as A,b5 as N}from"./index-BAbgmWtG.js";import{B as k,l as M,u as O,cK as z,aL as E,cH as b,cI as w,ai as I,g as u,cL as q}from"./PrivyRoot-Boe0bMfE.js";import{h as P}from"./CopyToClipboard-i_OQSBJr-CYIGfjOp.js";import{d as F}from"./Layouts-BMRfo5hw-9-Jv53Rz.js";import{a as B,i as H}from"./JsonTree-BHzNC-ic-Drkl-aKx.js";import{n as V}from"./ScreenLayout-Cgw3TtUo-CMhDtxQn.js";import{c as $}from"./createLucideIcon-BR9J-oqt.js";import"./TopUp-Fk_Prl_o.js";import"./index-Dx7MbbLG.js";import"./ModalFooter-Z_ey7Y1m-BQJx8e95.js";import"./Screen-Vc5UlMFL-HW1wVQ2K.js";import"./index-CWARkn2w-Cws67HLA.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],K=$("square-pen",J),Q=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let W=e=>{if(!A(e))return e;try{let a=N(e);return a.includes("�")?e:a}catch{return e}},G=e=>{try{let a=q.decode(e),s=new TextDecoder().decode(a);return s.includes("�")?e:s}catch{return e}},X=e=>{let{types:a,primaryType:s,...l}=e.typedData;return t.jsxs(t.Fragment,{children:[t.jsx(te,{data:l}),t.jsx(P,{text:(n=e.typedData,JSON.stringify(n,null,2)),itemName:"full payload to clipboard"})," "]});var n};const Y=({method:e,messageData:a,copy:s,iconUrl:l,isLoading:n,success:g,walletProxyIsLoading:m,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>t.jsx(V,{title:s.title,subtitle:s.description,showClose:!0,onClose:p,icon:K,iconVariant:"subtle",helpText:x?t.jsx(ee,{children:x}):void 0,primaryCta:{label:s.buttonText,onClick:c,disabled:n||g||m,loading:n},secondaryCta:d?{label:"Not now",onClick:y,disabled:n||g||m}:void 0,watermark:!0,children:t.jsxs(F,{children:[l?t.jsx(Q,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,t.jsxs(Z,{children:[e==="personal_sign"&&t.jsx(R,{children:W(a)}),e==="eth_signTypedData_v4"&&t.jsx(X,{typedData:a}),e==="solana_signMessage"&&t.jsx(R,{children:G(a)})]})]})}),me={component:()=>{let{authenticated:e}=k(),{initializeWalletProxy:a,closePrivyModal:s}=M(),{navigate:l,data:n,onUserCloseViaDialogOrKeybindRef:g}=O(),[m,x]=o.useState(!0),[d,c]=o.useState(""),[y,p]=o.useState(),[f,C]=o.useState(null),[T,S]=o.useState(!1);o.useEffect((()=>{e||l("LandingScreen")}),[e]),o.useEffect((()=>{a(z).then((i=>{x(!1),i||(c("An error has occurred, please try again."),p(new E(new b(d,w.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))}))}),[]);let{method:_,data:j,confirmAndSign:v,onSuccess:L,onFailure:D,uiOptions:r}=n.signMessage,U={title:r?.title||"Sign message",description:r?.description||"Signing this message will not cost you any fees.",buttonText:r?.buttonText||"Sign and continue"},h=i=>{i?L(i):D(y||new E(new b("The user rejected the request.",w.E4001_USER_REJECTED_REQUEST.eipCode))),s({shouldCallAuthOnSuccess:!1}),setTimeout((()=>{C(null),c(""),p(void 0)}),200)};return g.current=()=>{h(f)},t.jsx(Y,{method:_,messageData:j,copy:U,iconUrl:r?.iconUrl&&typeof r.iconUrl=="string"?r.iconUrl:void 0,isLoading:T,success:f!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:r?.isCancellable,onSign:async()=>{S(!0),c("");try{let i=await v();C(i),S(!1),setTimeout((()=>{h(i)}),I)}catch(i){console.error(i),c("An error has occurred, please try again."),p(new E(new b(d,w.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let Z=u.div`
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
`,te=u(B)`
  margin-top: 0;
`,R=u(H)`
  margin-top: 0;
`;export{me as SignRequestScreen,Y as SignRequestView,me as default};
