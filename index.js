// function myFunction() {
//   var x = document.getElementById("#mobileMenu");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


// function myFunction() {
//     var x = document.getElementsById("#mobileMenu");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

//   function myFunction(x) {
//     x.classList.display("#mobileMenu");
//   };

// $('#mobileMenu').on("click" , function(){
//     $(this).display(block);
// });



// function myFunction() {
//   nav = document.getElementsByClassName(".mobile-container");
//   body = document.body;

//   nav.addEventListener('click' , function(e))
// }

// function myFunction() {
//   document.getElementsByClassName(".mobile-container").style.display = "block";
//   document.getElementsByClassName(".mobile-container").style.display = "block";
// }

// $('#mobileMenu').on("click" , function(){
//   $(this).toggle("#mobileMenu");
//   $('.mobileNav').css("dispay" , "block");
// });

// function myFunction() {
//   var x = document.getElementsByClassName('.mobile-container');
// }

// function openNav() {
//   document.getElementById("#mobileMenu").style.width = "100%";
// }

// function closeNav() {
//   document.getElementById("#mobileMenu").style.width = "0%";
// }

// $('#mobileMenu').on("click" , function(){
//   $(this).display("block");
// });

$('#tabContainer').on("click" , function(){
  
  $('.mobile-container').addClass("active");
  $('#mobileMenu').css("display" , "block");


});





  function myFunction(x) {
    x.classList.toggle(".change");
  }