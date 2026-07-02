(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function uf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ec={exports:{}},Aa={},Pc={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function N2(){if(zp)return Le;zp=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,N={};function R(k,I,Q){this.props=k,this.context=I,this.refs=N,this.updater=Q||S}R.prototype.isReactComponent={},R.prototype.setState=function(k,I){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,I,"setState")},R.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function T(){}T.prototype=R.prototype;function L(k,I,Q){this.props=k,this.context=I,this.refs=N,this.updater=Q||S}var C=L.prototype=new T;C.constructor=L,j(C,R.prototype),C.isPureReactComponent=!0;var A=Array.isArray,$=Object.prototype.hasOwnProperty,F={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function B(k,I,Q){var ne,E={},X=null,de=null;if(I!=null)for(ne in I.ref!==void 0&&(de=I.ref),I.key!==void 0&&(X=""+I.key),I)$.call(I,ne)&&!P.hasOwnProperty(ne)&&(E[ne]=I[ne]);var he=arguments.length-2;if(he===1)E.children=Q;else if(1<he){for(var ge=Array(he),be=0;be<he;be++)ge[be]=arguments[be+2];E.children=ge}if(k&&k.defaultProps)for(ne in he=k.defaultProps,he)E[ne]===void 0&&(E[ne]=he[ne]);return{$$typeof:t,type:k,key:X,ref:de,props:E,_owner:F.current}}function G(k,I){return{$$typeof:t,type:k.type,key:I,ref:k.ref,props:k.props,_owner:k._owner}}function K(k){return typeof k=="object"&&k!==null&&k.$$typeof===t}function ee(k){var I={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Q){return I[Q]})}var V=/\/+/g;function J(k,I){return typeof k=="object"&&k!==null&&k.key!=null?ee(""+k.key):I.toString(36)}function ae(k,I,Q,ne,E){var X=typeof k;(X==="undefined"||X==="boolean")&&(k=null);var de=!1;if(k===null)de=!0;else switch(X){case"string":case"number":de=!0;break;case"object":switch(k.$$typeof){case t:case a:de=!0}}if(de)return de=k,E=E(de),k=ne===""?"."+J(de,0):ne,A(E)?(Q="",k!=null&&(Q=k.replace(V,"$&/")+"/"),ae(E,I,Q,"",function(be){return be})):E!=null&&(K(E)&&(E=G(E,Q+(!E.key||de&&de.key===E.key?"":(""+E.key).replace(V,"$&/")+"/")+k)),I.push(E)),1;if(de=0,ne=ne===""?".":ne+":",A(k))for(var he=0;he<k.length;he++){X=k[he];var ge=ne+J(X,he);de+=ae(X,I,Q,ge,E)}else if(ge=w(k),typeof ge=="function")for(k=ge.call(k),he=0;!(X=k.next()).done;)X=X.value,ge=ne+J(X,he++),de+=ae(X,I,Q,ge,E);else if(X==="object")throw I=String(k),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return de}function se(k,I,Q){if(k==null)return k;var ne=[],E=0;return ae(k,ne,"","",function(X){return I.call(Q,X,E++)}),ne}function ce(k){if(k._status===-1){var I=k._result;I=I(),I.then(function(Q){(k._status===0||k._status===-1)&&(k._status=1,k._result=Q)},function(Q){(k._status===0||k._status===-1)&&(k._status=2,k._result=Q)}),k._status===-1&&(k._status=0,k._result=I)}if(k._status===1)return k._result.default;throw k._result}var Z={current:null},H={transition:null},z={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:H,ReactCurrentOwner:F};function D(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:se,forEach:function(k,I,Q){se(k,function(){I.apply(this,arguments)},Q)},count:function(k){var I=0;return se(k,function(){I++}),I},toArray:function(k){return se(k,function(I){return I})||[]},only:function(k){if(!K(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Le.Component=R,Le.Fragment=i,Le.Profiler=c,Le.PureComponent=L,Le.StrictMode=l,Le.Suspense=m,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,Le.act=D,Le.cloneElement=function(k,I,Q){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ne=j({},k.props),E=k.key,X=k.ref,de=k._owner;if(I!=null){if(I.ref!==void 0&&(X=I.ref,de=F.current),I.key!==void 0&&(E=""+I.key),k.type&&k.type.defaultProps)var he=k.type.defaultProps;for(ge in I)$.call(I,ge)&&!P.hasOwnProperty(ge)&&(ne[ge]=I[ge]===void 0&&he!==void 0?he[ge]:I[ge])}var ge=arguments.length-2;if(ge===1)ne.children=Q;else if(1<ge){he=Array(ge);for(var be=0;be<ge;be++)he[be]=arguments[be+2];ne.children=he}return{$$typeof:t,type:k.type,key:E,ref:X,props:ne,_owner:de}},Le.createContext=function(k){return k={$$typeof:p,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:u,_context:k},k.Consumer=k},Le.createElement=B,Le.createFactory=function(k){var I=B.bind(null,k);return I.type=k,I},Le.createRef=function(){return{current:null}},Le.forwardRef=function(k){return{$$typeof:f,render:k}},Le.isValidElement=K,Le.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:ce}},Le.memo=function(k,I){return{$$typeof:x,type:k,compare:I===void 0?null:I}},Le.startTransition=function(k){var I=H.transition;H.transition={};try{k()}finally{H.transition=I}},Le.unstable_act=D,Le.useCallback=function(k,I){return Z.current.useCallback(k,I)},Le.useContext=function(k){return Z.current.useContext(k)},Le.useDebugValue=function(){},Le.useDeferredValue=function(k){return Z.current.useDeferredValue(k)},Le.useEffect=function(k,I){return Z.current.useEffect(k,I)},Le.useId=function(){return Z.current.useId()},Le.useImperativeHandle=function(k,I,Q){return Z.current.useImperativeHandle(k,I,Q)},Le.useInsertionEffect=function(k,I){return Z.current.useInsertionEffect(k,I)},Le.useLayoutEffect=function(k,I){return Z.current.useLayoutEffect(k,I)},Le.useMemo=function(k,I){return Z.current.useMemo(k,I)},Le.useReducer=function(k,I,Q){return Z.current.useReducer(k,I,Q)},Le.useRef=function(k){return Z.current.useRef(k)},Le.useState=function(k){return Z.current.useState(k)},Le.useSyncExternalStore=function(k,I,Q){return Z.current.useSyncExternalStore(k,I,Q)},Le.useTransition=function(){return Z.current.useTransition()},Le.version="18.3.1",Le}var Op;function Ld(){return Op||(Op=1,Pc.exports=N2()),Pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function R2(){if(Dp)return Aa;Dp=1;var t=Ld(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,m,x){var y,_={},w=null,S=null;x!==void 0&&(w=""+x),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(S=m.ref);for(y in m)l.call(m,y)&&!u.hasOwnProperty(y)&&(_[y]=m[y]);if(f&&f.defaultProps)for(y in m=f.defaultProps,m)_[y]===void 0&&(_[y]=m[y]);return{$$typeof:a,type:f,key:w,ref:S,props:_,_owner:c.current}}return Aa.Fragment=i,Aa.jsx=p,Aa.jsxs=p,Aa}var Bp;function L2(){return Bp||(Bp=1,Ec.exports=R2()),Ec.exports}var r=L2(),g=Ld();const wr=uf(g);var cs={},zc={exports:{}},Wt={},Oc={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function M2(){return Fp||(Fp=1,(function(t){function a(H,z){var D=H.length;H.push(z);e:for(;0<D;){var k=D-1>>>1,I=H[k];if(0<c(I,z))H[k]=z,H[D]=I,D=k;else break e}}function i(H){return H.length===0?null:H[0]}function l(H){if(H.length===0)return null;var z=H[0],D=H.pop();if(D!==z){H[0]=D;e:for(var k=0,I=H.length,Q=I>>>1;k<Q;){var ne=2*(k+1)-1,E=H[ne],X=ne+1,de=H[X];if(0>c(E,D))X<I&&0>c(de,E)?(H[k]=de,H[X]=D,k=X):(H[k]=E,H[ne]=D,k=ne);else if(X<I&&0>c(de,D))H[k]=de,H[X]=D,k=X;else break e}}return z}function c(H,z){var D=H.sortIndex-z.sortIndex;return D!==0?D:H.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var p=Date,f=p.now();t.unstable_now=function(){return p.now()-f}}var m=[],x=[],y=1,_=null,w=3,S=!1,j=!1,N=!1,R=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(H){for(var z=i(x);z!==null;){if(z.callback===null)l(x);else if(z.startTime<=H)l(x),z.sortIndex=z.expirationTime,a(m,z);else break;z=i(x)}}function A(H){if(N=!1,C(H),!j)if(i(m)!==null)j=!0,ce($);else{var z=i(x);z!==null&&Z(A,z.startTime-H)}}function $(H,z){j=!1,N&&(N=!1,T(B),B=-1),S=!0;var D=w;try{for(C(z),_=i(m);_!==null&&(!(_.expirationTime>z)||H&&!ee());){var k=_.callback;if(typeof k=="function"){_.callback=null,w=_.priorityLevel;var I=k(_.expirationTime<=z);z=t.unstable_now(),typeof I=="function"?_.callback=I:_===i(m)&&l(m),C(z)}else l(m);_=i(m)}if(_!==null)var Q=!0;else{var ne=i(x);ne!==null&&Z(A,ne.startTime-z),Q=!1}return Q}finally{_=null,w=D,S=!1}}var F=!1,P=null,B=-1,G=5,K=-1;function ee(){return!(t.unstable_now()-K<G)}function V(){if(P!==null){var H=t.unstable_now();K=H;var z=!0;try{z=P(!0,H)}finally{z?J():(F=!1,P=null)}}else F=!1}var J;if(typeof L=="function")J=function(){L(V)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,se=ae.port2;ae.port1.onmessage=V,J=function(){se.postMessage(null)}}else J=function(){R(V,0)};function ce(H){P=H,F||(F=!0,J())}function Z(H,z){B=R(function(){H(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){j||S||(j=!0,ce($))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return i(m)},t.unstable_next=function(H){switch(w){case 1:case 2:case 3:var z=3;break;default:z=w}var D=w;w=z;try{return H()}finally{w=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var D=w;w=H;try{return z()}finally{w=D}},t.unstable_scheduleCallback=function(H,z,D){var k=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?k+D:k):D=k,H){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=D+I,H={id:y++,callback:z,priorityLevel:H,startTime:D,expirationTime:I,sortIndex:-1},D>k?(H.sortIndex=D,a(x,H),i(m)===null&&H===i(x)&&(N?(T(B),B=-1):N=!0,Z(A,D-k))):(H.sortIndex=I,a(m,H),j||S||(j=!0,ce($))),H},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(H){var z=w;return function(){var D=w;w=z;try{return H.apply(this,arguments)}finally{w=D}}}})(Dc)),Dc}var Wp;function $2(){return Wp||(Wp=1,Oc.exports=M2()),Oc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function I2(){if(Hp)return Wt;Hp=1;var t=Ld(),a=$2();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function u(e,n){p(e,n),p(e+"Capture",n)}function p(e,n){for(c[e]=n,e=0;e<n.length;e++)l.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function w(e){return m.call(_,e)?!0:m.call(y,e)?!1:x.test(e)?_[e]=!0:(y[e]=!0,!1)}function S(e,n,o,s){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,o,s){if(n===null||typeof n>"u"||S(e,n,o,s))return!0;if(s)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function N(e,n,o,s,d,h,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=v}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];R[n]=new N(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function L(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(T,L);R[n]=new N(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(T,L);R[n]=new N(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(T,L);R[n]=new N(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function C(e,n,o,s){var d=R.hasOwnProperty(n)?R[n]:null;(d!==null?d.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,o,d,s)&&(o=null),s||d===null?w(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):d.mustUseProperty?e[d.propertyName]=o===null?d.type===3?!1:"":o:(n=d.attributeName,s=d.attributeNamespace,o===null?e.removeAttribute(n):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,s?e.setAttributeNS(s,n,o):e.setAttribute(n,o))))}var A=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),F=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),ee=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),H=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,k;function I(e){if(k===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);k=n&&n[1]||""}return`
`+k+e}var Q=!1;function ne(e,n){if(!e||Q)return"";Q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Y){var s=Y}Reflect.construct(e,[],n)}else{try{n.call()}catch(Y){s=Y}e.call(n.prototype)}else{try{throw Error()}catch(Y){s=Y}e()}}catch(Y){if(Y&&s&&typeof Y.stack=="string"){for(var d=Y.stack.split(`
`),h=s.stack.split(`
`),v=d.length-1,M=h.length-1;1<=v&&0<=M&&d[v]!==h[M];)M--;for(;1<=v&&0<=M;v--,M--)if(d[v]!==h[M]){if(v!==1||M!==1)do if(v--,M--,0>M||d[v]!==h[M]){var O=`
`+d[v].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=v&&0<=M);break}}}finally{Q=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?I(e):""}function E(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=ne(e.type,!1),e;case 11:return e=ne(e.type.render,!1),e;case 1:return e=ne(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case F:return"Portal";case G:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case ae:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ee:return(e.displayName||"Context")+".Consumer";case K:return(e._context.displayName||"Context")+".Provider";case V:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return n=e.displayName||null,n!==null?n:X(e.type)||"Memo";case ce:n=e._payload,e=e._init;try{return X(e(n))}catch{}}return null}function de(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(n);case 8:return n===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(e){var n=ge(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){s=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ue(e){e._valueTracker||(e._valueTracker=be(e))}function xe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),s="";return e&&(s=ge(e)?e.checked?"true":"false":e.value),e=s,e!==o?(n.setValue(e),!0):!1}function Ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Te(e,n){var o=n.checked;return D({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function De(e,n){var o=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;o=he(n.value!=null?n.value:o),e._wrapperState={initialChecked:s,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Qe(e,n){n=n.checked,n!=null&&C(e,"checked",n,!1)}function qe(e,n){Qe(e,n);var o=he(n.value),s=n.type;if(o!=null)s==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?He(e,n.type,o):n.hasOwnProperty("defaultValue")&&He(e,n.type,he(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function et(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function He(e,n,o){(n!=="number"||Ne(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var rt=Array.isArray;function Ge(e,n,o,s){if(e=e.options,n){n={};for(var d=0;d<o.length;d++)n["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=n.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&s&&(e[o].defaultSelected=!0)}else{for(o=""+he(o),n=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,s&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function $t(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return D({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Be(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(rt(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:he(o)}}function It(e,n){var o=he(n.value),s=he(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),s!=null&&(e.defaultValue=""+s)}function bt(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function _n(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bn(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?_n(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Zo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,s,d){MSApp.execUnsafeLocalFunction(function(){return e(n,o,s,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function eo(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qs=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Qs.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jr[n]=jr[e]})});function ti(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||jr.hasOwnProperty(e)&&jr[e]?(""+n).trim():n+"px"}function je(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var s=o.indexOf("--")===0,d=ti(o,n[o],s);o==="float"&&(o="cssFloat"),s?e.setProperty(o,d):e[o]=d}}var Xe=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lt(e,n){if(n){if(Xe[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Tt(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sr=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,to=null,no=null;function eu(e){if(e=xa(e)){if(typeof Qo!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Ci(n),Qo(e.stateNode,e.type,n))}}function tu(e){to?no?no.push(e):no=[e]:to=e}function nu(){if(to){var e=to,n=no;if(no=to=null,eu(e),n)for(e=0;e<n.length;e++)eu(n[e])}}function ru(e,n){return e(n)}function ou(){}var Xs=!1;function au(e,n,o){if(Xs)return e(n,o);Xs=!0;try{return ru(e,n,o)}finally{Xs=!1,(to!==null||no!==null)&&(ou(),nu())}}function Xo(e,n){var o=e.stateNode;if(o===null)return null;var s=Ci(o);if(s===null)return null;o=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var Js=!1;if(f)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){Js=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{Js=!1}function T0(e,n,o,s,d,h,v,M,O){var Y=Array.prototype.slice.call(arguments,3);try{n.apply(o,Y)}catch(oe){this.onError(oe)}}var ea=!1,ni=null,ri=!1,el=null,A0={onError:function(e){ea=!0,ni=e}};function E0(e,n,o,s,d,h,v,M,O){ea=!1,ni=null,T0.apply(A0,arguments)}function P0(e,n,o,s,d,h,v,M,O){if(E0.apply(this,arguments),ea){if(ea){var Y=ni;ea=!1,ni=null}else throw Error(i(198));ri||(ri=!0,el=Y)}}function Nr(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function iu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function su(e){if(Nr(e)!==e)throw Error(i(188))}function z0(e){var n=e.alternate;if(!n){if(n=Nr(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,s=n;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(s=d.return,s!==null){o=s;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return su(d),e;if(h===s)return su(d),n;h=h.sibling}throw Error(i(188))}if(o.return!==s.return)o=d,s=h;else{for(var v=!1,M=d.child;M;){if(M===o){v=!0,o=d,s=h;break}if(M===s){v=!0,s=d,o=h;break}M=M.sibling}if(!v){for(M=h.child;M;){if(M===o){v=!0,o=h,s=d;break}if(M===s){v=!0,s=h,o=d;break}M=M.sibling}if(!v)throw Error(i(189))}}if(o.alternate!==s)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function lu(e){return e=z0(e),e!==null?cu(e):null}function cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=cu(e);if(n!==null)return n;e=e.sibling}return null}var du=a.unstable_scheduleCallback,uu=a.unstable_cancelCallback,O0=a.unstable_shouldYield,D0=a.unstable_requestPaint,at=a.unstable_now,B0=a.unstable_getCurrentPriorityLevel,tl=a.unstable_ImmediatePriority,hu=a.unstable_UserBlockingPriority,oi=a.unstable_NormalPriority,F0=a.unstable_LowPriority,pu=a.unstable_IdlePriority,ai=null,kn=null;function W0(e){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:U0,H0=Math.log,q0=Math.LN2;function U0(e){return e>>>=0,e===0?32:31-(H0(e)/q0|0)|0}var ii=64,si=4194304;function ta(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function li(e,n){var o=e.pendingLanes;if(o===0)return 0;var s=0,d=e.suspendedLanes,h=e.pingedLanes,v=o&268435455;if(v!==0){var M=v&~d;M!==0?s=ta(M):(h&=v,h!==0&&(s=ta(h)))}else v=o&~d,v!==0?s=ta(v):h!==0&&(s=ta(h));if(s===0)return 0;if(n!==0&&n!==s&&(n&d)===0&&(d=s&-s,h=n&-n,d>=h||d===16&&(h&4194240)!==0))return n;if((s&4)!==0&&(s|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)o=31-dn(n),d=1<<o,s|=e[o],n&=~d;return s}function V0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G0(e,n){for(var o=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes;0<h;){var v=31-dn(h),M=1<<v,O=d[v];O===-1?((M&o)===0||(M&s)!==0)&&(d[v]=V0(M,n)):O<=n&&(e.expiredLanes|=M),h&=~M}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=ii;return ii<<=1,(ii&4194240)===0&&(ii=64),e}function rl(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function na(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-dn(n),e[n]=o}function Y0(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<o;){var d=31-dn(o),h=1<<d;n[d]=0,s[d]=-1,e[d]=-1,o&=~h}}function ol(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var s=31-dn(o),d=1<<s;d&n|e[s]&n&&(e[s]|=n),o&=~d}}var Fe=0;function mu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gu,al,vu,yu,xu,il=!1,ci=[],Kn=null,Qn=null,Xn=null,ra=new Map,oa=new Map,Jn=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,n){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":ra.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(n.pointerId)}}function aa(e,n,o,s,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:o,eventSystemFlags:s,nativeEvent:h,targetContainers:[d]},n!==null&&(n=xa(n),n!==null&&al(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function K0(e,n,o,s,d){switch(n){case"focusin":return Kn=aa(Kn,e,n,o,s,d),!0;case"dragenter":return Qn=aa(Qn,e,n,o,s,d),!0;case"mouseover":return Xn=aa(Xn,e,n,o,s,d),!0;case"pointerover":var h=d.pointerId;return ra.set(h,aa(ra.get(h)||null,e,n,o,s,d)),!0;case"gotpointercapture":return h=d.pointerId,oa.set(h,aa(oa.get(h)||null,e,n,o,s,d)),!0}return!1}function _u(e){var n=Rr(e.target);if(n!==null){var o=Nr(n);if(o!==null){if(n=o.tag,n===13){if(n=iu(o),n!==null){e.blockedOn=n,xu(e.priority,function(){vu(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=ll(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var s=new o.constructor(o.type,o);Sr=s,o.target.dispatchEvent(s),Sr=null}else return n=xa(o),n!==null&&al(n),e.blockedOn=o,!1;n.shift()}return!0}function bu(e,n,o){di(e)&&o.delete(n)}function Q0(){il=!1,Kn!==null&&di(Kn)&&(Kn=null),Qn!==null&&di(Qn)&&(Qn=null),Xn!==null&&di(Xn)&&(Xn=null),ra.forEach(bu),oa.forEach(bu)}function ia(e,n){e.blockedOn===n&&(e.blockedOn=null,il||(il=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Q0)))}function sa(e){function n(d){return ia(d,e)}if(0<ci.length){ia(ci[0],e);for(var o=1;o<ci.length;o++){var s=ci[o];s.blockedOn===e&&(s.blockedOn=null)}}for(Kn!==null&&ia(Kn,e),Qn!==null&&ia(Qn,e),Xn!==null&&ia(Xn,e),ra.forEach(n),oa.forEach(n),o=0;o<Jn.length;o++)s=Jn[o],s.blockedOn===e&&(s.blockedOn=null);for(;0<Jn.length&&(o=Jn[0],o.blockedOn===null);)_u(o),o.blockedOn===null&&Jn.shift()}var ro=A.ReactCurrentBatchConfig,ui=!0;function X0(e,n,o,s){var d=Fe,h=ro.transition;ro.transition=null;try{Fe=1,sl(e,n,o,s)}finally{Fe=d,ro.transition=h}}function J0(e,n,o,s){var d=Fe,h=ro.transition;ro.transition=null;try{Fe=4,sl(e,n,o,s)}finally{Fe=d,ro.transition=h}}function sl(e,n,o,s){if(ui){var d=ll(e,n,o,s);if(d===null)jl(e,n,s,hi,o),wu(e,s);else if(K0(d,e,n,o,s))s.stopPropagation();else if(wu(e,s),n&4&&-1<Z0.indexOf(e)){for(;d!==null;){var h=xa(d);if(h!==null&&gu(h),h=ll(e,n,o,s),h===null&&jl(e,n,s,hi,o),h===d)break;d=h}d!==null&&s.stopPropagation()}else jl(e,n,s,null,o)}}var hi=null;function ll(e,n,o,s){if(hi=null,e=Ko(s),e=Rr(e),e!==null)if(n=Nr(e),n===null)e=null;else if(o=n.tag,o===13){if(e=iu(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return hi=e,null}function ku(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B0()){case tl:return 1;case hu:return 4;case oi:case F0:return 16;case pu:return 536870912;default:return 16}default:return 16}}var er=null,cl=null,pi=null;function Cu(){if(pi)return pi;var e,n=cl,o=n.length,s,d="value"in er?er.value:er.textContent,h=d.length;for(e=0;e<o&&n[e]===d[e];e++);var v=o-e;for(s=1;s<=v&&n[o-s]===d[h-s];s++);return pi=d.slice(e,1<s?1-s:void 0)}function fi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function mi(){return!0}function ju(){return!1}function Gt(e){function n(o,s,d,h,v){this._reactName=o,this._targetInst=d,this.type=s,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var M in e)e.hasOwnProperty(M)&&(o=e[M],this[M]=o?o(h):h[M]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?mi:ju,this.isPropagationStopped=ju,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),n}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Gt(oo),la=D({},oo,{view:0,detail:0}),eg=Gt(la),ul,hl,ca,gi=D({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ca&&(ca&&e.type==="mousemove"?(ul=e.screenX-ca.screenX,hl=e.screenY-ca.screenY):hl=ul=0,ca=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:hl}}),Su=Gt(gi),tg=D({},gi,{dataTransfer:0}),ng=Gt(tg),rg=D({},la,{relatedTarget:0}),pl=Gt(rg),og=D({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=Gt(og),ig=D({},oo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=Gt(ig),lg=D({},oo,{data:0}),Nu=Gt(lg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ug[e])?!!n[e]:!1}function fl(){return hg}var pg=D({},la,{key:function(e){if(e.key){var n=cg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fl,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fg=Gt(pg),mg=D({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=Gt(mg),gg=D({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fl}),vg=Gt(gg),yg=D({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),xg=Gt(yg),wg=D({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_g=Gt(wg),bg=[9,13,27,32],ml=f&&"CompositionEvent"in window,da=null;f&&"documentMode"in document&&(da=document.documentMode);var kg=f&&"TextEvent"in window&&!da,Lu=f&&(!ml||da&&8<da&&11>=da),Mu=" ",$u=!1;function Iu(e,n){switch(e){case"keyup":return bg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ao=!1;function Cg(e,n){switch(e){case"compositionend":return Tu(n);case"keypress":return n.which!==32?null:($u=!0,Mu);case"textInput":return e=n.data,e===Mu&&$u?null:e;default:return null}}function jg(e,n){if(ao)return e==="compositionend"||!ml&&Iu(e,n)?(e=Cu(),pi=cl=er=null,ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lu&&n.locale!=="ko"?null:n.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sg[e.type]:n==="textarea"}function Eu(e,n,o,s){tu(s),n=_i(n,"onChange"),0<n.length&&(o=new dl("onChange","change",null,o,s),e.push({event:o,listeners:n}))}var ua=null,ha=null;function Ng(e){Ju(e,0)}function vi(e){var n=uo(e);if(xe(n))return e}function Rg(e,n){if(e==="change")return n}var Pu=!1;if(f){var gl;if(f){var vl="oninput"in document;if(!vl){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),vl=typeof zu.oninput=="function"}gl=vl}else gl=!1;Pu=gl&&(!document.documentMode||9<document.documentMode)}function Ou(){ua&&(ua.detachEvent("onpropertychange",Du),ha=ua=null)}function Du(e){if(e.propertyName==="value"&&vi(ha)){var n=[];Eu(n,ha,e,Ko(e)),au(Ng,n)}}function Lg(e,n,o){e==="focusin"?(Ou(),ua=n,ha=o,ua.attachEvent("onpropertychange",Du)):e==="focusout"&&Ou()}function Mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(ha)}function $g(e,n){if(e==="click")return vi(n)}function Ig(e,n){if(e==="input"||e==="change")return vi(n)}function Tg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var un=typeof Object.is=="function"?Object.is:Tg;function pa(e,n){if(un(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),s=Object.keys(n);if(o.length!==s.length)return!1;for(s=0;s<o.length;s++){var d=o[s];if(!m.call(n,d)||!un(e[d],n[d]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,n){var o=Bu(e);e=0;for(var s;o;){if(o.nodeType===3){if(s=e+o.textContent.length,e<=n&&s>=n)return{node:o,offset:n-e};e=s}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Bu(o)}}function Wu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hu(){for(var e=window,n=Ne();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Ne(e.document)}return n}function yl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ag(e){var n=Hu(),o=e.focusedElem,s=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&Wu(o.ownerDocument.documentElement,o)){if(s!==null&&yl(o)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=o.textContent.length,h=Math.min(s.start,d);s=s.end===void 0?h:Math.min(s.end,d),!e.extend&&h>s&&(d=s,s=h,h=d),d=Fu(o,h);var v=Fu(o,s);d&&v&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),h>s?(e.addRange(n),e.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Eg=f&&"documentMode"in document&&11>=document.documentMode,io=null,xl=null,fa=null,wl=!1;function qu(e,n,o){var s=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;wl||io==null||io!==Ne(s)||(s=io,"selectionStart"in s&&yl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),fa&&pa(fa,s)||(fa=s,s=_i(xl,"onSelect"),0<s.length&&(n=new dl("onSelect","select",null,n,o),e.push({event:n,listeners:s}),n.target=io)))}function yi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var so={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},_l={},Uu={};f&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function xi(e){if(_l[e])return _l[e];if(!so[e])return e;var n=so[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Uu)return _l[e]=n[o];return e}var Vu=xi("animationend"),Gu=xi("animationiteration"),Yu=xi("animationstart"),Zu=xi("transitionend"),Ku=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,n){Ku.set(e,n),u(n,[e])}for(var bl=0;bl<Qu.length;bl++){var kl=Qu[bl],Pg=kl.toLowerCase(),zg=kl[0].toUpperCase()+kl.slice(1);tr(Pg,"on"+zg)}tr(Vu,"onAnimationEnd"),tr(Gu,"onAnimationIteration"),tr(Yu,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Zu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function Xu(e,n,o){var s=e.type||"unknown-event";e.currentTarget=o,P0(s,n,void 0,e),e.currentTarget=null}function Ju(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var s=e[o],d=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var v=s.length-1;0<=v;v--){var M=s[v],O=M.instance,Y=M.currentTarget;if(M=M.listener,O!==h&&d.isPropagationStopped())break e;Xu(d,M,Y),h=O}else for(v=0;v<s.length;v++){if(M=s[v],O=M.instance,Y=M.currentTarget,M=M.listener,O!==h&&d.isPropagationStopped())break e;Xu(d,M,Y),h=O}}}if(ri)throw e=el,ri=!1,el=null,e}function Ye(e,n){var o=n[$l];o===void 0&&(o=n[$l]=new Set);var s=e+"__bubble";o.has(s)||(eh(n,e,2,!1),o.add(s))}function Cl(e,n,o){var s=0;n&&(s|=4),eh(o,e,s,n)}var wi="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[wi]){e[wi]=!0,l.forEach(function(o){o!=="selectionchange"&&(Og.has(o)||Cl(o,!1,e),Cl(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wi]||(n[wi]=!0,Cl("selectionchange",!1,n))}}function eh(e,n,o,s){switch(ku(n)){case 1:var d=X0;break;case 4:d=J0;break;default:d=sl}o=d.bind(null,n,o,e),d=void 0,!Js||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),s?d!==void 0?e.addEventListener(n,o,{capture:!0,passive:d}):e.addEventListener(n,o,!0):d!==void 0?e.addEventListener(n,o,{passive:d}):e.addEventListener(n,o,!1)}function jl(e,n,o,s,d){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var M=s.stateNode.containerInfo;if(M===d||M.nodeType===8&&M.parentNode===d)break;if(v===4)for(v=s.return;v!==null;){var O=v.tag;if((O===3||O===4)&&(O=v.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;v=v.return}for(;M!==null;){if(v=Rr(M),v===null)return;if(O=v.tag,O===5||O===6){s=h=v;continue e}M=M.parentNode}}s=s.return}au(function(){var Y=h,oe=Ko(o),ie=[];e:{var re=Ku.get(e);if(re!==void 0){var pe=dl,me=e;switch(e){case"keypress":if(fi(o)===0)break e;case"keydown":case"keyup":pe=fg;break;case"focusin":me="focus",pe=pl;break;case"focusout":me="blur",pe=pl;break;case"beforeblur":case"afterblur":pe=pl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=vg;break;case Vu:case Gu:case Yu:pe=ag;break;case Zu:pe=xg;break;case"scroll":pe=eg;break;case"wheel":pe=_g;break;case"copy":case"cut":case"paste":pe=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Ru}var ve=(n&4)!==0,it=!ve&&e==="scroll",q=ve?re!==null?re+"Capture":null:re;ve=[];for(var W=Y,U;W!==null;){U=W;var le=U.stateNode;if(U.tag===5&&le!==null&&(U=le,q!==null&&(le=Xo(W,q),le!=null&&ve.push(va(W,le,U)))),it)break;W=W.return}0<ve.length&&(re=new pe(re,me,null,o,oe),ie.push({event:re,listeners:ve}))}}if((n&7)===0){e:{if(re=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",re&&o!==Sr&&(me=o.relatedTarget||o.fromElement)&&(Rr(me)||me[An]))break e;if((pe||re)&&(re=oe.window===oe?oe:(re=oe.ownerDocument)?re.defaultView||re.parentWindow:window,pe?(me=o.relatedTarget||o.toElement,pe=Y,me=me?Rr(me):null,me!==null&&(it=Nr(me),me!==it||me.tag!==5&&me.tag!==6)&&(me=null)):(pe=null,me=Y),pe!==me)){if(ve=Su,le="onMouseLeave",q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ve=Ru,le="onPointerLeave",q="onPointerEnter",W="pointer"),it=pe==null?re:uo(pe),U=me==null?re:uo(me),re=new ve(le,W+"leave",pe,o,oe),re.target=it,re.relatedTarget=U,le=null,Rr(oe)===Y&&(ve=new ve(q,W+"enter",me,o,oe),ve.target=U,ve.relatedTarget=it,le=ve),it=le,pe&&me)t:{for(ve=pe,q=me,W=0,U=ve;U;U=lo(U))W++;for(U=0,le=q;le;le=lo(le))U++;for(;0<W-U;)ve=lo(ve),W--;for(;0<U-W;)q=lo(q),U--;for(;W--;){if(ve===q||q!==null&&ve===q.alternate)break t;ve=lo(ve),q=lo(q)}ve=null}else ve=null;pe!==null&&th(ie,re,pe,ve,!1),me!==null&&it!==null&&th(ie,it,me,ve,!0)}}e:{if(re=Y?uo(Y):window,pe=re.nodeName&&re.nodeName.toLowerCase(),pe==="select"||pe==="input"&&re.type==="file")var ye=Rg;else if(Au(re))if(Pu)ye=Ig;else{ye=Mg;var we=Lg}else(pe=re.nodeName)&&pe.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(ye=$g);if(ye&&(ye=ye(e,Y))){Eu(ie,ye,o,oe);break e}we&&we(e,re,Y),e==="focusout"&&(we=re._wrapperState)&&we.controlled&&re.type==="number"&&He(re,"number",re.value)}switch(we=Y?uo(Y):window,e){case"focusin":(Au(we)||we.contentEditable==="true")&&(io=we,xl=Y,fa=null);break;case"focusout":fa=xl=io=null;break;case"mousedown":wl=!0;break;case"contextmenu":case"mouseup":case"dragend":wl=!1,qu(ie,o,oe);break;case"selectionchange":if(Eg)break;case"keydown":case"keyup":qu(ie,o,oe)}var _e;if(ml)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else ao?Iu(e,o)&&(ke="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(ke="onCompositionStart");ke&&(Lu&&o.locale!=="ko"&&(ao||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&ao&&(_e=Cu()):(er=oe,cl="value"in er?er.value:er.textContent,ao=!0)),we=_i(Y,ke),0<we.length&&(ke=new Nu(ke,e,null,o,oe),ie.push({event:ke,listeners:we}),_e?ke.data=_e:(_e=Tu(o),_e!==null&&(ke.data=_e)))),(_e=kg?Cg(e,o):jg(e,o))&&(Y=_i(Y,"onBeforeInput"),0<Y.length&&(oe=new Nu("onBeforeInput","beforeinput",null,o,oe),ie.push({event:oe,listeners:Y}),oe.data=_e))}Ju(ie,n)})}function va(e,n,o){return{instance:e,listener:n,currentTarget:o}}function _i(e,n){for(var o=n+"Capture",s=[];e!==null;){var d=e,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Xo(e,o),h!=null&&s.unshift(va(e,h,d)),h=Xo(e,n),h!=null&&s.push(va(e,h,d))),e=e.return}return s}function lo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function th(e,n,o,s,d){for(var h=n._reactName,v=[];o!==null&&o!==s;){var M=o,O=M.alternate,Y=M.stateNode;if(O!==null&&O===s)break;M.tag===5&&Y!==null&&(M=Y,d?(O=Xo(o,h),O!=null&&v.unshift(va(o,O,M))):d||(O=Xo(o,h),O!=null&&v.push(va(o,O,M)))),o=o.return}v.length!==0&&e.push({event:n,listeners:v})}var Dg=/\r\n?/g,Bg=/\u0000|\uFFFD/g;function nh(e){return(typeof e=="string"?e:""+e).replace(Dg,`
`).replace(Bg,"")}function bi(e,n,o){if(n=nh(n),nh(e)!==n&&o)throw Error(i(425))}function ki(){}var Sl=null,Nl=null;function Rl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Fg=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(e){return rh.resolve(null).then(e).catch(Hg)}:Ll;function Hg(e){setTimeout(function(){throw e})}function Ml(e,n){var o=n,s=0;do{var d=o.nextSibling;if(e.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(s===0){e.removeChild(d),sa(n);return}s--}else o!=="$"&&o!=="$?"&&o!=="$!"||s++;o=d}while(o);sa(n)}function nr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function oh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var co=Math.random().toString(36).slice(2),Cn="__reactFiber$"+co,ya="__reactProps$"+co,An="__reactContainer$"+co,$l="__reactEvents$"+co,qg="__reactListeners$"+co,Ug="__reactHandles$"+co;function Rr(e){var n=e[Cn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[An]||o[Cn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=oh(e);e!==null;){if(o=e[Cn])return o;e=oh(e)}return n}e=o,o=e.parentNode}return null}function xa(e){return e=e[Cn]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function uo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ci(e){return e[ya]||null}var Il=[],ho=-1;function rr(e){return{current:e}}function Ze(e){0>ho||(e.current=Il[ho],Il[ho]=null,ho--)}function Ue(e,n){ho++,Il[ho]=e.current,e.current=n}var or={},jt=rr(or),zt=rr(!1),Lr=or;function po(e,n){var o=e.type.contextTypes;if(!o)return or;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=n[h];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function Ot(e){return e=e.childContextTypes,e!=null}function ji(){Ze(zt),Ze(jt)}function ah(e,n,o){if(jt.current!==or)throw Error(i(168));Ue(jt,n),Ue(zt,o)}function ih(e,n,o){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return o;s=s.getChildContext();for(var d in s)if(!(d in n))throw Error(i(108,de(e)||"Unknown",d));return D({},o,s)}function Si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,Lr=jt.current,Ue(jt,e),Ue(zt,zt.current),!0}function sh(e,n,o){var s=e.stateNode;if(!s)throw Error(i(169));o?(e=ih(e,n,Lr),s.__reactInternalMemoizedMergedChildContext=e,Ze(zt),Ze(jt),Ue(jt,e)):Ze(zt),Ue(zt,o)}var En=null,Ni=!1,Tl=!1;function lh(e){En===null?En=[e]:En.push(e)}function Vg(e){Ni=!0,lh(e)}function ar(){if(!Tl&&En!==null){Tl=!0;var e=0,n=Fe;try{var o=En;for(Fe=1;e<o.length;e++){var s=o[e];do s=s(!0);while(s!==null)}En=null,Ni=!1}catch(d){throw En!==null&&(En=En.slice(e+1)),du(tl,ar),d}finally{Fe=n,Tl=!1}}return null}var fo=[],mo=0,Ri=null,Li=0,tn=[],nn=0,Mr=null,Pn=1,zn="";function $r(e,n){fo[mo++]=Li,fo[mo++]=Ri,Ri=e,Li=n}function ch(e,n,o){tn[nn++]=Pn,tn[nn++]=zn,tn[nn++]=Mr,Mr=e;var s=Pn;e=zn;var d=32-dn(s)-1;s&=~(1<<d),o+=1;var h=32-dn(n)+d;if(30<h){var v=d-d%5;h=(s&(1<<v)-1).toString(32),s>>=v,d-=v,Pn=1<<32-dn(n)+d|o<<d|s,zn=h+e}else Pn=1<<h|o<<d|s,zn=e}function Al(e){e.return!==null&&($r(e,1),ch(e,1,0))}function El(e){for(;e===Ri;)Ri=fo[--mo],fo[mo]=null,Li=fo[--mo],fo[mo]=null;for(;e===Mr;)Mr=tn[--nn],tn[nn]=null,zn=tn[--nn],tn[nn]=null,Pn=tn[--nn],tn[nn]=null}var Yt=null,Zt=null,Je=!1,hn=null;function dh(e,n){var o=sn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function uh(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Yt=e,Zt=nr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Yt=e,Zt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Mr!==null?{id:Pn,overflow:zn}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=sn(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,Yt=e,Zt=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zl(e){if(Je){var n=Zt;if(n){var o=n;if(!uh(e,n)){if(Pl(e))throw Error(i(418));n=nr(o.nextSibling);var s=Yt;n&&uh(e,n)?dh(s,o):(e.flags=e.flags&-4097|2,Je=!1,Yt=e)}}else{if(Pl(e))throw Error(i(418));e.flags=e.flags&-4097|2,Je=!1,Yt=e}}}function hh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Yt=e}function Mi(e){if(e!==Yt)return!1;if(!Je)return hh(e),Je=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Rl(e.type,e.memoizedProps)),n&&(n=Zt)){if(Pl(e))throw ph(),Error(i(418));for(;n;)dh(e,n),n=nr(n.nextSibling)}if(hh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){Zt=nr(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}Zt=null}}else Zt=Yt?nr(e.stateNode.nextSibling):null;return!0}function ph(){for(var e=Zt;e;)e=nr(e.nextSibling)}function go(){Zt=Yt=null,Je=!1}function Ol(e){hn===null?hn=[e]:hn.push(e)}var Gg=A.ReactCurrentBatchConfig;function wa(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var s=o.stateNode}if(!s)throw Error(i(147,e));var d=s,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(v){var M=d.refs;v===null?delete M[h]:M[h]=v},n._stringRef=h,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function $i(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function fh(e){var n=e._init;return n(e._payload)}function mh(e){function n(q,W){if(e){var U=q.deletions;U===null?(q.deletions=[W],q.flags|=16):U.push(W)}}function o(q,W){if(!e)return null;for(;W!==null;)n(q,W),W=W.sibling;return null}function s(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function d(q,W){return q=pr(q,W),q.index=0,q.sibling=null,q}function h(q,W,U){return q.index=U,e?(U=q.alternate,U!==null?(U=U.index,U<W?(q.flags|=2,W):U):(q.flags|=2,W)):(q.flags|=1048576,W)}function v(q){return e&&q.alternate===null&&(q.flags|=2),q}function M(q,W,U,le){return W===null||W.tag!==6?(W=Lc(U,q.mode,le),W.return=q,W):(W=d(W,U),W.return=q,W)}function O(q,W,U,le){var ye=U.type;return ye===P?oe(q,W,U.props.children,le,U.key):W!==null&&(W.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===ce&&fh(ye)===W.type)?(le=d(W,U.props),le.ref=wa(q,W,U),le.return=q,le):(le=ts(U.type,U.key,U.props,null,q.mode,le),le.ref=wa(q,W,U),le.return=q,le)}function Y(q,W,U,le){return W===null||W.tag!==4||W.stateNode.containerInfo!==U.containerInfo||W.stateNode.implementation!==U.implementation?(W=Mc(U,q.mode,le),W.return=q,W):(W=d(W,U.children||[]),W.return=q,W)}function oe(q,W,U,le,ye){return W===null||W.tag!==7?(W=Dr(U,q.mode,le,ye),W.return=q,W):(W=d(W,U),W.return=q,W)}function ie(q,W,U){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Lc(""+W,q.mode,U),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case $:return U=ts(W.type,W.key,W.props,null,q.mode,U),U.ref=wa(q,null,W),U.return=q,U;case F:return W=Mc(W,q.mode,U),W.return=q,W;case ce:var le=W._init;return ie(q,le(W._payload),U)}if(rt(W)||z(W))return W=Dr(W,q.mode,U,null),W.return=q,W;$i(q,W)}return null}function re(q,W,U,le){var ye=W!==null?W.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ye!==null?null:M(q,W,""+U,le);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case $:return U.key===ye?O(q,W,U,le):null;case F:return U.key===ye?Y(q,W,U,le):null;case ce:return ye=U._init,re(q,W,ye(U._payload),le)}if(rt(U)||z(U))return ye!==null?null:oe(q,W,U,le,null);$i(q,U)}return null}function pe(q,W,U,le,ye){if(typeof le=="string"&&le!==""||typeof le=="number")return q=q.get(U)||null,M(W,q,""+le,ye);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case $:return q=q.get(le.key===null?U:le.key)||null,O(W,q,le,ye);case F:return q=q.get(le.key===null?U:le.key)||null,Y(W,q,le,ye);case ce:var we=le._init;return pe(q,W,U,we(le._payload),ye)}if(rt(le)||z(le))return q=q.get(U)||null,oe(W,q,le,ye,null);$i(W,le)}return null}function me(q,W,U,le){for(var ye=null,we=null,_e=W,ke=W=0,vt=null;_e!==null&&ke<U.length;ke++){_e.index>ke?(vt=_e,_e=null):vt=_e.sibling;var Ee=re(q,_e,U[ke],le);if(Ee===null){_e===null&&(_e=vt);break}e&&_e&&Ee.alternate===null&&n(q,_e),W=h(Ee,W,ke),we===null?ye=Ee:we.sibling=Ee,we=Ee,_e=vt}if(ke===U.length)return o(q,_e),Je&&$r(q,ke),ye;if(_e===null){for(;ke<U.length;ke++)_e=ie(q,U[ke],le),_e!==null&&(W=h(_e,W,ke),we===null?ye=_e:we.sibling=_e,we=_e);return Je&&$r(q,ke),ye}for(_e=s(q,_e);ke<U.length;ke++)vt=pe(_e,q,ke,U[ke],le),vt!==null&&(e&&vt.alternate!==null&&_e.delete(vt.key===null?ke:vt.key),W=h(vt,W,ke),we===null?ye=vt:we.sibling=vt,we=vt);return e&&_e.forEach(function(fr){return n(q,fr)}),Je&&$r(q,ke),ye}function ve(q,W,U,le){var ye=z(U);if(typeof ye!="function")throw Error(i(150));if(U=ye.call(U),U==null)throw Error(i(151));for(var we=ye=null,_e=W,ke=W=0,vt=null,Ee=U.next();_e!==null&&!Ee.done;ke++,Ee=U.next()){_e.index>ke?(vt=_e,_e=null):vt=_e.sibling;var fr=re(q,_e,Ee.value,le);if(fr===null){_e===null&&(_e=vt);break}e&&_e&&fr.alternate===null&&n(q,_e),W=h(fr,W,ke),we===null?ye=fr:we.sibling=fr,we=fr,_e=vt}if(Ee.done)return o(q,_e),Je&&$r(q,ke),ye;if(_e===null){for(;!Ee.done;ke++,Ee=U.next())Ee=ie(q,Ee.value,le),Ee!==null&&(W=h(Ee,W,ke),we===null?ye=Ee:we.sibling=Ee,we=Ee);return Je&&$r(q,ke),ye}for(_e=s(q,_e);!Ee.done;ke++,Ee=U.next())Ee=pe(_e,q,ke,Ee.value,le),Ee!==null&&(e&&Ee.alternate!==null&&_e.delete(Ee.key===null?ke:Ee.key),W=h(Ee,W,ke),we===null?ye=Ee:we.sibling=Ee,we=Ee);return e&&_e.forEach(function(S2){return n(q,S2)}),Je&&$r(q,ke),ye}function it(q,W,U,le){if(typeof U=="object"&&U!==null&&U.type===P&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case $:e:{for(var ye=U.key,we=W;we!==null;){if(we.key===ye){if(ye=U.type,ye===P){if(we.tag===7){o(q,we.sibling),W=d(we,U.props.children),W.return=q,q=W;break e}}else if(we.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===ce&&fh(ye)===we.type){o(q,we.sibling),W=d(we,U.props),W.ref=wa(q,we,U),W.return=q,q=W;break e}o(q,we);break}else n(q,we);we=we.sibling}U.type===P?(W=Dr(U.props.children,q.mode,le,U.key),W.return=q,q=W):(le=ts(U.type,U.key,U.props,null,q.mode,le),le.ref=wa(q,W,U),le.return=q,q=le)}return v(q);case F:e:{for(we=U.key;W!==null;){if(W.key===we)if(W.tag===4&&W.stateNode.containerInfo===U.containerInfo&&W.stateNode.implementation===U.implementation){o(q,W.sibling),W=d(W,U.children||[]),W.return=q,q=W;break e}else{o(q,W);break}else n(q,W);W=W.sibling}W=Mc(U,q.mode,le),W.return=q,q=W}return v(q);case ce:return we=U._init,it(q,W,we(U._payload),le)}if(rt(U))return me(q,W,U,le);if(z(U))return ve(q,W,U,le);$i(q,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,W!==null&&W.tag===6?(o(q,W.sibling),W=d(W,U),W.return=q,q=W):(o(q,W),W=Lc(U,q.mode,le),W.return=q,q=W),v(q)):o(q,W)}return it}var vo=mh(!0),gh=mh(!1),Ii=rr(null),Ti=null,yo=null,Dl=null;function Bl(){Dl=yo=Ti=null}function Fl(e){var n=Ii.current;Ze(Ii),e._currentValue=n}function Wl(e,n,o){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===o)break;e=e.return}}function xo(e,n){Ti=e,Dl=yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Dt=!0),e.firstContext=null)}function rn(e){var n=e._currentValue;if(Dl!==e)if(e={context:e,memoizedValue:n,next:null},yo===null){if(Ti===null)throw Error(i(308));yo=e,Ti.dependencies={lanes:0,firstContext:e}}else yo=yo.next=e;return n}var Ir=null;function Hl(e){Ir===null?Ir=[e]:Ir.push(e)}function vh(e,n,o,s){var d=n.interleaved;return d===null?(o.next=o,Hl(n)):(o.next=d.next,d.next=o),n.interleaved=o,On(e,s)}function On(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var ir=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sr(e,n,o){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ae&2)!==0){var d=s.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),s.pending=n,On(e,o)}return d=s.interleaved,d===null?(n.next=n,Hl(s)):(n.next=d.next,d.next=n),s.interleaved=n,On(e,o)}function Ai(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,ol(e,o)}}function xh(e,n){var o=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,o===s)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=v:h=h.next=v,o=o.next}while(o!==null);h===null?d=h=n:h=h.next=n}else d=h=n;o={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:s.shared,effects:s.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Ei(e,n,o,s){var d=e.updateQueue;ir=!1;var h=d.firstBaseUpdate,v=d.lastBaseUpdate,M=d.shared.pending;if(M!==null){d.shared.pending=null;var O=M,Y=O.next;O.next=null,v===null?h=Y:v.next=Y,v=O;var oe=e.alternate;oe!==null&&(oe=oe.updateQueue,M=oe.lastBaseUpdate,M!==v&&(M===null?oe.firstBaseUpdate=Y:M.next=Y,oe.lastBaseUpdate=O))}if(h!==null){var ie=d.baseState;v=0,oe=Y=O=null,M=h;do{var re=M.lane,pe=M.eventTime;if((s&re)===re){oe!==null&&(oe=oe.next={eventTime:pe,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var me=e,ve=M;switch(re=n,pe=o,ve.tag){case 1:if(me=ve.payload,typeof me=="function"){ie=me.call(pe,ie,re);break e}ie=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ve.payload,re=typeof me=="function"?me.call(pe,ie,re):me,re==null)break e;ie=D({},ie,re);break e;case 2:ir=!0}}M.callback!==null&&M.lane!==0&&(e.flags|=64,re=d.effects,re===null?d.effects=[M]:re.push(M))}else pe={eventTime:pe,lane:re,tag:M.tag,payload:M.payload,callback:M.callback,next:null},oe===null?(Y=oe=pe,O=ie):oe=oe.next=pe,v|=re;if(M=M.next,M===null){if(M=d.shared.pending,M===null)break;re=M,M=re.next,re.next=null,d.lastBaseUpdate=re,d.shared.pending=null}}while(!0);if(oe===null&&(O=ie),d.baseState=O,d.firstBaseUpdate=Y,d.lastBaseUpdate=oe,n=d.shared.interleaved,n!==null){d=n;do v|=d.lane,d=d.next;while(d!==n)}else h===null&&(d.shared.lanes=0);Er|=v,e.lanes=v,e.memoizedState=ie}}function wh(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],d=s.callback;if(d!==null){if(s.callback=null,s=o,typeof d!="function")throw Error(i(191,d));d.call(s)}}}var _a={},jn=rr(_a),ba=rr(_a),ka=rr(_a);function Tr(e){if(e===_a)throw Error(i(174));return e}function Ul(e,n){switch(Ue(ka,n),Ue(ba,e),Ue(jn,_a),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:bn(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=bn(n,e)}Ze(jn),Ue(jn,n)}function wo(){Ze(jn),Ze(ba),Ze(ka)}function _h(e){Tr(ka.current);var n=Tr(jn.current),o=bn(n,e.type);n!==o&&(Ue(ba,e),Ue(jn,o))}function Vl(e){ba.current===e&&(Ze(jn),Ze(ba))}var tt=rr(0);function Pi(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gl=[];function Yl(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var zi=A.ReactCurrentDispatcher,Zl=A.ReactCurrentBatchConfig,Ar=0,nt=null,ht=null,mt=null,Oi=!1,Ca=!1,ja=0,Yg=0;function St(){throw Error(i(321))}function Kl(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!un(e[o],n[o]))return!1;return!0}function Ql(e,n,o,s,d,h){if(Ar=h,nt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,zi.current=e===null||e.memoizedState===null?Xg:Jg,e=o(s,d),Ca){h=0;do{if(Ca=!1,ja=0,25<=h)throw Error(i(301));h+=1,mt=ht=null,n.updateQueue=null,zi.current=e2,e=o(s,d)}while(Ca)}if(zi.current=Fi,n=ht!==null&&ht.next!==null,Ar=0,mt=ht=nt=null,Oi=!1,n)throw Error(i(300));return e}function Xl(){var e=ja!==0;return ja=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?nt.memoizedState=mt=e:mt=mt.next=e,mt}function on(){if(ht===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var n=mt===null?nt.memoizedState:mt.next;if(n!==null)mt=n,ht=e;else{if(e===null)throw Error(i(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},mt===null?nt.memoizedState=mt=e:mt=mt.next=e}return mt}function Sa(e,n){return typeof n=="function"?n(e):n}function Jl(e){var n=on(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=ht,d=s.baseQueue,h=o.pending;if(h!==null){if(d!==null){var v=d.next;d.next=h.next,h.next=v}s.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,s=s.baseState;var M=v=null,O=null,Y=h;do{var oe=Y.lane;if((Ar&oe)===oe)O!==null&&(O=O.next={lane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),s=Y.hasEagerState?Y.eagerState:e(s,Y.action);else{var ie={lane:oe,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null};O===null?(M=O=ie,v=s):O=O.next=ie,nt.lanes|=oe,Er|=oe}Y=Y.next}while(Y!==null&&Y!==h);O===null?v=s:O.next=M,un(s,n.memoizedState)||(Dt=!0),n.memoizedState=s,n.baseState=v,n.baseQueue=O,o.lastRenderedState=s}if(e=o.interleaved,e!==null){d=e;do h=d.lane,nt.lanes|=h,Er|=h,d=d.next;while(d!==e)}else d===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function ec(e){var n=on(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=o.dispatch,d=o.pending,h=n.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do h=e(h,v.action),v=v.next;while(v!==d);un(h,n.memoizedState)||(Dt=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),o.lastRenderedState=h}return[h,s]}function bh(){}function kh(e,n){var o=nt,s=on(),d=n(),h=!un(s.memoizedState,d);if(h&&(s.memoizedState=d,Dt=!0),s=s.queue,tc(Sh.bind(null,o,s,e),[e]),s.getSnapshot!==n||h||mt!==null&&mt.memoizedState.tag&1){if(o.flags|=2048,Na(9,jh.bind(null,o,s,d,n),void 0,null),gt===null)throw Error(i(349));(Ar&30)!==0||Ch(o,n,d)}return d}function Ch(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=nt.updateQueue,n===null?(n={lastEffect:null,stores:null},nt.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function jh(e,n,o,s){n.value=o,n.getSnapshot=s,Nh(n)&&Rh(e)}function Sh(e,n,o){return o(function(){Nh(n)&&Rh(e)})}function Nh(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!un(e,o)}catch{return!0}}function Rh(e){var n=On(e,1);n!==null&&gn(n,e,1,-1)}function Lh(e){var n=Sn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n.queue=e,e=e.dispatch=Qg.bind(null,nt,e),[n.memoizedState,e]}function Na(e,n,o,s){return e={tag:e,create:n,destroy:o,deps:s,next:null},n=nt.updateQueue,n===null?(n={lastEffect:null,stores:null},nt.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(s=o.next,o.next=e,e.next=s,n.lastEffect=e)),e}function Mh(){return on().memoizedState}function Di(e,n,o,s){var d=Sn();nt.flags|=e,d.memoizedState=Na(1|n,o,void 0,s===void 0?null:s)}function Bi(e,n,o,s){var d=on();s=s===void 0?null:s;var h=void 0;if(ht!==null){var v=ht.memoizedState;if(h=v.destroy,s!==null&&Kl(s,v.deps)){d.memoizedState=Na(n,o,h,s);return}}nt.flags|=e,d.memoizedState=Na(1|n,o,h,s)}function $h(e,n){return Di(8390656,8,e,n)}function tc(e,n){return Bi(2048,8,e,n)}function Ih(e,n){return Bi(4,2,e,n)}function Th(e,n){return Bi(4,4,e,n)}function Ah(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Eh(e,n,o){return o=o!=null?o.concat([e]):null,Bi(4,4,Ah.bind(null,n,e),o)}function nc(){}function Ph(e,n){var o=on();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&Kl(n,s[1])?s[0]:(o.memoizedState=[e,n],e)}function zh(e,n){var o=on();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&Kl(n,s[1])?s[0]:(e=e(),o.memoizedState=[e,n],e)}function Oh(e,n,o){return(Ar&21)===0?(e.baseState&&(e.baseState=!1,Dt=!0),e.memoizedState=o):(un(o,n)||(o=fu(),nt.lanes|=o,Er|=o,e.baseState=!0),n)}function Zg(e,n){var o=Fe;Fe=o!==0&&4>o?o:4,e(!0);var s=Zl.transition;Zl.transition={};try{e(!1),n()}finally{Fe=o,Zl.transition=s}}function Dh(){return on().memoizedState}function Kg(e,n,o){var s=ur(e);if(o={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null},Bh(e))Fh(n,o);else if(o=vh(e,n,o,s),o!==null){var d=Et();gn(o,e,s,d),Wh(o,n,s)}}function Qg(e,n,o){var s=ur(e),d={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null};if(Bh(e))Fh(n,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,M=h(v,o);if(d.hasEagerState=!0,d.eagerState=M,un(M,v)){var O=n.interleaved;O===null?(d.next=d,Hl(n)):(d.next=O.next,O.next=d),n.interleaved=d;return}}catch{}finally{}o=vh(e,n,d,s),o!==null&&(d=Et(),gn(o,e,s,d),Wh(o,n,s))}}function Bh(e){var n=e.alternate;return e===nt||n!==null&&n===nt}function Fh(e,n){Ca=Oi=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function Wh(e,n,o){if((o&4194240)!==0){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,ol(e,o)}}var Fi={readContext:rn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},Xg={readContext:rn,useCallback:function(e,n){return Sn().memoizedState=[e,n===void 0?null:n],e},useContext:rn,useEffect:$h,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Di(4194308,4,Ah.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Di(4194308,4,e,n)},useInsertionEffect:function(e,n){return Di(4,2,e,n)},useMemo:function(e,n){var o=Sn();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var s=Sn();return n=o!==void 0?o(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Kg.bind(null,nt,e),[s.memoizedState,e]},useRef:function(e){var n=Sn();return e={current:e},n.memoizedState=e},useState:Lh,useDebugValue:nc,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=Lh(!1),n=e[0];return e=Zg.bind(null,e[1]),Sn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var s=nt,d=Sn();if(Je){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),gt===null)throw Error(i(349));(Ar&30)!==0||Ch(s,n,o)}d.memoizedState=o;var h={value:o,getSnapshot:n};return d.queue=h,$h(Sh.bind(null,s,h,e),[e]),s.flags|=2048,Na(9,jh.bind(null,s,h,o,n),void 0,null),o},useId:function(){var e=Sn(),n=gt.identifierPrefix;if(Je){var o=zn,s=Pn;o=(s&~(1<<32-dn(s)-1)).toString(32)+o,n=":"+n+"R"+o,o=ja++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=Yg++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Jg={readContext:rn,useCallback:Ph,useContext:rn,useEffect:tc,useImperativeHandle:Eh,useInsertionEffect:Ih,useLayoutEffect:Th,useMemo:zh,useReducer:Jl,useRef:Mh,useState:function(){return Jl(Sa)},useDebugValue:nc,useDeferredValue:function(e){var n=on();return Oh(n,ht.memoizedState,e)},useTransition:function(){var e=Jl(Sa)[0],n=on().memoizedState;return[e,n]},useMutableSource:bh,useSyncExternalStore:kh,useId:Dh,unstable_isNewReconciler:!1},e2={readContext:rn,useCallback:Ph,useContext:rn,useEffect:tc,useImperativeHandle:Eh,useInsertionEffect:Ih,useLayoutEffect:Th,useMemo:zh,useReducer:ec,useRef:Mh,useState:function(){return ec(Sa)},useDebugValue:nc,useDeferredValue:function(e){var n=on();return ht===null?n.memoizedState=e:Oh(n,ht.memoizedState,e)},useTransition:function(){var e=ec(Sa)[0],n=on().memoizedState;return[e,n]},useMutableSource:bh,useSyncExternalStore:kh,useId:Dh,unstable_isNewReconciler:!1};function pn(e,n){if(e&&e.defaultProps){n=D({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function rc(e,n,o,s){n=e.memoizedState,o=o(s,n),o=o==null?n:D({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Wi={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var s=Et(),d=ur(e),h=Dn(s,d);h.payload=n,o!=null&&(h.callback=o),n=sr(e,h,d),n!==null&&(gn(n,e,d,s),Ai(n,e,d))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var s=Et(),d=ur(e),h=Dn(s,d);h.tag=1,h.payload=n,o!=null&&(h.callback=o),n=sr(e,h,d),n!==null&&(gn(n,e,d,s),Ai(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=Et(),s=ur(e),d=Dn(o,s);d.tag=2,n!=null&&(d.callback=n),n=sr(e,d,s),n!==null&&(gn(n,e,s,o),Ai(n,e,s))}};function Hh(e,n,o,s,d,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,v):n.prototype&&n.prototype.isPureReactComponent?!pa(o,s)||!pa(d,h):!0}function qh(e,n,o){var s=!1,d=or,h=n.contextType;return typeof h=="object"&&h!==null?h=rn(h):(d=Ot(n)?Lr:jt.current,s=n.contextTypes,h=(s=s!=null)?po(e,d):or),n=new n(o,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Wi,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=h),n}function Uh(e,n,o,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,s),n.state!==e&&Wi.enqueueReplaceState(n,n.state,null)}function oc(e,n,o,s){var d=e.stateNode;d.props=o,d.state=e.memoizedState,d.refs={},ql(e);var h=n.contextType;typeof h=="object"&&h!==null?d.context=rn(h):(h=Ot(n)?Lr:jt.current,d.context=po(e,h)),d.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(rc(e,n,h,o),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Wi.enqueueReplaceState(d,d.state,null),Ei(e,o,d,s),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function _o(e,n){try{var o="",s=n;do o+=E(s),s=s.return;while(s);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:d,digest:null}}function ac(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function ic(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var t2=typeof WeakMap=="function"?WeakMap:Map;function Vh(e,n,o){o=Dn(-1,o),o.tag=3,o.payload={element:null};var s=n.value;return o.callback=function(){Zi||(Zi=!0,_c=s),ic(e,n)},o}function Gh(e,n,o){o=Dn(-1,o),o.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var d=n.value;o.payload=function(){return s(d)},o.callback=function(){ic(e,n)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){ic(e,n),typeof s!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),o}function Yh(e,n,o){var s=e.pingCache;if(s===null){s=e.pingCache=new t2;var d=new Set;s.set(n,d)}else d=s.get(n),d===void 0&&(d=new Set,s.set(n,d));d.has(o)||(d.add(o),e=m2.bind(null,e,n,o),n.then(e,e))}function Zh(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Kh(e,n,o,s,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Dn(-1,1),n.tag=2,sr(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var n2=A.ReactCurrentOwner,Dt=!1;function At(e,n,o,s){n.child=e===null?gh(n,null,o,s):vo(n,e.child,o,s)}function Qh(e,n,o,s,d){o=o.render;var h=n.ref;return xo(n,d),s=Ql(e,n,o,s,h,d),o=Xl(),e!==null&&!Dt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,Bn(e,n,d)):(Je&&o&&Al(n),n.flags|=1,At(e,n,s,d),n.child)}function Xh(e,n,o,s,d){if(e===null){var h=o.type;return typeof h=="function"&&!Rc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=h,Jh(e,n,h,s,d)):(e=ts(o.type,null,s,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,(e.lanes&d)===0){var v=h.memoizedProps;if(o=o.compare,o=o!==null?o:pa,o(v,s)&&e.ref===n.ref)return Bn(e,n,d)}return n.flags|=1,e=pr(h,s),e.ref=n.ref,e.return=n,n.child=e}function Jh(e,n,o,s,d){if(e!==null){var h=e.memoizedProps;if(pa(h,s)&&e.ref===n.ref)if(Dt=!1,n.pendingProps=s=h,(e.lanes&d)!==0)(e.flags&131072)!==0&&(Dt=!0);else return n.lanes=e.lanes,Bn(e,n,d)}return sc(e,n,o,s,d)}function ep(e,n,o){var s=n.pendingProps,d=s.children,h=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(ko,Kt),Kt|=o;else{if((o&1073741824)===0)return e=h!==null?h.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ue(ko,Kt),Kt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=h!==null?h.baseLanes:o,Ue(ko,Kt),Kt|=s}else h!==null?(s=h.baseLanes|o,n.memoizedState=null):s=o,Ue(ko,Kt),Kt|=s;return At(e,n,d,o),n.child}function tp(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function sc(e,n,o,s,d){var h=Ot(o)?Lr:jt.current;return h=po(n,h),xo(n,d),o=Ql(e,n,o,s,h,d),s=Xl(),e!==null&&!Dt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,Bn(e,n,d)):(Je&&s&&Al(n),n.flags|=1,At(e,n,o,d),n.child)}function np(e,n,o,s,d){if(Ot(o)){var h=!0;Si(n)}else h=!1;if(xo(n,d),n.stateNode===null)qi(e,n),qh(n,o,s),oc(n,o,s,d),s=!0;else if(e===null){var v=n.stateNode,M=n.memoizedProps;v.props=M;var O=v.context,Y=o.contextType;typeof Y=="object"&&Y!==null?Y=rn(Y):(Y=Ot(o)?Lr:jt.current,Y=po(n,Y));var oe=o.getDerivedStateFromProps,ie=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function";ie||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==s||O!==Y)&&Uh(n,v,s,Y),ir=!1;var re=n.memoizedState;v.state=re,Ei(n,s,v,d),O=n.memoizedState,M!==s||re!==O||zt.current||ir?(typeof oe=="function"&&(rc(n,o,oe,s),O=n.memoizedState),(M=ir||Hh(n,o,M,s,re,O,Y))?(ie||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=O),v.props=s,v.state=O,v.context=Y,s=M):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{v=n.stateNode,yh(e,n),M=n.memoizedProps,Y=n.type===n.elementType?M:pn(n.type,M),v.props=Y,ie=n.pendingProps,re=v.context,O=o.contextType,typeof O=="object"&&O!==null?O=rn(O):(O=Ot(o)?Lr:jt.current,O=po(n,O));var pe=o.getDerivedStateFromProps;(oe=typeof pe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==ie||re!==O)&&Uh(n,v,s,O),ir=!1,re=n.memoizedState,v.state=re,Ei(n,s,v,d);var me=n.memoizedState;M!==ie||re!==me||zt.current||ir?(typeof pe=="function"&&(rc(n,o,pe,s),me=n.memoizedState),(Y=ir||Hh(n,o,Y,s,re,me,O)||!1)?(oe||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(s,me,O),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(s,me,O)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=me),v.props=s,v.state=me,v.context=O,s=Y):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),s=!1)}return lc(e,n,o,s,h,d)}function lc(e,n,o,s,d,h){tp(e,n);var v=(n.flags&128)!==0;if(!s&&!v)return d&&sh(n,o,!1),Bn(e,n,h);s=n.stateNode,n2.current=n;var M=v&&typeof o.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&v?(n.child=vo(n,e.child,null,h),n.child=vo(n,null,M,h)):At(e,n,M,h),n.memoizedState=s.state,d&&sh(n,o,!0),n.child}function rp(e){var n=e.stateNode;n.pendingContext?ah(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ah(e,n.context,!1),Ul(e,n.containerInfo)}function op(e,n,o,s,d){return go(),Ol(d),n.flags|=256,At(e,n,o,s),n.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function dc(e){return{baseLanes:e,cachePool:null,transitions:null}}function ap(e,n,o){var s=n.pendingProps,d=tt.current,h=!1,v=(n.flags&128)!==0,M;if((M=v)||(M=e!==null&&e.memoizedState===null?!1:(d&2)!==0),M?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Ue(tt,d&1),e===null)return zl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=s.children,e=s.fallback,h?(s=n.mode,h=n.child,v={mode:"hidden",children:v},(s&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=v):h=ns(v,s,0,null),e=Dr(e,s,o,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=dc(o),n.memoizedState=cc,e):uc(n,v));if(d=e.memoizedState,d!==null&&(M=d.dehydrated,M!==null))return r2(e,n,v,s,M,d,o);if(h){h=s.fallback,v=n.mode,d=e.child,M=d.sibling;var O={mode:"hidden",children:s.children};return(v&1)===0&&n.child!==d?(s=n.child,s.childLanes=0,s.pendingProps=O,n.deletions=null):(s=pr(d,O),s.subtreeFlags=d.subtreeFlags&14680064),M!==null?h=pr(M,h):(h=Dr(h,v,o,null),h.flags|=2),h.return=n,s.return=n,s.sibling=h,n.child=s,s=h,h=n.child,v=e.child.memoizedState,v=v===null?dc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},h.memoizedState=v,h.childLanes=e.childLanes&~o,n.memoizedState=cc,s}return h=e.child,e=h.sibling,s=pr(h,{mode:"visible",children:s.children}),(n.mode&1)===0&&(s.lanes=o),s.return=n,s.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=s,n.memoizedState=null,s}function uc(e,n){return n=ns({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Hi(e,n,o,s){return s!==null&&Ol(s),vo(n,e.child,null,o),e=uc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function r2(e,n,o,s,d,h,v){if(o)return n.flags&256?(n.flags&=-257,s=ac(Error(i(422))),Hi(e,n,v,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=s.fallback,d=n.mode,s=ns({mode:"visible",children:s.children},d,0,null),h=Dr(h,d,v,null),h.flags|=2,s.return=n,h.return=n,s.sibling=h,n.child=s,(n.mode&1)!==0&&vo(n,e.child,null,v),n.child.memoizedState=dc(v),n.memoizedState=cc,h);if((n.mode&1)===0)return Hi(e,n,v,null);if(d.data==="$!"){if(s=d.nextSibling&&d.nextSibling.dataset,s)var M=s.dgst;return s=M,h=Error(i(419)),s=ac(h,s,void 0),Hi(e,n,v,s)}if(M=(v&e.childLanes)!==0,Dt||M){if(s=gt,s!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(s.suspendedLanes|v))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,On(e,d),gn(s,e,d,-1))}return Nc(),s=ac(Error(i(421))),Hi(e,n,v,s)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=g2.bind(null,e),d._reactRetry=n,null):(e=h.treeContext,Zt=nr(d.nextSibling),Yt=n,Je=!0,hn=null,e!==null&&(tn[nn++]=Pn,tn[nn++]=zn,tn[nn++]=Mr,Pn=e.id,zn=e.overflow,Mr=n),n=uc(n,s.children),n.flags|=4096,n)}function ip(e,n,o){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Wl(e.return,n,o)}function hc(e,n,o,s,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:o,tailMode:d}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=o,h.tailMode=d)}function sp(e,n,o){var s=n.pendingProps,d=s.revealOrder,h=s.tail;if(At(e,n,s.children,o),s=tt.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ip(e,o,n);else if(e.tag===19)ip(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ue(tt,s),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(o=n.child,d=null;o!==null;)e=o.alternate,e!==null&&Pi(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=n.child,n.child=null):(d=o.sibling,o.sibling=null),hc(n,!1,d,o,h);break;case"backwards":for(o=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Pi(e)===null){n.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}hc(n,!0,o,null,h);break;case"together":hc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Bn(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),Er|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=pr(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=pr(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function o2(e,n,o){switch(n.tag){case 3:rp(n),go();break;case 5:_h(n);break;case 1:Ot(n.type)&&Si(n);break;case 4:Ul(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,d=n.memoizedProps.value;Ue(Ii,s._currentValue),s._currentValue=d;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(Ue(tt,tt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?ap(e,n,o):(Ue(tt,tt.current&1),e=Bn(e,n,o),e!==null?e.sibling:null);Ue(tt,tt.current&1);break;case 19:if(s=(o&n.childLanes)!==0,(e.flags&128)!==0){if(s)return sp(e,n,o);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ue(tt,tt.current),s)break;return null;case 22:case 23:return n.lanes=0,ep(e,n,o)}return Bn(e,n,o)}var lp,pc,cp,dp;lp=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},pc=function(){},cp=function(e,n,o,s){var d=e.memoizedProps;if(d!==s){e=n.stateNode,Tr(jn.current);var h=null;switch(o){case"input":d=Te(e,d),s=Te(e,s),h=[];break;case"select":d=D({},d,{value:void 0}),s=D({},s,{value:void 0}),h=[];break;case"textarea":d=$t(e,d),s=$t(e,s),h=[];break;default:typeof d.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=ki)}lt(o,s);var v;o=null;for(Y in d)if(!s.hasOwnProperty(Y)&&d.hasOwnProperty(Y)&&d[Y]!=null)if(Y==="style"){var M=d[Y];for(v in M)M.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else Y!=="dangerouslySetInnerHTML"&&Y!=="children"&&Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&Y!=="autoFocus"&&(c.hasOwnProperty(Y)?h||(h=[]):(h=h||[]).push(Y,null));for(Y in s){var O=s[Y];if(M=d!=null?d[Y]:void 0,s.hasOwnProperty(Y)&&O!==M&&(O!=null||M!=null))if(Y==="style")if(M){for(v in M)!M.hasOwnProperty(v)||O&&O.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in O)O.hasOwnProperty(v)&&M[v]!==O[v]&&(o||(o={}),o[v]=O[v])}else o||(h||(h=[]),h.push(Y,o)),o=O;else Y==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,M=M?M.__html:void 0,O!=null&&M!==O&&(h=h||[]).push(Y,O)):Y==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(Y,""+O):Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&(c.hasOwnProperty(Y)?(O!=null&&Y==="onScroll"&&Ye("scroll",e),h||M===O||(h=[])):(h=h||[]).push(Y,O))}o&&(h=h||[]).push("style",o);var Y=h;(n.updateQueue=Y)&&(n.flags|=4)}},dp=function(e,n,o,s){o!==s&&(n.flags|=4)};function Ra(e,n){if(!Je)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Nt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,s=0;if(n)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,s|=d.subtreeFlags&14680064,s|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=s,e.childLanes=o,n}function a2(e,n,o){var s=n.pendingProps;switch(El(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(n),null;case 1:return Ot(n.type)&&ji(),Nt(n),null;case 3:return s=n.stateNode,wo(),Ze(zt),Ze(jt),Yl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Mi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hn!==null&&(Cc(hn),hn=null))),pc(e,n),Nt(n),null;case 5:Vl(n);var d=Tr(ka.current);if(o=n.type,e!==null&&n.stateNode!=null)cp(e,n,o,s,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(i(166));return Nt(n),null}if(e=Tr(jn.current),Mi(n)){s=n.stateNode,o=n.type;var h=n.memoizedProps;switch(s[Cn]=n,s[ya]=h,e=(n.mode&1)!==0,o){case"dialog":Ye("cancel",s),Ye("close",s);break;case"iframe":case"object":case"embed":Ye("load",s);break;case"video":case"audio":for(d=0;d<ma.length;d++)Ye(ma[d],s);break;case"source":Ye("error",s);break;case"img":case"image":case"link":Ye("error",s),Ye("load",s);break;case"details":Ye("toggle",s);break;case"input":De(s,h),Ye("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!h.multiple},Ye("invalid",s);break;case"textarea":Be(s,h),Ye("invalid",s)}lt(o,h),d=null;for(var v in h)if(h.hasOwnProperty(v)){var M=h[v];v==="children"?typeof M=="string"?s.textContent!==M&&(h.suppressHydrationWarning!==!0&&bi(s.textContent,M,e),d=["children",M]):typeof M=="number"&&s.textContent!==""+M&&(h.suppressHydrationWarning!==!0&&bi(s.textContent,M,e),d=["children",""+M]):c.hasOwnProperty(v)&&M!=null&&v==="onScroll"&&Ye("scroll",s)}switch(o){case"input":ue(s),et(s,h,!0);break;case"textarea":ue(s),bt(s);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(s.onclick=ki)}s=d,n.updateQueue=s,s!==null&&(n.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_n(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=v.createElement(o,{is:s.is}):(e=v.createElement(o),o==="select"&&(v=e,s.multiple?v.multiple=!0:s.size&&(v.size=s.size))):e=v.createElementNS(e,o),e[Cn]=n,e[ya]=s,lp(e,n,!1,!1),n.stateNode=e;e:{switch(v=Tt(o,s),o){case"dialog":Ye("cancel",e),Ye("close",e),d=s;break;case"iframe":case"object":case"embed":Ye("load",e),d=s;break;case"video":case"audio":for(d=0;d<ma.length;d++)Ye(ma[d],e);d=s;break;case"source":Ye("error",e),d=s;break;case"img":case"image":case"link":Ye("error",e),Ye("load",e),d=s;break;case"details":Ye("toggle",e),d=s;break;case"input":De(e,s),d=Te(e,s),Ye("invalid",e);break;case"option":d=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},d=D({},s,{value:void 0}),Ye("invalid",e);break;case"textarea":Be(e,s),d=$t(e,s),Ye("invalid",e);break;default:d=s}lt(o,d),M=d;for(h in M)if(M.hasOwnProperty(h)){var O=M[h];h==="style"?je(e,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Zo(e,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&eo(e,O):typeof O=="number"&&eo(e,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(c.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ye("scroll",e):O!=null&&C(e,h,O,v))}switch(o){case"input":ue(e),et(e,s,!1);break;case"textarea":ue(e),bt(e);break;case"option":s.value!=null&&e.setAttribute("value",""+he(s.value));break;case"select":e.multiple=!!s.multiple,h=s.value,h!=null?Ge(e,!!s.multiple,h,!1):s.defaultValue!=null&&Ge(e,!!s.multiple,s.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=ki)}switch(o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Nt(n),null;case 6:if(e&&n.stateNode!=null)dp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(i(166));if(o=Tr(ka.current),Tr(jn.current),Mi(n)){if(s=n.stateNode,o=n.memoizedProps,s[Cn]=n,(h=s.nodeValue!==o)&&(e=Yt,e!==null))switch(e.tag){case 3:bi(s.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bi(s.nodeValue,o,(e.mode&1)!==0)}h&&(n.flags|=4)}else s=(o.nodeType===9?o:o.ownerDocument).createTextNode(s),s[Cn]=n,n.stateNode=s}return Nt(n),null;case 13:if(Ze(tt),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Je&&Zt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ph(),go(),n.flags|=98560,h=!1;else if(h=Mi(n),s!==null&&s.dehydrated!==null){if(e===null){if(!h)throw Error(i(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Cn]=n}else go(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Nt(n),h=!1}else hn!==null&&(Cc(hn),hn=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(tt.current&1)!==0?pt===0&&(pt=3):Nc())),n.updateQueue!==null&&(n.flags|=4),Nt(n),null);case 4:return wo(),pc(e,n),e===null&&ga(n.stateNode.containerInfo),Nt(n),null;case 10:return Fl(n.type._context),Nt(n),null;case 17:return Ot(n.type)&&ji(),Nt(n),null;case 19:if(Ze(tt),h=n.memoizedState,h===null)return Nt(n),null;if(s=(n.flags&128)!==0,v=h.rendering,v===null)if(s)Ra(h,!1);else{if(pt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(v=Pi(e),v!==null){for(n.flags|=128,Ra(h,!1),s=v.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=o,o=n.child;o!==null;)h=o,e=s,h.flags&=14680066,v=h.alternate,v===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=v.childLanes,h.lanes=v.lanes,h.child=v.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=v.memoizedProps,h.memoizedState=v.memoizedState,h.updateQueue=v.updateQueue,h.type=v.type,e=v.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Ue(tt,tt.current&1|2),n.child}e=e.sibling}h.tail!==null&&at()>Co&&(n.flags|=128,s=!0,Ra(h,!1),n.lanes=4194304)}else{if(!s)if(e=Pi(v),e!==null){if(n.flags|=128,s=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Ra(h,!0),h.tail===null&&h.tailMode==="hidden"&&!v.alternate&&!Je)return Nt(n),null}else 2*at()-h.renderingStartTime>Co&&o!==1073741824&&(n.flags|=128,s=!0,Ra(h,!1),n.lanes=4194304);h.isBackwards?(v.sibling=n.child,n.child=v):(o=h.last,o!==null?o.sibling=v:n.child=v,h.last=v)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=at(),n.sibling=null,o=tt.current,Ue(tt,s?o&1|2:o&1),n):(Nt(n),null);case 22:case 23:return Sc(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&(n.mode&1)!==0?(Kt&1073741824)!==0&&(Nt(n),n.subtreeFlags&6&&(n.flags|=8192)):Nt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function i2(e,n){switch(El(n),n.tag){case 1:return Ot(n.type)&&ji(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wo(),Ze(zt),Ze(jt),Yl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Vl(n),null;case 13:if(Ze(tt),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));go()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ze(tt),null;case 4:return wo(),null;case 10:return Fl(n.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var Ui=!1,Rt=!1,s2=typeof WeakSet=="function"?WeakSet:Set,fe=null;function bo(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(s){ot(e,n,s)}else o.current=null}function fc(e,n,o){try{o()}catch(s){ot(e,n,s)}}var up=!1;function l2(e,n){if(Sl=ui,e=Hu(),yl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var s=o.getSelection&&o.getSelection();if(s&&s.rangeCount!==0){o=s.anchorNode;var d=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var v=0,M=-1,O=-1,Y=0,oe=0,ie=e,re=null;t:for(;;){for(var pe;ie!==o||d!==0&&ie.nodeType!==3||(M=v+d),ie!==h||s!==0&&ie.nodeType!==3||(O=v+s),ie.nodeType===3&&(v+=ie.nodeValue.length),(pe=ie.firstChild)!==null;)re=ie,ie=pe;for(;;){if(ie===e)break t;if(re===o&&++Y===d&&(M=v),re===h&&++oe===s&&(O=v),(pe=ie.nextSibling)!==null)break;ie=re,re=ie.parentNode}ie=pe}o=M===-1||O===-1?null:{start:M,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Nl={focusedElem:e,selectionRange:o},ui=!1,fe=n;fe!==null;)if(n=fe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,fe=e;else for(;fe!==null;){n=fe;try{var me=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ve=me.memoizedProps,it=me.memoizedState,q=n.stateNode,W=q.getSnapshotBeforeUpdate(n.elementType===n.type?ve:pn(n.type,ve),it);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var U=n.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(le){ot(n,n.return,le)}if(e=n.sibling,e!==null){e.return=n.return,fe=e;break}fe=n.return}return me=up,up=!1,me}function La(e,n,o){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var d=s=s.next;do{if((d.tag&e)===e){var h=d.destroy;d.destroy=void 0,h!==void 0&&fc(n,o,h)}d=d.next}while(d!==s)}}function Vi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.create;o.destroy=s()}o=o.next}while(o!==n)}}function mc(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function hp(e){var n=e.alternate;n!==null&&(e.alternate=null,hp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Cn],delete n[ya],delete n[$l],delete n[qg],delete n[Ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pp(e){return e.tag===5||e.tag===3||e.tag===4}function fp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=ki));else if(s!==4&&(e=e.child,e!==null))for(gc(e,n,o),e=e.sibling;e!==null;)gc(e,n,o),e=e.sibling}function vc(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(vc(e,n,o),e=e.sibling;e!==null;)vc(e,n,o),e=e.sibling}var kt=null,fn=!1;function lr(e,n,o){for(o=o.child;o!==null;)mp(e,n,o),o=o.sibling}function mp(e,n,o){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(ai,o)}catch{}switch(o.tag){case 5:Rt||bo(o,n);case 6:var s=kt,d=fn;kt=null,lr(e,n,o),kt=s,fn=d,kt!==null&&(fn?(e=kt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):kt.removeChild(o.stateNode));break;case 18:kt!==null&&(fn?(e=kt,o=o.stateNode,e.nodeType===8?Ml(e.parentNode,o):e.nodeType===1&&Ml(e,o),sa(e)):Ml(kt,o.stateNode));break;case 4:s=kt,d=fn,kt=o.stateNode.containerInfo,fn=!0,lr(e,n,o),kt=s,fn=d;break;case 0:case 11:case 14:case 15:if(!Rt&&(s=o.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){d=s=s.next;do{var h=d,v=h.destroy;h=h.tag,v!==void 0&&((h&2)!==0||(h&4)!==0)&&fc(o,n,v),d=d.next}while(d!==s)}lr(e,n,o);break;case 1:if(!Rt&&(bo(o,n),s=o.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=o.memoizedProps,s.state=o.memoizedState,s.componentWillUnmount()}catch(M){ot(o,n,M)}lr(e,n,o);break;case 21:lr(e,n,o);break;case 22:o.mode&1?(Rt=(s=Rt)||o.memoizedState!==null,lr(e,n,o),Rt=s):lr(e,n,o);break;default:lr(e,n,o)}}function gp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new s2),n.forEach(function(s){var d=v2.bind(null,e,s);o.has(s)||(o.add(s),s.then(d,d))})}}function mn(e,n){var o=n.deletions;if(o!==null)for(var s=0;s<o.length;s++){var d=o[s];try{var h=e,v=n,M=v;e:for(;M!==null;){switch(M.tag){case 5:kt=M.stateNode,fn=!1;break e;case 3:kt=M.stateNode.containerInfo,fn=!0;break e;case 4:kt=M.stateNode.containerInfo,fn=!0;break e}M=M.return}if(kt===null)throw Error(i(160));mp(h,v,d),kt=null,fn=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(Y){ot(d,n,Y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)vp(n,e),n=n.sibling}function vp(e,n){var o=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mn(n,e),Nn(e),s&4){try{La(3,e,e.return),Vi(3,e)}catch(ve){ot(e,e.return,ve)}try{La(5,e,e.return)}catch(ve){ot(e,e.return,ve)}}break;case 1:mn(n,e),Nn(e),s&512&&o!==null&&bo(o,o.return);break;case 5:if(mn(n,e),Nn(e),s&512&&o!==null&&bo(o,o.return),e.flags&32){var d=e.stateNode;try{eo(d,"")}catch(ve){ot(e,e.return,ve)}}if(s&4&&(d=e.stateNode,d!=null)){var h=e.memoizedProps,v=o!==null?o.memoizedProps:h,M=e.type,O=e.updateQueue;if(e.updateQueue=null,O!==null)try{M==="input"&&h.type==="radio"&&h.name!=null&&Qe(d,h),Tt(M,v);var Y=Tt(M,h);for(v=0;v<O.length;v+=2){var oe=O[v],ie=O[v+1];oe==="style"?je(d,ie):oe==="dangerouslySetInnerHTML"?Zo(d,ie):oe==="children"?eo(d,ie):C(d,oe,ie,Y)}switch(M){case"input":qe(d,h);break;case"textarea":It(d,h);break;case"select":var re=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var pe=h.value;pe!=null?Ge(d,!!h.multiple,pe,!1):re!==!!h.multiple&&(h.defaultValue!=null?Ge(d,!!h.multiple,h.defaultValue,!0):Ge(d,!!h.multiple,h.multiple?[]:"",!1))}d[ya]=h}catch(ve){ot(e,e.return,ve)}}break;case 6:if(mn(n,e),Nn(e),s&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,h=e.memoizedProps;try{d.nodeValue=h}catch(ve){ot(e,e.return,ve)}}break;case 3:if(mn(n,e),Nn(e),s&4&&o!==null&&o.memoizedState.isDehydrated)try{sa(n.containerInfo)}catch(ve){ot(e,e.return,ve)}break;case 4:mn(n,e),Nn(e);break;case 13:mn(n,e),Nn(e),d=e.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(wc=at())),s&4&&gp(e);break;case 22:if(oe=o!==null&&o.memoizedState!==null,e.mode&1?(Rt=(Y=Rt)||oe,mn(n,e),Rt=Y):mn(n,e),Nn(e),s&8192){if(Y=e.memoizedState!==null,(e.stateNode.isHidden=Y)&&!oe&&(e.mode&1)!==0)for(fe=e,oe=e.child;oe!==null;){for(ie=fe=oe;fe!==null;){switch(re=fe,pe=re.child,re.tag){case 0:case 11:case 14:case 15:La(4,re,re.return);break;case 1:bo(re,re.return);var me=re.stateNode;if(typeof me.componentWillUnmount=="function"){s=re,o=re.return;try{n=s,me.props=n.memoizedProps,me.state=n.memoizedState,me.componentWillUnmount()}catch(ve){ot(s,o,ve)}}break;case 5:bo(re,re.return);break;case 22:if(re.memoizedState!==null){wp(ie);continue}}pe!==null?(pe.return=re,fe=pe):wp(ie)}oe=oe.sibling}e:for(oe=null,ie=e;;){if(ie.tag===5){if(oe===null){oe=ie;try{d=ie.stateNode,Y?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(M=ie.stateNode,O=ie.memoizedProps.style,v=O!=null&&O.hasOwnProperty("display")?O.display:null,M.style.display=ti("display",v))}catch(ve){ot(e,e.return,ve)}}}else if(ie.tag===6){if(oe===null)try{ie.stateNode.nodeValue=Y?"":ie.memoizedProps}catch(ve){ot(e,e.return,ve)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===e)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===e)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===e)break e;oe===ie&&(oe=null),ie=ie.return}oe===ie&&(oe=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:mn(n,e),Nn(e),s&4&&gp(e);break;case 21:break;default:mn(n,e),Nn(e)}}function Nn(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(pp(o)){var s=o;break e}o=o.return}throw Error(i(160))}switch(s.tag){case 5:var d=s.stateNode;s.flags&32&&(eo(d,""),s.flags&=-33);var h=fp(e);vc(e,h,d);break;case 3:case 4:var v=s.stateNode.containerInfo,M=fp(e);gc(e,M,v);break;default:throw Error(i(161))}}catch(O){ot(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function c2(e,n,o){fe=e,yp(e)}function yp(e,n,o){for(var s=(e.mode&1)!==0;fe!==null;){var d=fe,h=d.child;if(d.tag===22&&s){var v=d.memoizedState!==null||Ui;if(!v){var M=d.alternate,O=M!==null&&M.memoizedState!==null||Rt;M=Ui;var Y=Rt;if(Ui=v,(Rt=O)&&!Y)for(fe=d;fe!==null;)v=fe,O=v.child,v.tag===22&&v.memoizedState!==null?_p(d):O!==null?(O.return=v,fe=O):_p(d);for(;h!==null;)fe=h,yp(h),h=h.sibling;fe=d,Ui=M,Rt=Y}xp(e)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,fe=h):xp(e)}}function xp(e){for(;fe!==null;){var n=fe;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Rt||Vi(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!Rt)if(o===null)s.componentDidMount();else{var d=n.elementType===n.type?o.memoizedProps:pn(n.type,o.memoizedProps);s.componentDidUpdate(d,o.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&wh(n,h,s);break;case 3:var v=n.updateQueue;if(v!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}wh(n,v,o)}break;case 5:var M=n.stateNode;if(o===null&&n.flags&4){o=M;var O=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Y=n.alternate;if(Y!==null){var oe=Y.memoizedState;if(oe!==null){var ie=oe.dehydrated;ie!==null&&sa(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Rt||n.flags&512&&mc(n)}catch(re){ot(n,n.return,re)}}if(n===e){fe=null;break}if(o=n.sibling,o!==null){o.return=n.return,fe=o;break}fe=n.return}}function wp(e){for(;fe!==null;){var n=fe;if(n===e){fe=null;break}var o=n.sibling;if(o!==null){o.return=n.return,fe=o;break}fe=n.return}}function _p(e){for(;fe!==null;){var n=fe;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{Vi(4,n)}catch(O){ot(n,o,O)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var d=n.return;try{s.componentDidMount()}catch(O){ot(n,d,O)}}var h=n.return;try{mc(n)}catch(O){ot(n,h,O)}break;case 5:var v=n.return;try{mc(n)}catch(O){ot(n,v,O)}}}catch(O){ot(n,n.return,O)}if(n===e){fe=null;break}var M=n.sibling;if(M!==null){M.return=n.return,fe=M;break}fe=n.return}}var d2=Math.ceil,Gi=A.ReactCurrentDispatcher,yc=A.ReactCurrentOwner,an=A.ReactCurrentBatchConfig,Ae=0,gt=null,ct=null,Ct=0,Kt=0,ko=rr(0),pt=0,Ma=null,Er=0,Yi=0,xc=0,$a=null,Bt=null,wc=0,Co=1/0,Fn=null,Zi=!1,_c=null,cr=null,Ki=!1,dr=null,Qi=0,Ia=0,bc=null,Xi=-1,Ji=0;function Et(){return(Ae&6)!==0?at():Xi!==-1?Xi:Xi=at()}function ur(e){return(e.mode&1)===0?1:(Ae&2)!==0&&Ct!==0?Ct&-Ct:Gg.transition!==null?(Ji===0&&(Ji=fu()),Ji):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:ku(e.type)),e)}function gn(e,n,o,s){if(50<Ia)throw Ia=0,bc=null,Error(i(185));na(e,o,s),((Ae&2)===0||e!==gt)&&(e===gt&&((Ae&2)===0&&(Yi|=o),pt===4&&hr(e,Ct)),Ft(e,s),o===1&&Ae===0&&(n.mode&1)===0&&(Co=at()+500,Ni&&ar()))}function Ft(e,n){var o=e.callbackNode;G0(e,n);var s=li(e,e===gt?Ct:0);if(s===0)o!==null&&uu(o),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(o!=null&&uu(o),n===1)e.tag===0?Vg(kp.bind(null,e)):lh(kp.bind(null,e)),Wg(function(){(Ae&6)===0&&ar()}),o=null;else{switch(mu(s)){case 1:o=tl;break;case 4:o=hu;break;case 16:o=oi;break;case 536870912:o=pu;break;default:o=oi}o=$p(o,bp.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function bp(e,n){if(Xi=-1,Ji=0,(Ae&6)!==0)throw Error(i(327));var o=e.callbackNode;if(jo()&&e.callbackNode!==o)return null;var s=li(e,e===gt?Ct:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||n)n=es(e,s);else{n=s;var d=Ae;Ae|=2;var h=jp();(gt!==e||Ct!==n)&&(Fn=null,Co=at()+500,zr(e,n));do try{p2();break}catch(M){Cp(e,M)}while(!0);Bl(),Gi.current=h,Ae=d,ct!==null?n=0:(gt=null,Ct=0,n=pt)}if(n!==0){if(n===2&&(d=nl(e),d!==0&&(s=d,n=kc(e,d))),n===1)throw o=Ma,zr(e,0),hr(e,s),Ft(e,at()),o;if(n===6)hr(e,s);else{if(d=e.current.alternate,(s&30)===0&&!u2(d)&&(n=es(e,s),n===2&&(h=nl(e),h!==0&&(s=h,n=kc(e,h))),n===1))throw o=Ma,zr(e,0),hr(e,s),Ft(e,at()),o;switch(e.finishedWork=d,e.finishedLanes=s,n){case 0:case 1:throw Error(i(345));case 2:Or(e,Bt,Fn);break;case 3:if(hr(e,s),(s&130023424)===s&&(n=wc+500-at(),10<n)){if(li(e,0)!==0)break;if(d=e.suspendedLanes,(d&s)!==s){Et(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Ll(Or.bind(null,e,Bt,Fn),n);break}Or(e,Bt,Fn);break;case 4:if(hr(e,s),(s&4194240)===s)break;for(n=e.eventTimes,d=-1;0<s;){var v=31-dn(s);h=1<<v,v=n[v],v>d&&(d=v),s&=~h}if(s=d,s=at()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*d2(s/1960))-s,10<s){e.timeoutHandle=Ll(Or.bind(null,e,Bt,Fn),s);break}Or(e,Bt,Fn);break;case 5:Or(e,Bt,Fn);break;default:throw Error(i(329))}}}return Ft(e,at()),e.callbackNode===o?bp.bind(null,e):null}function kc(e,n){var o=$a;return e.current.memoizedState.isDehydrated&&(zr(e,n).flags|=256),e=es(e,n),e!==2&&(n=Bt,Bt=o,n!==null&&Cc(n)),e}function Cc(e){Bt===null?Bt=e:Bt.push.apply(Bt,e)}function u2(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var s=0;s<o.length;s++){var d=o[s],h=d.getSnapshot;d=d.value;try{if(!un(h(),d))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hr(e,n){for(n&=~xc,n&=~Yi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-dn(n),s=1<<o;e[o]=-1,n&=~s}}function kp(e){if((Ae&6)!==0)throw Error(i(327));jo();var n=li(e,0);if((n&1)===0)return Ft(e,at()),null;var o=es(e,n);if(e.tag!==0&&o===2){var s=nl(e);s!==0&&(n=s,o=kc(e,s))}if(o===1)throw o=Ma,zr(e,0),hr(e,n),Ft(e,at()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Or(e,Bt,Fn),Ft(e,at()),null}function jc(e,n){var o=Ae;Ae|=1;try{return e(n)}finally{Ae=o,Ae===0&&(Co=at()+500,Ni&&ar())}}function Pr(e){dr!==null&&dr.tag===0&&(Ae&6)===0&&jo();var n=Ae;Ae|=1;var o=an.transition,s=Fe;try{if(an.transition=null,Fe=1,e)return e()}finally{Fe=s,an.transition=o,Ae=n,(Ae&6)===0&&ar()}}function Sc(){Kt=ko.current,Ze(ko)}function zr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Fg(o)),ct!==null)for(o=ct.return;o!==null;){var s=o;switch(El(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&ji();break;case 3:wo(),Ze(zt),Ze(jt),Yl();break;case 5:Vl(s);break;case 4:wo();break;case 13:Ze(tt);break;case 19:Ze(tt);break;case 10:Fl(s.type._context);break;case 22:case 23:Sc()}o=o.return}if(gt=e,ct=e=pr(e.current,null),Ct=Kt=n,pt=0,Ma=null,xc=Yi=Er=0,Bt=$a=null,Ir!==null){for(n=0;n<Ir.length;n++)if(o=Ir[n],s=o.interleaved,s!==null){o.interleaved=null;var d=s.next,h=o.pending;if(h!==null){var v=h.next;h.next=d,s.next=v}o.pending=s}Ir=null}return e}function Cp(e,n){do{var o=ct;try{if(Bl(),zi.current=Fi,Oi){for(var s=nt.memoizedState;s!==null;){var d=s.queue;d!==null&&(d.pending=null),s=s.next}Oi=!1}if(Ar=0,mt=ht=nt=null,Ca=!1,ja=0,yc.current=null,o===null||o.return===null){pt=1,Ma=n,ct=null;break}e:{var h=e,v=o.return,M=o,O=n;if(n=Ct,M.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Y=O,oe=M,ie=oe.tag;if((oe.mode&1)===0&&(ie===0||ie===11||ie===15)){var re=oe.alternate;re?(oe.updateQueue=re.updateQueue,oe.memoizedState=re.memoizedState,oe.lanes=re.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var pe=Zh(v);if(pe!==null){pe.flags&=-257,Kh(pe,v,M,h,n),pe.mode&1&&Yh(h,Y,n),n=pe,O=Y;var me=n.updateQueue;if(me===null){var ve=new Set;ve.add(O),n.updateQueue=ve}else me.add(O);break e}else{if((n&1)===0){Yh(h,Y,n),Nc();break e}O=Error(i(426))}}else if(Je&&M.mode&1){var it=Zh(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Kh(it,v,M,h,n),Ol(_o(O,M));break e}}h=O=_o(O,M),pt!==4&&(pt=2),$a===null?$a=[h]:$a.push(h),h=v;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var q=Vh(h,O,n);xh(h,q);break e;case 1:M=O;var W=h.type,U=h.stateNode;if((h.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(cr===null||!cr.has(U)))){h.flags|=65536,n&=-n,h.lanes|=n;var le=Gh(h,M,n);xh(h,le);break e}}h=h.return}while(h!==null)}Np(o)}catch(ye){n=ye,ct===o&&o!==null&&(ct=o=o.return);continue}break}while(!0)}function jp(){var e=Gi.current;return Gi.current=Fi,e===null?Fi:e}function Nc(){(pt===0||pt===3||pt===2)&&(pt=4),gt===null||(Er&268435455)===0&&(Yi&268435455)===0||hr(gt,Ct)}function es(e,n){var o=Ae;Ae|=2;var s=jp();(gt!==e||Ct!==n)&&(Fn=null,zr(e,n));do try{h2();break}catch(d){Cp(e,d)}while(!0);if(Bl(),Ae=o,Gi.current=s,ct!==null)throw Error(i(261));return gt=null,Ct=0,pt}function h2(){for(;ct!==null;)Sp(ct)}function p2(){for(;ct!==null&&!O0();)Sp(ct)}function Sp(e){var n=Mp(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,n===null?Np(e):ct=n,yc.current=null}function Np(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=a2(o,n,Kt),o!==null){ct=o;return}}else{if(o=i2(o,n),o!==null){o.flags&=32767,ct=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pt=6,ct=null;return}}if(n=n.sibling,n!==null){ct=n;return}ct=n=e}while(n!==null);pt===0&&(pt=5)}function Or(e,n,o){var s=Fe,d=an.transition;try{an.transition=null,Fe=1,f2(e,n,o,s)}finally{an.transition=d,Fe=s}return null}function f2(e,n,o,s){do jo();while(dr!==null);if((Ae&6)!==0)throw Error(i(327));o=e.finishedWork;var d=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var h=o.lanes|o.childLanes;if(Y0(e,h),e===gt&&(ct=gt=null,Ct=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ki||(Ki=!0,$p(oi,function(){return jo(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=an.transition,an.transition=null;var v=Fe;Fe=1;var M=Ae;Ae|=4,yc.current=null,l2(e,o),vp(o,e),Ag(Nl),ui=!!Sl,Nl=Sl=null,e.current=o,c2(o),D0(),Ae=M,Fe=v,an.transition=h}else e.current=o;if(Ki&&(Ki=!1,dr=e,Qi=d),h=e.pendingLanes,h===0&&(cr=null),W0(o.stateNode),Ft(e,at()),n!==null)for(s=e.onRecoverableError,o=0;o<n.length;o++)d=n[o],s(d.value,{componentStack:d.stack,digest:d.digest});if(Zi)throw Zi=!1,e=_c,_c=null,e;return(Qi&1)!==0&&e.tag!==0&&jo(),h=e.pendingLanes,(h&1)!==0?e===bc?Ia++:(Ia=0,bc=e):Ia=0,ar(),null}function jo(){if(dr!==null){var e=mu(Qi),n=an.transition,o=Fe;try{if(an.transition=null,Fe=16>e?16:e,dr===null)var s=!1;else{if(e=dr,dr=null,Qi=0,(Ae&6)!==0)throw Error(i(331));var d=Ae;for(Ae|=4,fe=e.current;fe!==null;){var h=fe,v=h.child;if((fe.flags&16)!==0){var M=h.deletions;if(M!==null){for(var O=0;O<M.length;O++){var Y=M[O];for(fe=Y;fe!==null;){var oe=fe;switch(oe.tag){case 0:case 11:case 15:La(8,oe,h)}var ie=oe.child;if(ie!==null)ie.return=oe,fe=ie;else for(;fe!==null;){oe=fe;var re=oe.sibling,pe=oe.return;if(hp(oe),oe===Y){fe=null;break}if(re!==null){re.return=pe,fe=re;break}fe=pe}}}var me=h.alternate;if(me!==null){var ve=me.child;if(ve!==null){me.child=null;do{var it=ve.sibling;ve.sibling=null,ve=it}while(ve!==null)}}fe=h}}if((h.subtreeFlags&2064)!==0&&v!==null)v.return=h,fe=v;else e:for(;fe!==null;){if(h=fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:La(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,fe=q;break e}fe=h.return}}var W=e.current;for(fe=W;fe!==null;){v=fe;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,fe=U;else e:for(v=W;fe!==null;){if(M=fe,(M.flags&2048)!==0)try{switch(M.tag){case 0:case 11:case 15:Vi(9,M)}}catch(ye){ot(M,M.return,ye)}if(M===v){fe=null;break e}var le=M.sibling;if(le!==null){le.return=M.return,fe=le;break e}fe=M.return}}if(Ae=d,ar(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(ai,e)}catch{}s=!0}return s}finally{Fe=o,an.transition=n}}return!1}function Rp(e,n,o){n=_o(o,n),n=Vh(e,n,1),e=sr(e,n,1),n=Et(),e!==null&&(na(e,1,n),Ft(e,n))}function ot(e,n,o){if(e.tag===3)Rp(e,e,o);else for(;n!==null;){if(n.tag===3){Rp(n,e,o);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(cr===null||!cr.has(s))){e=_o(o,e),e=Gh(n,e,1),n=sr(n,e,1),e=Et(),n!==null&&(na(n,1,e),Ft(n,e));break}}n=n.return}}function m2(e,n,o){var s=e.pingCache;s!==null&&s.delete(n),n=Et(),e.pingedLanes|=e.suspendedLanes&o,gt===e&&(Ct&o)===o&&(pt===4||pt===3&&(Ct&130023424)===Ct&&500>at()-wc?zr(e,0):xc|=o),Ft(e,n)}function Lp(e,n){n===0&&((e.mode&1)===0?n=1:(n=si,si<<=1,(si&130023424)===0&&(si=4194304)));var o=Et();e=On(e,n),e!==null&&(na(e,n,o),Ft(e,o))}function g2(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Lp(e,o)}function v2(e,n){var o=0;switch(e.tag){case 13:var s=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(n),Lp(e,o)}var Mp;Mp=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||zt.current)Dt=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return Dt=!1,o2(e,n,o);Dt=(e.flags&131072)!==0}else Dt=!1,Je&&(n.flags&1048576)!==0&&ch(n,Li,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;qi(e,n),e=n.pendingProps;var d=po(n,jt.current);xo(n,o),d=Ql(null,n,s,e,d,o);var h=Xl();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ot(s)?(h=!0,Si(n)):h=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ql(n),d.updater=Wi,n.stateNode=d,d._reactInternals=n,oc(n,s,e,o),n=lc(null,n,s,!0,h,o)):(n.tag=0,Je&&h&&Al(n),At(null,n,d,o),n=n.child),n;case 16:s=n.elementType;e:{switch(qi(e,n),e=n.pendingProps,d=s._init,s=d(s._payload),n.type=s,d=n.tag=x2(s),e=pn(s,e),d){case 0:n=sc(null,n,s,e,o);break e;case 1:n=np(null,n,s,e,o);break e;case 11:n=Qh(null,n,s,e,o);break e;case 14:n=Xh(null,n,s,pn(s.type,e),o);break e}throw Error(i(306,s,""))}return n;case 0:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:pn(s,d),sc(e,n,s,d,o);case 1:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:pn(s,d),np(e,n,s,d,o);case 3:e:{if(rp(n),e===null)throw Error(i(387));s=n.pendingProps,h=n.memoizedState,d=h.element,yh(e,n),Ei(n,s,null,o);var v=n.memoizedState;if(s=v.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){d=_o(Error(i(423)),n),n=op(e,n,s,o,d);break e}else if(s!==d){d=_o(Error(i(424)),n),n=op(e,n,s,o,d);break e}else for(Zt=nr(n.stateNode.containerInfo.firstChild),Yt=n,Je=!0,hn=null,o=gh(n,null,s,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(go(),s===d){n=Bn(e,n,o);break e}At(e,n,s,o)}n=n.child}return n;case 5:return _h(n),e===null&&zl(n),s=n.type,d=n.pendingProps,h=e!==null?e.memoizedProps:null,v=d.children,Rl(s,d)?v=null:h!==null&&Rl(s,h)&&(n.flags|=32),tp(e,n),At(e,n,v,o),n.child;case 6:return e===null&&zl(n),null;case 13:return ap(e,n,o);case 4:return Ul(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=vo(n,null,s,o):At(e,n,s,o),n.child;case 11:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:pn(s,d),Qh(e,n,s,d,o);case 7:return At(e,n,n.pendingProps,o),n.child;case 8:return At(e,n,n.pendingProps.children,o),n.child;case 12:return At(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(s=n.type._context,d=n.pendingProps,h=n.memoizedProps,v=d.value,Ue(Ii,s._currentValue),s._currentValue=v,h!==null)if(un(h.value,v)){if(h.children===d.children&&!zt.current){n=Bn(e,n,o);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var M=h.dependencies;if(M!==null){v=h.child;for(var O=M.firstContext;O!==null;){if(O.context===s){if(h.tag===1){O=Dn(-1,o&-o),O.tag=2;var Y=h.updateQueue;if(Y!==null){Y=Y.shared;var oe=Y.pending;oe===null?O.next=O:(O.next=oe.next,oe.next=O),Y.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),Wl(h.return,o,n),M.lanes|=o;break}O=O.next}}else if(h.tag===10)v=h.type===n.type?null:h.child;else if(h.tag===18){if(v=h.return,v===null)throw Error(i(341));v.lanes|=o,M=v.alternate,M!==null&&(M.lanes|=o),Wl(v,o,n),v=h.sibling}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===n){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}At(e,n,d.children,o),n=n.child}return n;case 9:return d=n.type,s=n.pendingProps.children,xo(n,o),d=rn(d),s=s(d),n.flags|=1,At(e,n,s,o),n.child;case 14:return s=n.type,d=pn(s,n.pendingProps),d=pn(s.type,d),Xh(e,n,s,d,o);case 15:return Jh(e,n,n.type,n.pendingProps,o);case 17:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:pn(s,d),qi(e,n),n.tag=1,Ot(s)?(e=!0,Si(n)):e=!1,xo(n,o),qh(n,s,d),oc(n,s,d,o),lc(null,n,s,!0,e,o);case 19:return sp(e,n,o);case 22:return ep(e,n,o)}throw Error(i(156,n.tag))};function $p(e,n){return du(e,n)}function y2(e,n,o,s){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,n,o,s){return new y2(e,n,o,s)}function Rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x2(e){if(typeof e=="function")return Rc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===V)return 11;if(e===se)return 14}return 2}function pr(e,n){var o=e.alternate;return o===null?(o=sn(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function ts(e,n,o,s,d,h){var v=2;if(s=e,typeof e=="function")Rc(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case P:return Dr(o.children,d,h,n);case B:v=8,d|=8;break;case G:return e=sn(12,o,n,d|2),e.elementType=G,e.lanes=h,e;case J:return e=sn(13,o,n,d),e.elementType=J,e.lanes=h,e;case ae:return e=sn(19,o,n,d),e.elementType=ae,e.lanes=h,e;case Z:return ns(o,d,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:v=10;break e;case ee:v=9;break e;case V:v=11;break e;case se:v=14;break e;case ce:v=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=sn(v,o,n,d),n.elementType=e,n.type=s,n.lanes=h,n}function Dr(e,n,o,s){return e=sn(7,e,s,n),e.lanes=o,e}function ns(e,n,o,s){return e=sn(22,e,s,n),e.elementType=Z,e.lanes=o,e.stateNode={isHidden:!1},e}function Lc(e,n,o){return e=sn(6,e,null,n),e.lanes=o,e}function Mc(e,n,o){return n=sn(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function w2(e,n,o,s,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=s,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $c(e,n,o,s,d,h,v,M,O){return e=new w2(e,n,o,M,O),n===1?(n=1,h===!0&&(n|=8)):n=0,h=sn(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:s,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(h),e}function _2(e,n,o){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:s==null?null:""+s,children:e,containerInfo:n,implementation:o}}function Ip(e){if(!e)return or;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ot(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Ot(o))return ih(e,o,n)}return n}function Tp(e,n,o,s,d,h,v,M,O){return e=$c(o,s,!0,e,d,h,v,M,O),e.context=Ip(null),o=e.current,s=Et(),d=ur(o),h=Dn(s,d),h.callback=n??null,sr(o,h,d),e.current.lanes=d,na(e,d,s),Ft(e,s),e}function rs(e,n,o,s){var d=n.current,h=Et(),v=ur(d);return o=Ip(o),n.context===null?n.context=o:n.pendingContext=o,n=Dn(h,v),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=sr(d,n,v),e!==null&&(gn(e,d,v,h),Ai(e,d,v)),v}function os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ap(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Ic(e,n){Ap(e,n),(e=e.alternate)&&Ap(e,n)}function b2(){return null}var Ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tc(e){this._internalRoot=e}as.prototype.render=Tc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));rs(e,n,null,null)},as.prototype.unmount=Tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pr(function(){rs(null,e,null,null)}),n[An]=null}};function as(e){this._internalRoot=e}as.prototype.unstable_scheduleHydration=function(e){if(e){var n=yu();e={blockedOn:null,target:e,priority:n};for(var o=0;o<Jn.length&&n!==0&&n<Jn[o].priority;o++);Jn.splice(o,0,e),o===0&&_u(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function k2(e,n,o,s,d){if(d){if(typeof s=="function"){var h=s;s=function(){var Y=os(v);h.call(Y)}}var v=Tp(n,s,e,0,null,!1,!1,"",Pp);return e._reactRootContainer=v,e[An]=v.current,ga(e.nodeType===8?e.parentNode:e),Pr(),v}for(;d=e.lastChild;)e.removeChild(d);if(typeof s=="function"){var M=s;s=function(){var Y=os(O);M.call(Y)}}var O=$c(e,0,!1,null,null,!1,!1,"",Pp);return e._reactRootContainer=O,e[An]=O.current,ga(e.nodeType===8?e.parentNode:e),Pr(function(){rs(n,O,o,s)}),O}function ss(e,n,o,s,d){var h=o._reactRootContainer;if(h){var v=h;if(typeof d=="function"){var M=d;d=function(){var O=os(v);M.call(O)}}rs(n,v,e,d)}else v=k2(o,n,e,d,s);return os(v)}gu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=ta(n.pendingLanes);o!==0&&(ol(n,o|1),Ft(n,at()),(Ae&6)===0&&(Co=at()+500,ar()))}break;case 13:Pr(function(){var s=On(e,1);if(s!==null){var d=Et();gn(s,e,1,d)}}),Ic(e,1)}},al=function(e){if(e.tag===13){var n=On(e,134217728);if(n!==null){var o=Et();gn(n,e,134217728,o)}Ic(e,134217728)}},vu=function(e){if(e.tag===13){var n=ur(e),o=On(e,n);if(o!==null){var s=Et();gn(o,e,n,s)}Ic(e,n)}},yu=function(){return Fe},xu=function(e,n){var o=Fe;try{return Fe=e,n()}finally{Fe=o}},Qo=function(e,n,o){switch(n){case"input":if(qe(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var s=o[n];if(s!==e&&s.form===e.form){var d=Ci(s);if(!d)throw Error(i(90));xe(s),qe(s,d)}}}break;case"textarea":It(e,o);break;case"select":n=o.value,n!=null&&Ge(e,!!o.multiple,n,!1)}},ru=jc,ou=Pr;var C2={usingClientEntryPoint:!1,Events:[xa,uo,Ci,tu,nu,jc]},Ta={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j2={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||b2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{ai=ls.inject(j2),kn=ls}catch{}}return Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C2,Wt.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(n))throw Error(i(200));return _2(e,n,null,o)},Wt.createRoot=function(e,n){if(!Ac(e))throw Error(i(299));var o=!1,s="",d=Ep;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=$c(e,1,!1,null,null,o,!1,s,d),e[An]=n.current,ga(e.nodeType===8?e.parentNode:e),new Tc(n)},Wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=lu(n),e=e===null?null:e.stateNode,e},Wt.flushSync=function(e){return Pr(e)},Wt.hydrate=function(e,n,o){if(!is(n))throw Error(i(200));return ss(null,e,n,!0,o)},Wt.hydrateRoot=function(e,n,o){if(!Ac(e))throw Error(i(405));var s=o!=null&&o.hydratedSources||null,d=!1,h="",v=Ep;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),n=Tp(n,null,e,1,o??null,d,!1,h,v),e[An]=n.current,ga(e),s)for(e=0;e<s.length;e++)o=s[e],d=o._getVersion,d=d(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,d]:n.mutableSourceEagerHydrationData.push(o,d);return new as(n)},Wt.render=function(e,n,o){if(!is(n))throw Error(i(200));return ss(null,e,n,!1,o)},Wt.unmountComponentAtNode=function(e){if(!is(e))throw Error(i(40));return e._reactRootContainer?(Pr(function(){ss(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1},Wt.unstable_batchedUpdates=jc,Wt.unstable_renderSubtreeIntoContainer=function(e,n,o,s){if(!is(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ss(e,n,o,!1,s)},Wt.version="18.3.1-next-f1338f8080-20240426",Wt}var qp;function hf(){if(qp)return zc.exports;qp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),zc.exports=I2(),zc.exports}var Up;function T2(){if(Up)return cs;Up=1;var t=hf();return cs.createRoot=t.createRoot,cs.hydrateRoot=t.hydrateRoot,cs}var A2=T2();const E2=uf(A2);function pf(t){var a,i,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t)){var c=t.length;for(a=0;a<c;a++)t[a]&&(i=pf(t[a]))&&(l&&(l+=" "),l+=i)}else for(i in t)t[i]&&(l&&(l+=" "),l+=i);return l}function te(){for(var t,a,i=0,l="",c=arguments.length;i<c;i++)(t=arguments[i])&&(a=pf(t))&&(l&&(l+=" "),l+=a);return l}const Ya=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ya.displayName="PlusIcon";const P2="_root_7uomf_13",z2="_sm_7uomf_82",O2="_md_7uomf_88",D2="_lg_7uomf_94",B2="_horizontal_7uomf_107",F2="_alignStart_7uomf_121",W2="_vertical_7uomf_125",H2="_inner_7uomf_131",q2="_iconSlot_7uomf_146",U2="_label_7uomf_163",Br={root:P2,sm:z2,md:O2,lg:D2,horizontal:B2,alignStart:F2,vertical:W2,inner:H2,iconSlot:q2,label:U2};function Vp(t){return typeof t=="number"?`${t}px`:t}const V2=g.forwardRef(({size:t="md",layout:a="horizontal",align:i="center",label:l="Add",hideLabel:c=!1,icon:u,height:p,borderRadius:f,className:m,style:x,disabled:y,type:_="button",...w},S)=>{const j=u??r.jsx(Ya,{size:"100%"}),N={};return p!==void 0&&(N["--area-min-height"]=Vp(p)),f!==void 0&&(N["--area-radius"]=Vp(f)),r.jsx("button",{ref:S,type:_,className:te(Br.root,Br[t],Br[a],i==="start"&&Br.alignStart,m),disabled:y,"data-size":t,"data-layout":a,style:{...N,...x},...w,children:r.jsxs("span",{className:Br.inner,children:[r.jsx("span",{className:Br.iconSlot,"aria-hidden":"true",children:j}),!c&&l&&r.jsx("span",{className:Br.label,children:l})]})})});V2.displayName="AreaButton";const G2="_root_b29pw_8",Y2="_image_b29pw_33",Z2="_initials_b29pw_40",K2="_iconSlot_b29pw_52",mr={root:G2,image:Y2,initials:Z2,iconSlot:K2,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function Q2({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function X2(t){const a=t.trim().split(/\s+/).filter(c=>/[\p{L}\p{N}]/u.test(c));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),l=a[a.length-1].charAt(0);return(i+l).toUpperCase()}const In=g.forwardRef(({src:t,alt:a,initials:i,name:l,icon:c,size:u="md",color:p="neutral",variant:f="subtle",shape:m="circle",className:x,...y},_)=>{const[w,S]=g.useState(!1),j=!!t&&!w,N=(i==null?void 0:i.slice(0,2).toUpperCase())??(l?X2(l):"");let R;return j?R=r.jsx("img",{src:t,alt:a??"",className:mr.image,onError:()=>S(!0),draggable:!1},t):N?R=r.jsx("span",{className:mr.initials,"aria-hidden":a?void 0:!0,children:N}):R=r.jsx("span",{className:mr.iconSlot,"aria-hidden":"true",children:c??r.jsx(Q2,{})}),r.jsx("span",{ref:_,"data-size":u,"data-color":p,"data-variant":f,"data-shape":m,className:te(mr.root,mr[`size-${u}`],mr[`color-${p}`],mr[`variant-${f}`],mr[`shape-${m}`],x),...y,children:R})});In.displayName="Avatar";const J2="_root_uqz3u_7",ev={root:J2},Ln=g.forwardRef(({as:t="span",className:a,children:i,...l},c)=>r.jsx(t,{ref:c,className:te(ev.root,a),...l,children:i}));Ln.displayName="Eyebrow";const tv="_root_1tnwf_15",nv={root:tv},rv=g.forwardRef(({scale:t="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:l="",onChange:c,readOnly:u=!1,disabled:p=!1,className:f,onInput:m,...x},y)=>{const _=i!==void 0,w=g.useRef(null),[S,j]=g.useState(()=>_?!i:!l),N=g.useCallback(C=>{w.current=C,typeof y=="function"?y(C):y&&(y.current=C)},[y]);g.useEffect(()=>{!_&&w.current&&l&&(w.current.textContent=l,j(!l))},[]),g.useEffect(()=>{_&&w.current&&(w.current.textContent??"")!==i&&(w.current.textContent=i??"",j(!(i??"")))},[i,_]);const R=C=>{const A=C.currentTarget.textContent??"";j(A===""),c==null||c(A),m==null||m(C)},T=C=>{C.preventDefault();const A=C.clipboardData.getData("text/plain");document.execCommand("insertText",!1,A)},L=!p&&!u;return r.jsx("span",{ref:N,contentEditable:L?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":p||void 0,"aria-readonly":u||void 0,"data-scale":t,"data-empty":S||void 0,"data-placeholder":a,"data-disabled":p||void 0,"data-readonly":u||void 0,className:te(nv.root,f),onInput:R,onPaste:T,...x})});rv.displayName="TypeBox";const ov="_root_1brpy_12",av="_ghost_1brpy_27",iv="_path_1brpy_32",Ea={root:ov,"ai-spin":"_ai-spin_1brpy_1",ghost:av,"ai-morph":"_ai-morph_1brpy_1",path:iv,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},sv={xs:16,sm:24,md:32,lg:48,xl:64},lv={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Gp="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",ds=t=>t==="inverse"||t==="inverse-light",cv=t=>t==="stroke"||t==="stroke-light",Md=g.forwardRef(({size:t="md",variant:a="gradient-fill",state:i="loading",className:l,style:c,"aria-label":u,...p},f)=>{const m=g.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${m}`,y=`aiglow-${m}`,_=typeof t=="string",w=_?sv[t]:t,S=_?lv[t]:w<=16?1.75:w<=24?1.5:w<=32?1.25:1.1,j=a==="gradient-fill"?`url(#${x})`:ds(a)?"currentColor":"none",N=ds(a)?"none":cv(a)?"currentColor":`url(#${x})`,R="currentColor",T=a!=="stroke"&&a!=="stroke-light"&&!ds(a);return r.jsxs("svg",{ref:f,width:w,height:w,viewBox:"0 0 24 24",fill:"none",className:te(Ea.root,Ea[`variant-${a}`],Ea[`state-${i}`],l),style:c,"data-state":i,"aria-label":u??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...p,children:[!ds(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:Gp,stroke:R,strokeWidth:S*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Ea.ghost}),r.jsx("path",{d:Gp,fill:j,stroke:N==="none"?void 0:N,strokeWidth:N==="none"?void 0:S,strokeLinecap:"round",strokeLinejoin:"round",filter:T?`url(#${y})`:void 0,className:Ea.path})]})});Md.displayName="AILoader";const dv="_root_10act_14",uv="_hovered_10act_68",hv="_loading_10act_69",pv="_sm_10act_90",fv="_md_10act_98",mv="_lg_10act_106",gv="_dark_10act_116",vv="_icon_10act_122",So={root:dv,hovered:uv,loading:hv,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:pv,md:fv,lg:mv,dark:gv,icon:vv},Yp={sm:12,md:14,lg:18};function yv({size:t,light:a}){return r.jsxs("svg",{width:t,height:t,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const ff=g.forwardRef(({size:t="md",dark:a,loading:i,className:l,onMouseEnter:c,onMouseLeave:u,...p},f)=>{const[m,x]=g.useState(!1);return r.jsx("button",{ref:f,className:te(So.root,So[t],a&&So.dark,i?So.loading:m&&So.hovered,l),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),c==null||c(y)},onMouseLeave:y=>{x(!1),u==null||u(y)},...p,children:r.jsx("span",{className:So.icon,children:i?r.jsx(Md,{size:Yp[t],variant:a?"inverse-light":"gradient-fill"}):r.jsx(yv,{size:Yp[t],light:a})})})});ff.displayName="AICoreButton";const xv="_root_1qx4u_9",wv="_star_1qx4u_34",Bc={root:xv,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:wv},_v="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",mf=g.forwardRef(({size:t="sm",className:a,...i},l)=>r.jsx("span",{ref:l,"data-size":t,"aria-hidden":"true",className:te(Bc.root,Bc[`size-${t}`],a),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:Bc.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:_v,fill:"currentColor"})})}));mf.displayName="AIAvatar";const bv="_shell_lalw3_21",kv="_wrapper_lalw3_58",Cv="_card_lalw3_65",jv="_cardClip_lalw3_94",Sv="_textarea_lalw3_160",Nv="_actions_lalw3_203",Io={shell:bv,wrapper:kv,card:Cv,cardClip:jv,textarea:Sv,actions:Nv},gf=g.forwardRef(({className:t,children:a,...i},l)=>r.jsx("div",{ref:l,className:te(Io.shell,t),...i,children:a}));gf.displayName="AIComposer";function Rv(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const vf=g.forwardRef(({value:t,onChange:a,onSubmit:i,maxRows:l=5,radius:c="sm",placeholder:u="Ask AI anything…",className:p,onKeyDown:f,disabled:m,children:x,style:y,..._},w)=>{const S=g.useRef(null);g.useEffect(()=>{const L=S.current;L&&(L.style.height="auto",L.style.height=`${L.scrollHeight}px`)},[t]);const j=g.useCallback(L=>a(L.target.value),[a]),N=g.useCallback(L=>{f==null||f(L),!L.defaultPrevented&&L.key==="Enter"&&!L.shiftKey&&i&&(L.preventDefault(),i())},[f,i]),R=g.useCallback(L=>{S.current=L,Rv(w,L)},[w]),T={...y??{},"--ai-composer-max-rows":l};return r.jsx("div",{className:te(Io.wrapper,p),"data-radius":c,children:r.jsx("div",{className:Io.card,children:r.jsxs("div",{className:Io.cardClip,children:[r.jsx("textarea",{..._,ref:R,className:Io.textarea,rows:1,value:t,onChange:j,onKeyDown:N,placeholder:u,disabled:m,style:T}),x!=null&&r.jsx("div",{className:Io.actions,children:x})]})})})});vf.displayName="AIComposerInput";const Lv="_root_fv0gc_10",Mv="_simple_fv0gc_28",$v="_float_fv0gc_83",Zp={root:Lv,simple:Mv,float:$v},Iv=g.forwardRef(({variant:t="simple",className:a,children:i,...l},c)=>r.jsx("section",{ref:c,"data-variant":t,className:te(Zp.root,Zp[t],a),...l,children:i}));Iv.displayName="AIConversation";const Tv="_fadeFrame_1l0ib_19",Av="_scroller_1l0ib_32",Ev="_content_1l0ib_89",Pv="_messageBlock_1l0ib_108",zv="_messageBlockAi_1l0ib_116",Ov="_inboundBlock_1l0ib_128",Dv="_inboundLoader_1l0ib_136",Bv="_inboundLoaderLabel_1l0ib_146",Fv="_outboundBlock_1l0ib_153",Wv="_outboundHeader_1l0ib_161",Hv="_messageBlockUser_1l0ib_168",qv="_aiThreadOutboundIn_1l0ib_1",Uv="_messageBody_1l0ib_182",Vv="_messageBodyAi_1l0ib_193",Gv="_messageBodyUser_1l0ib_200",Yv="_label_1l0ib_159",Zv="_labelAi_1l0ib_221",Kv="_labelUser_1l0ib_159",Qv="_labelAvatar_1l0ib_224",Xv="_labelText_1l0ib_237",Jv="_timestamp_1l0ib_244",e3="_timestampAi_1l0ib_259",t3="_timestampUser_1l0ib_260",n3="_timestampInline_1l0ib_270",r3="_aiThreadOutboundFadeIn_1l0ib_1",Me={fadeFrame:Tv,scroller:Av,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:Ev,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:Pv,messageBlockAi:zv,inboundBlock:Ov,inboundLoader:Dv,inboundLoaderLabel:Bv,outboundBlock:Fv,outboundHeader:Wv,messageBlockUser:Hv,aiThreadOutboundIn:qv,messageBody:Uv,messageBodyAi:Vv,messageBodyUser:Gv,label:Yv,labelAi:Zv,labelUser:Kv,labelAvatar:Qv,labelText:Xv,timestamp:Jv,timestampAi:e3,timestampUser:t3,timestampInline:n3,aiThreadOutboundFadeIn:r3},Kp=8;function o3(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const a3=g.forwardRef(({density:t="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:l=80,className:c,children:u,...p},f)=>{const m=g.useRef(null),x=g.useRef(null),y=g.useRef(!0),[_,w]=g.useState(!1),[S,j]=g.useState(!1),N=g.useCallback(R=>{m.current=R,o3(f,R)},[f]);return g.useEffect(()=>{const R=m.current,T=x.current;if(!R||!T)return;const L=()=>{const{scrollTop:P,scrollHeight:B,clientHeight:G}=R;return B-P-G<l},C=P=>{R.scrollTo({top:R.scrollHeight,behavior:P?"smooth":"auto"})},A=()=>{const{scrollTop:P,scrollHeight:B,clientHeight:G}=R,K=P>Kp,ee=B-P-G>Kp;w(V=>V===K?V:K),j(V=>V===ee?V:ee)};i&&(C(!1),y.current=!0),A();const $=()=>{y.current=L(),A()};R.addEventListener("scroll",$,{passive:!0});const F=new ResizeObserver(()=>{i&&y.current&&C(!0),A()});return F.observe(T),F.observe(R),()=>{R.removeEventListener("scroll",$),F.disconnect()}},[i,l]),r.jsx("div",{className:Me.fadeFrame,"data-fade-top":_,"data-fade-bottom":S,children:r.jsx("div",{ref:N,className:te(Me.scroller,Me[`padding-${a}`],c),...p,children:r.jsx("div",{ref:x,className:te(Me.content,Me[`density-${t}`]),children:u})})})});a3.displayName="AIThread";const Is=g.forwardRef(({align:t="ai",avatar:a,className:i,children:l,...c},u)=>r.jsxs("div",{ref:u,className:te(Me.label,t==="user"?Me.labelUser:Me.labelAi,i),...c,children:[a!=null&&r.jsx("span",{className:Me.labelAvatar,children:a}),r.jsx("span",{className:Me.labelText,children:l})]}));Is.displayName="AILabel";const i3=t=>t.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function s3(t,a){if(typeof t=="string")return{text:t};const i=t instanceof Date?t:new Date(t);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const Za=g.forwardRef(({value:t,align:a="ai",format:i=i3,inline:l=!1,className:c,...u},p)=>{const f=g.useMemo(()=>s3(t,i),[t,i]);return f?r.jsx("time",{ref:p,className:te(Me.timestamp,l?Me.timestampInline:a==="user"?Me.timestampUser:Me.timestampAi,c),dateTime:f.iso,...u,children:f.text}):null});Za.displayName="AITimestamp";function l3(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(Za,{align:"ai",value:t}):t}function c3(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(Is,{align:"ai",children:t}):t}const d3=g.forwardRef(({label:t,time:a,className:i,children:l,...c},u)=>r.jsxs("div",{ref:u,"data-author":"ai",className:te(Me.messageBlock,Me.messageBlockAi,i),...c,children:[c3(t),r.jsx("div",{className:te(Me.messageBody,Me.messageBodyAi),children:l}),l3(a)]}));d3.displayName="AIAssistantMessage";function u3(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(Za,{align:"user",value:t}):t}function h3(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(Is,{align:"user",children:t}):t}const p3=g.forwardRef(({label:t,time:a,className:i,children:l,...c},u)=>r.jsxs("div",{ref:u,"data-author":"user",className:te(Me.messageBlock,Me.messageBlockUser,i),...c,children:[h3(t),r.jsx("div",{className:te(Me.messageBody,Me.messageBodyUser),children:l}),u3(a)]}));p3.displayName="AIUserMessage";function f3(t){return t===!1?null:t==null||t===!0?r.jsx(mf,{size:"sm"}):t}function m3(t,a){return t==null&&a==null?null:typeof t=="string"||typeof t=="number"||t==null?r.jsx(Is,{align:"ai",avatar:a,children:t}):t}const g3=g.forwardRef(({avatar:t,label:a="Teambridge AI",activity:i,actions:l,loading:c=!1,loaderLabel:u="Thinking…",className:p,children:f,...m},x)=>{const y=f3(t),_=m3(a,y);return r.jsxs("div",{ref:x,"data-author":"ai",className:te(Me.messageBlock,Me.messageBlockAi,Me.inboundBlock,p),...m,children:[_,i,f!=null&&r.jsx("div",{className:te(Me.messageBody,Me.messageBodyAi),children:f}),c&&r.jsxs("div",{className:Me.inboundLoader,"aria-live":"polite",children:[r.jsx(Md,{size:"xs"}),u!=null&&r.jsx("span",{className:Me.inboundLoaderLabel,children:u})]}),l]})});g3.displayName="AIInboundMessage";function v3(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const y3=g.forwardRef(({label:t="You",time:a,timeFormat:i,className:l,children:c,...u},p)=>{const f=a==null?null:v3(a)?r.jsx(Za,{value:a,format:i,inline:!0}):a,m=t==null?null:typeof t=="string"||typeof t=="number"?r.jsx("span",{className:Me.labelText,children:t}):t,x=m!=null||f!=null;return r.jsxs("div",{ref:p,"data-author":"user",className:te(Me.messageBlock,Me.messageBlockUser,Me.outboundBlock,l),...u,children:[x&&r.jsxs("div",{className:te(Me.label,Me.labelUser,Me.outboundHeader),children:[m,f]}),r.jsx("div",{className:te(Me.messageBody,Me.messageBodyUser),children:c})]})});y3.displayName="AIOutboundMessage";const kr=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};kr.displayName="ChevronDownIcon";const x3="_root_1j4eq_8",w3="_header_1j4eq_17",_3="_headerSummary_1j4eq_53",b3="_aiTrailSummaryFade_1j4eq_1",k3="_aiTrailHeaderAppend_1j4eq_1",C3="_aiTrailEllipsis_1j4eq_1",j3="_headerCurrent_1j4eq_128",S3="_headerChevron_1j4eq_159",N3="_headerChevronExpanded_1j4eq_173",R3="_body_1j4eq_187",L3="_bodyExpanded_1j4eq_200",M3="_bodyCollapsed_1j4eq_201",$3="_bodyInner_1j4eq_203",I3="_bodyContent_1j4eq_187",T3="_step_1j4eq_225",A3="_stepIcon_1j4eq_242",E3="_stepAnimating_1j4eq_256",P3="_aiTrailStepPulse_1j4eq_1",z3="_stepBody_1j4eq_267",O3="_stepHead_1j4eq_282",D3="_stepLabel_1j4eq_286",B3="_stepSeparator_1j4eq_288",F3="_stepDetail_1j4eq_292",W3="_subToggle_1j4eq_302",H3="_subToggleCount_1j4eq_335",q3="_subToggleChevron_1j4eq_339",U3="_subActivityWrap_1j4eq_358",V3="_subActivityExpanded_1j4eq_364",G3="_subActivityCollapsed_1j4eq_365",Y3="_subActivityClip_1j4eq_367",Z3="_subActivityList_1j4eq_378",K3="_subActivity_1j4eq_358",Q3="_aiTrailSubActivityType_1j4eq_1",X3="_aiTrailSubActivityFade_1j4eq_1",We={root:x3,header:w3,headerSummary:_3,aiTrailSummaryFade:b3,aiTrailHeaderAppend:k3,aiTrailEllipsis:C3,headerCurrent:j3,headerChevron:S3,headerChevronExpanded:N3,body:R3,bodyExpanded:L3,bodyCollapsed:M3,bodyInner:$3,bodyContent:I3,step:T3,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:A3,stepAnimating:E3,aiTrailStepPulse:P3,stepBody:z3,stepHead:O3,stepLabel:D3,stepSeparator:B3,stepDetail:F3,subToggle:W3,subToggleCount:H3,subToggleChevron:q3,subActivityWrap:U3,subActivityExpanded:V3,subActivityCollapsed:G3,subActivityClip:Y3,subActivityList:Z3,subActivity:K3,aiTrailSubActivityType:Q3,aiTrailSubActivityFade:X3},$d=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};$d.displayName="MessageDotsSquareIcon";function yf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}yf.displayName="SearchMdIcon";function Eo({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const xf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};xf.displayName="Globe01Icon";const wf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};wf.displayName="Code02Icon";function _f({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}_f.displayName="Tool01Icon";const Vt=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Bo=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Bo.displayName="AlertCircleIcon";const J3={thinking:r.jsx($d,{size:14}),tool:r.jsx(_f,{size:14}),search:r.jsx(yf,{size:14}),file:r.jsx(Eo,{size:14}),web:r.jsx(xf,{size:14}),code:r.jsx(wf,{size:14}),content:r.jsx(Vt,{size:14})},Ts=g.forwardRef(({type:t,status:a="done",detail:i,icon:l,subActivities:c,groupState:u="done",className:p,children:f,...m},x)=>{const y=a==="active"&&u==="live",_=a==="active"&&u==="live",w=a==="active"||a==="error",[S,j]=g.useState(null),N=S!==null?S:w;g.useEffect(()=>{j(null)},[a]);const R=g.useCallback(()=>j(!N),[N]),T=!!c&&c.length>0,L=(c==null?void 0:c.length)??0,C=a==="error"?r.jsx(Bo,{size:14}):l??J3[t];return r.jsxs("div",{ref:x,"data-step-type":t,"data-step-status":a,className:te(We.step,We[`step-${a}`],y&&We.stepAnimating,p),...m,children:[r.jsx("span",{className:We.stepIcon,"aria-hidden":!0,children:C}),r.jsxs("span",{className:We.stepBody,children:[r.jsxs("span",{className:We.stepHead,children:[r.jsx("span",{className:We.stepLabel,children:f}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:We.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:We.stepDetail,children:i})]}),T&&r.jsxs("button",{type:"button",className:We.subToggle,onClick:R,"aria-expanded":N,"aria-label":N?`Collapse ${L} sub-steps`:`Expand ${L} sub-steps`,"data-expanded":N||void 0,children:[r.jsx("span",{className:We.subToggleCount,children:L}),r.jsx("span",{className:We.subToggleChevron,"aria-hidden":!0,children:r.jsx(kr,{size:10})})]})]}),T&&r.jsx(r.Fragment,{children:r.jsx("div",{className:te(We.subActivityWrap,N?We.subActivityExpanded:We.subActivityCollapsed),"aria-hidden":!N,children:r.jsx("div",{className:We.subActivityClip,children:r.jsx("ul",{className:We.subActivityList,"data-animating":_||void 0,children:c.map((A,$)=>r.jsx("li",{className:We.subActivity,children:A},$))})})})})]})]})});Ts.displayName="AIActivityStep";function Qp(t){return t==="error"}function ey(t,a,i,l,c,u){if(t==="live")return i.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:c,children:i[l]??i[i.length-1]},l);const p=t==="error"?"Stopped":u?`Thought for ${u}`:"Thought";if(i.length===0){const f=a===1?"1 step":`${a} steps`;return`${p} · ${f}`}return r.jsxs(r.Fragment,{children:[p,i.map((f,m)=>r.jsxs(g.Fragment,{children:[" · ",f]},m))]})}const Id=g.forwardRef(({state:t="live",expanded:a,defaultExpanded:i,onToggle:l,duration:c,summary:u,className:p,children:f,...m},x)=>{const y=a!==void 0,[_,w]=g.useState(i??Qp(t)),[S,j]=g.useState(!1);g.useEffect(()=>{y||S||w(Qp(t))},[t,y,S]);const N=y?!!a:_,R=g.useCallback(()=>{const F=!N;y||(w(F),j(!0)),l==null||l(F)},[N,y,l]),{enhancedChildren:T,stepCount:L,stepLabels:C,currentLabelIdx:A}=g.useMemo(()=>{let F=0;const P=[];let B=-1;return{enhancedChildren:g.Children.map(f,K=>{if(!g.isValidElement(K))return K;const ee=K.props;if(!("type"in ee||"status"in ee))return K;F+=1;const J=ee.status??"done";return J==="pending"?null:(ee.children!=null&&(P.push(ee.children),J==="active"&&(B=P.length-1)),ty(K,t))}),stepCount:F,stepLabels:P,currentLabelIdx:B>=0?B:P.length-1}},[f,t]),$=u??ey(t,L,C,A,We.headerCurrent,c);return r.jsxs("div",{ref:x,"data-state":t,"data-expanded":N,className:te(We.root,p),...m,children:[r.jsxs("button",{type:"button",className:We.header,onClick:R,"aria-expanded":N,"aria-label":N?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:We.headerSummary,children:$},`${t}-${A}`),r.jsx("span",{className:te(We.headerChevron,N&&We.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(kr,{size:14})})]}),r.jsx("div",{className:te(We.body,N?We.bodyExpanded:We.bodyCollapsed),"aria-hidden":!N,children:r.jsx("div",{className:We.bodyInner,children:r.jsxs("div",{className:We.bodyContent,children:[T,t==="done"&&r.jsx(Ts,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Id.displayName="AIActivityTrail";function ty(t,a){return g.cloneElement(t,{groupState:a})}var As=hf();const ny="_wrapper_3tqlm_10",ry="_tooltip_3tqlm_22",oy="_portal_3tqlm_23",ay="_top_3tqlm_61",iy="_bottom_3tqlm_71",sy="_left_3tqlm_81",ly="_right_3tqlm_91",us={wrapper:ny,tooltip:ry,portal:oy,top:ay,bottom:iy,left:sy,right:ly},Kr=({content:t,placement:a="top",delay:i=0,disabled:l=!1,maxWidth:c=280,offset:u=0,children:p})=>{const[f,m]=g.useState(!1),[x,y]=g.useState({top:0,left:0}),_=g.useRef(null),w=g.useRef(),S=g.useId(),j=g.useCallback(()=>{if(!_.current)return;const C=_.current.getBoundingClientRect(),A=6+u;let $=0,F=0;switch(a){case"top":$=C.top-A,F=C.left+C.width/2;break;case"bottom":$=C.bottom+A,F=C.left+C.width/2;break;case"left":$=C.top+C.height/2,F=C.left-A;break;case"right":$=C.top+C.height/2,F=C.right+A;break}y({top:$,left:F})},[a,u]),N=g.useCallback(()=>{l||(j(),clearTimeout(w.current),i>0?w.current=setTimeout(()=>m(!0),i):m(!0))},[l,i,j]),R=g.useCallback(()=>{clearTimeout(w.current),m(!1)},[]);g.useEffect(()=>{if(!f)return;const C=()=>j();return window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[f,j]);const T=wr.cloneElement(p,{"aria-describedby":f?S:void 0}),L=r.jsx("span",{id:S,role:"tooltip",className:te(us.tooltip,us[a],us.portal),"data-visible":f||void 0,style:{top:x.top,left:x.left,maxWidth:c!==void 0?c:void 0},children:t});return r.jsxs("span",{ref:_,className:us.wrapper,onMouseEnter:N,onMouseLeave:R,onFocus:N,onBlur:R,children:[T,As.createPortal(L,document.body)]})};Kr.displayName="Tooltip";const cy="_root_v8mqg_9",dy="_hover_v8mqg_21",Fc={root:cy,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:dy};function uy(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const bf=g.forwardRef(({visibility:t="always",align:a="start",time:i,timeFormat:l,className:c,children:u,...p},f)=>{const m=i==null?null:uy(i)?r.jsx(Za,{value:i,format:l,inline:!0}):i,x=_=>{if(!g.isValidElement(_))return _;const w=_;if(w.type===Kr)return w;const S=w.props["aria-label"];return S?r.jsx(Kr,{content:S,placement:"top",delay:150,children:w}):w},y=g.Children.map(u,_=>{if(g.isValidElement(_)&&_.type===g.Fragment){const w=_.props.children;return g.Children.map(w,x)}return x(_)});return r.jsxs("div",{ref:f,"data-visibility":t,"data-align":a,className:te(Fc.root,Fc[`align-${a}`],t==="hover"&&Fc.hover,c),...p,children:[y,m]})});bf.displayName="AIMessageActions";const hy="_card_1apq1_17",py="_header_1apq1_69",fy="_iconBadge_1apq1_74",my="_iconInner_1apq1_89",gy="_headerText_1apq1_100",vy="_headerTopRow_1apq1_109",yy="_eyebrow_1apq1_115",xy="_title_1apq1_124",wy="_subtitle_1apq1_130",_y="_headerTrailing_1apq1_135",by="_body_1apq1_141",ky="_footer_1apq1_152",Cy="_footerEnd_1apq1_157",jy="_metaRow_1apq1_162",Sy="_metaItem_1apq1_170",Ny="_resultHero_1apq1_180",Ry="_resultHeadline_1apq1_185",Ly="_resultDetail_1apq1_191",My="_clauses_1apq1_205",$y="_clause_1apq1_205",Iy="_clauseLabel_1apq1_215",Ty="_clauseBody_1apq1_225",Ay="_badgeExecuting_1apq1_245",Ve={card:hy,header:py,iconBadge:fy,iconInner:my,headerText:gy,headerTopRow:vy,eyebrow:yy,title:xy,subtitle:wy,headerTrailing:_y,body:by,footer:ky,footerEnd:Cy,metaRow:jy,metaItem:Sy,resultHero:Ny,resultHeadline:Ry,resultDetail:Ly,clauses:My,clause:$y,clauseLabel:Iy,clauseBody:Ty,badgeExecuting:Ay},Tn=g.forwardRef(({tone:t="neutral",accent:a=!0,fill:i=!1,icon:l,eyebrow:c,title:u,subtitle:p,trailing:f,footer:m,footerEnd:x=!1,className:y,children:_,...w},S)=>{const j=c!=null||f!=null,N=j||u!=null||p!=null,R=l!=null||N;return r.jsxs("div",{ref:S,"data-tone":t,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":l!=null||void 0,className:te(Ve.card,y),...w,children:[R&&r.jsxs("div",{className:Ve.header,children:[l!=null&&r.jsx("span",{className:te(Ve.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:Ve.iconInner,children:l})}),N&&r.jsxs("div",{className:Ve.headerText,children:[j&&r.jsxs("div",{className:Ve.headerTopRow,children:[c!=null&&r.jsx("span",{className:Ve.eyebrow,children:c}),f!=null&&r.jsx("span",{className:Ve.headerTrailing,children:f})]}),u!=null&&r.jsx("span",{className:Ve.title,children:u}),p!=null&&r.jsx("span",{className:Ve.subtitle,children:p})]})]}),_!=null&&r.jsx("div",{className:Ve.body,children:_}),m!=null&&r.jsx("div",{className:te(Ve.footer,x&&Ve.footerEnd),children:m})]})});Tn.displayName="UltronCard";const Ey="_root_zkkgh_6",Py="_sm_zkkgh_24",zy="_md_zkkgh_33",Oy="_lg_zkkgh_42",Dy="_neutral_zkkgh_53",By="_blue_zkkgh_66",Fy="_azure_zkkgh_79",Wy="_purple_zkkgh_92",Hy="_pink_zkkgh_105",qy="_red_zkkgh_118",Uy="_orange_zkkgh_131",Vy="_yellow_zkkgh_144",Gy="_matcha_zkkgh_157",Yy="_green_zkkgh_170",Zy="_subtle_zkkgh_184",Ky="_outline_zkkgh_190",Qy="_solid_zkkgh_196",Xy="_dot_zkkgh_203",Jy="_icon_zkkgh_212",ex="_dismiss_zkkgh_224",Fr={root:Ey,sm:Py,md:zy,lg:Oy,neutral:Dy,blue:By,azure:Fy,purple:Wy,pink:Hy,red:qy,orange:Uy,yellow:Vy,matcha:Gy,green:Yy,subtle:Zy,outline:Ky,solid:Qy,dot:Xy,icon:Jy,dismiss:ex},Ka=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},tx={sm:10,md:12,lg:14},_r=g.forwardRef(({variant:t="subtle",color:a="neutral",size:i="md",dot:l,leadingIcon:c,dismissible:u,onDismiss:p,className:f,children:m,...x},y)=>r.jsxs("span",{ref:y,className:te(Fr.root,Fr[i],Fr[a],Fr[t],f),...x,children:[l&&r.jsx("span",{className:Fr.dot,"aria-hidden":"true"}),c&&r.jsx("span",{className:te(Fr.icon,"alloy-icon-slot"),"aria-hidden":"true",children:c}),m,u&&r.jsx("button",{type:"button",className:Fr.dismiss,"aria-label":"Remove",onClick:_=>{_.stopPropagation(),p==null||p()},children:r.jsx(Ka,{size:tx[i]})})]}));_r.displayName="Tag";function kf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}kf.displayName="SlashCircle01Icon";const Td=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Td.displayName="EyeIcon";function Es({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Es.displayName="Target01Icon";function qr({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}qr.displayName="ClockIcon";const Qa=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Qa.displayName="RefreshCw04Icon";const br=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};br.displayName="CheckCircleIcon";function Ps({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ps.displayName="Save01Icon";const nx={sm:11,md:12,lg:14},rx={ignored:{label:"Ignored",color:"neutral",Icon:kf},monitored:{label:"Monitored",color:"blue",Icon:Td},recommended:{label:"Recommended",color:"purple",Icon:Es},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:qr},executing:{label:"Executing",color:"azure",Icon:Qa},completed:{label:"Completed",color:"green",Icon:br},saved:{label:"Saved",color:"matcha",Icon:Ps}},Xr=g.forwardRef(({status:t,size:a="sm",label:i,className:l,...c},u)=>{const p=rx[t],f=p.Icon;return r.jsx(_r,{ref:u,color:p.color,size:a,variant:"subtle",leadingIcon:r.jsx(f,{size:nx[a]}),className:te(t==="executing"&&Ve.badgeExecuting,l),...c,children:i??p.label})});Xr.displayName="UltronStatusBadge";function zs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}zs.displayName="Bell01Icon";const ox=g.forwardRef(({title:t,icon:a,eyebrow:i="Event",meta:l,status:c,tone:u="neutral",children:p,...f},m)=>r.jsx(Tn,{ref:m,tone:u,eyebrow:i,title:t,icon:a??r.jsx(zs,{size:14}),trailing:c?r.jsx(Xr,{status:c}):void 0,...f,children:((l==null?void 0:l.length)||p)&&r.jsxs(r.Fragment,{children:[l!=null&&l.length?r.jsx("div",{className:Ve.metaRow,children:l.map((x,y)=>r.jsxs("span",{className:Ve.metaItem,children:[x.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,p]})}));ox.displayName="UltronEventCard";const ax=g.forwardRef(({eyebrow:t="Understanding",icon:a,entities:i,tone:l="info",children:c,...u},p)=>r.jsxs(Tn,{ref:p,tone:l,eyebrow:t,icon:a??r.jsx($d,{size:14}),...u,children:[c,i&&r.jsx("div",{className:Ve.metaRow,children:i})]}));ax.displayName="UltronUnderstandingCard";const ix={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},sx=g.forwardRef(({eyebrow:t="Decision",icon:a,factors:i,tone:l="warning",children:c,...u},p)=>r.jsxs(Tn,{ref:p,tone:l,eyebrow:t,icon:a??r.jsx(Es,{size:14}),...u,children:[c,i!=null&&i.length?r.jsx("div",{className:Ve.metaRow,children:i.map((f,m)=>r.jsx(_r,{size:"sm",color:ix[l],variant:"subtle",children:f},m))}):null]}));sx.displayName="UltronDecisionCard";const lx="_root_ou64w_8",cx="_xs_ou64w_75",dx="_sm_ou64w_84",ux="_md_ou64w_93",hx="_lg_ou64w_102",px="_xl_ou64w_111",fx="_iconOnly_ou64w_122",mx="_primary_ou64w_132",gx="_secondary_ou64w_148",vx="_tertiary_ou64w_167",yx="_ghost_ou64w_185",xx="_destructive_ou64w_203",wx="_destructiveSecondary_ou64w_221",_x="_artwork_ou64w_69",bx="_label_ou64w_254",kx="_spinner_ou64w_69",Cx="_light_ou64w_281",qt={root:lx,xs:cx,sm:dx,md:ux,lg:hx,xl:px,iconOnly:fx,primary:mx,secondary:gx,tertiary:vx,ghost:yx,destructive:xx,destructiveSecondary:wx,artwork:_x,label:bx,spinner:kx,"alloy-spin":"_alloy-spin_ou64w_1",light:Cx},jx={primary:qt.primary,secondary:qt.secondary,tertiary:qt.tertiary,ghost:qt.ghost,destructive:qt.destructive,"destructive-secondary":qt.destructiveSecondary},Ie=g.forwardRef(({variant:t="primary",size:a="md",loading:i=!1,leadingArtwork:l,trailingArtwork:c,iconOnly:u=!1,className:p,children:f,disabled:m,...x},y)=>{const _=m||i;return r.jsxs("button",{ref:y,className:te(qt.root,jx[t],qt[a],u&&qt.iconOnly,p),disabled:_,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":t,"data-size":a,...x,children:[i&&r.jsx("span",{className:qt.spinner,"aria-hidden":"true"}),!i&&u&&r.jsx("span",{className:te(qt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!u&&r.jsxs(r.Fragment,{children:[l&&r.jsx("span",{className:te(qt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l}),f&&r.jsx("span",{className:qt.label,children:f}),c&&r.jsx("span",{className:te(qt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:c})]})]})});Ie.displayName="Button";function Cf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Cf.displayName="XCircleIcon";const Sx=g.forwardRef(({eyebrow:t="Recommendation",icon:a,actions:i,onIgnore:l,ignoreLabel:c="Ignore",tone:u="info",children:p,...f},m)=>{const x=r.jsxs(r.Fragment,{children:[i.map((y,_)=>r.jsx(Ie,{size:"sm",variant:y.variant??(_===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},_)),l&&r.jsx(Ie,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(Cf,{size:16}),onClick:l,children:c})]});return r.jsx(Tn,{ref:m,tone:u,eyebrow:t,icon:a??r.jsx(Es,{size:14}),footer:x,...f,children:p})});Sx.displayName="UltronRecommendationCard";function jf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}jf.displayName="Lock01Icon";const Nx=g.forwardRef(({title:t,eyebrow:a="Approval required",icon:i,approveLabel:l="Approve & send",onApprove:c,approving:u=!1,cancelLabel:p="Cancel",onCancel:f,editLabel:m="Edit",onEdit:x,tone:y="warning",children:_,...w},S)=>{const j=r.jsxs(r.Fragment,{children:[f&&r.jsx(Ie,{size:"md",variant:"ghost",onClick:f,children:p}),x&&r.jsx(Ie,{size:"md",variant:"secondary",onClick:x,children:m}),r.jsx(Ie,{size:"md",variant:"primary",leadingArtwork:r.jsx(Vt,{size:18}),loading:u,onClick:c,children:l})]});return r.jsx(Tn,{ref:S,tone:y,eyebrow:a,title:t,icon:i??r.jsx(jf,{size:14}),trailing:r.jsx(Xr,{status:"awaiting-approval"}),footer:j,footerEnd:!0,...w,children:_})});Nx.displayName="UltronApprovalCard";const Rx=g.forwardRef(({eyebrow:t="Working",icon:a,steps:i,state:l="live",duration:c,tone:u="info",...p},f)=>r.jsx(Tn,{ref:f,tone:u,eyebrow:t,icon:a??r.jsx(Qa,{size:14}),trailing:r.jsx(Xr,{status:l==="done"?"completed":"executing"}),...p,children:r.jsx(Id,{state:l,duration:c,children:i.map((m,x)=>r.jsx(Ts,{type:m.type??"tool",status:m.status??"pending",detail:m.detail,subActivities:m.subActivities,children:m.label},x))})}));Rx.displayName="UltronExecutionCard";const Lx=g.forwardRef(({headline:t,detail:a,avatar:i,status:l="completed",tone:c="success",footer:u,...p},f)=>r.jsx(Tn,{ref:f,tone:c,fill:!0,accent:!1,trailing:r.jsx(Xr,{status:l}),footer:u,...p,children:r.jsxs("div",{className:Ve.resultHero,children:[r.jsx("span",{className:te(Ve.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(br,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:Ve.resultHeadline,children:t}),a!=null&&r.jsx("div",{className:Ve.resultDetail,children:a})]})]})}));Lx.displayName="UltronResultCard";function Sf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Sf.displayName="ZapIcon";const Mx=g.forwardRef(({title:t="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:l="Save as workflow",onSave:c,saving:u=!1,dismissLabel:p="Not now",onDismiss:f,tone:m="info",children:x,...y},_)=>{const w=r.jsxs(r.Fragment,{children:[r.jsx(Ie,{size:"md",variant:"primary",leadingArtwork:r.jsx(Ps,{size:18}),loading:u,onClick:c,children:l}),f&&r.jsx(Ie,{size:"md",variant:"ghost",onClick:f,children:p})]});return r.jsx(Tn,{ref:_,tone:m,fill:!0,accent:!1,eyebrow:a,title:t,icon:i??r.jsx(Sf,{size:14}),footer:w,...y,children:x})});Mx.displayName="UltronWorkflowSaveCard";const Nf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Nf.displayName="GitBranch01Icon";function Wc({label:t,children:a}){return r.jsxs("div",{className:Ve.clause,children:[r.jsx("span",{className:Ve.clauseLabel,children:t}),r.jsx("span",{className:Ve.clauseBody,children:a})]})}const $x=g.forwardRef(({name:t,eyebrow:a="Workflow",icon:i,when:l,conditions:c,actions:u,status:p,footer:f,tone:m="info",...x},y)=>r.jsx(Tn,{ref:y,tone:m,eyebrow:a,title:t,icon:i??r.jsx(Nf,{size:14}),trailing:p?r.jsx(Xr,{status:p}):void 0,footer:f,...x,children:r.jsxs("div",{className:Ve.clauses,children:[r.jsx(Wc,{label:"When",children:l}),r.jsx(Wc,{label:"If",children:c}),r.jsx(Wc,{label:"Then",children:u})]})}));$x.displayName="UltronWorkflowPreviewCard";const Ix="_root_1nyuz_6",Tx="_sm_1nyuz_20",Ax="_md_1nyuz_29",Ex="_lg_1nyuz_38",Px="_divider_1nyuz_48",zx="_interactive_1nyuz_53",Ox="_disabled_1nyuz_60",Dx="_destructive_1nyuz_64",Bx="_selected_1nyuz_78",Fx="_label_1nyuz_87",Wx="_description_1nyuz_97",Hx="_leadingSlot_1nyuz_101",qx="_trailingSlot_1nyuz_102",Ux="_content_1nyuz_115",Vx="_taSwitch_1nyuz_167",Gx="_taSwitchThumb_1nyuz_188",Yx="_taCheckbox_1nyuz_203",Zx="_taRadio_1nyuz_226",Kx="_taRadioDot_1nyuz_244",Qx="_taExpand_1nyuz_252",Xx="_taStatus_1nyuz_266",Jx="_taStatus_success_1nyuz_273",e5="_taStatus_warning_1nyuz_274",t5="_taStatus_error_1nyuz_275",n5="_taStatus_info_1nyuz_276",dt={root:Ix,sm:Tx,md:Ax,lg:Ex,divider:Px,interactive:zx,disabled:Ox,destructive:Dx,selected:Bx,label:Fx,description:Wx,leadingSlot:Hx,trailingSlot:qx,content:Ux,taSwitch:Vx,taSwitchThumb:Gx,taCheckbox:Yx,taRadio:Zx,taRadioDot:Kx,taExpand:Qx,taStatus:Xx,taStatus_success:Jx,taStatus_warning:e5,taStatus_error:t5,taStatus_info:n5},en=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};en.displayName="ChevronRightIcon";const Ad=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ad.displayName="ArrowUpRightIcon";const r5="_root_4qytd_5",o5="_neutral_4qytd_25",a5="_primary_4qytd_30",i5="_success_4qytd_35",s5="_warning_4qytd_40",l5="_error_4qytd_45",c5="_info_4qytd_50",Xp={root:r5,neutral:o5,primary:a5,success:i5,warning:s5,error:l5,info:c5},Xa=g.forwardRef(({variant:t="neutral",className:a,children:i,...l},c)=>r.jsx("span",{ref:c,className:te(Xp.root,Xp[t],a),...l,children:i}));Xa.displayName="Badge";const d5=({checked:t})=>r.jsx("span",{className:dt.taSwitch,"data-checked":t||void 0,"aria-hidden":"true",children:r.jsx("span",{className:dt.taSwitchThumb})}),u5=({checked:t})=>r.jsx("span",{className:dt.taCheckbox,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),h5=({checked:t})=>r.jsx("span",{className:dt.taRadio,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("span",{className:dt.taRadioDot})}),p5=({count:t,label:a})=>{const i=t!==void 0?String(t):a;return i?r.jsx(Xa,{"aria-hidden":"true",children:i}):null},f5=({expanded:t})=>r.jsx("span",{className:dt.taExpand,"data-expanded":t||void 0,"aria-hidden":"true",children:r.jsx(en,{size:16,color:"currentColor"})}),m5=({variant:t})=>r.jsx("span",{className:te(dt.taStatus,dt[`taStatus_${t}`]),"aria-hidden":"true"}),g5=new Set(["badge","status"]),wn=g.forwardRef(({label:t,description:a,leadingSlot:i,trailingSlot:l,trailingAction:c,checked:u,defaultChecked:p=!1,onCheckedChange:f,badgeCount:m,badgeLabel:x,expanded:y=!1,statusVariant:_="success",divider:w=!0,size:S="md",interactive:j,selected:N=!1,destructive:R=!1,disabled:T=!1,className:L,onClick:C,onKeyDown:A,...$},F)=>{const P=c==="switch"||c==="checkbox"||c==="radio",[B,G]=g.useState(p),K=P?u!==void 0?u:B:!1,ee=j||!!C||P||c!==void 0&&!g5.has(c),V=c==="switch"?"switch":c==="checkbox"?"checkbox":c==="radio"?"radio":ee?"button":void 0,J=g.useCallback(ce=>{if(!T){if(P){const Z=!K;u===void 0&&G(Z),f==null||f(Z)}C==null||C(ce)}},[T,P,K,u,f,C]),ae=g.useCallback(ce=>{ee&&!T&&(ce.key==="Enter"||ce.key===" ")&&(ce.preventDefault(),J(ce)),A==null||A(ce)},[ee,T,J,A]),se=l??(()=>{if(!c)return null;switch(c){case"chevron":return r.jsx(en,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(Ad,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(d5,{checked:K});case"checkbox":return r.jsx(u5,{checked:K});case"radio":return r.jsx(h5,{checked:K});case"badge":return r.jsx(p5,{count:m,label:x});case"expand":return r.jsx(f5,{expanded:y});case"status":return r.jsx(m5,{variant:_});default:return null}})();return r.jsxs("div",{ref:F,role:V,tabIndex:ee&&!T?0:void 0,"aria-checked":P?K:void 0,"aria-selected":N||void 0,"aria-disabled":T||void 0,"data-selected":N||void 0,"data-disabled":T||void 0,"data-destructive":R||void 0,"data-trailing-action":c??void 0,className:te(dt.root,dt[S],w&&dt.divider,ee&&dt.interactive,N&&dt.selected,R&&dt.destructive,T&&dt.disabled,L),onClick:T?void 0:J,onKeyDown:ae,...$,children:[i&&r.jsx("div",{className:dt.leadingSlot,children:i}),r.jsxs("div",{className:dt.content,children:[r.jsx("span",{className:dt.label,children:t}),a&&r.jsx("span",{className:dt.description,children:a})]}),se&&r.jsx("div",{className:dt.trailingSlot,children:se})]})});wn.displayName="ListItem";const v5=g.forwardRef(({title:t,meta:a,icon:i,status:l,...c},u)=>r.jsx(wn,{ref:u,label:t,description:a,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(Xr,{status:l}),...c}));v5.displayName="UltronActivityStreamItem";const y5="_root_1sz1z_7",x5="_status_1sz1z_50",Hc={root:y5,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:x5},Rf=g.forwardRef(({disabled:t=!1,size:a="md",escapeTarget:i,onEscape:l,className:c,children:u,...p},f)=>{const m=g.useRef(null),[x,y]=g.useState(""),_=g.Children.map(u,w=>{if(!g.isValidElement(w))return w;const S=w.props;return g.cloneElement(w,{groupDisabled:t||!!S.groupDisabled})});return g.useEffect(()=>{if(!i||!l)return;const w=S=>{S.key==="Escape"&&l()};return i.addEventListener("keydown",w),()=>i.removeEventListener("keydown",w)},[i,l]),g.useCallback(w=>y(w),[]),r.jsxs("div",{ref:f,"data-size":a,className:te(Hc.root,Hc[`size-${a}`],c),...p,children:[_,r.jsx("span",{ref:m,className:Hc.status,role:"status","aria-live":"polite",children:x})]})});Rf.displayName="ComposerActions";function qc({size:t=24,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Ed=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ed.displayName="SearchSmIcon";const vs=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};vs.displayName="Trash03Icon";function To({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Jp({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Lf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Lf.displayName="ChevronSelectorVerticalIcon";const Po=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:u,strokeLinecap:"round",strokeLinejoin:"round"})]})};Po.displayName="ClipboardCheckIcon";const Mf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.25:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:u})})};Mf.displayName="SettingsGearIcon";const $f=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};$f.displayName="ChevronLeftIcon";const If=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};If.displayName="EyeOffIcon";const Tf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Tf.displayName="StopIcon";const Af=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Af.displayName="RecordingIcon";const Ef=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ef.displayName="BankIcon";function Os({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Os.displayName="ArrowNarrowUpIcon";function Pf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Pf.displayName="ArrowNarrowDownIcon";function zf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}zf.displayName="Microphone02Icon";const Of=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Of.displayName="AlertTriangleIcon";function Df({size:t=16,color:a="currentColor",...i}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Bf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Bf.displayName="Map01Icon";const Ff=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ff.displayName="ThumbsUpIcon";const Wf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Wf.displayName="ThumbsDownIcon";const Hf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M11.4926 4.29493C11.7435 3.85826 12.2565 3.85826 12.5074 4.29493L22.1414 20.9893C22.3921 21.4258 22.0774 22 21.634 22H2.36603C1.92257 22 1.6079 21.4258 1.85856 20.9893L11.4926 4.29493Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Hf.displayName="TriangleUpIcon";function Ds({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ds.displayName="CheckVerified01Icon";function Bs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Bs.displayName="LinkExternal01Icon";function Cs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Cs.displayName="MessageCircle02Icon";function qf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}qf.displayName="MinusIcon";function Uf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Uf.displayName="XCloseIcon";const w5="_base_i93xz_11",_5="_icon_i93xz_45",b5="_sendReady_i93xz_65",k5="_sendStreaming_i93xz_66",C5="_sendDisabled_i93xz_67",j5="_sendError_i93xz_68",S5="_attachIdle_i93xz_131",N5="_attachDisabled_i93xz_145",R5="_attachError_i93xz_152",L5="_voiceIdle_i93xz_165",M5="_voiceRecording_i93xz_179",$5="_voiceDisabled_i93xz_189",I5="_iconStack_i93xz_200",T5="_iconLayer_i93xz_209",st={base:w5,icon:_5,sendReady:b5,sendStreaming:k5,sendDisabled:C5,sendError:j5,attachIdle:S5,attachDisabled:N5,attachError:R5,voiceIdle:L5,voiceRecording:M5,voiceDisabled:$5,iconStack:I5,iconLayer:T5},A5={hidden:void 0,ready:st.sendReady,"disabled-invalid":st.sendDisabled,streaming:st.sendStreaming,error:st.sendError},E5=(t,a,i)=>{switch(t){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Vf=g.forwardRef(({state:t,onSend:a,onStop:i,onRetry:l,invalidReason:c,errorMessage:u,groupDisabled:p,className:f,style:m,...x},y)=>{const _=g.useRef(null),w=g.useRef(null),S=g.useCallback(C=>{w.current=C,typeof y=="function"?y(C):y&&(y.current=C)},[y]),j=g.useCallback(()=>{if(t==="ready"){a==null||a();return}if(t==="streaming"){i==null||i();return}if(t==="error"){const C=w.current;C&&(C.dataset.pressed="true",_.current&&clearTimeout(_.current),_.current=setTimeout(()=>{C.dataset.pressed="false"},140)),l==null||l()}},[t,a,i,l]);if(t==="hidden")return null;const N=!p&&(t==="ready"||t==="streaming"||t==="error"),R=E5(t,c,u),T=t==="disabled-invalid"?c??"Cannot send":t==="error"?u??"Send failed — click to retry":null,L=r.jsx("button",{ref:S,type:"button","data-composer-action":"send","data-state":t,className:te(st.base,A5[t],f),style:m,"aria-label":R,disabled:!N,onClick:j,...x,children:r.jsxs("span",{className:st.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:st.iconLayer,"data-active":t==="ready"||t==="disabled-invalid"?"true":"false",children:r.jsx(Os,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="streaming"?"true":"false",children:r.jsx(Tf,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="error"?"true":"false",children:r.jsx(Qa,{size:"100%",strokeWidth:2})})]})});return T?r.jsx(Kr,{content:T,placement:"top",children:L}):L});Vf.displayName="ComposerSendButton";const P5={idle:st.attachIdle,disabled:st.attachDisabled,error:st.attachError},z5=(t,a,i)=>{switch(t){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},O5=g.forwardRef(({state:t,onSelect:a,accept:i,multiple:l=!0,disabledReason:c,errorMessage:u,groupDisabled:p,className:f,style:m,...x},y)=>{const _=g.useRef(null),w=g.useCallback(()=>{var L;(t==="idle"||t==="error")&&((L=_.current)==null||L.click())},[t]),S=g.useCallback(L=>{const C=L.target.files;C&&C.length>0&&(a==null||a(C)),L.target.value=""},[a]),j=!p&&t!=="disabled",N=z5(t,c,u),R=t==="disabled"?c??"Attachments unavailable":t==="error"?u??"Attachment failed":null,T=r.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":t,className:te(st.base,P5[t],f),style:m,"aria-label":N,disabled:!j,onClick:w,...x,children:[r.jsx("span",{className:st.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(Ya,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:_,type:"file",accept:i,multiple:l,onChange:S,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return R?r.jsx(Kr,{content:R,placement:"top",children:T}):T});O5.displayName="ComposerAttachment";const D5={idle:st.voiceIdle,recording:st.voiceRecording,disabled:st.voiceDisabled},B5=(t,a)=>{switch(t){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},Gf=g.forwardRef(({state:t,onStartRecording:a,onStopRecording:i,disabledReason:l,groupDisabled:c,className:u,style:p,...f},m)=>{const x=g.useCallback(()=>{if(t==="idle"){a==null||a();return}if(t==="recording"){i==null||i();return}},[t,a,i]),y=!c&&t!=="disabled",_=B5(t,l),w=t==="disabled"?l??"Voice unavailable":null,S=r.jsx("button",{ref:m,type:"button","data-composer-action":"voice","data-state":t,className:te(st.base,D5[t],u),style:p,"aria-label":_,"aria-pressed":t==="recording"||void 0,disabled:!y,onClick:x,...f,children:r.jsxs("span",{className:st.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:st.iconLayer,"data-active":t!=="recording"?"true":"false",children:r.jsx(zf,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="recording"?"true":"false",children:r.jsx(Af,{size:"100%",strokeWidth:1.5})})]})});return w?r.jsx(Kr,{content:w,placement:"top",children:S}):S});Gf.displayName="ComposerVoiceButton";const F5=g.forwardRef(({value:t,onChange:a,onSubmit:i,placeholder:l="Ask Ultron…",sending:c=!1,disabled:u=!1,voice:p=!0,maxRows:f=4,radius:m="lg",leadingActions:x,className:y},_)=>{const w=c?"streaming":t.trim().length===0?"hidden":"ready";return r.jsx(gf,{className:y,style:{flex:"0 0 auto"},children:r.jsx(vf,{ref:_,value:t,onChange:a,onSubmit:i,placeholder:l,maxRows:f,radius:m,disabled:u,children:r.jsxs(Rf,{size:"md",disabled:u,children:[x,p&&r.jsx(Gf,{state:u?"disabled":"idle"}),r.jsx(Vf,{state:w,onSend:i,onStop:i})]})})})});F5.displayName="UltronCommandBar";const W5=g.forwardRef(({stages:t,state:a="live",duration:i,...l},c)=>r.jsx(Id,{ref:c,state:a,duration:i,...l,children:t.map((u,p)=>r.jsx(Ts,{type:u.type??"content",status:u.status??"pending",icon:u.icon,detail:u.detail,children:u.label},p))}));W5.displayName="UltronThreadTimeline";const H5="_root_ghwhu_10",q5="_badge_ghwhu_27",U5="_badgeIcon_ghwhu_38",V5="_green_ghwhu_59",G5="_yellow_ghwhu_60",Y5="_matcha_ghwhu_61",Z5="_purple_ghwhu_62",K5="_blue_ghwhu_63",Q5="_azure_ghwhu_64",X5="_red_ghwhu_65",J5="_orange_ghwhu_66",e4="_pink_ghwhu_67",t4="_slate_ghwhu_68",n4="_content_ghwhu_73",r4="_label_ghwhu_83",o4="_valueRow_ghwhu_97",a4="_change_ghwhu_106",i4="_value_ghwhu_97",Wn={root:H5,badge:q5,badgeIcon:U5,green:V5,yellow:G5,matcha:Y5,purple:Z5,blue:K5,azure:Q5,red:X5,orange:J5,pink:e4,slate:t4,content:n4,label:r4,valueRow:o4,change:a4,value:i4},s4=g.forwardRef(({color:t="slate",icon:a,label:i,value:l,change:c,className:u,...p},f)=>r.jsxs("div",{ref:f,className:te(Wn.root,u),...p,children:[r.jsx("div",{className:te(Wn.badge,Wn[t]),"aria-hidden":"true",children:r.jsx("span",{className:Wn.badgeIcon,children:a})}),r.jsxs("div",{className:Wn.content,children:[r.jsx("span",{className:Wn.label,children:i}),r.jsxs("div",{className:Wn.valueRow,children:[r.jsx("span",{className:Wn.value,children:l}),c!=null&&r.jsx("span",{className:Wn.change,children:c})]})]})]}));s4.displayName="DataCard";const l4="_root_d0j6n_7",c4="_icon_d0j6n_21",d4="_text_d0j6n_33",u4="_positive_d0j6n_41",h4="_warning_d0j6n_45",p4="_negative_d0j6n_49",hs={root:l4,icon:c4,text:d4,positive:u4,warning:h4,negative:p4};function f4(t){return t==="up"?"positive":"negative"}const m4=g.forwardRef((t,a)=>{const{mode:i,value:l,className:c,...u}=t,p=i==="trend"?t.severity??f4(t.trend):t.severity,{severity:f,...m}=u,x=i==="trend"?(({trend:_,severity:w,...S})=>S)(m):m,y=i==="trend"?t.trend==="up"?Os:Pf:null;return r.jsxs("span",{ref:a,className:te(hs.root,hs[p],c),...x,children:[r.jsx("span",{className:hs.text,children:l}),y&&r.jsx("span",{className:hs.icon,"aria-hidden":"true",children:r.jsx(y,{size:14})})]})});m4.displayName="ValueChangeLabel";const g4="_root_1lq10_1",v4="_horizontal_1lq10_9",y4="_vertical_1lq10_15",x4="_solid_1lq10_32",w4="_dashed_1lq10_36",ps={root:g4,horizontal:v4,vertical:y4,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:x4,dashed:w4},_4=g.forwardRef(({thickness:t=1,orientation:a="horizontal",variant:i="solid",className:l,...c},u)=>r.jsx("hr",{ref:u,role:"separator","aria-orientation":a,className:te(ps.root,ps[`thickness-${t}`],ps[a],ps[i],l),...c}));_4.displayName="Divider";const b4="_header_vxgy2_95",k4="_title_vxgy2_107",C4="_closeBtn_vxgy2_120",j4="_content_vxgy2_152",S4="_footer_vxgy2_163",Fa={header:b4,title:k4,closeBtn:C4,content:j4,footer:S4},N4=g.forwardRef(({onClose:t,children:a,className:i,...l},c)=>r.jsxs("div",{ref:c,className:te(Fa.header,i),...l,children:[r.jsx("span",{className:Fa.title,children:a}),t&&r.jsx("button",{type:"button",className:Fa.closeBtn,onClick:t,"aria-label":"Close",children:r.jsx(Ka,{size:16})})]}));N4.displayName="DialogHeader";const R4=g.forwardRef(({children:t,className:a,...i},l)=>r.jsx("div",{ref:l,className:te(Fa.content,a),...i,children:t}));R4.displayName="DialogContent";const L4=g.forwardRef(({children:t,className:a,...i},l)=>r.jsx("div",{ref:l,className:te(Fa.footer,a),...i,children:t}));L4.displayName="DialogFooter";const M4="_root_1dntq_7",$4="_badge_1dntq_57",I4="_badgeIconSlot_1dntq_74",T4="_content_1dntq_82",A4="_text_1dntq_90",E4="_title_1dntq_99",P4="_description_1dntq_120",z4="_actions_1dntq_131",O4="_dot_1dntq_137",D4="_actionLink_1dntq_144",B4="_primaryAction_1dntq_162",F4="_trailing_1dntq_170",Lt={root:M4,badge:$4,badgeIconSlot:I4,content:T4,text:A4,title:E4,description:P4,actions:z4,dot:O4,actionLink:D4,primaryAction:B4,trailing:F4},W4=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),H4=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),q4=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),e1=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),U4={error:W4,warning:q4,success:H4,info:e1,feature:e1},Yf=g.forwardRef(({status:t="info",variant:a="lighter",size:i="sm",title:l,description:c,action:u,onAction:p,learnMore:f,onLearnMore:m,onDismiss:x,className:y,..._},w)=>{const S=U4[t],j=i==="lg",N=x?r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:r.jsx(Ka,{size:12})}):null;return r.jsxs("div",{ref:w,role:"alert",className:te(Lt.root,y),"data-status":t,"data-variant":a,"data-size":i,..._,children:[r.jsx("span",{className:Lt.badge,"aria-hidden":"true",children:r.jsx("span",{className:te("alloy-icon-slot",Lt.badgeIconSlot),children:r.jsx(S,{})})}),j?r.jsxs("div",{className:Lt.content,children:[r.jsxs("div",{className:Lt.text,children:[r.jsx("p",{className:Lt.title,children:l}),c&&r.jsx("p",{className:Lt.description,children:c})]}),(u||f)&&r.jsxs("div",{className:Lt.actions,children:[u&&r.jsx("button",{type:"button",className:te(Lt.actionLink,Lt.primaryAction),onClick:p,children:u}),u&&f&&r.jsx("span",{className:Lt.dot,"aria-hidden":"true",children:"·"}),f&&r.jsx("button",{type:"button",className:Lt.actionLink,onClick:m,children:f})]})]}):r.jsx("p",{className:Lt.title,children:l}),j?N:(u||x)&&r.jsxs("div",{className:Lt.trailing,children:[u&&r.jsx("button",{type:"button",className:te(Lt.actionLink,Lt.primaryAction),onClick:p,children:u}),N]})]})});Yf.displayName="Alert";const V4="_stack_x4xl7_11",G4="_item_x4xl7_28",Y4="_itemExiting_x4xl7_33",dd={stack:V4,item:G4,itemExiting:Y4},Z4=g.createContext(null);function K4({id:t,title:a,description:i,status:l,variant:c,size:u,action:p,onAction:f,duration:m,exiting:x,onRemove:y}){const _=g.useCallback(()=>y(t),[t,y]);return r.jsx("div",{className:te(dd.item,x&&dd.itemExiting),onAnimationEnd:x?_:void 0,children:r.jsx(Yf,{status:l,variant:c,size:u,title:a,description:i,action:p,onAction:f,onDismiss:_,style:{width:"100%"}})})}function Q4({toasts:t,onStartExit:a,onRemove:i}){return g.useEffect(()=>{const l=[];return t.forEach(c=>{c.duration>0&&!c.exiting&&l.push(setTimeout(()=>a(c.id),c.duration))}),()=>l.forEach(clearTimeout)},[t,a]),t.length===0?null:As.createPortal(r.jsx("div",{className:dd.stack,"aria-live":"polite","aria-atomic":"false",children:t.map(l=>r.jsx(K4,{...l,onRemove:i},l.id))}),document.body)}function X4({children:t}){const[a,i]=g.useState([]),l=g.useRef(0),c=g.useCallback(f=>{const m=`toast-${++l.current}`;return i(x=>[...x,{id:m,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),m},[]),u=g.useCallback(f=>{i(m=>m.map(x=>x.id===f?{...x,exiting:!0}:x))},[]),p=g.useCallback(f=>{i(m=>m.filter(x=>x.id!==f))},[]);return r.jsxs(Z4.Provider,{value:{addToast:c,removeToast:u},children:[t,r.jsx(Q4,{toasts:a,onStartExit:u,onRemove:p})]})}const J4="_root_1s0ek_5",ew="_list_1s0ek_11",tw="_item_1s0ek_23",nw="_separator_1s0ek_31",rw="_link_1s0ek_47",ow="_current_1s0ek_68",aw="_iconSlot_1s0ek_76",Mn={root:J4,list:ew,item:tw,separator:nw,link:rw,current:ow,iconSlot:aw},iw=()=>r.jsx("span",{className:Mn.separator,"aria-hidden":"true",children:"/"}),sw=()=>r.jsx("span",{className:Mn.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),lw=g.forwardRef(({items:t,separator:a="slash",className:i,...l},c)=>{const u=a==="chevron"?sw:iw;return r.jsx("nav",{ref:c,"aria-label":"Breadcrumb",className:te(Mn.root,i),...l,children:r.jsx("ol",{className:Mn.list,children:t.map((p,f)=>{const m=f===t.length-1,x=!m&&(!!p.href||!!p.onClick);return r.jsxs("li",{className:Mn.item,children:[f>0&&r.jsx(u,{}),x?r.jsxs("a",{href:p.href,onClick:p.onClick,className:Mn.link,"aria-label":p.label,children:[p.icon&&r.jsx("span",{className:te(Mn.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]}):r.jsxs("span",{className:te(Mn.link,m&&Mn.current),"aria-current":m?"page":void 0,children:[p.icon&&r.jsx("span",{className:te(Mn.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]})]},f)})})})});lw.displayName="Breadcrumb";const cw="_root_139vz_6",dw="_divider_139vz_14",uw="_item_139vz_19",hw="_label_139vz_25",pw="_description_139vz_26",fw="_chevron_139vz_27",mw="_iconSlot_139vz_28",gw="_hitTarget_139vz_32",vw="_size_sm_139vz_37",yw="_size_md_139vz_43",xw="_size_lg_139vz_49",ww="_header_139vz_59",_w="_headerContent_139vz_59",bw="_checkboxWrap_139vz_60",kw="_labelBlock_139vz_157",Cw="_trailingSlot_139vz_60",jw="_body_139vz_199",Sw="_bodyInner_139vz_209",Nw="_bodyContent_139vz_214",wt={root:cw,divider:dw,item:uw,label:hw,description:pw,chevron:fw,iconSlot:mw,hitTarget:gw,size_sm:vw,size_md:yw,size_lg:xw,header:ww,headerContent:_w,checkboxWrap:bw,labelBlock:kw,trailingSlot:Cw,body:jw,bodyInner:Sw,bodyContent:Nw},Rw="_root_17t97_6",Lw="_disabled_17t97_12",Mw="_sm_17t97_18",$w="_md_17t97_26",Iw="_lg_17t97_34",Tw="_controlWrap_17t97_43",Aw="_input_17t97_52",Ew="_box_17t97_67",Pw="_boxChecked_17t97_96",zw="_boxError_17t97_106",Ow="_labelWrap_17t97_116",Dw="_label_17t97_116",Bw="_error_17t97_138",Fw="_required_17t97_140",Ww="_description_17t97_145",Qt={root:Rw,disabled:Lw,sm:Mw,md:$w,lg:Iw,controlWrap:Tw,input:Aw,box:Ew,boxChecked:Pw,boxError:zw,labelWrap:Ow,label:Dw,error:Bw,required:Fw,description:Ww},Zf=g.forwardRef(({checked:t,defaultChecked:a=!1,indeterminate:i=!1,onChange:l,disabled:c,error:u,size:p="md",label:f,description:m,id:x,name:y,value:_,required:w,className:S},j)=>{const N=g.useId(),R=x??N,T=g.useRef(null);g.useEffect(()=>{T.current&&(T.current.indeterminate=i)},[i]);const L=t!==void 0,[C,A]=g.useState(a),$=L?t:C,F=B=>{L||A(B.target.checked),l==null||l(B.target.checked)},P=$||i;return r.jsxs("div",{className:te(Qt.root,Qt[p],c&&Qt.disabled,u&&Qt.error,S),children:[r.jsxs("div",{className:Qt.controlWrap,children:[r.jsx("input",{ref:B=>{T.current=B,typeof j=="function"?j(B):j&&(j.current=B)},type:"checkbox",id:R,name:y,value:_,checked:$,disabled:c,required:w,"aria-invalid":u||void 0,onChange:F,className:Qt.input}),r.jsx("span",{className:te(Qt.box,P&&Qt.boxChecked,u&&Qt.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):$?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||m)&&r.jsxs("div",{className:Qt.labelWrap,children:[f&&r.jsxs("label",{htmlFor:R,className:Qt.label,children:[f,w&&r.jsx("span",{className:Qt.required,"aria-hidden":"true",children:" *"})]}),m&&r.jsx("span",{className:Qt.description,children:m})]})]})});Zf.displayName="Checkbox";const Kf=g.createContext(null),ud=g.createContext(0),Qf=g.forwardRef(({type:t="multiple",collapsible:a=!0,value:i,defaultValue:l,onValueChange:c,divider:u=!0,size:p="md",disabled:f=!1,className:m,children:x,...y},_)=>{const w=g.useMemo(()=>Array.isArray(l)?new Set(l):typeof l=="string"?new Set([l]):new Set,[]),[S,j]=g.useState(w),N=i!==void 0,R=g.useMemo(()=>N?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:S,[N,i,S]),T=g.useCallback(A=>R.has(A),[R]),L=g.useCallback(A=>{const $=new Set(R);t==="single"?$.has(A)?a&&$.delete(A):($.clear(),$.add(A)):$.has(A)?$.delete(A):$.add(A),N||j($),c&&c(t==="single"?$.values().next().value??"":Array.from($))},[R,t,a,N,c]),C=g.useMemo(()=>({type:t,collapsible:a,size:p,disabled:f,isExpanded:T,toggle:L}),[t,a,p,f,T,L]);return r.jsx("div",{ref:_,"data-accordion-root":"","data-divider":u||void 0,"data-disabled":f||void 0,"data-size":p,className:te(wt.root,u&&wt.divider,m),...y,children:r.jsx(Kf.Provider,{value:C,children:r.jsx(ud.Provider,{value:0,children:x})})})});Qf.displayName="Accordion";function fs(t,a){const i=t.closest("[data-accordion-root]");if(!i)return;const l=t.getAttribute("data-accordion-depth"),c=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${l}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(c.length===0)return;const u=c.indexOf(t);let p;switch(a){case"first":p=c[0];break;case"last":p=c[c.length-1];break;case"next":p=c[(u+1)%c.length];break;case"prev":p=c[(u-1+c.length)%c.length];break}p.focus()}const Xf=g.forwardRef(({value:t,label:a,description:i,icon:l,leadingSlot:c,trailingSlot:u,chevronPosition:p="leading",selectable:f=!1,checked:m,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:_,expanded:w,defaultExpanded:S=!1,onExpandedChange:j,disabled:N=!1,size:R,className:T,children:L,...C},A)=>{const $=g.useContext(Kf),F=g.useContext(ud),P=$!==null,B=R??($==null?void 0:$.size)??"md",G=N||($==null?void 0:$.disabled)||!1,[K,ee]=g.useState(S);let V;P?V=t!==void 0?$.isExpanded(t):!1:w!==void 0?V=w:V=K;const J=g.useCallback(()=>{if(G)return;if(P){if(t===void 0)return;const I=$.isExpanded(t);$.toggle(t);const Q=$.type==="single"&&!$.collapsible&&I?!0:!I;j==null||j(Q);return}const k=!V;w===void 0&&ee(k),j==null||j(k)},[G,P,$,t,V,w,j]),ae=g.useCallback(k=>_==null?void 0:_(k),[_]),se=g.useCallback(k=>{if(k.key==="Enter"||k.key===" "){k.preventDefault(),J();return}if(P)switch(k.key){case"ArrowDown":k.preventDefault(),fs(k.currentTarget,"next");break;case"ArrowUp":k.preventDefault(),fs(k.currentTarget,"prev");break;case"Home":k.preventDefault(),fs(k.currentTarget,"first");break;case"End":k.preventDefault(),fs(k.currentTarget,"last");break}},[J,P]),ce=g.useId(),Z=`${ce}-header`,H=`${ce}-body`,z=B==="sm"?16:B==="md"?18:20,D=c??r.jsxs(r.Fragment,{children:[f&&r.jsx("span",{className:wt.checkboxWrap,children:r.jsx(Zf,{size:B,checked:m,defaultChecked:x,indeterminate:y,disabled:G,onChange:ae})}),l&&r.jsx("span",{className:wt.iconSlot,"aria-hidden":"true",children:l})]});return r.jsxs("div",{ref:A,"data-accordion-item":"","data-expanded":V||void 0,"data-disabled":G||void 0,"data-size":B,"data-depth":F,className:te(wt.item,wt[`size_${B}`],T),style:{"--accordion-depth":F},...C,children:[r.jsxs("div",{className:wt.header,children:[r.jsx("button",{type:"button",id:Z,"data-accordion-header-button":"","data-accordion-depth":F,className:wt.hitTarget,"aria-expanded":V,"aria-controls":H,"aria-disabled":G||void 0,disabled:G,onClick:J,onKeyDown:se}),r.jsxs("div",{className:wt.headerContent,children:[p==="leading"&&r.jsx("span",{className:wt.chevron,"aria-hidden":"true",children:r.jsx(en,{size:z,color:"currentColor"})}),D,r.jsxs("div",{className:wt.labelBlock,children:[r.jsx("span",{className:wt.label,children:a}),i&&r.jsx("span",{className:wt.description,children:i})]}),u&&r.jsx("div",{className:wt.trailingSlot,children:u}),p==="trailing"&&r.jsx("span",{className:wt.chevron,"aria-hidden":"true",children:r.jsx(en,{size:z,color:"currentColor"})})]})]}),r.jsx("div",{id:H,role:"region","aria-labelledby":Z,className:wt.body,"aria-hidden":!V,children:r.jsx("div",{className:wt.bodyInner,children:r.jsx("div",{className:wt.bodyContent,children:r.jsx(ud.Provider,{value:F+1,children:L})})})})]})});Xf.displayName="AccordionItem";const Hw="_root_2hiai_7",qw="_fullWidth_2hiai_12",Uw="_panel_2hiai_19",Vw="_panelInner_2hiai_73",Gw="_item_2hiai_81",Yw="_groupHeading_2hiai_87",Zw="_groupHeadingLabel_2hiai_94",Kw="_groupHeadingCollapsible_2hiai_106",Qw="_groupChevron_2hiai_119",Xw="_groupDivider_2hiai_133",$n={root:Hw,fullWidth:qw,panel:Uw,panelInner:Vw,item:Gw,groupHeading:Yw,groupHeadingLabel:Zw,groupHeadingCollapsible:Kw,groupChevron:Qw,groupDivider:Xw};function Jw({group:t,size:a,closeOnSelect:i,onClose:l}){const[c,u]=g.useState(t.defaultExpanded??!0);return r.jsxs("div",{children:[t.heading&&r.jsxs("div",{className:te($n.groupHeading,t.collapsible&&$n.groupHeadingCollapsible),onClick:t.collapsible?()=>u(p=>!p):void 0,"aria-expanded":t.collapsible?c:void 0,children:[r.jsx("span",{className:$n.groupHeadingLabel,children:t.heading}),t.collapsible&&r.jsx("span",{className:$n.groupChevron,"data-expanded":c||void 0,"aria-hidden":"true",children:r.jsx(en,{size:12})})]}),c&&r.jsx("div",{role:"group","aria-label":t.heading,children:t.options.map((p,f)=>{const m=p.trailingAction==="switch"||p.trailingAction==="checkbox"||p.trailingAction==="radio";return r.jsx(wn,{role:"menuitem",size:a,label:p.label,description:p.description,leadingSlot:p.leadingSlot,trailingAction:p.trailingAction,trailingSlot:p.trailingSlot,disabled:p.disabled,destructive:p.destructive,selected:p.selected,checked:p.checked,defaultChecked:p.defaultChecked,onCheckedChange:p.onCheckedChange,badgeCount:p.badgeCount,badgeLabel:p.badgeLabel,expanded:p.expanded,statusVariant:p.statusVariant,divider:p.divider??!1,className:$n.item,onClick:()=>{var x;(x=p.onClick)==null||x.call(p),i&&!m&&l()}},p.id)})})]})}const Jf=g.forwardRef(({trigger:t,groups:a,size:i="sm",width:l=260,placement:c="bottom-start",open:u,defaultOpen:p=!1,onOpenChange:f,disabled:m=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:_,...w},S)=>{const[j,N]=g.useState(p),R=g.useRef(null),T=u!==void 0?u:j,L=g.useCallback(A=>{R.current=A,S&&(typeof S=="function"?S(A):S.current=A)},[S]),C=g.useCallback(A=>{u===void 0&&N(A),f==null||f(A)},[u,f]);return g.useEffect(()=>{if(!T)return;const A=$=>{var F;(F=R.current)!=null&&F.contains($.target)||C(!1)};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[T,C]),g.useEffect(()=>{if(!T)return;const A=$=>{$.key==="Escape"&&C(!1)};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[T,C]),r.jsxs("div",{ref:L,className:te($n.root,y&&$n.fullWidth,_),...w,children:[r.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":T,tabIndex:m?-1:0,onClick:m?void 0:()=>C(!T),onKeyDown:m?void 0:A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),C(!T))},children:t}),r.jsx("div",{className:$n.panel,"data-open":T||void 0,"data-placement":c,style:{width:typeof l=="number"?`${l}px`:l},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:$n.panelInner,children:a.map((A,$)=>r.jsxs("div",{children:[$>0&&r.jsx("div",{className:$n.groupDivider,"aria-hidden":"true"}),r.jsx(Jw,{group:A,size:i,closeOnSelect:x,onClose:()=>C(!1)})]},A.id))})})]})});Jf.displayName="DropdownMenu";const e6="_hiddenInput_7w2s5_8",t6="_area_7w2s5_19",n6="_uploadIcon_7w2s5_53",r6="_textBlock_7w2s5_59",o6="_title_7w2s5_67",a6="_description_7w2s5_76",i6="_fileRow_7w2s5_88",s6="_fileIcon_7w2s5_96",l6="_fileName_7w2s5_101",c6="_successIcon_7w2s5_115",d6="_removeBtn_7w2s5_121",u6="_progressWrap_7w2s5_145",h6="_progressBar_7w2s5_153",p6="_progressFill_7w2s5_161",f6="_progressLabel_7w2s5_168",m6="_errorRow_7w2s5_178",g6="_errorIcon_7w2s5_186",v6="_errorText_7w2s5_192",y6="_areaMulti_7w2s5_206",x6="_multiDropZone_7w2s5_214",w6="_fileList_7w2s5_244",_6="_fileListItem_7w2s5_254",b6="_inline_7w2s5_267",k6="_inlineIcon_7w2s5_309",C6="_inlineText_7w2s5_330",j6="_inlineProgress_7w2s5_353",S6="_inlineProgressFill_7w2s5_363",$e={hiddenInput:e6,area:t6,uploadIcon:n6,textBlock:r6,title:o6,description:a6,fileRow:i6,fileIcon:s6,fileName:l6,successIcon:c6,removeBtn:d6,progressWrap:u6,progressBar:h6,progressFill:p6,progressLabel:f6,errorRow:m6,errorIcon:g6,errorText:v6,areaMulti:y6,multiDropZone:x6,fileList:w6,fileListItem:_6,inline:b6,inlineIcon:k6,inlineText:C6,inlineProgress:j6,inlineProgressFill:S6};function Uc(t){const a=t.name.lastIndexOf(".");return a!==-1?t.name.slice(a+1).toUpperCase():t.type?(t.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const N6=g.forwardRef(({variant:t="area",multiple:a=!1,state:i="empty",progress:l=0,file:c,files:u,errorMessage:p,title:f="Choose a file or drag & drop it here.",description:m="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:_,onClear:w,onRemoveFile:S,fieldVariant:j="outlined",disabled:N=!1,className:R,...T},L)=>{const C=g.useRef(null),[A,$]=g.useState(!1),F=!N&&(a||i==="empty"),P=g.useCallback(()=>{var ce;!N&&(a||i==="empty")&&((ce=C.current)==null||ce.click())},[N,a,i]),B=g.useCallback(ce=>{var Z;if(a){const H=ce.target.files?Array.from(ce.target.files):[];H.length&&(_==null||_(H))}else{const H=(Z=ce.target.files)==null?void 0:Z[0];H&&(y==null||y(H))}ce.target.value=""},[a,y,_]),G=g.useCallback(ce=>{ce.preventDefault(),F&&$(!0)},[F]),K=g.useCallback(()=>$(!1),[]),ee=g.useCallback(ce=>{var Z;if(ce.preventDefault(),$(!1),!!F)if(a){const H=ce.dataTransfer.files?Array.from(ce.dataTransfer.files):[];H.length&&(_==null||_(H))}else{const H=(Z=ce.dataTransfer.files)==null?void 0:Z[0];H&&(y==null||y(H))}},[F,a,y,_]),V=r.jsx("input",{ref:C,type:"file",className:$e.hiddenInput,accept:x,multiple:a,disabled:N,"aria-hidden":"true",tabIndex:-1,onChange:B}),J=c?r.jsxs("div",{className:$e.fileRow,children:[r.jsx("span",{className:`${$e.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Eo,{size:16})}),r.jsx("span",{className:$e.fileName,children:c.name}),r.jsx(_r,{size:"sm",variant:"subtle",children:Uc(c)}),i==="complete"&&r.jsx("span",{className:`${$e.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(br,{size:16})}),r.jsx("button",{type:"button",className:$e.removeBtn,onClick:w,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(vs,{size:14})})})]}):null;if(t==="area"){if(a){const ce=u??[];return r.jsxs("div",{ref:L,className:te($e.areaMulti,R),"data-drag-over":A||void 0,"data-disabled":N||void 0,onDragOver:G,onDragLeave:K,onDrop:ee,...T,children:[V,r.jsxs("div",{className:$e.multiDropZone,children:[r.jsx("span",{className:`${$e.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(qc,{size:24})}),r.jsxs("div",{className:$e.textBlock,children:[r.jsx("p",{className:$e.title,children:f}),r.jsx("p",{className:$e.description,children:m})]}),r.jsx(Ie,{variant:"tertiary",size:"sm",onClick:P,disabled:N,children:"Browse Files"})]}),ce.length>0&&r.jsx("ul",{className:$e.fileList,"aria-label":"Selected files",children:ce.map((Z,H)=>r.jsxs("li",{className:$e.fileListItem,children:[r.jsx("span",{className:`${$e.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Eo,{size:16})}),r.jsx("span",{className:$e.fileName,children:Z.name}),r.jsx(_r,{size:"sm",variant:"subtle",children:Uc(Z)}),r.jsx("button",{type:"button",className:$e.removeBtn,onClick:()=>S==null?void 0:S(H),"aria-label":`Remove ${Z.name}`,disabled:N,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(vs,{size:14})})})]},`${Z.name}-${H}`))})]})}return r.jsxs("div",{ref:L,className:te($e.area,R),"data-state":i,"data-drag-over":A||void 0,"data-disabled":N||void 0,onDragOver:G,onDragLeave:K,onDrop:ee,...T,children:[V,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${$e.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(qc,{size:24})}),r.jsxs("div",{className:$e.textBlock,children:[r.jsx("p",{className:$e.title,children:f}),r.jsx("p",{className:$e.description,children:m})]}),r.jsx(Ie,{variant:"tertiary",size:"sm",onClick:P,disabled:N,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[J,r.jsxs("div",{className:$e.progressWrap,children:[r.jsx("div",{className:$e.progressBar,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:$e.progressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})}),r.jsxs("p",{className:$e.progressLabel,children:[l,"% uploaded"]})]})]}),i==="complete"&&J,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:$e.errorRow,children:[r.jsx("span",{className:`${$e.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Bo,{size:20})}),r.jsx("p",{className:$e.errorText,children:p??"Upload failed. Please try again."})]}),r.jsx(Ie,{variant:"tertiary",size:"sm",onClick:P,disabled:N,children:"Try Again"})]})]})}const ae={empty:r.jsx(qc,{size:16}),uploading:r.jsx(Eo,{size:16}),complete:r.jsx(br,{size:16}),error:r.jsx(Bo,{size:16})}[i],se=(i==="uploading"||i==="complete")&&!!c;return r.jsxs("div",{ref:L,className:te($e.inline,R),"data-state":i,"data-field-variant":j,"data-disabled":N||void 0,...T,children:[V,r.jsx("span",{className:`${$e.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ae}),r.jsxs("span",{className:$e.inlineText,"data-has-file":se?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(c==null?void 0:c.name),i==="complete"&&(c==null?void 0:c.name),i==="error"&&(p??"Upload failed. Please try again.")]}),se&&r.jsx(_r,{size:"sm",variant:"subtle",children:Uc(c)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:$e.removeBtn,onClick:w,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(vs,{size:14})})}),i==="empty"&&r.jsx(Ie,{variant:"tertiary",size:"xs",onClick:P,disabled:N,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:$e.inlineProgress,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:$e.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})})]})});N6.displayName="FileUploader";const R6="_wrapper_127v8_8",L6="_labelRow_127v8_16",M6="_label_127v8_16",$6="_required_127v8_28",I6="_labelIcon_127v8_36",T6="_sm_127v8_46",A6="_md_127v8_47",E6="_lg_127v8_48",P6="_shell_127v8_44",z6="_outlined_127v8_75",O6="_underlined_127v8_102",D6="_float_127v8_147",B6="_leadingSlot_127v8_181",F6="_trailingSlot_127v8_193",W6="_trailingActionWrap_127v8_206",H6="_trailingActionBtn_127v8_213",q6="_successTrailingSlot_127v8_234",U6="_errorTrailingSlot_127v8_239",V6="_control_127v8_251",G6="_selectValue_127v8_297",Y6="_selectPlaceholder_127v8_303",Z6="_selectChevron_127v8_307",K6="_selectChevronOpen_127v8_312",Q6="_textareaShell_127v8_315",X6="_textareaControl_127v8_334",J6="_footer_127v8_351",e8="_footerRow_127v8_363",t8="_footerError_127v8_364",n8="_footerSuccess_127v8_365",r8="_footerIcon_127v8_368",o8="_wrapperHorizontal_127v8_378",a8="_horizontalLabelCol_127v8_384",i8="_horizontalLabelHint_127v8_393",s8="_horizontalControlCol_127v8_402",l8="_msContainer_127v8_416",c8="_msShell_127v8_425",d8="_msOpen_127v8_440",u8="_msDisabled_127v8_447",h8="_msBody_127v8_450",p8="_msPlaceholder_127v8_459",f8="_msChevron_127v8_469",m8="_msChevronOpen_127v8_480",g8="_msPanel_127v8_483",Ce={wrapper:R6,labelRow:L6,label:M6,required:$6,labelIcon:I6,sm:T6,md:A6,lg:E6,shell:P6,outlined:z6,underlined:O6,float:D6,leadingSlot:B6,trailingSlot:F6,trailingActionWrap:W6,trailingActionBtn:H6,successTrailingSlot:q6,errorTrailingSlot:U6,control:V6,selectValue:G6,selectPlaceholder:Y6,selectChevron:Z6,selectChevronOpen:K6,textareaShell:Q6,textareaControl:X6,footer:J6,footerRow:e8,footerError:t8,footerSuccess:n8,footerIcon:r8,wrapperHorizontal:o8,horizontalLabelCol:a8,horizontalLabelHint:i8,horizontalControlCol:s8,msContainer:l8,msShell:c8,msOpen:d8,msDisabled:u8,msBody:h8,msPlaceholder:p8,msChevron:f8,msChevronOpen:m8,msPanel:g8};function Uo({label:t,labelIcon:a,labelDescription:i,hint:l,error:c,success:u,required:p,htmlFor:f,layout:m="vertical",labelWidth:x=160,className:y,children:_}){const w=c??u??l,S=c?"error":u?"success":"hint",j=w?r.jsxs("p",{className:te(Ce.footer,S==="error"&&Ce.footerError,S==="success"&&Ce.footerSuccess),role:S==="error"?"alert":void 0,"aria-live":S==="error"?"assertive":void 0,children:[S==="hint"&&r.jsx("span",{className:`${Ce.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Bo,{size:12})}),w]}):null,N=t!=null?r.jsxs("div",{className:Ce.labelRow,children:[r.jsx("label",{className:Ce.label,htmlFor:f,children:t}),p&&r.jsx("span",{className:Ce.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${Ce.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(m==="horizontal"){const R={width:typeof x=="number"?`${x}px`:x};return r.jsxs("div",{className:te(Ce.wrapper,Ce.wrapperHorizontal,y),children:[(N||i)&&r.jsxs("div",{className:Ce.horizontalLabelCol,style:R,children:[N,i&&r.jsx("p",{className:Ce.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:Ce.horizontalControlCol,children:[_,j]})]})}return r.jsxs("div",{className:te(Ce.wrapper,y),children:[N,_,j]})}function Ja({variant:t="outlined",size:a="md",error:i,success:l,disabled:c,readOnly:u,leadingIcon:p,trailingIcon:f,trailingAction:m,isTextarea:x,focused:y,className:_,children:w}){const S=a==="sm"?14:a==="lg"?18:16,j=l&&!i&&!f&&!m?r.jsx(br,{size:S}):null,N=i&&!f&&!m?r.jsx(Bo,{size:S}):null,R=!!p,T=!!(f||m||j||N);return r.jsxs("div",{className:te(Ce.shell,Ce[t],Ce[a],x&&Ce.textareaShell,_),"data-error":i||void 0,"data-success":l||void 0,"data-disabled":c||void 0,"data-readonly":u||void 0,"data-focused":y||void 0,"data-has-leading":R||void 0,"data-has-trailing":T||void 0,children:[p&&r.jsx("span",{className:te(Ce.leadingSlot,"alloy-icon-slot"),children:p}),w,m?r.jsx("span",{className:Ce.trailingActionWrap,children:m}):f||j||N?r.jsx("span",{className:te(Ce.trailingSlot,"alloy-icon-slot",j&&Ce.successTrailingSlot,N&&Ce.errorTrailingSlot),children:f??j??N}):null]})}const Pd=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",type:m="text",leadingIcon:x,trailingIcon:y,layout:_,labelWidth:w,labelDescription:S,id:j,disabled:N,readOnly:R,className:T,...L},C)=>{const A=g.useId(),$=j??A;return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:$,layout:_,labelWidth:w,labelDescription:S,className:T,children:r.jsx(Ja,{variant:p,size:f,error:!!l,success:!!c,disabled:N,readOnly:R,leadingIcon:x,trailingIcon:y,children:r.jsx("input",{ref:C,id:$,type:m,disabled:N,readOnly:R,"aria-invalid":l?!0:void 0,"aria-describedby":i||l||c?`${$}-footer`:void 0,className:te(Ce.control),...L})})})});Pd.displayName="TextField";const v8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,trailingIcon:x,layout:y,labelWidth:_,labelDescription:w,id:S,disabled:j,readOnly:N,className:R,...T},L)=>{const C=g.useId(),A=S??C;return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:A,layout:y,labelWidth:_,labelDescription:w,className:R,children:r.jsx(Ja,{variant:p,size:f,error:!!l,success:!!c,disabled:j,readOnly:N,leadingIcon:m,trailingIcon:x,isTextarea:!0,children:r.jsx("textarea",{ref:L,id:A,disabled:j,readOnly:N,"aria-invalid":l?!0:void 0,className:te(Ce.control,Ce.textareaControl),...T})})})});v8.displayName="TextArea";const y8={sm:"sm",md:"md",lg:"lg"},em=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,layout:x,labelWidth:y,labelDescription:_,options:w,value:S,defaultValue:j="",onChange:N,placeholder:R="Select an option…",disabled:T,readOnly:L,id:C,className:A},$)=>{var z;const F=g.useId(),P=C??F,B=S!==void 0,[G,K]=g.useState(j),ee=B?S:G,V=g.useCallback(D=>{B||K(D),N==null||N(D)},[B,N]),[J,ae]=g.useState(!1),se=(z=w.find(D=>D.value===ee))==null?void 0:z.label,ce=f==="sm"?14:f==="lg"?18:16,Z=y8[f],H=r.jsx(Ja,{variant:p,size:f,error:!!l,success:!!c,disabled:T,readOnly:L,focused:J,leadingIcon:m,trailingIcon:r.jsx("span",{className:te(Ce.selectChevron,J&&Ce.selectChevronOpen),"aria-hidden":"true",children:r.jsx(kr,{size:ce})}),children:r.jsx("span",{className:te(Ce.control,Ce.selectValue,!se&&Ce.selectPlaceholder),children:se??R})});return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:P,layout:x,labelWidth:y,labelDescription:_,className:A,children:r.jsx(Jf,{ref:$,id:P,fullWidth:!0,trigger:H,groups:[{id:"options",options:w.map(D=>({id:D.value,label:D.label,disabled:D.disabled,selected:D.value===ee,onClick:()=>V(D.value)}))}],size:Z,width:"100%",placement:"bottom-start",open:J,onOpenChange:ae,disabled:T||L})})});em.displayName="SelectField";const x8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,layout:x,labelWidth:y,labelDescription:_,id:w,disabled:S,readOnly:j,className:N,...R},T)=>{const L=g.useId(),C=w??L,[A,$]=g.useState(!1),F=f==="sm"?14:f==="lg"?18:16;return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:C,layout:x,labelWidth:y,labelDescription:_,className:N,children:r.jsx(Ja,{variant:p,size:f,error:!!l,success:!!c,disabled:S,readOnly:j,leadingIcon:m,trailingAction:r.jsx("button",{type:"button",className:`${Ce.trailingActionBtn} alloy-icon-slot`,onClick:()=>$(P=>!P),tabIndex:S?-1:0,"aria-label":A?"Hide password":"Show password","aria-pressed":A,children:A?r.jsx(If,{size:F}):r.jsx(Td,{size:F})}),children:r.jsx("input",{ref:T,id:C,type:A?"text":"password",disabled:S,readOnly:j,"aria-invalid":l?!0:void 0,autoComplete:"current-password",className:te(Ce.control),...R})})})});x8.displayName="PasswordField";const tm=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",onClear:m,onChange:x,layout:y,labelWidth:_,labelDescription:w,id:S,value:j,defaultValue:N,disabled:R,readOnly:T,className:L,...C},A)=>{const $=g.useId(),F=S??$,P=f==="sm"?14:f==="lg"?18:16,B=j!==void 0?String(j).length>0:void 0,G=g.useCallback(K=>{x==null||x(K)},[x]);return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:F,layout:y,labelWidth:_,labelDescription:w,className:L,children:r.jsx(Ja,{variant:p,size:f,error:!!l,success:!!c,disabled:R,readOnly:T,leadingIcon:r.jsx(Ed,{size:P}),trailingAction:B?r.jsx("button",{type:"button",className:`${Ce.trailingActionBtn} alloy-icon-slot`,onClick:m,tabIndex:R?-1:0,"aria-label":"Clear search",children:r.jsx(Ka,{size:P})}):void 0,children:r.jsx("input",{ref:A,id:F,type:"search",value:j,defaultValue:N,disabled:R,readOnly:T,"aria-invalid":l?!0:void 0,onChange:G,className:te(Ce.control),...C})})})});tm.displayName="SearchField";const w8=g.forwardRef((t,a)=>r.jsx(Pd,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...t}));w8.displayName="EmailField";const nm=g.forwardRef((t,a)=>r.jsx(Pd,{ref:a,type:"number",inputMode:"numeric",...t}));nm.displayName="NumberField";const _8={sm:"sm",md:"sm",lg:"md"},b8={sm:"sm",md:"md",lg:"lg"},k8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",layout:m,labelWidth:x,labelDescription:y,options:_,value:w,defaultValue:S=[],onChange:j,placeholder:N="Select options…",disabled:R,readOnly:T,id:L,className:C},A)=>{const $=g.useId(),F=L??$,P=`${F}-list`,B=g.useRef(null),G=w!==void 0,[K,ee]=g.useState(S),V=G?w:K,J=g.useCallback(I=>{G||ee(I),j==null||j(I)},[G,j]),[ae,se]=g.useState(!1);g.useEffect(()=>{if(!ae)return;const I=ne=>{B.current&&!B.current.contains(ne.target)&&se(!1)},Q=ne=>{ne.key==="Escape"&&se(!1)};return document.addEventListener("mousedown",I),document.addEventListener("keydown",Q),()=>{document.removeEventListener("mousedown",I),document.removeEventListener("keydown",Q)}},[ae]);const ce=I=>{if(R||T)return;const Q=V.includes(I)?V.filter(ne=>ne!==I):[...V,I];J(Q)},Z=I=>{R||T||((I.key==="Enter"||I.key===" ")&&(I.preventDefault(),se(Q=>!Q)),I.key==="Backspace"&&V.length>0&&!ae&&J(V.slice(0,-1)))},H=f==="sm"?14:f==="lg"?18:16,z=_8[f],D=b8[f],k=Object.fromEntries(_.map(I=>[I.value,I.label]));return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:F,layout:m,labelWidth:x,labelDescription:y,className:C,children:r.jsxs("div",{ref:B,className:Ce.msContainer,children:[r.jsxs("div",{ref:A,id:F,role:"combobox","aria-haspopup":"listbox","aria-expanded":ae,"aria-controls":P,"aria-disabled":R||void 0,tabIndex:R?-1:0,className:te(Ce.msShell,Ce[p],Ce[f],ae&&Ce.msOpen,R&&Ce.msDisabled),"data-error":l?!0:void 0,"data-success":c&&!l?!0:void 0,"data-disabled":R||void 0,onClick:()=>{!R&&!T&&se(I=>!I)},onKeyDown:Z,children:[r.jsx("div",{className:Ce.msBody,children:V.length===0?r.jsx("span",{className:Ce.msPlaceholder,children:N}):V.map(I=>r.jsx(_r,{size:z,variant:"subtle",dismissible:!R&&!T,onDismiss:()=>J(V.filter(Q=>Q!==I)),children:k[I]??I},I))}),r.jsx("span",{className:te(Ce.msChevron,"alloy-icon-slot",ae&&Ce.msChevronOpen),children:r.jsx(kr,{size:H})})]}),ae&&r.jsx("div",{id:P,role:"listbox","aria-multiselectable":"true","aria-label":typeof t=="string"?t:"Options",className:Ce.msPanel,children:_.map(I=>{const Q=V.includes(I.value);return r.jsx(wn,{label:I.label,size:D,trailingAction:"checkbox",checked:Q,disabled:I.disabled,role:"option","aria-selected":Q,onMouseDown:ne=>{ne.preventDefault()},onCheckedChange:()=>{I.disabled||ce(I.value)}},I.value)})})]})})});k8.displayName="MultiSelectField";const C8="_root_1249j_6",j8="_pageControls_1249j_14",S8="_pageBtn_1249j_21",N8="_ellipsis_1249j_36",R8="_rowsGroup_1249j_51",L8="_rowsSelect_1249j_58",M8="_countText_1249j_64",$8="_groupLabel_1249j_74",I8="_goToGroup_1249j_84",T8="_goToInput_1249j_91",vn={root:C8,pageControls:j8,pageBtn:S8,ellipsis:N8,rowsGroup:R8,rowsSelect:L8,countText:M8,groupLabel:$8,goToGroup:I8,goToInput:T8};function A8(t,a,i){if(a<=1)return[1];const l=Math.max(2,t-i),c=Math.min(a-1,t+i),u=[1];l>2&&u.push("ellipsis");for(let p=l;p<=c;p++)u.push(p);return c<a-1&&u.push("ellipsis"),a>1&&u.push(a),u}const E8=g.forwardRef(({page:t,totalPages:a,onPageChange:i,showRowsPerPage:l=!1,rowsPerPage:c,rowsPerPageOptions:u=[10,25,50,100],onRowsPerPageChange:p,showGoToPage:f=!1,totalCount:m,siblingCount:x=1,size:y="sm",disabled:_=!1,className:w,...S},j)=>{const[N,R]=g.useState(""),T=y,L=y,C=y==="sm"?14:16,A=A8(t,a,x),$=g.useCallback(B=>{const G=Math.min(Math.max(1,B),a);G!==t&&i(G)},[t,a,i]),F=g.useCallback(B=>{if(B.key==="Enter"){const G=parseInt(N,10);isNaN(G)||$(G),R("")}},[N,$]),P=m!=null&&c!=null?`${(t-1)*c+1}–${Math.min(t*c,m)} of ${m}`:null;return r.jsxs("nav",{ref:j,"aria-label":"Pagination",className:te(vn.root,w),"data-size":y,...S,children:[l&&r.jsxs("div",{className:vn.rowsGroup,children:[r.jsx("span",{className:vn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:vn.rowsSelect,children:r.jsx(em,{size:L,value:c,disabled:_,"aria-label":"Rows per page",onChange:B=>p==null?void 0:p(Number(B.target.value)),children:u.map(B=>r.jsx("option",{value:B,children:B},B))})})]}),P&&r.jsx("span",{className:vn.countText,"aria-live":"polite",children:P}),r.jsxs("div",{className:vn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Ie,{variant:"ghost",size:T,iconOnly:!0,"aria-label":"Previous page",disabled:_||t<=1,onClick:()=>$(t-1),children:r.jsx($f,{size:C})}),A.map((B,G)=>B==="ellipsis"?r.jsx("span",{className:vn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${G}`):r.jsx(Ie,{variant:B===t?"secondary":"ghost",size:T,"aria-label":`Page ${B}`,"aria-current":B===t?"page":void 0,disabled:_,onClick:()=>$(B),className:vn.pageBtn,children:B},B)),r.jsx(Ie,{variant:"ghost",size:T,iconOnly:!0,"aria-label":"Next page",disabled:_||t>=a,onClick:()=>$(t+1),children:r.jsx(en,{size:C})})]}),f&&r.jsxs("div",{className:vn.goToGroup,children:[r.jsx("span",{className:vn.groupLabel,children:"Go to"}),r.jsx("div",{className:vn.goToInput,children:r.jsx(nm,{size:L,value:N,placeholder:String(t),min:1,max:a,disabled:_,"aria-label":"Go to page number",onChange:B=>R(B.target.value),onKeyDown:F})})]})]})});E8.displayName="Pagination";const P8="_root_1vx33_6",z8="_fullWidth_1vx33_18",O8="_item_1vx33_23",D8="_indicator_1vx33_28",B8="_sm_1vx33_46",F8="_md_1vx33_54",W8="_lg_1vx33_62",H8="_itemSelected_1vx33_109",q8="_itemIcon_1vx33_115",U8="_itemLabel_1vx33_127",yr={root:P8,fullWidth:z8,item:O8,indicator:D8,sm:B8,md:F8,lg:W8,itemSelected:H8,itemIcon:q8,itemLabel:U8},rm=g.createContext(null);function V8(t){const a=g.useContext(rm);if(!a)throw new Error(`<${t}> must be rendered inside <SegmentedControl>`);return a}const om=g.forwardRef(({value:t,leadingIcon:a,className:i,children:l,disabled:c,onClick:u,...p},f)=>{const{value:m,onChange:x,disabled:y,name:_}=V8("SegmentedControl.Item"),w=m===t,S=y||!!c;return r.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":w,name:_,disabled:S,className:te(yr.item,w&&yr.itemSelected,i),onClick:j=>{S||x(t),u==null||u(j)},...p,children:[a&&r.jsx("span",{className:te(yr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),l!==void 0&&r.jsx("span",{className:yr.itemLabel,children:l})]})});om.displayName="SegmentedControl.Item";const am=g.forwardRef(({value:t,defaultValue:a="",onChange:i,size:l="md",disabled:c=!1,fullWidth:u=!1,className:p,children:f,...m},x)=>{const[y,_]=g.useState(a),w=t!==void 0,S=w?t:y,j=g.useId(),N=g.useRef(null);g.useLayoutEffect(()=>{const T=N.current;if(!T)return;const L=T.querySelector('[aria-checked="true"]');L&&(T.style.setProperty("--sc-indicator-x",`${L.offsetLeft}px`),T.style.setProperty("--sc-indicator-w",`${L.offsetWidth}px`))},[S,l]);const R=T=>{w||_(T),i==null||i(T)};return r.jsx(rm.Provider,{value:{value:S,onChange:R,disabled:c,name:j},children:r.jsxs("div",{ref:T=>{N.current=T,typeof x=="function"?x(T):x&&(x.current=T)},role:"radiogroup",className:te(yr.root,yr[l],u&&yr.fullWidth,p),...m,children:[r.jsx("span",{className:yr.indicator,"aria-hidden":"true"}),f]})})});am.displayName="SegmentedControl";Object.assign(am,{Item:om});const G8="_root_fkv0x_6",Y8="_sm_fkv0x_26",Z8="_md_fkv0x_33",K8="_lg_fkv0x_40",Q8="_dot_fkv0x_49",X8="_success_fkv0x_58",J8="_warning_fkv0x_65",e9="_error_fkv0x_72",t9="_info_fkv0x_79",n9="_neutral_fkv0x_86",r9="_pending_fkv0x_93",ms={root:G8,sm:Y8,md:Z8,lg:K8,dot:Q8,success:X8,warning:J8,error:e9,info:t9,neutral:n9,pending:r9},Fs=g.forwardRef(({status:t="neutral",size:a="md",dot:i=!0,className:l,children:c,...u},p)=>r.jsxs("span",{ref:p,className:te(ms.root,ms[a],ms[t],l),...u,children:[i&&r.jsx("span",{className:ms.dot,"aria-hidden":"true"}),c]}));Fs.displayName="StatusTag";const o9="_root_1m8t5_6",a9="_underline_1m8t5_15",i9="_background_1m8t5_21",s9="_underlineIndicator_1m8t5_26",l9="_md_1m8t5_43",c9="_lg_1m8t5_44",d9="_tab_1m8t5_42",u9="_tabSelected_1m8t5_77",h9="_tabIcon_1m8t5_99",p9="_tabLabel_1m8t5_111",f9="_tabBadge_1m8t5_116",m9="_tabLabelEditable_1m8t5_123",g9="_tabLabelInput_1m8t5_128",v9="_addTab_1m8t5_147",y9="_addTabIcon_1m8t5_160",Ut={root:o9,underline:a9,background:i9,underlineIndicator:s9,md:l9,lg:c9,tab:d9,tabSelected:u9,tabIcon:h9,tabLabel:p9,tabBadge:f9,tabLabelEditable:m9,tabLabelInput:g9,addTab:v9,addTabIcon:y9},im=g.createContext(null);function sm(t){const a=g.useContext(im);if(!a)throw new Error(`<${t}> must be rendered inside <Tabs>`);return a}const lm=g.forwardRef(({value:t,leadingIcon:a,trailingBadge:i,disabled:l,editable:c=!1,autoEdit:u=!1,onLabelChange:p,onClick:f,className:m,children:x,...y},_)=>{const{value:w,onChange:S,disabled:j,name:N}=sm("Tabs.Tab"),R=w===t,T=j||!!l,L=typeof x=="string"?x:"",[C,A]=g.useState(u&&c),[$,F]=g.useState(L),P=g.useRef(null);g.useEffect(()=>{if(C){const V=P.current;V&&(V.focus(),V.select())}},[C]),g.useEffect(()=>{u&&c&&!C&&(F(typeof x=="string"?x:""),A(!0))},[u,c]);const B=()=>{const V=$.trim();V&&V!==L&&(p==null||p(V)),A(!1)},G=()=>{F(L),A(!1)},K=V=>{!c||T||(V.stopPropagation(),F(L),A(!0))},ee=V=>{V.key==="Enter"?(V.preventDefault(),B()):V.key==="Escape"&&(V.preventDefault(),G())};return r.jsxs("button",{ref:_,type:"button",role:"tab","aria-selected":R,name:N,disabled:T,className:te(Ut.tab,R&&Ut.tabSelected,m),onClick:V=>{C||(T||S(t),f==null||f(V))},...y,children:[a&&r.jsx("span",{className:te(Ut.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),C?r.jsx("input",{ref:P,type:"text",value:$,onChange:V=>F(V.target.value),onKeyDown:ee,onBlur:B,onClick:V=>V.stopPropagation(),className:Ut.tabLabelInput,"aria-label":"Tab name",size:Math.max($.length,1)}):x!==void 0&&r.jsx("span",{className:te(Ut.tabLabel,c&&Ut.tabLabelEditable),onDoubleClick:K,children:x}),i&&!C&&r.jsx("span",{className:Ut.tabBadge,children:i})]})});lm.displayName="Tabs.Tab";const x9=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),cm=g.forwardRef(({className:t,onClick:a,"aria-label":i="Add tab",...l},c)=>{const{disabled:u}=sm("Tabs.AddTab");return r.jsx("button",{ref:c,type:"button","aria-label":i,disabled:u,className:te(Ut.tab,Ut.addTab,t),onClick:a,...l,children:r.jsx("span",{className:te(Ut.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(x9,{})})})});cm.displayName="Tabs.AddTab";const dm=g.forwardRef(({variant:t="underline",size:a="md",value:i,defaultValue:l="",onChange:c,disabled:u=!1,className:p,children:f,...m},x)=>{const[y,_]=g.useState(l),w=i!==void 0,S=w?i:y,j=g.useId(),N=g.useRef(null);g.useLayoutEffect(()=>{const T=N.current;if(!T||t!=="underline")return;const L=T.querySelector('[aria-selected="true"]');L&&(T.style.setProperty("--tab-indicator-x",`${L.offsetLeft}px`),T.style.setProperty("--tab-indicator-w",`${L.offsetWidth}px`))},[S,t]);const R=T=>{w||_(T),c==null||c(T)};return r.jsx(im.Provider,{value:{value:S,onChange:R,disabled:u,variant:t,size:a,name:j},children:r.jsxs("div",{ref:T=>{N.current=T,typeof x=="function"?x(T):x&&(x.current=T)},role:"tablist",className:te(Ut.root,Ut[t],Ut[a],p),...m,children:[t==="underline"&&r.jsx("span",{className:Ut.underlineIndicator,"aria-hidden":"true"}),f]})})});dm.displayName="Tabs";Object.assign(dm,{Tab:lm,AddTab:cm});const w9="_selectedBorder_1ypeg_7",_9="_selectedFill_1ypeg_12",t1={selectedBorder:w9,selectedFill:_9},b9=g.forwardRef(({selected:t=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:l,onClick:c,className:u,...p},f)=>{const m=y=>{l==null||l(!t),c==null||c(y)},x=t?i==="fill"?t1.selectedFill:t1.selectedBorder:void 0;return r.jsx(Ie,{ref:f,variant:a,"aria-pressed":t,className:te(x,u),onClick:m,...p})});b9.displayName="ToggleButton";const k9="_root_mcb75_6",C9="_disabled_mcb75_13",j9="_sm_mcb75_20",S9="_md_mcb75_31",N9="_lg_mcb75_42",R9="_track_mcb75_54",L9="_trackChecked_mcb75_90",M9="_thumb_mcb75_100",$9="_labelWrap_mcb75_117",I9="_label_mcb75_117",T9="_description_mcb75_139",Hn={root:k9,disabled:C9,sm:j9,md:S9,lg:N9,track:R9,trackChecked:L9,thumb:M9,labelWrap:$9,label:I9,description:T9},A9=g.forwardRef(({checked:t,defaultChecked:a=!1,onChange:i,disabled:l,size:c="md",label:u,description:p,id:f,name:m,value:x,className:y},_)=>{const w=g.useId(),S=f??w,j=`${S}-label`,N=t!==void 0,[R,T]=g.useState(a),L=N?t:R,C=()=>{if(l)return;const $=!L;N||T($),i==null||i($)},A=$=>{($.key===" "||$.key==="Enter")&&($.preventDefault(),C())};return r.jsxs("div",{className:te(Hn.root,Hn[c],l&&Hn.disabled,y),children:[r.jsx("button",{ref:_,type:"button",role:"switch",id:S,"aria-checked":L,"aria-labelledby":u?j:void 0,"aria-disabled":l||void 0,tabIndex:l?-1:0,disabled:l,name:m,value:x,className:te(Hn.track,L&&Hn.trackChecked),"data-checked":L||void 0,"data-disabled":l||void 0,onClick:C,onKeyDown:A,children:r.jsx("span",{className:Hn.thumb})}),(u||p)&&r.jsxs("div",{className:Hn.labelWrap,children:[u&&r.jsx("label",{id:j,htmlFor:S,className:Hn.label,children:u}),p&&r.jsx("span",{className:Hn.description,children:p})]})]})});A9.displayName="Switch";const E9="_root_104n4_5",P9="_disabled_104n4_11",z9="_sm_104n4_17",O9="_md_104n4_25",D9="_lg_104n4_33",B9="_controlWrap_104n4_41",F9="_input_104n4_50",W9="_ring_104n4_65",H9="_ringChecked_104n4_90",q9="_ringError_104n4_94",U9="_dot_104n4_104",V9="_labelWrap_104n4_112",G9="_label_104n4_112",Y9="_error_104n4_130",Z9="_required_104n4_132",K9="_description_104n4_137",Ht={root:E9,disabled:P9,sm:z9,md:O9,lg:D9,controlWrap:B9,input:F9,ring:W9,ringChecked:H9,ringError:q9,dot:U9,labelWrap:V9,label:G9,error:Y9,required:Z9,description:K9},Q9=g.forwardRef(({value:t,checked:a,onChange:i,disabled:l,error:c,size:u="md",label:p,description:f,id:m,name:x,required:y,className:_},w)=>{const S=g.useId(),j=m??S;return r.jsxs("div",{className:te(Ht.root,Ht[u],l&&Ht.disabled,c&&Ht.error,_),children:[r.jsxs("div",{className:Ht.controlWrap,children:[r.jsx("input",{ref:w,type:"radio",id:j,name:x,value:t,checked:a,disabled:l,required:y,"aria-invalid":c||void 0,onChange:()=>i==null?void 0:i(t),className:Ht.input}),r.jsx("span",{className:te(Ht.ring,a&&Ht.ringChecked,c&&Ht.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:Ht.dot})})]}),(p||f)&&r.jsxs("div",{className:Ht.labelWrap,children:[p&&r.jsxs("label",{htmlFor:j,className:Ht.label,children:[p,y&&r.jsx("span",{className:Ht.required,"aria-hidden":"true",children:" *"})]}),f&&r.jsx("span",{className:Ht.description,children:f})]})]})});Q9.displayName="Radio";const X9="_table_1ad04_8",J9="_sm_1ad04_16",e7="_row_1ad04_30",t7="_head_1ad04_47",n7="_headLabel_1ad04_82",r7="_sortBtn_1ad04_96",o7="_sortIcon_1ad04_119",a7="_cell_1ad04_142",i7="_cellText_1ad04_175",s7="_cellStack_1ad04_203",l7="_cellStackPrimary_1ad04_210",c7="_cellStackSecondary_1ad04_221",d7="_cellActions_1ad04_233",u7="_cellControl_1ad04_240",h7="_addCell_1ad04_251",p7="_addRowCell_1ad04_264",f7="_addRowLabel_1ad04_276",_t={table:X9,sm:J9,row:e7,head:t7,headLabel:n7,sortBtn:r7,sortIcon:o7,cell:a7,cellText:i7,cellStack:s7,cellStackPrimary:l7,cellStackSecondary:c7,cellActions:d7,cellControl:u7,addCell:h7,addRowCell:p7,addRowLabel:f7},um=g.createContext({addColumn:!1,addRow:!1}),hm=()=>g.useContext(um),m7=g.forwardRef(({size:t="md",interaction:a="row",addColumn:i=!1,addRow:l=!1,onAddColumn:c,onAddRow:u,className:p,children:f,...m},x)=>{const y=g.useMemo(()=>({addColumn:i,addRow:l,onAddColumn:c,onAddRow:u}),[i,l,c,u]);return r.jsx(um.Provider,{value:y,children:r.jsx("table",{ref:x,className:te(_t.table,t==="sm"&&_t.sm,p),"data-interaction":a,...m,children:f})})});m7.displayName="Table";const pm=g.forwardRef(({align:t="left",sort:a,onSort:i,hoverable:l,selected:c,className:u,children:p,...f},m)=>{const x=a!==void 0;return r.jsx("th",{ref:m,className:te(_t.head,u),"data-align":t!=="left"?t:void 0,"data-hoverable":!x&&l?!0:void 0,"data-selected":c||void 0,"aria-selected":c,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":x?"none":void 0,...f,children:x?r.jsxs("button",{type:"button",className:_t.sortBtn,onClick:i,"aria-label":typeof p=="string"?`Sort by ${p}`:void 0,children:[p,r.jsx("span",{className:_t.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(kr,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:_t.headLabel,children:p})})});pm.displayName="TableHead";const g7=g.forwardRef(({children:t,...a},i)=>{const{addColumn:l,onAddColumn:c}=hm(),u=l?g.Children.map(t,(p,f)=>{if(!g.isValidElement(p)||f!==0)return p;const m=g.Children.toArray(p.props.children);return g.cloneElement(p,{},[...m,r.jsx(pm,{hoverable:!0,onClick:c,className:_t.addCell,"aria-label":"Add column",children:r.jsx(Ya,{size:14,strokeWidth:2})},"__add_col_head")])}):t;return r.jsx("thead",{ref:i,...a,children:u})});g7.displayName="TableHeader";const fm=g.forwardRef(({hoverable:t=!0,selected:a,className:i,children:l,...c},u)=>r.jsx("tr",{ref:u,className:te(_t.row,i),"data-hoverable":t||void 0,"data-selected":a||void 0,"aria-selected":a,...c,children:l}));fm.displayName="TableRow";const hd=g.forwardRef(({align:t="left",compact:a,hoverable:i=!0,selected:l,className:c,children:u,...p},f)=>r.jsx("td",{ref:f,className:te(_t.cell,c),"data-align":t!=="left"?t:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":l||void 0,"aria-selected":l,...p,children:u}));hd.displayName="TableCell";const v7=g.forwardRef(({children:t,...a},i)=>{const{addColumn:l,addRow:c,onAddRow:u}=hm(),p=l?g.Children.map(t,f=>{if(!g.isValidElement(f))return f;const m=g.Children.toArray(f.props.children);return g.cloneElement(f,{},[...m,r.jsx(hd,{"aria-hidden":"true",className:_t.addCell},"__add_col_pad")])}):t;return r.jsxs("tbody",{ref:i,...a,children:[p,c&&r.jsx(fm,{hoverable:!1,children:r.jsx(hd,{colSpan:999,onClick:u,className:_t.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:_t.addRowLabel,children:[r.jsx(Ya,{size:14,strokeWidth:2}),"Add row"]})})})]})});v7.displayName="TableBody";const y7=g.forwardRef(({variant:t="primary",size:a="md",wrap:i,className:l,children:c,...u},p)=>r.jsx("span",{ref:p,className:te(_t.cellText,l),"data-variant":t!=="primary"?t:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...u,children:c}));y7.displayName="CellText";const x7=g.forwardRef(({primary:t,secondary:a,className:i,...l},c)=>r.jsxs("div",{ref:c,className:te(_t.cellStack,i),...l,children:[r.jsx("span",{className:_t.cellStackPrimary,children:t}),a&&r.jsx("span",{className:_t.cellStackSecondary,children:a})]}));x7.displayName="CellStack";const w7=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(_r,{ref:i,size:t,...a}));w7.displayName="CellTag";const _7=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(Fs,{ref:i,size:t,...a}));_7.displayName="CellStatusTag";const b7=g.forwardRef(({className:t,children:a,...i},l)=>r.jsx("div",{ref:l,className:te(_t.cellActions,t),...i,children:a}));b7.displayName="CellActions";const k7=g.forwardRef(({className:t,children:a,...i},l)=>r.jsx("div",{ref:l,className:te(_t.cellControl,t),...i,children:a}));k7.displayName="CellControl";const C7="_root_1afcs_8",j7="_secondary_1afcs_23",S7="_header_1afcs_28",N7="_headerText_1afcs_36",R7="_title_1afcs_43",L7="_subtitle_1afcs_52",M7="_action_1afcs_61",$7="_hero_1afcs_66",I7="_heroValue_1afcs_74",T7="_heroCaption_1afcs_83",A7="_heroChange_1afcs_89",E7="_body_1afcs_95",P7="_legend_1afcs_103",Xt={root:C7,secondary:j7,header:S7,headerText:N7,title:R7,subtitle:L7,action:M7,hero:$7,heroValue:I7,heroCaption:T7,heroChange:A7,body:E7,legend:P7},z7=g.forwardRef(({title:t,subtitle:a,action:i,value:l,valueChange:c,valueCaption:u,legend:p,secondary:f,children:m,className:x,...y},_)=>r.jsxs("div",{ref:_,className:te(Xt.root,f&&Xt.secondary,x),...y,children:[r.jsxs("div",{className:Xt.header,children:[r.jsxs("div",{className:Xt.headerText,children:[r.jsx("h3",{className:Xt.title,children:t}),a&&r.jsx("p",{className:Xt.subtitle,children:a})]}),i&&r.jsx("div",{className:Xt.action,children:i})]}),(l!==void 0||c||u)&&r.jsxs("div",{className:Xt.hero,children:[l!==void 0&&r.jsx("span",{className:Xt.heroValue,children:l}),c&&r.jsx("span",{className:Xt.heroChange,children:c}),u&&r.jsx("span",{className:Xt.heroCaption,children:u})]}),r.jsx("div",{className:Xt.body,children:m}),p&&r.jsx("div",{className:Xt.legend,children:p})]}));z7.displayName="ChartCard";const O7="_root_je8nq_7",D7="_item_je8nq_17",B7="_swatch_je8nq_23",F7="_label_je8nq_29",W7="_bookend_je8nq_33",No={root:O7,item:D7,swatch:B7,label:F7,bookend:W7},mm=g.forwardRef(({items:t,before:a,after:i,variant:l="square",swatchSize:c=12,className:u,...p},f)=>r.jsxs("div",{ref:f,className:te(No.root,u),...p,children:[a&&r.jsx("span",{className:No.bookend,children:a}),t.map((m,x)=>{const y=l==="line"?{width:c+4,height:2,background:m.color,borderRadius:1}:l==="dot"?{width:c-2,height:c-2,background:m.color,borderRadius:"50%"}:{width:c,height:c,background:m.color};return r.jsxs("span",{className:No.item,children:[r.jsx("span",{className:No.swatch,style:y,"aria-hidden":"true"}),m.label!==void 0&&r.jsx("span",{className:No.label,children:m.label})]},x)}),i&&r.jsx("span",{className:No.bookend,children:i})]}));mm.displayName="ChartLegend";const H7="_root_igkx4_5",q7="_svgWrap_igkx4_13",U7="_svg_igkx4_13",V7="_gridLine_igkx4_23",G7="_axisLabel_igkx4_28",Y7="_legendWrap_igkx4_43",Z7="_legendItem_igkx4_51",K7="_legendDot_igkx4_57",Q7="_legendLabel_igkx4_64",X7="_tooltip_igkx4_71",J7="_tooltipLabel_igkx4_85",e_="_tooltipRow_igkx4_95",t_="_tooltipDot_igkx4_101",n_="_tooltipSeries_igkx4_108",r_="_tooltipValue_igkx4_115",Re={root:H7,svgWrap:q7,svg:U7,gridLine:V7,axisLabel:G7,legendWrap:Y7,legendItem:Z7,legendDot:K7,legendLabel:Q7,tooltip:X7,tooltipLabel:J7,tooltipRow:e_,tooltipDot:t_,tooltipSeries:n_,tooltipValue:r_},o_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Vc(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function Ro(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}const a_=g.forwardRef(({series:t,labels:a,variant:i="grouped",height:l=260,showGrid:c=!0,showLegend:u=!0,yUnit:p="",barRadius:f=2,colors:m,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:_,stackStyle:w="gradient-each",capColor:S,className:j,...N},R)=>{var de,he,ge,be;const T=m&&m.length>0?m:o_,L=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[C,A]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),$=g.useRef(null),[F,P]=g.useState(540);g.useEffect(()=>{const ue=$.current;if(!ue)return;const xe=new ResizeObserver(Te=>{var Qe;const De=(Qe=Te[0])==null?void 0:Qe.contentRect.width;De>0&&P(Math.floor(De))});xe.observe(ue);const Ne=Math.floor(ue.getBoundingClientRect().width);return Ne>0&&P(Ne),()=>xe.disconnect()},[]);const B=44,G=0,K=20,ee=20,V=F,J=l,ae=V-B-G,se=J-K-ee,ce=5,Z=t.map((ue,xe)=>ue.color??T[xe%T.length]);let H=0;i==="stacked"?a.forEach((ue,xe)=>{const Ne=t.reduce((Te,De)=>Te+(De.data[xe]??0),0);Ne>H&&(H=Ne)}):i==="horizontal"?H=Math.max(...((de=t[0])==null?void 0:de.data)??[0]):t.forEach(ue=>ue.data.forEach(xe=>{xe>H&&(H=xe)}));const z=Vc(H),D=Array.from({length:ce+1},(ue,xe)=>z*(xe/ce)).reverse(),k=ue=>ee+se-ue/z*se,I=ae/a.length,Q=3,ne=i==="grouped"?Math.max(4,(I-Q*(t.length+1))/t.length):I,E=()=>A(ue=>({...ue,visible:!1})),X=g.useCallback(ue=>{const xe=ue.currentTarget.getBoundingClientRect(),Ne=ue.clientX-xe.left,Te=Math.floor((Ne-B)/I);if(Te<0||Te>=a.length){E();return}const De=t.map((Qe,qe)=>({color:Z[qe],series:Qe.label,value:Qe.data[Te]??0}));A({visible:!0,x:ue.clientX+12,y:ue.clientY-8,label:a[Te],items:De})},[t,a,I,Z,B]);if(i==="gradient"){const ue=((he=t[0])==null?void 0:he.data)??[],xe=((ge=t[0])==null?void 0:ge.label)??"",Ne=44,Te=0,De=20,Qe=20,qe=Math.max(V-Ne-Te,1),et=J-De-Qe,He=Math.max(0,...ue),rt=He>0?Vc(He):10,Ge=5,$t=Array.from({length:Ge+1},(je,Xe)=>rt*Xe/Ge),Be=je=>De+et-je/rt*et,It=qe/Math.max(1,ue.length),bt=je=>Ne+It*je,_n=je=>Ne+It*(je+1),bn=je=>Ne+It*(je+.5),Cr=ue.length===0?"":ue.map((je,Xe)=>{const lt=Be(je);return`M ${bt(Xe)} ${lt} L ${_n(Xe)} ${lt}`}).join(" "),Zo=[];ue.forEach((je,Xe)=>{if(je<=0)return;const lt=Be(je);Zo.push({x:bt(Xe),y:lt,width:Math.max(_n(Xe)-bt(Xe),0),height:De+et-lt})});const jr=Math.max(1,Math.ceil(45/It)),Qs=a.length-1,ti=_??(je=>`${Ro(je)}${p}`);return r.jsxs("div",{ref:R,className:te(Re.root,j),...N,children:[r.jsx("div",{ref:$,className:Re.svgWrap,children:r.jsxs("svg",{width:V,height:J,viewBox:`0 0 ${V} ${J}`,className:Re.svg,onMouseLeave:E,onMouseMove:je=>{const Xe=je.currentTarget.getBoundingClientRect(),lt=je.clientX-Xe.left,Tt=Math.floor((lt-Ne)/It);if(Tt<0||Tt>=ue.length){E();return}A({visible:!0,x:je.clientX+12,y:je.clientY-8,label:a[Tt]??"",items:[{color:y,series:xe,value:ue[Tt]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${L}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x}),r.jsx("stop",{offset:"100%",stopColor:y})]}),r.jsxs("linearGradient",{id:`${L}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),$t.map((je,Xe)=>r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,x2:V-Te,y1:Be(je),y2:Be(je),className:Re.gridLine}),r.jsxs("text",{x:0,y:Be(je)-6,className:Re.axisLabel,textAnchor:"start",children:[Ro(je),p]})]},`t-${Xe}`)),Zo.map((je,Xe)=>r.jsx("rect",{x:je.x,y:je.y,width:je.width,height:je.height,fill:`url(#${L}-fill)`},`b-${Xe}`)),Cr&&r.jsx("path",{d:Cr,fill:"none",stroke:`url(#${L}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),C.visible&&(()=>{var Sr;const je=(Sr=$.current)==null?void 0:Sr.getBoundingClientRect();if(!je)return null;const Xe=C.x-12-je.left,lt=Math.floor((Xe-Ne)/It);if(lt<0||lt>=ue.length)return null;const Tt=ue[lt]??0;return Tt<=0?null:r.jsx("circle",{cx:bn(lt),cy:Be(Tt),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((je,Xe)=>{const lt=Xe===0,Tt=Xe===Qs;if(!(lt||Tt)&&Xe%jr!==0)return null;const Ko=lt?Ne:Tt?V-Te:bn(Xe),Qo=lt?"start":Tt?"end":"middle";return r.jsx("text",{x:Ko,y:J-Qe+18,className:Re.axisLabel,textAnchor:Qo,children:je},`xl-${Xe}`)})]})}),C.visible&&C.items.length>0&&r.jsxs("div",{className:Re.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Re.tooltipLabel,children:C.label}),C.items.map(je=>r.jsxs("div",{className:Re.tooltipRow,children:[r.jsx("span",{className:Re.tooltipDot,style:{background:je.color}}),r.jsx("span",{className:Re.tooltipSeries,children:je.series}),r.jsx("span",{className:Re.tooltipValue,children:ti(je.value)})]},je.series))]})]})}if(i==="horizontal"){const ue=((be=t[0])==null?void 0:be.data)??[],xe=Vc(Math.max(...ue,1)),Ne=28,Te=10,De=120,qe=V-De-44,et=a.length*(Ne+Te)+Te;return r.jsxs("div",{ref:R,className:te(Re.root,j),...N,children:[r.jsx("div",{ref:$,className:Re.svgWrap,children:r.jsx("svg",{width:V,height:et,viewBox:`0 0 ${V} ${et}`,className:Re.svg,onMouseLeave:E,onMouseMove:He=>{var Be;const rt=He.currentTarget.getBoundingClientRect(),Ge=He.clientY-rt.top,$t=Math.floor(Ge/(Ne+Te));if($t<0||$t>=a.length){E();return}A({visible:!0,x:He.clientX+12,y:He.clientY-8,label:a[$t],items:[{color:Z[0],series:((Be=t[0])==null?void 0:Be.label)??"",value:ue[$t]??0}]})},children:a.map((He,rt)=>{const Ge=Te+rt*(Ne+Te),$t=ue[rt]??0,Be=$t/xe*qe;return r.jsxs("g",{children:[r.jsx("text",{x:De-8,y:Ge+Ne/2+4,className:Re.axisLabel,textAnchor:"end",children:He}),r.jsx("rect",{x:De,y:Ge,width:Be,height:Ne,rx:f,fill:Z[0]}),r.jsxs("text",{x:De+Be+6,y:Ge+Ne/2+4,className:Re.axisLabel,textAnchor:"start",children:[Ro($t),p]})]},rt)})})}),C.visible&&r.jsxs("div",{className:Re.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Re.tooltipLabel,children:C.label}),C.items.map(He=>r.jsxs("div",{className:Re.tooltipRow,children:[r.jsx("span",{className:Re.tooltipDot,style:{background:He.color}}),r.jsx("span",{className:Re.tooltipSeries,children:He.series}),r.jsxs("span",{className:Re.tooltipValue,children:[Ro(He.value),p]})]},He.series))]})]})}return r.jsxs("div",{ref:R,className:te(Re.root,j),...N,children:[r.jsx("div",{ref:$,className:Re.svgWrap,children:r.jsxs("svg",{width:V,height:J,viewBox:`0 0 ${V} ${J}`,className:Re.svg,onMouseMove:X,onMouseLeave:E,children:[r.jsx("defs",{children:Z.flatMap((ue,xe)=>[r.jsxs("linearGradient",{id:`${L}-fill-${xe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ue,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:ue,stopOpacity:"0"})]},`soft-${xe}`),r.jsxs("linearGradient",{id:`${L}-fill-strong-${xe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ue,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:ue,stopOpacity:"0"})]},`strong-${xe}`)])}),D.map(ue=>{const xe=k(ue);return r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,y1:xe,x2:V-G,y2:xe,className:Re.gridLine}),r.jsxs("text",{x:0,y:xe-6,className:Re.axisLabel,textAnchor:"start",children:[Ro(ue),p]})]},ue)}),a.map((ue,xe)=>{const Ne=B+xe*I;if(i==="stacked"){let Qe=0;const qe=t.map((Be,It)=>{const bt=Be.data[xe]??0,_n=bt/z*se,bn=k(Qe+bt);return Qe+=bt,{si:It,value:bt,barH:_n,y:bn}}),et=Ne+(I-ne)/2,He=qe.filter(Be=>Be.value>0),rt=He.length>0?He[0].si:-1,Ge=He.length>0?He[He.length-1]:null,$t=S??(Ge?Z[Ge.si]:"transparent");return r.jsxs("g",{children:[qe.map(({si:Be,value:It,barH:bt,y:_n})=>{if(It<=0)return null;if(w==="mono-scale"){const bn=Be===rt;return r.jsx("rect",{x:et,y:_n,width:ne,height:bt,fill:bn?`url(#${L}-fill-strong-${Be})`:Z[Be]},`fill-${Be}`)}return r.jsx("rect",{x:et,y:_n,width:ne,height:bt,fill:`url(#${L}-fill-${Be})`},`fill-${Be}`)}),w==="mono-scale"?Ge&&r.jsx("line",{x1:et,x2:et+ne,y1:Ge.y,y2:Ge.y,stroke:$t,strokeWidth:2,strokeLinecap:"butt"}):qe.map(({si:Be,value:It,y:bt})=>It>0?r.jsx("line",{x1:et,x2:et+ne,y1:bt,y2:bt,stroke:Z[Be],strokeWidth:2,strokeLinecap:"butt"},`cap-${Be}`):null)]},xe)}const Te=t.length*ne+(t.length-1)*Q,De=Ne+(I-Te)/2;return r.jsx("g",{children:t.map((Qe,qe)=>{const et=Qe.data[xe]??0;if(et<=0)return null;const He=et/z*se,rt=De+qe*(ne+Q),Ge=k(et);return r.jsxs("g",{children:[r.jsx("rect",{x:rt,y:Ge,width:ne,height:He,fill:`url(#${L}-fill-${qe})`}),r.jsx("line",{x1:rt,x2:rt+ne,y1:Ge,y2:Ge,stroke:Z[qe],strokeWidth:2,strokeLinecap:"butt"})]},qe)})},xe)}),(()=>{const xe=Math.max(1,Math.ceil(45/I)),Ne=a.length-1;return a.map((Te,De)=>{const Qe=De===0,qe=De===Ne;if(!(Qe||qe)&&De%xe!==0)return null;const He=Qe?B:qe?V-G:B+I*(De+.5),rt=Qe?"start":qe?"end":"middle";return r.jsx("text",{x:He,y:J-K+18,className:Re.axisLabel,textAnchor:rt,children:Te},`xl-${De}`)})})()]})}),u&&t.length>1&&r.jsx("div",{className:Re.legendWrap,children:t.map((ue,xe)=>r.jsxs("div",{className:Re.legendItem,children:[r.jsx("span",{className:Re.legendDot,style:{background:Z[xe]}}),r.jsx("span",{className:Re.legendLabel,children:ue.label})]},ue.label))}),C.visible&&r.jsxs("div",{className:Re.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Re.tooltipLabel,children:C.label}),C.items.map(ue=>r.jsxs("div",{className:Re.tooltipRow,children:[r.jsx("span",{className:Re.tooltipDot,style:{background:ue.color}}),r.jsx("span",{className:Re.tooltipSeries,children:ue.series}),r.jsxs("span",{className:Re.tooltipValue,children:[Ro(ue.value),p]})]},ue.series))]})]})});a_.displayName="BarChart";const i_="_root_1crij_5",s_="_svgWrap_1crij_13",l_="_svg_1crij_13",c_="_gridLine_1crij_23",d_="_axisLabelY_1crij_35 _axisLabel_1crij_28",u_="_axisLabelX_1crij_39 _axisLabel_1crij_28",h_="_legendWrap_1crij_51",p_="_tooltip_1crij_76",f_="_tooltipLabel_1crij_95",m_="_tooltipRow_1crij_105",g_="_tooltipDot_1crij_111",v_="_tooltipSeries_1crij_118",y_="_tooltipValue_1crij_125",Jt={root:i_,svgWrap:s_,svg:l_,gridLine:c_,axisLabelY:d_,axisLabelX:u_,legendWrap:h_,tooltip:p_,tooltipLabel:f_,tooltipRow:m_,tooltipDot:g_,tooltipSeries:v_,tooltipValue:y_};function x_(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function n1(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}function w_(t,a=.35){if(t.length<2)return"";let i=`M ${t[0][0]} ${t[0][1]}`;for(let l=0;l<t.length-1;l++){const[c,u]=t[l],[p,f]=t[l+1],m=(p-c)*a;i+=` C ${c+m} ${u}, ${p-m} ${f}, ${p} ${f}`}return i}const __=g.forwardRef(({series:t,labels:a,height:i=260,showGrid:l=!0,showLegend:c=!0,gradientFrom:u="#8c4fe2",gradientTo:p="#446cff",yUnit:f="",yTickCount:m=5,className:x,...y},_)=>{const[w,S]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),j=`line-grad-${Math.random().toString(36).slice(2,9)}`,N=g.useRef(null),[R,T]=g.useState(540);g.useEffect(()=>{const z=N.current;if(!z)return;const D=new ResizeObserver(I=>{var ne;const Q=(ne=I[0])==null?void 0:ne.contentRect.width;Q>0&&T(Math.floor(Q))});D.observe(z);const k=Math.floor(z.getBoundingClientRect().width);return k>0&&T(k),()=>D.disconnect()},[]);const L=44,C=20,A=20,$=R,F=i,P=$-L,B=F-C-A,G=`url(#${j}-stroke)`,K=z=>z.color??G,ee=t.flatMap(z=>z.data),V=x_(Math.max(...ee,1)),J=Array.from({length:m+1},(z,D)=>V*(D/m)).reverse(),ae=z=>A+B-z/V*B,se=z=>a.length>1?L+z/(a.length-1)*P:L+P/2,ce=z=>z.map((D,k)=>[se(k),ae(D)]),Z=()=>S(z=>({...z,visible:!1})),H=g.useCallback(z=>{const D=z.currentTarget.getBoundingClientRect(),I=z.clientX-D.left-L,Q=P/Math.max(a.length-1,1),ne=Math.round(I/Q),E=Math.max(0,Math.min(ne,a.length-1)),X=t.map(de=>({color:de.color??p,series:de.label,value:de.data[E]??0}));S({visible:!0,index:E,x:z.clientX+12,y:z.clientY-8,label:a[E],items:X})},[t,a,p,P,L]);return r.jsxs("div",{ref:_,className:te(Jt.root,x),...y,children:[r.jsx("div",{ref:N,className:Jt.svgWrap,children:r.jsxs("svg",{width:$,height:F,viewBox:`0 0 ${$} ${F}`,className:Jt.svg,onMouseMove:H,onMouseLeave:Z,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${j}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:u}),r.jsx("stop",{offset:"100%",stopColor:p})]}),r.jsxs("linearGradient",{id:`${j}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:p,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:p}),r.jsx("stop",{offset:"100%",stopColor:p,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${j}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${j}-clip`,children:r.jsx("rect",{x:L,y:A,width:P,height:B,rx:6,ry:6})})]}),J.map(z=>{const D=ae(z);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:D,x2:$,y2:D,className:Jt.gridLine}),r.jsxs("text",{x:0,y:D-6,className:Jt.axisLabelY,textAnchor:"start",children:[n1(z),f]})]},z)}),r.jsx("g",{clipPath:`url(#${j}-clip)`,children:t.map((z,D)=>{const k=ce(z.data),I=w_(k);return r.jsx("path",{d:I,fill:"none",stroke:K(z),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},D)})}),(()=>{const z=w.index>=0?w.index:0,D=se(z),k=w.visible&&w.index>=0,I="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:k?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${D}px)`,transition:I},children:[r.jsx("line",{x1:0,x2:0,y1:A,y2:A+B,stroke:p,strokeWidth:2,strokeLinecap:"round",opacity:.5}),t.map((Q,ne)=>{const E=Q.data[z]??0,X=ae(E),de=Q.color??p;return r.jsx("g",{style:{transform:`translateY(${X}px)`,transition:I},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:de,filter:`url(#${j}-pin-shadow)`})},ne)})]})})})(),(()=>{const D=a.length>1?P/(a.length-1):P,k=Math.max(1,Math.ceil(45/Math.max(D,1))),I=a.length-1;return a.map((Q,ne)=>{const E=ne===0,X=ne===I;if(!(E||X)&&ne%k!==0)return null;const he=E?L:X?$:se(ne),ge=E?"start":X?"end":"middle";return r.jsx("text",{x:he,y:F-C+14,className:Jt.axisLabelX,textAnchor:ge,children:Q},Q)})})()]})}),c&&t.length>0&&r.jsx("div",{className:Jt.legendWrap,children:r.jsx(mm,{variant:"line",items:t.map(z=>({color:z.color??p,label:z.label}))})}),w.visible&&r.jsxs("div",{className:Jt.tooltip,style:{left:w.x,top:w.y},children:[r.jsx("div",{className:Jt.tooltipLabel,children:w.label}),w.items.map(z=>r.jsxs("div",{className:Jt.tooltipRow,children:[r.jsx("span",{className:Jt.tooltipDot,style:{background:z.color}}),r.jsx("span",{className:Jt.tooltipSeries,children:z.series}),r.jsxs("span",{className:Jt.tooltipValue,children:[n1(z.value),f]})]},z.series))]})]})});__.displayName="LineChart";const b_="_root_3tq2n_5",k_="_chartWrap_3tq2n_14",C_="_svg_3tq2n_18",j_="_centerText_3tq2n_23",S_="_statLegend_3tq2n_31",N_="_statItem_3tq2n_37",R_="_statBar_3tq2n_44",L_="_statText_3tq2n_50",M_="_statValue_3tq2n_56",$_="_statLabel_3tq2n_65",I_="_listLegend_3tq2n_72",T_="_legendItem_3tq2n_79",A_="_legendDot_3tq2n_85",E_="_legendLabel_3tq2n_92",P_="_legendValue_3tq2n_99",z_="_tooltip_3tq2n_107",O_="_tooltipLabel_3tq2n_118",D_="_tooltipValue_3tq2n_124",yt={root:b_,chartWrap:k_,svg:C_,centerText:j_,statLegend:S_,statItem:N_,statBar:R_,statText:L_,statValue:M_,statLabel:$_,listLegend:I_,legendItem:T_,legendDot:A_,legendLabel:E_,legendValue:P_,tooltip:z_,tooltipLabel:O_,tooltipValue:D_},r1=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],B_=g.forwardRef(({segments:t,innerRadius:a=60,size:i=200,showLegend:l=!0,legendVariant:c="list",unit:u="%",centerLabel:p,className:f,...m},x)=>{const[y,_]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),w=t.map(($,F)=>$.color??r1[F%r1.length]),S=t.reduce(($,F)=>$+F.value,0),j=i/2,N=i/2,R=i*.15,T=(i-R)/2-2,L=2*Math.PI*T;let C=-L/4;const A=t.map(($,F)=>{const B=(S>0?$.value/S:0)*L,G=`${B} ${L-B}`,K=-C;return C+=B,{dashArray:G,dashOffset:K,color:w[F],...$}});return r.jsxs("div",{ref:x,className:te(yt.root,f),...m,children:[r.jsx("div",{className:yt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:yt.svg,children:[r.jsx("circle",{cx:j,cy:N,r:T,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:R}),A.map(($,F)=>r.jsx("circle",{cx:j,cy:N,r:T,fill:"none",stroke:$.color,strokeWidth:R,strokeDasharray:$.dashArray,strokeDashoffset:$.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:P=>{const B=S>0?Math.round($.value/S*100):0;_({visible:!0,x:P.clientX+12,y:P.clientY-8,label:$.label,value:`${B}${u}`})},onMouseLeave:()=>_(P=>({...P,visible:!1}))},F)),p&&a>0&&r.jsx("text",{x:j,y:N+6,textAnchor:"middle",className:yt.centerText,children:p})]})}),l&&c==="stat"&&r.jsx("div",{className:yt.statLegend,children:t.map(($,F)=>{const P=S>0?Math.round($.value/S*100):0;return r.jsxs("div",{className:yt.statItem,children:[r.jsx("span",{className:yt.statBar,style:{background:w[F]}}),r.jsxs("div",{className:yt.statText,children:[r.jsxs("span",{className:yt.statValue,children:[P,u]}),r.jsx("span",{className:yt.statLabel,children:$.label})]})]},$.label)})}),l&&c==="list"&&r.jsx("div",{className:yt.listLegend,children:t.map(($,F)=>{const P=S>0?Math.round($.value/S*100):0;return r.jsxs("div",{className:yt.legendItem,children:[r.jsx("span",{className:yt.legendDot,style:{background:w[F]}}),r.jsx("span",{className:yt.legendLabel,children:$.label}),r.jsxs("span",{className:yt.legendValue,children:[P,u]})]},$.label)})}),y.visible&&r.jsxs("div",{className:yt.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("div",{className:yt.tooltipLabel,children:y.label}),r.jsx("div",{className:yt.tooltipValue,children:y.value})]})]})});B_.displayName="DonutChart";const F_="_root_bqpf6_5",W_="_svgWrap_bqpf6_10",H_="_svg_bqpf6_10",q_="_axisLabel_bqpf6_19",U_="_tooltip_bqpf6_25",Lo={root:F_,svgWrap:W_,svg:H_,axisLabel:q_,tooltip:U_};function V_(t){return t<.35?"var(--Alloy-green-100)":t<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const G_=g.forwardRef(({cells:t,rows:a,cols:i,colorScale:l=V_,cellRadius:c=4,cellGap:u=4,showTooltip:p=!0,className:f,...m},x)=>{const[y,_]=g.useState({visible:!1,x:0,y:0,content:""}),w=g.useRef(null),[S,j]=g.useState(540);g.useEffect(()=>{const F=w.current;if(!F)return;const P=new ResizeObserver(G=>{var ee;const K=(ee=G[0])==null?void 0:ee.contentRect.width;K>0&&j(Math.floor(K))});P.observe(F);const B=Math.floor(F.getBoundingClientRect().width);return B>0&&j(B),()=>P.disconnect()},[]);const N=32,R=16,T=S,L=T-N-u,C=Math.max(4,(L-(i.length-1)*u)/i.length),A=a.length*(R+u)+u+24,$=new Map;return t.forEach(F=>$.set(`${F.row}__${F.col}`,F)),r.jsxs("div",{ref:x,className:te(Lo.root,f),...m,children:[r.jsx("div",{ref:w,className:Lo.svgWrap,children:r.jsxs("svg",{width:T,height:A,viewBox:`0 0 ${T} ${A}`,className:Lo.svg,onMouseLeave:()=>_(F=>({...F,visible:!1})),children:[i.map((F,P)=>{const B=N+u+P*(C+u)+C/2;return r.jsx("text",{x:B,y:12,className:Lo.axisLabel,textAnchor:"middle",children:F},F)}),a.map((F,P)=>{const B=24+P*(R+u);return r.jsxs("g",{children:[r.jsx("text",{x:N-4,y:B+R/2+4,className:Lo.axisLabel,textAnchor:"end",children:F}),i.map((G,K)=>{const ee=$.get(`${F}__${G}`),V=(ee==null?void 0:ee.value)??0,J=l(V),ae=N+u+K*(C+u);return r.jsx("rect",{x:ae,y:B,width:C,height:R,rx:c,fill:J,style:{cursor:"pointer"},onMouseEnter:se=>{if(!p)return;const ce=(ee==null?void 0:ee.label)??`${F} / ${G}: ${Math.round(V*100)}%`;_({visible:!0,x:se.clientX+12,y:se.clientY-8,content:ce})},onMouseLeave:()=>_(se=>({...se,visible:!1}))},G)})]},F)})]})}),y.visible&&r.jsx("div",{className:Lo.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});G_.displayName="HeatMap";const Y_="_root_18572_6",Z_="_gridWrap_18572_14",K_="_grid_18572_14",Q_="_cell_18572_27",X_="_legend_18572_33",J_="_legendSquare_18572_43",eb="_tooltip_18572_49",gr={root:Y_,gridWrap:Z_,grid:K_,cell:Q_,legend:X_,legendSquare:J_,tooltip:eb},tb=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function nb(t,a){if(t<=0)return 0;const i=t/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const rb=g.forwardRef(({days:t,levelColors:a=tb,cellSize:i=14,cellGap:l=3,cellRadius:c=2,fillWidth:u=!1,showLegend:p=!0,maxCount:f,formatTooltip:m,ariaLabel:x,className:y,..._},w)=>{const[S,j]=g.useState({visible:!1,x:0,y:0,content:""}),N=f??Math.max(1,...t.map(C=>C.count)),R=[];for(let C=0;C<t.length;C+=7)R.push(t.slice(C,C+7));const T=u?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${R.length}, minmax(0, 1fr))`,gap:`${l}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${l}px`},L=u?"100%":i;return r.jsxs("div",{ref:w,className:te(gr.root,y),..._,children:[r.jsx("div",{className:gr.gridWrap,children:r.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${N} on the busiest day`,className:gr.grid,style:T,onMouseLeave:()=>j(C=>({...C,visible:!1})),children:R.map((C,A)=>Array.from({length:7},($,F)=>{const P=C[F];if(!P)return r.jsx("span",{className:gr.cell,style:{width:i,height:i,borderRadius:c,background:a[0]}},`${A}-${F}`);const B=nb(P.count,N),G=m?m(P,B):`${P.label??P.date}: ${P.count} activation${P.count===1?"":"s"}`;return r.jsx("span",{className:gr.cell,style:{width:L,height:i,borderRadius:c,background:a[B]},onMouseMove:K=>j({visible:!0,x:K.clientX,y:K.clientY,content:G}),onMouseLeave:()=>j(K=>({...K,visible:!1}))},`${A}-${F}`)}))})}),p&&r.jsxs("div",{className:gr.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(C=>r.jsx("span",{className:gr.legendSquare,style:{background:a[C],borderRadius:c}},C)),r.jsx("span",{children:"More"})]}),S.visible&&r.jsx("div",{className:gr.tooltip,style:{left:S.x,top:S.y},children:S.content})]})});rb.displayName="ActivityHeatMap";const ob="_root_14edh_5",ab="_track_14edh_17",ib="_segment_14edh_28",sb="_legend_14edh_49",lb="_legendRow_14edh_58",cb="_legendDot_14edh_68",db="_legendLabel_14edh_74",ub="_legendValue_14edh_78",hb="_tooltip_14edh_84",pb="_tooltipLabel_14edh_100",fb="_tooltipValueRow_14edh_105",mb="_tooltipDot_14edh_114",ln={root:ob,track:ab,segment:ib,legend:sb,legendRow:lb,legendDot:cb,legendLabel:db,legendValue:ub,tooltip:hb,tooltipLabel:pb,tooltipValueRow:fb,tooltipDot:mb},gb=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],Mo={r:140,g:79,b:226},Gc={r:68,g:108,b:255};function o1(t){const a=Math.max(0,Math.min(100,t))/100,i=Math.round(Mo.r+(Gc.r-Mo.r)*a),l=Math.round(Mo.g+(Gc.g-Mo.g)*a),c=Math.round(Mo.b+(Gc.b-Mo.b)*a);return`rgb(${i}, ${l}, ${c})`}const vb=g.forwardRef(({segments:t,colors:a=gb,aiGradient:i=!1,height:l,showLegend:c=!1,flat:u=!1,ariaLabel:p,className:f,...m},x)=>{const[y,_]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),w=t.reduce((R,T)=>R+Math.max(0,T.value),0);let S=0;const j=t.map((R,T)=>{const L=Math.max(0,R.value),C=w>0?L/w*100:0,A=w>0?S/w*100:0;S+=L;const $=w>0?S/w*100:0,F=R.color??a[T%a.length],P=u?!0:R.emphasized??T===0;return{...R,pct:C,startPct:A,endPct:$,color:F,emphasized:P}}),N=l!==void 0?{height:typeof l=="number"?`${l}px`:l}:void 0;return r.jsxs("div",{ref:x,className:te(ln.root,f),...m,children:[r.jsx("div",{role:"img","aria-label":p??`Ratio bar: ${t.map(R=>`${R.label} ${R.value}`).join(", ")}`,className:ln.track,style:N,onMouseLeave:()=>_(R=>({...R,visible:!1})),children:j.map(R=>{const T=i?`linear-gradient(to right, ${o1(R.startPct)}, ${o1(R.endPct)})`:R.color;return r.jsx("span",{className:ln.segment,"data-emphasized":R.emphasized||void 0,"data-ai":i||void 0,style:{width:`${R.pct}%`,background:T,"--ratio-hover-bg":R.color},onMouseMove:L=>_({visible:!0,x:L.clientX,y:L.clientY,label:R.label,value:R.value,color:R.color})},R.label)})}),c&&r.jsx("ul",{className:ln.legend,children:j.map(R=>r.jsxs("li",{className:ln.legendRow,children:[r.jsx("span",{className:ln.legendDot,style:{background:R.color}}),r.jsx("span",{className:ln.legendLabel,children:R.label}),r.jsx("span",{className:ln.legendValue,children:R.value.toLocaleString("en-US")})]},R.label))}),y.visible&&r.jsxs("div",{className:ln.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("span",{className:ln.tooltipLabel,children:y.label}),r.jsxs("span",{className:ln.tooltipValueRow,children:[r.jsx("span",{className:ln.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});vb.displayName="RatioBar";const yb="_track_1wmly_6",xb="_fill_1wmly_12",a1={track:yb,fill:xb},wb=g.forwardRef(({value:t,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:l="var(--color-bg-tertiary)",gapColor:c="var(--color-bg-primary)",stripeWidth:u=2,stripeGap:p=1,height:f=12,ariaLabel:m,className:x,style:y,..._},w)=>{const S=u+p,j=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${u}px,
      ${c} ${u}px,
      ${c} ${S}px
    )`,N=Math.max(0,Math.min(a,t)),R=a>0?N/a*100:0;return r.jsx("div",{ref:w,role:"progressbar","aria-label":m??`Progress: ${Math.round(R)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":N,className:te(a1.track,x),style:{height:f,background:`${j}, ${l}`,...y},..._,children:r.jsx("div",{className:a1.fill,style:{width:`${R}%`,background:`${j}, ${i}`}})})});wb.displayName="StripedBar";const _b=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],bb=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function i1(t,a="to right"){const i=t.map(({color:l,position:c})=>`${l} ${c}`).join(", ");return`linear-gradient(${a}, ${i})`}i1(_b),i1(bb);var Ke="-ms-",Wa="-moz-",ze="-webkit-",gm="comm",Ws="rule",zd="decl",kb="@import",Cb="@namespace",vm="@keyframes",jb="@layer",ym=Math.abs,Od=String.fromCharCode,pd=Object.assign;function Sb(t,a){return ft(t,0)^45?(((a<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function xm(t){return t.trim()}function Un(t,a){return(t=a.exec(t))?t[0]:t}function Se(t,a,i){return t.replace(a,i)}function ys(t,a,i){return t.indexOf(a,i)}function ft(t,a){return t.charCodeAt(a)|0}function Qr(t,a,i){return t.slice(a,i)}function yn(t){return t.length}function wm(t){return t.length}function za(t,a){return a.push(t),t}function Nb(t,a){return t.map(a).join("")}function s1(t,a){return t.filter(function(i){return!Un(i,a)})}var Hs=1,Fo=1,_m=0,cn=0,ut=0,Vo="";function qs(t,a,i,l,c,u,p,f){return{value:t,root:a,parent:i,type:l,props:c,children:u,line:Hs,column:Fo,length:p,return:"",siblings:f}}function vr(t,a){return pd(qs("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},a)}function $o(t){for(;t.root;)t=vr(t.root,{children:[t]});za(t,t.siblings)}function Rb(){return ut}function Lb(){return ut=cn>0?ft(Vo,--cn):0,Fo--,ut===10&&(Fo=1,Hs--),ut}function xn(){return ut=cn<_m?ft(Vo,cn++):0,Fo++,ut===10&&(Fo=1,Hs++),ut}function xr(){return ft(Vo,cn)}function xs(){return cn}function Us(t,a){return Qr(Vo,t,a)}function Ua(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mb(t){return Hs=Fo=1,_m=yn(Vo=t),cn=0,[]}function $b(t){return Vo="",t}function Yc(t){return xm(Us(cn-1,fd(t===91?t+2:t===40?t+1:t)))}function Ib(t){for(;(ut=xr())&&ut<33;)xn();return Ua(t)>2||Ua(ut)>3?"":" "}function Tb(t,a){for(;--a&&xn()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Us(t,xs()+(a<6&&xr()==32&&xn()==32))}function fd(t){for(;xn();)switch(ut){case t:return cn;case 34:case 39:t!==34&&t!==39&&fd(ut);break;case 40:t===41&&fd(t);break;case 92:xn();break}return cn}function Ab(t,a){for(;xn()&&t+ut!==57;)if(t+ut===84&&xr()===47)break;return"/*"+Us(a,cn-1)+"*"+Od(t===47?t:xn())}function Eb(t){for(;!Ua(xr());)xn();return Us(t,cn)}function Pb(t){return $b(ws("",null,null,null,[""],t=Mb(t),0,[0],t))}function ws(t,a,i,l,c,u,p,f,m){for(var x=0,y=0,_=p,w=0,S=0,j=0,N=1,R=1,T=1,L=0,C="",A=c,$=u,F=l,P=C;R;)switch(j=L,L=xn()){case 40:if(j!=108&&ft(P,_-1)==58){ys(P+=Se(Yc(L),"&","&\f"),"&\f",ym(x?f[x-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:P+=Yc(L);break;case 9:case 10:case 13:case 32:P+=Ib(j);break;case 92:P+=Tb(xs()-1,7);continue;case 47:switch(xr()){case 42:case 47:za(zb(Ab(xn(),xs()),a,i,m),m),(Ua(j||1)==5||Ua(xr()||1)==5)&&yn(P)&&Qr(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*N:f[x++]=yn(P)*T;case 125*N:case 59:case 0:switch(L){case 0:case 125:R=0;case 59+y:T==-1&&(P=Se(P,/\f/g,"")),S>0&&(yn(P)-_||N===0&&j===47)&&za(S>32?c1(P+";",l,i,_-1,m):c1(Se(P," ","")+";",l,i,_-2,m),m);break;case 59:P+=";";default:if(za(F=l1(P,a,i,x,y,c,f,C,A=[],$=[],_,u),u),L===123)if(y===0)ws(P,a,F,F,A,u,_,f,$);else{switch(w){case 99:if(ft(P,3)===110)break;case 108:if(ft(P,2)===97)break;default:y=0;case 100:case 109:case 115:}y?ws(t,F,F,l&&za(l1(t,F,F,0,0,c,f,C,c,A=[],_,$),$),c,$,_,f,l?A:$):ws(P,F,F,F,[""],$,0,f,$)}}x=y=S=0,N=T=1,C=P="",_=p;break;case 58:_=1+yn(P),S=j;default:if(N<1){if(L==123)--N;else if(L==125&&N++==0&&Lb()==125)continue}switch(P+=Od(L),L*N){case 38:T=y>0?1:(P+="\f",-1);break;case 44:f[x++]=(yn(P)-1)*T,T=1;break;case 64:xr()===45&&(P+=Yc(xn())),w=xr(),y=_=yn(C=P+=Eb(xs())),L++;break;case 45:j===45&&yn(P)==2&&(N=0)}}return u}function l1(t,a,i,l,c,u,p,f,m,x,y,_){for(var w=c-1,S=c===0?u:[""],j=wm(S),N=0,R=0,T=0;N<l;++N)for(var L=0,C=Qr(t,w+1,w=ym(R=p[N])),A=t;L<j;++L)(A=xm(R>0?S[L]+" "+C:Se(C,/&\f/g,S[L])))&&(m[T++]=A);return qs(t,a,i,c===0?Ws:f,m,x,y,_)}function zb(t,a,i,l){return qs(t,a,i,gm,Od(Rb()),Qr(t,2,-2),0,l)}function c1(t,a,i,l,c){return qs(t,a,i,zd,Qr(t,0,l),Qr(t,l+1,-1),l,c)}function bm(t,a,i){switch(Sb(t,a)){case 5103:return ze+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ze+t+t;case 4855:return ze+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Wa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+t+Wa+t+Ke+t+t;case 5936:switch(ft(t,a+11)){case 114:return ze+t+Ke+Se(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ze+t+Ke+Se(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ze+t+Ke+Se(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ze+t+Ke+t+t;case 6165:return ze+t+Ke+"flex-"+t+t;case 5187:return ze+t+Se(t,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Ke+"flex-$1$2")+t;case 5443:return ze+t+Ke+"flex-item-"+Se(t,/flex-|-self/g,"")+(Un(t,/flex-|baseline/)?"":Ke+"grid-row-"+Se(t,/flex-|-self/g,""))+t;case 4675:return ze+t+Ke+"flex-line-pack"+Se(t,/align-content|flex-|-self/g,"")+t;case 5548:return ze+t+Ke+Se(t,"shrink","negative")+t;case 5292:return ze+t+Ke+Se(t,"basis","preferred-size")+t;case 6060:return ze+"box-"+Se(t,"-grow","")+ze+t+Ke+Se(t,"grow","positive")+t;case 4554:return ze+Se(t,/([^-])(transform)/g,"$1"+ze+"$2")+t;case 6187:return Se(Se(Se(t,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),t,"")+t;case 5495:case 3959:return Se(t,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return Se(Se(t,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Ke+"flex-pack:$3"),/space-between/,"justify")+ze+t+t;case 4200:if(!Un(t,/flex-|baseline/))return Ke+"grid-column-align"+Qr(t,a)+t;break;case 2592:case 3360:return Ke+Se(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(l,c){return a=c,Un(l.props,/grid-\w+-end/)})?~ys(t+(i=i[a].value),"span",0)?t:Ke+Se(t,"-start","")+t+Ke+"grid-row-span:"+(~ys(i,"span",0)?Un(i,/\d+/):+Un(i,/\d+/)-+Un(t,/\d+/))+";":Ke+Se(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(l){return Un(l.props,/grid-\w+-start/)})?t:Ke+Se(Se(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Se(t,/(.+)-inline(.+)/,ze+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yn(t)-1-a>6)switch(ft(t,a+1)){case 109:if(ft(t,a+4)!==45)break;case 102:return Se(t,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+Wa+(ft(t,a+3)==108?"$3":"$2-$3"))+t;case 115:return~ys(t,"stretch",0)?bm(Se(t,"stretch","fill-available"),a,i)+t:t}break;case 5152:case 5920:return Se(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,u,p,f,m,x){return Ke+c+":"+u+x+(p?Ke+c+"-span:"+(f?m:+m-+u)+x:"")+t});case 4949:if(ft(t,a+6)===121)return Se(t,":",":"+ze)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return Se(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(ft(t,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Ke+"$2box$3")+t;case 100:return Se(t,":",":"+Ke)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Se(t,"scroll-","scroll-snap-")+t}return t}function js(t,a){for(var i="",l=0;l<t.length;l++)i+=a(t[l],l,t,a)||"";return i}function Ob(t,a,i,l){switch(t.type){case jb:if(t.children.length)break;case kb:case Cb:case zd:return t.return=t.return||t.value;case gm:return"";case vm:return t.return=t.value+"{"+js(t.children,l)+"}";case Ws:if(!yn(t.value=t.props.join(",")))return""}return yn(i=js(t.children,l))?t.return=t.value+"{"+i+"}":""}function Db(t){var a=wm(t);return function(i,l,c,u){for(var p="",f=0;f<a;f++)p+=t[f](i,l,c,u)||"";return p}}function Bb(t){return function(a){a.root||(a=a.return)&&t(a)}}function Fb(t,a,i,l){if(t.length>-1&&!t.return)switch(t.type){case zd:t.return=bm(t.value,t.length,i);return;case vm:return js([vr(t,{value:Se(t.value,"@","@"+ze)})],l);case Ws:if(t.length)return Nb(i=t.props,function(c){switch(Un(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$o(vr(t,{props:[Se(c,/:(read-\w+)/,":"+Wa+"$1")]})),$o(vr(t,{props:[c]})),pd(t,{props:s1(i,l)});break;case"::placeholder":$o(vr(t,{props:[Se(c,/:(plac\w+)/,":"+ze+"input-$1")]})),$o(vr(t,{props:[Se(c,/:(plac\w+)/,":"+Wa+"$1")]})),$o(vr(t,{props:[Se(c,/:(plac\w+)/,Ke+"input-$1")]})),$o(vr(t,{props:[c]})),pd(t,{props:s1(i,l)});break}return""})}}var zo={},Zc,Kc;const Wo=typeof process<"u"&&zo!==void 0&&(zo.REACT_APP_SC_ATTR||zo.SC_ATTR)||"data-styled",km="active",Cm="data-styled-version",Vs="6.4.2",Dd=`/*!sc*/
`,Ha=typeof window<"u"&&typeof document<"u";function d1(t){if(typeof process<"u"&&zo!==void 0){const a=zo[t];if(a!==void 0&&a!=="")return a!=="false"}}const Wb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Kc=(Zc=d1("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Zc!==void 0?Zc:d1("SC_DISABLE_SPEEDY"))!==null&&Kc!==void 0?Kc:typeof process<"u"&&zo!==void 0&&!1),jm="sc-keyframes-";function ei(t,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let _s=new Map,Ss=new Map,bs=1;const Oa=t=>{if(_s.has(t))return _s.get(t);for(;Ss.has(bs);)bs++;const a=bs++;return _s.set(t,a),Ss.set(a,t),a},Hb=t=>Ss.get(t),qb=(t,a)=>{bs=a+1,_s.set(t,a),Ss.set(a,t)},Bd=Object.freeze([]),Ho=Object.freeze({});function Ub(t,a,i=Ho){return t.theme!==i.theme&&t.theme||a||i.theme}const Vb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gb=/(^-|-$)/g;function Sm(t){return t.replace(Vb,"-").replace(Gb,"")}const Yb=/(a)(d)/gi,u1=t=>String.fromCharCode(t+(t>25?39:97));function Fd(t){let a,i="";for(a=Math.abs(t);a>52;a=a/52|0)i=u1(a%52)+i;return(u1(a%52)+i).replace(Yb,"$1-$2")}const md=5381,Ur=(t,a)=>{let i=a.length;for(;i;)t=33*t^a.charCodeAt(--i);return t},Nm=t=>Ur(md,t);function Rm(t){return Fd(Nm(t)>>>0)}function Zb(t){return t.displayName||t.name||"Component"}function gd(t){return typeof t=="string"&&!0}function Kb(t){return gd(t)?`styled.${t}`:`Styled(${Zb(t)})`}const Lm=Symbol.for("react.memo"),Qb=Symbol.for("react.forward_ref"),Xb={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Jb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ek={[Qb]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Lm]:Mm};function h1(t){return("type"in(a=t)&&a.type.$$typeof)===Lm?Mm:"$$typeof"in t?ek[t.$$typeof]:Xb;var a}const tk=Object.defineProperty,nk=Object.getOwnPropertyNames,rk=Object.getOwnPropertySymbols,ok=Object.getOwnPropertyDescriptor,ak=Object.getPrototypeOf,ik=Object.prototype;function $m(t,a,i){if(typeof a!="string"){const l=ak(a);l&&l!==ik&&$m(t,l,i);const c=nk(a).concat(rk(a)),u=h1(t),p=h1(a);for(let f=0;f<c.length;++f){const m=c[f];if(!(m in Jb||i&&i[m]||p&&m in p||u&&m in u)){const x=ok(a,m);try{tk(t,m,x)}catch{}}}}return t}function Gs(t){return typeof t=="function"}const sk=Symbol.for("react.forward_ref");function Im(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===sk&&"styledComponentId"in t}function Da(t,a){return t&&a?t+" "+a:t||a||""}function vd(t,a){return t.join("")}function Va(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function yd(t,a,i=!1){if(!i&&!Va(t)&&!Array.isArray(t))return a;if(Array.isArray(a))for(let l=0;l<a.length;l++)t[l]=yd(t[l],a[l]);else if(Va(a))for(const l in a)t[l]=yd(t[l],a[l]);return t}function Wd(t,a){Object.defineProperty(t,"toString",{value:a})}const lk=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let a=this._cIndex;if(t>this._cGroup)for(let i=this._cGroup;i<t;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=t;i--)a-=this.groupSizes[i];return this._cGroup=t,this._cIndex=a,a}insertRules(t,a){if(t>=this.groupSizes.length){const c=this.groupSizes,u=c.length;let p=u;for(;t>=p;)if(p<<=1,p<0)throw ei(16,`${t}`);this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(let f=u;f<p;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(t+1),l=0;for(let c=0,u=a.length;c<u;c++)this.tag.insertRule(i,a[c])&&(this.groupSizes[t]++,i++,l++);l>0&&this._cGroup>t&&(this._cIndex+=l)}clearGroup(t){if(t<this.length){const a=this.groupSizes[t],i=this.indexOfGroup(t),l=i+a;this.groupSizes[t]=0;for(let c=i;c<l;c++)this.tag.deleteRule(i);a>0&&this._cGroup>t&&(this._cIndex-=a)}}getGroup(t){let a="";if(t>=this.length||this.groupSizes[t]===0)return a;const i=this.groupSizes[t],l=this.indexOfGroup(t),c=l+i;for(let u=l;u<c;u++)a+=this.tag.getRule(u)+Dd;return a}},ck=`style[${Wo}][${Cm}="${Vs}"]`,dk=new RegExp(`^${Wo}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),p1=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,xd=t=>{if(!t)return document;if(p1(t))return t;if("getRootNode"in t){const a=t.getRootNode();if(p1(a))return a}return document},uk=(t,a,i)=>{const l=i.split(",");let c;for(let u=0,p=l.length;u<p;u++)(c=l[u])&&t.registerName(a,c)},hk=(t,a)=>{var i;const l=((i=a.textContent)!==null&&i!==void 0?i:"").split(Dd),c=[];for(let u=0,p=l.length;u<p;u++){const f=l[u].trim();if(!f)continue;const m=f.match(dk);if(m){const x=0|parseInt(m[1],10),y=m[2];x!==0&&(qb(y,x),uk(t,y,m[3]),t.getTag().insertRules(x,c)),c.length=0}else c.push(f)}},Qc=t=>{const a=xd(t.options.target).querySelectorAll(ck);for(let i=0,l=a.length;i<l;i++){const c=a[i];c&&c.getAttribute(Wo)!==km&&(hk(t,c),c.parentNode&&c.parentNode.removeChild(c))}};let Pa=!1;function pk(){if(Pa!==!1)return Pa;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return Pa=t.nonce||t.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Pa=a.getAttribute("content")||void 0}return Pa=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Tm=(t,a)=>{const i=document.head,l=t||i,c=document.createElement("style"),u=(m=>{const x=Array.from(m.querySelectorAll(`style[${Wo}]`));return x[x.length-1]})(l),p=u!==void 0?u.nextSibling:null;c.setAttribute(Wo,km),c.setAttribute(Cm,Vs);const f=a||pk();return f&&c.setAttribute("nonce",f),l.insertBefore(c,p),c},fk=class{constructor(t,a){this.element=Tm(t,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var l;if(i.sheet)return i.sheet;const c=(l=i.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets;for(let u=0,p=c.length;u<p;u++){const f=c[u];if(f.ownerNode===i)return f}throw ei(17)})(this.element),this.length=0}insertRule(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""}},mk=class{constructor(t,a){this.element=Tm(t,a),this.nodes=this.element.childNodes,this.length=0}insertRule(t,a){if(t<=this.length&&t>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let f1=Ha;const gk={isServer:!Ha,useCSSOMInjection:!Wb};class Ys{static registerId(a){return Oa(a)}constructor(a=Ho,i={},l){this.options=Object.assign(Object.assign({},gk),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(l),this.server=!!a.isServer,!this.server&&Ha&&f1&&(f1=!1,Qc(this)),Wd(this,()=>(c=>{const u=c.getTag(),{length:p}=u;let f="";for(let m=0;m<p;m++){const x=Hb(m);if(x===void 0)continue;const y=c.names.get(x);if(y===void 0||!y.size)continue;const _=u.getGroup(m);if(_.length===0)continue;const w=Wo+".g"+m+'[id="'+x+'"]';let S="";for(const j of y)j.length>0&&(S+=j+",");f+=_+w+'{content:"'+S+'"}'+Dd}return f})(this))}rehydrate(){!this.server&&Ha&&Qc(this)}reconstructWithOptions(a,i=!0){const l=new Ys(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return l.keyframeIds=new Set(this.keyframeIds),!this.server&&Ha&&a.target!==this.options.target&&xd(this.options.target)!==xd(a.target)&&Qc(l),l}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:l,nonce:c})=>i?new fk(l,c):new mk(l,c))(this.options),new lk(a)));var a}hasNameForId(a,i){var l,c;return(c=(l=this.names.get(a))===null||l===void 0?void 0:l.has(i))!==null&&c!==void 0&&c}registerName(a,i){Oa(a),a.startsWith(jm)&&this.keyframeIds.add(a);const l=this.names.get(a);l?l.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,l){this.registerName(a,i),this.getTag().insertRules(Oa(a),l)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(Oa(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const Am=new WeakSet,vk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function yk(t,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in vk||t.startsWith("--")?String(a).trim():a+"px"}const Hr=47;function m1(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let a="";for(let i=0;i<t.length;i++){const l=t.charCodeAt(i);a+=l>=65&&l<=90?"-"+String.fromCharCode(l+32):t[i]}return a.startsWith("ms-")?"-"+a:a}const Em=Symbol.for("sc-keyframes");function xk(t){return typeof t=="object"&&t!==null&&Em in t}function Pm(t){return Gs(t)&&!(t.prototype&&t.prototype.isReactComponent)}const zm=t=>t==null||t===!1||t==="",wk=Symbol.for("react.client.reference");function g1(t){return t.$$typeof===wk}function Om(t,a){for(const i in t){const l=t[i];t.hasOwnProperty(i)&&!zm(l)&&(Array.isArray(l)&&Am.has(l)||Gs(l)?a.push(m1(i)+":",l,";"):Va(l)?(a.push(i+" {"),Om(l,a),a.push("}")):a.push(m1(i)+": "+yk(i,l)+";"))}}function Vr(t,a,i,l,c=[]){if(zm(t))return c;const u=typeof t;if(u==="string")return c.push(t),c;if(u==="function"){if(g1(t))return c;if(Pm(t)&&a){const p=t(a);return Vr(p,a,i,l,c)}return c.push(t),c}if(Array.isArray(t)){for(let p=0;p<t.length;p++)Vr(t[p],a,i,l,c);return c}return Im(t)?(c.push(`.${t.styledComponentId}`),c):xk(t)?(i?(t.inject(i,l),c.push(t.getName(l))):c.push(t),c):g1(t)?c:Va(t)?t.toString!==Object.prototype.toString?(c.push(t.toString()),c):(Om(t,c),c):(c.push(t.toString()),c)}const _k=Nm(Vs);class bk{constructor(a,i,l){this.rules=a,this.componentId=i,this.baseHash=Ur(_k,i),this.baseStyle=l,Ys.registerId(i)}generateAndInjectStyles(a,i,l){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,l):"";{let u="";for(let p=0;p<this.rules.length;p++){const f=this.rules[p];if(typeof f=="string")u+=f;else if(f)if(Pm(f)){const m=f(a);typeof m=="string"?u+=m:m!=null&&m!==!1&&(u+=vd(Vr(m,a,i,l)))}else u+=vd(Vr(f,a,i,l))}if(u){this.dynamicNameCache||(this.dynamicNameCache=new Map);const p=l.hash?l.hash+u:u;let f=this.dynamicNameCache.get(p);if(!f){if(f=Fd(Ur(Ur(this.baseHash,l.hash),u)>>>0),this.dynamicNameCache.size>=200){const m=this.dynamicNameCache.keys().next().value;m!==void 0&&this.dynamicNameCache.delete(m)}this.dynamicNameCache.set(p,f)}if(!i.hasNameForId(this.componentId,f)){const m=l(u,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,m)}c=Da(c,f)}}return c}}const kk=/&/g;function Dm(t,a){let i=0;for(;--a>=0&&t.charCodeAt(a)===92;)i++;return!(1&~i)}function Xc(t){const a=t.length;let i="",l=0,c=0,u=0,p=!1,f=!1;for(let m=0;m<a;m++){const x=t.charCodeAt(m);if(u!==0||p||x!==Hr||t.charCodeAt(m+1)!==42)if(p)x===42&&t.charCodeAt(m+1)===Hr&&(p=!1,m++);else if(x!==34&&x!==39||Dm(t,m)){if(u===0)if(x===123)c++;else if(x===125){if(c--,c<0){f=!0;let y=m+1;for(;y<a;){const _=t.charCodeAt(y);if(_===59||_===10)break;y++}y<a&&t.charCodeAt(y)===59&&y++,c=0,m=y-1,l=y;continue}c===0&&(i+=t.substring(l,m+1),l=m+1)}else x===59&&c===0&&(i+=t.substring(l,m+1),l=m+1)}else u===0?u=x:u===x&&(u=0);else p=!0,m++}return f||c!==0||u!==0?(l<a&&c===0&&u===0&&(i+=t.substring(l)),i):t}function Bm(t,a){const i=a+" ",l=","+i;for(let c=0;c<t.length;c++){const u=t[c];if(u.type==="rule"){u.value=(i+u.value).replaceAll(",",l);const p=u.props,f=[];for(let m=0;m<p.length;m++)f[m]=i+p[m];u.props=f}Array.isArray(u.children)&&u.type!=="@keyframes"&&Bm(u.children,a)}return t}function Ck({options:t=Ho,plugins:a=Bd}=Ho){let i,l,c;const u=(w,S,j)=>j.startsWith(l)&&j.endsWith(l)&&j.replaceAll(l,"").length>0?`.${i}`:w,p=a.slice();p.push(w=>{w.type===Ws&&w.value.includes("&")&&(c||(c=new RegExp(`\\${l}\\b`,"g")),w.props[0]=w.props[0].replace(kk,l).replace(c,u))}),t.prefix&&p.push(Fb),p.push(Ob);let f=[];const m=Db(p.concat(Bb(w=>f.push(w)))),x=(w,S="",j="",N="&")=>{i=N,l=S,c=void 0;const R=(function(L){const C=L.indexOf("//")!==-1,A=L.indexOf("}")!==-1;if(!C&&!A)return L;if(!C)return Xc(L);const $=L.length;let F="",P=0,B=0,G=0,K=0,ee=0,V=!1;for(;B<$;){const J=L.charCodeAt(B);if(J!==34&&J!==39||Dm(L,B))if(G===0)if(J===Hr&&B+1<$&&L.charCodeAt(B+1)===42){for(B+=2;B+1<$&&(L.charCodeAt(B)!==42||L.charCodeAt(B+1)!==Hr);)B++;B+=2}else if(J!==40)if(J!==41)if(K>0)B++;else if(J===42&&B+1<$&&L.charCodeAt(B+1)===Hr)F+=L.substring(P,B),B+=2,P=B,V=!0;else if(J===Hr&&B+1<$&&L.charCodeAt(B+1)===Hr){for(F+=L.substring(P,B);B<$&&L.charCodeAt(B)!==10;)B++;P=B,V=!0}else J===123?ee++:J===125&&ee--,B++;else K>0&&K--,B++;else K++,B++;else B++;else G===0?G=J:G===J&&(G=0),B++}return V?(P<$&&(F+=L.substring(P)),ee===0?F:Xc(F)):ee===0?L:Xc(L)})(w);let T=Pb(j||S?j+" "+S+" { "+R+" }":R);return t.namespace&&(T=Bm(T,t.namespace)),f=[],js(T,m),f},y=t;let _=md;for(let w=0;w<a.length;w++)a[w].name||ei(15),_=Ur(_,a[w].name);return y!=null&&y.namespace&&(_=Ur(_,y.namespace)),y!=null&&y.prefix&&(_=Ur(_,"p")),x.hash=_!==md?_.toString():"",x}const jk=new Ys,wd=Ck(),Fm=wr.createContext({shouldForwardProp:void 0,styleSheet:jk,stylis:wd,stylisPlugins:void 0});Fm.Consumer;function Sk(){return wr.useContext(Fm)}const Wm=wr.createContext(void 0);Wm.Consumer;const v1=Object.prototype.hasOwnProperty,Jc={};function Nk(t,a){const i=typeof t!="string"?"sc":Sm(t);Jc[i]=(Jc[i]||0)+1;const l=i+"-"+Rm(Vs+i+Jc[i]);return a?a+"-"+l:l}function Rk(t,a,i){const l=Im(t),c=t,u=!gd(t),{attrs:p=Bd,componentId:f=Nk(a.displayName,a.parentComponentId),displayName:m=Kb(t)}=a,x=a.displayName&&a.componentId?Sm(a.displayName)+"-"+a.componentId:a.componentId||f,y=l&&c.attrs?c.attrs.concat(p).filter(Boolean):p;let{shouldForwardProp:_}=a;if(l&&c.shouldForwardProp){const N=c.shouldForwardProp;if(a.shouldForwardProp){const R=a.shouldForwardProp;_=(T,L)=>N(T,L)&&R(T,L)}else _=N}const w=new bk(i,x,l?c.componentStyle:void 0);function S(N,R){return(function(T,L,C){const{attrs:A,componentStyle:$,defaultProps:F,foldedComponentIds:P,styledComponentId:B,target:G}=T,K=wr.useContext(Wm),ee=Sk(),V=T.shouldForwardProp||ee.shouldForwardProp,J=Ub(L,K,F)||Ho;let ae,se;{const z=wr.useRef(null),D=z.current;if(D!==null&&D[1]===J&&D[2]===ee.styleSheet&&D[3]===ee.stylis&&D[7]===$&&(function(k,I,Q){const ne=k,E=I;let X=0;for(const de in E)if(v1.call(E,de)&&(X++,ne[de]!==E[de]))return!1;return X===Q})(D[0],L,D[4]))ae=D[5],se=D[6];else{ae=(function(I,Q,ne){const E=Object.assign(Object.assign({},Q),{className:void 0,theme:ne}),X=I.length>1;for(let de=0;de<I.length;de++){const he=I[de],ge=Gs(he)?he(X?Object.assign({},E):E):he;for(const be in ge)be==="className"?E.className=Da(E.className,ge[be]):be==="style"?E.style=Object.assign(Object.assign({},E.style),ge[be]):be in Q&&Q[be]===void 0||(E[be]=ge[be])}return"className"in Q&&typeof Q.className=="string"&&(E.className=Da(E.className,Q.className)),E})(A,L,J),se=(function(I,Q,ne,E){return I.generateAndInjectStyles(Q,ne,E)})($,ae,ee.styleSheet,ee.stylis);let k=0;for(const I in L)v1.call(L,I)&&k++;z.current=[L,J,ee.styleSheet,ee.stylis,k,ae,se,$]}}const ce=ae.as||G,Z=(function(z,D,k,I){const Q={};for(const ne in z)z[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&z.theme===k||(ne==="forwardedAs"?Q.as=z.forwardedAs:I&&!I(ne,D)||(Q[ne]=z[ne]));return Q})(ae,ce,J,V);let H=Da(P,B);return se&&(H+=" "+se),ae.className&&(H+=" "+ae.className),Z[gd(ce)&&ce.includes("-")?"class":"className"]=H,C&&(Z.ref=C),g.createElement(ce,Z)})(j,N,R)}S.displayName=m;let j=wr.forwardRef(S);return j.attrs=y,j.componentStyle=w,j.displayName=m,j.shouldForwardProp=_,j.foldedComponentIds=l?Da(c.foldedComponentIds,c.styledComponentId):"",j.styledComponentId=x,j.target=l?c.target:t,Object.defineProperty(j,"defaultProps",{get(){return this._foldedDefaultProps},set(N){this._foldedDefaultProps=l?(function(R,...T){for(const L of T)yd(R,L,!0);return R})({},c.defaultProps,N):N}}),Wd(j,()=>`.${j.styledComponentId}`),u&&$m(j,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}var Lk=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function y1(t,a){const i=[t[0]];for(let l=0,c=a.length;l<c;l+=1)i.push(a[l],t[l+1]);return i}const x1=t=>(Am.add(t),t);function Pt(t,...a){if(Gs(t)||Va(t))return x1(Vr(y1(Bd,[t,...a])));const i=t;return a.length===0&&i.length===1&&typeof i[0]=="string"?Vr(i):x1(Vr(y1(i,a)))}function _d(t,a,i=Ho){if(!a)throw ei(1,a);const l=(c,...u)=>t(a,i,Pt(c,...u));return l.attrs=c=>_d(t,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)})),l.withConfig=c=>_d(t,a,Object.assign(Object.assign({},i),c)),l}const Hm=t=>_d(Rk,t),b=Hm;Lk.forEach(t=>{b[t]=Hm(t)});var qm;class Mk{constructor(a,i){this[qm]=!0,this.inject=(l,c=wd)=>{const u=this.getName(c);if(!l.hasNameForId(this.id,u)){const p=c(this.rules,u,"@keyframes");l.insertRules(this.id,u,p)}},this.name=a,this.id=jm+a,this.rules=i,Oa(this.id),Wd(this,()=>{throw ei(12,String(this.name))})}getName(a=wd){return a.hash?this.name+Fd(+a.hash>>>0):this.name}}function Oe(t,...a){const i=vd(Pt(t,...a)),l=Rm(i);return new Mk(l,i)}qm=Em;const $k=768,Ik=`(max-width: ${$k-1}px)`;function Um(t){const[a,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(t).matches);return g.useEffect(()=>{if(typeof window>"u")return;const l=window.matchMedia(t),c=u=>i(u.matches);return i(l.matches),l.addEventListener("change",c),()=>l.removeEventListener("change",c)},[t]),a}function Tk(){return Um(Ik)}const Ak="48px",Ek="240px",w1="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",Pk=b.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${t=>t.$isExpanded?Ek:Ak};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${t=>t.$isExpanded?Pt`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Pt`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${t=>t.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,zk=b.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${t=>t.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${t=>t.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,Ok=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,Dk=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,Bk=b.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  height: 32px;
  background: var(--color-bg-primary, white);
  border: 0.5px solid var(--color-border-transparent, rgba(21, 21, 21, 0.05));
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,Fk=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-content-primary, #151515);

  img {
    width: 17px;
    height: 14px;
    object-fit: contain;
  }
`,Wk=b.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: var(--color-content-primary, #151515);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_1=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: var(--color-content-secondary, #1c222a);
  opacity: 0.6;

  svg {
    width: 16px;
    height: 16px;
  }
`,ed=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Hk="var(--gradient-ai)",Vm=b.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${t=>t.$isActive&&!t.$isAi&&Pt`
      background: var(--color-bg-primary, white);
      box-shadow: ${w1}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${t=>t.$isActive&&t.$isAi&&Pt`
      background: ${Hk};
      box-shadow: ${w1}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,Gm=b.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  /* Color cascades to icon (currentColor) and label (inherit) */
  color: ${t=>t.$isAiActive?"var(--color-content-inverse, white)":"var(--color-content-primary, #151515)"};
  opacity: ${t=>t.$isActive?1:.6};
  transition: background 150ms ease-in-out, opacity 150ms ease-in-out, color 150ms ease-in-out;

  &:hover {
    background: ${t=>t.$isAiActive?"transparent":"var(--color-bg-transparent, rgba(21, 21, 21, 0.05))"};
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,Ym=b.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Zm=b.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  svg, img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,qk=b.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,td=b.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
  flex-shrink: 0;
`;b.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px 2px 8px;
  border-radius: 16px;
  background: linear-gradient(
    to bottom,
    rgba(227, 25, 254, 0.18),
    rgba(255, 46, 146, 0.18)
  );
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.03);
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #B01786;
  white-space: nowrap;
  flex-shrink: 0;
`;const Uk=b.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  padding: ${t=>t.$isExpanded?"6px 0":"0"};
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,Vk=b.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: ${t=>t.$color||"#ee9c2d"};
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  flex-shrink: 0;
  margin: 0 4px;
`,Gk=b.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: var(--color-content-secondary, #1c222a);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;b.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.084px;
  color: var(--color-content-primary, #151515);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;function Yk({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function Zk({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function Kk({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function Qk({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function Xk({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function Jk({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function eC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function tC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function nC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function rC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function qo({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function oC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function aC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function iC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function b1({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function nd({item:t,isExpanded:a,showNewBadge:i,isAi:l}){const c=t.isActive??!1;return r.jsx(Vm,{$isActive:c,$isAi:l,children:r.jsxs(Gm,{$isActive:c,$isAiActive:c&&!!l,onClick:t.onClick,"aria-current":c?"page":void 0,title:a?void 0:t.label,children:[r.jsxs(Zm,{children:[t.hasUnread&&r.jsx(qk,{}),c&&t.activeIcon?t.activeIcon:t.icon]}),a&&r.jsx(Ym,{children:t.label}),a&&i&&r.jsx(Xa,{variant:"primary",children:"New"})]})})}function sC({items:t,toolItems:a=[],bottomItems:i=[],workspace:l,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:x}){const[y,_]=g.useState(!1);return r.jsx(Pk,{$isExpanded:y,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),"aria-label":"Primary navigation",children:r.jsxs(zk,{$isExpanded:y,children:[r.jsxs(Ok,{children:[r.jsxs(Bk,{$isExpanded:y,onClick:u,"aria-label":`Workspace: ${l.name}`,title:y?void 0:l.name,children:[r.jsx(Fk,{children:l.logoUrl?r.jsx("img",{src:l.logoUrl,alt:l.name}):l.initial??l.name.charAt(0).toUpperCase()}),y&&r.jsxs(r.Fragment,{children:[r.jsx(Wk,{children:l.name}),r.jsx(_1,{children:r.jsx(b1,{})})]})]}),r.jsx(ed,{children:t.map(w=>r.jsx(nd,{item:w,isExpanded:y,isAi:w.id===x},w.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(td,{}),r.jsx(ed,{children:a.map(w=>r.jsx(nd,{item:w,isExpanded:y,showNewBadge:w.id===m,isAi:w.id===x},w.id))})]})]}),r.jsxs(Dk,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(td,{}),r.jsx(ed,{children:i.map(w=>r.jsx(nd,{item:w,isExpanded:y,isAi:w.id===x},w.id))})]}),r.jsx(td,{}),r.jsx(Vm,{$isActive:!1,children:r.jsxs(Gm,{$isActive:!1,onClick:f,"aria-label":"Settings",title:y?void 0:"Settings",children:[r.jsx(Zm,{children:r.jsx(iC,{})}),y&&r.jsx(Ym,{children:"Settings"})]})}),r.jsxs(Uk,{$isExpanded:y,onClick:p,"aria-label":`User: ${c.name}`,title:y?void 0:c.name,children:[r.jsx(Vk,{$color:c.avatarColor,children:c.initials}),y&&r.jsxs(r.Fragment,{children:[r.jsx(Gk,{children:c.name}),r.jsx(_1,{children:r.jsx(b1,{})})]})]})]})]})})}const lC=270,cC=b.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${t=>t.$isVisible?`${t.$width}px`:"0px"};
  height: 100%;
  flex-shrink: 0;
  background: var(--color-bg-primary, white);
  border-right: 1px solid var(--color-border-opaque, #e8eaee);
  overflow: hidden;
  /* Skip the width transition during an active drag so the panel tracks
     the cursor exactly; keep it for visibility toggles. */
  transition: ${t=>t.$isResizing?"none":"width 200ms ease"};
`,dC=b.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,uC=b.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,hC=b.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-relaxed, 1.5);
  letter-spacing: var(--tracking-wide, 0.02em);
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,pC=b.div`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 0 12px 8px;

  /* The SearchField root sits in the first slot — flex it so the input
     fills whatever room is left after the fixed-size filter button,
     even when the secondary nav is dragged down to its min width. */
  > div {
    flex: 1;
    min-width: 0;
  }
`,fC=b.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  background: var(--color-bg-primary, white);
  border: 1px solid var(--color-border-opaque, #e8eaee);
  color: var(--color-content-secondary, #1c222a);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-secondary, #f6f7f9);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,mC=b.div`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`,gC=b.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  padding: 0 4px;
  /* Chevron→label gap matches the menu rows' --li-gap so group labels and child
     labels share one indentation. */
  gap: 12px;
  border-radius: 6px;
  cursor: pointer;
  color: var(--color-content-tertiary, #475569);
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
    border-radius: 6px;
  }
`;b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  padding: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`;const vC=b.span`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-content-tertiary, #475569);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,yC=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* 32px chevron slot — same width as the menu-item icon slot (SecNavIconSlot)
     so the chevron column and the case-row icon column align, and group labels
     land at the same x as menu-item labels (one shared indentation). */
  width: 32px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-content-tertiary, #475569);

  svg {
    width: 16px;
    height: 16px;
  }
`,xC=Oe`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,wC=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${xC} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,k1=b.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  /* Left inset aligns the toggle text under the child labels (li-px 4 + icon
     slot 32 + --li-gap 12). */
  padding: 0 8px 0 48px;
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-content-inverse-tertiary, #87919f);
  transition: background 150ms ease-in-out, color 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
    color: var(--color-content-tertiary, #475569);
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--color-border-focus, #1969fe);
  }
`,_C=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${t=>t.$outlined&&Pt`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,bC=b.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,kC=b.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,CC=b.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 6px;
  height: 100%;
  cursor: col-resize;
  z-index: 10;
  /* Translate half the width over the border so the cursor zone straddles
     the existing 1px border-right. */
  transform: translateX(3px);
  background: ${t=>t.$isResizing?"var(--color-border-focus, #1969fe)":"transparent"};
  transition: background var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-border-focus, #1969fe);
  }
`,jC=b.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,SC=b.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,NC=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,Km=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  /* Centered, no horizontal padding: the 8px inset that gives the hover/selected
     background breathing room comes from the row's --li-px, so the icon centers
     in the full 32px slot and aligns with the group chevron column. */
  padding: 8px 0;
  color: var(--color-content-tertiary, #475569);

  svg {
    width: 16px;
    height: 16px;
  }
`;b.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  svg {
    width: 16px;
    height: 16px;
    color: var(--color-content-tertiary, #475569);
  }
`;function Qm(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function RC(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Hd={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function LC({item:t}){return r.jsx(wn,{label:r.jsx("span",{style:{color:t.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:t.isActive?500:void 0,letterSpacing:"-0.084px"},children:t.label}),leadingSlot:r.jsx(Km,{children:t.icon??r.jsx(Qm,{})}),selected:t.isActive,onClick:t.onClick,divider:!1,size:"md","aria-current":t.isActive?"page":void 0,style:Hd})}function MC({group:t}){const[a,i]=g.useState(t.defaultExpanded??!0),[l,c]=g.useState(!1),u=t.maxVisible,f=u!=null&&!l&&t.children.length>u?t.children.slice(0,u):t.children,m=t.children.length-f.length;return r.jsxs(_C,{$outlined:t.outlined,children:[r.jsxs(gC,{onClick:()=>i(x=>!x),"aria-expanded":a,children:[r.jsx(yC,{children:a?r.jsx(kr,{size:16}):r.jsx(en,{size:16})}),r.jsx(vC,{children:t.label}),t.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:t.trailingBadge})]}),a&&r.jsxs(wC,{children:[f.map(x=>r.jsx(wn,{label:r.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:r.jsx(Km,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:Hd},x.id)),m>0&&r.jsxs(k1,{type:"button",onClick:()=>c(!0),children:["Show ",m," more"]}),u!=null&&l&&t.children.length>u&&r.jsx(k1,{type:"button",onClick:()=>c(!1),children:"Show less"})]})]})}function $C({heading:t,isVisible:a,menuEntries:i=[],menuHeader:l,pageEntries:c=[],showSearch:u=!0,searchValue:p="",onSearchChange:f,onFilterClick:m,headerSlot:x,bodyContent:y,width:_=lC,onWidthChange:w,minWidth:S=220,maxWidth:j=520}){const N=y!==void 0,R=g.useRef(null),[T,L]=g.useState(!1);return g.useEffect(()=>{if(!T||!w)return;const C=R.current;if(!C)return;const A=C.getBoundingClientRect().left,$=B=>{const G=Math.min(j,Math.max(S,B.clientX-A));w(G)},F=()=>L(!1);window.addEventListener("mousemove",$),window.addEventListener("mouseup",F);const P=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",F),document.body.style.userSelect=P,document.body.style.cursor=""}},[T,w,S,j]),r.jsxs(cC,{ref:R,$isVisible:a,$width:_,$isResizing:T,"aria-label":"Secondary navigation",children:[r.jsxs(dC,{children:[(t||x)&&r.jsxs(uC,{children:[r.jsx(hC,{children:t}),x]}),u&&!N&&r.jsxs(pC,{children:[r.jsx(tm,{size:"sm",placeholder:"Search...",value:p,onChange:C=>f==null?void 0:f(C.target.value)}),r.jsx(fC,{onClick:m,"aria-label":"Filter",children:r.jsx(RC,{})})]})]}),N?y:r.jsxs(mC,{children:[l,i.map(C=>C.type==="single"?r.jsx(LC,{item:C.item},C.item.id):C.type==="group"?r.jsx(MC,{group:C.group},C.group.id):C.type==="divider"?r.jsx(SC,{},C.id):r.jsx(bC,{children:C.label.label},C.label.id))]}),c.length>0&&r.jsxs(kC,{children:[r.jsx(jC,{}),c.map(C=>r.jsx(wn,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:C.label}),leadingSlot:r.jsx(NC,{children:C.icon??r.jsx(Qm,{})}),onClick:C.onClick,selected:C.isActive??!1,divider:!1,size:"md","aria-current":C.isActive?"page":void 0,style:Hd},C.id))]}),w&&a&&r.jsx(CC,{$isResizing:T,onMouseDown:C=>{C.preventDefault(),L(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const IC=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:t})=>t?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,TC=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;

  /* Prevent Alloy Breadcrumb .list from wrapping inside the 48px TopNav */
  ol, ul {
    flex-wrap: nowrap !important;
    overflow: hidden;
  }
`,Xm=b.div`
  margin: 0;
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: var(--text-sm, 0.875rem);
  font-weight: var(--font-weight-medium, 500);
  line-height: var(--line-height-relaxed, 1.5);
  letter-spacing: var(--tracking-wide, 0.02em);
  color: var(--color-content-primary, #151515);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,AC=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,EC=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function PC(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function C1(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function j1(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function zC(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function OC({heading:t,actions:a=[],showActivityButton:i=!0,showPonderButton:l=!0,noBorder:c=!1,onActivityClick:u,onPonderClick:p,onDotsClick:f}){const m=a.filter(_=>_.variant==="secondary"),x=a.filter(_=>_.variant==="primary"),y=Um("(prefers-color-scheme: dark)");return r.jsxs(IC,{$noBorder:c,children:[r.jsx(TC,{children:typeof t=="string"?r.jsx(Xm,{children:t}):t}),r.jsxs(AC,{children:[r.jsxs(EC,{children:[r.jsx(Ie,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:r.jsx(PC,{})}),m.map(_=>r.jsx(Ie,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(j1,{}),trailingArtwork:r.jsx(C1,{}),onClick:_.onClick,children:_.label},_.id)),x.map(_=>r.jsx(Ie,{variant:"primary",size:"sm",leadingArtwork:r.jsx(j1,{}),trailingArtwork:r.jsx(C1,{}),onClick:_.onClick,children:_.label},_.id))]}),i&&r.jsx(Ie,{variant:"ghost",size:"sm",iconOnly:!0,onClick:u,"aria-label":"Activity",title:"Activity",children:r.jsx(zC,{})}),l&&r.jsx(ff,{dark:y,onClick:p,"aria-label":"Ponder AI"})]})]})}const DC=b.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,BC=b.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,FC=b.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,WC=b.main`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  background: var(--color-bg-primary, white);
  padding-bottom: var(--space-8, 32px);

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`,S1="tb:secondary-nav-width",N1=270,R1=220,L1=520;function HC({items:t,toolItems:a,bottomItems:i,workspace:l,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:x,secNavHeading:y,menuEntries:_,menuHeader:w,pageEntries:S,showSearch:j,searchValue:N,onSearchChange:R,onFilterClick:T,headerSlot:L,bodyContent:C,heading:A,actions:$,showActivityButton:F,showPonderButton:P,noBorder:B,onActivityClick:G,onPonderClick:K,onDotsClick:ee,children:V,showSecondaryNav:J=!0,showTopNav:ae=!0}){const[se,ce]=g.useState(()=>{if(typeof window>"u")return N1;const Z=window.localStorage.getItem(S1),H=Z?parseInt(Z,10):NaN;return Number.isFinite(H)?Math.min(L1,Math.max(R1,H)):N1});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(S1,String(se))},[se]),r.jsxs(DC,{children:[r.jsx(sC,{items:t,toolItems:a,bottomItems:i,workspace:l,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:x}),r.jsxs(BC,{children:[J&&r.jsx($C,{heading:y,menuEntries:_,menuHeader:w,pageEntries:S,isVisible:!0,showSearch:j,searchValue:N,onSearchChange:R,onFilterClick:T,headerSlot:L,bodyContent:C,width:se,onWidthChange:ce,minWidth:R1,maxWidth:L1}),r.jsxs(FC,{children:[ae&&r.jsx(OC,{heading:A,actions:$,showActivityButton:F,showPonderButton:P,noBorder:B,onActivityClick:G,onPonderClick:K,onDotsClick:ee}),r.jsx(WC,{children:V})]})]})]})}function qC({deadZonePx:t=8,topThresholdPx:a=20,target:i}={}){const[l,c]=g.useState(null),u=g.useRef(0);return g.useEffect(()=>{var x;const p=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;u.current=p();const f=()=>{const y=p(),_=y-u.current;Math.abs(_)<t||(_>0&&y>a?c("down"):_<0&&c("up"),u.current=y)},m=i??(typeof window<"u"?window:{});return(x=m.addEventListener)==null||x.call(m,"scroll",f,{passive:!0}),()=>{var y;(y=m.removeEventListener)==null||y.call(m,"scroll",f)}},[t,a,i]),l}const UC=b.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  flex: 1 1 0;
  min-width: 0;
  padding: 0 var(--space-1, 4px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-content-primary, #151515);
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  height: 32px;
  box-sizing: border-box;

  background: ${t=>t.$active?"var(--color-bg-tertiary, #eceef1)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,VC=b.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,GC=b.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function rd({label:t,isOpen:a,onClick:i,ariaLabel:l}){return r.jsxs(UC,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":l,children:[r.jsx(VC,{children:t}),r.jsx(GC,{children:r.jsx(kr,{size:14})})]})}const YC=b.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${t=>t.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,ZC=b.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,M1=b.button`
  all: unset;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  color: var(--color-content-secondary, #475569);
  cursor: pointer;
  flex: 0 0 auto;
  &:hover { background: var(--color-bg-tertiary, #eceef1); }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,KC=b.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,$1=b.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,QC=b.button`
  all: unset;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: ${t=>t.$color??"var(--color-bg-tertiary, #eceef1)"};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  flex: 0 0 auto;
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`;function XC({size:t=18}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const JC=g.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:l,openOverlay:c,user:u,hidden:p,onHamburgerClick:f,onPrimaryClick:m,onSecondaryClick:x,onTertiaryClick:y,onSearchClick:_,onUserClick:w},S){return r.jsx(YC,{ref:S,$hidden:p,children:r.jsxs(ZC,{children:[r.jsx(M1,{onClick:f,"aria-label":"Open navigation",children:r.jsx(XC,{size:18})}),r.jsxs(KC,{children:[r.jsx(rd,{label:a,isOpen:c==="primary",onClick:m,ariaLabel:"Choose a module"}),i&&r.jsxs(r.Fragment,{children:[r.jsx($1,{"aria-hidden":"true",children:"›"}),r.jsx(rd,{label:i,isOpen:c==="secondary",onClick:x,ariaLabel:"Choose a section"})]}),l&&r.jsxs(r.Fragment,{children:[r.jsx($1,{"aria-hidden":"true",children:"›"}),r.jsx(rd,{label:l,isOpen:c==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]}),r.jsx(M1,{onClick:_,"aria-label":"Search",children:r.jsx(Ed,{size:18})}),r.jsx(QC,{onClick:w,$color:u.avatarColor,"aria-label":`User: ${u.name}`,children:u.initials})]})})}),ej=Oe`
  from { opacity: 0; }
  to { opacity: 1; }
`,tj=b.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${ej} 160ms ease-out;
`;function nj({onDismiss:t}){return g.useEffect(()=>{const a=l=>{l.key==="Escape"&&t()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[t]),r.jsx(tj,{onClick:t,"aria-hidden":"true"})}const rj=Oe`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,oj=b.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 901;
  background: var(--color-bg-primary, #ffffff);
  border-top-left-radius: var(--radius-lg, 12px);
  border-top-right-radius: var(--radius-lg, 12px);
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.12);
  animation: ${rj} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,aj=b.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,ij=b.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,sj=b.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,lj=b.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function qd({title:t,children:a,ariaLabel:i}){return r.jsxs(oj,{role:"dialog","aria-modal":"true","aria-label":i??t,children:[r.jsx(aj,{children:r.jsx(ij,{"aria-hidden":"true"})}),t&&r.jsx(sj,{children:t}),r.jsx(lj,{children:a})]})}const Zs=b.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,Ga=b.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,Gr=b.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: var(--space-3, 12px) var(--space-5, 20px);
  padding-left: ${t=>t.$indent?"calc(var(--space-5, 20px) + 24px)":"var(--space-5, 20px)"};
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  line-height: 1.3;
  color: var(--color-content-primary, #151515);
  cursor: pointer;
  min-height: 44px;
  box-sizing: border-box;

  font-weight: ${t=>t.$active?600:400};
  background: ${t=>t.$active?"var(--color-bg-secondary, #f6f7f9)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: -2px;
  }
`,Oo=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,Yr=b.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Zr=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function cj({activeId:t,groups:a,onSelect:i}){return r.jsx(qd,{title:"Modules",ariaLabel:"Choose a module",children:r.jsx(Zs,{children:a.map((l,c)=>r.jsxs("div",{children:[c>0&&r.jsx(Ga,{children:l.label}),c===0&&r.jsx(Ga,{children:l.label}),l.items.map(u=>{const p=u.id===t;return r.jsxs(Gr,{$active:p,onClick:()=>i(u.id),"aria-pressed":p,children:[r.jsx(Oo,{children:u.icon}),r.jsx(Yr,{children:u.label}),p&&r.jsx(Zr,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},u.id)})]},l.id))})})}function dj({moduleLabel:t,entries:a,onSelect:i}){return r.jsx(qd,{title:t,ariaLabel:`${t} sections`,children:r.jsx(Zs,{children:a.map(l=>{if(l.type==="single"){const u=l.item;return r.jsxs(Gr,{$active:u.isActive,onClick:()=>{var p;(p=u.onClick)==null||p.call(u),i()},"aria-pressed":!!u.isActive,children:[r.jsx(Oo,{children:u.icon}),r.jsx(Yr,{children:u.label}),u.isActive&&r.jsx(Zr,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},u.id)}if(l.type!=="group")return null;const c=l.group;return r.jsxs("div",{children:[r.jsx(Ga,{children:c.label}),c.children.map(u=>r.jsxs(Gr,{$active:u.isActive,$indent:!0,onClick:()=>{var p;(p=u.onClick)==null||p.call(u),i()},"aria-pressed":!!u.isActive,children:[r.jsx(Oo,{children:u.icon}),r.jsx(Yr,{children:u.label}),u.isActive&&r.jsx(Zr,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},u.id))]},c.id)})})})}const uj=b.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,hj=b.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,pj=b.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function fj({personas:t,activeId:a,onSelect:i}){return r.jsx(qd,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(Zs,{children:t.map(l=>{const c=l.id===a;return r.jsxs(Gr,{$active:c,onClick:()=>i(l.id),"aria-pressed":c,children:[r.jsx(Yr,{as:"span",children:r.jsxs(uj,{children:[r.jsx(hj,{children:l.name}),r.jsx(pj,{children:l.role})]})}),c&&r.jsx(Zr,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},l.id)})})})}const mj=Oe`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,gj=b.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 84vw;
  max-width: 360px;
  z-index: 901;
  background: var(--color-bg-primary, #ffffff);
  display: flex;
  flex-direction: column;
  box-shadow: 8px 0 24px rgba(0, 0, 0, 0.12);
  animation: ${mj} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,vj=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,yj=b.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,xj=b.button`
  all: unset;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  color: var(--color-content-secondary, #475569);
  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
`,wj=b.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,_j=60;function bj({title:t,onDismiss:a,children:i}){const l=g.useRef(null),c=g.useRef(null);return g.useEffect(()=>{const u=l.current;if(!u)return;const p=m=>{const x=m.touches[0];c.current={x:x.clientX,y:x.clientY}},f=m=>{if(!c.current)return;const x=m.changedTouches[0],y=x.clientX-c.current.x,_=x.clientY-c.current.y;c.current=null,y<-60&&Math.abs(_)<_j&&a()};return u.addEventListener("touchstart",p,{passive:!0}),u.addEventListener("touchend",f),()=>{u.removeEventListener("touchstart",p),u.removeEventListener("touchend",f)}},[a]),r.jsxs(gj,{ref:l,role:"dialog","aria-modal":"true","aria-label":t??"Navigation",children:[r.jsxs(vj,{children:[r.jsx(yj,{children:t??"Navigation"}),r.jsx(xj,{onClick:a,"aria-label":"Close navigation",children:r.jsx(Ka,{size:18})})]}),r.jsx(wj,{children:i})]})}function kj({activeId:t,groups:a,currentMenuEntries:i,onSelectModule:l,onDismiss:c}){return r.jsx(bj,{title:"Navigation",onDismiss:c,children:r.jsx(Zs,{children:a.map(u=>r.jsxs("div",{children:[r.jsx(Ga,{children:u.label}),u.items.map(p=>{const f=p.id===t;return r.jsxs("div",{children:[r.jsxs(Gr,{$active:f,onClick:()=>{l(p.id),c()},"aria-pressed":f,children:[r.jsx(Oo,{children:p.icon}),r.jsx(Yr,{children:p.label}),f&&r.jsx(Zr,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]}),f&&i.length>0&&r.jsx("div",{children:i.map(m=>{if(m.type==="single"){const y=m.item;return r.jsxs(Gr,{$active:y.isActive,$indent:!0,onClick:()=>{var _;(_=y.onClick)==null||_.call(y),c()},"aria-pressed":!!y.isActive,children:[r.jsx(Oo,{children:y.icon}),r.jsx(Yr,{children:y.label}),y.isActive&&r.jsx(Zr,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},y.id)}if(m.type!=="group")return null;const x=m.group;return r.jsxs("div",{children:[r.jsx(Ga,{children:x.label}),x.children.map(y=>r.jsxs(Gr,{$active:y.isActive,$indent:!0,onClick:()=>{var _;(_=y.onClick)==null||_.call(y),c()},"aria-pressed":!!y.isActive,children:[r.jsx(Oo,{children:y.icon}),r.jsx(Yr,{children:y.label}),y.isActive&&r.jsx(Zr,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})})]},y.id))]},x.id)})})]},p.id)})]},u.id))})})}const I1=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],Cj=b.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,jj=b.main`
  flex: 1 1 auto;
  min-width: 0;
`;function Sj(t){const{activeId:a,selectedPersonaId:i,moduleGroups:l,primaryLabel:c,secondaryLabel:u,menuEntries:p,user:f,onUserClick:m,onMobileNavigate:x,onSelectPersona:y,children:_}=t,[w,S]=g.useState(null),j=qC({deadZonePx:8,topThresholdPx:20}),N=w===null&&j==="down",R=g.useMemo(()=>{if(!i)return null;const A=I1.find($=>$.id===i);return(A==null?void 0:A.name)??null},[i]),T=()=>S(null),L=A=>S(A),C=w!==null;return r.jsxs(Cj,{children:[r.jsx(JC,{primaryLabel:c,secondaryLabel:u,tertiaryLabel:R,openOverlay:w,user:f,hidden:N,onHamburgerClick:()=>L("drawer"),onPrimaryClick:()=>L("primary"),onSecondaryClick:()=>L("secondary"),onTertiaryClick:R?()=>L("persona"):void 0,onSearchClick:()=>{L("drawer")},onUserClick:()=>m==null?void 0:m()}),r.jsx(jj,{children:_}),C&&r.jsx(nj,{onDismiss:T}),w==="primary"&&r.jsx(cj,{activeId:a,groups:l,onSelect:A=>{x(A),T()}}),w==="secondary"&&r.jsx(dj,{moduleLabel:c,entries:p,onSelect:T}),w==="persona"&&r.jsx(fj,{personas:I1,activeId:i,onSelect:A=>{y(A),T()}}),w==="drawer"&&r.jsx(kj,{activeId:a,groups:l,currentMenuEntries:p,onSelectModule:A=>x(A),onDismiss:T})]})}function Nj(t){if(Tk()&&t.mobileNav){const i=t.mobileNav;return r.jsx(Sj,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:t.menuEntries??[],user:t.user,onUserClick:t.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:t.children})}return r.jsx(HC,{...t})}const Rj="/Ultron/assets/policy-icon-active-CqCS8_ex.svg",Lj="/Ultron/assets/automation-icon-active-DlguOjgR.svg",Zn=(t,a,i)=>Math.max(a,Math.min(i,t)),Ud=t=>(t=Zn(t,0,1),t*t*(3-2*t)),Go=t=>t>=48?1:t>=32?1.2:t>=24?1.5:t>=20?1.85:2.3;function Rn(t){const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)}function bd(t){const a=(t||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(l=>l+l).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function T1(t,a,i){let l=i.trim();const c=l.match(/var\(\s*(--[^,)]+)/);if(c&&(l=getComputedStyle(a).getPropertyValue(c[1]).trim()||l),l.startsWith("#"))return bd(l);t.fillStyle="#000",t.fillStyle=l;const u=t.fillStyle;if(u.startsWith("#"))return bd(u);const p=u.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:"26,30,38"}function Mj(){const[t,a]=g.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return g.useEffect(()=>{var c;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const l=u=>a(u.matches);return(c=i.addEventListener)==null||c.call(i,"change",l),()=>{var u;return(u=i.removeEventListener)==null?void 0:u.call(i,"change",l)}},[]),t}function $j(t){const[a,i,l]=t.split(",").map(Number);return(.299*a+.587*i+.114*l)/255}function Ij(t,a){return t==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:t==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:t==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const Wr=["234,54,38","246,112,44","252,172,54","255,212,76"],Tj="176,58,32",Aj="198,158,52";function Vn(t,a,i){const l=t.split(",").map(Number),c=a.split(",").map(Number);return l.map((u,p)=>Math.round(u+(c[p]-u)*i)).join(",")}function Jr(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,x=Math.min(c,u)*.39*.2*(.9+.14*Math.sin(a*1.5)),y=t.size<24,_=Zn(t.alert??0,0,1),w=(L,C)=>L+(C-L)*_,S=.85+.15*Math.sin(a*2.2);if(!y&&t.coreHalo){if(l.save(),i.glow&&_<1){l.globalAlpha=1-_;const L=l.createRadialGradient(p,f,0,p,f,x*3);L.addColorStop(0,"rgba("+i.core+",0.55)"),L.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=L,l.beginPath(),l.arc(p,f,x*3,0,6.2832),l.fill()}else if(!i.glow){const L=x*w(3.2,3),C=l.createRadialGradient(p,f,0,p,f,L);C.addColorStop(0,"rgba("+Vn(i.core,Wr[1],_)+","+w(.34,.85*S)+")"),C.addColorStop(.5,"rgba("+Vn(i.core,Wr[2],_)+","+w(.13,.42*S)+")"),C.addColorStop(1,"rgba("+Vn(i.core,Wr[3],_)+",0)"),l.fillStyle=C,l.beginPath(),l.arc(p,f,L,0,6.2832),l.fill()}l.restore()}const j=i.glow?1:.95,N=Math.max(.8,x*w(1,1.5)),R=x*.1*_;l.save(),l.filter="blur("+Math.max(.4,x*w(.22,.3)).toFixed(2)+"px)";const T=l.createRadialGradient(p-R,f-R,0,p,f,N);T.addColorStop(0,"rgba("+Vn(i.core,Wr[0],_)+","+w(j,1)+")"),T.addColorStop(.5,"rgba("+Vn(i.core,Wr[1],_)+","+w(j,1)+")"),T.addColorStop(.82,"rgba("+Vn(i.core,Wr[2],_)+","+w(j,.97)+")"),T.addColorStop(1,"rgba("+Vn(i.core,Wr[3],_)+","+w(j,.72)+")"),l.fillStyle=T,l.beginPath(),l.arc(p,f,N,0,6.2832),l.fill(),l.restore()}function Jm(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",y=[[1.35,.3],[1.05,2.4]],_=a*(x?.5:.16),w=.42,S=Math.cos(w),j=Math.sin(w),N=Math.cos(_),R=Math.sin(_),T=m*.96,L=(G,K,ee)=>{const V=G*N+ee*R,J=-G*R+ee*N,ae=K,se=ae*S-J*j,Z=(ae*j+J*S+1)/2,H=.82+.18*Z;return{x:p+V*T*H,y:f+se*T*H,d:Z}},C=(G,K,ee)=>{const V=Math.cos(G),J=Math.sin(G)*Math.cos(K),ae=Math.sin(G)*Math.sin(K);return[V*Math.cos(ee)+ae*Math.sin(ee),J,-V*Math.sin(ee)+ae*Math.cos(ee)]};l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round",l.lineJoin="round";const A=t.size>=24?64:40,$=x?.9:.3,F=A,P=5.6,B=[];for(let G=0;G<y.length;G++){const K=y[G][0],ee=y[G][1],V=se=>{const ce=C(se,K,ee);return L(ce[0],ce[1],ce[2])},J=G%2?1:-1,ae=G*2+J*a*$;B.push({ptOf:V,head:ae,dir:J,hp:V(ae)})}B.sort((G,K)=>G.hp.d-K.hp.d);for(const G of B){const K=Math.max(1.2,m*.05)*(.75+.35*G.hp.d),ee=.66*(.45+.55*G.hp.d);l.save(),l.globalCompositeOperation="source-over",l.lineCap="butt",l.lineWidth=K;let V=G.ptOf(G.head);for(let se=1;se<=F;se++){const ce=se/F,Z=1-ce,H=ee*Z*Z,z=G.ptOf(G.head-G.dir*ce*P);H>.004&&(l.strokeStyle="rgba("+i.dot+","+H+")",l.beginPath(),l.moveTo(V.x,V.y),l.lineTo(z.x,z.y),l.stroke()),V=z}l.restore();const J=Math.max(.9,m*.062*Go(t.size)*(.65+.5*G.hp.d)),ae=.45+.55*G.hp.d;if(i.glow){const se=l.createRadialGradient(G.hp.x,G.hp.y,0,G.hp.x,G.hp.y,J*4.5);se.addColorStop(0,"rgba("+i.accent+","+.3*ae+")"),se.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=se,l.beginPath(),l.arc(G.hp.x,G.hp.y,J*4.5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,ae+.1)+")",l.beginPath(),l.arc(G.hp.x,G.hp.y,J,0,6.2832),l.fill()}Jr(t,a,i),l.restore()}function Ej(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",y=[m*.92],_=y.length,w=1,S=x?.9:.3,j=t.size>=24?56:36;l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over";for(let N=0;N<_;N++){const R=y[N],T=N%2?1:-1,L=6.2832/w,C=Math.min(5.6,L*.92);for(let A=0;A<w;A++){const $=N*2+T*a*S+A*L,F=p+Math.cos($)*R,P=f+Math.sin($)*R;l.save(),l.globalCompositeOperation="source-over",l.lineCap="butt",l.lineWidth=Math.max(1.2,m*.05);let B=F,G=P;for(let ee=1;ee<=j;ee++){const V=ee/j,J=.62*(1-V)*(1-V),ae=$-T*V*C,se=p+Math.cos(ae)*R,ce=f+Math.sin(ae)*R;J>.004&&(l.strokeStyle="rgba("+i.dot+","+J+")",l.beginPath(),l.moveTo(B,G),l.lineTo(se,ce),l.stroke()),B=se,G=ce}l.restore();const K=Math.max(.9,m*.062*Go(t.size));if(i.glow){const ee=l.createRadialGradient(F,P,0,F,P,K*4.5);ee.addColorStop(0,"rgba("+i.accent+",0.3)"),ee.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=ee,l.beginPath(),l.arc(F,P,K*4.5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+",1)",l.beginPath(),l.arc(F,P,K,0,6.2832),l.fill()}}Jr(t,a,i),l.restore()}function A1(t,a,i){const{ctx:l,w:c,h:u,dpr:p}=t,f=c/2,m=u/2,x=Math.min(c,u)*.39,y=t.state!=="idle",_=Zn(t.alert??0,0,1),w=x*.82,S=(Z,H)=>Vn(i.dot,Vn(Tj,Aj,Zn(Math.hypot(Z-f,H-m)/w,0,1)),_),j=t.size>=120,N=j?22:t.size>=32?10:t.size>=20?7:5,R=y?a*.55:a*.22,T=Math.cos(R),L=Math.sin(R),C=.42,A=Math.cos(C),$=Math.sin(C);if(l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",j&&i.glow){const Z=l.createRadialGradient(f,m,0,f,m,x*1.02);Z.addColorStop(0,"rgba("+i.accent+",0.10)"),Z.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=Z,l.beginPath(),l.arc(f,m,x*1.02,0,6.2832),l.fill()}const F=[];for(let Z=0;Z<N;Z++){const H=1-(Z+.5)/N*2,z=Math.sqrt(Math.max(0,1-H*H)),D=Z*2.39996,k=Math.cos(D)*z,I=H,Q=Math.sin(D)*z,ne=k*T+Q*L,E=-k*L+Q*T,X=I*A-E*$,de=I*$+E*A,he=(de+1)/2,ge=.82+.18*he;F.push({x:f+ne*w*ge,y:m+X*w*ge,d:he,k:Z,vec:[ne,X,de]})}F.sort((Z,H)=>Z.d-H.d);const P=Z=>{const H=(Z[2]+1)/2,z=.82+.18*H;return{x:f+Z[0]*w*z,y:m+Z[1]*w*z,d:H}},B=(Z,H,z)=>{let D=Z[0]*H[0]+Z[1]*H[1]+Z[2]*H[2];D=Zn(D,-1,1);const k=Math.acos(D);if(k<.001)return[Z[0],Z[1],Z[2]];const I=Math.sin(k),Q=Math.sin((1-z)*k)/I,ne=Math.sin(z*k)/I;return[Z[0]*Q+H[0]*ne,Z[1]*Q+H[1]*ne,Z[2]*Q+H[2]*ne]},G={};for(const Z of F)G[Z.k]=Z;const ee=a*(y?1.4:.5),V=Math.floor(ee),J=ee-V,ae=5,se=12;l.lineCap="round",l.lineJoin="round";const ce=j?[{seed:1.7},{seed:9.3},{seed:21.5},{seed:34.8},{seed:48.2}]:[{seed:1.7},{seed:9.3},{seed:21.5},{seed:34.8}];for(const Z of ce){const H=D=>{const k=Math.sin(D*12.9898+Z.seed)*43758.5453;return Math.floor((k-Math.floor(k))*N)},z=D=>{let k=H(D);return k===H(D-1)&&(k=(k+1)%N),G[k]};for(let D=ae-1;D>=0;D--){const k=V-D;if(k<0)continue;const I=z(k),Q=z(k+1);if(!I||!Q||I===Q)continue;const ne=D===0?J:1,E=P(B(I.vec,Q.vec,ne)),X=(I.d+E.d)/2,de=D===0?1:Zn(1-(D-1+J)/(ae-1),0,1),he=(i.glow?.6:.72)*de*(.4+.6*X);if(he<.02)continue;const ge=l.createLinearGradient(I.x,I.y,E.x,E.y);ge.addColorStop(0,"rgba("+S(I.x,I.y)+",0)"),ge.addColorStop(1,"rgba("+S(E.x,E.y)+","+he+")"),l.strokeStyle=ge,l.lineWidth=(j?Math.max(1.1*p,x*.018):Math.max(1.2,x*.045))*(.7+.4*X),l.beginPath();for(let be=0;be<=se;be++){const ue=P(B(I.vec,Q.vec,ne*(be/se)));be===0?l.moveTo(ue.x,ue.y):l.lineTo(ue.x,ue.y)}l.stroke()}}for(const Z of F){const H=.5+.5*Math.sin(a*2-Z.k*.9),z=(.18+.82*Z.d)*(.62+.38*H),D=j?Math.max(.5,(.9+.9*Z.d)*p*(.85+.15*H)):x*.058*Go(t.size)*(.6+.5*Z.d);if(i.glow){const k=D*4,I=l.createRadialGradient(Z.x,Z.y,0,Z.x,Z.y,k);I.addColorStop(0,"rgba("+i.accent+","+.24*z+")"),I.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=I,l.beginPath(),l.arc(Z.x,Z.y,k,0,6.2832),l.fill()}l.fillStyle="rgba("+S(Z.x,Z.y)+","+(.32+.68*z)+")",l.beginPath(),l.arc(Z.x,Z.y,Math.max(.9,D),0,6.2832),l.fill()}if(j){const Z=y?1:.4;for(let H=0;H<46;H++){const z=Rn(H*5.1)<.5?-1:1,D=Rn(H*1.7)*6.2832+a*(.3+Rn(H*3.1)*.6)*z*Z,k=x*(.04+.05*Rn(H*4.7))*Math.sin(a*(.8+Rn(H*6)*1)+Rn(H*7)*6.28),I=x*(.5+Rn(H*2.3)*.5)+k,Q=f+Math.cos(D)*I,ne=m+Math.sin(D)*I,E=.3+.7*(.5+.5*Math.sin(a*(1.4+Rn(H)*2)+Rn(H*2)*6.28)),X=Math.max(.5,(.4+Rn(H*8)*1)*p*(.55+.6*E));if(i.glow){const de=X*6,he=l.createRadialGradient(Q,ne,0,Q,ne,de);he.addColorStop(0,"rgba("+i.accent+","+E*.18+")"),he.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=he,l.beginPath(),l.arc(Q,ne,de,0,6.2832),l.fill()}l.fillStyle="rgba("+S(Q,ne)+","+E*(i.glow?.8:.42)+")",l.beginPath(),l.arc(Q,ne,X,0,6.2832),l.fill()}}Jr(t,a,i),l.restore()}function Pj(t,a,i){const{ctx:l,w:c,h:u,dpr:p}=t,f=c/2,m=u/2,x=Math.min(c,u)*.39,y=t.state!=="idle",_=t.size>=32?11:7,w=x*.12,S=x*.12,j=Ud(.5+.5*Math.sin(a*(y?1:.55))),N=y?.34+.66*j:.5+.12*j,R=Math.max(1*p,x*.052),T=-a*(y?.5:.16),L=Math.cos(T),C=Math.sin(T),A=.42,$=Math.cos(A),F=Math.sin(A);l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const P=x*(.52+.44*N),B=Math.max(w+R,P-S),G=[];for(let K=0;K<_;K++){const ee=1-(K+.5)/_*2,V=Math.sqrt(Math.max(0,1-ee*ee)),J=K*2.39996,ae=Math.cos(J)*V,se=ee,ce=Math.sin(J)*V,Z=ae*L+ce*C,H=-ae*C+ce*L,z=se*$-H*F,k=(se*F+H*$+1)/2,I=.82+.18*k,Q=.5+.5*Math.sin(a*1.6+K*1.3);G.push({x0:f+Z*w*I,y0:m+z*w*I,x1:f+Z*B*I,y1:m+z*B*I,cx2:f+Z*P*I,cy2:m+z*P*I,d:k,shim:Q})}G.sort((K,ee)=>K.d-ee.d);for(const K of G){const ee=(y?.4+.45*N:.6)*(.4+.6*K.d)*(.78+.22*K.shim),V=l.createLinearGradient(K.x0,K.y0,K.x1,K.y1);V.addColorStop(0,"rgba("+i.dot+","+ee+")"),V.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=V,l.lineWidth=R*(.7+.5*K.d),l.beginPath(),l.moveTo(K.x0,K.y0),l.lineTo(K.x1,K.y1),l.stroke();const J=Math.max(.9,x*.058*Go(t.size)*(.85+.3*N)*(.6+.5*K.d));if(i.glow){const ae=l.createRadialGradient(K.cx2,K.cy2,0,K.cx2,K.cy2,J*5);ae.addColorStop(0,"rgba("+i.accent+","+.26*ee+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=ae,l.beginPath(),l.arc(K.cx2,K.cy2,J*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,ee+.1)+")",l.beginPath(),l.arc(K.cx2,K.cy2,J,0,6.2832),l.fill()}Jr(t,a,i),l.restore()}function zj(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",y=t.size>=32?58:t.size>=20?32:18,_=m*.78,w=x?a*.5:a*.2,S=Math.cos(w),j=Math.sin(w),N=.42,R=Math.cos(N),T=Math.sin(N),L=x?1:.4,C=(P,B)=>[Math.sin(P)*Math.cos(B),Math.cos(P),Math.sin(P)*Math.sin(B)],A=[C(1.4+.5*Math.sin(a*.5*L),a*.6*L),C(1.9+.4*Math.cos(a*.4*L),-a*.5*L+2)],$=.36;l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over";const F=[];for(let P=0;P<y;P++){const B=1-(P+.5)/y*2,G=Math.sqrt(Math.max(0,1-B*B)),K=P*2.39996,ee=Math.cos(K)*G,V=B,J=Math.sin(K)*G;let ae=0;for(const k of A){const I=ee-k[0],Q=V-k[1],ne=J-k[2];ae+=Math.exp(-(I*I+Q*Q+ne*ne)/(2*$*$))}ae=Zn(ae,0,1);const se=ee*S+J*j,ce=-ee*j+J*S,Z=V*R-ce*T,z=(V*T+ce*R+1)/2,D=.82+.18*z;F.push({x:p+se*_*D,y:f+Z*_*D,d:z,inf:ae})}F.sort((P,B)=>P.d-B.d);for(const P of F){const B=Ud(P.inf),G=Math.max(.6,m*(.05+.06*B)*Go(t.size)*(.55+.5*P.d)),K=(.16+.84*P.d)*(.45+.55*B),ee=Math.abs(2*P.d-1),V=Math.atan2(P.y-f,P.x-p);l.fillStyle="rgba("+i.dot+","+K+")",l.beginPath(),l.ellipse(P.x,P.y,Math.max(.35,G*ee),G,V,0,6.2832),l.fill()}Jr(t,a,i),l.restore()}function Oj(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",y=t.size>=32?8:t.size>=20?6:5,_=m*.9,w=x?1:.4,S=a*(x?.3:.12),j=a*1*w,N=-a*.7*w+2.2,R=.72,T=(L,C)=>{const A=((L-C+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(A)};l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over";for(let L=0;L<y;L++){const C=L/y*6.2832+S;let A=Math.exp(-(T(C,j)**2)/(2*R*R))+Math.exp(-(T(C,N)**2)/(2*R*R));A=Zn(A,0,1);const $=Ud(A),F=p+Math.cos(C)*_,P=f+Math.sin(C)*_,B=Math.max(.6,m*(.05+.07*$)*Go(t.size)),G=.38+.62*$;if(i.glow&&$>.25){const K=l.createRadialGradient(F,P,0,F,P,B*4);K.addColorStop(0,"rgba("+i.accent+","+.24*$+")"),K.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=K,l.beginPath(),l.arc(F,P,B*4,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+G+")",l.beginPath(),l.arc(F,P,B,0,6.2832),l.fill()}Jr(t,a,i),l.restore()}function Dj(t,a,i){Jr(t,a,i)}const Bj={orbit:Jm,orbit2d:Ej,circle:A1,lines:Pj,magnetic:zj,magnetic2d:Oj,pulse:Dj,bands:A1};function Mt({mark:t="orbit",size:a=16,tone:i="auto",state:l="active",motionSpeed:c=1,accent:u="#96B9FF",color:p,coreHalo:f=!0,coreGradient:m=!1,className:x,"aria-label":y}){const _=g.useRef(null),w=Mj(),S=g.useRef(0),j=g.useRef(0);return j.current=m?1:0,g.useEffect(()=>{const N=_.current;if(!N)return;const R=N.getContext("2d");if(!R)return;const T=Math.min(2,window.devicePixelRatio||1),L=Math.max(2,Math.round(a*T)),C=L;N.width=L,N.height=C;const A={ctx:R,w:L,h:C,dpr:T,size:a,state:l,coreHalo:f,alert:S.current},$=i==="auto"?$j(T1(R,N,"var(--color-bg-primary)"))<.5?"dark":"light":i,F=Ij($,bd(u));if(p){const J=T1(R,N,p);F.dot=J,F.core=J}const P=Bj[t]??Jm,B=J=>{S.current+=(j.current-S.current)*.06,Math.abs(S.current-j.current)<.001&&(S.current=j.current),A.alert=S.current,R.clearRect(0,0,L,C),P(A,l==="static"?.62:J,F)},G=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),K=Zn(c,.4,3);if((G||l==="static")&&(S.current=j.current),B(1.15),G||l==="static")return;let ee=0;const V=J=>{B(J/1e3*K),ee=requestAnimationFrame(V)};return ee=requestAnimationFrame(V),()=>cancelAnimationFrame(ee)},[t,a,i,l,c,u,p,f,m,w]),r.jsx("canvas",{ref:_,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:x,role:"img","aria-label":y})}const Ns={high:0,medium:1,low:2,none:3};b.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function Vd(t){return t.status==="resolved"||t.status==="auto_resolved"||t.status==="workflow_available"?"green":t.status==="analyzing"?"slate":t.status==="in_progress"||t.status==="monitoring"?"blue":t.severity==="high"?"orange":"slate"}b.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function Fj(t,a){if(a)return"Ultron is replying…";switch(t){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const e0=t=>t.status==="workflow_available"||t.status==="resolved"&&t.workflowOpportunity!=null,t0=t=>/^(review|adjust|revisit|update)\b/i.test(t),Wj=["Revisit","Update","Resolve"],Hj=t=>/,|\sand\s/.test(t),qj="Approve all",Ao="Yes",n0=t=>{const i=t.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(l=>l.trim()).filter(Boolean);return i.length<2?[]:i.map(l=>l.charAt(0).toUpperCase()+l.slice(1))};b.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;b.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;const od=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],kd={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},Uj={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function Vj(t){const a=Uj[t];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function Gj(t){const a=kd[t.id];if(!a||t.title.startsWith(a))return t.title;const i=t.title.split(" ")[0]??"",c=i===i.toUpperCase()?t.title:t.title.charAt(0).toLowerCase()+t.title.slice(1);return`${a} ${c}`}const r0={missed_clockin_james:"james_okoro_2"},o0=t=>`https://i.pravatar.cc/80?u=${r0[t]??t}`,Yo=t=>`https://i.pravatar.cc/80?u=${r0[t]??t}`,Yj={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},Zj=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],a0=t=>Yj[t]??Zj,i0={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},E1={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reached 9/20 matched RNs…","Reached 16/20 matched RNs…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reached 5/8 qualified workers…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Gd={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},Kj={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Yd={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},Qj={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},Xj={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},ad={detected:t=>t.event,assessment:t=>t.assessment,recommendation:t=>t.recommendation,approval:t=>t.recommendation,execution:t=>t.recommendation,resolution:t=>t.outcome??t.recommendation,monitoring:t=>t.assessment,workflow:t=>t.workflowOpportunity??t.recommendation};function s0(t){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return Qj[t.id]??t.timeline.map(i=>{var u;const l=((u=ad[i.state])==null?void 0:u.call(ad,t))??t.assessment,c=l!=null&&a(l)===a(i.headline);return{icon:Xj[i.state]??"clock",headline:i.headline,blocks:l&&!c?[{text:l}]:void 0}})}const xt=(t,a,i)=>({name:t,match:a,distance:i}),Pe=(t,a,i,l,c)=>({seed:t,name:a,preview:i,status:l,tone:c}),P1=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],Jj=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],eS=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],tS=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],nS={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:P1,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[xt("Jordan Pierce","4.9 match","3.2 mi"),xt("Aisha Karim","4.7 match","5.1 mi"),xt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:"An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",total:20,threads:[Pe("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive"),Pe("jordan_pierce","Jordan Pierce","Delivered · no reply yet","Delivered","muted"),Pe("marcus_lewis","Marcus Lewis","Delivered · no reply yet","Delivered","muted")]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:Jj,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[xt("Renee Wallace","4.9 match","2.4 mi"),xt("Carl Jensen","4.6 match","4.1 mi"),xt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Pe("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Pe("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Pe("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:eS,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[xt("Dane Mercer","4.8 match","2.1 mi"),xt("Omar Reyes","4.6 match","3.7 mi"),xt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Pe("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Pe("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Pe("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:tS,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[xt("Jamal Carter","4.7 match","1.8 mi"),xt("Sara Lindqvist","4.6 match","2.9 mi"),xt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Pe("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Pe("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Pe("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[xt("Theo Park","4.7 match","1.9 mi"),xt("Gina Holt","4.5 match","3.3 mi"),xt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Pe("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Pe("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Pe("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Pe("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[xt("Carl Jensen","4.7 match","2.6 mi"),xt("Tina Boyd","4.5 match","3.9 mi"),xt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Pe("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Pe("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Pe("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Pe("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Pe("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Pe("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Pe("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Pe("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Pe("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Pe("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Pe("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Pe("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Pe("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Pe("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:P1,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Pe("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Pe("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},rS={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},oS=t=>/in-app/i.test(t)?"in_app":/sms/i.test(t)?"sms":"auto",aS={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Cd=t=>{const[a,...i]=t.split(" "),l=aS[a];return l?`Will ${l} ${i.join(" ")}`:t};function iS(t,a){if(t==="policy"&&a.policy){const c=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:c?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${c.total} ${c.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${oS(i.name)}", template="shift_offer", to=matched)`,summary:`${Cd(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const l=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0;return l?{query:`engage.notify(to="${l.name}", via="${l.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Cd(l.description)} (${l.name} · ${l.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function sS(t,a,i){var w;if(t==="match"||t==="credential"||t==="incentive"){const S=(w=a.policy)==null?void 0:w.eligible;if(!S)return null;const j=S.unit.replace(/^eligible\s+/i,"");return t==="match"?{icon:"search",name:"Match Engine",description:`Ranked qualified ${j} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${S.total} ${S.unit}.`}:t==="credential"?{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."}:{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${S.total}) → suggestion`,summary:"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached."}}if(t==="update"||t==="update-close"){const S=t==="update"?a.update:a.updateClose;if(!S)return null;const{description:j,...N}=S;return{icon:"record",name:"Update Data",description:j,updateData:N}}const l=t==="notify"||t==="notify-scheduler",c=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0,u=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(!(t==="policy"&&a.policy||!!u||!!c))return null;const f=t==="policy"?"Policy Engine":l?"Engage: Notification":u.name,m=t==="policy"?a.policy.description:l?c.description:u.description,x=t==="policy"?"shield":l?"bell":"message";if(i==="planning"){const S=t==="policy"?m:Cd(m),j={icon:x,name:f,description:S,...iS(t,a)};return l?{...j,message:c.message}:u?{...j,message:u.message}:j}if(t==="policy")return{icon:x,name:f,description:m,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(u)return{icon:x,name:f,description:m,message:u.message,threads:{total:u.total,moreNoun:"threads",items:u.threads}};const{description:y,..._}=c;return{icon:x,name:f,description:m,notification:_}}function l0(t,a,i="execution"){const l=nS[t];return l?a.map(c=>sS(c,l,i)).filter(c=>c!==null):[]}const lS=t=>t.tools??rS[t.icon]??["policy"],gs=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function cS(t){return{id:`detected_${t.id}`,name:t.name,title:t.title,capability:t.capability,status:"analyzing",severity:t.severity??"high",event:t.title.endsWith(".")?t.title:`${t.title}.`,assessment:t.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:t.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:t.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const c0={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},z1=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function dS(t,a){return z1[a%z1.length]}function uS(t){return t===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function hS(t){return t>=90?"green":t>=80?"blue":t>=70?"orange":"slate"}function d0({record:t}){const a=t.meta.find(c=>/^\d+%\s*match$/i.test(c)),i=a?parseInt(a,10):null,l=a?t.meta.filter(c=>c!==a):t.meta;return r.jsxs(pS,{children:[r.jsx(In,{size:"md",src:o0(t.avatarSeed),name:t.title,alt:t.title}),r.jsxs(fS,{children:[r.jsx(mS,{children:t.title}),r.jsx(gS,{children:[t.eyebrow,...l].join(" · ")})]}),i!=null&&r.jsxs(vS,{"data-tone":hS(i),children:[i,"% match"]}),r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(Ad,{size:16})})]})}const pS=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,fS=b.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,mS=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,gS=b.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,vS=b.span`
  flex-shrink: 0;
  /* 2px keeps the pill tight vertically; Alloy has no 2px space token, but the
     4px grid still governs the horizontal padding. */
  padding: 2px var(--space-2);
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  white-space: nowrap;

  &[data-tone='green']  { background: var(--color-green-bg-tertiary);  border-color: var(--color-green-border-tertiary);  color: var(--color-green-content-primary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-tertiary);   border-color: var(--color-blue-border-tertiary);   color: var(--color-blue-content-primary); }
  &[data-tone='orange'] { background: var(--color-orange-bg-tertiary); border-color: var(--color-orange-border-tertiary); color: var(--color-orange-content-primary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-tertiary);  border-color: var(--color-slate-border-tertiary);  color: var(--color-slate-content-primary); }
`,O1=t=>t.id.startsWith("detected_"),D1=5400,B1=1100;function yS(t,a){switch(a.type){case"detect":return t.some(i=>i.id===a.thread.id)?t:[a.thread,...t];case"decide":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return t.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return t.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:c0[i.id]??i.outcome}:i)}}const xS=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function wS(){const[t,a]=g.useReducer(yS,od),[i,l]=g.useState(()=>{var D;const z=od.find(k=>k.status==="needs_approval"||k.status==="recommended");return(z==null?void 0:z.id)??((D=od[0])==null?void 0:D.id)??null}),[c,u]=g.useState([]),p=z=>{l(z),u(D=>D.includes(z)?D:[...D,z])},f=g.useMemo(()=>{const z=t.map((D,k)=>({item:D,index:k}));return xS.map(D=>({id:D.id,label:D.label,threads:z.filter(k=>D.statuses.includes(k.item.status)).sort((k,I)=>(k.item.status==="analyzing"?1:0)-(I.item.status==="analyzing"?1:0)||(O1(I.item)?1:0)-(O1(k.item)?1:0)||Ns[k.item.severity]-Ns[I.item.severity]||k.index-I.index).map(k=>k.item)}))},[t]),m=t.find(z=>z.id===i)??null,[x,y]=g.useState({}),_=i?x[i]??0:0,[w,S]=g.useState([]),[j,N]=g.useState({}),[R,T]=g.useState({}),[L,C]=g.useState([]),A=g.useRef({}),[$,F]=g.useState([]),P=z=>{F(D=>D.includes(z)?D.filter(k=>k!==z):[...D,z])},[B,G]=g.useState([]),K=z=>{G(D=>D.includes(z)?D:[...D,z])};return{threads:t,groups:f,selectedId:i,selectedThread:m,selectedStage:_,stageById:x,viewedIds:c,analyzedIds:w,outboundByThread:j,chatByThread:R,replyingIds:L,setSelectedId:p,detectRisk:z=>{a({type:"detect",thread:cS(z)})},decide:z=>{p(z),S(D=>D.includes(z)?D:[...D,z]),a({type:"decide",threadId:z})},commit:(z,D)=>{p(z),N(k=>({...k,[z]:[...k[z]??[],D]})),a({type:"commit",threadId:z})},completeRun:z=>{const D=x[z]??0,k=Gd[z];D===0&&k?(y(I=>({...I,[z]:1})),a({type:"reopen",threadId:z})):(a({type:"resolve",threadId:z}),$.includes(z)&&(K(z),F(I=>I.filter(Q=>Q!==z))))},sendMessage:(z,D)=>{const k=D.trim();if(!k)return;p(z),T(Q=>({...Q,[z]:[...Q[z]??[],{role:"operator",text:k}]})),C(Q=>Q.includes(z)?Q:[...Q,z]);const I=window.setTimeout(()=>{T(Q=>{const ne=Q[z]??[],E=ne.filter(X=>X.role==="ultron").length;return{...Q,[z]:[...ne,{role:"ultron",text:dS(k,E)}]}}),C(Q=>Q.filter(ne=>ne!==z)),delete A.current[z]},B1);A.current[z]=I},stopReply:z=>{const D=A.current[z];D&&(window.clearTimeout(D),delete A.current[z]),C(k=>k.filter(I=>I!==z))},refine:z=>{},saveWorkflow:z=>{const D=z.id;p(D),T(I=>({...I,[D]:[...I[D]??[],{role:"operator",text:"Save as workflow"}]})),C(I=>I.includes(D)?I:[...I,D]);const k=window.setTimeout(()=>{T(I=>({...I,[D]:[...I[D]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),K(D),C(I=>I.filter(Q=>Q!==D)),delete A.current[D]},B1);A.current[D]=k},pendingWorkflowIds:$,toggleWorkflowSave:P,savedWorkflowIds:B,markWorkflowSaved:K}}const _S={search:To,message:Cs,policy:Po,shield:Po,schedule:Po,analytics:Df,clock:br,monitor:Ds,bell:Cs,record:Eo},bS=t=>t.icon==="shield"||t.icon==="policy",kS={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage"},CS=t=>t.updateData?`Update Data: ${t.updateData.recordType}`:kS[t.icon]??t.name,jS=t=>t.tone==="positive"?"success":"neutral";const SS=b(Xf)`
  && {
    --accordion-label-size: var(--text-sm);
    --accordion-desc-size: var(--text-xs);
  }
  & > div:has(> [data-accordion-header-button]) {
    padding-top: var(--space-3);
    padding-bottom: var(--space-3);
  }
  & [class*='_chevron_'] {
    width: var(--space-8);
    height: var(--space-8);
  }
  & [class*='_description_'] {
    color: var(--color-content-disabled);
    /* Alloy clamps the description to a single line (white-space: nowrap +
       ellipsis). Let it wrap and clamp at two lines instead, so a collapsed
       section surfaces more of its context before truncating. */
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
  }
  /* 12px gap between the leading avatar tile and the label/description block. */
  & [class*='_headerContent_'] {
    gap: var(--space-3);
  }
  & [role='region'] > div > div {
    /* 12px gutter + 32px avatar tile + 12px gap — aligns the expanded body (its
       heading label and cards) under the section title rather than the row edge. */
    padding-left: calc(var(--space-3) + var(--space-8) + var(--space-3));
    padding-right: var(--space-3);
  }
  /* Inset the inter-item divider 12px on each side. Suppress Alloy's full-bleed
     border (its selector needs &&& to override) and draw the line with a pseudo. */
  &&&:not(:last-child) {
    border-bottom: none;
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    height: 1px;
    background: var(--color-border-opaque);
  }
`;function NS({open:t,onClose:a,title:i="Run details",usage:l}){const[c,u]=g.useState(()=>l.length?"0":"");if(!t)return null;const p=l.length,f=`${p} ${p===1?"tool":"tools"} used · tap any to see its query and results`,m=l.map((x,y)=>({entry:x,index:y}));return As.createPortal(r.jsxs(DS,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(BS,{onClick:a}),r.jsxs(FS,{children:[r.jsxs(WS,{children:[r.jsxs(HS,{children:[r.jsx(qS,{children:i}),r.jsx(US,{children:f})]}),r.jsx(Ie,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(Uf,{size:18})})]}),r.jsxs(VS,{children:[r.jsx(GS,{"aria-hidden":"true"}),r.jsx(Qf,{type:"single",collapsible:!0,value:c,onValueChange:x=>u(typeof x=="string"?x:""),children:m.map(({entry:x,index:y})=>{const _=bS(x)?Hf:_S[x.icon];return r.jsx(SS,{value:String(y),label:CS(x),description:x.description,chevronPosition:"trailing",leadingSlot:r.jsx(In,{shape:"square",variant:"subtle",color:"neutral",size:"md",icon:r.jsx(_,{size:18}),"aria-hidden":"true",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),children:r.jsx(YS,{children:r.jsx(RS,{entry:x})})},y)})})]})]})]}),document.body)}function RS({entry:t}){return r.jsxs(r.Fragment,{children:[t.query&&r.jsxs(qn,{children:[r.jsx(Ln,{children:"Query"}),r.jsx(ZS,{children:t.query})]}),t.summary&&r.jsxs(qn,{children:[r.jsx(Ln,{children:"What it does"}),r.jsx(nN,{children:t.summary})]}),t.message&&r.jsxs(qn,{children:[r.jsx(Ln,{children:"Message"}),r.jsx(F1,{children:t.message})]}),t.policies&&r.jsxs(qn,{children:[r.jsx(Ln,{children:`Policies evaluated · ${t.policies.total}`}),r.jsx(XS,{children:t.policies.items.map((a,i)=>r.jsxs(JS,{children:[r.jsx(eN,{"aria-hidden":"true",children:r.jsx(Vt,{size:16})}),r.jsx("span",{children:a})]},i))})]}),t.eligible&&r.jsxs(qn,{children:[r.jsx(Ln,{children:`Returned · ${t.eligible.total} ${t.eligible.unit}`}),r.jsx(LS,{candidates:t.eligible.items,total:t.eligible.total,moreNoun:t.eligible.moreNoun})]}),t.threads&&r.jsxs(qn,{children:[r.jsx(Ln,{children:`Threads · ${t.threads.total}`}),r.jsx(zS,{threads:t.threads})]}),t.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(qn,{children:[r.jsx(Ln,{children:"Recipient"}),r.jsx(tN,{children:r.jsx(wn,{size:"md",divider:!1,leadingSlot:r.jsx(In,{size:"sm",src:Yo(t.notification.seed),name:t.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:t.notification.name,description:`${t.notification.role} · ${t.notification.channel}`,trailingSlot:r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${t.notification.name}'s profile`,children:r.jsx(Bs,{size:14})})})})]}),r.jsxs(qn,{children:[r.jsx(Ln,{children:"Message"}),r.jsx(F1,{children:t.notification.message})]})]}),t.updateData&&r.jsxs(qn,{children:[r.jsx(Ln,{children:`${t.updateData.recordType} details`}),(t.updateData.groups??[t.updateData.fields??[]]).map((a,i)=>r.jsx(MS,{children:a.map((l,c)=>r.jsx(wn,{size:"sm",label:l.label,trailingSlot:l.emphasis==="change"&&l.previousValue?r.jsxs(IS,{children:[r.jsx(TS,{children:l.previousValue}),r.jsx(AS,{"aria-hidden":"true",children:"→"}),r.jsx(ES,{children:l.value})]}):l.emphasis==="success-tag"?r.jsx(Fs,{status:"success",size:"sm",children:l.value}):r.jsx($S,{$success:l.emphasis==="success",children:l.value})},c))},i))]})]})}function LS({candidates:t,total:a,moreNoun:i}){var y;const[l,c]=g.useState(!1),u=t.slice(0,3),p=a-u.length,f=parseFloat(((y=u[u.length-1])==null?void 0:y.match)??"4.5"),m=l?Array.from({length:p},(_,w)=>PS(w,f)):[],x=[...u,...m];return r.jsxs(r.Fragment,{children:[r.jsx(Zd,{children:x.map((_,w)=>r.jsx(wn,{size:"sm",leadingSlot:r.jsx(In,{size:"sm",src:Yo(_.name),name:_.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:_.name,trailingSlot:r.jsx(KS,{children:`${_.match} · ${_.distance}`})},w))}),p>0&&r.jsx(u0,{type:"button",onClick:()=>c(_=>!_),"aria-expanded":l,children:l?`Show fewer ${i}`:`+${p} more ${i}`})]})}const Zd=b.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;

  & > div {
    --li-px: var(--space-3);
    /* Names use the Label/sm type size. */
    --li-label-size: var(--text-xs);
    /* Draw the row divider inset 12px from each edge (aligned with the row's
       content padding) rather than the default full-width border. */
    position: relative;
    border-bottom-color: transparent;
  }
  & > div::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    border-bottom: 1px solid var(--color-border-opaque);
  }
  & > div:last-child::after {
    display: none;
  }
`,MS=b(Zd)`
  /* 8px of breathing room inside the card's top/bottom edges — the rows themselves
     stay tight (see --li-py below), so the padding sits on the card, not each row.
     The column gap spaces the rows apart (the rows carry no vertical padding of
     their own). */
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  padding-bottom: var(--space-2);

  & [class*='_label_'] {
    color: var(--color-content-tertiary);
  }
  /* Condensed key/value block — no inter-row dividers, and the rows shed their
     48/36px min-height so each collapses to just its content plus a tight vertical
     pad, removing the extra height and inter-row gaps. */
  & > div::after {
    display: none;
  }
  & > div {
    --li-py: 0;
    --li-min-height: auto;
    min-height: 0;
  }
`,$S=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: ${t=>t.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,IS=b.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,TS=b.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,AS=b.span`
  color: var(--color-content-tertiary);
`,ES=b.span`
  color: var(--color-success-content);
`,Rs=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Ls=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function PS(t,a){const i=Rs[t%Rs.length],l=Ls[(t*7+3)%Ls.length],c=Math.max(3,a-(t+1)*.1),u=(4+t*13%90/10).toFixed(1);return{name:`${i} ${l}`,match:`${c.toFixed(1)} match`,distance:`${u} mi`}}function zS({threads:t}){const[a,i]=g.useState(!1),l=t.items.slice(0,3),c=t.total-l.length,u=a?Array.from({length:c},(f,m)=>OS(m)):[],p=[...l,...u];return r.jsxs(r.Fragment,{children:[r.jsx(Zd,{children:p.map((f,m)=>r.jsx(wn,{size:"md",interactive:!0,onClick:()=>void 0,leadingSlot:r.jsx(In,{size:"sm",src:Yo(f.seed),name:f.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:f.name,description:f.preview,trailingSlot:r.jsxs(QS,{children:[r.jsx(Fs,{status:jS(f),size:"sm",children:f.status}),r.jsx(en,{size:16})]})},m))}),c>0&&r.jsx(u0,{type:"button",onClick:()=>i(f=>!f),"aria-expanded":a,children:a?`Show fewer ${t.moreNoun}`:`+${c} more ${t.moreNoun}`})]})}function OS(t){const a=Rs[t%Rs.length],i=Ls[(t*7+3)%Ls.length],l=`${a} ${i}`;return{seed:l,name:l,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const DS=b.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,BS=b.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: 0.45;
`,FS=b.div`
  position: relative;
  width: min(460px, 92vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border-opaque);
  box-shadow: var(--shadow-below-high);
`,WS=b.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,HS=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,qS=b.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,US=b.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,VS=b.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,GS=b.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,YS=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  /* Breathing room between the entry's header row and its expanded detail. */
  padding-top: var(--space-2);
`,qn=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,ZS=b.pre`
  margin: 0;
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-primary);
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
`,KS=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,QS=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,u0=b.button`
  appearance: none;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: var(--text-sm);
  text-align: left;
  color: var(--color-content-tertiary);
  cursor: pointer;

  &:hover {
    color: var(--color-content-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
`,XS=b.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,JS=b.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  /* Condensed 36px rows — a fixed height with horizontal-only padding, so the
     list reads tighter than the default 12px-all-around row. */
  height: 36px;
  padding: 0 var(--space-3);
  box-sizing: border-box;
  font-size: var(--text-sm);
  color: var(--color-content-primary);

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    border-bottom: 1px solid var(--color-border-opaque);
  }
`,eN=b.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,F1=b.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,tN=b.div`
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
  overflow: hidden;

  & > div {
    --li-px: var(--space-3);
    --li-py: var(--space-2);
    /* 8px gap between the avatar and the name/role. */
    --li-gap: var(--space-2);
    /* Name uses the Label/sm type size. */
    --li-label-size: var(--text-xs);
  }
`,nN=b.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function rN({milestones:t}){return r.jsx(hN,{children:t.map((a,i)=>r.jsx(sN,{milestone:a,last:i===t.length-1},i))})}function h0({milestones:t,typingIndex:a,focusIndex:i,focusBeat:l,collapsed:c,hideActions:u,running:p,animateIn:f,showConnectors:m}){return r.jsx(oN,{milestones:t,typingIndex:a,focusIndex:i,focusBeat:l,hideActions:u,running:p,defaultCollapsed:c,animateIn:f,showConnectors:m})}function oN({milestones:t,typingIndex:a,focusIndex:i,focusBeat:l,hideActions:c,running:u,animateIn:p=!0,showConnectors:f=!0,defaultCollapsed:m=!1}){return r.jsx(fN,{$animate:p,children:r.jsxs(gN,{children:[t.map((x,y)=>{var R,T;const _=u&&typeof i=="number"&&y>i,w=u&&typeof i=="number"&&y===i,S=!u||typeof i!="number"||y<i-1?"done":y===i-1?"working":"upcoming",j=!!((R=x.progress)!=null&&R.length),N=y===t.length-1;return r.jsxs(vN,{$tight:!j,$last:N,$connected:f,children:[f&&!N&&r.jsx(xN,{"aria-hidden":"true",$state:S,$tight:!j}),r.jsx(f0,{milestone:x,last:!0,collapsible:!0,placeholder:_,focused:w,progressBeat:w?l:void 0,superseded:m,typing:y===a,extra:!_&&((T=x.usage)!=null&&T.length)?r.jsx(iN,{usage:x.usage,title:x.headline}):void 0,icon:r.jsx(p0,{icon:x.icon,loading:a===y||w||u&&typeof i!="number"&&y===t.length-1,placeholder:_,muted:m})})]},y)}),!c&&!u&&r.jsx(qa,{time:Gn(t)})]})})}const W1=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function aN(){const[t,a]=g.useState(0);return g.useEffect(()=>{if(t>=W1.length-1)return;const i=setTimeout(()=>a(l=>l+1),3200);return()=>clearTimeout(i)},[t]),r.jsxs(r.Fragment,{children:[W1[t],r.jsxs(mN,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function Gn(t){const i=581+t.reduce((f,m)=>f+m.headline.length,0)%200,l=Math.floor(i/60)%24,c=i%60,u=l<12?"AM":"PM";return`${l%12===0?12:l%12}:${String(c).padStart(2,"0")} ${u}`}function qa({time:t}){const[a,i]=g.useState(null),l=c=>i(u=>u===c?null:c);return r.jsx(wN,{"data-feedback-actions":!0,children:r.jsxs(bf,{visibility:"always",time:t,children:[r.jsx(q1,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>l("up"),children:r.jsx(Ff,{size:14})}),r.jsx(q1,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>l("down"),children:r.jsx(Wf,{size:14})}),r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(Qa,{size:14})})]})})}function iN({usage:t,title:a}){const[i,l]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const c=u=>{u.key==="Escape"&&l(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[i]),t.length?r.jsxs(_N,{children:[r.jsxs(Ie,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(en,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>l(!0),children:[t.length," ",t.length===1?"tool":"tools"," used"]}),r.jsx(NS,{open:i,onClose:()=>l(!1),title:a,usage:t})]}):null}function sN({milestone:t,last:a}){return r.jsxs(SN,{children:[r.jsxs(NN,{children:[r.jsx(p0,{icon:t.icon}),!a&&r.jsx(IN,{})]}),r.jsx(f0,{milestone:t,last:a})]})}function lN({records:t,initial:a=3}){const[i,l]=g.useState(!1),c=i?t:t.slice(0,a),u=t.length-a;return r.jsxs(VN,{children:[c.map((p,f)=>r.jsx(d0,{record:p},f)),u>0&&r.jsx(GN,{type:"button",onClick:()=>l(p=>!p),children:i?"Show less":`Show ${u} more`})]})}function p0({slotRef:t,hidden:a,loading:i,placeholder:l,muted:c}){return l?r.jsx(U1,{ref:t,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(LN,{})}):r.jsx(U1,{ref:t,"aria-hidden":"true",$hidden:a,$loading:i,children:r.jsxs($N,{viewBox:"0 0 24 24",$loading:i,$muted:c&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function f0({milestone:t,last:a,typing:i,icon:l,collapsible:c=!0,extra:u,placeholder:p,focused:f,progressBeat:m,superseded:x}){var L,C;if(p)return r.jsx(G1,{$last:a,$dim:!0,children:r.jsxs(jd,{as:"div",children:[l,r.jsx(Y1,{children:t.headline})]})});const y=!!((L=t.blocks)!=null&&L.length),_=!!u,[w,S]=g.useState(!c||!!t.defaultOpen),j=c&&(y||_),N=j&&!i,R=y&&(c?w:!0),T=_&&(c?w:!0);return r.jsxs(G1,{$last:a,children:[r.jsxs(jd,{as:j?"button":"div",type:j?"button":void 0,$interactive:N,"aria-expanded":N?w:void 0,onClick:N?()=>S(A=>!A):void 0,children:[l,r.jsx(Y1,{$focused:!!f,children:t.headline}),N&&r.jsx(TN,{"data-open":w||void 0,"aria-hidden":"true",children:r.jsx(en,{size:14})})]}),(C=t.progress)!=null&&C.length?r.jsx(AN,{$indent:!!l,children:r.jsx(dN,{steps:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,live:!!(i||f),beat:m,superseded:x,showAvatars:w||i||f})}):null,R&&r.jsx(WN,{$indent:!!l,children:t.blocks.map((A,$)=>r.jsxs(HN,{children:[A.text&&r.jsx(qN,{children:i?r.jsx(Qd,{text:A.text}):A.text}),A.label&&r.jsx(UN,{children:A.label}),A.bullets&&r.jsx(YN,{children:A.bullets.map((F,P)=>r.jsx("li",{children:F},P))}),A.checks&&r.jsx(ZN,{children:A.checks.map((F,P)=>r.jsxs("li",{children:[r.jsx(KN,{"aria-hidden":"true"}),r.jsx("span",{children:F})]},P))}),A.records&&r.jsx(lN,{records:A.records})]},$))}),T&&r.jsx(bN,{$indent:!!l,children:u})]})}const cN=1350;function dN({steps:t,avatars:a,avatarsOnSettle:i,reached:l,live:c,showAvatars:u,beat:p,superseded:f}){const m=t.length-1,x=typeof p=="number",[y,_]=g.useState(c?0:m),w=g.useRef(c);g.useEffect(()=>{c&&!w.current&&(w.current=!0,_(0))},[c]),g.useEffect(()=>{if(x||!w.current||y>=m)return;const R=setTimeout(()=>_(T=>Math.min(T+1,m)),cN);return()=>clearTimeout(R)},[y,m,x]),g.useEffect(()=>{typeof p=="number"&&_(Math.min(p,m))},[p,m]);const S=typeof p=="number"?Math.min(p,m):y,j=S>=m,N=j&&!c;return r.jsxs(EN,{children:[r.jsx(zN,{$done:N,$live:c,$superseded:f,"aria-live":"polite",children:c?r.jsx(Qd,{text:t[S],caret:!1,speed:26}):t[S]},S),u&&(i?j:j||c)&&(a!=null&&a.length)?r.jsx(uN,{seeds:a,total:l}):null]})}const H1=90;function uN({seeds:t,total:a,max:i=5}){const l=t.slice(0,i),c=Math.max(a??0,t.length),u=c-l.length;return r.jsxs(ON,{"aria-label":`${c} people reached`,children:[l.map((p,f)=>r.jsx(DN,{style:{zIndex:l.length-f,animationDelay:`${f*H1}ms`},children:r.jsx(In,{size:"sm",src:Yo(p),name:p,alt:""})},p)),u>0&&r.jsxs(BN,{"aria-hidden":"true",style:{animationDelay:`${l.length*H1}ms`},children:["+",u]})]})}const hN=b.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,pN=Oe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,Kd=Pt`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,fN=b.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${pN} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${t=>t.$animate===!1&&"animation: none;"}

  ${Kd}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,mN=b.span``,gN=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. */
  padding-top: var(--space-3);
  padding-bottom: var(--space-3);
`,vN=b.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${t=>t.$last?"0":t.$connected?t.$tight?"var(--space-3)":"var(--space-5)":t.$tight?"0":"var(--space-3)"};
`,yN=Oe`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,xN=b.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${t=>t.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${t=>t.$state==="working"?Pt`
        width: 1.5px;
        /* Faint track behind, with a brand-coloured segment sweeping down it. */
        background-color: var(--color-border-opaque);
        background-image: linear-gradient(
          to bottom,
          transparent 0%,
          var(--color-success-content) 50%,
          transparent 100%
        );
        background-size: 100% 55%;
        background-repeat: no-repeat;
        animation: ${yN} 1.25s linear infinite;
      `:t.$state==="upcoming"?Pt`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:Pt`
        /* done — a full, solid green line. Static: the drawing motion belongs to
           the 'working' state (the looping sweep). Once the step completes, the
           line simply solidifies rather than re-drawing from zero. */
        width: 1.5px;
        background-color: var(--color-success-content);
      `};

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,wN=b.div`
  padding-top: var(--space-4);
  /* Nudge the action cluster 8px further below the usage toggle. */
  margin-top: var(--space-2);
  /* Sit on the group's left rail — flush with the session summary and the
     activity icon column — rather than indented onto the content rail. */

  /* Hidden at rest — the enclosing message group reveals it on hover/focus (the
     reveal rule is shared by SessionShell, ResponseSet, and the decision turn).
     Opacity (not display) keeps the row's layout box, so the resting agent mark
     still anchors below it. */
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-base) var(--ease-out);

  /* Size the action buttons (thumbs up/down + rerun) to a 24px tap target,
     keeping their icons centered. The min-width override beats the design
     system's icon-only width rule. */
  & button {
    width: 24px;
    min-width: 24px;
    height: 24px;
    padding: 0;
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,_N=b.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,bN=b.div`
  padding-top: var(--space-2);
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,q1=b(Ie)`
  &[data-active] { color: var(--color-content-brand); }
`;function Qd({text:t,onDone:a,speed:i=30,caret:l=!0}){const[c,u]=g.useState(0);g.useEffect(()=>{u(0)},[t]),g.useEffect(()=>{if(c>=t.length)return;const f=setTimeout(()=>u(m=>m+1),i);return()=>clearTimeout(f)},[c,t,i]);const p=c>=t.length;return g.useEffect(()=>{p&&(a==null||a())},[p]),r.jsxs(r.Fragment,{children:[t.slice(0,c),l&&r.jsx(CN,{$blink:p,"aria-hidden":"true"}),!p&&r.jsx(jN,{"aria-hidden":"true",children:t.slice(c)})]})}const kN=Oe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,CN=b.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${t=>t.$blink?kN:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jN=b.span`
  opacity: 0;
`,SN=b.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,NN=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,U1=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${t=>t.$hidden?"hidden":"visible"};
`,RN=Oe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,LN=b.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it. */
  border: 1.5px solid var(--color-border-opaque);
  animation: ${RN} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,MN=Oe`
  to { transform: rotate(360deg); }
`,V1=56.5,$N=b.svg`
  width: var(--space-4);
  height: var(--space-4);
  overflow: visible;

  .ring {
    /* Loading: hollow (transparent) spinner arc. Done: the circle fills solid
       success green — a filled badge, not an outline. Transparent (not none) so
       the fill eases in rather than popping. Muted (a superseded group's settled
       step): the disc fades out entirely, leaving just the bare check. */
    fill: ${t=>t.$loading||t.$muted?"transparent":"var(--color-success-fill)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${V1};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${t=>t.$loading?V1*.7:0};
    stroke: ${t=>t.$loading?"var(--color-content-tertiary)":t.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${MN} 2s linear infinite;
    /* Arc closes + fills on one eased settle curve (easeOutCubic) over the same
       duration, so the ring glides shut and colours in rather than braking abruptly. */
    transition:
      stroke-dashoffset 0.55s cubic-bezier(0.33, 1, 0.68, 1),
      stroke 0.55s cubic-bezier(0.33, 1, 0.68, 1),
      fill 0.55s cubic-bezier(0.33, 1, 0.68, 1);
  }

  .check {
    fill: none;
    /* White check on the filled green disc; a muted (superseded) step keeps just
       the check glyph in the quiet content-tertiary tone. */
    stroke: ${t=>t.$muted?"var(--color-content-tertiary)":"var(--color-content-inverse-primary)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 15;
    /* undrawn + slightly shrunk + transparent while loading; on done it draws on
       while fading + settling to full scale, so the check eases in rather than
       popping. transform-box keeps the scale centred on the glyph itself. */
    stroke-dashoffset: ${t=>t.$loading?15:0};
    opacity: ${t=>t.$loading?0:1};
    transform: ${t=>t.$loading?"scale(0.7)":"scale(1)"};
    transform-box: fill-box;
    transform-origin: center;
    /* Starts ~0.42s in — as the ring finishes closing — so the two motions hand
       off cleanly instead of overlapping. The stroke colour transitions with no
       delay: it carries the white→tertiary demotion when a group is superseded,
       easing alongside the ring's fade rather than waiting on the draw-on beat. */
    transition:
      stroke-dashoffset 0.4s cubic-bezier(0.33, 1, 0.68, 1) 0.42s,
      opacity 0.26s ease 0.42s,
      transform 0.42s cubic-bezier(0.34, 1.4, 0.64, 1) 0.42s,
      stroke 0.55s cubic-bezier(0.33, 1, 0.68, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    .ring { animation: none; }
    .ring, .check { transition: none; }
  }
`,IN=b.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,G1=b.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${t=>t.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,jd=b.div`
  all: unset;
  display: flex;
  align-items: center;
  /* Tight 8px lead — the title hugs its loader/checkmark. The sub-content
     indents (ProgressWrap / Blocks / ExtraSlot) mirror this value. */
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,Y1=b.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm); /* 14px */
  font-weight: ${t=>t.$focused?"var(--font-weight-bold)":"var(--font-weight-medium)"};
  color: ${t=>t.$focused?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  line-height: var(--line-height-snug);
  transition: color var(--duration-base) var(--ease-out);

  ${jd}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,TN=b.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`,AN=b.div`
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,EN=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,PN=Oe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.45; }
`,zN=b.div`
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-loose);
  letter-spacing: var(--tracking-normal);
  /* Settled (done) sub-text reads in the success green — matching the completed
     step's check — while in-flight beats stay muted. Once a newer activity group
     triggers below, the whole superseded group's sub-text quiets to the disabled
     tone, so the green stays with the latest work. */
  color: ${t=>t.$superseded?"var(--color-content-disabled)":t.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
  /* The live reveal is carried by the type-on (see MilestoneProgress → Typewriter),
     so the line itself no longer fades/pops in — that avoided a stray flash when a
     settled line re-mounts (e.g. as the finished group folds into a response set).
     While the step is still running it blinks to read as actively-working; a settled
     line holds solid. */
  ${t=>t.$live&&Pt`animation: ${PN} 1.4s ease-in-out infinite;`}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ON=b.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,m0=Oe`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,DN=b.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${m0} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,BN=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--space-6);
  min-width: var(--space-6);
  /* Asymmetric padding: a wide left pad (12px, exceeding the 8px overlap) keeps the
     leading "+" clear of the face beside it, with a tighter right pad so the chip
     stays compact. */
  padding: 0 var(--space-2) 0 var(--space-3);
  margin-left: calc(-1 * var(--space-2));
  border-radius: var(--radius-full);
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  background: var(--color-bg-tertiary);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  animation: ${m0} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,FN=Oe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,WN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (icon width --space-8 + header gap --space-2). */
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
  animation: ${FN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,HN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,qN=b.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,UN=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,VN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,GN=b.button`
  align-self: flex-start;
  margin: 0;
  padding: var(--space-1) 0;
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  cursor: pointer;

  &:hover { color: var(--color-content-primary); }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,YN=b.ul`
  margin: 0;
  padding-left: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: disc;

  & li {
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    /* Lighter than the standard tertiary detail tone — the bullets are deep
       sub-context, so they sit a step quieter than the step's other text. */
    color: var(--color-content-disabled);
  }
`,ZN=b.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  & li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
`,KN=b.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`,Z1=450;function Xd(t,a){var j;const i=t.status==="needs_approval"||t.status==="recommended",l=i||t.status==="unresolved"||t.status==="monitoring",c=Gd[t.id],u=a===1&&!!c,p=u?c.prompt:i0[t.id]??t.recommendation,f=u?c.record:Kj[t.id],m=f?Array.isArray(f)?f:[f]:[],x=t.status==="unresolved"?Wj:u?c.actions:t.actions,y=i&&(!u&&(((j=Yd[t.id])==null?void 0:j.length)??0)>1||Hj(p)),_=y?qj:x[x.length-1],w=y?[]:x.slice(0,-1),S=e0(t);return{needsDecision:i,actionable:l,onFollowUp:u,followUp:c,prompt:p,records:m,primaryLabel:_,secondaryLabels:w,purple:S}}function K1({thread:t,stage:a,expanded:i,detachActionable:l,detachAnalyzing:c,detachTrail:u,onToggle:p,onClose:f,onDecide:m,onAction:x,onRefinement:y,onSaveWorkflow:_}){const[w,S]=g.useState(!1),{actionable:j,prompt:N,records:R,primaryLabel:T,purple:L}=Xd(t,a),A=t.status==="analyzing"&&!c,$=t.status==="resolved"||t.status==="auto_resolved",F=!l&&(j||L),P=$&&!u,B=l?A:j||A||F,G=i&&(B||P),K=Vd(t),V=Vj(t.id)||(G?"":t.assessment),J=ae=>{t0(ae)?y(ae):x(t.id,ae)};return r.jsxs(dR,{"data-tone":K,$expanded:i,children:[r.jsxs(hR,{children:[r.jsxs(pR,{type:"button","aria-expanded":G,"aria-label":G?"Collapse case":"Expand case",onClick:p,children:[r.jsx(In,{size:"md",src:o0(t.id),name:kd[t.id],alt:kd[t.id]??""}),r.jsxs(fR,{children:[r.jsx(mR,{children:Gj(t)}),V&&r.jsx(gR,{children:V})]})]}),r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":f?"Close case and return to Live":G?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??p,children:f?r.jsx(Bs,{size:16}):G?r.jsx(Lf,{size:16}):r.jsx(qf,{size:16})})]}),G&&P&&r.jsx(vR,{children:r.jsx(yR,{children:r.jsx(rN,{milestones:s0(t)})})}),G&&B&&r.jsxs(xR,{children:[j&&!l&&r.jsx(Ks,{children:N}),j&&!l&&R.length>0&&r.jsx(ER,{children:R.map((ae,se)=>r.jsx(d0,{record:ae},se))}),A&&r.jsx(w0,{role:"status","aria-live":"polite",children:r.jsx(eR,{thread:t,onDecide:m})}),F&&r.jsxs($s,{children:[j&&T&&r.jsx(Yn,{variant:"primary",size:"sm",onClick:()=>J(Ao),children:Ao}),j&&r.jsx(Yn,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),j&&r.jsx(Nd,{variant:"tertiary",size:"sm",onClick:()=>y("Other"),children:"Other"}),L&&(w?r.jsx(Ie,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Vt,{size:14}),children:"Saved"}):r.jsx(Ie,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(qo,{size:14}),onClick:()=>{_(t),S(!0)},children:"Save as workflow"}))]})]})]})}function ks({text:t,speed:a=16,onDone:i,instant:l=!1}){const[c,u]=g.useState(!1);return g.useEffect(()=>{u(!1)},[t]),g.useEffect(()=>{l&&(i==null||i())},[l]),l||c?r.jsx(r.Fragment,{children:t}):r.jsx(Qd,{text:t,speed:a,onDone:()=>{u(!0),i==null||i()}})}function QN({thread:t,stage:a,onAction:i,onRefinement:l,onSaveWorkflow:c,saved:u=!1,saveIntent:p=!1,onToggleSaveWorkflow:f,savedConversationally:m=!1}){const x=u||p,[y,_]=g.useState(!1),[w,S]=g.useState(!1),[j]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),[N,R]=g.useState(!1),T=u||m||N,{actionable:L,onFollowUp:C,prompt:A,records:$,primaryLabel:F,purple:P}=Xd(t,a),B=L&&!C?Yd[t.id]??n0(A).map(J=>({label:J})):void 0,G=t.status==="resolved"||t.status==="auto_resolved",K=P||G,ee=J=>{t0(J)?l(J):i(t.id,J)},V=L&&!(B&&B.length>0)&&$.length>0?$[0]:void 0;if(K&&!L){const J=c0[t.id],ae=y||!J;return r.jsxs(Q1,{$divided:!0,children:[J&&r.jsx(X1,{children:r.jsx(ks,{text:J,onDone:()=>_(!0),instant:j})}),ae&&r.jsxs(Do,{$saved:T,"data-saved":T||void 0,children:[r.jsxs(k0,{children:[r.jsx(C0,{"aria-hidden":"true",children:r.jsx(qo,{size:16})}),r.jsx(j0,{children:r.jsx(ks,{text:"Want me to save this as a reusable workflow?",onDone:()=>S(!0),instant:j})})]}),w&&r.jsx(S0,{children:T?r.jsx(Yn,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(Vt,{size:14}),children:"Saved"}):r.jsx(Yn,{variant:"primary",size:"sm",onClick:()=>{R(!0),c(t)},children:"Save workflow"})})]}),ae&&u&&!m&&!N&&r.jsx(v0,{instant:j})]})}return L&&C?r.jsxs(Q1,{children:[r.jsx(X1,{children:r.jsx(ks,{text:A,onDone:()=>S(!0)})}),w&&r.jsxs($s,{children:[F&&r.jsx(Yn,{variant:"primary",size:"sm",onClick:()=>ee(Ao),children:Ao}),r.jsx(Yn,{variant:"tertiary",size:"sm",onClick:()=>l("No"),children:"No"}),r.jsx(Nd,{variant:"tertiary",size:"sm",onClick:()=>l("Other"),children:"Other"})]})]}):r.jsxs(uR,{"data-tone":Vd(t),children:[L&&r.jsxs(y0,{children:[r.jsx(Ks,{children:A}),V&&r.jsx(x0,{children:r.jsx(In,{size:"md",src:Yo(V.avatarSeed),name:V.title,alt:V.title})})]}),B&&B.length>0?r.jsx(g0,{tasks:B}):null,r.jsxs($s,{children:[L&&F&&r.jsx(Yn,{variant:"primary",size:"sm",onClick:()=>ee(Ao),children:Ao}),L&&r.jsx(Yn,{variant:"tertiary",size:"sm",onClick:()=>l("No"),children:"No"}),L&&r.jsx(Nd,{variant:"tertiary",size:"sm",onClick:()=>l("Other"),children:"Other"}),L&&r.jsx(UR,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":x,"data-on":x||void 0,leadingArtwork:x?r.jsx(Vt,{size:14}):r.jsx(qo,{size:14}),onClick:()=>{u||f==null||f(t.id)},children:"Save as future workflow"})]})]})}function g0({tasks:t,interactive:a=!0}){return r.jsx(PR,{children:t.map((i,l)=>r.jsx(XN,{task:i,first:l===0,last:l===t.length-1,interactive:a},l))})}function XN({task:t,first:a,last:i,interactive:l=!0}){const[c,u]=g.useState(!1),p=!!t.detail&&l;return r.jsxs(zR,{children:[r.jsx(OR,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(DR,{})}),r.jsxs(BR,{children:[r.jsxs(FR,{as:p?"button":"div",type:p?"button":void 0,$interactive:p,"aria-expanded":p?c:void 0,onClick:p?()=>u(f=>!f):void 0,children:[r.jsx(b0,{children:t.label}),p&&r.jsx(WR,{"data-open":c||void 0,"aria-hidden":"true",children:r.jsx(en,{size:14})})]}),c&&p&&r.jsx(HR,{children:t.detail})]})]})}function JN({steps:t,completed:a}){const[i,l]=g.useState(a?t.length:1);g.useEffect(()=>{if(a){l(t.length);return}if(i>=t.length)return;const u=setTimeout(()=>l(p=>p+1),1600);return()=>clearTimeout(u)},[i,t.length,a]);const c=t.slice(0,i);return r.jsx(jR,{role:"status","aria-live":"polite",children:c.map((u,p)=>{const f=!a&&p===i-1,m=p===c.length-1;return r.jsxs(NR,{children:[r.jsxs(RR,{children:[r.jsx(TR,{$done:!f,"aria-hidden":"true",children:f?r.jsx(AR,{children:r.jsx(Mt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(Vt,{size:16})}),!m&&r.jsx(LR,{})]}),r.jsxs(MR,{$last:m,children:[r.jsx($R,{children:u.headline}),r.jsx(IR,{children:u.detail})]})]},p)})})}function eR({thread:t,onDecide:a,analyzed:i,hideDetail:l,hideTrigger:c}){const[u,p]=g.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(wR,{as:"button",type:"button",$interactive:!0,"aria-expanded":u,onClick:()=>p(f=>!f),children:[r.jsx(Mt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(bR,{children:[r.jsx(kR,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!l&&r.jsx(CR,{children:t.assessment})]}),r.jsx(_R,{"data-open":u||void 0,"aria-hidden":"true",children:r.jsx(en,{size:14})})]}),u&&r.jsx(JN,{steps:a0(t.id),completed:i}),!i&&!c&&r.jsx(_0,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})]})}function tR({thread:t,onDecide:a}){return r.jsx(_0,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})}function id(t,a){return{icon:t.icon,headline:t.headline,blocks:t.detail||t.bullets?[{text:t.detail||void 0,bullets:t.bullets}]:void 0,progress:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,usage:l0(a,lS(t))}}function nR(t,a){const i=l0(a,["match","policy","credential","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:t.map(l=>`${l.headline} — ${l.detail}`)}],usage:i}}function rR(t,a){const i=s0(t),l=t.timeline.filter(_=>_.done).length,c=l>0?Math.min(l,i.length):i.length,u=[nR(a0(t.id),t.id),...i.slice(0,c)],p=u.length;if(a.length===0){const _=u.map(w=>({kind:"activity",milestone:w}));return(t.status==="in_progress"||t.status==="monitoring")&&(E1[t.id]??[]).map(w=>id(w,t.id)).forEach(w=>_.push({kind:"activity",milestone:w})),{items:_,reasoningCount:p}}const f=Gd[t.id],m=[(E1[t.id]??[]).map(_=>id(_,t.id)),((f==null?void 0:f.working)??[]).map(_=>id(_,t.id))],x=_=>_===1&&f?f.prompt:i0[t.id]??t.recommendation,y=u.slice(0,p).map(_=>({kind:"activity",milestone:_}));return a.forEach((_,w)=>{y.push({kind:"question",text:x(w)}),y.push({kind:"message",text:_}),(m[w]??[]).forEach(S=>y.push({kind:"activity",milestone:S})),y.push({kind:"reply",text:uS(w)})}),{items:y,reasoningCount:p}}function oR({thread:t,outbound:a=[],chat:i=[],replying:l=!1,analyzing:c=!1,actionCard:u,footSlot:p,onCompleteRun:f}){const m=t.status==="in_progress"||t.status==="monitoring",x=t.status==="resolved"||t.status==="auto_resolved",{items:y,reasoningCount:_}=rR(t,a),w=c||t.status==="in_progress",[S,j]=g.useState(c?Math.min(1,_):w?_:y.length),[N]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),R=a.length>0||m||x?y.length:_,T=t.status==="in_progress"&&a.length>0,[L,C]=g.useState(0);g.useEffect(()=>{C(0)},[S]),g.useEffect(()=>{if(S>=R)return;const E=y[S],X=y[S-1];if((E==null?void 0:E.kind)==="question"||(E==null?void 0:E.kind)==="message"){const ge=setTimeout(()=>j(be=>be+1),0);return()=>clearTimeout(ge)}if((E==null?void 0:E.kind)==="reply"){if(T)return;const ge=setTimeout(()=>j(be=>be+1),Z1);return()=>clearTimeout(ge)}if(T&&(X==null?void 0:X.kind)!=="message")return;const de=(X==null?void 0:X.kind)==="message"?Z1:D1,he=setTimeout(()=>j(ge=>ge+1),de);return()=>clearTimeout(he)},[S,R,T]),g.useEffect(()=>{if(!T)return;const E=X=>{var ue;if(X.key!=="t"&&X.key!=="T"||X.metaKey||X.ctrlKey||X.altKey)return;const de=X.target instanceof Element?X.target:null;if(de&&de.closest('input, textarea, [contenteditable="true"]'))return;const he=y[S-1],ge=(he==null?void 0:he.kind)==="activity"?((ue=he.milestone.progress)==null?void 0:ue.length)??0:0;if((he==null?void 0:he.kind)==="activity"&&L<ge-1){C(xe=>xe+1);return}const be=y[S];(be==null?void 0:be.kind)==="activity"?(j(xe=>xe+1),C(0)):f==null||f()};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[T,S,L,f]);const A=y.slice(0,S),$=[];for(const E of A){if(E.kind==="question"){$.push({type:"question",text:E.text});continue}if(E.kind==="message"){$.push({type:"msg",text:E.text});continue}if(E.kind==="reply"){$.push({type:"reply",text:E.text});continue}const X=$[$.length-1];X&&X.type==="acts"?X.milestones.push(E.milestone):$.push({type:"acts",milestones:[E.milestone]})}const F=S<y.length,P=A.length>0&&A[A.length-1].kind==="activity",B=S>=R,[G,K]=g.useState(!1);g.useEffect(()=>{if(!(B&&P&&(m||c)&&!x)){K(!1);return}K(!0);const E=setTimeout(()=>K(!1),D1);return()=>clearTimeout(E)},[B,P,S,m,c,x]);const ee=(m||c)&&(F||G)&&P;let V=-1;$.forEach((E,X)=>{E.type==="acts"&&(V=X)});const J=[];for(const E of y){if(E.kind!=="activity"){J.push({type:"other"});continue}const X=J[J.length-1];X&&X.type==="acts"?X.milestones.push(E.milestone):J.push({type:"acts",milestones:[E.milestone]})}let ae=-1;J.forEach((E,X)=>{E.type==="acts"&&(ae=X)});const se=$.findIndex(E=>E.type==="acts"),ce=(E,X,de=X)=>{const he=$[E],ge=(c||t.status==="in_progress")&&E===ae,be=J[E],ue=ge&&be&&be.type==="acts"?be.milestones:he.milestones,xe=ge?he.milestones.length-1:void 0;return r.jsx(h0,{milestones:ue,focusIndex:xe,focusBeat:ge&&T?L:void 0,typingIndex:E===ae&&ee?he.milestones.length-1:void 0,collapsed:E<V,hideActions:de,running:ge,showConnectors:E!==se,animateIn:!X&&!N})},Z=[];for(let E=0;E<$.length;E++){const X=$[E];if(X.type==="question"){Z.push({kind:"question",text:X.text});continue}if(X.type==="msg"){Z.push({kind:"msg",text:X.text});continue}if(X.type==="reply"){Z.push({kind:"response",gi:-1,text:X.text});continue}const de=$[E+1];de&&de.type==="reply"?(Z.push({kind:"response",gi:E,text:de.text}),E++):Z.push({kind:"acts",gi:E})}const z=(c||t.status==="in_progress")&&V>=0||l,D=A.length>0,k=l||m,I=(()=>{for(let E=Z.length-1;E>=0;E--){const X=Z[E];if(X.kind==="acts"||X.kind==="response"&&X.gi>=0)return E}return-1})(),Q=Z.findIndex(E=>E.kind==="question"),ne=E=>E.kind==="acts"?Gn($[E.gi].milestones):E.kind==="response"?Gn(E.gi>=0?$[E.gi].milestones:[]):Gn([]);return r.jsxs(r.Fragment,{children:[Z.map((E,X)=>{var be,ue;const de=X===I?u:null;if(E.kind==="question"){const xe=Z[X-1],Ne=!!xe&&(xe.kind==="acts"||xe.kind==="response")&&X-1!==I,Te=X===Q;return r.jsxs(ld,{children:[Te?r.jsx(lR,{thread:t}):r.jsx(sR,{text:E.text,animate:!N}),Ne&&r.jsx(qa,{time:ne(xe)})]},`q${X}`)}if(E.kind==="msg")return r.jsx(cR,{messages:[E.text],animate:!N},`m${X}`);if(E.kind==="acts"){const xe=$[E.gi].milestones,Ne=((be=Z[X+1])==null?void 0:be.kind)==="question",Te=ce(E.gi,!1,!!de||Ne);return r.jsxs(g.Fragment,{children:[Te,de&&r.jsxs(ld,{children:[de,r.jsx(qa,{time:Gn(xe)})]})]},`a${X}`)}const he=E.gi>=0,ge=he?$[E.gi].milestones:[];return r.jsxs(g.Fragment,{children:[r.jsx(Sd,{activity:he?ce(E.gi,!0):void 0,text:E.text,feedbackTime:de||((ue=Z[X+1])==null?void 0:ue.kind)==="question"?void 0:Gn(ge),showMark:!1,animateIn:!1}),de&&r.jsxs(ld,{children:[de,r.jsx(qa,{time:Gn(ge)})]})]},`resp${X}`)}),r.jsx(aR,{messages:i,replying:l}),p&&As.createPortal(D?r.jsxs(XR,{role:k?"status":"img","aria-label":l?"Ultron is replying":z?"Ultron is working":"Ultron",children:[r.jsxs(tL,{"aria-hidden":"true",children:[r.jsx(J1,{$show:z,children:r.jsx(Mt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(J1,{$show:!z,children:r.jsx(Mt,{mark:"magnetic2d",size:24,tone:"auto",state:k?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),z&&r.jsx(eL,{children:l?"Replying…":r.jsx(aN,{})})]}):null,p),I<0&&u]})}function Sd({activity:t,text:a,body:i,feedbackTime:l,active:c=!1,showMark:u=!0,animateIn:p=!0}){const f=!!(t||i||l);return r.jsxs(nL,{children:[f&&r.jsxs(rL,{$animate:p,children:[t,i,l&&r.jsx(qa,{time:l})]}),u&&r.jsx(oL,{$animate:p,role:c?"status":"img","aria-label":c?"Ultron is working":"Ultron",children:r.jsx(Mt,{mark:"magnetic2d",size:24,tone:"auto",state:c?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function sd(){return[{icon:"clock",headline:"Reviewed your message"}]}function aR({messages:t,replying:a=!1}){return!t.length&&!a?null:r.jsx(QR,{children:t.map((i,l)=>i.role==="operator"?r.jsx(N0,{children:r.jsx(L0,{children:r.jsx(M0,{children:i.text})})},l):i.kind==="workflow_saved"?r.jsx(Sd,{body:r.jsx(iR,{}),feedbackTime:Gn(sd()),showMark:!1},l):r.jsx(Sd,{activity:r.jsx(h0,{milestones:sd(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:Gn(sd()),showMark:!1},l))})}function iR(){return r.jsx(v0,{})}function v0({instant:t=!1}){const[a,i]=g.useState(!1);return r.jsxs(Do,{children:[r.jsxs(k0,{children:[r.jsx(C0,{"aria-hidden":"true",children:r.jsx(qo,{size:16})}),r.jsx(j0,{children:r.jsx(ks,{text:"Workflow saved for future use.",onDone:()=>i(!0),instant:t})})]}),a&&r.jsx(S0,{children:r.jsx(Yn,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(Bs,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function sR({text:t,animate:a=!0}){return r.jsx(GR,{$animate:a,children:t})}function lR({thread:t}){const{prompt:a,records:i}=Xd(t,0),l=Yd[t.id]??n0(a).map(u=>({label:u})),c=!(l&&l.length>0)&&i.length>0?i[0]:void 0;return r.jsxs(YR,{"data-tone":Vd(t),children:[r.jsxs(y0,{children:[r.jsx(Ks,{children:a}),c&&r.jsx(x0,{children:r.jsx(In,{size:"md",src:Yo(c.avatarSeed),name:c.title,alt:c.title})})]}),l&&l.length>0?r.jsx(g0,{tasks:l,interactive:!1}):null]})}function cR({messages:t,animate:a=!0}){return t.length?r.jsx(ZR,{children:t.map((i,l)=>r.jsx(N0,{children:r.jsx(L0,{$animate:a,children:r.jsx(M0,{children:i})})},l))}):null}const dR=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  /* The expanded event card is deconstructed: transparent, no tonal fill, no
     shadow/border — its content sits flat on the page. Collapsed list cards keep
     their solid surface + flat tonal status fill, and lift on hover. */
  background: ${t=>t.$expanded?"transparent":"var(--color-bg-primary)"};
  box-shadow: none;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${t=>t.$expanded?"":`
  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }`}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }

  /* Semantic card tone: high severity → orange, resolved-family → green,
     actively-working (in_progress / monitoring) → blue, everything else
     (medium / low / none) → slate. Only collapsed cards take the flat tonal
     fill; the expanded event card stays transparent. */
  &[data-tone='orange'] { ${t=>t.$expanded?"":"background-color: var(--color-orange-bg-tertiary);"} }
  &[data-tone='green']  { ${t=>t.$expanded?"":"background-color: var(--color-green-bg-tertiary);"} }
  &[data-tone='blue']   { ${t=>t.$expanded?"":"background-color: var(--color-blue-bg-tertiary);"} }
  &[data-tone='slate']  { ${t=>t.$expanded?"":"background-color: var(--color-slate-bg-tertiary);"} }
`,uR=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  /* Soft lift on hover — same treatment as the save-as-workflow offer card. */
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-md);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,y0=b.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,x0=b.span`
  flex-shrink: 0;
  display: inline-flex;
`,hR=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-2) 0;
`,pR=b.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
  }
`,fR=b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,mR=b.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,gR=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,vR=b.div`
  overflow: hidden;
`,yR=b.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,xR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,w0=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,wR=b.div`
  all: ${t=>t.$interactive?"unset":"revert"};
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  box-sizing: border-box;
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,_R=b.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;b(w0)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const bR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,kR=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,CR=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,jR=b.div`
  display: flex;
  flex-direction: column;
`,SR=Oe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,NR=b.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${SR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,RR=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,LR=b.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,MR=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
`,$R=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,IR=b.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,TR=b.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${t=>t.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,AR=b.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,_0=b(Ie)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,ER=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,PR=b.div`
  display: flex;
  flex-direction: column;
`,Ms="var(--space-8)",zR=b.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,OR=b.div`
  position: relative;
  flex-shrink: 0;
  width: var(--space-5);
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: var(--color-slate-border-tertiary);
  }
  /* Clip the thread to the dot's centre (half the header height) at the ends. */
  &[data-first]::before { top: calc(${Ms} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Ms} / 2); }
  &[data-first][data-last]::before { display: none; }
`,DR=b.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Ms} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,BR=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,FR=b.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Ms};
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,b0=b.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,WR=b.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,HR=b.p`
  margin: 0;
  padding-bottom: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  color: var(--color-content-disabled);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Ks=b.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,qR=Oe`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,$s=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-1);
  transform-origin: left center;
  animation: ${qR} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Yn=b(Ie)`
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);

  /* Primary pill rides the inverse surface token so it flips with the theme
     (dark fill in light mode, light fill in dark mode). !important is needed to
     beat Alloy's higher-specificity dark-scope rule, which otherwise forces the
     fill back to the page surface token. */
  &[data-variant='primary'] {
    background: var(--color-bg-inverse-primary) !important;
    color: var(--color-content-inverse-primary) !important;
  }

  /* Disabled primary (the settled "Saved" state) drops to the neutral disabled
     surface + muted content, rather than a dimmed inverse fill. */
  &[data-variant='primary']:disabled {
    background: var(--color-bg-disabled) !important;
    color: var(--color-content-disabled) !important;
  }

  /* Secondary pill rides the neutral secondary surface with primary content — a
     quieter fill than the inverse-primary CTA. */
  &[data-variant='secondary'] {
    background: var(--color-bg-secondary) !important;
    color: var(--color-content-primary) !important;
  }

  /* Outlined (secondary) pills get a strong dark border. */
  &[data-variant='tertiary'] {
    border-color: var(--color-content-primary);
  }
`,Nd=b(Ie)`
  border-radius: var(--radius-full);
  border-style: dashed;
  color: var(--color-content-secondary);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,UR=b(Ie)`
  ${t=>t.$trailing&&"margin-left: auto;"}
  border-radius: var(--radius-full);
  /* Match the Yes/No choices' horizontal padding so the pill sits in the same
     rhythm as the rest of the decision row. */
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  /* Default: a quiet outlined chip — the ghost fill plus a hairline opaque border
     so the affordance reads as a bordered control even before it's toggled on. */
  border: 1px solid var(--color-border-opaque);

  /* Toggled on: a mono, outlined chip — white surface with the border warming to
     the selected ring (color-only change, so the label never shifts), content in
     the primary mono tone. The leading glyph swaps to a check in the markup. */
  &[data-on] {
    background: var(--color-bg-primary);
    color: var(--color-content-primary);
    border-color: var(--color-border-selected);
  }
`,Q1=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${t=>t.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,X1=b.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Do=b.div`
  align-self: stretch;
  /* Extra air above the card, on top of the turn's 8px column gap — the card
     sits 16px below the resolution recap it follows. */
  margin-top: var(--space-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  /* Once the play is saved the offer card goes fully inert (its button is
     disabled) — no drop shadow and no hover lift. Every other state (the live
     offer, the confirmation card) keeps the small lift shadow. */
  box-shadow: ${t=>t.$saved?"none":"var(--shadow-below-low)"};
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${t=>!t.$saved&&Pt`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,k0=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,C0=b.span`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-purple-content-primary);
  transition: color var(--duration-base) var(--ease-out);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    /* Aurora gradient sampled from the design asset (Rectangle 3.svg) — raw hex
       stops because this decorative art has no token equivalent. */
    background:
      radial-gradient(90% 90% at 88% 4%, #F1DB73 0%, rgba(241, 219, 115, 0) 60%),
      radial-gradient(90% 90% at 90% 96%, #77BEEA 0%, rgba(119, 190, 234, 0) 60%),
      radial-gradient(75% 75% at 50% 45%, #3BBF81 0%, rgba(59, 191, 129, 0) 100%),
      #F8E9E0;
    opacity: 0;
    transition: opacity var(--duration-base) var(--ease-out);
  }

  /* Keep the glyph above the gradient overlay. */
  & > svg { position: relative; z-index: 1; }

  /* The hover cross-fade (glyph flips white, aurora gradient fades in) is
     suppressed once the card is saved — a settled card no longer reacts. */
  ${Do}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Do}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Do}[data-saved] & { color: var(--color-content-disabled); }
`,j0=b.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Do}[data-saved] & { color: var(--color-content-disabled); }
`,S0=b($s)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,VR=Oe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,GR=b.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${VR} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,YR=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  /* Slightly tighter bottom padding (12px) now the action buttons are gone, so
     the settled record doesn't trail dead space below its last plan step. */
  padding: var(--space-4) var(--space-4) var(--space-3);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: none;
  /* No entrance animation — the card was already on screen as the live decision,
     so answering settles it in place rather than popping it back in. */

  /* Dim the prompt and plan labels to the settled/disabled tone. */
  ${Ks} { color: var(--color-content-disabled); }
  ${b0} { color: var(--color-content-disabled); }
`,ZR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,N0=b.div`
  display: flex;
  justify-content: flex-end;
`,Jd=Oe`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,R0=Oe`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,KR=Oe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,L0=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${Jd} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,M0=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,QR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;b.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const XR=b.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${R0} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,JR=Oe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,eL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${JR} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,tL=b.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,J1=b.span`
  position: absolute;
  inset: 0;
  /* Center the canvas so the two forms stay concentric through the cross-fade even
     when one renders at a larger size to match the other's visible footprint. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${t=>t.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,nL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${Kd}
`,ld=b.div`
  display: contents;
  ${Kd}
`,rL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${KR} 380ms var(--ease-out) 160ms both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,oL=b.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${R0} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Jd} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;b.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  animation: ${Jd} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;b.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;b.div`
  --flag-accent: var(--color-orange-content-secondary);
  --flag-badge-bg: var(--color-orange-bg-tertiary);

  display: flex;
  flex-direction: column;
  margin: var(--space-1) 0;
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  font-family: var(--font-sans);

  &[data-tone='positive'] {
    --flag-accent: var(--color-green-content-secondary);
    --flag-badge-bg: var(--color-green-bg-tertiary);
  }
  &[data-tone='neutral'] {
    --flag-accent: var(--color-slate-content-secondary);
    --flag-badge-bg: var(--color-slate-bg-tertiary);
  }
`;b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--flag-badge-bg);
  color: var(--flag-accent);
`;b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;b.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-tertiary);
`;b.span`
  height: 1px;
  margin: var(--space-3) 0;
  background: var(--color-border-opaque);
`;b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;b.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-3);
`;b.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  text-align: right;
  color: var(--color-content-primary);

  &[data-alert] {
    font-weight: var(--font-weight-semibold);
    color: var(--flag-accent);
  }
`;function aL({size:t=20}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const iL=160,sL=g.forwardRef(function({onSend:a,working:i=!1,onStop:l,placeholder:c="Message Ultron…"},u){const[p,f]=g.useState(""),m=g.useRef(null),x=p.trim().length>0;g.useImperativeHandle(u,()=>({focus:()=>{var j;return(j=m.current)==null?void 0:j.focus()}}),[]);const y=()=>{const j=m.current;j&&(j.style.height="auto",j.style.height=`${Math.min(j.scrollHeight,iL)}px`)},_=()=>{!x||i||(a(p),f(""),requestAnimationFrame(()=>{const j=m.current;j&&(j.style.height="auto")}))},w=j=>{j.preventDefault(),_()},S=j=>{j.key==="Enter"&&!j.shiftKey&&(j.preventDefault(),_())};return r.jsxs(lL,{onSubmit:w,children:[r.jsx(cL,{ref:m,rows:1,value:p,placeholder:c,"aria-label":"Message Ultron",onChange:j=>{f(j.target.value),y()},onKeyDown:S}),i?r.jsx(ef,{$float:!0,type:"button",variant:"primary",size:"sm",iconOnly:!0,"aria-label":"Stop",onClick:l,children:r.jsx(aL,{size:20})}):r.jsx(ef,{type:"submit",variant:"primary",size:"sm",iconOnly:!0,disabled:!x,"aria-label":"Send message",children:r.jsx(Os,{size:18})})]})}),lL=b.form`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition: box-shadow var(--duration-slow) var(--ease-default),
              border-color var(--duration-slow) var(--ease-default);

  /* Active (focused) state: just the 1px border switching to the focus color —
     no thicker ring — so the bar stays a single hairline outline throughout. */
  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,cL=b.textarea`
  flex: 1;
  min-width: 0;
  /* Size a single line to exactly the 32px send button (space-8) so, with the
     bar's flex-end alignment, the resting input and button share one centered
     row; extra lines then grow upward while the button stays pinned at the foot. */
  padding: calc((var(--space-8) - 1lh) / 2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);

  &::placeholder { color: var(--color-content-inverse-tertiary); }
`,ef=b(Ie)`
  flex-shrink: 0;
  border-radius: var(--radius-full);

  &[data-variant='primary'] {
    background: var(--color-bg-inverse-primary) !important;
    color: var(--color-content-inverse-primary) !important;
  }

  /* Float style — the processing/stop control reads as a quiet inline glyph
     rather than a solid send pill: transparent surface, content-primary icon. */
  ${t=>t.$float&&`
  &[data-variant='primary'] {
    background: transparent !important;
    color: var(--color-content-primary) !important;
  }`}
`,dL={"Coverage Recovery":To,"Fill Optimization":To,Recruiting:To,Users:To,Attendance:qr,"Attendance Recovery":qr,"Time Off":qr,Scheduling:qr,Compliance:Ds,Onboarding:Po,"Payroll Operations":Df,Invoicing:Eo,Reporting:Jp,"Marketplace Optimization":Jp,Engagement:Cs,"Autonomous Operations":zs},uL=t=>dL[t]??zs,tf=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],hL=2800,pL=200,fL=6,mL=2200,Ba=520;function gL({onDetectRisk:t}){const[a,i]=g.useState(0),l=g.useRef(t);l.current=t;const c=g.useRef(new Set),[u,p]=g.useState(!1),f=g.useRef(null);g.useEffect(()=>{const C=setInterval(()=>i(A=>(A+1)%tf.length),hL);return()=>clearInterval(C)},[]);const m=Math.min(fL,gs.length),[x,y]=g.useState([]),_=g.useRef(0),w=g.useRef(gs.filter(C=>!C.risk)),S=g.useRef(gs.filter(C=>C.risk)),j=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),N=()=>5+Math.floor(Math.random()*5),R=()=>{const C=j.current,A=S.current;if(A.length>0&&C.sinceRisk>=C.gap)return C.sinceRisk=0,C.gap=N(),A[C.risk++%A.length];C.sinceRisk+=1;const $=w.current;return $.length>0?$[C.routine++%$.length]:A[C.risk++%A.length]},T=C=>C.risk?"risk":Math.random()<.28?"action":"none",L=g.useRef(null);return g.useEffect(()=>{if(gs.length===0){y([]);return}j.current={routine:0,risk:0,sinceRisk:0,gap:N()},_.current=0;const C=Array.from({length:m},()=>{const F=R();return{key:_.current++,event:F,phase:"in",outcome:T(F),resolved:!0}});if(C.length>0){const F=C[C.length-1];F.resolved=!1,L.current={key:F.key,event:F.event,outcome:F.outcome}}else L.current=null;y(C);const A=[],$=setInterval(()=>{var K;const F=R(),P=_.current++,B=T(F),G=L.current;G&&G.outcome==="risk"&&(p(!0),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>p(!1),2800),c.current.has(G.event.id)||(c.current.add(G.event.id),(K=l.current)==null||K.call(l,G.event))),L.current={key:P,event:F,outcome:B},y(ee=>{const V=ee.filter(se=>se.phase!=="leaving"),J=V.length>=m?V[0].key:null;return[...ee.map(se=>se.key===J?{...se,phase:"leaving"}:G&&se.key===G.key&&!se.resolved?{...se,resolved:!0}:se),{key:P,event:F,phase:"entering",outcome:B,resolved:!1}]}),A.push(setTimeout(()=>{y(ee=>ee.map(V=>V.key===P?{...V,phase:"in"}:V))},40)),A.push(setTimeout(()=>{y(ee=>ee.filter(V=>V.phase!=="leaving"))},Ba))},mL);return()=>{clearInterval($),A.forEach(clearTimeout),f.current&&clearTimeout(f.current)}},[m]),r.jsxs(vL,{children:[r.jsxs(yL,{children:[r.jsx(xL,{children:r.jsx(Mt,{mark:"circle",size:pL,tone:"auto",state:"active",coreGradient:u,"aria-label":"Ultron"})}),r.jsx(wL,{children:"Ultron"}),r.jsx(_L,{role:"status","aria-live":"polite",children:r.jsxs(kL,{children:[r.jsx(CL,{children:tf[a]}),r.jsxs(jL,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},a)})]}),x.length>0&&r.jsx(SL,{"aria-label":"Live event feed",children:x.map(C=>{const A=uL(C.event.capability);return r.jsx(NL,{"data-phase":C.phase,"aria-hidden":C.phase==="leaving"||void 0,children:r.jsx(RL,{children:r.jsxs(LL,{"data-outcome":C.resolved?C.outcome:"pending",children:[r.jsxs(ML,{children:[r.jsx($L,{"aria-hidden":"true",children:r.jsx(A,{size:16})}),r.jsxs(IL,{children:[r.jsx(zL,{children:C.event.capability}),r.jsx(OL,{children:C.event.title})]})]}),r.jsx(TL,{children:C.resolved?C.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx(Mt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(AL,{children:"Risk detected"})]}):C.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx(Mt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(PL,{children:"Action required"})]}):r.jsx(EL,{children:"No action needed"}):r.jsx(Mt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},C.key)})})]})}const vL=b.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-10) var(--space-6) 0;
  text-align: center;
  font-family: var(--font-sans);
`,$0=Oe`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,yL=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${$0} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,xL=b.div`
  display: grid;
  place-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -20%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--color-bg-secondary, rgba(70, 108, 255, 0.06)) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  /* Canvas sits above the bloom. */
  & > canvas {
    position: relative;
    z-index: 1;
  }

  @media (max-height: 640px), (max-width: 560px) {
    & > canvas {
      width: 168px !important;
      height: 168px !important;
    }
  }
`,wL=b.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,_L=b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,bL=Oe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,kL=b.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${bL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,CL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,I0=Oe`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,jL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${I0} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,SL=b.div`
  position: relative;
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: left;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 62%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 62%, transparent 100%);
  /* Rises in just after the hero (slight stagger) so the orbit leads and the
     list follows on the landing's entrance. */
  animation: ${$0} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,NL=b.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${Ba}ms var(--ease-out, ease),
    opacity ${Ba}ms var(--ease-out, ease),
    transform ${Ba}ms var(--ease-out, ease);

  &[data-phase='entering'] {
    grid-template-rows: 0fr;
    opacity: 0;
    transform: scale(0.92) translateY(var(--space-2));
  }

  &[data-phase='leaving'] {
    grid-template-rows: 0fr;
    opacity: 0;
    transform: scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity ${Ba}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,RL=b.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,LL=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  /* The feed is an ambient, passive read-out — the rows recede at a quiet resting
     opacity and don't respond to the cursor (no hover brighten, no interaction). */
  opacity: 0.5;

  /* Risk signals carry a faint orange wash once resolved so they read a touch
     hotter than routine ones (the loader + routine states stay neutral). */
  &[data-outcome='risk'] {
    background: var(--color-orange-bg-tertiary, var(--color-bg-secondary));
  }
`,ML=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,$L=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-tertiary);
  color: var(--color-slate-content-tertiary);

  [data-outcome='risk'] & {
    background: var(--Alloy-orange-150);
    color: var(--color-orange-content-tertiary);
  }
`,IL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,TL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`;b.span`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 28px;

  & > span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-content-tertiary);
    animation: ${I0} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const AL=b.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,EL=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,PL=b.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,zL=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,OL=b.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,DL={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},nf={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},BL=["new","working","done"],FL=280;function WL({threads:t,stageById:a,section:i,analyzedIds:l,outboundByThread:c,chatByThread:u,selectedId:p,onDecide:f,onAction:m,onCompleteRun:x,onRefinement:y,onSaveWorkflow:_,pendingWorkflowIds:w,onToggleSaveWorkflow:S,savedWorkflowIds:j,onSend:N,replyingIds:R,onStop:T,onClose:L,onDetectRisk:C}){const[A,$]=g.useState(!1),F=()=>{A||($(!0),window.setTimeout(()=>{$(!1),L()},FL))},P=(E,X)=>(E.t.status==="analyzing"?1:0)-(X.t.status==="analyzing"?1:0)||Ns[E.t.severity]-Ns[X.t.severity]||E.index-X.index,B=t.map((E,X)=>({t:E,index:X})).filter(({t:E})=>DL[i].includes(E.status)).sort(P).map(({t:E})=>E.id),[G,K]=g.useState(()=>p??null),ee=g.useRef({}),V=g.useRef(null),J=E=>{var X;E==="Other"&&((X=V.current)==null||X.focus()),y(E)},ae=g.useRef(null),se=g.useRef(null),[ce,Z]=g.useState(null),H=g.useRef(void 0);g.useEffect(()=>{var E;if(H.current===void 0){H.current=p;return}!p||p===H.current||(H.current=p,K(p),(E=ee.current[p])==null||E.scrollIntoView({behavior:"smooth",block:"start"}))},[p]);const z=BL.includes(i),D=z?p&&B.includes(p)?p:B[0]??null:null;g.useEffect(()=>{var Qe;const E=ae.current,X=se.current;if(!E||!X)return;const he=((Qe=window.matchMedia)==null?void 0:Qe.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",ge=160;let be=!0,ue=E.scrollHeight;const xe=()=>{be=E.scrollHeight-E.scrollTop-E.clientHeight<=ge};E.addEventListener("scroll",xe,{passive:!0});let Ne=0;const Te=()=>{Ne=performance.now()};E.addEventListener("pointerdown",Te,{passive:!0});const De=new ResizeObserver(()=>{const qe=E.scrollHeight,et=performance.now()-Ne<500;qe>ue+1&&be&&!et&&E.scrollTo({top:qe,behavior:he}),ue=qe});return De.observe(X),()=>{E.removeEventListener("scroll",xe),E.removeEventListener("pointerdown",Te),De.disconnect()}},[D,i]),g.useEffect(()=>{if(!z||!D)return;const E=ae.current;if(!E)return;const X=()=>E.scrollTo({top:E.scrollHeight,behavior:"auto"}),de=requestAnimationFrame(X),he=[80,240,480].map(ge=>window.setTimeout(X,ge));return()=>{cancelAnimationFrame(de),he.forEach(clearTimeout)}},[D,z]);const k=D?t.find(E=>E.id===D)??null:null,I=!!k&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(k.status)||e0(k)),Q=I&&k?k:null,ne=!(I&&k&&["needs_approval","recommended","unresolved","monitoring"].includes(k.status))||!!(k!=null&&k.analysisResult);return i==="live"?r.jsx(rf,{$static:!0,children:r.jsx(gL,{onDetectRisk:C})},"live"):r.jsxs(rf,{$closing:A,children:[r.jsx(UL,{ref:ae,children:z?r.jsx(of,{ref:se,children:D===null?r.jsx(af,{role:"status",children:nf[i]}):(()=>{const E=t.find(xe=>xe.id===D);if(!E)return null;const X=E.status==="analyzing",de=E.status==="resolved"||E.status==="auto_resolved",he=E.status==="in_progress",ge=E.status==="needs_approval"||E.status==="recommended",be=E.status==="monitoring",ue=E.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(KL,{children:r.jsx(K1,{thread:E,stage:a[E.id]??0,expanded:he?!1:ne,detachActionable:I,detachAnalyzing:X,detachTrail:de||ue,onToggle:()=>{},onClose:F,onDecide:f,onAction:m,onRefinement:J,onSaveWorkflow:_},E.id)}),(X||ge||he||de||be||ue)&&r.jsx(oR,{thread:E,outbound:c[E.id]??[],chat:u[E.id]??[],replying:R.includes(E.id),analyzing:X,footSlot:ce,onCompleteRun:()=>x(E.id),actionCard:Q&&Q.id===E.id?r.jsx(QN,{thread:Q,stage:a[Q.id]??0,onAction:m,onRefinement:J,onSaveWorkflow:_,saveIntent:w.includes(Q.id),onToggleSaveWorkflow:S,saved:j.includes(Q.id),savedConversationally:(u[Q.id]??[]).some(xe=>xe.kind==="workflow_saved")},`action-${Q.id}`):void 0},E.id)]})})()}):r.jsx(of,{ref:se,children:B.length===0?r.jsx(af,{role:"status",children:nf[i]}):B.map(E=>{const X=t.find(de=>de.id===E);return X?r.jsx(ZL,{ref:de=>{ee.current[E]=de},children:r.jsx(K1,{thread:X,stage:a[E]??0,expanded:G===E,onToggle:()=>K(de=>de===E?null:E),onDecide:f,onAction:m,onRefinement:y,onSaveWorkflow:_})},E):null})})}),z&&D&&k&&r.jsx(VL,{children:r.jsxs(GL,{children:[r.jsx(YL,{ref:Z}),k.status==="analyzing"&&!l.includes(k.id)&&r.jsx(tR,{thread:k,onDecide:f}),r.jsx(sL,{ref:V,onSend:E=>N(D,E),working:R.includes(D),onStop:()=>T(D),placeholder:Fj(k.status,R.includes(D))},`composer-${D}`)]})})]},"feed")}const HL=Oe`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,qL=Oe`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,rf=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Cancel the shell's ContentMain bottom padding for Ultron only: this page
     owns its full height and snaps the action dock / bottom fade to the very
     foot. Reclaim the 32px the padding carves off the content box, then pull the
     margin box back up by the same amount so it adds no scroll overflow. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  font-family: var(--font-sans);
  color: var(--color-content-primary);
  transform-origin: 50% 30%;
  will-change: opacity, transform;

  ${t=>!t.$static&&!t.$closing&&Pt`
    animation: ${qL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${t=>t.$closing&&Pt`
    animation: ${HL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,UL=b.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* No top padding so the pinned event card sits flush at the top (0px); the
     sides + bottom keep the feed's reading inset. */
  padding: 0 var(--space-5) var(--space-5);
  scrollbar-gutter: stable;

  /* Bottom dissolve so thread content fades into the dock / page foot as it
     scrolls out. The top stays solid: the pinned event card's bg-primary panel
     (see StickyEvent) now covers the space above it, so content scrolling up
     disappears behind that surface rather than needing a top fade. */
  --scroll-fade: var(--space-12);
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--scroll-fade)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--scroll-fade)), transparent 100%);

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border-opaque, #e8eaee);
    border-radius: 99px;
  }
`,VL=b.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,GL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,YL=b.div`
  display: flex;
  &:empty { display: none; }
`,of=b.div`
  display: flex;
  flex-direction: column;
  /* Inter-group spacing — the gap between conversation turns (event card, activity
     trail, sent bubbles, offer). Kept tight (space-2) so the thread reads as one
     continuous conversation rather than widely-spaced blocks. */
  gap: var(--space-2);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: var(--space-4);
`,ZL=b.div`
  scroll-margin-top: var(--space-5);
`,KL=b.div`
  position: sticky;
  top: 0;
  z-index: 5;
  background: var(--color-bg-primary);

  /* The pinned header reads as a neutral surface in every tone/state — the
     colored status fill belongs to the scrolling list cards, not the focused
     event header, so flatten any tonal background to the page surface here. */
  & > div[data-tone] {
    background-color: var(--color-bg-primary);
  }

  /* Soft gradient just below the pinned card so content scrolling up dissolves
     into the page background instead of colliding with the card's bottom edge.
     Rides with the sticky card and sits above the scrolling content. */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: var(--space-6);
    background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
    pointer-events: none;
  }
`,af=b.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,sf=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],QL=2800;function XL(){const[t,a]=g.useState(0);return g.useEffect(()=>{const i=setInterval(()=>a(l=>(l+1)%sf.length),QL);return()=>clearInterval(i)},[]),r.jsx(JL,{children:r.jsx(eM,{children:r.jsxs(tM,{children:[r.jsx(nM,{children:"Ultron"}),r.jsx(rM,{role:"status","aria-live":"polite",children:r.jsxs(aM,{children:[r.jsx(iM,{children:sf[t]}),r.jsxs(lM,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},t)})]})})})}const JL=b.div`
  font-family: var(--font-sans);
`,eM=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,tM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,nM=b.span`
  min-width: 0;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,rM=b.div`
  display: flex;
  align-items: baseline;
  min-height: var(--space-4);
`,oM=Oe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,aM=b.span`
  display: inline-flex;
  align-items: baseline;
  min-width: 0;
  animation: ${oM} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,iM=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,sM=Oe`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,lM=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${sM} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,cM=45;function dM({text:t,className:a}){const[i,l]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){l(t.length);return}l(0);let p=0;const f=setInterval(()=>{p+=1,l(p),p>=t.length&&clearInterval(f)},cM);return()=>clearInterval(f)},[t]);const c=i>=t.length;return r.jsxs(uM,{className:a,children:[t.slice(0,i),!c&&r.jsx(pM,{"aria-hidden":"true",children:"|"})]})}const uM=b.span`
  white-space: nowrap;
`,hM=Oe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,pM=b.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${hM} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,cd=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function fM(){const t=g.useMemo(()=>["All",...Array.from(new Set(cd.map(c=>c.tag)))],[]),[a,i]=g.useState("All"),l=a==="All"?cd:cd.filter(c=>c.tag===a);return r.jsx(mM,{children:r.jsxs(gM,{children:[r.jsxs(vM,{children:[r.jsx(Mt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(yM,{children:[r.jsx(xM,{children:"Memory"}),r.jsx(wM,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(_M,{role:"tablist","aria-label":"Filter memories by category",children:t.map(c=>r.jsx(bM,{type:"button",role:"tab","aria-selected":a===c,$active:a===c,onClick:()=>i(c),children:c},c))}),r.jsx(kM,{children:l.map((c,u)=>r.jsx(CM,{children:r.jsxs(jM,{children:[r.jsx(SM,{children:c.title}),r.jsx(NM,{children:c.detail})]})},u))})]})})}const mM=b.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,gM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,vM=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,yM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,xM=b.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,wM=b.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,_M=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,bM=b.button`
  flex-shrink: 0;
  padding: var(--space-1) var(--space-3);
  border: 1px solid ${t=>t.$active?"var(--color-content-primary)":"var(--color-border-opaque)"};
  border-radius: var(--radius-full);
  background: ${t=>t.$active?"var(--color-content-primary)":"var(--color-bg-primary)"};
  color: ${t=>t.$active?"var(--color-content-inverse)":"var(--color-content-secondary)"};
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease),
              border-color var(--duration-fast, 120ms) var(--ease-out, ease),
              color var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover {
    border-color: ${t=>t.$active?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  }
`,kM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,CM=b.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,jM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,SM=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,NM=b.span`
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;b.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;b.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`;b.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-content-secondary);
`;b.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;b.div`
  padding: var(--space-1) var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;const Rd=[{id:"employees",label:"Employees",icon:r.jsx(To,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx(qr,{size:16})},{id:"locations",label:"Locations",icon:r.jsx(Bf,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(Po,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(Ds,{size:16})}];b.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3) var(--space-4);
`;b.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-1);
`;b.span`
  color: var(--color-content-secondary);
`;function RM({collectionId:t}){const a=Rd.find(i=>i.id===t)??Rd[0];return r.jsxs(LM,{children:[r.jsxs(MM,{children:[r.jsx($M,{children:a.label}),r.jsx(Xa,{children:"Account database"})]}),r.jsxs(IM,{role:"status",children:[r.jsx(TM,{"aria-hidden":"true",children:r.jsx(Ef,{size:24})}),r.jsxs(AM,{children:[a.label," — demo stub"]}),r.jsxs(EM,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const LM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding: var(--space-8) var(--space-4);
  @media (min-width: 1001px) {
    padding-left: 120px;
    padding-right: 120px;
  }
  height: 100%;
  min-height: 0;
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,MM=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,$M=b.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,IM=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,TM=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,AM=b.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,EM=b.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function PM(t){const a=[t.activeId,t.secActiveId];return t.selectedPersonaId&&a.push("persona",t.selectedPersonaId),t.activePageId&&a.push("page",t.activePageId),"#"+a.map(encodeURIComponent).join("/")}function zM(t){const a=t.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(c=>{try{return decodeURIComponent(c)}catch{return c}}),l={};i[0]&&(l.activeId=i[0]),i[1]&&(l.secActiveId=i[1]);for(let c=2;c<i.length-1;c+=2){const u=i[c],p=i[c+1];u==="persona"?l.selectedPersonaId=p:u==="page"&&(l.activePageId=p)}return l}function OM(t,a){const i=g.useRef("");g.useEffect(()=>{const l=()=>{const u=zM(window.location.hash);u.activeId!==void 0&&a.setActiveId(u.activeId),u.secActiveId!==void 0&&a.setSecActiveId(u.secActiveId),a.setSelectedPersonaId(u.selectedPersonaId??null),a.setActivePageId(u.activePageId??null)};window.location.hash&&l();const c=()=>{window.location.hash!==i.current&&l()};return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),g.useEffect(()=>{const l=PM(t);l!==window.location.hash&&(i.current=l,window.history.replaceState(null,"",l))},[t.activeId,t.secActiveId,t.selectedPersonaId,t.activePageId])}const lf=[{id:"ultron",label:"Ultron",icon:r.jsx(Mt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(Yk,{})},{id:"engaged",label:"Engaged",icon:r.jsx(Zk,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(Kk,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(Qk,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(Xk,{})}],cf=[{id:"apps",label:"Apps",icon:r.jsx(Jk,{})}],df=[{id:"docs",label:"Document Studio",icon:r.jsx(eC,{})},{id:"form",label:"Form",icon:r.jsx(tC,{})},{id:"tasks",label:"Tasks",icon:r.jsx(nC,{})},{id:"policy",label:"Policy",icon:r.jsx(rC,{}),activeIcon:r.jsx("img",{src:Rj,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(qo,{}),activeIcon:r.jsx("img",{src:Lj,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(oC,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(aC,{})}],DM=b.button`
  display: block;
  width: 100%;
  margin-bottom: var(--space-2);
  /* Same padding in both states so the card keeps the same height whether or
     not Live is the selected page — only the background marks the active state.
     12px sides align the text with the group rows below. */
  padding: var(--space-2) var(--space-3);
  border: none;
  border-radius: var(--radius-md, 8px);
  background: ${t=>t.$active?"var(--color-bg-secondary, rgba(70, 108, 255, 0.06))":"transparent"};
  text-align: left;
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover { background: var(--color-bg-secondary, rgba(70, 108, 255, 0.06)); }
`,BM=Oe`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,FM=Oe`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,WM=Oe`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,HM=b.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-content-disabled);

  & svg {
    width: 16px;
    height: 16px;
    transform-origin: center;
    /* Spring the rings in while flashing green then settling muted; the "both"
       fill holds the muted end colour once the flash finishes. */
    animation:
      ${BM} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${FM} 1100ms var(--ease-out, ease-out) both;
  }

  /* Radiating halo behind the glyph — the ripple that lands with the pop. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: var(--space-6);
    height: var(--space-6);
    border-radius: var(--radius-full);
    background: var(--color-success-content);
    pointer-events: none;
    animation: ${WM} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,qM={needs_attention:r.jsx(Of,{size:16}),live:r.jsx(Mt,{mark:"lines",size:32,tone:"auto",state:"active"}),resolved:r.jsx(br,{size:16})},UM={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function VM(){const[t,a]=g.useState("ultron"),[i,l]=g.useState("home-overview"),[c,u]=g.useState(null),[p,f]=g.useState(null),[m,x]=g.useState("ultron"),[y,_]=g.useState("employees"),w=wS(),[S,j]=g.useState(!0),N=S?"live":w.selectedThread?UM[w.selectedThread.status]:"new";OM({activeId:t,secActiveId:i,selectedPersonaId:c,activePageId:p},{setActiveId:a,setSecActiveId:l,setSelectedPersonaId:u,setActivePageId:f});const R=$=>$.map(F=>({...F,isActive:F.id===t,onClick:F.id==="ultron"?()=>a("ultron"):void 0})),T=[{id:"memory",label:"Memory",icon:r.jsx(Ps,{size:16}),isActive:m==="memory",onClick:()=>x("memory")},{id:"settings",label:"Settings",icon:r.jsx(Mf,{size:16})}],L=r.jsx(Xm,{children:m==="memory"?"Memory":m==="account"?"Account database":"Ultron"}),C=m==="account"?Rd.map($=>({type:"single",item:{id:$.id,label:$.label,icon:$.icon,isActive:y===$.id,onClick:()=>_($.id)}})):w.groups.flatMap($=>{const F=$.id==="needs_attention"?"new":$.id==="resolved"?"done":"working",P={type:"group",group:{id:$.id,label:$.id==="needs_attention"?"New":$.label,icon:qM[$.id],trailingBadge:r.jsx(Xa,{children:$.threads.length}),defaultExpanded:!0,outlined:!1,maxVisible:$.id==="needs_attention"?5:void 0,children:$.threads.map(B=>({id:B.id,label:B.id.startsWith("detected_")?r.jsx(dM,{text:B.name}):B.name,icon:F==="new"?B.status==="analyzing"?r.jsx(Mt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx(Mt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):F==="working"?r.jsx(Mt,{mark:"lines",size:32,tone:"auto",state:B.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx(Mt,{mark:"pulse",size:32,tone:"auto",state:B.status==="unresolved"?"idle":"static",color:B.status==="unresolved"?"var(--color-orange-content-tertiary)":w.viewedIds.includes(B.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:m==="ultron"&&!S&&N===F&&w.selectedId===B.id,onClick:()=>{x("ultron"),j(!1),w.setSelectedId(B.id)},trailingSlot:w.savedWorkflowIds.includes(B.id)?r.jsx(Kr,{content:"Saved as workflow",placement:"top",children:r.jsx(HM,{"aria-label":"Saved as workflow",children:r.jsx(qo,{})})}):void 0}))}};return $.id==="resolved"?[{type:"divider",id:"done-divider"},P]:$.id==="live"?[{type:"divider",id:"working-divider"},P]:[P]}),A=[{id:"main",label:"Workspace",items:R(lf)},{id:"tools",label:"Tools",items:R(cf)},{id:"bottom",label:"Apps",items:R(df)}];return r.jsx(Nj,{items:R(lf),toolItems:R(cf),bottomItems:R(df),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:C,menuHeader:m==="ultron"?r.jsx(DM,{$active:S,onClick:()=>{x("ultron"),j(!0)},"aria-label":"Live — Ultron presence","aria-current":S?"page":void 0,children:r.jsx(XL,{})}):void 0,pageEntries:T,showSecondaryNav:!0,showTopNav:m!=="ultron",showSearch:!1,heading:L,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:t,secActiveId:i,activePageId:p,selectedPersonaId:c,moduleGroups:A,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:$=>{$==="ultron"&&a("ultron")},onSelectPersona:u},children:m==="memory"?r.jsx(fM,{}):m==="account"?r.jsx(RM,{collectionId:y}):r.jsx(WL,{threads:w.threads,stageById:w.stageById,section:N,analyzedIds:w.analyzedIds,outboundByThread:w.outboundByThread,chatByThread:w.chatByThread,selectedId:w.selectedId,onDecide:w.decide,onAction:w.commit,onCompleteRun:w.completeRun,onRefinement:w.refine,onSaveWorkflow:w.saveWorkflow,pendingWorkflowIds:w.pendingWorkflowIds,onToggleSaveWorkflow:w.toggleWorkflowSave,savedWorkflowIds:w.savedWorkflowIds,onSend:w.sendMessage,replyingIds:w.replyingIds,onStop:w.stopReply,onClose:()=>{x("ultron"),j(!0)},onDetectRisk:w.detectRisk})})}E2.createRoot(document.getElementById("root")).render(r.jsx(wr.StrictMode,{children:r.jsx(X4,{children:r.jsx(VM,{})})}));
