"use strict";(self["webpackChunkbooklover"]=self["webpackChunkbooklover"]||[]).push([[786],{6174:function(e,o,r){r.d(o,{j2:function(){return u},db:function(){return p}});var a=r(3405),i="firebase",s="10.12.5";
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
(0,a.KO)(i,s,"app");var l=r(7617),n=r(7845);const t={apiKey:"AIzaSyBGki5dQLJvSTmCPgXrTUAlgOpIlhp2XUo",authDomain:"book-lovers-7b0ff.firebaseapp.com",projectId:"book-lovers-7b0ff",storageBucket:"book-lovers-7b0ff.appspot.com",messagingSenderId:"921945411334",appId:"1:921945411334:web:77004b382d0b3700455887",measurementId:"G-ZC1KG54PGV"},d=(0,a.Wp)(t),p=(0,l.aU)(d),u=(0,n.xI)(d)},6435:function(e,o,r){r.r(o),r.d(o,{default:function(){return P}});var a=r(6768),i=r(5130);const s=e=>((0,a.Qi)("data-v-79e63ef9"),e=e(),(0,a.jt)(),e),l={class:"signup-view"},n={class:"content"},t=s((()=>(0,a.Lk)("h2",null,"Registracija",-1))),d={class:"form-group"},p=s((()=>(0,a.Lk)("label",{for:"nameField"},"Ime:",-1))),u={class:"form-group"},m=s((()=>(0,a.Lk)("label",{for:"emailField"},"E-mail:",-1))),c={class:"form-group"},f=s((()=>(0,a.Lk)("label",{for:"passwordField"},"Lozinka:",-1))),k={class:"form-group"},b=s((()=>(0,a.Lk)("label",{for:"confirmPasswordField"},"Ponovi lozinku:",-1))),v=s((()=>(0,a.Lk)("button",{type:"submit",class:"btn btn-primary mt-5"},"Registriraj se",-1)));function w(e,o,r,s,w,g){return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("div",n,[t,(0,a.Lk)("form",{onSubmit:o[4]||(o[4]=(0,i.D$)(((...e)=>g.signUp&&g.signUp(...e)),["prevent"]))},[(0,a.Lk)("div",d,[p,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>w.name=e),type:"text",class:"form-control",id:"nameField",placeholder:"Upiši svoje ime",required:""},null,512),[[i.Jo,w.name]])]),(0,a.Lk)("div",u,[m,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>w.email=e),type:"email",class:"form-control",id:"emailField",placeholder:"Upiši e-mail",required:""},null,512),[[i.Jo,w.email]])]),(0,a.Lk)("div",c,[f,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>w.password=e),type:"password",class:"form-control",id:"passwordField",placeholder:"Upiši lozinku",required:""},null,512),[[i.Jo,w.password]])]),(0,a.Lk)("div",k,[b,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>w.confirmPassword=e),type:"password",class:"form-control",id:"confirmPasswordField",placeholder:"Ponovi lozinku",required:""},null,512),[[i.Jo,w.confirmPassword]])]),v],32)])])}r(4114);var g=r(6174),h=r(7845),L={name:"SignUpView",data(){return{name:"",email:"",password:"",confirmPassword:""}},methods:{async signUp(){if(this.password===this.confirmPassword)try{const e=await(0,h.eJ)(g.j2,this.email,this.password);console.log("Korisnik uspješno registriran:",e.user),await(0,h.r7)(e.user,{displayName:this.name}),this.$router.push("/login-view")}catch(e){console.error("Problem prilikom registracije:",e),alert(e.message)}else alert("Lozinke se ne podudaraju!")}}},U=r(1241);const y=(0,U.A)(L,[["render",w],["__scopeId","data-v-79e63ef9"]]);var P=y}}]);
//# sourceMappingURL=sign-up.8ed7252e.js.map