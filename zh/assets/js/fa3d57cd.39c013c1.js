"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||s;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:6,sidebar_label:"Management Address",title:"",keywords:["VIP"],Description:"The Harvester provides a virtual IP as the management address."},o="Management Address",i={unversionedId:"install/management-address",id:"install/management-address",title:"",description:"Harvester provides a fixed virtual IP (VIP) as the management address, VIP must be different from any Node IP.  You can find the management address on the console dashboard after the installation.",source:"@site/docs/install/management-address.md",sourceDirName:"install",slug:"/install/management-address",permalink:"/zh/next/install/management-address",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/management-address.md",tags:[],version:"current",lastUpdatedAt:1664266430,formattedLastUpdatedAt:"2022\u5e749\u670827\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Management Address",title:"",keywords:["VIP"],Description:"The Harvester provides a virtual IP as the management address."},sidebar:"tutorialSidebar",previous:{title:"Harvester Configuration",permalink:"/zh/next/install/harvester-configuration"},next:{title:"Air Gapped Environment",permalink:"/zh/next/airgap"}},d={},l=[{value:"How to get the VIP MAC address",id:"how-to-get-the-vip-mac-address",level:2},{value:"Usages",id:"usages",level:2}],c={toc:l};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"management-address"},"Management Address"),(0,r.kt)("p",null,"Harvester provides a fixed virtual IP (VIP) as the management address, VIP must be different from any Node IP.  You can find the management address on the console dashboard after the installation."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you selected the IP address to be configured via DHCP, you will need to configure static MAC-to-IP address mapping on your DHCP server in order to have a persistent Virtual IP")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(99890).Z,width:"1580",height:"770"})),(0,r.kt)("h2",{id:"how-to-get-the-vip-mac-address"},"How to get the VIP MAC address"),(0,r.kt)("p",null,"To get the VIP MAC address, you can run the following command on the management node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get svc -n kube-system ingress-expose -ojsonpath='{.metadata.annotations}'\n")),(0,r.kt)("p",null,"Example of output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"kube-vip.io/hwaddr":"02:00:00:09:7f:3f","kube-vip.io/requestedIP":"10.84.102.31"}\n')),(0,r.kt)("h2",{id:"usages"},"Usages"),(0,r.kt)("p",null,"The management address has two usages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows the access to the Harvester API/UI via ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTPS")," protocol."),(0,r.kt)("li",{parentName:"ul"},"Is the address the other nodes use to join the cluster.\n",(0,r.kt)("img",{src:n(19858).Z,width:"1207",height:"339"}))))}p.isMDXComponent=!0},19858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/configure-management-address-43ff76d24277f42606a4ad31cea2464b.png"},99890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/iso-installed-f4263be997514c7510a5865390e66421.png"}}]);