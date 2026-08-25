 (function(){
"use strict";
var $=function(s,c){return (c||document).querySelector(s)};
var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var rs=function(n){return "Rs "+n.toLocaleString("en-PK")};

/* ---------- DATA ---------- */
var IMG={
  seekh:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop",
  karahi:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop",
  tikka:"https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop",
  boti:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
  malai:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
  chops:"https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop",
  nihari:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop",
  handi:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
  daal:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
  qorma:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
  biryani:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
  pulao:"https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop",
  naan:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
  roti:"https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop",
  paratha:"https://images.unsplash.com/photo-1619221882220-947b3d3c8861?q=80&w=800&auto=format&fit=crop",
  raita:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop",
  kheer:"https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
  gulab:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop",
  falooda:"https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=800&auto=format&fit=crop",
  lassi:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop",
  chai:"https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=800&auto=format&fit=crop",
  soda:"https://images.unsplash.com/photo-1437418747212-8d9709afab22?q=80&w=800&auto=format&fit=crop"
};

var MENU=[
 {id:"m1", cat:"grill", n:"Beef Seekh Kebab", d:"Hand-minced beef, green chilli and roasted coriander, pressed onto skewers and cooked straight over coals.", p:640, img:IMG.seekh, tag:"Best seller"},
 {id:"m2", cat:"grill", n:"Chicken Malai Boti", d:"Cream and cheddar marinade held overnight, grilled soft with a light char on the edges.", p:720, img:IMG.malai},
 {id:"m3", cat:"grill", n:"Mutton Champ", d:"Six rib chops in a yoghurt and papaya marinade, finished with lemon and black pepper.", p:1290, img:IMG.chops, tag:"Chef's pick"},
 {id:"m4", cat:"grill", n:"Chicken Tikka (Half)", d:"Bone-in leg and thigh, deep red masala, twenty minutes over the pit. Served with naan.", p:480, img:IMG.tikka},
 {id:"m5", cat:"grill", n:"Beef Boti", d:"Cubes of undercut in a dry garam masala rub, skewered with onion and capsicum.", p:790, img:IMG.boti},
 {id:"m6", cat:"grill", n:"Mixed Grill Platter", d:"Seekh, malai boti, tikka and champ on one tray with mint chutney, salad and four rotis.", p:2150, img:IMG.boti, tag:"For 3–4"},

 {id:"m7", cat:"karahi", n:"Mutton Karahi (1 kg)", d:"Slow cooked in the wok for fifty minutes with tomato, ginger and whole black pepper.", p:2680, img:IMG.karahi, tag:"Signature"},
 {id:"m8", cat:"karahi", n:"Chicken White Karahi (1 kg)", d:"No tomato, no colour — just yoghurt, cream, green chilli and a lot of black pepper.", p:1740, img:IMG.handi},
 {id:"m9", cat:"karahi", n:"Beef Nihari", d:"Shank simmered from midnight, served with ginger julienne, lemon and fried onion.", p:690, img:IMG.nihari, tag:"Limited daily"},
 {id:"m10", cat:"karahi", n:"Chicken Handi", d:"Boneless chicken in a sealed clay pot with cashew and cream. Rich and mild.", p:1180, img:IMG.handi},
 {id:"m11", cat:"karahi", n:"Daal Makhani", d:"Black lentils on low heat for nine hours, finished with butter and a smoke of coal.", p:480, img:IMG.daal},
 {id:"m12", cat:"karahi", n:"Mutton Qorma", d:"Brown onion and yoghurt base, cardamom-forward, the way it is made at weddings here.", p:1320, img:IMG.qorma},

 {id:"m13", cat:"rice", n:"Chicken Biryani", d:"Long-grain sella layered with chicken masala and kewra, sealed and steamed to order.", p:520, img:IMG.biryani, tag:"Best seller"},
 {id:"m14", cat:"rice", n:"Mutton Biryani", d:"Same method, mutton shoulder. Takes twenty-five minutes — worth the wait.", p:760, img:IMG.biryani},
 {id:"m15", cat:"rice", n:"Beef Pulao", d:"Cooked in bone stock with whole spice, no colour added. Served with kachumber.", p:610, img:IMG.pulao},
 {id:"m16", cat:"rice", n:"Kabuli Pulao", d:"Afghan style with carrot, raisin and almond over a mutton shank.", p:980, img:IMG.pulao},

 {id:"m17", cat:"bread", n:"Tandoori Roti", d:"Whole wheat, straight off the wall of the wood-fired tandoor.", p:35, img:IMG.roti},
 {id:"m18", cat:"bread", n:"Butter Naan", d:"Soft white flour naan brushed with desi ghee as it comes out.", p:80, img:IMG.naan},
 {id:"m19", cat:"bread", n:"Garlic Cheese Naan", d:"Mozzarella and roasted garlic folded through, served in four pieces.", p:280, img:IMG.naan, tag:"Popular"},
 {id:"m20", cat:"bread", n:"Aloo Paratha", d:"Layered and pan-fried with spiced potato, served with butter and raita.", p:210, img:IMG.paratha},
 {id:"m21", cat:"bread", n:"Raita &amp; Salad", d:"Mint yoghurt raita with a plate of onion, cucumber, tomato and lemon.", p:150, img:IMG.raita},

 {id:"m22", cat:"sweet", n:"Kheer", d:"Rice pudding cooked down slowly, chilled, topped with pistachio.", p:220, img:IMG.kheer},
 {id:"m23", cat:"sweet", n:"Gulab Jamun (4 pc)", d:"Fried khoya dumplings in warm cardamom syrup.", p:260, img:IMG.gulab},
 {id:"m24", cat:"sweet", n:"Kashmiri Falooda", d:"Rose syrup, vermicelli, basil seed and kulfi in a tall glass.", p:340, img:IMG.falooda, tag:"Popular"},

 {id:"m25", cat:"drink", n:"Sweet Lassi", d:"Thick set yoghurt blended with sugar and ice, served in a steel tumbler.", p:190, img:IMG.lassi},
 {id:"m26", cat:"drink", n:"Doodh Patti Chai", d:"Full milk tea boiled down on the stove. One cup, properly made.", p:120, img:IMG.chai},
 {id:"m27", cat:"drink", n:"Fresh Lime Soda", d:"Lime, soda and black salt. Sweet or salted, tell us which.", p:160, img:IMG.soda},
 {id:"m28", cat:"drink", n:"Soft Drink (Regular)", d:"Chilled bottle. Cola, lemon-lime or orange.", p:100, img:IMG.soda}
];

var CATS=[
 {k:"grill",  l:"Charcoal Grill"},
 {k:"karahi", l:"Karahi & Curries"},
 {k:"rice",   l:"Rice & Biryani"},
 {k:"bread",  l:"Breads & Sides"},
 {k:"sweet",  l:"Desserts"},
 {k:"drink",  l:"Drinks"}
];

var SIGS=[
 {id:"m7",  rank:"No. 01", n:"Mutton Karahi", d:"Fifty minutes in the wok. Tomato, ginger, crushed black pepper — the plate this place was built on.", p:2680, img:IMG.karahi},
 {id:"m1",  rank:"No. 02", n:"Beef Seekh Kebab", d:"Minced by hand every morning, never a machine. Green chilli, roasted coriander, straight over coal.", p:640, img:IMG.seekh},
 {id:"m9",  rank:"No. 03", n:"Beef Nihari", d:"Shank on the fire from midnight. Ginger, lemon, fried onion. Sold out most nights by ten.", p:690, img:IMG.nihari}
];

var REVIEWS=[
 {q:"The nihari finishes by 10 pm and now I know why. I brought my father, who is impossible to please with food, and he asked for the recipe. They did not give it.", n:"Hamza Tariq", m:"Google · 3 weeks ago", i:"H"},
 {q:"We booked the rooftop for eleven people on a Friday. Table was ready, the karahi came out at the same time as the bread, and nobody had to ask for anything twice.", n:"Ayesha Nadeem", m:"Google · 1 month ago", i:"A"},
 {q:"Ordered delivery to Peoples Colony at half past midnight. Arrived in twenty-two minutes and the seekh was still hot enough to steam the box. That is rare here.", n:"Bilal Sheikh", m:"Google · 2 weeks ago", i:"B"}
];

/* ---------- STRIP ---------- */
var stripItems=["Charcoal fired daily","Fresh cut, never frozen","Wood-fired tandoor","Open till 1 am","Free delivery over Rs 2,000","Susan Road, Faisalabad"];
var strip=$("#strip");
if(strip){
  var html="";
  for(var s=0;s<2;s++){ for(var i=0;i<stripItems.length;i++){ html+="<span>"+stripItems[i]+"</span>"; } }
  strip.innerHTML=html;
}

/* ---------- SIGNATURE ---------- */
var sg=$("#sigGrid");
if(sg){
  sg.innerHTML=SIGS.map(function(x){
    return '<article class="sig rv">'+
      '<div class="sig-img"><img src="'+x.img+'" alt="'+x.n+'" loading="lazy">'+
      '<span class="sig-rank">'+x.rank+'</span></div>'+
      '<div class="sig-body"><h3>'+x.n+'</h3><p>'+x.d+'</p>'+
      '<div class="sig-foot"><span class="price"><small>Rs</small> '+x.p.toLocaleString("en-PK")+'</span>'+
      '<button class="btn btn-gold btn-sm add" data-id="'+x.id+'">Add to cart</button></div></div></article>';
  }).join("");
}

/* ---------- REVIEWS ---------- */
var rg=$("#revGrid");
if(rg){
  var star='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>';
  rg.innerHTML=REVIEWS.map(function(x){
    return '<article class="rev"><div class="stars" aria-label="5 out of 5 stars">'+star+star+star+star+star+'</div>'+
      '<blockquote>&ldquo;'+x.q+'&rdquo;</blockquote>'+
      '<div class="rev-who"><span class="av" aria-hidden="true">'+x.i+'</span>'+
      '<div><b>'+x.n+'</b><span>'+x.m+'</span></div></div></article>';
  }).join("");
}

/* ---------- MENU TABS ---------- */
var tabs=$("#tabs"), grid=$("#menuGrid"), active=CATS[0].k;
function counts(k){ return MENU.filter(function(m){return m.cat===k}).length; }
if(tabs){
  tabs.innerHTML=CATS.map(function(c){
    return '<button class="tab'+(c.k===active?' on':'')+'" role="tab" data-cat="'+c.k+'" aria-selected="'+(c.k===active)+'">'+
      c.l+' <em>'+counts(c.k)+'</em></button>';
  }).join("");
}
function drawMenu(){
  if(!grid) return;
  var list=MENU.filter(function(m){return m.cat===active});
  grid.innerHTML=list.map(function(m,i){
    return '<article class="dish" style="animation-delay:'+(i*45)+'ms">'+
      '<div class="dish-img"><img src="'+m.img+'" alt="'+m.n+'" loading="lazy"></div>'+
      '<div class="dish-b"><div class="dish-t"><h3>'+m.n+(m.tag?'<span class="tag">'+m.tag+'</span>':'')+'</h3>'+
      '<span class="price">'+rs(m.p)+'</span></div>'+
      '<p>'+m.d+'</p>'+
      '<button class="dish-add add" data-id="'+m.id+'">Add to cart</button></div></article>';
  }).join("");
}
drawMenu();
if(tabs) tabs.addEventListener("click",function(e){
  var b=e.target.closest(".tab"); if(!b) return;
  active=b.dataset.cat;
  $$(".tab",tabs).forEach(function(t){
    var on=t===b; t.classList.toggle("on",on); t.setAttribute("aria-selected",on);
  });
  drawMenu();
});

/* ---------- TOAST ---------- */
var toastEl=$("#toast"), tT;
function toast(msg){
  if(!toastEl) return;
  toastEl.textContent=msg; toastEl.classList.add("on");
  clearTimeout(tT); tT=setTimeout(function(){toastEl.classList.remove("on")},2300);
}

/* ---------- CART ---------- */
var cart=[];
var cartEl=$("#cart"), scrim=$("#scrim"), body=$("#cartBody"), ft=$("#cartFt");
var DELIVERY=120, FREE_OVER=2000;

function find(id){ var a=MENU.filter(function(m){return m.id===id}); return a[0]; }
function subtotal(){ return cart.reduce(function(t,c){return t+c.p*c.q},0); }

function addItem(id){
  var m=find(id); if(!m) return;
  var ex=cart.filter(function(c){return c.id===id})[0];
  if(ex) ex.q++;
  else cart.push({id:id,n:m.n,p:m.p,img:m.img,q:1});
  render(); toast(m.n+" added");
}
function setQty(id,delta){
  var ex=cart.filter(function(c){return c.id===id})[0]; if(!ex) return;
  ex.q+=delta;
  if(ex.q<=0) cart=cart.filter(function(c){return c.id!==id});
  render();
}

function render(){
  var n=cart.reduce(function(t,c){return t+c.q},0);
  var cnt=$("#cartCnt");
  cnt.textContent=n; cnt.classList.toggle("show",n>0);
  $("#cartMeta").textContent=n+(n===1?" item":" items");

  if(!cart.length){
    body.innerHTML='<div class="cart-empty">'+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2.2l2.1 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 8H6.2"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>'+
      '<p>Nothing here yet. Pick something off the menu.</p>'+
      '<button class="btn btn-ghost btn-sm" id="goMenu">Browse the menu</button></div>';
    ft.hidden=true;
    return;
  }
  ft.hidden=false;
  body.innerHTML=cart.map(function(c){
    return '<div class="ci"><img src="'+c.img+'" alt="'+c.n+'">'+
      '<div class="ci-b"><b>'+c.n+'</b><span>'+rs(c.p*c.q)+'</span></div>'+
      '<div class="qty"><button data-d="-1" data-id="'+c.id+'" aria-label="Reduce quantity of '+c.n+'">−</button>'+
      '<b>'+c.q+'</b>'+
      '<button data-d="1" data-id="'+c.id+'" aria-label="Increase quantity of '+c.n+'">+</button></div></div>';
  }).join("");

  var sub=subtotal();
  var del=sub>=FREE_OVER?0:DELIVERY;
  $("#sub").textContent=rs(sub);
  $("#del").textContent=del===0?"Free":rs(del);
  $("#delLbl").textContent=del===0?"Delivery (over Rs 2,000)":"Delivery";
  $("#tot").textContent=rs(sub+del);
}

function openCart(){
  cartEl.classList.add("open"); scrim.classList.add("on");
  cartEl.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeCart(){
  cartEl.classList.remove("open"); scrim.classList.remove("on");
  cartEl.setAttribute("aria-hidden","true"); document.body.style.overflow="";
}
$("#cartOpen").addEventListener("click",openCart);
$("#cartClose").addEventListener("click",closeCart);
scrim.addEventListener("click",function(){closeCart();closeDrawer()});

body.addEventListener("click",function(e){
  var q=e.target.closest("[data-d]");
  if(q){ setQty(q.dataset.id, parseInt(q.dataset.d,10)); return; }
  if(e.target.id==="goMenu"){ closeCart(); document.getElementById("menu").scrollIntoView({behavior:"smooth"}); }
});

document.addEventListener("click",function(e){
  var a=e.target.closest(".add"); if(!a) return;
  addItem(a.dataset.id);
  if(a.classList.contains("dish-add")){
    a.classList.add("done"); var old=a.textContent; a.textContent="Added ✓";
    setTimeout(function(){a.classList.remove("done");a.textContent=old},1200);
  }
});

$("#placeBtn").addEventListener("click",function(){
  var sub=subtotal(); var del=sub>=FREE_OVER?0:DELIVERY;
  var id="MM-"+Math.floor(100000+Math.random()*899999);
  body.innerHTML='<div class="cart-empty"><svg viewBox="0 0 24 24" style="stroke:#4ADE80" aria-hidden="true"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>'+
    '<p style="color:var(--bone);font-size:16px;margin-bottom:8px"><b>Order placed</b></p>'+
    '<p style="font-family:var(--mono);font-size:12px;letter-spacing:.12em;color:var(--brass)">'+id+'</p>'+
    '<p style="margin-top:14px">Total '+rs(sub+del)+'. We will call you on the number you order from to confirm the address, usually inside five minutes.</p>'+
    '<button class="btn btn-ghost btn-sm" id="goMenu">Order something else</button></div>';
  ft.hidden=true; cart=[];
  $("#cartCnt").classList.remove("show"); $("#cartCnt").textContent="0"; $("#cartMeta").textContent="0 items";
  toast("Order "+id+" placed");
});
render();

/* ---------- HEADER / DRAWER ---------- */
var hdr=$("#hdr"), burger=$("#burger"), drawer=$("#drawer");
function onScroll(){ hdr.classList.toggle("stuck", window.scrollY>24); }
onScroll(); window.addEventListener("scroll",onScroll,{passive:true});

function openDrawer(){
  drawer.classList.add("open"); burger.classList.add("x");
  burger.setAttribute("aria-expanded","true"); drawer.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  $$("#drawer a").forEach(function(a,i){ a.style.animationDelay=(60+i*45)+"ms" });
}
function closeDrawer(){
  drawer.classList.remove("open"); burger.classList.remove("x");
  burger.setAttribute("aria-expanded","false"); drawer.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
burger.addEventListener("click",function(){
  drawer.classList.contains("open")?closeDrawer():openDrawer();
});
$$("#drawer a").forEach(function(a){ a.addEventListener("click",closeDrawer) });
document.addEventListener("keydown",function(e){
  if(e.key==="Escape"){ closeDrawer(); closeCart(); }
});
window.addEventListener("resize",function(){
  if(window.innerWidth>900 && drawer.classList.contains("open")) closeDrawer();
});

/* active nav link */
var navLinks=$$("#nav a");
var secs=navLinks.map(function(a){ return document.querySelector(a.getAttribute("href")) }).filter(Boolean);
if("IntersectionObserver" in window && secs.length){
  var so=new IntersectionObserver(function(en){
    en.forEach(function(e){
      if(e.isIntersecting){
        navLinks.forEach(function(l){ l.classList.toggle("on", l.getAttribute("href")==="#"+e.target.id) });
      }
    });
  },{rootMargin:"-45% 0px -50% 0px"});
  secs.forEach(function(s){ so.observe(s) });
}

/* ---------- REVEAL ---------- */
if("IntersectionObserver" in window){
  var ro=new IntersectionObserver(function(en,o){
    en.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); o.unobserve(e.target); } });
  },{threshold:.08,rootMargin:"0px 0px -40px 0px"});
  $$(".rv").forEach(function(el){ ro.observe(el) });
}else{ $$(".rv").forEach(function(el){ el.classList.add("in") }); }

