(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e){e.exports=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},25:function(e,t,n){e.exports=n(38)},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),l=n.n(r),c=n(40),i=n(42),d=(n(30),n(6)),s=n(7),u=n(9),m=n(8),p=n(10),h=n(5),f=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.completed,a=e.handleToggleCompletedTodo,r=e.handleDestroyOne;return o.a.createElement("li",{className:n?"completed":""},o.a.createElement("div",{className:"view"},o.a.createElement("input",{className:"toggle",type:"checkbox",defaultChecked:n,onClick:a}),o.a.createElement("label",null,t),o.a.createElement("button",{className:"destroy",onClick:r})))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},n.handleChange=function(e){n.setState({title:e.target.value})},n.handleAddTodo=function(e){var t=n.props.addTodo,a=n.state.title;13===e.keyCode&&(t(a),e.target.value="")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.title;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,onChange:this.handleChange,onKeyDown:this.handleAddTodo,value:e}))}}]),t}(a.Component),E=Object(h.b)(null,function(e){return{addTodo:function(t){return e(function(e){return{type:"ADD_TODO",payload:e}}(t))}}})(O),b=n(39),T=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.completed,n=e.clearCompletedTodos,a=e.filter;return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},o.a.createElement("strong",null,t)," item(s) left"),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement(b.a,{to:"/",className:"/"===a?"selected":""},"All")),o.a.createElement("li",null,o.a.createElement(b.a,{to:"/active",className:"/active"===a?"selected":""},"Active")),o.a.createElement("li",null,o.a.createElement(b.a,{to:"/completed",className:"/completed"===a?"selected":""},"Completed"))),o.a.createElement("button",{className:"clear-completed",onClick:n},"Clear completed"))}}]),t}(a.Component),j=Object(h.b)(function(e){return{todos:e.todoList}},function(e){return{clearCompletedTodos:function(){return e({type:"CLEAR_COMPLETED_TODOS"})}}})(T),y=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.todos,a=t.handleAddTodo;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{handleAddTodo:a}),o.a.createElement("section",{className:"main"},o.a.createElement("ul",{className:"todo-list"},n.map(function(t){return o.a.createElement(f,{key:t.id,title:t.title,completed:t.completed,handleToggleCompletedTodo:e.props.handleToggleCompletedTodo(t.id),handleDestroyOne:e.props.handleDestroyOne(t.id)})}))),o.a.createElement(j,{completed:this.props.completed,handleDestroyAllCompletedTodos:this.props.handleDestroyAllCompletedTodos,filter:this.props.location.pathname}))}}]),t}(a.Component),g=n(41),v=n(16),C=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleToggleCompletedTodo=function(e){return function(t){n.props.toggleTodo(e)}},n.handleDestroyOne=function(e){return function(t){n.props.deleteTodo(e)}},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todos,t={handleDestroyOne:this.handleDestroyOne,handleToggleCompletedTodo:this.handleToggleCompletedTodo,completed:e.filter(function(e){return!e.completed}).length};return o.a.createElement("section",{className:"todoapp"},o.a.createElement(g.a,null,o.a.createElement(i.a,{exact:!0,path:"/active",render:function(n){return o.a.createElement(y,Object.assign({},n,t,{todos:e.filter(function(e){return!e.completed})}))}}),o.a.createElement(i.a,{exact:!0,path:"/completed",render:function(n){return o.a.createElement(y,Object.assign({},n,t,{todos:e.filter(function(e){return e.completed})}))}}),o.a.createElement(i.a,{exact:!0,path:"/",render:function(n){return o.a.createElement(y,Object.assign({},n,t,{todos:e}))}})))}}]),t}(a.Component),D=Object(h.b)(function(e){return{todos:e.todoList}},function(e){return{deleteTodo:function(t){return e(function(e){return{type:"DELETE_TODO",payload:e}}(t))},toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",payload:e}}(t))}}})(C),L=n(24),N=n(11),k={todoList:v},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var n={userId:1,id:Math.floor(333666999*Math.random()),title:t.payload,completed:!1};return Object(N.a)({},e,{todoList:Object(L.a)(e.todoList).concat([n])});case"CLEAR_COMPLETED_TODOS":var a=e.todoList.filter(function(e){return!e.completed});return console.log("test "),Object(N.a)({},e,{todoList:a});case"DELETE_TODO":var o=e.todoList.filter(function(e){return e.id!==t.payload});return Object(N.a)({},e,{todoList:o});case"TOGGLE_TODO":var r=e.todoList.map(function(e){return e.id===t.payload&&(e.completed=!e.completed),e});return Object(N.a)({},e,{todoList:r});default:return e}},w=n(12),_=Object(w.b)(A);l.a.render(o.a.createElement(function(){return o.a.createElement(c.a,{basename:"/todos-part-5"},o.a.createElement(h.a,{store:_},o.a.createElement(i.a,{render:function(e){return o.a.createElement(D,{pathname:e.location.pathname})}})))},null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.e9ce80f6.chunk.js.map