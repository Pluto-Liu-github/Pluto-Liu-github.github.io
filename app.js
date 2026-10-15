document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menu && nav) {
  menu.hidden = false;
  const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = '菜单 ☰'; };
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '收起 ×' : '菜单 ☰';
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); menu.focus(); } });
  document.addEventListener('click', event => { if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu(); });
}
const search = document.querySelector('[data-search]');
if (search) {
  const entries = [...document.querySelectorAll('[data-note]')];
  const empty = document.querySelector('[data-empty]');
  const count = document.querySelector('[data-count]');
  search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    for (const entry of entries) {
      entry.hidden = !entry.textContent.toLocaleLowerCase().includes(query);
      if (!entry.hidden) visible++;
    }
    empty.hidden = visible > 0;
    count.textContent = `${visible} 篇手记`;
  });
}
