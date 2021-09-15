
// Loading Screen   
$(document).ready(function () {
  $("#loading").fadeOut(1000, function () {
    $("body").css("overflow", "auto")

  });



// plugin
$(".owl-carousel").owlCarousel({items : 3,loop:true ,});



  // change el navbar backgroundColor when i skip about Section  
  let aboutOffset = $("#about").offset().top; //bo3d el element 3n el scroll 
  $(window).scroll(function () {

    let wScroll = $(window).scrollTop(); // El user nzl add a bl scroll 
    if (wScroll > aboutOffset) {
      $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.5");
      $("#btnUp").fadeIn(1000);
    }
    else {
      $("#main-nav").css("backgroundColor", "transparent");
      $("#btnUp").fadeOut(1000);

    }
  })
  /** */


  $("#btnUp").click(function () {

    $("htm,body").animate({ scrollTop: 0 }, 2000);
  })


  // scroll to any Section I want
  $("a").click(function (e) {
    let Href = $(e.target).attr("href")
    let secOffset = $(Href).offset().top;

    $("htm,body").animate({ scrollTop: secOffset }, 2000);
  })


  // hide and show sideBar
  $("#toggleIcone").click(function () {
    // $("#sideBar .colors").toggle(2000);
    let wid = $(".colors").innerWidth();
    if ($("#sideBar").css("left") == '0px') {
      $("#sideBar").animate({ left: `-${wid}` }, 1000);
    }
    else {
      $("#sideBar").animate({ left: `0px` }, 1000);
    }

  })
  // typing Plugins
  var typed = new Typed('.tplug', {
    strings: ['We Are Developer', 'We Are Graphics And Designers'],
    typeSpeed: 50,
    loop:true,
    smartBackspace: true
  
  });

  // change any element with sideBar colors
  let cBox = $(".colorBox");
  cBox.eq(0).css("backgroundColor", "red");
  cBox.eq(1).css("backgroundColor", "blue");
  cBox.eq(2).css("backgroundColor", "#09c");
  cBox.eq(3).css("backgroundColor", "black");
  cBox.eq(4).css("backgroundColor", "white");

  $(".colorBox").click(function (e) {
    let myColor = $(e.target).css("backgroundColor");
    $("p").css("color", myColor);
  })




})

// window.onload = function () {

//   $("#loading").fadeOut(2000, function () {
//     $("body").css("overflow", "auto")

//   });
// }