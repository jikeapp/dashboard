webpackJsonp([2,0],[function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var s=o(87),i=n(s),a=o(86),d=n(a),r=o(82),u=n(r);o(67),i["default"].use(d["default"]),i["default"].filter("thousands",o(29)["default"]),new i["default"]({el:"body",components:{App:u["default"]}})},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,o){var n,s;o(73),n=o(32),s=o(81),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var n,s;o(69),n=o(33),s=o(77),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(38),i=n(s);t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?1:arguments[1],o=parseFloat(e);if(isNaN(o))return"";for(var n="",s=""+Math.round(o*Math.pow(10,t))/Math.pow(10,t),a=o<0,d=(a?s.slice(1):s).split("."),r=(0,i["default"])(d,2),u=r[0],l=r[1];u.length>3;)n=","+u.slice(-3)+n,u=u.slice(0,u.length-3);return n=u+n,l&&(n+="."+l),a&&(n="-"+n),n}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(84),i=n(s),a=o(85),d=n(a);t["default"]={components:{login:i["default"],main:d["default"]},data:function(){return{currentPage:""}},ready:function(){var e=sessionStorage.getItem("jike-dashboard-user");e?this.currentPage="main":this.currentPage="login"},events:{"login-success":function(e){sessionStorage.setItem("jike-dashboard-user",e),this.currentPage="main"},logout:function(){sessionStorage.removeItem("jike-dashboard-user"),this.currentPage="login"}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:{type:Number},percent:{type:Number},valueUnit:{type:String,"default":""}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={components:{},props:{title:{type:String,"default":""},titlePosition:{type:String,"default":"center"}},data:function(){return{}},computed:{},methods:{},ready:function(){}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={components:{},props:["size","border-width","color"],computed:{spinnerStyle:function(){return{width:this.size,height:this.size,borderWidth:this.borderWidth,borderColor:this.color}}}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(27),i=n(s),a=o(28),d=n(a),r=o(75);t["default"]={components:{dialog:i["default"],spinner:d["default"]},props:[],data:function(){return{username:"",password:"",loginFailed:!1,submitting:!1}},computed:{},methods:{login:function(){var e=this;this.submitting=!0,setTimeout(function(){var t=r.some(function(t){return t.username===e.username&&t.password===e.password});t?e.$dispatch("login-success",e.username):(e.loginFailed=!0,setTimeout(function(){return e.loginFailed=!1},1e3))},600)}},ready:function(){}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(27),i=n(s),a=o(28),d=n(a),r=o(83),u=n(r),l=o(74);t["default"]={components:{dialog:i["default"],spinner:d["default"],dataBox:u["default"]},props:[],data:function(){return{loading:!0,username:sessionStorage.getItem("jike-dashboard-user"),updateTime:l.updateTime,dataList:l.dataList}},computed:{},methods:{},ready:function(){var e=this;setTimeout(function(){e.loading=!1},600)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports={updateTime:"2016-07-31",dataList:[{id:"dau",title:"日 活",value:312.2,unit:"k",percent:0},{id:"mau",title:"月 活",value:1058.6,unit:"k",percent:0},{id:"openTimes",title:"打开次数",value:1662.5,unit:"k",percent:0},{id:"d1rr",title:"次日留存率",value:66.7,unit:"%",percent:0},{id:"d7rr",title:"周留存率",value:35.2,unit:"%",percent:0},{id:"duration",title:"使用时长",value:29,unit:"mins",percent:0}]}},function(e,t){e.exports=[{username:"wtmanutd",password:"123456"},{username:"xixidong",password:"123456"},{username:"zhenge",password:"zhengejike123"},{username:"pingan",password:"pingan123"},{username:"vertex",password:"vertex123"},{username:"bai",password:"bai123"},{username:"tencent",password:"tencent123"}]},function(e,t){e.exports=" <component :is=currentPage transition=fade transition-mode=out-in> </component> "},function(e,t){e.exports=" <span class=spinner :style=spinnerStyle></span> "},function(e,t){e.exports=' <div class=main-page _v-075d0dc6=""> <div class=topbar _v-075d0dc6=""> <div class=logo _v-075d0dc6=""></div> <h1 class=app-title _v-075d0dc6="">Dashboard</h1> <div class=user-info _v-075d0dc6=""> {{ username }} <button type=button name=button class="btn btn-logout" @click="$dispatch(\'logout\')" _v-075d0dc6="">退出</button> </div> </div> <div v-if=loading class=loading-wrap _v-075d0dc6=""> <spinner _v-075d0dc6=""></spinner> </div> <div v-else="" class=main-body _v-075d0dc6=""> <div v-for="data in dataList" class=data-box-wrap transition=fade stagger=1000 _v-075d0dc6=""> <dialog :title=data.title title-position=left _v-075d0dc6=""> <data-box slot=body :value=data.value :value-unit=data.unit :percent=data.percent _v-075d0dc6=""> </data-box> </dialog> </div> <p class=update-time _v-075d0dc6="">更新时间: {{ updateTime }}</p> </div> </div> '},function(e,t){e.exports=' <div class=login-box-wrap _v-38fa29b5=""> <dialog title="登 录" class=login-box :class="{ shake: loginFailed }" _v-38fa29b5=""> <div slot=header class=login-header _v-38fa29b5=""></div> <div slot=body class=login-box-content _v-38fa29b5=""> <input type=text v-model=username placeholder=用户名 _v-38fa29b5=""> <input type=password v-model=password placeholder=密码 _v-38fa29b5=""> <button class=btn @click=login :disabled=submitting _v-38fa29b5=""> <span v-if=!submitting _v-38fa29b5="">登 录</span> <spinner v-else="" size=2em border-width=.3em _v-38fa29b5=""></spinner> </button> </div> </dialog> </div> '},function(e,t){e.exports=' <div class=data-box _v-6d3d23d8=""> <h3 class=value _v-6d3d23d8=""> {{ value | thousands }} <span class=unit v-if=valueUnit _v-6d3d23d8="">{{ valueUnit }}</span> </h3> </div> '},function(e,t){e.exports=' <div class=dialog-wrap _v-6dac39f8=""> <div class=dialog-header _v-6dac39f8=""> <slot name=header _v-6dac39f8=""> <h3 class=dialog-title :class=[titlePosition] _v-6dac39f8="">{{ title }}</h3> </slot> </div> <div class=dialog-body _v-6dac39f8=""> <slot name=body _v-6dac39f8=""></slot> </div> <div class=dialog-footer _v-6dac39f8=""> <slot name=footer _v-6dac39f8=""></slot> </div> </div> '},function(e,t,o){var n,s;o(68),n=o(30),s=o(76),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var n,s;o(72),n=o(31),s=o(80),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var n,s;o(71),n=o(34),s=o(79),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var n,s;o(70),n=o(35),s=o(78),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}]);
//# sourceMappingURL=app.af21bd17ad7197c9aefe.js.map