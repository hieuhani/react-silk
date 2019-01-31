(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{207:function(e,t,r){"use strict";r.r(t),r.d(t,"graphql",function(){return f}),r.d(t,"StaticQueryContext",function(){return g}),r.d(t,"StaticQuery",function(){return b});var n=r(0),a=r.n(n),o=r(3),i=r.n(o),c=r(213),l=r.n(c);r.d(t,"Link",function(){return l.a}),r.d(t,"withPrefix",function(){return c.withPrefix}),r.d(t,"navigate",function(){return c.navigate}),r.d(t,"push",function(){return c.push}),r.d(t,"replace",function(){return c.replace}),r.d(t,"navigateTo",function(){return c.navigateTo});var s=r(244),d=r.n(s);r.d(t,"PageRenderer",function(){return d.a});var u=r(70);r.d(t,"parsePath",function(){return u.a});var g=a.a.createContext({}),b=function(e){return a.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},211:function(e,t,r){"use strict";var n=r(299),a=r(0),o=r.n(a),i=r(300),c=r.n(i),l=r(207),s=function(e){var t=e.description,r=e.lang,a=e.meta,i=e.keywords,s=void 0===i?[]:i,u=e.title;return o.a.createElement(l.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:r},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:u},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(a)})},data:n})};s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var d="1025518380"},212:function(e,t,r){"use strict";var n=r(257),a=r(0),o=r.n(a),i=r(3),c=r.n(i),l=r(207),s=r(10),d=r(214),u=r(209),g=u.a.nav.attrs({className:"container"}).withConfig({displayName:"header__Nav",componentId:"dlac5w-0"})(["display:flex;align-items:center;"]),b=u.a.ul.withConfig({displayName:"header__NavItems",componentId:"dlac5w-1"})(["list-style:none;display:flex;flex-direction:row;margin-left:auto;margin-bottom:0;padding:0;"]),f=u.a.li.withConfig({displayName:"header__NavItem",componentId:"dlac5w-2"})(["a{padding:1rem;display:block;color:#757575;:hover{text-decoration:none;color:#111;}}"]),m=Object(u.a)(l.Link).withConfig({displayName:"header__Brand",componentId:"dlac5w-3"})([":hover{text-decoration:none;}"]),p=s.a.create({brand:{color:"#111"}}),y=function(e){var t=e.siteTitle;return o.a.createElement("div",null,o.a.createElement(g,null,o.a.createElement(m,{to:"/"},o.a.createElement(d.d,{style:p.brand},t)),o.a.createElement(b,null,o.a.createElement(f,null,o.a.createElement(l.Link,{to:"/components/text"},"Components")),o.a.createElement(f,null,o.a.createElement(l.Link,{to:"/showcase"},"Showcase")),o.a.createElement(f,null,o.a.createElement("a",{href:"https://github.com/youngtailors/react-silk"},"Github")))))};y.defaultProps={siteTitle:""};var h=y,k=u.a.footer.attrs({className:"container-fluid"}).withConfig({displayName:"Footer__Wrapper",componentId:"sc-2uq88x-0"})(["padding:2rem 0;border-top:1px solid #dfdfdf;margin-top:2rem;text-align:center;"]),C=function(){return a.createElement(k,null,"© 2019 Young Tailors")},w=(r(297),r(298),function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:"container"},t),o.a.createElement(C,null))},data:n})});w.propTypes={children:c.a.node.isRequired};t.a=w},214:function(e,t,r){"use strict";r.d(t,"j",function(){return m}),r.d(t,"b",function(){return p}),r.d(t,"c",function(){return y}),r.d(t,"d",function(){return h}),r.d(t,"e",function(){return k}),r.d(t,"f",function(){return C}),r.d(t,"g",function(){return w}),r.d(t,"a",function(){return O}),r.d(t,"i",function(){return P}),r.d(t,"h",function(){return q});r(261),r(54);var n=r(0),a=r.n(n),o=r(308),i=r(10),c=r(51),l=r(220),s=r(229),d=r(224),u=r(215),g=r(242);function b(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r}var f=i.a.create({baseText:{marginBottom:10},text:{fontSize:16},h1:{fontSize:30},h2:{fontSize:28},h3:{fontSize:26},h4:{fontSize:24},h5:{fontSize:22},h6:{fontSize:20}}),m=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[f.text,t]},r))},p=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[f.baseText,f.h1,t]},r))},y=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[f.baseText,f.h2,t]},r))},h=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[f.baseText,f.h3,t]},r))},k=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[f.baseText,f.h4,t]},r))},C=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[f.baseText,f.h5,t]},r))},w=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[f.baseText,f.h6,t]},r))},x={primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#f8f9fa",dark:"#343a40",transparent:"transparent",white:"#FFF",black:"#555",gray:"#a6a6a6",smokeWhite:"#f4f4f4"},v=i.a.create({primaryText:{color:x.primary},secondaryText:{color:x.secondary},successText:{color:x.success},dangerText:{color:x.danger},warningText:{color:x.warning},infoText:{color:x.info},lightText:{color:x.light},darkText:{color:x.dark},primaryBackground:{backgroundColor:x.primary},secondaryBackground:{backgroundColor:x.secondary},successBackground:{backgroundColor:x.success},dangerBackground:{backgroundColor:x.danger},warningBackground:{backgroundColor:x.warning},infoBackground:{backgroundColor:x.info},lightBackground:{backgroundColor:x.light},darkBackground:{backgroundColor:x.dark},grayBackground:{backgroundColor:x.gray},primaryBorder:{borderColor:x.primary},secondaryBorder:{borderColor:x.secondary},successBorder:{borderColor:x.success},dangerBorder:{borderColor:x.danger},warningBorder:{borderColor:x.warning},infoBorder:{borderColor:x.info},lightBorder:{borderColor:x.light},darkBorder:{borderColor:x.dark},grayBorder:{borderColor:x.gray}}),E=i.a.create({containerNatural:{alignSelf:"flex-start"},button:{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",paddingVertical:10,paddingHorizontal:15},disabledButton:{opacity:.6},primaryButton:{backgroundColor:x.primary,borderColor:x.primary},secondaryButton:{backgroundColor:x.secondary,borderColor:x.secondary},successButton:{backgroundColor:x.success,borderColor:x.success},dangerButton:{backgroundColor:x.danger,borderColor:x.danger},warningButton:{backgroundColor:x.warning,borderColor:x.warning},infoButton:{backgroundColor:x.info,borderColor:x.info},lightButton:{backgroundColor:x.light,borderColor:x.light},darkButton:{backgroundColor:x.dark,borderColor:x.dark},linkButton:{backgroundColor:x.transparent,borderColor:x.transparent},primaryGhostButton:{borderColor:x.primary},secondaryGhostButton:{borderColor:x.secondary},successGhostButton:{borderColor:x.success},dangerGhostButton:{borderColor:x.danger},warningGhostButton:{borderColor:x.warning},infoGhostButton:{borderColor:x.info},lightGhostButton:{borderColor:x.light},darkGhostButton:{borderColor:x.dark},linkGhostButton:{borderColor:x.transparent},lightText:{color:x.white},darkText:{color:x.black},buttonBorder:{borderWidth:1}}),B=["light","link"],O=function(e){var t=e.children,r=e.onPress,a=e.variant,o=e.disabled,i=e.block,d=e.ghost,u=[E.buttonBorder,E[a+(d?"Ghost":"")+"Button"]],g=[],b=function(e){return!~B.indexOf(e)}(a);d&&b?g.push(v[a+"Text"]):g.push(b?E.lightText:E.darkText),o&&u.push(E.disabledButton);var f=Object(n.createElement)(c.a,{style:[E.button].concat(u)},Object(n.createElement)(l.a,{style:g},t)),m=[];return i||m.push(E.containerNatural),r&&!o?Object(n.createElement)(s.a,{onPress:r,style:m},f):Object(n.createElement)(c.a,{style:m},f)};O.defaultProps={variant:"primary",ghost:!1,disabled:!1,block:!1};var j=i.a.create({container:{position:"absolute",top:0,left:0,right:0,bottom:0}}),T=function(e){return a.a.createElement(d.a,{onPress:e.onPress},a.a.createElement(c.a,{style:j.container}))},S=i.a.create({container:{position:"absolute",top:0,left:0,bottom:0,right:0,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,.8)"},modal:{backgroundColor:x.white},body:{padding:15}}),P=function(e){var t=e.toggle,r=e.isOpen,a=e.children,o=e.style;if(!r)return null;if("web"!==u.a.OS)throw new Error("This component does not support modal on this native platform yet");return Object(n.createElement)("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:2}},Object(n.createElement)(c.a,{style:S.container},Object(n.createElement)(T,{onPress:t}),Object(n.createElement)(c.a,{style:[S.modal,o]},Object(n.createElement)(c.a,{style:S.body},a))))},G=i.a.create({container:{marginBottom:10},label:{marginBottom:5},textInput:{borderColor:x.gray,borderWidth:1,paddingVertical:5,paddingHorizontal:8},disabledView:{paddingVertical:5,paddingHorizontal:8,backgroundColor:x.smokeWhite,borderWidth:1,borderColor:x.smokeWhite,height:33},errorBorder:{borderColor:x.danger},errorMessage:{color:x.danger,fontSize:14}}),q=function(e){var t=e.label,r=e.placeholder,a=e.errorMessage,o=e.disabled,i=e.onChange,l=e.value,s=[];return a&&s.push(G.errorBorder),Object(n.createElement)(c.a,{style:G.container},t&&Object(n.createElement)(m,{style:G.label},t),o?Object(n.createElement)(c.a,{style:[G.disabledView].concat(s)},Object(n.createElement)(m,null,l||r)):Object(n.createElement)(g.a,{editable:!0,maxLength:40,style:[G.textInput].concat(s),underlineColorAndroid:"transparent",placeholder:r,onChangeText:i}),a&&Object(n.createElement)(m,{style:G.errorMessage},a))};q.defaultProps={disabled:!1};var I=i.a.create({container:{flexDirection:"row",alignItems:"center",marginBottom:5},indicator:{width:20,height:20,borderWidth:1,borderColor:x.transparent,backgroundColor:x.transparent,marginRight:5},circleIndicator:{borderRadius:10},disabledText:{color:x.gray}}),N=function(e){var t=e.disabled,r=e.onChange,a=e.checked,o=e.children,i=e.variant,l=e.square,d=[I.indicator],u=[];l||d.push(I.circleIndicator),t?(u.push(I.disabledText),a?d.push(v.grayBackground):d.push(v.grayBorder)):a?d.push(v[i+"Background"]):d.push(v[i+"Border"]);var g=o;return"string"==typeof o&&(g=Object(n.createElement)(m,{style:u},o)),t?Object(n.createElement)(c.a,{style:I.container},Object(n.createElement)(c.a,{style:d}),g):Object(n.createElement)(s.a,{style:I.container,onPress:r},Object(n.createElement)(c.a,{style:d}),g)};N.defaultProps={disabled:!1,variant:"primary",checked:!1,square:!0}},244:function(e,t,r){var n;e.exports=(n=r(260))&&n.default||n},257:function(e){e.exports={data:{site:{siteMetadata:{title:"React Silk"}}}}},260:function(e,t,r){"use strict";r.r(t);r(54);var n=r(0),a=r.n(n),o=r(3),i=r.n(o),c=r(97),l=r(2),s=function(e){var t=e.location,r=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:r},r.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},297:function(e,t,r){},298:function(e,t,r){},299:function(e){e.exports={data:{site:{siteMetadata:{title:"React Silk",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@youngtailors"}}}}}}]);
//# sourceMappingURL=1-8b58a15a1083ee9cbff0.js.map