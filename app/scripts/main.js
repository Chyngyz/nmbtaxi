$(document).ready(function() {
	var mobileMenuState = false;
	var $mobileMenu = $('.main-mobile-menu');

	setTimeout(function() {
		$('.mouse').addClass('hide');
		setTimeout(function() {
			$('.mouse').remove();
		}, 400);
	}, 6000);

	$('.mouse').click(function() {
	    $("html, body").animate({ scrollTop: $(".taxi-hero").height()+120 }, "slow");
	    return false;
	})


	// Blog slide
	$("#owl-blog").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      pagination: false,
      singleItem:true,
      navigationText: ["", ""]
  	});
	

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Mobile menu triggers
	$('.taxi-header--burger').click(function() {
		$mobileMenu.addClass('open');
		mobileMenuState = true;
	});

	$('.mobile-menu-close').click(function() {
		$mobileMenu.removeClass('open');
		mobileMenuState = false;
	})

	// Masked Input
	$("#telnum").mask("+99999999?9999999");

	// Sticky header
	var docElem = document.documentElement,
		header = document.querySelector( 'header.taxi-header' ),
		didScroll = false,
		changeHeaderOn = 70;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$(header).addClass('shrink');
		}
		else {
			$(header).removeClass('shrink');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

	// Order demo popups
	$('.taxi-hero--btn, .taxi-pricing--btn').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: 'my-mfp-slide-bottom'
	});

	// For clients popup
	$('.taxi-clients').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: 'my-mfp-slide-bottom'
	});

	// Popup with callback for mobile menu
	$('.taxi-header--btn').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: 'my-mfp-slide-bottom',
		callbacks: {
			beforeOpen: function() {
				console.log(mobileMenuState);
				if(mobileMenuState) {
					$mobileMenu.removeClass('open');
				}
			}
		}
	});

	$('.screen-thumbs').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});



	// Close any popup trigger
	$('.closeBtn').click(function() {
		$.magnificPopup.close();
	});


	$('.taxi-about--clients').waypoint(function() {
		//$('.taxi-about--iphone').addClass('on');
		$('.taxi-about--clients').addClass('on');
	}, {
		offset: '70%'
	});

	$('.taxi-about--drivers').waypoint(function() {
		$('.taxi-about--android').addClass('on');
		$('.taxi-about--drivers').addClass('on');
	}, {
		offset: '70%'
	});
	$('.bottom-screen-wrap').waypoint(function() {
		$('.taxi-about--dapp').addClass('on');
	}, {
		offset: '50%'
	})

				

	$('.taxi-admin--operators').waypoint(function() {
		$('.taxi-admin--operators').addClass('on');
		setTimeout(function() {
			$('.taxi-about--dapp').addClass('on');
		}, 1000);

		$(".taxi-admin--operators-thumbs a").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});

	}, {
		offset: '50%'
	});

	$('.taxi-admin--managers').waypoint(function() {
		$('.taxi-admin--managers').addClass('on');
		$('svg#svggraph').addClass('grown');
		$('.taxi-download').addClass('on');
	}, {
		offset: '50%'
	});

	$('.taxi-indicators').waypoint(function() {
		$('.taxi-indicators--label-bg').addClass('on');
		$('.taxi-indicators--label-sm').addClass('on');

		$(".indicator").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
		
	}, {
		offset: '50%'
	});

	$('.taxi-knowh').waypoint(function() {
		$('.taxi-knowh--label').addClass('on');

		$(".taxi-kn").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
		
	}, {
		offset: '50%'
	});

	$('.taxi-cooperation').waypoint(function() {
		$('.taxi-cooperation--title').addClass('on');
		$('.taxi-cooperation--l').addClass('on');
		$('.taxi-cooperation--r').addClass('on');
		
	}, {
		offset: '50%'
	});


	$('.taxi-pricing').waypoint(function() {
		$('.taxi-pricing--title').addClass('on');
		$('.taxi-pricing--desc').addClass('on');

		$(".taxi-pricing--services a").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
		
	}, {
		offset: '50%'
	});


	// Mobile MENU NAV
	$('.main-mobile-menu .nav a[href*="#"]:not([href="#"])').click(function(e) {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

	      // if its mobile menu, close if opened
	      if(mobileMenuState) {
	      	$mobileMenu.removeClass('open');
	      }

	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 50
	        }, 1000);
	        return false;
	      }
	    }
	});

	// Main MENU NAV
	// Cache selectors
	var lastId,
	    topMenu = $("nav.main-nav"),
	    topMenuHeight = topMenu.outerHeight()+15,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      	var item = $($(this).attr("href"));
	      	if (item.length) { return item; }
	    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  	var href = $(this).attr("href"),
	      	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	      	menuItems.filter('a[href!="'+href+'"]').removeClass("active");

	  	$('html, body').stop().animate({ 
	      	scrollTop: offsetTop
	  	}, 1000);

	  	e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   	// Get container scroll position
	   	var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   	// Get id of current scroll item
	   	var cur = scrollItems.map(function(){
	     	if ($(this).offset().top < fromTop)
	       		return this;
	   	});
	   	// Get the id of the current element
	   	cur = cur[cur.length-1];
	   	var id = cur && cur.length ? cur[0].id : "";

	   
	   	if (lastId !== id) {
	       	lastId = id;
	       	console.log(menuItems.removeClass("active").filter('a[href="#'+id+'"]'));
	       	// Set/remove active class
	       	menuItems.removeClass("active").filter('a[href="#'+id+'"]').addClass("active");

	   	}                   
	});


		

});









