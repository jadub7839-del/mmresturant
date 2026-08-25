 /* ============ TOKENS ============ */
:root{
  --ink:#0B0B0C;          /* near-black base */
  --ink-2:#141416;        /* raised surface */
  --ink-3:#1D1D20;        /* card */
  --brass:#C9A24A;        /* primary gold */
  --brass-lt:#E7CE8E;     /* highlight gold */
  --brass-dk:#8A6C24;     /* deep gold */
  --bone:#F6F3EC;         /* warm white */
  --bone-dim:rgba(246,243,236,.62);
  --line:rgba(201,162,74,.22);
  --ember:#B4472B;        /* charcoal-fire accent, used sparingly */

  --display:'Fraunces',Georgia,serif;
  --body:'Jost',system-ui,-apple-system,sans-serif;
  --mono:'JetBrains Mono',ui-monospace,monospace;

  --pad:clamp(20px,5vw,72px);
  --gap:clamp(28px,4vw,56px);
  --sec:clamp(64px,9vw,130px);
  --r:2px;
  --ease:cubic-bezier(.22,.61,.36,1);
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:78px;-webkit-text-size-adjust:100%}
html,body{max-width:100%;overflow-x:clip}
body{
  background:var(--ink);color:var(--bone);
  font-family:var(--body);font-weight:300;font-size:16px;line-height:1.65;
  overflow-x:hidden;width:100%;
  -webkit-font-smoothing:antialiased;
}
img{max-width:100%;display:block;height:auto}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit;color:inherit}
button{background:none;border:none;cursor:pointer}
ul{list-style:none}
:focus-visible{outline:2px solid var(--brass);outline-offset:3px}

.wrap{width:min(1240px,100% - (var(--pad)*2))!important;margin-inline:auto}
section{padding-block:var(--sec);position:relative}

/* eyebrow: a real signal — each section is a "course" on the page */
.eyebrow{
  font-family:var(--mono);font-size:11px;letter-spacing:.28em;text-transform:uppercase;
  color:var(--brass);display:flex;align-items:center;gap:12px;margin-bottom:18px;
}
.eyebrow::before{content:"";width:26px;height:1px;background:var(--brass);opacity:.7;flex:none}

h1,h2,h3{font-family:var(--display);font-weight:600;line-height:1.03;letter-spacing:-.02em}
h2{font-size:clamp(32px,5.4vw,62px)}
h3{font-size:clamp(20px,2.4vw,27px);line-height:1.15}
.lede{color:var(--bone-dim);font-size:clamp(15px,1.4vw,17.5px);max-width:56ch}

/* ============ BUTTONS ============ */
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  padding:15px 28px;border-radius:var(--r);
  font-family:var(--body);font-weight:500;font-size:13px;
  letter-spacing:.16em;text-transform:uppercase;
  transition:.35s var(--ease);cursor:pointer;text-align:center;
  border:1px solid transparent;white-space:nowrap;
}
.btn-gold{background:var(--brass);color:#100D06;border-color:var(--brass)}
.btn-gold:hover{background:var(--brass-lt);border-color:var(--brass-lt);transform:translateY(-2px)}
.btn-ghost{border-color:rgba(246,243,236,.28);color:var(--bone);background:transparent}
.btn-ghost:hover{border-color:var(--brass);color:var(--brass);transform:translateY(-2px)}
.btn-sm{padding:11px 20px;font-size:11.5px}
.btn-block{width:100%}

/* ============ HEADER ============ */
.hdr{
  position:fixed;inset:0 0 auto 0;z-index:900;
  transition:.4s var(--ease);
  border-bottom:1px solid transparent;
}
.hdr::before{
  content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,11,12,.86),rgba(11,11,12,0));
  transition:.4s var(--ease);
}
.hdr.stuck{background:rgba(11,11,12,.93);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom-color:var(--line)}
.hdr.stuck::before{opacity:0}
.hdr-in{
  position:relative;z-index:2;
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  height:78px;
}
.hdr.stuck .hdr-in{height:66px}
.hdr-in{transition:height .4s var(--ease)}

