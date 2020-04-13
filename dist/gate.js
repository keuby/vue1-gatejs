/**
 * vue1-gatejs v1.0.0 base on vue1.0
 * release at 2020-4-13
 * by lnfsink
 * gitlab http://git.augmentum.com.cn/knight.chen/oauth
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Gate=e()}(this,function(){"use strict";function s(t,e,n,r,i,u,o){try{var a=t[u](o),s=a.value}catch(t){return void n(t)}a.done?e(s):Promise.resolve(s).then(r,i)}function t(a){return function(){var t=this,o=arguments;return new Promise(function(e,n){var r=a.apply(t,o);function i(t){s(r,e,n,i,u,"next",t)}function u(t){s(r,e,n,i,u,"throw",t)}i(void 0)})}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(i){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?n(Object(u),!0).forEach(function(t){var e,n,r;e=i,r=u[n=t],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(u)):n(Object(u)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(u,t))})}return i}var a,i;(i=a=a||{})[i.REJECT=0]="REJECT",i[i.RESOLVED=1]="RESOLVED",i[i.PENDING=2]="PENDING",i[i.UNRESOLVED=3]="UNRESOLVED";var u=function(){function r(t,e){var n=this;o(this,r),this.next=function(t){n.isNotResolved&&(n.status=a.RESOLVED,n.transition.next(t))},this.abort=function(t){n.isNotResolved&&(n.status=a.REJECT,t?n.transition.abort(t):n.transition.abort())},this.redirect=function(t){n.isNotResolved&&(n.status=a.REJECT,n.transition.redirect(t))},this.pending=function(){n.isNotResolved&&(n.status=a.PENDING)},this.context=JSON.parse(JSON.stringify(e)),this.transition=t,this.status=a.UNRESOLVED}return e(r,[{key:"to",get:function(){return this.transition.to}},{key:"from",get:function(){return this.transition.from}},{key:"isNotResolved",get:function(){return this.status===a.UNRESOLVED}}]),r}(),f=function(){function r(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};o(this,r),this.gate=t,this.transition=new u(e,n)}var n,i;return e(r,[{key:"handle",value:(i=t(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.canActivate(this.transition);case 3:return r=t.sent,t.abrupt("return",this.handleResult(r,n));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",this.gate.error(this.transition,t.t0));case 10:case"end":return t.stop()}},t,this,[[0,7]])})),function(t,e){return i.apply(this,arguments)})},{key:"handleResult",value:(n=t(regeneratorRuntime.mark(function t(e,n){var r,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((r=this.transition.status)!==a.UNRESOLVED){t.next=13;break}if(!n){t.next=12;break}if(i=n.next(),u=i.value,!i.done){t.next=8;break}t.t0=e,t.next=11;break;case 8:return t.next=10,this.handle(u,n);case 10:t.t0=t.sent;case 11:return t.abrupt("return",t.t0);case 12:return t.abrupt("return",e);case 13:t.t1=r,t.next=t.t1===a.RESOLVED?16:t.t1===a.REJECT?17:t.t1===a.PENDING?18:19;break;case 16:return t.abrupt("return",!0);case 17:return t.abrupt("return",!1);case 18:return t.abrupt("return");case 19:return t.abrupt("return",e);case 20:case"end":return t.stop()}},t,this)})),function(t,e){return n.apply(this,arguments)})},{key:"exec",value:function(t,e){var n=!(1<arguments.length&&void 0!==e)||e,r=t[Symbol.iterator]();return this.handleResult(n,r)}}]),r}(),h=function(){function u(t,e){o(this,u),this.equals=new Map,this.gate=t,this.equals=new Map,this.cb=function(t){var n=this;return{is:function(){return!0},not:function(){return!0},error:t.error,equal:function(t,e){return n.equals.has(e)?n.equals.get(e)(t,e):!n.equals.has(h.DEFAULT_EQUAL)||n.equals.get(h.DEFAULT_EQUAL)(t,e)}}}(t),e&&(this.canActivate=e)}return e(u,[{key:"is",value:function(t){return this.cb.is=this._bind(t),this}},{key:"not",value:function(t){return this.cb.not=this._bind(t),this}},{key:"equal",value:function(t,e){var n=this,r=0<arguments.length&&void 0!==t?t:u.DEFAULT_EQUAL,i=1<arguments.length?e:void 0;return i=this._bind(i),Array.isArray(r)?r.forEach(function(t){return n.equals.set(t,i)}):this.equals.set(r,i),this}},{key:"error",value:function(t){return this.cb.error=this._bind(t),this}},{key:"end",value:function(){return this.gate}},{key:"_bind",value:function(t){if(!t||"function"!=typeof t)throw new Error("".concat(t," is not a function"));return t.bind(this.gate)}}]),u}();h.DEFAULT_EQUAL=Symbol("default equal callback");var l=function(){function n(t){o(this,n),this.guards=[],this.name=t.name,this.context=t.context||{},this.error=t.error||function(t,e){console.error(e),t.abort(e)},this.options=t}return e(n,[{key:"build",value:function(t){var r=this,i=0<arguments.length&&void 0!==t?t:{},u=this.guards;this.guards=[];function e(t){var e=new f(r,t,c({},r.context,{},i)),n=o.concat(u).concat(a);return e.exec(n)}var o=[],a=[];return e.before=function(t){return o.push(new h(r,t)),e},e.after=function(t){return a.push(new h(r,t)),e},e}}],[{key:"register",value:function(t,e){Object.defineProperty(n.prototype,t,{get:function(){var t=new e(this);return this.guards.push(t),t}})}}]),n}();return l.Guard=h,l});