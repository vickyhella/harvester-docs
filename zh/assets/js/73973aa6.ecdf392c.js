"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return n?r.createElement(m,i(i({ref:t},k),{},{components:n})):r.createElement(m,i({ref:t},k))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1,sidebar_label:"\u96c6\u7fa4\u7f51\u7edc",title:"\u96c6\u7fa4\u7f51\u7edc",keywords:["Harvester","\u7f51\u7edc","ClusterNetwork","NetworkConfig","\u7f51\u7edc"]},i=void 0,o={unversionedId:"networking/clusternetwork",id:"version-v1.1/networking/clusternetwork",title:"\u96c6\u7fa4\u7f51\u7edc",description:"\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/networking/clusternetwork.md",sourceDirName:"networking",slug:"/networking/clusternetwork",permalink:"/harvester-docs/zh/v1.1/networking/clusternetwork",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/networking/clusternetwork.md",tags:[],version:"v1.1",lastUpdatedAt:1696844458,formattedLastUpdatedAt:"2023\u5e7410\u67089\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u96c6\u7fa4\u7f51\u7edc",title:"\u96c6\u7fa4\u7f51\u7edc",keywords:["Harvester","\u7f51\u7edc","ClusterNetwork","NetworkConfig","\u7f51\u7edc"]},sidebar:"docs",previous:{title:"\u5377\u5feb\u7167",permalink:"/harvester-docs/zh/v1.1/volume/volume-snapshots"},next:{title:"\u7f51\u7edc",permalink:"/harvester-docs/zh/v1.1/networking/harvester-network"}},p={},s=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u96c6\u7fa4\u7f51\u7edc",id:"\u96c6\u7fa4\u7f51\u7edc",level:3},{value:"\u7f51\u7edc\u914d\u7f6e",id:"\u7f51\u7edc\u914d\u7f6e",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u96c6\u7fa4\u7f51\u7edc\u3001\u7f51\u7edc\u914d\u7f6e\u3001\u865a\u62df\u673a\u7f51\u7edc\u4e4b\u95f4\u7684\u5173\u7cfb",id:"\u96c6\u7fa4\u7f51\u7edc\u7f51\u7edc\u914d\u7f6e\u865a\u62df\u673a\u7f51\u7edc\u4e4b\u95f4\u7684\u5173\u7cfb",level:3},{value:"\u96c6\u7fa4\u7f51\u7edc\u8be6\u7ec6\u4fe1\u606f",id:"\u96c6\u7fa4\u7f51\u7edc\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"\u5185\u7f6e\u96c6\u7fa4\u7f51\u7edc",id:"\u5185\u7f6e\u96c6\u7fa4\u7f51\u7edc",level:3},{value:"\u81ea\u5b9a\u4e49\u96c6\u7fa4\u7f51\u7edc",id:"\u81ea\u5b9a\u4e49\u96c6\u7fa4\u7f51\u7edc",level:3},{value:"\u5982\u4f55\u521b\u5efa\u65b0\u7684\u96c6\u7fa4\u7f51\u7edc",id:"\u5982\u4f55\u521b\u5efa\u65b0\u7684\u96c6\u7fa4\u7f51\u7edc",level:4}],k={toc:s},u="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.kt)("h3",{id:"\u96c6\u7fa4\u7f51\u7edc"},"\u96c6\u7fa4\u7f51\u7edc"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.1.0 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"\u5728 Harvester v1.1.0 \u4e2d\uff0c\u6211\u4eec\u5f15\u5165\u4e86\u4e00\u4e2a\u79f0\u4e3a\u96c6\u7fa4\u7f51\u7edc\u7684\u65b0\u6982\u5ff5\uff0c\u7528\u4e8e\u6d41\u91cf\u9694\u79bb\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u63cf\u8ff0\u4e86\u5206\u79bb\u6570\u636e\u4e2d\u5fc3 (DC) \u6d41\u91cf\u4e0e\u5e26\u5916 (OOB) \u6d41\u91cf\u7684\u5178\u578b\u7f51\u7edc\u67b6\u6784\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75518).Z,width:"707",height:"561"})),(0,a.kt)("p",null,"\u6211\u4eec\u5c06 Harvester \u4e0a\u6d41\u91cf\u9694\u79bb\u8f6c\u53d1\u8def\u5f84\u4e0a\u7684\u8bbe\u5907\u3001\u94fe\u8def\u548c\u914d\u7f6e\u7684\u603b\u548c\u62bd\u8c61\u4e3a\u96c6\u7fa4\u7f51\u7edc\u3002"),(0,a.kt)("p",null,"\u5728\u4e0a\u8ff0\u6848\u4f8b\u4e2d\uff0c\u5c06\u6709\u4e24\u4e2a\u96c6\u7fa4\u7f51\u7edc\u5bf9\u5e94\u4e24\u4e2a\u6d41\u91cf\u9694\u79bb\u7684\u8f6c\u53d1\u8def\u5f84\u3002"),(0,a.kt)("h3",{id:"\u7f51\u7edc\u914d\u7f6e"},"\u7f51\u7edc\u914d\u7f6e"),(0,a.kt)("p",null,"Harvester \u4e3b\u673a\uff08\u5305\u62ec\u7f51\u7edc\u8bbe\u5907\uff09\u7684\u89c4\u683c\u53ef\u80fd\u4f1a\u6709\u6240\u4e0d\u540c\u3002\u4e3a\u4e86\u517c\u5bb9\u8fd9\u6837\u7684\u5f02\u6784\u96c6\u7fa4\uff0c\u6211\u4eec\u8bbe\u8ba1\u4e86\u7f51\u7edc\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u7f51\u7edc\u914d\u7f6e\u4ec5\u5728\u7279\u5b9a\u96c6\u7fa4\u7f51\u7edc\u4e0b\u6709\u6548\u3002\u6bcf\u4e2a\u7f51\u7edc\u914d\u7f6e\u5747\u5bf9\u5e94\u4e00\u7ec4\u5177\u6709\u7edf\u4e00\u7f51\u7edc\u89c4\u683c\u7684\u4e3b\u673a\u3002\u56e0\u6b64\uff0c\u975e\u7edf\u4e00\u4e3b\u673a\u4e0a\u7684\u96c6\u7fa4\u7f51\u7edc\u9700\u8981\u591a\u4e2a\u7f51\u7edc\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,a.kt)("p",null,"\u7f51\u7edc\u662f\u865a\u62df\u673a\u4e2d\u8fde\u63a5\u5230\u4e3b\u673a\u7f51\u7edc\u7684\u63a5\u53e3\u3002\u4e0e\u7f51\u7edc\u914d\u7f6e\u4e00\u6837\uff0c\u9664\u4e86\u5185\u7f6e\u7684",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.1/networking/harvester-network#%E7%AE%A1%E7%90%86%E7%BD%91%E7%BB%9C"},"\u7ba1\u7406\u7f51\u7edc"),"\u7f51\u7edc\u4e4b\u5916\u7684\u6bcf\u4e2a\u7f51\u7edc\u90fd\u5fc5\u987b\u5728\u67d0\u4e2a\u96c6\u7fa4\u7f51\u7edc\u4e0b\u3002"),(0,a.kt)("p",null,"Harvester \u652f\u6301\u5728\u4e00\u4e2a VM \u4e0b\u6dfb\u52a0\u591a\u4e2a\u7f51\u7edc\u3002\u5982\u679c\u67d0\u4e2a\u7f51\u7edc\u7684\u96c6\u7fa4\u7f51\u7edc\u672a\u5728\u4e3b\u673a\u4e0a\u542f\u7528\uff0c\u5219\u8be5\u7f51\u7edc\u6240\u5728\u7684 VM \u5c06\u4e0d\u4f1a\u88ab\u8c03\u5ea6\u5230\u8fd9\u4e9b\u4e3b\u673a\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u7f51\u7edc\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.1/networking/harvester-network"},"\u7f51\u7edc"),"\u3002"),(0,a.kt)("h3",{id:"\u96c6\u7fa4\u7f51\u7edc\u7f51\u7edc\u914d\u7f6e\u865a\u62df\u673a\u7f51\u7edc\u4e4b\u95f4\u7684\u5173\u7cfb"},"\u96c6\u7fa4\u7f51\u7edc\u3001\u7f51\u7edc\u914d\u7f6e\u3001\u865a\u62df\u673a\u7f51\u7edc\u4e4b\u95f4\u7684\u5173\u7cfb"),(0,a.kt)("p",null,"\u4e0b\u56fe\u663e\u793a\u4e86\u96c6\u7fa4\u7f51\u7edc\u3001\u7f51\u7edc\u914d\u7f6e\u548c VM \u7f51\u7edc\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(59078).Z,width:"1414",height:"1166"})),(0,a.kt)("p",null,"\u6240\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"\u7f51\u7edc\u914d\u7f6e"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u865a\u62df\u673a\u7f51\u7edc"),"\u90fd\u5206\u7ec4\u5728\u4e00\u4e2a\u96c6\u7fa4\u7f51\u7edc\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u4e3b\u673a\u5206\u914d\u4e00\u4e2a\u6807\u7b7e\uff0c\u4ece\u800c\u6839\u636e\u4e3b\u673a\u7684\u7f51\u7edc\u89c4\u8303\u5bf9\u4e3b\u673a\u8fdb\u884c\u5206\u7c7b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u4f7f\u7528\u8282\u70b9\u9009\u62e9\u5668\uff08node selector\uff09\u4e3a\u6bcf\u7ec4\u4e3b\u673a\u6dfb\u52a0\u7f51\u7edc\u914d\u7f6e\uff08network-config\uff09\u3002")),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u4e0a\u56fe\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterNetwork-A")," \u4e2d\u7684\u4e3b\u673a\u5206\u4e3a\u4ee5\u4e0b\u4e09\u7ec4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u7ec4\u5305\u62ec host0\uff0c\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"li"},"network-config-A"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u7ec4\u5305\u62ec host1 \u548c host2\uff0c\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"li"},"network-config-B"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u7ec4\u5305\u62ec\u5269\u4f59\u7684\u4e3b\u673a\uff08host3\u3001host4 \u548c host5\uff09\uff0c\u5b83\u4eec\u6ca1\u6709\u5bf9\u5e94\u7684\u7f51\u7edc\u914d\u7f6e\uff08network-config\uff09\uff0c\u56e0\u6b64\u4e0d\u5c5e\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterNetwork-A"),"\u3002")),(0,a.kt)("p",null,"\u96c6\u7fa4\u7f51\u7edc\u53ea\u5bf9\u7f51\u7edc\u914d\u7f6e\u8986\u76d6\u7684\u4e3b\u673a\u6709\u6548\u3002\u5728\u7279\u5b9a\u96c6\u7fa4\u7f51\u7edc\u4e0b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"VM \u7f51\u7edc"),"\u7684 VM \u53ea\u80fd\u8c03\u5ea6\u5230\u96c6\u7fa4\u7f51\u7edc\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7684\u4e3b\u673a\u4e0a\u3002"),(0,a.kt)("p",null,"\u5728\u4e0a\u56fe\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ClusterNetwork-A")," \u5728 host0\u3001host1 \u548c host2 \u4e0a\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"VM0")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"VM-network-A"),"\uff0c\u6240\u4ee5\u53ef\u4ee5\u8c03\u5ea6\u5230\u8fd9\u4e9b\u4e3b\u673a\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VM1")," \u540c\u65f6\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"VM-network-B")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"VM-network-C"),"\uff0c\u6240\u4ee5\u53ea\u80fd\u88ab\u8c03\u5ea6\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterNetwork-A")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterNetwork-B")," \u90fd\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u7684 host2 \u4e0a\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VM0"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"VM1")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"VM2")," \u65e0\u6cd5\u5728\u4e24\u4e2a\u96c6\u7fa4\u7f51\u7edc\u90fd\u5904\u4e8e\u975e\u6d3b\u52a8\u72b6\u6001\u7684 host3 \u4e0a\u8fd0\u884c\u3002")),(0,a.kt)("p",null,"\u603b\u4f53\u800c\u8a00\uff0c\u6b64\u56fe\u6e05\u695a\u5730\u663e\u793a\u4e86\u96c6\u7fa4\u7f51\u7edc\u3001\u7f51\u7edc\u914d\u7f6e\u548c VM \u7f51\u7edc\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u4ee5\u53ca\u5b83\u4eec\u662f\u5982\u4f55\u5f71\u54cd\u4e3b\u673a\u4e0a\u7684 VM \u8c03\u5ea6\u7684\u3002"),(0,a.kt)("h2",{id:"\u96c6\u7fa4\u7f51\u7edc\u8be6\u7ec6\u4fe1\u606f"},"\u96c6\u7fa4\u7f51\u7edc\u8be6\u7ec6\u4fe1\u606f"),(0,a.kt)("h3",{id:"\u5185\u7f6e\u96c6\u7fa4\u7f51\u7edc"},"\u5185\u7f6e\u96c6\u7fa4\u7f51\u7edc"),(0,a.kt)("p",null,"Harvester \u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt")," \u7684\u5185\u7f6e\u96c6\u7fa4\u7f51\u7edc\u3002\u5b83\u4e0d\u540c\u4e8e\u81ea\u5b9a\u4e49\u96c6\u7fa4\u7f51\u7edc\u3002mgmt \u96c6\u7fa4\u7f51\u7edc\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u88ab\u5220\u9664\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u4efb\u4f55\u7f51\u7edc\u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u6240\u6709\u4e3b\u673a\u4e0a\u542f\u7528\u4e14\u65e0\u6cd5\u7981\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u7ba1\u7406\u7f51\u7edc\u5171\u4eab\u76f8\u540c\u7684\u6d41\u91cf\u51fa\u53e3\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u5206\u79bb\u6d41\u91cf\uff0c\u4f60\u53ef\u4ee5\u628a\u6240\u6709\u7684\u7f51\u7edc\u90fd\u653e\u5728 mgmt \u96c6\u7fa4\u7f51\u7edc\u4e0b\u3002"),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u96c6\u7fa4\u7f51\u7edc"},"\u81ea\u5b9a\u4e49\u96c6\u7fa4\u7f51\u7edc"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u96c6\u7fa4\u7f51\u7edc\uff0c\u5728\u4e3b\u673a\u4e0a\u901a\u8fc7\u6dfb\u52a0\u7f51\u7edc\u914d\u7f6e\u542f\u7528\u540e\uff0c\u81ea\u5b9a\u4e49\u96c6\u7fa4\u7f51\u7edc\u624d\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,a.kt)("h4",{id:"\u5982\u4f55\u521b\u5efa\u65b0\u7684\u96c6\u7fa4\u7f51\u7edc"},"\u5982\u4f55\u521b\u5efa\u65b0\u7684\u96c6\u7fa4\u7f51\u7edc"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8981\u521b\u5efa\u96c6\u7fa4\u7f51\u7edc\uff0c\u8bf7\u8f6c\u5230 ",(0,a.kt)("strong",{parentName:"p"},"Networks > ClusterNetworks/Configs")," \u9875\u9762\u5e76\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Create")," \u6309\u94ae\u3002\u4f60\u53ea\u9700\u8981\u6307\u5b9a\u540d\u79f0\u5373\u53ef\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(59535).Z,width:"3450",height:"1278"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb\u96c6\u7fa4\u7f51\u7edc\u53f3\u4fa7\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Create Network Config")," \u6309\u94ae\uff0c\u521b\u5efa\u65b0\u7684\u7f51\u7edc\u914d\u7f6e\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(8691).Z,width:"3450",height:"1298"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Node Selector")," \u9009\u9879\u5361\u4e2d\uff0c\u6307\u5b9a\u540d\u79f0\u5e76\u9009\u62e9\u4e09\u79cd\u65b9\u6cd5\u4e4b\u4e00\u6765\u9009\u62e9\u8981\u5e94\u7528\u7f51\u7edc\u914d\u7f6e\u7684\u8282\u70b9\u3002\u5982\u679c\u8981\u8986\u76d6\u672a\u9009\u4e2d\u7684\u8282\u70b9\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u53e6\u4e00\u4e2a\u7f51\u7edc\u914d\u7f6e\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(41972).Z,width:"1773",height:"462"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Uplink")," \u9009\u9879\u5361\u6765\u6dfb\u52a0 NIC\uff0c\u5e76\u914d\u7f6e\u7ed1\u5b9a\u9009\u9879\u548c\u94fe\u63a5\u5c5e\u6027\u3002\u7ed1\u5b9a\u6a21\u5f0f\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"active-backup"),"\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(61607).Z,width:"1781",height:"702"})))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"NICs \u4e0b\u62c9\u5217\u8868\u663e\u793a\u4e86\u6240\u6709\u9009\u5b9a\u8282\u70b9\u4e0a\u7684\u5171\u6709 NIC\u3002\u5f53\u4f60\u9009\u62e9\u4e0d\u540c\u7684\u8282\u70b9\u65f6\uff0c\u4e0b\u62c9\u5217\u8868\u5c06\u53d1\u751f\u53d8\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},"NICs \u4e0b\u62c9\u5217\u8868\u4e2d\u7684\u6587\u672c ",(0,a.kt)("inlineCode",{parentName:"li"},"enp7s3 (1/3 Down)")," \u8868\u793a enp7s3 NIC \u5728\u5176\u4e2d\u4e00\u4e2a\u9009\u5b9a\u8282\u70b9\u4e2d\u72b6\u6001\u4e3a Down\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u627e\u5230 NIC\uff0c\u5c06\u5176\u72b6\u6001\u8bbe\u7f6e\u4e3a Up\uff0c\u7136\u540e\u5237\u65b0\u6b64\u9875\u9762\uff0c\u5b83\u5c06\u53d8\u6210\u53ef\u9009\u3002"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4ece Harvester v1.1.2 \u5f00\u59cb\uff0cHarvester \u652f\u6301\u66f4\u65b0\u7f51\u7edc\u914d\u7f6e\u3002\u5728\u66f4\u65b0\u7f51\u7edc\u914d\u7f6e\u4e4b\u524d\uff0c\u8bf7\u505c\u6b62\u6240\u6709\u53d7\u5f71\u54cd\u7684\u865a\u62df\u673a\u3002")))}c.isMDXComponent=!0},61607:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/config-uplink-bc85c0a8b27b769e7500b095ed4ec4de.png"},59535:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-clusternetwork-021bf11039b990a9b51537a9d5be1c7f.png"},8691:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-config-button-276443fdbfd60c4ce34df85947087ada.png"},59078:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/relation-bb910c30b0b737d6ad56751d375c1698.png"},41972:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/select-nodes-89a81d691176c3b0ac1b567be16a0460.png"},75518:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/traffic-isolation-71a839f59696dc336d7c036f6bf975f6.png"}}]);