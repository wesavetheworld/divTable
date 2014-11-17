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
'use strict';

/***************************************************************
 * Taffy database
 */
var TAFFY,exports,T;(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S;if(!TAFFY){i="2.7";s=1;o="000000";u=1e3;a={};f=function(e){if(TAFFY.isArray(e)||TAFFY.isObject(e)){return e}else{return JSON.parse(e)}};y=function(e,t){return b(e,function(e){return t.indexOf(e)>=0})};b=function(e,t,n){var r=[];if(e==null)return r;if(Array.prototype.filter&&e.filter===Array.prototype.filter)return e.filter(t,n);l(e,function(e,i,s){if(t.call(n,e,i,s))r[r.length]=e});return r};S=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"};E=function(e){var t=T.isArray(e)?[]:T.isObject(e)?{}:null;if(e===null)return e;for(var n in e){t[n]=S(e[n])?e[n].toString():T.isArray(e[n])||T.isObject(e[n])?E(e[n]):e[n]}return t};w=function(e){var t=JSON.stringify(e);if(t.match(/regex/)===null)return t;return JSON.stringify(E(e))};l=function(e,t,n){var r,i,s,o;if(e&&(T.isArray(e)&&e.length===1||!T.isArray(e))){t(T.isArray(e)?e[0]:e,0)}else{for(r,i,s=0,e=T.isArray(e)?e:[e],o=e.length;s<o;s++){i=e[s];if(!T.isUndefined(i)||n||false){r=t(i,s);if(r===T.EXIT){break}}}}};c=function(e,t){var n=0,r,i;for(i in e){if(e.hasOwnProperty(i)){r=t(e[i],i,n++);if(r===T.EXIT){break}}}};a.extend=function(e,t){a[e]=function(){return t.apply(this,arguments)}};h=function(e){var t;if(T.isString(e)&&/[t][0-9]*[r][0-9]*/i.test(e)){return true}if(T.isObject(e)&&e.___id&&e.___s){return true}if(T.isArray(e)){t=true;l(e,function(e){if(!h(e)){t=false;return TAFFY.EXIT}});return t}return false};d=function(e,t){var n=true;l(t,function(t){switch(T.typeOf(t)){case"function":if(!t.apply(e)){n=false;return TAFFY.EXIT}break;case"array":n=t.length===1?d(e,t[0]):t.length===2?d(e,t[0])||d(e,t[1]):t.length===3?d(e,t[0])||d(e,t[1])||d(e,t[2]):t.length===4?d(e,t[0])||d(e,t[1])||d(e,t[2])||d(e,t[3]):false;if(t.length>4){l(t,function(t){if(d(e,t)){n=true}})}break}});return n};p=function(e){var t=[];if(T.isString(e)&&/[t][0-9]*[r][0-9]*/i.test(e)){e={___id:e}}if(T.isArray(e)){l(e,function(e){t.push(p(e))});e=function(){var e=this,n=false;l(t,function(t){if(d(e,t)){n=true}});return n};return e}if(T.isObject(e)){if(T.isObject(e)&&e.___id&&e.___s){e={___id:e.___id}}c(e,function(e,n){if(!T.isObject(e)){e={is:e}}c(e,function(e,r){var i=[],s;s=r==="hasAll"?function(e,t){t(e)}:l;s(e,function(e){var t=true,s=false,o;o=function(){var i=""+this[n],s="==",o="!=",u="===",a="<",f=">",l="<=",c=">=",h="!==",p;if(typeof i==="undefined"){return false}if(r.indexOf("!")===0&&r!==o&&r!==h){t=false;r=r.substring(1,r.length)}p=r==="regex"?e.test(i):r==="lt"||r===a?i<e:r==="gt"||r===f?i>e:r==="lte"||r===l?i<=e:r==="gte"||r===c?i>=e:r==="left"?i.indexOf(e)===0:r==="leftnocase"?i.toLowerCase().indexOf(e.toLowerCase())===0:r==="right"?i.substring(i.length-e.length)===e:r==="rightnocase"?i.toLowerCase().substring(i.length-e.length)===e.toLowerCase():r==="like"?i.indexOf(e)>=0:r==="likenocase"?i.toLowerCase().indexOf(e.toLowerCase())>=0:r===u||r==="is"?i===e:r===s?i==e:r===h?i!==e:r===o?i!=e:r==="isnocase"?i.toLowerCase?i.toLowerCase()===e.toLowerCase():i===e:r==="has"?T.has(i,e):r==="hasall"?T.hasAll(i,e):r==="contains"?TAFFY.isArray(i)&&i.indexOf(e)>-1:r.indexOf("is")===-1&&!TAFFY.isNull(i)&&!TAFFY.isUndefined(i)&&!TAFFY.isObject(e)&&!TAFFY.isArray(e)?e===i[r]:T[r]&&T.isFunction(T[r])&&r.indexOf("is")===0?T[r](i)===e:T[r]&&T.isFunction(T[r])?T[r](i,e):false;p=p&&!t?false:!p&&!t?true:p;return p};i.push(o)});if(i.length===1){t.push(i[0])}else{t.push(function(){var e=this,t=false;l(i,function(n){if(n.apply(e)){t=true}});return t})}})});e=function(){var e=this,n=true;n=t.length===1&&!t[0].apply(e)?false:t.length===2&&(!t[0].apply(e)||!t[1].apply(e))?false:t.length===3&&(!t[0].apply(e)||!t[1].apply(e)||!t[2].apply(e))?false:t.length===4&&(!t[0].apply(e)||!t[1].apply(e)||!t[2].apply(e)||!t[3].apply(e))?false:true;if(t.length>4){l(t,function(t){if(!d(e,t)){n=false}})}return n};return e}if(T.isFunction(e)){return e}};m=function(e,t){var n=function(e,n){var r=0;T.each(t,function(t){var i,s,o,u,a;i=t.split(" ");s=i[0];o=i.length===1?"logical":i[1];if(o==="logical"){u=v(e[s]);a=v(n[s]);T.each(u.length<=a.length?u:a,function(e,t){if(u[t]<a[t]){r=-1;return TAFFY.EXIT}else if(u[t]>a[t]){r=1;return TAFFY.EXIT}})}else if(o==="logicaldesc"){u=v(e[s]);a=v(n[s]);T.each(u.length<=a.length?u:a,function(e,t){if(u[t]>a[t]){r=-1;return TAFFY.EXIT}else if(u[t]<a[t]){r=1;return TAFFY.EXIT}})}else if(o==="asec"&&e[s]<n[s]){r=-1;return T.EXIT}else if(o==="asec"&&e[s]>n[s]){r=1;return T.EXIT}else if(o==="desc"&&e[s]>n[s]){r=-1;return T.EXIT}else if(o==="desc"&&e[s]<n[s]){r=1;return T.EXIT}if(r===0&&o==="logical"&&u.length<a.length){r=-1}else if(r===0&&o==="logical"&&u.length>a.length){r=1}else if(r===0&&o==="logicaldesc"&&u.length>a.length){r=-1}else if(r===0&&o==="logicaldesc"&&u.length<a.length){r=1}if(r!==0){return T.EXIT}});return r};return e&&e.push?e.sort(n):e};(function(){var e={},t=0;v=function(n){if(t>u){e={};t=0}return e["_"+n]||function(){var r=String(n),i=[],s="_",o="",u,a,f;for(u=0,a=r.length;u<a;u++){f=r.charCodeAt(u);if(f>=48&&f<=57||f===46){if(o!=="n"){o="n";i.push(s.toLowerCase());s=""}s=s+r.charAt(u)}else{if(o!=="s"){o="s";i.push(parseFloat(s));s=""}s=s+r.charAt(u)}}i.push(o==="n"?parseFloat(s):s.toLowerCase());i.shift();e["_"+n]=i;t++;return i}()}})();g=function(){this.context({results:this.getDBI().query(this.context())})};a.extend("filter",function(){var e=TAFFY.mergeObj(this.context(),{run:null}),t=[];l(e.q,function(e){t.push(e)});e.q=t;l(arguments,function(t){e.q.push(p(t));e.filterRaw.push(t)});return this.getroot(e)});a.extend("order",function(e){e=e.split(",");var t=[],n;l(e,function(e){t.push(e.replace(/^\s*/,"").replace(/\s*$/,""))});n=TAFFY.mergeObj(this.context(),{sort:null});n.order=t;return this.getroot(n)});a.extend("limit",function(e){var t=TAFFY.mergeObj(this.context(),{}),n;t.limit=e;if(t.run&&t.sort){n=[];l(t.results,function(t,r){if(r+1>e){return TAFFY.EXIT}n.push(t)});t.results=n}return this.getroot(t)});a.extend("start",function(e){var t=TAFFY.mergeObj(this.context(),{}),n;t.start=e;if(t.run&&t.sort&&!t.limit){n=[];l(t.results,function(t,r){if(r+1>e){n.push(t)}});t.results=n}else{t=TAFFY.mergeObj(this.context(),{run:null,start:e})}return this.getroot(t)});a.extend("update",function(e,t,n){var r=true,i={},s=arguments,o;if(TAFFY.isString(e)&&(arguments.length===2||arguments.length===3)){i[e]=t;if(arguments.length===3){r=n}}else{i=e;if(s.length===2){r=t}}o=this;g.call(this);l(this.context().results,function(e){var t=i;if(TAFFY.isFunction(t)){t=t.apply(TAFFY.mergeObj(e,{}))}else{if(T.isFunction(t)){t=t(TAFFY.mergeObj(e,{}))}}if(TAFFY.isObject(t)){o.getDBI().update(e.___id,t,r)}});if(this.context().results.length){this.context({run:null})}return this});a.extend("remove",function(e){var t=this,n=0;g.call(this);l(this.context().results,function(e){t.getDBI().remove(e.___id);n++});if(this.context().results.length){this.context({run:null});t.getDBI().removeCommit(e)}return n});a.extend("count",function(){g.call(this);return this.context().results.length});a.extend("callback",function(e,t){if(e){var n=this;setTimeout(function(){g.call(n);e.call(n.getroot(n.context()))},t||0)}return null});a.extend("get",function(){g.call(this);return this.context().results});a.extend("stringify",function(){return JSON.stringify(this.get())});a.extend("first",function(){g.call(this);return this.context().results[0]||false});a.extend("last",function(){g.call(this);return this.context().results[this.context().results.length-1]||false});a.extend("sum",function(){var e=0,t=this;g.call(t);l(arguments,function(n){l(t.context().results,function(t){e=e+(t[n]||0)})});return e});a.extend("min",function(e){var t=null;g.call(this);l(this.context().results,function(n){if(t===null||n[e]<t){t=n[e]}});return t});(function(){var e=function(){var e,t,n;e=function(e,t,n){var r,i,s,o;if(n.length===2){r=e[n[0]];s="===";i=t[n[1]]}else{r=e[n[0]];s=n[1];i=t[n[2]]}switch(s){case"===":return r===i;case"!==":return r!==i;case"<":return r<i;case">":return r>i;case"<=":return r<=i;case">=":return r>=i;case"==":return r==i;case"!=":return r!=i;default:throw String(s)+" is not supported"}};t=function(e,t){var n={},r,i;for(r in e){if(e.hasOwnProperty(r)){n[r]=e[r]}}for(r in t){if(t.hasOwnProperty(r)&&r!=="___id"&&r!=="___s"){i=!TAFFY.isUndefined(n[r])?"right_":"";n[i+String(r)]=t[r]}}return n};n=function(n){var r,i,s=arguments,o=s.length,u=[];if(typeof n.filter!=="function"){if(n.TAFFY){r=n()}else{throw"TAFFY DB or result not supplied"}}else{r=n}this.context({results:this.getDBI().query(this.context())});TAFFY.each(this.context().results,function(n){r.each(function(r){var a,f=true;e:for(i=1;i<o;i++){a=s[i];if(typeof a==="function"){f=a(n,r)}else if(typeof a==="object"&&a.length){f=e(n,r,a)}else{f=false}if(!f){break e}}if(f){u.push(t(n,r))}})});return TAFFY(u)()};return n}();a.extend("join",e)})();a.extend("max",function(e){var t=null;g.call(this);l(this.context().results,function(n){if(t===null||n[e]>t){t=n[e]}});return t});a.extend("select",function(){var e=[],t=arguments;g.call(this);if(arguments.length===1){l(this.context().results,function(n){e.push(n[t[0]])})}else{l(this.context().results,function(n){var r=[];l(t,function(e){r.push(n[e])});e.push(r)})}return e});a.extend("distinct",function(){var e=[],t=arguments;g.call(this);if(arguments.length===1){l(this.context().results,function(n){var r=n[t[0]],i=false;l(e,function(e){if(r===e){i=true;return TAFFY.EXIT}});if(!i){e.push(r)}})}else{l(this.context().results,function(n){var r=[],i=false;l(t,function(e){r.push(n[e])});l(e,function(e){var n=true;l(t,function(t,i){if(r[i]!==e[i]){n=false;return TAFFY.EXIT}});if(n){i=true;return TAFFY.EXIT}});if(!i){e.push(r)}})}return e});a.extend("supplant",function(e,t){var n=[];g.call(this);l(this.context().results,function(t){n.push(e.replace(/\{([^\{\}]*)\}/g,function(e,n){var r=t[n];return typeof r==="string"||typeof r==="number"?r:e}))});return!t?n.join(""):n});a.extend("each",function(e){g.call(this);l(this.context().results,e);return this});a.extend("map",function(e){var t=[];g.call(this);l(this.context().results,function(n){t.push(e(n))});return t});T=function(e){var t=[],n={},r=1,i={template:false,onInsert:false,onUpdate:false,onRemove:false,onDBChange:false,storageName:false,forcePropertyCase:null,cacheSize:100,name:""},u=new Date,v=0,g=0,y={},b,E,S;E=function(e){var r=[],i=false;if(e.length===0){return t}l(e,function(e){if(T.isString(e)&&/[t][0-9]*[r][0-9]*/i.test(e)&&t[n[e]]){r.push(t[n[e]]);i=true}if(T.isObject(e)&&e.___id&&e.___s&&t[n[e.___id]]){r.push(t[n[e.___id]]);i=true}if(T.isArray(e)){l(e,function(e){l(E(e),function(e){r.push(e)})})}});if(i&&r.length>1){r=[]}return r};b={dm:function(e){if(e){u=e;y={};v=0;g=0}if(i.onDBChange){setTimeout(function(){i.onDBChange.call(t)},0)}if(i.storageName){setTimeout(function(){localStorage.setItem("taffy_"+i.storageName,JSON.stringify(t))})}return u},insert:function(e,u){var a=[],h=[],p=f(e);l(p,function(e,f){var p,d;if(T.isArray(e)&&f===0){l(e,function(e){a.push(i.forcePropertyCase==="lower"?e.toLowerCase():i.forcePropertyCase==="upper"?e.toUpperCase():e)});return true}else if(T.isArray(e)){p={};l(e,function(e,t){p[a[t]]=e});e=p}else if(T.isObject(e)&&i.forcePropertyCase){d={};c(e,function(t,n){d[i.forcePropertyCase==="lower"?n.toLowerCase():i.forcePropertyCase==="upper"?n.toUpperCase():n]=e[n]});e=d}r++;e.___id="T"+String(o+s).slice(-6)+"R"+String(o+r).slice(-6);e.___s=true;h.push(e.___id);if(i.template){e=T.mergeObj(i.template,e)}t.push(e);n[e.___id]=t.length-1;if(i.onInsert&&(u||TAFFY.isUndefined(u))){i.onInsert.call(e)}b.dm(new Date)});return S(h)},sort:function(e){t=m(t,e.split(","));n={};l(t,function(e,t){n[e.___id]=t});b.dm(new Date);return true},update:function(e,r,s){var o={},u,a,f,l;if(i.forcePropertyCase){c(r,function(e,t){o[i.forcePropertyCase==="lower"?t.toLowerCase():i.forcePropertyCase==="upper"?t.toUpperCase():t]=e});r=o}u=t[n[e]];a=T.mergeObj(u,r);f={};l=false;c(a,function(e,t){if(TAFFY.isUndefined(u[t])||u[t]!==e){f[t]=e;l=true}});if(l){if(i.onUpdate&&(s||TAFFY.isUndefined(s))){i.onUpdate.call(a,t[n[e]],f)}t[n[e]]=a;b.dm(new Date)}},remove:function(e){t[n[e]].___s=false},removeCommit:function(e){var r;for(r=t.length-1;r>-1;r--){if(!t[r].___s){if(i.onRemove&&(e||TAFFY.isUndefined(e))){i.onRemove.call(t[r])}n[t[r].___id]=undefined;t.splice(r,1)}}n={};l(t,function(e,t){n[e.___id]=t});b.dm(new Date)},query:function(e){var n,r,s,o,u,a;if(i.cacheSize){r="";l(e.filterRaw,function(e){if(T.isFunction(e)){r="nocache";return TAFFY.EXIT}});if(r===""){r=w(T.mergeObj(e,{q:false,run:false,sort:false}))}}if(!e.results||!e.run||e.run&&b.dm()>e.run){s=[];if(i.cacheSize&&y[r]){y[r].i=v++;return y[r].results}else{if(e.q.length===0&&e.index.length===0){l(t,function(e){s.push(e)});n=s}else{o=E(e.index);l(o,function(t){if(e.q.length===0||d(t,e.q)){s.push(t)}});n=s}}}else{n=e.results}if(e.order.length>0&&(!e.run||!e.sort)){n=m(n,e.order)}if(n.length&&(e.limit&&e.limit<n.length||e.start)){u=[];l(n,function(t,n){if(!e.start||e.start&&n+1>=e.start){if(e.limit){a=e.start?n+1-e.start:n;if(a<e.limit){u.push(t)}else if(a>e.limit){return TAFFY.EXIT}}else{u.push(t)}}});n=u}if(i.cacheSize&&r!=="nocache"){g++;setTimeout(function(){var e,t;if(g>=i.cacheSize*2){g=0;e=v-i.cacheSize;t={};c(function(n,r){if(n.i>=e){t[r]=n}});y=t}},0);y[r]={i:v++,results:n}}return n}};S=function(){var e,t;e=TAFFY.mergeObj(TAFFY.mergeObj(a,{insert:undefined}),{getDBI:function(){return b},getroot:function(e){return S.call(e)},context:function(e){if(e){t=TAFFY.mergeObj(t,e.hasOwnProperty("results")?TAFFY.mergeObj(e,{run:new Date,sort:new Date}):e)}return t},extend:undefined});t=this&&this.q?this:{limit:false,start:false,q:[],filterRaw:[],index:[],order:[],results:false,run:null,sort:null,settings:i};l(arguments,function(e){if(h(e)){t.index.push(e)}else{t.q.push(p(e))}t.filterRaw.push(e)});return e};s++;if(e){b.insert(e)}S.insert=b.insert;S.merge=function(e,t,n){var r={},i=[],s={};n=n||false;t=t||"id";l(e,function(e){var s;r[t]=e[t];i.push(e[t]);s=S(r).first();if(s){b.update(s.___id,e,n)}else{b.insert(e,n)}});s[t]=i;return S(s)};S.TAFFY=true;S.sort=b.sort;S.settings=function(e){if(e){i=TAFFY.mergeObj(i,e);if(e.template){S().update(e.template)}}return i};S.store=function(e){var n=false,r;if(localStorage){if(e){r=localStorage.getItem("taffy_"+e);if(r&&r.length>0){S.insert(r);n=true}if(t.length>0){setTimeout(function(){localStorage.setItem("taffy_"+i.storageName,JSON.stringify(t))})}}S.settings({storageName:e})}return S};return S};TAFFY=T;T.each=l;T.eachin=c;T.extend=a.extend;TAFFY.EXIT="TAFFYEXIT";TAFFY.mergeObj=function(e,t){var n={};c(e,function(t,r){n[r]=e[r]});c(t,function(e,r){n[r]=t[r]});return n};TAFFY.has=function(e,t){var n=false,r;if(e.TAFFY){n=e(t);if(n.length>0){return true}else{return false}}else{switch(T.typeOf(e)){case"object":if(T.isObject(t)){c(t,function(r,i){if(n===true&&!T.isUndefined(e[i])&&e.hasOwnProperty(i)){n=T.has(e[i],t[i])}else{n=false;return TAFFY.EXIT}})}else if(T.isArray(t)){l(t,function(r,i){n=T.has(e,t[i]);if(n){return TAFFY.EXIT}})}else if(T.isString(t)){if(!TAFFY.isUndefined(e[t])){return true}else{return false}}return n;case"array":if(T.isObject(t)){l(e,function(r,i){n=T.has(e[i],t);if(n===true){return TAFFY.EXIT}})}else if(T.isArray(t)){l(t,function(r,i){l(e,function(r,s){n=T.has(e[s],t[i]);if(n===true){return TAFFY.EXIT}});if(n===true){return TAFFY.EXIT}})}else if(T.isString(t)||T.isNumber(t)){n=false;for(r=0;r<e.length;r++){n=T.has(e[r],t);if(n){return true}}}return n;case"string":if(T.isString(t)&&t===e){return true}break;default:if(T.typeOf(e)===T.typeOf(t)&&e===t){return true}break}}return false};TAFFY.hasAll=function(e,t){var n=TAFFY,r;if(n.isArray(t)){r=true;l(t,function(t){r=n.has(e,t);if(r===false){return TAFFY.EXIT}});return r}else{return n.has(e,t)}};TAFFY.typeOf=function(e){var t=typeof e;if(t==="object"){if(e){if(typeof e.length==="number"&&!e.propertyIsEnumerable("length")){t="array"}}else{t="null"}}return t};TAFFY.getObjectKeys=function(e){var t=[];c(e,function(e,n){t.push(n)});t.sort();return t};TAFFY.isSameArray=function(e,t){return TAFFY.isArray(e)&&TAFFY.isArray(t)&&e.join(",")===t.join(",")?true:false};TAFFY.isSameObject=function(e,t){var n=TAFFY,r=true;if(n.isObject(e)&&n.isObject(t)){if(n.isSameArray(n.getObjectKeys(e),n.getObjectKeys(t))){c(e,function(i,s){if(!(n.isObject(e[s])&&n.isObject(t[s])&&n.isSameObject(e[s],t[s])||n.isArray(e[s])&&n.isArray(t[s])&&n.isSameArray(e[s],t[s])||e[s]===t[s])){r=false;return TAFFY.EXIT}})}else{r=false}}else{r=false}return r};e=["String","Number","Object","Array","Boolean","Null","Function","Undefined"];t=function(e){return function(t){return TAFFY.typeOf(t)===e.toLowerCase()?true:false}};for(n=0;n<e.length;n++){r=e[n];TAFFY["is"+r]=t(r)}}})();if(typeof exports==="object"){exports.taffy=TAFFY}

/**
 * To inherit from an object
 * useful when using default and user defined options
 */
var inherit = function ( obj ) {
  function F(){};
  F.prototype = obj;
  return new F;
};

/***************************************************************
 * Table factory
 */
var divTableMaker = (function () {

/***************************************************************
 * table constructor
 */
var DivTable = function () {

};

/**
 * Initialization function
 */
DivTable.prototype.init = function ( container, options, callback_context ) {
  var self = this;
  
  this.callback_context = callback_context;
  this.filter = {};
  
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
DivTable.prototype._loadOptions = function ( options ) {
  var key,
    options = inherit( options ),
    default_options = {
      class_prefix : 'div',
      select_class : 'select',
      edit_class   : 'edit',
      filter_class : 'filter',
      hide_class   : 'hide',
      
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
        'trash',
      ],
      counter_text : 'Entry {{from}} - {{to}} of {{total}}',
      
      order : 'id',
      show_filter : false,
      auto_edit   : true,
      
      menu : ''
        + '<ul id="configMenuUl" styel="width:120px">'
          + '<li id="menuitem-headerfilter">'
            + '<a href="#">'
              + '<span class="ui-icon ui-icon-filter"></span>'
              + 'Filter'
            + '</a>'
          + '</li>'
        + '</ul>',
      
      advancedEdit : null,
      
      onChange    : function ( name, new_val, $row ) {},
      onSelectRow : function ( $row ) {},
    };
  
  for ( key in default_options ) {
    if ( options[ key ] === undefined ) {
      options[ key ] = default_options[ key ];
    }
  }
  
  this.options = options;
};

/**
 * Emit the defined callback
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
 * Get the active rows from the database
 */
DivTable.prototype._getRows = function ( filter ) {
  var filt = util.extend( this.filter, filter || {} );
  filt = util.extend( filt, { deleted : 'false' } );
  
  return (
    this.table( filt )
      .order( this.options.order || 'id' )
      .get() );
};

/**
 * Get row by id
 */
DivTable.prototype._getRowById = function ( id ) {
  var row = ( this._getRows({ id : id * 1 })[ 0 ] );
  if ( ! row ) {
    row = ( this._getRows({ id : ''+ id })[ 0 ] );
  }
  return row;
};

/**
 * Insert new row in the database
 */
DivTable.prototype._insertRow = function ( row_map ) {
  var i, len,
    columns = this.options.columns;
  
  row_map.deleted = 'false';
  row_map.edited  = 'false';
  row_map.new     = 'true';
  
  // rows MUST have an id
  row_map.id = row_map.id || new Date().getTime();
  
  this._checkRowValues( row_map );
  
  for ( i = 0, len = columns.length; i < len; i++ ) {
    if ( ! row_map.hasOwnProperty( columns[ i ].name ) ) {
      row_map[ columns[ i ].name ] = '';
    }
  }
  
  this.table.insert( row_map );
};

/**
 * Update row values
 */
DivTable.prototype._updateRow = function ( row_id, new_values_map, preventEdited ) {
  if ( ! preventEdited ) {
    this.table({ id : row_id, 'new' : 'false', 'edited' : 'false' }).update({ 'edited' : 'true' });
  }
  if ( this.table({ id : ''+ row_id }).first() ) {
    row_id = ''+ row_id;
  }
  else {
    row_id *= row_id;
  }
  this.table({ id : row_id }).update( new_values_map );
};

/**
 * Delete a row from the database
 */
DivTable.prototype._deleteRow = function ( id ) {
  // if the row is not new marks it with deleted
  if ( this.table({ id : id, 'new' : 'false' }).count() ) {
    this.table({ id : id }).update({ deleted : 'true' });
  }
  // otherwise remove it
  else {
    this.table({ id : id }).remove();
  }
};

/**
 * Check if the value of one rows is correct
 */
DivTable.prototype._checkRowValues = function ( row_map ) {
  var edit, hide, i, len, column, first;
  
  edit = this.edit.getEdit ( row_map );
  
  for ( column in edit ) {
    if ( edit.hasOwnProperty( column ) ) {
      if ( util.isObject( edit[ column ] ) ) {
        if ( ! edit[ column ].hasOwnProperty( row_map[ column ] ) ) {
          // value of the column not allowed
          for ( first in edit[ column ] ) break;
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
 * Get unique values for selectors
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
    outer:
    for ( i = 0, len = selected.length; i < len; ++i ) {
      if ( selected[ i ] === row_values[ name ] ) {
        continue outer;
      }
      for ( j = uniqueObj.length; j--; ) {
        if ( selected[ i ] === uniqueObj[ j ] ) {
          uniqueObj.splice( j, 1 );
          continue outer;
        }
      }
    }
  }
  else if ( util.isObject( uniqueObj ) ) {
    outer:
    for ( i = 0, len = selected.length; i < len; ++i ) {
      if ( selected[ i ] === row_values[ name ] ) {
        continue outer;
      }
      if ( uniqueObj.hasOwnProperty( selected[ i ] ) ) {
        delete uniqueObj[ selected[ i ] ];
      }
    }
  }
  
  return uniqueObj;
};

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
 * Build the row editor
 */
DivTable.prototype._buildRowEditor = function () {
  var i, len, Observable,
    BaseEditor,   TextEditor,           NumberEditor,
    SelectEditor, AdvancedSelectEditor, DateEditor,
    TimeEditor,   CheckboxEditor,       HiddenEditor,
    self    = this,
    columns = this.options.columns;
  
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
  }
  
  BaseEditor.prototype = new Observable;
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
  
  TextEditor.prototype = new BaseEditor;
  TextEditor.prototype.constructor = TextEditor;
  
  TextEditor.prototype.init = function ( arg_map ) {
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
  
  NumberEditor.prototype = new BaseEditor;
  NumberEditor.prototype.constructor = NumberEditor;
  
  NumberEditor.prototype.init = function ( arg_map ) {
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
  
  SelectEditor.prototype = new BaseEditor;
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
  
  AdvancedSelectEditor.prototype = new BaseEditor;
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
   * Date editor
   */
  DateEditor = function ( column_name, row ) {
    BaseEditor.call( this, column_name, row );
  };
  
  DateEditor.prototype = new BaseEditor;
  DateEditor.prototype.constructor = DateEditor;
  
  DateEditor.prototype.init = function ( arg_map ) {
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
  
  DateEditor.prototype.destroy = function ( arg_map ) {
    $( this.editor ).datetimepicker( 'destroy' );
  }
  
  /**
   * Time editor
   */
  TimeEditor = function ( column_name, row ) {
    BaseEditor.call( this, column_name, row );
  };
  
  TimeEditor.prototype = new BaseEditor;
  TimeEditor.prototype.constructor = TimeEditor;
  
  TimeEditor.prototype.init = function ( arg_map ) {
    var timePicker,
      self  = this,
      text  = this.getValue() || '00:00',
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
  };
  
  /**
   * Check-box editor
   */
  CheckboxEditor = function ( column_name, row ) {
    BaseEditor.call( this, column_name, row );
  };
  
  CheckboxEditor.prototype = new BaseEditor;
  CheckboxEditor.prototype.constructor = CheckboxEditor;
  
  CheckboxEditor.prototype.init = function ( arg_map ) {
    var timePicker,
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
  
  HiddenEditor.prototype = new BaseEditor;
  HiddenEditor.prototype.constructor = HiddenEditor;
  
  HiddenEditor.prototype.init = function ( arg_map ) {
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
    }
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
    var column, cell_editor, edit_type, editor, editor_type;
    
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
      this._editCell( column, edit_map[ column ] );
    }
  };
  
  Editor.prototype.change = function ( edit_map ) {
    var column, cell_editor, edit_type, editor, editor_type;

    if ( ! this.editingId ) {
      return;
    }
    
    for ( column in edit_map ) {
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
  };
  
  Editor.prototype.end = function () {
    var column, editor;
    
    for ( column in this.editingMap ) {
      if ( this.editingMap.hasOwnProperty( column ) ) {
        editor = this.editingMap[ column ].editor;
        editor.destroy();
        delete this.editingMap[ column ]
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
 * Start row editing
 */
DivTable.prototype._editRow = function ( row ) {
  var i, len, row_map, edit_map, selector,
    body = this.domMap.body;
  
  if ( typeof row === 'string' ) {
    row = this.findRowById( row );
  }
  
  row_map  = this._getRowById( row.id );
  edit_map = this.edit.getEdit( row_map );
  console.log( row, edit_map );
  this._editor.start( row, edit_map );
  this._editor.onChange = function ( column, new_value ) {
    var
      depend  = this.edit.getDepend(),
      row_map = this._getRowById( row.id ),
      edit    = this.edit.getEdit  ( row_map ),
      hide    = this.edit.getHidden( row_map );
    
    if ( util.inArray( column, depend ) ) {
      this._editor.change( edit );
    }
    
    this._emitCallback( 'onChange', [ column, new_value, row ] );
  };
  this._editor.onEnd = function ( row ) {
    if ( ! row ) { return }
    var
      id = row.id,
      values = this._getRowById( id );
    
    this._checkRowValues( values );
    this._editor.onEnd = null;
  }
};

/**
 * Build the base structure of the table
 */
DivTable.prototype._buildTableStructure = function ( container ) {
  var
    i, len, base_html, rows, buttons, cur,
    header, filter,    filter_btn,
    self     = this,
    prefix   = this.options.class_prefix,
    col      = this.options.columns,
    footer   = this.options.footer,
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
      'class="ui-state-default '+ prefix +'-footer-button" name="'+ cur +'">'
        + '<span class="ui-icon ui-icon-'+ cur +'"></span>'
    )
  }
  base_html = ''
    + '<div class="'+ prefix +'-footer">'
      + ( ( buttons.length ) ? '<div '+ buttons.join ( '</div><div ' ) +'</div>' : '' )
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
  container.style.position = 'relative';
  
  header = container.querySelector( '.'+ prefix +'-header' );
  header.style.width = '-webkit-calc(100% - '+ scroll_w +'px)';
  header.style.width =         'calc(100% - '+ scroll_w +'px)';
  
  filter = container.querySelector( '.'+ prefix +'-header-filter' );
  filter.style.width = '-webkit-calc(100% - '+ scroll_w +'px)';
  filter.style.width =         'calc(100% - '+ scroll_w +'px)';
  
  filter_btn = container.querySelector( '.'+ prefix +'-filter' );
  filter_btn.style.width = scroll_w +'px';
}

/**
 * Select row
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
  
  this._emitCallback( 'onSelectRow', row );
  
  if ( this.options.auto_edit ) {
    this._editRow( row.id );
  }
};

/**
 * Return the selected row
 */
DivTable.prototype._getSelectedRow = function () {
  var
    body      = this.domMap.body,
    sel_class = this.options.select_class,
    selected  = body.querySelectorAll( '.'+ sel_class );
  
  return selected[ 0 ];
};

/**
 * Build the this.domMap object that stores the references
 * to the dom elements
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
  };
};

/**
 * Add event handler to the table
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
  util.addEvent( filter_inputs, 'keyup', function ( evt ) {
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
      sel_class = self.options.select_class,
      is_active = false,
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

/**
 * Update the table's rows counter
 */
DivTable.prototype._updateCounterText = function () {
  var
    key,
    text  = this.options.counter_text,
    count = this.getRowCount(),
    value_map = {
      from  : 1,
      to    : count,
      total : count
    };
  
  for ( key in value_map ) {
    text = text.split( '{{'+ key +'}}' ).join( value_map[ key ] );
  }
  // DOTO - implement write of the counter
  this.domMap.footer_count.innerHTML = text;
  return text;
};

/**
 * Build the html of one row
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
      value = text = row_map[ name ] || '';
      
      if ( util.isObject( edit[ name ] ) ) {
        text = edit[ name ][ value * 1 ];
        
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
 * Build the html of all the table's rows
 */
DivTable.prototype._getRowsHtml = function () {
  var i, len,
    rows = this._getRows(),
    rows_html = '';
  
  for ( i = 0, len = rows.length; i < len; i++ ) {
    rows_html += this._getRowHtml( rows[ i ] );
  }
  
  return rows_html;
};

/**
 * Update the table from the values in the taffy db
 */
DivTable.prototype._updateTable = function () {
  this.endEditRow();
  
  this.domMap.body.innerHTML = this._getRowsHtml();
  this._updateCounterText();
};

/**
 * Rebuild and replace the html of one row
 */
DivTable.prototype._updateHtmlRow = function ( row ) {
  var values_map, new_row_html, use_element, new_row;
  
  if ( typeof row === 'string' ) {
    row = this.findRowById( row );
  }
  
  values_map   = this._getRowById( row.id * 1    );
  this._checkRowValues( values_map );
  new_row_html = this._getRowHtml( values_map );
  
  use_element = document.createElement( 'div' );
  use_element.innerHTML = new_row_html;
  
  new_row = use_element.firstChild;
  
  row.parentNode.replaceChild( new_row, row );
};

/**
 * Footer buttons click
 */
DivTable.prototype._footerBtnClick = function ( button ) {
  var 
   name = button.getAttribute( 'name' );
  
  this._emitCallback( 'onFooterClick', name );
};

/**
 * Display the filter menu
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
  console.log( name, value );
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
 * PUBLICS METHODS
 */
/**
 * Return the count of the active rows in the TaffyDB
 */
DivTable.prototype.getRowCount = function () {
  return this._getRows().length;
};

/**
 * Return the values of the row with the specified id
 */
DivTable.prototype.getRowById = function ( id ) {
  return this._getRowById( id );
};

/**
 * Return the values of the row with the specified id
 * or the selected row
 */
DivTable.prototype.getRowValues = function ( row_id ) {
  var
    id  = row_id || this._getSelectedRow() || '',
    row = this.table({ id : id +'' }).first();
  
  return row;
};

/**
 * Edit the selected row
 */
DivTable.prototype.editRow = function ( id ) {
  var selected = id || this._getSelectedRow();
  
  this._editRow( ''+ selected );
};

/**
 * End the editing mode
 */
DivTable.prototype.endEditRow = function () {
  this._editor.end();
};

/**
 * Insert a new row in the table
 */
DivTable.prototype.newRow = function ( row_map ) {
  row_map = row_map || {};
  
  this._insertRow( row_map );
  this._updateTable();
};

/**
 * Insert an array of rows in the table
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
    this._updateHtmlRow( row_id );
  }
};

/**
 * Delete row by id
 */
DivTable.prototype.deleteRow = function ( id ) {
  var next = this.findNextRow( id );
  
  if ( this._editor.getRowId() === id ) {
    this._editor.end();
  }
  
  this._deleteRow( id );
  this._updateTable();
  
  this._selectRow( next );
};

/**
 * Delete editing row
 */
DivTable.prototype.deleteEditRow = function () {
  if ( ! this._editor.getRow() ) { return; }
  var
    id   = this._editor.getRowId();
  
  this.deleteRow( id );
};

/**
 * Delete selected row
 */
DivTable.prototype.deleteSelectedRow = function () {
  var selected = this._getSelectedRow();
  
  if ( ! selected ) { return; }
  
  this.deleteRow( selected.id );
};

/**
 * Find a row by his id
 */
DivTable.prototype.findRowById = function ( row_id ) {
  return this.domMap.body.querySelector( '[id="'+ row_id +'"]' );
};

/**
 * Return the row next to the one with the defined id
 */
DivTable.prototype.findNextRow = function ( id ) {
  var i, len, next_row,
      rows = this._getRows();
    
    for ( i = 0, len = rows.length; i < len; i++ ) {
      if ( rows[ i ].id === id ) {
        next_row = rows[ i + 1 ];
        break;
      }
    }
    return next_row;
};

/**
 * Create a new blank table and saves it
 */
DivTable.prototype.newTable = function () {
  this._currentTableId = new Date().getTime();
  this.table    = TAFFY();
  window.table = this.table;
  this._saveMap[ this._currentTableId ] = this.table;
  
  this._updateTable();
  
  return this._currentTableId;
};

/**
 * Restore a previous created table
 */
DivTable.prototype.restoreTable = function ( table_id ) {
  var restored = false;
  if ( this._saveMap.hasOwnProperty( table_id ) ) {
    this.table    = this._saveMap[ table_id ];
    this.table_id = table_id;
    restored = true;
    
    this._updateTable();
  }
  return restored;
};

/**
 * Destroy a table
 */
DivTable.prototype.destroy = function ( table_id ) {
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
 */
DivTable.prototype.getNewRows = function ( include_saved ) {
  var id, new_rows,
    filter     = { 'new' : 'true' },
    return_map = {};
  if ( include_saved ) {
    for ( id in this._saveMap ) {
      return_map[ id ] = this._saveMap[ id ]( filter ).get();
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
 */
DivTable.prototype.getEditedRows = function ( include_saved ) {
  var id,
    filter     = { 'edited' : 'true' },
    return_map = {};
  if ( include_saved ) {
    for ( id in this._saveMap ) {
      return_map[ id ] = this._saveMap[ id ]( filter ).get();
    }
    
    return util.clone( return_map );
  }
  return util.clone( this.table( filter ).get() );
};

/**
 * Return the deleted rows
 */
DivTable.prototype.getDeletedRows = function ( include_saved ) {
  var id,
    filter     = { 'deleted' : 'true' },
    return_map = {};
  if ( include_saved ) {
    for ( id in this._saveMap ) {
      return_map[ id ] = this._saveMap[ id ]( filter ).get();
    }
    
    return util.clone( return_map );
  }
  return util.clone( this.table( filter ).get() );
};

/**
 * Check if the status of the table is changed
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
        count += current[ key ].length;
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
 * Utility used by the table
 */
var util = {
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
          elem.attachEvent( 'on' + type, function() { return cb.call(elem, window.event) } ); 
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
          elem.detachEvent( 'on' + type, function() { return cb.call(elem, window.event) } ); 
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
  
  
};


/**
 * Return the constructor function
 */
return function ( container, options ) {
  var table,
    context = function () {};
  
  context.div_table = function () {
    var fn_name = [].shift.apply( arguments );
    
    if ( fn_name[ 0 ] === '_' ) {
      throw 'You can\'t call a private method!';
    }
    else if ( typeof table[ fn_name ] === 'function' ) {
      return table[ fn_name ].apply( table, arguments );
    }
    else {
      console.warn( fn_name, 'is not a callable function' );
    }
  }
  
  table = new DivTable();
  table.init( container, options, context );
  
  return context;
};

})();

if ( window.jQuery ) {
  // jQuery constructor
  jQuery.fn.div_table = function( options ) {
    return divTableMaker( this[ 0 ], options );
  }
}