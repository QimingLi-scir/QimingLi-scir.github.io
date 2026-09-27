// Progressive enhancement: all papers remain visible when JavaScript is unavailable.
(() => {
  const filters = document.querySelector('.pub-filters');
  if (!filters) return;
  const buttons = Array.from(filters.querySelectorAll('button'));
  const papers = Array.from(document.querySelectorAll('.pub[data-category]'));
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    papers.forEach((paper) => {
      paper.hidden = button.dataset.filter !== 'all' && paper.dataset.category !== button.dataset.filter;
      if (!paper.hidden) count += 1;
    });
    document.getElementById('filter-status').textContent = `${count} publications shown`;
  });
})();
