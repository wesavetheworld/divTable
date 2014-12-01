/**
 * Div Table, fast and light div based table
 * Copyright (C) 2014  Andrea Niklaus
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* jshint laxbreak: true */
/* global $, TimePicker */
/***************************************************************
 * TABLES FACTORY
 */
var divTableMaker = (function () {
'use strict';


/***************************************************************
 * classList polyfill
 */
!function(){function e(a){this.el=a;for(var c=a.className.replace(/^\s+|\s+$/g,"").split(/\s+/),d=0;d<c.length;d++)b.call(this,c[d])}function f(a,b,c){Object.defineProperty?Object.defineProperty(a,b,{get:c}):a.__defineGetter__(b,c)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var a=Array.prototype,b=a.push,c=a.splice,d=a.join;e.prototype={add:function(a){this.contains(a)||(b.call(this,a),this.el.className=this.toString())},contains:function(a){return-1!=this.el.className.indexOf(a)},item:function(a){return this[a]||null},remove:function(a){if(this.contains(a)){for(var b=0;b<this.length&&this[b]!=a;b++);c.call(this,b,1),this.el.className=this.toString()}},toString:function(){return d.call(this," ")},toggle:function(a){return this.contains(a)?this.remove(a):this.add(a),this.contains(a)}},window.DOMTokenList=e,f(Element.prototype,"classList",function(){return new e(this)})}}();

/***************************************************************
 * Taffy database
 */
//var TAFFY,exports,T;(function(){var f,q,p,t,d,b,n,m,r,e,c,u,w,v,h,g,j,o,i,l,a,s,k;if(!TAFFY){d="2.7";b=1;n="000000";m=1000;r={};e=function(x){if(TAFFY.isArray(x)||TAFFY.isObject(x)){return x}else{return JSON.parse(x)}};i=function(y,x){return l(y,function(z){return x.indexOf(z)>=0})};l=function(A,z,y){var x=[];if(A==null){return x}if(Array.prototype.filter&&A.filter===Array.prototype.filter){return A.filter(z,y)}c(A,function(D,B,C){if(z.call(y,D,B,C)){x[x.length]=D}});return x};k=function(x){return Object.prototype.toString.call(x)==="[object RegExp]"};s=function(z){var x=T.isArray(z)?[]:T.isObject(z)?{}:null;if(z===null){return z}for(var y in z){x[y]=k(z[y])?z[y].toString():T.isArray(z[y])||T.isObject(z[y])?s(z[y]):z[y]}return x};a=function(y){var x=JSON.stringify(y);if(x.match(/regex/)===null){return x}return JSON.stringify(s(y))};c=function(B,A,C){var E,D,z,F;if(B&&((T.isArray(B)&&B.length===1)||(!T.isArray(B)))){A((T.isArray(B))?B[0]:B,0)}else{for(E,D,z=0,B=(T.isArray(B))?B:[B],F=B.length;z<F;z++){D=B[z];if(!T.isUndefined(D)||(C||false)){E=A(D,z);if(E===T.EXIT){break}}}}};u=function(C,z){var y=0,B,A;for(A in C){if(C.hasOwnProperty(A)){B=z(C[A],A,y++);if(B===T.EXIT){break}}}};r.extend=function(x,y){r[x]=function(){return y.apply(this,arguments)}};w=function(y){var x;if(T.isString(y)&&/[t][0-9]*[r][0-9]*/i.test(y)){return true}if(T.isObject(y)&&y.___id&&y.___s){return true}if(T.isArray(y)){x=true;c(y,function(z){if(!w(z)){x=false;return TAFFY.EXIT}});return x}return false};h=function(z,y){var x=true;c(y,function(A){switch(T.typeOf(A)){case"function":if(!A.apply(z)){x=false;return TAFFY.EXIT}break;case"array":x=(A.length===1)?(h(z,A[0])):(A.length===2)?(h(z,A[0])||h(z,A[1])):(A.length===3)?(h(z,A[0])||h(z,A[1])||h(z,A[2])):(A.length===4)?(h(z,A[0])||h(z,A[1])||h(z,A[2])||h(z,A[3])):false;if(A.length>4){c(A,function(B){if(h(z,B)){x=true}})}break}});return x};v=function(y){var x=[];if(T.isString(y)&&/[t][0-9]*[r][0-9]*/i.test(y)){y={___id:y}}if(T.isArray(y)){c(y,function(z){x.push(v(z))});y=function(){var A=this,z=false;c(x,function(B){if(h(A,B)){z=true}});return z};return y}if(T.isObject(y)){if(T.isObject(y)&&y.___id&&y.___s){y={___id:y.___id}}u(y,function(z,A){if(!T.isObject(z)){z={is:z}}u(z,function(B,C){var E=[],D;D=(C==="hasAll")?function(F,G){G(F)}:c;D(B,function(G){var F=true,H=false,I;I=function(){var N=this[A],M="==",O="!=",Q="===",R="<",L=">",S="<=",P=">=",K="!==",J;if(typeof N==="undefined"){return false}if((C.indexOf("!")===0)&&C!==O&&C!==K){F=false;C=C.substring(1,C.length)}J=((C==="regex")?(G.test(N)):(C==="lt"||C===R)?(N<G):(C==="gt"||C===L)?(N>G):(C==="lte"||C===S)?(N<=G):(C==="gte"||C===P)?(N>=G):(C==="left")?(N.indexOf(G)===0):(C==="leftnocase")?(N.toLowerCase().indexOf(G.toLowerCase())===0):(C==="right")?(N.substring((N.length-G.length))===G):(C==="rightnocase")?(N.toLowerCase().substring((N.length-G.length))===G.toLowerCase()):(C==="like")?(N.indexOf(G)>=0):(C==="likenocase")?(N.toLowerCase().indexOf(G.toLowerCase())>=0):(C===Q||C==="is")?(N===G):(C===M)?(N==G):(C===K)?(N!==G):(C===O)?(N!=G):(C==="isnocase")?(N.toLowerCase?N.toLowerCase()===G.toLowerCase():N===G):(C==="has")?(T.has(N,G)):(C==="hasall")?(T.hasAll(N,G)):(C==="contains")?(TAFFY.isArray(N)&&N.indexOf(G)>-1):(C.indexOf("is")===-1&&!TAFFY.isNull(N)&&!TAFFY.isUndefined(N)&&!TAFFY.isObject(G)&&!TAFFY.isArray(G))?(G===N[C]):(T[C]&&T.isFunction(T[C])&&C.indexOf("is")===0)?T[C](N)===G:(T[C]&&T.isFunction(T[C]))?T[C](N,G):(false));J=(J&&!F)?false:(!J&&!F)?true:J;return J};E.push(I)});if(E.length===1){x.push(E[0])}else{x.push(function(){var G=this,F=false;c(E,function(H){if(H.apply(G)){F=true}});return F})}})});y=function(){var A=this,z=true;z=(x.length===1&&!x[0].apply(A))?false:(x.length===2&&(!x[0].apply(A)||!x[1].apply(A)))?false:(x.length===3&&(!x[0].apply(A)||!x[1].apply(A)||!x[2].apply(A)))?false:(x.length===4&&(!x[0].apply(A)||!x[1].apply(A)||!x[2].apply(A)||!x[3].apply(A)))?false:true;if(x.length>4){c(x,function(B){if(!h(A,B)){z=false}})}return z};return y}if(T.isFunction(y)){return y}};j=function(x,y){var z=function(B,A){var C=0;T.each(y,function(F){var H,E,D,I,G;H=F.split(" ");E=H[0];D=(H.length===1)?"logical":H[1];if(D==="logical"){I=g(B[E]);G=g(A[E]);T.each((I.length<=G.length)?I:G,function(J,K){if(I[K]<G[K]){C=-1;return TAFFY.EXIT}else{if(I[K]>G[K]){C=1;return TAFFY.EXIT}}})}else{if(D==="logicaldesc"){I=g(B[E]);G=g(A[E]);T.each((I.length<=G.length)?I:G,function(J,K){if(I[K]>G[K]){C=-1;return TAFFY.EXIT}else{if(I[K]<G[K]){C=1;return TAFFY.EXIT}}})}else{if(D==="asec"&&B[E]<A[E]){C=-1;return T.EXIT}else{if(D==="asec"&&B[E]>A[E]){C=1;return T.EXIT}else{if(D==="desc"&&B[E]>A[E]){C=-1;return T.EXIT}else{if(D==="desc"&&B[E]<A[E]){C=1;return T.EXIT}}}}}}if(C===0&&D==="logical"&&I.length<G.length){C=-1}else{if(C===0&&D==="logical"&&I.length>G.length){C=1}else{if(C===0&&D==="logicaldesc"&&I.length>G.length){C=-1}else{if(C===0&&D==="logicaldesc"&&I.length<G.length){C=1}}}}if(C!==0){return T.EXIT}});return C};return(x&&x.push)?x.sort(z):x};(function(){var x={},y=0;g=function(z){if(y>m){x={};y=0}return x["_"+z]||(function(){var D=String(z),C=[],G="_",B="",A,E,F;for(A=0,E=D.length;A<E;A++){F=D.charCodeAt(A);if((F>=48&&F<=57)||F===46){if(B!=="n"){B="n";C.push(G.toLowerCase());G=""}G=G+D.charAt(A)}else{if(B!=="s"){B="s";C.push(parseFloat(G));G=""}G=G+D.charAt(A)}}C.push((B==="n")?parseFloat(G):G.toLowerCase());C.shift();x["_"+z]=C;y++;return C}())}}());o=function(){this.context({results:this.getDBI().query(this.context())})};r.extend("filter",function(){var y=TAFFY.mergeObj(this.context(),{run:null}),x=[];c(y.q,function(z){x.push(z)});y.q=x;c(arguments,function(z){y.q.push(v(z));y.filterRaw.push(z)});return this.getroot(y)});r.extend("order",function(z){z=z.split(",");var y=[],A;c(z,function(x){y.push(x.replace(/^\s*/,"").replace(/\s*$/,""))});A=TAFFY.mergeObj(this.context(),{sort:null});A.order=y;return this.getroot(A)});r.extend("limit",function(z){var y=TAFFY.mergeObj(this.context(),{}),x;y.limit=z;if(y.run&&y.sort){x=[];c(y.results,function(B,A){if((A+1)>z){return TAFFY.EXIT}x.push(B)});y.results=x}return this.getroot(y)});r.extend("start",function(z){var y=TAFFY.mergeObj(this.context(),{}),x;y.start=z;if(y.run&&y.sort&&!y.limit){x=[];c(y.results,function(B,A){if((A+1)>z){x.push(B)}});y.results=x}else{y=TAFFY.mergeObj(this.context(),{run:null,start:z})}return this.getroot(y)});r.extend("update",function(A,z,x){var B=true,D={},y=arguments,C;if(TAFFY.isString(A)&&(arguments.length===2||arguments.length===3)){D[A]=z;if(arguments.length===3){B=x}}else{D=A;if(y.length===2){B=z}}C=this;o.call(this);c(this.context().results,function(E){var F=D;if(TAFFY.isFunction(F)){F=F.apply(TAFFY.mergeObj(E,{}))}else{if(T.isFunction(F)){F=F(TAFFY.mergeObj(E,{}))}}if(TAFFY.isObject(F)){C.getDBI().update(E.___id,F,B)}});if(this.context().results.length){this.context({run:null})}return this});r.extend("remove",function(x){var y=this,z=0;o.call(this);c(this.context().results,function(A){y.getDBI().remove(A.___id);z++});if(this.context().results.length){this.context({run:null});y.getDBI().removeCommit(x)}return z});r.extend("count",function(){o.call(this);return this.context().results.length});r.extend("callback",function(z,x){if(z){var y=this;setTimeout(function(){o.call(y);z.call(y.getroot(y.context()))},x||0)}return null});r.extend("get",function(){o.call(this);return this.context().results});r.extend("stringify",function(){return JSON.stringify(this.get())});r.extend("first",function(){o.call(this);return this.context().results[0]||false});r.extend("last",function(){o.call(this);return this.context().results[this.context().results.length-1]||false});r.extend("sum",function(){var y=0,x=this;o.call(x);c(arguments,function(z){c(x.context().results,function(A){y=y+(A[z]||0)})});return y});r.extend("min",function(y){var x=null;o.call(this);c(this.context().results,function(z){if(x===null||z[y]<x){x=z[y]}});return x});(function(){var x=(function(){var A,y,z;A=function(E,G,D){var C,F,H,B;if(D.length===2){C=E[D[0]];H="===";F=G[D[1]]}else{C=E[D[0]];H=D[1];F=G[D[2]]}switch(H){case"===":return C===F;case"!==":return C!==F;case"<":return C<F;case">":return C>F;case"<=":return C<=F;case">=":return C>=F;case"==":return C==F;case"!=":return C!=F;default:throw String(H)+" is not supported"}};y=function(C,F){var B={},D,E;for(D in C){if(C.hasOwnProperty(D)){B[D]=C[D]}}for(D in F){if(F.hasOwnProperty(D)&&D!=="___id"&&D!=="___s"){E=!TAFFY.isUndefined(B[D])?"right_":"";B[E+String(D)]=F[D]}}return B};z=function(F){var B,D,C=arguments,E=C.length,G=[];if(typeof F.filter!=="function"){if(F.TAFFY){B=F()}else{throw"TAFFY DB or result not supplied"}}else{B=F}this.context({results:this.getDBI().query(this.context())});TAFFY.each(this.context().results,function(H){B.each(function(K){var I,J=true;CONDITION:for(D=1;D<E;D++){I=C[D];if(typeof I==="function"){J=I(H,K)}else{if(typeof I==="object"&&I.length){J=A(H,K,I)}else{J=false}}if(!J){break CONDITION}}if(J){G.push(y(H,K))}})});return TAFFY(G)()};return z}());r.extend("join",x)}());r.extend("max",function(y){var x=null;o.call(this);c(this.context().results,function(z){if(x===null||z[y]>x){x=z[y]}});return x});r.extend("select",function(){var y=[],x=arguments;o.call(this);if(arguments.length===1){c(this.context().results,function(z){y.push(z[x[0]])})}else{c(this.context().results,function(z){var A=[];c(x,function(B){A.push(z[B])});y.push(A)})}return y});r.extend("distinct",function(){var y=[],x=arguments;o.call(this);if(arguments.length===1){c(this.context().results,function(A){var z=A[x[0]],B=false;c(y,function(C){if(z===C){B=true;return TAFFY.EXIT}});if(!B){y.push(z)}})}else{c(this.context().results,function(z){var B=[],A=false;c(x,function(C){B.push(z[C])});c(y,function(D){var C=true;c(x,function(F,E){if(B[E]!==D[E]){C=false;return TAFFY.EXIT}});if(C){A=true;return TAFFY.EXIT}});if(!A){y.push(B)}})}return y});r.extend("supplant",function(y,x){var z=[];o.call(this);c(this.context().results,function(A){z.push(y.replace(/\{([^\{\}]*)\}/g,function(C,B){var D=A[B];return typeof D==="string"||typeof D==="number"?D:C}))});return(!x)?z.join(""):z});r.extend("each",function(x){o.call(this);c(this.context().results,x);return this});r.extend("map",function(x){var y=[];o.call(this);c(this.context().results,function(z){y.push(x(z))});return y});T=function(F){var C=[],G={},D=1,z={template:false,onInsert:false,onUpdate:false,onRemove:false,onDBChange:false,storageName:false,forcePropertyCase:null,cacheSize:100,name:""},B=new Date(),A=0,y=0,I={},E,x,H;x=function(L){var K=[],J=false;if(L.length===0){return C}c(L,function(M){if(T.isString(M)&&/[t][0-9]*[r][0-9]*/i.test(M)&&C[G[M]]){K.push(C[G[M]]);J=true}if(T.isObject(M)&&M.___id&&M.___s&&C[G[M.___id]]){K.push(C[G[M.___id]]);J=true}if(T.isArray(M)){c(M,function(N){c(x(N),function(O){K.push(O)})})}});if(J&&K.length>1){K=[]}return K};E={dm:function(J){if(J){B=J;I={};A=0;y=0}if(z.onDBChange){setTimeout(function(){z.onDBChange.call(C)},0)}if(z.storageName){setTimeout(function(){localStorage.setItem("taffy_"+z.storageName,JSON.stringify(C))})}return B},insert:function(M,N){var L=[],K=[],J=e(M);c(J,function(P,Q){var O,R;if(T.isArray(P)&&Q===0){c(P,function(S){L.push((z.forcePropertyCase==="lower")?S.toLowerCase():(z.forcePropertyCase==="upper")?S.toUpperCase():S)});return true}else{if(T.isArray(P)){O={};c(P,function(U,S){O[L[S]]=U});P=O}else{if(T.isObject(P)&&z.forcePropertyCase){R={};u(P,function(U,S){R[(z.forcePropertyCase==="lower")?S.toLowerCase():(z.forcePropertyCase==="upper")?S.toUpperCase():S]=P[S]});P=R}}}D++;P.___id="T"+String(n+b).slice(-6)+"R"+String(n+D).slice(-6);P.___s=true;K.push(P.___id);if(z.template){P=T.mergeObj(z.template,P)}C.push(P);G[P.___id]=C.length-1;if(z.onInsert&&(N||TAFFY.isUndefined(N))){z.onInsert.call(P)}E.dm(new Date())});return H(K)},sort:function(J){C=j(C,J.split(","));G={};c(C,function(L,K){G[L.___id]=K});E.dm(new Date());return true},update:function(Q,M,L){var P={},O,N,J,K;if(z.forcePropertyCase){u(M,function(R,S){P[(z.forcePropertyCase==="lower")?S.toLowerCase():(z.forcePropertyCase==="upper")?S.toUpperCase():S]=R});M=P}O=C[G[Q]];N=T.mergeObj(O,M);J={};K=false;u(N,function(R,S){if(TAFFY.isUndefined(O[S])||O[S]!==R){J[S]=R;K=true}});if(K){if(z.onUpdate&&(L||TAFFY.isUndefined(L))){z.onUpdate.call(N,C[G[Q]],J)}C[G[Q]]=N;E.dm(new Date())}},remove:function(J){C[G[J]].___s=false},removeCommit:function(K){var J;for(J=C.length-1;J>-1;J--){if(!C[J].___s){if(z.onRemove&&(K||TAFFY.isUndefined(K))){z.onRemove.call(C[J])}G[C[J].___id]=undefined;C.splice(J,1)}}G={};c(C,function(M,L){G[M.___id]=L});E.dm(new Date())},query:function(L){var O,P,K,N,M,J;if(z.cacheSize){P="";c(L.filterRaw,function(Q){if(T.isFunction(Q)){P="nocache";return TAFFY.EXIT}});if(P===""){P=a(T.mergeObj(L,{q:false,run:false,sort:false}))}}if(!L.results||!L.run||(L.run&&E.dm()>L.run)){K=[];if(z.cacheSize&&I[P]){I[P].i=A++;return I[P].results}else{if(L.q.length===0&&L.index.length===0){c(C,function(Q){K.push(Q)});O=K}else{N=x(L.index);c(N,function(Q){if(L.q.length===0||h(Q,L.q)){K.push(Q)}});O=K}}}else{O=L.results}if(L.order.length>0&&(!L.run||!L.sort)){O=j(O,L.order)}if(O.length&&((L.limit&&L.limit<O.length)||L.start)){M=[];c(O,function(R,Q){if(!L.start||(L.start&&(Q+1)>=L.start)){if(L.limit){J=(L.start)?(Q+1)-L.start:Q;if(J<L.limit){M.push(R)}else{if(J>L.limit){return TAFFY.EXIT}}}else{M.push(R)}}});O=M}if(z.cacheSize&&P!=="nocache"){y++;setTimeout(function(){var Q,R;if(y>=z.cacheSize*2){y=0;Q=A-z.cacheSize;R={};u(function(U,S){if(U.i>=Q){R[S]=U}});I=R}},0);I[P]={i:A++,results:O}}return O}};H=function(){var K,J;K=TAFFY.mergeObj(TAFFY.mergeObj(r,{insert:undefined}),{getDBI:function(){return E},getroot:function(L){return H.call(L)},context:function(L){if(L){J=TAFFY.mergeObj(J,L.hasOwnProperty("results")?TAFFY.mergeObj(L,{run:new Date(),sort:new Date()}):L)}return J},extend:undefined});J=(this&&this.q)?this:{limit:false,start:false,q:[],filterRaw:[],index:[],order:[],results:false,run:null,sort:null,settings:z};c(arguments,function(L){if(w(L)){J.index.push(L)}else{J.q.push(v(L))}J.filterRaw.push(L)});return K};b++;if(F){E.insert(F)}H.insert=E.insert;H.merge=function(M,L,N){var K={},J=[],O={};N=N||false;L=L||"id";c(M,function(Q){var P;K[L]=Q[L];J.push(Q[L]);P=H(K).first();if(P){E.update(P.___id,Q,N)}else{E.insert(Q,N)}});O[L]=J;return H(O)};H.TAFFY=true;H.sort=E.sort;H.settings=function(J){if(J){z=TAFFY.mergeObj(z,J);if(J.template){H().update(J.template)}}return z};H.store=function(L){var K=false,J;if(localStorage){if(L){J=localStorage.getItem("taffy_"+L);if(J&&J.length>0){H.insert(J);K=true}if(C.length>0){setTimeout(function(){localStorage.setItem("taffy_"+z.storageName,JSON.stringify(C))})}}H.settings({storageName:L})}return H};return H};TAFFY=T;T.each=c;T.eachin=u;T.extend=r.extend;TAFFY.EXIT="TAFFYEXIT";TAFFY.mergeObj=function(z,x){var y={};u(z,function(A,B){y[B]=z[B]});u(x,function(A,B){y[B]=x[B]});return y};TAFFY.has=function(z,y){var x=false,A;if((z.TAFFY)){x=z(y);if(x.length>0){return true}else{return false}}else{switch(T.typeOf(z)){case"object":if(T.isObject(y)){u(y,function(B,C){if(x===true&&!T.isUndefined(z[C])&&z.hasOwnProperty(C)){x=T.has(z[C],y[C])}else{x=false;return TAFFY.EXIT}})}else{if(T.isArray(y)){c(y,function(B,C){x=T.has(z,y[C]);if(x){return TAFFY.EXIT}})}else{if(T.isString(y)){if(!TAFFY.isUndefined(z[y])){return true}else{return false}}}}return x;case"array":if(T.isObject(y)){c(z,function(B,C){x=T.has(z[C],y);if(x===true){return TAFFY.EXIT}})}else{if(T.isArray(y)){c(y,function(C,B){c(z,function(E,D){x=T.has(z[D],y[B]);if(x===true){return TAFFY.EXIT}});if(x===true){return TAFFY.EXIT}})}else{if(T.isString(y)||T.isNumber(y)){x=false;for(A=0;A<z.length;A++){x=T.has(z[A],y);if(x){return true}}}}}return x;case"string":if(T.isString(y)&&y===z){return true}break;default:if(T.typeOf(z)===T.typeOf(y)&&z===y){return true}break}}return false};TAFFY.hasAll=function(A,z){var y=TAFFY,x;if(y.isArray(z)){x=true;c(z,function(B){x=y.has(A,B);if(x===false){return TAFFY.EXIT}});return x}else{return y.has(A,z)}};TAFFY.typeOf=function(x){var y=typeof x;if(y==="object"){if(x){if(typeof x.length==="number"&&!(x.propertyIsEnumerable("length"))){y="array"}}else{y="null"}}return y};TAFFY.getObjectKeys=function(x){var y=[];u(x,function(A,z){y.push(z)});y.sort();return y};TAFFY.isSameArray=function(y,x){return(TAFFY.isArray(y)&&TAFFY.isArray(x)&&y.join(",")===x.join(","))?true:false};TAFFY.isSameObject=function(A,y){var x=TAFFY,z=true;if(x.isObject(A)&&x.isObject(y)){if(x.isSameArray(x.getObjectKeys(A),x.getObjectKeys(y))){u(A,function(B,C){if(!((x.isObject(A[C])&&x.isObject(y[C])&&x.isSameObject(A[C],y[C]))||(x.isArray(A[C])&&x.isArray(y[C])&&x.isSameArray(A[C],y[C]))||(A[C]===y[C]))){z=false;return TAFFY.EXIT}})}else{z=false}}else{z=false}return z};f=["String","Number","Object","Array","Boolean","Null","Function","Undefined"];q=function(x){return function(y){return TAFFY.typeOf(y)===x.toLowerCase()?true:false}};for(p=0;p<f.length;p++){t=f[p];TAFFY["is"+t]=q(t)}}}());if(typeof(exports)==="object"){exports.taffy=TAFFY};
var TAFFY,exports,T;!function(){"use strict";var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;if(!TAFFY)for(e="2.7",f=1,g="000000",h=1e3,i={},j=function(a){return TAFFY.isArray(a)||TAFFY.isObject(a)?a:JSON.parse(a)},s=function(a,b){return t(a,function(a){return b.indexOf(a)>=0})},t=function(a,b,c){var d=[];return null==a?d:Array.prototype.filter&&a.filter===Array.prototype.filter?a.filter(b,c):(k(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},w=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)},v=function(a){var b=T.isArray(a)?[]:T.isObject(a)?{}:null;if(null===a)return a;for(var c in a)b[c]=w(a[c])?a[c].toString():T.isArray(a[c])||T.isObject(a[c])?v(a[c]):a[c];return b},u=function(a){var b=JSON.stringify(a);return null===b.match(/regex/)?b:JSON.stringify(v(a))},k=function(a,b,c){var d,e,f,g;if(a&&(T.isArray(a)&&1===a.length||!T.isArray(a)))b(T.isArray(a)?a[0]:a,0);else for(f=0,a=T.isArray(a)?a:[a],g=a.length;g>f&&(e=a[f],T.isUndefined(e)&&!c||(d=b(e,f),d!==T.EXIT));f++);},l=function(a,b){var d,e,c=0;for(e in a)if(a.hasOwnProperty(e)&&(d=b(a[e],e,c++),d===T.EXIT))break},i.extend=function(a,b){i[a]=function(){return b.apply(this,arguments)}},m=function(a){var b;return T.isString(a)&&/[t][0-9]*[r][0-9]*/i.test(a)?!0:T.isObject(a)&&a.___id&&a.___s?!0:T.isArray(a)?(b=!0,k(a,function(a){return m(a)?void 0:(b=!1,TAFFY.EXIT)}),b):!1},o=function(a,b){var c=!0;return k(b,function(b){switch(T.typeOf(b)){case"function":if(!b.apply(a))return c=!1,TAFFY.EXIT;break;case"array":c=1===b.length?o(a,b[0]):2===b.length?o(a,b[0])||o(a,b[1]):3===b.length?o(a,b[0])||o(a,b[1])||o(a,b[2]):4===b.length?o(a,b[0])||o(a,b[1])||o(a,b[2])||o(a,b[3]):!1,b.length>4&&k(b,function(b){o(a,b)&&(c=!0)})}}),c},n=function(a){var b=[];return T.isString(a)&&/[t][0-9]*[r][0-9]*/i.test(a)&&(a={___id:a}),T.isArray(a)?(k(a,function(a){b.push(n(a))}),a=function(){var a=this,c=!1;return k(b,function(b){o(a,b)&&(c=!0)}),c}):T.isObject(a)?(T.isObject(a)&&a.___id&&a.___s&&(a={___id:a.___id}),l(a,function(a,c){T.isObject(a)||(a={is:a}),l(a,function(a,d){var f,e=[];f="hasAll"===d?function(a,b){b(a)}:k,f(a,function(a){var g,b=!0;g=function(){var n,e=this[c],f="==",g="!=",h="===",i="<",j=">",k="<=",l=">=",m="!==";return"undefined"==typeof e?!1:(0===d.indexOf("!")&&d!==g&&d!==m&&(b=!1,d=d.substring(1,d.length)),n="regex"===d?a.test(e):"lt"===d||d===i?a>e:"gt"===d||d===j?e>a:"lte"===d||d===k?a>=e:"gte"===d||d===l?e>=a:"left"===d?0===(""+e).indexOf(a):"leftnocase"===d?0===(""+e).toLowerCase().indexOf(a.toLowerCase()):"right"===d?(""+e).substring((""+e).length-a.length)===a:"rightnocase"===d?(""+e).toLowerCase().substring((""+e).length-a.length)===a.toLowerCase():"like"===d?(""+e).indexOf(a)>=0:"likenocase"===d?(""+e).toLowerCase().indexOf(a.toLowerCase())>=0:d===h||"is"===d?e===a:d===f?e==a:d===m?e!==a:d===g?e!=a:"isnocase"===d?e.toLowerCase?e.toLowerCase()===a.toLowerCase():e===a:"has"===d?T.has(e,a):"hasall"===d?T.hasAll(e,a):"contains"===d?TAFFY.isArray(e)&&e.indexOf(a)>-1:-1!==d.indexOf("is")||TAFFY.isNull(e)||TAFFY.isUndefined(e)||TAFFY.isObject(a)||TAFFY.isArray(a)?T[d]&&T.isFunction(T[d])&&0===d.indexOf("is")?T[d](e)===a:T[d]&&T.isFunction(T[d])?T[d](e,a):!1:a===e[d],n=n&&!b?!1:n||b?n:!0)},e.push(g)}),1===e.length?b.push(e[0]):b.push(function(){var a=this,b=!1;return k(e,function(c){c.apply(a)&&(b=!0)}),b})})}),a=function(){var a=this,c=!0;return c=1!==b.length||b[0].apply(a)?2!==b.length||b[0].apply(a)&&b[1].apply(a)?3!==b.length||b[0].apply(a)&&b[1].apply(a)&&b[2].apply(a)?4!==b.length||b[0].apply(a)&&b[1].apply(a)&&b[2].apply(a)&&b[3].apply(a)?!0:!1:!1:!1:!1,b.length>4&&k(b,function(b){o(a,b)||(c=!1)}),c}):T.isFunction(a)?a:void 0},q=function(a,b){var c=function(a,c){var d=0;return T.each(b,function(b){var e,f,g,h,i;if(e=b.split(" "),f=e[0],g=1===e.length?"logical":e[1],"logical"===g)h=p(a[f]),i=p(c[f]),T.each(h.length<=i.length?h:i,function(a,b){return h[b]<i[b]?(d=-1,TAFFY.EXIT):h[b]>i[b]?(d=1,TAFFY.EXIT):void 0});else if("logicaldesc"===g)h=p(a[f]),i=p(c[f]),T.each(h.length<=i.length?h:i,function(a,b){return h[b]>i[b]?(d=-1,TAFFY.EXIT):h[b]<i[b]?(d=1,TAFFY.EXIT):void 0});else{if("asec"===g&&a[f]<c[f])return d=-1,T.EXIT;if("asec"===g&&a[f]>c[f])return d=1,T.EXIT;if("desc"===g&&a[f]>c[f])return d=-1,T.EXIT;if("desc"===g&&a[f]<c[f])return d=1,T.EXIT}return 0===d&&"logical"===g&&h.length<i.length?d=-1:0===d&&"logical"===g&&h.length>i.length?d=1:0===d&&"logicaldesc"===g&&h.length>i.length?d=-1:0===d&&"logicaldesc"===g&&h.length<i.length&&(d=1),0!==d?T.EXIT:void 0}),d};return a&&a.push?a.sort(c):a},function(){var a={},b=0;p=function(c){return b>h&&(a={},b=0),a["_"+c]||function(){var h,i,j,d=String(c),e=[],f="_",g="";for(h=0,i=d.length;i>h;h++)j=d.charCodeAt(h),j>=48&&57>=j||46===j?("n"!==g&&(g="n",e.push(f.toLowerCase()),f=""),f+=d.charAt(h)):("s"!==g&&(g="s",e.push(parseFloat(f)),f=""),f+=d.charAt(h));return e.push("n"===g?parseFloat(f):f.toLowerCase()),e.shift(),a["_"+c]=e,b++,e}()}}(),r=function(){this.context({results:this.getDBI().query(this.context())})},i.extend("filter",function(){var a=TAFFY.mergeObj(this.context(),{run:null}),b=[];return k(a.q,function(a){b.push(a)}),a.q=b,k(arguments,function(b){a.q.push(n(b)),a.filterRaw.push(b)}),this.getroot(a)}),i.extend("order",function(a){a=a.split(",");var c,b=[];return k(a,function(a){b.push(a.replace(/^\s*/,"").replace(/\s*$/,""))}),c=TAFFY.mergeObj(this.context(),{sort:null}),c.order=b,this.getroot(c)}),i.extend("limit",function(a){var c,b=TAFFY.mergeObj(this.context(),{});return b.limit=a,b.run&&b.sort&&(c=[],k(b.results,function(b,d){return d+1>a?TAFFY.EXIT:(c.push(b),void 0)}),b.results=c),this.getroot(b)}),i.extend("start",function(a){var c,b=TAFFY.mergeObj(this.context(),{});return b.start=a,b.run&&b.sort&&!b.limit?(c=[],k(b.results,function(b,d){d+1>a&&c.push(b)}),b.results=c):b=TAFFY.mergeObj(this.context(),{run:null,start:a}),this.getroot(b)}),i.extend("update",function(a,b,c){var g,d=!0,e={},f=arguments;return!TAFFY.isString(a)||2!==arguments.length&&3!==arguments.length?(e=a,2===f.length&&(d=b)):(e[a]=b,3===arguments.length&&(d=c)),g=this,r.call(this),k(this.context().results,function(a){var b=e;TAFFY.isFunction(b)?b=b.apply(TAFFY.mergeObj(a,{})):T.isFunction(b)&&(b=b(TAFFY.mergeObj(a,{}))),TAFFY.isObject(b)&&g.getDBI().update(a.___id,b,d)}),this.context().results.length&&this.context({run:null}),this}),i.extend("remove",function(a){var b=this,c=0;return r.call(this),k(this.context().results,function(a){b.getDBI().remove(a.___id),c++}),this.context().results.length&&(this.context({run:null}),b.getDBI().removeCommit(a)),c}),i.extend("count",function(){return r.call(this),this.context().results.length}),i.extend("callback",function(a,b){if(a){var c=this;setTimeout(function(){r.call(c),a.call(c.getroot(c.context()))},b||0)}return null}),i.extend("get",function(){return r.call(this),this.context().results}),i.extend("stringify",function(){return JSON.stringify(this.get())}),i.extend("first",function(){return r.call(this),this.context().results[0]||!1}),i.extend("last",function(){return r.call(this),this.context().results[this.context().results.length-1]||!1}),i.extend("sum",function(){var a=0,b=this;return r.call(b),k(arguments,function(c){k(b.context().results,function(b){a+=b[c]||0})}),a}),i.extend("min",function(a){var b=null;return r.call(this),k(this.context().results,function(c){(null===b||c[a]<b)&&(b=c[a])}),b}),function(){var a=function(){var a,b,c;return a=function(a,b,c){var d,e,f;switch(2===c.length?(d=a[c[0]],f="===",e=b[c[1]]):(d=a[c[0]],f=c[1],e=b[c[2]]),f){case"===":return d===e;case"!==":return d!==e;case"<":return e>d;case">":return d>e;case"<=":return e>=d;case">=":return d>=e;case"==":return d==e;case"!=":return d!=e;default:throw String(f)+" is not supported"}},b=function(a,b){var d,e,c={};for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);for(d in b)b.hasOwnProperty(d)&&"___id"!==d&&"___s"!==d&&(e=TAFFY.isUndefined(c[d])?"":"right_",c[e+String(d)]=b[d]);return c},c=function(c){var d,e,f=arguments,g=f.length,h=[];if("function"!=typeof c.filter){if(!c.TAFFY)throw"TAFFY DB or result not supplied";d=c()}else d=c;return this.context({results:this.getDBI().query(this.context())}),TAFFY.each(this.context().results,function(c){d.each(function(d){var i,j=!0;a:for(e=1;g>e&&(i=f[e],j="function"==typeof i?i(c,d):"object"==typeof i&&i.length?a(c,d,i):!1,j);e++);j&&h.push(b(c,d))})}),TAFFY(h)()}}();i.extend("join",a)}(),i.extend("max",function(a){var b=null;return r.call(this),k(this.context().results,function(c){(null===b||c[a]>b)&&(b=c[a])}),b}),i.extend("select",function(){var a=[],b=arguments;return r.call(this),1===arguments.length?k(this.context().results,function(c){a.push(c[b[0]])}):k(this.context().results,function(c){var d=[];k(b,function(a){d.push(c[a])}),a.push(d)}),a}),i.extend("distinct",function(){var a=[],b=arguments;return r.call(this),1===arguments.length?k(this.context().results,function(c){var d=c[b[0]],e=!1;k(a,function(a){return d===a?(e=!0,TAFFY.EXIT):void 0}),e||a.push(d)}):k(this.context().results,function(c){var d=[],e=!1;k(b,function(a){d.push(c[a])}),k(a,function(a){var c=!0;return k(b,function(b,e){return d[e]!==a[e]?(c=!1,TAFFY.EXIT):void 0}),c?(e=!0,TAFFY.EXIT):void 0}),e||a.push(d)}),a}),i.extend("supplant",function(a,b){var c=[];return r.call(this),k(this.context().results,function(b){c.push(a.replace(/\{([^\{\}]*)\}/g,function(a,c){var d=b[c];return"string"==typeof d||"number"==typeof d?d:a}))}),b?c:c.join("")}),i.extend("each",function(a){return r.call(this),k(this.context().results,a),this}),i.extend("map",function(a){var b=[];return r.call(this),k(this.context().results,function(c){b.push(a(c))}),b}),T=function(a){var t,v,w,b=[],c={},d=1,e={template:!1,onInsert:!1,onUpdate:!1,onRemove:!1,onDBChange:!1,storageName:!1,forcePropertyCase:null,cacheSize:100,name:""},h=new Date,p=0,r=0,s={};return v=function(a){var d=[],e=!1;return 0===a.length?b:(k(a,function(a){T.isString(a)&&/[t][0-9]*[r][0-9]*/i.test(a)&&b[c[a]]&&(d.push(b[c[a]]),e=!0),T.isObject(a)&&a.___id&&a.___s&&b[c[a.___id]]&&(d.push(b[c[a.___id]]),e=!0),T.isArray(a)&&k(a,function(a){k(v(a),function(a){d.push(a)})})}),e&&d.length>1&&(d=[]),d)},t={dm:function(a){return a&&(h=a,s={},p=0,r=0),e.onDBChange&&setTimeout(function(){e.onDBChange.call(b)},0),e.storageName&&setTimeout(function(){localStorage.setItem("taffy_"+e.storageName,JSON.stringify(b))}),h},insert:function(a,h){var i=[],m=[],n=j(a);return k(n,function(a,j){var n,o;return T.isArray(a)&&0===j?(k(a,function(a){i.push("lower"===e.forcePropertyCase?a.toLowerCase():"upper"===e.forcePropertyCase?a.toUpperCase():a)}),!0):(T.isArray(a)?(n={},k(a,function(a,b){n[i[b]]=a}),a=n):T.isObject(a)&&e.forcePropertyCase&&(o={},l(a,function(b,c){o["lower"===e.forcePropertyCase?c.toLowerCase():"upper"===e.forcePropertyCase?c.toUpperCase():c]=a[c]}),a=o),d++,a.___id="T"+String(g+f).slice(-6)+"R"+String(g+d).slice(-6),a.___s=!0,m.push(a.___id),e.template&&(a=T.mergeObj(e.template,a)),b.push(a),c[a.___id]=b.length-1,e.onInsert&&(h||TAFFY.isUndefined(h))&&e.onInsert.call(a),t.dm(new Date),void 0)}),w(m)},sort:function(a){return b=q(b,a.split(",")),c={},k(b,function(a,b){c[a.___id]=b}),t.dm(new Date),!0},update:function(a,d,f){var h,i,j,k,g={};e.forcePropertyCase&&(l(d,function(a,b){g["lower"===e.forcePropertyCase?b.toLowerCase():"upper"===e.forcePropertyCase?b.toUpperCase():b]=a}),d=g),h=b[c[a]],i=T.mergeObj(h,d),j={},k=!1,l(i,function(a,b){(TAFFY.isUndefined(h[b])||h[b]!==a)&&(j[b]=a,k=!0)}),k&&(e.onUpdate&&(f||TAFFY.isUndefined(f))&&e.onUpdate.call(i,b[c[a]],j),b[c[a]]=i,t.dm(new Date))},remove:function(a){b[c[a]].___s=!1},removeCommit:function(a){var d;for(d=b.length-1;d>-1;d--)b[d].___s||(e.onRemove&&(a||TAFFY.isUndefined(a))&&e.onRemove.call(b[d]),c[b[d].___id]=void 0,b.splice(d,1));c={},k(b,function(a,b){c[a.___id]=b}),t.dm(new Date)},query:function(a){var c,d,f,g,h,i;if(e.cacheSize&&(d="",k(a.filterRaw,function(a){return T.isFunction(a)?(d="nocache",TAFFY.EXIT):void 0}),""===d&&(d=u(T.mergeObj(a,{q:!1,run:!1,sort:!1})))),!a.results||!a.run||a.run&&t.dm()>a.run){if(f=[],e.cacheSize&&s[d])return s[d].i=p++,s[d].results;0===a.q.length&&0===a.index.length?(k(b,function(a){f.push(a)}),c=f):(g=v(a.index),k(g,function(b){(0===a.q.length||o(b,a.q))&&f.push(b)}),c=f)}else c=a.results;return!(a.order.length>0)||a.run&&a.sort||(c=q(c,a.order)),c.length&&(a.limit&&a.limit<c.length||a.start)&&(h=[],k(c,function(b,c){if(!a.start||a.start&&c+1>=a.start)if(a.limit){if(i=a.start?c+1-a.start:c,i<a.limit)h.push(b);else if(i>a.limit)return TAFFY.EXIT}else h.push(b)}),c=h),e.cacheSize&&"nocache"!==d&&(r++,setTimeout(function(){var a,b;r>=2*e.cacheSize&&(r=0,a=p-e.cacheSize,b={},l(function(c,d){c.i>=a&&(b[d]=c)}),s=b)},0),s[d]={i:p++,results:c}),c}},w=function(){var a,b;return a=TAFFY.mergeObj(TAFFY.mergeObj(i,{insert:void 0}),{getDBI:function(){return t},getroot:function(a){return w.call(a)},context:function(a){return a&&(b=TAFFY.mergeObj(b,a.hasOwnProperty("results")?TAFFY.mergeObj(a,{run:new Date,sort:new Date}):a)),b},extend:void 0}),b=this&&this.q?this:{limit:!1,start:!1,q:[],filterRaw:[],index:[],order:[],results:!1,run:null,sort:null,settings:e},k(arguments,function(a){m(a)?b.index.push(a):b.q.push(n(a)),b.filterRaw.push(a)}),a},f++,a&&t.insert(a),w.insert=t.insert,w.merge=function(a,b,c){var d={},e=[],f={};return c=c||!1,b=b||"id",k(a,function(a){var f;d[b]=a[b],e.push(a[b]),f=w(d).first(),f?t.update(f.___id,a,c):t.insert(a,c)}),f[b]=e,w(f)},w.TAFFY=!0,w.sort=t.sort,w.settings=function(a){return a&&(e=TAFFY.mergeObj(e,a),a.template&&w().update(a.template)),e},w.store=function(a){var d,c=!1;return localStorage&&(a&&(d=localStorage.getItem("taffy_"+a),d&&d.length>0&&(w.insert(d),c=!0),b.length>0&&setTimeout(function(){localStorage.setItem("taffy_"+e.storageName,JSON.stringify(b))})),w.settings({storageName:a})),w},w},TAFFY=T,T.each=k,T.eachin=l,T.extend=i.extend,TAFFY.EXIT="TAFFYEXIT",TAFFY.mergeObj=function(a,b){var c={};return l(a,function(b,d){c[d]=a[d]}),l(b,function(a,d){c[d]=b[d]}),c},TAFFY.has=function(a,b){var d,c=!1;if(a.TAFFY)return c=a(b),c.length>0?!0:!1;switch(T.typeOf(a)){case"object":if(T.isObject(b))l(b,function(d,e){return c!==!0||T.isUndefined(a[e])||!a.hasOwnProperty(e)?(c=!1,TAFFY.EXIT):(c=T.has(a[e],b[e]),void 0)});else if(T.isArray(b))k(b,function(d,e){return c=T.has(a,b[e]),c?TAFFY.EXIT:void 0});else if(T.isString(b))return TAFFY.isUndefined(a[b])?!1:!0;return c;case"array":if(T.isObject(b))k(a,function(d,e){return c=T.has(a[e],b),c===!0?TAFFY.EXIT:void 0});else if(T.isArray(b))k(b,function(d,e){return k(a,function(d,f){return c=T.has(a[f],b[e]),c===!0?TAFFY.EXIT:void 0}),c===!0?TAFFY.EXIT:void 0});else if(T.isString(b)||T.isNumber(b))for(c=!1,d=0;d<a.length;d++)if(c=T.has(a[d],b))return!0;return c;case"string":if(T.isString(b)&&b===a)return!0;break;default:if(T.typeOf(a)===T.typeOf(b)&&a===b)return!0}return!1},TAFFY.hasAll=function(a,b){var d,c=TAFFY;return c.isArray(b)?(d=!0,k(b,function(b){return d=c.has(a,b),d===!1?TAFFY.EXIT:void 0}),d):c.has(a,b)},TAFFY.typeOf=function(a){var b=typeof a;return"object"===b&&(a?"number"!=typeof a.length||a.propertyIsEnumerable("length")||(b="array"):b="null"),b},TAFFY.getObjectKeys=function(a){var b=[];return l(a,function(a,c){b.push(c)}),b.sort(),b},TAFFY.isSameArray=function(a,b){return TAFFY.isArray(a)&&TAFFY.isArray(b)&&a.join(",")===b.join(",")?!0:!1},TAFFY.isSameObject=function(a,b){var c=TAFFY,d=!0;return c.isObject(a)&&c.isObject(b)?c.isSameArray(c.getObjectKeys(a),c.getObjectKeys(b))?l(a,function(e,f){return c.isObject(a[f])&&c.isObject(b[f])&&c.isSameObject(a[f],b[f])||c.isArray(a[f])&&c.isArray(b[f])&&c.isSameArray(a[f],b[f])||a[f]===b[f]?void 0:(d=!1,TAFFY.EXIT)}):d=!1:d=!1,d},a=["String","Number","Object","Array","Boolean","Null","Function","Undefined"],b=function(a){return function(b){return TAFFY.typeOf(b)===a.toLowerCase()?!0:!1}},c=0;c<a.length;c++)d=a[c],TAFFY["is"+d]=b(d)}(),"object"==typeof exports&&(exports.taffy=TAFFY);

/***************************************************************
 * Div table CONSTRUCTOR
 */
var DivTable = function () {

};

/**
 * INITIALIZATION function
 */
DivTable.prototype.init = function ( container, options, callback_context ) {
	var self = this;
	
	this.callback_context = callback_context;
	this.filter = {};
	this.pagination = { page: 1 };
	
	this._loadOptions( options );
	
	this._buildAdvancedEdit();
	this._buildRowEditor();
	
	this._buildTableStructure( container );
	this._setDomMap( container );
	this._addEventHandlers();
	
	this._saveMap = {};
	this.newTable();
	setTimeout( function () {
		self._emitCallback( 'onCreate' );
		self.saveStatus();
	}, 0 );
};

/**
 * Take an store user defined options to this.options object
 * next it fill the missing options from the default_options object
 */
DivTable.prototype._loadOptions = function ( config_options ) {
	var key,
		options = util.inherit( config_options ),
		default_options = {
			class_prefix  : 'div',
			select_class  : 'select',
			edit_class    : 'edit',
			filter_class  : 'filter',
			hide_class    : 'hide',
			disable_class : 'disable',
			
			columns      : [{
				name : 'first',
				text : 'first',
				edit : 'text'
			},{
				name : 'second',
				text : 'second',
				edit : [ '0', '1', '2' ]
			}],
			footer : [
				'plus',
				'trash'
				//'refresh'
			],
			counter_text     : 'Entry {{total}}',
			pagination_page  : 'Page',
			pagination_total : 'of',
			
			order          : 'id',
			show_filter    : false,
			auto_edit      : true,
			disable_footer : false,
			pagination     : false,
			
			menu : ''
				+ '<ul id="configMenuUl" styel="width:120px">'
					+ '<li id="menuitem-headerfilter">'
						+ '<a href="#">'
							+ '<span class="ui-icon ui-icon-filter"></span>'
							+ 'Sofort Filter'
						+ '</a>'
					+ '</li>'
				+ '</ul>',
			
			advancedEdit : null,
			
			onChange      : function ( name, new_val, row ) {},
			onSelectRow   : function ( row ) {},
			onFooterClick : function ( name ) {
				if      ( name === 'plus'    ) { this.div_table( 'newRow'        ); }
				else if ( name === 'trash'   ) { this.div_table( 'deleteEditRow' ); }
				else if ( name === 'refresh' ) { this.div_table( 'updateTable'   ); }
			}
		};
	
	for ( key in default_options ) {
		if ( default_options.hasOwnProperty( key ) ) {
			if ( options[ key ] === undefined ) {
				options[ key ] = default_options[ key ];
			}
		}
	}
	
	this.options = options;
};

/**
 * CALL the defined table CALLBACKS
 */
DivTable.prototype._emitCallback = function ( callback_name, params ) {
	var args;
	if ( typeof this.options[ callback_name ] === 'function' ) {
		switch ( callback_name ) {
			case 'onCreate'      : args = [];         break;
			case 'onFooterClick' : args = [ params ]; break;
			case 'onSelectRow'   : args = [ params ]; break;
			case 'onChange'      : args = params; break;
			default : args = []; break;
		}
		
		this.options[ callback_name ].apply( this.callback_context, args );
	}
};


/***************************************************************
 * TAFFY DB methods
 */
/**
 * GET the ACTIVE ROWS from the database
 *  params:
 *    - filter[obj|null]: specific the filter to apply when
 *                        finding the rows.
 *  return: array of found rows, empty if no row has been found
 */
DivTable.prototype._getRows = function ( filter ) {
	var filt;
	
	filt = util.extend( this.filter, { deleted : 'false' } );
	if ( util.isObject( filter ) ) {
		filt = util.extend( filt, filter );
	}
	
	return (
		this.table( filt )
			.order( this.options.order || 'id' )
			.get() );
};

/**
 * GET ROW by id
 *  params:
 *    - id[number|string]: find a row by his id
 *  return: the found row or null
 */
DivTable.prototype._getRowById = function ( id ) {
	var row = ( this._getRows({ id : id * 1 })[ 0 ] );
	if ( ! row ) {
		row = ( this._getRows({ id : ''+ id })[ 0 ] );
	}
	return row;
};

/**
 * INSERT new row in the database
 *  params:
 *    - row_map[object]: insert the row in the database
 *  return: -
 */
DivTable.prototype._insertRow = function ( row_map ) {
	var i, len,
		columns = this.options.columns;
	
	row_map.deleted = 'false';
	row_map.edited  = 'false';
	row_map['new']  = 'true';
	
	// rows MUST have an id
	row_map.id = row_map.id || ( ''+ Math.random().toFixed( 15 ) ).slice( -15 );
	
	this._checkRowValues( row_map );

	for ( i = 0, len = columns.length; i < len; i++ ) {
		if ( ! row_map.hasOwnProperty( columns[ i ].name ) ) {
			row_map[ columns[ i ].name ] = '';
		}
	}
	
	this.table.insert( row_map );
};

/**
 * UPDATE row values
 *  params:
 *    - row_id[number|string]: the id of the row
 *    - new_values_map[obj]: the new values to be set
 *    - preventEdited[boolean]: if set the row is not marked as edited
 *  return: -
 */
DivTable.prototype._updateRow = function ( row_id, new_values_map, preventEdited ) {
	if ( this.table({ id : ''+ row_id }).first() ) {
		row_id = ''+ row_id;
	}
	else {
		row_id *= 1;
	}
	if ( ! preventEdited ) {
		this.table({ id : row_id, 'new' : 'false', 'edited' : 'false' }).update({ 'edited' : 'true' });
	}
	this.table({ id : row_id }).update( new_values_map );
};

/**
 * DELETE a row from the database
 *  params:
 *    - id[number|string]: the id of the row
 *    - from_db[boolean]: if set the row will be deleted
 *                        from the database, otherwise will be
 *                        marked as deleted
 *  return: -
 */
DivTable.prototype._deleteRow = function ( row_id, from_db ) {
	// if the row is not new marks it with deleted
	if ( this.table({ id : ''+ row_id }).first() ) {
		row_id = ''+ row_id;
	}
	else {
		row_id *= 1;
	}
	
	if ( ! from_db && this.table({ id : row_id, 'new' : 'false' }).count() ) {
		this.table({ id : row_id }).update({ deleted : 'true' });
	}
	// otherwise remove it
	else {
		this.table({ id : row_id }).remove();
	}
};


/***************************************************************
 * CHECK if the VALUES of one row are correct
 *  params:
 *    - row_map[object]: the row to be checked
 *  return: -
 */
DivTable.prototype._checkRowValues = function ( row_map ) {
	var edit, hide, i, len, column, first;
	
	edit = this.edit.getEdit ( row_map );
	
	for ( column in edit ) {
		if ( edit.hasOwnProperty( column ) ) {
			if ( util.isObject( edit[ column ] ) ) {
				if ( ! edit[ column ].hasOwnProperty( row_map[ column ] ) ) {
					// value of the column not allowed
					for ( first in edit[ column ] ) {
						if ( column.hasOwnProperty( first ) ) {
							break;
						}
					}
					row_map[ column ] = first;
				}
			}
			else if ( util.isArray( edit[ column ] ) ) {
				if ( ! util.inArray( row_map[ column ], edit[ column ] ) ) {
					row_map[ column ] = edit[ column ][ 0 ];
				}
			}
		}
	}
	
	hide = this.edit.getHidden( row_map );
	
	for ( i = 0, len = hide.length; i < len; i++ ) {
		row_map[ hide[ i ] ] = null;
	}
	
};

/**
 * Get UNIQUE values for selectors
 *  This method is used to find the values that are still available in
 *  the selection edit mode (select and advanced select).
 *  Removes the values already used from the edit object.
 *
 *  ex: edit: ['foo','bar','foobar'], unique: true, (defined for a column)
 *      if the first row has the value 'foo', the second has only the
 *      possibility to select 'bar' or 'foobar'.
 *
 *  params:
 *    - row_values[object]: values of the actual row
 *    - name[string]: name of the column on which find the unique values
 *    - edit[string]: list of edit possibility
 *    - filter[object]: list of edit possibility
 *  return: unique values
 */
DivTable.prototype._getUniqueValues = function ( row_values, name, edit, filter ) {
	var rows, selected, i, j, len,
		obj = {},
		uniqueObj  = util.clone( edit );
	
	if ( ! row_values ) {
		return uniqueObj;
	}
	
	if ( filter ) {
		obj[ filter ] = { 'isnocase' : row_values[ filter ] };
	}
	rows = this._getRows( obj );
	
	selected = util.getArrayByKey( rows, name );
	
	if ( util.isArray( uniqueObj ) ) {
		array_outer:
		for ( i = 0, len = selected.length; i < len; ++i ) {
			if ( selected[ i ] === row_values[ name ] ) {
				continue array_outer;
			}
			for ( j = uniqueObj.length; j--; ) {
				if ( selected[ i ] === uniqueObj[ j ] ) {
					uniqueObj.splice( j, 1 );
					continue array_outer;
				}
			}
		}
	}
	else if ( util.isObject( uniqueObj ) ) {
		obj_outer:
		for ( i = 0, len = selected.length; i < len; ++i ) {
			if ( selected[ i ] === row_values[ name ] ) {
				continue obj_outer;
			}
			if ( uniqueObj.hasOwnProperty( selected[ i ] ) ) {
				delete uniqueObj[ selected[ i ] ];
			}
		}
	}
	
	return uniqueObj;
};


/******************************************************************************
 * EDIT management
 */
/**
 * Build, if defined, the advanced edit method stored
 * to this.edit, it give the possibility, by passing the
 * row value, to find the hidden cell and the actual edit method
 */
DivTable.prototype._buildAdvancedEdit = function () {
	var
		EditCondition, edit,
		self   = this,
		struct = this.options.advancedEdit,
		addEditCondition = function ( condition, parent ) {
			var
				i, len,
				new_condition = new EditCondition(
					condition.edit,
					condition.hide,
					condition.depend
				);
			
			if ( condition.values ) {
				for ( i = 0, len = condition.values.length; i < len; ++i ) {
					addEditCondition( condition.values[ i ], new_condition );
				}
			}
			
			if ( parent ) {
				parent.addChild( condition.value, condition.invert || false, new_condition );
				return parent;
			}
			else {
				return new_condition;
			}
		};
	
	EditCondition = function ( edit, hide, depend ) {
		this.edit     = edit || {};
		this.hide     = hide || [];
		this.depend   = depend;
		this.children = [];
	};
	
	EditCondition.prototype = {
		getEdit : function ( value_map ) {
			if ( this.depend ) {
				var child = this.getChild( value_map );
				
				if ( ! child ) {
					return util.clone( this.edit );
				}
				
				return util.extend( this.edit, child.getEdit( value_map ) );
			}
			else {
				return util.clone( this.edit );
			}
		},
		
		getHidden : function ( value_map ) {
			if ( this.depend ) {
				var child = this.getChild( value_map );
				
				if ( ! child ) {
					return this.hide;
				}
				return this.hide.concat( child.getHidden( value_map ) );
			}
			else {
				return this.hide;
			}
		},
		
		getDepend : function () {
			var i, len,
				depends = ( this.depend ) ? [ this.depend ] : [];
			
			if ( this.children.length ) {
				for ( i = 0, len = this.children.length; i < len; ++i ) {
					depends = depends.concat( this.children[ i ].child.getDepend() );
				}
			}
			
			return depends;
		},
		
		addChild : function ( value, invert, child ) {
			this.children.push({
				value  : value,
				invert : invert,
				child  : child
			});
		},
		
		getChild : function ( value_map ) {
			var
				i, len, child,
				depend = this.depend,
				value  = value_map[ depend ];
				
			for ( i = 0, len = this.children.length; i < len; ++i ) {
				child = this.children[ i ];
				if ( ! ( child.invert ) 
						 != 
						 ! ( child.value === value || util.inArray( value, child.value ) ) ) {
					return child.child;
				}
			}
		}
	};
	
	edit = addEditCondition( struct || {} );
	
	// extend advanced get edit with the normal
	var ExtendEdit = function ( edit ) {
		this.edit = edit;
	};
	
	ExtendEdit.prototype = {
		getEdit : function () {
			var i, len, name, hidden,
				row_values = arguments[ 0 ],
				all        = arguments[ 1 ] || false,
				columns = self.options.columns,
				edit    = this.edit.getEdit.apply( this.edit, arguments );
			
			for ( i = 0, len = columns.length; i < len; i++ ) {
				name = columns[ i ].name;
				
				if ( ! edit[ name ] ) {
					edit[ name ] = columns[ i ].edit;
				}
				
				if ( ! all && columns[ i ].unique ) {
					edit[ name ] = self._getUniqueValues( row_values, name, edit[ name ] );
				}
				
				if ( typeof edit[ name ] === 'function' ) {
					edit[ name ] = edit[ name ]( row_values );
				}
			}
			
			hidden = this.getHidden.apply( this, arguments );
			
			for ( i = 0, len = hidden.length; i < len; i++ ) {
				if ( edit[ hidden[ i ] ] ) {
					edit[ hidden[ i ] ] = 'hidden';
				}
			}
			
			return edit;
		},
		
		getHidden : function () {
			return this.edit.getHidden.apply( this.edit, arguments );
		},
		
		getDepend : function () {
			return this.edit.getDepend.apply( this.edit, arguments );
		}
	};
	
	this.edit = new ExtendEdit( edit );
};

/**
 * BUILD the row EDITOR
 *  params: -
 *  return: -
 */
DivTable.prototype._buildRowEditor = function () {
	var Observable,
		BaseEditor,   TextEditor,           NumberEditor,
		SelectEditor, AdvancedSelectEditor, DateEditor,
		TimeEditor,   CheckboxEditor,       HiddenEditor,
		self    = this;
		//columns = this.options.columns;
	
	/**
	 *  Observable object
	 *  it can subscribe functions and
	 *  emit events to the subscribed functions
	 */
	Observable = function () {
		this.subscribed = {};
	};

	Observable.prototype = {
		subscribe : function ( event_name, fn, context ) {
			var id = new Date().getTime();
			
			if ( ! this.subscribed.hasOwnProperty( event_name ) ) {
				this.subscribed[ event_name ] = {};
			}
			
			this.subscribed[ event_name ][ id ] = {
				fn  : fn,
				ctx : context || this
			};
			return id;
		},
		
		emit : function ( event_name, arg_map ) {
			var id, current;
			
			if ( this.subscribed.hasOwnProperty( event_name ) ) {
				for ( id in this.subscribed[ event_name ] ) {
					if ( this.subscribed[ event_name ].hasOwnProperty( id ) ) {
						current = this.subscribed[ event_name ][ id ];
						current.fn.call( current.ctx, arg_map );
					}
				}
			}
		}
	};

	
	//------------------------------------------------------------
	// Definition of the EDITORS
	//
	BaseEditor = function ( column_name, row ) {
		Observable.call( this );
		var cell_selector = '[name="'+ column_name +'"]';
		
		this.editor        = null;
		this.column_name   = column_name;
		this.editor_class  = self.options.class_prefix +'-'+ self.options.edit_class;
		
		this.row    = row;
		this.cell   = ( row ) ? row.querySelector( cell_selector ) : null;
		this.editor = null;
	};
	
	BaseEditor.prototype = new Observable();
	BaseEditor.prototype.constructor = BaseEditor;
	
	BaseEditor.prototype.getValue = function () {
		var id = this.row.id;
		return self._getRowById( id )[ this.column_name ];
	};
	
	BaseEditor.prototype.setValue = function ( new_value, prevent_emit ) {
		var 
			id = this.row.id,
			new_value_map = {};
		
		new_value_map[ this.column_name ] = new_value;
		
		self._updateRow( id, new_value_map );
		
		if ( ! prevent_emit ) {
			this.emit( 'change', {
				column : this.column_name, 
				value  : new_value
			});
		}
	};
	
	BaseEditor.prototype.destroy  = function () {
		if ( this.editor && this.editor.parentNode ) {
			this.editor.parentNode.removeChild( this.editor );
		}
	};

	BaseEditor.prototype.init = function () {
		// To be overridden form subclasses
	};
	
	BaseEditor.prototype.update = function ( new_value ) {
		// To be overridden form subclasses
		if ( this.cell ) {
			this.cell.innerHTML = new_value;
		}
		this.setValue( new_value, true );
	};
	
	/**
	 * Text editor
	 */
	TextEditor = function ( column_name, row ) {
		BaseEditor.call( this, column_name, row );
	};
	
	TextEditor.prototype = new BaseEditor();
	TextEditor.prototype.constructor = TextEditor;
	
	TextEditor.prototype.init = function () {
		var
			self  = this,
			text  = this.getValue() || '',
			input = document.createElement( 'input' );
		
		input.className = this.editor_class;
		input.setAttribute( 'type', 'text' );
		input.value     = text;
		this.cell.insertBefore( input, this.cell.firstChild );
		
		this.editor = input;
		
		util.addEvent( input, 'keyup', function () {
			self.setValue( this.value );
		});
	};
	
	/**
	 * Number Editor
	 */
	NumberEditor = function ( column_name, row ) {
		BaseEditor.call( this, column_name, row );
	};
	
	NumberEditor.prototype = new BaseEditor();
	NumberEditor.prototype.constructor = NumberEditor;
	
	NumberEditor.prototype.init = function () {
		var
			self   = this,
			number = this.getValue() || 0,
			input  = document.createElement( 'input' );
		
		input.className = this.editor_class;
		input.setAttribute( 'type', 'number' );
		input.value     = number;
		this.cell.insertBefore( input, this.cell.firstChild );
		
		this.editor = input;
		
		util.addEvent( input, 'keyup', function () {
			self.setValue( this.value );
		});
	};
	
	/**
	 * Select Editor
	 */
	SelectEditor = function ( column_name, row ) {
		BaseEditor.call( this, column_name, row );
	};
	
	SelectEditor.prototype = new BaseEditor();
	SelectEditor.prototype.constructor = SelectEditor;
	
	SelectEditor.prototype.init = function ( arg_map ) {
		var i, len, value, selected,
			self   = this,
			values        = arg_map.values || [],
			initial_value = this.getValue(),
			select  = document.createElement( 'select' ),
			options = [],
			initial = false;
		
		select.className = this.editor_class;
		
		for ( i = 0, len = values.length; i < len; ++i ) {
			value = values[ i ];
			if ( value == initial_value ) {
				selected = 'selected="selected"';
				initial  = true;
			}
			else {
				selected = '';
			}
			options.push( ''
				+ '<option '
					+ 'value="'+ value +'" '
					+ selected +' '
					+ 'name="'+ i +'">'
						+ value
				+ '</option>'
			);
		}
		
		util.addEvent( select, 'change', function () {
			self.setValue( this.value );
		});
		
		select.innerHTML = options.join( '' );
		
		if ( ! initial ) {
			this.setValue( select.value );
		}
		
		this.cell.insertBefore( select, this.cell.firstChild );
		
		this.editor = select;
	};
	
	/**
	 * Advanced Select Editor
	 */
	AdvancedSelectEditor = function ( column_name, row ) {
		BaseEditor.call( this, column_name, row );
	};
	
	AdvancedSelectEditor.prototype = new BaseEditor();
	AdvancedSelectEditor.prototype.constructor = AdvancedSelectEditor;
	
	AdvancedSelectEditor.prototype.init = function ( arg_map ) {
		var value, selected, 
			self   = this,
			values        = arg_map.values || [],
			initial_value = this.getValue(),
			select  = document.createElement( 'select' ),
			options = [],
			initial = false;
		
		select.className = this.editor_class;
		
		for ( value in values ) {
			if ( values.hasOwnProperty( value ) ) {
				if ( value == initial_value ) {
					selected = 'selected="selected"';
					initial  = true;
				}
				else {
					selected = '';
				}
				options.push( ''
					+ '<option '
						+ 'value="'+ value +'" '
						+ selected +'>'
							+ values[ value ]
					+ '</option>'
				);
			}
		}
		
		util.addEvent( select, 'change', function () {
			self.setValue( this.value );
		});
		
		select.innerHTML = options.join( '' );
		
		if ( ! initial ) {
			this.setValue( select.value );
		}
		
		this.cell.insertBefore( select, this.cell.firstChild );
		
		this.editor = select;
	};
	
	AdvancedSelectEditor.prototype.update = function ( new_value ) {
		var i, len,
			options = this.editor.childNodes;
		
		for ( i = 0, len = options.length; i < len; i++ ) {
			if ( options[ i ].value === new_value ) {
				this.editor.selectedIndex = i;
				break;
			}
		}
		
		this.setValue( new_value, true );
	};
	
	/**
	 * Date editor
	 */
	DateEditor = function ( column_name, row ) {
		BaseEditor.call( this, column_name, row );
	};
	
	DateEditor.prototype = new BaseEditor();
	DateEditor.prototype.constructor = DateEditor;
	
	DateEditor.prototype.init = function () {
		var
			self  = this,
			text  = this.getValue() || '',
			input = document.createElement( 'input' );
		
		input.className = this.editor_class;
		input.value     = text;
		this.cell.insertBefore( input, this.cell.firstChild );
		
		this.editor = input;
		
		$( input ).datetimepicker({
				showTimepicker : false,
				onSelect : function () {
					self.setValue( this.value );
				}
			});
	};
	
	DateEditor.prototype.destroy = function () {
		$( this.editor ).datetimepicker( 'destroy' );
		BaseEditor.prototype.destroy.apply( this, arguments );
	};
	
	/**
	 * Time editor
	 */
	TimeEditor = function ( column_name, row ) {
		BaseEditor.call( this, column_name, row );
	};
	
	TimeEditor.prototype = new BaseEditor();
	TimeEditor.prototype.constructor = TimeEditor;
	
	TimeEditor.prototype.init = function () {
		var timePicker,
			self  = this,
			text  = this.getValue() || '04:00',
			input = document.createElement( 'input' );
		
		input.className = this.editor_class;
		input.value     = text;
		this.cell.insertBefore( input, this.cell.firstChild );
		
		this.editor = input;
		
		timePicker = new TimePicker({
			target : input,
			h_min  : 4,
			h_max  : 27
		});
		
		timePicker.subscribe( 'change', function ( new_val ) {
			self.setValue( new_val );
		});
		
		this.timePicker = timePicker;
	};
	
	TimeEditor.prototype.destroy = function () {
		if ( this.timePicker ) {
			this.timePicker.destroy();
		}
		BaseEditor.prototype.destroy.apply( this, arguments );
	};
	
	/**
	 * Check-box editor
	 */
	CheckboxEditor = function ( column_name, row ) {
		BaseEditor.call( this, column_name, row );
	};
	
	CheckboxEditor.prototype = new BaseEditor();
	CheckboxEditor.prototype.constructor = CheckboxEditor;
	
	CheckboxEditor.prototype.init = function () {
		var
			self  = this,
			checked  = this.getValue() || false,
			input = document.createElement( 'input' );
		
		input.className = this.editor_class;
		input.setAttribute( 'type', 'checkbox' );
		input.checked = checked;
		this.cell.insertBefore( input, this.cell.firstChild );
		
		this.editor = input;
		
		util.addEvent( input, 'change', function () {
			self.setValue( this.checked );
		});
	};
	
	HiddenEditor = function ( column_name, row ) {
		BaseEditor.call( this, column_name, row );
	};
	
	HiddenEditor.prototype = new BaseEditor();
	HiddenEditor.prototype.constructor = HiddenEditor;
	
	HiddenEditor.prototype.init = function () {
		var
			hidden = document.createElement( 'div' );
		
		hidden.className = this.editor_class +'-hidden';
		this.cell.insertBefore( hidden, this.cell.firstChild );
		
		this.editor = hidden;
	};
	
	/**
	 * Row Editor manager
	 */
	var Editor = function () {
		this.editingId  = null;
		this.editingMap = {};
		this.onChange   = null;
	};
	
	Editor.prototype.getEditorType = function ( edit_type ) {
		var editor_type, constructor;
		
		if ( edit_type === 'text' ) {
			editor_type = 'text';
			constructor = TextEditor;
		}
		else if ( edit_type === 'number' ) {
			editor_type = 'number';
			constructor = NumberEditor;
		}
		else if ( util.isArray( edit_type ) ) {
			editor_type = 'select';
			constructor = SelectEditor;
		}
		else if ( util.isObject( edit_type ) ) {
			editor_type = 'advancedSelect';
			constructor = AdvancedSelectEditor;
		}
		else if ( edit_type === 'date' ) {
			editor_type = 'date';
			constructor = DateEditor;
		}
		else if ( edit_type === 'time' ) {
			editor_type = 'time';
			constructor = TimeEditor;
		}
		else if ( edit_type === 'checkbox' ) {
			editor_type = 'checkbox';
			constructor = CheckboxEditor;
		}
		else if ( edit_type === 'hidden' ) {
			editor_type = 'hidden';
			constructor = HiddenEditor;
		}
		else {
			editor_type = 'none';
			constructor = BaseEditor;
		}
		
		return {
			type        : editor_type,
			Constructor : constructor
		};
	};
	
	Editor.prototype._editCell = function ( column, edit_type ) {
		var cell_editor,
			editor      = this.getEditorType( edit_type ),
			editor_type = editor.type;
		
		cell_editor = new editor.Constructor( column, this.row );
		cell_editor.init({
			values : edit_type
		});
		
		this.addChangeHandler( cell_editor );
		
		this.editingMap[ column ] = {
			type   : editor_type,
			editor : cell_editor
		};
	};
	
	Editor.prototype.start = function ( row, edit_map ) {
		var column;
		
		// prevent double editing row
		if ( this.editingId === row.id ) {
			return;
		}
		if ( this.editingId ) {
			this.end();
		}
		this.row       = row;
		this.editingId = row.id;
		
		this.editingMap = {};
		
		for ( column in edit_map ) {
			if ( edit_map.hasOwnProperty( column ) ) {
				this._editCell( column, edit_map[ column ] );
			}
		}
	};
	
	Editor.prototype.change = function ( edit_map ) {
		var column, edit_type, editor, editor_type;

		if ( ! this.editingId ) {
			return;
		}
		
		for ( column in edit_map ) {
			if ( edit_map.hasOwnProperty( column ) ) {
				edit_type   = edit_map[ column ];
				editor      = this.getEditorType( edit_map[ column ] );
				editor_type = editor.type;
				
				if ( this.editingMap[ column ].type !== editor_type
					|| editor_type === 'select' 
					|| editor_type === 'advancedSelect' ) {
					this.editingMap[ column ].editor.destroy();
					this._editCell( column, edit_map[ column ] );
				}
			}
		}
	};
	
	Editor.prototype.end = function () {
		var column, editor;
		
		for ( column in this.editingMap ) {
			if ( this.editingMap.hasOwnProperty( column ) ) {
				editor = this.editingMap[ column ].editor;
				editor.destroy();
				delete this.editingMap[ column ];
			}
		}
		
		if ( this.editingId ) {
			if ( typeof this.onEnd === 'function' ) {
				this.onEnd.call( self, this.row );
			}
			
			self._updateHtmlRow( this.editingId );
		}
		
		this.row        = null;
		this.editingId  = null;
	};
	
	Editor.prototype.addChangeHandler = function ( editor ) {
		editor.subscribe( 'change', function ( arg_map ) {
			if ( typeof this.onChange === 'function' ) {
				this.onChange.call( self, arg_map.column, arg_map.value );
			}
		}, this );
	};
	
	Editor.prototype.getRow = function () {
		return this.row;
	};
	
	Editor.prototype.getRowId = function () {
		return this.editingId;
	};
	
	Editor.prototype.updateRow = function ( new_values ) {
		var column;
		
		for ( column in new_values ) {
			if ( new_values.hasOwnProperty( column ) ) {
				if ( this.editingMap.hasOwnProperty( column ) ) {
					this.editingMap[ column ].editor.update( new_values[ column ] );
				}
			}
		}
	};
	
	this._editor = new Editor();
};

/**
 * START row EDITING
 *  params:
 *    - row[DOM|string]: row or row's id to be edited
 *  return: -
 */
DivTable.prototype._editRow = function ( row ) {
	var row_map, edit_map;
	
	if ( typeof row === 'string' ) {
		row = this.findRowById( row );
	}
	
	row_map  = this._getRowById( row.id );
	edit_map = this.edit.getEdit( row_map );

	this._editor.start( row, edit_map );
	this._editor.onChange = function ( column, new_value ) {
		var values,
			depend  = this.edit.getDepend(),
			row_map = this._getRowById( row.id ),
			edit    = this.edit.getEdit  ( row_map );
		
		if ( util.inArray( column, depend ) ) {
			this._editor.change( edit );
			
			values = this._getRowById( row.id );
			if ( values ) {
				this._checkRowValues( values );
			}
		}
		
		this._emitCallback( 'onChange', [ column, new_value, row ] );
	};
	this._editor.onEnd = function ( row ) {
		if ( ! row ) { return; }
		var
			id = row.id,
			values = this._getRowById( id );
		
		if ( values ) {
			this._checkRowValues( values );
		}
		this._editor.onEnd = null;
	};
};


/******************************************************************************
 * Build the base STRUCTURE of the TABLE
 *  params:
 *    - container[DOM]: container in which the table will be build
 *  return: -
 */
DivTable.prototype._buildTableStructure = function ( container ) {
	var
		i, len, base_html, rows, buttons, cur,
		header, filter,    filter_btn,
		prefix       = this.options.class_prefix,
		col          = this.options.columns,
		footer       = this.options.footer,
		footer_class = ( this.options.disable_footer ) ? ( prefix +'-'+ this.options.disable_class ) : '',
		scroll_w = util.getScrollWidth();
	
	container.innerHTML = '';
	container.classList.add( prefix +'-table' );
	
	/**
	 * Create table header
	 */
	rows = [];
	for ( i = 0, len = col.length; i < len; ++i ) {
		cur = col[ i ];
		rows.push ( ''
			+ (( cur.name ) ? 'id="'+ cur.name +'"' : '' )
			+ 'class="'+ prefix +'-cell cell-'+ i +'"'
			+ '>'+ cur.text
		);
	}
	
	base_html = ''
		+ '<div class="'+ prefix +'-header">'
			+ '<div '+ rows.join ( '</div><div ' )
		+ '</div>';
	
	container.innerHTML += base_html;
	
	/**
	 * Create filter row
	 */
	rows = [];
	for ( i = 0, len = col.length; i < len; ++i ) {
		cur = col[ i ];
		rows.push ( ''
			+ (( cur.name ) ? 'id="'+ cur.name +'"' : '' )
			+ 'class="'+ prefix +'-cell cell-'+ i +'"'
			+ '><input></input>'
		);
	}
	
	base_html = ''
		+ '<div class="'+ prefix +'-header-filter">'
			+ '<div '+ rows.join ( '</div><div ' )
		+ '</div>';
	
	container.innerHTML += base_html;
	
	/**
	 * Create table body
	 */
	base_html = ''
		+ '<div class="'+ prefix +'-body"></div>';
	
	container.innerHTML += base_html;
	
	/**
	 * Create footer
	 */
	buttons = [];
	for ( i = 0, len = footer.length; i < len; ++i ) {
		cur = footer[ i ];
		buttons.push(
			'class="ui-state-default '+ prefix +'-footer-button '+ footer_class +'" name="'+ cur +'">'
				+ '<span class="ui-icon ui-icon-'+ cur +'"></span>'
		)
	}
	base_html = ''
		+ '<div class="'+ prefix +'-footer">'
			+ ( ( buttons.length ) ? '<div '+ buttons.join ( '</div><div ' ) +'</div>' : '' );

	// Add pagination if requested
	if ( this.options.pagination ) {
		base_html += ''
			+ '<div class="'+ prefix +'-pages">'
				+ '<div class="'+ prefix +'-pages-first '+ prefix +'-footer-button" name="first"><span class="ui-icon ui-icon-seek-first"></span></div>'
				+ '<div class="'+ prefix +'-pages-prev  '+ prefix +'-footer-button" name="prev" ><span class="ui-icon ui-icon-seek-prev" ></span></div>'
				+ '<div class="'+ prefix +'-pages-curr" >'
					+ '<div class="'+ prefix +'-pages-curr-page" >'+ this.options.pagination_page  +'</div>'
					+ '<input class="'+ prefix +'-pages-curr-input"></input>'
					+ '<div class="'+ prefix +'-pages-curr-ttext">'+ this.options.pagination_total +'</div>'
					+ '<div class="'+ prefix +'-pages-curr-total"> 0 </div>'
				+ '</div>'
				+ '<div class="'+ prefix +'-pages-next  '+ prefix +'-footer-button" name="next" ><span class="ui-icon ui-icon-seek-next"></span></div>'
				+ '<div class="'+ prefix +'-pages-end   '+ prefix +'-footer-button" name="end"  ><span class="ui-icon ui-icon-seek-end" ></span></div>'
			+ '</div>';
	}

	base_html += ''
			+ '<div class="'+ prefix +'-footer-counter"></div>'
		+ '</div';
	
	container.innerHTML += base_html;
	
	/**
	 * Create upper right filter button
	 */
	base_html = ''
		+ '<div class="'+ prefix +'-filter">'
			+ '<span></span>'
		+ '</div>';
	
	container.innerHTML += base_html;
	
	/**
	 * Fix the size of the header and of the filter button
	 */
	if ( container.style.position === 'normal' ) {
		container.style.position = 'relative';
	}
	
	header = container.querySelector( '.'+ prefix +'-header' );
	header.style.width = '-webkit-calc(100% - '+ scroll_w +'px)';
	header.style.width =         'calc(100% - '+ scroll_w +'px)';
	
	filter = container.querySelector( '.'+ prefix +'-header-filter' );
	filter.style.width = '-webkit-calc(100% - '+ scroll_w +'px)';
	filter.style.width =         'calc(100% - '+ scroll_w +'px)';
	
	filter_btn = container.querySelector( '.'+ prefix +'-filter' );
	filter_btn.style.width = scroll_w +'px';
};

/**
 * Build the HTML of one ROW
 *  params:
 *    - row_map[object]: values of the row
 *  return: [string] form of the row constructed DOM object
 */
DivTable.prototype._getRowHtml = function ( row_map ) {
	var i,  len,   to_hide, edit,
		name, value, text,
		col    = this.options.columns,
		prefix = this.options.class_prefix,
		cells  = [],
		row_html = '';
	
	if ( row_map !== null && util.isObject( row_map ) ) {
		if ( this.edit ) {
			edit    = this.edit.getEdit  ( row_map, true );
			to_hide = this.edit.getHidden( row_map );
		}
		else {
			edit    = {};
			to_hide = [];
		}
		
		for ( i = 0, len = col.length; i < len; i++ ) {
			name  = col[ i ].name;
			value = text = ( row_map[ name ] == null   ) ? '' :                  //don't display the null, undefined
										 ( row_map[ name ] !== false ) ? row_map[ name ] : ''; //and the false value
			
			if ( util.isObject( edit[ name ] ) ) {
				text = edit[ name ][ value ];
				if ( text === undefined ) {
					text = value;
				}
			}
			
			cells.push(
				'class="'+ prefix +'-cell cell-'+ i +'" name="'+ name +'">'
					+ '<div class="cell-val" value="'+ value +'">'+ text +'</div>'
			);
		}
		row_html = ''
			+ '<div class="'+ prefix +'-row" id="'+ row_map.id +'">'
				+ '<div '+ cells.join( '</div><div ' ) +'</div>'
			+ '</div>';
	}
	
	return row_html;
};

/**
 * Build the HTML of ALL the table's ROWS
 */
DivTable.prototype._getRowsHtml = function () {
	var i, len, int,
		rows = this._getRows(),
		rows_html = '';
	
	if ( this.options.pagination ) {
		int  = this._getRowsInterval();
		rows = rows.slice( int.start, int.stop );
	}

	for ( i = 0, len = rows.length; i < len; i++ ) {
		rows_html += this._getRowHtml( rows[ i ] );
	}
	
	return rows_html;
};


/******************************************************************************
 * Row interactions
 */
/**
 * Select row
 *  params:
 *    - row[DOM|string]: row or row's id to be selected
 *  return: -
 */
DivTable.prototype._selectRow = function ( row ) {
	var i, len, selected,
		body      = this.domMap.body,
		sel_class = this.options.select_class;
	
	if ( typeof row === 'string' ) {
		row = this.findRowById( row );
	}
	
	if ( ! row || row.classList.contains( sel_class ) ) {
		return;
	}
	
	selected = body.querySelectorAll( '.'+ sel_class );
	for ( i = 0, len = selected.length; i < len; i++ ) {
		selected[ i ].classList.remove( sel_class );
	}
	
	row.classList.add( sel_class );
	
	this._scrollToRow( row );
	this._emitCallback( 'onSelectRow', row );
	
	if ( this.options.auto_edit ) {
		this._editRow( row.id );
	}
};

/**
 * Return the SELECTED row
 *  params: -
 *  return: [DOM] the DOM element of the selected row
 */
DivTable.prototype._getSelectedRow = function () {
	var
		body      = this.domMap.body,
		sel_class = this.options.select_class,
		selected  = body.querySelectorAll( '.'+ sel_class );
	
	return selected[ 0 ] || {};
};

/**
 * SCROLL to the defined row
 *  params:
 *    - row[DOM]: row to make visible
 *  return: -
 */
DivTable.prototype._scrollToRow = function ( row ) {
	var
		scroll, start, stop, direction,
		interval    = 20,
		speed       = 3,             //3 px/ms -> 3000 px/s
		that        = this,
		body        = this.domMap.body,
		body_scroll = body.scrollTop,
		body_heigth = body.offsetHeight,
		offset      = row.offsetTop - body.offsetTop,
		row_heigth  = row.offsetHeight;
	
	if ( this._isScrolling ) { return; }
	
	start = body_scroll;
	if ( offset < body_scroll ) {
		stop = offset;
	}
	else if ( offset + row_heigth > body_scroll + body_heigth ) {
		stop = offset - body_heigth + row_heigth;
	}
	else {
		return;
	}
	
	direction = ( start > stop ) ? -speed * interval : speed * interval;
	this._isScrolling = true;
	scroll = setInterval( function () {
		body.scrollTop += direction;
		if ( ( direction >  0 && body.scrollTop >= stop )
			|| ( direction <= 0 && body.scrollTop <= stop ) ) {
			body.scrollTop = stop;
			clearInterval( scroll );
			that._isScrolling = false;
		}
	}, interval );
};

/******************************************************************************
 * Build the this.domMap object that stores the REFERENCES
 * to the DOM elements
 *  params:
 *    - container[DOM]: container of the table
 *  return: -
 */
DivTable.prototype._setDomMap = function ( container ) {
	var prefix = this.options.class_prefix;
	
	this.domMap = {
		table : container,
		
		body         : container.querySelector( '.'+ prefix +'-body'           ),
		filter_btn   : container.querySelector( '.'+ prefix +'-filter'         ),
		footer_count : container.querySelector( '.'+ prefix +'-footer-counter' ),
		
		filter_inputs : container.querySelectorAll( '.'+ prefix +'-header-filter input' ),
		footer_btns   : container.querySelectorAll( '.'+ prefix +'-footer-button' ),

		page_first : container.querySelector( '.'+ prefix +'-pages-first'      ),
		page_prev  : container.querySelector( '.'+ prefix +'-pages-prev'       ),
		page_next  : container.querySelector( '.'+ prefix +'-pages-next'       ),
		page_end   : container.querySelector( '.'+ prefix +'-pages-end'        ),
		page_curr  : container.querySelector( '.'+ prefix +'-pages-curr-input' ),
		page_total : container.querySelector( '.'+ prefix +'-pages-curr-total' )
	};
};


/******************************************************************************
 * Add EVENTS handler to the table
 *  params: -
 *  return: -
 */
DivTable.prototype._addEventHandlers = function () {
	var
		self          = this,
		prefix        = this.options.class_prefix,
		body          = this.domMap.body,
		filter_inputs = this.domMap.filter_inputs,
		footer_btns   = this.domMap.footer_btns,
		filter_btn    = this.domMap.filter_btn;
		
	/**
	 * Input filters
	 */
	util.addEvent( filter_inputs, 'keyup', function () {
		var
			id    = this.parentNode.id,
			value = this.value;
		
		self._updateFilter( id, value );
	});
		
	/**
	 * Footer buttons
	 */
	if ( footer_btns.length ) {
		util.addEvent( footer_btns, 'mousedown', function () {
			self._footerBtnClick.call( self, this ); 
		});
	}
	/**
	 * Filter button
	 */
	util.addEvent( filter_btn, 'click', function ( evt ) {
		self._showFilterMenu( evt, this );
	});
	
	/**
	 * Row selection
	 */
	util.addEvent( body, 'click', function ( evt ) {
		var row,
			row_class = prefix +'-row',
			findParent = function ( node, class_name ) {
				if ( node ) {
					if ( node.classList && node.classList.contains( class_name ) ) {
						return node;
					}
					else {
						return findParent( node.parentNode, class_name );
					}
				}
				else {
					return null;
				}
			};
		
		if ( evt.target.classList.contains( row_class ) ) {
			row = evt.target;
		}
		else {
			row = findParent( evt.target.parentNode, row_class );
		}
		
		if ( row ) {
			self._selectRow.call( self, row );
		}
	});
};


/******************************************************************************
 * Update the table's ROWS COUNTER
 *  params: -
 *  return: text used in the footer
 */
DivTable.prototype._updateCounterText = function () {
	var
		key, interval,
		text  = this.options.counter_text,
		count = this.getRowCount(),
		value_map = {
			from  : 1,
			to    : count,
			total : count
		};
	
	if ( this.options.pagination ) {
		interval = this._getRowsInterval();
		value_map.from = Math.max( 1, interval.start + 1 );
		value_map.to   = Math.min( interval.stop, count  );
	}

	for ( key in value_map ) {
		if ( value_map.hasOwnProperty( key ) ) {
			text = text.split( '{{'+ key +'}}' ).join( value_map[ key ] );
		}
	}
	
	this.domMap.footer_count.innerHTML = text;
	return text;
};

/**
 * Update the DOM of the table from the values in the taffy db
 *  params: -
 *  return: -
 */
DivTable.prototype._updateTable = function () {
	this.endEditRow();
	
	this.domMap.body.innerHTML = this._getRowsHtml();
	this._updateCounterText();
	this._updatePagination();
};

/**
 * Rebuild and replace the html of one row
 *  params:
 *    - row[DOM|string]: row or row's id to be updated
 *  return: -
 */
DivTable.prototype._updateHtmlRow = function ( row ) {
	var values_map, new_row_html, use_element, new_row,
		sel_class   = this.options.select_class,
		is_selected = false;
	
	if ( typeof row === 'string' ) {
		row = this.findRowById( row );
	}
	
	is_selected  = row.classList.contains( sel_class );
	values_map   = this._getRowById( row.id );
	if ( ! values_map ) { return; }
	this._checkRowValues( values_map );
	new_row_html = this._getRowHtml( values_map );
	
	use_element = document.createElement( 'div' );
	use_element.innerHTML = new_row_html;
	
	new_row = use_element.firstChild;
	
	row.parentNode.replaceChild( new_row, row );
	if ( is_selected ) {
		new_row.classList.add( sel_class );
	}
};

/**
 * Footer buttons click
 *  params:
 *    - button[DOM]: button clicked
 *  return: -
 */
DivTable.prototype._footerBtnClick = function ( button ) {
	var 
		prefix        = this.options.class_prefix,
		disable_class = prefix +'-'+ this.options.disable_class,
		name          = button.getAttribute( 'name' );
	
	if ( ! button.classList.contains( disable_class ) ) {
		if ( button.parentNode.classList.contains( prefix +'-pages' ) ) {
			this._pagesBtnClick.call( this, button );
		}
		else {
			this._emitCallback( 'onFooterClick', name );
		}
	}
	
};

/**
 * Pagination buttons click
 *  params:
 *    - button[DOM]: button clicked
 *  return: -
 */
DivTable.prototype._pagesBtnClick = function ( button ) {
	var
		prefix        = this.options.class_prefix,
		disable_class = prefix +'-'+ this.options.disable_class,
		name          = button.getAttribute( 'name' );

	switch ( name ) {
		case 'first' : this._showFirstPage(); break;
		case 'prev'  : this._showPrevPage (); break;
		case 'next'  : this._showNextPage (); break;
		case 'end'   : this._showEndPage  (); break;
		default:
			console.warn( 'Button with name %s not known!', name );
	}
};

/**
 * Display the filter menu
 *  params:
 *    - e[event]: the click event on the filter button
 *    - that[DOM]: filter button element
 *  return: -
 */
DivTable.prototype._showFilterMenu = function ( e, that ) {
	if ( this.options.showFilterMenu ) {
		this.options.showFilterMenu.call( this.domMap.table, e, that );
		console.log( 'custom filter' );
	}
	else {
		this.domMap.table.classList.toggle( this.options.filter_class );
	}
};

/***************************************************************
 * FILTER
 */
DivTable.prototype.setFilter = function ( new_filter ) {
	this.filter = new_filter || {};
};

DivTable.prototype.editFilter = function ( name, value ) {
	this.filter[ name ] = {
		likenocase : ''+ value
	};
};

DivTable.prototype.removeFilter = function ( name ) {
	delete this.filter[ name ];
};

DivTable.prototype._updateFilter = function ( id, value ) {
	this.editFilter( id, value );
	
	this._updateTable();
};

/********************************************************************
 * PAGINATION management
 */
/**
 * Show the first page
 */
DivTable.prototype._showFirstPage = function () {
	if ( this.pagination !== 1 ){
		this.pagination.page = 1;
		this._updateTable();
	}
};

/**
 * Show the previous page
 */
DivTable.prototype._showPrevPage = function () {
	if ( this.pagination.page > 1 ) {
		this.pagination.page--;
		this._updateTable();
	}
};

/**
 * Show the next page
 */
DivTable.prototype._showNextPage = function () {
	var count = this._getPagesCount();
	if ( this.pagination.page < count ) {
		this.pagination.page++;
		this._updateTable();
	}
};

/**
 * Show the last page
 */
DivTable.prototype._showEndPage = function () {
	var count = this._getPagesCount();
	if ( this.pagination.page !== count ) {
		this.pagination.page = count;
		this._updateTable();
	}
};

/**
 * Calculate the number of pages
 */
DivTable.prototype._getPagesCount = function () {
	var
		rows_in_page = this._getRowsInPage(),
		rows_count   = this._getRows().length;

	return Math.ceil( rows_count / rows_in_page );
};

/**
 * Calculate how many rows can be displayed in the table
 */
DivTable.prototype._getRowsInPage = function () {
	if ( ! this.pagination.rows_pro_page ) {
		this._calcRowsInPage();
	}
	return this.pagination.rows_pro_page;
};

DivTable.prototype._calcRowsInPage = function () {
	var id, count, body_h, row_h,
		body = this.domMap.body,
		row  = body.querySelector( '.'+ this.options.class_prefix +'-row' );

	if ( ! row ) {
		id  = 'row-'+ new Date().getTime();
		row = this._getRowHtml({ id : id });
		this.domMap.body.innerHTML += row;
		count = this._getRowsInPage();
		row = body.querySelector( '#'+ id );
		row.parentNode.removeChild( row );
		return count;
	}

	body_h = body.offsetHeight;
	row_h  = row.offsetHeight;

	this.pagination.rows_pro_page = Math.floor( body_h / row_h );
};

/**
 * Return the interval of pages to display
 */
DivTable.prototype._getRowsInterval = function () {
	var
		count  = this._getRowsInPage(),
		offset = count * ( this.pagination.page - 1 );

	return {
		start : offset,
		stop  : offset + count
	};
};

/**
 * Update the pagination informations
 */
DivTable.prototype._updatePagination = function () {
	if ( ! this.options.pagination ) { return; }
	var count = this._getPagesCount();

	this.domMap.page_curr.value  = this.pagination.page;
	this.domMap.page_total.innerHTML = count;

	this._updatePageButtons();
};

/**
 * Enable or disable the pagination buttons
 */
DivTable.prototype._updatePageButtons = function () {
	var current = this.pagination.page,
		total   = this._getPagesCount();

	if ( current > 1 ) {
		this._enablePageButtons(['first','prev']);
	}
	else {
		this._disablePageButtons(['first','prev']);
	}

	if ( current < total ) {
		this._enablePageButtons(['end','next']);
	}
	else {
		this._disablePageButtons(['end','next']);
	}
};

DivTable.prototype._enablePageButtons = function ( buttons ) {
	var i, len, button,
		disable_class = this.options.class_prefix +'-'+ this.options.disable_class;

	for ( i = 0, len = buttons.length; i < len; i++ ) {
		button = this.domMap[ 'page_'+ buttons[i] ];
		button.classList.remove( disable_class );
	}
};

DivTable.prototype._disablePageButtons = function ( buttons ) {
	var i, len, button,
		disable_class = this.options.class_prefix +'-'+ this.options.disable_class;

	for ( i = 0, len = buttons.length; i < len; i++ ) {
		button = this.domMap[ 'page_'+ buttons[i] ];
		button.classList.add( disable_class );
	}
};

DivTable.prototype._onResize = function () {
	var old;
	old = this._getRowsInPage();

	this._calcRowsInPage();

	if ( old !== this._getRowsInPage() ) {
		this._updateTable();
	}
};

/********************************************************************
 * PUBLICS METHODS
 */
/**
 * Return the count of the active rows in the TaffyDB
 *  params:
 *    - table_id[number|string|null]: id of the saved table,
 *                                    if null use the current table
 *  return: number of rows in the table
 */
DivTable.prototype.getRowCount = function ( table_id ) {
	var count = 0;
	if ( ! table_id ) {
		count = this._getRows().length;
	}
	else {
		this.table = this._saveMap[ table_id ];
		count = this._getRows().length;
		this.table = this._saveMap[ this._currentTableId ];
	}
	return count;
};

/**
 * Return an array of rows matching the filter
 *  params:
 *    - filter[object|null]: filter the rows
 *  return: [array] containing the found rows
 */
DivTable.prototype.getRows = function ( filter ) {
	return this._getRows( filter );
};

/**
 * Return the values of the row with the specified id
 *  params:
 *    - id[number|string]: the id of the row to find
 *  return: [object] values of the row
 */
DivTable.prototype.getRowById = function ( id ) {
	return this._getRowById( id );
};

/**
 * Return the values of the row with the specified id
 * or the selected row
 *  params:
 *    - row_id[number|string|null]: the id of the row to find
 *                                  if null use the selected row
 *  return: [object] values of the row
 */
DivTable.prototype.getRowValues = function ( row_id ) {
	var
		id  = row_id || this._getSelectedRow().id || '',
		row = this._getRowById( id );
	return row || {};
};

/**
 * Select the defined row
 *  params:
 *    - row[DOM|string]: the row or the row's id to select
 *  return: -
 */
DivTable.prototype.selectRow = function ( row ) {
	this._selectRow( row );
};

/**
 * Edit the selected row
 *  params:
 *    - id[number|string|null]: the id of the row to select
 *                                  if null use the selected row
 *  return: -
 */
DivTable.prototype.editRow = function ( id ) {
	var selected = id || this._getSelectedRow().id;
	
	this._editRow( ''+ selected );
};

/**
 * End the editing mode
 *  params: -
 *  return: -
 */
DivTable.prototype.endEditRow = function () {
	this._editor.end();
};

/**
 * Insert a new row in the table
 *  params:
 *    - row_map[object]: insert the row in the table
 *  return: -
 */
DivTable.prototype.newRow = function ( row_map ) {
	row_map = row_map || {};
	
	this._insertRow( row_map );
	this._updateTable();
};

/**
 * Insert an array of rows in the table
 *  params:
 *    - rows_list[array]: array of rows to be inserted in the table
 *  return: -
 */
DivTable.prototype.newRows = function ( rows_list ) {
	var i,
		len = rows_list.length;
	
	for ( i = 0; i < len; i++ ) {
		this._insertRow( rows_list[ i ] );
	}
	
	this._updateTable();
};

/**
 * Update row
 *  params:
 *    - row_id[number|string]: the id of the row
 *    - new_values_map[obj]: the new values to be set
 *    - preventTableUpdate[boolean]: if set the table will not be redrawn
 *    - preventEdited[boolean]: if set the row is not marked as edited
 *  return: -
 */
DivTable.prototype.updateRow = function ( row_id, new_values, preventTableUpdate, preventEdited ) {
	this._updateRow( row_id, new_values, preventEdited );

	if ( ! preventTableUpdate ) {
		this._editor.end();
		this._updateTable();
	}
	else if ( this._editor.getRowId() == row_id ) {
		this._editor.updateRow( new_values );
	}
	else {
		this._updateHtmlRow( ''+ row_id );
	}
};

/**
 * Delete row by id
 *  params:
 *    - id[number|string]: the id of the row
 *    - from_db[boolean]: if set the row will be deleted
 *                        from the database, otherwise will be
 *                        marked as deleted
 *  return: -
 */
DivTable.prototype.deleteRow = function ( id, from_db ) {
	var next = this.findNextRow( id );
	
	if ( this._editor.getRowId() === id ) {
		this._editor.end();
	}
	
	this._deleteRow( id, from_db );
	this._updateTable();
	
	this._selectRow( ''+ next.id );
};

/**
 * Delete rows
 *  params:
 *    - rows_array[array]: array of rows' ids
 *    - from_db[boolean]: if set the row will be deleted
 *                        from the database, otherwise will be
 *                        marked as deleted
 *  return: -
 */
DivTable.prototype.deleteRows = function ( rows_array, from_db ) {
	var i, len;
	
	for ( i = 0, len = rows_array.length - 1; i < len; i++ ) {
		this._deleteRow( rows_array[ i ].id || rows_array[ i ], from_db );
	}
	this.deleteRow( rows_array[ i ].id || rows_array[ i ], from_db );
};

/**
 * Delete editing row
 *  params: -
 *  return: -
 */
DivTable.prototype.deleteEditRow = function () {
	if ( ! this._editor.getRow() ) { return; }
	var
		id   = this._editor.getRowId();
	
	this.deleteRow( id );
};

/**
 * Delete selected row
 *  params: -
 *  return: -
 */
DivTable.prototype.deleteSelectedRow = function () {
	var selected = this._getSelectedRow();
	
	if ( ! selected ) { return; }
	
	this.deleteRow( selected.id );
};

/**
 * Find a row by his id
 *  params:
 *    - row_id[number|string]: the id of the row to be found
 *  return: [DOM] of the found row
 */
DivTable.prototype.findRowById = function ( row_id ) {
	return this.domMap.body.querySelector( '[id="'+ row_id +'"]' );
};

/**
 * Return the row next to the one with the defined id
 *  params:
 *    - id[number|string]: the id of the previous row
 *  return: [object] of the next row
 */
DivTable.prototype.findNextRow = function ( id ) {
	var i, len, next_row,
			rows = this._getRows();
		
		for ( i = 0, len = rows.length; i < len; i++ ) {
			if ( rows[ i ].id == id ) {
				next_row = rows[ i + 1 ];
				break;
			}
		}
		return next_row || {};
};

/**
 * Return the current table id
 *  params: -
 *  return: [number] id of the current table
 */
DivTable.prototype.getTableId = function () {
	return this._currentTableId;
};

/**
 * Return an array of saved tables ids
 *  params: -
 *  return: [array] of ids of the saved tables
 */
DivTable.prototype.getSavedTables = function () {
	var table_id,
		saved = [];
	
	for ( table_id in this._saveMap ) {
		if ( this._saveMap.hasOwnProperty( table_id ) ) {
			saved.push( table_id );
		}
	}
	return saved;
};

/**
 * Create a new blank table and saves it
 *  params: -
 *  return: [number] id of the new table
 */
DivTable.prototype.newTable = function () {
	this._currentTableId = new Date().getTime();
	this.table    = TAFFY();
	this._saveMap[ this._currentTableId ] = this.table;
	
	this._updateTable();
	
	return this._currentTableId;
};

/**
 * Restore a previous created table
 *  params: [number|string] id of one stored table
 *  return: [boolean] true if the table has been restored
 */
DivTable.prototype.restoreTable = function ( table_id ) {
	var restored = false;
	if ( this._saveMap.hasOwnProperty( table_id ) ) {
		this.table           = this._saveMap[ table_id ];
		this._currentTableId = table_id;
		restored = true;
		
		this._updateTable();
	}
	return restored;
};

/**
 * Destroy a table
 *  params: [number|string] id of one stored table
 *  return: -
 */
DivTable.prototype.destroy = function ( table_id ) {
	if ( ! table_id ) {
		table_id = this._currentTableId;
	}
	if ( this._saveMap.hasOwnProperty( table_id ) ) {
		if ( this._currentTableId === table_id ) {
			this.newTable();
		}
		delete this._saveMap[ table_id ];
	}
};


/**
 * save the actual status, so it's possible to find which rows are 
 * added / modified / delete
 *  params: -
 *  return: -
 */
DivTable.prototype.saveStatus = function () {
	// Really delete the deleted rows
	this.table({ deleted : 'true' }).remove();
	// Make all the rows not new, not edited and not deleted
	this.table().update({
		'new'   : 'false', 
		edited  : 'false', 
		deleted : 'false'
	});
};

/**
 * Return the new rows
 *  params: [boolean] if set return values from stored table too
 *  return: [array|object] containing the new rows
 */
DivTable.prototype.getNewRows = function ( include_saved ) {
	var id, new_rows,
		filter     = { 'new' : 'true' },
		return_map = {};
	if ( include_saved ) {
		for ( id in this._saveMap ) {
			if ( this._saveMap.hasOwnProperty( id ) ) {
				return_map[ id ] = this._saveMap[ id ]( filter ).get();
			}
		}
		new_rows = util.clone( return_map );
	}
	else {
		new_rows = util.clone( this.table( filter ).get() );
	}
	return new_rows;
},

/**
 * Return the edited rows
 *  params: [boolean] if set return values from stored table too
 *  return: [array|object] containing the edited rows
 */
DivTable.prototype.getEditedRows = function ( include_saved ) {
	var id,
		filter     = { 'edited' : 'true' },
		return_map = {};
	if ( include_saved ) {
		for ( id in this._saveMap ) {
			if ( this._saveMap.hasOwnProperty( id ) ) {
				return_map[ id ] = this._saveMap[ id ]( filter ).get();
			}
		}
		
		return util.clone( return_map );
	}
	return util.clone( this.table( filter ).get() );
};

/**
 * Return the deleted rows
 *  params: [boolean] if set return values from stored table too
 *  return: [array|object] containing the deleted rows
 */
DivTable.prototype.getDeletedRows = function ( include_saved ) {
	var id,
		filter     = { 'deleted' : 'true' },
		return_map = {};
	if ( include_saved ) {
		for ( id in this._saveMap ) {
			if ( this._saveMap.hasOwnProperty( id ) ) {
				return_map[ id ] = this._saveMap[ id ]( filter ).get();
			}
		}
		
		return util.clone( return_map );
	}
	return util.clone( this.table( filter ).get() );
};

/**
 * Check if the status of the table is changed
 *  params: [boolean] if set return values from stored table too
 *  return: [boolean] true if at least one row is created, changed or deleted
 */
DivTable.prototype.isStatusChanged = function ( include_saved ) {
	var i, len, key, current, fn,
		functions = [ 'getNewRows', 'getEditedRows', 'getDeletedRows' ],
		count = 0;
	if ( include_saved ) {
		for ( i = 0, len = functions.length; i < len; ++i ) {
			fn = functions[ i ];
			current = this[ fn ]( include_saved );
			for ( key in current ) {
				if ( current.hasOwnProperty( key ) ) {
					count += current[ key ].length;
				}
			}
		}
		return count;
	}
	return (
		( this.getNewRows    ().length
		+ this.getEditedRows ().length
		+ this.getDeletedRows().length ) > 0 );
		
};

/**
 * Extend the prototype of the table
 */
DivTable.prototype.extend = function ( name, fn ) {
	var _super = DivTable.prototype[ name ];
	DivTable.prototype[ name ] = function () {
		this._super = _super;
		fn.apply( this, arguments );
	};
};

/**
 * Bind an event to the resize of the table
 * to be used in the pagination mode to
 * recalculate the count of rows pro page
 */
DivTable.prototype.bindResize = function ( element, event ) {
	util.addEvent( element, event, util.reduce( this._onResize.bind(this) ) );
};

/**
 * Utility used by the div table
 */
var util = {
	/**
	 * Returns the size of the scrollbar
	 */
	getScrollWidth : function () {
		var outer, inner, widthNoScroll, widthWithScroll;
		
		outer = document.createElement('div');
		outer.style.visibility = 'hidden';
		outer.style.width = '100px';
		outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

		document.body.appendChild(outer);

		widthNoScroll = outer.offsetWidth;
		// force scrollbars
		outer.style.overflow = 'scroll';

		// add innerdiv
		inner = document.createElement('div');
		inner.style.width = '100%';
		outer.appendChild(inner);        

		widthWithScroll = inner.offsetWidth;

		// remove divs
		outer.parentNode.removeChild(outer);

		return widthNoScroll - widthWithScroll;
	},
	
	/**
	 * Object and Array functions
	 */
	inArray : function ( element, array ) {
		var i, len;
		
		if ( Object.prototype.toString.call( array ) === '[object Array]' ) {
			for ( i = 0, len = array.length; i < len; ++i ) {
				if ( ''+ element === ''+ array[ i ] ) {
					return true;
				}
			}
		}
		
		return false;
	},

	extend : function ( obj1, obj2 ) {
		var
			key,
			extended = {};
			
		for ( key in obj1 ) {
			if ( obj1.hasOwnProperty( key ) ) {
				extended[ key ] = obj1[ key ];
			}
		}
		for ( key in obj2 ) {
			if ( obj2.hasOwnProperty( key ) ) {
				extended[ key ] = obj2[ key ];
			}
		}
		return extended;
	},

	getType : function ( obj ) {
		return Object.prototype.toString.call( obj );
	},
	
	isObject : function ( o ) {
		return util.getType( o ) === '[object Object]';
	},
	
	isArray : function ( o ) {
		return util.getType( o ) === '[object Array]';
	},

	clone : function ( o ) {
		var i, len, obj;
		
		if ( util.isArray( o ) ) {
			obj = [];
			
			for ( i = 0, len = o.length; i < len; ++i ) {
				if ( util.isArray( o[ i ] ) || util.isObject( o[ i ] ) ) {
					obj[ i ] = util.clone ( o[ i ] );
				}
				else {
					obj[ i ] = o[ i ];
				}
			}
			
			return obj;
		}
		else if ( util.isObject( o ) ) {
			obj = {};
			
			for ( i in o ) {
				if ( ! o.hasOwnProperty( i ) ) { continue; }
			
				if ( util.isArray( o[ i ] ) || util.isObject( o[ i ] ) ) {
					obj[ i ] = util.clone ( o[ i ] );
				}
				else {
					obj[ i ] = o[ i ];
				}
			}
			
			return obj;
		}
		else {
			return o;
		}
	},

	getArrayByKey : function ( obj, key ) {
		var
			i, len,
			array = [];
			
		for ( i = 0, len = obj.length; i < len; ++i ) {
			if ( obj[ i ].hasOwnProperty( key ) ) {
				array.push( obj[ i ][ key] );
			}
		}
		
		return array;
	},
	
	inherit : function ( obj ) {
		function F(){}
		F.prototype = obj;
		return new F();
	},
	
	/**
	 * Event handler management
	 */
	addEvent : (function( window, document ) {
		if ( document.addEventListener ) { 
			return function( elem, type, cb ) {
				if ( (elem && !elem.length) || elem === window ) {
					elem.addEventListener(type, cb, false ); 
				} 
				else if ( elem && elem.length ) { 
					var len = elem.length; 
					for ( var i = 0; i < len; i++ ) { 
						util.addEvent( elem[i], type, cb ); 
					} 
				} 
			}; 
		} 
		else if ( document.attachEvent ) { 
			return function ( elem, type, cb ) { 
				if ( (elem && !elem.length) || elem === window ) { 
					elem.attachEvent( 'on' + type, function() { return cb.call(elem, window.event); } ); 
				} 
				else if ( elem.length ) { 
					var len = elem.length; 
					for ( var i = 0; i < len; i++ ) { 
						util.addEvent( elem[i], type, cb ); 
					} 
				} 
			}; 
		} 
	})( this, document ),
	
	removeEvent : (function( window, document ) {
		if ( document.removeEventListener ) { 
			return function( elem, type, cb ) { 
				if ( (elem && !elem.length) || elem === window ) { 
					elem.removeEventListener(type, cb, false ); 
				} 
				else if ( elem && elem.length ) { 
					var len = elem.length; 
					for ( var i = 0; i < len; i++ ) { 
						util.removeEvent( elem[i], type, cb ); 
					} 
				} 
			}; 
		} 
		else if ( document.detachEvent ) { 
			return function ( elem, type, cb ) { 
				if ( (elem && !elem.length) || elem === window ) { 
					elem.detachEvent( 'on' + type, function() { return cb.call(elem, window.event); } ); 
				} 
				else if ( elem.length ) { 
					var len = elem.length; 
					for ( var i = 0; i < len; i++ ) { 
						util.removeEvent( elem[i], type, cb ); 
					} 
				} 
			}; 
		} 
	})( this, document ),
	
	reduce : function ( fn, interval ) {
		var in_hold;

		return function () {
			if ( in_hold ) { return; }
			in_hold = true;

			setTimeout(function () {
				in_hold = false;
			}, interval || 20 );
			fn.apply( this, arguments );
		}
	}
	
};


/**
 * Return the constructor function
 */
return function ( container, options ) {
	var table,
		context = function () {};
	
	context.div_table = function () {
		var result,
			fn_name = [].shift.apply( arguments );
		if ( fn_name[ 0 ] === '_' ) {
			throw 'You can\'t call the private method! '+ fn_name;
		}
		else if ( typeof table[ fn_name ] === 'function' ) {
			result = table[ fn_name ].apply( table, arguments );
			//console.log( 'div_table', fn_name, arguments, 'resutl:', result );
			return result;
		}
		else {
			console.warn( fn_name, 'is not a callable function' );
		}
	};
	
	table = new DivTable();
	table.init( container, options, context );
	
	return context;
};

})();

// jQuery constructor
if ( window.jQuery ) {
	window.jQuery.fn.div_table = function( options ) {
		return divTableMaker( this[ 0 ], options );
	};
}