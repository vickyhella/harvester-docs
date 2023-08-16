"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7230],{3905:(A,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>o});var r=t(67294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,r,a=function(A,e){if(null==A)return{};var t,r,a={},n=Object.keys(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var g=r.createContext({}),I=function(A){var e=r.useContext(g),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},p=function(A){var e=I(A.components);return r.createElement(g.Provider,{value:e},A.children)},C={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(A,e){var t=A.components,a=A.mdxType,n=A.originalType,g=A.parentName,p=l(A,["components","mdxType","originalType","parentName"]),s=I(t),o=a,f=s["".concat(g,".").concat(o)]||s[o]||C[o]||n;return t?r.createElement(f,i(i({ref:e},p),{},{components:t})):r.createElement(f,i({ref:e},p))}));function o(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var n=t.length,i=new Array(n);i[0]=s;var l={};for(var g in e)hasOwnProperty.call(e,g)&&(l[g]=e[g]);l.originalType=A,l.mdxType="string"==typeof A?A:a,i[1]=l;for(var I=2;I<n;I++)i[I]=t[I];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},36761:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>g,contentTitle:()=>i,default:()=>C,frontMatter:()=>n,metadata:()=>l,toc:()=>I});var r=t(87462),a=(t(67294),t(3905));const n={sidebar_position:2,sidebar_label:"ISO \u5b89\u88c5",title:"ISO \u5b89\u88c5",keywords:["Harvester","harvester","Rancher","rancher","ISO \u5b89\u88c5"],Description:"\u5982\u679c\u9700\u8981\u83b7\u53d6 Harvester ISO\uff0c\u8bbf\u95ee GitHub \u4e0a\u7684\u53d1\u884c\u7248\u672c\u8fdb\u884c\u4e0b\u8f7d\u3002\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u7ec4\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\uff0c\u6216\u8005\u5c06\u8282\u70b9\u52a0\u5165\u5230\u73b0\u6709\u7684\u96c6\u7fa4\u4e2d\u3002"},i=void 0,l={unversionedId:"install/iso-install",id:"install/iso-install",title:"ISO \u5b89\u88c5",description:"\u5b89\u88c5\u6b65\u9aa4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/iso-install.md",sourceDirName:"install",slug:"/install/iso-install",permalink:"/harvester-docs/zh/dev/install/iso-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/iso-install.md",tags:[],version:"current",lastUpdatedAt:1691790733,formattedLastUpdatedAt:"2023\u5e748\u670811\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"ISO \u5b89\u88c5",title:"ISO \u5b89\u88c5",keywords:["Harvester","harvester","Rancher","rancher","ISO \u5b89\u88c5"],Description:"\u5982\u679c\u9700\u8981\u83b7\u53d6 Harvester ISO\uff0c\u8bbf\u95ee GitHub \u4e0a\u7684\u53d1\u884c\u7248\u672c\u8fdb\u884c\u4e0b\u8f7d\u3002\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u7ec4\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\uff0c\u6216\u8005\u5c06\u8282\u70b9\u52a0\u5165\u5230\u73b0\u6709\u7684\u96c6\u7fa4\u4e2d\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",permalink:"/harvester-docs/zh/dev/install/requirements"},next:{title:"U \u76d8\u5b89\u88c5",permalink:"/harvester-docs/zh/dev/install/usb-install"}},g={},I=[{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2},{value:"\u4f7f\u7528\u8f83\u65e7\u7684\u663e\u5361/\u663e\u793a\u5668\u65f6\uff0c\u5b89\u88c5\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u5d29\u6e83",id:"\u4f7f\u7528\u8f83\u65e7\u7684\u663e\u5361\u663e\u793a\u5668\u65f6\u5b89\u88c5\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u5d29\u6e83",level:3}],p={toc:I};function C(A){let{components:e,...n}=A;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b89\u88c5\u6b65\u9aa4"},"\u5b89\u88c5\u6b65\u9aa4"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u83b7\u53d6 Harvester ISO \u955c\u50cf\uff0c\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"GitHub \u4e0a\u7684\u53d1\u884c\u7248\u672c"),"\u8fdb\u884c\u4e0b\u8f7d\u3002"),(0,a.kt)("p",null,"\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u7ec4\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\uff0c\u6216\u8005\u5c06\u8282\u70b9\u52a0\u5165\u5230\u73b0\u6709\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u8fd9\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/X0VIGZ_lExQ"},"\u89c6\u9891"),"\u6982\u8ff0\u4e86 ISO \u5b89\u88c5\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("div",{class:"text-center"},(0,a.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/X0VIGZ_lExQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6302\u8f7d Harvester ISO \u78c1\u76d8\u5e76\u901a\u8fc7\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester Installer")," \u6765\u542f\u52a8\u670d\u52a1\u5668\u3002\n",(0,a.kt)("img",{alt:"iso-install.png",src:t(80870).Z,width:"1531",height:"1150"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u4e00\u4e2a\u5b89\u88c5\u6a21\u5f0f\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Harvester \u96c6\u7fa4\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e00\u4e2a\u8282\u70b9\u5c06\u662f\u96c6\u7fa4\u7684\u7ba1\u7406\u8282\u70b9\u3002\u5f53\u6709 3 \u4e2a\u8282\u70b9\u65f6\uff0c\u9996\u5148\u6dfb\u52a0\u7684\u53e6\u5916 2 \u4e2a\u8282\u70b9\u4f1a\u81ea\u52a8\u63d0\u5347\u4e3a\u7ba1\u7406\u8282\u70b9\uff0c\u4ece\u800c\u5f62\u6210 HA \u96c6\u7fa4\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u60f3\u63d0\u5347\u5176\u5b83\u5730\u533a\u7684\u7ba1\u7406\u8282\u70b9\uff0c\u4f60\u53ef\u4ee5\u5728\u6267\u884c\u81ea\u5b9a\u4e49\u4e3b\u673a\u7684\u6b65\u9aa4\u65f6\u63d0\u4f9b\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/install/harvester-configuration"},"Harvester \u914d\u7f6e"),"\u7684 URL\uff0c\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/install/harvester-configuration#oslabels"},"os.labels")," \u4e2d\u6dfb\u52a0\u8282\u70b9\u6807\u7b7e ",(0,a.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/zone"),"\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u81f3\u5c11\u9700\u8981\u4e09\u4e2a\u4e0d\u540c\u7684\u5730\u533a\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u52a0\u5165\u4e00\u4e2a\u73b0\u6709\u7684 Harvester \u96c6\u7fa4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4ec5\u5b89\u88c5 Harvester \u7cfb\u7edf\u6587\u4ef6\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5982\u679c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"Install Harvester binaries only")," \uff0c\u5219\u9700\u8981\u5728\u9996\u6b21\u542f\u52a8\u540e\u8fdb\u884c\u989d\u5916\u7684\u8bbe\u7f6e\u3002"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u5b89\u88c5 Harvester \u96c6\u7fa4\u7684\u8bbe\u5907\u3002\n",(0,a.kt)("img",{alt:"select-disk.png",src:t(25200).Z,width:"1531",height:"1151"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHarvester \u5bf9 UEFI \u548c BIOS \u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GUID_Partition_Table"},"GPT")," \u5206\u533a\u8868\u3002\u5982\u679c\u4f60\u4f7f\u7528 BIOS \u5f15\u5bfc\uff0c\u5219\u53ef\u4ee5\u9009\u62e9 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Master_boot_record"},"MBR"),"\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5f53\u4f60\u7684\u673a\u5668\u4ec5\u5b89\u88c5\u4e86\u4e00\u5757\u78c1\u76d8\uff0c\u6216\u4f7f\u7528\u76f8\u540c\u7684\u78c1\u76d8\u6765\u5b58\u50a8\u64cd\u4f5c\u7cfb\u7edf\u548c VM \u6570\u636e\u65f6\uff0c\u4f60\u9700\u8981\u914d\u7f6e\u6301\u4e45\u5206\u533a\u5927\u5c0f\uff0c\u7528\u4e8e\u5b58\u50a8\u7cfb\u7edf\u8f6f\u4ef6\u5305\u548c\u5bb9\u5668\u955c\u50cf\uff0c\u5176\u9ed8\u8ba4\u503c\u548c\u6700\u5c0f\u503c\u5747\u4e3a 150 GB\u3002"))),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5efa\u8bae\u9009\u62e9\u4e00\u4e2a\u5355\u72ec\u7684\u78c1\u76d8\u6765\u5b58\u50a8 VM \u6570\u636e\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e3a\u8fd9\u4e2a\u8282\u70b9\u914d\u7f6e\u4e00\u4e2a\u4e3b\u673a\u540d\u3002\n",(0,a.kt)("img",{alt:"config-hostname.png",src:t(40089).Z,width:"1528",height:"1150"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u7ba1\u7406\u7f51\u7edc\u7684\u7f51\u7edc\u63a5\u53e3\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHarvester \u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-bo")," \u7684 Bond NIC\uff0cIP \u5730\u5740\u53ef\u4ee5\u901a\u8fc7 DHCP \u8fdb\u884c\u914d\u7f6e\u6216\u9759\u6001\u5206\u914d\u3002\n",(0,a.kt)("img",{alt:"config-network.png",src:t(15496).Z,width:"1533",height:"1150"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u8282\u70b9 IP \u5728Harvester \u96c6\u7fa4\u7684\u751f\u547d\u5468\u671f\u4e2d\u4e0d\u53ef\u66f4\u6539\u3002\u5982\u679c\u4f7f\u7528\u4e86 DHCP\uff0c\u7528\u6237\u5fc5\u987b\u786e\u4fdd DHCP \u670d\u52a1\u5668\u59cb\u7ec8\u4e3a\u540c\u4e00\u4e2a\u8282\u70b9\u63d0\u4f9b\u76f8\u540c\u7684 IP\u3002\u5982\u679c\u8282\u70b9 IP \u53d1\u751f\u53d8\u5316\uff0c\u76f8\u5173\u8282\u70b9\u5c06\u65e0\u6cd5\u52a0\u5165\u96c6\u7fa4\uff0c\u751a\u81f3\u53ef\u80fd\u7834\u574f\u96c6\u7fa4\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u914d\u7f6e DNS \u670d\u52a1\u5668\u3002\u4f7f\u7528\u9017\u53f7\u4f5c\u4e3a\u5206\u9694\u7b26\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u7528\u4e8e\u8bbf\u95ee\u96c6\u7fa4\u6216\u52a0\u5165\u96c6\u7fa4\u4e2d\u5176\u4ed6\u8282\u70b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Virtual IP"),"\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u7684 IP \u5730\u5740\u662f\u901a\u8fc7 DHCP \u914d\u7f6e\u7684\uff0c\u5219\u9700\u8981\u5728 DHCP \u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u9759\u6001 MAC \u5230 IP \u5730\u5740\u7684\u6620\u5c04\uff0c\u4ee5\u4fbf\u62e5\u6709\u6301\u4e45\u7684 Virtual IP\uff0cVIP \u5fc5\u987b\u4e0e\u6240\u6709\u8282\u70b9 IP \u90fd\u4e0d\u4e00\u6837\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster token"),"\u3002\u8fd9\u4e2a Token \u4f1a\u7528\u4e8e\u5c06\u5176\u4ed6\u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e3a\u4e3b\u673a\u914d\u7f6e\u767b\u5f55\u5bc6\u7801\u3002\u9ed8\u8ba4\u7684 SSH \u7528\u6237\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5efa\u8bae\u914d\u7f6e NTP \u670d\u52a1\u5668\u4ee5\u786e\u4fdd\u6240\u6709\u8282\u70b9\u7684\u65f6\u95f4\u540c\u6b65\u3002\u9ed8\u8ba4\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"0.suse.pool.ntp.org"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 HTTP \u4ee3\u7406\u6765\u8bbf\u95ee\u5916\u90e8\u73af\u5883\uff0c\u5728\u6b64\u5904\u8f93\u5165\u4ee3\u7406\u7684 URL\u3002\u5426\u5219\uff0c\u8bf7\u7559\u7a7a\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u4f60\u53ef\u4ee5\u4ece\u8fdc\u7aef\u670d\u52a1\u5668 URL \u5bfc\u5165 SSH \u5bc6\u94a5\u3002\u4f60\u7684 GitHub \u516c\u94a5\u53ef\u4ee5\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/<username>.keys")," \u4e00\u8d77\u4f7f\u7528\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/install/harvester-configuration"},"Harvester \u914d\u7f6e\u6587\u4ef6"),"\u6765\u81ea\u5b9a\u4e49\u4e3b\u673a\uff0c\u5728\u6b64\u5904\u8f93\u5165 HTTP URL\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u786e\u8ba4\u5b89\u88c5\u9009\u9879\u540e\uff0cHarvester \u4f1a\u5b89\u88c5\u5230\u4f60\u7684\u4e3b\u673a\u4e0a\u3002\u5b89\u88c5\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e3b\u673a\u4f1a\u5728\u5b89\u88c5\u5b8c\u6210\u540e\u91cd\u542f\u3002\u91cd\u542f\u540e\uff0c\u5305\u542b\u7ba1\u7406 URL \u548c\u72b6\u6001\u7684 Harvester \u63a7\u5236\u53f0\u4f1a\u663e\u793a\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"F12")," \u4ece Harvester \u63a7\u5236\u53f0\u5207\u6362\u5230 Shell\uff0c\u952e\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," \u56de\u5230 Harvester \u63a7\u5236\u53f0\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u5728\u7b2c\u4e00\u9875\u9009\u62e9\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"Install Harvester binaries only"),"\uff0c\u5219\u9700\u8981\u5728\u9996\u6b21\u542f\u52a8\u540e\u8fdb\u884c\u989d\u5916\u7684\u8bbe\u7f6e\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7f51\u9875\u754c\u9762\u7684\u9ed8\u8ba4 URL \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your-virtual-ip"),"\u3002\n",(0,a.kt)("img",{alt:"iso-installed.png",src:t(80115).Z,width:"1530",height:"1150"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u9996\u6b21\u767b\u5f55\u65f6\uff0c\u4f60\u4f1a\u6536\u5230\u4e3a\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," \u7528\u6237\u8bbe\u7f6e\u5bc6\u7801\u7684\u63d0\u793a\u3002\n",(0,a.kt)("img",{alt:"first-login.png",src:t(28910).Z,width:"2555",height:"1295"})))),(0,a.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u8f83\u65e7\u7684\u663e\u5361\u663e\u793a\u5668\u65f6\u5b89\u88c5\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u5d29\u6e83"},"\u4f7f\u7528\u8f83\u65e7\u7684\u663e\u5361/\u663e\u793a\u5668\u65f6\uff0c\u5b89\u88c5\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u5d29\u6e83"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u8f83\u65e7\u7684\u663e\u5361/\u663e\u793a\u5668\uff0c\u4f60\u53ef\u80fd\u4f1a\u5728 ISO \u5b89\u88c5\u8fc7\u7a0b\u4e2d\u9047\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"panic: invalid dimensions")," \u9519\u8bef\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"invalid-dimensions.png",src:t(22541).Z,width:"799",height:"591"})),(0,a.kt)("p",null,"\u6211\u4eec\u6b63\u5728\u5904\u7406\u8fd9\u4e2a\u5df2\u77e5\u95ee\u9898\uff0c\u5e76\u5c06\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\u4fee\u590d\u5b83\u3002\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u53e6\u5916\u4e00\u4e2a GRUB \u5f15\u5bfc\u9009\u9879\u4f7f\u5176\u5728\u542f\u52a8\u65f6\u5c06\u5206\u8fa8\u7387\u5f3a\u5236\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"1024x768x24"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"force-resolution.png",src:t(79870).Z,width:"1537",height:"1149"})),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528\u65e9\u4e8e v1.1.1 \u7684\u7248\u672c\uff0c\u8bf7\u5c1d\u8bd5\u4f7f\u7528\u4ee5\u4e0b\u4e34\u65f6\u89e3\u51b3\u65b9\u6848\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528ISO\u542f\u52a8\uff0c\u7136\u540e\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," \u7f16\u8f91\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879\uff1a\n",(0,a.kt)("img",{alt:"grub-menu.png",src:t(16165).Z,width:"1692",height:"946"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"vga=792")," \u9644\u52a0\u5230\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"$linux")," \u5f00\u5934\u7684\u884c\uff1a\n",(0,a.kt)("img",{alt:"edit-menu-entry.png",src:t(67467).Z,width:"1695",height:"941"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+X")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"F10")," \u542f\u52a8\u3002"))))}C.isMDXComponent=!0},40089:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/config-hostname-d67c1469ab1fffa2049fca4926f90cbc.png"},15496:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/config-network-e092779c5fbf14822d62f74a1c5980e2.png"},67467:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/edit-menu-entry-c532986f01fb640a5d340b42c679777f.png"},28910:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},79870:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/force-resolution-837f06b1ec664c755770590ae133dacc.png"},16165:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/grub-menu-517ed670d5e93618eaee9d106b45e469.png"},22541:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACI+FNb4f1+J9oBAAA83P8CLNTuJ9yKCScAAAAASUVORK5CYII="},80870:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/iso-install-261e533c59b852a50c2bd8abf09ebf3c.png"},80115:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/iso-installed-8acd6980132f3402a086b63624ec9abf.png"},25200:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/select-disk-6645e7bf84615485772b44e4d024575d.png"}}]);