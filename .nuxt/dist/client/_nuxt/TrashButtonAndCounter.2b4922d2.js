import{_ as f}from"./trash.5beb687a.js";import{u as m}from"./useMyFetch.6cc4916f.js";import"./entry.eea6a19a.js";import{a as y}from"./trash.f17fc8fa.js";import{u as g}from"./authStore.50b6cfab.js";import{a as k,Z as c,I as i,u,R as s,U as p,H as w,Q as _}from"./swiper-vue.406cf000.js";const b=""+new URL("add_cart.803e3000.svg",import.meta.url).href,T=s("img",{class:"mx-auto h-9 md:h-10 md:mt-5 mt-1",src:b,alt:""},null,-1),S={class:"absolute top-0 right-1/2 translate-x-1/2 flex items-center gap-3 text-white h-fit"},C={class:"md:text-2xl text-lg font-alatsi uppercase whitespace-nowrap"},B={key:1,class:"w-[80%] mx-auto text-center z-50 md:h-17.5 h-13"},F={class:"w-full font-bold justify-evenly flex gap-2 px-6 py-1 md:py-2 rounded-xl bg-[#F6F6F6]"},N={class:"cursor-pointer text-2xl w-7 text-center"},P={__name:"TrashButtonAndCounter",props:{item:{type:Object,required:!0},count:{type:Number,default:0}},emits:["update:modelValue"],setup(h,{emit:V}){var d;const o=h,a=g(),n=y(),t=k(0);o.count>0&&(t.value=o.count),(d=n.trash_items.products)==null||d.forEach((e,v)=>{var r;(e==null?void 0:e.uuid)==((r=o.item)==null?void 0:r.uuid)&&(t.value=e.count)});const l=async()=>{var e;t.value+=1,n.setLocalStorage(o.item,t.value),a.userToken&&await m("/api/v1/client/trash/create",{body:{user_id:(e=a.userToken)==null?void 0:e.uuid,product_id:o.item.uuid,count:t.value},method:"POST"})},x=async()=>{var e;t.value-=1,n.removeLocalStorage(o.item,t.value),a.userToken&&await m("/api/v1/client/trash/create",{body:{user_id:(e=a.userToken)==null?void 0:e.uuid,product_id:o.item.uuid,count:t.value},method:"POST"})};return(e,v)=>{const r=f;return c(),i("div",null,[u(t)==0?(c(),i("div",{key:0,onClick:l,class:"relative select-none mb-[20px] hover:scale-95 transition-transform duration-150"},[T,s("div",S,[s("div",C,p(e.$t("add_to")),1),w(r,{draggable:"false",class:"inline pointer-events-none mt-1 md:w-9 w-6 md:h-9 h-6"})])])):_("",!0),u(t)!=0?(c(),i("div",B,[s("div",F,[s("div",{onClick:x,class:"cursor-pointer text-2xl text-[#3C4242] px-2 select-none"}," - "),s("div",N,p(u(t)),1),s("div",{onClick:l,class:"cursor-pointer text-2xl text-[#3C4242] px-2 select-none"}," + ")])])):_("",!0)])}}};export{P as _};