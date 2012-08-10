var express = require('express');
var ejs = require('ejs');
var app = module.exports = express.createServer(express.logger());

app.configure(function(){
    app.use(express.compress()); 
    app.use(express.bodyParser());

    app.set('views', __dirname + '/views');
    app.register('.html', ejs);
    app.set('view engine', 'ejs');
    
    app.use(express.methodOverride());
    app.use(express.favicon(__dirname + '/public/favicon.ico', {maxAge: 31557600000}));
    app.use(app.router);
});


app.get('/', function(req, res){
    res.render('category.html', { locals : { title: 'Category Page' } });
});

app.listen(process.env.PORT);