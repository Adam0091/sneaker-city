(function(){"use strict";var a={4571:function(a,e,n){var t=n(9242),s=n(3396);const r={class:"app"};var i=(0,s.aZ)({__name:"App",setup(a){return(a,e)=>{const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(n)])}}});const l=i;var o=l,c=n(2483),A=n(4870),u=n(7139),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAYAAACGVs+MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALBSURBVHgBvVfNddpAEJ5dCT+bXCiBHGJL5BDcgV1BcAXYFdhUAFSAXQF0EDqAVGDlEgn5YFJBuMT5QdJkRrb0hNA/2N97PKHd2Z3f3fkEUAD30GxAQZigNR/UVt9UtbMi8iJzM9pEQdn95T71TmG5goJ4hHbjn/L3nv97Lp7rYC2hLGxVHy1UHdkjqAA2ntfzjyOSJrcVAQ53XamPQWAHESeaa11BRZATMwQ4e3mdPjm/r+KRlPFFdfVoxspfpqewAxDhLvLaeacefYnLyJjFI3q0ww1c7xvsAMq/EX3naNjqx1F0LEyBqWiXUohxdPLEMTOLtAi4BrYG0b04cW0/umEEJIg+vBWEMg6Otm8Ae0+xaMblzMNqJyCADR/aKVONQ7V+ExqQ5r1wRQd2gKsoaQaQTrz2n/6NleC9P4nwGXZATlobrFsKSPeSq9aq6TdQAXZNv05zLADrlpSDT5lCCH27lprLZOXQaqMnBnlyrFvSZdHMkWsgqrOFclyoHjisqABfZrkNjHWLxHOaAoFiAnJ9d7x+MJIUSxR8mrpQAqUM8IFihRKHqOBU/2MtuVlRHrsgxGVezlMMaP2kXfP7PcKSDlYvuMGS4N+mXPklDKHjiEX6vMF9PUs5Q3etCcuRXwYUgjD4IsoWJs+pjRYmFSx34BycP0cMcrbGHxIlfM0SYo/KsCHGezBWnsB8HiFgLnGNqWFlQlKJThF0x5pTK51nybBuyQrSBfdKSDbnSCfr9puRCzhMFNozIYlCUHT9ZzAQ428+Xo2QUOHT3qf8JyQkrsNFI0oVWyXQReY5eBG8hgZwPtBzN1LxGoSEb9FoYW+QUs1b3HqRetg3IfFADLW1eRsd26LldHwGgRH7JCQooKc73weFF9u1Vnuh6I+7EBL/y4j2KPqdmAg2oMzHqa8cno0nxYOya/cC7opFFf8H/Uk8BMqZzD0AAAAASUVORK5CYII=",d=n.p+"img/shoppingCartLogo.fcd6c9bc.svg",v=n.p+"img/favoriteLogo.3064323c.svg",g=n.p+"img/userLogo.6cfb0abd.svg";const _=a=>((0,s.dD)("data-v-d861da2e"),a=a(),(0,s.Cn)(),a),m={class:"header"},f={class:"header__container"},w=_((()=>(0,s._)("div",{class:"header__logo"},[(0,s._)("div",{class:"header__wrapper-img"},[(0,s._)("img",{src:p,alt:"logo"})]),(0,s._)("h1",{class:"header__title"},"SC.")],-1))),h={class:"header__nav"},y={class:"nav__list"},B=["onClick"],H=(0,s.uE)('<ul class="nav__logos" data-v-d861da2e><li class="nav__logo" data-v-d861da2e><img src="'+d+'" alt="basket" data-v-d861da2e></li><li class="nav__logo" data-v-d861da2e><img src="'+v+'" alt="favorite" data-v-d861da2e></li><li class="nav__logo" data-v-d861da2e><img src="'+g+'" alt="profile" data-v-d861da2e></li></ul>',1);var k=(0,s.aZ)({__name:"AppHeader",setup(a){const e=(0,A.iH)(["all"]);return(0,s.bv)((async()=>{const a=await fetch("https://fakestoreapi.com/products/categories").then((a=>a.json()));a.forEach((a=>{e.value.push(a)}))})),(a,n)=>((0,s.wg)(),(0,s.iD)("header",m,[(0,s._)("div",f,[w,(0,s._)("nav",h,[(0,s._)("ul",y,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.value,(e=>((0,s.wg)(),(0,s.iD)("li",{class:"nav__item",key:e,onClick:(0,t.iM)((n=>a.$emit("changeCategory",e)),["prevent"])},(0,u.zw)(e),9,B)))),128))]),H])])]))}}),C=n(89);const R=(0,C.Z)(k,[["__scopeId","data-v-d861da2e"]]);var Q=R;const b={class:"price-filter"},U={class:"price-filter__input-wrapper"},D={class:"slider"},x={class:"range-input"},S={class:"price-filter__prices"},E={class:"prices__value"},I={class:"prices__value"};var F=(0,s.aZ)({__name:"PriceFilter",emits:["inputRange"],setup(a,{emit:e}){const n=(0,A.iH)(null),r=(0,A.iH)(0),i=(0,A.iH)(1e3),l=a=>{r.value>=i.value&&("range-min"===a.target.className?r.value=i.value-100:i.value=r.value+100),"range-min"===a.target.className?(e("inputRange","min",r),n.value.style.left=r.value/1e3*100+"%"):(e("inputRange","max",i),n.value.style.right=100-i.value/1e3*100+"%")};return(a,e)=>((0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("div",U,[(0,s._)("div",D,[(0,s._)("div",{ref_key:"progress",ref:n,class:"progress"},null,512)]),(0,s._)("div",x,[(0,s.wy)((0,s._)("input",{class:"range-min",type:"range",min:"0",max:"1000",step:"10","onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),onInput:l},null,544),[[t.nr,r.value,void 0,{number:!0}]]),(0,s.wy)((0,s._)("input",{class:"range-max",type:"range",min:"0",max:"1000",step:"10","onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a),onInput:l},null,544),[[t.nr,i.value,void 0,{number:!0}]])])]),(0,s._)("div",S,[(0,s._)("span",E,(0,u.zw)(r.value)+"RWF",1),(0,s._)("span",I,(0,u.zw)(i.value)+"RWF",1)])]))}});const Y=(0,C.Z)(F,[["__scopeId","data-v-762b0ae6"]]);var Z=Y;const M=a=>((0,s.dD)("data-v-33025d88"),a=a(),(0,s.Cn)(),a),X={class:"price-filter"},L={class:"price-filter__input-wrapper"},q={class:"slider"},K={class:"range-input"},j={class:"price-filter__prices"},W=M((()=>(0,s._)("span",{class:"prices__value"},(0,u.zw)(0),-1))),N={class:"prices__value"};var O=(0,s.aZ)({__name:"RatingFilters",emits:["inputRange"],setup(a,{emit:e}){const n=(0,A.iH)(null),r=(0,A.iH)(5),i=a=>{e("inputRange","rating",r),n.value.style.right=100-r.value/5*100+"%"};return(a,e)=>((0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("div",L,[(0,s._)("div",q,[(0,s._)("div",{ref_key:"progress",ref:n,class:"progress"},null,512)]),(0,s._)("div",K,[(0,s.wy)((0,s._)("input",{class:"range-max",type:"range",min:"0",max:"5",step:"0.1","onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),onInput:i},null,544),[[t.nr,r.value,void 0,{number:!0}]])])]),(0,s._)("div",j,[W,(0,s._)("span",N,(0,u.zw)(r.value),1)])]))}});const P=(0,C.Z)(O,[["__scopeId","data-v-33025d88"]]);var V=P;const G={class:"aside"},z={class:"aside__filters"},J={class:"filters__title"},T={class:"filters__container"};var $=(0,s.aZ)({__name:"AsideBar",emits:["changeFilter"],setup(a,{emit:e}){const n=(0,A.iH)({price:{min:0,max:1e3},rating:0}),t=(0,A.iH)([{name:"Price range",component:Z},{name:"Rating range",component:V}]),r=(a,t)=>{"max"===a&&(n.value.price.max=t),"min"===a&&(n.value.price.min=t),"min"===a&&(n.value.price.min=t),"rating"===a&&(n.value.rating=t),e("changeFilter",n)};return(a,e)=>((0,s.wg)(),(0,s.iD)("aside",G,[(0,s._)("div",z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.value,(a=>((0,s.wg)(),(0,s.iD)("div",{class:"filters__item",key:a.name},[(0,s._)("span",J,(0,u.zw)(a.name),1),(0,s._)("div",T,[((0,s.wg)(),(0,s.j4)((0,s.LL)(a.component),{onInputRange:r},null,32))])])))),128))])]))}});const aa=(0,C.Z)($,[["__scopeId","data-v-355a89cd"]]);var ea=aa;const na=a=>((0,s.dD)("data-v-78ca68ff"),a=a(),(0,s.Cn)(),a),ta={class:"footer"},sa={class:"footer__column"},ra={class:"footer__social-networks"},ia=na((()=>(0,s._)("span",null,"Don’t missout on once-in-a-while-deals:",-1))),la={class:"social-networks__list"},oa=["src","alt"],ca=na((()=>(0,s._)("div",{class:"footer__telephon"},[(0,s._)("span",null,"Support line: "),(0,s._)("span",null,"+250 788 467 808")],-1))),Aa=na((()=>(0,s._)("div",{class:"footer__column footer__license"},[(0,s._)("span",null,"Copyright 2021 © Sneaker City ltd")],-1)));var ua=(0,s.aZ)({__name:"AppFooter",setup(a){const e=[{name:"twitter",img:n(6737)},{name:"instagram",img:n(8935)},{name:"facebook",img:n(6463)}];return(a,n)=>((0,s.wg)(),(0,s.iD)("footer",ta,[(0,s._)("div",sa,[(0,s._)("div",ra,[ia,(0,s._)("ul",la,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(e,(a=>(0,s._)("li",{class:"social-networks__item",key:a.name},[(0,s._)("img",{src:a.img,alt:a.name},null,8,oa)]))),64))])]),ca]),Aa]))}});const pa=(0,C.Z)(ua,[["__scopeId","data-v-78ca68ff"]]);var da=pa;const va={class:"product"},ga={class:"product__image"},_a=["src","alt"],ma={class:"product__description"},fa={class:"product__name"},wa={class:"product__price"};var ha=(0,s.aZ)({__name:"ProductItem",props:{product:null},setup(a){const e=a,{product:n}=(0,A.BK)(e);return(a,e)=>((0,s.wg)(),(0,s.iD)("div",va,[(0,s._)("div",ga,[(0,s._)("img",{src:(0,A.SU)(n).image,alt:(0,A.SU)(n).title},null,8,_a)]),(0,s._)("div",ma,[(0,s._)("span",fa,(0,u.zw)((0,A.SU)(n).title),1),(0,s._)("span",wa,(0,u.zw)((0,A.SU)(n).price)+"RWF",1)])]))}});const ya=(0,C.Z)(ha,[["__scopeId","data-v-1935483a"]]);var Ba=ya;const Ha=a=>((0,s.dD)("data-v-6246f0c4"),a=a(),(0,s.Cn)(),a),ka={class:"ui-loader"},Ca={class:"ui-loader__content"},Ra={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},Qa=Ha((()=>(0,s._)("circle",{cx:"50",cy:"50",fill:"none",stroke:"#182731","stroke-width":"6",r:"21","stroke-dasharray":"98.96016858807849 34.98672286269283"},[(0,s._)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})],-1))),ba=[Qa];function Ua(a,e){return(0,s.wg)(),(0,s.iD)("div",ka,[(0,s._)("div",Ca,[((0,s.wg)(),(0,s.iD)("svg",Ra,ba))])])}const Da={},xa=(0,C.Z)(Da,[["render",Ua],["__scopeId","data-v-6246f0c4"]]);var Sa=xa;const Ea=a=>((0,s.dD)("data-v-4ede8bc7"),a=a(),(0,s.Cn)(),a),Ia=Ea((()=>(0,s._)("h2",{class:"products__category"},"The new arrivals",-1))),Fa=Ea((()=>(0,s._)("span",null,"Product not found",-1)));var Ya=(0,s.aZ)({__name:"ProductsList",props:{products:null,loading:{type:Boolean}},setup(a){const e=a,{products:n,loading:r}=(0,A.BK)(e);return(a,e)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[Ia,(0,A.SU)(n).length>0?((0,s.wg)(),(0,s.j4)(t.W3,{key:0,name:"list",tag:"div",class:"products__list"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,A.SU)(n),(a=>((0,s.wg)(),(0,s.j4)(Ba,{product:a,key:a.id},null,8,["product"])))),128))])),_:1})):((0,s.wg)(),(0,s.j4)(t.W3,{key:1,name:"list",tag:"div",class:"products__list"},{default:(0,s.w5)((()=>[Fa])),_:1})),(0,A.SU)(r)?((0,s.wg)(),(0,s.j4)(Sa,{key:2})):(0,s.kq)("",!0)],64))}});const Za=(0,C.Z)(Ya,[["__scopeId","data-v-4ede8bc7"]]);var Ma=Za;const Xa=async()=>await fetch("https://fakestoreapi.com/products").then((a=>a.json())),La=async a=>"all"===a?Xa():await fetch(`https://fakestoreapi.com/products/category/${a}`).then((a=>a.json())),qa={class:"content"},Ka={class:"wrapper"},ja={class:"main"};var Wa=(0,s.aZ)({__name:"HomeView",setup(a){const e=(0,A.iH)([]),n=(0,A.iH)([]),t=(0,A.iH)(""),r=(0,A.iH)(!0);(0,s.bv)((async()=>{e.value=await Xa(),n.value=[...e.value],r.value=!1})),(0,s.YP)(t,(async()=>{r.value=!0,e.value=await La(t.value),n.value=[...e.value],r.value=!1}));const i=a=>{n.value=e.value.filter((e=>e.price>=a.value.price.min&&e.price<=a.value.price.max&&e.rating.rate>=a.value.rating))};return(a,e)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(Q,{onChangeCategory:e[0]||(e[0]=a=>t.value=a)}),(0,s._)("div",qa,[(0,s.Wm)(ea,{onChangeFilter:i}),(0,s._)("div",Ka,[(0,s._)("main",ja,[(0,s.Wm)(Ma,{products:n.value,loading:r.value},null,8,["products","loading"])]),(0,s.Wm)(da)])])],64))}});const Na=(0,C.Z)(Wa,[["__scopeId","data-v-3237cfa9"]]);var Oa=Na;const Pa=[{path:"/",name:"home",component:Oa}],Va=(0,c.p7)({history:(0,c.PO)("/sneaker-city/"),routes:Pa});var Ga=Va;(0,t.ri)(o).use(Ga).mount("#app")},6463:function(a){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgBzVNLTsMwFHzPdiVWqFEv4FD2wA6hIuAmcARu4BtUnABxgnKDBkollrCnqQ+AlCyRcPxwYqVqaB01u1qK4s/MeObZRtihZfJc1v1Iv+v1NWwlHo+uwcLYwfoeTX1L8DBI31SNYa27Wnx0iPsoncXlV5L/40RIwHKueoDq8GuWfA8vbpGYZAhXTuRlHRd0wBBPisJ8lk44sHEl6siM2+edHDj7LrfN/YDyQTpX22AbRcyGowkQnrqCSShMXE1ysXRz2jNQRYvXp7CDkszoDozR9ZG5GF5IiAk3kDeiQpdGIAvgjSJuOkD6qI6PC7naeRWBkkgnDQfBi5QdXS7B/t54AT6NFvN4G65bhL0UEK2rrDet/kR5dwHLzwB+/CuEg6DAH0iuZ5mNUsvnAAAAAElFTkSuQmCC"},8935:function(a){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE0SURBVHgBjVNBTsMwEJw1OXC0fxAK3HtENIfwBH4ALyg/oH0B4QWIF/AFEC3iRh5QlXwAJcdKkAavmzhp5KQZyZJ3PbPe9a4JDaR+KIGNRA9U8pk0bbLiUTDV1gwFZX0BQIVEgUitF3M0xPd6faX+hY8DYA5zf0aTu9p5GqTDxKG0QYwmlGInLLJ2bZZ4fjmu7C39RiwyXFPqRnpdaeLIe9IkHzlnOAHy/Ep9L2/aXOEKYMSEN7V+P+EFomfjc0B01DlWq8Ws8pm9zsb1Tu4MOiHkwQAqeeU5iLm1Nive01affcRtvvMRkf/d6pofuFWlJ+ZHdFGdAcqWXlej7WqxBZOGDlKt2Q0S74WpmYo5hPcydJSZq9v8yHb9mc4C3SpMB30mfaFaLaO9AHs39OI4Kztl8A+NCIjpoqQ0vQAAAABJRU5ErkJggg=="},6737:function(a){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVJBTsJQEJ2ZduGK0HgAqrgXdyZiLCcQb4AnkBugJwBPAJwAvQEoIe6sawXrCcrSxPaP839trdAFiUzS9P8/b95/M+8D/DNwE1B4UPdAwaHZqOjeCZ6C0D12AXaWmAGYKs78YbhWvF/vyDVtxWByBHgOyL4sPQae0A+uK9Q9A84X61uQWxBHR7uLaVt/oL4aQvai8zZYo4SAoaZB0lErrJ70jSKtlqymYjSSU9LfNd+VRDElvXCgE87icU/WE+m3G1brISFqRcuiuQjxR6JCBgEQlbMb5rOB/Aah68nZZ5lMfiWYpTXwc4M6fU9lbxKCfU7xZgYKeChzuNqoWLfMXHbepuOMgJTdA8baqgtFoSzrWn7jdG8InGC81PZkLpjBFkr3pOAM4vjmD0ESMiziSyFpgmX3i4pBYV8wF3lbUewaafnyYLQTvgU0KOVepHGD4o55UKQazuvMzxOjlqv7Mk8UtDUcaI8JuSJpV86EHG4hsnum1ZXANZmsXMXkEqoAkAIp9IsKtxbfSYu5A8ugSAIAAAAASUVORK5CYII="}},e={};function n(t){var s=e[t];if(void 0!==s)return s.exports;var r=e[t]={exports:{}};return a[t](r,r.exports,n),r.exports}n.m=a,function(){var a=[];n.O=function(e,t,s,r){if(!t){var i=1/0;for(A=0;A<a.length;A++){t=a[A][0],s=a[A][1],r=a[A][2];for(var l=!0,o=0;o<t.length;o++)(!1&r||i>=r)&&Object.keys(n.O).every((function(a){return n.O[a](t[o])}))?t.splice(o--,1):(l=!1,r<i&&(i=r));if(l){a.splice(A--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var A=a.length;A>0&&a[A-1][2]>r;A--)a[A]=a[A-1];a[A]=[t,s,r]}}(),function(){n.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(e,{a:e}),e}}(),function(){n.d=function(a,e){for(var t in e)n.o(e,t)&&!n.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){n.p="/sneaker-city/"}(),function(){var a={143:0};n.O.j=function(e){return 0===a[e]};var e=function(e,t){var s,r,i=t[0],l=t[1],o=t[2],c=0;if(i.some((function(e){return 0!==a[e]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(o)var A=o(n)}for(e&&e(t);c<i.length;c++)r=i[c],n.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return n.O(A)},t=self["webpackChunksneaker_city"]=self["webpackChunksneaker_city"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(4571)}));t=n.O(t)})();
//# sourceMappingURL=app.3eea089f.js.map