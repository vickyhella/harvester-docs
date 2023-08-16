"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7269],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),h=l(r),g=n,c=h["".concat(i,".").concat(g)]||h[g]||u[g]||s;return r?a.createElement(c,o(o({ref:t},d),{},{components:r})):a.createElement(c,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},59282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:5,sidebar_label:"Troubleshooting",title:"Troubleshooting"},o=void 0,p={unversionedId:"upgrade/troubleshooting",id:"version-v1.0/upgrade/troubleshooting",title:"Troubleshooting",description:"Overview",source:"@site/versioned_docs/version-v1.0/upgrade/troubleshooting.md",sourceDirName:"upgrade",slug:"/upgrade/troubleshooting",permalink:"/harvester-docs/v1.0/upgrade/troubleshooting",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/upgrade/troubleshooting.md",tags:[],version:"v1.0",lastUpdatedAt:1689661836,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Troubleshooting",title:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Upgrade from v1.0.0 to v1.0.1",permalink:"/harvester-docs/v1.0/upgrade/previous-releases/v1-0-0-to-v1-0-1"},next:{title:"Authentication",permalink:"/harvester-docs/v1.0/authentication"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"Diagnose the upgrade flow",id:"diagnose-the-upgrade-flow",level:2},{value:"Phase 1: Provision upgrade repository VM.",id:"phase-1-provision-upgrade-repository-vm",level:3},{value:"Phase 2: Preload container images",id:"phase-2-preload-container-images",level:3},{value:"Phase 3: Upgrade system services",id:"phase-3-upgrade-system-services",level:3},{value:"Phase 4: Upgrade nodes",id:"phase-4-upgrade-nodes",level:3},{value:"Phase 5: Clean-up",id:"phase-5-clean-up",level:3},{value:"Common operations",id:"common-operations",level:2},{value:"Start over an upgrade",id:"start-over-an-upgrade",level:3}],d={toc:l};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/upgrade/troubleshooting"})),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Here are some tips to troubleshoot a failed upgrade:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check ",(0,n.kt)("a",{parentName:"li",href:"/harvester-docs/v1.0/upgrade/automatic#upgrade-support-matrix"},"version-specific upgrade notes"),". You can click the version in the support matrix table to see if there are any known issues."),(0,n.kt)("li",{parentName:"ul"},"Dive into the upgrade ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/blob/master/enhancements/20220413-zero-downtime-upgrade.md"},"design proposal"),". The following section briefly describes phases within an upgrade and possible diagnostic methods.")),(0,n.kt)("h2",{id:"diagnose-the-upgrade-flow"},"Diagnose the upgrade flow"),(0,n.kt)("p",null,"A Harvester upgrade process contains several phases.\n",(0,n.kt)("img",{src:r(55105).Z,width:"1345",height:"602"})),(0,n.kt)("h3",{id:"phase-1-provision-upgrade-repository-vm"},"Phase 1: Provision upgrade repository VM."),(0,n.kt)("p",null,"The Harvester controller downloads a Harvester release ISO file and uses it to provision a VM. During this phase you can see the upgrade status windows show:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(44874).Z,width:"1132",height:"1238"})),(0,n.kt)("p",null,"The time to complete the phase depends on the user's network speed and cluster resource utilization. We see failures in this phase due to network speed. If this happens, the user can ",(0,n.kt)("a",{parentName:"p",href:"#start-over-an-upgrade"},"start over the upgrade")," again."),(0,n.kt)("p",null,"We can also check the repository VM (named with the format ",(0,n.kt)("inlineCode",{parentName:"p"},"upgrade-repo-hvst-xxxx"),") status and its corresponding pod:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get vm -n harvester-system\nNAME                              AGE    STATUS     READY\nupgrade-repo-hvst-upgrade-9gmg2   101s   Starting   False\n\n$ kubectl get pods -n harvester-system | grep upgrade-repo-hvst\nvirt-launcher-upgrade-repo-hvst-upgrade-9gmg2-4mnmq     1/1     Running     0          4m44s\n")),(0,n.kt)("h3",{id:"phase-2-preload-container-images"},"Phase 2: Preload container images"),(0,n.kt)("p",null,"The Harvester controller creates jobs on each Harvester node to download images from the repository VM and preload them. These are the container images required for the next release."),(0,n.kt)("p",null,"During this stage you can see the upgrade status windows shows:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(42476).Z,width:"1128",height:"556"})),(0,n.kt)("p",null,"It will take a while for all nodes to preload images. If the upgrade fails at this phase, the user can check job logs in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get jobs -n cattle-system | grep prepare\napply-hvst-upgrade-9gmg2-prepare-on-node1-with-2bbea1599a-f0e86   0/1           47s        47s\napply-hvst-upgrade-9gmg2-prepare-on-node4-with-2bbea1599a-041e4   1/1           2m3s       2m50s\n\n$ kubectl logs jobs/apply-hvst-upgrade-9gmg2-prepare-on-node1-with-2bbea1599a-f0e86 -n cattle-system\n...\n")),(0,n.kt)("p",null,"It's also safe to ",(0,n.kt)("a",{parentName:"p",href:"#start-over-an-upgrade"},"start over the upgrade")," if an upgrade fails at this phase."),(0,n.kt)("h3",{id:"phase-3-upgrade-system-services"},"Phase 3: Upgrade system services"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(14326).Z,width:"1132",height:"970"})),(0,n.kt)("p",null,"In this phase, Harvester controller upgrades component Helm charts with a job. The user can check the ",(0,n.kt)("inlineCode",{parentName:"p"},"apply-manifest")," job with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get jobs -n harvester-system -l harvesterhci.io/upgradeComponent=manifest\nNAME                                 COMPLETIONS   DURATION   AGE\nhvst-upgrade-9gmg2-apply-manifests   0/1           46s        46s\n\n$ kubectl logs jobs/hvst-upgrade-9gmg2-apply-manifests -n harvester-system\n...\n")),(0,n.kt)("h3",{id:"phase-4-upgrade-nodes"},"Phase 4: Upgrade nodes"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(13713).Z,width:"1134",height:"946"})),(0,n.kt)("p",null,"The Harvester controller creates jobs on each node (one by one) to upgrade nodes' OSes and RKE2 runtime. For multi-node clusters, there are two kinds of jobs to update a node:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pre-drain")," job: live-migrate or shutdown VMs on a node. When the job completes, the embedded Rancher service upgrades RKE2 runtime on a node."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"post-drain")," job: upgrade OS and reboot.")),(0,n.kt)("p",null,"For single-node clusters, there is only one ",(0,n.kt)("inlineCode",{parentName:"p"},"single-node-upgrade")," type job for each node (named with the format ",(0,n.kt)("inlineCode",{parentName:"p"},"hvst-upgrade-xxx-single-node-upgrade-<hostname>"),")."),(0,n.kt)("p",null,"The user can check node jobs by:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get jobs -n harvester-system -l harvesterhci.io/upgradeComponent=node\nNAME                                  COMPLETIONS   DURATION   AGE\nhvst-upgrade-9gmg2-post-drain-node1   1/1           118s       6m34s\nhvst-upgrade-9gmg2-post-drain-node2   0/1           9s         9s\nhvst-upgrade-9gmg2-pre-drain-node1    1/1           3s         8m14s\nhvst-upgrade-9gmg2-pre-drain-node2    1/1           7s         85s\n\n$ kubectl logs -n harvester-system jobs/hvst-upgrade-9gmg2-post-drain-node2\n...\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please do not start over an upgrade if the upgrade fails at this phase.")),(0,n.kt)("h3",{id:"phase-5-clean-up"},"Phase 5: Clean-up"),(0,n.kt)("p",null,"The Harvester controller deletes the upgrade repository VM and all files that are no longer needed."),(0,n.kt)("h2",{id:"common-operations"},"Common operations"),(0,n.kt)("h3",{id:"start-over-an-upgrade"},"Start over an upgrade"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to a control plane node.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"List ",(0,n.kt)("inlineCode",{parentName:"p"},"Upgrade")," CRs in the cluster:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# become root\n$ sudo -i\n\n# list the on-going upgrade\n$ kubectl get upgrade.harvesterhci.io -n harvester-system -l harvesterhci.io/latestUpgrade=true\nNAME                 AGE\nhvst-upgrade-9gmg2   10m\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the Upgrade CR"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl delete upgrade.harvesterhci.io/hvst-upgrade-9gmg2 -n harvester-system\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the upgrade button in the Harvester dashboard to start an upgrade again."))))}u.isMDXComponent=!0},44874:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ts_status_phase1-55652281986041ac3e4b3fb4bbc07e74.png"},42476:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ts_status_phase2-940f14e6d6329de62a8aea1cc5facf5c.png"},14326:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ts_status_phase3-364e71e68c693b088072a1b1ae4eb6b3.png"},13713:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ts_status_phase4-0f10c9f6b9c4e6533a40ad10b51ff0e4.png"},55105:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/ts_upgrade_phases-7336371ca32df446a0f9da46e79729b6.png"}}]);