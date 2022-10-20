"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),w=i,f=h["".concat(c,".").concat(w)]||h[w]||u[w]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2,sidebar_label:"Multiple NICs with VLAN-aware Switch",title:"",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],Description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},o="Mulitple NICs with VLAN-aware Switch",s={unversionedId:"networking/best-practice/multiple-nics-vlan-aware-switch",id:"networking/best-practice/multiple-nics-vlan-aware-switch",title:"",description:'In this best practice guide on how to configure "VLAN-aware", we will introduce Harvester VLAN network and external switch configuration for common scenario.',source:"@site/docs/networking/best-practice/multiple-nics-vlan-aware-switch.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/multiple-nics-vlan-aware-switch",permalink:"/zh/v1.1/networking/best-practice/multiple-nics-vlan-aware-switch",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/networking/best-practice/multiple-nics-vlan-aware-switch.md",tags:[],version:"current",lastUpdatedAt:1664266430,formattedLastUpdatedAt:"2022\u5e749\u670827\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Multiple NICs with VLAN-aware Switch",title:"",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],Description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/zh/v1.1/networking/best-practice/overview"},next:{title:"Multiple NICs with Non VLAN-aware Switch",permalink:"/zh/v1.1/networking/best-practice/multiple-nics-non-vlan-aware-switch"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"External Switch Configuration",id:"external-switch-configuration",level:2},{value:"Create a VLAN Network in Harvester",id:"create-a-vlan-network-in-harvester",level:2},{value:"Connect a VM to the subnet of the Harvester hosts",id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts",level:3},{value:"Connect a VM to specific VLAN network",id:"connect-a-vm-to-specific-vlan-network",level:3}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mulitple-nics-with-vlan-aware-switch"},"Mulitple NICs with VLAN-aware Switch"),(0,i.kt)("p",null,'In this best practice guide on how to configure "VLAN-aware", we will introduce Harvester VLAN network and external switch configuration for common scenario.'),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Hardware:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Three Harvester servers with daul ports network card."),(0,i.kt)("li",{parentName:"ul"},'One or more VLAN-aware switch(es). We will use "Cisco like" configuration as example.')),(0,i.kt)("p",null,"Network Specification:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assume that the subnet of the Harvester hosts is in VLAN 100."),(0,i.kt)("li",{parentName:"ul"},"Assume that the VMs are in the VLAN 101-200.")),(0,i.kt)("p",null,"Cabling:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Harvester servers are connected to the switch in a port from ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"6"),".")),(0,i.kt)("p",null,"The following diagram illustrates the cabling used for this guide:"),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"mulitple-nics-vlan-aware.png",src:n(98426).Z,width:"921",height:"506"})),(0,i.kt)("h2",{id:"external-switch-configuration"},"External Switch Configuration"),(0,i.kt)("p",null,'For the external switch configuration, we\'ll use a "Cisco-like" configuration as an example. You can apply the following configurations to your switch:'),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," ports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"switch# config terminal\nswitch(config)# interface ethernet1/<Port Number>\nswitch(config-if)# switchport\nswitch(config-if)# switchport mode access\nswitch(config-if)# switchport access 100\nswitch(config-if)# no shutdown\nswitch(config-if)# end\nswitch# copy running-config startup-config\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In this case, you need to avoid using ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," as the VLAN Network interface. This setting will only allow the traffic in the same subnet of ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," and disallow other VLAN traffic.")),(0,i.kt)("p",null,"For VLAN network ports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"switch# config terminal\nswitch(config)# interface ethernet1/<Port Number>\nswitch(config-if)# switchport\nswitch(config-if)# switchport mode trunk\nswitch(config-if)# switchport trunk allowed vlan 100-200\nswitch(config-if)# switchport trunk native vlan 1\nswitch(config-if)# no shutdown\nswitch(config-if)# end\nswitch# copy running-config startup-config\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We use the VLAN Trunk setup to set up the network ports for the VLAN Network. In this case, you can simply set VLAN 100 for the VMs in the Harvester VLAN network to connect to the same subnet of ",(0,i.kt)("inlineCode",{parentName:"p"},"harvester-mgmt"),".")),(0,i.kt)("h2",{id:"create-a-vlan-network-in-harvester"},"Create a VLAN Network in Harvester"),(0,i.kt)("p",null,"You can create a new VLAN network in the ",(0,i.kt)("strong",{parentName:"p"},"Advanced > Networks")," page, and click the ",(0,i.kt)("strong",{parentName:"p"},"Create")," button."),(0,i.kt)("p",null,"Specify the name and a VLAN ID that you want to create for the VLAN network ",(0,i.kt)("small",null,"(You can specify the same VLAN ID in different namespaces if you have ",(0,i.kt)("a",{parentName:"p",href:"/zh/v1.1/rancher/virtualization-management#multi-tenancy"},"Rancher multi-tenancy")," configured)"),"."),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{alt:"create-vlan-network.png",src:n(93789).Z,width:"3472",height:"1132"})),(0,i.kt)("h3",{id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts"},"Connect a VM to the subnet of the Harvester hosts"),(0,i.kt)("p",null,"Once you finished the configuration in the previous section, the external switch will send out untagged network traffic to the subnet of the Harvester hosts. In Harvester, the untagged traffic is received in VLAN 1."),(0,i.kt)("p",null,"Therefore, if you need VMs to connect to the VLAN ID 1, you need to create a VLAN ID 1 Network in Harvester also."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We strongly recommend against using VLAN 1 in this scenario.")),(0,i.kt)("h3",{id:"connect-a-vm-to-specific-vlan-network"},"Connect a VM to specific VLAN network"),(0,i.kt)("p",null,"You need to create a VLAN network with a specific VLAN ID and associate the VM with that VLAN network."),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/v1.1/networking/harvester-network"},"this page")," for additional information on Harvester Networking."))}u.isMDXComponent=!0},93789:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-2288440fcd22445ded421874d1ddcd24.png"},98426:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mulitple-nics-vlan-aware-eed7b30c0fa0ca9a3c0b590f6f17d735.png"}}]);