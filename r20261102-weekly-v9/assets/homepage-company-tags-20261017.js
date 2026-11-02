/* Homepage table presentation only. Keep the source badges and their text intact. */
(() => {
  const body = document.querySelector('#comparison-body');
  if (!body) return;

  function arrangeRows() {
    for (const row of body.querySelectorAll('tr[data-company-id]')) {
      const copy = row.querySelector('th .company-cell-layout > .company-cell-copy');
      if (!copy) continue;
      let heading = copy.querySelector(':scope > .homepage-company-heading');
      const name = copy.querySelector(':scope > .company-name') ||
        heading?.querySelector(':scope > .company-name');
      if (!name) continue;
      const featured = copy.querySelector(':scope > .status-chip.featured');
      const market = copy.querySelector(':scope > .market-chip');
      const signals = copy.querySelector(':scope > .signal-tags-company');

      if (!heading) {
        heading = document.createElement('div');
        heading.className = 'homepage-company-heading';
        copy.insertBefore(heading, name);
        heading.append(name);
      }
      if (featured) heading.append(featured);

      if (market || signals) {
        let tags = copy.querySelector(':scope > .homepage-company-tags');
        if (!tags) {
          tags = document.createElement('div');
          tags.className = 'homepage-company-tags';
          heading.after(tags);
        }
        if (market) tags.append(market);
        if (signals) tags.append(signals);
      }
    }
  }

  arrangeRows();
  new MutationObserver(arrangeRows).observe(body, {childList: true, subtree: true});
})();
