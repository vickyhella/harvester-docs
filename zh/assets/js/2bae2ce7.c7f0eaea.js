"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),v=n,h=c["".concat(o,".").concat(v)]||c[v]||d[v]||i;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},69782:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:3,sidebar_label:"\u4ece v1.0.3/v1.1.0 \u5347\u7ea7\u5230 v1.1.1",title:"\u4ece v1.0.3/v1.1.0 \u5347\u7ea7\u5230 v1.1.1"},l=void 0,s={unversionedId:"upgrade/v1-0-3-to-v1-1-1",id:"upgrade/v1-0-3-to-v1-1-1",title:"\u4ece v1.0.3/v1.1.0 \u5347\u7ea7\u5230 v1.1.1",description:"\u901a\u7528\u4fe1\u606f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrade/v1-0-3-to-v1-1-1.md",sourceDirName:"upgrade",slug:"/upgrade/v1-0-3-to-v1-1-1",permalink:"/harvester-docs/zh/dev/upgrade/v1-0-3-to-v1-1-1",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/v1-0-3-to-v1-1-1.md",tags:[],version:"current",lastUpdatedAt:1690816293,formattedLastUpdatedAt:"2023\u5e747\u670831\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u4ece v1.0.3/v1.1.0 \u5347\u7ea7\u5230 v1.1.1",title:"\u4ece v1.0.3/v1.1.0 \u5347\u7ea7\u5230 v1.1.1"},sidebar:"tutorialSidebar",previous:{title:"\u4ece v1.1.0/v1.1.1 \u5347\u7ea7\u5230 v1.1.2",permalink:"/harvester-docs/zh/dev/upgrade/v1-1-to-v1-1-2"},next:{title:"\u4ece v1.0.3 \u5347\u7ea7\u5230 v1.1.0",permalink:"/harvester-docs/zh/dev/upgrade/previous-releases/v1-0-3-to-v1-1-0"}},o={},p=[{value:"\u901a\u7528\u4fe1\u606f",id:"\u901a\u7528\u4fe1\u606f",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2},{value:"1. \u5347\u7ea7\u5361\u5728\u9884\u6e05\u7a7a\u8282\u70b9\u72b6\u6001",id:"1-\u5347\u7ea7\u5361\u5728\u9884\u6e05\u7a7a\u8282\u70b9\u72b6\u6001",level:3},{value:"2. \u5347\u7ea7\u5361\u5728\u9884\u6e05\u7a7a\u8282\u70b9\u72b6\u6001\uff08\u60c5\u51b5 2\uff09",id:"2-\u5347\u7ea7\u5361\u5728\u9884\u6e05\u7a7a\u8282\u70b9\u72b6\u6001\u60c5\u51b5-2",level:3},{value:"3. \u5347\u7ea7\u5361\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9\uff1aJob was active longer than specified deadline",id:"3-\u5347\u7ea7\u5361\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9job-was-active-longer-than-specified-deadline",level:3},{value:"4. \u8282\u70b9\u9884\u6e05\u7a7a\u540e\u5347\u7ea7\u5361\u4f4f",id:"4-\u8282\u70b9\u9884\u6e05\u7a7a\u540e\u5347\u7ea7\u5361\u4f4f",level:3},{value:"5. \u5176\u4ed6\u53d7\u4fe1 CA \u8bc1\u4e66\u5728\u66f4\u65b0\u540e\u9057\u5931",id:"5-\u5176\u4ed6\u53d7\u4fe1-ca-\u8bc1\u4e66\u5728\u66f4\u65b0\u540e\u9057\u5931",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u901a\u7528\u4fe1\u606f"},"\u901a\u7528\u4fe1\u606f"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4ece v1.1.0 \u7248\u672c\u5f00\u59cb\uff0cHarvester \u5f15\u5165\u4e86\u65b0\u7684 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2236"},"VLAN \u589e\u5f3a"),"\u529f\u80fd\u3002\u7531\u4e8e\u5b9e\u73b0\u7684\u66f4\u6539\uff0c\u5982\u679c\u4f60\u9700\u8981\u4ece v1.0.3 \u5347\u7ea7\u5230 v1.1.1\uff0c\u5219\u5fc5\u987b\u5173\u95ed\u6240\u6709\u865a\u62df\u673a\u3002\u8bf7\u5728\u5347\u7ea7\u524d\u505c\u6b62\u865a\u62df\u673a\u3002\u7531 v1.1.0 \u5347\u7ea7\u5230 v1.1.1 \u65e0\u6b64\u9650\u5236\uff08\u4f7f\u7528\u70ed\u8fc1\u79fb\uff09\u3002"))),(0,n.kt)("p",null,"\u4e00\u65e6\u6709\u4e86\u53ef\u5347\u7ea7\u7684\u7248\u672c\uff0cHarvester GUI Dashboard \u9875\u9762\u5c06\u663e\u793a\u4e00\u4e2a\u5347\u7ea7\u6309\u94ae\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/upgrade/automatic#%E5%BC%80%E5%A7%8B%E5%8D%87%E7%BA%A7"},"\u5f00\u59cb\u5347\u7ea7"),"\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u79bb\u7ebf\u73af\u5883\u5347\u7ea7\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/upgrade/automatic#%E5%87%86%E5%A4%87%E7%A6%BB%E7%BA%BF%E5%8D%87%E7%BA%A7"},"\u51c6\u5907\u79bb\u7ebf\u5347\u7ea7"),"\u3002"),(0,n.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1-\u5347\u7ea7\u5361\u5728\u9884\u6e05\u7a7a\u8282\u70b9\u72b6\u6001"},"1. \u5347\u7ea7\u5361\u5728\u9884\u6e05\u7a7a\u8282\u70b9\u72b6\u6001"),(0,n.kt)("p",null,"\u4ece v1.1.0 \u5f00\u59cb\uff0cHarvester \u5c06\u7b49\u5f85\u6240\u6709\u5377\u72b6\u6001\u90fd\u662f\u5065\u5eb7\uff08\u8282\u70b9\u6570\u91cf >= 3 \u65f6\uff09\u540e\u518d\u5347\u7ea7\u8282\u70b9\u3002\u901a\u5e38\uff0c\u5982\u679c\u5347\u7ea7\u5361\u5728 \u201cpre-draining\u201d \u72b6\u6001\uff0c\u4f60\u53ef\u4ee5\u68c0\u67e5\u5377\u7684\u8fd0\u884c\u72b6\u51b5\u3002"),(0,n.kt)("p",null,"\u8bbf\u95ee ",(0,n.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/troubleshooting/harvester#%E8%AE%BF%E9%97%AE%E5%B5%8C%E5%85%A5%E5%BC%8F-rancher-%E5%92%8C-longhorn-%E4%BB%AA%E8%A1%A8%E6%9D%BF"},'"Access Embedded Longhorn"')," \u4e86\u89e3\u5982\u4f55\u8bbf\u95ee\u5d4c\u5165\u5f0f Longhorn GUI\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2-\u5347\u7ea7\u5361\u5728\u9884\u6e05\u7a7a\u8282\u70b9\u72b6\u6001\u60c5\u51b5-2"},"2. \u5347\u7ea7\u5361\u5728\u9884\u6e05\u7a7a\u8282\u70b9\u72b6\u6001\uff08\u60c5\u51b5 2\uff09"),(0,n.kt)("p",null,"\u5347\u7ea7\u5361\u5728\u4e0b\u56fe\u6240\u793a\u7684\u72b6\u6001\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(43189).Z,width:"1128",height:"470"})),(0,n.kt)("p",null,"\u7528\u6237\u540c\u65f6\u89c2\u5bdf\u5230\u6709\u591a\u4e2a\u8282\u70b9\u88ab\u7981\u6b62\u8c03\u5ea6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get nodes\nNAME    STATUS                     ROLES                       AGE   VERSION\nnode1   Ready                      control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode2   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode3   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76f8\u5173 issue\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216"},"[BUG] Multiple nodes pre-drains in an upgrade")))),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u65b9\u6cd5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"},"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"3-\u5347\u7ea7\u5361\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9job-was-active-longer-than-specified-deadline"},"3. \u5347\u7ea7\u5361\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9\uff1aJob was active longer than specified deadline"),(0,n.kt)("p",null,"\u5347\u7ea7\u5931\u8d25\uff0c\u5982\u4e0b\u622a\u56fe\u6240\u793a\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(37846).Z,width:"1140",height:"918"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76f8\u5173 issue\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894"},"[BUG] Upgrade stuck in upgrading first node: Job was active longer than specified deadline")))),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u65b9\u6cd5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"},"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"4-\u8282\u70b9\u9884\u6e05\u7a7a\u540e\u5347\u7ea7\u5361\u4f4f"},"4. \u8282\u70b9\u9884\u6e05\u7a7a\u540e\u5347\u7ea7\u5361\u4f4f"),(0,n.kt)("p",null,"\u5347\u7ea7\u5361\u5728\u4e0b\u56fe\u6240\u793a\u7684\u72b6\u6001\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(3398).Z,width:"1136",height:"504"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76f8\u5173 issue\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021"},"[BUG] Upgrade stop at upgrading node3 stage, stuck in Pre-drained status")))),(0,n.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u65b9\u6cd5\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"},"https://github.com/harvester/harvester/issues/3021#issuecomment-1288747614"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"5-\u5176\u4ed6\u53d7\u4fe1-ca-\u8bc1\u4e66\u5728\u66f4\u65b0\u540e\u9057\u5931"},"5. \u5176\u4ed6\u53d7\u4fe1 CA \u8bc1\u4e66\u5728\u66f4\u65b0\u540e\u9057\u5931"),(0,n.kt)("p",null,"\u4ece v1.0.3 \u5347\u7ea7\u540e\uff0c\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/advanced/settings#additional-ca"},(0,n.kt)("inlineCode",{parentName:"a"},"additional-ca"))," \u8bbe\u7f6e\u914d\u7f6e\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/pki/trust/anchors/additional-ca.pem")," \u6587\u4ef6\u6d88\u5931\u4e86\u3002"),(0,n.kt)("p",null,"\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u7528\u6237\u9700\u8981\u8bbf\u95ee Settings \u9875\u9762\uff08Harvester GUI > ",(0,n.kt)("inlineCode",{parentName:"p"},"Advanced > Settings"),"\uff09\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f16\u8f91 ",(0,n.kt)("inlineCode",{parentName:"li"},"additional-ca")," \u8bbe\u7f6e\u3002\u5148\u5907\u4efd\u5f53\u524d\u503c\uff0c\u6e05\u9664\u5f53\u524d\u503c\uff0c\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Save"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u518d\u6b21\u7f16\u8f91 ",(0,n.kt)("inlineCode",{parentName:"li"},"additional-ca")," \u8bbe\u7f6e\u3002\u518d\u6b21\u8f93\u5165\u8bc1\u4e66\u503c\u5e76\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Save"),"\u3002")),(0,n.kt)("hr",null))}d.isMDXComponent=!0},37846:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2894-deadline-8fbfd53960ef87f904f6a893a4a0bfcd.png"},3398:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3021-stuck-fe36d9af55b75fc0818de41c48ec670b.png"},43189:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3216-stuck-pre-drain-33d5537a9151085216d2cd275c92cf1f.png"}}]);