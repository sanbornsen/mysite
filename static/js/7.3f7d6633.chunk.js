(this.webpackJsonpdootoday=this.webpackJsonpdootoday||[]).push([[7],{747:function(e,t,a){"use strict";a.r(t),a.d(t,"MainSection",(function(){return D}));var n=a(124),r=a(87),i=a(0),o=a.n(i),l=a(580),c=a(296),s=a(583),m=a(594),d=a(744),p=a(719),u=a(736),h=a(281),g=a(714),f=a.n(g),b=a(141),y=a(634),x=a.n(y),w=Object(i.memo)((function(e){var t=e.task,a=e.isEditable,r=e.isJustInput,l=e.placeHolder,s=e.onTaskUpdate,m=e.theme||Object(c.a)(),d=!!e.highlight,p=Object(i.useState)(!!r),h=Object(n.a)(p,2),g=h[0],f=h[1],y={id:t.id,markdown:"",isDone:!1},w=Object(i.useState)(r?y:t),E=Object(n.a)(w,2),k=E[0],j=E[1],O=Object(i.useRef)(),N=[];return Object(i.useEffect)((function(){g&&!r&&(O.current.focus(),O.current.select())}),[g,O,r]),o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{theme:m,highlight:d},!g&&o.a.createElement(u.a,{onDoubleClick:function(){N.length&&(N.forEach((function(e){clearTimeout(e)})),N=[]),a&&f(!0)},onClick:function(){N.push(setTimeout((function(){var e=Object(b.a)(Object(b.a)({},k),{isDone:!k.isDone});j(e),s&&s(e)}),400))},variant:"caption",className:k.isDone?"done":""},o.a.createElement(x.a,{className:"md",disallowedTypes:["break","delete"],linkTarget:"_blank",source:k.markdown})),(g||r)&&o.a.createElement("input",{name:"task",ref:O,className:"input",value:k.markdown||"",placeholder:r?l:"",autoComplete:"off",onChange:function(e){return j(Object(b.a)(Object(b.a)({},k),{markdown:e.target.value}))},onBlur:function(e){e.preventDefault(),s&&s(Object(b.a)({},k)),r?j(y):f(!1)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),r?(s&&s(Object(b.a)({},k)),j(y)):O.current.blur()),"Escape"===e.key&&(e.preventDefault(),f(!!r),j(r?y:t))}})))})),v=r.b.div.withConfig({componentId:"ysyyl2-0"})(["height:25px;margin-bottom:0px;margin-top:0px;color:",";.done{text-decoration:line-through;}.input{font-size:0.75rem;font-family:'Roboto','Helvetica','Arial',sans-serif;font-weight:400;line-height:1.66;letter-spacing:0.03333em;outline:none;border:none;padding:0px;height:auto;width:100%;padding-left:2px;color:",";}.md{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-left:2px;:hover{overflow:visible;text-overflow:unset;white-space:initial;background-color:",";cursor:grab;position:relative;}h1,h2,h3,h4,h5,h6{font-size:0.75rem;font-family:'Roboto','Helvetica','Arial',sans-serif;font-weight:500;line-height:1.66;letter-spacing:0.03333em;margin:0px;}p{margin:0px;}ul{margin:0px;padding:0px;li{list-style:none;padding:0px;}}}@media (max-width:48.0625em){margin-bottom:0px;margin-top:10px;height:37px;.input{font-size:0.95rem;}.md{font-size:0.95rem;h1,h2,h3,h4,h5,h6{font-size:0.95rem;line-height:1.66;}p{font-size:0.95rem;}li{font-size:0.95rem;}}}"],(function(e){return e.highlight?e.theme.palette.primary.dark:e.theme.palette.secondary.dark}),(function(e){return e.highlight?e.theme.palette.primary.dark:e.theme.palette.secondary.dark}),(function(e){return e.theme.palette.primary.light})),E=Object(i.memo)((function(e){var t=e.id,a=e.title,r=e.meta,s=e.titleEditable,m=e.tasks,d=e.allowDelete,p=e.onTitleChange,g=e.onTaskAdd,b=e.onTaskUpdate,y=e.onListDelete,x=e.theme||Object(c.a)(),v=!!e.highlight,E=Object(i.useState)(!1),j=Object(n.a)(E,2),O=j[0],N=j[1],C=Object(i.useState)(a),D=Object(n.a)(C,2),T=D[0],z=D[1],I=Object(i.useRef)(),R=function(e){g&&g(e.markdown,t)},A=function(e){b&&b(e,t)};return Object(i.useEffect)((function(){O&&(I.current.focus(),I.current.select())}),[O,I]),o.a.createElement(k,{theme:x,highlight:v},o.a.createElement("section",null,o.a.createElement("header",{className:"header"},d&&o.a.createElement(l.a,{size:"small",className:"del-icon",onClick:function(){return d&&y&&y()}},o.a.createElement(f.a,{fontSize:"small"})),!O&&o.a.createElement(u.a,{variant:"h6",onClick:function(e){e.preventDefault(),s&&N(!0)}},T),s&&O&&o.a.createElement("div",null,o.a.createElement("input",{ref:I,className:"title_editor",name:"title",autoComplete:"off",value:T||"",onChange:function(e){return z(e.target.value)},onBlur:function(e){e.preventDefault(),N(!1),p&&p(T)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),I.current.blur()),"Escape"===e.key&&(e.preventDefault(),N(!1),z(a))}})),o.a.createElement(u.a,{variant:"caption"},r))),o.a.createElement("section",{className:"body"},o.a.createElement(h.c,{droppableId:t},(function(e){return o.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef}),!!m&&!!m.length&&m.map((function(e,t){return o.a.createElement(h.b,{draggableId:e.id,index:t,key:e.id},(function(t){return o.a.createElement("li",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),o.a.createElement(w,{task:e,theme:x,highlight:v,onTaskUpdate:A,isEditable:!0}))}))})),e.placeholder,o.a.createElement("li",null,o.a.createElement(w,{task:{},theme:x,highlight:v,onTaskUpdate:R,isJustInput:!0,placeHolder:"Add a new task here"})))}))))})),k=r.b.div.withConfig({componentId:"zg9dv1-0"})(["display:flex;flex-direction:column;height:100%;color:",";&:hover{.header{.del-icon{opacity:0.8;}}}.header{left:0;margin-bottom:2.7777777778em;text-align:center;text-transform:uppercase;top:0;width:100%;.del-icon{opacity:0;position:absolute;right:-15px;@media (max-width:48.0625em){display:none;}}h6{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.title_editor{border:none;font-size:1.25rem;font-family:'Roboto','Helvetica','Arial',sans-serif;font-weight:500;line-height:1.6;letter-spacing:0.0075em;text-transform:uppercase;text-align:center;width:100%;color:",";}@media (min-width:48.0625em){position:relative;}}.body{background-image:repeating-linear-gradient( transparent,transparent 44px,rgba(0,0,0,0.08) 44px,rgba(0,0,0,0.08) 45px,transparent 45px,transparent 47px );flex:1 1 100%;@media (min-width:48.0625em){background-image:repeating-linear-gradient( transparent,transparent 22px,rgba(0,0,0,0.08) 22px,rgba(0,0,0,0.08) 23.23px,transparent 23.23px,transparent 25px );}ul{padding:0px;margin:0px;li{list-style:none;}}}"],(function(e){return e.highlight?e.theme.palette.primary.dark:e.theme.palette.secondary.dark}),(function(e){return e.highlight?e.theme.palette.primary.dark:e.theme.palette.secondary.dark})),j=a(737),O=a(738),N=a(739),C=a(740),D=Object(i.memo)((function(e){var t=e.taskColumns,a=e.colTitleEditable,r=e.startIndex,u=e.showHomeNav,h=e.showDateNav,g=e.colDeleteAllowed,f=e.onTaskAdd,b=e.onTaskUpdate,y=e.onMoveRequest,x=e.onHomeRequest,w=e.onMoveToDateRequest,v=e.onColumnUpdate,k=e.onColumnDelete,D=e.theme||Object(c.a)(),z=Object(i.useState)(!1),I=Object(n.a)(z,2),R=I[0],A=I[1],H=function(e,a){var n=a?1:5;return e>t.length-n?t.length-n:e<0?0:e};return o.a.createElement(T,{startIndex:H(r,!1),startIndexMob:H(r,!0)+1,totalLength:t.length},o.a.createElement("nav",{className:"main-nav left"},o.a.createElement(s.a,{theme:D},o.a.createElement(l.a,{onClick:function(){return y&&y(-1)},className:"icon",color:"primary","aria-label":"move one day back",component:"span"},o.a.createElement(j.a,{className:"left primary-arrow"})),o.a.createElement(l.a,{onClick:function(){return y&&y(-5)},className:"icon",color:"primary","aria-label":"move five days back",component:"span"},o.a.createElement(O.a,{className:"left secondary-arrow"})),u&&o.a.createElement(l.a,{onClick:function(){return x&&x()},className:"icon",color:"primary","aria-label":"go to current date",component:"span"},o.a.createElement(N.a,{className:"tertiary-arrow"})))),o.a.createElement("div",{className:"main-content"},o.a.createElement("ol",{className:"grid",role:"row"},!!t.length&&t.map((function(e){return o.a.createElement("li",{className:"grid_item",key:e.id},o.a.createElement(E,{id:e.id,title:e.title,meta:e.meta||"",tasks:e.tasks,highlight:!!e.active,theme:D,titleEditable:!!a,allowDelete:g,onTaskAdd:f,onTaskUpdate:b,onTitleChange:function(t){return v&&v(e.id,t)},onListDelete:function(){return k&&k(e.id)}}))})))),o.a.createElement("nav",{className:"main-nav right"},o.a.createElement(s.a,{theme:D},o.a.createElement(l.a,{onClick:function(){return y&&y(1)},className:"icon",color:"primary","aria-label":"move one day ahead",component:"span"},o.a.createElement(j.a,{className:"right primary-arrow"})),o.a.createElement(l.a,{onClick:function(){return y&&y(5)},className:"icon",color:"primary","aria-label":"move five days ahead",component:"span"},o.a.createElement(O.a,{className:"right secondary-arrow"})),h&&o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{onClick:function(){return A(!0)},className:"icon",color:"primary","aria-label":"select a date",component:"span"},o.a.createElement(C.a,{className:"right tertiary-arrow"})),o.a.createElement(m.a,{utils:p.a},o.a.createElement(d.a,{open:R,value:new Date,onChange:function(e){w&&w(e),A(!1)},onClose:function(){return A(!1)},TextFieldComponent:function(){return o.a.createElement("span",null)}}))))))})),T=r.b.section.withConfig({componentId:"sc-1mb16nj-0"})(["display:grid;grid-template-columns:1fr;margin-top:30px;position:relative;@media (min-width:48.0625em){grid-template-columns:3.5555555556rem 1fr 3.5555555556rem;margin-top:40px;}.main-content{overflow:hidden;position:relative;z-index:1;.grid{margin-top:0px;display:grid;list-style-type:none;grid-auto-columns:calc(20 * 1%);grid-template-rows:100%;padding-left:0;min-height:25.1111111111rem;transition:all 0.5s ease-in-out,-webkit-all 0.5s ease-in-out;z-index:0;position:relative;left:","%;@media (max-width:48.0625em){grid-auto-columns:calc(100 * 1%);left:","%;}.grid_item{border-right:1px solid rgba(0,0,0,0.08);grid-row:1/-1;position:relative;padding:0px 15px;}}}.main-nav{overflow:hidden;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;.icon{padding:0;.left{transform:rotate(180deg);}.primary-arrow{font-size:2em;}.secondary-arrow{font-size:1em;margin-top:10px;}.primary-arrow,.secondary-arrow{&.left{display:",";}&.right{display:",";@media (min-width:48em){display:",";}}}.tertiary-arrow{font-size:0.6em;margin-top:10px;opacity:0.5;}.secondary-arrow .tertiary-arrow{opacity:0.5;}}&.left{left:0;border-right:1px solid rgba(0,0,0,0.08);}&.right{right:0;border-left:1px solid rgba(0,0,0,0.08);}@media (max-width:48em){padding:0 0.5555555556rem;position:absolute;top:0.1111111111rem;z-index:2;.icon{.secondary-arrow{display:none;}}&.left,&.right{border:none;}}}"],(function(e){return-20*e.startIndex}),(function(e){return-100*e.startIndexMob}),(function(e){return 0===e.startIndex?"none":""}),(function(e){return e.startIndexMob===e.totalLength-1?"none":""}),(function(e){return e.startIndex===e.totalLength-5?"none":""}))}}]);