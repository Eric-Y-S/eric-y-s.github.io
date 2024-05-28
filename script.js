
$(document).ready(function(){
    $(".sidebar .nav-links a").click(function(){
        var target = $(this).data('target');

        //hide all content
        $('#welcome').hide();
        $('#aboutme').hide();
        $('#skill_work').hide();
        $('#publications').hide();
        $('#notes').hide();
        $('#events').hide();
        $('#home_content_welcome').hide();
        $('#home_content_aboutme').hide();
        $('#home_content_skill_work').hide();
        $('#home_content_publications').hide();
        $('#home_content_notes').hide();
        $('#home_content_events').hide();
        background_img.style.opacity = 0;
        

        //show the target content
        $('#'+target).show();
        $('#home_content_'+target).show();
    })
    //
    $(".sidebar .logo a").click(function(){
        var target = $(this).data('target');

        //hide all content
        $('#aboutme').hide();
        $('#skill_work').hide();
        $('#publications').hide();
        $('#notes').hide();
        $('#events').hide();
        $('#home_content_welcome').hide();
        $('#home_content_aboutme').hide();
        $('#home_content_skill_work').hide();
        $('#home_content_publications').hide();
        $('#home_content_notes').hide();
        $('#home_content_events').hide();
        background_img.style.opacity = 100;

        //show the target content
        $('#'+target).show();
        $('#home_content_'+target).show();
    })
    //show default content
    $('#home_content_aboutme').hide();
    $('#home_content_skill_work').hide();
    $('#home_content_publications').hide();
    $('#home_content_notes').hide();
    $('#home_content_events').hide();
    $('#welcome').show();
    $('#home_content_welcome').show();

})
