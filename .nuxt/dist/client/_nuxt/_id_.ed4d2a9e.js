import{_ as R}from"./base-input.ad203584.js";import{_ as E}from"./base-select.c5deedbe.js";import{u as j,_ as M}from"./user.450c21c9.js";import{b as C,a as N}from"./entry.54e19d71.js";import{a as o,a0 as S,M as T,X as c,H as i,u as d,e as _,N as $,L as z}from"./swiper-vue.00c128fd.js";import"./v4.a960c1f4.js";const A=c("div",{class:"my-4 font-bold bg-slate-300 p-2"},"Banner gosun",-1),H={class:"flex gap-4 justify-between w-full"},I={class:"flex flex-col justify-between"},L={class:"flex justify-between mt-3"},O=c("button",null,"Update Category",-1),P={__name:"[id]",async setup(X){var v,b;let n,m;const y=j();C(),o(null);const t=o(null),s=o(null),u=o(null),f=o(null);o(null);const r=o(null),g=N(),V=e=>{if(e==="")return"dogry dolduryn"},w=e=>{if(e==="")return"dogry dolduryn"},h=e=>{if(e==="")return"dogry dolduryn"};try{const{data:e}=([n,m]=S(()=>{var a;return y.OneSubCategory((a=g==null?void 0:g.params)==null?void 0:a.id)}),n=await n,m(),n);console.log(e,"dai"),t.value=e.data.name_tm,u.value=e.data.name_en,s.value=e.data.name_ru,r.value={name:(v=e==null?void 0:e.data)==null?void 0:v.category_name,uuid:(b=e==null?void 0:e.data)==null?void 0:b.category_id}}catch(e){console.log(e)}const x=async()=>{try{const{data:e}=await y.getCategories();f.value=e.data}catch(e){console.log(e)}};[n,m]=S(()=>x()),await n,m();const B=async()=>{try{if(console.log(!t.value),!t.value||!u.value||!s.value)throw alert("Maglumatlary doly giriziň!"),"Maglumatlary doly giriziň!";const{data:e}=await y.editSubCategories({name_tm:t.value,name_en:u.value,name_ru:s.value,uuid:g.params.id,category_id:r.value.uuid});e.status&&alert("Sub Category Updated"),C().push("/admin/sub-categories")}catch(e){console.log(e)}};return(e,a)=>{const p=R,U=E,k=M;return z(),T("div",null,[A,c("div",H,[c("div",I,[i(p,{validate:V,name:"Sub Categoriya Turkmen",label:"Sub Categoriya Turkmen",placeholder:"Sub Categoriya Turkmen",modelValue:d(t),"onUpdate:modelValue":a[0]||(a[0]=l=>_(t)?t.value=l:null)},null,8,["modelValue"]),i(p,{validate:w,name:"Sub Categoriya Rus",label:"Sub Categoriya Rus",placeholder:"Sub Categoriya Rus",modelValue:d(s),"onUpdate:modelValue":a[1]||(a[1]=l=>_(s)?s.value=l:null)},null,8,["modelValue"]),i(p,{validate:h,name:"Sub Categoriya English",label:"Sub Categoriya English",placeholder:"Sub Categoriya English",modelValue:d(u),"onUpdate:modelValue":a[2]||(a[2]=l=>_(u)?u.value=l:null)},null,8,["modelValue"])]),i(U,{modelValue:d(r),"onUpdate:modelValue":a[3]||(a[3]=l=>_(r)?r.value=l:null),label:"Select Category",options:d(f),class:"w-100"},null,8,["modelValue","options"])]),c("div",L,[i(k,{onClick:B,class:"",type:"secondary"},{default:$(()=>[O]),_:1})])])}}};export{P as default};