.logo{display:flex;align-items:center;gap:11px;flex:0 1 auto;min-width:0}
.logo-mk{
  width:38px;height:38px;flex:none;border:1px solid var(--brass);
  display:grid;place-items:center;font-family:var(--display);font-weight:700;
  font-size:14px;color:var(--brass);letter-spacing:.02em;
}
.logo-tx{min-width:0}
.logo-tx b{display:block;font-family:var(--display);font-weight:700;font-size:16px;letter-spacing:.06em;line-height:1;white-space:nowrap}
.logo-tx span{display:block;font-family:var(--mono);font-size:8.5px;letter-spacing:.32em;color:var(--brass);
  text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

.nav{display:flex;align-items:center;gap:clamp(14px,2vw,30px)}
.nav a{
  font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;font-weight:400;
  color:var(--bone-dim);position:relative;padding-block:6px;transition:color .3s;
}
.nav a::after{
  content:"";position:absolute;left:0;bottom:0;width:0;height:1px;background:var(--brass);transition:width .35s var(--ease);
}
.nav a:hover,.nav a.on{color:var(--bone)}
.nav a:hover::after,.nav a.on::after{width:100%}

.hdr-act{display:flex;align-items:center;gap:10px;flex:none}
.cart-btn{
  position:relative;width:42px;height:42px;border:1px solid var(--line);
  display:grid;place-items:center;transition:.3s;
}
.cart-btn:hover{border-color:var(--brass);background:rgba(201,162,74,.08)}
.cart-btn svg{width:19px;height:19px;stroke:var(--bone);fill:none;stroke-width:1.5}
.cart-cnt{
  position:absolute;top:-7px;right:-7px;min-width:19px;height:19px;padding:0 5px;
  background:var(--brass);color:#100D06;border-radius:20px;
  font-family:var(--mono);font-size:10px;font-weight:500;
  display:grid;place-items:center;transform:scale(0);transition:transform .3s var(--ease);
}
.cart-cnt.show{transform:scale(1)}

.burger{display:none;width:42px;height:42px;border:1px solid var(--line);place-items:center;flex-direction:column;gap:5px;transition:.3s}
.burger:hover{border-color:var(--brass)}
.burger i{display:block;width:17px;height:1.5px;background:var(--bone);transition:.35s var(--ease)}
.burger.x i:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.burger.x i:nth-child(2){opacity:0;transform:scaleX(0)}
.burger.x i:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}

/* mobile drawer */
.drawer{
  position:fixed;top:0;left:0;width:100%;height:100%;z-index:890;background:var(--ink);
  transform:translateX(100%);transition:transform .5s var(--ease);
  display:flex;flex-direction:column;padding:100px var(--pad) 40px;
  overflow-y:auto;overflow-x:hidden;
  visibility:hidden;
}
.drawer.open{transform:translateX(0);visibility:visible}
.drawer a{
  font-family:var(--display);font-size:clamp(26px,7vw,38px);font-weight:600;
  padding:13px 0;border-bottom:1px solid rgba(201,162,74,.14);
  display:flex;align-items:baseline;gap:14px;opacity:0;transform:translateX(24px);
  width:100%;max-width:100%;
}
.drawer.open a{animation:slideIn .5s var(--ease) forwards}
.drawer a em{font-family:var(--mono);font-size:11px;font-style:normal;color:var(--brass);opacity:.8}
@keyframes slideIn{to{opacity:1;transform:none}}
.drawer-foot{margin-top:auto;padding-top:34px;display:grid;gap:12px}
.drawer-foot .btn{width:100%;font-size:12px;letter-spacing:.14em;padding:16px 20px}
.drawer-meta{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;color:var(--brass);
  text-transform:uppercase;margin-top:20px;line-height:1.95;padding-bottom:8px}
.drawer-meta a{color:inherit;border-bottom:1px solid var(--line)}

