"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{8969:function(e,a,r){r.r(a);var s=r(5893),l=r(7294),t=r(1664),d=r.n(t),c=r(6200),i=r(2013),n=r.n(i),m=r(6541);r(2682);var x=r(2076),o=r(2920),h=r(2473),g=r(6438);let u=e=>{let{doc:a,authordetails:r,next:t,prev:i,children:u}=e,{authors:j,slug:k,fileName:p,date:b,title:v,tags:N}=a,[f,y]=(0,l.useState)(()=>a.filter?a.filter:"filter-cyberpunk-v"),[w,H]=(0,l.useState)(()=>a.typography?"".concat(a.typography,"-article"):""),Z=[a.cover||null,a.imageHeader||null];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.es,{url:"".concat(n().siteUrl,"/").concat(k),canonicalUrl:"".concat(n().siteUrl,"/").concat(k),authorDetails:r,cover:a.cover?a.cover:a.imageHeader,images:Z,...a}),(0,s.jsxs)("section",{className:"main-article",children:[(0,s.jsx)(m.Z,{}),(0,s.jsxs)("header",{className:"header-basic",children:[(0,s.jsxs)("div",{className:"header-basic-content",children:[(0,s.jsx)("h5",{className:"article-meta",children:(0,s.jsx)("span",{className:"marker-line rounded-md bg-dark-500 !py-1 text-light-500 dark:bg-light-500 dark:text-dark-500",children:(0,s.jsx)(h.Z,{date:b,fulltimestamp:!0})})}),(0,s.jsx)("h1",{className:"md:text-5xl text-3xl font-extrabold tracking-wide mb-4",children:(0,s.jsx)("span",{className:"marker-line rounded-md bg-dark-500 !py-1 text-light-500 dark:bg-light-500 dark:text-dark-500",children:v})})]}),(0,s.jsx)("div",{className:"header-basic-container hover:hover-card",children:(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{media:"(max-width: 768px)",srcSet:a.cover?a.cover:a.imageHeader}),(0,s.jsx)("source",{media:"(min-width: 769px)",srcSet:a.cover?a.cover:a.imageHeader}),(0,s.jsx)("img",{src:a.cover?a.cover:a.imageHeader,className:"header-basic-container-image ".concat(f),alt:"".concat(v," Image")})]})})]}),(0,s.jsx)("article",{className:"article-grid prose !pb-12 dark:prose-dark ".concat(w,"-article"),children:u}),a.gallery&&a.gallery.length>0&&(0,s.jsxs)("div",{className:"article-grid",children:[(0,s.jsx)("h3",{className:"mb-4 rounded-md bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500",children:(0,s.jsx)("span",{className:"marker-line rounded-md !py-2 !px-3",children:"Galeria:"})}),(0,s.jsxs)(g.x,{className:"h-full w-full p-4",children:[(0,s.jsx)("div",{className:"table min-w-full",children:(0,s.jsx)("div",{className:"flex gap-5 pb-4",children:a.gallery.map((e,a)=>(0,s.jsx)(d(),{href:e,target:"_blank",className:"contents",children:(0,s.jsx)("img",{src:e,className:"max-w-full object-cover mx-auto",alt:"".concat(v," image ").concat(a)})},a))})}),(0,s.jsx)(g.B,{orientation:"horizontal"})]})]}),N&&N.length>0&&(0,s.jsxs)("div",{className:"article-grid",children:[(0,s.jsx)("h4",{className:"text-2xl rounded-md font-bold bg-dark-500 text-light-500 dark:!bg-light-500 dark:!text-dark-500 my-4",children:(0,s.jsx)("span",{className:"marker-line !py-2 !px-3",children:"Tags:"})}),(0,s.jsx)("div",{className:"flex gap-4",children:N.map(e=>(0,s.jsx)("span",{className:"py-1 px-3 bg-gray-300 text-dark-500 font-medium rounded",children:e},e))})]}),(0,s.jsxs)("div",{className:"article-grid mb-8",children:[(0,s.jsx)("h3",{className:"mb-4 rounded-md bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500",children:(0,s.jsx)("span",{className:"marker-line !py-2 !px-3",children:"Escrito por:"})}),r.map((e,a)=>(0,s.jsx)(o.Z,{author:e,quote:j[a].quote},a))]})]}),(t.document||i.document)&&(0,s.jsx)("div",{className:"main-article",children:(0,s.jsx)("div",{className:"mx-auto max-w-[1200px] px-4",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-5 lg:grid-cols-2",children:[i.document&&(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h4",{className:"mb-4 text-2xl font-bold tracking-wide",children:(0,s.jsx)("span",{className:"marker-line rounded-md bg-dark-500 !p-2 text-light-500 dark:bg-light-500 dark:text-dark-500",children:"Artigo anterior"})}),(0,s.jsx)(x.Z,{document:i.document,authors:i.authordetails})]}),t.document&&(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h4",{className:"mb-4 text-2xl font-bold tracking-wide md:text-right",children:(0,s.jsx)("span",{className:"marker-line rounded-md bg-dark-500 !p-2 text-light-500 dark:bg-light-500 dark:text-dark-500",children:"Pr\xf3ximo artigo"})}),(0,s.jsx)(x.Z,{document:t.document,authors:t.authordetails})]})]})})})]})};a.default=u},2076:function(e,a,r){var s=r(5893),l=r(7294),t=r(1664),d=r.n(t),c=r(2473),i=r(5214);let n=e=>{let a,{document:r,authors:t}=e,[n,m]=(0,l.useState)(!1);return a=r.cover||r.imageHeader?r.cover?r.cover:r.imageHeader:"/images/blklight-thumb.jpg",(0,l.useEffect)(()=>m(!0),[]),(0,s.jsxs)("div",{className:"card self-start dark:!bg-dark-500 hover:hover-card hover:hover-card-uv hover:dark:hover-card-neon-yellow",children:[(0,s.jsx)("img",{src:a,className:"h-[300px] w-full object-cover rounded-t-lg ".concat(r.filter),alt:""}),(0,s.jsxs)("div",{className:"flex flex-1 flex-col justify-between card-body",children:[(0,s.jsx)("div",{className:"flex flex-wrap items-center mb-1",children:(0,s.jsx)("span",{className:"dark:text-light-500 text-lg font-medium text-dark-500",children:(0,s.jsx)(c.Z,{date:r.date,fulldate:!0})})}),(0,s.jsx)("h3",{className:"card-title text-3xl",children:(0,s.jsx)(d(),{className:"",href:r.slug,children:(0,s.jsx)("span",{className:" dark:text-light-500 text-dark-500 hover:underline underline-offset-1",children:r.title})})}),r.description&&(0,s.jsx)("p",{className:"text-dark-500 dark:text-light-500 text-lg mb-2",children:r.description}),(0,s.jsxs)("div",{className:"flex flex-wrap items-center my-2",children:[(0,s.jsx)("div",{className:"flex items-center leading-normal !text-base mr-2 mb-1",children:(0,s.jsx)("span",{className:"marker-line rounded-md !py-1 bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 capitalize font-medium",children:r.channel})}),(0,s.jsx)("div",{className:"flex items-center leading-normal !text-base mb-1 ",children:(0,s.jsx)("span",{className:"marker-line rounded-md !py-1 bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 capitalize font-medium",children:r.category})})]}),(0,s.jsxs)("div",{className:"flex mt-auto",children:[t.map(e=>(0,s.jsx)("div",{className:"flex items-center my-1",children:(0,s.jsx)("div",{className:"shrink-0",children:(0,s.jsxs)(i.u,{children:[(0,s.jsx)(i.aJ,{asChild:!0,children:(0,s.jsx)("img",{src:e.avatar,className:"w-[50px] h-[50px] object-cover rounded-full border border-dark-500 mr-2",alt:"".concat(e.name," avatar")})}),(0,s.jsx)(i._v,{align:"center",side:"bottom",children:(0,s.jsx)("p",{children:e.name})})]})})},e.name)),(0,s.jsx)("div",{className:"flex flex-1 items-center",children:(0,s.jsx)(d(),{className:"ml-auto",href:r.slug,children:(0,s.jsx)("button",{className:"tracking-wider text-light-500 dark:text-dark-500 bg-uv-500 dark:bg-neon-yellow-500 hover:ring-2 ring-uv-300 dark:ring-neon-yellow-200 py-1.5 px-3 rounded-md font-medium transition-all !text-base",children:"Ler mais..."})})})]})]})]})};a.Z=n}}]);