import{s as G,f as v,a as L,g as k,h as w,A as S,c as T,d as g,j as c,i as B,x as m,L as P,y as D,C as q,D as O,G as fe,E as de,o as ue,l as ce,m as he}from"./scheduler.45d41213.js";import{S as R,i as Y,b as Q,d as W,m as X,a as ee,t as te,e as re}from"./index.631154d2.js";import{b as me}from"./paths.248b169c.js";function z(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function ge(a){let e,t,r='<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"></path></svg>',d,i,h='<svg viewBox="0 0 24 24" fill="none" stroke-width="1.1" class="w-6 h-6"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"></path></svg>',f,x,y;return{c(){e=v("button"),t=v("span"),t.innerHTML=r,d=L(),i=v("span"),i.innerHTML=h,this.h()},l(s){e=k(s,"BUTTON",{class:!0});var l=w(e);t=k(l,"SPAN",{class:!0,["data-svelte-h"]:!0}),S(t)!=="svelte-1ocwhuu"&&(t.innerHTML=r),d=T(l),i=k(l,"SPAN",{class:!0,["data-svelte-h"]:!0}),S(i)!=="svelte-1caa3v2"&&(i.innerHTML=h),l.forEach(g),this.h()},h(){c(t,"class","dark:hidden"),c(i,"class","hidden dark:inline"),c(e,"class",f=a[0].class+" fill-primary-light stroke-primary-light hover:fill-tertiary-light hover:stroke-tertiary-light dark:fill-primary-dark dark:stroke-primary-dark dark:hover:fill-tertiary-dark dark:hover:stroke-tertiary-dark")},m(s,l){B(s,e,l),m(e,t),m(e,d),m(e,i),x||(y=P(e,"click",ve),x=!0)},p(s,[l]){l&1&&f!==(f=s[0].class+" fill-primary-light stroke-primary-light hover:fill-tertiary-light hover:stroke-tertiary-light dark:fill-primary-dark dark:stroke-primary-dark dark:hover:fill-tertiary-dark dark:hover:stroke-tertiary-dark")&&c(e,"class",f)},i:D,o:D,d(s){s&&g(e),x=!1,y()}}}function ve(){localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark")):(localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark"))}function ke(a,e,t){return a.$$set=r=>{t(0,e=q(q({},e),O(r)))},e=O(e),[e]}class pe extends R{constructor(e){super(),Y(this,e,ke,ge,G,{})}}function _e(a){let e,t;return{c(){e=v("img"),this.h()},l(r){e=k(r,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){fe(e.src,t=me+"/favicon.png")||c(e,"src",t),c(e,"class","h-9 rounded-full"),c(e,"alt","Logo")},m(r,d){B(r,e,d)},p:D,i:D,o:D,d(r){r&&g(e)}}}class xe extends R{constructor(e){super(),Y(this,e,null,_e,G,{})}}function ae(a,e,t){const r=a.slice();return r[5]=e[t],r[7]=t,r}function le(a,e,t){const r=a.slice();return r[5]=e[t],r}function se(a){let e,t,r,d='<svg viewBox="0 0 10 10" class="w-3 h-3 overflow-visible"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke-width="2" stroke-linecap="round"></path></svg>',i,h,f,x,y=z(a[0]),s=[];for(let l=0;l<y.length;l+=1)s[l]=ne(le(a,y,l));return{c(){e=v("div"),t=v("div"),r=v("button"),r.innerHTML=d,i=L(),h=v("nav");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=k(l,"DIV",{class:!0});var M=w(e);t=k(M,"DIV",{class:!0});var o=w(t);r=k(o,"BUTTON",{class:!0,["data-svelte-h"]:!0}),S(r)!=="svelte-1o8jn82"&&(r.innerHTML=d),i=T(o),h=k(o,"NAV",{class:!0});var b=w(h);for(let C=0;C<s.length;C+=1)s[C].l(b);b.forEach(g),o.forEach(g),M.forEach(g),this.h()},h(){c(r,"class","absolute top-6 right-6 w-7 h-7 flex items-center justify-center stroke-primary-light hover:stroke-tertiary-light dark:stroke-primary-dark dark:hover:stroke-tertiary-dark"),c(h,"class","text-left flex flex-col gap-6 text-lg"),c(t,"class","absolute top-6 right-6 p-6 w-full max-w-xs bg-primary-container-light dark:bg-primary-container-dark rounded-lg shadow-lg"),c(e,"class","z-50 fixed inset-0 bg-black/20 backdrop-blur-sm")},m(l,M){B(l,e,M),m(e,t),m(t,r),m(t,i),m(t,h);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(h,null);f||(x=P(r,"click",a[3]),f=!0)},p(l,M){if(M&9){y=z(l[0]);let o;for(o=0;o<y.length;o+=1){const b=le(l,y,o);s[o]?s[o].p(b,M):(s[o]=ne(b),s[o].c(),s[o].m(h,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=y.length}},d(l){l&&g(e),de(s,l),f=!1,x()}}}function ne(a){let e,t=a[5].name+"",r,d,i,h;return{c(){e=v("a"),r=ce(t),d=L(),this.h()},l(f){e=k(f,"A",{class:!0,href:!0});var x=w(e);r=he(x,t),d=T(x),x.forEach(g),this.h()},h(){c(e,"class","text-primary-container-on-light dark:text-primary-container-on-dark hover:text-tertiary-light dark:hover:text-tertiary-dark"),c(e,"href",a[5].href)},m(f,x){B(f,e,x),m(e,r),m(e,d),i||(h=P(e,"click",a[3]),i=!0)},p:D,d(f){f&&g(e),i=!1,h()}}}function ie(a){let e,t=a[5].name+"",r,d;return{c(){e=v("a"),r=ce(t),d=L(),this.h()},l(i){e=k(i,"A",{class:!0,href:!0});var h=w(e);r=he(h,t),d=T(h),h.forEach(g),this.h()},h(){c(e,"class","hover:text-tertiary-light dark:hover:text-tertiary-dark"),c(e,"href",a[5].href)},m(i,h){B(i,e,h),m(e,r),m(e,d)},p:D,d(i){i&&g(e)}}}function ye(a){let e,t,r,d,i,h,f,x="Eksno.com",y,s,l,M,o,b,C,H,F='<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>',V,N,U,J,_=a[2]&&se(a);i=new xe({});let I=z(a[0]),p=[];for(let n=0;n<I.length;n+=1)p[n]=ie(ae(a,I,n));return b=new pe({}),{c(){_&&_.c(),e=L(),t=v("header"),r=v("div"),d=v("a"),Q(i.$$.fragment),h=L(),f=v("p"),f.textContent=x,y=L(),s=v("div"),l=v("nav");for(let n=0;n<p.length;n+=1)p[n].c();M=L(),o=v("div"),Q(b.$$.fragment),C=L(),H=v("button"),H.innerHTML=F,this.h()},l(n){_&&_.l(n),e=T(n),t=k(n,"HEADER",{id:!0,class:!0});var E=w(t);r=k(E,"DIV",{class:!0});var u=w(r);d=k(u,"A",{class:!0,href:!0});var A=w(d);W(i.$$.fragment,A),h=T(A),f=k(A,"P",{class:!0,["data-svelte-h"]:!0}),S(f)!=="svelte-1f5tltl"&&(f.textContent=x),A.forEach(g),y=T(u),s=k(u,"DIV",{class:!0});var j=w(s);l=k(j,"NAV",{class:!0});var K=w(l);for(let Z=0;Z<p.length;Z+=1)p[Z].l(K);K.forEach(g),M=T(j),o=k(j,"DIV",{class:!0});var $=w(o);W(b.$$.fragment,$),C=T($),H=k($,"BUTTON",{class:!0,["data-svelte-h"]:!0}),S(H)!=="svelte-14a4q9q"&&(H.innerHTML=F),$.forEach(g),j.forEach(g),u.forEach(g),E.forEach(g),this.h()},h(){c(f,"class","hidden sm:flex text-xl my-auto pb-1"),c(d,"class","flex gap-3"),c(d,"href","/"),c(l,"class","hidden md:flex gap-6 pb-0.5"),c(H,"class","flex md:hidden stroke-primary-light hover:stroke-tertiary-light dark:stroke-primary-dark dark:hover:stroke-tertiary-dark"),c(o,"class","gap-6 pl-6 flex md:border-l md:border-secondary-light/50 md:dark:border-primary-dark/50"),c(s,"class","flex items-center ml-auto gap-6"),c(r,"class","flex relative items-center px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto"),c(t,"id","header"),c(t,"class",V=a[4].class+" "+a[1]+" text-primary-light dark:text-primary-dark border-secondary-light/10 dark:border-secondary-dark/10 top-0 z-40 w-full transition-all duration-400")},m(n,E){_&&_.m(n,E),B(n,e,E),B(n,t,E),m(t,r),m(r,d),X(i,d,null),m(d,h),m(d,f),m(r,y),m(r,s),m(s,l);for(let u=0;u<p.length;u+=1)p[u]&&p[u].m(l,null);m(s,M),m(s,o),X(b,o,null),m(o,C),m(o,H),N=!0,U||(J=P(H,"click",a[3]),U=!0)},p(n,[E]){if(n[2]?_?_.p(n,E):(_=se(n),_.c(),_.m(e.parentNode,e)):_&&(_.d(1),_=null),E&1){I=z(n[0]);let u;for(u=0;u<I.length;u+=1){const A=ae(n,I,u);p[u]?p[u].p(A,E):(p[u]=ie(A),p[u].c(),p[u].m(l,null))}for(;u<p.length;u+=1)p[u].d(1);p.length=I.length}(!N||E&18&&V!==(V=n[4].class+" "+n[1]+" text-primary-light dark:text-primary-dark border-secondary-light/10 dark:border-secondary-dark/10 top-0 z-40 w-full transition-all duration-400"))&&c(t,"class",V)},i(n){N||(ee(i.$$.fragment,n),ee(b.$$.fragment,n),N=!0)},o(n){te(i.$$.fragment,n),te(b.$$.fragment,n),N=!1},d(n){n&&(g(e),g(t)),_&&_.d(n),re(i),de(p,n),re(b),U=!1,J()}}}let oe="fixed py-12",be="fixed py-3 border-b bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur";function we(a,e,t){const r=[{name:"Home",href:"/"},{name:"D&D patch-notes",href:"/dnd/patch-notes"}];let d=oe,i=!1;function h(){t(2,i=!i)}return ue(()=>{window.addEventListener("scroll",()=>{t(1,d=window.scrollY>12?be:oe)})}),a.$$set=f=>{t(4,e=q(q({},e),O(f)))},e=O(e),[r,d,i,h,e]}class Te extends R{constructor(e){super(),Y(this,e,we,ye,G,{elements:0})}get elements(){return this.$$.ctx[0]}}export{Te as H,z as e};
