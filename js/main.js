$(function () {
    // track all clicks on the page
    // $(document).on('click', function (e) {
    //     // get the target of the click
    //     console.log(e.target.matches('[data-expand]'));
    // });

    function serviceBgControl() {
        let width = $(window).width();
        if (width <= 360) {
            width = 360;
        }
        let obj = $('.services');
        let height = obj.height();
        let curveDepth = width * 0.03;

        obj.css(
            'clip-path',
            `path('m 0 0 Q ${width / 2} ${curveDepth * 2} ${width + 1} 0 V${height + curveDepth} H 0 Z')`
        );
        obj.css('margin-top', `-${curveDepth}px`);
        obj.css('padding-top', `${curveDepth}px`);
    }
    $(window).on('resize', serviceBgControl);
    serviceBgControl();

    // form logic for the contact form
    (function formLables() {
        let field = $('.form__box');
        field.on('click', function () {
            field.each(function () {
                let input = $(this).children('textarea , input');
                if (input.val() == '' && !input.is(':focus')) {
                    $(this).removeClass('active');
                }
            });

            $(this).addClass('active');

            setTimeout(() => {
                field.each(function () {
                    let input = $(this).children('textarea , input');
                    if (input.val() == '' && !input.is(':focus')) {
                        $(this).removeClass('active');
                    }
                });
            }, 3000);
        });
        $(document).on('click', function (e) {
            if (!e.target.matches('.form__box')) {
                field.each(function () {
                    let input = $(this).children('textarea , input');
                    if (input.val() == '' && !input.is(':focus')) {
                        $(this).removeClass('active');
                    }
                });
            }
        });
    })();

    (function rocket() {
        let rocket = document.querySelector('#rocket');
        const thresholdValues = [];
        for (let i = 0; i <= 1; i += 0.01) {
            thresholdValues.push(parseFloat(i.toFixed(2)));
        }
        // set the intersection observer for rocket
        let observer = new IntersectionObserver(
            function (entries) {
                entries.forEach((entry) => {
                    // Get the percentage of the target element that is visible
                    const visiblePercentage = Math.round(entry.intersectionRatio * 100);
                    rocketFly(visiblePercentage);
                    // Log the percentage to the console
                });
            },
            { threshold: thresholdValues }
        );
        observer.observe(rocket);

        function rocketFly(percentage) {
            if (percentage >= 98) {
                observer.unobserve(rocket);
            }

            let val = (60 / 100) * percentage;
            rocket.style.transform = `perspective(200px) translate3d(0, ${60 - val}%, -${60 - val}px)`;
        }
    })();

    let menuOpen = false;
    $('.header__menu-btn').on('click', function () {
        $('.header__menu').toggleClass('active');
        $('.header__menu-btn').toggleClass('active');

        if (!menuOpen) {
            $('body').css('overflow', 'hidden');
            menuOpen = true;
            //scroll to top
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        } else {
            $('body').css('overflow', 'auto');
            menuOpen = false;
        }
    });
    $('.header__menu-item--children').on('click', function (e) {
        // prevent bubbling
        e.stopPropagation();
        let neededEl = e.target.parentElement.classList.contains('header__menu-item--children');
        if (neededEl) {
            $(this).toggleClass('show');
        }
    });
    $('.header__menu-item a').on('click', function (e) {
        if (menuOpen) {
            $('body').css('overflow', 'auto');
            $('.header__menu').toggleClass('active');
            $('.header__menu-btn').toggleClass('active');

            menuOpen = false;
        }
    });

    $('.lang-dropdown').on('click', function (e) {
        $(this).toggleClass('show');
    });

    particlesJS(
        'particles-js',

        {
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: '#aa9768',
                },
                shape: {
                    type: 'polygon',
                    stroke: {
                        width: 0,
                        color: '#aa9768',
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 350,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab',
                    },
                    onclick: {
                        enable: true,
                        mode: 'push',
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
            config_demo: {
                hide_card: false,
                background_color: '#b61924',
                background_image: '',
                background_position: '50% 50%',
                background_repeat: 'no-repeat',
                background_size: 'cover',
            },
        }
    );

    var acc = document.getElementsByClassName('accordion__item');
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
        acc[i].nextElementSibling.style.maxHeight = acc[i].nextElementSibling.scrollHeight + 'px';
    }
});
