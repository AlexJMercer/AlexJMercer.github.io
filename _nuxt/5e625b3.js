(window.webpackJsonp=window.webpackJsonp||[]).push([[27,11],{323:function(e,t,r){"use strict";r.r(t);var l=r(376),n=r(377),o={props:{date:{type:String,default:null},full:{type:Boolean,default:!1}},methods:{formatDate:function(e){var time=new Date(e);return Object(l.a)(new Date(time),"dd MMM yyyy",{locale:n.a})},formatDateFull:function(e){return Object(l.a)(new Date(e),"dd 'de' MMMM 'de' yyyy', às' H:mm",{locale:n.a})}}},c=r(41),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",[e.full?[e._v("\n    "+e._s(e.formatDateFull(e.date))+"\n  ")]:[e._v("\n    "+e._s(e.formatDate(e.date))+"\n  ")]],2)}),[],!1,null,null,null);t.default=component.exports},351:function(e,t,r){"use strict";r.r(t);r(30),r(23),r(29),r(49),r(26),r(50);var l=r(16),n=r(42),o=r(376),c=r(377);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={props:{article:{type:Object,default:null}},computed:m(m({},Object(n.b)(["isDarkTheme"])),{},{dateFormat:function(){return Object(o.a)(new Date(this.article.date),"dd 'de' MMMM 'de' yyyy', às' H:mm",{locale:c.a})},colorFilterRandom:function(){var e=["black-green","black-white","blue-red","cyberpunk-v","cyberpunk-vi","cyberpunk-vii","pink-blue","purple-red-green","purple-red-orange","red-sunset","soft-blue-pink"],t=Math.floor(Math.random()*e.length);return"hover-filter-".concat(e[t])}})},h=r(41),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header-parallax hover-header"},[r("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.article.imageHeader,expression:"article.imageHeader",arg:"background-image"}],staticClass:"header-parallax-image",class:[e.colorFilterRandom,e.isDarkTheme?"border-bottom border-light":"border-bottom border-dark"]}),e._v(" "),r("div",{staticClass:"header-overlay px-0"},[r("div",{staticClass:"h-100 d-flex flex-column justify-content-center"},[r("div",{staticClass:"py-2 px-3",class:e.isDarkTheme?"bg-dark border-top border-bottom border-light":"bg-light border-top border-bottom border-dark"},[r("h1",{staticClass:"article-title"},[r("em",[r("span",{staticClass:"p-1",class:e.isDarkTheme?"text-dark bg-light":"text-light bg-dark"},[r("i",{staticClass:"marker-line"},[e._v("\n                "+e._s(e.article.title)+"\n              ")])])])]),e._v(" "),r("h5",{staticClass:"article-meta"},[r("em",[r("span",{staticClass:"p-1",class:e.isDarkTheme?"text-dark bg-light":"text-light bg-dark"},[r("i",{staticClass:"marker-line"},[r("DateFormat",{attrs:{date:e.article.date,full:""}})],1)])])]),e._v(" "),e._m(0)])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h5",{},[r("span",[r("span",{staticClass:"badge bg-uv border border-light"},[e._v("Websites")]),e._v(" "),r("span",{staticClass:"badge bg-uv border border-light"},[e._v("Posters")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{DateFormat:r(323).default})}}]);