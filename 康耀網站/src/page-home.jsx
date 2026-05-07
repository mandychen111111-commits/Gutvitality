// Home page
function PageHome({ setPage, setProduct, tweaks }) {
  useReveal();
  const featured = window.DATA.products.find(p => p.featured);
  const others = window.DATA.products.filter(p => !p.featured).slice(0, 3);
  const articles = window.DATA.articles.slice(0, 3);
  const layout = tweaks.heroLayout || 'split';

  const heroBg = "assets/hero/vision-lifestyle.jpg";

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero" data-layout={layout}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <span className="eyebrow"><span className="dot"/>SCIENCE-BACKED · MEDICAL GRADE</span>
              <h1 className="title h1">
                活力人生，
                <br/>
                從<span className="grad">腸道健康</span>開始
              </h1>
              <p className="lead">GutVitality 以醫療等級的科學標準，研發高活性酵母益生菌配方。每一顆膠囊，都是對您日常的長期承諾。</p>
              <div className="hero-cta">
                <button className="btn btn-primary" onClick={() => setPage('products')}>探索產品系列 <Icon.Arrow/></button>
                <button className="btn btn-ghost" onClick={() => setPage('brand')}>瞭解品牌故事</button>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><div className="num">200億</div><div className="lbl">活菌數 / 粒</div></div>
                <div className="hero-stat"><div className="num">15+</div><div className="lbl">年研發經驗</div></div>
                <div className="hero-stat"><div className="num">98.7%</div><div className="lbl">回購滿意度</div></div>
                <div className="hero-stat"><div className="num">SGS</div><div className="lbl">第三方檢驗</div></div>
              </div>
            </div>

            {layout === 'split' && (
              <div className="hero-vis">
                <div className="frame">
                  <img src={featured.img} alt="GutVitality 產品"/>
                </div>
                <div className="floating f1">
                  <div className="label">CFU / capsule</div>
                  <div className="value">200億 <span style={{color:'var(--brand-1)', fontSize:14, marginLeft:4}}>↗</span></div>
                </div>
                <div className="floating f2">
                  <div className="label">Survival Rate</div>
                  <div className="value" style={{color:'var(--brand-1)'}}>96.4%</div>
                </div>
              </div>
            )}

            {layout === 'collage' && (
              <div className="collage">
                <div className="c1"><img src={featured.img} alt=""/></div>
                <div className="c2"><img src="assets/hero/starberry-lifestyle.jpg" alt=""/></div>
                <div className="c3">
                  <div style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'.14em', opacity:.85}}>LIVE CFU</div>
                  <div style={{fontFamily:'var(--title-font)', fontSize:34, fontWeight:700, lineHeight:1}}>200億</div>
                </div>
                <div className="c4"><img src="assets/hero/energy7-lifestyle.jpg" alt=""/></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="eyebrow"><span className="dot"/>WHY GUTVITALITY</span>
            <h2 className="title h2">為什麼選擇 GutVitality</h2>
            <p className="lead">每一款產品都經過嚴格的科學驗證，從原料、發酵、製程到包裝，全程可追溯。</p>
          </div>
          <div className="why-grid">
            {[
              { ico: <Icon.Beaker/>, t: '科學配方', d: '採用先進酵母發酵技術，確保每粒膠囊都含有高活性益生菌，以微脂體包覆抵抗胃酸。' },
              { ico: <Icon.Shield/>, t: '品質保證', d: '從原料採購到成品出廠，每個環節皆通過 SGS、HACCP、ISO22000 三重檢驗。' },
              { ico: <Icon.Heart/>,  t: '專業護理', d: '針對不同年齡與健康需求，提供個人化腸道照護方案，由專業團隊持續追蹤。' },
            ].map((c, i) => (
              <div key={i} className="why-card reveal" data-d={i+1}>
                <div className="num">0{i+1}</div>
                <div className="ico">{c.ico}</div>
                <h3 className="title h3">{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="sec-head reveal" style={{marginBottom:40}}>
            <span className="eyebrow"><span className="dot"/>PREMIUM COLLECTION</span>
            <h2 className="title h2">精選產品系列</h2>
            <p className="lead">匠心獨運的高端配方，為您的健康生活締造非凡體驗。</p>
          </div>
          <div className="feat reveal">
            <div className="feat-badge">熱銷冠軍 · BESTSELLER</div>
            <div className="feat-img">
              <img src={featured.img} alt={featured.name}/>
            </div>
            <div className="feat-body">
              <div className="feat-meta">
                <span className="tag">🔥 熱銷冠軍</span>
                <span className="rating"><span className="stars">★★★★★</span> {featured.rating} ({featured.reviews.toLocaleString()})</span>
              </div>
              <h3 className="title feat-title">{featured.name}</h3>
              <p className="feat-sub">{featured.subtitle}</p>
              <p className="feat-desc">{featured.desc}</p>
              <div className="feat-tags">
                {featured.tags.map(t => (
                  <span key={t} className="ftag"><span className="ico"><Icon.Check size={14}/></span>{t}</span>
                ))}
              </div>
              <div className="feat-cta">
                <button className="btn btn-primary" onClick={() => { setProduct(featured.id); setPage('product-detail'); }}>了解詳情 <Icon.Arrow/></button>
                <button className="btn btn-ghost" onClick={() => setPage('contact')}>立即諮詢</button>
              </div>
            </div>
          </div>

          <div className="prod-grid" style={{marginTop:24}}>
            {others.map((p, i) => (
              <div key={p.id} className="prod reveal" data-d={i+1} onClick={() => { setProduct(p.id); setPage('product-detail'); }}>
                <div className="img">
                  <span className="series">{p.series} SERIES</span>
                  <img src={p.img} alt={p.name}/>
                </div>
                <div className="body">
                  <h4>{p.name}</h4>
                  <div className="sub">{p.subtitle}</div>
                  <p className="desc">{p.tagline}</p>
                  <span className="more">查看詳情 <Icon.Arrow size={14}/></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA / SCIENCE */}
      <section className="section" style={{background:'var(--surface-2)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="sec-head reveal" style={{marginBottom:40}}>
            <span className="eyebrow"><span className="dot"/>CLINICAL DATA</span>
            <h2 className="title h2">數據說話，科學見證</h2>
            <p className="lead">36 週雙盲對照臨床試驗（n=240），追蹤受試者腸道菌相、消化指標與整體生活品質。</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}} className="science-pair">
            <div className="chart-card reveal">
              <h4>菌叢平衡指標 (Bifido / Lacto Ratio)</h4>
              <p className="csub">Week 0 vs Week 12 — 受試者腸道菌相變化</p>
              <div className="bar"><div className="lbl">基線</div><div className="track"><div className="fill" style={{animationDelay:'.1s', '--w':'42%'}}></div></div><div className="v">42%</div></div>
              <div className="bar"><div className="lbl">第 4 週</div><div className="track"><div className="fill" style={{animationDelay:'.25s'}}></div></div><div className="v">61%</div></div>
              <div className="bar"><div className="lbl">第 8 週</div><div className="track"><div className="fill" style={{animationDelay:'.4s'}}></div></div><div className="v">78%</div></div>
              <div className="bar"><div className="lbl">第 12 週</div><div className="track"><div className="fill" style={{animationDelay:'.55s'}}></div></div><div className="v">89%</div></div>
            </div>
            <div className="chart-card reveal" data-d="2">
              <h4>受試者主觀回饋</h4>
              <p className="csub">12 週後自評項目（5 分量表）</p>
              <div className="bar"><div className="lbl">消化順暢</div><div className="track"><div className="fill" style={{animationDelay:'.1s'}}></div></div><div className="v">4.7</div></div>
              <div className="bar"><div className="lbl">日常活力</div><div className="track"><div className="fill" style={{animationDelay:'.25s'}}></div></div><div className="v">4.5</div></div>
              <div className="bar"><div className="lbl">睡眠品質</div><div className="track"><div className="fill" style={{animationDelay:'.4s'}}></div></div><div className="v">4.3</div></div>
              <div className="bar"><div className="lbl">整體滿意度</div><div className="track"><div className="fill" style={{animationDelay:'.55s'}}></div></div><div className="v">4.8</div></div>
            </div>
          </div>
          <style>{`
            @media (max-width: 800px){ .science-pair{ grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* KNOWLEDGE PREVIEW */}
      <section className="section">
        <div className="container">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:20, marginBottom:40}}>
            <div className="sec-head reveal" style={{margin:0}}>
              <span className="eyebrow"><span className="dot"/>HEALTH KNOWLEDGE</span>
              <h2 className="title h2">健康知識</h2>
              <p className="lead">瞭解腸道健康，從這裡開始。</p>
            </div>
            <button className="btn btn-ghost reveal" onClick={() => setPage('knowledge')}>瀏覽全部文章 <Icon.Arrow/></button>
          </div>
          <div className="know-grid">
            {articles.map((a, i) => (
              <article key={a.id} className="know reveal" data-d={i+1} onClick={() => { window.__article = a.id; setPage('article'); }}>
                <div className="img"><img src={a.img} alt={a.title}/></div>
                <div className="body">
                  <div className="meta"><span style={{color:'var(--brand-1)'}}>{a.category}</span><span>·</span><span>{a.date}</span><span>·</span><span>{a.read}</span></div>
                  <h4 className="title">{a.title}</h4>
                  <p>{a.excerpt}</p>
                  <span className="more">閱讀更多 <Icon.Arrow size={14}/></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="cta-banner reveal" style={{display:'flex', flexWrap:'wrap', gap:32, alignItems:'center', justifyContent:'space-between'}}>
            <div style={{flex:'1 1 360px'}}>
              <span className="eyebrow" style={{color:'rgba(255,255,255,.85)'}}><span className="dot" style={{background:'#fff'}}/>FREE CONSULTATION</span>
              <h3 style={{marginTop:14}}>不確定哪款適合你？預約一對一營養師諮詢</h3>
              <p>留下基本資料，我們的專業營養師將在 24 小時內聯繫你，量身規劃合適的腸道照護方案。</p>
            </div>
            <button className="btn" onClick={() => setPage('contact')}>預約免費諮詢 <Icon.Arrow/></button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.PageHome = PageHome;
