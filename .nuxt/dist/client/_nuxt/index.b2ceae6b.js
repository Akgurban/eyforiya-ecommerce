import{_ as b}from"./nuxt-link.9f886ca5.js";import{u as C,_ as v}from"./user.450c21c9.js";import{b as w}from"./entry.54e19d71.js";import{a as k,a0 as N,M as i,H as r,N as n,X as o,G as B,a1 as $,u as p,L as _,Z as c,Y as L}from"./swiper-vue.00c128fd.js";const S={class:"rounded-md p-2 m-1 flex justify-between"},V=o("p",{class:"font-bold"},"Name category",-1),j=["src"],A={class:"flex gap-3"},M={__name:"index",async setup(D){let a,g;const l=C(),d=k(null),m=w();try{const{data:e}=([a,g]=N(()=>l.getCategories()),a=await a,g(),a);console.log(e,"data"),d.value=e.data}catch(e){console.log(e)}const f=async()=>{try{const{data:e}=await l.getCategories();console.log(e,"data"),d.value=e.data}catch(e){console.log(e)}},y=async e=>{try{const{data:s}=await l.deleteCategories({uuid:e.uuid});console.log(s,"data"),await f()}catch(s){console.log(s)}};return(e,s)=>{const h=b,u=v;return _(),i("div",null,[r(h,{class:"bg-green-700 block rounded-md hover:bg-green-600 p-2 text-white font-bold text-center mt-3 cursor-pointer",to:"/admin/categories/add"},{default:n(()=>[c(" Add + ")]),_:1}),o("div",S,[V,r(u,{type:""},{default:n(()=>[c("Delete")]),_:1})]),o("ul",null,[(_(!0),i(B,null,$(p(d),t=>(_(),i("div",{class:"bg-gray-200 cursor-pointer flex justify-between items-center text-lg font-bold rounded-md p-2 m-1",key:t.uuid},[o("img",{src:`http://duypbaha.com.tm/api/v1/uploads/categories/${t==null?void 0:t.img_path}`,alt:"",class:"h-10 w-15"},null,8,j),o("p",null,L(t.name),1),o("div",A,[r(u,{onClick:x=>p(m).push(`/admin/categories/edit/${t.uuid}`),type:"primary"},{default:n(()=>[c("edit")]),_:2},1032,["onClick"]),r(u,{onClick:x=>y(t),type:"danger"},{default:n(()=>[c("delete")]),_:2},1032,["onClick"])])]))),128))])])}}};export{M as default};