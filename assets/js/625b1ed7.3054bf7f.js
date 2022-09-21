"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:5,sidebar_label:"Authentication",title:"",keywords:["Harvester","harvester","Rancher","rancher","Authentication"],Description:"With ISO installation mode, user will be prompted to set the password for the default `admin` user on the first-time login."},a="Authentication",s={unversionedId:"authentication",id:"authentication",title:"",description:"After installation, user will be prompted to set the password for the default admin user on the first-time login.",source:"@site/docs/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/authentication",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/authentication.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Authentication",title:"",keywords:["Harvester","harvester","Rancher","rancher","Authentication"],Description:"With ISO installation mode, user will be prompted to set the password for the default `admin` user on the first-time login."},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/upgrade/troubleshooting"},next:{title:"Upload Images",permalink:"/upload-image"}},l={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"After installation, user will be prompted to set the password for the default ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," user on the first-time login."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"auth",src:r(2401).Z,width:"2555",height:"1295"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In the single cluster mode, only one default ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," user is provided. Check out the ",(0,i.kt)("a",{parentName:"p",href:"/rancher/rancher-integration"},"Rancher Integration")," for multi-tenant management.")))}u.isMDXComponent=!0},2401:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"}}]);