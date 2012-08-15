var express = require('express');
var ejs = require('ejs');
var app = module.exports = express.createServer(express.logger());

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.register('.html', ejs);
    
    app.use(express.compress()); 
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));
    app.use(express.favicon(__dirname + '/public/favicon.ico', {maxAge: 31557600000}));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
    
    app.use(app.router);
});

app.get('/', function(req, res){
    res.render('index.html', { locals : { title: 'Home Page', cssFileName: 'index' } });
});

app.get('/category', function(req, res){
    res.render('category.html', { locals : { title: 'Category Page', cssFileName: 'category' } });
});

app.get('/spill', function(req, res) {
    res.render('spill.html', { locals : { title: 'Spill Page', cssFileName: 'spill' } });
});
    
app.get('/product', function(req, res) {
    res.render('product.html', { locals : { title: 'Product Page', cssFileName: 'product' } });
});

app.get('/family', function(req, res) {
    res.render('family.html', { locals : { title: 'Family Page', cssFileName: 'family' } });
});

app.listen(process.env.PORT);
