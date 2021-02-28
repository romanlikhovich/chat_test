(this["webpackJsonpchat-test"]=this["webpackJsonpchat-test"]||[]).push([[0],{131:function(e,t,r){},132:function(e,t,r){},134:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(26),c=r.n(s),l=(r(77),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,135)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),a(e),n(e),s(e),c(e)}))}),o=r(7),i=r(2),u=r(5),j=r(20),d=r(4),m=r.n(d),b=r(15),p=r(3),O=r(30),h=r.n(O),f="http://localhost:8000",x={"Content-Type":"application/json"},g=function(){var e=Object(b.a)(m.a.mark((function e(t,r){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(f,"/login"),{username:t,password:r},{headers:x});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("Login Error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(m.a.mark((function e(t,r,a,n){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(f,"/registration"),{firstName:t,lastName:r,username:a,password:n},{headers:x});case 3:return s=e.sent,e.abrupt("return",s.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("Registration Error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r,a,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(p.a)(Object(p.a)({},x),{},{Authorization:localStorage.getItem("token")}),e.next=4,h.a.post("".concat(f,"/logout"),null,{headers:t});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Logout error",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),I="LOGIN_ACTION",w="LOGOUT_ACTION",y="LOGIN_FAILED",S="REGISTER_ACTION",k=r(0),F=function(){var e=Object(u.b)();return Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(o.b,{className:"nav-link",to:"/login",onClick:function(t){t.preventDefault(),e(function(){var e=Object(b.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t({type:w,payload:null});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log Out"})})},T=function(e){var t=e.children,r=localStorage.getItem("userId");return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("header",{children:Object(k.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(k.jsx)("div",{className:"navbar-nav mr-auto",children:r&&Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(o.b,{className:"nav-link",to:"/",children:"Home"})})}),Object(k.jsx)("div",{className:"navbar-nav ml-auto",children:r?Object(k.jsx)(F,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(o.b,{className:"nav-link",to:"/registration",children:"Sign Up"})})]})})]})}),t]})},_=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),r=t[0],n=t[1],s=Object(a.useState)(null),c=Object(j.a)(s,2),l=c[0],i=c[1],d=Object(u.c)((function(e){return e})),p=Object(u.b)();d.isFail&&console.log("show Error");return Object(k.jsx)(T,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"col-6 offset-3",children:Object(k.jsxs)("div",{className:"my-3 p-5 bg-light border border-dark",children:[Object(k.jsx)("h1",{children:"Login"}),Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(function(e,t){return function(){var r=Object(b.a)(m.a.mark((function r(a){var n;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,g(e,t);case 3:n=r.sent,a({type:I,payload:n}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:y,payload:null});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}(r,l))},children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"username",children:"Username"}),Object(k.jsx)("input",{onChange:function(e){n(e.target.value)},type:"text",name:"username",id:"username",placeholder:"username",className:"form-control"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"Password"}),Object(k.jsx)("input",{onChange:function(e){i(e.target.value)},type:"password",name:"password",id:"password",placeholder:"password",className:"form-control"})]}),Object(k.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:"Login"})]}),Object(k.jsxs)("div",{className:"mt-1",children:["New to Chat? ",Object(k.jsx)(o.b,{to:"/registration",children:"SIGN UP"})]})]})})})})},L=r(31),R=r(69),C=r.n(R),E=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),r=t[0],n=t[1],s=Object(a.useState)([]),c=Object(j.a)(s,2),l=c[0],o=c[1],i=Object(a.useRef)();Object(a.useEffect)((function(){return i.current=C()("http://127.0.0.1:8000"),i.current.on("sendMessage",(function(e){var t=e;n((function(e){return[].concat(Object(L.a)(e),[t])}))})),-1===l.indexOf(localStorage.getItem("fullName"))&&(console.log("here"),i.current.emit("joinUser",localStorage.getItem("fullName"))),i.current.on("joinUser",(function(e){var t=e.onlineUsers,r=e.messages;o(Object(L.a)(t)),n(Object(L.a)(r))})),function(){i.current.disconnect()}}));return{messages:r,sendMessage:function(e){var t={message:e,userId:localStorage.getItem("userId"),userName:localStorage.getItem("fullName")};i.current.emit("sendMessage",t)},users:l}},U=(r(131),function(e){var t=e.users;return Object(k.jsxs)("div",{className:"users",children:[Object(k.jsx)("h1",{className:"users__title",children:"Users online"}),Object(k.jsx)("ul",{className:"users__list",children:t.map((function(e,t){return Object(k.jsx)("li",{className:"user",children:Object(k.jsx)("h5",{children:e})},"user_".concat(t))}))})]})}),A=r(70),D=r.n(A),G=(r(132),function(e){var t=e.messages,r=e.textareaRef,n=e.handleSubmit,s=Object(a.useRef)(null),c=localStorage.getItem("userId");return Object(a.useEffect)((function(){s.current.scrollTop=s.current.scrollHeight}),[t]),Object(k.jsxs)("div",{className:"chat",children:[Object(k.jsx)("div",{className:"chat__messages",ref:s,children:t&&t.map((function(e,t){var r=new Date(e.timestamp).toLocaleTimeString();return Object(k.jsxs)("div",{className:D()("message",c===e.userId&&"message--right"),children:[Object(k.jsxs)("div",{className:"message__info",children:[Object(k.jsx)("span",{children:e.userName}),Object(k.jsx)("span",{children:r})]}),Object(k.jsx)("div",{className:"message__text",children:e.message})]},"key_"+t)}))}),Object(k.jsxs)("form",{onSubmit:n,className:"chat__form",children:[Object(k.jsx)("textarea",{className:"form-control",ref:r}),Object(k.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Send"})]})]})}),M=function(){var e=E(),t=e.messages,r=e.sendMessage,n=e.users,s=Object(a.useRef)(null);return Object(k.jsx)(T,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"p-5",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-4",children:Object(k.jsx)(U,{users:n})}),Object(k.jsx)("div",{className:"col-8",children:Object(k.jsx)(G,{messages:t,handleSubmit:function(e){e.preventDefault(),r(s.current.value),s.current.value="",s.current.focus()},textareaRef:s})})]})})})})},P=r(19),q=r(71),B=r(72),H={token:localStorage.getItem("token")||null,username:localStorage.getItem("username")||null,messages:[],fullName:localStorage.getItem("fullName")||null,userId:localStorage.getItem("userId")||null,expirationToken:localStorage.getItem("expirationToken")||null,isFail:!1,isRegister:localStorage.getItem("username")||null},J=Object(P.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return console.log("In Login Action reducer"),localStorage.setItem("token","Bearer "+t.payload.token),localStorage.setItem("username",t.payload.username),localStorage.setItem("fullName",t.payload.fullName),localStorage.setItem("expirationToken",t.payload.expirationToken),localStorage.setItem("userId",t.payload.userId),Object(p.a)(Object(p.a)({},e),{},{token:"Bearer "+t.payload.token,username:t.payload.username,fullName:t.payload.fullName,expirationToken:t.payload.expirationToken,userId:t.payload.userId,isFail:!1});case w:return localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("fullName"),localStorage.removeItem("userId"),localStorage.removeItem("expirationToken"),Object(p.a)({},H);case y:return console.log("LOIGN FAIL"),Object(p.a)(Object(p.a)({},e),{},{isFail:!0});case S:return Object(p.a)(Object(p.a)({},e),{},{isRegister:!0});default:return Object(p.a)({},e)}}),Object(B.composeWithDevTools)(Object(P.applyMiddleware)(q.a))),z=r(29),W=function(e,t){return t?e:Object(k.jsx)(i.a,{to:"/login"})},K=function(e){var t=e.children,r=Object(z.a)(e,["children"]),a=Object(u.c)((function(e){return e})).token;return Object(k.jsx)(i.b,Object(p.a)(Object(p.a)({},r),{},{render:W.bind(null,t,a)}))},Q=function(e,t){return t?Object(k.jsx)(i.a,{to:"/"}):e},V=function(e){var t=e.children,r=Object(z.a)(e,["children"]),a=Object(u.c)((function(e){return e})).token;return Object(k.jsx)(i.b,Object(p.a)(Object(p.a)({},r),{},{render:Q.bind(null,t,a)}))},X=function(){var e=Object(a.useRef)(null),t=Object(u.c)((function(e){return e})),r=Object(u.b)();if(t.isRegister)return Object(k.jsx)(i.a,{to:"/login"});t.isFail&&console.log("show Error");return Object(k.jsx)(T,{children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"col-6 offset-3",children:Object(k.jsxs)("div",{className:"my-3 p-5 bg-light border border-dark",children:[Object(k.jsx)("h1",{children:"Registration"}),Object(k.jsxs)("form",{ref:e,onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.firstName,n=t.lastName,s=t.username,c=t.password,l=t.repassword;c.value===l.value?r(function(e,t,r,a){return function(){var n=Object(b.a)(m.a.mark((function n(s){var c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v(e,t,r,a);case 3:c=n.sent,s({type:S,payload:c}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),s({type:"REGISTER_ACTION",payload:null});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(a.value,n.value,s.value,c.value)):console.log("Passwords does not match")},children:[Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"First name"}),Object(k.jsx)("input",{required:!0,type:"text",name:"firstName",id:"firstName",placeholder:"firstName",className:"form-control"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"Last name"}),Object(k.jsx)("input",{required:!0,type:"text",name:"lastName",id:"lastName",placeholder:"lastName",className:"form-control"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"Username"}),Object(k.jsx)("input",{required:!0,type:"text",name:"username",id:"username",placeholder:"username",className:"form-control"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"Password"}),Object(k.jsx)("input",{required:!0,type:"password",name:"password",id:"password",placeholder:"password",className:"form-control"})]}),Object(k.jsxs)("div",{className:"form-group",children:[Object(k.jsx)("label",{htmlFor:"password",children:"Re-password"}),Object(k.jsx)("input",{required:!0,type:"password",name:"repassword",id:"repassword",placeholder:"repassword",className:"form-control"})]}),Object(k.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:"Register"})]})]})})})})};r(133);c.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(u.a,{store:J,children:Object(k.jsx)(o.a,{children:Object(k.jsxs)(i.d,{children:[Object(k.jsx)(V,{path:"/login",children:Object(k.jsx)(_,{})}),Object(k.jsx)(V,{path:"/registration",children:Object(k.jsx)(X,{})}),Object(k.jsx)(K,{path:"/",children:Object(k.jsx)(M,{})}),Object(k.jsx)(K,{path:"/logout"})]})})})}),document.getElementById("root")),l()},77:function(e,t,r){}},[[134,1,2]]]);
//# sourceMappingURL=main.f638a69d.chunk.js.map