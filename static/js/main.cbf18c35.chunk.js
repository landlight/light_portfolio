(this.webpackJsonplight_portfolio=this.webpackJsonplight_portfolio||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),s=(a(16),a(17),a(10)),o=a(2);var i=function(e){var t=Object(n.useState)("home"),a=Object(s.a)(t,2),r=a[0],c=a[1];function i(e){if(r===e)return"active"}return l.a.createElement("div",{className:"topnav",id:"myTopnav"},e.navItems.map((function(e){return l.a.createElement("a",{className:i(e.id),onClick:function(){return function(e){var t=document.getElementById(e);t&&window.scrollTo(0,t.offsetTop-53),c(e)}(e.id)}},e.name)})),l.a.createElement("a",{href:"javascript:void(0);",className:"icon",onClick:function(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}},l.a.createElement(o.a,null)))},m=a(23),p=a(24),E=a(9),d=a.n(E),u={"padding-top":"10px",display:"flex","align-items":"center","text-align":"center"},h={color:"#33A1FF"},g={color:"grey","font-weight":"light"},v={"padding-bottom":"10px","padding-left":"80px","padding-right":"80px"},y={"text-align":"center"},f={width:"35px",height:"35px"};var x=function(e){return l.a.createElement("div",null,l.a.createElement("div",{style:u},l.a.createElement("img",{src:d.a,className:"mainProfile",alt:"mainProfile"})),l.a.createElement("h1",{className:"text-uppercase",style:h},"Chit Khine"),l.a.createElement("h3",{style:g},"FullStack Developer"),l.a.createElement(m.a,{style:v},l.a.createElement(p.a,{xs:"4",style:y},l.a.createElement("a",{href:"https://github.com/landlight",target:"_blank",rel:"noopener noreferrer",style:g},l.a.createElement(o.c,{style:f}))),l.a.createElement(p.a,{xs:"4",style:y},l.a.createElement("a",{href:"https://gitlab.com/landlight",target:"_blank",rel:"noopener noreferrer",style:g},l.a.createElement(o.d,{style:f}))),l.a.createElement(p.a,{xs:"4",style:y},l.a.createElement("a",{href:"https://www.linkedin.com/in/chit-khine-891a82b5/",target:"_blank",rel:"noopener noreferrer",style:g},l.a.createElement(o.e,{style:f})))))},b={color:"grey","font-weight":"light","text-align":"left",padding:"10px"},w={color:"grey","font-weight":"light",padding:"10px"},N={width:"17px",height:"17px"};var k=function(){return l.a.createElement("div",{class:"portfo"},l.a.createElement("introduction",null,l.a.createElement("h2",{className:"text-uppercase",style:b},"Portfolio"),l.a.createElement("div",{className:"text-uppercase",style:w},"Hi I am ",l.a.createElement("strong",null,"Chit Khine"),". I am a FullStack Developer but I specialized more in the ",l.a.createElement("strong",null,"Backend API Development.")),l.a.createElement("div",{className:"text-uppercase",style:w},"I would love to learn and improve myself continuously with the ever evolving technologies.")),l.a.createElement("div",{className:"personal"},l.a.createElement("div",{className:"personalinfo"},l.a.createElement("h3",{className:"text-uppercase",style:b},"Personal Info"),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Name : ",l.a.createElement("strong",{class:"text-uppercase"},"Chit Khine"))),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Nickname : ",l.a.createElement("strong",{class:"text-uppercase"},"Light"))),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Highest Degree : ",l.a.createElement("strong",{class:"text-uppercase"},"Master of Science (IT)"))),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Phone : ",l.a.createElement("strong",{class:"text-uppercase"},"+66958163472"))),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Email : ",l.a.createElement("strong",null,"ck.light@gmail.com"))),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Address : ",l.a.createElement("strong",{class:"text-uppercase"},"Bangkok, Thailand")))),l.a.createElement("div",{className:"personalskills"},l.a.createElement("h3",{className:"text-uppercase",style:b},"Personal Skills"),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"A contributing team player with positive attitude")),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Excellent in communication")),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Willing to learn and improve consistently")),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Enjoy to solve problems with proper solutions")),l.a.createElement("div",{style:w},l.a.createElement("span",null,l.a.createElement(o.b,{style:N}),"Being productive under tight schedules and pressure")))))};var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i,{navItems:[{id:"home",name:"Home",href:"#home"},{id:"portfolio",name:"Portfolio",href:"#portfolio"}]}),l.a.createElement("main",{className:"main"},l.a.createElement("div",{id:"home",className:"home"},l.a.createElement(x,null)),l.a.createElement("div",{id:"portfolio",className:"portfolio"},l.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(20);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a.p+"static/media/ck.e06d6e23.jpg"}},[[11,1,2]]]);
//# sourceMappingURL=main.cbf18c35.chunk.js.map