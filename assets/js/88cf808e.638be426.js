"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3624],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},688:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1,sidebar_label:"Rancher Integration",title:"",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],Description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},o=void 0,s={unversionedId:"rancher/rancher-integration",id:"version-v0.3/rancher/rancher-integration",title:"",description:"Rancher Integration",source:"@site/versioned_docs/version-v0.3/rancher/rancher-integration.md",sourceDirName:"rancher",slug:"/rancher/rancher-integration",permalink:"/harvester-docs/v0.3/rancher/rancher-integration",draft:!1,editUrl:"https://github.com/vickyhella/harvester-docs/edit/main/versioned_docs/version-v0.3/rancher/rancher-integration.md",tags:[],version:"v0.3",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Rancher Integration",title:"",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],Description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/harvester-docs/v0.3/monitoring/"},next:{title:"Virtualization Management",permalink:"/harvester-docs/v0.3/rancher/virtualization-management"}},c={},l=[{value:"Rancher Integration",id:"rancher-integration",level:2},{value:"Deploying Rancher",id:"deploying-rancher",level:2},{value:"Quick Start Guide",id:"quick-start-guide",level:3},{value:"Virtualization Management",id:"virtualization-management",level:2},{value:"Creating Kubernetes Clusters using the Harvester Node Driver",id:"creating-kubernetes-clusters-using-the-harvester-node-driver",level:2}],u={toc:l};function h(e){let{components:r,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rancher-integration"},"Rancher Integration"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher")," is an open-source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."),(0,a.kt)("p",null,"Users can now import and manage multiple Harvester clusters using the Rancher ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v0.3/rancher/virtualization-management"},"Virtualization Management")," page and leverage the Rancher ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/"},"authentication")," feature and RBAC control for ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"multi-tenancy")," support."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"virtualization-management",src:t(3009).Z,width:"2559",height:"1055"})),(0,a.kt)("h2",{id:"deploying-rancher"},"Deploying Rancher"),(0,a.kt)("p",null,"Previously in Harvester v0.2.0, users had the option to enable the embedded Rancher server. This option has been removed from Harvester ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.3.0"),". "),(0,a.kt)("p",null,"To use Rancher with Harvester, please install the Rancher server separately from the Harvester. As an option, You can spin up a VM in the Harvester and install the Rancher v2.6.1 or above to try out the integration features."),(0,a.kt)("h3",{id:"quick-start-guide"},"Quick Start Guide"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Begin creation of a custom cluster by provisioning a Linux host. Your host can be any of the following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A cloud-hosted virtual machine (VM)"),(0,a.kt)("li",{parentName:"ul"},"An on-premises VM"),(0,a.kt)("li",{parentName:"ul"},"A bare-metal server"))),(0,a.kt)("li",{parentName:"ol"},"Log into your Linux host using your preferred shell, such as PuTTy or a remote terminal connection."),(0,a.kt)("li",{parentName:"ol"},"From your shell, enter the following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# for a quick evaluation, you can run the Rancher server with the following command\n$ sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.2\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For more information about how to deploy the Rancher server, please refer to the Rancher ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/"},"documentation"),".")),(0,a.kt)("h2",{id:"virtualization-management"},"Virtualization Management"),(0,a.kt)("p",null,"With Rancher's Virtualization Management, users can now import and manage Harvester clusters. By clicking on one of the clusters, users are able to view and manage the downstream Harvester resources such as VMs, images, volumes, etc. Additionally, Rancher's VM feature has leveraged existing Rancher features such as authentication with various auth providers and multi-tenant support."),(0,a.kt)("p",null,"For more details, please reference the ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v0.3/rancher/virtualization-management"},"virtualization management")," page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"import-cluster",src:t(1757).Z,width:"2559",height:"988"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Virtualization Management is in Tech Preview.")),(0,a.kt)("h2",{id:"creating-kubernetes-clusters-using-the-harvester-node-driver"},"Creating Kubernetes Clusters using the Harvester Node Driver"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v0.3/rancher/node/node-driver"},"Harvester node driver")," is used to provision VMs in the Harvester cluster, which Rancher uses to launch and manage Kubernetes clusters."),(0,a.kt)("p",null,"Starting with Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.1"),", the Harvester node driver has been added by default. Users can reference this ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v0.3/rancher/node/node-driver"},"doc")," for more details."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester Node Driver is in Tech Preview.")))}h.isMDXComponent=!0},1757:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/import-harvester-cluster-f79a5e502100ff314e9e6405e39c7dcc.png"},3009:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/virtualization-management-ae828e59eb26dddfb2b64eed2fc56652.png"}}]);