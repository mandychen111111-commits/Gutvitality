// Product detail page
function PageProductDetail({ setPage, productId }) {
  const { useState } = React;
  useReveal();
  const p = window.DATA.products.find(x => x.id === productId) || window.DATA.products[0];
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('spec');
  const [added, setAdded] = useState(false);

  const imgs = [p.img, p.img2 || p.img, p.img3 || p.img, p.img];

  return (
    <div className="page">
      <section className="section" style={{paddingTop:48}}>
        <div className="container">
          <div className="crumbs reveal" style={{marginBottom:32}}>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('home');}}>首頁</a>
            <span className="sep">/</span>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('products');}}>產品系列</a>
            <span className="sep">/</span>
            <span>{p.name}</span>
          </div>
          <div className="detail">
            <div className="detail-gallery reveal">
              <div className="main"><img src={imgs[activeImg]} alt={p.name}/></div>
              <div className="thumbs">
                {imgs.map((src, i) => (
                  <div key={i} className={`thumb ${activeImg===i?'active':''}`} onClick={() => setActiveImg(i)}>
                    <img src={src} alt=""/>
                  </div>
                ))}
              </div>
              {p.youtube && (
                <div className="product-video reveal" data-d="2" style={{marginTop:32, borderRadius:'var(--r-xl)', overflow:'hidden', aspectRatio:'16/9', border:'1px solid var(--line)'}}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${p.youtube}`}
                    title="產品介紹影片" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    style={{display:'block'}}
                  ></iframe>
                </div>
              )}
            </div>
            <div className="detail-body reveal" data-d="2">
              <span className="eyebrow"><span className="dot"/>{p.series} SERIES</span>
              <h1 className="title h1" style={{fontSize:'clamp(34px, 4vw, 52px)'}}>{p.name}</h1>
              <div className="sku">SKU · GV-{p.id.toUpperCase()} · {p.subtitle}</div>
              <div className="ratings">
                <span className="rating"><span className="stars">★★★★★</span> {p.rating}</span>
                <span style={{color:'var(--muted)', fontSize:14}}>{p.reviews.toLocaleString()} 則評論</span>
                <span style={{color:'var(--brand-1)', fontSize:14, fontWeight:600}}>· 庫存充足</span>
              </div>
              <p className="lead" style={{margin:'0 0 24px'}}>{p.tagline}。{p.desc}</p>
              <div className="benefits">
                {p.tags.slice(0,4).map((t, i) => (
                  <div key={i} className="b">
                    <div className="ico">{[<Icon.Leaf/>,<Icon.Drop/>,<Icon.Atom/>,<Icon.Sparkle/>][i%4]}</div>
                    <div>
                      <div className="t">{t}</div>
                      <div className="d">經臨床配方驗證</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{display:'flex', gap:16, marginTop:32}}>
                <button className="btn btn-primary" onClick={() => setPage('contact')}>聯絡我們了解更多</button>
              </div>
              <div style={{display:'flex', gap:24, fontSize:13, color:'var(--muted)', flexWrap:'wrap', marginTop:20}}>
                <span style={{display:'inline-flex', alignItems:'center', gap:6}}><Icon.Check size={14}/> 專業營養師諮詢</span>
                <span style={{display:'inline-flex', alignItems:'center', gap:6}}><Icon.Check size={14}/> SGS 雙重檢驗</span>
                <span style={{display:'inline-flex', alignItems:'center', gap:6}}><Icon.Check size={14}/> 臨床配方驗證</span>
              </div>

              <div className="spec">
                <div className="spec-tabs">
                  <button className={tab==='spec'?'active':''} onClick={() => setTab('spec')}>產品規格</button>
                  <button className={tab==='how'?'active':''} onClick={() => setTab('how')}>食用方式</button>
                  <button className={tab==='who'?'active':''} onClick={() => setTab('who')}>適用對象</button>
                </div>
                {tab==='spec' && (
                  <table>
                    <tbody>
                      {p.specs.map((row, i) => (
                        <tr key={i}><td>{row[0]}</td><td>{row[1]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {tab==='how' && (
                  <div style={{color:'var(--ink-2)', lineHeight:1.8}}>
                    <p>建議每日 2 粒，飯後以溫水（40°C 以下）服用，避免熱水破壞活性益生菌。</p>
                    <p>連續服用 4 週以上效果更佳。可與一般飲食、咖啡、茶併用，但建議與抗生素間隔 2 小時以上。</p>
                  </div>
                )}
                {tab==='who' && (
                  <div style={{color:'var(--ink-2)', lineHeight:1.8}}>
                    <p>適合 18 歲以上成人。常感消化不順、外食族、壓力大族群、高蛋白飲食者特別推薦。</p>
                    <p>孕婦、哺乳期、慢性疾病患者請先諮詢醫師或本品牌營養師。</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
window.PageProductDetail = PageProductDetail;
