(window.webpackJsonp=window.webpackJsonp||[]).push([[26,11],{323:function(e,t,r){"use strict";r.r(t);var n=r(376),l=r(377),c={props:{date:{type:String,default:null},full:{type:Boolean,default:!1}},methods:{formatDate:function(e){var time=new Date(e);return Object(n.a)(new Date(time),"dd MMM yyyy",{locale:l.a})},formatDateFull:function(e){return Object(n.a)(new Date(e),"dd 'de' MMMM 'de' yyyy', às' H:mm",{locale:l.a})}}},o=r(41),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",[e.full?[e._v("\n    "+e._s(e.formatDateFull(e.date))+"\n  ")]:[e._v("\n    "+e._s(e.formatDate(e.date))+"\n  ")]],2)}),[],!1,null,null,null);t.default=component.exports},352:function(e,t,r){"use strict";r.r(t);r(30),r(23),r(29),r(49),r(26),r(50);var n=r(16),l=r(42),c=r(376),o=r(377);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={props:{article:{type:Object,default:null}},computed:f(f({},Object(l.b)(["isDarkTheme"])),{},{dateFormat:function(){return Object(c.a)(new Date(this.article.date),"dd 'de' MMMM 'de' yyyy', às' H:mm",{locale:o.a})},colorFilterRandom:function(){var e=["black-green","black-white","blue-red","cyberpunk-v","cyberpunk-vi","cyberpunk-vii","pink-blue","purple-red-green","purple-red-orange","red-sunset","soft-blue-pink"],t=Math.floor(Math.random()*e.length);return"hover-filter-".concat(e[t])}})},v=r(41),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header-basic"},[r("div",{staticClass:"header-basic-container"},[r("picture",{},[r("div",{staticClass:"hover-header"},[r("source",{attrs:{media:"(max-width: 768px)",srcset:e.article.cover}}),e._v(" "),r("source",{attrs:{media:"(min-width: 769px)",srcset:e.article.imageHeader}}),e._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.article.imageHeader,expression:"article.imageHeader"}],staticClass:"header-basic-container-image",class:[e.colorFilterRandom]})])])]),e._v(" "),r("div",{staticClass:"header-basic-content"},[e._m(0),e._v(" "),r("h1",{staticClass:"article-title"},[r("em",[r("span",{staticClass:"text-light bg-dark py-1"},[r("i",{staticClass:"marker-line"},[e._v("\n            "+e._s(e.article.title)+"\n          ")])])])]),e._v(" "),r("h5",{staticClass:"article-meta"},[r("span",{staticClass:"text-light bg-dark p-1"},[r("i",{staticClass:"marker-line"},[r("DateFormat",{attrs:{date:e.article.date,full:""}})],1)])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h5",{},[r("span",{staticClass:"badge bg-uv border border-light"},[e._v("Websites")]),e._v(" "),r("span",{staticClass:"badge bg-uv border border-light"},[e._v("Posters")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{DateFormat:r(323).default})}}]);