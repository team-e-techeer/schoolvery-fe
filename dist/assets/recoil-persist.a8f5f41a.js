var u={};Object.defineProperty(u,"__esModule",{value:!0});var P=u.recoilPersist=void 0;const S=(g={})=>{if(typeof window>"u")return{persistAtom:()=>{}};const{key:s="recoil-persist",storage:n=localStorage}=g,h=({onSet:e,node:t,trigger:i,setSelf:o})=>{if(i==="get"){const r=a();typeof r.then=="function"&&r.then(c=>{c.hasOwnProperty(t.key)&&o(c[t.key])}),r.hasOwnProperty(t.key)&&o(r[t.key])}e(async(r,c,l)=>{const f=a();typeof f.then=="function"?f.then(m=>y(r,m,t.key,l)):y(r,f,t.key,l)})},y=(e,t,i,o)=>{o?delete t[i]:t[i]=e,d(t)},a=()=>{const e=n.getItem(s);return e==null?{}:typeof e=="string"?p(e):typeof e.then=="function"?e.then(p):{}},p=e=>{if(e===void 0)return{};try{return JSON.parse(e)}catch(t){return console.error(t),{}}},d=e=>{try{typeof n.mergeItem=="function"?n.mergeItem(s,JSON.stringify(e)):n.setItem(s,JSON.stringify(e))}catch(t){console.error(t)}};return{persistAtom:h}};P=u.recoilPersist=S;export{P as r};