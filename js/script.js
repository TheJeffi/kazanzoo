  // ограничитель текста в блоке (НАЧАЛО)
var $width = $(window).width();
var quan = 150;
var quan2 = 50,
textBlock = $('.textblock'),
textContent = textBlock.text();
if ($width >= 468) {
  if (textContent.length > quan) {
  textBlock.text(textContent.slice(0, quan) +'...');
  }
}
if ($width <= 468) {
  if (textContent.length > quan2) {
    textBlock.text(textContent.slice(0, quan2) +'...');
    }
}

// ограничитель текста в блоке (КОНЕЦ)

$(function() {
  $(".button-calendar1").click(function(){
    $('#calendar1').show();
    $('#calendar2').hide();
    $('#calendar3').hide();
  });
$(".button-calendar2").click(function(){
    $('#calendar2').show();
    $('#calendar1').hide();
    $('#calendar3').hide();
  });
});

  $(".button-calendar3").focus(function(){
    var date = $('#calendar').val();
    console.log(date);
  if (date == "2022-04-01"){
    $('#calendar1').show();
    $('#calendar2').hide();
    $('#calendar3').hide();
    $('#calendar4').hide();
  }
  else if (date < "2022-04-01"){
    $('#calendar1').hide();
    $('#calendar2').hide();
    $('#calendar3').hide();
    $('#calendar4').show();
  }
  else if (date == "2022-04-02"){
    $('#calendar1').hide();
    $('#calendar2').show();
    $('#calendar3').hide();
    $('#calendar4').hide();
  }
  else {
    $('#calendar2').hide();
    $('#calendar1').hide();
    $('#calendar3').show();
    $('#calendar4').hide();
  }
  });

  $(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = '' + $(this).data('include') + '.html';
      $(this).load(file);
    });
      
    $(".btn").click(function(){
      if ( $("#user_name").val() == "" || $("#user_family").val() == "" || $("#user_phone").val() == "") {
        alert("Заполните все поля");
      }
      if ( $("#user_name").val() != "" && $("#user_family").val() != "" && $("#user_phone").val() != "") {
        alert("Вы успешно записались!");
      }  
    });
  });


  $(".all-news").click(function() {
    $(".body__block").show();
  });

  $(".animals-news").click(function() {
    $(".animals").show();
    $(".zoo").hide();
    $(".news").hide();
  });

  $(".zoo-news").click(function() {
    $(".animals").hide();
    $(".zoo").show();
    $(".news").hide();
  });

  $(".news-news").click(function() {
    $(".animals").hide();
    $(".zoo").hide();
    $(".news").show();
  });


  $('.button').click(function() {
    $('.button').removeClass('active');
    $(this).addClass('active')
  });