/* ============ HERO ============ */
.hero{
  min-height:100svh;padding:0;display:flex;align-items:flex-end;
  position:relative;overflow:hidden;isolation:isolate;
}
.hero-bg{position:absolute;inset:0;z-index:-2}
.hero-bg img{width:100%;height:100%;object-fit:cover;object-position:center 55%;animation:slowZoom 22s var(--ease) forwards}
@keyframes slowZoom{from{transform:scale(1.14)}to{transform:scale(1)}}
.hero-bg::after{
  content:"";position:absolute;inset:0;
  background:
    linear-gradient(180deg,rgba(11,11,12,.92) 0%,rgba(11,11,12,.55) 18%,rgba(11,11,12,.3) 38%,rgba(11,11,12,.9) 78%,var(--ink) 100%),
    radial-gradient(120% 80% at 15% 90%,rgba(11,11,12,.85),transparent 60%);
}
.hero-in{padding-block:clamp(90px,14vh,150px) clamp(46px,7vh,74px)}
.hero-grid{display:grid;grid-template-columns:1fr auto;gap:var(--gap);align-items:end}
.hero h1{
  font-size:clamp(46px,9.2vw,124px);font-weight:600;line-height:.92;
  letter-spacing:-.035em;margin-bottom:22px;
}
.hero h1 span{display:block}
.hero h1 .gold{
  color:var(--brass);font-style:italic;font-weight:400;
  font-size:.82em;letter-spacing:-.01em;
}
.hero-tag{
  font-family:var(--mono);font-size:clamp(10px,1.1vw,11.5px);letter-spacing:.34em;
  text-transform:uppercase;color:var(--brass);margin-bottom:26px;
}
.hero .lede{margin-bottom:34px;max-width:44ch;color:rgba(246,243,236,.78)}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px}

/* signature: the "fire card" — live service status */
.ember-card{
  border:1px solid var(--line);background:rgba(11,11,12,.62);backdrop-filter:blur(10px);
  -webkit-backdrop-filter:blur(10px);
  padding:24px 28px;min-width:268px;
}
.ember-row{display:flex;align-items:center;gap:9px;margin-bottom:18px;
  padding-bottom:16px;border-bottom:1px solid var(--line)}
.ember-dot{width:7px;height:7px;border-radius:50%;background:#4ADE80;box-shadow:0 0 0 0 rgba(74,222,128,.6);animation:pulse 2.4s infinite}
@keyframes pulse{70%{box-shadow:0 0 0 9px rgba(74,222,128,0)}100%{box-shadow:0 0 0 0 rgba(74,222,128,0)}}
.ember-row b{font-family:var(--mono);font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;font-weight:500}
.ember-card dl{display:grid;gap:11px}
.ember-card div{display:flex;justify-content:space-between;gap:28px;align-items:baseline;
  padding-bottom:11px;border-bottom:1px solid rgba(246,243,236,.08)}
.ember-card div:last-child{border:0;padding-bottom:0}
.ember-card dt{font-size:12px;letter-spacing:.06em;color:var(--bone-dim);text-transform:uppercase}
.ember-card dd{font-family:var(--mono);font-size:12.5px;color:var(--brass-lt)}

/* marquee strip */
.strip{
  border-block:1px solid var(--line);background:var(--ink-2);
  overflow:hidden;padding-block:16px;
}
.strip-tr{display:flex;gap:0;width:max-content;animation:slide 34s linear infinite}
.strip:hover .strip-tr{animation-play-state:paused}
@keyframes slide{to{transform:translateX(-50%)}}
.strip span{
  font-family:var(--mono);font-size:11.5px;letter-spacing:.26em;text-transform:uppercase;
  color:var(--bone-dim);padding-inline:26px;display:flex;align-items:center;gap:26px;white-space:nowrap;
}
.strip span::after{content:"◆";color:var(--brass);font-size:8px}

/* ============ ABOUT ============ */
.about-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:clamp(34px,5vw,80px);align-items:center}
.about-imgs{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px}
.about-imgs figure{overflow:hidden;border:1px solid var(--line)}
.about-imgs img{width:100%;aspect-ratio:3/4;object-fit:cover;transition:transform .9s var(--ease)}
.about-imgs figure:hover img{transform:scale(1.06)}
.about-imgs figure:first-child{margin-top:46px}
.badge{
  position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  width:118px;height:118px;border-radius:50%;background:var(--ink);
  border:1px solid var(--brass);display:grid;place-content:center;text-align:center;
  z-index:2;box-shadow:0 0 0 10px var(--ink);
}
.badge b{font-family:var(--display);font-size:29px;color:var(--brass);display:block;line-height:1}
.badge span{font-family:var(--mono);font-size:8.5px;letter-spacing:.2em;color:var(--bone-dim);text-transform:uppercase}
.about-txt h2{margin-bottom:20px}
.about-txt p+p{margin-top:15px}
.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:36px;padding-top:32px;border-top:1px solid var(--line)}
.stats b{font-family:var(--display);font-size:clamp(28px,3.4vw,40px);color:var(--brass);display:block;line-height:1}
.stats span{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--bone-dim);display:block;margin-top:7px}

