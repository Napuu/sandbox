(this.webpackJsonplayers=this.webpackJsonplayers||[]).push([[0],{101:function(e,t){},191:function(e,t,i){},192:function(e,t,i){},229:function(e,t){},233:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s),a=i(87),c=i.n(a),o=(i(191),i(192),i(92)),l=i(168),r=(i(224),i(165)),d=i.n(r),p=i(272),j=i(260),b=i(261);var u=i(13),m=i(6);const h=[{title:"Streets",url:"mapbox://styles/mapbox/streets-v11",icon:"mapbox/streets-v11"},{title:"Satellite",url:"mapbox://styles/mapbox/satellite-v9",icon:"mapbox/satellite-v9"},{title:"Dark",url:"mapbox://styles/palikk/ckw20gafz6s7i14qe4z2qgsy9",icon:"palikk/ckw20gafz6s7i14qe4z2qgsy9"}];var x=function(e){let{setBasemap:t,viewport:i,mapboxApiAccessToken:n}=e;const a=function(e,t){const[i,n]=Object(s.useState)(e);return Object(s.useEffect)((()=>{const i=setTimeout((()=>{n(e)}),t);return()=>{clearTimeout(i)}}),[e,t]),i}(i,5e3),c=h.map((e=>Object(s.useRef)(null))),[o,l]=Object(s.useState)(!1);Object(s.useEffect)((()=>{setTimeout((()=>l(!0)),3e3)}),[]);const r=Object(u.d)();Object(s.useEffect)((()=>{if(!o)return;Promise.all(h.map(((e,t)=>(async e=>{const t=new Image,i=h[e];t.onload=()=>{const i=c[e].current,s=i.getContext("2d");let n=0;const a=()=>{n+=.01,s.globalAlpha=n;let e=i.width,c=i.height,o=0,l=0;t.height>t.width?(c=e/t.width*t.height,l=(i.height-c)/2):(e=c/t.height*t.width,o=(i.width-e)/2),s.drawImage(t,o,l,e,c),n<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},t.src=`https://api.mapbox.com/styles/v1/${i.icon}/static/${a.longitude},${a.latitude},${a.zoom}/${Math.min(a.width,1280)}x${Math.min(a.height,1280)}?access_token=${n}`})(t))))}),[o,a,c,n]);const d=Object(u.c)();return Object(m.jsx)(p.a,{p:1,children:Object(m.jsx)(j.a,{children:Object(m.jsx)(p.a,{pt:.5,pb:.5,display:"flex",flexDirection:"column",children:h.map(((e,i)=>Object(m.jsx)(b.a,{onClick:()=>{t(e.url);const i=d.pathname.split("/").slice(2).join("/");r(`/${e.title.toLowerCase()}/${i}`)},children:Object(m.jsx)("canvas",{style:{border:"1px solid rgba(0, 0, 0, 0.5)",borderRadius:5},ref:c[i],width:50,height:50})},i)))})})})},O=i(266),f=i(157),g=i.n(f);var w=function(e){let{viewport:t,basemap:i,mapboxApiAccessToken:n,setBasemap:a,setAddingLocations:c,addingLocations:o,experiments:l,setExperiments:r}=e;const[d,u]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{setTimeout((()=>u(!0)),3e3)}),[]),Object(m.jsxs)(O.a.div,{initial:{opacity:0},animate:{opacity:d?1:0},children:[Object(m.jsx)(p.a,{p:1,pb:0,children:Object(m.jsx)(j.a,{children:Object(m.jsx)(p.a,{p:.5,display:"flex",flexDirection:"column",children:Object(m.jsx)(b.a,{onClick:()=>{c((e=>!e))},children:Object(m.jsx)(g.a,{color:o?"success":"disabled"})})})})}),Object(m.jsx)(p.a,{p:1,pb:0,children:Object(m.jsx)(j.a,{children:Object(m.jsx)(p.a,{p:.5,display:"flex",flexDirection:"column",children:Object(m.jsx)(b.a,{onClick:()=>{l.ships?r({...l,ships:!1}):r({...l,ships:!0})},children:"SHIPS"})})})}),Object(m.jsx)(x,{viewport:t,basemap:i,mapboxApiAccessToken:n,setBasemap:a})]})},y=i(264),v=i(265),k=i(164),S=i.n(k),A=i(163),T=i.n(A),C=i(271),E=i(267),z=i(158),F=i.n(z),L=i(159),I=i.n(L);function $(e){let{viewState:t}=e;const[i,n]=Object(s.useState)(864e5),a=57600,[c,o]=Object(s.useState)(0),[l]=Object(s.useState)({}),r=Object(s.useCallback)((()=>{o((e=>(e+a)%i)),l.id=window.requestAnimationFrame(r)}),[l,a,i]),[d,p]=Object(s.useState)([]);Object(s.useEffect)((()=>{(async()=>{const e=await fetch("/ships"),t=(await e.text()).split("\n").filter((e=>e)).map((e=>{const t=JSON.parse(e);return{waypoints:F.a.zip(I.a.decode(t[0]),t[1]).map((e=>({coordinates:e[0],timestamp:e[1]})))}}));p(t)})()}),[]),Object(s.useEffect)((()=>(l.id=window.requestAnimationFrame(r),()=>window.cancelAnimationFrame(l.id))),[l,r]),Object(s.useEffect)((()=>{if(0===d.length)return;let e=1/0,t=0;d.forEach((i=>i.waypoints.forEach((i=>{i.timestamp>t&&(t=i.timestamp),i.timestamp<e&&(e=i.timestamp)})))),n(t-e)}),[d]);const j=new C.a({id:"trips-layer",data:d,getPath:e=>e.waypoints.map((e=>e.coordinates)),getTimestamps:e=>e.waypoints.map((e=>e.timestamp)),getColor:[92,181,249],opacity:.2,widthMinPixels:5,rounded:!0,fadeTrail:!0,getWidth:e=>5,trailLength:432e5,currentTime:c,shadowEnabled:!1});return Object(m.jsx)(E.a,{useDevicePixels:!1,viewState:t,layers:[j]})}const D="pk.eyJ1IjoicGFsaWtrIiwiYSI6ImNrdnV0cG1mejBxbTYyb2p0OWI4c3FwYzUifQ.rOxZMX2Ozv495OthpRCTpg";var q=function(){const e=Object(u.c)();Object(s.useEffect)((()=>{const t=h.findIndex((t=>t.title.toLocaleLowerCase()===e.pathname.split("/")[1]));a(-1===t?h[1].url:h[t].url)}),[e.pathname]);const[t,i]=Object(s.useState)({width:window.innerWidth,height:window.innerHeight,latitude:65.41,longitude:25.88,zoom:4.3}),[n,a]=Object(s.useState)(h[1].url),c=Object(s.useRef)();window.onresize=()=>{i({...t,width:window.innerWidth,height:window.innerHeight})};const r=Object(s.useCallback)((e=>{i(e)}),[]),[j,b]=Object(s.useState)([]),[x,f]=Object(s.useState)(!1),[g,k]=Object(s.useState)({});return Object(s.useEffect)((()=>{console.log(j)}),[j]),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:{position:"absolute",zIndex:2,bottom:30,left:20},children:Object(m.jsx)(w,{viewport:t,basemap:n,mapboxApiAccessToken:D,setBasemap:a,setAddingLocations:f,addingLocations:x,experiments:g,setExperiments:k})}),Object(m.jsx)("div",{style:{position:"absolute",top:0,left:0},children:Object(m.jsxs)(o.d,{...t,ref:c,mapStyle:n,onNativeClick:e=>{if(x){const t=e.lngLat;b(j.concat({id:(new Date).getTime(),latitude:t[1],longitude:t[0],popup:!1}))}},mapboxApiAccessToken:D,onViewportChange:e=>i(e),children:[g.ships&&Object(m.jsx)($,{viewState:t}),j.map((e=>{const t=`lat: ${e.latitude.toFixed(5)}, lng: ${e.longitude.toFixed(5)}`;return Object(m.jsxs)(m.Fragment,{children:[e.popup&&Object(m.jsx)(o.c,{latitude:e.latitude,longitude:e.longitude,style:{zIndex:100},closeButton:!1,children:Object(m.jsxs)(p.a,{display:"flex",flexDirection:"column",children:[Object(m.jsx)(p.a,{position:"absolute",top:"5px",right:"5px",children:Object(m.jsx)(y.a,{size:"small",onClick:()=>{b(j.map((t=>t.id===e.id?{...t,popup:!1}:t)))},children:Object(m.jsx)(T.a,{})})}),Object(m.jsx)(p.a,{children:Object(m.jsx)("br",{})}),Object(m.jsxs)(v.a,{children:[t,Object(m.jsx)(y.a,{size:"small",onClick:()=>navigator.clipboard.writeText(t),children:Object(m.jsx)(S.a,{fontSize:"16px"})})]})]})},e.id),Object(m.jsx)(O.a.div,{initial:{opacity:0},animate:{opacity:[0,.3,.5,1],translateY:[-100,0]},transition:{duration:.3,ease:"easeOut"},children:Object(m.jsx)(o.b,{offsetLeft:-12,offsetTop:-24,draggable:!0,latitude:e.latitude,longitude:e.longitude,onDragEnd:t=>{((e,t)=>{b(j.map((i=>i.id===e?{...i,latitude:t.lngLat[1],longitude:t.lngLat[0]}:i)))})(e.id,t)},onClick:t=>{var i;i=e.id,b(j.map((e=>e.id===i?{...e,popup:!0}:e)))},children:Object(m.jsx)(d.a,{color:"info"})},e.id)})]})})),Object(m.jsx)(l.a,{mapRef:c,onViewportChange:r,mapboxApiAccessToken:D,position:"top-right"})]})})]})},B=i(110);var P=function(){return Object(m.jsx)(B.a,{children:Object(m.jsx)(q,{})})};var M=e=>{e&&e instanceof Function&&i.e(3).then(i.bind(null,276)).then((t=>{let{getCLS:i,getFID:s,getFCP:n,getLCP:a,getTTFB:c}=t;i(e),s(e),n(e),a(e),c(e)}))};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root")),M()}},[[233,1,2]]]);
//# sourceMappingURL=main.9ea75845.chunk.js.map