(()=>{"use strict";var e=function(e,t){if(""!=e)for(var a=0;a<t.length;a++)t[a].classList.toggle(e)};const t=function(t){var a=document.getElementById(t),n=document.querySelectorAll(".calendar-table td"),d=0==a.parentElement.clientWidth?a.parentElement.offsetWidth:a.parentElement.clientWidth;if(console.log(d),console.log(a.parentElement.clientWidth),a.parentElement)switch(!0){case d<=370:e("minus",n);break;case d<=576&&d>370:e("little",n);break;case d<=767&&d>576:e("medium",n);break;case d<=991&&d>767:e("large",n);break;case d<=1999&&d>991||d>1999:e("xlarge",n)}};var a=function(e){document.querySelector(".weekend").style.background=e.weekEndColor},n=function(e){if("default"!=e.disabledColor)for(var t=document.getElementsByClassName("disabled"),a=0;a<t.length;a++)t[a].style.background=e.disabledColor},d=function(){for(var e,t,a=document.querySelectorAll("[data-date]"),n=!1,d=[],s=0,c=function(c){a[c].addEventListener("mousedown",(function(i){document.getElementsByTagName("body")[0].style.userSelect="none",n=!0,a[c].classList.contains("disabled")||(e=t=c,d.push(i.target),r(),a[c].classList.add("selected","firstSelect"))})),a[c].addEventListener("mouseover",(function(i){if(n&&!a[c].classList.contains("disabled")&&e<=c){if(s=c,t=0==t?s:Math.max(s,t),d.push(a[c]),a[c].classList.add("selected"),e+1<c)for(var r=c-1;r>e;r--)a[r].classList.add("selected");if(t>s)for(var o=t;o>s;o--)a[o].classList.remove("selected")}i.target.classList.add("hover")})),a[c].addEventListener("mouseup",(function(e){if(!a[c].classList.contains("disabled")){n=!1,document.getElementsByTagName("body")[0].style.userSelect="auto";var t=d[0].attributes[0].value;if(d=[],i(t,"/","/").getTime()<=i(a[c].attributes[0].value,"/","/").getTime()){var r=a[c].attributes[0].value;l(),o(t,r)}}})),a[c].addEventListener("mouseleave",(function(i){i.target.classList.remove("hover"),i.target.classList.contains("selected")&&n&&!i.target.classList.contains("firstSelect")&&c>e&&(a[c].classList.remove("selected"),d.pop(),t--)}))},u=0;u<a.length;u++)c(u)},i=function(e,t,a){var n=e.split(t);return new Date("".concat(n[1]).concat(a).concat(n[0]).concat(a).concat(n[2]))},r=function(){var e=document.querySelectorAll("td.selected");e&&e.forEach((function(e){e.classList.remove("selected"),e.classList.contains("firstSelect")&&e.classList.remove("firstSelect")}))},o=function(e,t){var a=document.createElement("div");a.classList.add("spikeCalendarEvent");var n=document.createElement("div");n.classList.add("spikeCalendarEventContent");var d=document.createElement("h3");d.classList.add("spikeCalendarTitleHeading"),d.innerText="Crea evento";var i=document.createElement("div");i.classList.add("spikeCalendarEventWrapper");var r=y(),o=c("spikeCalendarEventDateInputStart",e,"spikeEventCalInputDateGroup","Inizio","spikeCalendarEventDateInput"),l=c("spikeCalendarEventDateInputEnd",t,"spikeEventCalInputDateGroup","Fine","spikeCalendarEventDateInput");r.appendChild(o),r.appendChild(l);var h=y();h.appendChild(c("spikeCalendarEventTitleInput",!1,!1,"Titolo evento","spikeEventCalInputTitle","spikeEventTitleInputField"));var g=y("spikeCalendarEventTextRow","spikeCalendarRow");g.appendChild(v("spikeCalendarEventTxtNote","Note","spikeCalendarEventTextArea","spikeCalendarEventTextAreaGroup"));var f=y(!1,"spikeModalButtonRow");f.appendChild(m("spikeCalendarEventClose","Chiudi",!0,"spikeEventWrapButton","btn","btn-warning")),f.appendChild(m("spikeCalendarEventSubmit","Crea",!0,"spikeEventWrapButton","btn","btn-success")),n.appendChild(d),a.appendChild(n),n.appendChild(i),i.appendChild(r),i.appendChild(h),i.appendChild(g),i.appendChild(f),u(a);var b=s();u(b),p()},l=function(){var e=document.getElementById("__spikeModal");e&&document.getElementsByTagName("body")[0].removeChild(e)},s=function(){var e=document.createElement("div");e.classList.add("spikeCalendarObs");var t=document.getElementsByTagName("body")[0];return t.style.position="relative",t.style.overflowY="hidden",e},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,d=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,r=document.createElement("div");r.classList.add(d);var o=document.createElement("label");o.setAttribute("for",e),o.innerText=n;var l=document.createElement("input");return l.classList.add("form-control",i),!1!==t&&l.setAttribute("value",t),a&&l.setAttribute("disabled","true"),r.appendChild(o),r.appendChild(l),r},u=function(e){document.getElementsByTagName("body")[0].appendChild(e)},v=function(e,t,a,n){var d=document.createElement("div");d.classList.add(n);var i=document.createElement("label");i.setAttribute("for",e),i.innerText=t;var r=document.createElement("textarea");return r.id=e,r.classList.add("form-control",a),d.appendChild(i),d.appendChild(r),d},m=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],d=document.createElement("button");d.id=e;for(var i=arguments.length,r=new Array(i>4?i-4:0),o=4;o<i;o++)r[o-4]=arguments[o];if(d.innerText=t,r.forEach((function(e){d.classList.add(e)})),a){var l=document.createElement("div");return l.appendChild(d),n&&l.classList.add(n),l}return d},y=function(){var e=document.createElement("div");e.classList.add("row");for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return a.forEach((function(t){e.classList.add(t)})),e},p=function(){var e=document.getElementById("spikeCalendarEventClose");document.getElementById("spikeCalendarEventSubmit"),e.addEventListener("click",(function(e){var t=document.getElementsByClassName("spikeCalendarEvent")[0],a=document.getElementsByClassName("spikeCalendarObs")[0],n=document.getElementsByTagName("body")[0];n.style.position="unset",n.style.overflowY="scroll",n.removeChild(t),n.removeChild(a)}))},h=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],g=["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"],f=["Lun","Mar","Mer","Giov","Ven","Sab","Dom"],b=new Date,C=b.getDate(),E=b.getMonth(),D=b.getFullYear(),L=function(e,t){for(var a=document.getElementById(e),n=0;n<g.length;n++){var d=document.createElement("th");d.innerText=t.shortDays?f[n]:g[n],d.classList.add("dayth"),a.append(d)}},k=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{daysInMonth,paddingDays,currentDay,daysPrevMonth,nextMonthDayDifference},a=arguments.length>1?arguments[1]:void 0,n=0,d=t.daysPrevMonth-t.paddingDays,i=document.getElementById("calTbody"),r=new Date;console.log(E);for(var o=1;o<t.daysInMonth+t.paddingDays+t.nextMonthDayDifference;o++){if(o%g.length==1){var l=document.createElement("tr");l.classList.add("tr-body"),i.append(l)}var s=document.getElementsByClassName("tr-body"),c=document.createElement("td"),u=void 0;o>t.paddingDays&&o-t.paddingDays<=t.daysInMonth?(e=M(c,a,r,0,o-t.paddingDays),u='<div class="'.concat(5==e.dayCardinality||6==e.dayCardinality?"weday ":"day",'">').concat(o-t.paddingDays,"</div>").concat(w(r)?"<div class='today' title='Today'><span></span></div>":""),!a.disableWeekend||5!=e.dayCardinality&&6!=e.dayCardinality||(c.setAttribute("disabled","true"),c.classList.add("disabled"))):o<=t.paddingDays?(e=M(c,a,r,-1,d+1),u='<div class="'.concat(5==e.dayCardinality||6==e.dayCardinality?"weday":"day",'">').concat(++d,"</div>"),(a.disablePrevMonthDays||a.disableWeekend&&(5==e.dayCardinality||6==e.dayCardinality))&&e.monthCardinality<E&&(console.log(e.monthCardinality),c.setAttribute("disabled","true"),c.classList.add("disabled")),c.classList.add("prevMonthDay")):o-t.paddingDays>t.daysInMonth&&(e=M(c,a,r,1,n+1),u='<div class="'.concat(5==e.dayCardinality||6==e.dayCardinality?"weday":"day",'">').concat(++n,"</div>"),(a.disableNextMonthDays||a.disableWeekend&&(5==e.dayCardinality||6==e.dayCardinality))&&(c.setAttribute("disabled","true"),c.classList.add("disabled")),c.classList.add("nextMonthDay")),c.innerHTML=u,s[s.length-1].append(c)}},M=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,d=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;return a.setFullYear(t.year+i,t.month+n,d),e.setAttribute("data-date",a.toLocaleDateString()),{dayCardinality:x(a),monthCardinality:t.month+n}},w=function(e){return new Date(Date.now()).toLocaleDateString()==e.toLocaleDateString()},x=function(e){var t=e.toLocaleDateString("it-IT",{weekday:"long"});return g.indexOf(t.charAt(0).toUpperCase()+t.slice(1))},T=function(e,t){var a=document.createElement("table");return a.classList.add("table","calendar-table","responsive"),a.innerHTML="\n ".concat('<thead>\n     <tr id="calendarDaysRow"></tr>\n </thead>',"\n ").concat('<tbody id="calTbody" class="calendarTbody"></tbody>',"\n "),a},S=function(){var e=[],t=document.createElement("colgroup");return t.classList.add("weekend"),t.setAttribute("span","2"),e.push(t),(t=document.createElement("colgroup")).classList.add("weekday"),t.setAttribute("span","5"),e.push(t),e},I=function(e,t){var a=document.createElement("div");a.classList.add("calendarHeadingButtons");var n=document.createElement("div");n.classList.add("calendarHeadingSubButton");var d=document.createElement("span");d.id="iconPrevCalendar",d.innerHTML="default"==t.iconPrev?'<i class="bi bi-caret-left-square-fill"></i>':t.iconPrev;var i=document.createElement("span");i.id="iconNextCalendar",i.innerHTML="default"==t.iconNext?'<i class="bi bi-caret-right-square-fill"></i>':t.iconNext,n.appendChild(d),n.appendChild(i),a.appendChild(n);var r=document.createElement("div");r.classList.add("calendarHeading");var o=document.createElement("h2");return o.innerText="".concat(h[e]),r.appendChild(o),{buttonsHeading:a,textHeading:r}},A=function(e){var d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{daysInMonth,paddingDays,currentDay,dateString,daysPrevMonth,firstDay,nextMonthDayDifference,year,month,day},i=arguments.length>2?arguments[2]:void 0,r=document.getElementById(e),o=document.getElementsByClassName("calwrapper")[0];for(void 0!==o&&0!=o.length||((o=document.createElement("div")).classList.add("calwrapper"),r.insertAdjacentElement("beforebegin",o),o.appendChild(r));r.hasChildNodes();)r.removeChild(r.lastChild);var l=T(d.month),s=I(d.month,i);r.insertAdjacentElement("afterbegin",s.buttonsHeading),s.buttonsHeading.insertAdjacentElement("afterend",s.textHeading),r.appendChild(l),S().forEach((function(e){l.insertAdjacentElement("afterbegin",e)})),L("calendarDaysRow",i),k(d,i),1==i.responsive&&t(e),"default"!=i.weekEndColor&&a(i),"default"!=i.disabledColor&&n(i)},B=function(e,t){var a=null==t.year?D:t.year,n=null==t.month?E:t.month,i=null==t.day?C:t.day,r=new Date(a,n,1),o=new Date(a,n+1,0).getDate(),l=new Date(a,n,0).getDate(),s=6*g.length,c=r.toLocaleDateString("it-IT",{weekday:"long",year:"numeric",month:"numeric",day:"numeric"}),u=c.split(" ")[0],v=g.indexOf(u.charAt(0).toUpperCase()+u.slice(1));A(e,{daysInMonth:o,paddingDays:v,currentDay:u,dateString:c,daysPrevMonth:l,firstDay:r,nextMonthDayDifference:s-(o+v-1),year:a,day:i,month:n},t),function(e,t){var a=document.getElementById("iconPrevCalendar"),n=document.getElementById("iconNextCalendar");t.rangeSelection&&d(),a.addEventListener("click",(function(){t.month=t.month>0?t.month-1:11,B(e,t)})),n.addEventListener("click",(function(){t.month=t.month<11?t.month+1:0,B(e,t)}))}(e,t)};!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.disableWeekend,n=void 0!==a&&a,d=t.disableCol,i=void 0===d?[]:d,r=t.iconNext,o=void 0===r?"default":r,l=t.iconPrev,s=void 0===l?"default":l,c=t.responsive,u=void 0!==c&&c,v=t.rangeSelection,m=void 0!==v&&v,y=t.borderCollapse,p=void 0!==y&&y,h=t.borderColor,g=void 0!==h&&h,f=t.borderSpacing,b=void 0!==f&&f,L=t.shortDays,k=void 0!==L&&L,M=t.disablePrevMonthDays,w=void 0!==M&&M,x=t.disableNextMonthDays,T=void 0!==x&&x,S=t.weekEndColor,I=void 0===S?"default":S,A=t.disabledColor,N=void 0===A?"default":A,P=t.year,H=void 0===P?D:P,W=t.month,G=void 0===W?E:W,q=t.day,F=void 0===q?C:q,O={responsive:u,disableWeekend:n,iconNext:o,iconPrev:s,rangeSelection:m,borderCollapse:p,borderColor:g,borderSpacing:b,shortDays:k,disableNextMonthDays:T,disablePrevMonthDays:w,weekEndColor:I,disabledColor:N,year:H,month:G,day:F,disableCol:i};B(e,O)}("calendar-div",{responsive:!0,disabledColor:"#eee",disableWeekend:!0,shortDays:!0,disablePrevMonthDays:!0,rangeSelection:!0})})();