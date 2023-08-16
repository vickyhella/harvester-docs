"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=s(r),u=o,d=v["".concat(l,".").concat(u)]||v[u]||m[u]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},76201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:8,sidebar_label:"\u8d44\u6e90\u8d85\u91cf",title:"\u8d44\u6e90\u8d85\u91cf",keywords:["Harvester","\u8fc7\u5ea6\u4f7f\u7528","\u8fc7\u5ea6\u914d\u7f6e","\u81a8\u80c0"],Description:"\u8fc7\u5ea6\u4f7f\u7528 VM \u8d44\u6e90\u3002"},a=void 0,c={unversionedId:"vm/resource-overcommit",id:"vm/resource-overcommit",title:"\u8d44\u6e90\u8d85\u91cf",description:"Harvester \u652f\u6301\u5168\u5c40\u914d\u7f6e CPU\u3001\u5185\u5b58\u548c\u5b58\u50a8\u8d44\u6e90\u7684\u8fc7\u8f7d\u767e\u5206\u6bd4\u3002overcommit-config \u8ba9\u4f60\u5728\u7269\u7406\u8d44\u6e90\u88ab\u5145\u5206\u5229\u7528\u7684\u60c5\u51b5\u4e0b\u8c03\u5ea6\u989d\u5916\u7684\u865a\u62df\u673a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/resource-overcommit.md",sourceDirName:"vm",slug:"/vm/resource-overcommit",permalink:"/harvester-docs/zh/dev/vm/resource-overcommit",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/resource-overcommit.md",tags:[],version:"current",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"\u8d44\u6e90\u8d85\u91cf",title:"\u8d44\u6e90\u8d85\u91cf",keywords:["Harvester","\u8fc7\u5ea6\u4f7f\u7528","\u8fc7\u5ea6\u914d\u7f6e","\u81a8\u80c0"],Description:"\u8fc7\u5ea6\u4f7f\u7528 VM \u8d44\u6e90\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u70ed\u63d2\u62d4\u5377",permalink:"/harvester-docs/zh/dev/vm/hotplug-volume"},next:{title:"\u514b\u9686\u865a\u62df\u673a",permalink:"/harvester-docs/zh/dev/vm/clone-vm"}},l={},s=[{value:"\u914d\u7f6e\u5168\u5c40 <code>overcommit-config</code>",id:"\u914d\u7f6e\u5168\u5c40-overcommit-config",level:2},{value:"\u4e3a\u5355\u4e2a\u865a\u62df\u673a\u914d\u7f6e\u8d85\u91cf\u4f7f\u7528",id:"\u4e3a\u5355\u4e2a\u865a\u62df\u673a\u914d\u7f6e\u8d85\u91cf\u4f7f\u7528",level:2},{value:"\u9884\u7559\u66f4\u591a\u7cfb\u7edf\u5185\u5b58",id:"\u9884\u7559\u66f4\u591a\u7cfb\u7edf\u5185\u5b58",level:2},{value:"\u4e3a\u4ec0\u4e48\u865a\u62df\u673a\u8c03\u5ea6\u4e0d\u5747\u5300\uff1f",id:"\u4e3a\u4ec0\u4e48\u865a\u62df\u673a\u8c03\u5ea6\u4e0d\u5747\u5300",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Harvester \u652f\u6301\u5168\u5c40\u914d\u7f6e CPU\u3001\u5185\u5b58\u548c\u5b58\u50a8\u8d44\u6e90\u7684\u8fc7\u8f7d\u767e\u5206\u6bd4\u3002",(0,o.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/advanced/settings#overcommit-config"},(0,o.kt)("inlineCode",{parentName:"a"},"overcommit-config"))," \u8ba9\u4f60\u5728\u7269\u7406\u8d44\u6e90\u88ab\u5145\u5206\u5229\u7528\u7684\u60c5\u51b5\u4e0b\u8c03\u5ea6\u989d\u5916\u7684\u865a\u62df\u673a\u3002"),(0,o.kt)("p",null,"Harvester \u652f\u6301\u5728\u8ba1\u7b97\u8282\u70b9\u4e0a\u8d85\u91cf\u4f7f\u7528 CPU \u548c RAM\u3002\u8fd9\u6837\uff0c\u4f60\u80fd\u901a\u8fc7\u964d\u4f4e\u5b9e\u4f8b\u6027\u80fd\u6765\u589e\u52a0\u5728\u4e91\u4e0a\u8fd0\u884c\u7684\u5b9e\u4f8b\u6570\u91cf\u3002Compute \u670d\u52a1\u9ed8\u8ba4\u4f7f\u7528\u4ee5\u4e0b\u6bd4\u7387\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU \u5206\u914d\u7387\uff1a1600%"),(0,o.kt)("li",{parentName:"ul"},"RAM \u5206\u914d\u7387\uff1a150%"),(0,o.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5206\u914d\u7387\uff1a200%")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u6682\u65f6\u4e0d\u652f\u6301\u7ecf\u5178\u7684\u5185\u5b58\u8d85\u91cf\u4f7f\u7528\u6216\u5185\u5b58\u81a8\u80c0\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u865a\u62df\u673a\u5b9e\u4f8b\u4f7f\u7528\u7684\u5185\u5b58\u4e00\u65e6\u5206\u914d\u5c31\u65e0\u6cd5\u8fd4\u56de\u3002")),(0,o.kt)("h2",{id:"\u914d\u7f6e\u5168\u5c40-overcommit-config"},"\u914d\u7f6e\u5168\u5c40 ",(0,o.kt)("a",{parentName:"h2",href:"/harvester-docs/zh/dev/advanced/settings#overcommit-config"},(0,o.kt)("inlineCode",{parentName:"a"},"overcommit-config"))),(0,o.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u4fee\u6539\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"p"},"overcommit-config"),"\uff0c\u4fee\u6539\u540e\u7684\u914d\u7f6e\u4f1a\u5e94\u7528\u5230\u6240\u6709\u65b0\u521b\u5efa\u7684\u865a\u62df\u673a\u4e0a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,o.kt)("strong",{parentName:"li"},"Advanced > Settings")," \u9875\u9762\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u627e\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"overcommit-config")," \u8bbe\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u6240\u9700\u7684 CPU\u3001\u5185\u5b58\u548c\u5b58\u50a8\u6bd4\u7387\u3002")),(0,o.kt)("h2",{id:"\u4e3a\u5355\u4e2a\u865a\u62df\u673a\u914d\u7f6e\u8d85\u91cf\u4f7f\u7528"},"\u4e3a\u5355\u4e2a\u865a\u62df\u673a\u914d\u7f6e\u8d85\u91cf\u4f7f\u7528"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4e3a\u5355\u4e2a\u865a\u62df\u673a\u914d\u7f6e\u8d85\u91cf\u4f7f\u7528\uff0c\u8bf7\u5355\u72ec\u8c03\u6574\u76ee\u6807 VirtualMachine \u8d44\u6e90\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"}," spec.template.spec.domain.resources.<memory|cpu>")," \u503c\u3002\u8bf7\u6ce8\u610f\uff0c\u901a\u8fc7\u4fee\u6539\u8fd9\u4e9b\u503c\uff0c\u4f60\u5c06\u63a5\u7ba1 Harvester \u5bf9\u865a\u62df\u673a\u8d44\u6e90\u7ba1\u7406\u7684\u63a7\u5236\u3002"),(0,o.kt)("h2",{id:"\u9884\u7559\u66f4\u591a\u7cfb\u7edf\u5185\u5b58"},"\u9884\u7559\u66f4\u591a\u7cfb\u7edf\u5185\u5b58"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHarvester \u4ece\u5206\u914d\u7ed9\u865a\u62df\u673a\u7684\u5185\u5b58\u4e2d\u9884\u7559\u4e00\u5b9a\u6570\u91cf\u7684\u7cfb\u7edf\u5185\u5b58\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e0d\u4f1a\u5bfc\u81f4\u4efb\u4f55\u95ee\u9898\u3002\u4f46\u662f\uff0c\u67d0\u4e9b\u64cd\u4f5c\u7cfb\u7edf\uff08\u4f8b\u5982 Windows 2022\uff09\u4f1a\u9700\u8981\u6bd4\u9884\u7559\u91cf\u66f4\u591a\u7684\u5185\u5b58\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cHarvester \u5728 VirtualMachine \u81ea\u5b9a\u4e49\u8d44\u6e90\u4e0a\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory")," \u6ce8\u91ca\uff0c\u7528\u4e8e\u6307\u5b9a\u8981\u9884\u7559\u7684\u5185\u5b58\u91cf\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u51b3\u5b9a\u4e3a VM \u7684\u7cfb\u7edf\u9884\u7559 200 MiB\uff0c\u8bf7\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory: 200Mi"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"}," apiVersion: kubevirt.io/v1\n kind: VirtualMachine\n metadata:\n   annotations:\n+    harvesterhci.io/reservedMemory: 200Mi\n     kubevirt.io/latest-observed-api-version: v1\n     kubevirt.io/storage-observed-api-version: v1alpha3\n     network.harvesterhci.io/ips: '[]'\n   ...\n   ...\n")),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u865a\u62df\u673a\u8c03\u5ea6\u4e0d\u5747\u5300"},"\u4e3a\u4ec0\u4e48\u865a\u62df\u673a\u8c03\u5ea6\u4e0d\u5747\u5300\uff1f"),(0,o.kt)("p",null,"\u865a\u62df\u673a\u7684\u8c03\u5ea6\u4f9d\u8d56\u4e8e kube-scheduler \u7684\u5e95\u5c42\u884c\u4e3a\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u4e13\u95e8\u7684\u6587\u7ae0\u6765\u89e3\u91ca\u7ec6\u8282\u3002\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://harvesterhci.io/kb/vm-scheduling/"},"Harvester \u77e5\u8bc6\u5e93\uff1aVM \u8c03\u5ea6"),"\u3002"))}m.isMDXComponent=!0}}]);