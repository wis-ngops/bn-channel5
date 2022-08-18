$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  margin:2,
  loop:true,
  autoWidth:true,
  nav:true,
  autoplay:true,
  responsiveClass:true,
  autoplayTimeout:4000,
})

$('#datepicker').datepicker('show');

var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
