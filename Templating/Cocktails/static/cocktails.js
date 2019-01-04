$(document).ready(function(){

    $('form').on('submit', function(){
  
        var name = $('form input');
        var price = $('form input');
        var contains = $('form input');
        var isAlcoholic = $('form input');
        var cocktail = {name: name.val(), price: price.val(), contains: [contains.val()], isAlcoholic: isAlcoholic.val()};

       
        $.ajax({
          type: 'POST',
          url: '/',
          cocktails: cocktail,
          success: function(cocktails){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
    // $('li').on('click', function(){
    //     var item = $(this).text().replace(/ /g, "-");
    //     $.ajax({
    //       type: 'DELETE',
    //       url: '/' + item,
    //       success: function(data){
    //         //do something with the data via front-end framework
    //         location.reload();
    //       }
    //     });
    // });
  
  });