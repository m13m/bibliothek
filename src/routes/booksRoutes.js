const express = require('express');

const bookRouter = express.Router();
const books = [
  {
    id: 0,
    author: 'Chinua Achebe',
    country: 'Nigeria',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart ',
    pages: 209,
    title: 'Things Fall Apart',
    year: 1958,
  },
  {
    id: 1,
    author: 'Hans Christian Andersen',
    country: 'Denmark',
    language: 'Danish',
    link: 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection. ',
    pages: 784,
    title: 'Fairy tales',
    year: 1836,
  },
  {
    id: 2,
    author: 'Dante Alighieri',
    country: 'Italy',
    language: 'Italian',
    link: 'https://en.wikipedia.org/wiki/Divine_Comedy ',
    pages: 928,
    title: 'The Divine Comedy',
    year: 1315,
  }
]

function router(nav) {
  
  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
          books,
        },
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const {id} = req.params
      res.render(
        'bookView',
        {
          nav,
          title: books[id].title,
          book: books[id]  
        }
        )
    });  

  return bookRouter
}
module.exports = router