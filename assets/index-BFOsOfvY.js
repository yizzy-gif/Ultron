(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function _f(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pc={exports:{}},Ia={},zc={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function W2(){if(Bp)return $e;Bp=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function w(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,j={};function R(C,A,Q){this.props=C,this.context=A,this.refs=j,this.updater=Q||$}R.prototype.isReactComponent={},R.prototype.setState=function(C,A){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,A,"setState")},R.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function L(){}L.prototype=R.prototype;function S(C,A,Q){this.props=C,this.context=A,this.refs=j,this.updater=Q||$}var k=S.prototype=new L;k.constructor=S,N(k,R.prototype),k.isPureReactComponent=!0;var T=Array.isArray,I=Object.prototype.hasOwnProperty,E={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function O(C,A,Q){var ne,G={},ue=null,K=null;if(A!=null)for(ne in A.ref!==void 0&&(K=A.ref),A.key!==void 0&&(ue=""+A.key),A)I.call(A,ne)&&!z.hasOwnProperty(ne)&&(G[ne]=A[ne]);var re=arguments.length-2;if(re===1)G.children=Q;else if(1<re){for(var fe=Array(re),we=0;we<re;we++)fe[we]=arguments[we+2];G.children=fe}if(C&&C.defaultProps)for(ne in re=C.defaultProps,re)G[ne]===void 0&&(G[ne]=re[ne]);return{$$typeof:t,type:C,key:ue,ref:K,props:G,_owner:E.current}}function U(C,A){return{$$typeof:t,type:C.type,key:A,ref:C.ref,props:C.props,_owner:C._owner}}function Z(C){return typeof C=="object"&&C!==null&&C.$$typeof===t}function X(C){var A={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(Q){return A[Q]})}var V=/\/+/g;function te(C,A){return typeof C=="object"&&C!==null&&C.key!=null?X(""+C.key):A.toString(36)}function ie(C,A,Q,ne,G){var ue=typeof C;(ue==="undefined"||ue==="boolean")&&(C=null);var K=!1;if(C===null)K=!0;else switch(ue){case"string":case"number":K=!0;break;case"object":switch(C.$$typeof){case t:case a:K=!0}}if(K)return K=C,G=G(K),C=ne===""?"."+te(K,0):ne,T(G)?(Q="",C!=null&&(Q=C.replace(V,"$&/")+"/"),ie(G,A,Q,"",function(we){return we})):G!=null&&(Z(G)&&(G=U(G,Q+(!G.key||K&&K.key===G.key?"":(""+G.key).replace(V,"$&/")+"/")+C)),A.push(G)),1;if(K=0,ne=ne===""?".":ne+":",T(C))for(var re=0;re<C.length;re++){ue=C[re];var fe=ne+te(ue,re);K+=ie(ue,A,Q,fe,G)}else if(fe=w(C),typeof fe=="function")for(C=fe.call(C),re=0;!(ue=C.next()).done;)ue=ue.value,fe=ne+te(ue,re++),K+=ie(ue,A,Q,fe,G);else if(ue==="object")throw A=String(C),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return K}function ce(C,A,Q){if(C==null)return C;var ne=[],G=0;return ie(C,ne,"","",function(ue){return A.call(Q,ue,G++)}),ne}function se(C){if(C._status===-1){var A=C._result;A=A(),A.then(function(Q){(C._status===0||C._status===-1)&&(C._status=1,C._result=Q)},function(Q){(C._status===0||C._status===-1)&&(C._status=2,C._result=Q)}),C._status===-1&&(C._status=0,C._result=A)}if(C._status===1)return C._result.default;throw C._result}var J={current:null},W={transition:null},P={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:W,ReactCurrentOwner:E};function D(){throw Error("act(...) is not supported in production builds of React.")}return $e.Children={map:ce,forEach:function(C,A,Q){ce(C,function(){A.apply(this,arguments)},Q)},count:function(C){var A=0;return ce(C,function(){A++}),A},toArray:function(C){return ce(C,function(A){return A})||[]},only:function(C){if(!Z(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},$e.Component=R,$e.Fragment=i,$e.Profiler=c,$e.PureComponent=S,$e.StrictMode=l,$e.Suspense=m,$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,$e.act=D,$e.cloneElement=function(C,A,Q){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var ne=N({},C.props),G=C.key,ue=C.ref,K=C._owner;if(A!=null){if(A.ref!==void 0&&(ue=A.ref,K=E.current),A.key!==void 0&&(G=""+A.key),C.type&&C.type.defaultProps)var re=C.type.defaultProps;for(fe in A)I.call(A,fe)&&!z.hasOwnProperty(fe)&&(ne[fe]=A[fe]===void 0&&re!==void 0?re[fe]:A[fe])}var fe=arguments.length-2;if(fe===1)ne.children=Q;else if(1<fe){re=Array(fe);for(var we=0;we<fe;we++)re[we]=arguments[we+2];ne.children=re}return{$$typeof:t,type:C.type,key:G,ref:ue,props:ne,_owner:K}},$e.createContext=function(C){return C={$$typeof:p,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},$e.createElement=O,$e.createFactory=function(C){var A=O.bind(null,C);return A.type=C,A},$e.createRef=function(){return{current:null}},$e.forwardRef=function(C){return{$$typeof:f,render:C}},$e.isValidElement=Z,$e.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:se}},$e.memo=function(C,A){return{$$typeof:x,type:C,compare:A===void 0?null:A}},$e.startTransition=function(C){var A=W.transition;W.transition={};try{C()}finally{W.transition=A}},$e.unstable_act=D,$e.useCallback=function(C,A){return J.current.useCallback(C,A)},$e.useContext=function(C){return J.current.useContext(C)},$e.useDebugValue=function(){},$e.useDeferredValue=function(C){return J.current.useDeferredValue(C)},$e.useEffect=function(C,A){return J.current.useEffect(C,A)},$e.useId=function(){return J.current.useId()},$e.useImperativeHandle=function(C,A,Q){return J.current.useImperativeHandle(C,A,Q)},$e.useInsertionEffect=function(C,A){return J.current.useInsertionEffect(C,A)},$e.useLayoutEffect=function(C,A){return J.current.useLayoutEffect(C,A)},$e.useMemo=function(C,A){return J.current.useMemo(C,A)},$e.useReducer=function(C,A,Q){return J.current.useReducer(C,A,Q)},$e.useRef=function(C){return J.current.useRef(C)},$e.useState=function(C){return J.current.useState(C)},$e.useSyncExternalStore=function(C,A,Q){return J.current.useSyncExternalStore(C,A,Q)},$e.useTransition=function(){return J.current.useTransition()},$e.version="18.3.1",$e}var Fp;function Ld(){return Fp||(Fp=1,zc.exports=W2()),zc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function H2(){if(Wp)return Ia;Wp=1;var t=Ld(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,m,x){var y,_={},w=null,$=null;x!==void 0&&(w=""+x),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&($=m.ref);for(y in m)l.call(m,y)&&!u.hasOwnProperty(y)&&(_[y]=m[y]);if(f&&f.defaultProps)for(y in m=f.defaultProps,m)_[y]===void 0&&(_[y]=m[y]);return{$$typeof:a,type:f,key:w,ref:$,props:_,_owner:c.current}}return Ia.Fragment=i,Ia.jsx=p,Ia.jsxs=p,Ia}var Hp;function q2(){return Hp||(Hp=1,Pc.exports=H2()),Pc.exports}var r=q2(),g=Ld();const xr=_f(g);var ds={},Oc={exports:{}},Ht={},Dc={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function U2(){return qp||(qp=1,(function(t){function a(W,P){var D=W.length;W.push(P);e:for(;0<D;){var C=D-1>>>1,A=W[C];if(0<c(A,P))W[C]=P,W[D]=A,D=C;else break e}}function i(W){return W.length===0?null:W[0]}function l(W){if(W.length===0)return null;var P=W[0],D=W.pop();if(D!==P){W[0]=D;e:for(var C=0,A=W.length,Q=A>>>1;C<Q;){var ne=2*(C+1)-1,G=W[ne],ue=ne+1,K=W[ue];if(0>c(G,D))ue<A&&0>c(K,G)?(W[C]=K,W[ue]=D,C=ue):(W[C]=G,W[ne]=D,C=ne);else if(ue<A&&0>c(K,D))W[C]=K,W[ue]=D,C=ue;else break e}}return P}function c(W,P){var D=W.sortIndex-P.sortIndex;return D!==0?D:W.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var p=Date,f=p.now();t.unstable_now=function(){return p.now()-f}}var m=[],x=[],y=1,_=null,w=3,$=!1,N=!1,j=!1,R=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(W){for(var P=i(x);P!==null;){if(P.callback===null)l(x);else if(P.startTime<=W)l(x),P.sortIndex=P.expirationTime,a(m,P);else break;P=i(x)}}function T(W){if(j=!1,k(W),!N)if(i(m)!==null)N=!0,se(I);else{var P=i(x);P!==null&&J(T,P.startTime-W)}}function I(W,P){N=!1,j&&(j=!1,L(O),O=-1),$=!0;var D=w;try{for(k(P),_=i(m);_!==null&&(!(_.expirationTime>P)||W&&!X());){var C=_.callback;if(typeof C=="function"){_.callback=null,w=_.priorityLevel;var A=C(_.expirationTime<=P);P=t.unstable_now(),typeof A=="function"?_.callback=A:_===i(m)&&l(m),k(P)}else l(m);_=i(m)}if(_!==null)var Q=!0;else{var ne=i(x);ne!==null&&J(T,ne.startTime-P),Q=!1}return Q}finally{_=null,w=D,$=!1}}var E=!1,z=null,O=-1,U=5,Z=-1;function X(){return!(t.unstable_now()-Z<U)}function V(){if(z!==null){var W=t.unstable_now();Z=W;var P=!0;try{P=z(!0,W)}finally{P?te():(E=!1,z=null)}}else E=!1}var te;if(typeof S=="function")te=function(){S(V)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ce=ie.port2;ie.port1.onmessage=V,te=function(){ce.postMessage(null)}}else te=function(){R(V,0)};function se(W){z=W,E||(E=!0,te())}function J(W,P){O=R(function(){W(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){N||$||(N=!0,se(I))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return i(m)},t.unstable_next=function(W){switch(w){case 1:case 2:case 3:var P=3;break;default:P=w}var D=w;w=P;try{return W()}finally{w=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,P){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var D=w;w=W;try{return P()}finally{w=D}},t.unstable_scheduleCallback=function(W,P,D){var C=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?C+D:C):D=C,W){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=D+A,W={id:y++,callback:P,priorityLevel:W,startTime:D,expirationTime:A,sortIndex:-1},D>C?(W.sortIndex=D,a(x,W),i(m)===null&&W===i(x)&&(j?(L(O),O=-1):j=!0,J(T,D-C))):(W.sortIndex=A,a(m,W),N||$||(N=!0,se(I))),W},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(W){var P=w;return function(){var D=w;w=P;try{return W.apply(this,arguments)}finally{w=D}}}})(Bc)),Bc}var Up;function V2(){return Up||(Up=1,Dc.exports=U2()),Dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function G2(){if(Vp)return Ht;Vp=1;var t=Ld(),a=V2();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function u(e,n){p(e,n),p(e+"Capture",n)}function p(e,n){for(c[e]=n,e=0;e<n.length;e++)l.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function w(e){return m.call(_,e)?!0:m.call(y,e)?!1:x.test(e)?_[e]=!0:(y[e]=!0,!1)}function $(e,n,o,s){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,n,o,s){if(n===null||typeof n>"u"||$(e,n,o,s))return!0;if(s)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function j(e,n,o,s,d,h,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=v}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){R[e]=new j(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];R[n]=new j(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){R[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){R[e]=new j(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){R[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){R[e]=new j(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){R[e]=new j(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){R[e]=new j(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){R[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(L,S);R[n]=new j(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(L,S);R[n]=new j(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(L,S);R[n]=new j(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){R[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)}),R.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){R[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)});function k(e,n,o,s){var d=R.hasOwnProperty(n)?R[n]:null;(d!==null?d.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(N(n,o,d,s)&&(o=null),s||d===null?w(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):d.mustUseProperty?e[d.propertyName]=o===null?d.type===3?!1:"":o:(n=d.attributeName,s=d.attributeNamespace,o===null?e.removeAttribute(n):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,s?e.setAttributeNS(s,n,o):e.setAttribute(n,o))))}var T=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),E=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),X=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),W=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var D=Object.assign,C;function A(e){if(C===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+e}var Q=!1;function ne(e,n){if(!e||Q)return"";Q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Y){var s=Y}Reflect.construct(e,[],n)}else{try{n.call()}catch(Y){s=Y}e.call(n.prototype)}else{try{throw Error()}catch(Y){s=Y}e()}}catch(Y){if(Y&&s&&typeof Y.stack=="string"){for(var d=Y.stack.split(`
`),h=s.stack.split(`
`),v=d.length-1,M=h.length-1;1<=v&&0<=M&&d[v]!==h[M];)M--;for(;1<=v&&0<=M;v--,M--)if(d[v]!==h[M]){if(v!==1||M!==1)do if(v--,M--,0>M||d[v]!==h[M]){var B=`
`+d[v].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=v&&0<=M);break}}}finally{Q=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?A(e):""}function G(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=ne(e.type,!1),e;case 11:return e=ne(e.type.render,!1),e;case 1:return e=ne(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case E:return"Portal";case U:return"Profiler";case O:return"StrictMode";case te:return"Suspense";case ie:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X:return(e.displayName||"Context")+".Consumer";case Z:return(e._context.displayName||"Context")+".Provider";case V:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ce:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case se:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}function K(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(n);case 8:return n===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(e){var n=fe(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){s=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function he(e){e._valueTracker||(e._valueTracker=we(e))}function ve(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),s="";return e&&(s=fe(e)?e.checked?"true":"false":e.value),e=s,e!==o?(n.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Se(e,n){var o=n.checked;return D({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ie(e,n){var o=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;o=re(n.value!=null?n.value:o),e._wrapperState={initialChecked:s,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Be(e,n){n=n.checked,n!=null&&k(e,"checked",n,!1)}function Fe(e,n){Be(e,n);var o=re(n.value),s=n.type;if(o!=null)s==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ue(e,n.type,o):n.hasOwnProperty("defaultValue")&&Ue(e,n.type,re(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ve(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Ue(e,n,o){(n!=="number"||je(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var rt=Array.isArray;function Ze(e,n,o,s){if(e=e.options,n){n={};for(var d=0;d<o.length;d++)n["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=n.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&s&&(e[o].defaultSelected=!0)}else{for(o=""+re(o),n=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,s&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function Mt(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return D({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function We(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(rt(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:re(o)}}function Tt(e,n){var o=re(n.value),s=re(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),s!=null&&(e.defaultValue=""+s)}function bt(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function kn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cn(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?kn(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Zo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,s,d){MSApp.execUnsafeLocalFunction(function(){return e(n,o,s,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function no(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xs=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Xs.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jr[n]=jr[e]})});function ni(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||jr.hasOwnProperty(e)&&jr[e]?(""+n).trim():n+"px"}function Ne(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var s=o.indexOf("--")===0,d=ni(o,n[o],s);o==="float"&&(o="cssFloat"),s?e.setProperty(o,d):e[o]=d}}var Je=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lt(e,n){if(n){if(Je[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function At(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sr=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,ro=null,oo=null;function ru(e){if(e=xa(e)){if(typeof Qo!="function")throw Error(i(280));var n=e.stateNode;n&&(n=ji(n),Qo(e.stateNode,e.type,n))}}function ou(e){ro?oo?oo.push(e):oo=[e]:ro=e}function au(){if(ro){var e=ro,n=oo;if(oo=ro=null,ru(e),n)for(e=0;e<n.length;e++)ru(n[e])}}function iu(e,n){return e(n)}function su(){}var Js=!1;function lu(e,n,o){if(Js)return e(n,o);Js=!0;try{return iu(e,n,o)}finally{Js=!1,(ro!==null||oo!==null)&&(su(),au())}}function Xo(e,n){var o=e.stateNode;if(o===null)return null;var s=ji(o);if(s===null)return null;o=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var el=!1;if(f)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){el=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{el=!1}function Y0(e,n,o,s,d,h,v,M,B){var Y=Array.prototype.slice.call(arguments,3);try{n.apply(o,Y)}catch(ae){this.onError(ae)}}var ea=!1,ri=null,oi=!1,tl=null,Z0={onError:function(e){ea=!0,ri=e}};function K0(e,n,o,s,d,h,v,M,B){ea=!1,ri=null,Y0.apply(Z0,arguments)}function Q0(e,n,o,s,d,h,v,M,B){if(K0.apply(this,arguments),ea){if(ea){var Y=ri;ea=!1,ri=null}else throw Error(i(198));oi||(oi=!0,tl=Y)}}function Nr(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function cu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function du(e){if(Nr(e)!==e)throw Error(i(188))}function X0(e){var n=e.alternate;if(!n){if(n=Nr(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,s=n;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(s=d.return,s!==null){o=s;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return du(d),e;if(h===s)return du(d),n;h=h.sibling}throw Error(i(188))}if(o.return!==s.return)o=d,s=h;else{for(var v=!1,M=d.child;M;){if(M===o){v=!0,o=d,s=h;break}if(M===s){v=!0,s=d,o=h;break}M=M.sibling}if(!v){for(M=h.child;M;){if(M===o){v=!0,o=h,s=d;break}if(M===s){v=!0,s=h,o=d;break}M=M.sibling}if(!v)throw Error(i(189))}}if(o.alternate!==s)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function uu(e){return e=X0(e),e!==null?hu(e):null}function hu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=hu(e);if(n!==null)return n;e=e.sibling}return null}var pu=a.unstable_scheduleCallback,fu=a.unstable_cancelCallback,J0=a.unstable_shouldYield,eg=a.unstable_requestPaint,at=a.unstable_now,tg=a.unstable_getCurrentPriorityLevel,nl=a.unstable_ImmediatePriority,mu=a.unstable_UserBlockingPriority,ai=a.unstable_NormalPriority,ng=a.unstable_LowPriority,gu=a.unstable_IdlePriority,ii=null,jn=null;function rg(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:ig,og=Math.log,ag=Math.LN2;function ig(e){return e>>>=0,e===0?32:31-(og(e)/ag|0)|0}var si=64,li=4194304;function ta(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,n){var o=e.pendingLanes;if(o===0)return 0;var s=0,d=e.suspendedLanes,h=e.pingedLanes,v=o&268435455;if(v!==0){var M=v&~d;M!==0?s=ta(M):(h&=v,h!==0&&(s=ta(h)))}else v=o&~d,v!==0?s=ta(v):h!==0&&(s=ta(h));if(s===0)return 0;if(n!==0&&n!==s&&(n&d)===0&&(d=s&-s,h=n&-n,d>=h||d===16&&(h&4194240)!==0))return n;if((s&4)!==0&&(s|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)o=31-pn(n),d=1<<o,s|=e[o],n&=~d;return s}function sg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lg(e,n){for(var o=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes;0<h;){var v=31-pn(h),M=1<<v,B=d[v];B===-1?((M&o)===0||(M&s)!==0)&&(d[v]=sg(M,n)):B<=n&&(e.expiredLanes|=M),h&=~M}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vu(){var e=si;return si<<=1,(si&4194240)===0&&(si=64),e}function ol(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function na(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-pn(n),e[n]=o}function cg(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<o;){var d=31-pn(o),h=1<<d;n[d]=0,s[d]=-1,e[d]=-1,o&=~h}}function al(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var s=31-pn(o),d=1<<s;d&n|e[s]&n&&(e[s]|=n),o&=~d}}var He=0;function yu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var xu,il,wu,_u,bu,sl=!1,di=[],Zn=null,Kn=null,Qn=null,ra=new Map,oa=new Map,Xn=[],dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,n){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":ra.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(n.pointerId)}}function aa(e,n,o,s,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:o,eventSystemFlags:s,nativeEvent:h,targetContainers:[d]},n!==null&&(n=xa(n),n!==null&&il(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function ug(e,n,o,s,d){switch(n){case"focusin":return Zn=aa(Zn,e,n,o,s,d),!0;case"dragenter":return Kn=aa(Kn,e,n,o,s,d),!0;case"mouseover":return Qn=aa(Qn,e,n,o,s,d),!0;case"pointerover":var h=d.pointerId;return ra.set(h,aa(ra.get(h)||null,e,n,o,s,d)),!0;case"gotpointercapture":return h=d.pointerId,oa.set(h,aa(oa.get(h)||null,e,n,o,s,d)),!0}return!1}function Cu(e){var n=Rr(e.target);if(n!==null){var o=Nr(n);if(o!==null){if(n=o.tag,n===13){if(n=cu(o),n!==null){e.blockedOn=n,bu(e.priority,function(){wu(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=cl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var s=new o.constructor(o.type,o);Sr=s,o.target.dispatchEvent(s),Sr=null}else return n=xa(o),n!==null&&il(n),e.blockedOn=o,!1;n.shift()}return!0}function ju(e,n,o){ui(e)&&o.delete(n)}function hg(){sl=!1,Zn!==null&&ui(Zn)&&(Zn=null),Kn!==null&&ui(Kn)&&(Kn=null),Qn!==null&&ui(Qn)&&(Qn=null),ra.forEach(ju),oa.forEach(ju)}function ia(e,n){e.blockedOn===n&&(e.blockedOn=null,sl||(sl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,hg)))}function sa(e){function n(d){return ia(d,e)}if(0<di.length){ia(di[0],e);for(var o=1;o<di.length;o++){var s=di[o];s.blockedOn===e&&(s.blockedOn=null)}}for(Zn!==null&&ia(Zn,e),Kn!==null&&ia(Kn,e),Qn!==null&&ia(Qn,e),ra.forEach(n),oa.forEach(n),o=0;o<Xn.length;o++)s=Xn[o],s.blockedOn===e&&(s.blockedOn=null);for(;0<Xn.length&&(o=Xn[0],o.blockedOn===null);)Cu(o),o.blockedOn===null&&Xn.shift()}var ao=T.ReactCurrentBatchConfig,hi=!0;function pg(e,n,o,s){var d=He,h=ao.transition;ao.transition=null;try{He=1,ll(e,n,o,s)}finally{He=d,ao.transition=h}}function fg(e,n,o,s){var d=He,h=ao.transition;ao.transition=null;try{He=4,ll(e,n,o,s)}finally{He=d,ao.transition=h}}function ll(e,n,o,s){if(hi){var d=cl(e,n,o,s);if(d===null)Sl(e,n,s,pi,o),ku(e,s);else if(ug(d,e,n,o,s))s.stopPropagation();else if(ku(e,s),n&4&&-1<dg.indexOf(e)){for(;d!==null;){var h=xa(d);if(h!==null&&xu(h),h=cl(e,n,o,s),h===null&&Sl(e,n,s,pi,o),h===d)break;d=h}d!==null&&s.stopPropagation()}else Sl(e,n,s,null,o)}}var pi=null;function cl(e,n,o,s){if(pi=null,e=Ko(s),e=Rr(e),e!==null)if(n=Nr(e),n===null)e=null;else if(o=n.tag,o===13){if(e=cu(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return pi=e,null}function Su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tg()){case nl:return 1;case mu:return 4;case ai:case ng:return 16;case gu:return 536870912;default:return 16}default:return 16}}var Jn=null,dl=null,fi=null;function Nu(){if(fi)return fi;var e,n=dl,o=n.length,s,d="value"in Jn?Jn.value:Jn.textContent,h=d.length;for(e=0;e<o&&n[e]===d[e];e++);var v=o-e;for(s=1;s<=v&&n[o-s]===d[h-s];s++);return fi=d.slice(e,1<s?1-s:void 0)}function mi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function Ru(){return!1}function Yt(e){function n(o,s,d,h,v){this._reactName=o,this._targetInst=d,this.type=s,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var M in e)e.hasOwnProperty(M)&&(o=e[M],this[M]=o?o(h):h[M]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?gi:Ru,this.isPropagationStopped=Ru,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),n}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Yt(io),la=D({},io,{view:0,detail:0}),mg=Yt(la),hl,pl,ca,vi=D({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ca&&(ca&&e.type==="mousemove"?(hl=e.screenX-ca.screenX,pl=e.screenY-ca.screenY):pl=hl=0,ca=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Lu=Yt(vi),gg=D({},vi,{dataTransfer:0}),vg=Yt(gg),yg=D({},la,{relatedTarget:0}),fl=Yt(yg),xg=D({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),wg=Yt(xg),_g=D({},io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bg=Yt(_g),kg=D({},io,{data:0}),$u=Yt(kg),Cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sg[e])?!!n[e]:!1}function ml(){return Ng}var Rg=D({},la,{key:function(e){if(e.key){var n=Cg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lg=Yt(Rg),$g=D({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=Yt($g),Mg=D({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),Tg=Yt(Mg),Ag=D({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=Yt(Ag),Eg=D({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pg=Yt(Eg),zg=[9,13,27,32],gl=f&&"CompositionEvent"in window,da=null;f&&"documentMode"in document&&(da=document.documentMode);var Og=f&&"TextEvent"in window&&!da,Tu=f&&(!gl||da&&8<da&&11>=da),Au=" ",Iu=!1;function Eu(e,n){switch(e){case"keyup":return zg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var so=!1;function Dg(e,n){switch(e){case"compositionend":return Pu(n);case"keypress":return n.which!==32?null:(Iu=!0,Au);case"textInput":return e=n.data,e===Au&&Iu?null:e;default:return null}}function Bg(e,n){if(so)return e==="compositionend"||!gl&&Eu(e,n)?(e=Nu(),fi=dl=Jn=null,so=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Tu&&n.locale!=="ko"?null:n.data;default:return null}}var Fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fg[e.type]:n==="textarea"}function Ou(e,n,o,s){ou(s),n=bi(n,"onChange"),0<n.length&&(o=new ul("onChange","change",null,o,s),e.push({event:o,listeners:n}))}var ua=null,ha=null;function Wg(e){nh(e,0)}function yi(e){var n=po(e);if(ve(n))return e}function Hg(e,n){if(e==="change")return n}var Du=!1;if(f){var vl;if(f){var yl="oninput"in document;if(!yl){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),yl=typeof Bu.oninput=="function"}vl=yl}else vl=!1;Du=vl&&(!document.documentMode||9<document.documentMode)}function Fu(){ua&&(ua.detachEvent("onpropertychange",Wu),ha=ua=null)}function Wu(e){if(e.propertyName==="value"&&yi(ha)){var n=[];Ou(n,ha,e,Ko(e)),lu(Wg,n)}}function qg(e,n,o){e==="focusin"?(Fu(),ua=n,ha=o,ua.attachEvent("onpropertychange",Wu)):e==="focusout"&&Fu()}function Ug(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(ha)}function Vg(e,n){if(e==="click")return yi(n)}function Gg(e,n){if(e==="input"||e==="change")return yi(n)}function Yg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:Yg;function pa(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),s=Object.keys(n);if(o.length!==s.length)return!1;for(s=0;s<o.length;s++){var d=o[s];if(!m.call(n,d)||!fn(e[d],n[d]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qu(e,n){var o=Hu(e);e=0;for(var s;o;){if(o.nodeType===3){if(s=e+o.textContent.length,e<=n&&s>=n)return{node:o,offset:n-e};e=s}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Hu(o)}}function Uu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Uu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vu(){for(var e=window,n=je();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=je(e.document)}return n}function xl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zg(e){var n=Vu(),o=e.focusedElem,s=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&Uu(o.ownerDocument.documentElement,o)){if(s!==null&&xl(o)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=o.textContent.length,h=Math.min(s.start,d);s=s.end===void 0?h:Math.min(s.end,d),!e.extend&&h>s&&(d=s,s=h,h=d),d=qu(o,h);var v=qu(o,s);d&&v&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),h>s?(e.addRange(n),e.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kg=f&&"documentMode"in document&&11>=document.documentMode,lo=null,wl=null,fa=null,_l=!1;function Gu(e,n,o){var s=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_l||lo==null||lo!==je(s)||(s=lo,"selectionStart"in s&&xl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),fa&&pa(fa,s)||(fa=s,s=bi(wl,"onSelect"),0<s.length&&(n=new ul("onSelect","select",null,n,o),e.push({event:n,listeners:s}),n.target=lo)))}function xi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var co={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionend:xi("Transition","TransitionEnd")},bl={},Yu={};f&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function wi(e){if(bl[e])return bl[e];if(!co[e])return e;var n=co[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Yu)return bl[e]=n[o];return e}var Zu=wi("animationend"),Ku=wi("animationiteration"),Qu=wi("animationstart"),Xu=wi("transitionend"),Ju=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,n){Ju.set(e,n),u(n,[e])}for(var kl=0;kl<eh.length;kl++){var Cl=eh[kl],Qg=Cl.toLowerCase(),Xg=Cl[0].toUpperCase()+Cl.slice(1);er(Qg,"on"+Xg)}er(Zu,"onAnimationEnd"),er(Ku,"onAnimationIteration"),er(Qu,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Xu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function th(e,n,o){var s=e.type||"unknown-event";e.currentTarget=o,Q0(s,n,void 0,e),e.currentTarget=null}function nh(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var s=e[o],d=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var v=s.length-1;0<=v;v--){var M=s[v],B=M.instance,Y=M.currentTarget;if(M=M.listener,B!==h&&d.isPropagationStopped())break e;th(d,M,Y),h=B}else for(v=0;v<s.length;v++){if(M=s[v],B=M.instance,Y=M.currentTarget,M=M.listener,B!==h&&d.isPropagationStopped())break e;th(d,M,Y),h=B}}}if(oi)throw e=tl,oi=!1,tl=null,e}function Ke(e,n){var o=n[Tl];o===void 0&&(o=n[Tl]=new Set);var s=e+"__bubble";o.has(s)||(rh(n,e,2,!1),o.add(s))}function jl(e,n,o){var s=0;n&&(s|=4),rh(o,e,s,n)}var _i="_reactListening"+Math.random().toString(36).slice(2);function ga(e){if(!e[_i]){e[_i]=!0,l.forEach(function(o){o!=="selectionchange"&&(Jg.has(o)||jl(o,!1,e),jl(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_i]||(n[_i]=!0,jl("selectionchange",!1,n))}}function rh(e,n,o,s){switch(Su(n)){case 1:var d=pg;break;case 4:d=fg;break;default:d=ll}o=d.bind(null,n,o,e),d=void 0,!el||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),s?d!==void 0?e.addEventListener(n,o,{capture:!0,passive:d}):e.addEventListener(n,o,!0):d!==void 0?e.addEventListener(n,o,{passive:d}):e.addEventListener(n,o,!1)}function Sl(e,n,o,s,d){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var M=s.stateNode.containerInfo;if(M===d||M.nodeType===8&&M.parentNode===d)break;if(v===4)for(v=s.return;v!==null;){var B=v.tag;if((B===3||B===4)&&(B=v.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;v=v.return}for(;M!==null;){if(v=Rr(M),v===null)return;if(B=v.tag,B===5||B===6){s=h=v;continue e}M=M.parentNode}}s=s.return}lu(function(){var Y=h,ae=Ko(o),le=[];e:{var oe=Ju.get(e);if(oe!==void 0){var pe=ul,ge=e;switch(e){case"keypress":if(mi(o)===0)break e;case"keydown":case"keyup":pe=Lg;break;case"focusin":ge="focus",pe=fl;break;case"focusout":ge="blur",pe=fl;break;case"beforeblur":case"afterblur":pe=fl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=Tg;break;case Zu:case Ku:case Qu:pe=wg;break;case Xu:pe=Ig;break;case"scroll":pe=mg;break;case"wheel":pe=Pg;break;case"copy":case"cut":case"paste":pe=bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Mu}var ye=(n&4)!==0,it=!ye&&e==="scroll",H=ye?oe!==null?oe+"Capture":null:oe;ye=[];for(var F=Y,q;F!==null;){q=F;var de=q.stateNode;if(q.tag===5&&de!==null&&(q=de,H!==null&&(de=Xo(F,H),de!=null&&ye.push(va(F,de,q)))),it)break;F=F.return}0<ye.length&&(oe=new pe(oe,ge,null,o,ae),le.push({event:oe,listeners:ye}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",oe&&o!==Sr&&(ge=o.relatedTarget||o.fromElement)&&(Rr(ge)||ge[Pn]))break e;if((pe||oe)&&(oe=ae.window===ae?ae:(oe=ae.ownerDocument)?oe.defaultView||oe.parentWindow:window,pe?(ge=o.relatedTarget||o.toElement,pe=Y,ge=ge?Rr(ge):null,ge!==null&&(it=Nr(ge),ge!==it||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(pe=null,ge=Y),pe!==ge)){if(ye=Lu,de="onMouseLeave",H="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Mu,de="onPointerLeave",H="onPointerEnter",F="pointer"),it=pe==null?oe:po(pe),q=ge==null?oe:po(ge),oe=new ye(de,F+"leave",pe,o,ae),oe.target=it,oe.relatedTarget=q,de=null,Rr(ae)===Y&&(ye=new ye(H,F+"enter",ge,o,ae),ye.target=q,ye.relatedTarget=it,de=ye),it=de,pe&&ge)t:{for(ye=pe,H=ge,F=0,q=ye;q;q=uo(q))F++;for(q=0,de=H;de;de=uo(de))q++;for(;0<F-q;)ye=uo(ye),F--;for(;0<q-F;)H=uo(H),q--;for(;F--;){if(ye===H||H!==null&&ye===H.alternate)break t;ye=uo(ye),H=uo(H)}ye=null}else ye=null;pe!==null&&oh(le,oe,pe,ye,!1),ge!==null&&it!==null&&oh(le,it,ge,ye,!0)}}e:{if(oe=Y?po(Y):window,pe=oe.nodeName&&oe.nodeName.toLowerCase(),pe==="select"||pe==="input"&&oe.type==="file")var xe=Hg;else if(zu(oe))if(Du)xe=Gg;else{xe=Ug;var _e=qg}else(pe=oe.nodeName)&&pe.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(xe=Vg);if(xe&&(xe=xe(e,Y))){Ou(le,xe,o,ae);break e}_e&&_e(e,oe,Y),e==="focusout"&&(_e=oe._wrapperState)&&_e.controlled&&oe.type==="number"&&Ue(oe,"number",oe.value)}switch(_e=Y?po(Y):window,e){case"focusin":(zu(_e)||_e.contentEditable==="true")&&(lo=_e,wl=Y,fa=null);break;case"focusout":fa=wl=lo=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Gu(le,o,ae);break;case"selectionchange":if(Kg)break;case"keydown":case"keyup":Gu(le,o,ae)}var be;if(gl)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else so?Eu(e,o)&&(ke="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(ke="onCompositionStart");ke&&(Tu&&o.locale!=="ko"&&(so||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&so&&(be=Nu()):(Jn=ae,dl="value"in Jn?Jn.value:Jn.textContent,so=!0)),_e=bi(Y,ke),0<_e.length&&(ke=new $u(ke,e,null,o,ae),le.push({event:ke,listeners:_e}),be?ke.data=be:(be=Pu(o),be!==null&&(ke.data=be)))),(be=Og?Dg(e,o):Bg(e,o))&&(Y=bi(Y,"onBeforeInput"),0<Y.length&&(ae=new $u("onBeforeInput","beforeinput",null,o,ae),le.push({event:ae,listeners:Y}),ae.data=be))}nh(le,n)})}function va(e,n,o){return{instance:e,listener:n,currentTarget:o}}function bi(e,n){for(var o=n+"Capture",s=[];e!==null;){var d=e,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Xo(e,o),h!=null&&s.unshift(va(e,h,d)),h=Xo(e,n),h!=null&&s.push(va(e,h,d))),e=e.return}return s}function uo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oh(e,n,o,s,d){for(var h=n._reactName,v=[];o!==null&&o!==s;){var M=o,B=M.alternate,Y=M.stateNode;if(B!==null&&B===s)break;M.tag===5&&Y!==null&&(M=Y,d?(B=Xo(o,h),B!=null&&v.unshift(va(o,B,M))):d||(B=Xo(o,h),B!=null&&v.push(va(o,B,M)))),o=o.return}v.length!==0&&e.push({event:n,listeners:v})}var e2=/\r\n?/g,t2=/\u0000|\uFFFD/g;function ah(e){return(typeof e=="string"?e:""+e).replace(e2,`
`).replace(t2,"")}function ki(e,n,o){if(n=ah(n),ah(e)!==n&&o)throw Error(i(425))}function Ci(){}var Nl=null,Rl=null;function Ll(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,n2=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,r2=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(o2)}:$l;function o2(e){setTimeout(function(){throw e})}function Ml(e,n){var o=n,s=0;do{var d=o.nextSibling;if(e.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(s===0){e.removeChild(d),sa(n);return}s--}else o!=="$"&&o!=="$?"&&o!=="$!"||s++;o=d}while(o);sa(n)}function tr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function sh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var ho=Math.random().toString(36).slice(2),Sn="__reactFiber$"+ho,ya="__reactProps$"+ho,Pn="__reactContainer$"+ho,Tl="__reactEvents$"+ho,a2="__reactListeners$"+ho,i2="__reactHandles$"+ho;function Rr(e){var n=e[Sn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Pn]||o[Sn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=sh(e);e!==null;){if(o=e[Sn])return o;e=sh(e)}return n}e=o,o=e.parentNode}return null}function xa(e){return e=e[Sn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function po(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function ji(e){return e[ya]||null}var Al=[],fo=-1;function nr(e){return{current:e}}function Qe(e){0>fo||(e.current=Al[fo],Al[fo]=null,fo--)}function Ge(e,n){fo++,Al[fo]=e.current,e.current=n}var rr={},jt=nr(rr),Ot=nr(!1),Lr=rr;function mo(e,n){var o=e.type.contextTypes;if(!o)return rr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=n[h];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function Dt(e){return e=e.childContextTypes,e!=null}function Si(){Qe(Ot),Qe(jt)}function lh(e,n,o){if(jt.current!==rr)throw Error(i(168));Ge(jt,n),Ge(Ot,o)}function ch(e,n,o){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return o;s=s.getChildContext();for(var d in s)if(!(d in n))throw Error(i(108,K(e)||"Unknown",d));return D({},o,s)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rr,Lr=jt.current,Ge(jt,e),Ge(Ot,Ot.current),!0}function dh(e,n,o){var s=e.stateNode;if(!s)throw Error(i(169));o?(e=ch(e,n,Lr),s.__reactInternalMemoizedMergedChildContext=e,Qe(Ot),Qe(jt),Ge(jt,e)):Qe(Ot),Ge(Ot,o)}var zn=null,Ri=!1,Il=!1;function uh(e){zn===null?zn=[e]:zn.push(e)}function s2(e){Ri=!0,uh(e)}function or(){if(!Il&&zn!==null){Il=!0;var e=0,n=He;try{var o=zn;for(He=1;e<o.length;e++){var s=o[e];do s=s(!0);while(s!==null)}zn=null,Ri=!1}catch(d){throw zn!==null&&(zn=zn.slice(e+1)),pu(nl,or),d}finally{He=n,Il=!1}}return null}var go=[],vo=0,Li=null,$i=0,rn=[],on=0,$r=null,On=1,Dn="";function Mr(e,n){go[vo++]=$i,go[vo++]=Li,Li=e,$i=n}function hh(e,n,o){rn[on++]=On,rn[on++]=Dn,rn[on++]=$r,$r=e;var s=On;e=Dn;var d=32-pn(s)-1;s&=~(1<<d),o+=1;var h=32-pn(n)+d;if(30<h){var v=d-d%5;h=(s&(1<<v)-1).toString(32),s>>=v,d-=v,On=1<<32-pn(n)+d|o<<d|s,Dn=h+e}else On=1<<h|o<<d|s,Dn=e}function El(e){e.return!==null&&(Mr(e,1),hh(e,1,0))}function Pl(e){for(;e===Li;)Li=go[--vo],go[vo]=null,$i=go[--vo],go[vo]=null;for(;e===$r;)$r=rn[--on],rn[on]=null,Dn=rn[--on],rn[on]=null,On=rn[--on],rn[on]=null}var Zt=null,Kt=null,et=!1,mn=null;function ph(e,n){var o=cn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function fh(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Zt=e,Kt=tr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Zt=e,Kt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=$r!==null?{id:On,overflow:Dn}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=cn(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,Zt=e,Kt=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(et){var n=Kt;if(n){var o=n;if(!fh(e,n)){if(zl(e))throw Error(i(418));n=tr(o.nextSibling);var s=Zt;n&&fh(e,n)?ph(s,o):(e.flags=e.flags&-4097|2,et=!1,Zt=e)}}else{if(zl(e))throw Error(i(418));e.flags=e.flags&-4097|2,et=!1,Zt=e}}}function mh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Zt=e}function Mi(e){if(e!==Zt)return!1;if(!et)return mh(e),et=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ll(e.type,e.memoizedProps)),n&&(n=Kt)){if(zl(e))throw gh(),Error(i(418));for(;n;)ph(e,n),n=tr(n.nextSibling)}if(mh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){Kt=tr(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}Kt=null}}else Kt=Zt?tr(e.stateNode.nextSibling):null;return!0}function gh(){for(var e=Kt;e;)e=tr(e.nextSibling)}function yo(){Kt=Zt=null,et=!1}function Dl(e){mn===null?mn=[e]:mn.push(e)}var l2=T.ReactCurrentBatchConfig;function wa(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var s=o.stateNode}if(!s)throw Error(i(147,e));var d=s,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(v){var M=d.refs;v===null?delete M[h]:M[h]=v},n._stringRef=h,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Ti(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function vh(e){var n=e._init;return n(e._payload)}function yh(e){function n(H,F){if(e){var q=H.deletions;q===null?(H.deletions=[F],H.flags|=16):q.push(F)}}function o(H,F){if(!e)return null;for(;F!==null;)n(H,F),F=F.sibling;return null}function s(H,F){for(H=new Map;F!==null;)F.key!==null?H.set(F.key,F):H.set(F.index,F),F=F.sibling;return H}function d(H,F){return H=hr(H,F),H.index=0,H.sibling=null,H}function h(H,F,q){return H.index=q,e?(q=H.alternate,q!==null?(q=q.index,q<F?(H.flags|=2,F):q):(H.flags|=2,F)):(H.flags|=1048576,F)}function v(H){return e&&H.alternate===null&&(H.flags|=2),H}function M(H,F,q,de){return F===null||F.tag!==6?(F=$c(q,H.mode,de),F.return=H,F):(F=d(F,q),F.return=H,F)}function B(H,F,q,de){var xe=q.type;return xe===z?ae(H,F,q.props.children,de,q.key):F!==null&&(F.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===se&&vh(xe)===F.type)?(de=d(F,q.props),de.ref=wa(H,F,q),de.return=H,de):(de=ns(q.type,q.key,q.props,null,H.mode,de),de.ref=wa(H,F,q),de.return=H,de)}function Y(H,F,q,de){return F===null||F.tag!==4||F.stateNode.containerInfo!==q.containerInfo||F.stateNode.implementation!==q.implementation?(F=Mc(q,H.mode,de),F.return=H,F):(F=d(F,q.children||[]),F.return=H,F)}function ae(H,F,q,de,xe){return F===null||F.tag!==7?(F=Dr(q,H.mode,de,xe),F.return=H,F):(F=d(F,q),F.return=H,F)}function le(H,F,q){if(typeof F=="string"&&F!==""||typeof F=="number")return F=$c(""+F,H.mode,q),F.return=H,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case I:return q=ns(F.type,F.key,F.props,null,H.mode,q),q.ref=wa(H,null,F),q.return=H,q;case E:return F=Mc(F,H.mode,q),F.return=H,F;case se:var de=F._init;return le(H,de(F._payload),q)}if(rt(F)||P(F))return F=Dr(F,H.mode,q,null),F.return=H,F;Ti(H,F)}return null}function oe(H,F,q,de){var xe=F!==null?F.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return xe!==null?null:M(H,F,""+q,de);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case I:return q.key===xe?B(H,F,q,de):null;case E:return q.key===xe?Y(H,F,q,de):null;case se:return xe=q._init,oe(H,F,xe(q._payload),de)}if(rt(q)||P(q))return xe!==null?null:ae(H,F,q,de,null);Ti(H,q)}return null}function pe(H,F,q,de,xe){if(typeof de=="string"&&de!==""||typeof de=="number")return H=H.get(q)||null,M(F,H,""+de,xe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case I:return H=H.get(de.key===null?q:de.key)||null,B(F,H,de,xe);case E:return H=H.get(de.key===null?q:de.key)||null,Y(F,H,de,xe);case se:var _e=de._init;return pe(H,F,q,_e(de._payload),xe)}if(rt(de)||P(de))return H=H.get(q)||null,ae(F,H,de,xe,null);Ti(F,de)}return null}function ge(H,F,q,de){for(var xe=null,_e=null,be=F,ke=F=0,vt=null;be!==null&&ke<q.length;ke++){be.index>ke?(vt=be,be=null):vt=be.sibling;var Pe=oe(H,be,q[ke],de);if(Pe===null){be===null&&(be=vt);break}e&&be&&Pe.alternate===null&&n(H,be),F=h(Pe,F,ke),_e===null?xe=Pe:_e.sibling=Pe,_e=Pe,be=vt}if(ke===q.length)return o(H,be),et&&Mr(H,ke),xe;if(be===null){for(;ke<q.length;ke++)be=le(H,q[ke],de),be!==null&&(F=h(be,F,ke),_e===null?xe=be:_e.sibling=be,_e=be);return et&&Mr(H,ke),xe}for(be=s(H,be);ke<q.length;ke++)vt=pe(be,H,ke,q[ke],de),vt!==null&&(e&&vt.alternate!==null&&be.delete(vt.key===null?ke:vt.key),F=h(vt,F,ke),_e===null?xe=vt:_e.sibling=vt,_e=vt);return e&&be.forEach(function(pr){return n(H,pr)}),et&&Mr(H,ke),xe}function ye(H,F,q,de){var xe=P(q);if(typeof xe!="function")throw Error(i(150));if(q=xe.call(q),q==null)throw Error(i(151));for(var _e=xe=null,be=F,ke=F=0,vt=null,Pe=q.next();be!==null&&!Pe.done;ke++,Pe=q.next()){be.index>ke?(vt=be,be=null):vt=be.sibling;var pr=oe(H,be,Pe.value,de);if(pr===null){be===null&&(be=vt);break}e&&be&&pr.alternate===null&&n(H,be),F=h(pr,F,ke),_e===null?xe=pr:_e.sibling=pr,_e=pr,be=vt}if(Pe.done)return o(H,be),et&&Mr(H,ke),xe;if(be===null){for(;!Pe.done;ke++,Pe=q.next())Pe=le(H,Pe.value,de),Pe!==null&&(F=h(Pe,F,ke),_e===null?xe=Pe:_e.sibling=Pe,_e=Pe);return et&&Mr(H,ke),xe}for(be=s(H,be);!Pe.done;ke++,Pe=q.next())Pe=pe(be,H,ke,Pe.value,de),Pe!==null&&(e&&Pe.alternate!==null&&be.delete(Pe.key===null?ke:Pe.key),F=h(Pe,F,ke),_e===null?xe=Pe:_e.sibling=Pe,_e=Pe);return e&&be.forEach(function(F2){return n(H,F2)}),et&&Mr(H,ke),xe}function it(H,F,q,de){if(typeof q=="object"&&q!==null&&q.type===z&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case I:e:{for(var xe=q.key,_e=F;_e!==null;){if(_e.key===xe){if(xe=q.type,xe===z){if(_e.tag===7){o(H,_e.sibling),F=d(_e,q.props.children),F.return=H,H=F;break e}}else if(_e.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===se&&vh(xe)===_e.type){o(H,_e.sibling),F=d(_e,q.props),F.ref=wa(H,_e,q),F.return=H,H=F;break e}o(H,_e);break}else n(H,_e);_e=_e.sibling}q.type===z?(F=Dr(q.props.children,H.mode,de,q.key),F.return=H,H=F):(de=ns(q.type,q.key,q.props,null,H.mode,de),de.ref=wa(H,F,q),de.return=H,H=de)}return v(H);case E:e:{for(_e=q.key;F!==null;){if(F.key===_e)if(F.tag===4&&F.stateNode.containerInfo===q.containerInfo&&F.stateNode.implementation===q.implementation){o(H,F.sibling),F=d(F,q.children||[]),F.return=H,H=F;break e}else{o(H,F);break}else n(H,F);F=F.sibling}F=Mc(q,H.mode,de),F.return=H,H=F}return v(H);case se:return _e=q._init,it(H,F,_e(q._payload),de)}if(rt(q))return ge(H,F,q,de);if(P(q))return ye(H,F,q,de);Ti(H,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,F!==null&&F.tag===6?(o(H,F.sibling),F=d(F,q),F.return=H,H=F):(o(H,F),F=$c(q,H.mode,de),F.return=H,H=F),v(H)):o(H,F)}return it}var xo=yh(!0),xh=yh(!1),Ai=nr(null),Ii=null,wo=null,Bl=null;function Fl(){Bl=wo=Ii=null}function Wl(e){var n=Ai.current;Qe(Ai),e._currentValue=n}function Hl(e,n,o){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===o)break;e=e.return}}function _o(e,n){Ii=e,Bl=wo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Bt=!0),e.firstContext=null)}function an(e){var n=e._currentValue;if(Bl!==e)if(e={context:e,memoizedValue:n,next:null},wo===null){if(Ii===null)throw Error(i(308));wo=e,Ii.dependencies={lanes:0,firstContext:e}}else wo=wo.next=e;return n}var Tr=null;function ql(e){Tr===null?Tr=[e]:Tr.push(e)}function wh(e,n,o,s){var d=n.interleaved;return d===null?(o.next=o,ql(n)):(o.next=d.next,d.next=o),n.interleaved=o,Bn(e,s)}function Bn(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var ar=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ir(e,n,o){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ee&2)!==0){var d=s.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),s.pending=n,Bn(e,o)}return d=s.interleaved,d===null?(n.next=n,ql(s)):(n.next=d.next,d.next=n),s.interleaved=n,Bn(e,o)}function Ei(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,al(e,o)}}function bh(e,n){var o=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,o===s)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=v:h=h.next=v,o=o.next}while(o!==null);h===null?d=h=n:h=h.next=n}else d=h=n;o={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:s.shared,effects:s.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Pi(e,n,o,s){var d=e.updateQueue;ar=!1;var h=d.firstBaseUpdate,v=d.lastBaseUpdate,M=d.shared.pending;if(M!==null){d.shared.pending=null;var B=M,Y=B.next;B.next=null,v===null?h=Y:v.next=Y,v=B;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,M=ae.lastBaseUpdate,M!==v&&(M===null?ae.firstBaseUpdate=Y:M.next=Y,ae.lastBaseUpdate=B))}if(h!==null){var le=d.baseState;v=0,ae=Y=B=null,M=h;do{var oe=M.lane,pe=M.eventTime;if((s&oe)===oe){ae!==null&&(ae=ae.next={eventTime:pe,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var ge=e,ye=M;switch(oe=n,pe=o,ye.tag){case 1:if(ge=ye.payload,typeof ge=="function"){le=ge.call(pe,le,oe);break e}le=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ye.payload,oe=typeof ge=="function"?ge.call(pe,le,oe):ge,oe==null)break e;le=D({},le,oe);break e;case 2:ar=!0}}M.callback!==null&&M.lane!==0&&(e.flags|=64,oe=d.effects,oe===null?d.effects=[M]:oe.push(M))}else pe={eventTime:pe,lane:oe,tag:M.tag,payload:M.payload,callback:M.callback,next:null},ae===null?(Y=ae=pe,B=le):ae=ae.next=pe,v|=oe;if(M=M.next,M===null){if(M=d.shared.pending,M===null)break;oe=M,M=oe.next,oe.next=null,d.lastBaseUpdate=oe,d.shared.pending=null}}while(!0);if(ae===null&&(B=le),d.baseState=B,d.firstBaseUpdate=Y,d.lastBaseUpdate=ae,n=d.shared.interleaved,n!==null){d=n;do v|=d.lane,d=d.next;while(d!==n)}else h===null&&(d.shared.lanes=0);Er|=v,e.lanes=v,e.memoizedState=le}}function kh(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],d=s.callback;if(d!==null){if(s.callback=null,s=o,typeof d!="function")throw Error(i(191,d));d.call(s)}}}var _a={},Nn=nr(_a),ba=nr(_a),ka=nr(_a);function Ar(e){if(e===_a)throw Error(i(174));return e}function Vl(e,n){switch(Ge(ka,n),Ge(ba,e),Ge(Nn,_a),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Cn(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Cn(n,e)}Qe(Nn),Ge(Nn,n)}function bo(){Qe(Nn),Qe(ba),Qe(ka)}function Ch(e){Ar(ka.current);var n=Ar(Nn.current),o=Cn(n,e.type);n!==o&&(Ge(ba,e),Ge(Nn,o))}function Gl(e){ba.current===e&&(Qe(Nn),Qe(ba))}var tt=nr(0);function zi(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yl=[];function Zl(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Oi=T.ReactCurrentDispatcher,Kl=T.ReactCurrentBatchConfig,Ir=0,nt=null,ht=null,mt=null,Di=!1,Ca=!1,ja=0,c2=0;function St(){throw Error(i(321))}function Ql(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!fn(e[o],n[o]))return!1;return!0}function Xl(e,n,o,s,d,h){if(Ir=h,nt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Oi.current=e===null||e.memoizedState===null?p2:f2,e=o(s,d),Ca){h=0;do{if(Ca=!1,ja=0,25<=h)throw Error(i(301));h+=1,mt=ht=null,n.updateQueue=null,Oi.current=m2,e=o(s,d)}while(Ca)}if(Oi.current=Wi,n=ht!==null&&ht.next!==null,Ir=0,mt=ht=nt=null,Di=!1,n)throw Error(i(300));return e}function Jl(){var e=ja!==0;return ja=0,e}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?nt.memoizedState=mt=e:mt=mt.next=e,mt}function sn(){if(ht===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var n=mt===null?nt.memoizedState:mt.next;if(n!==null)mt=n,ht=e;else{if(e===null)throw Error(i(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},mt===null?nt.memoizedState=mt=e:mt=mt.next=e}return mt}function Sa(e,n){return typeof n=="function"?n(e):n}function ec(e){var n=sn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=ht,d=s.baseQueue,h=o.pending;if(h!==null){if(d!==null){var v=d.next;d.next=h.next,h.next=v}s.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,s=s.baseState;var M=v=null,B=null,Y=h;do{var ae=Y.lane;if((Ir&ae)===ae)B!==null&&(B=B.next={lane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),s=Y.hasEagerState?Y.eagerState:e(s,Y.action);else{var le={lane:ae,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null};B===null?(M=B=le,v=s):B=B.next=le,nt.lanes|=ae,Er|=ae}Y=Y.next}while(Y!==null&&Y!==h);B===null?v=s:B.next=M,fn(s,n.memoizedState)||(Bt=!0),n.memoizedState=s,n.baseState=v,n.baseQueue=B,o.lastRenderedState=s}if(e=o.interleaved,e!==null){d=e;do h=d.lane,nt.lanes|=h,Er|=h,d=d.next;while(d!==e)}else d===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function tc(e){var n=sn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=o.dispatch,d=o.pending,h=n.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do h=e(h,v.action),v=v.next;while(v!==d);fn(h,n.memoizedState)||(Bt=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),o.lastRenderedState=h}return[h,s]}function jh(){}function Sh(e,n){var o=nt,s=sn(),d=n(),h=!fn(s.memoizedState,d);if(h&&(s.memoizedState=d,Bt=!0),s=s.queue,nc(Lh.bind(null,o,s,e),[e]),s.getSnapshot!==n||h||mt!==null&&mt.memoizedState.tag&1){if(o.flags|=2048,Na(9,Rh.bind(null,o,s,d,n),void 0,null),gt===null)throw Error(i(349));(Ir&30)!==0||Nh(o,n,d)}return d}function Nh(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=nt.updateQueue,n===null?(n={lastEffect:null,stores:null},nt.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function Rh(e,n,o,s){n.value=o,n.getSnapshot=s,$h(n)&&Mh(e)}function Lh(e,n,o){return o(function(){$h(n)&&Mh(e)})}function $h(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!fn(e,o)}catch{return!0}}function Mh(e){var n=Bn(e,1);n!==null&&xn(n,e,1,-1)}function Th(e){var n=Rn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n.queue=e,e=e.dispatch=h2.bind(null,nt,e),[n.memoizedState,e]}function Na(e,n,o,s){return e={tag:e,create:n,destroy:o,deps:s,next:null},n=nt.updateQueue,n===null?(n={lastEffect:null,stores:null},nt.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(s=o.next,o.next=e,e.next=s,n.lastEffect=e)),e}function Ah(){return sn().memoizedState}function Bi(e,n,o,s){var d=Rn();nt.flags|=e,d.memoizedState=Na(1|n,o,void 0,s===void 0?null:s)}function Fi(e,n,o,s){var d=sn();s=s===void 0?null:s;var h=void 0;if(ht!==null){var v=ht.memoizedState;if(h=v.destroy,s!==null&&Ql(s,v.deps)){d.memoizedState=Na(n,o,h,s);return}}nt.flags|=e,d.memoizedState=Na(1|n,o,h,s)}function Ih(e,n){return Bi(8390656,8,e,n)}function nc(e,n){return Fi(2048,8,e,n)}function Eh(e,n){return Fi(4,2,e,n)}function Ph(e,n){return Fi(4,4,e,n)}function zh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Oh(e,n,o){return o=o!=null?o.concat([e]):null,Fi(4,4,zh.bind(null,n,e),o)}function rc(){}function Dh(e,n){var o=sn();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&Ql(n,s[1])?s[0]:(o.memoizedState=[e,n],e)}function Bh(e,n){var o=sn();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&Ql(n,s[1])?s[0]:(e=e(),o.memoizedState=[e,n],e)}function Fh(e,n,o){return(Ir&21)===0?(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=o):(fn(o,n)||(o=vu(),nt.lanes|=o,Er|=o,e.baseState=!0),n)}function d2(e,n){var o=He;He=o!==0&&4>o?o:4,e(!0);var s=Kl.transition;Kl.transition={};try{e(!1),n()}finally{He=o,Kl.transition=s}}function Wh(){return sn().memoizedState}function u2(e,n,o){var s=dr(e);if(o={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null},Hh(e))qh(n,o);else if(o=wh(e,n,o,s),o!==null){var d=Et();xn(o,e,s,d),Uh(o,n,s)}}function h2(e,n,o){var s=dr(e),d={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null};if(Hh(e))qh(n,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,M=h(v,o);if(d.hasEagerState=!0,d.eagerState=M,fn(M,v)){var B=n.interleaved;B===null?(d.next=d,ql(n)):(d.next=B.next,B.next=d),n.interleaved=d;return}}catch{}finally{}o=wh(e,n,d,s),o!==null&&(d=Et(),xn(o,e,s,d),Uh(o,n,s))}}function Hh(e){var n=e.alternate;return e===nt||n!==null&&n===nt}function qh(e,n){Ca=Di=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function Uh(e,n,o){if((o&4194240)!==0){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,al(e,o)}}var Wi={readContext:an,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},p2={readContext:an,useCallback:function(e,n){return Rn().memoizedState=[e,n===void 0?null:n],e},useContext:an,useEffect:Ih,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Bi(4194308,4,zh.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Bi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Bi(4,2,e,n)},useMemo:function(e,n){var o=Rn();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var s=Rn();return n=o!==void 0?o(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=u2.bind(null,nt,e),[s.memoizedState,e]},useRef:function(e){var n=Rn();return e={current:e},n.memoizedState=e},useState:Th,useDebugValue:rc,useDeferredValue:function(e){return Rn().memoizedState=e},useTransition:function(){var e=Th(!1),n=e[0];return e=d2.bind(null,e[1]),Rn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var s=nt,d=Rn();if(et){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),gt===null)throw Error(i(349));(Ir&30)!==0||Nh(s,n,o)}d.memoizedState=o;var h={value:o,getSnapshot:n};return d.queue=h,Ih(Lh.bind(null,s,h,e),[e]),s.flags|=2048,Na(9,Rh.bind(null,s,h,o,n),void 0,null),o},useId:function(){var e=Rn(),n=gt.identifierPrefix;if(et){var o=Dn,s=On;o=(s&~(1<<32-pn(s)-1)).toString(32)+o,n=":"+n+"R"+o,o=ja++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=c2++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},f2={readContext:an,useCallback:Dh,useContext:an,useEffect:nc,useImperativeHandle:Oh,useInsertionEffect:Eh,useLayoutEffect:Ph,useMemo:Bh,useReducer:ec,useRef:Ah,useState:function(){return ec(Sa)},useDebugValue:rc,useDeferredValue:function(e){var n=sn();return Fh(n,ht.memoizedState,e)},useTransition:function(){var e=ec(Sa)[0],n=sn().memoizedState;return[e,n]},useMutableSource:jh,useSyncExternalStore:Sh,useId:Wh,unstable_isNewReconciler:!1},m2={readContext:an,useCallback:Dh,useContext:an,useEffect:nc,useImperativeHandle:Oh,useInsertionEffect:Eh,useLayoutEffect:Ph,useMemo:Bh,useReducer:tc,useRef:Ah,useState:function(){return tc(Sa)},useDebugValue:rc,useDeferredValue:function(e){var n=sn();return ht===null?n.memoizedState=e:Fh(n,ht.memoizedState,e)},useTransition:function(){var e=tc(Sa)[0],n=sn().memoizedState;return[e,n]},useMutableSource:jh,useSyncExternalStore:Sh,useId:Wh,unstable_isNewReconciler:!1};function gn(e,n){if(e&&e.defaultProps){n=D({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function oc(e,n,o,s){n=e.memoizedState,o=o(s,n),o=o==null?n:D({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Hi={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var s=Et(),d=dr(e),h=Fn(s,d);h.payload=n,o!=null&&(h.callback=o),n=ir(e,h,d),n!==null&&(xn(n,e,d,s),Ei(n,e,d))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var s=Et(),d=dr(e),h=Fn(s,d);h.tag=1,h.payload=n,o!=null&&(h.callback=o),n=ir(e,h,d),n!==null&&(xn(n,e,d,s),Ei(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=Et(),s=dr(e),d=Fn(o,s);d.tag=2,n!=null&&(d.callback=n),n=ir(e,d,s),n!==null&&(xn(n,e,s,o),Ei(n,e,s))}};function Vh(e,n,o,s,d,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,v):n.prototype&&n.prototype.isPureReactComponent?!pa(o,s)||!pa(d,h):!0}function Gh(e,n,o){var s=!1,d=rr,h=n.contextType;return typeof h=="object"&&h!==null?h=an(h):(d=Dt(n)?Lr:jt.current,s=n.contextTypes,h=(s=s!=null)?mo(e,d):rr),n=new n(o,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Hi,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=h),n}function Yh(e,n,o,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,s),n.state!==e&&Hi.enqueueReplaceState(n,n.state,null)}function ac(e,n,o,s){var d=e.stateNode;d.props=o,d.state=e.memoizedState,d.refs={},Ul(e);var h=n.contextType;typeof h=="object"&&h!==null?d.context=an(h):(h=Dt(n)?Lr:jt.current,d.context=mo(e,h)),d.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(oc(e,n,h,o),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Hi.enqueueReplaceState(d,d.state,null),Pi(e,o,d,s),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function ko(e,n){try{var o="",s=n;do o+=G(s),s=s.return;while(s);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:d,digest:null}}function ic(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function sc(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var g2=typeof WeakMap=="function"?WeakMap:Map;function Zh(e,n,o){o=Fn(-1,o),o.tag=3,o.payload={element:null};var s=n.value;return o.callback=function(){Ki||(Ki=!0,bc=s),sc(e,n)},o}function Kh(e,n,o){o=Fn(-1,o),o.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var d=n.value;o.payload=function(){return s(d)},o.callback=function(){sc(e,n)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){sc(e,n),typeof s!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),o}function Qh(e,n,o){var s=e.pingCache;if(s===null){s=e.pingCache=new g2;var d=new Set;s.set(n,d)}else d=s.get(n),d===void 0&&(d=new Set,s.set(n,d));d.has(o)||(d.add(o),e=$2.bind(null,e,n,o),n.then(e,e))}function Xh(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Jh(e,n,o,s,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Fn(-1,1),n.tag=2,ir(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var v2=T.ReactCurrentOwner,Bt=!1;function It(e,n,o,s){n.child=e===null?xh(n,null,o,s):xo(n,e.child,o,s)}function ep(e,n,o,s,d){o=o.render;var h=n.ref;return _o(n,d),s=Xl(e,n,o,s,h,d),o=Jl(),e!==null&&!Bt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,Wn(e,n,d)):(et&&o&&El(n),n.flags|=1,It(e,n,s,d),n.child)}function tp(e,n,o,s,d){if(e===null){var h=o.type;return typeof h=="function"&&!Lc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=h,np(e,n,h,s,d)):(e=ns(o.type,null,s,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,(e.lanes&d)===0){var v=h.memoizedProps;if(o=o.compare,o=o!==null?o:pa,o(v,s)&&e.ref===n.ref)return Wn(e,n,d)}return n.flags|=1,e=hr(h,s),e.ref=n.ref,e.return=n,n.child=e}function np(e,n,o,s,d){if(e!==null){var h=e.memoizedProps;if(pa(h,s)&&e.ref===n.ref)if(Bt=!1,n.pendingProps=s=h,(e.lanes&d)!==0)(e.flags&131072)!==0&&(Bt=!0);else return n.lanes=e.lanes,Wn(e,n,d)}return lc(e,n,o,s,d)}function rp(e,n,o){var s=n.pendingProps,d=s.children,h=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(jo,Qt),Qt|=o;else{if((o&1073741824)===0)return e=h!==null?h.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ge(jo,Qt),Qt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=h!==null?h.baseLanes:o,Ge(jo,Qt),Qt|=s}else h!==null?(s=h.baseLanes|o,n.memoizedState=null):s=o,Ge(jo,Qt),Qt|=s;return It(e,n,d,o),n.child}function op(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function lc(e,n,o,s,d){var h=Dt(o)?Lr:jt.current;return h=mo(n,h),_o(n,d),o=Xl(e,n,o,s,h,d),s=Jl(),e!==null&&!Bt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,Wn(e,n,d)):(et&&s&&El(n),n.flags|=1,It(e,n,o,d),n.child)}function ap(e,n,o,s,d){if(Dt(o)){var h=!0;Ni(n)}else h=!1;if(_o(n,d),n.stateNode===null)Ui(e,n),Gh(n,o,s),ac(n,o,s,d),s=!0;else if(e===null){var v=n.stateNode,M=n.memoizedProps;v.props=M;var B=v.context,Y=o.contextType;typeof Y=="object"&&Y!==null?Y=an(Y):(Y=Dt(o)?Lr:jt.current,Y=mo(n,Y));var ae=o.getDerivedStateFromProps,le=typeof ae=="function"||typeof v.getSnapshotBeforeUpdate=="function";le||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==s||B!==Y)&&Yh(n,v,s,Y),ar=!1;var oe=n.memoizedState;v.state=oe,Pi(n,s,v,d),B=n.memoizedState,M!==s||oe!==B||Ot.current||ar?(typeof ae=="function"&&(oc(n,o,ae,s),B=n.memoizedState),(M=ar||Vh(n,o,M,s,oe,B,Y))?(le||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=B),v.props=s,v.state=B,v.context=Y,s=M):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{v=n.stateNode,_h(e,n),M=n.memoizedProps,Y=n.type===n.elementType?M:gn(n.type,M),v.props=Y,le=n.pendingProps,oe=v.context,B=o.contextType,typeof B=="object"&&B!==null?B=an(B):(B=Dt(o)?Lr:jt.current,B=mo(n,B));var pe=o.getDerivedStateFromProps;(ae=typeof pe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==le||oe!==B)&&Yh(n,v,s,B),ar=!1,oe=n.memoizedState,v.state=oe,Pi(n,s,v,d);var ge=n.memoizedState;M!==le||oe!==ge||Ot.current||ar?(typeof pe=="function"&&(oc(n,o,pe,s),ge=n.memoizedState),(Y=ar||Vh(n,o,Y,s,oe,ge,B)||!1)?(ae||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(s,ge,B),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(s,ge,B)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ge),v.props=s,v.state=ge,v.context=B,s=Y):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),s=!1)}return cc(e,n,o,s,h,d)}function cc(e,n,o,s,d,h){op(e,n);var v=(n.flags&128)!==0;if(!s&&!v)return d&&dh(n,o,!1),Wn(e,n,h);s=n.stateNode,v2.current=n;var M=v&&typeof o.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&v?(n.child=xo(n,e.child,null,h),n.child=xo(n,null,M,h)):It(e,n,M,h),n.memoizedState=s.state,d&&dh(n,o,!0),n.child}function ip(e){var n=e.stateNode;n.pendingContext?lh(e,n.pendingContext,n.pendingContext!==n.context):n.context&&lh(e,n.context,!1),Vl(e,n.containerInfo)}function sp(e,n,o,s,d){return yo(),Dl(d),n.flags|=256,It(e,n,o,s),n.child}var dc={dehydrated:null,treeContext:null,retryLane:0};function uc(e){return{baseLanes:e,cachePool:null,transitions:null}}function lp(e,n,o){var s=n.pendingProps,d=tt.current,h=!1,v=(n.flags&128)!==0,M;if((M=v)||(M=e!==null&&e.memoizedState===null?!1:(d&2)!==0),M?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Ge(tt,d&1),e===null)return Ol(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=s.children,e=s.fallback,h?(s=n.mode,h=n.child,v={mode:"hidden",children:v},(s&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=v):h=rs(v,s,0,null),e=Dr(e,s,o,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=uc(o),n.memoizedState=dc,e):hc(n,v));if(d=e.memoizedState,d!==null&&(M=d.dehydrated,M!==null))return y2(e,n,v,s,M,d,o);if(h){h=s.fallback,v=n.mode,d=e.child,M=d.sibling;var B={mode:"hidden",children:s.children};return(v&1)===0&&n.child!==d?(s=n.child,s.childLanes=0,s.pendingProps=B,n.deletions=null):(s=hr(d,B),s.subtreeFlags=d.subtreeFlags&14680064),M!==null?h=hr(M,h):(h=Dr(h,v,o,null),h.flags|=2),h.return=n,s.return=n,s.sibling=h,n.child=s,s=h,h=n.child,v=e.child.memoizedState,v=v===null?uc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},h.memoizedState=v,h.childLanes=e.childLanes&~o,n.memoizedState=dc,s}return h=e.child,e=h.sibling,s=hr(h,{mode:"visible",children:s.children}),(n.mode&1)===0&&(s.lanes=o),s.return=n,s.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=s,n.memoizedState=null,s}function hc(e,n){return n=rs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function qi(e,n,o,s){return s!==null&&Dl(s),xo(n,e.child,null,o),e=hc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function y2(e,n,o,s,d,h,v){if(o)return n.flags&256?(n.flags&=-257,s=ic(Error(i(422))),qi(e,n,v,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=s.fallback,d=n.mode,s=rs({mode:"visible",children:s.children},d,0,null),h=Dr(h,d,v,null),h.flags|=2,s.return=n,h.return=n,s.sibling=h,n.child=s,(n.mode&1)!==0&&xo(n,e.child,null,v),n.child.memoizedState=uc(v),n.memoizedState=dc,h);if((n.mode&1)===0)return qi(e,n,v,null);if(d.data==="$!"){if(s=d.nextSibling&&d.nextSibling.dataset,s)var M=s.dgst;return s=M,h=Error(i(419)),s=ic(h,s,void 0),qi(e,n,v,s)}if(M=(v&e.childLanes)!==0,Bt||M){if(s=gt,s!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(s.suspendedLanes|v))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Bn(e,d),xn(s,e,d,-1))}return Rc(),s=ic(Error(i(421))),qi(e,n,v,s)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=M2.bind(null,e),d._reactRetry=n,null):(e=h.treeContext,Kt=tr(d.nextSibling),Zt=n,et=!0,mn=null,e!==null&&(rn[on++]=On,rn[on++]=Dn,rn[on++]=$r,On=e.id,Dn=e.overflow,$r=n),n=hc(n,s.children),n.flags|=4096,n)}function cp(e,n,o){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Hl(e.return,n,o)}function pc(e,n,o,s,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:o,tailMode:d}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=o,h.tailMode=d)}function dp(e,n,o){var s=n.pendingProps,d=s.revealOrder,h=s.tail;if(It(e,n,s.children,o),s=tt.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cp(e,o,n);else if(e.tag===19)cp(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ge(tt,s),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(o=n.child,d=null;o!==null;)e=o.alternate,e!==null&&zi(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=n.child,n.child=null):(d=o.sibling,o.sibling=null),pc(n,!1,d,o,h);break;case"backwards":for(o=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&zi(e)===null){n.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}pc(n,!0,o,null,h);break;case"together":pc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ui(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Wn(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),Er|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=hr(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=hr(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function x2(e,n,o){switch(n.tag){case 3:ip(n),yo();break;case 5:Ch(n);break;case 1:Dt(n.type)&&Ni(n);break;case 4:Vl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,d=n.memoizedProps.value;Ge(Ai,s._currentValue),s._currentValue=d;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(Ge(tt,tt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?lp(e,n,o):(Ge(tt,tt.current&1),e=Wn(e,n,o),e!==null?e.sibling:null);Ge(tt,tt.current&1);break;case 19:if(s=(o&n.childLanes)!==0,(e.flags&128)!==0){if(s)return dp(e,n,o);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ge(tt,tt.current),s)break;return null;case 22:case 23:return n.lanes=0,rp(e,n,o)}return Wn(e,n,o)}var up,fc,hp,pp;up=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},fc=function(){},hp=function(e,n,o,s){var d=e.memoizedProps;if(d!==s){e=n.stateNode,Ar(Nn.current);var h=null;switch(o){case"input":d=Se(e,d),s=Se(e,s),h=[];break;case"select":d=D({},d,{value:void 0}),s=D({},s,{value:void 0}),h=[];break;case"textarea":d=Mt(e,d),s=Mt(e,s),h=[];break;default:typeof d.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ci)}lt(o,s);var v;o=null;for(Y in d)if(!s.hasOwnProperty(Y)&&d.hasOwnProperty(Y)&&d[Y]!=null)if(Y==="style"){var M=d[Y];for(v in M)M.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else Y!=="dangerouslySetInnerHTML"&&Y!=="children"&&Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&Y!=="autoFocus"&&(c.hasOwnProperty(Y)?h||(h=[]):(h=h||[]).push(Y,null));for(Y in s){var B=s[Y];if(M=d!=null?d[Y]:void 0,s.hasOwnProperty(Y)&&B!==M&&(B!=null||M!=null))if(Y==="style")if(M){for(v in M)!M.hasOwnProperty(v)||B&&B.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in B)B.hasOwnProperty(v)&&M[v]!==B[v]&&(o||(o={}),o[v]=B[v])}else o||(h||(h=[]),h.push(Y,o)),o=B;else Y==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,M=M?M.__html:void 0,B!=null&&M!==B&&(h=h||[]).push(Y,B)):Y==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(Y,""+B):Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&(c.hasOwnProperty(Y)?(B!=null&&Y==="onScroll"&&Ke("scroll",e),h||M===B||(h=[])):(h=h||[]).push(Y,B))}o&&(h=h||[]).push("style",o);var Y=h;(n.updateQueue=Y)&&(n.flags|=4)}},pp=function(e,n,o,s){o!==s&&(n.flags|=4)};function Ra(e,n){if(!et)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Nt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,s=0;if(n)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,s|=d.subtreeFlags&14680064,s|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=s,e.childLanes=o,n}function w2(e,n,o){var s=n.pendingProps;switch(Pl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(n),null;case 1:return Dt(n.type)&&Si(),Nt(n),null;case 3:return s=n.stateNode,bo(),Qe(Ot),Qe(jt),Zl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Mi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mn!==null&&(jc(mn),mn=null))),fc(e,n),Nt(n),null;case 5:Gl(n);var d=Ar(ka.current);if(o=n.type,e!==null&&n.stateNode!=null)hp(e,n,o,s,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(i(166));return Nt(n),null}if(e=Ar(Nn.current),Mi(n)){s=n.stateNode,o=n.type;var h=n.memoizedProps;switch(s[Sn]=n,s[ya]=h,e=(n.mode&1)!==0,o){case"dialog":Ke("cancel",s),Ke("close",s);break;case"iframe":case"object":case"embed":Ke("load",s);break;case"video":case"audio":for(d=0;d<ma.length;d++)Ke(ma[d],s);break;case"source":Ke("error",s);break;case"img":case"image":case"link":Ke("error",s),Ke("load",s);break;case"details":Ke("toggle",s);break;case"input":Ie(s,h),Ke("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!h.multiple},Ke("invalid",s);break;case"textarea":We(s,h),Ke("invalid",s)}lt(o,h),d=null;for(var v in h)if(h.hasOwnProperty(v)){var M=h[v];v==="children"?typeof M=="string"?s.textContent!==M&&(h.suppressHydrationWarning!==!0&&ki(s.textContent,M,e),d=["children",M]):typeof M=="number"&&s.textContent!==""+M&&(h.suppressHydrationWarning!==!0&&ki(s.textContent,M,e),d=["children",""+M]):c.hasOwnProperty(v)&&M!=null&&v==="onScroll"&&Ke("scroll",s)}switch(o){case"input":he(s),Ve(s,h,!0);break;case"textarea":he(s),bt(s);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(s.onclick=Ci)}s=d,n.updateQueue=s,s!==null&&(n.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kn(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=v.createElement(o,{is:s.is}):(e=v.createElement(o),o==="select"&&(v=e,s.multiple?v.multiple=!0:s.size&&(v.size=s.size))):e=v.createElementNS(e,o),e[Sn]=n,e[ya]=s,up(e,n,!1,!1),n.stateNode=e;e:{switch(v=At(o,s),o){case"dialog":Ke("cancel",e),Ke("close",e),d=s;break;case"iframe":case"object":case"embed":Ke("load",e),d=s;break;case"video":case"audio":for(d=0;d<ma.length;d++)Ke(ma[d],e);d=s;break;case"source":Ke("error",e),d=s;break;case"img":case"image":case"link":Ke("error",e),Ke("load",e),d=s;break;case"details":Ke("toggle",e),d=s;break;case"input":Ie(e,s),d=Se(e,s),Ke("invalid",e);break;case"option":d=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},d=D({},s,{value:void 0}),Ke("invalid",e);break;case"textarea":We(e,s),d=Mt(e,s),Ke("invalid",e);break;default:d=s}lt(o,d),M=d;for(h in M)if(M.hasOwnProperty(h)){var B=M[h];h==="style"?Ne(e,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Zo(e,B)):h==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&no(e,B):typeof B=="number"&&no(e,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(c.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Ke("scroll",e):B!=null&&k(e,h,B,v))}switch(o){case"input":he(e),Ve(e,s,!1);break;case"textarea":he(e),bt(e);break;case"option":s.value!=null&&e.setAttribute("value",""+re(s.value));break;case"select":e.multiple=!!s.multiple,h=s.value,h!=null?Ze(e,!!s.multiple,h,!1):s.defaultValue!=null&&Ze(e,!!s.multiple,s.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Ci)}switch(o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Nt(n),null;case 6:if(e&&n.stateNode!=null)pp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(i(166));if(o=Ar(ka.current),Ar(Nn.current),Mi(n)){if(s=n.stateNode,o=n.memoizedProps,s[Sn]=n,(h=s.nodeValue!==o)&&(e=Zt,e!==null))switch(e.tag){case 3:ki(s.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ki(s.nodeValue,o,(e.mode&1)!==0)}h&&(n.flags|=4)}else s=(o.nodeType===9?o:o.ownerDocument).createTextNode(s),s[Sn]=n,n.stateNode=s}return Nt(n),null;case 13:if(Qe(tt),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(et&&Kt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)gh(),yo(),n.flags|=98560,h=!1;else if(h=Mi(n),s!==null&&s.dehydrated!==null){if(e===null){if(!h)throw Error(i(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Sn]=n}else yo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Nt(n),h=!1}else mn!==null&&(jc(mn),mn=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(tt.current&1)!==0?pt===0&&(pt=3):Rc())),n.updateQueue!==null&&(n.flags|=4),Nt(n),null);case 4:return bo(),fc(e,n),e===null&&ga(n.stateNode.containerInfo),Nt(n),null;case 10:return Wl(n.type._context),Nt(n),null;case 17:return Dt(n.type)&&Si(),Nt(n),null;case 19:if(Qe(tt),h=n.memoizedState,h===null)return Nt(n),null;if(s=(n.flags&128)!==0,v=h.rendering,v===null)if(s)Ra(h,!1);else{if(pt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(v=zi(e),v!==null){for(n.flags|=128,Ra(h,!1),s=v.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=o,o=n.child;o!==null;)h=o,e=s,h.flags&=14680066,v=h.alternate,v===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=v.childLanes,h.lanes=v.lanes,h.child=v.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=v.memoizedProps,h.memoizedState=v.memoizedState,h.updateQueue=v.updateQueue,h.type=v.type,e=v.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Ge(tt,tt.current&1|2),n.child}e=e.sibling}h.tail!==null&&at()>So&&(n.flags|=128,s=!0,Ra(h,!1),n.lanes=4194304)}else{if(!s)if(e=zi(v),e!==null){if(n.flags|=128,s=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Ra(h,!0),h.tail===null&&h.tailMode==="hidden"&&!v.alternate&&!et)return Nt(n),null}else 2*at()-h.renderingStartTime>So&&o!==1073741824&&(n.flags|=128,s=!0,Ra(h,!1),n.lanes=4194304);h.isBackwards?(v.sibling=n.child,n.child=v):(o=h.last,o!==null?o.sibling=v:n.child=v,h.last=v)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=at(),n.sibling=null,o=tt.current,Ge(tt,s?o&1|2:o&1),n):(Nt(n),null);case 22:case 23:return Nc(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&(n.mode&1)!==0?(Qt&1073741824)!==0&&(Nt(n),n.subtreeFlags&6&&(n.flags|=8192)):Nt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function _2(e,n){switch(Pl(n),n.tag){case 1:return Dt(n.type)&&Si(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bo(),Qe(Ot),Qe(jt),Zl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Gl(n),null;case 13:if(Qe(tt),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));yo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Qe(tt),null;case 4:return bo(),null;case 10:return Wl(n.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var Vi=!1,Rt=!1,b2=typeof WeakSet=="function"?WeakSet:Set,me=null;function Co(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(s){ot(e,n,s)}else o.current=null}function mc(e,n,o){try{o()}catch(s){ot(e,n,s)}}var fp=!1;function k2(e,n){if(Nl=hi,e=Vu(),xl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var s=o.getSelection&&o.getSelection();if(s&&s.rangeCount!==0){o=s.anchorNode;var d=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var v=0,M=-1,B=-1,Y=0,ae=0,le=e,oe=null;t:for(;;){for(var pe;le!==o||d!==0&&le.nodeType!==3||(M=v+d),le!==h||s!==0&&le.nodeType!==3||(B=v+s),le.nodeType===3&&(v+=le.nodeValue.length),(pe=le.firstChild)!==null;)oe=le,le=pe;for(;;){if(le===e)break t;if(oe===o&&++Y===d&&(M=v),oe===h&&++ae===s&&(B=v),(pe=le.nextSibling)!==null)break;le=oe,oe=le.parentNode}le=pe}o=M===-1||B===-1?null:{start:M,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Rl={focusedElem:e,selectionRange:o},hi=!1,me=n;me!==null;)if(n=me,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,me=e;else for(;me!==null;){n=me;try{var ge=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ye=ge.memoizedProps,it=ge.memoizedState,H=n.stateNode,F=H.getSnapshotBeforeUpdate(n.elementType===n.type?ye:gn(n.type,ye),it);H.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var q=n.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(de){ot(n,n.return,de)}if(e=n.sibling,e!==null){e.return=n.return,me=e;break}me=n.return}return ge=fp,fp=!1,ge}function La(e,n,o){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var d=s=s.next;do{if((d.tag&e)===e){var h=d.destroy;d.destroy=void 0,h!==void 0&&mc(n,o,h)}d=d.next}while(d!==s)}}function Gi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.create;o.destroy=s()}o=o.next}while(o!==n)}}function gc(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function mp(e){var n=e.alternate;n!==null&&(e.alternate=null,mp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Sn],delete n[ya],delete n[Tl],delete n[a2],delete n[i2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gp(e){return e.tag===5||e.tag===3||e.tag===4}function vp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vc(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Ci));else if(s!==4&&(e=e.child,e!==null))for(vc(e,n,o),e=e.sibling;e!==null;)vc(e,n,o),e=e.sibling}function yc(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(yc(e,n,o),e=e.sibling;e!==null;)yc(e,n,o),e=e.sibling}var kt=null,vn=!1;function sr(e,n,o){for(o=o.child;o!==null;)yp(e,n,o),o=o.sibling}function yp(e,n,o){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(ii,o)}catch{}switch(o.tag){case 5:Rt||Co(o,n);case 6:var s=kt,d=vn;kt=null,sr(e,n,o),kt=s,vn=d,kt!==null&&(vn?(e=kt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):kt.removeChild(o.stateNode));break;case 18:kt!==null&&(vn?(e=kt,o=o.stateNode,e.nodeType===8?Ml(e.parentNode,o):e.nodeType===1&&Ml(e,o),sa(e)):Ml(kt,o.stateNode));break;case 4:s=kt,d=vn,kt=o.stateNode.containerInfo,vn=!0,sr(e,n,o),kt=s,vn=d;break;case 0:case 11:case 14:case 15:if(!Rt&&(s=o.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){d=s=s.next;do{var h=d,v=h.destroy;h=h.tag,v!==void 0&&((h&2)!==0||(h&4)!==0)&&mc(o,n,v),d=d.next}while(d!==s)}sr(e,n,o);break;case 1:if(!Rt&&(Co(o,n),s=o.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=o.memoizedProps,s.state=o.memoizedState,s.componentWillUnmount()}catch(M){ot(o,n,M)}sr(e,n,o);break;case 21:sr(e,n,o);break;case 22:o.mode&1?(Rt=(s=Rt)||o.memoizedState!==null,sr(e,n,o),Rt=s):sr(e,n,o);break;default:sr(e,n,o)}}function xp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new b2),n.forEach(function(s){var d=T2.bind(null,e,s);o.has(s)||(o.add(s),s.then(d,d))})}}function yn(e,n){var o=n.deletions;if(o!==null)for(var s=0;s<o.length;s++){var d=o[s];try{var h=e,v=n,M=v;e:for(;M!==null;){switch(M.tag){case 5:kt=M.stateNode,vn=!1;break e;case 3:kt=M.stateNode.containerInfo,vn=!0;break e;case 4:kt=M.stateNode.containerInfo,vn=!0;break e}M=M.return}if(kt===null)throw Error(i(160));yp(h,v,d),kt=null,vn=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(Y){ot(d,n,Y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)wp(n,e),n=n.sibling}function wp(e,n){var o=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(n,e),Ln(e),s&4){try{La(3,e,e.return),Gi(3,e)}catch(ye){ot(e,e.return,ye)}try{La(5,e,e.return)}catch(ye){ot(e,e.return,ye)}}break;case 1:yn(n,e),Ln(e),s&512&&o!==null&&Co(o,o.return);break;case 5:if(yn(n,e),Ln(e),s&512&&o!==null&&Co(o,o.return),e.flags&32){var d=e.stateNode;try{no(d,"")}catch(ye){ot(e,e.return,ye)}}if(s&4&&(d=e.stateNode,d!=null)){var h=e.memoizedProps,v=o!==null?o.memoizedProps:h,M=e.type,B=e.updateQueue;if(e.updateQueue=null,B!==null)try{M==="input"&&h.type==="radio"&&h.name!=null&&Be(d,h),At(M,v);var Y=At(M,h);for(v=0;v<B.length;v+=2){var ae=B[v],le=B[v+1];ae==="style"?Ne(d,le):ae==="dangerouslySetInnerHTML"?Zo(d,le):ae==="children"?no(d,le):k(d,ae,le,Y)}switch(M){case"input":Fe(d,h);break;case"textarea":Tt(d,h);break;case"select":var oe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var pe=h.value;pe!=null?Ze(d,!!h.multiple,pe,!1):oe!==!!h.multiple&&(h.defaultValue!=null?Ze(d,!!h.multiple,h.defaultValue,!0):Ze(d,!!h.multiple,h.multiple?[]:"",!1))}d[ya]=h}catch(ye){ot(e,e.return,ye)}}break;case 6:if(yn(n,e),Ln(e),s&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,h=e.memoizedProps;try{d.nodeValue=h}catch(ye){ot(e,e.return,ye)}}break;case 3:if(yn(n,e),Ln(e),s&4&&o!==null&&o.memoizedState.isDehydrated)try{sa(n.containerInfo)}catch(ye){ot(e,e.return,ye)}break;case 4:yn(n,e),Ln(e);break;case 13:yn(n,e),Ln(e),d=e.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(_c=at())),s&4&&xp(e);break;case 22:if(ae=o!==null&&o.memoizedState!==null,e.mode&1?(Rt=(Y=Rt)||ae,yn(n,e),Rt=Y):yn(n,e),Ln(e),s&8192){if(Y=e.memoizedState!==null,(e.stateNode.isHidden=Y)&&!ae&&(e.mode&1)!==0)for(me=e,ae=e.child;ae!==null;){for(le=me=ae;me!==null;){switch(oe=me,pe=oe.child,oe.tag){case 0:case 11:case 14:case 15:La(4,oe,oe.return);break;case 1:Co(oe,oe.return);var ge=oe.stateNode;if(typeof ge.componentWillUnmount=="function"){s=oe,o=oe.return;try{n=s,ge.props=n.memoizedProps,ge.state=n.memoizedState,ge.componentWillUnmount()}catch(ye){ot(s,o,ye)}}break;case 5:Co(oe,oe.return);break;case 22:if(oe.memoizedState!==null){kp(le);continue}}pe!==null?(pe.return=oe,me=pe):kp(le)}ae=ae.sibling}e:for(ae=null,le=e;;){if(le.tag===5){if(ae===null){ae=le;try{d=le.stateNode,Y?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(M=le.stateNode,B=le.memoizedProps.style,v=B!=null&&B.hasOwnProperty("display")?B.display:null,M.style.display=ni("display",v))}catch(ye){ot(e,e.return,ye)}}}else if(le.tag===6){if(ae===null)try{le.stateNode.nodeValue=Y?"":le.memoizedProps}catch(ye){ot(e,e.return,ye)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===e)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===e)break e;for(;le.sibling===null;){if(le.return===null||le.return===e)break e;ae===le&&(ae=null),le=le.return}ae===le&&(ae=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:yn(n,e),Ln(e),s&4&&xp(e);break;case 21:break;default:yn(n,e),Ln(e)}}function Ln(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(gp(o)){var s=o;break e}o=o.return}throw Error(i(160))}switch(s.tag){case 5:var d=s.stateNode;s.flags&32&&(no(d,""),s.flags&=-33);var h=vp(e);yc(e,h,d);break;case 3:case 4:var v=s.stateNode.containerInfo,M=vp(e);vc(e,M,v);break;default:throw Error(i(161))}}catch(B){ot(e,e.return,B)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function C2(e,n,o){me=e,_p(e)}function _p(e,n,o){for(var s=(e.mode&1)!==0;me!==null;){var d=me,h=d.child;if(d.tag===22&&s){var v=d.memoizedState!==null||Vi;if(!v){var M=d.alternate,B=M!==null&&M.memoizedState!==null||Rt;M=Vi;var Y=Rt;if(Vi=v,(Rt=B)&&!Y)for(me=d;me!==null;)v=me,B=v.child,v.tag===22&&v.memoizedState!==null?Cp(d):B!==null?(B.return=v,me=B):Cp(d);for(;h!==null;)me=h,_p(h),h=h.sibling;me=d,Vi=M,Rt=Y}bp(e)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,me=h):bp(e)}}function bp(e){for(;me!==null;){var n=me;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Rt||Gi(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!Rt)if(o===null)s.componentDidMount();else{var d=n.elementType===n.type?o.memoizedProps:gn(n.type,o.memoizedProps);s.componentDidUpdate(d,o.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&kh(n,h,s);break;case 3:var v=n.updateQueue;if(v!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}kh(n,v,o)}break;case 5:var M=n.stateNode;if(o===null&&n.flags&4){o=M;var B=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Y=n.alternate;if(Y!==null){var ae=Y.memoizedState;if(ae!==null){var le=ae.dehydrated;le!==null&&sa(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Rt||n.flags&512&&gc(n)}catch(oe){ot(n,n.return,oe)}}if(n===e){me=null;break}if(o=n.sibling,o!==null){o.return=n.return,me=o;break}me=n.return}}function kp(e){for(;me!==null;){var n=me;if(n===e){me=null;break}var o=n.sibling;if(o!==null){o.return=n.return,me=o;break}me=n.return}}function Cp(e){for(;me!==null;){var n=me;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{Gi(4,n)}catch(B){ot(n,o,B)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var d=n.return;try{s.componentDidMount()}catch(B){ot(n,d,B)}}var h=n.return;try{gc(n)}catch(B){ot(n,h,B)}break;case 5:var v=n.return;try{gc(n)}catch(B){ot(n,v,B)}}}catch(B){ot(n,n.return,B)}if(n===e){me=null;break}var M=n.sibling;if(M!==null){M.return=n.return,me=M;break}me=n.return}}var j2=Math.ceil,Yi=T.ReactCurrentDispatcher,xc=T.ReactCurrentOwner,ln=T.ReactCurrentBatchConfig,Ee=0,gt=null,ct=null,Ct=0,Qt=0,jo=nr(0),pt=0,$a=null,Er=0,Zi=0,wc=0,Ma=null,Ft=null,_c=0,So=1/0,Hn=null,Ki=!1,bc=null,lr=null,Qi=!1,cr=null,Xi=0,Ta=0,kc=null,Ji=-1,es=0;function Et(){return(Ee&6)!==0?at():Ji!==-1?Ji:Ji=at()}function dr(e){return(e.mode&1)===0?1:(Ee&2)!==0&&Ct!==0?Ct&-Ct:l2.transition!==null?(es===0&&(es=vu()),es):(e=He,e!==0||(e=window.event,e=e===void 0?16:Su(e.type)),e)}function xn(e,n,o,s){if(50<Ta)throw Ta=0,kc=null,Error(i(185));na(e,o,s),((Ee&2)===0||e!==gt)&&(e===gt&&((Ee&2)===0&&(Zi|=o),pt===4&&ur(e,Ct)),Wt(e,s),o===1&&Ee===0&&(n.mode&1)===0&&(So=at()+500,Ri&&or()))}function Wt(e,n){var o=e.callbackNode;lg(e,n);var s=ci(e,e===gt?Ct:0);if(s===0)o!==null&&fu(o),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(o!=null&&fu(o),n===1)e.tag===0?s2(Sp.bind(null,e)):uh(Sp.bind(null,e)),r2(function(){(Ee&6)===0&&or()}),o=null;else{switch(yu(s)){case 1:o=nl;break;case 4:o=mu;break;case 16:o=ai;break;case 536870912:o=gu;break;default:o=ai}o=Ip(o,jp.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function jp(e,n){if(Ji=-1,es=0,(Ee&6)!==0)throw Error(i(327));var o=e.callbackNode;if(No()&&e.callbackNode!==o)return null;var s=ci(e,e===gt?Ct:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||n)n=ts(e,s);else{n=s;var d=Ee;Ee|=2;var h=Rp();(gt!==e||Ct!==n)&&(Hn=null,So=at()+500,zr(e,n));do try{R2();break}catch(M){Np(e,M)}while(!0);Fl(),Yi.current=h,Ee=d,ct!==null?n=0:(gt=null,Ct=0,n=pt)}if(n!==0){if(n===2&&(d=rl(e),d!==0&&(s=d,n=Cc(e,d))),n===1)throw o=$a,zr(e,0),ur(e,s),Wt(e,at()),o;if(n===6)ur(e,s);else{if(d=e.current.alternate,(s&30)===0&&!S2(d)&&(n=ts(e,s),n===2&&(h=rl(e),h!==0&&(s=h,n=Cc(e,h))),n===1))throw o=$a,zr(e,0),ur(e,s),Wt(e,at()),o;switch(e.finishedWork=d,e.finishedLanes=s,n){case 0:case 1:throw Error(i(345));case 2:Or(e,Ft,Hn);break;case 3:if(ur(e,s),(s&130023424)===s&&(n=_c+500-at(),10<n)){if(ci(e,0)!==0)break;if(d=e.suspendedLanes,(d&s)!==s){Et(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=$l(Or.bind(null,e,Ft,Hn),n);break}Or(e,Ft,Hn);break;case 4:if(ur(e,s),(s&4194240)===s)break;for(n=e.eventTimes,d=-1;0<s;){var v=31-pn(s);h=1<<v,v=n[v],v>d&&(d=v),s&=~h}if(s=d,s=at()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*j2(s/1960))-s,10<s){e.timeoutHandle=$l(Or.bind(null,e,Ft,Hn),s);break}Or(e,Ft,Hn);break;case 5:Or(e,Ft,Hn);break;default:throw Error(i(329))}}}return Wt(e,at()),e.callbackNode===o?jp.bind(null,e):null}function Cc(e,n){var o=Ma;return e.current.memoizedState.isDehydrated&&(zr(e,n).flags|=256),e=ts(e,n),e!==2&&(n=Ft,Ft=o,n!==null&&jc(n)),e}function jc(e){Ft===null?Ft=e:Ft.push.apply(Ft,e)}function S2(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var s=0;s<o.length;s++){var d=o[s],h=d.getSnapshot;d=d.value;try{if(!fn(h(),d))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ur(e,n){for(n&=~wc,n&=~Zi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-pn(n),s=1<<o;e[o]=-1,n&=~s}}function Sp(e){if((Ee&6)!==0)throw Error(i(327));No();var n=ci(e,0);if((n&1)===0)return Wt(e,at()),null;var o=ts(e,n);if(e.tag!==0&&o===2){var s=rl(e);s!==0&&(n=s,o=Cc(e,s))}if(o===1)throw o=$a,zr(e,0),ur(e,n),Wt(e,at()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Or(e,Ft,Hn),Wt(e,at()),null}function Sc(e,n){var o=Ee;Ee|=1;try{return e(n)}finally{Ee=o,Ee===0&&(So=at()+500,Ri&&or())}}function Pr(e){cr!==null&&cr.tag===0&&(Ee&6)===0&&No();var n=Ee;Ee|=1;var o=ln.transition,s=He;try{if(ln.transition=null,He=1,e)return e()}finally{He=s,ln.transition=o,Ee=n,(Ee&6)===0&&or()}}function Nc(){Qt=jo.current,Qe(jo)}function zr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,n2(o)),ct!==null)for(o=ct.return;o!==null;){var s=o;switch(Pl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Si();break;case 3:bo(),Qe(Ot),Qe(jt),Zl();break;case 5:Gl(s);break;case 4:bo();break;case 13:Qe(tt);break;case 19:Qe(tt);break;case 10:Wl(s.type._context);break;case 22:case 23:Nc()}o=o.return}if(gt=e,ct=e=hr(e.current,null),Ct=Qt=n,pt=0,$a=null,wc=Zi=Er=0,Ft=Ma=null,Tr!==null){for(n=0;n<Tr.length;n++)if(o=Tr[n],s=o.interleaved,s!==null){o.interleaved=null;var d=s.next,h=o.pending;if(h!==null){var v=h.next;h.next=d,s.next=v}o.pending=s}Tr=null}return e}function Np(e,n){do{var o=ct;try{if(Fl(),Oi.current=Wi,Di){for(var s=nt.memoizedState;s!==null;){var d=s.queue;d!==null&&(d.pending=null),s=s.next}Di=!1}if(Ir=0,mt=ht=nt=null,Ca=!1,ja=0,xc.current=null,o===null||o.return===null){pt=1,$a=n,ct=null;break}e:{var h=e,v=o.return,M=o,B=n;if(n=Ct,M.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var Y=B,ae=M,le=ae.tag;if((ae.mode&1)===0&&(le===0||le===11||le===15)){var oe=ae.alternate;oe?(ae.updateQueue=oe.updateQueue,ae.memoizedState=oe.memoizedState,ae.lanes=oe.lanes):(ae.updateQueue=null,ae.memoizedState=null)}var pe=Xh(v);if(pe!==null){pe.flags&=-257,Jh(pe,v,M,h,n),pe.mode&1&&Qh(h,Y,n),n=pe,B=Y;var ge=n.updateQueue;if(ge===null){var ye=new Set;ye.add(B),n.updateQueue=ye}else ge.add(B);break e}else{if((n&1)===0){Qh(h,Y,n),Rc();break e}B=Error(i(426))}}else if(et&&M.mode&1){var it=Xh(v);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),Jh(it,v,M,h,n),Dl(ko(B,M));break e}}h=B=ko(B,M),pt!==4&&(pt=2),Ma===null?Ma=[h]:Ma.push(h),h=v;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var H=Zh(h,B,n);bh(h,H);break e;case 1:M=B;var F=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(lr===null||!lr.has(q)))){h.flags|=65536,n&=-n,h.lanes|=n;var de=Kh(h,M,n);bh(h,de);break e}}h=h.return}while(h!==null)}$p(o)}catch(xe){n=xe,ct===o&&o!==null&&(ct=o=o.return);continue}break}while(!0)}function Rp(){var e=Yi.current;return Yi.current=Wi,e===null?Wi:e}function Rc(){(pt===0||pt===3||pt===2)&&(pt=4),gt===null||(Er&268435455)===0&&(Zi&268435455)===0||ur(gt,Ct)}function ts(e,n){var o=Ee;Ee|=2;var s=Rp();(gt!==e||Ct!==n)&&(Hn=null,zr(e,n));do try{N2();break}catch(d){Np(e,d)}while(!0);if(Fl(),Ee=o,Yi.current=s,ct!==null)throw Error(i(261));return gt=null,Ct=0,pt}function N2(){for(;ct!==null;)Lp(ct)}function R2(){for(;ct!==null&&!J0();)Lp(ct)}function Lp(e){var n=Ap(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,n===null?$p(e):ct=n,xc.current=null}function $p(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=w2(o,n,Qt),o!==null){ct=o;return}}else{if(o=_2(o,n),o!==null){o.flags&=32767,ct=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pt=6,ct=null;return}}if(n=n.sibling,n!==null){ct=n;return}ct=n=e}while(n!==null);pt===0&&(pt=5)}function Or(e,n,o){var s=He,d=ln.transition;try{ln.transition=null,He=1,L2(e,n,o,s)}finally{ln.transition=d,He=s}return null}function L2(e,n,o,s){do No();while(cr!==null);if((Ee&6)!==0)throw Error(i(327));o=e.finishedWork;var d=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var h=o.lanes|o.childLanes;if(cg(e,h),e===gt&&(ct=gt=null,Ct=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Qi||(Qi=!0,Ip(ai,function(){return No(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=ln.transition,ln.transition=null;var v=He;He=1;var M=Ee;Ee|=4,xc.current=null,k2(e,o),wp(o,e),Zg(Rl),hi=!!Nl,Rl=Nl=null,e.current=o,C2(o),eg(),Ee=M,He=v,ln.transition=h}else e.current=o;if(Qi&&(Qi=!1,cr=e,Xi=d),h=e.pendingLanes,h===0&&(lr=null),rg(o.stateNode),Wt(e,at()),n!==null)for(s=e.onRecoverableError,o=0;o<n.length;o++)d=n[o],s(d.value,{componentStack:d.stack,digest:d.digest});if(Ki)throw Ki=!1,e=bc,bc=null,e;return(Xi&1)!==0&&e.tag!==0&&No(),h=e.pendingLanes,(h&1)!==0?e===kc?Ta++:(Ta=0,kc=e):Ta=0,or(),null}function No(){if(cr!==null){var e=yu(Xi),n=ln.transition,o=He;try{if(ln.transition=null,He=16>e?16:e,cr===null)var s=!1;else{if(e=cr,cr=null,Xi=0,(Ee&6)!==0)throw Error(i(331));var d=Ee;for(Ee|=4,me=e.current;me!==null;){var h=me,v=h.child;if((me.flags&16)!==0){var M=h.deletions;if(M!==null){for(var B=0;B<M.length;B++){var Y=M[B];for(me=Y;me!==null;){var ae=me;switch(ae.tag){case 0:case 11:case 15:La(8,ae,h)}var le=ae.child;if(le!==null)le.return=ae,me=le;else for(;me!==null;){ae=me;var oe=ae.sibling,pe=ae.return;if(mp(ae),ae===Y){me=null;break}if(oe!==null){oe.return=pe,me=oe;break}me=pe}}}var ge=h.alternate;if(ge!==null){var ye=ge.child;if(ye!==null){ge.child=null;do{var it=ye.sibling;ye.sibling=null,ye=it}while(ye!==null)}}me=h}}if((h.subtreeFlags&2064)!==0&&v!==null)v.return=h,me=v;else e:for(;me!==null;){if(h=me,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:La(9,h,h.return)}var H=h.sibling;if(H!==null){H.return=h.return,me=H;break e}me=h.return}}var F=e.current;for(me=F;me!==null;){v=me;var q=v.child;if((v.subtreeFlags&2064)!==0&&q!==null)q.return=v,me=q;else e:for(v=F;me!==null;){if(M=me,(M.flags&2048)!==0)try{switch(M.tag){case 0:case 11:case 15:Gi(9,M)}}catch(xe){ot(M,M.return,xe)}if(M===v){me=null;break e}var de=M.sibling;if(de!==null){de.return=M.return,me=de;break e}me=M.return}}if(Ee=d,or(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(ii,e)}catch{}s=!0}return s}finally{He=o,ln.transition=n}}return!1}function Mp(e,n,o){n=ko(o,n),n=Zh(e,n,1),e=ir(e,n,1),n=Et(),e!==null&&(na(e,1,n),Wt(e,n))}function ot(e,n,o){if(e.tag===3)Mp(e,e,o);else for(;n!==null;){if(n.tag===3){Mp(n,e,o);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(lr===null||!lr.has(s))){e=ko(o,e),e=Kh(n,e,1),n=ir(n,e,1),e=Et(),n!==null&&(na(n,1,e),Wt(n,e));break}}n=n.return}}function $2(e,n,o){var s=e.pingCache;s!==null&&s.delete(n),n=Et(),e.pingedLanes|=e.suspendedLanes&o,gt===e&&(Ct&o)===o&&(pt===4||pt===3&&(Ct&130023424)===Ct&&500>at()-_c?zr(e,0):wc|=o),Wt(e,n)}function Tp(e,n){n===0&&((e.mode&1)===0?n=1:(n=li,li<<=1,(li&130023424)===0&&(li=4194304)));var o=Et();e=Bn(e,n),e!==null&&(na(e,n,o),Wt(e,o))}function M2(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Tp(e,o)}function T2(e,n){var o=0;switch(e.tag){case 13:var s=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(n),Tp(e,o)}var Ap;Ap=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ot.current)Bt=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return Bt=!1,x2(e,n,o);Bt=(e.flags&131072)!==0}else Bt=!1,et&&(n.flags&1048576)!==0&&hh(n,$i,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Ui(e,n),e=n.pendingProps;var d=mo(n,jt.current);_o(n,o),d=Xl(null,n,s,e,d,o);var h=Jl();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Dt(s)?(h=!0,Ni(n)):h=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ul(n),d.updater=Hi,n.stateNode=d,d._reactInternals=n,ac(n,s,e,o),n=cc(null,n,s,!0,h,o)):(n.tag=0,et&&h&&El(n),It(null,n,d,o),n=n.child),n;case 16:s=n.elementType;e:{switch(Ui(e,n),e=n.pendingProps,d=s._init,s=d(s._payload),n.type=s,d=n.tag=I2(s),e=gn(s,e),d){case 0:n=lc(null,n,s,e,o);break e;case 1:n=ap(null,n,s,e,o);break e;case 11:n=ep(null,n,s,e,o);break e;case 14:n=tp(null,n,s,gn(s.type,e),o);break e}throw Error(i(306,s,""))}return n;case 0:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:gn(s,d),lc(e,n,s,d,o);case 1:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:gn(s,d),ap(e,n,s,d,o);case 3:e:{if(ip(n),e===null)throw Error(i(387));s=n.pendingProps,h=n.memoizedState,d=h.element,_h(e,n),Pi(n,s,null,o);var v=n.memoizedState;if(s=v.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){d=ko(Error(i(423)),n),n=sp(e,n,s,o,d);break e}else if(s!==d){d=ko(Error(i(424)),n),n=sp(e,n,s,o,d);break e}else for(Kt=tr(n.stateNode.containerInfo.firstChild),Zt=n,et=!0,mn=null,o=xh(n,null,s,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(yo(),s===d){n=Wn(e,n,o);break e}It(e,n,s,o)}n=n.child}return n;case 5:return Ch(n),e===null&&Ol(n),s=n.type,d=n.pendingProps,h=e!==null?e.memoizedProps:null,v=d.children,Ll(s,d)?v=null:h!==null&&Ll(s,h)&&(n.flags|=32),op(e,n),It(e,n,v,o),n.child;case 6:return e===null&&Ol(n),null;case 13:return lp(e,n,o);case 4:return Vl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=xo(n,null,s,o):It(e,n,s,o),n.child;case 11:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:gn(s,d),ep(e,n,s,d,o);case 7:return It(e,n,n.pendingProps,o),n.child;case 8:return It(e,n,n.pendingProps.children,o),n.child;case 12:return It(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(s=n.type._context,d=n.pendingProps,h=n.memoizedProps,v=d.value,Ge(Ai,s._currentValue),s._currentValue=v,h!==null)if(fn(h.value,v)){if(h.children===d.children&&!Ot.current){n=Wn(e,n,o);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var M=h.dependencies;if(M!==null){v=h.child;for(var B=M.firstContext;B!==null;){if(B.context===s){if(h.tag===1){B=Fn(-1,o&-o),B.tag=2;var Y=h.updateQueue;if(Y!==null){Y=Y.shared;var ae=Y.pending;ae===null?B.next=B:(B.next=ae.next,ae.next=B),Y.pending=B}}h.lanes|=o,B=h.alternate,B!==null&&(B.lanes|=o),Hl(h.return,o,n),M.lanes|=o;break}B=B.next}}else if(h.tag===10)v=h.type===n.type?null:h.child;else if(h.tag===18){if(v=h.return,v===null)throw Error(i(341));v.lanes|=o,M=v.alternate,M!==null&&(M.lanes|=o),Hl(v,o,n),v=h.sibling}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===n){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}It(e,n,d.children,o),n=n.child}return n;case 9:return d=n.type,s=n.pendingProps.children,_o(n,o),d=an(d),s=s(d),n.flags|=1,It(e,n,s,o),n.child;case 14:return s=n.type,d=gn(s,n.pendingProps),d=gn(s.type,d),tp(e,n,s,d,o);case 15:return np(e,n,n.type,n.pendingProps,o);case 17:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:gn(s,d),Ui(e,n),n.tag=1,Dt(s)?(e=!0,Ni(n)):e=!1,_o(n,o),Gh(n,s,d),ac(n,s,d,o),cc(null,n,s,!0,e,o);case 19:return dp(e,n,o);case 22:return rp(e,n,o)}throw Error(i(156,n.tag))};function Ip(e,n){return pu(e,n)}function A2(e,n,o,s){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,n,o,s){return new A2(e,n,o,s)}function Lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function I2(e){if(typeof e=="function")return Lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===V)return 11;if(e===ce)return 14}return 2}function hr(e,n){var o=e.alternate;return o===null?(o=cn(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function ns(e,n,o,s,d,h){var v=2;if(s=e,typeof e=="function")Lc(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case z:return Dr(o.children,d,h,n);case O:v=8,d|=8;break;case U:return e=cn(12,o,n,d|2),e.elementType=U,e.lanes=h,e;case te:return e=cn(13,o,n,d),e.elementType=te,e.lanes=h,e;case ie:return e=cn(19,o,n,d),e.elementType=ie,e.lanes=h,e;case J:return rs(o,d,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:v=10;break e;case X:v=9;break e;case V:v=11;break e;case ce:v=14;break e;case se:v=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=cn(v,o,n,d),n.elementType=e,n.type=s,n.lanes=h,n}function Dr(e,n,o,s){return e=cn(7,e,s,n),e.lanes=o,e}function rs(e,n,o,s){return e=cn(22,e,s,n),e.elementType=J,e.lanes=o,e.stateNode={isHidden:!1},e}function $c(e,n,o){return e=cn(6,e,null,n),e.lanes=o,e}function Mc(e,n,o){return n=cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function E2(e,n,o,s,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=s,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tc(e,n,o,s,d,h,v,M,B){return e=new E2(e,n,o,M,B),n===1?(n=1,h===!0&&(n|=8)):n=0,h=cn(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:s,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(h),e}function P2(e,n,o){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:s==null?null:""+s,children:e,containerInfo:n,implementation:o}}function Ep(e){if(!e)return rr;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Dt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Dt(o))return ch(e,o,n)}return n}function Pp(e,n,o,s,d,h,v,M,B){return e=Tc(o,s,!0,e,d,h,v,M,B),e.context=Ep(null),o=e.current,s=Et(),d=dr(o),h=Fn(s,d),h.callback=n??null,ir(o,h,d),e.current.lanes=d,na(e,d,s),Wt(e,s),e}function os(e,n,o,s){var d=n.current,h=Et(),v=dr(d);return o=Ep(o),n.context===null?n.context=o:n.pendingContext=o,n=Fn(h,v),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=ir(d,n,v),e!==null&&(xn(e,d,v,h),Ei(e,d,v)),v}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Ac(e,n){zp(e,n),(e=e.alternate)&&zp(e,n)}function z2(){return null}var Op=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ic(e){this._internalRoot=e}is.prototype.render=Ic.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));os(e,n,null,null)},is.prototype.unmount=Ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pr(function(){os(null,e,null,null)}),n[Pn]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var n=_u();e={blockedOn:null,target:e,priority:n};for(var o=0;o<Xn.length&&n!==0&&n<Xn[o].priority;o++);Xn.splice(o,0,e),o===0&&Cu(e)}};function Ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function O2(e,n,o,s,d){if(d){if(typeof s=="function"){var h=s;s=function(){var Y=as(v);h.call(Y)}}var v=Pp(n,s,e,0,null,!1,!1,"",Dp);return e._reactRootContainer=v,e[Pn]=v.current,ga(e.nodeType===8?e.parentNode:e),Pr(),v}for(;d=e.lastChild;)e.removeChild(d);if(typeof s=="function"){var M=s;s=function(){var Y=as(B);M.call(Y)}}var B=Tc(e,0,!1,null,null,!1,!1,"",Dp);return e._reactRootContainer=B,e[Pn]=B.current,ga(e.nodeType===8?e.parentNode:e),Pr(function(){os(n,B,o,s)}),B}function ls(e,n,o,s,d){var h=o._reactRootContainer;if(h){var v=h;if(typeof d=="function"){var M=d;d=function(){var B=as(v);M.call(B)}}os(n,v,e,d)}else v=O2(o,n,e,d,s);return as(v)}xu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=ta(n.pendingLanes);o!==0&&(al(n,o|1),Wt(n,at()),(Ee&6)===0&&(So=at()+500,or()))}break;case 13:Pr(function(){var s=Bn(e,1);if(s!==null){var d=Et();xn(s,e,1,d)}}),Ac(e,1)}},il=function(e){if(e.tag===13){var n=Bn(e,134217728);if(n!==null){var o=Et();xn(n,e,134217728,o)}Ac(e,134217728)}},wu=function(e){if(e.tag===13){var n=dr(e),o=Bn(e,n);if(o!==null){var s=Et();xn(o,e,n,s)}Ac(e,n)}},_u=function(){return He},bu=function(e,n){var o=He;try{return He=e,n()}finally{He=o}},Qo=function(e,n,o){switch(n){case"input":if(Fe(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var s=o[n];if(s!==e&&s.form===e.form){var d=ji(s);if(!d)throw Error(i(90));ve(s),Fe(s,d)}}}break;case"textarea":Tt(e,o);break;case"select":n=o.value,n!=null&&Ze(e,!!o.multiple,n,!1)}},iu=Sc,su=Pr;var D2={usingClientEntryPoint:!1,Events:[xa,po,ji,ou,au,Sc]},Aa={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B2={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||z2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{ii=cs.inject(B2),jn=cs}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D2,Ht.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ec(n))throw Error(i(200));return P2(e,n,null,o)},Ht.createRoot=function(e,n){if(!Ec(e))throw Error(i(299));var o=!1,s="",d=Op;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Tc(e,1,!1,null,null,o,!1,s,d),e[Pn]=n.current,ga(e.nodeType===8?e.parentNode:e),new Ic(n)},Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=uu(n),e=e===null?null:e.stateNode,e},Ht.flushSync=function(e){return Pr(e)},Ht.hydrate=function(e,n,o){if(!ss(n))throw Error(i(200));return ls(null,e,n,!0,o)},Ht.hydrateRoot=function(e,n,o){if(!Ec(e))throw Error(i(405));var s=o!=null&&o.hydratedSources||null,d=!1,h="",v=Op;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),n=Pp(n,null,e,1,o??null,d,!1,h,v),e[Pn]=n.current,ga(e),s)for(e=0;e<s.length;e++)o=s[e],d=o._getVersion,d=d(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,d]:n.mutableSourceEagerHydrationData.push(o,d);return new is(n)},Ht.render=function(e,n,o){if(!ss(n))throw Error(i(200));return ls(null,e,n,!1,o)},Ht.unmountComponentAtNode=function(e){if(!ss(e))throw Error(i(40));return e._reactRootContainer?(Pr(function(){ls(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1},Ht.unstable_batchedUpdates=Sc,Ht.unstable_renderSubtreeIntoContainer=function(e,n,o,s){if(!ss(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return ls(e,n,o,!1,s)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var Gp;function bf(){if(Gp)return Oc.exports;Gp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Oc.exports=G2(),Oc.exports}var Yp;function Y2(){if(Yp)return ds;Yp=1;var t=bf();return ds.createRoot=t.createRoot,ds.hydrateRoot=t.hydrateRoot,ds}var Z2=Y2();const K2=_f(Z2);function kf(t){var a,i,l="";if(typeof t=="string"||typeof t=="number")l+=t;else if(typeof t=="object")if(Array.isArray(t)){var c=t.length;for(a=0;a<c;a++)t[a]&&(i=kf(t[a]))&&(l&&(l+=" "),l+=i)}else for(i in t)t[i]&&(l&&(l+=" "),l+=i);return l}function ee(){for(var t,a,i=0,l="",c=arguments.length;i<c;i++)(t=arguments[i])&&(a=kf(t))&&(l&&(l+=" "),l+=a);return l}const Za=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Za.displayName="PlusIcon";const Q2="_root_7uomf_13",X2="_sm_7uomf_82",J2="_md_7uomf_88",ev="_lg_7uomf_94",tv="_horizontal_7uomf_107",nv="_alignStart_7uomf_121",rv="_vertical_7uomf_125",ov="_inner_7uomf_131",av="_iconSlot_7uomf_146",iv="_label_7uomf_163",Br={root:Q2,sm:X2,md:J2,lg:ev,horizontal:tv,alignStart:nv,vertical:rv,inner:ov,iconSlot:av,label:iv};function Zp(t){return typeof t=="number"?`${t}px`:t}const sv=g.forwardRef(({size:t="md",layout:a="horizontal",align:i="center",label:l="Add",hideLabel:c=!1,icon:u,height:p,borderRadius:f,className:m,style:x,disabled:y,type:_="button",...w},$)=>{const N=u??r.jsx(Za,{size:"100%"}),j={};return p!==void 0&&(j["--area-min-height"]=Zp(p)),f!==void 0&&(j["--area-radius"]=Zp(f)),r.jsx("button",{ref:$,type:_,className:ee(Br.root,Br[t],Br[a],i==="start"&&Br.alignStart,m),disabled:y,"data-size":t,"data-layout":a,style:{...j,...x},...w,children:r.jsxs("span",{className:Br.inner,children:[r.jsx("span",{className:Br.iconSlot,"aria-hidden":"true",children:N}),!c&&l&&r.jsx("span",{className:Br.label,children:l})]})})});sv.displayName="AreaButton";const lv="_root_b29pw_8",cv="_image_b29pw_33",dv="_initials_b29pw_40",uv="_iconSlot_b29pw_52",fr={root:lv,image:cv,initials:dv,iconSlot:uv,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function hv({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function pv(t){const a=t.trim().split(/\s+/).filter(c=>/[\p{L}\p{N}]/u.test(c));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),l=a[a.length-1].charAt(0);return(i+l).toUpperCase()}const In=g.forwardRef(({src:t,alt:a,initials:i,name:l,icon:c,size:u="md",color:p="neutral",variant:f="subtle",shape:m="circle",className:x,...y},_)=>{const[w,$]=g.useState(!1),N=!!t&&!w,j=(i==null?void 0:i.slice(0,2).toUpperCase())??(l?pv(l):"");let R;return N?R=r.jsx("img",{src:t,alt:a??"",className:fr.image,onError:()=>$(!0),draggable:!1},t):j?R=r.jsx("span",{className:fr.initials,"aria-hidden":a?void 0:!0,children:j}):R=r.jsx("span",{className:fr.iconSlot,"aria-hidden":"true",children:c??r.jsx(hv,{})}),r.jsx("span",{ref:_,"data-size":u,"data-color":p,"data-variant":f,"data-shape":m,className:ee(fr.root,fr[`size-${u}`],fr[`color-${p}`],fr[`variant-${f}`],fr[`shape-${m}`],x),...y,children:R})});In.displayName="Avatar";const fv="_root_uqz3u_7",mv={root:fv},tn=g.forwardRef(({as:t="span",className:a,children:i,...l},c)=>r.jsx(t,{ref:c,className:ee(mv.root,a),...l,children:i}));tn.displayName="Eyebrow";const gv="_root_1tnwf_15",vv={root:gv},yv=g.forwardRef(({scale:t="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:l="",onChange:c,readOnly:u=!1,disabled:p=!1,className:f,onInput:m,...x},y)=>{const _=i!==void 0,w=g.useRef(null),[$,N]=g.useState(()=>_?!i:!l),j=g.useCallback(k=>{w.current=k,typeof y=="function"?y(k):y&&(y.current=k)},[y]);g.useEffect(()=>{!_&&w.current&&l&&(w.current.textContent=l,N(!l))},[]),g.useEffect(()=>{_&&w.current&&(w.current.textContent??"")!==i&&(w.current.textContent=i??"",N(!(i??"")))},[i,_]);const R=k=>{const T=k.currentTarget.textContent??"";N(T===""),c==null||c(T),m==null||m(k)},L=k=>{k.preventDefault();const T=k.clipboardData.getData("text/plain");document.execCommand("insertText",!1,T)},S=!p&&!u;return r.jsx("span",{ref:j,contentEditable:S?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":p||void 0,"aria-readonly":u||void 0,"data-scale":t,"data-empty":$||void 0,"data-placeholder":a,"data-disabled":p||void 0,"data-readonly":u||void 0,className:ee(vv.root,f),onInput:R,onPaste:L,...x})});yv.displayName="TypeBox";const xv="_root_1brpy_12",wv="_ghost_1brpy_27",_v="_path_1brpy_32",Ea={root:xv,"ai-spin":"_ai-spin_1brpy_1",ghost:wv,"ai-morph":"_ai-morph_1brpy_1",path:_v,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},bv={xs:16,sm:24,md:32,lg:48,xl:64},kv={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Kp="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",us=t=>t==="inverse"||t==="inverse-light",Cv=t=>t==="stroke"||t==="stroke-light",$d=g.forwardRef(({size:t="md",variant:a="gradient-fill",state:i="loading",className:l,style:c,"aria-label":u,...p},f)=>{const m=g.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${m}`,y=`aiglow-${m}`,_=typeof t=="string",w=_?bv[t]:t,$=_?kv[t]:w<=16?1.75:w<=24?1.5:w<=32?1.25:1.1,N=a==="gradient-fill"?`url(#${x})`:us(a)?"currentColor":"none",j=us(a)?"none":Cv(a)?"currentColor":`url(#${x})`,R="currentColor",L=a!=="stroke"&&a!=="stroke-light"&&!us(a);return r.jsxs("svg",{ref:f,width:w,height:w,viewBox:"0 0 24 24",fill:"none",className:ee(Ea.root,Ea[`variant-${a}`],Ea[`state-${i}`],l),style:c,"data-state":i,"aria-label":u??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...p,children:[!us(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:Kp,stroke:R,strokeWidth:$*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Ea.ghost}),r.jsx("path",{d:Kp,fill:N,stroke:j==="none"?void 0:j,strokeWidth:j==="none"?void 0:$,strokeLinecap:"round",strokeLinejoin:"round",filter:L?`url(#${y})`:void 0,className:Ea.path})]})});$d.displayName="AILoader";const jv="_root_10act_14",Sv="_hovered_10act_68",Nv="_loading_10act_69",Rv="_sm_10act_90",Lv="_md_10act_98",$v="_lg_10act_106",Mv="_dark_10act_116",Tv="_icon_10act_122",Ro={root:jv,hovered:Sv,loading:Nv,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:Rv,md:Lv,lg:$v,dark:Mv,icon:Tv},Qp={sm:12,md:14,lg:18};function Av({size:t,light:a}){return r.jsxs("svg",{width:t,height:t,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const Cf=g.forwardRef(({size:t="md",dark:a,loading:i,className:l,onMouseEnter:c,onMouseLeave:u,...p},f)=>{const[m,x]=g.useState(!1);return r.jsx("button",{ref:f,className:ee(Ro.root,Ro[t],a&&Ro.dark,i?Ro.loading:m&&Ro.hovered,l),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),c==null||c(y)},onMouseLeave:y=>{x(!1),u==null||u(y)},...p,children:r.jsx("span",{className:Ro.icon,children:i?r.jsx($d,{size:Qp[t],variant:a?"inverse-light":"gradient-fill"}):r.jsx(Av,{size:Qp[t],light:a})})})});Cf.displayName="AICoreButton";const Iv="_root_1qx4u_9",Ev="_star_1qx4u_34",Fc={root:Iv,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:Ev},Pv="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",jf=g.forwardRef(({size:t="sm",className:a,...i},l)=>r.jsx("span",{ref:l,"data-size":t,"aria-hidden":"true",className:ee(Fc.root,Fc[`size-${t}`],a),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:Fc.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:Pv,fill:"currentColor"})})}));jf.displayName="AIAvatar";const zv="_shell_lalw3_21",Ov="_wrapper_lalw3_58",Dv="_card_lalw3_65",Bv="_cardClip_lalw3_94",Fv="_textarea_lalw3_160",Wv="_actions_lalw3_203",Io={shell:zv,wrapper:Ov,card:Dv,cardClip:Bv,textarea:Fv,actions:Wv},Sf=g.forwardRef(({className:t,children:a,...i},l)=>r.jsx("div",{ref:l,className:ee(Io.shell,t),...i,children:a}));Sf.displayName="AIComposer";function Hv(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const Nf=g.forwardRef(({value:t,onChange:a,onSubmit:i,maxRows:l=5,radius:c="sm",placeholder:u="Ask AI anything…",className:p,onKeyDown:f,disabled:m,children:x,style:y,..._},w)=>{const $=g.useRef(null);g.useEffect(()=>{const S=$.current;S&&(S.style.height="auto",S.style.height=`${S.scrollHeight}px`)},[t]);const N=g.useCallback(S=>a(S.target.value),[a]),j=g.useCallback(S=>{f==null||f(S),!S.defaultPrevented&&S.key==="Enter"&&!S.shiftKey&&i&&(S.preventDefault(),i())},[f,i]),R=g.useCallback(S=>{$.current=S,Hv(w,S)},[w]),L={...y??{},"--ai-composer-max-rows":l};return r.jsx("div",{className:ee(Io.wrapper,p),"data-radius":c,children:r.jsx("div",{className:Io.card,children:r.jsxs("div",{className:Io.cardClip,children:[r.jsx("textarea",{..._,ref:R,className:Io.textarea,rows:1,value:t,onChange:N,onKeyDown:j,placeholder:u,disabled:m,style:L}),x!=null&&r.jsx("div",{className:Io.actions,children:x})]})})})});Nf.displayName="AIComposerInput";const qv="_root_fv0gc_10",Uv="_simple_fv0gc_28",Vv="_float_fv0gc_83",Xp={root:qv,simple:Uv,float:Vv},Gv=g.forwardRef(({variant:t="simple",className:a,children:i,...l},c)=>r.jsx("section",{ref:c,"data-variant":t,className:ee(Xp.root,Xp[t],a),...l,children:i}));Gv.displayName="AIConversation";const Yv="_fadeFrame_1l0ib_19",Zv="_scroller_1l0ib_32",Kv="_content_1l0ib_89",Qv="_messageBlock_1l0ib_108",Xv="_messageBlockAi_1l0ib_116",Jv="_inboundBlock_1l0ib_128",e3="_inboundLoader_1l0ib_136",t3="_inboundLoaderLabel_1l0ib_146",n3="_outboundBlock_1l0ib_153",r3="_outboundHeader_1l0ib_161",o3="_messageBlockUser_1l0ib_168",a3="_aiThreadOutboundIn_1l0ib_1",i3="_messageBody_1l0ib_182",s3="_messageBodyAi_1l0ib_193",l3="_messageBodyUser_1l0ib_200",c3="_label_1l0ib_159",d3="_labelAi_1l0ib_221",u3="_labelUser_1l0ib_159",h3="_labelAvatar_1l0ib_224",p3="_labelText_1l0ib_237",f3="_timestamp_1l0ib_244",m3="_timestampAi_1l0ib_259",g3="_timestampUser_1l0ib_260",v3="_timestampInline_1l0ib_270",y3="_aiThreadOutboundFadeIn_1l0ib_1",Me={fadeFrame:Yv,scroller:Zv,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:Kv,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:Qv,messageBlockAi:Xv,inboundBlock:Jv,inboundLoader:e3,inboundLoaderLabel:t3,outboundBlock:n3,outboundHeader:r3,messageBlockUser:o3,aiThreadOutboundIn:a3,messageBody:i3,messageBodyAi:s3,messageBodyUser:l3,label:c3,labelAi:d3,labelUser:u3,labelAvatar:h3,labelText:p3,timestamp:f3,timestampAi:m3,timestampUser:g3,timestampInline:v3,aiThreadOutboundFadeIn:y3},Jp=8;function x3(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const w3=g.forwardRef(({density:t="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:l=80,className:c,children:u,...p},f)=>{const m=g.useRef(null),x=g.useRef(null),y=g.useRef(!0),[_,w]=g.useState(!1),[$,N]=g.useState(!1),j=g.useCallback(R=>{m.current=R,x3(f,R)},[f]);return g.useEffect(()=>{const R=m.current,L=x.current;if(!R||!L)return;const S=()=>{const{scrollTop:z,scrollHeight:O,clientHeight:U}=R;return O-z-U<l},k=z=>{R.scrollTo({top:R.scrollHeight,behavior:z?"smooth":"auto"})},T=()=>{const{scrollTop:z,scrollHeight:O,clientHeight:U}=R,Z=z>Jp,X=O-z-U>Jp;w(V=>V===Z?V:Z),N(V=>V===X?V:X)};i&&(k(!1),y.current=!0),T();const I=()=>{y.current=S(),T()};R.addEventListener("scroll",I,{passive:!0});const E=new ResizeObserver(()=>{i&&y.current&&k(!0),T()});return E.observe(L),E.observe(R),()=>{R.removeEventListener("scroll",I),E.disconnect()}},[i,l]),r.jsx("div",{className:Me.fadeFrame,"data-fade-top":_,"data-fade-bottom":$,children:r.jsx("div",{ref:j,className:ee(Me.scroller,Me[`padding-${a}`],c),...p,children:r.jsx("div",{ref:x,className:ee(Me.content,Me[`density-${t}`]),children:u})})})});w3.displayName="AIThread";const As=g.forwardRef(({align:t="ai",avatar:a,className:i,children:l,...c},u)=>r.jsxs("div",{ref:u,className:ee(Me.label,t==="user"?Me.labelUser:Me.labelAi,i),...c,children:[a!=null&&r.jsx("span",{className:Me.labelAvatar,children:a}),r.jsx("span",{className:Me.labelText,children:l})]}));As.displayName="AILabel";const _3=t=>t.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function b3(t,a){if(typeof t=="string")return{text:t};const i=t instanceof Date?t:new Date(t);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const Ka=g.forwardRef(({value:t,align:a="ai",format:i=_3,inline:l=!1,className:c,...u},p)=>{const f=g.useMemo(()=>b3(t,i),[t,i]);return f?r.jsx("time",{ref:p,className:ee(Me.timestamp,l?Me.timestampInline:a==="user"?Me.timestampUser:Me.timestampAi,c),dateTime:f.iso,...u,children:f.text}):null});Ka.displayName="AITimestamp";function k3(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(Ka,{align:"ai",value:t}):t}function C3(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(As,{align:"ai",children:t}):t}const j3=g.forwardRef(({label:t,time:a,className:i,children:l,...c},u)=>r.jsxs("div",{ref:u,"data-author":"ai",className:ee(Me.messageBlock,Me.messageBlockAi,i),...c,children:[C3(t),r.jsx("div",{className:ee(Me.messageBody,Me.messageBodyAi),children:l}),k3(a)]}));j3.displayName="AIAssistantMessage";function S3(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(Ka,{align:"user",value:t}):t}function N3(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(As,{align:"user",children:t}):t}const R3=g.forwardRef(({label:t,time:a,className:i,children:l,...c},u)=>r.jsxs("div",{ref:u,"data-author":"user",className:ee(Me.messageBlock,Me.messageBlockUser,i),...c,children:[N3(t),r.jsx("div",{className:ee(Me.messageBody,Me.messageBodyUser),children:l}),S3(a)]}));R3.displayName="AIUserMessage";function L3(t){return t===!1?null:t==null||t===!0?r.jsx(jf,{size:"sm"}):t}function $3(t,a){return t==null&&a==null?null:typeof t=="string"||typeof t=="number"||t==null?r.jsx(As,{align:"ai",avatar:a,children:t}):t}const M3=g.forwardRef(({avatar:t,label:a="Teambridge AI",activity:i,actions:l,loading:c=!1,loaderLabel:u="Thinking…",className:p,children:f,...m},x)=>{const y=L3(t),_=$3(a,y);return r.jsxs("div",{ref:x,"data-author":"ai",className:ee(Me.messageBlock,Me.messageBlockAi,Me.inboundBlock,p),...m,children:[_,i,f!=null&&r.jsx("div",{className:ee(Me.messageBody,Me.messageBodyAi),children:f}),c&&r.jsxs("div",{className:Me.inboundLoader,"aria-live":"polite",children:[r.jsx($d,{size:"xs"}),u!=null&&r.jsx("span",{className:Me.inboundLoaderLabel,children:u})]}),l]})});M3.displayName="AIInboundMessage";function T3(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const A3=g.forwardRef(({label:t="You",time:a,timeFormat:i,className:l,children:c,...u},p)=>{const f=a==null?null:T3(a)?r.jsx(Ka,{value:a,format:i,inline:!0}):a,m=t==null?null:typeof t=="string"||typeof t=="number"?r.jsx("span",{className:Me.labelText,children:t}):t,x=m!=null||f!=null;return r.jsxs("div",{ref:p,"data-author":"user",className:ee(Me.messageBlock,Me.messageBlockUser,Me.outboundBlock,l),...u,children:[x&&r.jsxs("div",{className:ee(Me.label,Me.labelUser,Me.outboundHeader),children:[m,f]}),r.jsx("div",{className:ee(Me.messageBody,Me.messageBodyUser),children:c})]})});A3.displayName="AIOutboundMessage";const kr=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};kr.displayName="ChevronDownIcon";const I3="_root_1j4eq_8",E3="_header_1j4eq_17",P3="_headerSummary_1j4eq_53",z3="_aiTrailSummaryFade_1j4eq_1",O3="_aiTrailHeaderAppend_1j4eq_1",D3="_aiTrailEllipsis_1j4eq_1",B3="_headerCurrent_1j4eq_128",F3="_headerChevron_1j4eq_159",W3="_headerChevronExpanded_1j4eq_173",H3="_body_1j4eq_187",q3="_bodyExpanded_1j4eq_200",U3="_bodyCollapsed_1j4eq_201",V3="_bodyInner_1j4eq_203",G3="_bodyContent_1j4eq_187",Y3="_step_1j4eq_225",Z3="_stepIcon_1j4eq_242",K3="_stepAnimating_1j4eq_256",Q3="_aiTrailStepPulse_1j4eq_1",X3="_stepBody_1j4eq_267",J3="_stepHead_1j4eq_282",ey="_stepLabel_1j4eq_286",ty="_stepSeparator_1j4eq_288",ny="_stepDetail_1j4eq_292",ry="_subToggle_1j4eq_302",oy="_subToggleCount_1j4eq_335",ay="_subToggleChevron_1j4eq_339",iy="_subActivityWrap_1j4eq_358",sy="_subActivityExpanded_1j4eq_364",ly="_subActivityCollapsed_1j4eq_365",cy="_subActivityClip_1j4eq_367",dy="_subActivityList_1j4eq_378",uy="_subActivity_1j4eq_358",hy="_aiTrailSubActivityType_1j4eq_1",py="_aiTrailSubActivityFade_1j4eq_1",qe={root:I3,header:E3,headerSummary:P3,aiTrailSummaryFade:z3,aiTrailHeaderAppend:O3,aiTrailEllipsis:D3,headerCurrent:B3,headerChevron:F3,headerChevronExpanded:W3,body:H3,bodyExpanded:q3,bodyCollapsed:U3,bodyInner:V3,bodyContent:G3,step:Y3,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:Z3,stepAnimating:K3,aiTrailStepPulse:Q3,stepBody:X3,stepHead:J3,stepLabel:ey,stepSeparator:ty,stepDetail:ny,subToggle:ry,subToggleCount:oy,subToggleChevron:ay,subActivityWrap:iy,subActivityExpanded:sy,subActivityCollapsed:ly,subActivityClip:cy,subActivityList:dy,subActivity:uy,aiTrailSubActivityType:hy,aiTrailSubActivityFade:py},Md=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Md.displayName="MessageDotsSquareIcon";function Td({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Td.displayName="SearchMdIcon";function zo({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Rf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Rf.displayName="Globe01Icon";const Lf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Lf.displayName="Code02Icon";function $f({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}$f.displayName="Tool01Icon";const Pt=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Fo=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Fo.displayName="AlertCircleIcon";const fy={thinking:r.jsx(Md,{size:14}),tool:r.jsx($f,{size:14}),search:r.jsx(Td,{size:14}),file:r.jsx(zo,{size:14}),web:r.jsx(Rf,{size:14}),code:r.jsx(Lf,{size:14}),content:r.jsx(Pt,{size:14})},Is=g.forwardRef(({type:t,status:a="done",detail:i,icon:l,subActivities:c,groupState:u="done",className:p,children:f,...m},x)=>{const y=a==="active"&&u==="live",_=a==="active"&&u==="live",w=a==="active"||a==="error",[$,N]=g.useState(null),j=$!==null?$:w;g.useEffect(()=>{N(null)},[a]);const R=g.useCallback(()=>N(!j),[j]),L=!!c&&c.length>0,S=(c==null?void 0:c.length)??0,k=a==="error"?r.jsx(Fo,{size:14}):l??fy[t];return r.jsxs("div",{ref:x,"data-step-type":t,"data-step-status":a,className:ee(qe.step,qe[`step-${a}`],y&&qe.stepAnimating,p),...m,children:[r.jsx("span",{className:qe.stepIcon,"aria-hidden":!0,children:k}),r.jsxs("span",{className:qe.stepBody,children:[r.jsxs("span",{className:qe.stepHead,children:[r.jsx("span",{className:qe.stepLabel,children:f}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:qe.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:qe.stepDetail,children:i})]}),L&&r.jsxs("button",{type:"button",className:qe.subToggle,onClick:R,"aria-expanded":j,"aria-label":j?`Collapse ${S} sub-steps`:`Expand ${S} sub-steps`,"data-expanded":j||void 0,children:[r.jsx("span",{className:qe.subToggleCount,children:S}),r.jsx("span",{className:qe.subToggleChevron,"aria-hidden":!0,children:r.jsx(kr,{size:10})})]})]}),L&&r.jsx(r.Fragment,{children:r.jsx("div",{className:ee(qe.subActivityWrap,j?qe.subActivityExpanded:qe.subActivityCollapsed),"aria-hidden":!j,children:r.jsx("div",{className:qe.subActivityClip,children:r.jsx("ul",{className:qe.subActivityList,"data-animating":_||void 0,children:c.map((T,I)=>r.jsx("li",{className:qe.subActivity,children:T},I))})})})})]})]})});Is.displayName="AIActivityStep";function e1(t){return t==="error"}function my(t,a,i,l,c,u){if(t==="live")return i.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:c,children:i[l]??i[i.length-1]},l);const p=t==="error"?"Stopped":u?`Thought for ${u}`:"Thought";if(i.length===0){const f=a===1?"1 step":`${a} steps`;return`${p} · ${f}`}return r.jsxs(r.Fragment,{children:[p,i.map((f,m)=>r.jsxs(g.Fragment,{children:[" · ",f]},m))]})}const Ad=g.forwardRef(({state:t="live",expanded:a,defaultExpanded:i,onToggle:l,duration:c,summary:u,className:p,children:f,...m},x)=>{const y=a!==void 0,[_,w]=g.useState(i??e1(t)),[$,N]=g.useState(!1);g.useEffect(()=>{y||$||w(e1(t))},[t,y,$]);const j=y?!!a:_,R=g.useCallback(()=>{const E=!j;y||(w(E),N(!0)),l==null||l(E)},[j,y,l]),{enhancedChildren:L,stepCount:S,stepLabels:k,currentLabelIdx:T}=g.useMemo(()=>{let E=0;const z=[];let O=-1;return{enhancedChildren:g.Children.map(f,Z=>{if(!g.isValidElement(Z))return Z;const X=Z.props;if(!("type"in X||"status"in X))return Z;E+=1;const te=X.status??"done";return te==="pending"?null:(X.children!=null&&(z.push(X.children),te==="active"&&(O=z.length-1)),gy(Z,t))}),stepCount:E,stepLabels:z,currentLabelIdx:O>=0?O:z.length-1}},[f,t]),I=u??my(t,S,k,T,qe.headerCurrent,c);return r.jsxs("div",{ref:x,"data-state":t,"data-expanded":j,className:ee(qe.root,p),...m,children:[r.jsxs("button",{type:"button",className:qe.header,onClick:R,"aria-expanded":j,"aria-label":j?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:qe.headerSummary,children:I},`${t}-${T}`),r.jsx("span",{className:ee(qe.headerChevron,j&&qe.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(kr,{size:14})})]}),r.jsx("div",{className:ee(qe.body,j?qe.bodyExpanded:qe.bodyCollapsed),"aria-hidden":!j,children:r.jsx("div",{className:qe.bodyInner,children:r.jsxs("div",{className:qe.bodyContent,children:[L,t==="done"&&r.jsx(Is,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Ad.displayName="AIActivityTrail";function gy(t,a){return g.cloneElement(t,{groupState:a})}var Es=bf();const vy="_wrapper_3tqlm_10",yy="_tooltip_3tqlm_22",xy="_portal_3tqlm_23",wy="_top_3tqlm_61",_y="_bottom_3tqlm_71",by="_left_3tqlm_81",ky="_right_3tqlm_91",hs={wrapper:vy,tooltip:yy,portal:xy,top:wy,bottom:_y,left:by,right:ky},_r=({content:t,placement:a="top",delay:i=0,disabled:l=!1,maxWidth:c=280,offset:u=0,children:p})=>{const[f,m]=g.useState(!1),[x,y]=g.useState({top:0,left:0}),_=g.useRef(null),w=g.useRef(),$=g.useId(),N=g.useCallback(()=>{if(!_.current)return;const k=_.current.getBoundingClientRect(),T=6+u;let I=0,E=0;switch(a){case"top":I=k.top-T,E=k.left+k.width/2;break;case"bottom":I=k.bottom+T,E=k.left+k.width/2;break;case"left":I=k.top+k.height/2,E=k.left-T;break;case"right":I=k.top+k.height/2,E=k.right+T;break}y({top:I,left:E})},[a,u]),j=g.useCallback(()=>{l||(N(),clearTimeout(w.current),i>0?w.current=setTimeout(()=>m(!0),i):m(!0))},[l,i,N]),R=g.useCallback(()=>{clearTimeout(w.current),m(!1)},[]);g.useEffect(()=>{if(!f)return;const k=()=>N();return window.addEventListener("scroll",k,!0),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k,!0),window.removeEventListener("resize",k)}},[f,N]);const L=xr.cloneElement(p,{"aria-describedby":f?$:void 0}),S=r.jsx("span",{id:$,role:"tooltip",className:ee(hs.tooltip,hs[a],hs.portal),"data-visible":f||void 0,style:{top:x.top,left:x.left,maxWidth:c!==void 0?c:void 0},children:t});return r.jsxs("span",{ref:_,className:hs.wrapper,onMouseEnter:j,onMouseLeave:R,onFocus:j,onBlur:R,children:[L,Es.createPortal(S,document.body)]})};_r.displayName="Tooltip";const Cy="_root_v8mqg_9",jy="_hover_v8mqg_21",Wc={root:Cy,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:jy};function Sy(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const Mf=g.forwardRef(({visibility:t="always",align:a="start",time:i,timeFormat:l,className:c,children:u,...p},f)=>{const m=i==null?null:Sy(i)?r.jsx(Ka,{value:i,format:l,inline:!0}):i,x=_=>{if(!g.isValidElement(_))return _;const w=_;if(w.type===_r)return w;const $=w.props["aria-label"];return $?r.jsx(_r,{content:$,placement:"top",delay:150,children:w}):w},y=g.Children.map(u,_=>{if(g.isValidElement(_)&&_.type===g.Fragment){const w=_.props.children;return g.Children.map(w,x)}return x(_)});return r.jsxs("div",{ref:f,"data-visibility":t,"data-align":a,className:ee(Wc.root,Wc[`align-${a}`],t==="hover"&&Wc.hover,c),...p,children:[y,m]})});Mf.displayName="AIMessageActions";const Ny="_card_1apq1_17",Ry="_header_1apq1_69",Ly="_iconBadge_1apq1_74",$y="_iconInner_1apq1_89",My="_headerText_1apq1_100",Ty="_headerTopRow_1apq1_109",Ay="_eyebrow_1apq1_115",Iy="_title_1apq1_124",Ey="_subtitle_1apq1_130",Py="_headerTrailing_1apq1_135",zy="_body_1apq1_141",Oy="_footer_1apq1_152",Dy="_footerEnd_1apq1_157",By="_metaRow_1apq1_162",Fy="_metaItem_1apq1_170",Wy="_resultHero_1apq1_180",Hy="_resultHeadline_1apq1_185",qy="_resultDetail_1apq1_191",Uy="_clauses_1apq1_205",Vy="_clause_1apq1_205",Gy="_clauseLabel_1apq1_215",Yy="_clauseBody_1apq1_225",Zy="_badgeExecuting_1apq1_245",Ye={card:Ny,header:Ry,iconBadge:Ly,iconInner:$y,headerText:My,headerTopRow:Ty,eyebrow:Ay,title:Iy,subtitle:Ey,headerTrailing:Py,body:zy,footer:Oy,footerEnd:Dy,metaRow:By,metaItem:Fy,resultHero:Wy,resultHeadline:Hy,resultDetail:qy,clauses:Uy,clause:Vy,clauseLabel:Gy,clauseBody:Yy,badgeExecuting:Zy},En=g.forwardRef(({tone:t="neutral",accent:a=!0,fill:i=!1,icon:l,eyebrow:c,title:u,subtitle:p,trailing:f,footer:m,footerEnd:x=!1,className:y,children:_,...w},$)=>{const N=c!=null||f!=null,j=N||u!=null||p!=null,R=l!=null||j;return r.jsxs("div",{ref:$,"data-tone":t,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":l!=null||void 0,className:ee(Ye.card,y),...w,children:[R&&r.jsxs("div",{className:Ye.header,children:[l!=null&&r.jsx("span",{className:ee(Ye.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:Ye.iconInner,children:l})}),j&&r.jsxs("div",{className:Ye.headerText,children:[N&&r.jsxs("div",{className:Ye.headerTopRow,children:[c!=null&&r.jsx("span",{className:Ye.eyebrow,children:c}),f!=null&&r.jsx("span",{className:Ye.headerTrailing,children:f})]}),u!=null&&r.jsx("span",{className:Ye.title,children:u}),p!=null&&r.jsx("span",{className:Ye.subtitle,children:p})]})]}),_!=null&&r.jsx("div",{className:Ye.body,children:_}),m!=null&&r.jsx("div",{className:ee(Ye.footer,x&&Ye.footerEnd),children:m})]})});En.displayName="UltronCard";const Ky="_root_zkkgh_6",Qy="_sm_zkkgh_24",Xy="_md_zkkgh_33",Jy="_lg_zkkgh_42",ex="_neutral_zkkgh_53",tx="_blue_zkkgh_66",nx="_azure_zkkgh_79",rx="_purple_zkkgh_92",ox="_pink_zkkgh_105",ax="_red_zkkgh_118",ix="_orange_zkkgh_131",sx="_yellow_zkkgh_144",lx="_matcha_zkkgh_157",cx="_green_zkkgh_170",dx="_subtle_zkkgh_184",ux="_outline_zkkgh_190",hx="_solid_zkkgh_196",px="_dot_zkkgh_203",fx="_icon_zkkgh_212",mx="_dismiss_zkkgh_224",Fr={root:Ky,sm:Qy,md:Xy,lg:Jy,neutral:ex,blue:tx,azure:nx,purple:rx,pink:ox,red:ax,orange:ix,yellow:sx,matcha:lx,green:cx,subtle:dx,outline:ux,solid:hx,dot:px,icon:fx,dismiss:mx},Qa=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},gx={sm:10,md:12,lg:14},wr=g.forwardRef(({variant:t="subtle",color:a="neutral",size:i="md",dot:l,leadingIcon:c,dismissible:u,onDismiss:p,className:f,children:m,...x},y)=>r.jsxs("span",{ref:y,className:ee(Fr.root,Fr[i],Fr[a],Fr[t],f),...x,children:[l&&r.jsx("span",{className:Fr.dot,"aria-hidden":"true"}),c&&r.jsx("span",{className:ee(Fr.icon,"alloy-icon-slot"),"aria-hidden":"true",children:c}),m,u&&r.jsx("button",{type:"button",className:Fr.dismiss,"aria-label":"Remove",onClick:_=>{_.stopPropagation(),p==null||p()},children:r.jsx(Qa,{size:gx[i]})})]}));wr.displayName="Tag";function Tf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Tf.displayName="SlashCircle01Icon";const Id=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Id.displayName="EyeIcon";function Ps({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ps.displayName="Target01Icon";function qr({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}qr.displayName="ClockIcon";const Xa=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Xa.displayName="RefreshCw04Icon";const br=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};br.displayName="CheckCircleIcon";function zs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}zs.displayName="Save01Icon";const vx={sm:11,md:12,lg:14},yx={ignored:{label:"Ignored",color:"neutral",Icon:Tf},monitored:{label:"Monitored",color:"blue",Icon:Id},recommended:{label:"Recommended",color:"purple",Icon:Ps},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:qr},executing:{label:"Executing",color:"azure",Icon:Xa},completed:{label:"Completed",color:"green",Icon:br},saved:{label:"Saved",color:"matcha",Icon:zs}},eo=g.forwardRef(({status:t,size:a="sm",label:i,className:l,...c},u)=>{const p=yx[t],f=p.Icon;return r.jsx(wr,{ref:u,color:p.color,size:a,variant:"subtle",leadingIcon:r.jsx(f,{size:vx[a]}),className:ee(t==="executing"&&Ye.badgeExecuting,l),...c,children:i??p.label})});eo.displayName="UltronStatusBadge";function Os({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Os.displayName="Bell01Icon";const xx=g.forwardRef(({title:t,icon:a,eyebrow:i="Event",meta:l,status:c,tone:u="neutral",children:p,...f},m)=>r.jsx(En,{ref:m,tone:u,eyebrow:i,title:t,icon:a??r.jsx(Os,{size:14}),trailing:c?r.jsx(eo,{status:c}):void 0,...f,children:((l==null?void 0:l.length)||p)&&r.jsxs(r.Fragment,{children:[l!=null&&l.length?r.jsx("div",{className:Ye.metaRow,children:l.map((x,y)=>r.jsxs("span",{className:Ye.metaItem,children:[x.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,p]})}));xx.displayName="UltronEventCard";const wx=g.forwardRef(({eyebrow:t="Understanding",icon:a,entities:i,tone:l="info",children:c,...u},p)=>r.jsxs(En,{ref:p,tone:l,eyebrow:t,icon:a??r.jsx(Md,{size:14}),...u,children:[c,i&&r.jsx("div",{className:Ye.metaRow,children:i})]}));wx.displayName="UltronUnderstandingCard";const _x={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},bx=g.forwardRef(({eyebrow:t="Decision",icon:a,factors:i,tone:l="warning",children:c,...u},p)=>r.jsxs(En,{ref:p,tone:l,eyebrow:t,icon:a??r.jsx(Ps,{size:14}),...u,children:[c,i!=null&&i.length?r.jsx("div",{className:Ye.metaRow,children:i.map((f,m)=>r.jsx(wr,{size:"sm",color:_x[l],variant:"subtle",children:f},m))}):null]}));bx.displayName="UltronDecisionCard";const kx="_root_ou64w_8",Cx="_xs_ou64w_75",jx="_sm_ou64w_84",Sx="_md_ou64w_93",Nx="_lg_ou64w_102",Rx="_xl_ou64w_111",Lx="_iconOnly_ou64w_122",$x="_primary_ou64w_132",Mx="_secondary_ou64w_148",Tx="_tertiary_ou64w_167",Ax="_ghost_ou64w_185",Ix="_destructive_ou64w_203",Ex="_destructiveSecondary_ou64w_221",Px="_artwork_ou64w_69",zx="_label_ou64w_254",Ox="_spinner_ou64w_69",Dx="_light_ou64w_281",Ut={root:kx,xs:Cx,sm:jx,md:Sx,lg:Nx,xl:Rx,iconOnly:Lx,primary:$x,secondary:Mx,tertiary:Tx,ghost:Ax,destructive:Ix,destructiveSecondary:Ex,artwork:Px,label:zx,spinner:Ox,"alloy-spin":"_alloy-spin_ou64w_1",light:Dx},Bx={primary:Ut.primary,secondary:Ut.secondary,tertiary:Ut.tertiary,ghost:Ut.ghost,destructive:Ut.destructive,"destructive-secondary":Ut.destructiveSecondary},Te=g.forwardRef(({variant:t="primary",size:a="md",loading:i=!1,leadingArtwork:l,trailingArtwork:c,iconOnly:u=!1,className:p,children:f,disabled:m,...x},y)=>{const _=m||i;return r.jsxs("button",{ref:y,className:ee(Ut.root,Bx[t],Ut[a],u&&Ut.iconOnly,p),disabled:_,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":t,"data-size":a,...x,children:[i&&r.jsx("span",{className:Ut.spinner,"aria-hidden":"true"}),!i&&u&&r.jsx("span",{className:ee(Ut.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!u&&r.jsxs(r.Fragment,{children:[l&&r.jsx("span",{className:ee(Ut.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l}),f&&r.jsx("span",{className:Ut.label,children:f}),c&&r.jsx("span",{className:ee(Ut.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:c})]})]})});Te.displayName="Button";function Af({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Af.displayName="XCircleIcon";const Fx=g.forwardRef(({eyebrow:t="Recommendation",icon:a,actions:i,onIgnore:l,ignoreLabel:c="Ignore",tone:u="info",children:p,...f},m)=>{const x=r.jsxs(r.Fragment,{children:[i.map((y,_)=>r.jsx(Te,{size:"sm",variant:y.variant??(_===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},_)),l&&r.jsx(Te,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(Af,{size:16}),onClick:l,children:c})]});return r.jsx(En,{ref:m,tone:u,eyebrow:t,icon:a??r.jsx(Ps,{size:14}),footer:x,...f,children:p})});Fx.displayName="UltronRecommendationCard";function If({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}If.displayName="Lock01Icon";const Wx=g.forwardRef(({title:t,eyebrow:a="Approval required",icon:i,approveLabel:l="Approve & send",onApprove:c,approving:u=!1,cancelLabel:p="Cancel",onCancel:f,editLabel:m="Edit",onEdit:x,tone:y="warning",children:_,...w},$)=>{const N=r.jsxs(r.Fragment,{children:[f&&r.jsx(Te,{size:"md",variant:"ghost",onClick:f,children:p}),x&&r.jsx(Te,{size:"md",variant:"secondary",onClick:x,children:m}),r.jsx(Te,{size:"md",variant:"primary",leadingArtwork:r.jsx(Pt,{size:18}),loading:u,onClick:c,children:l})]});return r.jsx(En,{ref:$,tone:y,eyebrow:a,title:t,icon:i??r.jsx(If,{size:14}),trailing:r.jsx(eo,{status:"awaiting-approval"}),footer:N,footerEnd:!0,...w,children:_})});Wx.displayName="UltronApprovalCard";const Hx=g.forwardRef(({eyebrow:t="Working",icon:a,steps:i,state:l="live",duration:c,tone:u="info",...p},f)=>r.jsx(En,{ref:f,tone:u,eyebrow:t,icon:a??r.jsx(Xa,{size:14}),trailing:r.jsx(eo,{status:l==="done"?"completed":"executing"}),...p,children:r.jsx(Ad,{state:l,duration:c,children:i.map((m,x)=>r.jsx(Is,{type:m.type??"tool",status:m.status??"pending",detail:m.detail,subActivities:m.subActivities,children:m.label},x))})}));Hx.displayName="UltronExecutionCard";const qx=g.forwardRef(({headline:t,detail:a,avatar:i,status:l="completed",tone:c="success",footer:u,...p},f)=>r.jsx(En,{ref:f,tone:c,fill:!0,accent:!1,trailing:r.jsx(eo,{status:l}),footer:u,...p,children:r.jsxs("div",{className:Ye.resultHero,children:[r.jsx("span",{className:ee(Ye.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(br,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:Ye.resultHeadline,children:t}),a!=null&&r.jsx("div",{className:Ye.resultDetail,children:a})]})]})}));qx.displayName="UltronResultCard";function Ef({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ef.displayName="ZapIcon";const Ux=g.forwardRef(({title:t="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:l="Save as workflow",onSave:c,saving:u=!1,dismissLabel:p="Not now",onDismiss:f,tone:m="info",children:x,...y},_)=>{const w=r.jsxs(r.Fragment,{children:[r.jsx(Te,{size:"md",variant:"primary",leadingArtwork:r.jsx(zs,{size:18}),loading:u,onClick:c,children:l}),f&&r.jsx(Te,{size:"md",variant:"ghost",onClick:f,children:p})]});return r.jsx(En,{ref:_,tone:m,fill:!0,accent:!1,eyebrow:a,title:t,icon:i??r.jsx(Ef,{size:14}),footer:w,...y,children:x})});Ux.displayName="UltronWorkflowSaveCard";const Pf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Pf.displayName="GitBranch01Icon";function Hc({label:t,children:a}){return r.jsxs("div",{className:Ye.clause,children:[r.jsx("span",{className:Ye.clauseLabel,children:t}),r.jsx("span",{className:Ye.clauseBody,children:a})]})}const Vx=g.forwardRef(({name:t,eyebrow:a="Workflow",icon:i,when:l,conditions:c,actions:u,status:p,footer:f,tone:m="info",...x},y)=>r.jsx(En,{ref:y,tone:m,eyebrow:a,title:t,icon:i??r.jsx(Pf,{size:14}),trailing:p?r.jsx(eo,{status:p}):void 0,footer:f,...x,children:r.jsxs("div",{className:Ye.clauses,children:[r.jsx(Hc,{label:"When",children:l}),r.jsx(Hc,{label:"If",children:c}),r.jsx(Hc,{label:"Then",children:u})]})}));Vx.displayName="UltronWorkflowPreviewCard";const Gx="_root_1nyuz_6",Yx="_sm_1nyuz_20",Zx="_md_1nyuz_29",Kx="_lg_1nyuz_38",Qx="_divider_1nyuz_48",Xx="_interactive_1nyuz_53",Jx="_disabled_1nyuz_60",e5="_destructive_1nyuz_64",t5="_selected_1nyuz_78",n5="_label_1nyuz_87",r5="_description_1nyuz_97",o5="_leadingSlot_1nyuz_101",a5="_trailingSlot_1nyuz_102",i5="_content_1nyuz_115",s5="_taSwitch_1nyuz_167",l5="_taSwitchThumb_1nyuz_188",c5="_taCheckbox_1nyuz_203",d5="_taRadio_1nyuz_226",u5="_taRadioDot_1nyuz_244",h5="_taExpand_1nyuz_252",p5="_taStatus_1nyuz_266",f5="_taStatus_success_1nyuz_273",m5="_taStatus_warning_1nyuz_274",g5="_taStatus_error_1nyuz_275",v5="_taStatus_info_1nyuz_276",dt={root:Gx,sm:Yx,md:Zx,lg:Kx,divider:Qx,interactive:Xx,disabled:Jx,destructive:e5,selected:t5,label:n5,description:r5,leadingSlot:o5,trailingSlot:a5,content:i5,taSwitch:s5,taSwitchThumb:l5,taCheckbox:c5,taRadio:d5,taRadioDot:u5,taExpand:h5,taStatus:p5,taStatus_success:f5,taStatus_warning:m5,taStatus_error:g5,taStatus_info:v5},Gt=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Gt.displayName="ChevronRightIcon";const Ed=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ed.displayName="ArrowUpRightIcon";const y5="_root_4qytd_5",x5="_neutral_4qytd_25",w5="_primary_4qytd_30",_5="_success_4qytd_35",b5="_warning_4qytd_40",k5="_error_4qytd_45",C5="_info_4qytd_50",t1={root:y5,neutral:x5,primary:w5,success:_5,warning:b5,error:k5,info:C5},Ja=g.forwardRef(({variant:t="neutral",className:a,children:i,...l},c)=>r.jsx("span",{ref:c,className:ee(t1.root,t1[t],a),...l,children:i}));Ja.displayName="Badge";const j5=({checked:t})=>r.jsx("span",{className:dt.taSwitch,"data-checked":t||void 0,"aria-hidden":"true",children:r.jsx("span",{className:dt.taSwitchThumb})}),S5=({checked:t})=>r.jsx("span",{className:dt.taCheckbox,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),N5=({checked:t})=>r.jsx("span",{className:dt.taRadio,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("span",{className:dt.taRadioDot})}),R5=({count:t,label:a})=>{const i=t!==void 0?String(t):a;return i?r.jsx(Ja,{"aria-hidden":"true",children:i}):null},L5=({expanded:t})=>r.jsx("span",{className:dt.taExpand,"data-expanded":t||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:16,color:"currentColor"})}),$5=({variant:t})=>r.jsx("span",{className:ee(dt.taStatus,dt[`taStatus_${t}`]),"aria-hidden":"true"}),M5=new Set(["badge","status"]),nn=g.forwardRef(({label:t,description:a,leadingSlot:i,trailingSlot:l,trailingAction:c,checked:u,defaultChecked:p=!1,onCheckedChange:f,badgeCount:m,badgeLabel:x,expanded:y=!1,statusVariant:_="success",divider:w=!0,size:$="md",interactive:N,selected:j=!1,destructive:R=!1,disabled:L=!1,className:S,onClick:k,onKeyDown:T,...I},E)=>{const z=c==="switch"||c==="checkbox"||c==="radio",[O,U]=g.useState(p),Z=z?u!==void 0?u:O:!1,X=N||!!k||z||c!==void 0&&!M5.has(c),V=c==="switch"?"switch":c==="checkbox"?"checkbox":c==="radio"?"radio":X?"button":void 0,te=g.useCallback(se=>{if(!L){if(z){const J=!Z;u===void 0&&U(J),f==null||f(J)}k==null||k(se)}},[L,z,Z,u,f,k]),ie=g.useCallback(se=>{X&&!L&&(se.key==="Enter"||se.key===" ")&&(se.preventDefault(),te(se)),T==null||T(se)},[X,L,te,T]),ce=l??(()=>{if(!c)return null;switch(c){case"chevron":return r.jsx(Gt,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(Ed,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(j5,{checked:Z});case"checkbox":return r.jsx(S5,{checked:Z});case"radio":return r.jsx(N5,{checked:Z});case"badge":return r.jsx(R5,{count:m,label:x});case"expand":return r.jsx(L5,{expanded:y});case"status":return r.jsx($5,{variant:_});default:return null}})();return r.jsxs("div",{ref:E,role:V,tabIndex:X&&!L?0:void 0,"aria-checked":z?Z:void 0,"aria-selected":j||void 0,"aria-disabled":L||void 0,"data-selected":j||void 0,"data-disabled":L||void 0,"data-destructive":R||void 0,"data-trailing-action":c??void 0,className:ee(dt.root,dt[$],w&&dt.divider,X&&dt.interactive,j&&dt.selected,R&&dt.destructive,L&&dt.disabled,S),onClick:L?void 0:te,onKeyDown:ie,...I,children:[i&&r.jsx("div",{className:dt.leadingSlot,children:i}),r.jsxs("div",{className:dt.content,children:[r.jsx("span",{className:dt.label,children:t}),a&&r.jsx("span",{className:dt.description,children:a})]}),ce&&r.jsx("div",{className:dt.trailingSlot,children:ce})]})});nn.displayName="ListItem";const T5=g.forwardRef(({title:t,meta:a,icon:i,status:l,...c},u)=>r.jsx(nn,{ref:u,label:t,description:a,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(eo,{status:l}),...c}));T5.displayName="UltronActivityStreamItem";const A5="_root_1sz1z_7",I5="_status_1sz1z_50",qc={root:A5,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:I5},zf=g.forwardRef(({disabled:t=!1,size:a="md",escapeTarget:i,onEscape:l,className:c,children:u,...p},f)=>{const m=g.useRef(null),[x,y]=g.useState(""),_=g.Children.map(u,w=>{if(!g.isValidElement(w))return w;const $=w.props;return g.cloneElement(w,{groupDisabled:t||!!$.groupDisabled})});return g.useEffect(()=>{if(!i||!l)return;const w=$=>{$.key==="Escape"&&l()};return i.addEventListener("keydown",w),()=>i.removeEventListener("keydown",w)},[i,l]),g.useCallback(w=>y(w),[]),r.jsxs("div",{ref:f,"data-size":a,className:ee(qc.root,qc[`size-${a}`],c),...p,children:[_,r.jsx("span",{ref:m,className:qc.status,role:"status","aria-live":"polite",children:x})]})});zf.displayName="ComposerActions";function Uc({size:t=24,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Pd=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Pd.displayName="SearchSmIcon";const ys=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ys.displayName="Trash03Icon";function Eo({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function n1({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const zd=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};zd.displayName="ChevronSelectorVerticalIcon";const Ur=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:u,strokeLinecap:"round",strokeLinejoin:"round"})]})};Ur.displayName="ClipboardCheckIcon";const Of=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.25:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:u})})};Of.displayName="SettingsGearIcon";const Df=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Df.displayName="ChevronLeftIcon";const Bf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Bf.displayName="EyeOffIcon";const Ff=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ff.displayName="StopIcon";const Wf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Wf.displayName="RecordingIcon";const Hf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Hf.displayName="BankIcon";function Ds({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ds.displayName="ArrowNarrowUpIcon";function qf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}qf.displayName="ArrowNarrowDownIcon";function Uf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Uf.displayName="Microphone02Icon";const Vf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Vf.displayName="AlertTriangleIcon";function Gf({size:t=16,color:a="currentColor",...i}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Yf=({size:t=16,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Yf.displayName="Map01Icon";const Zf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Zf.displayName="ThumbsUpIcon";const Kf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Kf.displayName="ThumbsDownIcon";const Qf=({size:t=24,color:a="currentColor",strokeWidth:i,...l})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M11.4926 4.29493C11.7435 3.85826 12.2565 3.85826 12.5074 4.29493L22.1414 20.9893C22.3921 21.4258 22.0774 22 21.634 22H2.36603C1.92257 22 1.6079 21.4258 1.85856 20.9893L11.4926 4.29493Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Qf.displayName="TriangleUpIcon";function Bs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Bs.displayName="CheckVerified01Icon";function Xf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Xf.displayName="Copy01Icon";function Jf({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Jf.displayName="Edit02Icon";function Fs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Fs.displayName="LinkExternal01Icon";function Cs({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Cs.displayName="MessageCircle02Icon";function em({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}em.displayName="MinusIcon";function tm({size:t=16,color:a="currentColor",strokeWidth:i,...l}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}tm.displayName="XCloseIcon";const E5="_base_i93xz_11",P5="_icon_i93xz_45",z5="_sendReady_i93xz_65",O5="_sendStreaming_i93xz_66",D5="_sendDisabled_i93xz_67",B5="_sendError_i93xz_68",F5="_attachIdle_i93xz_131",W5="_attachDisabled_i93xz_145",H5="_attachError_i93xz_152",q5="_voiceIdle_i93xz_165",U5="_voiceRecording_i93xz_179",V5="_voiceDisabled_i93xz_189",G5="_iconStack_i93xz_200",Y5="_iconLayer_i93xz_209",st={base:E5,icon:P5,sendReady:z5,sendStreaming:O5,sendDisabled:D5,sendError:B5,attachIdle:F5,attachDisabled:W5,attachError:H5,voiceIdle:q5,voiceRecording:U5,voiceDisabled:V5,iconStack:G5,iconLayer:Y5},Z5={hidden:void 0,ready:st.sendReady,"disabled-invalid":st.sendDisabled,streaming:st.sendStreaming,error:st.sendError},K5=(t,a,i)=>{switch(t){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},nm=g.forwardRef(({state:t,onSend:a,onStop:i,onRetry:l,invalidReason:c,errorMessage:u,groupDisabled:p,className:f,style:m,...x},y)=>{const _=g.useRef(null),w=g.useRef(null),$=g.useCallback(k=>{w.current=k,typeof y=="function"?y(k):y&&(y.current=k)},[y]),N=g.useCallback(()=>{if(t==="ready"){a==null||a();return}if(t==="streaming"){i==null||i();return}if(t==="error"){const k=w.current;k&&(k.dataset.pressed="true",_.current&&clearTimeout(_.current),_.current=setTimeout(()=>{k.dataset.pressed="false"},140)),l==null||l()}},[t,a,i,l]);if(t==="hidden")return null;const j=!p&&(t==="ready"||t==="streaming"||t==="error"),R=K5(t,c,u),L=t==="disabled-invalid"?c??"Cannot send":t==="error"?u??"Send failed — click to retry":null,S=r.jsx("button",{ref:$,type:"button","data-composer-action":"send","data-state":t,className:ee(st.base,Z5[t],f),style:m,"aria-label":R,disabled:!j,onClick:N,...x,children:r.jsxs("span",{className:st.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:st.iconLayer,"data-active":t==="ready"||t==="disabled-invalid"?"true":"false",children:r.jsx(Ds,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="streaming"?"true":"false",children:r.jsx(Ff,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="error"?"true":"false",children:r.jsx(Xa,{size:"100%",strokeWidth:2})})]})});return L?r.jsx(_r,{content:L,placement:"top",children:S}):S});nm.displayName="ComposerSendButton";const Q5={idle:st.attachIdle,disabled:st.attachDisabled,error:st.attachError},X5=(t,a,i)=>{switch(t){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},J5=g.forwardRef(({state:t,onSelect:a,accept:i,multiple:l=!0,disabledReason:c,errorMessage:u,groupDisabled:p,className:f,style:m,...x},y)=>{const _=g.useRef(null),w=g.useCallback(()=>{var S;(t==="idle"||t==="error")&&((S=_.current)==null||S.click())},[t]),$=g.useCallback(S=>{const k=S.target.files;k&&k.length>0&&(a==null||a(k)),S.target.value=""},[a]),N=!p&&t!=="disabled",j=X5(t,c,u),R=t==="disabled"?c??"Attachments unavailable":t==="error"?u??"Attachment failed":null,L=r.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":t,className:ee(st.base,Q5[t],f),style:m,"aria-label":j,disabled:!N,onClick:w,...x,children:[r.jsx("span",{className:st.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(Za,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:_,type:"file",accept:i,multiple:l,onChange:$,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return R?r.jsx(_r,{content:R,placement:"top",children:L}):L});J5.displayName="ComposerAttachment";const e4={idle:st.voiceIdle,recording:st.voiceRecording,disabled:st.voiceDisabled},t4=(t,a)=>{switch(t){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},rm=g.forwardRef(({state:t,onStartRecording:a,onStopRecording:i,disabledReason:l,groupDisabled:c,className:u,style:p,...f},m)=>{const x=g.useCallback(()=>{if(t==="idle"){a==null||a();return}if(t==="recording"){i==null||i();return}},[t,a,i]),y=!c&&t!=="disabled",_=t4(t,l),w=t==="disabled"?l??"Voice unavailable":null,$=r.jsx("button",{ref:m,type:"button","data-composer-action":"voice","data-state":t,className:ee(st.base,e4[t],u),style:p,"aria-label":_,"aria-pressed":t==="recording"||void 0,disabled:!y,onClick:x,...f,children:r.jsxs("span",{className:st.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:st.iconLayer,"data-active":t!=="recording"?"true":"false",children:r.jsx(Uf,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="recording"?"true":"false",children:r.jsx(Wf,{size:"100%",strokeWidth:1.5})})]})});return w?r.jsx(_r,{content:w,placement:"top",children:$}):$});rm.displayName="ComposerVoiceButton";const n4=g.forwardRef(({value:t,onChange:a,onSubmit:i,placeholder:l="Ask Ultron…",sending:c=!1,disabled:u=!1,voice:p=!0,maxRows:f=4,radius:m="lg",leadingActions:x,className:y},_)=>{const w=c?"streaming":t.trim().length===0?"hidden":"ready";return r.jsx(Sf,{className:y,style:{flex:"0 0 auto"},children:r.jsx(Nf,{ref:_,value:t,onChange:a,onSubmit:i,placeholder:l,maxRows:f,radius:m,disabled:u,children:r.jsxs(zf,{size:"md",disabled:u,children:[x,p&&r.jsx(rm,{state:u?"disabled":"idle"}),r.jsx(nm,{state:w,onSend:i,onStop:i})]})})})});n4.displayName="UltronCommandBar";const r4=g.forwardRef(({stages:t,state:a="live",duration:i,...l},c)=>r.jsx(Ad,{ref:c,state:a,duration:i,...l,children:t.map((u,p)=>r.jsx(Is,{type:u.type??"content",status:u.status??"pending",icon:u.icon,detail:u.detail,children:u.label},p))}));r4.displayName="UltronThreadTimeline";const o4="_root_ghwhu_10",a4="_badge_ghwhu_27",i4="_badgeIcon_ghwhu_38",s4="_green_ghwhu_59",l4="_yellow_ghwhu_60",c4="_matcha_ghwhu_61",d4="_purple_ghwhu_62",u4="_blue_ghwhu_63",h4="_azure_ghwhu_64",p4="_red_ghwhu_65",f4="_orange_ghwhu_66",m4="_pink_ghwhu_67",g4="_slate_ghwhu_68",v4="_content_ghwhu_73",y4="_label_ghwhu_83",x4="_valueRow_ghwhu_97",w4="_change_ghwhu_106",_4="_value_ghwhu_97",qn={root:o4,badge:a4,badgeIcon:i4,green:s4,yellow:l4,matcha:c4,purple:d4,blue:u4,azure:h4,red:p4,orange:f4,pink:m4,slate:g4,content:v4,label:y4,valueRow:x4,change:w4,value:_4},b4=g.forwardRef(({color:t="slate",icon:a,label:i,value:l,change:c,className:u,...p},f)=>r.jsxs("div",{ref:f,className:ee(qn.root,u),...p,children:[r.jsx("div",{className:ee(qn.badge,qn[t]),"aria-hidden":"true",children:r.jsx("span",{className:qn.badgeIcon,children:a})}),r.jsxs("div",{className:qn.content,children:[r.jsx("span",{className:qn.label,children:i}),r.jsxs("div",{className:qn.valueRow,children:[r.jsx("span",{className:qn.value,children:l}),c!=null&&r.jsx("span",{className:qn.change,children:c})]})]})]}));b4.displayName="DataCard";const k4="_root_d0j6n_7",C4="_icon_d0j6n_21",j4="_text_d0j6n_33",S4="_positive_d0j6n_41",N4="_warning_d0j6n_45",R4="_negative_d0j6n_49",ps={root:k4,icon:C4,text:j4,positive:S4,warning:N4,negative:R4};function L4(t){return t==="up"?"positive":"negative"}const $4=g.forwardRef((t,a)=>{const{mode:i,value:l,className:c,...u}=t,p=i==="trend"?t.severity??L4(t.trend):t.severity,{severity:f,...m}=u,x=i==="trend"?(({trend:_,severity:w,...$})=>$)(m):m,y=i==="trend"?t.trend==="up"?Ds:qf:null;return r.jsxs("span",{ref:a,className:ee(ps.root,ps[p],c),...x,children:[r.jsx("span",{className:ps.text,children:l}),y&&r.jsx("span",{className:ps.icon,"aria-hidden":"true",children:r.jsx(y,{size:14})})]})});$4.displayName="ValueChangeLabel";const M4="_root_1lq10_1",T4="_horizontal_1lq10_9",A4="_vertical_1lq10_15",I4="_solid_1lq10_32",E4="_dashed_1lq10_36",fs={root:M4,horizontal:T4,vertical:A4,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:I4,dashed:E4},P4=g.forwardRef(({thickness:t=1,orientation:a="horizontal",variant:i="solid",className:l,...c},u)=>r.jsx("hr",{ref:u,role:"separator","aria-orientation":a,className:ee(fs.root,fs[`thickness-${t}`],fs[a],fs[i],l),...c}));P4.displayName="Divider";const z4="_header_vxgy2_95",O4="_title_vxgy2_107",D4="_closeBtn_vxgy2_120",B4="_content_vxgy2_152",F4="_footer_vxgy2_163",Fa={header:z4,title:O4,closeBtn:D4,content:B4,footer:F4},W4=g.forwardRef(({onClose:t,children:a,className:i,...l},c)=>r.jsxs("div",{ref:c,className:ee(Fa.header,i),...l,children:[r.jsx("span",{className:Fa.title,children:a}),t&&r.jsx("button",{type:"button",className:Fa.closeBtn,onClick:t,"aria-label":"Close",children:r.jsx(Qa,{size:16})})]}));W4.displayName="DialogHeader";const H4=g.forwardRef(({children:t,className:a,...i},l)=>r.jsx("div",{ref:l,className:ee(Fa.content,a),...i,children:t}));H4.displayName="DialogContent";const q4=g.forwardRef(({children:t,className:a,...i},l)=>r.jsx("div",{ref:l,className:ee(Fa.footer,a),...i,children:t}));q4.displayName="DialogFooter";const U4="_root_1dntq_7",V4="_badge_1dntq_57",G4="_badgeIconSlot_1dntq_74",Y4="_content_1dntq_82",Z4="_text_1dntq_90",K4="_title_1dntq_99",Q4="_description_1dntq_120",X4="_actions_1dntq_131",J4="_dot_1dntq_137",ew="_actionLink_1dntq_144",tw="_primaryAction_1dntq_162",nw="_trailing_1dntq_170",Lt={root:U4,badge:V4,badgeIconSlot:G4,content:Y4,text:Z4,title:K4,description:Q4,actions:X4,dot:J4,actionLink:ew,primaryAction:tw,trailing:nw},rw=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),ow=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),aw=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),r1=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),iw={error:rw,warning:aw,success:ow,info:r1,feature:r1},om=g.forwardRef(({status:t="info",variant:a="lighter",size:i="sm",title:l,description:c,action:u,onAction:p,learnMore:f,onLearnMore:m,onDismiss:x,className:y,..._},w)=>{const $=iw[t],N=i==="lg",j=x?r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:r.jsx(Qa,{size:12})}):null;return r.jsxs("div",{ref:w,role:"alert",className:ee(Lt.root,y),"data-status":t,"data-variant":a,"data-size":i,..._,children:[r.jsx("span",{className:Lt.badge,"aria-hidden":"true",children:r.jsx("span",{className:ee("alloy-icon-slot",Lt.badgeIconSlot),children:r.jsx($,{})})}),N?r.jsxs("div",{className:Lt.content,children:[r.jsxs("div",{className:Lt.text,children:[r.jsx("p",{className:Lt.title,children:l}),c&&r.jsx("p",{className:Lt.description,children:c})]}),(u||f)&&r.jsxs("div",{className:Lt.actions,children:[u&&r.jsx("button",{type:"button",className:ee(Lt.actionLink,Lt.primaryAction),onClick:p,children:u}),u&&f&&r.jsx("span",{className:Lt.dot,"aria-hidden":"true",children:"·"}),f&&r.jsx("button",{type:"button",className:Lt.actionLink,onClick:m,children:f})]})]}):r.jsx("p",{className:Lt.title,children:l}),N?j:(u||x)&&r.jsxs("div",{className:Lt.trailing,children:[u&&r.jsx("button",{type:"button",className:ee(Lt.actionLink,Lt.primaryAction),onClick:p,children:u}),j]})]})});om.displayName="Alert";const sw="_stack_x4xl7_11",lw="_item_x4xl7_28",cw="_itemExiting_x4xl7_33",pd={stack:sw,item:lw,itemExiting:cw},dw=g.createContext(null);function uw({id:t,title:a,description:i,status:l,variant:c,size:u,action:p,onAction:f,duration:m,exiting:x,onRemove:y}){const _=g.useCallback(()=>y(t),[t,y]);return r.jsx("div",{className:ee(pd.item,x&&pd.itemExiting),onAnimationEnd:x?_:void 0,children:r.jsx(om,{status:l,variant:c,size:u,title:a,description:i,action:p,onAction:f,onDismiss:_,style:{width:"100%"}})})}function hw({toasts:t,onStartExit:a,onRemove:i}){return g.useEffect(()=>{const l=[];return t.forEach(c=>{c.duration>0&&!c.exiting&&l.push(setTimeout(()=>a(c.id),c.duration))}),()=>l.forEach(clearTimeout)},[t,a]),t.length===0?null:Es.createPortal(r.jsx("div",{className:pd.stack,"aria-live":"polite","aria-atomic":"false",children:t.map(l=>r.jsx(uw,{...l,onRemove:i},l.id))}),document.body)}function pw({children:t}){const[a,i]=g.useState([]),l=g.useRef(0),c=g.useCallback(f=>{const m=`toast-${++l.current}`;return i(x=>[...x,{id:m,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),m},[]),u=g.useCallback(f=>{i(m=>m.map(x=>x.id===f?{...x,exiting:!0}:x))},[]),p=g.useCallback(f=>{i(m=>m.filter(x=>x.id!==f))},[]);return r.jsxs(dw.Provider,{value:{addToast:c,removeToast:u},children:[t,r.jsx(hw,{toasts:a,onStartExit:u,onRemove:p})]})}const fw="_root_1s0ek_5",mw="_list_1s0ek_11",gw="_item_1s0ek_23",vw="_separator_1s0ek_31",yw="_link_1s0ek_47",xw="_current_1s0ek_68",ww="_iconSlot_1s0ek_76",Mn={root:fw,list:mw,item:gw,separator:vw,link:yw,current:xw,iconSlot:ww},_w=()=>r.jsx("span",{className:Mn.separator,"aria-hidden":"true",children:"/"}),bw=()=>r.jsx("span",{className:Mn.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),kw=g.forwardRef(({items:t,separator:a="slash",className:i,...l},c)=>{const u=a==="chevron"?bw:_w;return r.jsx("nav",{ref:c,"aria-label":"Breadcrumb",className:ee(Mn.root,i),...l,children:r.jsx("ol",{className:Mn.list,children:t.map((p,f)=>{const m=f===t.length-1,x=!m&&(!!p.href||!!p.onClick);return r.jsxs("li",{className:Mn.item,children:[f>0&&r.jsx(u,{}),x?r.jsxs("a",{href:p.href,onClick:p.onClick,className:Mn.link,"aria-label":p.label,children:[p.icon&&r.jsx("span",{className:ee(Mn.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]}):r.jsxs("span",{className:ee(Mn.link,m&&Mn.current),"aria-current":m?"page":void 0,children:[p.icon&&r.jsx("span",{className:ee(Mn.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]})]},f)})})})});kw.displayName="Breadcrumb";const Cw="_root_139vz_6",jw="_divider_139vz_14",Sw="_item_139vz_19",Nw="_label_139vz_25",Rw="_description_139vz_26",Lw="_chevron_139vz_27",$w="_iconSlot_139vz_28",Mw="_hitTarget_139vz_32",Tw="_size_sm_139vz_37",Aw="_size_md_139vz_43",Iw="_size_lg_139vz_49",Ew="_header_139vz_59",Pw="_headerContent_139vz_59",zw="_checkboxWrap_139vz_60",Ow="_labelBlock_139vz_157",Dw="_trailingSlot_139vz_60",Bw="_body_139vz_199",Fw="_bodyInner_139vz_209",Ww="_bodyContent_139vz_214",wt={root:Cw,divider:jw,item:Sw,label:Nw,description:Rw,chevron:Lw,iconSlot:$w,hitTarget:Mw,size_sm:Tw,size_md:Aw,size_lg:Iw,header:Ew,headerContent:Pw,checkboxWrap:zw,labelBlock:Ow,trailingSlot:Dw,body:Bw,bodyInner:Fw,bodyContent:Ww},Hw="_root_17t97_6",qw="_disabled_17t97_12",Uw="_sm_17t97_18",Vw="_md_17t97_26",Gw="_lg_17t97_34",Yw="_controlWrap_17t97_43",Zw="_input_17t97_52",Kw="_box_17t97_67",Qw="_boxChecked_17t97_96",Xw="_boxError_17t97_106",Jw="_labelWrap_17t97_116",e6="_label_17t97_116",t6="_error_17t97_138",n6="_required_17t97_140",r6="_description_17t97_145",Xt={root:Hw,disabled:qw,sm:Uw,md:Vw,lg:Gw,controlWrap:Yw,input:Zw,box:Kw,boxChecked:Qw,boxError:Xw,labelWrap:Jw,label:e6,error:t6,required:n6,description:r6},am=g.forwardRef(({checked:t,defaultChecked:a=!1,indeterminate:i=!1,onChange:l,disabled:c,error:u,size:p="md",label:f,description:m,id:x,name:y,value:_,required:w,className:$},N)=>{const j=g.useId(),R=x??j,L=g.useRef(null);g.useEffect(()=>{L.current&&(L.current.indeterminate=i)},[i]);const S=t!==void 0,[k,T]=g.useState(a),I=S?t:k,E=O=>{S||T(O.target.checked),l==null||l(O.target.checked)},z=I||i;return r.jsxs("div",{className:ee(Xt.root,Xt[p],c&&Xt.disabled,u&&Xt.error,$),children:[r.jsxs("div",{className:Xt.controlWrap,children:[r.jsx("input",{ref:O=>{L.current=O,typeof N=="function"?N(O):N&&(N.current=O)},type:"checkbox",id:R,name:y,value:_,checked:I,disabled:c,required:w,"aria-invalid":u||void 0,onChange:E,className:Xt.input}),r.jsx("span",{className:ee(Xt.box,z&&Xt.boxChecked,u&&Xt.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):I?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||m)&&r.jsxs("div",{className:Xt.labelWrap,children:[f&&r.jsxs("label",{htmlFor:R,className:Xt.label,children:[f,w&&r.jsx("span",{className:Xt.required,"aria-hidden":"true",children:" *"})]}),m&&r.jsx("span",{className:Xt.description,children:m})]})]})});am.displayName="Checkbox";const im=g.createContext(null),fd=g.createContext(0),sm=g.forwardRef(({type:t="multiple",collapsible:a=!0,value:i,defaultValue:l,onValueChange:c,divider:u=!0,size:p="md",disabled:f=!1,className:m,children:x,...y},_)=>{const w=g.useMemo(()=>Array.isArray(l)?new Set(l):typeof l=="string"?new Set([l]):new Set,[]),[$,N]=g.useState(w),j=i!==void 0,R=g.useMemo(()=>j?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:$,[j,i,$]),L=g.useCallback(T=>R.has(T),[R]),S=g.useCallback(T=>{const I=new Set(R);t==="single"?I.has(T)?a&&I.delete(T):(I.clear(),I.add(T)):I.has(T)?I.delete(T):I.add(T),j||N(I),c&&c(t==="single"?I.values().next().value??"":Array.from(I))},[R,t,a,j,c]),k=g.useMemo(()=>({type:t,collapsible:a,size:p,disabled:f,isExpanded:L,toggle:S}),[t,a,p,f,L,S]);return r.jsx("div",{ref:_,"data-accordion-root":"","data-divider":u||void 0,"data-disabled":f||void 0,"data-size":p,className:ee(wt.root,u&&wt.divider,m),...y,children:r.jsx(im.Provider,{value:k,children:r.jsx(fd.Provider,{value:0,children:x})})})});sm.displayName="Accordion";function ms(t,a){const i=t.closest("[data-accordion-root]");if(!i)return;const l=t.getAttribute("data-accordion-depth"),c=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${l}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(c.length===0)return;const u=c.indexOf(t);let p;switch(a){case"first":p=c[0];break;case"last":p=c[c.length-1];break;case"next":p=c[(u+1)%c.length];break;case"prev":p=c[(u-1+c.length)%c.length];break}p.focus()}const lm=g.forwardRef(({value:t,label:a,description:i,icon:l,leadingSlot:c,trailingSlot:u,chevronPosition:p="leading",selectable:f=!1,checked:m,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:_,expanded:w,defaultExpanded:$=!1,onExpandedChange:N,disabled:j=!1,size:R,className:L,children:S,...k},T)=>{const I=g.useContext(im),E=g.useContext(fd),z=I!==null,O=R??(I==null?void 0:I.size)??"md",U=j||(I==null?void 0:I.disabled)||!1,[Z,X]=g.useState($);let V;z?V=t!==void 0?I.isExpanded(t):!1:w!==void 0?V=w:V=Z;const te=g.useCallback(()=>{if(U)return;if(z){if(t===void 0)return;const A=I.isExpanded(t);I.toggle(t);const Q=I.type==="single"&&!I.collapsible&&A?!0:!A;N==null||N(Q);return}const C=!V;w===void 0&&X(C),N==null||N(C)},[U,z,I,t,V,w,N]),ie=g.useCallback(C=>_==null?void 0:_(C),[_]),ce=g.useCallback(C=>{if(C.key==="Enter"||C.key===" "){C.preventDefault(),te();return}if(z)switch(C.key){case"ArrowDown":C.preventDefault(),ms(C.currentTarget,"next");break;case"ArrowUp":C.preventDefault(),ms(C.currentTarget,"prev");break;case"Home":C.preventDefault(),ms(C.currentTarget,"first");break;case"End":C.preventDefault(),ms(C.currentTarget,"last");break}},[te,z]),se=g.useId(),J=`${se}-header`,W=`${se}-body`,P=O==="sm"?16:O==="md"?18:20,D=c??r.jsxs(r.Fragment,{children:[f&&r.jsx("span",{className:wt.checkboxWrap,children:r.jsx(am,{size:O,checked:m,defaultChecked:x,indeterminate:y,disabled:U,onChange:ie})}),l&&r.jsx("span",{className:wt.iconSlot,"aria-hidden":"true",children:l})]});return r.jsxs("div",{ref:T,"data-accordion-item":"","data-expanded":V||void 0,"data-disabled":U||void 0,"data-size":O,"data-depth":E,className:ee(wt.item,wt[`size_${O}`],L),style:{"--accordion-depth":E},...k,children:[r.jsxs("div",{className:wt.header,children:[r.jsx("button",{type:"button",id:J,"data-accordion-header-button":"","data-accordion-depth":E,className:wt.hitTarget,"aria-expanded":V,"aria-controls":W,"aria-disabled":U||void 0,disabled:U,onClick:te,onKeyDown:ce}),r.jsxs("div",{className:wt.headerContent,children:[p==="leading"&&r.jsx("span",{className:wt.chevron,"aria-hidden":"true",children:r.jsx(Gt,{size:P,color:"currentColor"})}),D,r.jsxs("div",{className:wt.labelBlock,children:[r.jsx("span",{className:wt.label,children:a}),i&&r.jsx("span",{className:wt.description,children:i})]}),u&&r.jsx("div",{className:wt.trailingSlot,children:u}),p==="trailing"&&r.jsx("span",{className:wt.chevron,"aria-hidden":"true",children:r.jsx(Gt,{size:P,color:"currentColor"})})]})]}),r.jsx("div",{id:W,role:"region","aria-labelledby":J,className:wt.body,"aria-hidden":!V,children:r.jsx("div",{className:wt.bodyInner,children:r.jsx("div",{className:wt.bodyContent,children:r.jsx(fd.Provider,{value:E+1,children:S})})})})]})});lm.displayName="AccordionItem";const o6="_root_2hiai_7",a6="_fullWidth_2hiai_12",i6="_panel_2hiai_19",s6="_panelInner_2hiai_73",l6="_item_2hiai_81",c6="_groupHeading_2hiai_87",d6="_groupHeadingLabel_2hiai_94",u6="_groupHeadingCollapsible_2hiai_106",h6="_groupChevron_2hiai_119",p6="_groupDivider_2hiai_133",An={root:o6,fullWidth:a6,panel:i6,panelInner:s6,item:l6,groupHeading:c6,groupHeadingLabel:d6,groupHeadingCollapsible:u6,groupChevron:h6,groupDivider:p6};function f6({group:t,size:a,closeOnSelect:i,onClose:l}){const[c,u]=g.useState(t.defaultExpanded??!0);return r.jsxs("div",{children:[t.heading&&r.jsxs("div",{className:ee(An.groupHeading,t.collapsible&&An.groupHeadingCollapsible),onClick:t.collapsible?()=>u(p=>!p):void 0,"aria-expanded":t.collapsible?c:void 0,children:[r.jsx("span",{className:An.groupHeadingLabel,children:t.heading}),t.collapsible&&r.jsx("span",{className:An.groupChevron,"data-expanded":c||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:12})})]}),c&&r.jsx("div",{role:"group","aria-label":t.heading,children:t.options.map((p,f)=>{const m=p.trailingAction==="switch"||p.trailingAction==="checkbox"||p.trailingAction==="radio";return r.jsx(nn,{role:"menuitem",size:a,label:p.label,description:p.description,leadingSlot:p.leadingSlot,trailingAction:p.trailingAction,trailingSlot:p.trailingSlot,disabled:p.disabled,destructive:p.destructive,selected:p.selected,checked:p.checked,defaultChecked:p.defaultChecked,onCheckedChange:p.onCheckedChange,badgeCount:p.badgeCount,badgeLabel:p.badgeLabel,expanded:p.expanded,statusVariant:p.statusVariant,divider:p.divider??!1,className:An.item,onClick:()=>{var x;(x=p.onClick)==null||x.call(p),i&&!m&&l()}},p.id)})})]})}const cm=g.forwardRef(({trigger:t,groups:a,size:i="sm",width:l=260,placement:c="bottom-start",open:u,defaultOpen:p=!1,onOpenChange:f,disabled:m=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:_,...w},$)=>{const[N,j]=g.useState(p),R=g.useRef(null),L=u!==void 0?u:N,S=g.useCallback(T=>{R.current=T,$&&(typeof $=="function"?$(T):$.current=T)},[$]),k=g.useCallback(T=>{u===void 0&&j(T),f==null||f(T)},[u,f]);return g.useEffect(()=>{if(!L)return;const T=I=>{var E;(E=R.current)!=null&&E.contains(I.target)||k(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[L,k]),g.useEffect(()=>{if(!L)return;const T=I=>{I.key==="Escape"&&k(!1)};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[L,k]),r.jsxs("div",{ref:S,className:ee(An.root,y&&An.fullWidth,_),...w,children:[r.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":L,tabIndex:m?-1:0,onClick:m?void 0:()=>k(!L),onKeyDown:m?void 0:T=>{(T.key==="Enter"||T.key===" ")&&(T.preventDefault(),k(!L))},children:t}),r.jsx("div",{className:An.panel,"data-open":L||void 0,"data-placement":c,style:{width:typeof l=="number"?`${l}px`:l},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:An.panelInner,children:a.map((T,I)=>r.jsxs("div",{children:[I>0&&r.jsx("div",{className:An.groupDivider,"aria-hidden":"true"}),r.jsx(f6,{group:T,size:i,closeOnSelect:x,onClose:()=>k(!1)})]},T.id))})})]})});cm.displayName="DropdownMenu";const m6="_hiddenInput_7w2s5_8",g6="_area_7w2s5_19",v6="_uploadIcon_7w2s5_53",y6="_textBlock_7w2s5_59",x6="_title_7w2s5_67",w6="_description_7w2s5_76",_6="_fileRow_7w2s5_88",b6="_fileIcon_7w2s5_96",k6="_fileName_7w2s5_101",C6="_successIcon_7w2s5_115",j6="_removeBtn_7w2s5_121",S6="_progressWrap_7w2s5_145",N6="_progressBar_7w2s5_153",R6="_progressFill_7w2s5_161",L6="_progressLabel_7w2s5_168",$6="_errorRow_7w2s5_178",M6="_errorIcon_7w2s5_186",T6="_errorText_7w2s5_192",A6="_areaMulti_7w2s5_206",I6="_multiDropZone_7w2s5_214",E6="_fileList_7w2s5_244",P6="_fileListItem_7w2s5_254",z6="_inline_7w2s5_267",O6="_inlineIcon_7w2s5_309",D6="_inlineText_7w2s5_330",B6="_inlineProgress_7w2s5_353",F6="_inlineProgressFill_7w2s5_363",Ae={hiddenInput:m6,area:g6,uploadIcon:v6,textBlock:y6,title:x6,description:w6,fileRow:_6,fileIcon:b6,fileName:k6,successIcon:C6,removeBtn:j6,progressWrap:S6,progressBar:N6,progressFill:R6,progressLabel:L6,errorRow:$6,errorIcon:M6,errorText:T6,areaMulti:A6,multiDropZone:I6,fileList:E6,fileListItem:P6,inline:z6,inlineIcon:O6,inlineText:D6,inlineProgress:B6,inlineProgressFill:F6};function Vc(t){const a=t.name.lastIndexOf(".");return a!==-1?t.name.slice(a+1).toUpperCase():t.type?(t.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const W6=g.forwardRef(({variant:t="area",multiple:a=!1,state:i="empty",progress:l=0,file:c,files:u,errorMessage:p,title:f="Choose a file or drag & drop it here.",description:m="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:_,onClear:w,onRemoveFile:$,fieldVariant:N="outlined",disabled:j=!1,className:R,...L},S)=>{const k=g.useRef(null),[T,I]=g.useState(!1),E=!j&&(a||i==="empty"),z=g.useCallback(()=>{var se;!j&&(a||i==="empty")&&((se=k.current)==null||se.click())},[j,a,i]),O=g.useCallback(se=>{var J;if(a){const W=se.target.files?Array.from(se.target.files):[];W.length&&(_==null||_(W))}else{const W=(J=se.target.files)==null?void 0:J[0];W&&(y==null||y(W))}se.target.value=""},[a,y,_]),U=g.useCallback(se=>{se.preventDefault(),E&&I(!0)},[E]),Z=g.useCallback(()=>I(!1),[]),X=g.useCallback(se=>{var J;if(se.preventDefault(),I(!1),!!E)if(a){const W=se.dataTransfer.files?Array.from(se.dataTransfer.files):[];W.length&&(_==null||_(W))}else{const W=(J=se.dataTransfer.files)==null?void 0:J[0];W&&(y==null||y(W))}},[E,a,y,_]),V=r.jsx("input",{ref:k,type:"file",className:Ae.hiddenInput,accept:x,multiple:a,disabled:j,"aria-hidden":"true",tabIndex:-1,onChange:O}),te=c?r.jsxs("div",{className:Ae.fileRow,children:[r.jsx("span",{className:`${Ae.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(zo,{size:16})}),r.jsx("span",{className:Ae.fileName,children:c.name}),r.jsx(wr,{size:"sm",variant:"subtle",children:Vc(c)}),i==="complete"&&r.jsx("span",{className:`${Ae.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(br,{size:16})}),r.jsx("button",{type:"button",className:Ae.removeBtn,onClick:w,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(ys,{size:14})})})]}):null;if(t==="area"){if(a){const se=u??[];return r.jsxs("div",{ref:S,className:ee(Ae.areaMulti,R),"data-drag-over":T||void 0,"data-disabled":j||void 0,onDragOver:U,onDragLeave:Z,onDrop:X,...L,children:[V,r.jsxs("div",{className:Ae.multiDropZone,children:[r.jsx("span",{className:`${Ae.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Uc,{size:24})}),r.jsxs("div",{className:Ae.textBlock,children:[r.jsx("p",{className:Ae.title,children:f}),r.jsx("p",{className:Ae.description,children:m})]}),r.jsx(Te,{variant:"tertiary",size:"sm",onClick:z,disabled:j,children:"Browse Files"})]}),se.length>0&&r.jsx("ul",{className:Ae.fileList,"aria-label":"Selected files",children:se.map((J,W)=>r.jsxs("li",{className:Ae.fileListItem,children:[r.jsx("span",{className:`${Ae.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(zo,{size:16})}),r.jsx("span",{className:Ae.fileName,children:J.name}),r.jsx(wr,{size:"sm",variant:"subtle",children:Vc(J)}),r.jsx("button",{type:"button",className:Ae.removeBtn,onClick:()=>$==null?void 0:$(W),"aria-label":`Remove ${J.name}`,disabled:j,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(ys,{size:14})})})]},`${J.name}-${W}`))})]})}return r.jsxs("div",{ref:S,className:ee(Ae.area,R),"data-state":i,"data-drag-over":T||void 0,"data-disabled":j||void 0,onDragOver:U,onDragLeave:Z,onDrop:X,...L,children:[V,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${Ae.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Uc,{size:24})}),r.jsxs("div",{className:Ae.textBlock,children:[r.jsx("p",{className:Ae.title,children:f}),r.jsx("p",{className:Ae.description,children:m})]}),r.jsx(Te,{variant:"tertiary",size:"sm",onClick:z,disabled:j,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[te,r.jsxs("div",{className:Ae.progressWrap,children:[r.jsx("div",{className:Ae.progressBar,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Ae.progressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})}),r.jsxs("p",{className:Ae.progressLabel,children:[l,"% uploaded"]})]})]}),i==="complete"&&te,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:Ae.errorRow,children:[r.jsx("span",{className:`${Ae.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Fo,{size:20})}),r.jsx("p",{className:Ae.errorText,children:p??"Upload failed. Please try again."})]}),r.jsx(Te,{variant:"tertiary",size:"sm",onClick:z,disabled:j,children:"Try Again"})]})]})}const ie={empty:r.jsx(Uc,{size:16}),uploading:r.jsx(zo,{size:16}),complete:r.jsx(br,{size:16}),error:r.jsx(Fo,{size:16})}[i],ce=(i==="uploading"||i==="complete")&&!!c;return r.jsxs("div",{ref:S,className:ee(Ae.inline,R),"data-state":i,"data-field-variant":N,"data-disabled":j||void 0,...L,children:[V,r.jsx("span",{className:`${Ae.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ie}),r.jsxs("span",{className:Ae.inlineText,"data-has-file":ce?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(c==null?void 0:c.name),i==="complete"&&(c==null?void 0:c.name),i==="error"&&(p??"Upload failed. Please try again.")]}),ce&&r.jsx(wr,{size:"sm",variant:"subtle",children:Vc(c)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:Ae.removeBtn,onClick:w,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(ys,{size:14})})}),i==="empty"&&r.jsx(Te,{variant:"tertiary",size:"xs",onClick:z,disabled:j,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:Ae.inlineProgress,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Ae.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})})]})});W6.displayName="FileUploader";const H6="_wrapper_127v8_8",q6="_labelRow_127v8_16",U6="_label_127v8_16",V6="_required_127v8_28",G6="_labelIcon_127v8_36",Y6="_sm_127v8_46",Z6="_md_127v8_47",K6="_lg_127v8_48",Q6="_shell_127v8_44",X6="_outlined_127v8_75",J6="_underlined_127v8_102",e8="_float_127v8_147",t8="_leadingSlot_127v8_181",n8="_trailingSlot_127v8_193",r8="_trailingActionWrap_127v8_206",o8="_trailingActionBtn_127v8_213",a8="_successTrailingSlot_127v8_234",i8="_errorTrailingSlot_127v8_239",s8="_control_127v8_251",l8="_selectValue_127v8_297",c8="_selectPlaceholder_127v8_303",d8="_selectChevron_127v8_307",u8="_selectChevronOpen_127v8_312",h8="_textareaShell_127v8_315",p8="_textareaControl_127v8_334",f8="_footer_127v8_351",m8="_footerRow_127v8_363",g8="_footerError_127v8_364",v8="_footerSuccess_127v8_365",y8="_footerIcon_127v8_368",x8="_wrapperHorizontal_127v8_378",w8="_horizontalLabelCol_127v8_384",_8="_horizontalLabelHint_127v8_393",b8="_horizontalControlCol_127v8_402",k8="_msContainer_127v8_416",C8="_msShell_127v8_425",j8="_msOpen_127v8_440",S8="_msDisabled_127v8_447",N8="_msBody_127v8_450",R8="_msPlaceholder_127v8_459",L8="_msChevron_127v8_469",$8="_msChevronOpen_127v8_480",M8="_msPanel_127v8_483",Ce={wrapper:H6,labelRow:q6,label:U6,required:V6,labelIcon:G6,sm:Y6,md:Z6,lg:K6,shell:Q6,outlined:X6,underlined:J6,float:e8,leadingSlot:t8,trailingSlot:n8,trailingActionWrap:r8,trailingActionBtn:o8,successTrailingSlot:a8,errorTrailingSlot:i8,control:s8,selectValue:l8,selectPlaceholder:c8,selectChevron:d8,selectChevronOpen:u8,textareaShell:h8,textareaControl:p8,footer:f8,footerRow:m8,footerError:g8,footerSuccess:v8,footerIcon:y8,wrapperHorizontal:x8,horizontalLabelCol:w8,horizontalLabelHint:_8,horizontalControlCol:b8,msContainer:k8,msShell:C8,msOpen:j8,msDisabled:S8,msBody:N8,msPlaceholder:R8,msChevron:L8,msChevronOpen:$8,msPanel:M8};function Uo({label:t,labelIcon:a,labelDescription:i,hint:l,error:c,success:u,required:p,htmlFor:f,layout:m="vertical",labelWidth:x=160,className:y,children:_}){const w=c??u??l,$=c?"error":u?"success":"hint",N=w?r.jsxs("p",{className:ee(Ce.footer,$==="error"&&Ce.footerError,$==="success"&&Ce.footerSuccess),role:$==="error"?"alert":void 0,"aria-live":$==="error"?"assertive":void 0,children:[$==="hint"&&r.jsx("span",{className:`${Ce.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Fo,{size:12})}),w]}):null,j=t!=null?r.jsxs("div",{className:Ce.labelRow,children:[r.jsx("label",{className:Ce.label,htmlFor:f,children:t}),p&&r.jsx("span",{className:Ce.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${Ce.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(m==="horizontal"){const R={width:typeof x=="number"?`${x}px`:x};return r.jsxs("div",{className:ee(Ce.wrapper,Ce.wrapperHorizontal,y),children:[(j||i)&&r.jsxs("div",{className:Ce.horizontalLabelCol,style:R,children:[j,i&&r.jsx("p",{className:Ce.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:Ce.horizontalControlCol,children:[_,N]})]})}return r.jsxs("div",{className:ee(Ce.wrapper,y),children:[j,_,N]})}function ei({variant:t="outlined",size:a="md",error:i,success:l,disabled:c,readOnly:u,leadingIcon:p,trailingIcon:f,trailingAction:m,isTextarea:x,focused:y,className:_,children:w}){const $=a==="sm"?14:a==="lg"?18:16,N=l&&!i&&!f&&!m?r.jsx(br,{size:$}):null,j=i&&!f&&!m?r.jsx(Fo,{size:$}):null,R=!!p,L=!!(f||m||N||j);return r.jsxs("div",{className:ee(Ce.shell,Ce[t],Ce[a],x&&Ce.textareaShell,_),"data-error":i||void 0,"data-success":l||void 0,"data-disabled":c||void 0,"data-readonly":u||void 0,"data-focused":y||void 0,"data-has-leading":R||void 0,"data-has-trailing":L||void 0,children:[p&&r.jsx("span",{className:ee(Ce.leadingSlot,"alloy-icon-slot"),children:p}),w,m?r.jsx("span",{className:Ce.trailingActionWrap,children:m}):f||N||j?r.jsx("span",{className:ee(Ce.trailingSlot,"alloy-icon-slot",N&&Ce.successTrailingSlot,j&&Ce.errorTrailingSlot),children:f??N??j}):null]})}const Od=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",type:m="text",leadingIcon:x,trailingIcon:y,layout:_,labelWidth:w,labelDescription:$,id:N,disabled:j,readOnly:R,className:L,...S},k)=>{const T=g.useId(),I=N??T;return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:I,layout:_,labelWidth:w,labelDescription:$,className:L,children:r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:j,readOnly:R,leadingIcon:x,trailingIcon:y,children:r.jsx("input",{ref:k,id:I,type:m,disabled:j,readOnly:R,"aria-invalid":l?!0:void 0,"aria-describedby":i||l||c?`${I}-footer`:void 0,className:ee(Ce.control),...S})})})});Od.displayName="TextField";const T8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,trailingIcon:x,layout:y,labelWidth:_,labelDescription:w,id:$,disabled:N,readOnly:j,className:R,...L},S)=>{const k=g.useId(),T=$??k;return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:T,layout:y,labelWidth:_,labelDescription:w,className:R,children:r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:N,readOnly:j,leadingIcon:m,trailingIcon:x,isTextarea:!0,children:r.jsx("textarea",{ref:S,id:T,disabled:N,readOnly:j,"aria-invalid":l?!0:void 0,className:ee(Ce.control,Ce.textareaControl),...L})})})});T8.displayName="TextArea";const A8={sm:"sm",md:"md",lg:"lg"},dm=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,layout:x,labelWidth:y,labelDescription:_,options:w,value:$,defaultValue:N="",onChange:j,placeholder:R="Select an option…",disabled:L,readOnly:S,id:k,className:T},I)=>{var P;const E=g.useId(),z=k??E,O=$!==void 0,[U,Z]=g.useState(N),X=O?$:U,V=g.useCallback(D=>{O||Z(D),j==null||j(D)},[O,j]),[te,ie]=g.useState(!1),ce=(P=w.find(D=>D.value===X))==null?void 0:P.label,se=f==="sm"?14:f==="lg"?18:16,J=A8[f],W=r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:L,readOnly:S,focused:te,leadingIcon:m,trailingIcon:r.jsx("span",{className:ee(Ce.selectChevron,te&&Ce.selectChevronOpen),"aria-hidden":"true",children:r.jsx(kr,{size:se})}),children:r.jsx("span",{className:ee(Ce.control,Ce.selectValue,!ce&&Ce.selectPlaceholder),children:ce??R})});return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:z,layout:x,labelWidth:y,labelDescription:_,className:T,children:r.jsx(cm,{ref:I,id:z,fullWidth:!0,trigger:W,groups:[{id:"options",options:w.map(D=>({id:D.value,label:D.label,disabled:D.disabled,selected:D.value===X,onClick:()=>V(D.value)}))}],size:J,width:"100%",placement:"bottom-start",open:te,onOpenChange:ie,disabled:L||S})})});dm.displayName="SelectField";const I8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,layout:x,labelWidth:y,labelDescription:_,id:w,disabled:$,readOnly:N,className:j,...R},L)=>{const S=g.useId(),k=w??S,[T,I]=g.useState(!1),E=f==="sm"?14:f==="lg"?18:16;return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:k,layout:x,labelWidth:y,labelDescription:_,className:j,children:r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:$,readOnly:N,leadingIcon:m,trailingAction:r.jsx("button",{type:"button",className:`${Ce.trailingActionBtn} alloy-icon-slot`,onClick:()=>I(z=>!z),tabIndex:$?-1:0,"aria-label":T?"Hide password":"Show password","aria-pressed":T,children:T?r.jsx(Bf,{size:E}):r.jsx(Id,{size:E})}),children:r.jsx("input",{ref:L,id:k,type:T?"text":"password",disabled:$,readOnly:N,"aria-invalid":l?!0:void 0,autoComplete:"current-password",className:ee(Ce.control),...R})})})});I8.displayName="PasswordField";const um=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",onClear:m,onChange:x,layout:y,labelWidth:_,labelDescription:w,id:$,value:N,defaultValue:j,disabled:R,readOnly:L,className:S,...k},T)=>{const I=g.useId(),E=$??I,z=f==="sm"?14:f==="lg"?18:16,O=N!==void 0?String(N).length>0:void 0,U=g.useCallback(Z=>{x==null||x(Z)},[x]);return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:E,layout:y,labelWidth:_,labelDescription:w,className:S,children:r.jsx(ei,{variant:p,size:f,error:!!l,success:!!c,disabled:R,readOnly:L,leadingIcon:r.jsx(Pd,{size:z}),trailingAction:O?r.jsx("button",{type:"button",className:`${Ce.trailingActionBtn} alloy-icon-slot`,onClick:m,tabIndex:R?-1:0,"aria-label":"Clear search",children:r.jsx(Qa,{size:z})}):void 0,children:r.jsx("input",{ref:T,id:E,type:"search",value:N,defaultValue:j,disabled:R,readOnly:L,"aria-invalid":l?!0:void 0,onChange:U,className:ee(Ce.control),...k})})})});um.displayName="SearchField";const E8=g.forwardRef((t,a)=>r.jsx(Od,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...t}));E8.displayName="EmailField";const hm=g.forwardRef((t,a)=>r.jsx(Od,{ref:a,type:"number",inputMode:"numeric",...t}));hm.displayName="NumberField";const P8={sm:"sm",md:"sm",lg:"md"},z8={sm:"sm",md:"md",lg:"lg"},O8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:l,success:c,required:u,variant:p="outlined",size:f="md",layout:m,labelWidth:x,labelDescription:y,options:_,value:w,defaultValue:$=[],onChange:N,placeholder:j="Select options…",disabled:R,readOnly:L,id:S,className:k},T)=>{const I=g.useId(),E=S??I,z=`${E}-list`,O=g.useRef(null),U=w!==void 0,[Z,X]=g.useState($),V=U?w:Z,te=g.useCallback(A=>{U||X(A),N==null||N(A)},[U,N]),[ie,ce]=g.useState(!1);g.useEffect(()=>{if(!ie)return;const A=ne=>{O.current&&!O.current.contains(ne.target)&&ce(!1)},Q=ne=>{ne.key==="Escape"&&ce(!1)};return document.addEventListener("mousedown",A),document.addEventListener("keydown",Q),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("keydown",Q)}},[ie]);const se=A=>{if(R||L)return;const Q=V.includes(A)?V.filter(ne=>ne!==A):[...V,A];te(Q)},J=A=>{R||L||((A.key==="Enter"||A.key===" ")&&(A.preventDefault(),ce(Q=>!Q)),A.key==="Backspace"&&V.length>0&&!ie&&te(V.slice(0,-1)))},W=f==="sm"?14:f==="lg"?18:16,P=P8[f],D=z8[f],C=Object.fromEntries(_.map(A=>[A.value,A.label]));return r.jsx(Uo,{label:t,labelIcon:a,hint:i,error:l,success:c,required:u,htmlFor:E,layout:m,labelWidth:x,labelDescription:y,className:k,children:r.jsxs("div",{ref:O,className:Ce.msContainer,children:[r.jsxs("div",{ref:T,id:E,role:"combobox","aria-haspopup":"listbox","aria-expanded":ie,"aria-controls":z,"aria-disabled":R||void 0,tabIndex:R?-1:0,className:ee(Ce.msShell,Ce[p],Ce[f],ie&&Ce.msOpen,R&&Ce.msDisabled),"data-error":l?!0:void 0,"data-success":c&&!l?!0:void 0,"data-disabled":R||void 0,onClick:()=>{!R&&!L&&ce(A=>!A)},onKeyDown:J,children:[r.jsx("div",{className:Ce.msBody,children:V.length===0?r.jsx("span",{className:Ce.msPlaceholder,children:j}):V.map(A=>r.jsx(wr,{size:P,variant:"subtle",dismissible:!R&&!L,onDismiss:()=>te(V.filter(Q=>Q!==A)),children:C[A]??A},A))}),r.jsx("span",{className:ee(Ce.msChevron,"alloy-icon-slot",ie&&Ce.msChevronOpen),children:r.jsx(kr,{size:W})})]}),ie&&r.jsx("div",{id:z,role:"listbox","aria-multiselectable":"true","aria-label":typeof t=="string"?t:"Options",className:Ce.msPanel,children:_.map(A=>{const Q=V.includes(A.value);return r.jsx(nn,{label:A.label,size:D,trailingAction:"checkbox",checked:Q,disabled:A.disabled,role:"option","aria-selected":Q,onMouseDown:ne=>{ne.preventDefault()},onCheckedChange:()=>{A.disabled||se(A.value)}},A.value)})})]})})});O8.displayName="MultiSelectField";const D8="_root_1249j_6",B8="_pageControls_1249j_14",F8="_pageBtn_1249j_21",W8="_ellipsis_1249j_36",H8="_rowsGroup_1249j_51",q8="_rowsSelect_1249j_58",U8="_countText_1249j_64",V8="_groupLabel_1249j_74",G8="_goToGroup_1249j_84",Y8="_goToInput_1249j_91",wn={root:D8,pageControls:B8,pageBtn:F8,ellipsis:W8,rowsGroup:H8,rowsSelect:q8,countText:U8,groupLabel:V8,goToGroup:G8,goToInput:Y8};function Z8(t,a,i){if(a<=1)return[1];const l=Math.max(2,t-i),c=Math.min(a-1,t+i),u=[1];l>2&&u.push("ellipsis");for(let p=l;p<=c;p++)u.push(p);return c<a-1&&u.push("ellipsis"),a>1&&u.push(a),u}const K8=g.forwardRef(({page:t,totalPages:a,onPageChange:i,showRowsPerPage:l=!1,rowsPerPage:c,rowsPerPageOptions:u=[10,25,50,100],onRowsPerPageChange:p,showGoToPage:f=!1,totalCount:m,siblingCount:x=1,size:y="sm",disabled:_=!1,className:w,...$},N)=>{const[j,R]=g.useState(""),L=y,S=y,k=y==="sm"?14:16,T=Z8(t,a,x),I=g.useCallback(O=>{const U=Math.min(Math.max(1,O),a);U!==t&&i(U)},[t,a,i]),E=g.useCallback(O=>{if(O.key==="Enter"){const U=parseInt(j,10);isNaN(U)||I(U),R("")}},[j,I]),z=m!=null&&c!=null?`${(t-1)*c+1}–${Math.min(t*c,m)} of ${m}`:null;return r.jsxs("nav",{ref:N,"aria-label":"Pagination",className:ee(wn.root,w),"data-size":y,...$,children:[l&&r.jsxs("div",{className:wn.rowsGroup,children:[r.jsx("span",{className:wn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:wn.rowsSelect,children:r.jsx(dm,{size:S,value:c,disabled:_,"aria-label":"Rows per page",onChange:O=>p==null?void 0:p(Number(O.target.value)),children:u.map(O=>r.jsx("option",{value:O,children:O},O))})})]}),z&&r.jsx("span",{className:wn.countText,"aria-live":"polite",children:z}),r.jsxs("div",{className:wn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Te,{variant:"ghost",size:L,iconOnly:!0,"aria-label":"Previous page",disabled:_||t<=1,onClick:()=>I(t-1),children:r.jsx(Df,{size:k})}),T.map((O,U)=>O==="ellipsis"?r.jsx("span",{className:wn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${U}`):r.jsx(Te,{variant:O===t?"secondary":"ghost",size:L,"aria-label":`Page ${O}`,"aria-current":O===t?"page":void 0,disabled:_,onClick:()=>I(O),className:wn.pageBtn,children:O},O)),r.jsx(Te,{variant:"ghost",size:L,iconOnly:!0,"aria-label":"Next page",disabled:_||t>=a,onClick:()=>I(t+1),children:r.jsx(Gt,{size:k})})]}),f&&r.jsxs("div",{className:wn.goToGroup,children:[r.jsx("span",{className:wn.groupLabel,children:"Go to"}),r.jsx("div",{className:wn.goToInput,children:r.jsx(hm,{size:S,value:j,placeholder:String(t),min:1,max:a,disabled:_,"aria-label":"Go to page number",onChange:O=>R(O.target.value),onKeyDown:E})})]})]})});K8.displayName="Pagination";const Q8="_root_1vx33_6",X8="_fullWidth_1vx33_18",J8="_item_1vx33_23",e9="_indicator_1vx33_28",t9="_sm_1vx33_46",n9="_md_1vx33_54",r9="_lg_1vx33_62",o9="_itemSelected_1vx33_109",a9="_itemIcon_1vx33_115",i9="_itemLabel_1vx33_127",vr={root:Q8,fullWidth:X8,item:J8,indicator:e9,sm:t9,md:n9,lg:r9,itemSelected:o9,itemIcon:a9,itemLabel:i9},pm=g.createContext(null);function s9(t){const a=g.useContext(pm);if(!a)throw new Error(`<${t}> must be rendered inside <SegmentedControl>`);return a}const fm=g.forwardRef(({value:t,leadingIcon:a,className:i,children:l,disabled:c,onClick:u,...p},f)=>{const{value:m,onChange:x,disabled:y,name:_}=s9("SegmentedControl.Item"),w=m===t,$=y||!!c;return r.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":w,name:_,disabled:$,className:ee(vr.item,w&&vr.itemSelected,i),onClick:N=>{$||x(t),u==null||u(N)},...p,children:[a&&r.jsx("span",{className:ee(vr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),l!==void 0&&r.jsx("span",{className:vr.itemLabel,children:l})]})});fm.displayName="SegmentedControl.Item";const mm=g.forwardRef(({value:t,defaultValue:a="",onChange:i,size:l="md",disabled:c=!1,fullWidth:u=!1,className:p,children:f,...m},x)=>{const[y,_]=g.useState(a),w=t!==void 0,$=w?t:y,N=g.useId(),j=g.useRef(null);g.useLayoutEffect(()=>{const L=j.current;if(!L)return;const S=L.querySelector('[aria-checked="true"]');S&&(L.style.setProperty("--sc-indicator-x",`${S.offsetLeft}px`),L.style.setProperty("--sc-indicator-w",`${S.offsetWidth}px`))},[$,l]);const R=L=>{w||_(L),i==null||i(L)};return r.jsx(pm.Provider,{value:{value:$,onChange:R,disabled:c,name:N},children:r.jsxs("div",{ref:L=>{j.current=L,typeof x=="function"?x(L):x&&(x.current=L)},role:"radiogroup",className:ee(vr.root,vr[l],u&&vr.fullWidth,p),...m,children:[r.jsx("span",{className:vr.indicator,"aria-hidden":"true"}),f]})})});mm.displayName="SegmentedControl";Object.assign(mm,{Item:fm});const l9="_root_fkv0x_6",c9="_sm_fkv0x_26",d9="_md_fkv0x_33",u9="_lg_fkv0x_40",h9="_dot_fkv0x_49",p9="_success_fkv0x_58",f9="_warning_fkv0x_65",m9="_error_fkv0x_72",g9="_info_fkv0x_79",v9="_neutral_fkv0x_86",y9="_pending_fkv0x_93",gs={root:l9,sm:c9,md:d9,lg:u9,dot:h9,success:p9,warning:f9,error:m9,info:g9,neutral:v9,pending:y9},qa=g.forwardRef(({status:t="neutral",size:a="md",dot:i=!0,className:l,children:c,...u},p)=>r.jsxs("span",{ref:p,className:ee(gs.root,gs[a],gs[t],l),...u,children:[i&&r.jsx("span",{className:gs.dot,"aria-hidden":"true"}),c]}));qa.displayName="StatusTag";const x9="_root_1m8t5_6",w9="_underline_1m8t5_15",_9="_background_1m8t5_21",b9="_underlineIndicator_1m8t5_26",k9="_md_1m8t5_43",C9="_lg_1m8t5_44",j9="_tab_1m8t5_42",S9="_tabSelected_1m8t5_77",N9="_tabIcon_1m8t5_99",R9="_tabLabel_1m8t5_111",L9="_tabBadge_1m8t5_116",$9="_tabLabelEditable_1m8t5_123",M9="_tabLabelInput_1m8t5_128",T9="_addTab_1m8t5_147",A9="_addTabIcon_1m8t5_160",Vt={root:x9,underline:w9,background:_9,underlineIndicator:b9,md:k9,lg:C9,tab:j9,tabSelected:S9,tabIcon:N9,tabLabel:R9,tabBadge:L9,tabLabelEditable:$9,tabLabelInput:M9,addTab:T9,addTabIcon:A9},gm=g.createContext(null);function vm(t){const a=g.useContext(gm);if(!a)throw new Error(`<${t}> must be rendered inside <Tabs>`);return a}const ym=g.forwardRef(({value:t,leadingIcon:a,trailingBadge:i,disabled:l,editable:c=!1,autoEdit:u=!1,onLabelChange:p,onClick:f,className:m,children:x,...y},_)=>{const{value:w,onChange:$,disabled:N,name:j}=vm("Tabs.Tab"),R=w===t,L=N||!!l,S=typeof x=="string"?x:"",[k,T]=g.useState(u&&c),[I,E]=g.useState(S),z=g.useRef(null);g.useEffect(()=>{if(k){const V=z.current;V&&(V.focus(),V.select())}},[k]),g.useEffect(()=>{u&&c&&!k&&(E(typeof x=="string"?x:""),T(!0))},[u,c]);const O=()=>{const V=I.trim();V&&V!==S&&(p==null||p(V)),T(!1)},U=()=>{E(S),T(!1)},Z=V=>{!c||L||(V.stopPropagation(),E(S),T(!0))},X=V=>{V.key==="Enter"?(V.preventDefault(),O()):V.key==="Escape"&&(V.preventDefault(),U())};return r.jsxs("button",{ref:_,type:"button",role:"tab","aria-selected":R,name:j,disabled:L,className:ee(Vt.tab,R&&Vt.tabSelected,m),onClick:V=>{k||(L||$(t),f==null||f(V))},...y,children:[a&&r.jsx("span",{className:ee(Vt.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),k?r.jsx("input",{ref:z,type:"text",value:I,onChange:V=>E(V.target.value),onKeyDown:X,onBlur:O,onClick:V=>V.stopPropagation(),className:Vt.tabLabelInput,"aria-label":"Tab name",size:Math.max(I.length,1)}):x!==void 0&&r.jsx("span",{className:ee(Vt.tabLabel,c&&Vt.tabLabelEditable),onDoubleClick:Z,children:x}),i&&!k&&r.jsx("span",{className:Vt.tabBadge,children:i})]})});ym.displayName="Tabs.Tab";const I9=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),xm=g.forwardRef(({className:t,onClick:a,"aria-label":i="Add tab",...l},c)=>{const{disabled:u}=vm("Tabs.AddTab");return r.jsx("button",{ref:c,type:"button","aria-label":i,disabled:u,className:ee(Vt.tab,Vt.addTab,t),onClick:a,...l,children:r.jsx("span",{className:ee(Vt.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(I9,{})})})});xm.displayName="Tabs.AddTab";const wm=g.forwardRef(({variant:t="underline",size:a="md",value:i,defaultValue:l="",onChange:c,disabled:u=!1,className:p,children:f,...m},x)=>{const[y,_]=g.useState(l),w=i!==void 0,$=w?i:y,N=g.useId(),j=g.useRef(null);g.useLayoutEffect(()=>{const L=j.current;if(!L||t!=="underline")return;const S=L.querySelector('[aria-selected="true"]');S&&(L.style.setProperty("--tab-indicator-x",`${S.offsetLeft}px`),L.style.setProperty("--tab-indicator-w",`${S.offsetWidth}px`))},[$,t]);const R=L=>{w||_(L),c==null||c(L)};return r.jsx(gm.Provider,{value:{value:$,onChange:R,disabled:u,variant:t,size:a,name:N},children:r.jsxs("div",{ref:L=>{j.current=L,typeof x=="function"?x(L):x&&(x.current=L)},role:"tablist",className:ee(Vt.root,Vt[t],Vt[a],p),...m,children:[t==="underline"&&r.jsx("span",{className:Vt.underlineIndicator,"aria-hidden":"true"}),f]})})});wm.displayName="Tabs";Object.assign(wm,{Tab:ym,AddTab:xm});const E9="_selectedBorder_1ypeg_7",P9="_selectedFill_1ypeg_12",o1={selectedBorder:E9,selectedFill:P9},z9=g.forwardRef(({selected:t=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:l,onClick:c,className:u,...p},f)=>{const m=y=>{l==null||l(!t),c==null||c(y)},x=t?i==="fill"?o1.selectedFill:o1.selectedBorder:void 0;return r.jsx(Te,{ref:f,variant:a,"aria-pressed":t,className:ee(x,u),onClick:m,...p})});z9.displayName="ToggleButton";const O9="_root_mcb75_6",D9="_disabled_mcb75_13",B9="_sm_mcb75_20",F9="_md_mcb75_31",W9="_lg_mcb75_42",H9="_track_mcb75_54",q9="_trackChecked_mcb75_90",U9="_thumb_mcb75_100",V9="_labelWrap_mcb75_117",G9="_label_mcb75_117",Y9="_description_mcb75_139",Un={root:O9,disabled:D9,sm:B9,md:F9,lg:W9,track:H9,trackChecked:q9,thumb:U9,labelWrap:V9,label:G9,description:Y9},Z9=g.forwardRef(({checked:t,defaultChecked:a=!1,onChange:i,disabled:l,size:c="md",label:u,description:p,id:f,name:m,value:x,className:y},_)=>{const w=g.useId(),$=f??w,N=`${$}-label`,j=t!==void 0,[R,L]=g.useState(a),S=j?t:R,k=()=>{if(l)return;const I=!S;j||L(I),i==null||i(I)},T=I=>{(I.key===" "||I.key==="Enter")&&(I.preventDefault(),k())};return r.jsxs("div",{className:ee(Un.root,Un[c],l&&Un.disabled,y),children:[r.jsx("button",{ref:_,type:"button",role:"switch",id:$,"aria-checked":S,"aria-labelledby":u?N:void 0,"aria-disabled":l||void 0,tabIndex:l?-1:0,disabled:l,name:m,value:x,className:ee(Un.track,S&&Un.trackChecked),"data-checked":S||void 0,"data-disabled":l||void 0,onClick:k,onKeyDown:T,children:r.jsx("span",{className:Un.thumb})}),(u||p)&&r.jsxs("div",{className:Un.labelWrap,children:[u&&r.jsx("label",{id:N,htmlFor:$,className:Un.label,children:u}),p&&r.jsx("span",{className:Un.description,children:p})]})]})});Z9.displayName="Switch";const K9="_root_104n4_5",Q9="_disabled_104n4_11",X9="_sm_104n4_17",J9="_md_104n4_25",e7="_lg_104n4_33",t7="_controlWrap_104n4_41",n7="_input_104n4_50",r7="_ring_104n4_65",o7="_ringChecked_104n4_90",a7="_ringError_104n4_94",i7="_dot_104n4_104",s7="_labelWrap_104n4_112",l7="_label_104n4_112",c7="_error_104n4_130",d7="_required_104n4_132",u7="_description_104n4_137",qt={root:K9,disabled:Q9,sm:X9,md:J9,lg:e7,controlWrap:t7,input:n7,ring:r7,ringChecked:o7,ringError:a7,dot:i7,labelWrap:s7,label:l7,error:c7,required:d7,description:u7},h7=g.forwardRef(({value:t,checked:a,onChange:i,disabled:l,error:c,size:u="md",label:p,description:f,id:m,name:x,required:y,className:_},w)=>{const $=g.useId(),N=m??$;return r.jsxs("div",{className:ee(qt.root,qt[u],l&&qt.disabled,c&&qt.error,_),children:[r.jsxs("div",{className:qt.controlWrap,children:[r.jsx("input",{ref:w,type:"radio",id:N,name:x,value:t,checked:a,disabled:l,required:y,"aria-invalid":c||void 0,onChange:()=>i==null?void 0:i(t),className:qt.input}),r.jsx("span",{className:ee(qt.ring,a&&qt.ringChecked,c&&qt.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:qt.dot})})]}),(p||f)&&r.jsxs("div",{className:qt.labelWrap,children:[p&&r.jsxs("label",{htmlFor:N,className:qt.label,children:[p,y&&r.jsx("span",{className:qt.required,"aria-hidden":"true",children:" *"})]}),f&&r.jsx("span",{className:qt.description,children:f})]})]})});h7.displayName="Radio";const p7="_table_1ad04_8",f7="_sm_1ad04_16",m7="_row_1ad04_30",g7="_head_1ad04_47",v7="_headLabel_1ad04_82",y7="_sortBtn_1ad04_96",x7="_sortIcon_1ad04_119",w7="_cell_1ad04_142",_7="_cellText_1ad04_175",b7="_cellStack_1ad04_203",k7="_cellStackPrimary_1ad04_210",C7="_cellStackSecondary_1ad04_221",j7="_cellActions_1ad04_233",S7="_cellControl_1ad04_240",N7="_addCell_1ad04_251",R7="_addRowCell_1ad04_264",L7="_addRowLabel_1ad04_276",_t={table:p7,sm:f7,row:m7,head:g7,headLabel:v7,sortBtn:y7,sortIcon:x7,cell:w7,cellText:_7,cellStack:b7,cellStackPrimary:k7,cellStackSecondary:C7,cellActions:j7,cellControl:S7,addCell:N7,addRowCell:R7,addRowLabel:L7},_m=g.createContext({addColumn:!1,addRow:!1}),bm=()=>g.useContext(_m),$7=g.forwardRef(({size:t="md",interaction:a="row",addColumn:i=!1,addRow:l=!1,onAddColumn:c,onAddRow:u,className:p,children:f,...m},x)=>{const y=g.useMemo(()=>({addColumn:i,addRow:l,onAddColumn:c,onAddRow:u}),[i,l,c,u]);return r.jsx(_m.Provider,{value:y,children:r.jsx("table",{ref:x,className:ee(_t.table,t==="sm"&&_t.sm,p),"data-interaction":a,...m,children:f})})});$7.displayName="Table";const km=g.forwardRef(({align:t="left",sort:a,onSort:i,hoverable:l,selected:c,className:u,children:p,...f},m)=>{const x=a!==void 0;return r.jsx("th",{ref:m,className:ee(_t.head,u),"data-align":t!=="left"?t:void 0,"data-hoverable":!x&&l?!0:void 0,"data-selected":c||void 0,"aria-selected":c,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":x?"none":void 0,...f,children:x?r.jsxs("button",{type:"button",className:_t.sortBtn,onClick:i,"aria-label":typeof p=="string"?`Sort by ${p}`:void 0,children:[p,r.jsx("span",{className:_t.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(kr,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:_t.headLabel,children:p})})});km.displayName="TableHead";const M7=g.forwardRef(({children:t,...a},i)=>{const{addColumn:l,onAddColumn:c}=bm(),u=l?g.Children.map(t,(p,f)=>{if(!g.isValidElement(p)||f!==0)return p;const m=g.Children.toArray(p.props.children);return g.cloneElement(p,{},[...m,r.jsx(km,{hoverable:!0,onClick:c,className:_t.addCell,"aria-label":"Add column",children:r.jsx(Za,{size:14,strokeWidth:2})},"__add_col_head")])}):t;return r.jsx("thead",{ref:i,...a,children:u})});M7.displayName="TableHeader";const Cm=g.forwardRef(({hoverable:t=!0,selected:a,className:i,children:l,...c},u)=>r.jsx("tr",{ref:u,className:ee(_t.row,i),"data-hoverable":t||void 0,"data-selected":a||void 0,"aria-selected":a,...c,children:l}));Cm.displayName="TableRow";const md=g.forwardRef(({align:t="left",compact:a,hoverable:i=!0,selected:l,className:c,children:u,...p},f)=>r.jsx("td",{ref:f,className:ee(_t.cell,c),"data-align":t!=="left"?t:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":l||void 0,"aria-selected":l,...p,children:u}));md.displayName="TableCell";const T7=g.forwardRef(({children:t,...a},i)=>{const{addColumn:l,addRow:c,onAddRow:u}=bm(),p=l?g.Children.map(t,f=>{if(!g.isValidElement(f))return f;const m=g.Children.toArray(f.props.children);return g.cloneElement(f,{},[...m,r.jsx(md,{"aria-hidden":"true",className:_t.addCell},"__add_col_pad")])}):t;return r.jsxs("tbody",{ref:i,...a,children:[p,c&&r.jsx(Cm,{hoverable:!1,children:r.jsx(md,{colSpan:999,onClick:u,className:_t.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:_t.addRowLabel,children:[r.jsx(Za,{size:14,strokeWidth:2}),"Add row"]})})})]})});T7.displayName="TableBody";const A7=g.forwardRef(({variant:t="primary",size:a="md",wrap:i,className:l,children:c,...u},p)=>r.jsx("span",{ref:p,className:ee(_t.cellText,l),"data-variant":t!=="primary"?t:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...u,children:c}));A7.displayName="CellText";const I7=g.forwardRef(({primary:t,secondary:a,className:i,...l},c)=>r.jsxs("div",{ref:c,className:ee(_t.cellStack,i),...l,children:[r.jsx("span",{className:_t.cellStackPrimary,children:t}),a&&r.jsx("span",{className:_t.cellStackSecondary,children:a})]}));I7.displayName="CellStack";const E7=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(wr,{ref:i,size:t,...a}));E7.displayName="CellTag";const P7=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(qa,{ref:i,size:t,...a}));P7.displayName="CellStatusTag";const z7=g.forwardRef(({className:t,children:a,...i},l)=>r.jsx("div",{ref:l,className:ee(_t.cellActions,t),...i,children:a}));z7.displayName="CellActions";const O7=g.forwardRef(({className:t,children:a,...i},l)=>r.jsx("div",{ref:l,className:ee(_t.cellControl,t),...i,children:a}));O7.displayName="CellControl";const D7="_root_1afcs_8",B7="_secondary_1afcs_23",F7="_header_1afcs_28",W7="_headerText_1afcs_36",H7="_title_1afcs_43",q7="_subtitle_1afcs_52",U7="_action_1afcs_61",V7="_hero_1afcs_66",G7="_heroValue_1afcs_74",Y7="_heroCaption_1afcs_83",Z7="_heroChange_1afcs_89",K7="_body_1afcs_95",Q7="_legend_1afcs_103",Jt={root:D7,secondary:B7,header:F7,headerText:W7,title:H7,subtitle:q7,action:U7,hero:V7,heroValue:G7,heroCaption:Y7,heroChange:Z7,body:K7,legend:Q7},X7=g.forwardRef(({title:t,subtitle:a,action:i,value:l,valueChange:c,valueCaption:u,legend:p,secondary:f,children:m,className:x,...y},_)=>r.jsxs("div",{ref:_,className:ee(Jt.root,f&&Jt.secondary,x),...y,children:[r.jsxs("div",{className:Jt.header,children:[r.jsxs("div",{className:Jt.headerText,children:[r.jsx("h3",{className:Jt.title,children:t}),a&&r.jsx("p",{className:Jt.subtitle,children:a})]}),i&&r.jsx("div",{className:Jt.action,children:i})]}),(l!==void 0||c||u)&&r.jsxs("div",{className:Jt.hero,children:[l!==void 0&&r.jsx("span",{className:Jt.heroValue,children:l}),c&&r.jsx("span",{className:Jt.heroChange,children:c}),u&&r.jsx("span",{className:Jt.heroCaption,children:u})]}),r.jsx("div",{className:Jt.body,children:m}),p&&r.jsx("div",{className:Jt.legend,children:p})]}));X7.displayName="ChartCard";const J7="_root_je8nq_7",e_="_item_je8nq_17",t_="_swatch_je8nq_23",n_="_label_je8nq_29",r_="_bookend_je8nq_33",Lo={root:J7,item:e_,swatch:t_,label:n_,bookend:r_},jm=g.forwardRef(({items:t,before:a,after:i,variant:l="square",swatchSize:c=12,className:u,...p},f)=>r.jsxs("div",{ref:f,className:ee(Lo.root,u),...p,children:[a&&r.jsx("span",{className:Lo.bookend,children:a}),t.map((m,x)=>{const y=l==="line"?{width:c+4,height:2,background:m.color,borderRadius:1}:l==="dot"?{width:c-2,height:c-2,background:m.color,borderRadius:"50%"}:{width:c,height:c,background:m.color};return r.jsxs("span",{className:Lo.item,children:[r.jsx("span",{className:Lo.swatch,style:y,"aria-hidden":"true"}),m.label!==void 0&&r.jsx("span",{className:Lo.label,children:m.label})]},x)}),i&&r.jsx("span",{className:Lo.bookend,children:i})]}));jm.displayName="ChartLegend";const o_="_root_igkx4_5",a_="_svgWrap_igkx4_13",i_="_svg_igkx4_13",s_="_gridLine_igkx4_23",l_="_axisLabel_igkx4_28",c_="_legendWrap_igkx4_43",d_="_legendItem_igkx4_51",u_="_legendDot_igkx4_57",h_="_legendLabel_igkx4_64",p_="_tooltip_igkx4_71",f_="_tooltipLabel_igkx4_85",m_="_tooltipRow_igkx4_95",g_="_tooltipDot_igkx4_101",v_="_tooltipSeries_igkx4_108",y_="_tooltipValue_igkx4_115",Le={root:o_,svgWrap:a_,svg:i_,gridLine:s_,axisLabel:l_,legendWrap:c_,legendItem:d_,legendDot:u_,legendLabel:h_,tooltip:p_,tooltipLabel:f_,tooltipRow:m_,tooltipDot:g_,tooltipSeries:v_,tooltipValue:y_},x_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Gc(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function $o(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}const w_=g.forwardRef(({series:t,labels:a,variant:i="grouped",height:l=260,showGrid:c=!0,showLegend:u=!0,yUnit:p="",barRadius:f=2,colors:m,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:_,stackStyle:w="gradient-each",capColor:$,className:N,...j},R)=>{var K,re,fe,we;const L=m&&m.length>0?m:x_,S=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[k,T]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),I=g.useRef(null),[E,z]=g.useState(540);g.useEffect(()=>{const he=I.current;if(!he)return;const ve=new ResizeObserver(Se=>{var Be;const Ie=(Be=Se[0])==null?void 0:Be.contentRect.width;Ie>0&&z(Math.floor(Ie))});ve.observe(he);const je=Math.floor(he.getBoundingClientRect().width);return je>0&&z(je),()=>ve.disconnect()},[]);const O=44,U=0,Z=20,X=20,V=E,te=l,ie=V-O-U,ce=te-Z-X,se=5,J=t.map((he,ve)=>he.color??L[ve%L.length]);let W=0;i==="stacked"?a.forEach((he,ve)=>{const je=t.reduce((Se,Ie)=>Se+(Ie.data[ve]??0),0);je>W&&(W=je)}):i==="horizontal"?W=Math.max(...((K=t[0])==null?void 0:K.data)??[0]):t.forEach(he=>he.data.forEach(ve=>{ve>W&&(W=ve)}));const P=Gc(W),D=Array.from({length:se+1},(he,ve)=>P*(ve/se)).reverse(),C=he=>X+ce-he/P*ce,A=ie/a.length,Q=3,ne=i==="grouped"?Math.max(4,(A-Q*(t.length+1))/t.length):A,G=()=>T(he=>({...he,visible:!1})),ue=g.useCallback(he=>{const ve=he.currentTarget.getBoundingClientRect(),je=he.clientX-ve.left,Se=Math.floor((je-O)/A);if(Se<0||Se>=a.length){G();return}const Ie=t.map((Be,Fe)=>({color:J[Fe],series:Be.label,value:Be.data[Se]??0}));T({visible:!0,x:he.clientX+12,y:he.clientY-8,label:a[Se],items:Ie})},[t,a,A,J,O]);if(i==="gradient"){const he=((re=t[0])==null?void 0:re.data)??[],ve=((fe=t[0])==null?void 0:fe.label)??"",je=44,Se=0,Ie=20,Be=20,Fe=Math.max(V-je-Se,1),Ve=te-Ie-Be,Ue=Math.max(0,...he),rt=Ue>0?Gc(Ue):10,Ze=5,Mt=Array.from({length:Ze+1},(Ne,Je)=>rt*Je/Ze),We=Ne=>Ie+Ve-Ne/rt*Ve,Tt=Fe/Math.max(1,he.length),bt=Ne=>je+Tt*Ne,kn=Ne=>je+Tt*(Ne+1),Cn=Ne=>je+Tt*(Ne+.5),Cr=he.length===0?"":he.map((Ne,Je)=>{const lt=We(Ne);return`M ${bt(Je)} ${lt} L ${kn(Je)} ${lt}`}).join(" "),Zo=[];he.forEach((Ne,Je)=>{if(Ne<=0)return;const lt=We(Ne);Zo.push({x:bt(Je),y:lt,width:Math.max(kn(Je)-bt(Je),0),height:Ie+Ve-lt})});const jr=Math.max(1,Math.ceil(45/Tt)),Xs=a.length-1,ni=_??(Ne=>`${$o(Ne)}${p}`);return r.jsxs("div",{ref:R,className:ee(Le.root,N),...j,children:[r.jsx("div",{ref:I,className:Le.svgWrap,children:r.jsxs("svg",{width:V,height:te,viewBox:`0 0 ${V} ${te}`,className:Le.svg,onMouseLeave:G,onMouseMove:Ne=>{const Je=Ne.currentTarget.getBoundingClientRect(),lt=Ne.clientX-Je.left,At=Math.floor((lt-je)/Tt);if(At<0||At>=he.length){G();return}T({visible:!0,x:Ne.clientX+12,y:Ne.clientY-8,label:a[At]??"",items:[{color:y,series:ve,value:he[At]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${S}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x}),r.jsx("stop",{offset:"100%",stopColor:y})]}),r.jsxs("linearGradient",{id:`${S}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),Mt.map((Ne,Je)=>r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,x2:V-Se,y1:We(Ne),y2:We(Ne),className:Le.gridLine}),r.jsxs("text",{x:0,y:We(Ne)-6,className:Le.axisLabel,textAnchor:"start",children:[$o(Ne),p]})]},`t-${Je}`)),Zo.map((Ne,Je)=>r.jsx("rect",{x:Ne.x,y:Ne.y,width:Ne.width,height:Ne.height,fill:`url(#${S}-fill)`},`b-${Je}`)),Cr&&r.jsx("path",{d:Cr,fill:"none",stroke:`url(#${S}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),k.visible&&(()=>{var Sr;const Ne=(Sr=I.current)==null?void 0:Sr.getBoundingClientRect();if(!Ne)return null;const Je=k.x-12-Ne.left,lt=Math.floor((Je-je)/Tt);if(lt<0||lt>=he.length)return null;const At=he[lt]??0;return At<=0?null:r.jsx("circle",{cx:Cn(lt),cy:We(At),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((Ne,Je)=>{const lt=Je===0,At=Je===Xs;if(!(lt||At)&&Je%jr!==0)return null;const Ko=lt?je:At?V-Se:Cn(Je),Qo=lt?"start":At?"end":"middle";return r.jsx("text",{x:Ko,y:te-Be+18,className:Le.axisLabel,textAnchor:Qo,children:Ne},`xl-${Je}`)})]})}),k.visible&&k.items.length>0&&r.jsxs("div",{className:Le.tooltip,style:{left:k.x,top:k.y},children:[r.jsx("div",{className:Le.tooltipLabel,children:k.label}),k.items.map(Ne=>r.jsxs("div",{className:Le.tooltipRow,children:[r.jsx("span",{className:Le.tooltipDot,style:{background:Ne.color}}),r.jsx("span",{className:Le.tooltipSeries,children:Ne.series}),r.jsx("span",{className:Le.tooltipValue,children:ni(Ne.value)})]},Ne.series))]})]})}if(i==="horizontal"){const he=((we=t[0])==null?void 0:we.data)??[],ve=Gc(Math.max(...he,1)),je=28,Se=10,Ie=120,Fe=V-Ie-44,Ve=a.length*(je+Se)+Se;return r.jsxs("div",{ref:R,className:ee(Le.root,N),...j,children:[r.jsx("div",{ref:I,className:Le.svgWrap,children:r.jsx("svg",{width:V,height:Ve,viewBox:`0 0 ${V} ${Ve}`,className:Le.svg,onMouseLeave:G,onMouseMove:Ue=>{var We;const rt=Ue.currentTarget.getBoundingClientRect(),Ze=Ue.clientY-rt.top,Mt=Math.floor(Ze/(je+Se));if(Mt<0||Mt>=a.length){G();return}T({visible:!0,x:Ue.clientX+12,y:Ue.clientY-8,label:a[Mt],items:[{color:J[0],series:((We=t[0])==null?void 0:We.label)??"",value:he[Mt]??0}]})},children:a.map((Ue,rt)=>{const Ze=Se+rt*(je+Se),Mt=he[rt]??0,We=Mt/ve*Fe;return r.jsxs("g",{children:[r.jsx("text",{x:Ie-8,y:Ze+je/2+4,className:Le.axisLabel,textAnchor:"end",children:Ue}),r.jsx("rect",{x:Ie,y:Ze,width:We,height:je,rx:f,fill:J[0]}),r.jsxs("text",{x:Ie+We+6,y:Ze+je/2+4,className:Le.axisLabel,textAnchor:"start",children:[$o(Mt),p]})]},rt)})})}),k.visible&&r.jsxs("div",{className:Le.tooltip,style:{left:k.x,top:k.y},children:[r.jsx("div",{className:Le.tooltipLabel,children:k.label}),k.items.map(Ue=>r.jsxs("div",{className:Le.tooltipRow,children:[r.jsx("span",{className:Le.tooltipDot,style:{background:Ue.color}}),r.jsx("span",{className:Le.tooltipSeries,children:Ue.series}),r.jsxs("span",{className:Le.tooltipValue,children:[$o(Ue.value),p]})]},Ue.series))]})]})}return r.jsxs("div",{ref:R,className:ee(Le.root,N),...j,children:[r.jsx("div",{ref:I,className:Le.svgWrap,children:r.jsxs("svg",{width:V,height:te,viewBox:`0 0 ${V} ${te}`,className:Le.svg,onMouseMove:ue,onMouseLeave:G,children:[r.jsx("defs",{children:J.flatMap((he,ve)=>[r.jsxs("linearGradient",{id:`${S}-fill-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:he,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:he,stopOpacity:"0"})]},`soft-${ve}`),r.jsxs("linearGradient",{id:`${S}-fill-strong-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:he,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:he,stopOpacity:"0"})]},`strong-${ve}`)])}),D.map(he=>{const ve=C(he);return r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,y1:ve,x2:V-U,y2:ve,className:Le.gridLine}),r.jsxs("text",{x:0,y:ve-6,className:Le.axisLabel,textAnchor:"start",children:[$o(he),p]})]},he)}),a.map((he,ve)=>{const je=O+ve*A;if(i==="stacked"){let Be=0;const Fe=t.map((We,Tt)=>{const bt=We.data[ve]??0,kn=bt/P*ce,Cn=C(Be+bt);return Be+=bt,{si:Tt,value:bt,barH:kn,y:Cn}}),Ve=je+(A-ne)/2,Ue=Fe.filter(We=>We.value>0),rt=Ue.length>0?Ue[0].si:-1,Ze=Ue.length>0?Ue[Ue.length-1]:null,Mt=$??(Ze?J[Ze.si]:"transparent");return r.jsxs("g",{children:[Fe.map(({si:We,value:Tt,barH:bt,y:kn})=>{if(Tt<=0)return null;if(w==="mono-scale"){const Cn=We===rt;return r.jsx("rect",{x:Ve,y:kn,width:ne,height:bt,fill:Cn?`url(#${S}-fill-strong-${We})`:J[We]},`fill-${We}`)}return r.jsx("rect",{x:Ve,y:kn,width:ne,height:bt,fill:`url(#${S}-fill-${We})`},`fill-${We}`)}),w==="mono-scale"?Ze&&r.jsx("line",{x1:Ve,x2:Ve+ne,y1:Ze.y,y2:Ze.y,stroke:Mt,strokeWidth:2,strokeLinecap:"butt"}):Fe.map(({si:We,value:Tt,y:bt})=>Tt>0?r.jsx("line",{x1:Ve,x2:Ve+ne,y1:bt,y2:bt,stroke:J[We],strokeWidth:2,strokeLinecap:"butt"},`cap-${We}`):null)]},ve)}const Se=t.length*ne+(t.length-1)*Q,Ie=je+(A-Se)/2;return r.jsx("g",{children:t.map((Be,Fe)=>{const Ve=Be.data[ve]??0;if(Ve<=0)return null;const Ue=Ve/P*ce,rt=Ie+Fe*(ne+Q),Ze=C(Ve);return r.jsxs("g",{children:[r.jsx("rect",{x:rt,y:Ze,width:ne,height:Ue,fill:`url(#${S}-fill-${Fe})`}),r.jsx("line",{x1:rt,x2:rt+ne,y1:Ze,y2:Ze,stroke:J[Fe],strokeWidth:2,strokeLinecap:"butt"})]},Fe)})},ve)}),(()=>{const ve=Math.max(1,Math.ceil(45/A)),je=a.length-1;return a.map((Se,Ie)=>{const Be=Ie===0,Fe=Ie===je;if(!(Be||Fe)&&Ie%ve!==0)return null;const Ue=Be?O:Fe?V-U:O+A*(Ie+.5),rt=Be?"start":Fe?"end":"middle";return r.jsx("text",{x:Ue,y:te-Z+18,className:Le.axisLabel,textAnchor:rt,children:Se},`xl-${Ie}`)})})()]})}),u&&t.length>1&&r.jsx("div",{className:Le.legendWrap,children:t.map((he,ve)=>r.jsxs("div",{className:Le.legendItem,children:[r.jsx("span",{className:Le.legendDot,style:{background:J[ve]}}),r.jsx("span",{className:Le.legendLabel,children:he.label})]},he.label))}),k.visible&&r.jsxs("div",{className:Le.tooltip,style:{left:k.x,top:k.y},children:[r.jsx("div",{className:Le.tooltipLabel,children:k.label}),k.items.map(he=>r.jsxs("div",{className:Le.tooltipRow,children:[r.jsx("span",{className:Le.tooltipDot,style:{background:he.color}}),r.jsx("span",{className:Le.tooltipSeries,children:he.series}),r.jsxs("span",{className:Le.tooltipValue,children:[$o(he.value),p]})]},he.series))]})]})});w_.displayName="BarChart";const __="_root_1crij_5",b_="_svgWrap_1crij_13",k_="_svg_1crij_13",C_="_gridLine_1crij_23",j_="_axisLabelY_1crij_35 _axisLabel_1crij_28",S_="_axisLabelX_1crij_39 _axisLabel_1crij_28",N_="_legendWrap_1crij_51",R_="_tooltip_1crij_76",L_="_tooltipLabel_1crij_95",$_="_tooltipRow_1crij_105",M_="_tooltipDot_1crij_111",T_="_tooltipSeries_1crij_118",A_="_tooltipValue_1crij_125",en={root:__,svgWrap:b_,svg:k_,gridLine:C_,axisLabelY:j_,axisLabelX:S_,legendWrap:N_,tooltip:R_,tooltipLabel:L_,tooltipRow:$_,tooltipDot:M_,tooltipSeries:T_,tooltipValue:A_};function I_(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function a1(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}function E_(t,a=.35){if(t.length<2)return"";let i=`M ${t[0][0]} ${t[0][1]}`;for(let l=0;l<t.length-1;l++){const[c,u]=t[l],[p,f]=t[l+1],m=(p-c)*a;i+=` C ${c+m} ${u}, ${p-m} ${f}, ${p} ${f}`}return i}const P_=g.forwardRef(({series:t,labels:a,height:i=260,showGrid:l=!0,showLegend:c=!0,gradientFrom:u="#8c4fe2",gradientTo:p="#446cff",yUnit:f="",yTickCount:m=5,className:x,...y},_)=>{const[w,$]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),N=`line-grad-${Math.random().toString(36).slice(2,9)}`,j=g.useRef(null),[R,L]=g.useState(540);g.useEffect(()=>{const P=j.current;if(!P)return;const D=new ResizeObserver(A=>{var ne;const Q=(ne=A[0])==null?void 0:ne.contentRect.width;Q>0&&L(Math.floor(Q))});D.observe(P);const C=Math.floor(P.getBoundingClientRect().width);return C>0&&L(C),()=>D.disconnect()},[]);const S=44,k=20,T=20,I=R,E=i,z=I-S,O=E-k-T,U=`url(#${N}-stroke)`,Z=P=>P.color??U,X=t.flatMap(P=>P.data),V=I_(Math.max(...X,1)),te=Array.from({length:m+1},(P,D)=>V*(D/m)).reverse(),ie=P=>T+O-P/V*O,ce=P=>a.length>1?S+P/(a.length-1)*z:S+z/2,se=P=>P.map((D,C)=>[ce(C),ie(D)]),J=()=>$(P=>({...P,visible:!1})),W=g.useCallback(P=>{const D=P.currentTarget.getBoundingClientRect(),A=P.clientX-D.left-S,Q=z/Math.max(a.length-1,1),ne=Math.round(A/Q),G=Math.max(0,Math.min(ne,a.length-1)),ue=t.map(K=>({color:K.color??p,series:K.label,value:K.data[G]??0}));$({visible:!0,index:G,x:P.clientX+12,y:P.clientY-8,label:a[G],items:ue})},[t,a,p,z,S]);return r.jsxs("div",{ref:_,className:ee(en.root,x),...y,children:[r.jsx("div",{ref:j,className:en.svgWrap,children:r.jsxs("svg",{width:I,height:E,viewBox:`0 0 ${I} ${E}`,className:en.svg,onMouseMove:W,onMouseLeave:J,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${N}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:u}),r.jsx("stop",{offset:"100%",stopColor:p})]}),r.jsxs("linearGradient",{id:`${N}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:p,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:p}),r.jsx("stop",{offset:"100%",stopColor:p,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${N}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${N}-clip`,children:r.jsx("rect",{x:S,y:T,width:z,height:O,rx:6,ry:6})})]}),te.map(P=>{const D=ie(P);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:D,x2:I,y2:D,className:en.gridLine}),r.jsxs("text",{x:0,y:D-6,className:en.axisLabelY,textAnchor:"start",children:[a1(P),f]})]},P)}),r.jsx("g",{clipPath:`url(#${N}-clip)`,children:t.map((P,D)=>{const C=se(P.data),A=E_(C);return r.jsx("path",{d:A,fill:"none",stroke:Z(P),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},D)})}),(()=>{const P=w.index>=0?w.index:0,D=ce(P),C=w.visible&&w.index>=0,A="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:C?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${D}px)`,transition:A},children:[r.jsx("line",{x1:0,x2:0,y1:T,y2:T+O,stroke:p,strokeWidth:2,strokeLinecap:"round",opacity:.5}),t.map((Q,ne)=>{const G=Q.data[P]??0,ue=ie(G),K=Q.color??p;return r.jsx("g",{style:{transform:`translateY(${ue}px)`,transition:A},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:K,filter:`url(#${N}-pin-shadow)`})},ne)})]})})})(),(()=>{const D=a.length>1?z/(a.length-1):z,C=Math.max(1,Math.ceil(45/Math.max(D,1))),A=a.length-1;return a.map((Q,ne)=>{const G=ne===0,ue=ne===A;if(!(G||ue)&&ne%C!==0)return null;const re=G?S:ue?I:ce(ne),fe=G?"start":ue?"end":"middle";return r.jsx("text",{x:re,y:E-k+14,className:en.axisLabelX,textAnchor:fe,children:Q},Q)})})()]})}),c&&t.length>0&&r.jsx("div",{className:en.legendWrap,children:r.jsx(jm,{variant:"line",items:t.map(P=>({color:P.color??p,label:P.label}))})}),w.visible&&r.jsxs("div",{className:en.tooltip,style:{left:w.x,top:w.y},children:[r.jsx("div",{className:en.tooltipLabel,children:w.label}),w.items.map(P=>r.jsxs("div",{className:en.tooltipRow,children:[r.jsx("span",{className:en.tooltipDot,style:{background:P.color}}),r.jsx("span",{className:en.tooltipSeries,children:P.series}),r.jsxs("span",{className:en.tooltipValue,children:[a1(P.value),f]})]},P.series))]})]})});P_.displayName="LineChart";const z_="_root_3tq2n_5",O_="_chartWrap_3tq2n_14",D_="_svg_3tq2n_18",B_="_centerText_3tq2n_23",F_="_statLegend_3tq2n_31",W_="_statItem_3tq2n_37",H_="_statBar_3tq2n_44",q_="_statText_3tq2n_50",U_="_statValue_3tq2n_56",V_="_statLabel_3tq2n_65",G_="_listLegend_3tq2n_72",Y_="_legendItem_3tq2n_79",Z_="_legendDot_3tq2n_85",K_="_legendLabel_3tq2n_92",Q_="_legendValue_3tq2n_99",X_="_tooltip_3tq2n_107",J_="_tooltipLabel_3tq2n_118",eb="_tooltipValue_3tq2n_124",yt={root:z_,chartWrap:O_,svg:D_,centerText:B_,statLegend:F_,statItem:W_,statBar:H_,statText:q_,statValue:U_,statLabel:V_,listLegend:G_,legendItem:Y_,legendDot:Z_,legendLabel:K_,legendValue:Q_,tooltip:X_,tooltipLabel:J_,tooltipValue:eb},i1=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],tb=g.forwardRef(({segments:t,innerRadius:a=60,size:i=200,showLegend:l=!0,legendVariant:c="list",unit:u="%",centerLabel:p,className:f,...m},x)=>{const[y,_]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),w=t.map((I,E)=>I.color??i1[E%i1.length]),$=t.reduce((I,E)=>I+E.value,0),N=i/2,j=i/2,R=i*.15,L=(i-R)/2-2,S=2*Math.PI*L;let k=-S/4;const T=t.map((I,E)=>{const O=($>0?I.value/$:0)*S,U=`${O} ${S-O}`,Z=-k;return k+=O,{dashArray:U,dashOffset:Z,color:w[E],...I}});return r.jsxs("div",{ref:x,className:ee(yt.root,f),...m,children:[r.jsx("div",{className:yt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:yt.svg,children:[r.jsx("circle",{cx:N,cy:j,r:L,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:R}),T.map((I,E)=>r.jsx("circle",{cx:N,cy:j,r:L,fill:"none",stroke:I.color,strokeWidth:R,strokeDasharray:I.dashArray,strokeDashoffset:I.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:z=>{const O=$>0?Math.round(I.value/$*100):0;_({visible:!0,x:z.clientX+12,y:z.clientY-8,label:I.label,value:`${O}${u}`})},onMouseLeave:()=>_(z=>({...z,visible:!1}))},E)),p&&a>0&&r.jsx("text",{x:N,y:j+6,textAnchor:"middle",className:yt.centerText,children:p})]})}),l&&c==="stat"&&r.jsx("div",{className:yt.statLegend,children:t.map((I,E)=>{const z=$>0?Math.round(I.value/$*100):0;return r.jsxs("div",{className:yt.statItem,children:[r.jsx("span",{className:yt.statBar,style:{background:w[E]}}),r.jsxs("div",{className:yt.statText,children:[r.jsxs("span",{className:yt.statValue,children:[z,u]}),r.jsx("span",{className:yt.statLabel,children:I.label})]})]},I.label)})}),l&&c==="list"&&r.jsx("div",{className:yt.listLegend,children:t.map((I,E)=>{const z=$>0?Math.round(I.value/$*100):0;return r.jsxs("div",{className:yt.legendItem,children:[r.jsx("span",{className:yt.legendDot,style:{background:w[E]}}),r.jsx("span",{className:yt.legendLabel,children:I.label}),r.jsxs("span",{className:yt.legendValue,children:[z,u]})]},I.label)})}),y.visible&&r.jsxs("div",{className:yt.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("div",{className:yt.tooltipLabel,children:y.label}),r.jsx("div",{className:yt.tooltipValue,children:y.value})]})]})});tb.displayName="DonutChart";const nb="_root_bqpf6_5",rb="_svgWrap_bqpf6_10",ob="_svg_bqpf6_10",ab="_axisLabel_bqpf6_19",ib="_tooltip_bqpf6_25",Mo={root:nb,svgWrap:rb,svg:ob,axisLabel:ab,tooltip:ib};function sb(t){return t<.35?"var(--Alloy-green-100)":t<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const lb=g.forwardRef(({cells:t,rows:a,cols:i,colorScale:l=sb,cellRadius:c=4,cellGap:u=4,showTooltip:p=!0,className:f,...m},x)=>{const[y,_]=g.useState({visible:!1,x:0,y:0,content:""}),w=g.useRef(null),[$,N]=g.useState(540);g.useEffect(()=>{const E=w.current;if(!E)return;const z=new ResizeObserver(U=>{var X;const Z=(X=U[0])==null?void 0:X.contentRect.width;Z>0&&N(Math.floor(Z))});z.observe(E);const O=Math.floor(E.getBoundingClientRect().width);return O>0&&N(O),()=>z.disconnect()},[]);const j=32,R=16,L=$,S=L-j-u,k=Math.max(4,(S-(i.length-1)*u)/i.length),T=a.length*(R+u)+u+24,I=new Map;return t.forEach(E=>I.set(`${E.row}__${E.col}`,E)),r.jsxs("div",{ref:x,className:ee(Mo.root,f),...m,children:[r.jsx("div",{ref:w,className:Mo.svgWrap,children:r.jsxs("svg",{width:L,height:T,viewBox:`0 0 ${L} ${T}`,className:Mo.svg,onMouseLeave:()=>_(E=>({...E,visible:!1})),children:[i.map((E,z)=>{const O=j+u+z*(k+u)+k/2;return r.jsx("text",{x:O,y:12,className:Mo.axisLabel,textAnchor:"middle",children:E},E)}),a.map((E,z)=>{const O=24+z*(R+u);return r.jsxs("g",{children:[r.jsx("text",{x:j-4,y:O+R/2+4,className:Mo.axisLabel,textAnchor:"end",children:E}),i.map((U,Z)=>{const X=I.get(`${E}__${U}`),V=(X==null?void 0:X.value)??0,te=l(V),ie=j+u+Z*(k+u);return r.jsx("rect",{x:ie,y:O,width:k,height:R,rx:c,fill:te,style:{cursor:"pointer"},onMouseEnter:ce=>{if(!p)return;const se=(X==null?void 0:X.label)??`${E} / ${U}: ${Math.round(V*100)}%`;_({visible:!0,x:ce.clientX+12,y:ce.clientY-8,content:se})},onMouseLeave:()=>_(ce=>({...ce,visible:!1}))},U)})]},E)})]})}),y.visible&&r.jsx("div",{className:Mo.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});lb.displayName="HeatMap";const cb="_root_18572_6",db="_gridWrap_18572_14",ub="_grid_18572_14",hb="_cell_18572_27",pb="_legend_18572_33",fb="_legendSquare_18572_43",mb="_tooltip_18572_49",mr={root:cb,gridWrap:db,grid:ub,cell:hb,legend:pb,legendSquare:fb,tooltip:mb},gb=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function vb(t,a){if(t<=0)return 0;const i=t/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const yb=g.forwardRef(({days:t,levelColors:a=gb,cellSize:i=14,cellGap:l=3,cellRadius:c=2,fillWidth:u=!1,showLegend:p=!0,maxCount:f,formatTooltip:m,ariaLabel:x,className:y,..._},w)=>{const[$,N]=g.useState({visible:!1,x:0,y:0,content:""}),j=f??Math.max(1,...t.map(k=>k.count)),R=[];for(let k=0;k<t.length;k+=7)R.push(t.slice(k,k+7));const L=u?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${R.length}, minmax(0, 1fr))`,gap:`${l}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${l}px`},S=u?"100%":i;return r.jsxs("div",{ref:w,className:ee(mr.root,y),..._,children:[r.jsx("div",{className:mr.gridWrap,children:r.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${j} on the busiest day`,className:mr.grid,style:L,onMouseLeave:()=>N(k=>({...k,visible:!1})),children:R.map((k,T)=>Array.from({length:7},(I,E)=>{const z=k[E];if(!z)return r.jsx("span",{className:mr.cell,style:{width:i,height:i,borderRadius:c,background:a[0]}},`${T}-${E}`);const O=vb(z.count,j),U=m?m(z,O):`${z.label??z.date}: ${z.count} activation${z.count===1?"":"s"}`;return r.jsx("span",{className:mr.cell,style:{width:S,height:i,borderRadius:c,background:a[O]},onMouseMove:Z=>N({visible:!0,x:Z.clientX,y:Z.clientY,content:U}),onMouseLeave:()=>N(Z=>({...Z,visible:!1}))},`${T}-${E}`)}))})}),p&&r.jsxs("div",{className:mr.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(k=>r.jsx("span",{className:mr.legendSquare,style:{background:a[k],borderRadius:c}},k)),r.jsx("span",{children:"More"})]}),$.visible&&r.jsx("div",{className:mr.tooltip,style:{left:$.x,top:$.y},children:$.content})]})});yb.displayName="ActivityHeatMap";const xb="_root_14edh_5",wb="_track_14edh_17",_b="_segment_14edh_28",bb="_legend_14edh_49",kb="_legendRow_14edh_58",Cb="_legendDot_14edh_68",jb="_legendLabel_14edh_74",Sb="_legendValue_14edh_78",Nb="_tooltip_14edh_84",Rb="_tooltipLabel_14edh_100",Lb="_tooltipValueRow_14edh_105",$b="_tooltipDot_14edh_114",dn={root:xb,track:wb,segment:_b,legend:bb,legendRow:kb,legendDot:Cb,legendLabel:jb,legendValue:Sb,tooltip:Nb,tooltipLabel:Rb,tooltipValueRow:Lb,tooltipDot:$b},Mb=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],To={r:140,g:79,b:226},Yc={r:68,g:108,b:255};function s1(t){const a=Math.max(0,Math.min(100,t))/100,i=Math.round(To.r+(Yc.r-To.r)*a),l=Math.round(To.g+(Yc.g-To.g)*a),c=Math.round(To.b+(Yc.b-To.b)*a);return`rgb(${i}, ${l}, ${c})`}const Tb=g.forwardRef(({segments:t,colors:a=Mb,aiGradient:i=!1,height:l,showLegend:c=!1,flat:u=!1,ariaLabel:p,className:f,...m},x)=>{const[y,_]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),w=t.reduce((R,L)=>R+Math.max(0,L.value),0);let $=0;const N=t.map((R,L)=>{const S=Math.max(0,R.value),k=w>0?S/w*100:0,T=w>0?$/w*100:0;$+=S;const I=w>0?$/w*100:0,E=R.color??a[L%a.length],z=u?!0:R.emphasized??L===0;return{...R,pct:k,startPct:T,endPct:I,color:E,emphasized:z}}),j=l!==void 0?{height:typeof l=="number"?`${l}px`:l}:void 0;return r.jsxs("div",{ref:x,className:ee(dn.root,f),...m,children:[r.jsx("div",{role:"img","aria-label":p??`Ratio bar: ${t.map(R=>`${R.label} ${R.value}`).join(", ")}`,className:dn.track,style:j,onMouseLeave:()=>_(R=>({...R,visible:!1})),children:N.map(R=>{const L=i?`linear-gradient(to right, ${s1(R.startPct)}, ${s1(R.endPct)})`:R.color;return r.jsx("span",{className:dn.segment,"data-emphasized":R.emphasized||void 0,"data-ai":i||void 0,style:{width:`${R.pct}%`,background:L,"--ratio-hover-bg":R.color},onMouseMove:S=>_({visible:!0,x:S.clientX,y:S.clientY,label:R.label,value:R.value,color:R.color})},R.label)})}),c&&r.jsx("ul",{className:dn.legend,children:N.map(R=>r.jsxs("li",{className:dn.legendRow,children:[r.jsx("span",{className:dn.legendDot,style:{background:R.color}}),r.jsx("span",{className:dn.legendLabel,children:R.label}),r.jsx("span",{className:dn.legendValue,children:R.value.toLocaleString("en-US")})]},R.label))}),y.visible&&r.jsxs("div",{className:dn.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("span",{className:dn.tooltipLabel,children:y.label}),r.jsxs("span",{className:dn.tooltipValueRow,children:[r.jsx("span",{className:dn.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});Tb.displayName="RatioBar";const Ab="_track_1wmly_6",Ib="_fill_1wmly_12",l1={track:Ab,fill:Ib},Eb=g.forwardRef(({value:t,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:l="var(--color-bg-tertiary)",gapColor:c="var(--color-bg-primary)",stripeWidth:u=2,stripeGap:p=1,height:f=12,ariaLabel:m,className:x,style:y,..._},w)=>{const $=u+p,N=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${u}px,
      ${c} ${u}px,
      ${c} ${$}px
    )`,j=Math.max(0,Math.min(a,t)),R=a>0?j/a*100:0;return r.jsx("div",{ref:w,role:"progressbar","aria-label":m??`Progress: ${Math.round(R)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":j,className:ee(l1.track,x),style:{height:f,background:`${N}, ${l}`,...y},..._,children:r.jsx("div",{className:l1.fill,style:{width:`${R}%`,background:`${N}, ${i}`}})})});Eb.displayName="StripedBar";const Pb=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],zb=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function c1(t,a="to right"){const i=t.map(({color:l,position:c})=>`${l} ${c}`).join(", ");return`linear-gradient(${a}, ${i})`}c1(Pb),c1(zb);var Xe="-ms-",Wa="-moz-",Oe="-webkit-",Sm="comm",Ws="rule",Dd="decl",Ob="@import",Db="@namespace",Nm="@keyframes",Bb="@layer",Rm=Math.abs,Bd=String.fromCharCode,gd=Object.assign;function Fb(t,a){return ft(t,0)^45?(((a<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function Lm(t){return t.trim()}function Vn(t,a){return(t=a.exec(t))?t[0]:t}function Re(t,a,i){return t.replace(a,i)}function xs(t,a,i){return t.indexOf(a,i)}function ft(t,a){return t.charCodeAt(a)|0}function Xr(t,a,i){return t.slice(a,i)}function _n(t){return t.length}function $m(t){return t.length}function za(t,a){return a.push(t),t}function Wb(t,a){return t.map(a).join("")}function d1(t,a){return t.filter(function(i){return!Vn(i,a)})}var Hs=1,Wo=1,Mm=0,hn=0,ut=0,Vo="";function qs(t,a,i,l,c,u,p,f){return{value:t,root:a,parent:i,type:l,props:c,children:u,line:Hs,column:Wo,length:p,return:"",siblings:f}}function gr(t,a){return gd(qs("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},a)}function Ao(t){for(;t.root;)t=gr(t.root,{children:[t]});za(t,t.siblings)}function Hb(){return ut}function qb(){return ut=hn>0?ft(Vo,--hn):0,Wo--,ut===10&&(Wo=1,Hs--),ut}function bn(){return ut=hn<Mm?ft(Vo,hn++):0,Wo++,ut===10&&(Wo=1,Hs++),ut}function yr(){return ft(Vo,hn)}function ws(){return hn}function Us(t,a){return Xr(Vo,t,a)}function Ua(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ub(t){return Hs=Wo=1,Mm=_n(Vo=t),hn=0,[]}function Vb(t){return Vo="",t}function Zc(t){return Lm(Us(hn-1,vd(t===91?t+2:t===40?t+1:t)))}function Gb(t){for(;(ut=yr())&&ut<33;)bn();return Ua(t)>2||Ua(ut)>3?"":" "}function Yb(t,a){for(;--a&&bn()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Us(t,ws()+(a<6&&yr()==32&&bn()==32))}function vd(t){for(;bn();)switch(ut){case t:return hn;case 34:case 39:t!==34&&t!==39&&vd(ut);break;case 40:t===41&&vd(t);break;case 92:bn();break}return hn}function Zb(t,a){for(;bn()&&t+ut!==57;)if(t+ut===84&&yr()===47)break;return"/*"+Us(a,hn-1)+"*"+Bd(t===47?t:bn())}function Kb(t){for(;!Ua(yr());)bn();return Us(t,hn)}function Qb(t){return Vb(_s("",null,null,null,[""],t=Ub(t),0,[0],t))}function _s(t,a,i,l,c,u,p,f,m){for(var x=0,y=0,_=p,w=0,$=0,N=0,j=1,R=1,L=1,S=0,k="",T=c,I=u,E=l,z=k;R;)switch(N=S,S=bn()){case 40:if(N!=108&&ft(z,_-1)==58){xs(z+=Re(Zc(S),"&","&\f"),"&\f",Rm(x?f[x-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:z+=Zc(S);break;case 9:case 10:case 13:case 32:z+=Gb(N);break;case 92:z+=Yb(ws()-1,7);continue;case 47:switch(yr()){case 42:case 47:za(Xb(Zb(bn(),ws()),a,i,m),m),(Ua(N||1)==5||Ua(yr()||1)==5)&&_n(z)&&Xr(z,-1,void 0)!==" "&&(z+=" ");break;default:z+="/"}break;case 123*j:f[x++]=_n(z)*L;case 125*j:case 59:case 0:switch(S){case 0:case 125:R=0;case 59+y:L==-1&&(z=Re(z,/\f/g,"")),$>0&&(_n(z)-_||j===0&&N===47)&&za($>32?h1(z+";",l,i,_-1,m):h1(Re(z," ","")+";",l,i,_-2,m),m);break;case 59:z+=";";default:if(za(E=u1(z,a,i,x,y,c,f,k,T=[],I=[],_,u),u),S===123)if(y===0)_s(z,a,E,E,T,u,_,f,I);else{switch(w){case 99:if(ft(z,3)===110)break;case 108:if(ft(z,2)===97)break;default:y=0;case 100:case 109:case 115:}y?_s(t,E,E,l&&za(u1(t,E,E,0,0,c,f,k,c,T=[],_,I),I),c,I,_,f,l?T:I):_s(z,E,E,E,[""],I,0,f,I)}}x=y=$=0,j=L=1,k=z="",_=p;break;case 58:_=1+_n(z),$=N;default:if(j<1){if(S==123)--j;else if(S==125&&j++==0&&qb()==125)continue}switch(z+=Bd(S),S*j){case 38:L=y>0?1:(z+="\f",-1);break;case 44:f[x++]=(_n(z)-1)*L,L=1;break;case 64:yr()===45&&(z+=Zc(bn())),w=yr(),y=_=_n(k=z+=Kb(ws())),S++;break;case 45:N===45&&_n(z)==2&&(j=0)}}return u}function u1(t,a,i,l,c,u,p,f,m,x,y,_){for(var w=c-1,$=c===0?u:[""],N=$m($),j=0,R=0,L=0;j<l;++j)for(var S=0,k=Xr(t,w+1,w=Rm(R=p[j])),T=t;S<N;++S)(T=Lm(R>0?$[S]+" "+k:Re(k,/&\f/g,$[S])))&&(m[L++]=T);return qs(t,a,i,c===0?Ws:f,m,x,y,_)}function Xb(t,a,i,l){return qs(t,a,i,Sm,Bd(Hb()),Xr(t,2,-2),0,l)}function h1(t,a,i,l,c){return qs(t,a,i,Dd,Xr(t,0,l),Xr(t,l+1,-1),l,c)}function Tm(t,a,i){switch(Fb(t,a)){case 5103:return Oe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Oe+t+t;case 4855:return Oe+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Wa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+t+Wa+t+Xe+t+t;case 5936:switch(ft(t,a+11)){case 114:return Oe+t+Xe+Re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Oe+t+Xe+Re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Oe+t+Xe+Re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Oe+t+Xe+t+t;case 6165:return Oe+t+Xe+"flex-"+t+t;case 5187:return Oe+t+Re(t,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+Xe+"flex-$1$2")+t;case 5443:return Oe+t+Xe+"flex-item-"+Re(t,/flex-|-self/g,"")+(Vn(t,/flex-|baseline/)?"":Xe+"grid-row-"+Re(t,/flex-|-self/g,""))+t;case 4675:return Oe+t+Xe+"flex-line-pack"+Re(t,/align-content|flex-|-self/g,"")+t;case 5548:return Oe+t+Xe+Re(t,"shrink","negative")+t;case 5292:return Oe+t+Xe+Re(t,"basis","preferred-size")+t;case 6060:return Oe+"box-"+Re(t,"-grow","")+Oe+t+Xe+Re(t,"grow","positive")+t;case 4554:return Oe+Re(t,/([^-])(transform)/g,"$1"+Oe+"$2")+t;case 6187:return Re(Re(Re(t,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),t,"")+t;case 5495:case 3959:return Re(t,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return Re(Re(t,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+Xe+"flex-pack:$3"),/space-between/,"justify")+Oe+t+t;case 4200:if(!Vn(t,/flex-|baseline/))return Xe+"grid-column-align"+Xr(t,a)+t;break;case 2592:case 3360:return Xe+Re(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(l,c){return a=c,Vn(l.props,/grid-\w+-end/)})?~xs(t+(i=i[a].value),"span",0)?t:Xe+Re(t,"-start","")+t+Xe+"grid-row-span:"+(~xs(i,"span",0)?Vn(i,/\d+/):+Vn(i,/\d+/)-+Vn(t,/\d+/))+";":Xe+Re(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(l){return Vn(l.props,/grid-\w+-start/)})?t:Xe+Re(Re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Re(t,/(.+)-inline(.+)/,Oe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_n(t)-1-a>6)switch(ft(t,a+1)){case 109:if(ft(t,a+4)!==45)break;case 102:return Re(t,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+Wa+(ft(t,a+3)==108?"$3":"$2-$3"))+t;case 115:return~xs(t,"stretch",0)?Tm(Re(t,"stretch","fill-available"),a,i)+t:t}break;case 5152:case 5920:return Re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,u,p,f,m,x){return Xe+c+":"+u+x+(p?Xe+c+"-span:"+(f?m:+m-+u)+x:"")+t});case 4949:if(ft(t,a+6)===121)return Re(t,":",":"+Oe)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return Re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(ft(t,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+Xe+"$2box$3")+t;case 100:return Re(t,":",":"+Xe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Re(t,"scroll-","scroll-snap-")+t}return t}function js(t,a){for(var i="",l=0;l<t.length;l++)i+=a(t[l],l,t,a)||"";return i}function Jb(t,a,i,l){switch(t.type){case Bb:if(t.children.length)break;case Ob:case Db:case Dd:return t.return=t.return||t.value;case Sm:return"";case Nm:return t.return=t.value+"{"+js(t.children,l)+"}";case Ws:if(!_n(t.value=t.props.join(",")))return""}return _n(i=js(t.children,l))?t.return=t.value+"{"+i+"}":""}function ek(t){var a=$m(t);return function(i,l,c,u){for(var p="",f=0;f<a;f++)p+=t[f](i,l,c,u)||"";return p}}function tk(t){return function(a){a.root||(a=a.return)&&t(a)}}function nk(t,a,i,l){if(t.length>-1&&!t.return)switch(t.type){case Dd:t.return=Tm(t.value,t.length,i);return;case Nm:return js([gr(t,{value:Re(t.value,"@","@"+Oe)})],l);case Ws:if(t.length)return Wb(i=t.props,function(c){switch(Vn(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ao(gr(t,{props:[Re(c,/:(read-\w+)/,":"+Wa+"$1")]})),Ao(gr(t,{props:[c]})),gd(t,{props:d1(i,l)});break;case"::placeholder":Ao(gr(t,{props:[Re(c,/:(plac\w+)/,":"+Oe+"input-$1")]})),Ao(gr(t,{props:[Re(c,/:(plac\w+)/,":"+Wa+"$1")]})),Ao(gr(t,{props:[Re(c,/:(plac\w+)/,Xe+"input-$1")]})),Ao(gr(t,{props:[c]})),gd(t,{props:d1(i,l)});break}return""})}}var Oo={},Kc,Qc;const Ho=typeof process<"u"&&Oo!==void 0&&(Oo.REACT_APP_SC_ATTR||Oo.SC_ATTR)||"data-styled",Am="active",Im="data-styled-version",Vs="6.4.2",Fd=`/*!sc*/
`,Ha=typeof window<"u"&&typeof document<"u";function p1(t){if(typeof process<"u"&&Oo!==void 0){const a=Oo[t];if(a!==void 0&&a!=="")return a!=="false"}}const rk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Qc=(Kc=p1("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Kc!==void 0?Kc:p1("SC_DISABLE_SPEEDY"))!==null&&Qc!==void 0?Qc:typeof process<"u"&&Oo!==void 0&&!1),Em="sc-keyframes-";function ti(t,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let bs=new Map,Ss=new Map,ks=1;const Oa=t=>{if(bs.has(t))return bs.get(t);for(;Ss.has(ks);)ks++;const a=ks++;return bs.set(t,a),Ss.set(a,t),a},ok=t=>Ss.get(t),ak=(t,a)=>{ks=a+1,bs.set(t,a),Ss.set(a,t)},Wd=Object.freeze([]),qo=Object.freeze({});function ik(t,a,i=qo){return t.theme!==i.theme&&t.theme||a||i.theme}const sk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lk=/(^-|-$)/g;function Pm(t){return t.replace(sk,"-").replace(lk,"")}const ck=/(a)(d)/gi,f1=t=>String.fromCharCode(t+(t>25?39:97));function Hd(t){let a,i="";for(a=Math.abs(t);a>52;a=a/52|0)i=f1(a%52)+i;return(f1(a%52)+i).replace(ck,"$1-$2")}const yd=5381,Gr=(t,a)=>{let i=a.length;for(;i;)t=33*t^a.charCodeAt(--i);return t},zm=t=>Gr(yd,t);function Om(t){return Hd(zm(t)>>>0)}function dk(t){return t.displayName||t.name||"Component"}function xd(t){return typeof t=="string"&&!0}function uk(t){return xd(t)?`styled.${t}`:`Styled(${dk(t)})`}const Dm=Symbol.for("react.memo"),hk=Symbol.for("react.forward_ref"),pk={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},fk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mk={[hk]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Dm]:Bm};function m1(t){return("type"in(a=t)&&a.type.$$typeof)===Dm?Bm:"$$typeof"in t?mk[t.$$typeof]:pk;var a}const gk=Object.defineProperty,vk=Object.getOwnPropertyNames,yk=Object.getOwnPropertySymbols,xk=Object.getOwnPropertyDescriptor,wk=Object.getPrototypeOf,_k=Object.prototype;function Fm(t,a,i){if(typeof a!="string"){const l=wk(a);l&&l!==_k&&Fm(t,l,i);const c=vk(a).concat(yk(a)),u=m1(t),p=m1(a);for(let f=0;f<c.length;++f){const m=c[f];if(!(m in fk||i&&i[m]||p&&m in p||u&&m in u)){const x=xk(a,m);try{gk(t,m,x)}catch{}}}}return t}function Gs(t){return typeof t=="function"}const bk=Symbol.for("react.forward_ref");function Wm(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===bk&&"styledComponentId"in t}function Da(t,a){return t&&a?t+" "+a:t||a||""}function wd(t,a){return t.join("")}function Va(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function _d(t,a,i=!1){if(!i&&!Va(t)&&!Array.isArray(t))return a;if(Array.isArray(a))for(let l=0;l<a.length;l++)t[l]=_d(t[l],a[l]);else if(Va(a))for(const l in a)t[l]=_d(t[l],a[l]);return t}function qd(t,a){Object.defineProperty(t,"toString",{value:a})}const kk=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let a=this._cIndex;if(t>this._cGroup)for(let i=this._cGroup;i<t;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=t;i--)a-=this.groupSizes[i];return this._cGroup=t,this._cIndex=a,a}insertRules(t,a){if(t>=this.groupSizes.length){const c=this.groupSizes,u=c.length;let p=u;for(;t>=p;)if(p<<=1,p<0)throw ti(16,`${t}`);this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(let f=u;f<p;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(t+1),l=0;for(let c=0,u=a.length;c<u;c++)this.tag.insertRule(i,a[c])&&(this.groupSizes[t]++,i++,l++);l>0&&this._cGroup>t&&(this._cIndex+=l)}clearGroup(t){if(t<this.length){const a=this.groupSizes[t],i=this.indexOfGroup(t),l=i+a;this.groupSizes[t]=0;for(let c=i;c<l;c++)this.tag.deleteRule(i);a>0&&this._cGroup>t&&(this._cIndex-=a)}}getGroup(t){let a="";if(t>=this.length||this.groupSizes[t]===0)return a;const i=this.groupSizes[t],l=this.indexOfGroup(t),c=l+i;for(let u=l;u<c;u++)a+=this.tag.getRule(u)+Fd;return a}},Ck=`style[${Ho}][${Im}="${Vs}"]`,jk=new RegExp(`^${Ho}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),g1=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,bd=t=>{if(!t)return document;if(g1(t))return t;if("getRootNode"in t){const a=t.getRootNode();if(g1(a))return a}return document},Sk=(t,a,i)=>{const l=i.split(",");let c;for(let u=0,p=l.length;u<p;u++)(c=l[u])&&t.registerName(a,c)},Nk=(t,a)=>{var i;const l=((i=a.textContent)!==null&&i!==void 0?i:"").split(Fd),c=[];for(let u=0,p=l.length;u<p;u++){const f=l[u].trim();if(!f)continue;const m=f.match(jk);if(m){const x=0|parseInt(m[1],10),y=m[2];x!==0&&(ak(y,x),Sk(t,y,m[3]),t.getTag().insertRules(x,c)),c.length=0}else c.push(f)}},Xc=t=>{const a=bd(t.options.target).querySelectorAll(Ck);for(let i=0,l=a.length;i<l;i++){const c=a[i];c&&c.getAttribute(Ho)!==Am&&(Nk(t,c),c.parentNode&&c.parentNode.removeChild(c))}};let Pa=!1;function Rk(){if(Pa!==!1)return Pa;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return Pa=t.nonce||t.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Pa=a.getAttribute("content")||void 0}return Pa=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Hm=(t,a)=>{const i=document.head,l=t||i,c=document.createElement("style"),u=(m=>{const x=Array.from(m.querySelectorAll(`style[${Ho}]`));return x[x.length-1]})(l),p=u!==void 0?u.nextSibling:null;c.setAttribute(Ho,Am),c.setAttribute(Im,Vs);const f=a||Rk();return f&&c.setAttribute("nonce",f),l.insertBefore(c,p),c},Lk=class{constructor(t,a){this.element=Hm(t,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var l;if(i.sheet)return i.sheet;const c=(l=i.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets;for(let u=0,p=c.length;u<p;u++){const f=c[u];if(f.ownerNode===i)return f}throw ti(17)})(this.element),this.length=0}insertRule(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""}},$k=class{constructor(t,a){this.element=Hm(t,a),this.nodes=this.element.childNodes,this.length=0}insertRule(t,a){if(t<=this.length&&t>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let v1=Ha;const Mk={isServer:!Ha,useCSSOMInjection:!rk};class Ys{static registerId(a){return Oa(a)}constructor(a=qo,i={},l){this.options=Object.assign(Object.assign({},Mk),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(l),this.server=!!a.isServer,!this.server&&Ha&&v1&&(v1=!1,Xc(this)),qd(this,()=>(c=>{const u=c.getTag(),{length:p}=u;let f="";for(let m=0;m<p;m++){const x=ok(m);if(x===void 0)continue;const y=c.names.get(x);if(y===void 0||!y.size)continue;const _=u.getGroup(m);if(_.length===0)continue;const w=Ho+".g"+m+'[id="'+x+'"]';let $="";for(const N of y)N.length>0&&($+=N+",");f+=_+w+'{content:"'+$+'"}'+Fd}return f})(this))}rehydrate(){!this.server&&Ha&&Xc(this)}reconstructWithOptions(a,i=!0){const l=new Ys(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return l.keyframeIds=new Set(this.keyframeIds),!this.server&&Ha&&a.target!==this.options.target&&bd(this.options.target)!==bd(a.target)&&Xc(l),l}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:l,nonce:c})=>i?new Lk(l,c):new $k(l,c))(this.options),new kk(a)));var a}hasNameForId(a,i){var l,c;return(c=(l=this.names.get(a))===null||l===void 0?void 0:l.has(i))!==null&&c!==void 0&&c}registerName(a,i){Oa(a),a.startsWith(Em)&&this.keyframeIds.add(a);const l=this.names.get(a);l?l.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,l){this.registerName(a,i),this.getTag().insertRules(Oa(a),l)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(Oa(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const qm=new WeakSet,Tk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ak(t,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in Tk||t.startsWith("--")?String(a).trim():a+"px"}const Hr=47;function y1(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let a="";for(let i=0;i<t.length;i++){const l=t.charCodeAt(i);a+=l>=65&&l<=90?"-"+String.fromCharCode(l+32):t[i]}return a.startsWith("ms-")?"-"+a:a}const Um=Symbol.for("sc-keyframes");function Ik(t){return typeof t=="object"&&t!==null&&Um in t}function Vm(t){return Gs(t)&&!(t.prototype&&t.prototype.isReactComponent)}const Gm=t=>t==null||t===!1||t==="",Ek=Symbol.for("react.client.reference");function x1(t){return t.$$typeof===Ek}function Ym(t,a){for(const i in t){const l=t[i];t.hasOwnProperty(i)&&!Gm(l)&&(Array.isArray(l)&&qm.has(l)||Gs(l)?a.push(y1(i)+":",l,";"):Va(l)?(a.push(i+" {"),Ym(l,a),a.push("}")):a.push(y1(i)+": "+Ak(i,l)+";"))}}function Yr(t,a,i,l,c=[]){if(Gm(t))return c;const u=typeof t;if(u==="string")return c.push(t),c;if(u==="function"){if(x1(t))return c;if(Vm(t)&&a){const p=t(a);return Yr(p,a,i,l,c)}return c.push(t),c}if(Array.isArray(t)){for(let p=0;p<t.length;p++)Yr(t[p],a,i,l,c);return c}return Wm(t)?(c.push(`.${t.styledComponentId}`),c):Ik(t)?(i?(t.inject(i,l),c.push(t.getName(l))):c.push(t),c):x1(t)?c:Va(t)?t.toString!==Object.prototype.toString?(c.push(t.toString()),c):(Ym(t,c),c):(c.push(t.toString()),c)}const Pk=zm(Vs);class zk{constructor(a,i,l){this.rules=a,this.componentId=i,this.baseHash=Gr(Pk,i),this.baseStyle=l,Ys.registerId(i)}generateAndInjectStyles(a,i,l){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,l):"";{let u="";for(let p=0;p<this.rules.length;p++){const f=this.rules[p];if(typeof f=="string")u+=f;else if(f)if(Vm(f)){const m=f(a);typeof m=="string"?u+=m:m!=null&&m!==!1&&(u+=wd(Yr(m,a,i,l)))}else u+=wd(Yr(f,a,i,l))}if(u){this.dynamicNameCache||(this.dynamicNameCache=new Map);const p=l.hash?l.hash+u:u;let f=this.dynamicNameCache.get(p);if(!f){if(f=Hd(Gr(Gr(this.baseHash,l.hash),u)>>>0),this.dynamicNameCache.size>=200){const m=this.dynamicNameCache.keys().next().value;m!==void 0&&this.dynamicNameCache.delete(m)}this.dynamicNameCache.set(p,f)}if(!i.hasNameForId(this.componentId,f)){const m=l(u,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,m)}c=Da(c,f)}}return c}}const Ok=/&/g;function Zm(t,a){let i=0;for(;--a>=0&&t.charCodeAt(a)===92;)i++;return!(1&~i)}function Jc(t){const a=t.length;let i="",l=0,c=0,u=0,p=!1,f=!1;for(let m=0;m<a;m++){const x=t.charCodeAt(m);if(u!==0||p||x!==Hr||t.charCodeAt(m+1)!==42)if(p)x===42&&t.charCodeAt(m+1)===Hr&&(p=!1,m++);else if(x!==34&&x!==39||Zm(t,m)){if(u===0)if(x===123)c++;else if(x===125){if(c--,c<0){f=!0;let y=m+1;for(;y<a;){const _=t.charCodeAt(y);if(_===59||_===10)break;y++}y<a&&t.charCodeAt(y)===59&&y++,c=0,m=y-1,l=y;continue}c===0&&(i+=t.substring(l,m+1),l=m+1)}else x===59&&c===0&&(i+=t.substring(l,m+1),l=m+1)}else u===0?u=x:u===x&&(u=0);else p=!0,m++}return f||c!==0||u!==0?(l<a&&c===0&&u===0&&(i+=t.substring(l)),i):t}function Km(t,a){const i=a+" ",l=","+i;for(let c=0;c<t.length;c++){const u=t[c];if(u.type==="rule"){u.value=(i+u.value).replaceAll(",",l);const p=u.props,f=[];for(let m=0;m<p.length;m++)f[m]=i+p[m];u.props=f}Array.isArray(u.children)&&u.type!=="@keyframes"&&Km(u.children,a)}return t}function Dk({options:t=qo,plugins:a=Wd}=qo){let i,l,c;const u=(w,$,N)=>N.startsWith(l)&&N.endsWith(l)&&N.replaceAll(l,"").length>0?`.${i}`:w,p=a.slice();p.push(w=>{w.type===Ws&&w.value.includes("&")&&(c||(c=new RegExp(`\\${l}\\b`,"g")),w.props[0]=w.props[0].replace(Ok,l).replace(c,u))}),t.prefix&&p.push(nk),p.push(Jb);let f=[];const m=ek(p.concat(tk(w=>f.push(w)))),x=(w,$="",N="",j="&")=>{i=j,l=$,c=void 0;const R=(function(S){const k=S.indexOf("//")!==-1,T=S.indexOf("}")!==-1;if(!k&&!T)return S;if(!k)return Jc(S);const I=S.length;let E="",z=0,O=0,U=0,Z=0,X=0,V=!1;for(;O<I;){const te=S.charCodeAt(O);if(te!==34&&te!==39||Zm(S,O))if(U===0)if(te===Hr&&O+1<I&&S.charCodeAt(O+1)===42){for(O+=2;O+1<I&&(S.charCodeAt(O)!==42||S.charCodeAt(O+1)!==Hr);)O++;O+=2}else if(te!==40)if(te!==41)if(Z>0)O++;else if(te===42&&O+1<I&&S.charCodeAt(O+1)===Hr)E+=S.substring(z,O),O+=2,z=O,V=!0;else if(te===Hr&&O+1<I&&S.charCodeAt(O+1)===Hr){for(E+=S.substring(z,O);O<I&&S.charCodeAt(O)!==10;)O++;z=O,V=!0}else te===123?X++:te===125&&X--,O++;else Z>0&&Z--,O++;else Z++,O++;else O++;else U===0?U=te:U===te&&(U=0),O++}return V?(z<I&&(E+=S.substring(z)),X===0?E:Jc(E)):X===0?S:Jc(S)})(w);let L=Qb(N||$?N+" "+$+" { "+R+" }":R);return t.namespace&&(L=Km(L,t.namespace)),f=[],js(L,m),f},y=t;let _=yd;for(let w=0;w<a.length;w++)a[w].name||ti(15),_=Gr(_,a[w].name);return y!=null&&y.namespace&&(_=Gr(_,y.namespace)),y!=null&&y.prefix&&(_=Gr(_,"p")),x.hash=_!==yd?_.toString():"",x}const Bk=new Ys,kd=Dk(),Qm=xr.createContext({shouldForwardProp:void 0,styleSheet:Bk,stylis:kd,stylisPlugins:void 0});Qm.Consumer;function Fk(){return xr.useContext(Qm)}const Xm=xr.createContext(void 0);Xm.Consumer;const w1=Object.prototype.hasOwnProperty,ed={};function Wk(t,a){const i=typeof t!="string"?"sc":Pm(t);ed[i]=(ed[i]||0)+1;const l=i+"-"+Om(Vs+i+ed[i]);return a?a+"-"+l:l}function Hk(t,a,i){const l=Wm(t),c=t,u=!xd(t),{attrs:p=Wd,componentId:f=Wk(a.displayName,a.parentComponentId),displayName:m=uk(t)}=a,x=a.displayName&&a.componentId?Pm(a.displayName)+"-"+a.componentId:a.componentId||f,y=l&&c.attrs?c.attrs.concat(p).filter(Boolean):p;let{shouldForwardProp:_}=a;if(l&&c.shouldForwardProp){const j=c.shouldForwardProp;if(a.shouldForwardProp){const R=a.shouldForwardProp;_=(L,S)=>j(L,S)&&R(L,S)}else _=j}const w=new zk(i,x,l?c.componentStyle:void 0);function $(j,R){return(function(L,S,k){const{attrs:T,componentStyle:I,defaultProps:E,foldedComponentIds:z,styledComponentId:O,target:U}=L,Z=xr.useContext(Xm),X=Fk(),V=L.shouldForwardProp||X.shouldForwardProp,te=ik(S,Z,E)||qo;let ie,ce;{const P=xr.useRef(null),D=P.current;if(D!==null&&D[1]===te&&D[2]===X.styleSheet&&D[3]===X.stylis&&D[7]===I&&(function(C,A,Q){const ne=C,G=A;let ue=0;for(const K in G)if(w1.call(G,K)&&(ue++,ne[K]!==G[K]))return!1;return ue===Q})(D[0],S,D[4]))ie=D[5],ce=D[6];else{ie=(function(A,Q,ne){const G=Object.assign(Object.assign({},Q),{className:void 0,theme:ne}),ue=A.length>1;for(let K=0;K<A.length;K++){const re=A[K],fe=Gs(re)?re(ue?Object.assign({},G):G):re;for(const we in fe)we==="className"?G.className=Da(G.className,fe[we]):we==="style"?G.style=Object.assign(Object.assign({},G.style),fe[we]):we in Q&&Q[we]===void 0||(G[we]=fe[we])}return"className"in Q&&typeof Q.className=="string"&&(G.className=Da(G.className,Q.className)),G})(T,S,te),ce=(function(A,Q,ne,G){return A.generateAndInjectStyles(Q,ne,G)})(I,ie,X.styleSheet,X.stylis);let C=0;for(const A in S)w1.call(S,A)&&C++;P.current=[S,te,X.styleSheet,X.stylis,C,ie,ce,I]}}const se=ie.as||U,J=(function(P,D,C,A){const Q={};for(const ne in P)P[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&P.theme===C||(ne==="forwardedAs"?Q.as=P.forwardedAs:A&&!A(ne,D)||(Q[ne]=P[ne]));return Q})(ie,se,te,V);let W=Da(z,O);return ce&&(W+=" "+ce),ie.className&&(W+=" "+ie.className),J[xd(se)&&se.includes("-")?"class":"className"]=W,k&&(J.ref=k),g.createElement(se,J)})(N,j,R)}$.displayName=m;let N=xr.forwardRef($);return N.attrs=y,N.componentStyle=w,N.displayName=m,N.shouldForwardProp=_,N.foldedComponentIds=l?Da(c.foldedComponentIds,c.styledComponentId):"",N.styledComponentId=x,N.target=l?c.target:t,Object.defineProperty(N,"defaultProps",{get(){return this._foldedDefaultProps},set(j){this._foldedDefaultProps=l?(function(R,...L){for(const S of L)_d(R,S,!0);return R})({},c.defaultProps,j):j}}),qd(N,()=>`.${N.styledComponentId}`),u&&Fm(N,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}var qk=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function _1(t,a){const i=[t[0]];for(let l=0,c=a.length;l<c;l+=1)i.push(a[l],t[l+1]);return i}const b1=t=>(qm.add(t),t);function zt(t,...a){if(Gs(t)||Va(t))return b1(Yr(_1(Wd,[t,...a])));const i=t;return a.length===0&&i.length===1&&typeof i[0]=="string"?Yr(i):b1(Yr(_1(i,a)))}function Cd(t,a,i=qo){if(!a)throw ti(1,a);const l=(c,...u)=>t(a,i,zt(c,...u));return l.attrs=c=>Cd(t,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)})),l.withConfig=c=>Cd(t,a,Object.assign(Object.assign({},i),c)),l}const Jm=t=>Cd(Hk,t),b=Jm;qk.forEach(t=>{b[t]=Jm(t)});var e0;class Uk{constructor(a,i){this[e0]=!0,this.inject=(l,c=kd)=>{const u=this.getName(c);if(!l.hasNameForId(this.id,u)){const p=c(this.rules,u,"@keyframes");l.insertRules(this.id,u,p)}},this.name=a,this.id=Em+a,this.rules=i,Oa(this.id),qd(this,()=>{throw ti(12,String(this.name))})}getName(a=kd){return a.hash?this.name+Hd(+a.hash>>>0):this.name}}function De(t,...a){const i=wd(zt(t,...a)),l=Om(i);return new Uk(l,i)}e0=Um;const Vk=768,Gk=`(max-width: ${Vk-1}px)`;function t0(t){const[a,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(t).matches);return g.useEffect(()=>{if(typeof window>"u")return;const l=window.matchMedia(t),c=u=>i(u.matches);return i(l.matches),l.addEventListener("change",c),()=>l.removeEventListener("change",c)},[t]),a}function Yk(){return t0(Gk)}const Zk="48px",Kk="240px",k1="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",Qk=b.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${t=>t.$isExpanded?Kk:Zk};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${t=>t.$isExpanded?zt`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:zt`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${t=>t.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,Xk=b.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${t=>t.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${t=>t.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,Jk=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,eC=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,tC=b.button`
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
`,nC=b.div`
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
`,rC=b.span`
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
`,C1=b.div`
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
`,oC="var(--gradient-ai)",n0=b.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${t=>t.$isActive&&!t.$isAi&&zt`
      background: var(--color-bg-primary, white);
      box-shadow: ${k1}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${t=>t.$isActive&&t.$isAi&&zt`
      background: ${oC};
      box-shadow: ${k1}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,r0=b.button`
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
`,o0=b.span`
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
`,a0=b.div`
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
`,aC=b.div`
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
`;const iC=b.button`
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
`,sC=b.div`
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
`,lC=b.span`
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
`;function cC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function dC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function uC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function hC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function pC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function fC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function mC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function gC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function vC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function yC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function Jr({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function xC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function wC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function _C({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function j1({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function rd({item:t,isExpanded:a,showNewBadge:i,isAi:l}){const c=t.isActive??!1;return r.jsx(n0,{$isActive:c,$isAi:l,children:r.jsxs(r0,{$isActive:c,$isAiActive:c&&!!l,onClick:t.onClick,"aria-current":c?"page":void 0,title:a?void 0:t.label,children:[r.jsxs(a0,{children:[t.hasUnread&&r.jsx(aC,{}),c&&t.activeIcon?t.activeIcon:t.icon]}),a&&r.jsx(o0,{children:t.label}),a&&i&&r.jsx(Ja,{variant:"primary",children:"New"})]})})}function bC({items:t,toolItems:a=[],bottomItems:i=[],workspace:l,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:x}){const[y,_]=g.useState(!1);return r.jsx(Qk,{$isExpanded:y,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),"aria-label":"Primary navigation",children:r.jsxs(Xk,{$isExpanded:y,children:[r.jsxs(Jk,{children:[r.jsxs(tC,{$isExpanded:y,onClick:u,"aria-label":`Workspace: ${l.name}`,title:y?void 0:l.name,children:[r.jsx(nC,{children:l.logoUrl?r.jsx("img",{src:l.logoUrl,alt:l.name}):l.initial??l.name.charAt(0).toUpperCase()}),y&&r.jsxs(r.Fragment,{children:[r.jsx(rC,{children:l.name}),r.jsx(C1,{children:r.jsx(j1,{})})]})]}),r.jsx(td,{children:t.map(w=>r.jsx(rd,{item:w,isExpanded:y,isAi:w.id===x},w.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(nd,{}),r.jsx(td,{children:a.map(w=>r.jsx(rd,{item:w,isExpanded:y,showNewBadge:w.id===m,isAi:w.id===x},w.id))})]})]}),r.jsxs(eC,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(nd,{}),r.jsx(td,{children:i.map(w=>r.jsx(rd,{item:w,isExpanded:y,isAi:w.id===x},w.id))})]}),r.jsx(nd,{}),r.jsx(n0,{$isActive:!1,children:r.jsxs(r0,{$isActive:!1,onClick:f,"aria-label":"Settings",title:y?void 0:"Settings",children:[r.jsx(a0,{children:r.jsx(_C,{})}),y&&r.jsx(o0,{children:"Settings"})]})}),r.jsxs(iC,{$isExpanded:y,onClick:p,"aria-label":`User: ${c.name}`,title:y?void 0:c.name,children:[r.jsx(sC,{$color:c.avatarColor,children:c.initials}),y&&r.jsxs(r.Fragment,{children:[r.jsx(lC,{children:c.name}),r.jsx(C1,{children:r.jsx(j1,{})})]})]})]})]})})}const kC=270,CC=b.nav`
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
`,jC=b.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,SC=b.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,NC=b.h2`
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
`,RC=b.div`
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
`,LC=b.button`
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
`,$C=b.div`
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
`,MC=b.button`
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
`;const TC=b.span`
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
`,AC=b.div`
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
`,IC=De`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,EC=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${IC} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,S1=b.button`
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
`,PC=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${t=>t.$outlined&&zt`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,zC=b.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,OC=b.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,DC=b.div`
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
`,BC=b.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,FC=b.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,WC=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,i0=b.div`
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
`;function s0(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function HC(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Ud={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function qC({item:t}){return r.jsx(nn,{label:r.jsx("span",{style:{color:t.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:t.isActive?500:void 0,letterSpacing:"-0.084px"},children:t.label}),leadingSlot:r.jsx(i0,{children:t.icon??r.jsx(s0,{})}),selected:t.isActive,onClick:t.onClick,divider:!1,size:"md","aria-current":t.isActive?"page":void 0,style:Ud})}function UC({group:t}){const[a,i]=g.useState(t.defaultExpanded??!0),[l,c]=g.useState(!1),u=t.maxVisible,f=u!=null&&!l&&t.children.length>u?t.children.slice(0,u):t.children,m=t.children.length-f.length;return r.jsxs(PC,{$outlined:t.outlined,children:[r.jsxs(MC,{onClick:()=>i(x=>!x),"aria-expanded":a,children:[r.jsx(AC,{children:a?r.jsx(kr,{size:16}):r.jsx(Gt,{size:16})}),r.jsx(TC,{children:t.label}),t.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:t.trailingBadge})]}),a&&r.jsxs(EC,{children:[f.map(x=>r.jsx(nn,{label:r.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:r.jsx(i0,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:Ud},x.id)),m>0&&r.jsxs(S1,{type:"button",onClick:()=>c(!0),children:["Show ",m," more"]}),u!=null&&l&&t.children.length>u&&r.jsx(S1,{type:"button",onClick:()=>c(!1),children:"Show less"})]})]})}function VC({heading:t,isVisible:a,menuEntries:i=[],menuHeader:l,pageEntries:c=[],showSearch:u=!0,searchValue:p="",onSearchChange:f,onFilterClick:m,headerSlot:x,bodyContent:y,width:_=kC,onWidthChange:w,minWidth:$=220,maxWidth:N=520}){const j=y!==void 0,R=g.useRef(null),[L,S]=g.useState(!1);return g.useEffect(()=>{if(!L||!w)return;const k=R.current;if(!k)return;const T=k.getBoundingClientRect().left,I=O=>{const U=Math.min(N,Math.max($,O.clientX-T));w(U)},E=()=>S(!1);window.addEventListener("mousemove",I),window.addEventListener("mouseup",E);const z=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",E),document.body.style.userSelect=z,document.body.style.cursor=""}},[L,w,$,N]),r.jsxs(CC,{ref:R,$isVisible:a,$width:_,$isResizing:L,"aria-label":"Secondary navigation",children:[r.jsxs(jC,{children:[(t||x)&&r.jsxs(SC,{children:[r.jsx(NC,{children:t}),x]}),u&&!j&&r.jsxs(RC,{children:[r.jsx(um,{size:"sm",placeholder:"Search...",value:p,onChange:k=>f==null?void 0:f(k.target.value)}),r.jsx(LC,{onClick:m,"aria-label":"Filter",children:r.jsx(HC,{})})]})]}),j?y:r.jsxs($C,{children:[l,i.map(k=>k.type==="single"?r.jsx(qC,{item:k.item},k.item.id):k.type==="group"?r.jsx(UC,{group:k.group},k.group.id):k.type==="divider"?r.jsx(FC,{},k.id):r.jsx(zC,{children:k.label.label},k.label.id))]}),c.length>0&&r.jsxs(OC,{children:[r.jsx(BC,{}),c.map(k=>r.jsx(nn,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:k.label}),leadingSlot:r.jsx(WC,{children:k.icon??r.jsx(s0,{})}),onClick:k.onClick,selected:k.isActive??!1,divider:!1,size:"md","aria-current":k.isActive?"page":void 0,style:Ud},k.id))]}),w&&a&&r.jsx(DC,{$isResizing:L,onMouseDown:k=>{k.preventDefault(),S(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const GC=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:t})=>t?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,YC=b.div`
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
`,l0=b.div`
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
`,ZC=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,KC=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function QC(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function N1(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function R1(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function XC(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function JC({heading:t,actions:a=[],showActivityButton:i=!0,showPonderButton:l=!0,noBorder:c=!1,onActivityClick:u,onPonderClick:p,onDotsClick:f}){const m=a.filter(_=>_.variant==="secondary"),x=a.filter(_=>_.variant==="primary"),y=t0("(prefers-color-scheme: dark)");return r.jsxs(GC,{$noBorder:c,children:[r.jsx(YC,{children:typeof t=="string"?r.jsx(l0,{children:t}):t}),r.jsxs(ZC,{children:[r.jsxs(KC,{children:[r.jsx(Te,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:r.jsx(QC,{})}),m.map(_=>r.jsx(Te,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(R1,{}),trailingArtwork:r.jsx(N1,{}),onClick:_.onClick,children:_.label},_.id)),x.map(_=>r.jsx(Te,{variant:"primary",size:"sm",leadingArtwork:r.jsx(R1,{}),trailingArtwork:r.jsx(N1,{}),onClick:_.onClick,children:_.label},_.id))]}),i&&r.jsx(Te,{variant:"ghost",size:"sm",iconOnly:!0,onClick:u,"aria-label":"Activity",title:"Activity",children:r.jsx(XC,{})}),l&&r.jsx(Cf,{dark:y,onClick:p,"aria-label":"Ponder AI"})]})]})}const ej=b.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,tj=b.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,nj=b.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,rj=b.main`
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
`,L1="tb:secondary-nav-width",$1=270,M1=220,T1=520;function oj({items:t,toolItems:a,bottomItems:i,workspace:l,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:x,secNavHeading:y,menuEntries:_,menuHeader:w,pageEntries:$,showSearch:N,searchValue:j,onSearchChange:R,onFilterClick:L,headerSlot:S,bodyContent:k,heading:T,actions:I,showActivityButton:E,showPonderButton:z,noBorder:O,onActivityClick:U,onPonderClick:Z,onDotsClick:X,children:V,showSecondaryNav:te=!0,showTopNav:ie=!0}){const[ce,se]=g.useState(()=>{if(typeof window>"u")return $1;const J=window.localStorage.getItem(L1),W=J?parseInt(J,10):NaN;return Number.isFinite(W)?Math.min(T1,Math.max(M1,W)):$1});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(L1,String(ce))},[ce]),r.jsxs(ej,{children:[r.jsx(bC,{items:t,toolItems:a,bottomItems:i,workspace:l,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:x}),r.jsxs(tj,{children:[te&&r.jsx(VC,{heading:y,menuEntries:_,menuHeader:w,pageEntries:$,isVisible:!0,showSearch:N,searchValue:j,onSearchChange:R,onFilterClick:L,headerSlot:S,bodyContent:k,width:ce,onWidthChange:se,minWidth:M1,maxWidth:T1}),r.jsxs(nj,{children:[ie&&r.jsx(JC,{heading:T,actions:I,showActivityButton:E,showPonderButton:z,noBorder:O,onActivityClick:U,onPonderClick:Z,onDotsClick:X}),r.jsx(rj,{children:V})]})]})]})}function aj({deadZonePx:t=8,topThresholdPx:a=20,target:i}={}){const[l,c]=g.useState(null),u=g.useRef(0);return g.useEffect(()=>{var x;const p=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;u.current=p();const f=()=>{const y=p(),_=y-u.current;Math.abs(_)<t||(_>0&&y>a?c("down"):_<0&&c("up"),u.current=y)},m=i??(typeof window<"u"?window:{});return(x=m.addEventListener)==null||x.call(m,"scroll",f,{passive:!0}),()=>{var y;(y=m.removeEventListener)==null||y.call(m,"scroll",f)}},[t,a,i]),l}const ij=b.button`
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
`,sj=b.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,lj=b.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function od({label:t,isOpen:a,onClick:i,ariaLabel:l}){return r.jsxs(ij,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":l,children:[r.jsx(sj,{children:t}),r.jsx(lj,{children:r.jsx(kr,{size:14})})]})}const cj=b.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${t=>t.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,dj=b.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,A1=b.button`
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
`,uj=b.div`
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
`,hj=b.button`
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
`;function pj({size:t=18}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const fj=g.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:l,openOverlay:c,user:u,hidden:p,onHamburgerClick:f,onPrimaryClick:m,onSecondaryClick:x,onTertiaryClick:y,onSearchClick:_,onUserClick:w},$){return r.jsx(cj,{ref:$,$hidden:p,children:r.jsxs(dj,{children:[r.jsx(A1,{onClick:f,"aria-label":"Open navigation",children:r.jsx(pj,{size:18})}),r.jsxs(uj,{children:[r.jsx(od,{label:a,isOpen:c==="primary",onClick:m,ariaLabel:"Choose a module"}),i&&r.jsxs(r.Fragment,{children:[r.jsx(I1,{"aria-hidden":"true",children:"›"}),r.jsx(od,{label:i,isOpen:c==="secondary",onClick:x,ariaLabel:"Choose a section"})]}),l&&r.jsxs(r.Fragment,{children:[r.jsx(I1,{"aria-hidden":"true",children:"›"}),r.jsx(od,{label:l,isOpen:c==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]}),r.jsx(A1,{onClick:_,"aria-label":"Search",children:r.jsx(Pd,{size:18})}),r.jsx(hj,{onClick:w,$color:u.avatarColor,"aria-label":`User: ${u.name}`,children:u.initials})]})})}),mj=De`
  from { opacity: 0; }
  to { opacity: 1; }
`,gj=b.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${mj} 160ms ease-out;
`;function vj({onDismiss:t}){return g.useEffect(()=>{const a=l=>{l.key==="Escape"&&t()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[t]),r.jsx(gj,{onClick:t,"aria-hidden":"true"})}const yj=De`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,xj=b.div`
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
  animation: ${yj} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,wj=b.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,_j=b.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,bj=b.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,kj=b.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function Vd({title:t,children:a,ariaLabel:i}){return r.jsxs(xj,{role:"dialog","aria-modal":"true","aria-label":i??t,children:[r.jsx(wj,{children:r.jsx(_j,{"aria-hidden":"true"})}),t&&r.jsx(bj,{children:t}),r.jsx(kj,{children:a})]})}const Zs=b.div`
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
`;function Cj({activeId:t,groups:a,onSelect:i}){return r.jsx(Vd,{title:"Modules",ariaLabel:"Choose a module",children:r.jsx(Zs,{children:a.map((l,c)=>r.jsxs("div",{children:[c>0&&r.jsx(Ga,{children:l.label}),c===0&&r.jsx(Ga,{children:l.label}),l.items.map(u=>{const p=u.id===t;return r.jsxs(Zr,{$active:p,onClick:()=>i(u.id),"aria-pressed":p,children:[r.jsx(Do,{children:u.icon}),r.jsx(Kr,{children:u.label}),p&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},u.id)})]},l.id))})})}function jj({moduleLabel:t,entries:a,onSelect:i}){return r.jsx(Vd,{title:t,ariaLabel:`${t} sections`,children:r.jsx(Zs,{children:a.map(l=>{if(l.type==="single"){const u=l.item;return r.jsxs(Zr,{$active:u.isActive,onClick:()=>{var p;(p=u.onClick)==null||p.call(u),i()},"aria-pressed":!!u.isActive,children:[r.jsx(Do,{children:u.icon}),r.jsx(Kr,{children:u.label}),u.isActive&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},u.id)}if(l.type!=="group")return null;const c=l.group;return r.jsxs("div",{children:[r.jsx(Ga,{children:c.label}),c.children.map(u=>r.jsxs(Zr,{$active:u.isActive,$indent:!0,onClick:()=>{var p;(p=u.onClick)==null||p.call(u),i()},"aria-pressed":!!u.isActive,children:[r.jsx(Do,{children:u.icon}),r.jsx(Kr,{children:u.label}),u.isActive&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},u.id))]},c.id)})})})}const Sj=b.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,Nj=b.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rj=b.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function Lj({personas:t,activeId:a,onSelect:i}){return r.jsx(Vd,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(Zs,{children:t.map(l=>{const c=l.id===a;return r.jsxs(Zr,{$active:c,onClick:()=>i(l.id),"aria-pressed":c,children:[r.jsx(Kr,{as:"span",children:r.jsxs(Sj,{children:[r.jsx(Nj,{children:l.name}),r.jsx(Rj,{children:l.role})]})}),c&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},l.id)})})})}const $j=De`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,Mj=b.aside`
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
  animation: ${$j} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,Tj=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,Aj=b.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,Ij=b.button`
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
`,Ej=b.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,Pj=60;function zj({title:t,onDismiss:a,children:i}){const l=g.useRef(null),c=g.useRef(null);return g.useEffect(()=>{const u=l.current;if(!u)return;const p=m=>{const x=m.touches[0];c.current={x:x.clientX,y:x.clientY}},f=m=>{if(!c.current)return;const x=m.changedTouches[0],y=x.clientX-c.current.x,_=x.clientY-c.current.y;c.current=null,y<-60&&Math.abs(_)<Pj&&a()};return u.addEventListener("touchstart",p,{passive:!0}),u.addEventListener("touchend",f),()=>{u.removeEventListener("touchstart",p),u.removeEventListener("touchend",f)}},[a]),r.jsxs(Mj,{ref:l,role:"dialog","aria-modal":"true","aria-label":t??"Navigation",children:[r.jsxs(Tj,{children:[r.jsx(Aj,{children:t??"Navigation"}),r.jsx(Ij,{onClick:a,"aria-label":"Close navigation",children:r.jsx(Qa,{size:18})})]}),r.jsx(Ej,{children:i})]})}function Oj({activeId:t,groups:a,currentMenuEntries:i,onSelectModule:l,onDismiss:c}){return r.jsx(zj,{title:"Navigation",onDismiss:c,children:r.jsx(Zs,{children:a.map(u=>r.jsxs("div",{children:[r.jsx(Ga,{children:u.label}),u.items.map(p=>{const f=p.id===t;return r.jsxs("div",{children:[r.jsxs(Zr,{$active:f,onClick:()=>{l(p.id),c()},"aria-pressed":f,children:[r.jsx(Do,{children:p.icon}),r.jsx(Kr,{children:p.label}),f&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]}),f&&i.length>0&&r.jsx("div",{children:i.map(m=>{if(m.type==="single"){const y=m.item;return r.jsxs(Zr,{$active:y.isActive,$indent:!0,onClick:()=>{var _;(_=y.onClick)==null||_.call(y),c()},"aria-pressed":!!y.isActive,children:[r.jsx(Do,{children:y.icon}),r.jsx(Kr,{children:y.label}),y.isActive&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},y.id)}if(m.type!=="group")return null;const x=m.group;return r.jsxs("div",{children:[r.jsx(Ga,{children:x.label}),x.children.map(y=>r.jsxs(Zr,{$active:y.isActive,$indent:!0,onClick:()=>{var _;(_=y.onClick)==null||_.call(y),c()},"aria-pressed":!!y.isActive,children:[r.jsx(Do,{children:y.icon}),r.jsx(Kr,{children:y.label}),y.isActive&&r.jsx(Qr,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})})]},y.id))]},x.id)})})]},p.id)})]},u.id))})})}const E1=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],Dj=b.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,Bj=b.main`
  flex: 1 1 auto;
  min-width: 0;
`;function Fj(t){const{activeId:a,selectedPersonaId:i,moduleGroups:l,primaryLabel:c,secondaryLabel:u,menuEntries:p,user:f,onUserClick:m,onMobileNavigate:x,onSelectPersona:y,children:_}=t,[w,$]=g.useState(null),N=aj({deadZonePx:8,topThresholdPx:20}),j=w===null&&N==="down",R=g.useMemo(()=>{if(!i)return null;const T=E1.find(I=>I.id===i);return(T==null?void 0:T.name)??null},[i]),L=()=>$(null),S=T=>$(T),k=w!==null;return r.jsxs(Dj,{children:[r.jsx(fj,{primaryLabel:c,secondaryLabel:u,tertiaryLabel:R,openOverlay:w,user:f,hidden:j,onHamburgerClick:()=>S("drawer"),onPrimaryClick:()=>S("primary"),onSecondaryClick:()=>S("secondary"),onTertiaryClick:R?()=>S("persona"):void 0,onSearchClick:()=>{S("drawer")},onUserClick:()=>m==null?void 0:m()}),r.jsx(Bj,{children:_}),k&&r.jsx(vj,{onDismiss:L}),w==="primary"&&r.jsx(Cj,{activeId:a,groups:l,onSelect:T=>{x(T),L()}}),w==="secondary"&&r.jsx(jj,{moduleLabel:c,entries:p,onSelect:L}),w==="persona"&&r.jsx(Lj,{personas:E1,activeId:i,onSelect:T=>{y(T),L()}}),w==="drawer"&&r.jsx(Oj,{activeId:a,groups:l,currentMenuEntries:p,onSelectModule:T=>x(T),onDismiss:L})]})}function Wj(t){if(Yk()&&t.mobileNav){const i=t.mobileNav;return r.jsx(Fj,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:t.menuEntries??[],user:t.user,onUserClick:t.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:t.children})}return r.jsx(oj,{...t})}const Hj="/Ultron/assets/policy-icon-active-CqCS8_ex.svg",qj="/Ultron/assets/automation-icon-active-DlguOjgR.svg",Yn=(t,a,i)=>Math.max(a,Math.min(i,t)),Gd=t=>(t=Yn(t,0,1),t*t*(3-2*t)),Go=t=>t>=48?1:t>=32?1.2:t>=24?1.5:t>=20?1.85:2.3;function $n(t){const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)}function jd(t){const a=(t||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(l=>l+l).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function P1(t,a,i){let l=i.trim();const c=l.match(/var\(\s*(--[^,)]+)/);if(c&&(l=getComputedStyle(a).getPropertyValue(c[1]).trim()||l),l.startsWith("#"))return jd(l);t.fillStyle="#000",t.fillStyle=l;const u=t.fillStyle;if(u.startsWith("#"))return jd(u);const p=u.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:"26,30,38"}function Uj(){const[t,a]=g.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return g.useEffect(()=>{var c;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const l=u=>a(u.matches);return(c=i.addEventListener)==null||c.call(i,"change",l),()=>{var u;return(u=i.removeEventListener)==null?void 0:u.call(i,"change",l)}},[]),t}function Vj(t){const[a,i,l]=t.split(",").map(Number);return(.299*a+.587*i+.114*l)/255}function Gj(t,a){return t==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:t==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:t==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const Wr=["234,54,38","246,112,44","252,172,54","255,212,76"],Yj="176,58,32",Zj="198,158,52";function Gn(t,a,i){const l=t.split(",").map(Number),c=a.split(",").map(Number);return l.map((u,p)=>Math.round(u+(c[p]-u)*i)).join(",")}function to(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,x=Math.min(c,u)*.39*.2*(.9+.14*Math.sin(a*1.5)),y=t.size<24,_=Yn(t.alert??0,0,1),w=(S,k)=>S+(k-S)*_,$=.85+.15*Math.sin(a*2.2);if(!y&&t.coreHalo){if(l.save(),i.glow&&_<1){l.globalAlpha=1-_;const S=l.createRadialGradient(p,f,0,p,f,x*3);S.addColorStop(0,"rgba("+i.core+",0.55)"),S.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=S,l.beginPath(),l.arc(p,f,x*3,0,6.2832),l.fill()}else if(!i.glow){const S=x*w(3.2,3),k=l.createRadialGradient(p,f,0,p,f,S);k.addColorStop(0,"rgba("+Gn(i.core,Wr[1],_)+","+w(.34,.85*$)+")"),k.addColorStop(.5,"rgba("+Gn(i.core,Wr[2],_)+","+w(.13,.42*$)+")"),k.addColorStop(1,"rgba("+Gn(i.core,Wr[3],_)+",0)"),l.fillStyle=k,l.beginPath(),l.arc(p,f,S,0,6.2832),l.fill()}l.restore()}const N=i.glow?1:.95,j=Math.max(.8,x*w(1,1.5)),R=x*.1*_;l.save(),l.filter="blur("+Math.max(.4,x*w(.22,.3)).toFixed(2)+"px)";const L=l.createRadialGradient(p-R,f-R,0,p,f,j);L.addColorStop(0,"rgba("+Gn(i.core,Wr[0],_)+","+w(N,1)+")"),L.addColorStop(.5,"rgba("+Gn(i.core,Wr[1],_)+","+w(N,1)+")"),L.addColorStop(.82,"rgba("+Gn(i.core,Wr[2],_)+","+w(N,.97)+")"),L.addColorStop(1,"rgba("+Gn(i.core,Wr[3],_)+","+w(N,.72)+")"),l.fillStyle=L,l.beginPath(),l.arc(p,f,j,0,6.2832),l.fill(),l.restore()}function c0(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",y=[[1.35,.3],[1.05,2.4]],_=a*(x?.5:.16),w=.42,$=Math.cos(w),N=Math.sin(w),j=Math.cos(_),R=Math.sin(_),L=m*.96,S=(U,Z,X)=>{const V=U*j+X*R,te=-U*R+X*j,ie=Z,ce=ie*$-te*N,J=(ie*N+te*$+1)/2,W=.82+.18*J;return{x:p+V*L*W,y:f+ce*L*W,d:J}},k=(U,Z,X)=>{const V=Math.cos(U),te=Math.sin(U)*Math.cos(Z),ie=Math.sin(U)*Math.sin(Z);return[V*Math.cos(X)+ie*Math.sin(X),te,-V*Math.sin(X)+ie*Math.cos(X)]};l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round",l.lineJoin="round";const T=t.size>=24?64:40,I=x?.9:.3,E=T,z=5.6,O=[];for(let U=0;U<y.length;U++){const Z=y[U][0],X=y[U][1],V=ce=>{const se=k(ce,Z,X);return S(se[0],se[1],se[2])},te=U%2?1:-1,ie=U*2+te*a*I;O.push({ptOf:V,head:ie,dir:te,hp:V(ie)})}O.sort((U,Z)=>U.hp.d-Z.hp.d);for(const U of O){const Z=Math.max(1.2,m*.05)*(.75+.35*U.hp.d),X=.66*(.45+.55*U.hp.d);l.save(),l.globalCompositeOperation="source-over",l.lineCap="butt",l.lineWidth=Z;let V=U.ptOf(U.head);for(let ce=1;ce<=E;ce++){const se=ce/E,J=1-se,W=X*J*J,P=U.ptOf(U.head-U.dir*se*z);W>.004&&(l.strokeStyle="rgba("+i.dot+","+W+")",l.beginPath(),l.moveTo(V.x,V.y),l.lineTo(P.x,P.y),l.stroke()),V=P}l.restore();const te=Math.max(.9,m*.062*Go(t.size)*(.65+.5*U.hp.d)),ie=.45+.55*U.hp.d;if(i.glow){const ce=l.createRadialGradient(U.hp.x,U.hp.y,0,U.hp.x,U.hp.y,te*4.5);ce.addColorStop(0,"rgba("+i.accent+","+.3*ie+")"),ce.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=ce,l.beginPath(),l.arc(U.hp.x,U.hp.y,te*4.5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,ie+.1)+")",l.beginPath(),l.arc(U.hp.x,U.hp.y,te,0,6.2832),l.fill()}to(t,a,i),l.restore()}function Kj(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",y=[m*.92],_=y.length,w=1,$=x?.9:.3,N=t.size>=24?56:36;l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over";for(let j=0;j<_;j++){const R=y[j],L=j%2?1:-1,S=6.2832/w,k=Math.min(5.6,S*.92);for(let T=0;T<w;T++){const I=j*2+L*a*$+T*S,E=p+Math.cos(I)*R,z=f+Math.sin(I)*R;l.save(),l.globalCompositeOperation="source-over",l.lineCap="butt",l.lineWidth=Math.max(1.2,m*.05);let O=E,U=z;for(let X=1;X<=N;X++){const V=X/N,te=.62*(1-V)*(1-V),ie=I-L*V*k,ce=p+Math.cos(ie)*R,se=f+Math.sin(ie)*R;te>.004&&(l.strokeStyle="rgba("+i.dot+","+te+")",l.beginPath(),l.moveTo(O,U),l.lineTo(ce,se),l.stroke()),O=ce,U=se}l.restore();const Z=Math.max(.9,m*.062*Go(t.size));if(i.glow){const X=l.createRadialGradient(E,z,0,E,z,Z*4.5);X.addColorStop(0,"rgba("+i.accent+",0.3)"),X.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=X,l.beginPath(),l.arc(E,z,Z*4.5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+",1)",l.beginPath(),l.arc(E,z,Z,0,6.2832),l.fill()}}to(t,a,i),l.restore()}function z1(t,a,i){const{ctx:l,w:c,h:u,dpr:p}=t,f=c/2,m=u/2,x=Math.min(c,u)*.39,y=t.state!=="idle",_=Yn(t.alert??0,0,1),w=x*.82,$=(J,W)=>Gn(i.dot,Gn(Yj,Zj,Yn(Math.hypot(J-f,W-m)/w,0,1)),_),N=t.size>=120,j=N?22:t.size>=32?10:t.size>=20?7:5,R=y?a*.55:a*.22,L=Math.cos(R),S=Math.sin(R),k=.42,T=Math.cos(k),I=Math.sin(k);if(l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",N&&i.glow){const J=l.createRadialGradient(f,m,0,f,m,x*1.02);J.addColorStop(0,"rgba("+i.accent+",0.10)"),J.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=J,l.beginPath(),l.arc(f,m,x*1.02,0,6.2832),l.fill()}const E=[];for(let J=0;J<j;J++){const W=1-(J+.5)/j*2,P=Math.sqrt(Math.max(0,1-W*W)),D=J*2.39996,C=Math.cos(D)*P,A=W,Q=Math.sin(D)*P,ne=C*L+Q*S,G=-C*S+Q*L,ue=A*T-G*I,K=A*I+G*T,re=(K+1)/2,fe=.82+.18*re;E.push({x:f+ne*w*fe,y:m+ue*w*fe,d:re,k:J,vec:[ne,ue,K]})}E.sort((J,W)=>J.d-W.d);const z=J=>{const W=(J[2]+1)/2,P=.82+.18*W;return{x:f+J[0]*w*P,y:m+J[1]*w*P,d:W}},O=(J,W,P)=>{let D=J[0]*W[0]+J[1]*W[1]+J[2]*W[2];D=Yn(D,-1,1);const C=Math.acos(D);if(C<.001)return[J[0],J[1],J[2]];const A=Math.sin(C),Q=Math.sin((1-P)*C)/A,ne=Math.sin(P*C)/A;return[J[0]*Q+W[0]*ne,J[1]*Q+W[1]*ne,J[2]*Q+W[2]*ne]},U={};for(const J of E)U[J.k]=J;const X=a*(y?1.4:.5),V=Math.floor(X),te=X-V,ie=5,ce=12;l.lineCap="round",l.lineJoin="round";const se=N?[{seed:1.7},{seed:9.3},{seed:21.5},{seed:34.8},{seed:48.2}]:[{seed:1.7},{seed:9.3},{seed:21.5},{seed:34.8}];for(const J of se){const W=D=>{const C=Math.sin(D*12.9898+J.seed)*43758.5453;return Math.floor((C-Math.floor(C))*j)},P=D=>{let C=W(D);return C===W(D-1)&&(C=(C+1)%j),U[C]};for(let D=ie-1;D>=0;D--){const C=V-D;if(C<0)continue;const A=P(C),Q=P(C+1);if(!A||!Q||A===Q)continue;const ne=D===0?te:1,G=z(O(A.vec,Q.vec,ne)),ue=(A.d+G.d)/2,K=D===0?1:Yn(1-(D-1+te)/(ie-1),0,1),re=(i.glow?.6:.72)*K*(.4+.6*ue);if(re<.02)continue;const fe=l.createLinearGradient(A.x,A.y,G.x,G.y);fe.addColorStop(0,"rgba("+$(A.x,A.y)+",0)"),fe.addColorStop(1,"rgba("+$(G.x,G.y)+","+re+")"),l.strokeStyle=fe,l.lineWidth=(N?Math.max(1.1*p,x*.018):Math.max(1.2,x*.045))*(.7+.4*ue),l.beginPath();for(let we=0;we<=ce;we++){const he=z(O(A.vec,Q.vec,ne*(we/ce)));we===0?l.moveTo(he.x,he.y):l.lineTo(he.x,he.y)}l.stroke()}}for(const J of E){const W=.5+.5*Math.sin(a*2-J.k*.9),P=(.18+.82*J.d)*(.62+.38*W),D=N?Math.max(.5,(.9+.9*J.d)*p*(.85+.15*W)):x*.058*Go(t.size)*(.6+.5*J.d);if(i.glow){const C=D*4,A=l.createRadialGradient(J.x,J.y,0,J.x,J.y,C);A.addColorStop(0,"rgba("+i.accent+","+.24*P+")"),A.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=A,l.beginPath(),l.arc(J.x,J.y,C,0,6.2832),l.fill()}l.fillStyle="rgba("+$(J.x,J.y)+","+(.32+.68*P)+")",l.beginPath(),l.arc(J.x,J.y,Math.max(.9,D),0,6.2832),l.fill()}if(N){const J=y?1:.4;for(let W=0;W<46;W++){const P=$n(W*5.1)<.5?-1:1,D=$n(W*1.7)*6.2832+a*(.3+$n(W*3.1)*.6)*P*J,C=x*(.04+.05*$n(W*4.7))*Math.sin(a*(.8+$n(W*6)*1)+$n(W*7)*6.28),A=x*(.5+$n(W*2.3)*.5)+C,Q=f+Math.cos(D)*A,ne=m+Math.sin(D)*A,G=.3+.7*(.5+.5*Math.sin(a*(1.4+$n(W)*2)+$n(W*2)*6.28)),ue=Math.max(.5,(.4+$n(W*8)*1)*p*(.55+.6*G));if(i.glow){const K=ue*6,re=l.createRadialGradient(Q,ne,0,Q,ne,K);re.addColorStop(0,"rgba("+i.accent+","+G*.18+")"),re.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=re,l.beginPath(),l.arc(Q,ne,K,0,6.2832),l.fill()}l.fillStyle="rgba("+$(Q,ne)+","+G*(i.glow?.8:.42)+")",l.beginPath(),l.arc(Q,ne,ue,0,6.2832),l.fill()}}to(t,a,i),l.restore()}function Qj(t,a,i){const{ctx:l,w:c,h:u,dpr:p}=t,f=c/2,m=u/2,x=Math.min(c,u)*.39,y=t.state!=="idle",_=t.size>=32?11:7,w=x*.12,$=x*.12,N=Gd(.5+.5*Math.sin(a*(y?1:.55))),j=y?.34+.66*N:.5+.12*N,R=Math.max(1*p,x*.052),L=-a*(y?.5:.16),S=Math.cos(L),k=Math.sin(L),T=.42,I=Math.cos(T),E=Math.sin(T);l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const z=x*(.52+.44*j),O=Math.max(w+R,z-$),U=[];for(let Z=0;Z<_;Z++){const X=1-(Z+.5)/_*2,V=Math.sqrt(Math.max(0,1-X*X)),te=Z*2.39996,ie=Math.cos(te)*V,ce=X,se=Math.sin(te)*V,J=ie*S+se*k,W=-ie*k+se*S,P=ce*I-W*E,C=(ce*E+W*I+1)/2,A=.82+.18*C,Q=.5+.5*Math.sin(a*1.6+Z*1.3);U.push({x0:f+J*w*A,y0:m+P*w*A,x1:f+J*O*A,y1:m+P*O*A,cx2:f+J*z*A,cy2:m+P*z*A,d:C,shim:Q})}U.sort((Z,X)=>Z.d-X.d);for(const Z of U){const X=(y?.4+.45*j:.6)*(.4+.6*Z.d)*(.78+.22*Z.shim),V=l.createLinearGradient(Z.x0,Z.y0,Z.x1,Z.y1);V.addColorStop(0,"rgba("+i.dot+","+X+")"),V.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=V,l.lineWidth=R*(.7+.5*Z.d),l.beginPath(),l.moveTo(Z.x0,Z.y0),l.lineTo(Z.x1,Z.y1),l.stroke();const te=Math.max(.9,x*.058*Go(t.size)*(.85+.3*j)*(.6+.5*Z.d));if(i.glow){const ie=l.createRadialGradient(Z.cx2,Z.cy2,0,Z.cx2,Z.cy2,te*5);ie.addColorStop(0,"rgba("+i.accent+","+.26*X+")"),ie.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=ie,l.beginPath(),l.arc(Z.cx2,Z.cy2,te*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,X+.1)+")",l.beginPath(),l.arc(Z.cx2,Z.cy2,te,0,6.2832),l.fill()}to(t,a,i),l.restore()}function Xj(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",y=t.size>=32?58:t.size>=20?32:18,_=m*.78,w=x?a*.5:a*.2,$=Math.cos(w),N=Math.sin(w),j=.42,R=Math.cos(j),L=Math.sin(j),S=x?1:.4,k=(z,O)=>[Math.sin(z)*Math.cos(O),Math.cos(z),Math.sin(z)*Math.sin(O)],T=[k(1.4+.5*Math.sin(a*.5*S),a*.6*S),k(1.9+.4*Math.cos(a*.4*S),-a*.5*S+2)],I=.36;l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over";const E=[];for(let z=0;z<y;z++){const O=1-(z+.5)/y*2,U=Math.sqrt(Math.max(0,1-O*O)),Z=z*2.39996,X=Math.cos(Z)*U,V=O,te=Math.sin(Z)*U;let ie=0;for(const C of T){const A=X-C[0],Q=V-C[1],ne=te-C[2];ie+=Math.exp(-(A*A+Q*Q+ne*ne)/(2*I*I))}ie=Yn(ie,0,1);const ce=X*$+te*N,se=-X*N+te*$,J=V*R-se*L,P=(V*L+se*R+1)/2,D=.82+.18*P;E.push({x:p+ce*_*D,y:f+J*_*D,d:P,inf:ie})}E.sort((z,O)=>z.d-O.d);for(const z of E){const O=Gd(z.inf),U=Math.max(.6,m*(.05+.06*O)*Go(t.size)*(.55+.5*z.d)),Z=(.16+.84*z.d)*(.45+.55*O),X=Math.abs(2*z.d-1),V=Math.atan2(z.y-f,z.x-p);l.fillStyle="rgba("+i.dot+","+Z+")",l.beginPath(),l.ellipse(z.x,z.y,Math.max(.35,U*X),U,V,0,6.2832),l.fill()}to(t,a,i),l.restore()}function Jj(t,a,i){const{ctx:l,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",y=t.size>=32?8:t.size>=20?6:5,_=m*.9,w=x?1:.4,$=a*(x?.3:.12),N=a*1*w,j=-a*.7*w+2.2,R=.72,L=(S,k)=>{const T=((S-k+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(T)};l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over";for(let S=0;S<y;S++){const k=S/y*6.2832+$;let T=Math.exp(-(L(k,N)**2)/(2*R*R))+Math.exp(-(L(k,j)**2)/(2*R*R));T=Yn(T,0,1);const I=Gd(T),E=p+Math.cos(k)*_,z=f+Math.sin(k)*_,O=Math.max(.6,m*(.05+.07*I)*Go(t.size)),U=.38+.62*I;if(i.glow&&I>.25){const Z=l.createRadialGradient(E,z,0,E,z,O*4);Z.addColorStop(0,"rgba("+i.accent+","+.24*I+")"),Z.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=Z,l.beginPath(),l.arc(E,z,O*4,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+U+")",l.beginPath(),l.arc(E,z,O,0,6.2832),l.fill()}to(t,a,i),l.restore()}function eS(t,a,i){to(t,a,i)}const tS={orbit:c0,orbit2d:Kj,circle:z1,lines:Qj,magnetic:Xj,magnetic2d:Jj,pulse:eS,bands:z1};function $t({mark:t="orbit",size:a=16,tone:i="auto",state:l="active",motionSpeed:c=1,accent:u="#96B9FF",color:p,coreHalo:f=!0,coreGradient:m=!1,className:x,"aria-label":y}){const _=g.useRef(null),w=Uj(),$=g.useRef(0),N=g.useRef(0);return N.current=m?1:0,g.useEffect(()=>{const j=_.current;if(!j)return;const R=j.getContext("2d");if(!R)return;const L=Math.min(2,window.devicePixelRatio||1),S=Math.max(2,Math.round(a*L)),k=S;j.width=S,j.height=k;const T={ctx:R,w:S,h:k,dpr:L,size:a,state:l,coreHalo:f,alert:$.current},I=i==="auto"?Vj(P1(R,j,"var(--color-bg-primary)"))<.5?"dark":"light":i,E=Gj(I,jd(u));if(p){const te=P1(R,j,p);E.dot=te,E.core=te}const z=tS[t]??c0,O=te=>{$.current+=(N.current-$.current)*.06,Math.abs($.current-N.current)<.001&&($.current=N.current),T.alert=$.current,R.clearRect(0,0,S,k),z(T,l==="static"?.62:te,E)},U=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),Z=Yn(c,.4,3);if((U||l==="static")&&($.current=N.current),O(1.15),U||l==="static")return;let X=0;const V=te=>{O(te/1e3*Z),X=requestAnimationFrame(V)};return X=requestAnimationFrame(V),()=>cancelAnimationFrame(X)},[t,a,i,l,c,u,p,f,m,w]),r.jsx("canvas",{ref:_,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:x,role:"img","aria-label":y})}const Ns={high:0,medium:1,low:2,none:3};b.span`
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
`;function nS(t,a){if(a)return"Ultron is replying…";switch(t){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const d0=t=>t.status==="workflow_available"||t.status==="resolved"&&t.workflowOpportunity!=null,u0=t=>/^(review|adjust|revisit|update)\b/i.test(t),rS=["Revisit","Update","Resolve"],oS=t=>/,|\sand\s/.test(t),aS="Approve all",Rs="Yes",h0=t=>{const i=t.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(l=>l.trim()).filter(Boolean);return i.length<2?[]:i.map(l=>l.charAt(0).toUpperCase()+l.slice(1))};b.section`
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
`;const ad=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],Ls={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},p0={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function iS(t){const a=p0[t];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function sS(t){const a=Ls[t.id];if(!a||t.title.startsWith(a))return t.title;const i=t.title.split(" ")[0]??"",c=i===i.toUpperCase()?t.title:t.title.charAt(0).toLowerCase()+t.title.slice(1);return`${a} ${c}`}const f0={missed_clockin_james:"james_okoro_2"},m0=t=>`https://i.pravatar.cc/80?u=${f0[t]??t}`,Yo=t=>`https://i.pravatar.cc/80?u=${f0[t]??t}`,lS={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},cS=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],g0=t=>lS[t]??cS,v0={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},O1={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Zd={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},dS={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Kd={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},uS={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},hS={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},id={detected:t=>t.event,assessment:t=>t.assessment,recommendation:t=>t.recommendation,approval:t=>t.recommendation,execution:t=>t.recommendation,resolution:t=>t.outcome??t.recommendation,monitoring:t=>t.assessment,workflow:t=>t.workflowOpportunity??t.recommendation};function y0(t){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return uS[t.id]??t.timeline.map(i=>{var u;const l=((u=id[i.state])==null?void 0:u.call(id,t))??t.assessment,c=l!=null&&a(l)===a(i.headline);return{icon:hS[i.state]??"clock",headline:i.headline,blocks:l&&!c?[{text:l}]:void 0}})}const xt=(t,a,i)=>({name:t,match:a,distance:i}),ze=(t,a,i,l,c)=>({seed:t,name:a,preview:i,status:l,tone:c}),D1=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],pS=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],fS=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],mS=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],gS={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:D1,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[xt("Jordan Pierce","4.9 match","3.2 mi"),xt("Aisha Karim","4.7 match","5.1 mi"),xt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:"An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",total:20,threads:[ze("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive"),ze("jordan_pierce","Jordan Pierce","Delivered · no reply yet","Delivered","muted"),ze("marcus_lewis","Marcus Lewis","Delivered · no reply yet","Delivered","muted")]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:pS,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[xt("Renee Wallace","4.9 match","2.4 mi"),xt("Carl Jensen","4.6 match","4.1 mi"),xt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[ze("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),ze("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),ze("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:fS,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[xt("Dane Mercer","4.8 match","2.1 mi"),xt("Omar Reyes","4.6 match","3.7 mi"),xt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[ze("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),ze("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),ze("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:mS,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[xt("Jamal Carter","4.7 match","1.8 mi"),xt("Sara Lindqvist","4.6 match","2.9 mi"),xt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[ze("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),ze("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),ze("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[xt("Theo Park","4.7 match","1.9 mi"),xt("Gina Holt","4.5 match","3.3 mi"),xt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[ze("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[ze("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),ze("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),ze("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[xt("Carl Jensen","4.7 match","2.6 mi"),xt("Tina Boyd","4.5 match","3.9 mi"),xt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[ze("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),ze("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),ze("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[ze("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[ze("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[ze("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[ze("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[ze("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[ze("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[ze("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[ze("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[ze("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),ze("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),ze("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:D1,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[ze("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),ze("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},vS={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},yS=t=>/in-app/i.test(t)?"in_app":/sms/i.test(t)?"sms":"auto",B1=t=>/in-app/i.test(t)?"In-app":/sms/i.test(t)?"SMS":"Preferred channel",F1=t=>t.split(/\s*\+\s*/).map(a=>a.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),xS={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Sd=t=>{const[a,...i]=t.split(" "),l=xS[a];return l?`Will ${l} ${i.join(" ")}`:t};function wS(t,a){if(t==="policy"&&a.policy){const c=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:c?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${c.total} ${c.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${yS(i.name)}", template="shift_offer", to=matched)`,summary:`${Sd(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const l=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0;return l?{query:`engage.notify(to="${l.name}", via="${l.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Sd(l.description)} (${l.name} · ${l.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function _S(t,a,i,l){var $,N,j,R;if(t==="read"){const L=(($=a.update)==null?void 0:$.recordType)??((N=a.updateClose)==null?void 0:N.recordType);if(!L)return null;const S=L.toLowerCase(),k=[{label:"Type",value:L},{label:"Time",value:((j=p0[l])==null?void 0:j.shiftTime)??""},{label:"User",value:Ls[l]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${L}`,description:`Pulled the current ${S} record before planning`,query:`read_data(record="${L}") → current_state`,recordDetails:k,summary:`Read the ${S}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(t==="match"||t==="credential"||t==="incentive"){const L=(R=a.policy)==null?void 0:R.eligible;if(!L)return null;const S=L.unit.replace(/^eligible\s+/i,"");if(t==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${S} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${L.total} ${L.unit}.`};if(t==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const k=L.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${L.total}) → suggestion`,summary:k?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:k?{add:!1,amount:"No bonus",rationale:`${L.total} qualified ${S} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${L.total} qualified ${S} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(t==="task"){if(!a.task)return null;const{description:L,query:S,fields:k}=a.task;return{icon:"task",name:"Tasks",description:L,query:S,task:{fields:k}}}if(t==="update"||t==="update-close"){const L=t==="update"?a.update:a.updateClose;if(!L)return null;const{description:S,...k}=L;return{icon:"record",name:"Update Data",description:S,updateData:k}}const c=t==="notify"||t==="notify-scheduler",u=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0,p=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(!(t==="policy"&&a.policy||!!p||!!u))return null;const m=t==="policy"?"Policy Engine":c?"Engage: Notification":p.name,x=t==="policy"?a.policy.description:c?u.description:p.description,y=t==="policy"?"shield":c?"bell":"message";if(i==="planning"){const L=t==="policy"?x:Sd(x),S={icon:y,name:m,description:L,...wS(t,a)};return c?{...S,channel:F1(u.channel),message:u.message}:p?{...S,channel:B1(p.name),message:p.message}:t==="policy"?{...S,policies:{total:a.policy.policiesTotal,items:a.policy.policies}}:S}if(t==="policy")return{icon:y,name:m,description:x,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(p)return{icon:y,name:m,description:x,channel:B1(p.name),message:p.message,threads:{total:p.total,moreNoun:"threads",items:p.threads}};const{description:_,...w}=u;return{icon:y,name:m,description:x,channel:F1(u.channel),notification:w}}function x0(t,a,i="execution"){const l=gS[t];return l?a.map(c=>_S(c,l,i,t)).filter(c=>c!==null):[]}const bS=t=>t.tools??vS[t.icon]??["policy"],vs=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function kS(t){return{id:`detected_${t.id}`,name:t.name,title:t.title,capability:t.capability,status:"analyzing",severity:t.severity??"high",event:t.title.endsWith(".")?t.title:`${t.title}.`,assessment:t.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:t.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:t.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const w0={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},W1=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function CS(t,a){return W1[a%W1.length]}function jS(t){return t===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function SS(t){return t>=90?"green":t>=80?"blue":t>=70?"orange":"slate"}function _0({record:t}){const a=t.meta.find(c=>/^\d+%\s*match$/i.test(c)),i=a?parseInt(a,10):null,l=a?t.meta.filter(c=>c!==a):t.meta;return r.jsxs(NS,{children:[r.jsx(In,{size:"md",src:m0(t.avatarSeed),name:t.title,alt:t.title}),r.jsxs(RS,{children:[r.jsx(LS,{children:t.title}),r.jsx($S,{children:[t.eyebrow,...l].join(" · ")})]}),i!=null&&r.jsxs(MS,{"data-tone":SS(i),children:[i,"% match"]}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(Ed,{size:16})})]})}const NS=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,RS=b.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,LS=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,$S=b.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,MS=b.span`
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
`,H1=t=>t.id.startsWith("detected_"),q1=5400,U1=1100;function TS(t,a){switch(a.type){case"detect":return t.some(i=>i.id===a.thread.id)?t:[a.thread,...t];case"decide":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return t.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return t.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:w0[i.id]??i.outcome}:i)}}const AS=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function IS(){const[t,a]=g.useReducer(TS,ad),[i,l]=g.useState(()=>{var D;const P=ad.find(C=>C.status==="needs_approval"||C.status==="recommended");return(P==null?void 0:P.id)??((D=ad[0])==null?void 0:D.id)??null}),[c,u]=g.useState([]),p=P=>{l(P),u(D=>D.includes(P)?D:[...D,P])},f=g.useMemo(()=>{const P=t.map((D,C)=>({item:D,index:C}));return AS.map(D=>({id:D.id,label:D.label,threads:P.filter(C=>D.statuses.includes(C.item.status)).sort((C,A)=>(C.item.status==="analyzing"?1:0)-(A.item.status==="analyzing"?1:0)||(H1(A.item)?1:0)-(H1(C.item)?1:0)||Ns[C.item.severity]-Ns[A.item.severity]||C.index-A.index).map(C=>C.item)}))},[t]),m=t.find(P=>P.id===i)??null,[x,y]=g.useState({}),_=i?x[i]??0:0,[w,$]=g.useState([]),[N,j]=g.useState({}),[R,L]=g.useState({}),[S,k]=g.useState([]),T=g.useRef({}),[I,E]=g.useState([]),z=P=>{E(D=>D.includes(P)?D.filter(C=>C!==P):[...D,P])},[O,U]=g.useState([]),Z=P=>{U(D=>D.includes(P)?D:[...D,P])};return{threads:t,groups:f,selectedId:i,selectedThread:m,selectedStage:_,stageById:x,viewedIds:c,analyzedIds:w,outboundByThread:N,chatByThread:R,replyingIds:S,setSelectedId:p,detectRisk:P=>{a({type:"detect",thread:kS(P)})},decide:P=>{p(P),$(D=>D.includes(P)?D:[...D,P]),a({type:"decide",threadId:P})},commit:(P,D)=>{p(P),j(C=>({...C,[P]:[...C[P]??[],D]})),a({type:"commit",threadId:P})},completeRun:P=>{const D=x[P]??0,C=Zd[P];D===0&&C?(y(A=>({...A,[P]:1})),a({type:"reopen",threadId:P})):(a({type:"resolve",threadId:P}),I.includes(P)&&(Z(P),E(A=>A.filter(Q=>Q!==P))))},sendMessage:(P,D)=>{const C=D.trim();if(!C)return;p(P),L(Q=>({...Q,[P]:[...Q[P]??[],{role:"operator",text:C}]})),k(Q=>Q.includes(P)?Q:[...Q,P]);const A=window.setTimeout(()=>{L(Q=>{const ne=Q[P]??[],G=ne.filter(ue=>ue.role==="ultron").length;return{...Q,[P]:[...ne,{role:"ultron",text:CS(C,G)}]}}),k(Q=>Q.filter(ne=>ne!==P)),delete T.current[P]},U1);T.current[P]=A},stopReply:P=>{const D=T.current[P];D&&(window.clearTimeout(D),delete T.current[P]),k(C=>C.filter(A=>A!==P))},refine:P=>{},saveWorkflow:P=>{const D=P.id;p(D),L(A=>({...A,[D]:[...A[D]??[],{role:"operator",text:"Save as workflow"}]})),k(A=>A.includes(D)?A:[...A,D]);const C=window.setTimeout(()=>{L(A=>({...A,[D]:[...A[D]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),Z(D),k(A=>A.filter(Q=>Q!==D)),delete T.current[D]},U1);T.current[D]=C},pendingWorkflowIds:I,toggleWorkflowSave:z,savedWorkflowIds:O,markWorkflowSaved:Z}}const ES={search:Eo,read:Td,message:Cs,policy:Ur,shield:Ur,schedule:Ur,analytics:Gf,clock:br,monitor:Bs,bell:Cs,record:zo,task:Ur},PS=t=>t.icon==="shield"||t.icon==="policy",zS={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},OS=t=>t.updateData?`Update Data: ${t.updateData.recordType}`:zS[t.icon]??t.name,DS=t=>t.tone==="positive"?"success":"neutral";const BS=b(lm)`
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
`,Qd=240;function FS({open:t,onClose:a,title:i="Run details",usage:l}){const[c,u]=g.useState(()=>l.length?"0":""),[p,f]=g.useState(t),[m,x]=g.useState(!1);if(g.useEffect(()=>{if(t){f(!0);let N=0;const j=requestAnimationFrame(()=>{N=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(j),cancelAnimationFrame(N)}}x(!1);const $=setTimeout(()=>f(!1),Qd);return()=>clearTimeout($)},[t]),!p)return null;const y=l.length,_=`${y} ${y===1?"tool":"tools"} used · tap any to see its query and results`,w=l.map(($,N)=>({entry:$,index:N}));return Es.createPortal(r.jsxs(QS,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(XS,{$shown:m,onClick:a}),r.jsxs(JS,{$shown:m,children:[r.jsxs(eN,{children:[r.jsxs(tN,{children:[r.jsx(nN,{children:i}),r.jsx(rN,{children:_})]}),r.jsx(Te,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(tm,{size:18})})]}),r.jsxs(oN,{children:[r.jsx(aN,{"aria-hidden":"true"}),r.jsx(sm,{type:"single",collapsible:!0,value:c,onValueChange:$=>u(typeof $=="string"?$:""),children:w.map(({entry:$,index:N})=>{const j=$.updateData?Jf:PS($)?Qf:ES[$.icon];return r.jsx(BS,{value:String(N),label:OS($),description:$.description,chevronPosition:"trailing",leadingSlot:r.jsx(In,{shape:"square",variant:"subtle",color:"neutral",size:"md",icon:r.jsx(j,{size:18}),"aria-hidden":"true",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),children:r.jsx(iN,{children:r.jsx(WS,{entry:$})})},N)})})]})]})]}),document.body)}function WS({entry:t}){return r.jsxs(r.Fragment,{children:[t.channel&&r.jsxs(un,{children:[r.jsx(tn,{children:"Channel"}),r.jsx(K1,{children:t.channel})]}),t.message&&r.jsxs(un,{children:[r.jsx(tn,{children:"Message"}),r.jsx(G1,{children:t.message})]}),t.recordDetails&&r.jsxs(un,{children:[r.jsx(tn,{children:"Record details"}),r.jsx(sd,{children:t.recordDetails.map((a,i)=>r.jsx(nn,{size:"sm",label:a.label,trailingSlot:r.jsx(ld,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),t.policies&&r.jsxs(un,{children:[r.jsx(tn,{children:`Policies evaluated · ${t.policies.total}`}),r.jsx(fN,{children:t.policies.items.map((a,i)=>r.jsxs(mN,{children:[r.jsx(gN,{"aria-hidden":"true",children:r.jsx(Pt,{size:16})}),r.jsx("span",{children:a})]},i))})]}),t.eligible&&r.jsxs(un,{children:[r.jsx(tn,{children:`Returned · ${t.eligible.total} ${t.eligible.unit}`}),r.jsx(HS,{candidates:t.eligible.items,total:t.eligible.total,moreNoun:t.eligible.moreNoun})]}),t.threads&&r.jsxs(un,{children:[r.jsx(tn,{children:`Threads · ${t.threads.total}`}),r.jsx(ZS,{threads:t.threads})]}),t.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(un,{children:[r.jsx(tn,{children:"Recipient"}),r.jsx(vN,{children:r.jsx(nn,{size:"md",divider:!1,leadingSlot:r.jsx(In,{size:"sm",src:Yo(t.notification.seed),name:t.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:t.notification.name,description:t.notification.role,trailingSlot:r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${t.notification.name}'s profile`,children:r.jsx(Fs,{size:14})})})})]}),r.jsxs(un,{children:[r.jsx(tn,{children:"Message"}),r.jsx(G1,{children:t.notification.message})]})]}),t.task&&r.jsxs(un,{children:[r.jsx(tn,{children:"Task"}),r.jsx(sd,{children:t.task.fields.map((a,i)=>r.jsx(nn,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?r.jsx(qa,{status:"success",size:"sm",children:a.value}):r.jsx(ld,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),t.updateData&&r.jsxs(un,{children:[r.jsx(tn,{children:"Record details"}),(t.updateData.groups??[t.updateData.fields??[]]).map((a,i)=>r.jsx(sd,{children:a.map((l,c)=>r.jsx(nn,{size:"sm",label:l.label,trailingSlot:l.emphasis==="change"&&l.previousValue?r.jsxs(qS,{children:[r.jsx(US,{children:l.previousValue}),r.jsx(VS,{"aria-hidden":"true",children:"→"}),r.jsx(GS,{children:l.value})]}):l.emphasis==="success-tag"?r.jsx(qa,{status:"success",size:"sm",children:l.value}):r.jsx(ld,{$success:l.emphasis==="success",$placeholder:!l.value,children:l.value||"???"})},c))},i))]}),t.recommendation&&r.jsxs(un,{children:[r.jsx(tn,{children:"Recommendation"}),r.jsxs(yN,{children:[r.jsxs(Y1,{children:[r.jsx(Z1,{children:"Incentive?"}),r.jsx(xN,{$add:t.recommendation.add,children:t.recommendation.add?t.recommendation.amount:"No bonus"})]}),r.jsxs(Y1,{children:[r.jsx(Z1,{children:"Reason"}),r.jsx(wN,{children:t.recommendation.rationale})]})]})]}),t.query&&r.jsx(V1,{label:"Query",children:r.jsx(cN,{children:t.query})}),t.summary&&r.jsx(V1,{label:"What it does",children:r.jsx(K1,{children:t.summary})})]})}function V1({label:t,children:a}){const[i,l]=g.useState(!1);return r.jsxs(un,{children:[r.jsxs(sN,{type:"button","aria-expanded":i,onClick:()=>l(c=>!c),children:[r.jsx(tn,{children:t}),r.jsx(lN,{"data-open":i||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:14})})]}),i&&a]})}function HS({candidates:t,total:a,moreNoun:i}){var y;const[l,c]=g.useState(!1),u=t.slice(0,3),p=a-u.length,f=parseFloat(((y=u[u.length-1])==null?void 0:y.match)??"4.5"),m=l?Array.from({length:p},(_,w)=>YS(w,f)):[],x=[...u,...m];return r.jsxs(r.Fragment,{children:[r.jsx(Xd,{children:x.map((_,w)=>r.jsx(nn,{size:"sm",leadingSlot:r.jsx(In,{size:"sm",src:Yo(_.name),name:_.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:_.name,trailingSlot:r.jsx(hN,{children:`${_.match} · ${_.distance}`})},w))}),p>0&&r.jsx(b0,{type:"button",onClick:()=>c(_=>!_),"aria-expanded":l,children:l?`Show fewer ${i}`:`+${p} more ${i}`})]})}const Xd=b.div`
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
`,sd=b(Xd)`
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
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${t=>t.$placeholder?"var(--color-content-disabled)":t.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,qS=b.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,US=b.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,VS=b.span`
  color: var(--color-content-tertiary);
`,GS=b.span`
  color: var(--color-success-content);
`,$s=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Ms=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function YS(t,a){const i=$s[t%$s.length],l=Ms[(t*7+3)%Ms.length],c=Math.max(3,a-(t+1)*.1),u=(4+t*13%90/10).toFixed(1);return{name:`${i} ${l}`,match:`${c.toFixed(1)} match`,distance:`${u} mi`}}function ZS({threads:t}){const[a,i]=g.useState(!1),l=t.items.slice(0,3),c=t.total-l.length,u=a?Array.from({length:c},(f,m)=>KS(m)):[],p=[...l,...u];return r.jsxs(r.Fragment,{children:[r.jsx(Xd,{children:p.map((f,m)=>r.jsx(nn,{size:"md",interactive:!0,onClick:()=>void 0,leadingSlot:r.jsx(In,{size:"sm",src:Yo(f.seed),name:f.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:f.name,description:f.preview,trailingSlot:r.jsxs(pN,{children:[r.jsx(qa,{status:DS(f),size:"sm",children:f.status}),r.jsx(Gt,{size:16})]})},m))}),c>0&&r.jsx(b0,{type:"button",onClick:()=>i(f=>!f),"aria-expanded":a,children:a?`Show fewer ${t.moreNoun}`:`+${c} more ${t.moreNoun}`})]})}function KS(t){const a=$s[t%$s.length],i=Ms[(t*7+3)%Ms.length],l=`${a} ${i}`;return{seed:l,name:l,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const QS=b.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,XS=b.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${t=>t.$shown?.45:0};
  transition: opacity ${Qd}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,JS=b.div`
  position: relative;
  width: min(460px, 92vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border-opaque);
  box-shadow: var(--shadow-below-high);
  /* Slides in from the right edge on open, back out on close. */
  transform: translateX(${t=>t.$shown?"0":"100%"});
  transition: transform ${Qd}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,eN=b.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,tN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,nN=b.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,rN=b.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,oN=b.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,aN=b.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,iN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,un=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,sN=b.button`
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
`,lN=b.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;function cN({children:t}){const[a,i]=g.useState(!1),l=()=>{var c;(c=navigator.clipboard)==null||c.writeText(t),i(!0),window.setTimeout(()=>i(!1),1600)};return r.jsxs(dN,{children:[r.jsx(uN,{children:t}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:l,children:a?r.jsx(Pt,{size:14}):r.jsx(Xf,{size:14})})]})}const dN=b.div`
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
`,uN=b.pre`
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
`,hN=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,pN=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,b0=b.button`
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
`,fN=b.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,mN=b.li`
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
`,gN=b.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,G1=b.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,vN=b.div`
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
`,yN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,Y1=b.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,Z1=b.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,xN=b.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${t=>t.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,wN=b.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,K1=b.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function _N({milestones:t}){return r.jsx(MN,{children:t.map((a,i)=>r.jsx(SN,{milestone:a,last:i===t.length-1},i))})}function k0({milestones:t,typingIndex:a,focusIndex:i,focusBeat:l,collapsed:c,hideActions:u,running:p,animateIn:f,showConnectors:m,reasoning:x}){return r.jsx(kN,{milestones:t,typingIndex:a,focusIndex:i,focusBeat:l,hideActions:u,running:p,defaultCollapsed:c,animateIn:f,showConnectors:m,reasoning:x})}const bN=1;function kN({milestones:t,typingIndex:a,focusIndex:i,focusBeat:l,hideActions:c,running:u,animateIn:p=!0,showConnectors:f=!0,defaultCollapsed:m=!1,reasoning:x=!1}){const[y,_]=g.useState(!1),j=m||x&&!u?t.length:u&&typeof i=="number"?t.length>2?Math.min(Math.max(0,i),t.length-1):0:u?0:Math.max(0,t.length-bN),R=j>0,L=R&&!y?j:0,S=t.slice(0,j).map(T=>T.headline).join(" · "),k=t.length>0&&L>=t.length;return r.jsx(AN,{$animate:p,children:r.jsxs(EN,{$compact:k,children:[R&&r.jsx(J1,{$tight:!0,$last:k,$connected:f,children:r.jsxs(S0,{type:"button","aria-expanded":y,onClick:()=>_(T=>!T),children:[r.jsx(YN,{"aria-hidden":"true",children:r.jsx(zd,{size:16})}),r.jsx(ZN,{children:y?"Show fewer steps":S})]})}),t.slice(L).map((T,I)=>{var V,te;const E=L+I,z=u&&typeof i=="number"&&E>i,O=u&&typeof i=="number"&&E===i,U=!u||typeof i!="number"||E<i-1?"done":E===i-1?"working":"upcoming",Z=!!((V=T.progress)!=null&&V.length),X=E===t.length-1;return r.jsxs(J1,{$tight:!Z,$last:X,$connected:f,children:[f&&!X&&U!=="upcoming"&&r.jsx(zN,{"aria-hidden":"true",$state:U,$tight:!Z,$superseded:m}),r.jsx(j0,{milestone:T,last:!0,collapsible:!0,placeholder:z,focused:O,progressBeat:O?l:void 0,superseded:m,typing:E===a,extra:!z&&((te=T.usage)!=null&&te.length)?r.jsx(jN,{usage:T.usage,title:T.headline}):void 0,icon:r.jsx(C0,{icon:T.icon,loading:a===E||O||u&&typeof i!="number"&&E===t.length-1,placeholder:z,muted:m})})]},E)}),!c&&!u&&r.jsx(Po,{time:Tn(t)})]})})}const Q1=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function CN(){const[t,a]=g.useState(0);return g.useEffect(()=>{if(t>=Q1.length-1)return;const i=setTimeout(()=>a(l=>l+1),3200);return()=>clearTimeout(i)},[t]),r.jsxs(r.Fragment,{children:[Q1[t],r.jsxs(IN,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function Tn(t){const i=581+t.reduce((f,m)=>f+m.headline.length,0)%200,l=Math.floor(i/60)%24,c=i%60,u=l<12?"AM":"PM";return`${l%12===0?12:l%12}:${String(c).padStart(2,"0")} ${u}`}function Po({time:t}){const[a,i]=g.useState(null),l=c=>i(u=>u===c?null:c);return r.jsx(ON,{"data-feedback-actions":!0,children:r.jsxs(Mf,{visibility:"always",time:t,children:[r.jsx(ef,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>l("up"),children:r.jsx(Zf,{size:14})}),r.jsx(ef,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>l("down"),children:r.jsx(Kf,{size:14})}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(Xa,{size:14})})]})})}function jN({usage:t,title:a}){const[i,l]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const c=u=>{u.key==="Escape"&&l(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[i]),t.length?r.jsxs(DN,{children:[r.jsxs(Te,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(Gt,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>l(!0),children:[t.length," ",t.length===1?"tool":"tools"," used"]}),r.jsx(FS,{open:i,onClose:()=>l(!1),title:a,usage:t})]}):null}function SN({milestone:t,last:a}){return r.jsxs(qN,{children:[r.jsxs(UN,{children:[r.jsx(C0,{icon:t.icon}),!a&&r.jsx(XN,{})]}),r.jsx(j0,{milestone:t,last:a})]})}function NN({records:t,initial:a=3}){const[i,l]=g.useState(!1),c=i?t:t.slice(0,a),u=t.length-a;return r.jsxs(hR,{children:[c.map((p,f)=>r.jsx(_0,{record:p},f)),u>0&&r.jsx(pR,{type:"button",onClick:()=>l(p=>!p),children:i?"Show less":`Show ${u} more`})]})}function C0({slotRef:t,hidden:a,loading:i,placeholder:l,muted:c}){return l?r.jsx(tf,{ref:t,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(GN,{})}):r.jsx(tf,{ref:t,"aria-hidden":"true",$hidden:a,$loading:i,children:r.jsxs(QN,{viewBox:"0 0 24 24",$loading:i,$muted:c&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function j0({milestone:t,last:a,typing:i,icon:l,collapsible:c=!0,extra:u,placeholder:p,focused:f,progressBeat:m,superseded:x}){var S,k;if(p)return r.jsx(rf,{$last:a,$dim:!0,children:r.jsxs(Ya,{as:"div",children:[l,r.jsx(of,{children:t.headline})]})});const y=!!((S=t.blocks)!=null&&S.length),_=!!u,[w,$]=g.useState(!c||!!t.defaultOpen),N=c&&(y||_),j=N&&!i,R=y&&(c?w:!0),L=_&&(c?w:!0);return r.jsxs(rf,{$last:a,children:[r.jsxs(Ya,{as:N?"button":"div",type:N?"button":void 0,$interactive:j,"aria-expanded":j?w:void 0,onClick:j?()=>$(T=>!T):void 0,children:[l,r.jsx(of,{$focused:!!f,children:t.headline}),j&&r.jsx(JN,{"data-open":w||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:14})})]}),(k=t.progress)!=null&&k.length?r.jsx(eR,{$indent:!!l,children:r.jsx(LN,{steps:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,live:!!(i||f),beat:m,superseded:x,showAvatars:w||i||f})}):null,R&&r.jsx(lR,{$indent:!!l,children:t.blocks.map((T,I)=>r.jsxs(cR,{children:[T.text&&r.jsx(dR,{children:i?r.jsx(Jd,{text:T.text}):T.text}),T.label&&r.jsx(uR,{children:T.label}),T.bullets&&r.jsx(fR,{children:T.bullets.map((E,z)=>r.jsx("li",{children:E},z))}),T.checks&&r.jsx(mR,{children:T.checks.map((E,z)=>r.jsxs("li",{children:[r.jsx(gR,{"aria-hidden":"true"}),r.jsx("span",{children:E})]},z))}),T.records&&r.jsx(NN,{records:T.records})]},I))}),L&&r.jsx(BN,{$indent:!!l,children:u})]})}const RN=1350;function LN({steps:t,avatars:a,avatarsOnSettle:i,reached:l,live:c,showAvatars:u,beat:p,superseded:f}){const m=t.length-1,x=typeof p=="number",[y,_]=g.useState(c?0:m),w=g.useRef(c);g.useEffect(()=>{c&&!w.current&&(w.current=!0,_(0))},[c]),g.useEffect(()=>{if(x||!w.current||y>=m)return;const R=setTimeout(()=>_(L=>Math.min(L+1,m)),RN);return()=>clearTimeout(R)},[y,m,x]),g.useEffect(()=>{typeof p=="number"&&_(Math.min(p,m))},[p,m]);const $=typeof p=="number"?Math.min(p,m):y,N=$>=m,j=N&&!c;return r.jsxs(tR,{children:[r.jsx(rR,{$done:j,$live:c,$superseded:f,"aria-live":"polite",children:c?r.jsx(Jd,{text:t[$],caret:!1,speed:26}):t[$]},$),u&&(i?N:N||c)&&(a!=null&&a.length)?r.jsx($N,{seeds:a,total:l}):null]})}const X1=90;function $N({seeds:t,total:a,max:i=5}){const l=t.slice(0,i),c=Math.max(a??0,t.length),u=c-l.length;return r.jsxs(oR,{"aria-label":`${c} people reached`,children:[l.map((p,f)=>r.jsx(aR,{style:{zIndex:l.length-f,animationDelay:`${f*X1}ms`},children:r.jsx(In,{size:"sm",src:Yo(p),name:p,alt:""})},p)),u>0&&r.jsxs(iR,{"aria-hidden":"true",style:{animationDelay:`${l.length*X1}ms`},children:["+",u]})]})}const MN=b.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,TN=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,Ks=zt`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,AN=b.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${TN} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${t=>t.$animate===!1&&"animation: none;"}

  ${Ks}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,IN=b.span``,EN=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. A fully-folded
     (superseded) group is a single recap line, so it packs tight — just enough to
     separate it from the turns around it without a full row of padding. */
  padding-top: ${t=>t.$compact?"var(--space-1)":"var(--space-3)"};
  padding-bottom: ${t=>t.$compact?"var(--space-1)":"var(--space-3)"};
`,J1=b.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${t=>t.$last?"0":t.$connected?t.$tight?"var(--space-3)":"var(--space-5)":t.$tight?"0":"var(--space-3)"};
`,PN=De`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,zN=b.span`
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
        animation: ${PN} 1.25s linear infinite;
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
`,ON=b.div`
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
`,DN=b.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,BN=b.div`
  padding-top: var(--space-2);
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,ef=b(Te)`
  &[data-active] { color: var(--color-content-brand); }
`;function Jd({text:t,onDone:a,speed:i=30,caret:l=!0}){const[c,u]=g.useState(0);g.useEffect(()=>{u(0)},[t]),g.useEffect(()=>{if(c>=t.length)return;const f=setTimeout(()=>u(m=>m+1),i);return()=>clearTimeout(f)},[c,t,i]);const p=c>=t.length;return g.useEffect(()=>{p&&(a==null||a())},[p]),r.jsxs(r.Fragment,{children:[t.slice(0,c),l&&r.jsx(WN,{$blink:p,"aria-hidden":"true"}),!p&&r.jsx(HN,{"aria-hidden":"true",children:t.slice(c)})]})}const FN=De`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,WN=b.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${t=>t.$blink?FN:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,HN=b.span`
  opacity: 0;
`,qN=b.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,UN=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,tf=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${t=>t.$hidden?"hidden":"visible"};
`,VN=De`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,GN=b.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${VN} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,S0=b.button`
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
`,YN=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,ZN=b.span`
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

  ${S0}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,KN=De`
  to { transform: rotate(360deg); }
`,nf=56.5,QN=b.svg`
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
    stroke-dasharray: ${nf};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${t=>t.$loading?nf*.7:0};
    stroke: ${t=>t.$loading?"var(--color-content-tertiary)":t.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${KN} 2s linear infinite;
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
`,XN=b.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,rf=b.div`
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
`,of=b.span`
  /* Size to the title text (shrinking if the row is tight) rather than filling the
     row, so the expand chevron sits right after the label instead of at the far edge. */
  flex: 0 1 auto;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm); /* 14px */
  font-weight: ${t=>t.$focused?"var(--font-weight-bold)":"var(--font-weight-medium)"};
  color: ${t=>t.$focused?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  line-height: var(--line-height-snug);
  transition: color var(--duration-base) var(--ease-out);

  ${Ya}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,JN=b.span`
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
`,eR=b.div`
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,tR=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,nR=De`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,rR=b.div`
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
    animation: ${nR} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,oR=b.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,N0=De`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,aR=b.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${N0} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,iR=b.span`
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
  animation: ${N0} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,sR=De`
  from { opacity: 0; }
  to   { opacity: 1; }
`,lR=b.div`
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
  animation: ${sR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,dR=b.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,uR=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,hR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,pR=b.button`
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
`,fR=b.ul`
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
`,mR=b.ul`
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
`,gR=b.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function vR({size:t=20}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const yR=160,R0=g.forwardRef(function({onSend:a,working:i=!1,onStop:l,placeholder:c="Message Ultron…",compact:u=!1},p){const[f,m]=g.useState(""),x=g.useRef(null),y=f.trim().length>0;g.useImperativeHandle(p,()=>({focus:()=>{var j;return(j=x.current)==null?void 0:j.focus()}}),[]);const _=()=>{const j=x.current;j&&(j.style.height="auto",j.style.height=`${Math.min(j.scrollHeight,yR)}px`)},w=()=>{!y||i||(a(f),m(""),requestAnimationFrame(()=>{const j=x.current;j&&(j.style.height="auto")}))},$=j=>{j.preventDefault(),w()},N=j=>{j.key==="Enter"&&!j.shiftKey&&(j.preventDefault(),w())};return r.jsxs(xR,{onSubmit:$,$compact:u,children:[r.jsx(wR,{ref:x,rows:1,value:f,placeholder:c,"aria-label":"Message Ultron",$compact:u,onChange:j=>{m(j.target.value),_()},onKeyDown:N}),i?r.jsx(af,{$float:!0,type:"button",variant:"primary",size:u?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:l,children:r.jsx(vR,{size:u?16:20})}):r.jsx(af,{type:"submit",variant:"primary",size:u?"xs":"sm",iconOnly:!0,disabled:!y,"aria-label":"Send message",children:r.jsx(Ds,{size:u?14:18})})]})}),xR=b.form`
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
`,wR=b.textarea`
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
`,af=b(Te)`
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
`,sf=450;function eu(t,a){var N;const i=t.status==="needs_approval"||t.status==="recommended",l=i||t.status==="unresolved"||t.status==="monitoring",c=Zd[t.id],u=a===1&&!!c,p=u?c.prompt:v0[t.id]??t.recommendation,f=u?c.record:dS[t.id],m=f?Array.isArray(f)?f:[f]:[],x=t.status==="unresolved"?rS:u?c.actions:t.actions,y=i&&(!u&&(((N=Kd[t.id])==null?void 0:N.length)??0)>1||oS(p)),_=y?aS:x[x.length-1],w=y?[]:x.slice(0,-1),$=d0(t);return{needsDecision:i,actionable:l,onFollowUp:u,followUp:c,prompt:p,records:m,primaryLabel:_,secondaryLabels:w,purple:$}}function lf({thread:t,stage:a,expanded:i,detachActionable:l,detachAnalyzing:c,detachTrail:u,onToggle:p,onClose:f,onDecide:m,onAction:x,onRefinement:y,onSaveWorkflow:_}){const[w,$]=g.useState(!1),[N,j]=g.useState(!1),{actionable:R,prompt:L,records:S,primaryLabel:k,purple:T}=eu(t,a),E=t.status==="analyzing"&&!c,z=t.status==="resolved"||t.status==="auto_resolved",O=!l&&(R||T),U=z&&!u,Z=l?E:R||E||O,X=i&&(Z||U),V=Yd(t),ie=iS(t.id)||(X?"":t.assessment),ce=se=>{u0(se)?y(se):x(t.id,se)};return r.jsxs(AR,{"data-tone":V,$expanded:i,children:[r.jsxs(ER,{children:[r.jsxs(PR,{type:"button","aria-expanded":X,"aria-label":X?"Collapse case":"Expand case",onClick:p,children:[r.jsx(In,{size:"md",src:m0(t.id),name:Ls[t.id],alt:Ls[t.id]??""}),r.jsxs(zR,{children:[r.jsx(OR,{children:sS(t)}),ie&&r.jsx(DR,{children:ie})]})]}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":f?"Close case and return to Live":X?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??p,children:f?r.jsx(Fs,{size:16}):X?r.jsx(zd,{size:16}):r.jsx(em,{size:16})})]}),X&&U&&r.jsx(BR,{children:r.jsx(FR,{children:r.jsx(_N,{milestones:y0(t)})})}),X&&Z&&r.jsxs(WR,{children:[R&&!l&&r.jsx(Qs,{children:L}),R&&!l&&S.length>0&&r.jsx(oL,{children:S.map((se,J)=>r.jsx(_0,{record:se},J))}),E&&r.jsx(A0,{role:"status","aria-live":"polite",children:r.jsx(CR,{thread:t,onDecide:m})}),O&&r.jsxs(tu,{children:[R&&k&&r.jsx(Vr,{variant:"primary",size:"sm",onClick:()=>ce(Rs),children:Rs}),R&&r.jsx(Vr,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),R&&r.jsx(z0,{variant:"tertiary",size:"sm","data-selected":N||void 0,onClick:()=>{j(!0),y("Other")},children:"Other"}),T&&(w?r.jsx(Te,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Pt,{size:14}),children:"Saved"}):r.jsx(Te,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Jr,{size:14}),onClick:()=>{_(t),$(!0)},children:"Save as workflow"}))]})]})]})}function cf({text:t,speed:a=16,onDone:i,instant:l=!1}){const[c,u]=g.useState(!1);return g.useEffect(()=>{u(!1)},[t]),g.useEffect(()=>{l&&(i==null||i())},[l]),l||c?r.jsx(r.Fragment,{children:t}):r.jsx(Jd,{text:t,speed:a,onDone:()=>{u(!0),i==null||i()}})}function _R({thread:t,stage:a,onAction:i,onRefinement:l,onSaveWorkflow:c,saved:u=!1,saveIntent:p=!1,onToggleSaveWorkflow:f,savedConversationally:m=!1,onSend:x,replying:y=!1,onStop:_}){const w=u||p,[$,N]=g.useState(!1),[j,R]=g.useState(!1),[L]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),[S,k]=g.useState(!1),[T,I]=g.useState(!1),E=g.useRef(null);g.useEffect(()=>{var P;T&&((P=E.current)==null||P.focus())},[T]);const z=u||m||S,{actionable:O,onFollowUp:U,prompt:Z,records:X,primaryLabel:V,purple:te}=eu(t,a),ie=O&&!U?Kd[t.id]??h0(Z).map(P=>({label:P})):void 0,ce=t.status==="resolved"||t.status==="auto_resolved",se=te||ce,J=P=>{u0(P)?l(P):i(t.id,P)},W=O&&!(ie&&ie.length>0)&&X.length>0?X[0]:void 0;if(se&&!O){const P=w0[t.id],D=$||!P,C=u&&!m&&!S;return r.jsxs(mL,{$divided:!0,children:[P&&r.jsx(gL,{children:r.jsx(cf,{text:P,onDone:()=>N(!0),instant:L})}),D&&!C&&r.jsxs(Bo,{$saved:z,"data-saved":z||void 0,children:[r.jsxs(O0,{children:[r.jsx(D0,{"aria-hidden":"true",children:r.jsx(Jr,{size:16})}),r.jsx(B0,{children:r.jsx(cf,{text:"Want me to save this as a reusable workflow?",onDone:()=>R(!0),instant:L})})]}),j&&r.jsx(F0,{children:z?r.jsx(Vr,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(Pt,{size:14}),children:"Saved"}):r.jsx(Vr,{variant:"primary",size:"sm",onClick:()=>{k(!0),c(t)},children:"Save workflow"})})]}),D&&C&&r.jsx($0,{})]})}return r.jsxs(IR,{"data-tone":Yd(t),children:[O&&r.jsxs(M0,{children:[r.jsx(Qs,{children:Z}),W&&r.jsx(T0,{children:r.jsx(In,{size:"md",src:Yo(W.avatarSeed),name:W.title,alt:W.title})})]}),ie&&ie.length>0?r.jsx(L0,{tasks:ie}):null,r.jsxs(tu,{children:[O&&V&&r.jsx(Vr,{variant:T?"secondary":"primary",size:"sm",onClick:()=>J(Rs),children:Rs}),O&&r.jsx(Vr,{variant:T?"secondary":"tertiary",size:"sm",onClick:()=>l("No"),children:"No"}),O&&r.jsx(z0,{variant:"tertiary",size:"sm","data-selected":T||void 0,onClick:()=>I(!0),children:"Other"}),O&&!U&&r.jsx(fL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":w,"data-on":w||void 0,leadingArtwork:w?r.jsx(Pt,{size:14}):r.jsx(Jr,{size:14}),onClick:()=>{u||f==null||f(t.id)},children:"Save as future workflow"})]}),O&&T&&r.jsx(pL,{children:r.jsx(R0,{ref:E,compact:!0,onSend:P=>x==null?void 0:x(P),working:y,onStop:_,placeholder:"Tell Ultron what to do…"})})]})}function L0({tasks:t,interactive:a=!0}){return r.jsx(aL,{children:t.map((i,l)=>r.jsx(bR,{task:i,first:l===0,last:l===t.length-1,interactive:a},l))})}function bR({task:t,first:a,last:i,interactive:l=!0}){const[c,u]=g.useState(!1),p=!!t.detail&&l;return r.jsxs(iL,{children:[r.jsx(sL,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(lL,{})}),r.jsxs(cL,{children:[r.jsxs(dL,{as:p?"button":"div",type:p?"button":void 0,$interactive:p,"aria-expanded":p?c:void 0,onClick:p?()=>u(f=>!f):void 0,children:[r.jsx(E0,{children:t.label}),p&&r.jsx(uL,{"data-open":c||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:14})})]}),c&&p&&r.jsx(hL,{children:t.detail})]})]})}function kR({steps:t,completed:a}){const[i,l]=g.useState(a?t.length:1);g.useEffect(()=>{if(a){l(t.length);return}if(i>=t.length)return;const u=setTimeout(()=>l(p=>p+1),1600);return()=>clearTimeout(u)},[i,t.length,a]);const c=t.slice(0,i);return r.jsx(YR,{role:"status","aria-live":"polite",children:c.map((u,p)=>{const f=!a&&p===i-1,m=p===c.length-1;return r.jsxs(KR,{children:[r.jsxs(QR,{children:[r.jsx(nL,{$done:!f,"aria-hidden":"true",children:f?r.jsx(rL,{children:r.jsx($t,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(Pt,{size:16})}),!m&&r.jsx(XR,{})]}),r.jsxs(JR,{$last:m,children:[r.jsx(eL,{children:u.headline}),r.jsx(tL,{children:u.detail})]})]},p)})})}function CR({thread:t,onDecide:a,analyzed:i,hideDetail:l,hideTrigger:c}){const[u,p]=g.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(HR,{as:"button",type:"button",$interactive:!0,"aria-expanded":u,onClick:()=>p(f=>!f),children:[r.jsx($t,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(UR,{children:[r.jsx(VR,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!l&&r.jsx(GR,{children:t.assessment})]}),r.jsx(qR,{"data-open":u||void 0,"aria-hidden":"true",children:r.jsx(Gt,{size:14})})]}),u&&r.jsx(kR,{steps:g0(t.id),completed:i}),!i&&!c&&r.jsx(I0,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})]})}function jR({thread:t,onDecide:a}){return r.jsx(I0,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})}function cd(t,a){return{icon:t.icon,headline:t.headline,blocks:t.detail||t.bullets?[{text:t.detail||void 0,bullets:t.bullets}]:void 0,progress:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,usage:x0(a,bS(t))}}function SR(t,a){const i=x0(a,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:t.map(l=>`${l.headline} — ${l.detail}`)}],usage:i}}function NR(t,a){const i=y0(t),l=t.timeline.filter(_=>_.done).length,c=l>0?Math.min(l,i.length):i.length,u=[SR(g0(t.id),t.id),...i.slice(0,c)],p=u.length;if(a.length===0){const _=u.map(w=>({kind:"activity",milestone:w}));return(t.status==="in_progress"||t.status==="monitoring")&&(O1[t.id]??[]).map(w=>cd(w,t.id)).forEach(w=>_.push({kind:"activity",milestone:w})),{items:_,reasoningCount:p}}const f=Zd[t.id],m=[(O1[t.id]??[]).map(_=>cd(_,t.id)),((f==null?void 0:f.working)??[]).map(_=>cd(_,t.id))],x=_=>_===1&&f?f.prompt:v0[t.id]??t.recommendation,y=u.slice(0,p).map(_=>({kind:"activity",milestone:_}));return a.forEach((_,w)=>{y.push({kind:"question",text:x(w)}),y.push({kind:"message",text:_}),(m[w]??[]).forEach($=>y.push({kind:"activity",milestone:$})),y.push({kind:"reply",text:jS(w)})}),{items:y,reasoningCount:p}}function RR({thread:t,outbound:a=[],chat:i=[],replying:l=!1,analyzing:c=!1,actionCard:u,footSlot:p,onCompleteRun:f,saveWorkflowFlagged:m=!1}){const x=t.status==="in_progress"||t.status==="monitoring",y=t.status==="resolved"||t.status==="auto_resolved",{items:_,reasoningCount:w}=NR(t,a),$=c||t.status==="in_progress",[N,j]=g.useState(c?Math.min(1,w):$?w:_.length),[R]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),L=a.length>0||x||y?_.length:w,S=t.status==="in_progress"&&a.length>0,[k,T]=g.useState(0);g.useEffect(()=>{T(0)},[N]),g.useEffect(()=>{if(N>=L)return;const K=_[N],re=_[N-1];if((K==null?void 0:K.kind)==="question"||(K==null?void 0:K.kind)==="message"){const he=setTimeout(()=>j(ve=>ve+1),0);return()=>clearTimeout(he)}if((K==null?void 0:K.kind)==="reply"){if(S)return;const he=setTimeout(()=>j(ve=>ve+1),sf);return()=>clearTimeout(he)}if(S&&(re==null?void 0:re.kind)!=="message")return;const fe=(re==null?void 0:re.kind)==="message"?sf:q1,we=setTimeout(()=>j(he=>he+1),fe);return()=>clearTimeout(we)},[N,L,S]),g.useEffect(()=>{if(!S)return;const K=re=>{var je;if(re.key!=="t"&&re.key!=="T"||re.metaKey||re.ctrlKey||re.altKey)return;const fe=re.target instanceof Element?re.target:null;if(fe&&fe.closest('input, textarea, [contenteditable="true"]'))return;const we=_[N-1],he=(we==null?void 0:we.kind)==="activity"?((je=we.milestone.progress)==null?void 0:je.length)??0:0;if((we==null?void 0:we.kind)==="activity"&&k<he-1){T(Se=>Se+1);return}const ve=_[N];(ve==null?void 0:ve.kind)==="activity"?(j(Se=>Se+1),T(0)):f==null||f()};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[S,N,k,f]);const I=_.slice(0,N),E=[];for(const K of I){if(K.kind==="question"){E.push({type:"question",text:K.text});continue}if(K.kind==="message"){E.push({type:"msg",text:K.text});continue}if(K.kind==="reply"){E.push({type:"reply",text:K.text});continue}const re=E[E.length-1];re&&re.type==="acts"?re.milestones.push(K.milestone):E.push({type:"acts",milestones:[K.milestone]})}const z=N<_.length,O=I.length>0&&I[I.length-1].kind==="activity",U=N>=L,[Z,X]=g.useState(!1);g.useEffect(()=>{if(!(U&&O&&(x||c)&&!y)){X(!1);return}X(!0);const K=setTimeout(()=>X(!1),q1);return()=>clearTimeout(K)},[U,O,N,x,c,y]);const V=(x||c)&&(z||Z)&&O;let te=-1;E.forEach((K,re)=>{K.type==="acts"&&(te=re)});const ie=[];for(const K of _){if(K.kind!=="activity"){ie.push({type:"other"});continue}const re=ie[ie.length-1];re&&re.type==="acts"?re.milestones.push(K.milestone):ie.push({type:"acts",milestones:[K.milestone]})}let ce=-1;ie.forEach((K,re)=>{K.type==="acts"&&(ce=re)});const se=E.findIndex(K=>K.type==="acts"),J=(K,re,fe=re)=>{const we=E[K],he=(c||t.status==="in_progress")&&K===ce,ve=ie[K],je=he&&ve&&ve.type==="acts"?ve.milestones:we.milestones,Se=he?we.milestones.length-1:void 0;return r.jsx(k0,{milestones:je,focusIndex:Se,focusBeat:he&&S?k:void 0,typingIndex:K===ce&&V?we.milestones.length-1:void 0,collapsed:K<te,hideActions:fe,running:he,showConnectors:K!==se,reasoning:K===se,animateIn:!re&&!R})},W=[];for(let K=0;K<E.length;K++){const re=E[K];if(re.type==="question"){W.push({kind:"question",text:re.text});continue}if(re.type==="msg"){W.push({kind:"msg",text:re.text});continue}if(re.type==="reply"){W.push({kind:"response",gi:-1,text:re.text});continue}const fe=E[K+1];fe&&fe.type==="reply"?(W.push({kind:"response",gi:K,text:fe.text}),K++):W.push({kind:"acts",gi:K})}const D=(c||t.status==="in_progress")&&te>=0||l,C=I.length>0,A=l||x,Q=(()=>{for(let K=W.length-1;K>=0;K--){const re=W[K];if(re.kind==="acts"||re.kind==="response"&&re.gi>=0)return K}return-1})(),ne=W.findIndex(K=>K.kind==="question"),G=ne===se+1?ne:-1,ue=K=>K.kind==="acts"?Tn(E[K.gi].milestones):K.kind==="response"?Tn(K.gi>=0?E[K.gi].milestones:[]):Tn([]);return r.jsxs(r.Fragment,{children:[W.map((K,re)=>{var ve,je;const fe=re===Q?u:null;if(K.kind==="question"){if(re===G)return null;const Se=W[re-1],Ie=!!Se&&(Se.kind==="acts"||Se.kind==="response")&&re-1!==Q,Be=re===ne;return r.jsxs(ud,{children:[Be?r.jsx(df,{thread:t,saveWorkflowFlagged:m}):r.jsx(MR,{text:K.text,animate:!R}),Ie&&r.jsx(Po,{time:ue(Se)})]},`q${re}`)}if(K.kind==="msg")return r.jsx(TR,{messages:[K.text],animate:!R},`m${re}`);if(K.kind==="acts"){const Se=E[K.gi].milestones,Ie=((ve=W[re+1])==null?void 0:ve.kind)==="question",Be=J(K.gi,!1,!!fe||Ie),Fe=re===se,Ve=fe||(Fe&&re+1===G?r.jsx(df,{thread:t,saveWorkflowFlagged:m}):null);return Fe&&Ve?r.jsxs(LL,{children:[Be,Ve,r.jsx(Po,{time:Tn(Se)})]},`a${re}`):r.jsxs(g.Fragment,{children:[Be,fe&&r.jsxs(ud,{children:[fe,r.jsx(Po,{time:Tn(Se)})]})]},`a${re}`)}const we=K.gi>=0,he=we?E[K.gi].milestones:[];return r.jsxs(g.Fragment,{children:[r.jsx(Nd,{activity:we?J(K.gi,!0):void 0,text:K.text,feedbackTime:fe||((je=W[re+1])==null?void 0:je.kind)==="question"?void 0:Tn(he),showMark:!1,animateIn:!1}),fe&&r.jsxs(ud,{children:[fe,r.jsx(Po,{time:Tn(he)})]})]},`resp${re}`)}),r.jsx(LR,{messages:i,replying:l}),p&&Es.createPortal(C?r.jsxs(CL,{role:A?"status":"img","aria-label":l?"Ultron is replying":D?"Ultron is working":"Ultron",children:[r.jsxs(NL,{"aria-hidden":"true",children:[r.jsx(uf,{$show:D,children:r.jsx($t,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(uf,{$show:!D,children:r.jsx($t,{mark:"magnetic2d",size:24,tone:"auto",state:A?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),D&&r.jsx(SL,{children:l?"Replying…":r.jsx(CN,{})})]}):null,p),Q<0&&u]})}function Nd({activity:t,text:a,body:i,feedbackTime:l,active:c=!1,showMark:u=!0,animateIn:p=!0}){const f=!!(t||i||l);return r.jsxs(RL,{children:[f&&r.jsxs($L,{$animate:p,children:[t,i,l&&r.jsx(Po,{time:l})]}),u&&r.jsx(ML,{$animate:p,role:c?"status":"img","aria-label":c?"Ultron is working":"Ultron",children:r.jsx($t,{mark:"magnetic2d",size:24,tone:"auto",state:c?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function dd(){return[{icon:"clock",headline:"Reviewed your message"}]}function LR({messages:t,replying:a=!1}){return!t.length&&!a?null:r.jsx(kL,{children:t.map((i,l)=>i.role==="operator"?r.jsx(W0,{children:r.jsx(q0,{children:r.jsx(U0,{children:i.text})})},l):i.kind==="workflow_saved"?r.jsx(Nd,{body:r.jsx($R,{}),feedbackTime:Tn(dd()),showMark:!1},l):r.jsx(Nd,{activity:r.jsx(k0,{milestones:dd(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:Tn(dd()),showMark:!1},l))})}function $R(){return r.jsx($0,{})}function $0(){return r.jsxs(Bo,{children:[r.jsxs(O0,{children:[r.jsx(D0,{"aria-hidden":"true",children:r.jsx(Jr,{size:16})}),r.jsx(B0,{children:"Workflow saved for future use."})]}),r.jsx(F0,{children:r.jsx(Vr,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(Fs,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function MR({text:t,animate:a=!0}){return r.jsx(yL,{$animate:a,children:t})}function df({thread:t,saveWorkflowFlagged:a=!1}){const{prompt:i,records:l}=eu(t,0),c=Kd[t.id]??h0(i).map(p=>({label:p})),u=!(c&&c.length>0)&&l.length>0?l[0]:void 0;return r.jsxs(xL,{"data-tone":Yd(t),children:[r.jsxs(M0,{children:[r.jsx(Qs,{children:i}),a?r.jsx(_r,{content:"Saved as workflow",children:r.jsx(wL,{"aria-label":"Saved as workflow",children:r.jsx(Jr,{size:18})})}):u&&r.jsx(T0,{children:r.jsx(In,{size:"md",src:Yo(u.avatarSeed),name:u.title,alt:u.title})})]}),c&&c.length>0?r.jsx(L0,{tasks:c,interactive:!1}):null]})}function TR({messages:t,animate:a=!0}){return t.length?r.jsx(_L,{children:t.map((i,l)=>r.jsx(W0,{children:r.jsx(q0,{$animate:a,children:r.jsx(U0,{children:i})})},l))}):null}const AR=b.div`
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
`,IR=b.div`
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
`,M0=b.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,T0=b.span`
  flex-shrink: 0;
  display: inline-flex;
`,ER=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-2) 0;
`,PR=b.button`
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
`,zR=b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,OR=b.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,DR=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,BR=b.div`
  overflow: hidden;
`,FR=b.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,WR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,A0=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,HR=b.div`
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
`,qR=b.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;b(A0)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const UR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,VR=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,GR=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,YR=b.div`
  display: flex;
  flex-direction: column;
`,ZR=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,KR=b.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${ZR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,QR=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,XR=b.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,JR=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
`,eL=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,tL=b.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,nL=b.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${t=>t.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,rL=b.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,I0=b(Te)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,oL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,aL=b.div`
  display: flex;
  flex-direction: column;
`,Ts="var(--space-8)",iL=b.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,sL=b.div`
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
`,lL=b.span`
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
`,cL=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,dL=b.div`
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
`,E0=b.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,uL=b.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,hL=b.p`
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
`,P0=De`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,tu=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${P0} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,pL=b.div`
  animation: ${P0} var(--duration-slow) var(--ease-out);
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
`,z0=b(Te)`
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
`,fL=b(Te)`
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
`,mL=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${t=>t.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,gL=b.p`
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
`,O0=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,D0=b.span`
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
`,B0=b.p`
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
`,F0=b(tu)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,vL=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,yL=b.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${vL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,xL=b.div`
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
  ${E0} { color: var(--color-content-disabled); }
`,wL=b.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,_L=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,W0=b.div`
  display: flex;
  justify-content: flex-end;
`,nu=De`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,H0=De`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,bL=De`
  from { opacity: 0; }
  to   { opacity: 1; }
`,q0=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${nu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,U0=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,kL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;b.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const CL=b.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${H0} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jL=De`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,SL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${jL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,NL=b.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,uf=b.span`
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
`,RL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${Ks}
`,ud=b.div`
  display: contents;
  ${Ks}
`,LL=b.div`
  display: flex;
  flex-direction: column;
  ${Ks}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,$L=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${bL} 380ms var(--ease-out) 160ms both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ML=b.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${H0} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${nu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${nu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const TL={"Coverage Recovery":Eo,"Fill Optimization":Eo,Recruiting:Eo,Users:Eo,Attendance:qr,"Attendance Recovery":qr,"Time Off":qr,Scheduling:qr,Compliance:Bs,Onboarding:Ur,"Payroll Operations":Gf,Invoicing:zo,Reporting:n1,"Marketplace Optimization":n1,Engagement:Cs,"Autonomous Operations":Os},AL=t=>TL[t]??Os,hf=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],IL=2800,EL=200,PL=6,zL=2200,Ba=520;function OL({onDetectRisk:t}){const[a,i]=g.useState(0),l=g.useRef(t);l.current=t;const c=g.useRef(new Set),[u,p]=g.useState(!1),f=g.useRef(null);g.useEffect(()=>{const k=setInterval(()=>i(T=>(T+1)%hf.length),IL);return()=>clearInterval(k)},[]);const m=Math.min(PL,vs.length),[x,y]=g.useState([]),_=g.useRef(0),w=g.useRef(vs.filter(k=>!k.risk)),$=g.useRef(vs.filter(k=>k.risk)),N=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),j=()=>5+Math.floor(Math.random()*5),R=()=>{const k=N.current,T=$.current;if(T.length>0&&k.sinceRisk>=k.gap)return k.sinceRisk=0,k.gap=j(),T[k.risk++%T.length];k.sinceRisk+=1;const I=w.current;return I.length>0?I[k.routine++%I.length]:T[k.risk++%T.length]},L=k=>k.risk?"risk":Math.random()<.28?"action":"none",S=g.useRef(null);return g.useEffect(()=>{if(vs.length===0){y([]);return}N.current={routine:0,risk:0,sinceRisk:0,gap:j()},_.current=0;const k=Array.from({length:m},()=>{const E=R();return{key:_.current++,event:E,phase:"in",outcome:L(E),resolved:!0}});if(k.length>0){const E=k[k.length-1];E.resolved=!1,S.current={key:E.key,event:E.event,outcome:E.outcome}}else S.current=null;y(k);const T=[],I=setInterval(()=>{var Z;const E=R(),z=_.current++,O=L(E),U=S.current;U&&U.outcome==="risk"&&(p(!0),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>p(!1),2800),c.current.has(U.event.id)||(c.current.add(U.event.id),(Z=l.current)==null||Z.call(l,U.event))),S.current={key:z,event:E,outcome:O},y(X=>{const V=X.filter(ce=>ce.phase!=="leaving"),te=V.length>=m?V[0].key:null;return[...X.map(ce=>ce.key===te?{...ce,phase:"leaving"}:U&&ce.key===U.key&&!ce.resolved?{...ce,resolved:!0}:ce),{key:z,event:E,phase:"entering",outcome:O,resolved:!1}]}),T.push(setTimeout(()=>{y(X=>X.map(V=>V.key===z?{...V,phase:"in"}:V))},40)),T.push(setTimeout(()=>{y(X=>X.filter(V=>V.phase!=="leaving"))},Ba))},zL);return()=>{clearInterval(I),T.forEach(clearTimeout),f.current&&clearTimeout(f.current)}},[m]),r.jsxs(DL,{children:[r.jsxs(BL,{children:[r.jsx(FL,{children:r.jsx($t,{mark:"circle",size:EL,tone:"auto",state:"active",coreGradient:u,"aria-label":"Ultron"})}),r.jsx(WL,{children:"Ultron"}),r.jsx(HL,{role:"status","aria-live":"polite",children:r.jsxs(UL,{children:[r.jsx(VL,{children:hf[a]}),r.jsxs(GL,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},a)})]}),x.length>0&&r.jsx(YL,{"aria-label":"Live event feed",children:x.map(k=>{const T=AL(k.event.capability);return r.jsx(ZL,{"data-phase":k.phase,"aria-hidden":k.phase==="leaving"||void 0,children:r.jsx(KL,{children:r.jsxs(QL,{"data-outcome":k.resolved?k.outcome:"pending",children:[r.jsxs(XL,{children:[r.jsx(JL,{"aria-hidden":"true",children:r.jsx(T,{size:16})}),r.jsxs(e$,{children:[r.jsx(a$,{children:k.event.capability}),r.jsx(i$,{children:k.event.title})]})]}),r.jsx(t$,{children:k.resolved?k.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx($t,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(n$,{children:"Risk detected"})]}):k.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx($t,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(o$,{children:"Action required"})]}):r.jsx(r$,{children:"No action needed"}):r.jsx($t,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},k.key)})})]})}const DL=b.div`
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
`,V0=De`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,BL=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${V0} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,FL=b.div`
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
`,WL=b.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,HL=b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,qL=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,UL=b.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${qL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,VL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,G0=De`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,GL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${G0} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,YL=b.div`
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
  animation: ${V0} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ZL=b.div`
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
`,KL=b.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,QL=b.div`
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
`,XL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,JL=b.span`
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
`,e$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,t$=b.div`
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
    animation: ${G0} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const n$=b.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,r$=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,o$=b.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,a$=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,i$=b.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,s$={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},pf={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},l$=["new","working","done"],c$=280;function d$({threads:t,stageById:a,section:i,analyzedIds:l,outboundByThread:c,chatByThread:u,selectedId:p,onDecide:f,onAction:m,onCompleteRun:x,onRefinement:y,onSaveWorkflow:_,pendingWorkflowIds:w,onToggleSaveWorkflow:$,savedWorkflowIds:N,onSend:j,replyingIds:R,onStop:L,onClose:S,onDetectRisk:k}){const[T,I]=g.useState(!1),E=()=>{T||(I(!0),window.setTimeout(()=>{I(!1),S()},c$))},z=(G,ue)=>(G.t.status==="analyzing"?1:0)-(ue.t.status==="analyzing"?1:0)||Ns[G.t.severity]-Ns[ue.t.severity]||G.index-ue.index,O=t.map((G,ue)=>({t:G,index:ue})).filter(({t:G})=>s$[i].includes(G.status)).sort(z).map(({t:G})=>G.id),[U,Z]=g.useState(()=>p??null),X=g.useRef({}),V=g.useRef(null),te=G=>{var ue;G==="Other"&&((ue=V.current)==null||ue.focus()),y(G)},ie=g.useRef(null),ce=g.useRef(null),[se,J]=g.useState(null),W=g.useRef(void 0);g.useEffect(()=>{var G;if(W.current===void 0){W.current=p;return}!p||p===W.current||(W.current=p,Z(p),(G=X.current[p])==null||G.scrollIntoView({behavior:"smooth",block:"start"}))},[p]);const P=l$.includes(i),D=P?p&&O.includes(p)?p:O[0]??null:null;g.useEffect(()=>{var Be;const G=ie.current,ue=ce.current;if(!G||!ue)return;const re=((Be=window.matchMedia)==null?void 0:Be.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",fe=160;let we=!0,he=G.scrollHeight;const ve=()=>{we=G.scrollHeight-G.scrollTop-G.clientHeight<=fe};G.addEventListener("scroll",ve,{passive:!0});let je=0;const Se=()=>{je=performance.now()};G.addEventListener("pointerdown",Se,{passive:!0});const Ie=new ResizeObserver(()=>{const Fe=G.scrollHeight,Ve=performance.now()-je<500;Fe>he+1&&we&&!Ve&&G.scrollTo({top:Fe,behavior:re}),he=Fe});return Ie.observe(ue),()=>{G.removeEventListener("scroll",ve),G.removeEventListener("pointerdown",Se),Ie.disconnect()}},[D,i]),g.useEffect(()=>{if(!P||!D)return;const G=ie.current;if(!G)return;const ue=()=>G.scrollTo({top:G.scrollHeight,behavior:"auto"}),K=requestAnimationFrame(ue),re=[80,240,480].map(fe=>window.setTimeout(ue,fe));return()=>{cancelAnimationFrame(K),re.forEach(clearTimeout)}},[D,P]);const C=D?t.find(G=>G.id===D)??null:null,A=!!C&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(C.status)||d0(C)),Q=A&&C?C:null,ne=!(A&&C&&["needs_approval","recommended","unresolved","monitoring"].includes(C.status))||!!(C!=null&&C.analysisResult);return i==="live"?r.jsx(ff,{$static:!0,children:r.jsx(OL,{onDetectRisk:k})},"live"):r.jsxs(ff,{$closing:T,children:[r.jsx(p$,{ref:ie,children:P?r.jsx(mf,{ref:ce,children:D===null?r.jsx(gf,{role:"status",children:pf[i]}):(()=>{const G=t.find(ve=>ve.id===D);if(!G)return null;const ue=G.status==="analyzing",K=G.status==="resolved"||G.status==="auto_resolved",re=G.status==="in_progress",fe=G.status==="needs_approval"||G.status==="recommended",we=G.status==="monitoring",he=G.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(y$,{children:r.jsx(lf,{thread:G,stage:a[G.id]??0,expanded:re?!1:ne,detachActionable:A,detachAnalyzing:ue,detachTrail:K||he,onToggle:()=>{},onClose:E,onDecide:f,onAction:m,onRefinement:te,onSaveWorkflow:_},G.id)}),(ue||fe||re||K||we||he)&&r.jsx(RR,{thread:G,outbound:c[G.id]??[],chat:u[G.id]??[],replying:R.includes(G.id),analyzing:ue,footSlot:se,onCompleteRun:()=>x(G.id),saveWorkflowFlagged:w.includes(G.id)||N.includes(G.id),actionCard:Q&&Q.id===G.id?r.jsx(_R,{thread:Q,stage:a[Q.id]??0,onAction:m,onRefinement:te,onSaveWorkflow:_,saveIntent:w.includes(Q.id),onToggleSaveWorkflow:$,saved:N.includes(Q.id),savedConversationally:(u[Q.id]??[]).some(ve=>ve.kind==="workflow_saved"),onSend:ve=>j(Q.id,ve),replying:R.includes(Q.id),onStop:()=>L(Q.id)},`action-${Q.id}`):void 0},G.id)]})})()}):r.jsx(mf,{ref:ce,children:O.length===0?r.jsx(gf,{role:"status",children:pf[i]}):O.map(G=>{const ue=t.find(K=>K.id===G);return ue?r.jsx(v$,{ref:K=>{X.current[G]=K},children:r.jsx(lf,{thread:ue,stage:a[G]??0,expanded:U===G,onToggle:()=>Z(K=>K===G?null:G),onDecide:f,onAction:m,onRefinement:y,onSaveWorkflow:_})},G):null})})}),P&&D&&C&&r.jsx(f$,{children:r.jsxs(m$,{children:[r.jsx(g$,{ref:J}),C.status==="analyzing"&&!l.includes(C.id)&&r.jsx(jR,{thread:C,onDecide:f}),r.jsx(R0,{ref:V,onSend:G=>j(D,G),working:R.includes(D),onStop:()=>L(D),placeholder:nS(C.status,R.includes(D))},`composer-${D}`)]})})]},"feed")}const u$=De`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,h$=De`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,ff=b.div`
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
    animation: ${h$} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${t=>t.$closing&&zt`
    animation: ${u$} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,p$=b.div`
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
`,f$=b.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,m$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,g$=b.div`
  display: flex;
  &:empty { display: none; }
`,mf=b.div`
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
`,v$=b.div`
  scroll-margin-top: var(--space-5);
`,y$=b.div`
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
`,gf=b.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,vf=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],x$=2800;function w$(){const[t,a]=g.useState(0);return g.useEffect(()=>{const i=setInterval(()=>a(l=>(l+1)%vf.length),x$);return()=>clearInterval(i)},[]),r.jsx(_$,{children:r.jsx(b$,{children:r.jsxs(k$,{children:[r.jsx(C$,{children:"Ultron"}),r.jsx(j$,{role:"status","aria-live":"polite",children:r.jsxs(N$,{children:[r.jsx(R$,{children:vf[t]}),r.jsxs($$,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},t)})]})})})}const _$=b.div`
  font-family: var(--font-sans);
`,b$=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,k$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,C$=b.span`
  min-width: 0;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,j$=b.div`
  display: flex;
  align-items: baseline;
  min-height: var(--space-4);
`,S$=De`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,N$=b.span`
  display: inline-flex;
  align-items: baseline;
  min-width: 0;
  animation: ${S$} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,R$=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,L$=De`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,$$=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${L$} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,M$=45;function T$({text:t,className:a}){const[i,l]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){l(t.length);return}l(0);let p=0;const f=setInterval(()=>{p+=1,l(p),p>=t.length&&clearInterval(f)},M$);return()=>clearInterval(f)},[t]);const c=i>=t.length;return r.jsxs(A$,{className:a,children:[t.slice(0,i),!c&&r.jsx(E$,{"aria-hidden":"true",children:"|"})]})}const A$=b.span`
  white-space: nowrap;
`,I$=De`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,E$=b.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${I$} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,hd=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function P$(){const t=g.useMemo(()=>["All",...Array.from(new Set(hd.map(c=>c.tag)))],[]),[a,i]=g.useState("All"),l=a==="All"?hd:hd.filter(c=>c.tag===a);return r.jsx(z$,{children:r.jsxs(O$,{children:[r.jsxs(D$,{children:[r.jsx($t,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(B$,{children:[r.jsx(F$,{children:"Memory"}),r.jsx(W$,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(H$,{role:"tablist","aria-label":"Filter memories by category",children:t.map(c=>r.jsx(q$,{type:"button",role:"tab","aria-selected":a===c,$active:a===c,onClick:()=>i(c),children:c},c))}),r.jsx(U$,{children:l.map((c,u)=>r.jsx(V$,{children:r.jsxs(G$,{children:[r.jsx(Y$,{children:c.title}),r.jsx(Z$,{children:c.detail})]})},u))})]})})}const z$=b.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,O$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,D$=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,B$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,F$=b.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,W$=b.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,H$=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,q$=b.button`
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
`,U$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,V$=b.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,G$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,Y$=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,Z$=b.span`
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
`;const Rd=[{id:"employees",label:"Employees",icon:r.jsx(Eo,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx(qr,{size:16})},{id:"locations",label:"Locations",icon:r.jsx(Yf,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(Ur,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(Bs,{size:16})}];b.div`
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
`;function K$({collectionId:t}){const a=Rd.find(i=>i.id===t)??Rd[0];return r.jsxs(Q$,{children:[r.jsxs(X$,{children:[r.jsx(J$,{children:a.label}),r.jsx(Ja,{children:"Account database"})]}),r.jsxs(eM,{role:"status",children:[r.jsx(tM,{"aria-hidden":"true",children:r.jsx(Hf,{size:24})}),r.jsxs(nM,{children:[a.label," — demo stub"]}),r.jsxs(rM,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const Q$=b.div`
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
`,X$=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,J$=b.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,eM=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,tM=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,nM=b.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,rM=b.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function oM(t){const a=[t.activeId,t.secActiveId];return t.selectedPersonaId&&a.push("persona",t.selectedPersonaId),t.activePageId&&a.push("page",t.activePageId),"#"+a.map(encodeURIComponent).join("/")}function aM(t){const a=t.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(c=>{try{return decodeURIComponent(c)}catch{return c}}),l={};i[0]&&(l.activeId=i[0]),i[1]&&(l.secActiveId=i[1]);for(let c=2;c<i.length-1;c+=2){const u=i[c],p=i[c+1];u==="persona"?l.selectedPersonaId=p:u==="page"&&(l.activePageId=p)}return l}function iM(t,a){const i=g.useRef("");g.useEffect(()=>{const l=()=>{const u=aM(window.location.hash);u.activeId!==void 0&&a.setActiveId(u.activeId),u.secActiveId!==void 0&&a.setSecActiveId(u.secActiveId),a.setSelectedPersonaId(u.selectedPersonaId??null),a.setActivePageId(u.activePageId??null)};window.location.hash&&l();const c=()=>{window.location.hash!==i.current&&l()};return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),g.useEffect(()=>{const l=oM(t);l!==window.location.hash&&(i.current=l,window.history.replaceState(null,"",l))},[t.activeId,t.secActiveId,t.selectedPersonaId,t.activePageId])}const yf=[{id:"ultron",label:"Ultron",icon:r.jsx($t,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(cC,{})},{id:"engaged",label:"Engaged",icon:r.jsx(dC,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(uC,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(hC,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(pC,{})}],xf=[{id:"apps",label:"Apps",icon:r.jsx(fC,{})}],wf=[{id:"docs",label:"Document Studio",icon:r.jsx(mC,{})},{id:"form",label:"Form",icon:r.jsx(gC,{})},{id:"tasks",label:"Tasks",icon:r.jsx(vC,{})},{id:"policy",label:"Policy",icon:r.jsx(yC,{}),activeIcon:r.jsx("img",{src:Hj,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(Jr,{}),activeIcon:r.jsx("img",{src:qj,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(xC,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(wC,{})}],sM=b.button`
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
`,lM=De`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,cM=De`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,dM=De`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,uM=b.span`
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
      ${lM} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${cM} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${dM} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,hM={needs_attention:r.jsx(Vf,{size:16}),live:r.jsx($t,{mark:"lines",size:32,tone:"auto",state:"active"}),resolved:r.jsx(br,{size:16})},pM={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function fM(){const[t,a]=g.useState("ultron"),[i,l]=g.useState("home-overview"),[c,u]=g.useState(null),[p,f]=g.useState(null),[m,x]=g.useState("ultron"),[y,_]=g.useState("employees"),w=IS(),[$,N]=g.useState(!0),j=$?"live":w.selectedThread?pM[w.selectedThread.status]:"new";iM({activeId:t,secActiveId:i,selectedPersonaId:c,activePageId:p},{setActiveId:a,setSecActiveId:l,setSelectedPersonaId:u,setActivePageId:f});const R=I=>I.map(E=>({...E,isActive:E.id===t,onClick:E.id==="ultron"?()=>a("ultron"):void 0})),L=[{id:"memory",label:"Memory",icon:r.jsx(zs,{size:16}),isActive:m==="memory",onClick:()=>x("memory")},{id:"settings",label:"Settings",icon:r.jsx(Of,{size:16})}],S=r.jsx(l0,{children:m==="memory"?"Memory":m==="account"?"Account database":"Ultron"}),k=m==="account"?Rd.map(I=>({type:"single",item:{id:I.id,label:I.label,icon:I.icon,isActive:y===I.id,onClick:()=>_(I.id)}})):w.groups.flatMap(I=>{const E=I.id==="needs_attention"?"new":I.id==="resolved"?"done":"working",z={type:"group",group:{id:I.id,label:I.id==="needs_attention"?"New":I.label,icon:hM[I.id],trailingBadge:r.jsx(Ja,{children:I.threads.length}),defaultExpanded:!0,outlined:!1,maxVisible:I.id==="needs_attention"?5:void 0,children:I.threads.map(O=>({id:O.id,label:O.id.startsWith("detected_")?r.jsx(T$,{text:O.name}):O.name,icon:E==="new"?O.status==="analyzing"?r.jsx($t,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx($t,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):E==="working"?r.jsx($t,{mark:"lines",size:32,tone:"auto",state:O.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx($t,{mark:"pulse",size:32,tone:"auto",state:O.status==="unresolved"?"idle":"static",color:O.status==="unresolved"?"var(--color-orange-content-tertiary)":w.viewedIds.includes(O.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:m==="ultron"&&!$&&j===E&&w.selectedId===O.id,onClick:()=>{x("ultron"),N(!1),w.setSelectedId(O.id)},trailingSlot:w.savedWorkflowIds.includes(O.id)?r.jsx(_r,{content:"Saved as workflow",placement:"top",children:r.jsx(uM,{"aria-label":"Saved as workflow",children:r.jsx(Jr,{})})}):void 0}))}};return I.id==="resolved"?[{type:"divider",id:"done-divider"},z]:I.id==="live"?[{type:"divider",id:"working-divider"},z]:[z]}),T=[{id:"main",label:"Workspace",items:R(yf)},{id:"tools",label:"Tools",items:R(xf)},{id:"bottom",label:"Apps",items:R(wf)}];return r.jsx(Wj,{items:R(yf),toolItems:R(xf),bottomItems:R(wf),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:k,menuHeader:m==="ultron"?r.jsx(sM,{$active:$,onClick:()=>{x("ultron"),N(!0)},"aria-label":"Live — Ultron presence","aria-current":$?"page":void 0,children:r.jsx(w$,{})}):void 0,pageEntries:L,showSecondaryNav:!0,showTopNav:m!=="ultron",showSearch:!1,heading:S,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:t,secActiveId:i,activePageId:p,selectedPersonaId:c,moduleGroups:T,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:I=>{I==="ultron"&&a("ultron")},onSelectPersona:u},children:m==="memory"?r.jsx(P$,{}):m==="account"?r.jsx(K$,{collectionId:y}):r.jsx(d$,{threads:w.threads,stageById:w.stageById,section:j,analyzedIds:w.analyzedIds,outboundByThread:w.outboundByThread,chatByThread:w.chatByThread,selectedId:w.selectedId,onDecide:w.decide,onAction:w.commit,onCompleteRun:w.completeRun,onRefinement:w.refine,onSaveWorkflow:w.saveWorkflow,pendingWorkflowIds:w.pendingWorkflowIds,onToggleSaveWorkflow:w.toggleWorkflowSave,savedWorkflowIds:w.savedWorkflowIds,onSend:w.sendMessage,replyingIds:w.replyingIds,onStop:w.stopReply,onClose:()=>{x("ultron"),N(!0)},onDetectRisk:w.detectRisk})})}K2.createRoot(document.getElementById("root")).render(r.jsx(xr.StrictMode,{children:r.jsx(pw,{children:r.jsx(fM,{})})}));
