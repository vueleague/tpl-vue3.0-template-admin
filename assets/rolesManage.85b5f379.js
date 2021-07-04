var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,s=(e,l)=>{for(var a in l||(l={}))o.call(l,a)&&r(e,a,l[a]);if(t)for(var a of t(l))n.call(l,a)&&r(e,a,l[a]);return e},i=(e,t)=>l(e,a(t));import{d,B as u,m as c,l as m,e as p,q as f,p as b,a as g,i as v,aI as _,y,o as h,c as C,b as k,t as w,w as z,A as N,r as S,D as V,aL as x,x as O,E as R}from"./vendor.fcbdba18.js";import{u as j}from"./index.72d28888.js";var D=d({props:{currentRole:{type:Object,default:()=>({roleName:"",state:1})}},setup(e){const l=u(e,"currentRole"),a=j(),t=c({url:"/role/allow",purl:"/role/permissions",loading:!1,form:{key:"",label:""},menu:{loading:!1,url:"/menu/list",data:[],form:[]}}),o=m((()=>l.value.role)),n=m((()=>a.state.permissionModule.routes)),r=()=>{var e,l;for(const a of n.value)(null==(e=null==a?void 0:a.meta)?void 0:e.hidden)||t.menu.data.push({key:null==a?void 0:a.path,label:null==(l=null==a?void 0:a.meta)?void 0:l.title})};return p((()=>{r()})),i(s({},f(t)),{role:o,fetchMenuData:r,fetchData:()=>{},saveData:()=>{}})}});const E=z();b("data-v-25b36d06");const P={class:"wrapper"},U={class:"card-header"},B=k("br",null,null,-1),I=k("i",{class:"fa fa-check"},null,-1),M=N(" 确认修改 ");g();const q=E(((e,l,a,t,o,n)=>{const r=v("el-form-item"),s=v("el-form"),i=v("el-transfer"),d=v("el-card"),u=v("el-button"),c=v("el-row"),m=_("loading");return y((h(),C("div",P,[k(d,{class:"transfer"},{header:E((()=>[k("span",null,[k("div",U,[k(s,{"label-position":"left",inline:"",class:"info-table"},{default:E((()=>[k(r,{label:"名称"},{default:E((()=>[k("span",null,w(e.role.roleName),1)])),_:1})])),_:1})])])])),default:E((()=>[y(k(i,{modelValue:e.menu.form,"onUpdate:modelValue":l[1]||(l[1]=l=>e.menu.form=l),data:e.menu.data,titles:["菜单","已授权"]},null,8,["modelValue","data"]),[[m,e.menu.loading]])])),_:1}),B,k(c,{class:"btns"},{default:E((()=>[k(u,{size:"mini",type:"primary",disabled:0==e.role.state,onClick:e.saveData},{default:E((()=>[I,M])),_:1},8,["disabled","onClick"])])),_:1})],512)),[[m,e.loading]])}));D.render=q,D.__scopeId="data-v-25b36d06";var F=d({name:"RoleNew",emits:["success"],setup(e,{emit:l}){const a=S(),t=c({form:{roleName:""},loading:!1});return s({submitForm:()=>{a.value.validate((e=>e?(l("success",s({},t.form)),!0):(console.log("error submit!!"),!1)))},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}]},formRef:a,url:"/role/add"},f(t))}});const T={class:"new"},$=k("i",{class:"fa fa-plus"},null,-1),A=N(" 新增 ");F.render=function(e,l,a,t,o,n){const r=v("el-input"),s=v("el-form-item"),i=v("el-button"),d=v("el-row"),u=v("el-form"),c=_("loading");return y((h(),C("div",T,[k(u,{ref:"formRef",model:e.form,rules:e.rules,"label-position":"right","label-width":"100px"},{default:V((()=>[k(s,{label:"角色名称",prop:"roleName"},{default:V((()=>[k(r,{modelValue:e.form.roleName,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.roleName=l),placeholder:"请输入角色名称"},null,8,["modelValue"])])),_:1}),k(d,{class:"btn-container"},{default:V((()=>[k(i,{size:"mini",type:"primary",onClick:l[2]||(l[2]=l=>e.submitForm())},{default:V((()=>[$,A])),_:1})])),_:1})])),_:1},8,["model","rules"])],512)),[[c,e.loading]])};var L=d({name:"RoleManage",components:{RoleEdit:D,RoleNew:F},setup(){const e=c({url:{c:"/role/add",r:"/role/list",u:"/role/update",d:"/role/delete"},param:{limit:10,page:1},data:[{roleName:"超级管理员",state:1},{roleName:"管理员",state:1}],loading:!1,is_search:!1,add_visible:!1,edit_visible:!1,detail_visible:!1,posted:{role:{roleName:"",state:1}}}),l=m((()=>e.data.length));return i(s({},f(e)),{total:l,onCurrentChange:()=>{},onSizeChange:l=>{e.param.limit=l},onCreate:()=>{e.add_visible=!0},onCreateSuccess:l=>{console.log(l);const a={roleName:l.roleName,state:1};e.data.push(a),e.add_visible=!1},onEditSuccess:()=>{e.edit_visible=!1},onRefresh:()=>{e.is_search=!1},onEdit:(l,a)=>{console.log("row",a),e.posted.role=a,console.log(l,a),e.edit_visible=!0},onDelete:(e,l)=>{console.log(e,l),(e=>{console.log(e),x.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{O({type:"success",message:"删除成功"})})).catch((()=>{O({type:"info",message:"已取消删除"})}))})(e)}})}});const G=N("新增"),H=N("刷新"),J=k("br",null,null,-1),K=k("i",{class:"ic ic-lock"},null,-1),Q=N(" 锁定"),W=N("正常"),X=N("未知"),Y={class:"pagination"};L.render=function(e,l,a,t,o,n){const r=v("el-button"),s=v("el-col"),i=v("el-row"),d=v("el-table-column"),u=v("el-tag"),c=v("el-tooltip"),m=v("el-table"),p=v("el-pagination"),f=v("el-card"),b=v("role-edit"),g=v("el-dialog"),w=v("role-new"),z=_("loading");return h(),C("div",null,[k(f,{class:"card-ctrl"},{default:V((()=>[k(i,null,{default:V((()=>[k(s,{span:8},{default:V((()=>[k(r,{type:"primary",icon:"el-icon-plus",size:"small",onClick:e.onCreate},{default:V((()=>[G])),_:1},8,["onClick"]),k(r,{type:"success",icon:"el-icon-refresh",size:"small",onClick:e.onRefresh},{default:V((()=>[H])),_:1},8,["onClick"])])),_:1})])),_:1}),J,y(k(m,{data:e.data,stripe:"",class:"table"},{default:V((()=>[k(d,{prop:"roleName",label:"角色名称",align:"center"}),k(d,{prop:"state",label:"角色状态",align:"center"},{default:V((e=>[0===e.row.state?(h(),C(u,{key:0,size:"mini",type:"info"},{default:V((()=>[K,Q])),_:1})):1===e.row.state?(h(),C(u,{key:1,size:"mini",type:"success"},{default:V((()=>[W])),_:1})):(h(),C(u,{key:2,size:"mini",type:"danger"},{default:V((()=>[X])),_:1}))])),_:1}),k(d,{label:"操作",align:"center"},{default:V((l=>[k(c,{class:"item",effect:"dark",content:"菜单授权",placement:"bottom"},{default:V((()=>[k(r,{circle:"",plain:"",type:"primary",icon:"el-icon-edit",size:"small",onClick:a=>e.onEdit(l.$index,l.row)},null,8,["onClick"])])),_:2},1024),k(c,{class:"item",effect:"dark",content:"删除",placement:"bottom"},{default:V((()=>[0!=l.row.state?(h(),C(r,{key:0,circle:"",plain:"",type:"danger",icon:"el-icon-minus",size:"small",onClick:a=>e.onDelete(l.$index,l.row)},null,8,["onClick"])):R("",!0)])),_:2},1024)])),_:1})])),_:1},8,["data"]),[[z,e.loading]]),k("div",Y,[k(p,{"current-page":e.param.page,"page-size":e.param.limit,layout:"sizes,prev,pager,next,total","page-sizes":[5,10,20],total:e.total,background:"",onCurrentChange:e.onCurrentChange,onSizeChange:e.onSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])),_:1}),k(g,{modelValue:e.edit_visible,"onUpdate:modelValue":l[1]||(l[1]=l=>e.edit_visible=l),center:"",title:e.posted.role.roleName},{default:V((()=>[k(b,{"current-role":e.posted,onSuccess:e.onEditSuccess},null,8,["current-role","onSuccess"])])),_:1},8,["modelValue","title"]),k(g,{modelValue:e.add_visible,"onUpdate:modelValue":l[2]||(l[2]=l=>e.add_visible=l),title:"新增角色"},{default:V((()=>[k(w,{onSuccess:e.onCreateSuccess},null,8,["onSuccess"])])),_:1},8,["modelValue"])])};export default L;