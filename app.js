
var PHONE="233550783841";
var P=[
{id:"i12",c:"iPhones",n:"iPhone 12",d:"128 GB",p:2700,t:"phone",col:"#4aa3e8"},
{id:"i12p",c:"iPhones",n:"iPhone 12 Pro",d:"256 GB",p:3500,t:"phone",col:"#2f5b78"},
{id:"i12pm",c:"iPhones",n:"iPhone 12 Pro Max",d:"256 GB",p:4300,t:"phone",col:"#2f5b78"},
{id:"i13",c:"iPhones",n:"iPhone 13",d:"128 GB",p:3400,t:"phone",col:"#e7a9b8"},
{id:"i14",c:"iPhones",n:"iPhone 14",d:"128 GB",p:4000,t:"phone",col:"#6b5fa8"},
{id:"i14p1",c:"iPhones",n:"iPhone 14 Pro",d:"128 GB",p:5800,t:"phone",col:"#4a4d52"},
{id:"i14p2",c:"iPhones",n:"iPhone 14 Pro",d:"256 GB",p:6100,t:"phone",col:"#4a4d52"},
{id:"i14pm1",c:"iPhones",n:"iPhone 14 Pro Max",d:"128 GB",p:6600,t:"phone",col:"#4a4d52"},
{id:"i14pm2",c:"iPhones",n:"iPhone 14 Pro Max",d:"256 GB",p:7100,t:"phone",col:"#4a4d52"},
{id:"i15a",c:"iPhones",n:"iPhone 15",d:"128 GB",p:5400,t:"phone",col:"#d9c9a8"},
{id:"i15b",c:"iPhones",n:"iPhone 15",d:"256 GB",p:6100,t:"phone",col:"#d9c9a8"},
{id:"i15pl",c:"iPhones",n:"iPhone 15 Plus",d:"128 GB",p:5800,t:"phone",col:"#9bb7d4"},
{id:"i16a",c:"iPhones",n:"iPhone 16",d:"128 GB",p:7000,t:"phone",col:"#f0a7c0"},
{id:"i16b",c:"iPhones",n:"iPhone 16",d:"256 GB",p:7800,t:"phone",col:"#f0a7c0"},
{id:"i16pl",c:"iPhones",n:"iPhone 16 Plus",d:"256 GB",p:8700,t:"phone",col:"#3f6fd1"},
{id:"i16pm",c:"iPhones",n:"iPhone 16 Pro Max",d:"256 GB",p:10050,t:"phone",col:"#c9a98a"},
{id:"app2",c:"AirPods",b:"Promo",n:"AirPods Pro 2nd Gen",d:"Original",p:340,o:850,t:"pods"},
{id:"app1",c:"AirPods",b:"Promo",n:"AirPods Pro 1st Gen",d:"Clone",p:170,o:320,t:"pods"},
{id:"chg",c:"Accessories",n:"Type-C charger",d:"20W fast charging",p:90,o:120,t:"plug"}
];
(function(){function add(c,t,r,x){r.forEach(function(a,i){P.push({id:c[0]+x+i,c:c,n:a[0],d:a[1],p:a[2],t:t,col:a[3]||"#9bb7d4",e:1})})}
add("iPhones","phone",[["iPhone 16","128 GB · Brand new",11500,"#f0a7c0"],["iPhone 16 Plus","128 GB · Brand new",13000,"#5fb5b0"],["iPhone 16 Pro","128 GB · Brand new",16500,"#4a4d52"],["iPhone 16 Pro","256 GB · Brand new",18500,"#4a4d52"],["iPhone 16 Pro Max","256 GB · Brand new",21000,"#c9a98a"],["iPhone 16 Pro Max","512 GB · Brand new",24000,"#c9a98a"],["iPhone 16e","128 GB · Brand new",8500,"#dcdde2"],["iPhone 17","256 GB · Brand new",17000,"#8fb3e8"],["iPhone Air","256 GB · Brand new",19500,"#d8d8de"],["iPhone 17 Pro","256 GB · Brand new",23500,"#e0762b"],["iPhone 17 Pro Max","256 GB · Brand new",26500,"#e0762b"],["iPhone 17e","256 GB · Brand new",12500,"#f0a7c0"],["iPhone 18 Pro","256 GB · Brand new",26000,"#7a1f3d"],["iPhone 18 Pro Max","256 GB · Brand new",29000,"#7a1f3d"]],"n");
add("MacBooks","lap",[["MacBook Air 13-inch (2015–2017)","i5, 8 GB, 128 GB · UK-used",3200],["MacBook Pro 13-inch (2015)","i5, 8 GB, 128 GB · UK-used",3800],["MacBook Pro 13-inch (2017)","i5, 8 GB, 256 GB · UK-used",4800],["MacBook Air 13-inch (2018–2019)","i5, 8 GB, 128 GB · UK-used",5500],["MacBook Pro 15/16-inch (2019)","i7, 16 GB, 512 GB · UK-used",10500],["MacBook Air M1 (2020)","8 GB, 256 GB · UK-used",8000],["MacBook Pro 13-inch M1 (2020)","8 GB, 256 GB · UK-used",9500],["MacBook Air M2 (2022)","8 GB, 256 GB · UK-used",10500],["MacBook Pro 14-inch M1 Pro (2021)","16 GB, 512 GB · UK-used",15500],["MacBook Air 13-inch M3 (2024)","8 GB, 256 GB",12500],["MacBook Air 13-inch M4 (2025)","16 GB, 256 GB · Brand new",17500],["MacBook Air 13-inch M5 (2026)","16 GB, 512 GB · Brand new",22500],["MacBook Air 15-inch M5 (2026)","16 GB, 512 GB · Brand new",27000],["MacBook Pro 14-inch M5 (2025)","16 GB, 512 GB · Brand new",33000],["MacBook Pro 16-inch M4 Pro (2024)","24 GB, 512 GB · Brand new",50000]],"m");
add("AirPods","pods",[["AirPods 2nd Gen","Lightning case",650],["AirPods 3rd Gen","MagSafe case",1100],["AirPods 4","USB-C",1500],["AirPods 4","Active Noise Cancellation",2000],["AirPods Pro 1st Gen","Original",1200],["AirPods Pro 3","USB-C, noise cancellation",2800],["AirPods Max","USB-C headphones",5500]],"a");
add("Accessories","plug",[["35W dual USB-C charger","Charge two devices",220],["MagSafe charger","Wireless, USB-C",250],["USB-C to Lightning cable","1 m",90],["USB-C cable","2 m",120],["Apple Pencil (USB-C)","For iPad",650],["Apple Pencil Pro","For iPad",1300],["AirTag","1 pack",350],["AirTag","4 pack",1200],["Apple Watch Sport Band","All sizes",250],["Apple Watch charger","Magnetic, USB-C",220],["MagSafe silicone case","iPhone",300],["Tempered glass protector","iPhone",60],["MagSafe power bank","Wireless",450],["Magic Mouse","Wireless",1200],["Magic Keyboard","Wireless",1500],["USB-C multiport hub","HDMI, USB, card reader",280]],"c");
add("Watches","watch",[["Apple Watch Series 12 42mm","GPS · Brand new",8500],["Apple Watch Series 12 46mm","GPS · Brand new",9500],["Apple Watch Series 12 46mm","GPS + Cellular · Brand new",11500],["Apple Watch Ultra 4","49mm, Titanium · Brand new",16000],["Apple Watch Ultra 3","49mm · Brand new",14000],["Apple Watch SE 3 40mm","GPS · Brand new",5000],["Apple Watch SE 3 44mm","GPS · Brand new",5500],["Apple Watch Series 11 42mm","GPS · Brand new",7500],["Apple Watch Series 10","GPS · UK-used",5500],["Apple Watch Series 9","GPS · UK-used",4500],["Apple Watch Series 8","GPS · UK-used",3600],["Apple Watch Series 7","GPS · UK-used",2800],["Apple Watch Ultra 2","49mm · UK-used",10500],["Apple Watch Ultra","49mm · UK-used",7500]],"w");
add("iPads","tab",[["iPad 9th Gen","64 GB, Wi-Fi · UK-used",2600],["iPad 10th Gen","64 GB, Wi-Fi · UK-used",3800],["iPad (A16)","128 GB, Wi-Fi · Brand new",6500],["iPad mini (A17 Pro)","128 GB, Wi-Fi · Brand new",9500],["iPad Air 5 (M1)","64 GB · UK-used",5800],["iPad Air 11-inch (M4)","128 GB, Wi-Fi · Brand new",11500],["iPad Air 13-inch (M4)","128 GB, Wi-Fi · Brand new",15000],["iPad Pro 12.9-inch (M1)","128 GB · UK-used",8500],["iPad Pro 11-inch (M5)","256 GB, Wi-Fi · Brand new",23000],["iPad Pro 13-inch (M5)","256 GB, Wi-Fi · Brand new",28500]],"p");
add("Desktops","imac",[["iMac 24-inch (M1, 2021)","8 GB, 256 GB · UK-used",9500],["iMac 27-inch (2019–2020)","Intel i5, 8 GB · UK-used",8500],["iMac 24-inch (M4)","16 GB, 256 GB · Brand new",29000],["Apple Studio Display","27-inch 5K · Brand new",30000]],"d");
add("Desktops","mini",[["Mac mini (M1, 2020)","8 GB, 256 GB · UK-used",5500],["Mac mini (M2, 2023)","8 GB, 256 GB · UK-used",7500],["Mac mini (M4)","16 GB, 256 GB · Brand new",15500],["Mac Studio (M4 Max)","36 GB, 512 GB · Brand new",48000],["Mac Pro (M2 Ultra)","64 GB, 1 TB · Brand new",125000]],"e");
add("Audio","spk",[["HomePod mini","Smart speaker",1800],["HomePod (2nd Gen)","Smart speaker",5500]],"u");
add("Audio","pods",[["Beats Solo 4","On-ear headphones",2800],["Beats Studio Pro","Over-ear headphones",4500],["Beats Fit Pro","Earbuds",2400],["Beats Studio Buds +","Earbuds",1500],["Beats Pill","Portable speaker",1800]],"b");
add("TV & Vision","mini",[["Apple TV 4K","128 GB, Wi-Fi + Ethernet",2400],["Apple Vision Pro","256 GB",65000]],"t");
})();
var cats=["All","iPhones","MacBooks","Desktops","iPads","Watches","AirPods","Audio","Accessories","TV & Vision"],cur="All",cart={};
P.sort(function(a,b){return cats.indexOf(a.c)-cats.indexOf(b.c)});
try{cart=JSON.parse(localStorage.getItem("ioshub-cart")||"{}")||{}}catch(e){cart={}}
var NIL={style:{},classList:{add:function(){},remove:function(){}}};function $(i){return document.getElementById(i)||NIL}
function money(n){return "GH₵"+n.toLocaleString("en-US")}
var Q={watch:'<svg viewBox="0 0 80 120"><rect x="26" y="2" width="28" height="116" rx="10" fill="#c4c8d0"/><rect x="14" y="30" width="52" height="60" rx="16" fill="#2a2f3a"/><rect x="19" y="35" width="42" height="50" rx="12" fill="#0a1226"/><rect x="66" y="52" width="4" height="12" rx="2" fill="#aeb2bb"/></svg>',tab:'<svg viewBox="0 0 100 130"><rect x="6" y="4" width="88" height="122" rx="10" fill="#c4c8d0"/><rect x="12" y="10" width="76" height="110" rx="5" fill="#0a1226"/></svg>',imac:'<svg viewBox="0 0 140 120"><rect x="10" y="6" width="120" height="76" rx="7" fill="#c4c8d0"/><rect x="15" y="11" width="110" height="56" rx="3" fill="#0a1226"/><path d="M58 82h24l5 28H53z" fill="#aeb2bb"/><rect x="44" y="108" width="52" height="5" rx="2.5" fill="#aeb2bb"/></svg>',mini:'<svg viewBox="0 0 120 80"><rect x="8" y="20" width="104" height="42" rx="10" fill="#c4c8d0"/><rect x="8" y="52" width="104" height="10" rx="5" fill="#aeb2bb"/></svg>',spk:'<svg viewBox="0 0 100 110"><rect x="12" y="8" width="76" height="94" rx="34" fill="#2a2f3a"/><ellipse cx="50" cy="22" rx="26" ry="8" fill="#4a5060"/></svg>'};
function art(p){
 var q=Q[p.t];if(q)return q;
 if(p.t==="lap")return '<svg viewBox="0 0 140 90"><rect x="18" y="8" width="104" height="62" rx="6" fill="#c4c8d0"/><rect x="23" y="13" width="94" height="52" rx="3" fill="#0a1226"/><rect x="4" y="70" width="132" height="9" rx="4.5" fill="#aeb2bb"/></svg>';
 if(p.t==="phone")return '<svg viewBox="0 0 100 200"><rect x="6" y="4" width="88" height="192" rx="16" fill="'+p.col+'"/><rect x="12" y="10" width="76" height="180" rx="11" fill="#0a1226"/><rect x="36" y="15" width="28" height="7" rx="3.5" fill="#000"/><circle cx="26" cy="38" r="0" /></svg>';
 if(p.t==="pods")return '<svg viewBox="0 0 120 100"><rect x="10" y="22" width="100" height="70" rx="26" fill="#fff" stroke="#c9d2e3" stroke-width="2"/><path d="M10 52h100" stroke="#c9d2e3" stroke-width="2"/><circle cx="60" cy="72" r="3" fill="#6ee7a0"/><ellipse cx="42" cy="22" rx="9" ry="14" fill="#fff" stroke="#c9d2e3" stroke-width="2"/><ellipse cx="78" cy="22" rx="9" ry="14" fill="#fff" stroke="#c9d2e3" stroke-width="2"/></svg>';
 return '<svg viewBox="0 0 100 120"><rect x="22" y="8" width="56" height="70" rx="12" fill="#fff" stroke="#c9d2e3" stroke-width="2"/><rect x="40" y="82" width="20" height="14" rx="3" fill="#fff" stroke="#c9d2e3" stroke-width="2"/><rect x="43" y="34" width="14" height="8" rx="4" fill="none" stroke="#9aa7c7" stroke-width="2"/></svg>';
}
function tabs0(){$("tabs").innerHTML=cats.map(function(c){return '<button class="tab" aria-pressed="'+(c===cur)+'" data-c="'+c+'">'+c+'</button>'}).join("")}
function grid0(){
 $("grid").innerHTML=P.filter(function(p){return cur==="All"||p.c===cur}).map(function(p){
  return '<article class="card"><div class="pic">'+art(p)+'</div><div class="info"><span class="tag">'+p.c+(p.b?' · '+p.b:'')+'</span><h3>'+p.n+'</h3><p>'+p.d+(p.e?' · est.':'')+'</p><div class="buy"><div class="price">'+money(p.p)+(p.o?'<s>'+money(p.o)+'</s>':'')+'</div><button class="add" data-id="'+p.id+'">Add to cart</button></div></div></article>'}).join("");
}
function save(){try{localStorage.setItem("ioshub-cart",JSON.stringify(cart))}catch(e){}}
function find(id){return P.filter(function(p){return p.id===id})[0]}
function render(){
 var ids=Object.keys(cart).filter(function(i){return find(i)&&cart[i]>0}),n=0,t=0;
 $("items").innerHTML=ids.length?ids.map(function(i){var p=find(i);n+=cart[i];t+=p.p*cart[i];
  return '<div class="item"><div><b>'+p.n+'</b><br><small>'+p.d+'</small></div><b>'+money(p.p*cart[i])+'</b><div class="qty"><button data-q="-1" data-id="'+i+'" aria-label="Remove one">−</button><span>'+cart[i]+'</span><button data-q="1" data-id="'+i+'" aria-label="Add one">+</button></div></div>'}).join(""):'<div class="empty">Your cart is empty.<br>Add something you like.</div>';
 $("count").textContent=n;$("total").textContent=money(t);$("send").disabled=!n;$("place").disabled=!n;$("send").style.opacity=$("place").style.opacity=n?1:.5;
}
function wa(msg){return "https://wa.me/"+PHONE+"?text="+encodeURIComponent(msg)}
function order(){
 var l=["Hello iOS Hub, I would like to order:",""],t=0;
 Object.keys(cart).forEach(function(i){var p=find(i);if(p&&cart[i]>0){l.push(cart[i]+" x "+p.n+" ("+p.d+") - "+money(p.p*cart[i]));t+=p.p*cart[i]}});
 l.push("","Total: "+money(t),"Please confirm availability and delivery cost. My location: ");
 window.open(wa(l.join("\n")),"_blank");
}
document.addEventListener("click",function(e){
 var b=e.target.closest("button,a");if(!b)return;
 if(b.dataset.c){cur=b.dataset.c;tabs();grid()}
 else if(b.classList.contains("add")){cart[b.dataset.id]=(cart[b.dataset.id]||0)+1;save();render();b.textContent="Added";setTimeout(function(){b.textContent="Add to cart"},900)}
 else if(b.dataset.q){cart[b.dataset.id]=Math.max(0,(cart[b.dataset.id]||0)+Number(b.dataset.q));save();render()}
});
$("open").onclick=function(){$("drawer").classList.add("open")};
$("close").onclick=$("shade").onclick=function(){$("drawer").classList.remove("open")};
document.addEventListener("keydown",function(e){if(e.key==="Escape")$("drawer").classList.remove("open")});
$("place").onclick=function(){
 var n=$("cn").value.trim(),ph=$("cp").value.trim(),loc=$("cl").value.trim();
 if(!n||!ph||!loc){alert("Please add your name, phone number and delivery location.");return}
 var items=[],t=0;
 Object.keys(cart).forEach(function(i){var p=find(i);if(p&&cart[i]>0){items.push(cart[i]+" x "+p.n+" ("+p.d+") - "+money(p.p*cart[i]));t+=p.p*cart[i]}});
 if(!items.length)return;
 var b=$("place");b.disabled=true;b.textContent="Placing order...";
 fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({"form-name":"orders",name:n,phone:ph,location:loc,items:items.join("\n"),total:String(t)}).toString()})
 .then(function(r){if(!r.ok)throw 0;cart={};save();render();var e=$("items");e.innerHTML='<div class="empty"></div>';e.firstChild.textContent="Thank you, "+n+"! Your order has been received. We will call you on "+ph+" to confirm."})
 .catch(function(){alert("Sorry, the order could not be sent. Please use the WhatsApp button instead.")})
 .finally(function(){b.textContent="Place order on website";render()})};
