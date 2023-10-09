"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5,sidebar_label:"Rancher Manager",title:"Rancher Manager (Experimental)"},l=void 0,i={unversionedId:"advanced/addons/rancher-vcluster",id:"advanced/addons/rancher-vcluster",title:"Rancher Manager (Experimental)",description:"Available as of v1.2.0",source:"@site/docs/advanced/addons/rancher-vcluster.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/rancher-vcluster",permalink:"/harvester-docs/zh/v1.2/advanced/addons/rancher-vcluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/addons/rancher-vcluster.md",tags:[],version:"current",lastUpdatedAt:1695242314,formattedLastUpdatedAt:"2023\u5e749\u670820\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Rancher Manager",title:"Rancher Manager (Experimental)"},sidebar:"docs",previous:{title:"Seeder",permalink:"/harvester-docs/zh/v1.2/advanced/addons/seeder"},next:{title:"Rancher \u96c6\u6210",permalink:"/harvester-docs/zh/v1.2/rancher/index"}},s={},c=[{value:"Installing rancher-vcluster",id:"installing-rancher-vcluster",level:2},{value:"Configuring rancher-vcluster",id:"configuring-rancher-vcluster",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/advanced/rancher-vcluster"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," addon allows you to run Rancher Manager as a workload on the underlying Harvester cluster and is implemented using ",(0,a.kt)("a",{parentName:"p",href:"https://www.vcluster.com/"},"vcluster"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(21161).Z,width:"1039",height:"577"})),(0,a.kt)("p",null,"The addon runs a nested K3s cluster in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," namespace and deploys Rancher to this cluster."),(0,a.kt)("p",null,"During the installation, the ingress for Rancher is synced to the Harvester cluster, allowing end users to access Rancher."),(0,a.kt)("h2",{id:"installing-rancher-vcluster"},"Installing rancher-vcluster"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," addon is not packaged with Harvester, but you can find it in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/experimental-addons"},"experimental-addons repo"),"."),(0,a.kt)("p",null,"Assuming you are using the Harvester kubeconfig, you can run the following commands to install the addon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/harvester/experimental-addons/main/rancher-vcluster/rancher-vcluster.yaml\n")),(0,a.kt)("h2",{id:"configuring-rancher-vcluster"},"Configuring rancher-vcluster"),(0,a.kt)("p",null,"After installing the addon, you need to configure it from the Harvester UI as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Advanced")," > ",(0,a.kt)("strong",{parentName:"li"},"Addons"),"."),(0,a.kt)("li",{parentName:"ol"},"Find the ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-vcluster")," addon and select ",(0,a.kt)("strong",{parentName:"li"},"\u22ee")," > ",(0,a.kt)("strong",{parentName:"li"},"Edit Config"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(18770).Z,width:"1212",height:"455"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Hostname")," field, enter a valid DNS record pointing to the Harvester VIP. This is essential as the vcluster ingress is synced to the parent Harvester cluster. A valid hostname is used to filter ingress traffic to the vcluster workload."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Bootstrap Password")," field, enter the bootstrap password for the new Rancher deployed on the vcluster.")),(0,a.kt)("p",null,"Once the addon is deployed, Rancher can take a few minutes to become available. "),(0,a.kt)("p",null,"You can then access Rancher via the hostname DNS record that you provided."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../../rancher/virtualization-management.md"},"Rancher Integration")," for more information."),(0,a.kt)("admonition",{title:"Disabling rancher-vcluster",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," addon is deployed on a ",(0,a.kt)("inlineCode",{parentName:"p"},"vcluster")," Statefulset that uses a Longhorn PVC."),(0,a.kt)("p",{parentName:"admonition"},"When ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," is disabled, the PVC ",(0,a.kt)("inlineCode",{parentName:"p"},"data-rancher-vcluster-0")," will remain in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-vcluster")," namespace."),(0,a.kt)("p",{parentName:"admonition"},"If you enable the addon again, the PVC is re-used, and Rancher will have the old state available again."),(0,a.kt)("p",{parentName:"admonition"},"If you want to wipe the data, ensure that the PVC is deleted.")))}u.isMDXComponent=!0},18770:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/VclusterConfig-56058fcc87dd56f9fcff7d6d92d2484b.png"},21161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/EnableAddon-42d0feaeb5420d41b9e5ed17a5ff28c1.png"}}]);