// Knowledge index
function PageKnowledge({ setPage }) {
  useReveal();
  const articles = window.DATA.articles;
  const featured = articles[0];
  const rest = articles.slice(1);
  return (
    <div className="page">
      <header className="prod-list-head">
        <div className="container">
          <div className="crumbs reveal"><a href="#" onClick={(e)=>{e.preventDefault(); setPage('home');}}>首頁</a><span className="sep">/</span><span>健康知識</span></div>
          <span className="eyebrow reveal" style={{marginTop:24, display:'inline-flex'}}><span className="dot"/>HEALTH JOURNAL</span>
          <h1 className="title h1 reveal" style={{marginTop:14}}>健康知識庫</h1>
          <p className="lead reveal" style={{marginTop:14}}>由康耀生技研究團隊與合作醫療顧問共同撰寫的腸道科學與生活指南。</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="sec-head reveal"><span className="eyebrow"><span className="dot"/>FEATURED</span><h2 className="title h2">本週精選</h2></div>
          <article className="feat-article reveal" onClick={() => { window.__article = featured.id; setPage('article'); }} style={{cursor:'pointer'}}>
            <div className="img"><img src={featured.img} alt={featured.title}/></div>
            <div>
              <span className="meta">{featured.category} · {featured.date} · {featured.read}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <button className="btn btn-primary">閱讀全文 <Icon.Arrow/></button>
            </div>
          </article>

          <div className="know-grid" style={{marginTop:48}}>
            {rest.map((a, i) => (
              <article key={a.id} className="know reveal" data-d={(i%3)+1} onClick={() => { window.__article = a.id; setPage('article'); }}>
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
    </div>
  );
}
window.PageKnowledge = PageKnowledge;
