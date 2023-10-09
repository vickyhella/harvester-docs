"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=l(r),w=a,d=v["".concat(c,".").concat(w)]||v[w]||u[w]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=w;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[v]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},98373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:1,sidebar_label:"Overview",title:"Overview",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],Description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},o=void 0,s={unversionedId:"networking/best-practice/overview",id:"version-v1.0/networking/best-practice/overview",title:"Overview",description:"In a real production environment, we generally recommend that you have multiple NICs in your machine, one for node access and one for VM networking. If your machine has multiple NICs, please refer to multiple NICs for best practices. Otherwise, please refer to Single NIC best practice.",source:"@site/versioned_docs/version-v1.0/networking/best-practice/overview.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/overview",permalink:"/harvester-docs/v1.0/networking/best-practice/overview",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/best-practice/overview.md",tags:[],version:"v1.0",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"Nov 25, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview",title:"Overview",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],Description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},sidebar:"tutorialSidebar",previous:{title:"Harvester Network",permalink:"/harvester-docs/v1.0/networking/harvester-network"},next:{title:"Multiple NICs with VLAN-aware Switch",permalink:"/harvester-docs/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"}},c={},l=[{value:"Best Practice",id:"best-practice",level:2}],p={toc:l},v="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a real production environment, we generally recommend that you have multiple NICs in your machine, one for node access and one for VM networking. If your machine has multiple NICs, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"},"multiple NICs")," for best practices. Otherwise, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v1.0/networking/best-practice/single-nic-vlan-aware-switch"},"Single NIC")," best practice."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"bond")," interface with multiple NICs, please refer to the single NIC scenario, unless the Harvester node has multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"bond")," interfaces.")),(0,a.kt)("h2",{id:"best-practice"},"Best Practice"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/harvester-docs/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"},"Multiple NICs with VLAN-aware switch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/harvester-docs/v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch"},"Multiple NICs with non VLAN-aware switch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/harvester-docs/v1.0/networking/best-practice/single-nic-vlan-aware-switch"},"Single NIC with VLAN-aware switch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/harvester-docs/v1.0/networking/best-practice/single-nic-non-vlan-aware-switch"},"Single NIC with non VLAN-aware switch"))))}u.isMDXComponent=!0}}]);