/* ============ SIGNATURE DISHES ============ */
.sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:26px;flex-wrap:wrap;margin-bottom:var(--gap)}
.sec-head .lede{margin-top:12px}

.sig-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,1.8vw,24px)}
.sig{
  position:relative;overflow:hidden;border:1px solid var(--line);
  background:var(--ink-2);transition:.5s var(--ease);
}
.sig:hover{border-color:var(--brass);transform:translateY(-5px)}
.sig-img{position:relative;aspect-ratio:4/5;overflow:hidden}
.sig-img img{width:100%;height:100%;object-fit:cover;transition:transform .9s var(--ease)}
.sig:hover .sig-img img{transform:scale(1.07)}
.sig-img::after{content:"";position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(11,11,12,.18) 0%,rgba(11,11,12,.05) 26%,rgba(11,11,12,.72) 58%,rgba(11,11,12,.97) 100%)}
.sig-rank{
  position:absolute;top:14px;left:14px;z-index:2;
  font-family:var(--mono);font-size:10px;letter-spacing:.16em;color:var(--brass);
  border:1px solid var(--brass);padding:5px 9px;background:rgba(11,11,12,.6);backdrop-filter:blur(6px);
}
.sig-body{position:absolute;bottom:0;left:0;right:0;z-index:2;padding:22px}
.sig-body h3{margin-bottom:7px}
.sig-body p{font-size:13.5px;color:var(--bone-dim);line-height:1.5;margin-bottom:14px}
.sig-foot{display:flex;align-items:center;justify-content:space-between;gap:12px}
.price{font-family:var(--mono);font-size:16px;color:var(--brass);font-weight:500;white-space:nowrap}
.price small{font-size:10px;opacity:.65;margin-right:2px}

/* ============ MENU ============ */
.menu-sec{background:var(--ink-2);border-block:1px solid var(--line)}
.tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:var(--gap);justify-content:center}
.tab{
  padding:11px 20px;border:1px solid var(--line);color:var(--bone-dim);
  font-size:12px;letter-spacing:.13em;text-transform:uppercase;transition:.3s;
  display:flex;align-items:center;gap:9px;
}
.tab em{font-family:var(--mono);font-size:9.5px;font-style:normal;opacity:.55}
.tab:hover{color:var(--bone);border-color:rgba(201,162,74,.5)}
.tab.on{background:var(--brass);color:#100D06;border-color:var(--brass)}
.tab.on em{opacity:.65}

.menu-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,1.8vw,22px)}
.dish{
  display:flex;gap:16px;padding:16px;background:var(--ink-3);
  border:1px solid rgba(246,243,236,.06);transition:.4s var(--ease);
  animation:fadeUp .5s var(--ease) backwards;min-width:0;
}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}}
.dish:hover{border-color:var(--brass);background:#232326}
.dish-img{width:96px;height:96px;flex:none;overflow:hidden;border:1px solid var(--line)}
.dish-img img{width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease)}
.dish:hover .dish-img img{transform:scale(1.09)}
.dish-b{flex:1;min-width:0;display:flex;flex-direction:column}
.dish-t{display:flex;flex-wrap:wrap;justify-content:space-between;gap:2px 10px;
  align-items:baseline;margin-bottom:5px;min-width:0}
