"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,sidebar_label:"\u5b89\u88c5",title:"\u5b89\u88c5"},l=void 0,i={unversionedId:"troubleshooting/installation",id:"version-v1.1/troubleshooting/installation",title:"\u5b89\u88c5",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u5b89\u88c5\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u6545\u969c\u6392\u9664\u6216\u83b7\u53d6\u5e2e\u52a9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/troubleshooting/installation.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/installation",permalink:"/zh/v1.1/troubleshooting/installation",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/troubleshooting/installation.md",tags:[],version:"v1.1",lastUpdatedAt:1688120255,formattedLastUpdatedAt:"2023\u5e746\u670830\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u5b89\u88c5",title:"\u5b89\u88c5"},sidebar:"tutorialSidebar",previous:{title:"Harvester Terraform Provider",permalink:"/zh/v1.1/terraform/"},next:{title:"Harvester",permalink:"/zh/v1.1/troubleshooting/harvester"}},p={},s=[{value:"\u767b\u5f55\u5230 Harvester \u5b89\u88c5\u7a0b\u5e8f\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09",id:"\u767b\u5f55\u5230-harvester-\u5b89\u88c5\u7a0b\u5e8f\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf",level:2},{value:"\u6ee1\u8db3\u786c\u4ef6\u8981\u6c42",id:"\u6ee1\u8db3\u786c\u4ef6\u8981\u6c42",level:2},{value:"\u6536\u5230\u63d0\u793a\u4fe1\u606f\uff1a<code>&quot;Loading images. This may take a few minutes...&quot;</code>",id:"\u6536\u5230\u63d0\u793a\u4fe1\u606floading-images-this-may-take-a-few-minutes",level:2},{value:"\u4fee\u6539 Agent \u8282\u70b9\u7684\u96c6\u7fa4 Token",id:"\u4fee\u6539-agent-\u8282\u70b9\u7684\u96c6\u7fa4-token",level:2},{value:"\u6536\u96c6\u6545\u969c\u6392\u9664\u4fe1\u606f",id:"\u6536\u96c6\u6545\u969c\u6392\u9664\u4fe1\u606f",level:2}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u5b89\u88c5\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u6545\u969c\u6392\u9664\u6216\u83b7\u53d6\u5e2e\u52a9\u3002"),(0,a.kt)("h2",{id:"\u767b\u5f55\u5230-harvester-\u5b89\u88c5\u7a0b\u5e8f\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf"},"\u767b\u5f55\u5230 Harvester \u5b89\u88c5\u7a0b\u5e8f\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u6309\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL + ALT + F2")," \u7ec4\u5408\u952e\u6765\u5207\u6362\u5230\u53e6\u4e00\u4e2a TTY\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u51ed\u8bc1\u8fdb\u884c\u767b\u5f55\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"rancher")),(0,a.kt)("li",{parentName:"ul"},"\u5bc6\u7801\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"rancher"))),(0,a.kt)("h2",{id:"\u6ee1\u8db3\u786c\u4ef6\u8981\u6c42"},"\u6ee1\u8db3\u786c\u4ef6\u8981\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u4f60\u7684\u786c\u4ef6\u662f\u5426\u6ee1\u8db3\u5b8c\u6210\u5b89\u88c5\u7684",(0,a.kt)("a",{parentName:"li",href:"/zh/v1.1/install/requirements#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82"},"\u6700\u4f4e\u8981\u6c42"),"\u3002")),(0,a.kt)("h2",{id:"\u6536\u5230\u63d0\u793a\u4fe1\u606floading-images-this-may-take-a-few-minutes"},"\u6536\u5230\u63d0\u793a\u4fe1\u606f\uff1a",(0,a.kt)("inlineCode",{parentName:"h2"},'"Loading images. This may take a few minutes..."')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u662f\u56e0\u4e3a\u7cfb\u7edf\u6ca1\u6709\u9ed8\u8ba4\u8def\u7531\uff0c\u5bfc\u81f4\u5b89\u88c5\u7a0b\u5e8f\u5361\u5728\u5f53\u524d\u72b6\u6001\u3002\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5\u8def\u7531\u72b6\u6001\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ip route\ndefault via 10.10.0.10 dev mgmt-br proto dhcp        <-- Does a default route exist?\n10.10.0.0/24 dev mgmt-br proto kernel scope link src 10.10.0.15\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u68c0\u67e5 DHCP \u670d\u52a1\u5668\u662f\u5426\u63d0\u4f9b\u9ed8\u8ba4\u8def\u7531\u9009\u9879\u3002\u4f60\u4e5f\u53ef\u4ee5\u9644\u4e0a\u4ece ",(0,a.kt)("inlineCode",{parentName:"li"},"/run/cos/target/rke2.log")," \u83b7\u53d6\u7684\u4fe1\u606f\u3002")),(0,a.kt)("h2",{id:"\u4fee\u6539-agent-\u8282\u70b9\u7684\u96c6\u7fa4-token"},"\u4fee\u6539 Agent \u8282\u70b9\u7684\u96c6\u7fa4 Token"),(0,a.kt)("p",null,"\u5982\u679c Agent \u65e0\u6cd5\u52a0\u5165\u96c6\u7fa4\uff0c\u53ef\u80fd\u4e0e\u96c6\u7fa4 Token \u4e0e\u670d\u52a1\u5668\u8282\u70b9 Token \u4e0d\u4e00\u81f4\u6709\u5173\u3002\n\u4e3a\u4e86\u786e\u8ba4\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u8fde\u63a5\u5230\u4f60\u7684 Agent \u8282\u70b9\uff08\u4f8b\u5982\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.1/troubleshooting/os#%E5%A6%82%E4%BD%95%E7%99%BB%E5%BD%95%E5%88%B0-harvester-%E8%8A%82%E7%82%B9"},"SSH"),"\uff09\uff0c\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancherd")," \u7684\u670d\u52a1\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo journalctl -b -u rancherd\n")),(0,a.kt)("p",null,"\u5982\u679c Agent \u8282\u70b9\u4e2d\u8bbe\u7f6e\u7684\u96c6\u7fa4 Token \u4e0e\u670d\u52a1\u5668\u8282\u70b9 Token \u4e0d\u5339\u914d\uff0c\u4f60\u4f1a\u53d1\u73b0\u4ee5\u4e0b\u4fe1\u606f\u4e2d\u7684\u51e0\u4e2a\u6761\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'msg="Bootstrapping Rancher (master-head/v1.21.5+rke2r1)"\nmsg="failed to bootstrap system, will retry: generating plan: insecure cacerts download from https://192.168.122.115:443/cacerts: Get \\"https://192.168.122.115:443/cacerts\\": EOF"\n')),(0,a.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancherd")," \u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rancherd/config.yaml")," \u4e2d\u66f4\u65b0 Token \u7684\u503c\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u670d\u52a1\u5668\u8282\u70b9\u4e2d\u8bbe\u7f6e\u7684\u96c6\u7fa4 Token \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ThisIsTheCorrectOne"),"\uff0c\u4f60\u9700\u8981\u66f4\u65b0 Token \u7684\u503c\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"token: 'ThisIsTheCorrectOne'\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u5728\u91cd\u542f\u540e\u4ecd\u80fd\u7ef4\u6301\u66f4\u6539\uff0c\u66f4\u65b0\u64cd\u4f5c\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," \u7684\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Harvester Configuration\nstages:\n  ...\n  initramfs:\n  - commands:\n    - rm -f /etc/sysconfig/network/ifroute-mgmt-br\n    files:\n    - path: /etc/rancher/rancherd/config.yaml\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |\n        role: cluster-init\n        token: \'ThisIsTheCorrectOne\' # <- Update this value\n        kubernetesVersion: v1.21.5+rke2r1\n        labels:\n         - harvesterhci.io/managed=true\n      encoding: ""\n      ownerstring: ""\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8981\u67e5\u770b\u5f53\u524d\u96c6\u7fa4 Token \u7684\u503c\uff0c\u8bf7\u767b\u5f55\u5230\u4f60\u7684\u670d\u52a1\u5668\u8282\u70b9\uff08\u4f8b\u5982\u7528 SSH\uff09\u5e76\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rancherd/config.yaml")," \u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u4ec5\u663e\u793a Token \u7684\u503c\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo yq eval .token /etc/rancher/rancherd/config.yaml\n"))),(0,a.kt)("h2",{id:"\u6536\u96c6\u6545\u969c\u6392\u9664\u4fe1\u606f"},"\u6536\u96c6\u6545\u969c\u6392\u9664\u4fe1\u606f"),(0,a.kt)("p",null,"\u5728\u62a5\u544a\u5b89\u88c5\u5931\u8d25\u95ee\u9898\u65f6\uff0c\u8bf7\u5305\u62ec\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u88c5\u5931\u8d25\u7684\u622a\u56fe\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u4fe1\u606f\u548c\u65e5\u5fd7\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4ece v1.0.2 \u5f00\u59cb\u53ef\u7528"),(0,a.kt)("p",{parentName:"li"},"\u8bf7\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"#%E7%99%BB%E5%BD%95%E5%88%B0-harvester-%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F%E5%AE%9E%E6%97%B6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F"},"\u767b\u5f55 Harvester \u5b89\u88c5\u7a0b\u5e8f\uff08\u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\uff09"),"\u4e2d\u7684\u8bf4\u660e\u8fdb\u884c\u767b\u5f55\u3002\u7136\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210\u5305\u542b\u6545\u969c\u6392\u9664\u4fe1\u606f\u7684 tarball\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"supportconfig -k -c\n")),(0,a.kt)("p",{parentName:"li"},"\u547d\u4ee4\u8f93\u51fa\u7684\u6d88\u606f\u4f1a\u5305\u542b\u751f\u6210\u7684 tarball \u8def\u5f84\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u793a\u4f8b\u4e2d\u7684\u8def\u5f84\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/loq/scc_aaa_220520_1021 804d65d-c9ba-4c54-b12d-859631f892c5.txz"),"\uff1a"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(24788).Z,width:"1484",height:"754"})),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728 Harvester \u914d\u7f6e\u6587\u4ef6\u4e2d\u5c06 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.1/install/harvester-configuration#installdebug"},(0,a.kt)("inlineCode",{parentName:"a"},"install.debug"))," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219 PXE \u5f15\u5bfc\u5b89\u88c5\u5931\u8d25\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a tarball\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"v1.0.2 \u4e4b\u524d\u7684\u7248\u672c"),(0,a.kt)("p",{parentName:"li"},"\u8bf7\u83b7\u53d6\u4ee5\u4e0b\u6587\u4ef6\u7684\u5185\u5bb9\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"/var/log/console.log\n/run/cos/target/rke2.log\n/tmp/harvester.*\n/tmp/cos.*\n")),(0,a.kt)("p",{parentName:"li"},"\u4ee5\u53ca\u4ee5\u4e0b\u547d\u4ee4\u7684\u8f93\u51fa\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"blkid\ndmesg\n")))))))}m.isMDXComponent=!0},24788:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/installation-support-config-example-668f76f104e59f6ff74d2ae6dacf268b.png"}}]);