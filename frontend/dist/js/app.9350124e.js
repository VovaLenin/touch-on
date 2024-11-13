(function(){"use strict";var t={1756:function(t,e,n){var o=n(5130),a=n(6768);const c={class:"app-container p-6 bg-gray-100 min-h-screen"};function r(t,e,n,o,r,i){const l=(0,a.g2)("SearchBar"),d=(0,a.g2)("ContactList"),u=(0,a.g2)("ContactForm");return(0,a.uX)(),(0,a.CE)("div",c,[e[0]||(e[0]=(0,a.Lk)("h1",{class:"text-3xl font-bold text-center mb-8"},"Contact Management",-1)),(0,a.bF)(l,{onSearch:t.handleSearch},null,8,["onSearch"]),(0,a.bF)(d,{contacts:t.filteredContacts,onDeleteContact:t.deleteContact,onEditContact:t.editContact},null,8,["contacts","onDeleteContact","onEditContact"]),(0,a.bF)(u,{onAddContact:t.addContact,onUpdateContact:t.updateContact,editingContact:t.editingContact},null,8,["onAddContact","onUpdateContact","editingContact"])])}n(4114),n(8992),n(4520);var i=n(144);const l={class:"search-bar mb-4"};function d(t,e,n,c,r,i){return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.query=e),onInput:e[1]||(e[1]=(...e)=>t.handleInput&&t.handleInput(...e)),type:"text",placeholder:"Search contacts...",class:"input-field w-full p-2 border rounded"},null,544),[[o.Jo,t.query]])])}var u=(0,a.pM)({name:"SearchBar",emits:["search"],setup(t,{emit:e}){const n=(0,i.KR)(""),o=()=>{e("search",n.value)};return{query:n,handleInput:o}}}),s=n(1241);const p=(0,s.A)(u,[["render",d],["__scopeId","data-v-117fdfb0"]]);var m=p;const f={class:"contact-list"};function v(t,e,n,o,c,r){const i=(0,a.g2)("ContactItem");return(0,a.uX)(),(0,a.CE)("div",f,[(0,a.Lk)("ul",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.contacts,(e=>((0,a.uX)(),(0,a.Wv)(i,{key:e.id,contact:e,onDelete:n=>t.handleDelete(e.id),onEdit:n=>t.handleEdit(e)},null,8,["contact","onDelete","onEdit"])))),128))])])}var C=n(4232);const b={class:"contact-item p-4 border-b border-gray-200 flex justify-between items-center"},h={class:"contact-info"},g={class:"text-lg font-semibold"},k={class:"text-sm text-gray-600"},y={class:"text-sm text-gray-600"},x={class:"contact-actions flex gap-2"};function L(t,e,n,o,c,r){return(0,a.uX)(),(0,a.CE)("li",b,[(0,a.Lk)("div",h,[(0,a.Lk)("h3",g,(0,C.v_)(t.contact.name),1),(0,a.Lk)("p",k,"Phone: "+(0,C.v_)(t.contact.phone),1),(0,a.Lk)("p",y,"Email: "+(0,C.v_)(t.contact.email),1)]),(0,a.Lk)("div",x,[(0,a.Lk)("button",{onClick:e[0]||(e[0]=(...e)=>t.editContact&&t.editContact(...e)),class:"text-blue-500 hover:underline"}," Edit "),(0,a.Lk)("button",{onClick:e[1]||(e[1]=(...e)=>t.deleteContact&&t.deleteContact(...e)),class:"text-red-500 hover:underline"}," Delete ")])])}var E=(0,a.pM)({name:"ContactItem",props:{contact:{type:Object,required:!0}},emits:["delete","edit"],setup(t,{emit:e}){const n=()=>{e("delete",t.contact.id)},o=()=>{e("edit",t.contact)};return{deleteContact:n,editContact:o}}});const _=(0,s.A)(E,[["render",L],["__scopeId","data-v-50364a7b"]]);var w=_,I=(0,a.pM)({name:"ContactList",components:{ContactItem:w},props:{contacts:{type:Array,required:!0}},emits:["deleteContact","editContact"],setup(t,{emit:e}){const n=t=>{e("deleteContact",t)},o=t=>{e("editContact",t)};return{handleDelete:n,handleEdit:o}}});const O=(0,s.A)(I,[["render",v],["__scopeId","data-v-2aefb030"]]);var S=O;const A={class:"contact-form p-4 bg-white rounded shadow-md"},D={class:"text-xl font-semibold mb-4"},F={class:"mb-4"},j={class:"mb-4"},q={class:"mb-4"},M={class:"flex gap-2"},U={type:"submit",class:"btn-primary"};function X(t,e,n,c,r,i){return(0,a.uX)(),(0,a.CE)("div",A,[(0,a.Lk)("h2",D,(0,C.v_)(t.isEditing?"Edit Contact":"Add Contact"),1),(0,a.Lk)("form",{onSubmit:e[4]||(e[4]=(0,o.D$)(((...e)=>t.handleSubmit&&t.handleSubmit(...e)),["prevent"]))},[(0,a.Lk)("div",F,[e[5]||(e[5]=(0,a.Lk)("label",{class:"block text-sm font-medium text-gray-700"},"Name",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.form.name=e),type:"text",class:"input-field",required:""},null,512),[[o.Jo,t.form.name]])]),(0,a.Lk)("div",j,[e[6]||(e[6]=(0,a.Lk)("label",{class:"block text-sm font-medium text-gray-700"},"Phone",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=e=>t.form.phone=e),type:"text",class:"input-field",required:""},null,512),[[o.Jo,t.form.phone]])]),(0,a.Lk)("div",q,[e[7]||(e[7]=(0,a.Lk)("label",{class:"block text-sm font-medium text-gray-700"},"Email",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=e=>t.form.email=e),type:"email",class:"input-field",required:""},null,512),[[o.Jo,t.form.email]])]),(0,a.Lk)("div",M,[(0,a.Lk)("button",U,(0,C.v_)(t.isEditing?"Update":"Add"),1),(0,a.Lk)("button",{type:"button",onClick:e[3]||(e[3]=(...e)=>t.resetForm&&t.resetForm(...e)),class:"btn-secondary"}," Cancel ")])],32)])}var K=(0,a.pM)({name:"ContactForm",props:{editingContact:{type:Object,default:null}},emits:["addContact","updateContact"],setup(t,{emit:e}){const n=(0,i.Kh)({id:Date.now(),name:"",phone:"",email:""}),o=(0,a.EW)((()=>!!t.editingContact)),c=()=>{n.id=Date.now(),n.name="",n.phone="",n.email=""};(0,a.wB)((()=>t.editingContact),(t=>{t?(n.id=t.id,n.name=t.name,n.phone=t.phone,n.email=t.email):c()}),{immediate:!0});const r=()=>{o.value?e("updateContact",{...n}):e("addContact",{...n,id:Date.now()}),c()};return{form:n,isEditing:o,handleSubmit:r,resetForm:c}}});const B=(0,s.A)(K,[["render",X],["__scopeId","data-v-53de4d17"]]);var J=B,P=(0,a.pM)({name:"App",components:{SearchBar:m,ContactList:S,ContactForm:J},setup(){const t=(0,i.KR)([]),e=(0,i.KR)(""),n=(0,i.KR)(null),o=(0,a.EW)((()=>t.value.filter((t=>t.name.toLowerCase().includes(e.value.toLowerCase()))))),c=e=>{t.value.push(e)},r=e=>{console.log("contacts.value",t.value),console.log("updateContact.id",e);const o=t.value.findIndex((t=>t.id===e.id));-1!==o&&(t.value[o]=e),n.value=null},l=e=>{t.value=t.value.filter((t=>t.id!==e))},d=t=>{n.value={...t}},u=t=>{e.value=t};return{contacts:t,searchQuery:e,filteredContacts:o,editingContact:n,addContact:c,deleteContact:l,editContact:d,handleSearch:u,updateContact:r}}});const R=(0,s.A)(P,[["render",r],["__scopeId","data-v-3e509813"]]);var V=R;(0,o.Ef)(V).mount("#app")}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var c=e[o]={exports:{}};return t[o].call(c.exports,c,c.exports,n),c.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,c){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],c=t[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&c||r>=c)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(i=!1,c<r&&(r=c));if(i){t.splice(u--,1);var d=a();void 0!==d&&(e=d)}}return e}c=c||0;for(var u=t.length;u>0&&t[u-1][2]>c;u--)t[u]=t[u-1];t[u]=[o,a,c]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,c,r=o[0],i=o[1],l=o[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var u=l(n)}for(e&&e(o);d<r.length;d++)c=r[d],n.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return n.O(u)},o=self["webpackChunktouch_on"]=self["webpackChunktouch_on"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(1756)}));o=n.O(o)})();
//# sourceMappingURL=app.9350124e.js.map