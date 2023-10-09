"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7998],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>k});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},v=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),v=n,k=c["".concat(s,".").concat(v)]||c[v]||u[v]||i;return t?a.createElement(k,o(o({ref:r},d),{},{components:t})):a.createElement(k,o({ref:r},d))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},49219:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const i={sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],Description:"Harvester \u4e2d\u7684 k8s \u96c6\u7fa4\u4f7f\u7528\u7684 Harvester Cloud Provider \u63d0\u4f9b\u4e86\u4e00\u4e2a CSI \u63a5\u53e3\u548c Cloud Controller Manager (CCM)\uff0c\u6765\u5b9e\u73b0\u4e00\u4e2a\u5185\u7f6e\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u3002"},o=void 0,l={unversionedId:"rancher/cloud-provider",id:"rancher/cloud-provider",title:"Harvester Cloud Provider",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684 Harvester \u4e3b\u673a\u9a71\u52a8\u5728 Rancher \u4e2d\u914d\u7f6e RKE1 \u548c RKE2 \u96c6\u7fa4\u3002Harvester \u4f1a\u4e3a\u8fd9\u4e9b Kubernetes \u96c6\u7fa4\u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u5668\u548c Harvester \u96c6\u7fa4\u5b58\u50a8\u76f4\u901a\u652f\u6301\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rancher/cloud-provider.md",sourceDirName:"rancher",slug:"/rancher/cloud-provider",permalink:"/harvester-docs/zh/v1.2/rancher/cloud-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/cloud-provider.md",tags:[],version:"current",lastUpdatedAt:1696844458,formattedLastUpdatedAt:"2023\u5e7410\u67089\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],Description:"Harvester \u4e2d\u7684 k8s \u96c6\u7fa4\u4f7f\u7528\u7684 Harvester Cloud Provider \u63d0\u4f9b\u4e86\u4e00\u4e2a CSI \u63a5\u53e3\u548c Cloud Controller Manager (CCM)\uff0c\u6765\u5b9e\u73b0\u4e00\u4e2a\u5185\u7f6e\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u3002"},sidebar:"docs",previous:{title:"\u521b\u5efa K3s Kubernetes \u96c6\u7fa4",permalink:"/harvester-docs/zh/v1.2/rancher/node/k3s-cluster"},next:{title:"Harvester CSI Driver",permalink:"/harvester-docs/zh/v1.2/rancher/csi-driver"}},s={},p=[{value:"\u5411\u540e\u517c\u5bb9\u6027\u901a\u77e5",id:"\u5411\u540e\u517c\u5bb9\u6027\u901a\u77e5",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 RKE1 \u96c6\u7fa4",id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-rke1-\u96c6\u7fa4",level:3},{value:"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 RKE2 \u96c6\u7fa4",id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-rke2-\u96c6\u7fa4",level:3},{value:"\u90e8\u7f72\u5230 RKE2 \u81ea\u5b9a\u4e49\u96c6\u7fa4\uff08\u5b9e\u9a8c\u6027\uff09",id:"\u90e8\u7f72\u5230-rke2-\u81ea\u5b9a\u4e49\u96c6\u7fa4\u5b9e\u9a8c\u6027",level:3},{value:"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 K3s \u96c6\u7fa4\uff08\u5b9e\u9a8c\u6027\uff09",id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-k3s-\u96c6\u7fa4\u5b9e\u9a8c\u6027",level:3},{value:"\u5347\u7ea7 Cloud Provider",id:"\u5347\u7ea7-cloud-provider",level:2},{value:"\u5347\u7ea7 RKE2",id:"\u5347\u7ea7-rke2",level:3},{value:"\u5347\u7ea7 RKE/K3s",id:"\u5347\u7ea7-rkek3s",level:3},{value:"\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301",id:"\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301",level:2},{value:"IPAM",id:"ipam",level:3},{value:"\u5065\u5eb7\u68c0\u67e5",id:"\u5065\u5eb7\u68c0\u67e5",level:2}],d={toc:p},c="wrapper";function u(e){let{components:r,...i}=e;return(0,n.kt)(c,(0,a.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5185\u7f6e\u7684 Harvester \u4e3b\u673a\u9a71\u52a8\u5728 Rancher \u4e2d\u914d\u7f6e ",(0,n.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.2/rancher/node/rke1-cluster"},"RKE1")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.2/rancher/node/rke2-cluster"},"RKE2")," \u96c6\u7fa4\u3002Harvester \u4f1a\u4e3a\u8fd9\u4e9b Kubernetes \u96c6\u7fa4\u63d0\u4f9b",(0,n.kt)("a",{parentName:"p",href:"#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8%E6%94%AF%E6%8C%81"},"\u8d1f\u8f7d\u5747\u8861\u5668"),"\u548c Harvester \u96c6\u7fa4",(0,n.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.2/rancher/csi-driver"},"\u5b58\u50a8\u76f4\u901a"),"\u652f\u6301\u3002"),(0,n.kt)("p",null,"\u4f60\u5c06\u5728\u672c\u6587\u4e2d\u5b66\u4e60\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5728 RKE1 \u548c RKE2 \u96c6\u7fa4\u4e2d\u90e8\u7f72 Harvester Cloud Provider\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8%E6%94%AF%E6%8C%81"},"Harvester \u8d1f\u8f7d\u5747\u8861\u5668"),"\u3002")),(0,n.kt)("h3",{id:"\u5411\u540e\u517c\u5bb9\u6027\u901a\u77e5"},"\u5411\u540e\u517c\u5bb9\u6027\u901a\u77e5"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528 Harvester Cloud Provider ",(0,n.kt)("strong",{parentName:"p"},"v0.2.2")," \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u8bf7\u6ce8\u610f\u5df2\u77e5\u7684\u5411\u540e\u517c\u5bb9\u6027\u95ee\u9898\u3002\u5982\u679c\u4f60\u7684 Harvester \u7248\u672c\u4f4e\u4e8e ",(0,n.kt)("strong",{parentName:"p"},"v1.2.0")," \u5e76\u4e14\u6253\u7b97\u4f7f\u7528\u8f83\u65b0\u7684 RKE2 \u7248\u672c\uff08\u5373 >= ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.26.6+rke2r1"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"v1.25.11+rke2r1 "),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"v1.24.15+rke2r1"),"\uff09\uff0c\u5728\u7ee7\u7eed\u5347\u7ea7 Kubernetes \u96c6\u7fa4\u6216 Harvester Cloud Provider \u4e4b\u524d\uff0c\u5fc5\u987b\u5c06 Harvester \u96c6\u7fa4\u5347\u7ea7\u5230 v1.2.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u6709\u5173\u8be6\u7ec6\u7684\u652f\u6301\u77e9\u9635\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/"},"\u7f51\u7ad9"),"\u7684 ",(0,n.kt)("strong",{parentName:"p"},"Harvester CCM & CSI Driver with RKE2 Releases")," \u90e8\u5206\u3002")),(0,n.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,n.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u662f\u5728 Harvester \u865a\u62df\u673a\u4e4b\u4e0a\u6784\u5efa\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a Kubernetes \u8282\u70b9\u8fd0\u884c\u7684 Harvester \u865a\u62df\u673a\u4f4d\u4e8e\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ul"},"Harvester \u865a\u62df\u673a Guest \u7684\u4e3b\u673a\u540d\u4e0e\u5176\u200b\u200b\u76f8\u5e94\u7684 Harvester \u865a\u62df\u673a\u540d\u79f0\u5339\u914d\u3002\u4f7f\u7528 Harvester CSI Driver \u65f6\uff0cGuest \u96c6\u7fa4 Harvester VM \u7684\u4e3b\u673a\u540d\u5fc5\u987b\u4e0e\u5176 Harvester VM \u540d\u79f0\u76f8\u540c\u3002\u6211\u4eec\u5e0c\u671b\u5728\u540e\u7eed Harvester \u7248\u672c\u4e2d",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4396"},"\u6d88\u9664\u6b64\u9650\u5236"),"\u3002")),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-rke1-\u96c6\u7fa4"},"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 RKE1 \u96c6\u7fa4"),(0,n.kt)("p",null,"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u542f\u52a8 RKE \u96c6\u7fa4\u65f6\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u4e24\u4e2a\u6b65\u9aa4\u6765\u90e8\u7f72 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester")," \u4e91\u63d0\u4f9b\u5546\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester (Out-of-tree)")," \u9009\u9879\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:t(50900).Z,width:"2180",height:"223"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4ece Rancher \u5e94\u7528\u5e02\u573a\u4e2d\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Cloud Provider"),"\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:t(92903).Z,width:"2548",height:"389"})))),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-rke2-\u96c6\u7fa4"},"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 RKE2 \u96c6\u7fa4"),(0,n.kt)("p",null,"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u542f\u52a8 RKE2 \u96c6\u7fa4\u65f6\uff0c\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester")," \u4e91\u63d0\u4f9b\u5546\u3002\u7136\u540e\uff0c\u4e3b\u673a\u9a71\u52a8\u5c06\u81ea\u52a8\u90e8\u7f72 CSI \u9a71\u52a8\u548c CCM\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(20404).Z,width:"2238",height:"646"})),(0,n.kt)("h3",{id:"\u90e8\u7f72\u5230-rke2-\u81ea\u5b9a\u4e49\u96c6\u7fa4\u5b9e\u9a8c\u6027"},"\u90e8\u7f72\u5230 RKE2 \u81ea\u5b9a\u4e49\u96c6\u7fa4\uff08\u5b9e\u9a8c\u6027\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(25147).Z,width:"3496",height:"1846"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"generate_addon.sh")," \u751f\u6210 cloud-config \u5e76\u5c06\u5176\u653e\u5165\u6bcf\u4e2a\u81ea\u5b9a\u4e49\u8282\u70b9\u4e0a\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/cloud-config")," \u76ee\u5f55\u4e2d\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"curl -sfL https://raw.githubusercontent.com/harvester/cloud-provider-harvester/master/deploy/generate_addon.sh | bash -s <serviceaccount name> <namespace>\n")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"generate_addon.sh")," \u811a\u672c\u4f9d\u8d56 ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c",(0,n.kt)("inlineCode",{parentName:"p"},"jq")," \u6765\u64cd\u4f5c Harvester \u96c6\u7fa4\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u8be5\u811a\u672c\u9700\u8981\u8bbf\u95ee ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester \u96c6\u7fa4")," kubeconfig \u624d\u80fd\u5de5\u4f5c\u3002\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u4e00\u4e2a Harvester \u7ba1\u7406\u8282\u70b9\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2.yaml")," \u8def\u5f84\u4e2d\u627e\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u547d\u540d\u7a7a\u95f4\u5fc5\u987b\u662f\u8981\u5728\u5176\u4e2d\u521b\u5efa Guest \u96c6\u7fa4\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5c06 ",(0,n.kt)("strong",{parentName:"li"},"Cloud Provider")," \u914d\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"Harvester")," \u5e76\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Create")," \u4ee5\u542f\u52a8\u96c6\u7fa4\u3002\n",(0,n.kt)("img",{src:t(17446).Z,width:"2496",height:"1498"}))),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230-k3s-\u96c6\u7fa4\u5b9e\u9a8c\u6027"},"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u90e8\u7f72\u5230 K3s \u96c6\u7fa4\uff08\u5b9e\u9a8c\u6027\uff09"),(0,n.kt)("p",null,"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u542f\u52a8 K3s \u96c6\u7fa4\u65f6\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u6765\u90e8\u7f72 Harvester Cloud Provider\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"generate_addon.sh")," \u751f\u6210 cloud-config\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"curl -sfL https://raw.githubusercontent.com/harvester/cloud-provider-harvester/master/deploy/generate_addon.sh | bash -s <serviceaccount name> <namespace>\n")),(0,n.kt)("p",{parentName:"li"},"\u8f93\u51fa\u5c06\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"########## cloud config ############\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: <CACERT>\n    server: https://HARVESTER-ENDPOINT/k8s/clusters/local\n  name: local\ncontexts:\n- context:\n    cluster: local\n    namespace: default\n    user: harvester-cloud-provider-default-local\n  name: harvester-cloud-provider-default-local\ncurrent-context: harvester-cloud-provider-default-local\nkind: Config\npreferences: {}\nusers:\n- name: harvester-cloud-provider-default-local\n  user:\n    token: <TOKEN>\n\n\n########## cloud-init user data ############\nwrite_files:\n- encoding: b64\n  content: <CONTENT>\n  owner: root:root\n  path: /etc/kubernetes/cloud-config\n  permissions: '0644'\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-init user data")," \u7684\u5185\u5bb9\u590d\u5236\u5e76\u7c98\u8d34\u5230 ",(0,n.kt)("strong",{parentName:"p"},"Machine Pools >Show Advanced > User Data"),"\u3002\n",(0,n.kt)("img",{src:t(3037).Z,width:"2010",height:"1088"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-cloud-provider")," \u7684\u4ee5\u4e0b ",(0,n.kt)("inlineCode",{parentName:"p"},"HelmChart")," YAML \u6dfb\u52a0\u5230 ",(0,n.kt)("strong",{parentName:"p"},"Cluster Configuration > Add-On Config > Additional Manifest"),"\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: harvester-cloud-provider\n  namespace: kube-system\nspec:\n  targetNamespace: kube-system\n  bootstrap: true\n  repo: https://charts.harvesterhci.io/\n  chart: harvester-cloud-provider\n  version: 0.2.2\n  helmVersion: v3\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:t(70182).Z,width:"2316",height:"1235"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u7981\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"\u6811\u5185")," cloud provider\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5355\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit as YAML")," \u6309\u94ae\u3002")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:t(96300).Z,width:"2324",height:"1230"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7981\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"servicelb")," \u5e76\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"li"},"disable-cloud-controller: true")," \u6765\u7981\u7528\u9ed8\u8ba4\u7684 K3s \u4e91\u63a7\u5236\u5668\u3002")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"    machineGlobalConfig:\n      disable:\n        - servicelb\n      disable-cloud-controller: true\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"li"},"cloud-provider=external")," \u4ee5\u4f7f\u7528 Harvester Cloud Provider\u3002")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"    machineSelectorConfig:\n      - config:\n          kubelet-arg:\n          - cloud-provider=external\n          protect-kernel-defaults: false\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:t(81063).Z,width:"1398",height:"1153"})))),(0,n.kt)("p",null,"\u6709\u4e86\u8fd9\u4e9b\u8bbe\u7f6e\uff0cK3s \u96c6\u7fa4\u5e94\u8be5\u53ef\u4ee5\u5728\u4f60\u4f7f\u7528\u5916\u90e8\u4e91\u63d0\u4f9b\u5546\u65f6\u6210\u529f\u914d\u7f6e\u3002"),(0,n.kt)("h2",{id:"\u5347\u7ea7-cloud-provider"},"\u5347\u7ea7 Cloud Provider"),(0,n.kt)("h3",{id:"\u5347\u7ea7-rke2"},"\u5347\u7ea7 RKE2"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5347\u7ea7 RKE2 \u7248\u672c\u6765\u5347\u7ea7 Cloud Provider\u3002\u8981\u5347\u7ea7 RKE2 \u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u5347\u7ea7\u7684 guest \u96c6\u7fa4\uff0c\u7136\u540e\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Kubernetes Version"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Save"),"\u3002")),(0,n.kt)("h3",{id:"\u5347\u7ea7-rkek3s"},"\u5347\u7ea7 RKE/K3s"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u5347\u7ea7 RKE/K3s cloud provider\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > RKE/K3s Cluster > Apps > Installed Apps"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u627e\u5230 cloud provider \u8868\u5e76\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit/Upgrade"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Version"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Next > Update"),"\u3002")),(0,n.kt)("h2",{id:"\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301"},"\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301"),(0,n.kt)("p",null,"\u90e8\u7f72 Harvester Cloud Provider \u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Kubernetes ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," \u670d\u52a1\u5c06\u96c6\u7fa4\u5185\u7684\u5fae\u670d\u52a1\u516c\u5f00\u7ed9\u5916\u90e8\u3002\u521b\u5efa Kubernetes ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," \u670d\u52a1\u65f6\u4f1a\u4e3a\u8be5\u670d\u52a1\u5206\u914d\u4e00\u4e2a\u4e13\u6709\u7684 Harvester \u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher UI \u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"Add-on Config")," \u5bf9\u5176\u8fdb\u884c\u8c03\u6574\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(49609).Z,width:"3068",height:"988"})),(0,n.kt)("h3",{id:"ipam"},"IPAM"),(0,n.kt)("p",null,"Harvester \u5185\u7f6e\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u63d0\u4f9b ",(0,n.kt)("strong",{parentName:"p"},"DHCP")," \u548c ",(0,n.kt)("strong",{parentName:"p"},"Pool")," \u4e24\u79cd\u6a21\u5f0f\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u6ce8\u91ca ",(0,n.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/ipam: $mode")," \u6765\u5c06\u5b83\u914d\u7f6e\u5230\u76f8\u5e94\u7684\u670d\u52a1\u3002\u4ece Harvester Cloud Provider >= v0.2.0 \u5f00\u59cb\uff0c\u6211\u4eec\u8fd8\u5f15\u5165\u4e86\u72ec\u7279\u7684",(0,n.kt)("strong",{parentName:"p"},"\u5171\u4eab IP")," \u6a21\u5f0f\u3002\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0cservice \u4f1a\u4e0e\u5176\u4ed6 service \u5171\u4eab\u5176\u8d1f\u8f7d\u5747\u8861\u5668 IP\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"DCHP"),"\uff1a\u9700\u8981 DHCP \u670d\u52a1\u5668\u3002Harvester \u8d1f\u8f7d\u5747\u8861\u5668\u5c06\u4ece DHCP \u670d\u52a1\u5668\u8bf7\u6c42 IP \u5730\u5740\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Pool"),"\uff1a\u5fc5\u987b\u5148\u914d\u7f6e ",(0,n.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.2/networking/ippool"},"IP \u6c60"),"\u3002Harvester \u8d1f\u8f7d\u5747\u8861\u5668\u63a7\u5236\u5668\u5c06\u9075\u5faa ",(0,n.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.2/networking/ippool#%E9%80%89%E6%8B%A9%E7%AD%96%E7%95%A5"},"IP \u6c60\u9009\u62e9\u7b56\u7565"),"\u4e3a\u8d1f\u8f7d\u5747\u8861\u5668 service \u5206\u914d IP\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u5171\u4eab IP"),"\uff1a\u521b\u5efa\u65b0\u7684\u8d1f\u8f7d\u5747\u8861\u5668 service \u65f6\uff0c\u4f60\u53ef\u4ee5\u91cd\u65b0\u5229\u7528\u73b0\u6709\u7684\u8d1f\u8f7d\u5747\u8861\u5668 service IP\u3002\u65b0 service \u6307\u7684\u662f\u6b21\u8981 service\uff0c\u800c\u5f53\u524d\u9009\u62e9\u7684 service \u662f\u4e3b\u8981 service\u3002\u8981\u5728\u6b21\u8981 service \u4e2d\u6307\u5b9a\u4e3b\u8981 service\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u6ce8\u89e3 ",(0,n.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/primary-service: $primary-service-name"),"\u3002\u7136\u800c\uff0c\u6709\u4e24\u4e2a\u5df2\u77e5\u7684\u9650\u5236\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5171\u4eab\u540c\u4e00 IP \u5730\u5740\u7684 service \u4e0d\u80fd\u4f7f\u7528\u540c\u4e00\u4e2a\u7aef\u53e3\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6b21\u8981 service \u4e0d\u80fd\u4e0e\u5176\u4ed6 service \u5171\u4eab\u5176 IP\u3002")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0d\u5141\u8bb8\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"IPAM")," \u6a21\u5f0f\u3002\u5982\u679c\u4f60\u6253\u7b97\u66f4\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"IPAM")," \u6a21\u5f0f\uff0c\u5219\u5fc5\u987b\u521b\u5efa\u65b0 service\u3002")),(0,n.kt)("h2",{id:"\u5065\u5eb7\u68c0\u67e5"},"\u5065\u5eb7\u68c0\u67e5"),(0,n.kt)("p",null,"Harvester Cloud Provider v0.2.0 \u5f00\u59cb\u4e0d\u518d\u9700\u8981\u5bf9 Guest Kubernetes \u96c6\u7fa4\u5185\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," \u670d\u52a1\u8fdb\u884c\u989d\u5916\u7684\u8fd0\u884c\u72b6\u51b5\u68c0\u67e5\u3002\u76f8\u53cd\uff0c\u4f60\u53ef\u4ee5\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u914d\u7f6e ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-tcp-liveness-probe"},"liveness")," \u548c ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes"},"readiness")," \u63a2\u9488\u3002\u56e0\u6b64\uff0c\u4efb\u4f55\u4e0d\u53ef\u7528\u7684 Pod \u90fd\u5c06\u81ea\u52a8\u4ece\u8d1f\u8f7d\u5747\u8861\u5668\u7aef\u70b9\u4e2d\u5220\u9664\uff0c\u4ee5\u5b9e\u73b0\u76f8\u540c\u7684\u9884\u671f\u7ed3\u679c\u3002"))}u.isMDXComponent=!0},3037:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/cloud-config-userdata-8578bb17090db81956d319d54b6ee7d3.png"},17446:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/create-custom-rke2-e44a04b870f56c65b818571cf71ae0da.png"},25147:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/custom-8454eeefeca134d7084eb3c36f0bc250.png"},96300:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/edit-k3s-cluster-yaml-57987c1e6b13eeca3c09b8efd1c6838e.png"},70182:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/external-cloud-provider-addon-fe7c7599805e615aec470224221f9ac7.png"},92903:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/install-harvester-cloud-provider-b0d92a6086c0f150b419e02fb4663a75.png"},81063:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/k3s-cluster-yaml-content-for-harvester-cloud-provider-5c6769285a078298e5873e18aa3747f1.png"},49609:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/lb-svc-30c5203b63d74ff88f155f8edf334fab.png"},50900:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/rke-cloud-provider-1b375dbb96aba32a2b7f2b81357e98b8.png"},20404:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/rke2-cloud-provider-bcb7c991d0e6f041009c4920472d8ea8.png"}}]);