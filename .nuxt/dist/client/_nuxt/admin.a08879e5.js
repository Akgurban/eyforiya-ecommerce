import{_ as f}from"./nuxt-link.dea4be12.js";import{a as m,b as u}from"./entry.c80f5040.js";import{_ as x}from"./logo.e5d2cbb5.js";import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";import{a as l,Z as s,I as n,R as e,u as d,G as h,Y as g,L as v,M as b,S as w,U as y,K as $,Q as k,H as _,_ as R}from"./swiper-vue.91aa2a35.js";import{u as B}from"./adminStore.844cc759.js";import{_ as C}from"./loader.1e7de48f.js";import{u as L}from"./loader.40ba2c26.js";const S={class:"w-[300px] h-screen bg-slate-200 p-4 shadow-md font-bold text-2xl"},N={class:"m-5"},z={__name:"sidebar",setup(i){const a=l([{name:"Kategoriyalar",path:"/admin/categories"},{name:"Kici kategoriyalar",path:"/admin/sub-categories"},{name:"Mahabat",path:"/admin/banners"},{name:"Yorite Kategoriyalar",path:"/admin/special-categories"},{name:"Brendlar",path:"/admin/brands"},{name:"Wideolar",path:"/admin/videos"},{name:"Harytlar",path:"/admin/products"},{name:"Teswirler",path:"/admin/comments"},{name:"Zakazlar",path:"/admin/orders"},{name:"Reset Password",path:"/admin/reset-password"}]);return l(!0),(t,o)=>{const c=f;return s(),n("div",S,[e("img",{class:"mx-auto md:cursor-pointer cursor-auto",onClick:o[0]||(o[0]=r=>("useRouter"in t?t.useRouter:d(m))().push(t.localePath("/"))),src:x,alt:""}),e("ul",N,[(s(!0),n(h,null,g(d(a),r=>(s(),v(c,{key:r.name,to:r.path,class:$([{active:("useRoute"in t?t.useRoute:d(u))().path.includes(r.path)},"admin-links bg-slate-300 hover:bg-slate-500 hover:text-slate-50 my-2 p-2 text-xl hover:underline cursor-pointer flex flex-col"])},{default:b(()=>[w(y(r.name),1)]),_:2},1032,["to","class"]))),128))])])}}},K=p(z,[["__scopeId","data-v-4a62032d"]]),V=e("div",null,"Admin Panel",-1),P=e("p",{class:"text-white p-1 rounded-md bg-red-700"},"Ulgamdan Cyk",-1),T=[P],j={__name:"header",setup(i){u();const a=B(),t=()=>{a.adminToken="",m().push("/")};return(o,c)=>(s(),n("div",null,[e("div",{class:"bg-gray-200 cursor-pointer w-full p-2 text-base font-semibold flex justify-between"},[V,e("div",{onClick:t,class:"group relative flex gap-2 font-bold"},T)])]))}},A={key:0,class:"fixed opacity-75 text-3xl font-bold z-10 no-scrollbar overflow-hidden top-0 w-screen h-screen flex items-center justify-center bg-slate-500 text-white"},H=e("img",{src:C,alt:""},null,-1),I=[H],M={__name:"base-loader",setup(i){const a=L();return l(null),l(null),(t,o)=>(s(),n("div",null,[d(a).getLoading?(s(),n("div",A,I)):k("",!0)]))}},U={},Y={class:"w-[1200px] mx-auto z-50"},Z={class:"flex gap-4"},D={class:"w-[900px]"},E={class:"h-[96vh] overflow-auto"};function F(i,a){const t=K,o=j,c=M;return s(),n(h,null,[e("div",Y,[e("div",Z,[_(t),e("div",D,[_(o),e("div",E,[R(i.$slots,"default")])])])]),_(c)],64)}const te=p(U,[["render",F]]);export{te as default};