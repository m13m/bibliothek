const pg = require('pg')

const seed = [
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
    },
    {
      id: 3,
      author: 'Unknown',
      country: 'Sumer and Akkadian Empire',
      language: 'Akkadian',
      link: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh ',
      pages: 160,
      title: 'The Epic Of Gilgamesh',
      year: -1700,
    },
    {
      id: 4,
      author: 'Unknown',
      country: 'Achaemenid Empire',
      language: 'Hebrew',
      link: 'https://en.wikipedia.org/wiki/Book_of_Job ',
      pages: 176,
      title: 'The Book Of Job',
      year: -600,
    }];

function seed() {
  
}    