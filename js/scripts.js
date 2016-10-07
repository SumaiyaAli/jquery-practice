// check that the document is ready

$(document).ready(function(){
  // create a click handler for when the button is clicked
  $('.button').click(function(){

    //loop through every element with class "circle"
    //if the element has class of "big-green",change it to ssmall blue
    //and if element has class of small blue change it to big green
    $('.circle').each(function(){

      if ( $(this).hasClass('big-green') ){
        $(this).removeClass('big-green').addClass('small-blue');
      } else {
        $(this).removeClass('small-blue').addClass('big-green');
      }

    });

  });


});