/* ---------- RESERVATION FORM ---------- */
var form=$("#resForm");
var dateEl=$("#rDate"), timeEl=$("#rTime"), guestEl=$("#rGuests");

/* time options 12:00pm -> 12:30am, 30 min steps */
(function(){
  var out=[];
  for(var h=12;h<=24;h++){
    for(var m=0;m<60;m+=30){
      if(h===24 && m>30) break;
      var hh=h%24, ap=hh>=12&&hh<24?"pm":"am", disp=hh%12===0?12:hh%12;
      var val=("0"+hh).slice(-2)+":"+("0"+m).slice(-2);
      out.push('<option value="'+val+'">'+disp+":"+("0"+m).slice(-2)+" "+ap+"</option>");
    }
  }
  timeEl.insertAdjacentHTML("beforeend",out.join(""));
})();

/* guests 1-10 */
(function(){
  var out=[];
  for(var i=1;i<=10;i++) out.push('<option value="'+i+'">'+i+(i===1?" guest":" guests")+(i===10?" (max online)":"")+'</option>');
  guestEl.insertAdjacentHTML("beforeend",out.join(""));
})();

/* date bounds: today .. +60 days */
(function(){
  var t=new Date(), pad=function(n){return ("0"+n).slice(-2)};
  var iso=function(d){return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())};
  dateEl.min=iso(t);
  var max=new Date(t.getTime()+60*86400000);
  dateEl.max=iso(max);
})();

