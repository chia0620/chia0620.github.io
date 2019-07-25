$(document).ready(function() {
    $("#fireman-wrap").mousemove(function() {
        $("#fireman").removeClass("mouseout");
        $("#fireman").addClass("mousein");
    });

    $("#fireman-wrap").mouseleave(function() {
        $("#fireman").removeClass("mousein");
        $("#fireman").addClass("mouseout");
    });
});