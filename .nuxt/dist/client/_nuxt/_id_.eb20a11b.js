import{_ as B}from"./base-input.ad203584.js";import{_ as x}from"./base-img-upload.61024c86.js";import{u as C,_ as V}from"./user.450c21c9.js";import{b as g,a as k}from"./entry.54e19d71.js";import{a as o,a0 as I,M as U,X as l,H as d,u as i,e as y,N as $,L as j}from"./swiper-vue.00c128fd.js";import"./v4.a960c1f4.js";const M=l("div",{class:"my-4 font-bold bg-slate-300 p-2"},"Banner gosun",-1),N={class:"flex gap-4 justify-between w-full"},R={class:"flex flex-col justify-between"},T={class:"flex justify-between mt-3"},z={class:"w-[400px]"},E=l("button",null,"Edit Category",-1),O={__name:"[id]",async setup(S){var f;let n,c;const m=C();g();const r=k();o(null);const a=o(null);o(null),o(null);const s=o(null),_=o(null);try{console.log(r.params);const{data:e}=([n,c]=I(()=>m.OneBrand(r.params.id)),n=await n,c(),n);console.log(e,"dai"),a.value=e.data.name,_.value=(f=e==null?void 0:e.data)==null?void 0:f.img_path}catch(e){console.log(e)}const p=e=>{if(e==="")return"dogry dolduryn"},v=async()=>{try{if(console.log(!a.value),!a.value)throw p(a.value),alert("Maglumatlary doly giriziň!"),"Maglumatlary doly giriziň!";const e=new FormData;e.append("name",a.value),e.append("uuid",r.params.id),s.value&&e.append("img",s.value);const{data:t}=await m.editBrand(e);t.status&&alert("Banner Gosuldy"),g().push("/admin/brands")}catch(e){console.log(e)}};return(e,t)=>{const h=B,b=x,w=V;return j(),U("div",null,[M,l("div",N,[l("div",R,[d(h,{validate:p,name:"Categoriya Turkmen",label:"Categoriya Turkmen",placeholder:"Categoriya Turkmen",modelValue:i(a),"onUpdate:modelValue":t[0]||(t[0]=u=>y(a)?a.value=u:null)},null,8,["modelValue"])])]),l("div",T,[l("div",z,[d(b,{currentImg:`http://duypbaha.com.tm/api/v1/uploads/brands/${i(_)}`,modelValue:i(s),"onUpdate:modelValue":t[1]||(t[1]=u=>y(s)?s.value=u:null)},null,8,["currentImg","modelValue"])]),d(w,{onClick:v,class:"",type:"secondary"},{default:$(()=>[E]),_:1})])])}}};export{O as default};