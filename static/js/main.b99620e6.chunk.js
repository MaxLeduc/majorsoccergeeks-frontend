(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{112:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t(0),c=t.n(a),i=t(14),o=t.n(i),s=(t(96),t(40)),l=t(39),u=t.p+"static/media/soccer-ball.d31e0b4f.png",d=t(16),b=t(17);function j(){var e=Object(d.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  > p {\n    text-align: center;\n  }\n"]);return j=function(){return e},e}function p(){var e=Object(d.a)(["\n  width: 100px;\n  animation: "," 2s linear infinite;\n  margin-bottom: 10px;\n"]);return p=function(){return e},e}function f(){var e=Object(d.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return f=function(){return e},e}var O=Object(b.b)(f()),h=b.a.img(p(),O),g=b.a.div(j()),x=function(){return Object(r.jsxs)(g,{children:[Object(r.jsx)(h,{src:u,alt:"soccer ball"}),Object(r.jsx)("p",{children:"Loading..."})]})},m=Object(a.createContext)({players:null}),y=function(e){var n=e.children,t=Object(s.b)({query:"\n  query {\n    players {\n      id,\n      firstName,\n      lastName,\n      baseSalary,\n      guaranteedCompensation,\n      club {\n        id,\n        name,\n      },\n      positions {\n        id,\n        name\n      }\n    }\n  }\n"}),c=Object(l.a)(t,1)[0],i=Object(a.useState)(null),o=Object(l.a)(i,2),u=o[0],d=o[1],b=Object(a.useState)([]),j=Object(l.a)(b,2),p=j[0],f=j[1],O=c.data,h=c.fetching,g=c.error;return Object(a.useEffect)((function(){O&&O.players&&d(O.players)}),[O]),h?Object(r.jsx)(x,{}):g?Object(r.jsxs)("p",{children:["Oh no... ",g.message]}):Object(r.jsx)(m.Provider,{value:{players:p.length?p:u,setFilteredPlayers:f},children:n})},v=t.p+"static/media/hero.b6231777.jpeg";function w(){var e=Object(d.a)(["\n  height: 40vh;\n  background-image: url(",");\n  background-position: 40% 70%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n"]);return w=function(){return e},e}function C(){var e=Object(d.a)(["\n  padding: 20px;\n"]);return C=function(){return e},e}function P(){var e=Object(d.a)(["\n"]);return P=function(){return e},e}var k=b.a.div(P()),S=b.a.div(C()),F=b.a.div(w(),v),q=function(){return Object(r.jsxs)(k,{children:[Object(r.jsx)(S,{children:Object(r.jsx)("h1",{children:"Major Soccer Geeks"})}),Object(r.jsx)(F,{})]})},E=t(18),N=t(161),B=t(150),I=t(160),L=t(149),M=t(163),R=t(164),A=t(145),D=t(165);function T(){var e=Object(d.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1;\n  margin: -1;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  top: 20;\n  width: 1;\n"]);return T=function(){return e},e}var z=b.a.span(T()),G=function(e){var n=e.onSelectAllClick,t=e.order,a=e.orderBy,c=e.numSelected,i=e.rowCount,o=e.onRequestSort;return Object(r.jsx)(A.a,{children:Object(r.jsxs)(L.a,{children:[Object(r.jsx)(B.a,{padding:"checkbox",children:Object(r.jsx)(M.a,{indeterminate:c>0&&c<i,checked:i>0&&c===i,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),[{id:"firstName",label:"Name"},{id:"baseSalary",label:"Base Salary"},{id:"guaranteedCompensation",label:"Guaranteed Compensation"},{id:"club",label:"Club"},{id:"positions",label:"Positions"}].map((function(e){return Object(r.jsx)(B.a,{align:"right",sortDirection:a===e.id&&t,children:Object(r.jsxs)(D.a,{active:a===e.id,direction:a===e.id?t:"asc",onClick:(n=e.id,function(e){o(e,n)}),children:[e.label,a===e.id?Object(r.jsx)(z,{children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})})},J=t(168),U=t(73),_=t.n(U),H=t(166),Y=t(167),K=t(162),Q=t(74),V=t.n(Q),W=t(158),X=t(152),Z=t(153),$=t(154);function ee(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]);return ee=function(){return e},e}function ne(){var e=Object(d.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);return ne=function(){return e},e}function te(){var e=Object(d.a)(["\n  font-size: 10px !important;\n  padding: 5px 10px !important;\n  min-width: unset !important;\n"]);return te=function(){return e},e}function re(){var e=Object(d.a)(["\n  margin-right: 30px;\n  display: flex;\n  align-items: flex-end;\n"]);return re=function(){return e},e}function ae(){var e=Object(d.a)(["\n  min-width: 150px !important;\n  margin-right: 10px !important;\n"]);return ae=function(){return e},e}function ce(){var e=Object(d.a)(["\n  margin-right: 10px;\n"]);return ce=function(){return e},e}function ie(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return ie=function(){return e},e}var oe=Object(b.a)(X.a)(ie()),se=b.a.div(ce()),le=Object(b.a)(Z.a)(ae()),ue=b.a.div(re()),de=Object(b.a)($.a)(te()),be=b.a.div(ne()),je=b.a.div(ee()),pe=function(e){var n=e.dispatch,t=e.query,c=e.clubs,i=e.positions,o=Object(a.useContext)(m).players,s=_()((function(e){return o?e?void n({type:"setSearch",payload:e}):n({type:"setSearch",payload:""}):null}),500);return Object(r.jsx)(oe,{children:Object(r.jsxs)(je,{children:[Object(r.jsxs)(ue,{children:[Object(r.jsxs)(le,{children:[Object(r.jsx)(H.a,{id:"club-dropdown-label",children:"Club"}),Object(r.jsx)(K.a,{labelId:"club-dropdown-label",id:"club-dropdown",value:t.clubFilter,onChange:function(e){return n({type:"setClubFilter",payload:e.target.value})},children:Array.from(c.keys()).sort().map((function(e){var n=c.get(e);return Object(r.jsx)(Y.a,{value:n.name,children:n.name},n.id)}))})]}),Object(r.jsx)(de,{variant:"contained",color:"primary",onClick:function(){return n({type:"setClubFilter",payload:""})},children:"Clear"})]}),Object(r.jsxs)(ue,{children:[Object(r.jsxs)(le,{children:[Object(r.jsx)(H.a,{id:"positions-dropdown-label",children:"Positions"}),Object(r.jsx)(K.a,{labelId:"positions-dropdown-label",id:"positions-dropdown",value:t.positionFilter,onChange:function(e){return n({type:"setPositionsFilter",payload:e.target.value})},children:Array.from(i.keys()).sort().map((function(e){var n=i.get(e);return Object(r.jsx)(Y.a,{value:n.name,children:n.name},n.id)}))})]}),Object(r.jsx)(de,{variant:"contained",color:"primary",onClick:function(){return n({type:"setPositionsFilter",payload:""})},children:"Clear"})]}),Object(r.jsx)(be,{children:Object(r.jsx)(se,{children:Object(r.jsx)(J.a,{id:"standard-basic",InputProps:{startAdornment:Object(r.jsx)(W.a,{position:"start",children:Object(r.jsx)(V.a,{})})},onChange:function(e){return s(e.target.value)}})})})]})})},fe=t(157),Oe=t(159);function he(){var e=Object(d.a)(["\n  min-width: 750px;\n"]);return he=function(){return e},e}function ge(){var e=Object(d.a)(["\n  width: 100%;\n"]);return ge=function(){return e},e}function xe(){var e=Object(d.a)(["\n  width: 100%;\n  max-width: 90%;\n  margin: 40px auto;\n"]);return xe=function(){return e},e}var me=b.a.div(xe()),ye=Object(b.a)(fe.a)(ge()),ve=Object(b.a)(Oe.a)(he()),we=function(e,n,t){var r=e[t],a=n[t];return"club"===t&&(r=e[t].name,a=n[t].name),"positions"===t&&(r=e[t].map((function(e){return e.name})).join(""),a=n[t].map((function(e){return e.name})).join("")),"baseSalary"!==t&&"guaranteedCompensation"!==t||(r=Number(e[t]),a=Number(n[t])),a<r?-1:a>r?1:0},Ce=function(e,n){var t="".concat(e).concat(n?"-"+n:"");if(t.includes('"')){var r=t.split('"');t=(r[0]+r[r.length-1]).replace(" ","")}return"\n    https://www.mlssoccer.com/players/".concat(t.toLowerCase().replace(" ","-"),"\n  ")},Pe=function(e){return"\n    https://www.mlssoccer.com/clubs/".concat(e.toLowerCase().replace(" ","-"),"\n  ")},ke=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),Se={players:[],order:"asc",orderBy:"id",selected:[],page:0,rowsPerPage:25,query:{search:"",clubFilter:"",positionFilter:""},clubs:new Map,positions:new Map},Fe=function(e,n){switch(n.type){case"setPlayers":var t=new Map,r=new Map;return n.payload.forEach((function(e){var n=e.club,a=e.positions;t.get(n.name)||t.set(n.name,n),a.forEach((function(e){r.get(e.name)||r.set(e.name,e)}))})),Object(E.a)(Object(E.a)({},e),{},{players:n.payload,clubs:t,positions:r});case"setOrder":return Object(E.a)(Object(E.a)({},e),{},{order:n.payload.order,orderBy:n.payload.orderBy});case"setSelected":return Object(E.a)(Object(E.a)({},e),{},{selected:n.payload});case"setPage":return Object(E.a)(Object(E.a)({},e),{},{page:n.payload});case"setRowsPerPage":return Object(E.a)(Object(E.a)({},e),{},{page:n.payload.page,rowsPerPage:n.payload.rowsPerPage});case"setSearch":return Object(E.a)(Object(E.a)({},e),{},{page:0,query:Object(E.a)(Object(E.a)({},e.query),{},{search:n.payload})});case"setClubFilter":return Object(E.a)(Object(E.a)({},e),{},{page:0,query:Object(E.a)(Object(E.a)({},e.query),{},{clubFilter:n.payload})});case"setPositionsFilter":return Object(E.a)(Object(E.a)({},e),{},{page:0,query:Object(E.a)(Object(E.a)({},e.query),{},{positionFilter:n.payload})});default:return e}},qe=function(e){var n=e.players,t=Object(a.useReducer)(Fe,Se),c=Object(l.a)(t,2),i=c[0],o=i.order,s=i.orderBy,u=i.selected,d=i.page,b=i.rowsPerPage,j=i.query,p=i.clubs,f=i.positions,O=c[1];Object(a.useEffect)((function(){O({type:"setPlayers",payload:n})}),[n]);var h=Object(a.useCallback)((function(e,n){O({type:"setOrder",payload:{order:s===n&&"asc"===o?"desc":"asc",orderBy:n}})}),[o,s]),g=Object(a.useCallback)((function(e){if(e.target.checked){var t=n.map((function(e){return e.id}));O({type:"setSelected",payload:t})}else O({type:"setSelected",payload:[]})}),[n]),x=Object(a.useCallback)((function(e){var n=u.indexOf(e),t=[];-1===n?t=t.concat(u,e):0===n?t=t.concat(u.slice(1)):n===u.length-1?t=t.concat(u.slice(0,-1)):n>0&&(t=t.concat(u.slice(0,n),u.slice(n+1))),O({type:"setSelected",payload:t})}),[u]),m=Object(a.useCallback)((function(e,n){O({type:"setPage",payload:n})}),[]),y=Object(a.useCallback)((function(e){O({type:"setRowsPerPage",payload:{page:0,rowsPerPage:parseInt(e.target.value,10)}})}),[]),v=function(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}(n,function(e,n){return"desc"===e?function(e,t){return we(e,t,n)}:function(e,t){return-we(e,t,n)}}(o,s)).filter((function(e){return function(e,n){var t=n.search,r=n.clubFilter,a=n.positionFilter,c=[];if(t&&c.push(function(e,n){var t=e.firstName+e.lastName+e.club.name+e.positions.map((function(e){return e.name})).join(","),r=n.split(" ");return r.filter((function(e){return t.toLowerCase().includes(e.toLowerCase())})).length===r.length}(e,t)),r&&c.push(e.club.name===r),a){var i=!1;e.positions.forEach((function(e){e.name!==a||(i=!0)})),c.push(i)}return!c.filter((function(e){return!e})).length}(e,j)}));return Object(r.jsx)(me,{children:Object(r.jsxs)(ye,{children:[Object(r.jsx)(pe,{selected:u,dispatch:O,query:j,clubs:p,positions:f}),Object(r.jsx)(I.a,{children:Object(r.jsxs)(ve,{stickyHeader:!0,"aria-labelledby":"tableTitle","aria-label":"enhanced table",children:[Object(r.jsx)(G,{numSelected:u.length,order:o,orderBy:s,onSelectAllClick:g,onRequestSort:h,rowCount:n.length}),Object(r.jsx)(N.a,{children:v.slice(d*b,d*b+b).map((function(e,n){var t=-1!==u.indexOf(e.id),a="enhanced-table-checkbox-".concat(n),c=e.firstName,i=e.lastName,o=e.baseSalary,s=e.guaranteedCompensation,l=e.club,d=e.positions;return Object(r.jsxs)(L.a,{hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,selected:t,children:[Object(r.jsx)(B.a,{padding:"checkbox",children:Object(r.jsx)(M.a,{checked:t,inputProps:{"aria-labelledby":a},onClick:function(){return x(e.id)}})}),Object(r.jsx)(B.a,{align:"right",id:a,scope:"row",children:Object(r.jsxs)("a",{rel:"noopener noreferrer",target:"_blank",href:Ce(c,i),children:[c," ",i]})}),Object(r.jsx)(B.a,{align:"right",children:"".concat(ke.format(o))}),Object(r.jsx)(B.a,{align:"right",children:"".concat(ke.format(s))}),Object(r.jsx)(B.a,{align:"right",children:Object(r.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:Pe(l.name),children:l.name})}),Object(r.jsx)(B.a,{align:"right",children:d.map((function(e){return e.name})).join(", ")})]},e.id)}))})]})}),Object(r.jsx)(R.a,{rowsPerPageOptions:[25,50,100],component:"div",count:v.length,rowsPerPage:b,page:d,onChangePage:m,onChangeRowsPerPage:y})]})})},Ee=function(){return Object(r.jsx)(m.Consumer,{children:function(e){var n=e.players;return n?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(q,{}),Object(r.jsx)(qe,{players:n})]}):null}})},Ne=t(46),Be=Object(Ne.a)({url:"".concat("https://herokumajorsoccergeeks.herokuapp.com","/graphql/")});function Ie(){var e=Object(d.a)(["\n  padding: 15px;\n  text-align: center;\n  background: #EEEEEE;\n  font-size: 13px;\n"]);return Ie=function(){return e},e}var Le=b.a.div(Ie()),Me=function(){var e=(new Date).getFullYear();return Object(r.jsx)(Le,{children:Object(r.jsxs)("p",{children:["\xa9 ",e," Maxime Leduc"]})})};var Re=function(){return Object(r.jsx)(s.a,{value:Be,children:Object(r.jsxs)(y,{children:[Object(r.jsx)(Ee,{}),Object(r.jsx)(Me,{})]})})},Ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,170)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Re,{})}),document.getElementById("root")),Ae()},96:function(e,n,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.b99620e6.chunk.js.map