$("send").onclick=order;
$("wa-hero").href=wa("Hello iOS Hub, I have a question.");
$("fab").href=wa("Hello iOS Hub, I have a question.");$("fab").target="_blank";$("fab").rel="noopener";
$("wa-contact").href=wa("Hello iOS Hub, I have a question.");
$("wa-ask").href=wa("Hello iOS Hub, I am looking for: ");
["wa-hero","wa-contact","wa-ask"].forEach(function(i){$(i).target="_blank";$(i).rel="noopener"});
var H={iPhones:215,MacBooks:228,Desktops:250,iPads:190,Watches:160,AirPods:200,Audio:280,Accessories:35,'TV & Vision':330};
var art0=art;
art=function(p){
 if(p.t==='phone')return '<svg viewBox="0 0 100 200"><defs><linearGradient id="gs" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#0a1226"/></linearGradient></defs><rect x="6" y="4" width="88" height="192" rx="17" fill="'+p.col+'"/><rect x="11" y="9" width="78" height="182" rx="13" fill="url(#gs)"/><path d="M11 125C38 95 66 140 89 104v74a13 13 0 0 1-13 13H24a13 13 0 0 1-13-13z" fill="#60a5fa" opacity=".28"/><rect x="38" y="14" width="24" height="7" rx="3.5" fill="#000"/></svg>';
 return art0(p)};
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function img(p){return '<img class="ph" src="images/'+slug(p.n)+'.png" alt="'+p.n+'" loading="lazy" onload="this.previousElementSibling.style.display=\'none\'" onerror="if(this.src.indexOf(\'.png\')>0){this.src=this.src.replace(\'.png\',\'.jpg\')}else{this.remove()}">'}
function card(p){
 var bd=p.b?'<span class="bd p">'+p.b+'</span>':/Brand new/.test(p.d)?'<span class="bd n">New</span>':/UK-used/.test(p.d)?'<span class="bd">UK-used</span>':'';
 var d=p.d.replace(/ · (Brand new|UK-used)/,'');
 return '<article class="card"><div class="pic" style="--h:'+(H[p.c]||215)+'">'+bd+'<span class="dr">'+art(p)+'</span>'+img(p)+'</div><div class="info"><h3>'+p.n+'</h3><p>'+d+(p.e?' · est.':'')+'</p><div class="buy"><div class="price">'+money(p.p)+(p.o?'<s>'+money(p.o)+'</s>':'')+'</div><button class="add" data-id="'+p.id+'">Add to cart</button></div></div><a class="wl" target="_blank" rel="noopener" href="'+wa('Hello iOS Hub, I am interested in '+p.n+' ('+d+') at '+money(p.p)+'. Is it available?')+'">Order on WhatsApp</a></article>'}
