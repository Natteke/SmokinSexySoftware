!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Leash",[],t):"object"==typeof exports?exports.Leash=t():e.Leash=t()}(window,function(){return function(n){var i={};function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);var i={display:"none",position:"absolute",top:0,bottom:0,right:0,zIndex:99,boxSizing:"border-box",overflowY:"scroll"},o={display:""},r={display:"none"},l={boxSizing:"border-box"},s={overflowY:"hidden"},c={overflowX:"hidden"},a={overflowY:""},u={overflowX:""},f=function(e){var t=e.clientWidth,n=e.clientHeight;e.style.overflow="hidden";var i=e.clientWidth,r=e.clientHeight;return e.style.overflow="",{y:t!==i,x:n!==r}},d=function(e){var t={x:e.scrollLeft,y:e.scrollTop};e.scrollTo(0,0),e.scrollTo(1,1);var n=e.scrollLeft,i=e.scrollTop;return e.scrollTo(t.x,t.y),{y:t.y!==i,x:t.x!==n}},h=function(e,t){return Object.assign(e.style,t)},v=function(t,n,i){Object.keys(t).forEach(function(e){t[e].style[n]=i})};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"isActiveX",!1),y(this,"isActiveY",!1),y(this,"overlay",document.createElement("div")),y(this,"init",function(){var e=n.overlay,t=n.container;h(e,i),h(t,l),n.container.insertAdjacentElement("afterbegin",e),n.container.dataset.scroll=n.id,"static"===getComputedStyle(n.container).position&&(n.container.style.position="relative")}),y(this,"lockY",function(){var e=this.container,t=this.overlay,n=e.clientWidth,i=f(e).y;if(h(e,s),i){h(t,o);var r="".concat(e.clientWidth-n,"px");e.style.paddingRight=r,v(this.selectFixedElements(),"marginRight",r)}this.isActiveY=!0}.bind(this)),y(this,"lockX",function(){var e=this.container;h(e,c),this.isActiveX=!0}.bind(this)),y(this,"releaseY",function(){var e=this.container,t=this.overlay;this.isActiveY&&(h(e,a),h(t,r),e.style.paddingRight="",v(this.selectFixedElements(),"marginRight",""),this.isActiveY=!1)}.bind(this)),y(this,"releaseX",function(){var e=this.container;this.isActiveX&&(h(e,u),this.isActiveX=!1)}.bind(this)),y(this,"selectFixedElements",function(){return document.querySelectorAll(e.fixedClass)}),e.counter+=1,this.container=t||function(){return new Error("1st argument element required")},this.id=e.counter,this.init()};y(p,"counter",0),y(p,"preventDefault",function(e){return e.preventDefault}),y(p,"isScrollBar",f),y(p,"isScrollAvailable",d),y(p,"isScrollable",function(e){var t=d(e),n=f(e);return{y:t.y&&n.y,x:t.x&&n.x}}),y(p,"fixedClass","[data-scroll-fixed]");t.default=p}]).default});