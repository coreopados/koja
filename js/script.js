$(document).ready(function () {


    //подгрузка статей
    var num;
    if (window.innerWidth < 991 && window.innerWidth > 800) {
        num = 9
    } else if (window.innerWidth > 991) {
        num = 8
    } else if (window.innerWidth < 800) {
        num = 8
    }





    $('.wrap-posts .post:lt(' + num + ')').addClass('active');

    $('.show-all-posts').on('click', function () {
        event.preventDefault();



        //        if (window.innerWidth < 991 && window.innerWidth > 800) {
        //            num = num + 3
        //        } else if (window.innerWidth > 991) {
        //            num = num + 4
        //        } else if (window.innerWidth < 800) {
        //            num = num + 2
        //        }
        //        $('.wrap-posts .post:lt(' + num + ')').addClass('active ')

        $('.wrap-posts .post').addClass('active');

        if ($('.wrap-posts .post:last').hasClass('active')) {
            $('.show-all-posts').css('visibility', 'hidden')
        }
    })


    //подгрузка видео

    var num2;

    if (window.innerWidth > 800) {
        num2 = 9
    } else if (window.innerWidth <= 800) {
        num2 = 8
    }

    $('.wrap-video__block:lt(' + num2 + ')').addClass('active');

    $('.show-all-videos').on('click', function () {
        event.preventDefault();

        //        if (window.innerWidth > 800) {
        //            num2 = num2 + 3
        //        } else if (window.innerWidth < 800) {
        //            num2 = num2 + 2
        //        }
        //        $('.wrap-video__block:lt(' + num2 + ')').addClass('active ')

        $('.wrap-video__block').addClass('active ')
        if ($('.wrap-video__block:last').hasClass('active')) {
            $('.show-all-videos').css('visibility', 'hidden')
        }
    })

    //подгрузка отзывов 

    var num3 = 3;
    $('.faq__wrap:lt(' + num3 + ')').addClass('active');

    $('.show-all-faq').on('click', function () {
        event.preventDefault()
        //        num3 = num3 + 2
        //        $('.faq__wrap:lt(' + num3 + ')').addClass('active ')


        $('.faq__wrap').addClass('active');

        if ($('.faq__wrap:last').hasClass('active')) {
            $('.show-all-faq').css('visibility', 'hidden')
        }
    })



    $(window).resize(function () {
        if (window.innerWidth < 991 && window.innerWidth > 800) {
            num = 9
        } else if (window.innerWidth > 991) {
            num = 8
        } else if (window.innerWidth < 800) {
            num = 8
        }
        $('.wrap-posts .post').removeClass('active');
        $('.wrap-posts .post:lt(' + num + ')').addClass('active');


        if (window.innerWidth > 800) {
            num2 = 9
        } else if (window.innerWidth <= 800) {
            num2 = 8
        }
        $('.wrap-video__block').removeClass('active');
        $('.wrap-video__block:lt(' + num2 + ')').addClass('active');

    })




    function checkCount() {
        var count = $('.count');
        count.each(function (i, elem) {
            if (+$(elem).text() < 2) {
                $(elem).parent().find('.button-minus').addClass('disabled')
            } else {
                $(elem).parent().find('.button-minus').removeClass('disabled')
            }
        })
    }

    checkCount()

    $('.add-cart-button').on('click', function () {
        var allcount = 0;
        $(this).hide()
            .next().hide()
            .parent().find('.order-button').show()
            .parent().parent().find('.count').addClass('ordered')
            .parent().parent().find('.wrap-count').addClass('events-none')

        $('.cart a .text-cart').text('Товаров в корзине')

        $('.count.ordered').each(function (i, elem) {
            allcount += +$(elem).text()
        })

        $('.count-cart').text(allcount)
            .addClass('active')
    })



    $('.change-count').on('click', function () {
        var allcount = 0;
        var currentCount = +$(this).parent().find('.count').text()
        checkCount();
        if ($(this).hasClass('button-minus') && currentCount > 1) {

            currentCount = +$(this).parent().find('.count').text()
            currentCount--;
            $(this).parent().find('.button-minus').removeClass('disabled')
            $('.count-cart').text(allcount)
        } else if ($(this).hasClass('button-minus') && currentCount < 2) {
            currentCount = +$(this).parent().find('.count').text()
            currentCount = currentCount
        } else {
            currentCount = +$(this).parent().find('.count').text()
            currentCount++;
            $(this).parent().find('.button-minus').removeClass('disabled')
        }
        if (currentCount < 2) {
            $(this).addClass('disabled')
        }

        $(this).parent().find('.count').text(currentCount)

    })


    $('.garantee a').on('click', function () {
        event.preventDefault();
        $('.layer, .popup-garantee').fadeIn()
    })
    $('.layer, .close-popup').on('click', function () {
        event.preventDefault();
        $('.layer, .popup').fadeOut()
    })


    $('.owl-carousel').owlCarousel({
        // loop: true,
        nav: true,
        items: 1,

    })


    $('.stars').raty({
        // readOnly: true,
        start: 5
    });
});
let inputEmailEmpty = document.getElementById('email-label');
let inputTextareaEmpty = document.getElementById('ask');
let regexpEmail = /.@.+\.+./;
let regexpTextarea = /\w/;

inputEmailEmpty.addEventListener('input', inputEmail);
inputTextareaEmpty.addEventListener('input', inputTextarea);

function inputEmail(e) {
    let res = regexpEmail.test(e.target.value);
    if (res) {
        e.target.nextElementSibling.classList.add('active');
        console.log('work')

    } else {
        e.target.nextElementSibling.classList.remove('active');
        console.log(' not work')
    }
}


function inputEmail(e) {
    let res = regexpEmail.test(e.target.value);
    if (res) {
        e.target.nextElementSibling.classList.remove('active');
    } else {
        e.target.nextElementSibling.classList.add('active');
    }
}

function inputTextarea(e) {
    let res = regexpTextarea.test(e.target.value);
    if (res) {
        e.target.nextElementSibling.classList.remove('active');
    } else {
        e.target.nextElementSibling.classList.add('active');
    }
}



$('form').submit(function () {

    if ($('.error-field').hasClass('active')) {
        event.preventDefault();
        console.log('error')
    } else {
        console.log('send')
    }
})

window.addEventListener('load', function () {
    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            console.log("1") // Chrome
        } else {
            Array.prototype.forEach.call(document.querySelectorAll('.section-4 .form-wrap form .form-bottom .button-wrap input[type="submit"]'), function (e) {
                e.style.paddingTop = '5px';
            });
        }
    }

});