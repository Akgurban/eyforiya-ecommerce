import{_ as N}from"./base-input.cd175c59.js";import{_ as S}from"./chevron-left.4af3a964.js";import{a as h,b as A,Z as o,I as a,H as p,M as I,R as s,U as u,G as b,Y as x,u as y,S as z,Q as D,ad as E,ae as F,a2 as L}from"./swiper-vue.406cf000.js";import{b as U}from"./entry.84c95077.js";const M={class:"w-full"},R={key:0,class:"lg:relative lg:top-0 md:bottom-auto bottom-0 md:pt-10 pt-20 overflow-auto fixed shadow-2xl top-0 z-40 md:h-fit h-screen px-3 py-3 pb-10 bg-slate-100 rounded-md p-4"},T={class:"md:text-2xl text-base uppercase font-bold text-[#44A4DB] font-alatsi mb-2"},j={class:"flex items-center gap-2"},G={class:"font-alatsi text-base font-semibold"},H={key:0,class:"mt-5"},J={class:"md:text-2xl text-base uppercase font-bold text-[#44A4DB] font-alatsi mb-2"},O={key:0,class:"ml-5"},Q=["onClick"],Y={class:"relative mt-5"},Z={class:"md:text-2xl text-base uppercase font-bold text-[#44A4DB] font-alatsi mb-2"},K={class:"right-0 border-t-2 h-auto duration-250 ease-in-out z-10 w-full"},P=["onClick"],W={class:"py-2 px-5 hover:bg-gray-100 cursor-pointer"},X={class:"flex items-center justify-start gap-2"},ee={class:"h-4 w-4"},te=["onUpdate:modelValue"],se={class:"font-alatsi text-base font-semibold hover:text-[#44A4DB] cursor-auto md:cursor-pointer"},re={__name:"FilteredSidebar",props:{brands:{type:Array,default:[]},show_filter:{type:Boolean,default:!1},show_cat:{type:Boolean,default:!0},sub_categories:{type:Array,default:[]}},emits:["someChange"],setup(_,{emit:f}){var k,C,B;const g=_,i=U(),l=h("");(k=i.query)!=null&&k.order&&(l.value=i.query.order);const $=h([{code:"",name:"none"},{code:"asc",name:"min_to"},{code:"desc",name:"max_to"}]),n=h([]),r=h("");(C=i.query)!=null&&C.filter&&((B=g.brands)==null||B.forEach(e=>{var d,c;(c=JSON.parse((d=i.query)==null?void 0:d.filter))==null||c.forEach(v=>{v==e.uuid&&(e.selected=!0,n.value.push(e.uuid))})}));const V=async e=>{e.selected?(e.selected=!1,n.value.filter((d,c)=>{d==e.uuid&&n.value.splice(c,1)})):(e.selected=!0,n.value.push(e.uuid)),f("someChange",{sub:r.value,ord:l.value,brnd:n.value})};function q(e){l.value=e.code,f("someChange",{sub:r.value,ord:l.value,brnd:n.value})}return A(r,()=>{f("someChange",{sub:r.value,ord:l.value,brnd:n.value})}),A(n,()=>{f("someChange",{sub:r.value,ord:l.value,brnd:n.value})}),(e,d)=>{const c=N,v=S;return o(),a("div",M,[p(L,{name:"slide-fade"},{default:I(()=>[g.show_filter?D("",!0):(o(),a("div",R,[s("div",null,[s("div",T,u(e.$t("order")),1),s("div",null,[(o(!0),a(b,null,x(y($),t=>(o(),a("div",j,[p(c,{onChange:m=>q(t),heightFull:"",class:"w-5 h-5",type:"radio",name:"price-filter",checked:t.code==y(l)},null,8,["onChange","checked"]),s("div",G,u(e.$t(t.name)),1)]))),256))])]),_.show_cat?(o(),a("div",H,[s("div",J,u(e.$t("in_category")),1),y(i).query.catId?(o(),a("div",{key:1,onClick:d[0]||(d[0]=t=>r.value=null),class:"text-[#44A4DB] md:cursor-pointer cursor-auto font-bold font-alatsi ml-5"},[p(v,{class:"inline text-[#44A4DB]"}),z(" = yza Cyk ")])):(o(),a("div",O,[(o(!0),a(b,null,x(_.sub_categories,t=>(o(),a("p",{onClick:m=>r.value=t.uuid,class:"font-alatsi font-semibold hover:text-[#44A4DB] cursor-auto md:cursor-pointer"},u(t==null?void 0:t.name),9,Q))),256))]))])):D("",!0),s("div",Y,[s("div",Z,u(e.$t("brands")),1),s("div",null,[s("div",K,[(o(!0),a(b,null,x(_.brands,(t,m)=>(o(),a("ul",{onClick:w=>V(t),key:m},[s("li",W,[s("div",X,[s("div",ee,[E(s("input",{"onUpdate:modelValue":w=>t.selected=w,type:"checkbox"},null,8,te),[[F,t.selected]])]),s("div",se,u(t.brand_name),1)])])],8,P))),128))])])])]))]),_:1})])}}};export{re as _};