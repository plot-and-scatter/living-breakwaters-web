(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Pv1Z:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),s=a("1Yd/"),l=a("xcu8"),i=function(e){var t=e.imageSrc,a=e.title,r=e.lead,s=e.intro;return n.a.createElement("div",{className:"StoryHeader"},n.a.createElement(l.a,{bgOpacity:.3,bgImage:t,short:!0},n.a.createElement("a",{id:"intro"}),n.a.createElement("div",{className:"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2"},n.a.createElement("p",{className:"Cutout mb-5"},a)),n.a.createElement("div",{className:"w-100"}),n.a.createElement("div",{className:"lead col-12 col-md-8 offset-md-1 col-lg-6 offset-lg-2",style:{textShadow:"0px 1px #000"}},r)),n.a.createElement("div",{className:"Intro row mt-5"},n.a.createElement("div",{className:"col-12 col-md-9 col-lg-6 offset-md-1 offset-lg-2"},n.a.createElement("p",null,s))))},c=a("PSXS"),o=a("HHI+"),u=function(){var e=Object(c.b)().activeLayers,t=Object.keys(e).filter((function(t){return!0===e[t]}));return n.a.createElement("div",{className:"LayerLegend",style:{border:"solid 1px #eee",fontSize:"0.8rem",padding:"0.5rem"}},t.map((function(e){return n.a.createElement(o.a,{key:e,layerId:e})})))},m=a("knjR"),d=function(e){var t=e.mapText,a=e.themeKey,s=e.storyRef;Object(r.useEffect)((function(){return gsap.registerPlugin(ScrollTrigger)}),[]);var l=Object(r.useState)(),i=l[0],o=l[1],d=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=d.current;gsap.fromTo(e.querySelector(".MapText"),{autoAlpha:1},{autoAlpha:1,scrollTrigger:{trigger:e.querySelector(".MapTableau"),start:"top top",end:"bottom center",onEnter:function(){o(a)}}})}),[]),Object(r.useEffect)((function(){gsap.registerPlugin(ScrollTrigger);var e=s.current;gsap.fromTo(e.querySelector(".MapText"),{autoAlpha:1},{autoAlpha:1,scrollTrigger:{trigger:e.querySelector(".MapTableau"),endTrigger:e.querySelector(".MapText"),start:"top 80px",end:"bottom center",pin:e.querySelector(".MapTableau"),onUpdate:function(e){if(d.current){var t=e.progress;d.current.scrollTop=t*(d.current.scrollHeight-d.current.offsetHeight)}}}})}),[]),n.a.createElement("div",{className:"StoryMap row my-5",id:"map"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"MapTableau"},n.a.createElement(c.a,null,n.a.createElement("div",{style:{pointerEvents:"none",borderRadius:0,border:"solid 1px #333",height:"502px"}},n.a.createElement(m.a,{colWidth:12,themeKey:i,lockTheme:!0,mapHeightOverride:500})),n.a.createElement("div",{className:"row mt-3"},n.a.createElement("div",{className:"col-4 col-sm-2 offset-sm-1"},n.a.createElement(u,null)),n.a.createElement("div",{ref:d,className:"MapText col-8 col-sm-6 offset-sm-1",style:{backgroundColor:"#fff",height:"30vw",overflowY:"hidden"}},t))))))},p=a("Hp/o"),f=function(){var e=Object(p.b)(),t=e.showRain,a=e.toggleRain,r=e.showSurge,s=e.toggleSurge;return n.a.createElement("div",{className:"NarrativeToggleButtons"},n.a.createElement("button",{className:"w-100 btn btn-sm "+(t?"btn-primary":"btn-outline-primary"),onClick:function(){return a()}},n.a.createElement("i",{className:"fas fa-cloud-showers-heavy mr-2"}),t?"Stop rain":"Start rain"),n.a.createElement("br",null),n.a.createElement("button",{className:"w-100 btn btn-sm "+(r?"btn-primary":"btn-outline-primary")+" mt-1",onClick:function(){return s()}},n.a.createElement("i",{className:"fas fa-wind mr-2"}),r?"Stop storm":"Start storm"))},g=a("6Cl/"),v=function(e){var t=e.activeNarrative,a=e.narrativeText,s=e.storyRef;Object(r.useEffect)((function(){return gsap.registerPlugin(ScrollTrigger)}),[]);var l=Object(p.b)().setNarrativeStage,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=s.current;gsap.fromTo(e.querySelector(".NarrText"),{autoAlpha:1},{autoAlpha:1,scrollTrigger:{trigger:e.querySelector(".NarrTableau"),endTrigger:e.querySelector(".NarrText"),start:"top 80px",end:"bottom center",pin:e.querySelector(".NarrTableau"),onUpdate:function(e){if(i.current){var t=e.progress;i.current.scrollTop=t*(i.current.scrollHeight-i.current.offsetHeight),l(t<1/3?0:t<2/3?1:2)}}}})}),[]),n.a.createElement("div",{className:"StoryNarrative row my-5"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"NarrTableau",style:{backgroundColor:"#fff"}},n.a.createElement(g.a,{activeNarrative:t}),n.a.createElement("div",{className:"row mt-3"},n.a.createElement("div",{className:"col-4 col-sm-2 offset-sm-1"},n.a.createElement("div",{className:"LayerLegend",style:{border:"solid 1px #eee",fontSize:"0.8rem",padding:"0.5rem"}},n.a.createElement(f,null))),n.a.createElement("div",{ref:i,className:"NarrText col-sm-6 offset-sm-1 col-8",style:{backgroundColor:"#fff",height:"30vw",overflowY:"hidden"}},a)))))},h=a("NEEG"),b=function(){return n.a.createElement("div",{className:"row my-5",style:{height:"500px"}},n.a.createElement("div",{className:"col-8 offset-2",id:"resources"},n.a.createElement(h.a,null,"Resources")))};a("bYKu"),t.a=function(e){var t=Object(r.useRef)(null);return n.a.createElement("div",{className:"Story",ref:t},n.a.createElement(s.a,{title:"Story"}),n.a.createElement(i,e),n.a.createElement(d,Object.assign({storyRef:t},e)),n.a.createElement(v,Object.assign({storyRef:t},e)),n.a.createElement(b,null))}},QPE3:function(e,t,a){e.exports={brandBackground:"#142328"}},bYKu:function(e,t,a){},ft6R:function(e,t,a){},wBhl:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),s=a("BKKw"),l=a("4XLq"),i=a("Pv1Z"),c=(a("ft6R"),a("zUSq")),o=a.n(c);t.default=function(e){var t=e.data.site.siteMetadata.title;return n.a.createElement(l.a,{title:t},n.a.createElement(i.a,{title:"Utility Systems",imageSrc:o.a,lead:n.a.createElement(n.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu lectus, venenatis vel felis at, auctor dignissim neque. Nam ut turpis quis lorem faucibus placerat. Integer sed feugiat tellus, a tristique mi. Morbi mauris ligula, consectetur et felis quis, vehicula cursus nibh. In eget tellus nulla. Suspendisse nec ante orci. Nulla interdum nisi nec sem fermentum commodo. Curabitur accumsan ligula a leo facilisis volutpat. Sed vehicula gravida iaculis. Nulla fermentum placerat eros, non volutpat magna condimentum vel. Fusce fermentum imperdiet risus, id suscipit ante hendrerit in. Praesent dapibus volutpat dictum. Donec lobortis est et condimentum pellentesque. Suspendisse non placerat leo, quis pulvinar lorem."),intro:n.a.createElement(n.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu lectus, venenatis vel felis at, auctor dignissim neque. Nam ut turpis quis lorem faucibus placerat. Integer sed feugiat tellus, a tristique mi. Morbi mauris ligula, consectetur et felis quis, vehicula cursus nibh. In eget tellus nulla. Suspendisse nec ante orci. Nulla interdum nisi nec sem fermentum commodo. Curabitur accumsan ligula a leo facilisis volutpat. Sed vehicula gravida iaculis. Nulla fermentum placerat eros, non volutpat magna condimentum vel. Fusce fermentum imperdiet risus, id suscipit ante hendrerit in. Praesent dapibus volutpat dictum. Donec lobortis est et condimentum pellentesque. Suspendisse non placerat leo, quis pulvinar lorem."),narrativeText:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Critical infrastructure face high levels of exposure to meteorological hazards such as storm surges. These hazards are expected to increase in intensity and frequency due to climate change negative impacts on electricity networks.1 Disruption to electricity networks causes blackouts at power plants which in turn disrupt the operations of key industries, such as manufacturing and agriculture, and support services such as wastewater management systems.2"),n.a.createElement("p",null,"Wastewater treatment plants are critical conveyance systems of grey and black water that protect human health and environmental safety. In coastal communities, treatment plants may be constructed at low elevations near the coastline to facilitate the movement of wastewater using gravity flow. This minimizes the need for wastewater pumping stations (Hummel et al., 2018).3 Location of wastewater pumping stations near the coast also facilitates the discharge of wastewater into the ocean. However, locating wastewater plants near the coast poses several risks."," "),n.a.createElement("p",null,"Firstly, wastewater plants may be susceptible to flooding and silting as a result of storm surges that may disrupt mechanical and electoral components. Secondly, storm surge events usually trigger power failure hence wastewater treatment plants may be rendered inoperable during a coastal disaster. A plausible solution to this problem could be the construction of wastewater treatment plants above the predicted storm surge level.3 This will, however, add to the cost of wastewater conveyance.4")),themeKey:"utilitySystems",activeNarrative:s.a.FoodSecurity,path:"utility-systems"}))}},xcu8:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);a("QPE3");t.a=function(e){var t=e.children,a=e.bgImage,r={};a&&(r.backgroundImage="url("+a+")"),e.short&&(r.minHeight="100vh");var s=e.bgColorRGB||"rgba(0, 0, 0)",l=e.bgOpacity||.5,i=s.replace(")",", "+l+")"),c=e.textDark?"text-dark":"text-light",o="py-"+(e.short?4:5);return n.a.createElement("div",{className:"BannerRow",style:r},n.a.createElement("div",{className:"row "+o+" "+c,style:{backgroundColor:i,minHeight:e.short?"100vh":void 0}},n.a.createElement("div",{className:"col-12 "+o,style:{marginTop:e.short?"100px":void 0}},n.a.createElement("div",{className:"my-0 "+o+" row"},t))))}},zUSq:function(e,t,a){e.exports=a.p+"static/aditya-chinchure-2YRocbpCVeY-unsplash-b9f22454cd2db6360588ca065aa99955.jpg"}}]);
//# sourceMappingURL=component---src-pages-utility-systems-tsx-2f8c8c6b0163c7f03ae7.js.map