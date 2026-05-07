// Contact page
function PageContact({ setPage }) {
  const { useState } = React;
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '產品諮詢', msg: '' });
  const [sent, setSent] = useState(false);
  const upd = (k, v) => setForm(s => ({ ...s, [k]: v }));
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 5000); setForm({ name: '', email: '', phone: '', topic: '產品諮詢', msg: '' }); };

  return (
    <div className="page">
      <header className="prod-list-head">
        <div className="container">
          <div className="crumbs reveal"><a href="#" onClick={(e)=>{e.preventDefault(); setPage('home');}}>首頁</a><span className="sep">/</span><span>聯絡我們</span></div>
          <span className="eyebrow reveal" style={{marginTop:24, display:'inline-flex'}}><span className="dot"/>GET IN TOUCH</span>
          <h1 className="title h1 reveal" style={{marginTop:14}}>跟我們聊聊你的健康規劃</h1>
          <p className="lead reveal" style={{marginTop:14}}>無論是產品諮詢、營養師預約、企業合作或經銷洽詢，我們都會在 24 小時內回覆。</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <h2 className="title h2" style={{fontSize:'clamp(24px, 2.4vw, 32px)'}}>多種聯絡方式</h2>
              <p className="lead" style={{marginTop:12}}>選擇最適合你的方式，我們在這裡。</p>
              <div className="contact-info">
                <div className="row">
                  <div className="ico"><Icon.Pin/></div>
                  <div><div className="lbl">公司地址</div><div className="val">高雄市前鎮區新衙路 286-2 號 2F-1</div></div>
                </div>
                <div className="row">
                  <div className="ico"><Icon.Phone/></div>
                  <div><div className="lbl">客服專線</div><div className="val">07-2872268</div></div>
                </div>
                <div className="row">
                  <div className="ico"><Icon.Mail/></div>
                  <div><div className="lbl">電子郵件</div><div className="val">kangyue5148@gmail.com</div></div>
                </div>
                <div className="row">
                  <div className="ico"><Icon.Clock/></div>
                  <div><div className="lbl">服務時間</div><div className="val">週一至週五 09:00 – 18:00</div></div>
                </div>
              </div>

              <div className="chart-card" style={{marginTop:32}}>
                <h4>常見諮詢類型</h4>
                <p className="csub">過去 30 天客服統計</p>
                <div className="bar"><div className="lbl">產品諮詢</div><div className="track"><div className="fill" style={{animationDelay:'.1s'}}></div></div><div className="v">42%</div></div>
                <div className="bar"><div className="lbl">營養師預約</div><div className="track"><div className="fill" style={{animationDelay:'.25s'}}></div></div><div className="v">28%</div></div>
                <div className="bar"><div className="lbl">訂單問題</div><div className="track"><div className="fill" style={{animationDelay:'.4s'}}></div></div><div className="v">18%</div></div>
                <div className="bar"><div className="lbl">企業合作</div><div className="track"><div className="fill" style={{animationDelay:'.55s'}}></div></div><div className="v">12%</div></div>
              </div>
            </div>

            <form className="form reveal" data-d="2" onSubmit={submit}>
              <h3>留下你的需求</h3>
              <p className="sub">所有資料皆受個資法保護，僅用於回覆本次諮詢。</p>
              {sent && <div className="success"><Icon.Check/> 已收到你的訊息，我們會在 24 小時內聯繫你。</div>}
              <div className="field-row">
                <div className="field">
                  <label>姓名</label>
                  <input required value={form.name} onChange={e => upd('name', e.target.value)} placeholder="王小明"/>
                </div>
                <div className="field">
                  <label>電話</label>
                  <input value={form.phone} onChange={e => upd('phone', e.target.value)} placeholder="0912-345-678"/>
                </div>
              </div>
              <div className="field">
                <label>電子郵件</label>
                <input type="email" required value={form.email} onChange={e => upd('email', e.target.value)} placeholder="you@example.com"/>
              </div>
              <div className="field">
                <label>諮詢類型</label>
                <select value={form.topic} onChange={e => upd('topic', e.target.value)}>
                  <option>產品諮詢</option>
                  <option>營養師預約</option>
                  <option>訂單問題</option>
                  <option>企業合作 / 經銷</option>
                  <option>媒體採訪</option>
                </select>
              </div>
              <div className="field">
                <label>留言</label>
                <textarea required value={form.msg} onChange={e => upd('msg', e.target.value)} placeholder="請簡述你的需求或想了解的產品⋯"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">送出訊息 <Icon.Arrow/></button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
window.PageContact = PageContact;
