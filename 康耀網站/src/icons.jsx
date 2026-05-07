// Inline SVG icons — minimal stroke style for science/medical feel
const Icon = {
  Logo: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8 5 6 8 6 12c0 4 2.5 8 6 10 3.5-2 6-6 6-10 0-4-2-7-6-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
    </svg>
  ),
  Arrow: ({size=16}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Check: ({size=16}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="m4 12 5 5 11-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Star: ({size=16, fill=true}) => <svg width={size} height={size} viewBox="0 0 24 24" fill={fill?"currentColor":"none"} stroke="currentColor" strokeWidth="1.5"><path d="m12 2 3 7 7 .8-5.2 4.7L18 22l-6-3.6L6 22l1.2-7.5L2 9.8 9 9z" strokeLinejoin="round"/></svg>,
  Beaker: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 3h6m-5 0v7L4 20a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 20l-6-10V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 16h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Shield: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Heart: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  Leaf: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 4c-9 0-15 5-15 12 0 2 1 4 1 4s7-1 11-5 4-11 3-11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M5 20c2-5 7-9 13-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  Drop: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  Atom: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.4"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)"/></svg>,
  Sparkle: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v6m0 6v6m-9-9h6m6 0h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="m6 6 3 3m6 6 3 3M6 18l3-3m6-6 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  Phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  Pin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.6"/></svg>,
  Clock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Menu: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  X: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M6 18 18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  Plus: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  Minus: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  Cart: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 4h2l3 12h11l2-8H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="20" r="1.5" fill="currentColor"/><circle cx="18" cy="20" r="1.5" fill="currentColor"/></svg>,
  Microscope: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 3h4v6H9zM7 9h8M11 9v8m-5 4h12M8 17h8a3 3 0 0 0 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Capsule: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="8" width="20" height="8" rx="4" stroke="currentColor" strokeWidth="1.6"/><path d="M12 8v8" stroke="currentColor" strokeWidth="1.6"/></svg>,
};

window.Icon = Icon;
