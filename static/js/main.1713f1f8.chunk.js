(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return i});var a=n(125),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5b81d964-99b4-407f-90c1-60763e8e54a8"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),u.getProfile(e)}},u={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},112:function(e,t,n){e.exports=n.p+"static/media/user.8b1dbb1f.png"},132:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2Q8mV",selectedPage:"users_selectedPage__1uDnL"}},133:function(e,t,n){e.exports=n.p+"static/media/preloader.6e7c9db7.svg"},14:function(e,t,n){e.exports={nav:"Navbar_nav__3LCZV",item:"Navbar_item__r53jG",activeLink:"Navbar_activeLink__xML_-"}},161:function(e,t,n){e.exports=n(289)},21:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p});var a=n(53),r=n(0),o=n.n(r),u=n(34),c=n.n(u),i=n(87),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,u=n&&a;return o.a.createElement("div",{className:c.a.FormControl+" "+(u?c.a.error:"")},o.a.createElement("div",null,r),u&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",u)}},249:function(e,t,n){},250:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(8),r=n(91),o=n(98),u={},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;arguments.length>1&&arguments[1];return e},i=n(7),s=n.n(i),l=n(13),f=n(42),p=n(4),m=n(10),d=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(p.a)(Object(p.a)({},e),a):e})},g={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},h=function(e){return{type:"FOLLOW",userId:e}},b=function(e){return{type:"UNFOLLOW",userId:e}},E=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},v=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},O=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},w=function(){var e=Object(l.a)(s.a.mark(function e(t,n,a,r){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(O(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(O(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(p.a)(Object(p.a)({},e),{},{users:d(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(p.a)(Object(p.a)({},e),{},{users:d(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(p.a)(Object(p.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},j=n(22),S={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},P=function(e,t,n,a){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},C=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},y=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a,r,o,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,u=a.email,t(P(r,u,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var n,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(C(a));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(p.a)(Object(p.a)({},e),t.payload);default:return e}},U=n(126),N=n(124),A=(n(71),{initialized:!1}),x=Object(a.c)({profilePage:r.b,dialogsPage:o.a,sidebar:c,usersPage:_,auth:T,form:N.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_USER_DATA":return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}}}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,I=Object(a.e)(x,L(Object(a.a)(U.a)));window.__store__=I;var F=I,R=n(0),G=n.n(R),z=n(129),D=n.n(z),M=(n(249),n(25)),H=n(26),B=n(28),W=n(27),V=(n(250),n(14)),X=n.n(V),Y=n(293),J=function(){return G.a.createElement("nav",{className:X.a.nav},G.a.createElement("div",{className:X.a.item},G.a.createElement(Y.a,{to:"/profile",activeClassName:X.a.activeLink},"Profile")),G.a.createElement("div",{className:"".concat(X.a.item," ").concat(X.a.active)},G.a.createElement(Y.a,{to:"/dialogs",activeClassName:X.a.activeLink},"Messages")),G.a.createElement("div",{className:"".concat(X.a.item," ").concat(X.a.active)},G.a.createElement(Y.a,{to:"/users",activeClassName:X.a.activeLink},"Users")),G.a.createElement("div",{className:X.a.item},G.a.createElement("a",null,"News")),G.a.createElement("div",{className:X.a.item},G.a.createElement("a",null,"Music")),G.a.createElement("div",{className:X.a.item},G.a.createElement("a",null,"Settings")))},Q=n(130),Z=n(294),q=n(292),K=n(11),$=n(53),ee=n(65),te=n(92),ne=n(69),ae=n.n(ne),re=n(131),oe=n.n(re),ue=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChanged,o=e.portionSize,u=void 0===o?10:o,c=Math.ceil(t/n),i=[],s=1;s<=c;s++)i.push(s);var l=Math.ceil(c/u),f=Object(R.useState)(1),p=Object(te.a)(f,2),m=p[0],d=p[1],g=(m-1)*u+1,h=m*u;return G.a.createElement("div",{className:ae.a.paginator},m>1&&G.a.createElement("button",{onClick:function(){d(m-1)}},"PREV"),i.filter(function(e){return e>=g&&e<=h}).map(function(e){return G.a.createElement("span",{className:oe()(Object(ee.a)({},ae.a.selectedPage,a===e),ae.a.pageNumber),key:e,onClick:function(t){r(e)}},e)}),l>m&&G.a.createElement("button",{onClick:function(){d(m+1)}},"NEXT"))},ce=n(132),ie=n.n(ce),se=n(112),le=n.n(se),fe=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,r=e.follow;return G.a.createElement("div",null,G.a.createElement("span",null,G.a.createElement("div",null,G.a.createElement(Y.a,{to:"/profile/"+t.id},G.a.createElement("img",{src:null!=t.photos.small?t.photos.small:le.a,className:ie.a.userPhoto}))),G.a.createElement("div",null,t.followed?G.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Unfollow"):G.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Follow"))),G.a.createElement("span",null,G.a.createElement("span",null,G.a.createElement("div",null,t.name),G.a.createElement("div",null,t.status)),G.a.createElement("span",null,G.a.createElement("div",null,"user.location.country"),G.a.createElement("div",null,"user.location.city"))))},pe=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,r=e.onPageChanged,o=e.users,u=Object($.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return G.a.createElement("div",null,G.a.createElement(ue,{currentPage:t,onPageChanged:r,totalItemsCount:n,pageSize:a}),G.a.createElement("div",null,o.map(function(e){return G.a.createElement(fe,{user:e,followingInProgress:u.followingInProgress,key:e.id,unfollow:u.unfollow,follow:u.follow})})))},me=n(38),de=n(134),ge=Object(de.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),he=function(e){return e.usersPage.pageSize},be=function(e){return e.usersPage.totalUsersCount},Ee=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},Oe=function(e){return e.usersPage.followingInProgress},we=function(e){Object(B.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return G.a.createElement(G.a.Fragment,null,this.props.isFetching?G.a.createElement(me.a,null):null,G.a.createElement(pe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(G.a.Component),_e=Object(a.d)(Object(K.b)(function(e){return{users:ge(e),pageSize:he(e),totalUsersCount:be(e),currentPage:Ee(e),isFetching:ve(e),followingInProgress:Oe(e)}},{follow:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:w(n,e,m.d.follow.bind(m.d),h);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:w(n,e,m.d.unfollow.bind(m.d),b);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:E,toggleFollowingProgress:O,getUsers:function(e,t){return function(){var n=Object(l.a)(s.a.mark(function n(a){var r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(v(!0)),a(E(e)),n.next=4,m.d.getUsers(e,t);case 4:r=n.sent,a(v(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(we),je=n(35),Se=n.n(je),Pe=function(e){return G.a.createElement("header",{className:Se.a.header},G.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),G.a.createElement("div",{className:Se.a.loginBlock},e.isAuth?G.a.createElement("div",null,e.login," - ",G.a.createElement("button",{onClick:e.logout,type:"button",className:Se.a.LoginButton},"Log out")," "):G.a.createElement(Y.a,{className:Se.a.login,to:"/login"},G.a.createElement("button",{type:"button",className:Se.a.LoginButton},"Login"))))},Ce=function(e){Object(B.a)(n,e);var t=Object(W.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return G.a.createElement(Pe,this.props)}}]),n}(G.a.Component),ye=Object(K.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.logout();case 2:0===e.sent.data.resultCode&&t(P(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Ce),ke=n(123),Te=n(21),Ue=n(62),Ne=n(290),Ae=n(34),xe=n.n(Ae),Le=Object(ke.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return G.a.createElement("form",{onSubmit:t},Object(Te.c)("Email","email",[Ue.b],Te.a),Object(Te.c)("Password","password",[Ue.b],Te.a,{type:"password"}),Object(Te.c)(null,"rememberMe",[],Te.a,{type:"checkbox"},"remember me"),a&&G.a.createElement("img",{src:a}),a&&Object(Te.c)("Symbols from image","captcha",[Ue.b],Te.a,{}),n&&G.a.createElement("div",{className:xe.a.formSummaryError},n),G.a.createElement("div",null,G.a.createElement("button",null,"Login")))}),Ie=Object(K.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,n,a){return function(){var r=Object(l.a)(s.a.mark(function r(o){var u,c;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.login(e,t,n,a);case 2:0===(u=r.sent).data.resultCode?o(y()):(10===u.data.resultCode&&o(k()),c=u.data.messages.length>0?u.data.messages[0]:"Some error",o(Object(j.a)("login",{_error:c})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?G.a.createElement(Ne.a,{to:"/profile"}):G.a.createElement("div",null,G.a.createElement("h1",{className:xe.a.testAccount},"Testing account: free@samuraijs.com "),G.a.createElement("h1",{className:xe.a.testAccount},"Password: free "),G.a.createElement("h1",null,"Login"),G.a.createElement(Le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}),Fe=function(e){return function(t){return G.a.createElement(G.a.Suspense,{fallback:G.a.createElement(me.a,null)},G.a.createElement(e,t))}},Re=G.a.lazy(function(){return n.e(4).then(n.bind(null,300))}),Ge=G.a.lazy(function(){return n.e(3).then(n.bind(null,299))}),ze=function(e){Object(B.a)(n,e);var t=Object(W.a)(n);function n(){return Object(M.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?G.a.createElement("div",{className:"app-wrapper"},G.a.createElement(ye,null),G.a.createElement(J,null),G.a.createElement("div",{className:"app-wrapper-content"},G.a.createElement(Q.a,{path:"/dialogs",render:Fe(Re)}),G.a.createElement(Q.a,{path:"/profile/:userId?",render:Fe(Ge)}),G.a.createElement(Q.a,{path:"/users",render:function(){return G.a.createElement(_e,null)}}),G.a.createElement(Q.a,{path:"/login",render:function(){return G.a.createElement(Ie,null)}}))):G.a.createElement(me.a,null)}}]),n}(R.Component),De=Object(a.d)(Z.a,Object(K.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(y());Promise.all([t]).then(function(){e({type:"SET_USER_DATA"})})}}}))(ze),Me=function(e){return G.a.createElement(q.a,null,G.a.createElement(K.a,{store:F},G.a.createElement(De,null)))};D.a.render(G.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,n){e.exports={FormControl:"FormsControls_FormControl__2eoG3",error:"FormsControls_error__1k1ug",formSummaryError:"FormsControls_formSummaryError__3Hnvw",testAccount:"FormsControls_testAccount__hmnZh"}},35:function(e,t,n){e.exports={header:"Header_header__2v6Qh",loginBlock:"Header_loginBlock__3uozL",login:"Header_login__1OWWo",LoginButton:"Header_LoginButton__uC28X"}},38:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(133),u=n.n(o);t.a=function(e){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("img",{src:u.a}))}},62:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__DvTSB",pageNumber:"Paginator_pageNumber__32gG-",selectedPage:"Paginator_selectedPage__2-VS7"}},71:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(25),r=n(26),o=n(28),u=n(27),c=n(0),i=n.n(c),s=n(290),l=n(11),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(c,t);var n=Object(u.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(s.a,{to:"/login"})}}]),c}(i.a.Component);return Object(l.b)(f)(t)}},91:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"d",function(){return m}),n.d(t,"c",function(){return d}),n.d(t,"g",function(){return g}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return b});var a=n(7),r=n.n(a),o=n(13),u=n(42),c=n(4),i=n(10),s=n(22),l={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n,a){var o,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(m(o)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter(function(e){return e.id!=t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}}},98:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(42),r=n(4),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}}},[[161,1,2]]]);
//# sourceMappingURL=main.1713f1f8.chunk.js.map