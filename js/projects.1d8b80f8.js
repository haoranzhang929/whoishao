(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"025d":function(t,e,i){},"0832":function(t,e,i){},"4b91":function(t,e,i){},"58db":function(t,e,i){},acca:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mt-2",attrs:{"fill-height":""}},[i("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[i("v-carousel",{attrs:{height:"550px"}},t._l(t.projects,(function(e,n){return i("v-carousel-item",{key:n,attrs:{src:e.src}},[i("div",{staticClass:"project-card"},[i("div",{staticClass:"project-title mb-4"},[i("p",{staticClass:"headline project-name"},[t._v(t._s(e.name))])]),i("div",{staticClass:"project-info"},[e.url?i("v-btn",{attrs:{color:"secondary",target:"_blank",href:e.url}},[t._v("URL")]):t._e(),e.code?i("v-btn",{attrs:{color:"secondary",target:"_blank",href:e.code}},[t._v("Code")]):t._e(),e.demo?i("v-btn",{attrs:{color:"secondary",target:"_blank",href:e.demo}},[t._v("Demo")]):t._e()],1)])])})),1)],1)],1)},s=[],r={data:function(){return{projects:[{name:"Image Finder",src:"/Image-search.webp",code:"https://github.com/haoranzhang929/unsplash-image-finder"},{name:"Audio Visual Tool",src:"/audio-freq.webp",code:"https://github.com/haoranzhang929/audio-frequency-visual-generators"},{name:"ONE KICKS",src:"/shoes.webp",url:"https://1-kicks.com/"},{name:"Changing Places Ireland",src:"/cp.webp",url:"https://changingplaces.ie/"},{name:"Music Projects",src:"/bc.webp",url:"https://ha0beatz.bandcamp.com/"},{name:"Video Projects",src:"/youtube.webp",url:"https://www.youtube.com/channel/UCPIeJ9dP80qSbyOd2SGh4Jg/featured"}]}}},a=r,o=(i("ed0c"),i("2877")),u=i("6544"),l=i.n(u),h=i("8336"),c=(i("4b91"),i("0832"),i("58db"),i("2b0e"));function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return c["a"].extend({name:"proxyable",model:{prop:t,event:e},props:d({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:d({},t,(function(t){this.internalLazyValue=t}))})}var f=v(),p=f,m=i("6a18"),g=i("58df"),y=i("d9bd"),w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},b=Object(g["a"])(p,m["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return w({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(y["b"])("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t,i)})),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}}),V=(b.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),i("c341")),C=b.extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:V["a"]},props:{mandatory:{type:Boolean,default:!0},reverse:{type:Boolean,default:void 0},touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,isActive:!1,isBooted:!1,isReverse:!1}},computed:{computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse===!this.$vuetify.rtl?"-reverse":"";return"v-window-"+t+e+"-transition"},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;this.$nextTick((function(){return t.isBooted=!0}))},methods:{genContainer:function(){return this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},this.$slots.default)},next:function(){this.isReverse=!1;var t=(this.internalIndex+1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},prev:function(){this.isReverse=!0;var t=(this.internalIndex+this.items.length-1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse:function(t,e){this.isReverse=t<e}},render:function(t){var e={staticClass:"v-window",directives:[]};if(!this.touchless){var i=this.touch||{left:this.next,right:this.prev};e.directives.push({name:"touch",value:i})}return t("div",e,[this.genContainer()])}}),I=i("afdd"),T=i("9d26"),x=b.extend({name:"button-group",provide:function(){return{btnToggle:this}},props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return b.options.computed.classes.call(this)}}}),$=i("80d2"),E=C.extend({name:"v-carousel",props:{cycle:{type:Boolean,default:!0},delimiterIcon:{type:String,default:"$vuetify.icons.delimiter"},height:{type:[Number,String],default:500},hideControls:Boolean,hideDelimiters:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$vuetify.icons.next"},prevIcon:{type:[Boolean,String],default:"$vuetify.icons.prev"}},data:function(){return{changedByDelimiters:!1,internalHeight:this.height,slideTimeout:void 0}},computed:{isDark:function(){return this.dark||!this.light}},watch:{internalValue:function(t){this.restartTimeout(),this.$listeners["input"]&&this.$emit("input",t)},interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},mounted:function(){this.$listeners["input"]&&Object(y["c"])("@input","@change",this),this.startTimeout()},methods:{genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls"},[this.genItems()])},genIcon:function(t,e,i){var n=this;return this.$createElement("div",{staticClass:"v-carousel__"+t},[this.$createElement(I["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.t("$vuetify.carousel."+t)},on:{click:function(){n.changedByDelimiters=!0,i()}}},[this.$createElement(T["a"],{props:{size:"46px"}},e)])])},genIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;e&&"string"===typeof e&&t.push(this.genIcon("prev",e,this.prev));var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;return i&&"string"===typeof i&&t.push(this.genIcon("next",i,this.next)),t},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(I["a"],{class:{"v-carousel__controls__item":!0},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(T["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(x,{props:{value:this.internalValue},on:{change:function(e){t.internalValue=e}}},i)},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0;var t=requestAnimationFrame||setTimeout;t(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:C.options.methods.updateReverse.call(this,t,e)}},render:function(t){var e=[],i={staticClass:"v-window v-carousel",style:{height:Object($["b"])(this.height)},directives:[]};return this.touchless||i.directives.push({name:"touch",value:{left:this.next,right:this.prev}}),this.hideControls||e.push(this.genIcons()),this.hideDelimiters||e.push(this.genDelimiters()),t("div",i,[this.genContainer(),e])}}),_=i("3e79"),B=i("2464"),j=Object(g["a"])(_["a"],Object(B["a"])("windowGroup","v-window-item","v-window")).extend({name:"v-window-item",directives:{Touch:V["a"]},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame((function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1}))},onBeforeEnter:function(){this.windowGroup.isActive=!0},onLeave:function(t){this.windowGroup.internalHeight=Object($["b"])(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var i=this,n=this.windowGroup.isBooted;n&&(this.done=e),requestAnimationFrame((function(){if(!i.computedTransition)return e();i.windowGroup.internalHeight=Object($["b"])(t.clientHeight),!n&&setTimeout(e,100)}))},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){var e=t("div",{staticClass:"v-window-item",directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()));return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,leave:this.onLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[e])}}),A=i("adda"),O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},S=j.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(A["a"],{staticClass:"v-carousel__item",props:O({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners},this.$slots.default)]},onBeforeEnter:function(){},onEnter:function(){},onAfterEnter:function(){},onBeforeLeave:function(){},onEnterCancelled:function(){}}}),k=i("a523"),D=i("a722"),L=Object(o["a"])(a,n,s,!1,null,null,null);e["default"]=L.exports;l()(L,{VBtn:h["a"],VCarousel:E,VCarouselItem:S,VContainer:k["a"],VLayout:D["a"]})},ed0c:function(t,e,i){"use strict";var n=i("025d"),s=i.n(n);s.a}}]);
//# sourceMappingURL=projects.1d8b80f8.js.map