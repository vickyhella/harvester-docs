"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5647],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),v=n,h=p["".concat(l,".").concat(v)]||p[v]||d[v]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},43660:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={id:"overview",sidebar_position:1,sidebar_label:"Harvester Overview",slug:"/",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],Description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},o=void 0,s={unversionedId:"overview",id:"version-v1.1/overview",title:"Harvester Overview",description:"Harvester is a modern, open, interoperable, hyperconverged infrastructure (HCI) solution built on Kubernetes. It is an open-source alternative designed for operators seeking a cloud-native HCI solution. Harvester runs on bare metal servers and provides integrated virtualization and distributed storage capabilities. In addition to traditional virtual machines (VMs), Harvester supports containerized environments automatically through integration with Rancher. It offers a solution that unifies legacy virtualized infrastructure while enabling the adoption of containers from core to edge locations.",source:"@site/versioned_docs/version-v1.1/index.md",sourceDirName:".",slug:"/",permalink:"/harvester-docs/v1.1/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/index.md",tags:[],version:"v1.1",lastUpdatedAt:1694153688,formattedLastUpdatedAt:"Sep 8, 2023",sidebarPosition:1,frontMatter:{id:"overview",sidebar_position:1,sidebar_label:"Harvester Overview",slug:"/",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],Description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},sidebar:"docs",next:{title:"Hardware and Network Requirements",permalink:"/harvester-docs/v1.1/install/requirements"}},l={},u=[{value:"Harvester Architecture",id:"harvester-architecture",level:2},{value:"Harvester Features",id:"harvester-features",level:2},{value:"Harvester Dashboard",id:"harvester-dashboard",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://harvesterhci.io/"},"Harvester")," is a modern, open, interoperable, ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hyper-converged_infrastructure"},"hyperconverged infrastructure (HCI)")," solution built on Kubernetes. It is an open-source alternative designed for operators seeking a ",(0,n.kt)("a",{parentName:"p",href:"https://about.gitlab.com/topics/cloud-native/"},"cloud-native")," HCI solution. Harvester runs on bare metal servers and provides integrated virtualization and distributed storage capabilities. In addition to traditional virtual machines (VMs), Harvester supports containerized environments automatically through integration with ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/integrations-in-rancher/harvester"},"Rancher"),". It offers a solution that unifies legacy virtualized infrastructure while enabling the adoption of containers from core to edge locations."),(0,n.kt)("h2",{id:"harvester-architecture"},"Harvester Architecture"),(0,n.kt)("p",null,"The Harvester architecture consists of cutting-edge open-source technologies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Linux OS.")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rancher/elemental-toolkit"},"Elemental for SLE-Micro 5.3")," is at the core of Harvester and is an immutable Linux distribution designed to remove as much OS maintenance as possible in a Kubernetes cluster. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Built on top of Kubernetes.")," ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," has become the predominant infrastructure language across all form factors, and Harvester is an HCI solution with Kubernetes under the hood."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Virtualization management with Kubevirt.")," ",(0,n.kt)("a",{parentName:"li",href:"https://kubevirt.io/"},"Kubevirt")," provides virtualization management using KVM on top of Kubernetes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Storage management with Longhorn.")," ",(0,n.kt)("a",{parentName:"li",href:"https://longhorn.io/"},"Longhorn")," provides distributed block storage and tiering."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Observability with Grafana and Prometheus.")," ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," and ",(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")," provide robust monitoring and logging.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(97792).Z,width:"943",height:"486"})),(0,n.kt)("h2",{id:"harvester-features"},"Harvester Features"),(0,n.kt)("p",null,"Harvester is an enterprise-ready, easy-to-use infrastructure platform that leverages local, direct attached storage instead of complex external SANs. It utilizes Kubernetes API as a unified automation language across container and VM workloads. Some key features of Harvester include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Easy to get started.")," Since Harvester ships as a bootable appliance image, you can install it directly on a bare metal server with the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/releases"},"ISO image")," or automatically install it using ",(0,n.kt)("a",{parentName:"li",href:"/harvester-docs/v1.1/install/pxe-boot-install"},"iPXE")," scripts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VM lifecycle management.")," Easily create, edit, clone, and delete VMs, including SSH-Key injection, cloud-init, and graphic and serial port console."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VM live migration.")," Move a VM to a different host or node with zero downtime."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"VM backup, snapshot, and restore.")," Back up your VMs from NFS, S3 servers, or NAS devices. Use your backup to restore a failed VM or create a new VM on a different cluster."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Storage management.")," Harvester supports distributed block storage and tiering. Volumes represent storage; you can easily create, edit, clone, or export a volume."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Network management.")," Supports using a virtual IP (VIP) and multiple Network Interface Cards (NICs). If your VMs need to connect to the external network, create a VLAN or untagged network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Integration with Rancher.")," Access Harvester directly within Rancher through Rancher\u2019s Virtualization Management page and manage your VM workloads alongside your Kubernetes clusters.")),(0,n.kt)("h2",{id:"harvester-dashboard"},"Harvester Dashboard"),(0,n.kt)("p",null,"Harvester provides a powerful and easy-to-use web-based dashboard for visualizing and managing your infrastructure. Once you install Harvester, you can access the IP address for the Harvester Dashboard from the node's terminal."),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"99%",height:"450",src:"https://www.youtube.com/embed/Ngsk7m6NYf4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}d.isMDXComponent=!0},97792:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-6e8723efeab0d976b53f60c563e3e843.svg"}}]);