"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:1,sidebar_label:"Host Management",title:""},i="Host Management",s={unversionedId:"host/host",id:"host/host",title:"",description:"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster.",source:"@site/docs/host/host.md",sourceDirName:"host",slug:"/host/",permalink:"/next/host/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/host/host.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Host Management",title:""},sidebar:"tutorialSidebar",previous:{title:"Upload Images",permalink:"/next/upload-image"},next:{title:"Create a Virtual Machine",permalink:"/next/vm/create-vm"}},l={},d=[{value:"Node Maintenance",id:"node-maintenance",level:2},{value:"Cordoning a Node",id:"cordoning-a-node",level:2},{value:"Deleting a Node",id:"deleting-a-node",level:2},{value:"Multi-disk Management - <code>Tech Preview</code>",id:"multi-disk-management---tech-preview",level:2}],m={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"host-management"},"Host Management"),(0,o.kt)("p",null,"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Because Harvester is built on top of Kubernetes and uses etcd as its database, the maximum node fault toleration is one when there are three management nodes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"host.png",src:n(24069).Z,width:"3578",height:"1254"})),(0,o.kt)("h2",{id:"node-maintenance"},"Node Maintenance"),(0,o.kt)("p",null,"For admin users, you can click ",(0,o.kt)("strong",{parentName:"p"},"Enable Maintenance Mode")," to evict all VMs from a node automatically. It will leverage the ",(0,o.kt)("inlineCode",{parentName:"p"},"VM live migration")," feature to migrate all VMs to other nodes automatically. Note that at least two active nodes are required to use this feature."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"node-maintenance.png",src:n(55123).Z,width:"3042",height:"1058"})),(0,o.kt)("h2",{id:"cordoning-a-node"},"Cordoning a Node"),(0,o.kt)("p",null,"Cordoning a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions. When you\u2019re done, power back on and make the node schedulable again by uncordoning it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cordon-node.png",src:n(14505).Z,width:"3062",height:"1554"})),(0,o.kt)("h2",{id:"deleting-a-node"},"Deleting a Node"),(0,o.kt)("p",null,"Deleting a node is done in two phases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete the node from Harvester"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," page"),(0,o.kt)("li",{parentName:"ul"},"On the node you want to modify, click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Delete")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Uninstall RKE2 from the node"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Login to the node as root"),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," to delete the whole RKE2 service.")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You will lose all data of the control plane node after deleing the RKE2 service.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There's a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1497"},"known issue")," about node hard delete.\nOnce resolved, the last step can be skipped.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"delete.png",src:n(65091).Z,width:"1241",height:"482"})),(0,o.kt)("h2",{id:"multi-disk-management---tech-preview"},"Multi-disk Management - ",(0,o.kt)("inlineCode",{parentName:"h2"},"Tech Preview")),(0,o.kt)("p",null,"Users can view and add multiple disks as additional data volumes from the host detail page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,o.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Disks")," tab and click ",(0,o.kt)("strong",{parentName:"li"},"Add Disks"),"."),(0,o.kt)("li",{parentName:"ol"},"Select an additional raw block device to add as an additional data volume.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Force Formatted")," option is required if the block device has never been force-formatted.")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In order for Harvester to identify the disks, each disk needs to have a unique ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Wide_Name"},"WWN"),". Otherwise, Harvester will refuse to add the disk.\nIf your disk does not have a WWN, you can format it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXT4")," filesystem to help Harvester recognize the disk.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are testing Harvester in a QEMU environment, you'll need to use QEMU v6.0 or later. Previous versions of QEMU will always generate the same WWN for NVMe disks emulation. This will cause Harvester to not add the additional disks, as explained above.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit Config",src:n(38223).Z,width:"1186",height:"460"}),"\n",(0,o.kt)("img",{alt:"Add Disks",src:n(65772).Z,width:"1177",height:"800"})))}c.isMDXComponent=!0},65772:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-disks-d7316fc96b86f8d9ac43b333d3fc1a59.png"},14505:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cordon-nodes-daa88373ce3b754fb6824073f2af4ae3.png"},65091:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/delete-c6b5ae377dce51029b8762fa93d00f8a.png"},38223:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-config-e4c98701a436a19352ff90a42981f193.png"},24069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/host-c992bf7b8372681205a1d62da54342c1.png"},55123:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-maintenance-d0d14c089568bcc6d40d8b5b431dc7c2.png"}}]);