import{_ as y}from"./nuxt-link.d1532614.js";import{_ as S}from"./like.ce290c70.js";import{_ as $}from"./TrashButtonAndCounter.2b4922d2.js";import{u as v}from"./useMyFetch.6cc4916f.js";import{u as B}from"./favourite.c67c1bff.js";import{u as C}from"./authStore.50b6cfab.js";import{a as b,b as V,Z as F,I as P,H as x,M as A,R as f,u as i,U as T,K as E,e as I,G as M}from"./swiper-vue.406cf000.js";const N=["src"],O={class:"w-fit mx-auto md:text-3xl text-base font-alatsi text-[#3C4242] mt-3 mb-1"},z={class:"mx-auto text-[#48BC4E] text-3xl font-alatsi w-fit pb-1 border-b border-[#44A4DB]"},D={class:"absolute top-5 right-5"},Z={__name:"base-product",props:{item:{type:Object,default:{}}},setup(_){var g;const k=_,n=B(),t=b({}),o=C();t.value=k.item,(g=n.wish_items)==null||g.forEach(async e=>{e.uuid==k.item.uuid?t.value.isLiked=!0:t.isLiked==!1});const L=async e=>{var a,m,c,p,u,s,l,r;if((a=o.userToken)!=null&&a.uuid){const{data:h}=await v(`/api/v1/client/wish-list?lang=tm&user_id=${(m=o.userToken)==null?void 0:m.uuid}`);(c=h.value)!=null&&c.status&&((p=h.value.data)==null||p.filter(w=>{w.images=w.img_path}),n.wish_items=h.value.data)}e.isLiked?(e.isLiked=!1,n.removeLocalStorage(e),(u=o.userToken)!=null&&u.uuid&&await v(`/api/v1/client/wish-list/delete/${(s=o.userToken)==null?void 0:s.uuid}/${e.uuid}`,{method:"POST"})):(e.isLiked=!0,(l=o.userToken)!=null&&l.uuid&&v("/api/v1/client/wish-list/create",{method:"POST",body:{product_id:e.uuid,user_id:(r=o.userToken)==null?void 0:r.uuid}}),n.setLocalStorage(e))},d=b(null);return V(d,()=>{}),(e,a)=>{var u;const m=y,c=S,p=$;return F(),P(M,null,[x(m,{to:e.localePath(`/product/${(u=_.item)==null?void 0:u.uuid}`),class:"rounded-xl w-full text-center"},{default:A(()=>{var s,l,r;return[f("img",{class:"border w-full aspect-square select-none rounded-md md:rounded-lg border-[#e6e6e6]",src:`http://duypbaha.com.tm/api/v1/uploads/images/${(s=i(t))==null?void 0:s.images}`,alt:"",height:"262",loading:"lazy"},null,8,N),f("div",O,T((l=i(t))==null?void 0:l.name),1),f("div",z,T((r=i(t))==null?void 0:r.price)+" TMT ",1)]}),_:1},8,["to"]),f("div",D,[x(c,{fill:"none",onClick:a[0]||(a[0]=s=>L(i(t))),class:E([_.item.isLiked?"fill-red-600 text-red-600":" text-white","hover:text-red-600 w-7"])},null,8,["class"])]),x(p,{class:"pt-5",item:i(t),modelValue:i(d),"onUpdate:modelValue":a[1]||(a[1]=s=>I(d)?d.value=s:null)},null,8,["item","modelValue"])],64)}}};export{Z as _};