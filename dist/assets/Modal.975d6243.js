import{_ as m,o as e,c as o,a as s,v as h,b as v,x as p,m as y,p as w,h as L,g as $,i as f,r as d,q as i,T as k}from"./index.0414e751.js";const x={},C={class:"IconClose",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},g=s("path",{d:"M36 14.1L33.9 12L24 21.9L14.1 12L12 14.1L21.9 24L12 33.9L14.1 36L24 26.1L33.9 36L36 33.9L26.1 24L36 14.1Z"},null,-1),B=[g];function b(t,r,a,l,n,c){return e(),o("svg",C,B)}var I=m(x,[["render",b]]);const M={key:0,class:"Modal"},N=s("div",{class:"modal_overlay"},null,-1),V={class:"modal_scroll"},E={class:"modal_wrapper"},R={class:"modal_title"},S={key:0},T={key:1},q={class:"modal_body"},j={__name:"Modal",props:{show:{type:Boolean,default:!1}},emits:["close"],setup(t,{emit:r}){const a=t,l=h(),n=v(),c=()=>{r("close")};return p(()=>{a.show&&(document.body.style.overflow="hidden"),a.show||(document.body.style.overflow="initial")}),y(n,()=>{c()}),(_,u)=>(e(),w(k,{name:"fade_modal"},{default:L(()=>[t.show?(e(),o("div",M,[N,s("div",V,[s("aside",null,[s("div",{class:"modal_content",ref_key:"modalRef",ref:n},[$(I,{class:"icon_close",onClick:u[0]||(u[0]=O=>c())}),s("div",E,[s("div",R,[f(l).title?(e(),o("h1",S,[d(_.$slots,"title")])):i("",!0),f(l).text?(e(),o("p",T,[d(_.$slots,"text")])):i("",!0)]),s("div",q,[d(_.$slots,"default")])])],512)])])])):i("",!0)]),_:3}))}};export{I,j as _};
