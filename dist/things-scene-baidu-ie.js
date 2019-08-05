!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=scene},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var r=n(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"latitude",name:"lat"},{type:"number",label:"longitude",name:"lng"},{type:"number",label:"zoom",name:"zoom"},{type:"string",label:"api-key",name:"apiKey"}],"value-property":"latlng"};var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,s(t).apply(this,arguments))}var n,o,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r["HTMLOverlayContainer"]),n=t,p=[{key:"load",value:function(e){var t=e.get("apiKey")||"bMxSipKRYIqOi2q4M7XR7IqKM2Xt3fNy";r.ScriptLoader.load("http://api.map.baidu.com/getscript?v=3.0&ak=".concat(t)).then(function(){return e.onload()},r.error)}}],(o=[{key:"ready",value:function(){l(s(t.prototype),"ready",this).call(this),this.rootModel&&(this._listenTo=this.rootModel,this._listener=function(e){e.scale&&this.rescale()}.bind(this),this.rootModel.on("change",this._listener))}},{key:"removed",value:function(){this._listenTo&&(this._listenTo.off("change",this._listener),delete this._listenTo,delete this._listener)}},{key:"rescale",value:function(){var e=this,t=this._anchor;if(t){var n=function(e){for(var t={x:1,y:1},n=e;n;){var r=n.get("scale")||{x:1,y:1},o=r.x,i=r.y;t.x*=o||1,t.y*=i||1,n=n.parent}return t}(this),r=1/n.x,o=1/n.y,i="scale(".concat(r,", ").concat(o,")");["-webkit-","-moz-","-ms-","-o-",""].forEach(function(e){t.style[e+"transform"]=i,t.style[e+"transform-origin"]="0px 0px"});var a=this.model,l=a.width,s=a.height;if(t.style.width=Math.round(l*n.x)+"px",t.style.height=Math.round(s*n.y)+"px",this.loaded){var u=this.model,c=u.lat,p=u.lng,f=u.zoom,h=new BMap.Point(p,c);this.map.centerAndZoom(h,f),setTimeout(function(){e.buildMarkers()},200)}}}},{key:"createElement",value:function(){l(s(t.prototype),"createElement",this).call(this),this._anchor=document.createElement("div"),this.element.appendChild(this._anchor),this._markerComponents=[],this._markers=[],this._onmarkerchange=this.onmarkerchange.bind(this),t.load(this)}},{key:"onload",value:function(){this.loaded=!0,this._map=this.createMap(),this.buildMarkers(),this.rescale()}},{key:"createMap",value:function(){var e=new BMap.Map(this._anchor,{minZoom:4,maxZoom:20,enableAutoResize:!0,enableHighResolution:!0});return e.enableScrollWheelZoom(),e.enableAutoResize(),e.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),e}},{key:"dispose",value:function(){var e=this;l(s(t.prototype),"dispose",this).call(this),this._markerComponents&&this._markerComponents.slice().forEach(function(t){e.removeMarker(t)}),delete this._markerComponents,delete this._markers,delete this._anchor}},{key:"buildMarkers",value:function(){var e=this,t=[];this.map.clearOverlays(),this._markerComponents.forEach(function(n){var r=n.model,o=r.lat,i=r.lng,a=new BMap.Point(i,o),l=new BMap.Marker(a);t.push(l),e.map.addOverlay(l),n.marker=l}),this._markers=t}},{key:"touchMarker",value:function(e){var t=this._markerComponents.indexOf(e);if(-1!=t&&this.loaded){var n=this._markers[t],r=e.model,o=r.lat,i=r.lng,a=new BMap.Point(i,o);n.setPosition(new BMap.Point(a))}}},{key:"onmarkerchange",value:function(e,t,n){var r=n.origin;(e.hasOwnProperty("lat")||e.hasOwnProperty("lng"))&&this.touchMarker(r)}},{key:"addMarker",value:function(e){this._markerComponents||(this._markerComponents=[]);var t=this._markerComponents,n=this._markers;if(-1==t.indexOf(e)){if(t.push(e),e.on("change",this._onmarkerchange),!this.loaded)return;var r=e.model,o=r.lat,i=r.lng,a=new BMap.Point(i,o),l=new BMap.Marker(a);n.push(l),this.map&&this.map.addOverlay(l),e.marker=l}}},{key:"removeMarker",value:function(e){if(this._markerComponents){var t=this._markerComponents.indexOf(e);if(-1!=t){e.off("change",this._onmarkerchange),e.marker=null,this._markerComponents.splice(t,1);var n=this._markers.splice(t,1);n.length>0&&this.map&&this.map.removeOverlay(n[0]),e.marker=null}}}},{key:"setElementProperties",value:function(e){this.rescale()}},{key:"onchange",value:function(e,n){l(s(t.prototype),"onchange",this).call(this,e,n),(e.lng||e.lat)&&this.convertLatLng(),this.rescale()}},{key:"convertLatLng",value:function(e,t){var n=this,r=new BMap.Convertor,o=[];o.push(new BMap.Point(e,t)),r.translate(o,3,5,function(e){if(0===e.status){var t=e.points[0];n.set("latlng",t)}})}},{key:"tagName",get:function(){return"div"}},{key:"map",get:function(){return this._map}},{key:"markers",get:function(){return this._markerComponents||(this._markerComponents=[],this._markers=[]),this._markers}},{key:"latlng",get:function(){return this.get("latlng")},set:function(e){this.set(e)}},{key:"nature",get:function(){return c}}])&&i(n.prototype,o),p&&i(n,p),t}();function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t,n,r){return(y="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,t,n,r){var o,i=g(e,t);if(i){if((o=Object.getOwnPropertyDescriptor(i,t)).set)return o.set.call(r,n),!0;if(!o.writable)return!1}if(o=Object.getOwnPropertyDescriptor(r,t)){if(!o.writable)return!1;o.value=n,Object.defineProperty(r,t,o)}else!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(r,t,n);return!0})(e,t,n,r)}function m(e,t,n,r,o){if(!y(e,t,n,r||e)&&o)throw new Error("failed to set property");return n}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.Component.register("baidu-map",p);var _={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"target-map",name:"targetMap"},{type:"number",label:"latitude",name:"lat"},{type:"number",label:"longitude",name:"lng"}],"value-property":"latlng"},w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,v(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,Object(r["RectPath"])(r["Shape"])),n=t,i=[{key:"nature",get:function(){return _}}],(o=[{key:"dispose",value:function(){var e=this.findMap();e&&e.removeMarker(this),delete this._infoWindow,delete this._marker,b(v(t.prototype),"dispose",this).call(this)}},{key:"ready",value:function(){b(v(t.prototype),"ready",this).call(this);var e=this.findMap();e&&e.addMarker(this)}},{key:"findInfoWindow",value:function(e){var t=this.model.event,n=t&&t[e]&&t[e].infoWindow;if(n)return this.root.findById(n)}},{key:"setInfoContent",value:function(e){var t=r.Component.template(e.model.frontSideTemplate),n="<style>".concat(e.model.style).concat("\n      /*mouseover과 mouseout이 반복하여 발생하여 깜빡임 현상 해결을 위해 작성*/\n      .BMap_pop div:nth-child(8){\n        margin-left: 13px !important;\n      }\n      /*content 가운데 정렬*/\n      .BMap_bubble_content{\n        text-align: center;\n      }\n\n\n    ","</style>")+t(this);this.infoWindow.setContent(n)}},{key:"openInfoWindow",value:function(e){this.setInfoContent(e);var t=this.findMap();if(t&&t.map){var n=this.model,r=n.lat,o=n.lng,i=new BMap.Point(o,r);t.map.openInfoWindow(this._infoWindow,i)}}},{key:"onmarkerclick",value:function(e){var t=this.findInfoWindow("tap");t&&this.openInfoWindow(t),this.trigger("click",e)}},{key:"onmarkermouseover",value:function(e){var t=this.findInfoWindow("hover");t&&this.openInfoWindow(t)}},{key:"onmarkermouseout",value:function(e){this.findInfoWindow("hover")&&this.infoWindow.close()}},{key:"_draw",value:function(e){var t=this.model,n=t.top,r=t.left,o=t.width,i=t.height;e.translate(r,n),e.beginPath(),e.moveTo(o/2,.9*i),e.bezierCurveTo(o/2.3,.6*i,0,i/2,0,i/4),e.ellipse(o/2,i/4,o/2,i/4,0,1*Math.PI,0*Math.PI),e.bezierCurveTo(o,i/2,o/1.7,.6*i,o/2,.9*i),e.closePath(),e.translate(-r,-n)}},{key:"findMap",value:function(e){return(e=e||this.get("targetMap"))&&this.root.findById(e)}},{key:"onchange",value:function(e,n){n.targetMap&&((r=this.findMap(n.targetMap))&&r.removeMarker(this));if(e.targetMap){var r;(r=this.findMap(e.targetMap))&&r.addMarker(this)}b(v(t.prototype),"onchange",this)&&b(v(t.prototype),"onchange",this).call(this,e,n)}},{key:"infoWindow",get:function(){if(!this._infoWindow){this._infoWindow=new BMap.InfoWindow("",{maxWidth:322,width:322})}return this._infoWindow}},{key:"marker",set:function(e){this.findMap();e&&(e.addEventListener("click",this.onmarkerclick.bind(this)),e.addEventListener("mouseover",this.onmarkermouseover.bind(this)),e.addEventListener("mouseout",this.onmarkermouseout.bind(this)),this._marker=e)}},{key:"hidden",get:function(){return b(v(t.prototype),"hidden",this)||this.app.isViewMode},set:function(e){m(v(t.prototype),"hidden",e,this,!0)}},{key:"controls",get:function(){}},{key:"click_handler",get:function(){return this._click_handler||(this._click_handler=this.onmarkerclick.bind(this)),this._click_handler}},{key:"latlng",get:function(){return{lat:this.get("lat"),lng:this.get("lng")}},set:function(e){this.set(e)}}])&&h(n.prototype,o),i&&h(n,i),t}();function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e,t,n,r){return(j="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,t,n,r){var o,i=W(e,t);if(i){if((o=Object.getOwnPropertyDescriptor(i,t)).set)return o.set.call(r,n),!0;if(!o.writable)return!1}if(o=Object.getOwnPropertyDescriptor(r,t)){if(!o.writable)return!1;o.value=n,Object.defineProperty(r,t,o)}else!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(r,t,n);return!0})(e,t,n,r)}function x(e,t,n){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=W(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function W(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.Component.register("bmap-marker",w);var B={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"target-map",name:"targetMap"},{type:"number",label:"latitude",name:"lat"},{type:"number",label:"longitude",name:"lng"},{type:"image-selector",label:"image-src",name:"imageSrc",property:{displayField:"id",displayFullUrl:!0,baseUrlAlias:"$base_url",defaultStorage:"scene-image",storageFilters:{type:Array,value:[{name:"category",value:"image"}]},useUpload:!0}},{type:"string",label:"center-name",name:"centerName"},{type:"string",label:"address",name:"address"},{type:"string",label:"tel-num",name:"telNum"},{type:"select",label:"popup-event-type",name:"popupEventType",property:{options:[{display:"click",value:"click"},{display:"hover",value:"hover"}]}},{type:"number",label:"popup-height",name:"popupHeight"},{type:"number",label:"popup-width",name:"popupWidth"},{type:"cjmarker-content",label:"cjmarker-content",name:"content"}],"value-property":"latlng"},E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,C(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,Object(r["RectPath"])(r["Shape"])),n=t,i=[{key:"nature",get:function(){return B}}],(o=[{key:"dispose",value:function(){var e=this.findMap();e&&e.removeMarker(this),delete this._infoWindow,delete this._marker,x(C(t.prototype),"dispose",this).call(this)}},{key:"ready",value:function(){x(C(t.prototype),"ready",this).call(this);var e=this.findMap();e&&e.addMarker(this)}},{key:"openInfoWindow",value:function(){var e=this.findMap();if(e&&e.map){var t=this.model,n=t.lat,r=t.lng,o=new BMap.Point(r,n);e.map.openInfoWindow(this.infoWindow,o)}}},{key:"onmarkerclick",value:function(e){"click"!=this.get("popupEventType")&&this.get("popupEventType")||this.openInfoWindow()}},{key:"onmarkermouseover",value:function(e){"hover"==this.get("popupEventType")&&this.openInfoWindow()}},{key:"onmarkermouseout",value:function(e){"hover"==this.get("popupEventType")&&this.infoWindow.close()}},{key:"_draw",value:function(e){var t=this.model,n=t.top,r=t.left,o=t.width,i=t.height;e.translate(r,n),e.beginPath(),e.moveTo(o/2,.9*i),e.bezierCurveTo(o/2.3,.6*i,0,i/2,0,i/4),e.ellipse(o/2,i/4,o/2,i/4,0,1*Math.PI,0*Math.PI),e.bezierCurveTo(o,i/2,o/1.7,.6*i,o/2,.9*i),e.closePath(),e.translate(-r,-n)}},{key:"findMap",value:function(e){return(e=e||this.get("targetMap"))&&this.root.findById(e)}},{key:"onchange",value:function(e,n){n.targetMap&&((r=this.findMap(n.targetMap))&&r.removeMarker(this));if(e.targetMap){var r;(r=this.findMap(e.targetMap))&&r.addMarker(this)}x(C(t.prototype),"onchange",this)&&x(C(t.prototype),"onchange",this).call(this,e,n)}},{key:"infoWindow",get:function(){if(!this._infoWindow){var e,t,n,r,o,i={maxWidth:322,width:this.get("popupWidth")||440,height:this.get("popupHeight")||320};e=t=n=r="",o=[];var a=this.app.url(this.get("imageSrc"))||"";if(this.state&&this.state.data&&(e=this.get("centerName")||"",t=this.get("address")||"",n=this.get("telNum")||"",(o=this.get("content")||[]).length>0)){r+='<table class="data_table">';for(var l=0;l<o.length;l++)r+="<tr><td>".concat(o[l].name,"</td>\n            <td>").concat(this.data[o[l].qty]||"","</td>\n            <td>").concat(o[l].unit,"</td></tr>");r+="</table>"}this._infoWindow=new BMap.InfoWindow("<style>".concat("\n      /*mouseover과 mouseout이 반복하여 발생하여 깜빡임 현상 해결을 위해 작성*/\n      .BMap_pop div:nth-child(8){\n        margin-left: 13px !important;\n      }\n      /*content 가운데 정렬*/\n      .BMap_bubble_content{\n        text-align: center;\n      }\n\n      .BMap_bottom + div, .BMap_center + div, .BMap_pop + div, .BMap_top + div {\n        overflow:initial !important;\n      }\n\n      .BMap_bottom{\n        border-top: 1px solid #fff !important;\n        margin-top: -1px;\n      }\n\n      .info{\n        display: block;\n      }\n\n      .info.last{\n        padding-bottom: 8px;\n      }\n      \n      .data_table{\n        width:100%; \n        height:100%; \n        margin:auto; \n        text-align:center;\n        top: -50%;\n      }\n\n      .data_table td{\n        padding: 5px;\n        border-bottom: 1px solid #444444;\n      }\n\n      #topLogo{\n        width: 200px;\n        height: 90px;\n      }\n    ",' </style> \n        <div style="background-color:white">\n          <img id ="topLogo" src="').concat(a,'"/>\n          <h2>').concat(e,'</h2>\n          <span class="info">').concat(t,'</span>\n          <span class="info last">').concat(n,"</span>\n          ").concat(r,"\n        </div>\n        "),i)}return this._infoWindow}},{key:"marker",set:function(e){this.findMap();e&&(e.addEventListener("click",this.onmarkerclick.bind(this)),e.addEventListener("mouseover",this.onmarkermouseover.bind(this)),e.addEventListener("mouseout",this.onmarkermouseout.bind(this)),this._marker=e)}},{key:"hidden",get:function(){return x(C(t.prototype),"hidden",this)||this.app.isViewMode},set:function(e){!function(e,t,n,r,o){if(!j(e,t,n,r||e)&&o)throw new Error("failed to set property")}(C(t.prototype),"hidden",e,this,!0)}},{key:"controls",get:function(){}},{key:"click_handler",get:function(){return this._click_handler||(this._click_handler=this.onmarkerclick.bind(this)),this._click_handler}},{key:"latlng",get:function(){return{lat:this.get("lat"),lng:this.get("lng")}},set:function(e){this.set(e)}}])&&O(n.prototype,o),i&&O(n,i),t}();r.Component.register("cj-marker",E);t.default=[p,w,E]}]);
//# sourceMappingURL=things-scene-baidu-ie.js.map