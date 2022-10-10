"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,sidebar_label:"Installation",title:""},i="Installation",l={unversionedId:"troubleshooting/installation",id:"version-v1.0/troubleshooting/installation",title:"",description:"The following sections contain tips to troubleshoot or get assistance with failed installations.",source:"@site/versioned_docs/version-v1.0/troubleshooting/installation.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/installation",permalink:"/v1.0/troubleshooting/installation",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/troubleshooting/installation.md",tags:[],version:"v1.0",lastUpdatedAt:1664425696,formattedLastUpdatedAt:"Sep 29, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Installation",title:""},sidebar:"tutorialSidebar",previous:{title:"Developer Mode Installation",permalink:"/v1.0/dev/dev-mode"},next:{title:"Harvester",permalink:"/v1.0/troubleshooting/harvester"}},s={},c=[{value:"Logging into the Harvester Installer (a live OS)",id:"logging-into-the-harvester-installer-a-live-os",level:2},{value:"Meeting hardware requirements",id:"meeting-hardware-requirements",level:2},{value:"Receiving the message <code>&quot;Loading images. This may take a few minutes...&quot;</code>",id:"receiving-the-message-loading-images-this-may-take-a-few-minutes",level:2},{value:"Modifying cluster token on agent nodes",id:"modifying-cluster-token-on-agent-nodes",level:2},{value:"Collecting troubleshooting information",id:"collecting-troubleshooting-information",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The following sections contain tips to troubleshoot or get assistance with failed installations."),(0,r.kt)("h2",{id:"logging-into-the-harvester-installer-a-live-os"},"Logging into the Harvester Installer (a live OS)"),(0,r.kt)("p",null,"Users can press the key combination ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL + ALT + F2")," to switch to another TTY and log in with the following credentials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User: ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher"))),(0,r.kt)("h2",{id:"meeting-hardware-requirements"},"Meeting hardware requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check that your hardware meets the ",(0,r.kt)("a",{parentName:"li",href:"/v1.0/#hardware-requirements"},"minimum requirements")," to complete installation.")),(0,r.kt)("h2",{id:"receiving-the-message-loading-images-this-may-take-a-few-minutes"},"Receiving the message ",(0,r.kt)("inlineCode",{parentName:"h2"},'"Loading images. This may take a few minutes..."')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Because the system doesn\'t have a default route, your installer may become "stuck" in this state. You can check your route status by executing the following command:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ip route\ndefault via 10.10.0.10 dev harvester-mgmt proto dhcp        <-- Does a default route exist?\n10.10.0.0/24 dev harvester-mgmt proto kernel scope link src 10.10.0.15\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check that your DHCP server offers a default route option. Attaching content from ",(0,r.kt)("inlineCode",{parentName:"li"},"/run/cos/target/rke2.log")," is helpful too.")),(0,r.kt)("h2",{id:"modifying-cluster-token-on-agent-nodes"},"Modifying cluster token on agent nodes"),(0,r.kt)("p",null,"When an agent node fails to join the cluster, it can be related to the cluster token not being identical to the server node token.\nIn order to confirm the issue, connect to your agent node (i.e. with ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/troubleshooting/os#how-to-log-into-a-harvester-node"},"SSH")," and check the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancherd")," service log with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo journalctl -b -u rancherd\n")),(0,r.kt)("p",null,"If the cluster token setup in the agent node is not matching the server node token, you will find several entries of the following message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'msg="Bootstrapping Rancher (master-head/v1.21.5+rke2r1)"\nmsg="failed to bootstrap system, will retry: generating plan: insecure cacerts download from https://192.168.122.115:443/cacerts: Get \\"https://192.168.122.115:443/cacerts\\": EOF"\n')),(0,r.kt)("p",null,"To fix the issue, you need to update the token value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancherd")," configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rancherd/config.yaml"),"."),(0,r.kt)("p",null,"For example, if the cluster token setup in the server node is ",(0,r.kt)("inlineCode",{parentName:"p"},"ThisIsTheCorrectOne"),", you will update the token value as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"token: 'ThisIsTheCorrectOne'\n")),(0,r.kt)("p",null,"To ensure the change is persistent across reboots, update the ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," value of the OS configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Harvester Configuration\nstages:\n  ...\n  initramfs:\n  - commands:\n    - rm -f /etc/sysconfig/network/ifroute-harvester-mgmt\n    files:\n    - path: /etc/rancher/rancherd/config.yaml\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |\n        role: cluster-init\n        token: \'ThisIsTheCorrectOne\' # <- Update this value\n        kubernetesVersion: v1.21.5+rke2r1\n        labels:\n         - harvesterhci.io/managed=true\n      encoding: ""\n      ownerstring: ""\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To see what is the current cluster token value, log in your server node (i.e. with SSH)\nand look in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rancherd/config.yaml"),". For example,\nyou can run the following command to only display the token's value:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo yq eval .token /etc/rancher/rancherd/config.yaml\n"))),(0,r.kt)("h2",{id:"collecting-troubleshooting-information"},"Collecting troubleshooting information"),(0,r.kt)("p",null,"Please include the following information in a bug report when reporting a failed installation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A failed installation screenshot.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"System information and logs."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Available as of v1.0.2"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Please follow the guide in [Logging into the Harvester Installer (a live OS)](#logging-into-the-harvester-installer-a-live-os) to log in. And run the command to generate a tarball that contains troubleshooting information:\n\n```\nsupportconfig -k -c\n```\n\nThe command output messages contain the generated tarball path. For example the path is `/var/loq/scc_aaa_220520_1021 804d65d-c9ba-4c54-b12d-859631f892c5.txz` in the following example:\n\n![](/img/v1.0/troubleshooting/installation-support-config-example.png)\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A failure PXE Boot installation automatically generates a tarball if the ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/harvester-configuration#installdebug"},(0,r.kt)("inlineCode",{parentName:"a"},"install.debug"))," field is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the Harvester configuration file."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Before v1.0.2"),(0,r.kt)("p",{parentName:"li"},"  Please help capture the content of these files:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"/var/log/console.log\n/run/cos/target/rke2.log\n/tmp/harvester.*\n/tmp/cos.*\n")),(0,r.kt)("p",{parentName:"li"},"  And output of these commands:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"blkid\ndmesg\n")))))))}p.isMDXComponent=!0}}]);