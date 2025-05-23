jQuery(function ($) {
    
    
    $('.ancla_top').click(function () {
        var mi_ancla = $("#content_header").height();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - mi_ancla
                }, 2500);
                return false;
            }
        }
    });

    $(".wpcf7-validates-as-required").before('<span class="requerido">*</span>');

   


    $("#menu").on('click', function (e) {
        e.preventDefault();
        var $access = $('#access');
        var $menu = $(this);
        
        if ($access.hasClass('acc_off')) {
            $access.removeClass('acc_off').addClass('acc_on').slideDown("slow");
            $menu.removeClass('off').addClass('on');
        } else {
            $access.removeClass('acc_on').addClass('acc_off').slideUp("slow");
            $menu.removeClass('on').addClass('off');
        }
    });

    dect_w();




});

$(window).scroll(function (event) {

    let scrollTop = $(window).scrollTop();
    if (scrollTop > 1) {
        $('#content_header').addClass('header_fix');

    } else {
        $('#content_header').removeClass('header_fix');

    }


});

function dect_w() {
    let e = $("body").width();
    let padding_top = $("#content_header").height();
    let h_serv = $("#list_sevicios").height();
    let alto = $(window).height();
    let img_h = $('.img_mb').height();
$('#slider_home').css('margin-top', padding_top + 'px');
    $('.padding_top').css('padding-top', padding_top + 'px');

    //$('#slider_home').css('height', alto  + 'px');

    if (e <= 1024) {
        
       
        




    } else {

    }


}

$(window).on("load", function () {
    dect_w();

});

$(window).resize(function (event) {
    dect_w();
});

// FUNCION PARA CARGAR PAGINAS
function paginas(url, id_contenedor) {
    let pagina_requerida = false;
    if (window.XMLHttpRequest) {
        // Si es Mozilla, Safari etc
        pagina_requerida = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // pero si es IE
        try {
            pagina_requerida = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            // en caso que sea una versiÃƒÂ³n antigua
            try {
                pagina_requerida = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    } else
        return false;
    pagina_requerida.onreadystatechange = function () {
        // funciÃƒÂ³n de respuesta
        cargarpagina(pagina_requerida, id_contenedor);
    }
    pagina_requerida.open('GET', url, true); // asignamos los mÃƒÂ©todos open y send
    pagina_requerida.send(null);
}
// todo es correcto y ha llegado el momento de poner la informaciÃƒÂ³n requerida
// en su sitio en la pagina xhtml
function cargarpagina(pagina_requerida, id_contenedor) {
    if (pagina_requerida.readyState == 4 && (pagina_requerida.status == 200 || window.location.href.indexOf("http") == -1))
        document.getElementById(id_contenedor).innerHTML = pagina_requerida.responseText;
}