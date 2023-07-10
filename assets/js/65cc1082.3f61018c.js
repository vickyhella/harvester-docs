"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,h=u["".concat(l,".").concat(g)]||u[g]||c[g]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11032:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"Air Gapped Environment",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},o=void 0,s={unversionedId:"airgap",id:"version-v1.1/airgap",title:"Air Gapped Environment",description:"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy.",source:"@site/versioned_docs/version-v1.1/airgap.md",sourceDirName:".",slug:"/airgap",permalink:"/v1.1/airgap",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/airgap.md",tags:[],version:"v1.1",lastUpdatedAt:1687932814,formattedLastUpdatedAt:"Jun 28, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"Air Gapped Environment",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},sidebar:"tutorialSidebar",previous:{title:"Management Address",permalink:"/v1.1/install/management-address"},next:{title:"Upgrading Harvester",permalink:"/v1.1/upgrade/automatic"}},l={},p=[{value:"Working Behind an HTTP Proxy",id:"working-behind-an-http-proxy",level:2},{value:"Configure an HTTP Proxy During Installation",id:"configure-an-http-proxy-during-installation",level:3},{value:"Configure an HTTP Proxy in Harvester Settings",id:"configure-an-http-proxy-in-harvester-settings",level:3},{value:"Guest Cluster Images",id:"guest-cluster-images",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy."),(0,a.kt)("p",null,"The Harvester ISO image contains all the packages to make it work in an air gapped environment."),(0,a.kt)("h2",{id:"working-behind-an-http-proxy"},"Working Behind an HTTP Proxy"),(0,a.kt)("p",null,"In some environments, the connection to external services, from the servers or VMs, requires an HTTP(S) proxy."),(0,a.kt)("h3",{id:"configure-an-http-proxy-during-installation"},"Configure an HTTP Proxy During Installation"),(0,a.kt)("p",null,"You can configure the HTTP(S) proxy during the ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/iso-install"},"ISO installation")," as shown in picture below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iso-proxy",src:r(64976).Z,width:"1596",height:"1198"})),(0,a.kt)("h3",{id:"configure-an-http-proxy-in-harvester-settings"},"Configure an HTTP Proxy in Harvester Settings"),(0,a.kt)("p",null,"You can configure the HTTP(S) proxy in the settings page of the Harvester dashboard:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the settings page of the Harvester UI."),(0,a.kt)("li",{parentName:"ol"},"Find the ",(0,a.kt)("inlineCode",{parentName:"li"},"http-proxy")," setting, click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit setting")),(0,a.kt)("li",{parentName:"ol"},"Enter the value(s) for ",(0,a.kt)("inlineCode",{parentName:"li"},"http-proxy"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"https-proxy")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"no-proxy"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"proxy-setting",src:r(14267).Z,width:"2860",height:"1164"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester appends necessary addresses to user configured ",(0,a.kt)("inlineCode",{parentName:"p"},"no-proxy")," to ensure the internal traffic works.\ni.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,harvester-system,.svc,.cluster.local"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-system")," was added into the list since v1.1.2."),(0,a.kt)("p",{parentName:"admonition"},"When the nodes in the cluster do not use a proxy to communicate with each other, the CIDR needs to be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy.noProxy")," after the first node is installed successfully. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/harvester#fail-to-deploy-a-multi-node-cluster-due-to-incorrect-http-proxy-setting"},"fail to deploy a multi-node cluster"),".")),(0,a.kt)("h2",{id:"guest-cluster-images"},"Guest Cluster Images"),(0,a.kt)("p",null,"All necessary images to install and run Harvester are conveniently packaged into the ISO, eliminating the need to pre-load images on bare-metal nodes. A Harvester cluster manages them independently and effectively behind the scenes."),(0,a.kt)("p",null,"However, it's essential to understand a guest K8s cluster (e.g., RKE2 cluster) created by the ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/node-driver"},"Harvester node driver")," is a distinct entity from a Harvester cluster. A guest cluster operates within VMs and requires pulling images either from the internet or a ",(0,a.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry#configure-a-private-registry-with-credentials-when-creating-a-cluster"},"private registry"),". "),(0,a.kt)("p",null,"If the ",(0,a.kt)("strong",{parentName:"p"},"Cloud Provider")," option is configured to ",(0,a.kt)("strong",{parentName:"p"},"Harvester")," in a guest K8s cluster, it deploys the Harvester cloud provider and Container Storage Interface (CSI) driver."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cluster-registry",src:r(98574).Z,width:"4362",height:"1348"})),(0,a.kt)("p",null,"As a result, we recommend monitoring each ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases"},"RKE2 release")," in your air gapped environment and pulling the required images into your private registry. Please refer to the ",(0,a.kt)("strong",{parentName:"p"},"Harvester CCM & CSI Driver")," with RKE2 Releases section on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/harvester-v1-1-2/"},"Harvester support matrix page")," for the best Harvester cloud provider and CSI driver capability support."))}c.isMDXComponent=!0},98574:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-registry-d1f54048d64a61046810eda5c6b05c25.png"},64976:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/iso-proxy-4772156ef9e6a8688de2321ed356b078.png"},14267:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proxy-setting-6433c2c6f3efd4cfb84757420ceeaf8a.png"}}]);