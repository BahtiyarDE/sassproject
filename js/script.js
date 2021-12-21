$(".slider").slick({
    slidesToShow: 3,
    response: [
        {
            breakpoints: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
                autoplay: true
            }
        },
        {
            breakpoints: 541,
            settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: true
            }
        },
    ]
})