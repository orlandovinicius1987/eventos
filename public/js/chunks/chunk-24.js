(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{RFiv:function(t,e,r){"use strict";var n=r("L2JU");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(r,!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={methods:i({},Object(n.mapActions)("roles",["clearForm"])),computed:i({},Object(n.mapState)({roles:function(t){return t.roles}}))}},ZCm8:function(t,e,r){"use strict";r.r(e);var n=r("jx1L"),a=r("RFiv"),i=r("CtO9"),o=(r("L2JU"),{name:"roles",uri:"roles"}),s={mixins:[n.a,a.a,i.a],data:function(){return{service:o}}},l=r("KHd+"),c=Object(l.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-4"},[t.can("roles:read")||t.can("roles:modify")?r("app-table-panel",{attrs:{title:"Funções ("+t.pagination.total+")","add-button":{uri:"/roles/create",disabled:t.cannot("roles:modify"),dusk:"create-roles-button"},"per-page":t.perPage,"filter-text":t.filterText},on:{"input-filter-text":function(e){t.filterText=e.target.value},"set-per-page":function(e){t.perPage=e}}},[r("app-table",{attrs:{pagination:t.pagination,columns:["#","Nome",""]},on:{"goto-page":function(e){return t.gotoPage(e)}}},t._l(t.roles.data.rows,(function(e){return r("tr",{class:{"cursor-pointer":!0,"bg-primary-lighter text-white":t.isCurrent(e,t.selected)},on:{click:function(r){return t.select(e)}}},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.id))]),t._v(" "),r("td",{staticClass:"align-middle"},[t._v(t._s(e.name))]),t._v(" "),r("td",{staticClass:"align-middle text-right"},[r("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/roles/"+e.id+"/update",tag:"button",disabled:t.cannot("roles:modify"),title:"Editar Função"}},[r("i",{staticClass:"fa fa-edit"})])],1)])})),0)],1):t._e()],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-2 text-center"},[e("h2",[this._v("Funções")])])}],!1,null,null,null);e.default=c.exports}}]);