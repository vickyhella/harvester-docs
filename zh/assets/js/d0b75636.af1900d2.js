"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4576],{3905:(r,e,t)=>{t.d(e,{Zo:()=>v,kt:()=>m});var o=t(67294);function n(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function a(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){n(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function s(r,e){if(null==r)return{};var t,o,n=function(r,e){if(null==r)return{};var t,o,n={},a=Object.keys(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(n[t]=r[t]);return n}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(n[t]=r[t])}return n}var l=o.createContext({}),p=function(r){var e=o.useContext(l),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},v=function(r){var e=p(r.components);return o.createElement(l.Provider,{value:e},r.children)},d="mdxType",c={inlineCode:"code",wrapper:function(r){var e=r.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(r,e){var t=r.components,n=r.mdxType,a=r.originalType,l=r.parentName,v=s(r,["components","mdxType","originalType","parentName"]),d=p(t),f=n,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return t?o.createElement(m,i(i({ref:e},v),{},{components:t})):o.createElement(m,i({ref:e},v))}));function m(r,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof r||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=r,s[d]="string"==typeof r?r:n,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},40777:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},i=void 0,s={unversionedId:"terraform/terraform-provider",id:"version-v1.0/terraform/terraform-provider",title:"Harvester Terraform Provider",description:"\u8981\u6c42",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/terraform/terraform-provider.md",sourceDirName:"terraform",slug:"/terraform/terraform-provider",permalink:"/harvester-docs/zh/v1.0/terraform/terraform-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/terraform/terraform-provider.md",tags:[],version:"v1.0",lastUpdatedAt:1696844458,formattedLastUpdatedAt:"2023\u5e7410\u67089\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},sidebar:"tutorialSidebar",previous:{title:"Harvester CSI Driver",permalink:"/harvester-docs/zh/v1.0/rancher/csi-driver"},next:{title:"\u8bbe\u7f6e",permalink:"/harvester-docs/zh/v1.0/settings/"}},l={},p=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u5b89\u88c5 Provider",id:"\u5b89\u88c5-provider",level:2},{value:"\u4f7f\u7528 provider",id:"\u4f7f\u7528-provider",level:2}],v={toc:p},d="wrapper";function c(r){let{components:e,...t}=r;return(0,n.kt)(d,(0,o.Z)({},v,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," \u7248\u672c\u5927\u4e8e\u7b49\u4e8e 0.13.x"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," 1.18\uff0c\u7528\u6765\u6784\u5efa provider \u63d2\u4ef6")),(0,n.kt)("h2",{id:"\u5b89\u88c5-provider"},"\u5b89\u88c5 Provider"),(0,n.kt)("p",null,"\u5c06\u6b64\u4ee3\u7801\u590d\u5236\u5e76\u7c98\u8d34\u5230\u60a8\u7684 Terraform \u914d\u7f6e\u4e2d\u3002\u7136\u540e\uff0c\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init")," \u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "<replace to the latest release version>"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,n.kt)("h2",{id:"\u4f7f\u7528-provider"},"\u4f7f\u7528 provider"),(0,n.kt)("p",null,"\u6709\u5173 Provider \u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"\u6587\u6863"),"\u3002"),(0,n.kt)("p",null,"Github \u4ed3\u5e93\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/terraform-provider-harvester"},"https://github.com/harvester/terraform-provider-harvester")))}c.isMDXComponent=!0}}]);