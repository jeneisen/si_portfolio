var fixed_menu = true;
window.jQuery = window.$ = jQuery;

/* Custom Scripts */

function calculateScroll() {
  var contentTop      =   [];
  var contentBottom   =   [];
  var winTop      =   $(window).scrollTop();
  var rangeTop    =   200;
  var rangeBottom =   500;
  $('.navmenu').find('a').each(function(){
    contentTop.push( $( $(this).attr('href') ).offset().top );
    contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
  })
  $.each( contentTop, function(i){
    if ( winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom ){
      $('.navmenu ul li a')
      .removeClass('active')
      .eq(i).addClass('active');
      
      // $('#top .navmenu ul li a').first().addClass('active');
      
    }
  })
};

jQuery(document).ready(function() {
  //Menu Sidebar
  // setTimeout(function() {
  //  $('#sidebar').animate({left: '-92px'}, 800);
  // }, 3500);
  
  // jQuery('.sidebar_btn').click(function(){
  //  var sidebar = $('#sidebar');
  //  if (sidebar.css('left') === '-92px') {
  //    $('#sidebar').animate({left: '0px'});
  //  } else {
  //    $('#sidebar').animate({left: '-92px'});
  //  }   
  // });
  
  // if single_page
  if (jQuery("#page").hasClass("single_page")) {      
  }
  else {
    $(window).scroll(function(event) {
      calculateScroll();
    });
    $('.navmenu ul li a, .mobile_menu ul li a, .down_btn, .home_btn').click(function() {  
      $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
      return false;
    });
  };

  
  
  //Contact form
  $("#ajax-contact-form").submit(function() {
    var str = $(this).serialize();    
    $.ajax({
      type: "POST",
      url: "contact_form/contact_process.php",
      data: str,
      success: function(msg) {
        // Message Sent - Show the 'Thank You' message and hide the form
        if(msg == 'OK') {
          result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
          $("#fields").hide();
        } else {
          result = msg;
        }
        $('#note').html(result);
      }
    });
    return false;
  });
  
  
  //PrettyPhoto
  $("a[rel^='prettyPhoto']").prettyPhoto();
  
  
  /* Nice Scroll */
    $("html").niceScroll({zindex:99999,cursorborder:"1px solid #333"});
  
  
  //Home Height
  sliderHeight(); 
  
  
  //Welcome Block Vertical Align
  mymargtop();
  
  
  //Contact Height
  contactHeight();
  
});



// jQuery(window).resize(function(){
//   //Home Height
//   sliderHeight();
  
//   //Welcome Block Vertical Align
//   mymargtop();
  
//   //Parallax Effect
//   $(window).stellar();
  
//   //Contact Height
//   contactHeight();
  
// });

//Home Height
function sliderHeight(){
  wh = $(window).height();
  $('#home').css({height:wh});
}

//Welcome Block Vertical Align
function mymargtop() {
  var body_h = $(window).height();
  var container_h = $('.welcome_block').height(); 
  var marg_top = Math.abs((body_h - container_h)/2);  
  $('.welcome_block').css('padding-top', marg_top);
}

//Contact Height
function contactHeight(){
  var wh = $(window).height();
  var container_h = $('#contact .container').height();  
  var padding_top = Math.abs((wh - container_h)/2); 
  
  $('#contact').css('min-height', wh);
  $('#contact .container').css('padding-top', padding_top); 
}




