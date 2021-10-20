var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,n=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&s(e,t,a[t]);if(l)for(var t of l(a))d.call(a,t)&&s(e,t,a[t]);return e},r=(e,l)=>a(e,t(l));import{_ as u}from"./lodash.4c220a29.js";import{r as i}from"./index.704b63ee.js";import{r as c,d as p,k as m,e as _,c as f,s as v,q as b,m as k,v as y,I as j,y as w,i as g,g as V,F as x,t as I,n as h,bn as P,p as U,f as C}from"./vendor.b380b2be.js";const O={class:"task-table"},S={key:1},M={key:1},L={key:1},N=j("保存"),T=j("编辑"),E=j("删除");var z=p({props:{data:null,status:null},emits:["updateTask","modifyProjectEdit"],setup:(e,{emit:a})=>(t,l)=>{const o=m("el-input"),d=m("el-table-column"),s=m("el-tag"),n=m("el-button"),r=m("el-popconfirm"),u=m("el-table");return _(),f("div",O,[v(u,{data:e.data,style:{width:"100%"}},{default:b((()=>[v(d,{prop:"taskName",label:"任务名称"},{default:b((e=>[e.row.edit?(_(),k(o,{key:0,modelValue:e.row.taskName,"onUpdate:modelValue":a=>e.row.taskName=a},null,8,["modelValue","onUpdate:modelValue"])):(_(),f("span",S,y(e.row.taskName),1))])),_:1}),v(d,{prop:"developTime",label:"开发工时"},{default:b((e=>[e.row.edit?(_(),k(o,{key:0,modelValue:e.row.developTime,"onUpdate:modelValue":a=>e.row.developTime=a},null,8,["modelValue","onUpdate:modelValue"])):(_(),f("span",M,y(e.row.developTime),1))])),_:1}),v(d,{prop:"developMember",label:"开发人"},{default:b((e=>[e.row.edit?(_(),k(o,{key:0,modelValue:e.row.developMember,"onUpdate:modelValue":a=>e.row.developMember=a},null,8,["modelValue","onUpdate:modelValue"])):(_(),f("span",L,y(e.row.developMember),1))])),_:1}),v(d,{prop:"taskStatus",label:"任务状态"},{default:b((a=>{var t;return[a.row.edit?(_(),k(o,{key:0,modelValue:a.row.taskStatus,"onUpdate:modelValue":e=>a.row.taskStatus=e},null,8,["modelValue","onUpdate:modelValue"])):(_(),k(s,{key:1,type:null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.type},{default:b((()=>{var t;return[j(y(null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.text),1)]})),_:2},1032,["type"]))]})),_:1}),v(d,{label:"操作",width:"200"},{default:b((e=>[e.row.edit?(_(),k(n,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:t=>{return l=e.$index,o=e.row,console.log(l,o),a("updateTask",l,o),void a("modifyProjectEdit",l,!1);var l,o}},{default:b((()=>[N])),_:2},1032,["onClick"])):(_(),k(n,{key:1,size:"mini",icon:"el-icon-edit",onClick:t=>{return l=e.$index,o=e.row,console.log(l,o),void a("modifyProjectEdit",l,!0);var l,o}},{default:b((()=>[T])),_:2},1032,["onClick"])),v(r,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:l[0]||(l[0]=e=>{})},{reference:b((()=>[v(n,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:b((()=>[E])),_:1})])),_:1})])),_:1})])),_:1},8,["data"])])}});z.__scopeId="data-v-6c379f1e";const $=e=>(U("data-v-409ef2a4"),e=e(),C(),e),q={class:"board"},B={class:"board__info"},D=j("项目看板"),F=$((()=>V("span",null,"项目看板主要应用场景：项目的任务管理，任务进度管理等。",-1))),A={class:"board__project"},G=$((()=>V("div",{class:"board__project-title"},"项目概览",-1))),H={class:"board__project-list"},J=["onClick"],K={class:"board__detail"},Q=$((()=>V("div",{class:"board__detail-title"},"项目详情",-1))),R={key:0,class:"board__detail-empty"},W={key:1,class:"board__detail-content"},X={class:"board__detail-head"},Y=$((()=>V("span",{class:"board__detail-name"},"项目名称",-1))),Z=$((()=>V("span",{class:"board__detail-name"},"负责人",-1))),ee=$((()=>V("span",{class:"board__detail-name"},"开发工时",-1))),ae=$((()=>V("span",{class:"board__detail-name"},"项目状态",-1))),te=$((()=>V("span",{class:"board__detail-name"},"任务总数",-1))),le=$((()=>V("span",{class:"board__detail-name"},"任务进度",-1))),oe=j("： "),de={class:"board__detail-search"},se=j("查询"),ne={class:"board__detail-table"};var re=p({setup(e){const a=w({taskStatus:"",developMember:""}),t=new Map([["1",{text:"准备阶段",type:"info"}],["2",{text:"开发中",type:""}],["3",{text:"开发完成",type:"success"}],["4",{text:"测试阶段",type:"danger"}],["5",{text:"待发布",type:"warning"}]]),l=c({}),{data:o,getProjectInfo:d,updatedProjectInfo:s}=(()=>{const e=c([]);return{data:e,getProjectInfo:function(){return i({url:"/api/project/list",method:"get",json:!0}).then((a=>{0===a.status&&(e.value=a.data)}))},updatedProjectInfo:function(a,t,l){const o=u.findIndex(e.value,["projectId",a]),d=e.value[o].taskList;e.value[o].taskList=u.map(d,((e,a)=>a===t?l:e))}}})();d();const p=g((()=>l.value.taskList));function U(e){const a=u.countBy(e,(e=>e.taskStatus));return u.map(Object.entries(a),(([e,a])=>{const l=t.get(e);return r(n({},l),{count:a})}))}function C(){console.log("search!")}function O(e,a){const t=u.get(l,"value.taskList")||[];l.value.taskList=u.map(t,((t,l)=>e===l?r(n({},t),{edit:a}):t))}function S(e,a){const t=l.value.projectId;s(t,e,a)}return(e,d)=>{const s=m("el-divider"),n=m("el-avatar"),r=m("el-col"),u=m("el-row"),i=m("el-card"),c=m("el-tag"),w=m("el-input"),g=m("el-form-item"),M=m("el-option"),L=m("el-select"),N=m("el-button"),T=m("el-form");return _(),f("div",q,[V("div",B,[v(s,{"content-position":"left"},{default:b((()=>[D])),_:1}),F]),V("div",A,[G,V("div",H,[(_(!0),f(x,null,I(P(o),((e,a)=>(_(),f("div",{key:a,class:h(["board__project-item",{"board__project-item--active":l.value.projectId===e.projectId}]),onClick:a=>{return t=e,void(l.value=t);var t}},[v(i,null,{default:b((()=>[v(u,null,{default:b((()=>[v(r,{span:5},{default:b((()=>[v(n,{class:"board__project-avatar",size:90},{default:b((()=>[j(y(e.projectName.substr(0,1)),1)])),_:2},1024)])),_:2},1024),v(r,{span:18,style:{"margin-left":"6px",color:"#7a848d"}},{default:b((()=>[V("p",null,"项目名称："+y(e.projectName),1),V("p",null,"总负责人："+y(e.principal),1),V("p",null,"开发耗时："+y(e.timeConsuming),1),V("p",null,"项目状态: "+y(e.status),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],10,J)))),128))])]),V("div",K,[Q,v(i,{class:"board__detail-wrap"},{default:b((()=>[l.value.projectId?(_(),f("div",W,[V("div",X,[v(u,null,{default:b((()=>[v(r,{span:5},{default:b((()=>[Y,j("："+y(l.value.projectName),1)])),_:1}),v(r,{span:5},{default:b((()=>[Z,j("："+y(l.value.principal),1)])),_:1}),v(r,{span:5},{default:b((()=>[ee,j("："+y(l.value.timeConsuming),1)])),_:1}),v(r,{span:5},{default:b((()=>[ae,j("："+y(l.value.status),1)])),_:1})])),_:1}),v(u,{class:"board__detail-task"},{default:b((()=>[v(r,{span:5},{default:b((()=>[te,j("："+y(l.value.taskList.length),1)])),_:1}),v(r,{span:18},{default:b((()=>[le,oe,(_(!0),f(x,null,I(U(l.value.taskList),((e,a)=>(_(),k(c,{key:a,class:"board__detail-tag",type:e.type},{default:b((()=>[j(y(e.text)+": "+y(e.count),1)])),_:2},1032,["type"])))),128))])),_:1})])),_:1})]),v(s),V("div",de,[v(T,{inline:!0,model:P(a)},{default:b((()=>[v(g,{label:"开发人"},{default:b((()=>[v(w,{modelValue:P(a).developMember,"onUpdate:modelValue":d[0]||(d[0]=e=>P(a).developMember=e),placeholder:"请输入开发人"},null,8,["modelValue"])])),_:1}),v(g,{label:"任务状态"},{default:b((()=>[v(L,{modelValue:P(a).taskStatus,"onUpdate:modelValue":d[1]||(d[1]=e=>P(a).taskStatus=e),placeholder:"选择任务状态"},{default:b((()=>[v(M,{label:"准备阶段",value:1}),v(M,{label:"开发中",value:2}),v(M,{label:"开发完成",value:3}),v(M,{label:"测试阶段",value:4}),v(M,{label:"待发布",value:5})])),_:1},8,["modelValue"])])),_:1}),v(g,null,{default:b((()=>[v(N,{type:"primary",onClick:C},{default:b((()=>[se])),_:1})])),_:1})])),_:1},8,["model"])]),V("div",ne,[v(z,{data:P(p),status:P(t),onUpdateTask:S,onModifyProjectEdit:O},null,8,["data","status"])])])):(_(),f("div",R,"请选择项目，查看项目详情！！！"))])),_:1})])])}}});re.__scopeId="data-v-409ef2a4";export{re as default};
