"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6481],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_position:7,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],Description:"The Harvester provides a virtual IP as the management address."},o=void 0,i={unversionedId:"install/management-address",id:"install/management-address",title:"Management Address",description:"Harvester provides a fixed virtual IP (VIP) as the management address, VIP must be different from any Node IP.  You can find the management address on the console dashboard after the installation.",source:"@site/docs/install/management-address.md",sourceDirName:"install",slug:"/install/management-address",permalink:"/harvester-docs/v1.2/install/management-address",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/management-address.md",tags:[],version:"current",lastUpdatedAt:1691790733,formattedLastUpdatedAt:"Aug 11, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],Description:"The Harvester provides a virtual IP as the management address."},sidebar:"docs",previous:{title:"Update Harvester Configuration",permalink:"/harvester-docs/v1.2/install/update-harvester-configuration"},next:{title:"Install Harvester Binaries Only",permalink:"/harvester-docs/v1.2/install/install-binaries-mode"}},l={},d=[{value:"How to get the VIP MAC address",id:"how-to-get-the-vip-mac-address",level:2},{value:"Usages",id:"usages",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/management-address"})),(0,r.kt)("p",null,"Harvester provides a fixed virtual IP (VIP) as the management address, VIP must be different from any Node IP.  You can find the management address on the console dashboard after the installation."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you selected the IP address to be configured via DHCP, you will need to configure static MAC-to-IP address mapping on your DHCP server in order to have a persistent Virtual IP")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(80115).Z,width:"1530",height:"1150"})),(0,r.kt)("h2",{id:"how-to-get-the-vip-mac-address"},"How to get the VIP MAC address"),(0,r.kt)("p",null,"To get the VIP MAC address, you can run the following command on the management node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get svc -n kube-system ingress-expose -ojsonpath='{.metadata.annotations}'\n")),(0,r.kt)("p",null,"Example of output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"kube-vip.io/hwaddr":"02:00:00:09:7f:3f","kube-vip.io/requestedIP":"10.84.102.31"}\n')),(0,r.kt)("h2",{id:"usages"},"Usages"),(0,r.kt)("p",null,"The management address:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows the access to the Harvester API/UI via ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTPS")," protocol."),(0,r.kt)("li",{parentName:"ul"},"Allows other nodes to join the cluster.\n",(0,r.kt)("img",{src:a(13776).Z,width:"1207",height:"339"}))))}m.isMDXComponent=!0},13776:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/configure-management-address-43ff76d24277f42606a4ad31cea2464b.png"},80115:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iso-installed-8acd6980132f3402a086b63624ec9abf.png"}}]);