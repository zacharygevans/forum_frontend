(this.webpackJsonpforum_frontend=this.webpackJsonpforum_frontend||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),c=a(0),s=a.n(c),i=a(11),o=a.n(i),l=a(15),d=a(28),u=a(197),j=a(189),p=a(24),b=a(13),h=a(4),m=a(181),O=a(184),x=a(187),f=a(186),v=a(51),g=a(99),w=a.n(g),y=a(54);var k=Object(y.c)(Object(y.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":var a=t.payload.token,n=a.split("."),r=n[1],c=atob(r),s=JSON.parse(c);return{authenticated:!0,username:t.payload.username,userId:s.id};case"logout":return{authenticated:!1};default:return e}},topic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setTopic":return{topic:t.payload.topic};case"setTopics":return{topics:t.payload.topics};default:return e}}})),S=a(2),N=Object(m.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0},menuButton:{marginRight:36},menuButtonHidden:{display:"none"}}}));function C(e){var t=N(),a=e.drawerOpen,n=e.handleDrawerOpen;var c=Object(d.b)((function(e){return e&&e.auth.authenticated})),i=Object(d.b)((function(e){return e&&e.auth.username})),o=Object(d.b)((function(e){return e&&e.topic.topic})),l=o?"CodeTalk - ".concat(o):"CodeTalk";return Object(S.jsx)(s.a.Fragment,{children:Object(S.jsxs)(O.a,{className:t.toolbar,children:[Object(S.jsx)(f.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:n,className:Object(h.a)(t.menuButton,a&&t.menuButtonHidden),children:Object(S.jsx)(w.a,{})}),Object(S.jsx)(v.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:t.toolbarTitle,children:l}),c?Object(S.jsxs)("span",{children:[Object(S.jsxs)(v.a,{children:["Welcome, ",i]}),Object(S.jsx)(x.a,{variant:"outlined",size:"small",onClick:function(){delete r.a.defaults.headers.Authorization,localStorage.clear("token"),k.dispatch({type:"logout"})},children:"Log out"})]}):Object(S.jsxs)("span",{children:[Object(S.jsx)(x.a,{variant:"outlined",size:"small",component:p.b,to:"/login",children:"Log in"}),Object(S.jsx)(x.a,{variant:"outlined",size:"small",component:p.b,to:"/register",children:"Register"})]})]})})}var q=a(188);function D(){return Object(S.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(S.jsx)(q.a,{children:"CodeTalk"})," ",(new Date).getFullYear(),"."]})}var I=Object(m.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0)}}}));function T(e){var t=I();return Object(S.jsx)("footer",{className:t.footer,children:Object(S.jsx)(j.a,{maxWidth:"lg",children:Object(S.jsx)(D,{})})})}var W=a(8),A=a.n(W),R=a(14),z=a(202),B=a(190),U=a(191),L=a(192),M=a(100),E=a.n(M);function Y(e){var t=e.open,a=e.handleDrawerClose,n=Object(c.useState)([]),s=Object(l.a)(n,2),i=s[0],o=s[1];return Object(c.useEffect)(Object(R.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("/topics");case 2:t=e.sent,a=t.data.topics,o(a),k.dispatch({type:"setTopics",payload:{topics:a}});case 6:case"end":return e.stop()}}),e)}))),[]),Object(S.jsxs)(z.a,{variant:"persistent",open:t,children:[Object(S.jsx)("div",{children:Object(S.jsx)(f.a,{onClick:a,children:Object(S.jsx)(E.a,{})})}),Object(S.jsx)(B.a,{}),Object(S.jsx)(U.a,{button:!0,component:p.b,to:"/",children:Object(S.jsx)(L.a,{primary:"All"})}),i.map((function(e){return Object(S.jsx)(U.a,{button:!0,component:p.b,to:"/"+e.title,children:Object(S.jsx)(L.a,{primary:e.title})},e.title)}))]})}var F=a(193),J=a(194),P=a(195),H=a(196),V=a(199),Z=Object(m.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function _(e){var t=Z(),a=e.question;return Object(S.jsx)(F.a,{item:!0,sm:12,md:12,children:Object(S.jsx)(J.a,{component:"a",href:"/".concat(a.Topic.title,"/").concat(a.id),children:Object(S.jsx)(P.a,{className:t.card,children:Object(S.jsx)("div",{className:t.cardDetails,children:Object(S.jsxs)(H.a,{children:[Object(S.jsxs)(v.a,{component:"h2",variant:"h5",children:[a.title," - ",a.User.username]}),Object(S.jsx)(v.a,{variant:"subtitle1",color:"textSecondary",children:a.createdAt}),Object(S.jsx)(v.a,{variant:"subtitle1",paragraph:!0,children:a.description}),Object(S.jsxs)(v.a,{variant:"subtitle1",color:"primary",children:[a.answerCount," answers"]})]})})})})})}var Q=Object(m.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function X(e){var t=Q(),a=Object(c.useState)([]),n=Object(l.a)(a,2),s=n[0],i=n[1],o=Object(c.useState)(""),u=Object(l.a)(o,2),j=u[0],p=u[1],h=Object(c.useState)(0),m=Object(l.a)(h,2),O=m[0],f=m[1],v=Object(b.g)().topic,g=Object(d.b)((function(e){return e&&e.auth.authenticated})),w=Object(d.b)((function(e){return e&&e.auth.userId}));function y(){return(y=Object(R.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:j,topicTitle:v,userId:w},e.next=3,r.a.post("/questions/",t);case 3:f(O+1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)(Object(R.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.dispatch({type:"setTopic",payload:{topic:v}}),!v){e.next=7;break}return e.next=4,r.a.get("/questions?topic=".concat(v));case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,r.a.get("/questions");case 9:t=e.sent;case 10:i(t.data.questions);case 11:case"end":return e.stop()}}),e)}))),[v,O]),Object(S.jsx)("main",{children:Object(S.jsxs)(F.a,{container:!0,spacing:4,children:[s.map((function(e){return Object(S.jsx)(_,{question:e},e.id)})),g&&v&&Object(S.jsx)(J.a,{component:"div",children:Object(S.jsx)(P.a,{className:t.card,children:Object(S.jsx)("div",{className:t.cardDetails,children:Object(S.jsxs)(H.a,{children:[Object(S.jsx)(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"newQuestion",label:"New question",value:j,onChange:function(e){return p(e.target.value)}}),Object(S.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return y.apply(this,arguments)},children:"Ask"})]})})})})]})})}var $=a(62),G=a(203),K=a(198),ee=a(201),te=a(61),ae=a.n(te),ne=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),re=function(){var e=ne(),t=Object($.a)({}),a=t.handleSubmit,n=t.register,s=t.remember,i=Object(c.useState)(""),o=Object(l.a)(i,2),d=o[0],p=o[1],h=Object(b.f)(),m=a(function(){var e=Object(R.a)(A.a.mark((function e(t){var a,n,c,s,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.password,c=t.remember,e.prev=1,e.next=4,r.a.post("http://68.183.18.78:8000/login",{username:a,password:n});case 4:s=e.sent,i=s.data.token,r.a.defaults.headers.common={Authorization:"Bearer ".concat(i)},k.dispatch({type:"login",payload:{username:a,token:i}}),c&&(localStorage.setItem("token",i),localStorage.setItem("username",a)),h.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),401===e.t0.response.status?p("Invalid credentials"):p("Something went wrong");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}());return Object(S.jsxs)(j.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(u.a,{}),Object(S.jsxs)("div",{className:e.paper,children:[Object(S.jsx)(G.a,{className:e.avatar,children:Object(S.jsx)(ae.a,{})}),Object(S.jsx)(v.a,{component:"h1",variant:"h5",children:d||"Log in"}),Object(S.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:m,children:[Object(S.jsx)(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,inputRef:n}),Object(S.jsx)(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:n}),Object(S.jsx)(K.a,{control:Object(S.jsx)(ee.a,{color:"primary"}),label:"Remember me",name:"remember",value:s,inputRef:n}),Object(S.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Log In"}),Object(S.jsx)(F.a,{container:!0,children:Object(S.jsx)(F.a,{item:!0,children:Object(S.jsx)(q.a,{href:"/register",variant:"body2",children:"Don't have an account? Register"})})})]})]})]})},ce=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},error:{color:"red"}}}));function se(){var e=ce(),t=Object($.a)(),a=t.register,n=t.errors,c=t.handleSubmit,s=t.watch,i=Object(b.f)();function o(){return(o=Object(R.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.password,e.next=3,r.a.post("/register",{username:a,password:n});case 3:201===e.sent.status&&i.push("/login");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(S.jsxs)(j.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(u.a,{}),Object(S.jsxs)("div",{className:e.paper,children:[Object(S.jsx)(G.a,{className:e.avatar,children:Object(S.jsx)(ae.a,{})}),Object(S.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(S.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:c((function(e){return o.apply(this,arguments)})),children:[Object(S.jsxs)(F.a,{container:!0,spacing:2,children:[Object(S.jsxs)(F.a,{item:!0,xs:12,children:[Object(S.jsx)(V.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",inputRef:a({required:"You must provide a username"})}),n.username&&Object(S.jsx)("span",{className:e.error,children:n.username.message})]}),Object(S.jsx)(F.a,{item:!0,xs:12,children:Object(S.jsx)(V.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:a({required:"You must provide a password.",pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,message:"Password should contain at least 8 characters and 1 number"}})})}),n.password&&Object(S.jsx)("span",{className:e.error,children:n.password.message}),Object(S.jsxs)(F.a,{item:!0,xs:12,children:[Object(S.jsx)(V.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Repeat password",type:"password",id:"password2",autoComplete:"current-password",inputRef:a({required:"You must provide a repeat password.",validate:function(e){return e===s("password")||"The passwords do not match"}})}),n.password2&&Object(S.jsx)("span",{className:e.error,children:n.password2.message})]})]}),Object(S.jsx)(x.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(S.jsx)(F.a,{container:!0,justify:"flex-end",children:Object(S.jsx)(F.a,{item:!0,children:Object(S.jsx)(q.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}var ie=Object(m.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function oe(e){var t=ie(),a=e.answer;return Object(S.jsx)(F.a,{item:!0,sm:12,md:12,children:Object(S.jsx)(J.a,{children:Object(S.jsx)(P.a,{className:t.card,children:Object(S.jsx)("div",{className:t.cardDetails,children:Object(S.jsxs)(H.a,{children:[Object(S.jsx)(v.a,{variant:"subtitle1",color:"textSecondary",children:a.createdAt}),Object(S.jsxs)(v.a,{variant:"subtitle1",paragraph:!0,children:[a.text," - ",a.User.username]})]})})})})})}var le=Object(m.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function de(e){var t=le(),a=Object(c.useState)([]),n=Object(l.a)(a,2),s=n[0],i=n[1],o=Object(c.useState)({}),u=Object(l.a)(o,2),j=u[0],p=u[1],h=Object(c.useState)(""),m=Object(l.a)(h,2),O=m[0],f=m[1],g=Object(b.g)(),w=g.topic,y=g.questionId,N=Object(d.b)((function(e){return e&&e.auth.authenticated})),C=Object(d.b)((function(e){return e&&e.auth.userId})),q=Object(c.useState)(0),D=Object(l.a)(q,2),I=D[0],T=D[1];function W(){return(W=Object(R.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={text:O,questionId:y,userId:C},e.next=3,r.a.post("/answers/",t);case 3:T(I+1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)(Object(R.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.dispatch({type:"setTopic",payload:{topic:w}}),e.next=3,r.a.get("/questions/".concat(y));case 3:t=e.sent,i(t.data.Answers),p(t.data);case 6:case"end":return e.stop()}}),e)}))),[y,I]),Object(S.jsx)("main",{children:Object(S.jsxs)(F.a,{container:!0,spacing:4,children:[Object(S.jsx)(J.a,{children:Object(S.jsx)(P.a,{className:t.card,children:Object(S.jsx)("div",{className:t.cardDetails,children:Object(S.jsxs)(H.a,{children:[Object(S.jsxs)(v.a,{component:"h2",variant:"h5",children:[j.title,j.User&&" - "+j.User.username]}),Object(S.jsx)(v.a,{variant:"subtitle1",color:"textSecondary",children:j.createdAt}),Object(S.jsx)(v.a,{variant:"subtitle1",paragraph:!0,children:j.description})]})})})}),s.map((function(e){return Object(S.jsx)(oe,{answer:e},e.id)})),N&&Object(S.jsx)(J.a,{component:"div",children:Object(S.jsx)(P.a,{className:t.card,children:Object(S.jsx)("div",{className:t.cardDetails,children:Object(S.jsxs)(H.a,{children:[Object(S.jsx)(V.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"newAnswer",label:"New answer",value:O,onChange:function(e){return f(e.target.value)}}),Object(S.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return W.apply(this,arguments)},children:"Answer"})]})})})})]})})}var ue=function(){var e=s.a.useState(!0),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(S.jsx)(d.a,{store:k,children:Object(S.jsxs)(p.a,{children:[Object(S.jsx)(u.a,{}),Object(S.jsx)(Y,{open:a,handleDrawerClose:function(){n(!1)}}),Object(S.jsxs)(j.a,{maxWidth:"lg",children:[Object(S.jsx)(C,{drawerOpen:a,handleDrawerOpen:function(){n(!0)}}),Object(S.jsxs)(b.c,{children:[Object(S.jsx)(b.a,{path:"/login",component:re}),Object(S.jsx)(b.a,{path:"/register",component:se}),Object(S.jsx)(b.a,{path:"/:topic/:questionId",component:de}),Object(S.jsx)(b.a,{path:"/:topic",component:X}),Object(S.jsx)(b.a,{path:"/",component:X})]})]}),Object(S.jsx)(T,{})]})})};r.a.defaults.baseURL="http://localhost:8000";var je=localStorage.getItem("token"),pe=localStorage.getItem("username");je&&pe&&(r.a.defaults.headers.common={Authorization:"Bearer ".concat(je)},k.dispatch({type:"login",payload:{username:pe,token:je}})),o.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(ue,{})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.75d9c0b9.chunk.js.map