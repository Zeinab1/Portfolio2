
//add and remove active class of navbar for mobile device
$('.nav-list > ul > li > a').click(function(){
  $('.nav-list > ul > li > a.active').removeClass('active');
  $(this).addClass('active')
})



// add and remove active class of aside navbar
$(document).on("scroll", onScroll);
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.aside-list > ul > li').each(function(index){
    var currLink = $(this);
    var refElement = $('#' + currLink.attr('rel'));
    console.log(refElement)
    if(refElement.offset().top - scrollPos <= 50 ){
      $('.aside-list > ul > li > a.active').removeClass('active');
      $('.aside-list > ul > li > i.active-icon').removeClass('active-icon');
      $('.aside-list > ul > li > a').eq(index).addClass('active');
      $('.aside-list > ul > li > i').eq(index).addClass('active-icon');

    }
  })
}
  
// to smooth scroll to top of the page 
  $('.SmoothyTop > i').click(function(){
    $('html , body').animate({scrollTop:'0'},1000);
    return false;
  });

//to make navbar for mobile device slide up and down
$('nav i').click(function(){
  $('.nav-list ul').slideToggle('fast');
});

// to hide aside navbar after clicked on arrow icon
  $('.arrow').click(function(){

          $('.arrow').css({display:'none'});
          $('aside').css({left:'-300px', transition: ".5s"});
          $('header').css({marginLeft:'0' , transition: ".5s"}); //width:'100%',
          $('#about').css({marginLeft:'0' , transition: ".5s"}); //width:'100%',
          $('#services').css({marginLeft:'0' , transition: ".5s"}); //width:'100%',
          $('#resume').css({marginLeft:'0' , transition: ".5s"}); //width:'100%',
          $('#projects').css({marginLeft:'0' , transition: ".5s"}); //width:'100%',   
          $('#blogs').css({marginLeft:'0' , transition: ".5s"}); //width:'100%', 
          $('.container').css({paddingLeft: '100px' , paddingRight: '100px'});
          $('#contact').css({marginLeft:'0' , transition: ".5s"}); //width:'100%',        
          $('.aside-bars').css({display:'block'});
  });

// to show aside navbar after clicked bars icon
  $('.aside-bars').click(function(){
      $('.aside-bars').css({display:'none'});
      $('aside').css({left:'0' ,transition: ".5s"});
      $('header').css({marginLeft:'300px',transition:".5s"}); //,width:'90%'
      $('#about').css({marginLeft:'300px',transition:".5s"});
      $('#services').css({marginLeft:'300px' , transition: ".5s"}); 
      $('#resume').css({marginLeft:'300px' , transition: ".5s"}); 
      $('#projects').css({marginLeft:'300px' , transition: ".5s"});  
      $('#blogs').css({marginLeft:'300px' , transition: ".5s"});
      $('.container').css({paddingLeft: '15px' , paddingRight: '15px'});
      $('#contact').css({marginLeft:'300px' , transition: ".5s"});       
      $('.arrow').css({display:'block'})
  });
  //
 
 
  $(document).ready(function(){
   
    //var owl = $('#owl-demo');
    owl = $('#owl-demo').owlCarousel({
       autoplay:true,
       autoplayTimeout : 3000,
       autoplaySpeed : 1000,


       rewind:true,
      responsive:{
        0:{
          items:4
        }
      },
      onInitialized: function(){

      }
    });
   
  });
  

  