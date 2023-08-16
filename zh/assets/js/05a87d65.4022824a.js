"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=o(r),m=n,v=k["".concat(p,".").concat(m)]||k[m]||c[m]||i;return r?a.createElement(v,l(l({ref:t},d),{},{components:r})):a.createElement(v,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},54498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher \u96c6\u6210"]},l=void 0,s={unversionedId:"rancher/csi-driver",id:"version-v1.1/rancher/csi-driver",title:"Harvester CSI Driver",description:"Harvester CSI Driver \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6807\u51c6\u7684 CSI \u63a5\u53e3\uff0c\u4f9b Harvester \u4e2d\u6240\u521b\u5efa\u7684 Kubernetes \u96c6\u7fa4\u4f7f\u7528\u3002\u8fd9\u4e2a CIS \u63a5\u53e3\u8fde\u63a5\u5230\u4e3b\u673a\u96c6\u7fa4\uff0c\u5e76\u5c06\u4e3b\u673a\u5377\u70ed\u63d2\u62d4\u5230\u865a\u62df\u673a\u6765\u63d0\u4f9b\u88f8\u91d1\u5c5e\u96c6\u7fa4\u78c1\u76d8\u7684\u5b58\u50a8\u6027\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/rancher/csi-driver.md",sourceDirName:"rancher",slug:"/rancher/csi-driver",permalink:"/harvester-docs/zh/v1.1/rancher/csi-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/rancher/csi-driver.md",tags:[],version:"v1.1",lastUpdatedAt:1688120255,formattedLastUpdatedAt:"2023\u5e746\u670830\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher \u96c6\u6210"]},sidebar:"tutorialSidebar",previous:{title:"Harvester Cloud Provider",permalink:"/harvester-docs/zh/v1.1/rancher/cloud-provider"},next:{title:"Harvester Terraform Provider",permalink:"/harvester-docs/zh/v1.1/terraform/terraform-provider"}},p={},o=[{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u4f7f\u7528 Harvester RKE1 \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",id:"\u4f7f\u7528-harvester-rke1-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",level:3},{value:"\u4f7f\u7528 Harvester RKE2 \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",id:"\u4f7f\u7528-harvester-rke2-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",level:3},{value:"\u5728 RKE2 \u96c6\u7fa4\u4e2d\u624b\u52a8\u5b89\u88c5 CSI Driver",id:"\u5728-rke2-\u96c6\u7fa4\u4e2d\u624b\u52a8\u5b89\u88c5-csi-driver",level:4},{value:"\u524d\u63d0",id:"\u524d\u63d0-1",level:4},{value:"\u90e8\u7f72 Harvester CSI Driver",id:"\u90e8\u7f72-harvester-csi-driver",level:4},{value:"\u4f7f\u7528 Harvester K3s \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",id:"\u4f7f\u7528-harvester-k3s-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72",level:3},{value:"\u76f4\u901a\u81ea\u5b9a\u4e49\u5b58\u50a8\u7c7b",id:"\u76f4\u901a\u81ea\u5b9a\u4e49\u5b58\u50a8\u7c7b",level:2},{value:"\u524d\u63d0",id:"\u524d\u63d0-2",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72-1",level:3}],d={toc:o};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Harvester CSI Driver \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6807\u51c6\u7684 CSI \u63a5\u53e3\uff0c\u4f9b Harvester \u4e2d\u6240\u521b\u5efa\u7684 Kubernetes \u96c6\u7fa4\u4f7f\u7528\u3002\u8fd9\u4e2a CIS \u63a5\u53e3\u8fde\u63a5\u5230\u4e3b\u673a\u96c6\u7fa4\uff0c\u5e76\u5c06\u4e3b\u673a\u5377\u70ed\u63d2\u62d4\u5230\u865a\u62df\u673a\u6765\u63d0\u4f9b\u88f8\u91d1\u5c5e\u96c6\u7fa4\u78c1\u76d8\u7684\u5b58\u50a8\u6027\u80fd\u3002"),(0,n.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,n.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u662f\u5728 Harvester \u865a\u62df\u673a\u4e4b\u4e0a\u6784\u5efa\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a Kubernetes \u8282\u70b9\u8fd0\u884c\u7684 Harvester \u865a\u62df\u673a\u4f4d\u4e8e\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u3002")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u76ee\u524d\uff0cHarvester CSI Driver \u4ec5\u652f\u6301\u5355\u8282\u70b9\u8bfb\u5199 (RWO) \u5377\u3002\u8bf7\u7559\u610f ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1992"},"issue #1992")," \u4ee5\u83b7\u5f97\u540e\u7eed\u591a\u8282\u70b9 ",(0,n.kt)("inlineCode",{parentName:"p"},"read-only")," (ROX) \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"read-write")," (RWX) \u7684\u652f\u6301\u3002")),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-rke1-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"},"\u4f7f\u7528 Harvester RKE1 \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," \u9009\u9879\uff08\u53ef\u9009\uff0c\u5982\u4e0d\u9700\u8981\u540c\u65f6\u4f7f\u7528 Cloud Provider \u529f\u80fd\u53ef\u4ee5\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"None")," \u9009\u9879\uff09\u3002"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:r(76168).Z,width:"2180",height:"223"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ece Rancher \u5e94\u7528\u5e02\u573a\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver"),"\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:r(51419).Z,width:"2542",height:"405"})))),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-rke2-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"},"\u4f7f\u7528 Harvester RKE2 \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"),(0,n.kt)("p",null,"\u5f53\u4f7f\u7528 Rancher RKE2 \u4e3b\u673a\u9a71\u52a8\u542f\u52a8 Kubernetes \u96c6\u7fa4\u65f6\uff0cHarvester CSI Driver \u4f1a\u5728\u9009\u4e2d Harvester \u4e91\u63d0\u4f9b\u5546\u540e\u88ab\u81ea\u52a8\u90e8\u7f72\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"select-harvester-cloud-provider",src:r(28303).Z,width:"2238",height:"646"})),(0,n.kt)("h4",{id:"\u5728-rke2-\u96c6\u7fa4\u4e2d\u624b\u52a8\u5b89\u88c5-csi-driver"},"\u5728 RKE2 \u96c6\u7fa4\u4e2d\u624b\u52a8\u5b89\u88c5 CSI Driver"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u4e0d\u542f\u7528 Harvester \u4e91\u63d0\u4f9b\u5546\u7684\u60c5\u51b5\u4e0b\u90e8\u7f72 Harvester CSI Driver\uff0c\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"Cloud Provider")," \u5b57\u6bb5\u4e2d\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Default - RKE2 Embedded")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"p"},"External"),"\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Rancher v2.6\uff0c\u8bf7\u9009\u62e9 ",(0,n.kt)("inlineCode",{parentName:"p"},"None"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(72327).Z,width:"1608",height:"805"})),(0,n.kt)("h4",{id:"\u524d\u63d0-1"},"\u524d\u63d0"),(0,n.kt)("p",null,"\u786e\u4fdd\u4f60\u6ee1\u8db3\u4ee5\u4e0b\u524d\u63d0\u6761\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u4e0a\u5b89\u88c5\u4e86 ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"jq"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f60\u62e5\u6709\u88f8\u673a Harvester \u96c6\u7fa4\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"kubeconfig")," \u6587\u4ef6\u3002",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"export KUBECONFIG=/path/to/your/harvester-kubeconfig\n")))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(175).Z,width:"1603",height:"731"})),(0,n.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u624b\u52a8\u90e8\u7f72 Harvester CSI Driver\uff1a"),(0,n.kt)("h4",{id:"\u90e8\u7f72-harvester-csi-driver"},"\u90e8\u7f72 Harvester CSI Driver"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u751f\u6210 cloud-config\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/harvester/harvester-csi-driver/master/deploy/generate_addon_csi.sh"},"generate_addon_csi.sh")," \u811a\u672c\u751f\u6210 ",(0,n.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-csi-driver"},"harvester/harvester-csi-driver")," \u4ed3\u5e93\u4e2d\u627e\u5230\u8be5\u6587\u4ef6\u3002\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u83b7\u53d6 ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-config")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-init")," \u6570\u636e\uff1a"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<serviceaccount name>")," \u901a\u5e38\u5bf9\u5e94 Guest \u96c6\u7fa4\u7684\u540d\u79f0\uff08\u4e0b\u56fe\u4e2d ",(0,n.kt)("strong",{parentName:"p"},"Cluster Name")," \u7684\u503c\uff09\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"<namespace>")," \u9700\u8981\u5339\u914d Guest \u96c6\u7fa4\u7684\u547d\u540d\u7a7a\u95f4\uff08",(0,n.kt)("strong",{parentName:"p"},"Namespace")," \u7684\u503c\uff09\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# ./generate_addon_csi.sh <serviceaccount name> <namespace> RKE2\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"########## cloud-config ############\napiVersion: v1\nclusters:\n- cluster: <token>\n    server: https://<YOUR HOST HARVESTER VIP>:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    namespace: default\n    user: rke2-guest-01-default-default\n  name: rke2-guest-01-default-default\ncurrent-context: rke2-guest-01-default-default\nkind: Config\npreferences: {}\nusers:\n- name: rke2-guest-01-default-default\n  user:\n    token: <token>\n\n########## cloud-init user data ############\nwrite_files:\n  - encoding: b64\n    content: YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKbFZFTkRRVklyWjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVd0TlUwbDNTVUZaUkZaUlVVUkVRbXg1WVRKVmVVeFlUbXdLWTI1YWJHTnBNV3BaVlVGNFRtcG5NVTE2VlhoT1JGRjNUVUkwV0VSVVNYcE5SRlY1VDFSQk5VMVVRVEJOUm05WVJGUk5lazFFVlhsT2FrRTFUVlJCTUFwTlJtOTNTa1JGYVUxRFFVZEJNVlZGUVhkM1dtTnRkR3hOYVRGNldsaEtNbHBZU1hSWk1rWkJUVlJaTkU1VVRURk5WRkV3VFVSQ1drMUNUVWRDZVhGSENsTk5ORGxCWjBWSFEwTnhSMU5OTkRsQmQwVklRVEJKUVVKSmQzRmFZMDVTVjBWU2FsQlVkalJsTUhFMk0ySmxTSEZEZDFWelducGtRa3BsU0VWbFpHTUtOVEJaUTNKTFNISklhbWdyTDJab2VXUklNME5ZVURNeFZXMWxTM1ZaVDBsVGRIVnZVbGx4YVdJMGFFZE5aekpxVVdwQ1FVMUJORWRCTVZWa1JIZEZRZ292ZDFGRlFYZEpRM0JFUVZCQ1owNVdTRkpOUWtGbU9FVkNWRUZFUVZGSUwwMUNNRWRCTVZWa1JHZFJWMEpDVWpaRGEzbEJOSEZqYldKSlVESlFWVW81Q2xacWJWVTNVV2R2WjJwQlMwSm5aM0ZvYTJwUFVGRlJSRUZuVGtsQlJFSkdRV2xCZUZKNU4xUTNRMVpEYVZWTVdFMDRZazVaVWtWek1HSnBZbWxVSzJzS1kwRnhlVmt5Tm5CaGMwcHpMM2RKYUVGTVNsQnFVVzVxZEcwMVptNTZWR3AxUVVsblRuTkdibFozWkZRMldXWXpieTg0ZFRsS05tMWhSR2RXQ2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBzZXJ2ZXI6IGh0dHBzOi8vMTkyLjE2OC4wLjEzMTo2NDQzCiAgbmFtZTogZGVmYXVsdApjb250ZXh0czoKLSBjb250ZXh0OgogICAgY2x1c3RlcjogZGVmYXVsdAogICAgbmFtZXNwYWNlOiBkZWZhdWx0CiAgICB1c2VyOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIG5hbWU6IHJrZTItZ3Vlc3QtMDEtZGVmYXVsdC1kZWZhdWx0CmN1cnJlbnQtY29udGV4dDogcmtlMi1ndWVzdC0wMS1kZWZhdWx0LWRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIHVzZXI6CiAgICB0b2tlbjogZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklreGhUazQxUTBsMWFsTnRORE5TVFZKS00waE9UbGszTkV0amNVeEtjM1JSV1RoYVpUbGZVazA0YW1zaWZRLmV5SnBjM01pT2lKcmRXSmxjbTVsZEdWekwzTmxjblpwWTJWaFkyTnZkVzUwSWl3aWEzVmlaWEp1WlhSbGN5NXBieTl6WlhKMmFXTmxZV05qYjNWdWRDOXVZVzFsYzNCaFkyVWlPaUprWldaaGRXeDBJaXdpYTNWaVpYSnVaWFJsY3k1cGJ5OXpaWEoyYVdObFlXTmpiM1Z1ZEM5elpXTnlaWFF1Ym1GdFpTSTZJbkpyWlRJdFozVmxjM1F0TURFdGRHOXJaVzRpTENKcmRXSmxjbTVsZEdWekxtbHZMM05sY25acFkyVmhZMk52ZFc1MEwzTmxjblpwWTJVdFlXTmpiM1Z1ZEM1dVlXMWxJam9pY210bE1pMW5kV1Z6ZEMwd01TSXNJbXQxWW1WeWJtVjBaWE11YVc4dmMyVnlkbWxqWldGalkyOTFiblF2YzJWeWRtbGpaUzFoWTJOdmRXNTBMblZwWkNJNkltTXlZak5sTldGaExUWTBNMlF0TkRkbU1pMDROemt3TFRjeU5qWXpNbVl4Wm1aaU5pSXNJbk4xWWlJNkluTjVjM1JsYlRwelpYSjJhV05sWVdOamIzVnVkRHBrWldaaGRXeDBPbkpyWlRJdFozVmxjM1F0TURFaWZRLmFRZmU1d19ERFRsSWJMYnUzWUVFY3hmR29INGY1VnhVdmpaajJDaWlhcXB6VWI0dUYwLUR0cnRsa3JUM19ZemdXbENRVVVUNzNja1BuQmdTZ2FWNDhhdmlfSjJvdUFVZC04djN5d3M0eXpjLVFsTVV0MV9ScGJkUURzXzd6SDVYeUVIREJ1dVNkaTVrRWMweHk0X0tDQ2IwRHQ0OGFoSVhnNlMwRDdJUzFfVkR3MmdEa24wcDVXUnFFd0xmSjdEbHJDOFEzRkNUdGhpUkVHZkUzcmJGYUdOMjdfamR2cUo4WXlJQVd4RHAtVHVNT1pKZUNObXRtUzVvQXpIN3hOZlhRTlZ2ZU05X29tX3FaVnhuTzFEanllbWdvNG9OSEpzekp1VWliRGxxTVZiMS1oQUxYSjZXR1Z2RURxSTlna1JlSWtkX3JqS2tyY3lYaGhaN3lTZ3o3QQo=\n    owner: root:root\n    path: /var/lib/rancher/rke2/etc/config-files/cloud-provider-config\n    permissions: '0644'\n")),(0,n.kt)("p",{parentName:"li"},"\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-init user data")," \u4e0b\u7684\u8f93\u51fa\u590d\u5236\u5e76\u7c98\u8d34\u5230 ",(0,n.kt)("strong",{parentName:"p"},"Machine Pools >Show Advanced > User Data"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8bbe\u7f6e cloud-provider-config\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5e94\u7528\u4e0a\u8ff0 cloud-init \u7528\u6237\u6570\u636e\u540e\uff0c\u4f60\u9700\u8981\u521b\u5efa cloud-provider-config\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u518d\u6b21\u68c0\u67e5\u8def\u5f84 ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/etc/config-files/cloud-provider-config"),"\u3002"),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u8981\u66f4\u6539 cloud-provider-config \u8def\u5f84\uff0c\u4f60\u9700\u8981\u66f4\u65b0 cloud-init \u7528\u6237\u6570\u636e\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u88c5 Harvester CSI Driver\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4ece Rancher \u5e94\u7528\u5e02\u573a\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver")," chart\uff08\u8bf7\u6ce8\u610f\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u9700\u8981\u66f4\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-config")," \u8def\u5f84\uff09\u3002\n",(0,n.kt)("img",{src:r(62457).Z,width:"3000",height:"1460"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(98035).Z,width:"3002",height:"1524"})))),(0,n.kt)("p",null,"\u6267\u884c\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u770b\u4e9b CSI Driver pod \u5df2\u542f\u52a8\u5e76\u8fd0\u884c\uff0c\u8981\u8fdb\u884c\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4 storageClass ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester")," \u6765\u914d\u7f6e\u65b0\u7684 PVC\u3002"),(0,n.kt)("h3",{id:"\u4f7f\u7528-harvester-k3s-\u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"},"\u4f7f\u7528 Harvester K3s \u4e3b\u673a\u9a71\u52a8\u8fdb\u884c\u90e8\u7f72"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u6309\u7167",(0,n.kt)("strong",{parentName:"p"},"\u524d\u63d0"),"\u4e2d RKE2 \u90e8\u5206\u63cf\u8ff0\u7684",(0,n.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.1/rancher/csi-driver#%E9%83%A8%E7%BD%B2-harvester-csi-driver"},"\u90e8\u7f72 Harvester CSI Driver")," \u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u552f\u4e00\u7684\u533a\u522b\u662f\u4f60\u9700\u8981\u5982\u4e0b\u66f4\u6539\u811a\u672c\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# ./generate_addon_csi.sh <serviceaccount name> <namespace> k3s\n")),(0,n.kt)("h2",{id:"\u76f4\u901a\u81ea\u5b9a\u4e49\u5b58\u50a8\u7c7b"},"\u76f4\u901a\u81ea\u5b9a\u4e49\u5b58\u50a8\u7c7b"),(0,n.kt)("p",null,"\u4ece Harvester CSI Driver v0.1.15 \u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e\u4e0d\u540c\u7684 StorageClass \u521b\u5efa PersistentVolumeClaim (PVC)\u3002"),(0,n.kt)("p",null,"\u4ece\u4ee5\u4e0b RKE2 \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u5f00\u7bb1\u5373\u7528\u5730\u652f\u6301 Harvester CSI Driver v0.1.15\u3002\u5982\u679c\u4f60\u662f\u7528\u7684\u662f RKE1\uff0c\u5219\u9700\u8981\u624b\u52a8\u5b89\u88c5 CSI Driver Chart\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"v1.23.16+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.24.10+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.25.6+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.26.1+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.27.1+rke2r1 and later")),(0,n.kt)("h3",{id:"\u524d\u63d0-2"},"\u524d\u63d0"),(0,n.kt)("p",null,"\u8bf7\u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230\u4f60\u7684 Harvester \u96c6\u7fa4\u4e2d\u3002Harvester CSI Driver \u9700\u8981\u9002\u5f53\u7684 ",(0,n.kt)("strong",{parentName:"p"},"RBAC")," \u624d\u80fd\u663e\u793a\u9519\u8bef\u6d88\u606f\u3002\u8fd9\u5bf9\u4e8e\u5728\u4f7f\u7528\u4e0d\u5b58\u5728\u7684 StorageClass \u521b\u5efa PVC \u65f6\u663e\u793a\u9519\u8bef\u6d88\u606f\u5f88\u91cd\u8981\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(98606).Z,width:"1900",height:"874"})),(0,n.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u6765\u8bbe\u7f6e ",(0,n.kt)("strong",{parentName:"p"},"RBAC")," \u4ee5\u542f\u7528\u9519\u8bef\u6d88\u606f\u67e5\u770b\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u6e05\u5355\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"harvesterhci.io:csi-driver")," \u7684\u65b0 ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterrole"),"\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  labels:\n    app.kubernetes.io/component: apiserver\n    app.kubernetes.io/name: harvester\n    app.kubernetes.io/part-of: harvester\n  name: harvesterhci.io:csi-driver\nrules:\n- apiGroups:\n  - storage.k8s.io\n  resources:\n  - storageclasses\n  verbs:\n  - get\n  - list\n  - watch\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7136\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6e05\u5355\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterrolebinding")," \u4ee5\u5173\u8054\u65b0\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterrole"),"\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: <namespace>-<serviceaccount name>\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: harvesterhci.io:csi-driver\nsubjects:\n- kind: ServiceAccount\n  name: <serviceaccount name>\n  namespace: <namespace>\n")))),(0,n.kt)("p",null,"\u786e\u4fdd ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceaccount name")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace")," \u4e0e\u4f60\u7684\u4e91\u63d0\u4f9b\u5546\u5339\u914d\u3002\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u6765\u67e5\u770b\u4f60\u4e91\u63d0\u4f9b\u5546\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceaccount name")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace"),"\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u627e\u5230\u4f60\u7684\u4e91\u63d0\u4f9b\u5546\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"rolebinding"),"\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# kubectl get rolebinding -A |grep harvesterhci.io:cloudprovider\ndefault                                 default-rke2-guest-01                                ClusterRole/harvesterhci.io:cloudprovider             7d1h\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6b64 ",(0,n.kt)("inlineCode",{parentName:"p"},"rolebinding")," \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"subjects")," \u4fe1\u606f\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get rolebinding default-rke2-guest-01 -n default -o yaml |yq -e '.subjects'\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u627e\u5230\u5982\u4e0b ",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," \u4fe1\u606f\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- kind: ServiceAccount\n  name: rke2-guest-01\n  namespace: default\n")))),(0,n.kt)("h3",{id:"\u90e8\u7f72-1"},"\u90e8\u7f72"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u8981\u5728 Guest K8s \u96c6\u7fa4\u4e2d\u4f7f\u7528\u7684\u65b0 StorageClass\u3002\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/dev/advanced/storageclass"},"StorageClasses")," \u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("strong",{parentName:"p"},"replica-2")," \u7684 StorageClass\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(49222).Z,width:"1908",height:"775"})),(0,n.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff0c\u5982\u4e0b\u6240\u793a\u5728\u4e0b\u6e38\u96c6\u7fa4\u4e0a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("strong",{parentName:"p"},"replica-2")," \u7684\u65b0 StorageClass\uff0c\u4e0e\u5728 Harvester \u96c6\u7fa4\u4e0a\u521b\u5efa\u7684 StorageClass \u76f8\u5173\u8054\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(34828).Z,width:"1910",height:"875"})),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5728 ",(0,n.kt)("strong",{parentName:"p"},"Provisioner")," \u4e2d\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"p"},"Harvester (CSI)"),"\u3002",(0,n.kt)("strong",{parentName:"p"},"Host StorageClass")," \u662f\u5728 Harvester \u96c6\u7fa4\u4e0a\u521b\u5efa\u7684 StorageClass\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f60\u73b0\u5728\u53ef\u4ee5\u57fa\u4e8e\u8fd9\u4e2a\u65b0\u7684 ",(0,n.kt)("strong",{parentName:"p"},"StorageClass")," \u521b\u5efa PVC\uff0c\u5b83\u4f7f\u7528 ",(0,n.kt)("strong",{parentName:"p"},"Host StorageClass")," \u5728\u88f8\u673a\u96c6\u7fa4\u4e0a\u914d\u7f6e\u5377\u3002"))))}c.isMDXComponent=!0},175:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/creating_guest_cluster-9a704a8caf1f5d20e80a4e85b864d8e5.png"},98035:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/donot_change_cloud_config_path-f1a6f8a068fb6d7f19fe33b7a3cd97bc.png"},34828:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/downstream-cluster-sc-creation-378d43228c1d54eede232eb32d86dd0e.png"},98606:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/error_event_csi_driver-39ba293ec4c085eb58a01a396ac1f65a.png"},51419:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-csi-driver-28489139ba34a16156cfea27c6eb005f.png"},62457:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install_csi_rancher_marketplace-a6e0b7ac479a8ae72c4b31ad18d3ad9e.png"},72327:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/non-harvester-cloud-provider-8e3bc5542bd27800a302340c0b2ceef3.png"},76168:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke-cloud-provider-1b375dbb96aba32a2b7f2b81357e98b8.png"},28303:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-cloud-provider-bcb7c991d0e6f041009c4920472d8ea8.png"},49222:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sc-replica-2-7f41f9357e62f4d917a590f31c04b98a.png"}}]);