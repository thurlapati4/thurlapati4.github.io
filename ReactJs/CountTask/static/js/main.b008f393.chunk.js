(this.webpackJsonpsecondapp=this.webpackJsonpsecondapp||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),i=n.n(a),r=n(3),s=n.n(r),o=n(4),u=n(5),l=n(7),h=n(6),j=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).max1=null,t.inpu=function(e){t.max1=e.target.value},t.incr=function(){null!==t.max1?t.state.count>=t.max1?alert("Max-Limit-Reached"):t.setState({count:t.state.count+1}):alert("Please specify Max limit")},t.decr=function(){t.state.count<=0?alert("Zero Reached Cannot decrement"):t.setState({count:t.state.count-1})},t.state={count:0},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Count is ",this.state.count]}),Object(c.jsx)("button",{onClick:this.incr,children:"Increment"}),Object(c.jsx)("button",{onClick:this.decr,children:"Decrement"}),Object(c.jsx)("h2",{children:"Max limit is"}),Object(c.jsx)("input",{type:"text",onChange:this.inpu,name:"max-limit",ref:"max1",placeholder:"Enter max-limit here"})]})}}]),n}(i.a.Component);s.a.render(Object(c.jsxs)(i.a.StrictMode,{children:[Object(c.jsx)("h1",{children:"Count App"}),Object(c.jsx)(j,{})]}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b008f393.chunk.js.map