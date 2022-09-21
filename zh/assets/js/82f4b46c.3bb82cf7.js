"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3,sidebar_label:"\u79bb\u7ebf\u73af\u5883",title:"",keywords:["Harvester","\u79bb\u7ebf","\u79bb\u7ebf","HTTP \u4ee3\u7406"]},o="\u79bb\u7ebf\u73af\u5883",l={unversionedId:"airgap",id:"airgap",title:"",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528 Harvester\u3002\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0cHarvester \u4f1a\u5728\u79bb\u7ebf\u73af\u5883\uff0c\u6216\u5728\u9632\u706b\u5899/\u4ee3\u7406\u540e\u5b89\u88c5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/airgap.md",sourceDirName:".",slug:"/airgap",permalink:"/zh/airgap",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/airgap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u79bb\u7ebf\u73af\u5883",title:"",keywords:["Harvester","\u79bb\u7ebf","\u79bb\u7ebf","HTTP \u4ee3\u7406"]},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u5730\u5740",permalink:"/zh/install/management-address"},next:{title:"\u5347\u7ea7 Harvester",permalink:"/zh/upgrade/automatic"}},p={},s=[{value:"\u5728 HTTP \u4ee3\u7406\u540e\u8fd0\u884c",id:"\u5728-http-\u4ee3\u7406\u540e\u8fd0\u884c",level:2},{value:"\u5728\u5b89\u88c5\u671f\u95f4\u914d\u7f6e HTTP \u4ee3\u7406",id:"\u5728\u5b89\u88c5\u671f\u95f4\u914d\u7f6e-http-\u4ee3\u7406",level:3},{value:"\u5728 Harvester \u8bbe\u7f6e\u4e2d\u914d\u7f6e HTTP \u4ee3\u7406",id:"\u5728-harvester-\u8bbe\u7f6e\u4e2d\u914d\u7f6e-http-\u4ee3\u7406",level:3}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u79bb\u7ebf\u73af\u5883"},"\u79bb\u7ebf\u73af\u5883"),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528 Harvester\u3002\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0cHarvester \u4f1a\u5728\u79bb\u7ebf\u73af\u5883\uff0c\u6216\u5728\u9632\u706b\u5899/\u4ee3\u7406\u540e\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"Harvester ISO \u955c\u50cf\u5305\u62ec\u5b9e\u73b0\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u8fd0\u884c\u7684\u6240\u6709\u5305\u3002"),(0,a.kt)("h2",{id:"\u5728-http-\u4ee3\u7406\u540e\u8fd0\u884c"},"\u5728 HTTP \u4ee3\u7406\u540e\u8fd0\u884c"),(0,a.kt)("p",null,"\u5728\u67d0\u4e9b\u73af\u5883\u4e2d\uff0c\u4ece\u670d\u52a1\u5668\u6216\u865a\u62df\u673a\u8fde\u63a5\u5230\u5916\u90e8\u670d\u52a1\u9700\u8981 HTTP(S) \u4ee3\u7406\u3002"),(0,a.kt)("h3",{id:"\u5728\u5b89\u88c5\u671f\u95f4\u914d\u7f6e-http-\u4ee3\u7406"},"\u5728\u5b89\u88c5\u671f\u95f4\u914d\u7f6e HTTP \u4ee3\u7406"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/install/iso-install"},"ISO \u5b89\u88c5"),"\u671f\u95f4\u914d\u7f6e HTTP(S) \u4ee3\u7406\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iso-proxy",src:r(8266).Z,width:"1596",height:"1198"})),(0,a.kt)("h3",{id:"\u5728-harvester-\u8bbe\u7f6e\u4e2d\u914d\u7f6e-http-\u4ee3\u7406"},"\u5728 Harvester \u8bbe\u7f6e\u4e2d\u914d\u7f6e HTTP \u4ee3\u7406"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Harvester \u4eea\u8868\u76d8\u7684\u8bbe\u7f6e\u9875\u9762\u4e2d\u914d\u7f6e HTTP(S) \u4ee3\u7406\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230 Harvester UI \u7684\u8bbe\u7f6e\u9875\u9762\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"http-proxy")," \u8bbe\u7f6e\uff0c\u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit setting"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"http-proxy"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"https-proxy")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"no-proxy")," \u7684\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"proxy-setting",src:r(7246).Z,width:"2860",height:"1164"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester \u5728\u7528\u6237\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"no-proxy")," \u540e\u9644\u52a0\u5fc5\u8981\u7684\u5730\u5740\uff0c\u6765\u786e\u4fdd\u5185\u90e8\u6d41\u91cf\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\n\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,.svc,.cluster.local"))))}u.isMDXComponent=!0},8266:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/iso-proxy-4772156ef9e6a8688de2321ed356b078.png"},7246:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proxy-setting-6433c2c6f3efd4cfb84757420ceeaf8a.png"}}]);