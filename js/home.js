$(document).ready(function () {
console.log("hihi")

   
    $(".block-menu-2 >ul >li> a").click(function () {
       $(this).siblings(".menu2-layer2").toggle(".d-inline");
      })
    $(".menu2-layer2> ul> li >a").click(function () {
      
        $(this).siblings(".menu2-layer-3").toggle(".d-inline");;
      })
});