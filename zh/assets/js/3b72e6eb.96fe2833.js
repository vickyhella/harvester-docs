"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,v=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return r?a.createElement(v,l(l({ref:t},c),{},{components:r})):a.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:17,sidebar_label:"\u5e38\u89c1\u95ee\u9898",title:"\u5e38\u89c1\u95ee\u9898"},l=void 0,o={unversionedId:"faq",id:"version-v1.1/faq",title:"\u5e38\u89c1\u95ee\u9898",description:"\u672c\u6587\u5305\u542b\u4e86\u7528\u6237\u5e38\u89c1\u7684 Harvester \u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/faq.md",sourceDirName:".",slug:"/faq",permalink:"/harvester-docs/zh/v1.1/faq",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/faq.md",tags:[],version:"v1.1",lastUpdatedAt:1696844458,formattedLastUpdatedAt:"2023\u5e7410\u67089\u65e5",sidebarPosition:17,frontMatter:{sidebar_position:17,sidebar_label:"\u5e38\u89c1\u95ee\u9898",title:"\u5e38\u89c1\u95ee\u9898"},sidebar:"docs",previous:{title:"\u76d1\u63a7",permalink:"/harvester-docs/zh/v1.1/troubleshooting/monitoring"}},i={},p=[{value:"\u5982\u4f55\u901a\u8fc7 SSH \u767b\u5f55\u5230 Harvester \u8282\u70b9\uff1f",id:"\u5982\u4f55\u901a\u8fc7-ssh-\u767b\u5f55\u5230-harvester-\u8282\u70b9",level:3},{value:"Harvester \u4eea\u8868\u76d8\u7684\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f\u4ec0\u4e48\uff1f",id:"harvester-\u4eea\u8868\u76d8\u7684\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f\u4ec0\u4e48",level:3},{value:"\u5982\u4f55\u8bbf\u95ee Harvester \u96c6\u7fa4\u7684 kubeconfig \u6587\u4ef6\uff1f",id:"\u5982\u4f55\u8bbf\u95ee-harvester-\u96c6\u7fa4\u7684-kubeconfig-\u6587\u4ef6",level:3},{value:"\u5982\u4f55\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u4e0a\u5b89\u88c5 qemu-guest-agent",id:"\u5982\u4f55\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u4e0a\u5b89\u88c5-qemu-guest-agent",level:3},{value:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801\uff1f",id:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801",level:3},{value:"\u6211\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5e26\u5206\u533a\u7684\u78c1\u76d8\u3002\u4e3a\u4ec0\u4e48\u6ca1\u6709\u88ab\u68c0\u6d4b\u5230\uff1f",id:"\u6211\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5e26\u5206\u533a\u7684\u78c1\u76d8\u4e3a\u4ec0\u4e48\u6ca1\u6709\u88ab\u68c0\u6d4b\u5230",level:3},{value:"\u4e3a\u4ec0\u4e48\u6709\u4e9b Harvester Pod \u4f1a\u53d8\u6210 ErrImagePull/ImagePullBackOff\uff1f",id:"\u4e3a\u4ec0\u4e48\u6709\u4e9b-harvester-pod-\u4f1a\u53d8\u6210-errimagepullimagepullbackoff",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u5305\u542b\u4e86\u7528\u6237\u5e38\u89c1\u7684 Harvester \u95ee\u9898\u3002"),(0,n.kt)("h3",{id:"\u5982\u4f55\u901a\u8fc7-ssh-\u767b\u5f55\u5230-harvester-\u8282\u70b9"},"\u5982\u4f55\u901a\u8fc7 SSH \u767b\u5f55\u5230 Harvester \u8282\u70b9\uff1f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh rancher@node-ip\n")),(0,n.kt)("h3",{id:"harvester-\u4eea\u8868\u76d8\u7684\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f\u4ec0\u4e48"},"Harvester \u4eea\u8868\u76d8\u7684\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f\u4ec0\u4e48\uff1f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"username: admin\npassword: # \u9996\u6b21\u767b\u5f55\u65f6\u4f1a\u63d0\u793a\u4f60\u8bbe\u7f6e\u9ed8\u8ba4\u5bc6\u7801\n")),(0,n.kt)("h3",{id:"\u5982\u4f55\u8bbf\u95ee-harvester-\u96c6\u7fa4\u7684-kubeconfig-\u6587\u4ef6"},"\u5982\u4f55\u8bbf\u95ee Harvester \u96c6\u7fa4\u7684 kubeconfig \u6587\u4ef6\uff1f"),(0,n.kt)("p",null,"\u9009\u9879 1\uff1a\u4f60\u53ef\u4ee5\u4ece Harvester \u4eea\u8868\u76d8\u7684\u652f\u6301\u9875\u9762\u4e0b\u8f7d kubeconfig \u6587\u4ef6\u3002\n",(0,n.kt)("img",{alt:"harvester-kubeconfig.png",src:r(66859).Z,width:"2866",height:"1246"})),(0,n.kt)("p",null,"\u9009\u9879 2\uff1a\u4f60\u53ef\u4ee5\u4ece\u5176\u4e2d\u4e00\u4e2a Harvester \u7ba1\u7406\u8282\u70b9\u83b7\u53d6 kubeconfig \u6587\u4ef6\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo su\n$ cat /etc/rancher/rke2/rke2.yaml\n")),(0,n.kt)("h3",{id:"\u5982\u4f55\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u4e0a\u5b89\u88c5-qemu-guest-agent"},"\u5982\u4f55\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u4e0a\u5b89\u88c5 qemu-guest-agent"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# cloud-init \u53ea\u4f1a\u6267\u884c\u4e00\u6b21\u3002\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6dfb\u52a0 cloud-init \u914d\u7f6e\u540e\u8bf7\u91cd\u65b0\u542f\u52a8\u5b83\u3002\n$ cloud-init clean --logs --reboot\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean"},"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean")),(0,n.kt)("h3",{id:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801"},"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801\uff1f"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5fd8\u8bb0\u4e86\u7ba1\u7406\u5458\u5bc6\u7801\uff0c\u8bf7\u901a\u8fc7\u547d\u4ee4\u884c\u8fdb\u884c\u91cd\u7f6e\u3002SSH \u5230\u5176\u4e2d\u4e00\u4e2a\u7ba1\u7406\u8282\u70b9\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5207\u6362\u5230 root \u5e76\u8fd0\u884c\uff1a\n$ kubectl  -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher --no-headers | head -1 | awk '{ print $1 }') -c rancher -- reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,n.kt)("h3",{id:"\u6211\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5e26\u5206\u533a\u7684\u78c1\u76d8\u4e3a\u4ec0\u4e48\u6ca1\u6709\u88ab\u68c0\u6d4b\u5230"},"\u6211\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5e26\u5206\u533a\u7684\u78c1\u76d8\u3002\u4e3a\u4ec0\u4e48\u6ca1\u6709\u88ab\u68c0\u6d4b\u5230\uff1f"),(0,n.kt)("p",null,"\u4ece Harvester v1.0.2 \u5f00\u59cb\uff0c\u6211\u4eec\u4e0d\u518d\u652f\u6301\u6dfb\u52a0\u5176\u4ed6\u5206\u533a\u78c1\u76d8\uff0c\u56e0\u6b64\u8bf7\u52a1\u5fc5\u5148\u5220\u9664\u6240\u6709\u5206\u533a\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"fdisk"),"\uff09\u3002"),(0,n.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u6709\u4e9b-harvester-pod-\u4f1a\u53d8\u6210-errimagepullimagepullbackoff"},"\u4e3a\u4ec0\u4e48\u6709\u4e9b Harvester Pod \u4f1a\u53d8\u6210 ErrImagePull/ImagePullBackOff\uff1f"),(0,n.kt)("p",null,"\u53ef\u80fd\u662f\u56e0\u4e3a\u4f60\u7684 Harvester \u96c6\u7fa4\u662f\u79bb\u7ebf\u7684\uff0c\u5e76\u4e14\u7f3a\u5c11\u67d0\u4e9b\u9884\u52a0\u8f7d\u7684\u5bb9\u5668\u955c\u50cf\u3002Kubernetes \u6709\u53ef\u4ee5\u5bf9\u81a8\u80c0\u955c\u50cf\u5b58\u50a8\u8fdb\u884c\u5783\u573e\u6536\u96c6\u7684\u673a\u5236\u3002\u5f53\u5b58\u50a8\u5bb9\u5668\u955c\u50cf\u7684\u5206\u533a\u5b58\u50a8\u8d85\u8fc7 85% \u65f6\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"kubelet")," \u4f1a\u5c1d\u8bd5\u6839\u636e\u4e0a\u6b21\u4f7f\u7528\u955c\u50cf\u7684\u65f6\u95f4\u6765\u4fee\u526a\u955c\u50cf\uff08\u4ece\u6700\u65e7\u7684\u955c\u50cf\u5f00\u59cb\uff09\uff0c\u76f4\u5230\u5360\u7528\u7387\u518d\u6b21\u4f4e\u4e8e 80%\u3002\u8fd9\u4e9b\u6570\u5b57\uff0885%/80%\uff09\u662f Kubernetes \u7684\u9ed8\u8ba4\u9ad8/\u4f4e\u9608\u503c\u3002"),(0,n.kt)("p",null,"\u8981\u4ece\u6b64\u72b6\u6001\u6062\u590d\uff0c\u8bf7\u6839\u636e\u96c6\u7fa4\u7684\u914d\u7f6e\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u4e00\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4ece\u96c6\u7fa4\u5916\u90e8\u7684\u6e90\u4e2d\u62c9\u53d6\u4e22\u5931\u7684\u955c\u50cf\uff08\u5982\u679c\u662f\u79bb\u7ebf\u73af\u5883\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4e8b\u5148\u8bbe\u7f6e HTTP \u4ee3\u7406\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u624b\u52a8\u4ece Harvester ISO \u955c\u50cf\u5bfc\u5165\u955c\u50cf\u3002")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4ee5 v1.1.2 \u4e3a\u4f8b\uff0c\u4ece\u5b98\u65b9\u7f51\u5740\u4e0b\u8f7d Harvester ISO \u955c\u50cf\u3002\u7136\u540e\u4ece ISO \u955c\u50cf\u4e2d\u63d0\u53d6\u955c\u50cf\u5217\u8868\uff0c\u4ece\u800c\u51b3\u5b9a\u6211\u4eec\u8981\u5bfc\u5165\u54ea\u4e2a\u955c\u50cf tarball\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8981\u5bfc\u5165\u7f3a\u5c11\u7684\u5bb9\u5668\u955c\u50cf ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher/harvester-upgrade"),"\uff1a"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -sfL https://releases.rancher.com/harvester/v1.1.2/harvester-v1.1.2-amd64.iso -o harvester.iso\n\n$ xorriso -osirrox on -indev harvester.iso -extract /bundle/harvester/images-lists images-lists\n\n$ grep -R "rancher/harvester-upgrade" images-lists/\nimages-lists/harvester-images-v1.1.2.txt:docker.io/rancher/harvester-upgrade:v1.1.2\n')),(0,n.kt)("p",{parentName:"admonition"},"\u627e\u51fa\u955c\u50cf tarball \u7684\u4f4d\u7f6e\uff0c\u5e76\u5c06\u5176\u4ece ISO \u955c\u50cf\u4e2d\u63d0\u53d6\u3002\u89e3\u538b\u7f29\u63d0\u53d6\u7684 zstd \u955c\u50cf tarball\u3002"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ xorriso -osirrox on -indev harvester.iso -extract /bundle/harvester/images/harvester-images-v1.1.2.tar.zst harvester.tar.zst\n\n$ zstd -d --rm harvester.tar.zst\n")),(0,n.kt)("p",{parentName:"admonition"},"\u5c06\u955c\u50cf tarball \u4e0a\u4f20\u5230\u9700\u8981\u6062\u590d\u7684 Harvester \u8282\u70b9\u3002\u6700\u540e\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u5bfc\u5165\u5bb9\u5668\u955c\u50cf\u3002"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ ctr -n k8s.io images import harvester.tar\n$ rm harvester.tar\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003\u5176\u4ed6\u8282\u70b9\u627e\u5230\u8be5\u8282\u70b9\u4e22\u5931\u7684\u955c\u50cf\uff0c\u7136\u540e\u4ece\u4ecd\u5177\u6709\u8be5\u955c\u50cf\u7684\u8282\u70b9\u5bfc\u51fa\u955c\u50cf\uff0c\u5e76\u5c06\u955c\u50cf\u5bfc\u5165\u5230\u4e22\u5931\u955c\u50cf\u7684\u8282\u70b9\u4e0a\u3002")),(0,n.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u8fd9\u79cd\u60c5\u51b5\u53d1\u751f\uff0c\u5982\u679c\u955c\u50cf\u5b58\u50a8\u78c1\u76d8\u7a7a\u95f4\u7d27\u5f20\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u6bcf\u6b21\u6210\u529f\u5347\u7ea7 Harvester \u540e\u6e05\u7406\u4ee5\u524d\u7248\u672c\u4e2d\u672a\u4f7f\u7528\u7684\u5bb9\u5668\u955c\u50cf\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/blob/main/bin/harv-purge-images.sh"},"harv-purge-images \u811a\u672c"),"\uff0c\u53ef\u7528\u4e8e\u8f7b\u677e\u6e05\u7406\u78c1\u76d8\u7a7a\u95f4\uff0c\u7279\u522b\u5bb9\u5668\u955c\u50cf\u5b58\u50a8\u3002\u8be5\u811a\u672c\u5fc5\u987b\u5728\u6bcf\u4e2a Harvester \u8282\u70b9\u4e0a\u6267\u884c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u539f\u6765\u662f v1.1.1 \u7684\u96c6\u7fa4\u73b0\u5728\u5347\u7ea7\u5230\u4e86 v1.1.2\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u6765\u4e22\u5f03\u4ec5\u5728 v1.1.1 \u4e2d\u4f7f\u7528\u4f46\u5728 v1.1.2 \u4e2d\u4e0d\u518d\u9700\u8981\u7684\u5bb9\u5668\u955c\u50cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\uff1a\n$ ./harv-purge-images.sh v1.1.1 v1.1.2\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u8be5\u811a\u672c\u4ec5\u4e0b\u8f7d\u955c\u50cf\u5217\u8868\u5e76\u6bd4\u8f83\u4e24\u8005\u4ee5\u8ba1\u7b97\u4e24\u4e2a\u7248\u672c\u4e4b\u95f4\u7684\u5dee\u5f02\u3002\u5b83\u4e0d\u4e0e\u96c6\u7fa4\u901a\u4fe1\uff0c\u56e0\u6b64\u4e0d\u77e5\u9053\u96c6\u7fa4\u662f\u4ece\u54ea\u4e2a\u7248\u672c\u5347\u7ea7\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53d1\u5e03\u4e86\u81ea v1.1.0 \u4ee5\u6765\u6bcf\u4e2a\u7248\u672c\u7684\u955c\u50cf\u5217\u8868\u3002\u5bf9\u4e8e v1.1.0 \u4e4b\u524d\u7684\u96c6\u7fa4\uff0c\u4f60\u9700\u8981\u624b\u52a8\u6e05\u7406\u65e7\u955c\u50cf\u3002"))))}d.isMDXComponent=!0},66859:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harvester-kubeconfig-766a36ec753411c89d93b986cb5b9cdb.png"}}]);