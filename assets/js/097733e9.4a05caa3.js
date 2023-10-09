"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2328],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>p});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),v=c(t),h=a,p=v["".concat(l,".").concat(h)]||v[h]||u[h]||o;return t?n.createElement(p,s(s({ref:r},d),{},{components:t})):n.createElement(p,s({ref:r},d))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[v]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},24881:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],Description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},s=void 0,i={unversionedId:"rancher/node/node-driver",id:"version-v0.3/rancher/node/node-driver",title:"Harvester Node Driver",description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters.",source:"@site/versioned_docs/version-v0.3/rancher/node/node-driver.md",sourceDirName:"rancher/node",slug:"/rancher/node/node-driver",permalink:"/harvester-docs/v0.3/rancher/node/node-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/node/node-driver.md",tags:[],version:"v0.3",lastUpdatedAt:1689663019,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],Description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},sidebar:"tutorialSidebar",previous:{title:"Virtualization Management",permalink:"/harvester-docs/v0.3/rancher/virtualization-management"},next:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/harvester-docs/v0.3/rancher/node/rke1-cluster"}},l={},c=[{value:"Enable Harvester Node Driver",id:"enable-harvester-node-driver",level:2},{value:"RKE1 Kubernetes Cluster",id:"rke1-kubernetes-cluster",level:2},{value:"RKE2 Kubernetes Cluster",id:"rke2-kubernetes-cluster",level:2}],d={toc:c},v="wrapper";function u(e){let{components:r,...o}=e;return(0,a.kt)(v,(0,n.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/node-driver"})),(0,a.kt)("p",null,"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."),(0,a.kt)("p",null,"A node driver is the same as a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine driver"),", and the project repo is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/docker-machine-driver-harvester"},"harvester/docker-machine-driver-harvester"),"."),(0,a.kt)("p",null,"Users can now provision RKE1/RKE2 Kubernetes clusters in Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.1")," or above using the built-in Harvester node driver.\nAdditionally, Harvester now can provide built-in ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v0.3/rancher/cloud-provider"},"Load Balancer support")," as well as raw cluster ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v0.3/rancher/csi-driver"},"persistent storage")," support to the guest Kubernetes cluster."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Currently only Rancher v2.6.1 or above is compatible with Harvester v0.3.0.")),(0,a.kt)("h2",{id:"enable-harvester-node-driver"},"Enable Harvester Node Driver"),(0,a.kt)("p",null,"The Harvester node driver is not enabled by default from the Rancher UI. Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster Management")," tab to enable the Harvester node driver."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Drivers")," page, then click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Node Drivers")," tab "),(0,a.kt)("li",{parentName:"ol"},"Select the Harvester node driver, then click ",(0,a.kt)("inlineCode",{parentName:"li"},"Activate")," to enable the Harvester node driver")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1690).Z,width:"3570",height:"1836"})),(0,a.kt)("p",null,"Now users can spin up Kubernetes clusters on top of the Harvester cluster and manage them there."),(0,a.kt)("h2",{id:"rke1-kubernetes-cluster"},"RKE1 Kubernetes Cluster"),(0,a.kt)("p",null,"Click to learn ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v0.3/rancher/node/rke1-cluster"},"how to create RKE1 Kubernetes Clusters"),"."),(0,a.kt)("h2",{id:"rke2-kubernetes-cluster"},"RKE2 Kubernetes Cluster"),(0,a.kt)("p",null,"Click to learn ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v0.3/rancher/node/rke2-cluster"},"how to create RKE2 Kubernetes Clusters"),"."))}u.isMDXComponent=!0},1690:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/enable-node-driver-226d5881768edb6fc02eff1afffb2f80.png"}}]);