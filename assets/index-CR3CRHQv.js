(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function Tf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fc={exports:{}},Oa={},Wc={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function tv(){if(Kp)return $e;Kp=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.iterator;function w(T){return T===null||typeof T!="object"?null:(T=k&&T[k]||T["@@iterator"],typeof T=="function"?T:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,_={};function M(T,S,H){this.props=T,this.context=S,this.refs=_,this.updater=H||L}M.prototype.isReactComponent={},M.prototype.setState=function(T,S){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,S,"setState")},M.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function I(){}I.prototype=M.prototype;function R(T,S,H){this.props=T,this.context=S,this.refs=_,this.updater=H||L}var C=R.prototype=new I;C.constructor=R,j(C,M.prototype),C.isPureReactComponent=!0;var P=Array.isArray,N=Object.prototype.hasOwnProperty,$={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function z(T,S,H){var Y,oe={},he=null,ee=null;if(S!=null)for(Y in S.ref!==void 0&&(ee=S.ref),S.key!==void 0&&(he=""+S.key),S)N.call(S,Y)&&!E.hasOwnProperty(Y)&&(oe[Y]=S[Y]);var W=arguments.length-2;if(W===1)oe.children=H;else if(1<W){for(var de=Array(W),ve=0;ve<W;ve++)de[ve]=arguments[ve+2];oe.children=de}if(T&&T.defaultProps)for(Y in W=T.defaultProps,W)oe[Y]===void 0&&(oe[Y]=W[Y]);return{$$typeof:t,type:T,key:he,ref:ee,props:oe,_owner:$.current}}function B(T,S){return{$$typeof:t,type:T.type,key:S,ref:T.ref,props:T.props,_owner:T._owner}}function Q(T){return typeof T=="object"&&T!==null&&T.$$typeof===t}function J(T){var S={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(H){return S[H]})}var Z=/\/+/g;function te(T,S){return typeof T=="object"&&T!==null&&T.key!=null?J(""+T.key):S.toString(36)}function re(T,S,H,Y,oe){var he=typeof T;(he==="undefined"||he==="boolean")&&(T=null);var ee=!1;if(T===null)ee=!0;else switch(he){case"string":case"number":ee=!0;break;case"object":switch(T.$$typeof){case t:case a:ee=!0}}if(ee)return ee=T,oe=oe(ee),T=Y===""?"."+te(ee,0):Y,P(oe)?(H="",T!=null&&(H=T.replace(Z,"$&/")+"/"),re(oe,S,H,"",function(ve){return ve})):oe!=null&&(Q(oe)&&(oe=B(oe,H+(!oe.key||ee&&ee.key===oe.key?"":(""+oe.key).replace(Z,"$&/")+"/")+T)),S.push(oe)),1;if(ee=0,Y=Y===""?".":Y+":",P(T))for(var W=0;W<T.length;W++){he=T[W];var de=Y+te(he,W);ee+=re(he,S,H,de,oe)}else if(de=w(T),typeof de=="function")for(T=de.call(T),W=0;!(he=T.next()).done;)he=he.value,de=Y+te(he,W++),ee+=re(he,S,H,de,oe);else if(he==="object")throw S=String(T),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return ee}function ce(T,S,H){if(T==null)return T;var Y=[],oe=0;return re(T,Y,"","",function(he){return S.call(H,he,oe++)}),Y}function ae(T){if(T._status===-1){var S=T._result;S=S(),S.then(function(H){(T._status===0||T._status===-1)&&(T._status=1,T._result=H)},function(H){(T._status===0||T._status===-1)&&(T._status=2,T._result=H)}),T._status===-1&&(T._status=0,T._result=S)}if(T._status===1)return T._result.default;throw T._result}var G={current:null},F={transition:null},K={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:F,ReactCurrentOwner:$};function q(){throw Error("act(...) is not supported in production builds of React.")}return $e.Children={map:ce,forEach:function(T,S,H){ce(T,function(){S.apply(this,arguments)},H)},count:function(T){var S=0;return ce(T,function(){S++}),S},toArray:function(T){return ce(T,function(S){return S})||[]},only:function(T){if(!Q(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},$e.Component=M,$e.Fragment=i,$e.Profiler=c,$e.PureComponent=R,$e.StrictMode=s,$e.Suspense=m,$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,$e.act=q,$e.cloneElement=function(T,S,H){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var Y=j({},T.props),oe=T.key,he=T.ref,ee=T._owner;if(S!=null){if(S.ref!==void 0&&(he=S.ref,ee=$.current),S.key!==void 0&&(oe=""+S.key),T.type&&T.type.defaultProps)var W=T.type.defaultProps;for(de in S)N.call(S,de)&&!E.hasOwnProperty(de)&&(Y[de]=S[de]===void 0&&W!==void 0?W[de]:S[de])}var de=arguments.length-2;if(de===1)Y.children=H;else if(1<de){W=Array(de);for(var ve=0;ve<de;ve++)W[ve]=arguments[ve+2];Y.children=W}return{$$typeof:t,type:T.type,key:oe,ref:he,props:Y,_owner:ee}},$e.createContext=function(T){return T={$$typeof:p,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:u,_context:T},T.Consumer=T},$e.createElement=z,$e.createFactory=function(T){var S=z.bind(null,T);return S.type=T,S},$e.createRef=function(){return{current:null}},$e.forwardRef=function(T){return{$$typeof:f,render:T}},$e.isValidElement=Q,$e.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:ae}},$e.memo=function(T,S){return{$$typeof:x,type:T,compare:S===void 0?null:S}},$e.startTransition=function(T){var S=F.transition;F.transition={};try{T()}finally{F.transition=S}},$e.unstable_act=q,$e.useCallback=function(T,S){return G.current.useCallback(T,S)},$e.useContext=function(T){return G.current.useContext(T)},$e.useDebugValue=function(){},$e.useDeferredValue=function(T){return G.current.useDeferredValue(T)},$e.useEffect=function(T,S){return G.current.useEffect(T,S)},$e.useId=function(){return G.current.useId()},$e.useImperativeHandle=function(T,S,H){return G.current.useImperativeHandle(T,S,H)},$e.useInsertionEffect=function(T,S){return G.current.useInsertionEffect(T,S)},$e.useLayoutEffect=function(T,S){return G.current.useLayoutEffect(T,S)},$e.useMemo=function(T,S){return G.current.useMemo(T,S)},$e.useReducer=function(T,S,H){return G.current.useReducer(T,S,H)},$e.useRef=function(T){return G.current.useRef(T)},$e.useState=function(T){return G.current.useState(T)},$e.useSyncExternalStore=function(T,S,H){return G.current.useSyncExternalStore(T,S,H)},$e.useTransition=function(){return G.current.useTransition()},$e.version="18.3.1",$e}var Zp;function Pd(){return Zp||(Zp=1,Wc.exports=tv()),Wc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function nv(){if(Qp)return Oa;Qp=1;var t=Pd(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(f,m,x){var v,k={},w=null,L=null;x!==void 0&&(w=""+x),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(L=m.ref);for(v in m)s.call(m,v)&&!u.hasOwnProperty(v)&&(k[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)k[v]===void 0&&(k[v]=m[v]);return{$$typeof:a,type:f,key:w,ref:L,props:k,_owner:c.current}}return Oa.Fragment=i,Oa.jsx=p,Oa.jsxs=p,Oa}var Xp;function rv(){return Xp||(Xp=1,Fc.exports=nv()),Fc.exports}var r=rv(),g=Pd();const wr=Tf(g);var ps={},Hc={exports:{}},qt={},qc={exports:{}},Uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function ov(){return Jp||(Jp=1,(function(t){function a(F,K){var q=F.length;F.push(K);e:for(;0<q;){var T=q-1>>>1,S=F[T];if(0<c(S,K))F[T]=K,F[q]=S,q=T;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var K=F[0],q=F.pop();if(q!==K){F[0]=q;e:for(var T=0,S=F.length,H=S>>>1;T<H;){var Y=2*(T+1)-1,oe=F[Y],he=Y+1,ee=F[he];if(0>c(oe,q))he<S&&0>c(ee,oe)?(F[T]=ee,F[he]=q,T=he):(F[T]=oe,F[Y]=q,T=Y);else if(he<S&&0>c(ee,q))F[T]=ee,F[he]=q,T=he;else break e}}return K}function c(F,K){var q=F.sortIndex-K.sortIndex;return q!==0?q:F.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var p=Date,f=p.now();t.unstable_now=function(){return p.now()-f}}var m=[],x=[],v=1,k=null,w=3,L=!1,j=!1,_=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(F){for(var K=i(x);K!==null;){if(K.callback===null)s(x);else if(K.startTime<=F)s(x),K.sortIndex=K.expirationTime,a(m,K);else break;K=i(x)}}function P(F){if(_=!1,C(F),!j)if(i(m)!==null)j=!0,ae(N);else{var K=i(x);K!==null&&G(P,K.startTime-F)}}function N(F,K){j=!1,_&&(_=!1,I(z),z=-1),L=!0;var q=w;try{for(C(K),k=i(m);k!==null&&(!(k.expirationTime>K)||F&&!J());){var T=k.callback;if(typeof T=="function"){k.callback=null,w=k.priorityLevel;var S=T(k.expirationTime<=K);K=t.unstable_now(),typeof S=="function"?k.callback=S:k===i(m)&&s(m),C(K)}else s(m);k=i(m)}if(k!==null)var H=!0;else{var Y=i(x);Y!==null&&G(P,Y.startTime-K),H=!1}return H}finally{k=null,w=q,L=!1}}var $=!1,E=null,z=-1,B=5,Q=-1;function J(){return!(t.unstable_now()-Q<B)}function Z(){if(E!==null){var F=t.unstable_now();Q=F;var K=!0;try{K=E(!0,F)}finally{K?te():($=!1,E=null)}}else $=!1}var te;if(typeof R=="function")te=function(){R(Z)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ce=re.port2;re.port1.onmessage=Z,te=function(){ce.postMessage(null)}}else te=function(){M(Z,0)};function ae(F){E=F,$||($=!0,te())}function G(F,K){z=M(function(){F(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){j||L||(j=!0,ae(N))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return i(m)},t.unstable_next=function(F){switch(w){case 1:case 2:case 3:var K=3;break;default:K=w}var q=w;w=K;try{return F()}finally{w=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var q=w;w=F;try{return K()}finally{w=q}},t.unstable_scheduleCallback=function(F,K,q){var T=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?T+q:T):q=T,F){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=q+S,F={id:v++,callback:K,priorityLevel:F,startTime:q,expirationTime:S,sortIndex:-1},q>T?(F.sortIndex=q,a(x,F),i(m)===null&&F===i(x)&&(_?(I(z),z=-1):_=!0,G(P,q-T))):(F.sortIndex=S,a(m,F),j||L||(j=!0,ae(N))),F},t.unstable_shouldYield=J,t.unstable_wrapCallback=function(F){var K=w;return function(){var q=w;w=K;try{return F.apply(this,arguments)}finally{w=q}}}})(Uc)),Uc}var e1;function av(){return e1||(e1=1,qc.exports=ov()),qc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1;function iv(){if(t1)return qt;t1=1;var t=Pd(),a=av();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function u(e,n){p(e,n),p(e+"Capture",n)}function p(e,n){for(c[e]=n,e=0;e<n.length;e++)s.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},k={};function w(e){return m.call(k,e)?!0:m.call(v,e)?!1:x.test(e)?k[e]=!0:(v[e]=!0,!1)}function L(e,n,o,l){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,o,l){if(n===null||typeof n>"u"||L(e,n,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _(e,n,o,l,d,h,y){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=y}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];M[n]=new _(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(I,R);M[n]=new _(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(I,R);M[n]=new _(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(I,R);M[n]=new _(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function C(e,n,o,l){var d=M.hasOwnProperty(n)?M[n]:null;(d!==null?d.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,o,d,l)&&(o=null),l||d===null?w(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):d.mustUseProperty?e[d.propertyName]=o===null?d.type===3?!1:"":o:(n=d.attributeName,l=d.attributeNamespace,o===null?e.removeAttribute(n):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,l?e.setAttributeNS(l,n,o):e.setAttribute(n,o))))}var P=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),$=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),J=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),F=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,T;function S(e){if(T===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||""}return`
`+T+e}var H=!1;function Y(e,n){if(!e||H)return"";H=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(X){var l=X}Reflect.construct(e,[],n)}else{try{n.call()}catch(X){l=X}e.call(n.prototype)}else{try{throw Error()}catch(X){l=X}e()}}catch(X){if(X&&l&&typeof X.stack=="string"){for(var d=X.stack.split(`
`),h=l.stack.split(`
`),y=d.length-1,A=h.length-1;1<=y&&0<=A&&d[y]!==h[A];)A--;for(;1<=y&&0<=A;y--,A--)if(d[y]!==h[A]){if(y!==1||A!==1)do if(y--,A--,0>A||d[y]!==h[A]){var O=`
`+d[y].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=y&&0<=A);break}}}finally{H=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?S(e):""}function oe(e){switch(e.tag){case 5:return S(e.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return e=Y(e.type,!1),e;case 11:return e=Y(e.type.render,!1),e;case 1:return e=Y(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case $:return"Portal";case B:return"Profiler";case z:return"StrictMode";case te:return"Suspense";case re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case J:return(e.displayName||"Context")+".Consumer";case Q:return(e._context.displayName||"Context")+".Provider";case Z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ce:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case ae:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}function ee(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(n);case 8:return n===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ve(e){var n=de(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(y){l=""+y,h.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pe(e){e._valueTracker||(e._valueTracker=ve(e))}function xe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),l="";return e&&(l=de(e)?e.checked?"true":"false":e.value),e=l,e!==o?(n.setValue(e),!0):!1}function Se(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ce(e,n){var o=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Me(e,n){var o=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;o=W(n.value!=null?n.value:o),e._wrapperState={initialChecked:l,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fe(e,n){n=n.checked,n!=null&&C(e,"checked",n,!1)}function Ue(e,n){Fe(e,n);var o=W(n.value),l=n.type;if(o!=null)l==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Oe(e,n.type,o):n.hasOwnProperty("defaultValue")&&Oe(e,n.type,W(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ve(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Oe(e,n,o){(n!=="number"||Se(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Ye=Array.isArray;function Ge(e,n,o,l){if(e=e.options,n){n={};for(var d=0;d<o.length;d++)n["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=n.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&l&&(e[o].defaultSelected=!0)}else{for(o=""+W(o),n=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function Tt(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function We(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Ye(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:W(o)}}function It(e,n){var o=W(n.value),l=W(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),l!=null&&(e.defaultValue=""+l)}function _t(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function _n(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cn(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?_n(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Jo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,l,d){MSApp.execUnsafeLocalFunction(function(){return e(n,o,l,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function oo(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rl=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){rl.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jr[n]=jr[e]})});function ai(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||jr.hasOwnProperty(e)&&jr[e]?(""+n).trim():n+"px"}function Ne(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var l=o.indexOf("--")===0,d=ai(o,n[o],l);o==="float"&&(o="cssFloat"),l?e.setProperty(o,d):e[o]=d}}var et=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lt(e,n){if(n){if(et[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function At(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sr=null;function ea(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ta=null,ao=null,io=null;function hu(e){if(e=_a(e)){if(typeof ta!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Ri(n),ta(e.stateNode,e.type,n))}}function pu(e){ao?io?io.push(e):io=[e]:ao=e}function fu(){if(ao){var e=ao,n=io;if(io=ao=null,hu(e),n)for(e=0;e<n.length;e++)hu(n[e])}}function mu(e,n){return e(n)}function gu(){}var ol=!1;function vu(e,n,o){if(ol)return e(n,o);ol=!0;try{return mu(e,n,o)}finally{ol=!1,(ao!==null||io!==null)&&(gu(),fu())}}function na(e,n){var o=e.stateNode;if(o===null)return null;var l=Ri(o);if(l===null)return null;o=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var al=!1;if(f)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){al=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{al=!1}function sg(e,n,o,l,d,h,y,A,O){var X=Array.prototype.slice.call(arguments,3);try{n.apply(o,X)}catch(se){this.onError(se)}}var oa=!1,ii=null,si=!1,il=null,lg={onError:function(e){oa=!0,ii=e}};function cg(e,n,o,l,d,h,y,A,O){oa=!1,ii=null,sg.apply(lg,arguments)}function dg(e,n,o,l,d,h,y,A,O){if(cg.apply(this,arguments),oa){if(oa){var X=ii;oa=!1,ii=null}else throw Error(i(198));si||(si=!0,il=X)}}function Nr(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function yu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function xu(e){if(Nr(e)!==e)throw Error(i(188))}function ug(e){var n=e.alternate;if(!n){if(n=Nr(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,l=n;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return xu(d),e;if(h===l)return xu(d),n;h=h.sibling}throw Error(i(188))}if(o.return!==l.return)o=d,l=h;else{for(var y=!1,A=d.child;A;){if(A===o){y=!0,o=d,l=h;break}if(A===l){y=!0,l=d,o=h;break}A=A.sibling}if(!y){for(A=h.child;A;){if(A===o){y=!0,o=h,l=d;break}if(A===l){y=!0,l=h,o=d;break}A=A.sibling}if(!y)throw Error(i(189))}}if(o.alternate!==l)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function wu(e){return e=ug(e),e!==null?bu(e):null}function bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=bu(e);if(n!==null)return n;e=e.sibling}return null}var ku=a.unstable_scheduleCallback,_u=a.unstable_cancelCallback,hg=a.unstable_shouldYield,pg=a.unstable_requestPaint,at=a.unstable_now,fg=a.unstable_getCurrentPriorityLevel,sl=a.unstable_ImmediatePriority,Cu=a.unstable_UserBlockingPriority,li=a.unstable_NormalPriority,mg=a.unstable_LowPriority,ju=a.unstable_IdlePriority,ci=null,jn=null;function gg(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:xg,vg=Math.log,yg=Math.LN2;function xg(e){return e>>>=0,e===0?32:31-(vg(e)/yg|0)|0}var di=64,ui=4194304;function aa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hi(e,n){var o=e.pendingLanes;if(o===0)return 0;var l=0,d=e.suspendedLanes,h=e.pingedLanes,y=o&268435455;if(y!==0){var A=y&~d;A!==0?l=aa(A):(h&=y,h!==0&&(l=aa(h)))}else y=o&~d,y!==0?l=aa(y):h!==0&&(l=aa(h));if(l===0)return 0;if(n!==0&&n!==l&&(n&d)===0&&(d=l&-l,h=n&-n,d>=h||d===16&&(h&4194240)!==0))return n;if((l&4)!==0&&(l|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)o=31-pn(n),d=1<<o,l|=e[o],n&=~d;return l}function wg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bg(e,n){for(var o=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes;0<h;){var y=31-pn(h),A=1<<y,O=d[y];O===-1?((A&o)===0||(A&l)!==0)&&(d[y]=wg(A,n)):O<=n&&(e.expiredLanes|=A),h&=~A}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Su(){var e=di;return di<<=1,(di&4194240)===0&&(di=64),e}function cl(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function ia(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-pn(n),e[n]=o}function kg(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<o;){var d=31-pn(o),h=1<<d;n[d]=0,l[d]=-1,e[d]=-1,o&=~h}}function dl(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var l=31-pn(o),d=1<<l;d&n|e[l]&n&&(e[l]|=n),o&=~d}}var He=0;function Nu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ru,ul,Mu,Lu,$u,hl=!1,pi=[],Zn=null,Qn=null,Xn=null,sa=new Map,la=new Map,Jn=[],_g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tu(e,n){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":sa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(n.pointerId)}}function ca(e,n,o,l,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[d]},n!==null&&(n=_a(n),n!==null&&ul(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function Cg(e,n,o,l,d){switch(n){case"focusin":return Zn=ca(Zn,e,n,o,l,d),!0;case"dragenter":return Qn=ca(Qn,e,n,o,l,d),!0;case"mouseover":return Xn=ca(Xn,e,n,o,l,d),!0;case"pointerover":var h=d.pointerId;return sa.set(h,ca(sa.get(h)||null,e,n,o,l,d)),!0;case"gotpointercapture":return h=d.pointerId,la.set(h,ca(la.get(h)||null,e,n,o,l,d)),!0}return!1}function Iu(e){var n=Rr(e.target);if(n!==null){var o=Nr(n);if(o!==null){if(n=o.tag,n===13){if(n=yu(o),n!==null){e.blockedOn=n,$u(e.priority,function(){Mu(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=fl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);Sr=l,o.target.dispatchEvent(l),Sr=null}else return n=_a(o),n!==null&&ul(n),e.blockedOn=o,!1;n.shift()}return!0}function Au(e,n,o){fi(e)&&o.delete(n)}function jg(){hl=!1,Zn!==null&&fi(Zn)&&(Zn=null),Qn!==null&&fi(Qn)&&(Qn=null),Xn!==null&&fi(Xn)&&(Xn=null),sa.forEach(Au),la.forEach(Au)}function da(e,n){e.blockedOn===n&&(e.blockedOn=null,hl||(hl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,jg)))}function ua(e){function n(d){return da(d,e)}if(0<pi.length){da(pi[0],e);for(var o=1;o<pi.length;o++){var l=pi[o];l.blockedOn===e&&(l.blockedOn=null)}}for(Zn!==null&&da(Zn,e),Qn!==null&&da(Qn,e),Xn!==null&&da(Xn,e),sa.forEach(n),la.forEach(n),o=0;o<Jn.length;o++)l=Jn[o],l.blockedOn===e&&(l.blockedOn=null);for(;0<Jn.length&&(o=Jn[0],o.blockedOn===null);)Iu(o),o.blockedOn===null&&Jn.shift()}var so=P.ReactCurrentBatchConfig,mi=!0;function Sg(e,n,o,l){var d=He,h=so.transition;so.transition=null;try{He=1,pl(e,n,o,l)}finally{He=d,so.transition=h}}function Ng(e,n,o,l){var d=He,h=so.transition;so.transition=null;try{He=4,pl(e,n,o,l)}finally{He=d,so.transition=h}}function pl(e,n,o,l){if(mi){var d=fl(e,n,o,l);if(d===null)$l(e,n,l,gi,o),Tu(e,l);else if(Cg(d,e,n,o,l))l.stopPropagation();else if(Tu(e,l),n&4&&-1<_g.indexOf(e)){for(;d!==null;){var h=_a(d);if(h!==null&&Ru(h),h=fl(e,n,o,l),h===null&&$l(e,n,l,gi,o),h===d)break;d=h}d!==null&&l.stopPropagation()}else $l(e,n,l,null,o)}}var gi=null;function fl(e,n,o,l){if(gi=null,e=ea(l),e=Rr(e),e!==null)if(n=Nr(e),n===null)e=null;else if(o=n.tag,o===13){if(e=yu(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return gi=e,null}function Eu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fg()){case sl:return 1;case Cu:return 4;case li:case mg:return 16;case ju:return 536870912;default:return 16}default:return 16}}var er=null,ml=null,vi=null;function Pu(){if(vi)return vi;var e,n=ml,o=n.length,l,d="value"in er?er.value:er.textContent,h=d.length;for(e=0;e<o&&n[e]===d[e];e++);var y=o-e;for(l=1;l<=y&&n[o-l]===d[h-l];l++);return vi=d.slice(e,1<l?1-l:void 0)}function yi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function zu(){return!1}function Yt(e){function n(o,l,d,h,y){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(o=e[A],this[A]=o?o(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?xi:zu,this.isPropagationStopped=zu,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),n}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Yt(lo),ha=q({},lo,{view:0,detail:0}),Rg=Yt(ha),vl,yl,pa,wi=q({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pa&&(pa&&e.type==="mousemove"?(vl=e.screenX-pa.screenX,yl=e.screenY-pa.screenY):yl=vl=0,pa=e),vl)},movementY:function(e){return"movementY"in e?e.movementY:yl}}),Ou=Yt(wi),Mg=q({},wi,{dataTransfer:0}),Lg=Yt(Mg),$g=q({},ha,{relatedTarget:0}),xl=Yt($g),Tg=q({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=Yt(Tg),Ag=q({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eg=Yt(Ag),Pg=q({},lo,{data:0}),Du=Yt(Pg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Dg[e])?!!n[e]:!1}function wl(){return Bg}var Fg=q({},ha,{key:function(e){if(e.key){var n=zg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wg=Yt(Fg),Hg=q({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bu=Yt(Hg),qg=q({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),Ug=Yt(qg),Vg=q({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gg=Yt(Vg),Yg=q({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kg=Yt(Yg),Zg=[9,13,27,32],bl=f&&"CompositionEvent"in window,fa=null;f&&"documentMode"in document&&(fa=document.documentMode);var Qg=f&&"TextEvent"in window&&!fa,Fu=f&&(!bl||fa&&8<fa&&11>=fa),Wu=" ",Hu=!1;function qu(e,n){switch(e){case"keyup":return Zg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var co=!1;function Xg(e,n){switch(e){case"compositionend":return Uu(n);case"keypress":return n.which!==32?null:(Hu=!0,Wu);case"textInput":return e=n.data,e===Wu&&Hu?null:e;default:return null}}function Jg(e,n){if(co)return e==="compositionend"||!bl&&qu(e,n)?(e=Pu(),vi=ml=er=null,co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fu&&n.locale!=="ko"?null:n.data;default:return null}}var e2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!e2[e.type]:n==="textarea"}function Gu(e,n,o,l){pu(l),n=ji(n,"onChange"),0<n.length&&(o=new gl("onChange","change",null,o,l),e.push({event:o,listeners:n}))}var ma=null,ga=null;function t2(e){uh(e,0)}function bi(e){var n=mo(e);if(xe(n))return e}function n2(e,n){if(e==="change")return n}var Yu=!1;if(f){var kl;if(f){var _l="oninput"in document;if(!_l){var Ku=document.createElement("div");Ku.setAttribute("oninput","return;"),_l=typeof Ku.oninput=="function"}kl=_l}else kl=!1;Yu=kl&&(!document.documentMode||9<document.documentMode)}function Zu(){ma&&(ma.detachEvent("onpropertychange",Qu),ga=ma=null)}function Qu(e){if(e.propertyName==="value"&&bi(ga)){var n=[];Gu(n,ga,e,ea(e)),vu(t2,n)}}function r2(e,n,o){e==="focusin"?(Zu(),ma=n,ga=o,ma.attachEvent("onpropertychange",Qu)):e==="focusout"&&Zu()}function o2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(ga)}function a2(e,n){if(e==="click")return bi(n)}function i2(e,n){if(e==="input"||e==="change")return bi(n)}function s2(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:s2;function va(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!m.call(n,d)||!fn(e[d],n[d]))return!1}return!0}function Xu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ju(e,n){var o=Xu(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=n&&l>=n)return{node:o,offset:n-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xu(o)}}function eh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?eh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function th(){for(var e=window,n=Se();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Se(e.document)}return n}function Cl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function l2(e){var n=th(),o=e.focusedElem,l=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&eh(o.ownerDocument.documentElement,o)){if(l!==null&&Cl(o)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=o.textContent.length,h=Math.min(l.start,d);l=l.end===void 0?h:Math.min(l.end,d),!e.extend&&h>l&&(d=l,l=h,h=d),d=Ju(o,h);var y=Ju(o,l);d&&y&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),h>l?(e.addRange(n),e.extend(y.node,y.offset)):(n.setEnd(y.node,y.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var c2=f&&"documentMode"in document&&11>=document.documentMode,uo=null,jl=null,ya=null,Sl=!1;function nh(e,n,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Sl||uo==null||uo!==Se(l)||(l=uo,"selectionStart"in l&&Cl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ya&&va(ya,l)||(ya=l,l=ji(jl,"onSelect"),0<l.length&&(n=new gl("onSelect","select",null,n,o),e.push({event:n,listeners:l}),n.target=uo)))}function ki(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var ho={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Nl={},rh={};f&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function _i(e){if(Nl[e])return Nl[e];if(!ho[e])return e;var n=ho[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in rh)return Nl[e]=n[o];return e}var oh=_i("animationend"),ah=_i("animationiteration"),ih=_i("animationstart"),sh=_i("transitionend"),lh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,n){lh.set(e,n),u(n,[e])}for(var Rl=0;Rl<ch.length;Rl++){var Ml=ch[Rl],d2=Ml.toLowerCase(),u2=Ml[0].toUpperCase()+Ml.slice(1);tr(d2,"on"+u2)}tr(oh,"onAnimationEnd"),tr(ah,"onAnimationIteration"),tr(ih,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(sh,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h2=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function dh(e,n,o){var l=e.type||"unknown-event";e.currentTarget=o,dg(l,n,void 0,e),e.currentTarget=null}function uh(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],d=l.event;l=l.listeners;e:{var h=void 0;if(n)for(var y=l.length-1;0<=y;y--){var A=l[y],O=A.instance,X=A.currentTarget;if(A=A.listener,O!==h&&d.isPropagationStopped())break e;dh(d,A,X),h=O}else for(y=0;y<l.length;y++){if(A=l[y],O=A.instance,X=A.currentTarget,A=A.listener,O!==h&&d.isPropagationStopped())break e;dh(d,A,X),h=O}}}if(si)throw e=il,si=!1,il=null,e}function Qe(e,n){var o=n[zl];o===void 0&&(o=n[zl]=new Set);var l=e+"__bubble";o.has(l)||(hh(n,e,2,!1),o.add(l))}function Ll(e,n,o){var l=0;n&&(l|=4),hh(o,e,l,n)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function wa(e){if(!e[Ci]){e[Ci]=!0,s.forEach(function(o){o!=="selectionchange"&&(h2.has(o)||Ll(o,!1,e),Ll(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ci]||(n[Ci]=!0,Ll("selectionchange",!1,n))}}function hh(e,n,o,l){switch(Eu(n)){case 1:var d=Sg;break;case 4:d=Ng;break;default:d=pl}o=d.bind(null,n,o,e),d=void 0,!al||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(n,o,{capture:!0,passive:d}):e.addEventListener(n,o,!0):d!==void 0?e.addEventListener(n,o,{passive:d}):e.addEventListener(n,o,!1)}function $l(e,n,o,l,d){var h=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var A=l.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(y===4)for(y=l.return;y!==null;){var O=y.tag;if((O===3||O===4)&&(O=y.stateNode.containerInfo,O===d||O.nodeType===8&&O.parentNode===d))return;y=y.return}for(;A!==null;){if(y=Rr(A),y===null)return;if(O=y.tag,O===5||O===6){l=h=y;continue e}A=A.parentNode}}l=l.return}vu(function(){var X=h,se=ea(o),le=[];e:{var ie=lh.get(e);if(ie!==void 0){var fe=gl,ge=e;switch(e){case"keypress":if(yi(o)===0)break e;case"keydown":case"keyup":fe=Wg;break;case"focusin":ge="focus",fe=xl;break;case"focusout":ge="blur",fe=xl;break;case"beforeblur":case"afterblur":fe=xl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Ug;break;case oh:case ah:case ih:fe=Ig;break;case sh:fe=Gg;break;case"scroll":fe=Rg;break;case"wheel":fe=Kg;break;case"copy":case"cut":case"paste":fe=Eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Bu}var ye=(n&4)!==0,it=!ye&&e==="scroll",U=ye?ie!==null?ie+"Capture":null:ie;ye=[];for(var D=X,V;D!==null;){V=D;var ue=V.stateNode;if(V.tag===5&&ue!==null&&(V=ue,U!==null&&(ue=na(D,U),ue!=null&&ye.push(ba(D,ue,V)))),it)break;D=D.return}0<ye.length&&(ie=new fe(ie,ge,null,o,se),le.push({event:ie,listeners:ye}))}}if((n&7)===0){e:{if(ie=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",ie&&o!==Sr&&(ge=o.relatedTarget||o.fromElement)&&(Rr(ge)||ge[Pn]))break e;if((fe||ie)&&(ie=se.window===se?se:(ie=se.ownerDocument)?ie.defaultView||ie.parentWindow:window,fe?(ge=o.relatedTarget||o.toElement,fe=X,ge=ge?Rr(ge):null,ge!==null&&(it=Nr(ge),ge!==it||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(fe=null,ge=X),fe!==ge)){if(ye=Ou,ue="onMouseLeave",U="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Bu,ue="onPointerLeave",U="onPointerEnter",D="pointer"),it=fe==null?ie:mo(fe),V=ge==null?ie:mo(ge),ie=new ye(ue,D+"leave",fe,o,se),ie.target=it,ie.relatedTarget=V,ue=null,Rr(se)===X&&(ye=new ye(U,D+"enter",ge,o,se),ye.target=V,ye.relatedTarget=it,ue=ye),it=ue,fe&&ge)t:{for(ye=fe,U=ge,D=0,V=ye;V;V=po(V))D++;for(V=0,ue=U;ue;ue=po(ue))V++;for(;0<D-V;)ye=po(ye),D--;for(;0<V-D;)U=po(U),V--;for(;D--;){if(ye===U||U!==null&&ye===U.alternate)break t;ye=po(ye),U=po(U)}ye=null}else ye=null;fe!==null&&ph(le,ie,fe,ye,!1),ge!==null&&it!==null&&ph(le,it,ge,ye,!0)}}e:{if(ie=X?mo(X):window,fe=ie.nodeName&&ie.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ie.type==="file")var we=n2;else if(Vu(ie))if(Yu)we=i2;else{we=o2;var be=r2}else(fe=ie.nodeName)&&fe.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(we=a2);if(we&&(we=we(e,X))){Gu(le,we,o,se);break e}be&&be(e,ie,X),e==="focusout"&&(be=ie._wrapperState)&&be.controlled&&ie.type==="number"&&Oe(ie,"number",ie.value)}switch(be=X?mo(X):window,e){case"focusin":(Vu(be)||be.contentEditable==="true")&&(uo=be,jl=X,ya=null);break;case"focusout":ya=jl=uo=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,nh(le,o,se);break;case"selectionchange":if(c2)break;case"keydown":case"keyup":nh(le,o,se)}var ke;if(bl)e:{switch(e){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else co?qu(e,o)&&(_e="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(Fu&&o.locale!=="ko"&&(co||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&co&&(ke=Pu()):(er=se,ml="value"in er?er.value:er.textContent,co=!0)),be=ji(X,_e),0<be.length&&(_e=new Du(_e,e,null,o,se),le.push({event:_e,listeners:be}),ke?_e.data=ke:(ke=Uu(o),ke!==null&&(_e.data=ke)))),(ke=Qg?Xg(e,o):Jg(e,o))&&(X=ji(X,"onBeforeInput"),0<X.length&&(se=new Du("onBeforeInput","beforeinput",null,o,se),le.push({event:se,listeners:X}),se.data=ke))}uh(le,n)})}function ba(e,n,o){return{instance:e,listener:n,currentTarget:o}}function ji(e,n){for(var o=n+"Capture",l=[];e!==null;){var d=e,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=na(e,o),h!=null&&l.unshift(ba(e,h,d)),h=na(e,n),h!=null&&l.push(ba(e,h,d))),e=e.return}return l}function po(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ph(e,n,o,l,d){for(var h=n._reactName,y=[];o!==null&&o!==l;){var A=o,O=A.alternate,X=A.stateNode;if(O!==null&&O===l)break;A.tag===5&&X!==null&&(A=X,d?(O=na(o,h),O!=null&&y.unshift(ba(o,O,A))):d||(O=na(o,h),O!=null&&y.push(ba(o,O,A)))),o=o.return}y.length!==0&&e.push({event:n,listeners:y})}var p2=/\r\n?/g,f2=/\u0000|\uFFFD/g;function fh(e){return(typeof e=="string"?e:""+e).replace(p2,`
`).replace(f2,"")}function Si(e,n,o){if(n=fh(n),fh(e)!==n&&o)throw Error(i(425))}function Ni(){}var Tl=null,Il=null;function Al(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,m2=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,g2=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(e){return mh.resolve(null).then(e).catch(v2)}:El;function v2(e){setTimeout(function(){throw e})}function Pl(e,n){var o=n,l=0;do{var d=o.nextSibling;if(e.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(l===0){e.removeChild(d),ua(n);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=d}while(o);ua(n)}function nr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function gh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Sn="__reactFiber$"+fo,ka="__reactProps$"+fo,Pn="__reactContainer$"+fo,zl="__reactEvents$"+fo,y2="__reactListeners$"+fo,x2="__reactHandles$"+fo;function Rr(e){var n=e[Sn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Pn]||o[Sn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=gh(e);e!==null;){if(o=e[Sn])return o;e=gh(e)}return n}e=o,o=e.parentNode}return null}function _a(e){return e=e[Sn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ri(e){return e[ka]||null}var Ol=[],go=-1;function rr(e){return{current:e}}function Xe(e){0>go||(e.current=Ol[go],Ol[go]=null,go--)}function Ke(e,n){go++,Ol[go]=e.current,e.current=n}var or={},Nt=rr(or),Dt=rr(!1),Mr=or;function vo(e,n){var o=e.type.contextTypes;if(!o)return or;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=n[h];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function Bt(e){return e=e.childContextTypes,e!=null}function Mi(){Xe(Dt),Xe(Nt)}function vh(e,n,o){if(Nt.current!==or)throw Error(i(168));Ke(Nt,n),Ke(Dt,o)}function yh(e,n,o){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var d in l)if(!(d in n))throw Error(i(108,ee(e)||"Unknown",d));return q({},o,l)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||or,Mr=Nt.current,Ke(Nt,e),Ke(Dt,Dt.current),!0}function xh(e,n,o){var l=e.stateNode;if(!l)throw Error(i(169));o?(e=yh(e,n,Mr),l.__reactInternalMemoizedMergedChildContext=e,Xe(Dt),Xe(Nt),Ke(Nt,e)):Xe(Dt),Ke(Dt,o)}var zn=null,$i=!1,Dl=!1;function wh(e){zn===null?zn=[e]:zn.push(e)}function w2(e){$i=!0,wh(e)}function ar(){if(!Dl&&zn!==null){Dl=!0;var e=0,n=He;try{var o=zn;for(He=1;e<o.length;e++){var l=o[e];do l=l(!0);while(l!==null)}zn=null,$i=!1}catch(d){throw zn!==null&&(zn=zn.slice(e+1)),ku(sl,ar),d}finally{He=n,Dl=!1}}return null}var yo=[],xo=0,Ti=null,Ii=0,on=[],an=0,Lr=null,On=1,Dn="";function $r(e,n){yo[xo++]=Ii,yo[xo++]=Ti,Ti=e,Ii=n}function bh(e,n,o){on[an++]=On,on[an++]=Dn,on[an++]=Lr,Lr=e;var l=On;e=Dn;var d=32-pn(l)-1;l&=~(1<<d),o+=1;var h=32-pn(n)+d;if(30<h){var y=d-d%5;h=(l&(1<<y)-1).toString(32),l>>=y,d-=y,On=1<<32-pn(n)+d|o<<d|l,Dn=h+e}else On=1<<h|o<<d|l,Dn=e}function Bl(e){e.return!==null&&($r(e,1),bh(e,1,0))}function Fl(e){for(;e===Ti;)Ti=yo[--xo],yo[xo]=null,Ii=yo[--xo],yo[xo]=null;for(;e===Lr;)Lr=on[--an],on[an]=null,Dn=on[--an],on[an]=null,On=on[--an],on[an]=null}var Kt=null,Zt=null,tt=!1,mn=null;function kh(e,n){var o=dn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function _h(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Kt=e,Zt=nr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Kt=e,Zt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Lr!==null?{id:On,overflow:Dn}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=dn(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,Kt=e,Zt=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hl(e){if(tt){var n=Zt;if(n){var o=n;if(!_h(e,n)){if(Wl(e))throw Error(i(418));n=nr(o.nextSibling);var l=Kt;n&&_h(e,n)?kh(l,o):(e.flags=e.flags&-4097|2,tt=!1,Kt=e)}}else{if(Wl(e))throw Error(i(418));e.flags=e.flags&-4097|2,tt=!1,Kt=e}}}function Ch(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Kt=e}function Ai(e){if(e!==Kt)return!1;if(!tt)return Ch(e),tt=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Al(e.type,e.memoizedProps)),n&&(n=Zt)){if(Wl(e))throw jh(),Error(i(418));for(;n;)kh(e,n),n=nr(n.nextSibling)}if(Ch(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){Zt=nr(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}Zt=null}}else Zt=Kt?nr(e.stateNode.nextSibling):null;return!0}function jh(){for(var e=Zt;e;)e=nr(e.nextSibling)}function wo(){Zt=Kt=null,tt=!1}function ql(e){mn===null?mn=[e]:mn.push(e)}var b2=P.ReactCurrentBatchConfig;function Ca(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var l=o.stateNode}if(!l)throw Error(i(147,e));var d=l,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(y){var A=d.refs;y===null?delete A[h]:A[h]=y},n._stringRef=h,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Ei(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Sh(e){var n=e._init;return n(e._payload)}function Nh(e){function n(U,D){if(e){var V=U.deletions;V===null?(U.deletions=[D],U.flags|=16):V.push(D)}}function o(U,D){if(!e)return null;for(;D!==null;)n(U,D),D=D.sibling;return null}function l(U,D){for(U=new Map;D!==null;)D.key!==null?U.set(D.key,D):U.set(D.index,D),D=D.sibling;return U}function d(U,D){return U=pr(U,D),U.index=0,U.sibling=null,U}function h(U,D,V){return U.index=V,e?(V=U.alternate,V!==null?(V=V.index,V<D?(U.flags|=2,D):V):(U.flags|=2,D)):(U.flags|=1048576,D)}function y(U){return e&&U.alternate===null&&(U.flags|=2),U}function A(U,D,V,ue){return D===null||D.tag!==6?(D=Ec(V,U.mode,ue),D.return=U,D):(D=d(D,V),D.return=U,D)}function O(U,D,V,ue){var we=V.type;return we===E?se(U,D,V.props.children,ue,V.key):D!==null&&(D.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===ae&&Sh(we)===D.type)?(ue=d(D,V.props),ue.ref=Ca(U,D,V),ue.return=U,ue):(ue=as(V.type,V.key,V.props,null,U.mode,ue),ue.ref=Ca(U,D,V),ue.return=U,ue)}function X(U,D,V,ue){return D===null||D.tag!==4||D.stateNode.containerInfo!==V.containerInfo||D.stateNode.implementation!==V.implementation?(D=Pc(V,U.mode,ue),D.return=U,D):(D=d(D,V.children||[]),D.return=U,D)}function se(U,D,V,ue,we){return D===null||D.tag!==7?(D=Dr(V,U.mode,ue,we),D.return=U,D):(D=d(D,V),D.return=U,D)}function le(U,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Ec(""+D,U.mode,V),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case N:return V=as(D.type,D.key,D.props,null,U.mode,V),V.ref=Ca(U,null,D),V.return=U,V;case $:return D=Pc(D,U.mode,V),D.return=U,D;case ae:var ue=D._init;return le(U,ue(D._payload),V)}if(Ye(D)||K(D))return D=Dr(D,U.mode,V,null),D.return=U,D;Ei(U,D)}return null}function ie(U,D,V,ue){var we=D!==null?D.key:null;if(typeof V=="string"&&V!==""||typeof V=="number")return we!==null?null:A(U,D,""+V,ue);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case N:return V.key===we?O(U,D,V,ue):null;case $:return V.key===we?X(U,D,V,ue):null;case ae:return we=V._init,ie(U,D,we(V._payload),ue)}if(Ye(V)||K(V))return we!==null?null:se(U,D,V,ue,null);Ei(U,V)}return null}function fe(U,D,V,ue,we){if(typeof ue=="string"&&ue!==""||typeof ue=="number")return U=U.get(V)||null,A(D,U,""+ue,we);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case N:return U=U.get(ue.key===null?V:ue.key)||null,O(D,U,ue,we);case $:return U=U.get(ue.key===null?V:ue.key)||null,X(D,U,ue,we);case ae:var be=ue._init;return fe(U,D,V,be(ue._payload),we)}if(Ye(ue)||K(ue))return U=U.get(V)||null,se(D,U,ue,we,null);Ei(D,ue)}return null}function ge(U,D,V,ue){for(var we=null,be=null,ke=D,_e=D=0,yt=null;ke!==null&&_e<V.length;_e++){ke.index>_e?(yt=ke,ke=null):yt=ke.sibling;var ze=ie(U,ke,V[_e],ue);if(ze===null){ke===null&&(ke=yt);break}e&&ke&&ze.alternate===null&&n(U,ke),D=h(ze,D,_e),be===null?we=ze:be.sibling=ze,be=ze,ke=yt}if(_e===V.length)return o(U,ke),tt&&$r(U,_e),we;if(ke===null){for(;_e<V.length;_e++)ke=le(U,V[_e],ue),ke!==null&&(D=h(ke,D,_e),be===null?we=ke:be.sibling=ke,be=ke);return tt&&$r(U,_e),we}for(ke=l(U,ke);_e<V.length;_e++)yt=fe(ke,U,_e,V[_e],ue),yt!==null&&(e&&yt.alternate!==null&&ke.delete(yt.key===null?_e:yt.key),D=h(yt,D,_e),be===null?we=yt:be.sibling=yt,be=yt);return e&&ke.forEach(function(fr){return n(U,fr)}),tt&&$r(U,_e),we}function ye(U,D,V,ue){var we=K(V);if(typeof we!="function")throw Error(i(150));if(V=we.call(V),V==null)throw Error(i(151));for(var be=we=null,ke=D,_e=D=0,yt=null,ze=V.next();ke!==null&&!ze.done;_e++,ze=V.next()){ke.index>_e?(yt=ke,ke=null):yt=ke.sibling;var fr=ie(U,ke,ze.value,ue);if(fr===null){ke===null&&(ke=yt);break}e&&ke&&fr.alternate===null&&n(U,ke),D=h(fr,D,_e),be===null?we=fr:be.sibling=fr,be=fr,ke=yt}if(ze.done)return o(U,ke),tt&&$r(U,_e),we;if(ke===null){for(;!ze.done;_e++,ze=V.next())ze=le(U,ze.value,ue),ze!==null&&(D=h(ze,D,_e),be===null?we=ze:be.sibling=ze,be=ze);return tt&&$r(U,_e),we}for(ke=l(U,ke);!ze.done;_e++,ze=V.next())ze=fe(ke,U,_e,ze.value,ue),ze!==null&&(e&&ze.alternate!==null&&ke.delete(ze.key===null?_e:ze.key),D=h(ze,D,_e),be===null?we=ze:be.sibling=ze,be=ze);return e&&ke.forEach(function(ev){return n(U,ev)}),tt&&$r(U,_e),we}function it(U,D,V,ue){if(typeof V=="object"&&V!==null&&V.type===E&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case N:e:{for(var we=V.key,be=D;be!==null;){if(be.key===we){if(we=V.type,we===E){if(be.tag===7){o(U,be.sibling),D=d(be,V.props.children),D.return=U,U=D;break e}}else if(be.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===ae&&Sh(we)===be.type){o(U,be.sibling),D=d(be,V.props),D.ref=Ca(U,be,V),D.return=U,U=D;break e}o(U,be);break}else n(U,be);be=be.sibling}V.type===E?(D=Dr(V.props.children,U.mode,ue,V.key),D.return=U,U=D):(ue=as(V.type,V.key,V.props,null,U.mode,ue),ue.ref=Ca(U,D,V),ue.return=U,U=ue)}return y(U);case $:e:{for(be=V.key;D!==null;){if(D.key===be)if(D.tag===4&&D.stateNode.containerInfo===V.containerInfo&&D.stateNode.implementation===V.implementation){o(U,D.sibling),D=d(D,V.children||[]),D.return=U,U=D;break e}else{o(U,D);break}else n(U,D);D=D.sibling}D=Pc(V,U.mode,ue),D.return=U,U=D}return y(U);case ae:return be=V._init,it(U,D,be(V._payload),ue)}if(Ye(V))return ge(U,D,V,ue);if(K(V))return ye(U,D,V,ue);Ei(U,V)}return typeof V=="string"&&V!==""||typeof V=="number"?(V=""+V,D!==null&&D.tag===6?(o(U,D.sibling),D=d(D,V),D.return=U,U=D):(o(U,D),D=Ec(V,U.mode,ue),D.return=U,U=D),y(U)):o(U,D)}return it}var bo=Nh(!0),Rh=Nh(!1),Pi=rr(null),zi=null,ko=null,Ul=null;function Vl(){Ul=ko=zi=null}function Gl(e){var n=Pi.current;Xe(Pi),e._currentValue=n}function Yl(e,n,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===o)break;e=e.return}}function _o(e,n){zi=e,Ul=ko=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ft=!0),e.firstContext=null)}function sn(e){var n=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:n,next:null},ko===null){if(zi===null)throw Error(i(308));ko=e,zi.dependencies={lanes:0,firstContext:e}}else ko=ko.next=e;return n}var Tr=null;function Kl(e){Tr===null?Tr=[e]:Tr.push(e)}function Mh(e,n,o,l){var d=n.interleaved;return d===null?(o.next=o,Kl(n)):(o.next=d.next,d.next=o),n.interleaved=o,Bn(e,l)}function Bn(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var ir=!1;function Zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function sr(e,n,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,Bn(e,o)}return d=l.interleaved,d===null?(n.next=n,Kl(l)):(n.next=d.next,d.next=n),l.interleaved=n,Bn(e,o)}function Oi(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,o|=l,n.lanes=o,dl(e,o)}}function $h(e,n){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var y={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=y:h=h.next=y,o=o.next}while(o!==null);h===null?d=h=n:h=h.next=n}else d=h=n;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Di(e,n,o,l){var d=e.updateQueue;ir=!1;var h=d.firstBaseUpdate,y=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var O=A,X=O.next;O.next=null,y===null?h=X:y.next=X,y=O;var se=e.alternate;se!==null&&(se=se.updateQueue,A=se.lastBaseUpdate,A!==y&&(A===null?se.firstBaseUpdate=X:A.next=X,se.lastBaseUpdate=O))}if(h!==null){var le=d.baseState;y=0,se=X=O=null,A=h;do{var ie=A.lane,fe=A.eventTime;if((l&ie)===ie){se!==null&&(se=se.next={eventTime:fe,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ge=e,ye=A;switch(ie=n,fe=o,ye.tag){case 1:if(ge=ye.payload,typeof ge=="function"){le=ge.call(fe,le,ie);break e}le=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ye.payload,ie=typeof ge=="function"?ge.call(fe,le,ie):ge,ie==null)break e;le=q({},le,ie);break e;case 2:ir=!0}}A.callback!==null&&A.lane!==0&&(e.flags|=64,ie=d.effects,ie===null?d.effects=[A]:ie.push(A))}else fe={eventTime:fe,lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},se===null?(X=se=fe,O=le):se=se.next=fe,y|=ie;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;ie=A,A=ie.next,ie.next=null,d.lastBaseUpdate=ie,d.shared.pending=null}}while(!0);if(se===null&&(O=le),d.baseState=O,d.firstBaseUpdate=X,d.lastBaseUpdate=se,n=d.shared.interleaved,n!==null){d=n;do y|=d.lane,d=d.next;while(d!==n)}else h===null&&(d.shared.lanes=0);Er|=y,e.lanes=y,e.memoizedState=le}}function Th(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],d=l.callback;if(d!==null){if(l.callback=null,l=o,typeof d!="function")throw Error(i(191,d));d.call(l)}}}var ja={},Nn=rr(ja),Sa=rr(ja),Na=rr(ja);function Ir(e){if(e===ja)throw Error(i(174));return e}function Ql(e,n){switch(Ke(Na,n),Ke(Sa,e),Ke(Nn,ja),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Cn(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Cn(n,e)}Xe(Nn),Ke(Nn,n)}function Co(){Xe(Nn),Xe(Sa),Xe(Na)}function Ih(e){Ir(Na.current);var n=Ir(Nn.current),o=Cn(n,e.type);n!==o&&(Ke(Sa,e),Ke(Nn,o))}function Xl(e){Sa.current===e&&(Xe(Nn),Xe(Sa))}var nt=rr(0);function Bi(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Jl=[];function ec(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Fi=P.ReactCurrentDispatcher,tc=P.ReactCurrentBatchConfig,Ar=0,rt=null,ht=null,gt=null,Wi=!1,Ra=!1,Ma=0,k2=0;function Rt(){throw Error(i(321))}function nc(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!fn(e[o],n[o]))return!1;return!0}function rc(e,n,o,l,d,h){if(Ar=h,rt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fi.current=e===null||e.memoizedState===null?S2:N2,e=o(l,d),Ra){h=0;do{if(Ra=!1,Ma=0,25<=h)throw Error(i(301));h+=1,gt=ht=null,n.updateQueue=null,Fi.current=R2,e=o(l,d)}while(Ra)}if(Fi.current=Ui,n=ht!==null&&ht.next!==null,Ar=0,gt=ht=rt=null,Wi=!1,n)throw Error(i(300));return e}function oc(){var e=Ma!==0;return Ma=0,e}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?rt.memoizedState=gt=e:gt=gt.next=e,gt}function ln(){if(ht===null){var e=rt.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var n=gt===null?rt.memoizedState:gt.next;if(n!==null)gt=n,ht=e;else{if(e===null)throw Error(i(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},gt===null?rt.memoizedState=gt=e:gt=gt.next=e}return gt}function La(e,n){return typeof n=="function"?n(e):n}function ac(e){var n=ln(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var l=ht,d=l.baseQueue,h=o.pending;if(h!==null){if(d!==null){var y=d.next;d.next=h.next,h.next=y}l.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,l=l.baseState;var A=y=null,O=null,X=h;do{var se=X.lane;if((Ar&se)===se)O!==null&&(O=O.next={lane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),l=X.hasEagerState?X.eagerState:e(l,X.action);else{var le={lane:se,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null};O===null?(A=O=le,y=l):O=O.next=le,rt.lanes|=se,Er|=se}X=X.next}while(X!==null&&X!==h);O===null?y=l:O.next=A,fn(l,n.memoizedState)||(Ft=!0),n.memoizedState=l,n.baseState=y,n.baseQueue=O,o.lastRenderedState=l}if(e=o.interleaved,e!==null){d=e;do h=d.lane,rt.lanes|=h,Er|=h,d=d.next;while(d!==e)}else d===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function ic(e){var n=ln(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var l=o.dispatch,d=o.pending,h=n.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do h=e(h,y.action),y=y.next;while(y!==d);fn(h,n.memoizedState)||(Ft=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),o.lastRenderedState=h}return[h,l]}function Ah(){}function Eh(e,n){var o=rt,l=ln(),d=n(),h=!fn(l.memoizedState,d);if(h&&(l.memoizedState=d,Ft=!0),l=l.queue,sc(Oh.bind(null,o,l,e),[e]),l.getSnapshot!==n||h||gt!==null&&gt.memoizedState.tag&1){if(o.flags|=2048,$a(9,zh.bind(null,o,l,d,n),void 0,null),vt===null)throw Error(i(349));(Ar&30)!==0||Ph(o,n,d)}return d}function Ph(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=rt.updateQueue,n===null?(n={lastEffect:null,stores:null},rt.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function zh(e,n,o,l){n.value=o,n.getSnapshot=l,Dh(n)&&Bh(e)}function Oh(e,n,o){return o(function(){Dh(n)&&Bh(e)})}function Dh(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!fn(e,o)}catch{return!0}}function Bh(e){var n=Bn(e,1);n!==null&&xn(n,e,1,-1)}function Fh(e){var n=Rn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},n.queue=e,e=e.dispatch=j2.bind(null,rt,e),[n.memoizedState,e]}function $a(e,n,o,l){return e={tag:e,create:n,destroy:o,deps:l,next:null},n=rt.updateQueue,n===null?(n={lastEffect:null,stores:null},rt.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,n.lastEffect=e)),e}function Wh(){return ln().memoizedState}function Hi(e,n,o,l){var d=Rn();rt.flags|=e,d.memoizedState=$a(1|n,o,void 0,l===void 0?null:l)}function qi(e,n,o,l){var d=ln();l=l===void 0?null:l;var h=void 0;if(ht!==null){var y=ht.memoizedState;if(h=y.destroy,l!==null&&nc(l,y.deps)){d.memoizedState=$a(n,o,h,l);return}}rt.flags|=e,d.memoizedState=$a(1|n,o,h,l)}function Hh(e,n){return Hi(8390656,8,e,n)}function sc(e,n){return qi(2048,8,e,n)}function qh(e,n){return qi(4,2,e,n)}function Uh(e,n){return qi(4,4,e,n)}function Vh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gh(e,n,o){return o=o!=null?o.concat([e]):null,qi(4,4,Vh.bind(null,n,e),o)}function lc(){}function Yh(e,n){var o=ln();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&nc(n,l[1])?l[0]:(o.memoizedState=[e,n],e)}function Kh(e,n){var o=ln();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&nc(n,l[1])?l[0]:(e=e(),o.memoizedState=[e,n],e)}function Zh(e,n,o){return(Ar&21)===0?(e.baseState&&(e.baseState=!1,Ft=!0),e.memoizedState=o):(fn(o,n)||(o=Su(),rt.lanes|=o,Er|=o,e.baseState=!0),n)}function _2(e,n){var o=He;He=o!==0&&4>o?o:4,e(!0);var l=tc.transition;tc.transition={};try{e(!1),n()}finally{He=o,tc.transition=l}}function Qh(){return ln().memoizedState}function C2(e,n,o){var l=ur(e);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Xh(e))Jh(n,o);else if(o=Mh(e,n,o,l),o!==null){var d=Pt();xn(o,e,l,d),ep(o,n,l)}}function j2(e,n,o){var l=ur(e),d={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Xh(e))Jh(n,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,A=h(y,o);if(d.hasEagerState=!0,d.eagerState=A,fn(A,y)){var O=n.interleaved;O===null?(d.next=d,Kl(n)):(d.next=O.next,O.next=d),n.interleaved=d;return}}catch{}finally{}o=Mh(e,n,d,l),o!==null&&(d=Pt(),xn(o,e,l,d),ep(o,n,l))}}function Xh(e){var n=e.alternate;return e===rt||n!==null&&n===rt}function Jh(e,n){Ra=Wi=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function ep(e,n,o){if((o&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,o|=l,n.lanes=o,dl(e,o)}}var Ui={readContext:sn,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},S2={readContext:sn,useCallback:function(e,n){return Rn().memoizedState=[e,n===void 0?null:n],e},useContext:sn,useEffect:Hh,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Hi(4194308,4,Vh.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Hi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Hi(4,2,e,n)},useMemo:function(e,n){var o=Rn();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var l=Rn();return n=o!==void 0?o(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=C2.bind(null,rt,e),[l.memoizedState,e]},useRef:function(e){var n=Rn();return e={current:e},n.memoizedState=e},useState:Fh,useDebugValue:lc,useDeferredValue:function(e){return Rn().memoizedState=e},useTransition:function(){var e=Fh(!1),n=e[0];return e=_2.bind(null,e[1]),Rn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var l=rt,d=Rn();if(tt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),vt===null)throw Error(i(349));(Ar&30)!==0||Ph(l,n,o)}d.memoizedState=o;var h={value:o,getSnapshot:n};return d.queue=h,Hh(Oh.bind(null,l,h,e),[e]),l.flags|=2048,$a(9,zh.bind(null,l,h,o,n),void 0,null),o},useId:function(){var e=Rn(),n=vt.identifierPrefix;if(tt){var o=Dn,l=On;o=(l&~(1<<32-pn(l)-1)).toString(32)+o,n=":"+n+"R"+o,o=Ma++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=k2++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},N2={readContext:sn,useCallback:Yh,useContext:sn,useEffect:sc,useImperativeHandle:Gh,useInsertionEffect:qh,useLayoutEffect:Uh,useMemo:Kh,useReducer:ac,useRef:Wh,useState:function(){return ac(La)},useDebugValue:lc,useDeferredValue:function(e){var n=ln();return Zh(n,ht.memoizedState,e)},useTransition:function(){var e=ac(La)[0],n=ln().memoizedState;return[e,n]},useMutableSource:Ah,useSyncExternalStore:Eh,useId:Qh,unstable_isNewReconciler:!1},R2={readContext:sn,useCallback:Yh,useContext:sn,useEffect:sc,useImperativeHandle:Gh,useInsertionEffect:qh,useLayoutEffect:Uh,useMemo:Kh,useReducer:ic,useRef:Wh,useState:function(){return ic(La)},useDebugValue:lc,useDeferredValue:function(e){var n=ln();return ht===null?n.memoizedState=e:Zh(n,ht.memoizedState,e)},useTransition:function(){var e=ic(La)[0],n=ln().memoizedState;return[e,n]},useMutableSource:Ah,useSyncExternalStore:Eh,useId:Qh,unstable_isNewReconciler:!1};function gn(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function cc(e,n,o,l){n=e.memoizedState,o=o(l,n),o=o==null?n:q({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Vi={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var l=Pt(),d=ur(e),h=Fn(l,d);h.payload=n,o!=null&&(h.callback=o),n=sr(e,h,d),n!==null&&(xn(n,e,d,l),Oi(n,e,d))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var l=Pt(),d=ur(e),h=Fn(l,d);h.tag=1,h.payload=n,o!=null&&(h.callback=o),n=sr(e,h,d),n!==null&&(xn(n,e,d,l),Oi(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=Pt(),l=ur(e),d=Fn(o,l);d.tag=2,n!=null&&(d.callback=n),n=sr(e,d,l),n!==null&&(xn(n,e,l,o),Oi(n,e,l))}};function tp(e,n,o,l,d,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,y):n.prototype&&n.prototype.isPureReactComponent?!va(o,l)||!va(d,h):!0}function np(e,n,o){var l=!1,d=or,h=n.contextType;return typeof h=="object"&&h!==null?h=sn(h):(d=Bt(n)?Mr:Nt.current,l=n.contextTypes,h=(l=l!=null)?vo(e,d):or),n=new n(o,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Vi,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=h),n}function rp(e,n,o,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,l),n.state!==e&&Vi.enqueueReplaceState(n,n.state,null)}function dc(e,n,o,l){var d=e.stateNode;d.props=o,d.state=e.memoizedState,d.refs={},Zl(e);var h=n.contextType;typeof h=="object"&&h!==null?d.context=sn(h):(h=Bt(n)?Mr:Nt.current,d.context=vo(e,h)),d.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(cc(e,n,h,o),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Vi.enqueueReplaceState(d,d.state,null),Di(e,o,d,l),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function jo(e,n){try{var o="",l=n;do o+=oe(l),l=l.return;while(l);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:d,digest:null}}function uc(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function hc(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var M2=typeof WeakMap=="function"?WeakMap:Map;function op(e,n,o){o=Fn(-1,o),o.tag=3,o.payload={element:null};var l=n.value;return o.callback=function(){Ji||(Ji=!0,Nc=l),hc(e,n)},o}function ap(e,n,o){o=Fn(-1,o),o.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var d=n.value;o.payload=function(){return l(d)},o.callback=function(){hc(e,n)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){hc(e,n),typeof l!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})}),o}function ip(e,n,o){var l=e.pingCache;if(l===null){l=e.pingCache=new M2;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(o)||(d.add(o),e=H2.bind(null,e,n,o),n.then(e,e))}function sp(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function lp(e,n,o,l,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Fn(-1,1),n.tag=2,sr(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var L2=P.ReactCurrentOwner,Ft=!1;function Et(e,n,o,l){n.child=e===null?Rh(n,null,o,l):bo(n,e.child,o,l)}function cp(e,n,o,l,d){o=o.render;var h=n.ref;return _o(n,d),l=rc(e,n,o,l,h,d),o=oc(),e!==null&&!Ft?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,Wn(e,n,d)):(tt&&o&&Bl(n),n.flags|=1,Et(e,n,l,d),n.child)}function dp(e,n,o,l,d){if(e===null){var h=o.type;return typeof h=="function"&&!Ac(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=h,up(e,n,h,l,d)):(e=as(o.type,null,l,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,(e.lanes&d)===0){var y=h.memoizedProps;if(o=o.compare,o=o!==null?o:va,o(y,l)&&e.ref===n.ref)return Wn(e,n,d)}return n.flags|=1,e=pr(h,l),e.ref=n.ref,e.return=n,n.child=e}function up(e,n,o,l,d){if(e!==null){var h=e.memoizedProps;if(va(h,l)&&e.ref===n.ref)if(Ft=!1,n.pendingProps=l=h,(e.lanes&d)!==0)(e.flags&131072)!==0&&(Ft=!0);else return n.lanes=e.lanes,Wn(e,n,d)}return pc(e,n,o,l,d)}function hp(e,n,o){var l=n.pendingProps,d=l.children,h=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(No,Qt),Qt|=o;else{if((o&1073741824)===0)return e=h!==null?h.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ke(No,Qt),Qt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Ke(No,Qt),Qt|=l}else h!==null?(l=h.baseLanes|o,n.memoizedState=null):l=o,Ke(No,Qt),Qt|=l;return Et(e,n,d,o),n.child}function pp(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function pc(e,n,o,l,d){var h=Bt(o)?Mr:Nt.current;return h=vo(n,h),_o(n,d),o=rc(e,n,o,l,h,d),l=oc(),e!==null&&!Ft?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,Wn(e,n,d)):(tt&&l&&Bl(n),n.flags|=1,Et(e,n,o,d),n.child)}function fp(e,n,o,l,d){if(Bt(o)){var h=!0;Li(n)}else h=!1;if(_o(n,d),n.stateNode===null)Yi(e,n),np(n,o,l),dc(n,o,l,d),l=!0;else if(e===null){var y=n.stateNode,A=n.memoizedProps;y.props=A;var O=y.context,X=o.contextType;typeof X=="object"&&X!==null?X=sn(X):(X=Bt(o)?Mr:Nt.current,X=vo(n,X));var se=o.getDerivedStateFromProps,le=typeof se=="function"||typeof y.getSnapshotBeforeUpdate=="function";le||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(A!==l||O!==X)&&rp(n,y,l,X),ir=!1;var ie=n.memoizedState;y.state=ie,Di(n,l,y,d),O=n.memoizedState,A!==l||ie!==O||Dt.current||ir?(typeof se=="function"&&(cc(n,o,se,l),O=n.memoizedState),(A=ir||tp(n,o,A,l,ie,O,X))?(le||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(n.flags|=4194308)):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=O),y.props=l,y.state=O,y.context=X,l=A):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{y=n.stateNode,Lh(e,n),A=n.memoizedProps,X=n.type===n.elementType?A:gn(n.type,A),y.props=X,le=n.pendingProps,ie=y.context,O=o.contextType,typeof O=="object"&&O!==null?O=sn(O):(O=Bt(o)?Mr:Nt.current,O=vo(n,O));var fe=o.getDerivedStateFromProps;(se=typeof fe=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(A!==le||ie!==O)&&rp(n,y,l,O),ir=!1,ie=n.memoizedState,y.state=ie,Di(n,l,y,d);var ge=n.memoizedState;A!==le||ie!==ge||Dt.current||ir?(typeof fe=="function"&&(cc(n,o,fe,l),ge=n.memoizedState),(X=ir||tp(n,o,X,l,ie,ge,O)||!1)?(se||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(l,ge,O),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(l,ge,O)),typeof y.componentDidUpdate=="function"&&(n.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof y.componentDidUpdate!="function"||A===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ge),y.props=l,y.state=ge,y.context=O,l=X):(typeof y.componentDidUpdate!="function"||A===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),l=!1)}return fc(e,n,o,l,h,d)}function fc(e,n,o,l,d,h){pp(e,n);var y=(n.flags&128)!==0;if(!l&&!y)return d&&xh(n,o,!1),Wn(e,n,h);l=n.stateNode,L2.current=n;var A=y&&typeof o.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&y?(n.child=bo(n,e.child,null,h),n.child=bo(n,null,A,h)):Et(e,n,A,h),n.memoizedState=l.state,d&&xh(n,o,!0),n.child}function mp(e){var n=e.stateNode;n.pendingContext?vh(e,n.pendingContext,n.pendingContext!==n.context):n.context&&vh(e,n.context,!1),Ql(e,n.containerInfo)}function gp(e,n,o,l,d){return wo(),ql(d),n.flags|=256,Et(e,n,o,l),n.child}var mc={dehydrated:null,treeContext:null,retryLane:0};function gc(e){return{baseLanes:e,cachePool:null,transitions:null}}function vp(e,n,o){var l=n.pendingProps,d=nt.current,h=!1,y=(n.flags&128)!==0,A;if((A=y)||(A=e!==null&&e.memoizedState===null?!1:(d&2)!==0),A?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Ke(nt,d&1),e===null)return Hl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(y=l.children,e=l.fallback,h?(l=n.mode,h=n.child,y={mode:"hidden",children:y},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=y):h=is(y,l,0,null),e=Dr(e,l,o,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=gc(o),n.memoizedState=mc,e):vc(n,y));if(d=e.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return $2(e,n,y,l,A,d,o);if(h){h=l.fallback,y=n.mode,d=e.child,A=d.sibling;var O={mode:"hidden",children:l.children};return(y&1)===0&&n.child!==d?(l=n.child,l.childLanes=0,l.pendingProps=O,n.deletions=null):(l=pr(d,O),l.subtreeFlags=d.subtreeFlags&14680064),A!==null?h=pr(A,h):(h=Dr(h,y,o,null),h.flags|=2),h.return=n,l.return=n,l.sibling=h,n.child=l,l=h,h=n.child,y=e.child.memoizedState,y=y===null?gc(o):{baseLanes:y.baseLanes|o,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=e.childLanes&~o,n.memoizedState=mc,l}return h=e.child,e=h.sibling,l=pr(h,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=o),l.return=n,l.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=l,n.memoizedState=null,l}function vc(e,n){return n=is({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Gi(e,n,o,l){return l!==null&&ql(l),bo(n,e.child,null,o),e=vc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $2(e,n,o,l,d,h,y){if(o)return n.flags&256?(n.flags&=-257,l=uc(Error(i(422))),Gi(e,n,y,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=l.fallback,d=n.mode,l=is({mode:"visible",children:l.children},d,0,null),h=Dr(h,d,y,null),h.flags|=2,l.return=n,h.return=n,l.sibling=h,n.child=l,(n.mode&1)!==0&&bo(n,e.child,null,y),n.child.memoizedState=gc(y),n.memoizedState=mc,h);if((n.mode&1)===0)return Gi(e,n,y,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var A=l.dgst;return l=A,h=Error(i(419)),l=uc(h,l,void 0),Gi(e,n,y,l)}if(A=(y&e.childLanes)!==0,Ft||A){if(l=vt,l!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|y))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Bn(e,d),xn(l,e,d,-1))}return Ic(),l=uc(Error(i(421))),Gi(e,n,y,l)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=q2.bind(null,e),d._reactRetry=n,null):(e=h.treeContext,Zt=nr(d.nextSibling),Kt=n,tt=!0,mn=null,e!==null&&(on[an++]=On,on[an++]=Dn,on[an++]=Lr,On=e.id,Dn=e.overflow,Lr=n),n=vc(n,l.children),n.flags|=4096,n)}function yp(e,n,o){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Yl(e.return,n,o)}function yc(e,n,o,l,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=d)}function xp(e,n,o){var l=n.pendingProps,d=l.revealOrder,h=l.tail;if(Et(e,n,l.children,o),l=nt.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yp(e,o,n);else if(e.tag===19)yp(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ke(nt,l),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(o=n.child,d=null;o!==null;)e=o.alternate,e!==null&&Bi(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=n.child,n.child=null):(d=o.sibling,o.sibling=null),yc(n,!1,d,o,h);break;case"backwards":for(o=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Bi(e)===null){n.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}yc(n,!0,o,null,h);break;case"together":yc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Yi(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Wn(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),Er|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=pr(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=pr(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function T2(e,n,o){switch(n.tag){case 3:mp(n),wo();break;case 5:Ih(n);break;case 1:Bt(n.type)&&Li(n);break;case 4:Ql(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,d=n.memoizedProps.value;Ke(Pi,l._currentValue),l._currentValue=d;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Ke(nt,nt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?vp(e,n,o):(Ke(nt,nt.current&1),e=Wn(e,n,o),e!==null?e.sibling:null);Ke(nt,nt.current&1);break;case 19:if(l=(o&n.childLanes)!==0,(e.flags&128)!==0){if(l)return xp(e,n,o);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(nt,nt.current),l)break;return null;case 22:case 23:return n.lanes=0,hp(e,n,o)}return Wn(e,n,o)}var wp,xc,bp,kp;wp=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},xc=function(){},bp=function(e,n,o,l){var d=e.memoizedProps;if(d!==l){e=n.stateNode,Ir(Nn.current);var h=null;switch(o){case"input":d=Ce(e,d),l=Ce(e,l),h=[];break;case"select":d=q({},d,{value:void 0}),l=q({},l,{value:void 0}),h=[];break;case"textarea":d=Tt(e,d),l=Tt(e,l),h=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Ni)}lt(o,l);var y;o=null;for(X in d)if(!l.hasOwnProperty(X)&&d.hasOwnProperty(X)&&d[X]!=null)if(X==="style"){var A=d[X];for(y in A)A.hasOwnProperty(y)&&(o||(o={}),o[y]="")}else X!=="dangerouslySetInnerHTML"&&X!=="children"&&X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&X!=="autoFocus"&&(c.hasOwnProperty(X)?h||(h=[]):(h=h||[]).push(X,null));for(X in l){var O=l[X];if(A=d!=null?d[X]:void 0,l.hasOwnProperty(X)&&O!==A&&(O!=null||A!=null))if(X==="style")if(A){for(y in A)!A.hasOwnProperty(y)||O&&O.hasOwnProperty(y)||(o||(o={}),o[y]="");for(y in O)O.hasOwnProperty(y)&&A[y]!==O[y]&&(o||(o={}),o[y]=O[y])}else o||(h||(h=[]),h.push(X,o)),o=O;else X==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,A=A?A.__html:void 0,O!=null&&A!==O&&(h=h||[]).push(X,O)):X==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(X,""+O):X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&(c.hasOwnProperty(X)?(O!=null&&X==="onScroll"&&Qe("scroll",e),h||A===O||(h=[])):(h=h||[]).push(X,O))}o&&(h=h||[]).push("style",o);var X=h;(n.updateQueue=X)&&(n.flags|=4)}},kp=function(e,n,o,l){o!==l&&(n.flags|=4)};function Ta(e,n){if(!tt)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Mt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(n)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=o,n}function I2(e,n,o){var l=n.pendingProps;switch(Fl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(n),null;case 1:return Bt(n.type)&&Mi(),Mt(n),null;case 3:return l=n.stateNode,Co(),Xe(Dt),Xe(Nt),ec(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ai(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mn!==null&&(Lc(mn),mn=null))),xc(e,n),Mt(n),null;case 5:Xl(n);var d=Ir(Na.current);if(o=n.type,e!==null&&n.stateNode!=null)bp(e,n,o,l,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return Mt(n),null}if(e=Ir(Nn.current),Ai(n)){l=n.stateNode,o=n.type;var h=n.memoizedProps;switch(l[Sn]=n,l[ka]=h,e=(n.mode&1)!==0,o){case"dialog":Qe("cancel",l),Qe("close",l);break;case"iframe":case"object":case"embed":Qe("load",l);break;case"video":case"audio":for(d=0;d<xa.length;d++)Qe(xa[d],l);break;case"source":Qe("error",l);break;case"img":case"image":case"link":Qe("error",l),Qe("load",l);break;case"details":Qe("toggle",l);break;case"input":Me(l,h),Qe("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Qe("invalid",l);break;case"textarea":We(l,h),Qe("invalid",l)}lt(o,h),d=null;for(var y in h)if(h.hasOwnProperty(y)){var A=h[y];y==="children"?typeof A=="string"?l.textContent!==A&&(h.suppressHydrationWarning!==!0&&Si(l.textContent,A,e),d=["children",A]):typeof A=="number"&&l.textContent!==""+A&&(h.suppressHydrationWarning!==!0&&Si(l.textContent,A,e),d=["children",""+A]):c.hasOwnProperty(y)&&A!=null&&y==="onScroll"&&Qe("scroll",l)}switch(o){case"input":pe(l),Ve(l,h,!0);break;case"textarea":pe(l),_t(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Ni)}l=d,n.updateQueue=l,l!==null&&(n.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_n(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=y.createElement(o,{is:l.is}):(e=y.createElement(o),o==="select"&&(y=e,l.multiple?y.multiple=!0:l.size&&(y.size=l.size))):e=y.createElementNS(e,o),e[Sn]=n,e[ka]=l,wp(e,n,!1,!1),n.stateNode=e;e:{switch(y=At(o,l),o){case"dialog":Qe("cancel",e),Qe("close",e),d=l;break;case"iframe":case"object":case"embed":Qe("load",e),d=l;break;case"video":case"audio":for(d=0;d<xa.length;d++)Qe(xa[d],e);d=l;break;case"source":Qe("error",e),d=l;break;case"img":case"image":case"link":Qe("error",e),Qe("load",e),d=l;break;case"details":Qe("toggle",e),d=l;break;case"input":Me(e,l),d=Ce(e,l),Qe("invalid",e);break;case"option":d=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},d=q({},l,{value:void 0}),Qe("invalid",e);break;case"textarea":We(e,l),d=Tt(e,l),Qe("invalid",e);break;default:d=l}lt(o,d),A=d;for(h in A)if(A.hasOwnProperty(h)){var O=A[h];h==="style"?Ne(e,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Jo(e,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&oo(e,O):typeof O=="number"&&oo(e,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(c.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Qe("scroll",e):O!=null&&C(e,h,O,y))}switch(o){case"input":pe(e),Ve(e,l,!1);break;case"textarea":pe(e),_t(e);break;case"option":l.value!=null&&e.setAttribute("value",""+W(l.value));break;case"select":e.multiple=!!l.multiple,h=l.value,h!=null?Ge(e,!!l.multiple,h,!1):l.defaultValue!=null&&Ge(e,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Ni)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Mt(n),null;case 6:if(e&&n.stateNode!=null)kp(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(o=Ir(Na.current),Ir(Nn.current),Ai(n)){if(l=n.stateNode,o=n.memoizedProps,l[Sn]=n,(h=l.nodeValue!==o)&&(e=Kt,e!==null))switch(e.tag){case 3:Si(l.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(l.nodeValue,o,(e.mode&1)!==0)}h&&(n.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Sn]=n,n.stateNode=l}return Mt(n),null;case 13:if(Xe(nt),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tt&&Zt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)jh(),wo(),n.flags|=98560,h=!1;else if(h=Ai(n),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(i(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Sn]=n}else wo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Mt(n),h=!1}else mn!==null&&(Lc(mn),mn=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(nt.current&1)!==0?pt===0&&(pt=3):Ic())),n.updateQueue!==null&&(n.flags|=4),Mt(n),null);case 4:return Co(),xc(e,n),e===null&&wa(n.stateNode.containerInfo),Mt(n),null;case 10:return Gl(n.type._context),Mt(n),null;case 17:return Bt(n.type)&&Mi(),Mt(n),null;case 19:if(Xe(nt),h=n.memoizedState,h===null)return Mt(n),null;if(l=(n.flags&128)!==0,y=h.rendering,y===null)if(l)Ta(h,!1);else{if(pt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(y=Bi(e),y!==null){for(n.flags|=128,Ta(h,!1),l=y.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=o,o=n.child;o!==null;)h=o,e=l,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,e=y.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Ke(nt,nt.current&1|2),n.child}e=e.sibling}h.tail!==null&&at()>Ro&&(n.flags|=128,l=!0,Ta(h,!1),n.lanes=4194304)}else{if(!l)if(e=Bi(y),e!==null){if(n.flags|=128,l=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Ta(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!tt)return Mt(n),null}else 2*at()-h.renderingStartTime>Ro&&o!==1073741824&&(n.flags|=128,l=!0,Ta(h,!1),n.lanes=4194304);h.isBackwards?(y.sibling=n.child,n.child=y):(o=h.last,o!==null?o.sibling=y:n.child=y,h.last=y)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=at(),n.sibling=null,o=nt.current,Ke(nt,l?o&1|2:o&1),n):(Mt(n),null);case 22:case 23:return Tc(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Qt&1073741824)!==0&&(Mt(n),n.subtreeFlags&6&&(n.flags|=8192)):Mt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function A2(e,n){switch(Fl(n),n.tag){case 1:return Bt(n.type)&&Mi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Co(),Xe(Dt),Xe(Nt),ec(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Xl(n),null;case 13:if(Xe(nt),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));wo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Xe(nt),null;case 4:return Co(),null;case 10:return Gl(n.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var Ki=!1,Lt=!1,E2=typeof WeakSet=="function"?WeakSet:Set,me=null;function So(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){ot(e,n,l)}else o.current=null}function wc(e,n,o){try{o()}catch(l){ot(e,n,l)}}var _p=!1;function P2(e,n){if(Tl=mi,e=th(),Cl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var y=0,A=-1,O=-1,X=0,se=0,le=e,ie=null;t:for(;;){for(var fe;le!==o||d!==0&&le.nodeType!==3||(A=y+d),le!==h||l!==0&&le.nodeType!==3||(O=y+l),le.nodeType===3&&(y+=le.nodeValue.length),(fe=le.firstChild)!==null;)ie=le,le=fe;for(;;){if(le===e)break t;if(ie===o&&++X===d&&(A=y),ie===h&&++se===l&&(O=y),(fe=le.nextSibling)!==null)break;le=ie,ie=le.parentNode}le=fe}o=A===-1||O===-1?null:{start:A,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(Il={focusedElem:e,selectionRange:o},mi=!1,me=n;me!==null;)if(n=me,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,me=e;else for(;me!==null;){n=me;try{var ge=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ye=ge.memoizedProps,it=ge.memoizedState,U=n.stateNode,D=U.getSnapshotBeforeUpdate(n.elementType===n.type?ye:gn(n.type,ye),it);U.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var V=n.stateNode.containerInfo;V.nodeType===1?V.textContent="":V.nodeType===9&&V.documentElement&&V.removeChild(V.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ue){ot(n,n.return,ue)}if(e=n.sibling,e!==null){e.return=n.return,me=e;break}me=n.return}return ge=_p,_p=!1,ge}function Ia(e,n,o){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&e)===e){var h=d.destroy;d.destroy=void 0,h!==void 0&&wc(n,o,h)}d=d.next}while(d!==l)}}function Zi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var l=o.create;o.destroy=l()}o=o.next}while(o!==n)}}function bc(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function Cp(e){var n=e.alternate;n!==null&&(e.alternate=null,Cp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Sn],delete n[ka],delete n[zl],delete n[y2],delete n[x2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jp(e){return e.tag===5||e.tag===3||e.tag===4}function Sp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,n,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Ni));else if(l!==4&&(e=e.child,e!==null))for(kc(e,n,o),e=e.sibling;e!==null;)kc(e,n,o),e=e.sibling}function _c(e,n,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(_c(e,n,o),e=e.sibling;e!==null;)_c(e,n,o),e=e.sibling}var Ct=null,vn=!1;function lr(e,n,o){for(o=o.child;o!==null;)Np(e,n,o),o=o.sibling}function Np(e,n,o){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(ci,o)}catch{}switch(o.tag){case 5:Lt||So(o,n);case 6:var l=Ct,d=vn;Ct=null,lr(e,n,o),Ct=l,vn=d,Ct!==null&&(vn?(e=Ct,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Ct.removeChild(o.stateNode));break;case 18:Ct!==null&&(vn?(e=Ct,o=o.stateNode,e.nodeType===8?Pl(e.parentNode,o):e.nodeType===1&&Pl(e,o),ua(e)):Pl(Ct,o.stateNode));break;case 4:l=Ct,d=vn,Ct=o.stateNode.containerInfo,vn=!0,lr(e,n,o),Ct=l,vn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var h=d,y=h.destroy;h=h.tag,y!==void 0&&((h&2)!==0||(h&4)!==0)&&wc(o,n,y),d=d.next}while(d!==l)}lr(e,n,o);break;case 1:if(!Lt&&(So(o,n),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(A){ot(o,n,A)}lr(e,n,o);break;case 21:lr(e,n,o);break;case 22:o.mode&1?(Lt=(l=Lt)||o.memoizedState!==null,lr(e,n,o),Lt=l):lr(e,n,o);break;default:lr(e,n,o)}}function Rp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new E2),n.forEach(function(l){var d=U2.bind(null,e,l);o.has(l)||(o.add(l),l.then(d,d))})}}function yn(e,n){var o=n.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l];try{var h=e,y=n,A=y;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,vn=!1;break e;case 3:Ct=A.stateNode.containerInfo,vn=!0;break e;case 4:Ct=A.stateNode.containerInfo,vn=!0;break e}A=A.return}if(Ct===null)throw Error(i(160));Np(h,y,d),Ct=null,vn=!1;var O=d.alternate;O!==null&&(O.return=null),d.return=null}catch(X){ot(d,n,X)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Mp(n,e),n=n.sibling}function Mp(e,n){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(n,e),Mn(e),l&4){try{Ia(3,e,e.return),Zi(3,e)}catch(ye){ot(e,e.return,ye)}try{Ia(5,e,e.return)}catch(ye){ot(e,e.return,ye)}}break;case 1:yn(n,e),Mn(e),l&512&&o!==null&&So(o,o.return);break;case 5:if(yn(n,e),Mn(e),l&512&&o!==null&&So(o,o.return),e.flags&32){var d=e.stateNode;try{oo(d,"")}catch(ye){ot(e,e.return,ye)}}if(l&4&&(d=e.stateNode,d!=null)){var h=e.memoizedProps,y=o!==null?o.memoizedProps:h,A=e.type,O=e.updateQueue;if(e.updateQueue=null,O!==null)try{A==="input"&&h.type==="radio"&&h.name!=null&&Fe(d,h),At(A,y);var X=At(A,h);for(y=0;y<O.length;y+=2){var se=O[y],le=O[y+1];se==="style"?Ne(d,le):se==="dangerouslySetInnerHTML"?Jo(d,le):se==="children"?oo(d,le):C(d,se,le,X)}switch(A){case"input":Ue(d,h);break;case"textarea":It(d,h);break;case"select":var ie=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var fe=h.value;fe!=null?Ge(d,!!h.multiple,fe,!1):ie!==!!h.multiple&&(h.defaultValue!=null?Ge(d,!!h.multiple,h.defaultValue,!0):Ge(d,!!h.multiple,h.multiple?[]:"",!1))}d[ka]=h}catch(ye){ot(e,e.return,ye)}}break;case 6:if(yn(n,e),Mn(e),l&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,h=e.memoizedProps;try{d.nodeValue=h}catch(ye){ot(e,e.return,ye)}}break;case 3:if(yn(n,e),Mn(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ua(n.containerInfo)}catch(ye){ot(e,e.return,ye)}break;case 4:yn(n,e),Mn(e);break;case 13:yn(n,e),Mn(e),d=e.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Sc=at())),l&4&&Rp(e);break;case 22:if(se=o!==null&&o.memoizedState!==null,e.mode&1?(Lt=(X=Lt)||se,yn(n,e),Lt=X):yn(n,e),Mn(e),l&8192){if(X=e.memoizedState!==null,(e.stateNode.isHidden=X)&&!se&&(e.mode&1)!==0)for(me=e,se=e.child;se!==null;){for(le=me=se;me!==null;){switch(ie=me,fe=ie.child,ie.tag){case 0:case 11:case 14:case 15:Ia(4,ie,ie.return);break;case 1:So(ie,ie.return);var ge=ie.stateNode;if(typeof ge.componentWillUnmount=="function"){l=ie,o=ie.return;try{n=l,ge.props=n.memoizedProps,ge.state=n.memoizedState,ge.componentWillUnmount()}catch(ye){ot(l,o,ye)}}break;case 5:So(ie,ie.return);break;case 22:if(ie.memoizedState!==null){Tp(le);continue}}fe!==null?(fe.return=ie,me=fe):Tp(le)}se=se.sibling}e:for(se=null,le=e;;){if(le.tag===5){if(se===null){se=le;try{d=le.stateNode,X?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(A=le.stateNode,O=le.memoizedProps.style,y=O!=null&&O.hasOwnProperty("display")?O.display:null,A.style.display=ai("display",y))}catch(ye){ot(e,e.return,ye)}}}else if(le.tag===6){if(se===null)try{le.stateNode.nodeValue=X?"":le.memoizedProps}catch(ye){ot(e,e.return,ye)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===e)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===e)break e;for(;le.sibling===null;){if(le.return===null||le.return===e)break e;se===le&&(se=null),le=le.return}se===le&&(se=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:yn(n,e),Mn(e),l&4&&Rp(e);break;case 21:break;default:yn(n,e),Mn(e)}}function Mn(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(jp(o)){var l=o;break e}o=o.return}throw Error(i(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(oo(d,""),l.flags&=-33);var h=Sp(e);_c(e,h,d);break;case 3:case 4:var y=l.stateNode.containerInfo,A=Sp(e);kc(e,A,y);break;default:throw Error(i(161))}}catch(O){ot(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function z2(e,n,o){me=e,Lp(e)}function Lp(e,n,o){for(var l=(e.mode&1)!==0;me!==null;){var d=me,h=d.child;if(d.tag===22&&l){var y=d.memoizedState!==null||Ki;if(!y){var A=d.alternate,O=A!==null&&A.memoizedState!==null||Lt;A=Ki;var X=Lt;if(Ki=y,(Lt=O)&&!X)for(me=d;me!==null;)y=me,O=y.child,y.tag===22&&y.memoizedState!==null?Ip(d):O!==null?(O.return=y,me=O):Ip(d);for(;h!==null;)me=h,Lp(h),h=h.sibling;me=d,Ki=A,Lt=X}$p(e)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,me=h):$p(e)}}function $p(e){for(;me!==null;){var n=me;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Lt||Zi(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Lt)if(o===null)l.componentDidMount();else{var d=n.elementType===n.type?o.memoizedProps:gn(n.type,o.memoizedProps);l.componentDidUpdate(d,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&Th(n,h,l);break;case 3:var y=n.updateQueue;if(y!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Th(n,y,o)}break;case 5:var A=n.stateNode;if(o===null&&n.flags&4){o=A;var O=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var X=n.alternate;if(X!==null){var se=X.memoizedState;if(se!==null){var le=se.dehydrated;le!==null&&ua(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Lt||n.flags&512&&bc(n)}catch(ie){ot(n,n.return,ie)}}if(n===e){me=null;break}if(o=n.sibling,o!==null){o.return=n.return,me=o;break}me=n.return}}function Tp(e){for(;me!==null;){var n=me;if(n===e){me=null;break}var o=n.sibling;if(o!==null){o.return=n.return,me=o;break}me=n.return}}function Ip(e){for(;me!==null;){var n=me;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{Zi(4,n)}catch(O){ot(n,o,O)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var d=n.return;try{l.componentDidMount()}catch(O){ot(n,d,O)}}var h=n.return;try{bc(n)}catch(O){ot(n,h,O)}break;case 5:var y=n.return;try{bc(n)}catch(O){ot(n,y,O)}}}catch(O){ot(n,n.return,O)}if(n===e){me=null;break}var A=n.sibling;if(A!==null){A.return=n.return,me=A;break}me=n.return}}var O2=Math.ceil,Qi=P.ReactCurrentDispatcher,Cc=P.ReactCurrentOwner,cn=P.ReactCurrentBatchConfig,Pe=0,vt=null,ct=null,jt=0,Qt=0,No=rr(0),pt=0,Aa=null,Er=0,Xi=0,jc=0,Ea=null,Wt=null,Sc=0,Ro=1/0,Hn=null,Ji=!1,Nc=null,cr=null,es=!1,dr=null,ts=0,Pa=0,Rc=null,ns=-1,rs=0;function Pt(){return(Pe&6)!==0?at():ns!==-1?ns:ns=at()}function ur(e){return(e.mode&1)===0?1:(Pe&2)!==0&&jt!==0?jt&-jt:b2.transition!==null?(rs===0&&(rs=Su()),rs):(e=He,e!==0||(e=window.event,e=e===void 0?16:Eu(e.type)),e)}function xn(e,n,o,l){if(50<Pa)throw Pa=0,Rc=null,Error(i(185));ia(e,o,l),((Pe&2)===0||e!==vt)&&(e===vt&&((Pe&2)===0&&(Xi|=o),pt===4&&hr(e,jt)),Ht(e,l),o===1&&Pe===0&&(n.mode&1)===0&&(Ro=at()+500,$i&&ar()))}function Ht(e,n){var o=e.callbackNode;bg(e,n);var l=hi(e,e===vt?jt:0);if(l===0)o!==null&&_u(o),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(o!=null&&_u(o),n===1)e.tag===0?w2(Ep.bind(null,e)):wh(Ep.bind(null,e)),g2(function(){(Pe&6)===0&&ar()}),o=null;else{switch(Nu(l)){case 1:o=sl;break;case 4:o=Cu;break;case 16:o=li;break;case 536870912:o=ju;break;default:o=li}o=Hp(o,Ap.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function Ap(e,n){if(ns=-1,rs=0,(Pe&6)!==0)throw Error(i(327));var o=e.callbackNode;if(Mo()&&e.callbackNode!==o)return null;var l=hi(e,e===vt?jt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=os(e,l);else{n=l;var d=Pe;Pe|=2;var h=zp();(vt!==e||jt!==n)&&(Hn=null,Ro=at()+500,zr(e,n));do try{F2();break}catch(A){Pp(e,A)}while(!0);Vl(),Qi.current=h,Pe=d,ct!==null?n=0:(vt=null,jt=0,n=pt)}if(n!==0){if(n===2&&(d=ll(e),d!==0&&(l=d,n=Mc(e,d))),n===1)throw o=Aa,zr(e,0),hr(e,l),Ht(e,at()),o;if(n===6)hr(e,l);else{if(d=e.current.alternate,(l&30)===0&&!D2(d)&&(n=os(e,l),n===2&&(h=ll(e),h!==0&&(l=h,n=Mc(e,h))),n===1))throw o=Aa,zr(e,0),hr(e,l),Ht(e,at()),o;switch(e.finishedWork=d,e.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:Or(e,Wt,Hn);break;case 3:if(hr(e,l),(l&130023424)===l&&(n=Sc+500-at(),10<n)){if(hi(e,0)!==0)break;if(d=e.suspendedLanes,(d&l)!==l){Pt(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=El(Or.bind(null,e,Wt,Hn),n);break}Or(e,Wt,Hn);break;case 4:if(hr(e,l),(l&4194240)===l)break;for(n=e.eventTimes,d=-1;0<l;){var y=31-pn(l);h=1<<y,y=n[y],y>d&&(d=y),l&=~h}if(l=d,l=at()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*O2(l/1960))-l,10<l){e.timeoutHandle=El(Or.bind(null,e,Wt,Hn),l);break}Or(e,Wt,Hn);break;case 5:Or(e,Wt,Hn);break;default:throw Error(i(329))}}}return Ht(e,at()),e.callbackNode===o?Ap.bind(null,e):null}function Mc(e,n){var o=Ea;return e.current.memoizedState.isDehydrated&&(zr(e,n).flags|=256),e=os(e,n),e!==2&&(n=Wt,Wt=o,n!==null&&Lc(n)),e}function Lc(e){Wt===null?Wt=e:Wt.push.apply(Wt,e)}function D2(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var d=o[l],h=d.getSnapshot;d=d.value;try{if(!fn(h(),d))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hr(e,n){for(n&=~jc,n&=~Xi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-pn(n),l=1<<o;e[o]=-1,n&=~l}}function Ep(e){if((Pe&6)!==0)throw Error(i(327));Mo();var n=hi(e,0);if((n&1)===0)return Ht(e,at()),null;var o=os(e,n);if(e.tag!==0&&o===2){var l=ll(e);l!==0&&(n=l,o=Mc(e,l))}if(o===1)throw o=Aa,zr(e,0),hr(e,n),Ht(e,at()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Or(e,Wt,Hn),Ht(e,at()),null}function $c(e,n){var o=Pe;Pe|=1;try{return e(n)}finally{Pe=o,Pe===0&&(Ro=at()+500,$i&&ar())}}function Pr(e){dr!==null&&dr.tag===0&&(Pe&6)===0&&Mo();var n=Pe;Pe|=1;var o=cn.transition,l=He;try{if(cn.transition=null,He=1,e)return e()}finally{He=l,cn.transition=o,Pe=n,(Pe&6)===0&&ar()}}function Tc(){Qt=No.current,Xe(No)}function zr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,m2(o)),ct!==null)for(o=ct.return;o!==null;){var l=o;switch(Fl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Mi();break;case 3:Co(),Xe(Dt),Xe(Nt),ec();break;case 5:Xl(l);break;case 4:Co();break;case 13:Xe(nt);break;case 19:Xe(nt);break;case 10:Gl(l.type._context);break;case 22:case 23:Tc()}o=o.return}if(vt=e,ct=e=pr(e.current,null),jt=Qt=n,pt=0,Aa=null,jc=Xi=Er=0,Wt=Ea=null,Tr!==null){for(n=0;n<Tr.length;n++)if(o=Tr[n],l=o.interleaved,l!==null){o.interleaved=null;var d=l.next,h=o.pending;if(h!==null){var y=h.next;h.next=d,l.next=y}o.pending=l}Tr=null}return e}function Pp(e,n){do{var o=ct;try{if(Vl(),Fi.current=Ui,Wi){for(var l=rt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Wi=!1}if(Ar=0,gt=ht=rt=null,Ra=!1,Ma=0,Cc.current=null,o===null||o.return===null){pt=1,Aa=n,ct=null;break}e:{var h=e,y=o.return,A=o,O=n;if(n=jt,A.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var X=O,se=A,le=se.tag;if((se.mode&1)===0&&(le===0||le===11||le===15)){var ie=se.alternate;ie?(se.updateQueue=ie.updateQueue,se.memoizedState=ie.memoizedState,se.lanes=ie.lanes):(se.updateQueue=null,se.memoizedState=null)}var fe=sp(y);if(fe!==null){fe.flags&=-257,lp(fe,y,A,h,n),fe.mode&1&&ip(h,X,n),n=fe,O=X;var ge=n.updateQueue;if(ge===null){var ye=new Set;ye.add(O),n.updateQueue=ye}else ge.add(O);break e}else{if((n&1)===0){ip(h,X,n),Ic();break e}O=Error(i(426))}}else if(tt&&A.mode&1){var it=sp(y);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),lp(it,y,A,h,n),ql(jo(O,A));break e}}h=O=jo(O,A),pt!==4&&(pt=2),Ea===null?Ea=[h]:Ea.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var U=op(h,O,n);$h(h,U);break e;case 1:A=O;var D=h.type,V=h.stateNode;if((h.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(cr===null||!cr.has(V)))){h.flags|=65536,n&=-n,h.lanes|=n;var ue=ap(h,A,n);$h(h,ue);break e}}h=h.return}while(h!==null)}Dp(o)}catch(we){n=we,ct===o&&o!==null&&(ct=o=o.return);continue}break}while(!0)}function zp(){var e=Qi.current;return Qi.current=Ui,e===null?Ui:e}function Ic(){(pt===0||pt===3||pt===2)&&(pt=4),vt===null||(Er&268435455)===0&&(Xi&268435455)===0||hr(vt,jt)}function os(e,n){var o=Pe;Pe|=2;var l=zp();(vt!==e||jt!==n)&&(Hn=null,zr(e,n));do try{B2();break}catch(d){Pp(e,d)}while(!0);if(Vl(),Pe=o,Qi.current=l,ct!==null)throw Error(i(261));return vt=null,jt=0,pt}function B2(){for(;ct!==null;)Op(ct)}function F2(){for(;ct!==null&&!hg();)Op(ct)}function Op(e){var n=Wp(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,n===null?Dp(e):ct=n,Cc.current=null}function Dp(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=I2(o,n,Qt),o!==null){ct=o;return}}else{if(o=A2(o,n),o!==null){o.flags&=32767,ct=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pt=6,ct=null;return}}if(n=n.sibling,n!==null){ct=n;return}ct=n=e}while(n!==null);pt===0&&(pt=5)}function Or(e,n,o){var l=He,d=cn.transition;try{cn.transition=null,He=1,W2(e,n,o,l)}finally{cn.transition=d,He=l}return null}function W2(e,n,o,l){do Mo();while(dr!==null);if((Pe&6)!==0)throw Error(i(327));o=e.finishedWork;var d=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var h=o.lanes|o.childLanes;if(kg(e,h),e===vt&&(ct=vt=null,jt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||es||(es=!0,Hp(li,function(){return Mo(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=cn.transition,cn.transition=null;var y=He;He=1;var A=Pe;Pe|=4,Cc.current=null,P2(e,o),Mp(o,e),l2(Il),mi=!!Tl,Il=Tl=null,e.current=o,z2(o),pg(),Pe=A,He=y,cn.transition=h}else e.current=o;if(es&&(es=!1,dr=e,ts=d),h=e.pendingLanes,h===0&&(cr=null),gg(o.stateNode),Ht(e,at()),n!==null)for(l=e.onRecoverableError,o=0;o<n.length;o++)d=n[o],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ji)throw Ji=!1,e=Nc,Nc=null,e;return(ts&1)!==0&&e.tag!==0&&Mo(),h=e.pendingLanes,(h&1)!==0?e===Rc?Pa++:(Pa=0,Rc=e):Pa=0,ar(),null}function Mo(){if(dr!==null){var e=Nu(ts),n=cn.transition,o=He;try{if(cn.transition=null,He=16>e?16:e,dr===null)var l=!1;else{if(e=dr,dr=null,ts=0,(Pe&6)!==0)throw Error(i(331));var d=Pe;for(Pe|=4,me=e.current;me!==null;){var h=me,y=h.child;if((me.flags&16)!==0){var A=h.deletions;if(A!==null){for(var O=0;O<A.length;O++){var X=A[O];for(me=X;me!==null;){var se=me;switch(se.tag){case 0:case 11:case 15:Ia(8,se,h)}var le=se.child;if(le!==null)le.return=se,me=le;else for(;me!==null;){se=me;var ie=se.sibling,fe=se.return;if(Cp(se),se===X){me=null;break}if(ie!==null){ie.return=fe,me=ie;break}me=fe}}}var ge=h.alternate;if(ge!==null){var ye=ge.child;if(ye!==null){ge.child=null;do{var it=ye.sibling;ye.sibling=null,ye=it}while(ye!==null)}}me=h}}if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,me=y;else e:for(;me!==null;){if(h=me,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ia(9,h,h.return)}var U=h.sibling;if(U!==null){U.return=h.return,me=U;break e}me=h.return}}var D=e.current;for(me=D;me!==null;){y=me;var V=y.child;if((y.subtreeFlags&2064)!==0&&V!==null)V.return=y,me=V;else e:for(y=D;me!==null;){if(A=me,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Zi(9,A)}}catch(we){ot(A,A.return,we)}if(A===y){me=null;break e}var ue=A.sibling;if(ue!==null){ue.return=A.return,me=ue;break e}me=A.return}}if(Pe=d,ar(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(ci,e)}catch{}l=!0}return l}finally{He=o,cn.transition=n}}return!1}function Bp(e,n,o){n=jo(o,n),n=op(e,n,1),e=sr(e,n,1),n=Pt(),e!==null&&(ia(e,1,n),Ht(e,n))}function ot(e,n,o){if(e.tag===3)Bp(e,e,o);else for(;n!==null;){if(n.tag===3){Bp(n,e,o);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cr===null||!cr.has(l))){e=jo(o,e),e=ap(n,e,1),n=sr(n,e,1),e=Pt(),n!==null&&(ia(n,1,e),Ht(n,e));break}}n=n.return}}function H2(e,n,o){var l=e.pingCache;l!==null&&l.delete(n),n=Pt(),e.pingedLanes|=e.suspendedLanes&o,vt===e&&(jt&o)===o&&(pt===4||pt===3&&(jt&130023424)===jt&&500>at()-Sc?zr(e,0):jc|=o),Ht(e,n)}function Fp(e,n){n===0&&((e.mode&1)===0?n=1:(n=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var o=Pt();e=Bn(e,n),e!==null&&(ia(e,n,o),Ht(e,o))}function q2(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Fp(e,o)}function U2(e,n){var o=0;switch(e.tag){case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),Fp(e,o)}var Wp;Wp=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Dt.current)Ft=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return Ft=!1,T2(e,n,o);Ft=(e.flags&131072)!==0}else Ft=!1,tt&&(n.flags&1048576)!==0&&bh(n,Ii,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Yi(e,n),e=n.pendingProps;var d=vo(n,Nt.current);_o(n,o),d=rc(null,n,l,e,d,o);var h=oc();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Bt(l)?(h=!0,Li(n)):h=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Zl(n),d.updater=Vi,n.stateNode=d,d._reactInternals=n,dc(n,l,e,o),n=fc(null,n,l,!0,h,o)):(n.tag=0,tt&&h&&Bl(n),Et(null,n,d,o),n=n.child),n;case 16:l=n.elementType;e:{switch(Yi(e,n),e=n.pendingProps,d=l._init,l=d(l._payload),n.type=l,d=n.tag=G2(l),e=gn(l,e),d){case 0:n=pc(null,n,l,e,o);break e;case 1:n=fp(null,n,l,e,o);break e;case 11:n=cp(null,n,l,e,o);break e;case 14:n=dp(null,n,l,gn(l.type,e),o);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:gn(l,d),pc(e,n,l,d,o);case 1:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:gn(l,d),fp(e,n,l,d,o);case 3:e:{if(mp(n),e===null)throw Error(i(387));l=n.pendingProps,h=n.memoizedState,d=h.element,Lh(e,n),Di(n,l,null,o);var y=n.memoizedState;if(l=y.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){d=jo(Error(i(423)),n),n=gp(e,n,l,o,d);break e}else if(l!==d){d=jo(Error(i(424)),n),n=gp(e,n,l,o,d);break e}else for(Zt=nr(n.stateNode.containerInfo.firstChild),Kt=n,tt=!0,mn=null,o=Rh(n,null,l,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(wo(),l===d){n=Wn(e,n,o);break e}Et(e,n,l,o)}n=n.child}return n;case 5:return Ih(n),e===null&&Hl(n),l=n.type,d=n.pendingProps,h=e!==null?e.memoizedProps:null,y=d.children,Al(l,d)?y=null:h!==null&&Al(l,h)&&(n.flags|=32),pp(e,n),Et(e,n,y,o),n.child;case 6:return e===null&&Hl(n),null;case 13:return vp(e,n,o);case 4:return Ql(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=bo(n,null,l,o):Et(e,n,l,o),n.child;case 11:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:gn(l,d),cp(e,n,l,d,o);case 7:return Et(e,n,n.pendingProps,o),n.child;case 8:return Et(e,n,n.pendingProps.children,o),n.child;case 12:return Et(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(l=n.type._context,d=n.pendingProps,h=n.memoizedProps,y=d.value,Ke(Pi,l._currentValue),l._currentValue=y,h!==null)if(fn(h.value,y)){if(h.children===d.children&&!Dt.current){n=Wn(e,n,o);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var A=h.dependencies;if(A!==null){y=h.child;for(var O=A.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Fn(-1,o&-o),O.tag=2;var X=h.updateQueue;if(X!==null){X=X.shared;var se=X.pending;se===null?O.next=O:(O.next=se.next,se.next=O),X.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),Yl(h.return,o,n),A.lanes|=o;break}O=O.next}}else if(h.tag===10)y=h.type===n.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(i(341));y.lanes|=o,A=y.alternate,A!==null&&(A.lanes|=o),Yl(y,o,n),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===n){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}Et(e,n,d.children,o),n=n.child}return n;case 9:return d=n.type,l=n.pendingProps.children,_o(n,o),d=sn(d),l=l(d),n.flags|=1,Et(e,n,l,o),n.child;case 14:return l=n.type,d=gn(l,n.pendingProps),d=gn(l.type,d),dp(e,n,l,d,o);case 15:return up(e,n,n.type,n.pendingProps,o);case 17:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:gn(l,d),Yi(e,n),n.tag=1,Bt(l)?(e=!0,Li(n)):e=!1,_o(n,o),np(n,l,d),dc(n,l,d,o),fc(null,n,l,!0,e,o);case 19:return xp(e,n,o);case 22:return hp(e,n,o)}throw Error(i(156,n.tag))};function Hp(e,n){return ku(e,n)}function V2(e,n,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,n,o,l){return new V2(e,n,o,l)}function Ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G2(e){if(typeof e=="function")return Ac(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Z)return 11;if(e===ce)return 14}return 2}function pr(e,n){var o=e.alternate;return o===null?(o=dn(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function as(e,n,o,l,d,h){var y=2;if(l=e,typeof e=="function")Ac(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case E:return Dr(o.children,d,h,n);case z:y=8,d|=8;break;case B:return e=dn(12,o,n,d|2),e.elementType=B,e.lanes=h,e;case te:return e=dn(13,o,n,d),e.elementType=te,e.lanes=h,e;case re:return e=dn(19,o,n,d),e.elementType=re,e.lanes=h,e;case G:return is(o,d,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:y=10;break e;case J:y=9;break e;case Z:y=11;break e;case ce:y=14;break e;case ae:y=16,l=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=dn(y,o,n,d),n.elementType=e,n.type=l,n.lanes=h,n}function Dr(e,n,o,l){return e=dn(7,e,l,n),e.lanes=o,e}function is(e,n,o,l){return e=dn(22,e,l,n),e.elementType=G,e.lanes=o,e.stateNode={isHidden:!1},e}function Ec(e,n,o){return e=dn(6,e,null,n),e.lanes=o,e}function Pc(e,n,o){return n=dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Y2(e,n,o,l,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zc(e,n,o,l,d,h,y,A,O){return e=new Y2(e,n,o,A,O),n===1?(n=1,h===!0&&(n|=8)):n=0,h=dn(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(h),e}function K2(e,n,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:l==null?null:""+l,children:e,containerInfo:n,implementation:o}}function qp(e){if(!e)return or;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Bt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Bt(o))return yh(e,o,n)}return n}function Up(e,n,o,l,d,h,y,A,O){return e=zc(o,l,!0,e,d,h,y,A,O),e.context=qp(null),o=e.current,l=Pt(),d=ur(o),h=Fn(l,d),h.callback=n??null,sr(o,h,d),e.current.lanes=d,ia(e,d,l),Ht(e,l),e}function ss(e,n,o,l){var d=n.current,h=Pt(),y=ur(d);return o=qp(o),n.context===null?n.context=o:n.pendingContext=o,n=Fn(h,y),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=sr(d,n,y),e!==null&&(xn(e,d,y,h),Oi(e,d,y)),y}function ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Oc(e,n){Vp(e,n),(e=e.alternate)&&Vp(e,n)}function Z2(){return null}var Gp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dc(e){this._internalRoot=e}cs.prototype.render=Dc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));ss(e,n,null,null)},cs.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pr(function(){ss(null,e,null,null)}),n[Pn]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Lu();e={blockedOn:null,target:e,priority:n};for(var o=0;o<Jn.length&&n!==0&&n<Jn[o].priority;o++);Jn.splice(o,0,e),o===0&&Iu(e)}};function Bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function Q2(e,n,o,l,d){if(d){if(typeof l=="function"){var h=l;l=function(){var X=ls(y);h.call(X)}}var y=Up(n,l,e,0,null,!1,!1,"",Yp);return e._reactRootContainer=y,e[Pn]=y.current,wa(e.nodeType===8?e.parentNode:e),Pr(),y}for(;d=e.lastChild;)e.removeChild(d);if(typeof l=="function"){var A=l;l=function(){var X=ls(O);A.call(X)}}var O=zc(e,0,!1,null,null,!1,!1,"",Yp);return e._reactRootContainer=O,e[Pn]=O.current,wa(e.nodeType===8?e.parentNode:e),Pr(function(){ss(n,O,o,l)}),O}function us(e,n,o,l,d){var h=o._reactRootContainer;if(h){var y=h;if(typeof d=="function"){var A=d;d=function(){var O=ls(y);A.call(O)}}ss(n,y,e,d)}else y=Q2(o,n,e,d,l);return ls(y)}Ru=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=aa(n.pendingLanes);o!==0&&(dl(n,o|1),Ht(n,at()),(Pe&6)===0&&(Ro=at()+500,ar()))}break;case 13:Pr(function(){var l=Bn(e,1);if(l!==null){var d=Pt();xn(l,e,1,d)}}),Oc(e,1)}},ul=function(e){if(e.tag===13){var n=Bn(e,134217728);if(n!==null){var o=Pt();xn(n,e,134217728,o)}Oc(e,134217728)}},Mu=function(e){if(e.tag===13){var n=ur(e),o=Bn(e,n);if(o!==null){var l=Pt();xn(o,e,n,l)}Oc(e,n)}},Lu=function(){return He},$u=function(e,n){var o=He;try{return He=e,n()}finally{He=o}},ta=function(e,n,o){switch(n){case"input":if(Ue(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var l=o[n];if(l!==e&&l.form===e.form){var d=Ri(l);if(!d)throw Error(i(90));xe(l),Ue(l,d)}}}break;case"textarea":It(e,o);break;case"select":n=o.value,n!=null&&Ge(e,!!o.multiple,n,!1)}},mu=$c,gu=Pr;var X2={usingClientEntryPoint:!1,Events:[_a,mo,Ri,pu,fu,$c]},za={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J2={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wu(e),e===null?null:e.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||Z2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hs.isDisabled&&hs.supportsFiber)try{ci=hs.inject(J2),jn=hs}catch{}}return qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X2,qt.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(n))throw Error(i(200));return K2(e,n,null,o)},qt.createRoot=function(e,n){if(!Bc(e))throw Error(i(299));var o=!1,l="",d=Gp;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=zc(e,1,!1,null,null,o,!1,l,d),e[Pn]=n.current,wa(e.nodeType===8?e.parentNode:e),new Dc(n)},qt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=wu(n),e=e===null?null:e.stateNode,e},qt.flushSync=function(e){return Pr(e)},qt.hydrate=function(e,n,o){if(!ds(n))throw Error(i(200));return us(null,e,n,!0,o)},qt.hydrateRoot=function(e,n,o){if(!Bc(e))throw Error(i(405));var l=o!=null&&o.hydratedSources||null,d=!1,h="",y=Gp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),n=Up(n,null,e,1,o??null,d,!1,h,y),e[Pn]=n.current,wa(e),l)for(e=0;e<l.length;e++)o=l[e],d=o._getVersion,d=d(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,d]:n.mutableSourceEagerHydrationData.push(o,d);return new cs(n)},qt.render=function(e,n,o){if(!ds(n))throw Error(i(200));return us(null,e,n,!1,o)},qt.unmountComponentAtNode=function(e){if(!ds(e))throw Error(i(40));return e._reactRootContainer?(Pr(function(){us(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1},qt.unstable_batchedUpdates=$c,qt.unstable_renderSubtreeIntoContainer=function(e,n,o,l){if(!ds(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return us(e,n,o,!1,l)},qt.version="18.3.1-next-f1338f8080-20240426",qt}var n1;function If(){if(n1)return Hc.exports;n1=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Hc.exports=iv(),Hc.exports}var r1;function sv(){if(r1)return ps;r1=1;var t=If();return ps.createRoot=t.createRoot,ps.hydrateRoot=t.hydrateRoot,ps}var lv=sv();const cv=Tf(lv);function Af(t){var a,i,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var c=t.length;for(a=0;a<c;a++)t[a]&&(i=Af(t[a]))&&(s&&(s+=" "),s+=i)}else for(i in t)t[i]&&(s&&(s+=" "),s+=i);return s}function ne(){for(var t,a,i=0,s="",c=arguments.length;i<c;i++)(t=arguments[i])&&(a=Af(t))&&(s&&(s+=" "),s+=a);return s}const Yo=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Yo.displayName="PlusIcon";const dv="_root_7uomf_13",uv="_sm_7uomf_82",hv="_md_7uomf_88",pv="_lg_7uomf_94",fv="_horizontal_7uomf_107",mv="_alignStart_7uomf_121",gv="_vertical_7uomf_125",vv="_inner_7uomf_131",yv="_iconSlot_7uomf_146",xv="_label_7uomf_163",Br={root:dv,sm:uv,md:hv,lg:pv,horizontal:fv,alignStart:mv,vertical:gv,inner:vv,iconSlot:yv,label:xv};function o1(t){return typeof t=="number"?`${t}px`:t}const wv=g.forwardRef(({size:t="md",layout:a="horizontal",align:i="center",label:s="Add",hideLabel:c=!1,icon:u,height:p,borderRadius:f,className:m,style:x,disabled:v,type:k="button",...w},L)=>{const j=u??r.jsx(Yo,{size:"100%"}),_={};return p!==void 0&&(_["--area-min-height"]=o1(p)),f!==void 0&&(_["--area-radius"]=o1(f)),r.jsx("button",{ref:L,type:k,className:ne(Br.root,Br[t],Br[a],i==="start"&&Br.alignStart,m),disabled:v,"data-size":t,"data-layout":a,style:{..._,...x},...w,children:r.jsxs("span",{className:Br.inner,children:[r.jsx("span",{className:Br.iconSlot,"aria-hidden":"true",children:j}),!c&&s&&r.jsx("span",{className:Br.label,children:s})]})})});wv.displayName="AreaButton";const bv="_root_b29pw_8",kv="_image_b29pw_33",_v="_initials_b29pw_40",Cv="_iconSlot_b29pw_52",mr={root:bv,image:kv,initials:_v,iconSlot:Cv,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function jv({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Sv(t){const a=t.trim().split(/\s+/).filter(c=>/[\p{L}\p{N}]/u.test(c));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),s=a[a.length-1].charAt(0);return(i+s).toUpperCase()}const An=g.forwardRef(({src:t,alt:a,initials:i,name:s,icon:c,size:u="md",color:p="neutral",variant:f="subtle",shape:m="circle",className:x,...v},k)=>{const[w,L]=g.useState(!1),j=!!t&&!w,_=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?Sv(s):"");let M;return j?M=r.jsx("img",{src:t,alt:a??"",className:mr.image,onError:()=>L(!0),draggable:!1},t):_?M=r.jsx("span",{className:mr.initials,"aria-hidden":a?void 0:!0,children:_}):M=r.jsx("span",{className:mr.iconSlot,"aria-hidden":"true",children:c??r.jsx(jv,{})}),r.jsx("span",{ref:k,"data-size":u,"data-color":p,"data-variant":f,"data-shape":m,className:ne(mr.root,mr[`size-${u}`],mr[`color-${p}`],mr[`variant-${f}`],mr[`shape-${m}`],x),...v,children:M})});An.displayName="Avatar";const Nv="_root_uqz3u_7",Rv={root:Nv},zt=g.forwardRef(({as:t="span",className:a,children:i,...s},c)=>r.jsx(t,{ref:c,className:ne(Rv.root,a),...s,children:i}));zt.displayName="Eyebrow";const Mv="_root_1tnwf_15",Lv={root:Mv},$v=g.forwardRef(({scale:t="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:s="",onChange:c,readOnly:u=!1,disabled:p=!1,className:f,onInput:m,...x},v)=>{const k=i!==void 0,w=g.useRef(null),[L,j]=g.useState(()=>k?!i:!s),_=g.useCallback(C=>{w.current=C,typeof v=="function"?v(C):v&&(v.current=C)},[v]);g.useEffect(()=>{!k&&w.current&&s&&(w.current.textContent=s,j(!s))},[]),g.useEffect(()=>{k&&w.current&&(w.current.textContent??"")!==i&&(w.current.textContent=i??"",j(!(i??"")))},[i,k]);const M=C=>{const P=C.currentTarget.textContent??"";j(P===""),c==null||c(P),m==null||m(C)},I=C=>{C.preventDefault();const P=C.clipboardData.getData("text/plain");document.execCommand("insertText",!1,P)},R=!p&&!u;return r.jsx("span",{ref:_,contentEditable:R?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":p||void 0,"aria-readonly":u||void 0,"data-scale":t,"data-empty":L||void 0,"data-placeholder":a,"data-disabled":p||void 0,"data-readonly":u||void 0,className:ne(Lv.root,f),onInput:M,onPaste:I,...x})});$v.displayName="TypeBox";const Tv="_root_1brpy_12",Iv="_ghost_1brpy_27",Av="_path_1brpy_32",Da={root:Tv,"ai-spin":"_ai-spin_1brpy_1",ghost:Iv,"ai-morph":"_ai-morph_1brpy_1",path:Av,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},Ev={xs:16,sm:24,md:32,lg:48,xl:64},Pv={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},a1="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",fs=t=>t==="inverse"||t==="inverse-light",zv=t=>t==="stroke"||t==="stroke-light",zd=g.forwardRef(({size:t="md",variant:a="gradient-fill",state:i="loading",className:s,style:c,"aria-label":u,...p},f)=>{const m=g.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${m}`,v=`aiglow-${m}`,k=typeof t=="string",w=k?Ev[t]:t,L=k?Pv[t]:w<=16?1.75:w<=24?1.5:w<=32?1.25:1.1,j=a==="gradient-fill"?`url(#${x})`:fs(a)?"currentColor":"none",_=fs(a)?"none":zv(a)?"currentColor":`url(#${x})`,M="currentColor",I=a!=="stroke"&&a!=="stroke-light"&&!fs(a);return r.jsxs("svg",{ref:f,width:w,height:w,viewBox:"0 0 24 24",fill:"none",className:ne(Da.root,Da[`variant-${a}`],Da[`state-${i}`],s),style:c,"data-state":i,"aria-label":u??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...p,children:[!fs(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:v,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:a1,stroke:M,strokeWidth:L*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Da.ghost}),r.jsx("path",{d:a1,fill:j,stroke:_==="none"?void 0:_,strokeWidth:_==="none"?void 0:L,strokeLinecap:"round",strokeLinejoin:"round",filter:I?`url(#${v})`:void 0,className:Da.path})]})});zd.displayName="AILoader";const Ov="_root_10act_14",Dv="_hovered_10act_68",Bv="_loading_10act_69",Fv="_sm_10act_90",Wv="_md_10act_98",Hv="_lg_10act_106",qv="_dark_10act_116",Uv="_icon_10act_122",Lo={root:Ov,hovered:Dv,loading:Bv,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:Fv,md:Wv,lg:Hv,dark:qv,icon:Uv},i1={sm:12,md:14,lg:18};function Vv({size:t,light:a}){return r.jsxs("svg",{width:t,height:t,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const Ef=g.forwardRef(({size:t="md",dark:a,loading:i,className:s,onMouseEnter:c,onMouseLeave:u,...p},f)=>{const[m,x]=g.useState(!1);return r.jsx("button",{ref:f,className:ne(Lo.root,Lo[t],a&&Lo.dark,i?Lo.loading:m&&Lo.hovered,s),"aria-busy":i||void 0,onMouseEnter:v=>{x(!0),c==null||c(v)},onMouseLeave:v=>{x(!1),u==null||u(v)},...p,children:r.jsx("span",{className:Lo.icon,children:i?r.jsx(zd,{size:i1[t],variant:a?"inverse-light":"gradient-fill"}):r.jsx(Vv,{size:i1[t],light:a})})})});Ef.displayName="AICoreButton";const Gv="_root_1qx4u_9",Yv="_star_1qx4u_34",Vc={root:Gv,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:Yv},Kv="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Pf=g.forwardRef(({size:t="sm",className:a,...i},s)=>r.jsx("span",{ref:s,"data-size":t,"aria-hidden":"true",className:ne(Vc.root,Vc[`size-${t}`],a),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:Vc.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:Kv,fill:"currentColor"})})}));Pf.displayName="AIAvatar";const Zv="_shell_lalw3_21",Qv="_wrapper_lalw3_58",Xv="_card_lalw3_65",Jv="_cardClip_lalw3_94",ey="_textarea_lalw3_160",ty="_actions_lalw3_203",Po={shell:Zv,wrapper:Qv,card:Xv,cardClip:Jv,textarea:ey,actions:ty},zf=g.forwardRef(({className:t,children:a,...i},s)=>r.jsx("div",{ref:s,className:ne(Po.shell,t),...i,children:a}));zf.displayName="AIComposer";function ny(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const Of=g.forwardRef(({value:t,onChange:a,onSubmit:i,maxRows:s=5,radius:c="sm",placeholder:u="Ask AI anything…",className:p,onKeyDown:f,disabled:m,children:x,style:v,...k},w)=>{const L=g.useRef(null);g.useEffect(()=>{const R=L.current;R&&(R.style.height="auto",R.style.height=`${R.scrollHeight}px`)},[t]);const j=g.useCallback(R=>a(R.target.value),[a]),_=g.useCallback(R=>{f==null||f(R),!R.defaultPrevented&&R.key==="Enter"&&!R.shiftKey&&i&&(R.preventDefault(),i())},[f,i]),M=g.useCallback(R=>{L.current=R,ny(w,R)},[w]),I={...v??{},"--ai-composer-max-rows":s};return r.jsx("div",{className:ne(Po.wrapper,p),"data-radius":c,children:r.jsx("div",{className:Po.card,children:r.jsxs("div",{className:Po.cardClip,children:[r.jsx("textarea",{...k,ref:M,className:Po.textarea,rows:1,value:t,onChange:j,onKeyDown:_,placeholder:u,disabled:m,style:I}),x!=null&&r.jsx("div",{className:Po.actions,children:x})]})})})});Of.displayName="AIComposerInput";const ry="_root_fv0gc_10",oy="_simple_fv0gc_28",ay="_float_fv0gc_83",s1={root:ry,simple:oy,float:ay},iy=g.forwardRef(({variant:t="simple",className:a,children:i,...s},c)=>r.jsx("section",{ref:c,"data-variant":t,className:ne(s1.root,s1[t],a),...s,children:i}));iy.displayName="AIConversation";const sy="_fadeFrame_1l0ib_19",ly="_scroller_1l0ib_32",cy="_content_1l0ib_89",dy="_messageBlock_1l0ib_108",uy="_messageBlockAi_1l0ib_116",hy="_inboundBlock_1l0ib_128",py="_inboundLoader_1l0ib_136",fy="_inboundLoaderLabel_1l0ib_146",my="_outboundBlock_1l0ib_153",gy="_outboundHeader_1l0ib_161",vy="_messageBlockUser_1l0ib_168",yy="_aiThreadOutboundIn_1l0ib_1",xy="_messageBody_1l0ib_182",wy="_messageBodyAi_1l0ib_193",by="_messageBodyUser_1l0ib_200",ky="_label_1l0ib_159",_y="_labelAi_1l0ib_221",Cy="_labelUser_1l0ib_159",jy="_labelAvatar_1l0ib_224",Sy="_labelText_1l0ib_237",Ny="_timestamp_1l0ib_244",Ry="_timestampAi_1l0ib_259",My="_timestampUser_1l0ib_260",Ly="_timestampInline_1l0ib_270",$y="_aiThreadOutboundFadeIn_1l0ib_1",Te={fadeFrame:sy,scroller:ly,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:cy,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:dy,messageBlockAi:uy,inboundBlock:hy,inboundLoader:py,inboundLoaderLabel:fy,outboundBlock:my,outboundHeader:gy,messageBlockUser:vy,aiThreadOutboundIn:yy,messageBody:xy,messageBodyAi:wy,messageBodyUser:by,label:ky,labelAi:_y,labelUser:Cy,labelAvatar:jy,labelText:Sy,timestamp:Ny,timestampAi:Ry,timestampUser:My,timestampInline:Ly,aiThreadOutboundFadeIn:$y},l1=8;function Ty(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const Iy=g.forwardRef(({density:t="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:c,children:u,...p},f)=>{const m=g.useRef(null),x=g.useRef(null),v=g.useRef(!0),[k,w]=g.useState(!1),[L,j]=g.useState(!1),_=g.useCallback(M=>{m.current=M,Ty(f,M)},[f]);return g.useEffect(()=>{const M=m.current,I=x.current;if(!M||!I)return;const R=()=>{const{scrollTop:E,scrollHeight:z,clientHeight:B}=M;return z-E-B<s},C=E=>{M.scrollTo({top:M.scrollHeight,behavior:E?"smooth":"auto"})},P=()=>{const{scrollTop:E,scrollHeight:z,clientHeight:B}=M,Q=E>l1,J=z-E-B>l1;w(Z=>Z===Q?Z:Q),j(Z=>Z===J?Z:J)};i&&(C(!1),v.current=!0),P();const N=()=>{v.current=R(),P()};M.addEventListener("scroll",N,{passive:!0});const $=new ResizeObserver(()=>{i&&v.current&&C(!0),P()});return $.observe(I),$.observe(M),()=>{M.removeEventListener("scroll",N),$.disconnect()}},[i,s]),r.jsx("div",{className:Te.fadeFrame,"data-fade-top":k,"data-fade-bottom":L,children:r.jsx("div",{ref:_,className:ne(Te.scroller,Te[`padding-${a}`],c),...p,children:r.jsx("div",{ref:x,className:ne(Te.content,Te[`density-${t}`]),children:u})})})});Iy.displayName="AIThread";const zs=g.forwardRef(({align:t="ai",avatar:a,className:i,children:s,...c},u)=>r.jsxs("div",{ref:u,className:ne(Te.label,t==="user"?Te.labelUser:Te.labelAi,i),...c,children:[a!=null&&r.jsx("span",{className:Te.labelAvatar,children:a}),r.jsx("span",{className:Te.labelText,children:s})]}));zs.displayName="AILabel";const Ay=t=>t.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function Ey(t,a){if(typeof t=="string")return{text:t};const i=t instanceof Date?t:new Date(t);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const ei=g.forwardRef(({value:t,align:a="ai",format:i=Ay,inline:s=!1,className:c,...u},p)=>{const f=g.useMemo(()=>Ey(t,i),[t,i]);return f?r.jsx("time",{ref:p,className:ne(Te.timestamp,s?Te.timestampInline:a==="user"?Te.timestampUser:Te.timestampAi,c),dateTime:f.iso,...u,children:f.text}):null});ei.displayName="AITimestamp";function Py(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(ei,{align:"ai",value:t}):t}function zy(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(zs,{align:"ai",children:t}):t}const Oy=g.forwardRef(({label:t,time:a,className:i,children:s,...c},u)=>r.jsxs("div",{ref:u,"data-author":"ai",className:ne(Te.messageBlock,Te.messageBlockAi,i),...c,children:[zy(t),r.jsx("div",{className:ne(Te.messageBody,Te.messageBodyAi),children:s}),Py(a)]}));Oy.displayName="AIAssistantMessage";function Dy(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(ei,{align:"user",value:t}):t}function By(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(zs,{align:"user",children:t}):t}const Fy=g.forwardRef(({label:t,time:a,className:i,children:s,...c},u)=>r.jsxs("div",{ref:u,"data-author":"user",className:ne(Te.messageBlock,Te.messageBlockUser,i),...c,children:[By(t),r.jsx("div",{className:ne(Te.messageBody,Te.messageBodyUser),children:s}),Dy(a)]}));Fy.displayName="AIUserMessage";function Wy(t){return t===!1?null:t==null||t===!0?r.jsx(Pf,{size:"sm"}):t}function Hy(t,a){return t==null&&a==null?null:typeof t=="string"||typeof t=="number"||t==null?r.jsx(zs,{align:"ai",avatar:a,children:t}):t}const qy=g.forwardRef(({avatar:t,label:a="Teambridge AI",activity:i,actions:s,loading:c=!1,loaderLabel:u="Thinking…",className:p,children:f,...m},x)=>{const v=Wy(t),k=Hy(a,v);return r.jsxs("div",{ref:x,"data-author":"ai",className:ne(Te.messageBlock,Te.messageBlockAi,Te.inboundBlock,p),...m,children:[k,i,f!=null&&r.jsx("div",{className:ne(Te.messageBody,Te.messageBodyAi),children:f}),c&&r.jsxs("div",{className:Te.inboundLoader,"aria-live":"polite",children:[r.jsx(zd,{size:"xs"}),u!=null&&r.jsx("span",{className:Te.inboundLoaderLabel,children:u})]}),s]})});qy.displayName="AIInboundMessage";function Uy(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const Vy=g.forwardRef(({label:t="You",time:a,timeFormat:i,className:s,children:c,...u},p)=>{const f=a==null?null:Uy(a)?r.jsx(ei,{value:a,format:i,inline:!0}):a,m=t==null?null:typeof t=="string"||typeof t=="number"?r.jsx("span",{className:Te.labelText,children:t}):t,x=m!=null||f!=null;return r.jsxs("div",{ref:p,"data-author":"user",className:ne(Te.messageBlock,Te.messageBlockUser,Te.outboundBlock,s),...u,children:[x&&r.jsxs("div",{className:ne(Te.label,Te.labelUser,Te.outboundHeader),children:[m,f]}),r.jsx("div",{className:ne(Te.messageBody,Te.messageBodyUser),children:c})]})});Vy.displayName="AIOutboundMessage";const Kn=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Kn.displayName="ChevronDownIcon";const Gy="_root_1j4eq_8",Yy="_header_1j4eq_17",Ky="_headerSummary_1j4eq_53",Zy="_aiTrailSummaryFade_1j4eq_1",Qy="_aiTrailHeaderAppend_1j4eq_1",Xy="_aiTrailEllipsis_1j4eq_1",Jy="_headerCurrent_1j4eq_128",e3="_headerChevron_1j4eq_159",t3="_headerChevronExpanded_1j4eq_173",n3="_body_1j4eq_187",r3="_bodyExpanded_1j4eq_200",o3="_bodyCollapsed_1j4eq_201",a3="_bodyInner_1j4eq_203",i3="_bodyContent_1j4eq_187",s3="_step_1j4eq_225",l3="_stepIcon_1j4eq_242",c3="_stepAnimating_1j4eq_256",d3="_aiTrailStepPulse_1j4eq_1",u3="_stepBody_1j4eq_267",h3="_stepHead_1j4eq_282",p3="_stepLabel_1j4eq_286",f3="_stepSeparator_1j4eq_288",m3="_stepDetail_1j4eq_292",g3="_subToggle_1j4eq_302",v3="_subToggleCount_1j4eq_335",y3="_subToggleChevron_1j4eq_339",x3="_subActivityWrap_1j4eq_358",w3="_subActivityExpanded_1j4eq_364",b3="_subActivityCollapsed_1j4eq_365",k3="_subActivityClip_1j4eq_367",_3="_subActivityList_1j4eq_378",C3="_subActivity_1j4eq_358",j3="_aiTrailSubActivityType_1j4eq_1",S3="_aiTrailSubActivityFade_1j4eq_1",qe={root:Gy,header:Yy,headerSummary:Ky,aiTrailSummaryFade:Zy,aiTrailHeaderAppend:Qy,aiTrailEllipsis:Xy,headerCurrent:Jy,headerChevron:e3,headerChevronExpanded:t3,body:n3,bodyExpanded:r3,bodyCollapsed:o3,bodyInner:a3,bodyContent:i3,step:s3,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:l3,stepAnimating:c3,aiTrailStepPulse:d3,stepBody:u3,stepHead:h3,stepLabel:p3,stepSeparator:f3,stepDetail:m3,subToggle:g3,subToggleCount:v3,subToggleChevron:y3,subActivityWrap:x3,subActivityExpanded:w3,subActivityCollapsed:b3,subActivityClip:k3,subActivityList:_3,subActivity:C3,aiTrailSubActivityType:j3,aiTrailSubActivityFade:S3},Od=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Od.displayName="MessageDotsSquareIcon";function Rs({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Rs.displayName="SearchMdIcon";function Oo({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Df=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Df.displayName="Globe01Icon";const Bf=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Bf.displayName="Code02Icon";function Ff({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ff.displayName="Tool01Icon";const Ot=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Wo=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Wo.displayName="AlertCircleIcon";const N3={thinking:r.jsx(Od,{size:14}),tool:r.jsx(Ff,{size:14}),search:r.jsx(Rs,{size:14}),file:r.jsx(Oo,{size:14}),web:r.jsx(Df,{size:14}),code:r.jsx(Bf,{size:14}),content:r.jsx(Ot,{size:14})},Os=g.forwardRef(({type:t,status:a="done",detail:i,icon:s,subActivities:c,groupState:u="done",className:p,children:f,...m},x)=>{const v=a==="active"&&u==="live",k=a==="active"&&u==="live",w=a==="active"||a==="error",[L,j]=g.useState(null),_=L!==null?L:w;g.useEffect(()=>{j(null)},[a]);const M=g.useCallback(()=>j(!_),[_]),I=!!c&&c.length>0,R=(c==null?void 0:c.length)??0,C=a==="error"?r.jsx(Wo,{size:14}):s??N3[t];return r.jsxs("div",{ref:x,"data-step-type":t,"data-step-status":a,className:ne(qe.step,qe[`step-${a}`],v&&qe.stepAnimating,p),...m,children:[r.jsx("span",{className:qe.stepIcon,"aria-hidden":!0,children:C}),r.jsxs("span",{className:qe.stepBody,children:[r.jsxs("span",{className:qe.stepHead,children:[r.jsx("span",{className:qe.stepLabel,children:f}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:qe.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:qe.stepDetail,children:i})]}),I&&r.jsxs("button",{type:"button",className:qe.subToggle,onClick:M,"aria-expanded":_,"aria-label":_?`Collapse ${R} sub-steps`:`Expand ${R} sub-steps`,"data-expanded":_||void 0,children:[r.jsx("span",{className:qe.subToggleCount,children:R}),r.jsx("span",{className:qe.subToggleChevron,"aria-hidden":!0,children:r.jsx(Kn,{size:10})})]})]}),I&&r.jsx(r.Fragment,{children:r.jsx("div",{className:ne(qe.subActivityWrap,_?qe.subActivityExpanded:qe.subActivityCollapsed),"aria-hidden":!_,children:r.jsx("div",{className:qe.subActivityClip,children:r.jsx("ul",{className:qe.subActivityList,"data-animating":k||void 0,children:c.map((P,N)=>r.jsx("li",{className:qe.subActivity,children:P},N))})})})})]})]})});Os.displayName="AIActivityStep";function c1(t){return t==="error"}function R3(t,a,i,s,c,u){if(t==="live")return i.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:c,children:i[s]??i[i.length-1]},s);const p=t==="error"?"Stopped":u?`Thought for ${u}`:"Thought";if(i.length===0){const f=a===1?"1 step":`${a} steps`;return`${p} · ${f}`}return r.jsxs(r.Fragment,{children:[p,i.map((f,m)=>r.jsxs(g.Fragment,{children:[" · ",f]},m))]})}const Dd=g.forwardRef(({state:t="live",expanded:a,defaultExpanded:i,onToggle:s,duration:c,summary:u,className:p,children:f,...m},x)=>{const v=a!==void 0,[k,w]=g.useState(i??c1(t)),[L,j]=g.useState(!1);g.useEffect(()=>{v||L||w(c1(t))},[t,v,L]);const _=v?!!a:k,M=g.useCallback(()=>{const $=!_;v||(w($),j(!0)),s==null||s($)},[_,v,s]),{enhancedChildren:I,stepCount:R,stepLabels:C,currentLabelIdx:P}=g.useMemo(()=>{let $=0;const E=[];let z=-1;return{enhancedChildren:g.Children.map(f,Q=>{if(!g.isValidElement(Q))return Q;const J=Q.props;if(!("type"in J||"status"in J))return Q;$+=1;const te=J.status??"done";return te==="pending"?null:(J.children!=null&&(E.push(J.children),te==="active"&&(z=E.length-1)),M3(Q,t))}),stepCount:$,stepLabels:E,currentLabelIdx:z>=0?z:E.length-1}},[f,t]),N=u??R3(t,R,C,P,qe.headerCurrent,c);return r.jsxs("div",{ref:x,"data-state":t,"data-expanded":_,className:ne(qe.root,p),...m,children:[r.jsxs("button",{type:"button",className:qe.header,onClick:M,"aria-expanded":_,"aria-label":_?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:qe.headerSummary,children:N},`${t}-${P}`),r.jsx("span",{className:ne(qe.headerChevron,_&&qe.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(Kn,{size:14})})]}),r.jsx("div",{className:ne(qe.body,_?qe.bodyExpanded:qe.bodyCollapsed),"aria-hidden":!_,children:r.jsx("div",{className:qe.bodyInner,children:r.jsxs("div",{className:qe.bodyContent,children:[I,t==="done"&&r.jsx(Os,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Dd.displayName="AIActivityTrail";function M3(t,a){return g.cloneElement(t,{groupState:a})}var Ds=If();const L3="_wrapper_3tqlm_10",$3="_tooltip_3tqlm_22",T3="_portal_3tqlm_23",I3="_top_3tqlm_61",A3="_bottom_3tqlm_71",E3="_left_3tqlm_81",P3="_right_3tqlm_91",ms={wrapper:L3,tooltip:$3,portal:T3,top:I3,bottom:A3,left:E3,right:P3},kr=({content:t,placement:a="top",delay:i=0,disabled:s=!1,maxWidth:c=280,offset:u=0,children:p})=>{const[f,m]=g.useState(!1),[x,v]=g.useState({top:0,left:0}),k=g.useRef(null),w=g.useRef(),L=g.useId(),j=g.useCallback(()=>{if(!k.current)return;const C=k.current.getBoundingClientRect(),P=6+u;let N=0,$=0;switch(a){case"top":N=C.top-P,$=C.left+C.width/2;break;case"bottom":N=C.bottom+P,$=C.left+C.width/2;break;case"left":N=C.top+C.height/2,$=C.left-P;break;case"right":N=C.top+C.height/2,$=C.right+P;break}v({top:N,left:$})},[a,u]),_=g.useCallback(()=>{s||(j(),clearTimeout(w.current),i>0?w.current=setTimeout(()=>m(!0),i):m(!0))},[s,i,j]),M=g.useCallback(()=>{clearTimeout(w.current),m(!1)},[]);g.useEffect(()=>{if(!f)return;const C=()=>j();return window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[f,j]);const I=wr.cloneElement(p,{"aria-describedby":f?L:void 0}),R=r.jsx("span",{id:L,role:"tooltip",className:ne(ms.tooltip,ms[a],ms.portal),"data-visible":f||void 0,style:{top:x.top,left:x.left,maxWidth:c!==void 0?c:void 0},children:t});return r.jsxs("span",{ref:k,className:ms.wrapper,onMouseEnter:_,onMouseLeave:M,onFocus:_,onBlur:M,children:[I,Ds.createPortal(R,document.body)]})};kr.displayName="Tooltip";const z3="_root_v8mqg_9",O3="_hover_v8mqg_21",Gc={root:z3,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:O3};function D3(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const Wf=g.forwardRef(({visibility:t="always",align:a="start",time:i,timeFormat:s,className:c,children:u,...p},f)=>{const m=i==null?null:D3(i)?r.jsx(ei,{value:i,format:s,inline:!0}):i,x=k=>{if(!g.isValidElement(k))return k;const w=k;if(w.type===kr)return w;const L=w.props["aria-label"];return L?r.jsx(kr,{content:L,placement:"top",delay:150,children:w}):w},v=g.Children.map(u,k=>{if(g.isValidElement(k)&&k.type===g.Fragment){const w=k.props.children;return g.Children.map(w,x)}return x(k)});return r.jsxs("div",{ref:f,"data-visibility":t,"data-align":a,className:ne(Gc.root,Gc[`align-${a}`],t==="hover"&&Gc.hover,c),...p,children:[v,m]})});Wf.displayName="AIMessageActions";const B3="_card_1apq1_17",F3="_header_1apq1_69",W3="_iconBadge_1apq1_74",H3="_iconInner_1apq1_89",q3="_headerText_1apq1_100",U3="_headerTopRow_1apq1_109",V3="_eyebrow_1apq1_115",G3="_title_1apq1_124",Y3="_subtitle_1apq1_130",K3="_headerTrailing_1apq1_135",Z3="_body_1apq1_141",Q3="_footer_1apq1_152",X3="_footerEnd_1apq1_157",J3="_metaRow_1apq1_162",ex="_metaItem_1apq1_170",tx="_resultHero_1apq1_180",nx="_resultHeadline_1apq1_185",rx="_resultDetail_1apq1_191",ox="_clauses_1apq1_205",ax="_clause_1apq1_205",ix="_clauseLabel_1apq1_215",sx="_clauseBody_1apq1_225",lx="_badgeExecuting_1apq1_245",Ze={card:B3,header:F3,iconBadge:W3,iconInner:H3,headerText:q3,headerTopRow:U3,eyebrow:V3,title:G3,subtitle:Y3,headerTrailing:K3,body:Z3,footer:Q3,footerEnd:X3,metaRow:J3,metaItem:ex,resultHero:tx,resultHeadline:nx,resultDetail:rx,clauses:ox,clause:ax,clauseLabel:ix,clauseBody:sx,badgeExecuting:lx},En=g.forwardRef(({tone:t="neutral",accent:a=!0,fill:i=!1,icon:s,eyebrow:c,title:u,subtitle:p,trailing:f,footer:m,footerEnd:x=!1,className:v,children:k,...w},L)=>{const j=c!=null||f!=null,_=j||u!=null||p!=null,M=s!=null||_;return r.jsxs("div",{ref:L,"data-tone":t,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:ne(Ze.card,v),...w,children:[M&&r.jsxs("div",{className:Ze.header,children:[s!=null&&r.jsx("span",{className:ne(Ze.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:Ze.iconInner,children:s})}),_&&r.jsxs("div",{className:Ze.headerText,children:[j&&r.jsxs("div",{className:Ze.headerTopRow,children:[c!=null&&r.jsx("span",{className:Ze.eyebrow,children:c}),f!=null&&r.jsx("span",{className:Ze.headerTrailing,children:f})]}),u!=null&&r.jsx("span",{className:Ze.title,children:u}),p!=null&&r.jsx("span",{className:Ze.subtitle,children:p})]})]}),k!=null&&r.jsx("div",{className:Ze.body,children:k}),m!=null&&r.jsx("div",{className:ne(Ze.footer,x&&Ze.footerEnd),children:m})]})});En.displayName="UltronCard";const cx="_root_zkkgh_6",dx="_sm_zkkgh_24",ux="_md_zkkgh_33",hx="_lg_zkkgh_42",px="_neutral_zkkgh_53",fx="_blue_zkkgh_66",mx="_azure_zkkgh_79",gx="_purple_zkkgh_92",vx="_pink_zkkgh_105",yx="_red_zkkgh_118",xx="_orange_zkkgh_131",wx="_yellow_zkkgh_144",bx="_matcha_zkkgh_157",kx="_green_zkkgh_170",_x="_subtle_zkkgh_184",Cx="_outline_zkkgh_190",jx="_solid_zkkgh_196",Sx="_dot_zkkgh_203",Nx="_icon_zkkgh_212",Rx="_dismiss_zkkgh_224",Fr={root:cx,sm:dx,md:ux,lg:hx,neutral:px,blue:fx,azure:mx,purple:gx,pink:vx,red:yx,orange:xx,yellow:wx,matcha:bx,green:kx,subtle:_x,outline:Cx,solid:jx,dot:Sx,icon:Nx,dismiss:Rx},ti=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Mx={sm:10,md:12,lg:14},br=g.forwardRef(({variant:t="subtle",color:a="neutral",size:i="md",dot:s,leadingIcon:c,dismissible:u,onDismiss:p,className:f,children:m,...x},v)=>r.jsxs("span",{ref:v,className:ne(Fr.root,Fr[i],Fr[a],Fr[t],f),...x,children:[s&&r.jsx("span",{className:Fr.dot,"aria-hidden":"true"}),c&&r.jsx("span",{className:ne(Fr.icon,"alloy-icon-slot"),"aria-hidden":"true",children:c}),m,u&&r.jsx("button",{type:"button",className:Fr.dismiss,"aria-label":"Remove",onClick:k=>{k.stopPropagation(),p==null||p()},children:r.jsx(ti,{size:Mx[i]})})]}));br.displayName="Tag";function Hf({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Hf.displayName="SlashCircle01Icon";const Bd=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Bd.displayName="EyeIcon";function Bs({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Bs.displayName="Target01Icon";function Ur({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ur.displayName="ClockIcon";const ni=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ni.displayName="RefreshCw04Icon";const _r=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};_r.displayName="CheckCircleIcon";function Fs({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Fs.displayName="Save01Icon";const Lx={sm:11,md:12,lg:14},$x={ignored:{label:"Ignored",color:"neutral",Icon:Hf},monitored:{label:"Monitored",color:"blue",Icon:Bd},recommended:{label:"Recommended",color:"purple",Icon:Bs},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:Ur},executing:{label:"Executing",color:"azure",Icon:ni},completed:{label:"Completed",color:"green",Icon:_r},saved:{label:"Saved",color:"matcha",Icon:Fs}},to=g.forwardRef(({status:t,size:a="sm",label:i,className:s,...c},u)=>{const p=$x[t],f=p.Icon;return r.jsx(br,{ref:u,color:p.color,size:a,variant:"subtle",leadingIcon:r.jsx(f,{size:Lx[a]}),className:ne(t==="executing"&&Ze.badgeExecuting,s),...c,children:i??p.label})});to.displayName="UltronStatusBadge";function Ws({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ws.displayName="Bell01Icon";const Tx=g.forwardRef(({title:t,icon:a,eyebrow:i="Event",meta:s,status:c,tone:u="neutral",children:p,...f},m)=>r.jsx(En,{ref:m,tone:u,eyebrow:i,title:t,icon:a??r.jsx(Ws,{size:14}),trailing:c?r.jsx(to,{status:c}):void 0,...f,children:((s==null?void 0:s.length)||p)&&r.jsxs(r.Fragment,{children:[s!=null&&s.length?r.jsx("div",{className:Ze.metaRow,children:s.map((x,v)=>r.jsxs("span",{className:Ze.metaItem,children:[x.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},v))}):null,p]})}));Tx.displayName="UltronEventCard";const Ix=g.forwardRef(({eyebrow:t="Understanding",icon:a,entities:i,tone:s="info",children:c,...u},p)=>r.jsxs(En,{ref:p,tone:s,eyebrow:t,icon:a??r.jsx(Od,{size:14}),...u,children:[c,i&&r.jsx("div",{className:Ze.metaRow,children:i})]}));Ix.displayName="UltronUnderstandingCard";const Ax={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Ex=g.forwardRef(({eyebrow:t="Decision",icon:a,factors:i,tone:s="warning",children:c,...u},p)=>r.jsxs(En,{ref:p,tone:s,eyebrow:t,icon:a??r.jsx(Bs,{size:14}),...u,children:[c,i!=null&&i.length?r.jsx("div",{className:Ze.metaRow,children:i.map((f,m)=>r.jsx(br,{size:"sm",color:Ax[s],variant:"subtle",children:f},m))}):null]}));Ex.displayName="UltronDecisionCard";const Px="_root_ou64w_8",zx="_xs_ou64w_75",Ox="_sm_ou64w_84",Dx="_md_ou64w_93",Bx="_lg_ou64w_102",Fx="_xl_ou64w_111",Wx="_iconOnly_ou64w_122",Hx="_primary_ou64w_132",qx="_secondary_ou64w_148",Ux="_tertiary_ou64w_167",Vx="_ghost_ou64w_185",Gx="_destructive_ou64w_203",Yx="_destructiveSecondary_ou64w_221",Kx="_artwork_ou64w_69",Zx="_label_ou64w_254",Qx="_spinner_ou64w_69",Xx="_light_ou64w_281",Vt={root:Px,xs:zx,sm:Ox,md:Dx,lg:Bx,xl:Fx,iconOnly:Wx,primary:Hx,secondary:qx,tertiary:Ux,ghost:Vx,destructive:Gx,destructiveSecondary:Yx,artwork:Kx,label:Zx,spinner:Qx,"alloy-spin":"_alloy-spin_ou64w_1",light:Xx},Jx={primary:Vt.primary,secondary:Vt.secondary,tertiary:Vt.tertiary,ghost:Vt.ghost,destructive:Vt.destructive,"destructive-secondary":Vt.destructiveSecondary},Ie=g.forwardRef(({variant:t="primary",size:a="md",loading:i=!1,leadingArtwork:s,trailingArtwork:c,iconOnly:u=!1,className:p,children:f,disabled:m,...x},v)=>{const k=m||i;return r.jsxs("button",{ref:v,className:ne(Vt.root,Jx[t],Vt[a],u&&Vt.iconOnly,p),disabled:k,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":t,"data-size":a,...x,children:[i&&r.jsx("span",{className:Vt.spinner,"aria-hidden":"true"}),!i&&u&&r.jsx("span",{className:ne(Vt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!u&&r.jsxs(r.Fragment,{children:[s&&r.jsx("span",{className:ne(Vt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&r.jsx("span",{className:Vt.label,children:f}),c&&r.jsx("span",{className:ne(Vt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:c})]})]})});Ie.displayName="Button";function qf({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}qf.displayName="XCircleIcon";const e5=g.forwardRef(({eyebrow:t="Recommendation",icon:a,actions:i,onIgnore:s,ignoreLabel:c="Ignore",tone:u="info",children:p,...f},m)=>{const x=r.jsxs(r.Fragment,{children:[i.map((v,k)=>r.jsx(Ie,{size:"sm",variant:v.variant??(k===0?"primary":"secondary"),leadingArtwork:v.icon,loading:v.loading,onClick:v.onClick,children:v.label},k)),s&&r.jsx(Ie,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(qf,{size:16}),onClick:s,children:c})]});return r.jsx(En,{ref:m,tone:u,eyebrow:t,icon:a??r.jsx(Bs,{size:14}),footer:x,...f,children:p})});e5.displayName="UltronRecommendationCard";function Uf({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Uf.displayName="Lock01Icon";const t5=g.forwardRef(({title:t,eyebrow:a="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:c,approving:u=!1,cancelLabel:p="Cancel",onCancel:f,editLabel:m="Edit",onEdit:x,tone:v="warning",children:k,...w},L)=>{const j=r.jsxs(r.Fragment,{children:[f&&r.jsx(Ie,{size:"md",variant:"ghost",onClick:f,children:p}),x&&r.jsx(Ie,{size:"md",variant:"secondary",onClick:x,children:m}),r.jsx(Ie,{size:"md",variant:"primary",leadingArtwork:r.jsx(Ot,{size:18}),loading:u,onClick:c,children:s})]});return r.jsx(En,{ref:L,tone:v,eyebrow:a,title:t,icon:i??r.jsx(Uf,{size:14}),trailing:r.jsx(to,{status:"awaiting-approval"}),footer:j,footerEnd:!0,...w,children:k})});t5.displayName="UltronApprovalCard";const n5=g.forwardRef(({eyebrow:t="Working",icon:a,steps:i,state:s="live",duration:c,tone:u="info",...p},f)=>r.jsx(En,{ref:f,tone:u,eyebrow:t,icon:a??r.jsx(ni,{size:14}),trailing:r.jsx(to,{status:s==="done"?"completed":"executing"}),...p,children:r.jsx(Dd,{state:s,duration:c,children:i.map((m,x)=>r.jsx(Os,{type:m.type??"tool",status:m.status??"pending",detail:m.detail,subActivities:m.subActivities,children:m.label},x))})}));n5.displayName="UltronExecutionCard";const r5=g.forwardRef(({headline:t,detail:a,avatar:i,status:s="completed",tone:c="success",footer:u,...p},f)=>r.jsx(En,{ref:f,tone:c,fill:!0,accent:!1,trailing:r.jsx(to,{status:s}),footer:u,...p,children:r.jsxs("div",{className:Ze.resultHero,children:[r.jsx("span",{className:ne(Ze.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(_r,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:Ze.resultHeadline,children:t}),a!=null&&r.jsx("div",{className:Ze.resultDetail,children:a})]})]})}));r5.displayName="UltronResultCard";function Vf({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Vf.displayName="ZapIcon";const o5=g.forwardRef(({title:t="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:c,saving:u=!1,dismissLabel:p="Not now",onDismiss:f,tone:m="info",children:x,...v},k)=>{const w=r.jsxs(r.Fragment,{children:[r.jsx(Ie,{size:"md",variant:"primary",leadingArtwork:r.jsx(Fs,{size:18}),loading:u,onClick:c,children:s}),f&&r.jsx(Ie,{size:"md",variant:"ghost",onClick:f,children:p})]});return r.jsx(En,{ref:k,tone:m,fill:!0,accent:!1,eyebrow:a,title:t,icon:i??r.jsx(Vf,{size:14}),footer:w,...v,children:x})});o5.displayName="UltronWorkflowSaveCard";const Gf=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Gf.displayName="GitBranch01Icon";function Yc({label:t,children:a}){return r.jsxs("div",{className:Ze.clause,children:[r.jsx("span",{className:Ze.clauseLabel,children:t}),r.jsx("span",{className:Ze.clauseBody,children:a})]})}const a5=g.forwardRef(({name:t,eyebrow:a="Workflow",icon:i,when:s,conditions:c,actions:u,status:p,footer:f,tone:m="info",...x},v)=>r.jsx(En,{ref:v,tone:m,eyebrow:a,title:t,icon:i??r.jsx(Gf,{size:14}),trailing:p?r.jsx(to,{status:p}):void 0,footer:f,...x,children:r.jsxs("div",{className:Ze.clauses,children:[r.jsx(Yc,{label:"When",children:s}),r.jsx(Yc,{label:"If",children:c}),r.jsx(Yc,{label:"Then",children:u})]})}));a5.displayName="UltronWorkflowPreviewCard";const i5="_root_1nyuz_6",s5="_sm_1nyuz_20",l5="_md_1nyuz_29",c5="_lg_1nyuz_38",d5="_divider_1nyuz_48",u5="_interactive_1nyuz_53",h5="_disabled_1nyuz_60",p5="_destructive_1nyuz_64",f5="_selected_1nyuz_78",m5="_label_1nyuz_87",g5="_description_1nyuz_97",v5="_leadingSlot_1nyuz_101",y5="_trailingSlot_1nyuz_102",x5="_content_1nyuz_115",w5="_taSwitch_1nyuz_167",b5="_taSwitchThumb_1nyuz_188",k5="_taCheckbox_1nyuz_203",_5="_taRadio_1nyuz_226",C5="_taRadioDot_1nyuz_244",j5="_taExpand_1nyuz_252",S5="_taStatus_1nyuz_266",N5="_taStatus_success_1nyuz_273",R5="_taStatus_warning_1nyuz_274",M5="_taStatus_error_1nyuz_275",L5="_taStatus_info_1nyuz_276",dt={root:i5,sm:s5,md:l5,lg:c5,divider:d5,interactive:u5,disabled:h5,destructive:p5,selected:f5,label:m5,description:g5,leadingSlot:v5,trailingSlot:y5,content:x5,taSwitch:w5,taSwitchThumb:b5,taCheckbox:k5,taRadio:_5,taRadioDot:C5,taExpand:j5,taStatus:S5,taStatus_success:N5,taStatus_warning:R5,taStatus_error:M5,taStatus_info:L5},rn=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};rn.displayName="ChevronRightIcon";const Fd=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Fd.displayName="ArrowUpRightIcon";const $5="_root_4qytd_5",T5="_neutral_4qytd_25",I5="_primary_4qytd_30",A5="_success_4qytd_35",E5="_warning_4qytd_40",P5="_error_4qytd_45",z5="_info_4qytd_50",d1={root:$5,neutral:T5,primary:I5,success:A5,warning:E5,error:P5,info:z5},no=g.forwardRef(({variant:t="neutral",className:a,children:i,...s},c)=>r.jsx("span",{ref:c,className:ne(d1.root,d1[t],a),...s,children:i}));no.displayName="Badge";const O5=({checked:t})=>r.jsx("span",{className:dt.taSwitch,"data-checked":t||void 0,"aria-hidden":"true",children:r.jsx("span",{className:dt.taSwitchThumb})}),D5=({checked:t})=>r.jsx("span",{className:dt.taCheckbox,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),B5=({checked:t})=>r.jsx("span",{className:dt.taRadio,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("span",{className:dt.taRadioDot})}),F5=({count:t,label:a})=>{const i=t!==void 0?String(t):a;return i?r.jsx(no,{"aria-hidden":"true",children:i}):null},W5=({expanded:t})=>r.jsx("span",{className:dt.taExpand,"data-expanded":t||void 0,"aria-hidden":"true",children:r.jsx(rn,{size:16,color:"currentColor"})}),H5=({variant:t})=>r.jsx("span",{className:ne(dt.taStatus,dt[`taStatus_${t}`]),"aria-hidden":"true"}),q5=new Set(["badge","status"]),nn=g.forwardRef(({label:t,description:a,leadingSlot:i,trailingSlot:s,trailingAction:c,checked:u,defaultChecked:p=!1,onCheckedChange:f,badgeCount:m,badgeLabel:x,expanded:v=!1,statusVariant:k="success",divider:w=!0,size:L="md",interactive:j,selected:_=!1,destructive:M=!1,disabled:I=!1,className:R,onClick:C,onKeyDown:P,...N},$)=>{const E=c==="switch"||c==="checkbox"||c==="radio",[z,B]=g.useState(p),Q=E?u!==void 0?u:z:!1,J=j||!!C||E||c!==void 0&&!q5.has(c),Z=c==="switch"?"switch":c==="checkbox"?"checkbox":c==="radio"?"radio":J?"button":void 0,te=g.useCallback(ae=>{if(!I){if(E){const G=!Q;u===void 0&&B(G),f==null||f(G)}C==null||C(ae)}},[I,E,Q,u,f,C]),re=g.useCallback(ae=>{J&&!I&&(ae.key==="Enter"||ae.key===" ")&&(ae.preventDefault(),te(ae)),P==null||P(ae)},[J,I,te,P]),ce=s??(()=>{if(!c)return null;switch(c){case"chevron":return r.jsx(rn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(Fd,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(O5,{checked:Q});case"checkbox":return r.jsx(D5,{checked:Q});case"radio":return r.jsx(B5,{checked:Q});case"badge":return r.jsx(F5,{count:m,label:x});case"expand":return r.jsx(W5,{expanded:v});case"status":return r.jsx(H5,{variant:k});default:return null}})();return r.jsxs("div",{ref:$,role:Z,tabIndex:J&&!I?0:void 0,"aria-checked":E?Q:void 0,"aria-selected":_||void 0,"aria-disabled":I||void 0,"data-selected":_||void 0,"data-disabled":I||void 0,"data-destructive":M||void 0,"data-trailing-action":c??void 0,className:ne(dt.root,dt[L],w&&dt.divider,J&&dt.interactive,_&&dt.selected,M&&dt.destructive,I&&dt.disabled,R),onClick:I?void 0:te,onKeyDown:re,...N,children:[i&&r.jsx("div",{className:dt.leadingSlot,children:i}),r.jsxs("div",{className:dt.content,children:[r.jsx("span",{className:dt.label,children:t}),a&&r.jsx("span",{className:dt.description,children:a})]}),ce&&r.jsx("div",{className:dt.trailingSlot,children:ce})]})});nn.displayName="ListItem";const U5=g.forwardRef(({title:t,meta:a,icon:i,status:s,...c},u)=>r.jsx(nn,{ref:u,label:t,description:a,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(to,{status:s}),...c}));U5.displayName="UltronActivityStreamItem";const V5="_root_1sz1z_7",G5="_status_1sz1z_50",Kc={root:V5,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:G5},Yf=g.forwardRef(({disabled:t=!1,size:a="md",escapeTarget:i,onEscape:s,className:c,children:u,...p},f)=>{const m=g.useRef(null),[x,v]=g.useState(""),k=g.Children.map(u,w=>{if(!g.isValidElement(w))return w;const L=w.props;return g.cloneElement(w,{groupDisabled:t||!!L.groupDisabled})});return g.useEffect(()=>{if(!i||!s)return;const w=L=>{L.key==="Escape"&&s()};return i.addEventListener("keydown",w),()=>i.removeEventListener("keydown",w)},[i,s]),g.useCallback(w=>v(w),[]),r.jsxs("div",{ref:f,"data-size":a,className:ne(Kc.root,Kc[`size-${a}`],c),...p,children:[k,r.jsx("span",{ref:m,className:Kc.status,role:"status","aria-live":"polite",children:x})]})});Yf.displayName="ComposerActions";function Zc({size:t=24,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Wd=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Wd.displayName="SearchSmIcon";const bs=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};bs.displayName="Trash03Icon";const Kf=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Kf.displayName="SunIcon";function Fa({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function u1({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Y5({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Ms=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ms.displayName="ChevronSelectorVerticalIcon";const Vr=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:u,strokeLinecap:"round",strokeLinejoin:"round"})]})};Vr.displayName="ClipboardCheckIcon";const Zf=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.25:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:u})})};Zf.displayName="SettingsGearIcon";const Qf=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Qf.displayName="ChevronLeftIcon";const Xf=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Xf.displayName="EyeOffIcon";const Jf=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Jf.displayName="StopIcon";const em=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};em.displayName="RecordingIcon";const tm=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};tm.displayName="BankIcon";function Hs({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Hs.displayName="ArrowNarrowUpIcon";function nm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}nm.displayName="ArrowNarrowDownIcon";function rm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}rm.displayName="Microphone02Icon";const om=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};om.displayName="AlertTriangleIcon";function K5({size:t=16,color:a="currentColor",...i}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const am=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};am.displayName="Map01Icon";const im=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};im.displayName="ThumbsUpIcon";const sm=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};sm.displayName="ThumbsDownIcon";function qs({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}qs.displayName="CheckVerified01Icon";function lm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}lm.displayName="Copy01Icon";function cm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}cm.displayName="Edit02Icon";function Us({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Us.displayName="LinkExternal01Icon";function Ls({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ls.displayName="MessageCircle02Icon";function Hd({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Hd.displayName="MinusIcon";function dm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}dm.displayName="Moon01Icon";function qd({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const c=typeof t=="number"?t:parseFloat(t),u=i??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}qd.displayName="XCloseIcon";const Z5="_base_i93xz_11",Q5="_icon_i93xz_45",X5="_sendReady_i93xz_65",J5="_sendStreaming_i93xz_66",e4="_sendDisabled_i93xz_67",t4="_sendError_i93xz_68",n4="_attachIdle_i93xz_131",r4="_attachDisabled_i93xz_145",o4="_attachError_i93xz_152",a4="_voiceIdle_i93xz_165",i4="_voiceRecording_i93xz_179",s4="_voiceDisabled_i93xz_189",l4="_iconStack_i93xz_200",c4="_iconLayer_i93xz_209",st={base:Z5,icon:Q5,sendReady:X5,sendStreaming:J5,sendDisabled:e4,sendError:t4,attachIdle:n4,attachDisabled:r4,attachError:o4,voiceIdle:a4,voiceRecording:i4,voiceDisabled:s4,iconStack:l4,iconLayer:c4},d4={hidden:void 0,ready:st.sendReady,"disabled-invalid":st.sendDisabled,streaming:st.sendStreaming,error:st.sendError},u4=(t,a,i)=>{switch(t){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},um=g.forwardRef(({state:t,onSend:a,onStop:i,onRetry:s,invalidReason:c,errorMessage:u,groupDisabled:p,className:f,style:m,...x},v)=>{const k=g.useRef(null),w=g.useRef(null),L=g.useCallback(C=>{w.current=C,typeof v=="function"?v(C):v&&(v.current=C)},[v]),j=g.useCallback(()=>{if(t==="ready"){a==null||a();return}if(t==="streaming"){i==null||i();return}if(t==="error"){const C=w.current;C&&(C.dataset.pressed="true",k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{C.dataset.pressed="false"},140)),s==null||s()}},[t,a,i,s]);if(t==="hidden")return null;const _=!p&&(t==="ready"||t==="streaming"||t==="error"),M=u4(t,c,u),I=t==="disabled-invalid"?c??"Cannot send":t==="error"?u??"Send failed — click to retry":null,R=r.jsx("button",{ref:L,type:"button","data-composer-action":"send","data-state":t,className:ne(st.base,d4[t],f),style:m,"aria-label":M,disabled:!_,onClick:j,...x,children:r.jsxs("span",{className:st.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:st.iconLayer,"data-active":t==="ready"||t==="disabled-invalid"?"true":"false",children:r.jsx(Hs,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="streaming"?"true":"false",children:r.jsx(Jf,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="error"?"true":"false",children:r.jsx(ni,{size:"100%",strokeWidth:2})})]})});return I?r.jsx(kr,{content:I,placement:"top",children:R}):R});um.displayName="ComposerSendButton";const h4={idle:st.attachIdle,disabled:st.attachDisabled,error:st.attachError},p4=(t,a,i)=>{switch(t){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},f4=g.forwardRef(({state:t,onSelect:a,accept:i,multiple:s=!0,disabledReason:c,errorMessage:u,groupDisabled:p,className:f,style:m,...x},v)=>{const k=g.useRef(null),w=g.useCallback(()=>{var R;(t==="idle"||t==="error")&&((R=k.current)==null||R.click())},[t]),L=g.useCallback(R=>{const C=R.target.files;C&&C.length>0&&(a==null||a(C)),R.target.value=""},[a]),j=!p&&t!=="disabled",_=p4(t,c,u),M=t==="disabled"?c??"Attachments unavailable":t==="error"?u??"Attachment failed":null,I=r.jsxs("button",{ref:v,type:"button","data-composer-action":"attachment","data-state":t,className:ne(st.base,h4[t],f),style:m,"aria-label":_,disabled:!j,onClick:w,...x,children:[r.jsx("span",{className:st.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(Yo,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:k,type:"file",accept:i,multiple:s,onChange:L,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return M?r.jsx(kr,{content:M,placement:"top",children:I}):I});f4.displayName="ComposerAttachment";const m4={idle:st.voiceIdle,recording:st.voiceRecording,disabled:st.voiceDisabled},g4=(t,a)=>{switch(t){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},hm=g.forwardRef(({state:t,onStartRecording:a,onStopRecording:i,disabledReason:s,groupDisabled:c,className:u,style:p,...f},m)=>{const x=g.useCallback(()=>{if(t==="idle"){a==null||a();return}if(t==="recording"){i==null||i();return}},[t,a,i]),v=!c&&t!=="disabled",k=g4(t,s),w=t==="disabled"?s??"Voice unavailable":null,L=r.jsx("button",{ref:m,type:"button","data-composer-action":"voice","data-state":t,className:ne(st.base,m4[t],u),style:p,"aria-label":k,"aria-pressed":t==="recording"||void 0,disabled:!v,onClick:x,...f,children:r.jsxs("span",{className:st.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:st.iconLayer,"data-active":t!=="recording"?"true":"false",children:r.jsx(rm,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:st.iconLayer,"data-active":t==="recording"?"true":"false",children:r.jsx(em,{size:"100%",strokeWidth:1.5})})]})});return w?r.jsx(kr,{content:w,placement:"top",children:L}):L});hm.displayName="ComposerVoiceButton";const v4=g.forwardRef(({value:t,onChange:a,onSubmit:i,placeholder:s="Ask Ultron…",sending:c=!1,disabled:u=!1,voice:p=!0,maxRows:f=4,radius:m="lg",leadingActions:x,className:v},k)=>{const w=c?"streaming":t.trim().length===0?"hidden":"ready";return r.jsx(zf,{className:v,style:{flex:"0 0 auto"},children:r.jsx(Of,{ref:k,value:t,onChange:a,onSubmit:i,placeholder:s,maxRows:f,radius:m,disabled:u,children:r.jsxs(Yf,{size:"md",disabled:u,children:[x,p&&r.jsx(hm,{state:u?"disabled":"idle"}),r.jsx(um,{state:w,onSend:i,onStop:i})]})})})});v4.displayName="UltronCommandBar";const y4=g.forwardRef(({stages:t,state:a="live",duration:i,...s},c)=>r.jsx(Dd,{ref:c,state:a,duration:i,...s,children:t.map((u,p)=>r.jsx(Os,{type:u.type??"content",status:u.status??"pending",icon:u.icon,detail:u.detail,children:u.label},p))}));y4.displayName="UltronThreadTimeline";const x4="_root_ghwhu_10",w4="_badge_ghwhu_27",b4="_badgeIcon_ghwhu_38",k4="_green_ghwhu_59",_4="_yellow_ghwhu_60",C4="_matcha_ghwhu_61",j4="_purple_ghwhu_62",S4="_blue_ghwhu_63",N4="_azure_ghwhu_64",R4="_red_ghwhu_65",M4="_orange_ghwhu_66",L4="_pink_ghwhu_67",$4="_slate_ghwhu_68",T4="_content_ghwhu_73",I4="_label_ghwhu_83",A4="_valueRow_ghwhu_97",E4="_change_ghwhu_106",P4="_value_ghwhu_97",qn={root:x4,badge:w4,badgeIcon:b4,green:k4,yellow:_4,matcha:C4,purple:j4,blue:S4,azure:N4,red:R4,orange:M4,pink:L4,slate:$4,content:T4,label:I4,valueRow:A4,change:E4,value:P4},z4=g.forwardRef(({color:t="slate",icon:a,label:i,value:s,change:c,className:u,...p},f)=>r.jsxs("div",{ref:f,className:ne(qn.root,u),...p,children:[r.jsx("div",{className:ne(qn.badge,qn[t]),"aria-hidden":"true",children:r.jsx("span",{className:qn.badgeIcon,children:a})}),r.jsxs("div",{className:qn.content,children:[r.jsx("span",{className:qn.label,children:i}),r.jsxs("div",{className:qn.valueRow,children:[r.jsx("span",{className:qn.value,children:s}),c!=null&&r.jsx("span",{className:qn.change,children:c})]})]})]}));z4.displayName="DataCard";const O4="_root_d0j6n_7",D4="_icon_d0j6n_21",B4="_text_d0j6n_33",F4="_positive_d0j6n_41",W4="_warning_d0j6n_45",H4="_negative_d0j6n_49",gs={root:O4,icon:D4,text:B4,positive:F4,warning:W4,negative:H4};function q4(t){return t==="up"?"positive":"negative"}const U4=g.forwardRef((t,a)=>{const{mode:i,value:s,className:c,...u}=t,p=i==="trend"?t.severity??q4(t.trend):t.severity,{severity:f,...m}=u,x=i==="trend"?(({trend:k,severity:w,...L})=>L)(m):m,v=i==="trend"?t.trend==="up"?Hs:nm:null;return r.jsxs("span",{ref:a,className:ne(gs.root,gs[p],c),...x,children:[r.jsx("span",{className:gs.text,children:s}),v&&r.jsx("span",{className:gs.icon,"aria-hidden":"true",children:r.jsx(v,{size:14})})]})});U4.displayName="ValueChangeLabel";const V4="_root_1lq10_1",G4="_horizontal_1lq10_9",Y4="_vertical_1lq10_15",K4="_solid_1lq10_32",Z4="_dashed_1lq10_36",vs={root:V4,horizontal:G4,vertical:Y4,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:K4,dashed:Z4},Q4=g.forwardRef(({thickness:t=1,orientation:a="horizontal",variant:i="solid",className:s,...c},u)=>r.jsx("hr",{ref:u,role:"separator","aria-orientation":a,className:ne(vs.root,vs[`thickness-${t}`],vs[a],vs[i],s),...c}));Q4.displayName="Divider";const X4="_header_vxgy2_95",J4="_title_vxgy2_107",ew="_closeBtn_vxgy2_120",tw="_content_vxgy2_152",nw="_footer_vxgy2_163",Va={header:X4,title:J4,closeBtn:ew,content:tw,footer:nw},rw=g.forwardRef(({onClose:t,children:a,className:i,...s},c)=>r.jsxs("div",{ref:c,className:ne(Va.header,i),...s,children:[r.jsx("span",{className:Va.title,children:a}),t&&r.jsx("button",{type:"button",className:Va.closeBtn,onClick:t,"aria-label":"Close",children:r.jsx(ti,{size:16})})]}));rw.displayName="DialogHeader";const ow=g.forwardRef(({children:t,className:a,...i},s)=>r.jsx("div",{ref:s,className:ne(Va.content,a),...i,children:t}));ow.displayName="DialogContent";const aw=g.forwardRef(({children:t,className:a,...i},s)=>r.jsx("div",{ref:s,className:ne(Va.footer,a),...i,children:t}));aw.displayName="DialogFooter";const iw="_root_1dntq_7",sw="_badge_1dntq_57",lw="_badgeIconSlot_1dntq_74",cw="_content_1dntq_82",dw="_text_1dntq_90",uw="_title_1dntq_99",hw="_description_1dntq_120",pw="_actions_1dntq_131",fw="_dot_1dntq_137",mw="_actionLink_1dntq_144",gw="_primaryAction_1dntq_162",vw="_trailing_1dntq_170",$t={root:iw,badge:sw,badgeIconSlot:lw,content:cw,text:dw,title:uw,description:hw,actions:pw,dot:fw,actionLink:mw,primaryAction:gw,trailing:vw},yw=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),xw=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),ww=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),h1=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),bw={error:yw,warning:ww,success:xw,info:h1,feature:h1},pm=g.forwardRef(({status:t="info",variant:a="lighter",size:i="sm",title:s,description:c,action:u,onAction:p,learnMore:f,onLearnMore:m,onDismiss:x,className:v,...k},w)=>{const L=bw[t],j=i==="lg",_=x?r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:r.jsx(ti,{size:12})}):null;return r.jsxs("div",{ref:w,role:"alert",className:ne($t.root,v),"data-status":t,"data-variant":a,"data-size":i,...k,children:[r.jsx("span",{className:$t.badge,"aria-hidden":"true",children:r.jsx("span",{className:ne("alloy-icon-slot",$t.badgeIconSlot),children:r.jsx(L,{})})}),j?r.jsxs("div",{className:$t.content,children:[r.jsxs("div",{className:$t.text,children:[r.jsx("p",{className:$t.title,children:s}),c&&r.jsx("p",{className:$t.description,children:c})]}),(u||f)&&r.jsxs("div",{className:$t.actions,children:[u&&r.jsx("button",{type:"button",className:ne($t.actionLink,$t.primaryAction),onClick:p,children:u}),u&&f&&r.jsx("span",{className:$t.dot,"aria-hidden":"true",children:"·"}),f&&r.jsx("button",{type:"button",className:$t.actionLink,onClick:m,children:f})]})]}):r.jsx("p",{className:$t.title,children:s}),j?_:(u||x)&&r.jsxs("div",{className:$t.trailing,children:[u&&r.jsx("button",{type:"button",className:ne($t.actionLink,$t.primaryAction),onClick:p,children:u}),_]})]})});pm.displayName="Alert";const kw="_stack_x4xl7_11",_w="_item_x4xl7_28",Cw="_itemExiting_x4xl7_33",yd={stack:kw,item:_w,itemExiting:Cw},jw=g.createContext(null);function Sw({id:t,title:a,description:i,status:s,variant:c,size:u,action:p,onAction:f,duration:m,exiting:x,onRemove:v}){const k=g.useCallback(()=>v(t),[t,v]);return r.jsx("div",{className:ne(yd.item,x&&yd.itemExiting),onAnimationEnd:x?k:void 0,children:r.jsx(pm,{status:s,variant:c,size:u,title:a,description:i,action:p,onAction:f,onDismiss:k,style:{width:"100%"}})})}function Nw({toasts:t,onStartExit:a,onRemove:i}){return g.useEffect(()=>{const s=[];return t.forEach(c=>{c.duration>0&&!c.exiting&&s.push(setTimeout(()=>a(c.id),c.duration))}),()=>s.forEach(clearTimeout)},[t,a]),t.length===0?null:Ds.createPortal(r.jsx("div",{className:yd.stack,"aria-live":"polite","aria-atomic":"false",children:t.map(s=>r.jsx(Sw,{...s,onRemove:i},s.id))}),document.body)}function Rw({children:t}){const[a,i]=g.useState([]),s=g.useRef(0),c=g.useCallback(f=>{const m=`toast-${++s.current}`;return i(x=>[...x,{id:m,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),m},[]),u=g.useCallback(f=>{i(m=>m.map(x=>x.id===f?{...x,exiting:!0}:x))},[]),p=g.useCallback(f=>{i(m=>m.filter(x=>x.id!==f))},[]);return r.jsxs(jw.Provider,{value:{addToast:c,removeToast:u},children:[t,r.jsx(Nw,{toasts:a,onStartExit:u,onRemove:p})]})}const Mw="_root_1s0ek_5",Lw="_list_1s0ek_11",$w="_item_1s0ek_23",Tw="_separator_1s0ek_31",Iw="_link_1s0ek_47",Aw="_current_1s0ek_68",Ew="_iconSlot_1s0ek_76",$n={root:Mw,list:Lw,item:$w,separator:Tw,link:Iw,current:Aw,iconSlot:Ew},Pw=()=>r.jsx("span",{className:$n.separator,"aria-hidden":"true",children:"/"}),zw=()=>r.jsx("span",{className:$n.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),Ow=g.forwardRef(({items:t,separator:a="slash",className:i,...s},c)=>{const u=a==="chevron"?zw:Pw;return r.jsx("nav",{ref:c,"aria-label":"Breadcrumb",className:ne($n.root,i),...s,children:r.jsx("ol",{className:$n.list,children:t.map((p,f)=>{const m=f===t.length-1,x=!m&&(!!p.href||!!p.onClick);return r.jsxs("li",{className:$n.item,children:[f>0&&r.jsx(u,{}),x?r.jsxs("a",{href:p.href,onClick:p.onClick,className:$n.link,"aria-label":p.label,children:[p.icon&&r.jsx("span",{className:ne($n.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]}):r.jsxs("span",{className:ne($n.link,m&&$n.current),"aria-current":m?"page":void 0,children:[p.icon&&r.jsx("span",{className:ne($n.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]})]},f)})})})});Ow.displayName="Breadcrumb";const Dw="_root_139vz_6",Bw="_divider_139vz_14",Fw="_item_139vz_19",Ww="_label_139vz_25",Hw="_description_139vz_26",qw="_chevron_139vz_27",Uw="_iconSlot_139vz_28",Vw="_hitTarget_139vz_32",Gw="_size_sm_139vz_37",Yw="_size_md_139vz_43",Kw="_size_lg_139vz_49",Zw="_header_139vz_59",Qw="_headerContent_139vz_59",Xw="_checkboxWrap_139vz_60",Jw="_labelBlock_139vz_157",e6="_trailingSlot_139vz_60",t6="_body_139vz_199",n6="_bodyInner_139vz_209",r6="_bodyContent_139vz_214",bt={root:Dw,divider:Bw,item:Fw,label:Ww,description:Hw,chevron:qw,iconSlot:Uw,hitTarget:Vw,size_sm:Gw,size_md:Yw,size_lg:Kw,header:Zw,headerContent:Qw,checkboxWrap:Xw,labelBlock:Jw,trailingSlot:e6,body:t6,bodyInner:n6,bodyContent:r6},o6="_root_17t97_6",a6="_disabled_17t97_12",i6="_sm_17t97_18",s6="_md_17t97_26",l6="_lg_17t97_34",c6="_controlWrap_17t97_43",d6="_input_17t97_52",u6="_box_17t97_67",h6="_boxChecked_17t97_96",p6="_boxError_17t97_106",f6="_labelWrap_17t97_116",m6="_label_17t97_116",g6="_error_17t97_138",v6="_required_17t97_140",y6="_description_17t97_145",Xt={root:o6,disabled:a6,sm:i6,md:s6,lg:l6,controlWrap:c6,input:d6,box:u6,boxChecked:h6,boxError:p6,labelWrap:f6,label:m6,error:g6,required:v6,description:y6},fm=g.forwardRef(({checked:t,defaultChecked:a=!1,indeterminate:i=!1,onChange:s,disabled:c,error:u,size:p="md",label:f,description:m,id:x,name:v,value:k,required:w,className:L},j)=>{const _=g.useId(),M=x??_,I=g.useRef(null);g.useEffect(()=>{I.current&&(I.current.indeterminate=i)},[i]);const R=t!==void 0,[C,P]=g.useState(a),N=R?t:C,$=z=>{R||P(z.target.checked),s==null||s(z.target.checked)},E=N||i;return r.jsxs("div",{className:ne(Xt.root,Xt[p],c&&Xt.disabled,u&&Xt.error,L),children:[r.jsxs("div",{className:Xt.controlWrap,children:[r.jsx("input",{ref:z=>{I.current=z,typeof j=="function"?j(z):j&&(j.current=z)},type:"checkbox",id:M,name:v,value:k,checked:N,disabled:c,required:w,"aria-invalid":u||void 0,onChange:$,className:Xt.input}),r.jsx("span",{className:ne(Xt.box,E&&Xt.boxChecked,u&&Xt.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):N?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||m)&&r.jsxs("div",{className:Xt.labelWrap,children:[f&&r.jsxs("label",{htmlFor:M,className:Xt.label,children:[f,w&&r.jsx("span",{className:Xt.required,"aria-hidden":"true",children:" *"})]}),m&&r.jsx("span",{className:Xt.description,children:m})]})]})});fm.displayName="Checkbox";const mm=g.createContext(null),xd=g.createContext(0),gm=g.forwardRef(({type:t="multiple",collapsible:a=!0,value:i,defaultValue:s,onValueChange:c,divider:u=!0,size:p="md",disabled:f=!1,className:m,children:x,...v},k)=>{const w=g.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[L,j]=g.useState(w),_=i!==void 0,M=g.useMemo(()=>_?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:L,[_,i,L]),I=g.useCallback(P=>M.has(P),[M]),R=g.useCallback(P=>{const N=new Set(M);t==="single"?N.has(P)?a&&N.delete(P):(N.clear(),N.add(P)):N.has(P)?N.delete(P):N.add(P),_||j(N),c&&c(t==="single"?N.values().next().value??"":Array.from(N))},[M,t,a,_,c]),C=g.useMemo(()=>({type:t,collapsible:a,size:p,disabled:f,isExpanded:I,toggle:R}),[t,a,p,f,I,R]);return r.jsx("div",{ref:k,"data-accordion-root":"","data-divider":u||void 0,"data-disabled":f||void 0,"data-size":p,className:ne(bt.root,u&&bt.divider,m),...v,children:r.jsx(mm.Provider,{value:C,children:r.jsx(xd.Provider,{value:0,children:x})})})});gm.displayName="Accordion";function ys(t,a){const i=t.closest("[data-accordion-root]");if(!i)return;const s=t.getAttribute("data-accordion-depth"),c=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(c.length===0)return;const u=c.indexOf(t);let p;switch(a){case"first":p=c[0];break;case"last":p=c[c.length-1];break;case"next":p=c[(u+1)%c.length];break;case"prev":p=c[(u-1+c.length)%c.length];break}p.focus()}const vm=g.forwardRef(({value:t,label:a,description:i,icon:s,leadingSlot:c,trailingSlot:u,chevronPosition:p="leading",selectable:f=!1,checked:m,defaultChecked:x=!1,indeterminate:v=!1,onCheckedChange:k,expanded:w,defaultExpanded:L=!1,onExpandedChange:j,disabled:_=!1,size:M,className:I,children:R,...C},P)=>{const N=g.useContext(mm),$=g.useContext(xd),E=N!==null,z=M??(N==null?void 0:N.size)??"md",B=_||(N==null?void 0:N.disabled)||!1,[Q,J]=g.useState(L);let Z;E?Z=t!==void 0?N.isExpanded(t):!1:w!==void 0?Z=w:Z=Q;const te=g.useCallback(()=>{if(B)return;if(E){if(t===void 0)return;const S=N.isExpanded(t);N.toggle(t);const H=N.type==="single"&&!N.collapsible&&S?!0:!S;j==null||j(H);return}const T=!Z;w===void 0&&J(T),j==null||j(T)},[B,E,N,t,Z,w,j]),re=g.useCallback(T=>k==null?void 0:k(T),[k]),ce=g.useCallback(T=>{if(T.key==="Enter"||T.key===" "){T.preventDefault(),te();return}if(E)switch(T.key){case"ArrowDown":T.preventDefault(),ys(T.currentTarget,"next");break;case"ArrowUp":T.preventDefault(),ys(T.currentTarget,"prev");break;case"Home":T.preventDefault(),ys(T.currentTarget,"first");break;case"End":T.preventDefault(),ys(T.currentTarget,"last");break}},[te,E]),ae=g.useId(),G=`${ae}-header`,F=`${ae}-body`,K=z==="sm"?16:z==="md"?18:20,q=c??r.jsxs(r.Fragment,{children:[f&&r.jsx("span",{className:bt.checkboxWrap,children:r.jsx(fm,{size:z,checked:m,defaultChecked:x,indeterminate:v,disabled:B,onChange:re})}),s&&r.jsx("span",{className:bt.iconSlot,"aria-hidden":"true",children:s})]});return r.jsxs("div",{ref:P,"data-accordion-item":"","data-expanded":Z||void 0,"data-disabled":B||void 0,"data-size":z,"data-depth":$,className:ne(bt.item,bt[`size_${z}`],I),style:{"--accordion-depth":$},...C,children:[r.jsxs("div",{className:bt.header,children:[r.jsx("button",{type:"button",id:G,"data-accordion-header-button":"","data-accordion-depth":$,className:bt.hitTarget,"aria-expanded":Z,"aria-controls":F,"aria-disabled":B||void 0,disabled:B,onClick:te,onKeyDown:ce}),r.jsxs("div",{className:bt.headerContent,children:[p==="leading"&&r.jsx("span",{className:bt.chevron,"aria-hidden":"true",children:r.jsx(rn,{size:K,color:"currentColor"})}),q,r.jsxs("div",{className:bt.labelBlock,children:[r.jsx("span",{className:bt.label,children:a}),i&&r.jsx("span",{className:bt.description,children:i})]}),u&&r.jsx("div",{className:bt.trailingSlot,children:u}),p==="trailing"&&r.jsx("span",{className:bt.chevron,"aria-hidden":"true",children:r.jsx(rn,{size:K,color:"currentColor"})})]})]}),r.jsx("div",{id:F,role:"region","aria-labelledby":G,className:bt.body,"aria-hidden":!Z,children:r.jsx("div",{className:bt.bodyInner,children:r.jsx("div",{className:bt.bodyContent,children:r.jsx(xd.Provider,{value:$+1,children:R})})})})]})});vm.displayName="AccordionItem";const x6="_root_2hiai_7",w6="_fullWidth_2hiai_12",b6="_panel_2hiai_19",k6="_panelInner_2hiai_73",_6="_item_2hiai_81",C6="_groupHeading_2hiai_87",j6="_groupHeadingLabel_2hiai_94",S6="_groupHeadingCollapsible_2hiai_106",N6="_groupChevron_2hiai_119",R6="_groupDivider_2hiai_133",In={root:x6,fullWidth:w6,panel:b6,panelInner:k6,item:_6,groupHeading:C6,groupHeadingLabel:j6,groupHeadingCollapsible:S6,groupChevron:N6,groupDivider:R6};function M6({group:t,size:a,closeOnSelect:i,onClose:s}){const[c,u]=g.useState(t.defaultExpanded??!0);return r.jsxs("div",{children:[t.heading&&r.jsxs("div",{className:ne(In.groupHeading,t.collapsible&&In.groupHeadingCollapsible),onClick:t.collapsible?()=>u(p=>!p):void 0,"aria-expanded":t.collapsible?c:void 0,children:[r.jsx("span",{className:In.groupHeadingLabel,children:t.heading}),t.collapsible&&r.jsx("span",{className:In.groupChevron,"data-expanded":c||void 0,"aria-hidden":"true",children:r.jsx(rn,{size:12})})]}),c&&r.jsx("div",{role:"group","aria-label":t.heading,children:t.options.map((p,f)=>{const m=p.trailingAction==="switch"||p.trailingAction==="checkbox"||p.trailingAction==="radio";return r.jsx(nn,{role:"menuitem",size:a,label:p.label,description:p.description,leadingSlot:p.leadingSlot,trailingAction:p.trailingAction,trailingSlot:p.trailingSlot,disabled:p.disabled,destructive:p.destructive,selected:p.selected,checked:p.checked,defaultChecked:p.defaultChecked,onCheckedChange:p.onCheckedChange,badgeCount:p.badgeCount,badgeLabel:p.badgeLabel,expanded:p.expanded,statusVariant:p.statusVariant,divider:p.divider??!1,className:In.item,onClick:()=>{var x;(x=p.onClick)==null||x.call(p),i&&!m&&s()}},p.id)})})]})}const ym=g.forwardRef(({trigger:t,groups:a,size:i="sm",width:s=260,placement:c="bottom-start",open:u,defaultOpen:p=!1,onOpenChange:f,disabled:m=!1,closeOnSelect:x=!0,fullWidth:v=!1,className:k,...w},L)=>{const[j,_]=g.useState(p),M=g.useRef(null),I=u!==void 0?u:j,R=g.useCallback(P=>{M.current=P,L&&(typeof L=="function"?L(P):L.current=P)},[L]),C=g.useCallback(P=>{u===void 0&&_(P),f==null||f(P)},[u,f]);return g.useEffect(()=>{if(!I)return;const P=N=>{var $;($=M.current)!=null&&$.contains(N.target)||C(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[I,C]),g.useEffect(()=>{if(!I)return;const P=N=>{N.key==="Escape"&&C(!1)};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[I,C]),r.jsxs("div",{ref:R,className:ne(In.root,v&&In.fullWidth,k),...w,children:[r.jsx("div",{style:{display:v?"flex":"inline-flex",width:v?"100%":void 0},"aria-haspopup":"menu","aria-expanded":I,tabIndex:m?-1:0,onClick:m?void 0:()=>C(!I),onKeyDown:m?void 0:P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),C(!I))},children:t}),r.jsx("div",{className:In.panel,"data-open":I||void 0,"data-placement":c,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:In.panelInner,children:a.map((P,N)=>r.jsxs("div",{children:[N>0&&r.jsx("div",{className:In.groupDivider,"aria-hidden":"true"}),r.jsx(M6,{group:P,size:i,closeOnSelect:x,onClose:()=>C(!1)})]},P.id))})})]})});ym.displayName="DropdownMenu";const L6="_hiddenInput_7w2s5_8",$6="_area_7w2s5_19",T6="_uploadIcon_7w2s5_53",I6="_textBlock_7w2s5_59",A6="_title_7w2s5_67",E6="_description_7w2s5_76",P6="_fileRow_7w2s5_88",z6="_fileIcon_7w2s5_96",O6="_fileName_7w2s5_101",D6="_successIcon_7w2s5_115",B6="_removeBtn_7w2s5_121",F6="_progressWrap_7w2s5_145",W6="_progressBar_7w2s5_153",H6="_progressFill_7w2s5_161",q6="_progressLabel_7w2s5_168",U6="_errorRow_7w2s5_178",V6="_errorIcon_7w2s5_186",G6="_errorText_7w2s5_192",Y6="_areaMulti_7w2s5_206",K6="_multiDropZone_7w2s5_214",Z6="_fileList_7w2s5_244",Q6="_fileListItem_7w2s5_254",X6="_inline_7w2s5_267",J6="_inlineIcon_7w2s5_309",e8="_inlineText_7w2s5_330",t8="_inlineProgress_7w2s5_353",n8="_inlineProgressFill_7w2s5_363",Ee={hiddenInput:L6,area:$6,uploadIcon:T6,textBlock:I6,title:A6,description:E6,fileRow:P6,fileIcon:z6,fileName:O6,successIcon:D6,removeBtn:B6,progressWrap:F6,progressBar:W6,progressFill:H6,progressLabel:q6,errorRow:U6,errorIcon:V6,errorText:G6,areaMulti:Y6,multiDropZone:K6,fileList:Z6,fileListItem:Q6,inline:X6,inlineIcon:J6,inlineText:e8,inlineProgress:t8,inlineProgressFill:n8};function Qc(t){const a=t.name.lastIndexOf(".");return a!==-1?t.name.slice(a+1).toUpperCase():t.type?(t.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const r8=g.forwardRef(({variant:t="area",multiple:a=!1,state:i="empty",progress:s=0,file:c,files:u,errorMessage:p,title:f="Choose a file or drag & drop it here.",description:m="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:v,onFilesSelect:k,onClear:w,onRemoveFile:L,fieldVariant:j="outlined",disabled:_=!1,className:M,...I},R)=>{const C=g.useRef(null),[P,N]=g.useState(!1),$=!_&&(a||i==="empty"),E=g.useCallback(()=>{var ae;!_&&(a||i==="empty")&&((ae=C.current)==null||ae.click())},[_,a,i]),z=g.useCallback(ae=>{var G;if(a){const F=ae.target.files?Array.from(ae.target.files):[];F.length&&(k==null||k(F))}else{const F=(G=ae.target.files)==null?void 0:G[0];F&&(v==null||v(F))}ae.target.value=""},[a,v,k]),B=g.useCallback(ae=>{ae.preventDefault(),$&&N(!0)},[$]),Q=g.useCallback(()=>N(!1),[]),J=g.useCallback(ae=>{var G;if(ae.preventDefault(),N(!1),!!$)if(a){const F=ae.dataTransfer.files?Array.from(ae.dataTransfer.files):[];F.length&&(k==null||k(F))}else{const F=(G=ae.dataTransfer.files)==null?void 0:G[0];F&&(v==null||v(F))}},[$,a,v,k]),Z=r.jsx("input",{ref:C,type:"file",className:Ee.hiddenInput,accept:x,multiple:a,disabled:_,"aria-hidden":"true",tabIndex:-1,onChange:z}),te=c?r.jsxs("div",{className:Ee.fileRow,children:[r.jsx("span",{className:`${Ee.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Oo,{size:16})}),r.jsx("span",{className:Ee.fileName,children:c.name}),r.jsx(br,{size:"sm",variant:"subtle",children:Qc(c)}),i==="complete"&&r.jsx("span",{className:`${Ee.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(_r,{size:16})}),r.jsx("button",{type:"button",className:Ee.removeBtn,onClick:w,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(bs,{size:14})})})]}):null;if(t==="area"){if(a){const ae=u??[];return r.jsxs("div",{ref:R,className:ne(Ee.areaMulti,M),"data-drag-over":P||void 0,"data-disabled":_||void 0,onDragOver:B,onDragLeave:Q,onDrop:J,...I,children:[Z,r.jsxs("div",{className:Ee.multiDropZone,children:[r.jsx("span",{className:`${Ee.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Zc,{size:24})}),r.jsxs("div",{className:Ee.textBlock,children:[r.jsx("p",{className:Ee.title,children:f}),r.jsx("p",{className:Ee.description,children:m})]}),r.jsx(Ie,{variant:"tertiary",size:"sm",onClick:E,disabled:_,children:"Browse Files"})]}),ae.length>0&&r.jsx("ul",{className:Ee.fileList,"aria-label":"Selected files",children:ae.map((G,F)=>r.jsxs("li",{className:Ee.fileListItem,children:[r.jsx("span",{className:`${Ee.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Oo,{size:16})}),r.jsx("span",{className:Ee.fileName,children:G.name}),r.jsx(br,{size:"sm",variant:"subtle",children:Qc(G)}),r.jsx("button",{type:"button",className:Ee.removeBtn,onClick:()=>L==null?void 0:L(F),"aria-label":`Remove ${G.name}`,disabled:_,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(bs,{size:14})})})]},`${G.name}-${F}`))})]})}return r.jsxs("div",{ref:R,className:ne(Ee.area,M),"data-state":i,"data-drag-over":P||void 0,"data-disabled":_||void 0,onDragOver:B,onDragLeave:Q,onDrop:J,...I,children:[Z,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${Ee.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Zc,{size:24})}),r.jsxs("div",{className:Ee.textBlock,children:[r.jsx("p",{className:Ee.title,children:f}),r.jsx("p",{className:Ee.description,children:m})]}),r.jsx(Ie,{variant:"tertiary",size:"sm",onClick:E,disabled:_,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[te,r.jsxs("div",{className:Ee.progressWrap,children:[r.jsx("div",{className:Ee.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Ee.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),r.jsxs("p",{className:Ee.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&te,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:Ee.errorRow,children:[r.jsx("span",{className:`${Ee.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Wo,{size:20})}),r.jsx("p",{className:Ee.errorText,children:p??"Upload failed. Please try again."})]}),r.jsx(Ie,{variant:"tertiary",size:"sm",onClick:E,disabled:_,children:"Try Again"})]})]})}const re={empty:r.jsx(Zc,{size:16}),uploading:r.jsx(Oo,{size:16}),complete:r.jsx(_r,{size:16}),error:r.jsx(Wo,{size:16})}[i],ce=(i==="uploading"||i==="complete")&&!!c;return r.jsxs("div",{ref:R,className:ne(Ee.inline,M),"data-state":i,"data-field-variant":j,"data-disabled":_||void 0,...I,children:[Z,r.jsx("span",{className:`${Ee.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:re}),r.jsxs("span",{className:Ee.inlineText,"data-has-file":ce?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(c==null?void 0:c.name),i==="complete"&&(c==null?void 0:c.name),i==="error"&&(p??"Upload failed. Please try again.")]}),ce&&r.jsx(br,{size:"sm",variant:"subtle",children:Qc(c)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:Ee.removeBtn,onClick:w,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(bs,{size:14})})}),i==="empty"&&r.jsx(Ie,{variant:"tertiary",size:"xs",onClick:E,disabled:_,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:Ee.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Ee.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});r8.displayName="FileUploader";const o8="_wrapper_127v8_8",a8="_labelRow_127v8_16",i8="_label_127v8_16",s8="_required_127v8_28",l8="_labelIcon_127v8_36",c8="_sm_127v8_46",d8="_md_127v8_47",u8="_lg_127v8_48",h8="_shell_127v8_44",p8="_outlined_127v8_75",f8="_underlined_127v8_102",m8="_float_127v8_147",g8="_leadingSlot_127v8_181",v8="_trailingSlot_127v8_193",y8="_trailingActionWrap_127v8_206",x8="_trailingActionBtn_127v8_213",w8="_successTrailingSlot_127v8_234",b8="_errorTrailingSlot_127v8_239",k8="_control_127v8_251",_8="_selectValue_127v8_297",C8="_selectPlaceholder_127v8_303",j8="_selectChevron_127v8_307",S8="_selectChevronOpen_127v8_312",N8="_textareaShell_127v8_315",R8="_textareaControl_127v8_334",M8="_footer_127v8_351",L8="_footerRow_127v8_363",$8="_footerError_127v8_364",T8="_footerSuccess_127v8_365",I8="_footerIcon_127v8_368",A8="_wrapperHorizontal_127v8_378",E8="_horizontalLabelCol_127v8_384",P8="_horizontalLabelHint_127v8_393",z8="_horizontalControlCol_127v8_402",O8="_msContainer_127v8_416",D8="_msShell_127v8_425",B8="_msOpen_127v8_440",F8="_msDisabled_127v8_447",W8="_msBody_127v8_450",H8="_msPlaceholder_127v8_459",q8="_msChevron_127v8_469",U8="_msChevronOpen_127v8_480",V8="_msPanel_127v8_483",je={wrapper:o8,labelRow:a8,label:i8,required:s8,labelIcon:l8,sm:c8,md:d8,lg:u8,shell:h8,outlined:p8,underlined:f8,float:m8,leadingSlot:g8,trailingSlot:v8,trailingActionWrap:y8,trailingActionBtn:x8,successTrailingSlot:w8,errorTrailingSlot:b8,control:k8,selectValue:_8,selectPlaceholder:C8,selectChevron:j8,selectChevronOpen:S8,textareaShell:N8,textareaControl:R8,footer:M8,footerRow:L8,footerError:$8,footerSuccess:T8,footerIcon:I8,wrapperHorizontal:A8,horizontalLabelCol:E8,horizontalLabelHint:P8,horizontalControlCol:z8,msContainer:O8,msShell:D8,msOpen:B8,msDisabled:F8,msBody:W8,msPlaceholder:H8,msChevron:q8,msChevronOpen:U8,msPanel:V8};function Ko({label:t,labelIcon:a,labelDescription:i,hint:s,error:c,success:u,required:p,htmlFor:f,layout:m="vertical",labelWidth:x=160,className:v,children:k}){const w=c??u??s,L=c?"error":u?"success":"hint",j=w?r.jsxs("p",{className:ne(je.footer,L==="error"&&je.footerError,L==="success"&&je.footerSuccess),role:L==="error"?"alert":void 0,"aria-live":L==="error"?"assertive":void 0,children:[L==="hint"&&r.jsx("span",{className:`${je.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Wo,{size:12})}),w]}):null,_=t!=null?r.jsxs("div",{className:je.labelRow,children:[r.jsx("label",{className:je.label,htmlFor:f,children:t}),p&&r.jsx("span",{className:je.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${je.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(m==="horizontal"){const M={width:typeof x=="number"?`${x}px`:x};return r.jsxs("div",{className:ne(je.wrapper,je.wrapperHorizontal,v),children:[(_||i)&&r.jsxs("div",{className:je.horizontalLabelCol,style:M,children:[_,i&&r.jsx("p",{className:je.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:je.horizontalControlCol,children:[k,j]})]})}return r.jsxs("div",{className:ne(je.wrapper,v),children:[_,k,j]})}function ri({variant:t="outlined",size:a="md",error:i,success:s,disabled:c,readOnly:u,leadingIcon:p,trailingIcon:f,trailingAction:m,isTextarea:x,focused:v,className:k,children:w}){const L=a==="sm"?14:a==="lg"?18:16,j=s&&!i&&!f&&!m?r.jsx(_r,{size:L}):null,_=i&&!f&&!m?r.jsx(Wo,{size:L}):null,M=!!p,I=!!(f||m||j||_);return r.jsxs("div",{className:ne(je.shell,je[t],je[a],x&&je.textareaShell,k),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":c||void 0,"data-readonly":u||void 0,"data-focused":v||void 0,"data-has-leading":M||void 0,"data-has-trailing":I||void 0,children:[p&&r.jsx("span",{className:ne(je.leadingSlot,"alloy-icon-slot"),children:p}),w,m?r.jsx("span",{className:je.trailingActionWrap,children:m}):f||j||_?r.jsx("span",{className:ne(je.trailingSlot,"alloy-icon-slot",j&&je.successTrailingSlot,_&&je.errorTrailingSlot),children:f??j??_}):null]})}const Ud=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:c,required:u,variant:p="outlined",size:f="md",type:m="text",leadingIcon:x,trailingIcon:v,layout:k,labelWidth:w,labelDescription:L,id:j,disabled:_,readOnly:M,className:I,...R},C)=>{const P=g.useId(),N=j??P;return r.jsx(Ko,{label:t,labelIcon:a,hint:i,error:s,success:c,required:u,htmlFor:N,layout:k,labelWidth:w,labelDescription:L,className:I,children:r.jsx(ri,{variant:p,size:f,error:!!s,success:!!c,disabled:_,readOnly:M,leadingIcon:x,trailingIcon:v,children:r.jsx("input",{ref:C,id:N,type:m,disabled:_,readOnly:M,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||c?`${N}-footer`:void 0,className:ne(je.control),...R})})})});Ud.displayName="TextField";const G8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,trailingIcon:x,layout:v,labelWidth:k,labelDescription:w,id:L,disabled:j,readOnly:_,className:M,...I},R)=>{const C=g.useId(),P=L??C;return r.jsx(Ko,{label:t,labelIcon:a,hint:i,error:s,success:c,required:u,htmlFor:P,layout:v,labelWidth:k,labelDescription:w,className:M,children:r.jsx(ri,{variant:p,size:f,error:!!s,success:!!c,disabled:j,readOnly:_,leadingIcon:m,trailingIcon:x,isTextarea:!0,children:r.jsx("textarea",{ref:R,id:P,disabled:j,readOnly:_,"aria-invalid":s?!0:void 0,className:ne(je.control,je.textareaControl),...I})})})});G8.displayName="TextArea";const Y8={sm:"sm",md:"md",lg:"lg"},xm=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,layout:x,labelWidth:v,labelDescription:k,options:w,value:L,defaultValue:j="",onChange:_,placeholder:M="Select an option…",disabled:I,readOnly:R,id:C,className:P},N)=>{var K;const $=g.useId(),E=C??$,z=L!==void 0,[B,Q]=g.useState(j),J=z?L:B,Z=g.useCallback(q=>{z||Q(q),_==null||_(q)},[z,_]),[te,re]=g.useState(!1),ce=(K=w.find(q=>q.value===J))==null?void 0:K.label,ae=f==="sm"?14:f==="lg"?18:16,G=Y8[f],F=r.jsx(ri,{variant:p,size:f,error:!!s,success:!!c,disabled:I,readOnly:R,focused:te,leadingIcon:m,trailingIcon:r.jsx("span",{className:ne(je.selectChevron,te&&je.selectChevronOpen),"aria-hidden":"true",children:r.jsx(Kn,{size:ae})}),children:r.jsx("span",{className:ne(je.control,je.selectValue,!ce&&je.selectPlaceholder),children:ce??M})});return r.jsx(Ko,{label:t,labelIcon:a,hint:i,error:s,success:c,required:u,htmlFor:E,layout:x,labelWidth:v,labelDescription:k,className:P,children:r.jsx(ym,{ref:N,id:E,fullWidth:!0,trigger:F,groups:[{id:"options",options:w.map(q=>({id:q.value,label:q.label,disabled:q.disabled,selected:q.value===J,onClick:()=>Z(q.value)}))}],size:G,width:"100%",placement:"bottom-start",open:te,onOpenChange:re,disabled:I||R})})});xm.displayName="SelectField";const K8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:c,required:u,variant:p="outlined",size:f="md",leadingIcon:m,layout:x,labelWidth:v,labelDescription:k,id:w,disabled:L,readOnly:j,className:_,...M},I)=>{const R=g.useId(),C=w??R,[P,N]=g.useState(!1),$=f==="sm"?14:f==="lg"?18:16;return r.jsx(Ko,{label:t,labelIcon:a,hint:i,error:s,success:c,required:u,htmlFor:C,layout:x,labelWidth:v,labelDescription:k,className:_,children:r.jsx(ri,{variant:p,size:f,error:!!s,success:!!c,disabled:L,readOnly:j,leadingIcon:m,trailingAction:r.jsx("button",{type:"button",className:`${je.trailingActionBtn} alloy-icon-slot`,onClick:()=>N(E=>!E),tabIndex:L?-1:0,"aria-label":P?"Hide password":"Show password","aria-pressed":P,children:P?r.jsx(Xf,{size:$}):r.jsx(Bd,{size:$})}),children:r.jsx("input",{ref:I,id:C,type:P?"text":"password",disabled:L,readOnly:j,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:ne(je.control),...M})})})});K8.displayName="PasswordField";const wm=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:c,required:u,variant:p="outlined",size:f="md",onClear:m,onChange:x,layout:v,labelWidth:k,labelDescription:w,id:L,value:j,defaultValue:_,disabled:M,readOnly:I,className:R,...C},P)=>{const N=g.useId(),$=L??N,E=f==="sm"?14:f==="lg"?18:16,z=j!==void 0?String(j).length>0:void 0,B=g.useCallback(Q=>{x==null||x(Q)},[x]);return r.jsx(Ko,{label:t,labelIcon:a,hint:i,error:s,success:c,required:u,htmlFor:$,layout:v,labelWidth:k,labelDescription:w,className:R,children:r.jsx(ri,{variant:p,size:f,error:!!s,success:!!c,disabled:M,readOnly:I,leadingIcon:r.jsx(Wd,{size:E}),trailingAction:z?r.jsx("button",{type:"button",className:`${je.trailingActionBtn} alloy-icon-slot`,onClick:m,tabIndex:M?-1:0,"aria-label":"Clear search",children:r.jsx(ti,{size:E})}):void 0,children:r.jsx("input",{ref:P,id:$,type:"search",value:j,defaultValue:_,disabled:M,readOnly:I,"aria-invalid":s?!0:void 0,onChange:B,className:ne(je.control),...C})})})});wm.displayName="SearchField";const Z8=g.forwardRef((t,a)=>r.jsx(Ud,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...t}));Z8.displayName="EmailField";const bm=g.forwardRef((t,a)=>r.jsx(Ud,{ref:a,type:"number",inputMode:"numeric",...t}));bm.displayName="NumberField";const Q8={sm:"sm",md:"sm",lg:"md"},X8={sm:"sm",md:"md",lg:"lg"},J8=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:c,required:u,variant:p="outlined",size:f="md",layout:m,labelWidth:x,labelDescription:v,options:k,value:w,defaultValue:L=[],onChange:j,placeholder:_="Select options…",disabled:M,readOnly:I,id:R,className:C},P)=>{const N=g.useId(),$=R??N,E=`${$}-list`,z=g.useRef(null),B=w!==void 0,[Q,J]=g.useState(L),Z=B?w:Q,te=g.useCallback(S=>{B||J(S),j==null||j(S)},[B,j]),[re,ce]=g.useState(!1);g.useEffect(()=>{if(!re)return;const S=Y=>{z.current&&!z.current.contains(Y.target)&&ce(!1)},H=Y=>{Y.key==="Escape"&&ce(!1)};return document.addEventListener("mousedown",S),document.addEventListener("keydown",H),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("keydown",H)}},[re]);const ae=S=>{if(M||I)return;const H=Z.includes(S)?Z.filter(Y=>Y!==S):[...Z,S];te(H)},G=S=>{M||I||((S.key==="Enter"||S.key===" ")&&(S.preventDefault(),ce(H=>!H)),S.key==="Backspace"&&Z.length>0&&!re&&te(Z.slice(0,-1)))},F=f==="sm"?14:f==="lg"?18:16,K=Q8[f],q=X8[f],T=Object.fromEntries(k.map(S=>[S.value,S.label]));return r.jsx(Ko,{label:t,labelIcon:a,hint:i,error:s,success:c,required:u,htmlFor:$,layout:m,labelWidth:x,labelDescription:v,className:C,children:r.jsxs("div",{ref:z,className:je.msContainer,children:[r.jsxs("div",{ref:P,id:$,role:"combobox","aria-haspopup":"listbox","aria-expanded":re,"aria-controls":E,"aria-disabled":M||void 0,tabIndex:M?-1:0,className:ne(je.msShell,je[p],je[f],re&&je.msOpen,M&&je.msDisabled),"data-error":s?!0:void 0,"data-success":c&&!s?!0:void 0,"data-disabled":M||void 0,onClick:()=>{!M&&!I&&ce(S=>!S)},onKeyDown:G,children:[r.jsx("div",{className:je.msBody,children:Z.length===0?r.jsx("span",{className:je.msPlaceholder,children:_}):Z.map(S=>r.jsx(br,{size:K,variant:"subtle",dismissible:!M&&!I,onDismiss:()=>te(Z.filter(H=>H!==S)),children:T[S]??S},S))}),r.jsx("span",{className:ne(je.msChevron,"alloy-icon-slot",re&&je.msChevronOpen),children:r.jsx(Kn,{size:F})})]}),re&&r.jsx("div",{id:E,role:"listbox","aria-multiselectable":"true","aria-label":typeof t=="string"?t:"Options",className:je.msPanel,children:k.map(S=>{const H=Z.includes(S.value);return r.jsx(nn,{label:S.label,size:q,trailingAction:"checkbox",checked:H,disabled:S.disabled,role:"option","aria-selected":H,onMouseDown:Y=>{Y.preventDefault()},onCheckedChange:()=>{S.disabled||ae(S.value)}},S.value)})})]})})});J8.displayName="MultiSelectField";const e9="_root_1249j_6",t9="_pageControls_1249j_14",n9="_pageBtn_1249j_21",r9="_ellipsis_1249j_36",o9="_rowsGroup_1249j_51",a9="_rowsSelect_1249j_58",i9="_countText_1249j_64",s9="_groupLabel_1249j_74",l9="_goToGroup_1249j_84",c9="_goToInput_1249j_91",wn={root:e9,pageControls:t9,pageBtn:n9,ellipsis:r9,rowsGroup:o9,rowsSelect:a9,countText:i9,groupLabel:s9,goToGroup:l9,goToInput:c9};function d9(t,a,i){if(a<=1)return[1];const s=Math.max(2,t-i),c=Math.min(a-1,t+i),u=[1];s>2&&u.push("ellipsis");for(let p=s;p<=c;p++)u.push(p);return c<a-1&&u.push("ellipsis"),a>1&&u.push(a),u}const u9=g.forwardRef(({page:t,totalPages:a,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:c,rowsPerPageOptions:u=[10,25,50,100],onRowsPerPageChange:p,showGoToPage:f=!1,totalCount:m,siblingCount:x=1,size:v="sm",disabled:k=!1,className:w,...L},j)=>{const[_,M]=g.useState(""),I=v,R=v,C=v==="sm"?14:16,P=d9(t,a,x),N=g.useCallback(z=>{const B=Math.min(Math.max(1,z),a);B!==t&&i(B)},[t,a,i]),$=g.useCallback(z=>{if(z.key==="Enter"){const B=parseInt(_,10);isNaN(B)||N(B),M("")}},[_,N]),E=m!=null&&c!=null?`${(t-1)*c+1}–${Math.min(t*c,m)} of ${m}`:null;return r.jsxs("nav",{ref:j,"aria-label":"Pagination",className:ne(wn.root,w),"data-size":v,...L,children:[s&&r.jsxs("div",{className:wn.rowsGroup,children:[r.jsx("span",{className:wn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:wn.rowsSelect,children:r.jsx(xm,{size:R,value:c,disabled:k,"aria-label":"Rows per page",onChange:z=>p==null?void 0:p(Number(z.target.value)),children:u.map(z=>r.jsx("option",{value:z,children:z},z))})})]}),E&&r.jsx("span",{className:wn.countText,"aria-live":"polite",children:E}),r.jsxs("div",{className:wn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Ie,{variant:"ghost",size:I,iconOnly:!0,"aria-label":"Previous page",disabled:k||t<=1,onClick:()=>N(t-1),children:r.jsx(Qf,{size:C})}),P.map((z,B)=>z==="ellipsis"?r.jsx("span",{className:wn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${B}`):r.jsx(Ie,{variant:z===t?"secondary":"ghost",size:I,"aria-label":`Page ${z}`,"aria-current":z===t?"page":void 0,disabled:k,onClick:()=>N(z),className:wn.pageBtn,children:z},z)),r.jsx(Ie,{variant:"ghost",size:I,iconOnly:!0,"aria-label":"Next page",disabled:k||t>=a,onClick:()=>N(t+1),children:r.jsx(rn,{size:C})})]}),f&&r.jsxs("div",{className:wn.goToGroup,children:[r.jsx("span",{className:wn.groupLabel,children:"Go to"}),r.jsx("div",{className:wn.goToInput,children:r.jsx(bm,{size:R,value:_,placeholder:String(t),min:1,max:a,disabled:k,"aria-label":"Go to page number",onChange:z=>M(z.target.value),onKeyDown:$})})]})]})});u9.displayName="Pagination";const h9="_root_1vx33_6",p9="_fullWidth_1vx33_18",f9="_item_1vx33_23",m9="_indicator_1vx33_28",g9="_sm_1vx33_46",v9="_md_1vx33_54",y9="_lg_1vx33_62",x9="_itemSelected_1vx33_109",w9="_itemIcon_1vx33_115",b9="_itemLabel_1vx33_127",yr={root:h9,fullWidth:p9,item:f9,indicator:m9,sm:g9,md:v9,lg:y9,itemSelected:x9,itemIcon:w9,itemLabel:b9},km=g.createContext(null);function k9(t){const a=g.useContext(km);if(!a)throw new Error(`<${t}> must be rendered inside <SegmentedControl>`);return a}const _m=g.forwardRef(({value:t,leadingIcon:a,className:i,children:s,disabled:c,onClick:u,...p},f)=>{const{value:m,onChange:x,disabled:v,name:k}=k9("SegmentedControl.Item"),w=m===t,L=v||!!c;return r.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":w,name:k,disabled:L,className:ne(yr.item,w&&yr.itemSelected,i),onClick:j=>{L||x(t),u==null||u(j)},...p,children:[a&&r.jsx("span",{className:ne(yr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),s!==void 0&&r.jsx("span",{className:yr.itemLabel,children:s})]})});_m.displayName="SegmentedControl.Item";const Cm=g.forwardRef(({value:t,defaultValue:a="",onChange:i,size:s="md",disabled:c=!1,fullWidth:u=!1,className:p,children:f,...m},x)=>{const[v,k]=g.useState(a),w=t!==void 0,L=w?t:v,j=g.useId(),_=g.useRef(null);g.useLayoutEffect(()=>{const I=_.current;if(!I)return;const R=I.querySelector('[aria-checked="true"]');R&&(I.style.setProperty("--sc-indicator-x",`${R.offsetLeft}px`),I.style.setProperty("--sc-indicator-w",`${R.offsetWidth}px`))},[L,s]);const M=I=>{w||k(I),i==null||i(I)};return r.jsx(km.Provider,{value:{value:L,onChange:M,disabled:c,name:j},children:r.jsxs("div",{ref:I=>{_.current=I,typeof x=="function"?x(I):x&&(x.current=I)},role:"radiogroup",className:ne(yr.root,yr[s],u&&yr.fullWidth,p),...m,children:[r.jsx("span",{className:yr.indicator,"aria-hidden":"true"}),f]})})});Cm.displayName="SegmentedControl";Object.assign(Cm,{Item:_m});const _9="_root_fkv0x_6",C9="_sm_fkv0x_26",j9="_md_fkv0x_33",S9="_lg_fkv0x_40",N9="_dot_fkv0x_49",R9="_success_fkv0x_58",M9="_warning_fkv0x_65",L9="_error_fkv0x_72",$9="_info_fkv0x_79",T9="_neutral_fkv0x_86",I9="_pending_fkv0x_93",xs={root:_9,sm:C9,md:j9,lg:S9,dot:N9,success:R9,warning:M9,error:L9,info:$9,neutral:T9,pending:I9},Ka=g.forwardRef(({status:t="neutral",size:a="md",dot:i=!0,className:s,children:c,...u},p)=>r.jsxs("span",{ref:p,className:ne(xs.root,xs[a],xs[t],s),...u,children:[i&&r.jsx("span",{className:xs.dot,"aria-hidden":"true"}),c]}));Ka.displayName="StatusTag";const A9="_root_1m8t5_6",E9="_underline_1m8t5_15",P9="_background_1m8t5_21",z9="_underlineIndicator_1m8t5_26",O9="_md_1m8t5_43",D9="_lg_1m8t5_44",B9="_tab_1m8t5_42",F9="_tabSelected_1m8t5_77",W9="_tabIcon_1m8t5_99",H9="_tabLabel_1m8t5_111",q9="_tabBadge_1m8t5_116",U9="_tabLabelEditable_1m8t5_123",V9="_tabLabelInput_1m8t5_128",G9="_addTab_1m8t5_147",Y9="_addTabIcon_1m8t5_160",Gt={root:A9,underline:E9,background:P9,underlineIndicator:z9,md:O9,lg:D9,tab:B9,tabSelected:F9,tabIcon:W9,tabLabel:H9,tabBadge:q9,tabLabelEditable:U9,tabLabelInput:V9,addTab:G9,addTabIcon:Y9},jm=g.createContext(null);function Sm(t){const a=g.useContext(jm);if(!a)throw new Error(`<${t}> must be rendered inside <Tabs>`);return a}const Nm=g.forwardRef(({value:t,leadingIcon:a,trailingBadge:i,disabled:s,editable:c=!1,autoEdit:u=!1,onLabelChange:p,onClick:f,className:m,children:x,...v},k)=>{const{value:w,onChange:L,disabled:j,name:_}=Sm("Tabs.Tab"),M=w===t,I=j||!!s,R=typeof x=="string"?x:"",[C,P]=g.useState(u&&c),[N,$]=g.useState(R),E=g.useRef(null);g.useEffect(()=>{if(C){const Z=E.current;Z&&(Z.focus(),Z.select())}},[C]),g.useEffect(()=>{u&&c&&!C&&($(typeof x=="string"?x:""),P(!0))},[u,c]);const z=()=>{const Z=N.trim();Z&&Z!==R&&(p==null||p(Z)),P(!1)},B=()=>{$(R),P(!1)},Q=Z=>{!c||I||(Z.stopPropagation(),$(R),P(!0))},J=Z=>{Z.key==="Enter"?(Z.preventDefault(),z()):Z.key==="Escape"&&(Z.preventDefault(),B())};return r.jsxs("button",{ref:k,type:"button",role:"tab","aria-selected":M,name:_,disabled:I,className:ne(Gt.tab,M&&Gt.tabSelected,m),onClick:Z=>{C||(I||L(t),f==null||f(Z))},...v,children:[a&&r.jsx("span",{className:ne(Gt.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),C?r.jsx("input",{ref:E,type:"text",value:N,onChange:Z=>$(Z.target.value),onKeyDown:J,onBlur:z,onClick:Z=>Z.stopPropagation(),className:Gt.tabLabelInput,"aria-label":"Tab name",size:Math.max(N.length,1)}):x!==void 0&&r.jsx("span",{className:ne(Gt.tabLabel,c&&Gt.tabLabelEditable),onDoubleClick:Q,children:x}),i&&!C&&r.jsx("span",{className:Gt.tabBadge,children:i})]})});Nm.displayName="Tabs.Tab";const K9=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Rm=g.forwardRef(({className:t,onClick:a,"aria-label":i="Add tab",...s},c)=>{const{disabled:u}=Sm("Tabs.AddTab");return r.jsx("button",{ref:c,type:"button","aria-label":i,disabled:u,className:ne(Gt.tab,Gt.addTab,t),onClick:a,...s,children:r.jsx("span",{className:ne(Gt.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(K9,{})})})});Rm.displayName="Tabs.AddTab";const Mm=g.forwardRef(({variant:t="underline",size:a="md",value:i,defaultValue:s="",onChange:c,disabled:u=!1,className:p,children:f,...m},x)=>{const[v,k]=g.useState(s),w=i!==void 0,L=w?i:v,j=g.useId(),_=g.useRef(null);g.useLayoutEffect(()=>{const I=_.current;if(!I||t!=="underline")return;const R=I.querySelector('[aria-selected="true"]');R&&(I.style.setProperty("--tab-indicator-x",`${R.offsetLeft}px`),I.style.setProperty("--tab-indicator-w",`${R.offsetWidth}px`))},[L,t]);const M=I=>{w||k(I),c==null||c(I)};return r.jsx(jm.Provider,{value:{value:L,onChange:M,disabled:u,variant:t,size:a,name:j},children:r.jsxs("div",{ref:I=>{_.current=I,typeof x=="function"?x(I):x&&(x.current=I)},role:"tablist",className:ne(Gt.root,Gt[t],Gt[a],p),...m,children:[t==="underline"&&r.jsx("span",{className:Gt.underlineIndicator,"aria-hidden":"true"}),f]})})});Mm.displayName="Tabs";Object.assign(Mm,{Tab:Nm,AddTab:Rm});const Z9="_selectedBorder_1ypeg_7",Q9="_selectedFill_1ypeg_12",p1={selectedBorder:Z9,selectedFill:Q9},X9=g.forwardRef(({selected:t=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:c,className:u,...p},f)=>{const m=v=>{s==null||s(!t),c==null||c(v)},x=t?i==="fill"?p1.selectedFill:p1.selectedBorder:void 0;return r.jsx(Ie,{ref:f,variant:a,"aria-pressed":t,className:ne(x,u),onClick:m,...p})});X9.displayName="ToggleButton";const J9="_root_mcb75_6",e7="_disabled_mcb75_13",t7="_sm_mcb75_20",n7="_md_mcb75_31",r7="_lg_mcb75_42",o7="_track_mcb75_54",a7="_trackChecked_mcb75_90",i7="_thumb_mcb75_100",s7="_labelWrap_mcb75_117",l7="_label_mcb75_117",c7="_description_mcb75_139",Un={root:J9,disabled:e7,sm:t7,md:n7,lg:r7,track:o7,trackChecked:a7,thumb:i7,labelWrap:s7,label:l7,description:c7},d7=g.forwardRef(({checked:t,defaultChecked:a=!1,onChange:i,disabled:s,size:c="md",label:u,description:p,id:f,name:m,value:x,className:v},k)=>{const w=g.useId(),L=f??w,j=`${L}-label`,_=t!==void 0,[M,I]=g.useState(a),R=_?t:M,C=()=>{if(s)return;const N=!R;_||I(N),i==null||i(N)},P=N=>{(N.key===" "||N.key==="Enter")&&(N.preventDefault(),C())};return r.jsxs("div",{className:ne(Un.root,Un[c],s&&Un.disabled,v),children:[r.jsx("button",{ref:k,type:"button",role:"switch",id:L,"aria-checked":R,"aria-labelledby":u?j:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:m,value:x,className:ne(Un.track,R&&Un.trackChecked),"data-checked":R||void 0,"data-disabled":s||void 0,onClick:C,onKeyDown:P,children:r.jsx("span",{className:Un.thumb})}),(u||p)&&r.jsxs("div",{className:Un.labelWrap,children:[u&&r.jsx("label",{id:j,htmlFor:L,className:Un.label,children:u}),p&&r.jsx("span",{className:Un.description,children:p})]})]})});d7.displayName="Switch";const u7="_root_104n4_5",h7="_disabled_104n4_11",p7="_sm_104n4_17",f7="_md_104n4_25",m7="_lg_104n4_33",g7="_controlWrap_104n4_41",v7="_input_104n4_50",y7="_ring_104n4_65",x7="_ringChecked_104n4_90",w7="_ringError_104n4_94",b7="_dot_104n4_104",k7="_labelWrap_104n4_112",_7="_label_104n4_112",C7="_error_104n4_130",j7="_required_104n4_132",S7="_description_104n4_137",Ut={root:u7,disabled:h7,sm:p7,md:f7,lg:m7,controlWrap:g7,input:v7,ring:y7,ringChecked:x7,ringError:w7,dot:b7,labelWrap:k7,label:_7,error:C7,required:j7,description:S7},N7=g.forwardRef(({value:t,checked:a,onChange:i,disabled:s,error:c,size:u="md",label:p,description:f,id:m,name:x,required:v,className:k},w)=>{const L=g.useId(),j=m??L;return r.jsxs("div",{className:ne(Ut.root,Ut[u],s&&Ut.disabled,c&&Ut.error,k),children:[r.jsxs("div",{className:Ut.controlWrap,children:[r.jsx("input",{ref:w,type:"radio",id:j,name:x,value:t,checked:a,disabled:s,required:v,"aria-invalid":c||void 0,onChange:()=>i==null?void 0:i(t),className:Ut.input}),r.jsx("span",{className:ne(Ut.ring,a&&Ut.ringChecked,c&&Ut.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:Ut.dot})})]}),(p||f)&&r.jsxs("div",{className:Ut.labelWrap,children:[p&&r.jsxs("label",{htmlFor:j,className:Ut.label,children:[p,v&&r.jsx("span",{className:Ut.required,"aria-hidden":"true",children:" *"})]}),f&&r.jsx("span",{className:Ut.description,children:f})]})]})});N7.displayName="Radio";const R7="_table_1ad04_8",M7="_sm_1ad04_16",L7="_row_1ad04_30",$7="_head_1ad04_47",T7="_headLabel_1ad04_82",I7="_sortBtn_1ad04_96",A7="_sortIcon_1ad04_119",E7="_cell_1ad04_142",P7="_cellText_1ad04_175",z7="_cellStack_1ad04_203",O7="_cellStackPrimary_1ad04_210",D7="_cellStackSecondary_1ad04_221",B7="_cellActions_1ad04_233",F7="_cellControl_1ad04_240",W7="_addCell_1ad04_251",H7="_addRowCell_1ad04_264",q7="_addRowLabel_1ad04_276",kt={table:R7,sm:M7,row:L7,head:$7,headLabel:T7,sortBtn:I7,sortIcon:A7,cell:E7,cellText:P7,cellStack:z7,cellStackPrimary:O7,cellStackSecondary:D7,cellActions:B7,cellControl:F7,addCell:W7,addRowCell:H7,addRowLabel:q7},Lm=g.createContext({addColumn:!1,addRow:!1}),$m=()=>g.useContext(Lm),U7=g.forwardRef(({size:t="md",interaction:a="row",addColumn:i=!1,addRow:s=!1,onAddColumn:c,onAddRow:u,className:p,children:f,...m},x)=>{const v=g.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:c,onAddRow:u}),[i,s,c,u]);return r.jsx(Lm.Provider,{value:v,children:r.jsx("table",{ref:x,className:ne(kt.table,t==="sm"&&kt.sm,p),"data-interaction":a,...m,children:f})})});U7.displayName="Table";const Tm=g.forwardRef(({align:t="left",sort:a,onSort:i,hoverable:s,selected:c,className:u,children:p,...f},m)=>{const x=a!==void 0;return r.jsx("th",{ref:m,className:ne(kt.head,u),"data-align":t!=="left"?t:void 0,"data-hoverable":!x&&s?!0:void 0,"data-selected":c||void 0,"aria-selected":c,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":x?"none":void 0,...f,children:x?r.jsxs("button",{type:"button",className:kt.sortBtn,onClick:i,"aria-label":typeof p=="string"?`Sort by ${p}`:void 0,children:[p,r.jsx("span",{className:kt.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(Kn,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:kt.headLabel,children:p})})});Tm.displayName="TableHead";const V7=g.forwardRef(({children:t,...a},i)=>{const{addColumn:s,onAddColumn:c}=$m(),u=s?g.Children.map(t,(p,f)=>{if(!g.isValidElement(p)||f!==0)return p;const m=g.Children.toArray(p.props.children);return g.cloneElement(p,{},[...m,r.jsx(Tm,{hoverable:!0,onClick:c,className:kt.addCell,"aria-label":"Add column",children:r.jsx(Yo,{size:14,strokeWidth:2})},"__add_col_head")])}):t;return r.jsx("thead",{ref:i,...a,children:u})});V7.displayName="TableHeader";const Im=g.forwardRef(({hoverable:t=!0,selected:a,className:i,children:s,...c},u)=>r.jsx("tr",{ref:u,className:ne(kt.row,i),"data-hoverable":t||void 0,"data-selected":a||void 0,"aria-selected":a,...c,children:s}));Im.displayName="TableRow";const wd=g.forwardRef(({align:t="left",compact:a,hoverable:i=!0,selected:s,className:c,children:u,...p},f)=>r.jsx("td",{ref:f,className:ne(kt.cell,c),"data-align":t!=="left"?t:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...p,children:u}));wd.displayName="TableCell";const G7=g.forwardRef(({children:t,...a},i)=>{const{addColumn:s,addRow:c,onAddRow:u}=$m(),p=s?g.Children.map(t,f=>{if(!g.isValidElement(f))return f;const m=g.Children.toArray(f.props.children);return g.cloneElement(f,{},[...m,r.jsx(wd,{"aria-hidden":"true",className:kt.addCell},"__add_col_pad")])}):t;return r.jsxs("tbody",{ref:i,...a,children:[p,c&&r.jsx(Im,{hoverable:!1,children:r.jsx(wd,{colSpan:999,onClick:u,className:kt.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:kt.addRowLabel,children:[r.jsx(Yo,{size:14,strokeWidth:2}),"Add row"]})})})]})});G7.displayName="TableBody";const Y7=g.forwardRef(({variant:t="primary",size:a="md",wrap:i,className:s,children:c,...u},p)=>r.jsx("span",{ref:p,className:ne(kt.cellText,s),"data-variant":t!=="primary"?t:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...u,children:c}));Y7.displayName="CellText";const K7=g.forwardRef(({primary:t,secondary:a,className:i,...s},c)=>r.jsxs("div",{ref:c,className:ne(kt.cellStack,i),...s,children:[r.jsx("span",{className:kt.cellStackPrimary,children:t}),a&&r.jsx("span",{className:kt.cellStackSecondary,children:a})]}));K7.displayName="CellStack";const Z7=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(br,{ref:i,size:t,...a}));Z7.displayName="CellTag";const Q7=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(Ka,{ref:i,size:t,...a}));Q7.displayName="CellStatusTag";const X7=g.forwardRef(({className:t,children:a,...i},s)=>r.jsx("div",{ref:s,className:ne(kt.cellActions,t),...i,children:a}));X7.displayName="CellActions";const J7=g.forwardRef(({className:t,children:a,...i},s)=>r.jsx("div",{ref:s,className:ne(kt.cellControl,t),...i,children:a}));J7.displayName="CellControl";const eb="_root_1afcs_8",tb="_secondary_1afcs_23",nb="_header_1afcs_28",rb="_headerText_1afcs_36",ob="_title_1afcs_43",ab="_subtitle_1afcs_52",ib="_action_1afcs_61",sb="_hero_1afcs_66",lb="_heroValue_1afcs_74",cb="_heroCaption_1afcs_83",db="_heroChange_1afcs_89",ub="_body_1afcs_95",hb="_legend_1afcs_103",Jt={root:eb,secondary:tb,header:nb,headerText:rb,title:ob,subtitle:ab,action:ib,hero:sb,heroValue:lb,heroCaption:cb,heroChange:db,body:ub,legend:hb},pb=g.forwardRef(({title:t,subtitle:a,action:i,value:s,valueChange:c,valueCaption:u,legend:p,secondary:f,children:m,className:x,...v},k)=>r.jsxs("div",{ref:k,className:ne(Jt.root,f&&Jt.secondary,x),...v,children:[r.jsxs("div",{className:Jt.header,children:[r.jsxs("div",{className:Jt.headerText,children:[r.jsx("h3",{className:Jt.title,children:t}),a&&r.jsx("p",{className:Jt.subtitle,children:a})]}),i&&r.jsx("div",{className:Jt.action,children:i})]}),(s!==void 0||c||u)&&r.jsxs("div",{className:Jt.hero,children:[s!==void 0&&r.jsx("span",{className:Jt.heroValue,children:s}),c&&r.jsx("span",{className:Jt.heroChange,children:c}),u&&r.jsx("span",{className:Jt.heroCaption,children:u})]}),r.jsx("div",{className:Jt.body,children:m}),p&&r.jsx("div",{className:Jt.legend,children:p})]}));pb.displayName="ChartCard";const fb="_root_je8nq_7",mb="_item_je8nq_17",gb="_swatch_je8nq_23",vb="_label_je8nq_29",yb="_bookend_je8nq_33",$o={root:fb,item:mb,swatch:gb,label:vb,bookend:yb},Am=g.forwardRef(({items:t,before:a,after:i,variant:s="square",swatchSize:c=12,className:u,...p},f)=>r.jsxs("div",{ref:f,className:ne($o.root,u),...p,children:[a&&r.jsx("span",{className:$o.bookend,children:a}),t.map((m,x)=>{const v=s==="line"?{width:c+4,height:2,background:m.color,borderRadius:1}:s==="dot"?{width:c-2,height:c-2,background:m.color,borderRadius:"50%"}:{width:c,height:c,background:m.color};return r.jsxs("span",{className:$o.item,children:[r.jsx("span",{className:$o.swatch,style:v,"aria-hidden":"true"}),m.label!==void 0&&r.jsx("span",{className:$o.label,children:m.label})]},x)}),i&&r.jsx("span",{className:$o.bookend,children:i})]}));Am.displayName="ChartLegend";const xb="_root_igkx4_5",wb="_svgWrap_igkx4_13",bb="_svg_igkx4_13",kb="_gridLine_igkx4_23",_b="_axisLabel_igkx4_28",Cb="_legendWrap_igkx4_43",jb="_legendItem_igkx4_51",Sb="_legendDot_igkx4_57",Nb="_legendLabel_igkx4_64",Rb="_tooltip_igkx4_71",Mb="_tooltipLabel_igkx4_85",Lb="_tooltipRow_igkx4_95",$b="_tooltipDot_igkx4_101",Tb="_tooltipSeries_igkx4_108",Ib="_tooltipValue_igkx4_115",Le={root:xb,svgWrap:wb,svg:bb,gridLine:kb,axisLabel:_b,legendWrap:Cb,legendItem:jb,legendDot:Sb,legendLabel:Nb,tooltip:Rb,tooltipLabel:Mb,tooltipRow:Lb,tooltipDot:$b,tooltipSeries:Tb,tooltipValue:Ib},Ab=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Xc(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function To(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}const Eb=g.forwardRef(({series:t,labels:a,variant:i="grouped",height:s=260,showGrid:c=!0,showLegend:u=!0,yUnit:p="",barRadius:f=2,colors:m,gradientFrom:x="#8c4fe2",gradientTo:v="#446cff",formatTooltipValue:k,stackStyle:w="gradient-each",capColor:L,className:j,..._},M)=>{var ee,W,de,ve;const I=m&&m.length>0?m:Ab,R=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[C,P]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),N=g.useRef(null),[$,E]=g.useState(540);g.useEffect(()=>{const pe=N.current;if(!pe)return;const xe=new ResizeObserver(Ce=>{var Fe;const Me=(Fe=Ce[0])==null?void 0:Fe.contentRect.width;Me>0&&E(Math.floor(Me))});xe.observe(pe);const Se=Math.floor(pe.getBoundingClientRect().width);return Se>0&&E(Se),()=>xe.disconnect()},[]);const z=44,B=0,Q=20,J=20,Z=$,te=s,re=Z-z-B,ce=te-Q-J,ae=5,G=t.map((pe,xe)=>pe.color??I[xe%I.length]);let F=0;i==="stacked"?a.forEach((pe,xe)=>{const Se=t.reduce((Ce,Me)=>Ce+(Me.data[xe]??0),0);Se>F&&(F=Se)}):i==="horizontal"?F=Math.max(...((ee=t[0])==null?void 0:ee.data)??[0]):t.forEach(pe=>pe.data.forEach(xe=>{xe>F&&(F=xe)}));const K=Xc(F),q=Array.from({length:ae+1},(pe,xe)=>K*(xe/ae)).reverse(),T=pe=>J+ce-pe/K*ce,S=re/a.length,H=3,Y=i==="grouped"?Math.max(4,(S-H*(t.length+1))/t.length):S,oe=()=>P(pe=>({...pe,visible:!1})),he=g.useCallback(pe=>{const xe=pe.currentTarget.getBoundingClientRect(),Se=pe.clientX-xe.left,Ce=Math.floor((Se-z)/S);if(Ce<0||Ce>=a.length){oe();return}const Me=t.map((Fe,Ue)=>({color:G[Ue],series:Fe.label,value:Fe.data[Ce]??0}));P({visible:!0,x:pe.clientX+12,y:pe.clientY-8,label:a[Ce],items:Me})},[t,a,S,G,z]);if(i==="gradient"){const pe=((W=t[0])==null?void 0:W.data)??[],xe=((de=t[0])==null?void 0:de.label)??"",Se=44,Ce=0,Me=20,Fe=20,Ue=Math.max(Z-Se-Ce,1),Ve=te-Me-Fe,Oe=Math.max(0,...pe),Ye=Oe>0?Xc(Oe):10,Ge=5,Tt=Array.from({length:Ge+1},(Ne,et)=>Ye*et/Ge),We=Ne=>Me+Ve-Ne/Ye*Ve,It=Ue/Math.max(1,pe.length),_t=Ne=>Se+It*Ne,_n=Ne=>Se+It*(Ne+1),Cn=Ne=>Se+It*(Ne+.5),Cr=pe.length===0?"":pe.map((Ne,et)=>{const lt=We(Ne);return`M ${_t(et)} ${lt} L ${_n(et)} ${lt}`}).join(" "),Jo=[];pe.forEach((Ne,et)=>{if(Ne<=0)return;const lt=We(Ne);Jo.push({x:_t(et),y:lt,width:Math.max(_n(et)-_t(et),0),height:Me+Ve-lt})});const jr=Math.max(1,Math.ceil(45/It)),rl=a.length-1,ai=k??(Ne=>`${To(Ne)}${p}`);return r.jsxs("div",{ref:M,className:ne(Le.root,j),..._,children:[r.jsx("div",{ref:N,className:Le.svgWrap,children:r.jsxs("svg",{width:Z,height:te,viewBox:`0 0 ${Z} ${te}`,className:Le.svg,onMouseLeave:oe,onMouseMove:Ne=>{const et=Ne.currentTarget.getBoundingClientRect(),lt=Ne.clientX-et.left,At=Math.floor((lt-Se)/It);if(At<0||At>=pe.length){oe();return}P({visible:!0,x:Ne.clientX+12,y:Ne.clientY-8,label:a[At]??"",items:[{color:v,series:xe,value:pe[At]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${R}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x}),r.jsx("stop",{offset:"100%",stopColor:v})]}),r.jsxs("linearGradient",{id:`${R}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:v,stopOpacity:"0"})]})]}),Tt.map((Ne,et)=>r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,x2:Z-Ce,y1:We(Ne),y2:We(Ne),className:Le.gridLine}),r.jsxs("text",{x:0,y:We(Ne)-6,className:Le.axisLabel,textAnchor:"start",children:[To(Ne),p]})]},`t-${et}`)),Jo.map((Ne,et)=>r.jsx("rect",{x:Ne.x,y:Ne.y,width:Ne.width,height:Ne.height,fill:`url(#${R}-fill)`},`b-${et}`)),Cr&&r.jsx("path",{d:Cr,fill:"none",stroke:`url(#${R}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),C.visible&&(()=>{var Sr;const Ne=(Sr=N.current)==null?void 0:Sr.getBoundingClientRect();if(!Ne)return null;const et=C.x-12-Ne.left,lt=Math.floor((et-Se)/It);if(lt<0||lt>=pe.length)return null;const At=pe[lt]??0;return At<=0?null:r.jsx("circle",{cx:Cn(lt),cy:We(At),r:4,fill:v,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((Ne,et)=>{const lt=et===0,At=et===rl;if(!(lt||At)&&et%jr!==0)return null;const ea=lt?Se:At?Z-Ce:Cn(et),ta=lt?"start":At?"end":"middle";return r.jsx("text",{x:ea,y:te-Fe+18,className:Le.axisLabel,textAnchor:ta,children:Ne},`xl-${et}`)})]})}),C.visible&&C.items.length>0&&r.jsxs("div",{className:Le.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Le.tooltipLabel,children:C.label}),C.items.map(Ne=>r.jsxs("div",{className:Le.tooltipRow,children:[r.jsx("span",{className:Le.tooltipDot,style:{background:Ne.color}}),r.jsx("span",{className:Le.tooltipSeries,children:Ne.series}),r.jsx("span",{className:Le.tooltipValue,children:ai(Ne.value)})]},Ne.series))]})]})}if(i==="horizontal"){const pe=((ve=t[0])==null?void 0:ve.data)??[],xe=Xc(Math.max(...pe,1)),Se=28,Ce=10,Me=120,Ue=Z-Me-44,Ve=a.length*(Se+Ce)+Ce;return r.jsxs("div",{ref:M,className:ne(Le.root,j),..._,children:[r.jsx("div",{ref:N,className:Le.svgWrap,children:r.jsx("svg",{width:Z,height:Ve,viewBox:`0 0 ${Z} ${Ve}`,className:Le.svg,onMouseLeave:oe,onMouseMove:Oe=>{var We;const Ye=Oe.currentTarget.getBoundingClientRect(),Ge=Oe.clientY-Ye.top,Tt=Math.floor(Ge/(Se+Ce));if(Tt<0||Tt>=a.length){oe();return}P({visible:!0,x:Oe.clientX+12,y:Oe.clientY-8,label:a[Tt],items:[{color:G[0],series:((We=t[0])==null?void 0:We.label)??"",value:pe[Tt]??0}]})},children:a.map((Oe,Ye)=>{const Ge=Ce+Ye*(Se+Ce),Tt=pe[Ye]??0,We=Tt/xe*Ue;return r.jsxs("g",{children:[r.jsx("text",{x:Me-8,y:Ge+Se/2+4,className:Le.axisLabel,textAnchor:"end",children:Oe}),r.jsx("rect",{x:Me,y:Ge,width:We,height:Se,rx:f,fill:G[0]}),r.jsxs("text",{x:Me+We+6,y:Ge+Se/2+4,className:Le.axisLabel,textAnchor:"start",children:[To(Tt),p]})]},Ye)})})}),C.visible&&r.jsxs("div",{className:Le.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Le.tooltipLabel,children:C.label}),C.items.map(Oe=>r.jsxs("div",{className:Le.tooltipRow,children:[r.jsx("span",{className:Le.tooltipDot,style:{background:Oe.color}}),r.jsx("span",{className:Le.tooltipSeries,children:Oe.series}),r.jsxs("span",{className:Le.tooltipValue,children:[To(Oe.value),p]})]},Oe.series))]})]})}return r.jsxs("div",{ref:M,className:ne(Le.root,j),..._,children:[r.jsx("div",{ref:N,className:Le.svgWrap,children:r.jsxs("svg",{width:Z,height:te,viewBox:`0 0 ${Z} ${te}`,className:Le.svg,onMouseMove:he,onMouseLeave:oe,children:[r.jsx("defs",{children:G.flatMap((pe,xe)=>[r.jsxs("linearGradient",{id:`${R}-fill-${xe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:pe,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:pe,stopOpacity:"0"})]},`soft-${xe}`),r.jsxs("linearGradient",{id:`${R}-fill-strong-${xe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:pe,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:pe,stopOpacity:"0"})]},`strong-${xe}`)])}),q.map(pe=>{const xe=T(pe);return r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,y1:xe,x2:Z-B,y2:xe,className:Le.gridLine}),r.jsxs("text",{x:0,y:xe-6,className:Le.axisLabel,textAnchor:"start",children:[To(pe),p]})]},pe)}),a.map((pe,xe)=>{const Se=z+xe*S;if(i==="stacked"){let Fe=0;const Ue=t.map((We,It)=>{const _t=We.data[xe]??0,_n=_t/K*ce,Cn=T(Fe+_t);return Fe+=_t,{si:It,value:_t,barH:_n,y:Cn}}),Ve=Se+(S-Y)/2,Oe=Ue.filter(We=>We.value>0),Ye=Oe.length>0?Oe[0].si:-1,Ge=Oe.length>0?Oe[Oe.length-1]:null,Tt=L??(Ge?G[Ge.si]:"transparent");return r.jsxs("g",{children:[Ue.map(({si:We,value:It,barH:_t,y:_n})=>{if(It<=0)return null;if(w==="mono-scale"){const Cn=We===Ye;return r.jsx("rect",{x:Ve,y:_n,width:Y,height:_t,fill:Cn?`url(#${R}-fill-strong-${We})`:G[We]},`fill-${We}`)}return r.jsx("rect",{x:Ve,y:_n,width:Y,height:_t,fill:`url(#${R}-fill-${We})`},`fill-${We}`)}),w==="mono-scale"?Ge&&r.jsx("line",{x1:Ve,x2:Ve+Y,y1:Ge.y,y2:Ge.y,stroke:Tt,strokeWidth:2,strokeLinecap:"butt"}):Ue.map(({si:We,value:It,y:_t})=>It>0?r.jsx("line",{x1:Ve,x2:Ve+Y,y1:_t,y2:_t,stroke:G[We],strokeWidth:2,strokeLinecap:"butt"},`cap-${We}`):null)]},xe)}const Ce=t.length*Y+(t.length-1)*H,Me=Se+(S-Ce)/2;return r.jsx("g",{children:t.map((Fe,Ue)=>{const Ve=Fe.data[xe]??0;if(Ve<=0)return null;const Oe=Ve/K*ce,Ye=Me+Ue*(Y+H),Ge=T(Ve);return r.jsxs("g",{children:[r.jsx("rect",{x:Ye,y:Ge,width:Y,height:Oe,fill:`url(#${R}-fill-${Ue})`}),r.jsx("line",{x1:Ye,x2:Ye+Y,y1:Ge,y2:Ge,stroke:G[Ue],strokeWidth:2,strokeLinecap:"butt"})]},Ue)})},xe)}),(()=>{const xe=Math.max(1,Math.ceil(45/S)),Se=a.length-1;return a.map((Ce,Me)=>{const Fe=Me===0,Ue=Me===Se;if(!(Fe||Ue)&&Me%xe!==0)return null;const Oe=Fe?z:Ue?Z-B:z+S*(Me+.5),Ye=Fe?"start":Ue?"end":"middle";return r.jsx("text",{x:Oe,y:te-Q+18,className:Le.axisLabel,textAnchor:Ye,children:Ce},`xl-${Me}`)})})()]})}),u&&t.length>1&&r.jsx("div",{className:Le.legendWrap,children:t.map((pe,xe)=>r.jsxs("div",{className:Le.legendItem,children:[r.jsx("span",{className:Le.legendDot,style:{background:G[xe]}}),r.jsx("span",{className:Le.legendLabel,children:pe.label})]},pe.label))}),C.visible&&r.jsxs("div",{className:Le.tooltip,style:{left:C.x,top:C.y},children:[r.jsx("div",{className:Le.tooltipLabel,children:C.label}),C.items.map(pe=>r.jsxs("div",{className:Le.tooltipRow,children:[r.jsx("span",{className:Le.tooltipDot,style:{background:pe.color}}),r.jsx("span",{className:Le.tooltipSeries,children:pe.series}),r.jsxs("span",{className:Le.tooltipValue,children:[To(pe.value),p]})]},pe.series))]})]})});Eb.displayName="BarChart";const Pb="_root_1crij_5",zb="_svgWrap_1crij_13",Ob="_svg_1crij_13",Db="_gridLine_1crij_23",Bb="_axisLabelY_1crij_35 _axisLabel_1crij_28",Fb="_axisLabelX_1crij_39 _axisLabel_1crij_28",Wb="_legendWrap_1crij_51",Hb="_tooltip_1crij_76",qb="_tooltipLabel_1crij_95",Ub="_tooltipRow_1crij_105",Vb="_tooltipDot_1crij_111",Gb="_tooltipSeries_1crij_118",Yb="_tooltipValue_1crij_125",en={root:Pb,svgWrap:zb,svg:Ob,gridLine:Db,axisLabelY:Bb,axisLabelX:Fb,legendWrap:Wb,tooltip:Hb,tooltipLabel:qb,tooltipRow:Ub,tooltipDot:Vb,tooltipSeries:Gb,tooltipValue:Yb};function Kb(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function f1(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}function Zb(t,a=.35){if(t.length<2)return"";let i=`M ${t[0][0]} ${t[0][1]}`;for(let s=0;s<t.length-1;s++){const[c,u]=t[s],[p,f]=t[s+1],m=(p-c)*a;i+=` C ${c+m} ${u}, ${p-m} ${f}, ${p} ${f}`}return i}const Qb=g.forwardRef(({series:t,labels:a,height:i=260,showGrid:s=!0,showLegend:c=!0,gradientFrom:u="#8c4fe2",gradientTo:p="#446cff",yUnit:f="",yTickCount:m=5,className:x,...v},k)=>{const[w,L]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),j=`line-grad-${Math.random().toString(36).slice(2,9)}`,_=g.useRef(null),[M,I]=g.useState(540);g.useEffect(()=>{const K=_.current;if(!K)return;const q=new ResizeObserver(S=>{var Y;const H=(Y=S[0])==null?void 0:Y.contentRect.width;H>0&&I(Math.floor(H))});q.observe(K);const T=Math.floor(K.getBoundingClientRect().width);return T>0&&I(T),()=>q.disconnect()},[]);const R=44,C=20,P=20,N=M,$=i,E=N-R,z=$-C-P,B=`url(#${j}-stroke)`,Q=K=>K.color??B,J=t.flatMap(K=>K.data),Z=Kb(Math.max(...J,1)),te=Array.from({length:m+1},(K,q)=>Z*(q/m)).reverse(),re=K=>P+z-K/Z*z,ce=K=>a.length>1?R+K/(a.length-1)*E:R+E/2,ae=K=>K.map((q,T)=>[ce(T),re(q)]),G=()=>L(K=>({...K,visible:!1})),F=g.useCallback(K=>{const q=K.currentTarget.getBoundingClientRect(),S=K.clientX-q.left-R,H=E/Math.max(a.length-1,1),Y=Math.round(S/H),oe=Math.max(0,Math.min(Y,a.length-1)),he=t.map(ee=>({color:ee.color??p,series:ee.label,value:ee.data[oe]??0}));L({visible:!0,index:oe,x:K.clientX+12,y:K.clientY-8,label:a[oe],items:he})},[t,a,p,E,R]);return r.jsxs("div",{ref:k,className:ne(en.root,x),...v,children:[r.jsx("div",{ref:_,className:en.svgWrap,children:r.jsxs("svg",{width:N,height:$,viewBox:`0 0 ${N} ${$}`,className:en.svg,onMouseMove:F,onMouseLeave:G,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${j}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:u}),r.jsx("stop",{offset:"100%",stopColor:p})]}),r.jsxs("linearGradient",{id:`${j}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:p,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:p}),r.jsx("stop",{offset:"100%",stopColor:p,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${j}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${j}-clip`,children:r.jsx("rect",{x:R,y:P,width:E,height:z,rx:6,ry:6})})]}),te.map(K=>{const q=re(K);return r.jsxs("g",{children:[s&&r.jsx("line",{x1:0,y1:q,x2:N,y2:q,className:en.gridLine}),r.jsxs("text",{x:0,y:q-6,className:en.axisLabelY,textAnchor:"start",children:[f1(K),f]})]},K)}),r.jsx("g",{clipPath:`url(#${j}-clip)`,children:t.map((K,q)=>{const T=ae(K.data),S=Zb(T);return r.jsx("path",{d:S,fill:"none",stroke:Q(K),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},q)})}),(()=>{const K=w.index>=0?w.index:0,q=ce(K),T=w.visible&&w.index>=0,S="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:T?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${q}px)`,transition:S},children:[r.jsx("line",{x1:0,x2:0,y1:P,y2:P+z,stroke:p,strokeWidth:2,strokeLinecap:"round",opacity:.5}),t.map((H,Y)=>{const oe=H.data[K]??0,he=re(oe),ee=H.color??p;return r.jsx("g",{style:{transform:`translateY(${he}px)`,transition:S},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:ee,filter:`url(#${j}-pin-shadow)`})},Y)})]})})})(),(()=>{const q=a.length>1?E/(a.length-1):E,T=Math.max(1,Math.ceil(45/Math.max(q,1))),S=a.length-1;return a.map((H,Y)=>{const oe=Y===0,he=Y===S;if(!(oe||he)&&Y%T!==0)return null;const W=oe?R:he?N:ce(Y),de=oe?"start":he?"end":"middle";return r.jsx("text",{x:W,y:$-C+14,className:en.axisLabelX,textAnchor:de,children:H},H)})})()]})}),c&&t.length>0&&r.jsx("div",{className:en.legendWrap,children:r.jsx(Am,{variant:"line",items:t.map(K=>({color:K.color??p,label:K.label}))})}),w.visible&&r.jsxs("div",{className:en.tooltip,style:{left:w.x,top:w.y},children:[r.jsx("div",{className:en.tooltipLabel,children:w.label}),w.items.map(K=>r.jsxs("div",{className:en.tooltipRow,children:[r.jsx("span",{className:en.tooltipDot,style:{background:K.color}}),r.jsx("span",{className:en.tooltipSeries,children:K.series}),r.jsxs("span",{className:en.tooltipValue,children:[f1(K.value),f]})]},K.series))]})]})});Qb.displayName="LineChart";const Xb="_root_3tq2n_5",Jb="_chartWrap_3tq2n_14",ek="_svg_3tq2n_18",tk="_centerText_3tq2n_23",nk="_statLegend_3tq2n_31",rk="_statItem_3tq2n_37",ok="_statBar_3tq2n_44",ak="_statText_3tq2n_50",ik="_statValue_3tq2n_56",sk="_statLabel_3tq2n_65",lk="_listLegend_3tq2n_72",ck="_legendItem_3tq2n_79",dk="_legendDot_3tq2n_85",uk="_legendLabel_3tq2n_92",hk="_legendValue_3tq2n_99",pk="_tooltip_3tq2n_107",fk="_tooltipLabel_3tq2n_118",mk="_tooltipValue_3tq2n_124",xt={root:Xb,chartWrap:Jb,svg:ek,centerText:tk,statLegend:nk,statItem:rk,statBar:ok,statText:ak,statValue:ik,statLabel:sk,listLegend:lk,legendItem:ck,legendDot:dk,legendLabel:uk,legendValue:hk,tooltip:pk,tooltipLabel:fk,tooltipValue:mk},m1=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],gk=g.forwardRef(({segments:t,innerRadius:a=60,size:i=200,showLegend:s=!0,legendVariant:c="list",unit:u="%",centerLabel:p,className:f,...m},x)=>{const[v,k]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),w=t.map((N,$)=>N.color??m1[$%m1.length]),L=t.reduce((N,$)=>N+$.value,0),j=i/2,_=i/2,M=i*.15,I=(i-M)/2-2,R=2*Math.PI*I;let C=-R/4;const P=t.map((N,$)=>{const z=(L>0?N.value/L:0)*R,B=`${z} ${R-z}`,Q=-C;return C+=z,{dashArray:B,dashOffset:Q,color:w[$],...N}});return r.jsxs("div",{ref:x,className:ne(xt.root,f),...m,children:[r.jsx("div",{className:xt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:xt.svg,children:[r.jsx("circle",{cx:j,cy:_,r:I,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:M}),P.map((N,$)=>r.jsx("circle",{cx:j,cy:_,r:I,fill:"none",stroke:N.color,strokeWidth:M,strokeDasharray:N.dashArray,strokeDashoffset:N.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:E=>{const z=L>0?Math.round(N.value/L*100):0;k({visible:!0,x:E.clientX+12,y:E.clientY-8,label:N.label,value:`${z}${u}`})},onMouseLeave:()=>k(E=>({...E,visible:!1}))},$)),p&&a>0&&r.jsx("text",{x:j,y:_+6,textAnchor:"middle",className:xt.centerText,children:p})]})}),s&&c==="stat"&&r.jsx("div",{className:xt.statLegend,children:t.map((N,$)=>{const E=L>0?Math.round(N.value/L*100):0;return r.jsxs("div",{className:xt.statItem,children:[r.jsx("span",{className:xt.statBar,style:{background:w[$]}}),r.jsxs("div",{className:xt.statText,children:[r.jsxs("span",{className:xt.statValue,children:[E,u]}),r.jsx("span",{className:xt.statLabel,children:N.label})]})]},N.label)})}),s&&c==="list"&&r.jsx("div",{className:xt.listLegend,children:t.map((N,$)=>{const E=L>0?Math.round(N.value/L*100):0;return r.jsxs("div",{className:xt.legendItem,children:[r.jsx("span",{className:xt.legendDot,style:{background:w[$]}}),r.jsx("span",{className:xt.legendLabel,children:N.label}),r.jsxs("span",{className:xt.legendValue,children:[E,u]})]},N.label)})}),v.visible&&r.jsxs("div",{className:xt.tooltip,style:{left:v.x,top:v.y},children:[r.jsx("div",{className:xt.tooltipLabel,children:v.label}),r.jsx("div",{className:xt.tooltipValue,children:v.value})]})]})});gk.displayName="DonutChart";const vk="_root_bqpf6_5",yk="_svgWrap_bqpf6_10",xk="_svg_bqpf6_10",wk="_axisLabel_bqpf6_19",bk="_tooltip_bqpf6_25",Io={root:vk,svgWrap:yk,svg:xk,axisLabel:wk,tooltip:bk};function kk(t){return t<.35?"var(--Alloy-green-100)":t<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const _k=g.forwardRef(({cells:t,rows:a,cols:i,colorScale:s=kk,cellRadius:c=4,cellGap:u=4,showTooltip:p=!0,className:f,...m},x)=>{const[v,k]=g.useState({visible:!1,x:0,y:0,content:""}),w=g.useRef(null),[L,j]=g.useState(540);g.useEffect(()=>{const $=w.current;if(!$)return;const E=new ResizeObserver(B=>{var J;const Q=(J=B[0])==null?void 0:J.contentRect.width;Q>0&&j(Math.floor(Q))});E.observe($);const z=Math.floor($.getBoundingClientRect().width);return z>0&&j(z),()=>E.disconnect()},[]);const _=32,M=16,I=L,R=I-_-u,C=Math.max(4,(R-(i.length-1)*u)/i.length),P=a.length*(M+u)+u+24,N=new Map;return t.forEach($=>N.set(`${$.row}__${$.col}`,$)),r.jsxs("div",{ref:x,className:ne(Io.root,f),...m,children:[r.jsx("div",{ref:w,className:Io.svgWrap,children:r.jsxs("svg",{width:I,height:P,viewBox:`0 0 ${I} ${P}`,className:Io.svg,onMouseLeave:()=>k($=>({...$,visible:!1})),children:[i.map(($,E)=>{const z=_+u+E*(C+u)+C/2;return r.jsx("text",{x:z,y:12,className:Io.axisLabel,textAnchor:"middle",children:$},$)}),a.map(($,E)=>{const z=24+E*(M+u);return r.jsxs("g",{children:[r.jsx("text",{x:_-4,y:z+M/2+4,className:Io.axisLabel,textAnchor:"end",children:$}),i.map((B,Q)=>{const J=N.get(`${$}__${B}`),Z=(J==null?void 0:J.value)??0,te=s(Z),re=_+u+Q*(C+u);return r.jsx("rect",{x:re,y:z,width:C,height:M,rx:c,fill:te,style:{cursor:"pointer"},onMouseEnter:ce=>{if(!p)return;const ae=(J==null?void 0:J.label)??`${$} / ${B}: ${Math.round(Z*100)}%`;k({visible:!0,x:ce.clientX+12,y:ce.clientY-8,content:ae})},onMouseLeave:()=>k(ce=>({...ce,visible:!1}))},B)})]},$)})]})}),v.visible&&r.jsx("div",{className:Io.tooltip,style:{left:v.x,top:v.y},children:v.content})]})});_k.displayName="HeatMap";const Ck="_root_18572_6",jk="_gridWrap_18572_14",Sk="_grid_18572_14",Nk="_cell_18572_27",Rk="_legend_18572_33",Mk="_legendSquare_18572_43",Lk="_tooltip_18572_49",gr={root:Ck,gridWrap:jk,grid:Sk,cell:Nk,legend:Rk,legendSquare:Mk,tooltip:Lk},$k=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function Tk(t,a){if(t<=0)return 0;const i=t/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const Ik=g.forwardRef(({days:t,levelColors:a=$k,cellSize:i=14,cellGap:s=3,cellRadius:c=2,fillWidth:u=!1,showLegend:p=!0,maxCount:f,formatTooltip:m,ariaLabel:x,className:v,...k},w)=>{const[L,j]=g.useState({visible:!1,x:0,y:0,content:""}),_=f??Math.max(1,...t.map(C=>C.count)),M=[];for(let C=0;C<t.length;C+=7)M.push(t.slice(C,C+7));const I=u?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${M.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},R=u?"100%":i;return r.jsxs("div",{ref:w,className:ne(gr.root,v),...k,children:[r.jsx("div",{className:gr.gridWrap,children:r.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${_} on the busiest day`,className:gr.grid,style:I,onMouseLeave:()=>j(C=>({...C,visible:!1})),children:M.map((C,P)=>Array.from({length:7},(N,$)=>{const E=C[$];if(!E)return r.jsx("span",{className:gr.cell,style:{width:i,height:i,borderRadius:c,background:a[0]}},`${P}-${$}`);const z=Tk(E.count,_),B=m?m(E,z):`${E.label??E.date}: ${E.count} activation${E.count===1?"":"s"}`;return r.jsx("span",{className:gr.cell,style:{width:R,height:i,borderRadius:c,background:a[z]},onMouseMove:Q=>j({visible:!0,x:Q.clientX,y:Q.clientY,content:B}),onMouseLeave:()=>j(Q=>({...Q,visible:!1}))},`${P}-${$}`)}))})}),p&&r.jsxs("div",{className:gr.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(C=>r.jsx("span",{className:gr.legendSquare,style:{background:a[C],borderRadius:c}},C)),r.jsx("span",{children:"More"})]}),L.visible&&r.jsx("div",{className:gr.tooltip,style:{left:L.x,top:L.y},children:L.content})]})});Ik.displayName="ActivityHeatMap";const Ak="_root_14edh_5",Ek="_track_14edh_17",Pk="_segment_14edh_28",zk="_legend_14edh_49",Ok="_legendRow_14edh_58",Dk="_legendDot_14edh_68",Bk="_legendLabel_14edh_74",Fk="_legendValue_14edh_78",Wk="_tooltip_14edh_84",Hk="_tooltipLabel_14edh_100",qk="_tooltipValueRow_14edh_105",Uk="_tooltipDot_14edh_114",un={root:Ak,track:Ek,segment:Pk,legend:zk,legendRow:Ok,legendDot:Dk,legendLabel:Bk,legendValue:Fk,tooltip:Wk,tooltipLabel:Hk,tooltipValueRow:qk,tooltipDot:Uk},Vk=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],Ao={r:140,g:79,b:226},Jc={r:68,g:108,b:255};function g1(t){const a=Math.max(0,Math.min(100,t))/100,i=Math.round(Ao.r+(Jc.r-Ao.r)*a),s=Math.round(Ao.g+(Jc.g-Ao.g)*a),c=Math.round(Ao.b+(Jc.b-Ao.b)*a);return`rgb(${i}, ${s}, ${c})`}const Gk=g.forwardRef(({segments:t,colors:a=Vk,aiGradient:i=!1,height:s,showLegend:c=!1,flat:u=!1,ariaLabel:p,className:f,...m},x)=>{const[v,k]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),w=t.reduce((M,I)=>M+Math.max(0,I.value),0);let L=0;const j=t.map((M,I)=>{const R=Math.max(0,M.value),C=w>0?R/w*100:0,P=w>0?L/w*100:0;L+=R;const N=w>0?L/w*100:0,$=M.color??a[I%a.length],E=u?!0:M.emphasized??I===0;return{...M,pct:C,startPct:P,endPct:N,color:$,emphasized:E}}),_=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return r.jsxs("div",{ref:x,className:ne(un.root,f),...m,children:[r.jsx("div",{role:"img","aria-label":p??`Ratio bar: ${t.map(M=>`${M.label} ${M.value}`).join(", ")}`,className:un.track,style:_,onMouseLeave:()=>k(M=>({...M,visible:!1})),children:j.map(M=>{const I=i?`linear-gradient(to right, ${g1(M.startPct)}, ${g1(M.endPct)})`:M.color;return r.jsx("span",{className:un.segment,"data-emphasized":M.emphasized||void 0,"data-ai":i||void 0,style:{width:`${M.pct}%`,background:I,"--ratio-hover-bg":M.color},onMouseMove:R=>k({visible:!0,x:R.clientX,y:R.clientY,label:M.label,value:M.value,color:M.color})},M.label)})}),c&&r.jsx("ul",{className:un.legend,children:j.map(M=>r.jsxs("li",{className:un.legendRow,children:[r.jsx("span",{className:un.legendDot,style:{background:M.color}}),r.jsx("span",{className:un.legendLabel,children:M.label}),r.jsx("span",{className:un.legendValue,children:M.value.toLocaleString("en-US")})]},M.label))}),v.visible&&r.jsxs("div",{className:un.tooltip,style:{left:v.x,top:v.y},children:[r.jsx("span",{className:un.tooltipLabel,children:v.label}),r.jsxs("span",{className:un.tooltipValueRow,children:[r.jsx("span",{className:un.tooltipDot,style:{background:v.color}}),v.value.toLocaleString("en-US")]})]})]})});Gk.displayName="RatioBar";const Yk="_track_1wmly_6",Kk="_fill_1wmly_12",v1={track:Yk,fill:Kk},Zk=g.forwardRef(({value:t,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:c="var(--color-bg-primary)",stripeWidth:u=2,stripeGap:p=1,height:f=12,ariaLabel:m,className:x,style:v,...k},w)=>{const L=u+p,j=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${u}px,
      ${c} ${u}px,
      ${c} ${L}px
    )`,_=Math.max(0,Math.min(a,t)),M=a>0?_/a*100:0;return r.jsx("div",{ref:w,role:"progressbar","aria-label":m??`Progress: ${Math.round(M)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":_,className:ne(v1.track,x),style:{height:f,background:`${j}, ${s}`,...v},...k,children:r.jsx("div",{className:v1.fill,style:{width:`${M}%`,background:`${j}, ${i}`}})})});Zk.displayName="StripedBar";const Qk=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],Xk=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function y1(t,a="to right"){const i=t.map(({color:s,position:c})=>`${s} ${c}`).join(", ");return`linear-gradient(${a}, ${i})`}y1(Qk),y1(Xk);var Je="-ms-",Ga="-moz-",De="-webkit-",Em="comm",Vs="rule",Vd="decl",Jk="@import",e_="@namespace",Pm="@keyframes",t_="@layer",zm=Math.abs,Gd=String.fromCharCode,bd=Object.assign;function n_(t,a){return ft(t,0)^45?(((a<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function Om(t){return t.trim()}function Vn(t,a){return(t=a.exec(t))?t[0]:t}function Re(t,a,i){return t.replace(a,i)}function ks(t,a,i){return t.indexOf(a,i)}function ft(t,a){return t.charCodeAt(a)|0}function Jr(t,a,i){return t.slice(a,i)}function bn(t){return t.length}function Dm(t){return t.length}function Wa(t,a){return a.push(t),t}function r_(t,a){return t.map(a).join("")}function x1(t,a){return t.filter(function(i){return!Vn(i,a)})}var Gs=1,Ho=1,Bm=0,hn=0,ut=0,Zo="";function Ys(t,a,i,s,c,u,p,f){return{value:t,root:a,parent:i,type:s,props:c,children:u,line:Gs,column:Ho,length:p,return:"",siblings:f}}function vr(t,a){return bd(Ys("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},a)}function Eo(t){for(;t.root;)t=vr(t.root,{children:[t]});Wa(t,t.siblings)}function o_(){return ut}function a_(){return ut=hn>0?ft(Zo,--hn):0,Ho--,ut===10&&(Ho=1,Gs--),ut}function kn(){return ut=hn<Bm?ft(Zo,hn++):0,Ho++,ut===10&&(Ho=1,Gs++),ut}function xr(){return ft(Zo,hn)}function _s(){return hn}function Ks(t,a){return Jr(Zo,t,a)}function Za(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i_(t){return Gs=Ho=1,Bm=bn(Zo=t),hn=0,[]}function s_(t){return Zo="",t}function ed(t){return Om(Ks(hn-1,kd(t===91?t+2:t===40?t+1:t)))}function l_(t){for(;(ut=xr())&&ut<33;)kn();return Za(t)>2||Za(ut)>3?"":" "}function c_(t,a){for(;--a&&kn()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Ks(t,_s()+(a<6&&xr()==32&&kn()==32))}function kd(t){for(;kn();)switch(ut){case t:return hn;case 34:case 39:t!==34&&t!==39&&kd(ut);break;case 40:t===41&&kd(t);break;case 92:kn();break}return hn}function d_(t,a){for(;kn()&&t+ut!==57;)if(t+ut===84&&xr()===47)break;return"/*"+Ks(a,hn-1)+"*"+Gd(t===47?t:kn())}function u_(t){for(;!Za(xr());)kn();return Ks(t,hn)}function h_(t){return s_(Cs("",null,null,null,[""],t=i_(t),0,[0],t))}function Cs(t,a,i,s,c,u,p,f,m){for(var x=0,v=0,k=p,w=0,L=0,j=0,_=1,M=1,I=1,R=0,C="",P=c,N=u,$=s,E=C;M;)switch(j=R,R=kn()){case 40:if(j!=108&&ft(E,k-1)==58){ks(E+=Re(ed(R),"&","&\f"),"&\f",zm(x?f[x-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:E+=ed(R);break;case 9:case 10:case 13:case 32:E+=l_(j);break;case 92:E+=c_(_s()-1,7);continue;case 47:switch(xr()){case 42:case 47:Wa(p_(d_(kn(),_s()),a,i,m),m),(Za(j||1)==5||Za(xr()||1)==5)&&bn(E)&&Jr(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*_:f[x++]=bn(E)*I;case 125*_:case 59:case 0:switch(R){case 0:case 125:M=0;case 59+v:I==-1&&(E=Re(E,/\f/g,"")),L>0&&(bn(E)-k||_===0&&j===47)&&Wa(L>32?b1(E+";",s,i,k-1,m):b1(Re(E," ","")+";",s,i,k-2,m),m);break;case 59:E+=";";default:if(Wa($=w1(E,a,i,x,v,c,f,C,P=[],N=[],k,u),u),R===123)if(v===0)Cs(E,a,$,$,P,u,k,f,N);else{switch(w){case 99:if(ft(E,3)===110)break;case 108:if(ft(E,2)===97)break;default:v=0;case 100:case 109:case 115:}v?Cs(t,$,$,s&&Wa(w1(t,$,$,0,0,c,f,C,c,P=[],k,N),N),c,N,k,f,s?P:N):Cs(E,$,$,$,[""],N,0,f,N)}}x=v=L=0,_=I=1,C=E="",k=p;break;case 58:k=1+bn(E),L=j;default:if(_<1){if(R==123)--_;else if(R==125&&_++==0&&a_()==125)continue}switch(E+=Gd(R),R*_){case 38:I=v>0?1:(E+="\f",-1);break;case 44:f[x++]=(bn(E)-1)*I,I=1;break;case 64:xr()===45&&(E+=ed(kn())),w=xr(),v=k=bn(C=E+=u_(_s())),R++;break;case 45:j===45&&bn(E)==2&&(_=0)}}return u}function w1(t,a,i,s,c,u,p,f,m,x,v,k){for(var w=c-1,L=c===0?u:[""],j=Dm(L),_=0,M=0,I=0;_<s;++_)for(var R=0,C=Jr(t,w+1,w=zm(M=p[_])),P=t;R<j;++R)(P=Om(M>0?L[R]+" "+C:Re(C,/&\f/g,L[R])))&&(m[I++]=P);return Ys(t,a,i,c===0?Vs:f,m,x,v,k)}function p_(t,a,i,s){return Ys(t,a,i,Em,Gd(o_()),Jr(t,2,-2),0,s)}function b1(t,a,i,s,c){return Ys(t,a,i,Vd,Jr(t,0,s),Jr(t,s+1,-1),s,c)}function Fm(t,a,i){switch(n_(t,a)){case 5103:return De+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return De+t+t;case 4855:return De+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Ga+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return De+t+Ga+t+Je+t+t;case 5936:switch(ft(t,a+11)){case 114:return De+t+Je+Re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return De+t+Je+Re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return De+t+Je+Re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return De+t+Je+t+t;case 6165:return De+t+Je+"flex-"+t+t;case 5187:return De+t+Re(t,/(\w+).+(:[^]+)/,De+"box-$1$2"+Je+"flex-$1$2")+t;case 5443:return De+t+Je+"flex-item-"+Re(t,/flex-|-self/g,"")+(Vn(t,/flex-|baseline/)?"":Je+"grid-row-"+Re(t,/flex-|-self/g,""))+t;case 4675:return De+t+Je+"flex-line-pack"+Re(t,/align-content|flex-|-self/g,"")+t;case 5548:return De+t+Je+Re(t,"shrink","negative")+t;case 5292:return De+t+Je+Re(t,"basis","preferred-size")+t;case 6060:return De+"box-"+Re(t,"-grow","")+De+t+Je+Re(t,"grow","positive")+t;case 4554:return De+Re(t,/([^-])(transform)/g,"$1"+De+"$2")+t;case 6187:return Re(Re(Re(t,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),t,"")+t;case 5495:case 3959:return Re(t,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return Re(Re(t,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+Je+"flex-pack:$3"),/space-between/,"justify")+De+t+t;case 4200:if(!Vn(t,/flex-|baseline/))return Je+"grid-column-align"+Jr(t,a)+t;break;case 2592:case 3360:return Je+Re(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(s,c){return a=c,Vn(s.props,/grid-\w+-end/)})?~ks(t+(i=i[a].value),"span",0)?t:Je+Re(t,"-start","")+t+Je+"grid-row-span:"+(~ks(i,"span",0)?Vn(i,/\d+/):+Vn(i,/\d+/)-+Vn(t,/\d+/))+";":Je+Re(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(s){return Vn(s.props,/grid-\w+-start/)})?t:Je+Re(Re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Re(t,/(.+)-inline(.+)/,De+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bn(t)-1-a>6)switch(ft(t,a+1)){case 109:if(ft(t,a+4)!==45)break;case 102:return Re(t,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+Ga+(ft(t,a+3)==108?"$3":"$2-$3"))+t;case 115:return~ks(t,"stretch",0)?Fm(Re(t,"stretch","fill-available"),a,i)+t:t}break;case 5152:case 5920:return Re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,c,u,p,f,m,x){return Je+c+":"+u+x+(p?Je+c+"-span:"+(f?m:+m-+u)+x:"")+t});case 4949:if(ft(t,a+6)===121)return Re(t,":",":"+De)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return Re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+(ft(t,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+Je+"$2box$3")+t;case 100:return Re(t,":",":"+Je)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Re(t,"scroll-","scroll-snap-")+t}return t}function $s(t,a){for(var i="",s=0;s<t.length;s++)i+=a(t[s],s,t,a)||"";return i}function f_(t,a,i,s){switch(t.type){case t_:if(t.children.length)break;case Jk:case e_:case Vd:return t.return=t.return||t.value;case Em:return"";case Pm:return t.return=t.value+"{"+$s(t.children,s)+"}";case Vs:if(!bn(t.value=t.props.join(",")))return""}return bn(i=$s(t.children,s))?t.return=t.value+"{"+i+"}":""}function m_(t){var a=Dm(t);return function(i,s,c,u){for(var p="",f=0;f<a;f++)p+=t[f](i,s,c,u)||"";return p}}function g_(t){return function(a){a.root||(a=a.return)&&t(a)}}function v_(t,a,i,s){if(t.length>-1&&!t.return)switch(t.type){case Vd:t.return=Fm(t.value,t.length,i);return;case Pm:return $s([vr(t,{value:Re(t.value,"@","@"+De)})],s);case Vs:if(t.length)return r_(i=t.props,function(c){switch(Vn(c,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Eo(vr(t,{props:[Re(c,/:(read-\w+)/,":"+Ga+"$1")]})),Eo(vr(t,{props:[c]})),bd(t,{props:x1(i,s)});break;case"::placeholder":Eo(vr(t,{props:[Re(c,/:(plac\w+)/,":"+De+"input-$1")]})),Eo(vr(t,{props:[Re(c,/:(plac\w+)/,":"+Ga+"$1")]})),Eo(vr(t,{props:[Re(c,/:(plac\w+)/,Je+"input-$1")]})),Eo(vr(t,{props:[c]})),bd(t,{props:x1(i,s)});break}return""})}}var Do={},td,nd;const qo=typeof process<"u"&&Do!==void 0&&(Do.REACT_APP_SC_ATTR||Do.SC_ATTR)||"data-styled",Wm="active",Hm="data-styled-version",Zs="6.4.2",Yd=`/*!sc*/
`,Ya=typeof window<"u"&&typeof document<"u";function k1(t){if(typeof process<"u"&&Do!==void 0){const a=Do[t];if(a!==void 0&&a!=="")return a!=="false"}}const y_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(nd=(td=k1("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&td!==void 0?td:k1("SC_DISABLE_SPEEDY"))!==null&&nd!==void 0?nd:typeof process<"u"&&Do!==void 0&&!1),qm="sc-keyframes-";function oi(t,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let js=new Map,Ts=new Map,Ss=1;const Ha=t=>{if(js.has(t))return js.get(t);for(;Ts.has(Ss);)Ss++;const a=Ss++;return js.set(t,a),Ts.set(a,t),a},x_=t=>Ts.get(t),w_=(t,a)=>{Ss=a+1,js.set(t,a),Ts.set(a,t)},Kd=Object.freeze([]),Uo=Object.freeze({});function b_(t,a,i=Uo){return t.theme!==i.theme&&t.theme||a||i.theme}const k_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,__=/(^-|-$)/g;function Um(t){return t.replace(k_,"-").replace(__,"")}const C_=/(a)(d)/gi,_1=t=>String.fromCharCode(t+(t>25?39:97));function Zd(t){let a,i="";for(a=Math.abs(t);a>52;a=a/52|0)i=_1(a%52)+i;return(_1(a%52)+i).replace(C_,"$1-$2")}const _d=5381,Yr=(t,a)=>{let i=a.length;for(;i;)t=33*t^a.charCodeAt(--i);return t},Vm=t=>Yr(_d,t);function Gm(t){return Zd(Vm(t)>>>0)}function j_(t){return t.displayName||t.name||"Component"}function Cd(t){return typeof t=="string"&&!0}function S_(t){return Cd(t)?`styled.${t}`:`Styled(${j_(t)})`}const Ym=Symbol.for("react.memo"),N_=Symbol.for("react.forward_ref"),R_={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},M_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Km={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},L_={[N_]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ym]:Km};function C1(t){return("type"in(a=t)&&a.type.$$typeof)===Ym?Km:"$$typeof"in t?L_[t.$$typeof]:R_;var a}const $_=Object.defineProperty,T_=Object.getOwnPropertyNames,I_=Object.getOwnPropertySymbols,A_=Object.getOwnPropertyDescriptor,E_=Object.getPrototypeOf,P_=Object.prototype;function Zm(t,a,i){if(typeof a!="string"){const s=E_(a);s&&s!==P_&&Zm(t,s,i);const c=T_(a).concat(I_(a)),u=C1(t),p=C1(a);for(let f=0;f<c.length;++f){const m=c[f];if(!(m in M_||i&&i[m]||p&&m in p||u&&m in u)){const x=A_(a,m);try{$_(t,m,x)}catch{}}}}return t}function Qs(t){return typeof t=="function"}const z_=Symbol.for("react.forward_ref");function Qm(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===z_&&"styledComponentId"in t}function qa(t,a){return t&&a?t+" "+a:t||a||""}function jd(t,a){return t.join("")}function Qa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Sd(t,a,i=!1){if(!i&&!Qa(t)&&!Array.isArray(t))return a;if(Array.isArray(a))for(let s=0;s<a.length;s++)t[s]=Sd(t[s],a[s]);else if(Qa(a))for(const s in a)t[s]=Sd(t[s],a[s]);return t}function Qd(t,a){Object.defineProperty(t,"toString",{value:a})}const O_=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let a=this._cIndex;if(t>this._cGroup)for(let i=this._cGroup;i<t;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=t;i--)a-=this.groupSizes[i];return this._cGroup=t,this._cIndex=a,a}insertRules(t,a){if(t>=this.groupSizes.length){const c=this.groupSizes,u=c.length;let p=u;for(;t>=p;)if(p<<=1,p<0)throw oi(16,`${t}`);this.groupSizes=new Uint32Array(p),this.groupSizes.set(c),this.length=p;for(let f=u;f<p;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(t+1),s=0;for(let c=0,u=a.length;c<u;c++)this.tag.insertRule(i,a[c])&&(this.groupSizes[t]++,i++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)}clearGroup(t){if(t<this.length){const a=this.groupSizes[t],i=this.indexOfGroup(t),s=i+a;this.groupSizes[t]=0;for(let c=i;c<s;c++)this.tag.deleteRule(i);a>0&&this._cGroup>t&&(this._cIndex-=a)}}getGroup(t){let a="";if(t>=this.length||this.groupSizes[t]===0)return a;const i=this.groupSizes[t],s=this.indexOfGroup(t),c=s+i;for(let u=s;u<c;u++)a+=this.tag.getRule(u)+Yd;return a}},D_=`style[${qo}][${Hm}="${Zs}"]`,B_=new RegExp(`^${qo}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),j1=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,Nd=t=>{if(!t)return document;if(j1(t))return t;if("getRootNode"in t){const a=t.getRootNode();if(j1(a))return a}return document},F_=(t,a,i)=>{const s=i.split(",");let c;for(let u=0,p=s.length;u<p;u++)(c=s[u])&&t.registerName(a,c)},W_=(t,a)=>{var i;const s=((i=a.textContent)!==null&&i!==void 0?i:"").split(Yd),c=[];for(let u=0,p=s.length;u<p;u++){const f=s[u].trim();if(!f)continue;const m=f.match(B_);if(m){const x=0|parseInt(m[1],10),v=m[2];x!==0&&(w_(v,x),F_(t,v,m[3]),t.getTag().insertRules(x,c)),c.length=0}else c.push(f)}},rd=t=>{const a=Nd(t.options.target).querySelectorAll(D_);for(let i=0,s=a.length;i<s;i++){const c=a[i];c&&c.getAttribute(qo)!==Wm&&(W_(t,c),c.parentNode&&c.parentNode.removeChild(c))}};let Ba=!1;function H_(){if(Ba!==!1)return Ba;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return Ba=t.nonce||t.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Ba=a.getAttribute("content")||void 0}return Ba=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Xm=(t,a)=>{const i=document.head,s=t||i,c=document.createElement("style"),u=(m=>{const x=Array.from(m.querySelectorAll(`style[${qo}]`));return x[x.length-1]})(s),p=u!==void 0?u.nextSibling:null;c.setAttribute(qo,Wm),c.setAttribute(Hm,Zs);const f=a||H_();return f&&c.setAttribute("nonce",f),s.insertBefore(c,p),c},q_=class{constructor(t,a){this.element=Xm(t,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const c=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let u=0,p=c.length;u<p;u++){const f=c[u];if(f.ownerNode===i)return f}throw oi(17)})(this.element),this.length=0}insertRule(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""}},U_=class{constructor(t,a){this.element=Xm(t,a),this.nodes=this.element.childNodes,this.length=0}insertRule(t,a){if(t<=this.length&&t>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let S1=Ya;const V_={isServer:!Ya,useCSSOMInjection:!y_};class Xs{static registerId(a){return Ha(a)}constructor(a=Uo,i={},s){this.options=Object.assign(Object.assign({},V_),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!a.isServer,!this.server&&Ya&&S1&&(S1=!1,rd(this)),Qd(this,()=>(c=>{const u=c.getTag(),{length:p}=u;let f="";for(let m=0;m<p;m++){const x=x_(m);if(x===void 0)continue;const v=c.names.get(x);if(v===void 0||!v.size)continue;const k=u.getGroup(m);if(k.length===0)continue;const w=qo+".g"+m+'[id="'+x+'"]';let L="";for(const j of v)j.length>0&&(L+=j+",");f+=k+w+'{content:"'+L+'"}'+Yd}return f})(this))}rehydrate(){!this.server&&Ya&&rd(this)}reconstructWithOptions(a,i=!0){const s=new Xs(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&Ya&&a.target!==this.options.target&&Nd(this.options.target)!==Nd(a.target)&&rd(s),s}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:s,nonce:c})=>i?new q_(s,c):new U_(s,c))(this.options),new O_(a)));var a}hasNameForId(a,i){var s,c;return(c=(s=this.names.get(a))===null||s===void 0?void 0:s.has(i))!==null&&c!==void 0&&c}registerName(a,i){Ha(a),a.startsWith(qm)&&this.keyframeIds.add(a);const s=this.names.get(a);s?s.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,s){this.registerName(a,i),this.getTag().insertRules(Ha(a),s)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(Ha(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const Jm=new WeakSet,G_={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Y_(t,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in G_||t.startsWith("--")?String(a).trim():a+"px"}const qr=47;function N1(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let a="";for(let i=0;i<t.length;i++){const s=t.charCodeAt(i);a+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):t[i]}return a.startsWith("ms-")?"-"+a:a}const e0=Symbol.for("sc-keyframes");function K_(t){return typeof t=="object"&&t!==null&&e0 in t}function t0(t){return Qs(t)&&!(t.prototype&&t.prototype.isReactComponent)}const n0=t=>t==null||t===!1||t==="",Z_=Symbol.for("react.client.reference");function R1(t){return t.$$typeof===Z_}function r0(t,a){for(const i in t){const s=t[i];t.hasOwnProperty(i)&&!n0(s)&&(Array.isArray(s)&&Jm.has(s)||Qs(s)?a.push(N1(i)+":",s,";"):Qa(s)?(a.push(i+" {"),r0(s,a),a.push("}")):a.push(N1(i)+": "+Y_(i,s)+";"))}}function Kr(t,a,i,s,c=[]){if(n0(t))return c;const u=typeof t;if(u==="string")return c.push(t),c;if(u==="function"){if(R1(t))return c;if(t0(t)&&a){const p=t(a);return Kr(p,a,i,s,c)}return c.push(t),c}if(Array.isArray(t)){for(let p=0;p<t.length;p++)Kr(t[p],a,i,s,c);return c}return Qm(t)?(c.push(`.${t.styledComponentId}`),c):K_(t)?(i?(t.inject(i,s),c.push(t.getName(s))):c.push(t),c):R1(t)?c:Qa(t)?t.toString!==Object.prototype.toString?(c.push(t.toString()),c):(r0(t,c),c):(c.push(t.toString()),c)}const Q_=Vm(Zs);class X_{constructor(a,i,s){this.rules=a,this.componentId=i,this.baseHash=Yr(Q_,i),this.baseStyle=s,Xs.registerId(i)}generateAndInjectStyles(a,i,s){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,s):"";{let u="";for(let p=0;p<this.rules.length;p++){const f=this.rules[p];if(typeof f=="string")u+=f;else if(f)if(t0(f)){const m=f(a);typeof m=="string"?u+=m:m!=null&&m!==!1&&(u+=jd(Kr(m,a,i,s)))}else u+=jd(Kr(f,a,i,s))}if(u){this.dynamicNameCache||(this.dynamicNameCache=new Map);const p=s.hash?s.hash+u:u;let f=this.dynamicNameCache.get(p);if(!f){if(f=Zd(Yr(Yr(this.baseHash,s.hash),u)>>>0),this.dynamicNameCache.size>=200){const m=this.dynamicNameCache.keys().next().value;m!==void 0&&this.dynamicNameCache.delete(m)}this.dynamicNameCache.set(p,f)}if(!i.hasNameForId(this.componentId,f)){const m=s(u,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,m)}c=qa(c,f)}}return c}}const J_=/&/g;function o0(t,a){let i=0;for(;--a>=0&&t.charCodeAt(a)===92;)i++;return!(1&~i)}function od(t){const a=t.length;let i="",s=0,c=0,u=0,p=!1,f=!1;for(let m=0;m<a;m++){const x=t.charCodeAt(m);if(u!==0||p||x!==qr||t.charCodeAt(m+1)!==42)if(p)x===42&&t.charCodeAt(m+1)===qr&&(p=!1,m++);else if(x!==34&&x!==39||o0(t,m)){if(u===0)if(x===123)c++;else if(x===125){if(c--,c<0){f=!0;let v=m+1;for(;v<a;){const k=t.charCodeAt(v);if(k===59||k===10)break;v++}v<a&&t.charCodeAt(v)===59&&v++,c=0,m=v-1,s=v;continue}c===0&&(i+=t.substring(s,m+1),s=m+1)}else x===59&&c===0&&(i+=t.substring(s,m+1),s=m+1)}else u===0?u=x:u===x&&(u=0);else p=!0,m++}return f||c!==0||u!==0?(s<a&&c===0&&u===0&&(i+=t.substring(s)),i):t}function a0(t,a){const i=a+" ",s=","+i;for(let c=0;c<t.length;c++){const u=t[c];if(u.type==="rule"){u.value=(i+u.value).replaceAll(",",s);const p=u.props,f=[];for(let m=0;m<p.length;m++)f[m]=i+p[m];u.props=f}Array.isArray(u.children)&&u.type!=="@keyframes"&&a0(u.children,a)}return t}function eC({options:t=Uo,plugins:a=Kd}=Uo){let i,s,c;const u=(w,L,j)=>j.startsWith(s)&&j.endsWith(s)&&j.replaceAll(s,"").length>0?`.${i}`:w,p=a.slice();p.push(w=>{w.type===Vs&&w.value.includes("&")&&(c||(c=new RegExp(`\\${s}\\b`,"g")),w.props[0]=w.props[0].replace(J_,s).replace(c,u))}),t.prefix&&p.push(v_),p.push(f_);let f=[];const m=m_(p.concat(g_(w=>f.push(w)))),x=(w,L="",j="",_="&")=>{i=_,s=L,c=void 0;const M=(function(R){const C=R.indexOf("//")!==-1,P=R.indexOf("}")!==-1;if(!C&&!P)return R;if(!C)return od(R);const N=R.length;let $="",E=0,z=0,B=0,Q=0,J=0,Z=!1;for(;z<N;){const te=R.charCodeAt(z);if(te!==34&&te!==39||o0(R,z))if(B===0)if(te===qr&&z+1<N&&R.charCodeAt(z+1)===42){for(z+=2;z+1<N&&(R.charCodeAt(z)!==42||R.charCodeAt(z+1)!==qr);)z++;z+=2}else if(te!==40)if(te!==41)if(Q>0)z++;else if(te===42&&z+1<N&&R.charCodeAt(z+1)===qr)$+=R.substring(E,z),z+=2,E=z,Z=!0;else if(te===qr&&z+1<N&&R.charCodeAt(z+1)===qr){for($+=R.substring(E,z);z<N&&R.charCodeAt(z)!==10;)z++;E=z,Z=!0}else te===123?J++:te===125&&J--,z++;else Q>0&&Q--,z++;else Q++,z++;else z++;else B===0?B=te:B===te&&(B=0),z++}return Z?(E<N&&($+=R.substring(E)),J===0?$:od($)):J===0?R:od(R)})(w);let I=h_(j||L?j+" "+L+" { "+M+" }":M);return t.namespace&&(I=a0(I,t.namespace)),f=[],$s(I,m),f},v=t;let k=_d;for(let w=0;w<a.length;w++)a[w].name||oi(15),k=Yr(k,a[w].name);return v!=null&&v.namespace&&(k=Yr(k,v.namespace)),v!=null&&v.prefix&&(k=Yr(k,"p")),x.hash=k!==_d?k.toString():"",x}const tC=new Xs,Rd=eC(),i0=wr.createContext({shouldForwardProp:void 0,styleSheet:tC,stylis:Rd,stylisPlugins:void 0});i0.Consumer;function nC(){return wr.useContext(i0)}const s0=wr.createContext(void 0);s0.Consumer;const M1=Object.prototype.hasOwnProperty,ad={};function rC(t,a){const i=typeof t!="string"?"sc":Um(t);ad[i]=(ad[i]||0)+1;const s=i+"-"+Gm(Zs+i+ad[i]);return a?a+"-"+s:s}function oC(t,a,i){const s=Qm(t),c=t,u=!Cd(t),{attrs:p=Kd,componentId:f=rC(a.displayName,a.parentComponentId),displayName:m=S_(t)}=a,x=a.displayName&&a.componentId?Um(a.displayName)+"-"+a.componentId:a.componentId||f,v=s&&c.attrs?c.attrs.concat(p).filter(Boolean):p;let{shouldForwardProp:k}=a;if(s&&c.shouldForwardProp){const _=c.shouldForwardProp;if(a.shouldForwardProp){const M=a.shouldForwardProp;k=(I,R)=>_(I,R)&&M(I,R)}else k=_}const w=new X_(i,x,s?c.componentStyle:void 0);function L(_,M){return(function(I,R,C){const{attrs:P,componentStyle:N,defaultProps:$,foldedComponentIds:E,styledComponentId:z,target:B}=I,Q=wr.useContext(s0),J=nC(),Z=I.shouldForwardProp||J.shouldForwardProp,te=b_(R,Q,$)||Uo;let re,ce;{const K=wr.useRef(null),q=K.current;if(q!==null&&q[1]===te&&q[2]===J.styleSheet&&q[3]===J.stylis&&q[7]===N&&(function(T,S,H){const Y=T,oe=S;let he=0;for(const ee in oe)if(M1.call(oe,ee)&&(he++,Y[ee]!==oe[ee]))return!1;return he===H})(q[0],R,q[4]))re=q[5],ce=q[6];else{re=(function(S,H,Y){const oe=Object.assign(Object.assign({},H),{className:void 0,theme:Y}),he=S.length>1;for(let ee=0;ee<S.length;ee++){const W=S[ee],de=Qs(W)?W(he?Object.assign({},oe):oe):W;for(const ve in de)ve==="className"?oe.className=qa(oe.className,de[ve]):ve==="style"?oe.style=Object.assign(Object.assign({},oe.style),de[ve]):ve in H&&H[ve]===void 0||(oe[ve]=de[ve])}return"className"in H&&typeof H.className=="string"&&(oe.className=qa(oe.className,H.className)),oe})(P,R,te),ce=(function(S,H,Y,oe){return S.generateAndInjectStyles(H,Y,oe)})(N,re,J.styleSheet,J.stylis);let T=0;for(const S in R)M1.call(R,S)&&T++;K.current=[R,te,J.styleSheet,J.stylis,T,re,ce,N]}}const ae=re.as||B,G=(function(K,q,T,S){const H={};for(const Y in K)K[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&K.theme===T||(Y==="forwardedAs"?H.as=K.forwardedAs:S&&!S(Y,q)||(H[Y]=K[Y]));return H})(re,ae,te,Z);let F=qa(E,z);return ce&&(F+=" "+ce),re.className&&(F+=" "+re.className),G[Cd(ae)&&ae.includes("-")?"class":"className"]=F,C&&(G.ref=C),g.createElement(ae,G)})(j,_,M)}L.displayName=m;let j=wr.forwardRef(L);return j.attrs=v,j.componentStyle=w,j.displayName=m,j.shouldForwardProp=k,j.foldedComponentIds=s?qa(c.foldedComponentIds,c.styledComponentId):"",j.styledComponentId=x,j.target=s?c.target:t,Object.defineProperty(j,"defaultProps",{get(){return this._foldedDefaultProps},set(_){this._foldedDefaultProps=s?(function(M,...I){for(const R of I)Sd(M,R,!0);return M})({},c.defaultProps,_):_}}),Qd(j,()=>`.${j.styledComponentId}`),u&&Zm(j,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}var aC=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function L1(t,a){const i=[t[0]];for(let s=0,c=a.length;s<c;s+=1)i.push(a[s],t[s+1]);return i}const $1=t=>(Jm.add(t),t);function mt(t,...a){if(Qs(t)||Qa(t))return $1(Kr(L1(Kd,[t,...a])));const i=t;return a.length===0&&i.length===1&&typeof i[0]=="string"?Kr(i):$1(Kr(L1(i,a)))}function Md(t,a,i=Uo){if(!a)throw oi(1,a);const s=(c,...u)=>t(a,i,mt(c,...u));return s.attrs=c=>Md(t,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,c).filter(Boolean)})),s.withConfig=c=>Md(t,a,Object.assign(Object.assign({},i),c)),s}const l0=t=>Md(oC,t),b=l0;aC.forEach(t=>{b[t]=l0(t)});var c0;class iC{constructor(a,i){this[c0]=!0,this.inject=(s,c=Rd)=>{const u=this.getName(c);if(!s.hasNameForId(this.id,u)){const p=c(this.rules,u,"@keyframes");s.insertRules(this.id,u,p)}},this.name=a,this.id=qm+a,this.rules=i,Ha(this.id),Qd(this,()=>{throw oi(12,String(this.name))})}getName(a=Rd){return a.hash?this.name+Zd(+a.hash>>>0):this.name}}function Be(t,...a){const i=jd(mt(t,...a)),s=Gm(i);return new iC(s,i)}c0=e0;const sC=768,lC=`(max-width: ${sC-1}px)`;function Xd(t){const[a,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(t).matches);return g.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(t),c=u=>i(u.matches);return i(s.matches),s.addEventListener("change",c),()=>s.removeEventListener("change",c)},[t]),a}function cC(){return Xd(lC)}const dC="48px",uC="240px",T1="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",hC=b.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${t=>t.$isExpanded?uC:dC};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${t=>t.$isExpanded?mt`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:mt`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${t=>t.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,pC=b.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${t=>t.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${t=>t.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,fC=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,mC=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,gC=b.button`
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
`,vC=b.div`
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
`,yC=b.span`
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
`,I1=b.div`
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
`,id=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,xC="var(--gradient-ai)",d0=b.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${t=>t.$isActive&&!t.$isAi&&mt`
      background: var(--color-bg-primary, white);
      box-shadow: ${T1}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${t=>t.$isActive&&t.$isAi&&mt`
      background: ${xC};
      box-shadow: ${T1}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,u0=b.button`
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
`,h0=b.span`
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
`,p0=b.div`
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
`,wC=b.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,sd=b.hr`
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
`;const bC=b.button`
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
`,kC=b.div`
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
`,_C=b.span`
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
`;function CC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function jC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function SC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function NC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function RC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function MC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function LC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function $C({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function TC({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function IC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function eo({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function AC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function EC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function PC({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function A1({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function ld({item:t,isExpanded:a,showNewBadge:i,isAi:s}){const c=t.isActive??!1;return r.jsx(d0,{$isActive:c,$isAi:s,children:r.jsxs(u0,{$isActive:c,$isAiActive:c&&!!s,onClick:t.onClick,"aria-current":c?"page":void 0,title:a?void 0:t.label,children:[r.jsxs(p0,{children:[t.hasUnread&&r.jsx(wC,{}),c&&t.activeIcon?t.activeIcon:t.icon]}),a&&r.jsx(h0,{children:t.label}),a&&i&&r.jsx(no,{variant:"primary",children:"New"})]})})}function zC({items:t,toolItems:a=[],bottomItems:i=[],workspace:s,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:x}){const[v,k]=g.useState(!1);return r.jsx(hC,{$isExpanded:v,onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),"aria-label":"Primary navigation",children:r.jsxs(pC,{$isExpanded:v,children:[r.jsxs(fC,{children:[r.jsxs(gC,{$isExpanded:v,onClick:u,"aria-label":`Workspace: ${s.name}`,title:v?void 0:s.name,children:[r.jsx(vC,{children:s.logoUrl?r.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),v&&r.jsxs(r.Fragment,{children:[r.jsx(yC,{children:s.name}),r.jsx(I1,{children:r.jsx(A1,{})})]})]}),r.jsx(id,{children:t.map(w=>r.jsx(ld,{item:w,isExpanded:v,isAi:w.id===x},w.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(sd,{}),r.jsx(id,{children:a.map(w=>r.jsx(ld,{item:w,isExpanded:v,showNewBadge:w.id===m,isAi:w.id===x},w.id))})]})]}),r.jsxs(mC,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(sd,{}),r.jsx(id,{children:i.map(w=>r.jsx(ld,{item:w,isExpanded:v,isAi:w.id===x},w.id))})]}),r.jsx(sd,{}),r.jsx(d0,{$isActive:!1,children:r.jsxs(u0,{$isActive:!1,onClick:f,"aria-label":"Settings",title:v?void 0:"Settings",children:[r.jsx(p0,{children:r.jsx(PC,{})}),v&&r.jsx(h0,{children:"Settings"})]})}),r.jsxs(bC,{$isExpanded:v,onClick:p,"aria-label":`User: ${c.name}`,title:v?void 0:c.name,children:[r.jsx(kC,{$color:c.avatarColor,children:c.initials}),v&&r.jsxs(r.Fragment,{children:[r.jsx(_C,{children:c.name}),r.jsx(I1,{children:r.jsx(A1,{})})]})]})]})]})})}const OC=270,DC=b.nav`
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
`,BC=b.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,FC=b.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,WC=b.h2`
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
`,HC=b.div`
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
`,qC=b.button`
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
`,UC=b.div`
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
`,VC=b.button`
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
`;const GC=b.span`
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
`,YC=b.div`
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
`,KC=Be`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,ZC=b.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${KC} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,E1=b.button`
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
`,QC=b.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${t=>t.$outlined&&mt`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,XC=b.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,JC=b.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ej=b.div`
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
`,tj=b.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,nj=b.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,rj=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,f0=b.div`
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
`;function m0(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function oj(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Jd={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function aj({item:t}){return r.jsx(nn,{label:r.jsx("span",{style:{color:t.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:t.isActive?500:void 0,letterSpacing:"-0.084px"},children:t.label}),leadingSlot:r.jsx(f0,{children:t.icon??r.jsx(m0,{})}),selected:t.isActive,onClick:t.onClick,divider:!1,size:"md","aria-current":t.isActive?"page":void 0,style:Jd})}function ij({group:t}){const[a,i]=g.useState(t.defaultExpanded??!0),[s,c]=g.useState(!1),u=t.maxVisible,f=u!=null&&!s&&t.children.length>u?t.children.slice(0,u):t.children,m=t.children.length-f.length;return r.jsxs(QC,{$outlined:t.outlined,children:[r.jsxs(VC,{onClick:()=>i(x=>!x),"aria-expanded":a,children:[r.jsx(YC,{children:a?r.jsx(Kn,{size:16}):r.jsx(rn,{size:16})}),r.jsx(GC,{children:t.label}),t.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:t.trailingBadge})]}),a&&r.jsxs(ZC,{children:[f.map(x=>r.jsx(nn,{label:r.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:r.jsx(f0,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:Jd},x.id)),m>0&&r.jsxs(E1,{type:"button",onClick:()=>c(!0),children:["Show ",m," more"]}),u!=null&&s&&t.children.length>u&&r.jsx(E1,{type:"button",onClick:()=>c(!1),children:"Show less"})]})]})}function sj({heading:t,isVisible:a,menuEntries:i=[],menuHeader:s,pageEntries:c=[],showSearch:u=!0,searchValue:p="",onSearchChange:f,onFilterClick:m,headerSlot:x,bodyContent:v,width:k=OC,onWidthChange:w,minWidth:L=220,maxWidth:j=520}){const _=v!==void 0,M=g.useRef(null),[I,R]=g.useState(!1);return g.useEffect(()=>{if(!I||!w)return;const C=M.current;if(!C)return;const P=C.getBoundingClientRect().left,N=z=>{const B=Math.min(j,Math.max(L,z.clientX-P));w(B)},$=()=>R(!1);window.addEventListener("mousemove",N),window.addEventListener("mouseup",$);const E=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",$),document.body.style.userSelect=E,document.body.style.cursor=""}},[I,w,L,j]),r.jsxs(DC,{ref:M,$isVisible:a,$width:k,$isResizing:I,"aria-label":"Secondary navigation",children:[r.jsxs(BC,{children:[(t||x)&&r.jsxs(FC,{children:[r.jsx(WC,{children:t}),x]}),u&&!_&&r.jsxs(HC,{children:[r.jsx(wm,{size:"sm",placeholder:"Search...",value:p,onChange:C=>f==null?void 0:f(C.target.value)}),r.jsx(qC,{onClick:m,"aria-label":"Filter",children:r.jsx(oj,{})})]})]}),_?v:r.jsxs(UC,{children:[s,i.map(C=>C.type==="single"?r.jsx(aj,{item:C.item},C.item.id):C.type==="group"?r.jsx(ij,{group:C.group},C.group.id):C.type==="divider"?r.jsx(nj,{},C.id):r.jsx(XC,{children:C.label.label},C.label.id))]}),c.length>0&&r.jsxs(JC,{children:[r.jsx(tj,{}),c.map(C=>r.jsx(nn,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:C.label}),leadingSlot:r.jsx(rj,{children:C.icon??r.jsx(m0,{})}),onClick:C.onClick,selected:C.isActive??!1,divider:!1,size:"md","aria-current":C.isActive?"page":void 0,style:Jd},C.id))]}),w&&a&&r.jsx(ej,{$isResizing:I,onMouseDown:C=>{C.preventDefault(),R(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const lj=b.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:t})=>t?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,cj=b.div`
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
`,g0=b.div`
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
`,dj=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,uj=b.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function hj(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function P1(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function z1(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function pj(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function fj({heading:t,actions:a=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:c=!1,onActivityClick:u,onPonderClick:p,onDotsClick:f}){const m=a.filter(k=>k.variant==="secondary"),x=a.filter(k=>k.variant==="primary"),v=Xd("(prefers-color-scheme: dark)");return r.jsxs(lj,{$noBorder:c,children:[r.jsx(cj,{children:typeof t=="string"?r.jsx(g0,{children:t}):t}),r.jsxs(dj,{children:[r.jsxs(uj,{children:[r.jsx(Ie,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:r.jsx(hj,{})}),m.map(k=>r.jsx(Ie,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(z1,{}),trailingArtwork:r.jsx(P1,{}),onClick:k.onClick,children:k.label},k.id)),x.map(k=>r.jsx(Ie,{variant:"primary",size:"sm",leadingArtwork:r.jsx(z1,{}),trailingArtwork:r.jsx(P1,{}),onClick:k.onClick,children:k.label},k.id))]}),i&&r.jsx(Ie,{variant:"ghost",size:"sm",iconOnly:!0,onClick:u,"aria-label":"Activity",title:"Activity",children:r.jsx(pj,{})}),s&&r.jsx(Ef,{dark:v,onClick:p,"aria-label":"Ponder AI"})]})]})}const mj=b.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,gj=b.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,vj=b.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,yj=b.main`
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
`,O1="tb:secondary-nav-width",D1=270,B1=220,F1=520;function xj({items:t,toolItems:a,bottomItems:i,workspace:s,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:x,secNavHeading:v,menuEntries:k,menuHeader:w,pageEntries:L,showSearch:j,searchValue:_,onSearchChange:M,onFilterClick:I,headerSlot:R,bodyContent:C,heading:P,actions:N,showActivityButton:$,showPonderButton:E,noBorder:z,onActivityClick:B,onPonderClick:Q,onDotsClick:J,children:Z,showSecondaryNav:te=!0,showTopNav:re=!0}){const[ce,ae]=g.useState(()=>{if(typeof window>"u")return D1;const G=window.localStorage.getItem(O1),F=G?parseInt(G,10):NaN;return Number.isFinite(F)?Math.min(F1,Math.max(B1,F)):D1});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(O1,String(ce))},[ce]),r.jsxs(mj,{children:[r.jsx(zC,{items:t,toolItems:a,bottomItems:i,workspace:s,user:c,onWorkspaceClick:u,onUserClick:p,onSettingsClick:f,newItemId:m,aiItemId:x}),r.jsxs(gj,{children:[te&&r.jsx(sj,{heading:v,menuEntries:k,menuHeader:w,pageEntries:L,isVisible:!0,showSearch:j,searchValue:_,onSearchChange:M,onFilterClick:I,headerSlot:R,bodyContent:C,width:ce,onWidthChange:ae,minWidth:B1,maxWidth:F1}),r.jsxs(vj,{children:[re&&r.jsx(fj,{heading:P,actions:N,showActivityButton:$,showPonderButton:E,noBorder:z,onActivityClick:B,onPonderClick:Q,onDotsClick:J}),r.jsx(yj,{children:Z})]})]})]})}function wj({deadZonePx:t=8,topThresholdPx:a=20,target:i}={}){const[s,c]=g.useState(null),u=g.useRef(0);return g.useEffect(()=>{var x;const p=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;u.current=p();const f=()=>{const v=p(),k=v-u.current;Math.abs(k)<t||(k>0&&v>a?c("down"):k<0&&c("up"),u.current=v)},m=i??(typeof window<"u"?window:{});return(x=m.addEventListener)==null||x.call(m,"scroll",f,{passive:!0}),()=>{var v;(v=m.removeEventListener)==null||v.call(m,"scroll",f)}},[t,a,i]),s}const bj=b.button`
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
`,kj=b.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,_j=b.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function cd({label:t,isOpen:a,onClick:i,ariaLabel:s}){return r.jsxs(bj,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":s,children:[r.jsx(kj,{children:t}),r.jsx(_j,{children:r.jsx(Kn,{size:14})})]})}const Cj=b.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${t=>t.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,jj=b.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,W1=b.button`
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
`,Sj=b.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,H1=b.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,Nj=b.button`
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
`;function Rj({size:t=18}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const Mj=g.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:s,openOverlay:c,user:u,hidden:p,onHamburgerClick:f,onPrimaryClick:m,onSecondaryClick:x,onTertiaryClick:v,onSearchClick:k,onUserClick:w},L){return r.jsx(Cj,{ref:L,$hidden:p,children:r.jsxs(jj,{children:[r.jsx(W1,{onClick:f,"aria-label":"Open navigation",children:r.jsx(Rj,{size:18})}),r.jsxs(Sj,{children:[r.jsx(cd,{label:a,isOpen:c==="primary",onClick:m,ariaLabel:"Choose a module"}),i&&r.jsxs(r.Fragment,{children:[r.jsx(H1,{"aria-hidden":"true",children:"›"}),r.jsx(cd,{label:i,isOpen:c==="secondary",onClick:x,ariaLabel:"Choose a section"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx(H1,{"aria-hidden":"true",children:"›"}),r.jsx(cd,{label:s,isOpen:c==="persona",onClick:v??(()=>{}),ariaLabel:"Choose a persona"})]})]}),r.jsx(W1,{onClick:k,"aria-label":"Search",children:r.jsx(Wd,{size:18})}),r.jsx(Nj,{onClick:w,$color:u.avatarColor,"aria-label":`User: ${u.name}`,children:u.initials})]})})}),Lj=Be`
  from { opacity: 0; }
  to { opacity: 1; }
`,$j=b.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${Lj} 160ms ease-out;
`;function Tj({onDismiss:t}){return g.useEffect(()=>{const a=s=>{s.key==="Escape"&&t()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[t]),r.jsx($j,{onClick:t,"aria-hidden":"true"})}const Ij=Be`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,Aj=b.div`
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
  animation: ${Ij} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,Ej=b.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,Pj=b.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,zj=b.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Oj=b.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function eu({title:t,children:a,ariaLabel:i}){return r.jsxs(Aj,{role:"dialog","aria-modal":"true","aria-label":i??t,children:[r.jsx(Ej,{children:r.jsx(Pj,{"aria-hidden":"true"})}),t&&r.jsx(zj,{children:t}),r.jsx(Oj,{children:a})]})}const Js=b.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,Xa=b.div`
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
`,Bo=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,Qr=b.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Xr=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function Dj({activeId:t,groups:a,onSelect:i}){return r.jsx(eu,{title:"Modules",ariaLabel:"Choose a module",children:r.jsx(Js,{children:a.map((s,c)=>r.jsxs("div",{children:[c>0&&r.jsx(Xa,{children:s.label}),c===0&&r.jsx(Xa,{children:s.label}),s.items.map(u=>{const p=u.id===t;return r.jsxs(Zr,{$active:p,onClick:()=>i(u.id),"aria-pressed":p,children:[r.jsx(Bo,{children:u.icon}),r.jsx(Qr,{children:u.label}),p&&r.jsx(Xr,{"aria-hidden":"true",children:r.jsx(Ot,{size:16})})]},u.id)})]},s.id))})})}function Bj({moduleLabel:t,entries:a,onSelect:i}){return r.jsx(eu,{title:t,ariaLabel:`${t} sections`,children:r.jsx(Js,{children:a.map(s=>{if(s.type==="single"){const u=s.item;return r.jsxs(Zr,{$active:u.isActive,onClick:()=>{var p;(p=u.onClick)==null||p.call(u),i()},"aria-pressed":!!u.isActive,children:[r.jsx(Bo,{children:u.icon}),r.jsx(Qr,{children:u.label}),u.isActive&&r.jsx(Xr,{"aria-hidden":"true",children:r.jsx(Ot,{size:16})})]},u.id)}if(s.type!=="group")return null;const c=s.group;return r.jsxs("div",{children:[r.jsx(Xa,{children:c.label}),c.children.map(u=>r.jsxs(Zr,{$active:u.isActive,$indent:!0,onClick:()=>{var p;(p=u.onClick)==null||p.call(u),i()},"aria-pressed":!!u.isActive,children:[r.jsx(Bo,{children:u.icon}),r.jsx(Qr,{children:u.label}),u.isActive&&r.jsx(Xr,{"aria-hidden":"true",children:r.jsx(Ot,{size:16})})]},u.id))]},c.id)})})})}const Fj=b.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,Wj=b.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Hj=b.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function qj({personas:t,activeId:a,onSelect:i}){return r.jsx(eu,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(Js,{children:t.map(s=>{const c=s.id===a;return r.jsxs(Zr,{$active:c,onClick:()=>i(s.id),"aria-pressed":c,children:[r.jsx(Qr,{as:"span",children:r.jsxs(Fj,{children:[r.jsx(Wj,{children:s.name}),r.jsx(Hj,{children:s.role})]})}),c&&r.jsx(Xr,{"aria-hidden":"true",children:r.jsx(Ot,{size:16})})]},s.id)})})})}const Uj=Be`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,Vj=b.aside`
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
  animation: ${Uj} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,Gj=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,Yj=b.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,Kj=b.button`
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
`,Zj=b.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,Qj=60;function Xj({title:t,onDismiss:a,children:i}){const s=g.useRef(null),c=g.useRef(null);return g.useEffect(()=>{const u=s.current;if(!u)return;const p=m=>{const x=m.touches[0];c.current={x:x.clientX,y:x.clientY}},f=m=>{if(!c.current)return;const x=m.changedTouches[0],v=x.clientX-c.current.x,k=x.clientY-c.current.y;c.current=null,v<-60&&Math.abs(k)<Qj&&a()};return u.addEventListener("touchstart",p,{passive:!0}),u.addEventListener("touchend",f),()=>{u.removeEventListener("touchstart",p),u.removeEventListener("touchend",f)}},[a]),r.jsxs(Vj,{ref:s,role:"dialog","aria-modal":"true","aria-label":t??"Navigation",children:[r.jsxs(Gj,{children:[r.jsx(Yj,{children:t??"Navigation"}),r.jsx(Kj,{onClick:a,"aria-label":"Close navigation",children:r.jsx(ti,{size:18})})]}),r.jsx(Zj,{children:i})]})}function Jj({activeId:t,groups:a,currentMenuEntries:i,onSelectModule:s,onDismiss:c}){return r.jsx(Xj,{title:"Navigation",onDismiss:c,children:r.jsx(Js,{children:a.map(u=>r.jsxs("div",{children:[r.jsx(Xa,{children:u.label}),u.items.map(p=>{const f=p.id===t;return r.jsxs("div",{children:[r.jsxs(Zr,{$active:f,onClick:()=>{s(p.id),c()},"aria-pressed":f,children:[r.jsx(Bo,{children:p.icon}),r.jsx(Qr,{children:p.label}),f&&r.jsx(Xr,{"aria-hidden":"true",children:r.jsx(Ot,{size:16})})]}),f&&i.length>0&&r.jsx("div",{children:i.map(m=>{if(m.type==="single"){const v=m.item;return r.jsxs(Zr,{$active:v.isActive,$indent:!0,onClick:()=>{var k;(k=v.onClick)==null||k.call(v),c()},"aria-pressed":!!v.isActive,children:[r.jsx(Bo,{children:v.icon}),r.jsx(Qr,{children:v.label}),v.isActive&&r.jsx(Xr,{"aria-hidden":"true",children:r.jsx(Ot,{size:16})})]},v.id)}if(m.type!=="group")return null;const x=m.group;return r.jsxs("div",{children:[r.jsx(Xa,{children:x.label}),x.children.map(v=>r.jsxs(Zr,{$active:v.isActive,$indent:!0,onClick:()=>{var k;(k=v.onClick)==null||k.call(v),c()},"aria-pressed":!!v.isActive,children:[r.jsx(Bo,{children:v.icon}),r.jsx(Qr,{children:v.label}),v.isActive&&r.jsx(Xr,{"aria-hidden":"true",children:r.jsx(Ot,{size:16})})]},v.id))]},x.id)})})]},p.id)})]},u.id))})})}const q1=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],eS=b.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,tS=b.main`
  flex: 1 1 auto;
  min-width: 0;
`;function nS(t){const{activeId:a,selectedPersonaId:i,moduleGroups:s,primaryLabel:c,secondaryLabel:u,menuEntries:p,user:f,onUserClick:m,onMobileNavigate:x,onSelectPersona:v,children:k}=t,[w,L]=g.useState(null),j=wj({deadZonePx:8,topThresholdPx:20}),_=w===null&&j==="down",M=g.useMemo(()=>{if(!i)return null;const P=q1.find(N=>N.id===i);return(P==null?void 0:P.name)??null},[i]),I=()=>L(null),R=P=>L(P),C=w!==null;return r.jsxs(eS,{children:[r.jsx(Mj,{primaryLabel:c,secondaryLabel:u,tertiaryLabel:M,openOverlay:w,user:f,hidden:_,onHamburgerClick:()=>R("drawer"),onPrimaryClick:()=>R("primary"),onSecondaryClick:()=>R("secondary"),onTertiaryClick:M?()=>R("persona"):void 0,onSearchClick:()=>{R("drawer")},onUserClick:()=>m==null?void 0:m()}),r.jsx(tS,{children:k}),C&&r.jsx(Tj,{onDismiss:I}),w==="primary"&&r.jsx(Dj,{activeId:a,groups:s,onSelect:P=>{x(P),I()}}),w==="secondary"&&r.jsx(Bj,{moduleLabel:c,entries:p,onSelect:I}),w==="persona"&&r.jsx(qj,{personas:q1,activeId:i,onSelect:P=>{v(P),I()}}),w==="drawer"&&r.jsx(Jj,{activeId:a,groups:s,currentMenuEntries:p,onSelectModule:P=>x(P),onDismiss:I})]})}function rS(t){if(cC()&&t.mobileNav){const i=t.mobileNav;return r.jsx(nS,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:t.menuEntries??[],user:t.user,onUserClick:t.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:t.children})}return r.jsx(xj,{...t})}const oS="/Ultron/assets/policy-icon-active-CqCS8_ex.svg",aS="/Ultron/assets/automation-icon-active-DlguOjgR.svg",Yn=(t,a,i)=>Math.max(a,Math.min(i,t)),tu=t=>(t=Yn(t,0,1),t*t*(3-2*t)),Qo=t=>t>=48?1:t>=32?1.2:t>=24?1.5:t>=20?1.85:2.3;function Ln(t){const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)}function Ld(t){const a=(t||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(s=>s+s).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function U1(t,a,i){let s=i.trim();const c=s.match(/var\(\s*(--[^,)]+)/);if(c&&(s=getComputedStyle(a).getPropertyValue(c[1]).trim()||s),s.startsWith("#"))return Ld(s);t.fillStyle="#000",t.fillStyle=s;const u=t.fillStyle;if(u.startsWith("#"))return Ld(u);const p=u.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:"26,30,38"}function iS(){const[t,a]=g.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return g.useEffect(()=>{var c;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=u=>a(u.matches);return(c=i.addEventListener)==null||c.call(i,"change",s),()=>{var u;return(u=i.removeEventListener)==null?void 0:u.call(i,"change",s)}},[]),t}function sS(t){const[a,i,s]=t.split(",").map(Number);return(.299*a+.587*i+.114*s)/255}function lS(t,a){return t==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:t==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:t==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const Wr=["234,54,38","246,112,44","252,172,54","255,212,76"],cS="176,58,32",dS="198,158,52";function Gn(t,a,i){const s=t.split(",").map(Number),c=a.split(",").map(Number);return s.map((u,p)=>Math.round(u+(c[p]-u)*i)).join(",")}function ro(t,a,i){const{ctx:s,w:c,h:u}=t,p=c/2,f=u/2,x=Math.min(c,u)*.39*.2*(.9+.14*Math.sin(a*1.5)),v=t.size<24,k=Yn(t.alert??0,0,1),w=(R,C)=>R+(C-R)*k,L=.85+.15*Math.sin(a*2.2);if(!v&&t.coreHalo){if(s.save(),i.glow&&k<1){s.globalAlpha=1-k;const R=s.createRadialGradient(p,f,0,p,f,x*3);R.addColorStop(0,"rgba("+i.core+",0.55)"),R.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=R,s.beginPath(),s.arc(p,f,x*3,0,6.2832),s.fill()}else if(!i.glow){const R=x*w(3.2,3),C=s.createRadialGradient(p,f,0,p,f,R);C.addColorStop(0,"rgba("+Gn(i.core,Wr[1],k)+","+w(.34,.85*L)+")"),C.addColorStop(.5,"rgba("+Gn(i.core,Wr[2],k)+","+w(.13,.42*L)+")"),C.addColorStop(1,"rgba("+Gn(i.core,Wr[3],k)+",0)"),s.fillStyle=C,s.beginPath(),s.arc(p,f,R,0,6.2832),s.fill()}s.restore()}const j=i.glow?1:.95,_=Math.max(.8,x*w(1,1.5)),M=x*.1*k;s.save(),s.filter="blur("+Math.max(.4,x*w(.22,.3)).toFixed(2)+"px)";const I=s.createRadialGradient(p-M,f-M,0,p,f,_);I.addColorStop(0,"rgba("+Gn(i.core,Wr[0],k)+","+w(j,1)+")"),I.addColorStop(.5,"rgba("+Gn(i.core,Wr[1],k)+","+w(j,1)+")"),I.addColorStop(.82,"rgba("+Gn(i.core,Wr[2],k)+","+w(j,.97)+")"),I.addColorStop(1,"rgba("+Gn(i.core,Wr[3],k)+","+w(j,.72)+")"),s.fillStyle=I,s.beginPath(),s.arc(p,f,_,0,6.2832),s.fill(),s.restore()}function v0(t,a,i){const{ctx:s,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",v=[[1.35,.3],[1.05,2.4]],k=a*(x?.5:.16),w=.42,L=Math.cos(w),j=Math.sin(w),_=Math.cos(k),M=Math.sin(k),I=m*.96,R=(B,Q,J)=>{const Z=B*_+J*M,te=-B*M+J*_,re=Q,ce=re*L-te*j,G=(re*j+te*L+1)/2,F=.82+.18*G;return{x:p+Z*I*F,y:f+ce*I*F,d:G}},C=(B,Q,J)=>{const Z=Math.cos(B),te=Math.sin(B)*Math.cos(Q),re=Math.sin(B)*Math.sin(Q);return[Z*Math.cos(J)+re*Math.sin(J),te,-Z*Math.sin(J)+re*Math.cos(J)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const P=t.size>=24?64:40,N=x?.9:.3,$=P,E=5.6,z=[];for(let B=0;B<v.length;B++){const Q=v[B][0],J=v[B][1],Z=ce=>{const ae=C(ce,Q,J);return R(ae[0],ae[1],ae[2])},te=B%2?1:-1,re=B*2+te*a*N;z.push({ptOf:Z,head:re,dir:te,hp:Z(re)})}z.sort((B,Q)=>B.hp.d-Q.hp.d);for(const B of z){const Q=Math.max(1.2,m*.05)*(.75+.35*B.hp.d),J=.66*(.45+.55*B.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Q;let Z=B.ptOf(B.head);for(let ce=1;ce<=$;ce++){const ae=ce/$,G=1-ae,F=J*G*G,K=B.ptOf(B.head-B.dir*ae*E);F>.004&&(s.strokeStyle="rgba("+i.dot+","+F+")",s.beginPath(),s.moveTo(Z.x,Z.y),s.lineTo(K.x,K.y),s.stroke()),Z=K}s.restore();const te=Math.max(.9,m*.062*Qo(t.size)*(.65+.5*B.hp.d)),re=.45+.55*B.hp.d;if(i.glow){const ce=s.createRadialGradient(B.hp.x,B.hp.y,0,B.hp.x,B.hp.y,te*4.5);ce.addColorStop(0,"rgba("+i.accent+","+.3*re+")"),ce.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ce,s.beginPath(),s.arc(B.hp.x,B.hp.y,te*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,re+.1)+")",s.beginPath(),s.arc(B.hp.x,B.hp.y,te,0,6.2832),s.fill()}ro(t,a,i),s.restore()}function uS(t,a,i){const{ctx:s,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",v=[m*.92],k=v.length,w=1,L=x?.9:.3,j=t.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let _=0;_<k;_++){const M=v[_],I=_%2?1:-1,R=6.2832/w,C=Math.min(5.6,R*.92);for(let P=0;P<w;P++){const N=_*2+I*a*L+P*R,$=p+Math.cos(N)*M,E=f+Math.sin(N)*M;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,m*.05);let z=$,B=E;for(let J=1;J<=j;J++){const Z=J/j,te=.62*(1-Z)*(1-Z),re=N-I*Z*C,ce=p+Math.cos(re)*M,ae=f+Math.sin(re)*M;te>.004&&(s.strokeStyle="rgba("+i.dot+","+te+")",s.beginPath(),s.moveTo(z,B),s.lineTo(ce,ae),s.stroke()),z=ce,B=ae}s.restore();const Q=Math.max(.9,m*.062*Qo(t.size));if(i.glow){const J=s.createRadialGradient($,E,0,$,E,Q*4.5);J.addColorStop(0,"rgba("+i.accent+",0.3)"),J.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=J,s.beginPath(),s.arc($,E,Q*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc($,E,Q,0,6.2832),s.fill()}}ro(t,a,i),s.restore()}function V1(t,a,i){const{ctx:s,w:c,h:u,dpr:p}=t,f=c/2,m=u/2,x=Math.min(c,u)*.39,v=t.state!=="idle",k=Yn(t.alert??0,0,1),w=x*.82,L=(G,F)=>Gn(i.dot,Gn(cS,dS,Yn(Math.hypot(G-f,F-m)/w,0,1)),k),j=t.size>=120,_=j?22:t.size>=32?10:t.size>=20?7:5,M=v?a*.55:a*.22,I=Math.cos(M),R=Math.sin(M),C=.42,P=Math.cos(C),N=Math.sin(C);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",j&&i.glow){const G=s.createRadialGradient(f,m,0,f,m,x*1.02);G.addColorStop(0,"rgba("+i.accent+",0.10)"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(f,m,x*1.02,0,6.2832),s.fill()}const $=[];for(let G=0;G<_;G++){const F=1-(G+.5)/_*2,K=Math.sqrt(Math.max(0,1-F*F)),q=G*2.39996,T=Math.cos(q)*K,S=F,H=Math.sin(q)*K,Y=T*I+H*R,oe=-T*R+H*I,he=S*P-oe*N,ee=S*N+oe*P,W=(ee+1)/2,de=.82+.18*W;$.push({x:f+Y*w*de,y:m+he*w*de,d:W,k:G,vec:[Y,he,ee]})}$.sort((G,F)=>G.d-F.d);const E=G=>{const F=(G[2]+1)/2,K=.82+.18*F;return{x:f+G[0]*w*K,y:m+G[1]*w*K,d:F}},z=(G,F,K)=>{let q=G[0]*F[0]+G[1]*F[1]+G[2]*F[2];q=Yn(q,-1,1);const T=Math.acos(q);if(T<.001)return[G[0],G[1],G[2]];const S=Math.sin(T),H=Math.sin((1-K)*T)/S,Y=Math.sin(K*T)/S;return[G[0]*H+F[0]*Y,G[1]*H+F[1]*Y,G[2]*H+F[2]*Y]},B={};for(const G of $)B[G.k]=G;const J=a*(v?1.4:.5),Z=Math.floor(J),te=J-Z,re=5,ce=12;s.lineCap="round",s.lineJoin="round";const ae=j?[{seed:1.7},{seed:9.3},{seed:21.5},{seed:34.8},{seed:48.2}]:[{seed:1.7},{seed:9.3},{seed:21.5},{seed:34.8}];for(const G of ae){const F=q=>{const T=Math.sin(q*12.9898+G.seed)*43758.5453;return Math.floor((T-Math.floor(T))*_)},K=q=>{let T=F(q);return T===F(q-1)&&(T=(T+1)%_),B[T]};for(let q=re-1;q>=0;q--){const T=Z-q;if(T<0)continue;const S=K(T),H=K(T+1);if(!S||!H||S===H)continue;const Y=q===0?te:1,oe=E(z(S.vec,H.vec,Y)),he=(S.d+oe.d)/2,ee=q===0?1:Yn(1-(q-1+te)/(re-1),0,1),W=(i.glow?.6:.72)*ee*(.4+.6*he);if(W<.02)continue;const de=s.createLinearGradient(S.x,S.y,oe.x,oe.y);de.addColorStop(0,"rgba("+L(S.x,S.y)+",0)"),de.addColorStop(1,"rgba("+L(oe.x,oe.y)+","+W+")"),s.strokeStyle=de,s.lineWidth=(j?Math.max(1.1*p,x*.018):Math.max(1.2,x*.045))*(.7+.4*he),s.beginPath();for(let ve=0;ve<=ce;ve++){const pe=E(z(S.vec,H.vec,Y*(ve/ce)));ve===0?s.moveTo(pe.x,pe.y):s.lineTo(pe.x,pe.y)}s.stroke()}}for(const G of $){const F=.5+.5*Math.sin(a*2-G.k*.9),K=(.18+.82*G.d)*(.62+.38*F),q=j?Math.max(.5,(.9+.9*G.d)*p*(.85+.15*F)):x*.058*Qo(t.size)*(.6+.5*G.d);if(i.glow){const T=q*4,S=s.createRadialGradient(G.x,G.y,0,G.x,G.y,T);S.addColorStop(0,"rgba("+i.accent+","+.24*K+")"),S.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=S,s.beginPath(),s.arc(G.x,G.y,T,0,6.2832),s.fill()}s.fillStyle="rgba("+L(G.x,G.y)+","+(.32+.68*K)+")",s.beginPath(),s.arc(G.x,G.y,Math.max(.9,q),0,6.2832),s.fill()}if(j){const G=v?1:.4;for(let F=0;F<46;F++){const K=Ln(F*5.1)<.5?-1:1,q=Ln(F*1.7)*6.2832+a*(.3+Ln(F*3.1)*.6)*K*G,T=x*(.04+.05*Ln(F*4.7))*Math.sin(a*(.8+Ln(F*6)*1)+Ln(F*7)*6.28),S=x*(.5+Ln(F*2.3)*.5)+T,H=f+Math.cos(q)*S,Y=m+Math.sin(q)*S,oe=.3+.7*(.5+.5*Math.sin(a*(1.4+Ln(F)*2)+Ln(F*2)*6.28)),he=Math.max(.5,(.4+Ln(F*8)*1)*p*(.55+.6*oe));if(i.glow){const ee=he*6,W=s.createRadialGradient(H,Y,0,H,Y,ee);W.addColorStop(0,"rgba("+i.accent+","+oe*.18+")"),W.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=W,s.beginPath(),s.arc(H,Y,ee,0,6.2832),s.fill()}s.fillStyle="rgba("+L(H,Y)+","+oe*(i.glow?.8:.42)+")",s.beginPath(),s.arc(H,Y,he,0,6.2832),s.fill()}}ro(t,a,i),s.restore()}function hS(t,a,i){const{ctx:s,w:c,h:u,dpr:p}=t,f=c/2,m=u/2,x=Math.min(c,u)*.39,v=t.state!=="idle",k=t.size>=32?11:7,w=x*.12,L=x*.12,j=tu(.5+.5*Math.sin(a*(v?1:.55))),_=v?.34+.66*j:.5+.12*j,M=Math.max(1*p,x*.052),I=-a*(v?.5:.16),R=Math.cos(I),C=Math.sin(I),P=.42,N=Math.cos(P),$=Math.sin(P);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const E=x*(.52+.44*_),z=Math.max(w+M,E-L),B=[];for(let Q=0;Q<k;Q++){const J=1-(Q+.5)/k*2,Z=Math.sqrt(Math.max(0,1-J*J)),te=Q*2.39996,re=Math.cos(te)*Z,ce=J,ae=Math.sin(te)*Z,G=re*R+ae*C,F=-re*C+ae*R,K=ce*N-F*$,T=(ce*$+F*N+1)/2,S=.82+.18*T,H=.5+.5*Math.sin(a*1.6+Q*1.3);B.push({x0:f+G*w*S,y0:m+K*w*S,x1:f+G*z*S,y1:m+K*z*S,cx2:f+G*E*S,cy2:m+K*E*S,d:T,shim:H})}B.sort((Q,J)=>Q.d-J.d);for(const Q of B){const J=(v?.4+.45*_:.6)*(.4+.6*Q.d)*(.78+.22*Q.shim),Z=s.createLinearGradient(Q.x0,Q.y0,Q.x1,Q.y1);Z.addColorStop(0,"rgba("+i.dot+","+J+")"),Z.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=Z,s.lineWidth=M*(.7+.5*Q.d),s.beginPath(),s.moveTo(Q.x0,Q.y0),s.lineTo(Q.x1,Q.y1),s.stroke();const te=Math.max(.9,x*.058*Qo(t.size)*(.85+.3*_)*(.6+.5*Q.d));if(i.glow){const re=s.createRadialGradient(Q.cx2,Q.cy2,0,Q.cx2,Q.cy2,te*5);re.addColorStop(0,"rgba("+i.accent+","+.26*J+")"),re.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=re,s.beginPath(),s.arc(Q.cx2,Q.cy2,te*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,J+.1)+")",s.beginPath(),s.arc(Q.cx2,Q.cy2,te,0,6.2832),s.fill()}ro(t,a,i),s.restore()}function pS(t,a,i){const{ctx:s,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",v=t.size>=32?58:t.size>=20?32:18,k=m*.78,w=x?a*.5:a*.2,L=Math.cos(w),j=Math.sin(w),_=.42,M=Math.cos(_),I=Math.sin(_),R=x?1:.4,C=(E,z)=>[Math.sin(E)*Math.cos(z),Math.cos(E),Math.sin(E)*Math.sin(z)],P=[C(1.4+.5*Math.sin(a*.5*R),a*.6*R),C(1.9+.4*Math.cos(a*.4*R),-a*.5*R+2)],N=.36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const $=[];for(let E=0;E<v;E++){const z=1-(E+.5)/v*2,B=Math.sqrt(Math.max(0,1-z*z)),Q=E*2.39996,J=Math.cos(Q)*B,Z=z,te=Math.sin(Q)*B;let re=0;for(const T of P){const S=J-T[0],H=Z-T[1],Y=te-T[2];re+=Math.exp(-(S*S+H*H+Y*Y)/(2*N*N))}re=Yn(re,0,1);const ce=J*L+te*j,ae=-J*j+te*L,G=Z*M-ae*I,K=(Z*I+ae*M+1)/2,q=.82+.18*K;$.push({x:p+ce*k*q,y:f+G*k*q,d:K,inf:re})}$.sort((E,z)=>E.d-z.d);for(const E of $){const z=tu(E.inf),B=Math.max(.6,m*(.05+.06*z)*Qo(t.size)*(.55+.5*E.d)),Q=(.16+.84*E.d)*(.45+.55*z),J=Math.abs(2*E.d-1),Z=Math.atan2(E.y-f,E.x-p);s.fillStyle="rgba("+i.dot+","+Q+")",s.beginPath(),s.ellipse(E.x,E.y,Math.max(.35,B*J),B,Z,0,6.2832),s.fill()}ro(t,a,i),s.restore()}function fS(t,a,i){const{ctx:s,w:c,h:u}=t,p=c/2,f=u/2,m=Math.min(c,u)*.39,x=t.state!=="idle",v=t.size>=32?8:t.size>=20?6:5,k=m*.9,w=x?1:.4,L=a*(x?.3:.12),j=a*1*w,_=-a*.7*w+2.2,M=.72,I=(R,C)=>{const P=((R-C+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(P)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let R=0;R<v;R++){const C=R/v*6.2832+L;let P=Math.exp(-(I(C,j)**2)/(2*M*M))+Math.exp(-(I(C,_)**2)/(2*M*M));P=Yn(P,0,1);const N=tu(P),$=p+Math.cos(C)*k,E=f+Math.sin(C)*k,z=Math.max(.6,m*(.05+.07*N)*Qo(t.size)),B=.38+.62*N;if(i.glow&&N>.25){const Q=s.createRadialGradient($,E,0,$,E,z*4);Q.addColorStop(0,"rgba("+i.accent+","+.24*N+")"),Q.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Q,s.beginPath(),s.arc($,E,z*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+B+")",s.beginPath(),s.arc($,E,z,0,6.2832),s.fill()}ro(t,a,i),s.restore()}function mS(t,a,i){ro(t,a,i)}const gS={orbit:v0,orbit2d:uS,circle:V1,lines:hS,magnetic:pS,magnetic2d:fS,pulse:mS,bands:V1};function St({mark:t="orbit",size:a=16,tone:i="auto",state:s="active",motionSpeed:c=1,accent:u="#96B9FF",color:p,coreHalo:f=!0,coreGradient:m=!1,className:x,"aria-label":v}){const k=g.useRef(null),w=iS(),L=g.useRef(0),j=g.useRef(0);return j.current=m?1:0,g.useEffect(()=>{const _=k.current;if(!_)return;const M=_.getContext("2d");if(!M)return;const I=Math.min(2,window.devicePixelRatio||1),R=Math.max(2,Math.round(a*I)),C=R;_.width=R,_.height=C;const P={ctx:M,w:R,h:C,dpr:I,size:a,state:s,coreHalo:f,alert:L.current},N=i==="auto"?sS(U1(M,_,"var(--color-bg-primary)"))<.5?"dark":"light":i,$=lS(N,Ld(u));if(p){const te=U1(M,_,p);$.dot=te,$.core=te}const E=gS[t]??v0,z=te=>{L.current+=(j.current-L.current)*.06,Math.abs(L.current-j.current)<.001&&(L.current=j.current),P.alert=L.current,M.clearRect(0,0,R,C),E(P,s==="static"?.62:te,$)},B=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),Q=Yn(c,.4,3);if((B||s==="static")&&(L.current=j.current),z(1.15),B||s==="static")return;let J=0;const Z=te=>{z(te/1e3*Q),J=requestAnimationFrame(Z)};return J=requestAnimationFrame(Z),()=>cancelAnimationFrame(J)},[t,a,i,s,c,u,p,f,m,w]),r.jsx("canvas",{ref:k,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:x,role:"img","aria-label":v})}const Vo={high:0,medium:1,low:2,none:3};b.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function el(t){return t.status==="resolved"||t.status==="auto_resolved"||t.status==="workflow_available"?"green":t.status==="analyzing"?"slate":t.status==="in_progress"||t.status==="monitoring"?"blue":t.severity==="high"?"orange":"slate"}b.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function vS(t,a){if(a)return"Ultron is replying…";switch(t){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const y0=t=>t.status==="workflow_available"||t.status==="resolved"&&t.workflowOpportunity!=null,x0=t=>/^(review|adjust|revisit|update)\b/i.test(t),yS=["Revisit","Update","Resolve"],xS=t=>/,|\sand\s/.test(t),wS="Approve all",Is="Yes",w0=t=>{const i=t.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};b.section`
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
`;const dd=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],Go={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},b0={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function k0(t){const a=b0[t];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function _0(t){const a=Go[t.id];if(!a||t.title.startsWith(a))return t.title;const i=t.title.split(" ")[0]??"",c=i===i.toUpperCase()?t.title:t.title.charAt(0).toLowerCase()+t.title.slice(1);return`${a} ${c}`}const C0={missed_clockin_james:"james_okoro_2"},nu=t=>`https://i.pravatar.cc/80?u=${C0[t]??t}`,Xo=t=>`https://i.pravatar.cc/80?u=${C0[t]??t}`,bS={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},kS=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],j0=t=>bS[t]??kS,S0={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},G1={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},ru={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},_S={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},ou={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},CS={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},jS={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},ud={detected:t=>t.event,assessment:t=>t.assessment,recommendation:t=>t.recommendation,approval:t=>t.recommendation,execution:t=>t.recommendation,resolution:t=>t.outcome??t.recommendation,monitoring:t=>t.assessment,workflow:t=>t.workflowOpportunity??t.recommendation};function N0(t){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return CS[t.id]??t.timeline.map(i=>{var u;const s=((u=ud[i.state])==null?void 0:u.call(ud,t))??t.assessment,c=s!=null&&a(s)===a(i.headline);return{icon:jS[i.state]??"clock",headline:i.headline,blocks:s&&!c?[{text:s}]:void 0}})}const wt=(t,a,i)=>({name:t,match:a,distance:i}),Ae=(t,a,i,s,c,u)=>({seed:t,name:a,preview:i,status:s,tone:c,...u?{conversation:u}:{}}),Y1=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],SS=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],NS=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],RS=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],R0="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",Hr=t=>({from:"ultron",text:R0,time:t}),MS={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:Y1,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[wt("Jordan Pierce","4.9 match","3.2 mi"),wt("Aisha Karim","4.7 match","5.1 mi"),wt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:R0,total:20,threads:[Ae("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[Hr("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ae("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[Hr("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ae("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[Hr("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ae("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[Hr("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ae("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[Hr("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ae("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[Hr("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ae("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[Hr("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:SS,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[wt("Renee Wallace","4.9 match","2.4 mi"),wt("Carl Jensen","4.6 match","4.1 mi"),wt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ae("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ae("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ae("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:NS,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[wt("Dane Mercer","4.8 match","2.1 mi"),wt("Omar Reyes","4.6 match","3.7 mi"),wt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ae("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ae("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ae("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:RS,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[wt("Jamal Carter","4.7 match","1.8 mi"),wt("Sara Lindqvist","4.6 match","2.9 mi"),wt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ae("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ae("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ae("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[wt("Theo Park","4.7 match","1.9 mi"),wt("Gina Holt","4.5 match","3.3 mi"),wt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ae("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ae("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ae("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ae("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[wt("Carl Jensen","4.7 match","2.6 mi"),wt("Tina Boyd","4.5 match","3.9 mi"),wt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ae("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ae("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ae("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ae("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ae("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ae("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ae("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ae("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ae("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ae("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ae("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ae("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ae("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ae("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:Y1,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ae("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ae("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},LS={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},$S=t=>/in-app/i.test(t)?"in_app":/sms/i.test(t)?"sms":"auto",K1=t=>/in-app/i.test(t)?"In-app":/sms/i.test(t)?"SMS":"Preferred channel",Z1=t=>t.split(/\s*\+\s*/).map(a=>a.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),TS={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},$d=t=>{const[a,...i]=t.split(" "),s=TS[a];return s?`Will ${s} ${i.join(" ")}`:t};function IS(t,a){if(t==="policy"&&a.policy){const c=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:c?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${c.total} ${c.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${$S(i.name)}", template="shift_offer", to=matched)`,summary:`${$d(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${$d(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function AS(t,a,i,s){var L,j,_,M;if(t==="read"){const I=((L=a.update)==null?void 0:L.recordType)??((j=a.updateClose)==null?void 0:j.recordType);if(!I)return null;const R=I.toLowerCase(),C=[{label:"Type",value:I},{label:"Time",value:((_=b0[s])==null?void 0:_.shiftTime)??""},{label:"User",value:Go[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${I}`,description:`Pulled the current ${R} record before planning`,query:`read_data(record="${I}") → current_state`,recordDetails:C,summary:`Read the ${R}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(t==="match"||t==="credential"||t==="incentive"){const I=(M=a.policy)==null?void 0:M.eligible;if(!I)return null;const R=I.unit.replace(/^eligible\s+/i,"");if(t==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${R} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${I.total} ${I.unit}.`};if(t==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const C=I.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${I.total}) → suggestion`,summary:C?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:C?{add:!1,amount:"No bonus",rationale:`${I.total} qualified ${R} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${I.total} qualified ${R} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(t==="task"){if(!a.task)return null;const{description:I,query:R,fields:C}=a.task;return{icon:"task",name:"Tasks",description:I,query:R,task:{fields:C}}}if(t==="update"||t==="update-close"){const I=t==="update"?a.update:a.updateClose;if(!I)return null;const{description:R,...C}=I;return{icon:"record",name:"Update Data",description:R,updateData:C}}const c=t==="notify"||t==="notify-scheduler",u=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0,p=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(!(t==="policy"&&a.policy||!!p||!!u))return null;const m=t==="policy"?"Policy Engine":c?"Engage: Notification":p.name,x=t==="policy"?a.policy.description:c?u.description:p.description,v=t==="policy"?"shield":c?"bell":"message";if(i==="planning"){const I=t==="policy"?x:$d(x),R={icon:v,name:m,description:I,...IS(t,a)};return c?{...R,channel:Z1(u.channel),message:u.message}:p?{...R,channel:K1(p.name),message:p.message}:t==="policy"?{...R,policies:{total:a.policy.policiesTotal,items:a.policy.policies}}:R}if(t==="policy")return{icon:v,name:m,description:x,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(p)return{icon:v,name:m,description:x,channel:K1(p.name),message:p.message,threads:{total:p.total,moreNoun:"threads",items:p.threads}};const{description:k,...w}=u;return{icon:v,name:m,description:x,channel:Z1(u.channel),notification:w}}function M0(t,a,i="execution"){const s=MS[t];return s?a.map(c=>AS(c,s,i,t)).filter(c=>c!==null):[]}const ES=t=>t.tools??LS[t.icon]??["policy"],ws=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function PS(t){return{id:`detected_${t.id}`,name:t.name,title:t.title,capability:t.capability,status:"analyzing",severity:t.severity??"high",event:t.title.endsWith(".")?t.title:`${t.title}.`,assessment:t.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:t.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:t.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const L0={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},Q1=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function zS(t,a){return Q1[a%Q1.length]}function OS(t){return t===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function DS(t){return t>=90?"green":t>=80?"blue":t>=70?"orange":"slate"}function $0({record:t}){const a=t.meta.find(c=>/^\d+%\s*match$/i.test(c)),i=a?parseInt(a,10):null,s=a?t.meta.filter(c=>c!==a):t.meta;return r.jsxs(BS,{children:[r.jsx(An,{size:"md",src:nu(t.avatarSeed),name:t.title,alt:t.title}),r.jsxs(FS,{children:[r.jsx(WS,{children:t.title}),r.jsx(HS,{children:[t.eyebrow,...s].join(" · ")})]}),i!=null&&r.jsxs(qS,{"data-tone":DS(i),children:[i,"% match"]}),r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(Fd,{size:16})})]})}const BS=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,FS=b.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,WS=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,HS=b.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,qS=b.span`
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
`,X1=t=>t.id.startsWith("detected_"),J1=5400,ef=1100;function US(t,a){switch(a.type){case"detect":return t.some(i=>i.id===a.thread.id)?t:[a.thread,...t];case"decide":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return t.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return t.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:L0[i.id]??i.outcome}:i)}}const VS=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function GS(){const[t,a]=g.useReducer(US,dd),[i,s]=g.useState(()=>{var H;const S=dd.find(Y=>Y.status==="needs_approval"||Y.status==="recommended");return(S==null?void 0:S.id)??((H=dd[0])==null?void 0:H.id)??null}),[c,u]=g.useState([]),p=S=>{s(S),u(H=>H.includes(S)?H:[...H,S])},f=g.useMemo(()=>{const S=t.map((H,Y)=>({item:H,index:Y}));return VS.map(H=>({id:H.id,label:H.label,threads:S.filter(Y=>H.statuses.includes(Y.item.status)).sort((Y,oe)=>(Y.item.status==="analyzing"?1:0)-(oe.item.status==="analyzing"?1:0)||(X1(oe.item)?1:0)-(X1(Y.item)?1:0)||Vo[Y.item.severity]-Vo[oe.item.severity]||Y.index-oe.index).map(Y=>Y.item)}))},[t]),m=t.find(S=>S.id===i)??null,[x,v]=g.useState({}),k=i?x[i]??0:0,[w,L]=g.useState([]),[j,_]=g.useState({}),[M,I]=g.useState({}),[R,C]=g.useState([]),P=g.useRef({}),[N,$]=g.useState([]),E=S=>{$(H=>H.includes(S)?H.filter(Y=>Y!==S):[...H,S])},[z,B]=g.useState([]),Q=S=>{B(H=>H.includes(S)?H:[...H,S])},[J,Z]=g.useState([]);return{threads:t,groups:f,selectedId:i,selectedThread:m,selectedStage:k,stageById:x,viewedIds:c,analyzedIds:w,outboundByThread:j,chatByThread:M,replyingIds:R,setSelectedId:p,detectRisk:S=>{a({type:"detect",thread:PS(S)})},decide:S=>{p(S),L(H=>H.includes(S)?H:[...H,S]),a({type:"decide",threadId:S})},commit:(S,H)=>{p(S),_(Y=>({...Y,[S]:[...Y[S]??[],H]})),a({type:"commit",threadId:S})},completeRun:S=>{const H=x[S]??0,Y=ru[S];H===0&&Y?(v(oe=>({...oe,[S]:1})),a({type:"reopen",threadId:S})):(a({type:"resolve",threadId:S}),N.includes(S)&&(Q(S),$(oe=>oe.filter(he=>he!==S))))},sendMessage:(S,H)=>{const Y=H.trim();if(!Y)return;p(S),I(he=>({...he,[S]:[...he[S]??[],{role:"operator",text:Y}]})),C(he=>he.includes(S)?he:[...he,S]);const oe=window.setTimeout(()=>{I(he=>{const ee=he[S]??[],W=ee.filter(de=>de.role==="ultron").length;return{...he,[S]:[...ee,{role:"ultron",text:zS(Y,W)}]}}),C(he=>he.filter(ee=>ee!==S)),delete P.current[S]},ef);P.current[S]=oe},stopReply:S=>{const H=P.current[S];H&&(window.clearTimeout(H),delete P.current[S]),C(Y=>Y.filter(oe=>oe!==S))},refine:S=>{},saveWorkflow:S=>{const H=S.id;p(H),I(oe=>({...oe,[H]:[...oe[H]??[],{role:"operator",text:"Save as workflow"}]})),C(oe=>oe.includes(H)?oe:[...oe,H]);const Y=window.setTimeout(()=>{I(oe=>({...oe,[H]:[...oe[H]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),Q(H),C(oe=>oe.filter(he=>he!==H)),delete P.current[H]},ef);P.current[H]=Y},pendingWorkflowIds:N,toggleWorkflowSave:E,savedWorkflowIds:z,markWorkflowSaved:Q,revealedNewIds:J,revealNew:S=>Z(H=>H.includes(S)?H:[...H,S])}}const YS={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function KS(t,a){const i=YS[t];return!i||a==="plan"?t:a==="done"?i.done:i.working}const ZS={search:Rs,read:Rs,message:Ls,policy:Vr,shield:Vr,schedule:Vr,analytics:Y5,clock:_r,monitor:qs,bell:Ls,record:Oo,task:Vr},QS={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},XS=t=>t.updateData?`Update Data: ${t.updateData.recordType}`:QS[t.icon]??t.name,JS=t=>t.tone==="positive"?"success":t.tone==="chatting"?"info":"neutral",tf={positive:0,chatting:1,muted:2},eN=b(vm)`
  && {
    --accordion-label-size: var(--text-sm);
    --accordion-desc-size: var(--text-xs);
  }
  & > div:has(> [data-accordion-header-button]) {
    padding-top: var(--space-3);
    padding-bottom: var(--space-3);
  }
  /* Chevron to the trailing edge, smaller. order:1 reorders it past the order-0
     label block (which is flex: 1), so it lands flush right; the 16px box/glyph
     reads smaller than the 32px tile it occupied before. */
  & [class*='_chevron_'] {
    order: 1;
    width: var(--space-4);
    height: var(--space-4);
    color: var(--color-content-tertiary);
  }
  & [class*='_chevron_'] svg {
    width: var(--space-4);
    height: var(--space-4);
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
    /* No inset card — the body indents so its sections line up LEFT under the
       title text (header pad + avatar tile + header gap = 12 + 32 + 12 = 56px),
       with a 12px right gutter and 16px below the last section. */
    margin: 0;
    padding: 0 var(--space-3) var(--space-4)
      calc(var(--space-8) + var(--space-3) + var(--space-3));
    background: none;
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
`,tN=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,au=240;function nN({open:t,onClose:a,title:i="Run details",usage:s}){const[c,u]=g.useState(()=>s.length?"0":""),[p,f]=g.useState(t),[m,x]=g.useState(!1);if(g.useEffect(()=>{if(t){f(!0);let j=0;const _=requestAnimationFrame(()=>{j=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(_),cancelAnimationFrame(j)}}x(!1);const L=setTimeout(()=>f(!1),au);return()=>clearTimeout(L)},[t]),!p)return null;const v=s.length,k=`${v} ${v===1?"tool":"tools"} used · tap any to see its query and results`,w=s.map((L,j)=>({entry:L,index:j}));return Ds.createPortal(r.jsxs(pN,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(fN,{$shown:m,onClick:a}),r.jsxs(mN,{$shown:m,children:[r.jsxs(gN,{children:[r.jsxs(vN,{children:[r.jsx(yN,{children:i}),r.jsx(xN,{children:k})]}),r.jsx(Ie,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(qd,{size:18})})]}),r.jsxs(wN,{children:[r.jsx(bN,{"aria-hidden":"true"}),r.jsx(gm,{type:"single",collapsible:!0,value:c,onValueChange:L=>u(typeof L=="string"?L:""),children:w.map(({entry:L,index:j})=>{const _=L.updateData?cm:ZS[L.icon];return r.jsx(eN,{value:String(j),label:XS(L),description:L.description,leadingSlot:r.jsx(tN,{"aria-hidden":"true",children:r.jsx(_,{size:18})}),children:r.jsx(kN,{children:r.jsx(rN,{entry:L})})},j)})})]})]})]}),document.body)}function rN({entry:t}){return r.jsxs(r.Fragment,{children:[t.channel&&r.jsxs(tn,{children:[r.jsx(zt,{children:"Channel"}),r.jsx(sf,{children:t.channel})]}),t.message&&r.jsxs(tn,{children:[r.jsx(zt,{children:"Message"}),r.jsx(rf,{children:t.message})]}),t.recordDetails&&r.jsxs(tn,{children:[r.jsx(zt,{children:"Record details"}),r.jsx(hd,{children:t.recordDetails.map((a,i)=>r.jsx(nn,{size:"sm",label:a.label,trailingSlot:r.jsx(pd,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),t.policies&&r.jsxs(tn,{children:[r.jsx(zt,{children:`Policies evaluated · ${t.policies.total}`}),r.jsx(EN,{children:t.policies.items.map((a,i)=>r.jsxs(PN,{children:[r.jsx(zN,{"aria-hidden":"true",children:r.jsx(Ot,{size:16})}),r.jsx("span",{children:a})]},i))})]}),t.eligible&&r.jsxs(tn,{children:[r.jsx(zt,{children:`Returned · ${t.eligible.total} ${t.eligible.unit}`}),r.jsx(oN,{candidates:t.eligible.items,total:t.eligible.total,moreNoun:t.eligible.moreNoun})]}),t.threads&&r.jsxs(tn,{children:[r.jsx(zt,{children:`Threads · ${t.threads.total}`}),r.jsx(dN,{threads:t.threads})]}),t.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(tn,{children:[r.jsx(zt,{children:"Recipient"}),r.jsx(ON,{children:r.jsx(nn,{size:"md",divider:!1,leadingSlot:r.jsx(An,{size:"sm",src:Xo(t.notification.seed),name:t.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:t.notification.name,description:t.notification.role,trailingSlot:r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${t.notification.name}'s profile`,children:r.jsx(Us,{size:14})})})})]}),r.jsxs(tn,{children:[r.jsx(zt,{children:"Message"}),r.jsx(rf,{children:t.notification.message})]})]}),t.task&&r.jsxs(tn,{children:[r.jsx(zt,{children:"Task"}),r.jsx(hd,{children:t.task.fields.map((a,i)=>r.jsx(nn,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?r.jsx(Ka,{status:"success",size:"sm",children:a.value}):r.jsx(pd,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),t.updateData&&r.jsxs(tn,{children:[r.jsx(zt,{children:"Record details"}),(t.updateData.groups??[t.updateData.fields??[]]).map((a,i)=>r.jsx(hd,{children:a.map((s,c)=>r.jsx(nn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?r.jsxs(aN,{children:[r.jsx(iN,{children:s.previousValue}),r.jsx(sN,{"aria-hidden":"true",children:"→"}),r.jsx(lN,{children:s.value})]}):s.emphasis==="success-tag"?r.jsx(Ka,{status:"success",size:"sm",children:s.value}):r.jsx(pd,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},c))},i))]}),t.recommendation&&r.jsxs(tn,{children:[r.jsx(zt,{children:"Recommendation"}),r.jsxs(DN,{children:[r.jsxs(of,{children:[r.jsx(af,{children:"Incentive?"}),r.jsx(BN,{$add:t.recommendation.add,children:t.recommendation.add?t.recommendation.amount:"No bonus"})]}),r.jsxs(of,{children:[r.jsx(af,{children:"Reason"}),r.jsx(FN,{children:t.recommendation.rationale})]})]})]}),t.query&&r.jsxs(tn,{children:[r.jsx(zt,{children:"Query"}),r.jsx(_N,{children:t.query})]}),t.summary&&r.jsxs(tn,{children:[r.jsx(zt,{children:"What it does"}),r.jsx(sf,{children:t.summary})]})]})}function oN({candidates:t,total:a,moreNoun:i}){var v;const[s,c]=g.useState(!1),u=t.slice(0,3),p=a-u.length,f=parseFloat(((v=u[u.length-1])==null?void 0:v.match)??"4.5"),m=s?Array.from({length:p},(k,w)=>cN(w,f)):[],x=[...u,...m];return r.jsxs(r.Fragment,{children:[r.jsx(iu,{children:x.map((k,w)=>r.jsx(nn,{size:"sm",leadingSlot:r.jsx(An,{size:"sm",src:Xo(k.name),name:k.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:k.name,trailingSlot:r.jsx(SN,{children:`${k.match} · ${k.distance}`})},w))}),p>0&&r.jsx(T0,{type:"button",onClick:()=>c(k=>!k),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${p} more ${i}`})]})}const iu=b.div`
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
`,hd=b(iu)`
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
`,pd=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${t=>t.$placeholder?"var(--color-content-disabled)":t.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,aN=b.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,iN=b.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,sN=b.span`
  color: var(--color-content-tertiary);
`,lN=b.span`
  color: var(--color-success-content);
`,As=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Es=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function cN(t,a){const i=As[t%As.length],s=Es[(t*7+3)%Es.length],c=Math.max(3,a-(t+1)*.1),u=(4+t*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${c.toFixed(1)} match`,distance:`${u} mi`}}const nf=3;function dN({threads:t}){const[a,i]=g.useState(!1),[s,c]=g.useState(null),u=[...t.items].sort((v,k)=>tf[v.tone]-tf[k.tone]),p=Math.max(0,t.total-u.length),f=[...u,...Array.from({length:p},(v,k)=>hN(k))],m=a?f:f.slice(0,nf),x=f.length-nf;return r.jsxs(r.Fragment,{children:[r.jsx(iu,{children:m.map((v,k)=>{var _;const w=!!((_=v.conversation)!=null&&_.length),L=`${v.name}-${k}`,j=w&&s===L;return r.jsxs(NN,{"data-open":j||void 0,children:[r.jsx(nn,{size:"md",interactive:w,onClick:w?()=>c(j?null:L):void 0,"aria-expanded":w?j:void 0,leadingSlot:r.jsx(An,{size:"sm",src:Xo(v.seed),name:v.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:v.name,description:v.preview,trailingSlot:r.jsxs(AN,{children:[r.jsx(Ka,{status:JS(v),size:"sm",children:v.status}),w?r.jsx(RN,{"data-open":j||void 0,children:r.jsx(Kn,{size:16})}):r.jsx(rn,{size:16})]})}),j&&r.jsx(uN,{messages:v.conversation})]},L)})}),x>0&&r.jsx(T0,{type:"button",onClick:()=>i(v=>!v),"aria-expanded":a,children:a?`Show fewer ${t.moreNoun}`:`+${x} more ${t.moreNoun}`})]})}function uN({messages:t}){return r.jsx(LN,{children:t.map((a,i)=>r.jsxs($N,{$from:a.from,children:[r.jsx(TN,{children:a.text}),r.jsx(IN,{children:a.time})]},i))})}function hN(t){const a=As[t%As.length],i=Es[(t*7+3)%Es.length],s=`${a} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const pN=b.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,fN=b.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${t=>t.$shown?.45:0};
  transition: opacity ${au}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,mN=b.div`
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
  transition: transform ${au}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,gN=b.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,vN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,yN=b.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,xN=b.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,wN=b.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,bN=b.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,kN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,tn=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function _N({children:t}){const[a,i]=g.useState(!1),s=()=>{var c;(c=navigator.clipboard)==null||c.writeText(t),i(!0),window.setTimeout(()=>i(!1),1600)};return r.jsxs(CN,{children:[r.jsx(jN,{children:t}),r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:s,children:a?r.jsx(Ot,{size:14}):r.jsx(lm,{size:14})})]})}const CN=b.div`
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
`,jN=b.pre`
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
`,SN=b.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,NN=b.div``,RN=b.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,MN=Be`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,LN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${MN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,$N=b.div`
  max-width: 80%;
  align-self: ${t=>t.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${t=>t.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${t=>t.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${t=>t.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,TN=b.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,IN=b.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,AN=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,T0=b.button`
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
`,EN=b.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,PN=b.li`
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
`,zN=b.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,rf=b.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,ON=b.div`
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
`,DN=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,of=b.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,af=b.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,BN=b.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${t=>t.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,FN=b.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,sf=b.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function WN({milestones:t}){return r.jsx(QN,{children:t.map((a,i)=>r.jsx(VN,{milestone:a,last:i===t.length-1},i))})}function I0({milestones:t,typingIndex:a,focusIndex:i,focusBeat:s,collapsed:c,hideActions:u,running:p,animateIn:f,showConnectors:m,reasoning:x}){return r.jsx(HN,{milestones:t,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:u,running:p,defaultCollapsed:c,animateIn:f,showConnectors:m,reasoning:x})}function HN({milestones:t,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:c,running:u,animateIn:p=!0,showConnectors:f=!0,defaultCollapsed:m=!1,reasoning:x=!1}){const[v,k]=g.useState(!1),j=m||x&&!u?t.length:0,_=j>0,M=_&&!v?j:0,I=t.slice(0,j).map(C=>C.headline).join(" · "),R=t.length>0&&M>=t.length;return r.jsx(JN,{$animate:p,children:r.jsxs(tR,{$compact:R,children:[_&&!v&&r.jsx(df,{$tight:!0,$last:R,$connected:f,children:r.jsxs(P0,{type:"button","aria-expanded":v,onClick:()=>k(C=>!C),children:[r.jsx(pf,{"aria-hidden":"true",children:r.jsx(Ms,{size:16})}),r.jsx(fR,{children:I})]})}),t.slice(M).map((C,P)=>{var Z,te;const N=M+P,$=u&&typeof i=="number"&&N>i,E=u&&typeof i=="number"&&N===i,z=$?"plan":E?"working":"done",B=!u||typeof i!="number"||N<i-1?"done":N===i-1?"working":"upcoming",Q=!!((Z=C.progress)!=null&&Z.length),J=N===t.length-1;return r.jsxs(df,{$tight:!Q,$last:J,$connected:f,children:[f&&!J&&B!=="upcoming"&&r.jsx(rR,{"aria-hidden":"true",$state:B,$tight:!Q,$superseded:m}),r.jsx(E0,{milestone:C,label:KS(C.headline,z),last:!0,collapsible:!0,placeholder:$,focused:E,startOpen:!u&&v,onCollapse:_&&v&&!E?()=>k(!1):void 0,progressBeat:E?s:void 0,superseded:m,typing:N===a,extra:!$&&((te=C.usage)!=null&&te.length)?r.jsx(UN,{usage:C.usage,title:C.headline}):void 0,icon:x&&!u&&!$?r.jsx(pf,{"aria-hidden":"true",children:r.jsx(Ms,{size:16})}):r.jsx(A0,{icon:C.icon,loading:a===N||E||u&&typeof i!="number"&&N===t.length-1,placeholder:$,muted:m})})]},N)}),!c&&!u&&r.jsx(zo,{time:Tn(t)})]})})}const lf=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function qN(){const[t,a]=g.useState(0);return g.useEffect(()=>{if(t>=lf.length-1)return;const i=setTimeout(()=>a(s=>s+1),3200);return()=>clearTimeout(i)},[t]),r.jsxs(r.Fragment,{children:[lf[t],r.jsxs(eR,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function Tn(t){const i=581+t.reduce((f,m)=>f+m.headline.length,0)%200,s=Math.floor(i/60)%24,c=i%60,u=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(c).padStart(2,"0")} ${u}`}function zo({time:t}){const[a,i]=g.useState(null),s=c=>i(u=>u===c?null:c);return r.jsx(oR,{"data-feedback-actions":!0,children:r.jsxs(Wf,{visibility:"always",time:t,children:[r.jsx(uf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>s("up"),children:r.jsx(im,{size:14})}),r.jsx(uf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>s("down"),children:r.jsx(sm,{size:14})}),r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(ni,{size:14})})]})})}function UN({usage:t,title:a}){const[i,s]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const c=u=>{u.key==="Escape"&&s(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[i]),t.length?r.jsxs(aR,{children:[r.jsxs(Ie,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(rn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[t.length," ",t.length===1?"tool":"tools"," used"]}),r.jsx(nN,{open:i,onClose:()=>s(!1),title:a,usage:t})]}):null}function VN({milestone:t,last:a}){return r.jsxs(dR,{children:[r.jsxs(uR,{children:[r.jsx(A0,{icon:t.icon}),!a&&r.jsx(vR,{})]}),r.jsx(E0,{milestone:t,last:a})]})}function GN({records:t,initial:a=3}){const[i,s]=g.useState(!1),c=i?t:t.slice(0,a),u=t.length-a;return r.jsxs(IR,{children:[c.map((p,f)=>r.jsx($0,{record:p},f)),u>0&&r.jsx(AR,{type:"button",onClick:()=>s(p=>!p),children:i?"Show less":`Show ${u} more`})]})}function A0({slotRef:t,hidden:a,loading:i,placeholder:s,muted:c}){return s?r.jsx(hf,{ref:t,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(pR,{})}):r.jsx(hf,{ref:t,"aria-hidden":"true",$hidden:a,$loading:i,children:r.jsxs(gR,{viewBox:"0 0 24 24",$loading:i,$muted:c&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function E0({milestone:t,label:a,last:i,typing:s,icon:c,collapsible:u=!0,extra:p,placeholder:f,focused:m,progressBeat:x,superseded:v,startOpen:k,onCollapse:w}){var J,Z,te;const L=a??t.headline;if(f)return r.jsx(mf,{$last:i,$dim:!0,children:r.jsxs(Ja,{as:"div",children:[c,r.jsx(gf,{children:L})]})});const j=!!((J=t.blocks)!=null&&J.length),_=!!p,M=!u||!!t.defaultOpen||!!k,[I,R]=g.useState(null),C=!!w,P=C?!0:I??M,N=u&&(j||_),$=!C&&N&&(!s||!!m),E=$&&!!m&&!!((Z=t.progress)!=null&&Z.length),z=()=>R(()=>!P),B=j&&(C||!u||P),Q=_&&(C||!u||P);return r.jsxs(mf,{$last:i,children:[r.jsxs(Ja,{as:C||N?"button":"div",type:C||N?"button":void 0,$interactive:C||$,"aria-expanded":C?!0:$?P:void 0,onClick:C?w:$?z:void 0,children:[c,r.jsx(gf,{$focused:!!m,children:L}),$&&!m&&r.jsx(yR,{"data-open":P||void 0,"aria-hidden":"true",children:r.jsx(rn,{size:14})})]}),(te=t.progress)!=null&&te.length?r.jsx(bR,{$indent:!!c,children:r.jsxs(xR,{children:[E&&r.jsx(wR,{type:"button","aria-expanded":P,"aria-label":P?"Hide details":"Show details",onClick:z,children:P?r.jsx(Hd,{size:16}):r.jsx(Yo,{size:16})}),r.jsx(KN,{steps:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,live:!!(s||m),beat:x,superseded:v,showAvatars:P||s||m})]})}):null,B&&r.jsx(MR,{$indent:!!c,children:t.blocks.map((re,ce)=>r.jsxs(LR,{children:[re.text&&r.jsx($R,{children:s?r.jsx(su,{text:re.text}):re.text}),re.label&&r.jsx(TR,{children:re.label}),re.bullets&&r.jsx(ER,{children:re.bullets.map((ae,G)=>r.jsx("li",{children:ae},G))}),re.checks&&r.jsx(PR,{children:re.checks.map((ae,G)=>r.jsxs("li",{children:[r.jsx(zR,{"aria-hidden":"true"}),r.jsx("span",{children:ae})]},G))}),re.records&&r.jsx(GN,{records:re.records})]},ce))}),Q&&r.jsx(iR,{$indent:!!c,children:p})]})}const YN=1350;function KN({steps:t,avatars:a,avatarsOnSettle:i,reached:s,live:c,showAvatars:u,beat:p,superseded:f}){const m=t.length-1,x=typeof p=="number",[v,k]=g.useState(c?0:m),w=g.useRef(c);g.useEffect(()=>{c&&!w.current&&(w.current=!0,k(0))},[c]),g.useEffect(()=>{if(x||!w.current||v>=m)return;const M=setTimeout(()=>k(I=>Math.min(I+1,m)),YN);return()=>clearTimeout(M)},[v,m,x]),g.useEffect(()=>{typeof p=="number"&&k(Math.min(p,m))},[p,m]);const L=typeof p=="number"?Math.min(p,m):v,j=L>=m,_=j&&!c;return r.jsxs(kR,{children:[r.jsx(CR,{$done:_,$live:c,$superseded:f,"aria-live":"polite",children:c?r.jsx(su,{text:t[L],caret:!1,speed:26}):t[L]},L),u&&(i?j:j||c)&&(a!=null&&a.length)?r.jsx(ZN,{seeds:a,total:s}):null]})}const cf=90;function ZN({seeds:t,total:a,max:i=5}){const s=t.slice(0,i),c=Math.max(a??0,t.length),u=c-s.length;return r.jsxs(jR,{"aria-label":`${c} people reached`,children:[s.map((p,f)=>r.jsx(SR,{style:{zIndex:s.length-f,animationDelay:`${f*cf}ms`},children:r.jsx(An,{size:"sm",src:Xo(p),name:p,alt:""})},p)),u>0&&r.jsxs(NR,{"aria-hidden":"true",style:{animationDelay:`${s.length*cf}ms`},children:["+",u]})]})}const QN=b.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,XN=Be`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,tl=mt`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,JN=b.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${XN} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${t=>t.$animate===!1&&"animation: none;"}

  ${tl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eR=b.span``,tR=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${t=>t.$compact?"var(--space-1)":"var(--space-3)"};
`,df=b.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${t=>t.$last?"0":t.$connected?t.$tight?"var(--space-3)":"var(--space-5)":t.$tight?"0":"var(--space-3)"};
`,nR=Be`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,rR=b.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${t=>t.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${t=>t.$state==="working"?mt`
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
        animation: ${nR} 1.25s linear infinite;
      `:t.$state==="upcoming"?mt`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:mt`
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
`,oR=b.div`
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
`,aR=b.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,iR=b.div`
  padding-top: var(--space-2);
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,uf=b(Ie)`
  &[data-active] { color: var(--color-content-brand); }
`;function su({text:t,onDone:a,speed:i=30,caret:s=!0}){const[c,u]=g.useState(0);g.useEffect(()=>{u(0)},[t]),g.useEffect(()=>{if(c>=t.length)return;const f=setTimeout(()=>u(m=>m+1),i);return()=>clearTimeout(f)},[c,t,i]);const p=c>=t.length;return g.useEffect(()=>{p&&(a==null||a())},[p]),r.jsxs(r.Fragment,{children:[t.slice(0,c),s&&r.jsx(lR,{$blink:p,"aria-hidden":"true"}),!p&&r.jsx(cR,{"aria-hidden":"true",children:t.slice(c)})]})}const sR=Be`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,lR=b.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${t=>t.$blink?sR:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cR=b.span`
  opacity: 0;
`,dR=b.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,uR=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,hf=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${t=>t.$hidden?"hidden":"visible"};
`,hR=Be`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,pR=b.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${hR} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,P0=b.button`
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
`,pf=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,fR=b.span`
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

  ${P0}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,mR=Be`
  to { transform: rotate(360deg); }
`,ff=56.5,gR=b.svg`
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
    stroke-dasharray: ${ff};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${t=>t.$loading?ff*.7:0};
    stroke: ${t=>t.$loading?"var(--color-content-tertiary)":t.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${mR} 2s linear infinite;
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
`,vR=b.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,mf=b.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${t=>t.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,Ja=b.div`
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
`,gf=b.span`
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

  ${Ja}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,yR=b.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${Ja}:hover &,
  ${Ja}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,xR=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,wR=b.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-5);
  height: var(--space-5);
  color: var(--color-content-tertiary);
  cursor: pointer;
  transition: color var(--duration-base) var(--ease-out);

  &:hover { color: var(--color-content-primary); }
  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,bR=b.div`
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,kR=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,_R=Be`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,CR=b.div`
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
  ${t=>t.$live&&mt`
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
    animation: ${_R} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,jR=b.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,z0=Be`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,SR=b.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${z0} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,NR=b.span`
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
  animation: ${z0} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,RR=Be`
  from { opacity: 0; }
  to   { opacity: 1; }
`,MR=b.div`
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
  animation: ${RR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,LR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,$R=b.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,TR=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,IR=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,AR=b.button`
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
`,ER=b.ul`
  margin: 0;
  padding-left: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: disc;

  & li {
    font-size: var(--text-sm);
    line-height: var(--line-height-normal);
    /* Lighter than the standard tertiary detail tone — the bullets are deep
       sub-context, so they sit a step quieter than the step's other text. */
    color: var(--color-content-disabled);
  }
`,PR=b.ul`
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
    font-size: var(--text-sm);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
`,zR=b.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function OR({size:t=20}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const DR=160,O0=g.forwardRef(function({onSend:a,working:i=!1,onStop:s,placeholder:c="Message Ultron…",compact:u=!1},p){const[f,m]=g.useState(""),x=g.useRef(null),v=f.trim().length>0;g.useImperativeHandle(p,()=>({focus:()=>{var _;return(_=x.current)==null?void 0:_.focus()}}),[]);const k=()=>{const _=x.current;_&&(_.style.height="auto",_.style.height=`${Math.min(_.scrollHeight,DR)}px`)},w=()=>{!v||i||(a(f),m(""),requestAnimationFrame(()=>{const _=x.current;_&&(_.style.height="auto")}))},L=_=>{_.preventDefault(),w()},j=_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),w())};return r.jsxs(BR,{onSubmit:L,$compact:u,children:[r.jsx(FR,{ref:x,rows:1,value:f,placeholder:c,"aria-label":"Message Ultron",$compact:u,onChange:_=>{m(_.target.value),k()},onKeyDown:j}),i?r.jsx(vf,{$float:!0,type:"button",variant:"primary",size:u?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:r.jsx(OR,{size:u?16:20})}):r.jsx(vf,{type:"submit",variant:"primary",size:u?"xs":"sm",iconOnly:!0,disabled:!v,"aria-label":"Send message",children:r.jsx(Hs,{size:u?14:18})})]})}),BR=b.form`
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
`,FR=b.textarea`
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
`,vf=b(Ie)`
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
`,yf=450;function lu(t,a){var j;const i=t.status==="needs_approval"||t.status==="recommended",s=i||t.status==="unresolved"||t.status==="monitoring",c=ru[t.id],u=a===1&&!!c,p=u?c.prompt:S0[t.id]??t.recommendation,f=u?c.record:_S[t.id],m=f?Array.isArray(f)?f:[f]:[],x=t.status==="unresolved"?yS:u?c.actions:t.actions,v=i&&(!u&&(((j=ou[t.id])==null?void 0:j.length)??0)>1||xS(p)),k=v?wS:x[x.length-1],w=v?[]:x.slice(0,-1),L=y0(t);return{needsDecision:i,actionable:s,onFollowUp:u,followUp:c,prompt:p,records:m,primaryLabel:k,secondaryLabels:w,purple:L}}function xf({thread:t,stage:a,expanded:i,detachActionable:s,detachAnalyzing:c,detachTrail:u,onToggle:p,onClose:f,onDecide:m,onAction:x,onRefinement:v,onSaveWorkflow:k}){const[w,L]=g.useState(!1),[j,_]=g.useState(!1),{actionable:M,prompt:I,records:R,primaryLabel:C,purple:P}=lu(t,a),$=t.status==="analyzing"&&!c,E=t.status==="resolved"||t.status==="auto_resolved",z=!s&&(M||P),B=E&&!u,Q=s?$:M||$||z,J=i&&(Q||B),Z=el(t),re=k0(t.id)||(J?"":t.assessment),ce=ae=>{x0(ae)?v(ae):x(t.id,ae)};return r.jsxs(eM,{"data-tone":Z,$expanded:i,children:[r.jsxs(aM,{children:[r.jsxs(sM,{type:"button","aria-expanded":J,"aria-label":J?"Collapse case":"Expand case",onClick:p,children:[r.jsx(An,{size:"md",src:nu(t.id),name:Go[t.id],alt:Go[t.id]??""}),r.jsxs(q0,{children:[r.jsx(U0,{children:_0(t)}),re&&r.jsx(V0,{children:re})]})]}),r.jsx(iM,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":J?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??p,children:f?r.jsx(Us,{size:20}):J?r.jsx(Ms,{size:16}):r.jsx(Hd,{size:16})})]}),J&&B&&r.jsx(lM,{children:r.jsx(cM,{children:r.jsx(WN,{milestones:N0(t)})})}),J&&Q&&r.jsxs(dM,{children:[M&&!s&&r.jsx(nl,{children:I}),M&&!s&&R.length>0&&r.jsx(SM,{children:R.map((ae,G)=>r.jsx($0,{record:ae},G))}),$&&r.jsx(G0,{role:"status","aria-live":"polite",children:r.jsx(UR,{thread:t,onDecide:m})}),z&&r.jsxs(cu,{children:[M&&C&&r.jsx(Gr,{variant:"primary",size:"sm",onClick:()=>ce(Is),children:Is}),M&&r.jsx(Gr,{variant:"tertiary",size:"sm",onClick:()=>v("No"),children:"No"}),M&&r.jsx(Q0,{variant:"tertiary",size:"sm","data-selected":j||void 0,onClick:()=>{_(!0),v("Other")},children:"Other"}),P&&(w?r.jsx(Ie,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Ot,{size:14}),children:"Saved"}):r.jsx(Ie,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(eo,{size:14}),onClick:()=>{k(t),L(!0)},children:"Save as workflow"}))]})]})]})}function wf({text:t,speed:a=16,onDone:i,instant:s=!1}){const[c,u]=g.useState(!1);return g.useEffect(()=>{u(!1)},[t]),g.useEffect(()=>{s&&(i==null||i())},[s]),s||c?r.jsx(r.Fragment,{children:t}):r.jsx(su,{text:t,speed:a,onDone:()=>{u(!0),i==null||i()}})}function D0({thread:t,stage:a,onAction:i,onRefinement:s,onSaveWorkflow:c,saved:u=!1,saveIntent:p=!1,onToggleSaveWorkflow:f,savedConversationally:m=!1,onSend:x,replying:v=!1,onStop:k,flat:w=!1}){const L=u||p,[j,_]=g.useState(!1),[M,I]=g.useState(!1),[R]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),[C,P]=g.useState(!1),[N,$]=g.useState(!1),E=g.useRef(null);g.useEffect(()=>{var q;N&&((q=E.current)==null||q.focus())},[N]);const z=u||m||C,{actionable:B,onFollowUp:Q,prompt:J,records:Z,primaryLabel:te,purple:re}=lu(t,a),ce=B&&!Q?ou[t.id]??w0(J).map(q=>({label:q})):void 0,ae=t.status==="resolved"||t.status==="auto_resolved",G=re||ae,F=q=>{x0(q)?s(q):i(t.id,q)},K=B&&!(ce&&ce.length>0)&&Z.length>0?Z[0]:void 0;if(G&&!B){const q=L0[t.id],T=j||!q,S=u&&!m&&!C;return r.jsxs(zM,{$divided:!0,children:[q&&r.jsx(OM,{children:r.jsx(wf,{text:q,onDone:()=>_(!0),instant:R})}),T&&!S&&r.jsxs(Fo,{$saved:z,"data-saved":z||void 0,children:[r.jsxs(X0,{children:[r.jsx(J0,{"aria-hidden":"true",children:r.jsx(eo,{size:16})}),r.jsx(eg,{children:r.jsx(wf,{text:"Want me to save this as a reusable workflow?",onDone:()=>I(!0),instant:R})})]}),M&&r.jsx(tg,{children:z?r.jsx(Gr,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(Ot,{size:14}),children:"Saved"}):r.jsx(Gr,{variant:"primary",size:"sm",onClick:()=>{P(!0),c(t)},children:"Save workflow"})})]}),T&&S&&r.jsx(F0,{})]})}return r.jsxs(oM,{$flat:w,"data-tone":el(t),children:[B&&r.jsxs(W0,{children:[r.jsx(nl,{children:J}),K&&r.jsx(H0,{children:r.jsx(An,{size:"md",src:Xo(K.avatarSeed),name:K.title,alt:K.title})})]}),ce&&ce.length>0?r.jsx(B0,{tasks:ce}):null,r.jsxs(cu,{children:[B&&te&&r.jsx(Gr,{variant:N?"secondary":"primary",size:"sm",onClick:()=>F(Is),children:Is}),B&&r.jsx(Gr,{variant:N?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),B&&r.jsx(Q0,{variant:"tertiary",size:"sm","data-selected":N||void 0,onClick:()=>$(!0),children:"Other"}),B&&!Q&&r.jsx(PM,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":L,"data-on":L||void 0,leadingArtwork:L?r.jsx(Ot,{size:14}):r.jsx(eo,{size:14}),onClick:()=>{u||f==null||f(t.id)},children:"Save as future workflow"})]}),B&&N&&r.jsx(EM,{children:r.jsx(O0,{ref:E,compact:!0,onSend:q=>x==null?void 0:x(q),working:v,onStop:k,placeholder:"Tell Ultron what to do…"})})]})}function WR({thread:t,stage:a,expanded:i,onAction:s,onRefinement:c,onSaveWorkflow:u,onToggleSaveWorkflow:p,saveIntent:f=!1,saved:m=!1}){const x=el(t),v=k0(t.id)||t.assessment;return r.jsxs(tM,{"data-tone":x,$expanded:i,children:[r.jsxs(nM,{$expanded:i,children:[r.jsx(An,{size:"md",src:nu(t.id),name:Go[t.id],alt:Go[t.id]??""}),r.jsxs(q0,{children:[r.jsx(U0,{children:_0(t)}),v&&r.jsx(V0,{children:v})]})]}),i&&r.jsx(rM,{children:r.jsx(D0,{flat:!0,thread:t,stage:a,onAction:s,onRefinement:c,onSaveWorkflow:u,onToggleSaveWorkflow:p,saveIntent:f,saved:m})})]})}function B0({tasks:t,interactive:a=!0}){return r.jsx(NM,{children:t.map((i,s)=>r.jsx(HR,{task:i,first:s===0,last:s===t.length-1,interactive:a},s))})}function HR({task:t,first:a,last:i,interactive:s=!0}){const[c,u]=g.useState(!1),p=!!t.detail&&s;return r.jsxs(RM,{children:[r.jsx(MM,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(LM,{})}),r.jsxs($M,{children:[r.jsxs(TM,{as:p?"button":"div",type:p?"button":void 0,$interactive:p,"aria-expanded":p?c:void 0,onClick:p?()=>u(f=>!f):void 0,children:[r.jsx(K0,{children:t.label}),p&&r.jsx(IM,{"data-open":c||void 0,"aria-hidden":"true",children:r.jsx(rn,{size:14})})]}),c&&p&&r.jsx(AM,{children:t.detail})]})]})}function qR({steps:t,completed:a}){const[i,s]=g.useState(a?t.length:1);g.useEffect(()=>{if(a){s(t.length);return}if(i>=t.length)return;const u=setTimeout(()=>s(p=>p+1),1600);return()=>clearTimeout(u)},[i,t.length,a]);const c=t.slice(0,i);return r.jsx(gM,{role:"status","aria-live":"polite",children:c.map((u,p)=>{const f=!a&&p===i-1,m=p===c.length-1;return r.jsxs(yM,{children:[r.jsxs(xM,{children:[r.jsx(CM,{$done:!f,"aria-hidden":"true",children:f?r.jsx(jM,{children:r.jsx(St,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(Ot,{size:16})}),!m&&r.jsx(wM,{})]}),r.jsxs(bM,{$last:m,children:[r.jsx(kM,{children:u.headline}),r.jsx(_M,{children:u.detail})]})]},p)})})}function UR({thread:t,onDecide:a,analyzed:i,hideDetail:s,hideTrigger:c}){const[u,p]=g.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(uM,{as:"button",type:"button",$interactive:!0,"aria-expanded":u,onClick:()=>p(f=>!f),children:[r.jsx(St,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(pM,{children:[r.jsx(fM,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&r.jsx(mM,{children:t.assessment})]}),r.jsx(hM,{"data-open":u||void 0,"aria-hidden":"true",children:r.jsx(rn,{size:14})})]}),u&&r.jsx(qR,{steps:j0(t.id),completed:i}),!i&&!c&&r.jsx(Y0,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})]})}function VR({thread:t,onDecide:a}){return r.jsx(Y0,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})}function fd(t,a){return{icon:t.icon,headline:t.headline,blocks:t.detail||t.bullets?[{text:t.detail||void 0,bullets:t.bullets}]:void 0,progress:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,usage:M0(a,ES(t))}}function GR(t,a){const i=M0(a,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:t.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function YR(t,a){const i=N0(t),s=t.timeline.filter(k=>k.done).length,c=s>0?Math.min(s,i.length):i.length,u=[GR(j0(t.id),t.id),...i.slice(0,c)],p=u.length;if(a.length===0){const k=u.map(w=>({kind:"activity",milestone:w}));return(t.status==="in_progress"||t.status==="monitoring")&&(G1[t.id]??[]).map(w=>fd(w,t.id)).forEach(w=>k.push({kind:"activity",milestone:w})),{items:k,reasoningCount:p}}const f=ru[t.id],m=[(G1[t.id]??[]).map(k=>fd(k,t.id)),((f==null?void 0:f.working)??[]).map(k=>fd(k,t.id))],x=k=>k===1&&f?f.prompt:S0[t.id]??t.recommendation,v=u.slice(0,p).map(k=>({kind:"activity",milestone:k}));return a.forEach((k,w)=>{v.push({kind:"question",text:x(w)}),v.push({kind:"message",text:k}),(m[w]??[]).forEach(L=>v.push({kind:"activity",milestone:L})),v.push({kind:"reply",text:OS(w)})}),{items:v,reasoningCount:p}}function KR({thread:t,outbound:a=[],chat:i=[],replying:s=!1,analyzing:c=!1,actionCard:u,footSlot:p,onCompleteRun:f,saveWorkflowFlagged:m=!1}){const x=t.status==="in_progress"||t.status==="monitoring",v=t.status==="resolved"||t.status==="auto_resolved",{items:k,reasoningCount:w}=YR(t,a),L=c||t.status==="in_progress",[j,_]=g.useState(c?Math.min(1,w):L?w:k.length),[M]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),I=a.length>0||x||v?k.length:w,R=t.status==="in_progress"&&a.length>0,[C,P]=g.useState(0);g.useEffect(()=>{P(0)},[j]),g.useEffect(()=>{if(j>=I)return;const ee=k[j],W=k[j-1];if((ee==null?void 0:ee.kind)==="question"||(ee==null?void 0:ee.kind)==="message"){const pe=setTimeout(()=>_(xe=>xe+1),0);return()=>clearTimeout(pe)}if((ee==null?void 0:ee.kind)==="reply"){if(R)return;const pe=setTimeout(()=>_(xe=>xe+1),yf);return()=>clearTimeout(pe)}if(R&&(W==null?void 0:W.kind)!=="message")return;const de=(W==null?void 0:W.kind)==="message"?yf:J1,ve=setTimeout(()=>_(pe=>pe+1),de);return()=>clearTimeout(ve)},[j,I,R]),g.useEffect(()=>{if(!R)return;const ee=W=>{var Se;if(W.key!=="t"&&W.key!=="T"||W.metaKey||W.ctrlKey||W.altKey)return;const de=W.target instanceof Element?W.target:null;if(de&&de.closest('input, textarea, [contenteditable="true"]'))return;const ve=k[j-1],pe=(ve==null?void 0:ve.kind)==="activity"?((Se=ve.milestone.progress)==null?void 0:Se.length)??0:0;if((ve==null?void 0:ve.kind)==="activity"&&C<pe-1){P(Ce=>Ce+1);return}const xe=k[j];(xe==null?void 0:xe.kind)==="activity"?(_(Ce=>Ce+1),P(0)):f==null||f()};return window.addEventListener("keydown",ee),()=>window.removeEventListener("keydown",ee)},[R,j,C,f]);const N=k.slice(0,j),$=[];for(const ee of N){if(ee.kind==="question"){$.push({type:"question",text:ee.text});continue}if(ee.kind==="message"){$.push({type:"msg",text:ee.text});continue}if(ee.kind==="reply"){$.push({type:"reply",text:ee.text});continue}const W=$[$.length-1];W&&W.type==="acts"?W.milestones.push(ee.milestone):$.push({type:"acts",milestones:[ee.milestone]})}const E=j<k.length,z=N.length>0&&N[N.length-1].kind==="activity",B=j>=I,[Q,J]=g.useState(!1);g.useEffect(()=>{if(!(B&&z&&(x||c)&&!v)){J(!1);return}J(!0);const ee=setTimeout(()=>J(!1),J1);return()=>clearTimeout(ee)},[B,z,j,x,c,v]);const Z=(x||c)&&(E||Q)&&z;let te=-1;$.forEach((ee,W)=>{ee.type==="acts"&&(te=W)});const re=[];for(const ee of k){if(ee.kind!=="activity"){re.push({type:"other"});continue}const W=re[re.length-1];W&&W.type==="acts"?W.milestones.push(ee.milestone):re.push({type:"acts",milestones:[ee.milestone]})}let ce=-1;re.forEach((ee,W)=>{ee.type==="acts"&&(ce=W)});const ae=$.findIndex(ee=>ee.type==="acts"),G=(ee,W,de=W)=>{const ve=$[ee],pe=(c||t.status==="in_progress")&&ee===ce,xe=re[ee],Se=pe&&xe&&xe.type==="acts"?xe.milestones:ve.milestones,Ce=pe?ve.milestones.length-1:void 0;return r.jsx(I0,{milestones:Se,focusIndex:Ce,focusBeat:pe&&R?C:void 0,typingIndex:ee===ce&&Z?ve.milestones.length-1:void 0,collapsed:ee<te,hideActions:de,running:pe,showConnectors:ee!==ae,reasoning:ee===ae,animateIn:!W&&!M})},F=[];for(let ee=0;ee<$.length;ee++){const W=$[ee];if(W.type==="question"){F.push({kind:"question",text:W.text});continue}if(W.type==="msg"){F.push({kind:"msg",text:W.text});continue}if(W.type==="reply"){F.push({kind:"response",gi:-1,text:W.text});continue}const de=$[ee+1];de&&de.type==="reply"?(F.push({kind:"response",gi:ee,text:de.text}),ee++):F.push({kind:"acts",gi:ee})}const q=(c||t.status==="in_progress")&&te>=0||s,T=N.length>0,S=s||x,H=(()=>{for(let ee=F.length-1;ee>=0;ee--){const W=F[ee];if(W.kind==="acts"||W.kind==="response"&&W.gi>=0)return ee}return-1})(),Y=F.findIndex(ee=>ee.kind==="question"),oe=Y===ae+1?Y:-1,he=ee=>ee.kind==="acts"?Tn($[ee.gi].milestones):ee.kind==="response"?Tn(ee.gi>=0?$[ee.gi].milestones:[]):Tn([]);return r.jsxs(r.Fragment,{children:[F.map((ee,W)=>{var xe,Se;const de=W===H?u:null;if(ee.kind==="question"){if(W===oe)return null;const Ce=F[W-1],Me=!!Ce&&(Ce.kind==="acts"||Ce.kind==="response")&&W-1!==H,Fe=W===Y;return r.jsxs(gd,{children:[Fe?r.jsx(bf,{thread:t,saveWorkflowFlagged:m}):r.jsx(XR,{text:ee.text,animate:!M}),Me&&r.jsx(zo,{time:he(Ce)})]},`q${W}`)}if(ee.kind==="msg")return r.jsx(JR,{messages:[ee.text],animate:!M},`m${W}`);if(ee.kind==="acts"){const Ce=$[ee.gi].milestones,Me=((xe=F[W+1])==null?void 0:xe.kind)==="question",Fe=G(ee.gi,!1,!!de||Me),Ue=W===ae,Ve=de||(Ue&&W+1===oe?r.jsx(bf,{thread:t,saveWorkflowFlagged:m}):null);return Ue&&Ve?r.jsxs(QM,{children:[Fe,Ve,r.jsx(zo,{time:Tn(Ce)})]},`a${W}`):r.jsxs(g.Fragment,{children:[Fe,de&&r.jsxs(gd,{children:[de,r.jsx(zo,{time:Tn(Ce)})]})]},`a${W}`)}const ve=ee.gi>=0,pe=ve?$[ee.gi].milestones:[];return r.jsxs(g.Fragment,{children:[r.jsx(Td,{activity:ve?G(ee.gi,!0):void 0,text:ee.text,feedbackTime:de||((Se=F[W+1])==null?void 0:Se.kind)==="question"?void 0:Tn(pe),showMark:!1,animateIn:!1}),de&&r.jsxs(gd,{children:[de,r.jsx(zo,{time:Tn(pe)})]})]},`resp${W}`)}),r.jsx(ZR,{messages:i,replying:s}),p&&Ds.createPortal(T?r.jsxs(VM,{role:S?"status":"img","aria-label":s?"Ultron is replying":q?"Ultron is working":"Ultron",children:[r.jsxs(KM,{"aria-hidden":"true",children:[r.jsx(kf,{$show:q,children:r.jsx(St,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(kf,{$show:!q,children:r.jsx(St,{mark:"magnetic2d",size:24,tone:"auto",state:S?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),q&&r.jsx(YM,{children:s?"Replying…":r.jsx(qN,{})})]}):null,p),H<0&&u]})}function Td({activity:t,text:a,body:i,feedbackTime:s,active:c=!1,showMark:u=!0,animateIn:p=!0}){const f=!!(t||i||s);return r.jsxs(ZM,{children:[f&&r.jsxs(XM,{$animate:p,children:[t,i,s&&r.jsx(zo,{time:s})]}),u&&r.jsx(JM,{$animate:p,role:c?"status":"img","aria-label":c?"Ultron is working":"Ultron",children:r.jsx(St,{mark:"magnetic2d",size:24,tone:"auto",state:c?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function md(){return[{icon:"clock",headline:"Reviewed your message"}]}function ZR({messages:t,replying:a=!1}){return!t.length&&!a?null:r.jsx(UM,{children:t.map((i,s)=>i.role==="operator"?r.jsx(ng,{children:r.jsx(og,{children:r.jsx(ag,{children:i.text})})},s):i.kind==="workflow_saved"?r.jsx(Td,{body:r.jsx(QR,{}),feedbackTime:Tn(md()),showMark:!1},s):r.jsx(Td,{activity:r.jsx(I0,{milestones:md(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:Tn(md()),showMark:!1},s))})}function QR(){return r.jsx(F0,{})}function F0(){return r.jsxs(Fo,{children:[r.jsxs(X0,{children:[r.jsx(J0,{"aria-hidden":"true",children:r.jsx(eo,{size:16})}),r.jsx(eg,{children:"Workflow saved for future use."})]}),r.jsx(tg,{children:r.jsx(Gr,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(Us,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function XR({text:t,animate:a=!0}){return r.jsx(BM,{$animate:a,children:t})}function bf({thread:t,saveWorkflowFlagged:a=!1}){const{prompt:i,records:s}=lu(t,0),c=ou[t.id]??w0(i).map(p=>({label:p})),u=!(c&&c.length>0)&&s.length>0?s[0]:void 0;return r.jsxs(FM,{"data-tone":el(t),children:[r.jsxs(W0,{children:[r.jsx(nl,{children:i}),a?r.jsx(kr,{content:"Saved as workflow",children:r.jsx(WM,{"aria-label":"Saved as workflow",children:r.jsx(eo,{size:18})})}):u&&r.jsx(H0,{children:r.jsx(An,{size:"md",src:Xo(u.avatarSeed),name:u.title,alt:u.title})})]}),c&&c.length>0?r.jsx(B0,{tasks:c,interactive:!1}):null]})}function JR({messages:t,animate:a=!0}){return t.length?r.jsx(HM,{children:t.map((i,s)=>r.jsx(ng,{children:r.jsx(og,{$animate:a,children:r.jsx(ag,{children:i})})},s))}):null}const eM=b.div`
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
`,tM=b.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${t=>t.$expanded?mt`
        background: var(--color-bg-primary);
        border: 1px solid var(--color-border-opaque);
        box-shadow: var(--shadow-below-md);
      `:mt`
        background: var(--color-bg-primary);
        border: 1px solid transparent;
        &:hover {
          transform: translateY(-1px);
          box-shadow: var(--shadow-below-md);
        }
      `}

  /* Collapsed cards carry the semantic tonal fill (shared with the feed list
     cards + sidebar dots); the expanded front card stays on the white panel. */
  &[data-tone='orange'] { ${t=>t.$expanded?"":"background-color: var(--color-orange-bg-tertiary);"} }
  &[data-tone='green']  { ${t=>t.$expanded?"":"background-color: var(--color-green-bg-tertiary);"} }
  &[data-tone='blue']   { ${t=>t.$expanded?"":"background-color: var(--color-blue-bg-tertiary);"} }
  &[data-tone='slate']  { ${t=>t.$expanded?"":"background-color: var(--color-slate-bg-tertiary);"} }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,nM=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${t=>t.$expanded&&mt`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,rM=b.div`
  padding: var(--space-4);
`,oM=b.div`
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

  /* Flat: the card is embedded inside another surface (the deck's combined
     card), so it drops its own border / shadow / fill / padding and reads as a
     plain block of the host card. */
  ${t=>t.$flat&&mt`
    border: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    padding: 0;
    &:hover { transform: none; box-shadow: none; }
  `}
`,W0=b.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,H0=b.span`
  flex-shrink: 0;
  display: inline-flex;
`,aM=b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,iM=b(Ie)`
  flex-shrink: 0;
  color: var(--color-content-inverse-tertiary);
  transition: background-color var(--duration-base) var(--ease-out),
              color var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out);

  &:hover {
    background: var(--color-bg-tertiary);
    color: var(--color-content-primary);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover { transform: none; }
  }
`,sM=b.button`
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
`,q0=b.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,U0=b.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,V0=b.span`
  font-family: var(--font-sans);
  /* Matches the title size (14px) — one unified header font, per the design. */
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,lM=b.div`
  overflow: hidden;
`,cM=b.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,dM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,G0=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,uM=b.div`
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
`,hM=b.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;b(G0)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const pM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,fM=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,mM=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,gM=b.div`
  display: flex;
  flex-direction: column;
`,vM=Be`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,yM=b.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${vM} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,xM=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,wM=b.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,bM=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
`,kM=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,_M=b.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,CM=b.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${t=>t.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,jM=b.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,Y0=b(Ie)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,SM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,NM=b.div`
  display: flex;
  flex-direction: column;
`,Ps="var(--space-8)",RM=b.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,MM=b.div`
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
  &[data-first]::before { top: calc(${Ps} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Ps} / 2); }
  &[data-first][data-last]::before { display: none; }
`,LM=b.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Ps} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,$M=b.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,TM=b.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Ps};
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,K0=b.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,IM=b.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,AM=b.p`
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
`,nl=b.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Z0=Be`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,cu=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${Z0} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,EM=b.div`
  animation: ${Z0} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Gr=b(Ie)`
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
`,Q0=b(Ie)`
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
`,PM=b(Ie)`
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
`,zM=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${t=>t.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,OM=b.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Fo=b.div`
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

  ${t=>!t.$saved&&mt`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,X0=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,J0=b.span`
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
  ${Fo}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Fo}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Fo}[data-saved] & { color: var(--color-content-disabled); }
`,eg=b.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Fo}[data-saved] & { color: var(--color-content-disabled); }
`,tg=b(cu)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,DM=Be`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,BM=b.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${DM} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,FM=b.div`
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
  ${nl} { color: var(--color-content-disabled); }
  ${K0} { color: var(--color-content-disabled); }
`,WM=b.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,HM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,ng=b.div`
  display: flex;
  justify-content: flex-end;
`,du=Be`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,rg=Be`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,qM=Be`
  from { opacity: 0; }
  to   { opacity: 1; }
`,og=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${du} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ag=b.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,UM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;b.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const VM=b.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${rg} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,GM=Be`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,YM=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${GM} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,KM=b.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,kf=b.span`
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
`,ZM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${tl}
`,gd=b.div`
  display: contents;
  ${tl}
`,QM=b.div`
  display: flex;
  flex-direction: column;
  ${tl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,XM=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${qM} 380ms var(--ease-out) 160ms both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,JM=b.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${rg} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${du} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${du} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const eL={"Coverage Recovery":Fa,"Fill Optimization":Fa,Recruiting:Fa,Users:Fa,Attendance:Ur,"Attendance Recovery":Ur,"Time Off":Ur,Scheduling:Ur,Compliance:qs,Onboarding:Vr,"Payroll Operations":K5,Invoicing:Oo,Reporting:u1,"Marketplace Optimization":u1,Engagement:Ls,"Autonomous Operations":Ws},tL=t=>eL[t]??Ws,_f=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],nL=2800,rL=200,oL=6,aL=2200,Ua=520;function iL({onDetectRisk:t,deckActive:a=!1,deck:i}){const[s,c]=g.useState(0),u=g.useRef(t);u.current=t;const p=g.useRef(new Set),[f,m]=g.useState(!1),x=g.useRef(null);g.useEffect(()=>{const N=setInterval(()=>c($=>($+1)%_f.length),nL);return()=>clearInterval(N)},[]);const v=Math.min(oL,ws.length),[k,w]=g.useState([]),L=g.useRef(0),j=g.useRef(ws.filter(N=>!N.risk)),_=g.useRef(ws.filter(N=>N.risk)),M=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),I=()=>5+Math.floor(Math.random()*5),R=()=>{const N=M.current,$=_.current;if($.length>0&&N.sinceRisk>=N.gap)return N.sinceRisk=0,N.gap=I(),$[N.risk++%$.length];N.sinceRisk+=1;const E=j.current;return E.length>0?E[N.routine++%E.length]:$[N.risk++%$.length]},C=N=>N.risk?"risk":Math.random()<.28?"action":"none",P=g.useRef(null);return g.useEffect(()=>{if(ws.length===0){w([]);return}if(a)return;M.current={routine:0,risk:0,sinceRisk:0,gap:I()},L.current=0;const N=Array.from({length:v},()=>{const z=R();return{key:L.current++,event:z,phase:"in",outcome:C(z),resolved:!0}});if(N.length>0){const z=N[N.length-1];z.resolved=!1,P.current={key:z.key,event:z.event,outcome:z.outcome}}else P.current=null;w(N);const $=[],E=setInterval(()=>{var Z;const z=R(),B=L.current++,Q=C(z),J=P.current;J&&J.outcome==="risk"&&(m(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>m(!1),2800),p.current.has(J.event.id)||(p.current.add(J.event.id),(Z=u.current)==null||Z.call(u,J.event))),P.current={key:B,event:z,outcome:Q},w(te=>{const re=te.filter(G=>G.phase!=="leaving"),ce=re.length>=v?re[0].key:null;return[...te.map(G=>G.key===ce?{...G,phase:"leaving"}:J&&G.key===J.key&&!G.resolved?{...G,resolved:!0}:G),{key:B,event:z,phase:"entering",outcome:Q,resolved:!1}]}),$.push(setTimeout(()=>{w(te=>te.map(re=>re.key===B?{...re,phase:"in"}:re))},40)),$.push(setTimeout(()=>{w(te=>te.filter(re=>re.phase!=="leaving"))},Ua))},aL);return()=>{clearInterval(E),$.forEach(clearTimeout),x.current&&clearTimeout(x.current)}},[v,a]),r.jsxs(sL,{children:[r.jsxs(lL,{children:[r.jsx(cL,{children:r.jsx(St,{mark:"circle",size:rL,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),r.jsx(dL,{children:"Ultron"}),r.jsx(uL,{role:"status","aria-live":"polite",children:r.jsxs(pL,{children:[r.jsx(fL,{children:_f[s]}),r.jsxs(mL,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},s)})]}),a?r.jsx(vL,{children:i},"deck"):k.length>0&&r.jsx(gL,{"aria-label":"Live event feed",children:k.map(N=>{const $=tL(N.event.capability);return r.jsx(yL,{"data-phase":N.phase,"aria-hidden":N.phase==="leaving"||void 0,children:r.jsx(xL,{children:r.jsxs(wL,{"data-outcome":N.resolved?N.outcome:"pending",children:[r.jsxs(bL,{children:[r.jsx(kL,{"aria-hidden":"true",children:r.jsx($,{size:16})}),r.jsxs(_L,{children:[r.jsx(RL,{children:N.event.capability}),r.jsx(ML,{children:N.event.title})]})]}),r.jsx(CL,{children:N.resolved?N.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx(St,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(jL,{children:"Risk detected"})]}):N.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx(St,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(NL,{children:"Action required"})]}):r.jsx(SL,{children:"No action needed"}):r.jsx(St,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},N.key)})},"feed")]})}const sL=b.div`
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
`,uu=Be`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,lL=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${uu} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cL=b.div`
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
`,dL=b.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,uL=b.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,hL=Be`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,pL=b.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${hL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,fL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,ig=Be`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,mL=b.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${ig} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,gL=b.div`
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
  animation: ${uu} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,vL=b.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${uu} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,yL=b.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${Ua}ms var(--ease-out, ease),
    opacity ${Ua}ms var(--ease-out, ease),
    transform ${Ua}ms var(--ease-out, ease);

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
    transition: opacity ${Ua}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,xL=b.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,wL=b.div`
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
`,bL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,kL=b.span`
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
`,_L=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,CL=b.div`
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
    animation: ${ig} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const jL=b.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,SL=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,NL=b.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,RL=b.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,ML=b.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,LL=5e3,$L=5,Ns=320,TL=t=>t.status==="needs_approval"||t.status==="recommended";function IL({threads:t,stageById:a,onAction:i,onRefinement:s,onSaveWorkflow:c,onToggleSaveWorkflow:u,pendingWorkflowIds:p,savedWorkflowIds:f,onReveal:m,onClose:x}){const[v]=g.useState(()=>t.filter(TL).map(($,E)=>({t:$,index:E})).sort(($,E)=>Vo[$.t.severity]-Vo[E.t.severity]||$.index-E.index).slice(0,$L).map(({t:$})=>$.id)),[k,w]=g.useState(1),[L,j]=g.useState(new Set),[_,M]=g.useState(new Set),I=g.useRef(new Map);g.useEffect(()=>{if(k>=v.length)return;const $=setTimeout(()=>w(E=>E+1),LL);return()=>clearTimeout($)},[k,v.length]),g.useEffect(()=>{const $=E=>{E.key==="Escape"&&x()};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[x]),g.useEffect(()=>{const $=I.current;return()=>{$.forEach(E=>clearTimeout(E))}},[]);const R=v.findIndex($=>!L.has($));g.useEffect(()=>{if(v.length>0&&R===-1){const $=setTimeout(x,260);return()=>clearTimeout($)}},[R,v.length,x]);const C=Math.max(k,R+1);g.useEffect(()=>{v.slice(0,C).forEach($=>m==null?void 0:m($))},[C]);const P=($,E)=>{M(B=>new Set(B).add($.id));const z=setTimeout(()=>{M(B=>{const Q=new Set(B);return Q.delete($.id),Q}),j(B=>new Set(B).add($.id)),I.current.delete($.id),i($.id,E)},Ns);I.current.set($.id,z)},N=v.length-L.size;return r.jsxs(AL,{role:"region","aria-label":"New cases",children:[r.jsxs(PL,{children:[r.jsx(zt,{children:"Needs your decision"}),r.jsx(no,{children:N}),r.jsx(zL,{}),r.jsx(Ie,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:x,children:r.jsx(qd,{size:16})})]}),r.jsx(EL,{children:r.jsx(OL,{children:v.slice(0,C).map(($,E)=>{if(L.has($))return null;const z=t.find(B=>B.id===$);return z?r.jsx(BL,{"data-exiting":_.has($)||void 0,children:r.jsx(WR,{thread:z,stage:a[$]??0,expanded:E===R,onAction:(B,Q)=>P(z,Q),onRefinement:s,onSaveWorkflow:c,onToggleSaveWorkflow:u,saveIntent:p.includes($),saved:f.includes($)})},$):null})})})]})}const AL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,EL=b.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,PL=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,zL=b.div`
  flex: 1;
`,OL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,DL=Be`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,BL=b.div`
  animation: ${DL} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${Ns}ms var(--ease-out, ease),
    transform ${Ns}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${Ns}ms linear;
    &[data-exiting] { transform: none; }
  }
`,FL={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Cf={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},WL=["new","working","done"],HL=280;function qL({threads:t,stageById:a,section:i,analyzedIds:s,outboundByThread:c,chatByThread:u,selectedId:p,onDecide:f,onAction:m,onCompleteRun:x,onRefinement:v,onSaveWorkflow:k,pendingWorkflowIds:w,onToggleSaveWorkflow:L,savedWorkflowIds:j,onSend:_,replyingIds:M,onStop:I,onClose:R,onDetectRisk:C,onRevealNew:P}){const[N,$]=g.useState(!1),E=()=>{N||($(!0),window.setTimeout(()=>{$(!1),R()},HL))},[z,B]=g.useState(!1);g.useEffect(()=>{if(i!=="live"){B(!1);return}const W=de=>{if(de.key!=="t"&&de.key!=="T"||de.metaKey||de.ctrlKey||de.altKey)return;const ve=de.target instanceof Element?de.target:null;ve&&ve.closest('input, textarea, [contenteditable="true"]')||B(pe=>!pe)};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[i]);const Q=(W,de)=>(W.t.status==="analyzing"?1:0)-(de.t.status==="analyzing"?1:0)||Vo[W.t.severity]-Vo[de.t.severity]||W.index-de.index,J=t.map((W,de)=>({t:W,index:de})).filter(({t:W})=>FL[i].includes(W.status)).sort(Q).map(({t:W})=>W.id),[Z,te]=g.useState(()=>p??null),re=g.useRef({}),ce=g.useRef(null),ae=W=>{var de;W==="Other"&&((de=ce.current)==null||de.focus()),v(W)},G=g.useRef(null),F=g.useRef(null),[K,q]=g.useState(null),T=g.useRef(void 0);g.useEffect(()=>{var W;if(T.current===void 0){T.current=p;return}!p||p===T.current||(T.current=p,te(p),(W=re.current[p])==null||W.scrollIntoView({behavior:"smooth",block:"start"}))},[p]);const S=WL.includes(i),H=S?p&&J.includes(p)?p:J[0]??null:null;g.useEffect(()=>{var Oe;const W=G.current,de=F.current;if(!W||!de)return;const pe=((Oe=window.matchMedia)==null?void 0:Oe.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",xe=160;let Se=!0,Ce=W.scrollHeight;const Me=()=>{Se=W.scrollHeight-W.scrollTop-W.clientHeight<=xe};W.addEventListener("scroll",Me,{passive:!0});let Fe=0;const Ue=()=>{Fe=performance.now()};W.addEventListener("pointerdown",Ue,{passive:!0});const Ve=new ResizeObserver(()=>{const Ye=W.scrollHeight,Ge=performance.now()-Fe<500;Ye>Ce+1&&Se&&!Ge&&W.scrollTo({top:Ye,behavior:pe}),Ce=Ye});return Ve.observe(de),()=>{W.removeEventListener("scroll",Me),W.removeEventListener("pointerdown",Ue),Ve.disconnect()}},[H,i]),g.useEffect(()=>{if(!S||!H)return;const W=G.current;if(!W)return;const de=()=>W.scrollTo({top:W.scrollHeight,behavior:"auto"}),ve=requestAnimationFrame(de),pe=[80,240,480].map(xe=>window.setTimeout(de,xe));return()=>{cancelAnimationFrame(ve),pe.forEach(clearTimeout)}},[H,S]);const Y=H?t.find(W=>W.id===H)??null:null,oe=!!Y&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(Y.status)||y0(Y)),he=oe&&Y?Y:null,ee=!(oe&&Y&&["needs_approval","recommended","unresolved","monitoring"].includes(Y.status))||!!(Y!=null&&Y.analysisResult);return i==="live"?r.jsx(jf,{$static:!0,children:r.jsx(iL,{onDetectRisk:C,deckActive:z,deck:z?r.jsx(IL,{threads:t,stageById:a,onAction:m,onRefinement:ae,onSaveWorkflow:k,onToggleSaveWorkflow:L,pendingWorkflowIds:w,savedWorkflowIds:j,onReveal:P,onClose:()=>B(!1)}):null})},"live"):r.jsxs(jf,{$closing:N,children:[r.jsx(GL,{ref:G,children:S?r.jsx(Sf,{ref:F,children:H===null?r.jsx(Nf,{role:"status",children:Cf[i]}):(()=>{const W=t.find(Me=>Me.id===H);if(!W)return null;const de=W.status==="analyzing",ve=W.status==="resolved"||W.status==="auto_resolved",pe=W.status==="in_progress",xe=W.status==="needs_approval"||W.status==="recommended",Se=W.status==="monitoring",Ce=W.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(XL,{children:r.jsx(xf,{thread:W,stage:a[W.id]??0,expanded:pe?!1:ee,detachActionable:oe,detachAnalyzing:de,detachTrail:ve||Ce,onToggle:()=>{},onClose:E,onDecide:f,onAction:m,onRefinement:ae,onSaveWorkflow:k},W.id)}),(de||xe||pe||ve||Se||Ce)&&r.jsx(KR,{thread:W,outbound:c[W.id]??[],chat:u[W.id]??[],replying:M.includes(W.id),analyzing:de,footSlot:K,onCompleteRun:()=>x(W.id),saveWorkflowFlagged:w.includes(W.id)||j.includes(W.id),actionCard:he&&he.id===W.id?r.jsx(D0,{thread:he,stage:a[he.id]??0,onAction:m,onRefinement:ae,onSaveWorkflow:k,saveIntent:w.includes(he.id),onToggleSaveWorkflow:L,saved:j.includes(he.id),savedConversationally:(u[he.id]??[]).some(Me=>Me.kind==="workflow_saved"),onSend:Me=>_(he.id,Me),replying:M.includes(he.id),onStop:()=>I(he.id)},`action-${he.id}`):void 0},W.id)]})})()}):r.jsx(Sf,{ref:F,children:J.length===0?r.jsx(Nf,{role:"status",children:Cf[i]}):J.map(W=>{const de=t.find(ve=>ve.id===W);return de?r.jsx(QL,{ref:ve=>{re.current[W]=ve},children:r.jsx(xf,{thread:de,stage:a[W]??0,expanded:Z===W,onToggle:()=>te(ve=>ve===W?null:W),onDecide:f,onAction:m,onRefinement:v,onSaveWorkflow:k})},W):null})})}),S&&H&&Y&&r.jsx(YL,{children:r.jsxs(KL,{children:[r.jsx(ZL,{ref:q}),Y.status==="analyzing"&&!s.includes(Y.id)&&r.jsx(VR,{thread:Y,onDecide:f}),r.jsx(O0,{ref:ce,onSend:W=>_(H,W),working:M.includes(H),onStop:()=>I(H),placeholder:vS(Y.status,M.includes(H))},`composer-${H}`)]})})]},"feed")}const UL=Be`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,VL=Be`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,jf=b.div`
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

  ${t=>!t.$static&&!t.$closing&&mt`
    animation: ${VL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${t=>t.$closing&&mt`
    animation: ${UL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,GL=b.div`
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
`,YL=b.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,KL=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,ZL=b.div`
  display: flex;
  &:empty { display: none; }
`,Sf=b.div`
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
`,QL=b.div`
  scroll-margin-top: var(--space-5);
`,XL=b.div`
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
`,Nf=b.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,JL={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function Rf(t,a){const i=JL[t];return i?a==="done"?i.done:a==="new"?i.new:i.working:t}const Id=32;function e$(){return r.jsxs(t$,{children:[r.jsx(n$,{"aria-hidden":"true",children:r.jsx(St,{mark:"circle",size:Id,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(r$,{children:"Ultron"}),r.jsx(no,{variant:"success",children:"Live"})]})}const t$=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,n$=b.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${Id}px;
  height: ${Id}px;
`,r$=b.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,o$=45;function a$({text:t,className:a}){const[i,s]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(t.length);return}s(0);let p=0;const f=setInterval(()=>{p+=1,s(p),p>=t.length&&clearInterval(f)},o$);return()=>clearInterval(f)},[t]);const c=i>=t.length;return r.jsxs(i$,{className:a,children:[t.slice(0,i),!c&&r.jsx(l$,{"aria-hidden":"true",children:"|"})]})}const i$=b.span`
  white-space: nowrap;
`,s$=Be`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,l$=b.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${s$} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,vd=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function c$(){const t=g.useMemo(()=>["All",...Array.from(new Set(vd.map(c=>c.tag)))],[]),[a,i]=g.useState("All"),s=a==="All"?vd:vd.filter(c=>c.tag===a);return r.jsx(d$,{children:r.jsxs(u$,{children:[r.jsxs(h$,{children:[r.jsx(St,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(p$,{children:[r.jsx(f$,{children:"Memory"}),r.jsx(m$,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(g$,{role:"tablist","aria-label":"Filter memories by category",children:t.map(c=>r.jsx(v$,{type:"button",role:"tab","aria-selected":a===c,$active:a===c,onClick:()=>i(c),children:c},c))}),r.jsx(y$,{children:s.map((c,u)=>r.jsx(x$,{children:r.jsxs(w$,{children:[r.jsx(b$,{children:c.title}),r.jsx(k$,{children:c.detail})]})},u))})]})})}const d$=b.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,u$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,h$=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,p$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,f$=b.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,m$=b.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,g$=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,v$=b.button`
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
`,y$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,x$=b.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,w$=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,b$=b.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,k$=b.span`
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
`;const Ad=[{id:"employees",label:"Employees",icon:r.jsx(Fa,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx(Ur,{size:16})},{id:"locations",label:"Locations",icon:r.jsx(am,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(Vr,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(qs,{size:16})}];b.div`
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
`;function _$({collectionId:t}){const a=Ad.find(i=>i.id===t)??Ad[0];return r.jsxs(C$,{children:[r.jsxs(j$,{children:[r.jsx(S$,{children:a.label}),r.jsx(no,{children:"Account database"})]}),r.jsxs(N$,{role:"status",children:[r.jsx(R$,{"aria-hidden":"true",children:r.jsx(tm,{size:24})}),r.jsxs(M$,{children:[a.label," — demo stub"]}),r.jsxs(L$,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const C$=b.div`
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
`,j$=b.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,S$=b.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,N$=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,R$=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,M$=b.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,L$=b.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function $$(t){const a=[t.activeId,t.secActiveId];return t.selectedPersonaId&&a.push("persona",t.selectedPersonaId),t.activePageId&&a.push("page",t.activePageId),"#"+a.map(encodeURIComponent).join("/")}function T$(t){const a=t.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(c=>{try{return decodeURIComponent(c)}catch{return c}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let c=2;c<i.length-1;c+=2){const u=i[c],p=i[c+1];u==="persona"?s.selectedPersonaId=p:u==="page"&&(s.activePageId=p)}return s}function I$(t,a){const i=g.useRef("");g.useEffect(()=>{const s=()=>{const u=T$(window.location.hash);u.activeId!==void 0&&a.setActiveId(u.activeId),u.secActiveId!==void 0&&a.setSecActiveId(u.secActiveId),a.setSelectedPersonaId(u.selectedPersonaId??null),a.setActivePageId(u.activePageId??null)};window.location.hash&&s();const c=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),g.useEffect(()=>{const s=$$(t);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[t.activeId,t.secActiveId,t.selectedPersonaId,t.activePageId])}const Ed="ultron-theme";function A$(){if(typeof window>"u")return null;const t=window.localStorage.getItem(Ed);return t==="light"||t==="dark"?t:null}function E$(t){const a=document.documentElement;a.classList.toggle("dark",t==="dark"),a.classList.toggle("light",t==="light")}function P$(){const t=Xd("(prefers-color-scheme: dark)"),[a,i]=g.useState(A$);g.useEffect(()=>{E$(a),!(typeof window>"u")&&(a?window.localStorage.setItem(Ed,a):window.localStorage.removeItem(Ed))},[a]);const s=a??(t?"dark":"light"),c=g.useCallback(()=>{const u=s==="dark"?"light":"dark";i(u===(t?"dark":"light")?null:u)},[s,t]);return{theme:s,toggle:c}}const z$=b.button`
  position: fixed;
  top: var(--space-3);
  right: var(--space-3);
  z-index: var(--z-sticky);

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;

  border-radius: var(--radius-full);
  border: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
  color: var(--color-content-secondary);
  box-shadow: var(--shadow-below-low);
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-default),
    color var(--duration-fast) var(--ease-default),
    border-color var(--duration-fast) var(--ease-default);

  &:hover {
    background: var(--color-bg-secondary);
    color: var(--color-content-primary);
    border-color: var(--color-border-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }

  & svg {
    display: block;
  }
`;function O$(){const{theme:t,toggle:a}=P$(),i=t==="dark",s=i?"Switch to light mode":"Switch to dark mode";return r.jsx(z$,{type:"button",onClick:a,"aria-label":s,"aria-pressed":i,title:s,children:i?r.jsx(Kf,{size:18}):r.jsx(dm,{size:18})})}const Mf=[{id:"ultron",label:"Ultron",icon:r.jsx(St,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(CC,{})},{id:"engaged",label:"Engaged",icon:r.jsx(jC,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(SC,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(NC,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(RC,{})}],Lf=[{id:"apps",label:"Apps",icon:r.jsx(MC,{})}],$f=[{id:"docs",label:"Document Studio",icon:r.jsx(LC,{})},{id:"form",label:"Form",icon:r.jsx($C,{})},{id:"tasks",label:"Tasks",icon:r.jsx(TC,{})},{id:"policy",label:"Policy",icon:r.jsx(IC,{}),activeIcon:r.jsx("img",{src:oS,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(eo,{}),activeIcon:r.jsx("img",{src:aS,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(AC,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(EC,{})}],D$=b.button`
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
`,B$=Be`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,F$=Be`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,W$=Be`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,H$=b.span`
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
      ${B$} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${F$} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${W$} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,q$={needs_attention:r.jsx(om,{size:16}),live:r.jsx(St,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:r.jsx(_r,{size:16})},U$={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function V$(){const[t,a]=g.useState("ultron"),[i,s]=g.useState("home-overview"),[c,u]=g.useState(null),[p,f]=g.useState(null),[m,x]=g.useState("ultron"),[v,k]=g.useState("employees"),w=GS(),[L,j]=g.useState(!0),_=L?"live":w.selectedThread?U$[w.selectedThread.status]:"new";I$({activeId:t,secActiveId:i,selectedPersonaId:c,activePageId:p},{setActiveId:a,setSecActiveId:s,setSelectedPersonaId:u,setActivePageId:f});const M=N=>N.map($=>({...$,isActive:$.id===t,onClick:$.id==="ultron"?()=>a("ultron"):void 0})),I=[{id:"memory",label:"Memory",icon:r.jsx(Fs,{size:16}),isActive:m==="memory",onClick:()=>x("memory")},{id:"settings",label:"Settings",icon:r.jsx(Zf,{size:16})}],R=r.jsx(g0,{children:m==="memory"?"Memory":m==="account"?"Account database":"Ultron"}),C=m==="account"?Ad.map(N=>({type:"single",item:{id:N.id,label:N.label,icon:N.icon,isActive:v===N.id,onClick:()=>k(N.id)}})):w.groups.flatMap(N=>{const $=N.id==="needs_attention"?"new":N.id==="resolved"?"done":"working",E=N.id==="needs_attention"?N.threads.filter(B=>B.status==="analyzing"||w.revealedNewIds.includes(B.id)):N.threads,z={type:"group",group:{id:N.id,label:N.id==="needs_attention"?"New":N.label,icon:q$[N.id],trailingBadge:r.jsx(no,{children:E.length}),defaultExpanded:!0,outlined:!1,children:E.map(B=>({id:B.id,label:B.id.startsWith("detected_")?r.jsx(a$,{text:Rf(B.name,$)}):Rf(B.name,$),icon:$==="new"?B.status==="analyzing"?r.jsx(St,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx(St,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):$==="working"?r.jsx(St,{mark:"orbit2d",size:32,tone:"auto",state:B.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx(St,{mark:"pulse",size:32,tone:"auto",state:B.status==="unresolved"?"idle":"static",color:B.status==="unresolved"?"var(--color-orange-content-tertiary)":w.viewedIds.includes(B.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:m==="ultron"&&!L&&_===$&&w.selectedId===B.id,onClick:()=>{x("ultron"),j(!1),w.setSelectedId(B.id)},trailingSlot:w.savedWorkflowIds.includes(B.id)?r.jsx(kr,{content:"Saved as workflow",placement:"top",children:r.jsx(H$,{"aria-label":"Saved as workflow",children:r.jsx(eo,{})})}):void 0}))}};return N.id==="resolved"?[{type:"divider",id:"done-divider"},z]:N.id==="live"?[{type:"divider",id:"working-divider"},z]:[z]}),P=[{id:"main",label:"Workspace",items:M(Mf)},{id:"tools",label:"Tools",items:M(Lf)},{id:"bottom",label:"Apps",items:M($f)}];return r.jsxs(r.Fragment,{children:[r.jsx(O$,{}),r.jsx(rS,{items:M(Mf),toolItems:M(Lf),bottomItems:M($f),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:C,menuHeader:m==="ultron"?r.jsx(D$,{$active:L,onClick:()=>{x("ultron"),j(!0)},"aria-label":"Live — Ultron presence","aria-current":L?"page":void 0,children:r.jsx(e$,{})}):void 0,pageEntries:I,showSecondaryNav:!0,showTopNav:m!=="ultron",showSearch:!1,heading:R,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:t,secActiveId:i,activePageId:p,selectedPersonaId:c,moduleGroups:P,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:N=>{N==="ultron"&&a("ultron")},onSelectPersona:u},children:m==="memory"?r.jsx(c$,{}):m==="account"?r.jsx(_$,{collectionId:v}):r.jsx(qL,{threads:w.threads,stageById:w.stageById,section:_,analyzedIds:w.analyzedIds,outboundByThread:w.outboundByThread,chatByThread:w.chatByThread,selectedId:w.selectedId,onDecide:w.decide,onAction:w.commit,onCompleteRun:w.completeRun,onRefinement:w.refine,onSaveWorkflow:w.saveWorkflow,pendingWorkflowIds:w.pendingWorkflowIds,onToggleSaveWorkflow:w.toggleWorkflowSave,savedWorkflowIds:w.savedWorkflowIds,onSend:w.sendMessage,replyingIds:w.replyingIds,onStop:w.stopReply,onClose:()=>{x("ultron"),j(!0)},onDetectRisk:w.detectRisk,onRevealNew:w.revealNew})})]})}cv.createRoot(document.getElementById("root")).render(r.jsx(wr.StrictMode,{children:r.jsx(Rw,{children:r.jsx(V$,{})})}));
