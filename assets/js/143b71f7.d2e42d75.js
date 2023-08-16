"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=a,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63974:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:3,sidebar_label:"Edit a Virtual Machine",title:"Edit a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Virtual Machine","virtual machine","Edit a VM"],Description:"Edit Virtual Machines from the Harvester VM page."},o=void 0,s={unversionedId:"vm/edit-vm",id:"version-v1.0/vm/edit-vm",title:"Edit a Virtual Machine",description:"How to Edit a VM",source:"@site/versioned_docs/version-v1.0/vm/edit-vm.md",sourceDirName:"vm",slug:"/vm/edit-vm",permalink:"/harvester-docs/v1.0/vm/edit-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/vm/edit-vm.md",tags:[],version:"v1.0",lastUpdatedAt:1690422543,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Edit a Virtual Machine",title:"Edit a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Virtual Machine","virtual machine","Edit a VM"],Description:"Edit Virtual Machines from the Harvester VM page."},sidebar:"tutorialSidebar",previous:{title:"Create a Windows Virtual Machine",permalink:"/harvester-docs/v1.0/vm/create-windows-vm"},next:{title:"Access to the Virtual Machine",permalink:"/harvester-docs/v1.0/vm/access-to-the-vm"}},c={},l=[{value:"How to Edit a VM",id:"how-to-edit-a-vm",level:2},{value:"Basics",id:"basics",level:3},{value:"Networks",id:"networks",level:3},{value:"Volumes",id:"volumes",level:3},{value:"Access Credentials",id:"access-credentials",level:3}],d={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/edit-vm"})),(0,a.kt)("h2",{id:"how-to-edit-a-vm"},"How to Edit a VM"),(0,a.kt)("p",null,"After creating a virtual machine, you can edit your virtual machine by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Configurations")," button."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In addition to editing the description, a restart of the virtual machine is required for configuration changes to take effect.")),(0,a.kt)("h3",{id:"basics"},"Basics"),(0,a.kt)("p",null,"On the basics tab, you can config your requested CPU and memory, a VM restart is required for this configuration to take effect."),(0,a.kt)("p",null,"SSH Keys are injected into the cloud-init script when the virtual machine is first powered on. In order for the modified ssh key to take effect after the virtual machine is startup, the cloud-init script needs to be ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v1.0/faq#how-to-install-the-qemu-guest-agent-of-a-running-vm"},"reinstalled")," from your guest OS."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-vm",src:r(10760).Z,width:"4410",height:"1830"})),(0,a.kt)("h3",{id:"networks"},"Networks"),(0,a.kt)("p",null,"You can add additional VLAN networks to your VM instances after booting, the ",(0,a.kt)("inlineCode",{parentName:"p"},"management network")," is optional if you have the VLAN network configured."),(0,a.kt)("p",null,"Additional NICs are not enabled by default unless you configure them manually in the guest OS, e.g. using ",(0,a.kt)("a",{parentName:"p",href:"https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-network.html#sec-network-manconf"},"wicked for your OpenSUSE Server")," or ",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/server/docs/network-configuration"},"netplan for your Ubuntu Server"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-vm",src:r(3086).Z,width:"4364",height:"1298"})),(0,a.kt)("p",null,"For more details about the network implementation, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v1.0/networking/harvester-network"},"Networking")," page."),(0,a.kt)("h3",{id:"volumes"},"Volumes"),(0,a.kt)("p",null,"You can add additional volumes to the VM after booting. You can also expand the size of the volume after shutting down the VM, click the VM and go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Volumes")," tab, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Image Volume")," to edit the size of the expanded volume. After waiting for the resize to complete and restarting the VM, your disk will automatically finish expanding."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-vm",src:r(85457).Z,width:"4328",height:"1652"})),(0,a.kt)("h3",{id:"access-credentials"},"Access Credentials"),(0,a.kt)("p",null,"Access Credentials allow you to inject basic auth or ssh keys dynamically at run time when your guest OS has QEMU guest agent installed."),(0,a.kt)("p",null,"For more details please check the page here: ",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/v1.0/vm/access-to-the-vm#dynamic-ssh-key-injection-via-qemu-guest-agent"},"Dynamic SSH Key Injection via Qemu guest agent"),"."))}u.isMDXComponent=!0},10760:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-vm-basics-eaf16ba218734075de03443a9304b1c5.png"},3086:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-vm-networks-fd853639d0ba1d31996c3581f349a895.png"},85457:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/edit-vm-volumes-b2628811127878fff20680cdb259b3bc.png"}}]);