"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4708],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(a),k=n,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||l;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5399:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:2,sidebar_label:"\u4ece v1.0.0 \u5347\u7ea7\u5230 v1.0.1",title:""},i="\u4ece v1.0.0 \u5347\u7ea7\u5230 v1.0.1",p={unversionedId:"upgrade/previous-releases/v1-0-0-to-v1-0-1",id:"upgrade/previous-releases/v1-0-0-to-v1-0-1",title:"",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 Harvester v1.0.0 \u5347\u7ea7\u5230 v1.0.1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrade/previous-releases/v1-0-0-to-v1-0-1.md",sourceDirName:"upgrade/previous-releases",slug:"/upgrade/previous-releases/v1-0-0-to-v1-0-1",permalink:"/zh/upgrade/previous-releases/v1-0-0-to-v1-0-1",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/previous-releases/v1-0-0-to-v1-0-1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u4ece v1.0.0 \u5347\u7ea7\u5230 v1.0.1",title:""},sidebar:"tutorialSidebar",previous:{title:"\u4ece v1.0.1 \u5347\u7ea7\u5230 v1.0.2",permalink:"/zh/upgrade/previous-releases/v1-0-1-to-v1-0-2"},next:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/upgrade/troubleshooting"}},s={},o=[{value:"\u521b\u5efa\u7248\u672c",id:"\u521b\u5efa\u7248\u672c",level:2},{value:"\u5f00\u59cb\u5347\u7ea7",id:"\u5f00\u59cb\u5347\u7ea7",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2},{value:"\u4e0b\u8f7d\u5347\u7ea7\u955c\u50cf\u5931\u8d25",id:"\u4e0b\u8f7d\u5347\u7ea7\u955c\u50cf\u5931\u8d25",level:3},{value:"\u5361\u5728<strong>\u5347\u7ea7\u7cfb\u7edf\u670d\u52a1</strong>",id:"\u5361\u5728\u5347\u7ea7\u7cfb\u7edf\u670d\u52a1",level:3},{value:"\u865a\u62df\u673a\u8fc1\u79fb\u5931\u8d25",id:"\u865a\u62df\u673a\u8fc1\u79fb\u5931\u8d25",level:3},{value:"fleet-local/local: another operation (install/upgrade/rollback) is in progress",id:"fleet-locallocal-another-operation-installupgraderollback-is-in-progress",level:3},{value:"\u8282\u70b9\u540d\u79f0\u592a\u957f\uff08\u8d85\u8fc7 24 \u4e2a\u5b57\u7b26\uff09\uff0c\u5355\u8282\u70b9\u5347\u7ea7\u53ef\u80fd\u4f1a\u5931\u8d25",id:"\u8282\u70b9\u540d\u79f0\u592a\u957f\u8d85\u8fc7-24-\u4e2a\u5b57\u7b26\u5355\u8282\u70b9\u5347\u7ea7\u53ef\u80fd\u4f1a\u5931\u8d25",level:3}],m={toc:o};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4ece-v100-\u5347\u7ea7\u5230-v101"},"\u4ece v1.0.0 \u5347\u7ea7\u5230 v1.0.1"),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5c06 Harvester ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.0.0")," \u5347\u7ea7\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.0.1"),"\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u4ecd\u5728\u52aa\u529b\u5b9e\u73b0\u96f6\u505c\u673a\u5347\u7ea7\u3002\u8bf7\u5728\u5347\u7ea7 Harvester \u96c6\u7fa4\u4e4b\u524d\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u5347\u7ea7 Harvester \u96c6\u7fa4\u4e4b\u524d\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5173\u95ed\u6240\u6709\u865a\u62df\u673a\uff08Harvester GUI -> Virtual Machines -> \u9009\u62e9\u865a\u62df\u673a -> Actions -> Stop\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5907\u4efd\u865a\u62df\u673a\u3002"))),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u5347\u7ea7\u671f\u95f4\u64cd\u4f5c\u96c6\u7fa4\uff0c\u4f8b\u5982\uff0c\u521b\u5efa\u65b0\u7684\u865a\u62df\u673a\u3001\u4e0a\u4f20\u65b0\u7684\u955c\u50cf\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u4f60\u7684\u786c\u4ef6\u7b26\u5408",(0,n.kt)("strong",{parentName:"li"},"\u9996\u9009"),(0,n.kt)("a",{parentName:"li",href:"/zh/#%E7%A1%AC%E4%BB%B6%E8%A6%81%E6%B1%82"},"\u786c\u4ef6\u8981\u6c42"),"\u3002\u8fd9\u662f\u56e0\u4e3a\u5347\u7ea7\u4f1a\u6d88\u8017\u4e2d\u95f4\u8d44\u6e90\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6bcf\u4e2a\u8282\u70b9\u81f3\u5c11\u6709 25 GB \u7684\u53ef\u7528\u7a7a\u95f4 (",(0,n.kt)("inlineCode",{parentName:"li"},"df -h /usr/local/"),")\u3002"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u786e\u4fdd\u6240\u6709\u8282\u70b9\u7684\u65f6\u95f4\u540c\u6b65\u3002\u5efa\u8bae\u4f7f\u7528 NTP \u670d\u52a1\u5668\u6765\u540c\u6b65\u65f6\u95f4\u3002\u5982\u679c\u4f60\u5728\u5b89\u88c5\u671f\u95f4\u6ca1\u6709\u914d\u7f6e NTP \u670d\u52a1\u5668\uff0c\u4f60\u53ef\u4ee5",(0,n.kt)("strong",{parentName:"p"},"\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a"),"\u624b\u52a8\u6dfb\u52a0\u4e00\u4e2a NTP \u670d\u52a1\u5668\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo -i\n\n# \u6dfb\u52a0\u65f6\u95f4\u670d\u52a1\u5668\n$ vim /etc/systemd/timesyncd.conf\n[ntp]\nNTP=0.pool.ntp.org\n\n# \u542f\u7528\u5e76\u542f\u52a8 systemd-timesyncd\n$ timedatectl set-ntp true\n\n# \u68c0\u67e5\u72b6\u6001\n$ timedatectl status\n"))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u5230 PCI \u7f51\u6865\u7684 NIC \u53ef\u80fd\u4f1a\u5728\u5347\u7ea7\u540e\u91cd\u547d\u540d\u3002\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/nic-naming-scheme"},"\u77e5\u8bc6\u5e93"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"))),(0,n.kt)("h2",{id:"\u521b\u5efa\u7248\u672c"},"\u521b\u5efa\u7248\u672c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u767b\u5f55\u5230\u4f60\u7684\u5176\u4e2d\u4e00\u4e2a\u670d\u52a1\u5668\u8282\u70b9\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6210\u4e3a root \u5e76\u521b\u5efa\u4e00\u4e2a\u7248\u672c\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"rancher@node1:~> sudo -i\n\nnode1:~ # kubectl create -f https://releases.rancher.com/harvester/v1.0.1/version.yaml\nversion.harvesterhci.io/1.0.1 created\n")),(0,n.kt)("p",{parentName:"li"}," :::note"),(0,n.kt)("p",{parentName:"li"}," \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cISO \u955c\u50cf\u662f\u4ece Harvester release \u670d\u52a1\u5668\u4e0b\u8f7d\u7684\u3002\u4e3a\u4e86\u8ba9\u5347\u7ea7\u66f4\u5feb\u66f4\u987a\u7545\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5148\u5c06 ISO \u6587\u4ef6\u4e0b\u8f7d\u5230\u672c\u5730 HTTP \u670d\u52a1\u5668\uff0c\u7136\u540e\u66ff\u6362 ",(0,n.kt)("inlineCode",{parentName:"p"},"version.yaml")," manifest \u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"isoURL")," \u503c\u3002"),(0,n.kt)("p",{parentName:"li"}," \u4f8b\u5982\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# \u5148\u4ece release server \u4e0b\u8f7d ISO\uff0c\u5047\u8bbe\u5b83\u5b58\u50a8\u5728 http://10.10.0.1/harvester.iso\n$ sudo -i\n$ curl -fL https://releases.rancher.com/harvester/v1.0.1/version.yaml -o version.yaml\n$ vim version.yaml\napiVersion: harvesterhci.io/v1beta1\nkind: Version\nmetadata:\n    name: v1.0.1\n    namespace: harvester-system\nspec:\n    isoChecksum: <SHA-512 checksum of the ISO>\n    isoURL: http://10.10.0.1/harvester.iso\n    releaseDate: '20220408'\n")),(0,n.kt)("p",{parentName:"li"}," :::"))),(0,n.kt)("h2",{id:"\u5f00\u59cb\u5347\u7ea7"},"\u5f00\u59cb\u5347\u7ea7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8bf7\u52a1\u5fc5\u5148\u9605\u8bfb\u672c\u6587\u6863\u9876\u90e8\u7684\u8b66\u544a\u5185\u5bb9\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5bfc\u822a\u5230 Harvester GUI\uff0c\u7136\u540e\u5355\u51fb\u4eea\u8868\u677f\u9875\u9762\u4e0a\u7684\u5347\u7ea7\u6309\u94ae\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:a(3069).Z,width:"1910",height:"812"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u5347\u7ea7\u7684\u7248\u672c\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:a(7828).Z,width:"1030",height:"598"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5355\u51fb\u9876\u90e8\u7684\u5706\u5708\u4ee5\u663e\u793a\u5347\u7ea7\u8fdb\u5ea6\uff1a\n",(0,n.kt)("img",{src:a(9341).Z,width:"1910",height:"1124"})))),(0,n.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,n.kt)("h3",{id:"\u4e0b\u8f7d\u5347\u7ea7\u955c\u50cf\u5931\u8d25"},"\u4e0b\u8f7d\u5347\u7ea7\u955c\u50cf\u5931\u8d25"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8bf4\u660e")),(0,n.kt)("p",{parentName:"li"}," \u65e0\u6cd5\u5b8c\u6210\u5347\u7ea7\u955c\u50cf\u7684\u4e0b\u8f7d\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("img",{src:a(4682).Z,width:"372",height:"468"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5")),(0,n.kt)("p",{parentName:"li"}," \u5220\u9664\u5f53\u524d\u7684\u5347\u7ea7\u5e76\u91cd\u65b0\u5f00\u59cb\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# \u767b\u5f55\u5230\u5176\u4e2d\u4e00\u4e2a server \u8282\u70b9\n$ sudo -i\n\n# \u5217\u51fa\u5f53\u524d\u7684\u5347\u7ea7\uff0c\u4e0d\u540c deployment \u7684\u540d\u79f0\u4f1a\u4e0d\u540c\n$ kubectl get upgrades.harvesterhci.io -n harvester-system\nNAMESPACE          NAME                 AGE\nharvester-system   hvst-upgrade-77cks   119m\n\n$ kubectl delete upgrades.harvesterhci.io hvst-upgrade-77cks -n harvester-system\n")),(0,n.kt)("p",{parentName:"li"}," \u6211\u4eec\u5efa\u8bae\u5c06 ISO \u6587\u4ef6\u955c\u50cf\u5230\u672c\u5730 webserver\uff0c\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"#create-a-version"},"\u4e0a\u4e00\u8282"),"\u4e2d\u7684\u8bf4\u660e\u3002"))),(0,n.kt)("h3",{id:"\u5361\u5728\u5347\u7ea7\u7cfb\u7edf\u670d\u52a1"},"\u5361\u5728",(0,n.kt)("strong",{parentName:"h3"},"\u5347\u7ea7\u7cfb\u7edf\u670d\u52a1")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8bf4\u660e")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5347\u7ea7\u5361\u5728",(0,n.kt)("strong",{parentName:"p"},"\u5347\u7ea7\u7cfb\u7edf\u670d\u52a1"),"\u4e2d\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728 Rancher pod \u4e2d\u53ef\u4ee5\u627e\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u65e5\u5fd7\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"[ERROR] available chart version (100.0.2+up0.3.8) for fleet is less than the min version (100.0.3+up0.3.9-rc1)\n[ERROR] Failed to find system chart fleet will try again in 5 seconds: no chart name found\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5")),(0,n.kt)("p",{parentName:"li"}," \u5220\u9664 Rancher \u96c6\u7fa4\u4ed3\u5e93\u5e76\u91cd\u65b0\u542f\u52a8 Rancher Pod\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"}," ```\n # \u767b\u5f55\u5230\u4e00\u4e2a server \u8282\u70b9\uff0c\u5e76\u5148\u6210\u4e3a root\n kubectl delete clusterrepos.catalog.cattle.io rancher-charts\n kubectl delete clusterrepos.catalog.cattle.io rancher-rke2-charts\n kubectl delete clusterrepos.catalog.cattle.io rancher-partner-charts\n kubectl delete settings.management.cattle.io chart-default-branch\n kubectl rollout restart deployment rancher -n cattle-system\n ```\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u76f8\u5173\u95ee\u9898")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2011"},'[BUG] Rancher upgrade fail: Failed to find system chart "fleet"'))))),(0,n.kt)("h3",{id:"\u865a\u62df\u673a\u8fc1\u79fb\u5931\u8d25"},"\u865a\u62df\u673a\u8fc1\u79fb\u5931\u8d25"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8bf4\u660e")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8282\u70b9\u4e00\u76f4\u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"Pre-draining")," \u72b6\u6001\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8be5\u8282\u70b9\u4e0a\u6709\u865a\u62df\u673a\uff08\u68c0\u67e5 ",(0,n.kt)("inlineCode",{parentName:"li"},"virt-launcher-xxx")," pod\uff09\uff0c\u8fd9\u4e9b\u865a\u62df\u673a\u65e0\u6cd5\u70ed\u8fc1\u79fb\u51fa\u8282\u70b9\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6cd5")),(0,n.kt)("p",{parentName:"li"}," \u5173\u95ed\u865a\u62df\u673a\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6267\u884c\u6b64\u64cd\u4f5c\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 GUI\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"virtctl")," \u547d\u4ee4\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u76f8\u5173\u95ee\u9898")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2029"},"[BUG] Upgrade: VMs fail to live-migrate to other hosts in some cases"))))),(0,n.kt)("h3",{id:"fleet-locallocal-another-operation-installupgraderollback-is-in-progress"},"fleet-local/local: another operation (install/upgrade/rollback) is in progress"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8bf4\u660e")),(0,n.kt)("p",{parentName:"li"}," \u4f60\u5728\u8f93\u51fa\u4e2d\u770b\u5230 bundle \u5177\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"fleet-local/local: another operation (install/upgrade/rollback) is in progress")," \u72b6\u6001\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get bundles -A\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u76f8\u5173\u95ee\u9898")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/1983"},"[BUG] Upgrade: rancher-monitoring charts can't be upgraded"))))),(0,n.kt)("h3",{id:"\u8282\u70b9\u540d\u79f0\u592a\u957f\u8d85\u8fc7-24-\u4e2a\u5b57\u7b26\u5355\u8282\u70b9\u5347\u7ea7\u53ef\u80fd\u4f1a\u5931\u8d25"},"\u8282\u70b9\u540d\u79f0\u592a\u957f\uff08\u8d85\u8fc7 24 \u4e2a\u5b57\u7b26\uff09\uff0c\u5355\u8282\u70b9\u5347\u7ea7\u53ef\u80fd\u4f1a\u5931\u8d25"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u76f8\u5173\u95ee\u9898"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2114"},"https://github.com/harvester/harvester/issues/2114"))))))}u.isMDXComponent=!0},4682:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/known_issue_downloading_image_failure-e5c4ab5abb0ac17b4aaaa166991ad825.png"},3069:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_button-cba6e7e3b12154a0c675fe149c719d4c.png"},9341:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_progress-9f571e740ff5c16d9fc0fc6518ee7b73.png"},7828:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_select_version-cee0dbf88994b0b636f3df5ed2e47ae4.png"}}]);