(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(15),c=n.n(a),i=(n(87),n(79)),s=n(20),u=n(27),l=Object(u.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),b=l.actions,d=b.increment,p=b.decrement,j=b.incrementByAmount,m=function(e){return e.counter.value},h=l.reducer,x=n(21),f=n.n(x),O=n(138),g=n(137),v=n(139),_=n(2);function y(){var e=Object(s.c)(m),t=Object(s.b)(),n=Object(o.useState)("2"),r=Object(i.a)(n,2),a=r[0],c=r[1],u=Object(v.a)().t;return Object(_.jsx)(O.a,{in:!0,timeout:1200,children:Object(_.jsxs)("section",{className:f.a.counter,children:[Object(_.jsx)("h1",{children:u("description.part2")}),Object(_.jsxs)("div",{className:f.a.row,children:[Object(_.jsx)("button",{className:f.a.button,"aria-label":"Increment value",onClick:function(){return t(d())},children:"+"}),Object(_.jsx)("span",{className:f.a.value,children:e}),Object(_.jsx)("button",{className:f.a.button,"aria-label":"Decrement value",onClick:function(){return t(p())},children:"-"})]}),Object(_.jsxs)("div",{className:f.a.row,children:[Object(_.jsx)("input",{className:f.a.textbox,"aria-label":"Set increment amount",value:a,onChange:function(e){return c(e.target.value)}}),Object(_.jsx)(g.a,{onClick:function(){return t(j(Number(a)||0))},children:"Add Amount"}),Object(_.jsx)(g.a,{className:f.a.asyncButton,onClick:function(){return t((e=Number(a)||0,function(t){setTimeout((function(){t(j(e))}),1e3)}));var e},children:"Add Async"})]})]})})}var w=n(5),C=n(31),N=[{name:"Main",path:"/"},{name:"About",path:"/about/"}],B=r.a.memo((function(){return Object(_.jsx)("nav",{children:N.map((function(e,t){return Object(_.jsx)(C.b,{href:"/",to:e.path,exact:!0,children:e.name},t)}))})})),k=n(48),S=n.n(k),A=n.p+"static/media/logo.b2e5a01e.svg";function L(){return Object(_.jsxs)("header",{className:S.a.header,children:[Object(_.jsx)("img",{src:A,alt:"logo",className:S.a.header__logo}),Object(_.jsx)(B,{})]})}var M=n(136),R=n(78),W="rgb(105, 186, 190)",J="rgba(0, 0, 0, 0.768)",T=Object(R.a)({palette:{primary:{main:W},secondary:{main:W,contrastText:"#fff"}},typography:{fontFamily:"Roboto",body2:{fontFamily:"Roboto",marginBottom:"10px"},h1:{fontWeight:"bold",fontSize:"40px",marginBottom:"20px",color:J},h2:{fontWeight:"bold",fontSize:"36px",marginBottom:"20px",color:J},h3:{fontWeight:"bold",fontSize:"34px",marginBottom:"20px",color:J},h4:{fontWeight:"bold",fontSize:"26px",marginBottom:"20px",color:J},h5:{fontWeight:"bold",fontSize:"22px",marginBottom:"20px",color:J}},shape:{borderRadius:0},overrides:{MuiChip:{root:{margin:"0 10px 20px 0"}},MuiCard:{root:{boxShadow:"none"}},MuiTextField:{root:{borderColor:W,marginBottom:"20px","& .MuiInput-underline:before":{borderBottomColor:W},"&:hover":{borderBottomColor:W}}},MuiNativeSelect:{root:{color:"#fff"},icon:{color:"#fff"}},MuiButton:{root:{"&:focus":{outline:"none"}}},MuiInputLabel:{root:{color:W}}}}),z=n(69),I=n.n(z);function E(){return Object(_.jsx)("footer",{className:I.a.footer,children:"\xa9 2021"})}var F=n(49),P=n.n(F),q=n(70),H=n(71),U=n.n(H).a.create({baseURL:"https://timra.ru/timra/wp-json/wp/v2"}),D=Object(u.b)({name:"posts",initialState:{data:[],isLoading:!1,error:null},reducers:{request:function(e){e.isLoading=!0},success:function(e,t){e.isLoading=!1,e.data=t.payload}}}),K=D.actions,V=K.request,Y=K.success,Z=function(e){return{id:e.id,title:e.title.rendered}},$=function(e){return e.posts.data},G=function(e){return e.posts.isLoading},Q=D.reducer,X=n(72),ee=n.n(X),te=n(135),ne=r.a.memo((function(){return Object(_.jsx)("div",{className:"center_block",children:Object(_.jsx)(te.a,{})})}));function oe(){var e=Object(s.c)($),t=Object(s.c)(G),n=Object(s.b)();Object(o.useEffect)((function(){e.length||n(function(){var e=Object(q.a)(P.a.mark((function e(t){var n,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V()),e.next=3,U.get("/posts?_embed&per_page=10&page=1");case 3:n=e.sent,o=n.data,t(Y(o.map(Z)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);return Object(_.jsx)(O.a,{in:!0,timeout:1200,children:Object(_.jsxs)("section",{className:ee.a.posts,children:[Object(_.jsx)("h1",{children:"\u041f\u043e\u0441\u0442\u044b"}),t&&Object(_.jsx)(ne,{}),e&&e.map((function(e){var t=e.id,n=e.title;return Object(_.jsxs)("div",{children:[n,Object(_.jsx)("br",{})]},t)}))]})})}var re=r.a.memo((function(){var e=Object(v.a)(),t=e.t,n=e.i18n,o=function(e){n.changeLanguage(e)};return Object(_.jsxs)(M.a,{theme:T,children:[Object(_.jsx)(L,{}),Object(_.jsxs)("main",{className:"App",children:[Object(_.jsx)("button",{onClick:function(){return o("en")},children:"EN"}),Object(_.jsx)("button",{onClick:function(){return o("ru")},children:"RU"}),Object(_.jsx)("h1",{children:t("description.part1")}),Object(_.jsxs)(w.c,{children:[Object(_.jsx)(w.a,{exact:!0,path:"/",component:oe}),Object(_.jsx)(w.a,{exact:!0,path:"/about",component:y})]})]}),Object(_.jsx)(E,{})]})})),ae=n(8),ce=Object(ae.c)({counter:h,posts:Q}),ie=n(22),se=n(73),ue={key:"root",storage:n.n(se).a},le=Object(ie.g)(ue,ce),be=Object(u.a)({reducer:le,middleware:Object(u.c)({serializableCheck:{ignoredActions:[ie.a,ie.f,ie.b,ie.c,ie.d,ie.e]}}),devTools:!1}),de=Object(ie.h)(be);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=n(74),je=n(50),me=n(34),he={en:{translation:n(76)},ru:{translation:n(77)}};je.a.use(me.e).init({fallbackLng:"en",debug:!0,resources:he});je.a;c.a.render(Object(_.jsx)(s.a,{store:be,children:Object(_.jsx)(pe.a,{loading:null,persistor:de,children:Object(_.jsx)(C.a,{children:Object(_.jsx)(re,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,n){e.exports={counter:"Counter_counter__2a2H-",row:"Counter_row__2k2JV",value:"Counter_value__3eew2",button:"Counter_button__1vsxJ",textbox:"Counter_textbox__ZPPax",asyncButton:"Counter_asyncButton__3dTYl"}},48:function(e,t,n){e.exports={header__logo:"Header_header__logo__2RKR2"}},69:function(e,t,n){},72:function(e,t,n){e.exports={posts:"Posts_posts__2TJBE"}},76:function(e){e.exports=JSON.parse('{"title":"Welcome to react using react-i18next and typescript 4.1","description":{"part1":"This is an example without namespaces.","part2":"In order to infer the appropriate type for t function, you should use type augmentation to override the Resources type.","part3":"Check out the @types/react-i18next to see an example."}}')},77:function(e){e.exports=JSON.parse('{"title":"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0440\u0435\u0430\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e response-i18next \u0438 typescript 4.1","description":{"part1":"\u042d\u0442\u043e \u043f\u0440\u0438\u043c\u0435\u0440 \u0431\u0435\u0437 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432 \u0438\u043c\u0435\u043d.","part2":"\u0427\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0442\u0438\u043f \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 t, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0438\u043f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432.","part3":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 @ types / response-i18next, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440."}}')},87:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.f139f998.chunk.js.map