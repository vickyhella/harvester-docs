"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,w=d["".concat(s,".").concat(p)]||d[p]||k[p]||a;return n?r.createElement(w,i(i({ref:t},u),{},{components:n})):r.createElement(w,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1,sidebar_label:"Cluster Network",title:"Cluster Network",keywords:["Harvester","Networking","ClusterNetwork","NetworkConfig","Network"]},i=void 0,l={unversionedId:"networking/clusternetwork",id:"version-v1.1/networking/clusternetwork",title:"Cluster Network",description:"Concepts",source:"@site/versioned_docs/version-v1.1/networking/clusternetwork.md",sourceDirName:"networking",slug:"/networking/clusternetwork",permalink:"/v1.1/networking/clusternetwork",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/networking/clusternetwork.md",tags:[],version:"v1.1",lastUpdatedAt:1689662319,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Cluster Network",title:"Cluster Network",keywords:["Harvester","Networking","ClusterNetwork","NetworkConfig","Network"]},sidebar:"tutorialSidebar",previous:{title:"Volume Snapshots",permalink:"/v1.1/volume/volume-snapshots"},next:{title:"Network",permalink:"/v1.1/networking/harvester-network"}},s={},c=[{value:"Concepts",id:"concepts",level:2},{value:"Cluster Network",id:"cluster-network",level:3},{value:"Network Configuration",id:"network-configuration",level:3},{value:"Network",id:"network",level:3},{value:"Relationship Between Cluster Network, Network Config, VM Network",id:"relationship-between-cluster-network-network-config-vm-network",level:3},{value:"Cluster Network Details",id:"cluster-network-details",level:2},{value:"Built-in Cluster Network",id:"built-in-cluster-network",level:3},{value:"Custom Cluster Network",id:"custom-cluster-network",level:3},{value:"How to create a new cluster network",id:"how-to-create-a-new-cluster-network",level:4}],u={toc:c};function k(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/networking/clusternetwork"})),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("h3",{id:"cluster-network"},"Cluster Network"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,o.kt)("p",null,"In Harvester v1.1.0, we introduced a new concept called cluster network for traffic isolation."),(0,o.kt)("p",null,"The following diagram describes a typical network architecture that separates data-center (DC) traffic from out-of-band (OOB) traffic."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(75518).Z,width:"707",height:"561"})),(0,o.kt)("p",null,"We abstract the sum of devices, links, and configurations on a traffic-isolated forwarding path on Harvester as a cluster network."),(0,o.kt)("p",null,"In the above case, there will be two cluster networks corresponding to two traffic-isolated forwarding paths."),(0,o.kt)("h3",{id:"network-configuration"},"Network Configuration"),(0,o.kt)("p",null,"Specifications including network devices of the Harvester hosts can be different. To be compatible with such a heterogeneous cluster, we designed the network configuration."),(0,o.kt)("p",null,"Network configuration only works under a certain cluster network. Each network configuration corresponds to a set of hosts with uniform network specifications. Therefore, multiple network configurations are required for a cluster network on non-uniform hosts."),(0,o.kt)("h3",{id:"network"},"Network"),(0,o.kt)("p",null,"A network is an interface in a virtual machine that connects to the host network. As with network configuration, every network except the built-in ",(0,o.kt)("a",{parentName:"p",href:"/v1.1/networking/harvester-network#management-network"},"management network")," must be under a cluster network."),(0,o.kt)("p",null,"Harvester supports adding multiple networks to one VM. If a network's cluster network is not enabled on some hosts, the VM that owns this network will not be scheduled to those hosts."),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/v1.1/networking/harvester-network"},"network part")," for more details about networks."),(0,o.kt)("h3",{id:"relationship-between-cluster-network-network-config-vm-network"},"Relationship Between Cluster Network, Network Config, VM Network"),(0,o.kt)("p",null,"The following diagram shows the relationship between a cluster network, a network config, and a VM network."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(59078).Z,width:"1414",height:"1166"})),(0,o.kt)("p",null,"All ",(0,o.kt)("inlineCode",{parentName:"p"},"Network Configs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"VM Networks")," are grouped under a cluster network. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A label can be assigned to each host to categorize hosts based on their network specifications.  "),(0,o.kt)("li",{parentName:"ul"},"A network config can be added for each group of hosts using a node selector. ")),(0,o.kt)("p",null,"For example, in the diagram above, the hosts in ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterNetwork-A")," are divided into three groups as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The first group includes host0, which corresponds to ",(0,o.kt)("inlineCode",{parentName:"li"},"network-config-A"),"."),(0,o.kt)("li",{parentName:"ul"},"The second group includes host1 and host2, which correspond to ",(0,o.kt)("inlineCode",{parentName:"li"},"network-config-B"),"."),(0,o.kt)("li",{parentName:"ul"},"The third group includes the remaining hosts (host3, host4, and host5), which do not have any related network config and therefore do not belong to ",(0,o.kt)("inlineCode",{parentName:"li"},"ClusterNetwork-A"),".")),(0,o.kt)("p",null,"The cluster network is only effective on hosts that are covered by the network configuration. A VM using a ",(0,o.kt)("inlineCode",{parentName:"p"},"VM network")," under a specific cluster network can only be scheduled on a host where the cluster network is active."),(0,o.kt)("p",null," In the diagram above, we can see that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClusterNetwork-A")," is active on host0, host1, and host2. ",(0,o.kt)("inlineCode",{parentName:"li"},"VM0")," uses ",(0,o.kt)("inlineCode",{parentName:"li"},"VM-network-A"),", so it can be scheduled on any of these hosts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VM1")," uses both ",(0,o.kt)("inlineCode",{parentName:"li"},"VM-network-B")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"VM-network-C"),", so it can only be scheduled on host2 where both ",(0,o.kt)("inlineCode",{parentName:"li"},"ClusterNetwork-A")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ClusterNetwork-B")," are active."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VM0"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"VM1"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"VM2")," cannot run on host3 where the two cluster networks are inactive.")),(0,o.kt)("p",null,"Overall, this diagram provides a clear visualization of the relationship between cluster networks, network configurations, and VM networks, as well as how they impact VM scheduling on hosts."),(0,o.kt)("h2",{id:"cluster-network-details"},"Cluster Network Details"),(0,o.kt)("h3",{id:"built-in-cluster-network"},"Built-in Cluster Network"),(0,o.kt)("p",null,"Harvester provides a built-in cluster network called ",(0,o.kt)("inlineCode",{parentName:"p"},"mgmt"),". It's different from the custom cluster network. The mgmt cluster network:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cannot be deleted."),(0,o.kt)("li",{parentName:"ul"},"Does not need any network configuration."),(0,o.kt)("li",{parentName:"ul"},"Is enabled on all hosts and cannot be disabled."),(0,o.kt)("li",{parentName:"ul"},"Shares the same traffic egress with the management network.")),(0,o.kt)("p",null,"If there is no need for traffic separation, you can put all your network under the mgmt cluster network."),(0,o.kt)("h3",{id:"custom-cluster-network"},"Custom Cluster Network"),(0,o.kt)("p",null,"You are allowed to add the custom cluster network, which will not be available until it's enabled on some hosts by adding a network configuration."),(0,o.kt)("h4",{id:"how-to-create-a-new-cluster-network"},"How to create a new cluster network"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To create a cluster network, go to the ",(0,o.kt)("strong",{parentName:"p"},"Networks > ClusterNetworks/Configs")," page and click the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button. You only need to specify the name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(59535).Z,width:"3450",height:"1278"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Create Network Config")," button on the right of the cluster network to create a new network configuration."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(8691).Z,width:"3450",height:"1298"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Node Selector")," tab, specify the name and choose one of the three methods to select nodes where the network configuration will apply. If you want to cover the unselected nodes, you can create another network configuration."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(41972).Z,width:"1773",height:"462"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Uplink")," tab to add the NICs, and configure the bond options and link attributes. The bond mode defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"active-backup"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(61607).Z,width:"1781",height:"702"})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The NICs drop-down list shows all the common NICs on all the selected nodes. The drop-down list will change as you select different nodes."),(0,o.kt)("li",{parentName:"ul"},"The text ",(0,o.kt)("inlineCode",{parentName:"li"},"enp7s3 (1/3 Down)")," in the NICs drop-down list indicates that the enp7s3 NIC is down in one of the three selected nodes. In this case, you need to find the NIC, set it up, and refresh this page. After this, it should be selectable."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Starting with Harvester v1.1.2, Harvester supports updating network configs. Make sure to stop all affected VMs before updating network configs.")))}k.isMDXComponent=!0},61607:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/config-uplink-bc85c0a8b27b769e7500b095ed4ec4de.png"},59535:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-clusternetwork-021bf11039b990a9b51537a9d5be1c7f.png"},8691:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-config-button-276443fdbfd60c4ce34df85947087ada.png"},59078:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/relation-bb910c30b0b737d6ad56751d375c1698.png"},41972:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/select-nodes-89a81d691176c3b0ac1b567be16a0460.png"},75518:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/traffic-isolation-71a839f59696dc336d7c036f6bf975f6.png"}}]);