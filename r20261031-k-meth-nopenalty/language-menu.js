(() => {
  'use strict';
  const menus = [...document.querySelectorAll('[data-language-menu]')];
  const close = (menu, restoreFocus = false) => {
    if (!menu.open) return;
    menu.open = false;
    if (restoreFocus) menu.querySelector('summary')?.focus();
  };
  for (const menu of menus) {
    const trigger = menu.querySelector('summary');
    const items = [...menu.querySelectorAll('[role="menuitem"]')];
    menu.addEventListener('toggle', () => trigger?.setAttribute('aria-expanded', String(menu.open)));
    trigger?.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      event.preventDefault();
      menu.open = true;
      (event.key === 'ArrowDown' ? items[0] : items.at(-1))?.focus();
    });
    items.forEach((item, index) => item.addEventListener('keydown', (event) => {
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
      items[next]?.focus();
    }));
  }
  document.addEventListener('click', (event) => menus.forEach((menu) => {
    if (!menu.contains(event.target)) close(menu);
  }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') menus.forEach((menu) => close(menu, true));
  });
})();
