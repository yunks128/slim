"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},o="Change Log",l={unversionedId:"guides/documentation/change-log/README",id:"guides/documentation/change-log/README",title:"Change Log",description:"A guide for setting up a log to document software changes in a human-centric format.",source:"@site/docs/guides/documentation/change-log/README.md",sourceDirName:"guides/documentation/change-log",slug:"/guides/documentation/change-log/",permalink:"/slim/docs/guides/documentation/change-log/",draft:!1,editUrl:"https://github.com/nasa-ammos/slim/tree/main/docs/guides/documentation/change-log/README.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"\ud83d\udcac Information Sharing",permalink:"/slim/docs/category/-information-sharing"},next:{title:"Documentation Hosting",permalink:"/slim/docs/guides/documentation/documentation-hosts/"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Frequently Asked Questions (FAQ)",id:"frequently-asked-questions-faq",level:2},{value:"Credits",id:"credits",level:2},{value:"Feedback and Contributions",id:"feedback-and-contributions",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"change-log"},"Change Log"),(0,r.kt)("pre",{align:"center"},"A guide for setting up a log to document software changes in a human-centric format."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"changelog-screenshot-example",src:n(708).Z,width:"800",height:"297"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example CHANGELOG.md template rendering")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Background"),": A change log is a vital tool for documenting significant changes in software over time in a format accessible to humans. It plays a critical role in conveying the evolution of software, including additions, deprecations, and removals. This guide outlines the best practices for maintaining a ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," file, complementing release pages and enhancing software distribution transparency."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Cases"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Documenting software changes for easy understanding and tracking."),(0,r.kt)("li",{parentName:"ul"},"Enhancing transparency in software development and release cycles."),(0,r.kt)("li",{parentName:"ul"},"Storing the history of significant changes independent of code hosts like GitHub.com")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Familiarity with semantic versioning and release cycles."),(0,r.kt)("li",{parentName:"ul"},"Basic knowledge of Markdown formatting.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://keepachangelog.com/en/1.0.0/#how"},"\u2b07\ufe0f Keep a Changelog"))," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/riverma/terraformly/blob/main/CHANGELOG.md"},"see example"),")"),(0,r.kt)("p",null,"Download a template for creating a human-readable change log for your software project."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Team Agreement"),": Discuss the importance of a change log with your team, emphasizing its value for transparency and communication."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Creating the Change Log"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Start a ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," in your repository."),(0,r.kt)("li",{parentName:"ul"},"See demo use of the templates like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/riverma/terraformly/blob/main/CHANGELOG.md"},"Demo 1")," or ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olivierlacan/keep-a-changelog/blob/main/CHANGELOG.md"},"Demo 2")," as a base."),(0,r.kt)("li",{parentName:"ul"},"Customize the file with your project's release information."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Integrating with Project Documentation"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Link to the ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," from your project\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"README.md")," to enhance visibility.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"frequently-asked-questions-faq"},"Frequently Asked Questions (FAQ)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Q: Why is a ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," crucial even if there's a GitHub auto-generated release changes page?"),(0,r.kt)("li",{parentName:"ul"},"A: It ensures future-proof accessibility of change information, especially for users who may not have access to the project's release page or if the software has changed hands. Moreover, its meant to be feature-centric and designed for people to understand, rather than GitHub's commit-oriented change reports. ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"credits"},"Credits"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authorship"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/riverma"},"Rishi Verma"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Acknowledgements"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This guide draws from the ",(0,r.kt)("a",{parentName:"li",href:"https://keepachangelog.com"},'"Keep a Changelog"')," standard and examples from various open source projects.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"feedback-and-contributions"},"Feedback and Contributions"),(0,r.kt)("p",null,"Feedback and contributions are encouraged to refine this guide. See our ",(0,r.kt)("a",{parentName:"p",href:"https://nasa-ammos.github.io/slim/docs/contribute/contributing/"},"contribution guidelines"),"."))}m.isMDXComponent=!0},708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/changelog-screen-be38dc73eaa1e0a46b353e9a10526a7a.png"}}]);