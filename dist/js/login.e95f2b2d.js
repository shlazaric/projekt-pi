"use strict";(self["webpackChunkbooklover"]=self["webpackChunkbooklover"]||[]).push([[966],{6174:function(e,o,a){a.d(o,{j2:function(){return u},db:function(){return p}});var r=a(3405),i="firebase",l="10.12.5";
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
(0,r.KO)(i,l,"app");var s=a(7617),n=a(7845);const t={apiKey:"AIzaSyBGki5dQLJvSTmCPgXrTUAlgOpIlhp2XUo",authDomain:"book-lovers-7b0ff.firebaseapp.com",projectId:"book-lovers-7b0ff",storageBucket:"book-lovers-7b0ff.appspot.com",messagingSenderId:"921945411334",appId:"1:921945411334:web:77004b382d0b3700455887",measurementId:"G-ZC1KG54PGV"},d=(0,r.Wp)(t),p=(0,s.aU)(d),u=(0,n.xI)(d)},9147:function(e,o,a){a.r(o),a.d(o,{default:function(){return L}});var r=a(6768),i=a(5130);const l=e=>((0,r.Qi)("data-v-2f4ef3ee"),e=e(),(0,r.jt)(),e),s={class:"login-view"},n={class:"content"},t=l((()=>(0,r.Lk)("h2",null,"Prijava",-1))),d={class:"form-group"},p=l((()=>(0,r.Lk)("label",{for:"emailField"},"E-mail:",-1))),u=l((()=>(0,r.Lk)("small",{id:"emailHelp",class:"form-text text-muted"},null,-1))),c={class:"form-group"},m=l((()=>(0,r.Lk)("label",{for:"passwordField"},"Lozinka:",-1))),f=l((()=>(0,r.Lk)("button",{type:"submit",class:"btn btn-primary mt-5"},"Prijavi se",-1)));function b(e,o,a,l,b,k){return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.Lk)("div",n,[t,(0,r.Lk)("form",{onSubmit:o[2]||(o[2]=(0,i.D$)(((...e)=>k.login&&k.login(...e)),["prevent"]))},[(0,r.Lk)("div",d,[p,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>b.email=e),type:"email",class:"form-control",id:"emailField","aria-describedby":"emailHelp",placeholder:"Upiši e-mail",required:""},null,512),[[i.Jo,b.email]]),u]),(0,r.Lk)("div",c,[m,(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>b.password=e),type:"password",class:"form-control",id:"passwordField",placeholder:"Upiši lozinku",required:""},null,512),[[i.Jo,b.password]])]),f],32)])])}a(4114);var k=a(6174),v=a(7845),g={name:"LoginView",data(){return{email:"",password:""}},methods:{async login(){try{const e=await(0,v.x9)(k.j2,this.email,this.password);console.log("User logged in:",e.user),this.$router.push("/search-view")}catch(e){console.error("Error during login:",e),alert("Pogrešan e-mail ili lozinka!")}}}},h=a(1241);const w=(0,h.A)(g,[["render",b],["__scopeId","data-v-2f4ef3ee"]]);var L=w}}]);
//# sourceMappingURL=login.e95f2b2d.js.map