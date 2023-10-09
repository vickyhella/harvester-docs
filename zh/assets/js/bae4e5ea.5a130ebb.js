"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,m=u["".concat(p,".").concat(c)]||u[c]||k[c]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1,sidebar_label:"\u8bbe\u7f6e",title:"\u8bbe\u7f6e"},i=void 0,o={unversionedId:"advanced/settings",id:"advanced/settings",title:"\u8bbe\u7f6e",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u53ef\u5728 Harvester \u4e2d\u4f7f\u7528\u7684\u9ad8\u7ea7\u914d\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced/settings.md",sourceDirName:"advanced",slug:"/advanced/settings",permalink:"/harvester-docs/zh/v1.2/advanced/settings",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/settings.md",tags:[],version:"current",lastUpdatedAt:1696844458,formattedLastUpdatedAt:"2023\u5e7410\u67089\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u8bbe\u7f6e",title:"\u8bbe\u7f6e"},sidebar:"docs",previous:{title:"\u76d1\u63a7",permalink:"/harvester-docs/zh/v1.2/monitoring/harvester-monitoring"},next:{title:"StorageClass",permalink:"/harvester-docs/zh/v1.2/advanced/storageclass"}},p={},s=[{value:"<code>additional-ca</code>",id:"additional-ca",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"<code>auto-disk-provision-paths</code> \u5b9e\u9a8c\u529f\u80fd",id:"auto-disk-provision-paths-\u5b9e\u9a8c\u529f\u80fd",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"<code>backup-target</code>",id:"backup-target",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"<code>cluster-registration-url</code>",id:"cluster-registration-url",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:4},{value:"<code>containerd-registry</code>",id:"containerd-registry",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:4},{value:"<code>csi-driver-config</code>",id:"csi-driver-config",level:2},{value:"<code>default-vm-termination-grace-period-seconds</code>",id:"default-vm-termination-grace-period-seconds",level:2},{value:"<code>http-proxy</code>",id:"http-proxy",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:4},{value:"<code>log-level</code>",id:"log-level",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-6",level:4},{value:"<code>ntp-servers</code>",id:"ntp-servers",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-7",level:4},{value:"<code>overcommit-config</code>",id:"overcommit-config",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-8",level:4},{value:"<code>release-download-url</code>",id:"release-download-url",level:2},{value:"version.yaml \u793a\u4f8b",id:"versionyaml-\u793a\u4f8b",level:4},{value:"<code>server-version</code>",id:"server-version",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-9",level:4},{value:"<code>ssl-certificates</code>",id:"ssl-certificates",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-10",level:4},{value:"<code>ssl-parameters</code>",id:"ssl-parameters",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-11",level:4},{value:"<code>storage-network</code>",id:"storage-network",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-12",level:4},{value:"<code>support-bundle-image</code>",id:"support-bundle-image",level:2},{value:"<code>support-bundle-namespaces</code>",id:"support-bundle-namespaces",level:2},{value:"<code>support-bundle-timeout</code>",id:"support-bundle-timeout",level:2},{value:"<code>upgrade-checker-enabled</code>",id:"upgrade-checker-enabled",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-13",level:4},{value:"<code>upgrade-checker-url</code>",id:"upgrade-checker-url",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-14",level:4},{value:"<code>vip-pools</code>",id:"vip-pools",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-15",level:4},{value:"<code>vm-force-reset-policy</code>",id:"vm-force-reset-policy",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-16",level:4},{value:"UI \u8bbe\u7f6e",id:"ui-\u8bbe\u7f6e",level:2},{value:"<code>branding</code>",id:"branding",level:3},{value:"<code>ui-index</code>",id:"ui-index",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-17",level:4},{value:"<code>ui-plugin-index</code>",id:"ui-plugin-index",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-18",level:4},{value:"<code>ui-source</code>",id:"ui-source",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-19",level:4}],d={toc:s},u="wrapper";function k(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u53ef\u5728 Harvester \u4e2d\u4f7f\u7528\u7684\u9ad8\u7ea7\u914d\u7f6e\u3002\n\u4f60\u53ef\u4ee5\u4ece\u4eea\u8868\u76d8 UI \u6216\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u547d\u4ee4\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.harvesterhci.io")," \u81ea\u5b9a\u4e49\u8d44\u6e90\u3002"),(0,r.kt)("h2",{id:"additional-ca"},(0,r.kt)("inlineCode",{parentName:"h2"},"additional-ca")),(0,r.kt)("p",null,"\u4e3a Harvester \u914d\u7f6e\u5176\u4ed6\u53d7\u4fe1 CA \u8bc1\u4e66\u6765\u8bbf\u95ee\u5916\u90e8\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1anone"),(0,r.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nSOME-CA-CERTIFICATES\n-----END CERTIFICATE-----\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u6539\u6b64\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5355\u8282\u70b9\u96c6\u7fa4\u4ea7\u751f\u8f83\u77ed\u7684\u505c\u673a\u65f6\u95f4\u3002")),(0,r.kt)("h2",{id:"auto-disk-provision-paths-\u5b9e\u9a8c\u529f\u80fd"},(0,r.kt)("inlineCode",{parentName:"h2"},"auto-disk-provision-paths")," ","[\u5b9e\u9a8c\u529f\u80fd]"),(0,r.kt)("p",null,"\u6b64\u8bbe\u7f6e\u5141\u8bb8 Harvester \u81ea\u52a8\u6dfb\u52a0\u7b26\u5408\u7ed9\u5b9a glob \u6a21\u5f0f\u7684\u78c1\u76d8\u4f5c\u4e3a\u865a\u62df\u673a\u5b58\u50a8\u3002\n\u4f60\u53ef\u4ee5\u4f7f\u7528\u9017\u53f7\u5206\u9694\u6765\u63d0\u4f9b\u591a\u4e2a\u6a21\u5f0f\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u8bbe\u7f6e\u4ec5\u80fd\u6dfb\u52a0\u6302\u8f7d\u5230\u7cfb\u7edf\u7684\u683c\u5f0f\u5316\u78c1\u76d8\u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6b64\u8bbe\u7f6e\u5e94\u7528\u4e8e\u96c6\u7fa4\u4e2d\u7684",(0,r.kt)("strong",{parentName:"li"},"\u6bcf\u4e2a\u8282\u70b9"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u8bbe\u5907\u4e2d\u7684\u6240\u6709\u6570\u636e",(0,r.kt)("strong",{parentName:"li"},"\u90fd\u4f1a\u88ab\u9500\u6bc1"),"\u3002\u8bf7\u8c28\u614e\u4f7f\u7528\u3002"))),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1anone"),(0,r.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u6dfb\u52a0\u7b26\u5408 glob \u6a21\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sd*")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/hd*")," \u7684\u78c1\u76d8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/dev/sd*,/dev/hd*\n")),(0,r.kt)("h2",{id:"backup-target"},(0,r.kt)("inlineCode",{parentName:"h2"},"backup-target")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u5907\u4efd\u76ee\u6807\u6765\u5b58\u50a8\u865a\u62df\u673a\u5907\u4efd\u3002\u652f\u6301 NFS \u548c S3\u3002\n\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.2.2/snapshots-and-backups/backup-and-restore/set-backup-target/#set-up-aws-s3-backupstore"},"Longhorn \u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1anone"),(0,r.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "s3",\n  "endpoint": "https://s3.endpoint.svc",\n  "accessKeyId": "test-access-key-id",\n  "secretAccessKey": "test-access-key",\n  "bucketName": "test-bup",\n  "bucketRegion": "us\u2011east\u20112",\n  "cert": "",\n  "virtualHostedStyle": false\n}\n')),(0,r.kt)("h2",{id:"cluster-registration-url"},(0,r.kt)("inlineCode",{parentName:"h2"},"cluster-registration-url")),(0,r.kt)("p",null,"\u5c06 Harvester \u96c6\u7fa4\u5bfc\u5165 Rancher \u4ee5\u8fdb\u884c\u591a\u96c6\u7fa4\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1anone"),(0,r.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://172.16.0.1/v3/import/w6tp7dgwjj549l88pr7xmxb4x6m54v5kcplvhbp9vv2wzqrrjhrc7c_c-m-zxbbbck9.yaml\n")),(0,r.kt)("h2",{id:"containerd-registry"},(0,r.kt)("inlineCode",{parentName:"h2"},"containerd-registry")),(0,r.kt)("p",null,"\u6b64\u8bbe\u7f6e\u5141\u8bb8\u4f60\u4e3a Harvester \u96c6\u7fa4\u914d\u7f6e\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002\u4f60\u9700\u8981\u5728\u6bcf\u4e2a\u8282\u70b9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/registries.yaml")," \u4e2d\u8bbe\u7f6e\u53c2\u6570\u7684\u503c\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/containerd_registry_configuration"},"RKE2 - Containerd \u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4e3a\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8bbe\u7f6e\u4e86\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u7cfb\u7edf\u4f1a\u5148\u5c06\u5176\u4fdd\u5b58\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"registries.yaml")," \u4e2d\uff0c\u7136\u540e\u518d\u81ea\u52a8\u5220\u9664\u5b83\u4eec\u4ee5\u4fdd\u62a4\u51ed\u8bc1\u3002")),(0,r.kt)("h4",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"containerd-registry",src:n(16030).Z,width:"1397",height:"803"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Mirrors": {\n    "docker.io": {\n      "Endpoints": ["https://myregistry.local:5000"],\n      "Rewrites": null\n    }\n  },\n  "Configs": {\n    "myregistry.local:5000": {\n      "Auth": {\n        "Username": "testuser",\n        "Password": "testpassword"\n      },\n      "TLS": {\n        "InsecureSkipVerify": false\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"csi-driver-config"},(0,r.kt)("inlineCode",{parentName:"h2"},"csi-driver-config")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.2.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728 Harvester \u96c6\u7fa4\u4e2d\u5b89\u88c5\u4e86\u7b2c\u4e09\u65b9 CSI Driver\uff0c\u5728\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"Backup & Snapshot")," \u76f8\u5173\u529f\u80fd\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u901a\u8fc7\u6b64\u53c2\u6570\u8fdb\u884c\u4e00\u4e9b\u5fc5\u8981\u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "driver.longhorn.io": {\n    "volumeSnapshotClassName": "longhorn-snapshot",\n    "backupVolumeSnapshotClassName": "longhorn"\n  }\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e3a\u65b0\u6dfb\u52a0\u7684 CSI Driver \u6dfb\u52a0\u914d\u7f6e\u7a0b\u5e8f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e ",(0,r.kt)("strong",{parentName:"li"},"Volume Snapshot Class Name"),"\uff0c\u6307\u7528\u4e8e\u521b\u5efa\u5377\u5feb\u7167\u6216\u865a\u62df\u673a\u5feb\u7167\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"VolumeSnapshotClass")," \u7684\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e ",(0,r.kt)("strong",{parentName:"li"},"Backup Volume Snapshot Class Name"),"\uff0c\u6307\u7528\u4e8e\u521b\u5efa\u865a\u62df\u673a\u5907\u4efd\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"VolumeSnapshotClass")," \u7684\u540d\u79f0\u3002")),(0,r.kt)("h2",{id:"default-vm-termination-grace-period-seconds"},(0,r.kt)("inlineCode",{parentName:"h2"},"default-vm-termination-grace-period-seconds")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.2.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u6307\u5b9a\u7528\u4e8e\u505c\u6b62\u865a\u62df\u673a\u7684\u9ed8\u8ba4\u7ec8\u6b62\u5bbd\u9650\u671f\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"120")),(0,r.kt)("h2",{id:"http-proxy"},(0,r.kt)("inlineCode",{parentName:"h2"},"http-proxy")),(0,r.kt)("p",null,"\u914d\u7f6e HTTP \u4ee3\u7406\u4ee5\u8bbf\u95ee\u5916\u90e8\u670d\u52a1\uff0c\u5305\u62ec\u4e0b\u8f7d\u955c\u50cf\u548c\u5907\u4efd\u5230 S3 \u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u7684\u9009\u9879\u548c\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP \u8bf7\u6c42\u7684\u4ee3\u7406 URL\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'"httpProxy": "http://<username>:<pswd>@<ip>:<port>"')),(0,r.kt)("li",{parentName:"ul"},"HTTPS \u8bf7\u6c42\u7684\u4ee3\u7406 URL\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'"httpsProxy": "https://<username>:<pswd>@<ip>:<port>"')),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u540d\u548c/\u6216 CIDR \u7684\u9017\u53f7\u5206\u9694\u5217\u8868\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},'"noProxy": "<hostname | CIDR>"'))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"httpProxy")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"httpsProxy"),"\uff0c\u90a3\u4e48\u4f60\u5fc5\u987b\u540c\u65f6\u5c06 Harvester \u8282\u70b9\u7684 CIDR \u586b\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"noProxy"),"\uff0c\u5426\u5219 Harvester \u96c6\u7fa4\u5c06\u4f1a\u5d29\u6e83\u3002\n\u5982\u679c\u4f60\u8fd8\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-registration-url"),"\uff0c\u4f60\u901a\u5e38\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-registration-url")," \u7684\u4e3b\u673a\u4e5f\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"noProxy")," \u4e2d\uff0c\u5426\u5219\u4f60\u65e0\u6cd5\u4ece Rancher \u8bbf\u95ee Harvester \u96c6\u7fa4\u3002")),(0,r.kt)("h4",{id:"\u793a\u4f8b-5"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "httpProxy": "http://my.proxy",\n  "httpsProxy": "https://my.proxy",\n  "noProxy": "some.internal.svc,172.16.0.0/16"\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Harvester \u5728\u7528\u6237\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"no-proxy")," \u540e\u9644\u52a0\u5fc5\u8981\u7684\u5730\u5740\uff0c\u6765\u786e\u4fdd\u5185\u90e8\u6d41\u91cf\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\n\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,harvester-system,.svc,.cluster.local"),"\u3002v1.1.2 \u5f00\u59cb\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-system")," \u6dfb\u52a0\u5230\u5217\u8868\u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u6539\u6b64\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5355\u8282\u70b9\u96c6\u7fa4\u4ea7\u751f\u8f83\u77ed\u7684\u505c\u673a\u65f6\u95f4\u3002")),(0,r.kt)("h2",{id:"log-level"},(0,r.kt)("inlineCode",{parentName:"h2"},"log-level")),(0,r.kt)("p",null,"\u914d\u7f6e Harvester Server \u7684\u65e5\u5fd7\u7ea7\u522b\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"info")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u503c\u3002\u65e5\u5fd7\u7ea7\u522b\u6309\u7167\u7b80\u5355\u5230\u8be6\u7ec6\u6392\u5217\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"panic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fatal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warn"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"warning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debug")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trace"))),(0,r.kt)("h4",{id:"\u793a\u4f8b-6"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"debug\n")),(0,r.kt)("h2",{id:"ntp-servers"},(0,r.kt)("inlineCode",{parentName:"h2"},"ntp-servers")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.2.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u914d\u7f6e NTP \u670d\u52a1\u5668\u4ee5\u5728 Harvester \u8282\u70b9\u4e0a\u540c\u6b65\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u8bbe\u7f6e\uff0c\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.2/install/harvester-configuration#osntp_servers"},"\u5b89\u88c5"),"\u671f\u95f4\u5b9a\u4e49 NTP \u670d\u52a1\u5668\u6216\u5728\u5b89\u88c5\u540e\u66f4\u65b0 NTP \u670d\u52a1\u5668\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4fee\u6539 NTP \u670d\u52a1\u5668\u5c06\u66ff\u6362\u6240\u6709\u8282\u70b9\u4e4b\u524d\u7684\u503c\u3002")),(0,r.kt)("p",null,'\u9ed8\u8ba4\u503c\uff1a""'),(0,r.kt)("h4",{id:"\u793a\u4f8b-7"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "ntpServers": [\n    "0.suse.pool.ntp.org",\n    "1.suse.pool.ntp.org"\n  ]\n}\n')),(0,r.kt)("h2",{id:"overcommit-config"},(0,r.kt)("inlineCode",{parentName:"h2"},"overcommit-config")),(0,r.kt)("p",null,"\u914d\u7f6e CPU\u3001\u5185\u5b58\u548c\u5b58\u50a8\u7684\u8d44\u6e90\u8d85\u552e\u767e\u5206\u6bd4\u3002\u8bbe\u7f6e\u8d44\u6e90\u8d85\u552e\u540e\uff0c\u5373\u4f7f\u7269\u7406\u8d44\u6e90\u5df2\u7ecf\u7528\u5b8c\uff0c\u4e5f\u80fd\u8c03\u5ea6\u989d\u5916\u7684\u865a\u62df\u673a\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'{ "cpu":1600, "memory":150, "storage":200 }')),(0,r.kt)("p",null,"\u9ed8\u8ba4\u8d85\u552e\u6bd4 CPU 1600% \u6307\u7684\u662f\uff0c\u5982\u679c\u865a\u62df\u673a\u7684 CPU \u8d44\u6e90\u9650\u5236\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"1600m")," \u6838\uff0cHarvester \u53ea\u4f1a\u5411 Kubernetes \u8c03\u5ea6\u5668\u8bf7\u6c42 ",(0,r.kt)("inlineCode",{parentName:"p"},"100m")," CPU\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b-8"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cpu": 1000,\n  "memory": 200,\n  "storage": 300\n}\n')),(0,r.kt)("h2",{id:"release-download-url"},(0,r.kt)("inlineCode",{parentName:"h2"},"release-download-url")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.0.1 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u6b64\u8bbe\u7f6e\u7528\u4e8e\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"\u5347\u7ea7\u7248\u672c\u4e0b\u8f7d"),"\u7684 URL \u5730\u5740\u3002Harvester \u5c06\u4ece\u8be5 URL \u6258\u7ba1\u7684 (",(0,r.kt)("inlineCode",{parentName:"p"},"${URL}/${VERSION}/version.yaml"),") \u6587\u4ef6\u4e2d\u83b7\u53d6 ISO URL \u548c\u6821\u9a8c\u548c\u503c\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester")),(0,r.kt)("h4",{id:"versionyaml-\u793a\u4f8b"},"version.yaml \u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: harvesterhci.io/v1beta1\nkind: Version\nmetadata:\n  name: ${VERSION}\n  namespace: harvester-system\nspec:\n  isoChecksum: ${ISO_CHECKSUM}\n  isoURL: ${ISO_URL}\n")),(0,r.kt)("h2",{id:"server-version"},(0,r.kt)("inlineCode",{parentName:"h2"},"server-version")),(0,r.kt)("p",null,"\u663e\u793a Harvester Server \u7684\u7248\u672c\u3002"),(0,r.kt)("h4",{id:"\u793a\u4f8b-9"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"v1.0.0-abcdef-head\n")),(0,r.kt)("h2",{id:"ssl-certificates"},(0,r.kt)("inlineCode",{parentName:"h2"},"ssl-certificates")),(0,r.kt)("p",null,"\u4e3a Harvester UI/API \u914d\u7f6e\u670d\u52a1\u8bc1\u4e66\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("h4",{id:"\u793a\u4f8b-10"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ca": "-----BEGIN CERTIFICATE-----\\nSOME-CERTIFICATE-ENCODED-IN-PEM-FORMAT\\n-----END CERTIFICATE-----",\n  "publicCertificate": "-----BEGIN CERTIFICATE-----\\nSOME-CERTIFICATE-ENCODED-IN-PEM-FORMAT\\n-----END CERTIFICATE-----",\n  "privateKey": "-----BEGIN RSA PRIVATE KEY-----\\nSOME-PRIVATE-KEY-ENCODED-IN-PEM-FORMAT\\n-----END RSA PRIVATE KEY-----"\n}\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u6539\u6b64\u8bbe\u7f6e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5355\u8282\u70b9\u96c6\u7fa4\u4ea7\u751f\u8f83\u77ed\u7684\u505c\u673a\u65f6\u95f4\u3002")),(0,r.kt)("h2",{id:"ssl-parameters"},(0,r.kt)("inlineCode",{parentName:"h2"},"ssl-parameters")),(0,r.kt)("p",null,"\u4fee\u6539 Harvester GUI \u548c API \u542f\u7528\u7684 SSL/TLS \u534f\u8bae\u548c\u5bc6\u7801\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u7684\u9009\u9879\u548c\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"protocols"),"\uff1a\u542f\u7528\u7684\u534f\u8bae\u3002\u53c2\u89c1 NGINX Ingress Controller \u7684\u914d\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#ssl-protocols"},(0,r.kt)("inlineCode",{parentName:"a"},"ssl-protocols"))," \u6765\u4e86\u89e3\u652f\u6301\u7684\u8f93\u5165\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ciphers"),"\uff1a\u542f\u7528\u7684\u5bc6\u7801\u3002\u53c2\u89c1 NGINX Ingress Controller \u7684\u914d\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#ssl-ciphers"},(0,r.kt)("inlineCode",{parentName:"a"},"ssl-ciphers"))," \u6765\u4e86\u89e3\u652f\u6301\u7684\u8f93\u5165\u3002"))),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u503c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"protocols")," \u4ec5\u4f1a\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"TLSv1.2"),"\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"ciphers")," \u5217\u8868\u4f1a\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305"),"\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1anone"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u8fdb\u884c\u4e86\u9519\u8bef\u914d\u7f6e\uff0c\u5bfc\u81f4\u65e0\u6cd5\u8bbf\u95ee Harvester GUI \u548c API\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.2/troubleshooting/harvester#%E4%BF%AE%E6%94%B9-ssltls-%E5%90%AF%E7%94%A8%E7%9A%84%E5%8D%8F%E8%AE%AE%E5%92%8C%E5%AF%86%E7%A0%81%E5%90%8E%E6%97%A0%E6%B3%95%E8%AE%BF%E9%97%AE-harvester"},"\u6545\u969c\u6392\u67e5"),"\u3002")),(0,r.kt)("h4",{id:"\u793a\u4f8b-11"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c06\u542f\u7528\u7684 SSL/TLS \u534f\u8bae\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"TLSv1.2")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"TLSv1.3"),"\uff0c\u5e76\u628a\u5bc6\u7801\u5217\u8868\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ECDHE-ECDSA-AES128-GCM-SHA256")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ECDHE-ECDSA-CHACHA20-POLY1305"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "protocols": "TLSv1.2 TLSv1.3",\n  "ciphers": "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305"\n}\n')),(0,r.kt)("h2",{id:"storage-network"},(0,r.kt)("inlineCode",{parentName:"h2"},"storage-network")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cLonghorn \u4f7f\u7528 Harvester \u96c6\u7fa4\u4e2d\u7684\u9ed8\u8ba4\u7ba1\u7406\u7f51\u7edc\uff0c\u8be5\u7f51\u7edc\u4ec5\u9650\u4e8e\u5355\u4e2a\u63a5\u53e3\uff0c\u5e76\u4e0e\u96c6\u7fa4\u5185\u7684\u5176\u4ed6\u5de5\u4f5c\u8d1f\u8f7d\u5171\u4eab\u3002\u6b64\u8bbe\u7f6e\u5141\u8bb8\u4f60\u5728\u60f3\u8981\u8fdb\u884c\u7f51\u7edc\u9694\u79bb\u65f6\u914d\u7f6e\u9694\u79bb\u5b58\u50a8\u7f51\u7edc\u3002"),(0,r.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/harvester-docs/zh/v1.2/advanced/storagenetwork"},"Harvester \u5b58\u50a8\u7f51\u7edc"),"\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u66f4\u6539\u5b58\u50a8\u7f51\u7edc\uff0c\u4f60\u9700\u8981\u5728\u5e94\u7528\u6b64\u8bbe\u7f6e\u4e4b\u524d\u5173\u95ed\u6240\u6709\u865a\u62df\u673a\u3002\nIP \u8303\u56f4\u683c\u5f0f\u662f IPv4 CIDR\uff0c\u800c\u4e14\u662f\u96c6\u7fa4\u8282\u70b9\u6570\u7684 4 \u500d\u3002")),(0,r.kt)("p",null,'\u9ed8\u8ba4\u503c\uff1a""'),(0,r.kt)("h4",{id:"\u793a\u4f8b-12"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "vlan": 100,\n  "clusterNetwork": "storage",\n  "range": "192.168.0.0/24"\n}\n')),(0,r.kt)("h2",{id:"support-bundle-image"},(0,r.kt)("inlineCode",{parentName:"h2"},"support-bundle-image")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.2.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u6b64\u914d\u7f6e Support Bundle \u955c\u50cf\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/rancher/support-bundle-kit/tags"},"rancher/support-bundle-kit")," \u63d0\u4f9b\u4e86\u5404\u79cd\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "repository": "rancher/support-bundle-kit",\n  "tag": "v0.0.25",\n  "imagePullPolicy": "IfNotPresent"\n}\n')),(0,r.kt)("h2",{id:"support-bundle-namespaces"},(0,r.kt)("inlineCode",{parentName:"h2"},"support-bundle-namespaces")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.2.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u5728\u6536\u96c6 Support Bundle \u65f6\u6307\u5b9a\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSupport Bundle \u53ea\u4f1a\u4ece\u9884\u5b9a\u4e49\u7684\u547d\u540d\u7a7a\u95f4\u6355\u83b7\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u9884\u5b9a\u4e49\u7684\u547d\u540d\u7a7a\u95f4\u5217\u8868\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cattle-dashboards"),(0,r.kt)("li",{parentName:"ul"},"cattle-fleet-local-system"),(0,r.kt)("li",{parentName:"ul"},"cattle-fleet-system"),(0,r.kt)("li",{parentName:"ul"},"cattle-fleet-clusters-system"),(0,r.kt)("li",{parentName:"ul"},"cattle-monitoring-system"),(0,r.kt)("li",{parentName:"ul"},"fleet-local"),(0,r.kt)("li",{parentName:"ul"},"harvester-system"),(0,r.kt)("li",{parentName:"ul"},"local"),(0,r.kt)("li",{parentName:"ul"},"longhorn-system"),(0,r.kt)("li",{parentName:"ul"},"cattle-logging-system")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9009\u62e9\u66f4\u591a\u547d\u540d\u7a7a\u95f4\uff0c\u5b83\u4eec\u5c06\u9644\u52a0\u5230\u9884\u5b9a\u4e49\u7684\u547d\u540d\u7a7a\u95f4\u5217\u8868\u4e2d\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1anone"),(0,r.kt)("h2",{id:"support-bundle-timeout"},(0,r.kt)("inlineCode",{parentName:"h2"},"support-bundle-timeout")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.2.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u5b9a\u4e49 Support Bundle \u7684\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u5206\u949f\u4e3a\u5355\u4f4d\uff09\u3002\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u7981\u7528\u8d85\u65f6\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"10")),(0,r.kt)("h2",{id:"upgrade-checker-enabled"},(0,r.kt)("inlineCode",{parentName:"h2"},"upgrade-checker-enabled")),(0,r.kt)("p",null,"\u81ea\u52a8\u68c0\u67e5\u662f\u5426\u6709\u53ef\u7528\u7684 Harvester \u5347\u7ea7\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"\u793a\u4f8b-13"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"false\n")),(0,r.kt)("h2",{id:"upgrade-checker-url"},(0,r.kt)("inlineCode",{parentName:"h2"},"upgrade-checker-url")),(0,r.kt)("p",null,"\u4e3a Harvester \u5347\u7ea7\u68c0\u67e5\u914d\u7f6e URL\u3002\u53ea\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade-checker-enabled")," \u8bbe\u4e3a true \u65f6\u624d\u53ef\u7528\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"https://harvester-upgrade-responder.rancher.io/v1/checkupgrade")),(0,r.kt)("h4",{id:"\u793a\u4f8b-14"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your.upgrade.checker-url/v99/checkupgrade\n")),(0,r.kt)("h2",{id:"vip-pools"},(0,r.kt)("inlineCode",{parentName:"h2"},"vip-pools")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u81ea v1.2.0 \u8d77\u5df2\u5f03\u7528\uff0c\u8bf7\u6539\u7528 ",(0,r.kt)("a",{parentName:"em",href:"/harvester-docs/zh/v1.2/networking/ippool"},"IP \u6c60"))),(0,r.kt)("p",null,"\u4f7f\u7528 CIDR \u6216 IP \u8303\u56f4\u914d\u7f6e VIP \u7684\u5168\u5c40\u6216\u547d\u540d\u7a7a\u95f4 IP \u5730\u5740\u6c60\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece UI \u914d\u7f6e\u591a CIDR \u6216 IP \u8303\u56f4\uff0c\u53ea\u5728 Harvester v1.1.1 \u4e2d\u53ef\u7528\u3002")),(0,r.kt)("h4",{id:"\u793a\u4f8b-15"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "default": "172.16.0.0/24,172.16.1.0/24",\n  "demo": "172.16.2.50-172.16.2.100,172.16.2.150-172.16.3.200"\n}\n')),(0,r.kt)("h2",{id:"vm-force-reset-policy"},(0,r.kt)("inlineCode",{parentName:"h2"},"vm-force-reset-policy")),(0,r.kt)("p",null,"\u5f53\u8282\u70b9\u4e0d\u53ef\u7528\u65f6\uff0c\u5f3a\u5236\u91cd\u65b0\u8c03\u5ea6\u865a\u62df\u673a\u3002\u5f53\u8282\u70b9\u72b6\u6001\u53d8\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Not Ready")," \u65f6\uff0c\u6b64\u8bbe\u7f6e\u4f1a\u5f3a\u5236\u5220\u9664\u8be5\u8282\u70b9\u4e0a\u7684\u865a\u62df\u673a\uff0c\u5e76\u5728\u51e0\u79d2\u540e\u5c06\u865a\u62df\u673a\u91cd\u65b0\u8c03\u5ea6\u5230\u53e6\u4e00\u4e2a\u53ef\u7528\u7684\u8282\u70b9\u3002 Harvester \u5347\u7ea7\u68c0\u67e5\u914d\u7f6e URL\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'{"enable":true, "period":300}')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3b\u673a\u4e0d\u53ef\u7528\u6216\u65ad\u7535\u65f6\uff0c\u865a\u62df\u673a\u53ea\u4f1a\u91cd\u542f\uff0c\u4e0d\u4f1a\u8fc1\u79fb\u3002")),(0,r.kt)("h4",{id:"\u793a\u4f8b-16"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enable": "true",\n  "period": 300\n}\n')),(0,r.kt)("h2",{id:"ui-\u8bbe\u7f6e"},"UI \u8bbe\u7f6e"),(0,r.kt)("h3",{id:"branding"},(0,r.kt)("inlineCode",{parentName:"h3"},"branding")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.2.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u7528\u4e8e\u901a\u8fc7\u4fee\u6539 Harvester \u4ea7\u54c1\u540d\u79f0\u3001Logo \u548c\u914d\u8272\u65b9\u6848\u6765\u5168\u5c40\u81ea\u5b9a\u4e49 UI \u754c\u9762\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\uff1a",(0,r.kt)("strong",{parentName:"p"},"Harvester")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"containerd-registry",src:n(79431).Z,width:"2732",height:"1750"})),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u9009\u9879\u548c\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Private Label"),"\uff1a\u6b64\u9009\u9879\u5c06\u5927\u591a\u6570\u51fa\u73b0\u7684 \u201cHarvester\u201d \u66ff\u6362\u4e3a\u4f60\u63d0\u4f9b\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logo"),"\uff1a\u4e0a\u4f20\u6df1\u8272\u548c\u6d45\u8272\u7684 Logo \u6765\u66ff\u6362\u9876\u5c42\u5bfc\u822a\u6807\u9898\u4e2d\u7684 Harvester logo\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Favicon"),"\uff1a\u4e0a\u4f20\u4e00\u4e2a\u7f51\u7ad9\u56fe\u6807\u6765\u66ff\u6362\u6d4f\u89c8\u5668\u9009\u9879\u5361\u4e2d\u7684 Harvester \u56fe\u6807\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Primary Color"),"\uff1a\u4f7f\u7528\u81ea\u5b9a\u4e49\u989c\u8272\u66ff\u6362\u6574\u4e2a UI \u4e2d\u4f7f\u7528\u7684\u4e3b\u989c\u8272\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Link Color"),"\uff1a\u4f7f\u7528\u81ea\u5b9a\u4e49\u94fe\u63a5\u989c\u8272\u66ff\u6362\u6574\u4e2a UI \u4e2d\u4f7f\u7528\u7684\u94fe\u63a5\u989c\u8272\u3002")),(0,r.kt)("h3",{id:"ui-index"},(0,r.kt)("inlineCode",{parentName:"h3"},"ui-index")),(0,r.kt)("p",null,"\u4e3a UI \u914d\u7f6e HTML \u7d22\u5f15\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester-ui/dashboard/latest/index.html")),(0,r.kt)("h4",{id:"\u793a\u4f8b-17"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your.static.dashboard-ui/index.html\n")),(0,r.kt)("h3",{id:"ui-plugin-index"},(0,r.kt)("inlineCode",{parentName:"h3"},"ui-plugin-index")),(0,r.kt)("p",null,"\u4e3a Harvester \u63d2\u4ef6\u914d\u7f6e JS \u5730\u5740 (\u4ece Rancher \u4e2d\u8bbf\u95ee Harvester \u65f6\u4f7f\u7528)\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester-ui/plugin/harvester-latest/harvester-latest.umd.min.js")),(0,r.kt)("h4",{id:"\u793a\u4f8b-18"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://your.static.dashboard-ui/*.umd.min.js\n")),(0,r.kt)("h3",{id:"ui-source"},(0,r.kt)("inlineCode",{parentName:"h3"},"ui-source")),(0,r.kt)("p",null,"\u914d\u7f6e\u5982\u4f55\u52a0\u8f7d UI \u6e90\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auto"),"\uff1a\u9ed8\u8ba4\u3002\u81ea\u52a8\u68c0\u6d4b\u662f\u5426\u4f7f\u7528\u7ed1\u5b9a\u7684 UI\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"external"),"\uff1a\u4f7f\u7528\u5916\u90e8 UI \u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bundled"),"\uff1a\u4f7f\u7528\u7ed1\u5b9a\u7684 UI \u6e90\u3002")),(0,r.kt)("h4",{id:"\u793a\u4f8b-19"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"external\n")))}k.isMDXComponent=!0},79431:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/branding-49ad191233c03030305a64308b3449a2.png"},16030:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/containerd-registry-de62fe2333d8d53e52d54da6a2e8233b.png"}}]);