"use strict";(self.webpackChunktestsite=self.webpackChunktestsite||[]).push([[6342],{81947:function(e,t,l){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(l(27378)),r=a(l(71544)),u=a(l(91262)),c=a(l(44763));function i(e){return n.default.createElement("div",null,"Loading...")}function s(e){let{error:t,tryAgain:l}=e;return n.default.createElement("div",null,n.default.createElement("p",null,"This component crashed because of error: ",t.message,"."),n.default.createElement("button",{onClick:l},"Try Again!"))}function o(e){const{schema:t,...l}=e;return n.default.createElement(r.default,{height:"90vh",language:"json",editorWillMount:e=>{let l=t,a="boolean"!=typeof l&&void 0!==(null==l?void 0:l.$id)?l.$id:"https://docusaurus.io/json-viewer/schema.json";e.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:a,fileMatch:["*"],schema:t}]})},...l})}t.default=function(e){return n.default.createElement(u.default,{fallback:n.default.createElement(i,null)},(()=>n.default.createElement(n.default.Fragment,null,n.default.createElement(c.default,{fallback:e=>n.default.createElement(s,{...e})},n.default.createElement(o,{...e})))))}},63346:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var a=l(27378),n=l(47676),r=l(92949),u=l(91262),c=l(60442);function i(){let[e,t]=a.useState({$schema:"http://json-schema.org/draft-07/schema",...c});const{colorMode:n}=(0,r.I)(),u=l(47718).default,i=l(81947).default;return a.createElement(a.Fragment,null,a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},a.createElement("div",{style:{boxSizing:"border-box",width:"50%"}},a.createElement("h1",null,"Schema"),a.createElement(i,{value:JSON.stringify(e,null,"\t"),schema:{},onChange:e=>{try{let l=JSON.parse(e);t(l)}catch(l){}}})),a.createElement("div",{style:{boxSizing:"border-box",width:"50%"}},a.createElement("h1",null,"JSON Schema Editor"),a.createElement(i,{schema:e,theme:"dark"===n?"vs-dark":"vs"}))),a.createElement("div",null,a.createElement("h1",null,"JSON Schema Viewer"),a.createElement(u,{schema:e})))}function s(){return a.createElement(u.default,{fallback:a.createElement("div",null,"Loading...")},(()=>a.createElement(i,null)))}function o(){return a.createElement(n.Z,{title:"Playground",description:"Description will go into a meta tag in <head />"},a.createElement(s,null))}},60442:e=>{e.exports=JSON.parse('{"type":"object","properties":{"number":{"type":"number"},"street_name":{"type":"string"},"street_type":{"enum":["Street","Avenue","Boulevard"]}},"additionalProperties":false}')}}]);