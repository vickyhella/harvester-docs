"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[81],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:3,sidebar_label:"Authentication",title:"Authentication",keywords:["Harvester","harvester","Rancher","rancher","Authentication"],Description:"With ISO installation mode, user will be prompted to set the password for the default `admin` user on the first-time login."},o=void 0,s={unversionedId:"authentication",id:"version-v0.3/authentication",title:"Authentication",description:"After installation, user will be prompted to set the password for the default admin user on the first-time login.",source:"@site/versioned_docs/version-v0.3/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/harvester-docs/zh/v0.3/authentication",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/authentication.md",tags:[],version:"v0.3",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Authentication",title:"Authentication",keywords:["Harvester","harvester","Rancher","rancher","Authentication"],Description:"With ISO installation mode, user will be prompted to set the password for the default `admin` user on the first-time login."},sidebar:"tutorialSidebar",previous:{title:"Management Address",permalink:"/harvester-docs/zh/v0.3/install/management-address"},next:{title:"Upgrading Harvester",permalink:"/harvester-docs/zh/v0.3/upgrade"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After installation, user will be prompted to set the password for the default ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," user on the first-time login."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"auth",src:r(40482).Z,width:"2555",height:"1295"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In the single cluster mode, only one default ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," user is provided. Check out the ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v0.3/rancher/rancher-integration"},"Rancher Integration")," for multi-tenant management.")))}u.isMDXComponent=!0},40482:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"}}]);