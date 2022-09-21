"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(r),m=a,d=k["".concat(o,".").concat(m)]||k[m]||u[m]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:1,sidebar_label:"Harvester \u7f51\u7edc",title:"",keywords:["Harvester","harvester","Rancher","rancher","\u5347\u7ea7 Harvester"],Description:"Harvester \u6784\u5efa\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u800c Kubernetes \u4f7f\u7528 CNI \u4f5c\u4e3a\u7f51\u7edc\u63d0\u4f9b\u5546\u548c Kubernetes Pod \u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e5f\u57fa\u4e8e CNI \u5b9e\u73b0 Harvester \u7f51\u7edc\u3002\u6b64\u5916\uff0cHarvester UI \u96c6\u6210\u4e86 Harvester \u7f51\u7edc\uff0c\u6765\u5b9e\u73b0\u7528\u6237\u53cb\u597d\u7684\u865a\u62df\u673a\u7f51\u7edc\u914d\u7f6e\u3002"},i="Harvester \u7f51\u7edc",s={unversionedId:"networking/harvester-network",id:"networking/harvester-network",title:"",description:"Harvester \u6784\u5efa\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u5e76\u4f7f\u7528\u5176\u5185\u7f6e\u7684 CNI \u673a\u5236\u6765\u63d0\u4f9b\u7f51\u7edc\u63d0\u4f9b\u5546\u4e0e\u865a\u62df\u673a\u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/networking/harvester-network.md",sourceDirName:"networking",slug:"/networking/harvester-network",permalink:"/zh/networking/harvester-network",draft:!1,editUrl:"https://github.com/vickyhella/harvester-docs/edit/main/docs/docs/networking/harvester-network.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester \u7f51\u7edc",title:"",keywords:["Harvester","harvester","Rancher","rancher","\u5347\u7ea7 Harvester"],Description:"Harvester \u6784\u5efa\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u800c Kubernetes \u4f7f\u7528 CNI \u4f5c\u4e3a\u7f51\u7edc\u63d0\u4f9b\u5546\u548c Kubernetes Pod \u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e5f\u57fa\u4e8e CNI \u5b9e\u73b0 Harvester \u7f51\u7edc\u3002\u6b64\u5916\uff0cHarvester UI \u96c6\u6210\u4e86 Harvester \u7f51\u7edc\uff0c\u6765\u5b9e\u73b0\u7528\u6237\u53cb\u597d\u7684\u865a\u62df\u673a\u7f51\u7edc\u914d\u7f6e\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u8d44\u6e90\u8d85\u91cf",permalink:"/zh/vm/resource-overcommit"},next:{title:"\u6982\u8ff0",permalink:"/zh/networking/best-practice/overview"}},o={},p=[{value:"\u7ba1\u7406\u7f51\u7edc",id:"\u7ba1\u7406\u7f51\u7edc",level:2},{value:"VLAN \u7f51\u7edc",id:"vlan-\u7f51\u7edc",level:2},{value:"\u542f\u7528\u9ed8\u8ba4 VLAN \u7f51\u7edc",id:"\u542f\u7528\u9ed8\u8ba4-vlan-\u7f51\u7edc",level:3},{value:"\u521b\u5efa VLAN \u7f51\u7edc",id:"\u521b\u5efa-vlan-\u7f51\u7edc",level:3},{value:"\u4f7f\u7528 VLAN \u7f51\u7edc\u521b\u5efa\u865a\u62df\u673a",id:"\u4f7f\u7528-vlan-\u7f51\u7edc\u521b\u5efa\u865a\u62df\u673a",level:3},{value:"\u5728\u7f51\u7edc\u4e0a\u914d\u7f6e DHCP \u670d\u52a1\u5668",id:"\u5728\u7f51\u7edc\u4e0a\u914d\u7f6e-dhcp-\u670d\u52a1\u5668",level:3}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"harvester-\u7f51\u7edc"},"Harvester \u7f51\u7edc"),(0,a.kt)("p",null,"Harvester \u6784\u5efa\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," \u4e4b\u4e0a\uff0c\u5e76\u4f7f\u7528\u5176\u5185\u7f6e\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni"},"CNI")," \u673a\u5236\u6765\u63d0\u4f9b\u7f51\u7edc\u63d0\u4f9b\u5546\u4e0e\u865a\u62df\u673a\u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u4e86\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI \u7684 Harvester VLAN \u7f51\u7edc\uff0c\u4ee5\u63d0\u4f9b\u7eaf L2 \u6a21\u5f0f\u7f51\u7edc\uff0c\u4ece\u800c\u5c06\u4f60\u7684\u865a\u62df\u673a\u6865\u63a5\u5230\u4e3b\u673a\u7f51\u7edc\u63a5\u53e3\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u7269\u7406\u4ea4\u6362\u673a\u8fde\u63a5\u5185\u90e8\u548c\u5916\u90e8\u7f51\u7edc\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0cHarvester UI \u96c6\u6210\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/network-controller-harvester"},"harvester-network-controller")," \u4ee5\u63d0\u4f9b\u7528\u6237\u53cb\u597d\u7684 VLAN \u7f51\u7edc\u914d\u7f6e\uff0c\u4f8b\u5982\uff0c\u521b\u5efa\u548c\u7ba1\u7406 VLAN \u7f51\u7edc\u6216\u5c06 VLAN \u7f51\u7edc\u6dfb\u52a0\u5230\u865a\u62df\u673a\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\uff0cHarvester \u652f\u6301\u4e24\u79cd\u7c7b\u578b\u7684\u7f51\u7edc\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E7%AE%A1%E7%90%86%E7%BD%91%E7%BB%9C"},"\u7ba1\u7406\u7f51\u7edc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#vlan-%E7%BD%91%E7%BB%9C"},"VLAN \u7f51\u7edc"))),(0,a.kt)("h2",{id:"\u7ba1\u7406\u7f51\u7edc"},"\u7ba1\u7406\u7f51\u7edc"),(0,a.kt)("p",null,"Harvester \u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/flannel/flannel"},"canal")," \u4f5c\u4e3a\u9ed8\u8ba4\u7ba1\u7406\u7f51\u7edc\u3002\u5b83\u662f\u4e00\u4e2a\u5185\u7f6e\u7f51\u7edc\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece\u96c6\u7fa4\u4e2d\u4f7f\u7528\u3002\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u865a\u62df\u673a\u7684\u7ba1\u7406\u7f51\u7edc IP \u53ea\u80fd\u5728\u96c6\u7fa4\u8282\u70b9\u5185\u8bbf\u95ee\uff0c\u865a\u62df\u673a\u91cd\u542f\u540e\u7ba1\u7406\u7f51\u7edc IP \u4f1a\u6539\u53d8\u3002\u8fd9\u662f\u9700\u8981\u6ce8\u610f\u7684\u975e\u5178\u578b\u884c\u4e3a\uff0c\u56e0\u4e3a\u4e00\u822c\u6211\u4eec\u4f1a\u8ba4\u4e3a VM IP \u5728\u91cd\u542f\u540e\u4f1a\u4fdd\u6301\u4e0d\u53d8\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u7528\u6237\u53ef\u4ee5\u5229\u7528 Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/virtual_machines/service_objects/"},"\u670d\u52a1\u5bf9\u8c61")," \u4e3a\u4f60\u7684\u865a\u62df\u673a\u4e0e\u7ba1\u7406\u7f51\u7edc\u521b\u5efa\u4e00\u4e2a\u7a33\u5b9a\u7684 IP\u3002"),(0,a.kt)("h2",{id:"vlan-\u7f51\u7edc"},"VLAN \u7f51\u7edc"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-network-controller"},"Harvester network-controller")," \u5229\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI \u63d2\u4ef6\u6765\u5b9e\u73b0\u5b83\u81ea\u5b9a\u4e49\u7684 L2 \u6865\u63a5 VLAN \u7f51\u7edc\u3002\u8fd9\u6709\u52a9\u4e8e\u5c06\u4f60\u7684\u865a\u62df\u673a\u8fde\u63a5\u5230\u4e3b\u673a\u7f51\u7edc\u63a5\u53e3\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\u7269\u7406\u4ea4\u6362\u673a\u4ece\u5185\u90e8\u548c\u5916\u90e8\u7f51\u7edc\u8fdb\u884c\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86 VLAN \u7f51\u7edc\u5728 Harvester \u4e2d\u7684\u5de5\u4f5c\u65b9\u5f0f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1853).Z,width:"1578",height:"1214"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Harvester network-controller \u4e3a\u6bcf\u4e2a\u8282\u70b9\u521b\u5efa\u4e00\u4e2a\u6865\u63a5\u5668\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u865a\u62df\u673a\u521b\u5efa\u4e00\u5bf9 veth \u6765\u5b9e\u73b0 VLAN \u7f51\u7edc\u3002\u7f51\u6865\u5145\u5f53\u4ea4\u6362\u673a\uff0c\u8f6c\u53d1\u6765\u81ea\u6216\u53d1\u5f80\u865a\u62df\u673a\u7684\u7f51\u7edc\u6d41\u91cf\uff0c\u800c\u4e00\u5bf9 veth \u5219\u5145\u5f53\u865a\u62df\u673a\u548c\u4ea4\u6362\u673a\u4e4b\u95f4\u7684\u8fde\u63a5\u7aef\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u4e00 VLAN \u5185\u7684\u865a\u62df\u673a\u80fd\u591f\u76f8\u4e92\u901a\u4fe1\uff0c\u800c\u4e0d\u540c VLAN \u5185\u7684\u865a\u62df\u673a\u5219\u4e0d\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u4e3b\u673a\u6216\u5176\u4ed6\u8bbe\u5907\uff08\u5982 DHCP \u670d\u52a1\u5668\uff09\u8fde\u63a5\u7684\u5916\u90e8\u4ea4\u6362\u673a\u7aef\u53e3\u5e94\u8bbe\u7f6e\u4e3a\u4e2d\u7ee7\u6216\u6df7\u5408\u7c7b\u578b\uff0c\u5e76\u5141\u8bb8\u6307\u5b9a\u7684 VLAN\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"PVID"),"\uff08\u9ed8\u8ba4\u4e3a 1\uff09\u7684 VLAN \u6765\u4e0e\u4efb\u4f55\u6b63\u5e38\u7684\u65e0\u6807\u8bb0\u6d41\u91cf\u8fdb\u884c\u901a\u4fe1\u3002")),(0,a.kt)("h3",{id:"\u542f\u7528\u9ed8\u8ba4-vlan-\u7f51\u7edc"},"\u542f\u7528\u9ed8\u8ba4 VLAN \u7f51\u7edc"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u524d\u5f80",(0,a.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e > vlan")," \u6765\u542f\u7528 VLAN \u7f51\u7edc\u3002\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"p"},"\u542f\u7528"),"\u540e\uff0c\u4f60\u5c06\u80fd\u591f\u4ece\u8282\u70b9\u4e2d\u9009\u62e9\u4e00\u4e2a\u7f51\u7edc\u63a5\u53e3\u4f5c\u4e3a\u9ed8\u8ba4\u7684 VLAN \u7f51\u5361\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u66f4\u597d\u7684\u7f51\u7edc\u6027\u80fd\u548c\u5b9e\u73b0\u9694\u79bb\uff0c\u6211\u4eec\u5efa\u8bae\u4e3a VLAN \u548c\u7ba1\u7406\u7f51\u7edc\uff08\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-mgmt"),"\uff09\u9009\u62e9\u4e0d\u540c\u7684\u7f51\u7edc\u63a5\u53e3\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7440).Z,width:"3484",height:"904"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u7f51\u7edc\u63a5\u53e3\u65f6\uff0c\u62ec\u53f7\u4e2d\u7684\u6570\u503c\u4ee3\u8868\u7f51\u7edc\u63a5\u53e3\u5728\u6240\u6709\u4e3b\u673a\u4e0a\u7684\u5206\u5e03\u767e\u5206\u6bd4\u3002\u5982\u679c\u9009\u62e9\u4e86\u5c0f\u4e8e 100% \u7684\u7f51\u7edc\u63a5\u53e3\uff0c\u9700\u8981\u5728 VLAN \u7f51\u7edc\u914d\u7f6e\u5931\u8d25\u7684\u4e3b\u673a\u4e0a\u624b\u52a8\u6307\u5b9a\u7f51\u7edc\u63a5\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u9ed8\u8ba4 VLAN \u7f51\u7edc\u8bbe\u7f6e\u4e0d\u4f1a\u66f4\u65b0\u73b0\u6709\u7684\u4e3b\u673a\u7f51\u7edc\u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},"Harvester VLAN \u7f51\u7edc\u652f\u6301\u7ed1\u5b9a\u63a5\u53e3\u3002\u76ee\u524d\u53ea\u80fd\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"li",href:"/zh/install/harvester-configuration#installnetworks"},"PXE \u5f15\u5bfc\u914d\u7f6e"),"\u81ea\u52a8\u521b\u5efa\u3002\u4f60\u4e5f\u53ef\u4ee5\u767b\u5f55\u5230\u8282\u70b9\u5e76\u8fdb\u884c\u624b\u52a8\u521b\u5efa\u3002"))),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u4e3b\u673a > \u7f51\u7edc"),"\u9009\u9879\u5361\u81ea\u5b9a\u4e49\u6bcf\u4e2a\u8282\u70b9\u7684 VLAN \u7f51\u7edc\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7548).Z,width:"3476",height:"1128"})),(0,a.kt)("h3",{id:"\u521b\u5efa-vlan-\u7f51\u7edc"},"\u521b\u5efa VLAN \u7f51\u7edc"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u524d\u5f80",(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u7ea7\u9009\u9879 > \u7f51\u7edc"),"\u9875\u9762\uff0c\u5e76\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u6309\u94ae\u6765\u521b\u5efa\u65b0\u7684 VLAN \u7f51\u7edc\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e VLAN \u7f51\u7edc\u7684\u540d\u79f0\u548c VLAN ID ",(0,a.kt)("small",null,"\uff08\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"li",href:"/zh/rancher/virtualization-management#%E5%A4%9A%E7%A7%9F%E6%88%B7"},"Rancher \u591a\u79df\u6237"),"\u652f\u6301\u7684\u4e0d\u540c\u547d\u540d\u7a7a\u95f4\u4e0a\u6307\u5b9a\u76f8\u540c\u7684 VLAN ID\uff09"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-vlan-network.png",src:r(1171).Z,width:"3472",height:"1132"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8def\u7531\u4ee5\u5141\u8bb8\u4e3b\u673a\u4f7f\u7528 IPv4 \u5730\u5740\u8fde\u63a5\u5230 VLAN \u7f51\u7edc\u3002VLAN \u7f51\u7edc\u7684 CIDR \u548c\u7f51\u5173\u662f\u8def\u7531\u914d\u7f6e\u7684\u5fc5\u5907\u53c2\u6570\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u9009\u9879\u4e4b\u4e00\u6765\u914d\u7f6e\u8def\u7531\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\uff08DHCP\uff09\uff1aHarvester \u7f51\u7edc\u63a7\u5236\u5668\u5c06\u4f7f\u7528 DHCP \u534f\u8bae\u4ece DHCP \u670d\u52a1\u5668\u83b7\u53d6 CIDR \u548c\u7f51\u5173\u503c\u3002\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a DHCP \u670d\u52a1\u5668\u5730\u5740\u3002\n",(0,a.kt)("img",{src:r(9296).Z,width:"3476",height:"1190"})),(0,a.kt)("li",{parentName:"ul"},"\u624b\u52a8\uff1a\u4f60\u9700\u8981\u81ea\u884c\u6307\u5b9a CIDR \u548c\u7f51\u5173\u503c\u3002\n",(0,a.kt)("img",{src:r(757).Z,width:"3462",height:"1174"}))))),(0,a.kt)("h3",{id:"\u4f7f\u7528-vlan-\u7f51\u7edc\u521b\u5efa\u865a\u62df\u673a"},"\u4f7f\u7528 VLAN \u7f51\u7edc\u521b\u5efa\u865a\u62df\u673a"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0a\u9762\u914d\u7f6e\u7684 VLAN \u7f51\u7edc\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u865a\u62df\u673a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u865a\u62df\u673a"),"\u9875\u9762\u4e0a\u7684",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u6309\u94ae\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\u6240\u9700\u53c2\u6570\u5e76\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u7f51\u7edc"),"\u9009\u9879\u5361\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u9ed8\u8ba4\u7f51\u7edc\u914d\u7f6e\u4e3a VLAN \u7f51\u7edc\uff0c\u6216\u9009\u62e9\u8981\u6dfb\u52a0\u7684\u5176\u4ed6\u7f51\u7edc\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2511).Z,width:"3478",height:"1620"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ec5\u542f\u7528\u7b2c\u4e00\u4e2a\u7f51\u5361\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528\u7ba1\u7406\u7f51\u7edc\u6216 VLAN \u7f51\u7edc\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u5c0f\u5fc3\u914d\u7f6e\u5177\u6709\u591a\u4e2a NIC \u7684\u865a\u62df\u673a\u4ee5\u907f\u514d\u8fde\u63a5\u95ee\u9898\u3002\u8be6\u60c5\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/multiple-nics-vm-connectivity"},"\u77e5\u8bc6\u5e93"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u5728 ",(0,a.kt)("strong",{parentName:"li"},"Advanced Options")," \u9009\u9879\u5361\u4e2d\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"Install guest agent"),"\uff0c\u4ee5\u4fbf\u4ece Harvester UI \u83b7\u53d6 VLAN \u7f51\u7edc IP \u5730\u5740\u3002"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u9009\u62e9\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u7f51\u5361\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7 cloud-init \u7f51\u7edc\u6570\u636e\u8bbe\u7f6e\u6765\u542f\u7528\u5176\u4ed6\u7f51\u5361\u3002\u4f8b\u5982\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},"version: 1\nconfig:\n  - type: physical\n    name: enp1s0 # name is varies upon OS image\n    subnets:\n      - type: dhcp\n  - type: physical\n    name: enp2s0\n    subnets:\n      - type: static\n        address: 10.0.0.100/24 # IP \u5730\u5740\u56e0\u73af\u5883\u800c\u5f02\n")),(0,a.kt)("p",null,"Harvester \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-init \u7f51\u7edc\u914d\u7f6e"),"\u5b8c\u5168\u517c\u5bb9\u3002\u4f60\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/network-config-format-v2.html"},"\u6587\u6863"),"\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728 VM \u542f\u52a8\u540e\u6dfb\u52a0\u989d\u5916\u7684 NIC\uff0c\u5219\u9700\u8981\u624b\u52a8\u4e3a\u989d\u5916\u7684 NIC \u914d\u7f6e IP\u3002")),(0,a.kt)("h3",{id:"\u5728\u7f51\u7edc\u4e0a\u914d\u7f6e-dhcp-\u670d\u52a1\u5668"},"\u5728\u7f51\u7edc\u4e0a\u914d\u7f6e DHCP \u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHarvester VLAN \u7f51\u7edc\u9700\u8981\u4f60\u7684\u8def\u7531\u5668\u63d0\u4f9b\u4e00\u4e2a DHCP \u670d\u52a1\u5668\uff0c\u865a\u62df\u673a\u53ef\u4ee5\u81ea\u52a8\u8bf7\u6c42\u548c\u5206\u914d IP \u5730\u5740\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4e0d\u5305\u542b DHCP \u670d\u52a1\u5668\u7684\u865a\u62df\u73af\u5883\u4e2d\u8fd0\u884c Harvester\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u5728\u8282\u70b9\u4e0a\u624b\u52a8\u90e8\u7f72 DHCP \u670d\u52a1\u5668\u6216\u4f7f\u7528\u5bb9\u5668\u5316\u65b9\u6cd5\uff0c\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/947"},"issue #947"),"\u3002"))}u.isMDXComponent=!0},9296:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-network-auto-0f1b573b3283fb966b78afb121060c57.png"},757:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-network-manual-a4f285d074a76477a305cad9f34b4c3d.png"},1171:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-network-2288440fcd22445ded421874d1ddcd24.png"},7440:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enable-vlan-6aa8a7458a8983c43e192920360a3ce5.png"},7548:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/node-network-configuration-1664055debd1f63c39b7ace08668d06b.png"},1853:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vlan-case-696fde4079834afd0a18b00e0c8e164c.png"},2511:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vm-network-configuration-00ef4ac66104b0a8ccac3f8026435a59.png"}}]);