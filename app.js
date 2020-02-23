require('dotenv');

const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

//const rotas = require('./routes/');
const index = require('./routes/indexRouter');
const usuarios = require('./routes/usuariosRouter');
const enderecos = require('./routes/enderecosRouter');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/usuarios', usuarios);
app.use('/grupos', enderecos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`)
});