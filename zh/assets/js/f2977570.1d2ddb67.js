"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5342],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,c=d["".concat(p,".").concat(u)]||d[u]||k[u]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1,sidebar_label:"\u521b\u5efa\u865a\u62df\u673a",title:"\u521b\u5efa\u865a\u62df\u673a",keywords:["Harvester","harvester","Rancher","rancher","\u865a\u62df\u673a","VM","\u521b\u5efa\u865a\u62df\u673a"],Description:'\u4ece"\u865a\u62df\u673a"\u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a\u865a\u62df\u673a\u3002'},i=void 0,o={unversionedId:"vm/create-vm",id:"vm/create-vm",title:"\u521b\u5efa\u865a\u62df\u673a",description:"\u5982\u4f55\u521b\u5efa\u865a\u62df\u673a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/create-vm.md",sourceDirName:"vm",slug:"/vm/create-vm",permalink:"/zh/dev/vm/create-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/create-vm.md",tags:[],version:"current",lastUpdatedAt:1688120255,formattedLastUpdatedAt:"2023\u5e746\u670830\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u521b\u5efa\u865a\u62df\u673a",title:"\u521b\u5efa\u865a\u62df\u673a",keywords:["Harvester","harvester","Rancher","rancher","\u865a\u62df\u673a","VM","\u521b\u5efa\u865a\u62df\u673a"],Description:'\u4ece"\u865a\u62df\u673a"\u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a\u865a\u62df\u673a\u3002'},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u673a\u7ba1\u7406",permalink:"/zh/dev/host/"},next:{title:"\u521b\u5efa Windows \u865a\u62df\u673a",permalink:"/zh/dev/vm/create-windows-vm"}},p={},m=[{value:"\u5982\u4f55\u521b\u5efa\u865a\u62df\u673a",id:"\u5982\u4f55\u521b\u5efa\u865a\u62df\u673a",level:2},{value:"\u5377",id:"\u5377",level:2},{value:"\u6dfb\u52a0\u5bb9\u5668\u78c1\u76d8",id:"\u6dfb\u52a0\u5bb9\u5668\u78c1\u76d8",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2},{value:"\u7ba1\u7406\u7f51\u7edc",id:"\u7ba1\u7406\u7f51\u7edc",level:3},{value:"\u5176\u4ed6\u7f51\u7edc",id:"\u5176\u4ed6\u7f51\u7edc",level:3},{value:"\u9ad8\u7ea7\u9009\u9879",id:"\u9ad8\u7ea7\u9009\u9879",level:2},{value:"\u8fd0\u884c\u7b56\u7565",id:"\u8fd0\u884c\u7b56\u7565",level:3},{value:"\u4e91\u914d\u7f6e",id:"\u4e91\u914d\u7f6e",level:3},{value:"Cloud-init",id:"cloud-init",level:4},{value:"\u5b89\u88c5 QEMU GuestAgent",id:"\u5b89\u88c5-qemu-guestagent",level:4},{value:"TPM \u8bbe\u5907",id:"tpm-\u8bbe\u5907",level:3},{value:"ISO \u5b89\u88c5\u7684\u4e00\u6b21\u6027\u5f15\u5bfc",id:"iso-\u5b89\u88c5\u7684\u4e00\u6b21\u6027\u5f15\u5bfc",level:2}],s={toc:m};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u865a\u62df\u673a"},"\u5982\u4f55\u521b\u5efa\u865a\u62df\u673a"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece ",(0,r.kt)("strong",{parentName:"p"},"Virtual Machines")," \u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a\u865a\u62df\u673a\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/vm/create-windows-vm"},"\u6b64\u9875\u9762"),"\u521b\u5efa Windows \u865a\u62df\u673a\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u521b\u5efa\u5355\u4e2a\u5b9e\u4f8b\u6216\u591a\u4e2a\u5b9e\u4f8b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9 VM \u7684\u547d\u540d\u7a7a\u95f4\uff0c\u53ea\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"harvester-public")," \u547d\u540d\u7a7a\u95f4\u5bf9\u6240\u6709\u7528\u6237\u53ef\u89c1\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u865a\u62df\u673a\u540d\u79f0\uff08\u5fc5\u586b\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09VM \u6a21\u677f\u662f\u53ef\u9009\u7684\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"li"},"iso-image"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"raw-image")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"windows-iso-image")," \u6a21\u677f\u6765\u5feb\u901f\u521b\u5efa\u865a\u62df\u673a\u5b9e\u4f8b\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u865a\u62df\u673a\u7684 CPU \u548c\u5185\u5b58\uff08\u5982\u679c\u8981\u8d85\u989d\u914d\u7f6e\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/advanced/settings#overcommit-config"},"overcommit-config"),"\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9 SSH \u5bc6\u94a5\u6216\u4e0a\u4f20\u65b0\u5bc6\u94a5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("strong",{parentName:"li"},"Volumes")," \u9009\u9879\u5361\u4e0a\u9009\u62e9\u81ea\u5b9a\u4e49\u865a\u62df\u673a\u955c\u50cf\u5377\u3002\u9ed8\u8ba4\u78c1\u76d8\u5c06\u662f\u6839\u78c1\u76d8\u3002\u4f60\u53ef\u4ee5\u5411\u865a\u62df\u673a\u6dfb\u52a0\u66f4\u591a\u78c1\u76d8\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u9700\u8981\u914d\u7f6e\u7f51\u7edc\uff0c\u524d\u5f80 ",(0,r.kt)("strong",{parentName:"li"},"Networks")," \u9009\u9879\u5361\u3002",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Management Network")," \u662f\u9ed8\u8ba4\u6dfb\u52a0\u7684\u3002\u5982\u679c\u914d\u7f6e\u4e86 VLAN \u7f51\u7edc\uff0c\u5219\u53ef\u4ee5\u53bb\u6389\u5b83\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 VLAN \u7f51\u7edc\u5411 VM \u6dfb\u52a0\u5176\u4ed6\u7f51\u7edc\u3002\u4f60\u53ef\u4ee5\u5148\u5728 ",(0,r.kt)("strong",{parentName:"li"},"Advanced > Networks")," \u4e0a\u914d\u7f6e VLAN \u7f51\u7edc\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u7b56\u7565\u3001\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u578b\u548c cloud-init \u6570\u636e\u7b49\u9ad8\u7ea7\u9009\u9879\u662f\u53ef\u9009\u7684\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("strong",{parentName:"li"},"Advanced Options")," \u9009\u9879\u5361\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-vm",src:a(17003).Z,width:"5120",height:"1740"})),(0,r.kt)("h2",{id:"\u5377"},"\u5377"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Volumes")," \u9009\u9879\u5361\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u5377\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7b2c\u4e00\u4e2a\u78c1\u76d8\u662f\u6839\u78c1\u76d8\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u62d6\u653e\u5377\u6216\u4f7f\u7528\u7bad\u5934\u6309\u94ae\u6765\u66f4\u6539\u5f15\u5bfc\u987a\u5e8f\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7c7b\u578b\u8bbf\u95ee\u78c1\u76d8\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disk"),(0,r.kt)("td",{parentName:"tr",align:"left"},"disk \u78c1\u76d8\u4f1a\u5c06\u5377\u4f5c\u4e3a\u666e\u901a\u78c1\u76d8\u516c\u5f00\u7ed9 VM\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cd-rom"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cd-rom \u78c1\u76d8\u4f1a\u5c06\u5377\u4f5c\u4e3a CD-ROM \u9a71\u52a8\u5668\u516c\u5f00\u7ed9 VM\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u662f\u53ea\u8bfb\u7684\u3002")))),(0,r.kt)("p",null,"\u6dfb\u52a0\u65b0\u7684\u7a7a\u5377\u65f6\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u5377\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/advanced/storageclass"},"StorageClass"),"\u3002\u5bf9\u4e8e\u5176\u4ed6\u5377\uff08\u4f8b\u5982 VM \u955c\u50cf\uff09\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa\u955c\u50cf\u65f6\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-vm",src:a(26400).Z,width:"2560",height:"1297"})),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u5bb9\u5668\u78c1\u76d8"},"\u6dfb\u52a0\u5bb9\u5668\u78c1\u76d8"),(0,r.kt)("p",null,"\u5bb9\u5668\u78c1\u76d8\u662f\u4e00\u79cd\u4e34\u65f6\u5b58\u50a8\u5377\uff0c\u53ef\u4ee5\u5206\u914d\u7ed9\u4efb\u610f\u6570\u91cf\u7684\u865a\u62df\u673a\uff0c\u5e76\u652f\u6301\u5728\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u4e2d\u5b58\u50a8\u548c\u5206\u53d1\u865a\u62df\u673a\u78c1\u76d8\u3002\u5bb9\u5668\u78c1\u76d8\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u9700\u8981\u590d\u5236\u5927\u91cf\u865a\u62df\u673a\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6216\u6ce8\u5165\u4e0d\u9700\u8981\u6301\u4e45\u6570\u636e\u7684\u673a\u5668\u9a71\u52a8\u7a0b\u5e8f\u7684\u7528\u6237\u6765\u8bf4\uff0c\u662f\u4e00\u4e2a\u7406\u60f3\u7684\u5de5\u5177\u3002\u4e34\u65f6\u5377\u4e13\u4e3a\u9700\u8981\u66f4\u591a\u5b58\u50a8\u7a7a\u95f4\u4f46\u4e0d\u5173\u5fc3\u6570\u636e\u662f\u5426\u5728\u865a\u62df\u673a\u91cd\u542f\u540e\u6301\u4e45\u5b58\u50a8\uff0c\u6216\u4ec5\u9700\u8981\u6587\u4ef6\u4e2d\u5b58\u5728\u4e00\u4e9b\u53ea\u8bfb\u8f93\u5165\u6570\u636e\uff08\u4f8b\u5982\u914d\u7f6e\u6570\u636e\u6216\u5bc6\u94a5\uff09\u7684\u865a\u62df\u673a\u800c\u8bbe\u8ba1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u9700\u8981\u5728\u865a\u62df\u673a\u91cd\u542f\u65f6\u4f7f\u7528\u6301\u4e45\u6839\u78c1\u76d8\u7684\u5de5\u4f5c\u8d1f\u8f7d\u6765\u8bf4\uff0c\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u89e3\u51b3\u65b9\u6848\u3002")),(0,r.kt)("p",null,"\u5bb9\u5668\u78c1\u76d8\u662f\u5728\u901a\u8fc7 Docker \u955c\u50cf\u521b\u5efa\u865a\u62df\u673a\u65f6\u6dfb\u52a0\u7684\u3002\u521b\u5efa\u865a\u62df\u673a\u65f6\uff0c\u8bf7\u6309\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,r.kt)("strong",{parentName:"li"},"Volumes")," \u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"Add Container"),"\u3002\n",(0,r.kt)("img",{alt:"add-container-volume",src:a(30960).Z,width:"1066",height:"690"})),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5bb9\u5668\u78c1\u76d8\u7684 ",(0,r.kt)("strong",{parentName:"li"},"Name"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u78c1\u76d8 ",(0,r.kt)("strong",{parentName:"li"},"Type"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,r.kt)("strong",{parentName:"li"},"Docker Image"),"\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u4e3a qcow2 \u6216 raw \u7684\u78c1\u76d8\u955c\u50cf\u5fc5\u987b\u653e\u7f6e\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"/disk")," \u76ee\u5f55\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Raw \u548c qcow2 \u683c\u5f0f\uff0c\u4f46\u5efa\u8bae\u4f7f\u7528 qcow2 \u6765\u51cf\u5c0f\u5bb9\u5668\u955c\u50cf\u7684\u5927\u5c0f\u3002\u5982\u679c\u4f60\u4f7f\u7528\u4e86\u4e0d\u53d7\u652f\u6301\u7684\u955c\u50cf\u683c\u5f0f\uff0c\u865a\u62df\u673a\u5c06\u5361\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Running")," \u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u78c1\u76d8\u8fd8\u652f\u6301\u5c06\u78c1\u76d8\u955c\u50cf\u5b58\u50a8\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"/disk")," \u76ee\u5f55\u4e2d\u3002\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"li",href:"https://kubevirt.io/user-guide/virtual_machines/disks_and_volumes/#containerdisk-workflow-example"},"\u6b64\u5904"),"\u627e\u5230\u521b\u5efa\u6b64\u7c7b\u5bb9\u5668\u955c\u50cf\u7684\u793a\u4f8b\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"Bus")," \u7c7b\u578b\u3002",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{alt:"add-container-volume",src:a(92022).Z,width:"775",height:"340"}))),(0,r.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Networks")," \u9009\u9879\u5361\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"management network"),"  \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"VLAN network")," \u6dfb\u52a0\u5230 VM \u5b9e\u4f8b\u3002\u5982\u679c\u4f60\u914d\u7f6e\u4e86 VLAN \u7f51\u7edc\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"management network")," \u662f\u53ef\u9009\u7684\u3002"),(0,r.kt)("p",null,"\u7f51\u7edc\u63a5\u53e3\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Type")," \u5b57\u6bb5\u914d\u7f6e\u7684\u3002\u5b83\u4eec\u63cf\u8ff0\u4e86 Guest \u64cd\u4f5c\u7cfb\u7edf\u4e2d\u865a\u62df\u63a5\u53e3\u7684\u5c5e\u6027\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bridge"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528 Linux \u7f51\u6865\u8fde\u63a5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"masquerade"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528 iptables \u89c4\u5219\u8fde\u63a5\u5230 NAT \u6d41\u91cf")))),(0,r.kt)("h3",{id:"\u7ba1\u7406\u7f51\u7edc"},"\u7ba1\u7406\u7f51\u7edc"),(0,r.kt)("p",null,"\u7ba1\u7406\u7f51\u7edc\u662f\u6bcf\u4e2a\u96c6\u7fa4\u7684\u9ed8\u8ba4\u7f51\u7edc\uff0c\u5b83\u53ef\u4ee5\u4e3a\u865a\u62df\u673a\u7684 eth0 \u7f51\u5361\u7f51\u7edc\u63d0\u4f9b\u4e00\u4e2a\u96c6\u7fa4\u5185\u53ef\u4ee5\u8bbf\u95ee\u7684\u7f51\u7edc\u89e3\u51b3\u65b9\u6848\uff08\u5982\u679c\u865a\u62df\u673a\u91cd\u542f\u9ed8\u8ba4\u5206\u914d\u7684 IP \u5c06\u4f1a\u53d1\u751f\u53d8\u5316\uff09\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u96c6\u7fa4\u8282\u70b9\u5185\u7684\u7ba1\u7406\u7f51\u7edc\u8bbf\u95ee\u865a\u62df\u673a\u3002"),(0,r.kt)("h3",{id:"\u5176\u4ed6\u7f51\u7edc"},"\u5176\u4ed6\u7f51\u7edc"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 Harvester \u7684\u5185\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/zh/dev/networking/harvester-network"},"VLAN \u7f51\u7edc")," \u6765\u8f85\u52a9\u7f51\u7edc\u8fde\u63a5\u865a\u62df\u673a\u3002"),(0,r.kt)("p",null,"\u5728\u7f51\u6865 VLAN \u4e2d\uff0c\u865a\u62df\u673a\u901a\u8fc7 Linux ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge")," \u8fde\u63a5\u5230\u4e3b\u673a\u7f51\u7edc\u3002\u7f51\u7edc IPv4 \u5730\u5740\u901a\u8fc7 DHCPv4 \u5206\u914d\u7ed9\u865a\u62df\u673a\u3002\u865a\u62df\u673a\u9700\u8981\u914d\u7f6e\u4e3a\u4f7f\u7528 DHCP \u6765\u83b7\u53d6 IPv4 \u5730\u5740\u3002"),(0,r.kt)("h2",{id:"\u9ad8\u7ea7\u9009\u9879"},"\u9ad8\u7ea7\u9009\u9879"),(0,r.kt)("h3",{id:"\u8fd0\u884c\u7b56\u7565"},"\u8fd0\u884c\u7b56\u7565"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.0.2 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u5728 v1.0.2 \u4e4b\u524d\uff0cHarvester \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),"\uff08\u5e03\u5c14\u503c\uff09\u5b57\u6bb5\u6765\u786e\u5b9a VM \u5b9e\u4f8b\u5e94\u5426\u8fd0\u884c\u3002\u4f46\u662f\uff0c\u6709\u65f6\u5019\u5e03\u5c14\u503c\u4e0d\u8db3\u4ee5\u6ee1\u8db3\u7528\u6237\u7684\u9700\u6c42\u3002\u4f8b\u5982\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u5e0c\u671b\u4ece\u865a\u62df\u673a\u5185\u90e8\u5173\u95ed\u5b9e\u4f8b\u3002\u5982\u679c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," \u5b57\u6bb5\uff0cVM \u5c06\u7acb\u5373\u91cd\u542f\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u66f4\u591a\u7528\u6237\u7684\u9700\u6c42\uff0c\u6211\u4eec\u5f15\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"RunStrategy")," \u5b57\u6bb5\u3002\u8be5\u5b57\u6bb5\u7684\u6761\u4ef6\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," \u6709\u4e9b\u91cd\u53e0\uff0c\u56e0\u6b64\u4e8c\u8005\u662f\u4e92\u65a5\u7684\u3002\u76ee\u524d\u6211\u4eec\u5b9a\u4e49\u4e86\u56db\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"RunStrategy"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Always\uff1aVM \u5b9e\u4f8b\u5c06\u59cb\u7ec8\u5b58\u5728\u3002\u5982\u679c VM \u5b9e\u4f8b\u5d29\u6e83\uff0c\u5219\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u5b9e\u4f8b\u3002\u8fd9\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Running: true")," \u76f8\u540c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RerunOnFailure\uff08\u9ed8\u8ba4\uff09\uff1a\u5982\u679c\u524d\u4e00\u4e2a\u5b9e\u4f8b\u5728\u9519\u8bef\u72b6\u6001\u4e0b\u5931\u8d25\uff0c\u5c06\u91cd\u65b0\u751f\u6210\u4e00\u4e2a VM \u5b9e\u4f8b\u3002\u5982\u679c Guest \u6210\u529f\u505c\u6b62\uff08\u4f8b\u5982\u4ece Guest \u5185\u90e8\u5173\u95ed\uff09\uff0c\u5219\u4e0d\u4f1a\u91cd\u65b0\u521b\u5efa\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Manual\uff1aVM \u5b9e\u4f8b\u7684\u5b58\u5728\u4e0e\u5426\u4ec5\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"start/stop/restart")," VirtualMachine \u64cd\u4f5c\u63a7\u5236\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stop\uff1a\u5c06\u6ca1\u6709 VM \u5b9e\u4f8b\u3002\u5982\u679c Guest \u5df2\u7ecf\u5728\u8fd0\u884c\uff0c\u5b83\u5c06\u88ab\u505c\u6b62\u3002\u8fd9\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Running: false")," \u76f8\u540c\u3002"))),(0,r.kt)("h3",{id:"\u4e91\u914d\u7f6e"},"\u4e91\u914d\u7f6e"),(0,r.kt)("p",null,"Harvester \u652f\u6301\u5c06\u542f\u52a8\u811a\u672c\u5206\u914d\u7ed9\u865a\u62df\u673a\u5b9e\u4f8b\uff0c\u8be5\u811a\u672c\u5728 VM \u521d\u59cb\u5316\u65f6\u81ea\u52a8\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u811a\u672c\u901a\u5e38\u7528\u4e8e\u5c06\u7528\u6237\u548c SSH \u5bc6\u94a5\u81ea\u52a8\u6ce8\u5165\u865a\u62df\u673a\uff0c\u4ece\u800c\u8fdc\u7a0b\u8bbf\u95ee\u4e3b\u673a\u3002\u4f8b\u5982\uff0c\u542f\u52a8\u811a\u672c\u53ef\u7528\u4e8e\u5c06\u51ed\u8bc1\u6ce8\u5165 VM\uff0c\u4ece\u800c\u5141\u8bb8\u5728\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u8fd0\u884c\u7684 Ansible Job \u8bbf\u95ee\u548c\u914d\u7f6e VM\u3002"),(0,r.kt)("h4",{id:"cloud-init"},"Cloud-init"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"Cloud-init")," \u662f\u4e00\u4e2a\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u5de5\u5177\uff0c\u5b83\u662f\u8de8\u5e73\u53f0\u4e91\u5b9e\u4f8b\u521d\u59cb\u5316\u7684\u884c\u4e1a\u6807\u51c6\u65b9\u6cd5\u3002\u6240\u6709\u4e3b\u6d41\u4e91\u955c\u50cf\u63d0\u4f9b\u5546\uff08\u5982 SUSE\u3001Redhat\u3001Ubuntu \u7b49\uff09\u90fd\u652f\u6301 cloud-init\uff0c\u56e0\u6b64 cloud-init \u662f\u5411 VM \u63d0\u4f9b\u542f\u52a8\u811a\u672c\u7684\u5e38\u7528\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"Harvester \u652f\u6301\u901a\u8fc7\u4e34\u65f6\u78c1\u76d8\u5c06\u81ea\u5b9a\u4e49 cloud-init \u542f\u52a8\u811a\u672c\u6ce8\u5165\u5230 VM \u5b9e\u4f8b\u4e2d\u3002\u5b89\u88c5\u4e86 cloud-init \u5305\u7684 VM \u5c06\u68c0\u6d4b\u4e34\u65f6\u78c1\u76d8\uff0c\u5e76\u5728\u542f\u52a8\u65f6\u6267\u884c\u81ea\u5b9a\u4e49\u7528\u6237\u6570\u636e\u548c\u7f51\u7edc\u6570\u636e\u811a\u672c\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u7528\u6237\u7684\u5bc6\u7801\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"#cloud-config\npassword: password\nchpasswd: { expire: False }\nssh_pwauth: True\n")),(0,r.kt)("p",null,"\u4f7f\u7528 DHCP \u7684\u7f51\u7edc\u6570\u636e\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"network:\n  version: 1\n  config:\n    - type: physical\n      name: eth0\n      subnets:\n        - type: dhcp\n    - type: physical\n      name: eth1\n      subnets:\n        - type: dhcp\n")),(0,r.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced > Cloud Config Templates")," \u529f\u80fd\u4e3a VM \u521b\u5efa\u9884\u5b9a\u4e49\u7684 cloud-init \u914d\u7f6e\u6a21\u677f\u3002"),(0,r.kt)("h4",{id:"\u5b89\u88c5-qemu-guestagent"},"\u5b89\u88c5 QEMU GuestAgent"),(0,r.kt)("p",null,"QEMU GuestAgent \u662f\u5728\u865a\u62df\u673a\u5b9e\u4f8b\u4e0a\u8fd0\u884c\u7684 Daemon \u8fdb\u7a0b\uff0c\u5b83\u5c06\u6709\u5173 VM\u3001\u7528\u6237\u3001\u6587\u4ef6\u7cfb\u7edf\u548c\u8f85\u52a9\u7f51\u7edc\u7684\u4fe1\u606f\u4f20\u9012\u7ed9\u4e3b\u673a\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Install guest agent")," \u590d\u9009\u6846\u5728\u521b\u5efa\u65b0 VM \u65f6\u9ed8\u8ba4\u542f\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37750).Z,width:"2554",height:"1267"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u662f openSUSE \u4e14\u7248\u672c\u4f4e\u4e8e 15.3\uff0c\u8bf7\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent.service")," \u66ff\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"qemu-ga.service"),"\u3002")),(0,r.kt)("h3",{id:"tpm-\u8bbe\u5907"},"TPM \u8bbe\u5907"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Trusted_Platform_Module"},"\u53ef\u4fe1\u5e73\u53f0\u6a21\u5757 (TPM)")," \u662f\u4e00\u79cd\u4f7f\u7528\u52a0\u5bc6\u5bc6\u94a5\u6765\u4fdd\u62a4\u786c\u4ef6\u7684\u52a0\u5bc6\u5904\u7406\u5668\u3002"),(0,r.kt)("p",null,"\u6839\u636e ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/whats-new/windows-11-requirements"},"Windows 11 \u8981\u6c42"),"\uff0cTPM 2.0 \u8bbe\u5907\u662f Windows 11 \u7684\u786c\u6027\u8981\u6c42\u3002"),(0,r.kt)("p",null,"\u5728 Harvester UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u9009\u4e2d ",(0,r.kt)("strong",{parentName:"p"},"Advanced Options")," \u9009\u9879\u5361\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable TPM")," \u6765\u8981\u5c06\u4eff\u771f TPM 2.0 \u8bbe\u5907\u6dfb\u52a0\u5230 VM \u4e2d\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u4ec5\u652f\u6301\u975e\u6301\u4e45\u6027 vTPM\uff0c\u800c\u4e14\u6bcf\u6b21\u5173\u95ed\u865a\u62df\u673a\u540e\u5176\u72b6\u6001\u90fd\u4f1a\u88ab\u6e05\u9664\u3002\u56e0\u6b64\uff0c\u8bf7\u4e0d\u8981\u542f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview"},"Bitlocker"),"\u3002")),(0,r.kt)("h2",{id:"iso-\u5b89\u88c5\u7684\u4e00\u6b21\u6027\u5f15\u5bfc"},"ISO \u5b89\u88c5\u7684\u4e00\u6b21\u6027\u5f15\u5bfc"),(0,r.kt)("p",null,"\u521b\u5efa\u4ece cd-rom \u5f15\u5bfc\u7684\u865a\u62df\u673a\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"bootOrder")," \u9009\u9879\uff0c\u4f7f\u64cd\u4f5c\u7cfb\u7edf\u53ef\u4ee5\u5728\u5b89\u88c5\u955c\u50cf\u65f6\u901a\u8fc7 cd-rom \u5f15\u5bfc\uff0c\u5e76\u5728\u5b89\u88c5\u5b8c\u6210\u540e\u901a\u8fc7\u78c1\u76d8\u5f15\u5bfc\uff0c\u800c\u4e14\u4e0d\u9700\u8981\u5378\u8f7d\u5149\u76d8\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u63cf\u8ff0\u4e86\u5982\u4f55\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://get.opensuse.org/leap/15.4/"},"openSUSE Leap 15.4")," ISO \u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4fa7\u8fb9\u680f\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"li"},"Images")," \u5e76\u4e0b\u8f7d openSUSE Leap 15.4 ISO \u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4fa7\u8fb9\u680f\u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"li"},"Virtual Machines"),"\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a VM\u3002\u5728\u6b64\u6b65\u9aa4\u4e2d\uff0c\u4f60\u9700\u8981\u586b\u5199\u4ee5\u4e0b VM \u57fa\u672c\u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Volumes")," \u9009\u9879\u5361\uff0c\u5728 ",(0,r.kt)("strong",{parentName:"li"},"Image")," \u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u5728\u6b65\u9aa4 1 \u4e2d\u4e0b\u8f7d\u7684\u955c\u50cf\u5e76\u786e\u4fdd ",(0,r.kt)("strong",{parentName:"li"},"Type")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"cd-rom"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Add Volume")," \u5e76\u9009\u62e9\u73b0\u6709\u7684 ",(0,r.kt)("strong",{parentName:"li"},"StorageClass"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06 ",(0,r.kt)("strong",{parentName:"li"},"Volume")," \u62d6\u5230 ",(0,r.kt)("strong",{parentName:"li"},"Image Volume")," \u7684\u9876\u90e8\uff0c\u5982\u4e0b\u6240\u793a\u3002\u8fd9\u6837\uff0c",(0,r.kt)("strong",{parentName:"li"},"Volume"),"  \u7684",(0,r.kt)("strong",{parentName:"li"},"bootOrder")," \u4f1a\u53d8\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"one-time-boot-create-vm-bootorder",src:a(48305).Z,width:"4136",height:"1570"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Create"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00\u521a\u521a\u521b\u5efa\u7684 VM web-vnc \u5e76\u6309\u7167\u5b89\u88c5\u7a0b\u5e8f\u63d0\u793a\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6309\u7167\u64cd\u4f5c\u7cfb\u7edf\u7684\u63d0\u793a\u91cd\u542f\u865a\u62df\u673a\uff08\u7cfb\u7edf\u542f\u52a8\u540e\u53ef\u4ee5\u53d6\u51fa\u5b89\u88c5\u5a92\u4f53\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u865a\u62df\u673a\u91cd\u65b0\u542f\u52a8\u540e\uff0c\u5b83\u4f1a\u81ea\u52a8\u901a\u8fc7\u78c1\u76d8\u5377\u5f15\u5bfc\u5e76\u542f\u52a8\u64cd\u4f5c\u7cfb\u7edf\u3002")))}k.isMDXComponent=!0},30960:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-container-volume-1-bcb4b56bad7da809cbb75796b6d0bf1a.png"},92022:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-container-volume-2-a1a0a20e344b6ab16e7617f61ce6b141.png"},26400:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-volumes-e8e820f4a3e9af9ff1ab1bb36e475a21.png"},17003:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-aa84ec354ffbf83f6466fea5b2967537.png"},48305:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/one-time-boot-create-vm-bootorder-0ca6a67fa98d6173d8cea99e6580f843.png"},37750:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/qga-90f05b81749ae9d4778770e240da5c55.png"}}]);