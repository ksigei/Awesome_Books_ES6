export class BookStore {
  constructor(initialData = []) {
    this.saveToLocalStorage = (data) => {
      const booksString = JSON.stringify(data);
      localStorage.setItem('bookStoreData', booksString);
      return true;
    };

    const rawBooksData = localStorage.getItem('bookStoreData');
    if (rawBooksData) {
      this.books = JSON.parse(rawBooksData);
    } else {
      this.books = initialData;
      this.saveToLocalStorage(this.books);
    }
  }

  all() {
    return this.books;
  }

  add(newData) {
    if (!newData || !newData.id) {
      return false;
    }

    const newBook = new Book(newData);
    this.books.push(newBook);
    return this.saveToLocalStorage(this.books);
  }

  remove(id) {
    this.books = this.books.filter((book) => book.id !== id);
    return this.saveToLocalStorage(this.books);
  }
}

export const displayBook = ({ title, author, id }, parentElement) => {
  const bookListItemElement = document.createElement('li');
  bookListItemElement.className = 'book-list-item';
  bookListItemElement.innerHTML = `
  <section class="book-store-section display-flex">
  <div class="display-flex">
    <h3>"${title}"</h3>&nbsp;
    <span>by</span>&nbsp;
    <p class="paragraph">${author}</p>
  </div>
  <button id="${id}" type="button" onclick="handleRemove('${id}')" class="remove-button">Remove</button>
</section>`;
  parentElement.appendChild(bookListItemElement);
};