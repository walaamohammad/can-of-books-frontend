(this.webpackJsonpsolution=this.webpackJsonpsolution||[]).push([[0],{34:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(17),a=n.n(r),s=n(10),o=n(11),j=n(13),l=n(12),u=(n(22),n(18)),d=n(20),h=(n(34),n(8)),b=n(1),O=function(){var e=Object(h.b)().logout;return Object(b.jsx)("button",{onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},p=function(){var e=Object(h.b)().loginWithRedirect;return Object(b.jsx)("button",{onClick:function(){return e()},children:"Log In"})},x=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(b.jsx)(u.a.Brand,{children:"My Favorite Books"}),this.props.auth0.isAuthenticated?Object(b.jsx)(d.b,{to:"/",children:"Home"}):void 0,this.props.auth0.isAuthenticated?Object(b.jsx)(d.b,{to:"/profile",children:"Profile"}):void 0,this.props.auth0.isAuthenticated?Object(b.jsx)(O,{}):Object(b.jsx)(p,{})]})}}]),n}(i.a.Component),f=Object(h.c)(x),v=function(){var e=Object(h.b)(),t=e.user,n=e.isAuthenticated;return e.isLoading?Object(b.jsx)("div",{children:"Loading ..."}):n&&Object(b.jsxs)("div",{style:{margin:"1vh 0vw",minHeight:"83vh",display:"flex",flexDirection:"column",gap:"5rem",alignItems:"center",paddingTop:"5rem"},children:[Object(b.jsx)("img",{src:t.picture,alt:t.name,style:{width:"200px",height:"200px",borderRadius:"50%"}}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[Object(b.jsx)("h2",{className:"text-center",children:t.name}),Object(b.jsx)("p",{className:"text-center",children:t.email})]}),Object(b.jsx)("div",{style:{width:"15%",minHeight:"4rem",display:"flex",justifyContent:"space-evenly"}})]})},m=n(21),g=(n(50),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(m.a,{style:{width:"18rem"},children:Object(b.jsxs)(m.a.Body,{children:[Object(b.jsx)(m.a.Title,{children:"Log In"}),Object(b.jsx)(m.a.Text,{children:"Click Below to Log In"}),Object(b.jsx)(p,{})]})})}}]),n}(i.a.Component)),y=n(29),k=(n(51),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(y.a,{children:[Object(b.jsx)("h1",{children:"My Favorite Books"}),Object(b.jsx)("p",{children:"This is a collection of my favorite books"})]})}}]),n}(i.a.Component)),w=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(b.jsx)(u.a.Brand,{children:"\xa9 Best Books"})})}}]),n}(i.a.Component),C=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.props.auth0.isLoading?Object(b.jsx)("div",{children:" Loading..."}):this.props.auth0.error?Object(b.jsxs)("div",{children:[" ",this.props.auth0.error.message]}):this.props.children}}]),n}(i.a.Component),B=Object(h.c)(C),L=n(4),I=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(d.a,{children:Object(b.jsxs)(B,{children:[Object(b.jsx)(f,{}),Object(b.jsx)("div",{style:{padding:"4vh 4vw",background:"white",minHeight:"89vh"},children:Object(b.jsxs)(L.c,{children:[Object(b.jsx)(L.a,{exact:!0,path:"/",children:this.props.auth0.isAuthenticated?Object(b.jsx)(k,{}):Object(b.jsx)(g,{})}),Object(b.jsx)(L.a,{path:"/profile",children:Object(b.jsx)(v,{})})]})}),Object(b.jsx)(w,{})]})})}}]),n}(c.Component),A=Object(h.c)(I);a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(h.a,{domain:"dev-krajucj3.us.auth0.com",clientId:"uY7GN9nOxz1llQdNSguNc74VKCcOxjnP",redirectUri:"http://localhost:3000",children:Object(b.jsx)(A,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.c813d4bb.chunk.js.map