// Shared layout: Nav, Footer, Reveal helpers
const { useState, useEffect, useRef } = React;

// Centralized data
window.DATA = {
  nav: [
    { id: "home", label: "首頁" },
    { id: "products", label: "產品系列" },
    { id: "brand", label: "品牌起源" },
    { id: "knowledge", label: "健康知識" },
    { id: "contact", label: "聯絡我們" },
  ],
  products: [
    {
      id: "vitastar", name: "健味星", series: "ACTIVE", subtitle: "原食酵母益菌膠囊",
      tagline: "高麗菜維他命U與鋅的完美結合",
      desc: "專利益幽盾益生菌技術，為您的消化系統提供全方位呵護，讓每一餐都成為健康的開始。",
      tags: ["調整體質", "幫助開胃", "消化順暢", "微脂體包覆"],
      img: "assets/products/vitastar/box-60.png",
      img2: "assets/products/vitastar/box-20.png",
      img3: "assets/hero/vitastar-lifestyle.jpg",
      rating: 4.9, reviews: 2143,
      price: 1480, original: 1880, save: "-21%",
      featured: true, hot: true,
      specs: [["主要成分", "高麗菜維生素U、鋅、益幽盾乳酸菌"],["菌數", "活菌 200 億 CFU / 粒"],["容量","60 粒 / 瓶、20 粒 / 盒"]],
    },
    {
      id: "starberry", name: "無敵星星", series: "BEAUTY", subtitle: "原食酵母益菌膠囊",
      tagline: "高單位乳鐵蛋白，活元益生菌",
      desc: "全面提升體質與活力，專為日常防護而生的全方位配方。",
      tags: ["乳鐵蛋白", "活元益生菌", "增強體力", "日常防護"],
      img: "assets/products/starberry/bottle.jpg",
      img2: "assets/products/starberry/box-60.png",
      img3: "assets/products/starberry/box-20.png",
      rating: 4.8, reviews: 1382,
      price: 1680, original: 2080, save: "-19%",
      specs: [
        ["主要成分", "高單位乳鐵蛋白、活元乳酸菌、維生素 D3"],
        ["菌數", "活菌 150 億 CFU / 粒"],
        ["容量", "60 粒 / 瓶、20 粒 / 盒"],
      ],
    },
    {
      id: "secretgarden", name: "祕密花園", series: "BEAUTY", subtitle: "原食酵母益菌膠囊",
      tagline: "專為女性設計的雙道調理",
      desc: "守護機能、養顏美容雙重呵護，由內而外的女性日常配方。",
      tags: ["女性機能", "養顏美容", "雙道調理"],
      img: "assets/products/secretgarden/box-60.png",
      img2: "assets/products/secretgarden/box-20.png",
      img3: "assets/hero/secretgarden-lifestyle.jpg",
      rating: 4.9, reviews: 968,
      price: 1580, original: 1980, save: "-20%",
      specs: [
        ["主要成分", "蔓越莓萃取、女性益菌、葉酸"],
        ["菌數", "活菌 100 億 CFU / 粒"],
        ["容量", "60 粒 / 瓶、20 粒 / 盒"],
      ],
    },
    {
      id: "energy7", name: "元氣七煌", series: "ENERGY", subtitle: "原食酵母益菌膠囊",
      tagline: "七煌靈芝子實配方",
      desc: "提升精神活力，為高壓忙碌的現代生活注入長效能量。",
      tags: ["七煌靈芝", "提神活力", "長效能量"],
      img: "assets/products/energy7/box-60.png",
      img2: "assets/products/energy7/bottle.png",
      img3: "assets/products/energy7/box-20.png",
      rating: 4.7, reviews: 612,
      price: 1980, original: 2480, save: "-20%",
      specs: [["主要成分", "七煌靈芝子實體、靈芝多醣體、酵母 B 群"],["容量","60 粒 / 瓶、20 粒 / 盒"]],
    },
    {
      id: "vision", name: "晶亮世界", series: "VISION", subtitle: "原食酵母益菌膠囊",
      tagline: "游離型葉黃素配方",
      desc: "守護 3C 時代的晶亮視野，全天候對抗藍光與用眼疲勞。",
      tags: ["游離型葉黃素", "3C 防護", "玉米黃素"],
      img: "assets/products/vision/main.jpg",
      img2: "assets/products/vision/detail.jpg",
      img3: "assets/products/vision/detail.jpg",
      rating: 4.8, reviews: 836,
      price: 1280, original: 1580, save: "-19%",
      specs: [["主要成分","游離型葉黃素、玉米黃素、花青素"],["容量","60 粒 / 瓶、20 粒 / 盒"]],
      youtube: null,
      youtubeEmbed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/acr3GI98uS0?si=SDZXHFLZQoyRfzQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
      id: "fiber", name: "益纖源", series: "FIBER", subtitle: "複合益生菌粉劑",
      tagline: "改善菌叢生態",
      desc: "複合益生菌與膳食纖維配方，由根本改善腸道生態系，重啟順暢循環。",
      tags: ["複合益生菌", "膳食纖維", "順暢循環"],
      img: "assets/products/fiber/main.png",
      img2: "assets/products/fiber/main.png",
      img3: "assets/products/fiber/main.png",
      rating: 4.7, reviews: 1207,
      price: 980, original: 1280, save: "-23%",
      specs: [["主要成分","複合 12 株乳酸菌、菊苣纖維、果寡糖"],["容量","20 入 / 盒"]],
    },
  ],
  articles: [
    {
      id: "a1", category: "基礎知識", date: "2025.04.18", read: "5 min",
      title: "什麼是酵母益菌？腸道好菌的科學解析",
      excerpt: "酵母益菌是一種有益的微生物，能夠幫助維持腸道菌群平衡，促進消化系統健康，並透過代謝產物提升整體免疫力。",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
      author: "陳俊宏 博士",
      role: "腸道微生物研究員",
    },
    {
      id: "a2", category: "飲食指南", date: "2025.04.10", read: "7 min",
      title: "腸道健康飲食指南：每天該吃些什麼？",
      excerpt: "合理的飲食結構對腸道健康至關重要。本文從膳食纖維、發酵食物到水分攝取，提供完整的日常飲食藍圖。",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
      author: "林筱晴 營養師",
      role: "臨床營養專家",
    },
    {
      id: "a3", category: "現代生活", date: "2025.03.28", read: "6 min",
      title: "現代生活如何影響腸道健康？",
      excerpt: "現代人生活節奏快、壓力大，這些都會影響腸道健康。了解如何在忙碌生活中保持腸道平衡，從睡眠、運動到情緒管理。",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
      author: "王宏志 醫師",
      role: "胃腸肝膽科醫師",
    },
    {
      id: "a4", category: "成份解析", date: "2025.03.15", read: "8 min",
      title: "益幽盾益生菌：耐胃酸的關鍵技術",
      excerpt: "益生菌要真正發揮作用，必須能存活通過胃酸抵達腸道。本文解析微脂體包覆與耐酸菌種的核心技術。",
      img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80",
      author: "陳俊宏 博士",
      role: "腸道微生物研究員",
    },
    {
      id: "a5", category: "女性專區", date: "2025.03.01", read: "5 min",
      title: "女性私密保養：益生菌的雙道調理",
      excerpt: "女性私密處菌叢與腸道菌相息息相關，透過益生菌雙道調理，能有效守護日常機能。",
      img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
      author: "李美君 醫師",
      role: "婦產科醫師",
    },
  ],
};

