const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const appPath = require('./utils/path')
const path = require('path');

const adminRoutes = require('./routes/admin').router;
const shopRoutes = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {title: 'Not found page', path: null});
})


app.listen(80);