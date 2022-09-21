"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1,sidebar_label:"Host Management",title:""},i="Host Management",s={unversionedId:"host/host",id:"version-v0.3/host/host",title:"",description:"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are more than three nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster.",source:"@site/versioned_docs/version-v0.3/host/host.md",sourceDirName:"host",slug:"/host/",permalink:"/harvester-docs/zh/v0.3/host/",draft:!1,editUrl:"https://github.com/vickyhella/harvester-docs/edit/main/docs/versioned_docs/version-v0.3/host/host.md",tags:[],version:"v0.3",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Host Management",title:""},sidebar:"tutorialSidebar",previous:{title:"Upload Images",permalink:"/harvester-docs/zh/v0.3/upload-image"},next:{title:"Create a Virtual Machine",permalink:"/harvester-docs/zh/v0.3/vm/create-vm"}},d={},l=[{value:"Node Maintenance",id:"node-maintenance",level:2},{value:"Cordoning a Node",id:"cordoning-a-node",level:2},{value:"Multi-disk Management - <code>Tech Preview</code>",id:"multi-disk-management---tech-preview",level:2}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"host-management"},"Host Management"),(0,o.kt)("p",null,"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are more than three nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Because Harvester is built on top of Kubernetes and uses etcd as its database, the maximum node fault toleration is one when there are three management nodes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"host.png",src:n(7435).Z,width:"3578",height:"1254"})),(0,o.kt)("h2",{id:"node-maintenance"},"Node Maintenance"),(0,o.kt)("p",null,"For admin users, you can click ",(0,o.kt)("strong",{parentName:"p"},"Enable Maintenance Mode")," to evict all VMs from a node automatically. It will leverage the ",(0,o.kt)("inlineCode",{parentName:"p"},"VM live migration")," feature to migrate all VMs to other nodes automatically. Note that at least two active nodes are required to use this feature."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"node-maintenance.png",src:n(8463).Z,width:"3042",height:"1058"})),(0,o.kt)("h2",{id:"cordoning-a-node"},"Cordoning a Node"),(0,o.kt)("p",null,"Cordoning a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions. When you\u2019re done, power back on and make the node schedulable again by uncordoning it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cordon-node.png",src:n(1589).Z,width:"3062",height:"1554"})),(0,o.kt)("h2",{id:"multi-disk-management---tech-preview"},"Multi-disk Management - ",(0,o.kt)("inlineCode",{parentName:"h2"},"Tech Preview")),(0,o.kt)("p",null,"Users can view and add multiple disks as additional data volumes from the host detail page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,o.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Disks")," tab and click ",(0,o.kt)("strong",{parentName:"li"},"Add Disks"),"."),(0,o.kt)("li",{parentName:"ol"},"Select either an additional raw block device or partition to add as an additional data volume.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Force Formatted")," option is required when adding an entire raw block device to form a single root disk partition using the ext4 filesystem."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Force Formatted")," option is optional when adding partitions where the filesystem type is ",(0,o.kt)("inlineCode",{parentName:"li"},"ext4"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"XFS")," or cannot be found. It is required when adding partitions of any other filesystem type.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit Config",src:n(194).Z,width:"1186",height:"460"}),"\n",(0,o.kt)("img",{alt:"Add Disks",src:n(1300).Z,width:"1177",height:"800"})))}m.isMDXComponent=!0},1300:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-disks-d7316fc96b86f8d9ac43b333d3fc1a59.png"},1589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cordon-nodes-daa88373ce3b754fb6824073f2af4ae3.png"},194:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-config-e4c98701a436a19352ff90a42981f193.png"},7435:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/host-c992bf7b8372681205a1d62da54342c1.png"},8463:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-maintenance-d0d14c089568bcc6d40d8b5b431dc7c2.png"}}]);