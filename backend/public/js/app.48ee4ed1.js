(function(){"use strict";var n={8345:function(n,t,e){var o=e(5130),r=e(6768);const u={class:"rView"};function s(n,t,e,o,s,a){const i=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",u,[(0,r.bF)(i)])}var a={name:"App"},i=e(1241);const l=(0,i.A)(a,[["render",s]]);var c=l,p=e(973);const f={class:"status-bar"},d=(0,r.Lk)("p",null,"Home",-1),v=(0,r.Lk)("p",null,"Message",-1),k=(0,r.Lk)("div",{class:"tab-bar"},[(0,r.Lk)("p",null,"Feed"),(0,r.Lk)("p",null,"Search"),(0,r.Lk)("p",null,"Add"),(0,r.Lk)("p",null,"MyPage")],-1);function g(n,t,e,o,u,s){const a=(0,r.g2)("router-link"),i=(0,r.g2)("Post");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",f,[d,v,(0,r.bF)(a,{to:"/login"},{default:(0,r.k6)((()=>[(0,r.eW)("Login")])),_:1})]),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(u.postdata,((n,t)=>((0,r.uX)(),(0,r.CE)("div",{key:t},[(0,r.bF)(i,{post:n},null,8,["post"])])))),128)),k],64)}var m=e(8355),b=e(4232);const L={class:"post-container"},h={class:"post-head"},y=["src"],O={class:"post-body"},w=["src"];function j(n,t,e,o,u,s){return(0,r.uX)(),(0,r.CE)("div",L,[(0,r.Lk)("div",h,[(0,r.Lk)("img",{src:e.post.profileImage,alt:""},null,8,y),(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,(0,b.v_)(e.post.username),1)])]),(0,r.Lk)("div",O,[(0,r.Lk)("img",{src:e.post.image,alt:""},null,8,w),(0,r.Lk)("p",null,[(0,r.Lk)("strong",null,(0,b.v_)(e.post.likes)+" Likes",1),(0,r.eW)(" "+(0,b.v_)(e.post.contents),1)]),(0,r.Lk)("p",null,(0,b.v_)(e.post.datetime),1)])])}var A={name:"Post",props:{post:Object}};const E=(0,i.A)(A,[["render",j]]);var F=E,P={name:"Feed",created(){m.A.get("/feed").then((n=>{console.log(n.data),this.postdata=n.data}))},data(){return{postdata:[]}},components:{Post:F},props:{}};const _=(0,i.A)(P,[["render",g]]);var C=_;const S=(0,r.Lk)("div",{class:"app-name"},"STADIUM",-1),x=(0,r.Lk)("div",{class:"login-container"},[(0,r.Lk)("form",{action:"/login",method:"POST"},[(0,r.Lk)("input",{type:"text",name:"username"}),(0,r.Lk)("input",{type:"password",name:"password"}),(0,r.Lk)("button",{type:"submit",class:"contrast"},"Login")])],-1);function M(n,t,e,o,u,s){return(0,r.uX)(),(0,r.CE)(r.FK,null,[S,x],64)}var T={name:"Login"};const X=(0,i.A)(T,[["render",M]]);var I=X;const K=[{path:"/",component:C,props:!0},{path:"/login",component:I}],W=(0,p.aE)({history:(0,p.LA)(),routes:K});var D=W;(0,o.Ef)(c).use(D).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return n[o].call(u.exports,u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,u){if(!o){var s=1/0;for(c=0;c<n.length;c++){o=n[c][0],r=n[c][1],u=n[c][2];for(var a=!0,i=0;i<o.length;i++)(!1&u||s>=u)&&Object.keys(e.O).every((function(n){return e.O[n](o[i])}))?o.splice(i--,1):(a=!1,u<s&&(s=u));if(a){n.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}u=u||0;for(var c=n.length;c>0&&n[c-1][2]>u;c--)n[c]=n[c-1];n[c]=[o,r,u]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,u,s=o[0],a=o[1],i=o[2],l=0;if(s.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(i)var c=i(e)}for(t&&t(o);l<s.length;l++)u=s[l],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(8345)}));o=e.O(o)})();
//# sourceMappingURL=app.48ee4ed1.js.map