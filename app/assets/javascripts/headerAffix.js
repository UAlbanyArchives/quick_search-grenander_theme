$(function(){
	if ($(this).scrollTop() < 57){
		 $('.navbar-top').removeClass("fixHalf");
		 $('.searchSubnav').removeClass("fixedSubnav");
		 $('#main-container').removeClass("main-container");
		 $('.logo').removeClass("logoHide");
		 $('.ualbany').removeClass("logoHide");
		 $('.smallLogo').removeClass("logoShow");
		 $('.side-nav').css({"top":52-$(this).scrollTop()});
		 $('#browseNav').css({"top":52-$(this).scrollTop()});
	  } else {
		 $('.navbar-top').addClass("fixHalf");
		 $('.searchSubnav').addClass("fixSubnav");
		 $('#main-container').addClass("content-spacer");
		 $('.logo').addClass("logoHide");
		 $('.ualbany').addClass("logoHide");
		 $('.smallLogo').addClass("logoShow");
		 $('.side-nav').css({"top": "-5px"});
		 $('#browseNav').css({"top": "-5px"});
	  }
  $(window).scroll(function(){
	  if ($(this).scrollTop() < 57){
		 $('.navbar-top').removeClass("fixHalf");
		 $('.searchSubnav').removeClass("fixedSubnav");
		 $('#main-container').removeClass("content-spacer");
		 $('.logo').removeClass("logoHide");
		 $('.ualbany').removeClass("logoHide");
		 $('.smallLogo').removeClass("logoShow");
		 $('.side-nav').css({"top":52-$(this).scrollTop()});
		 $('#browseNav').css({"top":52-$(this).scrollTop()});
	  } else {
		 $('.navbar-top').addClass("fixHalf");
		 $('.searchSubnav').addClass("fixedSubnav");
		 $('#main-container').addClass("content-spacer");
		 $('.logo').addClass("logoHide");
		 $('.ualbany').addClass("logoHide");
		 $('.smallLogo').addClass("logoShow");
		 $('.side-nav').css({"top": "-5px"});
		  $('#browseNav').css({"top": "-5px"});
	  }
  });
});