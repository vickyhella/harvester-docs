"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4976],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,u=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return t?r.createElement(u,a(a({ref:n},m),{},{components:t})):r.createElement(u,a({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={sidebar_position:4,sidebar_label:"\u76d1\u63a7",title:""},a="\u76d1\u63a7",c={unversionedId:"troubleshooting/monitoring",id:"version-v1.0/troubleshooting/monitoring",title:"",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5bf9 Harvester Monitoring \u8fdb\u884c\u6545\u969c\u6392\u9664\u7684\u63d0\u793a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/troubleshooting/monitoring.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/monitoring",permalink:"/zh/v1.0/troubleshooting/monitoring",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/troubleshooting/monitoring.md",tags:[],version:"v1.0",lastUpdatedAt:1664266430,formattedLastUpdatedAt:"2022\u5e749\u670827\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u76d1\u63a7",title:""},sidebar:"tutorialSidebar",previous:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/zh/v1.0/troubleshooting/os"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/v1.0/faq"}},s={},l=[{value:"Monitoring \u4e0d\u53ef\u7528",id:"monitoring-\u4e0d\u53ef\u7528",level:2},{value:"Pod \u5361\u5728 <code>Terminating</code> \u72b6\u6001\u5bfc\u81f4 Monitoring \u65e0\u6cd5\u4f7f\u7528",id:"pod-\u5361\u5728-terminating-\u72b6\u6001\u5bfc\u81f4-monitoring-\u65e0\u6cd5\u4f7f\u7528",level:3}],m={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u76d1\u63a7"},"\u76d1\u63a7"),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5bf9 Harvester Monitoring \u8fdb\u884c\u6545\u969c\u6392\u9664\u7684\u63d0\u793a\u3002"),(0,o.kt)("h2",{id:"monitoring-\u4e0d\u53ef\u7528"},"Monitoring \u4e0d\u53ef\u7528"),(0,o.kt)("p",null,"\u5982\u679c Harvester Dashboard \u6ca1\u6709\u663e\u793a\u4efb\u4f55\u76d1\u63a7\u6307\u6807\uff0c\u53ef\u80fd\u539f\u56e0\u5982\u4e0b\u3002"),(0,o.kt)("h3",{id:"pod-\u5361\u5728-terminating-\u72b6\u6001\u5bfc\u81f4-monitoring-\u65e0\u6cd5\u4f7f\u7528"},"Pod \u5361\u5728 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Terminating")," \u72b6\u6001\u5bfc\u81f4 Monitoring \u65e0\u6cd5\u4f7f\u7528"),(0,o.kt)("p",null,"Harvester Monitoring pod \u968f\u673a\u90e8\u7f72\u5728\u96c6\u7fa4\u8282\u70b9\u4e0a\u3002\u5f53\u6258\u7ba1 Pod \u7684\u8282\u70b9\u610f\u5916\u5b95\u673a\u65f6\uff0c\u76f8\u5173\u7684 Pod \u53ef\u80fd\u4f1a\u5361\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminating")," \u72b6\u6001\uff0c\u5bfc\u81f4 WebUI \u65e0\u6cd5\u4f7f\u7528 Monitoring\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n cattle-monitoring-system\n\nNAMESPACE                   NAME                                                     READY   STATUS        RESTARTS   AGE\ncattle-monitoring-system    prometheus-rancher-monitoring-prometheus-0               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-admission-create-fwjn9                0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-crd-create-9wtzf                      0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-ph4nz               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-t24sz               0/3     Init:0/2      0          132m\n\ncattle-monitoring-system    rancher-monitoring-kube-state-metrics-5bc8bb48bd-nbd92   1/1     Running       4          4d1h\n...\n\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 CLI \u547d\u4ee4\u5f3a\u5236\u5220\u9664\u76f8\u5173 Pod \u6765\u6062\u590d\u76d1\u63a7\u3002\u96c6\u7fa4\u5c06\u91cd\u65b0\u90e8\u7f72\u65b0\u7684 Pod \u6765\u66ff\u6362\u5b83\u4eec\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5220\u9664\u547d\u540d\u7a7a\u95f4 cattle-monitoring-system \u4e2d\u6240\u6709\u672a\u8fd0\u884c\u7684 Pod\u3002\n\n$ kubectl delete pod --force -n cattle-monitoring-system prometheus-rancher-monitoring-prometheus-0\n\n pod "prometheus-rancher-monitoring-prometheus-0" force deleted\n\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-admission-create-fwjn9\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-crd-create-9wtzf\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-ph4nz\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-t24sz\n')),(0,o.kt)("p",null,"\u7b49\u5f85\u51e0\u5206\u949f\uff0c\u4ee5\u4fbf\u521b\u5efa\u65b0\u7684 Pod \u5e76\u51c6\u5907\u597d\u8ba9 Monitoring \u4eea\u8868\u677f\u518d\u6b21\u53ef\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get pods -n cattle-monitoring-system\n\nNAME                                                     READY   STATUS     RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               0/3     Init:0/1   0          98s\nrancher-monitoring-grafana-d9c56d79b-cp86w               0/3     Init:0/2   0          27s\n...\n\n$ kubectl get pods -n cattle-monitoring-system\n\nNAME                                                     READY   STATUS    RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               3/3     Running   0          7m57s\nrancher-monitoring-grafana-d9c56d79b-cp86w               3/3     Running   0          6m46s\n...\n\n")))}d.isMDXComponent=!0}}]);