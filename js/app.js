$(init);
function init() {
    $('.ryu').mouseenter(showReady);
    $('.ryu').mouseleave(showStill);
    $('.ryu').mousedown(showCool);
    $('.ryu').mouseup(backReady);
    $(document).keydown(fire);
     $(document).keyup(postFire);


  } //end init

  function showReady(){
     $('.ryu-still').hide();
    $('.ryu-cool').hide(); 
    $('.ryu-ready').show();
    $('#instructions').hide().html('Click X to fire!').fadeIn ("slow");
  }

  function showStill(){
     $('.ryu-ready').hide();
    $('.ryu-cool').hide(); 
    $('.ryu-still').show();
    $('#instructions').hide().html('Click Mouse on Ryu to strike a pose.').fadeIn ("slow");
  }

  function showCool(){
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-still').hide(); 
    $('.ryu-cool').show(); 
    $('#instructions').hide().html('Ryu, The Zen Warrior!').fadeIn ("slow");
  }

  function backReady(){
    showReady() 
  }

  function fire(){
    var keycode = (event.which);
      if(keycode == '88')
      {
      playHadouken();    
      $('.ryu-ready').hide();
      $('.ryu-throwing').show();
      $('.ryu-cool').hide(); 
      $('#instructions').hide();
      $('.hadouken').finish().show()
      .animate
            (
              {'left': '300px'},
              500,
              function()  /// anon function .. can i change/name it/ init it?
              {
                $(this).hide();
                $(this).css('left', '-212px');
              }

            )
        }
    }

    function postFire(){
         $('.ryu-cool').hide();
          $('.ryu-ready').show(); 
          $('.ryu-still').hide(); 
          $('.ryu-throwing').hide();
          $('#instructions').hide().html('Click Mouse on Ryu to strike a pose.').fadeIn ("slow");
    }



  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}


    

    
  


 



