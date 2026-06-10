$(function () {

    const sliderElement = document.querySelector('#mainSlider');

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