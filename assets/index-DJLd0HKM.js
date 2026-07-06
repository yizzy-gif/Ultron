(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function vf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pc={exports:{}},Aa={},zc={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function O2(){if(Dp)return Me;Dp=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,j={};function S(k,I,Q){this.props=k,this.context=I,this.refs=j,this.updater=Q||$}S.prototype.isReactComponent={},S.prototype.setState=function(k,I){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,I,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function L(){}L.prototype=S.prototype;function N(k,I,Q){this.props=k,this.context=I,this.refs=j,this.updater=Q||$}var C=N.prototype=new L;C.constructor=N,R(C,S.prototype),C.isPureReactComponent=!0;var T=Array.isArray,A=Object.prototype.hasOwnProperty,E={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function O(k,I,Q){var ne,G={},ue=null,K=null;if(I!=null)for(ne in I.ref!==void 0&&(K=I.ref),I.key!==void 0&&(ue=""+I.key),I)A.call(I,ne)&&!z.hasOwnProperty(ne)&&(G[ne]=I[ne]);var re=arguments.length-2;if(re===1)G.children=Q;else if(1<re){for(var fe=Array(re),we=0;we<re;we++)fe[we]=arguments[we+2];G.children=fe}if(k&&k.defaultProps)for(ne in re=k.defaultProps,re)G[ne]===void 0&&(G[ne]=re[ne]);return{$$typeof:t,type:k,key:ue,ref:K,props:G,_owner:E.current}}function U(k,I){return{$$typeof:t,type:k.type,key:I,ref:k.ref,props:k.props,_owner:k._owner}}function Z(k){return typeof k=="object"&&k!==null&&k.$$typeof===t}function X(k){var I={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Q){return I[Q]})}var V=/\/+/g;function te(k,I){return typeof k=="object"&&k!==null&&k.key!=null?X(""+k.key):I.toString(36)}function ie(k,I,Q,ne,G){var ue=typeof k;(ue==="undefined"||ue==="boolean")&&(k=null);var K=!1;if(k===null)K=!0;else switch(ue){case"string":case"number":K=!0;break;case"object":switch(k.$$typeof){case t:case a:K=!0}}if(K)return K=k,G=G(K),k=ne===""?"."+te(K,0):ne,T(G)?(Q="",k!=null&&(Q=k.replace(V,"$&/")+"/"),ie(G,I,Q,"",function(we){return we})):G!=null&&(Z(G)&&(G=U(G,Q+(!G.key||K&&K.key===G.key?"":(""+G.key).replace(V,"$&/")+"/")+k)),I.push(G)),1;if(K=0,ne=ne===""?".":ne+":",T(k))for(var re=0;re<k.length;re++){ue=k[re];var fe=ne+te(ue,re);K+=ie(ue,I,Q,fe,G)}else if(fe=w(k),typeof fe=="function")for(k=fe.call(k),re=0;!(ue=k.next()).done;)ue=ue.value,fe=ne+te(ue,re++),K+=ie(ue,I,Q,fe,G);else if(ue==="object")throw I=String(k),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return K}function ce(k,I,Q){if(k==null)return k;var ne=[],G=0;return ie(k,ne,"","",function(ue){return I.call(Q,ue,G++)}),ne}function se(k){if(k._status===-1){var I=k._result;I=I(),I.then(function(Q){(k._status===0||k._status===-1)&&(k._status=1,k._result=Q)},function(Q){(k._status===0||k._status===-1)&&(k._status=2,k._result=Q)}),k._status===-1&&(k._status=0,k._result=I)}if(k._status===1)return k._result.default;throw k._result}var J={current:null},W={transition:null},P={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:W,ReactCurrentOwner:E};function D(){throw Error("act(...) is not supported in production builds of React.")}return Me.Children={map:ce,forEach:function(k,I,Q){ce(k,function(){I.apply(this,arguments)},Q)},count:function(k){var I=0;return ce(k,function(){I++}),I},toArray:function(k){return ce(k,function(I){return I})||[]},only:function(k){if(!Z(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Me.Component=S,Me.Fragment=i,Me.Profiler=c,Me.PureComponent=N,Me.StrictMode=l,Me.Suspense=m,Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,Me.act=D,Me.cloneElement=function(k,I,Q){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ne=R({},k.props),G=k.key,ue=k.ref,K=k._owner;if(I!=null){if(I.ref!==void 0&&(ue=I.ref,K=E.current),I.key!==void 0&&(G=""+I.key),k.type&&k.type.defaultProps)var re=k.type.defaultProps;for(fe in I)A.call(I,fe)&&!z.hasOwnProperty(fe)&&(ne[fe]=I[fe]===void 0&&re!==void 0?re[fe]:I[fe])}var fe=arguments.length-2;if(fe===1)ne.children=Q;else if(1<fe){re=Array(fe);for(var we=0;we<fe;we++)re[we]=arguments[we+2];ne.children=re}return{$$typeof:t,type:k.type,key:G,ref:ue,props:ne,_owner:K}},Me.createContext=function(k){return k={$$typeof:p,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:u,_context:k},k.Consumer=k},Me.createElement=O,Me.createFactory=function(k){var I=O.bind(null,k);return I.type=k,I},Me.createRef=function(){return{current:null}},Me.forwardRef=function(k){return{$$typeof:f,render:k}},Me.isValidElement=Z,Me.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:se}},Me.memo=function(k,I){return{$$typeof:y,type:k,compare:I===void 0?null:I}},Me.startTransition=function(k){var I=W.transition;W.transition={};try{k()}finally{W.transition=I}},Me.unstable_act=D,Me.useCallback=function(k,I){return J.current.useCallback(k,I)},Me.useContext=function(k){return J.current.useContext(k)},Me.useDebugValue=function(){},Me.useDeferredValue=function(k){return J.current.useDeferredValue(k)},Me.useEffect=function(k,I){return J.current.useEffect(k,I)},Me.useId=function(){return J.current.useId()},Me.useImperativeHandle=function(k,I,Q){return J.current.useImperativeHandle(k,I,Q)},Me.useInsertionEffect=function(k,I){return J.current.useInsertionEffect(k,I)},Me.useLayoutEffect=function(k,I){return J.current.useLayoutEffect(k,I)},Me.useMemo=function(k,I){return J.current.useMemo(k,I)},Me.useReducer=function(k,I,Q){return J.current.useReducer(k,I,Q)},Me.useRef=function(k){return J.current.useRef(k)},Me.useState=function(k){return J.current.useState(k)},Me.useSyncExternalStore=function(k,I,Q){return J.current.useSyncExternalStore(k,I,Q)},Me.useTransition=function(){return J.current.useTransition()},Me.version="18.3.1",Me}var Bp;function Ld(){return Bp||(Bp=1,zc.exports=O2()),zc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function D2(){if(Fp)return Aa;Fp=1;var t=Ld(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,m,y){var x,_={},w=null,$=null;y!==void 0&&(w=""+y),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&($=m.ref);for(x in m)l.call(m,x)&&!u.hasOwnProperty(x)&&(_[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)_[x]===void 0&&(_[x]=m[x]);return{$$typeof:a,type:f,key:w,ref:$,props:_,_owner:c.current}}return Aa.Fragment=i,Aa.jsx=p,Aa.jsxs=p,Aa}var Wp;function B2(){return Wp||(Wp=1,Pc.exports=D2()),Pc.exports}var r=B2(),g=Ld();const xr=vf(g);var ds={},Oc={exports:{}},Ht={},Dc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function F2(){return Hp||(Hp=1,(function(t){function a(W,P){var D=W.length;W.push(P);e:for(;0<D;){var k=D-1>>>1,I=W[k];if(0<c(I,P))W[k]=P,W[D]=I,D=k;else break e}}function i(W){return W.length===0?null:W[0]}function l(W){if(W.length===0)return null;var P=W[0],D=W.pop();if(D!==P){W[0]=D;e:for(var k=0,I=W.length,Q=I>>>1;k<Q;){var ne=2*(k+1)-1,G=W[ne],ue=ne+1,K=W[ue];if(0>c(G,D))ue<I&&0>c(K,G)?(W[k]=K,W[ue]=D,k=ue):(W[k]=G,W[ne]=D,k=ne);else if(ue<I&&0>c(K,D))W[k]=K,W[ue]=D,k=ue;else break e}}return P}function c(W,P){var D=W.sortIndex-P.sortIndex;return D!==0?D:W.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var p=Date,f=p.now();t.unstable_now=function(){return p.now()-f}}var m=[],y=[],x=1,_=null,w=3,$=!1,R=!1,j=!1,S=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(W){for(var P=i(y);P!==null;){if(P.callback===null)l(y);else if(P.startTime<=W)l(y),P.sortIndex=P.expirationTime,a(m,P);else break;P=i(y)}}function T(W){if(j=!1,C(W),!R)if(i(m)!==null)R=!0,se(A);else{var P=i(y);P!==null&&J(T,P.startTime-W)}}function A(W,P){R=!1,j&&(j=!1,L(O),O=-1),$=!0;var D=w;try{for(C(P),_=i(m);_!==null&&(!(_.expirationTime>P)||W&&!X());){var k=_.callback;if(typeof k=="function"){_.callback=null,w=_.priorityLevel;var I=k(_.expirationTime<=P);P=t.unstable_now(),typeof I=="function"?_.callback=I:_===i(m)&&l(m),C(P)}else l(m);_=i(m)}if(_!==null)var Q=!0;else{var ne=i(y);ne!==null&&J(T,ne.startTime-P),Q=!1}return Q}finally{_=null,w=D,$=!1}}var E=!1,z=null,O=-1,U=5,Z=-1;function X(){return!(t.unstable_now()-Z<U)}function V(){if(z!==null){var W=t.unstable_now();Z=W;var P=!0;try{P=z(!0,W)}finally{P?te():(E=!1,z=null)}}else E=!1}var te;if(typeof N=="function")te=function(){N(V)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ce=ie.port2;ie.port1.onmessage=V,te=function(){ce.postMessage(null)}}else te=function(){S(V,0)};function se(W){z=W,E||(E=!0,te())}function J(W,P){O=S(function(){W(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){R||$||(R=!0,se(A))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return i(m)},t.unstable_next=function(W){switch(w){case 1:case 2:case 3:var P=3;break;default:P=w}var D=w;w=P;try{return W()}finally{w=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,P){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var D=w;w=W;try{return P()}finally{w=D}},t.unstable_scheduleCallback=function(W,P,D){var k=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?k+D:k):D=k,W){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=D+I,W={id:x++,callback:P,priorityLevel:W,startTime:D,expirationTime:I,sortIndex:-1},D>k?(W.sortIndex=D,a(y,W),i(m)===null&&W===i(y)&&(j?(L(O),O=-1):j=!0,J(T,D-k))):(W.sortIndex=I,a(m,W),R||$||(R=!0,se(A))),W},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(W){var P=w;return function(){var D=w;w=P;try{return W.apply(this,arguments)}finally{w=D}}}})(Bc)),Bc}var qp;function W2(){return qp||(qp=1,Dc.exports=F2()),Dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function H2(){if(Up)return Ht;Up=1;var t=Ld(),a=W2();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function u(e,n){p(e,n),p(e+"Capture",n)}function p(e,n){for(c[e]=n,e=0;e<n.length;e++)l.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function w(e){return m.call(_,e)?!0:m.call(x,e)?!1:y.test(e)?_[e]=!0:(x[e]=!0,!1)}function $(e,n,o,s){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R(e,n,o,s){if(n===null||typeof n>"u"||$(e,n,o,s))return!0;if(s)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function j(e,n,o,s,d,h,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=v}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new j(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];S[n]=new j(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new j(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new j(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new j(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new j(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function N(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(L,N);S[n]=new j(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(L,N);S[n]=new j(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(L,N);S[n]=new j(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)});function C(e,n,o,s){var d=S.hasOwnProperty(n)?S[n]:null;(d!==null?d.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(R(n,o,d,s)&&(o=null),s||d===null?w(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):d.mustUseProperty?e[d.propertyName]=o===null?d.type===3?!1:"":o:(n=d.attributeName,s=d.attributeNamespace,o===null?e.removeAttribute(n):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,s?e.setAttributeNS(s,n,o):e.setAttribute(n,o))))}var T=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),E=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),X=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),W=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,k;function I(e){if(k===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);k=n&&n[1]||""}return`
`+k+e}var Q=!1;function ne(e,n){if(!e||Q)return"";Q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Y){var s=Y}Reflect.construct(e,[],n)}else{try{n.call()}catch(Y){s=Y}e.call(n.prototype)}else{try{throw Error()}catch(Y){s=Y}e()}}catch(Y){if(Y&&s&&typeof Y.stack=="string"){for(var d=Y.stack.split(`
`),h=s.stack.split(`
`),v=d.length-1,M=h.length-1;1<=v&&0<=M&&d[v]!==h[M];)M--;for(;1<=v&&0<=M;v--,M--)if(d[v]!==h[M]){if(v!==1||M!==1)do if(v--,M--,0>M||d[v]!==h[M]){var B=`
`+d[v].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=v&&0<=M);break}}}finally{Q=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?I(e):""}function G(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=ne(e.type,!1),e;case 11:return e=ne(e.type.render,!1),e;case 1:return e=ne(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case E:return"Portal";case U:return"Profiler";case O:return"StrictMode";case te:return"Suspense";case ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X:return(e.displayName||"Context")+".Consumer";case Z:return(e._context.displayName||"Context")+".Provider";case V:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ce:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case se:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}function K(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(n);case 8:return n===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(e){var n=fe(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){s=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function he(e){e._valueTracker||(e._valueTracker=we(e))}function ve(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),s="";return e&&(s=fe(e)?e.checked?"true":"false":e.value),e=s,e!==o?(n.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Se(e,n){var o=n.checked;return D({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ae(e,n){var o=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;o=re(n.value!=null?n.value:o),e._wrapperState={initialChecked:s,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Be(e,n){n=n.checked,n!=null&&C(e,"checked",n,!1)}function Fe(e,n){Be(e,n);var o=re(n.value),s=n.type;if(o!=null)s==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ue(e,n.type,o):n.hasOwnProperty("defaultValue")&&Ue(e,n.type,re(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ve(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Ue(e,n,o){(n!=="number"||je(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var rt=Array.isArray;function Ze(e,n,o,s){if(e=e.options,n){n={};for(var d=0;d<o.length;d++)n["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=n.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&s&&(e[o].defaultSelected=!0)}else{for(o=""+re(o),n=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,s&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function $t(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return D({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function We(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(rt(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:re(o)}}function Tt(e,n){var o=re(n.value),s=re(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),s!=null&&(e.defaultValue=""+s)}function bt(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function kn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cn(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?kn(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Zo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,s,d){MSApp.execUnsafeLocalFunction(function(){return e(n,o,s,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function no(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xs=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Xs.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jr[n]=jr[e]})});function ni(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||jr.hasOwnProperty(e)&&jr[e]?(""+n).trim():n+"px"}function Ne(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var s=o.indexOf("--")===0,d=ni(o,n[o],s);o==="float"&&(o="cssFloat"),s?e.setProperty(o,d):e[o]=d}}var Je=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lt(e,n){if(n){if(Je[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function It(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sr=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,ro=null,oo=null;function nu(e){if(e=xa(e)){if(typeof Qo!="function")throw Error(i(280));var n=e.stateNode;n&&(n=ji(n),Qo(e.stateNode,e.type,n))}}function ru(e){ro?oo?oo.push(e):oo=[e]:ro=e}function ou(){if(ro){var e=ro,n=oo;if(oo=ro=null,nu(e),n)for(e=0;e<n.length;e++)nu(n[e])}}function au(e,n){return e(n)}function iu(){}var Js=!1;function su(e,n,o){if(Js)return e(n,o);Js=!0;try{return au(e,n,o)}finally{Js=!1,(ro!==null||oo!==null)&&(iu(),ou())}}function Xo(e,n){var o=e.stateNode;if(o===null)return null;var s=ji(o);if(s===null)return null;o=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var el=!1;if(f)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){el=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{el=!1}function q0(e,n,o,s,d,h,v,M,B){var Y=Array.prototype.slice.call(arguments,3);try{n.apply(o,Y)}catch(ae){this.onError(ae)}}var ea=!1,ri=null,oi=!1,tl=null,U0={onError:function(e){ea=!0,ri=e}};function V0(e,n,o,s,d,h,v,M,B){ea=!1,ri=null,q0.apply(U0,arguments)}function G0(e,n,o,s,d,h,v,M,B){if(V0.apply(this,arguments),ea){if(ea){var Y=ri;ea=!1,ri=null}else throw Error(i(198));oi||(oi=!0,tl=Y)}}function Nr(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function lu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function cu(e){if(Nr(e)!==e)throw Error(i(188))}function Y0(e){var n=e.alternate;if(!n){if(n=Nr(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,s=n;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(s=d.return,s!==null){o=s;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return cu(d),e;if(h===s)return cu(d),n;h=h.sibling}throw Error(i(188))}if(o.return!==s.return)o=d,s=h;else{for(var v=!1,M=d.child;M;){if(M===o){v=!0,o=d,s=h;break}if(M===s){v=!0,s=d,o=h;break}M=M.sibling}if(!v){for(M=h.child;M;){if(M===o){v=!0,o=h,s=d;break}if(M===s){v=!0,s=h,o=d;break}M=M.sibling}if(!v)throw Error(i(189))}}if(o.alternate!==s)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function du(e){return e=Y0(e),e!==null?uu(e):null}function uu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=uu(e);if(n!==null)return n;e=e.sibling}return null}var hu=a.unstable_scheduleCallback,pu=a.unstable_cancelCallback,Z0=a.unstable_shouldYield,K0=a.unstable_requestPaint,at=a.unstable_now,Q0=a.unstable_getCurrentPriorityLevel,nl=a.unstable_ImmediatePriority,fu=a.unstable_UserBlockingPriority,ai=a.unstable_NormalPriority,X0=a.unstable_LowPriority,mu=a.unstable_IdlePriority,ii=null,jn=null;function J0(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:ng,eg=Math.log,tg=Math.LN2;function ng(e){return e>>>=0,e===0?32:31-(eg(e)/tg|0)|0}var si=64,li=4194304;function ta(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,n){var o=e.pendingLanes;if(o===0)return 0;var s=0,d=e.suspendedLanes,h=e.pingedLanes,v=o&268435455;if(v!==0){var M=v&~d;M!==0?s=ta(M):(h&=v,h!==0&&(s=ta(h)))}else v=o&~d,v!==0?s=ta(v):h!==0&&(s=ta(h));if(s===0)return 0;if(n!==0&&n!==s&&(n&d)===0&&(d=s&-s,h=n&-n,d>=h||d===16&&(h&4194240)!==0))return n;if((s&4)!==0&&(s|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)o=31-hn(n),d=1<<o,s|=e[o],n&=~d;return s}function rg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function og(e,n){for(var o=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes;0<h;){var v=31-hn(h),M=1<<v,B=d[v];B===-1?((M&o)===0||(M&s)!==0)&&(d[v]=rg(M,n)):B<=n&&(e.expiredLanes|=M),h&=~M}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=si;return si<<=1,(si&4194240)===0&&(si=64),e}function ol(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function na(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-hn(n),e[n]=o}function ag(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<o;){var d=31-hn(o),h=1<<d;n[d]=0,s[d]=-1,e[d]=-1,o&=~h}}function al(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var s=31-hn(o),d=1<<s;d&n|e[s]&n&&(e[s]|=n),o&=~d}}var He=0;function vu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var yu,il,xu,wu,_u,sl=!1,di=[],Zn=null,Kn=null,Qn=null,ra=new Map,oa=new Map,Xn=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bu(e,n){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":ra.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(n.pointerId)}}function aa(e,n,o,s,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:o,eventSystemFlags:s,nativeEvent:h,targetContainers:[d]},n!==null&&(n=xa(n),n!==null&&il(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function sg(e,n,o,s,d){switch(n){case"focusin":return Zn=aa(Zn,e,n,o,s,d),!0;case"dragenter":return Kn=aa(Kn,e,n,o,s,d),!0;case"mouseover":return Qn=aa(Qn,e,n,o,s,d),!0;case"pointerover":var h=d.pointerId;return ra.set(h,aa(ra.get(h)||null,e,n,o,s,d)),!0;case"gotpointercapture":return h=d.pointerId,oa.set(h,aa(oa.get(h)||null,e,n,o,s,d)),!0}return!1}function ku(e){var n=Rr(e.target);if(n!==null){var o=Nr(n);if(o!==null){if(n=o.tag,n===13){if(n=lu(o),n!==null){e.blockedOn=n,_u(e.priority,function(){xu(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=cl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var s=new o.constructor(o.type,o);Sr=s,o.target.dispatchEvent(s),Sr=null}else return n=xa(o),n!==null&&il(n),e.blockedOn=o,!1;n.shift()}return!0}function Cu(e,n,o){ui(e)&&o.delete(n)}function lg(){sl=!1,Zn!==null&&ui(Zn)&&(Zn=null),Kn!==null&&ui(Kn)&&(Kn=null),Qn!==null&&ui(Qn)&&(Qn=null),ra.forEach(Cu),oa.forEach(Cu)}function ia(e,n){e.blockedOn===n&&(e.blockedOn=null,sl||(sl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,lg)))}function sa(e){function n(d){return ia(d,e)}if(0<di.length){ia(di[0],e);for(var o=1;o<di.length;o++){var s=di[o];s.blockedOn===e&&(s.blockedOn=null)}}for(Zn!==null&&ia(Zn,e),Kn!==null&&ia(Kn,e),Qn!==null&&ia(Qn,e),ra.forEach(n),oa.forEach(n),o=0;o<Xn.length;o++)s=Xn[o],s.blockedOn===e&&(s.blockedOn=null);for(;0<Xn.length&&(o=Xn[0],o.blockedOn===null);)ku(o),o.blockedOn===null&&Xn.shift()}var ao=T.ReactCurrentBatchConfig,hi=!0;function cg(e,n,o,s){var d=He,h=ao.transition;ao.transition=null;try{He=1,ll(e,n,o,s)}finally{He=d,ao.transition=h}}function dg(e,n,o,s){var d=He,h=ao.transition;ao.transition=null;try{He=4,ll(e,n,o,s)}finally{He=d,ao.transition=h}}function ll(e,n,o,s){if(hi){var d=cl(e,n,o,s);if(d===null)Sl(e,n,s,pi,o),bu(e,s);else if(sg(d,e,n,o,s))s.stopPropagation();else if(bu(e,s),n&4&&-1<ig.indexOf(e)){for(;d!==null;){var h=xa(d);if(h!==null&&yu(h),h=cl(e,n,o,s),h===null&&Sl(e,n,s,pi,o),h===d)break;d=h}d!==null&&s.stopPropagation()}else Sl(e,n,s,null,o)}}var pi=null;function cl(e,n,o,s){if(pi=null,e=Ko(s),e=Rr(e),e!==null)if(n=Nr(e),n===null)e=null;else if(o=n.tag,o===13){if(e=lu(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return pi=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q0()){case nl:return 1;case fu:return 4;case ai:case X0:return 16;case mu:return 536870912;default:return 16}default:return 16}}var Jn=null,dl=null,fi=null;function Su(){if(fi)return fi;var e,n=dl,o=n.length,s,d="value"in Jn?Jn.value:Jn.textContent,h=d.length;for(e=0;e<o&&n[e]===d[e];e++);var v=o-e;for(s=1;s<=v&&n[o-s]===d[h-s];s++);return fi=d.slice(e,1<s?1-s:void 0)}function mi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function Nu(){return!1}function Yt(e){function n(o,s,d,h,v){this._reactName=o,this._targetInst=d,this.type=s,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var M in e)e.hasOwnProperty(M)&&(o=e[M],this[M]=o?o(h):h[M]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?gi:Nu,this.isPropagationStopped=Nu,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),n}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Yt(io),la=D({},io,{view:0,detail:0}),ug=Yt(la),hl,pl,ca,vi=D({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ca&&(ca&&e.type==="mousemove"?(hl=e.screenX-ca.screenX,pl=e.screenY-ca.screenY):pl=hl=0,ca=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Ru=Yt(vi),hg=D({},vi,{dataTransfer:0}),pg=Yt(hg),fg=D({},la,{relatedTarget:0}),fl=Yt(fg),mg=D({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=Yt(mg),vg=D({},io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yg=Yt(vg),xg=D({},io,{data:0}),Lu=Yt(xg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=bg[e])?!!n[e]:!1}function ml(){return kg}var Cg=D({},la,{key:function(e){if(e.key){var n=wg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_g[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jg=Yt(Cg),Sg=D({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Yt(Sg),Ng=D({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),Rg=Yt(Ng),Lg=D({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mg=Yt(Lg),$g=D({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tg=Yt($g),Ig=[9,13,27,32],gl=f&&"CompositionEvent"in window,da=null;f&&"documentMode"in document&&(da=document.documentMode);var Ag=f&&"TextEvent"in window&&!da,$u=f&&(!gl||da&&8<da&&11>=da),Tu=" ",Iu=!1;function Au(e,n){switch(e){case"keyup":return Ig.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var so=!1;function Eg(e,n){switch(e){case"compositionend":return Eu(n);case"keypress":return n.which!==32?null:(Iu=!0,Tu);case"textInput":return e=n.data,e===Tu&&Iu?null:e;default:return null}}function Pg(e,n){if(so)return e==="compositionend"||!gl&&Au(e,n)?(e=Su(),fi=dl=Jn=null,so=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $u&&n.locale!=="ko"?null:n.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zg[e.type]:n==="textarea"}function zu(e,n,o,s){ru(s),n=bi(n,"onChange"),0<n.length&&(o=new ul("onChange","change",null,o,s),e.push({event:o,listeners:n}))}var ua=null,ha=null;function Og(e){th(e,0)}function yi(e){var n=po(e);if(ve(n))return e}function Dg(e,n){if(e==="change")return n}var Ou=!1;if(f){var vl;if(f){var yl="oninput"in document;if(!yl){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),yl=typeof Du.oninput=="function"}vl=yl}else vl=!1;Ou=vl&&(!document.documentMode||9<document.documentMode)}function Bu(){ua&&(ua.detachEvent("onpropertychange",Fu),ha=ua=null)}function Fu(e){if(e.propertyName==="value"&&yi(ha)){var n=[];zu(n,ha,e,Ko(e)),su(Og,n)}}function Bg(e,n,o){e==="focusin"?(Bu(),ua=n,ha=o,ua.attachEvent("onpropertychange",Fu)):e==="focusout"&&Bu()}function Fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(ha)}function Wg(e,n){if(e==="click")return yi(n)}function Hg(e,n){if(e==="input"||e==="change")return yi(n)}function qg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:qg;function pa(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),s=Object.keys(n);if(o.length!==s.length)return!1;for(s=0;s<o.length;s++){var d=o[s];if(!m.call(n,d)||!pn(e[d],n[d]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,n){var o=Wu(e);e=0;for(var s;o;){if(o.nodeType===3){if(s=e+o.textContent.length,e<=n&&s>=n)return{node:o,offset:n-e};e=s}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Wu(o)}}function qu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Uu(){for(var e=window,n=je();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=je(e.document)}return n}function xl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ug(e){var n=Uu(),o=e.focusedElem,s=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&qu(o.ownerDocument.documentElement,o)){if(s!==null&&xl(o)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=o.textContent.length,h=Math.min(s.start,d);s=s.end===void 0?h:Math.min(s.end,d),!e.extend&&h>s&&(d=s,s=h,h=d),d=Hu(o,h);var v=Hu(o,s);d&&v&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),h>s?(e.addRange(n),e.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vg=f&&"documentMode"in document&&11>=document.documentMode,lo=null,wl=null,fa=null,_l=!1;function Vu(e,n,o){var s=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_l||lo==null||lo!==je(s)||(s=lo,"selectionStart"in s&&xl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),fa&&pa(fa,s)||(fa=s,s=bi(wl,"onSelect"),0<s.length&&(n=new ul("onSelect","select",null,n,o),e.push({event:n,listeners:s}),n.target=lo)))}function xi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var co={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},bl={},Gu={};f&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function wi(e){if(bl[e])return bl[e];if(!co[e])return e;var n=co[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Gu)return bl[e]=n[o];return e}var Yu=wi("animationend"),Zu=wi("animationiteration"),Ku=wi("animationstart"),Qu=wi("transitionend"),Xu=new Map,Ju="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,n){Xu.set(e,n),u(n,[e])}for(var kl=0;kl<Ju.length;kl++){var Cl=Ju[kl],Gg=Cl.toLowerCase(),Yg=Cl[0].toUpperCase()+Cl.slice(1);er(Gg,"on"+Yg)}er(Yu,"onAnimationEnd"),er(Zu,"onAnimationIteration"),er(Ku,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Qu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function eh(e,n,o){var s=e.type||"unknown-event";e.currentTarget=o,G0(s,n,void 0,e),e.currentTarget=null}function th(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var s=e[o],d=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var v=s.length-1;0<=v;v--){var M=s[v],B=M.instance,Y=M.currentTarget;if(M=M.listener,B!==h&&d.isPropagationStopped())break e;eh(d,M,Y),h=B}else for(v=0;v<s.length;v++){if(M=s[v],B=M.instance,Y=M.currentTarget,M=M.listener,B!==h&&d.isPropagationStopped())break e;eh(d,M,Y),h=B}}}if(oi)throw e=tl,oi=!1,tl=null,e}function Ke(e,n){var o=n[Tl];o===void 0&&(o=n[Tl]=new Set);var s=e+"__bubble";o.has(s)||(nh(n,e,2,!1),o.add(s))}function jl(e,n,o){var s=0;n&&(s|=4),nh(o,e,s,n)}var _i="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[_i]){e[_i]=!0,l.forEach(function(o){o!=="selectionchange"&&(Zg.has(o)||jl(o,!1,e),jl(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_i]||(n[_i]=!0,jl("selectionchange",!1,n))}}function nh(e,n,o,s){switch(ju(n)){case 1:var d=cg;break;case 4:d=dg;break;default:d=ll}o=d.bind(null,n,o,e),d=void 0,!el||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),s?d!==void 0?e.addEventListener(n,o,{capture:!0,passive:d}):e.addEventListener(n,o,!0):d!==void 0?e.addEventListener(n,o,{passive:d}):e.addEventListener(n,o,!1)}function Sl(e,n,o,s,d){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var M=s.stateNode.containerInfo;if(M===d||M.nodeType===8&&M.parentNode===d)break;if(v===4)for(v=s.return;v!==null;){var B=v.tag;if((B===3||B===4)&&(B=v.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;v=v.return}for(;M!==null;){if(v=Rr(M),v===null)return;if(B=v.tag,B===5||B===6){s=h=v;continue e}M=M.parentNode}}s=s.return}su(function(){var Y=h,ae=Ko(o),le=[];e:{var oe=Xu.get(e);if(oe!==void 0){var pe=ul,ge=e;switch(e){case"keypress":if(mi(o)===0)break e;case"keydown":case"keyup":pe=jg;break;case"focusin":ge="focus",pe=fl;break;case"focusout":ge="blur",pe=fl;break;case"beforeblur":case"afterblur":pe=fl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=Rg;break;case Yu:case Zu:case Ku:pe=gg;break;case Qu:pe=Mg;break;case"scroll":pe=ug;break;case"wheel":pe=Tg;break;case"copy":case"cut":case"paste":pe=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Mu}var ye=(n&4)!==0,it=!ye&&e==="scroll",H=ye?oe!==null?oe+"Capture":null:oe;ye=[];for(var F=Y,q;F!==null;){q=F;var de=q.stateNode;if(q.tag===5&&de!==null&&(q=de,H!==null&&(de=Xo(F,H),de!=null&&ye.push(va(F,de,q)))),it)break;F=F.return}0<ye.length&&(oe=new pe(oe,ge,null,o,ae),le.push({event:oe,listeners:ye}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",oe&&o!==Sr&&(ge=o.relatedTarget||o.fromElement)&&(Rr(ge)||ge[Pn]))break e;if((pe||oe)&&(oe=ae.window===ae?ae:(oe=ae.ownerDocument)?oe.defaultView||oe.parentWindow:window,pe?(ge=o.relatedTarget||o.toElement,pe=Y,ge=ge?Rr(ge):null,ge!==null&&(it=Nr(ge),ge!==it||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(pe=null,ge=Y),pe!==ge)){if(ye=Ru,de="onMouseLeave",H="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Mu,de="onPointerLeave",H="onPointerEnter",F="pointer"),it=pe==null?oe:po(pe),q=ge==null?oe:po(ge),oe=new ye(de,F+"leave",pe,o,ae),oe.target=it,oe.relatedTarget=q,de=null,Rr(ae)===Y&&(ye=new ye(H,F+"enter",ge,o,ae),ye.target=q,ye.relatedTarget=it,de=ye),it=de,pe&&ge)t:{for(ye=pe,H=ge,F=0,q=ye;q;q=uo(q))F++;for(q=0,de=H;de;de=uo(de))q++;for(;0<F-q;)ye=uo(ye),F--;for(;0<q-F;)H=uo(H),q--;for(;F--;){if(ye===H||H!==null&&ye===H.alternate)break t;ye=uo(ye),H=uo(H)}ye=null}else ye=null;pe!==null&&rh(le,oe,pe,ye,!1),ge!==null&&it!==null&&rh(le,it,ge,ye,!0)}}e:{if(oe=Y?po(Y):window,pe=oe.nodeName&&oe.nodeName.toLowerCase(),pe==="select"||pe==="input"&&oe.type==="file")var xe=Dg;else if(Pu(oe))if(Ou)xe=Hg;else{xe=Fg;var _e=Bg}else(pe=oe.nodeName)&&pe.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(xe=Wg);if(xe&&(xe=xe(e,Y))){zu(le,xe,o,ae);break e}_e&&_e(e,oe,Y),e==="focusout"&&(_e=oe._wrapperState)&&_e.controlled&&oe.type==="number"&&Ue(oe,"number",oe.value)}switch(_e=Y?po(Y):window,e){case"focusin":(Pu(_e)||_e.contentEditable==="true")&&(lo=_e,wl=Y,fa=null);break;case"focusout":fa=wl=lo=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Vu(le,o,ae);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":Vu(le,o,ae)}var be;if(gl)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else so?Au(e,o)&&(ke="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(ke="onCompositionStart");ke&&($u&&o.locale!=="ko"&&(so||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&so&&(be=Su()):(Jn=ae,dl="value"in Jn?Jn.value:Jn.textContent,so=!0)),_e=bi(Y,ke),0<_e.length&&(ke=new Lu(ke,e,null,o,ae),le.push({event:ke,listeners:_e}),be?ke.data=be:(be=Eu(o),be!==null&&(ke.data=be)))),(be=Ag?Eg(e,o):Pg(e,o))&&(Y=bi(Y,"onBeforeInput"),0<Y.length&&(ae=new Lu("onBeforeInput","beforeinput",null,o,ae),le.push({event:ae,listeners:Y}),ae.data=be))}th(le,n)})}function va(e,n,o){return{instance:e,listener:n,currentTarget:o}}function bi(e,n){for(var o=n+"Capture",s=[];e!==null;){var d=e,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Xo(e,o),h!=null&&s.unshift(va(e,h,d)),h=Xo(e,n),h!=null&&s.push(va(e,h,d))),e=e.return}return s}function uo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rh(e,n,o,s,d){for(var h=n._reactName,v=[];o!==null&&o!==s;){var M=o,B=M.alternate,Y=M.stateNode;if(B!==null&&B===s)break;M.tag===5&&Y!==null&&(M=Y,d?(B=Xo(o,h),B!=null&&v.unshift(va(o,B,M))):d||(B=Xo(o,h),B!=null&&v.push(va(o,B,M)))),o=o.return}v.length!==0&&e.push({event:n,listeners:v})}var Kg=/\r\n?/g,Qg=/\u0000|\uFFFD/g;function oh(e){return(typeof e=="string"?e:""+e).replace(Kg,`
`).replace(Qg,"")}function ki(e,n,o){if(n=oh(n),oh(e)!==n&&o)throw Error(i(425))}function Ci(){}var Nl=null,Rl=null;function Ll(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,Xg=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(e){return ah.resolve(null).then(e).catch(e2)}:Ml;function e2(e){setTimeout(function(){throw e})}function $l(e,n){var o=n,s=0;do{var d=o.nextSibling;if(e.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(s===0){e.removeChild(d),sa(n);return}s--}else o!=="$"&&o!=="$?"&&o!=="$!"||s++;o=d}while(o);sa(n)}function tr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ih(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var ho=Math.random().toString(36).slice(2),Sn="__reactFiber$"+ho,ya="__reactProps$"+ho,Pn="__reactContainer$"+ho,Tl="__reactEvents$"+ho,t2="__reactListeners$"+ho,n2="__reactHandles$"+ho;function Rr(e){var n=e[Sn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Pn]||o[Sn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=ih(e);e!==null;){if(o=e[Sn])return o;e=ih(e)}return n}e=o,o=e.parentNode}return null}function xa(e){return e=e[Sn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function po(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function ji(e){return e[ya]||null}var Il=[],fo=-1;function nr(e){return{current:e}}function Qe(e){0>fo||(e.current=Il[fo],Il[fo]=null,fo--)}function Ge(e,n){fo++,Il[fo]=e.current,e.current=n}var rr={},jt=nr(rr),Ot=nr(!1),Lr=rr;function mo(e,n){var o=e.type.contextTypes;if(!o)return rr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=n[h];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function Dt(e){return e=e.childContextTypes,e!=null}function Si(){Qe(Ot),Qe(jt)}function sh(e,n,o){if(jt.current!==rr)throw Error(i(168));Ge(jt,n),Ge(Ot,o)}function lh(e,n,o){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return o;s=s.getChildContext();for(var d in s)if(!(d in n))throw Error(i(108,K(e)||"Unknown",d));return D({},o,s)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rr,Lr=jt.current,Ge(jt,e),Ge(Ot,Ot.current),!0}function ch(e,n,o){var s=e.stateNode;if(!s)throw Error(i(169));o?(e=lh(e,n,Lr),s.__reactInternalMemoizedMergedChildContext=e,Qe(Ot),Qe(jt),Ge(jt,e)):Qe(Ot),Ge(Ot,o)}var zn=null,Ri=!1,Al=!1;function dh(e){zn===null?zn=[e]:zn.push(e)}function r2(e){Ri=!0,dh(e)}function or(){if(!Al&&zn!==null){Al=!0;var e=0,n=He;try{var o=zn;for(He=1;e<o.length;e++){var s=o[e];do s=s(!0);while(s!==null)}zn=null,Ri=!1}catch(d){throw zn!==null&&(zn=zn.slice(e+1)),hu(nl,or),d}finally{He=n,Al=!1}}return null}var go=[],vo=0,Li=null,Mi=0,nn=[],rn=0,Mr=null,On=1,Dn="";function $r(e,n){go[vo++]=Mi,go[vo++]=Li,Li=e,Mi=n}function uh(e,n,o){nn[rn++]=On,nn[rn++]=Dn,nn[rn++]=Mr,Mr=e;var s=On;e=Dn;var d=32-hn(s)-1;s&=~(1<<d),o+=1;var h=32-hn(n)+d;if(30<h){var v=d-d%5;h=(s&(1<<v)-1).toString(32),s>>=v,d-=v,On=1<<32-hn(n)+d|o<<d|s,Dn=h+e}else On=1<<h|o<<d|s,Dn=e}function El(e){e.return!==null&&($r(e,1),uh(e,1,0))}function Pl(e){for(;e===Li;)Li=go[--vo],go[vo]=null,Mi=go[--vo],go[vo]=null;for(;e===Mr;)Mr=nn[--rn],nn[rn]=null,Dn=nn[--rn],nn[rn]=null,On=nn[--rn],nn[rn]=null}var Zt=null,Kt=null,et=!1,fn=null;function hh(e,n){var o=ln(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function ph(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Zt=e,Kt=tr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Zt=e,Kt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Mr!==null?{id:On,overflow:Dn}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=ln(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,Zt=e,Kt=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(et){var n=Kt;if(n){var o=n;if(!ph(e,n)){if(zl(e))throw Error(i(418));n=tr(o.nextSibling);var s=Zt;n&&ph(e,n)?hh(s,o):(e.flags=e.flags&-4097|2,et=!1,Zt=e)}}else{if(zl(e))throw Error(i(418));e.flags=e.flags&-4097|2,et=!1,Zt=e}}}function fh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}function $i(e){if(e!==Zt)return!1;if(!et)return fh(e),et=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ll(e.type,e.memoizedProps)),n&&(n=Kt)){if(zl(e))throw mh(),Error(i(418));for(;n;)hh(e,n),n=tr(n.nextSibling)}if(fh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){Kt=tr(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}Kt=null}}else Kt=Zt?tr(e.stateNode.nextSibling):null;return!0}function mh(){for(var e=Kt;e;)e=tr(e.nextSibling)}function yo(){Kt=Zt=null,et=!1}function Dl(e){fn===null?fn=[e]:fn.push(e)}var o2=T.ReactCurrentBatchConfig;function wa(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var s=o.stateNode}if(!s)throw Error(i(147,e));var d=s,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(v){var M=d.refs;v===null?delete M[h]:M[h]=v},n._stringRef=h,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Ti(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gh(e){var n=e._init;return n(e._payload)}function vh(e){function n(H,F){if(e){var q=H.deletions;q===null?(H.deletions=[F],H.flags|=16):q.push(F)}}function o(H,F){if(!e)return null;for(;F!==null;)n(H,F),F=F.sibling;return null}function s(H,F){for(H=new Map;F!==null;)F.key!==null?H.set(F.key,F):H.set(F.index,F),F=F.sibling;return H}function d(H,F){return H=hr(H,F),H.index=0,H.sibling=null,H}function h(H,F,q){return H.index=q,e?(q=H.alternate,q!==null?(q=q.index,q<F?(H.flags|=2,F):q):(H.flags|=2,F)):(H.flags|=1048576,F)}function v(H){return e&&H.alternate===null&&(H.flags|=2),H}function M(H,F,q,de){return F===null||F.tag!==6?(F=Mc(q,H.mode,de),F.return=H,F):(F=d(F,q),F.return=H,F)}function B(H,F,q,de){var xe=q.type;return xe===z?ae(H,F,q.props.children,de,q.key):F!==null&&(F.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===se&&gh(xe)===F.type)?(de=d(F,q.props),de.ref=wa(H,F,q),de.return=H,de):(de=ns(q.type,q.key,q.props,null,H.mode,de),de.ref=wa(H,F,q),de.return=H,de)}function Y(H,F,q,de){return F===null||F.tag!==4||F.stateNode.containerInfo!==q.containerInfo||F.stateNode.implementation!==q.implementation?(F=$c(q,H.mode,de),F.return=H,F):(F=d(F,q.children||[]),F.return=H,F)}function ae(H,F,q,de,xe){return F===null||F.tag!==7?(F=Dr(q,H.mode,de,xe),F.return=H,F):(F=d(F,q),F.return=H,F)}function le(H,F,q){if(typeof F=="string"&&F!==""||typeof F=="number")return F=Mc(""+F,H.mode,q),F.return=H,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case A:return q=ns(F.type,F.key,F.props,null,H.mode,q),q.ref=wa(H,null,F),q.return=H,q;case E:return F=$c(F,H.mode,q),F.return=H,F;case se:var de=F._init;return le(H,de(F._payload),q)}if(rt(F)||P(F))return F=Dr(F,H.mode,q,null),F.return=H,F;Ti(H,F)}return null}function oe(H,F,q,de){var xe=F!==null?F.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return xe!==null?null:M(H,F,""+q,de);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case A:return q.key===xe?B(H,F,q,de):null;case E:return q.key===xe?Y(H,F,q,de):null;case se:return xe=q._init,oe(H,F,xe(q._payload),de)}if(rt(q)||P(q))return xe!==null?null:ae(H,F,q,de,null);Ti(H,q)}return null}function pe(H,F,q,de,xe){if(typeof de=="string"&&de!==""||typeof de=="number")return H=H.get(q)||null,M(F,H,""+de,xe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case A:return H=H.get(de.key===null?q:de.key)||null,B(F,H,de,xe);case E:return H=H.get(de.key===null?q:de.key)||null,Y(F,H,de,xe);case se:var _e=de._init;return pe(H,F,q,_e(de._payload),xe)}if(rt(de)||P(de))return H=H.get(q)||null,ae(F,H,de,xe,null);Ti(F,de)}return null}function ge(H,F,q,de){for(var xe=null,_e=null,be=F,ke=F=0,vt=null;be!==null&&ke<q.length;ke++){be.index>ke?(vt=be,be=null):vt=be.sibling;var Pe=oe(H,be,q[ke],de);if(Pe===null){be===null&&(be=vt);break}e&&be&&Pe.alternate===null&&n(H,be),F=h(Pe,F,ke),_e===null?xe=Pe:_e.sibling=Pe,_e=Pe,be=vt}if(ke===q.length)return o(H,be),et&&$r(H,ke),xe;if(be===null){for(;ke<q.length;ke++)be=le(H,q[ke],de),be!==null&&(F=h(be,F,ke),_e===null?xe=be:_e.sibling=be,_e=be);return et&&$r(H,ke),xe}for(be=s(H,be);ke<q.length;ke++)vt=pe(be,H,ke,q[ke],de),vt!==null&&(e&&vt.alternate!==null&&be.delete(vt.key===null?ke:vt.key),F=h(vt,F,ke),_e===null?xe=vt:_e.sibling=vt,_e=vt);return e&&be.forEach(function(pr){return n(H,pr)}),et&&$r(H,ke),xe}function ye(H,F,q,de){var xe=P(q);if(typeof xe!="function")throw Error(i(150));if(q=xe.call(q),q==null)throw Error(i(151));for(var _e=xe=null,be=F,ke=F=0,vt=null,Pe=q.next();be!==null&&!Pe.done;ke++,Pe=q.next()){be.index>ke?(vt=be,be=null):vt=be.sibling;var pr=oe(H,be,Pe.value,de);if(pr===null){be===null&&(be=vt);break}e&&be&&pr.alternate===null&&n(H,be),F=h(pr,F,ke),_e===null?xe=pr:_e.sibling=pr,_e=pr,be=vt}if(Pe.done)return o(H,be),et&&$r(H,ke),xe;if(be===null){for(;!Pe.done;ke++,Pe=q.next())Pe=le(H,Pe.value,de),Pe!==null&&(F=h(Pe,F,ke),_e===null?xe=Pe:_e.sibling=Pe,_e=Pe);return et&&$r(H,ke),xe}for(be=s(H,be);!Pe.done;ke++,Pe=q.next())Pe=pe(be,H,ke,Pe.value,de),Pe!==null&&(e&&Pe.alternate!==null&&be.delete(Pe.key===null?ke:Pe.key),F=h(Pe,F,ke),_e===null?xe=Pe:_e.sibling=Pe,_e=Pe);return e&&be.forEach(function(z2){return n(H,z2)}),et&&$r(H,ke),xe}function it(H,F,q,de){if(typeof q=="object"&&q!==null&&q.type===z&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case A:e:{for(var xe=q.key,_e=F;_e!==null;){if(_e.key===xe){if(xe=q.type,xe===z){if(_e.tag===7){o(H,_e.sibling),F=d(_e,q.props.children),F.return=H,H=F;break e}}else if(_e.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===se&&gh(xe)===_e.type){o(H,_e.sibling),F=d(_e,q.props),F.ref=wa(H,_e,q),F.return=H,H=F;break e}o(H,_e);break}else n(H,_e);_e=_e.sibling}q.type===z?(F=Dr(q.props.children,H.mode,de,q.key),F.return=H,H=F):(de=ns(q.type,q.key,q.props,null,H.mode,de),de.ref=wa(H,F,q),de.return=H,H=de)}return v(H);case E:e:{for(_e=q.key;F!==null;){if(F.key===_e)if(F.tag===4&&F.stateNode.containerInfo===q.containerInfo&&F.stateNode.implementation===q.implementation){o(H,F.sibling),F=d(F,q.children||[]),F.return=H,H=F;break e}else{o(H,F);break}else n(H,F);F=F.sibling}F=$c(q,H.mode,de),F.return=H,H=F}return v(H);case se:return _e=q._init,it(H,F,_e(q._payload),de)}if(rt(q))return ge(H,F,q,de);if(P(q))return ye(H,F,q,de);Ti(H,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,F!==null&&F.tag===6?(o(H,F.sibling),F=d(F,q),F.return=H,H=F):(o(H,F),F=Mc(q,H.mode,de),F.return=H,H=F),v(H)):o(H,F)}return it}var xo=vh(!0),yh=vh(!1),Ii=nr(null),Ai=null,wo=null,Bl=null;function Fl(){Bl=wo=Ai=null}function Wl(e){var n=Ii.current;Qe(Ii),e._currentValue=n}function Hl(e,n,o){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===o)break;e=e.return}}function _o(e,n){Ai=e,Bl=wo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Bt=!0),e.firstContext=null)}function on(e){var n=e._currentValue;if(Bl!==e)if(e={context:e,memoizedValue:n,next:null},wo===null){if(Ai===null)throw Error(i(308));wo=e,Ai.dependencies={lanes:0,firstContext:e}}else wo=wo.next=e;return n}var Tr=null;function ql(e){Tr===null?Tr=[e]:Tr.push(e)}function xh(e,n,o,s){var d=n.interleaved;return d===null?(o.next=o,ql(n)):(o.next=d.next,d.next=o),n.interleaved=o,Bn(e,s)}function Bn(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var ar=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ir(e,n,o){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ee&2)!==0){var d=s.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),s.pending=n,Bn(e,o)}return d=s.interleaved,d===null?(n.next=n,ql(s)):(n.next=d.next,d.next=n),s.interleaved=n,Bn(e,o)}function Ei(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,al(e,o)}}function _h(e,n){var o=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,o===s)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=v:h=h.next=v,o=o.next}while(o!==null);h===null?d=h=n:h=h.next=n}else d=h=n;o={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:s.shared,effects:s.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Pi(e,n,o,s){var d=e.updateQueue;ar=!1;var h=d.firstBaseUpdate,v=d.lastBaseUpdate,M=d.shared.pending;if(M!==null){d.shared.pending=null;var B=M,Y=B.next;B.next=null,v===null?h=Y:v.next=Y,v=B;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,M=ae.lastBaseUpdate,M!==v&&(M===null?ae.firstBaseUpdate=Y:M.next=Y,ae.lastBaseUpdate=B))}if(h!==null){var le=d.baseState;v=0,ae=Y=B=null,M=h;do{var oe=M.lane,pe=M.eventTime;if((s&oe)===oe){ae!==null&&(ae=ae.next={eventTime:pe,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var ge=e,ye=M;switch(oe=n,pe=o,ye.tag){case 1:if(ge=ye.payload,typeof ge=="function"){le=ge.call(pe,le,oe);break e}le=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ye.payload,oe=typeof ge=="function"?ge.call(pe,le,oe):ge,oe==null)break e;le=D({},le,oe);break e;case 2:ar=!0}}M.callback!==null&&M.lane!==0&&(e.flags|=64,oe=d.effects,oe===null?d.effects=[M]:oe.push(M))}else pe={eventTime:pe,lane:oe,tag:M.tag,payload:M.payload,callback:M.callback,next:null},ae===null?(Y=ae=pe,B=le):ae=ae.next=pe,v|=oe;if(M=M.next,M===null){if(M=d.shared.pending,M===null)break;oe=M,M=oe.next,oe.next=null,d.lastBaseUpdate=oe,d.shared.pending=null}}while(!0);if(ae===null&&(B=le),d.baseState=B,d.firstBaseUpdate=Y,d.lastBaseUpdate=ae,n=d.shared.interleaved,n!==null){d=n;do v|=d.lane,d=d.next;while(d!==n)}else h===null&&(d.shared.lanes=0);Er|=v,e.lanes=v,e.memoizedState=le}}function bh(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],d=s.callback;if(d!==null){if(s.callback=null,s=o,typeof d!="function")throw Error(i(191,d));d.call(s)}}}var _a={},Nn=nr(_a),ba=nr(_a),ka=nr(_a);function Ir(e){if(e===_a)throw Error(i(174));return e}function Vl(e,n){switch(Ge(ka,n),Ge(ba,e),Ge(Nn,_a),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Cn(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Cn(n,e)}Qe(Nn),Ge(Nn,n)}function bo(){Qe(Nn),Qe(ba),Qe(ka)}function kh(e){Ir(ka.current);var n=Ir(Nn.current),o=Cn(n,e.type);n!==o&&(Ge(ba,e),Ge(Nn,o))}function Gl(e){ba.current===e&&(Qe(Nn),Qe(ba))}var tt=nr(0);function zi(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yl=[];function Zl(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Oi=T.ReactCurrentDispatcher,Kl=T.ReactCurrentBatchConfig,Ar=0,nt=null,ht=null,mt=null,Di=!1,Ca=!1,ja=0,a2=0;function St(){throw Error(i(321))}function Ql(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!pn(e[o],n[o]))return!1;return!0}function Xl(e,n,o,s,d,h){if(Ar=h,nt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Oi.current=e===null||e.memoizedState===null?c2:d2,e=o(s,d),Ca){h=0;do{if(Ca=!1,ja=0,25<=h)throw Error(i(301));h+=1,mt=ht=null,n.updateQueue=null,Oi.current=u2,e=o(s,d)}while(Ca)}if(Oi.current=Wi,n=ht!==null&&ht.next!==null,Ar=0,mt=ht=nt=null,Di=!1,n)throw Error(i(300));return e}function Jl(){var e=ja!==0;return ja=0,e}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?nt.memoizedState=mt=e:mt=mt.next=e,mt}function an(){if(ht===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var n=mt===null?nt.memoizedState:mt.next;if(n!==null)mt=n,ht=e;else{if(e===null)throw Error(i(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},mt===null?nt.memoizedState=mt=e:mt=mt.next=e}return mt}function Sa(e,n){return typeof n=="function"?n(e):n}function ec(e){var n=an(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=ht,d=s.baseQueue,h=o.pending;if(h!==null){if(d!==null){var v=d.next;d.next=h.next,h.next=v}s.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,s=s.baseState;var M=v=null,B=null,Y=h;do{var ae=Y.lane;if((Ar&ae)===ae)B!==null&&(B=B.next={lane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),s=Y.hasEagerState?Y.eagerState:e(s,Y.action);else{var le={lane:ae,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null};B===null?(M=B=le,v=s):B=B.next=le,nt.lanes|=ae,Er|=ae}Y=Y.next}while(Y!==null&&Y!==h);B===null?v=s:B.next=M,pn(s,n.memoizedState)||(Bt=!0),n.memoizedState=s,n.baseState=v,n.baseQueue=B,o.lastRenderedState=s}if(e=o.interleaved,e!==null){d=e;do h=d.lane,nt.lanes|=h,Er|=h,d=d.next;while(d!==e)}else d===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function tc(e){var n=an(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=o.dispatch,d=o.pending,h=n.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do h=e(h,v.action),v=v.next;while(v!==d);pn(h,n.memoizedState)||(Bt=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),o.lastRenderedState=h}return[h,s]}function Ch(){}function jh(e,n){var o=nt,s=an(),d=n(),h=!pn(s.memoizedState,d);if(h&&(s.memoizedState=d,Bt=!0),s=s.queue,nc(Rh.bind(null,o,s,e),[e]),s.getSnapshot!==n||h||mt!==null&&mt.memoizedState.tag&1){if(o.flags|=2048,Na(9,Nh.bind(null,o,s,d,n),void 0,null),gt===null)throw Error(i(349));(Ar&30)!==0||Sh(o,n,d)}return d}function Sh(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=nt.updateQueue,n===null?(n={lastEffect:null,stores:null},nt.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function Nh(e,n,o,s){n.value=o,n.getSnapshot=s,Lh(n)&&Mh(e)}function Rh(e,n,o){return o(function(){Lh(n)&&Mh(e)})}function Lh(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!pn(e,o)}catch{return!0}}function Mh(e){var n=Bn(e,1);n!==null&&yn(n,e,1,-1)}function $h(e){var n=Rn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n.queue=e,e=e.dispatch=l2.bind(null,nt,e),[n.memoizedState,e]}function Na(e,n,o,s){return e={tag:e,create:n,destroy:o,deps:s,next:null},n=nt.updateQueue,n===null?(n={lastEffect:null,stores:null},nt.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(s=o.next,o.next=e,e.next=s,n.lastEffect=e)),e}function Th(){return an().memoizedState}function Bi(e,n,o,s){var d=Rn();nt.flags|=e,d.memoizedState=Na(1|n,o,void 0,s===void 0?null:s)}function Fi(e,n,o,s){var d=an();s=s===void 0?null:s;var h=void 0;if(ht!==null){var v=ht.memoizedState;if(h=v.destroy,s!==null&&Ql(s,v.deps)){d.memoizedState=Na(n,o,h,s);return}}nt.flags|=e,d.memoizedState=Na(1|n,o,h,s)}function Ih(e,n){return Bi(8390656,8,e,n)}function nc(e,n){return Fi(2048,8,e,n)}function Ah(e,n){return Fi(4,2,e,n)}function Eh(e,n){return Fi(4,4,e,n)}function Ph(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zh(e,n,o){return o=o!=null?o.concat([e]):null,Fi(4,4,Ph.bind(null,n,e),o)}function rc(){}function Oh(e,n){var o=an();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&Ql(n,s[1])?s[0]:(o.memoizedState=[e,n],e)}function Dh(e,n){var o=an();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&Ql(n,s[1])?s[0]:(e=e(),o.memoizedState=[e,n],e)}function Bh(e,n,o){return(Ar&21)===0?(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=o):(pn(o,n)||(o=gu(),nt.lanes|=o,Er|=o,e.baseState=!0),n)}function i2(e,n){var o=He;He=o!==0&&4>o?o:4,e(!0);var s=Kl.transition;Kl.transition={};try{e(!1),n()}finally{He=o,Kl.transition=s}}function Fh(){return an().memoizedState}function s2(e,n,o){var s=dr(e);if(o={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null},Wh(e))Hh(n,o);else if(o=xh(e,n,o,s),o!==null){var d=Et();yn(o,e,s,d),qh(o,n,s)}}function l2(e,n,o){var s=dr(e),d={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wh(e))Hh(n,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,M=h(v,o);if(d.hasEagerState=!0,d.eagerState=M,pn(M,v)){var B=n.interleaved;B===null?(d.next=d,ql(n)):(d.next=B.next,B.next=d),n.interleaved=d;return}}catch{}finally{}o=xh(e,n,d,s),o!==null&&(d=Et(),yn(o,e,s,d),qh(o,n,s))}}function Wh(e){var n=e.alternate;return e===nt||n!==null&&n===nt}function Hh(e,n){Ca=Di=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function qh(e,n,o){if((o&4194240)!==0){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,al(e,o)}}var Wi={readContext:on,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},c2={readContext:on,useCallback:function(e,n){return Rn().memoizedState=[e,n===void 0?null:n],e},useContext:on,useEffect:Ih,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Bi(4194308,4,Ph.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Bi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Bi(4,2,e,n)},useMemo:function(e,n){var o=Rn();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var s=Rn();return n=o!==void 0?o(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=s2.bind(null,nt,e),[s.memoizedState,e]},useRef:function(e){var n=Rn();return e={current:e},n.memoizedState=e},useState:$h,useDebugValue:rc,useDeferredValue:function(e){return Rn().memoizedState=e},useTransition:function(){var e=$h(!1),n=e[0];return e=i2.bind(null,e[1]),Rn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var s=nt,d=Rn();if(et){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),gt===null)throw Error(i(349));(Ar&30)!==0||Sh(s,n,o)}d.memoizedState=o;var h={value:o,getSnapshot:n};return d.queue=h,Ih(Rh.bind(null,s,h,e),[e]),s.flags|=2048,Na(9,Nh.bind(null,s,h,o,n),void 0,null),o},useId:function(){var e=Rn(),n=gt.identifierPrefix;if(et){var o=Dn,s=On;o=(s&~(1<<32-hn(s)-1)).toString(32)+o,n=":"+n+"R"+o,o=ja++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=a2++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},d2={readContext:on,useCallback:Oh,useContext:on,useEffect:nc,useImperativeHandle:zh,useInsertionEffect:Ah,useLayoutEffect:Eh,useMemo:Dh,useReducer:ec,useRef:Th,useState:function(){return ec(Sa)},useDebugValue:rc,useDeferredValue:function(e){var n=an();return Bh(n,ht.memoizedState,e)},useTransition:function(){var e=ec(Sa)[0],n=an().memoizedState;return[e,n]},useMutableSource:Ch,useSyncExternalStore:jh,useId:Fh,unstable_isNewReconciler:!1},u2={readContext:on,useCallback:Oh,useContext:on,useEffect:nc,useImperativeHandle:zh,useInsertionEffect:Ah,useLayoutEffect:Eh,useMemo:Dh,useReducer:tc,useRef:Th,useState:function(){return tc(Sa)},useDebugValue:rc,useDeferredValue:function(e){var n=an();return ht===null?n.memoizedState=e:Bh(n,ht.memoizedState,e)},useTransition:function(){var e=tc(Sa)[0],n=an().memoizedState;return[e,n]},useMutableSource:Ch,useSyncExternalStore:jh,useId:Fh,unstable_isNewReconciler:!1};function mn(e,n){if(e&&e.defaultProps){n=D({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function oc(e,n,o,s){n=e.memoizedState,o=o(s,n),o=o==null?n:D({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Hi={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var s=Et(),d=dr(e),h=Fn(s,d);h.payload=n,o!=null&&(h.callback=o),n=ir(e,h,d),n!==null&&(yn(n,e,d,s),Ei(n,e,d))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var s=Et(),d=dr(e),h=Fn(s,d);h.tag=1,h.payload=n,o!=null&&(h.callback=o),n=ir(e,h,d),n!==null&&(yn(n,e,d,s),Ei(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=Et(),s=dr(e),d=Fn(o,s);d.tag=2,n!=null&&(d.callback=n),n=ir(e,d,s),n!==null&&(yn(n,e,s,o),Ei(n,e,s))}};function Uh(e,n,o,s,d,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,v):n.prototype&&n.prototype.isPureReactComponent?!pa(o,s)||!pa(d,h):!0}function Vh(e,n,o){var s=!1,d=rr,h=n.contextType;return typeof h=="object"&&h!==null?h=on(h):(d=Dt(n)?Lr:jt.current,s=n.contextTypes,h=(s=s!=null)?mo(e,d):rr),n=new n(o,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Hi,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=h),n}function Gh(e,n,o,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,s),n.state!==e&&Hi.enqueueReplaceState(n,n.state,null)}function ac(e,n,o,s){var d=e.stateNode;d.props=o,d.state=e.memoizedState,d.refs={},Ul(e);var h=n.contextType;typeof h=="object"&&h!==null?d.context=on(h):(h=Dt(n)?Lr:jt.current,d.context=mo(e,h)),d.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(oc(e,n,h,o),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Hi.enqueueReplaceState(d,d.state,null),Pi(e,o,d,s),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function ko(e,n){try{var o="",s=n;do o+=G(s),s=s.return;while(s);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:d,digest:null}}function ic(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function sc(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var h2=typeof WeakMap=="function"?WeakMap:Map;function Yh(e,n,o){o=Fn(-1,o),o.tag=3,o.payload={element:null};var s=n.value;return o.callback=function(){Ki||(Ki=!0,bc=s),sc(e,n)},o}function Zh(e,n,o){o=Fn(-1,o),o.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var d=n.value;o.payload=function(){return s(d)},o.callback=function(){sc(e,n)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){sc(e,n),typeof s!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),o}function Kh(e,n,o){var s=e.pingCache;if(s===null){s=e.pingCache=new h2;var d=new Set;s.set(n,d)}else d=s.get(n),d===void 0&&(d=new Set,s.set(n,d));d.has(o)||(d.add(o),e=S2.bind(null,e,n,o),n.then(e,e))}function Qh(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Xh(e,n,o,s,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Fn(-1,1),n.tag=2,ir(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var p2=T.ReactCurrentOwner,Bt=!1;function At(e,n,o,s){n.child=e===null?yh(n,null,o,s):xo(n,e.child,o,s)}function Jh(e,n,o,s,d){o=o.render;var h=n.ref;return _o(n,d),s=Xl(e,n,o,s,h,d),o=Jl(),e!==null&&!Bt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,Wn(e,n,d)):(et&&o&&El(n),n.flags|=1,At(e,n,s,d),n.child)}function ep(e,n,o,s,d){if(e===null){var h=o.type;return typeof h=="function"&&!Lc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=h,tp(e,n,h,s,d)):(e=ns(o.type,null,s,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,(e.lanes&d)===0){var v=h.memoizedProps;if(o=o.compare,o=o!==null?o:pa,o(v,s)&&e.ref===n.ref)return Wn(e,n,d)}return n.flags|=1,e=hr(h,s),e.ref=n.ref,e.return=n,n.child=e}function tp(e,n,o,s,d){if(e!==null){var h=e.memoizedProps;if(pa(h,s)&&e.ref===n.ref)if(Bt=!1,n.pendingProps=s=h,(e.lanes&d)!==0)(e.flags&131072)!==0&&(Bt=!0);else return n.lanes=e.lanes,Wn(e,n,d)}return lc(e,n,o,s,d)}function np(e,n,o){var s=n.pendingProps,d=s.children,h=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(jo,Qt),Qt|=o;else{if((o&1073741824)===0)return e=h!==null?h.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ge(jo,Qt),Qt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=h!==null?h.baseLanes:o,Ge(jo,Qt),Qt|=s}else h!==null?(s=h.baseLanes|o,n.memoizedState=null):s=o,Ge(jo,Qt),Qt|=s;return At(e,n,d,o),n.child}function rp(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function lc(e,n,o,s,d){var h=Dt(o)?Lr:jt.current;return h=mo(n,h),_o(n,d),o=Xl(e,n,o,s,h,d),s=Jl(),e!==null&&!Bt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,Wn(e,n,d)):(et&&s&&El(n),n.flags|=1,At(e,n,o,d),n.child)}function op(e,n,o,s,d){if(Dt(o)){var h=!0;Ni(n)}else h=!1;if(_o(n,d),n.stateNode===null)Ui(e,n),Vh(n,o,s),ac(n,o,s,d),s=!0;else if(e===null){var v=n.stateNode,M=n.memoizedProps;v.props=M;var B=v.context,Y=o.contextType;typeof Y=="object"&&Y!==null?Y=on(Y):(Y=Dt(o)?Lr:jt.current,Y=mo(n,Y));var ae=o.getDerivedStateFromProps,le=typeof ae=="function"||typeof v.getSnapshotBeforeUpdate=="function";le||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==s||B!==Y)&&Gh(n,v,s,Y),ar=!1;var oe=n.memoizedState;v.state=oe,Pi(n,s,v,d),B=n.memoizedState,M!==s||oe!==B||Ot.current||ar?(typeof ae=="function"&&(oc(n,o,ae,s),B=n.memoizedState),(M=ar||Uh(n,o,M,s,oe,B,Y))?(le||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=B),v.props=s,v.state=B,v.context=Y,s=M):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{v=n.stateNode,wh(e,n),M=n.memoizedProps,Y=n.type===n.elementType?M:mn(n.type,M),v.props=Y,le=n.pendingProps,oe=v.context,B=o.contextType,typeof B=="object"&&B!==null?B=on(B):(B=Dt(o)?Lr:jt.current,B=mo(n,B));var pe=o.getDerivedStateFromProps;(ae=typeof pe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==le||oe!==B)&&Gh(n,v,s,B),ar=!1,oe=n.memoizedState,v.state=oe,Pi(n,s,v,d);var ge=n.memoizedState;M!==le||oe!==ge||Ot.current||ar?(typeof pe=="function"&&(oc(n,o,pe,s),ge=n.memoizedState),(Y=ar||Uh(n,o,Y,s,oe,ge,B)||!1)?(ae||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(s,ge,B),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(s,ge,B)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ge),v.props=s,v.state=ge,v.context=B,s=Y):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),s=!1)}return cc(e,n,o,s,h,d)}function cc(e,n,o,s,d,h){rp(e,n);var v=(n.flags&128)!==0;if(!s&&!v)return d&&ch(n,o,!1),Wn(e,n,h);s=n.stateNode,p2.current=n;var M=v&&typeof o.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&v?(n.child=xo(n,e.child,null,h),n.child=xo(n,null,M,h)):At(e,n,M,h),n.memoizedState=s.state,d&&ch(n,o,!0),n.child}function ap(e){var n=e.stateNode;n.pendingContext?sh(e,n.pendingContext,n.pendingContext!==n.context):n.context&&sh(e,n.context,!1),Vl(e,n.containerInfo)}function ip(e,n,o,s,d){return yo(),Dl(d),n.flags|=256,At(e,n,o,s),n.child}var dc={dehydrated:null,treeContext:null,retryLane:0};function uc(e){return{baseLanes:e,cachePool:null,transitions:null}}function sp(e,n,o){var s=n.pendingProps,d=tt.current,h=!1,v=(n.flags&128)!==0,M;if((M=v)||(M=e!==null&&e.memoizedState===null?!1:(d&2)!==0),M?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Ge(tt,d&1),e===null)return Ol(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=s.children,e=s.fallback,h?(s=n.mode,h=n.child,v={mode:"hidden",children:v},(s&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=v):h=rs(v,s,0,null),e=Dr(e,s,o,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=uc(o),n.memoizedState=dc,e):hc(n,v));if(d=e.memoizedState,d!==null&&(M=d.dehydrated,M!==null))return f2(e,n,v,s,M,d,o);if(h){h=s.fallback,v=n.mode,d=e.child,M=d.sibling;var B={mode:"hidden",children:s.children};return(v&1)===0&&n.child!==d?(s=n.child,s.childLanes=0,s.pendingProps=B,n.deletions=null):(s=hr(d,B),s.subtreeFlags=d.subtreeFlags&14680064),M!==null?h=hr(M,h):(h=Dr(h,v,o,null),h.flags|=2),h.return=n,s.return=n,s.sibling=h,n.child=s,s=h,h=n.child,v=e.child.memoizedState,v=v===null?uc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},h.memoizedState=v,h.childLanes=e.childLanes&~o,n.memoizedState=dc,s}return h=e.child,e=h.sibling,s=hr(h,{mode:"visible",children:s.children}),(n.mode&1)===0&&(s.lanes=o),s.return=n,s.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=s,n.memoizedState=null,s}function hc(e,n){return n=rs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function qi(e,n,o,s){return s!==null&&Dl(s),xo(n,e.child,null,o),e=hc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function f2(e,n,o,s,d,h,v){if(o)return n.flags&256?(n.flags&=-257,s=ic(Error(i(422))),qi(e,n,v,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=s.fallback,d=n.mode,s=rs({mode:"visible",children:s.children},d,0,null),h=Dr(h,d,v,null),h.flags|=2,s.return=n,h.return=n,s.sibling=h,n.child=s,(n.mode&1)!==0&&xo(n,e.child,null,v),n.child.memoizedState=uc(v),n.memoizedState=dc,h);if((n.mode&1)===0)return qi(e,n,v,null);if(d.data==="$!"){if(s=d.nextSibling&&d.nextSibling.dataset,s)var M=s.dgst;return s=M,h=Error(i(419)),s=ic(h,s,void 0),qi(e,n,v,s)}if(M=(v&e.childLanes)!==0,Bt||M){if(s=gt,s!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(s.suspendedLanes|v))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Bn(e,d),yn(s,e,d,-1))}return Rc(),s=ic(Error(i(421))),qi(e,n,v,s)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=N2.bind(null,e),d._reactRetry=n,null):(e=h.treeContext,Kt=tr(d.nextSibling),Zt=n,et=!0,fn=null,e!==null&&(nn[rn++]=On,nn[rn++]=Dn,nn[rn++]=Mr,On=e.id,Dn=e.overflow,Mr=n),n=hc(n,s.children),n.flags|=4096,n)}function lp(e,n,o){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Hl(e.return,n,o)}function pc(e,n,o,s,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:o,tailMode:d}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=o,h.tailMode=d)}function cp(e,n,o){var s=n.pendingProps,d=s.revealOrder,h=s.tail;if(At(e,n,s.children,o),s=tt.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lp(e,o,n);else if(e.tag===19)lp(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ge(tt,s),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(o=n.child,d=null;o!==null;)e=o.alternate,e!==null&&zi(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=n.child,n.child=null):(d=o.sibling,o.sibling=null),pc(n,!1,d,o,h);break;case"backwards":for(o=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&zi(e)===null){n.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}pc(n,!0,o,null,h);break;case"together":pc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ui(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Wn(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),Er|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=hr(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=hr(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function m2(e,n,o){switch(n.tag){case 3:ap(n),yo();break;case 5:kh(n);break;case 1:Dt(n.type)&&Ni(n);break;case 4:Vl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,d=n.memoizedProps.value;Ge(Ii,s._currentValue),s._currentValue=d;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(Ge(tt,tt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?sp(e,n,o):(Ge(tt,tt.current&1),e=Wn(e,n,o),e!==null?e.sibling:null);Ge(tt,tt.current&1);break;case 19:if(s=(o&n.childLanes)!==0,(e.flags&128)!==0){if(s)return cp(e,n,o);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(tt,tt.current),s)break;return null;case 22:case 23:return n.lanes=0,np(e,n,o)}return Wn(e,n,o)}var dp,fc,up,hp;dp=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},fc=function(){},up=function(e,n,o,s){var d=e.memoizedProps;if(d!==s){e=n.stateNode,Ir(Nn.current);var h=null;switch(o){case"input":d=Se(e,d),s=Se(e,s),h=[];break;case"select":d=D({},d,{value:void 0}),s=D({},s,{value:void 0}),h=[];break;case"textarea":d=$t(e,d),s=$t(e,s),h=[];break;default:typeof d.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ci)}lt(o,s);var v;o=null;for(Y in d)if(!s.hasOwnProperty(Y)&&d.hasOwnProperty(Y)&&d[Y]!=null)if(Y==="style"){var M=d[Y];for(v in M)M.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else Y!=="dangerouslySetInnerHTML"&&Y!=="children"&&Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&Y!=="autoFocus"&&(c.hasOwnProperty(Y)?h||(h=[]):(h=h||[]).push(Y,null));for(Y in s){var B=s[Y];if(M=d!=null?d[Y]:void 0,s.hasOwnProperty(Y)&&B!==M&&(B!=null||M!=null))if(Y==="style")if(M){for(v in M)!M.hasOwnProperty(v)||B&&B.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in B)B.hasOwnProperty(v)&&M[v]!==B[v]&&(o||(o={}),o[v]=B[v])}else o||(h||(h=[]),h.push(Y,o)),o=B;else Y==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,M=M?M.__html:void 0,B!=null&&M!==B&&(h=h||[]).push(Y,B)):Y==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(Y,""+B):Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&(c.hasOwnProperty(Y)?(B!=null&&Y==="onScroll"&&Ke("scroll",e),h||M===B||(h=[])):(h=h||[]).push(Y,B))}o&&(h=h||[]).push("style",o);var Y=h;(n.updateQueue=Y)&&(n.flags|=4)}},hp=function(e,n,o,s){o!==s&&(n.flags|=4)};function Ra(e,n){if(!et)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Nt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,s=0;if(n)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,s|=d.subtreeFlags&14680064,s|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=s,e.childLanes=o,n}function g2(e,n,o){var s=n.pendingProps;switch(Pl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(n),null;case 1:return Dt(n.type)&&Si(),Nt(n),null;case 3:return s=n.stateNode,bo(),Qe(Ot),Qe(jt),Zl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&($i(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fn!==null&&(jc(fn),fn=null))),fc(e,n),Nt(n),null;case 5:Gl(n);var d=Ir(ka.current);if(o=n.type,e!==null&&n.stateNode!=null)up(e,n,o,s,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(i(166));return Nt(n),null}if(e=Ir(Nn.current),$i(n)){s=n.stateNode,o=n.type;var h=n.memoizedProps;switch(s[Sn]=n,s[ya]=h,e=(n.mode&1)!==0,o){case"dialog":Ke("cancel",s),Ke("close",s);break;case"iframe":case"object":case"embed":Ke("load",s);break;case"video":case"audio":for(d=0;d<ma.length;d++)Ke(ma[d],s);break;case"source":Ke("error",s);break;case"img":case"image":case"link":Ke("error",s),Ke("load",s);break;case"details":Ke("toggle",s);break;case"input":Ae(s,h),Ke("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!h.multiple},Ke("invalid",s);break;case"textarea":We(s,h),Ke("invalid",s)}lt(o,h),d=null;for(var v in h)if(h.hasOwnProperty(v)){var M=h[v];v==="children"?typeof M=="string"?s.textContent!==M&&(h.suppressHydrationWarning!==!0&&ki(s.textContent,M,e),d=["children",M]):typeof M=="number"&&s.textContent!==""+M&&(h.suppressHydrationWarning!==!0&&ki(s.textContent,M,e),d=["children",""+M]):c.hasOwnProperty(v)&&M!=null&&v==="onScroll"&&Ke("scroll",s)}switch(o){case"input":he(s),Ve(s,h,!0);break;case"textarea":he(s),bt(s);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(s.onclick=Ci)}s=d,n.updateQueue=s,s!==null&&(n.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kn(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=v.createElement(o,{is:s.is}):(e=v.createElement(o),o==="select"&&(v=e,s.multiple?v.multiple=!0:s.size&&(v.size=s.size))):e=v.createElementNS(e,o),e[Sn]=n,e[ya]=s,dp(e,n,!1,!1),n.stateNode=e;e:{switch(v=It(o,s),o){case"dialog":Ke("cancel",e),Ke("close",e),d=s;break;case"iframe":case"object":case"embed":Ke("load",e),d=s;break;case"video":case"audio":for(d=0;d<ma.length;d++)Ke(ma[d],e);d=s;break;case"source":Ke("error",e),d=s;break;case"img":case"image":case"link":Ke("error",e),Ke("load",e),d=s;break;case"details":Ke("toggle",e),d=s;break;case"input":Ae(e,s),d=Se(e,s),Ke("invalid",e);break;case"option":d=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},d=D({},s,{value:void 0}),Ke("invalid",e);break;case"textarea":We(e,s),d=$t(e,s),Ke("invalid",e);break;default:d=s}lt(o,d),M=d;for(h in M)if(M.hasOwnProperty(h)){var B=M[h];h==="style"?Ne(e,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Zo(e,B)):h==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&no(e,B):typeof B=="number"&&no(e,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(c.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Ke("scroll",e):B!=null&&C(e,h,B,v))}switch(o){case"input":he(e),Ve(e,s,!1);break;case"textarea":he(e),bt(e);break;case"option":s.value!=null&&e.setAttribute("value",""+re(s.value));break;case"select":e.multiple=!!s.multiple,h=s.value,h!=null?Ze(e,!!s.multiple,h,!1):s.defaultValue!=null&&Ze(e,!!s.multiple,s.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Ci)}switch(o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Nt(n),null;case 6:if(e&&n.stateNode!=null)hp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(i(166));if(o=Ir(ka.current),Ir(Nn.current),$i(n)){if(s=n.stateNode,o=n.memoizedProps,s[Sn]=n,(h=s.nodeValue!==o)&&(e=Zt,e!==null))switch(e.tag){case 3:ki(s.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ki(s.nodeValue,o,(e.mode&1)!==0)}h&&(n.flags|=4)}else s=(o.nodeType===9?o:o.ownerDocument).createTextNode(s),s[Sn]=n,n.stateNode=s}return Nt(n),null;case 13:if(Qe(tt),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(et&&Kt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)mh(),yo(),n.flags|=98560,h=!1;else if(h=$i(n),s!==null&&s.dehydrated!==null){if(e===null){if(!h)throw Error(i(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Sn]=n}else yo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Nt(n),h=!1}else fn!==null&&(jc(fn),fn=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(tt.current&1)!==0?pt===0&&(pt=3):Rc())),n.updateQueue!==null&&(n.flags|=4),Nt(n),null);case 4:return bo(),fc(e,n),e===null&&ga(n.stateNode.containerInfo),Nt(n),null;case 10:return Wl(n.type._context),Nt(n),null;case 17:return Dt(n.type)&&Si(),Nt(n),null;case 19:if(Qe(tt),h=n.memoizedState,h===null)return Nt(n),null;if(s=(n.flags&128)!==0,v=h.rendering,v===null)if(s)Ra(h,!1);else{if(pt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(v=zi(e),v!==null){for(n.flags|=128,Ra(h,!1),s=v.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=o,o=n.child;o!==null;)h=o,e=s,h.flags&=14680066,v=h.alternate,v===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=v.childLanes,h.lanes=v.lanes,h.child=v.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=v.memoizedProps,h.memoizedState=v.memoizedState,h.updateQueue=v.updateQueue,h.type=v.type,e=v.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Ge(tt,tt.current&1|2),n.child}e=e.sibling}h.tail!==null&&at()>So&&(n.flags|=128,s=!0,Ra(h,!1),n.lanes=4194304)}else{if(!s)if(e=zi(v),e!==null){if(n.flags|=128,s=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Ra(h,!0),h.tail===null&&h.tailMode==="hidden"&&!v.alternate&&!et)return Nt(n),null}else 2*at()-h.renderingStartTime>So&&o!==1073741824&&(n.flags|=128,s=!0,Ra(h,!1),n.lanes=4194304);h.isBackwards?(v.sibling=n.child,n.child=v):(o=h.last,o!==null?o.sibling=v:n.child=v,h.last=v)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=at(),n.sibling=null,o=tt.current,Ge(tt,s?o&1|2:o&1),n):(Nt(n),null);case 22:case 23:return Nc(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&(n.mode&1)!==0?(Qt&1073741824)!==0&&(Nt(n),n.subtreeFlags&6&&(n.flags|=8192)):Nt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function v2(e,n){switch(Pl(n),n.tag){case 1:return Dt(n.type)&&Si(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bo(),Qe(Ot),Qe(jt),Zl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Gl(n),null;case 13:if(Qe(tt),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));yo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Qe(tt),null;case 4:return bo(),null;case 10:return Wl(n.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var Vi=!1,Rt=!1,y2=typeof WeakSet=="function"?WeakSet:Set,me=null;function Co(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(s){ot(e,n,s)}else o.current=null}function mc(e,n,o){try{o()}catch(s){ot(e,n,s)}}var pp=!1;function x2(e,n){if(Nl=hi,e=Uu(),xl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var s=o.getSelection&&o.getSelection();if(s&&s.rangeCount!==0){o=s.anchorNode;var d=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var v=0,M=-1,B=-1,Y=0,ae=0,le=e,oe=null;t:for(;;){for(var pe;le!==o||d!==0&&le.nodeType!==3||(M=v+d),le!==h||s!==0&&le.nodeType!==3||(B=v+s),le.nodeType===3&&(v+=le.nodeValue.length),(pe=le.firstChild)!==null;)oe=le,le=pe;for(;;){if(le===e)break t;if(oe===o&&++Y===d&&(M=v),oe===h&&++ae===s&&(B=v),(pe=le.nextSibling)!==null)break;le=oe,oe=le.parentNode}le=pe}o=M===-1||B===-1?null:{start:M,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Rl={focusedElem:e,selectionRange:o},hi=!1,me=n;me!==null;)if(n=me,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,me=e;else for(;me!==null;){n=me;try{var ge=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ye=ge.memoizedProps,it=ge.memoizedState,H=n.stateNode,F=H.getSnapshotBeforeUpdate(n.elementType===n.type?ye:mn(n.type,ye),it);H.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var q=n.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(de){ot(n,n.return,de)}if(e=n.sibling,e!==null){e.return=n.return,me=e;break}me=n.return}return ge=pp,pp=!1,ge}function La(e,n,o){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var d=s=s.next;do{if((d.tag&e)===e){var h=d.destroy;d.destroy=void 0,h!==void 0&&mc(n,o,h)}d=d.next}while(d!==s)}}function Gi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.create;o.destroy=s()}o=o.next}while(o!==n)}}function gc(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function fp(e){var n=e.alternate;n!==null&&(e.alternate=null,fp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Sn],delete n[ya],delete n[Tl],delete n[t2],delete n[n2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mp(e){return e.tag===5||e.tag===3||e.tag===4}function gp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Ci));else if(s!==4&&(e=e.child,e!==null))for(vc(e,n,o),e=e.sibling;e!==null;)vc(e,n,o),e=e.sibling}function yc(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(yc(e,n,o),e=e.sibling;e!==null;)yc(e,n,o),e=e.sibling}var kt=null,gn=!1;function sr(e,n,o){for(o=o.child;o!==null;)vp(e,n,o),o=o.sibling}function vp(e,n,o){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(ii,o)}catch{}switch(o.tag){case 5:Rt||Co(o,n);case 6:var s=kt,d=gn;kt=null,sr(e,n,o),kt=s,gn=d,kt!==null&&(gn?(e=kt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):kt.removeChild(o.stateNode));break;case 18:kt!==null&&(gn?(e=kt,o=o.stateNode,e.nodeType===8?$l(e.parentNode,o):e.nodeType===1&&$l(e,o),sa(e)):$l(kt,o.stateNode));break;case 4:s=kt,d=gn,kt=o.stateNode.containerInfo,gn=!0,sr(e,n,o),kt=s,gn=d;break;case 0:case 11:case 14:case 15:if(!Rt&&(s=o.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){d=s=s.next;do{var h=d,v=h.destroy;h=h.tag,v!==void 0&&((h&2)!==0||(h&4)!==0)&&mc(o,n,v),d=d.next}while(d!==s)}sr(e,n,o);break;case 1:if(!Rt&&(Co(o,n),s=o.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=o.memoizedProps,s.state=o.memoizedState,s.componentWillUnmount()}catch(M){ot(o,n,M)}sr(e,n,o);break;case 21:sr(e,n,o);break;case 22:o.mode&1?(Rt=(s=Rt)||o.memoizedState!==null,sr(e,n,o),Rt=s):sr(e,n,o);break;default:sr(e,n,o)}}function yp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new y2),n.forEach(function(s){var d=R2.bind(null,e,s);o.has(s)||(o.add(s),s.then(d,d))})}}function vn(e,n){var o=n.deletions;if(o!==null)for(var s=0;s<o.length;s++){var d=o[s];try{var h=e,v=n,M=v;e:for(;M!==null;){switch(M.tag){case 5:kt=M.stateNode,gn=!1;break e;case 3:kt=M.stateNode.containerInfo,gn=!0;break e;case 4:kt=M.stateNode.containerInfo,gn=!0;break e}M=M.return}if(kt===null)throw Error(i(160));vp(h,v,d),kt=null,gn=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(Y){ot(d,n,Y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xp(n,e),n=n.sibling}function xp(e,n){var o=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),Ln(e),s&4){try{La(3,e,e.return),Gi(3,e)}catch(ye){ot(e,e.return,ye)}try{La(5,e,e.return)}catch(ye){ot(e,e.return,ye)}}break;case 1:vn(n,e),Ln(e),s&512&&o!==null&&Co(o,o.return);break;case 5:if(vn(n,e),Ln(e),s&512&&o!==null&&Co(o,o.return),e.flags&32){var d=e.stateNode;try{no(d,"")}catch(ye){ot(e,e.return,ye)}}if(s&4&&(d=e.stateNode,d!=null)){var h=e.memoizedProps,v=o!==null?o.memoizedProps:h,M=e.type,B=e.updateQueue;if(e.updateQueue=null,B!==null)try{M==="input"&&h.type==="radio"&&h.name!=null&&Be(d,h),It(M,v);var Y=It(M,h);for(v=0;v<B.length;v+=2){var ae=B[v],le=B[v+1];ae==="style"?Ne(d,le):ae==="dangerouslySetInnerHTML"?Zo(d,le):ae==="children"?no(d,le):C(d,ae,le,Y)}switch(M){case"input":Fe(d,h);break;case"textarea":Tt(d,h);break;case"select":var oe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var pe=h.value;pe!=null?Ze(d,!!h.multiple,pe,!1):oe!==!!h.multiple&&(h.defaultValue!=null?Ze(d,!!h.multiple,h.defaultValue,!0):Ze(d,!!h.multiple,h.multiple?[]:"",!1))}d[ya]=h}catch(ye){ot(e,e.return,ye)}}break;case 6:if(vn(n,e),Ln(e),s&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,h=e.memoizedProps;try{d.nodeValue=h}catch(ye){ot(e,e.return,ye)}}break;case 3:if(vn(n,e),Ln(e),s&4&&o!==null&&o.memoizedState.isDehydrated)try{sa(n.containerInfo)}catch(ye){ot(e,e.return,ye)}break;case 4:vn(n,e),Ln(e);break;case 13:vn(n,e),Ln(e),d=e.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(_c=at())),s&4&&yp(e);break;case 22:if(ae=o!==null&&o.memoizedState!==null,e.mode&1?(Rt=(Y=Rt)||ae,vn(n,e),Rt=Y):vn(n,e),Ln(e),s&8192){if(Y=e.memoizedState!==null,(e.stateNode.isHidden=Y)&&!ae&&(e.mode&1)!==0)for(me=e,ae=e.child;ae!==null;){for(le=me=ae;me!==null;){switch(oe=me,pe=oe.child,oe.tag){case 0:case 11:case 14:case 15:La(4,oe,oe.return);break;case 1:Co(oe,oe.return);var ge=oe.stateNode;if(typeof ge.componentWillUnmount=="function"){s=oe,o=oe.return;try{n=s,ge.props=n.memoizedProps,ge.state=n.memoizedState,ge.componentWillUnmount()}catch(ye){ot(s,o,ye)}}break;case 5:Co(oe,oe.return);break;case 22:if(oe.memoizedState!==null){bp(le);continue}}pe!==null?(pe.return=oe,me=pe):bp(le)}ae=ae.sibling}e:for(ae=null,le=e;;){if(le.tag===5){if(ae===null){ae=le;try{d=le.stateNode,Y?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(M=le.stateNode,B=le.memoizedProps.style,v=B!=null&&B.hasOwnProperty("display")?B.display:null,M.style.display=ni("display",v))}catch(ye){ot(e,e.return,ye)}}}else if(le.tag===6){if(ae===null)try{le.stateNode.nodeValue=Y?"":le.memoizedProps}catch(ye){ot(e,e.return,ye)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===e)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===e)break e;for(;le.sibling===null;){if(le.return===null||le.return===e)break e;ae===le&&(ae=null),le=le.return}ae===le&&(ae=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:vn(n,e),Ln(e),s&4&&yp(e);break;case 21:break;default:vn(n,e),Ln(e)}}function Ln(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(mp(o)){var s=o;break e}o=o.return}throw Error(i(160))}switch(s.tag){case 5:var d=s.stateNode;s.flags&32&&(no(d,""),s.flags&=-33);var h=gp(e);yc(e,h,d);break;case 3:case 4:var v=s.stateNode.containerInfo,M=gp(e);vc(e,M,v);break;default:throw Error(i(161))}}catch(B){ot(e,e.return,B)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function w2(e,n,o){me=e,wp(e)}function wp(e,n,o){for(var s=(e.mode&1)!==0;me!==null;){var d=me,h=d.child;if(d.tag===22&&s){var v=d.memoizedState!==null||Vi;if(!v){var M=d.alternate,B=M!==null&&M.memoizedState!==null||Rt;M=Vi;var Y=Rt;if(Vi=v,(Rt=B)&&!Y)for(me=d;me!==null;)v=me,B=v.child,v.tag===22&&v.memoizedState!==null?kp(d):B!==null?(B.return=v,me=B):kp(d);for(;h!==null;)me=h,wp(h),h=h.sibling;me=d,Vi=M,Rt=Y}_p(e)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,me=h):_p(e)}}function _p(e){for(;me!==null;){var n=me;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Rt||Gi(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!Rt)if(o===null)s.componentDidMount();else{var d=n.elementType===n.type?o.memoizedProps:mn(n.type,o.memoizedProps);s.componentDidUpdate(d,o.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&bh(n,h,s);break;case 3:var v=n.updateQueue;if(v!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}bh(n,v,o)}break;case 5:var M=n.stateNode;if(o===null&&n.flags&4){o=M;var B=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Y=n.alternate;if(Y!==null){var ae=Y.memoizedState;if(ae!==null){var le=ae.dehydrated;le!==null&&sa(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Rt||n.flags&512&&gc(n)}catch(oe){ot(n,n.return,oe)}}if(n===e){me=null;break}if(o=n.sibling,o!==null){o.return=n.return,me=o;break}me=n.return}}function bp(e){for(;me!==null;){var n=me;if(n===e){me=null;break}var o=n.sibling;if(o!==null){o.return=n.return,me=o;break}me=n.return}}function kp(e){for(;me!==null;){var n=me;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{Gi(4,n)}catch(B){ot(n,o,B)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var d=n.return;try{s.componentDidMount()}catch(B){ot(n,d,B)}}var h=n.return;try{gc(n)}catch(B){ot(n,h,B)}break;case 5:var v=n.return;try{gc(n)}catch(B){ot(n,v,B)}}}catch(B){ot(n,n.return,B)}if(n===e){me=null;break}var M=n.sibling;if(M!==null){M.return=n.return,me=M;break}me=n.return}}var _2=Math.ceil,Yi=T.ReactCurrentDispatcher,xc=T.ReactCurrentOwner,sn=T.ReactCurrentBatchConfig,Ee=0,gt=null,ct=null,Ct=0,Qt=0,jo=nr(0),pt=0,Ma=null,Er=0,Zi=0,wc=0,$a=null,Ft=null,_c=0,So=1/0,Hn=null,Ki=!1,bc=null,lr=null,Qi=!1,cr=null,Xi=0,Ta=0,kc=null,Ji=-1,es=0;function Et(){return(Ee&6)!==0?at():Ji!==-1?Ji:Ji=at()}function dr(e){return(e.mode&1)===0?1:(Ee&2)!==0&&Ct!==0?Ct&-Ct:o2.transition!==null?(es===0&&(es=gu()),es):(e=He,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e)}function yn(e,n,o,s){if(50<Ta)throw Ta=0,kc=null,Error(i(185));na(e,o,s),((Ee&2)===0||e!==gt)&&(e===gt&&((Ee&2)===0&&(Zi|=o),pt===4&&ur(e,Ct)),Wt(e,s),o===1&&Ee===0&&(n.mode&1)===0&&(So=at()+500,Ri&&or()))}function Wt(e,n){var o=e.callbackNode;og(e,n);var s=ci(e,e===gt?Ct:0);if(s===0)o!==null&&pu(o),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(o!=null&&pu(o),n===1)e.tag===0?r2(jp.bind(null,e)):dh(jp.bind(null,e)),Jg(function(){(Ee&6)===0&&or()}),o=null;else{switch(vu(s)){case 1:o=nl;break;case 4:o=fu;break;case 16:o=ai;break;case 536870912:o=mu;break;default:o=ai}o=Ip(o,Cp.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function Cp(e,n){if(Ji=-1,es=0,(Ee&6)!==0)throw Error(i(327));var o=e.callbackNode;if(No()&&e.callbackNode!==o)return null;var s=ci(e,e===gt?Ct:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||n)n=ts(e,s);else{n=s;var d=Ee;Ee|=2;var h=Np();(gt!==e||Ct!==n)&&(Hn=null,So=at()+500,zr(e,n));do try{C2();break}catch(M){Sp(e,M)}while(!0);Fl(),Yi.current=h,Ee=d,ct!==null?n=0:(gt=null,Ct=0,n=pt)}if(n!==0){if(n===2&&(d=rl(e),d!==0&&(s=d,n=Cc(e,d))),n===1)throw o=Ma,zr(e,0),ur(e,s),Wt(e,at()),o;if(n===6)ur(e,s);else{if(d=e.current.alternate,(s&30)===0&&!b2(d)&&(n=ts(e,s),n===2&&(h=rl(e),h!==0&&(s=h,n=Cc(e,h))),n===1))throw o=Ma,zr(e,0),ur(e,s),Wt(e,at()),o;switch(e.finishedWork=d,e.finishedLanes=s,n){case 0:case 1:throw Error(i(345));case 2:Or(e,Ft,Hn);break;case 3:if(ur(e,s),(s&130023424)===s&&(n=_c+500-at(),10<n)){if(ci(e,0)!==0)break;if(d=e.suspendedLanes,(d&s)!==s){Et(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Ml(Or.bind(null,e,Ft,Hn),n);break}Or(e,Ft,Hn);break;case 4:if(ur(e,s),(s&4194240)===s)break;for(n=e.eventTimes,d=-1;0<s;){var v=31-hn(s);h=1<<v,v=n[v],v>d&&(d=v),s&=~h}if(s=d,s=at()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*_2(s/1960))-s,10<s){e.timeoutHandle=Ml(Or.bind(null,e,Ft,Hn),s);break}Or(e,Ft,Hn);break;case 5:Or(e,Ft,Hn);break;default:throw Error(i(329))}}}return Wt(e,at()),e.callbackNode===o?Cp.bind(null,e):null}function Cc(e,n){var o=$a;return e.current.memoizedState.isDehydrated&&(zr(e,n).flags|=256),e=ts(e,n),e!==2&&(n=Ft,Ft=o,n!==null&&jc(n)),e}function jc(e){Ft===null?Ft=e:Ft.push.apply(Ft,e)}function b2(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var s=0;s<o.length;s++){var d=o[s],h=d.getSnapshot;d=d.value;try{if(!pn(h(),d))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ur(e,n){for(n&=~wc,n&=~Zi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-hn(n),s=1<<o;e[o]=-1,n&=~s}}function jp(e){if((Ee&6)!==0)throw Error(i(327));No();var n=ci(e,0);if((n&1)===0)return Wt(e,at()),null;var o=ts(e,n);if(e.tag!==0&&o===2){var s=rl(e);s!==0&&(n=s,o=Cc(e,s))}if(o===1)throw o=Ma,zr(e,0),ur(e,n),Wt(e,at()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Or(e,Ft,Hn),Wt(e,at()),null}function Sc(e,n){var o=Ee;Ee|=1;try{return e(n)}finally{Ee=o,Ee===0&&(So=at()+500,Ri&&or())}}function Pr(e){cr!==null&&cr.tag===0&&(Ee&6)===0&&No();var n=Ee;Ee|=1;var o=sn.transition,s=He;try{if(sn.transition=null,He=1,e)return e()}finally{He=s,sn.transition=o,Ee=n,(Ee&6)===0&&or()}}function Nc(){Qt=jo.current,Qe(jo)}function zr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Xg(o)),ct!==null)for(o=ct.return;o!==null;){var s=o;switch(Pl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Si();break;case 3:bo(),Qe(Ot),Qe(jt),Zl();break;case 5:Gl(s);break;case 4:bo();break;case 13:Qe(tt);break;case 19:Qe(tt);break;case 10:Wl(s.type._context);break;case 22:case 23:Nc()}o=o.return}if(gt=e,ct=e=hr(e.current,null),Ct=Qt=n,pt=0,Ma=null,wc=Zi=Er=0,Ft=$a=null,Tr!==null){for(n=0;n<Tr.length;n++)if(o=Tr[n],s=o.interleaved,s!==null){o.interleaved=null;var d=s.next,h=o.pending;if(h!==null){var v=h.next;h.next=d,s.next=v}o.pending=s}Tr=null}return e}function Sp(e,n){do{var o=ct;try{if(Fl(),Oi.current=Wi,Di){for(var s=nt.memoizedState;s!==null;){var d=s.queue;d!==null&&(d.pending=null),s=s.next}Di=!1}if(Ar=0,mt=ht=nt=null,Ca=!1,ja=0,xc.current=null,o===null||o.return===null){pt=1,Ma=n,ct=null;break}e:{var h=e,v=o.return,M=o,B=n;if(n=Ct,M.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var Y=B,ae=M,le=ae.tag;if((ae.mode&1)===0&&(le===0||le===11||le===15)){var oe=ae.alternate;oe?(ae.updateQueue=oe.updateQueue,ae.memoizedState=oe.memoizedState,ae.lanes=oe.lanes):(ae.updateQueue=null,ae.memoizedState=null)}var pe=Qh(v);if(pe!==null){pe.flags&=-257,Xh(pe,v,M,h,n),pe.mode&1&&Kh(h,Y,n),n=pe,B=Y;var ge=n.updateQueue;if(ge===null){var ye=new Set;ye.add(B),n.updateQueue=ye}else ge.add(B);break e}else{if((n&1)===0){Kh(h,Y,n),Rc();break e}B=Error(i(426))}}else if(et&&M.mode&1){var it=Qh(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Xh(it,v,M,h,n),Dl(ko(B,M));break e}}h=B=ko(B,M),pt!==4&&(pt=2),$a===null?$a=[h]:$a.push(h),h=v;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var H=Yh(h,B,n);_h(h,H);break e;case 1:M=B;var F=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(lr===null||!lr.has(q)))){h.flags|=65536,n&=-n,h.lanes|=n;var de=Zh(h,M,n);_h(h,de);break e}}h=h.return}while(h!==null)}Lp(o)}catch(xe){n=xe,ct===o&&o!==null&&(ct=o=o.return);continue}break}while(!0)}function Np(){var e=Yi.current;return Yi.current=Wi,e===null?Wi:e}function Rc(){(pt===0||pt===3||pt===2)&&(pt=4),gt===null||(Er&268435455)===0&&(Zi&268435455)===0||ur(gt,Ct)}function ts(e,n){var o=Ee;Ee|=2;var s=Np();(gt!==e||Ct!==n)&&(Hn=null,zr(e,n));do try{k2();break}catch(d){Sp(e,d)}while(!0);if(Fl(),Ee=o,Yi.current=s,ct!==null)throw Error(i(261));return gt=null,Ct=0,pt}function k2(){for(;ct!==null;)Rp(ct)}function C2(){for(;ct!==null&&!Z0();)Rp(ct)}function Rp(e){var n=Tp(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,n===null?Lp(e):ct=n,xc.current=null}function Lp(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=g2(o,n,Qt),o!==null){ct=o;return}}else{if(o=v2(o,n),o!==null){o.flags&=32767,ct=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pt=6,ct=null;return}}if(n=n.sibling,n!==null){ct=n;return}ct=n=e}while(n!==null);pt===0&&(pt=5)}function Or(e,n,o){var s=He,d=sn.transition;try{sn.transition=null,He=1,j2(e,n,o,s)}finally{sn.transition=d,He=s}return null}function j2(e,n,o,s){do No();while(cr!==null);if((Ee&6)!==0)throw Error(i(327));o=e.finishedWork;var d=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var h=o.lanes|o.childLanes;if(ag(e,h),e===gt&&(ct=gt=null,Ct=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Qi||(Qi=!0,Ip(ai,function(){return No(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=sn.transition,sn.transition=null;var v=He;He=1;var M=Ee;Ee|=4,xc.current=null,x2(e,o),xp(o,e),Ug(Rl),hi=!!Nl,Rl=Nl=null,e.current=o,w2(o),K0(),Ee=M,He=v,sn.transition=h}else e.current=o;if(Qi&&(Qi=!1,cr=e,Xi=d),h=e.pendingLanes,h===0&&(lr=null),J0(o.stateNode),Wt(e,at()),n!==null)for(s=e.onRecoverableError,o=0;o<n.length;o++)d=n[o],s(d.value,{componentStack:d.stack,digest:d.digest});if(Ki)throw Ki=!1,e=bc,bc=null,e;return(Xi&1)!==0&&e.tag!==0&&No(),h=e.pendingLanes,(h&1)!==0?e===kc?Ta++:(Ta=0,kc=e):Ta=0,or(),null}function No(){if(cr!==null){var e=vu(Xi),n=sn.transition,o=He;try{if(sn.transition=null,He=16>e?16:e,cr===null)var s=!1;else{if(e=cr,cr=null,Xi=0,(Ee&6)!==0)throw Error(i(331));var d=Ee;for(Ee|=4,me=e.current;me!==null;){var h=me,v=h.child;if((me.flags&16)!==0){var M=h.deletions;if(M!==null){for(var B=0;B<M.length;B++){var Y=M[B];for(me=Y;me!==null;){var ae=me;switch(ae.tag){case 0:case 11:case 15:La(8,ae,h)}var le=ae.child;if(le!==null)le.return=ae,me=le;else for(;me!==null;){ae=me;var oe=ae.sibling,pe=ae.return;if(fp(ae),ae===Y){me=null;break}if(oe!==null){oe.return=pe,me=oe;break}me=pe}}}var ge=h.alternate;if(ge!==null){var ye=ge.child;if(ye!==null){ge.child=null;do{var it=ye.sibling;ye.sibling=null,ye=it}while(ye!==null)}}me=h}}if((h.subtreeFlags&2064)!==0&&v!==null)v.return=h,me=v;else e:for(;me!==null;){if(h=me,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:La(9,h,h.return)}var H=h.sibling;if(H!==null){H.return=h.return,me=H;break e}me=h.return}}var F=e.current;for(me=F;me!==null;){v=me;var q=v.child;if((v.subtreeFlags&2064)!==0&&q!==null)q.return=v,me=q;else e:for(v=F;me!==null;){if(M=me,(M.flags&2048)!==0)try{switch(M.tag){case 0:case 11:case 15:Gi(9,M)}}catch(xe){ot(M,M.return,xe)}if(M===v){me=null;break e}var de=M.sibling;if(de!==null){de.return=M.return,me=de;break e}me=M.return}}if(Ee=d,or(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(ii,e)}catch{}s=!0}return s}finally{He=o,sn.transition=n}}return!1}function Mp(e,n,o){n=ko(o,n),n=Yh(e,n,1),e=ir(e,n,1),n=Et(),e!==null&&(na(e,1,n),Wt(e,n))}function ot(e,n,o){if(e.tag===3)Mp(e,e,o);else for(;n!==null;){if(n.tag===3){Mp(n,e,o);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(lr===null||!lr.has(s))){e=ko(o,e),e=Zh(n,e,1),n=ir(n,e,1),e=Et(),n!==null&&(na(n,1,e),Wt(n,e));break}}n=n.return}}function S2(e,n,o){var s=e.pingCache;s!==null&&s.delete(n),n=Et(),e.pingedLanes|=e.suspendedLanes&o,gt===e&&(Ct&o)===o&&(pt===4||pt===3&&(Ct&130023424)===Ct&&500>at()-_c?zr(e,0):wc|=o),Wt(e,n)}function $p(e,n){n===0&&((e.mode&1)===0?n=1:(n=li,li<<=1,(li&130023424)===0&&(li=4194304)));var o=Et();e=Bn(e,n),e!==null&&(na(e,n,o),Wt(e,o))}function N2(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),$p(e,o)}function R2(e,n){var o=0;switch(e.tag){case 13:var s=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(n),$p(e,o)}var Tp;Tp=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ot.current)Bt=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return Bt=!1,m2(e,n,o);Bt=(e.flags&131072)!==0}else Bt=!1,et&&(n.flags&1048576)!==0&&uh(n,Mi,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Ui(e,n),e=n.pendingProps;var d=mo(n,jt.current);_o(n,o),d=Xl(null,n,s,e,d,o);var h=Jl();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Dt(s)?(h=!0,Ni(n)):h=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ul(n),d.updater=Hi,n.stateNode=d,d._reactInternals=n,ac(n,s,e,o),n=cc(null,n,s,!0,h,o)):(n.tag=0,et&&h&&El(n),At(null,n,d,o),n=n.child),n;case 16:s=n.elementType;e:{switch(Ui(e,n),e=n.pendingProps,d=s._init,s=d(s._payload),n.type=s,d=n.tag=M2(s),e=mn(s,e),d){case 0:n=lc(null,n,s,e,o);break e;case 1:n=op(null,n,s,e,o);break e;case 11:n=Jh(null,n,s,e,o);break e;case 14:n=ep(null,n,s,mn(s.type,e),o);break e}throw Error(i(306,s,""))}return n;case 0:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:mn(s,d),lc(e,n,s,d,o);case 1:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:mn(s,d),op(e,n,s,d,o);case 3:e:{if(ap(n),e===null)throw Error(i(387));s=n.pendingProps,h=n.memoizedState,d=h.element,wh(e,n),Pi(n,s,null,o);var v=n.memoizedState;if(s=v.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){d=ko(Error(i(423)),n),n=ip(e,n,s,o,d);break e}else if(s!==d){d=ko(Error(i(424)),n),n=ip(e,n,s,o,d);break e}else for(Kt=tr(n.stateNode.containerInfo.firstChild),Zt=n,et=!0,fn=null,o=yh(n,null,s,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(yo(),s===d){n=Wn(e,n,o);break e}At(e,n,s,o)}n=n.child}return n;case 5:return kh(n),e===null&&Ol(n),s=n.type,d=n.pendingProps,h=e!==null?e.memoizedProps:null,v=d.children,Ll(s,d)?v=null:h!==null&&Ll(s,h)&&(n.flags|=32),rp(e,n),At(e,n,v,o),n.child;case 6:return e===null&&Ol(n),null;case 13:return sp(e,n,o);case 4:return Vl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=xo(n,null,s,o):At(e,n,s,o),n.child;case 11:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:mn(s,d),Jh(e,n,s,d,o);case 7:return At(e,n,n.pendingProps,o),n.child;case 8:return At(e,n,n.pendingProps.children,o),n.child;case 12:return At(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(s=n.type._context,d=n.pendingProps,h=n.memoizedProps,v=d.value,Ge(Ii,s._currentValue),s._currentValue=v,h!==null)if(pn(h.value,v)){if(h.children===d.children&&!Ot.current){n=Wn(e,n,o);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var M=h.dependencies;if(M!==null){v=h.child;for(var B=M.firstContext;B!==null;){if(B.context===s){if(h.tag===1){B=Fn(-1,o&-o),B.tag=2;var Y=h.updateQueue;if(Y!==null){Y=Y.shared;var ae=Y.pending;ae===null?B.next=B:(B.next=ae.next,ae.next=B),Y.pending=B}}h.lanes|=o,B=h.alternate,B!==null&&(B.lanes|=o),Hl(h.return,o,n),M.lanes|=o;break}B=B.next}}else if(h.tag===10)v=h.type===n.type?null:h.child;else if(h.tag===18){if(v=h.return,v===null)throw Error(i(341));v.lanes|=o,M=v.alternate,M!==null&&(M.lanes|=o),Hl(v,o,n),v=h.sibling}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===n){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}At(e,n,d.children,o),n=n.child}return n;case 9:return d=n.type,s=n.pendingProps.children,_o(n,o),d=on(d),s=s(d),n.flags|=1,At(e,n,s,o),n.child;case 14:return s=n.type,d=mn(s,n.pendingProps),d=mn(s.type,d),ep(e,n,s,d,o);case 15:return tp(e,n,n.type,n.pendingProps,o);case 17:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:mn(s,d),Ui(e,n),n.tag=1,Dt(s)?(e=!0,Ni(n)):e=!1,_o(n,o),Vh(n,s,d),ac(n,s,d,o),cc(null,n,s,!0,e,o);case 19:return cp(e,n,o);case 22:return np(e,n,o)}throw Error(i(156,n.tag))};function Ip(e,n){return hu(e,n)}function L2(e,n,o,s){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,n,o,s){return new L2(e,n,o,s)}function Lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M2(e){if(typeof e=="function")return Lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===V)return 11;if(e===ce)return 14}return 2}function hr(e,n){var o=e.alternate;return o===null?(o=ln(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function ns(e,n,o,s,d,h){var v=2;if(s=e,typeof e=="function")Lc(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case z:return Dr(o.children,d,h,n);case O:v=8,d|=8;break;case U:return e=ln(12,o,n,d|2),e.elementType=U,e.lanes=h,e;case te:return e=ln(13,o,n,d),e.elementType=te,e.lanes=h,e;case ie:return e=ln(19,o,n,d),e.elementType=ie,e.lanes=h,e;case J:return rs(o,d,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:v=10;break e;case X:v=9;break e;case V:v=11;break e;case ce:v=14;break e;case se:v=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=ln(v,o,n,d),n.elementType=e,n.type=s,n.lanes=h,n}function Dr(e,n,o,s){return e=ln(7,e,s,n),e.lanes=o,e}function rs(e,n,o,s){return e=ln(22,e,s,n),e.elementType=J,e.lanes=o,e.stateNode={isHidden:!1},e}function Mc(e,n,o){return e=ln(6,e,null,n),e.lanes=o,e}function $c(e,n,o){return n=ln(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $2(e,n,o,s,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=s,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tc(e,n,o,s,d,h,v,M,B){return e=new $2(e,n,o,M,B),n===1?(n=1,h===!0&&(n|=8)):n=0,h=ln(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:s,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(h),e}function T2(e,n,o){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:s==null?null:""+s,children:e,containerInfo:n,implementation:o}}function Ap(e){if(!e)return rr;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Dt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Dt(o))return lh(e,o,n)}return n}function Ep(e,n,o,s,d,h,v,M,B){return e=Tc(o,s,!0,e,d,h,v,M,B),e.context=Ap(null),o=e.current,s=Et(),d=dr(o),h=Fn(s,d),h.callback=n??null,ir(o,h,d),e.current.lanes=d,na(e,d,s),Wt(e,s),e}function os(e,n,o,s){var d=n.current,h=Et(),v=dr(d);return o=Ap(o),n.context===null?n.context=o:n.pendingContext=o,n=Fn(h,v),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=ir(d,n,v),e!==null&&(yn(e,d,v,h),Ei(e,d,v)),v}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Ic(e,n){Pp(e,n),(e=e.alternate)&&Pp(e,n)}function I2(){return null}var zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ac(e){this._internalRoot=e}is.prototype.render=Ac.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));os(e,n,null,null)},is.prototype.unmount=Ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pr(function(){os(null,e,null,null)}),n[Pn]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var n=wu();e={blockedOn:null,target:e,priority:n};for(var o=0;o<Xn.length&&n!==0&&n<Xn[o].priority;o++);Xn.splice(o,0,e),o===0&&ku(e)}};function Ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Op(){}function A2(e,n,o,s,d){if(d){if(typeof s=="function"){var h=s;s=function(){var Y=as(v);h.call(Y)}}var v=Ep(n,s,e,0,null,!1,!1,"",Op);return e._reactRootContainer=v,e[Pn]=v.current,ga(e.nodeType===8?e.parentNode:e),Pr(),v}for(;d=e.lastChild;)e.removeChild(d);if(typeof s=="function"){var M=s;s=function(){var Y=as(B);M.call(Y)}}var B=Tc(e,0,!1,null,null,!1,!1,"",Op);return e._reactRootContainer=B,e[Pn]=B.current,ga(e.nodeType===8?e.parentNode:e),Pr(function(){os(n,B,o,s)}),B}function ls(e,n,o,s,d){var h=o._reactRootContainer;if(h){var v=h;if(typeof d=="function"){var M=d;d=function(){var B=as(v);M.call(B)}}os(n,v,e,d)}else v=A2(o,n,e,d,s);return as(v)}yu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=ta(n.pendingLanes);o!==0&&(al(n,o|1),Wt(n,at()),(Ee&6)===0&&(So=at()+500,or()))}break;case 13:Pr(function(){var s=Bn(e,1);if(s!==null){var d=Et();yn(s,e,1,d)}}),Ic(e,1)}},il=function(e){if(e.tag===13){var n=Bn(e,134217728);if(n!==null){var o=Et();yn(n,e,134217728,o)}Ic(e,134217728)}},xu=function(e){if(e.tag===13){var n=dr(e),o=Bn(e,n);if(o!==null){var s=Et();yn(o,e,n,s)}Ic(e,n)}},wu=function(){return He},_u=function(e,n){var o=He;try{return He=e,n()}finally{He=o}},Qo=function(e,n,o){switch(n){case"input":if(Fe(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var s=o[n];if(s!==e&&s.form===e.form){var d=ji(s);if(!d)throw Error(i(90));ve(s),Fe(s,d)}}}break;case"textarea":Tt(e,o);break;case"select":n=o.value,n!=null&&Ze(e,!!o.multiple,n,!1)}},au=Sc,iu=Pr;var E2={usingClientEntryPoint:!1,Events:[xa,po,ji,ru,ou,Sc]},Ia={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P2={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=du(e),e===null?null:e.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||I2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{ii=cs.inject(P2),jn=cs}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E2,Ht.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ec(n))throw Error(i(200));return T2(e,n,null,o)},Ht.createRoot=function(e,n){if(!Ec(e))throw Error(i(299));var o=!1,s="",d=zp;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Tc(e,1,!1,null,null,o,!1,s,d),e[Pn]=n.current,ga(e.nodeType===8?e.parentNode:e),new Ac(n)},Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=du(n),e=e===null?null:e.stateNode,e},Ht.flushSync=function(e){return Pr(e)},Ht.hydrate=function(e,n,o){if(!ss(n))throw Error(i(200));return ls(null,e,n,!0,o)},Ht.hydrateRoot=function(e,n,o){if(!Ec(e))throw Error(i(405));var s=o!=null&&o.hydratedSources||null,d=!1,h="",v=zp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),n=Ep(n,null,e,1,o??null,d,!1,h,v),e[Pn]=n.current,ga(e),s)for(e=0;e<s.length;e++)o=s[e],d=o._getVersion,d=d(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,d]:n.mutableSourceEagerHydrationData.push(o,d);return new is(n)},Ht.render=function(e,n,o){if(!ss(n))throw Error(i(200));return ls(null,e,n,!1,o)},Ht.unmountComponentAtNode=function(e){if(!ss(e))throw Error(i(40));return e._reactRootContainer?(Pr(function(){ls(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1},Ht.unstable_batchedUpdates=Sc,Ht.unstable_renderSubtreeIntoContainer=function(e,n,o,s){if(!ss(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ls(e,n,o,!1,s)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var Vp;function yf(){if(Vp)return Oc.exports;Vp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Oc.exports=H2(),Oc.exports}var Gp;function q2(){if(Gp)return ds;Gp=1;var t=yf();return ds.createRoot=t.createRoot,ds.hydrateRoot=t.hydrateRoot,ds}var U2=q2();const V2=vf(U2);function xf(t){var a,i,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t)){var c=t.length;for(a=0;a<c;a++)t[a]&&(i=xf(t[a]))&&(l&&(l+=" "),l+=i)}else for(i in t)t[i]&&(l&&(l+=" "),l+=i);return l}function ee(){for(var t,a,i=0,l="",c=arguments.length;i<c;i++)(t=arguments[i])&&(a=xf(t))&&(l&&(l+=" "),l+=a);return l}const Za=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Za.displayName="PlusIcon";const G2="_root_7uomf_13",Y2="_sm_7uomf_82",Z2="_md_7uomf_88",K2="_lg_7uomf_94",Q2="_horizontal_7uomf_107",X2="_alignStart_7uomf_121",J2="_vertical_7uomf_125",ev="_inner_7uomf_131",tv="_iconSlot_7uomf_146",nv="_label_7uomf_163",Br={root:G2,sm:Y2,md:Z2,lg:K2,horizontal:Q2,alignStart:X2,vertical:J2,inner:ev,iconSlot:tv,label:nv};function Yp(t){return typeof t=="number"?`${t}px`:t}const rv=g.forwardRef(({size:t="md",layout:a="horizontal",align:i="center",label:l="Add",hideLabel:c=!1,icon:u,height:p,borderRadius:f,className:m,style:y,disabled:x,type:_="button",...w},$)=>{const R=u??r.jsx(Za,{size:"100%"}),j={};return p!==void 0&&(j["--area-min-height"]=Yp(p)),f!==void 0&&(j["--area-radius"]=Yp(f)),r.jsx("button",{ref:$,type:_,className:ee(Br.root,Br[t],Br[a],i==="start"&&Br.alignStart,m),disabled:x,"data-size":t,"data-layout":a,style:{...j,...y},...w,children:r.jsxs("span",{className:Br.inner,children:[r.jsx("span",{className:Br.iconSlot,"aria-hidden":"true",children:R}),!c&&l&&r.jsx("span",{className:Br.label,children:l})]})})});rv.displayName="AreaButton";const ov="_root_b29pw_8",av="_image_b29pw_33",iv="_initials_b29pw_40",sv="_iconSlot_b29pw_52",fr={root:ov,image:av,initials:iv,iconSlot:sv,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function lv({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function cv(t){const a=t.trim().split(/\s+/).filter(c=>/[\p{L}\p{N}]/u.test(c));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),l=a[a.length-1].charAt(0);return(i+l).toUpperCase()}const An=g.forwardRef(({src:t,alt:a,initials:i,name:l,icon:c,size:u="md",color:p="neutral",variant:f="subtle",shape:m="circle",className:y,...x},_)=>{const[w,$]=g.useState(!1),R=!!t&&!w,j=(i==null?void 0:i.slice(0,2).toUpperCase())??(l?cv(l):"");let S;return R?S=r.jsx("img",{src:t,alt:a??"",className:fr.image,onError:()=>$(!0),draggable:!1},t):j?S=r.jsx("span",{className:fr.initials,"aria-hidden":a?void 0:!0,children:j}):S=r.jsx("span",{className:fr.iconSlot,"aria-hidden":"true",children:c??r.jsx(lv,{})}),r.jsx("span",{ref:_,"data-size":u,"data-color":p,"data-variant":f,"data-shape":m,className:ee(fr.root,fr[`size-${u}`],fr[`color-${p}`],fr[`variant-${f}`],fr[`shape-${m}`],y),...x,children:S})});An.displayName="Avatar";const dv="_root_uqz3u_7",uv={root:dv},dn=g.forwardRef(({as:t="span",className:a,children:i,...l},c)=>r.jsx(t,{ref:c,className:ee(uv.root,a),...l,children:i}));dn.displayName="Eyebrow";const hv="_root_1tnwf_15",pv={root:hv},fv=g.forwardRef(({scale:t="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:l="",onChange:c,readOnly:u=!1,disabled:p=!1,className:f,onInput:m,...y},x)=>{const _=i!==void 0,w=g.useRef(null),[$,R]=g.useState(()=>_?!i:!l),j=g.useCallback(C=>{w.current=C,typeof x=="function"?x(C):x&&(x.current=C)},[x]);g.useEffect(()=>{!_&&w.current&&l&&(w.current.textContent=l,R(!l))},[]),g.useEffect(()=>{_&&w.current&&(w.current.textContent??"")!==i&&(w.current.textContent=i??"",R(!(i??"")))},[i,_]);const S=C=>{const T=C.currentTarget.textContent??"";R(T===""),c==null||c(T),m==null||m(C)},L=C=>{C.preventDefault();const T=C.clipboardData.getData("text/plain");document.execCommand("insertText",!1,T)},N=!p&&!u;return r.jsx("span",{ref:j,contentEditable:N?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":p||void 0,"aria-readonly":u||void 0,"data-scale":t,"data-empty":$||void 0,"data-placeholder":a,"data-disabled":p||void 0,"data-readonly":u||void 0,className:ee(pv.root,f),onInput:S,onPaste:L,...y})});fv.displayName="TypeBox";const mv="_root_1brpy_12",gv="_ghost_1brpy_27",vv="_path_1brpy_32",Ea={root:mv,"ai-spin":"_ai-spin_1brpy_1",ghost:gv,"ai-morph":"_ai-morph_1brpy_1",path:vv,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},yv={xs:16,sm:24,md:32,lg:48,xl:64},xv={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Zp="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",us=t=>t==="inverse"||t==="inverse-light",wv=t=>t==="stroke"||t==="stroke-light",Md=g.forwardRef(({size:t="md",variant:a="gradient-fill",state:i="loading",className:l,style:c,"aria-label":u,...p},f)=>{const m=g.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${m}`,x=`aiglow-${m}`,_=typeof t=="string",w=_?yv[t]:t,$=_?xv[t]:w<=16?1.75:w<=24?1.5:w<=32?1.25:1.1,R=a==="gradient-fill"?`url(#${y})`:us(a)?"currentColor":"none",j=us(a)?"none":wv(a)?"currentColor":`url(#${y})`,S="currentColor",L=a!=="stroke"&&a!=="stroke-light"&&!us(a);return r.jsxs("svg",{ref:f,width:w,height:w,viewBox:"0 0 24 24",fill:"none",className:ee(Ea.root,Ea[`variant-${a}`],Ea[`state-${i}`],l),style:c,"data-state":i,"aria-label":u??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...p,children:[!us(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:x,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:Zp,stroke:S,strokeWidth:$*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Ea.ghost}),r.jsx("path",{d:Zp,fill:R,stroke:j==="none"?void 0:j,strokeWidth:j==="none"?void 0:$,strokeLinecap:"round",strokeLinejoin:"round",filter:L?`url(#${x})`:void 0,className:Ea.path})]})});Md.displayName="AILoader";const _v="_root_10act_14",bv="_hovered_10act_68",kv="_loading_10act_69",Cv="_sm_10act_90",jv="_md_10act_98",Sv="_lg_10act_106",Nv="_dark_10act_116",Rv="_icon_10act_122",Ro={root:_v,hovered:bv,loading:kv,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:Cv,md:jv,lg:Sv,dark:Nv,icon:Rv},Kp={sm:12,md:14,lg:18};function Lv({size:t,light:a}){return r.jsxs("svg",{width:t,height:t,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const wf=g.forwardRef(({size:t="md",dark:a,loading:i,className:l,onMouseEnter:c,onMouseLeave:u,...p},f)=>{const[m,y]=g.useState(!1);return r.jsx("button",{ref:f,className:ee(Ro.root,Ro[t],a&&Ro.dark,i?Ro.loading:m&&Ro.hovered,l),"aria-busy":i||void 0,onMouseEnter:x=>{y(!0),c==null||c(x)},onMouseLeave:x=>{y(!1),u==null||u(x)},...p,children:r.jsx("span",{className:Ro.icon,children:i?r.jsx(Md,{size:Kp[t],variant:a?"inverse-light":"gradient-fill"}):r.jsx(Lv,{size:Kp[t],light:a})})})});wf.displayName="AICoreButton";const Mv="_root_1qx4u_9",$v="_star_1qx4u_34",Fc={root:Mv,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:$v},Tv="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",_f=g.forwardRef(({size:t="sm",className:a,...i},l)=>r.jsx("span",{ref:l,"data-size":t,"aria-hidden":"true",className:ee(Fc.root,Fc[`size-${t}`],a),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:Fc.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:Tv,fill:"currentColor"})})}));_f.displayName="AIAvatar";const Iv="_shell_lalw3_21",Av="_wrapper_lalw3_58",Ev="_card_lalw3_65",Pv="_cardClip_lalw3_94",zv="_textarea_lalw3_160",Ov="_actions_lalw3_203",Ao={shell:Iv,wrapper:Av,card:Ev,cardClip:Pv,textarea:zv,actions:Ov},bf=g.forwardRef(({className:t,children:a,...i},l)=>r.jsx("div",{ref:l,className:ee(Ao.shell,t),...i,children:a}));bf.displayName="AIComposer";function Dv(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const kf=g.forwardRef(({value:t,onChange:a,onSubmit:i,maxRows:l=5,radius:c="sm",placeholder:u="Ask AI anything…",className:p,onKeyDown:f,disabled:m,children:y,style:x,..._},w)=>{const $=g.useRef(null);g.useEffect(()=>{const N=$.current;N&&(N.style.height="auto",N.style.height=`${N.scrollHeight}px`)},[t]);const R=g.useCallback(N=>a(N.target.value),[a]),j=g.useCallback(N=>{f==null||f(N),!N.defaultPrevented&&N.key==="Enter"&&!N.shiftKey&&i&&(N.preventDefault(),i())},[f,i]),S=g.useCallback(N=>{$.current=N,Dv(w,N)},[w]),L={...x??{},"--ai-composer-max-rows":l};return r.jsx("div",{className:ee(Ao.wrapper,p),"data-radius":c,children:r.jsx("div",{className:Ao.card,children:r.jsxs("div",{className:Ao.cardClip,children:[r.jsx("textarea",{..._,ref:S,className:Ao.textarea,rows:1,value:t,onChange:R,onKeyDown:j,placeholder:u,disabled:m,style:L}),y!=null&&r.jsx("div",{className:Ao.actions,children:y})]})})})});kf.displayName="AIComposerInput";const Bv="_root_fv0gc_10",Fv="_simple_fv0gc_28",Wv="_float_fv0gc_83",Qp={root:Bv,simple:Fv,float:Wv},Hv=g.forwardRef(({variant:t="simple",className:a,children:i,...l},c)=>r.jsx("section",{ref:c,"data-variant":t,className:ee(Qp.root,Qp[t],a),...l,children:i}));Hv.displayName="AIConversation";const qv="_fadeFrame_1l0ib_19",Uv="_scroller_1l0ib_32",Vv="_content_1l0ib_89",Gv="_messageBlock_1l0ib_108",Yv="_messageBlockAi_1l0ib_116",Zv="_inboundBlock_1l0ib_128",Kv="_inboundLoader_1l0ib_136",Qv="_inboundLoaderLabel_1l0ib_146",Xv="_outboundBlock_1l0ib_153",Jv="_outboundHeader_1l0ib_161",e3="_messageBlockUser_1l0ib_168",t3="_aiThreadOutboundIn_1l0ib_1",n3="_messageBody_1l0ib_182",r3="_messageBodyAi_1l0ib_193",o3="_messageBodyUser_1l0ib_200",a3="_label_1l0ib_159",i3="_labelAi_1l0ib_221",s3="_labelUser_1l0ib_159",l3="_labelAvatar_1l0ib_224",c3="_labelText_1l0ib_237",d3="_timestamp_1l0ib_244",u3="_timestampAi_1l0ib_259",h3="_timestampUser_1l0ib_260",p3="_timestampInline_1l0ib_270",f3="_aiThreadOutboundFadeIn_1l0ib_1",$e={fadeFrame:qv,scroller:Uv,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:Vv,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:Gv,messageBlockAi:Yv,inboundBlock:Zv,inboundLoader:Kv,inboundLoaderLabel:Qv,outboundBlock:Xv,outboundHeader:Jv,messageBlockUser:e3,aiThreadOutboundIn:t3,messageBody:n3,messageBodyAi:r3,messageBodyUser:o3,label:a3,labelAi:i3,labelUser:s3,labelAvatar:l3,labelText:c3,timestamp:d3,timestampAi:u3,timestampUser:h3,timestampInline:p3,aiThreadOutboundFadeIn:f3},Xp=8;function m3(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const g3=g.forwardRef(({density:t="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:l=80,className:c,children:u,...p},f)=>{const m=g.useRef(null),y=g.useRef(null),x=g.useRef(!0),[_,w]=g.useState(!1),[$,R]=g.useState(!1),j=g.useCallback(S=>{m.current=S,m3(f,S)},[f]);return g.useEffect(()=>{const S=m.current,L=y.current;if(!S||!L)return;const N=()=>{const{scrollTop:z,scrollHeight:O,clientHeight:U}=S;return O-z-U<l},C=z=>{S.scrollTo({top:S.scrollHeight,behavior:z?"smooth":"auto"})},T=()=>{const{scrollTop:z,scrollHeight:O,clientHeight:U}=S,Z=z>Xp,X=O-z-U>Xp;w(V=>V===Z?V:Z),R(V=>V===X?V:X)};i&&(C(!1),x.current=!0),T();const A=()=>{x.current=N(),T()};S.addEventListener("scroll",A,{passive:!0});const E=new ResizeObserver(()=>{i&&x.current&&C(!0),T()});return E.observe(L),E.observe(S),()=>{S.removeEventListener("scroll",A),E.disconnect()}},[i,l]),r.jsx("div",{className:$e.fadeFrame,"data-fade-top":_,"data-fade-bottom":$,children:r.jsx("div",{ref:j,className:ee($e.scroller,$e[`padding-${a}`],c),...p,children:r.jsx("div",{ref:y,className:ee($e.content,$e[`density-${t}`]),children:u})})})});g3.displayName="AIThread";const Is=g.forwardRef(({align:t="ai",avatar:a,className:i,children:l,...c},u)=>r.jsxs("div",{ref:u,className:ee($e.label,t==="user"?$e.labelUser:$e.labelAi,i),...c,children:[a!=null&&r.jsx("span",{className:$e.labelAvatar,children:a}),r.jsx("span",{className:$e.labelText,children:l})]}));Is.displayName="AILabel";const v3=t=>t.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function y3(t,a){if(typeof t=="string")return{text:t};const i=t instanceof Date?t:new Date(t);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const Ka=g.forwardRef(({value:t,align:a="ai",format:i=v3,inline:l=!1,className:c,...u},p)=>{const f=g.useMemo(()=>y3(t,i),[t,i]);return f?r.jsx("time",{ref:p,className:ee($e.timestamp,l?$e.timestampInline:a==="user"?$e.timestampUser:$e.timestampAi,c),dateTime:f.iso,...u,children:f.text}):null});Ka.displayName="AITimestamp";function x3(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(Ka,{align:"ai",value:t}):t}function w3(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(Is,{align:"ai",children:t}):t}const _3=g.forwardRef(({label:t,time:a,className:i,children:l,...c},u)=>r.jsxs("div",{ref:u,"data-author":"ai",className:ee($e.messageBlock,$e.messageBlockAi,i),...c,children:[w3(t),r.jsx("div",{className:ee($e.messageBody,$e.messageBodyAi),children:l}),x3(a)]}));_3.displayName="AIAssistantMessage";function b3(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(Ka,{align:"user",value:t}):t}function k3(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(Is,{align:"user",children:t}):t}const C3=g.forwardRef(({label:t,time:a,className:i,children:l,...c},u)=>r.jsxs("div",{ref:u,"data-author":"user",className:ee($e.messageBlock,$e.messageBlockUser,i),...c,children:[k3(t),r.jsx("div",{className:ee($e.messageBody,$e.messageBodyUser),children:l}),b3(a)]}));C3.displayName="AIUserMessage";function j3(t){return t===!1?null:t==null||t===!0?r.jsx(_f,{size:"sm"}):t}function S3(t,a){return t==null&&a==null?null:typeof t=="string"||typeof t=="number"||t==null?r.jsx(Is,{align:"ai",avatar:a,children:t}):t}const N3=g.forwardRef(({avatar:t,label:a="Teambridge AI",activity:i,actions:l,loading:c=!1,loaderLabel:u="Thinking…",className:p,children:f,...m},y)=>{const x=j3(t),_=S3(a,x);return r.jsxs("div",{ref:y,"data-author":"ai",className:ee($e.messageBlock,$e.messageBlockAi,$e.inboundBlock,p),...m,children:[_,i,f!=null&&r.jsx("div",{className:ee($e.messageBody,$e.messageBodyAi),children:f}),c&&r.jsxs("div",{className:$e.inboundLoader,"aria-live":"polite",children:[r.jsx(Md,{size:"xs"}),u!=null&&r.jsx("span",{className:$e.inboundLoaderLabel,children:u})]}),l]})});N3.displayName="AIInboundMessage";function R3(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const L3=g.forwardRef(({label:t="You",time:a,timeFormat:i,className:l,children:c,...u},p)=>{const f=a==null?null:R3(a)?r.jsx(Ka,{value:a,format:i,inline:!0}):a,m=t==null?null:typeof t=="string"||typeof t=="number"?r.jsx("span",{className:$e.labelText,children:t}):t,y=m!=null||f!=null;return r.jsxs("div",{ref:p,"data-author":"user",className:ee($e.messageBlock,$e.messageBlockUser,$e.outboundBlock,l),...u,children:[y&&r.jsxs("div",{className:ee($e.label,$e.labelUser,$e.outboundHeader),children:[m,f]}),r.jsx("div",{className:ee($e.messageBody,$e.messageBodyUser),children:c})]})});L3.displayName="AIOutboundMessage";const kr=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};kr.displayName="ChevronDownIcon";const M3="_root_1j4eq_8",$3="_header_1j4eq_17",T3="_headerSummary_1j4eq_53",I3="_aiTrailSummaryFade_1j4eq_1",A3="_aiTrailHeaderAppend_1j4eq_1",E3="_aiTrailEllipsis_1j4eq_1",P3="_headerCurrent_1j4eq_128",z3="_headerChevron_1j4eq_159",O3="_headerChevronExpanded_1j4eq_173",D3="_body_1j4eq_187",B3="_bodyExpanded_1j4eq_200",F3="_bodyCollapsed_1j4eq_201",W3="_bodyInner_1j4eq_203",H3="_bodyContent_1j4eq_187",q3="_step_1j4eq_225",U3="_stepIcon_1j4eq_242",V3="_stepAnimating_1j4eq_256",G3="_aiTrailStepPulse_1j4eq_1",Y3="_stepBody_1j4eq_267",Z3="_stepHead_1j4eq_282",K3="_stepLabel_1j4eq_286",Q3="_stepSeparator_1j4eq_288",X3="_stepDetail_1j4eq_292",J3="_subToggle_1j4eq_302",ey="_subToggleCount_1j4eq_335",ty="_subToggleChevron_1j4eq_339",ny="_subActivityWrap_1j4eq_358",ry="_subActivityExpanded_1j4eq_364",oy="_subActivityCollapsed_1j4eq_365",ay="_subActivityClip_1j4eq_367",iy="_subActivityList_1j4eq_378",sy="_subActivity_1j4eq_358",ly="_aiTrailSubActivityType_1j4eq_1",cy="_aiTrailSubActivityFade_1j4eq_1",qe={root:M3,header:$3,headerSummary:T3,aiTrailSummaryFade:I3,aiTrailHeaderAppend:A3,aiTrailEllipsis:E3,headerCurrent:P3,headerChevron:z3,headerChevronExpanded:O3,body:D3,bodyExpanded:B3,bodyCollapsed:F3,bodyInner:W3,bodyContent:H3,step:q3,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:U3,stepAnimating:V3,aiTrailStepPulse:G3,stepBody:Y3,stepHead:Z3,stepLabel:K3,stepSeparator:Q3,stepDetail:X3,subToggle:J3,subToggleCount:ey,subToggleChevron:ty,subActivityWrap:ny,subActivityExpanded:ry,subActivityCollapsed:oy,subActivityClip:ay,subActivityList:iy,subActivity:sy,aiTrailSubActivityType:ly,aiTrailSubActivityFade:cy},$d=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};$d.displayName="MessageDotsSquareIcon";function Td({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Td.displayName="SearchMdIcon";function zo({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Cf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Cf.displayName="Globe01Icon";const jf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};jf.displayName="Code02Icon";function Sf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Sf.displayName="Tool01Icon";const Pt=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Fo=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Fo.displayName="AlertCircleIcon";const dy={thinking:r.jsx($d,{size:14}),tool:r.jsx(Sf,{size:14}),search:r.jsx(Td,{size:14}),file:r.jsx(zo,{size:14}),web:r.jsx(Cf,{size:14}),code:r.jsx(jf,{size:14}),content:r.jsx(Pt,{size:14})},As=g.forwardRef(({type:t,status:a="done",detail:i,icon:l,subActivities:c,groupState:u="done",className:p,children:f,...m},y)=>{const x=a==="active"&&u==="live",_=a==="active"&&u==="live",w=a==="active"||a==="error",[$,R]=g.useState(null),j=$!==null?$:w;g.useEffect(()=>{R(null)},[a]);const S=g.useCallback(()=>R(!j),[j]),L=!!c&&c.length>0,N=(c==null?void 0:c.length)??0,C=a==="error"?r.jsx(Fo,{size:14}):l??dy[t];return r.jsxs("div",{ref:y,"data-step-type":t,"data-step-status":a,className:ee(qe.step,qe[`step-${a}`],x&&qe.stepAnimating,p),...m,children:[r.jsx("span",{className:qe.stepIcon,"aria-hidden":!0,children:C}),r.jsxs("span",{className:qe.stepBody,children:[r.jsxs("span",{className:qe.stepHead,children:[r.jsx("span",{className:qe.stepLabel,children:f}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:qe.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:qe.stepDetail,children:i})]}),L&&r.jsxs("button",{type:"button",className:qe.subToggle,onClick:S,"aria-expanded":j,"aria-label":j?`Collapse ${N} sub-steps`:`Expand ${N} sub-steps`,"data-expanded":j||void 0,children:[r.jsx("span",{className:qe.subToggleCount,children:N}),r.jsx("span",{className:qe.subToggleChevron,"aria-hidden":!0,children:r.jsx(kr,{size:10})})]})]}),L&&r.jsx(r.Fragment,{children:r.jsx("div",{className:ee(qe.subActivityWrap,j?qe.subActivityExpanded:qe.subActivityCollapsed),"aria-hidden":!j,children:r.jsx("div",{className:qe.subActivityClip,children:r.jsx("ul",{className:qe.subActivityList,"data-animating":_||void 0,children:c.map((T,A)=>r.jsx("li",{className:qe.subActivity,children:T},A))})})})})]})]})});As.displayName="AIActivityStep";function Jp(t){return t==="error"}function uy(t,a,i,l,c,u){if(t==="live")return i.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:c,children:i[l]??i[i.length-1]},l);const p=t==="error"?"Stopped":u?`Thought for ${u}`:"Thought";if(i.length===0){const f=a===1?"1 step":`${a} steps`;return`${p} · ${f}`}return r.jsxs(r.Fragment,{children:[p,i.map((f,m)=>r.jsxs(g.Fragment,{children:[" · ",f]},m))]})}const Id=g.forwardRef(({state:t="live",expanded:a,defaultExpanded:i,onToggle:l,duration:c,summary:u,className:p,children:f,...m},y)=>{const x=a!==void 0,[_,w]=g.useState(i??Jp(t)),[$,R]=g.useState(!1);g.useEffect(()=>{x||$||w(Jp(t))},[t,x,$]);const j=x?!!a:_,S=g.useCallback(()=>{const E=!j;x||(w(E),R(!0)),l==null||l(E)},[j,x,l]),{enhancedChildren:L,stepCount:N,stepLabels:C,currentLabelIdx:T}=g.useMemo(()=>{let E=0;const z=[];let O=-1;return{enhancedChildren:g.Children.map(f,Z=>{if(!g.isValidElement(Z))return Z;const X=Z.props;if(!("type"in X||"status"in X))return Z;E+=1;const te=X.status??"done";return te==="pending"?null:(X.children!=null&&(z.push(X.children),te==="active"&&(O=z.length-1)),hy(Z,t))}),stepCount:E,stepLabels:z,currentLabelIdx:O>=0?O:z.length-1}},[f,t]),A=u??uy(t,N,C,T,qe.headerCurrent,c);return r.jsxs("div",{ref:y,"data-state":t,"data-expanded":j,className:ee(qe.root,p),...m,children:[r.jsxs("button",{type:"button",className:qe.header,onClick:S,"aria-expanded":j,"aria-label":j?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:qe.headerSummary,children:A},`${t}-${T}`),r.jsx("span",{className:ee(qe.headerChevron,j&&qe.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(kr,{size:14})})]}),r.jsx("div",{className:ee(qe.body,j?qe.bodyExpanded:qe.bodyCollapsed),"aria-hidden":!j,children:r.jsx("div",{className:qe.bodyInner,children:r.jsxs("div",{className:qe.bodyContent,children:[L,t==="done"&&r.jsx(As,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Id.displayName="AIActivityTrail";function hy(t,a){return g.cloneElement(t,{groupState:a})}var Es=yf();const py="_wrapper_3tqlm_10",fy="_tooltip_3tqlm_22",my="_portal_3tqlm_23",gy="_top_3tqlm_61",vy="_bottom_3tqlm_71",yy="_left_3tqlm_81",xy="_right_3tqlm_91",hs={wrapper:py,tooltip:fy,portal:my,top:gy,bottom:vy,left:yy,right:xy},_r=({content:t,placement:a="top",delay:i=0,disabled:l=!1,maxWidth:c=280,offset:u=0,children:p})=>{const[f,m]=g.useState(!1),[y,x]=g.useState({top:0,left:0}),_=g.useRef(null),w=g.useRef(),$=g.useId(),R=g.useCallback(()=>{if(!_.current)return;const C=_.current.getBoundingClientRect(),T=6+u;let A=0,E=0;switch(a){case"top":A=C.top-T,E=C.left+C.width/2;break;case"bottom":A=C.bottom+T,E=C.left+C.width/2;break;case"left":A=C.top+C.height/2,E=C.left-T;break;case"right":A=C.top+C.height/2,E=C.right+T;break}x({top:A,left:E})},[a,u]),j=g.useCallback(()=>{l||(R(),clearTimeout(w.current),i>0?w.current=setTimeout(()=>m(!0),i):m(!0))},[l,i,R]),S=g.useCallback(()=>{clearTimeout(w.current),m(!1)},[]);g.useEffect(()=>{if(!f)return;const C=()=>R();return window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[f,R]);const L=xr.cloneElement(p,{"aria-describedby":f?$:void 0}),N=r.jsx("span",{id:$,role:"tooltip",className:ee(hs.tooltip,hs[a],hs.portal),"data-visible":f||void 0,style:{top:y.top,left:y.left,maxWidth:c!==void 0?c:void 0},children:t});return r.jsxs("span",{ref:_,className:hs.wrapper,onMouseEnter:j,onMouseLeave:S,onFocus:j,onBlur:S,children:[L,Es.createPortal(N,document.body)]})};_r.displayName="Tooltip";const wy="_root_v8mqg_9",_y="_hover_v8mqg_21",Wc={root:wy,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:_y};function by(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const Nf=g.forwardRef(({visibility:t="always",align:a="start",time:i,timeFormat:l,className:c,children:u,...p},f)=>{const m=i==null?null:by(i)?r.jsx(Ka,{value:i,format:l,inline:!0}):i,y=_=>{if(!g.isValidElement(_))return _;const w=_;if(w.type===_r)return w;const $=w.props["aria-label"];return $?r.jsx(_r,{content:$,placement:"top",delay:150,children:w}):w},x=g.Children.map(u,_=>{if(g.isValidElement(_)&&_.type===g.Fragment){const w=_.props.children;return g.Children.map(w,y)}return y(_)});return r.jsxs("div",{ref:f,"data-visibility":t,"data-align":a,className:ee(Wc.root,Wc[`align-${a}`],t==="hover"&&Wc.hover,c),...p,children:[x,m]})});Nf.displayName="AIMessageActions";const ky="_card_1apq1_17",Cy="_header_1apq1_69",jy="_iconBadge_1apq1_74",Sy="_iconInner_1apq1_89",Ny="_headerText_1apq1_100",Ry="_headerTopRow_1apq1_109",Ly="_eyebrow_1apq1_115",My="_title_1apq1_124",$y="_subtitle_1apq1_130",Ty="_headerTrailing_1apq1_135",Iy="_body_1apq1_141",Ay="_footer_1apq1_152",Ey="_footerEnd_1apq1_157",Py="_metaRow_1apq1_162",zy="_metaItem_1apq1_170",Oy="_resultHero_1apq1_180",Dy="_resultHeadline_1apq1_185",By="_resultDetail_1apq1_191",Fy="_clauses_1apq1_205",Wy="_clause_1apq1_205",Hy="_clauseLabel_1apq1_215",qy="_clauseBody_1apq1_225",Uy="_badgeExecuting_1apq1_245",Ye={card:ky,header:Cy,iconBadge:jy,iconInner:Sy,headerText:Ny,headerTopRow:Ry,eyebrow:Ly,title:My,subtitle:$y,headerTrailing:Ty,body:Iy,footer:Ay,footerEnd:Ey,metaRow:Py,metaItem:zy,resultHero:Oy,resultHeadline:Dy,resultDetail:By,clauses:Fy,clause:Wy,clauseLabel:Hy,clauseBody:qy,badgeExecuting:Uy},En=g.forwardRef(({tone:t="neutral",accent:a=!0,fill:i=!1,icon:l,eyebrow:c,title:u,subtitle:p,trailing:f,footer:m,footerEnd:y=!1,className:x,children:_,...w},$)=>{const R=c!=null||f!=null,j=R||u!=null||p!=null,S=l!=null||j;return r.jsxs("div",{ref:$,"data-tone":t,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":l!=null||void 0,className:ee(Ye.card,x),...w,children:[S&&r.jsxs("div",{className:Ye.header,children:[l!=null&&r.jsx("span",{className:ee(Ye.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:Ye.iconInner,children:l})}),j&&r.jsxs("div",{className:Ye.headerText,children:[R&&r.jsxs("div",{className:Ye.headerTopRow,children:[c!=null&&r.jsx("span",{className:Ye.eyebrow,children:c}),f!=null&&r.jsx("span",{className:Ye.headerTrailing,children:f})]}),u!=null&&r.jsx("span",{className:Ye.title,children:u}),p!=null&&r.jsx("span",{className:Ye.subtitle,children:p})]})]}),_!=null&&r.jsx("div",{className:Ye.body,children:_}),m!=null&&r.jsx("div",{className:ee(Ye.footer,y&&Ye.footerEnd),children:m})]})});En.displayName="UltronCard";const Vy="_root_zkkgh_6",Gy="_sm_zkkgh_24",Yy="_md_zkkgh_33",Zy="_lg_zkkgh_42",Ky="_neutral_zkkgh_53",Qy="_blue_zkkgh_66",Xy="_azure_zkkgh_79",Jy="_purple_zkkgh_92",ex="_pink_zkkgh_105",tx="_red_zkkgh_118",nx="_orange_zkkgh_131",rx="_yellow_zkkgh_144",ox="_matcha_zkkgh_157",ax="_green_zkkgh_170",ix="_subtle_zkkgh_184",sx="_outline_zkkgh_190",lx="_solid_zkkgh_196",cx="_dot_zkkgh_203",dx="_icon_zkkgh_212",ux="_dismiss_zkkgh_224",Fr={root:Vy,sm:Gy,md:Yy,lg:Zy,neutral:Ky,blue:Qy,azure:Xy,purple:Jy,pink:ex,red:tx,orange:nx,yellow:rx,matcha:ox,green:ax,subtle:ix,outline:sx,solid:lx,dot:cx,icon:dx,dismiss:ux},Qa=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},hx={sm:10,md:12,lg:14},wr=g.forwardRef(({variant:t="subtle",color:a="neutral",size:i="md",dot:l,leadingIcon:c,dismissible:u,onDismiss:p,className:f,children:m,...y},x)=>r.jsxs("span",{ref:x,className:ee(Fr.root,Fr[i],Fr[a],Fr[t],f),...y,children:[l&&r.jsx("span",{className:Fr.dot,"aria-hidden":"true"}),c&&r.jsx("span",{className:ee(Fr.icon,"alloy-icon-slot"),"aria-hidden":"true",children:c}),m,u&&r.jsx("button",{type:"button",className:Fr.dismiss,"aria-label":"Remove",onClick:_=>{_.stopPropagation(),p==null||p()},children:r.jsx(Qa,{size:hx[i]})})]}));wr.displayName="Tag";function Rf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Rf.displayName="SlashCircle01Icon";const Ad=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Ad.displayName="EyeIcon";function Ps({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ps.displayName="Target01Icon";function qr({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}qr.displayName="ClockIcon";const Xa=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Xa.displayName="RefreshCw04Icon";const br=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};br.displayName="CheckCircleIcon";function zs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}zs.displayName="Save01Icon";const px={sm:11,md:12,lg:14},fx={ignored:{label:"Ignored",color:"neutral",Icon:Rf},monitored:{label:"Monitored",color:"blue",Icon:Ad},recommended:{label:"Recommended",color:"purple",Icon:Ps},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:qr},executing:{label:"Executing",color:"azure",Icon:Xa},completed:{label:"Completed",color:"green",Icon:br},saved:{label:"Saved",color:"matcha",Icon:zs}},eo=g.forwardRef(({status:t,size:a="sm",label:i,className:l,...c},u)=>{const p=fx[t],f=p.Icon;return r.jsx(wr,{ref:u,color:p.color,size:a,variant:"subtle",leadingIcon:r.jsx(f,{size:px[a]}),className:ee(t==="executing"&&Ye.badgeExecuting,l),...c,children:i??p.label})});eo.displayName="UltronStatusBadge";function Os({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Os.displayName="Bell01Icon";const mx=g.forwardRef(({title:t,icon:a,eyebrow:i="Event",meta:l,status:c,tone:u="neutral",children:p,...f},m)=>r.jsx(En,{ref:m,tone:u,eyebrow:i,title:t,icon:a??r.jsx(Os,{size:14}),trailing:c?r.jsx(eo,{status:c}):void 0,...f,children:((l==null?void 0:l.length)||p)&&r.jsxs(r.Fragment,{children:[l!=null&&l.length?r.jsx("div",{className:Ye.metaRow,children:l.map((y,x)=>r.jsxs("span",{className:Ye.metaItem,children:[y.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},x))}):null,p]})}));mx.displayName="UltronEventCard";const gx=g.forwardRef(({eyebrow:t="Understanding",icon:a,entities:i,tone:l="info",children:c,...u},p)=>r.jsxs(En,{ref:p,tone:l,eyebrow:t,icon:a??r.jsx($d,{size:14}),...u,children:[c,i&&r.jsx("div",{className:Ye.metaRow,children:i})]}));gx.displayName="UltronUnderstandingCard";const vx={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},yx=g.forwardRef(({eyebrow:t="Decision",icon:a,factors:i,tone:l="warning",children:c,...u},p)=>r.jsxs(En,{ref:p,tone:l,eyebrow:t,icon:a??r.jsx(Ps,{size:14}),...u,children:[c,i!=null&&i.length?r.jsx("div",{className:Ye.metaRow,children:i.map((f,m)=>r.jsx(wr,{size:"sm",color:vx[l],variant:"subtle",children:f},m))}):null]}));yx.displayName="UltronDecisionCard";const xx="_root_ou64w_8",wx="_xs_ou64w_75",_x="_sm_ou64w_84",bx="_md_ou64w_93",kx="_lg_ou64w_102",Cx="_xl_ou64w_111",jx="_iconOnly_ou64w_122",Sx="_primary_ou64w_132",Nx="_secondary_ou64w_148",Rx="_tertiary_ou64w_167",Lx="_ghost_ou64w_185",Mx="_destructive_ou64w_203",$x="_destructiveSecondary_ou64w_221",Tx="_artwork_ou64w_69",Ix="_label_ou64w_254",Ax="_spinner_ou64w_69",Ex="_light_ou64w_281",Ut={root:xx,xs:wx,sm:_x,md:bx,lg:kx,xl:Cx,iconOnly:jx,primary:Sx,secondary:Nx,tertiary:Rx,ghost:Lx,destructive:Mx,destructiveSecondary:$x,artwork:Tx,label:Ix,spinner:Ax,"alloy-spin":"_alloy-spin_ou64w_1",light:Ex},Px={primary:Ut.primary,secondary:Ut.secondary,tertiary:Ut.tertiary,ghost:Ut.ghost,destructive:Ut.destructive,"destructive-secondary":Ut.destructiveSecondary},Te=g.forwardRef(({variant:t="primary",size:a="md",loading:i=!1,leadingArtwork:l,trailingArtwork:c,iconOnly:u=!1,className:p,children:f,disabled:m,...y},x)=>{const _=m||i;return r.jsxs("button",{ref:x,className:ee(Ut.root,Px[t],Ut[a],u&&Ut.iconOnly,p),disabled:_,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":t,"data-size":a,...y,children:[i&&r.jsx("span",{className:Ut.spinner,"aria-hidden":"true"}),!i&&u&&r.jsx("span",{className:ee(Ut.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!u&&r.jsxs(r.Fragment,{children:[l&&r.jsx("span",{className:ee(Ut.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l}),f&&r.jsx("span",{className:Ut.label,children:f}),c&&r.jsx("span",{className:ee(Ut.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:c})]})]})});Te.displayName="Button";function Lf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Lf.displayName="XCircleIcon";const zx=g.forwardRef(({eyebrow:t="Recommendation",icon:a,actions:i,onIgnore:l,ignoreLabel:c="Ignore",tone:u="info",children:p,...f},m)=>{const y=r.jsxs(r.Fragment,{children:[i.map((x,_)=>r.jsx(Te,{size:"sm",variant:x.variant??(_===0?"primary":"secondary"),leadingArtwork:x.icon,loading:x.loading,onClick:x.onClick,children:x.label},_)),l&&r.jsx(Te,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(Lf,{size:16}),onClick:l,children:c})]});return r.jsx(En,{ref:m,tone:u,eyebrow:t,icon:a??r.jsx(Ps,{size:14}),footer:y,...f,children:p})});zx.displayName="UltronRecommendationCard";function Mf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Mf.displayName="Lock01Icon";const Ox=g.forwardRef(({title:t,eyebrow:a="Approval required",icon:i,approveLabel:l="Approve & send",onApprove:c,approving:u=!1,cancelLabel:p="Cancel",onCancel:f,editLabel:m="Edit",onEdit:y,tone:x="warning",children:_,...w},$)=>{const R=r.jsxs(r.Fragment,{children:[f&&r.jsx(Te,{size:"md",variant:"ghost",onClick:f,children:p}),y&&r.jsx(Te,{size:"md",variant:"secondary",onClick:y,children:m}),r.jsx(Te,{size:"md",variant:"primary",leadingArtwork:r.jsx(Pt,{size:18}),loading:u,onClick:c,children:l})]});return r.jsx(En,{ref:$,tone:x,eyebrow:a,title:t,icon:i??r.jsx(Mf,{size:14}),trailing:r.jsx(eo,{status:"awaiting-approval"}),footer:R,footerEnd:!0,...w,children:_})});Ox.displayName="UltronApprovalCard";const Dx=g.forwardRef(({eyebrow:t="Working",icon:a,steps:i,state:l="live",duration:c,tone:u="info",...p},f)=>r.jsx(En,{ref:f,tone:u,eyebrow:t,icon:a??r.jsx(Xa,{size:14}),trailing:r.jsx(eo,{status:l==="done"?"completed":"executing"}),...p,children:r.jsx(Id,{state:l,duration:c,children:i.map((m,y)=>r.jsx(As,{type:m.type??"tool",status:m.status??"pending",detail:m.detail,subActivities:m.subActivities,children:m.label},y))})}));Dx.displayName="UltronExecutionCard";const Bx=g.forwardRef(({headline:t,detail:a,avatar:i,status:l="completed",tone:c="success",footer:u,...p},f)=>r.jsx(En,{ref:f,tone:c,fill:!0,accent:!1,trailing:r.jsx(eo,{status:l}),footer:u,...p,children:r.jsxs("div",{className:Ye.resultHero,children:[r.jsx("span",{className:ee(Ye.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(br,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:Ye.resultHeadline,children:t}),a!=null&&r.jsx("div",{className:Ye.resultDetail,children:a})]})]})}));Bx.displayName="UltronResultCard";function $f({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}$f.displayName="ZapIcon";const Fx=g.forwardRef(({title:t="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:l="Save as workflow",onSave:c,saving:u=!1,dismissLabel:p="Not now",onDismiss:f,tone:m="info",children:y,...x},_)=>{const w=r.jsxs(r.Fragment,{children:[r.jsx(Te,{size:"md",variant:"primary",leadingArtwork:r.jsx(zs,{size:18}),loading:u,onClick:c,children:l}),f&&r.jsx(Te,{size:"md",variant:"ghost",onClick:f,children:p})]});return r.jsx(En,{ref:_,tone:m,fill:!0,accent:!1,eyebrow:a,title:t,icon:i??r.jsx($f,{size:14}),footer:w,...x,children:y})});Fx.displayName="UltronWorkflowSaveCard";const Tf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Tf.displayName="GitBranch01Icon";function Hc({label:t,children:a}){return r.jsxs("div",{className:Ye.clause,children:[r.jsx("span",{className:Ye.clauseLabel,children:t}),r.jsx("span",{className:Ye.clauseBody,children:a})]})}const Wx=g.forwardRef(({name:t,eyebrow:a="Workflow",icon:i,when:l,conditions:c,actions:u,status:p,footer:f,tone:m="info",...y},x)=>r.jsx(En,{ref:x,tone:m,eyebrow:a,title:t,icon:i??r.jsx(Tf,{size:14}),trailing:p?r.jsx(eo,{status:p}):void 0,footer:f,...y,children:r.jsxs("div",{className:Ye.clauses,children:[r.jsx(Hc,{label:"When",children:l}),r.jsx(Hc,{label:"If",children:c}),r.jsx(Hc,{label:"Then",children:u})]})}));Wx.displayName="UltronWorkflowPreviewCard";const Hx="_root_1nyuz_6",qx="_sm_1nyuz_20",Ux="_md_1nyuz_29",Vx="_lg_1nyuz_38",Gx="_divider_1nyuz_48",Yx="_interactive_1nyuz_53",Zx="_disabled_1nyuz_60",Kx="_destructive_1nyuz_64",Qx="_selected_1nyuz_78",Xx="_label_1nyuz_87",Jx="_description_1nyuz_97",e5="_leadingSlot_1nyuz_101",t5="_trailingSlot_1nyuz_102",n5="_content_1nyuz_115",r5="_taSwitch_1nyuz_167",o5="_taSwitchThumb_1nyuz_188",a5="_taCheckbox_1nyuz_203",i5="_taRadio_1nyuz_226",s5="_taRadioDot_1nyuz_244",l5="_taExpand_1nyuz_252",c5="_taStatus_1nyuz_266",d5="_taStatus_success_1nyuz_273",u5="_taStatus_warning_1nyuz_274",h5="_taStatus_error_1nyuz_275",p5="_taStatus_info_1nyuz_276",dt={root:Hx,sm:qx,md:Ux,lg:Vx,divider:Gx,interactive:Yx,disabled:Zx,destructive:Kx,selected:Qx,label:Xx,description:Jx,leadingSlot:e5,trailingSlot:t5,content:n5,taSwitch:r5,taSwitchThumb:o5,taCheckbox:a5,taRadio:i5,taRadioDot:s5,taExpand:l5,taStatus:c5,taStatus_success:d5,taStatus_warning:u5,taStatus_error:h5,taStatus_info:p5},Gt=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Gt.displayName="ChevronRightIcon";const Ed=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ed.displayName="ArrowUpRightIcon";const f5="_root_4qytd_5",m5="_neutral_4qytd_25",g5="_primary_4qytd_30",v5="_success_4qytd_35",y5="_warning_4qytd_40",x5="_error_4qytd_45",w5="_info_4qytd_50",e1={root:f5,neutral:m5,primary:g5,success:v5,warning:y5,error:x5,info:w5},Ja=g.forwardRef(({variant:t="neutral",className:a,children:i,...l},c)=>r.jsx("span",{ref:c,className:ee(e1.root,e1[t],a),...l,children:i}));Ja.displayName="Badge";const _5=({checked:t})=>r.jsx("span",{className:dt.taSwitch,"data-checked":t||void 0,"aria-hidden":"true",children:r.jsx("span",{className:dt.taSwitchThumb})}),b5=({checked:t})=>r.jsx("span",{className:dt.taCheckbox,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),k5=({checked:t})=>r.jsx("span",{className:dt.taRadio,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("span",{className:dt.taRadioDot})}),C5=({count:t,label:a})=>{const i=t!==void 0?String(t):a;return i?r.jsx(Ja,{"aria-hidden":"true",children:i}):null},j5=({expanded:t})=>r.jsx("span",{className:dt.taExpand,"data-expanded":t||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:16,color:"currentColor"})}),S5=({variant:t})=>r.jsx("span",{className:ee(dt.taStatus,dt[`taStatus_${t}`]),"aria-hidden":"true"}),N5=new Set(["badge","status"]),tn=g.forwardRef(({label:t,description:a,leadingSlot:i,trailingSlot:l,trailingAction:c,checked:u,defaultChecked:p=!1,onCheckedChange:f,badgeCount:m,badgeLabel:y,expanded:x=!1,statusVariant:_="success",divider:w=!0,size:$="md",interactive:R,selected:j=!1,destructive:S=!1,disabled:L=!1,className:N,onClick:C,onKeyDown:T,...A},E)=>{const z=c==="switch"||c==="checkbox"||c==="radio",[O,U]=g.useState(p),Z=z?u!==void 0?u:O:!1,X=R||!!C||z||c!==void 0&&!N5.has(c),V=c==="switch"?"switch":c==="checkbox"?"checkbox":c==="radio"?"radio":X?"button":void 0,te=g.useCallback(se=>{if(!L){if(z){const J=!Z;u===void 0&&U(J),f==null||f(J)}C==null||C(se)}},[L,z,Z,u,f,C]),ie=g.useCallback(se=>{X&&!L&&(se.key==="Enter"||se.key===" ")&&(se.preventDefault(),te(se)),T==null||T(se)},[X,L,te,T]),ce=l??(()=>{if(!c)return null;switch(c){case"chevron":return r.jsx(Gt,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(Ed,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(_5,{checked:Z});case"checkbox":return r.jsx(b5,{checked:Z});case"radio":return r.jsx(k5,{checked:Z});case"badge":return r.jsx(C5,{count:m,label:y});case"expand":return r.jsx(j5,{expanded:x});case"status":return r.jsx(S5,{variant:_});default:return null}})();return r.jsxs("div",{ref:E,role:V,tabIndex:X&&!L?0:void 0,"aria-checked":z?Z:void 0,"aria-selected":j||void 0,"aria-disabled":L||void 0,"data-selected":j||void 0,"data-disabled":L||void 0,"data-destructive":S||void 0,"data-trailing-action":c??void 0,className:ee(dt.root,dt[$],w&&dt.divider,X&&dt.interactive,j&&dt.selected,S&&dt.destructive,L&&dt.disabled,N),onClick:L?void 0:te,onKeyDown:ie,...A,children:[i&&r.jsx("div",{className:dt.leadingSlot,children:i}),r.jsxs("div",{className:dt.content,children:[r.jsx("span",{className:dt.label,children:t}),a&&r.jsx("span",{className:dt.description,children:a})]}),ce&&r.jsx("div",{className:dt.trailingSlot,children:ce})]})});tn.displayName="ListItem";const R5=g.forwardRef(({title:t,meta:a,icon:i,status:l,...c},u)=>r.jsx(tn,{ref:u,label:t,description:a,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(eo,{status:l}),...c}));R5.displayName="UltronActivityStreamItem";const L5="_root_1sz1z_7",M5="_status_1sz1z_50",qc={root:L5,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:M5},If=g.forwardRef(({disabled:t=!1,size:a="md",escapeTarget:i,onEscape:l,className:c,children:u,...p},f)=>{const m=g.useRef(null),[y,x]=g.useState(""),_=g.Children.map(u,w=>{if(!g.isValidElement(w))return w;const $=w.props;return g.cloneElement(w,{groupDisabled:t||!!$.groupDisabled})});return g.useEffect(()=>{if(!i||!l)return;const w=$=>{$.key==="Escape"&&l()};return i.addEventListener("keydown",w),()=>i.removeEventListener("keydown",w)},[i,l]),g.useCallback(w=>x(w),[]),r.jsxs("div",{ref:f,"data-size":a,className:ee(qc.root,qc[`size-${a}`],c),...p,children:[_,r.jsx("span",{ref:m,className:qc.status,role:"status","aria-live":"polite",children:y})]})});If.displayName="ComposerActions";function Uc({size:t=24,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Pd=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Pd.displayName="SearchSmIcon";const ys=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ys.displayName="Trash03Icon";function Eo({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function t1({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const zd=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};zd.displayName="ChevronSelectorVerticalIcon";const Ur=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:u,strokeLinecap:"round",strokeLinejoin:"round"})]})};Ur.displayName="ClipboardCheckIcon";const Af=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.25:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:u})})};Af.displayName="SettingsGearIcon";const Ef=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ef.displayName="ChevronLeftIcon";const Pf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Pf.displayName="EyeOffIcon";const zf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};zf.displayName="StopIcon";const Of=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Of.displayName="RecordingIcon";const Df=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Df.displayName="BankIcon";function Ds({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ds.displayName="ArrowNarrowUpIcon";function Bf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Bf.displayName="ArrowNarrowDownIcon";function Ff({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ff.displayName="Microphone02Icon";const Wf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Wf.displayName="AlertTriangleIcon";function Hf({size:t=16,color:a="currentColor",...i}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const qf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};qf.displayName="Map01Icon";const Uf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Uf.displayName="ThumbsUpIcon";const Vf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Vf.displayName="ThumbsDownIcon";const Gf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M11.4926 4.29493C11.7435 3.85826 12.2565 3.85826 12.5074 4.29493L22.1414 20.9893C22.3921 21.4258 22.0774 22 21.634 22H2.36603C1.92257 22 1.6079 21.4258 1.85856 20.9893L11.4926 4.29493Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Gf.displayName="TriangleUpIcon";function Bs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Bs.displayName="CheckVerified01Icon";function Yf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Yf.displayName="Copy01Icon";function Zf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Zf.displayName="Edit02Icon";function Fs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Fs.displayName="LinkExternal01Icon";function Cs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Cs.displayName="MessageCircle02Icon";function Kf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Kf.displayName="MinusIcon";function Qf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Qf.displayName="XCloseIcon";const $5="_base_i93xz_11",T5="_icon_i93xz_45",I5="_sendReady_i93xz_65",A5="_sendStreaming_i93xz_66",E5="_sendDisabled_i93xz_67",P5="_sendError_i93xz_68",z5="_attachIdle_i93xz_131",O5="_attachDisabled_i93xz_145",D5="_attachError_i93xz_152",B5="_voiceIdle_i93xz_165",F5="_voiceRecording_i93xz_179",W5="_voiceDisabled_i93xz_189",H5="_iconStack_i93xz_200",q5="_iconLayer_i93xz_209",st={base:$5,icon:T5,sendReady:I5,sendStreaming:A5,sendDisabled:E5,sendError:P5,attachIdle:z5,attachDisabled:O5,attachError:D5,voiceIdle:B5,voiceRecording:F5,voiceDisabled:W5,iconStack:H5,iconLayer:q5},U5={hidden:void 0,ready:st.sendReady,"disabled-invalid":st.sendDisabled,streaming:st.sendStreaming,error:st.sendError},V5=(t,a,i)=>{switch(t){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Xf=g.forwardRef(({state:t,onSend:a,onStop:i,onRetry:l,invalidReason:c,errorMessage:u,groupDisabled:p,className:f,style:m,...y},x)=>{const _=g.useRef(null),w=g.useRef(null),$=g.useCallback(C=>{w.current=C,typeof x=="function"?x(C):x&&(x.current=C)},[x]),R=g.useCallback(()=>{if(t==="ready"){a==null||a();return}if(t==="streaming"){i==null||i();return}if(t==="error"){const C=w.current;C&&(C.dataset.pressed="true",_.current&&clearTimeout(_.current),_.current=setTimeout(()=>{C.dataset.pressed="false"},140)),l==null||l()}},[t,a,i,l]);if(t==="hidden")return null;const j=!p&&(t==="ready"||t==="streaming"||t==="error"),S=V5(t,c,u),L=t==="disabled-invalid"?c??"Cannot send":t==="error"?u??"Send failed — click to retry":null,N=r.jsx("button",{ref:$,type:"button","data-composer-action":"send","data-state":t,className:ee(st.base,U5[t],f),style:m,"aria-label":S,disabled:!j,onClick:R,...y,children:r.jsxs("span",{className:st.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:st.iconLayer,"data-active":t==="ready"||t==="disabled-invalid"?"true":"false",children:r.jsx(Ds,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="streaming"?"true":"false",children:r.jsx(zf,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="error"?"true":"false",children:r.jsx(Xa,{size:"100%",strokeWidth:2})})]})});return L?r.jsx(_r,{content:L,placement:"top",children:N}):N});Xf.displayName="ComposerSendButton";const G5={idle:st.attachIdle,disabled:st.attachDisabled,error:st.attachError},Y5=(t,a,i)=>{switch(t){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},Z5=g.forwardRef(({state:t,onSelect:a,accept:i,multiple:l=!0,disabledReason:c,errorMessage:u,groupDisabled:p,className:f,style:m,...y},x)=>{const _=g.useRef(null),w=g.useCallback(()=>{var N;(t==="idle"||t==="error")&&((N=_.current)==null||N.click())},[t]),$=g.useCallback(N=>{const C=N.target.files;C&&C.length>0&&(a==null||a(C)),N.target.value=""},[a]),R=!p&&t!=="disabled",j=Y5(t,c,u),S=t==="disabled"?c??"Attachments unavailable":t==="error"?u??"Attachment failed":null,L=r.jsxs("button",{ref:x,type:"button","data-composer-action":"attachment","data-state":t,className:ee(st.base,G5[t],f),style:m,"aria-label":j,disabled:!R,onClick:w,...y,children:[r.jsx("span",{className:st.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(Za,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:_,type:"file",accept:i,multiple:l,onChange:$,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return S?r.jsx(_r,{content:S,placement:"top",children:L}):L});Z5.displayName="ComposerAttachment";const K5={idle:st.voiceIdle,recording:st.voiceRecording,disabled:st.voiceDisabled},Q5=(t,a)=>{switch(t){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},Jf=g.forwardRef(({state:t,onStartRecording:a,onStopRecording:i,disabledReason:l,groupDisabled:c,className:u,style:p,...f},m)=>{const y=g.useCallback(()=>{if(t==="idle"){a==null||a();return}if(t==="recording"){i==null||i();return}},[t,a,i]),x=!c&&t!=="disabled",_=Q5(t,l),w=t==="disabled"?l??"Voice unavailable":null,$=r.jsx("button",{ref:m,type:"button","data-composer-action":"voice","data-state":t,className:ee(st.base,K5[t],u),style:p,"aria-label":_,"aria-pressed":t==="recording"||void 0,disabled:!x,onClick:y,...f,children:r.jsxs("span",{className:st.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:st.iconLayer,"data-active":t!=="recording"?"true":"false",children:r.jsx(Ff,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="recording"?"true":"false",children:r.jsx(Of,{size:"100%",strokeWidth:1.5})})]})});return w?r.jsx(_r,{content:w,placement:"top",children:$}):$});Jf.displayName="ComposerVoiceButton";const X5=g.forwardRef(({value:t,onChange:a,onSubmit:i,placeholder:l="Ask Ultron…",sending:c=!1,disabled:u=!1,voice:p=!0,maxRows:f=4,radius:m="lg",leadingActions:y,className:x},_)=>{const w=c?"streaming":t.trim().length===0?"hidden":"ready";return r.jsx(bf,{className:x,style:{flex:"0 0 auto"},children:r.jsx(kf,{ref:_,value:t,onChange:a,onSubmit:i,placeholder:l,maxRows:f,radius:m,disabled:u,children:r.jsxs(If,{size:"md",disabled:u,children:[y,p&&r.jsx(Jf,{state:u?"disabled":"idle"}),r.jsx(Xf,{state:w,onSend:i,onStop:i})]})})})});X5.displayName="UltronCommandBar";const J5=g.forwardRef(({stages:t,state:a="live",duration:i,...l},c)=>r.jsx(Id,{ref:c,state:a,duration:i,...l,children:t.map((u,p)=>r.jsx(As,{type:u.type??"content",status:u.status??"pending",icon:u.icon,detail:u.detail,children:u.label},p))}));J5.displayName="UltronThreadTimeline";const e4="_root_ghwhu_10",t4="_badge_ghwhu_27",n4="_badgeIcon_ghwhu_38",r4="_green_ghwhu_59",o4="_yellow_ghwhu_60",a4="_matcha_ghwhu_61",i4="_purple_ghwhu_62",s4="_blue_ghwhu_63",l4="_azure_ghwhu_64",c4="_red_ghwhu_65",d4="_orange_ghwhu_66",u4="_pink_ghwhu_67",h4="_slate_ghwhu_68",p4="_content_ghwhu_73",f4="_label_ghwhu_83",m4="_valueRow_ghwhu_97",g4="_change_ghwhu_106",v4="_value_ghwhu_97",qn={root:e4,badge:t4,badgeIcon:n4,green:r4,yellow:o4,matcha:a4,purple:i4,blue:s4,azure:l4,red:c4,orange:d4,pink:u4,slate:h4,content:p4,label:f4,valueRow:m4,change:g4,value:v4},y4=g.forwardRef(({color:t="slate",icon:a,label:i,value:l,change:c,className:u,...p},f)=>r.jsxs("div",{ref:f,className:ee(qn.root,u),...p,children:[r.jsx("div",{className:ee(qn.badge,qn[t]),"aria-hidden":"true",children:r.jsx("span",{className:qn.badgeIcon,children:a})}),r.jsxs("div",{className:qn.content,children:[r.jsx("span",{className:qn.label,children:i}),r.jsxs("div",{className:qn.valueRow,children:[r.jsx("span",{className:qn.value,children:l}),c!=null&&r.jsx("span",{className:qn.change,children:c})]})]})]}));y4.displayName="DataCard";const x4="_root_d0j6n_7",w4="_icon_d0j6n_21",_4="_text_d0j6n_33",b4="_positive_d0j6n_41",k4="_warning_d0j6n_45",C4="_negative_d0j6n_49",ps={root:x4,icon:w4,text:_4,positive:b4,warning:k4,negative:C4};function j4(t){return t==="up"?"positive":"negative"}const S4=g.forwardRef((t,a)=>{const{mode:i,value:l,className:c,...u}=t,p=i==="trend"?t.severity??j4(t.trend):t.severity,{severity:f,...m}=u,y=i==="trend"?(({trend:_,severity:w,...$})=>$)(m):m,x=i==="trend"?t.trend==="up"?Ds:Bf:null;return r.jsxs("span",{ref:a,className:ee(ps.root,ps[p],c),...y,children:[r.jsx("span",{className:ps.text,children:l}),x&&r.jsx("span",{className:ps.icon,"aria-hidden":"true",children:r.jsx(x,{size:14})})]})});S4.displayName="ValueChangeLabel";const N4="_root_1lq10_1",R4="_horizontal_1lq10_9",L4="_vertical_1lq10_15",M4="_solid_1lq10_32",$4="_dashed_1lq10_36",fs={root:N4,horizontal:R4,vertical:L4,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:M4,dashed:$4},T4=g.forwardRef(({thickness:t=1,orientation:a="horizontal",variant:i="solid",className:l,...c},u)=>r.jsx("hr",{ref:u,role:"separator","aria-orientation":a,className:ee(fs.root,fs[`thickness-${t}`],fs[a],fs[i],l),...c}));T4.displayName="Divider";const I4="_header_vxgy2_95",A4="_title_vxgy2_107",E4="_closeBtn_vxgy2_120",P4="_content_vxgy2_152",z4="_footer_vxgy2_163",Fa={header:I4,title:A4,closeBtn:E4,content:P4,footer:z4},O4=g.forwardRef(({onClose:t,children:a,className:i,...l},c)=>r.jsxs("div",{ref:c,className:ee(Fa.header,i),...l,children:[r.jsx("span",{className:Fa.title,children:a}),t&&r.jsx("button",{type:"button",className:Fa.closeBtn,onClick:t,"aria-label":"Close",children:r.jsx(Qa,{size:16})})]}));O4.displayName="DialogHeader";const D4=g.forwardRef(({children:t,className:a,...i},l)=>r.jsx("div",{ref:l,className:ee(Fa.content,a),...i,children:t}));D4.displayName="DialogContent";const B4=g.forwardRef(({children:t,className:a,...i},l)=>r.jsx("div",{ref:l,className:ee(Fa.footer,a),...i,children:t}));B4.displayName="DialogFooter";const F4="_root_1dntq_7",W4="_badge_1dntq_57",H4="_badgeIconSlot_1dntq_74",q4="_content_1dntq_82",U4="_text_1dntq_90",V4="_title_1dntq_99",G4="_description_1dntq_120",Y4="_actions_1dntq_131",Z4="_dot_1dntq_137",K4="_actionLink_1dntq_144",Q4="_primaryAction_1dntq_162",X4="_trailing_1dntq_170",Lt={root:F4,badge:W4,badgeIconSlot:H4,content:q4,text:U4,title:V4,description:G4,actions:Y4,dot:Z4,actionLink:K4,primaryAction:Q4,trailing:X4},J4=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),ew=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),tw=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),n1=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),nw={error:J4,warning:tw,success:ew,info:n1,feature:n1},em=g.forwardRef(({status:t="info",variant:a="lighter",size:i="sm",title:l,description:c,action:u,onAction:p,learnMore:f,onLearnMore:m,onDismiss:y,className:x,..._},w)=>{const $=nw[t],R=i==="lg",j=y?r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:r.jsx(Qa,{size:12})}):null;return r.jsxs("div",{ref:w,role:"alert",className:ee(Lt.root,x),"data-status":t,"data-variant":a,"data-size":i,..._,children:[r.jsx("span",{className:Lt.badge,"aria-hidden":"true",children:r.jsx("span",{className:ee("alloy-icon-slot",Lt.badgeIconSlot),children:r.jsx($,{})})}),R?r.jsxs("div",{className:Lt.content,children:[r.jsxs("div",{className:Lt.text,children:[r.jsx("p",{className:Lt.title,children:l}),c&&r.jsx("p",{className:Lt.description,children:c})]}),(u||f)&&r.jsxs("div",{className:Lt.actions,children:[u&&r.jsx("button",{type:"button",className:ee(Lt.actionLink,Lt.primaryAction),onClick:p,children:u}),u&&f&&r.jsx("span",{className:Lt.dot,"aria-hidden":"true",children:"·"}),f&&r.jsx("button",{type:"button",className:Lt.actionLink,onClick:m,children:f})]})]}):r.jsx("p",{className:Lt.title,children:l}),R?j:(u||y)&&r.jsxs("div",{className:Lt.trailing,children:[u&&r.jsx("button",{type:"button",className:ee(Lt.actionLink,Lt.primaryAction),onClick:p,children:u}),j]})]})});em.displayName="Alert";const rw="_stack_x4xl7_11",ow="_item_x4xl7_28",aw="_itemExiting_x4xl7_33",pd={stack:rw,item:ow,itemExiting:aw},iw=g.createContext(null);function sw({id:t,title:a,description:i,status:l,variant:c,size:u,action:p,onAction:f,duration:m,exiting:y,onRemove:x}){const _=g.useCallback(()=>x(t),[t,x]);return r.jsx("div",{className:ee(pd.item,y&&pd.itemExiting),onAnimationEnd:y?_:void 0,children:r.jsx(em,{status:l,variant:c,size:u,title:a,description:i,action:p,onAction:f,onDismiss:_,style:{width:"100%"}})})}function lw({toasts:t,onStartExit:a,onRemove:i}){return g.useEffect(()=>{const l=[];return t.forEach(c=>{c.duration>0&&!c.exiting&&l.push(setTimeout(()=>a(c.id),c.duration))}),()=>l.forEach(clearTimeout)},[t,a]),t.length===0?null:Es.createPortal(r.jsx("div",{className:pd.stack,"aria-live":"polite","aria-atomic":"false",children:t.map(l=>r.jsx(sw,{...l,onRemove:i},l.id))}),document.body)}function cw({children:t}){const[a,i]=g.useState([]),l=g.useRef(0),c=g.useCallback(f=>{const m=`toast-${++l.current}`;return i(y=>[...y,{id:m,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),m},[]),u=g.useCallback(f=>{i(m=>m.map(y=>y.id===f?{...y,exiting:!0}:y))},[]),p=g.useCallback(f=>{i(m=>m.filter(y=>y.id!==f))},[]);return r.jsxs(iw.Provider,{value:{addToast:c,removeToast:u},children:[t,r.jsx(lw,{toasts:a,onStartExit:u,onRemove:p})]})}const dw="_root_1s0ek_5",uw="_list_1s0ek_11",hw="_item_1s0ek_23",pw="_separator_1s0ek_31",fw="_link_1s0ek_47",mw="_current_1s0ek_68",gw="_iconSlot_1s0ek_76",$n={root:dw,list:uw,item:hw,separator:pw,link:fw,current:mw,iconSlot:gw},vw=()=>r.jsx("span",{className:$n.separator,"aria-hidden":"true",children:"/"}),yw=()=>r.jsx("span",{className:$n.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),xw=g.forwardRef(({items:t,separator:a="slash",className:i,...l},c)=>{const u=a==="chevron"?yw:vw;return r.jsx("nav",{ref:c,"aria-label":"Breadcrumb",className:ee($n.root,i),...l,children:r.jsx("ol",{className:$n.list,children:t.map((p,f)=>{const m=f===t.length-1,y=!m&&(!!p.href||!!p.onClick);return r.jsxs("li",{className:$n.item,children:[f>0&&r.jsx(u,{}),y?r.jsxs("a",{href:p.href,onClick:p.onClick,className:$n.link,"aria-label":p.label,children:[p.icon&&r.jsx("span",{className:ee($n.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]}):r.jsxs("span",{className:ee($n.link,m&&$n.current),"aria-current":m?"page":void 0,children:[p.icon&&r.jsx("span",{className:ee($n.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]})]},f)})})})});xw.displayName="Breadcrumb";const ww="_root_139vz_6",_w="_divider_139vz_14",bw="_item_139vz_19",kw="_label_139vz_25",Cw="_description_139vz_26",jw="_chevron_139vz_27",Sw="_iconSlot_139vz_28",Nw="_hitTarget_139vz_32",Rw="_size_sm_139vz_37",Lw="_size_md_139vz_43",Mw="_size_lg_139vz_49",$w="_header_139vz_59",Tw="_headerContent_139vz_59",Iw="_checkboxWrap_139vz_60",Aw="_labelBlock_139vz_157",Ew="_trailingSlot_139vz_60",Pw="_body_139vz_199",zw="_bodyInner_139vz_209",Ow="_bodyContent_139vz_214",wt={root:ww,divider:_w,item:bw,label:kw,description:Cw,chevron:jw,iconSlot:Sw,hitTarget:Nw,size_sm:Rw,size_md:Lw,size_lg:Mw,header:$w,headerContent:Tw,checkboxWrap:Iw,labelBlock:Aw,trailingSlot:Ew,body:Pw,bodyInner:zw,bodyContent:Ow},Dw="_root_17t97_6",Bw="_disabled_17t97_12",Fw="_sm_17t97_18",Ww="_md_17t97_26",Hw="_lg_17t97_34",qw="_controlWrap_17t97_43",Uw="_input_17t97_52",Vw="_box_17t97_67",Gw="_boxChecked_17t97_96",Yw="_boxError_17t97_106",Zw="_labelWrap_17t97_116",Kw="_label_17t97_116",Qw="_error_17t97_138",Xw="_required_17t97_140",Jw="_description_17t97_145",Xt={root:Dw,disabled:Bw,sm:Fw,md:Ww,lg:Hw,controlWrap:qw,input:Uw,box:Vw,boxChecked:Gw,boxError:Yw,labelWrap:Zw,label:Kw,error:Qw,required:Xw,description:Jw},tm=g.forwardRef(({checked:t,defaultChecked:a=!1,indeterminate:i=!1,onChange:l,disabled:c,error:u,size:p="md",label:f,description:m,id:y,name:x,value:_,required:w,className:$},R)=>{const j=g.useId(),S=y??j,L=g.useRef(null);g.useEffect(()=>{L.current&&(L.current.indeterminate=i)},[i]);const N=t!==void 0,[C,T]=g.useState(a),A=N?t:C,E=O=>{N||T(O.target.checked),l==null||l(O.target.checked)},z=A||i;return r.jsxs("div",{className:ee(Xt.root,Xt[p],c&&Xt.disabled,u&&Xt.error,$),children:[r.jsxs("div",{className:Xt.controlWrap,children:[r.jsx("input",{ref:O=>{L.current=O,typeof R=="function"?R(O):R&&(R.current=O)},type:"checkbox",id:S,name:x,value:_,checked:A,disabled:c,required:w,"aria-invalid":u||void 0,onChange:E,className:Xt.input}),r.jsx("span",{className:ee(Xt.box,z&&Xt.boxChecked,u&&Xt.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):A?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||m)&&r.jsxs("div",{className:Xt.labelWrap,children:[f&&r.jsxs("label",{htmlFor:S,className:Xt.label,children:[f,w&&r.jsx("span",{className:Xt.required,"aria-hidden":"true",children:" *"})]}),m&&r.jsx("span",{className:Xt.description,children:m})]})]})});tm.displayName="Checkbox";const nm=g.createContext(null),fd=g.createContext(0),rm=g.forwardRef(({type:t="multiple",collapsible:a=!0,value:i,defaultValue:l,onValueChange:c,divider:u=!0,size:p="md",disabled:f=!1,className:m,children:y,...x},_)=>{const w=g.useMemo(()=>Array.isArray(l)?new Set(l):typeof l=="string"?new Set([l]):new Set,[]),[$,R]=g.useState(w),j=i!==void 0,S=g.useMemo(()=>j?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:$,[j,i,$]),L=g.useCallback(T=>S.has(T),[S]),N=g.useCallback(T=>{const A=new Set(S);t==="single"?A.has(T)?a&&A.delete(T):(A.clear(),A.add(T)):A.has(T)?A.delete(T):A.add(T),j||R(A),c&&c(t==="single"?A.values().next().value??"":Array.from(A))},[S,t,a,j,c]),C=g.useMemo(()=>({type:t,collapsible:a,size:p,disabled:f,isExpanded:L,toggle:N}),[t,a,p,f,L,N]);return r.jsx("div",{ref:_,"data-accordion-root":"","data-divider":u||void 0,"data-disabled":f||void 0,"data-size":p,className:ee(wt.root,u&&wt.divider,m),...x,children:r.jsx(nm.Provider,{value:C,children:r.jsx(fd.Provider,{value:0,children:y})})})});rm.displayName="Accordion";function ms(t,a){const i=t.closest("[data-accordion-root]");if(!i)return;const l=t.getAttribute("data-accordion-depth"),c=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${l}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(c.length===0)return;const u=c.indexOf(t);let p;switch(a){case"first":p=c[0];break;case"last":p=c[c.length-1];break;case"next":p=c[(u+1)%c.length];break;case"prev":p=c[(u-1+c.length)%c.length];break}p.focus()}const om=g.forwardRef(({value:t,label:a,description:i,icon:l,leadingSlot:c,trailingSlot:u,chevronPosition:p="leading",selectable:f=!1,checked:m,defaultChecked:y=!1,indeterminate:x=!1,onCheckedChange:_,expanded:w,defaultExpanded:$=!1,onExpandedChange:R,disabled:j=!1,size:S,className:L,children:N,...C},T)=>{const A=g.useContext(nm),E=g.useContext(fd),z=A!==null,O=S??(A==null?void 0:A.size)??"md",U=j||(A==null?void 0:A.disabled)||!1,[Z,X]=g.useState($);let V;z?V=t!==void 0?A.isExpanded(t):!1:w!==void 0?V=w:V=Z;const te=g.useCallback(()=>{if(U)return;if(z){if(t===void 0)return;const I=A.isExpanded(t);A.toggle(t);const Q=A.type==="single"&&!A.collapsible&&I?!0:!I;R==null||R(Q);return}const k=!V;w===void 0&&X(k),R==null||R(k)},[U,z,A,t,V,w,R]),ie=g.useCallback(k=>_==null?void 0:_(k),[_]),ce=g.useCallback(k=>{if(k.key==="Enter"||k.key===" "){k.preventDefault(),te();return}if(z)switch(k.key){case"ArrowDown":k.preventDefault(),ms(k.currentTarget,"next");break;case"ArrowUp":k.preventDefault(),ms(k.currentTarget,"prev");break;case"Home":k.preventDefault(),ms(k.currentTarget,"first");break;case"End":k.preventDefault(),ms(k.currentTarget,"last");break}},[te,z]),se=g.useId(),J=`${se}-header`,W=`${se}-body`,P=O==="sm"?16:O==="md"?18:20,D=c??r.jsxs(r.Fragment,{children:[f&&r.jsx("span",{className:wt.checkboxWrap,children:r.jsx(tm,{size:O,checked:m,defaultChecked:y,indeterminate:x,disabled:U,onChange:ie})}),l&&r.jsx("span",{className:wt.iconSlot,"aria-hidden":"true",children:l})]});return r.jsxs("div",{ref:T,"data-accordion-item":"","data-expanded":V||void 0,"data-disabled":U||void 0,"data-size":O,"data-depth":E,className:ee(wt.item,wt[`size_${O}`],L),style:{"--accordion-depth":E},...C,children:[r.jsxs("div",{className:wt.header,children:[r.jsx("button",{type:"button",id:J,"data-accordion-header-button":"","data-accordion-depth":E,className:wt.hitTarget,"aria-expanded":V,"aria-controls":W,"aria-disabled":U||void 0,disabled:U,onClick:te,onKeyDown:ce}),r.jsxs("div",{className:wt.headerContent,children:[p==="leading"&&r.jsx("span",{className:wt.chevron,"aria-hidden":"true",children:r.jsx(Gt,{size:P,color:"currentColor"})}),D,r.jsxs("div",{className:wt.labelBlock,children:[r.jsx("span",{className:wt.label,children:a}),i&&r.jsx("span",{className:wt.description,children:i})]}),u&&r.jsx("div",{className:wt.trailingSlot,children:u}),p==="trailing"&&r.jsx("span",{className:wt.chevron,"aria-hidden":"true",children:r.jsx(Gt,{size:P,color:"currentColor"})})]})]}),r.jsx("div",{id:W,role:"region","aria-labelledby":J,className:wt.body,"aria-hidden":!V,children:r.jsx("div",{className:wt.bodyInner,children:r.jsx("div",{className:wt.bodyContent,children:r.jsx(fd.Provider,{value:E+1,children:N})})})})]})});om.displayName="AccordionItem";const e6="_root_2hiai_7",t6="_fullWidth_2hiai_12",n6="_panel_2hiai_19",r6="_panelInner_2hiai_73",o6="_item_2hiai_81",a6="_groupHeading_2hiai_87",i6="_groupHeadingLabel_2hiai_94",s6="_groupHeadingCollapsible_2hiai_106",l6="_groupChevron_2hiai_119",c6="_groupDivider_2hiai_133",In={root:e6,fullWidth:t6,panel:n6,panelInner:r6,item:o6,groupHeading:a6,groupHeadingLabel:i6,groupHeadingCollapsible:s6,groupChevron:l6,groupDivider:c6};function d6({group:t,size:a,closeOnSelect:i,onClose:l}){const[c,u]=g.useState(t.defaultExpanded??!0);return r.jsxs("div",{children:[t.heading&&r.jsxs("div",{className:ee(In.groupHeading,t.collapsible&&In.groupHeadingCollapsible),onClick:t.collapsible?()=>u(p=>!p):void 0,"aria-expanded":t.collapsible?c:void 0,children:[r.jsx("span",{className:In.groupHeadingLabel,children:t.heading}),t.collapsible&&r.jsx("span",{className:In.groupChevron,"data-expanded":c||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:12})})]}),c&&r.jsx("div",{role:"group","aria-label":t.heading,children:t.options.map((p,f)=>{const m=p.trailingAction==="switch"||p.trailingAction==="checkbox"||p.trailingAction==="radio";return r.jsx(tn,{role:"menuitem",size:a,label:p.label,description:p.description,leadingSlot:p.leadingSlot,trailingAction:p.trailingAction,trailingSlot:p.trailingSlot,disabled:p.disabled,destructive:p.destructive,selected:p.selected,checked:p.checked,defaultChecked:p.defaultChecked,onCheckedChange:p.onCheckedChange,badgeCount:p.badgeCount,badgeLabel:p.badgeLabel,expanded:p.expanded,statusVariant:p.statusVariant,divider:p.divider??!1,className:In.item,onClick:()=>{var y;(y=p.onClick)==null||y.call(p),i&&!m&&l()}},p.id)})})]})}const am=g.forwardRef(({trigger:t,groups:a,size:i="sm",width:l=260,placement:c="bottom-start",open:u,defaultOpen:p=!1,onOpenChange:f,disabled:m=!1,closeOnSelect:y=!0,fullWidth:x=!1,className:_,...w},$)=>{const[R,j]=g.useState(p),S=g.useRef(null),L=u!==void 0?u:R,N=g.useCallback(T=>{S.current=T,$&&(typeof $=="function"?$(T):$.current=T)},[$]),C=g.useCallback(T=>{u===void 0&&j(T),f==null||f(T)},[u,f]);return g.useEffect(()=>{if(!L)return;const T=A=>{var E;(E=S.current)!=null&&E.contains(A.target)||C(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[L,C]),g.useEffect(()=>{if(!L)return;const T=A=>{A.key==="Escape"&&C(!1)};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[L,C]),r.jsxs("div",{ref:N,className:ee(In.root,x&&In.fullWidth,_),...w,children:[r.jsx("div",{style:{display:x?"flex":"inline-flex",width:x?"100%":void 0},"aria-haspopup":"menu","aria-expanded":L,tabIndex:m?-1:0,onClick:m?void 0:()=>C(!L),onKeyDown:m?void 0:T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),C(!L))},children:t}),r.jsx("div",{className:In.panel,"data-open":L||void 0,"data-placement":c,style:{width:typeof l=="number"?`${l}px`:l},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:In.panelInner,children:a.map((T,A)=>r.jsxs("div",{children:[A>0&&r.jsx("div",{className:In.groupDivider,"aria-hidden":"true"}),r.jsx(d6,{group:T,size:i,closeOnSelect:y,onClose:()=>C(!1)})]},T.id))})})]})});am.displayName="DropdownMenu";const u6="_hiddenInput_7w2s5_8",h6="_area_7w2s5_19",p6="_uploadIcon_7w2s5_53",f6="_textBlock_7w2s5_59",m6="_title_7w2s5_67",g6="_description_7w2s5_76",v6="_fileRow_7w2s5_88",y6="_fileIcon_7w2s5_96",x6="_fileName_7w2s5_101",w6="_successIcon_7w2s5_115",_6="_removeBtn_7w2s5_121",b6="_progressWrap_7w2s5_145",k6="_progressBar_7w2s5_153",C6="_progressFill_7w2s5_161",j6="_progressLabel_7w2s5_168",S6="_errorRow_7w2s5_178",N6="_errorIcon_7w2s5_186",R6="_errorText_7w2s5_192",L6="_areaMulti_7w2s5_206",M6="_multiDropZone_7w2s5_214",$6="_fileList_7w2s5_244",T6="_fileListItem_7w2s5_254",I6="_inline_7w2s5_267",A6="_inlineIcon_7w2s5_309",E6="_inlineText_7w2s5_330",P6="_inlineProgress_7w2s5_353",z6="_inlineProgressFill_7w2s5_363",Ie={hiddenInput:u6,area:h6,uploadIcon:p6,textBlock:f6,title:m6,description:g6,fileRow:v6,fileIcon:y6,fileName:x6,successIcon:w6,removeBtn:_6,progressWrap:b6,progressBar:k6,progressFill:C6,progressLabel:j6,errorRow:S6,errorIcon:N6,errorText:R6,areaMulti:L6,multiDropZone:M6,fileList:$6,fileListItem:T6,inline:I6,inlineIcon:A6,inlineText:E6,inlineProgress:P6,inlineProgressFill:z6};function Vc(t){const a=t.name.lastIndexOf(".");return a!==-1?t.name.slice(a+1).toUpperCase():t.type?(t.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const O6=g.forwardRef(({variant:t="area",multiple:a=!1,state:i="empty",progress:l=0,file:c,files:u,errorMessage:p,title:f="Choose a file or drag & drop it here.",description:m="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:x,onFilesSelect:_,onClear:w,onRemoveFile:$,fieldVariant:R="outlined",disabled:j=!1,className:S,...L},N)=>{const C=g.useRef(null),[T,A]=g.useState(!1),E=!j&&(a||i==="empty"),z=g.useCallback(()=>{var se;!j&&(a||i==="empty")&&((se=C.current)==null||se.click())},[j,a,i]),O=g.useCallback(se=>{var J;if(a){const W=se.target.files?Array.from(se.target.files):[];W.length&&(_==null||_(W))}else{const W=(J=se.target.files)==null?void 0:J[0];W&&(x==null||x(W))}se.target.value=""},[a,x,_]),U=g.useCallback(se=>{se.preventDefault(),E&&A(!0)},[E]),Z=g.useCallback(()=>A(!1),[]),X=g.useCallback(se=>{var J;if(se.preventDefault(),A(!1),!!E)if(a){const W=se.dataTransfer.files?Array.from(se.dataTransfer.files):[];W.length&&(_==null||_(W))}else{const W=(J=se.dataTransfer.files)==null?void 0:J[0];W&&(x==null||x(W))}},[E,a,x,_]),V=r.jsx("input",{ref:C,type:"file",className:Ie.hiddenInput,accept:y,multiple:a,disabled:j,"aria-hidden":"true",tabIndex:-1,onChange:O}),te=c?r.jsxs("div",{className:Ie.fileRow,children:[r.jsx("span",{className:`${Ie.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(zo,{size:16})}),r.jsx("span",{className:Ie.fileName,children:c.name}),r.jsx(wr,{size:"sm",variant:"subtle",children:Vc(c)}),i==="complete"&&r.jsx("span",{className:`${Ie.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(br,{size:16})}),r.jsx("button",{type:"button",className:Ie.removeBtn,onClick:w,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(ys,{size:14})})})]}):null;if(t==="area"){if(a){const se=u??[];return r.jsxs("div",{ref:N,className:ee(Ie.areaMulti,S),"data-drag-over":T||void 0,"data-disabled":j||void 0,onDragOver:U,onDragLeave:Z,onDrop:X,...L,children:[V,r.jsxs("div",{className:Ie.multiDropZone,children:[r.jsx("span",{className:`${Ie.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Uc,{size:24})}),r.jsxs("div",{className:Ie.textBlock,children:[r.jsx("p",{className:Ie.title,children:f}),r.jsx("p",{className:Ie.description,children:m})]}),r.jsx(Te,{variant:"tertiary",size:"sm",onClick:z,disabled:j,children:"Browse Files"})]}),se.length>0&&r.jsx("ul",{className:Ie.fileList,"aria-label":"Selected files",children:se.map((J,W)=>r.jsxs("li",{className:Ie.fileListItem,children:[r.jsx("span",{className:`${Ie.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(zo,{size:16})}),r.jsx("span",{className:Ie.fileName,children:J.name}),r.jsx(wr,{size:"sm",variant:"subtle",children:Vc(J)}),r.jsx("button",{type:"button",className:Ie.removeBtn,onClick:()=>$==null?void 0:$(W),"aria-label":`Remove ${J.name}`,disabled:j,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(ys,{size:14})})})]},`${J.name}-${W}`))})]})}return r.jsxs("div",{ref:N,className:ee(Ie.area,S),"data-state":i,"data-drag-over":T||void 0,"data-disabled":j||void 0,onDragOver:U,onDragLeave:Z,onDrop:X,...L,children:[V,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${Ie.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Uc,{size:24})}),r.jsxs("div",{className:Ie.textBlock,children:[r.jsx("p",{className:Ie.title,children:f}),r.jsx("p",{className:Ie.description,children:m})]}),r.jsx(Te,{variant:"tertiary",size:"sm",onClick:z,disabled:j,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[te,r.jsxs("div",{className:Ie.progressWrap,children:[r.jsx("div",{className:Ie.progressBar,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Ie.progressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})}),r.jsxs("p",{className:Ie.progressLabel,children:[l,"% uploaded"]})]})]}),i==="complete"&&te,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:Ie.errorRow,children:[r.jsx("span",{className:`${Ie.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Fo,{size:20})}),r.jsx("p",{className:Ie.errorText,children:p??"Upload failed. Please try again."})]}),r.jsx(Te,{variant:"tertiary",size:"sm",onClick:z,disabled:j,children:"Try Again"})]})]})}const ie={empty:r.jsx(Uc,{size:16}),uploading:r.jsx(zo,{size:16}),complete:r.jsx(br,{size:16}),error:r.jsx(Fo,{size:16})}[i],ce=(i==="uploading"||i==="complete")&&!!c;return r.jsxs("div",{ref:N,className:ee(Ie.inline,S),"data-state":i,"data-field-variant":R,"data-disabled":j||void 0,...L,children:[V,r.jsx("span",{className:`${Ie.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ie}),r.jsxs("span",{className:Ie.inlineText,"data-has-file":ce?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(c==null?void 0:c.name),i==="complete"&&(c==null?void 0:c.name),i==="error"&&(p??"Upload failed. Please try again.")]}),ce&&r.jsx(wr,{size:"sm",variant:"subtle",children:Vc(c)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:Ie.removeBtn,onClick:w,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(ys,{size:14})})}),i==="empty"&&r.jsx(Te,{variant:"tertiary",size:"xs",onClick:z,disabled:j,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:Ie.inlineProgress,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Ie.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})})]})});O6.displayName="FileUploader";const D6="_wrapper_127v8_8",B6="_labelRow_127v8_16",F6="_label_127v8_16",W6="_required_127v8_28",H6="_labelIcon_127v8_36",q6="_sm_127v8_46",U6="_md_127v8_47",V6="_lg_127v8_48",G6="_shell_127v8_44",Y6="_outlined_127v8_75",Z6="_underlined_127v8_102",K6="_float_127v8_147",Q6="_leadingSlot_127v8_181",X6="_trailingSlot_127v8_193",J6="_trailingActionWrap_127v8_206",e8="_trailingActionBtn_127v8_213",t8="_successTrailingSlot_127v8_234",n8="_errorTrailingSlot_127v8_239",r8="_control_127v8_251",o8="_selectValue_127v8_297",a8="_selectPlaceholder_127v8_303",i8="_selectChevron_127v8_307",s8="_selectChevronOpen_127v8_312",l8="_textareaShell_127v8_315",c8="_textareaControl_127v8_334",d8="_footer_127v8_351",u8="_footerRow_127v8_363",h8="_footerError_127v8_364",p8="_footerSuccess_127v8_365",f8="_footerIcon_127v8_368",m8="_wrapperHorizontal_127v8_378",g8="_horizontalLabelCol_127v8_384",v8="_horizontalLabelHint_127v8_393",y8="_horizontalControlCol_127v8_402",x8="_msContainer_127v8_416",w8="_msShell_127v8_425",_8="_msOpen_127v8_440",b8="_msDisabled_127v8_447",k8="_msBody_127v8_450",C8="_msPlaceholder_127v8_459",j8="_msChevron_127v8_469",S8="_msChevronOpen_127v8_480",N8="_msPanel_127v8_483",Ce={wrapper:D6,labelRow:B6,label:F6,required:W6,labelIcon:H6,sm:q6,md:U6,lg:V6,shell:G6,outlined:Y6,underlined:Z6,float:K6,leadingSlot:Q6,trailingSlot:X6,trailingActionWrap:J6,trailingActionBtn:e8,successTrailingSlot:t8,errorTrailingSlot:n8,control:r8,selectValue:o8,selectPlaceholder:a8,selectChevron:i8,selectChevronOpen:s8,textareaShell:l8,textareaControl:c8,footer:d8,footerRow:u8,footerError:h8,footerSuccess:p8,footerIcon:f8,wrapperHorizontal:m8,horizontalLabelCol:g8,horizontalLabelHint:v8,horizontalControlCol:y8,msContainer:x8,msShell:w8,msOpen:_8,msDisabled:b8,msBody:k8,msPlaceholder:C8,msChevron:j8,msChevronOpen:S8,msPanel:N8};function Uo({label:t,labelIcon:a,labelDescription:i,hint:l,error:c,success:u,required:p,htmlFor:f,layout:m="vertical",labelWidth:y=160,className:x,children:_}){const w=c??u??l,$=c?"error":u?"success":"hint",R=w?r.jsxs("p",{className:ee(Ce.footer,$==="error"&&Ce.footerError,$==="success"&&Ce.footerSuccess),role:$==="error"?"alert":void 0,"aria-live":$==="error"?"assertive":void 0,children:[$==="hint"&&r.jsx("span",{className:`${Ce.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Fo,{size:12})}),w]}):null,j=t!=null?r.jsxs("div",{className:Ce.labelRow,children:[r.jsx("label",{className:Ce.label,htmlFor:f,children:t}),p&&r.jsx("span",{className:Ce.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${Ce.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(m==="horizontal"){const S={width:typeof y=="number"?`${y}px`:y};return r.jsxs("div",{className:ee(Ce.wrapper,Ce.wrapperHorizontal,x),children:[(j||i)&&r.jsxs("div",{className:Ce.horizontalLabelCol,style:S,children:[j,i&&r.jsx("p",{className:Ce.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:Ce.horizontalControlCol,children:[_,R]})]})}return r.jsxs("div",{className:ee(Ce.wrapper,x),children:[j,_,R]})}function ei({variant:t="outlined",size:a="md",error:i,success:l,disabled:c,readOnly:u,leadingIcon:p,trailingIcon:f,trailingAction:m,isTextarea:y,focused:x,className:_,children:w}){const $=a==="sm"?14:a==="lg"?18:16,R=l&&!i&&!f&&!m?r.jsx(br,{size:$}):null,j=i&&!f&&!m?r.jsx(Fo,{size:$}):null,S=!!p,L=!!(f||m||R||j);return r.jsxs("div",{className:ee(Ce.shell,Ce[t],Ce[a],y&&Ce.textareaShell,_),"data-error":i||void 0,"data-success":l||void 0,"data-disabled":c||void 0,"data-readonly":u||void 0,"data-focused":x||void 0,"data-has-leading":S||void 0,"data-has-trailing":L||void 0,children:[p&&r.jsx("span",{className:ee(Ce.leadingSlot,"alloy-icon-slot"),children:p}),w,m?r.jsx("span",{className:Ce.trailingActionWrap,children:m}):f||R||j?r.jsx("span",{className:ee(Ce.trailingSlot,"alloy-icon-slot",R&&Ce.successTrailingSlot,j&&Ce.errorTrailingSlot),children:f??R??j}):null]})}const Od=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",type:m="text",leadingIcon:y,trailingIcon:x,layout:_,labelWidth:w,labelDescription:$,id:R,disabled:j,readOnly:S,className:L,...N},C)=>{const T=g.useId(),A=R??T;return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:A,layout:_,labelWidth:w,labelDescription:$,className:L,children:r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:j,readOnly:S,leadingIcon:y,trailingIcon:x,children:r.jsx("input",{ref:C,id:A,type:m,disabled:j,readOnly:S,"aria-invalid":l?!0:void 0,"aria-describedby":i||l||c?`${A}-footer`:void 0,className:ee(Ce.control),...N})})})});Od.displayName="TextField";const R8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,trailingIcon:y,layout:x,labelWidth:_,labelDescription:w,id:$,disabled:R,readOnly:j,className:S,...L},N)=>{const C=g.useId(),T=$??C;return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:T,layout:x,labelWidth:_,labelDescription:w,className:S,children:r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:R,readOnly:j,leadingIcon:m,trailingIcon:y,isTextarea:!0,children:r.jsx("textarea",{ref:N,id:T,disabled:R,readOnly:j,"aria-invalid":l?!0:void 0,className:ee(Ce.control,Ce.textareaControl),...L})})})});R8.displayName="TextArea";const L8={sm:"sm",md:"md",lg:"lg"},im=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,layout:y,labelWidth:x,labelDescription:_,options:w,value:$,defaultValue:R="",onChange:j,placeholder:S="Select an option…",disabled:L,readOnly:N,id:C,className:T},A)=>{var P;const E=g.useId(),z=C??E,O=$!==void 0,[U,Z]=g.useState(R),X=O?$:U,V=g.useCallback(D=>{O||Z(D),j==null||j(D)},[O,j]),[te,ie]=g.useState(!1),ce=(P=w.find(D=>D.value===X))==null?void 0:P.label,se=f==="sm"?14:f==="lg"?18:16,J=L8[f],W=r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:L,readOnly:N,focused:te,leadingIcon:m,trailingIcon:r.jsx("span",{className:ee(Ce.selectChevron,te&&Ce.selectChevronOpen),"aria-hidden":"true",children:r.jsx(kr,{size:se})}),children:r.jsx("span",{className:ee(Ce.control,Ce.selectValue,!ce&&Ce.selectPlaceholder),children:ce??S})});return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:z,layout:y,labelWidth:x,labelDescription:_,className:T,children:r.jsx(am,{ref:A,id:z,fullWidth:!0,trigger:W,groups:[{id:"options",options:w.map(D=>({id:D.value,label:D.label,disabled:D.disabled,selected:D.value===X,onClick:()=>V(D.value)}))}],size:J,width:"100%",placement:"bottom-start",open:te,onOpenChange:ie,disabled:L||N})})});im.displayName="SelectField";const M8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,layout:y,labelWidth:x,labelDescription:_,id:w,disabled:$,readOnly:R,className:j,...S},L)=>{const N=g.useId(),C=w??N,[T,A]=g.useState(!1),E=f==="sm"?14:f==="lg"?18:16;return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:C,layout:y,labelWidth:x,labelDescription:_,className:j,children:r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:$,readOnly:R,leadingIcon:m,trailingAction:r.jsx("button",{type:"button",className:`${Ce.trailingActionBtn} alloy-icon-slot`,onClick:()=>A(z=>!z),tabIndex:$?-1:0,"aria-label":T?"Hide password":"Show password","aria-pressed":T,children:T?r.jsx(Pf,{size:E}):r.jsx(Ad,{size:E})}),children:r.jsx("input",{ref:L,id:C,type:T?"text":"password",disabled:$,readOnly:R,"aria-invalid":l?!0:void 0,autoComplete:"current-password",className:ee(Ce.control),...S})})})});M8.displayName="PasswordField";const sm=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",onClear:m,onChange:y,layout:x,labelWidth:_,labelDescription:w,id:$,value:R,defaultValue:j,disabled:S,readOnly:L,className:N,...C},T)=>{const A=g.useId(),E=$??A,z=f==="sm"?14:f==="lg"?18:16,O=R!==void 0?String(R).length>0:void 0,U=g.useCallback(Z=>{y==null||y(Z)},[y]);return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:E,layout:x,labelWidth:_,labelDescription:w,className:N,children:r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:S,readOnly:L,leadingIcon:r.jsx(Pd,{size:z}),trailingAction:O?r.jsx("button",{type:"button",className:`${Ce.trailingActionBtn} alloy-icon-slot`,onClick:m,tabIndex:S?-1:0,"aria-label":"Clear search",children:r.jsx(Qa,{size:z})}):void 0,children:r.jsx("input",{ref:T,id:E,type:"search",value:R,defaultValue:j,disabled:S,readOnly:L,"aria-invalid":l?!0:void 0,onChange:U,className:ee(Ce.control),...C})})})});sm.displayName="SearchField";const $8=g.forwardRef((t,a)=>r.jsx(Od,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...t}));$8.displayName="EmailField";const lm=g.forwardRef((t,a)=>r.jsx(Od,{ref:a,type:"number",inputMode:"numeric",...t}));lm.displayName="NumberField";const T8={sm:"sm",md:"sm",lg:"md"},I8={sm:"sm",md:"md",lg:"lg"},A8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",layout:m,labelWidth:y,labelDescription:x,options:_,value:w,defaultValue:$=[],onChange:R,placeholder:j="Select options…",disabled:S,readOnly:L,id:N,className:C},T)=>{const A=g.useId(),E=N??A,z=`${E}-list`,O=g.useRef(null),U=w!==void 0,[Z,X]=g.useState($),V=U?w:Z,te=g.useCallback(I=>{U||X(I),R==null||R(I)},[U,R]),[ie,ce]=g.useState(!1);g.useEffect(()=>{if(!ie)return;const I=ne=>{O.current&&!O.current.contains(ne.target)&&ce(!1)},Q=ne=>{ne.key==="Escape"&&ce(!1)};return document.addEventListener("mousedown",I),document.addEventListener("keydown",Q),()=>{document.removeEventListener("mousedown",I),document.removeEventListener("keydown",Q)}},[ie]);const se=I=>{if(S||L)return;const Q=V.includes(I)?V.filter(ne=>ne!==I):[...V,I];te(Q)},J=I=>{S||L||((I.key==="Enter"||I.key===" ")&&(I.preventDefault(),ce(Q=>!Q)),I.key==="Backspace"&&V.length>0&&!ie&&te(V.slice(0,-1)))},W=f==="sm"?14:f==="lg"?18:16,P=T8[f],D=I8[f],k=Object.fromEntries(_.map(I=>[I.value,I.label]));return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:E,layout:m,labelWidth:y,labelDescription:x,className:C,children:r.jsxs("div",{ref:O,className:Ce.msContainer,children:[r.jsxs("div",{ref:T,id:E,role:"combobox","aria-haspopup":"listbox","aria-expanded":ie,"aria-controls":z,"aria-disabled":S||void 0,tabIndex:S?-1:0,className:ee(Ce.msShell,Ce[p],Ce[f],ie&&Ce.msOpen,S&&Ce.msDisabled),"data-error":l?!0:void 0,"data-success":c&&!l?!0:void 0,"data-disabled":S||void 0,onClick:()=>{!S&&!L&&ce(I=>!I)},onKeyDown:J,children:[r.jsx("div",{className:Ce.msBody,children:V.length===0?r.jsx("span",{className:Ce.msPlaceholder,children:j}):V.map(I=>r.jsx(wr,{size:P,variant:"subtle",dismissible:!S&&!L,onDismiss:()=>te(V.filter(Q=>Q!==I)),children:k[I]??I},I))}),r.jsx("span",{className:ee(Ce.msChevron,"alloy-icon-slot",ie&&Ce.msChevronOpen),children:r.jsx(kr,{size:W})})]}),ie&&r.jsx("div",{id:z,role:"listbox","aria-multiselectable":"true","aria-label":typeof t=="string"?t:"Options",className:Ce.msPanel,children:_.map(I=>{const Q=V.includes(I.value);return r.jsx(tn,{label:I.label,size:D,trailingAction:"checkbox",checked:Q,disabled:I.disabled,role:"option","aria-selected":Q,onMouseDown:ne=>{ne.preventDefault()},onCheckedChange:()=>{I.disabled||se(I.value)}},I.value)})})]})})});A8.displayName="MultiSelectField";const E8="_root_1249j_6",P8="_pageControls_1249j_14",z8="_pageBtn_1249j_21",O8="_ellipsis_1249j_36",D8="_rowsGroup_1249j_51",B8="_rowsSelect_1249j_58",F8="_countText_1249j_64",W8="_groupLabel_1249j_74",H8="_goToGroup_1249j_84",q8="_goToInput_1249j_91",xn={root:E8,pageControls:P8,pageBtn:z8,ellipsis:O8,rowsGroup:D8,rowsSelect:B8,countText:F8,groupLabel:W8,goToGroup:H8,goToInput:q8};function U8(t,a,i){if(a<=1)return[1];const l=Math.max(2,t-i),c=Math.min(a-1,t+i),u=[1];l>2&&u.push("ellipsis");for(let p=l;p<=c;p++)u.push(p);return c<a-1&&u.push("ellipsis"),a>1&&u.push(a),u}const V8=g.forwardRef(({page:t,totalPages:a,onPageChange:i,showRowsPerPage:l=!1,rowsPerPage:c,rowsPerPageOptions:u=[10,25,50,100],onRowsPerPageChange:p,showGoToPage:f=!1,totalCount:m,siblingCount:y=1,size:x="sm",disabled:_=!1,className:w,...$},R)=>{const[j,S]=g.useState(""),L=x,N=x,C=x==="sm"?14:16,T=U8(t,a,y),A=g.useCallback(O=>{const U=Math.min(Math.max(1,O),a);U!==t&&i(U)},[t,a,i]),E=g.useCallback(O=>{if(O.key==="Enter"){const U=parseInt(j,10);isNaN(U)||A(U),S("")}},[j,A]),z=m!=null&&c!=null?`${(t-1)*c+1}–${Math.min(t*c,m)} of ${m}`:null;return r.jsxs("nav",{ref:R,"aria-label":"Pagination",className:ee(xn.root,w),"data-size":x,...$,children:[l&&r.jsxs("div",{className:xn.rowsGroup,children:[r.jsx("span",{className:xn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:xn.rowsSelect,children:r.jsx(im,{size:N,value:c,disabled:_,"aria-label":"Rows per page",onChange:O=>p==null?void 0:p(Number(O.target.value)),children:u.map(O=>r.jsx("option",{value:O,children:O},O))})})]}),z&&r.jsx("span",{className:xn.countText,"aria-live":"polite",children:z}),r.jsxs("div",{className:xn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Te,{variant:"ghost",size:L,iconOnly:!0,"aria-label":"Previous page",disabled:_||t<=1,onClick:()=>A(t-1),children:r.jsx(Ef,{size:C})}),T.map((O,U)=>O==="ellipsis"?r.jsx("span",{className:xn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${U}`):r.jsx(Te,{variant:O===t?"secondary":"ghost",size:L,"aria-label":`Page ${O}`,"aria-current":O===t?"page":void 0,disabled:_,onClick:()=>A(O),className:xn.pageBtn,children:O},O)),r.jsx(Te,{variant:"ghost",size:L,iconOnly:!0,"aria-label":"Next page",disabled:_||t>=a,onClick:()=>A(t+1),children:r.jsx(Gt,{size:C})})]}),f&&r.jsxs("div",{className:xn.goToGroup,children:[r.jsx("span",{className:xn.groupLabel,children:"Go to"}),r.jsx("div",{className:xn.goToInput,children:r.jsx(lm,{size:N,value:j,placeholder:String(t),min:1,max:a,disabled:_,"aria-label":"Go to page number",onChange:O=>S(O.target.value),onKeyDown:E})})]})]})});V8.displayName="Pagination";const G8="_root_1vx33_6",Y8="_fullWidth_1vx33_18",Z8="_item_1vx33_23",K8="_indicator_1vx33_28",Q8="_sm_1vx33_46",X8="_md_1vx33_54",J8="_lg_1vx33_62",e9="_itemSelected_1vx33_109",t9="_itemIcon_1vx33_115",n9="_itemLabel_1vx33_127",vr={root:G8,fullWidth:Y8,item:Z8,indicator:K8,sm:Q8,md:X8,lg:J8,itemSelected:e9,itemIcon:t9,itemLabel:n9},cm=g.createContext(null);function r9(t){const a=g.useContext(cm);if(!a)throw new Error(`<${t}> must be rendered inside <SegmentedControl>`);return a}const dm=g.forwardRef(({value:t,leadingIcon:a,className:i,children:l,disabled:c,onClick:u,...p},f)=>{const{value:m,onChange:y,disabled:x,name:_}=r9("SegmentedControl.Item"),w=m===t,$=x||!!c;return r.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":w,name:_,disabled:$,className:ee(vr.item,w&&vr.itemSelected,i),onClick:R=>{$||y(t),u==null||u(R)},...p,children:[a&&r.jsx("span",{className:ee(vr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),l!==void 0&&r.jsx("span",{className:vr.itemLabel,children:l})]})});dm.displayName="SegmentedControl.Item";const um=g.forwardRef(({value:t,defaultValue:a="",onChange:i,size:l="md",disabled:c=!1,fullWidth:u=!1,className:p,children:f,...m},y)=>{const[x,_]=g.useState(a),w=t!==void 0,$=w?t:x,R=g.useId(),j=g.useRef(null);g.useLayoutEffect(()=>{const L=j.current;if(!L)return;const N=L.querySelector('[aria-checked="true"]');N&&(L.style.setProperty("--sc-indicator-x",`${N.offsetLeft}px`),L.style.setProperty("--sc-indicator-w",`${N.offsetWidth}px`))},[$,l]);const S=L=>{w||_(L),i==null||i(L)};return r.jsx(cm.Provider,{value:{value:$,onChange:S,disabled:c,name:R},children:r.jsxs("div",{ref:L=>{j.current=L,typeof y=="function"?y(L):y&&(y.current=L)},role:"radiogroup",className:ee(vr.root,vr[l],u&&vr.fullWidth,p),...m,children:[r.jsx("span",{className:vr.indicator,"aria-hidden":"true"}),f]})})});um.displayName="SegmentedControl";Object.assign(um,{Item:dm});const o9="_root_fkv0x_6",a9="_sm_fkv0x_26",i9="_md_fkv0x_33",s9="_lg_fkv0x_40",l9="_dot_fkv0x_49",c9="_success_fkv0x_58",d9="_warning_fkv0x_65",u9="_error_fkv0x_72",h9="_info_fkv0x_79",p9="_neutral_fkv0x_86",f9="_pending_fkv0x_93",gs={root:o9,sm:a9,md:i9,lg:s9,dot:l9,success:c9,warning:d9,error:u9,info:h9,neutral:p9,pending:f9},qa=g.forwardRef(({status:t="neutral",size:a="md",dot:i=!0,className:l,children:c,...u},p)=>r.jsxs("span",{ref:p,className:ee(gs.root,gs[a],gs[t],l),...u,children:[i&&r.jsx("span",{className:gs.dot,"aria-hidden":"true"}),c]}));qa.displayName="StatusTag";const m9="_root_1m8t5_6",g9="_underline_1m8t5_15",v9="_background_1m8t5_21",y9="_underlineIndicator_1m8t5_26",x9="_md_1m8t5_43",w9="_lg_1m8t5_44",_9="_tab_1m8t5_42",b9="_tabSelected_1m8t5_77",k9="_tabIcon_1m8t5_99",C9="_tabLabel_1m8t5_111",j9="_tabBadge_1m8t5_116",S9="_tabLabelEditable_1m8t5_123",N9="_tabLabelInput_1m8t5_128",R9="_addTab_1m8t5_147",L9="_addTabIcon_1m8t5_160",Vt={root:m9,underline:g9,background:v9,underlineIndicator:y9,md:x9,lg:w9,tab:_9,tabSelected:b9,tabIcon:k9,tabLabel:C9,tabBadge:j9,tabLabelEditable:S9,tabLabelInput:N9,addTab:R9,addTabIcon:L9},hm=g.createContext(null);function pm(t){const a=g.useContext(hm);if(!a)throw new Error(`<${t}> must be rendered inside <Tabs>`);return a}const fm=g.forwardRef(({value:t,leadingIcon:a,trailingBadge:i,disabled:l,editable:c=!1,autoEdit:u=!1,onLabelChange:p,onClick:f,className:m,children:y,...x},_)=>{const{value:w,onChange:$,disabled:R,name:j}=pm("Tabs.Tab"),S=w===t,L=R||!!l,N=typeof y=="string"?y:"",[C,T]=g.useState(u&&c),[A,E]=g.useState(N),z=g.useRef(null);g.useEffect(()=>{if(C){const V=z.current;V&&(V.focus(),V.select())}},[C]),g.useEffect(()=>{u&&c&&!C&&(E(typeof y=="string"?y:""),T(!0))},[u,c]);const O=()=>{const V=A.trim();V&&V!==N&&(p==null||p(V)),T(!1)},U=()=>{E(N),T(!1)},Z=V=>{!c||L||(V.stopPropagation(),E(N),T(!0))},X=V=>{V.key==="Enter"?(V.preventDefault(),O()):V.key==="Escape"&&(V.preventDefault(),U())};return r.jsxs("button",{ref:_,type:"button",role:"tab","aria-selected":S,name:j,disabled:L,className:ee(Vt.tab,S&&Vt.tabSelected,m),onClick:V=>{C||(L||$(t),f==null||f(V))},...x,children:[a&&r.jsx("span",{className:ee(Vt.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),C?r.jsx("input",{ref:z,type:"text",value:A,onChange:V=>E(V.target.value),onKeyDown:X,onBlur:O,onClick:V=>V.stopPropagation(),className:Vt.tabLabelInput,"aria-label":"Tab name",size:Math.max(A.length,1)}):y!==void 0&&r.jsx("span",{className:ee(Vt.tabLabel,c&&Vt.tabLabelEditable),onDoubleClick:Z,children:y}),i&&!C&&r.jsx("span",{className:Vt.tabBadge,children:i})]})});fm.displayName="Tabs.Tab";const M9=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),mm=g.forwardRef(({className:t,onClick:a,"aria-label":i="Add tab",...l},c)=>{const{disabled:u}=pm("Tabs.AddTab");return r.jsx("button",{ref:c,type:"button","aria-label":i,disabled:u,className:ee(Vt.tab,Vt.addTab,t),onClick:a,...l,children:r.jsx("span",{className:ee(Vt.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(M9,{})})})});mm.displayName="Tabs.AddTab";const gm=g.forwardRef(({variant:t="underline",size:a="md",value:i,defaultValue:l="",onChange:c,disabled:u=!1,className:p,children:f,...m},y)=>{const[x,_]=g.useState(l),w=i!==void 0,$=w?i:x,R=g.useId(),j=g.useRef(null);g.useLayoutEffect(()=>{const L=j.current;if(!L||t!=="underline")return;const N=L.querySelector('[aria-selected="true"]');N&&(L.style.setProperty("--tab-indicator-x",`${N.offsetLeft}px`),L.style.setProperty("--tab-indicator-w",`${N.offsetWidth}px`))},[$,t]);const S=L=>{w||_(L),c==null||c(L)};return r.jsx(hm.Provider,{value:{value:$,onChange:S,disabled:u,variant:t,size:a,name:R},children:r.jsxs("div",{ref:L=>{j.current=L,typeof y=="function"?y(L):y&&(y.current=L)},role:"tablist",className:ee(Vt.root,Vt[t],Vt[a],p),...m,children:[t==="underline"&&r.jsx("span",{className:Vt.underlineIndicator,"aria-hidden":"true"}),f]})})});gm.displayName="Tabs";Object.assign(gm,{Tab:fm,AddTab:mm});const $9="_selectedBorder_1ypeg_7",T9="_selectedFill_1ypeg_12",r1={selectedBorder:$9,selectedFill:T9},I9=g.forwardRef(({selected:t=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:l,onClick:c,className:u,...p},f)=>{const m=x=>{l==null||l(!t),c==null||c(x)},y=t?i==="fill"?r1.selectedFill:r1.selectedBorder:void 0;return r.jsx(Te,{ref:f,variant:a,"aria-pressed":t,className:ee(y,u),onClick:m,...p})});I9.displayName="ToggleButton";const A9="_root_mcb75_6",E9="_disabled_mcb75_13",P9="_sm_mcb75_20",z9="_md_mcb75_31",O9="_lg_mcb75_42",D9="_track_mcb75_54",B9="_trackChecked_mcb75_90",F9="_thumb_mcb75_100",W9="_labelWrap_mcb75_117",H9="_label_mcb75_117",q9="_description_mcb75_139",Un={root:A9,disabled:E9,sm:P9,md:z9,lg:O9,track:D9,trackChecked:B9,thumb:F9,labelWrap:W9,label:H9,description:q9},U9=g.forwardRef(({checked:t,defaultChecked:a=!1,onChange:i,disabled:l,size:c="md",label:u,description:p,id:f,name:m,value:y,className:x},_)=>{const w=g.useId(),$=f??w,R=`${$}-label`,j=t!==void 0,[S,L]=g.useState(a),N=j?t:S,C=()=>{if(l)return;const A=!N;j||L(A),i==null||i(A)},T=A=>{(A.key===" "||A.key==="Enter")&&(A.preventDefault(),C())};return r.jsxs("div",{className:ee(Un.root,Un[c],l&&Un.disabled,x),children:[r.jsx("button",{ref:_,type:"button",role:"switch",id:$,"aria-checked":N,"aria-labelledby":u?R:void 0,"aria-disabled":l||void 0,tabIndex:l?-1:0,disabled:l,name:m,value:y,className:ee(Un.track,N&&Un.trackChecked),"data-checked":N||void 0,"data-disabled":l||void 0,onClick:C,onKeyDown:T,children:r.jsx("span",{className:Un.thumb})}),(u||p)&&r.jsxs("div",{className:Un.labelWrap,children:[u&&r.jsx("label",{id:R,htmlFor:$,className:Un.label,children:u}),p&&r.jsx("span",{className:Un.description,children:p})]})]})});U9.displayName="Switch";const V9="_root_104n4_5",G9="_disabled_104n4_11",Y9="_sm_104n4_17",Z9="_md_104n4_25",K9="_lg_104n4_33",Q9="_controlWrap_104n4_41",X9="_input_104n4_50",J9="_ring_104n4_65",e7="_ringChecked_104n4_90",t7="_ringError_104n4_94",n7="_dot_104n4_104",r7="_labelWrap_104n4_112",o7="_label_104n4_112",a7="_error_104n4_130",i7="_required_104n4_132",s7="_description_104n4_137",qt={root:V9,disabled:G9,sm:Y9,md:Z9,lg:K9,controlWrap:Q9,input:X9,ring:J9,ringChecked:e7,ringError:t7,dot:n7,labelWrap:r7,label:o7,error:a7,required:i7,description:s7},l7=g.forwardRef(({value:t,checked:a,onChange:i,disabled:l,error:c,size:u="md",label:p,description:f,id:m,name:y,required:x,className:_},w)=>{const $=g.useId(),R=m??$;return r.jsxs("div",{className:ee(qt.root,qt[u],l&&qt.disabled,c&&qt.error,_),children:[r.jsxs("div",{className:qt.controlWrap,children:[r.jsx("input",{ref:w,type:"radio",id:R,name:y,value:t,checked:a,disabled:l,required:x,"aria-invalid":c||void 0,onChange:()=>i==null?void 0:i(t),className:qt.input}),r.jsx("span",{className:ee(qt.ring,a&&qt.ringChecked,c&&qt.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:qt.dot})})]}),(p||f)&&r.jsxs("div",{className:qt.labelWrap,children:[p&&r.jsxs("label",{htmlFor:R,className:qt.label,children:[p,x&&r.jsx("span",{className:qt.required,"aria-hidden":"true",children:" *"})]}),f&&r.jsx("span",{className:qt.description,children:f})]})]})});l7.displayName="Radio";const c7="_table_1ad04_8",d7="_sm_1ad04_16",u7="_row_1ad04_30",h7="_head_1ad04_47",p7="_headLabel_1ad04_82",f7="_sortBtn_1ad04_96",m7="_sortIcon_1ad04_119",g7="_cell_1ad04_142",v7="_cellText_1ad04_175",y7="_cellStack_1ad04_203",x7="_cellStackPrimary_1ad04_210",w7="_cellStackSecondary_1ad04_221",_7="_cellActions_1ad04_233",b7="_cellControl_1ad04_240",k7="_addCell_1ad04_251",C7="_addRowCell_1ad04_264",j7="_addRowLabel_1ad04_276",_t={table:c7,sm:d7,row:u7,head:h7,headLabel:p7,sortBtn:f7,sortIcon:m7,cell:g7,cellText:v7,cellStack:y7,cellStackPrimary:x7,cellStackSecondary:w7,cellActions:_7,cellControl:b7,addCell:k7,addRowCell:C7,addRowLabel:j7},vm=g.createContext({addColumn:!1,addRow:!1}),ym=()=>g.useContext(vm),S7=g.forwardRef(({size:t="md",interaction:a="row",addColumn:i=!1,addRow:l=!1,onAddColumn:c,onAddRow:u,className:p,children:f,...m},y)=>{const x=g.useMemo(()=>({addColumn:i,addRow:l,onAddColumn:c,onAddRow:u}),[i,l,c,u]);return r.jsx(vm.Provider,{value:x,children:r.jsx("table",{ref:y,className:ee(_t.table,t==="sm"&&_t.sm,p),"data-interaction":a,...m,children:f})})});S7.displayName="Table";const xm=g.forwardRef(({align:t="left",sort:a,onSort:i,hoverable:l,selected:c,className:u,children:p,...f},m)=>{const y=a!==void 0;return r.jsx("th",{ref:m,className:ee(_t.head,u),"data-align":t!=="left"?t:void 0,"data-hoverable":!y&&l?!0:void 0,"data-selected":c||void 0,"aria-selected":c,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":y?"none":void 0,...f,children:y?r.jsxs("button",{type:"button",className:_t.sortBtn,onClick:i,"aria-label":typeof p=="string"?`Sort by ${p}`:void 0,children:[p,r.jsx("span",{className:_t.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(kr,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:_t.headLabel,children:p})})});xm.displayName="TableHead";const N7=g.forwardRef(({children:t,...a},i)=>{const{addColumn:l,onAddColumn:c}=ym(),u=l?g.Children.map(t,(p,f)=>{if(!g.isValidElement(p)||f!==0)return p;const m=g.Children.toArray(p.props.children);return g.cloneElement(p,{},[...m,r.jsx(xm,{hoverable:!0,onClick:c,className:_t.addCell,"aria-label":"Add column",children:r.jsx(Za,{size:14,strokeWidth:2})},"__add_col_head")])}):t;return r.jsx("thead",{ref:i,...a,children:u})});N7.displayName="TableHeader";const wm=g.forwardRef(({hoverable:t=!0,selected:a,className:i,children:l,...c},u)=>r.jsx("tr",{ref:u,className:ee(_t.row,i),"data-hoverable":t||void 0,"data-selected":a||void 0,"aria-selected":a,...c,children:l}));wm.displayName="TableRow";const md=g.forwardRef(({align:t="left",compact:a,hoverable:i=!0,selected:l,className:c,children:u,...p},f)=>r.jsx("td",{ref:f,className:ee(_t.cell,c),"data-align":t!=="left"?t:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":l||void 0,"aria-selected":l,...p,children:u}));md.displayName="TableCell";const R7=g.forwardRef(({children:t,...a},i)=>{const{addColumn:l,addRow:c,onAddRow:u}=ym(),p=l?g.Children.map(t,f=>{if(!g.isValidElement(f))return f;const m=g.Children.toArray(f.props.children);return g.cloneElement(f,{},[...m,r.jsx(md,{"aria-hidden":"true",className:_t.addCell},"__add_col_pad")])}):t;return r.jsxs("tbody",{ref:i,...a,children:[p,c&&r.jsx(wm,{hoverable:!1,children:r.jsx(md,{colSpan:999,onClick:u,className:_t.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:_t.addRowLabel,children:[r.jsx(Za,{size:14,strokeWidth:2}),"Add row"]})})})]})});R7.displayName="TableBody";const L7=g.forwardRef(({variant:t="primary",size:a="md",wrap:i,className:l,children:c,...u},p)=>r.jsx("span",{ref:p,className:ee(_t.cellText,l),"data-variant":t!=="primary"?t:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...u,children:c}));L7.displayName="CellText";const M7=g.forwardRef(({primary:t,secondary:a,className:i,...l},c)=>r.jsxs("div",{ref:c,className:ee(_t.cellStack,i),...l,children:[r.jsx("span",{className:_t.cellStackPrimary,children:t}),a&&r.jsx("span",{className:_t.cellStackSecondary,children:a})]}));M7.displayName="CellStack";const $7=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(wr,{ref:i,size:t,...a}));$7.displayName="CellTag";const T7=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(qa,{ref:i,size:t,...a}));T7.displayName="CellStatusTag";const I7=g.forwardRef(({className:t,children:a,...i},l)=>r.jsx("div",{ref:l,className:ee(_t.cellActions,t),...i,children:a}));I7.displayName="CellActions";const A7=g.forwardRef(({className:t,children:a,...i},l)=>r.jsx("div",{ref:l,className:ee(_t.cellControl,t),...i,children:a}));A7.displayName="CellControl";const E7="_root_1afcs_8",P7="_secondary_1afcs_23",z7="_header_1afcs_28",O7="_headerText_1afcs_36",D7="_title_1afcs_43",B7="_subtitle_1afcs_52",F7="_action_1afcs_61",W7="_hero_1afcs_66",H7="_heroValue_1afcs_74",q7="_heroCaption_1afcs_83",U7="_heroChange_1afcs_89",V7="_body_1afcs_95",G7="_legend_1afcs_103",Jt={root:E7,secondary:P7,header:z7,headerText:O7,title:D7,subtitle:B7,action:F7,hero:W7,heroValue:H7,heroCaption:q7,heroChange:U7,body:V7,legend:G7},Y7=g.forwardRef(({title:t,subtitle:a,action:i,value:l,valueChange:c,valueCaption:u,legend:p,secondary:f,children:m,className:y,...x},_)=>r.jsxs("div",{ref:_,className:ee(Jt.root,f&&Jt.secondary,y),...x,children:[r.jsxs("div",{className:Jt.header,children:[r.jsxs("div",{className:Jt.headerText,children:[r.jsx("h3",{className:Jt.title,children:t}),a&&r.jsx("p",{className:Jt.subtitle,children:a})]}),i&&r.jsx("div",{className:Jt.action,children:i})]}),(l!==void 0||c||u)&&r.jsxs("div",{className:Jt.hero,children:[l!==void 0&&r.jsx("span",{className:Jt.heroValue,children:l}),c&&r.jsx("span",{className:Jt.heroChange,children:c}),u&&r.jsx("span",{className:Jt.heroCaption,children:u})]}),r.jsx("div",{className:Jt.body,children:m}),p&&r.jsx("div",{className:Jt.legend,children:p})]}));Y7.displayName="ChartCard";const Z7="_root_je8nq_7",K7="_item_je8nq_17",Q7="_swatch_je8nq_23",X7="_label_je8nq_29",J7="_bookend_je8nq_33",Lo={root:Z7,item:K7,swatch:Q7,label:X7,bookend:J7},_m=g.forwardRef(({items:t,before:a,after:i,variant:l="square",swatchSize:c=12,className:u,...p},f)=>r.jsxs("div",{ref:f,className:ee(Lo.root,u),...p,children:[a&&r.jsx("span",{className:Lo.bookend,children:a}),t.map((m,y)=>{const x=l==="line"?{width:c+4,height:2,background:m.color,borderRadius:1}:l==="dot"?{width:c-2,height:c-2,background:m.color,borderRadius:"50%"}:{width:c,height:c,background:m.color};return r.jsxs("span",{className:Lo.item,children:[r.jsx("span",{className:Lo.swatch,style:x,"aria-hidden":"true"}),m.label!==void 0&&r.jsx("span",{className:Lo.label,children:m.label})]},y)}),i&&r.jsx("span",{className:Lo.bookend,children:i})]}));_m.displayName="ChartLegend";const e_="_root_igkx4_5",t_="_svgWrap_igkx4_13",n_="_svg_igkx4_13",r_="_gridLine_igkx4_23",o_="_axisLabel_igkx4_28",a_="_legendWrap_igkx4_43",i_="_legendItem_igkx4_51",s_="_legendDot_igkx4_57",l_="_legendLabel_igkx4_64",c_="_tooltip_igkx4_71",d_="_tooltipLabel_igkx4_85",u_="_tooltipRow_igkx4_95",h_="_tooltipDot_igkx4_101",p_="_tooltipSeries_igkx4_108",f_="_tooltipValue_igkx4_115",Le={root:e_,svgWrap:t_,svg:n_,gridLine:r_,axisLabel:o_,legendWrap:a_,legendItem:i_,legendDot:s_,legendLabel:l_,tooltip:c_,tooltipLabel:d_,tooltipRow:u_,tooltipDot:h_,tooltipSeries:p_,tooltipValue:f_},m_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Gc(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function Mo(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}const g_=g.forwardRef(({series:t,labels:a,variant:i="grouped",height:l=260,showGrid:c=!0,showLegend:u=!0,yUnit:p="",barRadius:f=2,colors:m,gradientFrom:y="#8c4fe2",gradientTo:x="#446cff",formatTooltipValue:_,stackStyle:w="gradient-each",capColor:$,className:R,...j},S)=>{var K,re,fe,we;const L=m&&m.length>0?m:m_,N=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[C,T]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),A=g.useRef(null),[E,z]=g.useState(540);g.useEffect(()=>{const he=A.current;if(!he)return;const ve=new ResizeObserver(Se=>{var Be;const Ae=(Be=Se[0])==null?void 0:Be.contentRect.width;Ae>0&&z(Math.floor(Ae))});ve.observe(he);const je=Math.floor(he.getBoundingClientRect().width);return je>0&&z(je),()=>ve.disconnect()},[]);const O=44,U=0,Z=20,X=20,V=E,te=l,ie=V-O-U,ce=te-Z-X,se=5,J=t.map((he,ve)=>he.color??L[ve%L.length]);let W=0;i==="stacked"?a.forEach((he,ve)=>{const je=t.reduce((Se,Ae)=>Se+(Ae.data[ve]??0),0);je>W&&(W=je)}):i==="horizontal"?W=Math.max(...((K=t[0])==null?void 0:K.data)??[0]):t.forEach(he=>he.data.forEach(ve=>{ve>W&&(W=ve)}));const P=Gc(W),D=Array.from({length:se+1},(he,ve)=>P*(ve/se)).reverse(),k=he=>X+ce-he/P*ce,I=ie/a.length,Q=3,ne=i==="grouped"?Math.max(4,(I-Q*(t.length+1))/t.length):I,G=()=>T(he=>({...he,visible:!1})),ue=g.useCallback(he=>{const ve=he.currentTarget.getBoundingClientRect(),je=he.clientX-ve.left,Se=Math.floor((je-O)/I);if(Se<0||Se>=a.length){G();return}const Ae=t.map((Be,Fe)=>({color:J[Fe],series:Be.label,value:Be.data[Se]??0}));T({visible:!0,x:he.clientX+12,y:he.clientY-8,label:a[Se],items:Ae})},[t,a,I,J,O]);if(i==="gradient"){const he=((re=t[0])==null?void 0:re.data)??[],ve=((fe=t[0])==null?void 0:fe.label)??"",je=44,Se=0,Ae=20,Be=20,Fe=Math.max(V-je-Se,1),Ve=te-Ae-Be,Ue=Math.max(0,...he),rt=Ue>0?Gc(Ue):10,Ze=5,$t=Array.from({length:Ze+1},(Ne,Je)=>rt*Je/Ze),We=Ne=>Ae+Ve-Ne/rt*Ve,Tt=Fe/Math.max(1,he.length),bt=Ne=>je+Tt*Ne,kn=Ne=>je+Tt*(Ne+1),Cn=Ne=>je+Tt*(Ne+.5),Cr=he.length===0?"":he.map((Ne,Je)=>{const lt=We(Ne);return`M ${bt(Je)} ${lt} L ${kn(Je)} ${lt}`}).join(" "),Zo=[];he.forEach((Ne,Je)=>{if(Ne<=0)return;const lt=We(Ne);Zo.push({x:bt(Je),y:lt,width:Math.max(kn(Je)-bt(Je),0),height:Ae+Ve-lt})});const jr=Math.max(1,Math.ceil(45/Tt)),Xs=a.length-1,ni=_??(Ne=>`${Mo(Ne)}${p}`);return r.jsxs("div",{ref:S,className:ee(Le.root,R),...j,children:[r.jsx("div",{ref:A,className:Le.svgWrap,children:r.jsxs("svg",{width:V,height:te,viewBox:`0 0 ${V} ${te}`,className:Le.svg,onMouseLeave:G,onMouseMove:Ne=>{const Je=Ne.currentTarget.getBoundingClientRect(),lt=Ne.clientX-Je.left,It=Math.floor((lt-je)/Tt);if(It<0||It>=he.length){G();return}T({visible:!0,x:Ne.clientX+12,y:Ne.clientY-8,label:a[It]??"",items:[{color:x,series:ve,value:he[It]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${N}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:y}),r.jsx("stop",{offset:"100%",stopColor:x})]}),r.jsxs("linearGradient",{id:`${N}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:x,stopOpacity:"0"})]})]}),$t.map((Ne,Je)=>r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,x2:V-Se,y1:We(Ne),y2:We(Ne),className:Le.gridLine}),r.jsxs("text",{x:0,y:We(Ne)-6,className:Le.axisLabel,textAnchor:"start",children:[Mo(Ne),p]})]},`t-${Je}`)),Zo.map((Ne,Je)=>r.jsx("rect",{x:Ne.x,y:Ne.y,width:Ne.width,height:Ne.height,fill:`url(#${N}-fill)`},`b-${Je}`)),Cr&&r.jsx("path",{d:Cr,fill:"none",stroke:`url(#${N}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),C.visible&&(()=>{var Sr;const Ne=(Sr=A.current)==null?void 0:Sr.getBoundingClientRect();if(!Ne)return null;const Je=C.x-12-Ne.left,lt=Math.floor((Je-je)/Tt);if(lt<0||lt>=he.length)return null;const It=he[lt]??0;return It<=0?null:r.jsx("circle",{cx:Cn(lt),cy:We(It),r:4,fill:x,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((Ne,Je)=>{const lt=Je===0,It=Je===Xs;if(!(lt||It)&&Je%jr!==0)return null;const Ko=lt?je:It?V-Se:Cn(Je),Qo=lt?"start":It?"end":"middle";return r.jsx("text",{x:Ko,y:te-Be+18,className:Le.axisLabel,textAnchor:Qo,children:Ne},`xl-${Je}`)})]})}),C.visible&&C.items.length>0&&r.jsxs("div",{className:Le.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Le.tooltipLabel,children:C.label}),C.items.map(Ne=>r.jsxs("div",{className:Le.tooltipRow,children:[r.jsx("span",{className:Le.tooltipDot,style:{background:Ne.color}}),r.jsx("span",{className:Le.tooltipSeries,children:Ne.series}),r.jsx("span",{className:Le.tooltipValue,children:ni(Ne.value)})]},Ne.series))]})]})}if(i==="horizontal"){const he=((we=t[0])==null?void 0:we.data)??[],ve=Gc(Math.max(...he,1)),je=28,Se=10,Ae=120,Fe=V-Ae-44,Ve=a.length*(je+Se)+Se;return r.jsxs("div",{ref:S,className:ee(Le.root,R),...j,children:[r.jsx("div",{ref:A,className:Le.svgWrap,children:r.jsx("svg",{width:V,height:Ve,viewBox:`0 0 ${V} ${Ve}`,className:Le.svg,onMouseLeave:G,onMouseMove:Ue=>{var We;const rt=Ue.currentTarget.getBoundingClientRect(),Ze=Ue.clientY-rt.top,$t=Math.floor(Ze/(je+Se));if($t<0||$t>=a.length){G();return}T({visible:!0,x:Ue.clientX+12,y:Ue.clientY-8,label:a[$t],items:[{color:J[0],series:((We=t[0])==null?void 0:We.label)??"",value:he[$t]??0}]})},children:a.map((Ue,rt)=>{const Ze=Se+rt*(je+Se),$t=he[rt]??0,We=$t/ve*Fe;return r.jsxs("g",{children:[r.jsx("text",{x:Ae-8,y:Ze+je/2+4,className:Le.axisLabel,textAnchor:"end",children:Ue}),r.jsx("rect",{x:Ae,y:Ze,width:We,height:je,rx:f,fill:J[0]}),r.jsxs("text",{x:Ae+We+6,y:Ze+je/2+4,className:Le.axisLabel,textAnchor:"start",children:[Mo($t),p]})]},rt)})})}),C.visible&&r.jsxs("div",{className:Le.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Le.tooltipLabel,children:C.label}),C.items.map(Ue=>r.jsxs("div",{className:Le.tooltipRow,children:[r.jsx("span",{className:Le.tooltipDot,style:{background:Ue.color}}),r.jsx("span",{className:Le.tooltipSeries,children:Ue.series}),r.jsxs("span",{className:Le.tooltipValue,children:[Mo(Ue.value),p]})]},Ue.series))]})]})}return r.jsxs("div",{ref:S,className:ee(Le.root,R),...j,children:[r.jsx("div",{ref:A,className:Le.svgWrap,children:r.jsxs("svg",{width:V,height:te,viewBox:`0 0 ${V} ${te}`,className:Le.svg,onMouseMove:ue,onMouseLeave:G,children:[r.jsx("defs",{children:J.flatMap((he,ve)=>[r.jsxs("linearGradient",{id:`${N}-fill-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:he,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:he,stopOpacity:"0"})]},`soft-${ve}`),r.jsxs("linearGradient",{id:`${N}-fill-strong-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:he,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:he,stopOpacity:"0"})]},`strong-${ve}`)])}),D.map(he=>{const ve=k(he);return r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,y1:ve,x2:V-U,y2:ve,className:Le.gridLine}),r.jsxs("text",{x:0,y:ve-6,className:Le.axisLabel,textAnchor:"start",children:[Mo(he),p]})]},he)}),a.map((he,ve)=>{const je=O+ve*I;if(i==="stacked"){let Be=0;const Fe=t.map((We,Tt)=>{const bt=We.data[ve]??0,kn=bt/P*ce,Cn=k(Be+bt);return Be+=bt,{si:Tt,value:bt,barH:kn,y:Cn}}),Ve=je+(I-ne)/2,Ue=Fe.filter(We=>We.value>0),rt=Ue.length>0?Ue[0].si:-1,Ze=Ue.length>0?Ue[Ue.length-1]:null,$t=$??(Ze?J[Ze.si]:"transparent");return r.jsxs("g",{children:[Fe.map(({si:We,value:Tt,barH:bt,y:kn})=>{if(Tt<=0)return null;if(w==="mono-scale"){const Cn=We===rt;return r.jsx("rect",{x:Ve,y:kn,width:ne,height:bt,fill:Cn?`url(#${N}-fill-strong-${We})`:J[We]},`fill-${We}`)}return r.jsx("rect",{x:Ve,y:kn,width:ne,height:bt,fill:`url(#${N}-fill-${We})`},`fill-${We}`)}),w==="mono-scale"?Ze&&r.jsx("line",{x1:Ve,x2:Ve+ne,y1:Ze.y,y2:Ze.y,stroke:$t,strokeWidth:2,strokeLinecap:"butt"}):Fe.map(({si:We,value:Tt,y:bt})=>Tt>0?r.jsx("line",{x1:Ve,x2:Ve+ne,y1:bt,y2:bt,stroke:J[We],strokeWidth:2,strokeLinecap:"butt"},`cap-${We}`):null)]},ve)}const Se=t.length*ne+(t.length-1)*Q,Ae=je+(I-Se)/2;return r.jsx("g",{children:t.map((Be,Fe)=>{const Ve=Be.data[ve]??0;if(Ve<=0)return null;const Ue=Ve/P*ce,rt=Ae+Fe*(ne+Q),Ze=k(Ve);return r.jsxs("g",{children:[r.jsx("rect",{x:rt,y:Ze,width:ne,height:Ue,fill:`url(#${N}-fill-${Fe})`}),r.jsx("line",{x1:rt,x2:rt+ne,y1:Ze,y2:Ze,stroke:J[Fe],strokeWidth:2,strokeLinecap:"butt"})]},Fe)})},ve)}),(()=>{const ve=Math.max(1,Math.ceil(45/I)),je=a.length-1;return a.map((Se,Ae)=>{const Be=Ae===0,Fe=Ae===je;if(!(Be||Fe)&&Ae%ve!==0)return null;const Ue=Be?O:Fe?V-U:O+I*(Ae+.5),rt=Be?"start":Fe?"end":"middle";return r.jsx("text",{x:Ue,y:te-Z+18,className:Le.axisLabel,textAnchor:rt,children:Se},`xl-${Ae}`)})})()]})}),u&&t.length>1&&r.jsx("div",{className:Le.legendWrap,children:t.map((he,ve)=>r.jsxs("div",{className:Le.legendItem,children:[r.jsx("span",{className:Le.legendDot,style:{background:J[ve]}}),r.jsx("span",{className:Le.legendLabel,children:he.label})]},he.label))}),C.visible&&r.jsxs("div",{className:Le.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Le.tooltipLabel,children:C.label}),C.items.map(he=>r.jsxs("div",{className:Le.tooltipRow,children:[r.jsx("span",{className:Le.tooltipDot,style:{background:he.color}}),r.jsx("span",{className:Le.tooltipSeries,children:he.series}),r.jsxs("span",{className:Le.tooltipValue,children:[Mo(he.value),p]})]},he.series))]})]})});g_.displayName="BarChart";const v_="_root_1crij_5",y_="_svgWrap_1crij_13",x_="_svg_1crij_13",w_="_gridLine_1crij_23",__="_axisLabelY_1crij_35 _axisLabel_1crij_28",b_="_axisLabelX_1crij_39 _axisLabel_1crij_28",k_="_legendWrap_1crij_51",C_="_tooltip_1crij_76",j_="_tooltipLabel_1crij_95",S_="_tooltipRow_1crij_105",N_="_tooltipDot_1crij_111",R_="_tooltipSeries_1crij_118",L_="_tooltipValue_1crij_125",en={root:v_,svgWrap:y_,svg:x_,gridLine:w_,axisLabelY:__,axisLabelX:b_,legendWrap:k_,tooltip:C_,tooltipLabel:j_,tooltipRow:S_,tooltipDot:N_,tooltipSeries:R_,tooltipValue:L_};function M_(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function o1(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}function $_(t,a=.35){if(t.length<2)return"";let i=`M ${t[0][0]} ${t[0][1]}`;for(let l=0;l<t.length-1;l++){const[c,u]=t[l],[p,f]=t[l+1],m=(p-c)*a;i+=` C ${c+m} ${u}, ${p-m} ${f}, ${p} ${f}`}return i}const T_=g.forwardRef(({series:t,labels:a,height:i=260,showGrid:l=!0,showLegend:c=!0,gradientFrom:u="#8c4fe2",gradientTo:p="#446cff",yUnit:f="",yTickCount:m=5,className:y,...x},_)=>{const[w,$]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),R=`line-grad-${Math.random().toString(36).slice(2,9)}`,j=g.useRef(null),[S,L]=g.useState(540);g.useEffect(()=>{const P=j.current;if(!P)return;const D=new ResizeObserver(I=>{var ne;const Q=(ne=I[0])==null?void 0:ne.contentRect.width;Q>0&&L(Math.floor(Q))});D.observe(P);const k=Math.floor(P.getBoundingClientRect().width);return k>0&&L(k),()=>D.disconnect()},[]);const N=44,C=20,T=20,A=S,E=i,z=A-N,O=E-C-T,U=`url(#${R}-stroke)`,Z=P=>P.color??U,X=t.flatMap(P=>P.data),V=M_(Math.max(...X,1)),te=Array.from({length:m+1},(P,D)=>V*(D/m)).reverse(),ie=P=>T+O-P/V*O,ce=P=>a.length>1?N+P/(a.length-1)*z:N+z/2,se=P=>P.map((D,k)=>[ce(k),ie(D)]),J=()=>$(P=>({...P,visible:!1})),W=g.useCallback(P=>{const D=P.currentTarget.getBoundingClientRect(),I=P.clientX-D.left-N,Q=z/Math.max(a.length-1,1),ne=Math.round(I/Q),G=Math.max(0,Math.min(ne,a.length-1)),ue=t.map(K=>({color:K.color??p,series:K.label,value:K.data[G]??0}));$({visible:!0,index:G,x:P.clientX+12,y:P.clientY-8,label:a[G],items:ue})},[t,a,p,z,N]);return r.jsxs("div",{ref:_,className:ee(en.root,y),...x,children:[r.jsx("div",{ref:j,className:en.svgWrap,children:r.jsxs("svg",{width:A,height:E,viewBox:`0 0 ${A} ${E}`,className:en.svg,onMouseMove:W,onMouseLeave:J,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${R}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:u}),r.jsx("stop",{offset:"100%",stopColor:p})]}),r.jsxs("linearGradient",{id:`${R}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:p,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:p}),r.jsx("stop",{offset:"100%",stopColor:p,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${R}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${R}-clip`,children:r.jsx("rect",{x:N,y:T,width:z,height:O,rx:6,ry:6})})]}),te.map(P=>{const D=ie(P);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:D,x2:A,y2:D,className:en.gridLine}),r.jsxs("text",{x:0,y:D-6,className:en.axisLabelY,textAnchor:"start",children:[o1(P),f]})]},P)}),r.jsx("g",{clipPath:`url(#${R}-clip)`,children:t.map((P,D)=>{const k=se(P.data),I=$_(k);return r.jsx("path",{d:I,fill:"none",stroke:Z(P),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},D)})}),(()=>{const P=w.index>=0?w.index:0,D=ce(P),k=w.visible&&w.index>=0,I="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:k?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${D}px)`,transition:I},children:[r.jsx("line",{x1:0,x2:0,y1:T,y2:T+O,stroke:p,strokeWidth:2,strokeLinecap:"round",opacity:.5}),t.map((Q,ne)=>{const G=Q.data[P]??0,ue=ie(G),K=Q.color??p;return r.jsx("g",{style:{transform:`translateY(${ue}px)`,transition:I},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:K,filter:`url(#${R}-pin-shadow)`})},ne)})]})})})(),(()=>{const D=a.length>1?z/(a.length-1):z,k=Math.max(1,Math.ceil(45/Math.max(D,1))),I=a.length-1;return a.map((Q,ne)=>{const G=ne===0,ue=ne===I;if(!(G||ue)&&ne%k!==0)return null;const re=G?N:ue?A:ce(ne),fe=G?"start":ue?"end":"middle";return r.jsx("text",{x:re,y:E-C+14,className:en.axisLabelX,textAnchor:fe,children:Q},Q)})})()]})}),c&&t.length>0&&r.jsx("div",{className:en.legendWrap,children:r.jsx(_m,{variant:"line",items:t.map(P=>({color:P.color??p,label:P.label}))})}),w.visible&&r.jsxs("div",{className:en.tooltip,style:{left:w.x,top:w.y},children:[r.jsx("div",{className:en.tooltipLabel,children:w.label}),w.items.map(P=>r.jsxs("div",{className:en.tooltipRow,children:[r.jsx("span",{className:en.tooltipDot,style:{background:P.color}}),r.jsx("span",{className:en.tooltipSeries,children:P.series}),r.jsxs("span",{className:en.tooltipValue,children:[o1(P.value),f]})]},P.series))]})]})});T_.displayName="LineChart";const I_="_root_3tq2n_5",A_="_chartWrap_3tq2n_14",E_="_svg_3tq2n_18",P_="_centerText_3tq2n_23",z_="_statLegend_3tq2n_31",O_="_statItem_3tq2n_37",D_="_statBar_3tq2n_44",B_="_statText_3tq2n_50",F_="_statValue_3tq2n_56",W_="_statLabel_3tq2n_65",H_="_listLegend_3tq2n_72",q_="_legendItem_3tq2n_79",U_="_legendDot_3tq2n_85",V_="_legendLabel_3tq2n_92",G_="_legendValue_3tq2n_99",Y_="_tooltip_3tq2n_107",Z_="_tooltipLabel_3tq2n_118",K_="_tooltipValue_3tq2n_124",yt={root:I_,chartWrap:A_,svg:E_,centerText:P_,statLegend:z_,statItem:O_,statBar:D_,statText:B_,statValue:F_,statLabel:W_,listLegend:H_,legendItem:q_,legendDot:U_,legendLabel:V_,legendValue:G_,tooltip:Y_,tooltipLabel:Z_,tooltipValue:K_},a1=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],Q_=g.forwardRef(({segments:t,innerRadius:a=60,size:i=200,showLegend:l=!0,legendVariant:c="list",unit:u="%",centerLabel:p,className:f,...m},y)=>{const[x,_]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),w=t.map((A,E)=>A.color??a1[E%a1.length]),$=t.reduce((A,E)=>A+E.value,0),R=i/2,j=i/2,S=i*.15,L=(i-S)/2-2,N=2*Math.PI*L;let C=-N/4;const T=t.map((A,E)=>{const O=($>0?A.value/$:0)*N,U=`${O} ${N-O}`,Z=-C;return C+=O,{dashArray:U,dashOffset:Z,color:w[E],...A}});return r.jsxs("div",{ref:y,className:ee(yt.root,f),...m,children:[r.jsx("div",{className:yt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:yt.svg,children:[r.jsx("circle",{cx:R,cy:j,r:L,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:S}),T.map((A,E)=>r.jsx("circle",{cx:R,cy:j,r:L,fill:"none",stroke:A.color,strokeWidth:S,strokeDasharray:A.dashArray,strokeDashoffset:A.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:z=>{const O=$>0?Math.round(A.value/$*100):0;_({visible:!0,x:z.clientX+12,y:z.clientY-8,label:A.label,value:`${O}${u}`})},onMouseLeave:()=>_(z=>({...z,visible:!1}))},E)),p&&a>0&&r.jsx("text",{x:R,y:j+6,textAnchor:"middle",className:yt.centerText,children:p})]})}),l&&c==="stat"&&r.jsx("div",{className:yt.statLegend,children:t.map((A,E)=>{const z=$>0?Math.round(A.value/$*100):0;return r.jsxs("div",{className:yt.statItem,children:[r.jsx("span",{className:yt.statBar,style:{background:w[E]}}),r.jsxs("div",{className:yt.statText,children:[r.jsxs("span",{className:yt.statValue,children:[z,u]}),r.jsx("span",{className:yt.statLabel,children:A.label})]})]},A.label)})}),l&&c==="list"&&r.jsx("div",{className:yt.listLegend,children:t.map((A,E)=>{const z=$>0?Math.round(A.value/$*100):0;return r.jsxs("div",{className:yt.legendItem,children:[r.jsx("span",{className:yt.legendDot,style:{background:w[E]}}),r.jsx("span",{className:yt.legendLabel,children:A.label}),r.jsxs("span",{className:yt.legendValue,children:[z,u]})]},A.label)})}),x.visible&&r.jsxs("div",{className:yt.tooltip,style:{left:x.x,top:x.y},children:[r.jsx("div",{className:yt.tooltipLabel,children:x.label}),r.jsx("div",{className:yt.tooltipValue,children:x.value})]})]})});Q_.displayName="DonutChart";const X_="_root_bqpf6_5",J_="_svgWrap_bqpf6_10",eb="_svg_bqpf6_10",tb="_axisLabel_bqpf6_19",nb="_tooltip_bqpf6_25",$o={root:X_,svgWrap:J_,svg:eb,axisLabel:tb,tooltip:nb};function rb(t){return t<.35?"var(--Alloy-green-100)":t<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const ob=g.forwardRef(({cells:t,rows:a,cols:i,colorScale:l=rb,cellRadius:c=4,cellGap:u=4,showTooltip:p=!0,className:f,...m},y)=>{const[x,_]=g.useState({visible:!1,x:0,y:0,content:""}),w=g.useRef(null),[$,R]=g.useState(540);g.useEffect(()=>{const E=w.current;if(!E)return;const z=new ResizeObserver(U=>{var X;const Z=(X=U[0])==null?void 0:X.contentRect.width;Z>0&&R(Math.floor(Z))});z.observe(E);const O=Math.floor(E.getBoundingClientRect().width);return O>0&&R(O),()=>z.disconnect()},[]);const j=32,S=16,L=$,N=L-j-u,C=Math.max(4,(N-(i.length-1)*u)/i.length),T=a.length*(S+u)+u+24,A=new Map;return t.forEach(E=>A.set(`${E.row}__${E.col}`,E)),r.jsxs("div",{ref:y,className:ee($o.root,f),...m,children:[r.jsx("div",{ref:w,className:$o.svgWrap,children:r.jsxs("svg",{width:L,height:T,viewBox:`0 0 ${L} ${T}`,className:$o.svg,onMouseLeave:()=>_(E=>({...E,visible:!1})),children:[i.map((E,z)=>{const O=j+u+z*(C+u)+C/2;return r.jsx("text",{x:O,y:12,className:$o.axisLabel,textAnchor:"middle",children:E},E)}),a.map((E,z)=>{const O=24+z*(S+u);return r.jsxs("g",{children:[r.jsx("text",{x:j-4,y:O+S/2+4,className:$o.axisLabel,textAnchor:"end",children:E}),i.map((U,Z)=>{const X=A.get(`${E}__${U}`),V=(X==null?void 0:X.value)??0,te=l(V),ie=j+u+Z*(C+u);return r.jsx("rect",{x:ie,y:O,width:C,height:S,rx:c,fill:te,style:{cursor:"pointer"},onMouseEnter:ce=>{if(!p)return;const se=(X==null?void 0:X.label)??`${E} / ${U}: ${Math.round(V*100)}%`;_({visible:!0,x:ce.clientX+12,y:ce.clientY-8,content:se})},onMouseLeave:()=>_(ce=>({...ce,visible:!1}))},U)})]},E)})]})}),x.visible&&r.jsx("div",{className:$o.tooltip,style:{left:x.x,top:x.y},children:x.content})]})});ob.displayName="HeatMap";const ab="_root_18572_6",ib="_gridWrap_18572_14",sb="_grid_18572_14",lb="_cell_18572_27",cb="_legend_18572_33",db="_legendSquare_18572_43",ub="_tooltip_18572_49",mr={root:ab,gridWrap:ib,grid:sb,cell:lb,legend:cb,legendSquare:db,tooltip:ub},hb=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function pb(t,a){if(t<=0)return 0;const i=t/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const fb=g.forwardRef(({days:t,levelColors:a=hb,cellSize:i=14,cellGap:l=3,cellRadius:c=2,fillWidth:u=!1,showLegend:p=!0,maxCount:f,formatTooltip:m,ariaLabel:y,className:x,..._},w)=>{const[$,R]=g.useState({visible:!1,x:0,y:0,content:""}),j=f??Math.max(1,...t.map(C=>C.count)),S=[];for(let C=0;C<t.length;C+=7)S.push(t.slice(C,C+7));const L=u?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${S.length}, minmax(0, 1fr))`,gap:`${l}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${l}px`},N=u?"100%":i;return r.jsxs("div",{ref:w,className:ee(mr.root,x),..._,children:[r.jsx("div",{className:mr.gridWrap,children:r.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${j} on the busiest day`,className:mr.grid,style:L,onMouseLeave:()=>R(C=>({...C,visible:!1})),children:S.map((C,T)=>Array.from({length:7},(A,E)=>{const z=C[E];if(!z)return r.jsx("span",{className:mr.cell,style:{width:i,height:i,borderRadius:c,background:a[0]}},`${T}-${E}`);const O=pb(z.count,j),U=m?m(z,O):`${z.label??z.date}: ${z.count} activation${z.count===1?"":"s"}`;return r.jsx("span",{className:mr.cell,style:{width:N,height:i,borderRadius:c,background:a[O]},onMouseMove:Z=>R({visible:!0,x:Z.clientX,y:Z.clientY,content:U}),onMouseLeave:()=>R(Z=>({...Z,visible:!1}))},`${T}-${E}`)}))})}),p&&r.jsxs("div",{className:mr.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(C=>r.jsx("span",{className:mr.legendSquare,style:{background:a[C],borderRadius:c}},C)),r.jsx("span",{children:"More"})]}),$.visible&&r.jsx("div",{className:mr.tooltip,style:{left:$.x,top:$.y},children:$.content})]})});fb.displayName="ActivityHeatMap";const mb="_root_14edh_5",gb="_track_14edh_17",vb="_segment_14edh_28",yb="_legend_14edh_49",xb="_legendRow_14edh_58",wb="_legendDot_14edh_68",_b="_legendLabel_14edh_74",bb="_legendValue_14edh_78",kb="_tooltip_14edh_84",Cb="_tooltipLabel_14edh_100",jb="_tooltipValueRow_14edh_105",Sb="_tooltipDot_14edh_114",cn={root:mb,track:gb,segment:vb,legend:yb,legendRow:xb,legendDot:wb,legendLabel:_b,legendValue:bb,tooltip:kb,tooltipLabel:Cb,tooltipValueRow:jb,tooltipDot:Sb},Nb=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],To={r:140,g:79,b:226},Yc={r:68,g:108,b:255};function i1(t){const a=Math.max(0,Math.min(100,t))/100,i=Math.round(To.r+(Yc.r-To.r)*a),l=Math.round(To.g+(Yc.g-To.g)*a),c=Math.round(To.b+(Yc.b-To.b)*a);return`rgb(${i}, ${l}, ${c})`}const Rb=g.forwardRef(({segments:t,colors:a=Nb,aiGradient:i=!1,height:l,showLegend:c=!1,flat:u=!1,ariaLabel:p,className:f,...m},y)=>{const[x,_]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),w=t.reduce((S,L)=>S+Math.max(0,L.value),0);let $=0;const R=t.map((S,L)=>{const N=Math.max(0,S.value),C=w>0?N/w*100:0,T=w>0?$/w*100:0;$+=N;const A=w>0?$/w*100:0,E=S.color??a[L%a.length],z=u?!0:S.emphasized??L===0;return{...S,pct:C,startPct:T,endPct:A,color:E,emphasized:z}}),j=l!==void 0?{height:typeof l=="number"?`${l}px`:l}:void 0;return r.jsxs("div",{ref:y,className:ee(cn.root,f),...m,children:[r.jsx("div",{role:"img","aria-label":p??`Ratio bar: ${t.map(S=>`${S.label} ${S.value}`).join(", ")}`,className:cn.track,style:j,onMouseLeave:()=>_(S=>({...S,visible:!1})),children:R.map(S=>{const L=i?`linear-gradient(to right, ${i1(S.startPct)}, ${i1(S.endPct)})`:S.color;return r.jsx("span",{className:cn.segment,"data-emphasized":S.emphasized||void 0,"data-ai":i||void 0,style:{width:`${S.pct}%`,background:L,"--ratio-hover-bg":S.color},onMouseMove:N=>_({visible:!0,x:N.clientX,y:N.clientY,label:S.label,value:S.value,color:S.color})},S.label)})}),c&&r.jsx("ul",{className:cn.legend,children:R.map(S=>r.jsxs("li",{className:cn.legendRow,children:[r.jsx("span",{className:cn.legendDot,style:{background:S.color}}),r.jsx("span",{className:cn.legendLabel,children:S.label}),r.jsx("span",{className:cn.legendValue,children:S.value.toLocaleString("en-US")})]},S.label))}),x.visible&&r.jsxs("div",{className:cn.tooltip,style:{left:x.x,top:x.y},children:[r.jsx("span",{className:cn.tooltipLabel,children:x.label}),r.jsxs("span",{className:cn.tooltipValueRow,children:[r.jsx("span",{className:cn.tooltipDot,style:{background:x.color}}),x.value.toLocaleString("en-US")]})]})]})});Rb.displayName="RatioBar";const Lb="_track_1wmly_6",Mb="_fill_1wmly_12",s1={track:Lb,fill:Mb},$b=g.forwardRef(({value:t,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:l="var(--color-bg-tertiary)",gapColor:c="var(--color-bg-primary)",stripeWidth:u=2,stripeGap:p=1,height:f=12,ariaLabel:m,className:y,style:x,..._},w)=>{const $=u+p,R=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${u}px,
      ${c} ${u}px,
      ${c} ${$}px
    )`,j=Math.max(0,Math.min(a,t)),S=a>0?j/a*100:0;return r.jsx("div",{ref:w,role:"progressbar","aria-label":m??`Progress: ${Math.round(S)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":j,className:ee(s1.track,y),style:{height:f,background:`${R}, ${l}`,...x},..._,children:r.jsx("div",{className:s1.fill,style:{width:`${S}%`,background:`${R}, ${i}`}})})});$b.displayName="StripedBar";const Tb=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],Ib=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function l1(t,a="to right"){const i=t.map(({color:l,position:c})=>`${l} ${c}`).join(", ");return`linear-gradient(${a}, ${i})`}l1(Tb),l1(Ib);var Xe="-ms-",Wa="-moz-",Oe="-webkit-",bm="comm",Ws="rule",Dd="decl",Ab="@import",Eb="@namespace",km="@keyframes",Pb="@layer",Cm=Math.abs,Bd=String.fromCharCode,gd=Object.assign;function zb(t,a){return ft(t,0)^45?(((a<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function jm(t){return t.trim()}function Vn(t,a){return(t=a.exec(t))?t[0]:t}function Re(t,a,i){return t.replace(a,i)}function xs(t,a,i){return t.indexOf(a,i)}function ft(t,a){return t.charCodeAt(a)|0}function Xr(t,a,i){return t.slice(a,i)}function _n(t){return t.length}function Sm(t){return t.length}function za(t,a){return a.push(t),t}function Ob(t,a){return t.map(a).join("")}function c1(t,a){return t.filter(function(i){return!Vn(i,a)})}var Hs=1,Wo=1,Nm=0,un=0,ut=0,Vo="";function qs(t,a,i,l,c,u,p,f){return{value:t,root:a,parent:i,type:l,props:c,children:u,line:Hs,column:Wo,length:p,return:"",siblings:f}}function gr(t,a){return gd(qs("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},a)}function Io(t){for(;t.root;)t=gr(t.root,{children:[t]});za(t,t.siblings)}function Db(){return ut}function Bb(){return ut=un>0?ft(Vo,--un):0,Wo--,ut===10&&(Wo=1,Hs--),ut}function bn(){return ut=un<Nm?ft(Vo,un++):0,Wo++,ut===10&&(Wo=1,Hs++),ut}function yr(){return ft(Vo,un)}function ws(){return un}function Us(t,a){return Xr(Vo,t,a)}function Ua(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fb(t){return Hs=Wo=1,Nm=_n(Vo=t),un=0,[]}function Wb(t){return Vo="",t}function Zc(t){return jm(Us(un-1,vd(t===91?t+2:t===40?t+1:t)))}function Hb(t){for(;(ut=yr())&&ut<33;)bn();return Ua(t)>2||Ua(ut)>3?"":" "}function qb(t,a){for(;--a&&bn()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Us(t,ws()+(a<6&&yr()==32&&bn()==32))}function vd(t){for(;bn();)switch(ut){case t:return un;case 34:case 39:t!==34&&t!==39&&vd(ut);break;case 40:t===41&&vd(t);break;case 92:bn();break}return un}function Ub(t,a){for(;bn()&&t+ut!==57;)if(t+ut===84&&yr()===47)break;return"/*"+Us(a,un-1)+"*"+Bd(t===47?t:bn())}function Vb(t){for(;!Ua(yr());)bn();return Us(t,un)}function Gb(t){return Wb(_s("",null,null,null,[""],t=Fb(t),0,[0],t))}function _s(t,a,i,l,c,u,p,f,m){for(var y=0,x=0,_=p,w=0,$=0,R=0,j=1,S=1,L=1,N=0,C="",T=c,A=u,E=l,z=C;S;)switch(R=N,N=bn()){case 40:if(R!=108&&ft(z,_-1)==58){xs(z+=Re(Zc(N),"&","&\f"),"&\f",Cm(y?f[y-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:z+=Zc(N);break;case 9:case 10:case 13:case 32:z+=Hb(R);break;case 92:z+=qb(ws()-1,7);continue;case 47:switch(yr()){case 42:case 47:za(Yb(Ub(bn(),ws()),a,i,m),m),(Ua(R||1)==5||Ua(yr()||1)==5)&&_n(z)&&Xr(z,-1,void 0)!==" "&&(z+=" ");break;default:z+="/"}break;case 123*j:f[y++]=_n(z)*L;case 125*j:case 59:case 0:switch(N){case 0:case 125:S=0;case 59+x:L==-1&&(z=Re(z,/\f/g,"")),$>0&&(_n(z)-_||j===0&&R===47)&&za($>32?u1(z+";",l,i,_-1,m):u1(Re(z," ","")+";",l,i,_-2,m),m);break;case 59:z+=";";default:if(za(E=d1(z,a,i,y,x,c,f,C,T=[],A=[],_,u),u),N===123)if(x===0)_s(z,a,E,E,T,u,_,f,A);else{switch(w){case 99:if(ft(z,3)===110)break;case 108:if(ft(z,2)===97)break;default:x=0;case 100:case 109:case 115:}x?_s(t,E,E,l&&za(d1(t,E,E,0,0,c,f,C,c,T=[],_,A),A),c,A,_,f,l?T:A):_s(z,E,E,E,[""],A,0,f,A)}}y=x=$=0,j=L=1,C=z="",_=p;break;case 58:_=1+_n(z),$=R;default:if(j<1){if(N==123)--j;else if(N==125&&j++==0&&Bb()==125)continue}switch(z+=Bd(N),N*j){case 38:L=x>0?1:(z+="\f",-1);break;case 44:f[y++]=(_n(z)-1)*L,L=1;break;case 64:yr()===45&&(z+=Zc(bn())),w=yr(),x=_=_n(C=z+=Vb(ws())),N++;break;case 45:R===45&&_n(z)==2&&(j=0)}}return u}function d1(t,a,i,l,c,u,p,f,m,y,x,_){for(var w=c-1,$=c===0?u:[""],R=Sm($),j=0,S=0,L=0;j<l;++j)for(var N=0,C=Xr(t,w+1,w=Cm(S=p[j])),T=t;N<R;++N)(T=jm(S>0?$[N]+" "+C:Re(C,/&\f/g,$[N])))&&(m[L++]=T);return qs(t,a,i,c===0?Ws:f,m,y,x,_)}function Yb(t,a,i,l){return qs(t,a,i,bm,Bd(Db()),Xr(t,2,-2),0,l)}function u1(t,a,i,l,c){return qs(t,a,i,Dd,Xr(t,0,l),Xr(t,l+1,-1),l,c)}function Rm(t,a,i){switch(zb(t,a)){case 5103:return Oe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Oe+t+t;case 4855:return Oe+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Wa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+t+Wa+t+Xe+t+t;case 5936:switch(ft(t,a+11)){case 114:return Oe+t+Xe+Re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Oe+t+Xe+Re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Oe+t+Xe+Re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Oe+t+Xe+t+t;case 6165:return Oe+t+Xe+"flex-"+t+t;case 5187:return Oe+t+Re(t,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+Xe+"flex-$1$2")+t;case 5443:return Oe+t+Xe+"flex-item-"+Re(t,/flex-|-self/g,"")+(Vn(t,/flex-|baseline/)?"":Xe+"grid-row-"+Re(t,/flex-|-self/g,""))+t;case 4675:return Oe+t+Xe+"flex-line-pack"+Re(t,/align-content|flex-|-self/g,"")+t;case 5548:return Oe+t+Xe+Re(t,"shrink","negative")+t;case 5292:return Oe+t+Xe+Re(t,"basis","preferred-size")+t;case 6060:return Oe+"box-"+Re(t,"-grow","")+Oe+t+Xe+Re(t,"grow","positive")+t;case 4554:return Oe+Re(t,/([^-])(transform)/g,"$1"+Oe+"$2")+t;case 6187:return Re(Re(Re(t,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),t,"")+t;case 5495:case 3959:return Re(t,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Re(Re(t,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+Xe+"flex-pack:$3"),/space-between/,"justify")+Oe+t+t;case 4200:if(!Vn(t,/flex-|baseline/))return Xe+"grid-column-align"+Xr(t,a)+t;break;case 2592:case 3360:return Xe+Re(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(l,c){return a=c,Vn(l.props,/grid-\w+-end/)})?~xs(t+(i=i[a].value),"span",0)?t:Xe+Re(t,"-start","")+t+Xe+"grid-row-span:"+(~xs(i,"span",0)?Vn(i,/\d+/):+Vn(i,/\d+/)-+Vn(t,/\d+/))+";":Xe+Re(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(l){return Vn(l.props,/grid-\w+-start/)})?t:Xe+Re(Re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Re(t,/(.+)-inline(.+)/,Oe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(t)-1-a>6)switch(ft(t,a+1)){case 109:if(ft(t,a+4)!==45)break;case 102:return Re(t,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Wa+(ft(t,a+3)==108?"$3":"$2-$3"))+t;case 115:return~xs(t,"stretch",0)?Rm(Re(t,"stretch","fill-available"),a,i)+t:t}break;case 5152:case 5920:return Re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,u,p,f,m,y){return Xe+c+":"+u+y+(p?Xe+c+"-span:"+(f?m:+m-+u)+y:"")+t});case 4949:if(ft(t,a+6)===121)return Re(t,":",":"+Oe)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return Re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(ft(t,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+Xe+"$2box$3")+t;case 100:return Re(t,":",":"+Xe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Re(t,"scroll-","scroll-snap-")+t}return t}function js(t,a){for(var i="",l=0;l<t.length;l++)i+=a(t[l],l,t,a)||"";return i}function Zb(t,a,i,l){switch(t.type){case Pb:if(t.children.length)break;case Ab:case Eb:case Dd:return t.return=t.return||t.value;case bm:return"";case km:return t.return=t.value+"{"+js(t.children,l)+"}";case Ws:if(!_n(t.value=t.props.join(",")))return""}return _n(i=js(t.children,l))?t.return=t.value+"{"+i+"}":""}function Kb(t){var a=Sm(t);return function(i,l,c,u){for(var p="",f=0;f<a;f++)p+=t[f](i,l,c,u)||"";return p}}function Qb(t){return function(a){a.root||(a=a.return)&&t(a)}}function Xb(t,a,i,l){if(t.length>-1&&!t.return)switch(t.type){case Dd:t.return=Rm(t.value,t.length,i);return;case km:return js([gr(t,{value:Re(t.value,"@","@"+Oe)})],l);case Ws:if(t.length)return Ob(i=t.props,function(c){switch(Vn(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Io(gr(t,{props:[Re(c,/:(read-\w+)/,":"+Wa+"$1")]})),Io(gr(t,{props:[c]})),gd(t,{props:c1(i,l)});break;case"::placeholder":Io(gr(t,{props:[Re(c,/:(plac\w+)/,":"+Oe+"input-$1")]})),Io(gr(t,{props:[Re(c,/:(plac\w+)/,":"+Wa+"$1")]})),Io(gr(t,{props:[Re(c,/:(plac\w+)/,Xe+"input-$1")]})),Io(gr(t,{props:[c]})),gd(t,{props:c1(i,l)});break}return""})}}var Oo={},Kc,Qc;const Ho=typeof process<"u"&&Oo!==void 0&&(Oo.REACT_APP_SC_ATTR||Oo.SC_ATTR)||"data-styled",Lm="active",Mm="data-styled-version",Vs="6.4.2",Fd=`/*!sc*/
`,Ha=typeof window<"u"&&typeof document<"u";function h1(t){if(typeof process<"u"&&Oo!==void 0){const a=Oo[t];if(a!==void 0&&a!=="")return a!=="false"}}const Jb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Qc=(Kc=h1("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Kc!==void 0?Kc:h1("SC_DISABLE_SPEEDY"))!==null&&Qc!==void 0?Qc:typeof process<"u"&&Oo!==void 0&&!1),$m="sc-keyframes-";function ti(t,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let bs=new Map,Ss=new Map,ks=1;const Oa=t=>{if(bs.has(t))return bs.get(t);for(;Ss.has(ks);)ks++;const a=ks++;return bs.set(t,a),Ss.set(a,t),a},ek=t=>Ss.get(t),tk=(t,a)=>{ks=a+1,bs.set(t,a),Ss.set(a,t)},Wd=Object.freeze([]),qo=Object.freeze({});function nk(t,a,i=qo){return t.theme!==i.theme&&t.theme||a||i.theme}const rk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ok=/(^-|-$)/g;function Tm(t){return t.replace(rk,"-").replace(ok,"")}const ak=/(a)(d)/gi,p1=t=>String.fromCharCode(t+(t>25?39:97));function Hd(t){let a,i="";for(a=Math.abs(t);a>52;a=a/52|0)i=p1(a%52)+i;return(p1(a%52)+i).replace(ak,"$1-$2")}const yd=5381,Gr=(t,a)=>{let i=a.length;for(;i;)t=33*t^a.charCodeAt(--i);return t},Im=t=>Gr(yd,t);function Am(t){return Hd(Im(t)>>>0)}function ik(t){return t.displayName||t.name||"Component"}function xd(t){return typeof t=="string"&&!0}function sk(t){return xd(t)?`styled.${t}`:`Styled(${ik(t)})`}const Em=Symbol.for("react.memo"),lk=Symbol.for("react.forward_ref"),ck={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},dk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uk={[lk]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Em]:Pm};function f1(t){return("type"in(a=t)&&a.type.$$typeof)===Em?Pm:"$$typeof"in t?uk[t.$$typeof]:ck;var a}const hk=Object.defineProperty,pk=Object.getOwnPropertyNames,fk=Object.getOwnPropertySymbols,mk=Object.getOwnPropertyDescriptor,gk=Object.getPrototypeOf,vk=Object.prototype;function zm(t,a,i){if(typeof a!="string"){const l=gk(a);l&&l!==vk&&zm(t,l,i);const c=pk(a).concat(fk(a)),u=f1(t),p=f1(a);for(let f=0;f<c.length;++f){const m=c[f];if(!(m in dk||i&&i[m]||p&&m in p||u&&m in u)){const y=mk(a,m);try{hk(t,m,y)}catch{}}}}return t}function Gs(t){return typeof t=="function"}const yk=Symbol.for("react.forward_ref");function Om(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===yk&&"styledComponentId"in t}function Da(t,a){return t&&a?t+" "+a:t||a||""}function wd(t,a){return t.join("")}function Va(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function _d(t,a,i=!1){if(!i&&!Va(t)&&!Array.isArray(t))return a;if(Array.isArray(a))for(let l=0;l<a.length;l++)t[l]=_d(t[l],a[l]);else if(Va(a))for(const l in a)t[l]=_d(t[l],a[l]);return t}function qd(t,a){Object.defineProperty(t,"toString",{value:a})}const xk=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let a=this._cIndex;if(t>this._cGroup)for(let i=this._cGroup;i<t;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=t;i--)a-=this.groupSizes[i];return this._cGroup=t,this._cIndex=a,a}insertRules(t,a){if(t>=this.groupSizes.length){const c=this.groupSizes,u=c.length;let p=u;for(;t>=p;)if(p<<=1,p<0)throw ti(16,`${t}`);this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(let f=u;f<p;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(t+1),l=0;for(let c=0,u=a.length;c<u;c++)this.tag.insertRule(i,a[c])&&(this.groupSizes[t]++,i++,l++);l>0&&this._cGroup>t&&(this._cIndex+=l)}clearGroup(t){if(t<this.length){const a=this.groupSizes[t],i=this.indexOfGroup(t),l=i+a;this.groupSizes[t]=0;for(let c=i;c<l;c++)this.tag.deleteRule(i);a>0&&this._cGroup>t&&(this._cIndex-=a)}}getGroup(t){let a="";if(t>=this.length||this.groupSizes[t]===0)return a;const i=this.groupSizes[t],l=this.indexOfGroup(t),c=l+i;for(let u=l;u<c;u++)a+=this.tag.getRule(u)+Fd;return a}},wk=`style[${Ho}][${Mm}="${Vs}"]`,_k=new RegExp(`^${Ho}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),m1=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,bd=t=>{if(!t)return document;if(m1(t))return t;if("getRootNode"in t){const a=t.getRootNode();if(m1(a))return a}return document},bk=(t,a,i)=>{const l=i.split(",");let c;for(let u=0,p=l.length;u<p;u++)(c=l[u])&&t.registerName(a,c)},kk=(t,a)=>{var i;const l=((i=a.textContent)!==null&&i!==void 0?i:"").split(Fd),c=[];for(let u=0,p=l.length;u<p;u++){const f=l[u].trim();if(!f)continue;const m=f.match(_k);if(m){const y=0|parseInt(m[1],10),x=m[2];y!==0&&(tk(x,y),bk(t,x,m[3]),t.getTag().insertRules(y,c)),c.length=0}else c.push(f)}},Xc=t=>{const a=bd(t.options.target).querySelectorAll(wk);for(let i=0,l=a.length;i<l;i++){const c=a[i];c&&c.getAttribute(Ho)!==Lm&&(kk(t,c),c.parentNode&&c.parentNode.removeChild(c))}};let Pa=!1;function Ck(){if(Pa!==!1)return Pa;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return Pa=t.nonce||t.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Pa=a.getAttribute("content")||void 0}return Pa=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Dm=(t,a)=>{const i=document.head,l=t||i,c=document.createElement("style"),u=(m=>{const y=Array.from(m.querySelectorAll(`style[${Ho}]`));return y[y.length-1]})(l),p=u!==void 0?u.nextSibling:null;c.setAttribute(Ho,Lm),c.setAttribute(Mm,Vs);const f=a||Ck();return f&&c.setAttribute("nonce",f),l.insertBefore(c,p),c},jk=class{constructor(t,a){this.element=Dm(t,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var l;if(i.sheet)return i.sheet;const c=(l=i.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets;for(let u=0,p=c.length;u<p;u++){const f=c[u];if(f.ownerNode===i)return f}throw ti(17)})(this.element),this.length=0}insertRule(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""}},Sk=class{constructor(t,a){this.element=Dm(t,a),this.nodes=this.element.childNodes,this.length=0}insertRule(t,a){if(t<=this.length&&t>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let g1=Ha;const Nk={isServer:!Ha,useCSSOMInjection:!Jb};class Ys{static registerId(a){return Oa(a)}constructor(a=qo,i={},l){this.options=Object.assign(Object.assign({},Nk),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(l),this.server=!!a.isServer,!this.server&&Ha&&g1&&(g1=!1,Xc(this)),qd(this,()=>(c=>{const u=c.getTag(),{length:p}=u;let f="";for(let m=0;m<p;m++){const y=ek(m);if(y===void 0)continue;const x=c.names.get(y);if(x===void 0||!x.size)continue;const _=u.getGroup(m);if(_.length===0)continue;const w=Ho+".g"+m+'[id="'+y+'"]';let $="";for(const R of x)R.length>0&&($+=R+",");f+=_+w+'{content:"'+$+'"}'+Fd}return f})(this))}rehydrate(){!this.server&&Ha&&Xc(this)}reconstructWithOptions(a,i=!0){const l=new Ys(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return l.keyframeIds=new Set(this.keyframeIds),!this.server&&Ha&&a.target!==this.options.target&&bd(this.options.target)!==bd(a.target)&&Xc(l),l}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:l,nonce:c})=>i?new jk(l,c):new Sk(l,c))(this.options),new xk(a)));var a}hasNameForId(a,i){var l,c;return(c=(l=this.names.get(a))===null||l===void 0?void 0:l.has(i))!==null&&c!==void 0&&c}registerName(a,i){Oa(a),a.startsWith($m)&&this.keyframeIds.add(a);const l=this.names.get(a);l?l.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,l){this.registerName(a,i),this.getTag().insertRules(Oa(a),l)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(Oa(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const Bm=new WeakSet,Rk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Lk(t,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in Rk||t.startsWith("--")?String(a).trim():a+"px"}const Hr=47;function v1(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let a="";for(let i=0;i<t.length;i++){const l=t.charCodeAt(i);a+=l>=65&&l<=90?"-"+String.fromCharCode(l+32):t[i]}return a.startsWith("ms-")?"-"+a:a}const Fm=Symbol.for("sc-keyframes");function Mk(t){return typeof t=="object"&&t!==null&&Fm in t}function Wm(t){return Gs(t)&&!(t.prototype&&t.prototype.isReactComponent)}const Hm=t=>t==null||t===!1||t==="",$k=Symbol.for("react.client.reference");function y1(t){return t.$$typeof===$k}function qm(t,a){for(const i in t){const l=t[i];t.hasOwnProperty(i)&&!Hm(l)&&(Array.isArray(l)&&Bm.has(l)||Gs(l)?a.push(v1(i)+":",l,";"):Va(l)?(a.push(i+" {"),qm(l,a),a.push("}")):a.push(v1(i)+": "+Lk(i,l)+";"))}}function Yr(t,a,i,l,c=[]){if(Hm(t))return c;const u=typeof t;if(u==="string")return c.push(t),c;if(u==="function"){if(y1(t))return c;if(Wm(t)&&a){const p=t(a);return Yr(p,a,i,l,c)}return c.push(t),c}if(Array.isArray(t)){for(let p=0;p<t.length;p++)Yr(t[p],a,i,l,c);return c}return Om(t)?(c.push(`.${t.styledComponentId}`),c):Mk(t)?(i?(t.inject(i,l),c.push(t.getName(l))):c.push(t),c):y1(t)?c:Va(t)?t.toString!==Object.prototype.toString?(c.push(t.toString()),c):(qm(t,c),c):(c.push(t.toString()),c)}const Tk=Im(Vs);class Ik{constructor(a,i,l){this.rules=a,this.componentId=i,this.baseHash=Gr(Tk,i),this.baseStyle=l,Ys.registerId(i)}generateAndInjectStyles(a,i,l){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,l):"";{let u="";for(let p=0;p<this.rules.length;p++){const f=this.rules[p];if(typeof f=="string")u+=f;else if(f)if(Wm(f)){const m=f(a);typeof m=="string"?u+=m:m!=null&&m!==!1&&(u+=wd(Yr(m,a,i,l)))}else u+=wd(Yr(f,a,i,l))}if(u){this.dynamicNameCache||(this.dynamicNameCache=new Map);const p=l.hash?l.hash+u:u;let f=this.dynamicNameCache.get(p);if(!f){if(f=Hd(Gr(Gr(this.baseHash,l.hash),u)>>>0),this.dynamicNameCache.size>=200){const m=this.dynamicNameCache.keys().next().value;m!==void 0&&this.dynamicNameCache.delete(m)}this.dynamicNameCache.set(p,f)}if(!i.hasNameForId(this.componentId,f)){const m=l(u,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,m)}c=Da(c,f)}}return c}}const Ak=/&/g;function Um(t,a){let i=0;for(;--a>=0&&t.charCodeAt(a)===92;)i++;return!(1&~i)}function Jc(t){const a=t.length;let i="",l=0,c=0,u=0,p=!1,f=!1;for(let m=0;m<a;m++){const y=t.charCodeAt(m);if(u!==0||p||y!==Hr||t.charCodeAt(m+1)!==42)if(p)y===42&&t.charCodeAt(m+1)===Hr&&(p=!1,m++);else if(y!==34&&y!==39||Um(t,m)){if(u===0)if(y===123)c++;else if(y===125){if(c--,c<0){f=!0;let x=m+1;for(;x<a;){const _=t.charCodeAt(x);if(_===59||_===10)break;x++}x<a&&t.charCodeAt(x)===59&&x++,c=0,m=x-1,l=x;continue}c===0&&(i+=t.substring(l,m+1),l=m+1)}else y===59&&c===0&&(i+=t.substring(l,m+1),l=m+1)}else u===0?u=y:u===y&&(u=0);else p=!0,m++}return f||c!==0||u!==0?(l<a&&c===0&&u===0&&(i+=t.substring(l)),i):t}function Vm(t,a){const i=a+" ",l=","+i;for(let c=0;c<t.length;c++){const u=t[c];if(u.type==="rule"){u.value=(i+u.value).replaceAll(",",l);const p=u.props,f=[];for(let m=0;m<p.length;m++)f[m]=i+p[m];u.props=f}Array.isArray(u.children)&&u.type!=="@keyframes"&&Vm(u.children,a)}return t}function Ek({options:t=qo,plugins:a=Wd}=qo){let i,l,c;const u=(w,$,R)=>R.startsWith(l)&&R.endsWith(l)&&R.replaceAll(l,"").length>0?`.${i}`:w,p=a.slice();p.push(w=>{w.type===Ws&&w.value.includes("&")&&(c||(c=new RegExp(`\\${l}\\b`,"g")),w.props[0]=w.props[0].replace(Ak,l).replace(c,u))}),t.prefix&&p.push(Xb),p.push(Zb);let f=[];const m=Kb(p.concat(Qb(w=>f.push(w)))),y=(w,$="",R="",j="&")=>{i=j,l=$,c=void 0;const S=(function(N){const C=N.indexOf("//")!==-1,T=N.indexOf("}")!==-1;if(!C&&!T)return N;if(!C)return Jc(N);const A=N.length;let E="",z=0,O=0,U=0,Z=0,X=0,V=!1;for(;O<A;){const te=N.charCodeAt(O);if(te!==34&&te!==39||Um(N,O))if(U===0)if(te===Hr&&O+1<A&&N.charCodeAt(O+1)===42){for(O+=2;O+1<A&&(N.charCodeAt(O)!==42||N.charCodeAt(O+1)!==Hr);)O++;O+=2}else if(te!==40)if(te!==41)if(Z>0)O++;else if(te===42&&O+1<A&&N.charCodeAt(O+1)===Hr)E+=N.substring(z,O),O+=2,z=O,V=!0;else if(te===Hr&&O+1<A&&N.charCodeAt(O+1)===Hr){for(E+=N.substring(z,O);O<A&&N.charCodeAt(O)!==10;)O++;z=O,V=!0}else te===123?X++:te===125&&X--,O++;else Z>0&&Z--,O++;else Z++,O++;else O++;else U===0?U=te:U===te&&(U=0),O++}return V?(z<A&&(E+=N.substring(z)),X===0?E:Jc(E)):X===0?N:Jc(N)})(w);let L=Gb(R||$?R+" "+$+" { "+S+" }":S);return t.namespace&&(L=Vm(L,t.namespace)),f=[],js(L,m),f},x=t;let _=yd;for(let w=0;w<a.length;w++)a[w].name||ti(15),_=Gr(_,a[w].name);return x!=null&&x.namespace&&(_=Gr(_,x.namespace)),x!=null&&x.prefix&&(_=Gr(_,"p")),y.hash=_!==yd?_.toString():"",y}const Pk=new Ys,kd=Ek(),Gm=xr.createContext({shouldForwardProp:void 0,styleSheet:Pk,stylis:kd,stylisPlugins:void 0});Gm.Consumer;function zk(){return xr.useContext(Gm)}const Ym=xr.createContext(void 0);Ym.Consumer;const x1=Object.prototype.hasOwnProperty,ed={};function Ok(t,a){const i=typeof t!="string"?"sc":Tm(t);ed[i]=(ed[i]||0)+1;const l=i+"-"+Am(Vs+i+ed[i]);return a?a+"-"+l:l}function Dk(t,a,i){const l=Om(t),c=t,u=!xd(t),{attrs:p=Wd,componentId:f=Ok(a.displayName,a.parentComponentId),displayName:m=sk(t)}=a,y=a.displayName&&a.componentId?Tm(a.displayName)+"-"+a.componentId:a.componentId||f,x=l&&c.attrs?c.attrs.concat(p).filter(Boolean):p;let{shouldForwardProp:_}=a;if(l&&c.shouldForwardProp){const j=c.shouldForwardProp;if(a.shouldForwardProp){const S=a.shouldForwardProp;_=(L,N)=>j(L,N)&&S(L,N)}else _=j}const w=new Ik(i,y,l?c.componentStyle:void 0);function $(j,S){return(function(L,N,C){const{attrs:T,componentStyle:A,defaultProps:E,foldedComponentIds:z,styledComponentId:O,target:U}=L,Z=xr.useContext(Ym),X=zk(),V=L.shouldForwardProp||X.shouldForwardProp,te=nk(N,Z,E)||qo;let ie,ce;{const P=xr.useRef(null),D=P.current;if(D!==null&&D[1]===te&&D[2]===X.styleSheet&&D[3]===X.stylis&&D[7]===A&&(function(k,I,Q){const ne=k,G=I;let ue=0;for(const K in G)if(x1.call(G,K)&&(ue++,ne[K]!==G[K]))return!1;return ue===Q})(D[0],N,D[4]))ie=D[5],ce=D[6];else{ie=(function(I,Q,ne){const G=Object.assign(Object.assign({},Q),{className:void 0,theme:ne}),ue=I.length>1;for(let K=0;K<I.length;K++){const re=I[K],fe=Gs(re)?re(ue?Object.assign({},G):G):re;for(const we in fe)we==="className"?G.className=Da(G.className,fe[we]):we==="style"?G.style=Object.assign(Object.assign({},G.style),fe[we]):we in Q&&Q[we]===void 0||(G[we]=fe[we])}return"className"in Q&&typeof Q.className=="string"&&(G.className=Da(G.className,Q.className)),G})(T,N,te),ce=(function(I,Q,ne,G){return I.generateAndInjectStyles(Q,ne,G)})(A,ie,X.styleSheet,X.stylis);let k=0;for(const I in N)x1.call(N,I)&&k++;P.current=[N,te,X.styleSheet,X.stylis,k,ie,ce,A]}}const se=ie.as||U,J=(function(P,D,k,I){const Q={};for(const ne in P)P[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&P.theme===k||(ne==="forwardedAs"?Q.as=P.forwardedAs:I&&!I(ne,D)||(Q[ne]=P[ne]));return Q})(ie,se,te,V);let W=Da(z,O);return ce&&(W+=" "+ce),ie.className&&(W+=" "+ie.className),J[xd(se)&&se.includes("-")?"class":"className"]=W,C&&(J.ref=C),g.createElement(se,J)})(R,j,S)}$.displayName=m;let R=xr.forwardRef($);return R.attrs=x,R.componentStyle=w,R.displayName=m,R.shouldForwardProp=_,R.foldedComponentIds=l?Da(c.foldedComponentIds,c.styledComponentId):"",R.styledComponentId=y,R.target=l?c.target:t,Object.defineProperty(R,"defaultProps",{get(){return this._foldedDefaultProps},set(j){this._foldedDefaultProps=l?(function(S,...L){for(const N of L)_d(S,N,!0);return S})({},c.defaultProps,j):j}}),qd(R,()=>`.${R.styledComponentId}`),u&&zm(R,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}var Bk=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function w1(t,a){const i=[t[0]];for(let l=0,c=a.length;l<c;l+=1)i.push(a[l],t[l+1]);return i}const _1=t=>(Bm.add(t),t);function zt(t,...a){if(Gs(t)||Va(t))return _1(Yr(w1(Wd,[t,...a])));const i=t;return a.length===0&&i.length===1&&typeof i[0]=="string"?Yr(i):_1(Yr(w1(i,a)))}function Cd(t,a,i=qo){if(!a)throw ti(1,a);const l=(c,...u)=>t(a,i,zt(c,...u));return l.attrs=c=>Cd(t,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)})),l.withConfig=c=>Cd(t,a,Object.assign(Object.assign({},i),c)),l}const Zm=t=>Cd(Dk,t),b=Zm;Bk.forEach(t=>{b[t]=Zm(t)});var Km;class Fk{constructor(a,i){this[Km]=!0,this.inject=(l,c=kd)=>{const u=this.getName(c);if(!l.hasNameForId(this.id,u)){const p=c(this.rules,u,"@keyframes");l.insertRules(this.id,u,p)}},this.name=a,this.id=$m+a,this.rules=i,Oa(this.id),qd(this,()=>{throw ti(12,String(this.name))})}getName(a=kd){return a.hash?this.name+Hd(+a.hash>>>0):this.name}}function De(t,...a){const i=wd(zt(t,...a)),l=Am(i);return new Fk(l,i)}Km=Fm;const Wk=768,Hk=`(max-width: ${Wk-1}px)`;function Qm(t){const[a,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(t).matches);return g.useEffect(()=>{if(typeof window>"u")return;const l=window.matchMedia(t),c=u=>i(u.matches);return i(l.matches),l.addEventListener("change",c),()=>l.removeEventListener("change",c)},[t]),a}function qk(){return Qm(Hk)}const Uk="48px",Vk="240px",b1="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",Gk=b.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${t=>t.$isExpanded?Vk:Uk};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${t=>t.$isExpanded?zt`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:zt`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${t=>t.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,Yk=b.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${t=>t.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${t=>t.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,Zk=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,Kk=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,Qk=b.button`
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
`,Xk=b.div`
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
`,Jk=b.span`
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
`,k1=b.div`
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
`,td=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,eC="var(--gradient-ai)",Xm=b.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${t=>t.$isActive&&!t.$isAi&&zt`
      background: var(--color-bg-primary, white);
      box-shadow: ${b1}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${t=>t.$isActive&&t.$isAi&&zt`
      background: ${eC};
      box-shadow: ${b1}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,Jm=b.button`
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
`,e0=b.span`
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
`,t0=b.div`
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
`,tC=b.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,nd=b.hr`
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
`;const nC=b.button`
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
`,rC=b.div`
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
`,oC=b.span`
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
`;function aC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function iC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function sC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function lC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function cC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function dC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function uC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function hC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function pC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function fC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function Jr({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function mC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function gC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function vC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function C1({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function rd({item:t,isExpanded:a,showNewBadge:i,isAi:l}){const c=t.isActive??!1;return r.jsx(Xm,{$isActive:c,$isAi:l,children:r.jsxs(Jm,{$isActive:c,$isAiActive:c&&!!l,onClick:t.onClick,"aria-current":c?"page":void 0,title:a?void 0:t.label,children:[r.jsxs(t0,{children:[t.hasUnread&&r.jsx(tC,{}),c&&t.activeIcon?t.activeIcon:t.icon]}),a&&r.jsx(e0,{children:t.label}),a&&i&&r.jsx(Ja,{variant:"primary",children:"New"})]})})}function yC({items:t,toolItems:a=[],bottomItems:i=[],workspace:l,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:y}){const[x,_]=g.useState(!1);return r.jsx(Gk,{$isExpanded:x,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),"aria-label":"Primary navigation",children:r.jsxs(Yk,{$isExpanded:x,children:[r.jsxs(Zk,{children:[r.jsxs(Qk,{$isExpanded:x,onClick:u,"aria-label":`Workspace: ${l.name}`,title:x?void 0:l.name,children:[r.jsx(Xk,{children:l.logoUrl?r.jsx("img",{src:l.logoUrl,alt:l.name}):l.initial??l.name.charAt(0).toUpperCase()}),x&&r.jsxs(r.Fragment,{children:[r.jsx(Jk,{children:l.name}),r.jsx(k1,{children:r.jsx(C1,{})})]})]}),r.jsx(td,{children:t.map(w=>r.jsx(rd,{item:w,isExpanded:x,isAi:w.id===y},w.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(nd,{}),r.jsx(td,{children:a.map(w=>r.jsx(rd,{item:w,isExpanded:x,showNewBadge:w.id===m,isAi:w.id===y},w.id))})]})]}),r.jsxs(Kk,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(nd,{}),r.jsx(td,{children:i.map(w=>r.jsx(rd,{item:w,isExpanded:x,isAi:w.id===y},w.id))})]}),r.jsx(nd,{}),r.jsx(Xm,{$isActive:!1,children:r.jsxs(Jm,{$isActive:!1,onClick:f,"aria-label":"Settings",title:x?void 0:"Settings",children:[r.jsx(t0,{children:r.jsx(vC,{})}),x&&r.jsx(e0,{children:"Settings"})]})}),r.jsxs(nC,{$isExpanded:x,onClick:p,"aria-label":`User: ${c.name}`,title:x?void 0:c.name,children:[r.jsx(rC,{$color:c.avatarColor,children:c.initials}),x&&r.jsxs(r.Fragment,{children:[r.jsx(oC,{children:c.name}),r.jsx(k1,{children:r.jsx(C1,{})})]})]})]})]})})}const xC=270,wC=b.nav`
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
`,_C=b.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,bC=b.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,kC=b.h2`
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
`,CC=b.div`
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
`,jC=b.button`
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
`,SC=b.div`
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
`,NC=b.button`
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
`;const RC=b.span`
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
`,LC=b.div`
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
`,MC=De`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,$C=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${MC} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,j1=b.button`
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
`,TC=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${t=>t.$outlined&&zt`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,IC=b.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,AC=b.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,EC=b.div`
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
`,PC=b.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,zC=b.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,OC=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,n0=b.div`
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
`;function r0(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function DC(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Ud={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function BC({item:t}){return r.jsx(tn,{label:r.jsx("span",{style:{color:t.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:t.isActive?500:void 0,letterSpacing:"-0.084px"},children:t.label}),leadingSlot:r.jsx(n0,{children:t.icon??r.jsx(r0,{})}),selected:t.isActive,onClick:t.onClick,divider:!1,size:"md","aria-current":t.isActive?"page":void 0,style:Ud})}function FC({group:t}){const[a,i]=g.useState(t.defaultExpanded??!0),[l,c]=g.useState(!1),u=t.maxVisible,f=u!=null&&!l&&t.children.length>u?t.children.slice(0,u):t.children,m=t.children.length-f.length;return r.jsxs(TC,{$outlined:t.outlined,children:[r.jsxs(NC,{onClick:()=>i(y=>!y),"aria-expanded":a,children:[r.jsx(LC,{children:a?r.jsx(kr,{size:16}):r.jsx(Gt,{size:16})}),r.jsx(RC,{children:t.label}),t.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:t.trailingBadge})]}),a&&r.jsxs($C,{children:[f.map(y=>r.jsx(tn,{label:r.jsx("span",{style:{color:y.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:y.isActive?500:void 0,letterSpacing:"-0.084px"},children:y.label}),leadingSlot:r.jsx(n0,{children:y.icon??null}),trailingSlot:y.trailingSlot,selected:y.isActive,onClick:y.onClick,divider:!1,size:"md","aria-current":y.isActive?"page":void 0,style:Ud},y.id)),m>0&&r.jsxs(j1,{type:"button",onClick:()=>c(!0),children:["Show ",m," more"]}),u!=null&&l&&t.children.length>u&&r.jsx(j1,{type:"button",onClick:()=>c(!1),children:"Show less"})]})]})}function WC({heading:t,isVisible:a,menuEntries:i=[],menuHeader:l,pageEntries:c=[],showSearch:u=!0,searchValue:p="",onSearchChange:f,onFilterClick:m,headerSlot:y,bodyContent:x,width:_=xC,onWidthChange:w,minWidth:$=220,maxWidth:R=520}){const j=x!==void 0,S=g.useRef(null),[L,N]=g.useState(!1);return g.useEffect(()=>{if(!L||!w)return;const C=S.current;if(!C)return;const T=C.getBoundingClientRect().left,A=O=>{const U=Math.min(R,Math.max($,O.clientX-T));w(U)},E=()=>N(!1);window.addEventListener("mousemove",A),window.addEventListener("mouseup",E);const z=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",E),document.body.style.userSelect=z,document.body.style.cursor=""}},[L,w,$,R]),r.jsxs(wC,{ref:S,$isVisible:a,$width:_,$isResizing:L,"aria-label":"Secondary navigation",children:[r.jsxs(_C,{children:[(t||y)&&r.jsxs(bC,{children:[r.jsx(kC,{children:t}),y]}),u&&!j&&r.jsxs(CC,{children:[r.jsx(sm,{size:"sm",placeholder:"Search...",value:p,onChange:C=>f==null?void 0:f(C.target.value)}),r.jsx(jC,{onClick:m,"aria-label":"Filter",children:r.jsx(DC,{})})]})]}),j?x:r.jsxs(SC,{children:[l,i.map(C=>C.type==="single"?r.jsx(BC,{item:C.item},C.item.id):C.type==="group"?r.jsx(FC,{group:C.group},C.group.id):C.type==="divider"?r.jsx(zC,{},C.id):r.jsx(IC,{children:C.label.label},C.label.id))]}),c.length>0&&r.jsxs(AC,{children:[r.jsx(PC,{}),c.map(C=>r.jsx(tn,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:C.label}),leadingSlot:r.jsx(OC,{children:C.icon??r.jsx(r0,{})}),onClick:C.onClick,selected:C.isActive??!1,divider:!1,size:"md","aria-current":C.isActive?"page":void 0,style:Ud},C.id))]}),w&&a&&r.jsx(EC,{$isResizing:L,onMouseDown:C=>{C.preventDefault(),N(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const HC=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:t})=>t?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,qC=b.div`
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
`,o0=b.div`
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
`,UC=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,VC=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function GC(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function S1(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function N1(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function YC(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function ZC({heading:t,actions:a=[],showActivityButton:i=!0,showPonderButton:l=!0,noBorder:c=!1,onActivityClick:u,onPonderClick:p,onDotsClick:f}){const m=a.filter(_=>_.variant==="secondary"),y=a.filter(_=>_.variant==="primary"),x=Qm("(prefers-color-scheme: dark)");return r.jsxs(HC,{$noBorder:c,children:[r.jsx(qC,{children:typeof t=="string"?r.jsx(o0,{children:t}):t}),r.jsxs(UC,{children:[r.jsxs(VC,{children:[r.jsx(Te,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:r.jsx(GC,{})}),m.map(_=>r.jsx(Te,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(N1,{}),trailingArtwork:r.jsx(S1,{}),onClick:_.onClick,children:_.label},_.id)),y.map(_=>r.jsx(Te,{variant:"primary",size:"sm",leadingArtwork:r.jsx(N1,{}),trailingArtwork:r.jsx(S1,{}),onClick:_.onClick,children:_.label},_.id))]}),i&&r.jsx(Te,{variant:"ghost",size:"sm",iconOnly:!0,onClick:u,"aria-label":"Activity",title:"Activity",children:r.jsx(YC,{})}),l&&r.jsx(wf,{dark:x,onClick:p,"aria-label":"Ponder AI"})]})]})}const KC=b.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,QC=b.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,XC=b.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,JC=b.main`
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
`,R1="tb:secondary-nav-width",L1=270,M1=220,$1=520;function ej({items:t,toolItems:a,bottomItems:i,workspace:l,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:y,secNavHeading:x,menuEntries:_,menuHeader:w,pageEntries:$,showSearch:R,searchValue:j,onSearchChange:S,onFilterClick:L,headerSlot:N,bodyContent:C,heading:T,actions:A,showActivityButton:E,showPonderButton:z,noBorder:O,onActivityClick:U,onPonderClick:Z,onDotsClick:X,children:V,showSecondaryNav:te=!0,showTopNav:ie=!0}){const[ce,se]=g.useState(()=>{if(typeof window>"u")return L1;const J=window.localStorage.getItem(R1),W=J?parseInt(J,10):NaN;return Number.isFinite(W)?Math.min($1,Math.max(M1,W)):L1});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(R1,String(ce))},[ce]),r.jsxs(KC,{children:[r.jsx(yC,{items:t,toolItems:a,bottomItems:i,workspace:l,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:y}),r.jsxs(QC,{children:[te&&r.jsx(WC,{heading:x,menuEntries:_,menuHeader:w,pageEntries:$,isVisible:!0,showSearch:R,searchValue:j,onSearchChange:S,onFilterClick:L,headerSlot:N,bodyContent:C,width:ce,onWidthChange:se,minWidth:M1,maxWidth:$1}),r.jsxs(XC,{children:[ie&&r.jsx(ZC,{heading:T,actions:A,showActivityButton:E,showPonderButton:z,noBorder:O,onActivityClick:U,onPonderClick:Z,onDotsClick:X}),r.jsx(JC,{children:V})]})]})]})}function tj({deadZonePx:t=8,topThresholdPx:a=20,target:i}={}){const[l,c]=g.useState(null),u=g.useRef(0);return g.useEffect(()=>{var y;const p=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;u.current=p();const f=()=>{const x=p(),_=x-u.current;Math.abs(_)<t||(_>0&&x>a?c("down"):_<0&&c("up"),u.current=x)},m=i??(typeof window<"u"?window:{});return(y=m.addEventListener)==null||y.call(m,"scroll",f,{passive:!0}),()=>{var x;(x=m.removeEventListener)==null||x.call(m,"scroll",f)}},[t,a,i]),l}const nj=b.button`
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
`,rj=b.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,oj=b.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function od({label:t,isOpen:a,onClick:i,ariaLabel:l}){return r.jsxs(nj,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":l,children:[r.jsx(rj,{children:t}),r.jsx(oj,{children:r.jsx(kr,{size:14})})]})}const aj=b.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${t=>t.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,ij=b.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,T1=b.button`
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
`,sj=b.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,I1=b.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,lj=b.button`
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
`;function cj({size:t=18}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const dj=g.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:l,openOverlay:c,user:u,hidden:p,onHamburgerClick:f,onPrimaryClick:m,onSecondaryClick:y,onTertiaryClick:x,onSearchClick:_,onUserClick:w},$){return r.jsx(aj,{ref:$,$hidden:p,children:r.jsxs(ij,{children:[r.jsx(T1,{onClick:f,"aria-label":"Open navigation",children:r.jsx(cj,{size:18})}),r.jsxs(sj,{children:[r.jsx(od,{label:a,isOpen:c==="primary",onClick:m,ariaLabel:"Choose a module"}),i&&r.jsxs(r.Fragment,{children:[r.jsx(I1,{"aria-hidden":"true",children:"›"}),r.jsx(od,{label:i,isOpen:c==="secondary",onClick:y,ariaLabel:"Choose a section"})]}),l&&r.jsxs(r.Fragment,{children:[r.jsx(I1,{"aria-hidden":"true",children:"›"}),r.jsx(od,{label:l,isOpen:c==="persona",onClick:x??(()=>{}),ariaLabel:"Choose a persona"})]})]}),r.jsx(T1,{onClick:_,"aria-label":"Search",children:r.jsx(Pd,{size:18})}),r.jsx(lj,{onClick:w,$color:u.avatarColor,"aria-label":`User: ${u.name}`,children:u.initials})]})})}),uj=De`
  from { opacity: 0; }
  to { opacity: 1; }
`,hj=b.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${uj} 160ms ease-out;
`;function pj({onDismiss:t}){return g.useEffect(()=>{const a=l=>{l.key==="Escape"&&t()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[t]),r.jsx(hj,{onClick:t,"aria-hidden":"true"})}const fj=De`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,mj=b.div`
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
  animation: ${fj} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,gj=b.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,vj=b.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,yj=b.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,xj=b.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function Vd({title:t,children:a,ariaLabel:i}){return r.jsxs(mj,{role:"dialog","aria-modal":"true","aria-label":i??t,children:[r.jsx(gj,{children:r.jsx(vj,{"aria-hidden":"true"})}),t&&r.jsx(yj,{children:t}),r.jsx(xj,{children:a})]})}const Zs=b.div`
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
`,Zr=b.button`
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
`,Do=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,Kr=b.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Qr=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function wj({activeId:t,groups:a,onSelect:i}){return r.jsx(Vd,{title:"Modules",ariaLabel:"Choose a module",children:r.jsx(Zs,{children:a.map((l,c)=>r.jsxs("div",{children:[c>0&&r.jsx(Ga,{children:l.label}),c===0&&r.jsx(Ga,{children:l.label}),l.items.map(u=>{const p=u.id===t;return r.jsxs(Zr,{$active:p,onClick:()=>i(u.id),"aria-pressed":p,children:[r.jsx(Do,{children:u.icon}),r.jsx(Kr,{children:u.label}),p&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},u.id)})]},l.id))})})}function _j({moduleLabel:t,entries:a,onSelect:i}){return r.jsx(Vd,{title:t,ariaLabel:`${t} sections`,children:r.jsx(Zs,{children:a.map(l=>{if(l.type==="single"){const u=l.item;return r.jsxs(Zr,{$active:u.isActive,onClick:()=>{var p;(p=u.onClick)==null||p.call(u),i()},"aria-pressed":!!u.isActive,children:[r.jsx(Do,{children:u.icon}),r.jsx(Kr,{children:u.label}),u.isActive&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},u.id)}if(l.type!=="group")return null;const c=l.group;return r.jsxs("div",{children:[r.jsx(Ga,{children:c.label}),c.children.map(u=>r.jsxs(Zr,{$active:u.isActive,$indent:!0,onClick:()=>{var p;(p=u.onClick)==null||p.call(u),i()},"aria-pressed":!!u.isActive,children:[r.jsx(Do,{children:u.icon}),r.jsx(Kr,{children:u.label}),u.isActive&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},u.id))]},c.id)})})})}const bj=b.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,kj=b.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Cj=b.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function jj({personas:t,activeId:a,onSelect:i}){return r.jsx(Vd,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(Zs,{children:t.map(l=>{const c=l.id===a;return r.jsxs(Zr,{$active:c,onClick:()=>i(l.id),"aria-pressed":c,children:[r.jsx(Kr,{as:"span",children:r.jsxs(bj,{children:[r.jsx(kj,{children:l.name}),r.jsx(Cj,{children:l.role})]})}),c&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},l.id)})})})}const Sj=De`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,Nj=b.aside`
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
  animation: ${Sj} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,Rj=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,Lj=b.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,Mj=b.button`
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
`,$j=b.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,Tj=60;function Ij({title:t,onDismiss:a,children:i}){const l=g.useRef(null),c=g.useRef(null);return g.useEffect(()=>{const u=l.current;if(!u)return;const p=m=>{const y=m.touches[0];c.current={x:y.clientX,y:y.clientY}},f=m=>{if(!c.current)return;const y=m.changedTouches[0],x=y.clientX-c.current.x,_=y.clientY-c.current.y;c.current=null,x<-60&&Math.abs(_)<Tj&&a()};return u.addEventListener("touchstart",p,{passive:!0}),u.addEventListener("touchend",f),()=>{u.removeEventListener("touchstart",p),u.removeEventListener("touchend",f)}},[a]),r.jsxs(Nj,{ref:l,role:"dialog","aria-modal":"true","aria-label":t??"Navigation",children:[r.jsxs(Rj,{children:[r.jsx(Lj,{children:t??"Navigation"}),r.jsx(Mj,{onClick:a,"aria-label":"Close navigation",children:r.jsx(Qa,{size:18})})]}),r.jsx($j,{children:i})]})}function Aj({activeId:t,groups:a,currentMenuEntries:i,onSelectModule:l,onDismiss:c}){return r.jsx(Ij,{title:"Navigation",onDismiss:c,children:r.jsx(Zs,{children:a.map(u=>r.jsxs("div",{children:[r.jsx(Ga,{children:u.label}),u.items.map(p=>{const f=p.id===t;return r.jsxs("div",{children:[r.jsxs(Zr,{$active:f,onClick:()=>{l(p.id),c()},"aria-pressed":f,children:[r.jsx(Do,{children:p.icon}),r.jsx(Kr,{children:p.label}),f&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]}),f&&i.length>0&&r.jsx("div",{children:i.map(m=>{if(m.type==="single"){const x=m.item;return r.jsxs(Zr,{$active:x.isActive,$indent:!0,onClick:()=>{var _;(_=x.onClick)==null||_.call(x),c()},"aria-pressed":!!x.isActive,children:[r.jsx(Do,{children:x.icon}),r.jsx(Kr,{children:x.label}),x.isActive&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},x.id)}if(m.type!=="group")return null;const y=m.group;return r.jsxs("div",{children:[r.jsx(Ga,{children:y.label}),y.children.map(x=>r.jsxs(Zr,{$active:x.isActive,$indent:!0,onClick:()=>{var _;(_=x.onClick)==null||_.call(x),c()},"aria-pressed":!!x.isActive,children:[r.jsx(Do,{children:x.icon}),r.jsx(Kr,{children:x.label}),x.isActive&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},x.id))]},y.id)})})]},p.id)})]},u.id))})})}const A1=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],Ej=b.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,Pj=b.main`
  flex: 1 1 auto;
  min-width: 0;
`;function zj(t){const{activeId:a,selectedPersonaId:i,moduleGroups:l,primaryLabel:c,secondaryLabel:u,menuEntries:p,user:f,onUserClick:m,onMobileNavigate:y,onSelectPersona:x,children:_}=t,[w,$]=g.useState(null),R=tj({deadZonePx:8,topThresholdPx:20}),j=w===null&&R==="down",S=g.useMemo(()=>{if(!i)return null;const T=A1.find(A=>A.id===i);return(T==null?void 0:T.name)??null},[i]),L=()=>$(null),N=T=>$(T),C=w!==null;return r.jsxs(Ej,{children:[r.jsx(dj,{primaryLabel:c,secondaryLabel:u,tertiaryLabel:S,openOverlay:w,user:f,hidden:j,onHamburgerClick:()=>N("drawer"),onPrimaryClick:()=>N("primary"),onSecondaryClick:()=>N("secondary"),onTertiaryClick:S?()=>N("persona"):void 0,onSearchClick:()=>{N("drawer")},onUserClick:()=>m==null?void 0:m()}),r.jsx(Pj,{children:_}),C&&r.jsx(pj,{onDismiss:L}),w==="primary"&&r.jsx(wj,{activeId:a,groups:l,onSelect:T=>{y(T),L()}}),w==="secondary"&&r.jsx(_j,{moduleLabel:c,entries:p,onSelect:L}),w==="persona"&&r.jsx(jj,{personas:A1,activeId:i,onSelect:T=>{x(T),L()}}),w==="drawer"&&r.jsx(Aj,{activeId:a,groups:l,currentMenuEntries:p,onSelectModule:T=>y(T),onDismiss:L})]})}function Oj(t){if(qk()&&t.mobileNav){const i=t.mobileNav;return r.jsx(zj,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:t.menuEntries??[],user:t.user,onUserClick:t.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:t.children})}return r.jsx(ej,{...t})}const Dj="/Ultron/assets/policy-icon-active-CqCS8_ex.svg",Bj="/Ultron/assets/automation-icon-active-DlguOjgR.svg",Yn=(t,a,i)=>Math.max(a,Math.min(i,t)),Gd=t=>(t=Yn(t,0,1),t*t*(3-2*t)),Go=t=>t>=48?1:t>=32?1.2:t>=24?1.5:t>=20?1.85:2.3;function Mn(t){const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)}function jd(t){const a=(t||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(l=>l+l).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function E1(t,a,i){let l=i.trim();const c=l.match(/var\(\s*(--[^,)]+)/);if(c&&(l=getComputedStyle(a).getPropertyValue(c[1]).trim()||l),l.startsWith("#"))return jd(l);t.fillStyle="#000",t.fillStyle=l;const u=t.fillStyle;if(u.startsWith("#"))return jd(u);const p=u.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:"26,30,38"}function Fj(){const[t,a]=g.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return g.useEffect(()=>{var c;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const l=u=>a(u.matches);return(c=i.addEventListener)==null||c.call(i,"change",l),()=>{var u;return(u=i.removeEventListener)==null?void 0:u.call(i,"change",l)}},[]),t}function Wj(t){const[a,i,l]=t.split(",").map(Number);return(.299*a+.587*i+.114*l)/255}function Hj(t,a){return t==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:t==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:t==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const Wr=["234,54,38","246,112,44","252,172,54","255,212,76"],qj="176,58,32",Uj="198,158,52";function Gn(t,a,i){const l=t.split(",").map(Number),c=a.split(",").map(Number);return l.map((u,p)=>Math.round(u+(c[p]-u)*i)).join(",")}function to(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,y=Math.min(c,u)*.39*.2*(.9+.14*Math.sin(a*1.5)),x=t.size<24,_=Yn(t.alert??0,0,1),w=(N,C)=>N+(C-N)*_,$=.85+.15*Math.sin(a*2.2);if(!x&&t.coreHalo){if(l.save(),i.glow&&_<1){l.globalAlpha=1-_;const N=l.createRadialGradient(p,f,0,p,f,y*3);N.addColorStop(0,"rgba("+i.core+",0.55)"),N.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=N,l.beginPath(),l.arc(p,f,y*3,0,6.2832),l.fill()}else if(!i.glow){const N=y*w(3.2,3),C=l.createRadialGradient(p,f,0,p,f,N);C.addColorStop(0,"rgba("+Gn(i.core,Wr[1],_)+","+w(.34,.85*$)+")"),C.addColorStop(.5,"rgba("+Gn(i.core,Wr[2],_)+","+w(.13,.42*$)+")"),C.addColorStop(1,"rgba("+Gn(i.core,Wr[3],_)+",0)"),l.fillStyle=C,l.beginPath(),l.arc(p,f,N,0,6.2832),l.fill()}l.restore()}const R=i.glow?1:.95,j=Math.max(.8,y*w(1,1.5)),S=y*.1*_;l.save(),l.filter="blur("+Math.max(.4,y*w(.22,.3)).toFixed(2)+"px)";const L=l.createRadialGradient(p-S,f-S,0,p,f,j);L.addColorStop(0,"rgba("+Gn(i.core,Wr[0],_)+","+w(R,1)+")"),L.addColorStop(.5,"rgba("+Gn(i.core,Wr[1],_)+","+w(R,1)+")"),L.addColorStop(.82,"rgba("+Gn(i.core,Wr[2],_)+","+w(R,.97)+")"),L.addColorStop(1,"rgba("+Gn(i.core,Wr[3],_)+","+w(R,.72)+")"),l.fillStyle=L,l.beginPath(),l.arc(p,f,j,0,6.2832),l.fill(),l.restore()}function a0(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,y=t.state!=="idle",x=[[1.35,.3],[1.05,2.4]],_=a*(y?.5:.16),w=.42,$=Math.cos(w),R=Math.sin(w),j=Math.cos(_),S=Math.sin(_),L=m*.96,N=(U,Z,X)=>{const V=U*j+X*S,te=-U*S+X*j,ie=Z,ce=ie*$-te*R,J=(ie*R+te*$+1)/2,W=.82+.18*J;return{x:p+V*L*W,y:f+ce*L*W,d:J}},C=(U,Z,X)=>{const V=Math.cos(U),te=Math.sin(U)*Math.cos(Z),ie=Math.sin(U)*Math.sin(Z);return[V*Math.cos(X)+ie*Math.sin(X),te,-V*Math.sin(X)+ie*Math.cos(X)]};l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round",l.lineJoin="round";const T=t.size>=24?64:40,A=y?.9:.3,E=T,z=5.6,O=[];for(let U=0;U<x.length;U++){const Z=x[U][0],X=x[U][1],V=ce=>{const se=C(ce,Z,X);return N(se[0],se[1],se[2])},te=U%2?1:-1,ie=U*2+te*a*A;O.push({ptOf:V,head:ie,dir:te,hp:V(ie)})}O.sort((U,Z)=>U.hp.d-Z.hp.d);for(const U of O){const Z=Math.max(1.2,m*.05)*(.75+.35*U.hp.d),X=.66*(.45+.55*U.hp.d);l.save(),l.globalCompositeOperation="source-over",l.lineCap="butt",l.lineWidth=Z;let V=U.ptOf(U.head);for(let ce=1;ce<=E;ce++){const se=ce/E,J=1-se,W=X*J*J,P=U.ptOf(U.head-U.dir*se*z);W>.004&&(l.strokeStyle="rgba("+i.dot+","+W+")",l.beginPath(),l.moveTo(V.x,V.y),l.lineTo(P.x,P.y),l.stroke()),V=P}l.restore();const te=Math.max(.9,m*.062*Go(t.size)*(.65+.5*U.hp.d)),ie=.45+.55*U.hp.d;if(i.glow){const ce=l.createRadialGradient(U.hp.x,U.hp.y,0,U.hp.x,U.hp.y,te*4.5);ce.addColorStop(0,"rgba("+i.accent+","+.3*ie+")"),ce.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=ce,l.beginPath(),l.arc(U.hp.x,U.hp.y,te*4.5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,ie+.1)+")",l.beginPath(),l.arc(U.hp.x,U.hp.y,te,0,6.2832),l.fill()}to(t,a,i),l.restore()}function Vj(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,y=t.state!=="idle",x=[m*.92],_=x.length,w=1,$=y?.9:.3,R=t.size>=24?56:36;l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over";for(let j=0;j<_;j++){const S=x[j],L=j%2?1:-1,N=6.2832/w,C=Math.min(5.6,N*.92);for(let T=0;T<w;T++){const A=j*2+L*a*$+T*N,E=p+Math.cos(A)*S,z=f+Math.sin(A)*S;l.save(),l.globalCompositeOperation="source-over",l.lineCap="butt",l.lineWidth=Math.max(1.2,m*.05);let O=E,U=z;for(let X=1;X<=R;X++){const V=X/R,te=.62*(1-V)*(1-V),ie=A-L*V*C,ce=p+Math.cos(ie)*S,se=f+Math.sin(ie)*S;te>.004&&(l.strokeStyle="rgba("+i.dot+","+te+")",l.beginPath(),l.moveTo(O,U),l.lineTo(ce,se),l.stroke()),O=ce,U=se}l.restore();const Z=Math.max(.9,m*.062*Go(t.size));if(i.glow){const X=l.createRadialGradient(E,z,0,E,z,Z*4.5);X.addColorStop(0,"rgba("+i.accent+",0.3)"),X.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=X,l.beginPath(),l.arc(E,z,Z*4.5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+",1)",l.beginPath(),l.arc(E,z,Z,0,6.2832),l.fill()}}to(t,a,i),l.restore()}function P1(t,a,i){const{ctx:l,w:c,h:u,dpr:p}=t,f=c/2,m=u/2,y=Math.min(c,u)*.39,x=t.state!=="idle",_=Yn(t.alert??0,0,1),w=y*.82,$=(J,W)=>Gn(i.dot,Gn(qj,Uj,Yn(Math.hypot(J-f,W-m)/w,0,1)),_),R=t.size>=120,j=R?22:t.size>=32?10:t.size>=20?7:5,S=x?a*.55:a*.22,L=Math.cos(S),N=Math.sin(S),C=.42,T=Math.cos(C),A=Math.sin(C);if(l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",R&&i.glow){const J=l.createRadialGradient(f,m,0,f,m,y*1.02);J.addColorStop(0,"rgba("+i.accent+",0.10)"),J.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=J,l.beginPath(),l.arc(f,m,y*1.02,0,6.2832),l.fill()}const E=[];for(let J=0;J<j;J++){const W=1-(J+.5)/j*2,P=Math.sqrt(Math.max(0,1-W*W)),D=J*2.39996,k=Math.cos(D)*P,I=W,Q=Math.sin(D)*P,ne=k*L+Q*N,G=-k*N+Q*L,ue=I*T-G*A,K=I*A+G*T,re=(K+1)/2,fe=.82+.18*re;E.push({x:f+ne*w*fe,y:m+ue*w*fe,d:re,k:J,vec:[ne,ue,K]})}E.sort((J,W)=>J.d-W.d);const z=J=>{const W=(J[2]+1)/2,P=.82+.18*W;return{x:f+J[0]*w*P,y:m+J[1]*w*P,d:W}},O=(J,W,P)=>{let D=J[0]*W[0]+J[1]*W[1]+J[2]*W[2];D=Yn(D,-1,1);const k=Math.acos(D);if(k<.001)return[J[0],J[1],J[2]];const I=Math.sin(k),Q=Math.sin((1-P)*k)/I,ne=Math.sin(P*k)/I;return[J[0]*Q+W[0]*ne,J[1]*Q+W[1]*ne,J[2]*Q+W[2]*ne]},U={};for(const J of E)U[J.k]=J;const X=a*(x?1.4:.5),V=Math.floor(X),te=X-V,ie=5,ce=12;l.lineCap="round",l.lineJoin="round";const se=R?[{seed:1.7},{seed:9.3},{seed:21.5},{seed:34.8},{seed:48.2}]:[{seed:1.7},{seed:9.3},{seed:21.5},{seed:34.8}];for(const J of se){const W=D=>{const k=Math.sin(D*12.9898+J.seed)*43758.5453;return Math.floor((k-Math.floor(k))*j)},P=D=>{let k=W(D);return k===W(D-1)&&(k=(k+1)%j),U[k]};for(let D=ie-1;D>=0;D--){const k=V-D;if(k<0)continue;const I=P(k),Q=P(k+1);if(!I||!Q||I===Q)continue;const ne=D===0?te:1,G=z(O(I.vec,Q.vec,ne)),ue=(I.d+G.d)/2,K=D===0?1:Yn(1-(D-1+te)/(ie-1),0,1),re=(i.glow?.6:.72)*K*(.4+.6*ue);if(re<.02)continue;const fe=l.createLinearGradient(I.x,I.y,G.x,G.y);fe.addColorStop(0,"rgba("+$(I.x,I.y)+",0)"),fe.addColorStop(1,"rgba("+$(G.x,G.y)+","+re+")"),l.strokeStyle=fe,l.lineWidth=(R?Math.max(1.1*p,y*.018):Math.max(1.2,y*.045))*(.7+.4*ue),l.beginPath();for(let we=0;we<=ce;we++){const he=z(O(I.vec,Q.vec,ne*(we/ce)));we===0?l.moveTo(he.x,he.y):l.lineTo(he.x,he.y)}l.stroke()}}for(const J of E){const W=.5+.5*Math.sin(a*2-J.k*.9),P=(.18+.82*J.d)*(.62+.38*W),D=R?Math.max(.5,(.9+.9*J.d)*p*(.85+.15*W)):y*.058*Go(t.size)*(.6+.5*J.d);if(i.glow){const k=D*4,I=l.createRadialGradient(J.x,J.y,0,J.x,J.y,k);I.addColorStop(0,"rgba("+i.accent+","+.24*P+")"),I.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=I,l.beginPath(),l.arc(J.x,J.y,k,0,6.2832),l.fill()}l.fillStyle="rgba("+$(J.x,J.y)+","+(.32+.68*P)+")",l.beginPath(),l.arc(J.x,J.y,Math.max(.9,D),0,6.2832),l.fill()}if(R){const J=x?1:.4;for(let W=0;W<46;W++){const P=Mn(W*5.1)<.5?-1:1,D=Mn(W*1.7)*6.2832+a*(.3+Mn(W*3.1)*.6)*P*J,k=y*(.04+.05*Mn(W*4.7))*Math.sin(a*(.8+Mn(W*6)*1)+Mn(W*7)*6.28),I=y*(.5+Mn(W*2.3)*.5)+k,Q=f+Math.cos(D)*I,ne=m+Math.sin(D)*I,G=.3+.7*(.5+.5*Math.sin(a*(1.4+Mn(W)*2)+Mn(W*2)*6.28)),ue=Math.max(.5,(.4+Mn(W*8)*1)*p*(.55+.6*G));if(i.glow){const K=ue*6,re=l.createRadialGradient(Q,ne,0,Q,ne,K);re.addColorStop(0,"rgba("+i.accent+","+G*.18+")"),re.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=re,l.beginPath(),l.arc(Q,ne,K,0,6.2832),l.fill()}l.fillStyle="rgba("+$(Q,ne)+","+G*(i.glow?.8:.42)+")",l.beginPath(),l.arc(Q,ne,ue,0,6.2832),l.fill()}}to(t,a,i),l.restore()}function Gj(t,a,i){const{ctx:l,w:c,h:u,dpr:p}=t,f=c/2,m=u/2,y=Math.min(c,u)*.39,x=t.state!=="idle",_=t.size>=32?11:7,w=y*.12,$=y*.12,R=Gd(.5+.5*Math.sin(a*(x?1:.55))),j=x?.34+.66*R:.5+.12*R,S=Math.max(1*p,y*.052),L=-a*(x?.5:.16),N=Math.cos(L),C=Math.sin(L),T=.42,A=Math.cos(T),E=Math.sin(T);l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const z=y*(.52+.44*j),O=Math.max(w+S,z-$),U=[];for(let Z=0;Z<_;Z++){const X=1-(Z+.5)/_*2,V=Math.sqrt(Math.max(0,1-X*X)),te=Z*2.39996,ie=Math.cos(te)*V,ce=X,se=Math.sin(te)*V,J=ie*N+se*C,W=-ie*C+se*N,P=ce*A-W*E,k=(ce*E+W*A+1)/2,I=.82+.18*k,Q=.5+.5*Math.sin(a*1.6+Z*1.3);U.push({x0:f+J*w*I,y0:m+P*w*I,x1:f+J*O*I,y1:m+P*O*I,cx2:f+J*z*I,cy2:m+P*z*I,d:k,shim:Q})}U.sort((Z,X)=>Z.d-X.d);for(const Z of U){const X=(x?.4+.45*j:.6)*(.4+.6*Z.d)*(.78+.22*Z.shim),V=l.createLinearGradient(Z.x0,Z.y0,Z.x1,Z.y1);V.addColorStop(0,"rgba("+i.dot+","+X+")"),V.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=V,l.lineWidth=S*(.7+.5*Z.d),l.beginPath(),l.moveTo(Z.x0,Z.y0),l.lineTo(Z.x1,Z.y1),l.stroke();const te=Math.max(.9,y*.058*Go(t.size)*(.85+.3*j)*(.6+.5*Z.d));if(i.glow){const ie=l.createRadialGradient(Z.cx2,Z.cy2,0,Z.cx2,Z.cy2,te*5);ie.addColorStop(0,"rgba("+i.accent+","+.26*X+")"),ie.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=ie,l.beginPath(),l.arc(Z.cx2,Z.cy2,te*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,X+.1)+")",l.beginPath(),l.arc(Z.cx2,Z.cy2,te,0,6.2832),l.fill()}to(t,a,i),l.restore()}function Yj(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,y=t.state!=="idle",x=t.size>=32?58:t.size>=20?32:18,_=m*.78,w=y?a*.5:a*.2,$=Math.cos(w),R=Math.sin(w),j=.42,S=Math.cos(j),L=Math.sin(j),N=y?1:.4,C=(z,O)=>[Math.sin(z)*Math.cos(O),Math.cos(z),Math.sin(z)*Math.sin(O)],T=[C(1.4+.5*Math.sin(a*.5*N),a*.6*N),C(1.9+.4*Math.cos(a*.4*N),-a*.5*N+2)],A=.36;l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over";const E=[];for(let z=0;z<x;z++){const O=1-(z+.5)/x*2,U=Math.sqrt(Math.max(0,1-O*O)),Z=z*2.39996,X=Math.cos(Z)*U,V=O,te=Math.sin(Z)*U;let ie=0;for(const k of T){const I=X-k[0],Q=V-k[1],ne=te-k[2];ie+=Math.exp(-(I*I+Q*Q+ne*ne)/(2*A*A))}ie=Yn(ie,0,1);const ce=X*$+te*R,se=-X*R+te*$,J=V*S-se*L,P=(V*L+se*S+1)/2,D=.82+.18*P;E.push({x:p+ce*_*D,y:f+J*_*D,d:P,inf:ie})}E.sort((z,O)=>z.d-O.d);for(const z of E){const O=Gd(z.inf),U=Math.max(.6,m*(.05+.06*O)*Go(t.size)*(.55+.5*z.d)),Z=(.16+.84*z.d)*(.45+.55*O),X=Math.abs(2*z.d-1),V=Math.atan2(z.y-f,z.x-p);l.fillStyle="rgba("+i.dot+","+Z+")",l.beginPath(),l.ellipse(z.x,z.y,Math.max(.35,U*X),U,V,0,6.2832),l.fill()}to(t,a,i),l.restore()}function Zj(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,y=t.state!=="idle",x=t.size>=32?8:t.size>=20?6:5,_=m*.9,w=y?1:.4,$=a*(y?.3:.12),R=a*1*w,j=-a*.7*w+2.2,S=.72,L=(N,C)=>{const T=((N-C+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(T)};l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over";for(let N=0;N<x;N++){const C=N/x*6.2832+$;let T=Math.exp(-(L(C,R)**2)/(2*S*S))+Math.exp(-(L(C,j)**2)/(2*S*S));T=Yn(T,0,1);const A=Gd(T),E=p+Math.cos(C)*_,z=f+Math.sin(C)*_,O=Math.max(.6,m*(.05+.07*A)*Go(t.size)),U=.38+.62*A;if(i.glow&&A>.25){const Z=l.createRadialGradient(E,z,0,E,z,O*4);Z.addColorStop(0,"rgba("+i.accent+","+.24*A+")"),Z.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=Z,l.beginPath(),l.arc(E,z,O*4,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+U+")",l.beginPath(),l.arc(E,z,O,0,6.2832),l.fill()}to(t,a,i),l.restore()}function Kj(t,a,i){to(t,a,i)}const Qj={orbit:a0,orbit2d:Vj,circle:P1,lines:Gj,magnetic:Yj,magnetic2d:Zj,pulse:Kj,bands:P1};function Mt({mark:t="orbit",size:a=16,tone:i="auto",state:l="active",motionSpeed:c=1,accent:u="#96B9FF",color:p,coreHalo:f=!0,coreGradient:m=!1,className:y,"aria-label":x}){const _=g.useRef(null),w=Fj(),$=g.useRef(0),R=g.useRef(0);return R.current=m?1:0,g.useEffect(()=>{const j=_.current;if(!j)return;const S=j.getContext("2d");if(!S)return;const L=Math.min(2,window.devicePixelRatio||1),N=Math.max(2,Math.round(a*L)),C=N;j.width=N,j.height=C;const T={ctx:S,w:N,h:C,dpr:L,size:a,state:l,coreHalo:f,alert:$.current},A=i==="auto"?Wj(E1(S,j,"var(--color-bg-primary)"))<.5?"dark":"light":i,E=Hj(A,jd(u));if(p){const te=E1(S,j,p);E.dot=te,E.core=te}const z=Qj[t]??a0,O=te=>{$.current+=(R.current-$.current)*.06,Math.abs($.current-R.current)<.001&&($.current=R.current),T.alert=$.current,S.clearRect(0,0,N,C),z(T,l==="static"?.62:te,E)},U=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),Z=Yn(c,.4,3);if((U||l==="static")&&($.current=R.current),O(1.15),U||l==="static")return;let X=0;const V=te=>{O(te/1e3*Z),X=requestAnimationFrame(V)};return X=requestAnimationFrame(V),()=>cancelAnimationFrame(X)},[t,a,i,l,c,u,p,f,m,w]),r.jsx("canvas",{ref:_,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:y,role:"img","aria-label":x})}const Ns={high:0,medium:1,low:2,none:3};b.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function Yd(t){return t.status==="resolved"||t.status==="auto_resolved"||t.status==="workflow_available"?"green":t.status==="analyzing"?"slate":t.status==="in_progress"||t.status==="monitoring"?"blue":t.severity==="high"?"orange":"slate"}b.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function Xj(t,a){if(a)return"Ultron is replying…";switch(t){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const i0=t=>t.status==="workflow_available"||t.status==="resolved"&&t.workflowOpportunity!=null,s0=t=>/^(review|adjust|revisit|update)\b/i.test(t),Jj=["Revisit","Update","Resolve"],eS=t=>/,|\sand\s/.test(t),tS="Approve all",Rs="Yes",l0=t=>{const i=t.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(l=>l.trim()).filter(Boolean);return i.length<2?[]:i.map(l=>l.charAt(0).toUpperCase()+l.slice(1))};b.section`
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
`;const ad=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],Ls={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},c0={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function nS(t){const a=c0[t];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function rS(t){const a=Ls[t.id];if(!a||t.title.startsWith(a))return t.title;const i=t.title.split(" ")[0]??"",c=i===i.toUpperCase()?t.title:t.title.charAt(0).toLowerCase()+t.title.slice(1);return`${a} ${c}`}const d0={missed_clockin_james:"james_okoro_2"},u0=t=>`https://i.pravatar.cc/80?u=${d0[t]??t}`,Yo=t=>`https://i.pravatar.cc/80?u=${d0[t]??t}`,oS={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},aS=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],h0=t=>oS[t]??aS,p0={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},z1={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Zd={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},iS={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Kd={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},sS={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},lS={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},id={detected:t=>t.event,assessment:t=>t.assessment,recommendation:t=>t.recommendation,approval:t=>t.recommendation,execution:t=>t.recommendation,resolution:t=>t.outcome??t.recommendation,monitoring:t=>t.assessment,workflow:t=>t.workflowOpportunity??t.recommendation};function f0(t){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return sS[t.id]??t.timeline.map(i=>{var u;const l=((u=id[i.state])==null?void 0:u.call(id,t))??t.assessment,c=l!=null&&a(l)===a(i.headline);return{icon:lS[i.state]??"clock",headline:i.headline,blocks:l&&!c?[{text:l}]:void 0}})}const xt=(t,a,i)=>({name:t,match:a,distance:i}),ze=(t,a,i,l,c)=>({seed:t,name:a,preview:i,status:l,tone:c}),O1=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],cS=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],dS=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],uS=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],hS={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:O1,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[xt("Jordan Pierce","4.9 match","3.2 mi"),xt("Aisha Karim","4.7 match","5.1 mi"),xt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:"An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",total:20,threads:[ze("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive"),ze("jordan_pierce","Jordan Pierce","Delivered · no reply yet","Delivered","muted"),ze("marcus_lewis","Marcus Lewis","Delivered · no reply yet","Delivered","muted")]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:cS,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[xt("Renee Wallace","4.9 match","2.4 mi"),xt("Carl Jensen","4.6 match","4.1 mi"),xt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[ze("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),ze("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),ze("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:dS,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[xt("Dane Mercer","4.8 match","2.1 mi"),xt("Omar Reyes","4.6 match","3.7 mi"),xt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[ze("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),ze("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),ze("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:uS,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[xt("Jamal Carter","4.7 match","1.8 mi"),xt("Sara Lindqvist","4.6 match","2.9 mi"),xt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[ze("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),ze("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),ze("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[xt("Theo Park","4.7 match","1.9 mi"),xt("Gina Holt","4.5 match","3.3 mi"),xt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[ze("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[ze("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),ze("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),ze("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[xt("Carl Jensen","4.7 match","2.6 mi"),xt("Tina Boyd","4.5 match","3.9 mi"),xt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[ze("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),ze("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),ze("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[ze("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[ze("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[ze("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[ze("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[ze("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[ze("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[ze("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[ze("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[ze("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),ze("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),ze("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:O1,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[ze("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),ze("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},pS={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},fS=t=>/in-app/i.test(t)?"in_app":/sms/i.test(t)?"sms":"auto",D1=t=>/in-app/i.test(t)?"In-app":/sms/i.test(t)?"SMS":"Preferred channel",mS={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Sd=t=>{const[a,...i]=t.split(" "),l=mS[a];return l?`Will ${l} ${i.join(" ")}`:t};function gS(t,a){if(t==="policy"&&a.policy){const c=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:c?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${c.total} ${c.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${fS(i.name)}", template="shift_offer", to=matched)`,summary:`${Sd(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const l=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0;return l?{query:`engage.notify(to="${l.name}", via="${l.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Sd(l.description)} (${l.name} · ${l.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function vS(t,a,i,l){var $,R,j,S;if(t==="read"){const L=(($=a.update)==null?void 0:$.recordType)??((R=a.updateClose)==null?void 0:R.recordType);if(!L)return null;const N=L.toLowerCase(),C=[{label:"Type",value:L},{label:"Time",value:((j=c0[l])==null?void 0:j.shiftTime)??""},{label:"User",value:Ls[l]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${L}`,description:`Pulled the current ${N} record before planning`,query:`read_data(record="${L}") → current_state`,recordDetails:C,summary:`Read the ${N}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(t==="match"||t==="credential"||t==="incentive"){const L=(S=a.policy)==null?void 0:S.eligible;if(!L)return null;const N=L.unit.replace(/^eligible\s+/i,"");return t==="match"?{icon:"search",name:"Match Engine",description:`Ranked qualified ${N} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${L.total} ${L.unit}.`}:t==="credential"?{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."}:{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${L.total}) → suggestion`,summary:"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached."}}if(t==="task"){if(!a.task)return null;const{description:L,query:N,fields:C}=a.task;return{icon:"task",name:"Tasks",description:L,query:N,task:{fields:C}}}if(t==="update"||t==="update-close"){const L=t==="update"?a.update:a.updateClose;if(!L)return null;const{description:N,...C}=L;return{icon:"record",name:"Update Data",description:N,updateData:C}}const c=t==="notify"||t==="notify-scheduler",u=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0,p=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(!(t==="policy"&&a.policy||!!p||!!u))return null;const m=t==="policy"?"Policy Engine":c?"Engage: Notification":p.name,y=t==="policy"?a.policy.description:c?u.description:p.description,x=t==="policy"?"shield":c?"bell":"message";if(i==="planning"){const L=t==="policy"?y:Sd(y),N={icon:x,name:m,description:L,...gS(t,a)};return c?{...N,message:u.message}:p?{...N,channel:D1(p.name),message:p.message}:N}if(t==="policy")return{icon:x,name:m,description:y,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(p)return{icon:x,name:m,description:y,channel:D1(p.name),message:p.message,threads:{total:p.total,moreNoun:"threads",items:p.threads}};const{description:_,...w}=u;return{icon:x,name:m,description:y,notification:w}}function m0(t,a,i="execution"){const l=hS[t];return l?a.map(c=>vS(c,l,i,t)).filter(c=>c!==null):[]}const yS=t=>t.tools??pS[t.icon]??["policy"],vs=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function xS(t){return{id:`detected_${t.id}`,name:t.name,title:t.title,capability:t.capability,status:"analyzing",severity:t.severity??"high",event:t.title.endsWith(".")?t.title:`${t.title}.`,assessment:t.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:t.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:t.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const g0={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},B1=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function wS(t,a){return B1[a%B1.length]}function _S(t){return t===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function bS(t){return t>=90?"green":t>=80?"blue":t>=70?"orange":"slate"}function v0({record:t}){const a=t.meta.find(c=>/^\d+%\s*match$/i.test(c)),i=a?parseInt(a,10):null,l=a?t.meta.filter(c=>c!==a):t.meta;return r.jsxs(kS,{children:[r.jsx(An,{size:"md",src:u0(t.avatarSeed),name:t.title,alt:t.title}),r.jsxs(CS,{children:[r.jsx(jS,{children:t.title}),r.jsx(SS,{children:[t.eyebrow,...l].join(" · ")})]}),i!=null&&r.jsxs(NS,{"data-tone":bS(i),children:[i,"% match"]}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(Ed,{size:16})})]})}const kS=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,CS=b.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,jS=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,SS=b.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,NS=b.span`
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
`,F1=t=>t.id.startsWith("detected_"),W1=5400,H1=1100;function RS(t,a){switch(a.type){case"detect":return t.some(i=>i.id===a.thread.id)?t:[a.thread,...t];case"decide":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return t.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return t.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:g0[i.id]??i.outcome}:i)}}const LS=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function MS(){const[t,a]=g.useReducer(RS,ad),[i,l]=g.useState(()=>{var D;const P=ad.find(k=>k.status==="needs_approval"||k.status==="recommended");return(P==null?void 0:P.id)??((D=ad[0])==null?void 0:D.id)??null}),[c,u]=g.useState([]),p=P=>{l(P),u(D=>D.includes(P)?D:[...D,P])},f=g.useMemo(()=>{const P=t.map((D,k)=>({item:D,index:k}));return LS.map(D=>({id:D.id,label:D.label,threads:P.filter(k=>D.statuses.includes(k.item.status)).sort((k,I)=>(k.item.status==="analyzing"?1:0)-(I.item.status==="analyzing"?1:0)||(F1(I.item)?1:0)-(F1(k.item)?1:0)||Ns[k.item.severity]-Ns[I.item.severity]||k.index-I.index).map(k=>k.item)}))},[t]),m=t.find(P=>P.id===i)??null,[y,x]=g.useState({}),_=i?y[i]??0:0,[w,$]=g.useState([]),[R,j]=g.useState({}),[S,L]=g.useState({}),[N,C]=g.useState([]),T=g.useRef({}),[A,E]=g.useState([]),z=P=>{E(D=>D.includes(P)?D.filter(k=>k!==P):[...D,P])},[O,U]=g.useState([]),Z=P=>{U(D=>D.includes(P)?D:[...D,P])};return{threads:t,groups:f,selectedId:i,selectedThread:m,selectedStage:_,stageById:y,viewedIds:c,analyzedIds:w,outboundByThread:R,chatByThread:S,replyingIds:N,setSelectedId:p,detectRisk:P=>{a({type:"detect",thread:xS(P)})},decide:P=>{p(P),$(D=>D.includes(P)?D:[...D,P]),a({type:"decide",threadId:P})},commit:(P,D)=>{p(P),j(k=>({...k,[P]:[...k[P]??[],D]})),a({type:"commit",threadId:P})},completeRun:P=>{const D=y[P]??0,k=Zd[P];D===0&&k?(x(I=>({...I,[P]:1})),a({type:"reopen",threadId:P})):(a({type:"resolve",threadId:P}),A.includes(P)&&(Z(P),E(I=>I.filter(Q=>Q!==P))))},sendMessage:(P,D)=>{const k=D.trim();if(!k)return;p(P),L(Q=>({...Q,[P]:[...Q[P]??[],{role:"operator",text:k}]})),C(Q=>Q.includes(P)?Q:[...Q,P]);const I=window.setTimeout(()=>{L(Q=>{const ne=Q[P]??[],G=ne.filter(ue=>ue.role==="ultron").length;return{...Q,[P]:[...ne,{role:"ultron",text:wS(k,G)}]}}),C(Q=>Q.filter(ne=>ne!==P)),delete T.current[P]},H1);T.current[P]=I},stopReply:P=>{const D=T.current[P];D&&(window.clearTimeout(D),delete T.current[P]),C(k=>k.filter(I=>I!==P))},refine:P=>{},saveWorkflow:P=>{const D=P.id;p(D),L(I=>({...I,[D]:[...I[D]??[],{role:"operator",text:"Save as workflow"}]})),C(I=>I.includes(D)?I:[...I,D]);const k=window.setTimeout(()=>{L(I=>({...I,[D]:[...I[D]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),Z(D),C(I=>I.filter(Q=>Q!==D)),delete T.current[D]},H1);T.current[D]=k},pendingWorkflowIds:A,toggleWorkflowSave:z,savedWorkflowIds:O,markWorkflowSaved:Z}}const $S={search:Eo,read:Td,message:Cs,policy:Ur,shield:Ur,schedule:Ur,analytics:Hf,clock:br,monitor:Bs,bell:Cs,record:zo,task:Ur},TS=t=>t.icon==="shield"||t.icon==="policy",IS={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},AS=t=>t.updateData?`Update Data: ${t.updateData.recordType}`:IS[t.icon]??t.name,ES=t=>t.tone==="positive"?"success":"neutral";const PS=b(om)`
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
    /* The expanded body reads as a tinted inset card: 12px margin off the item
       edges (none on top — the header row above provides the spacing), 16px
       padding inside, secondary fill, 12px radius. */
    margin: 0 var(--space-3) var(--space-3);
    padding: var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-lg);
  }
  /* Inset the inter-item divider 12px on each side. Suppress Alloy's full-bleed
     border (its selector needs &&& to override) and draw the line with a pseudo.
     An expanded section drops its divider — the tinted body card already closes
     the section visually, so a line under it would double the boundary. */
  &&&:not(:last-child) {
    border-bottom: none;
  }
  &:not(:last-child):not([data-expanded='true'])::after {
    content: '';
    position: absolute;
    left: var(--space-3);
    right: var(--space-3);
    bottom: 0;
    height: 1px;
    background: var(--color-border-opaque);
  }
`;function zS({open:t,onClose:a,title:i="Run details",usage:l}){const[c,u]=g.useState(()=>l.length?"0":"");if(!t)return null;const p=l.length,f=`${p} ${p===1?"tool":"tools"} used · tap any to see its query and results`,m=l.map((y,x)=>({entry:y,index:x}));return Es.createPortal(r.jsxs(GS,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(YS,{onClick:a}),r.jsxs(ZS,{children:[r.jsxs(KS,{children:[r.jsxs(QS,{children:[r.jsx(XS,{children:i}),r.jsx(JS,{children:f})]}),r.jsx(Te,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(Qf,{size:18})})]}),r.jsxs(eN,{children:[r.jsx(tN,{"aria-hidden":"true"}),r.jsx(rm,{type:"single",collapsible:!0,value:c,onValueChange:y=>u(typeof y=="string"?y:""),children:m.map(({entry:y,index:x})=>{const _=y.updateData?Zf:TS(y)?Gf:$S[y.icon];return r.jsx(PS,{value:String(x),label:AS(y),description:y.description,chevronPosition:"trailing",leadingSlot:r.jsx(An,{shape:"square",variant:"subtle",color:"neutral",size:"md",icon:r.jsx(_,{size:18}),"aria-hidden":"true",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),children:r.jsx(nN,{children:r.jsx(OS,{entry:y})})},x)})})]})]})]}),document.body)}function OS({entry:t}){return r.jsxs(r.Fragment,{children:[t.channel&&r.jsxs(wn,{children:[r.jsx(dn,{children:"Channel"}),r.jsx(V1,{children:t.channel})]}),t.message&&r.jsxs(wn,{children:[r.jsx(dn,{children:"Message"}),r.jsx(U1,{children:t.message})]}),t.recordDetails&&r.jsxs(wn,{children:[r.jsx(dn,{children:"Record details"}),r.jsx(sd,{children:t.recordDetails.map((a,i)=>r.jsx(tn,{size:"sm",label:a.label,trailingSlot:r.jsx(ld,{$success:a.emphasis==="success",children:a.value})},i))})]}),t.policies&&r.jsxs(wn,{children:[r.jsx(dn,{children:`Policies evaluated · ${t.policies.total}`}),r.jsx(dN,{children:t.policies.items.map((a,i)=>r.jsxs(uN,{children:[r.jsx(hN,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})}),r.jsx("span",{children:a})]},i))})]}),t.eligible&&r.jsxs(wn,{children:[r.jsx(dn,{children:`Returned · ${t.eligible.total} ${t.eligible.unit}`}),r.jsx(DS,{candidates:t.eligible.items,total:t.eligible.total,moreNoun:t.eligible.moreNoun})]}),t.threads&&r.jsxs(wn,{children:[r.jsx(dn,{children:`Threads · ${t.threads.total}`}),r.jsx(US,{threads:t.threads})]}),t.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(wn,{children:[r.jsx(dn,{children:"Recipient"}),r.jsx(pN,{children:r.jsx(tn,{size:"md",divider:!1,leadingSlot:r.jsx(An,{size:"sm",src:Yo(t.notification.seed),name:t.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:t.notification.name,description:`${t.notification.role} · ${t.notification.channel}`,trailingSlot:r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${t.notification.name}'s profile`,children:r.jsx(Fs,{size:14})})})})]}),r.jsxs(wn,{children:[r.jsx(dn,{children:"Message"}),r.jsx(U1,{children:t.notification.message})]})]}),t.task&&r.jsxs(wn,{children:[r.jsx(dn,{children:"Task"}),r.jsx(sd,{children:t.task.fields.map((a,i)=>r.jsx(tn,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?r.jsx(qa,{status:"success",size:"sm",children:a.value}):r.jsx(ld,{$success:a.emphasis==="success",children:a.value})},i))})]}),t.updateData&&r.jsxs(wn,{children:[r.jsx(dn,{children:"Record details"}),(t.updateData.groups??[t.updateData.fields??[]]).map((a,i)=>r.jsx(sd,{children:a.map((l,c)=>r.jsx(tn,{size:"sm",label:l.label,trailingSlot:l.emphasis==="change"&&l.previousValue?r.jsxs(BS,{children:[r.jsx(FS,{children:l.previousValue}),r.jsx(WS,{"aria-hidden":"true",children:"→"}),r.jsx(HS,{children:l.value})]}):l.emphasis==="success-tag"?r.jsx(qa,{status:"success",size:"sm",children:l.value}):r.jsx(ld,{$success:l.emphasis==="success",children:l.value})},c))},i))]}),t.query&&r.jsx(q1,{label:"Query",children:r.jsx(aN,{children:t.query})}),t.summary&&r.jsx(q1,{label:"What it does",children:r.jsx(V1,{children:t.summary})})]})}function q1({label:t,children:a}){const[i,l]=g.useState(!1);return r.jsxs(wn,{children:[r.jsxs(rN,{type:"button","aria-expanded":i,onClick:()=>l(c=>!c),children:[r.jsx(dn,{children:t}),r.jsx(oN,{"data-open":i||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:14})})]}),i&&a]})}function DS({candidates:t,total:a,moreNoun:i}){var x;const[l,c]=g.useState(!1),u=t.slice(0,3),p=a-u.length,f=parseFloat(((x=u[u.length-1])==null?void 0:x.match)??"4.5"),m=l?Array.from({length:p},(_,w)=>qS(w,f)):[],y=[...u,...m];return r.jsxs(r.Fragment,{children:[r.jsx(Qd,{children:y.map((_,w)=>r.jsx(tn,{size:"sm",leadingSlot:r.jsx(An,{size:"sm",src:Yo(_.name),name:_.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:_.name,trailingSlot:r.jsx(lN,{children:`${_.match} · ${_.distance}`})},w))}),p>0&&r.jsx(y0,{type:"button",onClick:()=>c(_=>!_),"aria-expanded":l,children:l?`Show fewer ${i}`:`+${p} more ${i}`})]})}const Qd=b.div`
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
`,sd=b(Qd)`
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
`,ld=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: ${t=>t.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,BS=b.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,FS=b.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,WS=b.span`
  color: var(--color-content-tertiary);
`,HS=b.span`
  color: var(--color-success-content);
`,Ms=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],$s=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function qS(t,a){const i=Ms[t%Ms.length],l=$s[(t*7+3)%$s.length],c=Math.max(3,a-(t+1)*.1),u=(4+t*13%90/10).toFixed(1);return{name:`${i} ${l}`,match:`${c.toFixed(1)} match`,distance:`${u} mi`}}function US({threads:t}){const[a,i]=g.useState(!1),l=t.items.slice(0,3),c=t.total-l.length,u=a?Array.from({length:c},(f,m)=>VS(m)):[],p=[...l,...u];return r.jsxs(r.Fragment,{children:[r.jsx(Qd,{children:p.map((f,m)=>r.jsx(tn,{size:"md",interactive:!0,onClick:()=>void 0,leadingSlot:r.jsx(An,{size:"sm",src:Yo(f.seed),name:f.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:f.name,description:f.preview,trailingSlot:r.jsxs(cN,{children:[r.jsx(qa,{status:ES(f),size:"sm",children:f.status}),r.jsx(Gt,{size:16})]})},m))}),c>0&&r.jsx(y0,{type:"button",onClick:()=>i(f=>!f),"aria-expanded":a,children:a?`Show fewer ${t.moreNoun}`:`+${c} more ${t.moreNoun}`})]})}function VS(t){const a=Ms[t%Ms.length],i=$s[(t*7+3)%$s.length],l=`${a} ${i}`;return{seed:l,name:l,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const GS=b.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,YS=b.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: 0.45;
`,ZS=b.div`
  position: relative;
  width: min(460px, 92vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border-opaque);
  box-shadow: var(--shadow-below-high);
`,KS=b.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,QS=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,XS=b.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,JS=b.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,eN=b.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,tN=b.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,nN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,wn=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,rN=b.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  cursor: pointer;

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,oN=b.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;function aN({children:t}){const[a,i]=g.useState(!1),l=()=>{var c;(c=navigator.clipboard)==null||c.writeText(t),i(!0),window.setTimeout(()=>i(!1),1600)};return r.jsxs(iN,{children:[r.jsx(sN,{children:t}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:l,children:a?r.jsx(Pt,{size:14}):r.jsx(Yf,{size:14})})]})}const iN=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);

  /* The copy control is a hover affordance: hidden at rest, revealed when the
     pointer is over the box. Opacity (not display) so it keeps its layout slot
     and stays keyboard-reachable — tabbing to it reveals it too. */
  & > button {
    opacity: 0;
    transition: opacity var(--duration-fast) var(--ease-default);
  }
  &:hover > button,
  & > button:focus-visible {
    opacity: 1;
  }
`,sN=b.pre`
  flex: 1;
  min-width: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-primary);
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
`,lN=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,cN=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,y0=b.button`
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
`,dN=b.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,uN=b.li`
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
`,hN=b.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,U1=b.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,pN=b.div`
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
`,V1=b.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function fN({milestones:t}){return r.jsx(CN,{children:t.map((a,i)=>r.jsx(xN,{milestone:a,last:i===t.length-1},i))})}function x0({milestones:t,typingIndex:a,focusIndex:i,focusBeat:l,collapsed:c,hideActions:u,running:p,animateIn:f,showConnectors:m,reasoning:y}){return r.jsx(gN,{milestones:t,typingIndex:a,focusIndex:i,focusBeat:l,hideActions:u,running:p,defaultCollapsed:c,animateIn:f,showConnectors:m,reasoning:y})}const mN=1;function gN({milestones:t,typingIndex:a,focusIndex:i,focusBeat:l,hideActions:c,running:u,animateIn:p=!0,showConnectors:f=!0,defaultCollapsed:m=!1,reasoning:y=!1}){const[x,_]=g.useState(!1),j=m||y&&!u?t.length:u&&typeof i=="number"?t.length>2?Math.min(Math.max(0,i),t.length-1):0:u?0:Math.max(0,t.length-mN),S=j>0,L=S&&!x?j:0,N=t.slice(0,j).map(T=>T.headline).join(" · "),C=t.length>0&&L>=t.length;return r.jsx(SN,{$animate:p,children:r.jsxs(RN,{$compact:C,children:[S&&r.jsx(Z1,{$tight:!0,$last:C,$connected:f,children:r.jsxs(b0,{type:"button","aria-expanded":x,onClick:()=>_(T=>!T),children:[r.jsx(FN,{"aria-hidden":"true",children:r.jsx(zd,{size:16})}),r.jsx(WN,{children:x?"Show fewer steps":N})]})}),t.slice(L).map((T,A)=>{var V,te;const E=L+A,z=u&&typeof i=="number"&&E>i,O=u&&typeof i=="number"&&E===i,U=!u||typeof i!="number"||E<i-1?"done":E===i-1?"working":"upcoming",Z=!!((V=T.progress)!=null&&V.length),X=E===t.length-1;return r.jsxs(Z1,{$tight:!Z,$last:X,$connected:f,children:[f&&!X&&U!=="upcoming"&&r.jsx(MN,{"aria-hidden":"true",$state:U,$tight:!Z,$superseded:m}),r.jsx(_0,{milestone:T,last:!0,collapsible:!0,placeholder:z,focused:O,progressBeat:O?l:void 0,superseded:m,typing:E===a,extra:!z&&((te=T.usage)!=null&&te.length)?r.jsx(yN,{usage:T.usage,title:T.headline}):void 0,icon:r.jsx(w0,{icon:T.icon,loading:a===E||O||u&&typeof i!="number"&&E===t.length-1,placeholder:z,muted:m})})]},E)}),!c&&!u&&r.jsx(Po,{time:Tn(t)})]})})}const G1=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function vN(){const[t,a]=g.useState(0);return g.useEffect(()=>{if(t>=G1.length-1)return;const i=setTimeout(()=>a(l=>l+1),3200);return()=>clearTimeout(i)},[t]),r.jsxs(r.Fragment,{children:[G1[t],r.jsxs(NN,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function Tn(t){const i=581+t.reduce((f,m)=>f+m.headline.length,0)%200,l=Math.floor(i/60)%24,c=i%60,u=l<12?"AM":"PM";return`${l%12===0?12:l%12}:${String(c).padStart(2,"0")} ${u}`}function Po({time:t}){const[a,i]=g.useState(null),l=c=>i(u=>u===c?null:c);return r.jsx($N,{"data-feedback-actions":!0,children:r.jsxs(Nf,{visibility:"always",time:t,children:[r.jsx(K1,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>l("up"),children:r.jsx(Uf,{size:14})}),r.jsx(K1,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>l("down"),children:r.jsx(Vf,{size:14})}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(Xa,{size:14})})]})})}function yN({usage:t,title:a}){const[i,l]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const c=u=>{u.key==="Escape"&&l(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[i]),t.length?r.jsxs(TN,{children:[r.jsxs(Te,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(Gt,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>l(!0),children:[t.length," ",t.length===1?"tool":"tools"," used"]}),r.jsx(zS,{open:i,onClose:()=>l(!1),title:a,usage:t})]}):null}function xN({milestone:t,last:a}){return r.jsxs(zN,{children:[r.jsxs(ON,{children:[r.jsx(w0,{icon:t.icon}),!a&&r.jsx(UN,{})]}),r.jsx(_0,{milestone:t,last:a})]})}function wN({records:t,initial:a=3}){const[i,l]=g.useState(!1),c=i?t:t.slice(0,a),u=t.length-a;return r.jsxs(aR,{children:[c.map((p,f)=>r.jsx(v0,{record:p},f)),u>0&&r.jsx(iR,{type:"button",onClick:()=>l(p=>!p),children:i?"Show less":`Show ${u} more`})]})}function w0({slotRef:t,hidden:a,loading:i,placeholder:l,muted:c}){return l?r.jsx(Q1,{ref:t,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(BN,{})}):r.jsx(Q1,{ref:t,"aria-hidden":"true",$hidden:a,$loading:i,children:r.jsxs(qN,{viewBox:"0 0 24 24",$loading:i,$muted:c&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function _0({milestone:t,last:a,typing:i,icon:l,collapsible:c=!0,extra:u,placeholder:p,focused:f,progressBeat:m,superseded:y}){var N,C;if(p)return r.jsx(J1,{$last:a,$dim:!0,children:r.jsxs(Ya,{as:"div",children:[l,r.jsx(ef,{children:t.headline})]})});const x=!!((N=t.blocks)!=null&&N.length),_=!!u,[w,$]=g.useState(!c||!!t.defaultOpen),R=c&&(x||_),j=R&&!i,S=x&&(c?w:!0),L=_&&(c?w:!0);return r.jsxs(J1,{$last:a,children:[r.jsxs(Ya,{as:R?"button":"div",type:R?"button":void 0,$interactive:j,"aria-expanded":j?w:void 0,onClick:j?()=>$(T=>!T):void 0,children:[l,r.jsx(ef,{$focused:!!f,children:t.headline}),j&&r.jsx(VN,{"data-open":w||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:14})})]}),(C=t.progress)!=null&&C.length?r.jsx(GN,{$indent:!!l,children:r.jsx(bN,{steps:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,live:!!(i||f),beat:m,superseded:y,showAvatars:w||i||f})}):null,S&&r.jsx(tR,{$indent:!!l,children:t.blocks.map((T,A)=>r.jsxs(nR,{children:[T.text&&r.jsx(rR,{children:i?r.jsx(Xd,{text:T.text}):T.text}),T.label&&r.jsx(oR,{children:T.label}),T.bullets&&r.jsx(sR,{children:T.bullets.map((E,z)=>r.jsx("li",{children:E},z))}),T.checks&&r.jsx(lR,{children:T.checks.map((E,z)=>r.jsxs("li",{children:[r.jsx(cR,{"aria-hidden":"true"}),r.jsx("span",{children:E})]},z))}),T.records&&r.jsx(wN,{records:T.records})]},A))}),L&&r.jsx(IN,{$indent:!!l,children:u})]})}const _N=1350;function bN({steps:t,avatars:a,avatarsOnSettle:i,reached:l,live:c,showAvatars:u,beat:p,superseded:f}){const m=t.length-1,y=typeof p=="number",[x,_]=g.useState(c?0:m),w=g.useRef(c);g.useEffect(()=>{c&&!w.current&&(w.current=!0,_(0))},[c]),g.useEffect(()=>{if(y||!w.current||x>=m)return;const S=setTimeout(()=>_(L=>Math.min(L+1,m)),_N);return()=>clearTimeout(S)},[x,m,y]),g.useEffect(()=>{typeof p=="number"&&_(Math.min(p,m))},[p,m]);const $=typeof p=="number"?Math.min(p,m):x,R=$>=m,j=R&&!c;return r.jsxs(YN,{children:[r.jsx(KN,{$done:j,$live:c,$superseded:f,"aria-live":"polite",children:c?r.jsx(Xd,{text:t[$],caret:!1,speed:26}):t[$]},$),u&&(i?R:R||c)&&(a!=null&&a.length)?r.jsx(kN,{seeds:a,total:l}):null]})}const Y1=90;function kN({seeds:t,total:a,max:i=5}){const l=t.slice(0,i),c=Math.max(a??0,t.length),u=c-l.length;return r.jsxs(QN,{"aria-label":`${c} people reached`,children:[l.map((p,f)=>r.jsx(XN,{style:{zIndex:l.length-f,animationDelay:`${f*Y1}ms`},children:r.jsx(An,{size:"sm",src:Yo(p),name:p,alt:""})},p)),u>0&&r.jsxs(JN,{"aria-hidden":"true",style:{animationDelay:`${l.length*Y1}ms`},children:["+",u]})]})}const CN=b.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,jN=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,Ks=zt`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,SN=b.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${jN} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${t=>t.$animate===!1&&"animation: none;"}

  ${Ks}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,NN=b.span``,RN=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. A fully-folded
     (superseded) group is a single recap line, so it packs tight — just enough to
     separate it from the turns around it without a full row of padding. */
  padding-top: ${t=>t.$compact?"var(--space-1)":"var(--space-3)"};
  padding-bottom: ${t=>t.$compact?"var(--space-1)":"var(--space-3)"};
`,Z1=b.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${t=>t.$last?"0":t.$connected?t.$tight?"var(--space-3)":"var(--space-5)":t.$tight?"0":"var(--space-3)"};
`,LN=De`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,MN=b.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${t=>t.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${t=>t.$state==="working"?zt`
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
        animation: ${LN} 1.25s linear infinite;
      `:t.$state==="upcoming"?zt`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:zt`
        /* done — a full, solid green line. Static: the drawing motion belongs to
           the 'working' state (the looping sweep). Once the step completes, the
           line simply solidifies rather than re-drawing from zero.
           A superseded group (a newer activity group has triggered below it)
           demotes the line to the slate scale, so the success green stays with
           the latest group. */
        width: 1.5px;
        background-color: ${t.$superseded?"var(--color-slate-border-secondary)":"var(--color-success-content)"};
      `};

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,$N=b.div`
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
`,TN=b.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,IN=b.div`
  padding-top: var(--space-2);
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,K1=b(Te)`
  &[data-active] { color: var(--color-content-brand); }
`;function Xd({text:t,onDone:a,speed:i=30,caret:l=!0}){const[c,u]=g.useState(0);g.useEffect(()=>{u(0)},[t]),g.useEffect(()=>{if(c>=t.length)return;const f=setTimeout(()=>u(m=>m+1),i);return()=>clearTimeout(f)},[c,t,i]);const p=c>=t.length;return g.useEffect(()=>{p&&(a==null||a())},[p]),r.jsxs(r.Fragment,{children:[t.slice(0,c),l&&r.jsx(EN,{$blink:p,"aria-hidden":"true"}),!p&&r.jsx(PN,{"aria-hidden":"true",children:t.slice(c)})]})}const AN=De`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,EN=b.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${t=>t.$blink?AN:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,PN=b.span`
  opacity: 0;
`,zN=b.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,ON=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,Q1=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${t=>t.$hidden?"hidden":"visible"};
`,DN=De`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,BN=b.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${DN} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,b0=b.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,FN=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,WN=b.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  /* Always the quiet disabled tone — the recap line stays out of the way. */
  color: var(--color-content-disabled);
  line-height: var(--line-height-snug);
  /* Keep the folded-steps recap to a single line — long summaries truncate. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--duration-base) var(--ease-out);

  ${b0}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,HN=De`
  to { transform: rotate(360deg); }
`,X1=56.5,qN=b.svg`
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
    stroke-dasharray: ${X1};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${t=>t.$loading?X1*.7:0};
    stroke: ${t=>t.$loading?"var(--color-content-tertiary)":t.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${HN} 2s linear infinite;
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
`,UN=b.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,J1=b.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${t=>t.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,Ya=b.div`
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
`,ef=b.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm); /* 14px */
  font-weight: ${t=>t.$focused?"var(--font-weight-bold)":"var(--font-weight-medium)"};
  color: ${t=>t.$focused?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  line-height: var(--line-height-snug);
  transition: color var(--duration-base) var(--ease-out);

  ${Ya}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,VN=b.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${Ya}:hover &,
  ${Ya}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,GN=b.div`
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,YN=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,ZN=De`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,KN=b.div`
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
     While the step is still running a highlight band sweeps left-to-right across it
     to read as actively-working; a settled line holds solid. */
  ${t=>t.$live&&zt`
    background: linear-gradient(
      90deg,
      var(--color-content-tertiary) 0%,
      var(--color-content-tertiary) 45%,
      var(--color-content-primary) 50%,
      var(--color-content-tertiary) 55%,
      var(--color-content-tertiary) 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${ZN} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,QN=b.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,k0=De`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,XN=b.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${k0} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,JN=b.span`
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
  animation: ${k0} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eR=De`
  from { opacity: 0; }
  to   { opacity: 1; }
`,tR=b.div`
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
  animation: ${eR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,rR=b.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,oR=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,aR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,iR=b.button`
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
`,sR=b.ul`
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
`,lR=b.ul`
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
`,cR=b.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function dR({size:t=20}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const uR=160,C0=g.forwardRef(function({onSend:a,working:i=!1,onStop:l,placeholder:c="Message Ultron…",compact:u=!1},p){const[f,m]=g.useState(""),y=g.useRef(null),x=f.trim().length>0;g.useImperativeHandle(p,()=>({focus:()=>{var j;return(j=y.current)==null?void 0:j.focus()}}),[]);const _=()=>{const j=y.current;j&&(j.style.height="auto",j.style.height=`${Math.min(j.scrollHeight,uR)}px`)},w=()=>{!x||i||(a(f),m(""),requestAnimationFrame(()=>{const j=y.current;j&&(j.style.height="auto")}))},$=j=>{j.preventDefault(),w()},R=j=>{j.key==="Enter"&&!j.shiftKey&&(j.preventDefault(),w())};return r.jsxs(hR,{onSubmit:$,$compact:u,children:[r.jsx(pR,{ref:y,rows:1,value:f,placeholder:c,"aria-label":"Message Ultron",$compact:u,onChange:j=>{m(j.target.value),_()},onKeyDown:R}),i?r.jsx(tf,{$float:!0,type:"button",variant:"primary",size:u?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:l,children:r.jsx(dR,{size:u?16:20})}):r.jsx(tf,{type:"submit",variant:"primary",size:u?"xs":"sm",iconOnly:!0,disabled:!x,"aria-label":"Send message",children:r.jsx(Ds,{size:u?14:18})})]})}),hR=b.form`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  /* Compact: 5px vertical padding sets the resting bar to 36px (24px xs button
     + 2×5px + 2×1px border), with a tighter 8px radius to match its smaller
     scale. Declared after the base padding/radius so it overrides them. */
  ${t=>t.$compact&&`
  padding: 5px 5px 5px var(--space-3);
  border-radius: var(--radius-md);`}
  transition: box-shadow var(--duration-slow) var(--ease-default),
              border-color var(--duration-slow) var(--ease-default);

  /* Active (focused) state: just the 1px border switching to the focus color —
     no thicker ring — so the bar stays a single hairline outline throughout. */
  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,pR=b.textarea`
  flex: 1;
  min-width: 0;
  /* Size a single line to exactly the 32px send button (space-8) so, with the
     bar's flex-end alignment, the resting input and button share one centered
     row; extra lines then grow upward while the button stays pinned at the foot.
     Compact bars center on the 24px xs button (space-6) instead. */
  padding: calc((${t=>t.$compact?"var(--space-6)":"var(--space-8)"} - 1lh) / 2) 0;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  /* Compact bars step the type down with the rest of the control (the 1lh
     padding math above follows the smaller line box automatically). */
  ${t=>t.$compact&&`
  font-size: var(--text-xs);`}

  &::placeholder { color: var(--color-content-inverse-tertiary); }
`,tf=b(Te)`
  flex-shrink: 0;
  border-radius: var(--radius-full);

  &[data-variant='primary'] {
    background: var(--color-bg-inverse-primary) !important;
    color: var(--color-content-inverse-primary) !important;
  }

  /* Disabled (empty draft) — drops to the neutral disabled surface + muted glyph
     rather than a dimmed inverse fill, so it reads clearly as not-yet-sendable. */
  &[data-variant='primary']:disabled {
    background: var(--color-bg-disabled) !important;
    color: var(--color-content-disabled) !important;
  }

  /* Float style — the processing/stop control reads as a quiet inline glyph
     rather than a solid send pill: transparent surface, content-primary icon. */
  ${t=>t.$float&&`
  &[data-variant='primary'] {
    background: transparent !important;
    color: var(--color-content-primary) !important;
  }`}
`,nf=450;function Jd(t,a){var R;const i=t.status==="needs_approval"||t.status==="recommended",l=i||t.status==="unresolved"||t.status==="monitoring",c=Zd[t.id],u=a===1&&!!c,p=u?c.prompt:p0[t.id]??t.recommendation,f=u?c.record:iS[t.id],m=f?Array.isArray(f)?f:[f]:[],y=t.status==="unresolved"?Jj:u?c.actions:t.actions,x=i&&(!u&&(((R=Kd[t.id])==null?void 0:R.length)??0)>1||eS(p)),_=x?tS:y[y.length-1],w=x?[]:y.slice(0,-1),$=i0(t);return{needsDecision:i,actionable:l,onFollowUp:u,followUp:c,prompt:p,records:m,primaryLabel:_,secondaryLabels:w,purple:$}}function rf({thread:t,stage:a,expanded:i,detachActionable:l,detachAnalyzing:c,detachTrail:u,onToggle:p,onClose:f,onDecide:m,onAction:y,onRefinement:x,onSaveWorkflow:_}){const[w,$]=g.useState(!1),[R,j]=g.useState(!1),{actionable:S,prompt:L,records:N,primaryLabel:C,purple:T}=Jd(t,a),E=t.status==="analyzing"&&!c,z=t.status==="resolved"||t.status==="auto_resolved",O=!l&&(S||T),U=z&&!u,Z=l?E:S||E||O,X=i&&(Z||U),V=Yd(t),ie=nS(t.id)||(X?"":t.assessment),ce=se=>{s0(se)?x(se):y(t.id,se)};return r.jsxs(SR,{"data-tone":V,$expanded:i,children:[r.jsxs(RR,{children:[r.jsxs(LR,{type:"button","aria-expanded":X,"aria-label":X?"Collapse case":"Expand case",onClick:p,children:[r.jsx(An,{size:"md",src:u0(t.id),name:Ls[t.id],alt:Ls[t.id]??""}),r.jsxs(MR,{children:[r.jsx($R,{children:rS(t)}),ie&&r.jsx(TR,{children:ie})]})]}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":f?"Close case and return to Live":X?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??p,children:f?r.jsx(Fs,{size:16}):X?r.jsx(zd,{size:16}):r.jsx(Kf,{size:16})})]}),X&&U&&r.jsx(IR,{children:r.jsx(AR,{children:r.jsx(fN,{milestones:f0(t)})})}),X&&Z&&r.jsxs(ER,{children:[S&&!l&&r.jsx(Qs,{children:L}),S&&!l&&N.length>0&&r.jsx(QR,{children:N.map((se,J)=>r.jsx(v0,{record:se},J))}),E&&r.jsx(L0,{role:"status","aria-live":"polite",children:r.jsx(vR,{thread:t,onDecide:m})}),O&&r.jsxs(eu,{children:[S&&C&&r.jsx(Vr,{variant:"primary",size:"sm",onClick:()=>ce(Rs),children:Rs}),S&&r.jsx(Vr,{variant:"tertiary",size:"sm",onClick:()=>x("No"),children:"No"}),S&&r.jsx(I0,{variant:"tertiary",size:"sm","data-selected":R||void 0,onClick:()=>{j(!0),x("Other")},children:"Other"}),T&&(w?r.jsx(Te,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Pt,{size:14}),children:"Saved"}):r.jsx(Te,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Jr,{size:14}),onClick:()=>{_(t),$(!0)},children:"Save as workflow"}))]})]})]})}function of({text:t,speed:a=16,onDone:i,instant:l=!1}){const[c,u]=g.useState(!1);return g.useEffect(()=>{u(!1)},[t]),g.useEffect(()=>{l&&(i==null||i())},[l]),l||c?r.jsx(r.Fragment,{children:t}):r.jsx(Xd,{text:t,speed:a,onDone:()=>{u(!0),i==null||i()}})}function fR({thread:t,stage:a,onAction:i,onRefinement:l,onSaveWorkflow:c,saved:u=!1,saveIntent:p=!1,onToggleSaveWorkflow:f,savedConversationally:m=!1,onSend:y,replying:x=!1,onStop:_}){const w=u||p,[$,R]=g.useState(!1),[j,S]=g.useState(!1),[L]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),[N,C]=g.useState(!1),[T,A]=g.useState(!1),E=g.useRef(null);g.useEffect(()=>{var P;T&&((P=E.current)==null||P.focus())},[T]);const z=u||m||N,{actionable:O,onFollowUp:U,prompt:Z,records:X,primaryLabel:V,purple:te}=Jd(t,a),ie=O&&!U?Kd[t.id]??l0(Z).map(P=>({label:P})):void 0,ce=t.status==="resolved"||t.status==="auto_resolved",se=te||ce,J=P=>{s0(P)?l(P):i(t.id,P)},W=O&&!(ie&&ie.length>0)&&X.length>0?X[0]:void 0;if(se&&!O){const P=g0[t.id],D=$||!P,k=u&&!m&&!N;return r.jsxs(lL,{$divided:!0,children:[P&&r.jsx(cL,{children:r.jsx(of,{text:P,onDone:()=>R(!0),instant:L})}),D&&!k&&r.jsxs(Bo,{$saved:z,"data-saved":z||void 0,children:[r.jsxs(A0,{children:[r.jsx(E0,{"aria-hidden":"true",children:r.jsx(Jr,{size:16})}),r.jsx(P0,{children:r.jsx(of,{text:"Want me to save this as a reusable workflow?",onDone:()=>S(!0),instant:L})})]}),j&&r.jsx(z0,{children:z?r.jsx(Vr,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(Pt,{size:14}),children:"Saved"}):r.jsx(Vr,{variant:"primary",size:"sm",onClick:()=>{C(!0),c(t)},children:"Save workflow"})})]}),D&&k&&r.jsx(S0,{})]})}return r.jsxs(NR,{"data-tone":Yd(t),children:[O&&r.jsxs(N0,{children:[r.jsx(Qs,{children:Z}),W&&r.jsx(R0,{children:r.jsx(An,{size:"md",src:Yo(W.avatarSeed),name:W.title,alt:W.title})})]}),ie&&ie.length>0?r.jsx(j0,{tasks:ie}):null,r.jsxs(eu,{children:[O&&V&&r.jsx(Vr,{variant:T?"secondary":"primary",size:"sm",onClick:()=>J(Rs),children:Rs}),O&&r.jsx(Vr,{variant:T?"secondary":"tertiary",size:"sm",onClick:()=>l("No"),children:"No"}),O&&r.jsx(I0,{variant:"tertiary",size:"sm","data-selected":T||void 0,onClick:()=>A(!0),children:"Other"}),O&&!U&&r.jsx(sL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":w,"data-on":w||void 0,leadingArtwork:w?r.jsx(Pt,{size:14}):r.jsx(Jr,{size:14}),onClick:()=>{u||f==null||f(t.id)},children:"Save as future workflow"})]}),O&&T&&r.jsx(iL,{children:r.jsx(C0,{ref:E,compact:!0,onSend:P=>y==null?void 0:y(P),working:x,onStop:_,placeholder:"Tell Ultron what to do…"})})]})}function j0({tasks:t,interactive:a=!0}){return r.jsx(XR,{children:t.map((i,l)=>r.jsx(mR,{task:i,first:l===0,last:l===t.length-1,interactive:a},l))})}function mR({task:t,first:a,last:i,interactive:l=!0}){const[c,u]=g.useState(!1),p=!!t.detail&&l;return r.jsxs(JR,{children:[r.jsx(eL,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(tL,{})}),r.jsxs(nL,{children:[r.jsxs(rL,{as:p?"button":"div",type:p?"button":void 0,$interactive:p,"aria-expanded":p?c:void 0,onClick:p?()=>u(f=>!f):void 0,children:[r.jsx($0,{children:t.label}),p&&r.jsx(oL,{"data-open":c||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:14})})]}),c&&p&&r.jsx(aL,{children:t.detail})]})]})}function gR({steps:t,completed:a}){const[i,l]=g.useState(a?t.length:1);g.useEffect(()=>{if(a){l(t.length);return}if(i>=t.length)return;const u=setTimeout(()=>l(p=>p+1),1600);return()=>clearTimeout(u)},[i,t.length,a]);const c=t.slice(0,i);return r.jsx(FR,{role:"status","aria-live":"polite",children:c.map((u,p)=>{const f=!a&&p===i-1,m=p===c.length-1;return r.jsxs(HR,{children:[r.jsxs(qR,{children:[r.jsx(ZR,{$done:!f,"aria-hidden":"true",children:f?r.jsx(KR,{children:r.jsx(Mt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(Pt,{size:16})}),!m&&r.jsx(UR,{})]}),r.jsxs(VR,{$last:m,children:[r.jsx(GR,{children:u.headline}),r.jsx(YR,{children:u.detail})]})]},p)})})}function vR({thread:t,onDecide:a,analyzed:i,hideDetail:l,hideTrigger:c}){const[u,p]=g.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(PR,{as:"button",type:"button",$interactive:!0,"aria-expanded":u,onClick:()=>p(f=>!f),children:[r.jsx(Mt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(OR,{children:[r.jsx(DR,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!l&&r.jsx(BR,{children:t.assessment})]}),r.jsx(zR,{"data-open":u||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:14})})]}),u&&r.jsx(gR,{steps:h0(t.id),completed:i}),!i&&!c&&r.jsx(M0,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})]})}function yR({thread:t,onDecide:a}){return r.jsx(M0,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})}function cd(t,a){return{icon:t.icon,headline:t.headline,blocks:t.detail||t.bullets?[{text:t.detail||void 0,bullets:t.bullets}]:void 0,progress:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,usage:m0(a,yS(t))}}function xR(t,a){const i=m0(a,["read","match","policy","credential","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:t.map(l=>`${l.headline} — ${l.detail}`)}],usage:i}}function wR(t,a){const i=f0(t),l=t.timeline.filter(_=>_.done).length,c=l>0?Math.min(l,i.length):i.length,u=[xR(h0(t.id),t.id),...i.slice(0,c)],p=u.length;if(a.length===0){const _=u.map(w=>({kind:"activity",milestone:w}));return(t.status==="in_progress"||t.status==="monitoring")&&(z1[t.id]??[]).map(w=>cd(w,t.id)).forEach(w=>_.push({kind:"activity",milestone:w})),{items:_,reasoningCount:p}}const f=Zd[t.id],m=[(z1[t.id]??[]).map(_=>cd(_,t.id)),((f==null?void 0:f.working)??[]).map(_=>cd(_,t.id))],y=_=>_===1&&f?f.prompt:p0[t.id]??t.recommendation,x=u.slice(0,p).map(_=>({kind:"activity",milestone:_}));return a.forEach((_,w)=>{x.push({kind:"question",text:y(w)}),x.push({kind:"message",text:_}),(m[w]??[]).forEach($=>x.push({kind:"activity",milestone:$})),x.push({kind:"reply",text:_S(w)})}),{items:x,reasoningCount:p}}function _R({thread:t,outbound:a=[],chat:i=[],replying:l=!1,analyzing:c=!1,actionCard:u,footSlot:p,onCompleteRun:f,saveWorkflowFlagged:m=!1}){const y=t.status==="in_progress"||t.status==="monitoring",x=t.status==="resolved"||t.status==="auto_resolved",{items:_,reasoningCount:w}=wR(t,a),$=c||t.status==="in_progress",[R,j]=g.useState(c?Math.min(1,w):$?w:_.length),[S]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),L=a.length>0||y||x?_.length:w,N=t.status==="in_progress"&&a.length>0,[C,T]=g.useState(0);g.useEffect(()=>{T(0)},[R]),g.useEffect(()=>{if(R>=L)return;const K=_[R],re=_[R-1];if((K==null?void 0:K.kind)==="question"||(K==null?void 0:K.kind)==="message"){const he=setTimeout(()=>j(ve=>ve+1),0);return()=>clearTimeout(he)}if((K==null?void 0:K.kind)==="reply"){if(N)return;const he=setTimeout(()=>j(ve=>ve+1),nf);return()=>clearTimeout(he)}if(N&&(re==null?void 0:re.kind)!=="message")return;const fe=(re==null?void 0:re.kind)==="message"?nf:W1,we=setTimeout(()=>j(he=>he+1),fe);return()=>clearTimeout(we)},[R,L,N]),g.useEffect(()=>{if(!N)return;const K=re=>{var je;if(re.key!=="t"&&re.key!=="T"||re.metaKey||re.ctrlKey||re.altKey)return;const fe=re.target instanceof Element?re.target:null;if(fe&&fe.closest('input, textarea, [contenteditable="true"]'))return;const we=_[R-1],he=(we==null?void 0:we.kind)==="activity"?((je=we.milestone.progress)==null?void 0:je.length)??0:0;if((we==null?void 0:we.kind)==="activity"&&C<he-1){T(Se=>Se+1);return}const ve=_[R];(ve==null?void 0:ve.kind)==="activity"?(j(Se=>Se+1),T(0)):f==null||f()};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[N,R,C,f]);const A=_.slice(0,R),E=[];for(const K of A){if(K.kind==="question"){E.push({type:"question",text:K.text});continue}if(K.kind==="message"){E.push({type:"msg",text:K.text});continue}if(K.kind==="reply"){E.push({type:"reply",text:K.text});continue}const re=E[E.length-1];re&&re.type==="acts"?re.milestones.push(K.milestone):E.push({type:"acts",milestones:[K.milestone]})}const z=R<_.length,O=A.length>0&&A[A.length-1].kind==="activity",U=R>=L,[Z,X]=g.useState(!1);g.useEffect(()=>{if(!(U&&O&&(y||c)&&!x)){X(!1);return}X(!0);const K=setTimeout(()=>X(!1),W1);return()=>clearTimeout(K)},[U,O,R,y,c,x]);const V=(y||c)&&(z||Z)&&O;let te=-1;E.forEach((K,re)=>{K.type==="acts"&&(te=re)});const ie=[];for(const K of _){if(K.kind!=="activity"){ie.push({type:"other"});continue}const re=ie[ie.length-1];re&&re.type==="acts"?re.milestones.push(K.milestone):ie.push({type:"acts",milestones:[K.milestone]})}let ce=-1;ie.forEach((K,re)=>{K.type==="acts"&&(ce=re)});const se=E.findIndex(K=>K.type==="acts"),J=(K,re,fe=re)=>{const we=E[K],he=(c||t.status==="in_progress")&&K===ce,ve=ie[K],je=he&&ve&&ve.type==="acts"?ve.milestones:we.milestones,Se=he?we.milestones.length-1:void 0;return r.jsx(x0,{milestones:je,focusIndex:Se,focusBeat:he&&N?C:void 0,typingIndex:K===ce&&V?we.milestones.length-1:void 0,collapsed:K<te,hideActions:fe,running:he,showConnectors:K!==se,reasoning:K===se,animateIn:!re&&!S})},W=[];for(let K=0;K<E.length;K++){const re=E[K];if(re.type==="question"){W.push({kind:"question",text:re.text});continue}if(re.type==="msg"){W.push({kind:"msg",text:re.text});continue}if(re.type==="reply"){W.push({kind:"response",gi:-1,text:re.text});continue}const fe=E[K+1];fe&&fe.type==="reply"?(W.push({kind:"response",gi:K,text:fe.text}),K++):W.push({kind:"acts",gi:K})}const D=(c||t.status==="in_progress")&&te>=0||l,k=A.length>0,I=l||y,Q=(()=>{for(let K=W.length-1;K>=0;K--){const re=W[K];if(re.kind==="acts"||re.kind==="response"&&re.gi>=0)return K}return-1})(),ne=W.findIndex(K=>K.kind==="question"),G=ne===se+1?ne:-1,ue=K=>K.kind==="acts"?Tn(E[K.gi].milestones):K.kind==="response"?Tn(K.gi>=0?E[K.gi].milestones:[]):Tn([]);return r.jsxs(r.Fragment,{children:[W.map((K,re)=>{var ve,je;const fe=re===Q?u:null;if(K.kind==="question"){if(re===G)return null;const Se=W[re-1],Ae=!!Se&&(Se.kind==="acts"||Se.kind==="response")&&re-1!==Q,Be=re===ne;return r.jsxs(ud,{children:[Be?r.jsx(af,{thread:t,saveWorkflowFlagged:m}):r.jsx(CR,{text:K.text,animate:!S}),Ae&&r.jsx(Po,{time:ue(Se)})]},`q${re}`)}if(K.kind==="msg")return r.jsx(jR,{messages:[K.text],animate:!S},`m${re}`);if(K.kind==="acts"){const Se=E[K.gi].milestones,Ae=((ve=W[re+1])==null?void 0:ve.kind)==="question",Be=J(K.gi,!1,!!fe||Ae),Fe=re===se,Ve=fe||(Fe&&re+1===G?r.jsx(af,{thread:t,saveWorkflowFlagged:m}):null);return Fe&&Ve?r.jsxs(bL,{children:[Be,Ve,r.jsx(Po,{time:Tn(Se)})]},`a${re}`):r.jsxs(g.Fragment,{children:[Be,fe&&r.jsxs(ud,{children:[fe,r.jsx(Po,{time:Tn(Se)})]})]},`a${re}`)}const we=K.gi>=0,he=we?E[K.gi].milestones:[];return r.jsxs(g.Fragment,{children:[r.jsx(Nd,{activity:we?J(K.gi,!0):void 0,text:K.text,feedbackTime:fe||((je=W[re+1])==null?void 0:je.kind)==="question"?void 0:Tn(he),showMark:!1,animateIn:!1}),fe&&r.jsxs(ud,{children:[fe,r.jsx(Po,{time:Tn(he)})]})]},`resp${re}`)}),r.jsx(bR,{messages:i,replying:l}),p&&Es.createPortal(k?r.jsxs(vL,{role:I?"status":"img","aria-label":l?"Ultron is replying":D?"Ultron is working":"Ultron",children:[r.jsxs(wL,{"aria-hidden":"true",children:[r.jsx(sf,{$show:D,children:r.jsx(Mt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(sf,{$show:!D,children:r.jsx(Mt,{mark:"magnetic2d",size:24,tone:"auto",state:I?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),D&&r.jsx(xL,{children:l?"Replying…":r.jsx(vN,{})})]}):null,p),Q<0&&u]})}function Nd({activity:t,text:a,body:i,feedbackTime:l,active:c=!1,showMark:u=!0,animateIn:p=!0}){const f=!!(t||i||l);return r.jsxs(_L,{children:[f&&r.jsxs(kL,{$animate:p,children:[t,i,l&&r.jsx(Po,{time:l})]}),u&&r.jsx(CL,{$animate:p,role:c?"status":"img","aria-label":c?"Ultron is working":"Ultron",children:r.jsx(Mt,{mark:"magnetic2d",size:24,tone:"auto",state:c?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function dd(){return[{icon:"clock",headline:"Reviewed your message"}]}function bR({messages:t,replying:a=!1}){return!t.length&&!a?null:r.jsx(gL,{children:t.map((i,l)=>i.role==="operator"?r.jsx(O0,{children:r.jsx(B0,{children:r.jsx(F0,{children:i.text})})},l):i.kind==="workflow_saved"?r.jsx(Nd,{body:r.jsx(kR,{}),feedbackTime:Tn(dd()),showMark:!1},l):r.jsx(Nd,{activity:r.jsx(x0,{milestones:dd(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:Tn(dd()),showMark:!1},l))})}function kR(){return r.jsx(S0,{})}function S0(){return r.jsxs(Bo,{children:[r.jsxs(A0,{children:[r.jsx(E0,{"aria-hidden":"true",children:r.jsx(Jr,{size:16})}),r.jsx(P0,{children:"Workflow saved for future use."})]}),r.jsx(z0,{children:r.jsx(Vr,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(Fs,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function CR({text:t,animate:a=!0}){return r.jsx(uL,{$animate:a,children:t})}function af({thread:t,saveWorkflowFlagged:a=!1}){const{prompt:i,records:l}=Jd(t,0),c=Kd[t.id]??l0(i).map(p=>({label:p})),u=!(c&&c.length>0)&&l.length>0?l[0]:void 0;return r.jsxs(hL,{"data-tone":Yd(t),children:[r.jsxs(N0,{children:[r.jsx(Qs,{children:i}),a?r.jsx(_r,{content:"Saved as workflow",children:r.jsx(pL,{"aria-label":"Saved as workflow",children:r.jsx(Jr,{size:18})})}):u&&r.jsx(R0,{children:r.jsx(An,{size:"md",src:Yo(u.avatarSeed),name:u.title,alt:u.title})})]}),c&&c.length>0?r.jsx(j0,{tasks:c,interactive:!1}):null]})}function jR({messages:t,animate:a=!0}){return t.length?r.jsx(fL,{children:t.map((i,l)=>r.jsx(O0,{children:r.jsx(B0,{$animate:a,children:r.jsx(F0,{children:i})})},l))}):null}const SR=b.div`
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
`,NR=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4) var(--space-4);
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
`,N0=b.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,R0=b.span`
  flex-shrink: 0;
  display: inline-flex;
`,RR=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-2) 0;
`,LR=b.button`
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
`,MR=b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,$R=b.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,TR=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,IR=b.div`
  overflow: hidden;
`,AR=b.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,ER=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,L0=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,PR=b.div`
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
`,zR=b.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;b(L0)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const OR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,DR=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,BR=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,FR=b.div`
  display: flex;
  flex-direction: column;
`,WR=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,HR=b.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${WR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,qR=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,UR=b.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,VR=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
`,GR=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,YR=b.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,ZR=b.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${t=>t.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,KR=b.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,M0=b(Te)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,QR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,XR=b.div`
  display: flex;
  flex-direction: column;
`,Ts="var(--space-8)",JR=b.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,eL=b.div`
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
  &[data-first]::before { top: calc(${Ts} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Ts} / 2); }
  &[data-first][data-last]::before { display: none; }
`,tL=b.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Ts} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,nL=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,rL=b.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Ts};
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,$0=b.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,oL=b.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,aL=b.p`
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
`,Qs=b.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,T0=De`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,eu=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${T0} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,iL=b.div`
  animation: ${T0} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Vr=b(Te)`
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
`,I0=b(Te)`
  border-radius: var(--radius-full);
  border-style: dashed;
  color: var(--color-content-secondary);
  padding-left: var(--space-3);
  padding-right: var(--space-3);

  /* Selected: settles to an outlined chip — primary surface, selected border,
     primary content — so the picked "Other" reads as the active choice without
     the heavy inverse fill. */
  &[data-selected] {
    border-style: solid;
    background: var(--color-bg-primary) !important;
    color: var(--color-content-primary) !important;
    border-color: var(--color-border-selected);
  }
`,sL=b(Te)`
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
`,lL=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${t=>t.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,cL=b.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Bo=b.div`
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

  ${t=>!t.$saved&&zt`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,A0=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,E0=b.span`
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
  ${Bo}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Bo}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Bo}[data-saved] & { color: var(--color-content-disabled); }
`,P0=b.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Bo}[data-saved] & { color: var(--color-content-disabled); }
`,z0=b(eu)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,dL=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,uL=b.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${dL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hL=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Tight lead between the settled prompt and its plan steps — the answered card
     reads as a compact record, so the heading sits close to its steps. */
  gap: var(--space-2);
  /* Tighter vertical padding (12px top and bottom) now the action buttons are
     gone, so the settled record doesn't trail dead space around its content. */
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: none;
  /* No entrance animation — the card was already on screen as the live decision,
     so answering settles it in place rather than popping it back in. */

  /* Dim the prompt and plan labels to the settled/disabled tone. */
  ${Qs} { color: var(--color-content-disabled); }
  ${$0} { color: var(--color-content-disabled); }
`,pL=b.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,fL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,O0=b.div`
  display: flex;
  justify-content: flex-end;
`,tu=De`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,D0=De`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,mL=De`
  from { opacity: 0; }
  to   { opacity: 1; }
`,B0=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${tu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,F0=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,gL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;b.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const vL=b.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${D0} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,yL=De`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,xL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${yL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,wL=b.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,sf=b.span`
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
`,_L=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${Ks}
`,ud=b.div`
  display: contents;
  ${Ks}
`,bL=b.div`
  display: flex;
  flex-direction: column;
  ${Ks}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,kL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${mL} 380ms var(--ease-out) 160ms both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,CL=b.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${D0} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${tu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${tu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const jL={"Coverage Recovery":Eo,"Fill Optimization":Eo,Recruiting:Eo,Users:Eo,Attendance:qr,"Attendance Recovery":qr,"Time Off":qr,Scheduling:qr,Compliance:Bs,Onboarding:Ur,"Payroll Operations":Hf,Invoicing:zo,Reporting:t1,"Marketplace Optimization":t1,Engagement:Cs,"Autonomous Operations":Os},SL=t=>jL[t]??Os,lf=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],NL=2800,RL=200,LL=6,ML=2200,Ba=520;function $L({onDetectRisk:t}){const[a,i]=g.useState(0),l=g.useRef(t);l.current=t;const c=g.useRef(new Set),[u,p]=g.useState(!1),f=g.useRef(null);g.useEffect(()=>{const C=setInterval(()=>i(T=>(T+1)%lf.length),NL);return()=>clearInterval(C)},[]);const m=Math.min(LL,vs.length),[y,x]=g.useState([]),_=g.useRef(0),w=g.useRef(vs.filter(C=>!C.risk)),$=g.useRef(vs.filter(C=>C.risk)),R=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),j=()=>5+Math.floor(Math.random()*5),S=()=>{const C=R.current,T=$.current;if(T.length>0&&C.sinceRisk>=C.gap)return C.sinceRisk=0,C.gap=j(),T[C.risk++%T.length];C.sinceRisk+=1;const A=w.current;return A.length>0?A[C.routine++%A.length]:T[C.risk++%T.length]},L=C=>C.risk?"risk":Math.random()<.28?"action":"none",N=g.useRef(null);return g.useEffect(()=>{if(vs.length===0){x([]);return}R.current={routine:0,risk:0,sinceRisk:0,gap:j()},_.current=0;const C=Array.from({length:m},()=>{const E=S();return{key:_.current++,event:E,phase:"in",outcome:L(E),resolved:!0}});if(C.length>0){const E=C[C.length-1];E.resolved=!1,N.current={key:E.key,event:E.event,outcome:E.outcome}}else N.current=null;x(C);const T=[],A=setInterval(()=>{var Z;const E=S(),z=_.current++,O=L(E),U=N.current;U&&U.outcome==="risk"&&(p(!0),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>p(!1),2800),c.current.has(U.event.id)||(c.current.add(U.event.id),(Z=l.current)==null||Z.call(l,U.event))),N.current={key:z,event:E,outcome:O},x(X=>{const V=X.filter(ce=>ce.phase!=="leaving"),te=V.length>=m?V[0].key:null;return[...X.map(ce=>ce.key===te?{...ce,phase:"leaving"}:U&&ce.key===U.key&&!ce.resolved?{...ce,resolved:!0}:ce),{key:z,event:E,phase:"entering",outcome:O,resolved:!1}]}),T.push(setTimeout(()=>{x(X=>X.map(V=>V.key===z?{...V,phase:"in"}:V))},40)),T.push(setTimeout(()=>{x(X=>X.filter(V=>V.phase!=="leaving"))},Ba))},ML);return()=>{clearInterval(A),T.forEach(clearTimeout),f.current&&clearTimeout(f.current)}},[m]),r.jsxs(TL,{children:[r.jsxs(IL,{children:[r.jsx(AL,{children:r.jsx(Mt,{mark:"circle",size:RL,tone:"auto",state:"active",coreGradient:u,"aria-label":"Ultron"})}),r.jsx(EL,{children:"Ultron"}),r.jsx(PL,{role:"status","aria-live":"polite",children:r.jsxs(OL,{children:[r.jsx(DL,{children:lf[a]}),r.jsxs(BL,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},a)})]}),y.length>0&&r.jsx(FL,{"aria-label":"Live event feed",children:y.map(C=>{const T=SL(C.event.capability);return r.jsx(WL,{"data-phase":C.phase,"aria-hidden":C.phase==="leaving"||void 0,children:r.jsx(HL,{children:r.jsxs(qL,{"data-outcome":C.resolved?C.outcome:"pending",children:[r.jsxs(UL,{children:[r.jsx(VL,{"aria-hidden":"true",children:r.jsx(T,{size:16})}),r.jsxs(GL,{children:[r.jsx(XL,{children:C.event.capability}),r.jsx(JL,{children:C.event.title})]})]}),r.jsx(YL,{children:C.resolved?C.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx(Mt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(ZL,{children:"Risk detected"})]}):C.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx(Mt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(QL,{children:"Action required"})]}):r.jsx(KL,{children:"No action needed"}):r.jsx(Mt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},C.key)})})]})}const TL=b.div`
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
`,W0=De`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,IL=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${W0} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,AL=b.div`
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
`,EL=b.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,PL=b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,zL=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,OL=b.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${zL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,DL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,H0=De`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,BL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${H0} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,FL=b.div`
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
  animation: ${W0} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,WL=b.div`
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
`,HL=b.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,qL=b.div`
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
`,UL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,VL=b.span`
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
`,GL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,YL=b.div`
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
    animation: ${H0} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const ZL=b.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,KL=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,QL=b.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,XL=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,JL=b.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,eM={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},cf={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},tM=["new","working","done"],nM=280;function rM({threads:t,stageById:a,section:i,analyzedIds:l,outboundByThread:c,chatByThread:u,selectedId:p,onDecide:f,onAction:m,onCompleteRun:y,onRefinement:x,onSaveWorkflow:_,pendingWorkflowIds:w,onToggleSaveWorkflow:$,savedWorkflowIds:R,onSend:j,replyingIds:S,onStop:L,onClose:N,onDetectRisk:C}){const[T,A]=g.useState(!1),E=()=>{T||(A(!0),window.setTimeout(()=>{A(!1),N()},nM))},z=(G,ue)=>(G.t.status==="analyzing"?1:0)-(ue.t.status==="analyzing"?1:0)||Ns[G.t.severity]-Ns[ue.t.severity]||G.index-ue.index,O=t.map((G,ue)=>({t:G,index:ue})).filter(({t:G})=>eM[i].includes(G.status)).sort(z).map(({t:G})=>G.id),[U,Z]=g.useState(()=>p??null),X=g.useRef({}),V=g.useRef(null),te=G=>{var ue;G==="Other"&&((ue=V.current)==null||ue.focus()),x(G)},ie=g.useRef(null),ce=g.useRef(null),[se,J]=g.useState(null),W=g.useRef(void 0);g.useEffect(()=>{var G;if(W.current===void 0){W.current=p;return}!p||p===W.current||(W.current=p,Z(p),(G=X.current[p])==null||G.scrollIntoView({behavior:"smooth",block:"start"}))},[p]);const P=tM.includes(i),D=P?p&&O.includes(p)?p:O[0]??null:null;g.useEffect(()=>{var Be;const G=ie.current,ue=ce.current;if(!G||!ue)return;const re=((Be=window.matchMedia)==null?void 0:Be.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",fe=160;let we=!0,he=G.scrollHeight;const ve=()=>{we=G.scrollHeight-G.scrollTop-G.clientHeight<=fe};G.addEventListener("scroll",ve,{passive:!0});let je=0;const Se=()=>{je=performance.now()};G.addEventListener("pointerdown",Se,{passive:!0});const Ae=new ResizeObserver(()=>{const Fe=G.scrollHeight,Ve=performance.now()-je<500;Fe>he+1&&we&&!Ve&&G.scrollTo({top:Fe,behavior:re}),he=Fe});return Ae.observe(ue),()=>{G.removeEventListener("scroll",ve),G.removeEventListener("pointerdown",Se),Ae.disconnect()}},[D,i]),g.useEffect(()=>{if(!P||!D)return;const G=ie.current;if(!G)return;const ue=()=>G.scrollTo({top:G.scrollHeight,behavior:"auto"}),K=requestAnimationFrame(ue),re=[80,240,480].map(fe=>window.setTimeout(ue,fe));return()=>{cancelAnimationFrame(K),re.forEach(clearTimeout)}},[D,P]);const k=D?t.find(G=>G.id===D)??null:null,I=!!k&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(k.status)||i0(k)),Q=I&&k?k:null,ne=!(I&&k&&["needs_approval","recommended","unresolved","monitoring"].includes(k.status))||!!(k!=null&&k.analysisResult);return i==="live"?r.jsx(df,{$static:!0,children:r.jsx($L,{onDetectRisk:C})},"live"):r.jsxs(df,{$closing:T,children:[r.jsx(iM,{ref:ie,children:P?r.jsx(uf,{ref:ce,children:D===null?r.jsx(hf,{role:"status",children:cf[i]}):(()=>{const G=t.find(ve=>ve.id===D);if(!G)return null;const ue=G.status==="analyzing",K=G.status==="resolved"||G.status==="auto_resolved",re=G.status==="in_progress",fe=G.status==="needs_approval"||G.status==="recommended",we=G.status==="monitoring",he=G.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(uM,{children:r.jsx(rf,{thread:G,stage:a[G.id]??0,expanded:re?!1:ne,detachActionable:I,detachAnalyzing:ue,detachTrail:K||he,onToggle:()=>{},onClose:E,onDecide:f,onAction:m,onRefinement:te,onSaveWorkflow:_},G.id)}),(ue||fe||re||K||we||he)&&r.jsx(_R,{thread:G,outbound:c[G.id]??[],chat:u[G.id]??[],replying:S.includes(G.id),analyzing:ue,footSlot:se,onCompleteRun:()=>y(G.id),saveWorkflowFlagged:w.includes(G.id)||R.includes(G.id),actionCard:Q&&Q.id===G.id?r.jsx(fR,{thread:Q,stage:a[Q.id]??0,onAction:m,onRefinement:te,onSaveWorkflow:_,saveIntent:w.includes(Q.id),onToggleSaveWorkflow:$,saved:R.includes(Q.id),savedConversationally:(u[Q.id]??[]).some(ve=>ve.kind==="workflow_saved"),onSend:ve=>j(Q.id,ve),replying:S.includes(Q.id),onStop:()=>L(Q.id)},`action-${Q.id}`):void 0},G.id)]})})()}):r.jsx(uf,{ref:ce,children:O.length===0?r.jsx(hf,{role:"status",children:cf[i]}):O.map(G=>{const ue=t.find(K=>K.id===G);return ue?r.jsx(dM,{ref:K=>{X.current[G]=K},children:r.jsx(rf,{thread:ue,stage:a[G]??0,expanded:U===G,onToggle:()=>Z(K=>K===G?null:G),onDecide:f,onAction:m,onRefinement:x,onSaveWorkflow:_})},G):null})})}),P&&D&&k&&r.jsx(sM,{children:r.jsxs(lM,{children:[r.jsx(cM,{ref:J}),k.status==="analyzing"&&!l.includes(k.id)&&r.jsx(yR,{thread:k,onDecide:f}),r.jsx(C0,{ref:V,onSend:G=>j(D,G),working:S.includes(D),onStop:()=>L(D),placeholder:Xj(k.status,S.includes(D))},`composer-${D}`)]})})]},"feed")}const oM=De`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,aM=De`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,df=b.div`
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

  ${t=>!t.$static&&!t.$closing&&zt`
    animation: ${aM} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${t=>t.$closing&&zt`
    animation: ${oM} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,iM=b.div`
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
`,sM=b.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,lM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,cM=b.div`
  display: flex;
  &:empty { display: none; }
`,uf=b.div`
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
`,dM=b.div`
  scroll-margin-top: var(--space-5);
`,uM=b.div`
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
`,hf=b.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,pf=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],hM=2800;function pM(){const[t,a]=g.useState(0);return g.useEffect(()=>{const i=setInterval(()=>a(l=>(l+1)%pf.length),hM);return()=>clearInterval(i)},[]),r.jsx(fM,{children:r.jsx(mM,{children:r.jsxs(gM,{children:[r.jsx(vM,{children:"Ultron"}),r.jsx(yM,{role:"status","aria-live":"polite",children:r.jsxs(wM,{children:[r.jsx(_M,{children:pf[t]}),r.jsxs(kM,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},t)})]})})})}const fM=b.div`
  font-family: var(--font-sans);
`,mM=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,gM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,vM=b.span`
  min-width: 0;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,yM=b.div`
  display: flex;
  align-items: baseline;
  min-height: var(--space-4);
`,xM=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,wM=b.span`
  display: inline-flex;
  align-items: baseline;
  min-width: 0;
  animation: ${xM} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,_M=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,bM=De`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,kM=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${bM} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,CM=45;function jM({text:t,className:a}){const[i,l]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){l(t.length);return}l(0);let p=0;const f=setInterval(()=>{p+=1,l(p),p>=t.length&&clearInterval(f)},CM);return()=>clearInterval(f)},[t]);const c=i>=t.length;return r.jsxs(SM,{className:a,children:[t.slice(0,i),!c&&r.jsx(RM,{"aria-hidden":"true",children:"|"})]})}const SM=b.span`
  white-space: nowrap;
`,NM=De`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,RM=b.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${NM} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,hd=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function LM(){const t=g.useMemo(()=>["All",...Array.from(new Set(hd.map(c=>c.tag)))],[]),[a,i]=g.useState("All"),l=a==="All"?hd:hd.filter(c=>c.tag===a);return r.jsx(MM,{children:r.jsxs($M,{children:[r.jsxs(TM,{children:[r.jsx(Mt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(IM,{children:[r.jsx(AM,{children:"Memory"}),r.jsx(EM,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(PM,{role:"tablist","aria-label":"Filter memories by category",children:t.map(c=>r.jsx(zM,{type:"button",role:"tab","aria-selected":a===c,$active:a===c,onClick:()=>i(c),children:c},c))}),r.jsx(OM,{children:l.map((c,u)=>r.jsx(DM,{children:r.jsxs(BM,{children:[r.jsx(FM,{children:c.title}),r.jsx(WM,{children:c.detail})]})},u))})]})})}const MM=b.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,$M=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,TM=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,IM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,AM=b.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,EM=b.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,PM=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,zM=b.button`
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
`,OM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,DM=b.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,BM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,FM=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,WM=b.span`
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
`;const Rd=[{id:"employees",label:"Employees",icon:r.jsx(Eo,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx(qr,{size:16})},{id:"locations",label:"Locations",icon:r.jsx(qf,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(Ur,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(Bs,{size:16})}];b.div`
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
`;function HM({collectionId:t}){const a=Rd.find(i=>i.id===t)??Rd[0];return r.jsxs(qM,{children:[r.jsxs(UM,{children:[r.jsx(VM,{children:a.label}),r.jsx(Ja,{children:"Account database"})]}),r.jsxs(GM,{role:"status",children:[r.jsx(YM,{"aria-hidden":"true",children:r.jsx(Df,{size:24})}),r.jsxs(ZM,{children:[a.label," — demo stub"]}),r.jsxs(KM,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const qM=b.div`
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
`,UM=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,VM=b.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,GM=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,YM=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,ZM=b.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,KM=b.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function QM(t){const a=[t.activeId,t.secActiveId];return t.selectedPersonaId&&a.push("persona",t.selectedPersonaId),t.activePageId&&a.push("page",t.activePageId),"#"+a.map(encodeURIComponent).join("/")}function XM(t){const a=t.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(c=>{try{return decodeURIComponent(c)}catch{return c}}),l={};i[0]&&(l.activeId=i[0]),i[1]&&(l.secActiveId=i[1]);for(let c=2;c<i.length-1;c+=2){const u=i[c],p=i[c+1];u==="persona"?l.selectedPersonaId=p:u==="page"&&(l.activePageId=p)}return l}function JM(t,a){const i=g.useRef("");g.useEffect(()=>{const l=()=>{const u=XM(window.location.hash);u.activeId!==void 0&&a.setActiveId(u.activeId),u.secActiveId!==void 0&&a.setSecActiveId(u.secActiveId),a.setSelectedPersonaId(u.selectedPersonaId??null),a.setActivePageId(u.activePageId??null)};window.location.hash&&l();const c=()=>{window.location.hash!==i.current&&l()};return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),g.useEffect(()=>{const l=QM(t);l!==window.location.hash&&(i.current=l,window.history.replaceState(null,"",l))},[t.activeId,t.secActiveId,t.selectedPersonaId,t.activePageId])}const ff=[{id:"ultron",label:"Ultron",icon:r.jsx(Mt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(aC,{})},{id:"engaged",label:"Engaged",icon:r.jsx(iC,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(sC,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(lC,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(cC,{})}],mf=[{id:"apps",label:"Apps",icon:r.jsx(dC,{})}],gf=[{id:"docs",label:"Document Studio",icon:r.jsx(uC,{})},{id:"form",label:"Form",icon:r.jsx(hC,{})},{id:"tasks",label:"Tasks",icon:r.jsx(pC,{})},{id:"policy",label:"Policy",icon:r.jsx(fC,{}),activeIcon:r.jsx("img",{src:Dj,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(Jr,{}),activeIcon:r.jsx("img",{src:Bj,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(mC,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(gC,{})}],e$=b.button`
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
`,t$=De`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,n$=De`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,r$=De`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,o$=b.span`
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
      ${t$} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${n$} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${r$} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,a$={needs_attention:r.jsx(Wf,{size:16}),live:r.jsx(Mt,{mark:"lines",size:32,tone:"auto",state:"active"}),resolved:r.jsx(br,{size:16})},i$={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function s$(){const[t,a]=g.useState("ultron"),[i,l]=g.useState("home-overview"),[c,u]=g.useState(null),[p,f]=g.useState(null),[m,y]=g.useState("ultron"),[x,_]=g.useState("employees"),w=MS(),[$,R]=g.useState(!0),j=$?"live":w.selectedThread?i$[w.selectedThread.status]:"new";JM({activeId:t,secActiveId:i,selectedPersonaId:c,activePageId:p},{setActiveId:a,setSecActiveId:l,setSelectedPersonaId:u,setActivePageId:f});const S=A=>A.map(E=>({...E,isActive:E.id===t,onClick:E.id==="ultron"?()=>a("ultron"):void 0})),L=[{id:"memory",label:"Memory",icon:r.jsx(zs,{size:16}),isActive:m==="memory",onClick:()=>y("memory")},{id:"settings",label:"Settings",icon:r.jsx(Af,{size:16})}],N=r.jsx(o0,{children:m==="memory"?"Memory":m==="account"?"Account database":"Ultron"}),C=m==="account"?Rd.map(A=>({type:"single",item:{id:A.id,label:A.label,icon:A.icon,isActive:x===A.id,onClick:()=>_(A.id)}})):w.groups.flatMap(A=>{const E=A.id==="needs_attention"?"new":A.id==="resolved"?"done":"working",z={type:"group",group:{id:A.id,label:A.id==="needs_attention"?"New":A.label,icon:a$[A.id],trailingBadge:r.jsx(Ja,{children:A.threads.length}),defaultExpanded:!0,outlined:!1,maxVisible:A.id==="needs_attention"?5:void 0,children:A.threads.map(O=>({id:O.id,label:O.id.startsWith("detected_")?r.jsx(jM,{text:O.name}):O.name,icon:E==="new"?O.status==="analyzing"?r.jsx(Mt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx(Mt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):E==="working"?r.jsx(Mt,{mark:"lines",size:32,tone:"auto",state:O.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx(Mt,{mark:"pulse",size:32,tone:"auto",state:O.status==="unresolved"?"idle":"static",color:O.status==="unresolved"?"var(--color-orange-content-tertiary)":w.viewedIds.includes(O.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:m==="ultron"&&!$&&j===E&&w.selectedId===O.id,onClick:()=>{y("ultron"),R(!1),w.setSelectedId(O.id)},trailingSlot:w.savedWorkflowIds.includes(O.id)?r.jsx(_r,{content:"Saved as workflow",placement:"top",children:r.jsx(o$,{"aria-label":"Saved as workflow",children:r.jsx(Jr,{})})}):void 0}))}};return A.id==="resolved"?[{type:"divider",id:"done-divider"},z]:A.id==="live"?[{type:"divider",id:"working-divider"},z]:[z]}),T=[{id:"main",label:"Workspace",items:S(ff)},{id:"tools",label:"Tools",items:S(mf)},{id:"bottom",label:"Apps",items:S(gf)}];return r.jsx(Oj,{items:S(ff),toolItems:S(mf),bottomItems:S(gf),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:C,menuHeader:m==="ultron"?r.jsx(e$,{$active:$,onClick:()=>{y("ultron"),R(!0)},"aria-label":"Live — Ultron presence","aria-current":$?"page":void 0,children:r.jsx(pM,{})}):void 0,pageEntries:L,showSecondaryNav:!0,showTopNav:m!=="ultron",showSearch:!1,heading:N,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:t,secActiveId:i,activePageId:p,selectedPersonaId:c,moduleGroups:T,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:A=>{A==="ultron"&&a("ultron")},onSelectPersona:u},children:m==="memory"?r.jsx(LM,{}):m==="account"?r.jsx(HM,{collectionId:x}):r.jsx(rM,{threads:w.threads,stageById:w.stageById,section:j,analyzedIds:w.analyzedIds,outboundByThread:w.outboundByThread,chatByThread:w.chatByThread,selectedId:w.selectedId,onDecide:w.decide,onAction:w.commit,onCompleteRun:w.completeRun,onRefinement:w.refine,onSaveWorkflow:w.saveWorkflow,pendingWorkflowIds:w.pendingWorkflowIds,onToggleSaveWorkflow:w.toggleWorkflowSave,savedWorkflowIds:w.savedWorkflowIds,onSend:w.sendMessage,replyingIds:w.replyingIds,onStop:w.stopReply,onClose:()=>{y("ultron"),R(!0)},onDetectRisk:w.detectRisk})})}V2.createRoot(document.getElementById("root")).render(r.jsx(xr.StrictMode,{children:r.jsx(cw,{children:r.jsx(s$,{})})}));
