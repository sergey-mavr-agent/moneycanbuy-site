const o=new Proxy(function(){},{get:(r,t)=>t==="then"||t===Symbol.toPrimitive?void 0:t===Symbol.iterator?[][Symbol.iterator]:o,apply:()=>o,construct:()=>o});export{o as dead};
