(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{254:function(t,e,n){var content=n(434);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("c16cd048",content,!0,{sourceMap:!1})},255:function(t,e,n){var content=n(436);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("30ed6321",content,!0,{sourceMap:!1})},433:function(t,e,n){"use strict";var o=n(254);n.n(o).a},434:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".chat-item{padding:10px;border-radius:10px}.chat-item,.chat-item-other{margin-top:5px;margin-bottom:10px;font-size:15px;width:auto;white-space:normal;word-break:break-all;word-wrap:break-word;display:inline-block;*display:inline;*zoom:1}.chat-item-left-avatar{float:left;margin-left:0;background:grey;width:35px;height:35px;text-align:center;border-radius:50%;overflow:hidden;margin-bottom:5px}.chat-item-left{float:left;margin-left:10px;padding:10px;border-radius:10px;font-size:15px;border:1px solid #50d250;background-color:#50d250;margin-right:40px}.chat-item-right{float:right;border:1px solid #fff;background-color:#fff;text-align:right;margin-left:40px}",""])},435:function(t,e,n){"use strict";var o=n(255);n.n(o).a},436:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".chat{position:absolute;height:100%;width:100%;bottom:50px}.chat,.chat-list{background:#f5f0f0}.chat-list{list-style:none;overflow-y:scroll;overflow-x:hidden;padding:50px 15px 65px;bottom:0;box-sizing:border-box}.chat-list-item{overflow:hidden}.chat-input{position:fixed;bottom:50px;display:-webkit-box;display:flex;background-color:#fff;width:100%}.chat-input input{-webkit-box-flex:9;flex:9;margin:5px;padding:10px;background-color:#e0e0e0;border:1px solid #e0e0e0;border-radius:24px;color:grey}.chat-input-send{-webkit-box-flex:1;flex:1;size:50px;text-align:center;line-height:1;vertical-align:middle;display:table-cell;color:#fff}",""])},474:function(t,e,n){"use strict";n.r(e);n(60),n(35);var o={props:{type:"",item:""}},r=(n(433),n(17)),c=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.type==t.item.type?n("div",{staticClass:"chat-item-other"},[n("div",{staticClass:"chat-item-left-avatar"},[t._v("😀")]),t._v(" "),n("div",{staticClass:"chat-item-left"},[t._v(t._s(t.item.content))])]):n("div",{staticClass:"chat-item chat-item-right"},[t._v(t._s(t.item.content))])},[],!1,null,null,null).exports,l=n(4),f="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function d(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach(function(o){var r=n?Reflect.getOwnMetadata(o,e,n):Reflect.getOwnMetadata(o,e);n?Reflect.defineMetadata(o,r,t,n):Reflect.defineMetadata(o,r,t)})}var h={__proto__:[]}instanceof Array;var m=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function y(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach(function(t){if("constructor"!==t)if(m.indexOf(t)>-1)e[t]=n[t];else{var o=Object.getOwnPropertyDescriptor(n,t);void 0!==o.value?"function"==typeof o.value?(e.methods||(e.methods={}))[t]=o.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=o.value,e}}):(o.get||o.set)&&((e.computed||(e.computed={}))[t]={get:o.get,set:o.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var o in t.$options.props)t.hasOwnProperty(o)||n.push(o);n.forEach(function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})})};var data=new e;e.prototype._init=n;var o={};return Object.keys(data).forEach(function(t){void 0!==data[t]&&(o[t]=data[t])}),o}(this,t)}});var o=t.__decorators__;o&&(o.forEach(function(t){return t(e)}),delete t.__decorators__);var r,c,y=Object.getPrototypeOf(t.prototype),x=y instanceof l.default?y.constructor:l.default,w=x.extend(e);return function(t,e,n){Object.getOwnPropertyNames(e).forEach(function(o){if(!v[o]){var r=Object.getOwnPropertyDescriptor(t,o);if(!r||r.configurable){var c,l,f=Object.getOwnPropertyDescriptor(e,o);if(!h){if("cid"===o)return;var d=Object.getOwnPropertyDescriptor(n,o);if(c=f.value,l=typeof c,null!=c&&("object"===l||"function"===l)&&d&&d.value===f.value)return}0,Object.defineProperty(t,o,f)}}})}(w,t,x),f&&(d(r=w,c=t),Object.getOwnPropertyNames(c.prototype).forEach(function(t){d(r.prototype,c.prototype,t)}),Object.getOwnPropertyNames(c).forEach(function(t){d(r,c,t)})),w}var v={prototype:!0,arguments:!0,callee:!0,caller:!0};function x(t){return"function"==typeof t?y(t):function(e){return y(e,t)}}x.registerHooks=function(t){m.push.apply(m,t)};"undefined"!=typeof Reflect&&Reflect.getMetadata;var w={layout:"app_layout",data:function(){return{msgs:[{content:"你好，我是图灵机器人。欢迎和我交流",type:"left"},{content:"有什么问题都可以问问我。",type:"left"},{content:"虽然有些问题我可能答不上来。",type:"left"},{content:"你好，我是JAY。",type:"right"},{content:"JAY，你好~ 初次见面请多多关照",type:"left"}],msg:""}},components:{ChatItemContent:c},methods:{onClickLeft:function(){this.$router.go(-1)},send:function(t){13===t.keyCode&&this.msg.length&&this.sendMsg()},sendMsg:function(){var t=this;this.msg.length&&(this.msgs.push({content:this.msg,type:"right"}),this.$axios.$post("/chat",{reqType:0,perception:{inputText:{text:this.msg}},userInfo:{apiKey:"27c16212222745aa9c39fc86bfdd1574",userId:"jay"}}).then(function(e){e.results&&e.results[0]?t.msgs.push({content:e.results[0].values.text,type:"left"}):t.msgs.push({content:"不好意思，好像网络出现问题，我无法正常和你交谈~",type:"left"})}).catch(function(e){t.msgs.push({content:"不好意思，好像网络出现问题，我无法正常和你交谈~",type:"left"})}),this.msg=""),console.log(document.documentElement.scrollHeight+"test"+document.documentElement.clientHeight);try{window.scrollTo(0,document.documentElement.scrollHeight-document.documentElement.clientHeight)}catch(t){}}}},_=(n(435),Object(r.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[n("ul",{staticClass:"chat-list"},t._l(t.msgs,function(t,e){return n("li",{key:e,staticClass:"chat-list-item"},[n("ChatItemContent",{attrs:{type:"left",item:t}})],1)}),0),t._v(" "),n("div",{staticClass:"chat-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{placeholder:t.$t("chat.input_placeholder")},domProps:{value:t.msg},on:{keypress:t.send,input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "),n("button",{staticClass:"chat-input-send",on:{click:function(e){return t.sendMsg()}}},[t._v("▶️")])])])},[],!1,null,null,null));e.default=_.exports}}]);