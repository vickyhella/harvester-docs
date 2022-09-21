"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),c=o,v=d["".concat(u,".").concat(c)]||d[c]||m[c]||a;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:7,sidebar_label:"Hot-Plug Volumes",title:"",keywords:["Harvester","Hot-plug","Volume"],Description:"Adding hot-plug volumes to a running VM."},l="Hot-Plug Volumes",i={unversionedId:"vm/hotplug-volume",id:"version-v0.3/vm/hotplug-volume",title:"",description:"Harvester supports adding hot-plug volumes to a running VM.",source:"@site/versioned_docs/version-v0.3/vm/hotplug-volume.md",sourceDirName:"vm",slug:"/vm/hotplug-volume",permalink:"/v0.3/vm/hotplug-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/vm/hotplug-volume.md",tags:[],version:"v0.3",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Hot-Plug Volumes",title:"",keywords:["Harvester","Hot-plug","Volume"],Description:"Adding hot-plug volumes to a running VM."},sidebar:"tutorialSidebar",previous:{title:"Live Migration",permalink:"/v0.3/vm/live-migration"},next:{title:"Harvester Network",permalink:"/v0.3/networking/harvester-network"}},u={},s=[{value:"Adding Hot-Plug Volumes to a Running VM",id:"adding-hot-plug-volumes-to-a-running-vm",level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hot-plug-volumes"},"Hot-Plug Volumes"),(0,o.kt)("p",null,"Harvester supports adding hot-plug volumes to a running VM."),(0,o.kt)("h2",{id:"adding-hot-plug-volumes-to-a-running-vm"},"Adding Hot-Plug Volumes to a Running VM"),(0,o.kt)("p",null,"The following steps assume that you have a running VM and a ready volume:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,o.kt)("li",{parentName:"ol"},"Find the VM that you want to add a volume to and select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Add Volume"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"Name")," and select the ",(0,o.kt)("strong",{parentName:"li"},"Volume"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apply"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Volume",src:r(2247).Z,width:"1148",height:"647"})))}m.isMDXComponent=!0},2247:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-volume-375de2ad2a3848f38d3e6da36ff3d33b.png"}}]);