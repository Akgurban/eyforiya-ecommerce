import{_ as z}from"./nuxt-link.3a82f007.js";import{_ as D}from"./chevron-right.c437f043.js";import{_ as F}from"./TrashButtonAndCounter.7722f0bb.js";import{_ as H}from"./base-button.0f6fb678.js";import{a as y,b as E,aa as G,Z as h,I as f,R as t,H as v,M as L,S as P,U as a,u as p,Q as U,G as Q,Y,ad as Z,al as J,e as K}from"./swiper-vue.406cf000.js";import{g as W,c as X,a as A}from"./entry.f57c7ce9.js";import{u as w}from"./useMyFetch.182df1fb.js";import{a as tt}from"./trash.69e30f7e.js";import{u as st}from"./authStore.ba1671ca.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./trash.5beb687a.js";import"./fetch.3824631a.js";const et=""+new URL("deletecon.8c55a18e.svg",import.meta.url).href,ot={class:"2xl:w-[1424px] xl:w-[900px] w-screen mx-auto"},at={class:"2xl:w-[1424px] xl:w-[900px] w-screen flex gap-3 items-center pl-10"},lt={class:"cursor-pointer font-bold"},nt={class:"w-full"},rt={class:"w-full"},ct={class:"bg-[#3C4242] text-white p-2 md:p-[26px] flex justify-between mt-10 px-3 md:px-10 w-full"},ut=t("div",null,null,-1),it={class:"flex justify-between w-full md:text-xl text-[10px]"},dt={class:"uppercase"},pt={class:"uppercase"},_t={class:"uppercase"},ht={class:"uppercase"},ft={key:0,class:"mt-20 text-center w-full text-6xl text-gray-500 font-alatsi font-bold"},mt={class:"flex md:flex-row flex-col items-center md:gap-10 gap-5"},xt=["onClick","src"],vt={class:"font-alatsi md:text-2xl text-lg w-[100px]"},wt={class:"flex items-start w-full justify-end gap-1 md:gap-10 md:flex-row flex-row"},gt={class:"w-[150px] md:w-[400px] flex md:flex-row flex-col items-center justify-start ml-0"},yt={class:"uppercase md:w-[200px] w-[150px]"},bt={class:"uppercase font-bold text-lg md:w-[150px] flex flex-nowrap w-[150px]"},kt=["onClick"],$t=t("img",{class:"m-1 w-4",src:et,alt:""},null,-1),Tt=[$t],Ct={key:1,class:"bg-[#3C4242] text-white py-3 flex md:flex-row flex-col gap-y-4 justify-between w-full md:text-xl px-5 text-[10px]"},jt={class:""},Rt={class:"uppercase font-bold font-alatsi"},St={class:"uppercase font-bold font-inter text-lg"},Bt={class:"uppercase font-bold font-alatsi"},Mt={class:"flex h-12 items-center justify-center text-black relative bg-white rounded-lg"},Nt=t("div",{class:"h-full flex text-lg items-center mx-2"},"+993",-1),Gt={__name:"index",async setup(Vt){var C,j,R,S,B,M;let m,b;y(0);const{locale:k}=W(),$=X(),l=tt(),r=st(),g=y(0),d=y(null),T=()=>{var s;g.value=0,(s=l.trash_items.products)==null||s.filter(o=>{g.value+=o.price*o.count})};T(),E(l.trash_items,T);const I=async s=>{var o,c,u,i,n,_,e;if(l.removeLocalStorage(s,0),r.userToken){const{data:N,status:q}=await w("/api/v1/client/trash/create",{body:{user_id:(o=r.userToken)==null?void 0:o.uuid,product_id:s==null?void 0:s.uuid,count:0},method:"POST"});if(q&&(c=r.userToken)!=null&&c.uuid){const{data:x}=await w(`/api/v1/client/trash?user_id=${r.userToken.uuid}&lang=${k.value}`);x.value.status&&((i=(u=x.value)==null?void 0:u.data)!=null&&i.length)&&(l.trash_items.products=[],(_=(n=x.value)==null?void 0:n.data)==null||_.filter(V=>{V.images=V.img_path}),l.trash_items.products=(e=x.value)==null?void 0:e.data)}}};if((C=r.userToken)!=null&&C.uuid){const{data:s}=([m,b]=G(()=>w(`/api/v1/client/trash?user_id=${r.userToken.uuid}&lang=${k.value}`)),m=await m,b(),m);s.value.status&&((R=(j=s.value)==null?void 0:j.data)!=null&&R.length)&&(l.trash_items.products=[],(B=(S=s.value)==null?void 0:S.data)==null||B.filter(o=>{o.images=o.img_path}),l.trash_items.products=(M=s.value)==null?void 0:M.data)}const O=async()=>{var o,c,u,i;const s=[];if((o=l.trash_items.products)==null||o.filter(n=>{s.push({product_id:n.uuid,count:`${n.count}`})}),((c=d.value)==null?void 0:c.length)==8){const{data:n}=await w("/api/v1/client/products/order/create",{method:"POST",body:{user_id:((u=r.userToken)==null?void 0:u.uuid)||null,phone:`${d.value}`,products:s}});(i=n.value)!=null&&i.status&&(l.trash_items.products=[],$.success("Habarynyz ustunlikli kabul edildi"),d.value="",A().push("/"))}else $.error("Telefonynyzy dogry dolduryn")};return(s,o)=>{var _;const c=z,u=D,i=F,n=H;return h(),f("div",ot,[t("div",at,[v(c,{to:"/",class:"cursor-pointer hover:font-bold"},{default:L(()=>[P(a(s.$t("main")),1)]),_:1}),v(u,{class:"h-3"}),t("p",lt,a(s.$t("add_to")),1)]),t("div",nt,[t("div",rt,[t("div",ct,[ut,t("div",it,[t("p",dt,a(s.$t("info_product")),1),t("p",pt,a(s.$t("quantity")),1),t("p",_t,a(s.$t("price")),1),t("p",ht,a(s.$t("delete")),1)])]),(_=p(l).trash_items.products)!=null&&_.length?U("",!0):(h(),f("div",ft,a(s.$t("trash_empty")),1)),(h(!0),f(Q,null,Y(p(l).trash_items.products,e=>(h(),f("div",{key:e,class:"py-12 p-[26px] flex items-center justify-between px-10"},[t("div",null,[t("div",mt,[t("img",{onClick:N=>("useRouter"in s?s.useRouter:p(A))().push(`/product/${e==null?void 0:e.uuid}`),src:`http://duypbaha.com.tm/api/v1/uploads/images/${e.images}`,alt:"",class:"w-35 rounded-md aspect-square object-cover"},null,8,xt),t("p",vt,a(e.name),1)])]),t("div",wt,[t("div",gt,[t("p",yt,[v(i,{count:e.count,item:e},null,8,["count","item"])]),t("p",bt,a((e==null?void 0:e.count)*(e==null?void 0:e.price))+" TMT ",1)]),t("div",{onClick:N=>I(e),class:"block cursor-pointer"},Tt,8,kt)])]))),128)),p(l).trash_items.products.length?(h(),f("div",Ct,[t("div",jt,[t("p",Rt,a(s.$t("totalprice"))+": ",1),t("p",St,a(p(g))+" TMT ",1)]),t("div",null,[t("p",Bt,a(s.$t("phone"))+":",1),t("div",Mt,[Nt,Z(t("input",{class:"text-black text-lg bg-white outline-0 border-white",type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>K(d)?d.value=e:null),placeholder:"6522222"},null,512),[[J,p(d)]])])]),v(n,{onClick:O,class:"rounded-lg text-lg",type:"secondary"},{default:L(()=>[P(a(s.$t("prepare")),1)]),_:1})])):U("",!0)])])])}}};export{Gt as default};