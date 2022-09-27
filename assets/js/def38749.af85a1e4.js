"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,k=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,sidebar_label:"Harvester Network",title:"",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],Description:"Harvester is built on Kubernetes, which uses CNI as an interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the Harvester network to provide a user-friendly way to configure networks for VMs."},i="Harvester Network",s={unversionedId:"networking/harvester-network",id:"version-v1.0/networking/harvester-network",title:"",description:"Harvester is built on top of Kubernetes and leverages its built-in CNI mechanism to provide the interface between network providers and its VM networks.",source:"@site/versioned_docs/version-v1.0/networking/harvester-network.md",sourceDirName:"networking",slug:"/networking/harvester-network",permalink:"/networking/harvester-network",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/harvester-network.md",tags:[],version:"v1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Network",title:"",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],Description:"Harvester is built on Kubernetes, which uses CNI as an interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the Harvester network to provide a user-friendly way to configure networks for VMs."},sidebar:"tutorialSidebar",previous:{title:"Resource Overcommit",permalink:"/vm/resource-overcommit"},next:{title:"Overview",permalink:"/networking/best-practice/overview"}},l={},c=[{value:"Management Network",id:"management-network",level:2},{value:"VLAN Network",id:"vlan-network",level:2},{value:"Enabling Default VLAN Network",id:"enabling-default-vlan-network",level:3},{value:"Create a VLAN Network",id:"create-a-vlan-network",level:3},{value:"Create a VM with VLAN Network",id:"create-a-vm-with-vlan-network",level:3},{value:"Configure DHCP servers on Networks",id:"configure-dhcp-servers-on-networks",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"harvester-network"},"Harvester Network"),(0,a.kt)("p",null,"Harvester is built on top of ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," and leverages its built-in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni"},"CNI")," mechanism to provide the interface between network providers and its VM networks. "),(0,a.kt)("p",null,"We have implemented the Harvester VLAN network based on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI to provide a pure L2-mode network, that would bridge your VMs to the host network interface and can be connected using the physical switch for both internal and external network communication. "),(0,a.kt)("p",null,"Moreover, the Harvester UI integrates the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/network-controller-harvester"},"harvester-network-controller")," to provide user-friendly VLAN network configurations, e.g., to create and manage VLAN networks or to add a VLAN network to the VM. "),(0,a.kt)("p",null,"Currently, Harvester supports two types of networks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#management-network"},"Management Network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#vlan-network"},"VLAN Network"))),(0,a.kt)("h2",{id:"management-network"},"Management Network"),(0,a.kt)("p",null,"Harvester uses ",(0,a.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/flannel/flannel"},"canal")," as its default management network. It is a built-in network that can be used directly from the cluster.\nBy default, the management network IP of a VM can only be accessed within the cluster nodes, and the management network IP will change after the VM reboot. This is non-typical behaviour that needs to be taken note of since VM IPs are expected to remain unchanged after a reboot."),(0,a.kt)("p",null,"However, users can leverage the Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/virtual_machines/service_objects/"},"service object")," to create a stable IP for your VMs with the management network."),(0,a.kt)("h2",{id:"vlan-network"},"VLAN Network"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-network-controller"},"Harvester network-controller")," leverages the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI plugins to implement its customized L2 bridge VLAN network. It helps to connect your VMs to the host network interface and can be accessed from internal and external networks using the physical switch."),(0,a.kt)("p",null,"The below diagram illustrates how the VLAN network works in Harvester."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:n(54951).Z,width:"1578",height:"1214"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Harvester network-controller creates a bridge for each node and a pair of veth for each VM to implement its VLAN network. The bridge acts as a switch to forward the network traffic from or to VMs and the veth pair is like the connected ports between VMs and the switch."),(0,a.kt)("li",{parentName:"ul"},"VMs within the same VLAN can communicate with each other, while the VMs from different VLANs can't."),(0,a.kt)("li",{parentName:"ul"},"The external switch ports connected to the hosts or other devices (such as the DHCP server) should be set as trunk or hybrid type and permit the specified VLANs."),(0,a.kt)("li",{parentName:"ul"},"Users can use VLAN with ",(0,a.kt)("inlineCode",{parentName:"li"},"PVID")," (default 1) to communicate with any normal untagged traffic.")),(0,a.kt)("h3",{id:"enabling-default-vlan-network"},"Enabling Default VLAN Network"),(0,a.kt)("p",null,"You can enable VLAN network via ",(0,a.kt)("strong",{parentName:"p"},"Settings > vlan"),". Select ",(0,a.kt)("inlineCode",{parentName:"p"},"enabled")," and you will be able to select one network interface from the nodes as the default VLAN NIC config."),(0,a.kt)("p",null,"For better network performances and isolation, we recommend to choose different network interfaces for the VLAN and the one used for the management network (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-mgmt"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76188).Z,width:"3484",height:"904"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"When selecting the network interface, the value in parentheses represents the distribution percentage of the network interface on all hosts. If a network interface with a value less than 100% is selected, the network interface needs to be manually specified on the host where the VLAN network configuration fails."),(0,a.kt)("li",{parentName:"ul"},"Modifying the default VLAN network setting will not update the existing configured host network."),(0,a.kt)("li",{parentName:"ul"},"Harvester VLAN network supports bond interfaces. Currently it can only be created automatically via ",(0,a.kt)("a",{parentName:"li",href:"/install/harvester-configuration#installnetworks"},"PXE Boot Configuration"),". You may also login to the node and create it manually."))),(0,a.kt)("p",null,"You can also customize each node's VLAN network via the ",(0,a.kt)("strong",{parentName:"p"},"Hosts > Network")," tab."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:n(46685).Z,width:"3476",height:"1128"})),(0,a.kt)("h3",{id:"create-a-vlan-network"},"Create a VLAN Network"),(0,a.kt)("p",null,"A new VLAN network can be created via the ",(0,a.kt)("strong",{parentName:"p"},"Advanced > Networks")," page and clicking the ",(0,a.kt)("strong",{parentName:"p"},"Create")," button."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Specify the name and VLAN ID that you want to create for the VLAN network ",(0,a.kt)("small",null,"(You can specify the same vlan ID on different namespaces of ",(0,a.kt)("a",{parentName:"p",href:"/rancher/virtualization-management#multi-tenancy"},"Rancher multi-tenancy")," support)"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"create-vlan-network.png",src:n(71457).Z,width:"3472",height:"1132"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure a route in order to allow the hosts to connect to the VLAN network using IPv4 addresses. The CIDR and gateway of the VLAN network are mandatory parameters for the route configuration.  You can configure the route by choosing one of the following options:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"auto(DHCP) mode: the Harvester network controller will get the CIDR and gateway values from the DHCP server using the DHCP protocol. Optionally, you can specify the DHCP server address.\n",(0,a.kt)("img",{src:n(70025).Z,width:"3476",height:"1190"})),(0,a.kt)("li",{parentName:"ul"},"manual mode: You need to specify the CIDR and gateway values manually.\n",(0,a.kt)("img",{src:n(84735).Z,width:"3462",height:"1174"}))))),(0,a.kt)("h3",{id:"create-a-vm-with-vlan-network"},"Create a VM with VLAN Network"),(0,a.kt)("p",null,"Users can now create a new VM using the above configured VLAN network,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Create")," button on the ",(0,a.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,a.kt)("li",{parentName:"ul"},"Specify the required parameters and click the ",(0,a.kt)("strong",{parentName:"li"},"Networks")," tab."),(0,a.kt)("li",{parentName:"ul"},"Either configure the default network to be a VLAN network or select an additional network to add.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(43082).Z,width:"3478",height:"1620"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Only the first NIC will be enabled by default. Users can either choose to use a management network or a VLAN network. "),(0,a.kt)("li",{parentName:"ul"},"You need to be careful to configure virtual machines with multiple NICs to avoid connectivity issues. You can refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/multiple-nics-vm-connectivity"},"knowledge base")," for more details."),(0,a.kt)("li",{parentName:"ul"},"You will need to select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Install guest agent")," option in the ",(0,a.kt)("strong",{parentName:"li"},"Advanced Options")," tab to get the VLAN network IP address from the Harvester UI."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can choose to add one or multiple network interface cards. The additional network interface cards can be enabled by default via the cloud-init network data setting. e.g.,")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},"version: 1\nconfig:\n  - type: physical\n    name: enp1s0 # name is varies upon OS image\n    subnets:\n      - type: dhcp\n  - type: physical\n    name: enp2s0\n    subnets:\n      - type: static\n        address: 10.0.0.100/24 # IP address is varies upon your environment\n")),(0,a.kt)("p",null,"Harvester is fully compatible with the ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-init network configs"),". You can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/network-config-format-v2.html"},"documentation")," for more details."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you add additional NICs after the VM has started, you will need to manually configure IPs for the additional NICs.")),(0,a.kt)("h3",{id:"configure-dhcp-servers-on-networks"},"Configure DHCP servers on Networks"),(0,a.kt)("p",null,"By default, the Harvester VLAN network would expect your router to provide a DHCP server that VMs can request and assign IP addresses automatically."),(0,a.kt)("p",null,"If you are running Harvester in a virtual environment that does not contain a DHCP server, you may consider deploying a DHCP server manually on a node or using a containerized method, e.g, like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/947"},"#947"),"."))}p.isMDXComponent=!0},70025:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-auto-0f1b573b3283fb966b78afb121060c57.png"},84735:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-manual-a4f285d074a76477a305cad9f34b4c3d.png"},71457:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-2288440fcd22445ded421874d1ddcd24.png"},76188:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enable-vlan-6aa8a7458a8983c43e192920360a3ce5.png"},46685:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node-network-configuration-1664055debd1f63c39b7ace08668d06b.png"},54951:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vlan-case-696fde4079834afd0a18b00e0c8e164c.png"},43082:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vm-network-configuration-00ef4ac66104b0a8ccac3f8026435a59.png"}}]);