.dish-t h3{font-size:16.5px;font-weight:600;letter-spacing:0;text-wrap:balance}
.dish-b p{font-size:12.5px;color:var(--bone-dim);line-height:1.45;margin-bottom:12px}
.dish-add{
  margin-top:auto;align-self:flex-start;
  font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;
  color:var(--brass);border:1px solid var(--line);padding:7px 13px;transition:.3s;
}
.dish-add:hover{background:var(--brass);color:#100D06;border-color:var(--brass)}
.dish-add.done{background:#4ADE80;color:#0B0B0C;border-color:#4ADE80}
.tag{
  display:inline-block;font-family:var(--mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;
  color:var(--brass);border:1px solid rgba(201,162,74,.45);padding:2px 6px;margin-left:8px;
  vertical-align:middle;white-space:nowrap;transform:translateY(-1px);
}

/* ============ OFFERS ============ */
.offers{display:grid;grid-template-columns:1.6fr minmax(0,1fr) minmax(0,1fr);gap:clamp(14px,1.8vw,20px)}
.offer{
  position:relative;overflow:hidden;border:1px solid var(--line);
  min-height:300px;display:flex;flex-direction:column;justify-content:flex-end;
  padding:clamp(22px,3vw,36px);isolation:isolate;transition:.5s var(--ease);
}
.offer:hover{border-color:var(--brass)}
.offer img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-2;transition:transform 1s var(--ease)}
.offer:hover img{transform:scale(1.06)}
.offer::before{
  content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(180deg,rgba(11,11,12,.55) 0%,rgba(11,11,12,.72) 45%,rgba(11,11,12,.96) 100%);
}
.offer-tag{
  align-self:flex-start;font-family:var(--mono);font-size:10px;letter-spacing:.2em;
  text-transform:uppercase;background:var(--brass);color:#100D06;padding:6px 11px;margin-bottom:auto;
}
.offer h3{margin:20px 0 8px}
.offer p{font-size:13.5px;color:var(--bone-dim);margin-bottom:16px;max-width:38ch}
.offer .when{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;color:var(--brass);text-transform:uppercase;margin-bottom:14px;display:block}
.offer--lg h3{font-size:clamp(26px,3.4vw,40px)}

/* ============ GALLERY ============ */
.gal{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(3,190px);gap:12px}
.gal figure{overflow:hidden;position:relative;border:1px solid rgba(246,243,236,.07);cursor:pointer}
.gal img{width:100%;height:100%;object-fit:cover;transition:transform .8s var(--ease),filter .5s}
.gal figure:hover img{transform:scale(1.08)}
.gal figure::after{
  content:attr(data-cap);position:absolute;inset:auto 0 0 0;padding:14px 16px;
  font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--brass-lt);
  background:linear-gradient(180deg,transparent,rgba(11,11,12,.9));
  opacity:0;transform:translateY(10px);transition:.4s var(--ease);
}
.gal figure:hover::after{opacity:1;transform:none}
/* explicit placement: 4 x 3 grid, fully tiled, no gaps */
.gal figure:nth-child(1){grid-column:1/2;grid-row:1/3}   /* tall left  */
.gal figure:nth-child(2){grid-column:2/4;grid-row:1/2}   /* wide top   */
.gal figure:nth-child(3){grid-column:4/5;grid-row:1/3}   /* tall right */
.gal figure:nth-child(4){grid-column:2/3;grid-row:2/3}
.gal figure:nth-child(5){grid-column:3/4;grid-row:2/3}
.gal figure:nth-child(6){grid-column:1/3;grid-row:3/4}   /* wide low   */
.gal figure:nth-child(7){grid-column:3/5;grid-row:3/4}   /* wide low   */

/* ============ REVIEWS ============ */
.rev-sec{background:var(--ink-2);border-block:1px solid var(--line)}
.rev-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,1.8vw,22px)}
.rev{border:1px solid var(--line);padding:clamp(24px,3vw,34px);background:var(--ink);display:flex;flex-direction:column;transition:.4s var(--ease)}
.rev:hover{border-color:var(--brass);transform:translateY(-4px)}
.stars{display:flex;gap:3px;margin-bottom:18px}
.stars svg{width:14px;height:14px;fill:var(--brass)}
.rev blockquote{font-family:var(--display);font-size:clamp(16px,1.8vw,19px);line-height:1.5;font-weight:400;margin-bottom:22px;flex:1}
.rev-who{display:flex;align-items:center;gap:13px;padding-top:20px;border-top:1px solid rgba(246,243,236,.08)}
.av{width:40px;height:40px;flex:none;border-radius:50%;background:var(--ink-3);border:1px solid var(--brass);
  display:grid;place-items:center;font-family:var(--display);font-size:14px;color:var(--brass)}
.rev-who b{display:block;font-size:14px;font-weight:500;letter-spacing:.02em}
.rev-who span{font-family:var(--mono);font-size:10px;letter-spacing:.1em;color:var(--bone-dim);text-transform:uppercase}

