import{_ as $}from"./nuxt-link.3a82f007.js";import{_ as g}from"./chevron-right.c437f043.js";import{_ as S}from"./profil-sidebar.1bb4e021.js";import{_ as T}from"./base-button.0f6fb678.js";import{a as u,Z as z,I as B,R as e,H as n,M as _,S as f,U as a,W as h,ad as v,al as w,u as x,e as b}from"./swiper-vue.406cf000.js";import{u as V}from"./useMyFetch.182df1fb.js";import{u as C}from"./authStore.ba1671ca.js";import{c as M}from"./entry.f57c7ce9.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./fetch.3824631a.js";const N={class:"w-screen px-3 md:w-[1200px] mx-auto z-20"},D={class:"2xl:w-[1424px] xl:w-[1230px] w-full flex gap-3 items-center pl-0 md:pl-10"},R={class:"cursor-pointer"},U={class:"cursor-pointer"},I={class:"flex md:flex-row flex-col gap-4 mt-3"},A={class:""},E={class:"md:w-[900px] w-full"},F={class:"h-[96vh] overflow-auto"},H={class:"text-2xl md:text-4xl font-bold mt-6 text-blue-900"},L=["onSubmit"],O={class:"pl-2 md:pl-10 w-[70%]"},P={class:"text-blue-800 font-bold"},W={class:"pl-2 md:pl-10 w-[70%] mt-8"},Z={class:"text-blue-800 font-bold"},j={class:"mt-5 ml-auto w-fit"},ae={__name:"username",setup(q){const c=M(),i=C();u([]);const o=u(""),l=u(""),m=async()=>{var s,t;if((s=i.userToken)!=null&&s.uuid)if(o.value!==l.value)c.error("tazeden girizyan password yalnysh");else{const{data:p,status:r}=await V("/api/v1/client/user/update",{body:{username:o.value,uuid:(t=i.userToken)==null?void 0:t.uuid},method:"POST"});r&&(c.success("username changed"),i.userToken.username=o.value,o.value="",l.value=""),console.log()}};return(s,t)=>{const p=$,r=g,y=S,k=T;return z(),B("div",N,[e("div",D,[n(p,{to:"/",class:"cursor-pointer hover:font-bold"},{default:_(()=>[f(a(s.$t("home")),1)]),_:1}),n(r,{class:"h-3"}),e("p",R,a(s.$t("profile")),1),n(r,{class:"h-3"}),e("p",U,a(s.$t("username")),1)]),e("div",I,[e("div",A,[n(y)]),e("div",E,[e("div",F,[e("div",H,a(s.$t("email_rec")),1),e("form",{onSubmit:h(m,["prevent"]),class:"mt-10 md:mt-20"},[e("div",O,[e("p",P,a(s.$t("new_email")),1),v(e("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>b(o)?o.value=d:null),type:"primary",label:"passwordy tazele",class:"border-2 border-blue-800 rounded-full p-2"},null,512),[[w,x(o)]])]),e("div",W,[e("p",Z,a(s.$t("rew_email")),1),v(e("input",{"onUpdate:modelValue":t[1]||(t[1]=d=>b(l)?l.value=d:null),type:"primary",label:"passwordy tazele",class:"border-2 border-blue-800 rounded-full p-2"},null,512),[[w,x(l)]])]),e("div",j,[n(k,{onClick:h(m,["prevent"]),type:"secondary"},{default:_(()=>[f("Dowam et")]),_:1},8,["onClick"])])],40,L)])])])])}}};export{ae as default};