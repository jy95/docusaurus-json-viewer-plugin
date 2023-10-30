"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[7937],{59958:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=n(24246),r=n(11151),o=n(74866),t=n(85162);const a={title:"\u2753 FAQ",description:"Frequently Asked Questions"},c=void 0,l={id:"faq",title:"\u2753 FAQ",description:"Frequently Asked Questions",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/docusaurus-json-schema-plugin/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/docs/faq.mdx",tags:[],version:"current",frontMatter:{title:"\u2753 FAQ",description:"Frequently Asked Questions"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd27 @theme/MonacoEditor",permalink:"/docusaurus-json-schema-plugin/docs/api/MonacoEditor"},next:{title:"\ud83d\udea7 Roadmap",permalink:"/docusaurus-json-schema-plugin/docs/next-steps"}},d={},h=[];function u(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Frequently asked questions"}),"\n"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"How can I contribute ?"}),(0,i.jsxs)(s.p,{children:["Any contribution is welcome! Read more ",(0,i.jsx)(s.a,{href:"contributing",children:"here"}),"."]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"How to swizzling components ?"}),(0,i.jsxs)(o.default,{groupId:"npm2yarn",children:[(0,i.jsx)(t.default,{value:"npm",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npm run swizzle docusaurus-json-schema-plugin [component name] -- --typescript\n"})})}),(0,i.jsx)(t.default,{value:"yarn",label:"Yarn",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"yarn swizzle docusaurus-json-schema-plugin [component name] --typescript\n"})})}),(0,i.jsx)(t.default,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"pnpm run swizzle docusaurus-json-schema-plugin [component name] -- --typescript\n"})})})]}),(0,i.jsxs)(s.p,{children:["For extra information, please consult ",(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/swizzling",children:"Docusaurus Swizzling documentation"})]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)("summary",{children:["Why do I get ",(0,i.jsx)(s.code,{children:"Loading ..."})," using ",(0,i.jsx)(s.code,{children:"JSONSchemaViewer"})," ?"]}),(0,i.jsx)(s.p,{children:"Several reasons, most likely :"}),(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["You have an error not related to ",(0,i.jsx)(s.code,{children:"docusaurus-json-schema-plugin"})," in your codebase like ",(0,i.jsx)(s.a,{href:"https://github.com/jy95/docusaurus-json-schema-plugin/issues/17",children:"this one"})," : missing language(s) in prism config / ..."]}),"\n",(0,i.jsxs)(s.li,{children:["You broke the ",(0,i.jsx)(s.a,{href:"https://reactjs.org/docs/hooks-rules.html",children:"rules of hooks"})," or one of your dependancies did"]}),"\n",(0,i.jsxs)(s.li,{children:["You have more than ",(0,i.jsx)(s.a,{href:"https://reactjs.org/warnings/invalid-hook-call-warning.html",children:"one copy of React in the same app"})," or mismatching versions of React and React DOM"]}),"\n"]}),(0,i.jsxs)(s.p,{children:["If none of these helped you, consider to have a reproducible example before asking help to ",(0,i.jsx)(s.a,{href:"https://docusaurus.io/community/support",children:"Docusaurus"})," / ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/react/issues/13991",children:"React"})]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"How to translate labels into my own language ?"}),(0,i.jsx)(s.p,{children:"Please refer for extra information to :"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/cli#docusaurus-write-translations-sitedir",children:"docusaurus write-translations"})," CLI command"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://docusaurus.io/docs/i18n/introduction",children:"Internationalization"})}),"\n"]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Which features of JSON Schema are not supported yet ?"}),(0,i.jsxs)(s.p,{children:["It is explained on the ",(0,i.jsx)(s.a,{href:"next-steps",children:"Roadmap page"})]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"Why the minimal JSON Schema version is Draft-07 ?"}),(0,i.jsx)(s.p,{children:"Several reasons :"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Many actors (like ",(0,i.jsx)(s.a,{href:"https://ajv.js.org/guide/schema-language.html#draft-07-and-draft-06",children:"ajv"})," ) acknowledge that it is most widely used version of JSON Schema specification"]}),"\n",(0,i.jsx)(s.li,{children:"Many tools don't care anymore for older versions such as Draft-04"}),"\n",(0,i.jsx)(s.li,{children:"It fits my needs when I designed this project"}),"\n"]}),(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["You can migrate schemas from draft-04 to draft-07 using ",(0,i.jsx)(s.a,{href:"https://github.com/ajv-validator/ajv-cli#migrate-schemas",children:"ajv-cli"})]})})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"How to support specifications that extends the one of JSON Schema (such as OpenAPI, MongoDB, ... )"}),(0,i.jsx)(s.p,{children:"That is a good question as many extensions exist in the wild :"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://spec.openapis.org/oas/latest.html",children:"OpenAPI"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.mongodb.com/docs/manual/reference/operator/query/jsonSchema/",children:"MongoDB"})}),"\n",(0,i.jsx)(s.li,{children:"..."}),"\n"]}),(0,i.jsxs)(s.p,{children:["In the case of OpenAPI, since ",(0,i.jsx)(s.a,{href:"https://www.openapis.org/blog/2021/02/16/migrating-from-openapi-3-0-to-3-1-0",children:"OpenAPI 3.1"}),"+ , they are now valid ",(0,i.jsx)(s.a,{href:"https://json-schema.org/draft/2020-12/release-notes.html",children:"Draft 2020-12"})," JSON Schema so compatible with this lib."]}),(0,i.jsx)(s.p,{children:"For the time being, it is low priority as several aspects needs to be considered that might lead to issues , breaking changes, ..."}),(0,i.jsxs)(s.p,{children:["In the meantime, feel free to share your feedback on ",(0,i.jsx)(s.a,{href:"https://github.com/jy95/docusaurus-json-schema-plugin/discussions",children:"Github discussions"})]})]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);