"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||n;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<n;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=a(87462),i=(a(67294),a(3905));const n={sidebar_position:2,sidebar_label:"StorageClass",title:"StorageClass"},o=void 0,s={unversionedId:"advanced/storageclass",id:"advanced/storageclass",title:"StorageClass",description:"A StorageClass allows administrators to describe the classes of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called profiles in other storage systems.",source:"@site/docs/advanced/storageclass.md",sourceDirName:"advanced",slug:"/advanced/storageclass",permalink:"/dev/advanced/storageclass",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/storageclass.md",tags:[],version:"current",lastUpdatedAt:1691688773,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"StorageClass",title:"StorageClass"},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/dev/advanced/settings"},next:{title:"Storage Network",permalink:"/dev/advanced/storagenetwork"}},l={},d=[{value:"Creating a StorageClass",id:"creating-a-storageclass",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Parameters Tab",id:"parameters-tab",level:3},{value:"Number of Replicas",id:"number-of-replicas",level:4},{value:"Stale Replica Timeout",id:"stale-replica-timeout",level:4},{value:"Node Selector (Optional)",id:"node-selector-optional",level:4},{value:"Disk Selector (Optional)",id:"disk-selector-optional",level:4},{value:"Migratable",id:"migratable",level:4},{value:"Customize Tab",id:"customize-tab",level:3},{value:"Reclaim Policy",id:"reclaim-policy",level:4},{value:"Allow Volume Expansion",id:"allow-volume-expansion",level:4},{value:"Volume Binding Mode",id:"volume-binding-mode",level:4},{value:"Multi Container Storage Interface support",id:"multi-container-storage-interface-support",level:2},{value:"Header Section",id:"header-section-1",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Appendix - Use Case",id:"appendix---use-case",level:2},{value:"HDD Scenario",id:"hdd-scenario",level:3},{value:"Recommended Practice",id:"recommended-practice",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/storageclass"})),(0,i.kt)("p",null,"A StorageClass allows administrators to describe the ",(0,i.kt)("strong",{parentName:"p"},"classes")," of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called ",(0,i.kt)("strong",{parentName:"p"},"profiles")," in other storage systems."),(0,i.kt)("h2",{id:"creating-a-storageclass"},"Creating a StorageClass"),(0,i.kt)("p",null,"You can create one or more StorageClasses from the ",(0,i.kt)("strong",{parentName:"p"},"Advanced > StorageClasses")," page."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(36119).Z,width:"1783",height:"771"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"After a StorageClass is created, nothing can be changed except ",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),".")),(0,i.kt)("h3",{id:"header-section"},"Header Section"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Name"),": name of the StorageClass"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Description")," (optional): description of the StorageClass")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(13264).Z,width:"1783",height:"771"})),(0,i.kt)("h3",{id:"parameters-tab"},"Parameters Tab"),(0,i.kt)("h4",{id:"number-of-replicas"},"Number of Replicas"),(0,i.kt)("p",null,"The number of replicas created for each volume in Longhorn. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(80730).Z,width:"1783",height:"771"})),(0,i.kt)("h4",{id:"stale-replica-timeout"},"Stale Replica Timeout"),(0,i.kt)("p",null,"Determines when Longhorn would clean up an error replica after the replica's status is ERROR. The unit is minute. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," minutes in Harvester."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(63815).Z,width:"1783",height:"771"})),(0,i.kt)("h4",{id:"node-selector-optional"},"Node Selector (Optional)"),(0,i.kt)("p",null,"Select the node tags to be matched in the volume scheduling stage. You can add node tags by going to ",(0,i.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(56501).Z,width:"1783",height:"771"})),(0,i.kt)("h4",{id:"disk-selector-optional"},"Disk Selector (Optional)"),(0,i.kt)("p",null,"Select the disk tags to be matched in the volume scheduling stage. You can add disk tags by going to ",(0,i.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(90993).Z,width:"1783",height:"771"})),(0,i.kt)("h4",{id:"migratable"},"Migratable"),(0,i.kt)("p",null,"Whether ",(0,i.kt)("a",{parentName:"p",href:"/dev/vm/live-migration"},"Live Migration")," is supported. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(82990).Z,width:"1783",height:"771"})),(0,i.kt)("h3",{id:"customize-tab"},"Customize Tab"),(0,i.kt)("h4",{id:"reclaim-policy"},"Reclaim Policy"),(0,i.kt)("p",null,"Volumes dynamically created by a StorageClass will have the reclaim policy specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reclaimPolicy")," field of the class. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," mode is used by default."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Delete"),": Deletes volumes and the underlying devices when the volume claim is deleted."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Retain"),": Retains the volume for manual cleanup.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(46288).Z,width:"1791",height:"770"})),(0,i.kt)("h4",{id:"allow-volume-expansion"},"Allow Volume Expansion"),(0,i.kt)("p",null,"Volumes can be configured to be expandable. This feature is ",(0,i.kt)("inlineCode",{parentName:"p"},"Enabled")," by default, which allows users to resize the volume by editing the corresponding PVC object."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(72792).Z,width:"1791",height:"770"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can only use the volume expansion feature to grow a Volume, not to shrink it.")),(0,i.kt)("h4",{id:"volume-binding-mode"},"Volume Binding Mode"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"volumeBindingMode")," field controls when volume binding and dynamic provisioning should occur. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Immediate")," mode is used by default."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Immediate"),": Binds and provisions a persistent volume once the PersistentVolumeClaim is created."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"WaitForFirstConsumer"),": Binds and provisions a persistent volume once a VM using the PersistentVolumeClaim is created.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9982).Z,width:"1791",height:"770"})),(0,i.kt)("h2",{id:"multi-container-storage-interface-support"},"Multi Container Storage Interface support"),(0,i.kt)("p",null,"Harvester now supports installing a Container Storage Interface (CSI) in your Harvester cluster to support and use external storage as the VM's non-system data partition. For example, choose an existing storage provider (e.g., Dell PowerFlex) to create a data volume in Harvester. Leverage different drivers for specific purposes, such as performance optimization or integration with existing internal storage providers."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The system partition of the VM can still use Longhorn. Before v1.2.0, Harvester only supports the use of Longhorn to store virtual machine data, and does not support the use of external storage to store VM data.")),(0,i.kt)("p",null,"You must first manually install your CSI driver. Then create a new StorageClass and edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"csi-driver-config")," setting."),(0,i.kt)("h3",{id:"header-section-1"},"Header Section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": Name of the StorageClass"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description")," (optional): Description of the StorageClass."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Provisioner"),": Select a provisioner.")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"Edit the ",(0,i.kt)("a",{parentName:"p",href:"/dev/advanced/settings#csi-driver-config"},(0,i.kt)("inlineCode",{parentName:"a"},"csi-driver-config"))," setting to add the provisioner for the newly added CSI driver."),(0,i.kt)("h2",{id:"appendix---use-case"},"Appendix - Use Case"),(0,i.kt)("h3",{id:"hdd-scenario"},"HDD Scenario"),(0,i.kt)("p",null,"With the introduction of ",(0,i.kt)("em",{parentName:"p"},"StorageClass"),", users can now use ",(0,i.kt)("strong",{parentName:"p"},"HDDs")," for tiered or archived cold storage."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"HDD is not recommended for guest RKE2 clusters or VMs with good performance disk requirements.")),(0,i.kt)("h4",{id:"recommended-practice"},"Recommended Practice"),(0,i.kt)("p",null,"First, add your HDD on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Host")," page and specify the disk tags as needed, such as",(0,i.kt)("inlineCode",{parentName:"p"},"HDD")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ColdStorage"),". For more information on how to add extra disks and disk tags, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/host/#multi-disk-management"},"Multi-disk Management")," for details."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(38874).Z,width:"1785",height:"772"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(89767).Z,width:"1919",height:"1079"})),(0,i.kt)("p",null,"Then, create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," for the HDD (use the above disk tags). For hard drives with large capacity but slow performance, the number of replicas can be reduced to improve performance. For details, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/advanced/storageclass"},"storageclass")," for details."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(14341).Z,width:"1785",height:"767"})),(0,i.kt)("p",null,"You can now create a volume using the above ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," with HDDs mostly for cold storage or archiving purpose."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(94321).Z,width:"1789",height:"767"})))}p.isMDXComponent=!0},38874:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add_hdd_on_host_page-3ccc34f2a8bc65e511cc35776100e80d.png"},89767:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add_tags-00cf25164f80f53cdd438eaecee15665.png"},14341:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_hdd_storageclass-8e158b236ade10694195738114374437.png"},90993:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_storageclasses_disk_selector-c60a5061987f68f18252a819732640e6.png"},36119:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_storageclasses_entry-e4e255f7a07230ce65351e3966c056ff.png"},13264:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_storageclasses_header_sections-9d615b806de3fb6314419c0e76e30663.png"},82990:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_storageclasses_migratable-dde41ae11a1e2dbf156b91b4cc488a7a.png"},56501:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_storageclasses_node_selector-e055498ee31e10df985dd0452a825c21.png"},80730:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_storageclasses_replicas-720c4cf37f05197846b7d021a3d3fd7c.png"},63815:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_storageclasses_stale_timeout-5602affc442bba6fe5f933a309c3847f.png"},94321:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create_volume_hdd-91b7f44277ede22bd6bd230b00697aa4.png"},72792:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/customize_tab_allow_vol_expansion-a76850a093cf3669eb31341081d8b51c.png"},46288:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/customize_tab_reclaim_policy-5440e3059223d00fcf3fe0398afbaec0.png"},9982:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/customize_tab_vol_binding_mode-54f01765773587a542eedc6a2afe43fa.png"}}]);