// IntersectionObserver-based reveal
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const go = (id) => { setPage(id); setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <button className="brand" onClick={() => go('home')}>
          <img src="assets/logo.png" alt="GutVitality" style={{height: 72, objectFit: 'contain'}} />
        </button>
        <div className={`nav-links ${open?'open':''}`}>
          {window.DATA.nav.map(n => (
            <button key={n.id} className={page === n.id ? 'active' : ''} onClick={() => go(n.id)}>{n.label}</button>
          ))}
        </div>
        <div className="nav-cta">
          <button className="btn btn-ghost" style={{padding:'10px 18px', fontSize:14}} onClick={() => go('contact')}>專業諮詢</button>
          <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-label="menu">
            {open ? <Icon.X/> : <Icon.Menu/>}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <span className="logo-mark" style={{width:36, height:36, borderRadius:10, background:'var(--grad-brand)', display:'grid', placeItems:'center', color:'#fff', fontFamily:'var(--font-serif)', fontWeight:900}}>G</span>
              <span style={{fontSize:18, fontWeight:700, color:'#fff'}}>GutVitality</span>
            </div>
            <p className="brand-blurb">康耀生技專注於酵母益生菌的研發與創新，以醫療等級的科學標準，為您的健康生活提供專業支持。</p>
            <div style={{display:'flex', gap:10}}>
              <a href="#" style={{width:36, height:36, borderRadius:10, border:'1px solid oklch(0.25 0.02 215)', display:'grid', placeItems:'center'}}><Icon.Mail/></a>
              <a href="#" style={{width:36, height:36, borderRadius:10, border:'1px solid oklch(0.25 0.02 215)', display:'grid', placeItems:'center'}}><Icon.Phone/></a>
            </div>
          </div>
          <div>
            <h5>產品系列</h5>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); setPage('products');}}>原食酵母益菌膠囊</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); setPage('products');}}>複合益生菌粉劑</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); setPage('products');}}>特殊配方系列</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); setPage('products');}}>女性專區</a></li>
            </ul>
          </div>
          <div>
            <h5>快速連結</h5>
            <ul>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); setPage('home');}}>首頁</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); setPage('brand');}}>品牌起源</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); setPage('knowledge');}}>健康知識</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); setPage('contact');}}>聯絡我們</a></li>
            </ul>
          </div>
          <div>
            <h5>聯絡資訊</h5>
            <div className="biz">
              <div>
                <div className="lbl">公司</div>
                <div>康耀生技股份有限公司</div>
              </div>
              <div>
                <div className="lbl">統編</div>
                <div>60799068</div>
              </div>
              <div>
                <div className="lbl">地址</div>
                <div>高雄市前鎮區新衙路 286-2 號 2F-1</div>
              </div>
              <div>
                <div className="lbl">電話</div>
                <div>07-2872268</div>
              </div>
              <div>
                <div className="lbl">電子郵件</div>
                <div>kangyue5148@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="legal">
          <div>© 2025 GutVitality · 康耀生技股份有限公司. All rights reserved.</div>
          <div style={{display:'flex', gap:24}}>
            <a href="#">隱私權政策</a>
            <a href="#">使用條款</a>
            <a href="#">食品安全聲明</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.useReveal = useReveal;
window.Nav = Nav;
window.Footer = Footer;
