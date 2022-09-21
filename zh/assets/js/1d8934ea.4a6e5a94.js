"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=s(n),c=a,N=k["".concat(d,".").concat(c)]||k[c]||p[c]||r;return n?i.createElement(N,o(o({ref:t},m),{},{components:n})):i.createElement(N,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2,sidebar_label:"\u521b\u5efa Windows \u865a\u62df\u673a",title:"",keywords:["Harvester","harvester","Rancher","rancher","Windows","windows","\u865a\u62df\u673a","VM","\u521b\u5efa Windows \u865a\u62df\u673a"],Description:'\u4ece"\u865a\u62df\u673a"\u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a Windows \u865a\u62df\u673a\u3002'},o="\u521b\u5efa Windows \u865a\u62df\u673a",l={unversionedId:"vm/create-windows-vm",id:"vm/create-windows-vm",title:"",description:"\u4f60\u53ef\u4ee5\u4ece Virtual Machines \u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a\u865a\u62df\u673a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/create-windows-vm.md",sourceDirName:"vm",slug:"/vm/create-windows-vm",permalink:"/zh/vm/create-windows-vm",draft:!1,editUrl:"https://github.com/vickyhella/harvester-docs/edit/main/docs/docs/vm/create-windows-vm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u521b\u5efa Windows \u865a\u62df\u673a",title:"",keywords:["Harvester","harvester","Rancher","rancher","Windows","windows","\u865a\u62df\u673a","VM","\u521b\u5efa Windows \u865a\u62df\u673a"],Description:'\u4ece"\u865a\u62df\u673a"\u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a Windows \u865a\u62df\u673a\u3002'},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u865a\u62df\u673a",permalink:"/zh/vm/create-vm"},next:{title:"\u7f16\u8f91\u865a\u62df\u673a",permalink:"/zh/vm/edit-vm"}},d={},s=[{value:"\u5982\u4f55\u521b\u5efa Windows \u865a\u62df\u673a",id:"\u5982\u4f55\u521b\u5efa-windows-\u865a\u62df\u673a",level:2},{value:"Header Section",id:"header-section",level:3},{value:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361",id:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361",level:3},{value:"\u5377\u9009\u9879\u5361",id:"\u5377\u9009\u9879\u5361",level:3},{value:"\u7f51\u7edc\u9009\u9879\u5361",id:"\u7f51\u7edc\u9009\u9879\u5361",level:3},{value:"\u8282\u70b9\u8c03\u5ea6\u9009\u9879\u5361",id:"\u8282\u70b9\u8c03\u5ea6\u9009\u9879\u5361",level:3},{value:"\u9ad8\u7ea7\u9009\u9879\u9009\u9879\u5361",id:"\u9ad8\u7ea7\u9009\u9879\u9009\u9879\u5361",level:3},{value:"\u9875\u811a\u90e8\u5206",id:"\u9875\u811a\u90e8\u5206",level:3},{value:"\u5b89\u88c5 Windows",id:"\u5b89\u88c5-windows",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Windows ISO unable to boot when using EFI mode",id:"windows-iso-unable-to-boot-when-using-efi-mode",level:3},{value:"VM crashes when reserved memory not enough",id:"vm-crashes-when-reserved-memory-not-enough",level:3},{value:"BSoD (Blue Screen of Death) at first boot time of Windows",id:"bsod-blue-screen-of-death-at-first-boot-time-of-windows",level:3}],m={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u521b\u5efa-windows-\u865a\u62df\u673a"},"\u521b\u5efa Windows \u865a\u62df\u673a"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("strong",{parentName:"p"},"Virtual Machines")," \u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a\u865a\u62df\u673a\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u521b\u5efa Linux \u865a\u62df\u673a\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/zh/vm/create-vm"},"\u672c\u9875\u9762"),"\u3002")),(0,a.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa-windows-\u865a\u62df\u673a"},"\u5982\u4f55\u521b\u5efa Windows \u865a\u62df\u673a"),(0,a.kt)("h3",{id:"header-section"},"Header Section"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"\u5355\u4e2a\u5b9e\u4f8b"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"\u591a\u4e2a\u5b9e\u4f8b"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u865a\u62df\u673a\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u8f93\u5165\u865a\u62df\u673a\u7684\u63cf\u8ff0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"li"},"\u4f7f\u7528\u865a\u62df\u673a\u6a21\u677f"),"\u5e76\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"windows-iso-image-base-template"),"\u3002\u6b64\u6a21\u677f\u5c06\u4e3a Windows \u6dfb\u52a0\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"virtio")," \u9a71\u52a8\u7684\u5377\u3002")),(0,a.kt)("h3",{id:"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361"},"\u57fa\u672c\u4fe1\u606f\u9009\u9879\u5361"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8981\u5206\u914d\u7ed9\u865a\u62df\u673a\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"CPU")," \u6838\u6570\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8981\u5206\u914d\u7ed9\u865a\u62df\u673a\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u5185\u5b58"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u9009\u62e9\u73b0\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"SSH \u5bc6\u94a5")," \u6216\u4e0a\u4f20\u65b0\u7684\u5bc6\u94a5\u200b\u200b\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-windows-vm",src:n(2538).Z,width:"1920",height:"1080"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"As mentioned above, it is recommended that you use the Windows VM template. ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5377"),"\u90e8\u5206\u5c06\u63cf\u8ff0 Windows \u865a\u62df\u673a\u6a21\u677f\u81ea\u52a8\u521b\u5efa\u7684\u9009\u9879\u3002")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"bootOrder")," values need to be set with the installation image first. \u5982\u679c\u4f60\u4fee\u6539\u8fd9\u4e9b\u503c\uff0c\u4f60\u7684\u865a\u62df\u673a\u53ef\u80fd\u65e0\u6cd5\u542f\u52a8\u5230\u5b89\u88c5\u78c1\u76d8\u3002")),(0,a.kt)("h3",{id:"\u5377\u9009\u9879\u5361"},"\u5377\u9009\u9879\u5361"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u4e2a\u5377"),"\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"\u955c\u50cf\u5377"),"\uff0c\u5177\u6709\u4ee5\u4e0b\u503c\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u540d\u79f0"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"cdrom-disk"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u5b83\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u955c\u50cf"),"\uff1a\u9009\u62e9\u8981\u5b89\u88c5\u7684 Windows \u955c\u50cf\u3002\u6709\u5173\u5982\u4f55\u521b\u5efa\u65b0\u955c\u50cf\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"/zh/upload-image"},"\u4e0a\u4f20\u955c\u50cf"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7c7b\u578b"),"\uff1a\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"cd-rom"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u5927\u5c0f"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"20"),"\u3002\u5982\u679c\u4f60\u7684\u955c\u50cf\u8f83\u5927\uff0c\u4f60\u53ef\u4ee5\u66f4\u6539\u8be5\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Bus"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"SATA"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u4e2a\u5377"),"\u662f\u5177\u6709\u4ee5\u4e0b\u503c\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u5377"),"\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u540d\u79f0"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"rootdisk"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u5b83\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u5927\u5c0f"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"32"),"\u3002\u5728\u66f4\u6539\u6b64\u503c\u4e4b\u524d\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/get-started/hardware-requirements#storage-controller-and-disk-space-requirements"},"Windows Server")," \u548c ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/whats-new/windows-11-requirements#hardware-requirements"},"Windows 11")," \u7684\u78c1\u76d8\u7a7a\u95f4\u8981\u6c42\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Bus"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"VirtIO"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5b83\u4fee\u6539\u4e3a\u5176\u4ed6\u53ef\u7528\u7684\u9009\u9879\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"SATA")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"SCSI"),"\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u7b2c\u4e09\u4e2a\u5377"),"\u662f\u5177\u6709\u4ee5\u4e0b\u503c\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"\u5bb9\u5668")," \uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u540d\u79f0"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"virtio-container-disk"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u5b83\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Docker \u955c\u50cf"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"registry.suse.com/suse/vmdp/vmdp:2.5.3"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Bus"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"SATA"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u5377"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u73b0\u6709\u5377"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u865a\u62df\u673a\u955c\u50cf"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u5bb9\u5668"),"\u6309\u94ae\u6765\u6dfb\u52a0\u5176\u4ed6\u78c1\u76d8.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-windows-vm-volumes",src:n(4676).Z,width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"\u7f51\u7edc\u9009\u9879\u5361"},"\u7f51\u7edc\u9009\u9879\u5361"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Management Network")," \u9ed8\u8ba4\u6dfb\u52a0\uff0c\u5e76\u5e26\u6709\u4ee5\u4e0b\u503c\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u540d\u79f0"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539\u5b83\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7f51\u7edc"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"management Network"),"\u3002\u5982\u679c\u5c1a\u672a\u521b\u5efa\u5176\u4ed6\u7f51\u7edc\uff0c\u5219\u65e0\u6cd5\u66f4\u6539\u6b64\u9009\u9879\u3002\u6709\u5173\u5982\u4f55\u521b\u5efa\u65b0\u7f51\u7edc\u7684\u5b8c\u6574\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"../networking/harvester-network"},"Harvester \u7f51\u7edc"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u6a21\u5f0f"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"e1000"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u8bbe\u4e3a\u4e0b\u62c9\u83dc\u5355\u4e2d\u7684\u5176\u4ed6\u53ef\u7528\u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7c7b\u578b"),"\uff1a\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"masquerade"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"bridge"),"\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"li"},"\u6dfb\u52a0\u7f51\u7edc"),"\u6765\u6dfb\u52a0\u5176\u4ed6\u7f51\u7edc\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-windows-vm-networks",src:n(4932).Z,width:"1920",height:"1080"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Node Scheduling")," settings can impact Harvester features, such as disabling ",(0,a.kt)("inlineCode",{parentName:"p"},"Live migration"),".")),(0,a.kt)("h3",{id:"\u8282\u70b9\u8c03\u5ea6\u9009\u9879\u5361"},"\u8282\u70b9\u8c03\u5ea6\u9009\u9879\u5361"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u8282\u70b9\u8c03\u5ea6"),"\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"\u5728\u4efb\u4f55\u53ef\u7528\u8282\u70b9\u4e0a\u8fd0\u884c\u865a\u62df\u673a"),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u5c06\u5176\u8bbe\u4e3a\u4e0b\u62c9\u83dc\u5355\u4e2d\u7684\u5176\u4ed6\u53ef\u7528\u9009\u9879\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-windows-vm-scheduling",src:n(3223).Z,width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"\u9ad8\u7ea7\u9009\u9879\u9009\u9879\u5361"},"\u9ad8\u7ea7\u9009\u9879\u9009\u9879\u5361"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u578b"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"Windows"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u673a\u5668\u7c7b\u578b"),"\uff1a\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"None"),"\u3002\u5efa\u8bae\u4f60\u4e0d\u8981\u4fee\u6539\u8be5\u503c\u3002\u5728\u66f4\u6539\u6b64\u503c\u4e4b\u524d\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"https://kubevirt.io/user-guide/virtual_machines/virtual_hardware/#machine-type"},"KubeVirt \u673a\u5668\u7c7b\u578b"),"\u6587\u6863\u3002"),(0,a.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09",(0,a.kt)("inlineCode",{parentName:"li"},"\u4e3b\u673a\u540d"),"\uff1a\u8bbe\u7f6e\u865a\u62df\u673a\u7684\u4e3b\u673a\u540d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09",(0,a.kt)("inlineCode",{parentName:"li"},"Cloud Config"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"\u7528\u6237\u6570\u636e"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"\u7f51\u7edc\u6570\u636e"),"\u503c\u5747\u4f7f\u7528\u4e3a\u9ed8\u8ba4\u503c\u3002\u76ee\u524d\uff0c\u8fd9\u4e9b\u914d\u7f6e\u4e0d\u9002\u7528\u4e8e\u57fa\u4e8e Windows \u7684\u865a\u62df\u673a\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-windows-vm-advanced",src:n(8624).Z,width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"\u9875\u811a\u90e8\u5206"},"\u9875\u811a\u90e8\u5206"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"\u521b\u5efa\u540e\u542f\u52a8\u865a\u62df\u673a"),"\uff1a\u6b64\u9009\u9879\u9ed8\u8ba4\u52fe\u9009\u3002\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u865a\u62df\u673a\u5728\u521b\u5efa\u540e\u542f\u52a8\uff0c\u4f60\u53ef\u4ee5\u53d6\u6d88\u52fe\u9009\u5b83\u3002")),(0,a.kt)("p",null,"\u5b8c\u6210\u6240\u6709\u8bbe\u7f6e\u540e\uff0c\u5355\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u521b\u5efa"),"\u6765\u521b\u5efa\u865a\u62df\u673a\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you need to add advanced settings, you can edit the VM configuration directly by clicking on ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit as YAML"),".\n\u5982\u679c\u4f60\u9700\u8981\u53d6\u6d88\u6240\u6709\u66f4\u6539\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u53d6\u6d88"),"\u3002")),(0,a.kt)("h2",{id:"\u5b89\u88c5-windows"},"\u5b89\u88c5 Windows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u4f60\u521a\u624d\u521b\u5efa\u7684\u865a\u62df\u673a\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Start")," \u6765\u542f\u52a8\u865a\u62df\u673a\uff08\u5982\u679c\u4f60\u9009\u62e9\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Start virtual machine on creation"),"\uff0c\u865a\u62df\u673a\u5c06\u5728\u521b\u5efa\u540e\u81ea\u52a8\u542f\u52a8\uff09\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Boot into the installer, and follow the instructions given by the installer.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"virtio")," based volumes, you will need to load the specific driver to allow the installer to detect them. If you're using VM template ",(0,a.kt)("inlineCode",{parentName:"p"},"windows-iso-image-base-template"),", the instruction is as follows:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Load driver"),", and then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Browse")," on the dialog box, and find a CD-ROM drive with a ",(0,a.kt)("inlineCode",{parentName:"li"},"VMDP-WIN")," prefix. Next, find the driver directory according to the Windows version you're installing; for example, Windows Server 2012r2 should expand ",(0,a.kt)("inlineCode",{parentName:"li"},"win8.1-2012r2")," and choose the ",(0,a.kt)("inlineCode",{parentName:"li"},"pvvx")," directory inside.\n",(0,a.kt)("img",{alt:"find-virtio-driver-directory",src:n(8501).Z,width:"477",height:"384"})),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")," to allow the installer to scan this directory for drivers, choose ",(0,a.kt)("inlineCode",{parentName:"li"},"SUSE Block Driver for Windows"),", and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Next")," to load the driver.\n",(0,a.kt)("img",{alt:"select-virtio-block-driver",src:n(7067).Z,width:"656",height:"498"})),(0,a.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u5b89\u88c5\u7a0b\u5e8f\u52a0\u8f7d\u9a71\u52a8\u7a0b\u5e8f\u3002If you choose the correct driver version the ",(0,a.kt)("inlineCode",{parentName:"li"},"virtio")," volumes will be detected once the driver is loaded.\n",(0,a.kt)("img",{alt:"installer-found-virtio-drive",src:n(2451).Z,width:"641",height:"485"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) If you are using other ",(0,a.kt)("inlineCode",{parentName:"p"},"virtio")," based hardware like network adapter, you will need to install those drivers manually after completing the installation. To install drivers, open the VMDP driver disk, and use the installer based on your platform."))),(0,a.kt)("p",null,"The support matrix of VMDP driver pack for Windows are as follows (assume the VMDP CD-ROM drive path is E):"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Supported"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Driver path"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows 7"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2008"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2008r2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows 8 x86(x64)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E:\\win8-2012\\x86(x64)\\pvvx"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2012 x86(x64)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E:\\win8-2012\\x86(x64)\\pvvx"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows 8.1 x86(x64)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E:\\win8.1-2012r2\\x86(x64)\\pvvx"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2012r2 x86(x64)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E:\\win8.1-2012r2\\x86(x64)\\pvvx"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows 10 x86(x64)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2016 x86(x64)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2019 x86(x64)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows 11 x86(x64)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E:\\win10-2004\\x86(x64)\\pvvx"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2022 x86(x64)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E:\\win10-2004\\x86(x64)\\pvvx"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you didn't use the ",(0,a.kt)("inlineCode",{parentName:"p"},"windows-iso-image-base-template")," template, and you still need ",(0,a.kt)("inlineCode",{parentName:"p"},"virtio")," devices, please make sure to add your custom Windows virtio driver to allow it to detect the hardware correctly.")),(0,a.kt)("h2",{id:"known-issues"},"Known Issues"),(0,a.kt)("h3",{id:"windows-iso-unable-to-boot-when-using-efi-mode"},"Windows ISO unable to boot when using EFI mode"),(0,a.kt)("p",null,"When using EFI mode with Windows, you may find the system booted with other devices like HDD or UEFI shell like the one below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"efi-shell",src:n(2916).Z,width:"800",height:"608"})),(0,a.kt)("p",null,"That's because Windows will prompt a ",(0,a.kt)("inlineCode",{parentName:"p"},"Press any key to boot from CD or DVD...")," to let the user decide whether to boot from the installer ISO or not, and it needs human intervention to allow the system to boot from CD or DVD."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"boot-from-cd",src:n(3490).Z,width:"818",height:"621"})),(0,a.kt)("p",null,"Alternately if the system has already booted into the UEFI shell, you can type in ",(0,a.kt)("inlineCode",{parentName:"p"},"reset")," to force the system to reboot again. Once the prompt appears you can press any key to let system boot from Windows ISO."),(0,a.kt)("h3",{id:"vm-crashes-when-reserved-memory-not-enough"},"VM crashes when reserved memory not enough"),(0,a.kt)("p",null,"There is a known issue with Windows VM when it is allocated more than 8GiB without enough reserve memory configured. The VM crashes without warning."),(0,a.kt)("p",null,"This can be fixed by allocating at least 256MiB of reserved memory to the template on the Advanced Options tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"reserved-memory-config",src:n(23).Z,width:"1244",height:"501"})),(0,a.kt)("p",null,"We will add a default 256MiB of reserved memory to the Windows template to prevent this problem in the future release."),(0,a.kt)("h3",{id:"bsod-blue-screen-of-death-at-first-boot-time-of-windows"},"BSoD (Blue Screen of Death) at first boot time of Windows"),(0,a.kt)("p",null,"There is a known issue with Windows VM using Windows Server 2016 and above, a BSoD with error code ",(0,a.kt)("inlineCode",{parentName:"p"},"KMODE_EXCEPTION_NOT_HANDLED")," may appears at the first boot time of Windows. We are still looking into it and will fix this issue in the future release."),(0,a.kt)("p",null,"As a workaround, you can create or modify the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/kvm.conf")," within the installation of Harvester by updating ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml")," like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},'name: Harvester Configuration\nstages:\n  initramfs:\n  - commands: # ...\n    files:\n    - path: /etc/modprobe.d/kvm.conf\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |\n          options kvm ignore_msrs=1\n      encoding: ""\n      ownerstring: ""\n      # ...\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is still an experimental solution. For more information, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/276"},"this issue")," and please let us know if you have encountered any issues after applying this workaround.")))}p.isMDXComponent=!0},3490:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/boot-from-cd-5d0271f20ded1ac63970bc78f9da9ec5.png"},8624:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-windows-vm-advanced-c8455fc5cdf66e23baf842adb44de30b.png"},4932:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-windows-vm-networks-1a29d10728925ba8f4edc495d26a7421.png"},3223:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-windows-vm-scheduling-ffa18f9b5afd614db7aa8a50082f827e.png"},4676:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-windows-vm-volumes-b654694515256a1d4a14655cc5241b90.png"},2538:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-windows-vm-bd4beb4bebfe8c490ddd02d838760d56.png"},2916:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/efi-shell-830d79cf172af786bad73c8dc479fe31.png"},8501:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/find-virtio-driver-directory-5be0d2673d0b8c1c34d87a6962da065f.png"},2451:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/installer-found-virtio-drive-09000201fe0e2d95e1aec7e2a84e35b3.png"},23:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/reserved-memory-config-e07eb981514d4cc4b8a00e43acfaaa71.png"},7067:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/select-virtio-block-driver-d72f63b4b89cb0c8fe7b4b8b9eb9971b.png"}}]);