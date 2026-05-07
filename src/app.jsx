// App shell — page router + Tweaks panel
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [page, setPage] = useStateApp('home');
  const [productId, setProductId] = useStateApp('vitastar');
  const initialTweaks = (window.__TWEAKS__ || { fontStyle: 'serif', heroLayout: 'split' });
  const [tweaks, setTweak] = window.useTweaks(initialTweaks);

  useEffectApp(() => {
    const f = tweaks.fontStyle || 'serif';
    document.documentElement.setAttribute('data-title-font', f);
    if (f === 'round') {
      // load rounded font once
      if (!document.getElementById('round-font')) {
        const l = document.createElement('link');
        l.id = 'round-font';
        l.rel = 'stylesheet';
        l.href = 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700;900&display=swap';
        document.head.appendChild(l);
      }
    }
  }, [tweaks.fontStyle]);

  let view;
  switch (page) {
    case 'products':       view = <PageProducts setPage={setPage} setProduct={setProductId}/>; break;
    case 'product-detail': view = <PageProductDetail setPage={setPage} productId={productId}/>; break;
    case 'brand':          view = <PageBrand setPage={setPage}/>; break;
    case 'knowledge':      view = <PageKnowledge setPage={setPage}/>; break;
    case 'article':        view = <PageArticle setPage={setPage}/>; break;
    case 'contact':        view = <PageContact setPage={setPage}/>; break;
    default:               view = <PageHome setPage={setPage} setProduct={setProductId} tweaks={tweaks}/>;
  }

  return (
    <>
      <Nav page={page} setPage={setPage}/>
      <main key={page}>{view}</main>
      <Footer setPage={setPage}/>
      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="標題字型">
          <window.TweakRadio
            value={tweaks.fontStyle}
            onChange={(v) => setTweak('fontStyle', v)}
            options={[
              { value: 'serif', label: '襯線' },
              { value: 'sans',  label: '黑體' },
              { value: 'round', label: '圓體' },
            ]}/>
        </window.TweakSection>
        <window.TweakSection title="Hero 版面">
          <window.TweakRadio
            value={tweaks.heroLayout}
            onChange={(v) => setTweak('heroLayout', v)}
            options={[
              { value: 'split',   label: '圖左字右' },
              { value: 'full',    label: '全幅' },
              { value: 'collage', label: '拼貼' },
            ]}/>
        </window.TweakSection>
        <window.TweakSection title="提示">
          <div style={{fontSize:12, color:'#94a3b8', lineHeight:1.6}}>切換 Hero 版面後請回到首頁查看效果。</div>
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
