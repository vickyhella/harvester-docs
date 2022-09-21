"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},o="Air Gapped Environment",s={unversionedId:"airgap",id:"airgap",title:"",description:"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy.",source:"@site/docs/airgap.md",sourceDirName:".",slug:"/airgap",permalink:"/harvester-docs/airgap",draft:!1,editUrl:"https://github.com/vickyhella/harvester-docs/edit/main/docs/airgap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},sidebar:"tutorialSidebar",previous:{title:"Management Address",permalink:"/harvester-docs/install/management-address"},next:{title:"Upgrading Harvester",permalink:"/harvester-docs/upgrade/automatic"}},l={},p=[{value:"Working Behind an HTTP Proxy",id:"working-behind-an-http-proxy",level:2},{value:"Configure an HTTP Proxy During Installation",id:"configure-an-http-proxy-during-installation",level:3},{value:"Configure an HTTP Proxy in Harvester Settings",id:"configure-an-http-proxy-in-harvester-settings",level:3}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"air-gapped-environment"},"Air Gapped Environment"),(0,a.kt)("p",null,"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy."),(0,a.kt)("p",null,"The Harvester ISO image contains all the packages to make it work in an air gapped environment."),(0,a.kt)("h2",{id:"working-behind-an-http-proxy"},"Working Behind an HTTP Proxy"),(0,a.kt)("p",null,"In some environments, the connection to external services, from the servers or VMs, requires an HTTP(S) proxy."),(0,a.kt)("h3",{id:"configure-an-http-proxy-during-installation"},"Configure an HTTP Proxy During Installation"),(0,a.kt)("p",null,"You can configure the HTTP(S) proxy during the ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/install/iso-install"},"ISO installation")," as shown in picture below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iso-proxy",src:r(8266).Z,width:"1596",height:"1198"})),(0,a.kt)("h3",{id:"configure-an-http-proxy-in-harvester-settings"},"Configure an HTTP Proxy in Harvester Settings"),(0,a.kt)("p",null,"You can configure the HTTP(S) proxy in the settings page of the Harvester dashboard:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the settings page of the Harvester UI."),(0,a.kt)("li",{parentName:"ol"},"Find the ",(0,a.kt)("inlineCode",{parentName:"li"},"http-proxy")," setting, click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit setting")),(0,a.kt)("li",{parentName:"ol"},"Enter the value(s) for ",(0,a.kt)("inlineCode",{parentName:"li"},"http-proxy"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"https-proxy")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"no-proxy"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"proxy-setting",src:r(7246).Z,width:"2860",height:"1164"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester appends necessary addresses to user configured ",(0,a.kt)("inlineCode",{parentName:"p"},"no-proxy")," to ensure the internal traffic works.\ni.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,.svc,.cluster.local"))))}d.isMDXComponent=!0},8266:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/iso-proxy-4772156ef9e6a8688de2321ed356b078.png"},7246:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proxy-setting-6433c2c6f3efd4cfb84757420ceeaf8a.png"}}]);