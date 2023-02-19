"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[7073],{96287:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var n=a(87462),r=(a(27378),a(3905)),l=a(74866),i=a(85162);const o={title:"\ud83d\udd0e @theme/JSONSchemaViewer",description:"@theme/JSONSchemaViewer API"},s=void 0,m={unversionedId:"api/JSONSchemaViewer",id:"api/JSONSchemaViewer",title:"\ud83d\udd0e @theme/JSONSchemaViewer",description:"@theme/JSONSchemaViewer API",source:"@site/docs/api/JSONSchemaViewer.mdx",sourceDirName:"api",slug:"/api/JSONSchemaViewer",permalink:"/docusaurus-json-schema-plugin/docs/api/JSONSchemaViewer",draft:!1,editUrl:"https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/docs/api/JSONSchemaViewer.mdx",tags:[],version:"current",frontMatter:{title:"\ud83d\udd0e @theme/JSONSchemaViewer",description:"@theme/JSONSchemaViewer API"},sidebar:"tutorialSidebar",previous:{title:"\u270f\ufe0f @theme/JSONSchemaEditor",permalink:"/docusaurus-json-schema-plugin/docs/api/JSONSchemaEditor"},next:{title:"\u2753 FAQ",permalink:"/docusaurus-json-schema-plugin/docs/faq"}},p={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"Examples",id:"examples",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required ?"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema"),(0,r.kt)("td",{parentName:"tr",align:null},"JSONSchema"),(0,r.kt)("td",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON Schema Draft-07 / Draft 2019-09 / Draft 2020-12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resolverOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"IResolveOpts"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"To resolve your $ref (by default, only inline references will be dereferenced).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"viewerOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"JSVOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional"),(0,r.kt)("td",{parentName:"tr",align:null},"Options for the viewer itself.")))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// Either Draft-07 / Draft 2019-09 / Draft 2020-12\ntype JSONSchema = unknown\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type IResolveOpts = {\n    // "IResolveOpts" options from @stoplightio/json-ref-resolver\n    // More info on https://github.com/stoplightio/json-ref-resolver\n    // https://github.com/stoplightio/json-ref-resolver/blob/master/src/types.ts\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'type JSVOptions = {\n   /**\n   * Should we display "examples" ?\n   * @default false\n   */\n    showExamples?: boolean\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(l.default,{mdxType:"Tabs"},(0,r.kt)(i.default,{value:"JSX",label:"JSX",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react"\nimport Layout from "@theme/Layout"\nimport JSONSchemaViewer from "@theme/JSONSchemaViewer"\n\nexport default function ExamplePage(): JSX.Element {\n\n    // You are free to fetch your schema in your own way (load local file, fetch, ...) :)\n    const mySchema = {\n        "type": "object",\n        "properties": {\n            "builtin": {\n                "type": "number"\n            }\n        },\n        "patternProperties": {\n            "^S_": {\n                "type": "string"\n            },\n            "^I_": {\n                "type": "integer"\n            }\n        },\n        "additionalProperties": {\n            "type": "string"\n        }\n    }\n\n    return (\n        <Layout\n            title={`My super JSON Schema`}\n            description="Description will go into a meta tag in <head />"\n        >\n            <JSONSchemaViewer schema={mySchema} />\n        </Layout>\n    )\n}\n'))),(0,r.kt)(i.default,{value:"MDX",label:"MDX",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'\nimport CodeBlock from \'@theme/CodeBlock\';\n// To fetch a JSON file from your static folder\nimport Schema from "@site/static/schemas/examples/array/tuples.json";\nimport JSONSchemaViewer from "@theme/JSONSchemaViewer";\n\n# Tuples\n\nViewer :\n\n<JSONSchemaViewer schema={ Schema  } />\n\nSource :\n\n<CodeBlock language="json">{JSON.stringify(Schema, null, 2)}</CodeBlock>\n\n')))))}d.isMDXComponent=!0}}]);