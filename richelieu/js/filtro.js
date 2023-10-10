$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let certi = $('#certi').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let certi = $('#certi').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-home').on('click', function(e){
        e.location.href = "index.html";
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });
/*
    $('#enlace-cursos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });
*/
    $('#enlace-cursos').on('click', function(e){
        e.location.href = "equipo.html";
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });

    $('#enlace-inscripcion').on('click', function(e){
        e.location.href = "servicio.html";
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio -100
        },600);
    });

    $('#enlace-trabajo').on('click', function(e){
        e.location.href = "trabajo.html";
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});