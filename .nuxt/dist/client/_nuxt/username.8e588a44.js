import{_ as g}from"./nuxt-link.d1532614.js";import{_ as S}from"./chevron-right.c437f043.js";import{_ as T}from"./profil-sidebar.f50a034d.js";import{_ as $}from"./base-button.0f6fb678.js";import{a as u,Z as z,I as B,R as e,H as l,M as _,S as f,U as n,W as h,ad as v,al as w,u as x,e as b}from"./swiper-vue.406cf000.js";import{u as V}from"./useMyFetch.6cc4916f.js";import{u as C}from"./authStore.50b6cfab.js";import{c as M}from"./entry.eea6a19a.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./fetch.54941e9f.js";const N={class:"w-screen px-3 md:w-[1200px] mx-auto z-20"},D={class:"2xl:w-[1424px] xl:w-[1230px] w-full flex gap-3 items-center pl-0 md:pl-10"},R={class:"cursor-pointer"},U={class:"cursor-pointer font-bold"},H={class:"flex md:flex-row flex-col gap-4 mt-3"},I={class:""},A={class:"md:w-[900px] w-full"},E={class:"h-[96vh] overflow-auto"},F={class:"text-2xl md:text-4xl font-bold mt-6 text-blue-900"},L=["onSubmit"],O={class:"pl-2 md:pl-10 w-[70%]"},P={class:"text-blue-800 font-bold"},W={class:"pl-2 md:pl-10 w-[70%] mt-8"},Z={class:"text-blue-800 font-bold"},j={class:"mt-5 ml-auto w-fit"},ae={__name:"username",setup(q){const c=M(),i=C();u([]);const o=u(""),a=u(""),p=async()=>{var s,t;if((s=i.userToken)!=null&&s.uuid)if(o.value!==a.value)c.error("tazeden girizyan password yalnysh");else{const{data:m,status:r}=await V("/api/v1/client/user/update",{body:{username:o.value,uuid:(t=i.userToken)==null?void 0:t.uuid},method:"POST"});r&&(c.success("username changed"),i.userToken.username=o.value,o.value="",a.value=""),console.log()}};return(s,t)=>{const m=g,r=S,y=T,k=$;return z(),B("div",N,[e("div",D,[l(m,{to:"/",class:"cursor-pointer hover:font-bold"},{default:_(()=>[f("Home")]),_:1}),l(r,{class:"h-3"}),e("p",R,n(s.$t("profile")),1),l(r,{class:"h-3"}),e("p",U,n(s.$t("history")),1)]),e("div",H,[e("div",I,[l(y)]),e("div",A,[e("div",E,[e("div",F,n(s.$t("email_rec")),1),e("form",{onSubmit:h(p,["prevent"]),class:"mt-10 md:mt-20"},[e("div",O,[e("p",P,n(s.$t("new_email")),1),v(e("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>b(o)?o.value=d:null),type:"primary",label:"passwordy tazele",class:"border-2 border-blue-800 rounded-full p-2"},null,512),[[w,x(o)]])]),e("div",W,[e("p",Z,n(s.$t("rew_email")),1),v(e("input",{"onUpdate:modelValue":t[1]||(t[1]=d=>b(a)?a.value=d:null),type:"primary",label:"passwordy tazele",class:"border-2 border-blue-800 rounded-full p-2"},null,512),[[w,x(a)]])]),e("div",j,[l(k,{onClick:h(p,["prevent"]),type:"secondary"},{default:_(()=>[f("Dowam et")]),_:1},8,["onClick"])])],40,L)])])])])}}};export{ae as default};