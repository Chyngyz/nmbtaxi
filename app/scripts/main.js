$(document).ready(function() {
	var mobileMenuState = false;
	var $mobileMenu = $('.main-mobile-menu');

	$('.scroll-btn').click(function() {
	    $("html, body").animate({ scrollTop: $(".taxi-hero").height()+120 }, "slow");
	    return false;
	})

	//$(".taxi-hero--map").backstretch("images/map.svg");

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



	// Close any popup trigger
	$('.closeBtn').click(function() {
		$.magnificPopup.close();
	});


	$('.taxi-about--clients').waypoint(function() {
		$('.taxi-about--iphone').addClass('on');
		$('.taxi-about--clients').addClass('on');
	}, {
		offset: '70%'
	});

	$('.taxi-about--drivers').waypoint(function() {
		$('.taxi-about--android').addClass('on');
		$('.taxi-about--drivers').addClass('on');
		setTimeout(function() {
			$('.taxi-about--dapp').addClass('on');
		}, 1000);
	}, {
		offset: '70%'
	});

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



	$('.main-nav a[href*="#"]:not([href="#"]), .main-mobile-menu .nav a[href*="#"]:not([href="#"])').click(function(e) {
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

		

});


