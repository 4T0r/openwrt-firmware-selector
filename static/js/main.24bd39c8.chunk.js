(this["webpackJsonpfirmware-wizard"]=this["webpackJsonpfirmware-wizard"]||[]).push([[0],{138:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(12),s=a.n(i),l=(a(138),a(117)),o=a(13),c=(a(97),a(119)),d=a(251),u=a(252),j=a(17),p=a(113),m=a.n(p),b=a(224),h=a(227),g=a(253),f=a(228),O=a(120),x=a(258),v=a(255),y=a(28),k=a(121),w=a.p+"static/media/logo.ad9c7e35.svg",z={ca:"Catal\xe0",en:"English",es:"Espa\xf1ol",de:"Deutsch",fr:"Fran\xe7ais",it:"Italiano",no:"Norsk",pl:"Polski",tr:"T\xfcrk\xe7e"},S=a(2),T=function(){var e=Object(y.b)(),t=e.t,a=e.i18n,i=Object(r.useRef)(null),s=n.a.useState(!1),l=Object(j.a)(s,2),o=l[0],c=l[1];return Object(S.jsx)(b.a,{position:"sticky",className:"header",children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)(k.a,{src:w,className:"logo"}),Object(S.jsx)("div",{style:{flexGrow:1}}),Object(S.jsxs)(g.a,{position:"relative",children:[Object(S.jsxs)(f.a,{"data-testid":"language-menu-toggle","aria-controls":"language-menu","aria-haspopup":"true",color:"secondary",variant:"contained",onClick:function(){c(!o)},ref:i,children:[Object(S.jsxs)("span",{className:"language-toggle-text",children:[a.language?z[a.language]:"change language"," \xa0"]}),Object(S.jsx)(m.a,{})]}),Object(S.jsx)(O.a,{id:"language-menu","data-testid":"language-menu",open:o,anchorEl:i.current,onClose:function(){return c(!1)},children:Object.keys(z).map((function(e){return Object(S.jsxs)(x.a,{value:e,onClick:function(){return function(e){a.changeLanguage(e)}(e)},"data-testid":"locale-".concat(e),children:[Object(S.jsx)(v.a,{size:"small",checked:a.language===e})," ",t(z[e])]},e)}))})]})]})})},D=a(250),P=a(191),F=a(124),C=a(246),_=a(89),B=a(33),W=a.n(B),I=a(47),q=a(259),L=a(233),E=a(254),A=a(48),N=a.n(A),M=a(60),V=a(114),R=function(e){return e.title||"".concat(e.vendor," ").concat(e.model)},U={},H=function(e){var t=e.selectedVersion,a=e.onProfileChange,n=Object(r.useState)([]),i=Object(j.a)(n,2),s=i[0],l=i[1],o=Object(r.useState)(!0),c=Object(j.a)(o,2),d=c[0],u=c[1],p=Object(y.b)().t,m=Object(r.useCallback)(Object(I.a)(W.a.mark((function e(){var a,r,n,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=U[t],r=[],u(!0),a){e.next=10;break}return n="".concat("/openwrt-firmware-selector","/data/").concat(t,"/overview.json"),e.next=7,N.a.get(n);case 7:i=e.sent,a=i.data,U[t]=a;case 10:return u(!1),a.profiles.forEach((function(e){e.titles.forEach((function(t){var a=R(t);r.push({value:e,search:e.id+a,title:a})}))})),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)}))),[t]);Object(r.useEffect)((function(){m().then((function(e){Object(M.isEqual)(e,s)||l(e)}))}),[m,s,t]);return d?Object(S.jsx)(L.a,{}):Object(S.jsx)(E.a,{"data-testid":"search-autocomplete",options:s,getOptionLabel:function(e){return e.title},renderInput:function(e){return Object(S.jsx)(q.a,Object(_.a)(Object(_.a)({},e),{},{fullWidth:!0,variant:"outlined",label:p("tr-model")}))},filterOptions:function(e,t){var a=t.inputValue;return Object(M.throttle)((function(){var t;return Object(V.a)(e,(null===(t=a.replaceAll)||void 0===t?void 0:t.call(a," ",""))||a,{keys:["search"]}).slice(0,10)}),1e3)()||[]},onChange:function(e,t){t&&a(t.value)}})},K=a(232),G=a(261),Z=a(256),Y={show_help:!0,versions:{"19.07.7":"data/19.07.7",SNAPSHOT:"data/SNAPSHOT"},default_version:"19.07.7",image_url:"https://downloads.openwrt.org/releases/{version}/targets/{target}",info_url:"https://openwrt.org/start?do=search&id=toh&q={title}",asu_url:"https://chef.libremesh.org"},J=function(e){var t=e.selectedVersion,a=e.onVersionChange,r=Y.versions,n=Object(y.b)().t;return Object(S.jsxs)(K.a,{fullWidth:!0,variant:"outlined",children:[Object(S.jsx)(G.a,{id:"version-select-label",children:n("tr-version")}),Object(S.jsx)(Z.a,{labelWidth:60,labelId:"version-select-label",value:t,onChange:function(e){var t=e.target.value;a(t)},"data-testid":"version-select",children:Object.keys(r).map((function(e){return Object(S.jsx)(x.a,{value:e,children:e},e)}))})]})},Q=a(88),X=a(234),$=a(235),ee=a(236),te=a(237),ae=a(238),re=a(239),ne=a(240),ie=a(242),se=a(262),le=a(230),oe=a(244),ce=a(193),de=a(257),ue=a(247),je=a(249),pe=a(241),me=a(243),be=a(245),he=a(248),ge=a(64),fe={buildNew:function(e,t,a){return N.a.post("".concat(Y.asu_url,"/api/build"),{version:a,profile:t,packages:e,diff_packages:!0})},checkBuild:function(e){return N.a.get("".concat(Y.asu_url,"/api/build/").concat(e))}};function Oe(e){return new Promise((function(t){return setTimeout(t,e)}))}var xe={build:function(){var e=Object(I.a)(W.a.mark((function e(t,a,r,n){var i,s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.buildNew(t,a,r);case 2:202===(i=e.sent).status&&n("#".concat(i," in queue"));case 4:return e.next=7,fe.checkBuild(i.data.request_hash);case 7:if(200!==(s=e.sent).status){e.next=12;break}return e.abrupt("return",s.data);case 12:202===s.status&&("queued"===s.data.status?n("#".concat(i," in queue")):"started"===s.data.status&&n("Building the image"));case 13:return e.next=15,Oe(5e3);case 15:e.next=4;break;case 17:case"end":return e.stop()}}),e)})));return function(t,a,r,n){return e.apply(this,arguments)}}()},ve=Object(X.a)((function(){return{chip:{"&:focus":{border:"2px solid #000"}}}})),ye={},ke=function(e){var t,a,n,i,s,l=e.selectedVersion,o=e.selectedProfile,c=ve(),d=Object(r.useState)(),u=Object(j.a)(d,2),p=u[0],m=u[1],b=Object(r.useState)(!1),h=Object(j.a)(b,2),O=h[0],x=h[1],v=Object(r.useState)(new Set),k=Object(j.a)(v,2),w=k[0],z=k[1],T=Object(r.useState)(""),D=Object(j.a)(T,2),P=D[0],_=D[1],B=Object(r.useState)(!1),q=Object(j.a)(B,2),E=q[0],A=q[1],V=Object(r.useState)(),U=Object(j.a)(V,2),H=U[0],Z=U[1],J=Object(r.useState)(),X=Object(j.a)(J,2),fe=X[0],Oe=X[1],ke=Object(r.useState)(),we=Object(j.a)(ke,2),ze=we[0],Se=we[1],Te=Object(y.b)().t,De=function(e){var t=e.toLowerCase();return t.includes("sysupgrade")?"sysupgrade-help":t.includes("factory")||"trx"===t||"chk"===t?"factory-help":t.includes("kernel")||t.includes("zimage")||t.includes("uimage")?"kernel-help":t.includes("root")?"rootfs-help":t.includes("sdcard")?"sdcard-help":t.includes("tftp")?"tftp-help":"other-help"},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return Array.from(new Set([].concat(Object(Q.a)((null===e||void 0===e?void 0:e.default_packages)||[]),Object(Q.a)((null===e||void 0===e?void 0:e.device_packages)||[]))))},Fe=Object(r.useCallback)(Object(I.a)(W.a.mark((function e(){var t,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=ye[o.id]){e.next=7;break}return e.next=4,N.a.get("".concat("/openwrt-firmware-selector","/data/").concat(l)+"/".concat(o.target,"/").concat(o.id,".json"));case 4:a=e.sent,t=a.data,ye[o.id]=t;case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),[l,o]);Object(r.useEffect)((function(){var e=!0;return Fe().then((function(t){e&&!Object(M.isEqual)(p,t)&&(m(t),z(new Set(Pe(t))))})),function(){e=!1}}),[l,o,Fe,p]);var Ce=function(e){(e&&"Enter"===e.key||!e)&&P&&(z((function(e){var t,a;return A(!1),(null===p||void 0===p||null===(t=p.device_packages)||void 0===t?void 0:t.includes(P))||(null===p||void 0===p||null===(a=p.default_packages)||void 0===a?void 0:a.includes(P))?(A(!0),e):new Set(e.add(P))})),_(""))},_e=function(e){Z(e)};if(!p)return Object(S.jsx)(L.a,{});var Be=function(){var e=Object(I.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z("Please wait..."),e.prev=1,e.next=4,xe.build(Array.from(w.values()),p.id,p.version_number,_e);case 4:t=e.sent,Oe(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),Se(e.t0.response.data.message);case 12:Z(void 0);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),We=ge.DateTime.fromFormat(p.build_at,"yyyy-MM-dd TT").toLocaleString(ge.DateTime.DATETIME_MED),Ie=Object.keys(Y).includes("asu_url"),qe=!Object(M.isEqual)(Array.from(w.values()),Pe()),Le="string"===typeof H;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(g.a,{paddingTop:3,paddingBottom:2,children:Object(S.jsx)(F.a,{variant:"h5",component:"h3",align:"left",children:Te("tr-version-build")})}),Object(S.jsx)($.a,{children:Object(S.jsx)(ee.a,{children:Object(S.jsxs)(te.a,{children:[Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:Te("tr-model")}),Object(S.jsx)(re.a,{id:"title",children:null===(t=p.titles)||void 0===t?void 0:t.map((function(e){return R(e)})).join(", ")})]}),Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:Te("tr-target")}),Object(S.jsx)(re.a,{id:"target",children:p.target})]}),Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:Te("tr-version")}),Object(S.jsxs)(re.a,{children:[p.version_number," (",p.version_code,")"]})]}),Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:Te("tr-date")}),Object(S.jsx)(re.a,{children:We.toLocaleString()})]}),Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:"Info"}),Object(S.jsx)(re.a,{children:null===(a=p.titles)||void 0===a?void 0:a.map((function(e){var t=R(e),a=Y.info_url.replace("{title}",encodeURI(t));return Object(S.jsxs)(ne.a,{href:a,children:[p.titles.length>1&&Object(S.jsx)(F.a,{component:"span",children:t}),Object(S.jsx)(pe.a,{style:{marginLeft:10,verticalAlign:"middle"}})]},t)})).reduce((function(e,t,a){return[e,Object(S.jsx)(g.a,{display:"inline-block",marginRight:2},a),t]}))})]})]})})}),Object(S.jsx)(g.a,{paddingTop:3,paddingBottom:2,children:Object(S.jsx)(F.a,{variant:"h5",component:"h3",align:"left",children:Te("tr-downloads")})}),Object(S.jsx)($.a,{children:Object(S.jsxs)(ee.a,{children:[Object(S.jsx)(ie.a,{children:Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:"Download link"}),Object(S.jsx)(re.a,{children:"Help Text"})]})}),Object(S.jsx)(te.a,{children:null===(n=p.images)||void 0===n?void 0:n.map((function(e){var t="".concat(Y.image_url.replace("{target}",p.target).replace("{version}",p.version_number),"/").concat(e.name);return Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:Object(S.jsx)(ne.a,{href:t,target:"_blank","data-testid":"download_link",children:Object(S.jsx)(f.a,{endIcon:Object(S.jsx)(me.a,{}),variant:"contained",color:"primary",children:e.type})})}),Object(S.jsx)(re.a,{children:Object(S.jsxs)(g.a,{p:1,children:[Object(S.jsx)(F.a,{children:Te("tr-".concat(De(e.type)))}),Object(S.jsxs)(F.a,{variant:"caption",children:["sha256sum: ",e.sha256]})]})})]},t+e.type)}))})]})}),Object(S.jsx)(g.a,{paddingTop:3,paddingBottom:2,children:Object(S.jsx)(F.a,{variant:"h5",component:"h3",align:"left",children:Te("Packages")})}),p.default_packages&&p.default_packages.length>0&&Object(S.jsxs)(g.a,{mb:2,children:[Object(S.jsx)(F.a,{variant:"h6",align:"left",children:Te("Default Packages")}),null===(i=p.default_packages)||void 0===i?void 0:i.join(", ")]}),p.device_packages&&p.device_packages.length>0&&Object(S.jsxs)(g.a,{mb:2,children:[Object(S.jsx)(F.a,{variant:"h6",align:"left",children:Te("Device Packages")}),p.device_packages.join(", ")]}),Ie&&Object(S.jsxs)(g.a,{children:[!O&&Object(S.jsx)(f.a,{variant:"outlined",size:"small",onClick:function(){p&&(x(!O),z(new Set(Pe())))},children:"customize packages"}),O&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(F.a,{variant:"h6",align:"left",children:[Te("Customize Packages"),Object(S.jsx)(g.a,{display:"inline-block",ml:2,children:Object(S.jsx)(ne.a,{href:"https://openwrt.org/packages/table/start",target:"_blank",children:Object(S.jsx)(F.a,{variant:"caption",children:"find packages index on this page"})})})]}),Object(S.jsx)("br",{}),Array.from(w.values()).map((function(e){return Object(S.jsx)(g.a,{pr:1,pb:1,display:"inline-block",children:Object(S.jsx)(se.a,{size:"small",label:e,color:Le?"default":"primary",className:c.chip,onDelete:function(){Le||z((function(t){var a=new Set(Array.from(t.values()));return a.delete(e),a}))}})},e)})),Object(S.jsx)("br",{}),Object(S.jsxs)(K.a,{size:"small",children:[Object(S.jsx)(G.a,{style:{fontSize:"0.9em"},children:"Custom Package Name"}),Object(S.jsx)(le.a,{value:P,disabled:Le,onChange:function(e){return e&&_(e.currentTarget.value)},onKeyUp:Ce,endAdornment:Object(S.jsx)(oe.a,{position:"end",children:Object(S.jsx)(ce.a,{size:"small",onClick:function(){return Ce()},children:Object(S.jsx)(be.a,{})})})})]}),E&&Object(S.jsx)(g.a,{pt:2,children:Object(S.jsx)(F.a,{color:"error",variant:"caption",component:"div",children:"This profile already includes this package. Please try a diffrent one"})}),Object(S.jsxs)(g.a,{mt:3,children:[!H&&Object(S.jsx)(f.a,{variant:"contained",color:"primary",disabled:!qe,onClick:Be,children:"build customized image"}),H&&Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(C.a,{container:!0,alignContent:"center",direction:"row",alignItems:"center",spacing:2,children:[Le&&Object(S.jsx)(C.a,{item:!0,children:Object(S.jsx)(L.a,{})}),Object(S.jsx)(C.a,{item:!0,children:H})]})})]})]}),ze&&Object(S.jsx)(F.a,{color:"error",children:ze}),fe&&Object(S.jsxs)(g.a,{mt:3,children:[Object(S.jsx)(F.a,{variant:"h5",children:"Built Image:"}),Object(S.jsx)(ee.a,{children:Object(S.jsx)(te.a,{children:Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:"Build At"}),Object(S.jsx)(re.a,{id:"title",children:ge.DateTime.fromFormat(fe.build_at.substr(0,25),"ccc, dd MMM yyyy TT",{zone:fe.build_at.substr(26),setZone:!0}).toLocaleString(ge.DateTime.DATETIME_MED)})]})})}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)($.a,{children:Object(S.jsxs)(ee.a,{children:[Object(S.jsx)(ie.a,{children:Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:"Download link"}),Object(S.jsx)(re.a,{children:"Help Text"})]})}),Object(S.jsx)(te.a,{children:null===(s=fe.images)||void 0===s?void 0:s.map((function(e){var t="".concat(Y.asu_url,"/store/").concat(fe.bin_dir,"/").concat(e.name);return Object(S.jsxs)(ae.a,{children:[Object(S.jsx)(re.a,{children:Object(S.jsx)(ne.a,{href:t,target:"_blank","data-testid":"download_link",children:Object(S.jsx)(f.a,{endIcon:Object(S.jsx)(me.a,{}),variant:"contained",color:"primary",children:e.type})})}),Object(S.jsx)(re.a,{children:Object(S.jsxs)(g.a,{p:1,children:[Object(S.jsx)(F.a,{children:Te("tr-".concat(De(e.type)))}),Object(S.jsxs)(F.a,{variant:"caption",children:["sha256sum: ",e.sha256]})]})})]},t+e.type)}))})]})}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsxs)("div",{children:[Object(S.jsxs)(de.a,{className:"std-accordian",children:[Object(S.jsx)(ue.a,{expandIcon:Object(S.jsx)(he.a,{}),children:"Stderr"}),Object(S.jsx)(je.a,{children:Object(S.jsx)("textarea",{rows:15,disabled:!0,className:"std-textarea",children:fe.stderr})})]}),Object(S.jsxs)(de.a,{className:"std-accordian",children:[Object(S.jsx)(ue.a,{expandIcon:Object(S.jsx)(he.a,{}),children:"Stdout"}),Object(S.jsx)(je.a,{children:Object(S.jsx)("textarea",{rows:15,disabled:!0,className:"std-textarea",children:fe.stdout})})]})]})]})]})]})},we=function(){var e=Object(r.useState)(Object.keys(Y.versions)[0]),t=Object(j.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(),s=Object(j.a)(i,2),l=s[0],o=s[1],c=Object(y.b)().t;return Object(S.jsx)(D.a,{children:Object(S.jsx)(g.a,{paddingY:4,children:Object(S.jsx)(P.a,{children:Object(S.jsxs)(g.a,{padding:3,children:[Object(S.jsx)(g.a,{paddingBottom:2,children:Object(S.jsx)(F.a,{variant:"h4",component:"h1",align:"left",children:c("tr-load")})}),Object(S.jsx)(g.a,{paddingBottom:2,children:Object(S.jsx)(F.a,{variant:"h6",component:"h2",align:"left",children:c("tr-message")})}),Object(S.jsxs)(C.a,{container:!0,spacing:2,children:[Object(S.jsx)(C.a,{item:!0,xs:12,md:!0,children:Object(S.jsx)(H,{selectedVersion:a,onProfileChange:o,"data-testid":"profile-search"})}),Object(S.jsx)(C.a,{item:!0,xs:12,md:3,children:Object(S.jsx)(J,{"data-testid":"version-selector",selectedVersion:a,onVersionChange:n})})]}),l&&Object(S.jsx)(g.a,{children:Object(S.jsx)(ke,{selectedProfile:l,selectedVersion:a})})]})})})})},ze=function(){return Object(S.jsx)(D.a,{style:{marginTop:"50px"},children:Object(S.jsx)(P.a,{elevation:3,children:Object(S.jsxs)(g.a,{padding:3,children:[Object(S.jsx)(F.a,{variant:"h5",component:"h3",children:"404 Page Not Found"}),Object(S.jsxs)(F.a,{component:"p",children:["Please head to the ",Object(S.jsx)(ne.a,{href:"/openwrt-firmware-selector",children:"home"}),"."]})]})})})},Se=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(h.a,{hidden:!0}),Object(S.jsxs)(P.a,{elevation:4,className:"report-problem-container",children:[Object(S.jsxs)("span",{children:["If you come across any issue, feel free to report"," ",Object(S.jsx)("a",{href:"https://github.com/aparcar/attendedsysupgrade-server/issues",children:"here"}),"."]}),Object(S.jsxs)("span",{className:"report-link",children:["For contributions, go to"," ",Object(S.jsx)("a",{href:"https://github.com/sudhanshu16/openwrt-firmware-selector/",children:"Github"})]})]})]})},Te=Object(c.a)({palette:{primary:{main:"#00a3e1",contrastText:"#ffffff"},secondary:{main:"#212322"}},typography:{h1:{fontWeight:600},h2:{fontWeight:600},h3:{fontWeight:600},h4:{fontWeight:600},h5:{fontWeight:600},h6:{fontWeight:600},fontFamily:["Open Sans","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",,].join(",")}}),De=function(){return Object(S.jsx)(d.a,{theme:Te,children:Object(S.jsx)(n.a.Suspense,{fallback:Object(S.jsx)(u.a,{}),children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(T,{}),Object(S.jsx)(l.a,{children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{path:"",exact:!0,component:we}),Object(S.jsx)(o.a,{component:ze})]})}),Object(S.jsx)(Se,{})]})})})},Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,265)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),i(e),s(e)}))},Fe=a(87),Ce=a(118),_e=a.n(Ce),Be={ca:{"tr-load":"Descarregueu el microprogramari OpenWrt per al vostre dispositiu","tr-title":"Selector de microprogramari","tr-message":'Introdu\xefu el nom o el model del vostre dispositiu i seleccioneu la versi\xf3 estable (per defecte) o la darrera imatge compilada ("snapshot")',"tr-version-build":"Compilaci\xf3","tr-custom-build":"Compilaci\xf3 personalitzada","tr-customize":"Personalitzar","tr-request-build":"Demanar la compilaci\xf3","tr-model":"Model","tr-target":"Plataforma","tr-version":"Versi\xf3","tr-date":"Data","tr-downloads":"Desc\xe0rregues","tr-custom-downloads":"Desc\xe0rregues personalitzades","tr-factory-help":'Empreu la imatge "factory" per instal\xb7lar OpenWrt a un dispositius per primera vegada. Normalment ho podreu fer trav\xe9s de la interf\xedcie web del microprogramari original.',"tr-sysupgrade-help":'Empreu la imatge "sysupgrade" per actualitzar un dispositiu que ja tingui OpenWrt instal\xb7lat. La imatge es pot instal\xb7lar a trav\xe9s de la interf\xedcie web LuCI o del terminal.',"tr-kernel-help":"El nucli de Linux en una imatge separada.","tr-rootfs-help":"El sistema de fitxers arrel en una imatge separada.","tr-sdcard-help":"Una imatge feta per escriure-la a una targeta SD.","tr-tftp-help":"Les imatges TFTP images es fan servir per instal\xb7lar-les a un dispositiu mitjan\xe7ant el m\xe8tode TFTP del carregador d'arrencada.","tr-other-help":"Un altre tipus d'imatge.","tr-build-successful":"La compilaci\xf3 ha tingut \xe8xit","tr-build-failed":"La compilaci\xf3 ha fallat","tr-request-image":"Demanar la imatge","tr-check-again":"Proveu de nou d'aqu\xed 5 segons..."},en:{"tr-server-link":"Files","tr-notfound":"No model found!","tr-load":"Download OpenWrt Firmware for your Device","tr-title":"Firmware Selector","tr-message":"Type the name or model of your device, then select the recommended build or some other.","tr-version-build":"About this build","tr-custom-build":"Custom Build","tr-customize":"Customize","tr-request-build":"Request Build","tr-model":"Model","tr-target":"Platform","tr-version":"Version","tr-date":"Date","tr-downloads":"Download an image","tr-custom-downloads":"Custom Downloads","tr-factory-help":"Use a Factory image to flash a router with OpenWrt for the first time. You normally do this via the web interface of the original firmware.","tr-sysupgrade-help":"Use a Sysupgrade image to update a router that already runs OpenWrt. The image can be used with the LuCI web interface or the terminal.","tr-kernel-help":"Linux kernel as a separate image.","tr-rootfs-help":"Root file system as a separate image.","tr-sdcard-help":"Image that is meant to be flashed onto a SD-Card.","tr-tftp-help":"TFTP images are used to flash a device via the TFTP method of the bootloader.","tr-other-help":"Other image type.","tr-build-successful":"Build successful","tr-build-failed":"Build failed","tr-request-image":"Request image","tr-check-again":"Check again in 5 seconds..."},es:{"tr-notfound":"\xa1Modelo no encontrado!","tr-load":"Descargue el firmware OpenWrt para su dispositivo","tr-title":"Selector de firmware","tr-message":"Escriba el nombre o modelo de su dispositivo, luego seleccione la versi\xf3n recomendada o alguna otra.","tr-version-build":"Acerca de esta compilaci\xf3n","tr-custom-build":"Compilaci\xf3n personalizada","tr-customize":"Personalizar","tr-request-build":"Solicitar compilaci\xf3n","tr-model":"Modelo","tr-target":"Plataforma","tr-version":"Versi\xf3n","tr-date":"Date","tr-downloads":"Descargar una imagen","tr-custom-downloads":"Descargas personalizadas","tr-factory-help":"Utilice una imagen factory para instalar OpenWrt en un enrutador por primera vez. Normalmente se hace a trav\xe9s de la interfaz web del firmware original.","tr-sysupgrade-help":"Utilice una imagen sysupgrade para actualizar un enrutador que ya ejecuta OpenWrt. La imagen se puede utilizar con la interfaz web de LuCI o el terminal.","tr-kernel-help":"Kernel de Linux como una imagen separada.","tr-rootfs-help":"Sistema de archivos ra\xedz como una imagen separada.","tr-sdcard-help":"Imagen destinada a flashear en una tarjeta SD.","tr-tftp-help":"Las im\xe1genes TFTP se utilizan para actualizar un dispositivo mediante el m\xe9todo TFTP del gestor de arranque.","tr-other-help":"Otro tipo de imagen.","tr-build-successful":"Compilaci\xf3n exitosa","tr-build-failed":"Compilaci\xf3n fallida","tr-request-image":"Solicitar imagen","tr-check-again":"Vuelva a comprobar en 5 segundos..."},no:{"tr-load":"Last ned OpenWrt fastvare for din enhet!","tr-title":"fastvare utvelger","tr-message":"Bruk feltene nedenfor for \xe5 laste ned fastvare til enheten din!","tr-version-build":"Sammensetning","tr-custom-build":"Tilpasset sammensetning","tr-customize":"Tilpasse","tr-request-build":"Be om sammensetning","tr-model":"Modell","tr-target":"Platform","tr-version":"Versjon","tr-date":"Dato","tr-downloads":"Nedlastninger","tr-custom-downloads":"Tilpassede nedlastninger","tr-factory-help":"Factory avbildningen er for \xe5 laste rutere med OpenWrt f\xf8rste gang. Vanligvis via webgrensesnittet til den originale fastvaren.","tr-sysupgrade-help":"Sysupgrade avbildningen er for rutere som allerede benytter OpenWrt. Avbildningen innstaleres gjennom webgrensesnittet eller terminalen.","tr-kernel-help":"Linux kjernen som en egen avbildning.","tr-rootfs-help":"Rotfilsystem som en egen avbildning.","tr-sdcard-help":"Avbildning som er ment for et SD-kort.","tr-tftp-help":"TFTP avbildninger er for \xe5 laste enheter via TFTP metoden i oppstartsprosedyren.","tr-other-help":"Andre avbildningstyper.","tr-build-successful":"Vellykket sammensetning","tr-build-failed":"Sammensetningen feilet","tr-request-image":"Be om avbildning","tr-check-again":"Sjekk p\xe5nytt om 5 sekunder..."},de:{"tr-server-link":"Dateien","tr-notfound":"Kein Model gefunden!","tr-load":"Lade die OpenWrt Firmware f\xfcr dein Ger\xe4t!","tr-title":"Firmware Selector","tr-message":"Bitte benutze die Eingabe um die passende Firmware zu finden!","tr-version-build":"Release Build","tr-custom-build":"Custom Build","tr-customize":"Customize","tr-request-build":"Request Build","tr-model":"Model","tr-target":"Target","tr-version":"Version","tr-date":"Datum","tr-downloads":"Downloads","tr-custom-downloads":"Custom Downloads","tr-factory-help":"Factory Abbilder werden \xfcber die Weboberfl\xe4che der originalen Firmware eingespielt.","tr-sysupgrade-help":"Sysupgrade Abbilder werden f\xfcr Ger\xe4te verwendet, die bereits OpenWrt laufen haben. Es ist m\xf6glich, existierende Einstellungen beizubehalten.","tr-kernel-help":"Linux Kernel als separates Abbild.","tr-rootfs-help":"Das Root Dateisystem als separates Abbild.","tr-sdcard-help":"Image f\xfcr SD Speicherkarten.","tr-tftp-help":"TFTP Dateien k\xf6nnen verwendet werden, um ein Ger\xe4t \xfcber die TFTP Method des Bootloader zu flashen.","tr-other-help":"Sonstiger Imagetyp.","tr-build-successful":"Build erfolgreich","tr-build-failed":"Build fehlgeschlagen","tr-request-image":"Frage nach image","tr-check-again":"Nochmal nachfragen in 5 Sekunden..."},fr:{"tr-load":"T\xe9l\xe9charger le firmware OpenWrt de votre p\xe9riph\xe9rique !","tr-title":"S\xe9lecteur de Firmware","tr-message":"Utiliser les entr\xe9es ci-dessous pour t\xe9l\xe9charger le firmware de votre p\xe9riph\xe9rique !","tr-version-build":"Build","tr-custom-build":"Build Personnalis\xe9","tr-customize":"Personnalisation","tr-request-build":"Requ\xeate de Build","tr-model":"Mod\xe8le","tr-target":"Platform","tr-version":"Version","tr-date":"Date","tr-downloads":"T\xe9l\xe9chargements","tr-custom-downloads":"T\xe9l\xe9chargements Personnalus\xe9s","tr-factory-help":"Les images Factory sont pr\xe9vues pour flasher les routers avec OpenWrt pour la premi\xe8re fois. Habituellement \xe0 partir de l'interface web du firmware d'origine.","tr-sysupgrade-help":"Les images Sysupgrade sont pr\xe9vues pour flasher les routers fonctionnant d\xe9j\xe0 avec OpenWrt. L'image peut \xeatre install\xe9e \xe0 travers l'interface web ou par le terminal.","tr-kernel-help":"Linux kernel comme image s\xe9par\xe9e.","tr-rootfs-help":"Root file system comme image s\xe9par\xe9e.","tr-sdcard-help":"Image pr\xe9vue pour \xeatre flash\xe9e sur une carte SD.","tr-tftp-help":"TFTP images pr\xe9vues pour flasher le p\xe9riph\xe9rique via le d\xe9marrage par m\xe9thode TFTP.","tr-other-help":"Autre type d'image.","tr-build-successful":"Succ\xe8s du Build","tr-build-failed":"\xc9chec du Build","tr-request-image":"Demade d'image","tr-check-again":"Essayer \xe0 nouveau dans 5 secondes..."},it:{"tr-load":"Scarica il firmware OpenWrt per il tuo dispositivo!","tr-title":"Firmware Selector","tr-message":"Usa la casella sottostante per scaricare il firmware per il tuo dispositivo!","tr-version-build":"Build","tr-custom-build":"Custom Build","tr-customize":"Personalizza","tr-request-build":"Richiedi Build","tr-model":"Modell","tr-target":"Platform","tr-version":"Version","tr-date":"Data","tr-downloads":"Downloads","tr-custom-downloads":"Download Personalizzati","tr-factory-help":"Factory Image sono usate per installare OpenWrt su router per la prima volta. Di solito l'immagine pu\xf2 essere applicata via l'interfaccia web del firmware originale.","tr-sysupgrade-help":"Sysupgrade Image sono usate per flashare router in cui OpenWrt \xe8 gi\xe0 installato. L'immagine pu\xf2 essere applicata via interfaccia web o terminale.","tr-kernel-help":"Linux kernel come immagine separata.","tr-rootfs-help":"Root file system come immagine separata.","tr-sdcard-help":"Immagine da flashare su scheda SD-Card separata.","tr-tftp-help":"Immagini TFTP images sono usate per flashare un dispositivo con il metodo TFTP del bootloader.","tr-other-help":"Other image type.","tr-build-successful":"Build compilata con successo","tr-build-failed":"Build fallita","tr-request-image":"Richiedi immagine","tr-check-again":"Prova di nuovo in 5 secondi..."},pl:{"tr-server-link":"Pliki","tr-notfound":"Nie znaleziono modelu!","tr-load":"Pobieranie oprogramowania OpenWrt","tr-title":"Firmware Selector","tr-message":"Wprowad\u017a nazw\u0119 lub model swojego urz\u0105dzenia, a nast\u0119pnie wybierz wersj\u0119 zalecan\u0105 lub inn\u0105.","tr-version-build":"Informacje o obrazie","tr-custom-build":"Informacje o zmodyfikowanym obrazie","tr-customize":"Modyfikacja","tr-request-build":"\u017b\u0105danie budowy obrazu","tr-model":"Model","tr-target":"Platforma","tr-version":"Wersja","tr-date":"Data","tr-downloads":"Obrazy do pobrania","tr-custom-downloads":"Zmodyfikowane obrazy do pobrania","tr-factory-help":"U\u017cyj obrazu factory do pierwszej instalacji OpenWrt. Zwykle mo\u017cna go u\u017cy\u0107 wykorzystuj\u0105c interfejs graficzny oryginalnego oprogramowania.","tr-sysupgrade-help":"U\u017cyj obrazu sysuprade do aktualizacji routera z zainstalowanym ju\u017c OpenWrt. Obraz mo\u017cna u\u017cy\u0107 przez interfejs graficzny LuCI lub konsol\u0119.","tr-kernel-help":"Osobny obraz z kernelem linuksowym.","tr-rootfs-help":"Osobny obraz z systemem plik\xf3w.","tr-sdcard-help":"Obraz do wgrania na kart\u0119 SD.","tr-tftp-help":"Obraz TFTP s\u0142u\u017c\u0105cy do aktualizacji urz\u0105dzenia z wykorzystaniem metody TFTP bootloadera.","tr-other-help":"Inny typ obrazu.","tr-build-successful":"Budowanie zako\u0144czone pomy\u015blnie","tr-build-failed":"B\u0142\u0105d budowania","tr-request-image":"\u017b\u0105danie obrazu","tr-check-again":"Sprawd\u017a ponownie za 5 sekund..."},tr:{"tr-load":"Cihaz\u0131n\u0131z i\xe7in OpenWrt yaz\u0131l\u0131m\u0131n\u0131 indirin!","tr-title":"Yaz\u0131l\u0131m Se\xe7icisi","tr-message":'Cihaz\u0131n\u0131z\u0131n ad\u0131n\u0131/modelini girin, ard\u0131ndan Stabil s\xfcr\xfcm\xfc(varsay\u0131lan) veya nightly "snapshot" imajini se\xe7in.',"tr-version-build":"S\xfcr\xfcm","tr-custom-build":"\xd6zel S\xfcr\xfcm","tr-customize":"\xd6zelle\u015ftir","tr-request-build":"S\xfcr\xfcm Olu\u015ftur","tr-model":"Model","tr-target":"Platform","tr-version":"Versiyon","tr-date":"Tarih","tr-downloads":"\u0130ndirmeler","tr-custom-downloads":"\xd6zel \u0130ndirmeler","tr-factory-help":"Bir y\xf6nlendiriciyi OpenWrt ile ilk kez flashlamak i\xe7in bir Fabrika imaji kullan\u0131n. Bu normalde orijinal ayg\u0131t yaz\u0131l\u0131m\u0131n\u0131n web aray\xfcz\xfc arac\u0131l\u0131\u011f\u0131yla yap\u0131l\u0131r.","tr-sysupgrade-help":"Zaten OpenWrt \xe7al\u0131\u015ft\u0131ran bir y\xf6nlendiriciyi g\xfcncellemek i\xe7in bir Sysupgrade imaj\u0131 kullan\u0131n. Imaj, LuCI web aray\xfcz\xfc veya terminal ile kullan\u0131labilir.","tr-kernel-help":"Linux kernel ayr\u0131 bir imaj olarak.","tr-rootfs-help":"K\xf6k Dosya Sistemi ayr\u0131 bir imaj olarak.","tr-sdcard-help":"SD-Kart 'a kurulmas\u0131 planlanan imaj","tr-tftp-help":"TFTP imajlar\u0131, Bootloader '\u0131n TFTP y\xf6ntemi ile bir cihaza kurulmas\u0131 i\xe7in kullan\u0131l\u0131r.","tr-other-help":"Di\u011fer imaj t\xfcr\xfc.","tr-build-successful":"Olu\u015fturma ba\u015far\u0131l\u0131","tr-build-failed":"Olu\u015fturma ba\u015far\u0131s\u0131z","tr-request-image":"Imaj olu\u015ftur","tr-check-again":"5 saniye icinde tekrar dene..."}},We={ca:{translation:Be.ca},en:{translation:Be.en},es:{translation:Be.es},de:{translation:Be.de},fr:{translation:Be.fr},it:{translation:Be.it},no:{translation:Be.no},pl:{translation:Be.pl},tr:{translation:Be.tr}};Fe.a.use(_e.a).use(y.a).init({resources:We,fallbackLng:"en",debug:!!Object({NODE_ENV:"production",PUBLIC_URL:"/openwrt-firmware-selector",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_I18N_DEBUG,interpolation:{escapeValue:!1}});Fe.a;s.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(De,{})}),document.getElementById("root")),Pe()},97:function(e,t,a){}},[[190,1,2]]]);
//# sourceMappingURL=main.24bd39c8.chunk.js.map