(this.webpackJsonpdootoday=this.webpackJsonpdootoday||[]).push([[1],{183:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(49),r=function(e){return e.applayout},o=Object(a.a)(r,(function(e){return null===e||void 0===e?void 0:e.userDetails})),c=Object(a.a)(r,(function(e){return null===e||void 0===e?void 0:e.userfetched}))},188:function(e){e.exports=JSON.parse('{"title":"welcome"}')},26:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d}));var a=n(151),r=n(97),o=n.n(r),c=n(33),u=function(){var e=Object(a.get)("dootoday_refresh_token");return e?Object(c.j)(e).then((function(e){if(200!==e.status)throw console.error(e.status),new Error("Refresh token is not valid");var t=e.data;o.a.set("dootoday_auth_token",t.access_token,{expires:1})})).then((function(){return!0})).catch((function(e){return!1})):Promise.resolve(!1)},s=function(e){return Object(c.i)(e).then((function(e){if(200!==e.status)throw console.error(e.status),new Error("Access token is not valid");var t=e.data;o.a.set("dootoday_auth_token",t.access_token,{expires:1}),Object(a.set)("dootoday_refresh_token",t.refresh_token)})).then((function(){return!0})).catch((function(e){return!1}))},i=function(){return!!o.a.get("dootoday_auth_token")},l=function(){return o.a.get("dootoday_auth_token")},d=function(){Object(a.remove)("dootoday_refresh_token"),o.a.remove("dootoday_auth_token")}},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(61),r=function(e){return Object(a.b)(e)}},306:function(e,t,n){e.exports=n(562)},33:function(e,t,n){"use strict";n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return s})),n.d(t,"h",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"m",(function(){return p})),n.d(t,"e",(function(){return k})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return y})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return g}));var a=n(40),r=n.n(a),o=n(26),c="http://api.doo.today",u=function(e){console.log("API: making request to login..");var t={id_token:e};return r.a.post("http://api.doo.today/v1/login",t)},s=function(e){console.log("API: making request to refresh token..");var t={refresh_token:e};return r.a.post("http://api.doo.today/v1/refresh",t)},i=function(){console.log("API: making request to get user details..");var e={Authorization:"Bearer "+Object(o.a)()};return r.a.get("http://api.doo.today/v1/user",{headers:e})},l=function(e){console.log("API: making request to apply promo..");var t={Authorization:"Bearer "+Object(o.a)()};return r.a.post("http://api.doo.today/v1/apply-promo",{code:e},{headers:t})},d=function(e,t){console.log("API: making request get tasks..");var n="".concat(c,"/v1/tasks?from=").concat(e,"&to=").concat(t),a={Authorization:"Bearer "+Object(o.a)()};return r.a.get(n,{headers:a})},f=function(){console.log("API: making request get tasks..");var e="".concat(c,"/v1/columns"),t={Authorization:"Bearer "+Object(o.a)()};return r.a.get(e,{headers:t})},m=function(e,t,n,a){console.log("API: making request creating task..");var u="".concat(c,"/v1/task"),s={Authorization:"Bearer "+Object(o.a)()};return r.a.post(u,{markdown:e,date:t,column_id:n,is_done:a},{headers:s})},p=function(e,t,n){console.log("API: making request updating task..");var a="".concat(c,"/v1/task/").concat(e),u={Authorization:"Bearer "+Object(o.a)()};return r.a.post(a,{markdown:t,is_done:n},{headers:u})},k=function(e){console.log("API: making request deleting task..");var t="".concat(c,"/v1/task/").concat(e),n={Authorization:"Bearer "+Object(o.a)()};return r.a.delete(t,{headers:n})},b=function(e){console.log("API: making request respos task..");var t="".concat(c,"/v1/repos"),n={Authorization:"Bearer "+Object(o.a)()};return r.a.post(t,e,{headers:n})},y=function(e,t){console.log("API: making request updating column..");var n="".concat(c,"/v1/column/").concat(e),a={Authorization:"Bearer "+Object(o.a)()};return r.a.post(n,{name:t},{headers:a})},h=function(e){console.log("API: making request for creating new column..");var t="".concat(c,"/v1/column"),n={Authorization:"Bearer "+Object(o.a)()};return r.a.post(t,{name:e},{headers:n})},g=function(e){console.log("API: making request deleting column..");var t="".concat(c,"/v1/column/").concat(e),n={Authorization:"Bearer "+Object(o.a)()};return r.a.delete(t,{headers:n})}},562:function(e,t,n){"use strict";n.r(t);n(307),n(316);var a=n(0),r=n.n(a),o=n(57),c=n(22);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(507);var u=n(77),s=n(114),i=n(81),l=n(284),d=n(87);function f(){var e=Object(l.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n    line-height: 0;\n  }\n  /*\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  } */\n"]);return f=function(){return e},e}var m=Object(d.a)(f()),p=n(124),k=n(296),b=n(583),y=n(584),h=n(585),g=n(580),v=n(587),T=n(121),O=n(290),j=n.n(O),S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},o=e;t&&(o=function(){return e().then((function(e){return{default:t(e)}}))});var c=Object(a.lazy)(o);return function(e){return r.a.createElement(a.Suspense,{fallback:n.fallback},r.a.createElement(c,e))}},x=S((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,747))}),(function(e){return e.MainSection})),D=n(281),w=n(95),E=n(269),q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],I=function(e){var t=_(e.meta);return{id:e.id,title:e.name,meta:t,tasks:e.tasks.map((function(e){return R(e)})),active:e.meta===A(new Date)}},R=function(e){return{id:e.id.toString(),markdown:e.markdown,isDone:e.is_done}},_=function(e){var t=new Date(e);if("Invalid Date"===t.toString())return e;var n=t.getDate(),a=t.getMonth(),r=t.getFullYear();return"".concat(n," ").concat(q[a],", ").concat(r)},A=function(e){var t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),"".concat(a,"-").concat(n,"-").concat(t)},M=function(){return A(new Date)},C=function(e){var t=new Date(e),n="Invalid Date"===t.toString()?new Date:t;return[A(P(n,-11)),A(P(n,11))]},P=function(e,t){return new Date((new Date).setDate(e.getDate()+t))},N={dailyTask:[],columnTask:[],dailyTaskStart:10,dailyTaskStartMob:11,columnTaskStart:0,columnTaskStartMob:0},z=Object(E.a)({name:"homePage",initialState:N,reducers:{getDailyTaskRequest:{reducer:function(e){return e},prepare:function(e){return{payload:{date:e}}}},getDailyTaksSuccess:{reducer:function(e,t){return e.dailyTask=t.payload,e.dailyTaskStart=10,e.dailyTaskStartMob=11,e},prepare:function(e){return{payload:e.map((function(e){return I(e)}))}}},getColumnTaskRequest:{reducer:function(e){return e},prepare:function(e){return{payload:{date:e}}}},getColumnTaksSuccess:{reducer:function(e,t){return e.columnTask=t.payload,e.columnTaskStart=0,e},prepare:function(e){return{payload:e.map((function(e){return I(e)}))}}},moveDailyTaskToHome:{reducer:function(e,t){var n=t.payload.idx;return e.dailyTaskStartMob=n,e.dailyTaskStart=n-1,n>e.dailyTask.length-5&&(e.dailyTaskStart=e.dailyTask.length-5),e},prepare:function(e){return{payload:{idx:e}}}},moveDailyTask:{reducer:function(e,t){return e.dailyTaskStart=e.dailyTaskStart+t.payload.by,e.dailyTaskStart>e.dailyTask.length-5&&(e.dailyTaskStart=e.dailyTask.length-5),e.dailyTaskStart<0&&(e.dailyTaskStart=0),e.dailyTaskStartMob=e.dailyTaskStartMob+t.payload.by,e.dailyTaskStartMob>e.dailyTask.length-1&&(e.dailyTaskStartMob=e.dailyTask.length-1),e.dailyTaskStartMob<0&&(e.dailyTaskStartMob=0),e},prepare:function(e){return{payload:{by:e}}}},moveColumnTask:{reducer:function(e,t){return e.columnTaskStart=e.columnTaskStart+t.payload.by,e.columnTaskStart>e.columnTask.length-5&&(e.columnTaskStart=e.columnTask.length-5),e.columnTaskStart<0&&(e.columnTaskStart=0),e.columnTaskStartMob=e.columnTaskStartMob+t.payload.by,e.columnTaskStartMob>e.columnTask.length-1&&(e.columnTaskStartMob=e.columnTask.length-1),e.columnTaskStartMob<0&&(e.columnTaskStartMob=0),e},prepare:function(e){return{payload:{by:e}}}},createTaskRequest:{reducer:function(e){return e},prepare:function(e,t,n,a){t&&!n&&(a=new Date(t).getTime()<new Date(M()).getTime());return{payload:{markdown:e,date:t,column_id:n,is_done:a}}}},createTaskSuccess:{reducer:function(e,t){var n=t.payload;if(n.date){var a=e.dailyTask.findIndex((function(e){return e.id===n.date}));a>-1&&e.dailyTask[a].tasks.push(R(n))}else{var r=e.columnTask.findIndex((function(e){return e.id===n.column_id}));r>-1&&e.columnTask[r].tasks.push(R(n))}return e},prepare:function(e){return{payload:e}}},updateTaskRequest:{reducer:function(e){return e},prepare:function(e,t,n){return{payload:{markdown:t,is_done:n,id:e}}}},updateTaskSuccess:{reducer:function(e,t){var n=t.payload;if(n.date){var a=e.dailyTask.findIndex((function(e){return e.id===n.date}));if(a>-1){var r=e.dailyTask[a].tasks.findIndex((function(e){return e.id===n.id.toString()}));e.dailyTask[a].tasks[r]=R(n)}}return e},prepare:function(e){return{payload:e}}},deleteTaskRequest:{reducer:function(e){return e},prepare:function(e){return{payload:{id:e}}}},deleteTaskSuccess:{reducer:function(e,t){for(var n=t.payload.taskID,a=0;a<e.dailyTask.length;a++)for(var r=function(t){if(e.dailyTask[a].tasks[t].id===n.toString())return e.dailyTask[a].tasks=e.dailyTask[a].tasks.filter((function(e,n){return n!==t})),"break"},o=0;o<e.dailyTask[a].tasks.length;o++){if("break"===r(o))break}for(var c=0;c<e.columnTask.length;c++)for(var u=function(t){if(e.columnTask[c].tasks[t].id===n.toString())return e.columnTask[c].tasks=e.columnTask[c].tasks.filter((function(e,n){return n!==t})),"break"},s=0;s<e.columnTask[c].tasks.length;s++){if("break"===u(s))break}return e},prepare:function(e){return{payload:{taskID:e}}}},reposRequestLocal:{reducer:function(e,t){for(var n=t.payload,a=n.source,r=n.destination,o={},c=0;c<e.dailyTask.length;c++)if(e.dailyTask[c].id===a.colID){o=e.dailyTask[c].tasks[a.idx],e.dailyTask[c].tasks=e.dailyTask[c].tasks.filter((function(e,t){return t!==a.idx}));break}for(var u=0;u<e.columnTask.length;u++)if(e.columnTask[u].id===a.colID){o=e.columnTask[u].tasks[a.idx],e.columnTask[u].tasks=e.columnTask[u].tasks.filter((function(e,t){return t!==a.idx}));break}for(var s=0;s<e.dailyTask.length;s++)if(e.dailyTask[s].id===r.colID){e.dailyTask[s].tasks.splice(r.idx,0,o);break}for(var i=0;i<e.columnTask.length;i++)if(e.columnTask[i].id===r.colID){e.columnTask[i].tasks.splice(r.idx,0,o);break}return e},prepare:function(e){return{payload:e}}},reposRequest:{reducer:function(e){return e},prepare:function(e){var t=e.col,n=e.ids;return"Invalid Date"!==new Date(t).toString()?{payload:{date:t,task_ids:n}}:{payload:{column_id:t,task_ids:n}}}},colUpdateRequest:{reducer:function(e){return e},prepare:function(e,t){return{payload:{id:e,name:t}}}},colUpdateSuccess:{reducer:function(e,t){var n=e.columnTask.findIndex((function(e){return e.id===t.payload.id}));return n>-1&&(e.columnTask[n].title=t.payload.name),e},prepare:function(e,t){return{payload:{id:e,name:t}}}},colCreateRequest:{reducer:function(e){return e},prepare:function(e){return{payload:{name:e}}}},colCreateSuccess:{reducer:function(e,t){return e.columnTask.push(t.payload),e.columnTaskStartMob=e.columnTask.length-1,e.columnTaskStart=e.columnTask.length-5,e},prepare:function(e){return{payload:I(e)}}},colDeleteRequest:{reducer:function(e){return e},prepare:function(e){return{payload:{id:e}}}},colDeleteSuccess:{reducer:function(e,t){return e.columnTask=e.columnTask.filter((function(e){return e.id!==t.payload.id})),e},prepare:function(e){return{payload:{id:e}}}}}}),U=z.actions,B=z.reducer,K=z.name,F=n(49),H=Object(F.a)([function(e){return e.homePage||N}],(function(e){return e})),L=Object(F.a)([H],(function(e){return e.dailyTask})),J=Object(F.a)([H],(function(e){return e.columnTask})),Y=Object(F.a)([H],(function(e){return{pc:e.dailyTaskStart,mob:e.dailyTaskStartMob}})),G=Object(F.a)([H],(function(e){return{pc:e.columnTaskStart,mob:e.columnTaskStartMob}})),W=n(17),V=n.n(W),$=n(11),Q={StatusOK:200,StatusCreated:201,StatusAccepted:202,StatusNoContent:204,StatusBadRequest:400,StatusUnauthorized:401,StatusForbidden:403,StatusNotFound:404,StatusConflict:409,StatusGone:410,StatusInternalServerError:500},X=n(33),Z=V.a.mark(ie),ee=V.a.mark(le),te=V.a.mark(de),ne=V.a.mark(fe),ae=V.a.mark(me),re=V.a.mark(pe),oe=V.a.mark(ke),ce=V.a.mark(be),ue=V.a.mark(ye),se=V.a.mark(he);function ie(e){var t,n,a,r,o,c;return V.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=C(e.payload.date),n=Object(p.a)(t,2),a=n[0],r=n[1],u.next=3,Object($.b)(X.g,a,r);case 3:if(o=u.sent,c=o.data,o.status!==Q.StatusOK){u.next=9;break}return u.next=9,Object($.c)(U.getDailyTaksSuccess(c));case 9:case"end":return u.stop()}}),Z)}function le(e){var t,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.b)(X.f);case 2:if(t=e.sent,n=t.data,t.status!==Q.StatusOK){e.next=8;break}return e.next=8,Object($.c)(U.getColumnTaksSuccess(n));case 8:case"end":return e.stop()}}),ee)}function de(e){var t,n,a,r,o,c,u;return V.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.markdown,a=t.date,r=t.column_id,o=t.is_done,s.next=3,Object($.b)(X.c,n,a,r,o);case 3:if(c=s.sent,u=c.data,c.status!==Q.StatusOK){s.next=9;break}return s.next=9,Object($.c)(U.createTaskSuccess(u));case 9:case"end":return s.stop()}}),te)}function fe(e){var t,n,a,r,o,c;return V.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.markdown,a=t.id,r=t.is_done,u.next=3,Object($.b)(X.m,a,n,r);case 3:if(o=u.sent,c=o.data,o.status!==Q.StatusOK){u.next=9;break}return u.next=9,Object($.c)(U.updateTaskSuccess(c));case 9:case"end":return u.stop()}}),ne)}function me(e){var t,n;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.id,a.next=3,Object($.b)(X.e,t);case 3:if(n=a.sent,n.status!==Q.StatusOK){a.next=8;break}return a.next=8,Object($.c)(U.deleteTaskSuccess(t));case 8:case"end":return a.stop()}}),ae)}function pe(e){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.b)(X.k,e.payload);case 2:case"end":return t.stop()}}),re)}function ke(e){var t,n,a,r;return V.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.id,a=t.name,o.next=3,Object($.b)(X.l,n,a);case 3:if(r=o.sent,r.status!==Q.StatusOK){o.next=8;break}return o.next=8,Object($.c)(U.colUpdateSuccess(n,a));case 8:case"end":return o.stop()}}),oe)}function be(e){var t,n,a,r;return V.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload.name,o.next=3,Object($.b)(X.b,t);case 3:if(n=o.sent,a=n.status,r=n.data,a!==Q.StatusOK){o.next=9;break}return o.next=9,Object($.c)(U.colCreateSuccess(r));case 9:case"end":return o.stop()}}),ce)}function ye(e){var t,n;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.id,a.next=3,Object($.b)(X.d,t);case 3:if(n=a.sent,n.status!==Q.StatusOK){a.next=8;break}return a.next=8,Object($.c)(U.colDeleteSuccess(t));case 8:case"end":return a.stop()}}),ue)}function he(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([Object($.d)(U.getDailyTaskRequest.type,ie),Object($.d)(U.getColumnTaskRequest.type,le),Object($.d)(U.createTaskRequest.type,de),Object($.d)(U.updateTaskRequest.type,fe),Object($.d)(U.deleteTaskRequest.type,me),Object($.d)(U.reposRequest.type,pe),Object($.d)(U.colUpdateRequest.type,ke),Object($.d)(U.colCreateRequest.type,be),Object($.d)(U.colDeleteRequest.type,ye)]);case 2:case"end":return e.stop()}}),se)}var ge=Object(a.memo)((function(e){Object(w.a)({key:K,reducer:B}),Object(w.b)({key:K,saga:he});var t=Object(c.d)(),n=e.theme||Object(k.a)(),o=Object(c.e)(L),s=Object(c.e)(J),i=Object(c.e)(Y),l=Object(c.e)(G);Object(a.useEffect)((function(){t(U.getDailyTaskRequest(M())),t(U.getColumnTaskRequest(M()))}),[t]);var d=function(e){var n=e.markdown,a=e.isDone,r=e.id;t(n?U.updateTaskRequest(r,n,a):U.deleteTaskRequest(r))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,"HomePage"),r.a.createElement("meta",{name:"description",content:"Description of HomePage"})),r.a.createElement(ve,{theme:n},r.a.createElement(D.a,{onDragEnd:function(e){try{var n={taskID:e.draggableId,source:{colID:e.source.droppableId,idx:e.source.index},destination:{colID:e.destination.droppableId,idx:e.destination.index}},a=[].concat(Object(T.a)(o),Object(T.a)(s)),r=a.findIndex((function(e){return e.id===n.destination.colID})),c=a[r].tasks.map((function(e){return parseInt(e.id)})),u=n.destination.colID===n.source.colID?c.filter((function(e){return e!==parseInt(n.taskID)})):c;u.splice(n.destination.idx,0,parseInt(n.taskID)),t(U.reposRequest({col:n.destination.colID,ids:u})),t(U.reposRequestLocal(n))}catch(i){0}}},r.a.createElement(x,{taskColumns:o,startIndex:i.pc,startIndexMob:i.mob,showDateNav:!0,showHomeNav:!0,theme:n,onMoveRequest:function(e){return t(U.moveDailyTask(e))},onHomeRequest:function(){var e=o.findIndex((function(e){return e.active}));t(e>0?U.moveDailyTaskToHome(e):U.getDailyTaskRequest(M()))},onMoveToDateRequest:function(e){return t(U.getDailyTaskRequest(A(e)))},onTaskAdd:function(e,n){e&&t(U.createTaskRequest(e,n,"",!1))},onTaskUpdate:d}),r.a.createElement("div",{className:"separator"},r.a.createElement(g.a,{size:"small",className:"add-icon",onClick:function(){t(U.colCreateRequest("*Edit*"))}},r.a.createElement(j.a,null))),r.a.createElement(x,{taskColumns:s,startIndex:l.pc,startIndexMob:l.mob,theme:n,colTitleEditable:!0,colDeleteAllowed:!0,onMoveRequest:function(e){return t(U.moveColumnTask(e))},onTaskAdd:function(e,n){e&&t(U.createTaskRequest(e,"",n,!1))},onTaskUpdate:d,onColumnUpdate:function(e,n){t(U.colUpdateRequest(e,n))},onColumnDelete:function(e){t(U.colDeleteRequest(e))}}))))})),ve=d.b.div.withConfig({componentId:"sc-1mtvkrn-0"})([".separator{height:40px;background-color:",";display:flex;justify-content:flex-end;.add-icon{margin-right:12px;}}"],(function(e){return e.theme.palette.primary.light})),Te=n(26),Oe=n(141),je=n(61),Se={userfetched:!1,userDetails:{firstName:"",lastName:"",email:"",avatar:"",leftDays:0}},xe=Object(je.b)({name:"applayout",initialState:Se,reducers:{getUserDetailsRequest:function(e){return e},getUserDetailsSuccess:{reducer:function(e,t){return{userfetched:!0,userDetails:Object(Oe.a)({},t.payload)}},prepare:function(e){return{payload:e}}},updateLeftDays:{reducer:function(e,t){return e.userDetails.leftDays+=t.payload.days,e},prepare:function(e){return{payload:{days:e}}}},deleteUserDetails:function(e){return Se}}}),De=xe.actions,we=xe.reducer,Ee=xe.name,qe=n(183),Ie=V.a.mark(_e),Re=V.a.mark(Ae);function _e(){var e,t;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.b)(X.h);case 2:if(e=n.sent,t=e.data,e.status!==Q.StatusOK){n.next=8;break}return n.next=8,Object($.c)(De.getUserDetailsSuccess({firstName:t.first_name,lastName:t.last_name,email:t.email,avatar:t.avatar,leftDays:t.left_days}));case 8:case"end":return n.stop()}}),Ie)}function Ae(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([Object($.d)(De.getUserDetailsRequest.type,_e)]);case 2:case"end":return e.stop()}}),Re)}var Me=S((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,745))}),(function(e){return e.SubscribePage})),Ce=Object(a.memo)((function(e){Object(w.a)({key:Ee,reducer:we}),Object(w.b)({key:Ee,saga:Ae});var t=Object(c.e)(qe.a),n=Object(c.e)(qe.b),o=Object(c.d)(),s=Object(i.g)(),l=Object(a.useCallback)((function(){Object(Te.d)(),s.push("/login")}),[s]),d=Object(k.a)({palette:{primary:{main:"#0d6c8c",dark:"#257b98",light:"#c2dae2"},secondary:{main:"#262626",dark:"#404040",light:"#b2b2b2"}}}),f=Object(a.useState)(!1),m=Object(p.a)(f,2),T=m[0],O=m[1],j=Object(a.useRef)(0),S=Object(a.useCallback)((function(e){Object(Te.e)().then((function(t){t?e||o(De.getUserDetailsRequest()):l()})),j.current=setTimeout(S,18e5,!0)}),[o,l]);return Object(a.useEffect)((function(){T||(S(!!t),O(!0))}),[T,S,t]),Object(a.useEffect)((function(){return function(){o(De.deleteUserDetails()),clearTimeout(j.current)}}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,"AppLayout"),r.a.createElement("meta",{name:"description",content:"Description of AppLayout"})),r.a.createElement(b.a,{theme:d},r.a.createElement(Pe,null,r.a.createElement(y.a,{position:"static",elevation:0},r.a.createElement(h.a,{variant:"dense",className:"tool-bar"},r.a.createElement("img",{className:"header-logo",src:"https://dootoday-assets.s3.ap-south-1.amazonaws.com/logo-bw-horiz.png",alt:"dootoday"}),t&&r.a.createElement(g.a,{onClick:l},r.a.createElement(v.a,{variant:"rounded",className:"avatar-logo",alt:null===n||void 0===n?void 0:n.firstName,src:null===n||void 0===n?void 0:n.avatar})))),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(ge,{theme:d})}}),r.a.createElement(i.b,{exact:!0,path:"/subscribe",component:function(){return r.a.createElement(Me,{theme:d})}})))))})),Pe=d.b.div.withConfig({componentId:"sc-1jl8dhu-0"})([".tool-bar{min-height:34px;display:flex;justify-content:space-between;.header-logo{height:25px;}.avatar-logo{height:20px;width:20px;border:1px solid #fff;}}"]),Ne=S((function(){return Promise.all([n.e(5),n.e(9)]).then(n.bind(null,748))}),(function(e){return e.Login})),ze=S((function(){return n.e(8).then(n.bind(null,749))}),(function(e){return e.NotFoundPage})),Ue=n(300);function Be(e){var t=e.component,n=Object(Ue.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return Object(Te.b)()?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location.pathname}}})}}))}var Ke=n(119),Fe=n(298),He=n(24);function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:Object(He.c)(Object(Oe.a)({},e))}var Je,Ye=n(299),Ge=n(297),We=n(295),Ve=n(188),$e={en:{translation:Ve}},Qe={},Xe=(Ye.a.use(Ge.a).use(We.a).init({resources:$e,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}},(function(){return function e(t,n,a){Object.keys(t).forEach((function(r){var o=a?"".concat(a,".").concat(r):r;"object"===typeof t[r]?(n[r]={},e(t[r],n[r],o)):n[r]=function(){return o}}))}(Ve,Qe)})),function(){var e=Object(Fe.a)({}),t=e.run,n=[e],a=[Object(Ke.a)({createReducer:Le,runSaga:t})];return Object(je.a)({reducer:Le(),middleware:[].concat(Object(T.a)(Object(je.c)()),n),devTools:!1,enhancers:a})}()),Ze=document.getElementById("root"),et=function(e){var t=e.Component;return a.createElement(c.a,{store:Xe},a.createElement(u.b,null,a.createElement(t,null)))};Je=function(){return a.createElement(s.a,null,a.createElement(u.a,{titleTemplate:"DooToday - Your personal task manager",defaultTitle:"DooToday - Your personal task manager"},a.createElement("meta",{name:"description",content:"Your personal task manager"})),a.createElement(i.d,null,a.createElement(i.b,{exact:!0,path:"/login",component:Ne}),a.createElement(Be,{path:"/",component:Ce}),a.createElement(i.b,{component:ze})),a.createElement(m,null))},o.render(a.createElement(et,{Component:Je}),Ze),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(119);function r(e){return Object(a.b)(e)}function o(e){return Object(a.c)(e)}}},[[306,2,3]]]);