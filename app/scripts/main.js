'use strict';
$(document).ready(function(){

    $('#my-affix').affix({
        offset:{top: 125}
    });

    $('#btn0').click(function(){
        $('.services_intro').show();
        $('#services_personal_info').hide();
        $('#services_choices').hide();
        $('#services_bike_info').hide();
    });

    $('#btn1').click(function(){
        $('#services_intro').hide();
        $('#services_info').show();
        $('#services_choices').hide();
        $('#services_bike_info').hide();
    });

    $('#btn1b').click(function(){
        $('#services_intro').hide();
        $('#services_info').show();
        $('#services_choices').hide();
        $('#services_bike_info').hide();
    });

    $('#btn2').click(function(){
        $('#services_intro').hide();
        $('#services_info').hide();
        $('#services_choices').show();
        $('#services_bike_info').hide();
    });

    $('#btn2b').click(function(){
        $('#services_intro').hide();
        $('#services_info').hide();
        $('#services_choices').show();
        $('#services_bike_info').hide();
    });

    $('#btn3').click(function(){
        $('#services_intro').hide();
        $('#services_info').hide();
        $('#services_choices').hide();
        $('#services_bike_info').show();
    });

    $('#reset').click(function(){
        $('#services_intro').hide();
        $('#services_info').show();
        $('#services_choices').hide();
        $('#services_bike_info').hide();
    });

});

