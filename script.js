$(document).ready(function() {

  var $screen = "index";

  showScreen($screen);

});

$(".start").click(function(event) {
  var $screen = "battle";

  statGen();
  randomPerson();
  showScreen($screen);
});

function randomPerson(){
  $(".battle-img").attr("src", "img/people/"+randomGen(1,10)+".jpg");
}

function showScreen(screen){
  $('.screen').css('display', 'none');
  $('.'+screen).fadeIn('fast')
}

function statGen(){
  $('.stat').each(function() {
    $(this).html(randomGen(1,10));
  });
}

function randomGen(a,b){
  var min = a;
  var max = b;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;

  return random;
}