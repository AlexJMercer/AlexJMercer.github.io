"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[115],{2682:function(e,t,a){var r=a(5893),n=a(7294);a(5675);var s=a(1664),i=a.n(s),l=a(2473),c=a(5214);let o=e=>{let t,{document:a,authors:s,isFeatured:o=!1}=e,[d,m]=(0,n.useState)(!1);return t=a.cover||a.imageHeader?a.cover?a.cover:a.imageHeader:"/images/blklight-thumb.jpg",(0,n.useEffect)(()=>m(!0),[]),(0,r.jsxs)("div",{className:"card card-background hover:hover-card !rounded-xl hover:hover-card-uv hover:dark:hover-card-neon-yellow view-anchor",children:[(0,r.jsx)("img",{src:t,className:"!rounded-xl ".concat(a.filter," ").concat(o?"card-background-image-featured":"card-background-image"),alt:"".concat(a.title," image")}),(0,r.jsx)("div",{className:"mask texture-mask-4"}),(0,r.jsx)("div",{className:"card-img-overlay flex flex-col",children:(0,r.jsx)("div",{className:"flex items-center leading-normal !text-base",children:(0,r.jsx)("span",{className:"marker-line text-light-500 rounded-md font-medium bg-dark-500 !py-1 text-lg tracking-wide",children:(0,r.jsx)(l.Z,{date:a.date})})})}),(0,r.jsxs)("div",{className:"card-img-overlay flex flex-col justify-end",children:[(0,r.jsxs)("div",{className:"flex items-center mb-2 leading-normal !text-base",children:[(0,r.jsx)("span",{className:"marker-line rounded-md !py-1 bg-dark-500 text-light-500 capitalize font-medium mr-2",children:a.channel}),(0,r.jsx)("span",{className:"marker-line rounded-md !py-1 bg-dark-500 text-light-500 capitalize font-medium",children:a.category})]}),(0,r.jsx)("h3",{className:"card-title text-3xl",children:(0,r.jsx)(i(),{className:"",href:a.slug,children:(0,r.jsx)("span",{className:"marker-line rounded-md bg-dark-500 text-light-500 !py-1 hover:underline underline-offset-1",children:a.title})})}),(0,r.jsxs)("div",{className:"flex mt-1",children:[s.map(e=>(0,r.jsx)("div",{className:"flex items-center my-1",children:(0,r.jsx)("div",{className:"shrink-0",children:(0,r.jsxs)(c.u,{children:[(0,r.jsx)(c.aJ,{asChild:!0,children:(0,r.jsx)("img",{id:"anchor-".concat(e.slug,"-").concat(a.slug),src:e.avatar,className:"w-[50px] h-[50px] object-cover rounded-full border border-dark-500 mr-2",alt:"".concat(e.name," avatar")})}),(0,r.jsx)(c._v,{align:"center",side:"right",children:(0,r.jsx)("p",{children:e.name})})]})})},e.name)),(0,r.jsx)("div",{className:"flex flex-1 items-center",children:(0,r.jsx)(i(),{className:"ml-auto",href:a.slug,children:(0,r.jsx)("button",{className:"tracking-wider text-light-500 dark:text-dark-500 bg-uv-500 dark:bg-neon-yellow-500 hover:ring-2 ring-uv-300 dark:ring-neon-yellow-200 py-1.5 px-3 rounded-md font-medium transition-all !text-base",children:"Ler mais..."})})})]})]})]})};t.Z=o},2473:function(e,t,a){var r=a(5893),n=a(3621),s=a(9081);let i=e=>{let{date:t,fulldate:a=!1,fulltimestamp:i=!1}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("span",{children:[a&&(0,n.Z)(new Date(t),"dd 'de' MMMM 'de' yyyy'",{locale:s.Z})," ",i&&(0,n.Z)(new Date(t),"dd 'de' MMMM 'de' yyyy', \xe0s' H:mm",{locale:s.Z}),!a&&!i&&(0,n.Z)(new Date(t),"dd MMM yyyy",{locale:s.Z})]})})};t.Z=i},6249:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(5893),n=a(1664),s=a.n(n);a(2013);var i=a(7294),l=a(2682),c=a(4819),o=a(6354);let d=(0,o.Z)("ChevronLeft",[["polyline",{points:"15 18 9 12 15 6",key:"kvxz59"}]]),m=(0,o.Z)("ChevronRight",[["polyline",{points:"9 18 15 12 9 6",key:"1rtp27"}]]),x=e=>{let{route:t,totalPages:a,currentPage:n}=e,i=parseInt(n)-1>0,l=parseInt(n)+1<=parseInt(a);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,r.jsxs)("nav",{className:"flex items-center justify-between",children:[!i&&(0,r.jsxs)(c.z,{variant:"disabled",children:[(0,r.jsx)(d,{className:"mr-2 h-4 w-4"})," Anterior"]}),i&&(0,r.jsx)(s(),{href:n-1==1?"/".concat(t,"/"):"/".concat(t,"/page/").concat(n-1),children:(0,r.jsxs)(c.z,{children:[(0,r.jsx)(d,{className:"mr-2 h-4 w-4"})," Anterior"]})}),(0,r.jsxs)("span",{className:"text-lg rounded-md font-bold marker-line bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 !py-2 !px-3 leading-normal tracking-wider",children:[n," de ",a]}),!l&&(0,r.jsxs)(c.z,{variant:"disabled",children:["Pr\xf3xima ",(0,r.jsx)(m,{className:"ml-2 h-4 w-4"})]}),l&&(0,r.jsx)(s(),{href:"/".concat(t,"/page/").concat(n+1),children:(0,r.jsxs)(c.z,{children:["Pr\xf3xima ",(0,r.jsx)(m,{className:"ml-2 h-4 w-4"})]})})]})})})},g=e=>{let{documents:t,initialDisplayDocuments:a=[],pagination:n}=e,[s,c]=(0,i.useState)(""),o=t.filter(e=>{let t=e.document.title+e.document.description;return t.toLowerCase().includes(s.toLowerCase())}),d=a.length>0&&!s?a:o;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"space-y-2 pb-8 md:space-y-5",children:(0,r.jsx)("div",{className:"flex justify-center mb-4",children:(0,r.jsxs)("div",{className:"relative max-w-lg flex-1",children:[(0,r.jsx)("input",{"aria-label":"Pesquisar projetos",type:"text",onChange:e=>c(e.target.value),placeholder:"Pesquisar projetos",className:"block w-full rounded-md border border-gray-300 bg-light-500 px-4 py-2 text-dark-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"}),(0,r.jsx)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})})}),(0,r.jsxs)("div",{className:"max-w-[1600px] mx-auto px-10 pb-6",children:[!o.length&&(0,r.jsx)("h1",{className:"text-center font-bold text-7xl my-14",children:"Nenhum artigo encontrado!"}),(0,r.jsx)("div",{className:"grid lg:grid-cols-3 grid-cols-1 gap-5",children:d.map(e=>(0,r.jsx)(l.Z,{document:e.document,authors:e.authordetails,isFeatured:!0},e.document.slug))})]}),n&&n.totalPages>1&&!s&&(0,r.jsx)("div",{className:"container mx-auto",children:(0,r.jsx)(x,{route:"ultimate-series",currentPage:n.currentPage,totalPages:n.totalPages})})]})};var h=g},6200:function(e,t,a){a.d(t,{TQ:function(){return d},es:function(){return m}});var r=a(5893),n=a(9008),s=a.n(n),i=a(1163),l=a(2013),c=a.n(l);let o=e=>{let{title:t,description:a,ogType:n,ogImage:l,twImage:o,canonicalUrl:d}=e,m=(0,i.useRouter)();return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"robots",content:"follow, index"}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(m.asPath)}),(0,r.jsx)("meta",{property:"og:type",content:n}),(0,r.jsx)("meta",{property:"og:site_name",content:c().title}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"og:title",content:t}),"Array"===l.constructor.name?l.map(e=>{let{url:t}=e;return(0,r.jsx)("meta",{property:"og:image",content:t},t)}):(0,r.jsx)("meta",{property:"og:image",content:l},l),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:c().twitter}),(0,r.jsx)("meta",{name:"twitter:title",content:t}),(0,r.jsx)("meta",{name:"twitter:description",content:a}),(0,r.jsx)("meta",{name:"twitter:image",content:o}),(0,r.jsx)("link",{rel:"canonical",href:d||"".concat(c().siteUrl).concat(m.asPath)})]})},d=e=>{let{title:t,description:a}=e,n=c().siteUrl+c().socialBanner,s=c().siteUrl+c().socialBanner;return(0,r.jsx)(o,{title:t,description:a,ogType:"website",ogImage:n,twImage:s})},m=e=>{let t,{authorDetails:a,title:n,description:l,date:d,modifiedDate:m,url:x,images:g=[],cover:h,canonicalUrl:u}=e;(0,i.useRouter)();let p=new Date(d).toISOString(),j=new Date(m||d).toISOString(),y=0===g.length?[c().socialBanner]:"string"==typeof g?[g]:g,f=y.map(e=>({"@type":"ImageObject",url:e.includes("http")?e:c().siteUrl+e}));t=a?a.map(e=>({"@type":"Person",name:e.name})):{"@type":"Person",name:c().author};let b={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":x},headline:"".concat(n," - Ultimate Mercer"),image:f,datePublished:p,dateModified:j,author:t,publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:l},v=f[0].url;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{title:"".concat(n," - Ultimate Mercer"),description:l,ogType:"article",ogImage:f,twImage:v,canonicalUrl:u}),(0,r.jsxs)(s(),{children:[d&&(0,r.jsx)("meta",{property:"article:published_time",content:p}),m&&(0,r.jsx)("meta",{property:"article:modified_time",content:j}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(b,null,2)}})]})]})}},2013:function(e){e.exports={title:"Ultimate Mercer",author:"Ultimate Mercer",headerTitle:"Ultimate Mercer",description:"",language:"pt-BR",theme:"system",siteUrl:"https://ultimatemercer.com/",siteLogo:"/images/ultimate-mercer-thumb.jpg",image:"/images/ultimate-mercer-thumb.jpg",socialBanner:"/images/ultimate-mercer-thumb.jpg",email:"address@yoursite.com",github:"https://github.com",twitter:"https://twitter.com/Twitter",facebook:"https://facebook.com",youtube:"https://youtube.com",linkedin:"https://www.linkedin.com",locale:"pt-BR"}}}]);