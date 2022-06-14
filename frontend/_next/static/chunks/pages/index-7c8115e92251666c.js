(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5022)}])},5022:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(4051),i=r.n(n),s=r(5893),a=r(7294),o=r(9669),c=r.n(o),l=r(1163),u=r(1633),d=r.n(u);function h(){return(0,s.jsxs)("div",{className:d().title,children:[(0,s.jsx)("div",{className:d().background,children:(0,s.jsx)("img",{src:"/static/images/poster.webp",alt:"",className:d().image})}),(0,s.jsx)("h1",{children:"Which Movie ?"}),(0,s.jsx)("p",{children:"Enjoy the top 5000 movies from 2008 to 2019"})]})}function m(){return(0,s.jsxs)("div",{className:d().info,children:[(0,s.jsx)("h3",{children:"Before you start..."}),(0,s.jsx)("p",{children:"You can search and view details of top 5000 movies released from 2008 to 2019 from our database"}),(0,s.jsx)("p",{children:"How to Search"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Do you remember some of title? search the movie with title for better results."}),(0,s.jsx)("li",{children:"Don't know title? tell us some information and we will search that movie for you. remember, more the details, better the results."})]})]})}var f=r(3321),p=r(5449);function x(e){var t=e.title,r=e.setTitle;return(0,s.jsx)("div",{className:d().withTitle,children:(0,s.jsx)(p.Z,{label:"Title",helperText:"Don't know exact title? Enter some words from it.",variant:"outlined",className:d().fullWidth,value:t,onChange:function(e){return r(e.target.value)}})})}var v=r(7058),g=r(3841),j=r(9840),b=r(913),w=r(9334),_=r(8629),k=r(9368),C=r(7918),y=r(7357),S={PaperProps:{style:{maxHeight:224,width:250}}};function D(e){var t=e.options,r=e.values,n=e.handleChange,i=e.label;return(0,s.jsxs)(b.Z,{className:d().fullWidth,children:[(0,s.jsx)(g.Z,{id:"label",children:i}),(0,s.jsx)(_.Z,{labelId:"label",multiple:!0,value:r,onChange:n,input:(0,s.jsx)(v.Z,{label:i}),renderValue:function(e){return(0,s.jsx)(y.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return(0,s.jsx)(C.Z,{label:e},e)}))})},MenuProps:S,children:t.map((function(e){return(0,s.jsxs)(j.Z,{value:e,children:[(0,s.jsx)(k.Z,{checked:r.indexOf(e)>-1}),(0,s.jsx)(w.Z,{primary:e})]},e)}))})]})}function N(e){var t=e.desc,r=e.setDesc,n=e.actors,i=e.director,a=e.setDirector,o=e.genres,c=e.handleChange,l=e.data,u=e.customActor,h=e.setCustomActor,m=e.customDirector,f=e.setCustomDirector;return(0,s.jsxs)("div",{className:d().withDesc,children:[(0,s.jsx)(D,{options:l.actors,values:n,handleChange:c,label:"Select Actors"}),(0,s.jsx)(p.Z,{value:u,onChange:function(e){return h(e.target.value)},label:"Enter Actor",variant:"outlined",helperText:"If required actors not in list, enter it here (enter comma separated full names with correct spelling)",className:d().fullWidth}),(0,s.jsxs)(b.Z,{className:d().fullWidth,children:[(0,s.jsx)(g.Z,{id:"label",children:"Select Director"}),(0,s.jsxs)(_.Z,{labelId:"label",value:i,label:"Select Director",onChange:function(e){return a(e.target.value)},children:[(0,s.jsx)(j.Z,{value:null,children:"None"}),l.directors.map((function(e){return(0,s.jsx)(j.Z,{value:e,children:e},e)}))]})]}),(0,s.jsx)(p.Z,{value:m,onChange:function(e){return f(e.target.value)},label:"Enter Director",variant:"outlined",helperText:"If required director not in list, enter it here (enter full name with correct spelling)",className:d().fullWidth}),(0,s.jsx)(D,{options:l.genres,values:o,handleChange:function(e){return c(e,"genres")},label:"Select Genres"}),(0,s.jsx)(p.Z,{multiline:!0,rows:3,value:t,onChange:function(e){return r(e.target.value)},label:"Description",variant:"outlined",helperText:"Enter some information about movie. Remember, more the details, better the results.",className:d().fullWidth})]})}var M=r(480),Z=r(5843);function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){var t=e.checked,r=e.setChecked;return(0,s.jsxs)("div",{className:d().switch,children:[(0,s.jsx)("p",{children:"Title"}),(0,s.jsx)(M.Z,{control:(0,s.jsx)(T,{sx:{m:1},checked:t,onChange:function(){return r((function(e){return!e}))}})}),(0,s.jsx)("p",{children:"Description"})]})}var T=(0,r(1496).ZP)((function(e){return(0,s.jsx)(Z.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){H(e,t,r[t])}))}return e}({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0},e))}))((function(e){var t=e.theme;return{width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"#FF9F00",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:t.palette.grey[100]},"&.Mui-disabled + .MuiSwitch-track":{opacity:.7}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"#2ECA45",opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}}));function A(e){var t=e.checked,r=e.setChecked,n=e.actors,i=e.genres,a=e.director,o=e.setDirector,c=e.handleChange,l=e.data,u=e.title,h=e.setTitle,m=e.desc,p=e.setDesc,v=e.fetchResults,g=e.customActor,j=e.setCustomActor,b=e.customDirector,w=e.setCustomDirector;return(0,s.jsxs)("div",{className:d().search,children:[(0,s.jsx)("h3",{children:"Search Movie"}),(0,s.jsxs)("div",{className:d().form,children:[(0,s.jsx)(E,{checked:t,setChecked:r}),t?(0,s.jsx)(N,{desc:m,setDesc:p,actors:n,director:a,setDirector:o,genres:i,handleChange:c,data:l,customActor:g,setCustomActor:j,customDirector:b,setCustomDirector:w}):(0,s.jsx)(x,{title:u,setTitle:h}),(0,s.jsx)(f.Z,{variant:"contained",className:d().widthManager,onClick:v,children:"Search"})]})]})}function P(e){var t=e.show,r=e.movies,n=(0,l.useRouter)();return(0,s.jsx)("div",{className:d().list,style:t?{}:{display:"none"},children:0!==r.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Are you looking for one of this movies?"}),(0,s.jsx)("div",{className:d().movieBox,children:r.map((function(e){return(0,s.jsx)("div",{className:d().movie,onClick:function(){return t=e.id,void n.push({pathname:"/movie",query:{id:t}});var t},children:e.title},e.id)}))})]}):(0,s.jsxs)("div",{className:d().loading,children:[(0,s.jsx)("h3",{children:"Searching Movies..."}),(0,s.jsx)("img",{src:"/static/images/no-poster.gif",alt:"poster"})]})})}function W(e,t,r,n,i,s,a){try{var o=e[s](a),c=o.value}catch(l){return void r(l)}o.done?t(c):Promise.resolve(c).then(n,i)}function q(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var s=e.apply(t,r);function a(e){W(s,n,i,a,o,"next",e)}function o(e){W(s,n,i,a,o,"throw",e)}a(void 0)}))}}function O(){var e=(0,a.useState)(!1),t=e[0],r=e[1],n=(0,a.useState)([]),o=n[0],u=n[1],d=(0,a.useState)([]),f=d[0],p=d[1],x=(0,a.useState)(null),v=x[0],g=x[1],j=(0,a.useState)(""),b=j[0],w=j[1],_=(0,a.useState)(""),k=_[0],C=_[1],y=(0,a.useState)({actors:[],genres:[],directors:[]}),S=y[0],D=y[1],N=(0,a.useState)(!1),M=N[0],Z=N[1],H=(0,a.useState)([]),E=H[0],T=H[1],W=(0,a.useState)(""),O=W[0],R=W[1],F=(0,a.useState)(""),B=F[0],L=F[1],V=(0,l.useRouter)(),I=function(){var e=q(i().mark((function e(){var r,n,s,a,c,l,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r="",n="",!t){e.next=5;break}r="description",s=o.map((function(e){return e.split(" ").join("").toLowerCase()})).join(" "),a=f.map((function(e){return e.split(" ").join("").toLowerCase()})).join(" "),c=null!==v?v.split(" ").join("").toLowerCase():"",l=O.split(",").map((function(e){return e.split(" ").join("").toLowerCase()})),u=B.split(",").map((function(e){return e.split(" ").join("").toLowerCase()})),n="".concat(s," ").concat(l," ").concat(c," ").concat(u," ").concat(a," ").concat(k),e.next=9;break;case 5:if(r="title",0!==b.length){e.next=8;break}return e.abrupt("return",alert("Please enter a title"));case 8:n=b.toLowerCase();case 9:V.push({pathname:"/",query:{type:r,data:n}},"",{scroll:!1});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){q(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/data");case 2:t=e.sent.data,D(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,a.useEffect)((function(){q(i().mark((function e(){var t,r,n,s,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V.query==={}){e.next=13;break}if(void 0===V.query.type||void 0===V.query.data){e.next=12;break}return T([]),Z(!0),t=V.query,r=t.type,n=t.data,e.next=7,c().get("/search?type=".concat(r,"&data=").concat(n));case 7:s=e.sent,"Success"===(a=s.data).message?T(a.data):(alert(a.reason),Z(!1)),e.next=13;break;case 12:Z(!1);case 13:case"end":return e.stop()}}),e)})))()}),[V.query]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{}),(0,s.jsx)(m,{}),(0,s.jsx)(A,{checked:t,setChecked:r,actors:o,genres:f,director:v,setDirector:g,handleChange:function(e,t){var r=e.target.value;"genres"===t?p("string"===typeof r?r.split(","):r):u("string"===typeof r?r.split(","):r)},title:b,setTitle:w,desc:k,setDesc:C,data:S,fetchResults:I,customActor:O,setCustomActor:R,customDirector:B,setCustomDirector:L}),(0,s.jsx)(P,{show:M,movies:E}),(0,s.jsx)("div",{className:"bottom-gap"})]})}},1633:function(e){e.exports={title:"Home_title__q0Qg4",background:"Home_background__EMQXR",image:"Home_image__GHKw_",info:"Home_info__lqWPY",search:"Home_search__TF4uY",form:"Home_form__eFLbn",switch:"Home_switch__F77Ed",searchBox:"Home_searchBox___ew_t",withTitle:"Home_withTitle__uN7qA",withDesc:"Home_withDesc__cJ09p",fullWidth:"Home_fullWidth__CtiYK",widthManager:"Home_widthManager__sWzph",list:"Home_list__fAvVW",movieBox:"Home_movieBox__VPAba",movie:"Home_movie__atfRf",loading:"Home_loading__10Rkg"}}},function(e){e.O(0,[298,917,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);