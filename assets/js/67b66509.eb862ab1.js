"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4698],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71344:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:2,sidebar_label:"Upgrade from v1.1.2 to v1.2.0",title:"Upgrade from v1.1.2 to v1.2.0"},i=void 0,s={unversionedId:"upgrade/v1-1-2-to-v1-2-0",id:"upgrade/v1-1-2-to-v1-2-0",title:"Upgrade from v1.1.2 to v1.2.0",description:"General information",source:"@site/docs/upgrade/v1-1-2-to-v1-2-0.md",sourceDirName:"upgrade",slug:"/upgrade/v1-1-2-to-v1-2-0",permalink:"/harvester-docs/v1.2/upgrade/v1-1-2-to-v1-2-0",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/v1-1-2-to-v1-2-0.md",tags:[],version:"current",lastUpdatedAt:1694517703,formattedLastUpdatedAt:"Sep 12, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Upgrade from v1.1.2 to v1.2.0",title:"Upgrade from v1.1.2 to v1.2.0"},sidebar:"docs",previous:{title:"Upgrading Harvester",permalink:"/harvester-docs/v1.2/upgrade/automatic"},next:{title:"Upgrade from v1.1.0/v1.1.1 to v1.1.2",permalink:"/harvester-docs/v1.2/upgrade/v1-1-to-v1-1-2"}},l={},p=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. An upgrade can&#39;t start and reports <code>&quot;validator.harvesterhci.io&quot; denied the request: managed chart rancher-monitoring is not ready, please wait for it to be ready</code>",id:"1-an-upgrade-cant-start-and-reports-validatorharvesterhciio-denied-the-request-managed-chart-rancher-monitoring-is-not-ready-please-wait-for-it-to-be-ready",level:3},{value:"2. An upgrade is stuck in <code>Creating Upgrade Repository</code>",id:"2-an-upgrade-is-stuck-in-creating-upgrade-repository",level:3},{value:"3. An upgrade is stuck when pre-draining a node",id:"3-an-upgrade-is-stuck-when-pre-draining-a-node",level:3},{value:"4. An upgrade is stuck in upgrading the first node: Job was active longer than the specified deadline",id:"4-an-upgrade-is-stuck-in-upgrading-the-first-node-job-was-active-longer-than-the-specified-deadline",level:3},{value:"5. An upgrade is stuck in the Pre-drained state",id:"5-an-upgrade-is-stuck-in-the-pre-drained-state",level:3},{value:"5.1 The node contains a Longhorn <code>instance-manager-r</code> pod that serves single-replica volume(s)",id:"51-the-node-contains-a-longhorn-instance-manager-r-pod-that-serves-single-replica-volumes",level:4},{value:"5.2 Misconfigured Longhorn <code>instance-manager-r</code> Pod Disruption Budgets (PDB)",id:"52-misconfigured-longhorn-instance-manager-r-pod-disruption-budgets-pdb",level:4},{value:"5.3 The <code>instance-manager-e</code> pod could not be drained",id:"53-the-instance-manager-e-pod-could-not-be-drained",level:4},{value:"6. An upgrade is stuck in the Upgrading System Service state",id:"6-an-upgrade-is-stuck-in-the-upgrading-system-service-state",level:3},{value:"7. Upgrade stuck in the <code>Upgrading System Service</code> state",id:"7-upgrade-stuck-in-the-upgrading-system-service-state",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/upgrade/v1-1-2-to-v1-2-0"})),(0,r.kt)("h2",{id:"general-information"},"General information"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Before you start an upgrade, you can run the pre-check script to make sure the cluster is in a stable state. For more details, please visit this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/tree/main/pre-check/v1.1.x"},"URL")," for the script.")),(0,r.kt)("p",null,"Once there is an upgradable version, the Harvester GUI Dashboard page will show an upgrade button. For more details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/harvester-docs/v1.2/upgrade/automatic#start-an-upgrade"},"start an upgrade"),"."),(0,r.kt)("p",null,"For the air-gap env upgrade, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/harvester-docs/v1.2/upgrade/automatic#prepare-an-air-gapped-upgrade"},"prepare an air-gapped upgrade"),"."),(0,r.kt)("h2",{id:"known-issues"},"Known issues"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1-an-upgrade-cant-start-and-reports-validatorharvesterhciio-denied-the-request-managed-chart-rancher-monitoring-is-not-ready-please-wait-for-it-to-be-ready"},"1. An upgrade can't start and reports ",(0,r.kt)("inlineCode",{parentName:"h3"},'"validator.harvesterhci.io" denied the request: managed chart rancher-monitoring is not ready, please wait for it to be ready')),(0,r.kt)("p",null,"If a cluster is configured with a ",(0,r.kt)("strong",{parentName:"p"},"storage network"),", an upgrade can't start with the following message."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(59932).Z,width:"1722",height:"606"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3839"},"[Doc] upgrade stuck while upgrading system service with alertmanager and prometheus")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3839#issuecomment-1534438192"},"https://github.com/harvester/harvester/issues/3839#issuecomment-1534438192"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"2-an-upgrade-is-stuck-in-creating-upgrade-repository"},"2. An upgrade is stuck in ",(0,r.kt)("inlineCode",{parentName:"h3"},"Creating Upgrade Repository")),(0,r.kt)("p",null,"During an upgrade, ",(0,r.kt)("strong",{parentName:"p"},"Creating Upgrade Repository")," is stuck in the ",(0,r.kt)("strong",{parentName:"p"},"Pending")," state:"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{src:a(66738).Z,width:"1142",height:"286"})),(0,r.kt)("p",null,"Please perform the following steps to check if the cluster runs into the issue:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the upgrade repository pod:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(46584).Z,width:"1375",height:"185"})),(0,r.kt)("p",{parentName:"li"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"virt-launcher-upgrade-repo-hvst-<upgrade-name>")," pod stays in ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerCreating"),", your cluster might have run into this issue. In this case, proceed with step 2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the upgrade repository volume in the Longhorn GUI."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/harvester-docs/v1.2/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"Go to Longhorn GUI"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Volume")," page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the upgrade repository VM volume. It should be attached to a pod called ",(0,r.kt)("inlineCode",{parentName:"p"},"virt-launcher-upgrade-repo-hvst-<upgrade-name>"),". If one of the volume's replicas stays in ",(0,r.kt)("inlineCode",{parentName:"p"},"Stopped")," (gray color), the cluster is running into the issue."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(33356).Z,width:"1883",height:"588"})))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4246"},"[BUG] upgrade stuck on create upgrade VM")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Delete the ",(0,r.kt)("inlineCode",{parentName:"li"},"Stopped")," replica from Longhorn GUI. Or,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/harvester-docs/v1.2/upgrade/troubleshooting#start-over-an-upgrade"},"Start over the upgrade"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"3-an-upgrade-is-stuck-when-pre-draining-a-node"},"3. An upgrade is stuck when pre-draining a node"),(0,r.kt)("p",null,'Starting from v1.1.0, Harvester will wait for all volumes to become healthy (when node count >= 3) before upgrading a node. Generally, you can check volumes\' health if an upgrade is stuck in the "pre-draining" state.'),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"/harvester-docs/v1.2/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},'"Access Embedded Longhorn"')," to see how to access the embedded Longhorn GUI."),(0,r.kt)("p",null,"You can also check the pre-drain job logs. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/harvester-docs/v1.2/upgrade/troubleshooting#phase-4-upgrade-nodes"},"Phase 4: Upgrade nodes")," in the troubleshooting guide."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"4-an-upgrade-is-stuck-in-upgrading-the-first-node-job-was-active-longer-than-the-specified-deadline"},"4. An upgrade is stuck in upgrading the first node: Job was active longer than the specified deadline"),(0,r.kt)("p",null,"An upgrade fails, as shown in the screenshot below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37846).Z,width:"1140",height:"918"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894"},"[BUG] Upgrade stuck in upgrading first node: Job was active longer than specified deadline")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"},"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"5-an-upgrade-is-stuck-in-the-pre-drained-state"},"5. An upgrade is stuck in the Pre-drained state"),(0,r.kt)("p",null,'You might see an upgrade is stuck in the "pre-drained" state:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(74627).Z,width:"1130",height:"530"})),(0,r.kt)("p",null,"In this stage, Kubernetes is supposed to drain the workload on the node, but some reasons might cause the process to stall."),(0,r.kt)("h4",{id:"51-the-node-contains-a-longhorn-instance-manager-r-pod-that-serves-single-replica-volumes"},"5.1 The node contains a Longhorn ",(0,r.kt)("inlineCode",{parentName:"h4"},"instance-manager-r")," pod that serves single-replica volume(s)"),(0,r.kt)("p",null,"Longhorn doesn't allow draining a node if the node contains the last surviving replica of a volume. To check if a node is running into this situation, follow these steps: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List single-replica volumes with the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get volumes.longhorn.io -A -o yaml | yq '.items[] | select(.spec.numberOfReplicas == 1) | .metadata.namespace + \"/\" + .metadata.name'\n")),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl get volumes.longhorn.io -A -o yaml | yq '.items[] | select(.spec.numberOfReplicas == 1) | .metadata.namespace + \"/\" + .metadata.name'\nlonghorn-system/pvc-d1f19bab-200e-483b-b348-c87cfbba85ab\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check if the replica resides on the stuck node:"),(0,r.kt)("p",{parentName:"li"},"List the NodeID of the volume's replica with the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get replicas.longhorn.io -n longhorn-system -o yaml | yq '.items[] | select(.metadata.labels.longhornvolume == \"<volume>\") | .spec.nodeID'\n")),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl get replicas.longhorn.io -n longhorn-system -o yaml | yq '.items[] | select(.metadata.labels.longhornvolume == \"pvc-d1f19bab-200e-483b-b348-c87cfbba85ab\") | .spec.nodeID'\nnode1\n")),(0,r.kt)("p",{parentName:"li"},"If the result shows that the replica resides on the node where the upgrade is stuck (in this example, node1), your cluster is hitting this issue."))),(0,r.kt)("p",null,"There are a couple of ways to address this situation. Choose the most appropriate method for your VM:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Shut down the VM that uses the single-replica volume to detach the volume, allowing the upgrade to continue."),(0,r.kt)("li",{parentName:"ol"},"Adjust the volumes's replicas to more than one.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/harvester-docs/v1.2/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"Go to Longhorn GUI"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Volume")," page."),(0,r.kt)("li",{parentName:"ol"},"Locate the problematic volume and click the icon on the right side, then select ",(0,r.kt)("strong",{parentName:"li"},"Update Replicas Count"),":\n",(0,r.kt)("img",{src:a(56155).Z,width:"3708",height:"594"})),(0,r.kt)("li",{parentName:"ol"},"Increase the ",(0,r.kt)("strong",{parentName:"li"},"Number of Replicas")," and select ",(0,r.kt)("strong",{parentName:"li"},"OK"),".")))),(0,r.kt)("h4",{id:"52-misconfigured-longhorn-instance-manager-r-pod-disruption-budgets-pdb"},"5.2 Misconfigured Longhorn ",(0,r.kt)("inlineCode",{parentName:"h4"},"instance-manager-r")," Pod Disruption Budgets (PDB)"),(0,r.kt)("p",null,"A misconfigured PDB could cause this issue. To check if that's the case, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Assume the stuck node is ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-node-1"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-r")," pod names on the stuck node:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl get pods -n longhorn-system --field-selector spec.nodeName=harvester-node-1 | grep instance-manager\ninstance-manager-r-d4ed2788          1/1     Running   0              3d8h\n")),(0,r.kt)("p",{parentName:"li"},"The output above shows that the ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-r-d4ed2788")," pod is on the node. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check Rancher logs and verify that the ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-r")," pod can't be drained:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'$ kubectl logs deployment/rancher -n cattle-system\n...\n2023-03-28T17:10:52.199575910Z 2023/03/28 17:10:52 [INFO] [planner] rkecluster fleet-local/local: waiting: draining etcd node(s) custom-4f8cb698b24a,custom-a0f714579def\n2023-03-28T17:10:55.034453029Z evicting pod longhorn-system/instance-manager-r-d4ed2788\n2023-03-28T17:10:55.080933607Z error when evicting pods/"instance-manager-r-d4ed2788" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command to check if there is a PDB associated with the stuck node:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'$ kubectl get pdb -n longhorn-system -o yaml | yq \'.items[] | select(.spec.selector.matchLabels."longhorn.io/node"=="harvester-node-1") | .metadata.name\'\ninstance-manager-r-466e3c7f\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the owner of the instance manager to this PDB:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl get instancemanager instance-manager-r-466e3c7f -n longhorn-system -o yaml | yq -e '.spec.nodeID'\nharvester-node-2\n")),(0,r.kt)("p",{parentName:"li"},"If the output doesn't match the stuck node (in this example output, ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-node-2")," doesn't match the stuck node ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-node-1"),"), then we can conclude this issue happens.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before applying the workaround, check if all volumes are healthy:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get volumes -n longhorn-system -o yaml | yq '.items[] | select(.status.state == \"attached\")| .status.robustness'\n")),(0,r.kt)("p",{parentName:"li"},"The output should all be ",(0,r.kt)("inlineCode",{parentName:"p"},"healthy"),". If this is not the case, you might want to uncordon nodes to make the volume healthy again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the misconfigured PDB:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl delete pdb instance-manager-r-466e3c7f -n longhorn-system\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3730"},"[BUG] 3 Node AirGapped Cluster Upgrade Stuck v1.1.0->v1.1.2-rc4"))))),(0,r.kt)("h4",{id:"53-the-instance-manager-e-pod-could-not-be-drained"},"5.3 The ",(0,r.kt)("inlineCode",{parentName:"h4"},"instance-manager-e")," pod could not be drained"),(0,r.kt)("p",null,"During an upgrade, you might encounter an issue where you can't drain the ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," pod. When this situation occurs, you will see error messages in the Rancher logs like the ones shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl logs deployment/rancher -n cattle-system | grep "evicting pod"\nevicting pod longhorn-system/instance-manager-r-a06a43f3437ab4f643eea7053b915a80\nevicting pod longhorn-system/instance-manager-e-452e87d2\nerror when evicting pods/"instance-manager-r-a06a43f3437ab4f643eea7053b915a80" -n "Longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\nerror when evicting pods/"instance-manager-e-452e87d2" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\n')),(0,r.kt)("p",null,"Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," to see if any engine instances remain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl get instancemanager instance-manager-e-452e87d2 -n longhorn-system -o yaml | yq -e ".status.instances"\npvc-7b120d60-1577-4716-be5a-62348271025a-e-1cd53c57:\n  spec:\n    name: pvc-7b120d60-1577-4716-be5a-62348271025a-e-1cd53c57\n  status:\n    endpoint: ""\n    errorMsg: ""\n    listen: ""\n    portEnd: 10001\n    portStart: 10001\n    resourceVersion: 0\n    state: running\n    type: ""\n')),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-e-452e87d2")," still has an engine instance, so you can't drain the pod."),(0,r.kt)("p",null,"You need to check the engine numbers to see if any engine number is redundant. Each PVC should only have one engine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get engines -n longhorn-system -l longhornvolume=pvc-7b120d60-1577-4716-be5a-62348271025a\nNAME                                                  STATE     NODE               INSTANCEMANAGER                                      IMAGE                               AGE\npvc-76120d60-1577-4716-be5a-62348271025a-e-08220662   running   harvester-qv4hd    instance-manager-e-625d715e2f2e7065d64339f9b31407c2  longhornio/longhorn-engine:v1.4.3   2d12h\npvc-7b120d60-1577-4716-be5a-62348271025a-e-lcd53c57   running   harvester-lhlkv    instance-manager-e-452e87d2                          longhornio/longhorn-engine:v1.4.3   4d10h\n")),(0,r.kt)("p",null,"The example above shows that two engines exist for the same PVC, which is a known issue in Longhorn ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn/issues/6642"},"#6642"),". To resolve this, delete the redundant engine to allow the upgrade to continue. "),(0,r.kt)("p",null,"To determine which engine is the correct one, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get volumes pvc-7b120d60-1577-4716-be5a-62348271025a -n longhorn-system\nNAME                                      STATE     ROBUSTNESS  SCHEDULED SIZE        NODE            AGE\npvc-7b120d60-1577-4716-be5a-62348271025a  attached  healthy               42949672960 harvester-q4vhd 4d10h\n")),(0,r.kt)("p",null,"In this example, the volume ",(0,r.kt)("inlineCode",{parentName:"p"},"pvc-7b120d60-1577-4716-be5a-62348271025a")," is active on the node ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-q4vhd"),", indicating that the engine not running on this node is redundant."),(0,r.kt)("p",null,"To make the engine inactive and trigger its automatic deletion by Longhorn, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl patch engine pvc-7b120d60-1577-4716-be5a-62348271025a-e-lcd53c57 -n longhorn-system --type=\'json\' -p=\'[{"op": "replace", "path": "/spec/active", "value": false}]\'\nengine.longhorn.io/pvc-7b120d60-1577-4716-be5a-62348271025a-e-lcd53c57 patched\n')),(0,r.kt)("p",null,"After a few seconds, you can verify the engine's status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get engine -n longhorn-system|grep pvc-7b120d60-1577-4716-be5a-62348271025a\npvc-7b120d60-1577-4716-be5a-62348271025a-e-08220b62   running  harvester-q4vhd   instance-manager-e-625d715e2f2e7065d64339f9631407c2  longhornio/longhorn-engine:v1.4.3   2d13h\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," pod should now drain successfully, allowing the upgrade to proceed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4477"},"[BUG] Upgrade (v1.1.2 -> v1.2.0-rc6) stuck in pre-drained"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"6-an-upgrade-is-stuck-in-the-upgrading-system-service-state"},"6. An upgrade is stuck in the Upgrading System Service state"),(0,r.kt)("p",null,"If you notice the upgrade is stuck in the ",(0,r.kt)("strong",{parentName:"p"},"Upgrading System Service")," state for a long period of time, you might need to investigate if the upgrade is stuck in the ",(0,r.kt)("inlineCode",{parentName:"p"},"apply-manifests")," phase."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(17196).Z,width:"1134",height:"1152"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the log of the ",(0,r.kt)("inlineCode",{parentName:"p"},"apply-manifests")," pod to see if the following messages repeat."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl -n harvester-system logs hvst-upgrade-md6wr-apply-manifests-wqslg --tail=10\nTue Sep  5 10:20:39 UTC 2023\nthere are still 1 pods in cattle-monitoring-system to be deleted\nTue Sep  5 10:20:45 UTC 2023\nthere are still 1 pods in cattle-monitoring-system to be deleted\nTue Sep  5 10:20:50 UTC 2023\nthere are still 1 pods in cattle-monitoring-system to be deleted\nTue Sep  5 10:20:55 UTC 2023\nthere are still 1 pods in cattle-monitoring-system to be deleted\nTue Sep  5 10:21:00 UTC 2023\nthere are still 1 pods in cattle-monitoring-system to be deleted\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-rancher-monitoring-prometheus-0")," pod is stuck with the status ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminating"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-monitoring-system get pods                                  \nNAME                                         READY   STATUS        RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0   0/3     Terminating   0          19d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the UID of the terminating pod with the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-monitoring-system get pod prometheus-rancher-monitoring-prometheus-0 -o jsonpath='{.metadata.uid}'\n33f43165-6faa-4648-927d-69097901471c\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get access to any node of the cluster via the console or SSH.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for the related log messages in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/agent/logs/kubelet.log")," using the pod's UID."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'E0905 10:26:18.769199   17399 reconciler.go:208] "operationExecutor.UnmountVolume failed (controllerAttachDetachEnabled true) for volume \\"pvc-7781c988-c35b-4cf8-89e6-f2907ef33603\\" (UniqueName: \\"kubernetes.io/csi/driver.longhorn.io^pvc-7781c988-c35b-4cf8-89e6-f2907ef33603\\") pod \\"33f43165-6faa-4648-927d-69097901471c\\" (UID: \\"33f43165-6faa-4648-927d-69097901471c\\") : UnmountVolume.NewUnmounter failed for volume \\"pvc-7781c988-c35b-4cf8-89e6-f2907ef33603\\" (UniqueName: \\"kubernetes.io/csi/driver.longhorn.io^pvc-7781c988-c35b-4cf8-89e6-f2907ef33603\\") pod \\"33f43165-6faa-4648-927d-69097901471c\\" (UID: \\"33f43165-6faa-4648-927d-69097901471c\\") : kubernetes.io/csi: unmounter failed to load volume data file [/var/lib/kubelet/pods/33f43165-6faa-4648-927d-69097901471c/volumes/kubernetes.io~csi/pvc-7781c988-c35b-4cf8-89e6-f2907ef33603/mount]: kubernetes.io/csi: failed to open volume data file [/var/lib/kubelet/pods/33f43165-6faa-4648-927d-69097901471c/volumes/kubernetes.io~csi/pvc-7781c988-c35b-4cf8-89e6-f2907ef33603/vol_data.json]: open /var/lib/kubelet/pods/33f43165-6faa-4648-927d-69097901471c/volumes/kubernetes.io~csi/pvc-7781c988-c35b-4cf8-89e6-f2907ef33603/vol_data.json: no such file or directory" err="UnmountVolume.NewUnmounter failed for volume \\"pvc-7781c988-c35b-4cf8-89e6-f2907ef33603\\" (UniqueName: \\"kubernetes.io/csi/driver.longhorn.io^pvc-7781c988-c35b-4cf8-89e6-f2907ef33603\\") pod \\"33f43165-6faa-4648-927d-69097901471c\\" (UID: \\"33f43165-6faa-4648-927d-69097901471c\\") : kubernetes.io/csi: unmounter failed to load volume data file [/var/lib/kubelet/pods/33f43165-6faa-4648-927d-69097901471c/volumes/kubernetes.io~csi/pvc-7781c988-c35b-4cf8-89e6-f2907ef33603/mount]: kubernetes.io/csi: failed to open volume data file [/var/lib/kubelet/pods/33f43165-6faa-4648-927d-69097901471c/volumes/kubernetes.io~csi/pvc-7781c988-c35b-4cf8-89e6-f2907ef33603/vol_data.json]: open /var/lib/kubelet/pods/33f43165-6faa-4648-927d-69097901471c/volumes/kubernetes.io~csi/pvc-7781c988-c35b-4cf8-89e6-f2907ef33603/vol_data.json: no such file or directory"\n')),(0,r.kt)("p",{parentName:"li"}," If kubelet continues to complain about the volume failing to unmount, apply the following workaround to allow the upgrade to proceed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Forcibly remove the pod stuck with the status ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminating")," with the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl delete pod prometheus-rancher-monitoring-prometheus-0 -n cattle-monitoring-system  --force\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4484"},"[BUG] The rancher-monitoring Pod stuck at terminating status when upgrading from v1.1.2 to v1.2.0-rc6"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"7-upgrade-stuck-in-the-upgrading-system-service-state"},"7. Upgrade stuck in the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Upgrading System Service")," state"),(0,r.kt)("p",null,"If an upgrade is stuck in an ",(0,r.kt)("inlineCode",{parentName:"p"},"Upgrading System Service")," state for an extended period, some system services' certificates may have expired. To investigate and resolve this issue, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the ",(0,r.kt)("inlineCode",{parentName:"p"},"apply-manifest")," job's name with the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get jobs -n harvester-system -l harvesterhci.io/upgradeComponent=manifest\n")),(0,r.kt)("p",{parentName:"li"},"Example output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"NAME                                 COMPLETIONS   DURATION   AGE\nhvst-upgrade-9gmg2-apply-manifests   0/1           46s        46s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the job's log with the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl logs jobs/hvst-upgrade-9gmg2-apply-manifests -n harvester-system\n")),(0,r.kt)("p",{parentName:"li"},"If the following messages appear in the log, continue to the next step:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Waiting for CAPI cluster fleet-local/local to be provisioned (current phase: Provisioning, current generation: 30259)...\nWaiting for CAPI cluster fleet-local/local to be provisioned (current phase: Provisioning, current generation: 30259)...\nWaiting for CAPI cluster fleet-local/local to be provisioned (current phase: Provisioning, current generation: 30259)...\nWaiting for CAPI cluster fleet-local/local to be provisioned (current phase: Provisioning, current generation: 30259)...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check CAPI cluster's state with the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get clusters.provisioning.cattle.io local -n fleet-local -o yaml\n")),(0,r.kt)("p",{parentName:"li"},"If you see a condition similar to the one below, it's likely that the cluster has encountered the issue:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    - lastUpdateTime: \"2023-01-17T16:26:48Z\"\n      message: 'configuring bootstrap node(s) custom-24cb32ce8387: waiting for probes:\n        kube-controller-manager, kube-scheduler'\n      reason: Waiting\n      status: Unknown\n      type: Updated\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the machine's hostname with the following command, and follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3863#issuecomment-1539681311"},"workaround")," to see if service certificates expire on a node:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get machines.cluster.x-k8s.io -n fleet-local <machine_name> -o yaml | yq .status.nodeRef.name\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<machine_name>")," with the machine's name from the output in the previous step."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If multiple nodes joined the cluster around the same time, you should perform the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3863#issuecomment-1539681311"},"workaround")," on all those nodes.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Related issue:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3863"},"[DOC/ENHANCEMENT] need to add cert-rotate feature, otherwise upgrade may stuck on Waiting for CAPI cluster fleet-local/local to be provisioned")))),(0,r.kt)("li",{parentName:"ul"},"Workaround:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3863#issuecomment-1539681311"},"https://github.com/harvester/harvester/issues/3863#issuecomment-1539681311"))))),(0,r.kt)("hr",null))}u.isMDXComponent=!0},37846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2894-deadline-8fbfd53960ef87f904f6a893a4a0bfcd.png"},74627:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3730-stuck-c48392f50cb65bcfe1e0e823d6696e3e.png"},59932:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/3839-error-6dc815a5f5edbb60c92750f1a65c48d6.png"},33356:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4246-pending-replica-27cff1f4b47113bcb0a5fc207ad54e61.png"},66738:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4246-pending-7c411c93a62433d215b54e21f938f3ef.png"},46584:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4246-upgrade-repo-pod-9a796ae8bfcd218dc2484f47841d8b44.png"},56155:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4249-adjust-volume-replica-4a57d4c639f7a90f40e6b22e40b7fdf3.png"},17196:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4484-apply-manifests-stuck-2731b903408d51749964176fee50985a.png"}}]);