"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2608],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),p=r,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={},a=void 0,s={unversionedId:"guides/governance/governance-model/GOVERNANCE-TEMPLATE",id:"guides/governance/governance-model/GOVERNANCE-TEMPLATE",title:"GOVERNANCE-TEMPLATE",description:"",source:"@site/docs/guides/governance/governance-model/GOVERNANCE-TEMPLATE.md",sourceDirName:"guides/governance/governance-model",slug:"/guides/governance/governance-model/GOVERNANCE-TEMPLATE",permalink:"/slim/docs/guides/governance/governance-model/GOVERNANCE-TEMPLATE",draft:!1,editUrl:"https://github.com/nasa-ammos/slim/tree/main/docs/guides/governance/governance-model/GOVERNANCE-TEMPLATE.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Governance Model",permalink:"/slim/docs/guides/governance/governance-model/"},next:{title:"Documentation",permalink:"/slim/docs/category/documentation"}},c={},l=[],d={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"# [INSERT PROJECT NAME] Project Governance\n\nThis governance model aims to create an open source community that encourages transparency, contributions, and collaboration, but maintains sound technical and quality standards. Our goal is to build a community comprised of members across the [INSERT PROJECT DOMAIN] community and beyond, including from private organizations, universities, government organizations, and international organizations. \n\nThe project follows a fairly liberal contribution model where people and/or organizations who do the most work will have the most influence on project direction. Roles determine decision making influence, and governing committees (e.g. technical steering, project steering) are set up to ensure the project's direction is in-line with requirements / goals while supporting flexibility for future growth and membership. Technical decision making will primarily be made through a \"[consensus-seeking](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making)\" approach within the respective governing committees. \n\n## Roles\n\n| Role                                | Restricted To | Description                                                                                                                                                                           | Read/Clone                           | Propose Pull Request                 | Comment in Tickets / Discussions     | Triage                               | Review                               | Commit                               | Technical Decisions                  | Project Decisions                    |\n| ----------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |\n| User                                | None          | Anyone downloading, deploying, or operating the software to meet a specific objective.                                                                                                | \u2705 | \u2705 | \u2705 | \u274c    | \u274c    | \u274c    | \u274c    | \u274c    |\n| Contributor                         | None          | Anyone providing input to the project, including: code, issues, documentation, graphics, etc.                                                                                         | \u2705 | \u2705 | \u2705 | \u274c    | \u274c    | \u274c    | \u274c    | \u274c    |\n| Triager                             | Contributor   | Subset of contributors demonstrating a strong familiarity with the project.                                                                                                           | \u2705 | \u2705 | \u2705 | \u2705 | \u274c    | \u274c    | \u274c    | \u274c    |\n| Collaborator                        | Contributor   | Subset of contributors granted write access to one or more of the project repositories upon selection by TSC                                                                          | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u274c    | \u274c    |\n| Technical Steering Committee Member | Collaborator  | A subset of collaborators having technical decision making authority and admin privileges                                                                                             | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u274c    |\n| Project Steering Committee Member   | Stakeholders  | Sponsor organization representatives (i.e. those providing funding to the project) and key stakeholders with authority to guide project based on requirements, budget, schedule, etc. | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |\n| Product Manager                     | Stakeholders  | Overall manager of project with final authority over all key decisions when consensus cannot be reached                                                                                    | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 |\n\n### User\n\nAnyone who has downloaded, deployed, or operated [INSERT PROJECT NAME] to meet a specific objective. This project was primarily designed for [INSERT DESCRIPTION OF PROJECT PURPOSE], but let us know if you've found other uses for it.  \n\n### Contributor\n\nContributors include anyone that provides input to the project. This includes code, issues, documentation, graphics, designs, or anything else that tangibly improves the project. We encourage you to start contributing right away by joining our [Discussions]([INSERT LINK TO DISCUSSION BOARD OR MAILING LIST(S)]) or submitting an [Issue]([INSERT LINK TO ISSUE TRACKING SYSTEM]). \n\n### Triager\n\nSubset of contributors who have demonstrated a strong familiarity with the project and are regularly contributing to the project via issue creation, commenting, discussions, etc. Triagers are given specific permissions do the following:\n\n    - Label issues and pull requests\n    - Comment, close, and reopen issues and pull requests\n\n[List of current Triagers]([INSERT LINK TO GITHUB, GITLAB, ETC. TEAM ASSOCIATED WITH TRIAGERS])\n \n### Collaborator\n\nSubset of contributors who have been given write access to one or more project repositories. Both contributors and collaborators can propose changes to the project via pull requests, but only collaborators can formally review and approve (merge) these requests. Any contributor who has made a non-trivial contribution should be on-boarded as a collaborator in a timely manner. \n\nIf you are planning on making a substantial contribution to the project or feel as though you should be given write access to a repository, please send a request to [INSERT LINK TO EMAIL/GITHUB USER HANDLE]\n\n[List of current collaborators]([INSERT LINK TO GITHUB, GITLAB, ETC. TEAM ASSOCIATED WITH COLLABORATORS])\n\n### Technical Steering Committee Member\n\nA subset of the collaborators forms the Technical Steering Committee (TSC). The TSC has authority over the following aspects of this project:\n\n- Technical direction and guidance\n- Committee governance and process \n- Contribution policy\n- Conduct guidelines\n- Maintaining the list of collaborators\n\n#### TSC Committee Members\n- [INSERT MEMBER NAME] ([username1]([INSERT LINK TO USERNAME]), [INSERT ORG ASSOCIATION]\n- [INSERT MEMBER NAME] ([username1]([INSERT LINK TO USERNAME]), [INSERT ORG ASSOCIATION]\n\n\n<details>\n\n<summary>Emeriti</summary>\n\n#### TSC Emeriti\n- [INSERT MEMBER NAME] ([username1]([INSERT LINK TO USERNAME]), [INSERT ORG ASSOCIATION]\n\n</details>\n \n#### Scope\n\nThe TSC is primarily responsible for the following project repositories:\n\n- [INSERT LINK TO PROJECT REPOSITORIES]\n\nHowever, the TSC also has the responsibility to interface with and monitor third-party dependencies of the project for key changes impacting [INSERT PROJECT NAME]. These third-party dependencies include:\n\n- [INSERT LINK TO DEPENDENT PROJECT REPOSITORIES]\n\n\n#### Decision Making Process\n\nAny community member can create an issue or comment asking the TSC to review something. Prior to implementing a substantial contribution, the design of that contribution should be reviewed by at least one member of the TSC. If consensus-seeking fails during the review of a pull request or in design discussions, the issue will be addressed by the TSC to make a determination on direction. TSC members will meet regularly and will keep track of decisions made when consensus was not met. \n\nThe TSC can nominate new members at any time. Candidates for membership tend to be collaborators who have shown great dedication to the project and/or experts in a particular domain or project component. TSC members are expected to be active contributors or members who have made significant contributions within the past 12 months. \n\n### Project Management Committee (PMC) Member\n\nThe Project Management Committee (PMC) is made up of sponsor organization representatives (i.e. those providing funding to the project) and key stakeholders who rely or plan to rely on the project to meet a critical need. The PMC has the following responsibilities:\n\n- Maintaining the overall project roadmap\n- Determining project requirements and commitments to sponsors and stakeholders\n- Assessing available resources and allocating them across the project\n- Monitoring and reporting on progress against the roadmap \n- On-boarding new sponsors and stakeholders\n- Overall project governance (including this policy)\n- Addressing any legal considerations\n\n#### PMC Committee Members\n- [INSERT MEMBER NAME] ([username1]([INSERT LINK TO USERNAME]), [INSERT ORG ASSOCIATION]\n- [INSERT MEMBER NAME] ([username1]([INSERT LINK TO USERNAME]), [INSERT ORG ASSOCIATION]\n\n<details>\n\n<summary>Emeriti</summary>\n\n#### PMC Emeriti\n- [INSERT MEMBER NAME] ([username1]([INSERT LINK TO USERNAME]), [INSERT ORG ASSOCIATION]\n\n</details>   \n\n#### Scope\n\nThe PMC has management authority over the same project repositories over which the TSC has technical authority over.   \n\n#### Decision Making Process\n\nThe PMC will consist of a product manager and additional representative from sponsors and key stakeholders. The PMC or sponsoring organizations can nominate new members at any time. Care should be taken not to include too many members from a single stakeholder project or organization.\n\nRegular stakeholder meetings are held to discuss current project status and propose changes to the project roadmap. If stakeholder representatives and sponsors concur with these proposals during the meeting, they will be immediately adopted. A member of the PMC will ensure the changes have been captured and recorded. Regular stakeholder meetings will be open to the entire community, but only members of the PMC have decision making authority. \n\nAdditional meetings may be held if consensus is not met or to discuss significant changes to the roadmap due to changes in stakeholder priorities or available resources. Any decision made outside of stakeholder meetings must still be approved by all sponsors and stakeholders. If full consensus cannot be made, the product manager has the final authority to determine project direction. Any non-concurrences from stakeholders or sponsors will be noted. \n\n### Product Manager\n\nOverall manager of the project with final authority over all key decisions when consensus cannot be reached within the TSC or PSC. The product manager is often chosen at the onset of project initiation and can be reassigned by the PMC (with institutional approval, if applicable).\n\n# Acknowledgements\n\nMuch of this governance model was adapted from the other notable open source projects including [node.js](https://github.com/nodejs/node/blob/main/GOVERNANCE.md), [OpenSSL](https://www.openssl.org/policies/omc-bylaws.html), [PostgresQL](https://www.postgresql.org/developer/), and [OpenMCT](https://github.com/nasa/openmct/blob/master/CONTRIBUTING.md). We would like to thank those projects for setting the foundation upon which this model was built. \n")))}u.isMDXComponent=!0}}]);