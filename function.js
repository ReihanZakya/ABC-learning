// modal
// function myFunction(i) {
//     var box = document.getElementsByClassName('modal')[0];

//     if(i === 1) {
//         box.style.display = "block";
//     } else if (i === -1){
//         box.style.display = "none";
//     }
// };
//    preloader
var loader = document.getElementById("preloader");
setTimeout(() => { loader.style.display = "none" 
}, "1500");

// gagal
$(document).ready(function(){
    $(".popup").click(function(){
        $(".modal").show();
    })
    $(".popupclose").click(function(){
        $(".modal").hide();
    })

    $(".popup-regis").click(function(){
        $(".modal").show();
        $("#change").text('Registration required');
    })
    $(".popupclose-regis").click(function(){
        $(".modal").hide();
    })

    $(".active-class a").click(function() {
    $(".active-class a").removeClass("active");
    $(this).addClass("active");
    });

    // hamburger
    $('.icon').click(function(){
        $('nav ul').slideToggle(100);
        $('.burger').toggle();
        $('.adios').toggle();
    });

    // tab
    $('.tab_container:first').show();;
           $('.tab_navigation li:first').addClass('active');;

            $('.tab_navigation li').click(function(event){

                index = $(this).index();
                $('.tab_navigation li').removeClass('active');
                $(this).addClass('active');
                $('.tab_container').hide();
                $('.tab_container').eq(index).show();

            });
});