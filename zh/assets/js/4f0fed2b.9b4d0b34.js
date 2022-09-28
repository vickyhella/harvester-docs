"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:1,sidebar_label:"\u76d1\u63a7",title:""},a="\u76d1\u63a7",p={unversionedId:"monitoring/monitoring",id:"version-v1.0/monitoring/monitoring",title:"",description:"\u4ece v0.3.0 \u8d77\u53ef\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/monitoring/monitoring.md",sourceDirName:"monitoring",slug:"/monitoring/",permalink:"/zh/v1.0/monitoring/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/monitoring/monitoring.md",tags:[],version:"v1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u76d1\u63a7",title:""},sidebar:"tutorialSidebar",previous:{title:"\u5177\u6709\u975e VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u5355\u4e2a NIC",permalink:"/zh/v1.0/networking/best-practice/single-nic-non-vlan-aware-switch"},next:{title:"Rancher \u96c6\u6210",permalink:"/zh/v1.0/rancher/rancher-integration"}},l={},s=[{value:"\u4eea\u8868\u76d8\u6307\u6807",id:"\u4eea\u8868\u76d8\u6307\u6807",level:2},{value:"\u865a\u62df\u673a\u8be6\u7ec6\u6307\u6807",id:"\u865a\u62df\u673a\u8be6\u7ec6\u6307\u6807",level:2},{value:"\u914d\u7f6e Monitoring",id:"\u914d\u7f6e-monitoring",level:2},{value:"\u4f7f\u7528 WebUI",id:"\u4f7f\u7528-webui",level:3},{value:"\u4f7f\u7528 CLI",id:"\u4f7f\u7528-cli",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}],m={toc:s};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u76d1\u63a7"},"\u76d1\u63a7"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u4ece v0.3.0 \u8d77\u53ef\u7528")),(0,i.kt)("h2",{id:"\u4eea\u8868\u76d8\u6307\u6807"},"\u4eea\u8868\u76d8\u6307\u6807"),(0,i.kt)("p",null,"Harvester \u5df2\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," \u5185\u7f6e\u96c6\u6210\u76d1\u63a7\u3002\u76d1\u63a7\u4f1a\u5728 Harvester \u5b89\u88c5\u671f\u95f4\u81ea\u52a8\u542f\u7528\u3002"),(0,i.kt)("p",null,"\u5728 Harvester \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard")," \u9875\u9762\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5206\u522b\u67e5\u770b\u96c6\u7fa4\u6307\u6807\u4ee5\u53ca\u6700\u5e38\u7528\u7684 10 \u4e2a\u865a\u62df\u673a\u6307\u6807\u3002\n\u6b64\u5916\uff0c\u4f60\u53ef\u4ee5\u5355\u51fb ",(0,i.kt)("a",{parentName:"p",href:"http://grafana.com/"},"Grafana")," \u4eea\u8868\u76d8\u94fe\u63a5\uff0c\u4ece\u800c\u5728 Grafana UI \u4e0a\u67e5\u770b\u66f4\u591a\u4eea\u8868\u76d8\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(58958).Z,width:"2554",height:"1305"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u53ea\u6709\u7ba1\u200b\u200b\u7406\u5458\u7528\u6237\u624d\u80fd\u67e5\u770b\u96c6\u7fa4\u4eea\u8868\u76d8\u6307\u6807\u3002")),(0,i.kt)("h2",{id:"\u865a\u62df\u673a\u8be6\u7ec6\u6307\u6807"},"\u865a\u62df\u673a\u8be6\u7ec6\u6307\u6807"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5355\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"VM details page > VM Metrics")," \u6765\u67e5\u770b\u200b\u200b\u5404\u4e2a\u865a\u62df\u673a\u7684\u6307\u6807\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(31431).Z,width:"2264",height:"1132"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5f53\u524d ",(0,i.kt)("inlineCode",{parentName:"p"},"Memory Usage")," \u7684\u8ba1\u7b97\u516c\u5f0f\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"(1 - free/total) x 100%"),"\uff0c\u800c\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"(used/total) x 100%"),"\u3002")),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5728 Linux \u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"free -h")," \u547d\u4ee4\u8f93\u51fa\u5f53\u524d\u5185\u5b58\u7684\u7edf\u8ba1\u4fe1\u606f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ free -h\n                total        used        free      shared  buff/cache   available\nMem:          7.7Gi       166Mi       4.6Gi       1.0Mi       2.9Gi       7.2Gi\nSwap:            0B          0B          0B\n")),(0,i.kt)("p",null,"\u5bf9\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Memory Usage")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"(1 - 4.6/7.7) x 100%"),"\uff0c\u5373\u5927\u81f4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"40%"),"\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e-monitoring"},"\u914d\u7f6e Monitoring"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u4ece v1.0.1 \u8d77\u53ef\u7528")),(0,i.kt)("p",null,"Monitoring \u6709\u51e0\u4e2a\u53ef\u7528\u4e8e\u6536\u96c6\u548c\u805a\u5408\u6240\u6709\u8282\u70b9/Pod/VM \u6307\u6807\u6570\u636e\u7684\u7ec4\u4ef6\u3002Monitoring \u6240\u9700\u7684\u8d44\u6e90\u53d6\u51b3\u4e8e\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u786c\u4ef6\u8d44\u6e90\u3002Harvester \u4f1a\u6839\u636e\u4e00\u822c\u7528\u4f8b\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u4f60\u53ef\u4ee5\u76f8\u5e94\u5730\u66f4\u6539\u5b83\u4eec\u3002"),(0,i.kt)("p",null,"\u76ee\u524d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Resources Settings")," \u53ef\u4ee5\u914d\u7f6e\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prometheus"),(0,i.kt)("li",{parentName:"ul"},"Prometheus Node Exporter\uff08",(0,i.kt)("em",{parentName:"li"},"\u4ece v1.0.2 \u5f00\u59cb\u53ef\u4ee5\u4ece UI \u4e2d\u8fdb\u884c\u914d\u7f6e"),"\uff09")),(0,i.kt)("h3",{id:"\u4f7f\u7528-webui"},"\u4f7f\u7528 WebUI"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," \u9875\u9762\u4e2d\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u548c\u66f4\u6539\u8d44\u6e90\u8bbe\u7f6e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5bfc\u822a\u5230\u8bbe\u7f6e\u9875\u9762\uff0c\u627e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester-monitoring"),"\u3002\n",(0,i.kt)("img",{src:n(29471).Z,width:"5060",height:"948"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Show harvester-monitoring")," \u4ee5\u67e5\u770b\u5f53\u524d\u7684\u503c\uff1a")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"\u22ee > Edit Setting")," \u8bbe\u7f6e\u65b0\u503c\uff1a\n",(0,i.kt)("img",{src:n(5304).Z,width:"4394",height:"2426"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Monitoring")," \u8d44\u6e90\u4f1a\u5728\u51e0\u79d2\u540e\u91cd\u542f\u3002\u8bf7\u6ce8\u610f\uff0c\u91cd\u65b0\u542f\u52a8\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u6765\u91cd\u65b0\u52a0\u8f7d\u4ee5\u524d\u7684\u6570\u636e\u3002"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6700\u5e38\u7528\u7684\u9009\u9879\uff1a\u5185\u5b58\u8bbe\u7f6e")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Requested Memory")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Monitoring")," \u8d44\u6e90\u6240\u9700\u7684\u6700\u5c0f\u5185\u5b58\u3002\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u5355\u4e2a\u7ba1\u7406\u8282\u70b9\u7cfb\u7edf\u5185\u5b58\u7684 5% \u5230 10%\u3002\u5c0f\u4e8e 500Mi \u7684\u503c\u5c06\u88ab\u62d2\u7edd\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Memory Limit")," \u662f\u53ef\u4ee5\u5206\u914d\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Monitoring")," \u8d44\u6e90\u7684\u6700\u5927\u5185\u5b58\u3002\u5bf9\u4e8e\u5355\u4e2a\u7ba1\u7406\u8282\u70b9\uff0c\u63a8\u8350\u8bbe\u7f6e\u4e3a\u7cfb\u7edf\u5185\u5b58\u7684 30% \u5de6\u53f3\u3002\u8fbe\u5230\u8fd9\u4e2a\u9608\u503c\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Monitoring")," \u4f1a\u81ea\u52a8\u91cd\u542f\u3002"))),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u53ef\u7528\u7684\u786c\u4ef6\u8d44\u6e90\u548c\u7cfb\u7edf\u8d1f\u8f7d\u76f8\u5e94\u5730\u66f4\u6539\u4ee5\u4e0a\u8bbe\u7f6e\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6709\u591a\u4e2a\u4e0d\u540c\u786c\u4ef6\u8d44\u6e90\u7684\u7ba1\u7406\u8282\u70b9\uff0c\u8bf7\u6839\u636e\u8f83\u5c0f\u7684\u8282\u70b9\u6765\u8bbe\u7f6e Prometheus \u7684\u503c\u3002")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u67d0\u4e2a\u8282\u70b9\u4e0a\u90e8\u7f72\u4e86\u8d8a\u6765\u8d8a\u591a\u7684\u865a\u62df\u673a\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus-node-exporter")," Pod \u53ef\u80fd\u4f1a\u7531\u4e8e OOM\uff08\u5185\u5b58\u4e0d\u8db3\uff09\u800c\u88ab\u6740\u6b7b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"limits.memory")," \u7684\u503c\u3002")),(0,i.kt)("h3",{id:"\u4f7f\u7528-cli"},"\u4f7f\u7528 CLI"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 CLI \u547d\u4ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"$kubectl edit managedchart rancher-monitoring -n fleet-local")," \u6765\u66f4\u65b0\u8fd9\u4e9b\u503c\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},">= v1.0.1")," \u7684 Harvester \u7248\u672c\uff0c\u76f8\u5173\u8def\u5f84\u548c\u9ed8\u8ba4\u503c\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Prometheus configs\nspec.values.prometheus.prometheusSpec.resources.limits.cpu: 1000m\nspec.values.prometheus.prometheusSpec.resources.limits.memory: 2500Mi\nspec.values.prometheus.prometheusSpec.resources.requests.cpu: 750m\nspec.values.prometheus.prometheusSpec.resources.requests.memory: 1750Mi\n---\n# node exporter configs\nspec.values.prometheus-node-exporter.resources.limits.cpu: 200m\nspec.values.prometheus-node-exporter.resources.limits.memory: 180Mi\nspec.values.prometheus-node-exporter.resources.requests.cpu: 100m\nspec.values.prometheus-node-exporter.resources.requests.memory: 30Mi\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"<= v1.0.0")," \u7684\u7248\u672c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"managedchart rancher-monitoring")," \u4e2d\u6ca1\u6709\u6307\u5b9a\u76f8\u5173\u8def\u5f84\u548c\u9ed8\u8ba4\u503c\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u76f8\u5e94\u6dfb\u52a0\u5b83\u4eec\u3002"),(0,i.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,i.kt)("p",null,"\u5982\u9700 Monitoring \u7684\u652f\u6301\u548c\u6545\u969c\u6392\u9664\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v1.0/troubleshooting/monitoring"},"\u6545\u969c\u6392\u9664\u9875\u9762"),"\u3002"))}c.isMDXComponent=!0},58958:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/monitoring-dashboard-8f49b2e77f152646e4f48d9d84e903a3.png"},5304:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/monitoring-setting-edit-config-fd28596de256cedcc1b5bccc15262efc.png"},29471:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/monitoring-setting-d44e542f715e722df9ae74c233f48c0a.png"},31431:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vm-metrics-46cc5179899848d80187d69f7185e29e.png"}}]);