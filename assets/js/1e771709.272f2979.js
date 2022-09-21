"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),w=l(n),h=a,d=w["".concat(c,".").concat(h)]||w[h]||p[h]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=w;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},5687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3,sidebar_label:"Multiple NICs with Non VLAN-aware Switch",title:"",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],Description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},o="Mulitple NICs with Non VLAN-aware Switch",s={unversionedId:"networking/best-practice/multiple-nics-non-vlan-aware-switch",id:"networking/best-practice/multiple-nics-non-vlan-aware-switch",title:"",description:'In this best practice guide for "non VLAN-aware" switch, also known as "dummy" switch, we will introduce Harvester VLAN network and external switch configuration for common scenario.',source:"@site/docs/networking/best-practice/multiple-nics-non-vlan-aware-switch.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/multiple-nics-non-vlan-aware-switch",permalink:"/networking/best-practice/multiple-nics-non-vlan-aware-switch",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/networking/best-practice/multiple-nics-non-vlan-aware-switch.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Multiple NICs with Non VLAN-aware Switch",title:"",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],Description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},sidebar:"tutorialSidebar",previous:{title:"Multiple NICs with VLAN-aware Switch",permalink:"/networking/best-practice/multiple-nics-vlan-aware-switch"},next:{title:"Single NIC with VLAN-aware Switch",permalink:"/networking/best-practice/single-nic-vlan-aware-switch"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"External Switch Configuration",id:"external-switch-configuration",level:2},{value:"Create a VLAN Network in Harvester",id:"create-a-vlan-network-in-harvester",level:2},{value:"Connect a VM to the subnet of the Harvester hosts",id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts",level:3}],u={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mulitple-nics-with-non-vlan-aware-switch"},"Mulitple NICs with Non VLAN-aware Switch"),(0,a.kt)("p",null,'In this best practice guide for "non VLAN-aware" switch, also known as "dummy" switch, we will introduce Harvester VLAN network and external switch configuration for common scenario.'),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Hardware:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Three Harvester servers with dual ports network card."),(0,a.kt)("li",{parentName:"ul"},'One or more "non VLAN-aware" switch(es).')),(0,a.kt)("p",null,"Network Specification:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The host and the VM networks are in the same subnet.")),(0,a.kt)("p",null,"Cabling:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Harvester servers are connected to the switch in a port from ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"6"),".")),(0,a.kt)("p",null,"The following diagram illustrates the cabling used for this guide:"),(0,a.kt)("p",null,"   ",(0,a.kt)("img",{alt:"mulitple-nics-non-vlan-aware.png",src:n(1568).Z,width:"921",height:"501"})),(0,a.kt)("h2",{id:"external-switch-configuration"},"External Switch Configuration"),(0,a.kt)("p",null,'Typically, a "non VLAN-aware" switch cannot be configured.'),(0,a.kt)("h2",{id:"create-a-vlan-network-in-harvester"},"Create a VLAN Network in Harvester"),(0,a.kt)("p",null,"You can create a new VLAN network on the ",(0,a.kt)("strong",{parentName:"p"},"Advanced > Networks")," page, and click the ",(0,a.kt)("strong",{parentName:"p"},"Create")," button."),(0,a.kt)("p",null,"Specify the name and a VLAN ID that you want to create for the VLAN network ",(0,a.kt)("small",null,"(You can specify the same VLAN ID in different namespaces if you have ",(0,a.kt)("a",{parentName:"p",href:"/rancher/virtualization-management#multi-tenancy"},"Rancher multi-tenancy")," configured)"),"."),(0,a.kt)("p",null,"   ",(0,a.kt)("img",{alt:"create-vlan-network.png",src:n(1881).Z,width:"3472",height:"1132"})),(0,a.kt)("h3",{id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts"},"Connect a VM to the subnet of the Harvester hosts"),(0,a.kt)("p",null,'The "non VLAN-aware" switch will only send out untagged network traffic to the subnet of the Harvester hosts. In Harvester, the untagged traffic is received in VLAN 1.'),(0,a.kt)("p",null,"If you need a VM to connect to the subnet of the Harvester hosts, you have to create a VLAN Network in Harvester with VLAN ID 1."),(0,a.kt)("p",null,"   ",(0,a.kt)("img",{alt:"mulitple-nics-non-vlan-aware-vlan1.png",src:n(8667).Z,width:"921",height:"501"})),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/networking/harvester-network"},"this page")," for additional information on Harvester Networking."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you create a VLAN Network different from ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", the connection between VMs in different nodes will fail.")))}p.isMDXComponent=!0},1881:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-2288440fcd22445ded421874d1ddcd24.png"},8667:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mulitple-nics-non-vlan-aware-vlan1-abc87ab54eee06dc074cc595ad9e1579.png"},1568:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mulitple-nics-non-vlan-aware-b3df21002c14289b99e41211d7ce344c.png"}}]);