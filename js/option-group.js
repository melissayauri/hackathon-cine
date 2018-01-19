/* Funcionalidad Vista Opción Ver Película en Grupo */
$(document).ready(function() {
  $('#select-1').hide();
  $('#select-2').hide();
  $('#select-3').hide();
  $('#select-4').hide();
  $('#select-5').hide();
  $('.btn-1').hide();

  // selecciona el contenedor para los cuadros

  var chooseGender = $('#choose-gender');
  // el evento
  $('#person-number').change(function() {
    switch (true) {
    case event.target.value === '1':
      // agrega la clase display none
      $('#select-1').hide();
      $('#select-2').hide();
      $('#select-3').hide();
      $('#select-4').hide();
      $('#select-5').hide();
      $('.btn-1').hide();
      $('.carousel-temp').show();
      break;
    case event.target.value === '2':
      // chooseGender.html('');
      $('#select-1').show();
      $('#select-2').show();
      $('#select-3').hide();
      $('#select-4').hide();
      $('#select-5').hide();
      $('.btn-1').show();
      $('.carousel-temp').hide();
      break;
    case event.target.value === '3':
      $('#select-1').show();
      $('#select-2').show();
      $('#select-3').show();
      $('#select-4').hide();
      $('#select-5').hide();
      $('.btn-1').show();
      $('.carousel-temp').hide();
      break;
    case event.target.value === '4':
      $('#select-1').show();
      $('#select-2').show();
      $('#select-3').show();
      $('#select-4').show();
      $('#select-5').hide();
      $('.btn-1').show();
      $('.carousel-temp').hide();
      break;
    case event.target.value === '5':
      $('#select-1').show();
      $('#select-2').show();
      $('#select-3').show();
      $('#select-4').show();
      $('#select-5').show();
      $('.btn-1').show();
      $('.carousel-temp').hide();
      break;
    };
  });
  // melissa y yenny
  /* Arreglos con Preferencias existentes en la API*/
  var musical = ['Cannibal! The Musical', 'Lovestruck: The Musical', 'College Musical', 'Cats'];
  var fantasy = ['Lovestruck: The Musical', 'Shrek the Musical'];
  var ficcion = ['alien', 'batman', 'lego', 'mascara', 'Cannibal! The Musical'];
  var accion = ['Star Wars', 'Wonder Woman', 'Scott Pilgrim vs. the World', 'Tropic Thunder', 'Pirates of the Caribbean', 'Shaolin Soccer', 'Airbag'];
  var animada = ['Up', 'Moana'];
  var aventura = ['Star Wars', 'Up', 'Moana', 'Pirates of the Caribbean', 'Back to the Future', 'Wonder Woman'];
  var cienciaficcion = ['The Adjustment Bureau', 'Back to the Future'];
  var comedia = ['Up', 'Moana', 'Scott Pilgrim vs. the World', 'Tropic Thunder', 'Shaolin Soccer', 'Airbag', 'Back to the Future'];
  var drama = ['Night and Day'];
  var erotico = ['Fifty Shades Darker'];
  var romantica = ['Possession ', ' Date Movie, Love Actually', 'Sun, Sand & Romance', 'Modern Romance'];
  var suspenso = ['The Sixth Sense ', ' Vertigo', 'Psycho', 'Hitchcock', 'Memento'];
  var terror = ['Raising Cain', ' American Nightmare', 'The grudge', 'Grave Halloween', 'The others'];

  /**/
  var array1 = [];

  /* eventos para cada tipo de genero de la pelicula*/
  var total = [];
  var flag = 0;

  $('.musical').click(function() {
    flag = 1;
    total = $.merge(total, musical);
    alert(total);
    });

  $('.fantasy').click(function() {

    flag = 2;
    total = $.merge(total, fantasy);
    alert(total);
  });
  $('.ficcion').click(function() {
    flag = 3 ;
    total = $.merge(total, ficcion);
    alert(total);
  });


  $('.accion').click(function() {
    flag = 4 ;
    total = $.merge(total, accion);
    alert(total);
  });

  $('.animada').click(function() {
    flag = 5 ;
    total = $.merge(total, animada);
    alert(total);
  });

  $('.aventura').click(function() {
    flag = 6 ;
    total = $.merge(total, aventura);
    alert(total);
  });

  $('.cienciaficcion').click(function() {
    flag = 7 ;
    total = $.merge(total, cienciaficcion);
    alert(total);
  });

  $('.comedia').click(function() {
    flag = 8 ;
    total = $.merge(total, comedia);
    alert(total);
  });

  $('.drama').click(function() {
    flag = 9 ;
    total = $.merge(total, drama);
    alert(total);
  });

  $('.erotico').click(function() {
    flag = 10 ;
    total = $.merge(total, erotico);
    alert(total);
  });

  $('.romantica').click(function() {
    flag = 11 ;
    total = $.merge(total, romantica);
    alert(total);
  });

  $('.suspenso').click(function() {
    flag = 12 ;
    total = $.merge(total, suspenso);
    alert(total);
  });

  $('.terror').click(function() {
    flag = 14 ;
    total = $.merge(total, aventura);
    alert(total);
  });

  var temp=[];
  var coincidencia=[];
  var poscoincencia =[];
	var pos = 0;

	$('#match').click(function(){	
    alert(total);
	  flag = 15;	
    for( var i = 0; i<total.length ; i++){
      temp[i] = total[i];
      for(var j = i+1 ; j<total.length-1 ; j++) {
        if (temp[i] === total[j]) {
          pos = pos+1;
          coincidencia[i] = temp[i] ;
          //poscoincencia[i] = poscoincencia[pos]+1 ;
        }
      }			
    }
    // probando
    var myArrClean = coincidencia.filter(Boolean); 
    alert(myArrClean);
	})


  /* funcion para llamar el api*/
  function apiCall() {
    var movie = Math.floor((Math.random() * total.length - 1) + 1);
    console.log(movie);
    var randomMovie = total[movie];
    console.log(randomMovie);
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&t=' + randomMovie).then(function(response) {
      /* obteniendo el objeto*/
      console.log(response);
      /* var typeMovie = response.Genre;
      console.log(typeMovie);
      $('.genere').append(typeMovie);*/
      var image = response.Poster;
      console.log(image);
      /* $('#cont').append('<div >' +image + ' </div>');*/
      /* $('#cont img').append('image')*/
      if (image !== 'N/A') {
        $('#imagen').attr('src', image);
      }
    });
  }
  $('#match').click(function() {
    apiCall();
    $('#imagen').removeClass('hide');
  });
});
