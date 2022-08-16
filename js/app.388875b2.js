(function(){"use strict";var e={4029:function(e,a,t){var n=t(3556),i=t(9242),s=t(3396);const l={class:"app"};var r=(0,s.aZ)({__name:"App",setup(e){return(e,a)=>{const t=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(t)])}}});const o=r;var c=o,u=t(2483),A=t(4870),d=t(7139),v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAYAAACGVs+MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALBSURBVHgBvVfNddpAEJ5dCT+bXCiBHGJL5BDcgV1BcAXYFdhUAFSAXQF0EDqAVGDlEgn5YFJBuMT5QdJkRrb0hNA/2N97PKHd2Z3f3fkEUAD30GxAQZigNR/UVt9UtbMi8iJzM9pEQdn95T71TmG5goJ4hHbjn/L3nv97Lp7rYC2hLGxVHy1UHdkjqAA2ntfzjyOSJrcVAQ53XamPQWAHESeaa11BRZATMwQ4e3mdPjm/r+KRlPFFdfVoxspfpqewAxDhLvLaeacefYnLyJjFI3q0ww1c7xvsAMq/EX3naNjqx1F0LEyBqWiXUohxdPLEMTOLtAi4BrYG0b04cW0/umEEJIg+vBWEMg6Otm8Ae0+xaMblzMNqJyCADR/aKVONQ7V+ExqQ5r1wRQd2gKsoaQaQTrz2n/6NleC9P4nwGXZATlobrFsKSPeSq9aq6TdQAXZNv05zLADrlpSDT5lCCH27lprLZOXQaqMnBnlyrFvSZdHMkWsgqrOFclyoHjisqABfZrkNjHWLxHOaAoFiAnJ9d7x+MJIUSxR8mrpQAqUM8IFihRKHqOBU/2MtuVlRHrsgxGVezlMMaP2kXfP7PcKSDlYvuMGS4N+mXPklDKHjiEX6vMF9PUs5Q3etCcuRXwYUgjD4IsoWJs+pjRYmFSx34BycP0cMcrbGHxIlfM0SYo/KsCHGezBWnsB8HiFgLnGNqWFlQlKJThF0x5pTK51nybBuyQrSBfdKSDbnSCfr9puRCzhMFNozIYlCUHT9ZzAQ428+Xo2QUOHT3qf8JyQkrsNFI0oVWyXQReY5eBG8hgZwPtBzN1LxGoSEb9FoYW+QUs1b3HqRetg3IfFADLW1eRsd26LldHwGgRH7JCQooKc73weFF9u1Vnuh6I+7EBL/y4j2KPqdmAg2oMzHqa8cno0nxYOya/cC7opFFf8H/Uk8BMqZzD0AAAAASUVORK5CYII=",p=t.p+"img/shoppingCartLogo.fcd6c9bc.svg",_=t.p+"img/favoriteLogo.3064323c.svg",g=t.p+"img/userLogo.6cfb0abd.svg";const m="https://fakestoreapi.com",w=m+"/products",f=w+"/categories",h=w+"/category";var C;(function(e){e["All"]="all",e["Electronics"]="electronics",e["Jewelery"]="jewelery",e["MenClothing"]="men`s clothing",e["WomenClothing"]="women`s clothing"})(C||(C={}));const B=async()=>await fetch(w).then((e=>e.json())),U=async()=>await fetch(f).then((e=>e.json())),S=async e=>e===C.All?B():await fetch(`${h}/${e}`).then((e=>e.json())),b=e=>((0,s.dD)("data-v-ad982d92"),e=e(),(0,s.Cn)(),e),k={class:"header"},y={class:"header__container"},x={class:"header__logo"},H=b((()=>(0,s._)("div",{class:"header__wrapper-img"},[(0,s._)("img",{src:v,alt:"logo"})],-1))),R=b((()=>(0,s._)("h1",{class:"header__title"},"SC.",-1))),Q={class:"header__nav"},D={class:"nav__list"},I=["onClick"],E=(0,s.uE)('<ul class="nav__logos" data-v-ad982d92><li class="nav__logo" data-v-ad982d92><img src="'+p+'" alt="basket" data-v-ad982d92></li><li class="nav__logo" data-v-ad982d92><img src="'+_+'" alt="favorite" data-v-ad982d92></li><li class="nav__logo" data-v-ad982d92><img src="'+g+'" alt="profile" data-v-ad982d92></li></ul>',1);var F=(0,s.aZ)({__name:"AppHeader",emits:["changeCategory"],setup(e,{emit:a}){const t=(0,A.iH)([C.All]),n=(0,A.iH)(C.All);(0,s.bv)((async()=>{const e=await U();e.forEach((e=>{t.value.push(e)}))}));const l=e=>{n.value=e,a("changeCategory",e)};return(e,a)=>{const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("header",k,[(0,s._)("div",y,[(0,s._)("div",x,[(0,s.Wm)(r,{to:"/"},{default:(0,s.w5)((()=>[H])),_:1}),R]),(0,s._)("nav",Q,[(0,s._)("ul",D,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.value,(e=>((0,s.wg)(),(0,s.iD)("li",{class:(0,d.C_)(["nav__item",{"nav__item--active":n.value===e}]),key:e,onClick:(0,i.iM)((a=>l(e)),["prevent"])},(0,d.zw)(e),11,I)))),128))]),E])])])}}}),Z=t(89);const L=(0,Z.Z)(F,[["__scopeId","data-v-ad982d92"]]);var Y=L;const M={class:"range-input"},X={class:"slider"},W={class:"range-input__wrapper"},P=["min","max","step"],K=["min","max","step"];var N=(0,s.aZ)({__name:"UiInputRange",props:{min:null,max:null,step:null,double:{type:Boolean},margin:null},emits:["inputRange"],setup(e,{emit:a}){const t=e,{min:n,max:l,step:r,double:o,margin:c}=(0,A.BK)(t),u=(0,A.iH)(null),d=(0,A.iH)(n.value),v=(0,A.iH)(l.value);(0,s.bv)((()=>{u.value&&(u.value.style.left=d.value/l.value*100+"%",u.value.style.right=100-v.value/l.value*100+"%")}));const p=e=>{if(!u.value)return;const t=e.target;d.value>=v.value&&("range-min"===t.className?d.value=v.value-c.value:v.value=d.value+c.value),"range-min"===t.className?(a("inputRange","min",d),u.value.style.left=d.value/l.value*100+"%"):(a("inputRange","max",v),u.value.style.right=100-v.value/l.value*100+"%")};return(e,a)=>((0,s.wg)(),(0,s.iD)("div",M,[(0,s._)("div",X,[(0,s._)("div",{ref_key:"progress",ref:u,class:"progress"},null,512)]),(0,s._)("div",W,[(0,A.SU)(o)?(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:0,class:"range-min",type:"range",min:(0,A.SU)(n),max:(0,A.SU)(l),step:(0,A.SU)(r),"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),onInput:p},null,40,P)),[[i.nr,d.value,void 0,{number:!0}]]):(0,s.kq)("",!0),(0,s.wy)((0,s._)("input",{class:"range-max",type:"range",min:(0,A.SU)(n),max:(0,A.SU)(l),step:(0,A.SU)(r),"onUpdate:modelValue":a[1]||(a[1]=e=>v.value=e),onInput:p},null,40,K),[[i.nr,v.value,void 0,{number:!0}]])])]))}});const V=(0,Z.Z)(N,[["__scopeId","data-v-3bda5da3"]]);var j=V;const q={class:"price-filter"},O={class:"price-filter__prices"},G={class:"prices__value"},z={class:"prices__value"};var J=(0,s.aZ)({__name:"PriceFilter",emits:["updateFilter"],setup(e,{emit:a}){const t=(0,A.iH)(0),n=(0,A.iH)(1e3),i=(e,i)=>{"min"===e&&(t.value=i,a("updateFilter","min",t.value)),"max"===e&&(n.value=i,a("updateFilter","max",n.value))};return(e,a)=>((0,s.wg)(),(0,s.iD)("div",q,[(0,s.Wm)(j,{min:0,max:1e3,double:!0,step:10,margin:10,onInputRange:i}),(0,s._)("div",O,[(0,s._)("span",G,(0,d.zw)(t.value)+"RWF",1),(0,s._)("span",z,(0,d.zw)(n.value)+"RWF",1)])]))}});const T=(0,Z.Z)(J,[["__scopeId","data-v-697f1a18"]]);var $=T;const ee=e=>((0,s.dD)("data-v-841dfe58"),e=e(),(0,s.Cn)(),e),ae={class:"rating-filter"},te={class:"rating-filter__prices"},ne=ee((()=>(0,s._)("span",{class:"rating__value"},(0,d.zw)(0),-1))),ie={class:"rating__value"};var se=(0,s.aZ)({__name:"RatingFilters",emits:["updateFilter"],setup(e,{emit:a}){const t=(0,A.iH)(5),n=(e,n)=>{t.value=n,a("updateFilter","rating",n)};return(e,a)=>((0,s.wg)(),(0,s.iD)("div",ae,[(0,s.Wm)(j,{min:0,max:5,step:.1,double:!1,margin:0,onInputRange:n},null,8,["step"]),(0,s._)("div",te,[ne,(0,s._)("span",ie,(0,d.zw)(t.value),1)])]))}});const le=(0,Z.Z)(se,[["__scopeId","data-v-841dfe58"]]);var re=le;const oe={class:"aside"},ce={class:"aside__filters"},ue={class:"filters__title"},Ae={class:"filters__container"};var de=(0,s.aZ)({__name:"AsideBar",emits:["changeFilter"],setup(e,{emit:a}){const t=(0,A.iH)({price:{min:0,max:1e3},rating:0}),n=(0,A.iH)([{name:"Price range",component:$},{name:"Rating",component:re}]),i=(e,n)=>{"max"===e&&(t.value.price.max=n),"min"===e&&(t.value.price.min=n),"min"===e&&(t.value.price.min=n),"rating"===e&&(t.value.rating=n),a("changeFilter",t.value)};return(e,a)=>((0,s.wg)(),(0,s.iD)("aside",oe,[(0,s._)("div",ce,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.value,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"filters__item",key:e.name},[(0,s._)("span",ue,(0,d.zw)(e.name),1),(0,s._)("div",Ae,[((0,s.wg)(),(0,s.j4)((0,s.LL)(e.component),{onUpdateFilter:i},null,32))])])))),128))])]))}});const ve=(0,Z.Z)(de,[["__scopeId","data-v-7758b42a"]]);var pe=ve;const _e=e=>((0,s.dD)("data-v-0ce2ebb2"),e=e(),(0,s.Cn)(),e),ge={class:"footer"},me={class:"footer__column"},we={class:"footer__social-networks"},fe=_e((()=>(0,s._)("span",null,"Don’t missout on once-in-a-while-deals:",-1))),he={class:"social-networks__list"},Ce=["src","alt"],Be=_e((()=>(0,s._)("div",{class:"footer__telephon"},[(0,s._)("span",null,"Support line: "),(0,s._)("a",{href:"tel:+250788467808"},"+250 788 467 808")],-1))),Ue=_e((()=>(0,s._)("div",{class:"footer__column footer__license"},[(0,s._)("span",null,"Copyright 2021 © Sneaker City ltd")],-1)));var Se=(0,s.aZ)({__name:"AppFooter",setup(e){const a=[{name:"twitter",img:t(6737)},{name:"instagram",img:t(8935)},{name:"facebook",img:t(6463)}];return(e,t)=>((0,s.wg)(),(0,s.iD)("footer",ge,[(0,s._)("div",me,[(0,s._)("div",we,[fe,(0,s._)("ul",he,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(a,(e=>(0,s._)("li",{class:"social-networks__item",key:e.name},[(0,s._)("img",{src:e.img,alt:e.name},null,8,Ce)]))),64))])]),Be]),Ue]))}});const be=(0,Z.Z)(Se,[["__scopeId","data-v-0ce2ebb2"]]);var ke=be,ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA3SURBVHgBfc5RCgAwCAJQj+L9L+VRtn0UbEMThIgXBLzhqapESKNVtfhG+mYmxLDz1waPzzfWBsBZGyUbJZrbAAAAAElFTkSuQmCC";const xe=e=>{const a=localStorage.getItem(e);return null!==a?JSON.parse(a):[]},He=(e,a)=>{localStorage.setItem(e,JSON.stringify(a))},Re=(0,n.Q_)("favorite",{state:()=>({hello:"",favoritesProduct:[]}),actions:{addFavoriteProduct(e){this.favoritesProduct.push(e),He("favoriteStore",this.favoritesProduct)},removeFavoriteProduct(e){this.favoritesProduct=this.favoritesProduct.filter((a=>a.id!==e.id)),He("favoriteStore",this.favoritesProduct)}}}),Qe={class:"button"};var De=(0,s.aZ)({__name:"UiButton",props:{text:null},setup(e){const a=e,{text:t}=(0,A.BK)(a);return(e,a)=>((0,s.wg)(),(0,s.iD)("button",Qe,(0,d.zw)((0,A.SU)(t)),1))}});const Ie=(0,Z.Z)(De,[["__scopeId","data-v-7eaf75d2"]]);var Ee=Ie;const Fe={class:"couter"},Ze={class:"couter__input-wrapper"};var Le=(0,s.aZ)({__name:"UiCounter",setup(e){const a=(0,A.iH)(1),t=e=>{a.value+e>0&&a.value+e<1e3&&(a.value=a.value+e)},n=e=>{const t=e.target,n=Number(t.value);n>0&&n<1e3?a.value=n:n<=0?a.value=1:n>=1e3&&(a.value=999),console.log(a.value)};return(e,l)=>((0,s.wg)(),(0,s.iD)("div",Fe,[(0,s._)("button",{class:"couter__button",onClick:l[0]||(l[0]=e=>t(-1))},"-"),(0,s._)("div",Ze,[(0,s.wy)((0,s._)("input",{class:"couter__input",type:"number","onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),onInput:n},null,544),[[i.nr,a.value,void 0,{number:!0}]])]),(0,s._)("button",{class:"couter__button",onClick:l[2]||(l[2]=e=>t(1))},"+")]))}});const Ye=(0,Z.Z)(Le,[["__scopeId","data-v-7dee265c"]]);var Me=Ye,Xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA8SURBVHgBxZHBCQAgDAOvTpL9l3AUR9EiPrX1pYHQx5UQiLGX3JUANndfN4R6AMlg4ULKUn4/Gefic6wBvC0iQgcGVF0AAAAASUVORK5CYII=",We=t(9231),Pe=t(3461);const Ke=e=>((0,s.dD)("data-v-2703797c"),e=e(),(0,s.Cn)(),e),Ne={class:"slider__wrapper"},Ve={class:"slider__container"},je={class:"slider__wrapper-image"},qe=["src"],Oe=Ke((()=>(0,s._)("div",{class:"nav-ideicator prevArrow"},[(0,s._)("img",{src:Xe,alt:"prev slide"})],-1))),Ge=Ke((()=>(0,s._)("div",{class:"nav-ideicator nextArrow"},[(0,s._)("img",{src:Xe,alt:"next slide"})],-1))),ze=Ke((()=>(0,s._)("div",{class:"slider__pagination"},null,-1)));var Je=(0,s.aZ)({__name:"UiSliderImage",props:{images:null},setup(e){const a=e,{images:t}=(0,A.BK)(a);We.ZP.use([We.W_,We.VS,We.tl]);const n={nextEl:".nextArrow",prevEl:".prevArrow"},i={clickable:!0,el:".slider__pagination",bulletActiveClass:"pagination--active",bulletClass:"pagination",renderBullet:function(e,a){return`\n      <div class="${a}">\n        <img class="pagination__image" src="${t.value[e]}">\n      </div>\n    `}};return(e,a)=>((0,s.wg)(),(0,s.iD)("div",Ne,[(0,s._)("div",Ve,[(0,s.Wm)((0,A.SU)(Pe.tq),{class:"parallax-slider",pagination:i,navigation:n},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,A.SU)(t),(e=>((0,s.wg)(),(0,s.j4)((0,A.SU)(Pe.o5),{key:e},{default:(0,s.w5)((()=>[(0,s._)("div",je,[(0,s._)("img",{src:e,alt:""},null,8,qe)])])),_:2},1024)))),128))])),_:1}),Oe,Ge]),ze]))}});const Te=(0,Z.Z)(Je,[["__scopeId","data-v-2703797c"]]);var $e=Te;const ea=e=>((0,s.dD)("data-v-ccf455f4"),e=e(),(0,s.Cn)(),e),aa={class:"product-model__product"},ta={class:"product__header"},na={class:"product__description"},ia={class:"product__name"},sa={class:"product__price"},la=ea((()=>(0,s._)("svg",{width:"24",height:"22",viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,s._)("path",{d:"M20.8401 3.60999C20.3294 3.099 19.7229 2.69364 19.0555 2.41708C18.388 2.14052 17.6726 1.99817 16.9501 1.99817C16.2276 1.99817 15.5122 2.14052 14.8448 2.41708C14.1773 2.69364 13.5709 3.099 13.0601 3.60999L12.0001 4.66999L10.9401 3.60999C9.90843 2.5783 8.50915 1.9987 7.05012 1.9987C5.59109 1.9987 4.19181 2.5783 3.16012 3.60999C2.12843 4.64169 1.54883 6.04096 1.54883 7.49999C1.54883 8.95903 2.12843 10.3583 3.16012 11.39L4.22012 12.45L12.0001 20.23L19.7801 12.45L20.8401 11.39C21.3511 10.8792 21.7565 10.2728 22.033 9.60535C22.3096 8.93789 22.4519 8.22248 22.4519 7.49999C22.4519 6.77751 22.3096 6.0621 22.033 5.39464C21.7565 4.72718 21.3511 4.12075 20.8401 3.60999V3.60999Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1))),ra=[la],oa={class:"product__slider-images"},ca={class:"product-model__description"},ua={class:"description__header"},Aa={class:"description__title-wrapper"},da=ea((()=>(0,s._)("div",{class:"description__title"},[(0,s._)("span",null,"Description")],-1))),va=ea((()=>(0,s._)("img",{src:ye,alt:"show or hidden description"},null,-1))),pa=[va],_a={class:"description__text"},ga={class:"product-model__add-to-card"};var ma=(0,s.aZ)({__name:"ProductModel",props:{product:null},setup(e){const a=e,{product:t}=(0,A.BK)(a),n=(0,A.iH)(!1),l=Re(),r=(0,A.iH)(Array(4).fill(t.value.image)),o=(0,A.iH)(!1);(0,s.bv)((()=>{const e=l.favoritesProduct;0!==e.filter((e=>e.id===t.value.id)).length&&(o.value=!0)}));const c=()=>{n.value=!n.value},u=()=>{o.value?(l.removeFavoriteProduct(t.value),o.value=!1):(l.addFavoriteProduct(t.value),o.value=!0)};return(e,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"product-model",onClick:a[1]||(a[1]=(0,i.iM)((a=>e.$emit("clickModel")),["stop"]))},[(0,s._)("div",{class:"product-model__container",onClick:a[0]||(a[0]=(0,i.iM)((()=>{}),["stop"]))},[(0,s._)("div",aa,[(0,s._)("div",ta,[(0,s._)("div",na,[(0,s._)("div",ia,[(0,s._)("h5",null,(0,d.zw)((0,A.SU)(t).title),1)]),(0,s._)("div",sa,[(0,s._)("span",null,(0,d.zw)((0,A.SU)(t).price)+"RWF",1)])]),(0,s._)("div",{class:(0,d.C_)(["product__add-favorite",{"product__add-favorite--active":o.value}]),onClick:u},ra,2)]),(0,s._)("div",oa,[(0,s.Wm)($e,{images:r.value},null,8,["images"])])]),(0,s._)("div",ca,[(0,s._)("div",ua,[(0,s._)("div",Aa,[da,(0,s._)("div",{class:(0,d.C_)(["description__arrow",{"description__arrow--active":n.value}]),onClick:c},pa,2)]),(0,s._)("div",{class:(0,d.C_)(["description__container",{"description__container--hidden":n.value}])},[(0,s._)("p",_a,(0,d.zw)((0,A.SU)(t).description),1)],2)]),(0,s._)("div",ga,[(0,s.Wm)(Me),(0,s.Wm)(Ee,{text:"Add to card"})])])])]))}});const wa=(0,Z.Z)(ma,[["__scopeId","data-v-ccf455f4"]]);var fa=wa;const ha={class:"product__image"},Ca=["src","alt"],Ba={class:"product__description"},Ua={class:"product__name"},Sa={class:"product__price"};var ba=(0,s.aZ)({__name:"ProductItem",props:{product:null},setup(e){const a=e,{product:t}=(0,A.BK)(a);return(e,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"product",onClick:a[0]||(a[0]=a=>e.$emit("productClick",(0,A.SU)(t)))},[(0,s._)("div",ha,[(0,s._)("img",{src:(0,A.SU)(t).image,alt:(0,A.SU)(t).title},null,8,Ca)]),(0,s._)("div",Ba,[(0,s._)("span",Ua,(0,d.zw)((0,A.SU)(t).title),1),(0,s._)("span",Sa,(0,d.zw)((0,A.SU)(t).price)+"RWF",1)])]))}});const ka=(0,Z.Z)(ba,[["__scopeId","data-v-61fab26e"]]);var ya=ka;const xa=e=>((0,s.dD)("data-v-6246f0c4"),e=e(),(0,s.Cn)(),e),Ha={class:"ui-loader"},Ra={class:"ui-loader__content"},Qa={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},Da=xa((()=>(0,s._)("circle",{cx:"50",cy:"50",fill:"none",stroke:"#182731","stroke-width":"6",r:"21","stroke-dasharray":"98.96016858807849 34.98672286269283"},[(0,s._)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})],-1))),Ia=[Da];function Ea(e,a){return(0,s.wg)(),(0,s.iD)("div",Ha,[(0,s._)("div",Ra,[((0,s.wg)(),(0,s.iD)("svg",Qa,Ia))])])}const Fa={},Za=(0,Z.Z)(Fa,[["render",Ea],["__scopeId","data-v-6246f0c4"]]);var La=Za;const Ya=e=>((0,s.dD)("data-v-2540fbc7"),e=e(),(0,s.Cn)(),e),Ma=Ya((()=>(0,s._)("h2",{class:"products__category"},"The new arrivals",-1))),Xa=Ya((()=>(0,s._)("span",null,"Product not found",-1)));var Wa=(0,s.aZ)({__name:"ProductsList",props:{products:null,loading:{type:Boolean}},setup(e){const a=e,{products:t,loading:n}=(0,A.BK)(a),l=(0,A.iH)(!1),r=(0,A.iH)(null),o=e=>{r.value=e,l.value=!0},c=()=>{r.value=null,l.value=!1};return(e,a)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[Ma,(0,A.SU)(t).length>0?((0,s.wg)(),(0,s.j4)(i.W3,{key:0,name:"list",tag:"div",class:"products__list"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,A.SU)(t),(e=>((0,s.wg)(),(0,s.j4)(ya,{product:e,key:e.id,onProductClick:o},null,8,["product"])))),128))])),_:1})):((0,s.wg)(),(0,s.j4)(i.W3,{key:1,name:"list",tag:"div",class:"products__list"},{default:(0,s.w5)((()=>[Xa])),_:1})),l.value&&r.value?((0,s.wg)(),(0,s.j4)(fa,{key:2,product:r.value,onClickModel:c},null,8,["product"])):(0,s.kq)("",!0),(0,A.SU)(n)?((0,s.wg)(),(0,s.j4)(La,{key:3})):(0,s.kq)("",!0)],64))}});const Pa=(0,Z.Z)(Wa,[["__scopeId","data-v-2540fbc7"]]);var Ka=Pa;const Na={class:"container"},Va={class:"wrapper"},ja={class:"main"};var qa=(0,s.aZ)({__name:"HomeView",setup(e){const a=(0,A.iH)([]),t=(0,A.iH)([]),n=(0,A.iH)(""),i=(0,A.iH)(!0);(0,s.bv)((async()=>{a.value=await B(),t.value=[...a.value],i.value=!1})),(0,s.YP)(n,(async()=>{i.value=!0,a.value=await S(n.value),t.value=[...a.value],i.value=!1}));const l=e=>{t.value=a.value.filter((a=>a.price>=e.price.min&&a.price<=e.price.max&&a.rating.rate>=e.rating))};return(e,a)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(Y,{onChangeCategory:a[0]||(a[0]=e=>n.value=e)}),(0,s._)("div",Na,[(0,s.Wm)(pe,{onChangeFilter:l}),(0,s._)("div",Va,[(0,s._)("main",ja,[(0,s.Wm)(Ka,{products:t.value,loading:i.value},null,8,["products","loading"])]),(0,s.Wm)(ke)])])],64))}});const Oa=(0,Z.Z)(qa,[["__scopeId","data-v-3aee73f0"]]);var Ga=Oa;const za=[{path:"/",name:"home",component:Ga}],Ja=(0,u.p7)({history:(0,u.PO)("/sneaker-city/"),routes:za});var Ta=Ja;const $a=(0,n.WB)();$a.use((({store:e})=>{e.favoritesProduct=xe("favoriteStore")})),(0,i.ri)(c).use(Ta).use($a).mount("#app")},6463:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgBzVNLTsMwFHzPdiVWqFEv4FD2wA6hIuAmcARu4BtUnABxgnKDBkollrCnqQ+AlCyRcPxwYqVqaB01u1qK4s/MeObZRtihZfJc1v1Iv+v1NWwlHo+uwcLYwfoeTX1L8DBI31SNYa27Wnx0iPsoncXlV5L/40RIwHKueoDq8GuWfA8vbpGYZAhXTuRlHRd0wBBPisJ8lk44sHEl6siM2+edHDj7LrfN/YDyQTpX22AbRcyGowkQnrqCSShMXE1ysXRz2jNQRYvXp7CDkszoDozR9ZG5GF5IiAk3kDeiQpdGIAvgjSJuOkD6qI6PC7naeRWBkkgnDQfBi5QdXS7B/t54AT6NFvN4G65bhL0UEK2rrDet/kR5dwHLzwB+/CuEg6DAH0iuZ5mNUsvnAAAAAElFTkSuQmCC"},8935:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE0SURBVHgBjVNBTsMwEJw1OXC0fxAK3HtENIfwBH4ALyg/oH0B4QWIF/AFEC3iRh5QlXwAJcdKkAavmzhp5KQZyZJ3PbPe9a4JDaR+KIGNRA9U8pk0bbLiUTDV1gwFZX0BQIVEgUitF3M0xPd6faX+hY8DYA5zf0aTu9p5GqTDxKG0QYwmlGInLLJ2bZZ4fjmu7C39RiwyXFPqRnpdaeLIe9IkHzlnOAHy/Ep9L2/aXOEKYMSEN7V+P+EFomfjc0B01DlWq8Ws8pm9zsb1Tu4MOiHkwQAqeeU5iLm1Nive01affcRtvvMRkf/d6pofuFWlJ+ZHdFGdAcqWXlej7WqxBZOGDlKt2Q0S74WpmYo5hPcydJSZq9v8yHb9mc4C3SpMB30mfaFaLaO9AHs39OI4Kztl8A+NCIjpoqQ0vQAAAABJRU5ErkJggg=="},6737:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVJBTsJQEJ2ZduGK0HgAqrgXdyZiLCcQb4AnkBugJwBPAJwAvQEoIe6sawXrCcrSxPaP839trdAFiUzS9P8/b95/M+8D/DNwE1B4UPdAwaHZqOjeCZ6C0D12AXaWmAGYKs78YbhWvF/vyDVtxWByBHgOyL4sPQae0A+uK9Q9A84X61uQWxBHR7uLaVt/oL4aQvai8zZYo4SAoaZB0lErrJ70jSKtlqymYjSSU9LfNd+VRDElvXCgE87icU/WE+m3G1brISFqRcuiuQjxR6JCBgEQlbMb5rOB/Aah68nZZ5lMfiWYpTXwc4M6fU9lbxKCfU7xZgYKeChzuNqoWLfMXHbepuOMgJTdA8baqgtFoSzrWn7jdG8InGC81PZkLpjBFkr3pOAM4vjmD0ESMiziSyFpgmX3i4pBYV8wF3lbUewaafnyYLQTvgU0KOVepHGD4o55UKQazuvMzxOjlqv7Mk8UtDUcaI8JuSJpV86EHG4hsnum1ZXANZmsXMXkEqoAkAIp9IsKtxbfSYu5A8ugSAIAAAAASUVORK5CYII="}},a={};function t(n){var i=a[n];if(void 0!==i)return i.exports;var s=a[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(a,n,i,s){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],s=e[u][2];for(var r=!0,o=0;o<n.length;o++)(!1&s||l>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[o])}))?n.splice(o--,1):(r=!1,s<l&&(l=s));if(r){e.splice(u--,1);var c=i();void 0!==c&&(a=c)}}return a}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,i,s]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/sneaker-city/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var i,s,l=n[0],r=n[1],o=n[2],c=0;if(l.some((function(a){return 0!==e[a]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(o)var u=o(t)}for(a&&a(n);c<l.length;c++)s=l[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(u)},n=self["webpackChunksneaker_city"]=self["webpackChunksneaker_city"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(4029)}));n=t.O(n)})();
//# sourceMappingURL=app.388875b2.js.map