"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3218],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(r),d=n,u=c["".concat(s,".").concat(d)]||c[d]||k[d]||i;return r?a.createElement(u,l(l({ref:t},m),{},{components:r})):a.createElement(u,l({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1755:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1,sidebar_label:"Harvester \u4ecb\u7ecd",slug:"/",title:"",keywords:["Harvester","harvester","Rancher","rancher","Harvester \u4ecb\u7ecd"],Description:"Harvester \u662f\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u5f00\u6e90\u8d85\u878d\u5408\u57fa\u7840\u67b6\u6784 (HCI) \u8f6f\u4ef6\u3002\u5b83\u662f vSphere \u548c Nutanix \u7684\u5f00\u6e90\u66ff\u4ee3\u65b9\u6848\u3002"},l="Harvester \u4ecb\u7ecd",p={unversionedId:"index",id:"index",title:"",description:"Harvester \u662f\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u5f00\u6e90\u8d85\u878d\u5408\u57fa\u7840\u67b6\u6784 (HCI) \u8f6f\u4ef6\u3002\u5b83\u662f\u4f7f\u7528\u4e13\u6709 HCI \u5806\u6808\u7684\u4e00\u79cd\u5f00\u653e\u66ff\u4ee3\u65b9\u6848\uff0c\u8be5\u5806\u6808\u7ed3\u5408\u4e86 Cloud Native Computing \u7684\u8bbe\u8ba1\u548c\u7cbe\u795e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/index.md",sourceDirName:".",slug:"/",permalink:"/zh/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester \u4ecb\u7ecd",slug:"/",title:"",keywords:["Harvester","harvester","Rancher","rancher","Harvester \u4ecb\u7ecd"],Description:"Harvester \u662f\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u5f00\u6e90\u8d85\u878d\u5408\u57fa\u7840\u67b6\u6784 (HCI) \u8f6f\u4ef6\u3002\u5b83\u662f vSphere \u548c Nutanix \u7684\u5f00\u6e90\u66ff\u4ee3\u65b9\u6848\u3002"},sidebar:"tutorialSidebar",next:{title:"\u8981\u6c42",permalink:"/zh/install/requirements"}},s={},o=[{value:"Harvester \u529f\u80fd",id:"harvester-\u529f\u80fd",level:2},{value:"Harvester \u67b6\u6784",id:"harvester-\u67b6\u6784",level:2},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"ISO \u5b89\u88c5",id:"iso-\u5b89\u88c5",level:3},{value:"PXE/iPXE \u5b89\u88c5",id:"pxeipxe-\u5b89\u88c5",level:3}],m={toc:o};function k(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"harvester-\u4ecb\u7ecd"},"Harvester \u4ecb\u7ecd"),(0,n.kt)("p",null,"Harvester \u662f\u57fa\u4e8e Kubernetes \u6784\u5efa\u7684\u5f00\u6e90",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hyper-converged_infrastructure"},"\u8d85\u878d\u5408\u57fa\u7840\u67b6\u6784")," (HCI) \u8f6f\u4ef6\u3002\u5b83\u662f\u4f7f\u7528\u4e13\u6709 HCI \u5806\u6808\u7684\u4e00\u79cd\u5f00\u653e\u66ff\u4ee3\u65b9\u6848\uff0c\u8be5\u5806\u6808\u7ed3\u5408\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cloud_native_computing"},"Cloud Native Computing")," \u7684\u8bbe\u8ba1\u548c\u7cbe\u795e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harvester-ui",src:r(9013).Z,width:"2558",height:"1304"})),(0,n.kt)("h2",{id:"harvester-\u529f\u80fd"},"Harvester \u529f\u80fd"),(0,n.kt)("p",null,"Harvester \u652f\u6301\u5728\u88f8\u673a\u670d\u52a1\u5668\u4e0a\u5b9e\u65bd HCI\u3002Harvester \u4f7f\u7528\u672c\u5730\u3001\u76f4\u63a5\u8fde\u63a5\u7684\u5b58\u50a8\uff0c\u800c\u4e0d\u662f\u590d\u6742\u7684\u5916\u90e8 SANs\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u96c6\u6210\u542f\u52a8\u7684\u955c\u50cf\u8fdb\u884c\u4ea4\u4ed8\uff0c\u53ef\u4ee5\u901a\u8fc7 ISO \u6216 PXE \u5f15\u5bfc\u76f4\u63a5\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f Harvester \u5f53\u4e0b\u63d0\u4f9b\u7684\u4e00\u4e9b\u4e3b\u8981\u529f\u80fd\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u865a\u62df\u673a\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u5305\u62ec SSH-Key \u6ce8\u5165\u3001Cloud-init \u914d\u7f6e\u3001\u548c\u56fe\u5f62\u3001\u4e32\u884c\u7aef\u53e3\u63a7\u5236\u53f0\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u865a\u62df\u673a\u70ed\u8fc1\u79fb\u652f\u6301\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u865a\u62df\u673a\u5907\u4efd\u548c\u6062\u590d\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u865a\u62df\u673a\u4e2d\u7684\u591a\u4e2a\u7f51\u5361\u652f\u6301\u3001\u53ef\u8fde\u63a5\u5230\u7ba1\u7406\u6216 VLAN\u7f51\u7edc\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u865a\u62df\u673a\u548c cloud-init \u6a21\u677f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u96c6\u6210 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher"},"Rancher")," \u5e76\u63d0\u4f9b\u591a\u96c6\u7fa4\u7ba1\u7406\u548c Harvester \u4e3b\u673a\u9a71\u52a8\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.harvesterhci.io/latest/install/pxe-boot-install"},"PXE/ipxe \u5f15\u5bfc\u652f\u6301")),(0,n.kt)("li",{parentName:"ol"},"\u865a\u62df IP (VIP) \u548c Bond \u7f51\u5361\u652f\u6301"),(0,n.kt)("li",{parentName:"ol"},"\u76d1\u63a7\u96c6\u6210")),(0,n.kt)("h2",{id:"harvester-\u67b6\u6784"},"Harvester \u67b6\u6784"),(0,n.kt)("p",null,"\u4e0b\u56fe\u4e3a Harvester \u7684\u6982\u89c8\u67b6\u6784\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(348).Z,width:"943",height:"486"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://longhorn.io/"},"Longhorn")," \u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u3001\u53ef\u9760\u3001\u6613\u7528\u7684 Kubernetes \u5206\u5e03\u5f0f\u5757\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubevirt.io/"},"KubeVirt")," \u662f\u4e00\u4e2a Kubernetes \u7684\u865a\u62df\u673a\u7ba1\u7406\u63d2\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/cOS-toolkit"},"Elemental for SLE-Micro 5.2"),"\uff08v1.0.3 \u4e4b\u524d\u7684\u7248\u672c\u57fa\u4e8e openSUSE Leap 15.3\uff09\u662f\u4e00\u4e2a\u4e0d\u53ef\u66f4\u6539\u7684 Linux \u53d1\u884c\u7248\uff0c\u65e8\u5728\u5c3d\u91cf\u51cf\u5c11 Kubernetes \u96c6\u7fa4\u4e2d\u8282\u70b9\u7684\u64cd\u4f5c\u7cfb\u7edf\u7ef4\u62a4\u5de5\u4f5c\u3002")),(0,n.kt)("h2",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,n.kt)("p",null,"\u786c\u4ef6\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff0c\u624d\u53ef\u4ee5\u542f\u52a8\u548c\u8fd0\u884c Harvester\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8981\u6c42"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4ec5\u652f\u6301 x86_64\u3002\u9700\u8981\u786c\u4ef6\u8f85\u52a9\u865a\u62df\u5316\u3002\u6700\u5c11\u9700\u8981 8 \u6838\u5904\u7406\u5668\uff0c\u5efa\u8bae\u4f7f\u7528 16 \u6838\u5904\u7406\u5668\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5b58"),(0,n.kt)("td",{parentName:"tr",align:"left"},"32 GB\uff08\u81f3\u5c11\uff09\u3002\u5efa\u8bae\u4f7f\u7528 64 GB \u6216\u4ee5\u4e0a\u7684\u5185\u5b58\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u78c1\u76d8\u5bb9\u91cf"),(0,n.kt)("td",{parentName:"tr",align:"left"},"140 GB\uff08\u81f3\u5c11\uff09\u7528\u4e8e\u6d4b\u8bd5\uff0c\u5efa\u8bae\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528 500 GB \u6216\u4ee5\u4e0a\u7684\u78c1\u76d8\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u78c1\u76d8\u6027\u80fd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u4e2a\u78c1\u76d8 5,000+ \u968f\u673a IOPS (SSD/NVMe)\u3002\u7ba1\u7406\u8282\u70b9\uff08\u524d\u4e09\u4e2a\u8282\u70b9\uff09\u5fc5\u987b",(0,n.kt)("a",{parentName:"td",href:"https://www.ibm.com/cloud/blog/using-fio-to-tell-whether-your-storage-is-fast-enough-for-etcd"},"\u5bf9 etcd \u800c\u8a00\u8db3\u591f\u5feb"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u5361"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 Gbps \u4ee5\u592a\u7f51\uff08\u81f3\u5c11\uff09\u7528\u4e8e\u6d4b\u8bd5\uff0c\u5efa\u8bae\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528 10 Gbps \u6216\u4ee5\u4e0a\u7684\u4ee5\u592a\u7f51\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc\u4ea4\u6362\u673a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"VLAN \u652f\u6301\u6240\u9700\u7684\u7aef\u53e3\u4e2d\u7ee7\u3002")))),(0,n.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/iso-install"},"ISO")," \u6216 ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/pxe-boot-install"},"PXE")," \u6765\u5b89\u88c5 Harvester\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1\u4ee5\u4e0b\u8bf4\u660e\u3002"),(0,n.kt)("h3",{id:"iso-\u5b89\u88c5"},"ISO \u5b89\u88c5"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ISO\uff0c\u5c06 Harvester \u76f4\u63a5\u5b89\u88c5\u5728\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\u4e0a\uff0c\u6765\u7ec4\u6210\u4e00\u4e2a Harvester \u96c6\u7fa4\u3002\u7528\u6237\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u8ba1\u7b97\u8282\u70b9\u5230\u73b0\u6709\u7684\u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u9700\u8981\u83b7\u53d6 Harvester ISO\uff0c\u8bbf\u95ee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"GitHub \u4e0a\u7684\u53d1\u884c\u7248\u672c"),"\u8fdb\u884c\u4e0b\u8f7d\u3002"),(0,n.kt)("p",null,"\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u7ec4\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\uff0c\u6216\u8005\u5c06\u8282\u70b9\u52a0\u5165\u5230\u73b0\u6709\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u88c5 Harvester ISO \u78c1\u76d8\u5e76\u901a\u8fc7\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Installer")," \u6765\u542f\u52a8\u670d\u52a1\u5668\u3002\n",(0,n.kt)("img",{alt:"iso-install.png",src:r(2344).Z,width:"1429",height:"789"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u521b\u5efa\u65b0\u7684 Harvester \u96c6\u7fa4\u6216\u52a0\u5165\u73b0\u6709\u96c6\u7fa4\u6765\u9009\u62e9\u5b89\u88c5\u6a21\u5f0f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u5b89\u88c5 Harvester \u96c6\u7fa4\u7684\u8bbe\u5907\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHarvester \u5bf9 UEFI \u548c BIOS \u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GUID_Partition_Table"},"GPT")," \u5206\u533a\u67b6\u6784\u3002\u5982\u679c\u4f60\u4f7f\u7528 BIOS \u5f15\u5bfc\uff0c\u5219\u53ef\u4ee5\u9009\u62e9 ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Master_boot_record"},"MBR"),"\u3002\n",(0,n.kt)("img",{alt:"iso-install-disk.png",src:r(4886).Z,width:"2100",height:"674"})))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u914d\u7f6e\u4e3b\u673a\u540d\u5e76\u9009\u62e9\u7ba1\u7406\u7f51\u7edc\u7684\u7f51\u7edc\u63a5\u53e3\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHarvester \u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," \u7684\u7ed1\u5b9a NIC\uff0cIP \u5730\u5740\u53ef\u4ee5\u901a\u8fc7 DHCP \u8fdb\u884c\u914d\u7f6e\u6216\u9759\u6001\u5206\u914d\u3002",(0,n.kt)("small",null,"\uff08\u6ce8\u610f\uff1aNode IP \u5728 Harvester \u96c6\u7fa4\u7684\u751f\u547d\u5468\u671f\u4e2d\u65e0\u6cd5\u66f4\u6539\u3002\u5982\u679c\u4f7f\u7528\u4e86 DHCP\uff0c\u7528\u6237\u5fc5\u987b\u786e\u4fdd DHCP \u670d\u52a1\u5668\u59cb\u7ec8\u4e3a\u540c\u4e00\u4e2a\u8282\u70b9\u63d0\u4f9b\u76f8\u540c\u7684 IP\u3002\u7531\u4e8e\u8282\u70b9 IP \u53d1\u751f\u53d8\u5316\uff0c\u76f8\u5173\u8282\u70b9\u65e0\u6cd5\u52a0\u5165\u96c6\u7fa4\uff0c\u751a\u81f3\u4f1a\u7834\u574f\u96c6\u7fa4)\u3002")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"iso-installed.png",src:r(9776).Z,width:"422",height:"317"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u914d\u7f6e DNS \u670d\u52a1\u5668\uff1b\u4f7f\u7528\u9017\u53f7\u4f5c\u4e3a\u5206\u9694\u7b26\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u914d\u7f6e\u7528\u4e8e\u8bbf\u95ee\u96c6\u7fa4\u6216\u52a0\u5165\u96c6\u7fa4\u4e2d\u5176\u4ed6\u8282\u70b9\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"Virtual IP"),(0,n.kt)("small",null,"\uff08\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u7684 IP \u5730\u5740\u662f\u901a\u8fc7 DHCP \u914d\u7f6e\u7684\uff0c\u5219\u9700\u8981\u5728 DHCP \u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u9759\u6001 MAC \u5230 IP \u5730\u5740\u7684\u6620\u5c04\uff0c\u4ee5\u4fbf\u62e5\u6709\u6301\u4e45\u7684 Virtual IP\uff0cVIP \u5fc5\u987b\u4e0e\u6240\u6709\u8282\u70b9 IP \u90fd\u4e0d\u4e00\u6837\uff09\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster token"),"\u3002\u8fd9\u4e2a Token \u4f1a\u7528\u4e8e\u5c06\u5176\u4ed6\u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e3a\u4e3b\u673a\u914d\u7f6e\u767b\u5f55\u5bc6\u7801\u3002\u9ed8\u8ba4\u7684 SSH \u7528\u6237\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5efa\u8bae\u914d\u7f6e NTP \u670d\u52a1\u5668\u4ee5\u786e\u4fdd\u6240\u6709\u8282\u70b9\u7684\u65f6\u95f4\u540c\u6b65\u3002\u9ed8\u8ba4\u503c\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"0.suse.pool.ntp.org"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 HTTP \u4ee3\u7406\u6765\u8bbf\u95ee\u5916\u90e8\u73af\u5883\uff0c\u5728\u6b64\u5904\u8f93\u5165\u4ee3\u7406\u7684 URL\u3002\u5426\u5219\uff0c\u8bf7\u7559\u7a7a\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u4f60\u53ef\u4ee5\u4ece\u8fdc\u7aef\u670d\u52a1\u5668 URL \u5bfc\u5165 SSH \u5bc6\u94a5\u3002\u4f60\u7684 GitHub \u516c\u94a5\u53ef\u4ee5\u4e0e ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/<username>.keys")," \u4e00\u8d77\u4f7f\u7528\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/harvester-configuration"},"Harvester \u914d\u7f6e\u6587\u4ef6"),"\u6765\u81ea\u5b9a\u4e49\u4e3b\u673a\uff0c\u5728\u6b64\u5904\u8f93\u5165 HTTP URL\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u786e\u8ba4\u5b89\u88c5\u9009\u9879\u540e\uff0cHarvester \u4f1a\u81ea\u52a8\u5b89\u88c5\u5230\u4f60\u7684\u4e3b\u673a\u4e0a\u3002\u5b89\u88c5\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e3b\u673a\u4f1a\u5728\u5b89\u88c5\u5b8c\u6210\u540e\u91cd\u542f\uff0c\u7136\u540e\u4f1a\u663e\u793a\u4e00\u4e2a\u5e26\u6709\u7ba1\u7406 URL \u548c\u72b6\u6001\u7684\u63a7\u5236\u53f0 UI",(0,n.kt)("small",null,"\uff08\u4f60\u53ef\u4ee5\u4f7f\u7528 F12 \u5728 Harvester \u63a7\u5236\u53f0\u548c Shell \u4e4b\u95f4\u5207\u6362\uff09"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f51\u9875\u754c\u9762\u7684\u9ed8\u8ba4 URL \u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"https://your-virtual-ip"),"\u3002\n",(0,n.kt)("img",{alt:"iso-installed.png",src:r(9345).Z,width:"1580",height:"770"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u9996\u6b21\u767b\u5f55\u65f6\uff0c\u4f60\u4f1a\u6536\u5230\u4e3a\u9ed8\u8ba4 ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," \u7528\u6237\u8bbe\u7f6e\u5bc6\u7801\u7684\u63d0\u793a\u3002\n",(0,n.kt)("img",{alt:"first-login.png",src:r(2401).Z,width:"2555",height:"1295"})))),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/Ngsk7m6NYf4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h3",{id:"pxeipxe-\u5b89\u88c5"},"PXE/iPXE \u5b89\u88c5"),(0,n.kt)("p",null,"Harvester \u53ef\u4ee5\u81ea\u52a8\u5b89\u88c5\u3002\u5982\u679c\u9700\u8981\u83b7\u53d6\u8be6\u7ec6\u7684\u8bf4\u660e\u548c\u6307\u5bfc\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/pxe-boot-install"},"PXE \u5f15\u5bfc\u5b89\u88c5"),"\u3002"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u8bbf\u95ee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/ipxe-examples"},"harvester/ipxe-examples")," \u83b7\u53d6\u66f4\u591a iPXE \u7528\u6cd5\u793a\u4f8b\u3002")))}k.isMDXComponent=!0},348:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-6e8723efeab0d976b53f60c563e3e843.svg"},9013:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dashboard-dbd4bec01989ce3a6a3bb94a79f130f7.png"},2401:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},4886:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-install-disk-448de385a9bb510d494266872258c964.png"},2344:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-install-6aba87041f92c999707af7cea0f6619c.png"},9345:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-installed-f4263be997514c7510a5865390e66421.png"},9776:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-nic-config-4bb63338169e1e0595130056ad1676c0.gif"}}]);