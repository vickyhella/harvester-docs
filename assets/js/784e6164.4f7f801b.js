"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2675],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:5,sidebar_label:"VM Backup, Snapshot & Restore",title:"VM Backup, Snapshot & Restore",keywords:["Harvester","harvester","Rancher","rancher","VM Backup, Snapshot & Restore"],Description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM. VM Snapshot can work without Backup Target."},i=void 0,s={unversionedId:"vm/backup-restore",id:"version-v1.1/vm/backup-restore",title:"VM Backup, Snapshot & Restore",description:"VM Backup & Restore",source:"@site/versioned_docs/version-v1.1/vm/backup-restore.md",sourceDirName:"vm",slug:"/vm/backup-restore",permalink:"/v1.1/vm/backup-restore",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/vm/backup-restore.md",tags:[],version:"v1.1",lastUpdatedAt:1672296666,formattedLastUpdatedAt:"Dec 29, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"VM Backup, Snapshot & Restore",title:"VM Backup, Snapshot & Restore",keywords:["Harvester","harvester","Rancher","rancher","VM Backup, Snapshot & Restore"],Description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM. VM Snapshot can work without Backup Target."},sidebar:"tutorialSidebar",previous:{title:"Access to the Virtual Machine",permalink:"/v1.1/vm/access-to-the-vm"},next:{title:"Live Migration",permalink:"/v1.1/vm/live-migration"}},l={},p=[{value:"VM Backup &amp; Restore",id:"vm-backup--restore",level:2},{value:"Configure Backup Target",id:"configure-backup-target",level:3},{value:"Create a VM backup",id:"create-a-vm-backup",level:3},{value:"Restore a new VM using a backup",id:"restore-a-new-vm-using-a-backup",level:3},{value:"Replace an existing VM using a backup",id:"replace-an-existing-vm-using-a-backup",level:3},{value:"Restore a new VM on another Harvester cluster",id:"restore-a-new-vm-on-another-harvester-cluster",level:3},{value:"Upload the same VM images to a new cluster",id:"upload-the-same-vm-images-to-a-new-cluster",level:4},{value:"Restore a new VM in a new cluster",id:"restore-a-new-vm-in-a-new-cluster",level:4},{value:"VM Snapshot &amp; Restore",id:"vm-snapshot--restore",level:2},{value:"Create a VM snapshot",id:"create-a-vm-snapshot",level:3},{value:"Restore a new VM using a snapshot",id:"restore-a-new-vm-using-a-snapshot",level:3},{value:"Replace an existing VM using a snapshot",id:"replace-an-existing-vm-using-a-snapshot",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vm-backup--restore"},"VM Backup & Restore"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,r.kt)("p",null,"VM backups are created from the ",(0,r.kt)("strong",{parentName:"p"},"Virtual Machines")," page. The VM backup volumes will be stored in the ",(0,r.kt)("strong",{parentName:"p"},"Backup Target")," (an NFS or S3 server), and they can be used to either restore a new VM or replace an existing VM.\n",(0,r.kt)("img",{alt:"vm-backup.png",src:a(3821).Z,width:"2560",height:"1200"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A backup target must be set up. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"#configure-backup-target"},"Configure Backup Target"),". If the backup target has not been set, you\u2019ll be prompted with a message to do so.")),(0,r.kt)("h3",{id:"configure-backup-target"},"Configure Backup Target"),(0,r.kt)("p",null,"A backup target is an endpoint used to access a backup store in Harvester. A backup store is an NFS server or S3 compatible server that stores the backups of VM volumes. The backup target can be set at ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > backup-target"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose S3 or NFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A hostname or an IP address. It can be left empty for AWS S3.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BucketName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BucketRegion"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Region of the bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AccessKeyID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A user-id that uniquely identifies your account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SecretAccessKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The password to your account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Certificate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Paste to use a self-signed SSL certificate of your S3 server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"VirtualHostedStyle"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"VirtualHostedStyle")," access only; e.g., Alibaba Cloud (Aliyun) OSS")))),(0,r.kt)("h3",{id:"create-a-vm-backup"},"Create a VM backup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Once the backup target is set, go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Take Backup")," of the VM actions to create a new VM backup."),(0,r.kt)("li",{parentName:"ol"},"Set a custom backup name and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM backup.\n",(0,r.kt)("img",{alt:"create-backup.png",src:a(87726).Z,width:"4232",height:"2080"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The backup is created. You will receive a notification message, and you can also go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Backup & Snapshot > VM Backups")," page to view all VM backups."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadyToUse")," status will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," once the backup is complete."),(0,r.kt)("p",null,"Users can either restore a new VM or replace an existing VM using this backup."),(0,r.kt)("h3",{id:"restore-a-new-vm-using-a-backup"},"Restore a new VM using a backup"),(0,r.kt)("p",null,"To restore a new VM from a backup, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Backups")," page."),(0,r.kt)("li",{parentName:"ol"},"Specify the new VM name and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"A new VM will be restored using the backup volumes and metadata, and you can access it from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,r.kt)("img",{alt:"restore-vm.png",src:a(69732).Z,width:"2560",height:"1400"}))),(0,r.kt)("h3",{id:"replace-an-existing-vm-using-a-backup"},"Replace an existing VM using a backup"),(0,r.kt)("p",null,"You can replace an existing VM using the backup with the same VM backup target."),(0,r.kt)("p",null,"You can choose to either delete or retain the previous volumes. By default, all previous volumes are deleted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements:")," The VM must exist and is required to be in the powered-off status."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Backups")," page."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Replace Existing"),".")),(0,r.kt)("p",null,"The restore process can be viewed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual Machines")," page."),(0,r.kt)("h3",{id:"restore-a-new-vm-on-another-harvester-cluster"},"Restore a new VM on another Harvester cluster"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.0.0")),(0,r.kt)("p",null,"Users can now restore a new VM on another cluster by leveraging the VM metadata & content backup feature."),(0,r.kt)("admonition",{title:"prerequisites",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You must manually configure the virtual machine images with the same name on the new cluster first, otherwise the virtual machines will be failed to recover.")),(0,r.kt)("h4",{id:"upload-the-same-vm-images-to-a-new-cluster"},"Upload the same VM images to a new cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check the existing image name (normally starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"image-"),") and create the same one on the new cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get vmimages -A\nNAMESPACE   NAME                               DISPLAY-NAME                              SIZE         AGE\ndefault     image-79hdq                        focal-server-cloudimg-amd64.img           566886400    5h36m\ndefault     image-l7924                        harvester-v1.0.0-rc2-amd64.iso            3964551168   137m\ndefault     image-lvqxn                        opensuse-leap-15.3.x86_64-nocloud.qcow2   568524800    5h35m\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Apply a VM image YAML with the same name and content in the new cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ cat <<EOF | kubectl apply -f -\napiVersion: harvesterhci.io/v1beta1\nkind: VirtualMachineImage\nmetadata:\n  name: image-lvqxn\n  namespace: default\nspec:\n  displayName: opensuse-leap-15.3.x86_64-nocloud.qcow2\n  pvcName: ""\n  pvcNamespace: ""\n  sourceType: download\n  url: http://download.opensuse.org/repositories/Cloud:/Images:/Leap_15.3/images/openSUSE-Leap-15.3.x86_64-NoCloud.qcow2\nEOF\n')),(0,r.kt)("h4",{id:"restore-a-new-vm-in-a-new-cluster"},"Restore a new VM in a new cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setup the same backup target in a new cluster. And the backup controller will automatically sync the backup metadata to the new cluster."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Backups")," page."),(0,r.kt)("li",{parentName:"ol"},"Select the synced VM backup metadata and choose to restore a new VM with a specified VM name."),(0,r.kt)("li",{parentName:"ol"},"A new VM will be restored using the backup volumes and metadata. You can access it from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.")),(0,r.kt)("h2",{id:"vm-snapshot--restore"},"VM Snapshot & Restore"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,r.kt)("p",null,"VM snapshots are created from the ",(0,r.kt)("strong",{parentName:"p"},"Virtual Machines")," page. The VM snapshot volumes will be stored in the cluster, and they can be used to either restore a new VM or replace an existing VM.\n",(0,r.kt)("img",{alt:"vm-snapshot.png",src:a(93670).Z,width:"2560",height:"1160"})),(0,r.kt)("h3",{id:"create-a-vm-snapshot"},"Create a VM snapshot"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Take VM Snapshot")," of the VM actions to create a new VM snapshot."),(0,r.kt)("li",{parentName:"ol"},"Set a custom snapshot name and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM snapshot.\n",(0,r.kt)("img",{alt:"create-snapshot.png",src:a(55931).Z,width:"2558",height:"1276"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The snapshot is created. You can also go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Backup & Snapshot > VM Snapshots")," page to view all VM snapshots."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadyToUse")," status will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," once the snapshot is complete."),(0,r.kt)("p",null,"Users can either restore a new VM or replace an existing VM using this snapshot."),(0,r.kt)("h3",{id:"restore-a-new-vm-using-a-snapshot"},"Restore a new VM using a snapshot"),(0,r.kt)("p",null,"To restore a new VM from a snapshot, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Snapshots")," page."),(0,r.kt)("li",{parentName:"ol"},"Specify the new VM name and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"A new VM will be restored using the snapshot volumes and metadata, and you can access it from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,r.kt)("img",{alt:"restore-vm-snapshot.png",src:a(43085).Z,width:"2560",height:"1398"}))),(0,r.kt)("h3",{id:"replace-an-existing-vm-using-a-snapshot"},"Replace an existing VM using a snapshot"),(0,r.kt)("p",null,"You can replace an existing VM using the snapshot."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can only choose to retain the previous volumes.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"VM Snapshots")," page."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Replace Existing"),".")),(0,r.kt)("p",null,"The restore process can be viewed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual Machines")," page."))}u.isMDXComponent=!0},87726:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-backup-8533bf901f53858ff667e9d6f095fa02.png"},55931:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-snapshot-1ec69bb2f7c0c21d187f889b40686dc9.png"},43085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-snapshot-82e23610c43dcd363db52d7f39d159bd.png"},69732:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-e2e76cf3c514c73d5e2deaf2b9f20c77.png"},3821:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-backup-222f8a51fa815826979b6e4fa0329856.png"},93670:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-snapshot-01b716f8a3f41c05fb54e3ccd4e753e8.png"}}]);