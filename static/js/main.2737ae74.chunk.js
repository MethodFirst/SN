(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return i});var a=n(127),r=(n(72),n(0),a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5b81d964-99b4-407f-90c1-60763e8e54a8"}})),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},u={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},103:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(42),r=n(4),o={dialogs:[{id:1,name:"Jove"},{id:2,name:"Vic"},{id:3,name:"Sv"},{id:4,name:"Alex"},{id:5,name:"Dandy"},{id:6,name:"Mick"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it skills?"},{id:3,message:"Yo"},{id:4,message:"Nice to meet you"},{id:5,message:"Thank you"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},114:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},134:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2Q8mV",selectedPage:"users_selectedPage__1uDnL"}},135:function(e,t,n){e.exports=n.p+"static/media/preloader.6e7c9db7.svg"},15:function(e,t,n){e.exports={nav:"Navbar_nav__3LCZV",item:"Navbar_item__r53jG",activeLink:"Navbar_activeLink__xML_-"}},163:function(e,t,n){e.exports=n(291)},21:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p});var a=n(53),r=n(0),o=n.n(r),c=n(22),u=n.n(c),i=n(89),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:u.a.FormControl+" "+(c?u.a.error:"")},o.a.createElement("div",null,r),c&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",c)}},22:function(e,t,n){e.exports={FormControl:"FormsControls_FormControl__2eoG3",error:"FormsControls_error__1k1ug",formSummaryError:"FormsControls_formSummaryError__3Hnvw",testAccount:"FormsControls_testAccount__hmnZh"}},251:function(e,t,n){},252:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(8),r=n(93),o=n(103),c={},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;arguments.length>1&&arguments[1];return e},i=n(7),s=n.n(i),l=n(13),f=n(42),p=n(4),d=n(10),m=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(p.a)(Object(p.a)({},e),a):e})},g={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},h=function(e){return{type:"FOLLOW",userId:e}},b=function(e){return{type:"UNFOLLOW",userId:e}},v=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},E=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},O=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},w=function(){var e=Object(l.a)(s.a.mark(function e(t,n,a,r){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(O(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(O(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(p.a)(Object(p.a)({},e),{},{users:m(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(p.a)(Object(p.a)({},e),{},{users:m(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(p.a)(Object(p.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},S=n(32),j={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},P=function(e,t,n,a){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},y=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},C=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a,r,o,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,c=a.email,t(P(r,c,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(y(a));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(p.a)(Object(p.a)({},e),t.payload);default:return e}},N=n(129),A=n(126),U={initialized:!1},x=Object(a.c)({profilePage:r.b,dialogsPage:o.a,sidebar:u,usersPage:_,auth:T,form:A.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_USER_DATA":return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}}}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,L=Object(a.e)(x,I(Object(a.a)(N.a)));window.__store__=L;var F=L,G=n(0),R=n.n(G),M=n(131),z=n.n(M),D=(n(251),n(25)),H=n(26),B=n(28),W=n(27),V=(n(252),n(15)),X=n.n(V),J=n(295),Y=(n(86),function(){return R.a.createElement("nav",{className:X.a.nav},R.a.createElement("div",{className:X.a.item},R.a.createElement(J.a,{to:"/profile",activeClassName:X.a.activeLink},"Profile")),R.a.createElement("div",{className:"".concat(X.a.item," ").concat(X.a.active)},R.a.createElement(J.a,{to:"/dialogs",activeClassName:X.a.activeLink},"Messages")),R.a.createElement("div",{className:"".concat(X.a.item," ").concat(X.a.active)},R.a.createElement(J.a,{to:"/users",activeClassName:X.a.activeLink},"Users")),R.a.createElement("div",{className:X.a.item},R.a.createElement("a",null,"News in developing")),R.a.createElement("div",{className:X.a.item},R.a.createElement("a",null,"Music in developing")),R.a.createElement("div",{className:X.a.item},R.a.createElement("a",null,"Settings in developing")))}),q=n(296),Q=n(132),Z=n(292),K=n(297),$=n(294),ee=n(11),te=n(53),ne=n(65),ae=n(94),re=n(70),oe=n.n(re),ce=n(133),ue=n.n(ce),ie=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.portionSize,c=void 0===o?10:o,u=Math.ceil(t/n),i=[],s=1;s<=u;s++)i.push(s);var l=Math.ceil(u/c),f=Object(G.useState)(1),p=Object(ae.a)(f,2),d=p[0],m=p[1],g=(d-1)*c+1,h=d*c;return R.a.createElement("div",{className:oe.a.paginator},d>1&&R.a.createElement("button",{onClick:function(){m(d-1)}},"PREV"),i.filter(function(e){return e>=g&&e<=h}).map(function(e){return R.a.createElement("span",{className:ue()(Object(ne.a)({},oe.a.selectedPage,a===e),oe.a.pageNumber),key:e,onClick:function(t){r(e)}},e)}),l>d&&R.a.createElement("button",{onClick:function(){m(d+1)}},"NEXT"))},se=n(134),le=n.n(se),fe=n(114),pe=n.n(fe),de=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,r=e.follow;return R.a.createElement("div",null,R.a.createElement("span",null,R.a.createElement("div",null,R.a.createElement(J.a,{to:"/profile/"+t.id},R.a.createElement("img",{src:null!=t.photos.small?t.photos.small:pe.a,className:le.a.userPhoto}))),R.a.createElement("div",null,t.followed?R.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Unfollow"):R.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Follow"))),R.a.createElement("span",null,R.a.createElement("span",null,R.a.createElement("div",null,t.name),R.a.createElement("div",null,t.status)),R.a.createElement("span",null,R.a.createElement("div",null,"user.location.country"),R.a.createElement("div",null,"user.location.city"))))},me=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,r=e.onPageChanged,o=e.users,c=Object(te.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return R.a.createElement("div",null,R.a.createElement(ie,{currentPage:t,onPageChanged:r,totalItemsCount:n,pageSize:a}),R.a.createElement("div",null,o.map(function(e){return R.a.createElement(de,{user:e,followingInProgress:c.followingInProgress,key:e.id,unfollow:c.unfollow,follow:c.follow})})))},ge=n(37),he=n(136),be=Object(he.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),ve=function(e){return e.usersPage.pageSize},Ee=function(e){return e.usersPage.totalUsersCount},Oe=function(e){return e.usersPage.currentPage},we=function(e){return e.usersPage.isFetching},_e=function(e){return e.usersPage.followingInProgress},Se=function(e){Object(B.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return R.a.createElement(R.a.Fragment,null,this.props.isFetching?R.a.createElement(ge.a,null):null,R.a.createElement(me,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(R.a.Component),je=Object(a.d)(Object(ee.b)(function(e){return{users:be(e),pageSize:ve(e),totalUsersCount:Ee(e),currentPage:Oe(e),isFetching:we(e),followingInProgress:_e(e)}},{follow:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:w(n,e,d.d.follow.bind(d.d),h);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:w(n,e,d.d.unfollow.bind(d.d),b);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:v,toggleFollowingProgress:O,getUsers:function(e,t){return function(){var n=Object(l.a)(s.a.mark(function n(a){var r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(E(!0)),a(v(e)),n.next=4,d.d.getUsers(e,t);case 4:r=n.sent,a(E(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(Se),Pe=n(38),ye=n.n(Pe),Ce=function(e){return R.a.createElement("header",{className:ye.a.header},R.a.createElement("img",{src:"https://im0-tub-ru.yandex.net/i?id=5d9610c3cdebb56618e633c7fa0d0d52-sr&n=13"}),R.a.createElement("div",{className:ye.a.loginBlock},e.isAuth?R.a.createElement("div",null,e.login," - ",R.a.createElement("button",{onClick:e.logout,type:"button",className:ye.a.LoginButton},"Log out")):R.a.createElement(Z.a,{to:"/login"}),e.isAuth))},ke=function(e){Object(B.a)(n,e);var t=Object(W.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return R.a.createElement(Ce,this.props)}}]),n}(R.a.Component),Te=Object(ee.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.logout();case 2:0===e.sent.data.resultCode&&t(P(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(ke),Ne=n(125),Ae=n(21),Ue=n(62),xe=n(22),Ie=n.n(xe),Le=Object(Ne.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return R.a.createElement("form",{onSubmit:t},Object(Ae.c)("Email","email",[Ue.b],Ae.a),Object(Ae.c)("Password","password",[Ue.b],Ae.a,{type:"password"}),Object(Ae.c)(null,"rememberMe",[],Ae.a,{type:"checkbox"},"remember me"),a&&R.a.createElement("img",{src:a}),a&&Object(Ae.c)("Symbols from image","captcha",[Ue.b],Ae.a,{}),n&&R.a.createElement("div",{className:Ie.a.formSummaryError},n),R.a.createElement("div",null,R.a.createElement("button",null,"Login")))}),Fe=Object(ee.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,n,a){return function(){var r=Object(l.a)(s.a.mark(function r(o){var c,u;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.login(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?o(C()):(10===c.data.resultCode&&o(k()),u=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(S.a)("login",{_error:u})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?R.a.createElement(Z.a,{to:"/profile"}):R.a.createElement("div",null,R.a.createElement("h1",{className:Ie.a.testAccount},"Testing account: free@samuraijs.com "),R.a.createElement("h1",{className:Ie.a.testAccount},"Password: free "),R.a.createElement("h1",{className:Ie.a.testAccount},"This site is under development by Anton Golenko at this stage The basic concepts of the code have been implemented which you can see in my github repository. The design of the site is still in development and I used the simplest one, first working hard on the functionality. You can test my login page with validators and also users,profile and messages pages."),R.a.createElement("h1",null,"Login"),R.a.createElement(Le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}),R.a.createElement("h1",{className:Ie.a.testAccount},"My Github repository: https://github.com/MethodFirst/SN "))}),Ge=function(e){return function(t){return R.a.createElement(R.a.Suspense,{fallback:R.a.createElement(ge.a,null)},R.a.createElement(e,t))}},Re=(n(72),R.a.lazy(function(){return n.e(4).then(n.bind(null,303))})),Me=R.a.lazy(function(){return n.e(3).then(n.bind(null,302))}),ze=function(e){Object(B.a)(n,e);var t=Object(W.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?R.a.createElement("div",{className:"app-wrapper"},R.a.createElement("div",{className:"app-wrapper-content2"},R.a.createElement("div",null,"WELCOME")),R.a.createElement(Te,null),R.a.createElement(Y,null),R.a.createElement("div",{className:"app-wrapper-content"},R.a.createElement(q.a,null,R.a.createElement(Q.a,{exact:!0,path:"/",render:function(){return R.a.createElement(Z.a,{to:"/profile"})}}),R.a.createElement(Q.a,{path:"/dialogs",render:Ge(Re)}),R.a.createElement(Q.a,{path:"/profile/:userId?",render:Ge(Me)}),R.a.createElement(Q.a,{path:"/users",render:function(){return R.a.createElement(je,null)}}),R.a.createElement(Q.a,{path:"/login",render:function(){return R.a.createElement(Fe,null)}}),R.a.createElement(Q.a,{path:"*",render:function(){return R.a.createElement("div",null,"404 NOT FOUND")}})))):R.a.createElement(ge.a,null)}}]),n}(G.Component),De=Object(a.d)(K.a,Object(ee.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then(function(){e({type:"SET_USER_DATA"})})}}}))(ze),He=function(e){return R.a.createElement($.a,null,R.a.createElement(ee.a,{store:F},R.a.createElement(De,null)))};z.a.render(R.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(135),c=n.n(o);t.a=function(e){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("img",{src:c.a}))}},38:function(e,t,n){e.exports={header:"Header_header__2v6Qh",loginBlock:"Header_loginBlock__3uozL",login:"Header_login__1OWWo",LoginButton:"Header_LoginButton__uC28X"}},62:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__DvTSB",pageNumber:"Paginator_pageNumber__32gG-",selectedPage:"Paginator_selectedPage__2-VS7"}},72:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(25),r=n(26),o=n(28),c=n(27),u=n(0),i=n.n(u),s=n(292),l=n(11),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(u,t);var n=Object(c.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(s.a,{to:"/login"})}}]),u}(i.a.Component);return Object(l.b)(f)(t)}},86:function(e,t,n){e.exports={AboutMySite:"MainPage_AboutMySite__3PNfq"}},93:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return m}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return b});var a=n(7),r=n.n(a),o=n(13),c=n(42),u=n(4),i=n(10),s=n(32),l={posts:[{id:1,message:"Hi, how are you?",likesCount:13},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Improve my skills",likesCount:99},{id:4,message:"Thank you",likesCount:5}],profile:null,status:"",newPostText:""},f=function(e){return{type:"ADD-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n,a){var o,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(d(o)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter(function(e){return e.id!=t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.2737ae74.chunk.js.map