function fail(fld,errId,msg){
  document.getElementById(fld).closest(".fld").classList.add("bad");
  document.getElementById(errId).textContent=msg;
}
function clearErr(el){
  var f=el.closest(".fld"); if(f) f.classList.remove("bad");
}
["rName","rPhone","rDate","rTime","rGuests"].forEach(function(id){
  var el=document.getElementById(id);
  el.addEventListener("input",function(){clearErr(el)});
  el.addEventListener("change",function(){clearErr(el)});
});

form.addEventListener("submit",function(e){
  e.preventDefault();
  $$(".fld",form).forEach(function(f){f.classList.remove("bad")});
  $("#resOk").classList.remove("show");

  var ok=true;
  var name=$("#rName").value.trim();
  var phoneRaw=$("#rPhone").value.trim();
  var phone=phoneRaw.replace(/[\s\-()]/g,"");

  if(name.length<3){ fail("rName","eName","Enter your full name"); ok=false; }
  else if(!/^[A-Za-z\u0600-\u06FF.'\s-]+$/.test(name)){ fail("rName","eName","Letters only, please"); ok=false; }

  if(!phone){ fail("rPhone","ePhone","Enter a phone number"); ok=false; }
  else if(!/^(?:\+92|0092|0)?3\d{9}$/.test(phone) && !/^(?:\+92|0)?41\d{7,8}$/.test(phone)){
    fail("rPhone","ePhone","Use a valid Pakistani number, e.g. 0300 1234567"); ok=false;
  }

  if(!dateEl.value){ fail("rDate","eDate","Pick a date"); ok=false; }
  else{
    var today=new Date(); today.setHours(0,0,0,0);
    var picked=new Date(dateEl.value+"T00:00:00");
    if(isNaN(picked.getTime())){ fail("rDate","eDate","Pick a valid date"); ok=false; }
    else if(picked<today){ fail("rDate","eDate","That date has passed"); ok=false; }
  }

  if(!timeEl.value){ fail("rTime","eTime","Pick a time"); ok=false; }
  else if(dateEl.value){
    var now=new Date();
    var slot=new Date(dateEl.value+"T"+(timeEl.value==="24:00"?"23:59":timeEl.value)+":00");
    if(timeEl.value>="24:00"||parseInt(timeEl.value,10)===24){ slot.setDate(slot.getDate()+1); }
    if(slot.getTime()-now.getTime() < 45*60000 && slot.toDateString()===now.toDateString()){
      fail("rTime","eTime","Book at least 45 minutes ahead, or call us"); ok=false;
    }
  }

  if(!guestEl.value){ fail("rGuests","eGuests","Choose party size"); ok=false; }

  if(!ok){ $(".fld.bad input, .fld.bad select").focus(); return; }

  var ref="MMB-"+Math.floor(1000+Math.random()*8999);
  var dObj=new Date(dateEl.value+"T00:00:00");
  var pretty=dObj.toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long"});
  var tLabel=timeEl.options[timeEl.selectedIndex].textContent;

  $("#okTitle").textContent="Table reserved · "+ref;
  $("#okBody").textContent=name+", your table for "+guestEl.value+" is held for "+pretty+" at "+tLabel+
    ". We will call "+phoneRaw+" within 15 minutes to confirm. The table is held 20 minutes past your time.";
  $("#resOk").classList.add("show");
  form.reset();
  toast("Reservation "+ref+" received");
  $("#resOk").scrollIntoView({behavior:"smooth",block:"center"});
});

/* ---------- YEAR ---------- */
$("#yr").textContent=new Date().getFullYear();

/* ---------- SMOOTH ANCHORS (safety for old browsers) ---------- */
$$('a[href^="#"]').forEach(function(a){
  a.addEventListener("click",function(e){
    var id=a.getAttribute("href");
    if(id.length<2) return;
    var t=document.querySelector(id);
    if(!t) return;
    e.preventDefault();
    closeDrawer(); closeCart();
    var top=t.getBoundingClientRect().top+window.scrollY-(window.innerWidth>900?70:66);
    window.scrollTo({top:top,behavior:"smooth"});
  });
});
})();
