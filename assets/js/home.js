// Progressive enhancement: papers remain visible and in publication order without JavaScript.
(() => {
  const list = document.querySelector('.pub-list');
  if (!list) return;

  const papers = Array.from(list.querySelectorAll('.pub[data-category]')).map((element, index) => ({
    element,
    index,
    position: Number(element.dataset.authorPosition) || 99
  }));
  const filters = document.querySelector('.pub-filters');
  const sort = document.querySelector('[data-publication-sort]');
  const status = document.getElementById('filter-status');
  let activeFilter = 'all';

  const updateStatus = (count) => {
    if (status) status.textContent = `${count} publications shown`;
  };

  const applyFilter = () => {
    let count = 0;
    papers.forEach(({ element }) => {
      element.hidden = activeFilter !== 'all' && element.dataset.category !== activeFilter;
      if (!element.hidden) count += 1;
    });
    updateStatus(count);
  };

  if (filters) {
    const buttons = Array.from(filters.querySelectorAll('button'));
    filters.hidden = false;
    filters.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-filter]');
      if (!button) return;
      activeFilter = button.dataset.filter;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      applyFilter();
    });
  }

  if (sort) {
    const sortPapers = () => {
      const sorted = [...papers].sort((a, b) => {
        if (sort.value === 'author-position') {
          return a.position - b.position || a.index - b.index;
        }
        return a.index - b.index;
      });
      sorted.forEach(({ element }) => list.appendChild(element));
    };

    sort.addEventListener('change', () => {
      sortPapers();
      applyFilter();
    });
    sortPapers();
  }

  applyFilter();
})();
