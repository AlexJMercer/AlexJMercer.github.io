(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{323:function(e,t,n){"use strict";n.r(t);var l=n(376),o=n(377),r={props:{date:{type:String,default:null},full:{type:Boolean,default:!1}},methods:{formatDate:function(e){var time=new Date(e);return Object(l.a)(new Date(time),"dd MMM yyyy",{locale:o.a})},formatDateFull:function(e){return Object(l.a)(new Date(e),"dd 'de' MMMM 'de' yyyy', às' H:mm",{locale:o.a})}}},d=n(41),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",[e.full?[e._v("\n    "+e._s(e.formatDateFull(e.date))+"\n  ")]:[e._v("\n    "+e._s(e.formatDate(e.date))+"\n  ")]],2)}),[],!1,null,null,null);t.default=component.exports}}]);