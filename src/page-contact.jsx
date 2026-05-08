// Contact page
function PageContact({ setPage }) {
  const { useState } = React;
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '產品/服務資訊', msg: '' });
  const [sent, setSent] = useState(false);
  const upd = (k, v) => setForm(s => ({ ...s, [k]: v }));
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 5000); setForm({ name: '', email: '', phone: '', topic: '產品/服務資訊', msg: '' }); };

  return (
    <div className="page">
      <header className="prod-list-head" style={{backgroundImage: 'url("assets/hero/contact-banner.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative'}}>
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(240,248,248,0.8) 100%)', zIndex: 1}}></div>
        <div style={{position: 'relative', zIndex: 2}}>
        <div className="container">
          <div className="crumbs reveal"><a href="#" onClick={(e)=>{e.preventDefault(); setPage('home');}}>首頁</a><span className="sep">/</span><span>聯絡我們</span></div>
          <span className="eyebrow reveal" style={{marginTop:24, display:'inline-flex'}}><span className="dot"/>GET IN TOUCH</span>
          <h1 className="title h1 reveal" style={{marginTop:14}}>跟我們聊聊你的健康規劃</h1>
          <p className="lead reveal" style={{marginTop:14}}>無論是產品諮詢、營養師預約、企業合作或經銷洽詢，我們都會在 24 小時內回覆。</p>
        </div>
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
                  <div className="ico"><Icon.Mail/></div>
                  <div><div className="lbl">電子郵件</div><div className="val">kangyue5148@gmail.com</div></div>
                </div>
                <div className="row">
                  <div className="ico"><Icon.Clock/></div>
                  <div><div className="lbl">服務時間</div><div className="val">週一至週五 09:00 – 18:00</div></div>
                </div>
              </div>
            </div>

            <form className="form reveal" data-d="2" style={{marginLeft:'-24px'}}>
              <div style={{marginTop:0, borderRadius:'var(--r-xl)', overflow:'hidden', backgroundColor:'transparent', padding:'40px 0'}}>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLScTk_kFPCs-qMdazGxOuUiGgMdVBkuPSqXzy4BCPp9kSuk3ZQ/viewform?embedded=true" 
                  width="100%" 
                  height="1350" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  style={{display:'block'}}
                >
                  載入中…
                </iframe>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
window.PageContact = PageContact;
