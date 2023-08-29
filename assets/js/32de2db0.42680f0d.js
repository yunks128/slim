"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[150],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3111:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="Change Log",l={unversionedId:"guides/documentation/change-log/README",id:"guides/documentation/change-log/README",title:"Change Log",description:"A change log provides a human readable list of significant changes, additions, deprecations, removals for software over time. It is meant to be able to be read by people. Change logs should be documented within a file called CHANGELOG.md and be updated per key release. See semantic release for guidance on releasing cycles and versioning of your software.",source:"@site/docs/guides/documentation/change-log/README.md",sourceDirName:"guides/documentation/change-log",slug:"/guides/documentation/change-log/",permalink:"/slim/docs/guides/documentation/change-log/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/documentation/change-log/README.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Documentation",permalink:"/slim/docs/category/documentation"},next:{title:"Documentation Hosts",permalink:"/slim/docs/guides/documentation/documentation-hosts/"}},s={},c=[{value:"Keep a Changelog",id:"keep-a-changelog",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"change-log"},"Change Log"),(0,r.kt)("p",null,"A change log provides a ",(0,r.kt)("em",{parentName:"p"},"human readable")," list of significant changes, additions, deprecations, removals for software over time. It is meant to be able to be read by ",(0,r.kt)("em",{parentName:"p"},"people"),". Change logs should be documented within a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," and be updated per key release. See ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org"},"semantic release")," for guidance on releasing cycles and versioning of your software. "),(0,r.kt)("p",null,"\u26a0\ufe0f A ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," can replicate wording from a releases page (e.g. GitHub Releases), but should not be left out ",(0,r.kt)("em",{parentName:"p"},"in place of")," a releases page. Down-stream inheritors of your software may not have access to your releases page, and will expect a ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," to be present as part of your software distribution."),(0,r.kt)("h2",{id:"keep-a-changelog"},"Keep a Changelog"),(0,r.kt)("p",null,"This change log standard seeks to provide a template for ",(0,r.kt)("em",{parentName:"p"},"human readable")," change logs, among other key guidance on the change logging process."),(0,r.kt)("p",null,"Starter Kit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://keepachangelog.com/en/1.0.0/#how"},"Guidance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/riverma/terraformly/blob/main/CHANGELOG.md"},"Demo 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/olivierlacan/keep-a-changelog/blob/main/CHANGELOG.md"},"Demo 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://keepachangelog.com/en/1.0.0/"},"Webpage"))),(0,r.kt)("p",null,"To leverage this template, make sure to do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Talk with your team about leveraging this template, and seek wide agreement before you adopt"),(0,r.kt)("li",{parentName:"ol"},"Copy the demo ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," above, and place in a file within your repository called ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," "),(0,r.kt)("li",{parentName:"ol"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," file with your specific release information. If you have many historic releases prior to the creation of this file, mark the latest release as the first entry, and commit to updating this for future releases as the happen."),(0,r.kt)("li",{parentName:"ol"},"Add an entry to your ",(0,r.kt)("inlineCode",{parentName:"li"},"README.md")," under the ",(0,r.kt)("inlineCode",{parentName:"li"},"Changelog")," section to point to your ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," file.")))}d.isMDXComponent=!0}}]);