// Products listing page
function PageProducts({ setPage, setProduct }) {
  const { useState } = React;
  useReveal();
  const [filter, setFilter] = useState('ALL');
  const all = window.DATA.products;
  const series = ['ALL', 'ACTIVE', 'BEAUTY', 'ENERGY', 'VISION', 'FIBER'];
  const list = filter === 'ALL' ? all : all.filter(p => p.series === filter);

  return (
    <div className="page">
      <header className="prod-list-head">
        <div className="container">
          <div className="crumbs reveal"><a href="#" onClick={(e)=>{e.preventDefault(); setPage('home');}}>首頁</a><span className="sep">/</span><span>產品系列</span></div>
          <span className="eyebrow reveal" style={{marginTop:24, display:'inline-flex'}}><span className="dot"/>PRODUCT COLLECTION</span>
          <h1 className="title h1 reveal" style={{marginTop:14, maxWidth:'18ch'}}>科學配方，<br/>完整守護每個健康需求</h1>
          <p className="lead reveal" style={{marginTop:16}}>從活力、美容、能量、視力到纖維調理，每個系列皆基於臨床數據與專利菌種開發。</p>
          <div className="filters reveal">
            {series.map(s => (
              <button key={s} className={`chip ${filter===s?'active':''}`} onClick={() => setFilter(s)}>
                {s === 'ALL' ? '全部產品' : s}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="prod-grid">
            {list.map((p, i) => (
              <div key={p.id} className="prod reveal" data-d={(i%3)+1} onClick={() => { setProduct(p.id); setPage('product-detail'); }}>
                <div className="img">
                  <span className="series">{p.series}</span>
                  <img src={p.img} alt={p.name}/>
                </div>
                <div className="body">
                  <h4>{p.name}</h4>
                  <div className="sub">{p.subtitle}</div>
                  <p className="desc">{p.tagline}</p>
                  <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', marginTop:'auto'}}>
                    <span className="more">查看詳情 <Icon.Arrow size={14}/></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
window.PageProducts = PageProducts;
