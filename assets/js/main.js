document.addEventListener("DOMContentLoaded", function() {
    new SweetScroll({});
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "polygon",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .5,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 19.18081918081918,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#ffffff",
                opacity: .4,
                width: 1
            },
            move: {
                enable: !0,
                speed: 4,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            nb: 80
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: !1,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    }),
    $("#contact-form").validator();
    var e = function(e, t, a) {
        var n = '<div class="alert ' + e + ' alert-dismissable">                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + t + "</div>";
        $("#" + a).html(n)
    };
    $("#contact-form").on("submit", function(t) {
        if (!t.isDefaultPrevented()) {
            var a = new Object;
            return a.name = $("#name").val(),
            a.email = $("#email").val(),
            a.budget = $("#budget").val(),
            a.message = $("#message").val(),
            a.privacy = $("#privacy").val(),
            a.lang = document.documentElement.lang,
            $.ajax({
                type: "POST",
                url: "https://2ck1xfxzi1.execute-api.eu-west-1.amazonaws.com/prod",
                contentType: "application/json",
                data: JSON.stringify(a),
                success: function(t) {
                    var a = "alert-" + t.type
                      , n = t.message;
                    e(a, n, "contact-result"),
                    $("#contact-form")[0].reset()
                },
                error: function(t) {
                    e("alert-danger", "Your message could not be sent. Please try again.<br>If the problem persists, please do not hesitate to send an email to dh@davidhamann.de", "contact-result")
                }
            }),
            !1
        }
    })
}, !1);
