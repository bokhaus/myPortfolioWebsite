
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
        backDelay: 900, 
        backSpeed: 30, 
    }); 
} 
