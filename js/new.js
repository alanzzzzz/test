$(function(){

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,


        // �����Ҫǰ�����˰�ť
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on:{
            init: function(){
                swiperAnimateCache(this); //���ض���Ԫ��
                swiperAnimate(this); //��ʼ����ɿ�ʼ����
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //ÿ��slide�л�����ʱҲ���е�ǰslide����
            }
        }
    })




})
































