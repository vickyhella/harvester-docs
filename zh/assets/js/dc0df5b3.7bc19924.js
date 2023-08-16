"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1246],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,v=d["".concat(o,".").concat(c)]||d[c]||u[c]||i;return a?r.createElement(v,l(l({ref:t},m),{},{components:a})):r.createElement(v,l({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:1,sidebar_label:"\u5347\u7ea7 Harvester",title:"\u5347\u7ea7 Harvester",keywords:["Harvester","harvester","Rancher","rancher","\u5347\u7ea7 Harvester"],Description:"\u5347\u7ea7 Harvester \u6709\u4e24\u79cd\u65b9\u6cd5\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ISO \u955c\u50cf\u6216\u901a\u8fc7 UI \u8fdb\u884c\u5347\u7ea7\u3002"},l=void 0,p={unversionedId:"upgrade/automatic",id:"version-v1.1/upgrade/automatic",title:"\u5347\u7ea7 Harvester",description:"\u5347\u7ea7\u652f\u6301\u77e9\u9635",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/upgrade/automatic.md",sourceDirName:"upgrade",slug:"/upgrade/automatic",permalink:"/harvester-docs/zh/v1.1/upgrade/automatic",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/upgrade/automatic.md",tags:[],version:"v1.1",lastUpdatedAt:1688120255,formattedLastUpdatedAt:"2023\u5e746\u670830\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u5347\u7ea7 Harvester",title:"\u5347\u7ea7 Harvester",keywords:["Harvester","harvester","Rancher","rancher","\u5347\u7ea7 Harvester"],Description:"\u5347\u7ea7 Harvester \u6709\u4e24\u79cd\u65b9\u6cd5\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ISO \u955c\u50cf\u6216\u901a\u8fc7 UI \u8fdb\u884c\u5347\u7ea7\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u79bb\u7ebf\u73af\u5883",permalink:"/harvester-docs/zh/v1.1/airgap"},next:{title:"\u4ece v1.1.0/v1.1.1 \u5347\u7ea7\u5230 v1.1.2",permalink:"/harvester-docs/zh/v1.1/upgrade/v1-1-to-v1-1-2"}},o={},s=[{value:"\u5347\u7ea7\u652f\u6301\u77e9\u9635",id:"\u5347\u7ea7\u652f\u6301\u77e9\u9635",level:2},{value:"\u5f00\u59cb\u5347\u7ea7",id:"\u5f00\u59cb\u5347\u7ea7",level:2},{value:"\u51c6\u5907\u79bb\u7ebf\u5347\u7ea7",id:"\u51c6\u5907\u79bb\u7ebf\u5347\u7ea7",level:2}],m={toc:s};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5347\u7ea7\u652f\u6301\u77e9\u9635"},"\u5347\u7ea7\u652f\u6301\u77e9\u9635"),(0,n.kt)("p",null,"\u4e0b\u8868\u4ecb\u7ecd\u4e86\u7248\u672c\u7684\u5347\u7ea7\u8def\u5f84\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u539f\u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u65b0\u7248\u672c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/harvester-docs/zh/v1.1/upgrade/v1-1-to-v1-1-2"},"v1.1.0, v1.1.1")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.1.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/harvester-docs/zh/v1.1/upgrade/v1-0-3-to-v1-1-1"},"v1.0.3")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.1.0, v1.1.1\uff08\u5efa\u8bae\u4f7f\u7528 v1.1.1\uff09")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/harvester-docs/zh/v1.1/upgrade/previous-releases/v1-0-2-to-v1-0-3"},"v1.0.2")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.0.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/harvester-docs/zh/v1.1/upgrade/previous-releases/v1-0-1-to-v1-0-2"},"v1.0.1")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.0.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/harvester-docs/zh/v1.1/upgrade/previous-releases/v1-0-0-to-v1-0-1"},"v1.0.0")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.0.1")))),(0,n.kt)("h2",{id:"\u5f00\u59cb\u5347\u7ea7"},"\u5f00\u59cb\u5347\u7ea7"),(0,n.kt)("p",null,"\u6211\u4eec\u4ecd\u5728\u52aa\u529b\u5b9e\u73b0\u96f6\u505c\u673a\u5347\u7ea7\u3002\u8bf7\u5728\u5347\u7ea7 Harvester \u96c6\u7fa4\u4e4b\u524d\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u5347\u7ea7 Harvester \u96c6\u7fa4\u4e4b\u524d\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8981\u4ece v1.0.3 \u5347\u7ea7\u5230 v1.1.0/v1.1.1\uff0c\u8bf7\u5148\u5173\u95ed\u6240\u6709\u865a\u62df\u673a\uff08Harvester GUI > Virtual Machines > \u9009\u62e9\u865a\u62df\u673a > Actions > Stop\uff09\u3002\u67e5\u770b",(0,n.kt)("a",{parentName:"li",href:"/harvester-docs/zh/v1.1/upgrade/v1-0-3-to-v1-1-1#%E9%80%9A%E7%94%A8%E4%BF%A1%E6%81%AF"},"\u94fe\u63a5"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\uff0c\u5907\u4efd\u865a\u62df\u673a\u3002"))),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u5347\u7ea7\u671f\u95f4\u64cd\u4f5c\u96c6\u7fa4\uff0c\u4f8b\u5982\uff0c\u521b\u5efa\u65b0\u7684\u865a\u62df\u673a\u3001\u4e0a\u4f20\u65b0\u7684\u955c\u50cf\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u4f60\u7684\u786c\u4ef6\u7b26\u5408",(0,n.kt)("strong",{parentName:"li"},"\u9996\u9009"),(0,n.kt)("a",{parentName:"li",href:"/harvester-docs/zh/v1.1/install/requirements#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82"},"\u786c\u4ef6\u8981\u6c42"),"\u3002\u8fd9\u662f\u56e0\u4e3a\u5347\u7ea7\u4f1a\u6d88\u8017\u4e2d\u95f4\u8d44\u6e90\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6bcf\u4e2a\u8282\u70b9\u81f3\u5c11\u6709 25 GB \u7684\u53ef\u7528\u7a7a\u95f4 (",(0,n.kt)("inlineCode",{parentName:"li"},"df -h /usr/local/"),")\u3002"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u786e\u4fdd\u6240\u6709\u8282\u70b9\u7684\u65f6\u95f4\u540c\u6b65\u3002\u5efa\u8bae\u4f7f\u7528 NTP \u670d\u52a1\u5668\u6765\u540c\u6b65\u65f6\u95f4\u3002\u5982\u679c\u4f60\u5728\u5b89\u88c5\u671f\u95f4\u6ca1\u6709\u914d\u7f6e NTP \u670d\u52a1\u5668\uff0c\u4f60\u53ef\u4ee5",(0,n.kt)("strong",{parentName:"p"},"\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a"),"\u624b\u52a8\u6dfb\u52a0\u4e00\u4e2a NTP \u670d\u52a1\u5668\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo -i\n\n# \u6dfb\u52a0\u65f6\u95f4\u670d\u52a1\u5668\n$ vim /etc/systemd/timesyncd.conf\n[ntp]\nNTP=0.pool.ntp.org\n\n# \u542f\u7528\u5e76\u542f\u52a8 systemd-timesyncd\n$ timedatectl set-ntp true\n\n# \u68c0\u67e5\u72b6\u6001\n$ sudo timedatectl status\n"))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230 PCI \u7f51\u6865\u7684 NIC \u53ef\u80fd\u4f1a\u5728\u5347\u7ea7\u540e\u91cd\u547d\u540d\u3002\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/nic-naming-scheme"},"\u77e5\u8bc6\u5e93"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8bf7\u52a1\u5fc5\u5148\u9605\u8bfb\u672c\u6587\u6863\u9876\u90e8\u7684\u8b66\u544a\u5185\u5bb9\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Harvester \u4f1a\u5b9a\u671f\u68c0\u67e5\u662f\u5426\u6709\u65b0\u7684\u53ef\u5347\u7ea7\u7248\u672c\u3002\u5982\u679c\u6709\u65b0\u7248\u672c\uff0c\u4eea\u8868\u677f\u9875\u9762\u4e0a\u4f1a\u663e\u793a\u5347\u7ea7\u6309\u94ae\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u96c6\u7fa4\u5904\u4e8e\u79bb\u7ebf\u73af\u5883\u4e2d\uff0c\u8bf7\u5148\u53c2\u9605",(0,n.kt)("a",{parentName:"li",href:"#%E5%87%86%E5%A4%87%E7%A6%BB%E7%BA%BF%E5%8D%87%E7%BA%A7"},"\u51c6\u5907\u79bb\u7ebf\u5347\u7ea7"),"\u3002\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u8be5\u90e8\u5206\u4e2d\u7684\u65b9\u6cd5\u52a0\u901f ISO \u4e0b\u8f7d\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5bfc\u822a\u5230 Harvester GUI\uff0c\u7136\u540e\u5355\u51fb\u4eea\u8868\u677f\u9875\u9762\u4e0a\u7684\u5347\u7ea7\u6309\u94ae\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:a(56955).Z,width:"1910",height:"812"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u5347\u7ea7\u7684\u7248\u672c\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:a(71052).Z,width:"1030",height:"598"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb\u9876\u90e8\u7684\u5706\u5708\u4ee5\u663e\u793a\u5347\u7ea7\u8fdb\u5ea6\uff1a\n",(0,n.kt)("img",{src:a(11105).Z,width:"1910",height:"1124"})))),(0,n.kt)("h2",{id:"\u51c6\u5907\u79bb\u7ebf\u5347\u7ea7"},"\u51c6\u5907\u79bb\u7ebf\u5347\u7ea7"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u8bf7\u52a1\u5fc5\u5148\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"#%E5%8D%87%E7%BA%A7%E6%94%AF%E6%8C%81%E7%9F%A9%E9%98%B5"},"\u5347\u7ea7\u652f\u6301\u77e9\u9635"),"\u4e86\u89e3\u53ef\u5347\u7ea7\u7684\u7248\u672c\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ece ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Releases \u9875\u9762"),"\u4e0b\u8f7d Harvester ISO \u6587\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06 ISO \u4fdd\u5b58\u5230\u672c\u5730 HTTP \u670d\u52a1\u5668\u3002\u5047\u8bbe\u6587\u4ef6\u6258\u7ba1\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"http://10.10.0.1/harvester.iso")," \u4e2d\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ece Releases \u9875\u9762\u4e0b\u8f7d\u7248\u672c\u6587\u4ef6\uff0c\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester/{version}/version.yaml"),"\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u66ff\u6362 ",(0,n.kt)("inlineCode",{parentName:"p"},"version.yaml")," \u6587\u4ef6\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"isoURL")," \u503c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"apiVersion: harvesterhci.io/v1beta1\nkind: Version\nmetadata:\n  name: v1.0.2\n  namespace: harvester-system\nspec:\n  isoChecksum: <SHA-512 checksum of the ISO>\n  isoURL: http://10.10.0.1/harvester.iso  # change to local ISO URL\n  releaseDate: '20220512'\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5047\u8bbe\u6587\u4ef6\u6258\u7ba1\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"http://10.10.0.1/version.yaml")," \u4e2d\u3002")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u767b\u5f55\u5230\u5176\u4e2d\u4e00\u4e2a control plane \u8282\u70b9\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6210\u4e3a root \u5e76\u521b\u5efa\u4e00\u4e2a\u7248\u672c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"rancher@node1:~> sudo -i\nrancher@node1:~> kubectl create -f http://10.10.0.1/version.yaml\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Harvester GUI Dashboard \u9875\u9762\u4e0a\u5e94\u663e\u793a\u5347\u7ea7\u6309\u94ae\u3002"))))}u.isMDXComponent=!0},56955:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_button-cba6e7e3b12154a0c675fe149c719d4c.png"},11105:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_progress-9f571e740ff5c16d9fc0fc6518ee7b73.png"},71052:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_select_version-cee0dbf88994b0b636f3df5ed2e47ae4.png"}}]);