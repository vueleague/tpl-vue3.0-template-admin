import{_ as e}from"./richEditor.82a6a0a5.js";import{d as a,r as l,p as t,c as d,m as o,g as s,e as n,f as r,w as i,D as c}from"./vendor.807a3edc.js";var u=a({components:{RichEditor:e},setup(){const e=l("默认数据"),a=l();setTimeout((()=>{e.value="3秒后的数据"}),3e3);return{handleUpdateValue:e=>{console.log(e),a.value=e},editorValue:e}}});const p=i();t("data-v-44db0bca");const f={class:"editorWrapper"},v={class:"info"},m=c("富文本编辑器"),_=r("span",{style:{"text-align":"left"}},"富文本编辑器编辑场景。",-1),b={class:"grid-content bg-purple-dark"},g={style:{"text-align":"left"}},V=r("span",null,"富文本编辑器",-1);d();const h=p(((e,a,l,t,d,i)=>{const c=o("el-divider"),u=o("RichEditor",!0),h=o("el-card"),x=o("el-col"),U=o("el-row");return s(),n("div",f,[r("div",v,[r(c,{"content-position":"left"},{default:p((()=>[m])),_:1}),_]),r("div",null,[r(U,null,{default:p((()=>[r(x,{offset:1,span:22},{default:p((()=>[r("div",b,[r(h,{class:"box-card"},{default:p((()=>[r("div",g,[V,r(c)]),r(u,{"model-value":e.editorValue,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])])),_:1})])])),_:1})])),_:1})])])}));u.render=h,u.__scopeId="data-v-44db0bca";export{u as default};