/* ============ RESERVE / CONTACT ============ */
.res-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:clamp(34px,5vw,70px);align-items:start}
.info-list{display:grid;gap:2px;margin-top:34px;border-top:1px solid var(--line)}
.info-list li{display:grid;grid-template-columns:120px 1fr;gap:18px;padding:17px 0;border-bottom:1px solid rgba(246,243,236,.08);align-items:start}
.info-list dt,.info-list .k{font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--brass);padding-top:3px}
.info-list .v{font-size:14.5px;line-height:1.55}
.info-list .v a{border-bottom:1px solid var(--line);transition:.3s;
  display:inline-flex;align-items:center;min-height:32px}
.info-list .v a:hover{color:var(--brass);border-color:var(--brass)}
.map-link{
  display:block;margin-top:26px;border:1px solid var(--line);overflow:hidden;position:relative;
}
.map-link img{width:100%;aspect-ratio:16/7;object-fit:cover;filter:grayscale(1) brightness(.55) contrast(1.1);transition:.6s var(--ease)}
.map-link:hover img{filter:grayscale(.3) brightness(.72);transform:scale(1.03)}
.map-link span{
  position:absolute;inset:auto 0 0 0;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;gap:14px;
  font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;
  background:linear-gradient(180deg,transparent,rgba(11,11,12,.94));color:var(--brass-lt);
}

