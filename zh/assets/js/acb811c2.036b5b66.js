"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2,sidebar_label:"ISO \u5b89\u88c5",title:"",keywords:["Harvester","harvester","Rancher","rancher","ISO \u5b89\u88c5"],Description:"\u5982\u679c\u9700\u8981\u83b7\u53d6 Harvester ISO\uff0c\u8bbf\u95ee GitHub \u4e0a\u7684\u53d1\u884c\u7248\u672c\u8fdb\u884c\u4e0b\u8f7d\u3002\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u7ec4\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\uff0c\u6216\u8005\u5c06\u8282\u70b9\u52a0\u5165\u5230\u73b0\u6709\u7684\u96c6\u7fa4\u4e2d\u3002"},l="ISO \u5b89\u88c5",s={unversionedId:"install/iso-install",id:"install/iso-install",title:"",description:"\u5982\u679c\u9700\u8981\u83b7\u53d6 Harvester ISO \u955c\u50cf\uff0c\u8bbf\u95ee GitHub \u4e0a\u7684\u53d1\u884c\u7248\u672c\u8fdb\u884c\u4e0b\u8f7d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/iso-install.md",sourceDirName:"install",slug:"/install/iso-install",permalink:"/zh/install/iso-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/iso-install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"ISO \u5b89\u88c5",title:"",keywords:["Harvester","harvester","Rancher","rancher","ISO \u5b89\u88c5"],Description:"\u5982\u679c\u9700\u8981\u83b7\u53d6 Harvester ISO\uff0c\u8bbf\u95ee GitHub \u4e0a\u7684\u53d1\u884c\u7248\u672c\u8fdb\u884c\u4e0b\u8f7d\u3002\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u7ec4\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\uff0c\u6216\u8005\u5c06\u8282\u70b9\u52a0\u5165\u5230\u73b0\u6709\u7684\u96c6\u7fa4\u4e2d\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u8981\u6c42",permalink:"/zh/install/requirements"},next:{title:"U \u76d8\u5b89\u88c5",permalink:"/zh/install/usb-install"}},o={},p=[],c={toc:p};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iso-\u5b89\u88c5"},"ISO \u5b89\u88c5"),(0,n.kt)("p",null,"\u5982\u679c\u9700\u8981\u83b7\u53d6 Harvester ISO \u955c\u50cf\uff0c\u8bbf\u95ee ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"GitHub \u4e0a\u7684\u53d1\u884c\u7248\u672c"),"\u8fdb\u884c\u4e0b\u8f7d\u3002"),(0,n.kt)("p",null,"\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u7ec4\u5efa\u4e00\u4e2a\u65b0\u7684\u96c6\u7fa4\uff0c\u6216\u8005\u5c06\u8282\u70b9\u52a0\u5165\u5230\u73b0\u6709\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a\u8fd9\u4e2a",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/X0VIGZ_lExQ"},"\u89c6\u9891"),"\u6982\u8ff0\u4e86 ISO \u5b89\u88c5\u7684\u8fc7\u7a0b\u3002"),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/X0VIGZ_lExQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u88c5 Harvester ISO \u78c1\u76d8\u5e76\u901a\u8fc7\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Installer")," \u6765\u542f\u52a8\u670d\u52a1\u5668\u3002\n",(0,n.kt)("img",{alt:"iso-install.png",src:r(2344).Z,width:"1429",height:"789"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u521b\u5efa\u65b0\u7684 Harvester \u96c6\u7fa4\u6216\u52a0\u5165\u73b0\u6709\u96c6\u7fa4\u6765\u9009\u62e9\u5b89\u88c5\u6a21\u5f0f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u5b89\u88c5 Harvester \u96c6\u7fa4\u7684\u8bbe\u5907\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHarvester \u5bf9 UEFI \u548c BIOS \u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GUID_Partition_Table"},"GPT")," \u5206\u533a\u67b6\u6784\u3002\u5982\u679c\u4f60\u4f7f\u7528 BIOS \u5f15\u5bfc\uff0c\u5219\u53ef\u4ee5\u9009\u62e9 ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Master_boot_record"},"MBR"),"\u3002\n",(0,n.kt)("img",{alt:"iso-install-disk.png",src:r(4886).Z,width:"2100",height:"674"})))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u914d\u7f6e\u4e3b\u673a\u540d\u5e76\u9009\u62e9\u7ba1\u7406\u7f51\u7edc\u7684\u7f51\u7edc\u63a5\u53e3\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHarvester \u5c06\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," \u7684\u7ed1\u5b9a NIC\uff0cIP \u5730\u5740\u53ef\u4ee5\u901a\u8fc7 DHCP \u8fdb\u884c\u914d\u7f6e\u6216\u9759\u6001\u5206\u914d\u3002",(0,n.kt)("small",null,"\uff08\u6ce8\u610f\uff1aNode IP \u5728 Harvester \u96c6\u7fa4\u7684\u751f\u547d\u5468\u671f\u4e2d\u65e0\u6cd5\u66f4\u6539\u3002\u5982\u679c\u4f7f\u7528\u4e86 DHCP\uff0c\u7528\u6237\u5fc5\u987b\u786e\u4fdd DHCP \u670d\u52a1\u5668\u59cb\u7ec8\u4e3a\u540c\u4e00\u4e2a\u8282\u70b9\u63d0\u4f9b\u76f8\u540c\u7684 IP\u3002\u7531\u4e8e\u8282\u70b9 IP \u53d1\u751f\u53d8\u5316\uff0c\u76f8\u5173\u8282\u70b9\u65e0\u6cd5\u52a0\u5165\u96c6\u7fa4\uff0c\u751a\u81f3\u4f1a\u7834\u574f\u96c6\u7fa4)\u3002")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"iso-installed.png",src:r(9776).Z,width:"422",height:"317"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u914d\u7f6e DNS \u670d\u52a1\u5668\u3002\u4f7f\u7528\u9017\u53f7\u4f5c\u4e3a\u5206\u9694\u7b26\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u914d\u7f6e\u7528\u4e8e\u8bbf\u95ee\u96c6\u7fa4\u6216\u52a0\u5165\u96c6\u7fa4\u4e2d\u5176\u4ed6\u8282\u70b9\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"Virtual IP"),(0,n.kt)("small",null,"\uff08\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u7684 IP \u5730\u5740\u662f\u901a\u8fc7 DHCP \u914d\u7f6e\u7684\uff0c\u5219\u9700\u8981\u5728 DHCP \u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u9759\u6001 MAC \u5230 IP \u5730\u5740\u7684\u6620\u5c04\uff0c\u4ee5\u4fbf\u62e5\u6709\u6301\u4e45\u7684 Virtual IP\uff0cVIP \u5fc5\u987b\u4e0e\u6240\u6709\u8282\u70b9 IP \u90fd\u4e0d\u4e00\u6837\uff09\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster token"),"\u3002\u8fd9\u4e2a Token \u4f1a\u7528\u4e8e\u5c06\u5176\u4ed6\u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e3a\u4e3b\u673a\u914d\u7f6e\u767b\u5f55\u5bc6\u7801\u3002\u9ed8\u8ba4\u7684 SSH \u7528\u6237\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5efa\u8bae\u914d\u7f6e NTP \u670d\u52a1\u5668\u4ee5\u786e\u4fdd\u6240\u6709\u8282\u70b9\u7684\u65f6\u95f4\u540c\u6b65\u3002\u9ed8\u8ba4\u503c\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"0.suse.pool.ntp.org"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 HTTP \u4ee3\u7406\u6765\u8bbf\u95ee\u5916\u90e8\u73af\u5883\uff0c\u5728\u6b64\u5904\u8f93\u5165\u4ee3\u7406\u7684 URL\u3002\u5426\u5219\uff0c\u8bf7\u7559\u7a7a\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u4f60\u53ef\u4ee5\u4ece\u8fdc\u7aef\u670d\u52a1\u5668 URL \u5bfc\u5165 SSH \u5bc6\u94a5\u3002\u4f60\u7684 GitHub \u516c\u94a5\u53ef\u4ee5\u4e0e ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/<username>.keys")," \u4e00\u8d77\u4f7f\u7528\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uff08\u53ef\u9009\uff09\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/harvester-configuration"},"Harvester \u914d\u7f6e\u6587\u4ef6"),"\u6765\u81ea\u5b9a\u4e49\u4e3b\u673a\uff0c\u5728\u6b64\u5904\u8f93\u5165 HTTP URL\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u786e\u8ba4\u5b89\u88c5\u9009\u9879\u540e\uff0cHarvester \u4f1a\u81ea\u52a8\u5b89\u88c5\u5230\u4f60\u7684\u4e3b\u673a\u4e0a\u3002\u5b89\u88c5\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e3b\u673a\u4f1a\u5728\u5b89\u88c5\u5b8c\u6210\u540e\u91cd\u542f\u3002\u91cd\u542f\u540e\uff0c\u5305\u542b\u7ba1\u7406 URL \u548c\u72b6\u6001\u7684 Harvester \u63a7\u5236\u53f0\u4f1a\u663e\u793a\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"F12")," \u5728 Harvester \u63a7\u5236\u53f0\u548c Shell \u4e4b\u95f4\u5207\u6362\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f51\u9875\u754c\u9762\u7684\u9ed8\u8ba4 URL \u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"https://your-virtual-ip"),"\u3002\n",(0,n.kt)("img",{alt:"iso-installed.png",src:r(9345).Z,width:"1580",height:"770"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u9996\u6b21\u767b\u5f55\u65f6\uff0c\u4f60\u4f1a\u6536\u5230\u4e3a\u9ed8\u8ba4 ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," \u7528\u6237\u8bbe\u7f6e\u5bc6\u7801\u7684\u63d0\u793a\u3002\n",(0,n.kt)("img",{alt:"first-login.png",src:r(2401).Z,width:"2555",height:"1295"})))))}m.isMDXComponent=!0},2401:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},4886:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-install-disk-448de385a9bb510d494266872258c964.png"},2344:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-install-6aba87041f92c999707af7cea0f6619c.png"},9345:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-installed-f4263be997514c7510a5865390e66421.png"},9776:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/iso-nic-config-4bb63338169e1e0595130056ad1676c0.gif"}}]);