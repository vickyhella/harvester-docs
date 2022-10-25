"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:9,sidebar_label:"Clone VM",title:"",keywords:["Harvester","harvester","Rancher","rancher","Clone VM"],Description:"VM can be cloned with/without data. This function doesn't need to take a VM snapshot or set up a backup target first."},i="Clone VM",l={unversionedId:"vm/clone-vm",id:"vm/clone-vm",title:"",description:"Available as of v1.1.0",source:"@site/docs/vm/clone-vm.md",sourceDirName:"vm",slug:"/vm/clone-vm",permalink:"/zh/v1.1/vm/clone-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/clone-vm.md",tags:[],version:"current",lastUpdatedAt:1666688168,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Clone VM",title:"",keywords:["Harvester","harvester","Rancher","rancher","Clone VM"],Description:"VM can be cloned with/without data. This function doesn't need to take a VM snapshot or set up a backup target first."},sidebar:"tutorialSidebar",previous:{title:"Resource Overcommit",permalink:"/zh/v1.1/vm/resource-overcommit"},next:{title:"Create a Volume",permalink:"/zh/v1.1/volume/create-volume"}},c={},s=[{value:"Clone VM with volume data",id:"clone-vm-with-volume-data",level:2},{value:"Clone VM without volume data",id:"clone-vm-without-volume-data",level:2}],p={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clone-vm"},"Clone VM"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,r.kt)("p",null,"VM can be cloned with/without data. This function doesn't need to take a VM snapshot or set up a backup target first."),(0,r.kt)("h2",{id:"clone-vm-with-volume-data"},"Clone VM with volume data"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Clone")," of the VM actions."),(0,r.kt)("li",{parentName:"ol"},"Set a new VM name and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM.\n",(0,r.kt)("img",{alt:"clone-vm-with-data.png",src:n(83639).Z,width:"1599",height:"639"}))),(0,r.kt)("h2",{id:"clone-vm-without-volume-data"},"Clone VM without volume data"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Clone")," of the VM actions."),(0,r.kt)("li",{parentName:"ol"},"Unclick the ",(0,r.kt)("inlineCode",{parentName:"li"},"clone volume data")," checkbox."),(0,r.kt)("li",{parentName:"ol"},"Set a new VM name and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM.\n",(0,r.kt)("img",{alt:"clone-vm-without-data.png",src:n(53575).Z,width:"1599",height:"899"}))))}m.isMDXComponent=!0},83639:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clone-vm-with-data-c31f7312f951428fef067e4afd4196f8.png"},53575:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/clone-vm-without-data-b04f17ece9f5f6c5872f9801bbd2bb9b.png"}}]);