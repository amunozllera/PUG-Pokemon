require('dotenv').config();
const express = require('express');
const path = require('path');
const publicRoutes = require('./routes/main.public.routes');
const privateRoutes = require('./routes/main.private.routes');
const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');

app.use(publicRoutes);
app.use(process.env.API_BASE, privateRoutes);

app.listen(port, async () => { 
  console.log(process.env.WELCOME_MESSAGE);
});