import{b as D,g as M,u as P,r as i,j as s,S as a,d as e,H as l,p as r,a8 as T,a9 as F,i as N,E as _,B as x,l as u,o as L,t as w,I as V,e as S,aa as R,T as Y,Q as H,P as U,ab as Q,ac as W}from"./index.996e1d78.js";const $={hidden:{opacity:0},animate:{opacity:1}},q=()=>{D();const y=M(),d=P(),[g,j]=i.exports.useState(1),[h,I]=i.exports.useState(10),[c,C]=i.exports.useState("paid"),[m,k]=i.exports.useState([]),[p,o]=i.exports.useState([]),[G,f]=i.exports.useState(!0),[O,A]=i.exports.useState(0),b=async()=>{try{f(!0);const{data:t}=await Q(g,h);f(!1),t.status&&t.data.length>0&&(k(t.data),o(c==="all"?m:t.data.filter(n=>n.status===c))),t.error&&d({title:"Error",description:t.message,status:"error",duration:3e3,isClosable:!0,position:"bottom-right"})}catch(t){f(!1),console.log(t)}};i.exports.useEffect(()=>{b()},[g,h]),i.exports.useEffect(()=>{o(c==="all"?m:m.filter(t=>t.status===c))},[c]);const E=async t=>{try{const{data:n}=await W({orderId:t,allotment:O});n.status&&(d({title:"Success",description:n.message,status:"success",duration:3e3,isClosable:!0,position:"bottom-right"}),b()),n.error&&d({title:"Error",description:n.message,status:"error",duration:3e3,isClosable:!0,position:"bottom-right"})}catch(n){console.log(n)}};return s(a,{spacing:3,children:[e(l,{fontSize:"4xl",mb:5,children:"ORDERS"}),e(a,{direction:"row",spacing:2,children:["all","pending","paid","created"].map((t,n)=>s(r,{size:"lg",borderRadius:"full",colorScheme:"green",cursor:"pointer",onClick:()=>C(t),children:[e(T,{children:t.toUpperCase()}),c===t&&e(F,{onClick:()=>C("all")})]},n+n))}),p.length===0&&s(a,{direction:"column",spacing:3,justifyContent:"center",alignItems:"center",h:"80vh",children:[e(N,{animationData:_,autoPlay:!0,loop:!0,style:{height:"60vh",width:"60vw"}}),e(l,{children:"No Orders Found!"})]}),p.map(t=>{var n,z,v;return s(x,{variants:$,px:8,py:4,rounded:"lg",shadow:"lg",bg:u("white","gray.800"),maxW:"100%",children:[e(r,{size:"md",colorScheme:"teal",fontSize:"sm",fontWeight:"700",children:t==null?void 0:t.status}),s(a,{direction:"row",spacing:2,mt:2,divider:e(L,{}),justifyContent:"space-evenly",children:[s(a,{direction:"column",spacing:1,alignItems:"center",justifyContent:"center",children:[e(l,{fontSize:"md",children:"Amount Invested"}),e(l,{fontSize:"sm",children:w(t==null?void 0:t.amount)})]}),s(a,{direction:"column",spacing:3,alignItems:"center",justifyContent:"center",children:[e(l,{fontSize:"md",children:"Bought By:"}),e(a,{direction:"row",spacing:2,children:e(r,{size:"sm",variantColor:"green",variant:"solid",children:((n=t==null?void 0:t.user)==null?void 0:n.firstName)+" "+((z=t==null?void 0:t.user)==null?void 0:z.lastName)})})]}),!(t!=null&&t.assigned)&&t.status!=="active"&&s(a,{direction:"column",spacing:3,alignItems:"center",justifyContent:"center",children:[e(l,{fontSize:"md",children:"Allot Market Value: "}),s(a,{direction:"row",spacing:3,children:[e(V,{placeholder:"Enter Market Value",onChange:B=>A(B.target.value)}),e(S,{variantColor:"green",size:"sm",onClick:()=>E(t==null?void 0:t._id),children:"Allot"})]})]}),(t==null?void 0:t.assigned)&&s(a,{direction:"column",spacing:3,alignItems:"center",justifyContent:"center",children:[e(l,{fontSize:"md",children:"Alloted Market Value: "}),e(a,{direction:"row",spacing:3,children:e(l,{fontSize:"sm",children:w(t==null?void 0:t.alloted)})})]}),s(a,{direction:"column",spacing:1,alignItems:"center",justifyContent:"center",children:[s(l,{fontSize:"md",children:["FUND",e("br",{}),"PURCHASED"]}),e(r,{size:"sm",colorScheme:"green",children:((v=t==null?void 0:t.fund)==null?void 0:v.name.substring(0,50))+"..."})]})]}),s(R,{justifyContent:"space-around",alignItems:"center",mt:4,children:[s(Y,{fontSize:"sm",noOfLines:0,color:u("gray.600","gray.400"),children:["Created: ",H(t==null?void 0:t.createdAt).format("dddd, DD MMMM YYYY")]}),e(S,{color:u("brand.600","brand.400"),_hover:{bg:"green.700"},size:"sm",variant:"outline",onClick:()=>{y(`/fund/${fund._id}`)},children:"Details"}),e(S,{color:u("brand.600","brand.400"),_hover:{bg:"green.700"},size:"sm",variant:"outline",onClick:()=>{y(`/buy/${fund._id}`)},children:"Buy"})]})]},t._id)}),e(x,{sx:{},children:p.length>0&&e(U,{defaultPageSize:h,defaultPage:g,total:500,paginationProps:{display:"flex",justifyContent:"center",marginTop:"2em"},pageNeighbours:1,showQuickJumper:!0,responsive:!0,onChange:t=>j(t),onShowSizeChange:(t,n)=>I(parseInt(n)),showSizeChanger:!0})})]})};export{q as default};
