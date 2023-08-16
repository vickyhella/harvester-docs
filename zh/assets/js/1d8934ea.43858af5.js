"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),N=i,c=k["".concat(d,".").concat(N)]||k[N]||s[N]||r;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},52565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:2,sidebar_label:"\u521b\u5efa Windows \u865a\u62df\u673a",title:"\u521b\u5efa Windows \u865a\u62df\u673a",keywords:["Harvester","harvester","Rancher","rancher","Windows","windows","\u865a\u62df\u673a","VM","\u521b\u5efa Windows \u865a\u62df\u673a"],Description:'\u4ece"\u865a\u62df\u673a"\u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a Windows \u865a\u62df\u673a\u3002'},l=void 0,o={unversionedId:"vm/create-windows-vm",id:"vm/create-windows-vm",title:"\u521b\u5efa Windows \u865a\u62df\u673a",description:"\u4f60\u53ef\u4ee5\u4ece Virtual Machines \u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a\u865a\u62df\u673a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/create-windows-vm.md",sourceDirName:"vm",slug:"/vm/create-windows-vm",permalink:"/harvester-docs/zh/dev/vm/create-windows-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/create-windows-vm.md",tags:[],version:"current",lastUpdatedAt:1688120255,formattedLastUpdatedAt:"2023\u5e746\u670830\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u521b\u5efa Windows \u865a\u62df\u673a",title:"\u521b\u5efa Windows \u865a\u62df\u673a",keywords:["Harvester","harvester","Rancher","rancher","Windows","windows","\u865a\u62df\u673a","VM","\u521b\u5efa Windows \u865a\u62df\u673a"],Description:'\u4ece"\u865a\u62df\u673a"\u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a Windows \u865a\u62df\u673a\u3002'},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u865a\u62df\u673a",permalink:"/harvester-docs/zh/dev/vm/create-vm"},next:{title:"\u7f16\u8f91\u865a\u62df\u673a",permalink:"/harvester-docs/zh/dev/vm/edit-vm"}},d={},p=[{value:"\u5982\u4f55\u521b\u5efa Windows \u865a\u62df\u673a",id:"\u5982\u4f55\u521b\u5efa-windows-\u865a\u62df\u673a",level:2},{value:"\u6807\u9898\u90e8\u5206",id:"\u6807\u9898\u90e8\u5206",level:3},{value:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361",id:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361",level:3},{value:"\u5377\u9009\u9879\u5361",id:"\u5377\u9009\u9879\u5361",level:3},{value:"\u7f51\u7edc\u9009\u9879\u5361",id:"\u7f51\u7edc\u9009\u9879\u5361",level:3},{value:"\u8282\u70b9\u8c03\u5ea6\u9009\u9879\u5361",id:"\u8282\u70b9\u8c03\u5ea6\u9009\u9879\u5361",level:3},{value:"\u9ad8\u7ea7\u9009\u9879\u9009\u9879\u5361",id:"\u9ad8\u7ea7\u9009\u9879\u9009\u9879\u5361",level:3},{value:"\u9875\u811a\u90e8\u5206",id:"\u9875\u811a\u90e8\u5206",level:3},{value:"\u5b89\u88c5 Windows",id:"\u5b89\u88c5-windows",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2},{value:"\u4f7f\u7528 EFI \u6a21\u5f0f\u65f6 Windows ISO \u65e0\u6cd5\u542f\u52a8",id:"\u4f7f\u7528-efi-\u6a21\u5f0f\u65f6-windows-iso-\u65e0\u6cd5\u542f\u52a8",level:3},{value:"\u4fdd\u7559\u5185\u5b58\u4e0d\u8db3\u5bfc\u81f4\u865a\u62df\u673a\u5d29\u6e83",id:"\u4fdd\u7559\u5185\u5b58\u4e0d\u8db3\u5bfc\u81f4\u865a\u62df\u673a\u5d29\u6e83",level:3},{value:"Windows \u9996\u6b21\u542f\u52a8\u65f6\u51fa\u73b0 BSoD\uff08\u84dd\u5c4f\u6b7b\u673a\uff09",id:"windows-\u9996\u6b21\u542f\u52a8\u65f6\u51fa\u73b0-bsod\u84dd\u5c4f\u6b7b\u673a",level:3}],m={toc:p};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece ",(0,i.kt)("strong",{parentName:"p"},"Virtual Machines")," \u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a\u865a\u62df\u673a\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u521b\u5efa Linux \u865a\u62df\u673a\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/vm/create-vm"},"\u672c\u9875\u9762"),"\u3002")),(0,i.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa-windows-\u865a\u62df\u673a"},"\u5982\u4f55\u521b\u5efa Windows \u865a\u62df\u673a"),(0,i.kt)("h3",{id:"\u6807\u9898\u90e8\u5206"},"\u6807\u9898\u90e8\u5206"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u521b\u5efa\u5355\u4e2a\u5b9e\u4f8b\u6216\u591a\u4e2a\u5b9e\u4f8b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u865a\u62df\u673a\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u8f93\u5165\u865a\u62df\u673a\u7684\u63cf\u8ff0\u3002"),(0,i.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"li"},"\u4f7f\u7528\u865a\u62df\u673a\u6a21\u677f"),"\u5e76\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"li"},"windows-iso-image-base-template"),"\u3002\u6b64\u6a21\u677f\u5c06\u4e3a Windows \u6dfb\u52a0\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"virtio")," \u9a71\u52a8\u7684\u5377\u3002")),(0,i.kt)("h3",{id:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361"},"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8981\u5206\u914d\u7ed9\u865a\u62df\u673a\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"CPU")," \u6838\u6570\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8981\u5206\u914d\u7ed9\u865a\u62df\u673a\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Memory"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm",src:n(20615).Z,width:"1920",height:"1080"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u4e0a\u6240\u8ff0\uff0c\u5efa\u8bae\u4f60\u4f7f\u7528 Windows \u865a\u62df\u673a\u6a21\u677f\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Volumes")," \u90e8\u5206\u5c06\u4f7f\u7528 Windows \u865a\u62df\u673a\u6a21\u677f\u81ea\u52a8\u521b\u5efa\u7684\u9009\u9879\u3002")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"bootOrder")," \u503c\u9700\u8981\u5148\u4f7f\u7528\u5b89\u88c5\u955c\u50cf\u8fdb\u884c\u8bbe\u7f6e\u3002\u5982\u679c\u4f60\u4fee\u6539\u8fd9\u4e9b\u503c\uff0c\u4f60\u7684\u865a\u62df\u673a\u53ef\u80fd\u65e0\u6cd5\u542f\u52a8\u5230\u5b89\u88c5\u78c1\u76d8\u3002")),(0,i.kt)("h3",{id:"\u5377\u9009\u9879\u5361"},"\u5377\u9009\u9879\u5361"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u4e2a\u5377"),"\u662f\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"\u955c\u50cf\u5377"),"\uff0c\u5177\u6709\u4ee5\u4e0b\u503c\uff1a",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"cdrom-disk"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u5b83\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),"\uff1a\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"li"},"cd-rom"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Image"),"\uff1a\u9009\u62e9\u8981\u5b89\u88c5\u7684 Windows \u955c\u50cf\u3002\u6709\u5173\u5982\u4f55\u521b\u5efa\u65b0\u955c\u50cf\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"li",href:"/harvester-docs/zh/dev/upload-image"},"\u4e0a\u4f20\u955c\u50cf"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Size"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"20"),"\u3002\u5982\u679c\u4f60\u7684\u955c\u50cf\u8f83\u5927\uff0c\u4f60\u53ef\u4ee5\u66f4\u6539\u8be5\u503c\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Bus"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"SATA"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u4e2a\u5377"),"\u662f\u5177\u6709\u4ee5\u4e0b\u503c\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u5377"),"\uff1a",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"rootdisk"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u5b83\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),"\uff1a\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"li"},"disk"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageClass"),"\uff1a\u4f60\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684 StorageClass ",(0,i.kt)("inlineCode",{parentName:"li"},"harvester-longhorn")," \u6216\u81ea\u5b9a\u4e49\u7684 StorageClass\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Size"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"32"),"\u3002\u5728\u66f4\u6539\u6b64\u503c\u4e4b\u524d\uff0c\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/get-started/hardware-requirements#storage-controller-and-disk-space-requirements"},"Windows Server")," \u548c ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/whats-new/windows-11-requirements#hardware-requirements"},"Windows 11")," \u7684\u78c1\u76d8\u7a7a\u95f4\u8981\u6c42\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Bus"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"VirtIO"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5b83\u4fee\u6539\u4e3a\u5176\u4ed6\u53ef\u7528\u7684\u9009\u9879\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"SATA")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"SCSI"),"\u3002"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u7b2c\u4e09\u4e2a\u5377"),"\u662f\u5177\u6709\u4ee5\u4e0b\u503c\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"\u5bb9\u5668")," \uff1a",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"virtio-container-disk"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u5b83\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),"\uff1a\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"li"},"cd-rom"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Docker Image"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"registry.suse.com/suse/vmdp/vmdp:2.5.3"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Bus"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"SATA"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002"))),(0,i.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Volume"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"Add Existing Volume"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"Add VM Image")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Container")," \u6309\u94ae\u6765\u6dfb\u52a0\u5176\u4ed6\u78c1\u76d8\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm-volumes",src:n(89334).Z,width:"1920",height:"1080"})),(0,i.kt)("h3",{id:"\u7f51\u7edc\u9009\u9879\u5361"},"\u7f51\u7edc\u9009\u9879\u5361"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Management Network")," \u9ed8\u8ba4\u6dfb\u52a0\uff0c\u5e76\u5e26\u6709\u4ee5\u4e0b\u503c\uff1a",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u5b83\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Model"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"e1000"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u8bbe\u4e3a\u83dc\u5355\u4e2d\u7684\u5176\u4ed6\u53ef\u7528\u9009\u9879\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Network"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"management Network"),"\u3002\u5982\u679c\u5c1a\u672a\u521b\u5efa\u5176\u4ed6\u7f51\u7edc\uff0c\u5219\u65e0\u6cd5\u66f4\u6539\u6b64\u9009\u9879\u3002\u6709\u5173\u5982\u4f55\u521b\u5efa\u65b0\u7f51\u7edc\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"/harvester-docs/zh/dev/networking/harvester-network"},"Harvester \u7f51\u7edc"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"masquerade"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"bridge"),"\u3002"))),(0,i.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Network")," \u6765\u6dfb\u52a0\u5176\u4ed6\u7f51\u7edc\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm-networks",src:n(44717).Z,width:"1920",height:"1080"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u66f4\u6539",(0,i.kt)("inlineCode",{parentName:"p"},"\u8282\u70b9\u8c03\u5ea6"),"\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u5f71\u54cd Harvester \u529f\u80fd\uff0c\u4f8b\u5982\u7981\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"\u70ed\u8fc1\u79fb"),"\u3002")),(0,i.kt)("h3",{id:"\u8282\u70b9\u8c03\u5ea6\u9009\u9879\u5361"},"\u8282\u70b9\u8c03\u5ea6\u9009\u9879\u5361"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Node Scheduling")," \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"Run VM on any available node"),"\uff08\u5728\u4efb\u4f55\u53ef\u7528\u8282\u70b9\u4e0a\u8fd0\u884c\u865a\u62df\u673a\uff09\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u8bbe\u4e3a\u83dc\u5355\u4e2d\u7684\u5176\u4ed6\u53ef\u7528\u9009\u9879\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm-scheduling",src:n(41422).Z,width:"1920",height:"1080"})),(0,i.kt)("h3",{id:"\u9ad8\u7ea7\u9009\u9879\u9009\u9879\u5361"},"\u9ad8\u7ea7\u9009\u9879\u9009\u9879\u5361"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"OS Type"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"Windows"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Machine Type"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002\u5728\u66f4\u6539\u6b64\u503c\u4e4b\u524d\uff0c\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"https://kubevirt.io/user-guide/virtual_machines/virtual_hardware/#machine-type"},"KubeVirt \u673a\u5668\u7c7b\u578b"),"\u6587\u6863\u3002"),(0,i.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09",(0,i.kt)("inlineCode",{parentName:"li"},"Hostname"),"\uff1a\u8bbe\u7f6e\u865a\u62df\u673a\u7684\u4e3b\u673a\u540d\u3002"),(0,i.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09",(0,i.kt)("inlineCode",{parentName:"li"},"Cloud Config"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"User Data")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"Network Data")," \u5747\u4f7f\u7528\u4e3a\u9ed8\u8ba4\u503c\u3002\u76ee\u524d\uff0c\u8fd9\u4e9b\u914d\u7f6e\u4e0d\u9002\u7528\u4e8e\u57fa\u4e8e Windows \u7684\u865a\u62df\u673a\u3002"),(0,i.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09",(0,i.kt)("inlineCode",{parentName:"li"},"Enable TPM"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"Booting in EFI mode"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"Secure Boot"),"\uff1a\u5177\u6709 Secure Boot \u529f\u80fd\u7684 TPM 2.0 \u8bbe\u5907\u548c UEFI \u56fa\u4ef6\u90fd\u662f Windows 11 \u7684\u786c\u6027\u8981\u6c42\u3002")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u4ec5\u652f\u6301\u975e\u6301\u4e45\u6027 vTPM\uff0c\u800c\u4e14\u6bcf\u6b21\u5173\u95ed\u865a\u62df\u673a\u540e\u5176\u72b6\u6001\u90fd\u4f1a\u88ab\u6e05\u9664\u3002\u56e0\u6b64\uff0c\u8bf7\u4e0d\u8981\u542f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview"},"Bitlocker"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm-advanced",src:n(89026).Z,width:"2553",height:"1064"})),(0,i.kt)("h3",{id:"\u9875\u811a\u90e8\u5206"},"\u9875\u811a\u90e8\u5206"),(0,i.kt)("p",null,"\u5b8c\u6210\u6240\u6709\u8bbe\u7f6e\u540e\uff0c\u5355\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," \u6765\u521b\u5efa\u865a\u62df\u673a\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u9700\u8981\u6dfb\u52a0\u9ad8\u7ea7\u8bbe\u7f6e\uff0c\u4f60\u53ef\u4ee5\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit as YAML")," \u6765\u76f4\u63a5\u4fee\u6539\u865a\u62df\u673a\u914d\u7f6e\u3002\n\u5982\u679c\u4f60\u9700\u8981\u53d6\u6d88\u6240\u6709\u66f4\u6539\uff0c\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Cancel"),"\u3002")),(0,i.kt)("h2",{id:"\u5b89\u88c5-windows"},"\u5b89\u88c5 Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9\u4f60\u521a\u624d\u521b\u5efa\u7684\u865a\u62df\u673a\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Start")," \u6765\u542f\u52a8\u865a\u62df\u673a\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5f15\u5bfc\u5b89\u88c5\u7a0b\u5e8f\uff0c\u7136\u540e\u6309\u7167\u5b89\u88c5\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"virtio")," \u7684\u5377\uff0c\u4f60\u9700\u8981\u52a0\u8f7d\u7279\u5b9a\u7684\u9a71\u52a8\u7a0b\u5e8f\u6765\u68c0\u6d4b\u5377\u3002\u5982\u679c\u4f60\u4f7f\u7528\u4e86\u865a\u62df\u673a\u6a21\u677f ",(0,i.kt)("inlineCode",{parentName:"p"},"windows-iso-image-base-template"),"\uff0c\u5219\u76f8\u5173\u7684\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"Load driver"),"\uff0c\u5728\u5bf9\u8bdd\u6846\u4e2d\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"Browse"),"\uff0c\u7136\u540e\u627e\u5230\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"VMDP-WIN")," \u524d\u7f00\u7684\u5149\u9a71\u3002\u7136\u540e\uff0c\u6839\u636e\u4f60\u7684 Windows \u7248\u672c\u627e\u5230\u9a71\u52a8\u76ee\u5f55\uff08\u4f8b\u5982\uff0c\u5982\u679c\u662f Windows Server 2012r2\uff0c\u5219\u5c55\u5f00 ",(0,i.kt)("inlineCode",{parentName:"li"},"win8.1-2012r2"),"\uff09\uff0c\u7136\u540e\u9009\u62e9\u91cc\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"pvvx")," \u76ee\u5f55\uff1a\n",(0,i.kt)("img",{alt:"find-virtio-driver-directory",src:n(90070).Z,width:"477",height:"384"})),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," \u6765\u5141\u8bb8\u5b89\u88c5\u7a0b\u5e8f\u626b\u63cf\u6b64\u76ee\u5f55\u5e76\u67e5\u627e\u9a71\u52a8\u7a0b\u5e8f\u3002\u7136\u540e\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"li"},"SUSE Block Driver for Windows")," \u5e76\u5355\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"Next")," \u6765\u52a0\u8f7d\u9a71\u52a8\u7a0b\u5e8f\uff1a\n",(0,i.kt)("img",{alt:"select-virtio-block-driver",src:n(22072).Z,width:"656",height:"498"})),(0,i.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u5b89\u88c5\u7a0b\u5e8f\u52a0\u8f7d\u9a71\u52a8\u7a0b\u5e8f\u3002\u5982\u679c\u4f60\u9009\u62e9\u4e86\u6b63\u786e\u7684\u9a71\u52a8\u7a0b\u5e8f\u7248\u672c\uff0c\u52a0\u8f7d\u9a71\u52a8\u7a0b\u5e8f\u540e\u4f1a\u68c0\u6d4b\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"virtio")," \u5377\uff1a\n",(0,i.kt)("img",{alt:"installer-found-virtio-drive",src:n(5616).Z,width:"641",height:"485"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u4f7f\u7528\u5176\u5b83\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"virtio")," \u7684\u786c\u4ef6\uff08\u4f8b\u5982\u7f51\u7edc\u9002\u914d\u5668\uff09\uff0c\u4f60\u9700\u8981\u5728\u5b8c\u6210\u5b89\u88c5\u540e\u624b\u52a8\u5b89\u88c5\u8fd9\u4e9b\u9a71\u52a8\u7a0b\u5e8f\u3002\u8981\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f\uff0c\u8bf7\u6253\u5f00 VMDP \u9a71\u52a8\u7a0b\u5e8f\u78c1\u76d8\uff0c\u7136\u540e\u6253\u5f00\u5b89\u88c5\u7a0b\u5e8f\u3002"))),(0,i.kt)("p",null,"Windows VMDP \u9a71\u52a8\u5305\u7684\u652f\u6301\u77e9\u9635\u5982\u4e0b\uff08\u5047\u8bbe VMDP \u5149\u9a71\u8def\u5f84\u4e3a E\uff09\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u7248\u672c"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u652f\u6301"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u9a71\u52a8\u8def\u5f84"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 7"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2008"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2008r2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 8 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win8-2012\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2012 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win8-2012\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 8.1 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win8.1-2012r2\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2012r2 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win8.1-2012r2\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 10 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2016 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2019 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 11 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-2004\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2022 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-2004\\x86(x64)\\pvvx"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6ca1\u6709\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"windows-iso-image-base-template")," \u6a21\u677f\uff0c\u4f46\u4ecd\u7136\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"virtio")," \u8bbe\u5907\uff0c\u8bf7\u786e\u4fdd\u6dfb\u52a0\u4e86\u81ea\u5b9a\u4e49 Windows virtio \u9a71\u52a8\u7a0b\u5e8f\u6765\u68c0\u6d4b\u786c\u4ef6\u3002")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u6709\u5173\u5982\u4f55\u5b89\u88c5 VMDP Guest Driver \u548c\u5de5\u5177\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://documentation.suse.com/sle-vmdp/2.5/html/vmdp/index.html"},"\u6b64\u6587\u6863"),"\u3002")),(0,i.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,i.kt)("h3",{id:"\u4f7f\u7528-efi-\u6a21\u5f0f\u65f6-windows-iso-\u65e0\u6cd5\u542f\u52a8"},"\u4f7f\u7528 EFI \u6a21\u5f0f\u65f6 Windows ISO \u65e0\u6cd5\u542f\u52a8"),(0,i.kt)("p",null,"\u5728 Windows \u4e2d\u4f7f\u7528 EFI \u6a21\u5f0f\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\u7cfb\u7edf\u4f7f\u7528\u4e86 HDD \u6216 UEFI shell \u7b49\u5176\u5b83\u8bbe\u5907\u8fdb\u884c\u542f\u52a8\uff0c\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"efi-shell",src:n(20080).Z,width:"800",height:"608"})),(0,i.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a Windows \u4f1a\u63d0\u793a ",(0,i.kt)("inlineCode",{parentName:"p"},"Press any key to boot from CD or DVD...")," \u6765\u8ba9\u7528\u6237\u51b3\u5b9a\u662f\u5426\u8981\u4f7f\u7528 ISO \u542f\u52a8\u3002\u8981\u8ba9\u7cfb\u7edf\u4f7f\u7528 CD \u6216 DVD \u542f\u52a8\uff0c\u4f60\u9700\u8981\u8fdb\u884c\u4eba\u5de5\u5e72\u9884\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"boot-from-cd",src:n(7040).Z,width:"818",height:"621"})),(0,i.kt)("p",null,"\u5982\u679c\u7cfb\u7edf\u5df2\u7ecf\u5f15\u5bfc\u5230 UEFI shell\uff0c\u4f60\u53ef\u4ee5\u952e\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," \u4ee5\u5f3a\u5236\u7cfb\u7edf\u518d\u6b21\u91cd\u65b0\u5f15\u5bfc\u3002\u51fa\u73b0\u63d0\u793a\u540e\uff0c\u4f60\u53ef\u4ee5\u6309\u4e0b\u4efb\u610f\u952e\u8ba9\u7cfb\u7edf\u4ece Windows ISO \u542f\u52a8\u3002"),(0,i.kt)("h3",{id:"\u4fdd\u7559\u5185\u5b58\u4e0d\u8db3\u5bfc\u81f4\u865a\u62df\u673a\u5d29\u6e83"},"\u4fdd\u7559\u5185\u5b58\u4e0d\u8db3\u5bfc\u81f4\u865a\u62df\u673a\u5d29\u6e83"),(0,i.kt)("p",null,"\u5f53 Windows VM \u5206\u914d\u4e86\u8d85\u8fc7 8 GiB \u5185\u5b58\uff0c\u4f46\u6ca1\u6709\u914d\u7f6e\u8db3\u591f\u7684\u4fdd\u7559\u5185\u5b58\u65f6\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\u3002VM \u4f1a\u5728\u6ca1\u6709\u8b66\u544a\u7684\u60c5\u51b5\u4e0b\u5d29\u6e83\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("strong",{parentName:"p"},"Advanced Options")," \u9009\u9879\u5361\u4e0a\u4e3a\u6a21\u677f\u5206\u914d\u81f3\u5c11 256MiB \u7684\u4fdd\u7559\u5185\u5b58\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1a\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"256MiB")," \u4e0d\u8d77\u4f5c\u7528\uff0c\u8bf7\u5c1d\u8bd5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"512MiB"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"reserved-memory-config",src:n(40020).Z,width:"2538",height:"760"})),(0,i.kt)("h3",{id:"windows-\u9996\u6b21\u542f\u52a8\u65f6\u51fa\u73b0-bsod\u84dd\u5c4f\u6b7b\u673a"},"Windows \u9996\u6b21\u542f\u52a8\u65f6\u51fa\u73b0 BSoD\uff08\u84dd\u5c4f\u6b7b\u673a\uff09"),(0,i.kt)("p",null,"\u8fd9\u662f Windows Server 2016 \u53ca\u66f4\u9ad8\u7248\u672c\u7684 Windows VM \u4e2d\u5b58\u5728\u7684\u4e00\u4e2a\u5df2\u77e5\u95ee\u9898\uff0c\u5373\u5728 Windows \u9996\u6b21\u542f\u52a8\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u84dd\u5c4f\u6b7b\u673a\uff0c\u9519\u8bef\u4ee3\u7801\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"KMODE_EXCEPTION_NOT_HANDLED"),"\u3002\u6211\u4eec\u4ecd\u5728\u7814\u7a76\u8fd9\u4e2a\u95ee\u9898\uff0c\u5e76\u5c06\u5728\u540e\u7eed\u7248\u672c\u4e2d\u89e3\u51b3\u6b64\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u76ee\u524d\u6709\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\uff1a\u901a\u8fc7\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml")," \u5728 Harvester \u4e2d\u521b\u5efa\u6216\u4fee\u6539\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/kvm.conf"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'name: Harvester Configuration\nstages:\n  initramfs:\n  - commands: # ...\n    files:\n    - path: /etc/modprobe.d/kvm.conf\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |\n          options kvm ignore_msrs=1\n      encoding: ""\n      ownerstring: ""\n      # ...\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u4ecd\u7136\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u89e3\u51b3\u65b9\u6848\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/276"},"\u6b64 issue"),"\u3002\u5982\u679c\u4f60\u5728\u5e94\u7528\u6b64\u89e3\u51b3\u65b9\u6cd5\u540e\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u544a\u8bc9\u6211\u4eec\u3002")))}s.isMDXComponent=!0},7040:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/boot-from-cd-5d0271f20ded1ac63970bc78f9da9ec5.png"},89026:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-advanced-df5a302dd1495cc699f10c23bb355062.png"},44717:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-networks-1a29d10728925ba8f4edc495d26a7421.png"},41422:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-scheduling-ffa18f9b5afd614db7aa8a50082f827e.png"},89334:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-volumes-b654694515256a1d4a14655cc5241b90.png"},20615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-bd4beb4bebfe8c490ddd02d838760d56.png"},20080:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/efi-shell-830d79cf172af786bad73c8dc479fe31.png"},90070:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/find-virtio-driver-directory-5be0d2673d0b8c1c34d87a6962da065f.png"},5616:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installer-found-virtio-drive-09000201fe0e2d95e1aec7e2a84e35b3.png"},40020:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reserved-memory-config-80c67e0df116c7fe39dd98dbd1bb1bb8.png"},22072:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-virtio-block-driver-d72f63b4b89cb0c8fe7b4b8b9eb9971b.png"}}]);