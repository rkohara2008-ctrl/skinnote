(() => {
  'use strict';
  const articles = Array.isArray(window.SKINNOTE_ARTICLES) ? window.SKINNOTE_ARTICLES : [];
  const categories = ['全部', '肌膚類型', '保養成分', '保養基礎'];
  let selected = '全部';
  let query = '';
  const cards = document.getElementById('cards');
  const filters = document.getElementById('filters');
  const dialog = document.getElementById('article-dialog');
  const make = (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;
    return element;
  };
  function renderFilters() {
    filters.replaceChildren();
    categories.forEach(category => {
      const button = make('button', 'filter' + (selected === category ? ' active' : ''), category);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(selected === category));
      button.addEventListener('click', () => { selected = category; renderFilters(); renderCards(); });
      filters.append(button);
    });
  }
  function renderCards() {
    cards.replaceChildren();
    const matches = articles.filter(article => (selected === '全部' || article.category === selected) &&
      [article.title, article.category, article.summary].join(' ').toLocaleLowerCase().includes(query));
    document.getElementById('count').textContent = `${matches.length} 篇筆記`;
    document.getElementById('empty').hidden = matches.length !== 0;
    matches.forEach(article => {
      const card = make('button', 'article-card');
      card.type = 'button';
      card.append(make('div', 'card-emoji', article.emoji), make('span', 'card-category', article.category),
        make('h3', '', article.title), make('p', '', article.summary), make('span', 'read', '閱讀筆記 ↗'));
      card.addEventListener('click', () => openArticle(article));
      cards.append(card);
    });
  }
  function openArticle(article) {
    document.getElementById('dialog-category').textContent = article.category;
    document.getElementById('dialog-emoji').textContent = article.emoji;
    document.getElementById('dialog-title').textContent = article.title;
    document.getElementById('dialog-summary').textContent = article.summary;
    const sections = document.getElementById('dialog-sections');
    sections.replaceChildren();
    article.sections.forEach(item => {
      const section = make('section');
      section.append(make('h3', '', item.heading), make('p', '', item.body));
      sections.append(section);
    });
    document.getElementById('dialog-tip').textContent = `♡ 小提醒：${article.tip}`;
    dialog.showModal();
  }
  document.getElementById('search').addEventListener('input', event => {
    query = event.target.value.trim().toLocaleLowerCase(); renderCards();
  });
  document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
  document.getElementById('back-button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  renderFilters();
  renderCards();
})();
