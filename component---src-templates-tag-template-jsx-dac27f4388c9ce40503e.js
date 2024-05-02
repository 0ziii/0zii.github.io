"use strict";(self.webpackChunkgatsby_blog_template=self.webpackChunkgatsby_blog_template||[]).push([[257],{97:function(e,t,a){var n=a(6540);t.A=function(e){var t=e.title;return n.createElement("header",{className:"border-bottom border-color-light-grey"},n.createElement("div",{className:"container"},n.createElement("h1",{className:"margin-none padding-top-2 padding-bottom-2"},t)))}},4521:function(e,t,a){var n=a(6540);t.A=function(e){var t=e.content,a=e.sidebar;return n.createElement("section",{className:"main-container container"},n.createElement("div",{className:"content-wrapper padding-top-half padding-bottom-2"},t),n.createElement("div",{className:"sidebar-wrapper padding-top-half padding-bottom-2"},a))}},3564:function(e,t,a){a.d(t,{A:function(){return i}});var n=a(6540),r=a(481),l=a(2052),o=function(e){var t=e.value,a=e.currentPage,o=e.pathPrefix,i=e.pathPrefixPagination,s=-1===t,c=-2===t,m=o;return s?m+=i+"/"+(a-3):c?m+=i+"/"+(a+3):1!==t&&(m+=i+"/"+t),n.createElement(l.A,{to:m,className:"pagination-item "+(a===t?"active":""),activeClassName:"active"},s&&n.createElement(r.g,{icon:["fas","angle-double-left"],size:"xs"}),t>0&&t,c&&n.createElement(r.g,{icon:["fas","angle-double-right"],size:"xs"}))},i=function(e){var t=e.currentPage,a=e.totalPages,r=e.pathPrefix,l=e.pathPrefixPagination,i=e.extraClass,s=[];if(a<=7)for(var c=1;c<=a;c++)s.push(c);else if(t<=4){for(var m=1;m<=5;m++)s.push(m);s.push(-2,a)}else if(a-t<4){s.push(1,-1);for(var d=a-4;d<=a;d++)s.push(d)}else s.push(1,-1,t-1,t,t+1,-2,a);return n.createElement(n.Fragment,null,a>=2&&n.createElement("div",{className:"pagination-container "+i},s.map((function(e,a){return n.createElement(o,{key:r+"-"+a,value:e,currentPage:t,pathPrefix:r,pathPrefixPagination:l})}))))}},3023:function(e,t,a){var n=a(6540),r=a(2504),l=a(9742),o=a.n(l);t.A=function(e){var t=e.date,a=e.extraClass,l=void 0===a?"":a;return n.createElement("div",{className:"text-description "+l},o().postOnDate," ",(0,r.Yq)(t))}},2615:function(e,t,a){a.d(t,{A:function(){return u}});var n=a(5540),r=a(6540),l=a(3973),o=a(2052),i=function(e){var t=e.post,a=e.extraClass,n=void 0===a?"":a;return t.cover?r.createElement(o.A,{to:t.slug,key:t.title,className:"thumbnail-wrapper line-height-reset "+n},r.createElement(l.G,{image:(0,l.d)(t.cover),className:"thumbnail-img",alt:""})):null},s=a(3023),c=function(e){var t=e.post,a=e.extraClass,n=void 0===a?"":a;return r.createElement("div",{className:"post-info-wrapper "+n},r.createElement(o.A,{to:t.slug,key:t.title},r.createElement("h2",null,r.createElement("small",null,t.title))),r.createElement("div",{className:"margin-bottom-half"},t.excerpt),r.createElement("small",null,r.createElement(s.A,{date:t.date})))},m=function(e){var t=e.post,a=e.hasThumbnail;return r.createElement("article",{key:t.title,className:"article-container padding-bottom-2 padding-top-2 border-bottom border-color-light-grey"},a&&r.createElement(i,{post:t}),r.createElement(c,{post:t}))},d=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={maxPosts:(t.props.hasLoadmore||t.props.forcePostsPerPage)&&t.props.postsPerPage?t.props.postsPerPage:t.props.postList.length},t.handleLoadmore=function(){var e=t.props,a=e.hasLoadmore,n=void 0!==a&&a,r=e.numberLoadmore;n&&t.setState((function(e){return{maxPosts:e.maxPosts+r}}))},t}return(0,n.A)(t,e),t.prototype.render=function(){var e=this.props,t=e.postList,a=e.hasThumbnail,n=void 0===a||a,l=e.hasLoadmore,o=void 0!==l&&l,i=this.state.maxPosts;return r.createElement(r.Fragment,null,r.createElement("div",{className:"post-listing-container"},t.map((function(e,t){return t<i?r.createElement(m,{key:e.title,post:e,hasThumbnail:n}):null}))),o&&i<t.length&&r.createElement("div",{className:"loadmore-wrapper margin-top padding-top-half text-center"},r.createElement("button",{className:"btn-primary",onClick:this.handleLoadmore},this.props.btnLoadmore)))},t}(r.Component),u=d},4954:function(e,t,a){a.d(t,{A:function(){return v}});var n=a(6540),r=a(2052),l=function(e){var t=e.extraClass,a=void 0===t?"":t,r=e.children;return n.createElement("aside",{className:a+" padding-top padding-bottom"},r)},o=function(e){var t=e.title;return n.createElement("h3",{className:"text-uppercase"},n.createElement("small",null,t))},i=a(2504),s=a(9742),c=a.n(s),m=function(e){var t=e.categoryList;return n.createElement(l,{extraClass:"categories-container"},n.createElement(o,{title:c().categoryWidgetTitle}),n.createElement("div",null,t.map((function(e){return n.createElement(r.A,{key:e,to:(0,i._4)(e),className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},n.createElement("span",null,e))}))))},d=function(e){var t=e.content;return n.createElement(r.A,{key:t,to:(0,i.w_)(t),className:"inline-block margin-right-half margin-bottom-half  border border-color-light-grey padding-left-half padding-right-half"},n.createElement("span",null,t))},u=function(e){var t=e.tagList;return n.createElement(l,{extraClass:"categories-container"},n.createElement(o,{title:c().tagWidgetTitle}),n.createElement("div",null,t.map((function(e){return n.createElement(d,{key:e,content:e})}))))},p=function(e){var t=e.latestPostEdges,a=(0,i.F4)(t);return n.createElement(l,{extraClass:"latest-posts-container"},n.createElement(o,{title:c().latestPostsWidgetTitle}),n.createElement("div",null,a.map((function(e){return n.createElement(r.A,{key:e.title,to:e.slug,className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},n.createElement("span",null,e.title))}))))},g=function(e){var t=e.links;return n.createElement(n.Fragment,null,t&&t.length>0&&n.createElement(l,{extraClass:"categories-container"},n.createElement(o,{title:c().linksWidgetTitle}),n.createElement("div",null,t.map((function(e){return n.createElement(r.A,{key:e.label,to:e.url,className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},n.createElement("span",null,e.label))})))))},h=a(5540),f=a(481),E=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.A)(t,e),t.prototype.render=function(){return n.createElement(n.Fragment,null,c().hasSearch&&n.createElement(l,{extraClass:"search-container"},n.createElement(o,{title:c().searchWidgetTitle}),n.createElement("form",{className:"margin-bottom-none",action:"/search/",method:"get"},n.createElement("div",{className:"container-full row padding-none margin-bottom-none"},n.createElement("div",{className:"padding-none padding-right-half col-xs-10"},n.createElement("input",{className:"margin-bottom-none",type:"text",name:"q",placeholder:c().searchWidgetPlaceHolder,required:!0,spellCheck:"false"})),n.createElement("div",{className:"padding-none padding-left-half col-xs-2"},n.createElement("button",{type:"submit",className:"btn btn-primary"},n.createElement(f.g,{icon:["fas","search"],style:{color:"#FFFFFF"}})))))))},t}(n.Component),b=E,v=function(e){var t=e.tagList,a=e.categoryList,r=e.latestPostEdges,l=e.links;return n.createElement("aside",{className:"sidebar-container width-full "+(c().sidebarSticky?"height-full":"")},n.createElement(b,null),r&&n.createElement(p,{latestPostEdges:r}),a&&n.createElement(m,{categoryList:a}),t&&n.createElement(u,{tagList:t}),l&&n.createElement("div",{className:"position-sticky top-zero"},n.createElement(g,{links:l})))}},5086:function(e,t,a){a.r(t);var n=a(6540),r=a(3673),l=a(6167),o=a(97),i=a(4521),s=a(4954),c=a(2615),m=a(3564),d=a(2504),u=a(9742),p=a.n(u);t.default=function(e){var t=e.data,a=e.pageContext,u=a.tag,g=a.tagList,h=a.categoryList,f=a.latestPostEdges,E=a.currentPage,b=a.totalPages,v=t.allMarkdownRemark.edges,P=(0,d.F4)(v),y=n.createElement(n.Fragment,null,n.createElement(c.A,{postList:P,hasThumbnail:p().tagHasThumbnail,hasLoadmore:!1}),n.createElement(m.A,{extraClass:"margin-top padding-top-half",currentPage:E,totalPages:b,pathPrefix:(0,d.N3)(u),pathPrefixPagination:p().pathPrefixPagination})),x=n.createElement(s.A,{tagList:g,categoryList:h,latestPostEdges:f,links:p().sidebarLinks});return n.createElement(l.A,null,n.createElement("div",{className:"tag-container"},n.createElement(r.A,{title:p().tagHeader+" "+u+" - "+p().siteTitle}),n.createElement(o.A,{title:p().tagHeader+" "+u}),n.createElement(i.A,{content:y,sidebar:x})))}}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-dac27f4388c9ce40503e.js.map