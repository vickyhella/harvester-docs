"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,u=m["".concat(o,".").concat(h)]||m[h]||d[h]||i;return r?a.createElement(u,l(l({ref:t},p),{},{components:r})):a.createElement(u,l({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:2,sidebar_label:"\u865a\u62df\u5316\u7ba1\u7406",title:"\u865a\u62df\u5316\u7ba1\u7406",keywords:["Harvester","Rancher"]},l=void 0,s={unversionedId:"rancher/virtualization-management",id:"rancher/virtualization-management",title:"\u865a\u62df\u5316\u7ba1\u7406",description:"\u501f\u52a9 Rancher \u7684\u865a\u62df\u5316\u7ba1\u7406\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5bfc\u5165\u548c\u7ba1\u7406\u591a\u4e2a Harvester \u96c6\u7fa4\u3002\u4f60\u53ef\u4ee5\u4ece\u5355\u4e00\u7ba1\u7406\u5e73\u53f0\u8fdb\u884c\u865a\u62df\u5316\u7ba1\u7406\u548c\u5bb9\u5668\u7ba1\u7406\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rancher/virtualization-management.md",sourceDirName:"rancher",slug:"/rancher/virtualization-management",permalink:"/harvester-docs/zh/v1.2/rancher/virtualization-management",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/virtualization-management.md",tags:[],version:"current",lastUpdatedAt:1696844458,formattedLastUpdatedAt:"2023\u5e7410\u67089\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u865a\u62df\u5316\u7ba1\u7406",title:"\u865a\u62df\u5316\u7ba1\u7406",keywords:["Harvester","Rancher"]},sidebar:"docs",previous:{title:"Rancher \u96c6\u6210",permalink:"/harvester-docs/zh/v1.2/rancher/rancher-integration"},next:{title:"Harvester \u4e3b\u673a\u9a71\u52a8",permalink:"/harvester-docs/zh/v1.2/rancher/node/node-driver"}},o={},c=[{value:"\u5bfc\u5165 Harvester \u96c6\u7fa4",id:"\u5bfc\u5165-harvester-\u96c6\u7fa4",level:2},{value:"\u591a\u79df\u6237",id:"\u591a\u79df\u6237",level:2},{value:"\u591a\u79df\u6237\u793a\u4f8b",id:"\u591a\u79df\u6237\u793a\u4f8b",level:3},{value:"\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4",id:"\u5220\u9664\u5bfc\u5165\u7684-harvester-\u96c6\u7fa4",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u501f\u52a9 Rancher \u7684\u865a\u62df\u5316\u7ba1\u7406\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5bfc\u5165\u548c\u7ba1\u7406\u591a\u4e2a Harvester \u96c6\u7fa4\u3002\u4f60\u53ef\u4ee5\u4ece\u5355\u4e00\u7ba1\u7406\u5e73\u53f0\u8fdb\u884c\u865a\u62df\u5316\u7ba1\u7406\u548c\u5bb9\u5668\u7ba1\u7406\u3002"),(0,n.kt)("p",null,"\u6b64\u5916\uff0cHarvester \u5229\u7528 Rancher \u7684\u73b0\u6709\u529f\u80fd\uff08\u4f8b\u5982",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/authentication-config"},"\u8eab\u4efd\u8ba4\u8bc1"),"\u548c ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/manage-role-based-access-control-rbac"},"RBAC \u63a7\u5236"),"\uff09\u6765\u63d0\u4f9b\u5b8c\u6574\u7684\u591a\u79df\u6237\u652f\u6301\u3002"),(0,n.kt)("h2",{id:"\u5bfc\u5165-harvester-\u96c6\u7fa4"},"\u5bfc\u5165 Harvester \u96c6\u7fa4"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"li",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/"},"Harvester \u548c Rancher \u652f\u6301\u77e9\u9635"),"\u67e5\u627e\u6240\u9700\u7684 Rancher \u7248\u672c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6307\u5357\u4e4b\u4e00\uff0c\u5728\u4f60\u7684\u63d0\u4f9b\u5546\u4e2d\u90e8\u7f72\u548c\u914d\u7f6e Rancher \u548c Kubernetes \u96c6\u7fa4\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/deploy-rancher-manager"},"AWS"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace"},"AWS Marketplace"),"\uff08\u4f7f\u7528 Amazon EKS\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/azure"},"Azure"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean"},"DigitalOcean"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/gcp"},"GCP"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud"},"Hetzner Cloud"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},"Vagrant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"},"Equinix Metal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/outscale-qs"},"Outscale"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"},"\u624b\u52a8\u5b89\u88c5")))),(0,n.kt)("li",{parentName:"ol"},"Rancher Server \u6b63\u5e38\u8fd0\u884c\u540e\uff0c\u4f60\u53ef\u4ee5\u767b\u5f55\u8fdb\u53bb\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684\u6c49\u5821\u83dc\u5355\uff0c\u7136\u540e\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Virtualization Management")," \u9009\u9879\u5361\u3002\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Import Existing"),"\uff0c\u5c06\u4e0b\u6e38 Harvester \u96c6\u7fa4\u5bfc\u5165 Rancher Server\u3002\n",(0,n.kt)("img",{src:r(78397).Z,width:"1848",height:"724"})),(0,n.kt)("li",{parentName:"ol"},"\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster Name")," \u5e76\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Create"),"\u3002\u7136\u540e\u4f60\u5c06\u770b\u5230\u6ce8\u518c\u6307\u5357\u3002\u8bf7\u6253\u5f00\u76ee\u6807 Harvester \u96c6\u7fa4\u7684\u4eea\u8868\u76d8\u5e76\u6309\u7167\u6307\u5357\u8fdb\u884c\u64cd\u4f5c\u3002\n",(0,n.kt)("img",{src:r(91).Z,width:"1024",height:"454"})),(0,n.kt)("li",{parentName:"ol"},"Agent \u8282\u70b9\u5c31\u7eea\u540e\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u4ece Rancher Server \u67e5\u770b\u548c\u8bbf\u95ee\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\uff0c\u5e76\u7ba1\u7406\u4f60\u7684\u865a\u62df\u673a\u3002\n",(0,n.kt)("img",{src:r(50191).Z,width:"2559",height:"801"})),(0,n.kt)("li",{parentName:"ol"},"\u5728 Harvester UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5355\u51fb\u6c49\u5821\u83dc\u5355\u5bfc\u822a\u56de Rancher \u591a\u96c6\u7fa4\u7ba1\u7406\u9875\u9762\u3002\n",(0,n.kt)("img",{src:r(34998).Z,width:"5116",height:"2084"}))),(0,n.kt)("h2",{id:"\u591a\u79df\u6237"},"\u591a\u79df\u6237"),(0,n.kt)("p",null,"\u5728 Harvester \u4e2d\uff0c\u6211\u4eec\u5229\u7528\u4e86\u73b0\u6709\u7684 Rancher ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/manage-role-based-access-control-rbac"},"RBAC \u6388\u6743"),"\uff0c\u4ee5\u4fbf\u7528\u6237\u6839\u636e\u4ed6\u4eec\u7684\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272\u6743\u9650\u67e5\u770b\u548c\u7ba1\u7406\u4e00\u7ec4\u8d44\u6e90\u3002"),(0,n.kt)("p",null,"\u5728 Rancher \u4e2d\uff0c\u6bcf\u4e2a\u4eba\u90fd\u9a8c\u8bc1\u4e3a\u4e00\u4e2a\u7528\u6237\u6765\u8bbf\u95ee Rancher\u3002\u7528\u6237\u53ef\u4ee5\u662f\u672c\u5730\u7528\u6237\u6216\u5916\u90e8\u7528\u6237\uff08\u5982",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/authentication-config"},"\u8eab\u4efd\u9a8c\u8bc1"),"\u4e2d\u6240\u8ff0\uff09\u3002"),(0,n.kt)("p",null,"\u7528\u6237\u767b\u5f55\u5230 Rancher \u540e\uff0c\u4ed6\u4eec\u7684\u6388\u6743\uff08\u4e5f\u79f0\u4e3a\u8bbf\u95ee\u6743\u9650\uff09\u7531\u5168\u5c40\u6743\u9650\u4ee5\u53ca\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272\u51b3\u5b9a\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},(0,n.kt)("strong",{parentName:"a"},"\u5168\u5c40\u6743\u9650")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u6240\u6709\u7279\u5b9a\u96c6\u7fa4\u4e4b\u5916\u5b9a\u4e49\u7528\u6237\u6388\u6743\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},(0,n.kt)("strong",{parentName:"a"},"\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272")),"\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u4e3a\u7528\u6237\u5206\u914d\u89d2\u8272\u7684\u7279\u5b9a\u96c6\u7fa4\u6216\u9879\u76ee\u4e2d\u5b9a\u4e49\u7528\u6237\u6388\u6743\u3002")))),(0,n.kt)("p",null,"\u5168\u5c40\u6743\u9650\u4ee5\u53ca\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272\u90fd\u662f\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes RBAC")," \u4e4b\u4e0a\u5b9e\u73b0\u7684\u3002\u56e0\u6b64\uff0c\u6743\u9650\u548c\u89d2\u8272\u7531 Kubernetes \u6267\u884c\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6240\u6709\u8005\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u96c6\u7fa4\u53ca\u5176\u5185\u90e8\u7684\u6240\u6709\u8d44\u6e90\uff0c\u4f8b\u5982\u4e3b\u673a\u3001\u865a\u62df\u673a\u3001\u5377\u3001\u955c\u50cf\u3001\u7f51\u7edc\u3001\u5907\u4efd\u548c\u8bbe\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u5c06\u9879\u76ee\u7528\u6237\u5206\u914d\u5230\u6709\u6743\u9650\u7ba1\u7406\u9879\u76ee\u5185\u90e8\u8d44\u6e90\u7684\u7279\u5b9a\u9879\u76ee\u3002")),(0,n.kt)("h3",{id:"\u591a\u79df\u6237\u793a\u4f8b"},"\u591a\u79df\u6237\u793a\u4f8b"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u89e3\u91ca\u4e86\u591a\u79df\u6237\u529f\u80fd\u7684\u5de5\u4f5c\u539f\u7406\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9996\u5148\uff0c\u901a\u8fc7 Rancher ",(0,n.kt)("inlineCode",{parentName:"li"},"Users & Authentication")," \u9875\u9762\u6dfb\u52a0\u65b0\u7528\u6237\u3002\u7136\u540e\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," \u6dfb\u52a0\u4e24\u4e2a\u65b0\u7528\u6237\uff0c\u5206\u522b\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly"),"\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u662f\u6709\u6743\u7ba1\u7406\u7279\u5b9a\u9879\u76ee\uff08\u4f8b\u5982\u9ed8\u8ba4\u9879\u76ee\uff09\u7684\u8d44\u6e90\u7684\u7528\u6237\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly")," \u662f\u5177\u6709\u7279\u5b9a\u9879\u76ee\uff08\u4f8b\u5982\u9ed8\u8ba4\u9879\u76ee\uff09\u7684\u53ea\u8bfb\u6743\u9650\u7684\u7528\u6237\u3002\n",(0,n.kt)("img",{src:r(55780).Z,width:"2556",height:"1159"})))),(0,n.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230 Harvester UI \u540e\uff0c\u5355\u51fb\u5176\u4e2d\u4e00\u4e2a\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Projects/Namespaces")," \u9009\u9879\u5361\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u4e2a\u9879\u76ee\uff08\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"default"),"\uff09\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit Config")," \u6765\u5c06\u7528\u6237\u5206\u914d\u7ed9\u8be5\u9879\u76ee\u5e76\u5206\u914d\u9002\u5f53\u7684\u6743\u9650\u3002\u4f8b\u5982\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u7528\u6237\u4f1a\u88ab\u5206\u914d\u5230\u9879\u76ee\u6240\u6709\u8005\u89d2\u8272\u3002\n",(0,n.kt)("img",{src:r(46089).Z,width:"897",height:"733"})))),(0,n.kt)("li",{parentName:"ol"},"\u7ee7\u7eed\u5c06 ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly")," \u7528\u6237\u6dfb\u52a0\u5230\u540c\u4e00\u9879\u76ee\u4e2d\uff0c\u5206\u914d\u53ea\u8bfb\u6743\u9650\uff0c\u7136\u540e\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002\n",(0,n.kt)("img",{src:r(1767).Z,width:"2559",height:"947"})),(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00\u6d4f\u89c8\u5668\u7684\u65e0\u75d5\u6d4f\u89c8\u6a21\u5f0f\uff0c\u5e76\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u8eab\u4efd\u767b\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u7528\u6237\u8eab\u4efd\u767b\u5f55\u540e\uff0c\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Virtualization Management")," \u9009\u9879\u5361\u3002\u7136\u540e\uff0c\u4f60\u5c06\u80fd\u770b\u5230\u4f60\u5206\u914d\u5230\u7684\u96c6\u7fa4\u548c\u9879\u76ee\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Images")," \u9009\u9879\u5361\u4ee5\u67e5\u770b\u4e4b\u524d\u4e0a\u4f20\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"harvester-public")," \u547d\u540d\u7a7a\u95f4\u7684\u955c\u50cf\u5217\u8868\u3002\u4f60\u4e5f\u53ef\u4ee5\u6309\u9700\u4e0a\u4f20\u4f60\u81ea\u5df1\u7684\u955c\u50cf\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4f60\u4e0a\u4f20\u7684\u955c\u50cf\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u673a\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u53e6\u4e00\u4e2a\u7528\u6237\u767b\u5f55\uff08\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly"),"\uff09\uff0c\u8fd9\u4e2a\u7528\u6237\u4ec5\u62e5\u6709\u9879\u76ee\u7684\u8bfb\u6743\u9650\u3002")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"harvester-public")," \u662f\u4e00\u4e2a\u9884\u5b9a\u4e49\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u5206\u914d\u7ed9\u8be5\u96c6\u7fa4\u7684\u6240\u6709\u7528\u6237\u90fd\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e2a\u547d\u540d\u7a7a\u95f4\u3002")),(0,n.kt)("h2",{id:"\u5220\u9664\u5bfc\u5165\u7684-harvester-\u96c6\u7fa4"},"\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728 ",(0,n.kt)("strong",{parentName:"p"},"Virtualization Management > Harvester Clusters")," \u9875\u9762\uff0c\u5728 Rancher UI \u4e2d\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\u3002\u9009\u62e9\u8981\u5220\u9664\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Delete")," \u6309\u94ae\uff0c\u4ece\u800c\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u91cd\u7f6e\u5173\u8054 Harvester \u96c6\u7fa4\u4e0a\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-registration-url")," \u8bbe\u7f6e\uff0c\u4ece\u800c\u6e05\u7406 Rancher Cluster Agent\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"delete-cluster",src:r(44392).Z,width:"3578",height:"1638"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl delete -f ...")," \u547d\u4ee4\u6765\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\uff0c\u56e0\u4e3a\u8fd9\u5c06\u5220\u9664 Harvester \u96c6\u7fa4\u6240\u9700\u8981\u7684\u6574\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u3002")))}d.isMDXComponent=!0},46089:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/add-member-943f18a8d8aab0377ddf8c74d15a44a4.png"},1767:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/added-user-74f30dba0c2ea1936837d3ebfa781335.png"},55780:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-user-9b8348a8edeeff5ea8537ea4739df041.png"},44392:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/delete-harvester-cluster-d4571d1521fa3e2b3bb4078d456bc481.png"},50191:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harv-cluster-view-066656890fd03300b5964da81dd0b079.png"},34998:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harv-go-back-a172a84b9bbe934f76d23af11090a40f.png"},91:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harv-importing-3284d4c71fff9d88bde954de0fca8cb9.png"},78397:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vm-menu-9370f3a907e8bc5e4c78f2cf3ac17184.png"}}]);