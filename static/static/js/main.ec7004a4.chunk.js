(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(30),r=a.n(l),i=(a(39),a(8)),s=a(13),o=a(1),u=a(2),m=a(4),p=a(3),d=a(5),h=(a(40),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"nav-links"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeA"},"TypeA")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeB"},"TypeB")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeC"},"TypeC")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeD"},"TypeD")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeE"},"TypeE")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeF"},"TypeF")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeG"},"TypeG")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeH"},"TypeH")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeI"},"TypeI")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeJ"},"TypeJ")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeK"},"TypeK")),c.a.createElement("li",null,c.a.createElement(i.b,{activeClassName:"selected",className:"nav-link",exact:!0,to:"/typeL"},"TypeL"))))),c.a.createElement("div",null,this.props.children),c.a.createElement("div",{className:"footer"},c.a.createElement("p",null," @ 2020 Copyright Sufan Huang")))}}]),t}(n.Component)),v=a(6),y=a.n(v),E=a(33),f=a.n(E),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[],currentlySelectedType:""},a.handleClick=function(e){var t=e.type;a.setState({currentlySelectedType:t})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.currentlySelectedType,l=f.a.shuffle(a),r=a.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," Total Count ",r," "),c.a.createElement("div",{className:"container"},l.map((function(t){return c.a.createElement("div",{key:t.id,className:"item ".concat(n===t.type?"type-selected":""),onClick:function(){return e.handleClick(t)}},c.a.createElement("h5",null,t.type),c.a.createElement("h6",null,t.id))}))))}}]),t}(c.a.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeA"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeA Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeB"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeB Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeC"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeC Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeD"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeD Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeE"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeE Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeF"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeF Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeG"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeG Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeH"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeH Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeI"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeI Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeJ"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeJ Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeK"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeK Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("express_backend").then((function(t){var a=t.data;e.setState({data:a})}))}},{key:"render",value:function(){var e=this.state.data.filter((function(e){return"typeL"===e.type})),t=e.length;return c.a.createElement("div",{className:"app"},c.a.createElement("h3",null," TypeL Count ",t," "),c.a.createElement("div",{className:"container"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("h5",null,e.type),c.a.createElement("h6",null,e.id))}))))}}]),t}(c.a.Component);var M=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(h,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:b}),c.a.createElement(s.a,{exact:!0,path:"/typeA",component:k}),c.a.createElement(s.a,{exact:!0,path:"/typeB",component:j}),c.a.createElement(s.a,{exact:!0,path:"/typeC",component:O}),c.a.createElement(s.a,{exact:!0,path:"/typeD",component:N}),c.a.createElement(s.a,{exact:!0,path:"/typeE",component:C}),c.a.createElement(s.a,{exact:!0,path:"/typeF",component:g}),c.a.createElement(s.a,{exact:!0,path:"/typeG",component:x}),c.a.createElement(s.a,{exact:!0,path:"/typeH",component:T}),c.a.createElement(s.a,{exact:!0,path:"/typeI",component:w}),c.a.createElement(s.a,{exact:!0,path:"/typeJ",component:A}),c.a.createElement(s.a,{exact:!0,path:"/typeK",component:D}),c.a.createElement(s.a,{exact:!0,path:"/typeL",component:S})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.ec7004a4.chunk.js.map