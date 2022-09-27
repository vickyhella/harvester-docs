"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1751],{3905:(r,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>u});var n=t(67294);function o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function a(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function s(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var l=n.createContext({}),p=function(r){var e=n.useContext(l),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},c=function(r){var e=p(r.components);return n.createElement(l.Provider,{value:e},r.children)},v={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(r,e){var t=r.components,o=r.mdxType,a=r.originalType,l=r.parentName,c=s(r,["components","mdxType","originalType","parentName"]),d=p(t),u=o,f=d["".concat(l,".").concat(u)]||d[u]||v[u]||a;return t?n.createElement(f,i(i({ref:e},c),{},{components:t})):n.createElement(f,i({ref:e},c))}));function u(r,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=r,s.mdxType="string"==typeof r?r:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27489:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:""},i="Harvester Terraform Provider",s={unversionedId:"terraform/terraform",id:"version-v1.0/terraform/terraform",title:"",description:"\u8981\u6c42",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/terraform/terraform.md",sourceDirName:"terraform",slug:"/terraform/",permalink:"/zh/terraform/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/terraform/terraform.md",tags:[],version:"v1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:""},sidebar:"tutorialSidebar",previous:{title:"Harvester CSI Driver",permalink:"/zh/rancher/csi-driver"},next:{title:"\u8bbe\u7f6e",permalink:"/zh/settings/"}},l={},p=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u5b89\u88c5 Provider",id:"\u5b89\u88c5-provider",level:2},{value:"\u4f7f\u7528 provider",id:"\u4f7f\u7528-provider",level:2}],c={toc:p};function v(r){let{components:e,...t}=r;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"harvester-terraform-provider"},"Harvester Terraform Provider"),(0,o.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," \u7248\u672c\u5927\u4e8e\u7b49\u4e8e 0.13.x"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go")," 1.18\uff0c\u7528\u6765\u6784\u5efa provider \u63d2\u4ef6")),(0,o.kt)("h2",{id:"\u5b89\u88c5-provider"},"\u5b89\u88c5 Provider"),(0,o.kt)("p",null,"\u5c06\u6b64\u4ee3\u7801\u590d\u5236\u5e76\u7c98\u8d34\u5230\u60a8\u7684 Terraform \u914d\u7f6e\u4e2d\u3002\u7136\u540e\uff0c\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform init")," \u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "<replace to the latest release version>"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,o.kt)("h2",{id:"\u4f7f\u7528-provider"},"\u4f7f\u7528 provider"),(0,o.kt)("p",null,"\u6709\u5173 Provider \u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"Github \u4ed3\u5e93\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/terraform-provider-harvester"},"https://github.com/harvester/terraform-provider-harvester")))}v.isMDXComponent=!0}}]);