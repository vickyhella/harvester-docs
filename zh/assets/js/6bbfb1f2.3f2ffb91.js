"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[880],{3905:(r,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>u});var n=t(67294);function o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function a(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function l(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var p=n.createContext({}),s=function(r){var e=n.useContext(p),t=e;return r&&(t="function"==typeof r?r(e):a(a({},e),r)),t},d=function(r){var e=s(r.components);return n.createElement(p.Provider,{value:e},r.children)},v={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(r,e){var t=r.components,o=r.mdxType,i=r.originalType,p=r.parentName,d=l(r,["components","mdxType","originalType","parentName"]),m=s(t),u=o,h=m["".concat(p,".").concat(u)]||m[u]||v[u]||i;return t?n.createElement(h,a(a({ref:e},d),{},{components:t})):n.createElement(h,a({ref:e},d))}));function u(r,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=r,l.mdxType="string"==typeof r?r:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14922:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const i={sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},a=void 0,l={unversionedId:"terraform/terraform-provider",id:"version-v0.3/terraform/terraform-provider",title:"Harvester Terraform Provider",description:"Requirements",source:"@site/versioned_docs/version-v0.3/terraform/terraform-provider.md",sourceDirName:"terraform",slug:"/terraform/terraform-provider",permalink:"/zh/v0.3/terraform/terraform-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/terraform/terraform-provider.md",tags:[],version:"v0.3",lastUpdatedAt:1690232544,formattedLastUpdatedAt:"2023\u5e747\u670824\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},sidebar:"tutorialSidebar",previous:{title:"Harvester CSI Driver",permalink:"/zh/v0.3/rancher/csi-driver"},next:{title:"Installation",permalink:"/zh/v0.3/troubleshooting/installation"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Install the Provider",id:"install-the-provider",level:2},{value:"<strong>Option 1:</strong> Download and install the provider from the Terraform registry.",id:"option-1-download-and-install-the-provider-from-the-terraform-registry",level:3},{value:"<strong>Option 2:</strong> Build and install the provider manually.",id:"option-2-build-and-install-the-provider-manually",level:3},{value:"<strong>Building the provider:</strong>",id:"building-the-provider",level:4},{value:"<strong>Installing the provider:</strong>",id:"installing-the-provider",level:4},{value:"Using the provider",id:"using-the-provider",level:2}],d={toc:s};function v(r){let{components:e,...t}=r;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/terraform/terraform-provider"})),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," >= 0.13.x"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," 1.16 to build the provider plugin")),(0,o.kt)("h2",{id:"install-the-provider"},"Install the Provider"),(0,o.kt)("h3",{id:"option-1-download-and-install-the-provider-from-the-terraform-registry"},(0,o.kt)("strong",{parentName:"h3"},"Option 1:")," Download and install the provider from the Terraform ",(0,o.kt)("a",{parentName:"h3",href:"https://registry.terraform.io/providers/harvester/harvester/latest"},"registry"),"."),(0,o.kt)("p",null,"To install this provider, copy and paste this code into your Terraform configuration. Then, run terraform init."),(0,o.kt)("p",null,"Terraform 0.13+"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "0.2.8"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,o.kt)("p",null,"For more details, please refer to the Harvester provider ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"documentation"),"."),(0,o.kt)("h3",{id:"option-2-build-and-install-the-provider-manually"},(0,o.kt)("strong",{parentName:"h3"},"Option 2:")," Build and install the provider manually."),(0,o.kt)("h4",{id:"building-the-provider"},(0,o.kt)("strong",{parentName:"h4"},"Building the provider:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clone the repository using the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"git clone git@github.com:harvester/terraform-provider-harvester\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter the provider directory and build the provider; this will build the provider and put the provider binary in ",(0,o.kt)("inlineCode",{parentName:"p"},"./bin"),". Use the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd terraform-provider-harvester\nmake\n")))),(0,o.kt)("h4",{id:"installing-the-provider"},(0,o.kt)("strong",{parentName:"h4"},"Installing the provider:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The expected location for the Harvester provider for the target platform within one of the local search directories is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"registry.terraform.io/harvester/harvester/0.2.8/linux_amd64/terraform-provider-harvester_v0.2.8\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The default location for locally-installed providers will be one of the following, depending on the operating system under which you are running Terraform:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("inlineCode",{parentName:"li"},"%APPDATA%\\terraform.d\\plugins")),(0,o.kt)("li",{parentName:"ul"},"All other systems: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.terraform.d/plugins"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Place the provider into the plugin directory as in the following example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'version=0.2.8\narch=linux_amd64\nterraform_harvester_provider_bin=./bin/terraform-provider-harvester\n\nterraform_harvester_provider_dir="${HOME}/.terraform.d/plugins/registry.terraform.io/harvester/harvester/${version}/${arch}/"\nmkdir -p "${terraform_harvester_provider_dir}"\ncp ${terraform_harvester_provider_bin} "${terraform_harvester_provider_dir}/terraform-provider-harvester_v${version}"}\n')))),(0,o.kt)("h2",{id:"using-the-provider"},"Using the provider"),(0,o.kt)("p",null,"After placing the provider into your plugins directory,  run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform init")," to initialize it.\nMore information about provider-specific configuration options can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"docs directory")))}v.isMDXComponent=!0}}]);