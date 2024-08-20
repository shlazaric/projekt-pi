"use strict";(self["webpackChunkbooklover"]=self["webpackChunkbooklover"]||[]).push([[484],{6174:function(e,i,a){a.d(i,{j2:function(){return m},db:function(){return k}});var o=a(3405),t="firebase",n="10.12.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,o.KO)(t,n,"app");var s=a(7617),l=a(7845);const d={apiKey:"AIzaSyBGki5dQLJvSTmCPgXrTUAlgOpIlhp2XUo",authDomain:"book-lovers-7b0ff.firebaseapp.com",projectId:"book-lovers-7b0ff",storageBucket:"book-lovers-7b0ff.appspot.com",messagingSenderId:"921945411334",appId:"1:921945411334:web:77004b382d0b3700455887",measurementId:"G-ZC1KG54PGV"},r=(0,o.Wp)(d),k=(0,s.aU)(r),m=(0,l.xI)(r)},8634:function(e,i,a){a.r(i),a.d(i,{default:function(){return y}});var o=a(6768),t=a(5130),n=a(4232);const s=e=>((0,o.Qi)("data-v-2b916f41"),e=e(),(0,o.jt)(),e),l={class:"search-view"},d=s((()=>(0,o.Lk)("div",{class:"welcome-message"},[(0,o.Lk)("p",null,"Dobrodošao/la!")],-1))),r={class:"navigation"},k={key:0,class:"book-item"},m=["src","alt"],c={key:0},u={key:1},g={class:"review-section"},p=s((()=>(0,o.Lk)("h3",null,"Napiši recenziju:",-1))),j={key:1,class:"no-book-message"};function v(e,i,a,s,v,b){const h=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",l,[d,(0,o.Lk)("nav",r,[(0,o.bF)(h,{to:"/favorites",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Favoriti")])),_:1})]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>v.searchQuery=e),placeholder:"Unesite ID knjige"},null,512),[[t.Jo,v.searchQuery]]),(0,o.Lk)("button",{onClick:i[1]||(i[1]=(...e)=>b.searchById&&b.searchById(...e))},"Pretraži po ID-u"),v.selectedBook?((0,o.uX)(),(0,o.CE)("div",k,[(0,o.Lk)("img",{src:b.getImagePath(v.selectedBook.image),alt:v.selectedBook.name},null,8,m),(0,o.Lk)("p",null,(0,n.v_)(v.selectedBook.name),1),(0,o.Lk)("div",{class:"like-button",onClick:i[2]||(i[2]=(...e)=>b.toggleLike&&b.toggleLike(...e))},[b.isLiked?((0,o.uX)(),(0,o.CE)("span",c,"❤️")):((0,o.uX)(),(0,o.CE)("span",u,"🤍"))]),(0,o.Lk)("div",g,[p,(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":i[3]||(i[3]=e=>v.reviewText=e),placeholder:"Unesite svoju recenziju ovdje..."},null,512),[[t.Jo,v.reviewText]]),(0,o.Lk)("button",{onClick:i[4]||(i[4]=(...e)=>b.submitReview&&b.submitReview(...e))},"Pošalji recenziju")])])):(0,o.Q3)("",!0),v.showNotFoundMessage?((0,o.uX)(),(0,o.CE)("div",j,[(0,o.Lk)("p",null,"Nije pronađena knjiga sa ID-om "+(0,n.v_)(v.searchQuery)+".",1)])):(0,o.Q3)("",!0)])}a(4114);var b=a(7845),h=a(7617),f=a(6174),B={data(){return{searchQuery:"",books:[{id:1,name:"Nestrpljiva čizmica",image:"cizmica.jpg",liked:!1},{id:2,name:"Gregorov dnevnik",image:"dnevnik.jpg",liked:!1},{id:3,name:"Empatija slušanje srcem",image:"empatija.jpg",liked:!1},{id:4,name:"Mali princ",image:"princ.jpg",liked:!1},{id:5,name:"Zaljubljen do ušiju",image:"zaljubljen.jpg",liked:!1},{id:6,name:"Besmrtnost",image:"besmrtnost.jpg",liked:!1},{id:7,name:"Igre nasljedstva",image:"igre.jpg",liked:!1},{id:8,name:"Bog podzemlja",image:"podzemlje.jpg",liked:!1},{id:9,name:"Bonton za djecu i mlade",image:"bonton.jpg",liked:!1},{id:10,name:"U potrazi za Alaskom",image:"alaska.jpg",liked:!1},{id:11,name:"Bajkarenje",image:"bajkarenje.jpg",liked:!1},{id:12,name:"Harry Potter i kamen mudraca",image:"harry.jpg",liked:!1},{id:13,name:"Kako bolje misliti",image:"kako.jpg",liked:!1},{id:14,name:"Kako manje misliti",image:"kakomanje.jpg",liked:!1},{id:15,name:"Kako izbjeći manipulatore",image:"manipulatori.jpg",liked:!1},{id:16,name:"Knjižnica tajni",image:"knjiznica.jpg",liked:!1},{id:17,name:"Priča bez kraja",image:"prica.jpg",liked:!1},{id:18,name:"Slučajni cimeri",image:"cimeeri.jpg",liked:!1},{id:19,name:"Priča o plavom planetu",image:"plaviplanet.jpg",liked:!1},{id:20,name:"Soba puna snova",image:"soba.jpg",liked:!1}],selectedBook:null,showNotFoundMessage:!1,reviewText:"",userId:null}},methods:{async searchById(){const e=parseInt(this.searchQuery);this.selectedBook=this.books.find((i=>i.id===e))||null,this.showNotFoundMessage=!this.selectedBook,this.reviewText=""},getImagePath(e){return a(290)(`./${e}`)},async submitReview(){this.reviewText.trim()?(alert(`Recenzija za knjigu "${this.selectedBook.name}":\n\n${this.reviewText}`),this.reviewText=""):alert("Molimo unesite tekst recenzije.")},async toggleLike(){if(this.selectedBook){const e=this.selectedBook;e.liked=!e.liked,this.selectedBook={...e};const i=(0,b.xI)().currentUser;if(i){this.userId=i.uid;const a=(0,h.H9)(f.db,"favorites",this.userId),o=await(0,h.x7)(a);let t=[];o.exists()&&(t=o.data().books||[]),e.liked?t.includes(e.id)||t.push(e.id):t=t.filter((i=>i!==e.id)),await(0,h.BN)(a,{books:t})}else console.error("User is not authenticated")}}},computed:{isLiked(){return this.selectedBook&&this.selectedBook.liked}}},I=a(1241);const w=(0,I.A)(B,[["render",v],["__scopeId","data-v-2b916f41"]]);var y=w}}]);
//# sourceMappingURL=searchview.2110760a.js.map