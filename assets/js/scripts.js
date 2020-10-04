
// Toggle Sidebar
function toggleMenu(){
    var sidebar = document.querySelector('.sidebar');
    var toggle = document.querySelector('.toggle');
    sidebar.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Type.JS
if ($(".text-slider").length == 1) { 
              
    var typed_strings =  
        $(".text-slider-items").text(); 

    var typed = new Typed(".text-slider", { 
        strings: typed_strings.split(", "), 
        typeSpeed: 70, 
        
        loop: true, 
        backDelay: 1500, 
        backSpeed: 30, 
    }); 
} 

// Scroll to top button
//Get the button
var mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}