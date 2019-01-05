var bodyParser = require('body-parser');

// Cocktail List at the Bar

var cocktails = [
    { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
    { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
    { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
    { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
    { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
    { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
    { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
    { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
  ];
  var alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

  var urlencodedParser = bodyParser.urlencoded({extended: true});

module.exports = function(app){

    app.get('/', (req, res) =>{
        res.render('index',{
            atype : req.query,  
            cocktails : cocktails,
            alcoholList : alcoholList
        });
        console.log(cocktails);
        console.log('*********');
        
    });

    app.post('/', urlencodedParser, (req, res) => {
        console.log('Hello');
        console.log(req.body);
        console.log('Hello');
      cocktails.push(req.body);
      res.send(cocktails);
    });
}