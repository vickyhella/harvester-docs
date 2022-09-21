"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2500],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),v=s(t),u=o,h=v["".concat(p,".").concat(u)]||v[u]||m[u]||i;return t?n.createElement(h,a(a({ref:r},d),{},{components:t})):n.createElement(h,a({ref:r},d))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2805:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:""},a="Harvester Terraform Provider",l={unversionedId:"terraform/terraform",id:"version-v0.3/terraform/terraform",title:"",description:"Requirements",source:"@site/versioned_docs/version-v0.3/terraform/terraform.md",sourceDirName:"terraform",slug:"/terraform/",permalink:"/zh/v0.3/terraform/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/terraform/terraform.md",tags:[],version:"v0.3",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:""},sidebar:"tutorialSidebar",previous:{title:"Harvester CSI Driver",permalink:"/zh/v0.3/rancher/csi-driver"},next:{title:"Installation",permalink:"/zh/v0.3/troubleshooting/installation"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Install the Provider",id:"install-the-provider",level:2},{value:"<strong>Option 1:</strong> Download and install the provider from the Terraform registry.",id:"option-1-download-and-install-the-provider-from-the-terraform-registry",level:3},{value:"<strong>Option 2:</strong> Build and install the provider manually.",id:"option-2-build-and-install-the-provider-manually",level:3},{value:"<strong>Building the provider:</strong>",id:"building-the-provider",level:4},{value:"<strong>Installing the provider:</strong>",id:"installing-the-provider",level:4},{value:"Using the provider",id:"using-the-provider",level:2}],d={toc:s};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"harvester-terraform-provider"},"Harvester Terraform Provider"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," >= 0.13.x"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"Go")," 1.16 to build the provider plugin")),(0,o.kt)("h2",{id:"install-the-provider"},"Install the Provider"),(0,o.kt)("h3",{id:"option-1-download-and-install-the-provider-from-the-terraform-registry"},(0,o.kt)("strong",{parentName:"h3"},"Option 1:")," Download and install the provider from the Terraform ",(0,o.kt)("a",{parentName:"h3",href:"https://registry.terraform.io/providers/harvester/harvester/latest"},"registry"),"."),(0,o.kt)("p",null,"To install this provider, copy and paste this code into your Terraform configuration. Then, run terraform init."),(0,o.kt)("p",null,"Terraform 0.13+"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "0.2.8"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,o.kt)("p",null,"For more details, please refer to the Harvester provider ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"documentation"),"."),(0,o.kt)("h3",{id:"option-2-build-and-install-the-provider-manually"},(0,o.kt)("strong",{parentName:"h3"},"Option 2:")," Build and install the provider manually."),(0,o.kt)("h4",{id:"building-the-provider"},(0,o.kt)("strong",{parentName:"h4"},"Building the provider:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clone the repository using the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"git clone git@github.com:harvester/terraform-provider-harvester\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter the provider directory and build the provider; this will build the provider and put the provider binary in ",(0,o.kt)("inlineCode",{parentName:"p"},"./bin"),". Use the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd terraform-provider-harvester\nmake\n")))),(0,o.kt)("h4",{id:"installing-the-provider"},(0,o.kt)("strong",{parentName:"h4"},"Installing the provider:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The expected location for the Harvester provider for the target platform within one of the local search directories is as follows:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"registry.terraform.io/harvester/harvester/0.2.8/linux_amd64/terraform-provider-harvester_v0.2.8\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The default location for locally-installed providers will be one of the following, depending on the operating system under which you are running Terraform:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Windows: ",(0,o.kt)("inlineCode",{parentName:"li"},"%APPDATA%\\terraform.d\\plugins")),(0,o.kt)("li",{parentName:"ul"},"All other systems: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.terraform.d/plugins"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Place the provider into the plugin directory as in the following example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'version=0.2.8\narch=linux_amd64\nterraform_harvester_provider_bin=./bin/terraform-provider-harvester\n\nterraform_harvester_provider_dir="${HOME}/.terraform.d/plugins/registry.terraform.io/harvester/harvester/${version}/${arch}/"\nmkdir -p "${terraform_harvester_provider_dir}"\ncp ${terraform_harvester_provider_bin} "${terraform_harvester_provider_dir}/terraform-provider-harvester_v${version}"}\n')))),(0,o.kt)("h2",{id:"using-the-provider"},"Using the provider"),(0,o.kt)("p",null,"After placing the provider into your plugins directory,  run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform init")," to initialize it.\nMore information about provider-specific configuration options can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"docs directory")))}m.isMDXComponent=!0}}]);