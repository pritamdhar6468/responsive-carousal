var testimonials=document.getElementById('testimonials');
var controls1=document.getElementById('controls1');
var controls2=document.getElementById('controls2');
var controls3=document.getElementById('controls3');

controls1.onclick=function(){
    testimonials.style.transform="translateX(870px)";
    controls1.classList.add("active");
    controls2.classList.remove("active");
    controls3.classList.remove("active");
}

controls2.onclick=function(){
    testimonials.style.transform="translateX(0px)";
    controls1.classList.remove("active");
    controls2.classList.add("active");
    controls3.classList.remove("active");
}

controls3.onclick=function(){
    testimonials.style.transform="translateX(-870px)";
    controls1.classList.remove("active");
    controls2.classList.remove("active");
    controls3.classList.add("active");
}