const API = '/api/books';
const booksEl = document.getElementById('books');
const statusEl = document.getElementById('status');
const loaderEl = document.getElementById('loader');

async function loadBooks() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const books = await res.json();

    statusEl.textContent = 'АКТИВНО';
    booksEl.innerHTML = books.length
      ? books.map((book, i) => `
          <article class="card" style="animation-delay: ${i * 0.08}s">
            <div class="id">// ОБЪЕКТ #${book.id ?? i + 1}</div>
            <h2>${escapeHtml(book.title)}</h2>
            <div class="author">${escapeHtml(book.author)}</div>
            ${book.year ? `<div class="year">ГОД ИЗДАНИЯ: <b>${book.year}</b></div>` : ''}
          </article>
        `).join('')
      : '<div class="loader">АРХИВ ПУСТ</div>';
  } catch (err) {
    statusEl.textContent = 'ОТКАЗ';
    statusEl.style.color = '#ff2bd6';
    booksEl.innerHTML = `<div class="loader">СБОЙ ПОДКЛЮЧЕНИЯ К ЯДРУ</div>`;
  } finally {
    loaderEl.style.display = 'none';
  }
}
function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

loadBooks();
