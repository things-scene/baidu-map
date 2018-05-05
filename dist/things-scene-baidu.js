!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=scene},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},i=n(0);var a={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"target-map",name:"targetMap"},{type:"number",label:"latitude",name:"lat"},{type:"number",label:"longitude",name:"lng"}],"value-property":"latlng"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,i.RectPath)(i.Shape)),o(t,[{key:"dispose",value:function(){var e=this.findMap();e&&e.removeMarker(this),delete this._infoWindow,delete this._marker,r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"dispose",this).call(this)}},{key:"ready",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this);var e=this.findMap();e&&e.addMarker(this)}},{key:"findInfoWindow",value:function(e){var t=this.model.event,n=t&&t[e]&&t[e].infoWindow;if(n)return this.root.findById(n)}},{key:"setInfoContent",value:function(e){var t=i.Component.template(e.model.frontSideTemplate),n="<style>"+e.model.style+"</style>"+t(this);this.infoWindow.setContent(n)}},{key:"openInfoWindow",value:function(e){this.setInfoContent(e);var t=this.findMap();if(t&&t.map){var n=this.model,o=n.lat,r=n.lng,i=new BMap.Point(r,o);t.map.openInfoWindow(this._infoWindow,i)}}},{key:"onmarkerclick",value:function(e){var t=this.findInfoWindow("tap");t&&this.openInfoWindow(t),this.trigger("click",e)}},{key:"onmarkermouseover",value:function(e){var t=this.findInfoWindow("hover");t&&this.openInfoWindow(t)}},{key:"onmarkermouseout",value:function(e){this.findInfoWindow("hover")&&this.infoWindow.close()}},{key:"_draw",value:function(e){var t=this.model,n=t.top,o=t.left,r=t.width,i=t.height;e.translate(o,n),e.beginPath(),e.moveTo(r/2,.9*i),e.bezierCurveTo(r/2.3,.6*i,0,i/2,0,i/4),e.ellipse(r/2,i/4,r/2,i/4,0,1*Math.PI,0*Math.PI),e.bezierCurveTo(r,i/2,r/1.7,.6*i,r/2,.9*i),e.closePath(),e.translate(-o,-n)}},{key:"findMap",value:function(e){return(e=e||this.get("targetMap"))&&this.root.findById(e)}},{key:"onchange",value:function(e,n){n.targetMap&&((o=this.findMap(n.targetMap))&&o.removeMarker(this));if(e.targetMap){var o;(o=this.findMap(e.targetMap))&&o.addMarker(this)}r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"onchange",this)&&r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"onchange",this).call(this,e,n)}},{key:"infoWindow",get:function(){return this._infoWindow||(this._infoWindow=new BMap.InfoWindow),this._infoWindow}},{key:"marker",set:function(e){this.findMap();e&&(e.addEventListener("click",this.onmarkerclick.bind(this)),e.addEventListener("mouseover",this.onmarkermouseover.bind(this)),e.addEventListener("mouseout",this.onmarkermouseout.bind(this)),this._marker=e)}},{key:"hidden",get:function(){return r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"hidden",this)||this.app.isViewMode},set:function(e){!function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"hidden",e,this)}},{key:"controls",get:function(){}},{key:"click_handler",get:function(){return this._click_handler||(this._click_handler=this.onmarkerclick.bind(this)),this._click_handler}},{key:"latlng",get:function(){return{lat:this.get("lat"),lng:this.get("lng")}},set:function(e){this.set(e)}}],[{key:"nature",get:function(){return a}}]),t}();t.default=s,i.Component.register("bmap-marker",s)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},i=n(0);var a={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"latitude",name:"lat"},{type:"number",label:"longitude",name:"lng"},{type:"number",label:"zoom",name:"zoom"},{type:"string",label:"api-key",name:"apiKey"}],"value-property":"latlng"};var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.HTMLOverlayContainer),o(t,[{key:"ready",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this),this.rootModel&&(this._listenTo=this.rootModel,this._listener=function(e){e.scale&&this.rescale()}.bind(this),this.rootModel.on("change",this._listener))}},{key:"removed",value:function(){this._listenTo&&(this._listenTo.off("change",this._listener),delete this._listenTo,delete this._listener)}},{key:"rescale",value:function(){var e=this,t=this._anchor;if(t){var n=function(e){for(var t={x:1,y:1},n=e;n;){var o=n.get("scale")||{x:1,y:1},r=o.x,i=o.y;t.x*=r||1,t.y*=i||1,n=n.parent}return t}(this),o="scale("+1/n.x+", "+1/n.y+")";["-webkit-","-moz-","-ms-","-o-",""].forEach(function(e){t.style[e+"transform"]=o,t.style[e+"transform-origin"]="0px 0px"});var r=this.model,i=r.width,a=r.height;if(t.style.width=Math.round(i*n.x)+"px",t.style.height=Math.round(a*n.y)+"px",this.loaded){var s=this.model,l=s.lat,u=s.lng,p=s.zoom,c=new BMap.Point(u,l);this.map.centerAndZoom(c,p),setTimeout(function(){e.buildMarkers()},200)}}}},{key:"createElement",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"createElement",this).call(this),this._anchor=document.createElement("div"),this.element.appendChild(this._anchor),this._markerComponents=[],this._markers=[],this._onmarkerchange=this.onmarkerchange.bind(this),t.load(this)}},{key:"onload",value:function(){this.loaded=!0,this._map=this.createMap(),this.buildMarkers(),this.rescale()}},{key:"createMap",value:function(){var e=new BMap.Map(this._anchor,{minZoom:4,maxZoom:20,enableAutoResize:!0,enableHighResolution:!0});return e.enableScrollWheelZoom(),e.enableAutoResize(),e.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),e}},{key:"dispose",value:function(){var e=this;r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"dispose",this).call(this),this._markerComponents&&this._markerComponents.slice().forEach(function(t){e.removeMarker(t)}),delete this._markerComponents,delete this._markers,delete this._anchor}},{key:"buildMarkers",value:function(){var e=this,t=[];this.map.clearOverlays(),this._markerComponents.forEach(function(n){var o=n.model,r=o.lat,i=o.lng,a=new BMap.Point(i,r),s=new BMap.Marker(a);t.push(s),e.map.addOverlay(s),n.marker=s}),this._markers=t}},{key:"touchMarker",value:function(e){var t=this._markerComponents.indexOf(e);if(-1!=t&&this.loaded){this._markers[t];var n=e.model,o=n.lat,r=n.lng;new BMap.Point(r,o)}}},{key:"onmarkerchange",value:function(e,t,n){var o=n.origin;(e.hasOwnProperty("lat")||e.hasOwnProperty("lng"))&&this.touchMarker(o)}},{key:"addMarker",value:function(e){this._markerComponents||(this._markerComponents=[]);var t=this._markerComponents,n=this._markers;if(-1==t.indexOf(e)){if(t.push(e),e.on("change",this._onmarkerchange),!this.loaded)return;var o=e.model,r=o.lat,i=o.lng,a=new BMap.Point(i,r),s=new BMap.Marker(a);n.push(s),this.map&&this.map.addOverlay(s),e.marker=s}}},{key:"removeMarker",value:function(e){if(this._markerComponents){var t=this._markerComponents.indexOf(e);if(-1!=t){e.off("change",this._onmarkerchange),e.marker=null,this._markerComponents.splice(t,1);var n=this._markers.splice(t,1);n.length>0&&this.map&&this.map.removeOverlay(n[0]),e.marker=null}}}},{key:"setElementProperties",value:function(e){this.rescale()}},{key:"onchange",value:function(e,n){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"onchange",this).call(this,e,n),this.rescale()}},{key:"tagName",get:function(){return"div"}},{key:"map",get:function(){return this._map}},{key:"markers",get:function(){return this._markerComponents||(this._markerComponents=[],this._markers=[]),this._markers}},{key:"latlng",get:function(){return{lat:this.get("lat"),lng:this.get("lng")}},set:function(e){this.set(e)}},{key:"nature",get:function(){return a}}],[{key:"load",value:function(e){var t=e.get("apiKey")||"bMxSipKRYIqOi2q4M7XR7IqKM2Xt3fNy";i.ScriptLoader.load("http://api.map.baidu.com/getscript?v=3.0&ak="+t).then(function(){return e.onload()},i.error)}}]),t}();t.default=s,i.Component.register("baidu-map",s)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(2)),r=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=[o.default,r.default]},function(e,t,n){e.exports=n(3)}]);
//# sourceMappingURL=things-scene-baidu.js.map