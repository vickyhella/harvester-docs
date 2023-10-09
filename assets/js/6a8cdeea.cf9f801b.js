"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,u=m["".concat(p,".").concat(g)]||m[g]||k[g]||o;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},66499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3,sidebar_label:"Harvester Network Deep Dive",title:"Harvester Network Deep Dive",keywords:["Harvester","Networking","Topology"]},i=void 0,l={unversionedId:"networking/deep-dive",id:"version-v1.1/networking/deep-dive",title:"Harvester Network Deep Dive",description:"The network topology below reveals how we implement the Harvester network.",source:"@site/versioned_docs/version-v1.1/networking/deep-dive.md",sourceDirName:"networking",slug:"/networking/deep-dive",permalink:"/harvester-docs/v1.1/networking/deep-dive",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/networking/deep-dive.md",tags:[],version:"v1.1",lastUpdatedAt:1689662319,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Harvester Network Deep Dive",title:"Harvester Network Deep Dive",keywords:["Harvester","Networking","Topology"]},sidebar:"docs",previous:{title:"Network",permalink:"/harvester-docs/v1.1/networking/harvester-network"},next:{title:"Logging",permalink:"/harvester-docs/v1.1/logging/harvester-logging"}},p={},s=[{value:"KubeVirt Networking",id:"kubevirt-networking",level:2},{value:"Harvester Networking",id:"harvester-networking",level:2},{value:"Bridge Network",id:"bridge-network",level:3},{value:"Management Network",id:"management-network",level:3},{value:"External Networking",id:"external-networking",level:2}],d={toc:s},m="wrapper";function k(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/networking/deep-dive"})),(0,a.kt)("p",null,"The network topology below reveals how we implement the Harvester network."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(54763).Z,width:"1175",height:"660"})),(0,a.kt)("p",null,"The diagram contains ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v1.1/networking/index#built-in-cluster-network"},"the built-in cluster network mgmt")," and a ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v1.1/networking/index#custom-cluster-network"},"custom cluster network")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"oob"),"."),(0,a.kt)("p",null,"As shown above, the Harvester network primarily focuses on OSI model layer 2. We leverage Linux network devices and protocols to construct traffic paths for the communication between VM to VM, VM to host, and VM to external network devices."),(0,a.kt)("p",null,"The Harvester network is composed of three layers, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"KubeVirt networking layer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Harvester networking layer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"external networking layer"))),(0,a.kt)("h2",{id:"kubevirt-networking"},"KubeVirt Networking"),(0,a.kt)("p",null,"The general purpose of KubeVirt is to run VM inside the Kubernetes pod. The KubeVirt network builds the network path between the pod and VM.\nPlease refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubevirt.io/2018/KubeVirt-Network-Deep-Dive.html"},"KubeVirt official document")," for more details."),(0,a.kt)("h2",{id:"harvester-networking"},"Harvester Networking"),(0,a.kt)("p",null,"Harvester networking is designed to build the network path between pods and the host network. It implements a management network, VLAN networks and untagged networks. We can refer to the last two networks as ",(0,a.kt)("strong",{parentName:"p"},"bridge networks"),", because bridge plays a vital role in their implementation."),(0,a.kt)("h3",{id:"bridge-network"},"Bridge Network"),(0,a.kt)("p",null,"We leverage ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus CNI")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge CNI")," to implement the bridge network."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Multus CNI is a Container Network Interface (CNI) plugin for Kubernetes that can attach multiple network interfaces to a pod. Its capability allows a VM to have one NIC for the management network and multiple NICs for the bridge network.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using the bridge CNI, the VM pod will be plugged into the L2 bridge specified in the Network Attachment Definition config."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# Example 1\n{\n    "cniVersion": "0.3.1",\n    "name": "vlan100",\n    "type": "bridge",\n    "bridge": "mgmt-br",\n    "promiscMode": true,\n    "vlan": 100,\n}\n')),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'# Example 2\n{\n    "cniVersion": "0.3.1",\n    "name": "untagged-network",\n    "type": "bridge",\n    "bridge": "oob-br",\n    "promiscMode": true,\n    "ipam": {}\n}\n')),(0,a.kt)("p",{parentName:"li"},"Example 1 is a typical VLAN configuration with VLAN ID 100, while Example 2 is an untagged network configuration with no VLAN ID. The VM pod configured using Example 1 will be plugged into the bridge ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-br"),", while the VM pod using Example 2 will be plugged into the bridge ",(0,a.kt)("inlineCode",{parentName:"p"},"oob-br"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To achieve high availability and fault tolerance, a bond device where the real NICs are bound is created to serve as the uplink of the bridge. By default, this bond device will allow the target tagged traffic/packets to pass through."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"harvester-0:/home/rancher # bridge -c vlan show dev oob-bo\nport       vlan ids\noob-bo     1 PVID Egress Untagged\n           100\n           200\n")),(0,a.kt)("p",{parentName:"li"},"The example above shows that the bond ",(0,a.kt)("inlineCode",{parentName:"p"},"oob-bo")," allows packages with tag 1, 100 or 200."))),(0,a.kt)("h3",{id:"management-network"},"Management Network"),(0,a.kt)("p",null,"The management network is based on ",(0,a.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/flannel/flannel"},"Canal"),"."),(0,a.kt)("p",null,"It is worth mentioning that the Canal interface where the Harvester configures the node IP is the bridge ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-br")," or a VLAN sub-interface of ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-br"),". This design has two benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The built-in ",(0,a.kt)("inlineCode",{parentName:"li"},"mgmt")," cluster network supports both the management network and bridge network."),(0,a.kt)("li",{parentName:"ul"},"With the VLAN network interface, we can assign a VLAN ID to the management network.")),(0,a.kt)("p",null,"As components of the mgmt cluster network, it's not allowed to delete or modify the bridge mgmt-br, the bond mgmt-bo and the VLAN device."),(0,a.kt)("h2",{id:"external-networking"},"External Networking"),(0,a.kt)("p",null,"External network devices typically refer to switches and DHCP servers. With a cluster network, we can group host NICs and connect them to different switches for traffic isolation. Below are some usage instructions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To allow tagged packets to pass, you need to set the port type of the external switch or other devices (such as a DHCP server) to trunk or hybrid mode and allow the specified VLAN tag.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You need to configure link aggregation on the switch based on the bond mode of the peer host. Link aggregation can work in manual mode or LACP mode. The following lists the correspondence between bond mode and link aggregation mode."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bond Mode"),(0,a.kt)("th",{parentName:"tr",align:null},"Link Aggregation Mode"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 0(balance-rr)"),(0,a.kt)("td",{parentName:"tr",align:null},"manual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 1(active-backup)"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mdoe 2(balance-oxr)"),(0,a.kt)("td",{parentName:"tr",align:null},"manual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 3(broadcast)"),(0,a.kt)("td",{parentName:"tr",align:null},"manual")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 4(802.3ad)"),(0,a.kt)("td",{parentName:"tr",align:null},"LACP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 5(balance-tlb)"),(0,a.kt)("td",{parentName:"tr",align:null},"none")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode 6(balance-alb)"),(0,a.kt)("td",{parentName:"tr",align:null},"none"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you want VMs in a VLAN to be able to obtain IP addresses through the DHCP protocol, configure an IP pool for that VLAN in the DHCP server."))))}k.isMDXComponent=!0},54763:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/topology-92ab59d983544bad738764a2105c9a06.png"}}]);