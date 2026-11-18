/* Общие функции светлой версии CAMPS.ES */
(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
window.$=$;window.$$=$$;
const fmt=n=>new Intl.NumberFormat("ru-RU").format(n).replace(/\u00a0/g," ");
window.fmt=fmt;
window.LOGO='<a class="logo" href="index.html" aria-label="CAMPS.ES — на главную"><b>CAMPS</b><i>.ES</i></a>';
window.img=(n)=>`img/${n}.jpg`;
window.photo=(b,i=0,alt)=>`<img src="img/${b.photos[i%b.photos.length]}.jpg" alt="${alt||b.name}" loading="lazy" style="object-position:${["50% 50%","40% 60%","60% 40%","50% 30%","30% 50%"][i%5]}">`;
window.stars=r=>`<span class="star">★</span> ${r.toFixed(1)}`;
window.rd=s=>s.split("-").reverse().join(".");
function header(page){
 const h=document.createElement("header");h.className="hdr";
 h.innerHTML=`<div class="wrap">${LOGO}<nav class="nav" id="nav"><a href="search.html" class="${page==="search"?"on":""}">Найти базу</a><a href="index.html#how">Как это работает</a><a href="partner.html" class="${page==="partner"?"on":""}">Для баз</a></nav>
 <div class="hdr-r"><a class="btn sm ghost hide-m" href="#" onclick="return false">Войти</a><a class="btn sm" href="partner.html#form">Разместить базу</a><button class="burger" aria-label="Меню" id="burger">☰</button></div></div>`;
 document.body.prepend(h);
 $("#burger").onclick=()=>$("#nav").classList.toggle("open");
}
function footer(){
 const f=document.createElement("footer");f.className="ftr";
 f.innerHTML=`<div class="wrap"><div class="ftr-top"><div class="lead">Сборы — это серьёзно.<br><span>Базы — тоже.</span></div>
 <div class="cols"><div><h4>Командам</h4><ul><li><a href="search.html">Найти базу</a></li><li><a href="search.html?sport=Футбол">Футбол</a></li><li><a href="search.html?sport=Хоккей">Хоккей</a></li><li><a href="search.html?sport=Плавание">Плавание</a></li></ul></div>
 <div><h4>Базам</h4><ul><li><a href="partner.html">Разместить базу</a></li><li><a href="partner.html#form">Заявка</a></li><li><a href="partner.html#faq">Вопросы</a></li></ul></div>
 <div><h4>CAMPS.ES</h4><ul><li><a href="index.html#how">Как это работает</a></li><li><a href="#">Контакты</a></li><li><a href="#">Условия</a></li></ul></div></div></div>
 <div class="ftr-logo">${LOGO}</div>
 <div class="small"><span>© 2026 CAMPS.ES — демо-прототип. Все базы, отзывы и цифры вымышлены. Фото: Unsplash.</span><span>Светлая версия · v2</span></div></div>`;
 document.body.append(f);
}
window.card=function(b,o={}){
 const sp=b.sports.slice(0,3).map(s=>`<span class="chip ${o.hl&&o.hl===s?"on":""}">${s}</span>`).join("");
 const team=Math.min(25,b.cap),nights=7,tot=b.price*team*nights;
 return `<a class="card ${o.row?"row":""}" href="base.html?id=${b.id}" data-id="${b.id}"><div class="pic">${photo(b,0)}<span class="badge">${b.badge}</span><span class="heart" aria-hidden="true">♡</span></div>
 <div class="bd"><div class="r1"><h3>${b.name}</h3><span class="rt">${stars(b.rating)} <small>(${b.reviews})</small></span></div>
 <div class="loc">${b.city} · ${b.region}</div><div class="chips">${sp}</div>
 <div class="facts"><span>до ${b.cap} чел.</span>${b.infra.lodging?"<span>проживание</span>":""}${b.infra.meals?"<span>питание</span>":""}</div>
 <div class="ft"><div class="price"><b>${fmt(b.price)} ₽</b> <small>чел. / сутки</small></div><div class="est">${team} чел. × ${nights} сут. ≈ ${fmt(tot)} ₽</div></div></div></a>`;
};
window.isFree=(b,from,to)=>!from||!to||!b.busy.some(([a,z])=>from<=z&&to>=a);
document.addEventListener("DOMContentLoaded",()=>{header(document.body.dataset.page);footer();
 if(location.hash){const e=document.getElementById(location.hash.slice(1));e&&setTimeout(()=>e.scrollIntoView(),50)}});
})();
