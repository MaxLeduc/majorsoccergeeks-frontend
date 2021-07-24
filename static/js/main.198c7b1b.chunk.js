(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,n,t){},109:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(0),c=t.n(r),i=t(17),o=t.n(i),s=(t(102),t(41)),l=t(40),u=t.p+"static/media/soccer-ball.d31e0b4f.png",d=t(9),b=t(10);function j(){var e=Object(d.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  > p {\n    text-align: center;\n  }\n"]);return j=function(){return e},e}function p(){var e=Object(d.a)(["\n  width: 100px;\n  animation: "," 2s linear infinite;\n  margin-bottom: 10px;\n"]);return p=function(){return e},e}function h(){var e=Object(d.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return h=function(){return e},e}var g=Object(b.b)(h()),f=b.a.img(p(),g),O=b.a.div(j()),m=function(){return Object(a.jsxs)(O,{children:[Object(a.jsx)(f,{src:u,alt:"soccer ball"}),Object(a.jsx)("p",{children:"Loading..."})]})},x=Object(r.createContext)({players:null}),y=function(e){var n=e.children,t=Object(s.b)({query:"\n  query {\n    players {\n      id,\n      firstName,\n      lastName,\n      baseSalary,\n      guaranteedCompensation,\n      club {\n        id,\n        name,\n      },\n      positions {\n        id,\n        name\n      }\n    }\n  }\n"}),c=Object(l.a)(t,1)[0],i=Object(r.useState)(null),o=Object(l.a)(i,2),u=o[0],d=o[1],b=Object(r.useState)([]),j=Object(l.a)(b,2),p=j[0],h=j[1],g=c.data,f=c.fetching,O=c.error;return Object(r.useEffect)((function(){g&&g.players&&d(g.players)}),[g]),f?Object(a.jsx)(m,{}):O?Object(a.jsxs)("p",{children:["Oh no... ",O.message]}):Object(a.jsx)(x.Provider,{value:{players:p.length?p:u,setFilteredPlayers:h},children:n})},v=t.p+"static/media/hero.e9c7111b.jpeg";function w(){var e=Object(d.a)(["\n  max-width: 90%;\n  margin-left: 30px;\n  font-style: italic;\n  text-align: center;\n"]);return w=function(){return e},e}function A(){var e=Object(d.a)(["\n  width: 20px;\n  background-color: white;\n  border-radius: 10px;\n"]);return A=function(){return e},e}function P(){var e=Object(d.a)(["\n  height: 40vh;\n  background-image: url(",");\n  background-position: 40% 70%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n"]);return P=function(){return e},e}function k(){var e=Object(d.a)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n  padding: 0 10px;\n  font-size: 1.4rem;\n  position: relative;\n  display: inline-block;\n  color: white;\n\n  > span {\n    font-size: 1rem;\n  }\n"]);return k=function(){return e},e}function C(){var e=Object(d.a)(["\n  background-color: #3f51b5;\n"]);return C=function(){return e},e}var N=b.a.div(C()),S=b.a.h1(k()),B=b.a.div(P(),v),F=b.a.img(A()),q=b.a.div(w()),L=function(){return Object(a.jsxs)(N,{children:[Object(a.jsxs)(q,{children:[Object(a.jsx)(F,{src:u,alt:"soccer ball icon"}),Object(a.jsxs)(S,{children:["M",Object(a.jsx)("span",{children:"ajor"})," S",Object(a.jsx)("span",{children:"occer"})," G",Object(a.jsx)("span",{children:"eeks"})]})]}),Object(a.jsx)(B,{})]})},R=t(15),M=t(152),z=t(141),E=t(150),U=t(140),I=t(155),G=t(156),V=t(136),D=t(157);function H(){var e=Object(d.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1;\n  margin: -1;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  top: 20;\n  width: 1;\n"]);return H=function(){return e},e}var X=b.a.span(H()),Y=function(e){var n=e.onSelectAllClick,t=e.order,r=e.orderBy,c=e.numSelected,i=e.rowCount,o=e.onRequestSort;return Object(a.jsx)(V.a,{children:Object(a.jsxs)(U.a,{children:[Object(a.jsx)(z.a,{padding:"checkbox",children:Object(a.jsx)(I.a,{indeterminate:c>0&&c<i,checked:i>0&&c===i,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),[{id:"firstName",label:"Name"},{id:"baseSalary",label:"Base Salary"},{id:"guaranteedCompensation",label:"Guaranteed Compensation"},{id:"club",label:"Club"},{id:"positions",label:"Positions"}].map((function(e){return Object(a.jsx)(z.a,{align:"right",sortDirection:r===e.id&&t,children:Object(a.jsxs)(D.a,{active:r===e.id,direction:r===e.id?t:"asc",onClick:(n=e.id,function(e){o(e,n)}),children:[e.label,r===e.id?Object(a.jsx)(X,{children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})})},Z=t(158),K=t(159),Q=t(153),T=t(76),W=t.n(T),J=t(149),_=t(148),$=t(143),ee=t(144),ne=t(160);function te(){var e=Object(d.a)(["\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(d.a)([""]);return ae=function(){return e},e}function re(){var e=Object(d.a)(["\n  display: block;\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 1rem;\n  padding: 10px 15px;\n  background-color: rgba(245, 0, 87, 0.065);\n  border-radius: 5px;\n  margin-right: 10px;\n"]);return re=function(){return e},e}function ce(){var e=Object(d.a)(["\n  display: flex;\n\n  @media (max-width: 1125px) {\n    margin-bottom: 10px;\n  }\n"]);return ce=function(){return e},e}function ie(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  width: 100%;\n  margin: 20px 0;\n\n  @media (max-width: 1125px) {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  @media (max-width: 800px) {\n    align-items: flex-start;\n  }\n"]);return ie=function(){return e},e}function oe(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n\n  @media (max-width: 800px) {\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n  }\n"]);return oe=function(){return e},e}function se(){var e=Object(d.a)(["\n  display: flex;\n  align-items: flex-end;\n  height: 48px;\n  margin-right: 30px;\n\n  @media (max-width: 800px) {\n    margin-bottom: 25px;\n    width: 100%;\n    margin-right: 0;\n  }\n"]);return se=function(){return e},e}function le(){var e=Object(d.a)(["\n  font-size: 10px !important;\n  padding: 5px 10px !important;\n  min-width: unset !important;\n"]);return le=function(){return e},e}function ue(){var e=Object(d.a)(["\n  margin-right: 30px;\n  display: flex;\n  align-items: flex-end;\n\n  @media (max-width: 800px) {\n    margin-bottom: 10px;\n    width: 100%;\n    margin-right: 0;\n  }\n"]);return ue=function(){return e},e}function de(){var e=Object(d.a)(["\n  min-width: 150px !important;\n  margin-right: 10px !important;\n\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]);return de=function(){return e},e}var be=Object(b.a)($.a)(de()),je=b.a.div(ue()),pe=Object(b.a)(ee.a)(le()),he=b.a.div(se()),ge=b.a.div(oe()),fe=b.a.div(ie()),Oe=b.a.div(ce()),me=b.a.span(re()),xe=Object(b.a)(ee.a)(ae()),ye=Object(b.a)(ne.a)(te()),ve=function(e){var n=e.dispatch,t=e.query,c=e.clubs,i=e.positions,o=e.selected,s=Object(r.useContext)(x).players;return Object(a.jsx)(_.a,{children:Object(a.jsxs)(fe,{children:[Object(a.jsxs)(Oe,{children:[Object(a.jsxs)(me,{children:[Object(a.jsx)("b",{children:o.length})," ","player".concat(o.length>1?"s":""," selected")]}),Object(a.jsx)(xe,{variant:"contained",color:"secondary",onClick:function(){return n({type:"showAggregate",payload:!0})},children:"Aggregate"})]}),Object(a.jsxs)(ge,{children:[Object(a.jsx)(je,{children:Object(a.jsxs)(be,{children:[Object(a.jsx)(Z.a,{id:"club-dropdown-label",children:"Club"}),Object(a.jsx)(Q.a,{labelId:"club-dropdown-label",id:"club-dropdown",value:t.clubFilter,onChange:function(e){return n({type:"setClubFilter",payload:e.target.value})},children:Array.from(c.keys()).sort().map((function(e){var n=c.get(e);return Object(a.jsx)(K.a,{value:n.name,children:n.name},n.id)}))})]})}),Object(a.jsx)(je,{children:Object(a.jsxs)(be,{children:[Object(a.jsx)(Z.a,{id:"positions-dropdown-label",children:"Positions"}),Object(a.jsx)(Q.a,{labelId:"positions-dropdown-label",id:"positions-dropdown",value:t.positionFilter,onChange:function(e){return n({type:"setPositionsFilter",payload:e.target.value})},children:Array.from(i.keys()).sort().map((function(e){var n=i.get(e);return Object(a.jsx)(K.a,{value:n.name,children:n.name},n.id)}))})]})}),Object(a.jsx)(he,{children:Object(a.jsx)(ye,{id:"standard-basic",InputProps:{startAdornment:Object(a.jsx)(J.a,{position:"start",children:Object(a.jsx)(W.a,{})})},onChange:function(e){return t=e.target.value,s?t?void n({type:"setSearch",payload:t}):n({type:"setSearch",payload:""}):null;var t},value:t.search})}),Object(a.jsx)(pe,{variant:"contained",color:"primary",onClick:function(){return n({type:"clearAll"})},children:"Clear All"})]})]})})},we=t(154),Ae=t(147),Pe=t(151);function ke(){var e=Object(d.a)(["\n  color: white !important;\n"]);return ke=function(){return e},e}function Ce(){var e=Object(d.a)(["\n  background-color: #f50057;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  border-bottom: 0.5px solid rgba(200, 200, 200, 0.4);\n  padding: 15px 10px;\n  font-size: 16px;\n\n  > h2 {\n    margin-right: 1rem;\n  }\n"]);return Ne=function(){return e},e}function Se(){var e=Object(d.a)(["\n  text-transform: capitalize;\n"]);return Se=function(){return e},e}function Be(){var e=Object(d.a)(["\n  width: 90%;\n  background-color: white;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 20px;\n  max-height: 90vh;\n  overflow: scroll;\n"]);return Be=function(){return e},e}var Fe=b.a.div(Be()),qe=Object(b.a)(z.a)(Se()),Le=b.a.div(Ne()),Re=Object(b.a)(V.a)(Ce()),Me=Object(b.a)(z.a)(ke()),ze=function(e,n,t){var a=e[t],r=n[t];return"club"===t&&(a=e[t].name,r=n[t].name),"positions"===t&&(a=e[t].map((function(e){return e.name})).join(""),r=n[t].map((function(e){return e.name})).join("")),"baseSalary"!==t&&"guaranteedCompensation"!==t||(a=Number(e[t]),r=Number(n[t])),r<a?-1:r>a?1:0},Ee=function(e,n){var t="".concat(e).concat(n?"-"+n:"");if(t.includes('"')){var a=t.split('"');t=(a[0]+a[a.length-1]).replace(" ","")}return"\n    https://www.mlssoccer.com/players/".concat(t.toLowerCase().replace(" ","-"),"\n  ")},Ue=function(e){return"\n    https://www.mlssoccer.com/clubs/".concat(e.toLowerCase().replace(" ","-"),"\n  ")},Ie=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),Ge=function(e){var n=e.rowName,t=e.row;return Object(a.jsxs)(U.a,{tabIndex:-1,children:[Object(a.jsx)(qe,{children:Object(a.jsxs)("b",{children:[n," ","total"===n?"Salaries":"Salary"]})}),Object(a.jsxs)(z.a,{children:[Ie.format(Number(t.base))," ",t.basePlayerName&&"(".concat(t.basePlayerName," ").concat(t.basePlayerPositions&&"- ".concat(t.basePlayerPositions),")")]}),Object(a.jsxs)(z.a,{children:[Ie.format(Number(t.guaranteed))," ",t.guaranteedPlayerName&&"(".concat(t.guaranteedPlayerName," ").concat(t.guaranteedPlayerPositions&&"- ".concat(t.guaranteedPlayerPositions),")")]})]},1)},Ve=function(e){var n=e.showAggregate,t=e.selected,c=e.players,i=e.closeModal,o=Object(r.useMemo)((function(){return c.filter((function(e){return t.includes(e.id)}))}),[c,t]),s=Object(r.useMemo)((function(){return function(e){var n={total:{base:0,guaranteed:0},average:{base:0,guaranteed:0},highest:{base:0,guaranteed:0},lowest:{base:1/0,guaranteed:1/0}};return e.forEach((function(t){var a=t.baseSalary,r=t.guaranteedCompensation,c=t.firstName,i=t.lastName,o=t.positions,s=Number(a),l=Number(r),u="".concat(c," ").concat(i),d=o.map((function(e){return e.name})).join(", ");n.total.base=Number(n.total.base)+Number(s),n.total.guaranteed=Number(n.total.guaranteed)+Number(l),n.average={base:Math.round(Number(n.total.base)/e.length),guaranteed:Math.round(Number(n.total.guaranteed)/e.length)},n.highest.base<s&&(n.highest.base=s,n.highest.basePlayerName=u,n.highest.basePlayerPositions=d),n.highest.guaranteed<l&&(n.highest.guaranteed=l,n.highest.guaranteedPlayerName=u,n.highest.guaranteedPlayerPositions=d),n.lowest.base>s&&(n.lowest.base=s,n.lowest.basePlayerName=u,n.lowest.basePlayerPositions=d),n.lowest.guaranteed>l&&(n.lowest.guaranteed=l,n.lowest.guaranteedPlayerName=u,n.lowest.guaranteedPlayerPositions=d)})),n}(o)}),[o]);return Object(a.jsx)(we.a,{open:n,BackdropProps:{onClick:i},children:Object(a.jsxs)(Fe,{children:[Object(a.jsxs)(Le,{children:[Object(a.jsxs)("h2",{children:["Aggregate (",o.length," player",o.length>1&&"s",")"]}),Object(a.jsx)(ee.a,{variant:"contained",color:"primary",onClick:i,children:"Close"})]}),Object(a.jsx)(Ae.a,{children:Object(a.jsx)(E.a,{children:Object(a.jsxs)(Pe.a,{children:[Object(a.jsx)(Re,{children:Object(a.jsxs)(U.a,{children:[Object(a.jsx)(Me,{children:"Aggregate Category"}),Object(a.jsx)(Me,{children:"Base Salary"}),Object(a.jsx)(Me,{children:"Guaranteed Compensation"})]})}),Object(a.jsx)(M.a,{children:Object.keys(s).map((function(e){return Object(a.jsx)(Ge,{rowName:e,row:s[e]})}))})]})})})]})})};function De(){var e=Object(d.a)(["\n  min-width: 750px;\n"]);return De=function(){return e},e}function He(){var e=Object(d.a)(["\n  width: 100%;\n"]);return He=function(){return e},e}function Xe(){var e=Object(d.a)(["\n  width: 100%;\n  max-width: 90%;\n  margin: 40px auto;\n"]);return Xe=function(){return e},e}var Ye=b.a.div(Xe()),Ze=Object(b.a)(Ae.a)(He()),Ke=Object(b.a)(Pe.a)(De()),Qe={players:[],order:"asc",orderBy:"id",selected:[],page:0,rowsPerPage:25,query:{search:"",clubFilter:"",positionFilter:""},clubs:new Map,positions:new Map,showAggregate:!1},Te=function(e,n){switch(n.type){case"setPlayers":var t=new Map,a=new Map;return n.payload.forEach((function(e){var n=e.club,r=e.positions;t.get(n.name)||t.set(n.name,n),r.forEach((function(e){a.get(e.name)||a.set(e.name,e)}))})),Object(R.a)(Object(R.a)({},e),{},{players:n.payload,clubs:t,positions:a});case"setOrder":return Object(R.a)(Object(R.a)({},e),{},{order:n.payload.order,orderBy:n.payload.orderBy});case"setSelected":return Object(R.a)(Object(R.a)({},e),{},{selected:n.payload});case"setPage":return Object(R.a)(Object(R.a)({},e),{},{page:n.payload});case"setRowsPerPage":return Object(R.a)(Object(R.a)({},e),{},{page:n.payload.page,rowsPerPage:n.payload.rowsPerPage});case"setSearch":return Object(R.a)(Object(R.a)({},e),{},{page:0,query:Object(R.a)(Object(R.a)({},e.query),{},{search:n.payload})});case"setClubFilter":return Object(R.a)(Object(R.a)({},e),{},{page:0,query:Object(R.a)(Object(R.a)({},e.query),{},{clubFilter:n.payload})});case"setPositionsFilter":return Object(R.a)(Object(R.a)({},e),{},{page:0,query:Object(R.a)(Object(R.a)({},e.query),{},{positionFilter:n.payload})});case"showAggregate":return Object(R.a)(Object(R.a)({},e),{},{showAggregate:n.payload});case"clearAll":return Object(R.a)(Object(R.a)({},e),{},{query:{search:"",clubFilter:"",positionFilter:""},selected:[]});default:return e}},We=function(e){var n=e.players,t=Object(r.useReducer)(Te,Qe),c=Object(l.a)(t,2),i=c[0],o=i.order,s=i.orderBy,u=i.selected,d=i.page,b=i.rowsPerPage,j=i.query,p=i.clubs,h=i.positions,g=i.showAggregate,f=c[1],O=Object(r.useMemo)((function(){return function(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var a=n(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),t.map((function(e){return e[0]}))}(n,function(e,n){return"desc"===e?function(e,t){return ze(e,t,n)}:function(e,t){return-ze(e,t,n)}}(o,s)).filter((function(e){return function(e,n){var t=n.search,a=n.clubFilter,r=n.positionFilter,c=[];if(t&&c.push(function(e,n){var t=e.firstName+e.lastName+e.club.name+e.positions.map((function(e){return e.name})).join(","),a=n.split(" ");return a.filter((function(e){return t.toLowerCase().includes(e.toLowerCase())})).length===a.length}(e,t)),a&&c.push(e.club.name===a),r){var i=!1;e.positions.forEach((function(e){e.name!==r||(i=!0)})),c.push(i)}return!c.filter((function(e){return!e})).length}(e,j)}))}),[o,s,n,j]);Object(r.useEffect)((function(){f({type:"setPlayers",payload:n})}),[n]);var m=Object(r.useCallback)((function(e,n){f({type:"setOrder",payload:{order:s===n&&"asc"===o?"desc":"asc",orderBy:n}})}),[o,s]),x=Object(r.useCallback)((function(e){if(console.log(e.target.checked),e.target.checked){var n=O.map((function(e){return e.id}));f({type:"setSelected",payload:n})}else f({type:"setSelected",payload:[]})}),[O]),y=Object(r.useCallback)((function(e){var n=u.indexOf(e),t=[];-1===n?t=t.concat(u,e):0===n?t=t.concat(u.slice(1)):n===u.length-1?t=t.concat(u.slice(0,-1)):n>0&&(t=t.concat(u.slice(0,n),u.slice(n+1))),f({type:"setSelected",payload:t})}),[u]),v=Object(r.useCallback)((function(e,n){f({type:"setPage",payload:n})}),[]),w=Object(r.useCallback)((function(e){f({type:"setRowsPerPage",payload:{page:0,rowsPerPage:parseInt(e.target.value,10)}})}),[]);return Object(a.jsxs)(a.Fragment,{children:[g&&Object(a.jsx)(Ve,{showAggregate:g,selected:u,players:n,closeModal:function(){return f({type:"showAggregate",payload:!1})}}),Object(a.jsx)(Ye,{children:Object(a.jsxs)(Ze,{children:[Object(a.jsx)(ve,{selected:u,dispatch:f,query:j,clubs:p,positions:h}),Object(a.jsx)(E.a,{children:Object(a.jsxs)(Ke,{stickyHeader:!0,"aria-labelledby":"tableTitle","aria-label":"enhanced table",children:[Object(a.jsx)(Y,{numSelected:u.length,order:o,orderBy:s,onSelectAllClick:x,onRequestSort:m,rowCount:O.length}),Object(a.jsx)(M.a,{children:O.slice(d*b,d*b+b).map((function(e,n){var t=-1!==u.indexOf(e.id),r="enhanced-table-checkbox-".concat(n),c=e.firstName,i=e.lastName,o=e.baseSalary,s=e.guaranteedCompensation,l=e.club,d=e.positions;return Object(a.jsxs)(U.a,{hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,children:[Object(a.jsx)(z.a,{padding:"checkbox",children:Object(a.jsx)(I.a,{checked:t,inputProps:{"aria-labelledby":r},onClick:function(){return y(e.id)}})}),Object(a.jsx)(z.a,{align:"right",id:r,scope:"row",children:Object(a.jsxs)("a",{rel:"noopener noreferrer",target:"_blank",href:Ee(c,i),children:[c," ",i]})}),Object(a.jsx)(z.a,{align:"right",children:"".concat(Ie.format(o))}),Object(a.jsx)(z.a,{align:"right",children:"".concat(Ie.format(s))}),Object(a.jsx)(z.a,{align:"right",children:Object(a.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:Ue(l.name),children:l.name})}),Object(a.jsx)(z.a,{align:"right",children:d.map((function(e){return e.name})).join(", ")})]},e.id)}))})]})}),Object(a.jsx)(G.a,{rowsPerPageOptions:[25,50,100],component:"div",count:O.length,rowsPerPage:b,page:d,onChangePage:v,onChangeRowsPerPage:w})]})})]})},Je=function(){return Object(a.jsx)(x.Consumer,{children:function(e){var n=e.players;return n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{}),Object(a.jsx)(We,{players:n})]}):null}})},_e=t(49),$e=Object(_e.a)({url:"".concat("https://herokumajorsoccergeeks.herokuapp.com","/graphql/")});function en(){var e=Object(d.a)(["\n > img {\n   width: 20px;\n }\n"]);return en=function(){return e},e}function nn(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n\n  > p {\n    margin-right: 10px;\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  width: 90%;\n  margin: 0 auto;\n"]);return tn=function(){return e},e}function an(){var e=Object(d.a)(["\n  padding: 14px;\n  background: #3f51b5;\n  font-size: 13px;\n"]);return an=function(){return e},e}var rn=b.a.div(an()),cn=b.a.div(tn()),on=b.a.div(nn()),sn=b.a.a(en()),ln=function(){var e=(new Date).getFullYear();return Object(a.jsx)(rn,{children:Object(a.jsxs)(cn,{children:[Object(a.jsxs)("p",{children:["\xa9 ",e," Maxime Leduc"]}),Object(a.jsxs)(on,{children:[Object(a.jsx)("p",{children:"Find me on Twitter:"}),Object(a.jsx)(sn,{rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/ledukeness",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJWSURBVEiJtZbNS1RRGMZ/z5lr5DhhREJh7gzCvpcVLVoKJZHlWP9Bq4Ki2hYUtIkWES2KCgJ1BiIR2tSioF2gUEEfFBWFG6EiZ6x07n1ajBM2Tc5g+azuOe95f895ec+958o2i6mwqHQgWmhi0+DkdkLoMXQJ3tp+WMpmblfiGphciZNYtolyhd5Y0agPLH1bDyxQlCteMBwpD3/TCPYNFA5ZXpe0tWwpG+SLI5jNsUu7nG19M59BKl84LOtynX1MSO5XEibLPTA7gI6UokdRfqrnr7s/TZB1rl6VmClbt0TyrWwgXs2GVmEPR7nigAa/dVTnLVlX6AKW1zUQrcHa/SObeRYAZB5ULelPheRdlC/ejXKFXuULbQBJ0Oq6cEBwbTqbHoXZU1Rq8oVoWvss1s5ZFzDdoO6UIcoVPxnGq7taSwn+dVgCQGpGV43uA/E8eSsEGxqpICQeqzxHABZrhPc0ktyAklLq+xNYVjYDkHXpP8ERvPaBtkJlHADivvR1zND/MDA8njsOs5OOsy0HLY4KXv4Dfya2z/5hAMCdL60yh4zaF0qXuehs5nlNA+9d/gXrHDizQP54KUydqZ787XNdyqaHLY5h3i/A4Pjc5lakWheOQKmhwn6km0BzfbavlPoyh2tF/rgPlJ/IRG4+YelYI3DB+Zm+zKm/xpsGilvjkOyUWU8IG7A3UnlL5tc7rKOlbHp4vkVhuj89FuRRpHbsbfXghqeGk7FauurBoaoHyn/tTCVhk6VO4U5QB/BZ5mOCPySR77l32YsGqqttsBha9L+Knwx46Qtlet5uAAAAAElFTkSuQmCC",alt:"twitter icon"})})]})]})})};var un=function(){return Object(a.jsx)(s.a,{value:$e,children:Object(a.jsxs)(y,{children:[Object(a.jsx)(Je,{}),Object(a.jsx)(ln,{})]})})},dn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,162)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(un,{})}),document.getElementById("root")),dn()}},[[109,1,2]]]);
//# sourceMappingURL=main.198c7b1b.chunk.js.map