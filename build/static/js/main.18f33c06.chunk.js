(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(61)},50:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(19),c=a.n(o),i=(a(50),a(62)),l=a(0),u=a(8),s=a(27),p=a(34);function d(e){var t=e.disable,a=Object(s.a)(e,["disable"]),o=Object(u.f)(),c=o.camera,i=o.gl,l=Object(n.useRef)();return Object(u.d)(function(){return l.current.update()}),Object(n.useEffect)(function(){t&&(l.current.addEventListener("start",function(){return t(!0)}),l.current.addEventListener("end",function(){return t(!1)}))},[t]),r.a.createElement("orbitControls",Object.assign({ref:l,target:[0,0,0],enableDamping:!0,enableZoom:!1,enablePan:!1,dampingFactor:.05,rotateSpeed:.9,minPolarAngle:Math.PI/1.9,maxPolarAngle:Math.PI/1.9},a,{args:[c,i.domElement]}))}Object(u.c)({OrbitControls:p.a});var m=a(7),h=a(43);function f(e){var t=e.background,a=void 0!==t&&t,r=Object(u.f)(),o=r.gl,c=r.scene,i=Object(u.e)(h.a,[["px.hdr","nx.hdr","py.hdr","ny.hdr","pz.hdr","nz.hdr"]],function(e){e.setDataType(l.UnsignedByteType),e.setPath("/pisaHDR/")}),s=Object(m.a)(i,1)[0];return Object(n.useEffect)(function(){var e=new l.PMREMGenerator(o);e.compileEquirectangularShader();var t=e.fromCubemap(s);return s.dispose(),e.dispose(),a&&(c.background=t.texture),c.environment=t.texture,function(){return c.environment=c.background=null}},[s]),null}var b=a(39),g=a(40);function E(e){var t=e.stop,a=void 0===t?.3:t,o=e.color,c=void 0===o?"black":o,i=e.opacity,u=void 0===i?.9:i,p=Object(s.a)(e,["stop","color","opacity"]),d=Object(n.useMemo)(function(){var e=document.createElement("canvas");e.width=128,e.height=128;var t=e.getContext("2d"),n=t.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);return n.addColorStop(a,new l.Color(c).getStyle()),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),e},[u]);return r.a.createElement("mesh",p,r.a.createElement("planeBufferGeometry",{attach:"geometry",args:[1,1]}),r.a.createElement("meshBasicMaterial",{attach:"material",transparent:!0,opacity:u},r.a.createElement("canvasTexture",{attach:"map",args:[d]})))}function O(e){var t=Object(n.useRef)(),a=Object(u.e)(l.TextureLoader,"/flakes.png"),o=Object(u.e)(b.a,"/suzanne-draco.glb",function(e){var t=new g.a;t.setDecoderPath("/draco-gltf/"),e.setDRACOLoader(t)}).nodes,c=Object(n.useState)(!1),i=Object(m.a)(c,2),s=i[0],p=i[1];return Object(n.useEffect)(function(){document.body.style.cursor=s?"pointer":"auto"},[s]),r.a.createElement("group",Object.assign({ref:t},e,{dispose:null}),r.a.createElement("mesh",{scale:[1.7,1.7,1.7],position:[0,-.75,0],geometry:o.Suzanne.geometry,rotation:[-.61,0,0],onPointerOver:function(){return p(!0)},onPointerOut:function(){return p(!1)}},r.a.createElement("meshStandardMaterial",{attach:"material",metalness:.5,roughness:.4,color:s?"darkred":"black",normalMap:a,normalScale:[.5,.5],"normalMap-wrapS":l.RepeatWrapping,"normalMap-wrapT":l.RepeatWrapping,"normalMap-repeat":[40,40]})),r.a.createElement(E,{renderOrder:2,position:[0,-1.5,-.1],scale:[4,3,1],rotation:[-Math.PI/2,0,0]}),r.a.createElement(E,{renderOrder:1,stop:.5,opacity:.6,position:[0,-1.5001,1.5],scale:[2.6,1.5,1],rotation:[-Math.PI/2,0,0]}))}function v(e){var t=Object(u.e)(l.TextureLoader,"/flakes.png"),a=Object(n.useMemo)(function(){var e=t.clone(!0);return e.needsUpdate=!0,e},[t]),o=Object(n.useState)(!1),c=Object(m.a)(o,2),i=c[0],s=c[1];return Object(n.useEffect)(function(){document.body.style.cursor=i?"pointer":"auto"},[i]),r.a.createElement("group",e,r.a.createElement("mesh",{onPointerOver:function(){return s(!0)},onPointerOut:function(){return s(!1)}},r.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[1.5,64,64]}),r.a.createElement("meshPhysicalMaterial",{attach:"material",clearcoat:1,clearcoatRoughness:0,metalness:.9,roughness:.1,color:i?"red":"blue",normalMap:a,normalScale:[.3,.3],"normalMap-wrapS":l.RepeatWrapping,"normalMap-wrapT":l.RepeatWrapping,"normalMap-repeat":[20,20]})),r.a.createElement(E,{position:[0,-1.5,0],scale:[4,4,1],rotation:[-Math.PI/2,0,0]}))}var j=a(18),w=a(12),y=a(15);function M(){var e=Object(u.f)(),t=e.gl,a=e.scene,r=e.camera,o=e.size,c=Object(u.e)(y.h),i=Object(n.useMemo)(function(){var e=new y.c(t);e.addPass(new y.f(a,r));var n=Object(j.a)(y.g,Object(w.a)(c));n.colorEdgesMaterial.setEdgeDetectionThreshold(.1);var o=new y.b({blendFunction:y.a.SCREEN,kernelSize:y.e.HUGE,luminanceThreshold:.25,height:600}),i=new y.d(r,n,o);return i.renderToScreen=!0,e.addPass(i),e},[]);return Object(n.useEffect)(function(){i.setSize(o.width,o.height)},[o]),Object(u.d)(function(e,t){return i.render(t)},1)}function P(){return r.a.createElement(u.a,{concurrent:!0,pixelRatio:window.devicePixelRatio,camera:{position:[0,0,6.5]},gl:{antialias:!1},onCreated:function(e){var t=e.gl,a=e.scene;t.toneMapping=l.ACESFilmicToneMapping,t.outputEncoding=l.sRGBEncoding,a.background=new l.Color("#373737")}},r.a.createElement("pointLight",{intensity:1,position:[0,10,10]}),r.a.createElement(E,{renderOrder:10,color:"white",stop:.1,scale:[8,8,1],position:[0,-1.49,10],rotation:[-Math.PI/2,0,0]}),r.a.createElement(d,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement(u.b,{center:!0},"help me...")},r.a.createElement(f,null),r.a.createElement(v,{position:[-2,0,-1]}),r.a.createElement(O,{position:[2,0,1],rotation:[0,-.8,0],onClick:function(){return window.appHistory.push("/page2")}}),r.a.createElement(M,null)))}var S=function(){return r.a.createElement("div",null,"About")};function R(){return r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/about",component:S}),r.a.createElement(i.a,{path:"/",exact:!0,component:P})))}var k=a(14),x=Object(k.a)({});c.a.render(r.a.createElement(i.b,{history:x},r.a.createElement(i.a,{component:function(e){var t=e.history;return window.appHistory=t,r.a.createElement(R,null)}})),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.18f33c06.chunk.js.map