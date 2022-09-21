"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"NIC Naming Scheme",descripion:"NIC Naming Scheme Change",slug:"nic-naming-scheme",authors:[{name:"Date Huang",title:"Software Engineer",url:"https://github.com/tjjh89017",image_url:"https://github.com/tjjh89017.png"}],tags:["network"],hide_table_of_contents:!1},o="NIC Naming Scheme",l={permalink:"/harvester-docs/zh/kb/nic-naming-scheme",editUrl:"https://github.com/vickyhella/harvester-docs/edit/main/kb/2022-04-06/nic_naming_scheme.md",source:"@site/kb/2022-04-06/nic_naming_scheme.md",title:"NIC Naming Scheme",description:"NIC Naming Scheme changed after upgrading to v1.0.1",date:"2022-04-06T00:00:00.000Z",formattedDate:"2022\u5e744\u67086\u65e5",tags:[{label:"network",permalink:"/harvester-docs/zh/kb/tags/network"}],readingTime:1.825,hasTruncateMarker:!1,authors:[{name:"Date Huang",title:"Software Engineer",url:"https://github.com/tjjh89017",image_url:"https://github.com/tjjh89017.png",imageURL:"https://github.com/tjjh89017.png"}],frontMatter:{title:"NIC Naming Scheme",descripion:"NIC Naming Scheme Change",slug:"nic-naming-scheme",authors:[{name:"Date Huang",title:"Software Engineer",url:"https://github.com/tjjh89017",image_url:"https://github.com/tjjh89017.png",imageURL:"https://github.com/tjjh89017.png"}],tags:["network"],hide_table_of_contents:!1},nextItem:{title:"Multiple NICs VM Connectivity",permalink:"/harvester-docs/zh/kb/multiple-nics-vm-connectivity"}},s={authorsImageUrls:[void 0]},c=[{value:"NIC Naming Scheme changed after upgrading to v1.0.1",id:"nic-naming-scheme-changed-after-upgrading-to-v101",level:2},{value:"Effect Settings and Workaround",id:"effect-settings-and-workaround",level:2},{value:"Startup Network Configuration",id:"startup-network-configuration",level:3},{value:"Harvester VLAN Network Configuration",id:"harvester-vlan-network-configuration",level:3},{value:"Modify ClusterNetworks",id:"modify-clusternetworks",level:4},{value:"Modify NodeNetworks",id:"modify-nodenetworks",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"nic-naming-scheme-changed-after-upgrading-to-v101"},"NIC Naming Scheme changed after upgrading to v1.0.1"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," in OpenSUSE Leap 15.3 which is the base OS of Harvester is upgraded to ",(0,r.kt)("inlineCode",{parentName:"p"},"246.16-150300.7.39.1"),". In this version, ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," will enable additional naming scheme ",(0,r.kt)("inlineCode",{parentName:"p"},"sle15-sp3")," which is ",(0,r.kt)("inlineCode",{parentName:"p"},"v238")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge_no_slot"),". When there is a PCI bridge associated with NIC, ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," will never generate ",(0,r.kt)("inlineCode",{parentName:"p"},"ID_NET_NAME_SLOT")," and naming policy in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/network/99-default.link")," will fallback to ",(0,r.kt)("inlineCode",{parentName:"p"},"ID_NET_NAME_PATH"),". According to this change, NIC names might be changed in your Harvester nodes during the upgrade process from ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.1-rc1")," or above, and it will cause network issues that are associated with NIC names."),(0,r.kt)("h2",{id:"effect-settings-and-workaround"},"Effect Settings and Workaround"),(0,r.kt)("h3",{id:"startup-network-configuration"},"Startup Network Configuration"),(0,r.kt)("p",null,"NIC name changes will need to update the name in ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml"),". You could use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/blob/main/hack/udev_v238_sle15-sp3.py"},"migration script")," to change the NIC names which are associated with a PCI bridge."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You could find an identical machine to test naming changes before applying the configuration to production machines")),(0,r.kt)("p",null,"You could simply execute the script with root account in ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.0")," via"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# python3 udev_v238_sle15-sp3.py\n")),(0,r.kt)("p",null,"It will output the patched configuration to the screen and you could compare it to the original one to ensure there is no exception. (e.g. We could use ",(0,r.kt)("inlineCode",{parentName:"p"},"vimdiff")," to check the configuration)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# python3 udev_v238_sle15-spe3.py > /oem/test\n# vimdiff /oem/test /oem/99_custom.yaml\n")),(0,r.kt)("p",null,"After checking the result, we could execute the script with ",(0,r.kt)("inlineCode",{parentName:"p"},"--really-want-to-do")," to override the configuration. It will also back up the original configuration file with a timestamp before patching it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# python3 udev_v238_sle15-sp3.py --really-want-to-do\n")),(0,r.kt)("h3",{id:"harvester-vlan-network-configuration"},"Harvester VLAN Network Configuration"),(0,r.kt)("p",null,"If your VLAN network is associated with NIC name directly without ",(0,r.kt)("inlineCode",{parentName:"p"},"bonding"),", you will need to migrate ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeNetwork")," with the previous section together."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If your VLAN network is associated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"bonding")," name in ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml"),", you could skip this section.")),(0,r.kt)("h4",{id:"modify-clusternetworks"},"Modify ClusterNetworks"),(0,r.kt)("p",null,"You need to modify ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterNetworks")," via "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit clusternetworks vlan\n")),(0,r.kt)("p",null,"search this pattern"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  defaultPhysicalNIC: <Your NIC name>\n")),(0,r.kt)("p",null,"and change to new NIC name"),(0,r.kt)("h4",{id:"modify-nodenetworks"},"Modify NodeNetworks"),(0,r.kt)("p",null,"You need to modify ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeNetworks")," via"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit nodenetworks <Node name>-vlan\n")),(0,r.kt)("p",null,"search this pattern"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  nic: <Your NIC name>\n")),(0,r.kt)("p",null,"and change to new NIC name"))}u.isMDXComponent=!0}}]);