"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1888],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=i,v=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return r?n.createElement(v,a(a({ref:t},d),{},{components:r})):n.createElement(v,a({ref:t},d))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Monitoring",title:"Monitoring"},a=void 0,s={unversionedId:"monitoring/harvester-monitoring",id:"version-v0.3/monitoring/harvester-monitoring",title:"Monitoring",description:"Available as of v0.3.0",source:"@site/versioned_docs/version-v0.3/monitoring/harvester-monitoring.md",sourceDirName:"monitoring",slug:"/monitoring/harvester-monitoring",permalink:"/harvester-docs/zh/v0.3/monitoring/harvester-monitoring",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/monitoring/harvester-monitoring.md",tags:[],version:"v0.3",lastUpdatedAt:1690355319,formattedLastUpdatedAt:"2023\u5e747\u670826\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Monitoring",title:"Monitoring"},sidebar:"tutorialSidebar",previous:{title:"Harvester Network",permalink:"/harvester-docs/zh/v0.3/networking/harvester-network"},next:{title:"Rancher Integration",permalink:"/harvester-docs/zh/v0.3/rancher/rancher-integration"}},c={},l=[{value:"Dashboard Metrics",id:"dashboard-metrics",level:2},{value:"VM Detail Metrics",id:"vm-detail-metrics",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/monitoring/harvester-monitoring"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,i.kt)("h2",{id:"dashboard-metrics"},"Dashboard Metrics"),(0,i.kt)("p",null,"Harvester ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.3.0")," has provided a built-in monitoring integration using ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),". Monitoring is automatically installed during ISO installations."),(0,i.kt)("p",null,"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard")," page, users can view the cluster metrics and top 10 most used VM metrics respectively.\nAlso, users can click the ",(0,i.kt)("a",{parentName:"p",href:"http://grafana.com/"},"Grafana")," dashboard link to view more dashboard on the Grafana UI.\n",(0,i.kt)("img",{src:r(58626).Z,width:"2554",height:"1305"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Only admin users are able to view the dashboard metrics.")),(0,i.kt)("h2",{id:"vm-detail-metrics"},"VM Detail Metrics"),(0,i.kt)("p",null,"For each VM, users can view the VM metrics by clicking the VM details page.\n",(0,i.kt)("img",{src:r(37110).Z,width:"2264",height:"1132"})))}m.isMDXComponent=!0},58626:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitoring-dashboard-8f49b2e77f152646e4f48d9d84e903a3.png"},37110:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/vm-metrics-46cc5179899848d80187d69f7185e29e.png"}}]);