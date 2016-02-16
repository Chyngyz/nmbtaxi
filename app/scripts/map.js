$(document).ready(function() {

    function positionSvg() {
        var vh = $( window ).height();
        var vw = $( window ).width();

        console.log(vh, vw);

        if(vw > 1600) {
            $('.taxi-hero--map svg').css({
                "height": "auto",
                "width": "100%"
            });
        } else {
            $('.taxi-hero--map svg').css({
                "height": "100%",
                "width": "auto"
            });
        }
    }


    $( window ).resize(function() {
      positionSvg();
    });



	var g = Snap(".taxi-hero--map");
    Snap.load("images/mapp.svg", function(f) {

        var r1 = f.select("#route1").attr('d'),
            r2 = f.select("#route2").attr('d'),
            r3 = f.select("#route3").attr('d'),
            r4 = f.select("#route4").attr('d'),
            r5 = f.select("#route5").attr('d');

        g.append(f);

        positionSvg();

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
            // SVG A - Draw Path
            var len = path.getTotalLength();

            // SVG1 - Animate Path
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
                animation(path, el, group, duration);
            });


            Snap.animate(0, len, function( value ) {
                var movePoint = path.getPointAtLength( value );
                //el.attr({ cx: movePoint.x, cy: movePoint.y });
                group.transform('t' + parseInt(movePoint.x - 14 ) + ',' + parseInt( movePoint.y - 15) + 'r0');
            }, duration, mina.easeinout);
        }
        

    });



    
});

















