(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d858eddc"],{2017:function(t,e,n){"use strict";var o=n("b12d"),r=n.n(o);r.a},"27bb":function(t,e,n){},8574:function(t,e,n){"use strict";var o=n("27bb"),r=n.n(o);r.a},"9ed6":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v("KYC兑换后台")])]),t._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),n("el-input",{ref:"username",attrs:{placeholder:"用户名",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{prop:"authenticator"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"authenticator"}})],1),t._v(" "),n("el-input",{ref:"authenticator",attrs:{placeholder:"Google Authenticator",name:"authenticator",type:"text",tabindex:"3","auto-complete":"on"},model:{value:t.loginForm.authenticator,callback:function(e){t.$set(t.loginForm,"authenticator",e)},expression:"loginForm.authenticator"}})],1),t._v(" "),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")]),t._v(" "),n("div",{staticClass:"tips"},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("username: admin或者editor")]),t._v(" "),n("span",[t._v(" password: 任意6位以上密码")]),t._v(" "),n("span",[t._v(" Google Authenticator: 随意")])])],1)],1)},r=[],a=n("61f7"),s={name:"Login",data:function(){var t=function(t,e,n){Object(a["b"])(e)?n():n(new Error("Please enter the correct user name"))},e=function(t,e,n){e.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"",password:"",authenticator:""},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}],authenticator:[{required:!0,trigger:"blur"}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},methods:{showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1})).catch((function(){t.loading=!1}))}))}}},i=s,l=(n("2017"),n("8574"),n("2877")),c=Object(l["a"])(i,o,r,!1,null,"328608eb",null);e["default"]=c.exports},b12d:function(t,e,n){}}]);