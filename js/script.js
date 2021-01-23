$(document).ready(function() {
    let conteinerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(conteinerA, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);
            circle.setText(value);
        }

    });

    let conteinerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(conteinerB, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 240);
            circle.setText(value);
        }

    });

    let conteinerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(conteinerC, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);
            circle.setText(value);
        }

    });

    let conteinerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(conteinerD, {

        color: '#64DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243);
            circle.setText(value);
        }

    });


    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 500) && (stop == 0)) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        }
    });


    setTimeout(function() {
        $('#data-area').parallax({ imageSrc: 'img/cidadeparallax.png' });
        $('#apply-area').parallax({ imageSrc: 'img/pattern.png' });
    }, 250)


    $('.filter-btn').on('click', function() {
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');
    });




});