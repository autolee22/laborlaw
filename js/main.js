$(function () {

    const sliderElement = document.querySelector('#mainSlider');

    if (sliderElement) {
        const mainSlider = new bootstrap.Carousel(sliderElement, {
            interval: 4000,
            ride: 'carousel',
            wrap: true,
            pause: false
        });

        $('.carousel-control-prev').on('click', function (e) {
            e.preventDefault();
            mainSlider.prev();
        });

        $('.carousel-control-next').on('click', function (e) {
            e.preventDefault();
            mainSlider.next();
        });
    }

    // PC: 메뉴에 마우스를 올리면 전체 메가 메뉴 열림, 벗어나면 닫힘
    const $topNav = $('.top-nav');
    let megaTimer = null;

    function openMegaMenu() {
        if (window.innerWidth <= 991) return;
        clearTimeout(megaTimer);
        $topNav.addClass('mega-active');
        $('.mega-trigger .nav-link').addClass('mega-open');
    }

    function closeMegaMenu() {
        if (window.innerWidth <= 991) return;
        megaTimer = setTimeout(function () {
            $topNav.removeClass('mega-active');
            $('.mega-trigger .nav-link').removeClass('mega-open');
        }, 120);
    }

    $('.mega-trigger, .mega-menu-wrap').on('mouseenter', openMegaMenu);
    $topNav.on('mouseleave', closeMegaMenu);

    // 모바일: 소개 메뉴 터치 시 메가 메뉴 열고 닫기
    $('.mega-trigger > .nav-link').on('click', function (e) {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            $topNav.toggleClass('mega-active');
        }
    });

    $('#btnConsultSubmit').on('click', function () {

        const userName = $('#userName').val().trim();
        const userPhone = $('#userPhone').val().trim();
        const consultType = $('#consultType').val();
        const consultContent = $('#consultContent').val().trim();
        const privacyAgree = $('#privacyAgree').is(':checked');

        if (!userName) {
            alert('성명을 입력하세요.');
            $('#userName').focus();
            return;
        }

        if (!userPhone) {
            alert('연락처를 입력하세요.');
            $('#userPhone').focus();
            return;
        }

        if (!consultType) {
            alert('상담 분야를 선택하세요.');
            $('#consultType').focus();
            return;
        }

        if (!consultContent) {
            alert('상담 내용을 입력하세요.');
            $('#consultContent').focus();
            return;
        }

        if (!privacyAgree) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
            $('#privacyAgree').focus();
            return;
        }

        const consultData = {
            userName: userName,
            userPhone: userPhone,
            consultType: consultType,
            consultContent: consultContent
        };

        console.log('상담 신청 데이터:', consultData);

        alert('상담 신청이 접수되었습니다.');

        $('#consultForm')[0].reset();

        const modalElement = document.getElementById('consultModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
    });

});
