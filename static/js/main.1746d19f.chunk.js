(this["webpackJsonpsmart-ware"]=this["webpackJsonpsmart-ware"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),o=a(2),i=(a(14),a(3));function m(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(i.c,{className:"navbar-brand",to:"/"},l.a.createElement("img",{style:{width:"25%"},alt:"navbar",src:"https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"})),l.a.createElement("button",{className:"navbar-toggler",im:!0,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.c,{className:"nav-link",to:"/create"},"Create Record"))))))}const s=e=>l.a.createElement("tr",null,l.a.createElement("td",null,e.record.name),l.a.createElement("td",null,e.record.position),l.a.createElement("td",null,e.record.level),l.a.createElement("td",null,l.a.createElement(i.b,{className:"btn btn-link",to:"/edit/".concat(e.record._id)},"Edit")," |",l.a.createElement("button",{className:"btn btn-link",onClick:()=>{e.deleteRecord(e.record._id)}},"Delete")));function u(){const[e,t]=Object(n.useState)([]);return Object(n.useEffect)(()=>{!async function(){const e=await fetch("https://smartwarebackend.netlify.app/.netlify/functions/get_records");if(!e.ok){const t="An error occurred: ".concat(e.statusText);return void window.alert(t)}const a=await e.json();t(a)}()},[e.length]),l.a.createElement("div",null,l.a.createElement("h3",null,"Inventory"),l.a.createElement("table",{className:"table table-striped",style:{marginTop:20}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Item Name"),l.a.createElement("th",null,"Quantity"),l.a.createElement("th",null,"Location"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,e.map(a=>l.a.createElement(s,{record:a,deleteRecord:()=>async function(a){await fetch("http://localhost:5000/".concat(a),{method:"DELETE"});const n=e.filter(e=>e._id!==a);t(n)}(a._id),key:a._id})))))}function d(){const[e,t]=Object(n.useState)({name:"",position:"",level:"",records:[]}),a=Object(o.q)(),c=Object(o.o)();function r(e){return t(t=>({...t,...e}))}return Object(n.useEffect)(()=>{!async function(){const e=a.id.toString(),n=await fetch("http://localhost:5000/record/".concat(a.id.toString()));if(!n.ok){const e="An error has occurred: ".concat(n.statusText);return void window.alert(e)}const l=await n.json();if(!l)return window.alert("Record with id ".concat(e," not found")),void c("/");t(l)}()},[a.id,c]),l.a.createElement("div",null,l.a.createElement("h3",null,"Update Record"),l.a.createElement("form",{onSubmit:async function(t){t.preventDefault();const n={name:e.name,position:e.position,level:e.level};await fetch("http://localhost:5000/update/".concat(a.id),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}),c("/")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name: "),l.a.createElement("input",{type:"text",className:"form-control",id:"name",value:e.name,onChange:e=>r({name:e.target.value})})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"position"},"Position: "),l.a.createElement("input",{type:"text",className:"form-control",id:"position",value:e.position,onChange:e=>r({position:e.target.value})})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionIntern",value:"Intern",checked:"Intern"===e.level,onChange:e=>r({level:e.target.value})}),l.a.createElement("label",{htmlFor:"positionIntern",className:"form-check-label"},"Intern")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionJunior",value:"Junior",checked:"Junior"===e.level,onChange:e=>r({level:e.target.value})}),l.a.createElement("label",{htmlFor:"positionJunior",className:"form-check-label"},"Junior")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionSenior",value:"Senior",checked:"Senior"===e.level,onChange:e=>r({level:e.target.value})}),l.a.createElement("label",{htmlFor:"positionSenior",className:"form-check-label"},"Senior"))),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Update Record",className:"btn btn-primary"}))))}function p(){const[e,t]=Object(n.useState)({name:"",position:"",level:""}),a=Object(o.o)();function c(e){return t(t=>({...t,...e}))}return l.a.createElement("div",null,l.a.createElement("h3",null,"Create New Record"),l.a.createElement("form",{onSubmit:async function(n){n.preventDefault();const l={...e};await fetch("http://localhost:5000/record/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).catch(e=>{window.alert(e)}),t({name:"",position:"",level:""}),a("/")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Item"),l.a.createElement("input",{type:"text",className:"form-control",id:"name",value:e.name,onChange:e=>c({name:e.target.value})})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"position"},"Quantity"),l.a.createElement("input",{type:"text",className:"form-control",id:"position",value:e.position,onChange:e=>c({position:e.target.value})})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"cabOne",value:"Cabinet #1",checked:"Cabinet #1"===e.level,onChange:e=>c({level:e.target.value})}),l.a.createElement("label",{htmlFor:"positionIntern",className:"form-check-label"},"Cabinet #1")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"cabTwo",value:"Cabinet #2",checked:"Cabinet #2"===e.level,onChange:e=>c({level:e.target.value})}),l.a.createElement("label",{htmlFor:"positionJunior",className:"form-check-label"},"Cabinet #2")),l.a.createElement("div",{className:"form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"cabThree",value:"Cabinet #3",checked:"Cabinet #3"===e.level,onChange:e=>c({level:e.target.value})}),l.a.createElement("label",{htmlFor:"positionSenior",className:"form-check-label"},"Cabinet #3"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Add Entity",className:"btn btn-primary"}))))}var E=()=>l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",element:l.a.createElement(u,null)}),l.a.createElement(o.a,{path:"/edit/:id",element:l.a.createElement(d,null)}),l.a.createElement(o.a,{path:"/create",element:l.a.createElement(p,null)})));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(E,null))),document.getElementById("root"))},6:function(e,t,a){e.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.1746d19f.chunk.js.map