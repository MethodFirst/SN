(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[3],{381:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3bU64",mainPhoto:"ProfileInfo_mainPhoto__2EZsE",contact:"ProfileInfo_contact__5SXlg",input:"ProfileInfo_input__Kskxe",input2:"ProfileInfo_input2__1t4Kq"}},382:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__17Rta",posts:"MyPosts_posts__1jSqP",input:"MyPosts_input__1CN21"}},383:function(t,e,s){t.exports={item:"Post_item__Ywb1r"}},384:function(t,e,s){"use strict";s.r(e);var i=s(6),c=s(151),o=s(152),n=s(186),r=s(184),a=s(0),l=s.n(a),j=s(147),u=s(381),b=s.n(u),d=s(72),p=s(1),h=function(t){var e=Object(a.useState)(!1),s=Object(j.a)(e,2),i=s[0],c=s[1],o=Object(a.useState)(t.status),n=Object(j.a)(o,2),r=n[0],l=n[1];Object(a.useEffect)((function(){l(t.status)}),[t.status]);return Object(p.jsxs)("div",{children:[!i&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Status:"})," ",Object(p.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"-------"})]}),i&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(r)},value:r})})]})},O=s(172),f=s(56),x=s(183),m=s(59),v=s.n(m),P=Object(x.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,i=t.error;return Object(p.jsxs)("form",{onSubmit:e,children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:b.a.input2,children:"save"})}),i&&Object(p.jsx)("div",{className:v.a.formSummaryError,children:i}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",Object(f.c)("Full name","fullName",[],f.a)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",Object(f.c)("","lookingForAJob",[],f.a,{type:"checkbox"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),Object(f.c)("My professional skills","lookingForAJobDescription",[],f.b)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),Object(f.c)("AboutMe","aboutMe",[],f.b)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(p.jsx)("div",{className:b.a.contact,children:Object(p.jsxs)("b",{children:[t,": ",Object(f.c)(t,"contacts."+t,[],f.a)," "]})},t)}))]})]})})),g=function(t){var e=t.profile,s=t.isOwner,i=t.gotoEditMode;return Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("h1",{children:"Edit Profile"}),s&&Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:b.a.input,onClick:i,children:"Edit Profile Information"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(p.jsx)(k,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},k=function(t){var e=t.contactTitle,s=t.contactValue;return Object(p.jsxs)("div",{className:b.a.contact,children:[Object(p.jsx)("b",{children:e}),": ",s]})},_=function(t){var e=t.profile,s=t.status,i=t.updateStatus,c=t.isOwner,o=t.savePhoto,n=t.saveProfile,r=Object(a.useState)(!1),l=Object(j.a)(r,2),u=l[0],f=l[1];if(!e)return Object(p.jsx)(d.a,{});return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Profile"}),Object(p.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(p.jsx)("img",{src:e.photos.large||O.a,className:b.a.mainPhoto})," ",Object(p.jsx)("h1",{children:"Select Photo"}),c&&Object(p.jsx)("input",{className:b.a.input,type:"file",onChange:function(t){t.target.files&&t.target.files.length&&o(t.target.files[0])}}),u?Object(p.jsx)(P,{initialValues:e,profile:e,onSubmit:function(t){n(t).then((function(){f(!1)}))}}):Object(p.jsx)(g,{gotoEditMode:function(){f(!0)},profile:e,isOwner:c}),Object(p.jsx)(h,{status:s,updateStatus:i})]})]})},S=s(148),y=s(382),w=s.n(y),I=s(383),N=s.n(I),M=function(t){return Object(p.jsxs)("div",{className:N.a.item,children:[Object(p.jsx)("img",{src:"https://www.pinclipart.com/picdir/big/581-5811619_transparent-agent-clipart-programmer-cartoon-png.png"}),t.message,Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"like"})," ",t.likesCount]})]})},A=s(105),C=Object(x.a)({form:"profile-add-post"})((function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)("div",{children:Object(f.c)("PostText","newPostText",[A.b],f.a)}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{className:w.a.input,children:"Add post"})})]})})),E=function(t){console.log("RENDER YO");var e=t.posts.map((function(t){return Object(p.jsx)(M,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(p.jsxs)("div",{className:w.a.postsBlock,children:[Object(p.jsx)("h3",{children:"My posts"}),Object(p.jsx)(C,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(p.jsx)("div",{className:w.a.posts,children:e})]})},F=l.a.memo(E),U=s(19),B=Object(U.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:S.a.addPostActionCreator})(F),D=function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(_,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,saveProfile:t.saveProfile,updateStatus:t.updateStatus}),Object(p.jsx)(B,{})]})},J=s(23),T=s(22),R=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getUserProfile(t),this.props.getStatus(t)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(p.jsx)(D,Object(i.a)(Object(i.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(l.a.Component);e.default=Object(T.d)(Object(U.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),J.h)(R)}}]);
//# sourceMappingURL=3.02dcc1db.chunk.js.map