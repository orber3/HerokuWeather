(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{116:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),o=a.n(c),i=(a(116),a(18)),s=a(56),d=a(15),l=a(168),u=a(169),p=a(8),j=a(5),b=a(146),h=a(178),m=a(4),f=a.n(m),g=a(12),x="SEARCH_REQUEST",O="SEARCH_SUCCESS",y="SEARCH_FAIL",v="CITY_REQUEST",w="CITY_SUCCESS",C="CITY_FAIL",k="FORECAST_REQUEST",S="FORECAST_SUCCESS",F="FORECAST_FAIL",R="ADD_FAV_SUCCESS",N="ADD_FAV_FAIL",E="REMOVE_FAV_SUCCESS",I="REMOVE_FAV_FAIL",A="FAV_CITY_REQUEST",D="FAV_CITY_SUCCESS",T="FAV_CITY_FAIL",G="REMOVE_FAV_CITY",L="GEO_REQUEST",_="GEO_SUCCESS",W="GEO_FAIL",M="XlNPkDO1AKVROfQXWGWAsGz5ICmKcMdm",P=a(29),H=a.n(P),B=function(e,t){return function(){var a=Object(g.a)(f.a.mark((function a(r,n){var c,o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://dataservice.accuweather.com/currentconditions/v1/",a.prev=1,r({type:v}),M,a.next=6,H.a.get("".concat("https://dataservice.accuweather.com/currentconditions/v1/").concat(e,"?apikey=").concat("XlNPkDO1AKVROfQXWGWAsGz5ICmKcMdm"));case 6:c=a.sent,o=c.data,r({type:w,payload:o,keyword:t}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),r({type:C,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e,t){return a.apply(this,arguments)}}()},V=function(e,t){return function(){var a=Object(g.a)(f.a.mark((function a(r,n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{r({type:"current_city",payload:e,keyword:t})}catch(n){r({type:C,payload:n.response&&n.response.data.message?n.response.data.message:n.message})}case 1:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},z=a(2),U=Object(l.a)((function(e){var t;return{root:(t={maxWidth:"320px",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",fontSize:"1.3rem"},Object(j.a)(t,e.breakpoints.down(500),{marginLeft:e.spacing(0),marginRight:e.spacing(0),height:"100%",fontSize:"1rem"}),Object(j.a)(t,e.breakpoints.down(350),{marginLeft:e.spacing(0),marginRight:e.spacing(0),justifyContent:"center",height:"100%"}),t),title:{color:"white"},text:{marginTop:"20px",color:"white"}}})),K=function(e){var t=Object(d.f)(),a=e.data,r=U(),n=Object(p.b)(),c=a.data[0].Temperature.Metric.Value;c=c.toFixed(0);return Object(z.jsx)(u.a,{className:r.root,children:Object(z.jsxs)("div",{onClick:function(){return e=a.id,r=a.keyword,n(V(e,r)),void t.push("/city");var e,r},children:[Object(z.jsxs)(h.a,{className:r.title,children:[" ",a.keyword," "]}),Object(z.jsxs)(h.a,{className:r.text,children:[" ",c," ",Object(z.jsx)("span",{children:" \u2103 "})]}),Object(z.jsxs)(h.a,{className:r.text,children:[" id: ",a.id," "]}),Object(z.jsxs)(h.a,{className:r.text,children:[" ",a.data[0].WeatherText," "]})]})})},Q=a(172),X=a(180),Y=a(182),J=Object(l.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),q=function(e){var t=e.variant,a=e.children,r=J(),c=n.a.useState(!0),o=Object(i.a)(c,2),s=o[0],d=o[1],l=function(e,t){"clickaway"!==t&&d(!1)};return Object(z.jsx)("div",{className:r.root,children:Object(z.jsx)(Y.a,{open:s,autoHideDuration:6e3,onClose:l,children:Object(z.jsxs)(X.a,{elevation:6,variant:"filled",onClose:l,severity:t,children:[a," "]})})})};q.defaultProps={variant:"danger"};var Z=q,$=a(171),ee="#3f51b5",te="white",ae="#3f51b5",re="#424242",ne=(a(102),Object(l.a)({root:{height:"100%",width:"100%"}}),Object(l.a)((function(e){return{root:{flexGrow:1,width:"100%",display:"flex"},container:Object(j.a)({display:"flex",justifyContent:"center",gridGap:e.spacing(10)},e.breakpoints.down(650),{gridGap:e.spacing(5)}),darkPaper:Object(j.a)({backgroundColor:re,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,minHeight:"165px",whiteSpace:"nowrap",width:"180px"},e.breakpoints.down(470),{marginLeft:e.spacing(0),marginRight:e.spacing(0)}),paper:Object(j.a)({backgroundColor:"#3f51b5",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,minHeight:"165px",whiteSpace:"nowrap",width:"180px"},e.breakpoints.down(470),{marginLeft:e.spacing(0),marginRight:e.spacing(0)})}}))),ce=function(e){var t=e.FavoriteData,a=e.loading,n=e.themeState,c=ne(),o=Object(p.b)(),i=Object(p.c)((function(e){return e.GetFavCityReducer})),s=i.FavCityError,d=i.FavData;console.log(d);var l,j=function(){return t.forEach((function(e){var t,a;o((t=e.id,a=e.keyword,function(){var e=Object(g.a)(f.a.mark((function e(r,n){var c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,r({type:A}),e.next=6,H.a.get("".concat("https://dataservice.accuweather.com/currentconditions/v1/").concat(t,"?apikey=").concat("XlNPkDO1AKVROfQXWGWAsGz5ICmKcMdm"));case 6:c=e.sent,o=c.data,r({type:D,payload:{data:o,keyword:a,id:t}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),r({type:T,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}()))}))};return Object(r.useEffect)((function(){j()}),[]),l="primary"===n,Object(z.jsx)(z.Fragment,{children:a?Object(z.jsx)($.a,{}):s?Object(z.jsx)("div",{children:Object(z.jsx)(Z,{variant:"error",children:s})}):Object(z.jsx)("div",{className:c.root,children:Object(z.jsx)(u.a,{container:!0,className:c.container,spacing:2,children:d?d.map((function(e){return Object(z.jsx)(u.a,{item:!0,children:Object(z.jsx)(Q.a,{in:!0,style:{transitionDelay:"1500ms"},children:Object(z.jsx)(b.a,{id:e.data[0].HasPrecipitation,className:l?c.paper:c.darkPaper,children:Object(z.jsx)(K,{data:e})})})},e.id)})):Object(z.jsx)($.a,{})})})})},oe=Object(l.a)((function(e){return{grid:{display:"flex",padding:"30px",justifyContent:"center",alignItems:"center",flexGrow:1,minHeight:"100vh"}}})),ie=function(){var e=Object(p.c)((function(e){return e.FavouriteReducer})),t=e.favourites,a=e.loading,r=Object(p.c)((function(e){return e.ThemeReducer})).themeState,n=oe();return Object(z.jsx)(u.a,{container:!0,className:n.grid,spacing:3,children:Object(z.jsx)(ce,{FavoriteData:t,themeState:r,loading:a})})},se=a(173),de=a(183),le=a(147),ue=a(10),pe=a(181),je=a(25),be=a(93),he=a.n(be),me=a(45),fe=a(94),ge=Object(l.a)((function(e){return{inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%","&:invalid":{border:"red solid 2px"}},e.breakpoints.up("sm"),{width:"30vh","&:focus":{width:"35vh"}}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",lineHeight:"1.6",justifyContent:"center"},search:Object(j.a)({position:"relative",border:"2px groove rgba(28,110,164,0.15)",borderRadius:e.shape.borderRadius,backgroundColor:Object(je.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(je.a)(e.palette.common.white,.25)},width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),autocomplete:{backgroundColor:"#fff",padding:"2px 0",minWidth:"160px",position:"absolute",top:"100%",left:"0",border:"1px solid #b6c1ce",borderRadius:"2px",margin:"0",boxSizing:"border-box",maxHeight:"75px",overflowY:"auto",zIndex:"0",display:"flex",flexDirection:"column"},autoItem:{boxSizing:"border-box",margin:.6},button:{outline:"none",backgroundColor:"none",color:"inherit",cursor:"pointer",border:"none","&:hover":{background:"#78858B"}},input:{"&:invalid":{border:"red solid 2px"}}}})),xe=function(){var e=ge(),t=Object(r.useState)(),a=Object(i.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(!1),s=Object(i.a)(o,2),d=s[0],l=s[1],u=Object(p.b)(),j=Object(me.c)({mode:"all",rules:{required:!0}}),b=j.control,h=j.register,m=j.formState.errors,v=Object(p.c)((function(e){return e.SearchReducer})),w=v.SearchError,C=v.data,k=Object(r.useCallback)((function(){var e;n&&(u((e=n,function(){var t=Object(g.a)(f.a.mark((function t(a,r){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,a({type:x}),t.next=6,H.a.get("".concat("https://dataservice.accuweather.com/locations/v1/cities/autocomplete","?apikey=").concat("XlNPkDO1AKVROfQXWGWAsGz5ICmKcMdm","&q=").concat(e));case 6:n=t.sent,c=n.data,a({type:O,payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:y,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}())),l(!0))}),[n]);Object(r.useEffect)((function(){k()}),[n,k]);var S=function(e){c(e.target.value)};return Object(z.jsxs)("div",{className:e.search,children:[w?Object(z.jsx)(Z,{variant:"error",children:w}):"",Object(z.jsx)("div",{className:e.searchIcon,children:Object(z.jsx)(he.a,{})}),Object(z.jsx)("form",{children:Object(z.jsx)(me.a,{name:"search",control:b,render:function(t){var a=t.search;return Object(z.jsx)(pe.a,Object(ue.a)(Object(ue.a)(Object(ue.a)({},a),{},{placeholder:"Search for a city...",value:n,name:"search",autoComplete:"off",inputProps:{className:e.input},classes:{root:e.inputRoot,input:e.inputInput}},h("search",{pattern:{value:/^[a-zA-Z]+$/,message:"Only English letters is allowed"}})),{},{onChange:S}))}})}),C&&C.length&&C.length>0&&!0===d?Object(z.jsx)("ul",{className:e.autocomplete,children:C.map((function(t,a){return Object(z.jsx)("p",{className:e.autoItem,children:Object(z.jsx)("button",{className:e.button,onClick:function(){return e=t.LocalizedName,c(e),u(V(C[0].Key,e)),c(null),void l(!1);var e},type:"submit",children:t.LocalizedName},a)},t.key)}))}):"",Object(z.jsx)(fe.a,{errors:m,name:"search"})]})},Oe=function(e){var t=e.cityName,a=e.current,r=e.color;return Object(z.jsxs)(h.a,{children:[Object(z.jsx)(le.a,{style:{color:r,fontWeight:"700"},children:t}),Object(z.jsxs)(le.a,{style:{color:r,fontWeight:"700"},children:[a," ",Object(z.jsx)("span",{children:" \u2103 "})]})]})},ye=function(e,t,a){return function(){var t=Object(g.a)(f.a.mark((function t(r,n){var c,o,i,s,d;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c="https://dataservice.accuweather.com/forecasts/v1/daily/5day/",t.prev=1,r({type:k}),o=M,!0!==a){t.next=11;break}return t.next=7,H.a.get("".concat(c).concat(e,"?apikey=").concat(o,"&metric=true"));case 7:i=t.sent,s=i.data,t.next=16;break;case 11:if(!1!==a){t.next=16;break}return t.next=14,H.a.get("".concat(c).concat(e,"?apikey=").concat(o));case 14:d=t.sent,s=d.data;case 16:r({type:S,payload:s}),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),r({type:F,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 22:case"end":return t.stop()}}),t,null,[[1,19]])})));return function(e,a){return t.apply(this,arguments)}}()},ve=a(170),we=Object(l.a)((function(e){var t;return{root:(t={maxWidth:"270px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",height:"100%",fontSize:"1rem",minWidth:"140px",textAlign:"center"},Object(j.a)(t,e.breakpoints.down(500),{marginLeft:e.spacing(0),marginRight:e.spacing(0),height:"100%"}),Object(j.a)(t,e.breakpoints.down(350),{marginLeft:e.spacing(0),marginRight:e.spacing(0),alignItems:"center",height:"100%"}),t),title:{color:"white"},text:{marginTop:"24px",color:"white"}}})),Ce=function(e){var t,a=we(),r=new Date(e.data.Date).getDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r]||"",c=(e.data.Temperature.Minimum.Value+e.data.Temperature.Maximum.Value)/2;return c=c.toFixed(0),t="C"===e.data.Temperature.Minimum.Unit?Object(z.jsx)("span",{children:" \u2103 "}):Object(z.jsx)("span",{children:"\u2109"}),Object(z.jsx)(ve.a,{in:!0,children:Object(z.jsxs)(u.a,{className:a.root,children:[Object(z.jsx)(h.a,{className:a.title,children:n}),Object(z.jsxs)(h.a,{className:a.text,children:[Object(z.jsx)(h.a,{className:a.text,children:e.data.Day.IconPhrase}),c," ",t]})]})})},ke=Object(l.a)((function(e){return{root:{flexGrow:1,width:"100%",display:"flex",padding:"12px"},container:Object(j.a)({display:"flex",justifyContent:"center",gridGap:e.spacing(8)},e.breakpoints.down(650),{gridGap:e.spacing(5)}),gridItem:{appbarpalette:{"&.MuiPaper-elevation1":{backgroundColor:ee},"&.MuiPaper-root":{backgroundColor:re}}},darkPaper:Object(j.a)({backgroundColor:re,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,minHeight:"100px",whiteSpace:"nowrap",marginBottom:e.spacing(2),overflow:"hidden",minWidth:"140px",width:"100%"},e.breakpoints.down(470),{marginLeft:e.spacing(0),marginRight:e.spacing(0)}),paper:Object(j.a)({backgroundColor:"#3f51b5",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,minHeight:"100px",whiteSpace:"nowrap",marginBottom:e.spacing(2),overflow:"hidden",minWidth:"140px",width:"100%"},e.breakpoints.down(470),{marginLeft:e.spacing(0),marginRight:e.spacing(0)})}})),Se=function(e){var t,a=e.data,r=e.loading,n=e.themeState,c=ke();return t="primary"===n,Object(z.jsx)(z.Fragment,{children:r?Object(z.jsx)($.a,{}):Object(z.jsx)("div",{className:c.root,children:Object(z.jsx)(u.a,{container:!0,className:c.container,spacing:2,children:a.map((function(e){return Object(z.jsx)(u.a,{className:c.gridItem,item:!0,children:Object(z.jsx)(b.a,{className:t?c.paper:c.darkPaper,id:e.Day.HasPrecipitation.toString(),color:n,children:Object(z.jsx)(Ce,{data:e})},e.date)},e.date)}))})})})},Fe=a(179),Re=a(96),Ne=a.n(Re),Ee=a(95),Ie=a.n(Ee),Ae=Object(l.a)((function(e){return{FavIcon:{fontSize:"1rem",color:"red"},text:Object(j.a)({paddingRight:"10px"},e.breakpoints.down(460),{display:"none"})}})),De=function(e){var t=Ae(),a=Object(p.b)();return Object(z.jsx)(u.a,{children:e.isThisCityIsFav?Object(z.jsxs)(Fe.a,{className:t.FavIcon,onClick:function(){var t,r;a((t=e.id,r=e.city,function(){var e=Object(g.a)(f.a.mark((function e(a,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a({type:E,payload:t,keyword:r}),localStorage.setItem("favourites",JSON.stringify(n().FavouriteReducer.favourites))}catch(c){a({type:I,payload:c.response&&c.response.data.message?c.response.data.message:c.message})}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),a(function(e,t){return function(){var t=Object(g.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:G,payload:e})}catch(r){a({type:I,payload:r.response&&r.response.data.message?r.response.data.message:r.message})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e.id,e.city)),console.log(e.id)},style:{color:e.color,fontWeight:"700"},children:[Object(z.jsxs)("div",{className:t.text,children:[" ","Remove ",e.city," from Favorites"]}),Object(z.jsx)(Ie.a,{})]}):Object(z.jsxs)(Fe.a,{className:t.FavIcon,onClick:function(t){var r,n;a((r=e.id,n=e.city,function(){var e=Object(g.a)(f.a.mark((function e(a,c){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a({type:R,payload:{id:r,keyword:n}}),localStorage.setItem("favourites",JSON.stringify(c().FavouriteReducer.favourites))}catch(t){a({type:N,payload:t.response&&t.response.data.message?t.response.data.message:t.message})}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))},"aria-label":"FavoriteIcon",children:[Object(z.jsxs)("div",{className:t.text,children:["Add ",e.city," to Favorites"]}),Object(z.jsx)(Ne.a,{})]})})},Te=function(){return Object(z.jsxs)("div",{id:"background-wrap",children:[Object(z.jsx)("div",{className:"x1",children:Object(z.jsx)("div",{className:"cloud"})}),Object(z.jsx)("div",{className:"x2",children:Object(z.jsx)("div",{className:"cloud"})}),Object(z.jsx)("div",{className:"x3",children:Object(z.jsx)("div",{className:"cloud"})})]})},Ge=Object(l.a)((function(e){return{grid:{display:"flex",flexDirection:"column",height:"100%",minHeight:"100vh",flexGrow:1,justifyContent:"center",alignItems:"center"},box:Object(j.a)({width:"fit-content",justifyContent:"center",borderWidth:"3px",borderStyle:"groove",borderColor:"rgba(2,7,10,0.79)",overflow:"hidden"},e.breakpoints.down(700),{borderStyle:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),boxpalette:{"&.MuiBox-root-colorPrimary":{borderColor:"black"},"&.MuiBox-root-colorSecondary":{backgroundColor:"white"}},favBox:Object(j.a)({display:"flex",justifyContent:"flex-end",marginBottom:"2rem"},e.breakpoints.down(700),{marginLeft:0,marginBottom:"0"}),upper:Object(j.a)({display:"flex",padding:"3rem",justifyContent:"space-between"},e.breakpoints.down(700),{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),currentCity:Object(j.a)({marginLeft:"4rem"},e.breakpoints.down(700),{marginLeft:"0"}),clouds:Object(j.a)({},e.breakpoints.down(700),{display:"none"}),switch:Object(j.a)({marginLeft:"30px",width:"fit-content",padding:0},e.breakpoints.down(700),{marginLeft:"0"}),headline:{paddingBottom:"10px",textAlign:"center"}}})),Le=function(){var e,t=Object(r.useState)(),a=Object(i.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(),s=Object(i.a)(o,2),d=s[0],l=s[1],j=Object(p.c)((function(e){return e.ThemeReducer})).themeState,b=Ge(),m=Object(p.b)(),x=Object(p.c)((function(e){return e.GetCityReducer})),O=x.getCityError,y=x.data,v=(x.keyword,Object(p.c)((function(e){return e.CurrentCityReducer}))),w=(v.loading,v.id),C=v.city,k=Object(p.c)((function(e){return e.ForeCastReducer})),S=k.ForecastError,F=k.foreData,R=k.loadingforeCast,N=Object(p.c)((function(e){return e.FavouriteReducer})).favourites,E=Object(p.c)((function(e){return e.GeoReducer})),I=E.geoData,A=(E.loadingGeo,Object(r.useState)(!0)),D=Object(i.a)(A,2),T=D[0],G=D[1],M=!1;return N.some((function(e){return e.id===w}))&&(M=!0),Object(r.useEffect)((function(){I&&m(V(I.Key,I.LocalizedName))}),[I]),Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){c(e.coords.latitude),l(e.coords.longitude),d&&n&&m(function(e,t){return function(){var a=Object(g.a)(f.a.mark((function a(r,n){var c,o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=1,r({type:L}),a.next=6,H.a.get("".concat("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search","?apikey=").concat("XlNPkDO1AKVROfQXWGWAsGz5ICmKcMdm","&q=").concat(e,",").concat(t));case 6:c=a.sent,o=c.data,r({type:_,payload:o}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),r({type:W,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(n,d))}))}),[n,d]),Object(r.useEffect)((function(){m(B(w,C)),m(ye(w,0,T))}),[w,v]),Object(r.useEffect)((function(){m(ye(w,0,T))}),[T]),e="primary"===j?ae:"black",Object(z.jsxs)("div",{children:[O?Object(z.jsx)(Z,{variant:"error",children:O}):S?Object(z.jsx)(Z,{variant:"error",children:S}):"",Object(z.jsxs)(u.a,{container:!0,className:b.grid,spacing:3,children:[Object(z.jsx)(u.a,{className:b.clouds,children:Object(z.jsx)(Te,{})}),Object(z.jsx)(u.a,{item:!0,md:6,children:Object(z.jsx)(xe,{})}),Object(z.jsxs)(h.a,{className:b.box,color:j,classes:{colorPrimary:b.box.boxpalette,colorSecondary:b.box.boxpalette},children:[Object(z.jsxs)(u.a,{container:!0,className:b.upper,children:[Object(z.jsx)(u.a,{className:b.currentCity,style:{},item:!0,md:4,children:y&&y.length>0?Object(z.jsx)(Oe,{cityName:C,current:y[0].Temperature.Metric.Value,color:e}):Object(z.jsx)($.a,{})}),Object(z.jsx)(u.a,{item:!0,md:6,className:b.favBox,children:Object(z.jsx)(De,{id:w,city:C,isThisCityIsFav:M,color:e})})]}),Object(z.jsx)(se.a,{className:b.switch,style:{},control:Object(z.jsx)(de.a,{checked:T,onChange:function(){return G(!T)},name:"metric",color:"primary"==j?"primary":"black"}),label:T?Object(z.jsx)("span",{children:" \u2103 "}):Object(z.jsx)("span",{children:"\u2109"})}),Object(z.jsx)(u.a,{item:!0,md:12,style:{marginTop:"3rem",gridGap:"6",justifyContent:"center",display:"flex"},children:!R&&F?Object(z.jsxs)("div",{children:[Object(z.jsxs)(h.a,{className:b.headline,children:[" ",Object(z.jsxs)(le.a,{style:{color:e,fontWeight:"700"},children:[F.Headline.Text," "]})]}),Object(z.jsx)(Se,{data:F.DailyForecasts,loading:R,themeState:j})]}):S?Object(z.jsx)(Z,{variant:"error",children:S}):Object(z.jsx)($.a,{})})]})]})]})},_e=a(174),We=a(175),Me=a(97),Pe=a.n(Me),He=Object(l.a)((function(e){return{root:{flexGrow:1,display:"flex",appbarpalette:{"&.MuiAppBar-colorPrimary":{backgroundColor:ee},"&.MuiAppBar-colorSecondary":{backgroundColor:re}}},title:Object(j.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),right:{display:"flex",justifyContent:"flex-end",flexGrow:1,lineHeight:1.6,alignItems:"center"},fav:{display:"block",color:"white",paddingLeft:"calc(1em + ".concat(e.spacing(2),"px)")},homeIcon:{height:"100%",pointerEvents:"none",display:"flex",alignItems:"center",color:te,fontSize:"35px",justifyContent:"center",paddingLeft:"calc(1em + ".concat(e.spacing(2),"px)"),"&.homeIcon-heightPrimary":{height:"#100%",fontSize:"large",color:"primary"},"&.homeIcon-heightSecondary":{height:"#100%"}},search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(je.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(je.a)(e.palette.common.white,.25)},width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(11),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function Be(){var e=He(),t=Object(p.c)((function(e){return e.ThemeReducer})).themeState;return Object(z.jsx)("div",{className:e.root,children:Object(z.jsx)(_e.a,{color:t,classes:{colorPrimary:e.appbarpalette,colorSecondary:e.appbarpalette},position:"static",children:Object(z.jsxs)(We.a,{children:[Object(z.jsx)(le.a,{className:e.title,variant:"h6",noWrap:!0,children:"Orber Weather Home Assignment"}),Object(z.jsxs)("div",{className:e.right,children:[Object(z.jsx)(s.b,{style:{textDecoration:"none"},to:"/favorite",children:Object(z.jsx)(le.a,{className:e.fav,variant:"h6",noWrap:!0,children:"Favourites"})}),Object(z.jsx)(s.b,{style:{textDecoration:"none"},to:"/home",children:Object(z.jsx)(Fe.a,{children:Object(z.jsx)(Pe.a,{style:{color:te}})})})]})]})})})}var Ve=Object(l.a)((function(e){return{grid:{display:"flex",flexDirection:"column",height:"100%",minHeight:"100vh",flexGrow:1,justifyContent:"center",alignItems:"center"},box:Object(j.a)({width:"fit-content",justifyContent:"center",borderWidth:"3px",borderStyle:"groove",borderColor:"rgba(2,7,10,0.79)",overflow:"hidden"},e.breakpoints.down(700),{borderStyle:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),boxpalette:{"&.MuiBox-root-colorPrimary":{borderColor:"black"},"&.MuiBox-root-colorSecondary":{backgroundColor:"white"}},favBox:Object(j.a)({display:"flex",justifyContent:"flex-end",marginBottom:"2rem"},e.breakpoints.down(700),{marginLeft:0,marginBottom:"0"}),upper:Object(j.a)({display:"flex",padding:"3rem",justifyContent:"space-between"},e.breakpoints.down(700),{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),currentCity:Object(j.a)({marginLeft:"4rem"},e.breakpoints.down(700),{marginLeft:"0"}),clouds:Object(j.a)({},e.breakpoints.down(700),{display:"none"}),switch:Object(j.a)({marginLeft:"30px",width:"fit-content",padding:0},e.breakpoints.down(700),{marginLeft:"0"}),headline:{paddingBottom:"10px",textAlign:"center"}}})),ze=function(){var e,t=Object(r.useState)(),a=Object(i.a)(t,2),n=(a[0],a[1],Object(r.useState)()),c=Object(i.a)(n,2),o=(c[0],c[1],Object(p.c)((function(e){return e.ThemeReducer})).themeState),s=Ve(),d=Object(p.b)(),l=Object(p.c)((function(e){return e.GetCityReducer})),j=l.getCityError,b=l.data,m=(l.keyword,Object(p.c)((function(e){return e.CurrentCityReducer}))),f=(m.loading,m.id),g=m.city,x=Object(p.c)((function(e){return e.ForeCastReducer})),O=x.ForecastError,y=x.foreData,v=x.loadingforeCast,w=Object(p.c)((function(e){return e.FavouriteReducer})).favourites,C=Object(r.useState)(!0),k=Object(i.a)(C,2),S=k[0],F=k[1],R=!1;return w.some((function(e){return e.id===f}))&&(R=!0),Object(r.useEffect)((function(){d(B(f,g)),d(ye(f,0,S))}),[f,m]),Object(r.useEffect)((function(){d(ye(f,0,S))}),[S]),e="primary"===o?ae:"black",Object(z.jsxs)("div",{children:[j?Object(z.jsx)(Z,{variant:"error",children:j}):O?Object(z.jsx)(Z,{variant:"error",children:O}):"",Object(z.jsxs)(u.a,{container:!0,className:s.grid,spacing:3,children:[Object(z.jsx)(u.a,{className:s.clouds,children:Object(z.jsx)(Te,{})}),Object(z.jsx)(u.a,{item:!0,md:6,children:Object(z.jsx)(xe,{})}),Object(z.jsxs)(h.a,{className:s.box,color:o,classes:{colorPrimary:s.box.boxpalette,colorSecondary:s.box.boxpalette},children:[Object(z.jsxs)(u.a,{container:!0,className:s.upper,children:[Object(z.jsx)(u.a,{className:s.currentCity,style:{},item:!0,md:4,children:b&&b.length>0?Object(z.jsx)(Oe,{cityName:g,current:b[0].Temperature.Metric.Value,color:e}):Object(z.jsx)($.a,{})}),Object(z.jsx)(u.a,{item:!0,md:6,className:s.favBox,children:Object(z.jsx)(De,{id:f,city:g,isThisCityIsFav:R,color:e})})]}),Object(z.jsx)(se.a,{className:s.switch,style:{},control:Object(z.jsx)(de.a,{checked:S,onChange:function(){return F(!S)},name:"metric",color:"primary"==o?"primary":"black"}),label:S?Object(z.jsx)("span",{children:" \u2103 "}):Object(z.jsx)("span",{children:"\u2109"})}),Object(z.jsx)(u.a,{item:!0,md:12,style:{marginTop:"3rem",gridGap:"6",justifyContent:"center",display:"flex"},children:!v&&y?Object(z.jsxs)("div",{children:[Object(z.jsxs)(h.a,{className:s.headline,children:[" ",Object(z.jsxs)(le.a,{style:{color:e,fontWeight:"700"},children:[y.Headline.Text," "]})]}),Object(z.jsx)(Se,{data:y.DailyForecasts,loading:v,themeState:o})]}):O?Object(z.jsx)(Z,{variant:"error",children:O}):Object(z.jsx)($.a,{})})]})]})]})},Ue=a(177),Ke=a(101),Qe=a(176),Xe=a(148),Ye=a(98),Je=a.n(Ye),qe=Object(Xe.a)((function(e){return{rootApp:{backgroundColor:" rgb(186, 213, 221)",background:"linear-gradient(107deg,rgba(186, 213, 221, 1) 6%,rgba(236, 243, 245, 0.8211659663865546) 98%)"},darkRoot:{zIndex:"0",backgroundColor:"rgb(106, 112, 113)",background:"radial-gradient(circle,rgba(106, 112, 113, 1) 1%,rgba(160, 173, 177, 1) 62%,rgba(101, 105, 106, 0.8211659663865546) 98%)"}}})),Ze={palette:{primary:{main:"#3f51b5",backgroundColor:"#FFFFFF"},secondary:{main:"#424242",backgroundColor:"#dd2c00"}}};var $e=function(){var e,t=Object(p.b)(),a=Object(p.c)((function(e){return e.ThemeReducer})).themeState,n=Object(r.useState)("primary"),c=Object(i.a)(n,2),o=c[0],l=c[1],j=qe(),b=Object(Ke.a)(Ze),h=function(){l("primary"===o?"secondary":"primary"),t(function(e){return function(){var t=Object(g.a)(f.a.mark((function t(a,r){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:"THEME",payload:e})}catch(r){a({type:"THEME_FAIL",payload:r.response&&r.response.data.message?r.response.data.message:r.message})}case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(o))};return e="primary"===a,Object(z.jsx)("div",{className:j.rootApp,children:Object(z.jsxs)(Qe.a,{theme:b,children:[Object(z.jsx)(Ue.a,{}),Object(z.jsx)(u.a,{className:e?j.rootApp:j.darkRoot,children:Object(z.jsxs)(s.a,{children:[Object(z.jsx)(Be,{}),Object(z.jsx)(Fe.a,{className:j.menuButton,color:"inherit",onClick:function(){h()},children:Object(z.jsx)(Je.a,{fontSize:"large"})}),Object(z.jsxs)(d.c,{children:[Object(z.jsx)(d.a,{exact:!0,path:"/",component:Le}),Object(z.jsx)(d.a,{path:"/home",component:Le}),Object(z.jsx)(d.a,{path:"/favorite/",component:ie}),Object(z.jsx)(d.a,{path:"/city",component:ze,exact:!0})]})]})})]})})},et=a(57),tt=a(99),at=a(100),rt=a(21),nt=Object(et.combineReducers)({SearchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(ue.a)(Object(ue.a)({},e),{},{loadingInfo:!0});case O:return{loadingInfo:!1,data:t.payload};case y:return{loadingInfo:!1,SearchError:t.payload};default:return e}},GetCityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,data:{},keyword:"Tel Aviv"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(ue.a)(Object(ue.a)({},e),{},{loadingCity:!0});case w:return{loadingCity:!1,data:t.payload,keyword:t.keyword};case C:return{loadingCity:!1,getCityError:t.payload};default:return e}},CurrentCityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,id:"",keyword:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"current_city":return{loadingCity:!1,id:t.payload,city:t.keyword};default:return e}},ForeCastReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(ue.a)(Object(ue.a)({},e),{},{loadingforeCast:!0});case S:return{loadingforeCast:!1,foreData:t.payload,keyword:t.keyword};case F:return{loadingCity:!1,ForecastError:t.payload};default:return e}},FavouriteReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{favourites:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:var a=t.payload,r=e.favourites.find((function(e){return e.id===a.id}));return r?Object(ue.a)(Object(ue.a)({},e),{},{favourites:e.favourites.map((function(e){return e.id===r.id?a.id:e}))}):Object(ue.a)(Object(ue.a)({},e),{},{favourites:[].concat(Object(rt.a)(e.favourites),[a])});case E:return Object(ue.a)(Object(ue.a)({},e),{},{favourites:e.favourites.filter((function(e){return e.id!=t.payload}))});case N:return{AddFavError:t.payload};default:return e}},GetFavCityReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{FavData:[]},t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.payload),t.type){case A:return Object(ue.a)(Object(ue.a)({},e),{},{LoadingFavCity:!0});case D:var a=e.FavData.find((function(e){return e.keyword===t.payload.keyword}));return a?Object(ue.a)(Object(ue.a)({},e),{},{FavData:e.FavData.map((function(e){return e.keyword===a.keyword?t.payload:e}))}):Object(ue.a)(Object(ue.a)({LoadingFavCity:!1},e),{},{FavData:[].concat(Object(rt.a)(e.FavData),[t.payload])});case T:return{LoadingFavCity:!1,FavCityError:t.payload};case G:return Object(ue.a)(Object(ue.a)({LoadingFavCity:!1},e),{},{FavData:e.FavData.filter((function(e){return e.id!=t.payload}))});default:return e}},GeoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(ue.a)(Object(ue.a)({},e),{},{loadingGeo:!0});case _:return{loadingGeo:!1,geoData:t.payload};case W:return{loadingGeo:!1,getGeoError:t.payload};default:return e}},ThemeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"primary"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"THEME":return{themeState:t.payload};default:return e}}}),ct={SearchReducer:{data:null},GetCityReducer:{data:""},CurrentCityReducer:{id:215854,city:"Tel Aviv"},FavouriteReducer:{favourites:localStorage.getItem("favourites")?JSON.parse(localStorage.getItem("favourites")):[]},GetFavCityReducer:{FavData:[]},ThemeReducer:{themeState:"primary"}},ot=[tt.a],it=Object(et.createStore)(nt,ct,Object(at.composeWithDevTools)(et.applyMiddleware.apply(void 0,ot)));o.a.render(Object(z.jsx)(p.a,{store:it,children:Object(z.jsx)($e,{})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.79cf0766.chunk.js.map