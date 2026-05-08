// Brand origin page
function PageBrand({ setPage }) {
  useReveal();
  return (
    <div className="page">
      <header className="brand-hero" style={{backgroundImage: 'url("assets/hero/brand-banner.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative'}}>
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(240,248,248,0.8) 100%)', zIndex: 1}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <span className="eyebrow reveal"><span className="dot"/>OUR STORY · 自 2010 年起</span>
          <h1 className="title h1 reveal" style={{marginTop:18}}>從一株菌種，<br/>到一個值得信任的台灣品牌</h1>
          <p className="lead reveal" style={{marginTop:18, maxWidth:'58ch'}}>康耀生技誕生於高雄前鎮的一間小型發酵實驗室。十五年來，我們專注於酵母益菌的研究，從原料、菌種、製程到包裝，堅持以醫療等級的標準對待每一粒膠囊。</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="sec-head reveal" style={{marginBottom:48}}>
            <span className="eyebrow"><span className="dot"/>MILESTONES</span>
            <h2 className="title h2">十五年，一條長長的研究路</h2>
          </div>

          {[
            { y: '2010', t: '康耀生技創立', d: '由台大食科系團隊於高雄前鎮成立，從菌種收集與發酵基礎研究起步。' },
            { y: '2014', t: '取得 GMP 認證廠房', d: '建置符合 cGMP 標準的發酵與膠囊充填生產線，啟動量產。' },
            { y: '2018', t: '益幽盾專利菌種誕生', d: '與國立中山大學合作，開發具高耐酸性的專利乳酸菌株 GV-Shield™。' },
            { y: '2021', t: 'GutVitality 品牌上市', d: '結合科學配方與消費端品牌語言，正式推出原食酵母益菌膠囊系列。' },
            { y: '2024', t: '通過 SGS / HACCP / ISO22000 三重認證', d: '所有產品線完成第三方稽核，全數通過 720 項食品安全檢驗。' },
          ].map((m, i) => (
            <div key={m.y} className="timeline reveal" data-d={i%3+1} style={{paddingTop: i===0?0:32, paddingBottom:32, borderBottom:'1px dashed var(--line)'}}>
              <div className="timeline-year">{m.y}</div>
              <div className="timeline-body">
                <h3 className="title h3">{m.t}</h3>
                <p>{m.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{background:'var(--surface-2)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="sec-head center reveal" style={{marginBottom:32}}>
            <span className="eyebrow"><span className="dot"/>BY THE NUMBERS</span>
            <h2 className="title h2">數字說明一切</h2>
          </div>
          <div className="science-grid">
            {[
              { n: '15+', l: '年發酵研究經驗' },
              { n: '720', l: '項第三方檢驗指標' },
              { n: '36', l: '個合作研究機構' },
              { n: '98.7%', l: '消費者回購意願' },
            ].map((m, i) => (
              <div key={i} className="metric reveal" data-d={i+1}>
                <div className="num">{m.n}</div>
                <div className="lbl">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center'}} className="brand-pair">
            <div className="reveal">
              <span className="eyebrow"><span className="dot"/>OUR LAB</span>
              <h2 className="title h2" style={{marginTop:14}}>位於高雄前鎮的研發基地</h2>
              <p className="lead" style={{marginTop:16}}>5,400 坪的發酵與品管廠房，配備德國 Sartorius 發酵罐、日本島津 HPLC 與 PCR 菌相分析儀，是台灣少數能完成從菌種篩選到膠囊充填全流程的酵母益菌專業廠。</p>
              <div className="hero-cta" style={{marginTop:24}}>
                <button className="btn btn-primary" onClick={() => setPage('contact')}>預約參觀 <Icon.Arrow/></button>
              </div>
            </div>
            <div className="reveal" data-d="2" style={{aspectRatio:'4/3', borderRadius:'var(--r-xl)', overflow:'hidden', border:'1px solid var(--line)'}}>
              <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80" alt="實驗室" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            </div>
          </div>
          <style>{`@media (max-width: 800px){ .brand-pair{ grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>
    </div>
  );
}
window.PageBrand = PageBrand;
