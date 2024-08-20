"use strict";(self["webpackChunkbooklover"]=self["webpackChunkbooklover"]||[]).push([[504],{4046:function(e,t,n){n.d(t,{Am:function(){return F},FA:function(){return x},Fy:function(){return _},I9:function(){return V},Im:function(){return L},Ku:function(){return K},T9:function(){return y},Tj:function(){return g},Uj:function(){return c},XA:function(){return v},ZQ:function(){return b},bD:function(){return M},cY:function(){return w},eX:function(){return R},g:function(){return N},hp:function(){return j},jZ:function(){return E},lT:function(){return C},lV:function(){return S},nr:function(){return A},sr:function(){return I},tD:function(){return $},u:function(){return u},yU:function(){return m},zW:function(){return k}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
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
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
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
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function _(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function T(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function I(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){return!T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
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
const O="FirebaseError";class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?P(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new N(r,o,n);return a}}function P(e,t){return e.replace(D,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(U(n)&&U(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
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
 * Copyright 2017 Google LLC
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
function F(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function V(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function $(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=z(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
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
 * Copyright 2021 Google LLC
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
function K(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){n.d(t,{C4:function(){return y},EW:function(){return Ae},Gc:function(){return ge},IG:function(){return Te},IJ:function(){return xe},KR:function(){return Ne},Kh:function(){return pe},Pr:function(){return Ue},R1:function(){return Le},X2:function(){return u},bl:function(){return v},fE:function(){return _e},g8:function(){return ve},hZ:function(){return R},i9:function(){return Oe},ju:function(){return be},o5:function(){return c},u4:function(){return k},ux:function(){return Ee},yC:function(){return o}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4232);let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e,t=i){t&&t.active&&t.effects.push(e)}function c(){return i}class u{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,y();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(l(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),v()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=p,t=s;try{return p=!0,s=this,this._runnings++,h(this),this.fn()}finally{d(this),this._runnings--,s=t,p=e}}stop(){this.active&&(h(this),d(this),this.onStop&&this.onStop(),this.active=!1)}}function l(e){return e.value}function h(e){e._trackId++,e._depsLength=0}function d(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)f(e.deps[t],e);e.deps.length=e._depsLength}}function f(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let p=!0,g=0;const m=[];function y(){m.push(p),p=!1}function v(){const e=m.pop();p=void 0===e||e}function w(){g++}function _(){g--;while(!g&&E.length)E.shift()()}function b(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&f(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const E=[];function T(e,t,n){w();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&E.push(r.scheduler)))}_()}const I=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},S=new WeakMap,C=Symbol(""),A=Symbol("");function k(e,t,n){if(p&&s){let t=S.get(e);t||S.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=I((()=>t.delete(n)))),b(s,r,void 0)}}function R(e,t,n,i,s,o){const a=S.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(C)),(0,r.CE)(e)&&c.push(a.get(A)));break;case"delete":(0,r.cy)(e)||(c.push(a.get(C)),(0,r.CE)(e)&&c.push(a.get(A)));break;case"set":(0,r.CE)(e)&&c.push(a.get(C));break}w();for(const r of c)r&&T(r,4,void 0);_()}const O=(0,r.pD)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),x=P();function P(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ee(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ee)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){y(),w();const n=Ee(this)[t].apply(this,e);return _(),v(),n}})),e}function D(e){(0,r.Bm)(e)||(e=String(e));const t=Ee(this);return k(t,"has",e),t.hasOwnProperty(e)}class L{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?he:le:s?ue:ce).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){if(o&&(0,r.$3)(x,t))return Reflect.get(x,t,n);if("hasOwnProperty"===t)return D}const a=Reflect.get(e,t,n);return((0,r.Bm)(t)?N.has(t):O(t))?a:(i||k(e,"get",t),s?a:Oe(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?me(a):pe(a):a)}}class M extends L{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=we(s);if(_e(n)||we(n)||(s=Ee(s),n=Ee(n)),!(0,r.cy)(e)&&Oe(s)&&!Oe(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,i);return e===Ee(i)&&(o?(0,r.$H)(n,s)&&R(e,"set",t,n,s):R(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&R(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&N.has(t)||k(e,"has",t),n}ownKeys(e){return k(e,"iterate",(0,r.cy)(e)?"length":C),Reflect.ownKeys(e)}}class U extends L{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const F=new M,V=new U,j=new M(!0),$=e=>e,B=e=>Reflect.getPrototypeOf(e);function z(e,t,n=!1,i=!1){e=e["__v_raw"];const s=Ee(e),o=Ee(t);n||((0,r.$H)(t,o)&&k(s,"get",t),k(s,"get",o));const{has:a}=B(s),c=i?$:n?Se:Ie;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function q(e,t=!1){const n=this["__v_raw"],i=Ee(n),s=Ee(e);return t||((0,r.$H)(e,s)&&k(i,"has",e),k(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function K(e,t=!1){return e=e["__v_raw"],!t&&k(Ee(e),"iterate",C),Reflect.get(e,"size",e)}function H(e,t=!1){t||_e(e)||we(e)||(e=Ee(e));const n=Ee(this),r=B(n),i=r.has.call(n,e);return i||(n.add(e),R(n,"add",e,e)),this}function G(e,t,n=!1){n||_e(t)||we(t)||(t=Ee(t));const i=Ee(this),{has:s,get:o}=B(i);let a=s.call(i,e);a||(e=Ee(e),a=s.call(i,e));const c=o.call(i,e);return i.set(e,t),a?(0,r.$H)(t,c)&&R(i,"set",e,t,c):R(i,"add",e,t),this}function W(e){const t=Ee(this),{has:n,get:r}=B(t);let i=n.call(t,e);i||(e=Ee(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&R(t,"delete",e,void 0,s),o}function Q(){const e=Ee(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function X(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ee(s),a=t?$:e?Se:Ie;return!e&&k(o,"iterate",C),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Y(e,t,n){return function(...i){const s=this["__v_raw"],o=Ee(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?$:t?Se:Ie;return!t&&k(o,"iterate",u?A:C),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function J(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function Z(){const e={get(e){return z(this,e)},get size(){return K(this)},has:q,add:H,set:G,delete:W,clear:Q,forEach:X(!1,!1)},t={get(e){return z(this,e,!1,!0)},get size(){return K(this)},has:q,add(e){return H.call(this,e,!0)},set(e,t){return G.call(this,e,t,!0)},delete:W,clear:Q,forEach:X(!1,!0)},n={get(e){return z(this,e,!0)},get size(){return K(this,!0)},has(e){return q.call(this,e,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!1)},r={get(e){return z(this,e,!0,!0)},get size(){return K(this,!0)},has(e){return q.call(this,e,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=Y(i,!1,!1),n[i]=Y(i,!0,!1),t[i]=Y(i,!1,!0),r[i]=Y(i,!0,!0)})),[e,n,t,r]}const[ee,te,ne,re]=Z();function ie(e,t){const n=t?e?re:ne:e?te:ee;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const se={get:ie(!1,!1)},oe={get:ie(!1,!0)},ae={get:ie(!0,!1)};const ce=new WeakMap,ue=new WeakMap,le=new WeakMap,he=new WeakMap;function de(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:de((0,r.Zf)(e))}function pe(e){return we(e)?e:ye(e,!1,F,se,ce)}function ge(e){return ye(e,!1,j,oe,ue)}function me(e){return ye(e,!0,V,ae,le)}function ye(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=fe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function ve(e){return we(e)?ve(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function we(e){return!(!e||!e["__v_isReadonly"])}function _e(e){return!(!e||!e["__v_isShallow"])}function be(e){return!!e&&!!e["__v_raw"]}function Ee(e){const t=e&&e["__v_raw"];return t?Ee(t):e}function Te(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ie=e=>(0,r.Gv)(e)?pe(e):e,Se=e=>(0,r.Gv)(e)?me(e):e;class Ce{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new u((()=>e(this._value)),(()=>Re(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ee(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||Re(e,4),ke(e),e.effect._dirtyLevel>=2&&Re(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ae(e,t,n=!1){let i,s;const o=(0,r.Tn)(e);o?(i=e,s=r.tE):(i=e.get,s=e.set);const a=new Ce(i,s,o||!s,n);return a}function ke(e){var t;p&&s&&(e=Ee(e),b(s,null!=(t=e.dep)?t:e.dep=I((()=>e.dep=void 0),e instanceof Ce?e:void 0),void 0))}function Re(e,t=4,n,r){e=Ee(e);const i=e.dep;i&&T(i,t,void 0)}function Oe(e){return!(!e||!0!==e.__v_isRef)}function Ne(e){return Pe(e,!1)}function xe(e){return Pe(e,!0)}function Pe(e,t){return Oe(e)?e:new De(e,t)}class De{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ee(e),this._value=t?e:Ie(e)}get value(){return ke(this),this._value}set value(e){const t=this.__v_isShallow||_e(e)||we(e);if(e=t?e:Ee(e),(0,r.$H)(e,this._rawValue)){const n=this._rawValue;this._rawValue=e,this._value=t?e:Ie(e),Re(this,4,e,n)}}}function Le(e){return Oe(e)?e.value:e}const Me={get:(e,t,n)=>Le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ue(e){return ve(e)?e:new Proxy(e,Me)}},6768:function(e,t,n){n.d(t,{$u:function(){return de},CE:function(){return ln},Df:function(){return X},EW:function(){return Xn},FK:function(){return Jt},Gt:function(){return Qe},Gy:function(){return V},K9:function(){return Tt},Lk:function(){return mn},MZ:function(){return Q},OW:function(){return H},Q3:function(){return En},QP:function(){return $},Qi:function(){return x},WQ:function(){return Xe},bF:function(){return yn},bo:function(){return L},dY:function(){return v},eW:function(){return bn},g2:function(){return _e},h:function(){return Yn},jt:function(){return P},k6:function(){return D},nI:function(){return xn},pI:function(){return Ie},pM:function(){return Y},pR:function(){return q},qL:function(){return o},uX:function(){return sn},wB:function(){return Lt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(144),i=n(4232);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,i.cy)(e)){const i=[];for(let s=0;s<e.length;s++)i.push(o(e[s],t,n,r));return i}}function a(e,t,n,i=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;i=i.parent}const c=t.appContext.config.errorHandler;if(c)return(0,r.C4)(),s(c,null,10,[e,o,a]),void(0,r.bl)()}c(e,n,o,i)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(e){const t=y||m;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],s=C(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function _(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),b())}function b(){u||l||(l=!0,y=m.then(k))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,i.cy)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),b()}function I(e,t,n=(u?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function S(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>C(e)-C(t)));if(f.length=0,p)return void p.push(...e);for(p=e,g=0;g<p.length;g++){const e=p[g];0,!1!==e.active&&e()}p=null,g=0}}const C=e=>null==e.id?1/0:e.id,A=(e,t)=>{const n=C(e)-C(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function k(e){l=!1,u=!0,h.sort(A);i.tE;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,e.i,e.i?15:14)}}finally{d=0,h.length=0,S(e),u=!1,y=null,(h.length||f.length)&&k(e)}}let R=null,O=null;function N(e){const t=R;return R=e,O=e&&e.type.__scopeId||null,t}function x(e){O=e}function P(){O=null}function D(e,t=R,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&cn(-1);const i=N(t);let s;try{s=e(...n)}finally{N(i),r._d&&cn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function L(e,t){if(null===R)return e;const n=Gn(R),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,a,c=i.MZ]=t[s];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&Vt(o),r.push({dir:e,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function M(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}const U=Symbol("_leaveCb"),F=Symbol("_enterCb");function V(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return le((()=>{e.isMounted=!0})),fe((()=>{e.isUnmounting=!0})),e}const j=[Function,Array],$={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:j,onEnter:j,onAfterEnter:j,onEnterCancelled:j,onBeforeLeave:j,onLeave:j,onAfterLeave:j,onLeaveCancelled:j,onBeforeAppear:j,onAppear:j,onAfterAppear:j,onAppearCancelled:j},B=e=>{const t=e.subTree;return t.component?B(t.component):t},z={name:"BaseTransition",props:$,setup(e,{slots:t}){const n=xn(),i=V();return()=>{const s=t.default&&X(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==en){0,o=t,e=!0;break}}const a=(0,r.ux)(e),{mode:c}=a;if(i.isLeaving)return G(o);const u=W(o);if(!u)return G(o);let l=H(u,a,i,n,(e=>l=e));Q(u,l);const h=n.subTree,d=h&&W(h);if(d&&d.type!==en&&!fn(u,d)&&B(n).type!==en){const e=H(d,a,i,n);if(Q(d,e),"out-in"===c&&u.type!==en)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},G(o);"in-out"===c&&u.type!==en&&(e.delayLeave=(e,t,n)=>{const r=K(i,d);r[String(d.key)]=d,e[U]=()=>{t(),e[U]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},q=z;function K(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function H(e,t,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:_,onAppearCancelled:b}=t,E=String(e.key),T=K(n,e),I=(e,t)=>{e&&o(e,r,9,t)},S=(e,t)=>{const n=t[1];I(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},C={mode:c,persisted:u,beforeEnter(t){let r=l;if(!n.isMounted){if(!a)return;r=v||l}t[U]&&t[U](!0);const i=T[E];i&&fn(e,i)&&i.el[U]&&i.el[U](),I(r,[t])},enter(e){let t=h,r=d,i=f;if(!n.isMounted){if(!a)return;t=w||h,r=_||d,i=b||f}let s=!1;const o=e[F]=t=>{s||(s=!0,I(t?i:r,[e]),C.delayedLeave&&C.delayedLeave(),e[F]=void 0)};t?S(t,[e,o]):o()},leave(t,r){const i=String(e.key);if(t[F]&&t[F](!0),n.isUnmounting)return r();I(p,[t]);let s=!1;const o=t[U]=n=>{s||(s=!0,r(),I(n?y:m,[t]),t[U]=void 0,T[i]===e&&delete T[i])};T[i]=e,g?S(g,[t,o]):o()},clone(e){const i=H(e,t,n,r,s);return s&&s(i),i}};return C}function G(e){if(Z(e))return e=_n(e),e.children=null,e}function W(e){if(!Z(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,i.Tn)(n.default))return n.default()}}function Q(e,t){6&e.shapeFlag&&e.component?Q(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function X(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Jt?(128&o.patchFlag&&i++,r=r.concat(X(o.children,t,a))):(t||o.type!==en)&&r.push(null!=a?_n(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function Y(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}const J=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Z=e=>e.type.__isKeepAlive;RegExp,RegExp;function ee(e,t){return(0,i.cy)(e)?e.some((e=>ee(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&e.test(t)}function te(e,t){re(e,"a",t)}function ne(e,t){re(e,"da",t)}function re(e,t,n=Nn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ae(t,r,n),n){let e=n.parent;while(e&&e.parent)Z(e.parent.vnode)&&ie(r,t,n,e),e=e.parent}}function ie(e,t,n,r){const s=ae(t,e,r,!0);pe((()=>{(0,i.TF)(r[t],s)}),n)}function se(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function oe(e){return 128&e.shapeFlag?e.ssContent:e}function ae(e,t,n=Nn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{(0,r.C4)();const s=Ln(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const ce=e=>(t,n=Nn)=>{jn&&"sp"!==e||ae(e,((...e)=>t(...e)),n)},ue=ce("bm"),le=ce("m"),he=ce("bu"),de=ce("u"),fe=ce("bum"),pe=ce("um"),ge=ce("sp"),me=ce("rtg"),ye=ce("rtc");function ve(e,t=Nn){ae("ec",e,t)}const we="components";function _e(e,t){return Ee(we,e,!0,t)||e}const be=Symbol.for("v-ndc");function Ee(e,t,n=!0,r=!1){const s=R||Nn;if(s){const n=s.type;if(e===we){const e=Wn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=Te(s[e]||n[e],t)||Te(s.appContext[e],t);return!o&&r?n:o}}function Te(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}function Ie(e,t,n,r){let s;const o=n&&n[r];if((0,i.cy)(e)||(0,i.Kg)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Se=e=>e?Un(e)?Gn(e):Se(e.parent):null,Ce=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Se(e.parent),$root:e=>Se(e.root),$emit:e=>e.emit,$options:e=>Le(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,_(e.update)}),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>Ut.bind(e)}),Ae=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),ke={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Ae(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];Oe&&(c[t]=0)}}const d=Ce[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Ae(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||Ae(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(Ce,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Re(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Oe=!0;function Ne(e){const t=Le(e),n=e.proxy,s=e.ctx;Oe=!1,t.beforeCreate&&Pe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:A,expose:k,inheritAttrs:R,components:O,directives:N,filters:x}=t,P=null;if(h&&xe(h,s,P),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(Oe=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=Xn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)De(u[r],s,n,r);if(l){const e=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Qe(t,e[t])}))}function D(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Pe(d,e,"c"),D(ue,f),D(le,p),D(he,g),D(de,m),D(te,y),D(ne,v),D(ve,C),D(ye,I),D(me,S),D(fe,_),D(pe,E),D(ge,A),(0,i.cy)(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.tE&&(e.render=T),null!=R&&(e.inheritAttrs=R),O&&(e.components=O),N&&(e.directives=N)}function xe(e,t,n=i.tE){(0,i.cy)(e)&&(e=je(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?Xe(n.from||s,n.default,!0):Xe(n.from||s):Xe(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Pe(e,t,n){o((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function De(e,t,n,r){const s=r.includes(".")?Ft(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&Lt(s,n)}else if((0,i.Tn)(e))Lt(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>De(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&Lt(s,r,e)}else 0}function Le(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>Me(u,e,a,!0))),Me(u,t,a)):u=t,(0,i.Gv)(t)&&o.set(t,u),u}function Me(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Me(e,s,n,!0),i&&i.forEach((t=>Me(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ue[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ue={data:Fe,props:ze,emits:ze,methods:Be,computed:Be,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Be,directives:Be,watch:qe,provide:Fe,inject:Ve};function Fe(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function Ve(e,t){return Be(je(e),je(t))}function je(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $e(e,t){return e?[...new Set([].concat(e,t))]:t}function Be(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function ze(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),Re(e),Re(null!=t?t:{})):t}function qe(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=$e(e[r],t[r]);return n}function Ke(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let He=0;function Ge(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=Ke(),o=new WeakSet;let a=!1;const c=s.app={_uid:He++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Jn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.Tn)(e.install)?(o.add(e),e.install(c,...t)):(0,i.Tn)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=yn(n,r);return l.appContext=s,!0===u?u="svg":!1===u&&(u=void 0),o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Gn(l.component)}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){const t=We;We=c;try{return e()}finally{We=t}}};return c}}let We=null;function Qe(e,t){if(Nn){let n=Nn.provides;const r=Nn.parent&&Nn.parent.provides;r===n&&(n=Nn.provides=Object.create(r)),n[e]=t}else 0}function Xe(e,t,n=!1){const r=Nn||R;if(r||We){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:We._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const Ye={},Je=()=>Object.create(Ye),Ze=e=>Object.getPrototypeOf(e)===Ye;function et(e,t,n,i=!1){const s={},o=Je();e.propsDefaults=Object.create(null),nt(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function tt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;nt(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=rt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(zt(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=rt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function nt(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const l=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:zt(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=rt(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return u}function rt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Ln(s);r=i[n]=e.call(null,t),o()}}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const it=new WeakMap;function st(e,t,n=!1){const r=n?it:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.Tn)(e)){const r=e=>{u=!0;const[n,r]=st(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);ot(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(ot(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const e=ut(Boolean,r.type),n=ut(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.$3)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Gv)(e)&&r.set(e,l),l}function ot(e){return"$"!==e[0]&&!(0,i.SU)(e)}function at(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function ct(e,t){return at(e)===at(t)}function ut(e,t){return(0,i.cy)(t)?t.findIndex((t=>ct(t,e))):(0,i.Tn)(t)&&ct(t,e)?0:-1}const lt=e=>"_"===e[0]||"$stable"===e,ht=e=>(0,i.cy)(e)?e.map(Tn):[Tn(e)],dt=(e,t,n)=>{if(t._n)return t;const r=D(((...e)=>ht(t(...e))),n);return r._c=!1,r},ft=(e,t,n)=>{const r=e._ctx;for(const s in e){if(lt(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=dt(s,n,r);else if(null!=n){0;const e=ht(n);t[s]=()=>e}}},pt=(e,t)=>{const n=ht(t);e.slots.default=()=>n},gt=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},mt=(e,t,n)=>{const r=e.slots=Je();if(32&e.vnode.shapeFlag){const e=t._;e?(gt(r,t,n),n&&(0,i.yQ)(r,"_",e,!0)):ft(t,r)}else t&&pt(e,t)},yt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:gt(s,t,n):(o=!t.$stable,ft(t,s)),a=t}else t&&(pt(e,t),a={default:1});if(o)for(const i in s)lt(i)||null!=a[i]||delete s[i]};function vt(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>vt(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a)));if(J(o)&&!a)return;const c=4&o.shapeFlag?Gn(o.component):o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,(0,i.$3)(p,d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,l,12,[u,f]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.$3)(p,h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.$3)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.$3)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Et(r,n)):r()}else 0}}const wt=Symbol("_vte"),_t=e=>e.__isTeleport;function bt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Et=Yt;function Tt(e){return It(e)}function It(e,t){bt();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,y=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!fn(e,t)&&(r=X(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Zt:v(e,t,n,r);break;case en:w(e,t,n,r);break;case tn:null==e&&b(t,n,r,o);break;case Jt:D(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&vt(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},C=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},A=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?k(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},k=(e,t,n,r,o,u,l,h)=>{let f,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&m?d(f,e.children):16&m&&O(e.children,f,null,r,o,St(e,u),l,h),v&&M(e,null,r,"created"),R(f,e,e.scopeId,l,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(f,e,null,g[e],u,r);"value"in g&&a(f,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&An(p,r,e)}v&&M(e,null,r,"beforeMount");const w=At(o,y);w&&y.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||w||v)&&Et((()=>{p&&An(p,r,e),w&&y.enter(f),v&&M(e,null,r,"mounted")}),o)},R=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?In(e[u]):Tn(e[u]);y(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&Ct(n,!1),(m=g.onVnodeBeforeUpdate)&&An(m,n,t,e),f&&M(t,e,n,"beforeUpdate"),n&&Ct(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(u,""),h?x(e.dynamicChildren,h,u,n,r,St(t,s),o):c||$(e,t,u,null,n,r,St(t,s),o,!1),l>0){if(16&l)P(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||P(u,p,g,n,s);((m=g.onVnodeUpdated)||f)&&Et((()=>{m&&An(m,n,t,e),f&&M(t,e,n,"updated")}),r)},x=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Jt||!fn(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},P=(e,t,n,r,s)=>{if(t!==n){if(t!==i.MZ)for(const o in t)(0,i.SU)(o)||o in n||a(e,o,t[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=t[o];c!==u&&"value"!==o&&a(e,o,u,c,s,r)}"value"in n&&a(e,"value",t.value,n.value,s)}},D=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),O(t.children||[],n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&kt(e,t,!0)):$(e,t,n,d,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):U(t,n,r,i,s,o,c):F(e,t,c)},U=(e,t,n,r,i,s,o)=>{const a=e.component=On(e,r,i);if(Z(e)&&(a.ctx.renderer=te),$n(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,V,o),!e.el){const e=a.subTree=yn(en);w(null,e,t,n)}}else V(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(Gt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,E(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:l}=e;{const n=Ot(e);if(n)return t&&(t.el=l.el,j(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let h,d=t;0,Ct(e,!1),t?(t.el=l.el,j(e,t,c)):t=l,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&An(h,s,t,l),Ct(e,!0);const p=qt(e);0;const g=e.subTree;e.subTree=p,y(g,p,f(g.el),X(g),e,o,a),t.el=p.el,null===d&&Qt(e,p.el),r&&Et(r,o),(h=t.props&&t.props.onVnodeUpdated)&&Et((()=>An(h,s,t,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=J(t);if(Ct(e,!1),l&&(0,i.DY)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&An(r,d,t),Ct(e,!0),c&&re){const n=()=>{e.subTree=qt(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=qt(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&Et(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Et((()=>An(r,d,e)),o)}(256&t.shapeFlag||d&&J(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Et(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.X2(u,i.tE,(()=>_(h)),e.scope),h=e.update=()=>{l.dirty&&l.run()};h.i=e,h.id=e.uid,Ct(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,tt(e,t.props,i,n),yt(e,t.children,n),(0,r.C4)(),I(e),(0,r.bl)()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(u,h,n,r,i,s,o,a,c);if(256&f)return void B(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Q(u,i,s),h!==u&&d(n,h)):16&l?16&p?z(u,h,n,r,i,s,o,a,c):Q(u,i,s,!0):(8&l&&d(n,""),16&p&&O(h,n,r,i,s,o,a,c))},B=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Oj,t=t||i.Oj;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?In(t[f]):Tn(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?Q(e,s,o,!0,!1,d):O(t,n,r,s,o,a,c,u,d)},z=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?In(t[l]):Tn(t[l]);if(!fn(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?In(t[f]):Tn(t[f]);if(!fn(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?In(t[l]):Tn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)K(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?In(t[l]):Tn(t[l]);null!=e.key&&m.set(e.key,l)}let v,w=0;const _=f-g+1;let b=!1,E=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=_){K(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===T[v-g]&&fn(r,t[v])){i=v;break}void 0===i?K(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,y(r,t[i],n,null,s,o,a,c,u),w++)}const I=b?Rt(T):i.Oj;for(v=I.length-1,l=_-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):b&&(v<0||l!==I[v]?q(i,n,d,2):v--)}}},q=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Jt){s(o,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===tn)return void T(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Et((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d,cacheIndex:f}=e;if(-2===h&&(i=!1),null!=a&&vt(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&l)return void t.ctx.deactivate(e);const p=1&l&&d,g=!J(e);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&An(m,t,e),6&l)W(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);p&&M(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,te,r):u&&!u.hasOnce&&(s!==Jt||h>0&&64&h)?Q(u,t,n,!1,!0):(s===Jt&&384&h||!i&&16&l)&&Q(c,t,n),r&&H(e)}(g&&(m=o&&o.onVnodeUnmounted)||p)&&Et((()=>{m&&An(m,t,e),p&&M(e,null,t,"unmounted")}),n)},H=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Jt)return void G(n,r);if(t===tn)return void C(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},G=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},W=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c,m:u,a:l}=e;Nt(u),Nt(l),r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,K(a,e,t,n)),c&&Et(c,t),Et((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},X=e=>{if(6&e.shapeFlag)return X(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[wt];return n?p(n):t};let Y=!1;const ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Y||(Y=!0,I(),S(),Y=!1),t._vnode=e},te={p:y,um:K,m:q,r:H,mt:U,mc:O,pc:$,pbc:x,n:X,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:Ge(ee,ne)}}function St({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function At(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function kt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=In(s[i]),t.el=e.el),n||-2===t.patchFlag||kt(e,t)),t.type===Zt&&(t.el=e.el)}}function Rt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function Ot(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ot(t)}function Nt(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const xt=Symbol.for("v-scx"),Pt=()=>{{const e=Xe(xt);return e}};const Dt={};function Lt(e,t,n){return Mt(e,t,n)}function Mt(e,t,{immediate:n,deep:a,flush:c,once:u,onTrack:l,onTrigger:h}=i.MZ){if(t&&u){const e=t;t=(...t)=>{e(...t),C()}}const d=Nn,f=e=>!0===a?e:Vt(e,!1===a?1:void 0);let p,g,m=!1,y=!1;if((0,r.i9)(e)?(p=()=>e.value,m=(0,r.fE)(e)):(0,r.g8)(e)?(p=()=>f(e),m=!0):(0,i.cy)(e)?(y=!0,m=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),p=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?f(e):(0,i.Tn)(e)?s(e,d,2):void 0))):p=(0,i.Tn)(e)?t?()=>s(e,d,2):()=>(g&&g(),o(e,d,3,[w])):i.tE,t&&a){const e=p;p=()=>Vt(e())}let v,w=e=>{g=I.onStop=()=>{s(e,d,4),g=I.onStop=void 0}};if(jn){if(w=i.tE,t?n&&o(t,d,3,[p(),y?[]:void 0,w]):p(),"sync"!==c)return i.tE;{const e=Pt();v=e.__watcherHandles||(e.__watcherHandles=[])}}let b=y?new Array(e.length).fill(Dt):Dt;const E=()=>{if(I.active&&I.dirty)if(t){const e=I.run();(a||m||(y?e.some(((e,t)=>(0,i.$H)(e,b[t]))):(0,i.$H)(e,b)))&&(g&&g(),o(t,d,3,[e,b===Dt?void 0:y&&b[0]===Dt?[]:b,w]),b=e)}else I.run()};let T;E.allowRecurse=!!t,"sync"===c?T=E:"post"===c?T=()=>Et(E,d&&d.suspense):(E.pre=!0,d&&(E.id=d.uid),T=()=>_(E));const I=new r.X2(p,i.tE,T),S=(0,r.o5)(),C=()=>{I.stop(),S&&(0,i.TF)(S.effects,I)};return t?n?E():b=I.run():"post"===c?Et(I.run.bind(I),d&&d.suspense):I.run(),v&&v.push(C),C}function Ut(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?Ft(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=Ln(this),c=Mt(s,o.bind(r),n);return a(),c}function Ft(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Vt(e,t=1/0,n){if(t<=0||!(0,i.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,(0,r.i9)(e))Vt(e.value,t,n);else if((0,i.cy)(e))for(let r=0;r<e.length;r++)Vt(e[r],t,n);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{Vt(e,t,n)}));else if((0,i.Qd)(e)){for(const r in e)Vt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Vt(e[r],t,n)}return e}const jt=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,i.PT)(t)}Modifiers`]||e[`${(0,i.Tg)(t)}Modifiers`];function $t(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&jt(r,t.slice(7));let u;c&&(c.trim&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(t)]||r[u=(0,i.rU)((0,i.PT)(t))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function Bt(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=Bt(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function zt(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}function qt(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=e,v=N(e);let w,_;try{if(4&n.shapeFlag){const e=s||r,t=e;w=Tn(h.call(t,e,d,f,g,p,m)),_=u}else{const e=t;0,w=Tn(e.length>1?e(f,{attrs:u,slots:c,emit:l}):e(f,null)),_=t.props?u:Kt(u)}}catch(E){nn.length=0,a(E,e,1),w=yn(en)}let b=w;if(_&&!1!==y){const e=Object.keys(_),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(i.CP)&&(_=Ht(_,o)),b=_n(b,_,!1,!0))}return n.dirs&&(b=_n(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),w=b,N(v),w}const Kt=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Ht=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Gt(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Wt(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?Wt(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!zt(u,n))return!0}}return!1}function Wt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!zt(n,s))return!0}return!1}function Qt({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const Xt=e=>e.__isSuspense;function Yt(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):T(e)}const Jt=Symbol.for("v-fgt"),Zt=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),tn=Symbol.for("v-stc"),nn=[];let rn=null;function sn(e=!1){nn.push(rn=e?null:[])}function on(){nn.pop(),rn=nn[nn.length-1]||null}let an=1;function cn(e){an+=e,e<0&&rn&&(rn.hasOnce=!0)}function un(e){return e.dynamicChildren=an>0?rn||i.Oj:null,on(),an>0&&rn&&rn.push(e),e}function ln(e,t,n,r,i,s){return un(mn(e,t,n,r,i,s,!0))}function hn(e,t,n,r,i){return un(yn(e,t,n,r,i,!0))}function dn(e){return!!e&&!0===e.__v_isVNode}function fn(e,t){return e.type===t.type&&e.key===t.key}const pn=({key:e})=>null!=e?e:null,gn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:R,r:e,k:t,f:!!n}:e:null);function mn(e,t=null,n=null,r=0,s=null,o=(e===Jt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pn(t),ref:t&&gn(t),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:R};return c?(Sn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),an>0&&!a&&rn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&rn.push(u),u}const yn=vn;function vn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==be||(e=en),dn(e)){const r=_n(e,t,!0);return n&&Sn(r,n),an>0&&!a&&rn&&(6&r.shapeFlag?rn[rn.indexOf(e)]=r:rn.push(r)),r.patchFlag=-2,r}if(Qn(e)&&(e=e.__vccOpts),t){t=wn(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Xt(e)?128:_t(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return mn(e,t,n,s,o,c,a,!0)}function wn(e){return e?(0,r.ju)(e)||Ze(e)?(0,i.X$)({},e):e:null}function _n(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=e,l=t?Cn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&pn(l),ref:t&&t.ref?n&&o?(0,i.cy)(o)?o.concat(gn(t)):[o,gn(t)]:gn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Jt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_n(e.ssContent),ssFallback:e.ssFallback&&_n(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&Q(h,u.clone(h)),h}function bn(e=" ",t=0){return yn(Zt,null,e,t)}function En(e="",t=!1){return t?(sn(),hn(en,null,e)):yn(en,null,e)}function Tn(e){return null==e||"boolean"===typeof e?yn(en):(0,i.cy)(e)?yn(Jt,null,e.slice()):"object"===typeof e?In(e):yn(Zt,null,String(e))}function In(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:_n(e)}function Sn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Sn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Ze(t)?3===r&&R&&(1===R.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=R}}else(0,i.Tn)(t)?(t={default:t,_ctx:R},n=32):(t=String(t),64&r?(n=16,t=[bn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function An(e,t,n,r=null){o(e,t,7,[n,r])}const kn=Ke();let Rn=0;function On(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||kn,a={uid:Rn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:st(s,o),emitsOptions:Bt(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=$t.bind(null,a),e.ce&&e.ce(a),a}let Nn=null;const xn=()=>Nn||R;let Pn,Dn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Pn=t("__VUE_INSTANCE_SETTERS__",(e=>Nn=e)),Dn=t("__VUE_SSR_SETTERS__",(e=>jn=e))}const Ln=e=>{const t=Nn;return Pn(e),e.scope.on(),()=>{e.scope.off(),Pn(t)}},Mn=()=>{Nn&&Nn.scope.off(),Pn(null)};function Un(e){return 4&e.vnode.shapeFlag}let Fn,Vn,jn=!1;function $n(e,t=!1,n=!1){t&&Dn(t);const{props:r,children:i}=e.vnode,s=Un(e);et(e,r,s,t),mt(e,i,n);const o=s?Bn(e,t):void 0;return t&&Dn(!1),o}function Bn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ke);const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Hn(e):null,c=Ln(e);(0,r.C4)();const u=s(o,e,0,[e.props,n]);if((0,r.bl)(),c(),(0,i.yL)(u)){if(u.then(Mn,Mn),t)return u.then((n=>{zn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else zn(e,u,t)}else qn(e,t)}function zn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),qn(e,n)}function qn(e,t,n){const s=e.type;if(!e.render){if(!t&&Fn&&!s.render){const t=s.template||Le(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Fn(t,c)}}e.render=s.render||i.tE,Vn&&Vn(e)}{const t=Ln(e);(0,r.C4)();try{Ne(e)}finally{(0,r.bl)(),t()}}}const Kn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Hn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Kn),slots:e.slots,emit:e.emit,expose:t}}function Gn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ce?Ce[n](e):void 0},has(e,t){return t in e||t in Ce}})):e.proxy}function Wn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Qn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const Xn=(e,t)=>{const n=(0,r.EW)(e,t,jn);return n};function Yn(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?dn(t)?yn(e,null,[t]):yn(e,t):yn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&dn(n)&&(n=[n]),yn(e,t,n))}const Jn="3.4.32"},5130:function(e,t,n){n.d(t,{D$:function(){return be},Ef:function(){return Se},Jo:function(){return ve}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(4232),s=n(144);
/**
* @vue/runtime-dom v3.4.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?c.createElementNS(o,e):"mathml"===t?c.createElementNS(a,e):n?c.createElement(e,{is:n}):c.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const i=u.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.pR,w(e),t);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,g),y=(e,t=[])=>{(0,i.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},v=e=>!!e&&((0,i.cy)(e)?e.some((e=>e.length>1)):e.length>1);function w(e){const t={};for(const i in e)i in g||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=_(s),w=m&&m[0],b=m&&m[1],{onBeforeEnter:S,onEnter:A,onEnterCancelled:k,onLeave:R,onLeaveCancelled:N,onBeforeAppear:x=S,onAppear:P=A,onAppearCancelled:D=k}=t,L=(e,t,n)=>{T(e,t?h:c),T(e,t?l:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,T(e,d),T(e,p),T(e,f),t&&t()},U=e=>(t,n)=>{const i=e?P:A,s=()=>L(t,e,n);y(i,[t,s]),I((()=>{T(t,e?u:o),E(t,e?h:c),v(i)||C(t,r,w,s)}))};return(0,i.X$)(t,{onBeforeEnter(e){y(S,[e]),E(e,o),E(e,a)},onBeforeAppear(e){y(x,[e]),E(e,u),E(e,l)},onEnter:U(!1),onAppear:U(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);E(e,d),E(e,f),O(),I((()=>{e._isLeaving&&(T(e,d),E(e,p),v(R)||C(e,r,b,n))})),y(R,[e,n])},onEnterCancelled(e){L(e,!1),y(k,[e])},onAppearCancelled(e){L(e,!0),y(D,[e])},onLeaveCancelled(e){M(e),y(N,[e])}})}function _(e){if(null==e)return null;if((0,i.Gv)(e))return[b(e.enter),b(e.leave)];{const t=b(e);return[t,t]}}function b(e){const t=(0,i.Ro)(e);return t}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function T(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function I(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let S=0;function C(e,t,n,r){const i=e._endId=++S,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=A(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function A(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=k(i,s),a=r(`${d}Delay`),c=r(`${d}Duration`),u=k(a,c);let l=null,f=0,p=0;t===h?o>0&&(l=h,f=o,p=s.length):t===d?u>0&&(l=d,f=u,p=c.length):(f=Math.max(o,u),l=f>0?o>u?h:d:null,p=l?l===h?s.length:c.length:0);const g=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:f,propCount:p,hasTransform:g}}function k(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>R(t)+R(e[n]))))}function R(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function O(){return document.body.offsetHeight}function N(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const x=Symbol("_vod"),P=Symbol("_vsh");const D=Symbol("");const L=/(^|;)\s*display\s*:/;function M(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&F(r,t,"")}else for(const e in t)null==n[e]&&F(r,e,"");for(const e in n)"display"===e&&(o=!0),F(r,e,n[e])}else if(s){if(t!==n){const e=r[D];e&&(n+=";"+e),r.cssText=n,o=L.test(n)}}else t&&e.removeAttribute("style");x in e&&(e[x]=o?r.display:"",e[P]&&(r.display="none"))}const U=/\s*!important$/;function F(e,t,n){if((0,i.cy)(n))n.forEach((n=>F(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$(e,t);U.test(n)?e.setProperty((0,i.Tg)(r),n.replace(U,""),"important"):e[r]=n}}const V=["Webkit","Moz","ms"],j={};function $(e,t){const n=j[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return j[t]=r;r=(0,i.ZH)(r);for(let i=0;i<V.length;i++){const n=V[i]+r;if(n in e)return j[t]=n}return t}const B="http://www.w3.org/1999/xlink";function z(e,t,n,r,s,o=(0,i.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(B,t.slice(6,t.length)):e.setAttributeNS(B,t,n):null==n||o&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,i.Bm)(n)?String(n):n)}function q(e,t,n,r){if("innerHTML"===t||"textContent"===t){if(null===n)return;return void(e[t]=n)}const s=e.tagName;if("value"===t&&"PROGRESS"!==s&&!s.includes("-")){const r="OPTION"===s?e.getAttribute("value")||"":e.value,i=null==n?"":String(n);return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let o=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",o=!0):"number"===r&&(n=0,o=!0)}try{e[t]=n}catch(a){0}o&&e.removeAttribute(t)}function K(e,t,n,r){e.addEventListener(t,n,r)}function H(e,t,n,r){e.removeEventListener(t,n,r)}const G=Symbol("_vei");function W(e,t,n,r,i=null){const s=e[G]||(e[G]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=X(t);if(r){const o=s[t]=ee(r,i);K(e,n,o,a)}else o&&(H(e,n,o,a),s[t]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function X(e){let t;if(Q.test(e)){let n;t={};while(n=e.match(Q))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let Y=0;const J=Promise.resolve(),Z=()=>Y||(J.then((()=>Y=0)),Y=Date.now());function ee(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(te(e,n.value),t,5,[e])};return n.value=e,n.attached=Z(),n}function te(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ne=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,re=(e,t,n,r,s,o)=>{const a="svg"===s;"class"===t?N(e,r,a):"style"===t?M(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||W(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ie(e,t,r,a))?(q(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||z(e,t,r,a,o,"value"!==t)):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),z(e,t,r,a))};function ie(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&ne(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ne(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const se=new WeakMap,oe=new WeakMap,ae=Symbol("_moveCb"),ce=Symbol("_enterCb"),ue={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),i=(0,r.Gy)();let o,a;return(0,r.$u)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!fe(o[0].el,n.vnode.el,t))return;o.forEach(le),o.forEach(he);const r=o.filter(de);O(),r.forEach((e=>{const n=e.el,r=n.style;E(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[ae]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[ae]=null,T(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.ux)(e),u=w(c);let l=c.tag||r.FK;if(o=[],a)for(let e=0;e<a.length;e++){const t=a[e];t.el&&t.el instanceof Element&&(o.push(t),(0,r.MZ)(t,(0,r.OW)(t,u,i,n)),se.set(t,t.el.getBoundingClientRect()))}a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,i,n))}return(0,r.bF)(l,null,a)}}};ue.props;function le(e){const t=e.el;t[ae]&&t[ae](),t[ce]&&t[ce]()}function he(e){oe.set(e,e.el.getBoundingClientRect())}function de(e){const t=se.get(e),n=oe.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function fe(e,t,n){const r=e.cloneNode(),i=e[f];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=A(r);return s.removeChild(r),o}const pe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function ge(e){e.target.composing=!0}function me(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ye=Symbol("_assign"),ve={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[ye]=pe(s);const o=r||s.props&&"number"===s.props.type;K(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),e[ye](r)})),n&&K(e,"change",(()=>{e.value=e.value.trim()})),t||(K(e,"compositionstart",ge),K(e,"compositionend",me),K(e,"change",me))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(e[ye]=pe(a),e.composing)return;const c=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),u=null==t?"":t;if(c!==u){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(s&&e.value.trim()===u)return}e.value=u}}};const we=["ctrl","shift","alt","meta"],_e={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>we.some((n=>e[`${n}Key`]&&!t.includes(n)))},be=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=_e[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Ee=(0,i.X$)({patchProp:re},l);let Te;function Ie(){return Te||(Te=(0,r.K9)(Ee))}const Se=(...e)=>{const t=Ie().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ae(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Ce(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Ce(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Ae(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return f},$H:function(){return U},BH:function(){return K},BX:function(){return ne},Bm:function(){return b},C4:function(){return Y},CE:function(){return g},CP:function(){return u},DY:function(){return F},Gv:function(){return E},J$:function(){return Z},Kg:function(){return _},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return x},Qd:function(){return A},Ro:function(){return $},SU:function(){return R},TF:function(){return h},Tg:function(){return D},Tn:function(){return w},Tr:function(){return H},We:function(){return z},X$:function(){return l},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return C},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return re},vM:function(){return m},v_:function(){return se},yI:function(){return k},yL:function(){return T},yQ:function(){return V}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/**
* @vue/shared v3.4.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),y=e=>"[object Date]"===S(e),v=e=>"[object RegExp]"===S(e),w=e=>"function"===typeof e,_=e=>"string"===typeof e,b=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>(E(e)||w(e))&&w(e.then)&&w(e.catch),I=Object.prototype.toString,S=e=>I.call(e),C=e=>S(e).slice(8,-1),A=e=>"[object Object]"===S(e),k=e=>_(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},N=/-(\w)/g,x=O((e=>e.replace(N,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,D=O((e=>e.replace(P,"-$1").toLowerCase())),L=O((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=O((e=>{const t=e?`on${L(e)}`:"";return t})),U=(e,t)=>!Object.is(e,t),F=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},V=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},$=e=>{const t=_(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const z=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const q="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",K=r(q);function H(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=_(r)?X(r):H(r);if(i)for(const e in i)t[e]=i[e]}return t}if(_(e)||E(e))return e}const G=/;(?![^(]*\))/g,W=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Q,"").split(G).forEach((e=>{if(e){const n=e.split(W);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function Y(e){let t="";if(_(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=Y(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=y(e),r=y(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=b(e),r=b(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>!(!e||!0!==e.__v_isRef),se=e=>_(e)?e:null==e?"":p(e)||E(e)&&(e.toString===I||!w(e.toString))?ie(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>ie(t)?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:b(t)?ae(t):!E(t)||p(t)||A(t)?t:String(t),ae=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){var r=n(4901),i=n(6823),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+i(e)+" as a prototype")}},7080:function(e,t,n){var r=n(4402).has;e.exports=function(e){return r(e),e}},679:function(e,t,n){var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},8551:function(e,t,n){var r=n(34),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},7811:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){var r=n(6706),i=n(4576),s=TypeError;e.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==i(e))throw new s("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){var r=n(9504),i=n(7394),s=r(ArrayBuffer.prototype.slice);e.exports=function(e){if(0!==i(e))return!1;try{return s(e,0,0),!1}catch(t){return!0}}},5636:function(e,t,n){var r=n(4475),i=n(9504),s=n(6706),o=n(7696),a=n(3238),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,d=r.ArrayBuffer,f=r.DataView,p=r.TypeError,g=Math.min,m=d.prototype,y=f.prototype,v=i(m.slice),w=s(m,"resizable","get"),_=s(m,"maxByteLength","get"),b=i(y.getInt8),E=i(y.setInt8);e.exports=(l||u)&&function(e,t,n){var r,i=c(e),s=void 0===t?i:o(t),m=!w||!w(e);if(a(e))throw new p("ArrayBuffer is detached");if(l&&(e=h(e,{transfer:[e]}),i===s&&(n||m)))return e;if(i>=s&&(!n||m))r=v(e,0,s);else{var y=n&&!m&&_?{maxByteLength:_(e)}:void 0;r=new d(s,y);for(var T=new f(e),I=new f(r),S=g(s,i),C=0;C<S;C++)E(I,C,b(T,C))}return l||u(e),r}},4644:function(e,t,n){var r,i,s,o=n(7811),a=n(3724),c=n(4475),u=n(4901),l=n(34),h=n(9297),d=n(6955),f=n(6823),p=n(6699),g=n(6840),m=n(2106),y=n(1625),v=n(2787),w=n(2967),_=n(8227),b=n(3392),E=n(1181),T=E.enforce,I=E.get,S=c.Int8Array,C=S&&S.prototype,A=c.Uint8ClampedArray,k=A&&A.prototype,R=S&&v(S),O=C&&v(C),N=Object.prototype,x=c.TypeError,P=_("toStringTag"),D=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(F,t)||h(V,t)},$=function(e){var t=v(e);if(l(t)){var n=I(t);return n&&h(n,L)?n[L]:$(t)}},B=function(e){if(!l(e))return!1;var t=d(e);return h(F,t)||h(V,t)},z=function(e){if(B(e))return e;throw new x("Target is not a typed array")},q=function(e){if(u(e)&&(!w||y(R,e)))return e;throw new x(f(e)+" is not a typed array constructor")},K=function(e,t,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}O[e]&&!n||g(O,e,n?t:M&&C[e]||t,r)}},H=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in F)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(R[e]&&!n)return;try{return g(R,e,n?t:M&&R[e]||t)}catch(s){}}for(r in F)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in F)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(R)||R===Function.prototype)&&(R=function(){throw new x("Incorrect invocation")},M))for(r in F)c[r]&&w(c[r],R);if((!M||!O||O===N)&&(O=R.prototype,M))for(r in F)c[r]&&w(c[r].prototype,O);if(M&&v(k)!==O&&w(k,O),a&&!h(O,P))for(r in U=!0,m(O,P,{configurable:!0,get:function(){return l(this)?this[D]:void 0}}),F)c[r]&&p(c[r],D,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&D,aTypedArray:z,aTypedArrayConstructor:q,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:R,TypedArrayPrototype:O}},5370:function(e,t,n){var r=n(6198);e.exports=function(e,t,n){var i=0,s=arguments.length>2?n:r(t),o=new e(s);while(s>i)o[i]=t[i++];return o}},9617:function(e,t,n){var r=n(5397),i=n(5610),s=n(6198),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var u,l=i(o,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4527:function(e,t,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){var r=n(6198);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},9928:function(e,t,n){var r=n(6198),i=n(1291),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},4576:function(e,t,n){var r=n(9504),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},6955:function(e,t,n){var r=n(2140),i=n(4901),s=n(4576),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){var r=n(3724),i=n(4913),s=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){var r=n(4475),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){var r,i,s,o,a=n(4475),c=n(9714),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,f=!1;if(u)f=function(e){l(e,{transfer:[e]})};else if(h)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(i=new d,s=new h(2),o=function(e){i.port1.postMessage(null,[e])},2===s.byteLength&&(o(s),0===s.byteLength&&(f=o)))}catch(p){}e.exports=f},4055:function(e,t,n){var r=n(4475),i=n(34),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(e,t,n){var r=n(516),i=n(9088);e.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},516:function(e){e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(e,t,n){var r=n(4475),i=n(4576);e.exports="process"===i(r.process)},9392:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){var r,i,s=n(4475),o=n(9392),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(e,t,n){var r=n(9504),i=Error,s=r("".replace),o=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},6518:function(e,t,n){var r=n(4475),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(e,t,n){var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},9504:function(e,t,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},7751:function(e,t,n){var r=n(4475),i=n(4901),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},1767:function(e){e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3789:function(e,t,n){var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,d=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(e){return s(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new l(c);var n=o(t);if(n<0)throw new u(c);return new d(e,n)}},4475:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},421:function(e){e.exports={}},5917:function(e,t,n){var r=n(3724),i=n(9039),s=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),i=n(9039),s=n(4576),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3167:function(e,t,n){var r=n(4901),i=n(34),s=n(2967);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3706:function(e,t,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},1181:function(e,t,n){var r,i,s,o=n(8622),a=n(4475),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw new g(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var _=d("state");f[_]=!0,r=function(e,t){if(l(e,_))throw new g(p);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},s=function(e){return l(e,_)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},4376:function(e,t,n){var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},507:function(e,t,n){var r=n(9565);e.exports=function(e,t,n){var i,s,o=n?e:e.iterator,a=e.next;while(!(i=r(a,o)).done)if(s=t(i.value),void 0!==s)return s}},9539:function(e,t,n){var r=n(9565),i=n(8551),s=n(5966);e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(w,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},4913:function(e,t,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),i=n(34),s=n(7750),o=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},9286:function(e,t,n){var r=n(4402),i=n(8469),s=r.Set,o=r.add;e.exports=function(e){var t=new s;return i(e,(function(e){o(t,e)})),t}},3440:function(e,t,n){var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=s(t);return o(t)<=n.size?c(t,(function(e){n.includes(e)&&h(i,e)})):u(n.getIterator(),(function(e){l(t,e)&&h(i,e)})),i}},4402:function(e,t,n){var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(e,t,n){var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;e.exports=function(e){var t=r(this),n=o(e),i=new u;return s(t)>n.size?c(n.getIterator(),(function(e){h(t,e)&&l(i,e)})):a(t,(function(e){n.includes(e)&&l(i,e)})),i}},4449:function(e,t,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(e){if(i(t,e))return u(l,"normal",!1)}))}},3838:function(e,t,n){var r=n(7080),i=n(5170),s=n(8469),o=n(3789);e.exports=function(e){var t=r(this),n=o(e);return!(i(t)>n.size)&&!1!==s(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(e){if(!i(t,e))return c(u,"normal",!1)}))}},8469:function(e,t,n){var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;e.exports=function(e,t,n){return n?i({iterator:u(e),next:l},t):c(e,t)}},4916:function(e,t,n){var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](i(0));try{return(new t)[e](i(-1)),!1}catch(n){return!0}}catch(s){return!1}}},5170:function(e,t,n){var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;e.exports=function(e){var t=r(this),n=o(e).getIterator(),i=s(t);return a(n,(function(e){u(t,e)?l(i,e):c(i,e)})),i}},4204:function(e,t,n){var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=o(e).getIterator(),c=s(t);return a(n,(function(e){i(c,e)})),c}},6119:function(e,t,n){var r=n(5745),i=n(3392),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},7629:function(e,t,n){var r=n(6395),i=n(4475),s=n(9433),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.37.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){var r=n(4475),i=n(9039),s=n(7388),o=n(7290),a=n(516),c=n(9088),u=r.structuredClone;e.exports=!!u&&!i((function(){if(a&&s>92||c&&s>94||o&&s>97)return!1;var e=new ArrayBuffer(8),t=u(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){var r=n(7388),i=n(9039),s=n(4475),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5854:function(e,t,n){var r=n(2777),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){var r=n(1291),i=n(8014),s=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new s("Wrong length or index");return n}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},655:function(e,t,n){var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},9714:function(e,t,n){var r=n(9088);e.exports=function(e){try{if(r)return Function('return require("'+e+'")')()}catch(t){}}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4475),i=n(4901),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},8227:function(e,t,n){var r=n(4475),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},6573:function(e,t,n){var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},7642:function(e,t,n){var r=n(6518),i=n(3440),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("difference")},{difference:i})},8004:function(e,t,n){var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(e,t,n){var r=n(6518),i=n(4449),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isDisjointFrom")},{isDisjointFrom:i})},5876:function(e,t,n){var r=n(6518),i=n(3838),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSubsetOf")},{isSubsetOf:i})},2475:function(e,t,n){var r=n(6518),i=n(8527),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSupersetOf")},{isSupersetOf:i})},5024:function(e,t,n){var r=n(6518),i=n(3650),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},1698:function(e,t,n){var r=n(6518),i=n(4204),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},7467:function(e,t,n){var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},4732:function(e,t,n){var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},9577:function(e,t,n){var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},3375:function(e,t,n){n(7642)},9225:function(e,t,n){n(8004)},3972:function(e,t,n){n(3853)},9209:function(e,t,n){n(5876)},5714:function(e,t,n){n(2475)},7561:function(e,t,n){n(5024)},6197:function(e,t,n){n(1698)},4979:function(e,t,n){var r=n(6518),i=n(4475),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,_);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=new y(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},_=w.prototype=v.prototype,b="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:v});var C=s(m),A=C.prototype;if(A.constructor!==C)for(var k in g||a(A,"constructor",o(1,C)),d)if(c(d,k)){var R=d[k],O=R.s;c(C,O)||a(C,O,o(6,R.c))}},4603:function(e,t,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),o(t,1);var i,a=s(e),c=s(n),f=0,p=0,g=!1,m=r.length;while(f<m)i=r[f++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){n.d(t,{MF:function(){return ve},j6:function(){return fe},xZ:function(){return pe},om:function(){return de},Sx:function(){return _e},Wp:function(){return we},KO:function(){return be}});n(4114);var r=n(852),i=n(1363),s=n(4046);n(4979);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function b(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],A=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return A.set(t,s),s}w((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
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
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",x="0.10.8",P=new i.Vy("@firebase/app"),D="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/database-compat",z="@firebase/functions",q="@firebase/functions-compat",K="@firebase/installations",H="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/vertexai-preview",re="@firebase/firestore-compat",ie="firebase",se="10.12.5",oe="[DEFAULT]",ae={[N]:"fire-core",[D]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-rtdb-compat",[z]:"fire-fn",[q]:"fire-fn-compat",[K]:"fire-iid",[H]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[re]:"fire-fst-compat",[ne]:"fire-vertex","fire-js":"fire-js",[ie]:"fire-js-all"},ce=new Map,ue=new Map,le=new Map;function he(e,t){try{e.container.addComponent(t)}catch(n){P.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function de(e){const t=e.name;if(le.has(t))return P.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ce.values())he(n,e);for(const n of ue.values())he(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pe(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
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
const ge={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},me=new s.FA("app","Firebase",ge);
/**
 * @license
 * Copyright 2019 Google LLC
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
class ye{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 * Copyright 2019 Google LLC
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
const ve=se;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:oe,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw me.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw me.create("no-options");const a=ce.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw me.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of le.values())c.addComponent(r);const u=new ye(n,i,c);return ce.set(o,u),u}function _e(e=oe){const t=ce.get(e);if(!t&&e===oe&&(0,s.T9)())return we();if(!t)throw me.create("no-app",{appName:e});return t}function be(e,t,n){var i;let s=null!==(i=ae[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void P.warn(e.join(" "))}de(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
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
const Ee="firebase-heartbeat-database",Te=1,Ie="firebase-heartbeat-store";let Se=null;function Ce(){return Se||(Se=I(Ee,Te,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ie)}catch(n){console.warn(n)}}}}).catch((e=>{throw me.create("idb-open",{originalErrorMessage:e.message})}))),Se}async function Ae(e){try{const t=await Ce(),n=t.transaction(Ie),r=await n.objectStore(Ie).get(Re(e));return await n.done,r}catch(t){if(t instanceof s.g)P.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});P.warn(e.message)}}}async function ke(e,t){try{const n=await Ce(),r=n.transaction(Ie,"readwrite"),i=r.objectStore(Ie);await i.put(t,Re(e)),await r.done}catch(n){if(n instanceof s.g)P.warn(n.message);else{const e=me.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});P.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Oe=1024,Ne=2592e6;class xe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Pe();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ne})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pe(),{heartbeatsToSend:n,unsentEntries:r}=De(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pe(){const e=new Date;return e.toISOString().substring(0,10)}function De(e,t=Oe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Me(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Me(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ae(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ke(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Me(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Ue(e){de(new r.uA("platform-logger",(e=>new R(e)),"PRIVATE")),de(new r.uA("heartbeat",(e=>new xe(e)),"PRIVATE")),be(N,x,e),be(N,x,"esm2017"),be("fire-js","")}Ue("")},852:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return u}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},7845:function(e,t,n){n.d(t,{eJ:function(){return Lt},xI:function(){return Wr},x9:function(){return Mt},r7:function(){return Ft}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),s=n(1363);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(e,...t){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
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
 */function p(e,...t){throw v(e,...t)}function g(e,...t){return v(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function y(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function w(e,t,...n){if(!e)throw v(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function b(e,t){e||_(t)}
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
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(T()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function C(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function k(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},N=new A(3e4,6e4);
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
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,r,s={}){return D(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(M(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},O),t);try{const t=new F(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw V(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof i.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function L(e,t,n,r,i={}){const s=await P(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function M(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?k(e.config,i):`${e.config.apiScheme}://${i}`}function U(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
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
 */function j(e){return void 0!==e&&void 0!==e.enterprise}class ${constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return U(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
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
 */async function B(e,t){return P(e,"GET","/v2/recaptchaConfig",x(e,t))}
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
 */async function z(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
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
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function H(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=W(r);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:K(G(s.auth_time)),issuedAtTime:K(G(s.iat)),expirationTime:K(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function W(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Q(e){const t=W(e);return w(t,"internal-error"),w("undefined"!==typeof t.exp,"internal-error"),w("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function X(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),i=await X(e,q(n,{idToken:r}));w(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?re(s.providerUserInfo):[],a=ne(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Z(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function te(e){const t=(0,i.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function re(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function ie(e,t){const n=await D(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=M(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function se(e,t){return P(e,"POST","/v2/accounts:revokeToken",x(e,t))}
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
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w("undefined"!==typeof e.idToken,"internal-error"),w("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(0!==e.length,"internal-error");const t=Q(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ie(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new oe;return n&&(w("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(w("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return _("not implemented")}}
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
 */function ae(e,t){w("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await X(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return te(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(y(this.auth));const e=await this.getIdToken();return await X(this,z(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:T}=t;w(v&&T,e,"internal-error");const I=oe.fromJSON(this.name,T);w("string"===typeof v,e,"internal-error"),ae(l,e.name),ae(h,e.name),w("boolean"===typeof _,e,"internal-error"),w("boolean"===typeof b,e,"internal-error"),ae(d,e.name),ae(f,e.name),ae(p,e.name),ae(g,e.name),ae(m,e.name),ae(y,e.name);const S=new ce({uid:v,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];w(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?re(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),o=new oe;o.updateFromIdToken(n);const a=new ce({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Z(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
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
 */const ue=new Map;function le(e){b(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(le(de),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||le(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ce._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new pe(i,e,n)):new pe(i,e,n)}}
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
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(be(t))return"Blackberry";if(Ee(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||ve(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ye(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ve(e=(0,i.ZQ)()){return/crios\//i.test(e)}function we(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function _e(e=(0,i.ZQ)()){return/android/i.test(e)}function be(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function Ee(e=(0,i.ZQ)()){return/webos/i.test(e)}function Te(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ie(e=(0,i.ZQ)()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return(0,i.lT)()&&10===document.documentMode}function Ce(e=(0,i.ZQ)()){return Te(e)||_e(e)||Ee(e)||be(e)||/windows phone/i.test(e)||we(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.ZQ)());break;case"Worker":n=`${ge((0,i.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Re{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Oe(e,t={}){return P(e,"GET","/v2/passwordPolicy",x(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Ne=6;class xe{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Ne,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
 */class Pe{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.beforeStateQueue=new Re(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await q(this,{idToken:e}),n=await ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(y(this));const t=e?(0,i.Ku)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(y(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(y(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(le(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oe(this),t=new xe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await se(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function De(e){return(0,i.Ku)(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let Me={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ue(e){Me=e}function Fe(e){return Me.loadJS(e)}function Ve(){return Me.recaptchaEnterpriseScript}function je(){return Me.gapiScript}function $e(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Be="recaptcha-enterprise",ze="NO_RECAPTCHA";class qe{constructor(e){this.type=Be,this.auth=De(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{B(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new $(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;j(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(ze)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&j(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Ve();0!==t.length&&(t+=n),Fe(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ke(e,t,n,r=!1){const i=new qe(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function He(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ke(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ke(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
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
function Ge(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function We(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(le);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Qe(e,t,n){const r=De(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Xe(t),{host:o,port:a}=Ye(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ze()}function Xe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ye(e){const t=Xe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Je(t)}}}function Je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
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
 */async function tt(e,t){return P(e,"POST","/v1/accounts:signUp",t)}
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
async function nt(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}
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
async function rt(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}async function it(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}
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
 */class st extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new st(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new st(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,t,"signInWithPassword",nt);case"emailLink":return rt(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return He(e,n,"signUpPassword",tt);case"emailLink":return it(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function ot(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
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
 */const at="http://localhost";class ct extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ct(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ot(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ot(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}buildRequest(){const e={requestUri:at,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
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
 */async function ut(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}async function lt(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}async function ht(e,t){const n=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const dt={["USER_NOT_FOUND"]:"user-not-found"};async function ft(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return L(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,n),dt)}
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
 */class pt extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return lt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ht(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ft(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new pt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function gt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class yt{constructor(e){var t,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=gt(null!==(r=c["mode"])&&void 0!==r?r:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=mt(e);try{return new yt(t)}catch(n){return null}}}
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
class vt{constructor(){this.providerId=vt.PROVIDER_ID}static credential(e,t){return st._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=yt.parseLink(t);return w(n,"argument-error"),st._fromEmailAndCode(e,n.code,n.tenantId)}}vt.PROVIDER_ID="password",vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class _t extends wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class bt extends _t{constructor(){super("facebook.com")}static credential(e){return ct._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch(t){return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com",bt.PROVIDER_ID="facebook.com";
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
class Et extends _t{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ct._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Et.credential(t,n)}catch(r){return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com",Et.PROVIDER_ID="google.com";
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
class Tt extends _t{constructor(){super("github.com")}static credential(e){return ct._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch(t){return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com",Tt.PROVIDER_ID="github.com";
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
class It extends _t{constructor(){super("twitter.com")}static credential(e,t){return ct._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(r){return null}}}
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
async function St(e,t){return L(e,"POST","/v1/accounts:signUp",x(e,t))}
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
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ce._fromIdTokenResponse(e,n,r),s=At(n),o=new Ct({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=At(n);return new Ct({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function At(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class kt extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,kt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new kt(e,t,n,r)}}function Rt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw kt._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Ot(e,t,n=!1){const r=await X(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ct._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
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
async function Nt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(y(i));const s="reauthenticate";try{const r=await X(e,Rt(i,s,t,e),n);w(r.idToken,i,"internal-error");const o=W(r.idToken);w(o,i,"internal-error");const{sub:a}=o;return w(e.uid===a,i,"user-mismatch"),Ct._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(i,"user-mismatch"),o}}
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
 */async function xt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(y(e));const i="signIn",s=await Rt(e,i,t),o=await Ct._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(o.user),o}async function Pt(e,t){return xt(De(e),t)}
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
async function Dt(e){const t=De(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Lt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(y(e));const i=De(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},o=He(i,s,"signUpPassword",St),a=await o.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Dt(e),t})),c=await Ct._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Mt(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(y(e)):Pt((0,i.Ku)(e),vt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Dt(e),t}))}
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
async function Ut(e,t){return P(e,"POST","/v1/accounts:update",t)}
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
 */async function Ft(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.Ku)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await X(r,Ut(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Vt(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function jt(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}
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
function $t(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function Bt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}function zt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function qt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}new WeakMap;const Kt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ht{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kt,"1"),this.storage.removeItem(Kt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Gt(){const e=(0,i.ZQ)();return ye(e)||Te(e)}const Wt=1e3,Qt=10;class Xt extends Ht{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gt()&&Ae(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Se()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Qt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Wt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xt.type="LOCAL";const Yt=Xt;
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
 */class Jt extends Ht{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jt.type="SESSION";const Zt=Jt;
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function en(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await en(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function nn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */tn.receivers=[];class rn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=nn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function sn(){return window}function on(e){sn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function an(){return"undefined"!==typeof sn()["WorkerGlobalScope"]&&"function"===typeof sn()["importScripts"]}async function cn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function un(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ln(){return an()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const hn="firebaseLocalStorageDb",dn=1,fn="firebaseLocalStorage",pn="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function mn(e,t){return e.transaction([fn],t?"readwrite":"readonly").objectStore(fn)}function yn(){const e=indexedDB.deleteDatabase(hn);return new gn(e).toPromise()}function vn(){const e=indexedDB.open(hn,dn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(fn,{keyPath:pn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(fn)?t(n):(n.close(),await yn(),t(await vn()))}))}))}async function wn(e,t,n){const r=mn(e,!0).put({[pn]:t,value:n});return new gn(r).toPromise()}async function _n(e,t){const n=mn(e,!1).get(t),r=await new gn(n).toPromise();return void 0===r?null:r.value}function bn(e,t){const n=mn(e,!0).delete(t);return new gn(n).toPromise()}const En=800,Tn=3;class In{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await vn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return an()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(ln()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await cn(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&un()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vn();return await wn(e,Kt,"1"),await bn(e,Kt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>wn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>_n(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>bn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mn(e,!1).getAll();return new gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),En)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}In.type="LOCAL";const Sn=In;
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
 */function Cn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}function An(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}function kn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}
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
$e("rcb"),new A(3e4,6e4);
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
const Rn="recaptcha";async function On(e,t,n){var r;const i=await n.verify();try{let s;if(w("string"===typeof i,e,"argument-error"),w(n.type===Rn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){w("enroll"===t.type,e,"internal-error");const n=await $t(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;w(n,e,"missing-multi-factor-info");const o=await Cn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ut(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class Nn{constructor(e){this.providerId=Nn.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return On(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return pt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Nn.credentialFromTaggedObject(t)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?pt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
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
function xn(e,t){return t?le(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */Nn.PROVIDER_ID="phone",Nn.PHONE_SIGN_IN_METHOD="phone";class Pn extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dn(e){return xt(e.auth,new Pn(e),e.bypassAuthState)}function Ln(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Nt(n,new Pn(e),e.bypassAuthState)}async function Mn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Ot(n,new Pn(e),e.bypassAuthState)}
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
 */class Un{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dn;case"linkViaPopup":case"linkViaRedirect":return Mn;case"reauthViaPopup":case"reauthViaRedirect":return Ln;default:p(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Fn=new A(2e3,1e4);class Vn extends Un{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Fn.get())};e()}}Vn.currentPopupAction=null;
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
const jn="pendingRedirect",$n=new Map;class Bn extends Un{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$n.get(this.auth._key());if(!e){try{const t=await zn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$n.set(this.auth._key(),e)}return this.bypassAuthState||$n.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function zn(e,t){const n=Hn(t),r=Kn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function qn(e,t){$n.set(e._key(),t)}function Kn(e){return le(e._redirectPersistence)}function Hn(e){return fe(jn,e.config.apiKey,e.name)}
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
 */async function Gn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(y(e));const i=De(e),s=xn(i,t),o=new Bn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
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
const Wn=6e5;class Qn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Jn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xn(e))}saveEventToCache(e){this.cachedEventUids.add(Xn(e)),this.lastProcessedEventTime=Date.now()}}function Xn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Jn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yn(e);default:return!1}}
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
 */async function Zn(e,t={}){return P(e,"GET","/v1/projects",t)}
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
 */const er=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tr=/^https?/;async function nr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Zn(e);for(const r of t)try{if(rr(r))return}catch(n){}p(e,"unauthorized-domain")}function rr(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tr.test(n))return!1;if(er.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ir=new A(3e4,6e4);function sr(){const e=sn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function or(e){return new Promise(((t,n)=>{var r,i,s;function o(){sr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{sr(),n(g(e,"network-request-failed"))},timeout:ir.get()})}if(null===(i=null===(r=sn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=sn().gapi)||void 0===s?void 0:s.load)){const t=$e("iframefcb");return sn()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},Fe(`${je()}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ar=null,e}))}let ar=null;function cr(e){return ar=ar||or(e),ar}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ur=new A(5e3,15e3),lr="__/auth/iframe",hr="emulator/auth/iframe",dr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pr(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,hr):`https://${e.config.authDomain}/${lr}`,s={apiKey:t.apiKey,appName:e.name,v:r.MF},o=fr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function gr(e){const t=await cr(e),n=sn().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:pr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=sn().setTimeout((()=>{r(i)}),ur.get());function o(){sn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yr=500,vr=600,wr="_blank",_r="http://localhost";class br{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Er(e,t,n,r=yr,s=vr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},mr),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=ve(l)?wr:n),me(l)&&(t=t||_r,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Ie(l)&&"_self"!==c)return Tr(t||"",c),new br(null);const d=window.open(t||"",c,h);w(d,e,"popup-blocked");try{d.focus()}catch(f){}return new br(d)}function Tr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Ir="__/auth/handler",Sr="emulator/auth/handler",Cr=encodeURIComponent("fac");async function Ar(e,t,n,s,o,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(t instanceof wt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof _t){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${Cr}=${encodeURIComponent(l)}`:"";return`${kr(e)}?${(0,i.Am)(u).slice(1)}${h}`}function kr({config:e}){return e.emulator?k(e,Sr):`https://${e.authDomain}/${Ir}`}
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
 */const Rr="webStorageSupport";class Or{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zt,this._completeRedirectFn=Gn,this._overrideRedirectResult=qn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Ar(e,t,n,E(),r);return Er(e,s,nn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Ar(e,t,n,E(),r);return on(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await gr(e),n=new Qn(e);return t.register("authEvent",(t=>{w(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Rr,{type:Rr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Rr];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ye()||Te()}}const Nr=Or;class xr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class Pr extends xr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Pr(e)}_finalizeEnroll(e,t,n){return Bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return An(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Dr{constructor(){}static assertion(e){return Pr._fromCredential(e)}}Dr.FACTOR_ID="phone";class Lr{static assertionForEnrollment(e,t){return Mr._fromSecret(e,t)}static assertionForSignIn(e,t){return Mr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;w("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await zt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Ur._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Lr.FACTOR_ID="totp";class Mr extends xr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Mr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Mr(t,e)}async _finalizeEnroll(e,t,n){return w("undefined"!==typeof this.secret,e,"argument-error"),qt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return kn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ur{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ur(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Fr(e)||Fr(t))&&(r=!0),r&&(Fr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Fr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Fr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Vr="@firebase/auth",jr="1.7.6";
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
class $r{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Br(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},u=new Pe(r,i,s,c);return We(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new $r(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(Vr,jr,Br(e)),(0,r.KO)(Vr,jr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const qr=300,Kr=(0,i.XA)("authIdTokenMaxAge")||qr;let Hr=null;const Gr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kr)return;const i=null===n||void 0===n?void 0:n.token;Hr!==i&&(Hr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ge(e,{popupRedirectResolver:Nr,persistence:[Sn,Yt,Zt]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=Gr(e.toString());jt(n,t,(()=>t(n.currentUser))),Vt(n,(e=>t(e)))}}const o=(0,i.Tj)("auth");return o&&Qe(n,`http://${o}`),n}function Qr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Ue({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Qr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),zr("Browser")},7617:function(e,t,n){n.d(t,{H9:function(){return Bo},x7:function(){return Ea},aU:function(){return Ko},BN:function(){return Ia}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4979);var r,i,s=n(3405),o=n(852),a=n(1363),c=n(4046),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var e;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function a(e,t){var n=u;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function c(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.B,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)o(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=t},s.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var u={};function h(e){return-128<=e&&128>e?a(e,(function(e){return new c([0|e],0>e?-1:0)})):new c([0|e],0>e?-1:0)}function d(e){if(isNaN(e)||!isFinite(e))return p;if(0>e)return w(d(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new c(t,0)}function f(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return w(f(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(t,8)),r=p,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=d(Math.pow(t,s)),r=r.j(s).add(d(o))):(r=r.j(n),r=r.add(d(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function y(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function v(e){return-1==e.h}function w(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new c(n,~e.h).add(g)}function _(e,t){return e.add(w(t))}function b(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function E(e,t){this.g=e,this.h=t}function T(e,t){if(y(t))throw Error("division by zero");if(y(e))return new E(p,p);if(v(e))return t=T(w(e),t),new E(w(t.g),w(t.h));if(v(t))return t=T(e,w(t)),new E(w(t.g),t.h);if(30<e.g.length){if(v(e)||v(t))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=t;0>=r.l(e);)n=I(n),r=I(r);var i=S(n,1),s=S(r,1);for(r=S(r,2),n=S(n,2);!y(r);){var o=s.add(r);0>=o.l(e)&&(i=i.add(n),s=o),r=S(r,1),n=S(n,1)}return t=_(e,i.j(t)),new E(i,t)}for(i=p;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=d(n),o=s.j(t);v(o)||0<o.l(e);)n-=r,s=d(n),o=s.j(t);y(s)&&(s=g),i=i.add(s),e=_(e,o)}return new E(i,e)}function I(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new c(n,e.h)}function S(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.i(s+n)>>>t|e.i(s+n+1)<<32-t:e.i(s+n);return new c(i,e.h)}e=c.prototype,e.m=function(){if(v(this))return-w(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(y(this))return"0";if(v(this))return"-"+w(this).toString(e);for(var t=d(Math.pow(e,6)),n=this,r="";;){var i=T(n,t).g;n=_(n,i.j(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,y(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=_(this,e),v(e)?-1:y(e)?0:1},e.abs=function(){return v(this)?w(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.i(i))+(65535&e.i(i)),o=(s>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new c(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(y(this)||y(e))return p;if(v(this))return v(e)?w(this).j(w(e)):w(w(this).j(e));if(v(e))return w(this.j(w(e)));if(0>this.l(m)&&0>e.l(m))return d(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.i(r)>>>16,o=65535&this.i(r),a=e.i(i)>>>16,u=65535&e.i(i);n[2*r+2*i]+=o*u,b(n,2*r+2*i),n[2*r+2*i+1]+=s*u,b(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,b(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,b(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new c(n,0)},e.A=function(e){return T(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new c(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new c(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new c(n,this.h^e.h)},s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,i=l.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,r=l.Integer=c}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,d,f,p,g,m,y,v,w,_="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},b={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof _&&_];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(e,n){if(n)e:{var i=r;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}e=e[e.length-1],s=i[e],n=n(s),n!=s&&null!=n&&t(i,e,{configurable:!0,writable:!0,value:n})}}function s(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(e){return e||function(){return s(this,(function(e,t){return t}))}}));
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var o=o||{},a=this||self;function c(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function l(e,t,n){return e.call.apply(e.bind,arguments)}function E(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function T(e,t,n){return T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?l:E,T.apply(null,arguments)}function S(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function C(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function A(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(c(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}class R{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function O(e){return/^[\s\xa0]*$/.test(e)}function N(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function x(e){return x[" "](e),e}x[" "]=function(){};var P=-1!=N().indexOf("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&-1==N().indexOf("Edge"))&&!(-1!=N().indexOf("Trident")||-1!=N().indexOf("MSIE"))&&-1==N().indexOf("Edge");function D(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function L(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function M(e){const t={};for(const n in e)t[n]=e[n];return t}const U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<U.length;t++)n=U[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function V(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function j(e){a.setTimeout((()=>{throw e}),0)}function $(){var e=G;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class B{constructor(){this.h=this.g=null}add(e,t){const n=z.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var z=new R((()=>new q),(e=>e.reset()));class q{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let K,H=!1,G=new B,W=()=>{const e=a.Promise.resolve(void 0);K=()=>{e.then(Q)}};var Q=()=>{for(var e;e=$();){try{e.h.call(e.g)}catch(n){j(n)}var t=z;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}H=!1};function X(){this.s=this.s,this.C=this.C}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},Y.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(n){}return e}();function Z(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(P){e:{try{x(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.aa.h.call(this)}}C(Z,Y);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.da=this.fa=!1}function ie(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}se.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new re(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return fe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=_e(n),e&&e[te]?e.K(t,n,u(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=u(i)?!!i.capture:!!i,a=ve(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=de(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)J||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=ye;return e}function fe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);return null}return n=_e(n),e&&e[te]?e.L(t,n,u(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function pe(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);else r=u(r)?!!r.capture:!!r,n=_e(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ve(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[te])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ve(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):ie(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ye(e,t){if(e.da)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&ge(e),e=n.call(r,t)}return e}function ve(e){return e=e[ce],e instanceof se?e:null}var we="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"===typeof e?e:(e[we]||(e[we]=function(t){return e.handleEvent(t)}),e[we])}function be(){X.call(this),this.i=new se(this),this.M=this,this.F=null}function Ee(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(r,e),F(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&oe(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function Ie(e,t,n){if("function"===typeof e)n&&(e=T(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=T(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Se(e){e.g=Ie((()=>{e.g=null,e.i&&(e.i=!1,Se(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}C(be,X),be.prototype[te]=!0,be.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},be.prototype.N=function(){if(be.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.F=null},be.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},be.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class Ce extends X{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:Se(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ae(e){X.call(this),this.h=e,this.g={}}C(Ae,X);var ke=[];function Re(e){D(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}Ae.prototype.N=function(){Ae.aa.N.call(this),Re(this)},Ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oe=a.JSON.stringify,Ne=a.JSON.parse,xe=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function Pe(){}function De(e){return e.h||(e.h=e.i())}function Le(){}Pe.prototype.h=null;var Me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ue(){Y.call(this,"d")}function Fe(){Y.call(this,"c")}C(Ue,Y),C(Fe,Y);var Ve={},je=null;function $e(){return je=je||new be}function Be(e){Y.call(this,Ve.La,e)}function ze(e){const t=$e();Ee(t,new Be(t))}function qe(e,t){Y.call(this,Ve.STAT_EVENT,e),this.stat=t}function Ke(e){const t=$e();Ee(t,new qe(t,e))}function He(e,t){Y.call(this,Ve.Ma,e),this.size=t}function Ge(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}function We(){this.g=!0}function Qe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ze(e,n)+(r?" "+r:"")}))}function Je(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ze(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Oe(n)}catch(a){return t}}Ve.La="serverreachability",C(Be,Y),Ve.STAT_EVENT="statevent",C(qe,Y),Ve.Ma="timingevent",C(He,Y),We.prototype.xa=function(){this.g=!1},We.prototype.info=function(){};var et,tt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function rt(){}function it(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new Ae(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new st}function st(){this.i=null,this.g="",this.h=!1}C(rt,Pe),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},et=new rt;var ot={},at={};function ct(e,t,n){e.L=1,e.v=Ut(xt(t)),e.m=n,e.P=!0,ut(e,null)}function ut(e,t){e.F=Date.now(),dt(e),e.A=xt(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Xt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new st,e.g=zn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new Ce(T(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ke[0]=i.toString()),i=ke);for(var s=0;s<i.length;s++){var o=le(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?M(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ze(),Qe(e.i,e.u,e.A,e.l,e.R,e.m)}function lt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function ht(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?at:(n=Number(t.substring(n,r)),isNaN(n)?ot:(r+=1,r+n>t.length?at:(t=t.slice(r,r+n),e.C=r+n,t)))}function dt(e){e.S=Date.now()+e.I,ft(e,e.I)}function ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ge(T(e.ba,e),t)}function pt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function gt(e){0==e.j.G||e.J||Fn(e.j,e)}function mt(e){pt(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,Re(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function yt(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Et(n.h,e)))if(!e.K&&Et(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Un(n),Cn(n)}Dn(n),Ke(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ge(T(n.Za,n),6e3));if(1>=bt(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else jn(n,11)}else if((e.K||n.g==e)&&Un(n),!O(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Tt(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,Mt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=e;if(r.qa=Bn(r,r.J?r.ia:null,r.W),o.K){It(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(pt(a),dt(a)),r.g=o}else Pn(r);0<n.i.length&&kn(n)}else"stop"!=u[0]&&"close"!=u[0]||jn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?jn(n,7):Sn(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}ze(4)}catch(u){}}it.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==_n(e)?t.j():this.Y(e)},it.prototype.Y=function(e){try{if(e==this.g)e:{const d=_n(this.g);var t=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||4!=d||7==t||ze(8==t||0>=f?3:2),pt(this);var n=this.g.Z();this.X=n;t:if(lt(this)){var r=bn(this.g);e="";var i=r.length,s=4==_n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){mt(this),gt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(s&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Xe(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var l=c;break t}}l=null}if(!(n=l)){this.o=!1,this.s=3,Ke(12),mt(this),gt(this);break e}Ye(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yt(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=ht(this,o),e==at){4==d&&(this.s=4,Ke(14),n=!1),Ye(this.i,this.l,null,"[Incomplete Response]");break}if(e==ot){this.s=4,Ke(15),Ye(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Ye(this.i,this.l,e,null),yt(this,e)}if(lt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Ke(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Ln(h),h.M=!0,Ke(11))}}else Ye(this.i,this.l,o,"[Invalid Chunked Response]"),mt(this),gt(this)}else Ye(this.i,this.l,o,null),yt(this,o);4==d&&mt(this),this.o&&!this.J&&(4==d?Fn(this.j,this):(this.o=!1,dt(this)))}else En(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),mt(this),gt(this)}}}catch(d){}},it.prototype.cancel=function(){this.J=!0,mt(this)},it.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(Je(this.i,this.A),2!=this.L&&(ze(),Ke(17)),mt(this),this.s=2,gt(this)):ft(this,this.S-e)};var vt=class{constructor(e,t){this.g=e,this.map=t}};function wt(e){this.l=e||10,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _t(e){return!!e.h||!!e.g&&e.g.size>=e.j}function bt(e){return e.h?1:e.g?e.g.size:0}function Et(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Tt(e,t){e.g?e.g.add(t):e.h=t}function It(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function St(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return A(e.i)}function Ct(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function At(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(c(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function kt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=At(e),r=Ct(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}wt.prototype.cancel=function(){if(this.i=St(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ot(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Nt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof Nt){this.h=e.h,Pt(this,e.j),this.o=e.o,this.g=e.g,Dt(this,e.s),this.l=e.l;var t=e.i,n=new Ht;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Lt(this,n),this.m=e.m}else e&&(t=String(e).match(Rt))?(this.h=!1,Pt(this,t[1]||"",!0),this.o=Ft(t[2]||""),this.g=Ft(t[3]||"",!0),Dt(this,t[4]),this.l=Ft(t[5]||"",!0),Lt(this,t[6]||"",!0),this.m=Ft(t[7]||"")):(this.h=!1,this.i=new Ht(null,this.h))}function xt(e){return new Nt(e)}function Pt(e,t,n){e.j=n?Ft(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Dt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Lt(e,t,n){t instanceof Ht?(e.i=t,Jt(e.i,e.h)):(n||(t=Vt(t,qt)),e.i=new Ht(t,e.h))}function Mt(e,t,n){e.i.set(t,n)}function Ut(e){return Mt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ft(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Vt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Nt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Vt(t,$t,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Vt(t,$t,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Vt(n,"/"==n.charAt(0)?zt:Bt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",Vt(n,Kt)),e.join("")};var $t=/[#\/\?@]/g,Bt=/[#\?:]/g,zt=/[#\?]/g,qt=/[#\?@]/g,Kt=/#/g;function Ht(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Gt(e){e.g||(e.g=new Map,e.h=0,e.i&&Ot(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Wt(e,t){Gt(e),t=Yt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Qt(e,t){return Gt(e),t=Yt(e,t),e.g.has(t)}function Xt(e,t,n){Wt(e,t),0<n.length&&(e.i=null,e.g.set(Yt(e,t),A(n)),e.h+=n.length)}function Yt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Jt(e,t){t&&!e.j&&(Gt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Wt(this,t),Xt(this,n,e))}),e)),e.j=t}function Zt(e,t){const n=new We;if(a.Image){const r=new Image;r.onload=S(tn,n,"TestLoadImage: loaded",!0,t,r),r.onerror=S(tn,n,"TestLoadImage: error",!1,t,r),r.onabort=S(tn,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=S(tn,n,"TestLoadImage: timeout",!1,t,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function en(e,t){const n=new We,r=new AbortController,i=setTimeout((()=>{r.abort(),tn(n,"TestPingServer: timeout",!1,t)}),1e4);fetch(e,{signal:r.signal}).then((e=>{clearTimeout(i),e.ok?tn(n,"TestPingServer: ok",!0,t):tn(n,"TestPingServer: server error",!1,t)})).catch((()=>{clearTimeout(i),tn(n,"TestPingServer: error",!1,t)}))}function tn(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function nn(){this.g=new xe}function rn(e,t,n){const r=n||"";try{kt(e,(function(e,n){let i=e;u(e)&&(i=Oe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function sn(e){this.l=e.Ub||null,this.j=e.eb||!1}function on(e,t){be.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function cn(e){e.readyState=4,e.l=null,e.j=null,e.v=null,un(e)}function un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function ln(e){let t="";return D(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function hn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ln(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Mt(e,t,n))}function dn(e){be.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=Ht.prototype,e.add=function(e,t){Gt(this),this.i=null,e=Yt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Gt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){Gt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){Gt(this);let t=[];if("string"===typeof e)Qt(this,e)&&(t=t.concat(this.g.get(Yt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return Gt(this),this.i=null,e=Yt(this,e),Qt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},C(sn,Pe),sn.prototype.g=function(){return new on(this.l,this.j)},sn.prototype.i=function(e){return function(){return e}}({}),C(on,be),e=on.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,un(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,un(this)),this.g&&(this.readyState=3,un(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?cn(this):un(this),3==this.readyState&&an(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,cn(this))},e.Qa=function(e){this.g&&(this.response=e,cn(this))},e.ga=function(){this.g&&cn(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(on.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),C(dn,be);var fn=/^https?$/i,pn=["POST","PUT"];function gn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,mn(e),vn(e)}function mn(e){e.A||(e.A=!0,Ee(e,"complete"),Ee(e,"error"))}function yn(e){if(e.h&&"undefined"!=typeof o&&(!e.v[1]||4!=_n(e)||2!=e.Z()))if(e.u&&4==_n(e))Ie(e.Ea,0,e);else if(Ee(e,"readystatechange"),4==_n(e)){e.h=!1;try{const o=e.Z();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.D).match(Rt)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!fn.test(i?i.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<_n(e)?e.g.statusText:""}catch(c){s=""}e.l=s+" ["+e.Z()+"]",mn(e)}}finally{vn(e)}}}function vn(e,t){if(e.g){wn(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||Ee(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function wn(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function _n(e){return e.g?e.g.readyState:0}function bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(I){return null}}function En(e){const t={};e=(e.g&&2<=_n(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(O(e[r]))continue;var n=V(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}L(t,(function(e){return e.join(", ")}))}function Tn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function In(e){this.Aa=0,this.i=[],this.j=new We,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,e),this.cb=Tn("retryDelaySeedMs",1e4,e),this.Wa=Tn("forwardChannelMaxRetries",2,e),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new wt(e&&e.concurrentRequestLimit),this.Da=new nn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Sn(e){if(An(e),3==e.G){var t=e.U++,n=xt(e.I);if(Mt(n,"SID",e.K),Mt(n,"RID",t),Mt(n,"TYPE","terminate"),Nn(e,n),t=new it(e,e.j,t),t.L=2,t.v=Ut(xt(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=zn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),dt(t)}$n(e)}function Cn(e){e.g&&(Ln(e),e.g.cancel(),e.g=null)}function An(e){Cn(e),e.u&&(a.clearTimeout(e.u),e.u=null),Un(e),e.h.cancel(),e.s&&("number"===typeof e.s&&a.clearTimeout(e.s),e.s=null)}function kn(e){if(!_t(e.h)&&!e.s){e.s=!0;var t=e.Ga;K||W(),H||(K(),H=!0),G.add(t,e),e.B=0}}function Rn(e,t){return!(bt(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=Ge(T(e.Ga,e,t),Vn(e,e.B)),e.B++,!0))}function On(e,t){var n;n=t?t.l:e.U++;const r=xt(e.I);Mt(r,"SID",e.K),Mt(r,"RID",n),Mt(r,"AID",e.T),Nn(e,r),e.m&&e.o&&hn(r,e.m,e.o),n=new it(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=xn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Tt(e.h,n),ct(n,r,t)}function Nn(e,t){e.H&&D(e.H,(function(e,n){Mt(t,n,e)})),e.l&&kt({},(function(e,n){Mt(t,n,e)}))}function xn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?T(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{rn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Pn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;K||W(),H||(K(),H=!0),G.add(t,e),e.v=0}}function Dn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ge(T(e.Fa,e),Vn(e,e.v)),e.v++,!0)}function Ln(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function Mn(e){e.g=new it(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=xt(e.qa);Mt(t,"RID","rpc"),Mt(t,"SID",e.K),Mt(t,"AID",e.T),Mt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&Mt(t,"TO",e.ja),Mt(t,"TYPE","xmlhttp"),Nn(e,t),e.m&&e.o&&hn(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=Ut(xt(t)),n.m=null,n.P=!0,ut(n,e)}function Un(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function Fn(e,t){var n=null;if(e.g==t){Un(e),Ln(e),e.g=null;var r=2}else{if(!Et(e.h,t))return;n=t.D,It(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;r=$e(),Ee(r,new He(r,n)),kn(e)}else Pn(e);else if(i=t.s,3==i||0==i&&0<t.X||!(1==r&&Rn(e,t)||2==r&&Dn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:jn(e,5);break;case 4:jn(e,10);break;case 3:jn(e,6);break;default:jn(e,2)}}function Vn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function jn(e,t){if(e.j.info("Error code "+t),2==t){var n=T(e.fb,e),r=e.Xa;const t=!r;r=new Nt(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Pt(r,"https"),Ut(r),t?Zt(r.toString(),n):en(r.toString(),n)}else Ke(2);e.G=0,e.l&&e.l.sa(t),$n(e),An(e)}function $n(e){if(e.G=0,e.ka=[],e.l){const t=St(e.h);0==t.length&&0==e.i.length||(k(e.ka,t),k(e.ka,e.i),e.h.i.length=0,A(e.i),e.i.length=0),e.l.ra()}}function Bn(e,t,n){var r=n instanceof Nt?xt(n):new Nt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Dt(r,r.s);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Nt(null);r&&Pt(s,r),t&&(s.g=t),i&&Dt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.ya,n&&t&&Mt(r,n,t),Mt(r,"VER",e.la),Nn(e,r),r}function zn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new dn(new sn({eb:n})):new dn(e.pa),t.Ha(e.J),t}function qn(){}function Kn(){}function Hn(e,t){be.call(this),this.g=new In(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!O(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Qn(this)}function Gn(e){Ue.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Wn(){Fe.call(this),this.status=1}function Qn(e){this.g=e}e=dn.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():et.g(),this.v=this.o?De(this.o):De(et),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(s){return void gn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,t,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wn(this),this.u=!0,this.g.send(e),this.u=!1}catch(s){gn(this,s)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),vn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vn(this,!0)),dn.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?yn(this):this.bb())},e.bb=function(){yn(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ne(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=In.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,r){Ke(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=Bn(this,null,this.W),kn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new it(this,this.j,e);let s=this.o;if(this.S&&(s?(s=M(s),F(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=xn(this,i,t),n=xt(this.I),Mt(n,"RID",e),Mt(n,"CVER",22),this.D&&Mt(n,"X-HTTP-Session-Id",this.D),Nn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ln(s)))+"&"+t:this.m&&hn(n,this.m,s)),Tt(this.h,i),this.Ua&&Mt(n,"TYPE","init"),this.P?(Mt(n,"$req",t),Mt(n,"SID","null"),i.T=!0,ct(i,n,null)):ct(i,n,t),this.G=2}}else 3==this.G&&(e?On(this,e):0==this.i.length||_t(this.h)||On(this))},e.Fa=function(){if(this.u=null,Mn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ge(T(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),Cn(this),Mn(this))},e.Za=function(){null!=this.C&&(this.C=null,Cn(this),Dn(this),Ke(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=qn.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},Kn.prototype.g=function(e,t){return new Hn(e,t)},C(Hn,be),Hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Hn.prototype.close=function(){Sn(this.g)},Hn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=Oe(e),e=n);t.i.push(new vt(t.Ya++,e)),3==t.G&&kn(t)},Hn.prototype.N=function(){this.g.l=null,delete this.j,Sn(this.g),delete this.g,Hn.aa.N.call(this)},C(Gn,Ue),C(Wn,Fe),C(Qn,qn),Qn.prototype.ua=function(){Ee(this.g,"a")},Qn.prototype.ta=function(e){Ee(this.g,new Gn(e))},Qn.prototype.sa=function(e){Ee(this.g,new Wn)},Qn.prototype.ra=function(){Ee(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,Hn.prototype.send=Hn.prototype.o,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,w=b.createWebChannelTransport=function(){return new Kn},v=b.getStatEventTarget=function(){return $e()},y=b.Event=Ve,m=b.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},tt.NO_ERROR=0,tt.TIMEOUT=8,tt.HTTP_ERROR=6,g=b.ErrorCode=tt,nt.COMPLETE="complete",p=b.EventType=nt,Le.EventType=Me,Me.OPEN="a",Me.CLOSE="b",Me.ERROR="c",Me.MESSAGE="d",be.prototype.listen=be.prototype.K,f=b.WebChannel=Le,d=b.FetchXmlHttpFactory=sn,dn.prototype.listenOnce=dn.prototype.L,dn.prototype.getLastError=dn.prototype.Ka,dn.prototype.getLastErrorCode=dn.prototype.Ba,dn.prototype.getStatus=dn.prototype.Z,dn.prototype.getResponseJson=dn.prototype.Oa,dn.prototype.getResponseText=dn.prototype.oa,dn.prototype.send=dn.prototype.ea,dn.prototype.setWithCredentials=dn.prototype.Ha,h=b.XhrIo=dn}).apply("undefined"!==typeof _?_:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const E="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class T{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}T.UNAUTHENTICATED=new T(null),T.GOOGLE_CREDENTIALS=new T("google-credentials-uid"),T.FIRST_PARTY=new T("first-party-uid"),T.MOCK_USER=new T("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
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
let I="10.12.5";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const S=new a.Vy("@firebase/firestore");function C(){return S.logLevel}function A(e,...t){if(S.logLevel<=a.$b.DEBUG){const n=t.map(O);S.debug(`Firestore (${I}): ${e}`,...n)}}function k(e,...t){if(S.logLevel<=a.$b.ERROR){const n=t.map(O);S.error(`Firestore (${I}): ${e}`,...n)}}function R(e,...t){if(S.logLevel<=a.$b.WARN){const n=t.map(O);S.warn(`Firestore (${I}): ${e}`,...n)}}function O(e){if("string"==typeof e)return e;try{
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
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function N(e="Unexpected state"){const t=`FIRESTORE (${I}) INTERNAL ASSERTION FAILED: `+e;throw k(t),new Error(t)}function x(e,t){e||N()}function P(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends c.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class M{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(T.UNAUTHENTICATED)))}shutdown(){}}class V{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class j{constructor(e){this.t=e,this.currentUser=T.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new M;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new M,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new M)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(x("string"==typeof t.accessToken),new U(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return x(null===e||"string"==typeof e),new T(e)}}class ${constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=T.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class B{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new $(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(T.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class z{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,A("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(x("string"==typeof e.token),this.R=e.token,new z(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function K(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class H{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=K(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function G(e,t){return e<t?-1:e>t?1:0}function W(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
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
class Q{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q.fromMillis(Date.now())}static fromDate(e){return Q.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Q(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Q(0,0))}static max(){return new X(new Q(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Y{constructor(e,t,n){void 0===t?t=0:t>e.length&&N(),void 0===n?n=e.length-t:n>e.length-t&&N(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Y.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Y?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends Y{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new L(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const Z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends Y{construct(e,t,n){return new ee(e,t,n)}static isValidIdentifier(e){return Z.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ee(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new L(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new L(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new L(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new L(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ee(t)}static emptyPath(){return new ee([])}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(J.fromString(e))}static fromName(e){return new te(J.fromString(e).popFirst(5))}static empty(){return new te(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===J.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new J(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class ne{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ne.UNKNOWN_ID=-1;function re(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=X.fromTimestamp(1e9===r?new Q(n+1,0):new Q(n,r));return new se(i,te.empty(),t)}function ie(e){return new se(e.readTime,e.key,-1)}class se{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new se(X.min(),te.empty(),-1)}static max(){return new se(X.max(),te.empty(),-1)}}function oe(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=te.comparator(e.documentKey,t.documentKey),0!==n?n:G(e.largestBatchId,t.largestBatchId)
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
 */)}const ae="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ce{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function ue(e){if(e.code!==D.FAILED_PRECONDITION||e.message!==ae)throw e;A("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class le{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&N(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new le(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof le?t:le.resolve(t)}catch(e){return le.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):le.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):le.reject(t)}static resolve(e){return new le(((t,n)=>{t(e)}))}static reject(e){return new le(((t,n)=>{n(e)}))}static waitFor(e){return new le(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=le.resolve(!1);for(const n of e)t=t.next((e=>e?le.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new le(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new le(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function he(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function de(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
class fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function pe(e){return null==e}function ge(e){return 0===e&&1/e==-1/0}function me(e){return"number"==typeof e&&Number.isInteger(e)&&!ge(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */fe.oe=-1;const ye=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ve=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],we=ve,_e=[...we,"indexConfiguration","indexState","indexEntries"];
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
 * Copyright 2017 Google LLC
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
function be(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ee(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Te(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ie{constructor(e,t){this.comparator=e,this.root=t||Ce.EMPTY}insert(e,t){return new Ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Se(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Se(this.root,e,this.comparator,!1)}getReverseIterator(){return new Se(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Se(this.root,e,this.comparator,!0)}}class Se{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ce{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ce.RED,this.left=null!=r?r:Ce.EMPTY,this.right=null!=i?i:Ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ce(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ce.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw N();if(this.right.isRed())throw N();const e=this.left.check();if(e!==this.right.check())throw N();return e+(this.isRed()?0:1)}}Ce.EMPTY=null,Ce.RED=!0,Ce.BLACK=!1,Ce.EMPTY=new class{constructor(){this.size=0}get key(){throw N()}get value(){throw N()}get color(){throw N()}get left(){throw N()}get right(){throw N()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
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
class Ae{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ke(this.data.getIterator())}getIteratorFrom(e){return new ke(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Ae))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class ke{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Re{constructor(e){this.fields=e,e.sort(ee.comparator)}static empty(){return new Re([])}unionWith(e){let t=new Ae(ee.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Re(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return W(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Oe extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Oe("Invalid base64 string: "+e):e}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const xe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pe(e){if(x(!!e),"string"==typeof e){let t=0;const n=xe.exec(e);if(x(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:De(e.seconds),nanos:De(e.nanos)}}function De(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Le(e){return"string"==typeof e?Ne.fromBase64String(e):Ne.fromUint8Array(e)}
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
 */function Me(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ue(e){const t=e.mapValue.fields.__previous_value__;return Me(t)?Ue(t):t}function Fe(e){const t=Pe(e.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ve{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class je{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new je("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof je&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const $e={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Be(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Me(e)?4:tt(e)?9007199254740991:10:N()}function ze(e,t){if(e===t)return!0;const n=Be(e);if(n!==Be(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Fe(e).isEqual(Fe(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Pe(e.timestampValue),r=Pe(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Le(e.bytesValue).isEqual(Le(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return De(e.geoPointValue.latitude)===De(t.geoPointValue.latitude)&&De(e.geoPointValue.longitude)===De(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return De(e.integerValue)===De(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=De(e.doubleValue),r=De(t.doubleValue);return n===r?ge(n)===ge(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return W(e.arrayValue.values||[],t.arrayValue.values||[],ze);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(be(n)!==be(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ze(n[i],r[i])))return!1;return!0}(e,t);default:return N()}}function qe(e,t){return void 0!==(e.values||[]).find((e=>ze(e,t)))}function Ke(e,t){if(e===t)return 0;const n=Be(e),r=Be(t);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=De(e.integerValue||e.doubleValue),r=De(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return He(e.timestampValue,t.timestampValue);case 4:return He(Fe(e),Fe(t));case 5:return G(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Le(e),r=Le(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=G(n[i],r[i]);if(0!==e)return e}return G(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=G(De(e.latitude),De(t.latitude));return 0!==n?n:G(De(e.longitude),De(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Ke(n[i],r[i]);if(e)return e}return G(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===$e.mapValue&&t===$e.mapValue)return 0;if(e===$e.mapValue)return 1;if(t===$e.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=G(r[o],s[o]);if(0!==e)return e;const t=Ke(n[r[o]],i[s[o]]);if(0!==t)return t}return G(r.length,s.length)}(e.mapValue,t.mapValue);default:throw N()}}function He(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return G(e,t);const n=Pe(e),r=Pe(t),i=G(n.seconds,r.seconds);return 0!==i?i:G(n.nanos,r.nanos)}function Ge(e){return We(e)}function We(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Pe(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Le(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return te.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=We(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${We(e.fields[i])}`;return n+"}"}(e.mapValue):N()}function Qe(e){return!!e&&"integerValue"in e}function Xe(e){return!!e&&"arrayValue"in e}function Ye(e){return!!e&&"nullValue"in e}function Je(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ze(e){return!!e&&"mapValue"in e}function et(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ee(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=et(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=et(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
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
class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ze(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=et(t)}setAll(e){let t=ee.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=et(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ze(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ze(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ee(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new nt(et(this.value))}}function rt(e){const t=[];return Ee(e.fields,((e,n)=>{const r=new ee([e]);if(Ze(n)){const e=rt(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Re(t)
/**
 * @license
 * Copyright 2017 Google LLC
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
 */}class it{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new it(e,0,X.min(),X.min(),X.min(),nt.empty(),0)}static newFoundDocument(e,t,n,r){return new it(e,1,t,X.min(),n,r,0)}static newNoDocument(e,t){return new it(e,2,t,X.min(),X.min(),nt.empty(),0)}static newUnknownDocument(e,t){return new it(e,3,t,X.min(),X.min(),nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class st{constructor(e,t){this.position=e,this.inclusive=t}}function ot(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?te.comparator(te.fromName(o.referenceValue),n.key):Ke(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function at(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ze(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ct{constructor(e,t="asc"){this.field=e,this.dir=t}}function ut(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class lt{}class ht extends lt{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new wt(e,t,n):"array-contains"===t?new Tt(e,n):"in"===t?new It(e,n):"not-in"===t?new St(e,n):"array-contains-any"===t?new Ct(e,n):new ht(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new _t(e,n):new bt(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ke(t,this.value)):null!==t&&Be(this.value)===Be(t)&&this.matchesComparison(Ke(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return N()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dt extends lt{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new dt(e,t)}matches(e){return ft(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ft(e){return"and"===e.op}function pt(e){return gt(e)&&ft(e)}function gt(e){for(const t of e.filters)if(t instanceof dt)return!1;return!0}function mt(e){if(e instanceof ht)return e.field.canonicalString()+e.op.toString()+Ge(e.value);if(pt(e))return e.filters.map((e=>mt(e))).join(",");{const t=e.filters.map((e=>mt(e))).join(",");return`${e.op}(${t})`}}function yt(e,t){return e instanceof ht?function(e,t){return t instanceof ht&&e.op===t.op&&e.field.isEqual(t.field)&&ze(e.value,t.value)}(e,t):e instanceof dt?function(e,t){return t instanceof dt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&yt(n,t.filters[r])),!0)}(e,t):void N()}function vt(e){return e instanceof ht?function(e){return`${e.field.canonicalString()} ${e.op} ${Ge(e.value)}`}(e):e instanceof dt?function(e){return e.op.toString()+" {"+e.getFilters().map(vt).join(" ,")+"}"}(e):"Filter"}class wt extends ht{constructor(e,t,n){super(e,t,n),this.key=te.fromName(n.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}class _t extends ht{constructor(e,t){super(e,"in",t),this.keys=Et("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class bt extends ht{constructor(e,t){super(e,"not-in",t),this.keys=Et("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Et(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>te.fromName(e.referenceValue)))}class Tt extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xe(t)&&qe(t.arrayValue,this.value)}}class It extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&qe(this.value.arrayValue,t)}}class St extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!qe(this.value.arrayValue,t)}}class Ct extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xe(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>qe(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class At{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function kt(e,t=null,n=[],r=[],i=null,s=null,o=null){return new At(e,t,n,r,i,s,o)}function Rt(e){const t=P(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>mt(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),pe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ge(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ge(e))).join(",")),t.ue=e}return t.ue}function Ot(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ut(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!yt(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!at(e.startAt,t.startAt)&&at(e.endAt,t.endAt)}function Nt(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
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
class xt{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pt(e,t,n,r,i,s,o,a){return new xt(e,t,n,r,i,s,o,a)}function Dt(e){return new xt(e)}function Lt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Mt(e){return null!==e.collectionGroup}function Ut(e){const t=P(e);if(null===t.ce){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Ae(ee.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new ct(r,n))})),e.has(ee.keyField().canonicalString())||t.ce.push(new ct(ee.keyField(),n))}return t.ce}function Ft(e){const t=P(e);return t.le||(t.le=Vt(t,Ut(e))),t.le}function Vt(e,t){if("F"===e.limitType)return kt(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new ct(e.field,t)}));const n=e.endAt?new st(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new st(e.startAt.position,e.startAt.inclusive):null;return kt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function jt(e,t,n){return new xt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $t(e,t){return Ot(Ft(e),Ft(t))&&e.limitType===t.limitType}function Bt(e){return`${Rt(Ft(e))}|lt:${e.limitType}`}function zt(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>vt(e))).join(", ")}]`),pe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ge(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ge(e))).join(",")),`Target(${t})`}(Ft(e))}; limitType=${e.limitType})`}function qt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):te.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ut(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=ot(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ut(e),t))&&!(e.endAt&&!function(e,t,n){const r=ot(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ut(e),t))}(e,t)}function Kt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ht(e){return(t,n)=>{let r=!1;for(const i of Ut(e)){const e=Gt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Gt(e,t,n){const r=e.field.isKeyField()?te.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Ke(r,i):N()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return N()}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Wt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ee(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Te(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Qt=new Ie(te.comparator);function Xt(){return Qt}const Yt=new Ie(te.comparator);function Jt(...e){let t=Yt;for(const n of e)t=t.insert(n.key,n);return t}function Zt(e){let t=Yt;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function en(){return nn()}function tn(){return nn()}function nn(){return new Wt((e=>e.toString()),((e,t)=>e.isEqual(t)))}const rn=new Ie(te.comparator),sn=new Ae(te.comparator);function on(...e){let t=sn;for(const n of e)t=t.add(n);return t}const an=new Ae(G);function cn(){return an}
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
 */function un(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ge(t)?"-0":t}}function ln(e){return{integerValue:""+e}}function hn(e,t){return me(t)?ln(t):un(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class dn{constructor(){this._=void 0}}function fn(e,t,n){return e instanceof mn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Me(t)&&(t=Ue(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof yn?vn(e,t):e instanceof wn?_n(e,t):function(e,t){const n=gn(e,t),r=En(n)+En(e.Pe);return Qe(n)&&Qe(e.Pe)?ln(r):un(e.serializer,r)}(e,t)}function pn(e,t,n){return e instanceof yn?vn(e,t):e instanceof wn?_n(e,t):n}function gn(e,t){return e instanceof bn?function(e){return Qe(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class mn extends dn{}class yn extends dn{constructor(e){super(),this.elements=e}}function vn(e,t){const n=Tn(t);for(const r of e.elements)n.some((e=>ze(e,r)))||n.push(r);return{arrayValue:{values:n}}}class wn extends dn{constructor(e){super(),this.elements=e}}function _n(e,t){let n=Tn(t);for(const r of e.elements)n=n.filter((e=>!ze(e,r)));return{arrayValue:{values:n}}}class bn extends dn{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function En(e){return De(e.integerValue||e.doubleValue)}function Tn(e){return Xe(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function In(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof yn&&t instanceof yn||e instanceof wn&&t instanceof wn?W(e.elements,t.elements,ze):e instanceof bn&&t instanceof bn?ze(e.Pe,t.Pe):e instanceof mn&&t instanceof mn}(e.transform,t.transform)}class Sn{constructor(e,t){this.version=e,this.transformResults=t}}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function An(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class kn{}function Rn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Vn(e.key,Cn.none()):new Dn(e.key,e.data,Cn.none());{const n=e.data,r=nt.empty();let i=new Ae(ee.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Ln(e.key,r,new Re(i.toArray()),Cn.none())}}function On(e,t,n){e instanceof Dn?function(e,t,n){const r=e.value.clone(),i=Un(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ln?function(e,t,n){if(!An(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Un(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Mn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Nn(e,t,n,r){return e instanceof Dn?function(e,t,n,r){if(!An(e.precondition,t))return n;const i=e.value.clone(),s=Fn(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ln?function(e,t,n,r){if(!An(e.precondition,t))return n;const i=Fn(e.fieldTransforms,r,t),s=t.data;return s.setAll(Mn(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return An(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function xn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=gn(r.transform,e||null);null!=i&&(null===n&&(n=nt.empty()),n.set(r.field,i))}return n||null}function Pn(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&W(e,t,((e,t)=>In(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Dn extends kn{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ln extends kn{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mn(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Un(e,t,n){const r=new Map;x(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,pn(o,a,n[i]))}return r}function Fn(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,fn(e,s,t))}return r}class Vn extends kn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jn extends kn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $n{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&On(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Nn(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Nn(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=tn();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Rn(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(X.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),on())}isEqual(e){return this.batchId===e.batchId&&W(this.mutations,e.mutations,((e,t)=>Pn(e,t)))&&W(this.baseMutations,e.baseMutations,((e,t)=>Pn(e,t)))}}class Bn{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){x(e.mutations.length===n.length);let r=function(){return rn}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Bn(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class zn{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 * Copyright 2017 Google LLC
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
class qn{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Kn,Hn;function Gn(e){switch(e){default:return N();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Wn(e){if(void 0===e)return k("GRPC error has no .code"),D.UNKNOWN;switch(e){case Kn.OK:return D.OK;case Kn.CANCELLED:return D.CANCELLED;case Kn.UNKNOWN:return D.UNKNOWN;case Kn.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Kn.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Kn.INTERNAL:return D.INTERNAL;case Kn.UNAVAILABLE:return D.UNAVAILABLE;case Kn.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Kn.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Kn.NOT_FOUND:return D.NOT_FOUND;case Kn.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Kn.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Kn.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Kn.ABORTED:return D.ABORTED;case Kn.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Kn.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Kn.DATA_LOSS:return D.DATA_LOSS;default:return N()}}(Hn=Kn||(Kn={}))[Hn.OK=0]="OK",Hn[Hn.CANCELLED=1]="CANCELLED",Hn[Hn.UNKNOWN=2]="UNKNOWN",Hn[Hn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Hn[Hn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Hn[Hn.NOT_FOUND=5]="NOT_FOUND",Hn[Hn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Hn[Hn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Hn[Hn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Hn[Hn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Hn[Hn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Hn[Hn.ABORTED=10]="ABORTED",Hn[Hn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Hn[Hn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Hn[Hn.INTERNAL=13]="INTERNAL",Hn[Hn.UNAVAILABLE=14]="UNAVAILABLE",Hn[Hn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
let Qn=null;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Xn(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Yn=new r([4294967295,4294967295],0);function Jn(e){const t=Xn().encode(e),n=new i;return n.update(t),new Uint8Array(n.digest())}function Zn(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class er{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tr(`Invalid padding: ${t}`);if(n<0)throw new tr(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new tr(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new tr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=r.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(r.fromNumber(n)));return 1===i.compare(Yn)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=Jn(e),[n,r]=Zn(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new er(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=Jn(e),[n,r]=Zn(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nr{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,rr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nr(X.min(),r,new Ie(G),Xt(),on())}}class rr{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new rr(n,t,on(),on(),on())}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ir{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class sr{constructor(e,t){this.targetId=e,this.me=t}}class or{constructor(e,t,n=Ne.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ar{constructor(){this.fe=0,this.ge=lr(),this.pe=Ne.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=on(),t=on(),n=on();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:N()}})),new rr(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=lr()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,x(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cr{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xt(),this.qe=ur(),this.Qe=new Ie(G)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:N()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(Nt(i))if(0===n){const e=new te(i.path);this.Ue(t,e,it.newNoDocument(e,X.min()))}else x(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==Qn||Qn.et(function(e,t,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(r,e.me,this.Le.tt(),n,i))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Le(n).toUint8Array()}catch(e){if(e instanceof Oe)return R("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new er(s,r,i)}catch(e){return R(e instanceof tr?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Ie?null:o}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&Nt(i.target)){const t=new te(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,it.newNoDocument(t,e))}n.be&&(t.set(r,n.Ce()),n.ve())}}));let n=on();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new nr(e,t,this.Qe,this.ke,n);return this.ke=Xt(),this.qe=ur(),this.Qe=new Ie(G),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ar,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ae(G),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||A("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ar),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ur(){return new Ie(te.comparator)}function lr(){return new Ie(te.comparator)}const hr=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),dr=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),fr=(()=>{const e={and:"AND",or:"OR"};return e})();class pr{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gr(e,t){return e.useProto3Json||pe(t)?t:{value:t}}function mr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yr(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function vr(e,t){return mr(e,t.toTimestamp())}function wr(e){return x(!!e),X.fromTimestamp(function(e){const t=Pe(e);return new Q(t.seconds,t.nanos)}(e))}function _r(e,t){return br(e,t).canonicalString()}function br(e,t){const n=function(e){return new J(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Er(e){const t=J.fromString(e);return x(Kr(t)),t}function Tr(e,t){return _r(e.databaseId,t.path)}function Ir(e,t){const n=Er(t);if(n.get(1)!==e.databaseId.projectId)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new te(kr(n))}function Sr(e,t){return _r(e.databaseId,t)}function Cr(e){const t=Er(e);return 4===t.length?J.emptyPath():kr(t)}function Ar(e){return new J(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function kr(e){return x(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Rr(e,t,n){return{name:Tr(e,t),fields:n.value.mapValue.fields}}function Or(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:N()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(x(void 0===t||"string"==typeof t),Ne.fromBase64String(t||"")):(x(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Ne.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?D.UNKNOWN:Wn(e.code);return new L(t,e.message||"")}(o);n=new or(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ir(e,r.document.name),s=wr(r.document.updateTime),o=r.document.createTime?wr(r.document.createTime):X.min(),a=new nt({mapValue:{fields:r.document.fields}}),c=it.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ir(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ir(e,r.document),s=r.readTime?wr(r.readTime):X.min(),o=it.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ir([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ir(e,r.document),s=r.removedTargetIds||[];n=new ir([],s,i,null)}else{if(!("filter"in t))return N();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new qn(r,i),o=e.targetId;n=new sr(o,s)}}return n}function Nr(e,t){let n;if(t instanceof Dn)n={update:Rr(e,t.key,t.value)};else if(t instanceof Vn)n={delete:Tr(e,t.key)};else if(t instanceof Ln)n={update:Rr(e,t.key,t.data),updateMask:qr(t.fieldMask)};else{if(!(t instanceof jn))return N();n={verify:Tr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof mn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof bn)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw N()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:vr(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:N()}(e,t.precondition)),n}function xr(e,t){return e&&e.length>0?(x(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?wr(e.updateTime):wr(t);return n.isEqual(X.min())&&(n=wr(t)),new Sn(n,e.transformResults||[])}(e,t)))):[]}function Pr(e,t){return{documents:[Sr(e,t.path)]}}function Dr(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Sr(e,i);const s=function(e){if(0!==e.length)return zr(dt.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:$r(e.field),direction:Fr(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=gr(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i}}function Lr(e){let t=Cr(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){x(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Ur(e);return t instanceof dt&&pt(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new ct(Br(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,pe(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new st(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new st(n,t)}(n.endAt)),Pt(t,i,o,s,a,"F",c,u)}function Mr(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return N()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ur(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Br(e.unaryFilter.field);return ht.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Br(e.unaryFilter.field);return ht.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Br(e.unaryFilter.field);return ht.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Br(e.unaryFilter.field);return ht.create(i,"!=",{nullValue:"NULL_VALUE"});default:return N()}}(e):void 0!==e.fieldFilter?function(e){return ht.create(Br(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return N()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return dt.create(e.compositeFilter.filters.map((e=>Ur(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return N()}}(e.compositeFilter.op))}(e):N()}function Fr(e){return hr[e]}function Vr(e){return dr[e]}function jr(e){return fr[e]}function $r(e){return{fieldPath:e.canonicalString()}}function Br(e){return ee.fromServerFormat(e.fieldPath)}function zr(e){return e instanceof ht?function(e){if("=="===e.op){if(Je(e.value))return{unaryFilter:{field:$r(e.field),op:"IS_NAN"}};if(Ye(e.value))return{unaryFilter:{field:$r(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Je(e.value))return{unaryFilter:{field:$r(e.field),op:"IS_NOT_NAN"}};if(Ye(e.value))return{unaryFilter:{field:$r(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(e.field),op:Vr(e.op),value:e.value}}}(e):e instanceof dt?function(e){const t=e.getFilters().map((e=>zr(e)));return 1===t.length?t[0]:{compositeFilter:{op:jr(e.op),filters:t}}}(e):N()}function qr(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Kr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hr{constructor(e,t,n,r,i=X.min(),s=X.min(),o=Ne.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gr{constructor(e){this.ct=e}}function Wr(e){const t=Lr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?jt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Qr{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(De(e.integerValue));else if("doubleValue"in e){const n=De(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ge(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),"string"==typeof n&&(n=Pe(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Le(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?tt(e)?this.dt(t,Number.MAX_SAFE_INTEGER):(this.wt(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.St(e.arrayValue,t),this.ft(t)):N()}Vt(e,t){this.dt(t,25),this.bt(e,t)}bt(e,t){t.Rt(e)}wt(e,t){const n=e.fields||{};this.dt(t,55);for(const r of Object.keys(n))this.Vt(r,t),this.Tt(n[r],t)}St(e,t){const n=e.values||[];this.dt(t,50);for(const r of n)this.Tt(r,t)}yt(e,t){this.dt(t,37),te.fromName(e).path.forEach((e=>{this.dt(t,60),this.bt(e,t)}))}dt(e,t){e.At(t)}ft(e){e.At(2)}}Qr.Dt=new Qr;
/**
 * @license
 * Copyright 2019 Google LLC
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
class Xr{constructor(){this.an=new Yr}addToCollectionParentIndex(e,t){return this.an.add(t),le.resolve()}getCollectionParents(e,t){return le.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return le.resolve()}deleteFieldIndex(e,t){return le.resolve()}deleteAllFieldIndexes(e){return le.resolve()}createTargetIndexes(e,t){return le.resolve()}getDocumentsMatchingTarget(e,t){return le.resolve(null)}getIndexType(e,t){return le.resolve(0)}getFieldIndexes(e,t){return le.resolve([])}getNextCollectionGroupToUpdate(e){return le.resolve(null)}getMinOffset(e,t){return le.resolve(se.min())}getMinOffsetFromCollectionGroup(e,t){return le.resolve(se.min())}updateCollectionGroup(e,t,n){return le.resolve()}updateIndexEntries(e,t){return le.resolve()}}class Yr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ae(J.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ae(J.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */new Uint8Array(0);class Jr{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Jr(e,Jr.DEFAULT_COLLECTION_PERCENTILE,Jr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 * Copyright 2017 Google LLC
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
 */Jr.DEFAULT_COLLECTION_PERCENTILE=10,Jr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jr.DEFAULT=new Jr(41943040,Jr.DEFAULT_COLLECTION_PERCENTILE,Jr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jr.DISABLED=new Jr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
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
class Zr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Zr(0)}static Bn(){return new Zr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 * Copyright 2017 Google LLC
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
class ei{constructor(){this.changes=new Wt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?le.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 * Copyright 2017 Google LLC
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
 * Copyright 2022 Google LLC
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
class ti{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ni{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Nn(n.mutation,e,Re.empty(),Q.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,on()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=on()){const r=en();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Jt();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=en();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,on())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Xt();const s=nn(),o=function(){return nn()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Ln)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Nn(o.mutation,t,o.mutation.getFieldMask(),Q.now())):s.set(t.key,Re.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new ti(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=nn();let r=new Ie(((e,t)=>e-t)),i=on();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Re.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||on()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=tn();c.forEach((e=>{if(!i.has(e)){const r=Rn(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return le.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return te.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):le.resolve(en());let o=-1,a=i;return s.next((t=>le.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?le.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,on()))).next((e=>({batchId:o,changes:Zt(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new te(t)).next((e=>{let t=Jt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Jt();return this.indexManager.getCollectionParents(e,i).next((o=>le.forEach(o,(o=>{const a=function(e,t){return new xt(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,it.newInvalidDocument(r)))}));let n=Jt();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Nn(s.mutation,r,Re.empty(),Q.now()),qt(t,r)&&(n=n.insert(e,r))})),n}))}}
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
 */class ri{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return le.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:wr(e.createTime)}}(t)),le.resolve()}getNamedQuery(e,t){return le.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(e){return{name:e.name,query:Wr(e.bundledQuery),readTime:wr(e.readTime)}}(t)),le.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ii{constructor(){this.overlays=new Ie(te.comparator),this.Pr=new Map}getOverlay(e,t){return le.resolve(this.overlays.get(t))}getOverlays(e,t){const n=en();return le.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),le.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Pr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Pr.delete(n)),le.resolve()}getOverlaysForCollection(e,t,n){const r=en(),i=t.length+1,s=new te(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return le.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ie(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=en(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=en(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return le.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new zn(t,n));let i=this.Pr.get(t);void 0===i&&(i=on(),this.Pr.set(t,i)),this.Pr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class si{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return le.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,le.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oi{constructor(){this.Ir=new Ae(ai.Tr),this.Er=new Ae(ai.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const n=new ai(e,t);this.Ir=this.Ir.add(n),this.Er=this.Er.add(n)}Ar(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Rr(new ai(e,t))}Vr(e,t){e.forEach((e=>this.removeReference(e,t)))}mr(e){const t=new te(new J([])),n=new ai(t,e),r=new ai(t,e+1),i=[];return this.Er.forEachInRange([n,r],(e=>{this.Rr(e),i.push(e.key)})),i}gr(){this.Ir.forEach((e=>this.Rr(e)))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const t=new te(new J([])),n=new ai(t,e),r=new ai(t,e+1);let i=on();return this.Er.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new ai(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ai{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return te.comparator(e.key,t.key)||G(e.yr,t.yr)}static dr(e,t){return G(e.yr,t.yr)||te.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ci{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new Ae(ai.Tr)}checkEmpty(e){return le.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new $n(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Sr=this.Sr.add(new ai(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return le.resolve(s)}lookupMutationBatch(e,t){return le.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Dr(n),i=r<0?0:r;return le.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return le.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return le.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ai(t,0),r=new ai(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([n,r],(e=>{const t=this.br(e.yr);i.push(t)})),le.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ae(G);return t.forEach((e=>{const t=new ai(e,0),r=new ai(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,r],(e=>{n=n.add(e.yr)}))})),le.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;te.isDocumentKey(i)||(i=i.child(""));const s=new ai(new te(i),0);let o=new Ae(G);return this.Sr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.yr)),!0)}),s),le.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach((e=>{const n=this.br(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){x(0===this.vr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Sr;return le.forEach(t.mutations,(r=>{const i=new ai(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Sr=n}))}xn(e){}containsKey(e,t){const n=new ai(t,0),r=this.Sr.firstAfterOrEqual(n);return le.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,le.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ui{constructor(e){this.Fr=e,this.docs=function(){return new Ie(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return le.resolve(n?n.document.mutableCopy():it.newInvalidDocument(t))}getEntries(e,t){let n=Xt();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():it.newInvalidDocument(e))})),le.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Xt();const s=t.path,o=new te(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||oe(ie(o),n)<=0||(r.has(o.key)||qt(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return le.resolve(i)}getAllFromCollectionGroup(e,t,n,r){N()}Mr(e,t){return le.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new li(this)}getSize(e){return le.resolve(this.size)}}class li extends ei{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ur.addEntry(e,r)):this.ur.removeEntry(n)})),le.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hi{constructor(e){this.persistence=e,this.Or=new Wt((e=>Rt(e)),Ot),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new oi,this.targetCount=0,this.Br=Zr.Ln()}forEachTarget(e,t){return this.Or.forEach(((e,n)=>t(n))),le.resolve()}getLastRemoteSnapshotVersion(e){return le.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return le.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),le.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),le.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new Zr(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,le.resolve()}updateTargetData(e,t){return this.Qn(t),le.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,le.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Or.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),le.waitFor(i).next((()=>r))}getTargetCount(e){return le.resolve(this.targetCount)}getTargetData(e,t){const n=this.Or.get(t)||null;return le.resolve(n)}addMatchingKeys(e,t,n){return this.Lr.Ar(t,n),le.resolve()}removeMatchingKeys(e,t,n){this.Lr.Vr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),le.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),le.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Lr.pr(t);return le.resolve(n)}containsKey(e,t){return le.resolve(this.Lr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class di{constructor(e,t){this.kr={},this.overlays={},this.qr=new fe(0),this.Qr=!1,this.Qr=!0,this.Kr=new si,this.referenceDelegate=e(this),this.$r=new hi(this),this.indexManager=new Xr,this.remoteDocumentCache=function(e){return new ui(e)}((e=>this.referenceDelegate.Ur(e))),this.serializer=new Gr(t),this.Wr=new ri(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ii,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new ci(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,n){A("MemoryPersistence","Starting transaction:",e);const r=new fi(this.qr.next());return this.referenceDelegate.Gr(),n(r).next((e=>this.referenceDelegate.zr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}jr(e,t){return le.or(Object.values(this.kr).map((n=>()=>n.containsKey(e,t))))}}class fi extends ce{constructor(e){super(),this.currentSequenceNumber=e}}class pi{constructor(e){this.persistence=e,this.Hr=new oi,this.Jr=null}static Yr(e){return new pi(e)}get Zr(){if(this.Jr)return this.Jr;throw N()}addReference(e,t,n){return this.Hr.addReference(n,t),this.Zr.delete(n.toString()),le.resolve()}removeReference(e,t,n){return this.Hr.removeReference(n,t),this.Zr.add(n.toString()),le.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),le.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach((e=>this.Zr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Zr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Gr(){this.Jr=new Set}zr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return le.forEach(this.Zr,(n=>{const r=te.fromPath(n);return this.Xr(e,r).next((e=>{e||t.removeEntry(r,X.min())}))})).next((()=>(this.Jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Xr(e,t).next((e=>{e?this.Zr.delete(t.toString()):this.Zr.add(t.toString())}))}Ur(e){return 0}Xr(e,t){return le.or([()=>le.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
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
class gi{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ki=n,this.$i=r}static Ui(e,t){let n=on(),r=on();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new gi(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class mi{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class yi{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return(0,c.nr)()?8:he((0,c.ZQ)())>0?6:4}()}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Ji(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Yi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new mi;return this.Zi(e,t,n).next((r=>{if(i.result=r,this.Gi)return this.Xi(e,t,n,r.size)}))})).next((()=>i.result))}Xi(e,t,n,r){return n.documentReadCount<this.zi?(C()<=a.$b.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",zt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),le.resolve()):(C()<=a.$b.DEBUG&&A("QueryEngine","Query:",zt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ji*r?(C()<=a.$b.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",zt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ft(t))):le.resolve())}Ji(e,t){if(Lt(t))return le.resolve(null);let n=Ft(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=jt(t,null,"F"),n=Ft(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=on(...r);return this.Hi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.es(t,r);return this.ts(t,s,i,n.readTime)?this.Ji(e,jt(t,null,"F")):this.ns(e,s,t,n)}))))})))))}Yi(e,t,n,r){return Lt(t)||r.isEqual(X.min())?le.resolve(null):this.Hi.getDocuments(e,n).next((i=>{const s=this.es(t,i);return this.ts(t,s,n,r)?le.resolve(null):(C()<=a.$b.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zt(t)),this.ns(e,s,t,re(r,-1)).next((e=>e)))}))}es(e,t){let n=new Ae(Ht(e));return t.forEach(((t,r)=>{qt(e,r)&&(n=n.add(r))})),n}ts(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zi(e,t,n){return C()<=a.$b.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",zt(t)),this.Hi.getDocumentsMatchingQuery(e,t,se.min(),n)}ns(e,t,n,r){return this.Hi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class vi{constructor(e,t,n,r){this.persistence=e,this.rs=t,this.serializer=r,this.ss=new Ie(G),this.os=new Wt((e=>Rt(e)),Ot),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(n)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ni(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ss)))}}function wi(e,t,n,r){return new vi(e,t,n,r)}async function _i(e,t){const n=P(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.cs(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=on();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ls:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function bi(e,t){const n=P(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.us.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=le.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);x(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=on();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Ei(e){const t=P(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.$r.getLastRemoteSnapshotVersion(e)))}function Ti(e,t){const n=P(e),r=t.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.$r.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.$r.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(Ne.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.$r.updateTargetData(e,u))}));let a=Xt(),c=on();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Ii(e,s,t.documentUpdates).next((e=>{a=e.hs,c=e.Ps}))),!r.isEqual(X.min())){const t=n.$r.getLastRemoteSnapshotVersion(e).next((t=>n.$r.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return le.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ss=i,e)))}function Ii(e,t,n){let r=on(),i=on();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Xt();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(X.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):A("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{hs:r,Ps:i}}))}function Si(e,t){const n=P(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ci(e,t){const n=P(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.$r.getTargetData(e,t).next((i=>i?(r=i,le.resolve(r)):n.$r.allocateTargetId(e).next((i=>(r=new Hr(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.$r.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ss.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ss=n.ss.insert(e.targetId,e),n.os.set(t,e.targetId)),e}))}async function Ai(e,t,n){const r=P(e),i=r.ss.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!de(e))throw e;A("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ss=r.ss.remove(t),r.os.delete(i.target)}function ki(e,t,n){const r=P(e);let i=X.min(),s=on();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=P(e),i=r.os.get(n);return void 0!==i?le.resolve(r.ss.get(i)):r.$r.getTargetData(t,n)}(r,e,Ft(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.rs.getDocumentsMatchingQuery(e,t,n?i:X.min(),n?s:on()))).next((e=>(Ri(r,Kt(t),e),{documents:e,Is:s})))))}function Ri(e,t,n){let r=e._s.get(t)||X.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e._s.set(t,r)}class Oi{constructor(){this.activeTargetIds=cn()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ni{constructor(){this.io=new Oi,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,n){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Oi,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class xi{oo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Pi{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Di=null;function Li(){return null===Di?Di=function(){return 268435456+Math.round(2147483648*Math.random())}():Di++,"0x"+Di.toString(16)
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
 */}const Mi={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ui{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Fi="WebChannelConnection";class Vi extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.bo=t+"://"+e.host,this.Do=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get vo(){return!1}Fo(e,t,n,r,i){const s=Li(),o=this.Mo(e,t.toUriEncodedString());A("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(a,r,i),this.Oo(e,o,a,n).then((t=>(A("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw R("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}No(e,t,n,r,i,s){return this.Fo(e,t,n,r,i)}xo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+I}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Mo(e,t){const n=Mi[e];return`${this.bo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,n,r){const i=Li();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(p.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case g.NO_ERROR:const t=a.getResponseJson();A(Fi,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case g.TIMEOUT:A(Fi,`RPC '${e}' ${i} timed out`),o(new L(D.DEADLINE_EXCEEDED,"Request time out"));break;case g.HTTP_ERROR:const n=a.getStatus();if(A(Fi,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(t)>=0?t:D.UNKNOWN}(t.status);o(new L(e,t.message))}else o(new L(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(D.UNAVAILABLE,"Connection failed."));break;default:N()}}finally{A(Fi,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);A(Fi,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Lo(e,t,n){const r=Li(),i=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=w(),o=v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new d({})),this.xo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");A(Fi,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,p=!1;const g=new Ui({Po:t=>{p?A(Fi,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(A(Fi,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),A(Fi,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},Io:()=>l.close()}),_=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return _(l,f.EventType.OPEN,(()=>{p||(A(Fi,`RPC '${e}' stream ${r} transport opened.`),g.po())})),_(l,f.EventType.CLOSE,(()=>{p||(p=!0,A(Fi,`RPC '${e}' stream ${r} transport closed`),g.wo())})),_(l,f.EventType.ERROR,(t=>{p||(p=!0,R(Fi,`RPC '${e}' stream ${r} transport errored:`,t),g.wo(new L(D.UNAVAILABLE,"The operation could not be completed")))})),_(l,f.EventType.MESSAGE,(t=>{var n;if(!p){const i=t.data[0];x(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){A(Fi,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Kn[e];if(void 0!==t)return Wn(t)}(t),i=o.message;void 0===n&&(n=D.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),p=!0,g.wo(new L(n,i)),l.close()}else A(Fi,`RPC '${e}' stream ${r} received:`,i),g.So(i)}})),_(o,y.STAT_EVENT,(t=>{t.stat===m.PROXY?A(Fi,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===m.NOPROXY&&A(Fi,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{g.yo()}),0),g}}
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
 */function ji(){return"undefined"!=typeof document?document:null}
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
 */function $i(e){return new pr(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bi{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ai=e,this.timerId=t,this.Bo=n,this.ko=r,this.qo=i,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const t=Math.floor(this.Qo+this.Go()),n=Math.max(0,Date.now()-this.$o),r=Math.max(0,t-n);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,r,(()=>(this.$o=Date.now(),e()))),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){null!==this.Ko&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){null!==this.Ko&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zi{constructor(e,t,n,r,i,s,o,a){this.ai=e,this.jo=n,this.Ho=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Bi(e,t)}t_(){return 1===this.state||5===this.state||this.n_()}n_(){return 2===this.state||3===this.state}start(){this.Xo=0,4!==this.state?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&null===this.Yo&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,(()=>this.o_())))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,4!==e?this.e_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(k(t.toString()),k("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===D.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Jo===t&&this.h_(e,n)}),(t=>{e((()=>{const e=new L(D.UNKNOWN,"Fetching auth token failed: "+t.message);return this.P_(e)}))}))}h_(e,t){const n=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To((()=>{n((()=>this.listener.To()))})),this.stream.Ao((()=>{n((()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,(()=>(this.n_()&&(this.state=3),Promise.resolve()))),this.listener.Ao())))})),this.stream.Vo((e=>{n((()=>this.P_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.Xo?this.T_(e):this.onNext(e)))}))}r_(){this.state=5,this.e_.Wo((async()=>{this.state=0,this.start()}))}P_(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget((()=>this.Jo===e?t():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qi extends zi{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const t=Or(this.serializer,e),n=function(e){if(!("targetChange"in e))return X.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?X.min():t.readTime?wr(t.readTime):X.min()}(e);return this.listener.E_(t,n)}d_(e){const t={};t.database=Ar(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Nt(r)?{documents:Pr(e,r)}:{query:Dr(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=yr(e,t.resumeToken);const r=gr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(X.min())>0){n.readTime=mr(e,t.snapshotVersion.toTimestamp());const r=gr(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=Mr(this.serializer,e);n&&(t.labels=n),this.__(t)}A_(e){const t={};t.database=Ar(this.serializer),t.removeTarget=e,this.__(t)}}class Ki extends zi{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,t){return this.connection.Lo("Write",e,t)}T_(e){return x(!!e.streamToken),this.lastStreamToken=e.streamToken,x(!e.writeResults||0===e.writeResults.length),this.listener.m_()}onNext(e){x(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const t=xr(e.writeResults,e.commitTime),n=wr(e.commitTime);return this.listener.f_(n,t)}g_(){const e={};e.database=Ar(this.serializer),this.__(e)}V_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Nr(this.serializer,e)))};this.__(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hi extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.p_=!1}y_(){if(this.p_)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,n,r){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Fo(e,br(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new L(D.UNKNOWN,e.toString())}))}No(e,t,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.No(e,br(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new L(D.UNKNOWN,e.toString())}))}terminate(){this.p_=!0,this.connection.terminate()}}class Gi{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){0===this.w_&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}F_(e){"Online"===this.state?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,"Online"===e&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(k(t),this.b_=!1):A("OnlineStateTracker",t)}M_(){null!==this.S_&&(this.S_.cancel(),this.S_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Wi{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=i,this.B_.oo((e=>{n.enqueueAndForget((async()=>{rs(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=P(e);t.N_.add(4),await Xi(t),t.k_.set("Unknown"),t.N_.delete(4),await Qi(t)}(this))}))})),this.k_=new Gi(n,r)}}async function Qi(e){if(rs(e))for(const t of e.L_)await t(!0)}async function Xi(e){for(const t of e.L_)await t(!1)}function Yi(e,t){const n=P(e);n.O_.has(t.targetId)||(n.O_.set(t.targetId,t),ns(n)?ts(n):Es(n).n_()&&Zi(n,t))}function Ji(e,t){const n=P(e),r=Es(n);n.O_.delete(t),r.n_()&&es(n,t),0===n.O_.size&&(r.n_()?r.s_():rs(n)&&n.k_.set("Unknown"))}function Zi(e,t){if(e.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Es(e).d_(t)}function es(e,t){e.q_.xe(t),Es(e).A_(t)}function ts(e){e.q_=new cr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.O_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Es(e).start(),e.k_.D_()}function ns(e){return rs(e)&&!Es(e).t_()&&e.O_.size>0}function rs(e){return 0===P(e).N_.size}function is(e){e.q_=void 0}async function ss(e){e.k_.set("Online")}async function os(e){e.O_.forEach(((t,n)=>{Zi(e,t)}))}async function as(e,t){is(e),ns(e)?(e.k_.F_(t),ts(e)):e.k_.set("Unknown")}async function cs(e,t,n){if(e.k_.set("Online"),t instanceof or&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.O_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.O_.delete(r),e.q_.removeTarget(r))}(e,t)}catch(n){A("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await us(e,n)}else if(t instanceof ir?e.q_.Ke(t):t instanceof sr?e.q_.He(t):e.q_.We(t),!n.isEqual(X.min()))try{const t=await Ei(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.O_.get(r);i&&e.O_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.O_.get(t);if(!r)return;e.O_.set(t,r.withResumeToken(Ne.EMPTY_BYTE_STRING,r.snapshotVersion)),es(e,t);const i=new Hr(r.target,t,n,r.sequenceNumber);Zi(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){A("RemoteStore","Failed to raise snapshot:",t),await us(e,t)}}async function us(e,t,n){if(!de(t))throw t;e.N_.add(1),await Xi(e),e.k_.set("Offline"),n||(n=()=>Ei(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),e.N_.delete(1),await Qi(e)}))}function ls(e,t){return t().catch((n=>us(e,n,t)))}async function hs(e){const t=P(e),n=Ts(t);let r=t.x_.length>0?t.x_[t.x_.length-1].batchId:-1;for(;ds(t);)try{const e=await Si(t.localStore,r);if(null===e){0===t.x_.length&&n.s_();break}r=e.batchId,fs(t,e)}catch(e){await us(t,e)}ps(t)&&gs(t)}function ds(e){return rs(e)&&e.x_.length<10}function fs(e,t){e.x_.push(t);const n=Ts(e);n.n_()&&n.R_&&n.V_(t.mutations)}function ps(e){return rs(e)&&!Ts(e).t_()&&e.x_.length>0}function gs(e){Ts(e).start()}async function ms(e){Ts(e).g_()}async function ys(e){const t=Ts(e);for(const n of e.x_)t.V_(n.mutations)}async function vs(e,t,n){const r=e.x_.shift(),i=Bn.from(r,t,n);await ls(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await hs(e)}async function ws(e,t){t&&Ts(e).R_&&await async function(e,t){if(function(e){return Gn(e)&&e!==D.ABORTED}(t.code)){const n=e.x_.shift();Ts(e).i_(),await ls(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await hs(e)}}(e,t),ps(e)&&gs(e)}async function _s(e,t){const n=P(e);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=rs(n);n.N_.add(3),await Xi(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.N_.delete(3),await Qi(n)}async function bs(e,t){const n=P(e);t?(n.N_.delete(2),await Qi(n)):t||(n.N_.add(2),await Xi(n),n.k_.set("Unknown"))}function Es(e){return e.Q_||(e.Q_=function(e,t,n){const r=P(e);return r.y_(),new qi(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(e.datastore,e.asyncQueue,{To:ss.bind(null,e),Ao:os.bind(null,e),Vo:as.bind(null,e),E_:cs.bind(null,e)}),e.L_.push((async t=>{t?(e.Q_.i_(),ns(e)?ts(e):e.k_.set("Unknown")):(await e.Q_.stop(),is(e))}))),e.Q_}function Ts(e){return e.K_||(e.K_=function(e,t,n){const r=P(e);return r.y_(),new Ki(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{To:()=>Promise.resolve(),Ao:ms.bind(null,e),Vo:ws.bind(null,e),m_:ys.bind(null,e),f_:vs.bind(null,e)}),e.L_.push((async t=>{t?(e.K_.i_(),await hs(e)):(await e.K_.stop(),e.x_.length>0&&(A("RemoteStore",`Stopping write stream with ${e.x_.length} pending writes`),e.x_=[]))}))),e.K_
/**
 * @license
 * Copyright 2017 Google LLC
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
 */}class Is{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Is(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ss(e,t){if(k("AsyncQueue",`${t}: ${e}`),de(e))return new L(D.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Cs{constructor(e){this.comparator=e?(t,n)=>e(t,n)||te.comparator(t.key,n.key):(e,t)=>te.comparator(e.key,t.key),this.keyedMap=Jt(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Cs(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cs))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Cs;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class As{constructor(){this.U_=new Ie(te.comparator)}track(e){const t=e.doc.key,n=this.U_.get(t);n?0!==e.type&&3===n.type?this.U_=this.U_.insert(t,e):3===e.type&&1!==n.type?this.U_=this.U_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.U_=this.U_.remove(t):1===e.type&&2===n.type?this.U_=this.U_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):N():this.U_=this.U_.insert(t,e)}W_(){const e=[];return this.U_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ks{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new ks(e,t,Cs.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$t(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rs{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some((e=>e.H_()))}}class Os{constructor(){this.queries=Ns(),this.onlineState="Unknown",this.J_=new Set}terminate(){!function(e,t){const n=P(e),r=n.queries;n.queries=Ns(),r.forEach(((e,n)=>{for(const r of n.z_)r.onError(t)}))}(this,new L(D.ABORTED,"Firestore shutting down"))}}function Ns(){return new Wt((e=>Bt(e)),$t)}async function xs(e,t){const n=P(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.j_()&&t.H_()&&(r=2):(s=new Rs,r=t.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Ss(e,`Initialization of query '${zt(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.z_.push(t),t.Y_(n.onlineState),s.G_&&t.Z_(s.G_)&&Ms(n)}async function Ps(e,t){const n=P(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.z_.indexOf(t);e>=0&&(s.z_.splice(e,1),0===s.z_.length?i=t.H_()?0:1:!s.j_()&&t.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ds(e,t){const n=P(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.z_)e.Z_(i)&&(r=!0);t.G_=i}}r&&Ms(n)}function Ls(e,t,n){const r=P(e),i=r.queries.get(t);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(t)}function Ms(e){e.J_.forEach((e=>{e.next()}))}var Us,Fs;(Fs=Us||(Us={})).X_="default",Fs.Cache="cache";class Vs{constructor(e,t,n){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=n||{}}Z_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ks(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){if(!e.fromCache)return!0;if(!this.H_())return!0;const n="Offline"!==t;return(!this.options.oa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ra(e){if(e.docChanges.length>0)return!0;const t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}sa(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Us.Cache}}
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
 * Copyright 2017 Google LLC
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
class js{constructor(e){this.key=e}}class $s{constructor(e){this.key=e}}class Bs{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=on(),this.mutatedKeys=on(),this.da=Ht(e),this.Aa=new Cs(this.da)}get Ra(){return this.Ia}Va(e,t){const n=t?t.ma:new As,r=t?t.Aa:this.Aa;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=qt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.fa(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.da(l,a)>0||c&&this.da(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Aa:s,ma:n,ts:o,mutatedKeys:i}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const s=e.ma.W_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return N()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.da(e.doc,t.doc))),this.ga(n),r=null!=r&&r;const o=t&&!r?this.pa():[],a=0===this.Ea.size&&this.current&&!r?1:0,c=a!==this.Ta;return this.Ta=a,0!==s.length||c?{snapshot:new ks(this.query,e.Aa,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),ya:o}:{ya:o}}Y_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new As,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach((e=>this.Ia=this.Ia.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ia=this.Ia.delete(e))),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=on(),this.Aa.forEach((e=>{this.wa(e.key)&&(this.Ea=this.Ea.add(e.key))}));const t=[];return e.forEach((e=>{this.Ea.has(e)||t.push(new $s(e))})),this.Ea.forEach((n=>{e.has(n)||t.push(new js(n))})),t}Sa(e){this.Ia=e.Is,this.Ea=on();const t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return ks.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,0===this.Ta,this.hasCachedResults)}}class zs{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class qs{constructor(e){this.key=e,this.Da=!1}}class Ks{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.va=new Wt((e=>Bt(e)),$t),this.Fa=new Map,this.Ma=new Set,this.xa=new Ie(te.comparator),this.Oa=new Map,this.Na=new oi,this.La={},this.Ba=new Map,this.ka=Zr.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return!0===this.qa}}async function Hs(e,t,n=!0){const r=go(e);let i;const s=r.va.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await Ws(r,t,n,!0),i}async function Gs(e,t){const n=go(e);await Ws(n,t,!0,!1)}async function Ws(e,t,n,r){const i=await Ci(e.localStore,Ft(t)),s=i.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await Qs(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&Yi(e.remoteStore,i),a}async function Qs(e,t,n,r,i){e.Qa=(t,n,r)=>async function(e,t,n,r){let i=t.view.Va(n);i.ts&&(i=await ki(e.localStore,t.query,!1).then((({documents:e})=>t.view.Va(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return co(e,t.targetId,a.ya),a.snapshot}(e,t,n,r);const s=await ki(e.localStore,t,!0),o=new Bs(t,s.Is),a=o.Va(s.documents),c=rr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);co(e,n,u.ya);const l=new zs(t,n,o);return e.va.set(t,l),e.Fa.has(n)?e.Fa.get(n).push(t):e.Fa.set(n,[t]),u.snapshot}async function Xs(e,t,n){const r=P(e),i=r.va.get(t),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter((e=>!$t(e,t)))),void r.va.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ai(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ji(r.remoteStore,i.targetId),oo(r,i.targetId)})).catch(ue)):(oo(r,i.targetId),await Ai(r.localStore,i.targetId,!0))}async function Ys(e,t){const n=P(e),r=n.va.get(t),i=n.Fa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ji(n.remoteStore,r.targetId))}async function Js(e,t,n){const r=mo(e);try{const e=await function(e,t){const n=P(e),r=Q.now(),i=t.reduce(((e,t)=>e.add(t.key)),on());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Xt(),c=on();return n.us.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=xn(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Ln(e.key,t,rt(t.value.mapValue),Cn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Zt(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.La[e.currentUser.toKey()];r||(r=new Ie(G)),r=r.insert(t,n),e.La[e.currentUser.toKey()]=r}(r,e.batchId,n),await ho(r,e.changes),await hs(r.remoteStore)}catch(e){const t=Ss(e,"Failed to persist write");n.reject(t)}}async function Zs(e,t){const n=P(e);try{const e=await Ti(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Oa.get(t);r&&(x(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Da=!0:e.modifiedDocuments.size>0?x(r.Da):e.removedDocuments.size>0&&(x(r.Da),r.Da=!1))})),await ho(n,e,t)}catch(e){await ue(e)}}function eo(e,t,n){const r=P(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.va.forEach(((n,r)=>{const i=r.view.Y_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=P(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.z_)i.Y_(t)&&(r=!0)})),r&&Ms(n)}(r.eventManager,t),e.length&&r.Ca.E_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function to(e,t,n){const r=P(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Oa.get(t),s=i&&i.key;if(s){let e=new Ie(te.comparator);e=e.insert(s,it.newNoDocument(s,X.min()));const n=on().add(s),i=new nr(X.min(),new Map,new Ie(G),e,n);await Zs(r,i),r.xa=r.xa.remove(s),r.Oa.delete(t),lo(r)}else await Ai(r.localStore,t,!1).then((()=>oo(r,t,n))).catch(ue)}async function no(e,t){const n=P(e),r=t.batch.batchId;try{const e=await bi(n.localStore,t);so(n,r,null),io(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ho(n,e)}catch(e){await ue(e)}}async function ro(e,t,n){const r=P(e);try{const e=await function(e,t){const n=P(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(x(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);so(r,t,n),io(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ho(r,e)}catch(n){await ue(n)}}function io(e,t){(e.Ba.get(t)||[]).forEach((e=>{e.resolve()})),e.Ba.delete(t)}function so(e,t,n){const r=P(e);let i=r.La[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.La[r.currentUser.toKey()]=i}}function oo(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Fa.get(t))e.va.delete(r),n&&e.Ca.Ka(r,n);e.Fa.delete(t),e.isPrimaryClient&&e.Na.mr(t).forEach((t=>{e.Na.containsKey(t)||ao(e,t)}))}function ao(e,t){e.Ma.delete(t.path.canonicalString());const n=e.xa.get(t);null!==n&&(Ji(e.remoteStore,n),e.xa=e.xa.remove(t),e.Oa.delete(n),lo(e))}function co(e,t,n){for(const r of n)r instanceof js?(e.Na.addReference(r.key,t),uo(e,r)):r instanceof $s?(A("SyncEngine","Document no longer in limbo: "+r.key),e.Na.removeReference(r.key,t),e.Na.containsKey(r.key)||ao(e,r.key)):N()}function uo(e,t){const n=t.key,r=n.path.canonicalString();e.xa.get(n)||e.Ma.has(r)||(A("SyncEngine","New document in limbo: "+n),e.Ma.add(r),lo(e))}function lo(e){for(;e.Ma.size>0&&e.xa.size<e.maxConcurrentLimboResolutions;){const t=e.Ma.values().next().value;e.Ma.delete(t);const n=new te(J.fromString(t)),r=e.ka.next();e.Oa.set(r,new qs(n)),e.xa=e.xa.insert(n,r),Yi(e.remoteStore,new Hr(Ft(Dt(n.path)),r,"TargetPurposeLimboResolution",fe.oe))}}async function ho(e,t,n){const r=P(e),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach(((e,a)=>{o.push(r.Qa(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=gi.Ui(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Ca.E_(i),await async function(e,t){const n=P(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>le.forEach(t,(t=>le.forEach(t.Ki,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>le.forEach(t.$i,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!de(e))throw e;A("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ss.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ss=n.ss.insert(e,i)}}}(r.localStore,s))}async function fo(e,t){const n=P(e);if(!n.currentUser.isEqual(t)){A("SyncEngine","User change. New user:",t.toKey());const e=await _i(n.localStore,t);n.currentUser=t,function(e,t){e.Ba.forEach((e=>{e.forEach((e=>{e.reject(new L(D.CANCELLED,t))}))})),e.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ho(n,e.ls)}}function po(e,t){const n=P(e),r=n.Oa.get(t);if(r&&r.Da)return on().add(r.key);{let e=on();const r=n.Fa.get(t);if(!r)return e;for(const t of r){const r=n.va.get(t);e=e.unionWith(r.view.Ra)}return e}}function go(e){const t=P(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zs.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=po.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=to.bind(null,t),t.Ca.E_=Ds.bind(null,t.eventManager),t.Ca.Ka=Ls.bind(null,t.eventManager),t}function mo(e){const t=P(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=no.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ro.bind(null,t),t}class yo{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$i(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return wi(this.persistence,new yi,e.initialUser,this.serializer)}createPersistence(e){return new di(pi.Yr,this.serializer)}createSharedClientState(e){return new Ni}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>eo(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=fo.bind(null,this.syncEngine),await bs(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Os}()}createDatastore(e){const t=$i(e.databaseInfo.databaseId),n=function(e){return new Vi(e)}(e.databaseInfo);return function(e,t,n,r){return new Hi(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Wi(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>eo(this.syncEngine,e,0)),function(){return Pi.D()?new Pi:new xi}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Ks(e,t,n,r,i,s);return o&&(a.qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=P(e);A("RemoteStore","RemoteStore shutting down."),t.N_.add(5),await Xi(t),t.B_.shutdown(),t.k_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}
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
/**
 * @license
 * Copyright 2017 Google LLC
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
class wo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):k("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
 * Copyright 2017 Google LLC
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
class _o{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=T.UNAUTHENTICATED,this.clientId=H.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{A("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(A("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ss(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function bo(e,t){e.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await _i(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Eo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Io(e);A("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>_s(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>_s(t.remoteStore,n))),e._onlineComponents=t}function To(e){return"FirebaseError"===e.name?e.code===D.FAILED_PRECONDITION||e.code===D.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Io(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await bo(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!To(n))throw n;R("Error using user provided cache. Falling back to memory cache: "+n),await bo(e,new yo)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await bo(e,new yo);return e._offlineComponents}async function So(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await Eo(e,e._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await Eo(e,new vo))),e._onlineComponents}function Co(e){return So(e).then((e=>e.syncEngine))}async function Ao(e){const t=await So(e),n=t.eventManager;return n.onListen=Hs.bind(null,t.syncEngine),n.onUnlisten=Xs.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Gs.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Ys.bind(null,t.syncEngine),n}function ko(e,t,n={}){const r=new M;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new wo({next:s=>{t.enqueueAndForget((()=>Ps(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new L(D.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new L(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Vs(Dt(n.path),s,{includeMetadataChanges:!0,oa:!0});return xs(e,o)}(await Ao(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
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
function Ro(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const Oo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function No(e,t,n){if(!n)throw new L(D.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function xo(e,t,n,r){if(!0===t&&!0===r)throw new L(D.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Po(e){if(!te.isDocumentKey(e))throw new L(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Do(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":N()}function Lo(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Do(e);throw new L(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class Mo{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new L(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new L(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xo("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ro(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uo{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mo(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new F;switch(e.type){case"firstParty":return new B(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new L(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Oo.get(e);t&&(A("ComponentProvider","Removing Datastore"),Oo.delete(e),t.terminate())}(this),Promise.resolve()}}function Fo(e,t,n,r={}){var i;const s=(e=Lo(e,Uo))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&R("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=T.MOCK_USER;else{t=(0,c.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new L(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new T(s)}e._authCredentials=new V(new U(t,n))}}
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
 */class Vo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Vo(this.firestore,e,this._query)}}class jo{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $o(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jo(this.firestore,e,this._key)}}class $o extends Vo{constructor(e,t,n){super(e,t,Dt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jo(this.firestore,null,new te(e))}withConverter(e){return new $o(this.firestore,e,this._path)}}function Bo(e,t,...n){if(e=(0,c.Ku)(e),1===arguments.length&&(t=H.newId()),No("doc","path",t),e instanceof Uo){const r=J.fromString(t,...n);return Po(r),new jo(e,null,new te(r))}{if(!(e instanceof jo||e instanceof $o))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(J.fromString(t,...n));return Po(r),new jo(e.firestore,e instanceof $o?e.converter:null,new te(r))}}
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
class zo{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Bi(this,"async_queue_retry"),this.Tu=()=>{const e=ji();e&&A("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const e=ji();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const t=ji();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise((()=>{}));const t=new M;return this.du((()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.au.push(e),this.Au())))}async Au(){if(0!==this.au.length){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!de(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo((()=>this.Au()))}}du(e){const t=this._u.then((()=>(this.hu=!0,e().catch((e=>{this.lu=e,this.hu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(e);throw k("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.hu=!1,e))))));return this._u=t,t}enqueueAfterDelay(e,t,n){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);const r=Is.createAndSchedule(this,e,t,n,(e=>this.Ru(e)));return this.cu.push(r),r}Eu(){this.lu&&N()}verifyOperationInProgress(){}async Vu(){let e;do{e=this._u,await e}while(e!==this._u)}mu(e){for(const t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then((()=>{this.cu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.cu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Vu()}))}gu(e){this.Iu.push(e)}Ru(e){const t=this.cu.indexOf(e);this.cu.splice(t,1)}}class qo extends Uo{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new zo}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Go(this),this._firestoreClient.terminate()}}function Ko(e,t){const n="object"==typeof e?e:(0,s.Sx)(),r="string"==typeof e?e:t||"(default)",i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(0,c.yU)("firestore");e&&Fo(i,...e)}return i}function Ho(e){return e._firestoreClient||Go(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Go(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new Ve(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Ro(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new _o(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
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
class Wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wo(Ne.fromBase64String(e))}catch(e){throw new L(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Wo(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Qo{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new L(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Xo{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Jo=/^__.*__$/;class Zo{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dn(e,this.data,t,this.fieldTransforms)}}function ea(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N()}}class ta{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new ta(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.wu({path:n,bu:!1});return r.Du(e),r}Cu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.wu({path:n,bu:!1});return r.pu(),r}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return da(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(0===e.length)throw this.Fu("Document fields must not be empty");if(ea(this.yu)&&Jo.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class na{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||$i(e)}Ou(e,t,n,r=!1){return new ta({yu:e,methodName:t,xu:n,path:ee.emptyPath(),bu:!1,Mu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ra(e){const t=e._freezeSettings(),n=$i(e._databaseId);return new na(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ia(e,t,n,r,i,s={}){const o=e.Ou(s.merge||s.mergeFields?2:0,t,n,i);ca("Data must be an object, but it was:",o,r);const a=oa(r,o);let c,u;if(s.merge)c=new Re(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=ua(t,r,n);if(!o.contains(i))throw new L(D.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);fa(e,i)||e.push(i)}c=new Re(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Zo(new nt(a),c,u)}function sa(e,t){if(aa(e=(0,c.Ku)(e)))return ca("Unsupported field value:",t,e),oa(e,t);if(e instanceof Xo)return function(e,t){if(!ea(t.yu))throw t.Fu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Fu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.bu&&4!==t.yu)throw t.Fu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=sa(i,t.vu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return hn(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Q.fromDate(e);return{timestampValue:mr(t.serializer,n)}}if(e instanceof Q){const n=new Q(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:mr(t.serializer,n)}}if(e instanceof Yo)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Wo)return{bytesValue:yr(t.serializer,e._byteString)};if(e instanceof jo){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_r(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fu(`Unsupported field value: ${Do(e)}`)}(e,t)}function oa(e,t){const n={};return Te(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(e,((e,r)=>{const i=sa(r,t.Su(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function aa(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Q||e instanceof Yo||e instanceof Wo||e instanceof jo||e instanceof Xo)}function ca(e,t,n){if(!aa(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Do(n);throw"an object"===r?t.Fu(e+" a custom object"):t.Fu(e+" "+r)}}function ua(e,t,n){if((t=(0,c.Ku)(t))instanceof Qo)return t._internalPath;if("string"==typeof t)return ha(e,t);throw da("Field path arguments must be of type string or ",e,!1,void 0,n)}const la=new RegExp("[~\\*/\\[\\]]");function ha(e,t,n){if(t.search(la)>=0)throw da(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qo(...t.split("."))._internalPath}catch(r){throw da(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function da(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new L(D.INVALID_ARGUMENT,a+e+c)}function fa(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class pa{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ga(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ma("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ga extends pa{data(){return super.data()}}function ma(e,t){return"string"==typeof t?ha(e,t):t instanceof Qo?t._internalPath:t._delegate._internalPath}
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
 */class ya{convertValue(e,t="none"){switch(Be(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Le(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw N()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ee(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Yo(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ue(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Fe(e));default:return null}}convertTimestamp(e){const t=Pe(e);return new Q(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);x(Kr(n));const r=new je(n.get(1),n.get(3)),i=new te(n.popFirst(5));return r.isEqual(t)||k(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function va(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class wa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _a extends pa{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ma("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ba extends _a{data(e={}){return super.data(e)}}
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
function Ea(e){e=Lo(e,jo);const t=Lo(e.firestore,qo);return ko(Ho(t),e._key).then((n=>Ca(t,e,n)))}class Ta extends ya{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new jo(this.firestore,null,t)}}function Ia(e,t,n){e=Lo(e,jo);const r=Lo(e.firestore,qo),i=va(e.converter,t,n);return Sa(r,[ia(ra(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Cn.none())])}function Sa(e,t){return function(e,t){const n=new M;return e.asyncQueue.enqueueAndForget((async()=>Js(await Co(e),t,n))),n.promise}(Ho(e),t)}function Ca(e,t,n){const r=n.docs.get(t._key),i=new Ta(e);return new _a(e,i,t._key,r,new wa(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */!function(e,t=!0){!function(e){I=e}(s.MF),(0,s.om)(new o.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new qo(new j(e.getProvider("auth-internal")),new q(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new L(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new je(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(E,"4.6.5",e),(0,s.KO)(E,"4.6.5","esm2017")}()},1387:function(e,t,n){n.d(t,{LA:function(){return ae},aE:function(){return rt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(144);
/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,g=/\?/g,m=/\+/g,y=/%5B/g,v=/%5D/g,w=/%5E/g,_=/%60/g,b=/%7B/g,E=/%7C/g,T=/%7D/g,I=/%20/g;function S(e){return encodeURI(""+e).replace(E,"|").replace(y,"[").replace(v,"]")}function C(e){return S(e).replace(b,"{").replace(T,"}").replace(w,"^")}function A(e){return S(e).replace(m,"%2B").replace(I,"+").replace(h,"%23").replace(d,"%26").replace(_,"`").replace(b,"{").replace(T,"}").replace(w,"^")}function k(e){return A(e).replace(p,"%3D")}function R(e){return S(e).replace(h,"%23").replace(g,"%3F")}function O(e){return null==e?"":R(e).replace(f,"%2F")}function N(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const x=/\/$/,P=e=>e.replace(x,"");function D(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=B(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:N(o)}}function L(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function U(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&F(t.matched[r],n.matched[i])&&V(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function F(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function V(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!j(e[n],t[n]))return!1;return!0}function j(e,t){return l(e)?$(e,t):l(t)?$(t,e):e===t}function $(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function B(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var q,K;(function(e){e["pop"]="pop",e["push"]="push"})(q||(q={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(K||(K={}));function H(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),P(e)}const G=/^[^#]+#/;function W(e,t){return e.replace(G,"#")+t}function Q(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function Y(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Q(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function J(e,t){const n=history.state?history.state.position-t:-1;return n+e}const Z=new Map;function ee(e,t){Z.set(e,t)}function te(e){const t=Z.get(e);return Z.delete(e),t}let ne=()=>location.protocol+"//"+location.host;function re(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}const o=M(n,e);return o+r+i}function ie(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=re(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:q.pop,direction:l?l>0?K.forward:K.back:K.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:X()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function se(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?X():null}}function oe(e){const{history:t,location:n}=window,r={value:re(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:ne()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,se(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:X()});s(o.current,o,!0);const c=a({},se(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function ae(e){e=H(e);const t=oe(e),n=ie(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:W.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ce(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const le=Symbol("");var he;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(he||(he={}));function de(e,t){return a(new Error,{type:e,[le]:!0},t)}function fe(e,t){return e instanceof Error&&le in e&&(null==t||!!(e.type&t))}const pe="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},me=/[.+*?^${}()[\]/\\]/g;function ye(e,t){const n=a({},ge,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(me,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||pe;if(l!==pe){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function ve(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function we(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ve(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(_e(r))return 1;if(_e(i))return-1}return i.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const be={type:0,value:""},Ee=/[a-zA-Z0-9_]/;function Te(e){if(!e)return[[]];if("/"===e)return[[be]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Ee.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function Ie(e,t,n){const r=ye(Te(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=Ae(e);c.aliasOf=r&&r.record;const h=Ne(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=Ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!Re(f)&&o(e.name)),De(f)&&l(f),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f}return p?()=>{o(p)}:u}function o(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){const t=xe(e,n);n.splice(t,0,e),e.record.name&&!Re(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw de(1,{location:e});0,o=i.record.name,c=a(Ce(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ce(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw de(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:Oe(u)}}function d(){n.length=0,r.clear()}return t=Ne({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:i}}function Ce(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ke(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ke(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Re(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Oe(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function Ne(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xe(e,t){let n=0,r=t.length;while(n!==r){const i=n+r>>1,s=we(e,t[i]);s<0?r=i:n=i+1}const i=Pe(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Pe(e){let t=e;while(t=t.parent)if(De(t)&&0===we(e,t))return t}function De({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Le(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(m," "),n=e.indexOf("="),s=N(n<0?e:e.slice(0,n)),o=n<0?null:N(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=k(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&A(e))):[r&&A(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Ve=Symbol(""),je=Symbol(""),$e=Symbol(""),Be=Symbol("");function ze(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function qe(e,t,n,r,i,s=e=>e()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const u=e=>{!1===e?c(de(4,{from:n,to:t})):e instanceof Error?c(e):ce(e)?c(de(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},l=s((()=>e.call(r&&r.instances[i],t,n,u)));let h=Promise.resolve(l);e.length<3&&(h=h.then(u)),h.catch((e=>c(e)))}))}function Ke(e,t,n,r,i=e=>e()){const s=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(He(c)){const o=c.__vccOpts||c,u=o[t];u&&s.push(qe(u,n,r,a,e,i))}else{let u=c();0,s.push((()=>u.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=o(s)?s.default:s;a.components[e]=c;const u=c.__vccOpts||c,l=u[t];return l&&qe(l,n,r,a,e,i)()}))))}}}return s}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ge(e){const t=(0,r.WQ)(je),n=(0,r.WQ)($e);const s=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),o=(0,r.EW)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(F.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(F.bind(null,e[t-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Ye(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&V(n.params,s.value.params)));function l(n={}){return Xe(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const We=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=(0,i.Kh)(Ge(e)),{options:s}=(0,r.WQ)(je),o=(0,r.EW)((()=>({[Ze(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ze(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Qe=We;function Xe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ze=(e,t,n)=>null!=e?e:null!=t?t:n,et=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(Be),o=(0,r.EW)((()=>e.route||s.value)),c=(0,r.WQ)(Ve,0),u=(0,r.EW)((()=>{let e=(0,i.R1)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.EW)((()=>o.value.matched[u.value]));(0,r.Gt)(Ve,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Fe,l),(0,r.Gt)(Be,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&F(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return tt(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return tt(n.default,{Component:g,route:i})||g}}});function tt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const nt=et;function rt(e){const t=Se(e.routes,e),n=e.parseQuery||Le,o=e.stringifyQuery||Me,h=e.history;const d=ze(),f=ze(),p=ze(),g=(0,i.IJ)(z);let m=z;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=c.bind(null,(e=>""+e)),v=c.bind(null,O),w=c.bind(null,N);function _(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function b(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function T(e){return!!t.getRecordMatcher(e)}function I(e,r){if(r=a({},r||g.value),"string"===typeof e){const i=D(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:w(s.params),hash:N(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=e.path)i=a({},e,{path:D(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:v(t)}),r.params=v(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=y(w(s.params));const u=L(o,a({},e,{hash:C(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Me?Ue(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function S(e){return"string"===typeof e?D(n,e,g.value.path):a({},e)}function A(e,t){if(m!==e)return de(8,{from:t,to:e})}function k(e){return P(e)}function R(e){return k(a(S(e),{replace:!0}))}function x(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function P(e,t){const n=m=I(e),r=g.value,i=e.state,s=e.force,c=!0===e.replace,u=x(n);if(u)return P(a(S(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&U(o,r,n)&&(h=de(16,{to:l,from:r}),re(r,r,!0,!1)),(h?Promise.resolve(h):V(l,r)).catch((e=>fe(e)?fe(e,2)?e:ne(e):Q(e,l,r))).then((e=>{if(e){if(fe(e,2))return P(a({replace:c},S(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=$(l,r,!0,c,i);return j(l,r,e),e}))}function M(e,t){const n=A(e,t);return n?Promise.reject(n):Promise.resolve()}function F(e){const t=oe.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function V(e,t){let n;const[r,i,s]=it(e,t);n=Ke(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=M.bind(null,e,t);return n.push(o),ce(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),ce(n)})).then((()=>{n=Ke(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),ce(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ke(s,"beforeRouteEnter",e,t,F),n.push(o),ce(n)))).then((()=>{n=[];for(const r of f.list())n.push(qe(r,e,t));return n.push(o),ce(n)})).catch((e=>fe(e,8)?e:Promise.reject(e)))}function j(e,t,n){p.list().forEach((r=>F((()=>r(e,t,n)))))}function $(e,t,n,r,i){const o=A(e,t);if(o)return o;const c=t===z,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),g.value=e,re(e,t,n,c),ne()}let B;function K(){B||(B=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=I(e),i=x(r);if(i)return void P(a(i,{replace:!0}),r).catch(u);m=r;const o=g.value;s&&ee(J(o.fullPath,n.delta),X()),V(r,o).catch((e=>fe(e,12)?e:fe(e,2)?(P(e.to,r).then((e=>{fe(e,20)&&!n.delta&&n.type===q.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Q(e,r,o)))).then((e=>{e=e||$(r,o,!1),e&&(n.delta&&!fe(e,8)?h.go(-n.delta,!1):n.type===q.pop&&fe(e,20)&&h.go(-1,!1)),j(r,o,e)})).catch(u)})))}let H,G=ze(),W=ze();function Q(e,t,n){ne(e);const r=W.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Z(){return H&&g.value!==z?Promise.resolve():new Promise(((e,t)=>{G.add([e,t])}))}function ne(e){return H||(H=!e,K(),G.list().forEach((([t,n])=>e?n(e):t())),G.reset()),e}function re(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&te(J(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&Y(e))).catch((e=>Q(e,t,n)))}const ie=e=>h.go(e);let se;const oe=new Set,ae={currentRoute:g,listening:!0,addRoute:_,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:E,resolve:I,options:e,push:k,replace:R,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:W.add,isReady:Z,install(e){const t=this;e.component("RouterLink",Qe),e.component("RouterView",nt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!se&&g.value===z&&(se=!0,k(h.location).catch((e=>{0})));const n={};for(const i in z)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});e.provide(je,t),e.provide($e,(0,i.Gc)(n)),e.provide(Be,g);const r=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(m=z,B&&B(),B=null,g.value=z,se=!1,H=!1),r()}}};function ce(e){return e.reduce(((e,t)=>e.then((()=>F(t)))),Promise.resolve())}return ae}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>F(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>F(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.d56f06ec.js.map