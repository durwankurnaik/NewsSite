(this["webpackJsonpclass-based-comp-app"]=this["webpackJsonpclass-based-comp-app"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(14),r=a.n(s),i=(a(19),a(4)),o=a(5),l=a(7),b=a(6),p=(a(20),a(8)),j=a(0),d=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return document.body.style.background="#f23a56",document.body.style.color="white",Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(p.b,{className:"navbar-brand",to:"/",children:"Florange"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(p.b,{to:"/business",className:"nav-link",children:"Business"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(p.b,{to:"/entertainment",className:"nav-link",children:"Entertainment"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(p.b,{to:"/health",className:"nav-link",children:"Health"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(p.b,{to:"/science",className:"nav-link",children:"Science"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(p.b,{to:"/sports",className:"nav-link",children:"Sports"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(p.b,{to:"/technology",className:"nav-link",children:"Technology"})})]})})]})})}}]),a}(n.Component),u=d,h=a(9),g=a.n(h),m=a(12),x=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.imageUrl,c=e.newsUrl;return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"card bg-dark",style:{width:"18rem"},children:[Object(j.jsx)("img",{src:n,className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body bg-dark text-light",children:[Object(j.jsx)("h5",{className:"card-title",children:t.slice(0,45)===t?t:"".concat(t.slice(0,45),"...")}),Object(j.jsx)("p",{className:"card-text",children:a.slice(0,100)===a?a:"".concat(a.slice(0,90),"...")}),Object(j.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",className:"btn btn-sm btn-primary",children:"Read more"})]})]})})}}]),a}(n.Component),O=x,y=a.p+"static/media/loading-spinner.ffaf389c.gif",v=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"text-center my-4",children:Object(j.jsx)("img",{src:y,alt:"loading"})})}}]),a}(n.Component),f=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handlePrevClick=Object(m.a)(g.a.mark((function t(){var a,n,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),a="https://newsapi.org/v2/top-headlines?country=".concat(e.props.country,"&category=").concat(e.props.category,"&sortBy=popularity&apiKey=1ce45add0b8743919ba3f86a5b9db555&page=").concat(e.state.page-1,"&pageSize=").concat(e.props.pageSize),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,e.setState({page:e.state.page-1,articles:c.articles,loading:!1});case 9:case"end":return t.stop()}}),t)}))),e.handleNextClick=Object(m.a)(g.a.mark((function t(){var a,n,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),a="https://newsapi.org/v2/top-headlines?country=".concat(e.props.country,"&category=").concat(e.props.category,"&sortBy=popularity&apiKey=1ce45add0b8743919ba3f86a5b9db555&page=").concat(e.state.page+1,"&pageSize=").concat(e.props.pageSize),t.next=4,fetch(a);case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,e.setState({page:e.state.page+1,articles:c.articles,loading:!1});case 9:case"end":return t.stop()}}),t)}))),e.state={articles:[],loading:!1,page:1,disableNext:!1,totalResults:0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(g.a.mark((function e(){var t,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&sortBy=popularity&apiKey=1ce45add0b8743919ba3f86a5b9db555&page=1&pageSize=").concat(this.props.pageSize),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,this.setState({articles:n.articles,totalResults:n.totalResults,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return document.title="Florange - Get your daily dose of news for free",Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"my-4 text-center",children:Object(j.jsxs)("strong",{children:["Top headlines - ",this.props.category]})}),this.state.loading&&Object(j.jsx)(v,{}),Object(j.jsx)("div",{className:"row",children:!this.state.loading&&this.state.articles.map((function(e){return Object(j.jsx)("div",{className:"col-md-3 mb-5",children:Object(j.jsx)(O,{title:e.title?e.title:"",description:e.description?e.description:"",imageUrl:e.urlToImage?e.urlToImage:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",newsUrl:e.url})},e.url)}))}),Object(j.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(j.jsx)("button",{disabled:this.state.page<=1,type:"button",className:"btn btn-primary mx-4 my-4",onClick:this.handlePrevClick,children:" \u2190 Previous"}),Object(j.jsx)("button",{disabled:this.state.page+1>Math.ceil(this.state.totalResults/12),type:"button",className:"btn btn-primary mx-4 my-4",onClick:this.handleNextClick,children:"Next \u2192 "})]})]})}}]),a}(n.Component);f.defaultProps={country:"in",category:"general",pageSize:12};var N=f,k=a(2),S=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(p.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(k.c,{children:[Object(j.jsx)(k.a,{exact:!0,path:"/",element:Object(j.jsx)(N,{country:"in",category:"general",pageSize:12},"general")}),Object(j.jsx)(k.a,{exact:!0,path:"/business",element:Object(j.jsx)(N,{country:"in",category:"business",pageSize:12},"business")}),Object(j.jsx)(k.a,{exact:!0,path:"/entertainment",element:Object(j.jsx)(N,{country:"in",category:"entertainment",pageSi:!0,exactze:12},"entertainment")}),Object(j.jsx)(k.a,{exact:!0,path:"/health",element:Object(j.jsx)(N,{country:"in",category:"health",pageSize:12},"health")}),Object(j.jsx)(k.a,{exact:!0,path:"/science",element:Object(j.jsx)(N,{country:"in",category:"science",pageSize:12},"science")}),Object(j.jsx)(k.a,{exact:!0,path:"/sports",element:Object(j.jsx)(N,{country:"in",category:"sports",pageSize:12},"sports")}),Object(j.jsx)(k.a,{exact:!0,path:"/technology",element:Object(j.jsx)(N,{country:"in",category:"technology",pageSize:12},"technology")})]})]})}}]),a}(n.Component),w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),w()}},[[23,1,2]]]);
//# sourceMappingURL=main.e7b595f3.chunk.js.map