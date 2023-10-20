/*! For license information please see main.a9a955ef.chunk.js.LICENSE.txt */
(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{15:function(t,e,r){},16:function(t,e,r){},17:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(4),i=r.n(o),c=(r(15),r(5)),u=r(1),l=r(2),s=r.n(l),f=function(t){var e=t.title,r=t.calories,o=t.image,i=t.ingredients,c=t.cuisine,l=t.diet,f=t.type,h=t.time,p=r.toFixed(2),m=Object(n.useState)(!1),y=Object(u.a)(m,2),v=y[0],d=y[1],g="";return g=c.length>1?c.join(", "):c,a.a.createElement("div",{className:s.a.recipe,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},v?a.a.createElement("div",{className:s.a.back},a.a.createElement("h1",null,"Ingredients"),a.a.createElement("ol",{className:s.a.ingredientsList},i.map((function(t){return a.a.createElement("li",null,t.text)})))):a.a.createElement("div",{className:s.a.front},a.a.createElement("h1",null,e),a.a.createElement("p",null,"Cuisine Type: ",g),a.a.createElement("p",null,"Diet: ",l),a.a.createElement("p",null,"Dish Type: ",f),a.a.createElement("p",null,"Cooking Time: ",h," min"),a.a.createElement("p",null,"Calories: ",p," cal"),a.a.createElement("img",{className:s.a.image,src:o,alt:""})))};r(16);function h(){h=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:j(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",m="executing",y="completed",v={};function d(){}function g(){}function b(){}var w={};l(w,i,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(F([])));L&&L!==r&&n.call(L,i)&&(w=L);var _=b.prototype=d.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(a,o,i,c){var u=f(t[a],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function j(e,r,n){var a=p;return function(o,i){if(a===m)throw new Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var l=f(e,r,n);if("normal"===l.type){if(a=n.done?y:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=y,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=f(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=b,a(_,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},x(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new O(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(_),l(_,u,"Generator"),l(_,i,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}var p=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),r=e[0],o=e[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),s=l[0],p=l[1],m=Object(n.useState)("chicken"),y=Object(u.a)(m,2),v=y[0],d=y[1];Object(n.useEffect)((function(){g()}),[v]);var g=function(){var t=Object(c.a)(h().mark((function t(){var e,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.edamam.com/search?q=".concat(v,"&app_id=").concat("5219906e","&app_key=").concat("a9fc8b103175c04818069532d5efdbf3"));case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,o(r.hits),console.log(r.hits);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",{className:"App"},a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),d(s),p("")},className:"search-form"},a.a.createElement("input",{className:"search-bar",type:"text",value:s,onChange:function(t){p(t.target.value)}}),a.a.createElement("button",{className:"search-button",type:"submit"},"Search")),a.a.createElement("div",{className:"recipes"},r.map((function(t){return a.a.createElement(f,{key:t.recipe.label,title:t.recipe.label,calories:t.recipe.calories,image:t.recipe.image,ingredients:t.recipe.ingredients,cuisine:t.recipe.cuisineType,diet:t.recipe.dietLabels,type:t.recipe.dishType,time:t.recipe.totalTime})}))))},m=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;r(t),n(t),a(t),o(t),i(t)}))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null))),m()},2:function(t,e,r){t.exports={recipe:"recipe_recipe__3WOtl",front:"recipe_front__2297k",back:"recipe_back__Om2fA",ingredientsList:"recipe_ingredientsList__3NzJ-",image:"recipe_image__3Dn_y"}},6:function(t,e,r){t.exports=r(17)}},[[6,1,2]]]);
//# sourceMappingURL=main.a9a955ef.chunk.js.map