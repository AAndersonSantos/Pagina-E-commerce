$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            nav:false
        },
        1000:{
            items:5
        }
    }
})