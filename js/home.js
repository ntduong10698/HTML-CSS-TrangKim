$(document).ready(function () {
  $(".block-menu-2 >ul >li> a").click(function () {
    $(this).siblings(".menu2-layer2").toggle(".d-inline");
    $(this).children("img").toggleClass("rotate")
  })
  $(".menu2-layer2> ul> li >a").click(function () {
    $(this).siblings(".menu2-layer-3").toggle(".d-inline");;
  })
  $('#bar').click(function () {
    $("#menu2").css({ "display": "inline" })
  });
  $("#closeBar").click(function () {
    $("#menu2").css({ "display": "none" })
  })
});