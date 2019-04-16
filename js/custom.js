$("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({
    overflow: "visible"
}), $(window).on("scroll", function() {
    $(window).scrollTop() >= 50 ? $(".sticky").addClass("stickyadd") : $(".sticky").removeClass("stickyadd")
}), $(".navbar-nav a, .scroll_down a").on("click", function(e) {
    var t = $(this);
    $("html, body").stop().animate({
        scrollTop: $(t.attr("href")).offset().top - 0
    }, 1500, "easeInOutExpo"), e.preventDefault()
}), $("#navbarCollapse").scrollspy({
    offset: 20
});
var a = 0;
$(window).on("scroll", function() {
    var e = $("#work").offset().top - window.innerHeight;
    0 == a && $(window).scrollTop() > e && ($(".lan_fun_value").each(function() {
        var e = $(this),
            t = e.attr("data-count");
        $({
            countNum: e.text()
        }).animate({
            countNum: t
        }, {
            duration: 2e3,
            easing: "swing",
            step: function() {
                e.text(Math.floor(this.countNum))
            },
            complete: function() {
                e.text(this.countNum)
            }
        })
    }), a = 1)
}), $(window).on("load", function() {
    var e = $(".work-filter"),
        t = $("#menu-filter");
    e.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    }), t.find("a").on("click", function() {
        var o = $(this).attr("data-filter");
        return t.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({
            filter: o,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
}), $(".img-zoom").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
    }
}), $("#owl-demo").owlCarousel({
    autoPlay: 7e3,
    stopOnHover: !0,
    navigation: !1,
    paginationSpeed: 1e3,
    goToFirstSpeed: 2e3,
    singleItem: !0,
    autoHeight: !0
}), $(window).on("scroll", function() {
    $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), $(".back_top").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3), !1
}), $(".element").each(function() {
    var e = $(this);
    e.typed({
        strings: e.attr("data-elements").split(","),
        typeSpeed: 100,
        backDelay: 3e3
    })
}), $("body").bind("cut copy paste", function(e) {
    e.preventDefault()
}), window.onload = function() {
    function e(e) {
        return e.stopPropagation ? e.stopPropagation() : window.event && (window.event.cancelBubble = !0), e.preventDefault(), !1
    }
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault()
    }, !1), document.addEventListener("keydown", function(t) {
        t.ctrlKey && t.shiftKey && 73 == t.keyCode && e(t), t.ctrlKey && t.shiftKey && 74 == t.keyCode && e(t), 83 == t.keyCode && (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) && e(t), t.ctrlKey && 85 == t.keyCode && e(t), 123 == event.keyCode && e(t)
    }, !1)
};
$(".element").each(function() {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000
    });
}, $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
}));

//Tooltip
$('[data-toggle="tooltip"]').tooltip();

//Contact Form
$('#contact-form').on('submit', function (e) {
    e.preventDefault();
    var url = "ajax/sendmail.php";
    $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (response) {
            var message;
            if(response.code === 1) {
                message = '<div class="alert alert-success alert-dismissible" role="alert">\n'
                    + response.message + '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
                    '    <span aria-hidden="true">&times;</span>\n' +
                    '  </button>\n' +
                    '</div>';
            } else if(response.code === 2) {
                message = '<div class="alert  alert-danger alert-dismissible" role="alert">\n'
                    + response.message + '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
                    '    <span aria-hidden="true">&times;</span>\n' +
                    '  </button>\n' +
                    '</div>';
            } else if(response.code === 3) {
                message = '<div class="alert alert-danger alert-dismissible" role="alert">\n'
                    + response.message + '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
                    '    <span aria-hidden="true">&times;</span>\n' +
                    '  </button>\n' +
                    '</div>';
            }
            $('form#contact-form>div.alert').remove();
            $('form#contact-form').prepend(message);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            var message = '<div class="alert alert-danger alert-dismissible" role="alert">\n'+
                'An error occured kindly retry' + '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
                '    <span aria-hidden="true">&times;</span>\n' +
                '  </button>\n' +
                '</div>';
            $('form#contact-form>div.alert').remove();
            $('form#contact-form').prepend(message);
        }
    });
});
