const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/js')));

app.set('views', './src/views/');
app.set('view engine', 'ejs');

const nav = [{ link: '/authors', title: 'Authors' },
  { link: '/books', title: 'Books' }];

const bookRouter = require('./src/routes/booksRoutes')(nav);
const authRouter = require('./src/routes/authRoutes')(nav);

app.use('/books', bookRouter);
app.use('/auth', authRouter);


app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav,
      title: 'Library',
    },
  );
});


app.listen(port, () => {
  debug(`Listening at port ${chalk.green(port)}`);
});
