"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[7623],{22017:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var n=o(24246),a=o(11151),r=o(74866),i=o(85162);const d={title:"\ud83d\udd27 @theme/MonacoEditor",description:"@theme/MonacoEditor API"},c=void 0,s={id:"api/MonacoEditor",title:"\ud83d\udd27 @theme/MonacoEditor",description:"@theme/MonacoEditor API",source:"@site/docs/api/MonacoEditor.mdx",sourceDirName:"api",slug:"/api/MonacoEditor",permalink:"/docusaurus-json-schema-plugin/docs/api/MonacoEditor",draft:!1,unlisted:!1,editUrl:"https://github.com/jy95/docusaurus-json-schema-plugin/tree/main/testsite/docs/api/MonacoEditor.mdx",tags:[],version:"current",frontMatter:{title:"\ud83d\udd27 @theme/MonacoEditor",description:"@theme/MonacoEditor API"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e @theme/JSONSchemaViewer",permalink:"/docusaurus-json-schema-plugin/docs/api/JSONSchemaViewer"},next:{title:"\u2753 FAQ",permalink:"/docusaurus-json-schema-plugin/docs/faq"}},l={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required ?"}),(0,n.jsx)(t.th,{children:"Note"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"...."}),(0,n.jsx)(t.td,{children:"MonacoEditorProps"}),(0,n.jsx)(t.td,{children:"Optional"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://github.com/react-monaco-editor/react-monaco-editor#properties",children:"Properties"})," of ",(0,n.jsx)(t.a,{href:"https://github.com/react-monaco-editor/react-monaco-editor",children:"react-monaco-editor"})]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.default,{children:(0,n.jsx)(i.default,{value:"JSX",label:"JSX",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import React from "react";\nimport Layout from "@theme/Layout";\nimport MonacoEditor, { monaco } from "@theme/MonacoEditor";\n// import { useColorMode } from "@docusaurus/theme-common"\n\n// To have the monacco types\nimport type { MonacoEditorTypes } from "@theme/MonacoEditor";\n\nexport default function ExamplePage(): JSX.Element {\n  const editorRef =\n    React.useRef<null | MonacoEditorTypes.IStandaloneCodeEditor>(null);\n\n  function generateFakeData() {\n    const editor = editorRef.current;\n    if (editor) {\n      const randomPayload = [\n        { name: "test", luck: 42.0 },\n        { items: [{ id: 1, amount: 7, isValidated: true }] },\n        [1, 2, 3, 4, 5],\n      ];\n      // Set a value\n      editor.setValue(\n        JSON.stringify(\n          randomPayload[Math.floor(Math.random() * randomPayload.length)],\n          null,\n          "\\t"\n        )\n      );\n      // And a advanced method from monaco\n      monacoInstance.editor.setModelMarkers(\n        editor.getModel(),\n        "schema-validation",\n        []\n      );\n    }\n  }\n\n  // https://docusaurus.io/docs/api/themes/configuration#use-color-mode\n  return (\n    <Layout\n      title={`My custom Monaco Editor`}\n      description="Description will go into a meta tag in <head />"\n    >\n      <>\n        <div>\n          <button onClick={() => generateFakeData()}>Generate fake data</button>\n        </div>\n        {/* You can "useColorMode" if you want to take into account current Docusaurus color */}\n        <MonacoEditor\n          theme={"vs-dark"}\n          language="json"\n          editorDidMount={(editor) => {\n            editorRef.current = editor;\n          }}\n        />\n      </>\n    </Layout>\n  );\n}\n'})})})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);