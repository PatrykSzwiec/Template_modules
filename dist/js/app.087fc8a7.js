(function(t){function a(a){for(var n,d,o=a[0],s=a[1],b=a[2],i=0,u=[];i<o.length;i++)d=o[i],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&u.push(r[d][0]),r[d]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(a);while(u.length)u.shift()();return c.push.apply(c,b||[]),e()}function e(){for(var t,a=0;a<c.length;a++){for(var e=c[a],n=!0,o=1;o<e.length;o++){var s=e[o];0!==r[s]&&(n=!1)}n&&(c.splice(a--,1),t=d(d.s=e[0]))}return t}var n={},r={app:0},c=[];function d(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,d),e.l=!0,e.exports}d.m=t,d.c=n,d.d=function(t,a,e){d.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,a){if(1&a&&(t=d(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(d.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)d.d(e,n,function(a){return t[a]}.bind(null,n));return e},d.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(a,"a",a),a},d.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},d.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=a,o=o.slice();for(var b=0;b<o.length;b++)a(o[b]);var l=s;c.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"17ab":function(t,a,e){},2821:function(t,a,e){t.exports=e.p+"img/image-product-desktop.22a90138.jpg"},"2d72":function(t,a,e){t.exports=e.p+"img/icon-cart.ea610941.svg"},"56d7":function(t,a,e){"use strict";e.r(a);var n=e("7a23");const r={id:"app"},c={class:"navbar navbar-expand-lg navbar-light bg-light"},d={class:"container-fluid"},o=Object(n["d"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["d"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"navbarNav"},b={class:"navbar-nav"},l={class:"nav-item"},i={class:"nav-item"};function u(t,a,e,u,p,v){const f=Object(n["v"])("router-link"),O=Object(n["v"])("router-view");return Object(n["p"])(),Object(n["c"])("div",r,[Object(n["d"])("nav",c,[Object(n["d"])("div",d,[Object(n["g"])(f,{class:"navbar-brand",to:"/"},{default:Object(n["A"])(()=>[Object(n["f"])("Vue App")]),_:1}),o,Object(n["d"])("div",s,[Object(n["d"])("ul",b,[Object(n["d"])("li",l,[Object(n["g"])(f,{class:"nav-link",to:"/"},{default:Object(n["A"])(()=>[Object(n["f"])("Home")]),_:1})]),Object(n["d"])("li",i,[Object(n["g"])(f,{class:"nav-link",to:"/ProductCard"},{default:Object(n["A"])(()=>[Object(n["f"])("Product Card")]),_:1})])])])])]),Object(n["g"])(O,{class:"view"})])}var p={name:"App"},v=e("6b0d"),f=e.n(v);const O=f()(p,[["render",u]]);var j=O,g=e("6605"),h=e("2821"),m=e.n(h),y=e("2d72"),P=e.n(y);const w={class:"website"},x=Object(n["e"])('<div class="product-card" data-v-3bdfd4ba><div class="product-info" data-v-3bdfd4ba><div class="product-image" data-v-3bdfd4ba><img src="'+m.a+'" alt="Product Image" class="img-fluid" data-v-3bdfd4ba></div><div class="product-details justify-content-center align-items-center" data-v-3bdfd4ba><h1 class="text-uppercase text-muted" data-v-3bdfd4ba>PERFUME</h1><h2 data-v-3bdfd4ba>Gabrielle <br data-v-3bdfd4ba> Essence Eau<br data-v-3bdfd4ba>De Parfum</h2><p class="text-muted" data-v-3bdfd4ba>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p><div class="price" data-v-3bdfd4ba><div class="price-wrapper" data-v-3bdfd4ba><span class="discount-price" data-v-3bdfd4ba>$149.99</span><span class="original-price" data-v-3bdfd4ba>$169.99</span></div></div><button class="add-to-cart" data-v-3bdfd4ba><img class="icon-cart" src="'+P.a+'" alt="Cart Icon" data-v-3bdfd4ba> Add to Cart </button></div></div></div>',1),A=[x];function _(t,a,e,r,c,d){return Object(n["p"])(),Object(n["c"])("div",w,A)}var C={name:"ProductCard"};e("a000");const E=f()(C,[["render",_],["__scopeId","data-v-3bdfd4ba"]]);var N=E;const I={class:"home"},M=Object(n["d"])("h1",null," CHILL THE DESIGN OF MAIN PAGE IS ON MAINTENCE",-1),k=Object(n["d"])("h1",null,"Hello there",-1),H=Object(n["d"])("p",null,"Here you can find my FrontendMentor.io challenges:",-1),S=Object(n["d"])("p",null,"Just choose what you can find see from the list.",-1),T=[M,k,H,S];function F(t,a){return Object(n["p"])(),Object(n["c"])("div",I,T)}const G={},J=f()(G,[["render",F]]);var L=J;const D=[{path:"/",component:L},{path:"/ProductCard",component:N}],$=Object(g["a"])({history:Object(g["b"])(),routes:D});var R=$;e("ab8b");Object(n["b"])(j).use(R).mount("#app")},a000:function(t,a,e){"use strict";e("17ab")}});
//# sourceMappingURL=app.087fc8a7.js.map