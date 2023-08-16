"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(v,l(l({ref:t},c),{},{components:n})):o.createElement(v,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:2,sidebar_label:"Edit a Volume",title:"Edit a Volume",keywords:["Volume"],Description:"Edit volume from the Volume page."},l=void 0,i={unversionedId:"volume/edit-volume",id:"volume/edit-volume",title:"Edit a Volume",description:"After creating a volume, you can edit your volume by clicking the \u22ee button and selecting the Edit Config option.",source:"@site/docs/volume/edit-volume.md",sourceDirName:"volume",slug:"/volume/edit-volume",permalink:"/harvester-docs/dev/volume/edit-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/volume/edit-volume.md",tags:[],version:"current",lastUpdatedAt:1690824941,formattedLastUpdatedAt:"Jul 31, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Edit a Volume",title:"Edit a Volume",keywords:["Volume"],Description:"Edit volume from the Volume page."},sidebar:"tutorialSidebar",previous:{title:"Create a Volume",permalink:"/harvester-docs/dev/volume/create-volume"},next:{title:"Clone a Volume",permalink:"/harvester-docs/dev/volume/clone-volume"}},s={},u=[{value:"Expand a Volume",id:"expand-a-volume",level:2},{value:"Cancel a Failed Volume Expansion",id:"cancel-a-failed-volume-expansion",level:2},{value:"Change the StorageClass of an Existing Volume",id:"change-the-storageclass-of-an-existing-volume",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/edit-volume"})),(0,a.kt)("p",null,"After creating a volume, you can edit your volume by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Config")," option."),(0,a.kt)("h2",{id:"expand-a-volume"},"Expand a Volume"),(0,a.kt)("p",null,"You can expand a volume by increasing the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Size")," parameter directly.\nTo prevent the expansion from interference by unexpected data R/W, Harvester supports ",(0,a.kt)("inlineCode",{parentName:"p"},"offline")," expansion only. You must shut down the VM or detach the volume first if it is attached to a VM, and the detached volume will automatically attach to a random node with ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/concepts/#22-reverting-volumes-in-maintenance-mode"},"maintenance mode")," to expand automatically."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"expand-volume",src:n(85393).Z,width:"2560",height:"726"})),(0,a.kt)("h2",{id:"cancel-a-failed-volume-expansion"},"Cancel a Failed Volume Expansion"),(0,a.kt)("p",null,"If you specify a size larger than Longhorn's capacity during the expansion, the status of the volume expansion will be stuck in ",(0,a.kt)("inlineCode",{parentName:"p"},"Resizing"),". You can cancel the failed volume expansion by clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cancel Expand")," option."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cancel-failed-volume-expansion",src:n(40353).Z,width:"2560",height:"726"})),(0,a.kt)("h2",{id:"change-the-storageclass-of-an-existing-volume"},"Change the StorageClass of an Existing Volume"),(0,a.kt)("p",null,"The StorageClass of an existing volume cannot be changed. However, you can change the StorageClass while restoring a new volume from the snapshot by following the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/harvester-docs/dev/volume/volume-snapshots#create-volume-snapshots"},"Take a volume snapshot"),"."),(0,a.kt)("li",{parentName:"ol"},"Select StorageClass when ",(0,a.kt)("a",{parentName:"li",href:"/harvester-docs/dev/volume/volume-snapshots#restore-a-new-volume-from-a-volume-snapshot"},"restoring the volume using snapshot"),".")))}p.isMDXComponent=!0},40353:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cancel-failed-volume-expansion-39ce92d8d4d2799a0090bf55d881ce42.png"},85393:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/expand-volume-b38ef393e5cea149fd57193a6192bc53.png"}}]);