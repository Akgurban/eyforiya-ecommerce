import{u as h}from"./trash.376bfbcf.js";import{e as o}from"./entry.c80f5040.js";const c=o("favourite",{state:()=>({wish_items:h("wish_items",[])}),actions:{async setLocalStorage(s){var i;console.log(s,this.wish_items),s.isLiked=!0,this.wish_items==null&&(this.wish_items=[]),(i=this.wish_items)==null||i.push(s)},async removeLocalStorage(s){var i;s.isLiked=!1,(i=this.wish_items)==null||i.filter((e,a)=>{var t;(s==null?void 0:s.uuid)==(e==null?void 0:e.uuid)&&((t=this.wish_items)==null||t.splice(a,1))})}},persist:!0});export{c as u};