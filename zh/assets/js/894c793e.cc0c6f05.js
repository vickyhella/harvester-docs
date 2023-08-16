"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7340],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),v=l(t),d=a,f=v["".concat(p,".").concat(d)]||v[d]||c[d]||o;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=v;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},6347:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:3,sidebar_label:"\u4ece v1.0.1 \u5347\u7ea7\u5230 v1.0.2",title:"\u4ece v1.0.1 \u5347\u7ea7\u5230 v1.0.2"},s=void 0,i={unversionedId:"upgrade/previous-releases/v1-0-1-to-v1-0-2",id:"upgrade/previous-releases/v1-0-1-to-v1-0-2",title:"\u4ece v1.0.1 \u5347\u7ea7\u5230 v1.0.2",description:"\u901a\u7528\u4fe1\u606f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrade/previous-releases/v1-0-1-to-v1-0-2.md",sourceDirName:"upgrade/previous-releases",slug:"/upgrade/previous-releases/v1-0-1-to-v1-0-2",permalink:"/harvester-docs/zh/dev/upgrade/previous-releases/v1-0-1-to-v1-0-2",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/previous-releases/v1-0-1-to-v1-0-2.md",tags:[],version:"current",lastUpdatedAt:1669906602,formattedLastUpdatedAt:"2022\u5e7412\u67081\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u4ece v1.0.1 \u5347\u7ea7\u5230 v1.0.2",title:"\u4ece v1.0.1 \u5347\u7ea7\u5230 v1.0.2"},sidebar:"tutorialSidebar",previous:{title:"\u4ece v1.0.2 \u5347\u7ea7\u5230 v1.0.3",permalink:"/harvester-docs/zh/dev/upgrade/previous-releases/v1-0-2-to-v1-0-3"},next:{title:"\u4ece v1.0.0 \u5347\u7ea7\u5230 v1.0.1",permalink:"/harvester-docs/zh/dev/upgrade/previous-releases/v1-0-0-to-v1-0-1"}},p={},l=[{value:"\u901a\u7528\u4fe1\u606f",id:"\u901a\u7528\u4fe1\u606f",level:2},{value:"\u5df2\u77e5\u95ee\u9898",id:"\u5df2\u77e5\u95ee\u9898",level:2}],u={toc:l};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u901a\u7528\u4fe1\u606f"},"\u901a\u7528\u4fe1\u606f"),(0,a.kt)("p",null,"Harvester GUI Dashboard \u9875\u9762\u6709\u4e00\u4e2a\u5347\u7ea7\u6309\u94ae\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/upgrade/automatic#%E5%BC%80%E5%A7%8B%E5%8D%87%E7%BA%A7"},"\u5f00\u59cb\u5347\u7ea7"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u79bb\u7ebf\u73af\u5883\u5347\u7ea7\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/upgrade/automatic#%E5%87%86%E5%A4%87%E7%A6%BB%E7%BA%BF%E5%8D%87%E7%BA%A7"},"\u51c6\u5907\u79bb\u7ebf\u5347\u7ea7"),"\u3002"),(0,a.kt)("h2",{id:"\u5df2\u77e5\u95ee\u9898"},"\u5df2\u77e5\u95ee\u9898"),(0,a.kt)("p",null,"\u8bf7\u5728\u6b64\u5904\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/harvester-docs/zh/dev/upgrade/previous-releases/v1-0-0-to-v1-0-1#%E5%B7%B2%E7%9F%A5%E9%97%AE%E9%A2%98"},"\u5df2\u77e5\u95ee\u9898"),"\u3002"))}c.isMDXComponent=!0}}]);