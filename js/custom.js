$(function () {

    lucide.createIcons();


    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 3000, // 3초마다 슬라이드 전환
            disableOnInteraction: false, // 사용자 조작 후에도 autoplay 유지
        },

        // Navigation arrows
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },

        pagination: {
            clickable: true,
            el: '.main_visual .page',
        },

    });
});


$(function () {
    // Lucide 아이콘 렌더링
    lucide.createIcons();

    // 메인 슬라이드 설정
    const mainSlide = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.page',
            type: 'fraction', // '6 / 6' 형태
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    });

    // 스크롤 다운 클릭 시 이동
    $('.scroll_down a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#content').offset().top
        }, 600);
    });
});


$(function () {
    // Lucide 아이콘 초기화
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const mainInfoSlide = new Swiper('.main_info_slide', {
        loop: true,
        speed: 1000,
        autoplay: false, // 자동 재생 끄기
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.main_info .next',
            prevEl: '.main_info .prev',
        },
    });
});

$(document).ready(function () {
    const $container = $('.scroll-container');
    const $sections = $('.snap-section');
    const $dots = $('.side-indicator a');

    // 1. 스크롤 감지 및 인디케이터 업데이트
    $container.on('scroll', function () {
        let scrollPos = $(this).scrollTop();

        $sections.each(function () {
            let targetTop = $(this).position().top + scrollPos;
            let targetHeight = $(this).outerHeight();
            let id = $(this).attr('id');

            // 섹션이 화면 중간쯤 왔을 때 활성화
            if (scrollPos >= targetTop - (targetHeight / 2)) {
                $dots.removeClass('active');
                $(`.side-indicator a[href="#${id}"]`).addClass('active');
            }
        });
    });

    // 2. 도트 클릭 시 해당 섹션으로 부드럽게 이동
    $dots.on('click', function (e) {
        e.preventDefault();
        let targetId = $(this).attr('href');
        let targetPos = $(targetId).position().top + $container.scrollTop();

        $container.stop().animate({
            scrollTop: targetPos
        }, 600); // 0.6초 동안 부드럽게 이동
    });
});