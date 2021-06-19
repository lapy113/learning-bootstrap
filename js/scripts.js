$(document).ready(function(){
    $("#mycarousel").carousel({interval : 2000});
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    })

    $("#login-button").click(function(){
        $("#loginModal").modal();
    })

    $("#reserve-table-button").click(function(){
        $("#reserveTableModal").modal();
    })
})