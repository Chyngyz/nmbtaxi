$(document).ready(function() {
    var min_w = 300; // minimum video width allowed
    var vid_w_orig;  // original video dimensions
    var vid_h_orig;
    
    //Change video poster on large devices to large poster
    if (window.devicePixelRatio > 1 || $(window).width() > 1370) {
        $('#mapvideo').attr('poster', 'images/poster-lg.jpg');
    }

    

    // Video arrays
    var v = [
        [
            "media/md/map.mp4",
            "media/md/map.webm"
        ],
        [
            "media/lg/map.mp4",
            "media/lg/map.webm"
        ]
    ];
    var video = document.getElementById('mapvideo');

    function setVideo() {
        if (window.devicePixelRatio > 1 || $(window).width() > 1370) {
            if(Modernizr.video && Modernizr.video.h264) {
                video.src = v[1][0];
            } else if(Modernizr.video && Modernizr.video.webm) {
                video.src = v[1][1];
            }

            //console.log('resize');
            video.load();
        } else {
            if(Modernizr.video && Modernizr.video.h264) {
                video.src = v[0][0];
            } else if(Modernizr.video && Modernizr.video.webm) {
                video.src = v[0][1];
            }
            //console.log('sm');
            video.load();
        }
    }

    
    
       
    vid_w_orig = parseInt($('#mapvideo').attr('width'));
    vid_h_orig = parseInt($('#mapvideo').attr('height'));
    
    $(window).resize(function () {
        // Change videos on resize
        setVideo();

        if($(window).width() > 540) {
            $('#mapvideo').get(0).play();
            $('.taxi-hero--map').show();

            resizeToCover();
        } else {
            $('.taxi-hero--map').hide();
            $('#mapvideo').get(0).pause();
        }


        
    });

    $(window).trigger('resize');


    function resizeToCover() {
        
        // set the map to the fullscreen size
        $('.taxi-hero--map').width($(window).width());
        $('.taxi-hero--map').height($(window).height());

        // use largest scale factor of hor/vert
        var scale_h = $(window).width() / vid_w_orig;
        var scale_v = $(window).height() / vid_h_orig;
        var scale = scale_h > scale_v ? scale_h : scale_v;

        // should be scaled width < minimum width
        if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

        // scale
        $('#mapvideo').width(scale * vid_w_orig);
        $('#mapvideo').height(scale * vid_h_orig);
        // center
        $('.taxi-hero--map').scrollLeft(($('#mapvideo').width() - $(window).width()) / 2);
        $('.taxi-hero--map').scrollTop(($('#mapvideo').height() - $(window).height()) / 2);
    };
    
});

















