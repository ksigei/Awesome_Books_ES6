Awesome_Books_ES6

import { Book } from './modules/book_store.js';
import { BookStore } from './modules/book_store.js';

import {
    listLink,
    formLink,
    contactLink,
    list,
    formSection,
    contactSection,
    generateId,
    initialBooks,
    bookListElement,
    bookStore,
    books,
    formElement,
    handleSubmition,
    navigatePage,
} from './modules/functions.js';
// import { luxon } from './modules/luxon.js';

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



