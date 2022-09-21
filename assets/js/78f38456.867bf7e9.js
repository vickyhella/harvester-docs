"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2753],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),k=d(a),g=n,f=k["".concat(o,".").concat(g)]||k[g]||p[g]||l;return a?r.createElement(f,i(i({ref:e},s),{},{components:a})):r.createElement(f,i({ref:e},s))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=k;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:n,i[1]=m;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3132:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:1,sidebar_label:"Requirements",title:"",keywords:["Installation Requirements"],Description:"Outline the Harvester installation requirements"},i="Requirements",m={unversionedId:"install/requirements",id:"install/requirements",title:"",description:"As an HCI solution on bare metal servers, Harvester has some minimum requirements as outlined below.",source:"@site/docs/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/install/requirements",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Requirements",title:"",keywords:["Installation Requirements"],Description:"Outline the Harvester installation requirements"},sidebar:"tutorialSidebar",previous:{title:"Harvester Overview",permalink:"/"},next:{title:"ISO Installation",permalink:"/install/iso-install"}},o={},d=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Networking",id:"networking",level:2},{value:"Harvester Hosts Inbound Rules",id:"harvester-hosts-inbound-rules",level:3},{value:"Integrating Harvester with Rancher",id:"integrating-harvester-with-rancher",level:3},{value:"Guest clusters",id:"guest-clusters",level:4}],s={toc:d};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"As an HCI solution on bare metal servers, Harvester has some minimum requirements as outlined below."),(0,n.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.kt)("p",null,"To get the Harvester server up and running the following minimum hardware is required:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Requirements"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"x86_64 only. Hardware-assisted virtualization is required. 8-core processor minimum; 16-core or above preferred")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"32 GB minimum, 64 GB or above preferred")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk Capacity"),(0,n.kt)("td",{parentName:"tr",align:"left"},"140 GB minimum for testing, 500 GB or above preferred for production")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk Performance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk(SSD/NVMe). Management nodes (first 3 nodes) must be ",(0,n.kt)("a",{parentName:"td",href:"https://www.ibm.com/cloud/blog/using-fio-to-tell-whether-your-storage-is-fast-enough-for-etcd"},"fast enough for Etcd"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Card"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 Gbps Ethernet minimum for testing, 10Gbps Ethernet recommended for production")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Switch"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trunking of ports required for VLAN support")))),(0,n.kt)("p",null,"  We recommend server-class hardware for best results. Laptops and nested virtualization are not officially supported."),(0,n.kt)("h2",{id:"networking"},"Networking"),(0,n.kt)("h3",{id:"harvester-hosts-inbound-rules"},"Harvester Hosts Inbound Rules"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Protocol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Port"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Source"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2379"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Etcd client port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2381"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Etcd health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2380"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Etcd peer port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10010"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Containerd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6443"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9345"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10252"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10257"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager secure port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10251"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10259"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler secure port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10250"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubelet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-proxy health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10258"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-controller-manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9091"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal calico-node felix")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9099"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal CNI health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8472"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal CNI with VxLAN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2112"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-vip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6444"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RKE2 agent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6060"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-disk-manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10246/10247/10248/10249"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx worker process")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8181"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8444"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10245"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"80"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9796"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-exporter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"30000-32767"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NodePort port range")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sshd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"68"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Wicked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3260"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iscsid")))),(0,n.kt)("p",null,"Typically, all outbound traffic will be allowed."),(0,n.kt)("h3",{id:"integrating-harvester-with-rancher"},"Integrating Harvester with Rancher"),(0,n.kt)("p",null,"If you want to ",(0,n.kt)("a",{parentName:"p",href:"/rancher/rancher-integration"},"integrate Harvester with Rancher"),", you need to make sure, that all Harvester nodes can connect to TCP port 443 of the Rancher load balancer."),(0,n.kt)("p",null,"The VMs of Kubernetes clusters, that are provisioned from Rancher into Harvester, also need to be able to connect to TCP port 443 of the Rancher load balancer. Otherwise the cluster won't be manageable by Rancher. For more information see also ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture/"},"Rancher Architecture"),"."),(0,n.kt)("h4",{id:"guest-clusters"},"Guest clusters"),(0,n.kt)("p",null,"As for the port requirements for the guest clusters deployed inside Harvester virtual machines, refer to the following links."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"K3s: ",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking"},"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking")),(0,n.kt)("li",{parentName:"ul"},"RKE: ",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"https://rancher.com/docs/rke/latest/en/os/#ports")),(0,n.kt)("li",{parentName:"ul"},"RKE2: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/requirements/#networking"},"https://docs.rke2.io/install/requirements/#networking"))))}p.isMDXComponent=!0}}]);