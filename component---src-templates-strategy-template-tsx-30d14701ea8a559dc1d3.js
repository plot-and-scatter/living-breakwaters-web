(window.webpackJsonp=window.webpackJsonp||[]).push([[17,15],{"+W6F":function(e,t,a){"use strict";a.r(t);a("XfO3"),a("HEwt"),a("a1Th"),a("Btvt"),a("rE2o"),a("ioFf"),a("rGqo"),a("Z2Ku"),a("L9s1");var r=a("q1tI"),l=a.n(r),n=a("4XLq"),c=a("1Yd/"),s=a("Wbzz"),o=(a("Or85"),function(e){var t=e.strategy,a=t.frontmatter.strategyTypes,r=d(a);return l.a.createElement("div",{className:"StrategyCard card border-"+r},l.a.createElement("div",{className:"d-flex card-header bg-"+r},l.a.createElement(s.Link,{to:t.fields.slug,style:{color:"white"}},l.a.createElement("h5",{className:"mb-0"},t.frontmatter.title),l.a.createElement("h6",{className:"mb-0"},l.a.createElement("small",null,a)))),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",null,t.frontmatter.excerpt),l.a.createElement("p",{className:"mb-0 text-right"},l.a.createElement(s.Link,{to:t.fields.slug,className:"btn btn-sm btn-outline-"+r},"Learn more →"))))});a("4qi8");function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"strategyTypes",(function(){return i})),a.d(t,"colorForStrategy",(function(){return d})),a.d(t,"pageQuery",(function(){return u}));var i=["Protect","Accommodate","Retreat","Avoid"],d=function(e){switch(e){case"Protect":return"primary";case"Accommodate":return"warning";case"Retreat":return"danger";case"Avoid":return"info";default:return"secondary"}},u=(t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,s=Object(r.useState)([].concat(i)),u=s[0],E=s[1],p=a.filter((function(e){return u.includes(e.node.frontmatter.strategyTypes)})),f=Object(r.useCallback)((function(e){var t=m(u),a=e.target.value;if(e.target.checked)t.push(a);else{var r=t.indexOf(a);t.splice(r,1)}E(t)}),[u]);Object(r.useEffect)((function(){console.log(u)}),[u]);var g=t.site.siteMetadata.title;return l.a.createElement(n.a,{location:e.location,title:g},l.a.createElement(c.a,{title:"Strategies"}),l.a.createElement("div",{className:"row my-4 align-items-center"},l.a.createElement("div",{className:"col-6"},l.a.createElement("h1",{className:"mb-0"},"Strategies")),l.a.createElement("div",{className:"col-6 text-right"},l.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},l.a.createElement("h5",{className:"text-muted mr-3 mb-0"},"Show strategies:"),i.map((function(e){var t=d(e);return l.a.createElement("div",{key:e,className:"py-1 px-2 form-check form-check-inline border border-"+t+" text-"+t},l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"InlineCheckbox-"+e,value:e,onChange:f,defaultChecked:u.includes(e)}),l.a.createElement("label",{className:"form-check-label",htmlFor:"InlineCheckbox-"+e},e))}))))),l.a.createElement("div",{className:"StrategyCards card-columns"},p.map((function(e,t){var a=e.node;return l.a.createElement(o,{key:t,strategy:a})}))))},"2397110823")},UusB:function(e,t,a){"use strict";a.r(t);var r=a("Wbzz"),l=a("q1tI"),n=a.n(l),c=a("4XLq"),s=a("1Yd/"),o=a("+W6F"),m=function(e){var t=e.active,a=e.label,l=e.strategies,c=t?Object(o.colorForStrategy)(a):"secondary";return n.a.createElement("div",{className:"StrategyDropdown dropdown mr-3"},n.a.createElement("button",{className:"btn dropdown-toggle btn-"+c,type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:{color:"white"}},a),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},l.map((function(e,t){var a=e.node;return n.a.createElement(r.Link,{key:t,className:"dropdown-item",to:a.fields.slug},a.frontmatter.title)}))))},i=(a("4RNd"),function(e){var t=e.currentPost,a=e.strategies;return console.log("strategies",a),console.log(t),n.a.createElement("div",{className:"StrategySelect d-flex"},o.strategyTypes.map((function(e,r){var l=a.filter((function(t){return t.node.frontmatter.strategyTypes===e}));return n.a.createElement(m,{active:t.frontmatter.strategyTypes===e,key:r,label:e,strategies:l})})))});a("s3FD");a.d(t,"pageQuery",(function(){return d}));t.default=function(e){var t=e.data.markdownRemark,a=e.data.site.siteMetadata.title,o=e.pageContext,m=o.previous,d=o.next;console.log(e.data),console.log(t);var u=Object(l.useRef)();Object(l.useEffect)((function(){u.current.click()}),[]);var E=t.frontmatter.strategyTypes;return n.a.createElement(c.a,{location:e.location,title:a},n.a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),n.a.createElement("div",{className:"Strategies"},n.a.createElement("div",{className:"Title row align-items-center"},n.a.createElement("div",{className:"col-4"},n.a.createElement("h1",null,t.frontmatter.title)),n.a.createElement("div",{className:"col-8"},n.a.createElement(i,{currentPost:t,strategies:e.data.allMarkdownRemark.edges}))),n.a.createElement("div",{className:"Post"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"row MoreInfo"},n.a.createElement("div",{className:"Annotation col col-4"},n.a.createElement("div",{className:"Summary "+E+"BG",dangerouslySetInnerHTML:{__html:e.pageContext.subpages.summary}})),n.a.createElement("div",{className:"Illustration col-8"},n.a.createElement("h2",null,"How it works"),n.a.createElement("div",{id:"carouselExampleFade",className:"carousel slide carousel-fade","data-ride":"carousel","data-interval":2e3,ref:u},n.a.createElement("div",{className:"carousel-inner"},e.data.allFile.nodes.map((function(e,t){return n.a.createElement("div",{key:t,className:"carousel-item"+(0===t?" active":"")},n.a.createElement("img",{className:"d-block w-100",src:e.childImageSharp.fluid.src}))}))),n.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleFade",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleFade",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next")))),n.a.createElement("div",{className:"Types col col-4"},n.a.createElement("h2",null,"Types of ",t.frontmatter.title.toLowerCase()),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.pageContext.subpages.types}})),n.a.createElement("div",{className:"Benefits col col-4"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-check mr-2"}),"Benefits"),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.pageContext.subpages.benefits}})),n.a.createElement("div",{className:"Challenges col col-4"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-times mr-2"}),"Challenges"),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.pageContext.subpages.challenges}}))))),n.a.createElement("div",{className:"row BottomBG"},n.a.createElement("div",{className:"col-8"},n.a.createElement("div",{className:"Examples row"},n.a.createElement("div",{className:"ExamplesTitle col-12"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-tools mr-2"})," Example projects")),e.pageContext.subpages.examples&&e.pageContext.subpages.examples.map((function(e,t){return n.a.createElement("div",{className:"col",key:t},n.a.createElement("div",{className:"Example",dangerouslySetInnerHTML:{__html:e}}))})))),n.a.createElement("div",{className:"col Images"},n.a.createElement("div",{className:"row ImagesTitle"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fas fa-images mr-2"})," Gallery")),e.pageContext.subpages.images&&e.pageContext.subpages.images.map((function(e,t){return n.a.createElement("div",{className:"col-12",key:t},n.a.createElement("div",{className:"Image",dangerouslySetInnerHTML:{__html:e}}))}))))),n.a.createElement("hr",{style:{marginBottom:"1rem"}}),n.a.createElement("div",{className:"Citations",dangerouslySetInnerHTML:{__html:t.html}}),n.a.createElement("hr",{style:{marginBottom:"1rem"}}),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,m&&n.a.createElement(r.Link,{to:m.fields.slug,rel:"prev"},"← ",m.frontmatter.title)),n.a.createElement("li",null,d&&n.a.createElement(r.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →")))))};var d="3376531829"}}]);
//# sourceMappingURL=component---src-templates-strategy-template-tsx-30d14701ea8a559dc1d3.js.map