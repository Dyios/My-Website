$(function(){
    // cool welcome animation
    $('[data-toggle=show]').show("slide",1500,function(){ 
        $("#skills").show(1500);
        $("#education").show(1500);
        $("#experience").show(1500);
    });
    $('hr.bg-primary').show("slide",{direction : 'right'},1500)

    $(".showed").fadeOut(function(){ // center SKILLS
        $(this).css("text-align", "center" ).css("padding-left",0);
    }).fadeIn(1000);

    // hide the sections
    $("#skills").hide().removeClass("d-none")

    // the toggle function
    $("[data-toggle = show]").click(function(){
        $(`${this.dataset.target}`).toggle("slide",1000);
        if( this.classList.contains('showed')){
            $(this).fadeOut(function(){
                $(this).css("text-align", 'left' ).css("padding-left", '5%');
            }).fadeIn(100);
            this.classList.remove('showed');
        }
        else{
            $(this).fadeOut(function(){
                $(this).css("text-align", "center" ).css("padding-left", '0%');
            }).fadeIn(100);
            this.classList.add('showed');
        }
    });
});
