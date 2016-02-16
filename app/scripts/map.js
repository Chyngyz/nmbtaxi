$(document).ready(function() {

    var min_w = 300; // minimum svg width
    var svg_w_orig;  // original svg dimensions
    var svg_h_orig;

    svg_w_orig = 1600;
    svg_h_orig = 1000;
    
    function resizeToCover() {
        
        // set the map to the fullscreen size
        $('.taxi-hero--map').width($(window).width());
        $('.taxi-hero--map').height($(window).height());

        // use largest scale factor of hor/vert
        var scale_h = $(window).width() / svg_w_orig;
        var scale_v = $(window).height() / svg_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        // should be scaled width < minimum width
        if (scale * svg_w_orig < min_w) {scale = min_w / svg_w_orig;};

        // scale
        $('#mapsvg').width(scale * svg_w_orig);
        $('#mapsvg').height(scale * svg_h_orig);
        // center
        $('.taxi-hero--map').scrollLeft(($('#mapsvg').width() - $(window).width()) / 2);
        $('.taxi-hero--map').scrollTop(($('#mapsvg').height() - $(window).height()) / 2);
    };

    


    $( window ).resize(function() {
      resizeToCover();
    });



	var g = Snap(".taxi-hero--map");
    Snap.load("images/mapp.svg", function(f) {

        var r1 = f.select("#route1").attr('d'),
            r2 = f.select("#route2").attr('d'),
            r3 = f.select("#route3").attr('d'),
            r4 = f.select("#route4").attr('d'),
            r5 = f.select("#route5").attr('d');

        g.append(f);


        // Set size of svg
        $(window).trigger('resize');
        // Change the bg image
        $('.taxi-hero').css('background-image', 'url(../images/bg-clean.jpg)');

        var svgEl = Snap('#mapsvg');
        var gro1 = svgEl.g();
        var gro2 = svgEl.g();
        var gro3 = svgEl.g();
        var gro4 = svgEl.g();
        var gro5 = svgEl.g();
        
        var attr = {
          id: "squiggle",
          fill: "none",
          strokeMiterLimit: "10",
          strokeDasharray: "9 9",
          strokeDashOffset: "988.01",
          
        };
        

        // Pathes
        var path1 = svgEl.path(r1).attr(attr);
        var path2 = svgEl.path(r2).attr(attr);
        var path3 = svgEl.path(r3).attr(attr);
        var path4 = svgEl.path(r4).attr(attr);
        var path5 = svgEl.path(r5).attr(attr);


        

        Snap.load("images/marker.svg", function(f) {
            var markerg = f.select("g");
            gro1.add(markerg);
            setTimeout(function() {
               animation(path1, markerg, gro1, 35000);
            }, 4000);
            
        });

        Snap.load("images/marker.svg", function(f) {
            var markerg = f.select("g");
            gro2.add(markerg);

            animation(path2, markerg, gro2, 25000);

        });

        Snap.load("images/marker.svg", function(f) {
            var markerg = f.select("g");
            gro3.add(markerg);

            animation(path3, markerg, gro3, 35000);

        });

        Snap.load("images/marker.svg", function(f) {
            var markerg = f.select("g");
            gro4.add(markerg);

            animation(path4, markerg, gro4, 35000);

        });

        Snap.load("images/marker.svg", function(f) {
            var markerg = f.select("g");
            gro5.add(markerg);

            animation(path5, markerg, gro5, 55000);

        });


        function animation(path, el, group, duration) {
            // Length of path
            var len = path.getTotalLength();

            // Animate Path
            path.attr({
              stroke: '#fff',
              strokeWidth: 2,
              strokeOpacity: 0.4,
              fill: 'none',
              fillOpacity: 0,
              // Animate Path
              "stroke-dasharray": "12 6",
              "stroke-dashoffset": len
            }).animate({"stroke-dashoffset": 10}, 40000, mina.easeinout, function() {
                // recurse animation
                animation(path, el, group, duration);
            });


            Snap.animate(0, len, function( value ) {
                var movePoint = path.getPointAtLength( value );
                group.transform('t' + parseInt(movePoint.x - 14 ) + ',' + parseInt( movePoint.y - 15) + 'r0');
            }, duration, mina.easeinout);
        }
        

    });



    
});

















