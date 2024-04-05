(function(){"use strict";var e={3639:function(e,t,r){var n=r(5130),s=r(6768);function o(e,t,r,n,o,a){const i=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(i)}var a={name:"App"},i=r(1241);const l=(0,i.A)(a,[["render",o]]);var u=l,c=r(973);const d={class:"feed"},p={class:"status-bar"},g=(0,s.Lk)("p",null,"Home",-1),f=(0,s.Lk)("p",null,"Message",-1),m={class:"feed-container"},v=(0,s.Lk)("div",{class:"tab-bar"},[(0,s.Lk)("span",null,"Feed"),(0,s.Lk)("span",null,"Search"),(0,s.Lk)("span",null,"Add"),(0,s.Lk)("span",null,"MyPage")],-1);function h(e,t,r,n,o,a){const i=(0,s.g2)("router-link"),l=(0,s.g2)("Post");return(0,s.uX)(),(0,s.CE)("div",d,[(0,s.Lk)("div",p,[g,f,(0,s.bF)(i,{to:"/login"},{default:(0,s.k6)((()=>[(0,s.eW)("Login")])),_:1})]),(0,s.Lk)("div",m,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.postdata,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},[(0,s.bF)(l,{post:e},null,8,["post"])])))),128))]),v])}var k=r(8355),L=r(4232);const b={class:"post-container"},w={class:"post-head"},y=["src"],U={class:"post-body"},P=["src"];function C(e,t,r,n,o,a){return(0,s.uX)(),(0,s.CE)("div",b,[(0,s.Lk)("div",w,[(0,s.Lk)("img",{src:r.post.profileImage,alt:""},null,8,y),(0,s.Lk)("p",null,[(0,s.Lk)("strong",null,(0,L.v_)(r.post.username),1)])]),(0,s.Lk)("div",U,[(0,s.Lk)("img",{src:r.post.image,alt:""},null,8,P),(0,s.Lk)("p",null,[(0,s.Lk)("strong",null,(0,L.v_)(r.post.likes)+" Likes",1),(0,s.eW)(" "+(0,L.v_)(r.post.contents),1)]),(0,s.Lk)("p",null,(0,L.v_)(r.post.datetime),1)])])}var O={name:"Post",props:{post:Object}};const _=(0,i.A)(O,[["render",C]]);var j=_,A={name:"Feed",created(){k.A.get("/feed").then((e=>{console.log(e.data),this.postdata=e.data}))},data(){return{postdata:[]}},components:{Post:j},props:{}};const E=(0,i.A)(A,[["render",h]]);var S=E;const x=e=>((0,s.Qi)("data-v-a1e8532a"),e=e(),(0,s.jt)(),e),V={class:"login-page"},F=x((()=>(0,s.Lk)("div",{class:"app-name"},[(0,s.Lk)("h1",null,"STADIUM"),(0,s.Lk)("h3",null,"Login")],-1))),T={class:"login-form"},X={class:"create-account"};function I(e,t,r,o,a,i){const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",V,[F,(0,s.Lk)("div",T,[(0,s.bo)((0,s.Lk)("input",{type:"text",placeholder:"Username","onUpdate:modelValue":t[0]||(t[0]=e=>a.username=e)},null,512),[[n.Jo,a.username]]),(0,s.bo)((0,s.Lk)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e)},null,512),[[n.Jo,a.password]]),(0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>i.login&&i.login(...e)),class:"contrast"},"Login")]),(0,s.Lk)("div",X,[(0,s.bF)(l,{to:"/register"},{default:(0,s.k6)((()=>[(0,s.eW)(" or create account ")])),_:1})])])}r(4114);var J={name:"Login",data(){return{username:"",password:""}},methods:{login(){k.A.post("/login",{username:this.username,password:this.password}).then((e=>{1==e.data?(console.log("logged in"),this.$router.push("/")):this.$router.go(-1)}))}}};const M=(0,i.A)(J,[["render",I],["__scopeId","data-v-a1e8532a"]]);var q=M;const W=e=>((0,s.Qi)("data-v-6be84b84"),e=e(),(0,s.jt)(),e),R={class:"register-page"},D=W((()=>(0,s.Lk)("div",{class:"register-head"},[(0,s.Lk)("h1",null,"Register")],-1))),Q={class:"register-input"},$={class:"register-input"},H={class:"register-password"};function K(e,t,r,o,a,i){return(0,s.uX)(),(0,s.CE)("div",R,[D,(0,s.Lk)("div",{class:(0,L.C4)(["register-body",{unique:a.isUsernameUnique}])},[(0,s.Lk)("div",Q,[(0,s.bo)((0,s.Lk)("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=e=>a.registerUsername=e),placeholder:"ID"},null,512),[[n.Jo,a.registerUsername]]),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.checkUsername&&i.checkUsername(...e)),class:"contrast"},"c")]),(0,s.Lk)("div",$,[(0,s.Lk)("div",H,[(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>a.registerPassword=e),placeholder:"Password"},null,512),[[n.Jo,a.registerPassword]]),(0,s.bo)((0,s.Lk)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>a.registerPasswordConfirm=e),placeholder:"Confirm Password"},null,512),[[n.Jo,a.registerPasswordConfirm]])]),(0,s.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>i.register&&i.register(...e)),class:"contrast"},"r")])],2)])}var N={name:"Register",data(){return{registerUsername:"",registerPassword:"",registerPasswordConfirm:"",isUsernameUnique:!1,isPasswordVisible:!1}},computed:{isValidRegister(){return this.isUsernameUnique&&this.registerPassword===this.registerPasswordConfirm&&""!==this.registerUsername&&""!==this.registerPassword}},methods:{async checkUsername(){try{const e=await fetch("/checkUsername",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.registerUsername})}),t=await e.json();t.exists?alert("이미 사용 중인 사용자 이름입니다."):(alert("사용 가능한 사용자 이름입니다."),this.isUsernameUnique=!0,this.isPasswordVisible=!0)}catch(e){console.error(e),alert("사용자 이름을 확인하는 중 오류가 발생했습니다.")}},async register(){}}};const z=(0,i.A)(N,[["render",K],["__scopeId","data-v-6be84b84"]]);var B=z;const G=[{path:"/",component:S,props:!0},{path:"/login",component:q},{path:"/register",component:B}],Y=(0,c.aE)({history:(0,c.LA)(),routes:G});var Z=Y;(0,n.Ef)(u).use(Z).mount("#app")}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],o=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,s,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,a=n[0],i=n[1],l=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(l)var c=l(r)}for(t&&t(n);u<a.length;u++)o=a[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(3639)}));n=r.O(n)})();
//# sourceMappingURL=app.b4e34f5e.js.map