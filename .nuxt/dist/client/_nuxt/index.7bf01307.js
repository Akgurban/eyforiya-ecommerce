import{_ as x}from"./nuxt-link.3a82f007.js";import{_ as C}from"./base-button.0f6fb678.js";import{a as m}from"./entry.f57c7ce9.js";import{u as b}from"./user.5d5d18b1.js";import{a as w,aa as S,Z as d,I as p,H as r,M as n,S as c,R as a,G as B,Y as $,U as N,u as g}from"./swiper-vue.406cf000.js";import"./fetch.3824631a.js";import"./adminStore.a0c51543.js";const R={class:"rounded-md p-2 m-1 flex justify-between"},P=a("p",{class:"font-bold"},"Yorite kategoriyanyn ady",-1),V=["src"],j={class:"flex gap-3"},F={__name:"index",async setup(z){let o,_;const l=b(),s=w(null);try{const{data:e}=([o,_]=S(()=>l.getSpecialCategories()),o=await o,_(),o);s.value=e.value.data}catch(e){console.log(e)}const y=async()=>{try{const{data:e}=await l.getSpecialCategories();s.value=e.value.data}catch(e){console.log(e)}},f=async e=>{try{const{data:i}=await l.deleteSpecialCategories({uuid:e.uuid});await y()}catch(i){console.log(i)}},h=()=>{var e;((e=s.value)==null?void 0:e.length)>=5?alert("maximum 5 sany special categoriya"):m().push("/admin/special-categories/add")};return(e,i)=>{const k=x,u=C;return d(),p("div",null,[r(k,{class:"bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer",onClick:h},{default:n(()=>[c(" Goshmak + ")]),_:1}),a("div",R,[P,r(u,{type:""},{default:n(()=>[c("Pozmak")]),_:1})]),a("ul",null,[(d(!0),p(B,null,$(g(s),t=>(d(),p("div",{class:"bg-gray-200 flex justify-between items-center text-lg font-bold rounded-md p-2 m-1",key:t.uuid},[a("img",{src:`http://duypbaha.com.tm/api/v1/uploads/special_categories/${t==null?void 0:t.img_path}`,alt:"",class:"h-10 w-15"},null,8,V),a("p",null,N(t.name),1),a("div",j,[r(u,{onClick:v=>("useRouter"in e?e.useRouter:g(m))().push(`/admin/special-categories/edit/${t.uuid}`),type:"secondary"},{default:n(()=>[c("uytget")]),_:2},1032,["onClick"]),r(u,{onClick:v=>f(t),type:"danger"},{default:n(()=>[c("Pozmak")]),_:2},1032,["onClick"])])]))),128))])])}}};export{F as default};