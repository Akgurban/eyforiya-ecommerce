import{_ as y}from"./nuxt-link.3a82f007.js";import{_ as w}from"./chevron-right.c437f043.js";import{_ as b}from"./profil-sidebar.1bb4e021.js";import{u as k}from"./useMyFetch.182df1fb.js";import{u as $}from"./authStore.ba1671ca.js";import{a as N,aa as C,Z as r,I as n,R as t,H as i,M as S,S as V,U as e,u as f,Q as j,G as h,Y as x}from"./swiper-vue.406cf000.js";import"./entry.f57c7ce9.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./base-button.0f6fb678.js";import"./fetch.3824631a.js";const B={class:"w-screen px-3 md:w-[1200px] mx-auto z-20"},T={class:"2xl:w-[1424px] xl:w-[1230px] w-full flex gap-3 items-center pl-0 md:pl-10"},A={class:"cursor-pointer"},F={class:"cursor-pointer"},I={class:"flex md:flex-row flex-col gap-4 mt-3"},L={class:""},M={class:"md:w-[900px] w-full"},R={key:0,class:"w-full h-auto mt-30 flex font-bold items-center justify-center text-6xl font-alatsi"},z={class:"overflow-auto"},D={class:"bg-gray-200 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1"},E={class:"pl-0 md:pl-10"},G=["src"],X={__name:"order",async setup(H){var _;let a,d;const p=$(),l=N([]);if((_=p.userToken)!=null&&_.uuid){const{data:o}=([a,d]=C(()=>{var u;return k(`/api/v1/client/orders?limit=100&offset=0&lang=tm&user_id=${(u=p.userToken)==null?void 0:u.uuid}`)}),a=await a,d(),a);l.value=o.value.data.orders,console.log(o.value.data.orders,"history")}return(o,u)=>{const g=y,m=w,v=b;return r(),n("div",B,[t("div",T,[i(g,{to:"/",class:"cursor-pointer hover:font-bold"},{default:S(()=>[V(e(o.$t("home")),1)]),_:1}),i(m,{class:"h-3"}),t("p",A,e(o.$t("profile")),1),i(m,{class:"h-3"}),t("p",F,e(o.$t("history")),1)]),t("div",I,[t("div",L,[i(v)]),t("div",M,[f(l)?j("",!0):(r(),n("div",R,e(o.$t("noorder")),1)),t("div",z,[t("ul",null,[(r(!0),n(h,null,x(f(l),c=>(r(),n("div",{class:"bg-gray-200 cursor-pointer text-lg font-bold rounded-md p-2 m-1",key:c.uuid},[t("div",D,[t("p",null,e(c.username),1),t("p",null,"+993 "+e(c.string),1)]),t("ul",E,[(r(!0),n(h,null,x(c.products,s=>(r(),n("li",{class:"mt-2 odd:bg-gray-50 even:bg-gray-100 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1",key:s.uuid},[t("img",{src:`http://duypbaha.com.tm/api/v1/uploads/images/${s==null?void 0:s.img_path}`,alt:"",class:"h-10 w-15"},null,8,G),t("p",null,e(s.product_name),1),t("p",null,e(s.count)+" x",1)]))),128))])]))),128))])])])])])}}};export{X as default};