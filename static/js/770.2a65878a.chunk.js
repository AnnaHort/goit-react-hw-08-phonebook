"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[770],{770:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var o,a,t,i,l,c,s,d,x=r(3855),p=r(168),u=r(5867),h=u.ZP.input(o||(o=(0,p.Z)(["\n padding: 5px;\n margin: 10px 0 10px 10px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);\n    border-color: lightgray;\n  }\n  &:hover,\n  &:focus {\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n    outline: none;\n    &:hover {\n      background-color: lightgray;\n    }\n  }\n"]))),b=u.ZP.ul(a||(a=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-left: 20px;\n"]))),g=u.ZP.li(t||(t=(0,p.Z)(["\ndisplay: flex;\nalign-items: center;\n"]))),f=u.ZP.button(i||(i=(0,p.Z)(["\nmargin-left: 20px;\npadding: 7px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);\n    border-color: lightblue;\n  }\n  &:hover,\n  &:focus {\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);\n    outline: none;\n    &:hover {\n      background-color: lightblue;\n    }\n  }\n"]))),m=r(2791),v=r(208),j=function(n){return n.contacts.contacts},Z=function(n){return n.contacts.contacts.items},w=function(n){return n.contacts.filter},k=r(9467),y=r(184),P=function(){var n=(0,x.I0)(),e=(0,x.v9)(w),r=(0,x.v9)(j),o=r.items,a=r.isLoading,t=r.error;(0,m.useEffect)((function(){n((0,v.Jv)())}),[n]);var i=o.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(h,{type:"text",name:"filter",placeholder:"Search by name",value:e,onChange:function(e){return n((0,k.fz)(e.target.value))}}),(0,y.jsx)(b,{children:a?(0,y.jsx)("p",{children:"Loading..."}):t?(0,y.jsxs)("p",{children:["Error: ",t.message]}):i.map((function(e){return(0,y.jsxs)(g,{children:[(0,y.jsx)("p",{children:e.name}),(0,y.jsx)("p",{children:e.number}),(0,y.jsx)(f,{onClick:function(){return r=e,void n((0,v._5)(r.id));var r},children:"Delete"})]},e.id)}))})]})},C=u.ZP.form(l||(l=(0,p.Z)(["\nmargin: 10px 0;\n  width: 500px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 20px;\n"]))),_=u.ZP.input(c||(c=(0,p.Z)(["\n  padding: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);\n    border-color: lightgray;\n  }\n  &:hover,\n  &:focus {\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n    outline: none;\n    &:hover {\n      background-color: lightgray;\n    }\n  }\n"]))),z=u.ZP.div(s||(s=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 200px;\n  margin-bottom: 10px;\n  \n"]))),A=u.ZP.button(d||(d=(0,p.Z)(["\n  padding: 7px;\n  background-color: #fff;\n\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  &:hover,\n  :focus {\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);\n    border-color: lightblue;\n  }\n  &:hover,\n  &:focus {\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);\n    outline: none;\n    &:hover {\n      background-color: lightblue;\n    }\n  }\n"]))),L=function(){var n=(0,x.I0)(),e=(0,x.v9)(Z);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{children:"Phonebook"}),(0,y.jsx)(C,{onSubmit:function(r){r.preventDefault();var o=r.target,a={name:o.elements.name.value,number:o.elements.contacts.value};""!==a.name&&""!==a.number?e.some((function(n){return n.name===a.name&&n.phone===a.number}))?(o.reset(),alert("This contact already exists in your phonebook.")):(n((0,v.gI)(a)),o.reset()):alert("Please enter both Name and Number")},children:(0,y.jsxs)("ul",{children:[(0,y.jsxs)(z,{children:[(0,y.jsx)("p",{children:"Name:"}),(0,y.jsx)(_,{name:"name",placeholder:"add new name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"})]}),(0,y.jsxs)(z,{children:[(0,y.jsx)("p",{children:"Number:"}),(0,y.jsx)(_,{name:"contacts",placeholder:"add new number",pattern:"\\+?[0-9\\s\\-\\(\\)]+"})]}),(0,y.jsx)("li",{children:(0,y.jsx)(A,{children:"Add contact"})})]})})]})},N=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(L,{}),(0,y.jsx)(P,{})]})}}}]);
//# sourceMappingURL=770.2a65878a.chunk.js.map