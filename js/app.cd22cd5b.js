(function(t){function e(e){for(var o,i,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)i=r[u],a[i]&&h.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a={app:0},s=[];function r(t){return c.p+"js/"+({about:"about",contact:"contact",projects:"projects"}[t]||t)+"."+{about:"d6f65a98",contact:"7eb9acc2",projects:"a92726e1"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,contact:1,projects:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var o="css/"+({about:"about",contact:"contact",projects:"projects"}[t]||t)+"."+{about:"969966ac",contact:"b2479138",projects:"0500e6e1"}[t]+".css",a=c.p+o,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return e()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){l=h[r],u=l.getAttribute("data-href");if(u===o||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete i[t],d.parentNode.removeChild(d),n(s)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){i[t]=0}));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise(function(e,n){o=a[t]=[e,n]});e.push(o[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t),l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");s.type=o,s.request=i,n[1](s)}a[t]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0253":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"keepShaking",attrs:{id:"three-container"}})},i=[],a=n("5a89"),s={name:"Hao",props:["isAbout"],data:function(){return{canvasWidth:null,canvasHeight:null,camera:null,scene:null,renderer:null,ambLight:null,hemisphereLight:null,text3D:null,ground:null,groundCopy:null,pivot:null,targetRotation:0,targetRotationOnMouseDown:0,mouseX:0,mouseXOnMouseDown:0,mousePos:{x:0,y:0}}},methods:{init:function(){var t=this,e=document.getElementById("three-container");this.canvasWidth=window.innerHeight/2,this.canvasHeight=window.innerHeight/2,this.camera=new a["k"](65,this.canvasWidth/this.canvasHeight,.1,1e3),this.camera.position.set(0,0,6),this.scene=new a["l"],this.isAbout&&(this.scene.fog=new a["c"](16448250,1,150)),this.ambLight=new a["a"](16777215,.7),this.scene.add(this.ambLight),this.hemisphereLight=new a["e"](16777215,0,.6),this.scene.add(this.hemisphereLight),this.text3D=this.loadText(),this.text3D.position.x=-2.8,this.text3D.position.y=-1.7,this.pivot=(new a["j"]).add(this.text3D),this.scene.add(this.pivot),this.isAbout&&e.classList.remove("keepShaking"),e.addEventListener("click",function(){e.classList.contains("keepShaking")&&!t.isAbout&&e.classList.remove("keepShaking"),t.toggleText()}),this.renderer=new a["n"]({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.canvasWidth,this.canvasHeight),e.appendChild(this.renderer.domElement),this.isAbout?(document.addEventListener("mousemove",this.handleMouseMove,!1),document.addEventListener("touchmove",this.handleTouchmove,!1)):(this.renderer.domElement.addEventListener("mousedown",this.onDocumentMouseDown,!1),this.renderer.domElement.addEventListener("touchstart",this.onDocumentTouchStart,!1),this.renderer.domElement.addEventListener("touchmove",this.onDocumentTouchMove,!1))},animate:function(){requestAnimationFrame(this.animate),this.isAbout||(this.pivot.rotation.y-=.03,this.pivot.rotation.y+=.05*(this.targetRotation-this.pivot.rotation.y)),this.renderer.render(this.scene,this.camera)},loadText:function(){var t=this,e=new a["d"],n=new a["j"];return e.load("/hao.json",function(e){var o=new a["m"]("皓",{font:e,size:4,height:.5});o.computeBoundingBox();var i=new a["b"](o),s=new a["f"]({color:10649214}),r=new a["i"]({color:10921640}),c=new a["h"](o,r),l=new a["g"](i,s);t.isAbout?(c.visible=!1,l.visible=!0):(c.visible=!0,l.visible=!1),l.material.depthTest=!1,l.material.opacity=1,l.material.transparent=!0,n.add(c),n.add(l)},function(e){e.loaded/e.total*100===100&&t.onObjLoaded()}),n},toggleText:function(){this.text3D.children[0].visible?(this.text3D.children[0].visible=!1,this.text3D.children[1].visible=!0):(this.text3D.children[0].visible=!0,this.text3D.children[1].visible=!1),navigator.vibrate(100)},onDocumentMouseDown:function(t){this.renderer.domElement.addEventListener("mousemove",this.onDocumentMouseMove,!1),this.renderer.domElement.addEventListener("mouseup",this.onDocumentMouseUp,!1),this.renderer.domElement.addEventListener("mouseout",this.onDocumentMouseOut,!1),this.mouseXOnMouseDown=t.clientX-this.canvasWidth/2,this.targetRotationOnMouseDown=this.targetRotation},onDocumentMouseMove:function(t){this.mouseX=t.clientX-this.canvasWidth/2,this.targetRotation=this.targetRotationOnMouseDown+.02*(this.mouseX-this.mouseXOnMouseDown)},onDocumentMouseUp:function(){this.renderer.domElement.removeEventListener("mousemove",this.onDocumentMouseMove,!1),this.renderer.domElement.removeEventListener("mouseup",this.onDocumentMouseUp,!1),this.renderer.domElement.removeEventListener("mouseout",this.onDocumentMouseOut,!1)},onDocumentMouseOut:function(){this.renderer.domElement.removeEventListener("mousemove",this.onDocumentMouseMove,!1),this.renderer.domElement.removeEventListener("mouseup",this.onDocumentMouseUp,!1),this.renderer.domElement.removeEventListener("mouseout",this.onDocumentMouseOut,!1)},onDocumentTouchStart:function(t){1==t.touches.length&&(this.mouseXOnMouseDown=t.touches[0].pageX-this.canvasWidth/2,this.targetRotationOnMouseDown=this.targetRotation)},onDocumentTouchMove:function(t){1==t.touches.length&&(this.mouseX=t.touches[0].pageX-this.canvasWidth/2,this.targetRotation=this.targetRotationOnMouseDown+.05*(this.mouseX-this.mouseXOnMouseDown))},handleMouseMove:function(t){var e=t.clientX/this.canvasWidth/2-1,n=1-t.clientY/this.canvasHeight/2*2;this.mousePos={x:e,y:n},this.pivot.position.x=3*this.mousePos.x,this.pivot.position.y=3*this.mousePos.y,this.camera.lookAt(this.pivot.position)},handleTouchmove:function(t){var e=t.touches[0].pageX/this.canvasWidth*2-1,n=1-t.touches[0].pageX/this.canvasHeight*2;this.mousePos={x:e,y:n},this.pivot.position.x=4*this.mousePos.x,this.pivot.position.y=2*this.mousePos.y,this.camera.lookAt(this.pivot.position)},onObjLoaded:function(){this.$emit("onObjLoaded",!0)}},mounted:function(){this.init(),this.animate()}},r=s,c=(n("2c27"),n("2877")),l=Object(c["a"])(r,o,i,!1,null,"7674b5fe",null);e["a"]=l.exports},"034f":function(t,e,n){"use strict";var o=n("1356"),i=n.n(o);i.a},1356:function(t,e,n){},"2c27":function(t,e,n){"use strict";var o=n("8444"),i=n.n(o);i.a},"2fb4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=n("bb71");n("da64");o["a"].use(i["a"],{iconfont:"md",theme:{secondary:"#6b5152"}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navbar"),n("v-content",[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1)],1),n("Footer"),n("Particle")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-toolbar",{staticClass:"transparent",attrs:{prominent:"",flat:""}},[n("v-toolbar-side-icon",{staticClass:"secondary--text",on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"text-uppercase secondary--text"},[n("v-img",{attrs:{src:"/logo.svg","max-width":"50px","min-width":"50px"}})],1),n("v-toolbar-title",{staticClass:"text-uppercase secondary--text"},[n("span",{staticClass:"headline font-weight-light"},[t._v("Hao")])]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.links,function(e){return n("v-btn",{key:e.icon,staticClass:"title font-weight-light",attrs:{flat:"",large:"",color:"secondary","active-class":"selected",router:"",to:e.route}},[t._v(t._s(e.text))])}),1),n("v-toolbar-items",{staticClass:"hidden-md-and-up"},[n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"title font-weight-light",attrs:{slot:"activator",flat:"",large:"",color:"secondary"},slot:"activator"},[n("v-icon",{attrs:{left:""}},[t._v("expand_more")]),n("span",[t._v("Menu")])],1),n("v-list",t._l(t.links,function(e){return n("v-list-tile",{key:e.icon,attrs:{router:"",to:e.route}},[n("v-list-tile-title",{staticClass:"secondary--text headline font-weight-light"},[t._v(t._s(e.text))])],1)}),1)],1)],1)],1),n("v-navigation-drawer",{attrs:{app:"",temporary:"",width:"250"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-layout",{attrs:{column:"","align-center":""}},[n("v-flex",{staticClass:"mt-3"},[n("v-avatar",{attrs:{size:"80"}},[n("img",{attrs:{src:"/portrait.jpg"}})])],1),n("v-flex",[n("p",{staticClass:"secondary--text title mt-3 text-xs-center"},[t._v("Haoran Zhang")])]),n("v-flex",{staticClass:"mb-2"},[n("a",{staticClass:"grey--text subheading text-xs-center font-weight-light email",attrs:{href:"mailto:haoranzhang@icloud.com"}},[t._v("haoranzhang@icloud.com")])])],1),n("v-list",t._l(t.links,function(e){return n("v-list-tile",{key:e.text,staticClass:"secondary--text text--lighten-2",attrs:{"active-class":"grey lighten-4 secondary--text text--lighten-1",router:"",to:e.route,ripple:""}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"secondary lighten-2"}},[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)}),1)],1)],1)},c=[],l={data:function(){return{drawer:!1,links:[{icon:"home",text:"Home",route:"/"},{icon:"collections",text:"Projects",route:"/projects"},{icon:"contact_mail",text:"Contact",route:"/contact"},{icon:"info",text:"About",route:"/about"}]}}},u=l,h=(n("5d8e"),n("2877")),d=n("6544"),m=n.n(d),v=n("8212"),p=n("8336"),f=n("0e8f"),g=n("132d"),b=n("adda"),x=n("a722"),y=n("8860"),w=n("ba95"),_=n("40fe"),L=n("5d23"),D=n("e449"),E=n("f774"),j=n("9910"),M=n("71d9"),C=n("2a7f"),O=n("706c"),k=Object(h["a"])(u,r,c,!1,null,"42f18660",null),P=k.exports;m()(k,{VAvatar:v["a"],VBtn:p["a"],VFlex:f["a"],VIcon:g["a"],VImg:b["a"],VLayout:x["a"],VList:y["a"],VListTile:w["a"],VListTileAction:_["a"],VListTileContent:L["a"],VListTileTitle:L["b"],VMenu:D["a"],VNavigationDrawer:E["a"],VSpacer:j["a"],VToolbar:M["a"],VToolbarItems:C["a"],VToolbarSideIcon:O["a"],VToolbarTitle:C["b"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{color:"transparent"}},[n("v-spacer"),n("div",{staticClass:"subheading secondary--text font-weight-regular"},[t._v("© "+t._s((new Date).getFullYear())+" Haoran Zhang")]),n("v-spacer")],1)},V=[],A=(n("9123"),n("553a")),H={},S=Object(h["a"])(H,T,V,!1,null,"41f0ac88",null),X=S.exports;m()(S,{VFooter:A["a"],VSpacer:j["a"]});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"particles-js"}})},W=[],z=(n("572f"),{methods:{initParticle:function(){window.particlesJS("particles-js",{particles:{number:{value:20,density:{enable:!0,value_area:800}},color:{value:"#cac3bb"},shape:{type:"circle",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.6,random:!0,anim:{enable:!1,speed:.5,opacity_min:.2,sync:!1}},size:{value:100,random:!0,anim:{enable:!0,speed:10,size_min:80,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:6,direction:"none",random:!0,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}},mounted:function(){this.initParticle()}}),N=z,F=(n("b729"),Object(h["a"])(N,R,W,!1,null,"2327e2bf",null)),$=F.exports,B={name:"App",components:{Navbar:P,Footer:X,Particle:$},data:function(){return{}}},I=B,U=(n("034f"),n("7496")),q=n("549c"),J=Object(h["a"])(I,a,s,!1,null,null,null),Y=J.exports;m()(J,{VApp:U["a"],VContent:q["a"]});var Z=n("8c4f"),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"align-content-center":"",fluid:"","fill-height":""}},[n("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"text-xs-center home-item home-item--1",attrs:{xs12:"",md6:"","align-self-center":""}},[n("P",{staticClass:"display-3 secondary--text text--lighten-2 font-weight-thin home-sub-item home-sub-item--1"},[t._v("Design")]),n("P",{staticClass:"display-3 secondary--text font-weight-light home-sub-item home-sub-item--2"},[t._v("Code")]),n("P",{staticClass:"display-3 secondary--text text--darken-1 font-weight-regular home-sub-item home-sub-item--3"},[t._v("Music")])],1),n("v-flex",{staticClass:"display-4 text-xs-center home-item",attrs:{xs12:"",md6:"","align-self-center":""}},[n("Hao",{attrs:{isAbout:!1},on:{onObjLoaded:t.onObjLoaded}})],1)],1),t.isLoaded?t._e():n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{md12:"","align-self-center":""}},[n("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"secondary"}})],1)],1)],1)},G=[],Q=n("0253"),tt=n("95d1"),et={data:function(){return{isLoaded:!1}},components:{Hao:Q["a"],P:tt["a"].p({hoverable:!0,draggable:!0,init:{scale:1},hover:{scale:1.2},dragEnd:{x:0,y:0,transition:{type:"physics"}}})},methods:{onObjLoaded:function(t){this.isLoaded=t}},created:function(){this.isLoaded=!1}},nt=et,ot=(n("e564"),n("a523")),it=n("490a"),at=Object(h["a"])(nt,K,G,!1,null,"178d0bc1",null),st=at.exports;m()(at,{VContainer:ot["a"],VFlex:f["a"],VLayout:x["a"],VProgressCircular:it["a"]}),o["a"].use(Z["a"]);var rt=new Z["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",meta:{title:"Who is Hao?"},component:st},{path:"/projects",name:"projects",meta:{title:"Hao | Projects"},component:function(){return n.e("projects").then(n.bind(null,"acca"))}},{path:"/contact",name:"contact",meta:{title:"Hao | Contact"},component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/about",name:"about",meta:{title:"Hao | About"},component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});o["a"].config.productionTip=!1,new o["a"]({router:rt,render:function(t){return t(Y)}}).$mount("#app"),rt.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()})},"5d8e":function(t,e,n){"use strict";var o=n("8062"),i=n.n(o);i.a},"7a34":function(t,e,n){},8062:function(t,e,n){},8444:function(t,e,n){},9123:function(t,e,n){"use strict";var o=n("2fb4"),i=n.n(o);i.a},b729:function(t,e,n){"use strict";var o=n("e9ab"),i=n.n(o);i.a},e564:function(t,e,n){"use strict";var o=n("7a34"),i=n.n(o);i.a},e9ab:function(t,e,n){}});
//# sourceMappingURL=app.cd22cd5b.js.map