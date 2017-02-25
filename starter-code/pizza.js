// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

  $('.btn-pepperonni').click(function(){
  // if ($('.btn-pepperonni').hasClass("active")) {
  //   $(".pep").hide();
  //   $('.btn-pepperonni').removeClass("active");
  // } else {
  //   $('.btn-pepperonni').addClass("active");
  //   // put em on
  //   $(".pep").show();

  // Nick's Shorter Solutionn
   $('.btn-pepperonni').toggleClass("active");
   $(".pep").toggle();
 });

  $('.btn-mushrooms').click(function(){
  // $('.btn-mushrooms').click(function(){
  // if ($('.btn-mushrooms').hasClass("active")) {
  //   $('.btn-mushrooms').removeClass("active");
  // } else {
  //   $('.btn-mushrooms').addClass("active");
  // }

  $('.btn-mushrooms').toggleClass("active");
  $(".mushroom").toggle();
}); // mushroom

  $('.btn-green-peppers').click(function(){
  // $('.btn-green-peppers').click(function(){
  // if ($('.btn-green-peppers').hasClass("active")) {
  //   $('.btn-green-peppers').removeClass("active");
  // } else {
  //   $('.btn-green-peppers').addClass("active");
  // }

  $('.btn-green-peppers').toggleClass("active");
  $(".green-pepper").toggle();
}); // green-pepper

  $('.btn-sauce').click(function(){
  // $('.btn-sauce').click(function(){
  //   if ($('.btn-sauce').hasClass("active")) {
  //     $('.btn-sauce').removeClass("active");
  //   } else {
  //     $('.btn-sauce').addClass("active");
  // }

  $('.btn-sauce').toggleClass("active");
  $(".sauce").toggle();
}); // sauce

    $('.btn-crust').click(function(){
  // $('.btn-crust').click(function(){
  //   if ($('.btn-crust').hasClass("active")) {
  //     $('.btn-crust').removeClass("active");
  //   } else {
  //     $('.btn-crust').addClass("active");
  //   }

    $('.btn-crust').toggleClass("active");
    $(".crust").toggleClass('crust-gluten-free');

  }); // crust
});
