import{_ as k}from"./base-input.cd175c59.js";import{_ as I}from"./base-img-upload.cfd6955b.js";import{_ as U}from"./base-button.0f6fb678.js";import{a as w,b as E}from"./entry.84c95077.js";import{u as $}from"./user.135a82e2.js";import{a as s,aa as j,Z as M,I as T,R as r,H as i,u as d,e as c,M as z}from"./swiper-vue.406cf000.js";import"./v4.a960c1f4.js";import"./plus.a645f405.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./fetch.e216fd1f.js";import"./adminStore.3ffcab85.js";const A=r("div",{class:"my-4 font-bold bg-slate-300 p-2"},"Banner gosun",-1),N={class:"flex gap-4 justify-between w-full"},S={class:"flex flex-col justify-between"},D={class:"flex justify-between mt-3"},F={class:"w-[400px]"},G=r("button",null,"Add Category",-1),ee={__name:"[id]",async setup(H){var h,b;let m,_;const g=$();w();const y=E();s(null);const t=s(null),l=s(null),o=s(null),u=s(null),v=s(null);try{const{data:e}=([m,_]=j(()=>g.getOneCategories(y.params.id)),m=await m,_(),m);t.value=e.value.data.name_tm,o.value=e.value.data.name_en,l.value=e.value.data.name_ru,v.value=(b=(h=e.value)==null?void 0:h.data)==null?void 0:b.image}catch(e){console.log(e)}const f=e=>{if(e==="")return"dogry dolduryn"},C=e=>{if(e==="")return"dogry dolduryn"},V=e=>{if(e==="")return"dogry dolduryn"},x=async()=>{try{if(!t.value||!o.value||!l.value)throw f(t.value),V(o.value),C(l.value),alert("Maglumatlary doly giriziň!"),"Maglumatlary doly giriziň!";const e=new FormData;e.append("name_tm",t.value),e.append("name_ru",l.value),e.append("name_en",o.value),e.append("uuid",y.params.id),u.value&&e.append("img",u.value);const{data:a}=await g.editCategories(e);a.status&&alert("Categoriya Gosuldy"),w().push("/admin/categories")}catch(e){console.log(e)}};return(e,a)=>{const p=k,B=I,R=U;return M(),T("div",null,[A,r("div",N,[r("div",S,[i(p,{validate:f,name:"Categoriya Turkmen",label:"Categoriya Turkmen",placeholder:"Categoriya Turkmen",modelValue:d(t),"onUpdate:modelValue":a[0]||(a[0]=n=>c(t)?t.value=n:null)},null,8,["modelValue"]),i(p,{validate:C,name:"Categoriya Rus",label:"Categoriya Rus",placeholder:"Categoriya Rus",modelValue:d(l),"onUpdate:modelValue":a[1]||(a[1]=n=>c(l)?l.value=n:null)},null,8,["modelValue"]),i(p,{validate:V,name:"Categoriya English",label:"Categoriya English",placeholder:"Categoriya English",modelValue:d(o),"onUpdate:modelValue":a[2]||(a[2]=n=>c(o)?o.value=n:null)},null,8,["modelValue"])])]),r("div",D,[r("div",F,[i(B,{currentImg:`http://duypbaha.com.tm/api/v1/uploads/categories/${d(v)}`,modelValue:d(u),"onUpdate:modelValue":a[3]||(a[3]=n=>c(u)?u.value=n:null)},null,8,["currentImg","modelValue"])]),i(R,{onClick:x,class:"",type:"secondary"},{default:z(()=>[G]),_:1})])])}}};export{ee as default};