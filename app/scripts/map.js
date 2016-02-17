$(document).ready(function() {
    var min_w = 300; // minimum video width allowed
    var vid_w_orig;  // original video dimensions
    var vid_h_orig;

    
        
    vid_w_orig = parseInt($('#mapvideo').attr('width'));
    vid_h_orig = parseInt($('#mapvideo').attr('height'));
    
    $(window).resize(function () {
        if($(window).width() > 540) {
            $('.taxi-hero--map').show();
            resizeToCover();
        } else {
            $('.taxi-hero--map').hide();
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

















