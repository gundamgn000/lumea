(() => {
  const key = 'lumea-theme';
  const root = document.documentElement;
  const options = [
    { id: 'default', label: '象牙' },
    { id: 'noir', label: '夜金' }
  ];
  const switcher = document.createElement('div');
  switcher.className = 'theme-switcher';
  switcher.setAttribute('role', 'group');
  switcher.setAttribute('aria-label', '網站色系切換');
  function apply(id, save = true) {
    const selected = id === 'noir' ? 'noir' : 'default';
    selected === 'noir' ? root.setAttribute('data-theme','noir') : root.removeAttribute('data-theme');
    if (save) localStorage.setItem(key, selected);
    switcher.querySelectorAll('button').forEach(btn => {
      const active = btn.dataset.theme === selected;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }
  options.forEach(({id,label}) => {
    const b=document.createElement('button'); b.type='button'; b.dataset.theme=id; b.textContent=label;
    b.addEventListener('click',()=>apply(id)); switcher.appendChild(b);
  });
  const saved=localStorage.getItem(key)||'default';
  document.addEventListener('DOMContentLoaded',()=>{ document.body.appendChild(switcher); apply(saved,false); });
})();