//позволяет убедиться в том, что сначала загрузится html, а потом js(именно $)
$(function(){

    $('.slider__inner, .news__slider-inner' ).slick({
        //изменения кнопок переключения на слайдере
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false, //убрали бесконечное зацикливание
    });
    $('select').styler({

    });

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    })

  

});