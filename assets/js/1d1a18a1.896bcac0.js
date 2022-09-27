"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2,sidebar_label:"Harvester",title:""},i=void 0,s={unversionedId:"troubleshooting/harvester",id:"version-v0.3/troubleshooting/harvester",title:"",description:"Generate a Support Bundle",source:"@site/versioned_docs/version-v0.3/troubleshooting/harvester.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/harvester",permalink:"/v0.3/troubleshooting/harvester",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/troubleshooting/harvester.md",tags:[],version:"v0.3",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Harvester",title:""},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/v0.3/troubleshooting/installation"},next:{title:"Operating System",permalink:"/v0.3/troubleshooting/os"}},l={},p=[{value:"Generate a Support Bundle",id:"generate-a-support-bundle",level:2},{value:"Access Embedded Rancher",id:"access-embedded-rancher",level:2},{value:"Access Embedded Longhorn",id:"access-embedded-longhorn",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"generate-a-support-bundle"},"Generate a Support Bundle"),(0,o.kt)("p",null,"Users can generate a support bundle in the Harvester GUI with the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Support")," link at the bottom-left of Harvester Web UI.\n",(0,o.kt)("img",{src:r(86287).Z,width:"955",height:"902"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate Support Bundle")," button.\n",(0,o.kt)("img",{src:r(54309).Z,width:"953",height:"286"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter a useful description for the support bundle and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," to generate and download a support bundle.\n",(0,o.kt)("img",{src:r(50401).Z,width:"941",height:"436"})))),(0,o.kt)("h2",{id:"access-embedded-rancher"},"Access Embedded Rancher"),(0,o.kt)("p",null,"You can access the embedded Rancher dashboard via ",(0,o.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/explorer"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We only support to use the embedded Rancher dashboard for debugging and validation purpose.\nFor Rancher's multi-cluster and multi-tenant integration, please refer to the docs ",(0,o.kt)("a",{parentName:"p",href:"/v0.3/rancher/rancher-integration"},"here"),".")),(0,o.kt)("h2",{id:"access-embedded-longhorn"},"Access Embedded Longhorn"),(0,o.kt)("p",null,"You can access the embedded Longhorn UI via ",(0,o.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/longhorn"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We only support to use the embedded Longhorn UI for debugging and validation purpose .")))}c.isMDXComponent=!0},54309:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-button-481867fa7c7e1284b77c3a328cdc06ba.png"},86287:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-link-37d8e3a1cf4a0db290c41adeea228f3a.png"},50401:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-modal-2926ec28f3190a25f618cedfe7975687.png"}}]);