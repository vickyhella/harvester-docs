"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6105],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),v=n,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:3,sidebar_label:"\u79bb\u7ebf\u73af\u5883",title:"\u79bb\u7ebf\u73af\u5883",keywords:["Harvester","\u79bb\u7ebf","\u79bb\u7ebf","HTTP \u4ee3\u7406"]},o=void 0,s={unversionedId:"airgap",id:"version-v1.1/airgap",title:"\u79bb\u7ebf\u73af\u5883",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528 Harvester\u3002\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0cHarvester \u4f1a\u5728\u79bb\u7ebf\u73af\u5883\uff0c\u6216\u5728\u9632\u706b\u5899/\u4ee3\u7406\u540e\u5b89\u88c5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/airgap.md",sourceDirName:".",slug:"/airgap",permalink:"/zh/v1.1/airgap",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/airgap.md",tags:[],version:"v1.1",lastUpdatedAt:1688120255,formattedLastUpdatedAt:"2023\u5e746\u670830\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u79bb\u7ebf\u73af\u5883",title:"\u79bb\u7ebf\u73af\u5883",keywords:["Harvester","\u79bb\u7ebf","\u79bb\u7ebf","HTTP \u4ee3\u7406"]},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u7406\u5730\u5740",permalink:"/zh/v1.1/install/management-address"},next:{title:"\u5347\u7ea7 Harvester",permalink:"/zh/v1.1/upgrade/automatic"}},p={},l=[{value:"\u5728 HTTP \u4ee3\u7406\u540e\u8fd0\u884c",id:"\u5728-http-\u4ee3\u7406\u540e\u8fd0\u884c",level:2},{value:"\u5728\u5b89\u88c5\u671f\u95f4\u914d\u7f6e HTTP \u4ee3\u7406",id:"\u5728\u5b89\u88c5\u671f\u95f4\u914d\u7f6e-http-\u4ee3\u7406",level:3},{value:"\u5728 Harvester \u8bbe\u7f6e\u4e2d\u914d\u7f6e HTTP \u4ee3\u7406",id:"\u5728-harvester-\u8bbe\u7f6e\u4e2d\u914d\u7f6e-http-\u4ee3\u7406",level:3},{value:"Guest \u96c6\u7fa4\u955c\u50cf",id:"guest-\u96c6\u7fa4\u955c\u50cf",level:2}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f7f\u7528 Harvester\u3002\u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\uff0cHarvester \u4f1a\u5728\u79bb\u7ebf\u73af\u5883\uff0c\u6216\u5728\u9632\u706b\u5899/\u4ee3\u7406\u540e\u5b89\u88c5\u3002"),(0,n.kt)("p",null,"Harvester ISO \u955c\u50cf\u5305\u62ec\u5b9e\u73b0\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u8fd0\u884c\u7684\u6240\u6709\u5305\u3002"),(0,n.kt)("h2",{id:"\u5728-http-\u4ee3\u7406\u540e\u8fd0\u884c"},"\u5728 HTTP \u4ee3\u7406\u540e\u8fd0\u884c"),(0,n.kt)("p",null,"\u5728\u67d0\u4e9b\u73af\u5883\u4e2d\uff0c\u4ece\u670d\u52a1\u5668\u6216\u865a\u62df\u673a\u8fde\u63a5\u5230\u5916\u90e8\u670d\u52a1\u9700\u8981 HTTP(S) \u4ee3\u7406\u3002"),(0,n.kt)("h3",{id:"\u5728\u5b89\u88c5\u671f\u95f4\u914d\u7f6e-http-\u4ee3\u7406"},"\u5728\u5b89\u88c5\u671f\u95f4\u914d\u7f6e HTTP \u4ee3\u7406"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.1/install/iso-install"},"ISO \u5b89\u88c5"),"\u671f\u95f4\u914d\u7f6e HTTP(S) \u4ee3\u7406\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iso-proxy",src:r(64976).Z,width:"1596",height:"1198"})),(0,n.kt)("h3",{id:"\u5728-harvester-\u8bbe\u7f6e\u4e2d\u914d\u7f6e-http-\u4ee3\u7406"},"\u5728 Harvester \u8bbe\u7f6e\u4e2d\u914d\u7f6e HTTP \u4ee3\u7406"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 Harvester \u4eea\u8868\u76d8\u7684\u8bbe\u7f6e\u9875\u9762\u4e2d\u914d\u7f6e HTTP(S) \u4ee3\u7406\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8f6c\u5230 Harvester UI \u7684\u8bbe\u7f6e\u9875\u9762\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u627e\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"http-proxy")," \u8bbe\u7f6e\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit setting"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"li"},"http-proxy"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"https-proxy")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"no-proxy")," \u7684\u503c\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"proxy-setting",src:r(14267).Z,width:"2860",height:"1164"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Harvester \u5728\u7528\u6237\u914d\u7f6e\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"no-proxy")," \u540e\u9644\u52a0\u5fc5\u8981\u7684\u5730\u5740\uff0c\u6765\u786e\u4fdd\u5185\u90e8\u6d41\u91cf\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\n\u4f8b\u5982\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,harvester-system,.svc,.cluster.local"),"\u3002v1.1.2 \u5f00\u59cb\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-system")," \u6dfb\u52a0\u5230\u5217\u8868\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u4e4b\u95f4\u4e0d\u4f7f\u7528\u4ee3\u7406\u8fdb\u884c\u901a\u4fe1\uff0c\u4f60\u9700\u8981\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9\u5b89\u88c5\u6210\u529f\u540e\u5c06 CIDR \u6dfb\u52a0\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"http-proxy.noProxy"),"\u3002\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.1/troubleshooting/harvester#http-proxy-%E8%AE%BE%E7%BD%AE%E9%94%99%E8%AF%AF%E5%AF%BC%E8%87%B4%E5%A4%9A%E8%8A%82%E7%82%B9%E9%9B%86%E7%BE%A4%E9%83%A8%E7%BD%B2%E5%A4%B1%E8%B4%A5"},"\u90e8\u7f72\u591a\u8282\u70b9\u96c6\u7fa4\u5931\u8d25"),"\u3002")),(0,n.kt)("h2",{id:"guest-\u96c6\u7fa4\u955c\u50cf"},"Guest \u96c6\u7fa4\u955c\u50cf"),(0,n.kt)("p",null,"\u5b89\u88c5\u548c\u8fd0\u884c Harvester \u6240\u9700\u7684\u6240\u6709\u955c\u50cf\u90fd\u6253\u5305\u5728 ISO \u4e2d\uff0c\u56e0\u6b64\u4f60\u65e0\u9700\u5728\u88f8\u673a\u8282\u70b9\u4e0a\u9884\u52a0\u8f7d\u955c\u50cf\u3002Harvester \u96c6\u7fa4\u5728\u540e\u53f0\u72ec\u7acb\u4e14\u9ad8\u6548\u5730\u7ba1\u7406\u5b83\u4eec\u3002"),(0,n.kt)("p",null,"\u4f46\u662f\uff0c\u7531 ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.1/rancher/node/node-driver"},"Harvester \u4e3b\u673a\u9a71\u52a8"),"\u521b\u5efa\u7684 Guest K8s \u96c6\u7fa4\uff08\u4f8b\u5982 RKE2 \u96c6\u7fa4\uff09\u662f\u4e0e Harvester \u96c6\u7fa4\u4e0d\u540c\u7684\u5b9e\u4f53\u3002Guest \u96c6\u7fa4\u5728\u865a\u62df\u673a\u5185\u8fd0\u884c\uff0c\u9700\u8981\u4ece\u4e92\u8054\u7f51\u6216",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry#configure-a-private-registry-with-credentials-when-creating-a-cluster"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),"\u62c9\u53d6\u955c\u50cf\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u5728 Guest K8s \u96c6\u7fa4\u4e2d\u5c06 ",(0,n.kt)("strong",{parentName:"p"},"Cloud Provider")," \u9009\u9879\u914d\u7f6e\u4e3a ",(0,n.kt)("strong",{parentName:"p"},"Harvester"),"\uff0c\u5219\u4f1a\u90e8\u7f72 Harvester Cloud Provider \u548c Container Storage Interface (CSI) \u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cluster-registry",src:r(98574).Z,width:"4362",height:"1348"})),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u76d1\u63a7\u6bcf\u4e2a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases"},"RKE2 \u7248\u672c"),"\uff0c\u5e76\u5c06\u6240\u9700\u7684\u955c\u50cf\u62c9\u5165\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/harvester-v1-1-2/"},"Harvester \u652f\u6301\u77e9\u9635\u9875\u9762"),"\u4e0a\u7684 ",(0,n.kt)("strong",{parentName:"p"},"Harvester CCM & CSI Driver with RKE2 Releases")," \u90e8\u5206\uff0c\u4e86\u89e3 Harvester Cloud Provider \u548c CSI Driver \u7684\u6700\u4f73\u529f\u80fd\u652f\u6301\u3002"))}u.isMDXComponent=!0},98574:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cluster-registry-d1f54048d64a61046810eda5c6b05c25.png"},64976:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-proxy-4772156ef9e6a8688de2321ed356b078.png"},14267:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/proxy-setting-6433c2c6f3efd4cfb84757420ceeaf8a.png"}}]);