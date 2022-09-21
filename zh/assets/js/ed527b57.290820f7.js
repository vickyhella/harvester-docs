"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5119:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3,sidebar_label:"\u7f16\u8f91\u865a\u62df\u673a",title:"",keywords:["Harvester","harvester","Rancher","rancher","\u865a\u62df\u673a","VM","\u7f16\u8f91\u865a\u62df\u673a"],Description:"\u5728 Harvester VM \u9875\u9762\u7f16\u8f91\u865a\u62df\u673a\u3002"},o="\u7f16\u8f91\u865a\u62df\u673a",s={unversionedId:"vm/edit-vm",id:"vm/edit-vm",title:"",description:"\u5982\u4f55\u7f16\u8f91\u865a\u62df\u673a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/edit-vm.md",sourceDirName:"vm",slug:"/vm/edit-vm",permalink:"/harvester-docs/zh/vm/edit-vm",draft:!1,editUrl:"https://github.com/vickyhella/harvester-docs/edit/main/docs/vm/edit-vm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u7f16\u8f91\u865a\u62df\u673a",title:"",keywords:["Harvester","harvester","Rancher","rancher","\u865a\u62df\u673a","VM","\u7f16\u8f91\u865a\u62df\u673a"],Description:"\u5728 Harvester VM \u9875\u9762\u7f16\u8f91\u865a\u62df\u673a\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa Windows \u865a\u62df\u673a",permalink:"/harvester-docs/zh/vm/create-windows-vm"},next:{title:"\u8bbf\u95ee\u865a\u62df\u673a",permalink:"/harvester-docs/zh/vm/access-to-the-vm"}},l={},c=[{value:"\u5982\u4f55\u7f16\u8f91\u865a\u62df\u673a",id:"\u5982\u4f55\u7f16\u8f91\u865a\u62df\u673a",level:2},{value:"\u57fa\u672c\u4fe1\u606f",id:"\u57fa\u672c\u4fe1\u606f",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:3},{value:"\u5377",id:"\u5377",level:3},{value:"\u8bbf\u95ee\u51ed\u8bc1",id:"\u8bbf\u95ee\u51ed\u8bc1",level:3}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7f16\u8f91\u865a\u62df\u673a"},"\u7f16\u8f91\u865a\u62df\u673a"),(0,a.kt)("h2",{id:"\u5982\u4f55\u7f16\u8f91\u865a\u62df\u673a"},"\u5982\u4f55\u7f16\u8f91\u865a\u62df\u673a"),(0,a.kt)("p",null,"\u521b\u5efa\u865a\u62df\u673a\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"\u22ee")," \u6309\u94ae\u5e76\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Configurations")," \u6309\u94ae\u6765\u7f16\u8f91\u865a\u62df\u673a\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u7f16\u8f91\u63cf\u8ff0\u4e4b\u5916\uff0c\u4f60\u8fd8\u9700\u8981\u91cd\u542f\u865a\u62df\u673a\u624d\u80fd\u4f7f\u914d\u7f6e\u66f4\u6539\u751f\u6548\u3002")),(0,a.kt)("h3",{id:"\u57fa\u672c\u4fe1\u606f"},"\u57fa\u672c\u4fe1\u606f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Basics")," \u9009\u9879\u5361\u4e0a\u914d\u7f6e\u6240\u9700\u7684 CPU \u548c\u5185\u5b58\uff0c\u6b64\u914d\u7f6e\u9700\u8981\u91cd\u542f VM \u624d\u80fd\u751f\u6548\u3002"),(0,a.kt)("p",null,"\u9996\u6b21\u542f\u52a8\u865a\u62df\u673a\u65f6\uff0cSSH \u5bc6\u94a5\u4f1a\u88ab\u6ce8\u5165\u5230 cloud-init \u811a\u672c\u4e2d\u3002\u4e3a\u4e86\u4f7f\u4fee\u6539\u540e\u7684 SSH \u5bc6\u94a5\u5728\u865a\u62df\u673a\u542f\u52a8\u540e\u751f\u6548\uff0c\u4f60\u9700\u8981\u5728 Guest \u64cd\u4f5c\u7cfb\u7edf\u4e2d",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/faq#%E5%A6%82%E4%BD%95%E5%9C%A8%E8%BF%90%E8%A1%8C%E7%9A%84%E8%99%9A%E6%8B%9F%E6%9C%BA%E4%B8%8A%E5%AE%89%E8%A3%85-qemu-guest-agent"},"\u91cd\u65b0\u5b89\u88c5")," cloud-init \u811a\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-vm",src:r(235).Z,width:"4410",height:"1830"})),(0,a.kt)("h3",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u542f\u52a8\u540e\u5411 VM \u5b9e\u4f8b\u6dfb\u52a0\u5176\u4ed6 VLAN \u7f51\u7edc\u3002\u5982\u679c\u4f60\u914d\u7f6e\u4e86 VLAN \u7f51\u7edc\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u7ba1\u7406\u7f51\u7edc")," \u662f\u53ef\u9009\u7684\u3002"),(0,a.kt)("p",null,"\u9664\u975e\u4f60\u5728 Guest \u64cd\u4f5c\u7cfb\u7edf\u4e2d\u624b\u52a8\u914d\u7f6e\u4e86\u5176\u4ed6 NIC\uff08\u4f8b\u5982",(0,a.kt)("a",{parentName:"p",href:"https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-network.html#sec-network-manconf"},"\u5c06 wicked \u7528\u4e8e OpenSUSE Server")," \u6216",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/server/docs/network-configuration"},"\u5c06 netplan \u7528\u4e8e Ubuntu Server"),"\uff09\uff0c\u5426\u5219\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u542f\u7528\u5176\u4ed6 NIC\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-vm",src:r(514).Z,width:"4364",height:"1298"})),(0,a.kt)("p",null,"\u6709\u5173\u7f51\u7edc\u5b9e\u73b0\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/networking/harvester-network"},"\u7f51\u7edc"),"\u9875\u9762\u3002"),(0,a.kt)("h3",{id:"\u5377"},"\u5377"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u542f\u52a8\u540e\u5411 VM \u6dfb\u52a0\u5176\u4ed6\u5377\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u5173\u95ed\u865a\u62df\u673a\u540e\u6269\u5c55\u5377\u7684\u5927\u5c0f\uff0c\u5373\u901a\u8fc7\u70b9\u51fb\u865a\u62df\u673a\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"Volumes")," \u9009\u9879\u5361\uff0c\u7136\u540e\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Image Volume")," \u6765\u7f16\u8f91\u5377\u7684\u5927\u5c0f\u3002\u5927\u5c0f\u8c03\u6574\u5b8c\u6210\u5e76\u91cd\u542f VM \u540e\uff0c\u4f60\u7684\u78c1\u76d8\u5c06\u81ea\u52a8\u5b8c\u6210\u6269\u5c55\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-vm",src:r(5349).Z,width:"4328",height:"1652"})),(0,a.kt)("h3",{id:"\u8bbf\u95ee\u51ed\u8bc1"},"\u8bbf\u95ee\u51ed\u8bc1"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684 Guest \u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u4e86 QUEMU GuestAgent\uff0c\u8bbf\u95ee\u51ed\u8bc1\u5c06\u5141\u8bb8\u4f60\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u6ce8\u5165\u57fa\u672c\u8ba4\u8bc1\u6216 SSH \u5bc6\u94a5\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/vm/access-to-the-vm#%E9%80%9A%E8%BF%87-qemu-guest-agent-%E8%BF%9B%E8%A1%8C%E5%8A%A8%E6%80%81-ssh-%E5%AF%86%E9%92%A5%E6%B3%A8%E5%85%A5"},"\u901a\u8fc7 QEMU Guest Agent \u8fdb\u884c\u52a8\u6001 SSH \u5bc6\u94a5\u6ce8\u5165"),"\u3002"))}d.isMDXComponent=!0},235:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-vm-basics-eaf16ba218734075de03443a9304b1c5.png"},514:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-vm-networks-fd853639d0ba1d31996c3581f349a895.png"},5349:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-vm-volumes-b2628811127878fff20680cdb259b3bc.png"}}]);