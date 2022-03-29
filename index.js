import { listLink } from './modules/functions.js';
import { contactLink } from './modules/functions.js';
import { formLink } from './modules/functions.js'
import { list } from './modules/functions.js'
import { formSection } from './modules/functions.js'
import { contactSection } from './modules/functions.js'

formSection.style.display = 'none';
contactSection.style.display = 'none';

listLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
  list.style.display = 'block';
});

formLink.addEventListener('click', () => {
  formSection.style.display = 'block';
  contactSection.style.display = 'none';
  list.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  formSection.style.display = 'none';
  contactSection.style.display = 'block';
  list.style.display = 'none';
});
class Book {
  constructor({ title, author, id }) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

import { BookStore } from './modules/book_store.js'
 
import { displayBook } from './modules/book_store.js'

const generateId = () => `id_${Math.random().toString(36).slice(2)}`;

const initialBooks = [
  {
    title: 'the boy with wings',
    author: 'Kip Sigei',
    id: generateId(),
  },

  {
    title: 'Think Pythone',
    author: 'Kip Sigei',
    id: generateId(),
  },
];

const bookListElement = document.querySelector('ul.book-list');

const bookStore = new BookStore(initialBooks);
const books = bookStore.all();
books.forEach((book) => {
  displayBook(book, bookListElement);
});

const formElement = document.querySelector('#book-form');
const handleSubmition = (event) => {
  event.preventDefault();
  const title = document.querySelector('.title-input').value;
  const author = document.querySelector('.author-input').value;
  const id = generateId();
  const newBook = new Book({ title, author, id });
  if (bookStore.add(newBook)) {
    displayBook(newBook, bookListElement);
  }
};
formElement.addEventListener('submit', handleSubmition);
// eslint-disable-next-line no-unused-vars
const handleRemove = (currentId) => {
  if (bookStore.remove(currentId)) {
    const removeButton = document.getElementById(currentId);
    removeButton.parentElement.parentElement.remove();
  }
};

const navigatePage = () => {
  const navLists = document.querySelectorAll('.nav-list-item');
  const handleNavigation = (event) => {
    //
    if (event.target.classList.contains('active')) {
      return false;
    }

    document.querySelector('.nav-list-item.active').classList.remove('active');
    event.target.classList.add('active');
    document.querySelector('section.active').classList.remove('active');
    document
      .querySelector(`#${event.target.id}-section`)
      .classList.add('active');
    return true;
  };

  navLists.forEach((navlist) => {
    navlist.addEventListener('click', handleNavigation);
  });
};
navigatePage();
