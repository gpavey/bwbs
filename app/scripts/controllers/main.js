'use strict';
/*global $:false */

$(document).ready(function(){

    $('#my-affix').affix({
        offset:{top: 125}
    });

});

$(document).on('hidden.bs.modal', function (e) {
    $(e.target).removeData('bs.modal').find('.modal-content').empty();
});

//this is where we apply opacity to the arrow
$(window).scroll( function(){

    //get scroll position
    var topWindow = $(window).scrollTop();
    //multipl by 1.5 so the arrow will become transparent half-way up the page
    var newTop = topWindow * 1.5;

    //get height of window
    var windowHeight = $(window).height();

    //set position as percentage of how far the user has scrolled
    var position = newTop / windowHeight;
    //invert the percentage
    position = 1 - position;

    //define arrow opacity as based on how far up the page the user has scrolled
    //no scrolling = 1, half-way up the page = 0
    $('.arrow-wrap').css('opacity', position);

});
