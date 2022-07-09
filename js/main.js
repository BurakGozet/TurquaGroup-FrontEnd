$(window).scroll(function() {
    var $height = $(window).scrollTop();
    if($height > $('.about-animation-img').offset().top-400 && $height < $('.about-animation-img').offset().top) {
        $('.about-img1').addClass('about-anim1');
        $('.about-img2').addClass('about-anim2');
        $('.about-img3').addClass('about-anim3');
    }
    if($height > $('.universtiy-section').offset().top-600 && $height < $('.universtiy-section').offset().top) {
        $('.university-item img').each(function(a,item){
            $(item).attr('style','animation-duration: 1.5s; animation-delay: 0s;animation-name: bounceInUp;');
        });
    }
    if($height > $('.teachers-section').offset().top-800 && $height < $('.teachers-section').offset().top) {
        $('.university-item img').each(function(a,item){
            $($('.teachers-area')[0]).attr('style','animation-duration: 1.5s; animation-delay: 0s;animation-name: bounceInLeft;');
            $($('.teachers-area')[1]).attr('style','animation-duration: 1.5s; animation-delay: 0s;animation-name: bounceInLeft;');
            
            $($('.teachers-area')[2]).attr('style','animation-duration: 1.5s; animation-delay: 0s;animation-name: bounceInRight;');
            $($('.teachers-area')[3]).attr('style','animation-duration: 1.5s; animation-delay: 0s;animation-name: bounceInRight;');
        });
    }
    if($height > $('.gallery-section').offset().top-200 && $height < $('.gallery-section').offset().top) {
        $('.gallery-img img').each(function(a,item){
            $(item).attr('style','animation-duration: 1.5s; animation-delay: 0s;animation-name: zoomIn;');
        });
    }
});