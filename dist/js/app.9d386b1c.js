(function(){var e={3909:function(e,n,t){"use strict";var i=t(5130),r=t(6768);const o={id:"app"},a={id:"nav"};function u(e,n){const t=(0,r.g2)("router-link"),i=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.Lk)("div",a,[(0,r.bF)(t,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.eW)(" | "),(0,r.bF)(t,{to:"/login-view"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1}),(0,r.bF)(t,{to:"/sign-up"},{default:(0,r.k6)((()=>[(0,r.eW)("Sign Up")])),_:1})]),(0,r.bF)(i)])}var c=t(1241);const s={},p=(0,c.A)(s,[["render",u]]);var l=p,g=t(1387);const f=e=>((0,r.Qi)("data-v-2366a636"),e=e(),(0,r.jt)(),e),m={class:"home-view"},d={class:"content"},j=f((()=>(0,r.Lk)("h2",null,"Dobrodošli na BookLovers!",-1))),v=f((()=>(0,r.Lk)("p",null,"Postani naš korisnik:",-1))),k=f((()=>(0,r.Lk)("p",null,"Već jesi naš korisnik?",-1)));function b(e,n,t,i,o,a){const u=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",m,[(0,r.Lk)("div",d,[j,(0,r.Lk)("div",null,[v,(0,r.bF)(u,{to:"/sign-up"},{default:(0,r.k6)((()=>[(0,r.eW)("Registriraj se")])),_:1})]),(0,r.Lk)("div",null,[k,(0,r.bF)(u,{to:"/login-view"},{default:(0,r.k6)((()=>[(0,r.eW)("Prijavi se")])),_:1})])])])}var h={name:"HomeView"};const y=(0,c.A)(h,[["render",b],["__scopeId","data-v-2366a636"]]);var x=y,w=t(4232);const E=e=>((0,r.Qi)("data-v-20bf9fcd"),e=e(),(0,r.jt)(),e),C={class:"favorites"},L=E((()=>(0,r.Lk)("h2",null,"Omiljene knjige",-1))),z={key:0},O=["src","alt"],_={key:1},B=E((()=>(0,r.Lk)("p",null,"Nemate omiljenih knjiga.",-1))),P=[B];function A(e,n,t,i,o,a){const u=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",C,[(0,r.bF)(u,{to:"/search-view",class:"back-link"},{default:(0,r.k6)((()=>[(0,r.eW)("Povratak na pretraživanje")])),_:1}),L,o.favoriteBooks.length?((0,r.uX)(),(0,r.CE)("div",z,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.favoriteBooks,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"book-item"},[(0,r.Lk)("img",{src:a.getImagePath(e.image),alt:e.name},null,8,O),(0,r.Lk)("p",null,(0,w.v_)(e.name),1)])))),128))])):((0,r.uX)(),(0,r.CE)("div",_,P))])}var F=t(7845),N=t(7617),S={data(){return{favoriteBooks:[],allBooks:[{id:1,name:"Nestrpljiva čizmica",image:"cizmica.jpg"},{id:2,name:"Gregorov dnevnik",image:"dnevnik.jpg"},{id:3,name:"Empatija slušanje srcem",image:"empatija.jpg"},{id:4,name:"Mali princ",image:"princ.jpg"},{id:5,name:"Zaljubljen do ušiju",image:"zaljubljen.jpg"},{id:6,name:"Besmrtnost",image:"besmrtnost.jpg"},{id:7,name:"Igre nasljedstva",image:"igre.jpg"},{id:8,name:"Bog podzemlja",image:"podzemlje.jpg"},{id:9,name:"Bonton za djecu i mlade",image:"bonton.jpg"},{id:10,name:"U potrazi za Alaskom",image:"alaska.jpg"},{id:11,name:"Bajkarenje",image:"bajkarenje.jpg"},{id:12,name:"Harry Potter i kamen mudraca",image:"harry.jpg"},{id:13,name:"Kako bolje misliti",image:"kako.jpg"},{id:14,name:"Kako manje misliti",image:"kakomanje.jpg"},{id:15,name:"Kako izbjeći manipulatore",image:"manipulatori.jpg"},{id:16,name:"Knjižnica tajni",image:"knjiznica.jpg"},{id:17,name:"Priča bez kraja",image:"prica.jpg"},{id:18,name:"Slučajni cimeri",image:"cimeeri.jpg"},{id:19,name:"Priča o plavom planetu",image:"plaviplanet.jpg"},{id:20,name:"Soba puna snova",image:"soba.jpg"}]}},async created(){const e=(0,F.xI)(),n=(0,N.aU)();if(e.currentUser)try{const t=(0,N.H9)(n,"favorites",e.currentUser.uid),i=await(0,N.x7)(t);if(i.exists()){const e=i.data().books||[];this.favoriteBooks=this.allBooks.filter((n=>e.includes(n.id)))}else console.log("Dokument nije pronađen za ovog korisnika.")}catch(t){console.error("Greška prilikom dohvaćanja omiljenih knjiga:",t)}else console.error("Korisnik nije ulogiran.")},methods:{getImagePath(e){try{return t(290)(`./${e}`)}catch(n){return console.error(`Greška prilikom učitavanja slike: ${e}`,n),""}}}};const T=(0,c.A)(S,[["render",A],["__scopeId","data-v-20bf9fcd"]]);var I=T;const U=[{path:"/",name:"home",component:x},{path:"/login-view",name:"login-view",component:()=>t.e(966).then(t.bind(t,9147))},{path:"/sign-up",name:"sign-up",component:()=>t.e(786).then(t.bind(t,6435))},{path:"/search-view",name:"search-view",component:()=>t.e(484).then(t.bind(t,8634))},{path:"/favorites",name:"Favorites",component:I}],K=(0,g.aE)({history:(0,g.LA)("/"),routes:U});var W=K;const X=(0,i.Ef)(l);X.use(W),X.mount("#app")},290:function(e,n,t){var i={"./alaska.png":5695,"./bajkarenje.jpg":1405,"./besmrtnost.jpg":2469,"./bonton.jpg":8340,"./cimeri.jpg":341,"./cizmica.jpg":1022,"./dnevnik.jpg":1789,"./empatija.jpg":3621,"./harry.jpg":1980,"./igre.jpg":9843,"./kako.jpg":7714,"./kakomanje.jpg":111,"./knjiznica.jpg":8827,"./manipulatori.jpg":9305,"./naslovna.jpg":6182,"./plaviplanet.jpg":3566,"./podzemlje.png":3424,"./prica.jpg":9349,"./princ.jpg":9724,"./soba.jpg":7705,"./zaljubljen.jpg":7367};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=290},5695:function(e,n,t){"use strict";e.exports=t.p+"img/alaska.81f0a5b5.png"},1405:function(e,n,t){"use strict";e.exports=t.p+"img/bajkarenje.bdf84493.jpg"},2469:function(e,n,t){"use strict";e.exports=t.p+"img/besmrtnost.317cfbff.jpg"},8340:function(e,n,t){"use strict";e.exports=t.p+"img/bonton.56f2c864.jpg"},341:function(e,n,t){"use strict";e.exports=t.p+"img/cimeri.8a709eb2.jpg"},1022:function(e,n,t){"use strict";e.exports=t.p+"img/cizmica.54c2a0ed.jpg"},1789:function(e,n,t){"use strict";e.exports=t.p+"img/dnevnik.9aa5f029.jpg"},3621:function(e,n,t){"use strict";e.exports=t.p+"img/empatija.a122bccf.jpg"},1980:function(e,n,t){"use strict";e.exports=t.p+"img/harry.ee21174f.jpg"},9843:function(e,n,t){"use strict";e.exports=t.p+"img/igre.589f4165.jpg"},7714:function(e,n,t){"use strict";e.exports=t.p+"img/kako.0c650ec8.jpg"},111:function(e,n,t){"use strict";e.exports=t.p+"img/kakomanje.70964f98.jpg"},8827:function(e,n,t){"use strict";e.exports=t.p+"img/knjiznica.a4c134b5.jpg"},9305:function(e,n,t){"use strict";e.exports=t.p+"img/manipulatori.e513491b.jpg"},6182:function(e,n,t){"use strict";e.exports=t.p+"img/naslovna.e86a7ea1.jpg"},3566:function(e,n,t){"use strict";e.exports=t.p+"img/plaviplanet.759e9609.jpg"},3424:function(e,n,t){"use strict";e.exports=t.p+"img/podzemlje.d564d0c5.png"},9349:function(e,n,t){"use strict";e.exports=t.p+"img/prica.1c5843cc.jpg"},9724:function(e,n,t){"use strict";e.exports=t.p+"img/princ.15efc43f.jpg"},7705:function(e,n,t){"use strict";e.exports=t.p+"img/soba.baaee91b.jpg"},7367:function(e,n,t){"use strict";e.exports=t.p+"img/zaljubljen.a373f880.jpg"}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return e[i].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,r,o){if(!i){var a=1/0;for(p=0;p<e.length;p++){i=e[p][0],r=e[p][1],o=e[p][2];for(var u=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[c])}))?i.splice(c--,1):(u=!1,o<a&&(a=o));if(u){e.splice(p--,1);var s=r();void 0!==s&&(n=s)}}return n}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[i,r,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,i){return t.f[i](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+{484:"searchview",786:"sign-up",966:"login"}[e]+"."+{484:"2110760a",786:"8ed7252e",966:"e95f2b2d"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+{484:"searchview",786:"sign-up",966:"login"}[e]+"."+{484:"46277cec",786:"f848eca4",966:"2ca9455a"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="booklover:";t.l=function(i,r,o,a){if(e[i])e[i].push(r);else{var u,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var l=s[p];if(l.getAttribute("src")==i||l.getAttribute("data-webpack")==n+o){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+o),u.src=i),e[i]=[r];var g=function(n,t){u.onerror=u.onload=null,clearTimeout(f);var r=e[i];if(delete e[i],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=g.bind(null,u.onerror),u.onload=g.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,i,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var u=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=u,a.href=n,i?i.parentNode.insertBefore(a,i.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),i=0;i<t.length;i++){var r=t[i],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===n))return r}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){r=a[i],o=r.getAttribute("data-href");if(o===e||o===n)return r}},i=function(i){return new Promise((function(r,o){var a=t.miniCssF(i),u=t.p+a;if(n(a,u))return r();e(i,u,null,r,o)}))},r={524:0};t.f.miniCss=function(e,n){var t={484:1,786:1,966:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=i(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,i){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise((function(t,i){r=e[n]=[t,i]}));i.push(r[2]=o);var a=t.p+t.u(n),u=new Error,c=function(i){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,i){var r,o,a=i[0],u=i[1],c=i[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var p=c(t)}for(n&&n(i);s<a.length;s++)o=a[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(p)},i=self["webpackChunkbooklover"]=self["webpackChunkbooklover"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[504],(function(){return t(3909)}));i=t.O(i)})();
//# sourceMappingURL=app.9d386b1c.js.map