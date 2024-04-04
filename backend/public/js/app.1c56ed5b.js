(function(){"use strict";var n={2160:function(n,t,e){var o=e(5130),r=e(6768);const a={class:"rView"};function s(n,t,e,o,s,u){const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(l)])}var u={name:"App"},l=e(1241);const i=(0,l.A)(u,[["render",s]]);var c=i,p=e(973);const d={class:"status-bar"},f=(0,r.Lk)("p",null,"Home",-1),v=(0,r.Lk)("p",null,"Message",-1),g=(0,r.Lk)("div",{class:"tab-bar"},[(0,r.Lk)("p",null,"Feed"),(0,r.Lk)("p",null,"Search"),(0,r.Lk)("p",null,"Add"),(0,r.Lk)("p",null,"MyPage")],-1);function k(n,t,e,o,a,s){const u=(0,r.g2)("router-link"),l=(0,r.g2)("Post");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",d,[f,v,(0,r.bF)(u,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})]),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.postdata,((n,t)=>((0,r.uX)(),(0,r.CE)("div",{key:t},[(0,r.bF)(l,{post:n},null,8,["post"])])))),128)),g],64)}var h=e(8355),m=e(4232);const L={class:"post-container"},b={class:"post-head"},y=["src"],w={class:"post-body"},O=["src"];function _(n,t,e,o,a,s){return(0,r.uX)(),(0,r.CE)("div",L,[(0,r.Lk)("div",b,[(0,r.Lk)("img",{src:e.post.profileImage,alt:""},null,8,y),(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,(0,m.v_)(e.post.username),1)])]),(0,r.Lk)("div",w,[(0,r.Lk)("img",{src:e.post.image,alt:""},null,8,O),(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,(0,m.v_)(e.post.likes)+" Likes",1),(0,r.eW)(" "+(0,m.v_)(e.post.contents),1)]),(0,r.Lk)("p",null,(0,m.v_)(e.post.datetime),1)])])}var j={name:"Post",props:{post:Object}};const A=(0,l.A)(j,[["render",_]]);var C=A,E={name:"Feed",created(){h.A.get("/feed").then((n=>{console.log(n.data),this.postdata=n.data}))},data(){return{postdata:[]}},components:{Post:C},props:{}};const F=(0,l.A)(E,[["render",k]]);var P=F;const S=n=>((0,r.Qi)("data-v-a1e8532a"),n=n(),(0,r.jt)(),n),x={class:"login-page"},M=S((()=>(0,r.Lk)("div",{class:"app-name"},[(0,r.Lk)("h1",null,"STADIUM"),(0,r.Lk)("h3",null,"Login")],-1))),X={class:"login-form"},T={class:"create-account"};function I(n,t,e,a,s,u){const l=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",x,[M,(0,r.Lk)("div",X,[(0,r.bo)((0,r.Lk)("input",{type:"text",placeholder:"Username","onUpdate:modelValue":t[0]||(t[0]=n=>s.username=n)},null,512),[[o.Jo,s.username]]),(0,r.bo)((0,r.Lk)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=n=>s.password=n)},null,512),[[o.Jo,s.password]]),(0,r.Lk)("button",{onClick:t[2]||(t[2]=(...n)=>u.login&&u.login(...n)),class:"contrast"},"Login")]),(0,r.Lk)("div",T,[(0,r.bF)(l,{to:"/register"},{default:(0,r.k6)((()=>[(0,r.eW)(" or create account ")])),_:1})])])}e(4114);var U={name:"Login",data(){return{username:"",password:""}},methods:{login(){h.A.post("/login",{username:this.username,password:this.password}).then((n=>{1==n.data?(console.log("logged in"),this.$router.push("/")):this.$router.go(-1)}))}}};const V=(0,l.A)(U,[["render",I],["__scopeId","data-v-a1e8532a"]]);var W=V;const J=[{path:"/",component:P,props:!0},{path:"/login",component:W}],K=(0,p.aE)({history:(0,p.LA)(),routes:J});var $=K;(0,o.Ef)(c).use($).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return n[o].call(a.exports,a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,a){if(!o){var s=1/0;for(c=0;c<n.length;c++){o=n[c][0],r=n[c][1],a=n[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(e.O).every((function(n){return e.O[n](o[l])}))?o.splice(l--,1):(u=!1,a<s&&(s=a));if(u){n.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=n.length;c>0&&n[c-1][2]>a;c--)n[c]=n[c-1];n[c]=[o,r,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,a,s=o[0],u=o[1],l=o[2],i=0;if(s.some((function(t){return 0!==n[t]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(l)var c=l(e)}for(t&&t(o);i<s.length;i++)a=s[i],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(2160)}));o=e.O(o)})();
//# sourceMappingURL=app.1c56ed5b.js.map