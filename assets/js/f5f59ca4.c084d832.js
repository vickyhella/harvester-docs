"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,k=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Harvester Network",title:"",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],Description:"Harvester is built on Kubernetes, which uses CNI as an interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the Harvester network to provide a user-friendly way to configure networks for VMs."},i="Harvester Network",s={unversionedId:"networking/harvester-network",id:"version-v0.3/networking/harvester-network",title:"",description:"Harvester is built on top of Kubernetes and leverages its built-in CNI mechanism to provide the interface between network providers and its VM networks.",source:"@site/versioned_docs/version-v0.3/networking/harvester-network.md",sourceDirName:"networking",slug:"/networking/harvester-network",permalink:"/v0.3/networking/harvester-network",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/networking/harvester-network.md",tags:[],version:"v0.3",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Network",title:"",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],Description:"Harvester is built on Kubernetes, which uses CNI as an interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the Harvester network to provide a user-friendly way to configure networks for VMs."},sidebar:"tutorialSidebar",previous:{title:"Hot-Plug Volumes",permalink:"/v0.3/vm/hotplug-volume"},next:{title:"Monitoring",permalink:"/v0.3/monitoring/"}},l={},c=[{value:"Management Network",id:"management-network",level:2},{value:"VLAN Network",id:"vlan-network",level:2},{value:"Enabling Default VLAN Network",id:"enabling-default-vlan-network",level:3},{value:"Create a VLAN Network",id:"create-a-vlan-network",level:3},{value:"Create a VM with VLAN Network",id:"create-a-vm-with-vlan-network",level:3},{value:"Configure DHCP servers on Networks",id:"configure-dhcp-servers-on-networks",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"harvester-network"},"Harvester Network"),(0,a.kt)("p",null,"Harvester is built on top of ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," and leverages its built-in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containernetworking/cni"},"CNI")," mechanism to provide the interface between network providers and its VM networks. "),(0,a.kt)("p",null,"We have implemented the Harvester VLAN network based on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI to provide a pure L2-mode network, that would bridge your VMs to the host network interface and can be connected using the physical switch for both internal and external network communication. "),(0,a.kt)("p",null,"Moreover, the Harvester UI integrates the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/network-controller-harvester"},"harvester-network-controller")," to provide user-friendly VLAN network configurations, e.g., to create and manage VLAN networks or to add a VLAN network to the VM. "),(0,a.kt)("p",null,"Currently, Harvester supports two types of networks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#management-network"},"Management network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#vlan-network"},"VLAN"))),(0,a.kt)("h2",{id:"management-network"},"Management Network"),(0,a.kt)("p",null,"Harvester uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel"},"flannel")," CNI as its default management network. It is a built-in network that can be used directly from the cluster. However, the management network IP is not persisted and will be changed after a VM reboot."),(0,a.kt)("p",null,"Additionally, users can leverage the Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/virtual_machines/service_objects/"},"service object")," to create a stable IP for your VMs with the management network."),(0,a.kt)("h2",{id:"vlan-network"},"VLAN Network"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-network-controller"},"Harvester network-controller")," leverages the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI plugins to implement its customized L2 bridge VLAN network. It helps to connect your VMs to the host network interface and can be accessed from internal and external networks using the physical switch."),(0,a.kt)("p",null,"The below diagram illustrates how the VLAN network works in Harvester."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:r(78927).Z,width:"1578",height:"1214"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Harvester network-controller creates a bridge for each node and a pair of veth for each VM to implement its VLAN network. The bridge acts as a switch to forward the network traffic from or to VMs and the veth pair is like the connected ports between VMs and the switch."),(0,a.kt)("li",{parentName:"ul"},"VMs within the same VLAN can communicate with each other, while the VMs from different VLANs can't."),(0,a.kt)("li",{parentName:"ul"},"The external switch ports connected to the hosts or other devices (such as the DHCP server) should be set as trunk or hybrid type and permit the specified VLANs."),(0,a.kt)("li",{parentName:"ul"},"Users can use VLAN with ",(0,a.kt)("inlineCode",{parentName:"li"},"PVID")," (default 1) to communicate with any normal untagged traffic.")),(0,a.kt)("h3",{id:"enabling-default-vlan-network"},"Enabling Default VLAN Network"),(0,a.kt)("p",null,"Users can enable the VLAN network via ",(0,a.kt)("strong",{parentName:"p"},"Setting > VLAN")," and selecting a common physical NIC for the nodes as the default VLAN config ."),(0,a.kt)("p",null,"It is recommended to choose a separate NIC for the VLAN other than the one used for the management network (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-mgmt"),") for better network performance and isolation."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Modifying the default VLAN network setting will not update the existing configured host network."),(0,a.kt)("li",{parentName:"ul"},"Harvester VLAN network supports bond interfaces, currently it can only be created automatically via ",(0,a.kt)("a",{parentName:"li",href:"/install/harvester-configuration/#example_11"},"PEX Boot Configuration"),". Users may also login to the node and create it manually."))),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:r(71249).Z,width:"944",height:"463"})),(0,a.kt)("p",null,"Optional: Users can customize each node's VLAN network via the ",(0,a.kt)("strong",{parentName:"p"},"HOST > Network")," tab."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:r(81067).Z,width:"943",height:"551"})),(0,a.kt)("h3",{id:"create-a-vlan-network"},"Create a VLAN Network"),(0,a.kt)("p",null,"A new VLAN network can be created via the ",(0,a.kt)("strong",{parentName:"p"},"Advanced > Networks")," page and clicking the ",(0,a.kt)("strong",{parentName:"p"},"Create")," button."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Specify the name and VLAN ID that you want to create for the VLAN network."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"create-vlan-network.png",src:r(25321).Z,width:"946",height:"572"})))),(0,a.kt)("h3",{id:"create-a-vm-with-vlan-network"},"Create a VM with VLAN Network"),(0,a.kt)("p",null,"Users can now create a new VM using the above configured VLAN network,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Create")," button on the ",(0,a.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,a.kt)("li",{parentName:"ul"},"Specify the required parameters and click the ",(0,a.kt)("strong",{parentName:"li"},"Networks")," tab."),(0,a.kt)("li",{parentName:"ul"},"Either configure the default network to be a VLAN network or select an additional network to add.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(15862).Z,width:"940",height:"886"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Only the first NIC will be enabled by default. Users can either choose to use a management network or a VLAN network. "),(0,a.kt)("li",{parentName:"ul"},"You will need to select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Install guest agent")," option in the ",(0,a.kt)("strong",{parentName:"li"},"Advanced Options")," tab to get the VLAN network IP address from the Harvester UI."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Users can choose to add one or multiple network interface cards. Additional network interface card can be enabled by default via setting the cloud-init network data. E.g.,")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},"version: 1\nconfig:\n  - type: physical\n    name: enp1s0 # name is varies upon OS image\n    subnets:\n      - type: dhcp\n  - type: physical\n    name: enp2s0\n    subnets:\n      - type: DHCP\n")),(0,a.kt)("p",null,"For more detailed configs you may refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/network-config-format-v2.html"},"cloud-init network configs"),"."),(0,a.kt)("h3",{id:"configure-dhcp-servers-on-networks"},"Configure DHCP servers on Networks"),(0,a.kt)("p",null,"By default, the Harvester VLAN network would expect your router to provide a DHCP server that VMs can request and assign IP addresses automatically."),(0,a.kt)("p",null,"If you are running Harvester in a virtual environment that does not contain a DHCP server, you may consider deploying a DHCP server manually in a node or using a containerized method. Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/947"},"this issue")," as an example."))}u.isMDXComponent=!0},25321:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-network-40766e0128609173170273919f5be4b9.png"},71249:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enable-vlan-85f1f8cdccba9bf144068fc1e6797148.png"},81067:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/node-network-configuration-84f694992a0fa13d35816166ed4dac78.png"},78927:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vlan-case-696fde4079834afd0a18b00e0c8e164c.png"},15862:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vm-network-configuration-0605db12204921a94f4cfc0842b97d59.png"}}]);