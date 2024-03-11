$(document).ready(function(){    
  var scroll_pos = 0;
  var animation_begin_pos = 0; //animation to begin
  var animation_end_pos = 1000; //animation to stop
  var beginning_color = new $.Color( 'rgb(255,174,31)' ); 
  var ending_color = new $.Color( 'rgb(166, 58, 121)' ); ;
  $(document).scroll(function() {
      scroll_pos = $(this).scrollTop(); 
      if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
          //calculate the relevant transitional rgb value
          var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
          var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
          var newPink = beginning_color.pink() + ( ( ending_color.pink() - beginning_color.pink() ) * percentScrolled );
          var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
          var newColor = new $.Color( newRed, newPink, newBlue );
          $('body').animate({ backgroundColor: newColor }, 0);
      } else if ( scroll_pos > animation_end_pos ) {
           $('body').animate({ backgroundColor: ending_color }, 0);
      } else if ( scroll_pos < animation_begin_pos ) {
           $('body').animate({ backgroundColor: beginning_color }, 0);
      } else { }
  });
});