.form-card{border:1px solid var(--line);background:var(--ink-2);padding:clamp(24px,3.4vw,40px)}
@media(min-width:901px){.form-card{position:sticky;top:96px}}
.form-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:26px}
.fld{display:flex;flex-direction:column;gap:7px;min-width:0}
.fld.full{grid-column:1/-1}
.fld label{font-family:var(--mono);font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--bone-dim)}
.fld input,.fld select{
  width:100%;background:var(--ink);border:1px solid rgba(246,243,236,.14);
  padding:13px 14px;font-size:14.5px;font-weight:300;transition:.3s;border-radius:var(--r);
  color:var(--bone);font-family:var(--body);
}
.fld input::placeholder{color:rgba(246,243,236,.28)}
.fld input:focus,.fld select:focus{border-color:var(--brass);outline:none;background:#0E0E10}
.fld select{appearance:none;cursor:pointer;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A24A' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 14px center;background-size:11px;padding-right:36px}
.fld select option{background:var(--ink);color:var(--bone)}
.fld input[type=date],.fld input[type=time]{color-scheme:dark}
.fld.bad input,.fld.bad select{border-color:var(--ember)}
.err{font-family:var(--mono);font-size:10px;letter-spacing:.08em;color:var(--ember);min-height:0;display:none}
.fld.bad .err{display:block}
.form-note{font-family:var(--mono);font-size:10px;letter-spacing:.1em;color:var(--bone-dim);text-transform:uppercase;margin-top:16px;text-align:center}
.ok-msg{
  display:none;margin-top:20px;border:1px solid #4ADE80;background:rgba(74,222,128,.09);
  padding:18px 20px;gap:13px;align-items:flex-start;
}
.ok-msg.show{display:flex;animation:fadeUp .45s var(--ease)}
.ok-msg svg{width:20px;height:20px;flex:none;stroke:#4ADE80;fill:none;stroke-width:2;margin-top:2px}
.ok-msg b{display:block;font-size:14px;font-weight:500;letter-spacing:.04em;margin-bottom:3px}
.ok-msg p{font-size:13px;color:var(--bone-dim);line-height:1.5}

/* ============ FOOTER ============ */
.ftr{border-top:1px solid var(--line);background:var(--ink-2);padding-top:clamp(50px,7vw,84px)}
.ftr-grid{display:grid;grid-template-columns:1.5fr minmax(0,1fr) minmax(0,1fr) 1.2fr;gap:clamp(28px,4vw,50px);padding-bottom:46px}
.ftr h4{font-family:var(--mono);font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin-bottom:20px;font-weight:500}
.ftr-brand p{font-size:14px;color:var(--bone-dim);margin-top:18px;max-width:34ch;line-height:1.6}
.ftr ul{display:grid;gap:11px}
.ftr ul a{font-size:14px;color:var(--bone-dim);transition:.3s;display:inline-block;
  padding-block:5px;min-height:32px;display:inline-flex;align-items:center}
.ftr ul a:hover{color:var(--brass);transform:translateX(3px)}
.socials{display:flex;gap:9px;margin-top:22px}
.socials a{width:38px;height:38px;border:1px solid var(--line);display:grid;place-items:center;transition:.3s}
.socials a:hover{border-color:var(--brass);background:rgba(201,162,74,.1);transform:translateY(-3px)}
.socials svg{width:16px;height:16px;fill:var(--bone-dim);transition:.3s}
.socials a:hover svg{fill:var(--brass)}
.ftr-bot{
  border-top:1px solid rgba(246,243,236,.08);padding-block:24px;
  display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;align-items:center;
  font-family:var(--mono);font-size:10.5px;letter-spacing:.13em;color:rgba(246,243,236,.4);text-transform:uppercase;
}

/* ============ CART DRAWER ============ */
.scrim{position:fixed;inset:0;background:rgba(5,5,6,.7);backdrop-filter:blur(3px);z-index:940;opacity:0;visibility:hidden;transition:.4s}
.scrim.on{opacity:1;visibility:visible}
.cart{
  position:fixed;top:0;right:0;bottom:0;width:min(420px,100%);z-index:950;
  background:var(--ink-2);border-left:1px solid var(--line);
  transform:translateX(100%);transition:transform .45s var(--ease);
  display:flex;flex-direction:column;
}
.cart.open{transform:none}
.cart-hd{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:24px var(--pad);border-bottom:1px solid var(--line);flex:none}
.cart-hd h3{font-size:19px}
.cart-hd em{font-family:var(--mono);font-size:10px;font-style:normal;color:var(--brass);letter-spacing:.14em;display:block;margin-top:3px}
.xbtn{width:36px;height:36px;border:1px solid var(--line);display:grid;place-items:center;flex:none;transition:.3s;font-size:17px;line-height:1;color:var(--bone-dim)}
.xbtn:hover{border-color:var(--brass);color:var(--brass)}
.cart-body{flex:1;overflow-y:auto;overflow-x:hidden;padding:var(--pad);
  display:grid;grid-template-columns:minmax(0,1fr);gap:14px;align-content:start}
.cart-empty{text-align:center;padding:56px 0;color:var(--bone-dim)}
.cart-empty svg{width:44px;height:44px;stroke:var(--line);fill:none;stroke-width:1.2;margin:0 auto 18px}
.cart-empty p{font-size:14px;margin-bottom:22px}
.ci{display:flex;gap:13px;align-items:center;border:1px solid rgba(246,243,236,.08);
  padding:11px;background:var(--ink);min-width:0}
.ci img{width:62px;height:62px;object-fit:cover;flex:none;border:1px solid var(--line)}
.ci-b{flex:1;min-width:0}
.ci-b b{display:block;font-size:14px;font-weight:500;line-height:1.3;margin-bottom:3px;
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ci-b span{font-family:var(--mono);font-size:12px;color:var(--brass)}
.qty{display:flex;align-items:center;gap:0;border:1px solid var(--line);flex:none}
.qty button{width:28px;height:28px;display:grid;place-items:center;color:var(--brass);font-size:15px;line-height:1;transition:.25s}
.qty button:hover{background:var(--brass);color:#100D06}
.qty b{width:26px;text-align:center;font-family:var(--mono);font-size:12.5px;font-weight:500}
.cart-ft{flex:none;padding:var(--pad);border-top:1px solid var(--line);background:var(--ink-3)}
.cart-ft dl{display:grid;gap:9px;margin-bottom:18px}
.cart-ft dl div{display:flex;justify-content:space-between;font-size:13.5px;color:var(--bone-dim)}
.cart-ft dl div.tot{padding-top:12px;border-top:1px solid var(--line);color:var(--bone);font-size:16px;align-items:baseline}
.cart-ft dl div.tot dd{font-family:var(--mono);font-size:19px;color:var(--brass);font-weight:500}
.cart-ft dl dd{font-family:var(--mono)}

/* toast */
.toast{
  position:fixed;left:50%;bottom:26px;transform:translate(-50%,140%);z-index:980;
  background:var(--ink-3);border:1px solid var(--brass);padding:13px 22px;
  font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass-lt);
  transition:transform .45s var(--ease);max-width:calc(100vw - 32px);text-align:center;
}
.toast.on{transform:translate(-50%,0)}

/* reveal on scroll */
.rv{opacity:0;transform:translateY(26px);transition:opacity .8s var(--ease),transform .8s var(--ease)}
.rv.in{opacity:1;transform:none}

/* ============ RESPONSIVE ============ */
@media(max-width:1080px){
  .hero-grid{grid-template-columns:1fr}
  .ember-card{max-width:360px}
  .sig-grid,.menu-grid,.rev-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .offers{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
  .offer--lg{grid-column:1/-1;min-height:270px}
  .ftr-grid{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:36px}
}
@media(max-width:1199px){
  .nav,.hdr-act .btn{display:none}
  .burger{display:flex}
}
@media(max-width:900px){
  .about-grid,.res-grid{grid-template-columns:1fr}
  .about-imgs{max-width:520px}
  .gal{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:none;grid-auto-rows:160px}
  .gal figure{grid-column:auto!important;grid-row:auto!important}
  .gal figure:nth-child(1),
  .gal figure:nth-child(6){grid-column:1/-1!important}
}
@media(max-width:640px){
  h2{font-size:clamp(29px,8vw,40px)}
  .hero{min-height:92svh}
  .hero h1{font-size:clamp(40px,12.5vw,62px)}
  .sig-grid,.menu-grid,.rev-grid,.offers{grid-template-columns:minmax(0,1fr)}
  .offer{min-height:250px}
  .stats{grid-template-columns:minmax(0,1fr);gap:0}
  .stats li{padding:15px 0;border-bottom:1px solid rgba(246,243,236,.08);display:flex;align-items:baseline;justify-content:space-between;gap:16px}
  .stats li:last-child{border:0}
  .stats span{margin-top:0}
  .form-grid{grid-template-columns:minmax(0,1fr)}
  .info-list li{grid-template-columns:1fr;gap:5px}
  .ftr-grid{grid-template-columns:minmax(0,1fr);gap:34px}
  .ftr-bot{justify-content:center;text-align:center;font-size:9.5px}
  .sec-head{align-items:flex-start}
  .dish-img{width:78px;height:78px}
  .badge{width:92px;height:92px}
  .badge b{font-size:23px}
  .tabs{justify-content:flex-start;flex-wrap:nowrap;overflow-x:auto;
    margin-inline:calc(var(--pad)*-1);padding-inline:var(--pad);padding-bottom:8px;
    scrollbar-width:none}
  .tabs::-webkit-scrollbar{display:none}
  .tab{flex:none}
}
@media(max-width:420px){
  .logo-tx span{display:none}
  .logo-mk{width:34px;height:34px;font-size:13px}
  .logo{gap:9px}
}
@media(max-width:400px){
  .btn{padding:14px 20px;font-size:11.5px}
  .hero-cta .btn{width:100%}
}
/* --- short viewports: height is the limiting axis, not width --- */
@media(max-height:560px){
  .hero{min-height:auto}
  .hero-in{padding-block:92px 26px}
  .hero h1{font-size:clamp(30px,6.4vw,46px);margin-bottom:12px}
  .hero-tag{margin-bottom:12px}
  .hero .lede{font-size:14px;line-height:1.5;margin-bottom:18px;max-width:52ch}
  .hero-cta{gap:10px}
  .hero-cta .btn{padding:12px 22px}
}
@media(max-height:560px) and (orientation:landscape) and (min-width:660px){
  /* keep the status card beside the copy instead of stacking it */
  .hero-grid{grid-template-columns:1fr auto;align-items:center}
  .ember-card{padding:16px 20px;min-width:214px}
  .ember-card dl{gap:7px}
  .ember-card div{padding-bottom:7px}
  .ember-row{margin-bottom:12px;padding-bottom:10px}
}
@media(max-height:430px){
  .hero-in{padding-block:84px 20px}
  .hero .lede{display:none}
  .hero h1{font-size:clamp(28px,5.6vw,40px)}
}

@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
  html{scroll-behavior:auto}
  /* content must never depend on motion to become visible */
  .rv{opacity:1!important;transform:none!important}
  .hero-bg img{animation:none!important;transform:none!important}
  .strip-tr{animation:none!important}
  .drawer a{opacity:1!important;transform:none!important;animation:none!important}
  .dish{animation:none!important}
  .ember-dot{animation:none!important}
}