function tabs(){$('tabs').innerHTML=cats.map(function(c){var n=c==='All'?P.length:P.filter(function(p){return p.c===c}).length;return '<button class="tab" aria-pressed="'+(c===cur)+'" data-c="'+c+'">'+c+'<span>'+n+'</span></button>'}).join('')}
function grid(){
 var s=($('q').value||'').toLowerCase().trim(),L=P.filter(function(p){return (cur==='All'||p.c===cur)&&(!s||(p.n+' '+p.d+' '+p.c).toLowerCase().indexOf(s)>-1)});
 var g=$('grid');
 if(cur!=='All'||s){g.className='grid';g.innerHTML=L.length?L.map(card).join(''):'<p class="sub">No match yet. Message us on WhatsApp and we will source it for you.</p>';return}
 g.className='';
 g.innerHTML=cats.slice(1).map(function(c){var l=L.filter(function(p){return p.c===c});return l.length?'<div class="grp"><div class="gh"><h3>'+c+'</h3><button class="tab" data-c="'+c+'">See all '+l.length+'</button></div><div class="grid">'+l.slice(0,4).map(card).join('')+'</div></div>':''}).join('');
}
$('q').oninput=function(){cur='All';tabs();grid()};
$("wa-cta").href=wa("Hello iOS Hub, I am looking for: ");$("wa-foot").href=wa("Hello iOS Hub, I have a question.");
["wa-cta","wa-foot"].forEach(function(i){$(i).target="_blank";$(i).rel="noopener"});
$("yr").textContent=new Date().getFullYear();
var u=new URLSearchParams(location.search).get("c");if(u&&cats.indexOf(u)>-1)cur=u;
if(document.getElementById("grid")){tabs();grid()}render();
var mb=document.getElementById("menu");if(mb)mb.onclick=function(){var o=document.querySelector("nav").classList.toggle("open");mb.setAttribute("aria-expanded",o)};
var cf=document.getElementById("cf");if(cf)cf.onsubmit=function(e){e.preventDefault();var n=cf.n.value.trim(),p=cf.p.value.trim(),t=cf.m.value.trim();window.open(wa("Hello iOS Hub, my name is "+n+(p?" ("+p+")":"")+". "+t),"_blank")};
var F=["iPhone 16 Pro Max","AirPods Pro 2nd Gen","MacBook Air M1 (2020)","Apple Watch Ultra 3"],fl=[];
F.forEach(function(n){var m=P.filter(function(p){return p.n===n})[0];if(m)fl.push(m)});
$("feat").innerHTML=fl.map(card).join("");
