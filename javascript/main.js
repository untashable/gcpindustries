window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display = "none";
    }, 1000);    
}) 

/** First Slider */

$('.slider-one')
.not('.slick-initialized')
.slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots: true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});


/** Second Slider */

$(".slider-two")
.not(".slick-initialized")
.slick({
    prevArrow:".site-slider-two .slider-btn .prev",
    nextArrow:".site-slider-two .slider-btn .next",
    slidesToShow: 5,
    slidesToScroll:1,
    autoplaySpeed:3000

});