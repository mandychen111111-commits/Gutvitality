// Article page
function PageArticle({ setPage }) {
  useReveal();
  const id = window.__article || 'a1';
  const a = window.DATA.articles.find(x => x.id === id) || window.DATA.articles[0];
  return (
    <div className="page">
      <header className="article-hero">
        <div className="container">
          <div className="crumbs reveal" style={{marginBottom:24}}>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('home');}}>首頁</a><span className="sep">/</span>
            <a href="#" onClick={(e)=>{e.preventDefault(); setPage('knowledge');}}>健康知識</a><span className="sep">/</span>
            <span>{a.category}</span>
          </div>
          <div className="meta reveal">{a.category} · {a.date} · {a.read}</div>
          <h1 className="reveal">{a.title}</h1>
          <div className="byline reveal">
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <div style={{width:40, height:40, borderRadius:'50%', background:'var(--grad-brand)', color:'#fff', display:'grid', placeItems:'center', fontFamily:'var(--font-serif)', fontWeight:700}}>{a.author[0]}</div>
              <div>
                <div style={{color:'var(--ink)', fontWeight:600, fontSize:14}}>{a.author}</div>
                <div style={{fontSize:12}}>{a.role}</div>
              </div>
            </div>
            <div style={{height:24, width:1, background:'var(--line)'}}></div>
            <div>分享 · 收藏 · 列印</div>
          </div>
        </div>
      </header>

      <section className="section" style={{paddingTop:0}}>
        <div className="container">
          <div className="article-cover reveal"><img src={a.img} alt={a.title}/></div>
          <div className="article-body reveal">
            <p>{a.excerpt}</p>
            <p>腸道是人體第二個大腦，內含超過一百兆的微生物。這些微生物透過代謝產物、神經訊號與免疫對話，深刻影響我們的情緒、能量、皮膚甚至睡眠。對許多現代人來說，腸道菌相的失衡是一切慢性不適的隱形起點。</p>

            <h2>菌叢平衡：好菌與壞菌的賽局</h2>
            <p>健康的腸道生態系應該維持「好菌 70%、中性菌 25%、壞菌 5%」的相對比例。當外食、壓力、抗生素或睡眠不足讓壞菌取得優勢時，便會引發脹氣、便秘、皮膚暗沉、免疫下降等連鎖反應。</p>

            <blockquote>「益生菌不只是補充，更是一種日常生活的科學選擇。」<br/>— 陳俊宏 博士，康耀生技首席研究員</blockquote>

            <h2>選擇益生菌的三個關鍵</h2>
            <ul>
              <li><b>菌種特異性</b>：不同菌種對應不同功能，應依需求挑選。</li>
              <li><b>耐酸耐膽鹽能力</b>：必須能存活通過胃酸與膽鹽，抵達腸道才有效。</li>
              <li><b>活菌數與穩定性</b>：包裝與運輸過程都會影響活性，務必確認 CFU 標示。</li>
            </ul>

            <h2>從今天開始的小行動</h2>
            <p>除了補充益生菌，每天攝取 25 克以上的膳食纖維、規律睡眠 7 小時、每週 150 分鐘中等強度運動、以及適度釋放壓力，都是建立腸道菌相的長期投資。</p>
          </div>

          <div style={{maxWidth:720, margin:'56px auto 0', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:20, paddingTop:32, borderTop:'1px solid var(--line)'}}>
            <button className="btn btn-ghost" onClick={() => setPage('knowledge')}>← 返回文章列表</button>
            <button className="btn btn-primary" onClick={() => setPage('products')}>探索相關產品 <Icon.Arrow/></button>
          </div>
        </div>
      </section>
    </div>
  );
}
window.PageArticle = PageArticle;
