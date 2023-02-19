"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[4259],{15502:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>m,metadata:()=>c,toc:()=>u});var n=a(87462),o=(a(27378),a(3905)),r=a(74866),i=a(85162);const m={title:"\u270f\ufe0f @theme/JSONSchemaEditor",description:"@theme/JSONSchemaEditor API"},s=void 0,c={unversionedId:"api/JSONSchemaEditor",id:"api/JSONSchemaEditor",title:"\u270f\ufe0f @theme/JSONSchemaEditor",description:"@theme/JSONSchemaEditor API",source:"@site/docs/api/JSONSchemaEditor.mdx",sourceDirName:"api",slug:"/api/JSONSchemaEditor",permalink:"/docusaurus-json-schema-plugin/docs/api/JSONSchemaEditor",draft:!1,editUrl:"https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/docs/api/JSONSchemaEditor.mdx",tags:[],version:"current",frontMatter:{title:"\u270f\ufe0f @theme/JSONSchemaEditor",description:"@theme/JSONSchemaEditor API"},sidebar:"tutorialSidebar",previous:{title:"\u2699\ufe0f Theme Configuration",permalink:"/docusaurus-json-schema-plugin/docs/api/config"},next:{title:"\ud83d\udd0e @theme/JSONSchemaViewer",permalink:"/docusaurus-json-schema-plugin/docs/api/JSONSchemaViewer"}},l={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u};function p(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required ?"),(0,o.kt)("th",{parentName:"tr",align:null},"Note"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"schema"),(0,o.kt)("td",{parentName:"tr",align:null},"JSONSchema"),(0,o.kt)("td",{parentName:"tr",align:null},"Mandatory"),(0,o.kt)("td",{parentName:"tr",align:null},"JSON Schema supported by ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/monaco-editor"},"monaco-editor"),", which powers ",(0,o.kt)("a",{parentName:"td",href:"https://code.visualstudio.com/Docs/languages/json#_json-schemas-and-settings"},"VS Code")," - Currently, it supports all draft versions from Draft 4 to JSON Schema Draft 2020-12")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"...."),(0,o.kt)("td",{parentName:"tr",align:null},"MonacoEditorProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/react-monaco-editor/react-monaco-editor#properties"},"Properties")," of ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/react-monaco-editor/react-monaco-editor"},"react-monaco-editor"))))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(r.default,{mdxType:"Tabs"},(0,o.kt)(i.default,{value:"JSX",label:"JSX",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react"\nimport Layout from "@theme/Layout"\nimport JSONSchemaEditor from "@theme/JSONSchemaEditor"\n// import { useColorMode } from "@docusaurus/theme-common"\n\nexport default function ExamplePage(): JSX.Element {\n\n  // You are free to fetch your schema in your own way (load local file, fetch, ...) :)\n  const mySchema = {\n    "type": "object",\n    "properties": {\n      "builtin": {\n        "type": "number"\n      }\n    },\n    "patternProperties": {\n      "^S_": {\n        "type": "string"\n      },\n      "^I_": {\n        "type": "integer"\n      }\n    },\n    "additionalProperties": {\n      "type": "string"\n    }\n  }\n\n  // https://docusaurus.io/docs/api/themes/configuration#use-color-mode\n  return (\n    <Layout\n      title={`My super JSON Schema`}\n      description="Description will go into a meta tag in <head />"\n    >\n      {/* You can "useColorMode" if you want to take into account current Docusaurus color */}\n      <JSONSchemaEditor schema={mySchema} theme={"vs-dark"} />\n    </Layout>\n  )\n}\n')))))}p.isMDXComponent=!0}}]);