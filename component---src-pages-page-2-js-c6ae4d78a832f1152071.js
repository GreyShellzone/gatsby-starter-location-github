(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(e,t,a){"use strict";a.r(t),a(127);var n=a(33),l=a.n(n),r=a(66),o=a.n(r),i=(a(67),a(125),a(259),a(126),a(1)),c=a.n(i),u=a(225),s=a(221),g=a(231),d=function(e){return c.a.createElement("div",{style:{padding:"1em",margin:"1em",border:"thin solid blue"}},c.a.createElement("h2",null,e.name||e.login),c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/"+e.login},"https://github.com/"+e.login),c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/"+e.login},c.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/"+e.databaseId+"?s=460&v=4",alt:"Avatar de "+(e.name||e.login)})),e.bio&&c.a.createElement("p",null,e.bio),c.a.createElement("dl",null,c.a.createElement("dt",null,"Location"),c.a.createElement("dd",null,e.location),e.websiteUrl&&c.a.createElement("span",null,c.a.createElement("dt",null,"Site web"),c.a.createElement("dd",null,e.websiteUrl)),c.a.createElement("dt",null,"Créé"),c.a.createElement("dd",null,e.createdAt),e.starredRepositories&&e.starredRepositories.edges.length>0&&c.a.createElement("span",null,c.a.createElement("dt",null,"Étoiles"),c.a.createElement("dd",null,e.starredRepositories.edges.length," dépots")),e.repositoriesContributedTo&&e.repositoriesContributedTo.edges.length>0&&c.a.createElement("span",null,c.a.createElement("dt",null,"Contribué à"),c.a.createElement("dd",null,e.repositoriesContributedTo.edges.length," dépots"),e.languages&&c.a.createElement("span",null,c.a.createElement("dt",null,"Langages"),c.a.createElement("dd",null,e.languages)))),e.isHireable&&c.a.createElement("p",null,"Disponible pour travailler"))};a.d(t,"query",function(){return b});var m=function(e,t){return e[1]>t[1]?1:e[1]<t[1]?-1:0},p=function(e){if(!e.repositoriesContributedTo||!e.repositoriesContributedTo.edges||!e.repositoriesContributedTo.edges.length)return e;var t={};e.repositoriesContributedTo.edges.forEach(function(e){var a=e.node,n=a&&a.primaryLanguage&&a.primaryLanguage.name;n&&(t[n]||(t[n]=0),++t[n])});var a,n=[];for(a in t)n.push([a,t[a]]);var l=n.sort(m).reverse(),r=l.map(function(e){return e[0]+" ("+e[1]+")"}).join(", ");return Object.assign({},e,{languages:r,languagesImp:l})},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={filter:!1,onlyAvailable:!1},a.click=a.click.bind(o()(o()(a))),a.clickAvailable=a.clickAvailable.bind(o()(o()(a))),a}l()(t,e);var a=t.prototype;return a.clickAvailable=function(e){this.setState({onlyAvailable:!this.state.onlyAvailable})},a.click=function(e){var t="Tous"!==e.target.dataset.key&&e.target.dataset.key;this.setState({filter:t})},a.render=function(){var e=this,t=this.props.data.allDataJson.edges[0].node.search.edges.filter(function(e){return e.node&&e.node.login}).map(function(e){return e.node}).map(p),a={};t.forEach(function(e){e.languagesImp&&e.languagesImp.length&&e.languagesImp.forEach(function(e){a[e[0]]||(a[e[0]]=0),a[e[0]]+=e[1]||0})});var n,l=t.filter(function(t){if(!e.state.filter)return!0;var a=!1;return!!t.languagesImp&&(t.languagesImp.forEach(function(t){t[0]===e.state.filter&&(a=!0)}),a)}).filter(function(t){return!e.state.onlyAvailable||t.isHireable}),r=[["Tous",999]];for(n in a)r.push([n,a[n]]);var o=r.sort(m).reverse();return c.a.createElement(g.a,null,c.a.createElement("h1",null,c.a.createElement(u.a,{id:"welcome2"})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.a,{to:"/"},c.a.createElement(u.a,{id:"goback"}))),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/",lng:"fr"},"francais, accueil")),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/",lng:"en"},"english, front"))),c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.clickAvailable},"Dispo? ",this.state.onlyAvailable?"OUI":"Peu importe")),c.a.createElement("div",null,o.map(function(t){return c.a.createElement("button",{className:"btn btn-primary",type:"button","data-key":t[0],onClick:e.click,key:t[0]},t[0]," (",t[1],")")})),c.a.createElement("div",null,l.map(function(e){return c.a.createElement(d,Object.assign({key:e.id},e))}))))},t}(i.Component),b=(t.default=Object(s.c)(f),"2340460653")},213:function(e,t,a){var n=a(233).concat(a(232));e.exports={localeData:n,languages:[{value:"en",text:"English"},{value:"fr",text:"French"}]}},218:function(e,t){(function(t){e.exports={pathPrefix:"/gatsby-starter-location-github",siteMetadata:{language:{fallback:"en"},title:"Gatsby Default Starter"},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-sass",options:{precision:8}},"gatsby-transformer-json",{resolve:"gatsby-source-filesystem",options:{name:"data",path:t+"/src/data/"}}]}}).call(this,"/")},221:function(e,t,a){"use strict";a(67);var n=a(219),l=a.n(n),r=a(1),o=a.n(r),i=a(0),c=a.n(i),u=a(220),s=function(e,t){var a=e.to,n=e.children,r=e.lng,i=l()(e,["to","children","lng"]),c=t.language,s=c.locale,g=r?"/"+r+a:s?"/"+c.locale+a:""+a;return o.a.createElement(u.a,Object.assign({to:g},i),n)};s.propTypes={to:c.a.string.isRequired,children:c.a.node.isRequired},s.contextTypes={language:c.a.object};var g=s,d=a(33),m=a.n(d),p=a(225),f=a(213),b=a(218).siteMetadata.language.fallback;Object(p.c)(f.localeData);var h=function(e){var t=function(t){function n(e){var a;a=t.call(this,e)||this;var n=e.pageContext,l=n.locale,r=n.languages,o=n.originalPath;return a.state={language:{locale:l,languages:r,originalPath:o}},a}m()(n,t);var l=n.prototype;return l.getChildContext=function(){return{language:this.state.language}},l.render=function(){var t=this.state.language.locale||b,n=a(224)("./"+t+".js");return o.a.createElement(p.b,{locale:t,messages:n},o.a.createElement(e,this.props))},n}(r.Component);return t.childContextTypes={language:c.a.object},t};a.d(t,"a",function(){return g}),a.d(t,"c",function(){return h}),a.d(t,"b",function(){return f.languages}),a.d(t,!1,function(){return f.localeData})},222:function(e,t){e.exports={title:"Gatsby Francais",hello:"Bonjour monde",welcome:"Votre nouveau site gatsby vous accueille.",gopage2:"Aller à la Page 2",build:"À votre tour de faire quelque chose de merveilleux.",welcome2:"Voici la Page 2",goback:"Aller à la Page d'accueil"}},223:function(e,t){e.exports={title:"Gatsby English",hello:"Hi people",welcome:"Welcome to your new Gatsby site.",gopage2:"Go to page 2",build:"Now go build something great.",welcome2:"Welcome to page 2",goback:"Go back to the homepage"}},224:function(e,t,a){var n={"./en.js":223,"./fr.js":222,"./index.js":213};function l(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=224},234:function(e,t){},235:function(e,t){},236:function(e,t){},259:function(e,t,a){var n=a(17).f,l=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in l||a(16)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-page-2-js-c6ae4d78a832f1152071.js.map