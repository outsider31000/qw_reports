(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function B(){}const Ae=e=>e;function Qe(e){return e()}function ze(){return Object.create(null)}function U(e){e.forEach(Qe)}function $e(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ft(e){return Object.keys(e).length===0}const We=typeof window<"u";let Xe=We?()=>window.performance.now():()=>Date.now(),Pe=We?e=>requestAnimationFrame(e):B;const le=new Set;function Ye(e){le.forEach(t=>{t.c(e)||(le.delete(t),t.f())}),le.size!==0&&Pe(Ye)}function et(e){let t;return le.size===0&&Pe(Ye),{promise:new Promise(n=>{le.add(t={c:e,f:n})}),abort(){le.delete(t)}}}function s(e,t){e.appendChild(t)}function tt(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function dt(e){const t=h("style");return pt(tt(e),t),t.sheet}function pt(e,t){return s(e.head||e,t),t.sheet}function V(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode&&e.parentNode.removeChild(e)}function Se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function Re(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function S(e){return document.createTextNode(e)}function E(){return S(" ")}function mt(){return S("")}function G(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function nt(e){return function(t){return t.preventDefault(),e.call(this,t)}}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function gt(e){return Array.from(e.childNodes)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function oe(e,t){e.value=t??""}function De(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t){r.selected=!0;return}}e.selectedIndex=-1}function _t(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function ht(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}const be=new Map;let ve=0;function yt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function bt(e,t){const n={stylesheet:dt(t),rules:{}};return be.set(e,n),n}function rt(e,t,n,r,o,l,i,m=0){const a=16.666/r;let u=`{
`;for(let x=0;x<=1;x+=a){const _=t+(n-t)*l(x);u+=x*100+`%{${i(_,1-_)}}
`}const f=u+`100% {${i(n,1-n)}}
}`,d=`__svelte_${yt(f)}_${m}`,y=tt(e),{stylesheet:w,rules:b}=be.get(y)||bt(y,e);b[d]||(b[d]=!0,w.insertRule(`@keyframes ${d} ${f}`,w.cssRules.length));const $=e.style.animation||"";return e.style.animation=`${$?`${$}, `:""}${d} ${r}ms linear ${o}ms 1 both`,ve+=1,d}function je(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?l=>l.indexOf(t)<0:l=>l.indexOf("__svelte")===-1),o=n.length-r.length;o&&(e.style.animation=r.join(", "),ve-=o,ve||vt())}function vt(){Pe(()=>{ve||(be.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&I(t)}),be.clear())})}let de;function fe(e){de=e}function ot(){if(!de)throw new Error("Function called outside component initialization");return de}function xe(e){ot().$$.on_mount.push(e)}function wt(e){ot().$$.on_destroy.push(e)}const re=[],Be=[],he=[],qe=[],$t=Promise.resolve();let Le=!1;function xt(){Le||(Le=!0,$t.then(lt))}function H(e){he.push(e)}const Ne=new Set;let te=0;function lt(){if(te!==0)return;const e=de;do{try{for(;te<re.length;){const t=re[te];te++,fe(t),kt(t.$$)}}catch(t){throw re.length=0,te=0,t}for(fe(null),re.length=0,te=0;Be.length;)Be.pop()();for(let t=0;t<he.length;t+=1){const n=he[t];Ne.has(n)||(Ne.add(n),n())}he.length=0}while(re.length);for(;qe.length;)qe.pop()();Le=!1,Ne.clear(),fe(e)}function kt(e){if(e.fragment!==null){e.update(),U(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}let ue;function st(){return ue||(ue=Promise.resolve(),ue.then(()=>{ue=null})),ue}function we(e,t,n){e.dispatchEvent(ht(`${t?"intro":"outro"}${n}`))}const ye=new Set;let K;function Me(){K={r:0,c:[],p:K}}function Te(){K.r||U(K.c),K=K.p}function O(e,t){e&&e.i&&(ye.delete(e),e.i(t))}function q(e,t,n,r){if(e&&e.o){if(ye.has(e))return;ye.add(e),K.c.push(()=>{ye.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const it={duration:0};function Oe(e,t,n){const r={direction:"in"};let o=t(e,n,r),l=!1,i,m,a=0;function u(){i&&je(e,i)}function f(){const{delay:y=0,duration:w=300,easing:b=Ae,tick:$=B,css:x}=o||it;x&&(i=rt(e,0,1,w,y,b,x,a++)),$(0,1);const _=Xe()+y,L=_+w;m&&m.abort(),l=!0,H(()=>we(e,!0,"start")),m=et(g=>{if(l){if(g>=L)return $(1,0),we(e,!0,"end"),u(),l=!1;if(g>=_){const p=b((g-_)/w);$(p,1-p)}}return l})}let d=!1;return{start(){d||(d=!0,je(e),$e(o)?(o=o(r),st().then(f)):f())},invalidate(){d=!1},end(){l&&(u(),l=!1)}}}function ke(e,t,n){const r={direction:"out"};let o=t(e,n,r),l=!0,i;const m=K;m.r+=1;function a(){const{delay:u=0,duration:f=300,easing:d=Ae,tick:y=B,css:w}=o||it;w&&(i=rt(e,1,0,f,u,d,w));const b=Xe()+u,$=b+f;H(()=>we(e,!1,"start")),et(x=>{if(l){if(x>=$)return y(0,1),we(e,!1,"end"),--m.r||U(m.c),!1;if(x>=b){const _=d((x-b)/f);y(1-_,_)}}return l})}return $e(o)?st().then(()=>{o=o(r),a()}):a(),{end(u){u&&o.tick&&o.tick(1,0),l&&(i&&je(e,i),l=!1)}}}function Ce(e){e&&e.c()}function pe(e,t,n,r){const{fragment:o,after_update:l}=e.$$;o&&o.m(t,n),r||H(()=>{const i=e.$$.on_mount.map(Qe).filter($e);e.$$.on_destroy?e.$$.on_destroy.push(...i):U(i),e.$$.on_mount=[]}),l.forEach(H)}function me(e,t){const n=e.$$;n.fragment!==null&&(U(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(e,t){e.$$.dirty[0]===-1&&(re.push(e),xt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,r,o,l,i,m=[-1]){const a=de;fe(e);const u=e.$$={fragment:null,ctx:[],props:l,update:B,not_equal:o,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:ze(),dirty:m,skip_bound:!1,root:t.target||a.$$.root};i&&i(u.root);let f=!1;if(u.ctx=n?n(e,t.props||{},(d,y,...w)=>{const b=w.length?w[0]:y;return u.ctx&&o(u.ctx[d],u.ctx[d]=b)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](b),f&&Ct(e,d)),y}):[],u.update(),f=!0,U(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const d=gt(t.target);u.fragment&&u.fragment.l(d),d.forEach(I)}else u.fragment&&u.fragment.c();t.intro&&O(e.$$.fragment),pe(e,t.target,t.anchor,t.customElement),lt()}fe(a)}class _e{$destroy(){me(this,1),this.$destroy=B}$on(t,n){if(!$e(n))return B;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ft(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Et(e,t){const n=r=>{const{action:o,data:l}=r.data;o===e&&t(l)};xe(()=>window.addEventListener("message",n)),wt(()=>window.removeEventListener("message",n))}async function z(e,t={}){const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},r=window.GetParentResourceName?window.GetParentResourceName():"nui-frame-app";return await(await fetch(`https://${r}/${e}`,n)).json()}const ne=[];function Rt(e,t=B){let n;const r=new Set;function o(m){if(ie(e,m)&&(e=m,n)){const a=!ne.length;for(const u of r)u[1](),ne.push(u,e);if(a){for(let u=0;u<ne.length;u+=2)ne[u][0](ne[u+1]);ne.length=0}}}function l(m){o(m(e))}function i(m,a=B){const u=[m,a];return r.add(u),r.size===1&&(n=t(o)||B),m(e),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:o,update:l,subscribe:i}}const se=Rt({show:!1,type:"user"}),ce=()=>!window.invokeNative;function Ee(e){return e*e*e}function Ie(e){const t=e-1;return t*t*t+1}function X(e,{delay:t=0,duration:n=400,easing:r=Ae}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:l=>`opacity: ${l*o}`}}function Fe(e,t,n){const r=e.slice();return r[8]=t[n],r}function Ge(e){let t,n,r,o,l=e[8].report_title+"",i,m,a,u=e[8].report_type+"",f,d,y=e[8].report_src+"",w,b,$,x=e[8].report_id+"",_,L,g,p=e[8].report_details+"",v,k,A,Y,Q,M,T,ee,Z,F,N,P,C,R,j,ae;function at(){return e[4](e[8])}function ut(){return e[5](e[8])}function ct(){return e[6](e[8])}return{c(){t=h("div"),n=h("div"),r=h("div"),o=h("p"),i=S(l),m=E(),a=h("p"),f=S(u),d=S(" - Player ID: "),w=S(y),b=E(),$=h("p"),_=S(x),L=E(),g=h("p"),v=S(p),k=E(),A=h("div"),Y=h("div"),Q=E(),M=h("div"),T=h("button"),T.textContent="Bring Player",ee=E(),Z=h("button"),Z.textContent="Goto Player",F=E(),N=h("button"),N.textContent="Conclude Report",P=E(),c(o,"class","font-medium text-lg"),c(a,"class","text-sm text-gray-400"),c($,"class","bg-gray-800 p-1.5 rounded-md text-xs text-gray-500 font-medium"),c(n,"class","flex items-start justify-between"),c(g,"class","text-gray-100 text-sm mt-2"),c(T,"class","border border-gray-700 bg-gray-800 px-3 py-2 rounded-md shadow-md font-medium hover:bg-gray-800/80 transition-all flex gap-2 items-center justify-center disabled:bg-gray-700/80 disabled:cursor-not-allowed text-sm"),c(Z,"class","border border-gray-700 bg-gray-800 px-3 py-2 rounded-md shadow-md font-medium hover:bg-gray-800/80 transition-all flex gap-2 items-center justify-center disabled:bg-gray-700/80 disabled:cursor-not-allowed text-sm"),c(N,"class","border border-gray-500 bg-gray-600 px-3 py-2 rounded-md shadow-md font-medium hover:bg-gray-500 transition-all flex gap-2 items-center justify-center disabled:bg-gray-700/80 disabled:cursor-not-allowed text-sm"),c(M,"class","flex gap-2 items-center"),c(A,"class","flex gap-2 items-center justify-between mt-3"),c(t,"class","bg-gray-700 px-3 py-2 rounded-md shadow-md flex flex-col")},m(J,W){V(J,t,W),s(t,n),s(n,r),s(r,o),s(o,i),s(r,m),s(r,a),s(a,f),s(a,d),s(a,w),s(n,b),s(n,$),s($,_),s(t,L),s(t,g),s(g,v),s(t,k),s(t,A),s(A,Y),s(A,Q),s(A,M),s(M,T),s(M,ee),s(M,Z),s(M,F),s(M,N),s(t,P),R=!0,j||(ae=[G(T,"click",at),G(Z,"click",ut),G(N,"click",ct)],j=!0)},p(J,W){e=J,(!R||W&1)&&l!==(l=e[8].report_title+"")&&D(i,l),(!R||W&1)&&u!==(u=e[8].report_type+"")&&D(f,u),(!R||W&1)&&y!==(y=e[8].report_src+"")&&D(w,y),(!R||W&1)&&x!==(x=e[8].report_id+"")&&D(_,x),(!R||W&1)&&p!==(p=e[8].report_details+"")&&D(v,p)},i(J){R||(C&&C.end(1),R=!0)},o(J){C=ke(t,X,{duration:400,easing:Ee}),R=!1},d(J){J&&I(t),J&&C&&C.end(),j=!1,U(ae)}}}function Nt(e){let t,n,r,o,l,i=e[0].length+"",m,a,u=e[0].length>1||e[0].length==0?"reports":"report",f,d,y,w,b,$,x=e[0],_=[];for(let g=0;g<x.length;g+=1)_[g]=Ge(Fe(e,x,g));const L=g=>q(_[g],1,1,()=>{_[g]=null});return{c(){t=h("div"),n=h("div"),r=h("h1"),r.textContent="Active Reports",o=E(),l=h("p"),m=S(i),a=S(" total "),f=S(u),d=E(),y=h("div");for(let g=0;g<_.length;g+=1)_[g].c();c(r,"class","text-2xl font-medium"),c(l,"class","bg-gray-800 p-1.5 rounded-md text-sm text-gray-500 font-medium"),c(n,"class","px-2 py-3 rounded-t-lg bg-gray-900 flex items-center justify-between"),c(y,"class","mt-2 px-2 flex flex-col gap-3 h-[90%] overflow-y-auto"),c(t,"class","container bg-gray-800 text-gray-50 rounded-lg svelte-19l26lf")},m(g,p){V(g,t,p),s(t,n),s(n,r),s(n,o),s(n,l),s(l,m),s(l,a),s(l,f),s(t,d),s(t,y);for(let v=0;v<_.length;v+=1)_[v].m(y,null);$=!0},p(g,[p]){if(e=g,(!$||p&1)&&i!==(i=e[0].length+"")&&D(m,i),(!$||p&1)&&u!==(u=e[0].length>1||e[0].length==0?"reports":"report")&&D(f,u),p&15){x=e[0];let v;for(v=0;v<x.length;v+=1){const k=Fe(e,x,v);_[v]?(_[v].p(k,p),O(_[v],1)):(_[v]=Ge(k),_[v].c(),O(_[v],1),_[v].m(y,null))}for(Me(),v=x.length;v<_.length;v+=1)L(v);Te()}},i(g){if(!$){for(let p=0;p<x.length;p+=1)O(_[p]);H(()=>{b&&b.end(1),w=Oe(t,X,{duration:400,easing:Ie}),w.start()}),$=!0}},o(g){_=_.filter(Boolean);for(let p=0;p<_.length;p+=1)q(_[p]);w&&w.invalidate(),b=ke(t,X,{duration:400,easing:Ee}),$=!1},d(g){g&&I(t),Se(_,g),g&&b&&b.end()}}}function jt(e,t,n){let r=[];async function o(f,d){if(ce())return;await z("reports/DeleteReport",{report_id:f,report_src:d})==="ok"&&n(0,r=r.filter(w=>w.report_id!==f))}async function l(f){if(ce())return;await z("actions/actionHandler",{report_src:f,action:"bring"})==="ok"&&(se.set({show:!1,type:"user"}),z("hideUI"))}async function i(f){if(ce())return;await z("actions/actionHandler",{report_src:f,action:"goto"})==="ok"&&(se.set({show:!1,type:"user"}),z("hideUI"))}return xe(async()=>{if(ce())return;const f=await z("reports/GetReports");n(0,r=f)}),[r,o,l,i,f=>l(f.report_src),f=>i(f.report_src),f=>o(f.report_id,f.report_src)]}class Lt extends _e{constructor(t){super(),ge(this,t,jt,Nt,ie,{})}}function He(e,t,n){const r=e.slice();return r[8]=t[n],r}function Ue(e){let t,n=e[8]+"",r,o;return{c(){t=h("option"),r=S(n),t.__value=o=e[8],t.value=t.__value},m(l,i){V(l,t,i),s(t,r)},p(l,i){i&8&&n!==(n=l[8]+"")&&D(r,n),i&8&&o!==(o=l[8])&&(t.__value=o,t.value=t.__value)},d(l){l&&I(t)}}}function Ve(e){let t,n,r;return{c(){t=Re("svg"),n=Re("path"),r=Re("path"),c(n,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),c(n,"fill","#E5E7EB"),c(r,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),c(r,"fill","currentColor"),c(t,"role","status"),c(t,"class","inline mr-3 w-4 h-4 text-gray-50 animate-spin"),c(t,"viewBox","0 0 100 101"),c(t,"fill","none"),c(t,"xmlns","http://www.w3.org/2000/svg")},m(o,l){V(o,t,l),s(t,n),s(t,r)},d(o){o&&I(t)}}}function At(e){let t,n,r,o,l,i,m,a,u,f,d,y,w,b,$,x,_,L,g,p,v,k,A,Y,Q,M,T,ee,Z,F=e[3],N=[];for(let C=0;C<F.length;C+=1)N[C]=Ue(He(e,F,C));let P=e[1]&&Ve();return{c(){t=h("div"),n=h("div"),n.innerHTML='<h1 class="text-2xl font-medium">New Report</h1>',r=E(),o=h("form"),l=h("div"),i=h("label"),i.textContent="Report Name",m=E(),a=h("input"),f=E(),d=h("div"),y=h("label"),y.textContent="Report Type",w=E(),b=h("select");for(let C=0;C<N.length;C+=1)N[C].c();x=E(),_=h("div"),L=h("label"),L.textContent="Report Detail",g=E(),p=h("textarea"),k=E(),A=h("button"),P&&P.c(),Y=S(`\r
      Send Report`),c(n,"class","px-2 py-3 rounded-t-lg bg-gray-900"),c(i,"for","report-name"),c(i,"class","font-medium text-sm"),c(a,"type","text"),c(a,"placeholder","Im noob..."),c(a,"class",u="border-2 bg-gray-700 px-3 py-2 rounded-md shadow-md "+(e[2]?"border-red-500":"border-gray-600")),c(l,"class","w-3/4 flex flex-col gap-2"),c(y,"for","report-type"),c(y,"class","font-medium text-sm"),c(b,"name","report-type"),c(b,"class",$="border-2 bg-gray-700 px-3 py-2 rounded-md shadow-md "+(e[2]?"border-red-500":"border-gray-600")),e[0].report_type===void 0&&H(()=>e[6].call(b)),c(d,"class","w-3/4 flex flex-col gap-2"),c(L,"for","report-details"),c(L,"class","font-medium text-sm"),c(p,"placeholder","report details here..."),c(p,"rows","10"),c(p,"class",v="border-2 "+(e[2]?"border-red-500":"border-gray-600")+" bg-gray-700 px-3 py-2 rounded-md shadow-md resize-none"),c(_,"class","w-3/4 flex flex-col gap-2"),c(A,"type","submit"),A.disabled=e[1],c(A,"class","border border-gray-600 bg-gray-700 px-3 py-2 rounded-md shadow-md w-3/4 mt-2 font-medium hover:bg-gray-600 transition-all flex gap-2 items-center justify-center disabled:bg-gray-700/80 disabled:cursor-not-allowed"),c(o,"class","mt-2 flex flex-col items-center justify-center gap-3 p-2"),c(t,"class","container bg-gray-800 text-gray-50 rounded-lg svelte-1n70ho2")},m(C,R){V(C,t,R),s(t,n),s(t,r),s(t,o),s(o,l),s(l,i),s(l,m),s(l,a),oe(a,e[0].name),s(o,f),s(o,d),s(d,y),s(d,w),s(d,b);for(let j=0;j<N.length;j+=1)N[j].m(b,null);De(b,e[0].report_type),s(o,x),s(o,_),s(_,L),s(_,g),s(_,p),oe(p,e[0].detail),s(o,k),s(o,A),P&&P.m(A,null),s(A,Y),T=!0,ee||(Z=[G(a,"input",e[5]),G(b,"change",e[6]),G(p,"input",e[7]),G(o,"submit",nt(e[4]))],ee=!0)},p(C,[R]){if(e=C,(!T||R&4&&u!==(u="border-2 bg-gray-700 px-3 py-2 rounded-md shadow-md "+(e[2]?"border-red-500":"border-gray-600")))&&c(a,"class",u),R&9&&a.value!==e[0].name&&oe(a,e[0].name),R&8){F=e[3];let j;for(j=0;j<F.length;j+=1){const ae=He(e,F,j);N[j]?N[j].p(ae,R):(N[j]=Ue(ae),N[j].c(),N[j].m(b,null))}for(;j<N.length;j+=1)N[j].d(1);N.length=F.length}(!T||R&4&&$!==($="border-2 bg-gray-700 px-3 py-2 rounded-md shadow-md "+(e[2]?"border-red-500":"border-gray-600")))&&c(b,"class",$),R&9&&De(b,e[0].report_type),(!T||R&4&&v!==(v="border-2 "+(e[2]?"border-red-500":"border-gray-600")+" bg-gray-700 px-3 py-2 rounded-md shadow-md resize-none"))&&c(p,"class",v),R&9&&oe(p,e[0].detail),e[1]?P||(P=Ve(),P.c(),P.m(A,Y)):P&&(P.d(1),P=null),(!T||R&2)&&(A.disabled=e[1])},i(C){T||(H(()=>{M&&M.end(1),Q=Oe(t,X,{duration:400,easing:Ie}),Q.start()}),T=!0)},o(C){Q&&Q.invalidate(),M=ke(t,X,{duration:400,easing:Ee}),T=!1},d(C){C&&I(t),Se(N,C),P&&P.d(),C&&M&&M.end(),ee=!1,U(Z)}}}function Pt(e,t,n){let r={name:"",report_type:"",detail:""},o=!1,l=!1,i=[];async function m(){r.name!==""&&r.detail!==""?(n(1,o=!0),await z("reports/CreateReport",r),setTimeout(()=>{n(1,o=!1),n(0,r={name:"",report_type:i[0],detail:""}),z("hideUI"),se.set({show:!1,type:"user"})},1e3)):(n(2,l=!0),setTimeout(()=>{n(2,l=!1)},1500))}xe(async()=>{const d=await z("reports/GetReportTypes");d&&(n(3,i=d),n(0,r.report_type=i[0],r))});function a(){r.name=this.value,n(0,r),n(3,i)}function u(){r.report_type=_t(this),n(0,r),n(3,i)}function f(){r.detail=this.value,n(0,r),n(3,i)}return[r,o,l,i,m,a,u,f]}class St extends _e{constructor(t){super(),ge(this,t,Pt,At,ie,{})}}function Ze(e,t,n){const r=e.slice();return r[1]=t[n],r}function Je(e){let t,n,r,o=e[1].sender+"",l,i,m,a=e[1].text+"",u,f;return{c(){t=h("div"),n=h("div"),r=h("span"),l=S(o),i=E(),m=h("p"),u=S(a),f=E(),c(r,"class","font-medium text-gray-300 mb-1 ml-1 break-all"),c(m,"class","text-sm text-gray-300"),c(n,"class","bg-gray-700 p-1.5 rounded-lg shadow-md w-full overflow-hidden")},m(d,y){V(d,t,y),s(t,n),s(n,r),s(r,l),s(n,i),s(n,m),s(m,u),s(t,f)},p(d,y){y&1&&o!==(o=d[1].sender+"")&&D(l,o),y&1&&a!==(a=d[1].text+"")&&D(u,a)},d(d){d&&I(t)}}}function Mt(e){let t,n,r,o,l,i,m,a,u,f,d,y,w,b,$,x,_,L=e[0],g=[];for(let p=0;p<L.length;p+=1)g[p]=Je(Ze(e,L,p));return{c(){t=h("div"),n=h("div"),n.innerHTML='<h1 class="text-2xl font-medium">Report Chat</h1>',r=E(),o=h("div");for(let p=0;p<g.length;p+=1)g[p].c();l=E(),i=h("div"),m=h("form"),a=h("input"),u=E(),f=h("button"),d=S("Send"),c(n,"class","px-2 py-3 rounded-t-lg bg-gray-900 flex items-center justify-between"),c(o,"class","mt-2 flex flex-col gap-2 h-[80%] overflow-y-auto px-2"),c(a,"type","text"),c(a,"placeholder","message..."),c(a,"class","border-2 bg-gray-700 px-3 py-2 rounded-md shadow-md border-gray-600 flex-1"),c(f,"type","submit"),f.disabled=y=e[1]==="",c(f,"class","border-2 border-gray-600 bg-gray-700 px-3 py-2 rounded-md shadow-md font-medium hover:bg-gray-600 transition-all flex gap-2 items-center justify-center disabled:bg-gray-700/80 disabled:cursor-not-allowed"),c(m,"class","flex items-center fixed bottom-2 gap-2 w-full px-2"),c(i,"class","mt-2 flex flex-col gap-3 relative bg-gray-900 z-40"),c(t,"class","container bg-gray-800 text-gray-50 rounded-lg svelte-afehw7")},m(p,v){V(p,t,v),s(t,n),s(t,r),s(t,o);for(let k=0;k<g.length;k+=1)g[k].m(o,null);s(t,l),s(t,i),s(i,m),s(m,a),oe(a,e[1]),s(m,u),s(m,f),s(f,d),$=!0,x||(_=[G(a,"input",e[3]),G(m,"submit",nt(e[2]))],x=!0)},p(p,[v]){if(e=p,v&1){L=e[0];let k;for(k=0;k<L.length;k+=1){const A=Ze(e,L,k);g[k]?g[k].p(A,v):(g[k]=Je(A),g[k].c(),g[k].m(o,null))}for(;k<g.length;k+=1)g[k].d(1);g.length=L.length}v&2&&a.value!==e[1]&&oe(a,e[1]),(!$||v&2&&y!==(y=e[1]===""))&&(f.disabled=y)},i(p){$||(H(()=>{b&&b.end(1),w=Oe(t,X,{duration:400,easing:Ie}),w.start()}),$=!0)},o(p){w&&w.invalidate(),b=ke(t,X,{duration:400,easing:Ee}),$=!1},d(p){p&&I(t),Se(g,p),p&&b&&b.end(),x=!1,U(_)}}}function Tt(e,t,n){let r="",o=[];function l(){r!==""&&(n(0,o=[...o,{text:r,sender:"testing"}]),n(1,r=""))}function i(){r=this.value,n(1,r)}return[o,r,l,i]}class Ot extends _e{constructor(t){super(),ge(this,t,Tt,Mt,ie,{})}}function Ke(e){let t,n,r,o;const l=[Dt,zt,It],i=[];function m(a,u){return a[1]==="admin"?0:a[1]==="user"?1:2}return t=m(e),n=i[t]=l[t](e),{c(){n.c(),r=mt()},m(a,u){i[t].m(a,u),V(a,r,u),o=!0},p(a,u){let f=t;t=m(a),t!==f&&(Me(),q(i[f],1,1,()=>{i[f]=null}),Te(),n=i[t],n||(n=i[t]=l[t](a),n.c()),O(n,1),n.m(r.parentNode,r))},i(a){o||(O(n),o=!0)},o(a){q(n),o=!1},d(a){i[t].d(a),a&&I(r)}}}function It(e){let t,n;return t=new Ot({}),{c(){Ce(t.$$.fragment)},m(r,o){pe(t,r,o),n=!0},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){me(t,r)}}}function zt(e){let t,n;return t=new St({}),{c(){Ce(t.$$.fragment)},m(r,o){pe(t,r,o),n=!0},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){me(t,r)}}}function Dt(e){let t,n;return t=new Lt({}),{c(){Ce(t.$$.fragment)},m(r,o){pe(t,r,o),n=!0},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){me(t,r)}}}function Bt(e){let t,n,r=e[0]&&Ke(e);return{c(){t=h("main"),r&&r.c()},m(o,l){V(o,t,l),r&&r.m(t,null),n=!0},p(o,[l]){o[0]?r?(r.p(o,l),l&1&&O(r,1)):(r=Ke(o),r.c(),O(r,1),r.m(t,null)):r&&(Me(),q(r,1,1,()=>{r=null}),Te())},i(o){n||(O(r),n=!0)},o(o){q(r),n=!1},d(o){o&&I(t),r&&r.d()}}}function qt(e,t,n){let r,o;return se.subscribe(l=>{n(0,r=l.show),n(1,o=l.type)}),Et("setVisible",l=>{se.set({show:l.show,type:l.type})}),xe(()=>{const l=i=>{r&&["Escape"].includes(i.code)&&(z("hideUI"),se.set({show:!1,type:"user"}))};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)}),[r,o]}class Ft extends _e{constructor(t){super(),ge(this,t,qt,Bt,ie,{})}}const Gt=(e,t=1e3)=>{if(ce())for(const n of e)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:n.action,data:n.data}}))},t)};function Ht(e){let t,n;return t=new Ft({}),{c(){Ce(t.$$.fragment)},m(r,o){pe(t,r,o),n=!0},p:B,i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){q(t.$$.fragment,r),n=!1},d(r){me(t,r)}}}function Ut(e){return Gt([{action:"setVisible",data:{show:!0,type:"admin"}}]),[]}class Vt extends _e{constructor(t){super(),ge(this,t,Ut,Ht,ie,{})}}new Vt({target:document.getElementById("app")});
